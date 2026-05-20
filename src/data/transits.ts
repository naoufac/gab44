// Transits SEO funnel — /gab44/transits (index) + /gab44/transits/{slug} (6
// transit guides: mercury-retrograde, saturn-return, jupiter-return,
// pluto-square, venus-retrograde, mars-retrograde). Targets very-high-volume
// evergreen astrology search clusters: "mercury retrograde meaning", "saturn
// return crisis", "what is a saturn return", "jupiter return luck", "pluto
// square", "venus retrograde dates", "mars retrograde 2026". These are some
// of the highest-converting astrology keywords in all of search — people
// who type "saturn return crisis" are looking for help, RIGHT NOW.
//
// Each transit gets its own ~700-word evergreen guide. Cross-linked from
// /gab44/planets/* (the planet pages already mention these by name). Routes
// warm traffic to $9 reading via ?ref=transit-{slug}. Zero LLM cost.

import { SITE_URL } from '@/lib/identity'

export interface TransitProfile {
  slug: string
  name: string             // "Mercury Retrograde", "Saturn Return"
  symbol: string           // ☿ ℞, ♄, ♃, ♇ etc
  emoji: string
  planet: string           // 'Mercury', 'Saturn', etc
  planet_slug: string      // for cross-link to /gab44/planets/{slug}
  element: string          // for accent gradient
  cadence: string          // "3 times per year, 3 weeks each", "once around 27-30"
  age_or_when: string      // "27-30 (first), 56-60 (second), 84-90 (third)" or "every 18 months"
  one_liner: string
  meaning: string          // big paragraph: what this transit IS
  what_it_feels_like: string // signs you're in it
  what_to_do: string       // what helps
  what_not_to_do: string   // common mistakes
  the_lesson: string       // what it's teaching
  myth_buster: string      // the misinformation to drop
  shadow: string           // the trap
  pair_with: string        // crystal/sound/practice
  key_questions: [string, string, string]
}

export const TRANSITS: TransitProfile[] = [
  {
    slug: 'mercury-retrograde',
    name: 'Mercury Retrograde',
    symbol: '☿ ℞',
    emoji: '🪶',
    planet: 'Mercury',
    planet_slug: 'mercury',
    element: 'air',
    cadence: 'Three times per year, ~3 weeks each',
    age_or_when: 'Three windows every year — January, May, September is roughly the rhythm',
    one_liner: 'Not a curse. A pause. The mind gets a chance to revise instead of launch.',
    meaning: 'Mercury Retrograde is the period — about three weeks, three times a year — when Mercury appears to move backward in the sky from earth\'s point of view. Astrologically, Mercury rules communication, contracts, technology, travel, the mind itself. So when it goes retrograde, anything Mercury touches gets unusually delicate: emails get misread, devices act up, plans go sideways, someone from your past surfaces, a misunderstanding multiplies. The pop-culture version of Mercury Retrograde treats this as a curse — three weeks of pure chaos to brace for. The deeper reading is more interesting: Mercury Retrograde is a re-cycle. The four-letter Latin prefix "re-" runs the whole period — review, revise, reconnect, return, redo, remember. It is not a bad time; it is a different kind of time. When you stop trying to launch new things and start tending what is already half-built, the retrograde is on your side.',
    what_it_feels_like: 'Tech glitches that should not happen. Communication breakdowns — something you said clearly was heard sideways. An ex texts. A friend you have not thought of in years comes up in conversation. Travel hits friction (delayed flights, lost things). You go to send something and realize you wrote the wrong amount. A decision you thought was settled wants a second look. Mental fog or unusual scatter. The urge to re-read old journals or revisit an old project.',
    what_to_do: 'Re-do, re-vise, re-connect, re-think. Revisit half-finished projects and bring them home. Edit, polish, refine. Reconnect with people who matter. Catch up on emails you have been avoiding. Back things up. Read your contracts twice. Slow down on big decisions. Listen for old material your mind is bringing up — there is usually something it wants you to finish.',
    what_not_to_do: 'Sign new contracts you have not read three times. Buy expensive electronics or vehicles if you can postpone. Send important emails fired off in haste — sit on them an hour longer than usual. Launch a brand-new venture you absolutely cannot delay. Take texts at face value when the tone reads off — assume miscommunication first.',
    the_lesson: 'Most modern life is "go forward as fast as you can." Mercury Retrograde is the universe forcing a recalibration cycle three times a year. The lesson is that revision is not regression — that going back over your work is also work, and often the work that produces the most lasting result.',
    myth_buster: 'Mercury Retrograde does not break your phone. Mercury Retrograde does not ruin your relationship. The retrograde is a backdrop, not a cause — what surfaces during this time was already there underneath. The retrograde just turns the volume up on it. Treat it as an invitation to listen, not as an enemy to outsmart.',
    shadow: 'The shadow is using Mercury Retrograde as an excuse to avoid responsibility — "Mercury is in retrograde, that\'s why I haven\'t replied" — when the truth is you just haven\'t replied. The retrograde is real but it is not a get-out-of-life-free card.',
    pair_with: 'Slowness. Journaling. Re-reading something you already love. The Letting Go meditation on /healing pairs naturally — releasing the urge to push.',
    key_questions: [
      'What half-finished thing in my life is asking to come back online?',
      'Whose voice from my past is showing up — and what does it want to teach me?',
      'Where am I trying to push forward when the moment is asking me to pause?'
    ]
  },
  {
    slug: 'saturn-return',
    name: 'Saturn Return',
    symbol: '♄',
    emoji: '🪐',
    planet: 'Saturn',
    planet_slug: 'saturn',
    element: 'earth',
    cadence: 'Roughly every 29.5 years — Saturn\'s full orbit',
    age_or_when: 'First Return: 27-30. Second Return: 56-60. Third Return: 84-90 (if you are blessed to live there).',
    one_liner: 'The cosmic audit. The structures you built when you didn\'t know who you were now have to bear weight.',
    meaning: 'Your Saturn Return is the moment Saturn returns, in the sky, to the exact spot it occupied when you were born. Saturn is the planet of structure, time, mastery, responsibility, consequence, and the long game. Every ~29.5 years, it completes one full orbit and comes home. The first Saturn Return — between 27 and 30 — is the most discussed because it is the audit: the structures you built in your twenties (career, relationship, identity, lifestyle) get tested, and anything that was built on someone else\'s expectations rather than yours starts to crack. Marriages end. Careers pivot. Cities get left. Bodies break down and demand attention. It is brutal in real time and almost always celebrated in retrospect — because what survives the Saturn Return is yours, and what you build after is solid in a way the pre-Return work could not be. The second Return (56-60) is more about legacy: what does this life of mine actually amount to, and what do I want the last act to look like? The third (if it comes) is wisdom and finishing.',
    what_it_feels_like: 'Late twenties chaos that is hard to explain. Sudden clarity that the path you are on is not yours. Career or relationship endings that "nobody saw coming" but actually you saw coming for years. A reckoning with parents or authority. Body symptoms — the body refuses to cooperate with a life it doesn\'t agree with. A hunger for solid ground, real responsibility, a step into adulthood you can actually sign for. The strange feeling of becoming someone you have to introduce yourself to.',
    what_to_do: 'Take the audit seriously. If a structure breaks — a job, a relationship, a city — let it break instead of forcing it. Build new structures slowly and on your own values, not someone else\'s. Get serious about the work that is yours to do. Make peace with the fact that this is a years-long process, not a moment. Find a mentor, a therapist, an elder — Saturn loves elders. Take care of your body. Save money. Read.',
    what_not_to_do: 'Try to medicate it away. Cling to a structure that is failing because you built it before you knew yourself. Marry the person you have been with for the last few years just because the timing feels off. Quit a stable job in a panic without a plan. Treat the Saturn Return as a single event with a tidy ending — it usually takes 2-3 years and unfolds in waves.',
    the_lesson: 'The Saturn Return is the universe asking: "If you had to bear the weight of this life for the next 30 years, would you?" If yes — congratulations, you built well. If no — it\'s time to dismantle and rebuild. The post-Return self is more solid because it is more honest.',
    myth_buster: 'Saturn Return is not a curse. Saturn is not punishing you. The crisis is information. Anything that breaks during the Return was already broken — Saturn just turns up the lights. Plenty of people pass through it relatively gracefully because they had been doing the work all along.',
    shadow: 'The shadow is using "Saturn Return" as the explanation for choices you would have made anyway. "I had to leave him, it was my Saturn Return" can be true and can also be an evasion. Take Saturn seriously, but take responsibility for the choices yourself — that is exactly what Saturn is teaching.',
    pair_with: 'A real journal practice. A long walk a day. The Anxiety Relief meditation on /healing pairs naturally for the chest-clench parts.',
    key_questions: [
      'What structure in my life was built by someone other than me?',
      'What kind of adult do I actually want to become?',
      'If I had to bear the weight of my current life for 30 more years, what would I keep, and what would I rebuild?'
    ]
  },
  {
    slug: 'jupiter-return',
    name: 'Jupiter Return',
    symbol: '♃',
    emoji: '✨',
    planet: 'Jupiter',
    planet_slug: 'jupiter',
    element: 'fire',
    cadence: 'Every ~12 years — Jupiter\'s orbit',
    age_or_when: 'Around 12, 24, 36, 48, 60, 72, 84. The most-felt are 24, 36, and 48.',
    one_liner: 'A door opens. The chapter that knew it was coming finally arrives.',
    meaning: 'Your Jupiter Return is the moment Jupiter returns, in the sky, to the position it occupied when you were born — once roughly every 12 years. Jupiter is the planet of expansion, luck, generosity, vision, faith, philosophy, opportunity, and the long arc that turns out to be in your favour. Where Saturn is the contracting force (responsibility, consequence), Jupiter is the expanding force (possibility, increase). Jupiter Returns tend to feel like doors opening — career breakthroughs, big moves, falling in love, the trip that changes everything, an idea that grows into a thing. They are not automatic — Jupiter rewards the prepared — but they are real. Many of the moments you look back on as "the year my life pivoted upward" were Jupiter Returns. They are also famously generous: Jupiter opens too many doors, and the work is to choose which ones to walk through.',
    what_it_feels_like: 'Sudden expansion in some area of your life. A decision that has been simmering becomes obvious. Travel or relocation. Falling in love or deepening an existing love. A new teacher, a new ally, a new audience. Money or opportunity arriving from an unexpected direction. The sense that you are being seen — that doors that used to feel closed have a different energy around them. Faith that has been quiet returning louder.',
    what_to_do: 'Say yes to opportunities you would normally hesitate on. Travel if you can. Invest in education, mentors, communities. Plant the seeds of the next 12-year cycle — Jupiter Returns are launching pads. Be generous (Jupiter loves generosity — it tends to repay it). Take the bigger risk that is also the wiser one. Be visible. Speak up about what you want.',
    what_not_to_do: 'Squander it on excess — Jupiter\'s shadow is over-extension. Don\'t take on more than you can hold. Don\'t make promises you cannot keep just because everything feels possible. Don\'t spend money like it grows on trees just because some of it suddenly is. Don\'t treat the Return as a one-time gift — it is a window, and what you build during it is what compounds for the next 12 years.',
    the_lesson: 'Jupiter Return is the universe handing you fertile ground. The lesson is that what you plant in fertile ground is what you have to tend for the next decade. Plant on purpose. Choose the seeds.',
    myth_buster: 'Jupiter Return does not magic the lottery into your bank account. Jupiter rewards alignment, not passivity. If you sit on the couch through your Jupiter Return, the energy moves around you instead of through you. The "luck" of Jupiter is the luck of being prepared and visible when the door opens.',
    shadow: 'The shadow of Jupiter is excess — too much food, too much spending, too much promise-making, too much of a good thing. Watch for the moment when "expansion" tips into "I cannot actually carry this". That is Jupiter overplaying its hand.',
    pair_with: 'The Abundance Affirmations on /healing pair naturally — Jupiter Returns are the time to install the next 12 years of belief.',
    key_questions: [
      'What door is opening that I have been preparing for without realizing it?',
      'What am I being asked to say yes to that part of me wants to say "yes but not yet"?',
      'If this is the launching pad for the next 12 years — what do I want to plant?'
    ]
  },
  {
    slug: 'pluto-square',
    name: 'Pluto Square (Mid-life Pluto)',
    symbol: '♇',
    emoji: '🌑',
    planet: 'Pluto',
    planet_slug: 'pluto',
    element: 'water',
    cadence: 'Pluto Square Pluto — once in a lifetime',
    age_or_when: 'Around 36-45 — the timing varies because Pluto\'s orbit is uneven (it spent decades in Capricorn, then Aquarius)',
    one_liner: 'The deep underworld pass. What has been quietly outgrown gets ripped out by the roots so something truer can grow.',
    meaning: 'The Pluto Square is the transit when transiting Pluto forms a square (90°) to your natal Pluto — a once-in-a-lifetime aspect, usually hitting between ages 36 and 45. Pluto is the planet of death, rebirth, deep transformation, and the underworld — the part of you that lives below the storyline you tell about yourself. The Pluto Square is the mid-life pass through the underworld: the part of yourself that has been quietly outgrown for years gets ripped out by the roots so something truer can grow in its place. People often describe it as the most transformative period of their adult life, and also the most disorienting: marriages dissolve, careers pivot at depth, identities you wore for two decades suddenly do not fit, family secrets surface, the body stages a revolt that demands attention. It is not destructive for the sake of destruction — it is the death that precedes the only kind of birth that matters: the one you cannot reverse-engineer.',
    what_it_feels_like: 'A persistent feeling that an entire layer of your life is no longer yours. Anger you cannot fully account for. Grief about things you thought you were over. Family-of-origin material resurfacing — sometimes literally (parents declining, secrets revealed) and sometimes psychologically. A reckoning with power — yours, others\', the kinds you learned to fear. Body symptoms that demand attention. A new ruthlessness about how you spend your one life. The feeling of dying to a self you did not know you were carrying.',
    what_to_do: 'Get help. This is not a transit to white-knuckle alone. Therapy, body work, long-term spiritual practice, an honest friend or two. Let things go that need to go — even when "that" is a marriage, a career, a friendship of 20 years. Trust the descent. Do not rush the timeline. The Pluto Square unfolds over years, not weeks. Read about underworld journeys — they are very old; you are not the first.',
    what_not_to_do: 'Try to medicate the descent into not happening. Cling to a structure (relationship, job, identity) that is clearly dying because the unknown after it terrifies you. Make a sudden, dramatic decision in a single afternoon — Pluto wants you to drop into a slow, real decision over months. Use spiritual language to bypass the work ("everything happens for a reason" instead of actually grieving).',
    the_lesson: 'Pluto Square teaches that the self you were carrying needed to die so you could become someone you could not yet imagine. Most people who emerge from a Pluto Square describe it as the most painful season of their life — and the one they would not undo. Real depth gets paid for in real currency.',
    myth_buster: 'Pluto Square is not a punishment. Pluto is not malevolent. The descent is the system\'s way of clearing what cannot be cleared at the surface. Resisting it is the source of most of the suffering — the descent itself, painful as it is, is also the medicine.',
    shadow: 'The shadow is two-headed: spiritual bypass ("I\'m fine, this is just a phase") OR melodrama ("everything is destruction"). Both miss the work. The work is the slow honest descent into what is actually dying, and the patient willingness to wait for what wants to be born.',
    pair_with: 'A therapist who knows depth work. A long sustained meditation practice. The Letting Go meditation on /healing — the most-aligned of the five for this transit.',
    key_questions: [
      'What in my life is dying — and is the dying the problem, or is my refusal to let it die the problem?',
      'What family-of-origin material is resurfacing now, and what is it asking of me?',
      'If I trusted this descent, what would I let go of this season that I have been clinging to?'
    ]
  },
  {
    slug: 'venus-retrograde',
    name: 'Venus Retrograde',
    symbol: '♀ ℞',
    emoji: '🌹',
    planet: 'Venus',
    planet_slug: 'venus',
    element: 'earth',
    cadence: 'Every ~18 months, ~40 days',
    age_or_when: 'Roughly once every year and a half — the rarest of the inner-planet retrogrades',
    one_liner: 'The audit of love and value. What you love comes back for a second look. So does what you have been over-paying for.',
    meaning: 'Venus Retrograde is the ~40-day period, every 18 months, when Venus appears to move backward. Venus rules love, beauty, value, attraction, money, taste, and what you find worthy of your attention. So when Venus retrogrades, all of this gets a second look. Old loves resurface (in the inbox, in the dream life, in the chance encounter). Long-held assumptions about what you "deserve" come up for examination. Money decisions slow down — the impulse buy gets returned, the over-priced item gets re-evaluated. The aesthetic you have been wearing for years suddenly feels off. Like Mercury Retrograde, Venus Retrograde is a "re-" cycle: re-love, re-value, re-attract, re-define what is beautiful to you. The trap is treating it as random or chaotic; it is rarely random. The exes who surface, the money decisions that wobble, the values that get questioned — Venus is asking which of them are still yours and which were never yours to begin with.',
    what_it_feels_like: 'An ex texts. A dream about an old flame. A friendship that wants to be revisited. The clothes in your closet feel wrong. A relationship that has been comfortable starts to feel less so — or less so in a way that is real. Money flows feel slower or weirder. The price on something you were going to buy suddenly seems wrong. A creative project you thought you were done with wants a second pass. Sense of taste shifts.',
    what_to_do: 'Re-read your values. Audit the spending — what are you paying for that does not match what you say you value? Reconnect with people you actually love (Venus Retrograde is good for warm reconnections, less good for new starts). Refine what you find beautiful. Edit creative work. Revisit aesthetic choices. Make money decisions slowly. Notice who comes back into your awareness, and let it teach you something — even if "the lesson" is "this person is firmly in my past."',
    what_not_to_do: 'Make a major aesthetic change you cannot undo (cutting your hair off in a Venus Retrograde is a meme for a reason). Marry the ex who texted. Start a brand new relationship and call it forever in the first three weeks (the energy is unstable for new starts). Spend a lot of money on something you have not slept on. Sign a big contract about money or partnership.',
    the_lesson: 'Venus Retrograde teaches you which of your values are actually yours and which you inherited or absorbed. It also teaches you that what you love is not a fixed list — it evolves, and the work is to let it evolve consciously rather than performing a love or aesthetic that is no longer true.',
    myth_buster: 'Venus Retrograde does not "ruin" relationships — it pressure-tests them. Healthy ones survive easily. The ones that "fail" usually were not aligned with what either person actually wanted; the retrograde just made the misalignment visible.',
    shadow: 'The shadow is using the retrograde as a license to do something destructive in love or money — "Venus is retrograde, that\'s why I cheated, that\'s why I overspent, that\'s why I texted my ex at 2am." Venus brings up these impulses; what you do with them is on you.',
    pair_with: 'The Letting Go meditation on /healing pairs naturally — old loves come up to be released, not necessarily revived.',
    key_questions: [
      'Whose face from my past has been showing up — and is it asking me to revisit, or to finally release?',
      'What am I paying for that no longer matches what I value?',
      'What kind of love have I been performing that is not actually mine?'
    ]
  },
  {
    slug: 'mars-retrograde',
    name: 'Mars Retrograde',
    symbol: '♂ ℞',
    emoji: '🔥',
    planet: 'Mars',
    planet_slug: 'mars',
    element: 'fire',
    cadence: 'Every ~2 years, ~10-11 weeks',
    age_or_when: 'Roughly every two years — the longest retrograde of the personal planets',
    one_liner: 'The fire turns inward. Action stalls. Anger shows up to be re-examined.',
    meaning: 'Mars Retrograde is the ~10-week period, every two years, when Mars appears to move backward. Mars is the planet of action, will, anger, drive, sex, and the engine of the chart. So when Mars retrogrades, the engine doesn\'t shut off — it turns inward. Things you would normally just do feel sticky. Anger that you had filed away comes back up. Sexual energy gets weird (not absent — re-routed). Old fights get a re-match. Plans that needed pushing forward feel resistant. The temptation is to read this as "Mars is broken" — but Mars is doing exactly what retrogrades do: re-, re-, re-. Re-act, re-fight, re-direct, re-engine. Mars Retrograde is the audit of how you use your power. The 10 weeks reveal where your drive has been mis-aimed, where your anger has been unspoken, where your action has been compulsive instead of intentional.',
    what_it_feels_like: 'Plans stall. Things you usually push through resist you. Old fights with the same person resurface (sometimes literally). Anger you thought you were over comes back up. Sex life feels different — sometimes lower, sometimes more complicated. Frustration that has nowhere to go. Body symptoms — Mars rules the head, blood, muscles, and sudden injuries. The urge to fight that is bigger than the situation.',
    what_to_do: 'Re-direct, do not push. Use the period for revising battle plans, training (literal or metaphorical), and clearing out unprocessed anger. Therapy or somatic work shines here. Edit, refine, re-engine. Settle old fights honestly. Watch how you spend your energy — Mars Retrograde shows you where you have been bleeding it. Strength training instead of cardio (channeling drive inward and structurally).',
    what_not_to_do: 'Launch a major new venture that depends on speed and momentum. Pick a new fight you don\'t need to pick. Make a huge decision in a flash of anger. Have surgery you can postpone (Mars rules sharp instruments and blood). Start something brand-new in a sport or training program — better to refine what you already practice.',
    the_lesson: 'Mars Retrograde teaches that drive without direction is just spinning. The period asks you to slow down enough to look at HOW you fight, where your anger lives, and what your engine has actually been chasing. Most people emerge with a clearer "yes" and a clearer "no."',
    myth_buster: 'Mars Retrograde is not a free pass to be passive. The fire is still there — it just wants to be tended differently. The work is not no action; it is intentional action.',
    shadow: 'The shadow is suppressing the anger that the retrograde is bringing up — "I\'m fine" while the body and the close relationships tell a different story. Mars Retrograde is the chance to feel and process anger; suppression just stores more of it for the next round.',
    pair_with: 'Strength training. Long walks. The Anxiety Relief meditation on /healing pairs well for the chest-tightness this transit can bring up.',
    key_questions: [
      'What anger have I been carrying that has not had a place to land?',
      'Where has my drive been mis-aimed — what have I been chasing that I do not actually want?',
      'What old fight is asking for an honest re-match — with myself or someone else?'
    ]
  }
]

export const TRANSIT_SLUGS = TRANSITS.map((t) => t.slug)
const TRANSITS_BY_SLUG: Record<string, TransitProfile> = Object.fromEntries(
  TRANSITS.map((t) => [t.slug, t])
)

export function isTransitSlug(s: string): boolean {
  return s in TRANSITS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ELEMENT_ACCENT: Record<string, { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function transitPageHTML(slug: string): string {
  const t = TRANSITS_BY_SLUG[slug]
  if (!t) return ''
  const accent = ELEMENT_ACCENT[t.element]
  const readingHref = `/gab44/reading?ref=transit-${slug}`

  const title = `${t.name} — What It Means, What to Do, What to Avoid · gab44 ✨`
  const description = `${t.name}: ${t.meaning.substring(0, 140)}... Real evergreen guide — what it feels like, what to do, what to avoid, the deeper lesson, key questions. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Transits', item: `${SITE_URL}/gab44/transits` },
          { '@type': 'ListItem', position: 3, name: t.name, item: `${SITE_URL}/gab44/transits/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${t.name} — meaning, what to do, what to avoid, the lesson`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/transits/${slug}`,
        about: `${t.name} astrology meaning, ${t.planet} transit guide`
      }
    ]
  })

  const otherTransitsHtml = TRANSITS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const a = ELEMENT_ACCENT[q.element]
    return `<a class="trans-mini${cur}" href="/gab44/transits/${q.slug}" style="--c1:${a.c1};--c2:${a.c2}"><span class="sym">${q.symbol}</span><span class="name">${escapeHtml(q.name.replace(' Retrograde', ' Rx').replace('Mid-life ', ''))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/transits/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/transits/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --c1:${accent.c1}; --c2:${accent.c2};
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
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.55em; vertical-align: 6px; padding-right: 12px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .arch { font-size: 17px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
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
    background: linear-gradient(90deg, var(--c1), var(--c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 36px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel.do  { border-left: 4px solid #2e9e6a; }
  .panel.dont { border-left: 4px solid #d63d4d; }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .myth-box {
    background: var(--bg-2); border-radius: 14px; padding: 18px 22px; margin: 22px 0;
    font-size: 15px; color: var(--fg-dim);
  }
  .myth-box h3 { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--fg-muted); font-weight: 700; }
  .pair-line { font-size: 14px; color: var(--fg-dim); padding: 14px 18px;
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px; margin: 18px 0; }
  .pair-line strong { color: var(--fg); }
  .pair-line a { color: var(--accent); font-weight: 600; text-decoration: none; }
  .questions { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .questions h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); font-style: italic; }
  .questions li:last-child { margin-bottom: 0; }
  .reading-cta {
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
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
  .other-transits { margin: 36px 0 22px; }
  .other-transits h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .transits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  @media (max-width: 600px) { .transits-grid { grid-template-columns: repeat(2, 1fr); } }
  .trans-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .trans-mini:hover { border-color: var(--c1); }
  .trans-mini.current { border-color: var(--c1); border-width: 2px; }
  .trans-mini .sym { font-size: 18px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700; }
  .trans-mini .name { font-size: 11px; }
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
      <a href="/gab44/transits">all 6 transits</a>
      <a href="/gab44/planets/${t.planet_slug}">${escapeHtml(t.planet)} guide</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ astrology transits</div>
    <h1><span class="sym">${t.symbol}</span>${escapeHtml(t.name)}</h1>
    <p class="arch">${escapeHtml(t.cadence)} — ${escapeHtml(t.age_or_when)}</p>
    <p class="sub">${escapeHtml(t.one_liner)}</p>
    <div class="meta-strip">
      <span>planet · <a href="/gab44/planets/${t.planet_slug}" style="color:inherit">${escapeHtml(t.planet)}</a></span>
      <span>cadence · ${escapeHtml(t.cadence)}</span>
    </div>

    <article class="core-card">
      <span class="label">what it is</span>
      <p class="text">${escapeHtml(t.meaning)}</p>
    </article>

    <h2><span class="icon">🌟</span>what it feels like</h2>
    <p>${escapeHtml(t.what_it_feels_like)}</p>

    <div class="two-col">
      <div class="panel do">
        <h3>✓ what helps</h3>
        <p>${escapeHtml(t.what_to_do)}</p>
      </div>
      <div class="panel dont">
        <h3>✗ what to avoid</h3>
        <p>${escapeHtml(t.what_not_to_do)}</p>
      </div>
    </div>

    <h2><span class="icon">📚</span>the lesson</h2>
    <p>${escapeHtml(t.the_lesson)}</p>

    <div class="myth-box">
      <h3>myth-buster</h3>
      <p style="margin:0">${escapeHtml(t.myth_buster)}</p>
    </div>

    <h2><span class="icon">🌒</span>the shadow</h2>
    <p>${escapeHtml(t.shadow)}</p>

    <div class="pair-line">
      <strong>Pair with:</strong> ${escapeHtml(t.pair_with)}
    </div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(t.key_questions[0])}</li>
        <li>${escapeHtml(t.key_questions[1])}</li>
        <li>${escapeHtml(t.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> ${escapeHtml(t.name)}</h2>
      <p>This page describes the ${escapeHtml(t.name)} in general. A <strong>personal reading</strong> looks at <em>your</em> exact chart — when this transit hits you, where in your life it lands, what to expect, what to be honest about. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/transits">all 6 transits</a> · <a href="/gab44/planets/${t.planet_slug}">${escapeHtml(t.planet)} in your chart</a> · <a href="/gab44/planets">all 10 planets</a> · <a href="/gab44/houses">12 houses</a>.
    </div>

    <section class="other-transits">
      <h3>The major transits</h3>
      <div class="transits-grid">
        ${otherTransitsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function transitsIndexHTML(): string {
  const cards = TRANSITS.map((t) => {
    const accent = ELEMENT_ACCENT[t.element]
    return `<a href="/gab44/transits/${t.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${t.symbol}</span>
        <span class="emoji">${t.emoji}</span>
      </div>
      <div class="name">${escapeHtml(t.name)}</div>
      <div class="when">${escapeHtml(t.cadence)}</div>
      <div class="teaser">${escapeHtml(t.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 6 Major Astrology Transits — Mercury Retrograde, Saturn Return &amp; More · gab44 ✨</title>
<meta name="description" content="A friendly map of the major astrology transits: Mercury Retrograde, Saturn Return, Jupiter Return, Pluto Square, Venus Retrograde, Mars Retrograde. What each one means, what to do, what to avoid, the deeper lesson. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/transits" />
<meta property="og:title" content="The 6 Major Astrology Transits — A Friendly Guide" />
<meta property="og:description" content="Mercury Retrograde, Saturn Return, Jupiter Return, Pluto Square, Venus Retrograde, Mars Retrograde — what they mean and what to do." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh; }
  .wrap { max-width: 980px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 660px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
  .card .sym { font-size: 26px; font-weight: 700;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .card .emoji { font-size: 22px; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; }
  .card .when { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px;
    letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600; }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
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
      <a href="/gab44/planets">10 planets</a>
      <a href="/gab44/houses">12 houses</a>
      <a href="/gab44/about">12 sun signs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The major <span class="accent">transits</span> — when the sky talks loud.</h1>
    <p class="sub">Six big astrology moments that show up in every life — the retrogrades and the returns. Each one has a job. Each one has a lesson. Each one is asking you to pause and pay attention.</p>

    <div class="intro">
      <h3>What is a transit?</h3>
      <p><strong>Your birth chart is the sky at the moment you were born.</strong> A transit is what the sky is doing <em>now</em>, hitting that frozen moment. Some transits are gentle — barely noticed. The six on this page are the loud ones — the seasons that mark a life.</p>
      <p><strong>Retrogrades</strong> happen when a planet appears to move backward (from earth's perspective). The energy turns inward and asks for revision. Mercury Rx three times a year. Venus Rx every 18 months. Mars Rx every 2 years.</p>
      <p><strong>Returns</strong> happen when a planet comes back to its natal spot. Jupiter Return every 12 years (luck). Saturn Return every 29.5 (the audit). Pluto Square at 36-45 (the underworld pass).</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know what transit is hitting <em>your</em> chart right now?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading looks at where you are in the cycle — what is currently being asked of you, what to do, what to avoid. <a href="/gab44/reading?ref=transits-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
