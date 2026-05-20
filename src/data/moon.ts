// Moon-sign SEO funnel — /gab44/moon + /gab44/{sign}/moon (12 + 1 = 13 pages).
// Targets one of the highest-volume astrology keyword clusters: "moon sign",
// "{sign} moon sign", "what does my moon sign mean", "{sign} moon personality".
// Content angle is distinct from sun-sign /about pages — moon-sign content
// covers the inner/emotional life, attachment, what soothes, what stresses,
// childhood/mother themes. Each routes to $9 reading via ?ref=moon-{sign}.
// Zero LLM cost — content baked into the bundle.

import { SITE_URL } from '@/lib/identity'
import { isValidSign, SIGNS, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'
import { PROFILES } from './about'

interface MoonProfile {
  emotional_core: string
  attachment: string
  what_soothes: string
  what_stresses: string
  childhood_theme: string
  in_partnership: string
}

export const MOON_PROFILES: Record<Sign, MoonProfile> = {
  aries: {
    emotional_core: 'Aries moon feels in flashes — fast, hot, then gone. The body knows before the mind catches up, and emotion arrives as motion: the urge to move, to defend, to claim. Repression is a slow poison here; expression is medicine.',
    attachment: 'Direct attachment style. Tells you when something is wrong, sometimes loudly, then forgets it twenty minutes later. Doesn\'t carry resentment well — burns it off in honest words. Loyalty is fierce once given; betrayal lights an unforgiving fire.',
    what_soothes: 'Movement first — a walk, a sport, a fight in a punching bag, sex, anything that lets the body discharge. Then a partner who can stay through the burst without flinching. Validation that the anger meant something, even if the action it produced was clumsy.',
    what_stresses: 'Being told to "calm down" before being heard. Slow committees. Passive-aggressive partners who won\'t name what they\'re mad about. Feeling like a burden for needing motion when others want stillness.',
    childhood_theme: 'Often grew up in environments that needed a fighter — a parent who couldn\'t protect, a sibling who needed defending, a chaos that had to be met head-on. The early lesson was: you go first, or no one goes.',
    in_partnership: 'Wants a partner who can match the directness without retaliating. Hates being managed. Heals beside someone who can hold the heat of an honest argument and still be there in the morning.'
  },
  taurus: {
    emotional_core: 'Taurus moon feels in slow, steady waves. The emotional metabolism is patient, and the body is the primary instrument — a Taurus moon doesn\'t know what they feel until they feel it in the gut, the shoulders, the hunger. The senses tell the truth.',
    attachment: 'Grounded, steady, slow to attach and slow to detach. Once bonded, the bond is for life. Doesn\'t need constant reassurance — needs consistency. Withdrawal is a hard punishment because the bond is so deeply somatic.',
    what_soothes: 'A good meal, a long bath, a familiar bed, the same playlist that always works, a partner whose presence is more like weather than performance. Gardening, cooking, a body that\'s been touched well. Predictability is not boring here; it\'s nutritive.',
    what_stresses: 'Sudden change. Financial precarity. Partners who can\'t commit to a Tuesday plan. Being rushed through a meal, a decision, a feeling. The instability of constant pivots — Taurus moon can survive almost anything if it gets to come home to the same bed each night.',
    childhood_theme: 'Often grew up needing to feel the ground first. May have learned that affection comes through bodies — food, touch, presence — more reliably than through words. May have also learned that material security wasn\'t guaranteed, leaving a deep wiring around resources.',
    in_partnership: 'Wants a partner who is physically present, sensorially attuned, and slow enough to actually arrive. Heals beside someone who treats their body as sacred and their tempo as legitimate.'
  },
  gemini: {
    emotional_core: 'Gemini moon feels in language. The emotion has to be named to be real, and naming it changes it — sometimes to the next emotion, three minutes later. The mind is the emotional regulator, which is both the gift and the trap.',
    attachment: 'Attaches through conversation. Needs to talk, daily, in detail, about everything and nothing. Withdrawal of conversation reads as withdrawal of love. Can keep multiple emotional threads open at once and not feel divided about it.',
    what_soothes: 'Being heard without being analyzed. A partner who asks the next question instead of trying to solve. A book, a podcast, a long voice memo to a friend. Movement — Mercury rules walking and breathing. Naming the feeling out loud.',
    what_stresses: 'Silence in a relationship. Feeling unable to articulate what\'s happening internally. Partners who say "you think too much" — which lands as "stop being yourself." Boredom dressed up as stability.',
    childhood_theme: 'Often grew up in homes where words mattered — either as the way love was given (lots of talk, lots of stimulation) or the way love was withheld (silence, criticism, the wrong words at the wrong time). Wiring around language as the deepest currency.',
    in_partnership: 'Wants a partner who can keep up with the pace and not weaponize the contradictions. Heals beside someone who treats curiosity about the inner world as the primary love language.'
  },
  cancer: {
    emotional_core: 'Cancer moon feels everything. The Moon rules Cancer — this is the moon at home in itself, which means full volume on every channel. Empathy is the default, the inner weather is constant, and the line between self and other is more porous than most charts know.',
    attachment: 'Deep, immediate, oceanic. Bonds quickly, mourns slowly, never fully releases — every former love still lives somewhere in the inner home. Reads emotional shifts before words confirm them. Sometimes mistakes intuition for fact and gets caught in old hurts.',
    what_soothes: 'Home. A familiar kitchen. A favorite blanket. The voice of someone who has held you through a hard year. A long bath. Cooking for someone you love. Photos. Memory laid out like a quilt. The moon — literally; full moon walks help.',
    what_stresses: 'Conflict in the home. Distance from chosen people. Cold partners. Feeling that the emotional labor goes one way. Public-facing roles that don\'t allow retreat. Sharp criticism — Cancer moon can take a comment meant in passing and carry it for weeks.',
    childhood_theme: 'Often had a complex relationship with the mother figure — either too close, too distant, or simply too much in either direction. May have absorbed family emotions like a sponge, learning early that other people\'s moods were your job to track.',
    in_partnership: 'Wants a partner who builds a home with them, slowly, intentionally. Heals beside someone who treats feeling as legitimate information, not a problem to be optimized away.'
  },
  leo: {
    emotional_core: 'Leo moon feels in heart-light. Emotion arrives big, generous, theatrical — and the inner weather wants to be witnessed. This is not vanity; it\'s the heart\'s honest insistence that joy is worth sharing and pain is worth being seen through.',
    attachment: 'Loyal, warm, demanding of presence. Needs to feel chosen daily — not through grand gestures but through visible attention. Wounded pride is the deepest hurt; it goes underground and hardens. Healing happens through being seen, not through being analyzed.',
    what_soothes: 'Compliments meant honestly. Being the focus of someone\'s warm attention, even briefly. Creative play — singing, dancing, performing, dressing well. Sun on the skin. A partner whose face lights up when you walk into a room.',
    what_stresses: 'Being ignored. Being reduced. Being one of many when you needed to be the one. Cold partners. Sterile environments. Feeling like the love you\'re giving is bigger than the love you\'re receiving back.',
    childhood_theme: 'Often grew up needing to be seen — either because there was attention available and it shaped a healthy self, or because attention was scarce and the inner Leo learned to perform for it. Either way, the wiring around being witnessed runs deep.',
    in_partnership: 'Wants a partner who can adore them out loud and let themselves be adored back. Heals beside someone whose own light isn\'t threatened by Leo\'s and who knows that warmth is not the same as being managed.'
  },
  virgo: {
    emotional_core: 'Virgo moon feels in detail. The emotional life is granular, observed, often analyzed before it\'s allowed to land. This is not coldness; it\'s an old protective strategy — if you can name what you\'re feeling precisely, you can survive it. The shadow is when analysis prevents arrival.',
    attachment: 'Caretaking. Shows love by noticing what others overlook — the missing prescription, the worried tone of voice, the chair that needs fixing. Doesn\'t always know how to receive care; can mistake it for being a project to someone else.',
    what_soothes: 'Order. A clean room. A list crossed off. Service that creates real, visible improvement. A partner who notices the thing Virgo did and doesn\'t need it pointed out. Time alone to recalibrate. Tea, walks, ritual.',
    what_stresses: 'Chaos. Imprecision in language. Partners who say they\'ll do something and then don\'t. Feeling unseen for the hundred small things they\'re tracking. The critical inner voice turned outward, then guilt for having let it out.',
    childhood_theme: 'Often grew up in environments where worth was tied to usefulness — through love, through fear, or both. May have learned early that being needed was safer than being wanted. The deeper healing is realizing rest is allowed, even un-earned.',
    in_partnership: 'Wants a partner who can name the care they receive and reciprocate concretely. Heals beside someone who treats the body as deserving of devoted attention and who lets Virgo receive without proof of having earned it.'
  },
  libra: {
    emotional_core: 'Libra moon feels through the other. The inner weather is exquisitely sensitive to the emotional climate of the room — and Libra often knows what the partner is feeling before they themselves do. The gift is connection; the trap is losing the self in the merge.',
    attachment: 'Pair-bonded by nature. Happiest in partnership, sometimes too much so — the self can blur into the other. Avoids conflict to keep the peace; learns later that unspoken things rot. Loves through refinement, beauty, careful attention.',
    what_soothes: 'A balanced room. A beautiful meal shared. A partner whose presence is harmonious without being dull. Art, music, soft light. Mediation that resolves something. Long, slow conversations where both people felt fairly heard.',
    what_stresses: 'Conflict — direct or unresolved. Ugly environments. Loneliness. Choosing between two things they both want. Partners who steamroll. Feeling that they\'ve been unfair, even when the situation didn\'t require their fairness.',
    childhood_theme: 'Often the diplomat between parents, the peacekeeper between siblings, the child who learned early that love came through smoothing things over. May have learned to mute their own preferences to keep the relational temperature livable.',
    in_partnership: 'Wants a partner who is a true peer — neither dominating nor disappearing. Heals beside someone who teaches them that disagreement doesn\'t end love and that choosing themselves isn\'t an act of betrayal.'
  },
  scorpio: {
    emotional_core: 'Scorpio moon feels in depths. The emotional life is intense, hidden, and carries an old knowing — Scorpio moon often arrives in the world already aware of the shadow side of human nature. Feelings are tidal: when they come, they come all the way in.',
    attachment: 'All-or-nothing. Slow to trust, total once trusted. Watches before bonding. Reads micro-expressions, silences, what\'s not said. Once attached, the bond runs through marrow. Betrayal cuts deepest of any moon sign and is rarely fully forgiven.',
    what_soothes: 'A partner who can hold the whole truth of them — including the dark, the jealous, the obsessive — without flinching. Privacy. Depth. Sex that is also emotional. Therapy or ritual or art that lets the shadow speak. Solitude that\'s chosen, not imposed.',
    what_stresses: 'Surface-level relationships. Being asked to be cheerful when something deep is wrong. Partners who can\'t handle intensity or who weaponize Scorpio\'s vulnerabilities once shared. The fear of being controlled — Scorpio moon will leave preemptively rather than be owned.',
    childhood_theme: 'Often grew up around hidden truths — a family secret, a parent\'s addiction, an unspoken loss, a power struggle. Learned to read the unsaid as a survival skill. May have been the child who saw the family shadow before anyone wanted to admit it existed.',
    in_partnership: 'Wants a partner who can go to the deep end and stay there without drowning or fleeing. Heals beside someone who treats trust as sacred, intensity as legitimate, and Scorpio\'s vulnerable share as a gift, not ammunition.'
  },
  sagittarius: {
    emotional_core: 'Sagittarius moon feels in horizon. Emotion arrives mixed with meaning — the question isn\'t just "what am I feeling" but "what does this feeling want me to do, where does it point." Restless under stillness; alive in motion, travel, big questions.',
    attachment: 'Spacious. Loves freely, attaches honestly, but doesn\'t do small enclosed bonds well. Needs room to roam. The fastest path to losing a Sagittarius moon\'s love is trying to cage it; the surest way to keep it is being a fellow adventurer.',
    what_soothes: 'A new place. A book that opens a question. A long walk in nature. Honest conversation about meaning, philosophy, religion, the future. Travel — even a day trip. Laughing big. A partner who is also moving through their own becoming.',
    what_stresses: 'Routine that has no point. Small-minded environments. Partners who confuse possessiveness for love. Being asked to settle when something inside is still pointing at the horizon. Cynicism, especially in close people.',
    childhood_theme: 'Often grew up either with travel/movement as a family pattern or with a deep longing for it. May have had at least one parent figure who emphasized meaning, learning, big questions — or who refused to engage with them, leaving Sag moon to find their own.',
    in_partnership: 'Wants a partner who is a fellow seeker, not a destination. Heals beside someone who treats their need for freedom as healthy, not threatening, and who is themselves a question worth staying curious about.'
  },
  capricorn: {
    emotional_core: 'Capricorn moon feels in containment. Emotion is metabolized slowly, often privately, and rarely allowed to disorganize the day. This is not absence of feeling — it\'s feeling in a fortress. The deeper the love or grief, the quieter the surface.',
    attachment: 'Loyal, durable, slow. Doesn\'t announce attachment; demonstrates it through long-term reliability. May not say "I love you" easily, and yet shows up for thirty years. Tends to take responsibility for things that aren\'t theirs, including other people\'s feelings.',
    what_soothes: 'Competence. Mastery. A goal achieved. A partner who respects their drive without trying to soften it. Old, well-made things. Tradition. Being trusted with weight. Solitude in a room that\'s clearly theirs.',
    what_stresses: 'Chaos. Helplessness. Partners who don\'t honor their own commitments. Emotional displays that feel like demands. Being seen as cold when they were just steady. Losing control of a situation they thought they had handled.',
    childhood_theme: 'Often had to grow up early — through a parent\'s absence, illness, divorce, or simple expectation of maturity. Learned that warmth was a luxury and reliability was a survival skill. Carries an internal old soul, sometimes from age six.',
    in_partnership: 'Wants a partner who is ambitious about their own life and who can let Capricorn moon receive care without immediately turning the gesture into a transaction. Heals beside someone who teaches them that joy is not something earned through suffering.'
  },
  aquarius: {
    emotional_core: 'Aquarius moon feels in concept. Emotion is often experienced at one remove — observed, analyzed, sometimes intellectualized into a system before it\'s allowed to be raw. This is not coldness; it\'s a self-protective architecture. The work is letting in the un-systematizable.',
    attachment: 'Friendship-first. Bonds through shared ideas, shared causes, shared outsider-ness. Highly loyal once attached, and the loyalty often takes the form of long-term reliability rather than constant emotional reassurance. Independence is non-negotiable.',
    what_soothes: 'A friend who doesn\'t require explanation. A cause that matters. Time alone with a complex idea. A partner who respects their need for space and doesn\'t take detachment personally. The future — the actual sense that something better is being built.',
    what_stresses: 'Emotional engulfment. Partners who interpret independence as rejection. Conformity. Conventional expectations they didn\'t agree to. Being told they\'re "too much in their head" — which lands as "stop being you."',
    childhood_theme: 'Often felt like the family weirdo, the one with different values, the one who saw the bigger picture too early. May have been emotionally neglected, or simply different enough that the family didn\'t know how to meet them. Either way, learned self-sufficiency early.',
    in_partnership: 'Wants a partner who is also their own person — fully autonomous, fully present when present, fully capable of being alone. Heals beside someone who treats the inner weirdo as the actual gift and stays close without trying to convert.'
  },
  pisces: {
    emotional_core: 'Pisces moon feels everything everyone else is feeling, plus their own, plus the room\'s, plus the song that\'s playing. The boundary between self and surrounding is genuinely thin. This is the gift (deep empathy, artistic intuition) and the work (knowing what is mine).',
    attachment: 'Soft, oceanic, devoted. Falls into love rather than walking into it. Once attached, the merge can be total — the partner\'s mood becomes the inner climate. Highly susceptible to absorbing what isn\'t theirs and calling it love.',
    what_soothes: 'Water — bath, sea, river, tears. Music. Sleep. Solitude that lets the system reset. Art-making, in any form. A partner who has their own ground and doesn\'t require Pisces moon to anchor them. Spiritual practice. Kindness to a small living thing.',
    what_stresses: 'Hard environments. Cruel partners. Crowded, overstimulating spaces. Conflict. Demands for definite answers when everything is still in flux. Feeling responsible for someone else\'s pain. The pull to escape — into substances, fantasy, other people — when reality gets sharp.',
    childhood_theme: 'Often grew up as the family empath — the one who absorbed everyone\'s pain, sometimes literally feeling it in their own body. May have had a parent who needed taking care of, leaving Pisces moon to learn early that their own boundaries were a guilty luxury.',
    in_partnership: 'Wants a partner who has firm ground of their own so the merge doesn\'t drown them. Heals beside someone who teaches them that boundaries don\'t break the connection — they make the connection sustainable.'
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

export function isMoonSign(s: string): s is Sign {
  return isValidSign(s)
}

export function moonPageHTML(sign: Sign): string {
  const meta = ZODIAC_META[sign]
  const profile = PROFILES[sign]
  const moon = MOON_PROFILES[sign]
  const accent = ELEMENT_ACCENT[meta.element]
  const Sign = cap(sign)
  const readingHref = `/gab44/reading?ref=moon-${sign}`

  const title = `${Sign} Moon Sign — Emotional Core, Attachment & What Soothes · gab44 ✨`
  const description = `Deep guide to the ${Sign} moon: emotional core, attachment style, what soothes, what stresses, childhood themes, in partnership. ${meta.element} element, ruled by ${profile.ruling_planet}. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Moon signs', item: `${SITE_URL}/gab44/moon` },
          { '@type': 'ListItem', position: 3, name: `${Sign} moon`, item: `${SITE_URL}/gab44/${sign}/moon` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Sign} Moon Sign — Emotional Core & Attachment`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/${sign}/moon`,
        about: `${Sign} moon sign — emotional life, attachment style`
      }
    ]
  })

  const otherSignsHtml = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const cur = s === sign ? ' current' : ''
    return `<a class="sign${cur}" href="/gab44/${s}/moon"><span class="sym">${m.symbol}</span>${cap(s)}</a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/${sign}/moon" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/${sign}/moon" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%F0%9F%8C%99%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --moon-c1:${accent.c1}; --moon-c2:${accent.c2};
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
    background: linear-gradient(135deg, var(--moon-c1), var(--moon-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .moon { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--moon-c1), var(--moon-c2));
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
    background: linear-gradient(90deg, var(--moon-c1), var(--moon-c2));
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
    background: linear-gradient(135deg, var(--moon-c1) 0%, var(--moon-c2) 100%);
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
      <a href="/gab44/moon">all 12 moon signs</a>
      <a href="/gab44/${sign}/about">${Sign} sun-sign profile</a>
      <a href="/gab44/${sign}/rising">${Sign} rising</a>
      <a href="/gab44/${sign}">${Sign} today</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ moon sign</div>
    <h1><span class="moon">🌙</span><span class="accent">${Sign}</span> moon sign.</h1>
    <p class="sub">The inner weather. The emotional metabolism. The feelings underneath the personality.</p>
    <div class="meta-strip">
      <span>${meta.symbol} ${escapeHtml(meta.glyph)}</span>
      <span>🜂 ${escapeHtml(meta.element)}</span>
      <span>${escapeHtml(profile.modality)}</span>
      <span>ruled by ${escapeHtml(profile.ruling_planet)}</span>
    </div>

    <article class="core-card">
      <span class="label">emotional core</span>
      <p class="text">${escapeHtml(moon.emotional_core)}</p>
    </article>

    <h2><span class="icon">🤝</span>attachment style</h2>
    <p>${escapeHtml(moon.attachment)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>🌿 what soothes</h3>
        <p>${escapeHtml(moon.what_soothes)}</p>
      </div>
      <div class="panel">
        <h3>🌑 what stresses</h3>
        <p>${escapeHtml(moon.what_stresses)}</p>
      </div>
    </div>

    <h2><span class="icon">🧒</span>childhood theme</h2>
    <p>${escapeHtml(moon.childhood_theme)}</p>

    <h2><span class="icon">💞</span>in partnership</h2>
    <p>${escapeHtml(moon.in_partnership)}</p>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> chart, not the moon sign</h2>
      <p>This page is for everyone with ${Sign} moon. A <strong>personal life-path reading</strong> uses your full birth chart (sun, moon, rising, planets), your intention, and one human reader paying attention to your specific life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your ${Sign} reading →</a>
    </section>

    <div class="related-strip">
      Sun in ${Sign}? Read the <a href="/gab44/${sign}/about">${Sign} sun-sign profile</a>. Or browse <a href="/gab44/groups">all sign groups</a> · <a href="/gab44/compatibility">78 compatibility pairs</a> · <a href="/healing">free healing meditations</a>.
    </div>

    <section class="other-signs">
      <h3>Moon signs · all 12</h3>
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

export function moonIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const m = ZODIAC_META[s as Sign]
    const moon = MOON_PROFILES[s as Sign]
    const teaser = moon.emotional_core.split('. ')[0] + '.'
    return `<a href="/gab44/${s}/moon" class="card">
      <div class="sym">${m.symbol}</div>
      <div class="name">${cap(s)} moon</div>
      <div class="element">${m.element}</div>
      <div class="teaser">${escapeHtml(teaser)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Moon Signs — All 12 · Emotional Life, Attachment, What Soothes · gab44 ✨</title>
<meta name="description" content="Your moon sign is your emotional core — what you feel, how you attach, what soothes, what stresses. Deep evergreen guides to all 12 moon signs: Aries through Pisces." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/moon" />
<meta property="og:title" content="Moon Signs — All 12 Deep Profiles" />
<meta property="og:description" content="The inner weather. The emotional metabolism. Twelve evergreen guides." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%F0%9F%8C%99%3C/text%3E%3C/svg%3E" />
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
      <a href="/gab44/rising">rising signs</a>
      <a href="/gab44/groups">sign groups</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Moon <span class="accent">signs</span> · all 12.</h1>
    <p class="sub">Your moon sign is your inner weather — the emotional core underneath the personality. It tells you how you attach, what soothes you, what stresses you, what your childhood pattern was, and what you actually need in love. Twelve deep, evergreen guides.</p>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Don't know your moon sign?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your full birth chart — sun, moon, rising, all of it. <a href="/gab44/reading?ref=moon-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
