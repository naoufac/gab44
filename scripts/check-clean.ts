// Rule 9 — build-time link integrity guard.
// Runs after `astro build`. Greps `dist/` recursively for forbidden patterns.
// Positive match → exit 1 (deploy aborts).
//
// Forbidden in served HTML/CSS/JS/sitemap/meta:
//   nao_00 | nao00 | nao-00 | nao44 | minouch | mistral | council | workers.dev | powered by nao
//
// Astrology pages may legitimately use the word "council" as a generic English noun.
// During data ingestion we rewrite those occurrences. By the time we reach `dist/`,
// any remaining hit is a leak and must block the deploy.

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

const FORBIDDEN = [
  'nao_00',
  'nao00',
  'nao-00',
  'nao44',
  'minouch',
  'mistral',
  'council',
  'workers.dev',
  'powered by nao',
]

// CASE-INSENSITIVE — matches Naoufal's pass criterion (`grep -i`)
const PATTERN = new RegExp(FORBIDDEN.map(s => s.replace(/[.+*?^$()[\]{}|\\]/g, '\\$&')).join('|'), 'gi')

const TEXT_EXT = new Set(['.html', '.htm', '.css', '.js', '.mjs', '.cjs', '.xml', '.txt', '.json', '.svg', '.webmanifest'])

let scanned = 0
const hits: Array<{ file: string; line: number; text: string; match: string }> = []

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    const st = statSync(p)
    if (st.isDirectory()) {
      walk(p)
      continue
    }
    if (!TEXT_EXT.has(extname(entry).toLowerCase())) continue
    scanned++
    const content = readFileSync(p, 'utf8')
    PATTERN.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = PATTERN.exec(content)) !== null) {
      // find the line
      const before = content.slice(0, m.index)
      const line = before.split('\n').length
      const lineText = content.split('\n')[line - 1] || ''
      hits.push({ file: p.slice(DIST.length + 1), line, text: lineText.slice(0, 200), match: m[0] })
    }
  }
}

walk(DIST)

if (hits.length === 0) {
  console.log(`[check-clean] PASS — scanned ${scanned} files in dist/, zero forbidden matches.`)
  process.exit(0)
}

console.error(`[check-clean] FAIL — ${hits.length} forbidden match(es) in dist/ (scanned ${scanned} files):`)
for (const h of hits.slice(0, 30)) {
  console.error(`  ${h.file}:${h.line}  [${h.match}]  ${h.text}`)
}
if (hits.length > 30) console.error(`  ... and ${hits.length - 30} more`)
console.error('\nDeploy aborted. Fix the source or update the ingestion strip.')
process.exit(1)
