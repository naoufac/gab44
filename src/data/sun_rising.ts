// Sun × rising SEO funnel — /gab44/sun-rising (index) + /gab44/sun-rising/{sun}-{rising}
// (144 ordered pairs = 12 suns × 12 risings). One of the highest-volume astrology
// queries: "{sun} sun {rising} rising meaning". Differs from compatibility (two
// people) — this is one person, two layers of self: core (sun) and arrival (rising).
// All 144 ordered pairs render — sun and rising are NOT interchangeable, so
// aries-leo and leo-aries render with different content.
// Routes warm traffic to /gab44/reading?ref=sunrising-{slug}. Zero LLM cost.

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'

type ClassicalPlanet =
  | 'sun' | 'moon' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn'

interface SignBeat {
  symbol: string
  element: 'fire' | 'earth' | 'air' | 'water'
  modality: 'cardinal' | 'fixed' | 'mutable'
  ruler: ClassicalPlanet
}

const SIGN_BEATS: Record<Sign, SignBeat> = {
  aries:       { symbol: '♈', element: 'fire',  modality: 'cardinal', ruler: 'mars'    },
  taurus:      { symbol: '♉', element: 'earth', modality: 'fixed',    ruler: 'venus'   },
  gemini:      { symbol: '♊', element: 'air',   modality: 'mutable',  ruler: 'mercury' },
  cancer:      { symbol: '♋', element: 'water', modality: 'cardinal', ruler: 'moon'    },
  leo:         { symbol: '♌', element: 'fire',  modality: 'fixed',    ruler: 'sun'     },
  virgo:       { symbol: '♍', element: 'earth', modality: 'mutable',  ruler: 'mercury' },
  libra:       { symbol: '♎', element: 'air',   modality: 'cardinal', ruler: 'venus'   },
  scorpio:     { symbol: '♏', element: 'water', modality: 'fixed',    ruler: 'mars'    },
  sagittarius: { symbol: '♐', element: 'fire',  modality: 'mutable',  ruler: 'jupiter' },
  capricorn:   { symbol: '♑', element: 'earth', modality: 'cardinal', ruler: 'saturn'  },
  aquarius:    { symbol: '♒', element: 'air',   modality: 'fixed',    ruler: 'saturn'  },
  pisces:      { symbol: '♓', element: 'water', modality: 'mutable',  ruler: 'jupiter' }
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

export interface SunRisingPair { sun: Sign; rising: Sign }

export function sunRisingSlug(p: SunRisingPair): string {
  return `${p.sun}-${p.rising}`
}

export function isSunRisingSlug(slug: string): boolean {
  return parseSunRisingSlug(slug) !== null
}

export function parseSunRisingSlug(slug: string): SunRisingPair | null {
  const parts = slug.split('-')
  if (parts.length !== 2) return null
  const [sun, rising] = parts
  if (!SIGNS.includes(sun as Sign) || !SIGNS.includes(rising as Sign)) return null
  return { sun: sun as Sign, rising: rising as Sign }
}

export function allSunRisings(): SunRisingPair[] {
  const out: SunRisingPair[] = []
  for (const sun of SIGNS) {
    for (const rising of SIGNS) {
      out.push({ sun, rising })
    }
  }
  return out
}

export const SUN_RISING_SLUGS = allSunRisings().map(sunRisingSlug)

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

interface SunRisingBody {
  vibe: string
  inner_outer: string
  feels: string
  reads_as: string
}

function buildBody(sun: Sign, rising: Sign): SunRisingBody {
  const sm = SIGN_BEATS[sun]
  const rm = SIGN_BEATS[rising]
  const same = sun === rising

  const elementVerb: Record<SignBeat['element'], string> = {
    fire: 'burns', earth: 'grounds', air: 'thinks', water: 'feels'
  }
  const modalityVerb: Record<SignBeat['modality'], string> = {
    cardinal: 'starts', fixed: 'holds', mutable: 'adapts'
  }

  if (same) {
    return {
      vibe: `pure ${titleCase(sun)} — what you are inside is exactly what walks in the door.`,
      inner_outer: `When sun and rising are both ${titleCase(sun)}, the gap between who you are and how you read collapses. The ${sm.element} that ${elementVerb[sm.element]} at your core is the same ${sm.element} strangers feel before you say a word. There is no mask — the costume is the body.`,
      feels: `It feels like being read accurately, often. People meet you and assume what they see is what is — and they are right.`,
      reads_as: `Reads as a very ${titleCase(sun)} ${titleCase(sun)} — the archetype, undiluted. Easy to underestimate the depth, since the surface tells the whole truth.`
    }
  }

  const surfaceRead =
    rm.element === 'fire'  ? 'fast and bold' :
    rm.element === 'earth' ? 'steady and grounded' :
    rm.element === 'air'   ? 'witty and detached' :
                             'sensitive and tidal'

  const layerNote =
    sm.element === rm.element ? 'reinforcing — same flavour, more of it' :
    sm.element === 'fire'  && rm.element === 'water' ? 'a surprise — the cool surface hid a hot core' :
    sm.element === 'water' && rm.element === 'fire'  ? 'a surprise — the bold surface hid a tender core' :
    sm.element === 'earth' && rm.element === 'air'   ? 'a quiet contrast — light surface, weighted core' :
    sm.element === 'air'   && rm.element === 'earth' ? 'a quiet contrast — grounded surface, mobile core' :
                                                       'a layered second read — they have to update their first impression'

  const modalityNote =
    sm.modality === rm.modality
      ? `consistently ${modalityVerb[sm.modality]}`
      : `${modalityVerb[sm.modality]} on the inside while ${modalityVerb[rm.modality]} on the outside — internal and external rhythms are different, which is its own work`

  return {
    vibe: `${titleCase(sun)} on the inside, ${titleCase(rising)} on the way in.`,
    inner_outer: `Your sun in ${titleCase(sun)} (${sm.element}, ${sm.modality}) is the engine — what ${elementVerb[sm.element]} at the centre, what ${modalityVerb[sm.modality]} when you are at home in yourself. Your ${titleCase(rising)} rising (${rm.element}, ${rm.modality}, ruled by ${titleCase(rm.ruler)}) is the door — the way you arrive in a room, the first read the world takes of you, the body you walk in.`,
    feels: `Strangers tend to assume you are ${surfaceRead} — that is the ${titleCase(rising)} arriving first. Then they get to know you and discover the ${titleCase(sun)} ${sm.element} underneath, which can be ${layerNote}.`,
    reads_as: `Reads as ${titleCase(rising)} until you trust them; then ${titleCase(sun)} comes through. The ${sm.modality}-${rm.modality} mix means you ${modalityNote}.`
  }
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
    min-width: 64px; height: 64px; border-radius: 999px; display: grid; place-items: center;
    color: #fff; font-size: 26px; padding: 0 14px; box-shadow: 0 4px 16px rgba(20,14,4,0.10);
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
  .signs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px; }
  .sign-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 16px 14px; text-decoration: none; color: var(--fg);
    transition: transform .12s, box-shadow .12s;
  }
  .sign-card:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(20,14,4,0.08); }
  .sign-card .glyph { font-size: 28px; font-weight: 800; margin-bottom: 4px; }
  .sign-card .name { font-weight: 700; font-size: 14px; margin-bottom: 4px; }
  .sign-card .vibe-mini { color: var(--fg-dim); font-size: 12px; line-height: 1.4; }
  footer { margin-top: 48px; color: var(--fg-muted); font-size: 12px; text-align: center; }
`

export function sunRisingPageHTML(p: SunRisingPair): string {
  const sun = p.sun
  const rising = p.rising
  const sm = SIGN_BEATS[sun]
  const rm = SIGN_BEATS[rising]
  const sunName = titleCase(sun)
  const risName = titleCase(rising)
  const accent = ELEMENT_ACCENT[sm.element]
  const slug = sunRisingSlug(p)
  const same = sun === rising
  const copy = buildBody(sun, rising)
  const headline = same ? `${sunName} sun, ${sunName} rising` : `${sunName} sun, ${risName} rising`

  // Cross-link strip: same sun across other 11 risings.
  const otherRisings = SIGNS.filter((s) => s !== rising)
    .map((s) => `<a href="/gab44/sun-rising/${sun}-${s}">${sunName} ☉ + ${SIGN_BEATS[s].symbol} ${titleCase(s)} ↑</a>`)
    .join('')

  // Cross-link strip: same rising across other 11 suns.
  const otherSuns = SIGNS.filter((s) => s !== sun)
    .map((s) => `<a href="/gab44/sun-rising/${s}-${rising}">${SIGN_BEATS[s].symbol} ${titleCase(s)} ☉ + ${risName} ↑</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sun}">${sm.symbol} ${sunName} profile</a>`,
    ...(same ? [] : [`<a href="/gab44/${rising}">${rm.symbol} ${risName} profile</a>`]),
    `<a href="/gab44/${rising}/rising">${risName} rising guide</a>`,
    `<a href="/gab44/houses/1">1st house (the rising)</a>`,
    `<a href="/gab44/planets/${rm.ruler}">${PLANET_GLYPH[rm.ruler]} ${titleCase(rm.ruler)} (rising ruler)</a>`,
    `<a href="/gab44/sun-rising">all 144 sun×rising pages</a>`
  ].join('')

  const title = `${headline} meaning — sun in ${sm.element}, rising in ${rm.element} · gab44`
  const description = `${headline} — ${copy.vibe} What this combination feels like, how strangers read you, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sun × Rising', item: `${SITE_URL}/gab44/sun-rising` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/sun-rising/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/sun-rising/${slug}`,
        about: `${headline} — sun and rising sign combination`
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
<link rel="canonical" href="${SITE_URL}/gab44/sun-rising/${slug}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(copy.vibe)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/sun-rising/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(sm.symbol)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/sun-rising">all 144 sun×rising</a>
      <a href="/gab44/${sun}">${sunName} profile</a>
      <a href="/gab44/reading?ref=sunrising-${slug}">$9 reading</a>
      <a href="/healing">healing sounds</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">${sm.symbol}${same ? '' : rm.symbol}</div>
      <div class="meta">☉ ${sunName} (${sm.element}) · ↑ ${risName} (${rm.element}) · ruler ${titleCase(rm.ruler)}</div>
    </div>
    <h1><span class="accent">${escapeHtml(headline)}</span></h1>
    <p class="vibe">${escapeHtml(copy.vibe)}</p>

    <div class="card">
      <p>${escapeHtml(copy.inner_outer)}</p>
    </div>

    <h2>What it feels like from the inside</h2>
    <p>${escapeHtml(copy.feels)}</p>

    <h2>How others read you</h2>
    <p>${escapeHtml(copy.reads_as)}</p>

    <h2>The two layers, side by side</h2>
    <div class="grid">
      <div class="row"><span class="k">Sun (core self)</span><span class="v"><a href="/gab44/${sun}">${sm.symbol} ${sunName}</a> · ${sm.element} · ${sm.modality} · ruler ${titleCase(sm.ruler)}</span></div>
      <div class="row"><span class="k">Rising (arrival)</span><span class="v"><a href="/gab44/${rising}">${rm.symbol} ${risName}</a> · ${rm.element} · ${rm.modality} · ruler ${titleCase(rm.ruler)}</span></div>
      <div class="row"><span class="k">Element pairing</span><span class="v">${sm.element} sun + ${rm.element} rising${sm.element === rm.element ? ' (matched)' : ''}</span></div>
      <div class="row"><span class="k">Modality pairing</span><span class="v">${sm.modality} sun + ${rm.modality} rising${sm.modality === rm.modality ? ' (matched)' : ''}</span></div>
      <div class="row"><span class="k">Chart ruler</span><span class="v"><a href="/gab44/planets/${rm.ruler}">${PLANET_GLYPH[rm.ruler]} ${titleCase(rm.ruler)}</a> (rising sign's ruler runs the whole chart)</span></div>
      <div class="row"><span class="k">1st house</span><span class="v"><a href="/gab44/houses/1">House of Self</a> — coloured by ${risName}</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=sunrising-${slug}">Get a $9 reading on this combination →</a>
    </div>

    <h2>${sunName} sun + 11 other risings</h2>
    <div class="strip">${otherRisings}</div>

    <h2>11 other suns + ${risName} rising</h2>
    <div class="strip">${otherSuns}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen sun×rising guide.
    </footer>
  </div>
</body>
</html>`
}

export function sunRisingIndexHTML(): string {
  const blocks = SIGNS.map((sun) => {
    const sm = SIGN_BEATS[sun]
    const accent = ELEMENT_ACCENT[sm.element]
    const cards = SIGNS.map((rising) => {
      const rm = SIGN_BEATS[rising]
      return `<a class="sign-card" href="/gab44/sun-rising/${sun}-${rising}">
        <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">${rm.symbol}</div>
        <div class="name">${titleCase(rising)} ↑</div>
        <div class="vibe-mini">${rm.element} rising on a ${sm.element} sun</div>
      </a>`
    }).join('')
    return `<h2 style="margin-top:36px;">${sm.symbol} <span class="accent">${titleCase(sun)} sun</span> <span style="font-size:13px;color:var(--fg-muted);font-weight:500;letter-spacing:0.06em;text-transform:uppercase;margin-left:8px;">+ 12 risings</span></h2>
    <div class="signs-grid">${cards}</div>`
  }).join('')

  const title = `Sun × rising sign — all 144 combinations · gab44 ✨`
  const description = `Every sun-and-rising combination — 12 suns × 12 risings = 144 pages. Aries sun Leo rising, Cancer sun Capricorn rising, and 142 more. What each combination feels like, how others read you, and a $9 personal reading.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/sun-rising" />
<meta property="og:title" content="Sun × rising sign · gab44" />
<meta property="og:description" content="What every sun + rising combination is actually like." />
<meta property="og:type" content="website" />
<style>:root{--c1:#f7c948;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/reading?ref=sunrising-index">$9 reading</a>
      <a href="/healing">healing sounds</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#f7c948,#c96442)">☉↑</div>
      <div class="meta">144 pages · 12 suns × 12 risings · evergreen</div>
    </div>
    <h1>Sun × <span class="accent">rising</span></h1>
    <p class="vibe">Sun is your engine. Rising is your door. Pick yours and read what the combination is actually doing in your chart.</p>

    ${blocks}

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=sunrising-index">Want a deeper, two-layer read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 144 sun×rising pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
