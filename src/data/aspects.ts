// Aspects SEO funnel — /gab44/aspects (index) + /gab44/aspects/{slug} (7 aspect
// guides: conjunction, sextile, square, trine, quincunx, opposition, semi-sextile).
// Completes the foundational chart-reading stack alongside signs (/about), houses,
// and planets. An aspect is the geometric relationship between two planets — the
// shape of their conversation. Hard aspects (square, opposition) are the growth
// edges; soft aspects (trine, sextile) are the gifts; conjunctions fuse; quincunxes
// adjust. Targets foundational evergreen astrology keywords: "what does conjunction
// mean astrology", "trine vs sextile", "square aspect meaning", "opposition aspect",
// "quincunx inconjunct", "what is an aspect in astrology". Each guide is ~700
// words across 8 sections (what it is, the geometry, what it feels like, the gift,
// the work, how to work with it, the lesson, myth-buster, shadow, pair-with, key
// questions). Cross-linked from /gab44/planets (the planets explicitly mention
// aspects) and from /gab44/houses. Routes warm traffic to $9 reading via
// ?ref=aspect-{slug}. Zero LLM cost.

import { SITE_URL } from '@/lib/identity'

export interface AspectProfile {
  slug: string
  name: string                // "Conjunction", "Square", "Trine"
  symbol: string              // ☌ □ △ ✱ ☍ ⚻ ⚺
  emoji: string
  geometry: string            // "0° — same point in the sky"
  type: 'hard' | 'soft' | 'neutral' | 'adjust'
  type_label: string          // "soft flow", "hard friction", "fusion", "subtle adjustment"
  one_liner: string
  meaning: string
  what_it_feels_like: string
  the_gift: string
  the_work: string            // "the friction" for hard, "the trap of ease" for soft
  how_to_work_with_it: string
  the_lesson: string
  myth_buster: string
  shadow: string
  pair_with: string
  key_questions: [string, string, string]
}

export const ASPECTS: AspectProfile[] = [
  {
    slug: 'conjunction',
    name: 'Conjunction',
    symbol: '☌',
    emoji: '🔥',
    geometry: '0° — two planets at the same spot in the sky',
    type: 'neutral',
    type_label: 'fusion',
    one_liner: 'Two energies become one. The strongest aspect in the book.',
    meaning: 'A conjunction is what happens when two planets sit at the exact same degree in the same sign — they fuse. From earth\'s point of view, they look like one bright point in the sky. Astrologically, that\'s exactly how the energy works: the two planets are no longer two voices in conversation, they are a single chord. Whatever those two planets mean for you (Venus + Mars = love + drive, Sun + Saturn = identity + responsibility, Moon + Pluto = emotions + transformation) is now one merged force in your chart. Conjunctions are the most powerful aspect in astrology. They are also the most personal — they show up as character, not as event. People often don\'t notice their conjunctions because the merged energy feels like "just how I am." That is exactly the work: to see what is fused, name the two voices inside it, and learn to use them on purpose. Conjunctions can be glorious (Venus + Jupiter = the lucky-in-love placement) or heavy (Sun + Saturn = the old-soul, hard-childhood placement) or transformative (Moon + Pluto = the emotional intensity that runs the room). All of them are waiting to be claimed.',
    what_it_feels_like: 'A trait you have always had that you cannot quite separate from yourself. A "way you are" that is louder than other people seem to be in that area. A doubled-down version of one of the planets — Venus + Mars feels like double the romantic intensity, Sun + Mercury feels like a mind that does not stop, Mars + Pluto feels like a will that will not be told no. The conjunction does not feel like an aspect, it feels like an identity.',
    the_gift: 'Concentration of force. Whatever the two planets do, you do at higher voltage. A conjunction in your chart is a place where you have unusual power — once you learn to wield it, it is a strength most people can\'t reach because they don\'t have the same merging.',
    the_work: 'The work is to separate. People with strong conjunctions often need to consciously pry the two planets apart inside themselves so they can use each one at the right moment. Without that work, the conjunction shows up as compulsion ("I always do X") rather than as a tool you can pick up and put down.',
    how_to_work_with_it: 'Name the two planets out loud. Watch which one is leading in different situations — sometimes Venus is in front, sometimes Mars is. Practice using them one at a time. Therapy or journaling helps because the work is mostly inner archaeology. Read deep about each planet separately so the merged voice resolves into two voices.',
    the_lesson: 'A conjunction teaches that real power is concentrated, not spread thin — but only if you are conscious enough to direct it. Unconscious conjunction = compulsion. Conscious conjunction = mastery. The same placement, two completely different lives.',
    myth_buster: 'A conjunction is not automatically good or bad. The reputation depends on which planets — Venus + Jupiter is famously lucky, Mars + Saturn is famously hard. But "hard" conjunctions become some of the most powerful adult lives because the work is forced early. Don\'t read your conjunction as a verdict; read it as the strongest tool you were given.',
    shadow: 'The shadow of a conjunction is identification — believing the merged energy IS you, with no separation. That is the trap. The work is to see that you are the consciousness wielding the conjunction, not the conjunction itself.',
    pair_with: 'A long journal practice on the two planets in the conjunction. The Letting Go meditation on /healing helps with the parts of the conjunction you have outgrown.',
    key_questions: [
      'Which two planets are conjunct in my chart, and what compulsion or strength have I always called "just me" because of them?',
      'Can I use one of those two planets without the other right now, on purpose?',
      'What would change if I stopped identifying with the conjunction and started wielding it?'
    ]
  },
  {
    slug: 'sextile',
    name: 'Sextile',
    symbol: '✱',
    emoji: '🌬️',
    geometry: '60° — two signs apart, complementary elements (fire + air, earth + water)',
    type: 'soft',
    type_label: 'opportunity',
    one_liner: 'A door that opens easily — if you remember to walk through it.',
    meaning: 'A sextile is the aspect between two planets sitting 60° apart in your chart — exactly two signs of separation. Like the trine, it\'s a "soft" or "easy" aspect, but where the trine is pure flow (the talent you were born with), the sextile is opportunity. The two planets get along, but they have to choose each other. Sextiles are the doors that are unlocked but still closed — you have to actually push them open. They tend to involve pairs of complementary elements: fire + air (creative ignition) or earth + water (steady nourishment). What this means for you is that wherever you have sextiles in your chart, there is a gift available — but it does not deliver itself. The classic example: a Mercury–Venus sextile gives you the natural ability to write or speak with grace, but if you never sit down to do it, the gift just sits there. Sextiles reward the small, repeatable action.',
    what_it_feels_like: 'An ease that shows up only when you start. The thing you procrastinate on but always enjoy once you\'re doing it. A skill or relationship that "just works" when you give it five minutes of attention but disappears when you don\'t. A friendship that is wonderful and yet only exists because someone keeps texting first. Sextiles run on small, repeatable yes-es.',
    the_gift: 'Free leverage. The sextile makes a thing unusually easy for you — a creative form, a kind of person, a way of working — but only if you choose to engage. You don\'t have to push the way someone with a square would push. You just have to show up.',
    the_work: 'The trap of the sextile is missing it. Because it doesn\'t demand attention, sextiles can sit unused for whole decades. The work is noticing where you have unfair leverage — and using it.',
    how_to_work_with_it: 'Build a tiny daily practice in the area the sextile rules. Five minutes a day is more than enough — sextiles compound on small actions. Trust the ease. People with sextiles often dismiss their gift because it feels too easy to be valuable; that is the work — to take the easy thing seriously.',
    the_lesson: 'A sextile teaches that grace does exist — that not everything in life has to be earned through grinding. Some doors really do open. The lesson is to walk through them when they appear, instead of always reaching for the harder route to prove you deserve it.',
    myth_buster: 'Sextiles are NOT lazy or useless. People sometimes dismiss soft aspects as "boring" because no drama happens around them. But the soft aspects are where ease lives — and a chart full of squares with no sextiles is exhausting. Sextiles are the rest the chart needs.',
    shadow: 'The shadow of the sextile is taking the gift for granted — assuming the door will always be there. Sextiles are doors but they do close eventually. The talent you never use atrophies. The relationship you never tend dries up.',
    pair_with: 'A daily 5-minute practice in the area the sextile rules. The Abundance Affirmations on /healing pair well — they teach the nervous system that ease is allowed.',
    key_questions: [
      'Where in my life is a door that has been quietly open — and have I been walking past it?',
      'What small, repeatable action would let one of my sextiles compound this year?',
      'What gift do I dismiss because it came easy?'
    ]
  },
  {
    slug: 'square',
    name: 'Square',
    symbol: '□',
    emoji: '⚒️',
    geometry: '90° — three signs apart, same modality, different element',
    type: 'hard',
    type_label: 'friction · growth',
    one_liner: 'The aspect that builds you. Painful in the moment, character-forging over time.',
    meaning: 'A square is the aspect between two planets sitting 90° apart in your chart — three signs of separation, same modality (both cardinal, both fixed, or both mutable), different element. The two planets are at right angles to each other; they pull in directions that don\'t agree. Squares are "hard" aspects — they create friction, frustration, and the feeling of working against yourself. They are also the most growth-producing aspect in the chart. Every developmental psychologist will tell you the same thing: humans grow through resistance, not through ease. Squares are the chart\'s built-in resistance machine. The cliché is that squares "cause problems" — the deeper read is that squares cause character. Whatever planets are square in your chart, that is the area of your life where you cannot coast — you have to keep showing up, keep adjusting, keep pushing through the friction. And whatever survives that friction becomes the strongest part of you. Squares are the reason people in their 50s with hard charts often have more presence than people in their 50s with easy charts.',
    what_it_feels_like: 'Recurring frustration in a specific area. A thing you keep circling back to and never quite resolve. A pattern that shows up again and again with different people but same shape. The feeling of working twice as hard as someone else for the same result. Tension between two parts of yourself that both feel essential. The square doesn\'t break — it grinds.',
    the_gift: 'Earned strength. The areas of your life ruled by your strongest squares are usually where you eventually become exceptional, because nothing in those areas is cheap. People with strong squares around career end up with extraordinary careers. People with strong squares around relationships eventually develop unusual emotional intelligence. The friction is the forge.',
    the_work: 'The friction itself is the work. Squares don\'t want to be solved cleanly — they want to be lived through, year after year, until you stop fighting the geometry and start using it.',
    how_to_work_with_it: 'Stop trying to make the square go away. Accept that there is recurring tension between these two planets and design a life that holds both. Build practices that exercise both planets separately. Get a therapist or a coach for the area the square rules — having an outside witness shortens the pain by years. Take the slow, hard path on purpose. Squares reward decade-long consistency.',
    the_lesson: 'A square teaches that the hardest things in your chart are not curses — they are the parts of your life where you are being forged into something bigger than you were. The friction is information. The pattern is the path. The work is the gift.',
    myth_buster: 'A "square" is not a punishment. People with the hardest charts often live the most interesting lives precisely because the squares forced them to develop. Conversely, "easy" charts (lots of trines, no squares) can produce people who never grow because nothing ever resists them. Don\'t pity squares; pity charts without them.',
    shadow: 'The shadow of the square is bitterness — the loop where you keep replaying the friction without using it for growth. The square that never gets worked becomes a chronic complaint. The square that gets worked becomes mastery.',
    pair_with: 'A real journal practice — squares produce so much material that journaling is almost mandatory. The Anxiety Relief meditation on /healing helps with the chest-tightness squares can bring up.',
    key_questions: [
      'Which two planets are square in my chart — and what is the recurring tension I keep meeting?',
      'What would I need to accept about this friction so I could stop fighting it and start using it?',
      'If this square is the forge — what is being forged? What strength is the friction trying to give me?'
    ]
  },
  {
    slug: 'trine',
    name: 'Trine',
    symbol: '△',
    emoji: '💎',
    geometry: '120° — four signs apart, same element',
    type: 'soft',
    type_label: 'flow · talent',
    one_liner: 'The talent you were born with. The flow that does not need to be earned.',
    meaning: 'A trine is the aspect between two planets sitting 120° apart in your chart — four signs of separation, same element (fire trine fire, earth trine earth, etc.). The two planets share an elemental nature, so they get along instinctively. Trines are the smoothest, easiest aspect in the chart — pure flow. They show up as natural talent, instinct, things you were just good at as a child without trying. A Mercury trine Jupiter person is naturally wise on the page. A Venus trine Saturn person is naturally classy in love. A Sun trine Mars person has a natural drive that doesn\'t exhaust them. Trines are the aspect of grace — the unearned gift. They are also famously underused. Because trines come pre-installed, people don\'t notice them. Because they don\'t produce drama, they don\'t demand attention. The work of a trine is the opposite of the work of a square: not to push through resistance, but to actually use the gift. To take the easy thing seriously.',
    what_it_feels_like: 'A skill or ease that other people compliment but you cannot quite see, because it has always been there. A thing you do without trying that someone else trains for years to learn. Confidence in an area where most people lack it. The feeling of being unfairly lucky in one slice of life. Coming home to yourself when you do this thing — the way water finds its level.',
    the_gift: 'Free flow. Wherever you have a trine, life makes a thing easy for you that is not easy for everyone. This is real. It compounds if you use it.',
    the_work: 'The work is taking the gift seriously. Trines wither when ignored — the talent you never developed, the love that found you young that you did not tend, the ease you mistook for "anyone could do this." The gift is real but it is not eternal.',
    how_to_work_with_it: 'Identify the trines in your chart and ask: am I using this? If the trine is between Mercury and Jupiter, are you writing? If it\'s between Venus and Saturn, are you tending the long-form love or the long-form aesthetic that this aspect makes possible? Trines reward consistency — small daily practice in the area they rule turns a "natural ability" into a real life.',
    the_lesson: 'A trine teaches that not everything in life is earned through suffering. Some things really are gifts. The lesson is the discipline of receiving — of letting yourself be good at the thing without needing to suffer for it first. That is harder than it sounds.',
    myth_buster: 'Trines are NOT a guarantee. The trine gives you the river but you still have to step into it. People with charts full of trines who never used any of them die with their gifts unwritten. The trine without action is potential without expression.',
    shadow: 'The shadow of the trine is laziness — the assumption that because the gift came easy, it doesn\'t need tending. The undeveloped trine is the saddest placement in astrology — a real talent left on the floor.',
    pair_with: 'A daily practice in the area the trine rules. The Abundance Affirmations on /healing pair well — they help the nervous system accept that flow is allowed and earned by being used.',
    key_questions: [
      'What has always been easy for me that I have been dismissing as "no big deal"?',
      'Which of my trines have I been letting sit unused, and what would change if I gave it 30 minutes a day?',
      'Where in my life am I refusing flow because I do not trust ease?'
    ]
  },
  {
    slug: 'opposition',
    name: 'Opposition',
    symbol: '☍',
    emoji: '⚖️',
    geometry: '180° — six signs apart, opposite signs of the zodiac',
    type: 'hard',
    type_label: 'mirror · integration',
    one_liner: 'Two halves of yourself standing across from each other — waiting to be integrated.',
    meaning: 'An opposition is the aspect between two planets sitting 180° apart in your chart — directly across the zodiac from each other. Aries / Libra. Taurus / Scorpio. Cancer / Capricorn. The two planets stand face to face, mirror images of each other, holding opposite truths. Like the square, opposition is a "hard" aspect — it produces tension. But where the square is internal friction (planets pulling against each other inside you), the opposition is external mirror (one planet projects out, the other lives in). The classic experience of an opposition is meeting the other half of it in another person. The Sun-Moon opposition shows up as "I keep dating people who are exactly the opposite of me." The Venus-Mars opposition shows up as "love and lust always live in different people." The Saturn-Moon opposition shows up as "every authority figure feels like a cold parent." The work of opposition is integration — taking back what you have been projecting out into the world and learning to hold both halves at once. People who integrate their oppositions become unusually mature; people who don\'t spend a lifetime in conflict with the same kind of person, over and over.',
    what_it_feels_like: 'A pattern of meeting the same kind of person who triggers you — the boss, the lover, the sibling, the friend who always pushes the same button. A sense of "I am one way and the world keeps insisting I be the other way." The recurring debate inside yourself between two values that both feel essential. Relationships that are obsessive precisely because the other person carries something you have disowned in yourself.',
    the_gift: 'Wholeness, eventually. An integrated opposition makes you a 360° human — you can hold both poles of a tension that other people can only inhabit one side of. People with worked oppositions become natural mediators because they have lived both halves.',
    the_work: 'Stop projecting. The hardest part of an opposition is realizing that the trait you keep encountering in others is actually a part of yourself you have not owned. The work is the slow archaeology of taking back the projection.',
    how_to_work_with_it: 'When you keep meeting the same kind of person, ask what part of you they carry that you have refused to carry yourself. Build a practice that exercises the planet you under-use. If you have a Sun-Moon opposition and you are all Sun (action, ego), practice the Moon (rest, feeling, intuition) and vice versa. Therapy is gold for oppositions — the witness helps you see the projection. Long-term partnership is also gold — you cannot run from your opposition in a long marriage; integration becomes the only way out.',
    the_lesson: 'An opposition teaches that two truths can be true at the same time. The lesson is integration — that maturity is not picking a side but holding both sides at once. The Sun and the Moon both belong to you. The masculine and feminine. The inner and outer. Adulthood is learning to be all of it.',
    myth_buster: 'Opposition is NOT about defeating the other half. The trap is treating the opposite planet as an enemy. The work is dialogue, not victory. Both poles are necessary. The opposition is asking for an inner peace treaty.',
    shadow: 'The shadow of the opposition is endless projection — going through life endlessly attacking the qualities you have refused to integrate. The Moon-person who hates "needy" people is usually a Moon-deprived Sun. The Saturn-person who hates "authoritarian" people is usually unconscious of their own rigidity. The shadow is what the mirror shows.',
    pair_with: 'Therapy. A long, written list of the qualities you keep meeting in others that infuriate you (and a sit with the question: which of these is mine?). The Letting Go meditation on /healing helps with the projection-withdrawal.',
    key_questions: [
      'Which two planets are opposite in my chart, and what kind of person have I been meeting again and again because of them?',
      'What trait do I keep projecting onto others that, if I am honest, also lives in me?',
      'What would it look like to hold both poles of this opposition, instead of always picking one?'
    ]
  },
  {
    slug: 'quincunx',
    name: 'Quincunx (Inconjunct)',
    symbol: '⚻',
    emoji: '🪢',
    geometry: '150° — five signs apart, no shared element or modality',
    type: 'adjust',
    type_label: 'adjustment · awkward',
    one_liner: 'Two planets that don\'t share a language. The aspect of constant adjustment.',
    meaning: 'A quincunx (also called an inconjunct) is the aspect between two planets sitting 150° apart in your chart — five signs of separation. The two planets share no element and no modality. They have nothing in common. They cannot find each other naturally. Where the square is sharp friction and the opposition is mirror tension, the quincunx is awkwardness — the aspect of "neither of these fits." Quincunxes don\'t scream like squares. They itch. They show up as the off-fit thing — the body that doesn\'t quite agree with your work, the relationship that\'s "almost right but not really," the talent that doesn\'t map to any obvious career, the recurring feeling of being one click off from the version of life you\'re supposed to be living. Quincunxes are the aspect of adjustment. The work is constant micro-correction — angling the two planets toward each other repeatedly because they will never quite click. People with major quincunxes often have very unusual lives because their charts force them off the standard path.',
    what_it_feels_like: 'The persistent feeling of being slightly off-fit. A health issue that comes and goes with no obvious trigger. A career path that almost works but never quite settles. A relationship that has 90% of what you need but the 10% gap is exactly the part that matters. A sense that life keeps asking for small adjustments — diet, schedule, mindset, location — and the moment you stop adjusting, the discomfort comes back.',
    the_gift: 'Adaptability. People with major quincunxes become unusually good at improvising because they have been micro-adjusting since birth. They are often hard to categorize — they don\'t fit a single industry, a single style, a single template — and that off-fit becomes their signature.',
    the_work: 'Stop trying to "fix" the quincunx with one big move. The aspect doesn\'t resolve; it adjusts. The work is to make the constant micro-adjustment a practice rather than a frustration.',
    how_to_work_with_it: 'Track the discomfort in a journal — what triggers it, what soothes it, what pattern it forms. Build a life that allows for ongoing adjustment rather than expecting a single answer. People with quincunxes often do well with non-traditional careers, creative work, and lifestyles that allow for re-shaping. Body work is huge — quincunxes between planets and the 6th house often live in the body, and somatic work helps the system find its own rhythm.',
    the_lesson: 'A quincunx teaches that not every life problem has a clean solution. Some things in your chart are not bugs to be fixed but features that require ongoing care. The lesson is to make peace with the asymmetry — to stop demanding that everything line up neatly and start trusting that the off-fit is part of your design.',
    myth_buster: 'A quincunx is NOT a curse. It\'s also not a square in disguise — it\'s its own thing. The quincunx doesn\'t want to be resolved; it wants to be respected. Most modern astrologers under-rate quincunxes; they\'re actually one of the most life-shaping aspects because they show up as constant low-level adjustment.',
    shadow: 'The shadow of the quincunx is denial — pretending the off-fit isn\'t there and trying to force a standard life on a non-standard chart. That works for years and then it doesn\'t. The body knows.',
    pair_with: 'A daily body-check-in practice. The Anxiety Relief meditation on /healing pairs well with quincunx-fueled tension that lives in the chest and gut.',
    key_questions: [
      'Where in my life have I been demanding a clean answer to a question that may only ever respond to ongoing adjustment?',
      'What discomfort have I been ignoring because it\'s small but persistent?',
      'What would change if I designed a life that expected to be adjusted instead of solved?'
    ]
  },
  {
    slug: 'semi-sextile',
    name: 'Semi-sextile',
    symbol: '⚺',
    emoji: '🪶',
    geometry: '30° — one sign apart, neighbouring signs',
    type: 'adjust',
    type_label: 'subtle blend',
    one_liner: 'The quietest aspect — two neighbours figuring out how to share a fence.',
    meaning: 'A semi-sextile is the aspect between two planets sitting 30° apart — exactly one sign apart, the simplest possible separation. The two planets are neighbours, but they don\'t share an element or a modality, so the relationship is gentle but slightly awkward — like sharing a wall with a roommate whose schedule is the opposite of yours. Semi-sextiles are the quietest aspect in the book. They don\'t produce drama. They don\'t demand attention. They show up as small daily inconveniences and small daily blends — the gentle compromise between two parts of yourself that need to coexist. Most astrologers under-rate semi-sextiles, which is fair — they\'re subtle. But for the work of becoming whole, they matter: a semi-sextile is the place where you are slowly learning to integrate two adjacent slices of yourself without needing to make either side dominate.',
    what_it_feels_like: 'A low-grade hum of "these two parts of me don\'t quite agree" that you mostly tune out. A small daily friction — the way your morning self and your afternoon self want different things, the way your romantic life and your work life don\'t quite mesh schedules, the way your spiritual practice and your day job are on slightly different wavelengths. Nothing dramatic. Just a constant low-level negotiation.',
    the_gift: 'Quiet integration. People who work their semi-sextiles develop unusual texture — they don\'t have one signature voice, they have a soft layered voice that comes from blending neighbouring energies. It\'s subtle and it ages well.',
    the_work: 'Notice it. Most people miss their semi-sextiles entirely because the friction is so small. The work is to actually pay attention to the small daily mismatches and let them become small daily integrations.',
    how_to_work_with_it: 'Pay attention to the small things. Where in your daily life is there a slight friction that you have been tuning out? Often, the semi-sextile is asking for a tiny daily ritual that bridges the two energies — a 5-minute pause between morning and afternoon, a small handoff between work-self and home-self. Semi-sextiles love rituals.',
    the_lesson: 'A semi-sextile teaches that wholeness is built from quiet small integrations, not just dramatic squares and oppositions. The lesson is that the chart is full of subtle work — and the small work matters.',
    myth_buster: 'A semi-sextile is not nothing. Modern astrologers often skip it; older astrologers respected it. The aspect is genuine but quiet, like a soft conversation in the next room. Don\'t need it to be loud to take it seriously.',
    shadow: 'The shadow of the semi-sextile is dismissal — assuming because the friction is small, it doesn\'t need work. Decades of unworked semi-sextiles add up to a life that never quite feels coherent.',
    pair_with: 'Small daily rituals. A short meditation between activities. The Deep Healing meditation on /healing pairs nicely — the semi-sextile responds to gentle attention, not heroic effort.',
    key_questions: [
      'What small, persistent friction in my daily life have I been tuning out?',
      'Which two neighbouring parts of myself are quietly negotiating without me noticing?',
      'What tiny ritual could bridge the gap?'
    ]
  }
]

export const ASPECT_SLUGS = ASPECTS.map((a) => a.slug)
const ASPECTS_BY_SLUG: Record<string, AspectProfile> = Object.fromEntries(
  ASPECTS.map((a) => [a.slug, a])
)

export function isAspectSlug(s: string): boolean {
  return s in ASPECTS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// type-tinted gradient (instead of element, since aspects don't map to elements):
//   hard      = fire palette (square, opposition — friction)
//   soft      = water palette (sextile, trine — flow)
//   neutral   = earth palette (conjunction — grounded fusion into self)
//   adjust    = air palette (quincunx, semi-sextile — subtle adjustment)
const TYPE_ACCENT: Record<AspectProfile['type'], { c1: string; c2: string }> = {
  hard:    { c1: '#ff8a4d', c2: '#c93a22' },
  soft:    { c1: '#6f86d6', c2: '#48499c' },
  neutral: { c1: '#a98c4f', c2: '#5e6f3a' },
  adjust:  { c1: '#7ec8e8', c2: '#4a87b9' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function aspectPageHTML(slug: string): string {
  const a = ASPECTS_BY_SLUG[slug]
  if (!a) return ''
  const accent = TYPE_ACCENT[a.type]
  const readingHref = `/gab44/reading?ref=aspect-${slug}`

  const title = `${a.name} Aspect in Astrology — Meaning, How to Work With It · gab44 ✨`
  const description = `${a.name} (${a.geometry}): ${a.meaning.substring(0, 140)}... Real evergreen guide — what it feels like, the gift, the work, the lesson, key questions. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Aspects', item: `${SITE_URL}/gab44/aspects` },
          { '@type': 'ListItem', position: 3, name: a.name, item: `${SITE_URL}/gab44/aspects/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${a.name} aspect — meaning, the gift, the work, the lesson`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/aspects/${slug}`,
        about: `${a.name} astrology aspect meaning, how to work with ${a.name}`
      }
    ]
  })

  const otherAspectsHtml = ASPECTS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const acc = TYPE_ACCENT[q.type]
    const shortName = q.name.replace(' (Inconjunct)', '')
    return `<a class="asp-mini${cur}" href="/gab44/aspects/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.symbol}</span><span class="name">${escapeHtml(shortName)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/aspects/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/aspects/${slug}" />
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
  .other-aspects { margin: 36px 0 22px; }
  .other-aspects h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .aspects-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .aspects-grid { grid-template-columns: repeat(2, 1fr); } }
  .asp-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .asp-mini:hover { border-color: var(--c1); }
  .asp-mini.current { border-color: var(--c1); border-width: 2px; }
  .asp-mini .sym { font-size: 18px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700; }
  .asp-mini .name { font-size: 11px; }
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
      <a href="/gab44/aspects">all 7 aspects</a>
      <a href="/gab44/planets">10 planets</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ astrology aspects</div>
    <h1><span class="sym">${a.symbol}</span>${escapeHtml(a.name)}</h1>
    <p class="arch">${escapeHtml(a.geometry)}</p>
    <p class="sub">${escapeHtml(a.one_liner)}</p>
    <div class="meta-strip">
      <span>type · ${escapeHtml(a.type_label)}</span>
      <span>geometry · ${escapeHtml(a.geometry.split(' — ')[0])}</span>
    </div>

    <article class="core-card">
      <span class="label">what it is</span>
      <p class="text">${escapeHtml(a.meaning)}</p>
    </article>

    <h2><span class="icon">🌟</span>what it feels like</h2>
    <p>${escapeHtml(a.what_it_feels_like)}</p>

    <div class="two-col">
      <div class="panel do">
        <h3>✓ the gift</h3>
        <p>${escapeHtml(a.the_gift)}</p>
      </div>
      <div class="panel dont">
        <h3>⚒ the work</h3>
        <p>${escapeHtml(a.the_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🛠️</span>how to work with it</h2>
    <p>${escapeHtml(a.how_to_work_with_it)}</p>

    <h2><span class="icon">📚</span>the lesson</h2>
    <p>${escapeHtml(a.the_lesson)}</p>

    <div class="myth-box">
      <h3>myth-buster</h3>
      <p style="margin:0">${escapeHtml(a.myth_buster)}</p>
    </div>

    <h2><span class="icon">🌒</span>the shadow</h2>
    <p>${escapeHtml(a.shadow)}</p>

    <div class="pair-line">
      <strong>Pair with:</strong> ${escapeHtml(a.pair_with)}
    </div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(a.key_questions[0])}</li>
        <li>${escapeHtml(a.key_questions[1])}</li>
        <li>${escapeHtml(a.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading on <em>your</em> ${escapeHtml(a.name.replace(' (Inconjunct)', ''))}s</h2>
      <p>This page describes the ${escapeHtml(a.name.replace(' (Inconjunct)', ''))} in general. A <strong>personal reading</strong> looks at <em>your</em> exact chart — which planets are in this aspect for you, what it means in your life specifically, what to work on first. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/aspects">all 7 aspects</a> · <a href="/gab44/planets">10 planets</a> · <a href="/gab44/houses">12 houses</a> · <a href="/gab44/transits">major transits</a>.
    </div>

    <section class="other-aspects">
      <h3>The 7 aspects</h3>
      <div class="aspects-grid">
        ${otherAspectsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function aspectsIndexHTML(): string {
  const cards = ASPECTS.map((a) => {
    const accent = TYPE_ACCENT[a.type]
    return `<a href="/gab44/aspects/${a.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${a.symbol}</span>
        <span class="emoji">${a.emoji}</span>
      </div>
      <div class="name">${escapeHtml(a.name)}</div>
      <div class="when">${escapeHtml(a.geometry.split(' — ')[0])} · ${escapeHtml(a.type_label)}</div>
      <div class="teaser">${escapeHtml(a.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 7 Astrology Aspects — Conjunction, Square, Trine &amp; More · gab44 ✨</title>
<meta name="description" content="A friendly map of the 7 astrology aspects: conjunction, sextile, square, trine, opposition, quincunx, semi-sextile. What each one means, how it feels, the gift, the work, the lesson. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/aspects" />
<meta property="og:title" content="The 7 Astrology Aspects — A Friendly Guide" />
<meta property="og:description" content="Conjunction, sextile, square, trine, opposition, quincunx, semi-sextile — the geometry of how planets talk to each other in your chart." />
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
      <a href="/gab44/transits">major transits</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 7 <span class="accent">aspects</span> — how planets talk to each other.</h1>
    <p class="sub">If signs are <em>how</em> a planet behaves and houses are <em>where</em>, aspects are <em>who they're talking to</em>. The geometry of the chart. The shape of your inner conversation.</p>

    <div class="intro">
      <h3>What is an aspect?</h3>
      <p><strong>An aspect is the angle between two planets in your chart.</strong> Some angles produce friction. Some produce flow. Some fuse two energies into one. Together, the aspects in your chart describe the inner geometry of who you are — the way your planets cooperate or argue or merge.</p>
      <p><strong>Soft aspects (trine 120°, sextile 60°)</strong> are the gifts — the things that come naturally, the talents you were born with. Use them or they atrophy.</p>
      <p><strong>Hard aspects (square 90°, opposition 180°)</strong> are the growth edges — the friction that builds character. Painful in the moment, defining over a lifetime.</p>
      <p><strong>The conjunction (0°)</strong> fuses two planets into one voice — your strongest, most identity-shaping placements. <strong>The quincunx (150°)</strong> and <strong>semi-sextile (30°)</strong> are the awkward, adjusting aspects — the ongoing micro-corrections.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know which aspects are running <em>your</em> chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading maps the major aspects in your chart — the gifts, the friction, the growth edge that's defining your decade. <a href="/gab44/reading?ref=aspects-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
