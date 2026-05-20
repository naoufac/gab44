// North Node × sign SEO funnel — /gab44/north-node (index)
// + /gab44/north-node/{sign} (12 pages). Targets one of the highest-intent
// astrology queries: "north node in {sign} meaning", "{sign} north node life
// purpose". The lunar nodes (Rahu/Ketu in Vedic, North/South in Western)
// describe the soul's growth direction (North) and the comfortable past
// (South). Each page also references the South Node — the opposite sign —
// since they are an axis. Routes warm traffic to /gab44/reading?ref=node-{sign}.

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'

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

const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

// North Node opposite axis: each sign pairs with the sign 180° away.
const OPPOSITE: Record<Sign, Sign> = {
  aries: 'libra', taurus: 'scorpio', gemini: 'sagittarius',
  cancer: 'capricorn', leo: 'aquarius', virgo: 'pisces',
  libra: 'aries', scorpio: 'taurus', sagittarius: 'gemini',
  capricorn: 'cancer', aquarius: 'leo', pisces: 'virgo'
}

interface NodeProfile {
  sign: Sign
  south: Sign
  growth: string         // what the North Node calls you toward
  release: string        // what the South Node tempts you to retreat into
  body: string           // big paragraph
  practice: string       // working with it
  birth_years: string    // approx years when North Node was in this sign (~18.6yr cycle)
}

// North Node sign hand-shaped meaning. Each is an honest paragraph,
// not a horoscope. The North Node is the unfamiliar growth direction,
// the muscle you came in to build. The South Node is the comfortable
// retreat. Reading them together is what makes the lane useful.
export const NODE_PROFILES: Record<Sign, NodeProfile> = {
  aries: {
    sign: 'aries', south: 'libra',
    growth: 'Decisive action. Saying "I want." Taking the first move without polling the room.',
    release: 'People-pleasing. Outsourcing decisions to keep the peace. Living through the partner.',
    body: 'A North Node in Aries means you came in to learn courage, directness, and the right to act on your own behalf. Your soul knows partnership, mediation, fairness — that is the South Node in Libra speaking, and it is genuinely good at all of those things, sometimes too good. The growth is the willingness to disappoint someone in service of your own clear yes. The discomfort of going first, of being the one who breaks the symmetry, is exactly the muscle this lifetime is asking you to build.',
    practice: 'Make one decision today without asking for input. Notice the body\'s panic — that is the old Libran reflex protesting. Move anyway.',
    birth_years: 'approx 1985–1987, 2003–2005, 2022–2023 (and other 18.6-year cycles)'
  },
  taurus: {
    sign: 'taurus', south: 'scorpio',
    growth: 'Slowness. Embodied stability. Building something durable in the visible world.',
    release: 'Crisis-seeking. Power dynamics. The need for intensity to feel alive.',
    body: 'A North Node in Taurus calls the soul out of the underworld and into the garden. The South Node in Scorpio knows depth, transformation, other people\'s money, the shadow — and there is gravitas there, but also the addiction to intensity. The growth is in slowing down, owning your own resources, learning to enjoy the daily without needing a crisis to justify it. Pleasure is the practice. Quiet is the practice. Building a life one repeated peaceful day at a time is the practice.',
    practice: 'Spend an hour doing something simple and bodily — cooking, walking, gardening — without making it meaningful. The Taurus North Node grows in the unglamorous.',
    birth_years: 'approx 1984–1985, 2002–2003, 2021–2022'
  },
  gemini: {
    sign: 'gemini', south: 'sagittarius',
    growth: 'Curiosity. Asking instead of declaring. Local connection over global pronouncement.',
    release: 'Knowing the answer before listening. Preaching. Restless flight from the daily.',
    body: 'A North Node in Gemini softens the prophet into the student. The South Node in Sagittarius is good at vision, philosophy, the long view — sometimes so good it never lands. The growth is in conversation, the small detail, the neighbor, the sibling, the practical question. Curiosity over certainty. Reading instead of preaching. Trusting that the daily mind, with its small specific questions, is also a sacred instrument.',
    practice: 'Pick one thing you would normally pronounce on. Instead, ask three questions about it and write down the answers. The North Node grows on the question side, not the answer side.',
    birth_years: 'approx 1983–1984, 2001–2002, 2020–2021'
  },
  cancer: {
    sign: 'cancer', south: 'capricorn',
    growth: 'Tenderness. Building an emotional home. Asking for and receiving care.',
    release: 'Over-functioning. Achievement as identity. Treating life as a CV.',
    body: 'A North Node in Cancer means you came in to learn to be cared for, not just to be the responsible one. The South Node in Capricorn knows how to deliver, how to be the adult, how to organize the family. The growth is in the soft side: feeling instead of managing the feeling, building a kitchen instead of building another deliverable, letting yourself need the people in your life. Cancer asks: what does home actually feel like, when you are not earning it?',
    practice: 'Let someone take care of one thing you would normally do alone. Notice the discomfort. The Cancer North Node grows in the receiving.',
    birth_years: 'approx 1982–1984, 2000–2001, 2018–2020'
  },
  leo: {
    sign: 'leo', south: 'aquarius',
    growth: 'Personal warmth. Standing on your own stage. Owning the specific gift, not the collective wisdom.',
    release: 'Detachment. Hiding behind the group. Being the observer who never claims a side.',
    body: 'A North Node in Leo asks the soul to step out from behind the network and onto its own stage. The South Node in Aquarius knows how to stand for the collective, the cause, the future — and it is right that those things matter. The growth is in claiming the personal: the heart, the play, the creative gesture that has your specific signature on it. Leo says: stop being the cool observer. Be warm. Be visible. Make something that is unmistakably yours.',
    practice: 'Make one creative thing this week and put your name on it. Share it with at least one person. The Leo North Node grows in the personal, signed gesture.',
    birth_years: 'approx 1981–1982, 1999–2000, 2017–2018'
  },
  virgo: {
    sign: 'virgo', south: 'pisces',
    growth: 'Daily practice. Useful work. Caring for the body. Refining one specific craft.',
    release: 'Drift. Bypass. Mistaking dissolution for transcendence.',
    body: 'A North Node in Virgo brings the dreamer down into the body and the workshop. The South Node in Pisces is good at empathy, surrender, the mystic register — and those are real gifts, but also a place to disappear. The growth is in the daily: the routine, the discipline, the craft worked at slowly until it becomes a contribution. Service over savior. Specific over cosmic. Doing one small thing well today is more aligned than feeling everything everywhere.',
    practice: 'Pick one daily practice — same time, same shape — and do it for two weeks without seeking insight. The Virgo North Node grows in the unglamorous repetition.',
    birth_years: 'approx 1980–1981, 1998–1999, 2016–2017'
  },
  libra: {
    sign: 'libra', south: 'aries',
    growth: 'Partnership. Listening. Letting the other matter as much as the self.',
    release: 'Going it alone. Reactive independence. The fight as default.',
    body: 'A North Node in Libra calls the warrior to learn the partner. The South Node in Aries knows initiation, courage, the solo charge — and there is real strength there, but also a tendency to keep moving so fast nobody else can come. The growth is in slowing down for the other: the conversation, the negotiation, the willingness to be changed by relationship. Libra asks: what would it look like to actually share a life with someone, not just do the parallel-track thing?',
    practice: 'Have a real conversation today where you change your mind based on what someone else said. The Libra North Node grows in the willingness to be moved.',
    birth_years: 'approx 1979–1980, 1997–1998, 2015–2016'
  },
  scorpio: {
    sign: 'scorpio', south: 'taurus',
    growth: 'Depth. Intimacy. The willingness to be transformed. Sharing power and resources.',
    release: 'Comfort. Material certainty. Avoiding the uncomfortable underneath.',
    body: 'A North Node in Scorpio asks the soul to leave the safe garden and walk into the underworld. The South Node in Taurus knows pleasure, stability, the body, the bank account — and those are real graces, but they can become a place to hide from depth. The growth is in intimacy: real merging, shared resources, the willingness to be undone by another and remade. Scorpio asks: what would change if you stopped clutching what is already yours and risked the dive?',
    practice: 'Have one honest conversation about something you would normally avoid. Money, sex, power, fear — pick one. The Scorpio North Node grows in the dive.',
    birth_years: 'approx 1977–1979, 1995–1997, 2014–2015'
  },
  sagittarius: {
    sign: 'sagittarius', south: 'gemini',
    growth: 'Vision. Big-picture meaning. Travel — literal and intellectual. Speaking the truth you have lived.',
    release: 'Endless information. Trivia as identity. Talking around the truth instead of living it.',
    body: 'A North Node in Sagittarius asks the soul to become the teacher it has spent lifetimes preparing to be. The South Node in Gemini is endlessly curious, articulate, plural — and that is a real gift, but also a way to never quite land. The growth is in the long arc: travel, philosophy, faith, the willingness to pronounce a meaning out loud and stand by it. Sagittarius asks: what is the story your life is actually telling? Tell it.',
    practice: 'Write one sentence that would be true if you had to put it on a flag. Live it for a week. The Sagittarius North Node grows in the willingness to commit to a meaning.',
    birth_years: 'approx 1976–1977, 1994–1995, 2012–2014'
  },
  capricorn: {
    sign: 'capricorn', south: 'cancer',
    growth: 'Adult responsibility. Building structure. Showing up in the world as the authority.',
    release: 'Family enmeshment. The endless caregiver role. Hiding in the inner life.',
    body: 'A North Node in Capricorn asks the soul to grow up, in the best sense. The South Node in Cancer knows family, home, the inner life — and those gifts are real, but they can become a small kingdom you never leave. The growth is in the public arena: career, structure, the long discipline that turns potential into legacy. Capricorn asks: what are you actually building, in the visible world, that will outlast the moods?',
    practice: 'Take one concrete step on a long-term goal today, even if it is small and unglamorous. The Capricorn North Node grows in the steady visible build.',
    birth_years: 'approx 1974–1976, 1992–1994, 2011–2012'
  },
  aquarius: {
    sign: 'aquarius', south: 'leo',
    growth: 'Community. The collective project. Releasing personal acclaim for the larger work.',
    release: 'Personal performance. Needing the room\'s applause. Identity wrapped around individual recognition.',
    body: 'A North Node in Aquarius asks the soloist to join the choir. The South Node in Leo knows stage, charisma, the personal gift — and there is real magnetism there, but also a tendency to make every project about the personal narrative. The growth is in the friend, the network, the cause that matters more than your name on it. Aquarius asks: what could you build if you stopped needing it to be visibly yours?',
    practice: 'Contribute to something you will not get credit for this week. Notice the resistance. The Aquarius North Node grows in the anonymous gift.',
    birth_years: 'approx 1972–1974, 1991–1992, 2009–2011'
  },
  pisces: {
    sign: 'pisces', south: 'virgo',
    growth: 'Trust. Surrender. The willingness to feel without immediately optimizing the feeling.',
    release: 'Endless improvement. Critic-mind. Treating the self as a problem to solve.',
    body: 'A North Node in Pisces asks the perfectionist to put down the spreadsheet. The South Node in Virgo is good at refining, fixing, healing — and those gifts are real, but they can become a way to never let anything be enough. The growth is in surrender: trusting the larger life you are part of, feeling the feeling without rushing to fix it, making art instead of analysis, prayer instead of pros-and-cons. Pisces asks: what would it look like to let the universe carry some of this?',
    practice: 'Spend twenty minutes today doing nothing useful. Walk, daydream, listen to music with your eyes closed. The Pisces North Node grows in the un-engineered moment.',
    birth_years: 'approx 1971–1972, 1989–1991, 2008–2009'
  }
}

export const NODE_SIGNS = SIGNS

export function isNodeSign(s: string): s is Sign {
  return SIGNS.includes(s as Sign)
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
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
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 10px 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 20px;
  }
  .panel h3 {
    font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; }
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
  .sign-card .axis { color: var(--fg-muted); font-size: 12px; margin-bottom: 6px; }
  .sign-card .vibe-mini { color: var(--fg-dim); font-size: 13px; line-height: 1.45; }
  footer { margin-top: 48px; color: var(--fg-muted); font-size: 12px; text-align: center; }
`

export function nodePageHTML(sign: Sign): string {
  const p = NODE_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const south = SIGN_BEATS[p.south]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const South = titleCase(p.south)
  const headline = `North Node in ${Sign}`

  // Other signs strip — discover the other 11 nodes.
  const otherNodes = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/north-node/${s}">☊ NN ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/${p.south}">${south.symbol} ${South} (your South Node)</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign (sister chart-point axis)</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/north-node">all 12 North Nodes</a>`
  ].join('')

  const title = `${headline} — life purpose, growth direction, South Node in ${South} · gab44`
  const description = `${headline}: the soul's growth direction. ${p.growth} South Node in ${South}: ${p.release} The full axis explained, with practice and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'North Node', item: `${SITE_URL}/gab44/north-node` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/north-node/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/north-node/${sign}`,
        about: `${headline} — life purpose / lunar nodes`
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
<link rel="canonical" href="${SITE_URL}/gab44/north-node/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.growth)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/north-node/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%98%8A%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/north-node">all 12 nodes</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/${p.south}">${South} profile (SN)</a>
      <a href="/gab44/reading?ref=node-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">☊ ${sm.symbol}</div>
      <div class="meta">North Node ☊ ${Sign} · South Node ☋ ${South} · the growth axis</div>
    </div>
    <h1><span class="accent">North Node</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.growth)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>☊ North Node in ${Sign} — grow toward</h3>
        <p>${escapeHtml(p.growth)}</p>
      </div>
      <div class="panel">
        <h3>☋ South Node in ${South} — release the over-reliance on</h3>
        <p>${escapeHtml(p.release)}</p>
      </div>
    </div>

    <h2>Practice</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How this axis reads</h2>
    <div class="grid">
      <div class="row"><span class="k">North Node</span><span class="v">☊ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">South Node</span><span class="v">☋ ${south.symbol} ${South} · ${south.element} · ${south.modality}</span></div>
      <div class="row"><span class="k">Likely birth-year band</span><span class="v">${escapeHtml(p.birth_years)}</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~18.6-year nodal cycle</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=node-${sign}">Get a $9 reading on your nodes →</a>
    </div>

    <h2>The other 11 North Nodes</h2>
    <div class="strip">${otherNodes}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · lunar nodes / life-purpose axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function northNodeIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = NODE_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const south = SIGN_BEATS[p.south]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/north-node/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">☊ ${sm.symbol}</div>
      <div class="name">North Node in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} ↔ ${south.symbol} ${titleCase(p.south)} (SN)</div>
      <div class="vibe-mini">${escapeHtml(p.growth)}</div>
    </a>`
  }).join('')

  const title = `North Node by sign — life purpose & growth direction · gab44 ✨`
  const description = `North Node in {sign} — your soul's growth direction across all 12 zodiac signs. The lunar nodes are the most-asked-about placement after sun/moon/rising. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/north-node" />
<meta property="og:title" content="North Node by sign · gab44" />
<meta property="og:description" content="The soul's growth direction across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#6943e0;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/vertex">◈ Vertex by sign</a>
      <a href="/gab44/reading?ref=north-node-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#6943e0,#c96442)">☊</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · ~18.6-year nodal cycle</div>
    </div>
    <h1>North Node <span class="accent">by sign</span></h1>
    <p class="vibe">Sun is who you are. Moon is what you feel. The North Node is what your soul came in to grow. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=north-node-index">Want a deeper, node-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 North-Node-by-sign pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
