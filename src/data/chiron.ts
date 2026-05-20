// Chiron × sign SEO funnel — /gab44/chiron (index)
// + /gab44/chiron/{sign} (12 pages). Targets "chiron in {sign}",
// "{sign} chiron healing", "wounded healer {sign}". Chiron is the asteroid
// (technically a centaur) discovered in 1977 between Saturn and Uranus —
// astrologically, the "wounded healer": the place of the original injury
// that the soul cannot heal directly, but learns to use as a path of
// service to others. Pairs naturally with Lilith (which is shadow/refusal)
// and the North Node (which is growth direction). Cross-funnels into
// /gab44/reading?ref=chiron-{sign}.

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

interface ChironProfile {
  sign: Sign
  wound: string         // 1-line description of the original injury
  gift: string          // the resulting capacity for service to others
  body: string          // big paragraph
  practice: string      // working-with-it gesture
  paradox: string       // the central paradox of the placement
}

// Chiron-by-sign — the "wounded healer" by zodiac sign. Each is honest:
// the wound is named (not romanticised), the gift is named (not pretended
// the wound is gone). The Chironic principle is that the place you cannot
// heal in yourself is exactly the place you become useful to others —
// because you have lived in it long enough to recognise it without flinch.
export const CHIRON_PROFILES: Record<Sign, ChironProfile> = {
  aries: {
    sign: 'aries',
    wound: 'Around identity, anger, the right to take up space. Often: an early experience where wanting was punished or made shameful.',
    gift: 'A surprising patience with other people\'s hesitation. The ability to coax courage out of someone who has not yet found theirs.',
    body: 'Chiron in Aries is the wound around being a self. Somewhere early, the simple act of wanting — an opinion, a body, a direction — was met with violation, mockery, or erasure. The result is a lifelong friction with self-assertion: it never feels casual, it always carries weight. The gift, which is not a consolation prize, is that you become the rare person who can sit with someone else\'s tentative I-want and not crowd it. You know what it costs to find that voice. You hold the room while another person finds theirs.',
    practice: 'Notice when you flinch from your own anger. Stay with it five seconds longer than is comfortable. Aries Chiron heals in millimetres of self-permission.',
    paradox: 'You will be the bravest person someone else has met — and still feel, internally, like a coward. Both are true.'
  },
  taurus: {
    sign: 'taurus',
    wound: 'Around the body, food, money, safety. Often: a chronic instability or violation in the early environment that made simple pleasure feel unsafe.',
    gift: 'A profound ability to make others feel safe in their own bodies. You can teach pleasure as a discipline because you had to learn it.',
    body: 'Chiron in Taurus is the wound around enough. The body did not get to settle. Money, food, touch, or the simple security of a stable home were missing or unreliable, and the nervous system organized around scarcity. Decades later, the wound shows up as a complicated relationship to pleasure: clutching it, distrusting it, refusing it, or using it compulsively. The gift is that you become unusually skilled at helping other people land in their bodies — because you had to build the landing yourself, and you know which footholds actually hold.',
    practice: 'Eat one slow meal this week with no screen. Or sit on the floor. Or take a long walk with no destination. Taurus Chiron heals through unhurried embodiment.',
    paradox: 'You can teach others to enjoy what you still struggle to fully enjoy yourself.'
  },
  gemini: {
    sign: 'gemini',
    wound: 'Around voice, learning, sibling relationships. Often: shamed for asking, mocked for thinking, or made to feel slow / wrong / weird.',
    gift: 'You become the best translator in the room. You know how to make complicated things simple because you remember the cost of being told you were stupid.',
    body: 'Chiron in Gemini is the wound around speech and intellect. Somewhere early, the small mind got hurt: a teacher who shamed the question, a sibling who took the airtime, a parent who mocked the way you talked. The wound is in the throat and the hands. Decades later, you may still flinch at your own first draft, distrust your own thinking, or over-prepare to compensate. The gift is enormous: you become the translator. The teacher who sees the kid no one else is reaching. The writer who refuses to be unclear because you remember what unclear cost you.',
    practice: 'Write one rough sentence today and do not edit it. Send it. Gemini Chiron heals through permission to be imprecise.',
    paradox: 'You will be exceptionally articulate, and still feel, after every conversation, that you fumbled it.'
  },
  cancer: {
    sign: 'cancer',
    wound: 'Around mother, home, belonging. Often: a parent who could not show up emotionally, or a home that was not safe in the way home should be.',
    gift: 'Mothering capacity that is real, not performed. People are drawn to you because they sense you know what real care feels like — having had to find it elsewhere.',
    body: 'Chiron in Cancer is the wound around the original home. The kitchen was not safe, or the parent could not arrive emotionally, or the family was technically together and nonetheless lonely. The result is a lifelong sensitivity around belonging: you carry your home with you because you had to make it portable. The gift is that you become a kind of un-titled mother to many: the friend people land at, the colleague who notices when someone is not okay, the partner who creates emotional safety in a room because you can recognize when it is missing.',
    practice: 'Mother yourself this week the way you mother others. Make the soup, draw the bath, close the door. Cancer Chiron heals through self-tending.',
    paradox: 'You can give the kind of love you never quite received, and still feel, sometimes, unmet.'
  },
  leo: {
    sign: 'leo',
    wound: 'Around being seen, creativity, the heart\'s expression. Often: a child whose specific gift was missed, mocked, or suppressed in favor of a more convenient one.',
    gift: 'A reverence for other people\'s unique signature. You see the actual gift in someone, not the resume. You give back the visibility you did not receive.',
    body: 'Chiron in Leo is the wound around the heart\'s gift. The specific creative thing the child wanted to do was overlooked, criticized, or replaced with something more useful. The result is a complicated relationship to your own creativity: it never feels casual, it always feels exposed. Decades in, you may still shrink at the moment of putting your name on something. The gift is that you become the rare witness who actually sees other people: not the polished version, the real signature underneath. People bloom in your gaze. You give back what was not given to you.',
    practice: 'Make one small creative thing this week and put your name on it. Even imperfectly. Leo Chiron heals through small acts of authorship.',
    paradox: 'You will be unforgettable to others while feeling, internally, invisible.'
  },
  virgo: {
    sign: 'virgo',
    wound: 'Around the body, work, worth-through-usefulness. Often: chronic illness, a body that did not function expected, or being praised only for performance.',
    gift: 'A craft-level care for other people\'s healing. You become the practitioner who actually pays attention because you had to learn to pay attention to yourself.',
    body: 'Chiron in Virgo is the wound in the body and the work. Maybe the body was sick, or sensitive, or different. Maybe the only love available was the one that came back when the chores were done. The wound creates a lifelong critical inner voice and a body that often holds the tension. The gift is real: you become the most attentive healer-type in the chart. The therapist who notices, the doctor who reads carefully, the friend who actually makes the food and brings it. You serve from understanding the cost of unattended pain.',
    practice: 'Skip one self-correction this week. Eat the thing, leave the email, take the rest. Virgo Chiron heals through deliberate insufficiency.',
    paradox: 'You will be the one others heal next to, and still feel — body, work, worth — perpetually not-quite-right.'
  },
  libra: {
    sign: 'libra',
    wound: 'Around partnership, fairness, the right to a yes. Often: parents in chronic disharmony, or being assigned the role of family peace-keeper too early.',
    gift: 'A steady presence in other people\'s relational repair. You can mediate without losing yourself because you have done so much of the inner work.',
    body: 'Chiron in Libra is the wound around relationship. The parents fought, or did not speak, or asked the child to mediate. The result is a hyper-tuned relational nervous system that reads every micro-shift in a partner\'s mood and an old reflex to keep the room calm at the cost of the self. Decades in, you may still bend further than is wise to keep the peace. The gift is that you become the friend, partner, or mediator others come to: real fairness, not performed; the willingness to name the imbalance the room is pretending not to see.',
    practice: 'Have one conversation this week where you do not perform fairness. Just say what you actually think. Libra Chiron heals through honest preference.',
    paradox: 'You will be the most balanced person in the room and still feel, internally, never quite at rest.'
  },
  scorpio: {
    sign: 'scorpio',
    wound: 'Around intimacy, power, betrayal, secrets. Often: an early violation that was not allowed to be spoken aloud — sexual, financial, or emotional.',
    gift: 'A composure with other people\'s shadow. You can hear the unspeakable thing without flinching, and the room exhales because you did not flinch.',
    body: 'Chiron in Scorpio is one of the deepest placements. The wound is a kept secret: an early betrayal, abuse, or power violation that the family would not name. The result is a body that knows truths it was not allowed to speak, and a lifelong suspicion of the bright surface of things. Decades in, you may still distrust easy intimacy, expect betrayal, hold yourself separate. The gift is enormous: you become the person other people can finally tell the unspeakable thing to. You do not flinch, you do not perform shock, you stay in the room. That is rare and it is real medicine.',
    practice: 'Tell one truth this week about something you would normally hide — the smallest version. Scorpio Chiron heals one taboo at a time.',
    paradox: 'You will be the safest person someone has met to tell their truth to, and still hold truths you have told no one.'
  },
  sagittarius: {
    sign: 'sagittarius',
    wound: 'Around belief, meaning, faith. Often: a religion that wounded, a culture that excluded, a teacher who betrayed, a lost homeland.',
    gift: 'A hard-won meaning you did not inherit. People come to you for orientation because you had to build yours from scratch.',
    body: 'Chiron in Sagittarius is the wound around faith. The religion the family handed you wounded, or the culture excluded you, or the philosophy you trusted turned out to be a smaller story than it claimed. The result is a lifelong restlessness around meaning: you cannot settle for the inherited frame, but you also cannot quite trust your own. Decades in, you may still feel between worlds. The gift is real: the meaning you build is genuine. Other people, lost in their own borrowed frames, come to you because you have done the work of finding what is actually true for you.',
    practice: 'Write down one belief you inherited and never tested. Take a week with it. Sagittarius Chiron heals through earned conviction.',
    paradox: 'You will be the wisdom-figure others orient by, while internally still searching.'
  },
  capricorn: {
    sign: 'capricorn',
    wound: 'Around father, authority, public legitimacy. Often: a father absent, harsh, or undermining. A child made to be the adult too early.',
    gift: 'You become a different kind of authority — the one who does not crush. Mentor, boss, elder. People grow in your structure because they sense it.',
    body: 'Chiron in Capricorn is the wound around the father and the public world. The father was absent, harsh, or undermining; or the child was conscripted into adult responsibility before they were ready; or the family\'s relationship to authority was bent. The result is a complicated lifelong relationship to your own authority: too heavy, too fragile, too much, never enough. The gift is that you become the authority you needed: the boss who actually mentors, the teacher who does not crush, the elder who hands the next generation what was not handed to you.',
    practice: 'Take one concrete step this week on a long-build that is yours. Capricorn Chiron heals through self-authored structure.',
    paradox: 'You will be a steadying figure in other people\'s lives while still, in private, doubting your own legitimacy.'
  },
  aquarius: {
    sign: 'aquarius',
    wound: 'Around belonging, group, the right to be different. Often: the strange kid in a conformist family, the queer kid in the wrong town, the alien in the room of own family.',
    gift: 'You become the person who makes the chosen-family possible for someone else. The one whose presence says it is allowed to be the shape you are.',
    body: 'Chiron in Aquarius is the wound around being different. The family did not match, the school did not match, the culture did not match — somewhere early, the message was you do not fit here. The result is a lifelong sensitivity around belonging: hyper-aware of being on the outside, sometimes preemptively withdrawing before being rejected. The gift is real and political: you become the person whose simple existence makes room for others. The chosen family others find later is the kind you wished had existed for you.',
    practice: 'Say yes to one group this week that scares you in the right direction. Aquarius Chiron heals through chosen belonging.',
    paradox: 'You will be the home for other outsiders while still, sometimes, feeling outside your own life.'
  },
  pisces: {
    sign: 'pisces',
    wound: 'Around boundaries, empathy, the porous body. Often: an early loss, a parent\'s grief absorbed, a felt-sense of universal pain that arrived too young.',
    gift: 'A capacity to be present with suffering without dissolving. You can sit at the edge of grief, illness, or despair without making it about you.',
    body: 'Chiron in Pisces is the wound of porosity. The empathic apparatus came online too early, before the boundaries to manage it. You absorbed parental grief, or the felt-sense of large suffering, or a literal early loss. Decades in, the wound shows up as fatigue around other people, a pull toward dissolution (substances, fantasy, the savior loop), and a deep weariness about the world\'s pain. The gift is real, hard-won mystic medicine: you can sit with what most people cannot bear to sit with, and you can do it without making the suffering person feel pitied.',
    practice: 'Practice one warm no this week with no story attached. Just no, said gently. Pisces Chiron heals through bordered tenderness.',
    paradox: 'You will be the rare presence who can hold others\' suffering, and still need to learn that your own does not have to be held alone.'
  }
}

export const CHIRON_SIGNS = SIGNS

export function isChironSign(s: string): s is Sign {
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

export function chironPageHTML(sign: Sign): string {
  const p = CHIRON_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Chiron in ${Sign}`

  const otherChirons = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/chiron/${s}">⚷ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur sister — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur sister — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur sister — the foreknowing)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (the disruption)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (the long exile)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/decans/${sign}-1">${sm.symbol} ${Sign} 1st decan</a>`,
    `<a href="/gab44/chiron">all 12 Chirons</a>`
  ].join('')

  const title = `${headline} — wounded healer, original wound, gift of service · gab44`
  const description = `${headline}: the wounded-healer placement. Wound: ${p.wound} Gift: ${p.gift} The full archetype, with practice and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Chiron', item: `${SITE_URL}/gab44/chiron` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/chiron/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/chiron/${sign}`,
        about: `${headline} — wounded healer / original wound`
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
<link rel="canonical" href="${SITE_URL}/gab44/chiron/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.gift)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/chiron/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B7%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/chiron">all 12 Chirons</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/lilith/${sign}">${Sign} Lilith</a>
      <a href="/gab44/reading?ref=chiron-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚷ ${sm.symbol}</div>
      <div class="meta">Chiron ⚷ ${Sign} · the wounded-healer key</div>
    </div>
    <h1><span class="accent">Chiron</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.gift)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>The original wound</h3>
        <p>${escapeHtml(p.wound)}</p>
      </div>
      <div class="panel">
        <h3>The resulting gift</h3>
        <p>${escapeHtml(p.gift)}</p>
      </div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Chironic paradox</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Practice</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How this Chiron reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Chiron</span><span class="v">⚷ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Discovered</span><span class="v">1977 — between Saturn and Uranus</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~50-year orbit · "Chiron return" around age 50</span></div>
      <div class="row"><span class="k">Mythic</span><span class="v">Centaur teacher who could heal others but not himself</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=chiron-${sign}">Get a $9 reading on your Chiron →</a>
    </div>

    <h2>The other 11 Chirons</h2>
    <div class="strip">${otherChirons}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · wounded-healer key · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function chironIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = CHIRON_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/chiron/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚷ ${sm.symbol}</div>
      <div class="name">Chiron in ${titleCase(s)}</div>
      <div class="axis">wounded healer · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.gift)}</div>
    </a>`
  }).join('')

  const title = `Chiron by sign — wounded healer, original wound & gift · gab44 ✨`
  const description = `Chiron in {sign} — the wounded-healer placement across all 12 zodiac signs. The injury you cannot heal directly becomes the gift you give others. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chiron" />
<meta property="og:title" content="Chiron by sign · gab44" />
<meta property="og:description" content="The wounded-healer placement across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#48499c;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/lilith">lilith</a>
      <a href="/gab44/pholus">⚱ Pholus by sign (centaur sister)</a>
      <a href="/gab44/chariklo">⊚ Chariklo by sign (centaur sister)</a>
      <a href="/gab44/nessus">⛓ Nessus by sign (centaur sister)</a>
      <a href="/gab44/asbolus">⟁ Asbolus by sign (centaur sister)</a>
      <a href="/gab44/eris">⊛ Eris by sign</a>
      <a href="/gab44/sedna">⏀ Sedna by sign</a>
      <a href="/gab44/north-node">north node</a>
      <a href="/gab44/reading?ref=chiron-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#48499c,#c96442)">⚷</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · ~50-year cycle</div>
    </div>
    <h1>Chiron <span class="accent">by sign</span></h1>
    <p class="vibe">The wound you cannot heal in yourself becomes the gift you give to others. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=chiron-index">Want a Chiron-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Chiron-by-sign pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
