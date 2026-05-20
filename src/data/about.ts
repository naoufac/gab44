// Per-sign deep evergreen "about" pages — /gab44/{sign}/about.
// 12 SEO surfaces targeting "{sign} personality", "what is a {sign}", "{sign} traits".
// Evergreen content (no daily regen, no LLM cost), routes to the $9 reading via
// ?ref=about-{sign}. Sister surface to /gab44/{sign} (daily horoscope) and the
// 78 /gab44/compatibility/{pair} pages.

import { SITE_URL } from '@/lib/identity'
import { isValidSign, SIGNS, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'

export interface Profile {
  ruling_planet: string
  modality: 'cardinal' | 'fixed' | 'mutable'
  season: string
  core: string
  gifts: [string, string, string]
  shadows: [string, string, string]
  love: string
  career: string
  spiritual_gift: string
  lesson: string
  best_partners: [Sign, Sign, Sign]
  famous: [string, string, string]
}

export const PROFILES: Record<Sign, Profile> = {
  aries: {
    ruling_planet: 'Mars',
    modality: 'cardinal',
    season: 'spring\'s first burst',
    core: 'The first match struck. Aries is the energy of beginning itself — the moment before deliberation, when the body already knows it\'s going. Mars rules; the chart starts here for a reason.',
    gifts: ['courage that goes first', 'speed of decision', 'full-body honesty — what you see is what is'],
    shadows: ['starts faster than it finishes', 'impatience with slow processes', 'reads disagreement as attack'],
    love: 'Hot start, demanding present-tense affection. Aries doesn\'t play long games of will-they-won\'t-they; if it\'s on, it\'s on by Tuesday. Wants a partner who can match the pace and hold their own ground — not contain the fire, but stand in it. Boredom is the only real ending.',
    career: 'Born for new ventures, founders, ER medicine, sports, anything that needs a first move. Bureaucracy kills the spark. Best when given permission to go fast and apologize later.',
    spiritual_gift: 'Brings beginnings into the world. Without Aries energy somewhere in the chart, nothing starts.',
    lesson: 'Completion matters as much as launching. The flame learns to keep burning, not just to ignite.',
    best_partners: ['leo', 'sagittarius', 'aquarius'],
    famous: ['Lady Gaga', 'Robert Downey Jr.', 'Vincent van Gogh']
  },
  taurus: {
    ruling_planet: 'Venus',
    modality: 'fixed',
    season: 'late spring, full bloom',
    core: 'The bull who knows the value of a good meal and a good rest. Taurus doesn\'t rush because Taurus doesn\'t need to. Stability is a stance, not a default — and the senses are sacred ground.',
    gifts: ['rooted patience', 'sensual presence — touch, taste, sound, smell', 'loyalty that does not waver'],
    shadows: ['stubbornness that doubles down past usefulness', 'resistance to change even when change is the medicine', 'comfort that quietly turns into a cage'],
    love: 'Slow build, deep roots. Taurus loves with the body — touch, food, time. Once chosen, you are chosen forever, and the consistency is the romance. Don\'t rush a Taurus into commitment, and don\'t betray one — both lose access to the rare safety this sign builds.',
    career: 'Thrives in fields where craft matters — architecture, finance, agriculture, music, food, design. Hates pivots. Builds slowly, builds well, builds for decades. Often the one whose work outlasts the trend cycle.',
    spiritual_gift: 'Anchors. Taurus reminds the chart that the body is sacred and the present is the only place worth being.',
    lesson: 'The ground will support you; you do not have to dig in this hard. Some of what you\'re holding is allowed to move.',
    best_partners: ['virgo', 'capricorn', 'cancer'],
    famous: ['Adele', 'David Beckham', 'Stevie Wonder']
  },
  gemini: {
    ruling_planet: 'Mercury',
    modality: 'mutable',
    season: 'late spring into early summer',
    core: 'The twins. Two minds, one breath. Gemini holds contradictions because life holds contradictions and pretending otherwise is a lie. The Mercury current moves fast; what looks like distraction is often integration in real time.',
    gifts: ['quicksilver intelligence', 'wit that disarms without wounding', 'ability to see five sides of one truth'],
    shadows: ['scattered when ungrounded', 'fear of being trapped reads as commitment-phobic', 'words sometimes outrun feelings'],
    love: 'Needs a partner who can hold a real conversation. Boredom is the only real threat — Gemini will leave a beautiful person and stay for a curious one. Wants to be surprised, asked good questions, taken seriously and not too seriously, and never told to pick one self.',
    career: 'Writing, journalism, teaching, sales, comedy, design, anything language-based. Multiple careers, not one. The portfolio life is healthy here, not a sign of failure to commit.',
    spiritual_gift: 'Connector. Gemini stitches separate worlds together — people, ideas, languages.',
    lesson: 'Depth doesn\'t have to mean stuckness. You can stay curious AND stay. Both at once.',
    best_partners: ['libra', 'aquarius', 'aries'],
    famous: ['Marilyn Monroe', 'Kanye West', 'Angelina Jolie']
  },
  cancer: {
    ruling_planet: 'the Moon',
    modality: 'cardinal',
    season: 'summer solstice, the longest light',
    core: 'The crab. Soft inside, shell outside, both required. Cancer carries the entire emotional water of the room and then wonders why it\'s tired. Feeling is not a weakness here; it\'s a sense organ as fine as sight.',
    gifts: ['emotional radar that picks up the unspoken', 'fierce protectiveness for chosen people', 'memory that turns into devotion'],
    shadows: ['takes everything personally', 'withdraws into the shell instead of saying what is wrong', 'mood becomes the climate of the home'],
    love: 'Home is the love language. Cancer loves through cooking, remembering, holding space, the small daily acts that say "I see you." Wants to be chosen, then chosen again, then chosen quietly every day. Distance terrifies; consistent reassurance heals.',
    career: 'Care work, hospitality, real estate, history, food, anything that protects something. Family business is often the right shape. Builds slowly toward stability, not flash.',
    spiritual_gift: 'Keeper of the inner home. Cancer reminds the chart that feeling is information, not noise to be filtered out.',
    lesson: 'Feeling everything is not the same as carrying everything. Permission to put some of it down.',
    best_partners: ['scorpio', 'pisces', 'taurus'],
    famous: ['Princess Diana', 'Tom Hanks', 'Frida Kahlo']
  },
  leo: {
    ruling_planet: 'the Sun',
    modality: 'fixed',
    season: 'high summer',
    core: 'The lion. The Sun\'s own sign. Leo isn\'t asking for the spotlight; Leo IS a small spotlight, and the room photosynthesizes around it. Generous when seen, brittle when ignored — both are true at once.',
    gifts: ['warmth that pulls people forward', 'creative confidence', 'loyalty almost embarrassing in its bigness'],
    shadows: ['needs admiration like air', 'wounded pride goes quiet then hot', 'performance can quietly replace presence'],
    love: 'Grand. Big gestures, big loyalty, big jealousy if the eyes wander. Leo wants to be the one — and is willing to be magnificent for the right person. Compliments are not vanity; they are nourishment. Withhold and watch the light dim.',
    career: 'Stage, screen, leadership, brand, anywhere creative confidence matters. Born CEOs of small fierce things. Or large ones. Leo wants the work to bear their fingerprint, not be invisible inside a system.',
    spiritual_gift: 'Reminds the chart that joy is not frivolous. Leo\'s heart is the Sun\'s heart, and the Sun is what keeps everything alive.',
    lesson: 'You don\'t have to perform to be loved. The light is in you, not in the applause.',
    best_partners: ['aries', 'sagittarius', 'gemini'],
    famous: ['Madonna', 'Barack Obama', 'Coco Chanel']
  },
  virgo: {
    ruling_planet: 'Mercury',
    modality: 'mutable',
    season: 'late summer, harvest beginning',
    core: 'The maiden. The healer. Virgo\'s mind is a sieve that catches what others miss — and a hammer that builds the missing piece. Service is the love language; the to-do list is, in a way, the prayer.',
    gifts: ['precision that becomes care', 'analytic eye for what is broken and exactly why', 'quiet excellence that builds reputations slowly'],
    shadows: ['the critical voice turns inward and corrodes', 'perfection as a stalling tactic', 'over-functioning that quietly resents the ones it serves'],
    love: 'Shows up by doing — chores, errands, the hundred small things others overlook. Wants a partner who notices. Picks slowly, picks deeply. Don\'t ask a Virgo for a dramatic confession; ask for soup when you\'re sick. The soup is the confession.',
    career: 'Medicine, editing, accounting, design, science, anywhere accuracy matters. Often the indispensable one whom no one notices until they leave. Excellent under pressure that has rules.',
    spiritual_gift: 'Discernment. Virgo separates the real from the noise, the necessary from the cosmetic.',
    lesson: 'Rest is not earned. You are allowed to receive without proving you deserved it first.',
    best_partners: ['taurus', 'capricorn', 'cancer'],
    famous: ['Beyoncé', 'Keanu Reeves', 'Mother Teresa']
  },
  libra: {
    ruling_planet: 'Venus',
    modality: 'cardinal',
    season: 'autumn equinox',
    core: 'The scales. Libra holds two sides until both are honored. People mistake this for indecision; it\'s a discipline. Venus chose Libra to teach the world that fairness is its own kind of beauty.',
    gifts: ['aesthetic intelligence', 'diplomacy that defuses without flattening', 'the gift of pairing — friends, ideas, colors, contexts'],
    shadows: ['avoids conflict past usefulness', 'loses the self in the partner\'s preferences', 'charm as a wall against actual closeness'],
    love: 'Happiest in partnership and most sharpened by it. Wants a co-conspirator, an aesthetic match, a mind to think alongside. Don\'t be one-sided around a Libra; they will leave gracefully and you might not realize they\'re gone for weeks.',
    career: 'Design, law, diplomacy, fashion, mediation, brand. Anywhere balance creates value. Lone-wolf roles starve them. Best when the work is in dialogue with someone.',
    spiritual_gift: 'Weaver. Libra makes pairs of things that didn\'t know they belonged together — and the world is more beautiful for it.',
    lesson: 'Choosing yourself is not unfairness to anyone else. Both sides of the scale include you.',
    best_partners: ['gemini', 'aquarius', 'leo'],
    famous: ['Will Smith', 'Serena Williams', 'John Lennon']
  },
  scorpio: {
    ruling_planet: 'Pluto (and Mars, classically)',
    modality: 'fixed',
    season: 'deep autumn, the dying of the leaves',
    core: 'Three forms, one truth — scorpion, eagle, phoenix. Scorpio sees what others won\'t look at and loves what most are afraid to love. Intensity is the baseline, not the peak.',
    gifts: ['depth that does not flinch', 'loyalty after trust is earned', 'alchemical instinct — turning pain into power'],
    shadows: ['trust gates that take years to open', 'revenge fantasies that outlast the offense', 'possessiveness disguised as devotion'],
    love: 'All-or-nothing. Scorpio doesn\'t dabble. Knows you before you know yourself, watches before speaking, gives everything once it\'s safe. Betrayal is unforgivable; the loyalty on the other side of trust is total. Sex is rarely just sex.',
    career: 'Investigation, therapy, surgery, finance, research, anywhere a hidden truth must be surfaced. Excellent in crisis. Boredom is the enemy. Often called to work that requires holding what others can\'t bear.',
    spiritual_gift: 'Transmutation. Scorpio makes light from compost — turns the shadow into medicine.',
    lesson: 'Power doesn\'t have to be hidden to be real. You\'re allowed to be seen before being safe.',
    best_partners: ['cancer', 'pisces', 'capricorn'],
    famous: ['Drake', 'Leonardo DiCaprio', 'Marie Curie']
  },
  sagittarius: {
    ruling_planet: 'Jupiter',
    modality: 'mutable',
    season: 'early winter, the dark light',
    core: 'The archer. The arrow flies because it must — toward truth, toward horizon, toward the bigger meaning. Sagittarius can\'t stay in a small story for long. Jupiter wants more, always more.',
    gifts: ['optimism that is contagious without being naive', 'honesty that respects the listener with truth', 'appetite for travel, ideas, big questions'],
    shadows: ['blunt to the point of cruel', 'restlessness that calls itself freedom', 'promises bigger than the calendar'],
    love: 'Needs space to roam AND a person to come home to. Wants a fellow traveler, not a parent, not a project. Don\'t try to cage a Sagittarius; do invite one on adventures, including the inner ones. The leash kills the bond.',
    career: 'Teaching, publishing, travel, philosophy, law, sales, anywhere meaning has to be transmitted. Hates micromanagement. Best with autonomy and a long horizon to aim at.',
    spiritual_gift: 'Meaning-maker. Sagittarius reminds the chart that life is a question worth asking out loud.',
    lesson: 'The answer often lives in staying. Sometimes the next horizon is right here.',
    best_partners: ['leo', 'aries', 'libra'],
    famous: ['Taylor Swift', 'Brad Pitt', 'Walt Disney']
  },
  capricorn: {
    ruling_planet: 'Saturn',
    modality: 'cardinal',
    season: 'winter solstice, the long climb',
    core: 'The sea-goat. Climbs the mountain not because someone said to but because the climb is the point. Capricorn is the long game made flesh. Time bends toward whoever is patient enough.',
    gifts: ['discipline that compounds', 'long-arc strategy', 'dry humor that lands harder than expected'],
    shadows: ['works to avoid feeling', 'takes responsibility for things that aren\'t theirs', 'melancholy that calls itself realism'],
    love: 'Slow, careful, deeply loyal once chosen. Wants a partner who builds with them — not a project, a co-architect. The walls take years to come down; underneath, devotion that lasts the rest of the climb.',
    career: 'Leadership, finance, architecture, medicine, government, infrastructure. Often boss eventually. Builds the institution others enjoy. The CEO of any room they stay in long enough.',
    spiritual_gift: 'Master builder. Capricorn shows that time itself is a material — and patience is a love language to the future.',
    lesson: 'You can rest before the goal. Joy is allowed mid-climb, not just at the summit.',
    best_partners: ['taurus', 'virgo', 'scorpio'],
    famous: ['Michelle Obama', 'David Bowie', 'Martin Luther King Jr.']
  },
  aquarius: {
    ruling_planet: 'Saturn (classical) and Uranus (modern)',
    modality: 'fixed',
    season: 'mid-winter, the future arriving',
    core: 'The water-bearer pours the future onto a world that hasn\'t asked yet. Aquarius is one timestep ahead and lonely there. The eccentricity isn\'t a costume; it\'s a frequency.',
    gifts: ['visionary detachment that sees the system, not just the seat', 'principled stubbornness', 'the ability to imagine what doesn\'t exist yet'],
    shadows: ['emotionally distant when overwhelmed', 'rebellion as identity instead of choice', 'principles become walls between people'],
    love: 'Needs intellectual equal more than physical match. Friendship-first, slow to commit, devastating once attached. Independence is non-negotiable; loyalty is total. Don\'t expect a romcom — expect a co-builder of an unusual life.',
    career: 'Tech, science, activism, humanitarian work, design futures. Best as the weirdo on the team who turns out to be right. Anywhere the present is too small.',
    spiritual_gift: 'Timestamp from the future. Aquarius shows the chart what\'s coming — and how to live in advance of it.',
    lesson: 'Visionaries need bodies. Come back into this moment, regularly, and let people love the version of you that\'s here now.',
    best_partners: ['gemini', 'libra', 'sagittarius'],
    famous: ['Oprah', 'Bob Marley', 'Shakira']
  },
  pisces: {
    ruling_planet: 'Jupiter (classical) and Neptune (modern)',
    modality: 'mutable',
    season: 'late winter, the thaw',
    core: 'The two fish. The dreamer. Pisces is the ocean of all signs blended — empathy as a default state, intuition as a sense organ. The boundary between self and other is thin on purpose; that\'s the gift, and that\'s the work.',
    gifts: ['unfiltered empathy', 'artistic and spiritual sensitivity', 'ability to hold paradox without breaking'],
    shadows: ['porous boundaries that absorb everyone\'s mood', 'escape — into fantasy, substances, other people', 'martyrdom that wears the costume of humility'],
    love: 'Ocean love. Wants soul-merge, doesn\'t always know where partner ends and self begins. Romantic, intuitive, devoted. Needs a partner with their own ground so the merge doesn\'t drown them.',
    career: 'Art, music, healing, therapy, ministry, film, anywhere intuition is the actual instrument. The 9-to-5 grid often doesn\'t fit; the gift fits anyway, just on its own clock.',
    spiritual_gift: 'Bridge to the unseen. Pisces reminds the chart that there\'s more than the visible — and that softness is a form of strength.',
    lesson: 'Boundaries don\'t break the connection — they make it sustainable.',
    best_partners: ['cancer', 'scorpio', 'taurus'],
    famous: ['Rihanna', 'Albert Einstein', 'Steve Jobs']
  }
}

const ELEMENT_ACCENT = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
} as const

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

export function aboutPageHTML(sign: Sign): string {
  const meta = ZODIAC_META[sign]
  const profile = PROFILES[sign]
  const accent = ELEMENT_ACCENT[meta.element]
  const Sign = cap(sign)
  const readingHref = `/gab44/reading?ref=about-${sign}`

  const title = `${Sign} Personality, Traits & Life Path — gab44 ✨`
  const description = `Deep guide to ${Sign} (${meta.glyph}, ${meta.element}, ruled by ${profile.ruling_planet}): core energy, gifts, shadows, love, career, spiritual gift, life lesson. Written warm and modern.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: `${Sign}`, item: `${SITE_URL}/gab44/${sign}` },
          { '@type': 'ListItem', position: 3, name: `About ${Sign}`, item: `${SITE_URL}/gab44/${sign}/about` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Sign} Personality, Traits & Life Path`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/${sign}/about`,
        about: `${Sign} (${meta.glyph}, ${meta.element}, ${profile.modality})`
      }
    ]
  })

  const giftsHtml = profile.gifts.map((g) => `<li>${escapeHtml(g)}</li>`).join('\n        ')
  const shadowsHtml = profile.shadows.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n        ')
  const partnersHtml = profile.best_partners.map((p) => {
    const pm = ZODIAC_META[p]
    const i = (SIGNS as readonly string[]).indexOf(sign)
    const j = (SIGNS as readonly string[]).indexOf(p)
    const pair = i <= j ? `${sign}-${p}` : `${p}-${sign}`
    return `<a class="partner" href="/gab44/compatibility/${pair}"><span class="sym">${pm.symbol}</span>${cap(p)}</a>`
  }).join('\n          ')
  const famousHtml = profile.famous.map((n) => `<li>${escapeHtml(n)}</li>`).join('\n          ')

  const otherSignsHtml = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const cur = s === sign ? ' current' : ''
    return `<a class="sign${cur}" href="/gab44/${s}/about"><span class="sym">${m.symbol}</span>${cap(s)}</a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/${sign}/about" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/${sign}/about" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(meta.symbol)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --sign-c1:${accent.c1}; --sign-c2:${accent.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}22 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}22 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 46px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .glyph { font-size: 0.85em; vertical-align: -2px; background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); -webkit-background-clip: text; background-clip: text; color: transparent; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span {
    background: var(--bg-2); padding: 5px 12px; border-radius: 999px;
  }
  h2 {
    font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg);
    letter-spacing: -0.01em;
  }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--sign-c1), var(--sign-c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 18px; line-height: 1.7; color: var(--fg); margin: 0; }
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
    background: linear-gradient(135deg, var(--sign-c1) 0%, var(--sign-c2) 100%);
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
  .partners {
    display: flex; gap: 8px; flex-wrap: wrap; margin: 6px 0 0;
  }
  .partner {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--bg-2); border: 1px solid var(--line);
    padding: 8px 14px; border-radius: 999px;
    text-decoration: none; color: var(--fg); font-weight: 600; font-size: 14px;
  }
  .partner:hover { border-color: var(--accent); color: var(--accent); }
  .partner .sym { font-size: 16px; }
  .other-signs { margin: 36px 0 22px; }
  .other-signs h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .sign-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  @media (max-width: 520px) { .sign-grid { grid-template-columns: repeat(4, 1fr); } h1 { font-size: 36px; } }
  .sign-grid a {
    text-align: center; padding: 10px 4px; border-radius: 10px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600;
  }
  .sign-grid a:hover { border-color: var(--accent); color: var(--accent); }
  .sign-grid a.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .sign-grid a .sym { display: block; font-size: 18px; line-height: 1; margin-bottom: 3px; color: var(--fg); }
  .healing-promo {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .healing-promo a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .famous-list { margin: 8px 0 0; padding-left: 20px; color: var(--fg-dim); }
  .famous-list li { margin-bottom: 4px; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/${sign}">today's ${Sign} horoscope</a>
      <a href="/gab44/${sign}/moon">${Sign} moon</a>
      <a href="/gab44/${sign}/rising">${Sign} rising</a>
      <a href="/gab44/horoscopes">all 12 signs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ deep profile</div>
    <h1><span class="glyph">${meta.symbol}</span><span class="accent">${Sign}</span> · personality &amp; life path.</h1>
    <p class="sub">${escapeHtml(meta.one_liner)}</p>
    <div class="meta-strip">
      <span>${escapeHtml(meta.symbol)} ${escapeHtml(meta.glyph)}</span>
      <span>🜂 ${escapeHtml(meta.element)}</span>
      <span>${escapeHtml(profile.modality)}</span>
      <span>ruled by ${escapeHtml(profile.ruling_planet)}</span>
      <span>${escapeHtml(meta.dates)}</span>
      <span>${escapeHtml(profile.season)}</span>
    </div>

    <article class="core-card">
      <span class="label">core energy</span>
      <p class="text">${escapeHtml(profile.core)}</p>
    </article>

    <div class="two-col">
      <div class="panel">
        <h3>✨ gifts</h3>
        <ul>
        ${giftsHtml}
        </ul>
      </div>
      <div class="panel">
        <h3>🌑 shadows</h3>
        <ul>
        ${shadowsHtml}
        </ul>
      </div>
    </div>

    <h2><span class="icon">💞</span>love &amp; relationships</h2>
    <p>${escapeHtml(profile.love)}</p>

    <h2><span class="icon">💼</span>career &amp; calling</h2>
    <p>${escapeHtml(profile.career)}</p>

    <h2><span class="icon">🌟</span>spiritual gift</h2>
    <p>${escapeHtml(profile.spiritual_gift)}</p>

    <h2><span class="icon">🪶</span>the lesson of this lifetime</h2>
    <p>${escapeHtml(profile.lesson)}</p>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>you</em>, not the sign</h2>
      <p>This profile is for everyone who is ${Sign}. A <strong>personal life-path reading</strong> uses your full birth chart, your intention, and one human reader paying attention to your specific life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your ${Sign} reading →</a>
    </section>

    <h2><span class="icon">🤝</span>${Sign}'s most natural matches</h2>
    <p style="margin-bottom:8px">Three signs whose energy tends to fit ${Sign} most easily — though every chart has many layers, and lived compatibility always beats sign-only theory.</p>
    <div class="partners">
      ${partnersHtml}
    </div>
    <p style="margin-top:14px;font-size:13px;color:var(--fg-dim)">See <a href="/gab44/compatibility" style="color:var(--accent);text-decoration:none;font-weight:600">all 78 pairs →</a></p>

    <h2><span class="icon">🎬</span>famous ${Sign}s</h2>
    <ul class="famous-list">
      ${famousHtml}
    </ul>

    <div class="healing-promo">
      🌿 Reading about your sign can stir things. <a href="/healing">Five free 10-minute healing meditations</a> — sleep, anxiety, abundance, letting-go, deep healing.
    </div>

    <section class="other-signs">
      <h3>Deep profiles · all 12 signs</h3>
      <div class="sign-grid">
        ${otherSignsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function aboutIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const p = PROFILES[s as Sign]
    return `<a href="/gab44/${s}/about" class="card">
      <div class="sym">${m.symbol}</div>
      <div class="name">${cap(s)}</div>
      <div class="dates">${m.dates}</div>
      <div class="vibe">${escapeHtml(m.vibe)}</div>
      <div class="planet">ruled by ${escapeHtml(p.ruling_planet)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Zodiac Sign Personalities — All 12 Deep Profiles · gab44 ✨</title>
<meta name="description" content="Deep evergreen profiles for all 12 zodiac signs — core energy, gifts, shadows, love, career, spiritual gift, life lesson. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces." />
<link rel="canonical" href="${SITE_URL}/gab44/about" />
<meta property="og:title" content="Zodiac Sign Personalities — All 12 Deep Profiles" />
<meta property="og:description" content="Warm, modern, evergreen profiles for all 12 zodiac signs." />
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
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card {
    background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s;
    display: block;
  }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .sym { font-size: 28px; line-height: 1; margin-bottom: 4px; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
  .card .dates { font-size: 12px; color: var(--fg-muted); margin-bottom: 8px; }
  .card .vibe { font-size: 13px; color: var(--fg-dim); margin-bottom: 4px; font-style: italic; }
  .card .planet { font-size: 11px; color: var(--fg-muted); letter-spacing: 0.05em; }
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
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/groups">sign groups</a>
      <a href="/gab44/moon">moon signs</a>
      <a href="/gab44/rising">rising signs</a>
      <a href="/healing">healing</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Zodiac <span class="accent">personalities</span> · all 12 signs.</h1>
    <p class="sub">Evergreen, deep profiles for every sign — core energy, gifts and shadows, love, career, spiritual gift, the lesson of this lifetime. Written warm and modern, by a human, for humans.</p>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want a reading written for one human — you?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">$9 personal life-path reading · 48h delivery · <a href="/gab44/reading?ref=about-index">request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function isAboutSign(s: string): s is Sign {
  return isValidSign(s)
}

export { PROFILES as ABOUT_PROFILES }
