// Saturn Return × sign SEO funnel — /gab44/saturn-return (index)
// + /gab44/saturn-return/{sign} (12 pages). Targets "saturn return in {sign}",
// "first saturn return {sign}", "saturn return age", "saturn return what is".
// Saturn returns to its natal position roughly every 29.5 years; the FIRST
// return (~ages 27–30) is the rite-of-passage into adulthood proper, and
// the SECOND return (~ages 56–60) is the rite into elderhood. The SIGN of
// natal Saturn colors the curriculum of the return — what gets dismantled,
// what gets built. Cross-funnels into /gab44/reading?ref=saturn-return-{sign}.

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

interface SaturnProfile {
  sign: Sign
  curriculum: string    // 1-line description of the central lesson
  dismantles: string    // what falls apart at the return
  builds: string        // what the return asks you to build
  body: string          // long body paragraph
  practice: string      // what to do during the window
  paradox: string       // central paradox of the placement
}

// Saturn-return-by-sign — the central rite-of-passage at ~29 and ~58. Each
// profile is honest: nothing romanticised, no "this is just a phase". Saturn
// in this sign tells you exactly which pillar of the self has to come down
// to be re-built on truer ground. The first return (~27–30) is the building
// of the adult; the second (~56–60) is the building of the elder.
export const SATURN_PROFILES: Record<Sign, SaturnProfile> = {
  aries: {
    sign: 'aries',
    curriculum: 'Learning to want without apology — and to act on the wanting without waiting for permission.',
    dismantles: 'Roles where you have been a permission-asker. The deferred dream. The version of you that hesitates.',
    builds: 'A self that initiates. A relationship to anger and desire that can be trusted. A body that takes up space without flinching.',
    body: 'Saturn return in Aries is the rite of becoming the one who decides. The first return (around ages 27–30) tends to demolish whatever roles asked you to wait for permission — a job, a relationship, a family-script — and asks you to build, often shakily, the version of yourself that initiates. The second return (around 56–60) is gentler in pace but stricter: it asks the elder to keep starting. Aries Saturn is allergic to the deferred life. By the end of the window, the question to settle is simple: am I willing to be the one who picks?',
    practice: 'Pick one thing in the next 30 days you have been waiting for someone else to greenlight. Greenlight it yourself. Aries Saturn return rewards small unhesitating starts.',
    paradox: 'You will feel both more sure of what you want and more terrified to claim it. Both are correct. Move anyway.'
  },
  taurus: {
    sign: 'taurus',
    curriculum: 'Learning the difference between security and self-betrayal — and rebuilding the body, the bank account, and the home on your own terms.',
    dismantles: 'False stability. The job kept only for safety. Comfort that costs the soul. Relationships where pleasure is borrowed.',
    builds: 'Real material ground: a body you live in, money you earn cleanly, a home that is actually yours, pleasures that nourish.',
    body: 'Saturn return in Taurus is the rite of resettling the body and the material life. The first return tends to expose every false security — the job kept for safety, the apartment kept for inertia, the relationship that runs on routine. It asks you to rebuild your relationship to the simple, slow, embodied facts of life: food, money, touch, ground. The second return turns that question toward legacy: what will my body, my home, my work leave behind? Taurus Saturn does not move fast. It rewards the person willing to sit in the unglamorous work of re-laying foundations.',
    practice: 'Audit one area of your material life — body, money, or home — and remove one thing that costs you peace. Taurus Saturn return rewards quiet subtraction.',
    paradox: 'You will crave more security and discover that what you actually want is less of what was masquerading as it.'
  },
  gemini: {
    sign: 'gemini',
    curriculum: 'Learning to hold a single thought long enough to make it real — and to use the voice without compulsively softening or scattering it.',
    dismantles: 'The reflex to be clever instead of clear. Half-finished projects. Conversations that perform connection instead of having it.',
    builds: 'Disciplined thought. A voice that lands. The capacity to write, teach, or speak something that matters and stay with it.',
    body: 'Saturn return in Gemini is the rite of the disciplined mind. The first return tends to expose the cost of cleverness without depth — the half-finished projects, the side-jobs of the brain that never compounded, the conversations that performed connection instead of having it. It asks you to commit a single line of thought through to its end. The second return refines the voice into elder authority: not louder, sharper. Gemini Saturn rewards the person willing to write the long-form version of the idea they have only ever sketched.',
    practice: 'Pick one idea you have been circling for years and finish it — a draft, a podcast, a course outline. Gemini Saturn return rewards completed sentences.',
    paradox: 'You will feel both more articulate than ever and more aware of how much of your speech has been avoidance.'
  },
  cancer: {
    sign: 'cancer',
    curriculum: 'Learning to mother yourself well, and to leave the family-of-origin emotionally even if you have not left it physically.',
    dismantles: 'The role of the perpetual child. Caretaking that is actually self-erasure. Homes that recreate the original wound.',
    builds: 'A real inner home. Adult relationship to mother and to mothering. The capacity to receive care, not only give it.',
    body: 'Saturn return in Cancer is the rite of building the adult inner home. The first return tends to surface, sometimes brutally, the unfinished business with the family-of-origin: the role of the perpetual child, the caretaking that has been self-erasure, the home that quietly recreates the original wound. It asks you to become the mother to yourself you needed and to set the boundary that lets you actually leave home, internally. The second return is the rite of becoming the elder others come home to. Cancer Saturn rewards the person willing to do the long, private work of inner-mothering.',
    practice: 'Have one honest conversation, even silently, with your inner mother. Or set one boundary you have been postponing for the family. Cancer Saturn return rewards inner-home repair.',
    paradox: 'You will feel both more tender and more able to say no. Both are signs the home is being rebuilt.'
  },
  leo: {
    sign: 'leo',
    curriculum: 'Learning to put the actual gift on the line — to be seen for the real signature, not the safe version.',
    dismantles: 'Performing for the wrong audience. Hiding behind irony or competence. The substitute career that is not the calling.',
    builds: 'A creative life that has your name on it. The willingness to be visible doing the thing you actually love.',
    body: 'Saturn return in Leo is the rite of the named creative life. The first return tends to expose every place where you have been performing for the wrong audience, hiding behind competence or irony, or sitting inside a substitute career that is adjacent to but not the calling. It asks you to put the actual gift on the line, with your name on it, in a room where you can be misjudged. The second return is the rite of the elder mentor who sees the gift in others and makes room. Leo Saturn rewards the person willing to be visible doing the thing they actually love.',
    practice: 'In the next 30 days, put one creative thing into the world with your name on it — even small, even imperfect. Leo Saturn return rewards authored visibility.',
    paradox: 'You will feel both more willing to be seen and more allergic to being seen for the wrong thing.'
  },
  virgo: {
    sign: 'virgo',
    curriculum: 'Learning the difference between mastery and self-attack — and reorganising work, body, and craft around what is actually sustainable.',
    dismantles: 'Burnout disguised as conscientiousness. The inner critic that runs the show. Work that consumes the body.',
    builds: 'Craft. A body kept on purpose. Work-rhythms that compound for decades. Service that does not eat the server.',
    body: 'Saturn return in Virgo is the rite of sustainable craft. The first return tends to crack the burnout pattern that conscientiousness has been hiding — the body that has been overworked, the inner critic that has been running the show, the work that consumes the server. It asks you to rebuild work and body on rhythms that compound for decades, not quarters. The second return refines this into elder mastery: the craft that has been honed long enough to be transmitted. Virgo Saturn rewards the person willing to slow down enough to do something well for thirty more years.',
    practice: 'Pick one daily practice you can actually sustain — fifteen minutes of something — and start. Skip a day, return without self-attack. Virgo Saturn return rewards small repeatable craft.',
    paradox: 'You will feel both more critical of what you have built and more committed to building it well.'
  },
  libra: {
    sign: 'libra',
    curriculum: 'Learning to be in real partnership without disappearing — and to choose the relationships, deals, and aesthetics that match your actual standards.',
    dismantles: 'Relationships that ran on accommodation. Deals signed for the wrong reasons. Beauty kept as performance.',
    builds: 'A partnership that can hold disagreement. A justice you can act on. A self that stays present in the room.',
    body: 'Saturn return in Libra is the rite of mature relationship. The first return tends to surface every place where partnership has run on quiet self-erasure — the relationship kept by accommodation, the contract signed for the wrong reasons, the aesthetic chosen to please. It asks you to learn how to stay present in a difficult conversation without bending the self into agreement. The second return becomes the elder rite of justice: standing for fairness in a way that costs something. Libra Saturn rewards the person willing to risk the relationship to keep the self.',
    practice: 'Have one conversation this month where you say what you actually think instead of what would keep the room calm. Libra Saturn return rewards present-tense honesty.',
    paradox: 'You will feel both more devoted to fairness and more aware of the cost of having performed it.'
  },
  scorpio: {
    sign: 'scorpio',
    curriculum: 'Learning to use power without hiding it — and to let trusted intimacy be safer than control.',
    dismantles: 'Power held in secret. Intimacy that runs on test-the-other. Old vows of self-protection that have outlived their use.',
    builds: 'Real intimacy. Money and power held in the open. The capacity to be known and to know.',
    body: 'Saturn return in Scorpio is one of the most demanding rites in the wheel. The first return tends to crack open every place where power has been held in secret and intimacy has run on testing the other before letting them in. It asks you to release the old vow of self-protection — the one that has kept you alive and is now keeping you small. The second return is the rite of the elder who can hold power and intimacy in the open without flinching. Scorpio Saturn rewards the person willing to be truly known by at least one other person.',
    practice: 'Tell one truth this month that you would normally bury — the smallest version. Or look at one money/power dynamic in your life that you have been avoiding. Scorpio Saturn return rewards revealed truth.',
    paradox: 'You will feel both more powerful and more aware of how heavily you have been carrying the secret of that power.'
  },
  sagittarius: {
    sign: 'sagittarius',
    curriculum: 'Learning to commit to one path long enough for it to teach you — and to build a meaning you can live by, not just believe in.',
    dismantles: 'Restless escape. Beliefs you inherited and never tested. The freedom that has been an avoidance.',
    builds: 'Earned philosophy. A discipline you stay with. Meaning that survives contact with the actual life.',
    body: 'Saturn return in Sagittarius is the rite of earned meaning. The first return tends to expose where freedom has been escape, where the wanderlust has been an avoidance of root, where the philosophy has been borrowed. It asks you to commit to one path long enough for it to actually teach you something — a place, a partner, a discipline, a vocation. The second return is the rite of the elder teacher whose wisdom has been forged in long practice, not just collected from books. Sagittarius Saturn rewards the person willing to stop running and stay.',
    practice: 'Pick one practice or commitment and stay with it for the full year of the return — no escape clause. Sagittarius Saturn return rewards rooted seeking.',
    paradox: 'You will feel both more devoted to truth and more aware of how often you have used the search for truth as a way to leave.'
  },
  capricorn: {
    sign: 'capricorn',
    curriculum: 'Learning to step into your own authority — and to build a structure that is yours, not the one that was inherited.',
    dismantles: 'The job, role, or family-mantle that was never quite yours. False authority. Self-discipline that is actually self-punishment.',
    builds: 'Real authority. A long-build that has your fingerprints on it. Mastery you can stand on.',
    body: 'Saturn return in Capricorn is Saturn at home — the most concentrated form of the rite. The first return tends to demand a full reckoning with authority: the job that was never quite yours, the family-mantle inherited rather than chosen, the version of self-discipline that has been self-punishment in disguise. It asks you to step, often awkwardly, into being the authority of your own life. The second return is the rite of legacy — what structure, what teaching, what institution you leave standing. Capricorn Saturn rewards the long, patient, self-authored build.',
    practice: 'Take one concrete step this month on a build that is yours — not inherited, not borrowed. Capricorn Saturn return rewards self-authored structure.',
    paradox: 'You will feel both more competent and more aware that the competence has, until now, been in service of someone else\'s blueprint.'
  },
  aquarius: {
    sign: 'aquarius',
    curriculum: 'Learning to belong to a community that is actually yours — and to commit to the collective vision long enough to ground it.',
    dismantles: 'The chosen-family that turned out to be a hiding place. Vision without follow-through. Outsider identity used as armor.',
    builds: 'Real community. A vision rooted in concrete work. The capacity to be different and present, not just different and aloof.',
    body: 'Saturn return in Aquarius is the rite of grounded vision. The first return tends to crack open the chosen-family or scene that has actually been a hiding place, the vision that has lived only as conversation, the outsider identity that has been used as armor. It asks you to commit to a community and a project that are not abstract — to do the slow institutional work that turns vision into structure. The second return is the rite of the elder who has built a small piece of the future and stayed with it. Aquarius Saturn rewards the person willing to root the vision.',
    practice: 'Commit one full month to a community or project you have only been observing. Show up, stay, contribute. Aquarius Saturn return rewards grounded belonging.',
    paradox: 'You will feel both more visionary and more aware of how many visions you have left as drafts.'
  },
  pisces: {
    sign: 'pisces',
    curriculum: 'Learning to give the gift of porosity a vessel — and to be in service to mystery without dissolving into it.',
    dismantles: 'Escape routes. The savior loop. Boundaries softened until the self disappeared. Substances or fantasy used to manage the empathic load.',
    builds: 'A vessel for the gift. A practice — art, healing, contemplation — that holds the porosity. A loving no.',
    body: 'Saturn return in Pisces is the rite of giving the mystic vessel form. The first return tends to expose every place where porosity has become dissolution: the savior loop, the boundary softened until the self disappeared, the substance or fantasy used to manage the empathic load. It asks you to build a real container — an art practice, a healing modality, a contemplative life — that lets the gift flow without consuming the giver. The second return is the rite of the elder mystic whose presence is medicine because it is bordered. Pisces Saturn rewards the person willing to give their porosity a form.',
    practice: 'Set one loving no this month with no story attached. Or commit to one practice — art, prayer, healing work — that channels the gift without draining you. Pisces Saturn return rewards bordered tenderness.',
    paradox: 'You will feel both more open and more aware that openness without form has been costing you a self.'
  }
}

export const SATURN_RETURN_SIGNS = SIGNS

export function isSaturnReturnSign(s: string): s is Sign {
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

export function saturnReturnPageHTML(sign: Sign): string {
  const p = SATURN_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Saturn Return in ${Sign}`

  const otherReturns = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/saturn-return/${s}">♄ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/mars-${sign}">♂ Mars in ${Sign}</a>`,
    `<a href="/gab44/decans/${sign}-1">${sm.symbol} ${Sign} 1st decan</a>`,
    `<a href="/gab44/saturn-return">all 12 returns</a>`
  ].join('')

  const title = `${headline} — what dismantles, what gets built, by age · gab44`
  const description = `${headline}: the rite of passage at ages 27–30 (first return) and 56–60 (second). What dismantles: ${p.dismantles} What builds: ${p.builds} Plus a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Saturn Return', item: `${SITE_URL}/gab44/saturn-return` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/saturn-return/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/saturn-return/${sign}`,
        about: `${headline} — Saturn return rite-of-passage by sign`
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
<link rel="canonical" href="${SITE_URL}/gab44/saturn-return/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.curriculum)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/saturn-return/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%99%84%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/saturn-return">all 12 returns</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/chiron/${sign}">${Sign} Chiron</a>
      <a href="/gab44/reading?ref=saturn-return-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">♄ ${sm.symbol}</div>
      <div class="meta">Saturn ♄ ${Sign} · the rite-of-passage curriculum</div>
    </div>
    <h1><span class="accent">Saturn Return</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.curriculum)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>What dismantles</h3>
        <p>${escapeHtml(p.dismantles)}</p>
      </div>
      <div class="panel">
        <h3>What gets built</h3>
        <p>${escapeHtml(p.builds)}</p>
      </div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Saturn paradox</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Practice for the window</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How this Saturn return reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Saturn</span><span class="v">♄ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">First return</span><span class="v">~ages 27–30 · adulthood proper</span></div>
      <div class="row"><span class="k">Second return</span><span class="v">~ages 56–60 · elderhood</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~29.5-year orbit · the great teacher</span></div>
      <div class="row"><span class="k">Window</span><span class="v">12–18 months around exact return</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=saturn-return-${sign}">Get a $9 reading on your Saturn return →</a>
    </div>

    <h2>The other 11 Saturn returns</h2>
    <div class="strip">${otherReturns}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · rite-of-passage curriculum · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function saturnReturnIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = SATURN_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/saturn-return/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">♄ ${sm.symbol}</div>
      <div class="name">Saturn Return in ${titleCase(s)}</div>
      <div class="axis">rite of passage · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.curriculum)}</div>
    </a>`
  }).join('')

  const title = `Saturn Return by sign — first (27–30) & second (56–60) rite of passage · gab44 ✨`
  const description = `Saturn Return in {sign} — what gets dismantled and what gets built across all 12 zodiac signs at ages 27–30 (first return) and 56–60 (second return). The great teacher returns. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/saturn-return" />
<meta property="og:title" content="Saturn Return by sign · gab44" />
<meta property="og:description" content="The first and second Saturn return rite-of-passage across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#5e6f3a;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/chiron">chiron</a>
      <a href="/gab44/north-node">north node</a>
      <a href="/gab44/reading?ref=saturn-return-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#5e6f3a,#c96442)">♄</div>
      <div class="meta">12 pages · 1 per sign · evergreen · ~29.5-year cycle</div>
    </div>
    <h1>Saturn Return <span class="accent">by sign</span></h1>
    <p class="vibe">First return (~ages 27–30) builds the adult. Second return (~56–60) builds the elder. The sign tells you the curriculum. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=saturn-return-index">Want a Saturn-return reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Saturn-return-by-sign pages · evergreen.
    </footer>
  </div>
</body>
</html>`
}
