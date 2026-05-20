// Zodiac compatibility pages — /gab44/compatibility/{sign1}-{sign2}.
// 78 unique unordered pairs (12 same-sign + 66 different) × $9 reading CTA.
// Canonical order is zodiacal (aries < taurus < … < pisces). A request in
// reverse order returns a 301 to the canonical pair so SEO consolidates.
// MiniMax-generated, KV-cached for 14 days (compat reads are evergreen).

import { SITE_URL } from '@/lib/identity'
import { SIGNS, isValidSign, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'

interface CompatEnv {
  MINIMAX_API_KEY: string
  KV: KVNamespace
}

const ELEMENT_ACCENT: Record<'fire' | 'earth' | 'air' | 'water', { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Canonical order: zodiacal (aries first, pisces last).
function signIndex(s: Sign): number {
  return (SIGNS as readonly string[]).indexOf(s)
}

export function canonicalPair(a: Sign, b: Sign): { canonical: string; isCanonical: (x: Sign, y: Sign) => boolean; first: Sign; second: Sign } {
  const swap = signIndex(a) > signIndex(b)
  const first = swap ? b : a
  const second = swap ? a : b
  return {
    canonical: `${first}-${second}`,
    isCanonical: (x, y) => signIndex(x) <= signIndex(y),
    first,
    second
  }
}

export function parsePairSlug(slug: string): { ok: boolean; first?: Sign; second?: Sign; raw?: [string, string] } {
  if (!slug) return { ok: false }
  const parts = slug.toLowerCase().split('-')
  if (parts.length !== 2) return { ok: false }
  const [a, b] = parts
  if (!isValidSign(a) || !isValidSign(b)) return { ok: false, raw: [a, b] }
  return { ok: true, first: a as Sign, second: b as Sign, raw: [a, b] }
}

export function ALL_PAIRS(): string[] {
  const out: string[] = []
  for (let i = 0; i < SIGNS.length; i++) {
    for (let j = i; j < SIGNS.length; j++) {
      out.push(`${SIGNS[i]}-${SIGNS[j]}`)
    }
  }
  return out  // 78 unique unordered pairs
}

// ─── Compat content generation ──────────────────────────────────────────────

interface CompatReading {
  pair: string
  first: Sign
  second: Sign
  spark: string         // what lights up between you
  friction: string      // where it grinds
  strength: string      // the underrated gift
  move: string          // one practical move this week
  source: string
  generated_at: string
  cached: boolean
}

const SYSTEM_PROMPT = `You are gab44 — Naoufal's warm modern astrology voice.

Write a zodiac compatibility note for two signs. Output STRICT JSON, four keys:
{
  "spark": "...",      // 1-2 sentences — what naturally lights up between these two
  "friction": "...",   // 1-2 sentences — where it grinds, said with kindness
  "strength": "...",   // 1-2 sentences — the underrated gift this combo carries
  "move": "..."        // 1 sentence — one concrete practical move this week
}

Style: warm, specific, modern. Like a sweet friend texting. No "the planets align"
filler. No emojis. No headers. Refer to "you two" or "this combo", never name the
signs explicitly (the layout shows the names already).

Output ONLY the JSON object. No code fences. No prose around it.`

function tryParseJson(s: string): { parsed: any | null; error?: string } {
  // MiniMax sometimes wraps JSON in fences or trailing text. Strip both.
  const cleaned = s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  if (start === -1) return { parsed: null, error: 'no opening brace' }
  if (end === -1 || end <= start) return { parsed: null, error: 'no closing brace (likely truncated)' }
  try {
    return { parsed: JSON.parse(cleaned.slice(start, end + 1)) }
  } catch (e: any) {
    return { parsed: null, error: 'JSON.parse: ' + (e?.message || 'unknown').slice(0, 60) }
  }
}

export async function generateCompat(
  a: Sign,
  b: Sign,
  env: CompatEnv,
  forceFresh = false
): Promise<CompatReading> {
  const { canonical, first, second } = canonicalPair(a, b)
  const key = `gab44:compat:v1:${canonical}`

  if (!forceFresh) {
    const hit = await env.KV.get(key)
    if (hit) {
      try {
        const parsed = JSON.parse(hit) as CompatReading
        return { ...parsed, cached: true }
      } catch { /* fall through */ }
    }
  }

  const userPrompt = `Compatibility note for ${first} (${ZODIAC_META[first].element}) and ${second} (${ZODIAC_META[second].element}).
Vibes: ${first} = ${ZODIAC_META[first].vibe}; ${second} = ${ZODIAC_META[second].vibe}.
Write the JSON now.`

  const response = await fetch('https://api.minimax.io/anthropic/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.MINIMAX_API_KEY}`
    },
    body: JSON.stringify({
      model: 'MiniMax-M2.7',
      max_tokens: 1200,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }]
    })
  })

  const data: any = await response.json()
  if (data?.error) throw new Error(`minimax: ${data.error?.message || JSON.stringify(data.error)}`)
  const blocks: any[] = data?.content || []
  const raw = blocks.find(b => typeof b?.text === 'string' && b.text.trim().length > 0)?.text?.trim() || ''
  if (!raw) throw new Error('minimax returned no text')

  const { parsed, error: parseErr } = tryParseJson(raw)
  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`minimax non-JSON (${parseErr || 'unknown'}): ${raw.slice(0, 80)}`)
  }

  const reading: CompatReading = {
    pair: canonical,
    first,
    second,
    spark: String(parsed.spark || '').trim(),
    friction: String(parsed.friction || '').trim(),
    strength: String(parsed.strength || '').trim(),
    move: String(parsed.move || '').trim(),
    source: 'minimax-m2.7',
    generated_at: new Date().toISOString(),
    cached: false
  }

  // 14 days — compat is evergreen content; we want SEO crawlers to see fresh JSON
  // every couple of weeks but not pay for re-generation on every read.
  await env.KV.put(key, JSON.stringify(reading), { expirationTtl: 14 * 24 * 3600 })

  return reading
}

// ─── HTML rendering ─────────────────────────────────────────────────────────

export function compatPageHTML(reading: CompatReading): string {
  const a = reading.first
  const b = reading.second
  const A = capitalize(a)
  const B = capitalize(b)
  const metaA = ZODIAC_META[a]
  const metaB = ZODIAC_META[b]
  const accentA = ELEMENT_ACCENT[metaA.element]
  const accentB = ELEMENT_ACCENT[metaB.element]
  const isSame = a === b
  const readingHref = `/gab44/reading?ref=compat-${reading.pair}`

  const title = isSame
    ? `${A} & ${A} Compatibility — Two ${A}s in One Room · gab44`
    : `${A} and ${B} Compatibility — Love, Friendship, Energy · gab44`
  const description = isSame
    ? `What happens when two ${A}s meet — the spark, the friction, the underrated strength. A warm modern compatibility read from gab44.`
    : `${A} and ${B} compatibility, written warm and modern: where you light up, where you grind, the underrated gift this combo carries, and one practical move this week.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Compatibility', item: `${SITE_URL}/gab44/compatibility` },
          { '@type': 'ListItem', position: 3, name: `${A} & ${B}`, item: `${SITE_URL}/gab44/compatibility/${reading.pair}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${A} & ${B} Compatibility`,
        datePublished: reading.generated_at.slice(0, 10),
        dateModified: reading.generated_at.slice(0, 10),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/compatibility/${reading.pair}`,
        about: `${A} (${metaA.element}) × ${B} (${metaB.element})`
      }
    ]
  })

  // Other pairs strip — show 6 other pairs that include sign A or B for cross-link.
  const relatedPairs: string[] = []
  for (const s of SIGNS) {
    if (s !== b && relatedPairs.length < 3) {
      const p = canonicalPair(a, s as Sign).canonical
      if (p !== reading.pair) relatedPairs.push(p)
    }
  }
  for (const s of SIGNS) {
    if (s !== a && relatedPairs.length < 6) {
      const p = canonicalPair(b, s as Sign).canonical
      if (p !== reading.pair && !relatedPairs.includes(p)) relatedPairs.push(p)
    }
  }

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/compatibility/${reading.pair}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/compatibility/${reading.pair}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(metaA.symbol)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --c1a:${accentA.c1}; --c2a:${accentA.c2};
    --c1b:${accentB.c1}; --c2b:${accentB.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(900px 500px at -10% -10%, ${accentA.c1}22 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accentB.c2}22 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.6; min-height: 100vh;
  }
  .wrap { max-width: 700px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1a), var(--c2b)); box-shadow: 0 0 0 4px ${accentA.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .glyph-a { background: linear-gradient(135deg, var(--c1a), var(--c2a)); -webkit-background-clip: text; background-clip: text; color: transparent; padding-right: 6px; }
  h1 .glyph-b { background: linear-gradient(135deg, var(--c1b), var(--c2b)); -webkit-background-clip: text; background-clip: text; color: transparent; padding-left: 6px; }
  h1 .amp { color: var(--fg-muted); font-weight: 500; padding: 0 4px; }
  .sub { font-size: 16px; color: var(--fg-dim); margin: 0 0 24px; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 26px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span {
    background: var(--bg-2); padding: 5px 12px; border-radius: 999px;
  }
  .section {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 16px;
    padding: 22px 24px; margin: 14px 0;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.05);
    position: relative; overflow: hidden;
  }
  .section::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1a), var(--c2b));
  }
  .section .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 6px; font-weight: 700;
  }
  .section .text { font-size: 16px; line-height: 1.65; color: var(--fg); margin: 0; }
  .section.move { background: linear-gradient(135deg, var(--bg-2), var(--bg-1)); }
  .reading-cta {
    background: linear-gradient(135deg, var(--c1a) 0%, var(--c2b) 100%);
    color: var(--fg-on-accent); padding: 28px 30px; border-radius: 18px; margin: 26px 0;
    box-shadow: 0 8px 28px rgba(20,14,4,0.10);
  }
  .reading-cta h2 { margin: 0 0 8px; font-size: 22px; font-weight: 800; }
  .reading-cta p { margin: 0 0 18px; opacity: 0.92; font-size: 15px; }
  .reading-cta .price { font-size: 36px; font-weight: 800; margin-right: 8px; }
  .reading-cta .price-note { opacity: 0.85; font-size: 13px; }
  .reading-cta a.btn {
    display: inline-block; background: #fffaf2; color: #1a1815;
    padding: 12px 26px; border-radius: 999px; font-weight: 700; text-decoration: none;
    font-size: 15px; transition: transform 0.05s;
  }
  .reading-cta a.btn:hover { transform: translateY(-1px); }
  .related { margin: 26px 0 16px; }
  .related h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  @media (max-width: 520px) { .related-grid { grid-template-columns: repeat(2, 1fr); } h1 { font-size: 34px; } }
  .related-grid a {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 10px; text-align: center; text-decoration: none; color: var(--fg-dim);
    font-size: 13px; font-weight: 600;
  }
  .related-grid a:hover { border-color: var(--accent); color: var(--accent); }
  .healing-promo {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .healing-promo a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .healing-promo a:hover { text-decoration: underline; }
  footer { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
  footer a:hover { text-decoration: underline; }
  .source { margin-top: 10px; font-size: 11px; color: var(--fg-muted); font-family: 'JetBrains Mono', monospace; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/about">sign profiles</a>
      <a href="/gab44/compatibility">all pairs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ compatibility</div>
    <h1><span class="glyph-a">${metaA.symbol}</span>${A}<span class="amp">&</span>${B}<span class="glyph-b">${metaB.symbol}</span></h1>
    <p class="sub">${isSame ? `What happens when two ${A}s meet — same fire, same gravity, doubled.` : `${escapeHtml(metaA.vibe)} meets ${escapeHtml(metaB.vibe)}.`}</p>
    <div class="meta-strip">
      <span>${escapeHtml(metaA.element)} × ${escapeHtml(metaB.element)}</span>
      <span>${A} ${metaA.dates}</span>
      <span>${B} ${metaB.dates}</span>
    </div>

    <article class="section">
      <span class="label">⚡ the spark</span>
      <p class="text">${escapeHtml(reading.spark)}</p>
    </article>
    <article class="section">
      <span class="label">⛓️ the friction</span>
      <p class="text">${escapeHtml(reading.friction)}</p>
    </article>
    <article class="section">
      <span class="label">🌱 underrated strength</span>
      <p class="text">${escapeHtml(reading.strength)}</p>
    </article>
    <article class="section move">
      <span class="label">🪶 one move this week</span>
      <p class="text">${escapeHtml(reading.move)}</p>
      <div class="source">written by ${escapeHtml(reading.source)} · cached for evergreen reads</div>
    </article>

    <section class="reading-cta">
      <h2>✉️ Want it written for you two — by name?</h2>
      <p>This note is for everyone with these two signs. A <strong>personal life-path reading</strong> goes deeper — your actual birth chart, your relationship intention, written by one human for one human. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your ${A} × ${B} reading →</a>
    </section>

    <div class="healing-promo">
      🌿 Need to settle the nervous system before reading? <a href="/healing">Five free 10-minute healing meditations</a> — sleep, anxiety, abundance, letting-go, deep healing.
    </div>

    <section class="related">
      <h3>Other pairs to explore</h3>
      <div class="related-grid">
        ${relatedPairs.map((p) => {
          const [x, y] = p.split('-')
          return `<a href="/gab44/compatibility/${p}">${capitalize(x)} & ${capitalize(y)}</a>`
        }).join('\n        ')}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written daily · <a href="/gab44">gab44</a> · <a href="/gab44/compatibility">all 78 pairs</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function compatIndexHTML(): string {
  // 12×12 grid: rows = first sign, cells link to canonical pair page.
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Zodiac Compatibility — All 78 Pairs · gab44 ✨</title>
<meta name="description" content="Zodiac compatibility for all 78 sign pairs — warm, modern, written by gab44. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces — every combination, no woo-woo filler." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/compatibility" />
<meta property="og:title" content="Zodiac Compatibility — All 78 Pairs" />
<meta property="og:description" content="Every zodiac pair, written warm and modern. Spark, friction, strength, one move." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh;
  }
  .wrap { max-width: 880px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 640px; }
  .reading-strip {
    background: var(--accent); color: var(--fg-on-accent); padding: 22px 26px;
    border-radius: 16px; margin: 0 0 28px; text-align: center;
  }
  .reading-strip h2 { margin: 0 0 6px; font-size: 18px; font-weight: 700; }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  .matrix { width: 100%; border-collapse: collapse; font-size: 13px; }
  .matrix th, .matrix td { border: 1px solid var(--line); padding: 0; text-align: center; }
  .matrix th {
    background: var(--bg-2); color: var(--fg-dim); font-weight: 700;
    padding: 6px 4px; font-size: 12px; letter-spacing: 0.05em;
  }
  .matrix th .sym { display: block; font-size: 16px; line-height: 1; margin-bottom: 2px; color: var(--fg); }
  .matrix td a {
    display: block; padding: 8px 4px; text-decoration: none; color: var(--fg-dim);
    background: var(--bg-1); transition: background 0.1s, color 0.1s;
    min-height: 38px;
  }
  .matrix td a:hover { background: var(--accent-soft); color: var(--accent); }
  .matrix td.empty { background: var(--bg-2); }
  .by-sign { margin: 30px 0; }
  .by-sign h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 14px; font-weight: 700; }
  .sign-blocks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  @media (max-width: 600px) { .sign-blocks { grid-template-columns: repeat(2, 1fr); } .matrix { font-size: 11px; } .matrix td a { padding: 6px 2px; min-height: 30px; } }
  .sign-blocks a {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 14px; text-decoration: none; color: var(--fg);
    display: block;
  }
  .sign-blocks a:hover { border-color: var(--accent); }
  .sign-blocks .sym { font-size: 22px; line-height: 1; margin-bottom: 4px; }
  .sign-blocks .name { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
  .sign-blocks .count { font-size: 11px; color: var(--fg-muted); }
  footer { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/healing">healing</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Zodiac <span class="accent">compatibility</span> · all 78 pairs.</h1>
    <p class="sub">Every zodiac combination, written warm and modern — what lights up, where it grinds, the underrated gift, one practical move. Pick any two signs.</p>
    <div class="reading-strip">
      <h2>Want one written for you two — by name?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">$9 personal reading · delivered in 48h · <a href="/gab44/reading?ref=compat-index">request yours →</a></p>
    </div>

    <table class="matrix">
      <thead>
        <tr>
          <th></th>
          ${SIGNS.map((s) => {
            const m = ZODIAC_META[s as Sign]
            return `<th><span class="sym">${m.symbol}</span>${capitalize(s)}</th>`
          }).join('\n          ')}
        </tr>
      </thead>
      <tbody>
        ${SIGNS.map((sa, i) => {
          const ma = ZODIAC_META[sa as Sign]
          const cells = SIGNS.map((sb, j) => {
            if (j < i) return `<td class="empty"></td>`
            const pair = `${sa}-${sb}`
            return `<td><a href="/gab44/compatibility/${pair}" title="${capitalize(sa)} & ${capitalize(sb)}">${ZODIAC_META[sb as Sign].symbol}</a></td>`
          }).join('')
          return `<tr><th><span class="sym">${ma.symbol}</span>${capitalize(sa)}</th>${cells}</tr>`
        }).join('\n        ')}
      </tbody>
    </table>

    <section class="by-sign">
      <h3>By sign</h3>
      <div class="sign-blocks">
        ${SIGNS.map((s) => {
          const m = ZODIAC_META[s as Sign]
          return `<a href="/gab44/${s}">
          <div class="sym">${m.symbol}</div>
          <div class="name">${capitalize(s)}</div>
          <div class="count">today's horoscope · 11 compat pairs below</div>
        </a>`
        }).join('\n        ')}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a> · 78 pairs · written daily-fresh</p>
    </footer>
  </main>
</body>
</html>`
}

// Render entry — handles canonical-redirect + soft-fail like zodiac.ts.
export async function renderCompatPage(
  slug: string,
  env: CompatEnv
): Promise<{ status: number; html?: string; redirect?: string }> {
  const parsed = parsePairSlug(slug)
  if (!parsed.ok || !parsed.first || !parsed.second) return { status: 404 }
  const { canonical, first, second } = canonicalPair(parsed.first, parsed.second)
  if (canonical !== slug.toLowerCase()) {
    return { status: 301, redirect: `/gab44/compatibility/${canonical}` }
  }
  try {
    const reading = await generateCompat(first, second, env)
    return { status: 200, html: compatPageHTML(reading) }
  } catch (err: any) {
    // Soft-fail: still render the page so SEO/CTAs survive a MiniMax hiccup.
    const placeholder: CompatReading = {
      pair: canonical,
      first,
      second,
      spark: 'This pair note is being written. Check back in a moment — or request a personal reading below for one written by name, for you two.',
      friction: '',
      strength: '',
      move: 'Request a $9 personal reading — written by hand, for one human (or one couple), within 48 hours.',
      source: 'placeholder · ' + String(err?.message ?? '').slice(0, 60),
      generated_at: new Date().toISOString(),
      cached: false
    }
    return { status: 200, html: compatPageHTML(placeholder) }
  }
}

export const COMPAT_PAIRS = ALL_PAIRS()
