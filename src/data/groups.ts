// Element + Modality SEO funnel — /gab44/elements/{fire,earth,air,water}
// + /gab44/modality/{cardinal,fixed,mutable} + /gab44/groups index.
// 7 evergreen pages, zero LLM cost, all routing to the $9 reading via
// ?ref=element-{name} or ?ref=modality-{name}. Targets high-volume keywords:
// "fire signs personality", "what are the cardinal signs", "water signs zodiac",
// "mutable signs". Sister surface to /gab44/about (per-sign deep profiles).

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'
import { PROFILES } from './about'

export type Element = 'fire' | 'earth' | 'air' | 'water'
export type Modality = 'cardinal' | 'fixed' | 'mutable'

export const ELEMENTS: readonly Element[] = ['fire', 'earth', 'air', 'water']
export const MODALITIES: readonly Modality[] = ['cardinal', 'fixed', 'mutable']

interface ElementInfo {
  glyph: string
  signs: [Sign, Sign, Sign]
  one_liner: string
  essence: string
  shared_gifts: [string, string, string]
  shared_shadows: [string, string, string]
  in_love: string
  in_career: string
  with_other_elements: string
  c1: string
  c2: string
}

interface ModalityInfo {
  signs: [Sign, Sign, Sign, Sign]
  one_liner: string
  essence: string
  role_in_year: string
  shared_pattern: string
  in_relationships: string
  in_work: string
  c1: string
  c2: string
}

const ELEMENT_INFO: Record<Element, ElementInfo> = {
  fire: {
    glyph: '🜂',
    signs: ['aries', 'leo', 'sagittarius'],
    one_liner: 'The fire signs are the spark, the spotlight, and the open road.',
    essence: 'Fire is the element of will, courage, and visible warmth. Aries strikes the match, Leo holds the flame steady, Sagittarius carries the torch toward the next horizon. Together they form the engine of the zodiac — the energy that begins, blesses, and ventures. Fire teaches the chart that joy is not frivolous, that desire is information, and that the world needs people willing to go first.',
    shared_gifts: [
      'courage that moves before consensus',
      'warmth that draws people forward',
      'faith in life — that something good is on its way'
    ],
    shared_shadows: [
      'impatience with slow processes and slower people',
      'pride that turns brittle when unwitnessed',
      'starting more than they finish'
    ],
    in_love: 'Fire signs love loudly. They want to be chosen, named, claimed — and they will choose right back with everything they have. Don\'t play cool with a fire sign; cool reads as cold, and the flame goes elsewhere. They\'re not asking for a performance — they\'re asking for present-tense affection, real interest, and a partner whose own light isn\'t threatened by theirs.',
    in_career: 'Fire signs thrive where momentum matters more than process. Founders, performers, athletes, salespeople, leaders, evangelists, teachers of meaning. Bureaucracy strangles the flame. Best when given autonomy, a horizon to aim at, and permission to course-correct in the open.',
    with_other_elements: 'Fire and air are natural amplifiers — air feeds fire, ideas catch flame. Fire and earth can be a slow-build power couple if neither tries to manage the other. Fire and water is the most challenging match: steam happens, but so does evaporation. The work in any fire pairing is making sure the flame stays ignited without burning down what surrounds it.',
    c1: '#ff8a4d',
    c2: '#c93a22'
  },
  earth: {
    glyph: '🜃',
    signs: ['taurus', 'virgo', 'capricorn'],
    one_liner: 'The earth signs are the body of the zodiac — the slow, the real, the lasting.',
    essence: 'Earth is the element of substance and stewardship. Taurus roots into the senses, Virgo refines the form, Capricorn climbs the long arc. Together they remind the chart that vision without execution is daydreaming, and that the body is sacred ground. Earth teaches patience as a power, craft as devotion, and the truth that what is built slowly tends to last.',
    shared_gifts: [
      'patience that compounds into mastery',
      'reliability that becomes the foundation others build on',
      'practical intelligence — turning ideas into things that actually work'
    ],
    shared_shadows: [
      'over-functioning that quietly resents the help it never asked for',
      'security as a cage — the comfortable becomes the trap',
      'difficulty trusting what cannot be measured'
    ],
    in_love: 'Earth signs love through showing up — repeatedly, reliably, in the small daily ways most people overlook. Their love language is presence: cooked meals, fixed problems, remembered preferences, a body next to yours when the day got hard. Don\'t expect grand declarations; expect a hundred quiet ones. Once chosen, you are chosen for the long arc.',
    in_career: 'Earth signs build institutions, craft objects, manage resources, hold the long-term. Architecture, finance, agriculture, medicine, design, accounting, real estate, anything that rewards diligence and depth. They are often the ones whose work outlasts the trend cycle — and the ones nobody notices until they leave.',
    with_other_elements: 'Earth and water are the natural lovers of the zodiac — water softens earth, earth contains water, both deepen with time. Earth and earth doubles down on stability and risk doubling down on inertia. Earth and fire creates a slow-burn power couple if the earth doesn\'t try to manage the flame. Earth and air can be confounding — different operating systems, different metabolisms.',
    c1: '#a98c4f',
    c2: '#5e6f3a'
  },
  air: {
    glyph: '🜁',
    signs: ['gemini', 'libra', 'aquarius'],
    one_liner: 'The air signs are the conversation of the zodiac — language, idea, connection.',
    essence: 'Air is the element of mind and meaning. Gemini darts and translates, Libra balances and beautifies, Aquarius transmits the future. Together they form the nervous system of the zodiac — the layer where ideas travel, relationships form, and the visible world gets named. Air teaches the chart that thinking is a kind of love, that conversation is sacred, and that the future is a place we build with words first.',
    shared_gifts: [
      'verbal intelligence — language as instrument',
      'social fluency — the ability to read a room and translate between worlds',
      'the gift of distance — seeing the system, not just the seat inside it'
    ],
    shared_shadows: [
      'over-thinking that substitutes for feeling',
      'idealism that judges the people in front of them by abstractions',
      'detachment that calls itself perspective when it\'s actually avoidance'
    ],
    in_love: 'Air signs fall through the mind first. Make them think and they will lean in; bore them and they will leave gracefully and you might not realize they\'re gone for weeks. They want a real conversation, a shared curiosity, a partner whose ideas surprise them. Pure physical attraction without intellectual spark wears off fast for an air sign — keep the questions alive.',
    in_career: 'Air signs thrive in fields where language, logic, design, or social fluency is the actual product. Writing, journalism, teaching, design, law, diplomacy, tech, brand, mediation. Lone-wolf monastic roles starve them. Best in dialogue with collaborators or audiences — the work is in the exchange.',
    with_other_elements: 'Air and fire are mutual amplifiers — air feeds fire, fire keeps air from drifting. Air and water creates a layered, often poetic match if the air can stay long enough to feel and the water can stay clear enough to think. Air and earth is a different-frequency pairing — works beautifully when each respects the other\'s pace; fails when each tries to convert the other.',
    c1: '#7ec8e8',
    c2: '#4a87b9'
  },
  water: {
    glyph: '🜄',
    signs: ['cancer', 'scorpio', 'pisces'],
    one_liner: 'The water signs are the feeling body of the zodiac — emotion, intuition, depth.',
    essence: 'Water is the element of feeling and the unseen. Cancer holds the tides, Scorpio dives the depths, Pisces is the ocean itself. Together they form the emotional intelligence of the zodiac — the layer that knows before knowing, that protects what matters, that turns wound into medicine. Water teaches that softness is information, that intuition is a sense organ, and that some truths only feeling can reach.',
    shared_gifts: [
      'emotional radar — picking up the unspoken before it\'s said',
      'loyalty after trust — a deeper, fiercer kind once earned',
      'the alchemy of holding pain without flinching, and turning it into meaning'
    ],
    shared_shadows: [
      'absorbing other people\'s moods and calling it empathy when it\'s actually merger',
      'withdrawing into the shell instead of saying what is wrong',
      'memory that turns into grudge or guilt instead of release'
    ],
    in_love: 'Water signs love deeply, slowly, and with the whole body. They need to feel safe before they feel anything else — and once safe, they pour themselves in entirely. They want a partner who can sit with the feeling, not fix it. Don\'t rush, don\'t flee, don\'t weaponize what they shared with you. Betrayal is rarely forgiven; faithfulness is rarely forgotten.',
    in_career: 'Water signs thrive in fields where feeling is the actual instrument — therapy, healing, art, music, hospitality, care work, ministry, depth research. They need work with meaning; the soulless gig drains them faster than any other element. Often called to hold what others cannot bear.',
    with_other_elements: 'Water and earth is the most natural pairing — earth gives water shape, water nourishes earth. Water and water can be exquisite when both stay near the surface together; risks pulling each other into deeper currents than either can hold. Water and fire is steam — can power a room or boil itself dry. Water and air requires extra translation, but can produce poetry neither could write alone.',
    c1: '#6f86d6',
    c2: '#48499c'
  }
}

const MODALITY_INFO: Record<Modality, ModalityInfo> = {
  cardinal: {
    signs: ['aries', 'cancer', 'libra', 'capricorn'],
    one_liner: 'The cardinal signs are the initiators — they begin every season and set the chart in motion.',
    essence: 'Cardinal signs sit at the four solstices and equinoxes — the pivot points of the year. Aries opens spring with the will to begin. Cancer opens summer with the ache to belong. Libra opens autumn with the discipline of balance. Capricorn opens winter with the long climb. Each is a starter — but they start in different keys: Aries starts the self, Cancer starts the home, Libra starts the partnership, Capricorn starts the legacy.',
    role_in_year: 'Cardinal energy is initiating energy. These four signs each hold a turning point: equinox, solstice, equinox, solstice. They don\'t maintain — they originate. The fixed signs come behind to stabilize what cardinal began; the mutable signs come last to release it.',
    shared_pattern: 'Cardinal signs lead, even when they don\'t mean to. Drop a cardinal into any room and within a week they\'ll be the unofficial organizer of something. The four can clash — four people who all want to set the direction — but at their best they form the four poles of any healthy system: drive (Aries), care (Cancer), balance (Libra), structure (Capricorn).',
    in_relationships: 'Cardinal signs go first — they ask, they pursue, they take the conversation that needs to happen. They are not afraid of beginnings, but they need to be matched by someone who can hold the long middle. Cardinal-cardinal can be high-velocity or high-friction; the win is when each agrees to lead in their own domain.',
    in_work: 'Founders, project leads, opening-act specialists. Cardinal signs are gold for kicking off a new initiative, less reliable for the marathon middle. Pair them with fixed signs to finish what they started.',
    c1: '#d77b3f',
    c2: '#a14a1d'
  },
  fixed: {
    signs: ['taurus', 'leo', 'scorpio', 'aquarius'],
    one_liner: 'The fixed signs are the stabilizers — they hold what the cardinals started and refuse to drop the thread.',
    essence: 'Fixed signs sit in the middle of every season — the moment when the change has settled and the pattern is now the climate. Taurus holds the body of spring. Leo holds the heart of summer. Scorpio holds the descent of autumn. Aquarius holds the long stretch of winter. Each is an anchor — but they anchor different things: Taurus anchors the senses, Leo anchors the spotlight, Scorpio anchors the depth, Aquarius anchors the principle.',
    role_in_year: 'Fixed energy is sustaining energy. Where cardinal initiates and mutable releases, fixed holds the line. These are the loyal ones, the stubborn ones, the ones who will not be moved when they have decided. Their gift is consistency; their shadow is rigidity.',
    shared_pattern: 'Fixed signs are slow to commit and slower to leave. Once you are in their orbit, you are in for the long arc — for better and for worse. The four can lock horns spectacularly when their fixed-ness conflicts. At their best they are the four pillars of any lasting structure: substance (Taurus), heart (Leo), depth (Scorpio), principle (Aquarius).',
    in_relationships: 'Fixed signs love forever or not at all. They take longer to choose and longer to leave. Don\'t mistake their slow opening for disinterest — when they have decided, you will know, and you will likely still be hearing about it twenty years later. Fixed-fixed can be unbreakable or impossible; depends on whether the values align.',
    in_work: 'The reliable middle of any project — the people who keep the engine running after the founders move on to the next thing. Less suited to fast pivots; outstanding at sustained excellence. Pair them with cardinal signs to start and mutable signs to evolve.',
    c1: '#9d6c1f',
    c2: '#5d3f0e'
  },
  mutable: {
    signs: ['gemini', 'virgo', 'sagittarius', 'pisces'],
    one_liner: 'The mutable signs are the adapters — they release what fixed held and prepare the chart for the next season.',
    essence: 'Mutable signs sit at the end of each season — the moment when one cycle is composting into the next. Gemini lets spring become summer. Virgo lets summer become autumn. Sagittarius lets autumn become winter. Pisces lets winter become spring again. Each is a translator — but they translate different layers: Gemini translates language, Virgo translates utility, Sagittarius translates meaning, Pisces translates feeling.',
    role_in_year: 'Mutable energy is releasing energy. These four signs each hold the threshold between one season and the next — the part of the year where nothing is fully one thing or the other. Their gift is flexibility; their shadow is dispersion.',
    shared_pattern: 'Mutable signs change shape to fit the situation, which is why people sometimes accuse them of inconsistency. The truth is more interesting: they are reading the room before responding. The four can scatter when ungrounded, but at their best they form the four bridges of any evolving system: word (Gemini), service (Virgo), meaning (Sagittarius), spirit (Pisces).',
    in_relationships: 'Mutable signs are the most adaptable partners — for better and worse. They flex to the relationship, sometimes to the point of losing their own outline. They need a partner who can hold a stable shape while they shape-shift safely. Mutable-mutable can be magic or fog; depends on whether either of them has a center.',
    in_work: 'The translators, the integrators, the people who keep the team in motion when the situation changes. Excellent in roles that require reading the field and adjusting in real time. Less suited to roles that demand rigid execution; outstanding at evolving systems.',
    c1: '#5b8a72',
    c2: '#2f5a47'
  }
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

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function signCardHtml(sign: Sign, hrefBase: string): string {
  const meta = ZODIAC_META[sign]
  const profile = PROFILES[sign]
  return `<a class="sign-card" href="/gab44/${sign}/about">
    <div class="sym">${meta.symbol}</div>
    <div class="name">${cap(sign)}</div>
    <div class="dates">${meta.dates}</div>
    <div class="vibe">${escapeHtml(meta.vibe)}</div>
    <div class="planet">ruled by ${escapeHtml(profile.ruling_planet)}</div>
  </a>`
}

const SHARED_STYLES = (c1: string, c2: string) => `
  :root {${PALETTE}
    --grp-c1:${c1}; --grp-c2:${c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${c1}22 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${c2}22 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 760px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--grp-c1), var(--grp-c2)); box-shadow: 0 0 0 4px ${c1}1f; }
  h1 {
    font-size: 46px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .glyph { font-size: 0.85em; vertical-align: -2px; padding-right: 8px;
    background: linear-gradient(135deg, var(--grp-c1), var(--grp-c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  h1 .accent { background: linear-gradient(135deg, var(--grp-c1), var(--grp-c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span { background: var(--bg-2); padding: 5px 12px; border-radius: 999px; }
  h2 {
    font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg);
    letter-spacing: -0.01em;
  }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .essence-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .essence-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--grp-c1), var(--grp-c2));
  }
  .essence-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .essence-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .signs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 12px 0 8px; }
  @media (max-width: 600px) { .signs-grid { grid-template-columns: 1fr; } }
  .sign-card {
    background: var(--bg-1); border: 1px solid var(--line); padding: 18px 20px;
    border-radius: 14px; text-decoration: none; color: var(--fg);
    display: block; transition: border-color 0.15s, transform 0.05s;
  }
  .sign-card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .sign-card .sym { font-size: 26px; line-height: 1; margin-bottom: 4px; }
  .sign-card .name { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
  .sign-card .dates { font-size: 11px; color: var(--fg-muted); margin-bottom: 6px; }
  .sign-card .vibe { font-size: 12px; color: var(--fg-dim); margin-bottom: 4px; font-style: italic; }
  .sign-card .planet { font-size: 11px; color: var(--fg-muted); letter-spacing: 0.05em; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel ul { margin: 0; padding-left: 18px; font-size: 15px; color: var(--fg); }
  .panel ul li { margin-bottom: 6px; }
  .reading-cta {
    background: linear-gradient(135deg, var(--grp-c1) 0%, var(--grp-c2) 100%);
    color: var(--fg-on-accent); padding: 30px 32px; border-radius: 18px; margin: 32px 0;
    box-shadow: 0 8px 28px rgba(20,14,4,0.10);
  }
  .reading-cta h2 { margin: 0 0 8px; font-size: 24px; font-weight: 800; color: var(--fg-on-accent); }
  .reading-cta p { margin: 0 0 18px; opacity: 0.92; font-size: 15px; }
  .reading-cta .price { font-size: 38px; font-weight: 800; margin-right: 8px; }
  .reading-cta .price-note { opacity: 0.85; font-size: 13px; }
  .reading-cta a.btn {
    display: inline-block; background: #fffaf2; color: #1a1815;
    padding: 12px 26px; border-radius: 999px; font-weight: 700; text-decoration: none;
    font-size: 15px; transition: transform 0.05s;
  }
  .reading-cta a.btn:hover { transform: translateY(-1px); }
  .other-groups { margin: 36px 0 22px; }
  .other-groups h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .group-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .group-row a {
    text-decoration: none; padding: 10px 16px; border-radius: 999px;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 13px; font-weight: 600;
  }
  .group-row a:hover { border-color: var(--accent); color: var(--accent); }
  .group-row a.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .healing-promo {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .healing-promo a { color: var(--accent); text-decoration: none; font-weight: 600; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
`

export function elementPageHTML(element: Element): string {
  const info = ELEMENT_INFO[element]
  const Element = cap(element)
  const readingHref = `/gab44/reading?ref=element-${element}`

  const signNames = info.signs.map(cap).join(', ')
  const title = `${Element} Signs — ${signNames} · Personality, Love & Career · gab44 ✨`
  const description = `Deep guide to the three ${element} signs of the zodiac (${signNames}): shared gifts, shadows, how they love, how they work, how they pair with other elements. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sign groups', item: `${SITE_URL}/gab44/groups` },
          { '@type': 'ListItem', position: 3, name: `${Element} signs`, item: `${SITE_URL}/gab44/elements/${element}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Element} Signs — Personality, Love & Career`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/elements/${element}`,
        about: `${Element} element zodiac signs: ${signNames}`
      }
    ]
  })

  const giftsHtml = info.shared_gifts.map((g) => `<li>${escapeHtml(g)}</li>`).join('\n        ')
  const shadowsHtml = info.shared_shadows.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n        ')
  const signsHtml = info.signs.map((s) => signCardHtml(s, '/gab44/about')).join('\n      ')

  const otherElementsHtml = ELEMENTS.map((e) => {
    const cur = e === element ? ' current' : ''
    return `<a class="${cur.trim()}" href="/gab44/elements/${e}">${cap(e)} signs</a>`
  }).join('\n        ')
  const modalitiesHtml = MODALITIES.map((m) => {
    return `<a href="/gab44/modality/${m}">${cap(m)} signs</a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/elements/${element}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/elements/${element}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(info.glyph)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>${SHARED_STYLES(info.c1, info.c2)}</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/groups">all sign groups</a>
      <a href="/gab44/about">12 sign profiles</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ ${element} signs</div>
    <h1><span class="glyph">${info.glyph}</span><span class="accent">${Element}</span> signs.</h1>
    <p class="sub">${escapeHtml(info.one_liner)}</p>
    <div class="meta-strip">
      <span>${info.glyph} ${escapeHtml(element)} element</span>
      <span>3 signs</span>
      <span>${escapeHtml(signNames)}</span>
    </div>

    <article class="essence-card">
      <span class="label">essence</span>
      <p class="text">${escapeHtml(info.essence)}</p>
    </article>

    <h2><span class="icon">${info.glyph}</span>the three ${element} signs</h2>
    <div class="signs-grid">
      ${signsHtml}
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>✨ shared gifts</h3>
        <ul>
        ${giftsHtml}
        </ul>
      </div>
      <div class="panel">
        <h3>🌑 shared shadows</h3>
        <ul>
        ${shadowsHtml}
        </ul>
      </div>
    </div>

    <h2><span class="icon">💞</span>${element} signs in love</h2>
    <p>${escapeHtml(info.in_love)}</p>

    <h2><span class="icon">💼</span>${element} signs at work</h2>
    <p>${escapeHtml(info.in_career)}</p>

    <h2><span class="icon">🤝</span>${element} signs with the other elements</h2>
    <p>${escapeHtml(info.with_other_elements)}</p>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> chart, not the element</h2>
      <p>This page is for everyone who is ${element}. A <strong>personal life-path reading</strong> uses your full birth chart, your intention, and one human reader paying attention to your specific life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-groups">
      <h3>The other elements</h3>
      <div class="group-row">
        ${otherElementsHtml}
      </div>
    </section>

    <section class="other-groups">
      <h3>By modality (cardinal · fixed · mutable)</h3>
      <div class="group-row">
        ${modalitiesHtml}
      </div>
    </section>

    <div class="healing-promo">
      🌿 Reading about your element can stir things. <a href="/healing">Five free 10-minute healing meditations</a> — sleep, anxiety, abundance, letting-go, deep healing.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function modalityPageHTML(modality: Modality): string {
  const info = MODALITY_INFO[modality]
  const Modality = cap(modality)
  const readingHref = `/gab44/reading?ref=modality-${modality}`

  const signNames = info.signs.map(cap).join(', ')
  const title = `${Modality} Signs — ${signNames} · The Four ${Modality} Signs of the Zodiac · gab44 ✨`
  const description = `Deep guide to the four ${modality} signs (${signNames}): why they share a pattern, how they begin/hold/release the seasons, how they show up in love and work. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sign groups', item: `${SITE_URL}/gab44/groups` },
          { '@type': 'ListItem', position: 3, name: `${Modality} signs`, item: `${SITE_URL}/gab44/modality/${modality}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Modality} Signs — The Four ${Modality} Signs of the Zodiac`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/modality/${modality}`,
        about: `${Modality} modality zodiac signs: ${signNames}`
      }
    ]
  })

  const signsHtml = info.signs.map((s) => signCardHtml(s, '/gab44/about')).join('\n      ')

  const otherModalitiesHtml = MODALITIES.map((m) => {
    const cur = m === modality ? ' current' : ''
    return `<a class="${cur.trim()}" href="/gab44/modality/${m}">${cap(m)} signs</a>`
  }).join('\n        ')
  const elementsHtml = ELEMENTS.map((e) => {
    return `<a href="/gab44/elements/${e}">${cap(e)} signs</a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/modality/${modality}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/modality/${modality}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>${SHARED_STYLES(info.c1, info.c2)}</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/groups">all sign groups</a>
      <a href="/gab44/about">12 sign profiles</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ ${modality} modality</div>
    <h1>The <span class="accent">${modality}</span> signs.</h1>
    <p class="sub">${escapeHtml(info.one_liner)}</p>
    <div class="meta-strip">
      <span>${escapeHtml(modality)} modality</span>
      <span>4 signs</span>
      <span>${escapeHtml(signNames)}</span>
    </div>

    <article class="essence-card">
      <span class="label">essence</span>
      <p class="text">${escapeHtml(info.essence)}</p>
    </article>

    <h2><span class="icon">✦</span>the four ${modality} signs</h2>
    <div class="signs-grid" style="grid-template-columns:repeat(2,1fr)">
      ${signsHtml}
    </div>

    <h2><span class="icon">🜨</span>their role in the year</h2>
    <p>${escapeHtml(info.role_in_year)}</p>

    <h2><span class="icon">🪶</span>shared pattern</h2>
    <p>${escapeHtml(info.shared_pattern)}</p>

    <h2><span class="icon">💞</span>${modality} signs in relationships</h2>
    <p>${escapeHtml(info.in_relationships)}</p>

    <h2><span class="icon">💼</span>${modality} signs at work</h2>
    <p>${escapeHtml(info.in_work)}</p>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> chart, not the modality</h2>
      <p>This page is for everyone with strong ${modality} energy. A <strong>personal life-path reading</strong> uses your full birth chart, your intention, and one human reader paying attention to your specific life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-groups">
      <h3>The other modalities</h3>
      <div class="group-row">
        ${otherModalitiesHtml}
      </div>
    </section>

    <section class="other-groups">
      <h3>By element (fire · earth · air · water)</h3>
      <div class="group-row">
        ${elementsHtml}
      </div>
    </section>

    <div class="healing-promo">
      🌿 Reading about your modality can stir things. <a href="/healing">Five free 10-minute healing meditations</a> — sleep, anxiety, abundance, letting-go, deep healing.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function groupsIndexHTML(): string {
  const elementCards = ELEMENTS.map((e) => {
    const info = ELEMENT_INFO[e]
    const signs = info.signs.map(cap).join(' · ')
    return `<a href="/gab44/elements/${e}" class="card" style="--card-c1:${info.c1};--card-c2:${info.c2}">
      <div class="sym">${info.glyph}</div>
      <div class="name">${cap(e)} signs</div>
      <div class="signs">${signs}</div>
      <div class="vibe">${escapeHtml(info.one_liner)}</div>
    </a>`
  }).join('\n      ')

  const modalityCards = MODALITIES.map((m) => {
    const info = MODALITY_INFO[m]
    const signs = info.signs.map(cap).join(' · ')
    return `<a href="/gab44/modality/${m}" class="card" style="--card-c1:${info.c1};--card-c2:${info.c2}">
      <div class="sym">✦</div>
      <div class="name">${cap(m)} signs</div>
      <div class="signs">${signs}</div>
      <div class="vibe">${escapeHtml(info.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Zodiac Sign Groups — Elements & Modalities · All 7 Cross-Sign Patterns · gab44 ✨</title>
<meta name="description" content="The seven big patterns of the zodiac: four elements (fire, earth, air, water) and three modalities (cardinal, fixed, mutable). Each grouping holds three or four signs that share a deep pattern." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/groups" />
<meta property="og:title" content="Zodiac Sign Groups — Elements & Modalities" />
<meta property="og:description" content="The 4 elements and 3 modalities of the zodiac, with deep evergreen pages for each." />
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
  h2 { font-size: 22px; margin: 36px 0 14px; font-weight: 700; }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card {
    background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px;
    border-radius: 14px; text-decoration: none; color: var(--fg);
    transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden;
  }
  .card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--card-c1), var(--card-c2));
  }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .sym { font-size: 28px; line-height: 1; margin-bottom: 6px; }
  .card .name { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
  .card .signs { font-size: 13px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.02em; }
  .card .vibe { font-size: 14px; color: var(--fg-dim); font-style: italic; line-height: 1.5; }
  .reading-strip {
    background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center;
  }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--fg-on-accent); }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/about">12 sign profiles</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/healing">healing</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Zodiac <span class="accent">sign groups</span>.</h1>
    <p class="sub">The seven big patterns of the zodiac. Four elements — fire, earth, air, water — group the twelve signs by what they're <em>made of</em>. Three modalities — cardinal, fixed, mutable — group them by how they <em>move</em>. Every sign belongs to one of each.</p>

    <h2>By element (3 signs each)</h2>
    <div class="grid">
      ${elementCards}
    </div>

    <h2>By modality (4 signs each)</h2>
    <div class="grid">
      ${modalityCards}
    </div>

    <div class="reading-strip">
      <h2>Want a reading written for one human — you?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">$9 personal life-path reading · 48h delivery · <a href="/gab44/reading?ref=groups-index">request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function isElement(s: string): s is Element {
  return (ELEMENTS as readonly string[]).includes(s)
}

export function isModality(s: string): s is Modality {
  return (MODALITIES as readonly string[]).includes(s)
}
