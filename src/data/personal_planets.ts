// Personal-planet × sign SEO funnel — /gab44/personal-planets (index)
// + /gab44/personal-planets/{planet}-{sign} (36 pages = 3 planets × 12 signs).
// Targets the second-tier astrology vocabulary that follows sun/moon/rising:
// "mercury in {sign}", "venus in {sign}", "mars in {sign}". These are the
// classical inner / personal planets — communication, love, and drive.
// Sun and Moon already have dedicated lanes (/gab44/{sign} daily and /moon).
// Each page routes warm traffic to /gab44/reading?ref=personal-{slug}.

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'

export type PersonalPlanet = 'mercury' | 'venus' | 'mars'
export const PERSONAL_PLANETS: PersonalPlanet[] = ['mercury', 'venus', 'mars']

interface SignBeat {
  symbol: string
  element: 'fire' | 'earth' | 'air' | 'water'
  modality: 'cardinal' | 'fixed' | 'mutable'
}

const SIGN_BEATS: Record<Sign, SignBeat> = {
  aries:       { symbol: '♈', element: 'fire',  modality: 'cardinal' },
  taurus:      { symbol: '♉', element: 'earth', modality: 'fixed'    },
  gemini:      { symbol: '♊', element: 'air',   modality: 'mutable'  },
  cancer:      { symbol: '♋', element: 'water', modality: 'cardinal' },
  leo:         { symbol: '♌', element: 'fire',  modality: 'fixed'    },
  virgo:       { symbol: '♍', element: 'earth', modality: 'mutable'  },
  libra:       { symbol: '♎', element: 'air',   modality: 'cardinal' },
  scorpio:     { symbol: '♏', element: 'water', modality: 'fixed'    },
  sagittarius: { symbol: '♐', element: 'fire',  modality: 'mutable'  },
  capricorn:   { symbol: '♑', element: 'earth', modality: 'cardinal' },
  aquarius:    { symbol: '♒', element: 'air',   modality: 'fixed'    },
  pisces:      { symbol: '♓', element: 'water', modality: 'mutable'  }
}

interface PlanetBeat {
  glyph: string
  display: string
  rules: string
  question: string
  domain_short: string
  c1: string
  c2: string
}

const PLANET_BEATS: Record<PersonalPlanet, PlanetBeat> = {
  mercury: {
    glyph: '☿',
    display: 'Mercury',
    rules: 'mind, communication, learning, daily exchange',
    question: 'How does your mind move when no one is grading it?',
    domain_short: 'how you think and talk',
    c1: '#7ec8e8',
    c2: '#4a87b9'
  },
  venus: {
    glyph: '♀',
    display: 'Venus',
    rules: 'love, beauty, taste, what you find worth keeping',
    question: 'What do you actually find beautiful — and how do you love?',
    domain_short: 'what you love and how you attract',
    c1: '#f7a8c4',
    c2: '#c96442'
  },
  mars: {
    glyph: '♂',
    display: 'Mars',
    rules: 'drive, will, anger, sex, the engine',
    question: 'How do you go after what you want — and how do you fight?',
    domain_short: 'how you act and how you fight',
    c1: '#ff8a4d',
    c2: '#c93a22'
  }
}

const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

interface PersonalProfile {
  planet: PersonalPlanet
  sign: Sign
  vibe: string
  body: string
  shadow: string
  practice: string
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Per-(planet, sign) hand-shaped copy. Three short paragraphs each:
// vibe (one-liner), body (the meaty paragraph), shadow + practice.
// Built from a small grammar rather than lookup-by-slug so the surface
// stays maintainable.
function buildProfile(planet: PersonalPlanet, sign: Sign): PersonalProfile {
  const sm = SIGN_BEATS[sign]
  const planetMeta = PLANET_BEATS[planet]
  const Sign = titleCase(sign)
  const Planet = planetMeta.display

  const elementLine: Record<SignBeat['element'], string> = {
    fire:  'visible, warm, fast — there is a heat to it that the room can feel',
    earth: 'embodied, deliberate, durable — it shows up as something you can hold',
    air:   'mental, social, articulate — it moves through ideas before it moves through the body',
    water: 'felt, intuitive, undertow — it works under the surface and surprises people'
  }

  const modalityLine: Record<SignBeat['modality'], string> = {
    cardinal: 'tends to start things — to initiate, to push the first move',
    fixed:    'tends to hold — to stay with, to commit, to outlast',
    mutable:  'tends to adapt — to flex, to translate, to revise in motion'
  }

  // Per-planet × per-element framing. Keeps the body distinct without
  // 36 hand-written paragraphs.
  const mercuryByElement: Record<SignBeat['element'], string> = {
    fire:  `${Sign} Mercury thinks fast and out loud. Ideas arrive as urges, not arguments. You convince by enthusiasm. Sometimes you arrive at the conclusion before the reasoning has caught up — and you are usually right anyway.`,
    earth: `${Sign} Mercury thinks slowly, concretely, and only speaks when something is solid. Words are tools, not ornaments. People sometimes mistake the slowness for hesitation; it is actually quality control.`,
    air:   `${Sign} Mercury is at home — quick, plural, articulate. The mind connects across distance. Conversation is the medium where the thinking actually happens; you do not know what you think until you say it.`,
    water: `${Sign} Mercury thinks in image, feeling, and pattern more than words. Intuition arrives first; explanation arrives later. The mind reads rooms, undercurrents, and what wasn't said.`
  }

  const venusByElement: Record<SignBeat['element'], string> = {
    fire:  `${Sign} Venus loves with heat and visibility. Romance reads as adventure, chase, novelty. You attract by being unmistakably yourself, by burning bright. The early sparks are where you live.`,
    earth: `${Sign} Venus loves slowly, sensually, and for the long haul. Touch matters. Building a life with someone — meals, rituals, shared rooms — is the love language. Loyalty is how you show up.`,
    air:   `${Sign} Venus loves through conversation, ideas, and freedom. Attraction needs intellectual chemistry first. Friendship is the foundation; merging is negotiated, not assumed.`,
    water: `${Sign} Venus loves deeply, dissolving the line between you and the other. Romance feels mythic — soul-tier connection or nothing. You feel everything the partner feels, sometimes before they do.`
  }

  const marsByElement: Record<SignBeat['element'], string> = {
    fire:  `${Sign} Mars acts loudly. The drive is visible, the anger fast, the desire direct. You start fights, finish projects, and make things happen by sheer momentum. Sitting still feels like dying.`,
    earth: `${Sign} Mars acts patiently. The drive is steady, the anger slow to surface and slow to leave. You wear opponents down by outlasting them. Sex and effort both run on stamina.`,
    air:   `${Sign} Mars acts through ideas, words, and social moves. The fight is rhetorical before it is physical. Strategy beats brute force every time. Anger comes out as cold rebuttal.`,
    water: `${Sign} Mars acts indirectly. The drive moves through emotion, art, or strategic depth. Anger is rarely on the surface — it works underneath, sometimes years long. When it lands, it transforms.`
  }

  const bodyByPlanet = {
    mercury: mercuryByElement[sm.element],
    venus:   venusByElement[sm.element],
    mars:    marsByElement[sm.element]
  }

  const shadowByPlanet: Record<PersonalPlanet, string> = {
    mercury: `The shadow: overthinking, gossip, sharp speech weaponized against tenderness. The work is befriending your specific kind of mind instead of fighting it.`,
    venus:   `The shadow: approval-seeking, transactional love, mistaking what you were taught to find beautiful for what you actually do. The work is reclaiming taste from inheritance.`,
    mars:    `The shadow: misplaced rage, chronic procrastination (energy held in the body without release), or fighting the wrong battle to avoid the right one. The work is friendship with your own desire.`
  }

  const practiceByPlanet: Record<PersonalPlanet, string> = {
    mercury: `Practice: notice the speed your mind likes. Do not borrow another sign's tempo. Read what your tempo reads best. Speak to who actually listens at your speed.`,
    venus:   `Practice: list five things you find beautiful that no one else in your life agrees with. That is your Venus, undiluted. Spend more time inside it.`,
    mars:    `Practice: name one thing you actually want this month — not should-want. Take one visible step toward it. Mars does not grow until it is used.`
  }

  return {
    planet,
    sign,
    vibe: `${Planet} in ${Sign} is ${planetMeta.domain_short} ${elementLine[sm.element].split(' — ')[0]}.`,
    body: bodyByPlanet[planet] + ` Your ${sm.modality} ${modalityLine[sm.modality]}, which colours how this ${Planet} actually shows up day to day.`,
    shadow: shadowByPlanet[planet],
    practice: practiceByPlanet[planet]
  }
}

export const PERSONAL_PROFILES: Record<string, PersonalProfile> = (() => {
  const out: Record<string, PersonalProfile> = {}
  for (const planet of PERSONAL_PLANETS) {
    for (const sign of SIGNS) {
      out[`${planet}-${sign}`] = buildProfile(planet, sign)
    }
  }
  return out
})()

export const PERSONAL_PLANET_SLUGS = Object.keys(PERSONAL_PROFILES)

export function isPersonalPlanetSlug(slug: string): boolean {
  return slug in PERSONAL_PROFILES
}

export function parsePersonalPlanetSlug(slug: string): { planet: PersonalPlanet; sign: Sign } | null {
  const m = slug.match(/^(mercury|venus|mars)-([a-z]+)$/)
  if (!m) return null
  const planet = m[1] as PersonalPlanet
  const sign = m[2] as Sign
  if (!SIGNS.includes(sign)) return null
  return { planet, sign }
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

export function personalPlanetPageHTML(slug: string): string {
  const p = PERSONAL_PROFILES[slug]
  if (!p) return ''
  const sm = SIGN_BEATS[p.sign]
  const planetMeta = PLANET_BEATS[p.planet]
  const Sign = titleCase(p.sign)
  const Planet = planetMeta.display
  const headline = `${Planet} in ${Sign}`
  const accent = { c1: planetMeta.c1, c2: planetMeta.c2 }
  const elementAccent = ELEMENT_ACCENT[sm.element]

  // Cross-link strip: same planet across other 11 signs.
  const otherSigns = SIGNS.filter((s) => s !== p.sign)
    .map((s) => `<a href="/gab44/personal-planets/${p.planet}-${s}">${planetMeta.glyph} ${Planet} in ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Cross-link strip: same sign across other 2 personal planets.
  const otherPlanets = PERSONAL_PLANETS.filter((pp) => pp !== p.planet)
    .map((pp) => `<a href="/gab44/personal-planets/${pp}-${p.sign}">${PLANET_BEATS[pp].glyph} ${PLANET_BEATS[pp].display} in ${Sign}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${p.sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/planets/${p.planet}">${planetMeta.glyph} ${Planet} (planet guide)</a>`,
    `<a href="/gab44/sun-rising">sun × rising (144 pages)</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">all 36 personal-planet pages</a>`
  ].join('')

  const title = `${headline} — ${planetMeta.domain_short} · gab44`
  const description = `${headline}: ${planetMeta.domain_short} when ${Planet} sits in a ${sm.element} ${sm.modality} sign. ${p.vibe} What it feels like, the shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Personal planets', item: `${SITE_URL}/gab44/personal-planets` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/personal-planets/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/personal-planets/${slug}`,
        about: `${headline} — astrology personal-planet placement`
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
<link rel="canonical" href="${SITE_URL}/gab44/personal-planets/${slug}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.vibe)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/personal-planets/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(planetMeta.glyph)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/personal-planets">all 36</a>
      <a href="/gab44/${p.sign}">${Sign} profile</a>
      <a href="/gab44/planets/${p.planet}">${Planet} guide</a>
      <a href="/gab44/reading?ref=personal-${slug}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">${planetMeta.glyph}</div>
      <div class="meta">${planetMeta.glyph} ${Planet} · ${sm.symbol} ${Sign} (${sm.element} · ${sm.modality}) · ${planetMeta.domain_short}</div>
    </div>
    <h1><span class="accent">${escapeHtml(headline)}</span></h1>
    <p class="vibe">${escapeHtml(p.vibe)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <h2>The shadow</h2>
    <p>${escapeHtml(p.shadow)}</p>

    <h2>Practice</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How this placement reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Planet</span><span class="v"><a href="/gab44/planets/${p.planet}">${planetMeta.glyph} ${Planet}</a> · ${planetMeta.rules}</span></div>
      <div class="row"><span class="k">Sign</span><span class="v"><a href="/gab44/${p.sign}">${sm.symbol} ${Sign}</a> · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Question this asks</span><span class="v" style="text-align:left;font-style:italic;">${escapeHtml(planetMeta.question)}</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=personal-${slug}">Get a $9 reading on this ${Planet} →</a>
    </div>

    <h2>${Planet} across the other 11 signs</h2>
    <div class="strip">${otherSigns}</div>

    <h2>Other personal planets in ${Sign}</h2>
    <div class="strip">${otherPlanets}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · ${sm.element} · ${sm.modality} · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function personalPlanetsIndexHTML(): string {
  const blocks = PERSONAL_PLANETS.map((planet) => {
    const planetMeta = PLANET_BEATS[planet]
    const cards = SIGNS.map((s) => {
      const sm = SIGN_BEATS[s]
      const accent = ELEMENT_ACCENT[sm.element]
      return `<a class="sign-card" href="/gab44/personal-planets/${planet}-${s}">
        <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">${sm.symbol}</div>
        <div class="name">${planetMeta.display} in ${titleCase(s)}</div>
        <div class="vibe-mini">${sm.element} · ${sm.modality}</div>
      </a>`
    }).join('')
    return `<h2 style="margin-top:36px;">${planetMeta.glyph} <span class="accent">${planetMeta.display}</span> <span style="font-size:13px;color:var(--fg-muted);font-weight:500;letter-spacing:0.06em;text-transform:uppercase;margin-left:8px;">${planetMeta.rules}</span></h2>
    <p style="margin:0 0 14px;font-style:italic;color:var(--fg-dim);">${escapeHtml(planetMeta.question)}</p>
    <div class="signs-grid">${cards}</div>`
  }).join('')

  const title = `Mercury, Venus, Mars by sign — 36 evergreen pages · gab44 ✨`
  const description = `Mercury in {sign}, Venus in {sign}, Mars in {sign} — every personal planet × every zodiac sign. How you think, how you love, how you act. 36 pages. Plus a $9 personal reading.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/personal-planets" />
<meta property="og:title" content="Mercury, Venus, Mars by sign · gab44" />
<meta property="og:description" content="36 evergreen pages — every personal planet through every sign." />
<meta property="og:type" content="website" />
<style>:root{--c1:#7ec8e8;--c2:#c93a22;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/planets">all 10 planets</a>
      <a href="/gab44/reading?ref=personal-planets-index">$9 reading</a>
      <a href="/healing">healing sounds</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#7ec8e8,#c93a22)">☿♀♂</div>
      <div class="meta">36 pages · 3 personal planets × 12 signs · evergreen</div>
    </div>
    <h1>Mercury, Venus, <span class="accent">Mars</span> by sign</h1>
    <p class="vibe">Sun is who you are. Moon is what you feel. The personal planets are how you do the work — think, love, act. Pick yours.</p>

    ${blocks}

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=personal-planets-index">Want a deeper, planet-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 36 personal-planet × sign pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
