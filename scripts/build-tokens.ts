// Reads design/tokens.yaml (3-tier) and emits:
//   src/styles/tokens.css         — CSS custom properties for the website
//   src/lib/email-tokens.ts       — resolved values for email templates (inline-style)
//   src/lib/og-tokens.ts          — resolved values for OG card SVG generator
//
// Tier 1 = primitives (literal values).
// Tier 2 = semantic (references like "tier1.color.coral").
// Tier 3 = surface (references like "tier2.accent.primary" or "tier1.color.x").
//
// Build-time resolution: every value gets walked to a primitive before output.
// Editing tier1 cascades to tier2 + tier3 + every surface.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const TOKENS_PATH = join(ROOT, 'design/tokens.yaml')
const CSS_OUT = join(ROOT, 'src/styles/tokens.css')
const EMAIL_OUT = join(ROOT, 'src/lib/email-tokens.ts')
const OG_OUT = join(ROOT, 'src/lib/og-tokens.ts')

type TokenTree = Record<string, any>

function resolveRef(value: unknown, root: TokenTree, seen: Set<string> = new Set()): unknown {
  if (typeof value !== 'string') return value
  // refs look like "tier1.color.coral" — dotted path, must start with "tier"
  if (!/^tier[123]\./.test(value)) return value
  if (seen.has(value)) throw new Error(`token cycle: ${value}`)
  seen.add(value)
  const parts = value.split('.')
  let node: any = root
  for (const p of parts) {
    if (node == null || typeof node !== 'object') {
      throw new Error(`token ref miss: ${value} (stopped at ${p})`)
    }
    node = node[p]
  }
  if (node === undefined) throw new Error(`token ref miss: ${value}`)
  return resolveRef(node, root, seen)
}

function walkAndResolve(node: any, root: TokenTree): any {
  if (node == null) return node
  if (typeof node === 'string') return resolveRef(node, root)
  if (typeof node !== 'object') return node
  const out: any = Array.isArray(node) ? [] : {}
  for (const k of Object.keys(node)) {
    out[k] = walkAndResolve(node[k], root)
  }
  return out
}

function flattenForCss(node: any, prefix: string[] = []): Array<[string, string]> {
  const acc: Array<[string, string]> = []
  if (node == null) return acc
  if (typeof node !== 'object') {
    // CSS var names: dashes only — replace any underscores in path segments
    const key = prefix.join('-').replace(/_/g, '-')
    acc.push([key, String(node)])
    return acc
  }
  for (const k of Object.keys(node)) {
    acc.push(...flattenForCss(node[k], [...prefix, k]))
  }
  return acc
}

function ensureDir(p: string) {
  mkdirSync(dirname(p), { recursive: true })
}

function emitCss(resolved: TokenTree) {
  // Emit ALL three tiers as CSS custom properties.
  // Pages should consume tier3 (surface) custom props for ergonomics,
  // but tier1 + tier2 are available too for one-offs.
  const t1 = flattenForCss(resolved.tier1, ['t1'])
  const t2 = flattenForCss(resolved.tier2, ['t2'])
  const t3 = flattenForCss(resolved.tier3, ['t3'])
  const lines: string[] = []
  lines.push('/* GENERATED — do not edit. Source: design/tokens.yaml. Regenerate: npm run tokens */')
  lines.push(':root {')
  // Tier 1
  lines.push('  /* tier1 — brand primitives */')
  for (const [k, v] of t1) lines.push(`  --${k}: ${v};`)
  lines.push('  /* tier2 — semantic */')
  for (const [k, v] of t2) lines.push(`  --${k}: ${v};`)
  lines.push('  /* tier3 — surface */')
  for (const [k, v] of t3) lines.push(`  --${k}: ${v};`)
  lines.push('}')
  // brand exports as data attrs for runtime access if ever needed
  ensureDir(CSS_OUT)
  writeFileSync(CSS_OUT, lines.join('\n') + '\n', 'utf8')
  return { t1: t1.length, t2: t2.length, t3: t3.length }
}

function emitTs(filename: string, exportName: string, tierData: any) {
  const lines: string[] = []
  lines.push('// GENERATED — do not edit. Source: design/tokens.yaml. Regenerate: npm run tokens')
  lines.push(`export const ${exportName} = ${JSON.stringify(tierData, null, 2)} as const`)
  ensureDir(filename)
  writeFileSync(filename, lines.join('\n') + '\n', 'utf8')
}

function main() {
  const raw = readFileSync(TOKENS_PATH, 'utf8')
  const parsed = YAML.parse(raw) as TokenTree
  if (!parsed.tier1 || !parsed.tier2 || !parsed.tier3) {
    throw new Error('tokens.yaml must have tier1, tier2, tier3 keys')
  }
  const resolved = walkAndResolve(parsed, parsed) as TokenTree

  const cssStats = emitCss(resolved)
  emitTs(EMAIL_OUT, 'EMAIL_TOKENS', resolved.tier3.email)
  // also expose tier1+tier2 from email module for ergonomic inline-style helpers
  // BRAND export for email subject lines / from-name
  const emailExtraLines: string[] = []
  emailExtraLines.push('')
  emailExtraLines.push('// brand metadata for email templates (subject, from-name, footer)')
  emailExtraLines.push(`export const BRAND = ${JSON.stringify(resolved.tier1.brand, null, 2)} as const`)
  // Also expose semantic tier so email templates can pick any token without going through tier3.email
  emailExtraLines.push('')
  emailExtraLines.push(`export const SEMANTIC_TOKENS = ${JSON.stringify(resolved.tier2, null, 2)} as const`)
  emailExtraLines.push('')
  emailExtraLines.push(`export const PRIMITIVE_TOKENS = ${JSON.stringify(resolved.tier1, null, 2)} as const`)
  writeFileSync(EMAIL_OUT, readFileSync(EMAIL_OUT, 'utf8') + emailExtraLines.join('\n') + '\n', 'utf8')

  emitTs(OG_OUT, 'OG_TOKENS', resolved.tier3.og)
  writeFileSync(OG_OUT, readFileSync(OG_OUT, 'utf8') + `\nexport const OG_BRAND = ${JSON.stringify(resolved.tier1.brand, null, 2)} as const\n`, 'utf8')

  console.log(`tokens built — css: t1=${cssStats.t1} t2=${cssStats.t2} t3=${cssStats.t3} | email + og emitted`)
}

main()
