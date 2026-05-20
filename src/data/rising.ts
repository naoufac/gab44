// Rising-sign (Ascendant) SEO funnel — /gab44/rising + /gab44/{sign}/rising (12 + 1 = 13 pages).
// Targets the third pillar of the "big three" astrology cluster — sun (about),
// moon (inner life), rising (the social mask). Keyword targets: "rising sign",
// "{sign} ascendant", "what does my rising sign mean", "{sign} rising appearance".
// Distinct content angle from both /about (sun-personality) and /moon (emotional
// inner life). Each routes to $9 reading via ?ref=rising-{sign}.
// Zero LLM cost — content baked into the bundle.

import { SITE_URL } from '@/lib/identity'
import { isValidSign, SIGNS, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'
import { PROFILES } from './about'

interface RisingProfile {
  first_impression: string
  body_style: string
  social_mask: string
  defense_mechanism: string
  life_chapters: string
  life_path: string
}

export const RISING_PROFILES: Record<Sign, RisingProfile> = {
  aries: {
    first_impression: 'Aries rising walks into a room before the room has decided how to receive them — and the room adjusts. There is forward momentum in the body, a sharpness in the eye, sometimes a small mark or scar near the head from an early collision with the world. People feel their pace before they feel anything else.',
    body_style: 'Athletic frame, strong jaw, often a prominent forehead or expressive brow. Movements are quick, sometimes a little impatient. Wears clothes that move easily — nothing fussy, nothing that slows the stride. Color preference often runs to red, rust, sharp white.',
    social_mask: 'Direct, fast, refreshingly unpolished. Strangers read them as confident even on days they aren\'t — the body broadcasts certainty whether the inside agrees or not. Says what they think, asks the bold question, takes the lead by default.',
    defense_mechanism: 'When threatened, escalates instead of retreating. The instinct is to charge, name the conflict, get it over with. Beneath the assertiveness is often a fear of being last, of being weak, of being unprotected — the rising sign learned early that initiative was a survival skill.',
    life_chapters: 'Life often unfolds as a series of bold decisions — relationships, moves, career pivots — that look reckless to outsiders and inevitable to the inside. Many Aries rising have a story of leaving a known thing for an unknown one and being right that the unknown was theirs to claim.',
    life_path: 'The work of an Aries rising lifetime is learning that pace is not the same as direction, and that some of the most important arrivals are slow. The gift is courage. The lesson is patience.'
  },
  taurus: {
    first_impression: 'Taurus rising arrives slowly, settles thoroughly, and the room often quiets around them. There is a grounded weight to their presence — not heavy, but anchored. Beauty registers first: a melodic voice, soft eyes, a body that holds stillness well. People feel safer in their orbit without knowing why.',
    body_style: 'Often a sturdy, sensual frame, full lips, expressive throat (Taurus rules the throat — many singers have it). Carries themselves with deliberate ease. Drawn to natural fabrics, earth tones, well-made simple things. Prefers a small wardrobe of pieces that feel right to a large one that doesn\'t.',
    social_mask: 'Calm, warm, steadying. Strangers read them as reliable on first meeting — and they usually are. Slow to laugh but laughs deeply when something earns it. Doesn\'t perform for the room; the room comes to them.',
    defense_mechanism: 'When threatened, doesn\'t fight — digs in. Becomes immovable, quiet, slow to forgive a violation. The body holds the grudge longer than the mind admits. Beneath the calm is a deep need for security; what looks like stubbornness is often the nervous system insisting on safety.',
    life_chapters: 'Life often unfolds in long, durable arcs — long relationships, long projects, long friendships. Material concerns (home, money, body) thread through every chapter. Many Taurus rising spend the first half of life building the foundation and the second enjoying it.',
    life_path: 'The work of a Taurus rising lifetime is learning that change isn\'t betrayal of the foundation — it\'s how the foundation grows. The gift is durability. The lesson is flexibility.'
  },
  gemini: {
    first_impression: 'Gemini rising arrives talking, and the conversation is already three threads deep before anyone else has caught up. Quick eyes, expressive hands, a face that registers seven micro-emotions per minute. People come away energized — and sometimes a little dazzled, unsure which version of the person they actually met.',
    body_style: 'Slender or wiry frame, long fingers, animated face. Often youthful-looking well into later life — Gemini doesn\'t age the way other risings do. Style tends to be eclectic, layered, with surprise details. Bored by uniforms; loves a piece with a story.',
    social_mask: 'Witty, curious, plural. Strangers read them as bright and interested — and they are. Asks the next question reflexively. Code-switches across rooms with ease, which can read as charming or as elusive depending on who\'s watching.',
    defense_mechanism: 'When threatened, talks faster. Uses language as both shield and scalpel. The mind rationalizes the feeling before the feeling has finished arriving. What looks like aloofness is often the cognitive system processing — Gemini rising thinks in real time, out loud, even about its own pain.',
    life_chapters: 'Life often unfolds as a series of pivots, learning curves, second careers. Many Gemini rising have at least two distinct working selves and don\'t see the contradiction. Siblings, neighbors, early teachers play unusually large roles. Travel — even short trips — punctuates the chapters.',
    life_path: 'The work of a Gemini rising lifetime is learning that knowing about something is not the same as living it, and that depth requires staying past the point of novelty. The gift is mind. The lesson is presence.'
  },
  cancer: {
    first_impression: 'Cancer rising arrives soft and watchful, and the body feels the room before the mind names what it found. Eyes that go luminous with feeling. A face that holds emotion close to the surface, even when the words don\'t. People often feel mothered by them within the first ten minutes — sometimes without realizing it.',
    body_style: 'Often a round, soft frame, a moon-shaped face, expressive eyes. Posture can curl protectively when uncomfortable. Drawn to soft textures, comfortable clothes, things that feel like home on the body. Color preference often runs to silver, pearl, soft blues, milky tones.',
    social_mask: 'Caring, attentive, a little shy at first. Strangers read them as kind — and they are. Tracks the emotional state of every person at the table. Will often feed you, literally or metaphorically, before they\'ve fully decided whether they trust you yet.',
    defense_mechanism: 'When threatened, retreats. Goes into the shell, sometimes for days. Doesn\'t process out loud — processes inside, slowly, sometimes through tears, sometimes through a sudden cleaning of the entire kitchen. What looks like withdrawal is often the rising sign needing solitude to metabolize.',
    life_chapters: 'Life often unfolds around home in some form — the family of origin, the chosen family, the home that gets built later. Mother themes loom large. Many Cancer rising have a life-shaping early experience of being cared for or having to give care.',
    life_path: 'The work of a Cancer rising lifetime is learning that the shell is a tool, not a home — that the soft inside is where the real life happens. The gift is empathy. The lesson is courage to stay open.'
  },
  leo: {
    first_impression: 'Leo rising arrives lit up, and a small portion of the room\'s attention turns automatically. There is a warmth in the body, a generosity in the face, often glorious hair. People come away saying "they\'re so warm" or "they have such great energy" — Leo rising broadcasts heart, even on days the heart is tired.',
    body_style: 'Often a strong, upright frame, a regal posture, a mane of hair (or a memorable haircut). Expressive face, beautiful smile. Style is rarely accidental — Leo rising dresses to feel chosen, even on a Tuesday. Color preference often runs to gold, sun-warm tones, statement pieces.',
    social_mask: 'Warm, generous, magnetic. Strangers read them as confident and friendly — and they are. Lights up at attention, dims at indifference. Often described as "fun to be around" before any deeper read settles in.',
    defense_mechanism: 'When threatened, withdraws warmth. The voice cools, the smile goes formal, the room temperature drops a few degrees. What looks like haughtiness is often a wounded pride protecting itself — Leo rising would rather seem distant than seem hurt.',
    life_chapters: 'Life often unfolds around creative expression, leadership, or being seen — even if the visibility is in a small community. Many Leo rising have a story of a creative gift they had to claim despite resistance, or a stage (literal or figurative) they had to step onto before they felt ready.',
    life_path: 'The work of a Leo rising lifetime is learning that the warmth was always real, even when no one was watching, and that being seen is a byproduct of being themselves — not a goal to chase. The gift is heart. The lesson is humility.'
  },
  virgo: {
    first_impression: 'Virgo rising arrives quietly, observes carefully, and within five minutes has noticed the three things in the room nobody else will mention. There is a clean line to the body, a precision in the eye, often a kindness that takes a moment to surface. People come away saying "they really pay attention" or "they\'re so capable."',
    body_style: 'Often a slim, neat frame, defined features, a youthful look. Style tends to be understated, well-tailored, quietly excellent. Doesn\'t go in for showy details — prefers that one perfect piece. Drawn to clean lines, natural fabrics, careful color palettes.',
    social_mask: 'Attentive, modest, dryly funny. Strangers read them as smart and reserved — and they are. Doesn\'t take up much room initially; the depth becomes apparent over time. Often the person who notices when something\'s wrong before anyone else has named it.',
    defense_mechanism: 'When threatened, perfects. The room gets cleaner, the spreadsheet more accurate, the work more meticulous. Anxiety converts to productivity. What looks like coolness is often the nervous system using competence as a way to feel safe — if I do everything right, nothing bad can happen.',
    life_chapters: 'Life often unfolds around work, craft, service, health. Many Virgo rising have a defining relationship with their body or their daily routine — illness, recovery, dietary discoveries, exercise as medicine. Career chapters tend to refine over time toward mastery of one specific thing.',
    life_path: 'The work of a Virgo rising lifetime is learning that being is enough — that the worth isn\'t earned moment by moment through what they do, that rest is allowed, and that the imperfect day is also a sacred one. The gift is precision. The lesson is grace.'
  },
  libra: {
    first_impression: 'Libra rising arrives composed, considered, and the room often softens around them. There is a symmetry in the face, a graciousness in the manner, an old courtliness in the way they meet a new person. People come away saying "they\'re so charming" or "they\'re so easy to talk to."',
    body_style: 'Often a graceful, balanced frame, dimples or a beautiful smile, a face that photographs well from multiple angles. Style runs toward elegance, harmony, classic over trendy. Drawn to soft fabrics, balanced silhouettes, color palettes that hold together. Rarely overdressed; rarely underdressed.',
    social_mask: 'Charming, even-tempered, diplomatic. Strangers read them as sociable and refined — and they are. Mirrors the energy of the conversation partner with ease, which can read as connection or as performance depending on the watcher.',
    defense_mechanism: 'When threatened, becomes more pleasant. The smile goes wider, the tone goes smoother, the conflict gets diplomatically deferred. What looks like accommodation is often deep exhaustion at the prospect of disharmony — Libra rising would rather absorb a small injustice than bring the room into open conflict.',
    life_chapters: 'Life often unfolds around partnership in some form — romantic, business, creative collaborations, marriages and divorces and remarriages. Many Libra rising have a defining "we" chapter that shapes the whole trajectory. Aesthetic and creative work threads through every era.',
    life_path: 'The work of a Libra rising lifetime is learning that disagreement is not the end of the relationship — that taking a side, choosing themselves, even disappointing someone is also love. The gift is harmony. The lesson is honest difference.'
  },
  scorpio: {
    first_impression: 'Scorpio rising arrives quiet, watchful, and the room tends to feel them before it sees them. There is an intensity in the eye that cuts through small talk. A presence that reads as either deeply magnetic or slightly intimidating, depending on the watcher. People come away saying "I can\'t quite figure them out" — which is, as it turns out, the point.',
    body_style: 'Often a strong, controlled frame, piercing eyes, a low brow, dark or mysterious-looking hair. Carries an air of held power, even at rest. Style tends toward black, deep colors, strong silhouettes — nothing fluffy. Drawn to a few perfect pieces over many casual ones.',
    social_mask: 'Reserved, perceptive, magnetic. Strangers read them as enigmatic — and they are, on purpose. Reveals slowly, by careful choice. Listens twice as much as they speak in the first conversation, watching for who you actually are when you don\'t know you\'re being read.',
    defense_mechanism: 'When threatened, goes still and silent — and remembers everything. The face gives away nothing. What looks like coldness is often the nervous system gathering data, waiting for the right moment to respond. Beneath the control is a vulnerability that has been protected so well most people will never see it.',
    life_chapters: 'Life often unfolds through transformations — deaths, rebirths, dark nights, and unexpected resurrections. Many Scorpio rising have a defining experience of loss or breakdown that becomes the doorway to who they become. Power, intimacy, and shared resources thread through every era.',
    life_path: 'The work of a Scorpio rising lifetime is learning that trusting is not the same as being controlled, that vulnerability shared with the right person is power, not weakness. The gift is depth. The lesson is the courage to be known.'
  },
  sagittarius: {
    first_impression: 'Sagittarius rising arrives big — big laugh, big presence, big opinions — and the room either lights up or gets a little overwhelmed. There is openness in the face, motion in the body, often a way of being in the world that hints at travel or far horizons. People come away saying "they\'re so much fun" or "they say what they think."',
    body_style: 'Often a tall, athletic, long-limbed frame. A broad smile, an open face, a way of standing that takes up space without aggression. Style tends to be casual, comfortable, hint-of-bohemian — clothes for movement, not for sitting still. Drawn to colors that feel adventurous: rich oranges, deep purples, sun-warm tones.',
    social_mask: 'Friendly, frank, a little philosophical. Strangers read them as easy to talk to and a bit larger-than-life — and they are. Will tell you their honest opinion within ten minutes of meeting, which is refreshing or jarring depending on the room.',
    defense_mechanism: 'When threatened, leaves. Books a flight, takes a walk, signs up for the next program, throws themselves into a new philosophy. What looks like restlessness is often a deep need to keep the inner horizon wide — Sagittarius rising suffocates in small spaces, emotional or physical.',
    life_chapters: 'Life often unfolds around travel, learning, and meaning-making. Many Sagittarius rising have a chapter living abroad, studying something far from their roots, or reinventing themselves around a philosophy or faith. Higher education and the search for meaning thread through every era.',
    life_path: 'The work of a Sagittarius rising lifetime is learning that depth requires returning, not just departing — that staying long enough to be changed is also a form of adventure. The gift is vision. The lesson is rootedness.'
  },
  capricorn: {
    first_impression: 'Capricorn rising arrives composed, and the room tends to read them as older and more capable than they actually are — even when they\'re young. There is a quiet authority in the face, a economy of motion in the body, a way of being seen as serious that they never quite signed up for. People come away saying "they really know what they\'re doing."',
    body_style: 'Often a lean, structured frame, strong bones, defined features, an old-soul quality even in youth. Style tends to be classic, timeless, well-cut — nothing trendy. Drawn to grays, blacks, browns, navies. Prefers a piece that looks better with age to a piece that looks great brand new.',
    social_mask: 'Reserved, competent, dryly funny. Strangers read them as serious and reliable — and they are. The humor comes out slowly, after they\'ve decided you\'re worth the energy. Doesn\'t small-talk well; doesn\'t pretend to.',
    defense_mechanism: 'When threatened, doubles down on competence. Gets quieter, more controlled, more determined to handle the situation. What looks like emotional distance is often a deeply private nervous system that learned early to take care of itself — showing distress was either pointless or punished, so the rising sign learned to absorb it and keep going.',
    life_chapters: 'Life often unfolds around career, achievement, and time. Many Capricorn rising had to grow up early — and the second half of life is when the chart\'s gifts start landing in fullness. Long climbs, durable accomplishments, and a quiet pride in the structures they\'ve built thread through every era.',
    life_path: 'The work of a Capricorn rising lifetime is learning that worth is not earned through achievement, that joy is not a luxury reserved for retirement, and that softness is not weakness. The gift is mastery. The lesson is play.'
  },
  aquarius: {
    first_impression: 'Aquarius rising arrives different — and the room registers it within thirty seconds. Something in the face, the angle, the choice of one detail, signals "not from here," even when they are. There is an intelligence in the eye that reads the room from a slight remove. People come away saying "they\'re unusual" — almost always meant as a compliment.',
    body_style: 'Often a tall, distinctive frame, a unique face, an unusual feature that becomes the signature (the eyebrows, the cheekbones, the unusual eye color). Style tends toward unexpected — a vintage piece, an avant-garde detail, something the wearer found in a place no one else thought to look. Color choices are intentional, even when they look casual.',
    social_mask: 'Friendly, bright, slightly detached. Strangers read them as smart and hard to read — and they are. Will engage warmly with a wide range of people while keeping a private inner room that almost no one enters. Treats friends like family and family sometimes like a research project.',
    defense_mechanism: 'When threatened, intellectualizes. Steps up into the observer chair, watches the situation from above, generates frameworks. What looks like coolness is often the nervous system using analysis as a way to manage what it can\'t feel directly — Aquarius rising thinks its way through pain before it allows the pain to land.',
    life_chapters: 'Life often unfolds around community, ideas, technology, the future. Many Aquarius rising have a defining chapter of being the outsider in the family, the friend group, the institution — and a later chapter of becoming the connector between groups that wouldn\'t otherwise meet.',
    life_path: 'The work of an Aquarius rising lifetime is learning that they don\'t have to choose between being themselves and belonging — that their oddness is the contribution, and that the right people will recognize it. The gift is vision. The lesson is intimacy.'
  },
  pisces: {
    first_impression: 'Pisces rising arrives soft, dreamy, and the room\'s edges seem to blur slightly around them. There is a far-off quality in the eyes, a gentleness in the face, an emotional permeability you can almost see. People come away saying "they\'re so kind" or "I could talk to them about anything" — Pisces rising broadcasts safety.',
    body_style: 'Often a soft, fluid frame, large expressive eyes, beautiful hands or feet (Pisces rules the feet — many dancers have it). Posture can dissolve when tired. Style tends toward the romantic, layered, slightly bohemian — soft fabrics, watercolor palettes, ocean tones, occasional touches of glitter or shimmer.',
    social_mask: 'Gentle, perceptive, otherworldly. Strangers read them as kind, and reach for them in moments of need — sometimes too much. Listens with their whole body. The conversation tends to drift into something deeper than either person planned within twenty minutes.',
    defense_mechanism: 'When threatened, disappears. Goes vague, goes inside, becomes hard to find — sometimes literally (cancels plans, stops responding) and sometimes spiritually (goes through the motions while the real self has retreated to a deeper room). What looks like flakiness is often the boundary the rising sign couldn\'t name out loud, exercising itself the only way it knows.',
    life_chapters: 'Life often unfolds around devotion, sacrifice, art, addiction or recovery, mysticism. Many Pisces rising have a chapter of caring for someone (a sick parent, a chaotic partner, a spiritual teacher) that asks more than seems fair. Art, music, the sea, and dreams thread through every era.',
    life_path: 'The work of a Pisces rising lifetime is learning that their boundaries are sacred, not selfish — that not everyone deserves access to the soft inside. The gift is empathy. The lesson is discernment.'
  }
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ELEMENT_ACCENT = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
} as const

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function isRisingSign(s: string): s is Sign {
  return isValidSign(s)
}

export function risingPageHTML(sign: Sign): string {
  const meta = ZODIAC_META[sign]
  const profile = PROFILES[sign]
  const rising = RISING_PROFILES[sign]
  const accent = ELEMENT_ACCENT[meta.element]
  const Sign = cap(sign)
  const readingHref = `/gab44/reading?ref=rising-${sign}`

  const title = `${Sign} Rising Sign — Ascendant, First Impression & Body Style · gab44 ✨`
  const description = `Deep guide to the ${Sign} ascendant: first impression, body style, social mask, defense mechanism, life chapters, life path. ${meta.element} element rising, ruled by ${profile.ruling_planet}. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Rising signs', item: `${SITE_URL}/gab44/rising` },
          { '@type': 'ListItem', position: 3, name: `${Sign} rising`, item: `${SITE_URL}/gab44/${sign}/rising` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Sign} Rising Sign — Ascendant & First Impression`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/${sign}/rising`,
        about: `${Sign} rising sign — ascendant, first impression, life path`
      }
    ]
  })

  const otherSignsHtml = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const cur = s === sign ? ' current' : ''
    return `<a class="sign${cur}" href="/gab44/${s}/rising"><span class="sym">${m.symbol}</span>${cap(s)}</a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/${sign}/rising" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/${sign}/rising" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --rise-c1:${accent.c1}; --rise-c2:${accent.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}1c 0%, transparent 60%),
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
    background: linear-gradient(135deg, var(--rise-c1), var(--rise-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .rise { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--rise-c1), var(--rise-c2));
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
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--rise-c1), var(--rise-c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
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
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .reading-cta {
    background: linear-gradient(135deg, var(--rise-c1) 0%, var(--rise-c2) 100%);
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
  .related-strip {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .related-strip a { color: var(--accent); text-decoration: none; font-weight: 600; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/rising">all 12 rising signs</a>
      <a href="/gab44/${sign}/about">${Sign} sun-sign profile</a>
      <a href="/gab44/${sign}/moon">${Sign} moon sign</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ rising sign · ascendant</div>
    <h1><span class="rise">✨</span><span class="accent">${Sign}</span> rising.</h1>
    <p class="sub">The mask. The first impression. The way the world meets you before they meet you.</p>
    <div class="meta-strip">
      <span>${meta.symbol} ${escapeHtml(meta.glyph)}</span>
      <span>🜂 ${escapeHtml(meta.element)}</span>
      <span>${escapeHtml(profile.modality)}</span>
      <span>ruled by ${escapeHtml(profile.ruling_planet)}</span>
    </div>

    <article class="core-card">
      <span class="label">first impression</span>
      <p class="text">${escapeHtml(rising.first_impression)}</p>
    </article>

    <h2><span class="icon">🪞</span>body & style</h2>
    <p>${escapeHtml(rising.body_style)}</p>

    <h2><span class="icon">🎭</span>social mask</h2>
    <p>${escapeHtml(rising.social_mask)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>🛡️ defense mechanism</h3>
        <p>${escapeHtml(rising.defense_mechanism)}</p>
      </div>
      <div class="panel">
        <h3>📖 life chapters</h3>
        <p>${escapeHtml(rising.life_chapters)}</p>
      </div>
    </div>

    <h2><span class="icon">🧭</span>life path</h2>
    <p>${escapeHtml(rising.life_path)}</p>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> chart, not the rising sign</h2>
      <p>This page is for everyone with ${Sign} rising. A <strong>personal life-path reading</strong> uses your full birth chart (sun, moon, rising, planets, houses), your intention, and one human reader paying attention to your specific life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your ${Sign}-rising reading →</a>
    </section>

    <div class="related-strip">
      Want the rest of your big three? Read the <a href="/gab44/${sign}/about">${Sign} sun-sign profile</a> · <a href="/gab44/${sign}/moon">${Sign} moon sign</a>. Or browse <a href="/gab44/groups">all sign groups</a> · <a href="/gab44/compatibility">78 compatibility pairs</a> · <a href="/healing">free healing meditations</a>.
    </div>

    <section class="other-signs">
      <h3>Rising signs · all 12</h3>
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

export function risingIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const rising = RISING_PROFILES[s as Sign]
    const teaser = rising.first_impression.split('. ')[0] + '.'
    return `<a href="/gab44/${s}/rising" class="card">
      <div class="sym">${m.symbol}</div>
      <div class="name">${cap(s)} rising</div>
      <div class="element">${m.element}</div>
      <div class="teaser">${escapeHtml(teaser)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Rising Signs — All 12 · Ascendant, First Impression, Life Path · gab44 ✨</title>
<meta name="description" content="Your rising sign (ascendant) is the mask the world meets first — body style, social register, life chapters. Deep evergreen guides to all 12 rising signs: Aries through Pisces." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/rising" />
<meta property="og:title" content="Rising Signs — All 12 Deep Profiles" />
<meta property="og:description" content="The mask. The first impression. Twelve evergreen guides to the ascendant." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh; }
  .wrap { max-width: 880px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 640px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block; }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .sym { font-size: 28px; line-height: 1; margin-bottom: 4px; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
  .card .element { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
  .reading-strip { background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center; }
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
      <a href="/gab44/about">12 sun-sign profiles</a>
      <a href="/gab44/moon">moon signs</a>
      <a href="/gab44/groups">sign groups</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Rising <span class="accent">signs</span> · all 12.</h1>
    <p class="sub">Your rising sign — the ascendant — is the costume your soul put on for this lifetime. It's how strangers meet you, the body you came in with, the social mask, the life chapters. Together with sun and moon, it's the third leg of the big three. Twelve deep, evergreen guides.</p>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Don't know your rising sign?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your full birth chart — sun, moon, rising, all of it. <a href="/gab44/reading?ref=rising-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
