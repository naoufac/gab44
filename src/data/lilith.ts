// Black Moon Lilith × sign SEO funnel — /gab44/lilith (index)
// + /gab44/lilith/{sign} (12 pages). Targets one of the highest-volume
// "shadow / archetype" astrology queries: "black moon lilith in {sign}",
// "{sign} lilith meaning", "lilith in {sign} woman / power / shadow".
// Lilith here is the Mean Black Moon (h13) — the geometric apoapsis of
// the Moon's orbit around Earth, not an asteroid. It reads as where the
// soul meets its rage, refusal, sovereignty, and the parts that were not
// permitted in the body of origin. Cross-funnels into
// /gab44/reading?ref=lilith-{sign}.

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

interface LilithProfile {
  sign: Sign
  archetype: string      // 2–4 word archetype label
  power: string          // the gift, when integrated
  wound: string          // the original violation that shaped the rage
  shadow: string         // the unintegrated form (projection, sabotage, suppression)
  body: string           // big paragraph
  practice: string       // a working-with-it gesture
  trigger: string        // the event that activates this Lilith
}

// Black Moon Lilith by sign. Each is an honest portrait, not a horoscope.
// Lilith is older than the Sun-sign system — she is the figure who refused
// to be flattened, the part of the psyche that retains sovereignty even
// when the room demands compliance. Reading by sign tells you the *flavor*
// of that refusal: where it was first violated, where it now seeks
// reclamation, and what the integrated form sounds like.
export const LILITH_PROFILES: Record<Sign, LilithProfile> = {
  aries: {
    sign: 'aries',
    archetype: 'The unsanctioned warrior',
    power: 'A sovereign yes and a sovereign no, on your own timing, without permission. The right to want.',
    wound: 'Told as a child that your wanting was too much, too loud, too aggressive. Ambition reframed as bad behavior.',
    shadow: 'Anger that leaks sideways — passive-aggression, picked fights, self-sabotaging the moment of taking what is yours.',
    body: 'Lilith in Aries is the figure who was punished for wanting first. The original wound is around ambition, sexuality, and the simple fact of saying I — and it lives in the body as a stuck combat reflex. Untouched, this Lilith leaks: cycling rage that finds the wrong target, picking fights with the wrong people, sabotaging right at the moment of the win. Integrated, she is the cleanest fire in the chart: the ability to want, name, and pursue without apology, and the surprising softness that arrives once the rage has been allowed to speak.',
    practice: 'Notice one moment this week where you would normally swallow a want. Say it out loud, even to yourself. Aries Lilith reclaims through the unedited "I want."',
    trigger: 'Being told to wait your turn, to be polite about your ambition, or to make your wanting more palatable to the room.'
  },
  taurus: {
    sign: 'taurus',
    archetype: 'The unowned body',
    power: 'Sovereignty over your body, your money, your pleasure, your time. The right to enjoy without earning it twice.',
    wound: 'Original violation around the body, food, money, or being touched without consent. The body learned not to claim its own ground.',
    shadow: 'Hoarding, eating issues, money paralysis, or the inability to feel pleasure even in the middle of it. Numbness as armor.',
    body: 'Lilith in Taurus is the figure whose body was not respected as her own. The wound is bodily — around food, touch, money, or the simple right to take up physical space — and it shows up later as a complicated relationship to pleasure: either a refusal of it, or a clutching of it past the point where it serves. The integration is slow and sensual: reclaiming the body inch by inch as your own ground, learning to eat what you want, to be touched on your terms, to keep what you earn without flinching. Taurus Lilith is the most patient of the twelve, but she does not forget.',
    practice: 'Eat one meal this week with full attention to flavor — no screen, no agenda. Taurus Lilith reclaims through unhurried pleasure.',
    trigger: 'Anyone touching your body, your money, or your time without your clean yes. Even small violations register as old ones.'
  },
  gemini: {
    sign: 'gemini',
    archetype: 'The silenced voice',
    power: 'Speech that names what the room is pretending not to see. The truthful word, the inconvenient question, the unfinished sentence.',
    wound: 'Original violation around being told to be quiet, to be a good girl, to stop asking, to soften the word. Voice flattened in childhood.',
    shadow: 'Gossip, double-speak, sharp tongue without aim — or the opposite: silence that runs deep enough to start lying.',
    body: 'Lilith in Gemini is the figure whose mouth was taped shut. The wound lives in the throat and the hands: in the words that were not allowed, the questions that earned punishment, the curiosity reframed as disrespect. Untouched, this Lilith goes sideways into gossip or seductive silence. Integrated, she is the most useful voice in the chart: the one who names what everyone else is dancing around, who asks the question the room is too polite to ask, who refuses the gracious lie. She is not cruel — she is just unwilling to keep pretending.',
    practice: 'Say one true sentence today that you would normally swallow. Make it small if you like. Gemini Lilith reclaims word by word.',
    trigger: 'Being told to soften your message, to be more polite, to phrase it nicer, to stop being so direct.'
  },
  cancer: {
    sign: 'cancer',
    archetype: 'The unmothered child',
    power: 'The right to your own emotional weather. The right to need, to grieve, to nest, to belong on your own terms.',
    wound: 'Original violation around mother, home, lineage. Either smothered or left without — almost always one of the two.',
    shadow: 'Smothering others as repair, or building walls so thick nothing gets through. Mood storms used as language.',
    body: 'Lilith in Cancer is the figure who never quite got mothered, or got mothered in a way that did not fit the soul. The wound is around the family of origin — too much, too little, the wrong kind — and it lives in the chest and the gut as a complicated relationship to need. Untouched, this Lilith either smothers (becoming the mother she never had, to people who did not ask) or walls off (deciding need itself is dangerous). Integrated, she is the figure who can mother herself first, and then offer real care from a sovereign place — not from the wound.',
    practice: 'Identify one need this week and meet it yourself, in a small concrete way. A meal, a nap, a closed door. Cancer Lilith reclaims through self-mothering.',
    trigger: 'Family-of-origin patterns repeating in adult relationships. The old kitchen showing up in the new one.'
  },
  leo: {
    sign: 'leo',
    archetype: 'The dimmed star',
    power: 'Visibility on your own terms. The right to be seen for the specific gift, not the palatable one.',
    wound: 'Original violation around being too much, too bright, too dramatic. The gift dimmed early so the room could stay comfortable.',
    shadow: 'Performance addiction or its mirror — refusing the stage entirely, hiding the gift to avoid the old punishment.',
    body: 'Lilith in Leo is the figure who was told her shine was a problem. The wound is in the heart: the early experience of being celebrated for the wrong things and punished for the real ones, of being told the unique signature was inappropriate, of dimming so the room could stay easy. Untouched, this Lilith either becomes a performance — exhausting, hungry — or refuses the stage altogether and grows quietly bitter about it. Integrated, she is the one who shows up signed, specific, and unwilling to play smaller: not for applause, but because the shine is hers and was never the room\'s to vote on.',
    practice: 'Make one creative thing this week with your name on it. Share it once, with one person. Leo Lilith reclaims through unapologetic authorship.',
    trigger: 'Being told you are too much, too dramatic, too attention-seeking — or being praised for the wrong, edited version of you.'
  },
  virgo: {
    sign: 'virgo',
    archetype: 'The unworthy healer',
    power: 'Useful service from a sovereign place, not from earning the right to exist. The body as honored instrument.',
    wound: 'Original violation around being good enough — about the body, the work, the daily performance. Worth tied to flawlessness.',
    shadow: 'Self-criticism turned into a personality. Endless improvement as a way of never arriving. Bodies and routines policed.',
    body: 'Lilith in Virgo is the figure who was told her worth depended on her usefulness. The wound is in the relationship to flaw: the early lesson that mistakes were dangerous, that bodies must be controlled, that worth must be re-earned daily. Untouched, this Lilith becomes a relentless internal critic, the kind that polices food and routine and small performance — and she often projects it outward, fixing other people who did not ask. Integrated, she is the most precise healer in the chart: skilled, specific, and unwilling to be paid in self-erasure. Her service is from fullness, not from fear.',
    practice: 'Skip one self-correction today. Eat the thing, leave the email, take the rest. Virgo Lilith reclaims through deliberate imperfection.',
    trigger: 'Being expected to fix it, hold it together, be the reliable one — without anyone asking what it costs.'
  },
  libra: {
    sign: 'libra',
    archetype: 'The peace-keeper who stops keeping the peace',
    power: 'Real partnership, not symmetric self-erasure. The right to disagree without losing the relationship.',
    wound: 'Original violation around being the one who kept the room calm. Conflict reframed as failure of love.',
    shadow: 'Resentment dressed as graciousness. Choosing the partner over the self until the body forces a rupture.',
    body: 'Lilith in Libra is the figure who learned to bend so the relationship could stand. The wound is in the joints: the early lesson that her job was to keep everyone comfortable, that conflict meant abandonment, that she was responsible for the temperature of the room. Untouched, this Lilith leaks resentment through perfect manners, then explodes at the wrong moment, then apologizes for exploding. Integrated, she is the figure who can stay in real partnership without disappearing — who can disagree, take up space, name a deal-breaker, and trust that the love that survives that is the only love worth keeping.',
    practice: 'Have one conversation this week where you do not perform fairness. Say what you actually think first. Libra Lilith reclaims through honest preference.',
    trigger: 'Being asked to be reasonable about something that is not reasonable. Being the diplomat in your own life.'
  },
  scorpio: {
    sign: 'scorpio',
    archetype: 'The unburied taboo',
    power: 'Full-spectrum intimacy. The right to merge, transform, or end something on your own terms.',
    wound: 'Original violation around sex, power, betrayal, or the body — often early and rarely spoken. The taboo that shaped the bone.',
    shadow: 'Power games, vengeance loops, secrets used as weapons, or the opposite — frozen numbness around intimacy.',
    body: 'Lilith in Scorpio is at home — this is her oldest archetype. The wound here is rarely small: betrayal, power violation, sexual suppression, or a family secret that bent the early years. The body remembers what the mouth was not allowed to say. Untouched, this Lilith either becomes the one who controls through intimacy (testing, withholding, weaponizing knowing) or freezes out of the body entirely. Integrated, she is the most truthful figure in the chart: capable of real merging, of ending what is over, of speaking the unspeakable without performance. She does not forgive cheaply, but what she keeps is real.',
    practice: 'Tell one truth this week about something you would normally hide. Pick the safest version. Scorpio Lilith reclaims one taboo at a time.',
    trigger: 'Power asymmetry in intimacy. Anyone trying to control you through what they know about you.'
  },
  sagittarius: {
    sign: 'sagittarius',
    archetype: 'The exiled prophet',
    power: 'Lived truth — the meaning earned by going far enough to find it. The right to your own theology.',
    wound: 'Original violation around belief, education, freedom of movement. Told what to believe before you got to look.',
    shadow: 'Dogma in reverse — the rebellion that becomes its own cage. Escapism, shallow seeking, the unfinished pilgrimage.',
    body: 'Lilith in Sagittarius is the figure who was told what was true before she got to ask. The wound is around inherited belief: the religion she did not pick, the ideology she had to repeat, the geography that closed in too soon. Untouched, this Lilith becomes a counter-dogma — rebelling against the original frame and accidentally making a new prison out of the rebellion. Integrated, she is the rare figure who actually goes the distance: travels, reads, lives long enough in real questions to come back with a meaning that is hers, not borrowed. Her authority is earned, not assigned.',
    practice: 'Question one belief you inherited and never tested. Take a week with it. Sagittarius Lilith reclaims through earned conviction.',
    trigger: 'Being told what to believe, where to live, how to pray, who to read. Old authority structures showing up in new forms.'
  },
  capricorn: {
    sign: 'capricorn',
    archetype: 'The disinherited daughter',
    power: 'Authority that belongs to you, in the structures you build yourself. The right to be the adult, the architect, the boss.',
    wound: 'Original violation around father, public legitimacy, or family inheritance. Authority handed elsewhere on the way down.',
    shadow: 'Workaholism as worth. Cynicism. The belief that nothing real can be built — or its mirror, building a tower out of duty.',
    body: 'Lilith in Capricorn is the figure who watched legitimacy go to someone else. The wound is around father, lineage, the public world — the early experience of being told the structure was not for her, or being conscripted into a structure she did not choose. Untouched, this Lilith becomes either the workaholic who never feels arrived, or the cynic who refuses to try. Integrated, she is the slow architect: building her own structure, her own authority, her own legacy in the visible world — not to prove anything to the lineage, but because the work itself is hers and worth doing.',
    practice: 'Take one concrete step this week on a long-build that is yours, not anyone else\'s. Capricorn Lilith reclaims through self-authored structure.',
    trigger: 'Being passed over, invisible-laboured, or asked to support someone else\'s rise without yours being honored.'
  },
  aquarius: {
    sign: 'aquarius',
    archetype: 'The cast-out outsider',
    power: 'Belonging on your own terms — to a chosen group, a chosen future, without abandoning the self to fit in.',
    wound: 'Original violation around being the strange one, the wrong kind, the one who did not fit the family or peer group.',
    shadow: 'Aloofness as armor. Burning every group to prove it never mattered. Or its mirror — desperate conformity that costs the soul.',
    body: 'Lilith in Aquarius is the figure who was the wrong shape for the room. The wound is around belonging: the early experience of being too odd, too political, too future, too queer, too foreign — whichever flavor it took, the message was you do not fit here. Untouched, this Lilith either becomes the chronic outsider, refusing every group preemptively, or contorts into a shape that costs the self. Integrated, she is the figure who finds her people: the chosen family, the cause, the future-tilted group where the strangeness is the point — and she belongs there without the old pretzel.',
    practice: 'Say yes to one group this week that scares you in the right direction. Or leave one that costs the self. Aquarius Lilith reclaims through chosen belonging.',
    trigger: 'Conformity pressure. Group dynamics that ask you to flatten what makes you specific.'
  },
  pisces: {
    sign: 'pisces',
    archetype: 'The drowned mystic',
    power: 'Discernment without losing the ocean. Boundaries that keep the gift safe. The right to feel and stay whole.',
    wound: 'Original violation around boundaries, empathy, and the porous body. Often early — feeling other people\'s feelings without consent.',
    shadow: 'Dissolution. Substance use. Victim/savior loops. Or shutdown: walling off the empathy that hurt too much to feel.',
    body: 'Lilith in Pisces is the figure with no skin. The wound is around porosity: the early experience of feeling everything without protection, of being asked to absorb the family\'s mood, of having empathy weaponized. Untouched, this Lilith dissolves — into substances, into other people\'s lives, into victim-savior loops where the line between her and them disappears. Integrated, she is the rare figure who can feel deeply and stay sovereign: a mystic with boundaries, a healer who is not for hire, an artist who can hold the ocean without drowning in it.',
    practice: 'Practice one no this week without explanation. Just no, said warmly, no story. Pisces Lilith reclaims through bordered tenderness.',
    trigger: 'Anyone using your empathy as a tool against you. Emotional flooding. Being asked to feel it for everyone.'
  }
}

export const LILITH_SIGNS = SIGNS

export function isLilithSign(s: string): s is Sign {
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

export function lilithPageHTML(sign: Sign): string {
  const p = LILITH_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Black Moon Lilith in ${Sign}`

  // Other signs strip — discover the other 11 Liliths.
  const otherLiliths = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/lilith/${s}">⚸ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (the disruption)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (the long exile)</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (the wound)</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/mars-${sign}">♂ Mars in ${Sign}</a>`,
    `<a href="/gab44/decans/${sign}-1">${sm.symbol} ${Sign} 1st decan</a>`,
    `<a href="/gab44/lilith">all 12 Liliths</a>`
  ].join('')

  const title = `${headline} — shadow archetype, power, wound, and integration · gab44`
  const description = `${headline}: the soul's sovereign refusal. ${p.power} Wound: ${p.wound} Shadow form: ${p.shadow} The full archetype, with practice and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Black Moon Lilith', item: `${SITE_URL}/gab44/lilith` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/lilith/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/lilith/${sign}`,
        about: `${headline} — shadow archetype / sovereign refusal`
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
<link rel="canonical" href="${SITE_URL}/gab44/lilith/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.power)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/lilith/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/lilith">all 12 Liliths</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/north-node/${sign}">${Sign} North Node</a>
      <a href="/gab44/reading?ref=lilith-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚸ ${sm.symbol}</div>
      <div class="meta">Black Moon Lilith ⚸ ${Sign} · ${p.archetype}</div>
    </div>
    <h1><span class="accent">Lilith</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.power)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⚸ Power — when integrated</h3>
        <p>${escapeHtml(p.power)}</p>
      </div>
      <div class="panel">
        <h3>The original wound</h3>
        <p>${escapeHtml(p.wound)}</p>
      </div>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>Shadow form — when not yet faced</h3>
        <p>${escapeHtml(p.shadow)}</p>
      </div>
      <div class="panel">
        <h3>Trigger — what activates her</h3>
        <p>${escapeHtml(p.trigger)}</p>
      </div>
    </div>

    <h2>Practice</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How this Lilith reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Black Moon Lilith</span><span class="v">⚸ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Archetype</span><span class="v">${escapeHtml(p.archetype)}</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~9-year cycle around the zodiac</span></div>
      <div class="row"><span class="k">What it is</span><span class="v">Mean apoapsis of Moon\'s orbit (h13)</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=lilith-${sign}">Get a $9 reading on your Lilith →</a>
    </div>

    <h2>The other 11 Liliths</h2>
    <div class="strip">${otherLiliths}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · shadow archetype / sovereign refusal · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function lilithIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = LILITH_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/lilith/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚸ ${sm.symbol}</div>
      <div class="name">Lilith in ${titleCase(s)}</div>
      <div class="axis">${escapeHtml(p.archetype)}</div>
      <div class="vibe-mini">${escapeHtml(p.power)}</div>
    </a>`
  }).join('')

  const title = `Black Moon Lilith by sign — shadow archetype, power, wound · gab44 ✨`
  const description = `Black Moon Lilith in {sign} — the soul's sovereign refusal across all 12 zodiac signs. The figure who would not be flattened: where she was wounded, what she protects, how she integrates. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/lilith" />
<meta property="og:title" content="Black Moon Lilith by sign · gab44" />
<meta property="og:description" content="The soul's sovereign refusal across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#7e2a8a;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/north-node">north node</a>
      <a href="/gab44/eris">⊛ Eris by sign</a>
      <a href="/gab44/sedna">⏀ Sedna by sign</a>
      <a href="/gab44/chiron">⚷ Chiron by sign</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/reading?ref=lilith-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#7e2a8a,#c96442)">⚸</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · ~9-year cycle</div>
    </div>
    <h1>Black Moon Lilith <span class="accent">by sign</span></h1>
    <p class="vibe">The Sun is who you are. The Moon is what you feel. Lilith is what was not permitted — and what you are reclaiming. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=lilith-index">Want a Lilith-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Black-Moon-Lilith-by-sign pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
