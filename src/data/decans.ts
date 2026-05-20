// Decans SEO funnel — /gab44/decans (index) + /gab44/decans/{sign}-{1|2|3} (36 pages).
// Each zodiac sign is divided into three 10° decans, each with its own classical
// sub-ruler drawn from the same triplicity (Chaldean / triplicity decan system):
//   1st decan: same sign as the host (0° – 9°59')
//   2nd decan: next sign in the same triplicity (10° – 19°59')
//   3rd decan: third sign in the same triplicity (20° – 29°59')
//
// High-intent SEO surface — readers who already know their sun sign and want
// to refine it. Routes warm traffic to /gab44/reading?ref=decan-{slug}.
// Zero LLM cost — every page is composed from the static profile table.

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'

export type DecanNum = 1 | 2 | 3

interface DecanProfile {
  sign: Sign
  num: DecanNum
  sub_sign: Sign
  sub_planet: ClassicalPlanet
  dates: string
  degrees: string
  vibe: string
  longer: string
}

type ClassicalPlanet =
  | 'sun' | 'moon' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn'

interface SignBeat {
  symbol: string
  word: string
  element: 'fire' | 'earth' | 'air' | 'water'
  modality: 'cardinal' | 'fixed' | 'mutable'
  ruler: ClassicalPlanet
}

const SIGN_BEATS: Record<Sign, SignBeat> = {
  aries:       { symbol: '♈', word: 'Ram',          element: 'fire',  modality: 'cardinal', ruler: 'mars'    },
  taurus:      { symbol: '♉', word: 'Bull',         element: 'earth', modality: 'fixed',    ruler: 'venus'   },
  gemini:      { symbol: '♊', word: 'Twins',        element: 'air',   modality: 'mutable',  ruler: 'mercury' },
  cancer:      { symbol: '♋', word: 'Crab',         element: 'water', modality: 'cardinal', ruler: 'moon'    },
  leo:         { symbol: '♌', word: 'Lion',         element: 'fire',  modality: 'fixed',    ruler: 'sun'     },
  virgo:       { symbol: '♍', word: 'Maiden',       element: 'earth', modality: 'mutable',  ruler: 'mercury' },
  libra:       { symbol: '♎', word: 'Scales',       element: 'air',   modality: 'cardinal', ruler: 'venus'   },
  scorpio:     { symbol: '♏', word: 'Scorpion',     element: 'water', modality: 'fixed',    ruler: 'mars'    },
  sagittarius: { symbol: '♐', word: 'Archer',       element: 'fire',  modality: 'mutable',  ruler: 'jupiter' },
  capricorn:   { symbol: '♑', word: 'Sea-Goat',     element: 'earth', modality: 'cardinal', ruler: 'saturn'  },
  aquarius:    { symbol: '♒', word: 'Water-Bearer', element: 'air',   modality: 'fixed',    ruler: 'saturn'  },
  pisces:      { symbol: '♓', word: 'Fish',         element: 'water', modality: 'mutable',  ruler: 'jupiter' }
}

const PLANET_GLYPH: Record<ClassicalPlanet, string> = {
  sun: '☉', moon: '☽', mercury: '☿', venus: '♀', mars: '♂', jupiter: '♃', saturn: '♄'
}

const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

// Triplicity order: each sign's 3 decans walk through its element peers.
const TRIPLICITY_ORDER: Record<SignBeat['element'], Sign[]> = {
  fire:  ['aries', 'leo', 'sagittarius'],
  earth: ['taurus', 'virgo', 'capricorn'],
  air:   ['gemini', 'libra', 'aquarius'],
  water: ['cancer', 'scorpio', 'pisces']
}

function decanSubSign(sign: Sign, num: DecanNum): Sign {
  const trip = TRIPLICITY_ORDER[SIGN_BEATS[sign].element]
  const start = trip.indexOf(sign)
  return trip[(start + num - 1) % 3]
}

// Approx date bands — magazine convention, not ephemeris-exact.
const DECAN_DATES: Record<Sign, [string, string, string]> = {
  aries:       ['Mar 21 – Mar 30', 'Mar 31 – Apr 9',  'Apr 10 – Apr 19'],
  taurus:      ['Apr 20 – Apr 29', 'Apr 30 – May 10', 'May 11 – May 20'],
  gemini:      ['May 21 – May 31', 'Jun 1 – Jun 10',  'Jun 11 – Jun 20'],
  cancer:      ['Jun 21 – Jul 1',  'Jul 2 – Jul 12',  'Jul 13 – Jul 22'],
  leo:         ['Jul 23 – Aug 1',  'Aug 2 – Aug 12',  'Aug 13 – Aug 22'],
  virgo:       ['Aug 23 – Sep 1',  'Sep 2 – Sep 12',  'Sep 13 – Sep 22'],
  libra:       ['Sep 23 – Oct 2',  'Oct 3 – Oct 12',  'Oct 13 – Oct 22'],
  scorpio:     ['Oct 23 – Nov 1',  'Nov 2 – Nov 11',  'Nov 12 – Nov 21'],
  sagittarius: ['Nov 22 – Dec 1',  'Dec 2 – Dec 11',  'Dec 12 – Dec 21'],
  capricorn:   ['Dec 22 – Dec 31', 'Jan 1 – Jan 10',  'Jan 11 – Jan 19'],
  aquarius:    ['Jan 20 – Jan 29', 'Jan 30 – Feb 8',  'Feb 9 – Feb 18'],
  pisces:      ['Feb 19 – Feb 29', 'Mar 1 – Mar 10',  'Mar 11 – Mar 20']
}

const DECAN_DEGREES: Record<DecanNum, string> = {
  1: "0° – 9°59'",
  2: "10° – 19°59'",
  3: "20° – 29°59'"
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildDecanVibe(sign: Sign, sub: Sign): string {
  if (sign === sub) {
    const m = SIGN_BEATS[sign]
    return `pure ${sign} — the most ${m.element} ${m.modality} version of the sign.`
  }
  const subPlanet = SIGN_BEATS[sub].ruler
  const planetWord: Record<ClassicalPlanet, string> = {
    sun: 'lit', moon: 'tidal', mercury: 'quick', venus: 'softened',
    mars: 'sharpened', jupiter: 'expansive', saturn: 'tempered'
  }
  return `${sign} ${planetWord[subPlanet]} by ${sub}.`
}

function buildDecanLonger(sign: Sign, sub: Sign): string {
  const hostMeta = SIGN_BEATS[sign]
  if (sign === sub) {
    return `Born in the first 10° of ${titleCase(sign)}, you carry the sign's signature unalloyed. The element (${hostMeta.element}) and modality (${hostMeta.modality}) read as straight as they ever do — you are the ${titleCase(sign)} other ${titleCase(sign)}s point at when they're trying to explain the archetype.`
  }
  const subPlanet = SIGN_BEATS[sub].ruler
  return `Born in this 10° band, you read as ${titleCase(sign)} on the surface — same element, same drive — but ${titleCase(sub)} sits underneath, lending its flavour. ${titleCase(subPlanet)} (the classical ruler of ${titleCase(sub)}) softens or sharpens the ${titleCase(sign)} edge depending on the day. You are the ${hostMeta.element} of ${titleCase(sign)} expressed through the lens of ${titleCase(sub)}.`
}

export const DECAN_PROFILES: Record<string, DecanProfile> = (() => {
  const out: Record<string, DecanProfile> = {}
  for (const sign of SIGNS) {
    for (const num of [1, 2, 3] as DecanNum[]) {
      const sub = decanSubSign(sign, num)
      const slug = `${sign}-${num}`
      out[slug] = {
        sign,
        num,
        sub_sign: sub,
        sub_planet: SIGN_BEATS[sub].ruler,
        dates: DECAN_DATES[sign][num - 1],
        degrees: DECAN_DEGREES[num],
        vibe: buildDecanVibe(sign, sub),
        longer: buildDecanLonger(sign, sub)
      }
    }
  }
  return out
})()

export const DECAN_SLUGS = Object.keys(DECAN_PROFILES)

export function isDecanSlug(slug: string): boolean {
  return slug in DECAN_PROFILES
}

export function parseDecanSlug(slug: string): { sign: Sign; num: DecanNum } | null {
  const m = slug.match(/^([a-z]+)-([123])$/)
  if (!m) return null
  const sign = m[1] as Sign
  if (!SIGNS.includes(sign)) return null
  return { sign, num: parseInt(m[2], 10) as DecanNum }
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const BASE_CSS = `
  ${PALETTE}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .hero { display: flex; align-items: center; gap: 18px; margin: 12px 0 18px; }
  .hero .ring {
    width: 64px; height: 64px; border-radius: 999px; display: grid; place-items: center;
    color: #fff; font-size: 28px; box-shadow: 0 4px 16px rgba(20,14,4,0.10);
  }
  .hero .meta { color: var(--fg-muted); font-size: 13px; letter-spacing: 0.04em; }
  h1 { font-size: 40px; line-height: 1.05; margin: 6px 0 8px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; }
  p { margin: 0 0 14px; font-size: 16px; }
  .vibe { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  .card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 22px 26px; margin: 12px 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
  }
  .grid { display: grid; gap: 6px; margin: 8px 0 16px; }
  .row { display: flex; justify-content: space-between; gap: 14px;
    padding: 10px 12px; border-bottom: 1px solid var(--line); font-size: 15px; }
  .row:last-child { border-bottom: 0; }
  .row .k { color: var(--fg-muted); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px; }
  .row .v { color: var(--fg); text-align: right; }
  .row .v a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .strip { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 16px; }
  .strip a {
    background: var(--bg-2); padding: 7px 12px; border-radius: 999px;
    font-size: 13px; color: var(--fg-dim); text-decoration: none; border: 1px solid var(--line);
  }
  .strip a:hover { background: var(--accent-soft); color: var(--accent); }
  .cta-row { margin: 28px 0 12px; }
  .cta {
    display: inline-block; padding: 14px 22px; border-radius: 999px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    color: #fff; font-weight: 700; text-decoration: none; box-shadow: 0 6px 20px rgba(20,14,4,0.12);
  }
  .signs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
  .sign-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 18px 16px; text-decoration: none; color: var(--fg);
    transition: transform .12s, box-shadow .12s;
  }
  .sign-card:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(20,14,4,0.08); }
  .sign-card .glyph { font-size: 30px; font-weight: 800; margin-bottom: 6px; }
  .sign-card .name { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
  .sign-card .when { color: var(--fg-muted); font-size: 12px; margin-bottom: 6px; }
  .sign-card .vibe-mini { color: var(--fg-dim); font-size: 13px; line-height: 1.45; }
  footer { margin-top: 48px; color: var(--fg-muted); font-size: 12px; text-align: center; }
`

export function decanPageHTML(slug: string): string {
  const d = DECAN_PROFILES[slug]
  if (!d) return ''
  const host = SIGN_BEATS[d.sign]
  const sub = SIGN_BEATS[d.sub_sign]
  const accent = ELEMENT_ACCENT[host.element]
  const same = d.sign === d.sub_sign
  const ordinal = d.num === 1 ? '1st' : d.num === 2 ? '2nd' : '3rd'
  const headline = `${titleCase(d.sign)} ${ordinal} decan`

  // Sister-decan strip: the other 2 decans of this sign.
  const sisters = ([1, 2, 3] as DecanNum[]).filter((n) => n !== d.num)
  const sisterStrip = sisters
    .map((n) => {
      const dd = DECAN_PROFILES[`${d.sign}-${n}`]
      const ord = n === 1 ? '1st' : n === 2 ? '2nd' : '3rd'
      return `<a href="/gab44/decans/${d.sign}-${n}">${titleCase(d.sign)} ${ord} (${escapeHtml(dd.dates)})</a>`
    })
    .join('')

  // Cross-element strip: the other two signs in this triplicity.
  const trip = TRIPLICITY_ORDER[host.element].filter((s) => s !== d.sign)
  const tripStrip = trip
    .map((s) => `<a href="/gab44/${s}">${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${d.sign}">${host.symbol} ${titleCase(d.sign)} profile</a>`,
    ...(same ? [] : [`<a href="/gab44/${d.sub_sign}">${sub.symbol} ${titleCase(d.sub_sign)} profile</a>`]),
    `<a href="/gab44/planets/${d.sub_planet}">${PLANET_GLYPH[d.sub_planet]} ${titleCase(d.sub_planet)}</a>`,
    `<a href="/gab44/decans">all 36 decans</a>`,
    `<a href="/gab44/horoscopes">today's horoscopes</a>`
  ].join('')

  const title = `${headline} (${d.dates}) — sub-ruler ${titleCase(d.sub_sign)} · gab44`
  const description = `${headline} — born ${d.dates} (${d.degrees}). ${d.vibe} Sub-ruler ${titleCase(d.sub_sign)} / ${titleCase(d.sub_planet)}. Daily horoscopes plus a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Decans', item: `${SITE_URL}/gab44/decans` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/decans/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/decans/${slug}`,
        about: `${headline} — Chaldean / triplicity decan system`
      }
    ]
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/decans/${slug}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(d.vibe)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/decans/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(host.symbol)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/decans">all 36 decans</a>
      <a href="/gab44/${d.sign}">${titleCase(d.sign)} profile</a>
      <a href="/gab44/reading?ref=decan-${slug}">$9 reading</a>
      <a href="/healing">healing sounds</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">${host.symbol}</div>
      <div class="meta">${escapeHtml(d.dates)} · ${escapeHtml(d.degrees)} · sub-ruler ${titleCase(d.sub_sign)}</div>
    </div>
    <h1><span class="accent">${titleCase(d.sign)}</span> ${ordinal} decan</h1>
    <p class="vibe">${escapeHtml(d.vibe)}</p>

    <div class="card">
      <p>${escapeHtml(d.longer)}</p>
    </div>

    <h2>How this decan reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Born</span><span class="v">${escapeHtml(d.dates)}</span></div>
      <div class="row"><span class="k">Degrees</span><span class="v">${escapeHtml(d.degrees)}</span></div>
      <div class="row"><span class="k">Host sign</span><span class="v"><a href="/gab44/${d.sign}">${host.symbol} ${titleCase(d.sign)}</a> · ${host.element} · ${host.modality}</span></div>
      <div class="row"><span class="k">Sub-ruling sign</span><span class="v"><a href="/gab44/${d.sub_sign}">${sub.symbol} ${titleCase(d.sub_sign)}</a></span></div>
      <div class="row"><span class="k">Sub-ruling planet</span><span class="v"><a href="/gab44/planets/${d.sub_planet}">${PLANET_GLYPH[d.sub_planet]} ${titleCase(d.sub_planet)}</a></span></div>
      <div class="row"><span class="k">Triplicity</span><span class="v">${titleCase(host.element)} signs</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=decan-${slug}">Get a $9 reading tuned to your decan →</a>
    </div>

    <h2>The other ${titleCase(d.sign)} decans</h2>
    <div class="strip">${sisterStrip}</div>

    <h2>Other signs in the ${host.element} triplicity</h2>
    <div class="strip">${tripStrip}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · Chaldean / triplicity decan system · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function decansIndexHTML(): string {
  const blocks = SIGNS.map((s) => {
    const m = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[m.element]
    const cards = ([1, 2, 3] as DecanNum[])
      .map((n) => {
        const slug = `${s}-${n}`
        const d = DECAN_PROFILES[slug]
        const ord = n === 1 ? '1st' : n === 2 ? '2nd' : '3rd'
        return `<a class="sign-card" href="/gab44/decans/${slug}">
          <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">${m.symbol}</div>
          <div class="name">${titleCase(s)} · ${ord}</div>
          <div class="when">${escapeHtml(d.dates)}</div>
          <div class="vibe-mini">${escapeHtml(d.vibe)}</div>
        </a>`
      })
      .join('')
    return `<h2 style="margin-top:36px;"><a href="/gab44/${s}" style="color:var(--fg);text-decoration:none;">${m.symbol} ${titleCase(s)}</a> <span style="font-size:13px;color:var(--fg-muted);font-weight:500;letter-spacing:0.06em;text-transform:uppercase;margin-left:8px;">${m.element} · ${m.modality}</span></h2>
    <div class="signs-grid">${cards}</div>`
  }).join('')

  const title = `The 36 zodiac decans — Chaldean / triplicity guide · gab44 ✨`
  const description = `All 36 zodiac decans — every 10° band of every sign with its sub-ruler, dates, and the flavour the sub-rulership lends. Aries 1st decan through Pisces 3rd. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/decans" />
<meta property="og:title" content="The 36 zodiac decans · gab44" />
<meta property="og:description" content="Three sub-rulers per sign — find your 10° band." />
<meta property="og:type" content="website" />
<style>:root{--c1:#c96442;--c2:#6943e0;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/reading?ref=decans-index">$9 reading</a>
      <a href="/healing">healing sounds</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#c96442,#6943e0)">⌖</div>
      <div class="meta">36 decans · 3 per sign · 10° each · Chaldean / triplicity order</div>
    </div>
    <h1>The 36 zodiac <span class="accent">decans</span></h1>
    <p class="vibe">Every sign is three signs. Pick the 10° band you were born in to see who really co-rules your chart.</p>

    ${blocks}

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=decans-index">Want a deeper, decan-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 36 decans · evergreen.
    </footer>
  </div>
</body>
</html>`
}
