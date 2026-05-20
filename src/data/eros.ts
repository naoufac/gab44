// Eros × sign SEO funnel — /gab44/eros (index) + /gab44/eros/{sign}
// (12 pages). Eros is asteroid 433 — the specific signature of arousal,
// erotic charge, what turns you on at a wiring level. Distinct from
// Venus (what you love, what you value) and Mars (drive, will). Eros
// names what makes the body lean in. Targets the "eros in {sign}",
// "eros sign meaning", "what is your eros sign", "{sign} eros sexual"
// search clusters — relational/adult shadow audience for the existing
// Lilith and Chiron asteroid surfaces. Cross-funnels into
// /gab44/reading?ref=eros-{sign}.

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
  fire:  { c1: '#ff7a8a', c2: '#c93a52' },
  earth: { c1: '#c98a6f', c2: '#7a5a3a' },
  air:   { c1: '#d6a4ff', c2: '#7a4ac9' },
  water: { c1: '#9d6fff', c2: '#48389c' }
}

interface ErosProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  desire_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Eros × sign: the specific erotic signature of each sign. What lights
// the body up, what turns the head, what is irresistible — and the
// shadow-shape that same wiring takes when it goes wrong.
export const EROS_PROFILES: Record<Sign, ErosProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The chase is the charge. Eros in Aries is wired for pursuit, urgency, and the specific heat of being wanted right now.',
    trap: 'Mistaking the chase for the relationship. Going cold the moment the chase ends — and reading the cooling as a sign the connection was wrong.',
    gift: 'A clean, embodied yes. When Eros in Aries is met, no part of the body is faking it — the desire is loud, immediate, unambiguous, and rare.',
    body: 'Eros in Aries is the most kinetic Eros in the zodiac. The arousal lives in pursuit, in being met by someone who can hold the heat without flinching, in the specific intelligence of a body that wants and knows it. The trap is the Aries-shaped one: the spark and the relationship are not the same fuel, and Eros in Aries can confuse the dimming of the chase with the dimming of love. The gift, when this Eros is owned, is one of the most coveted erotic signatures — directness without performance, an instant, full-body yes that can also say full-body no, and a partner who will take the heat seriously rather than treat it as a mood.',
    desire_list: [
      'Being wanted urgently — the desire that will not pretend it is calm.',
      'Initiation. Aries Eros is electrified by the partner who lets it begin, and electrified again when the partner takes a turn beginning.',
      'Friction with respect — heat that is not afraid of the fight that comes after.',
      'Newness, in its hands or its head — first time, first place, first time in this configuration.'
    ],
    shadow_list: [
      'Going cold the second the chase resolves into a relationship.',
      'Confusing the rage of frustration with the heat of attraction.',
      'Picking the unavailable partner because availability dims the spark.',
      'Treating sexual heat as a trophy rather than a conversation.'
    ],
    practice: 'Once a week, name out loud one thing you want and one thing you do not want — sexually, romantically, or otherwise. Aries Eros stays alive on direct speech, dies on suppression.',
    paradox: 'You will worry that the heat will fade, and discover that direct, ongoing desire — voiced — is the only thing that keeps Eros in Aries actually burning.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The body comes first. Eros in Taurus is wired for slow build, for skin, scent, taste, the specific intelligence of the senses.',
    trap: 'Outsourcing arousal to comfort. Letting the routine of bodies-in-bed replace the practice of bodies-actually-paying-attention.',
    gift: 'An embodied erotic presence that is rare — Eros in Taurus, fully landed, is the partner who can be in the body for an hour without checking out, narrating, or rushing.',
    body: 'Eros in Taurus is the most somatic Eros in the zodiac. The arousal is built brick by brick — touch, scent, the specific weight of a body, the slow domestication of a hunger that refuses to be performed. The trap is the Taurus-shaped one: arousal that should be revisited can ossify into routine, and the body that knew how to come alive starts auto-piloting through the same five moves. The gift, when this Eros is met, is one of the most generous erotic signatures — partners with Eros in Taurus do not abandon the body for the head, and a long love with this Eros is one of the few erotic configurations that gets richer, not thinner, with time.',
    desire_list: [
      'Slowness. The kiss that takes its time before it asks the next question.',
      'Sensory specificity — the right fabric, the right scent, the right hour of light.',
      'A partner who will eat well, sleep well, and arrive with a body that has been cared for.',
      'Touch as the primary language — long before, during, and long after.'
    ],
    shadow_list: [
      'Treating sexual routine as intimacy when it has become avoidance.',
      'Withholding desire as a form of slow control.',
      'Eating, drinking, or numbing instead of meeting an erotic ask.',
      'Confusing security with desire — and being shocked when the body objects.'
    ],
    practice: 'Once a week, give the body 30 deliberate minutes — bath, oil, music, the deliberate undressing of an autopilot. Taurus Eros stays alive on devoted attention to the senses.',
    paradox: 'You will worry that domesticated love kills desire, and discover that domesticated love with deliberate sensory attention is the only love that lets desire deepen.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The brain is the first erogenous zone. Eros in Gemini is wired for words, banter, anticipation, the specific heat of a mind that wants yours.',
    trap: 'Talking around desire instead of through it. Letting the cleverness become the ceiling — flirting forever and never landing in the body.',
    gift: 'An erotic intelligence that updates. Eros in Gemini, when met, is the rare partner whose desire keeps reading the actual body in front of it, not last week\'s body or fantasy\'s body.',
    body: 'Eros in Gemini is the most cerebral Eros in the zodiac. The arousal builds through the back-and-forth — the message that is not quite innocent, the half-finished sentence the other person finishes, the conversation that turns sideways and then drops the floor out. The trap is the Gemini-shaped one: clever flirting can stay clever forever, and the body the words are pointing at can wait years to be acknowledged. The gift, when this Eros is owned, is unmatched: an erotic conversation that does not bore itself, a partner who can both build the charge in language and let the language go silent at the right moment, and a desire that grows more interesting, not less, the longer it is paid attention to.',
    desire_list: [
      'A partner who can hold a long, charged conversation — and notice when it has become a substitute for touch.',
      'Variety, novelty, the willingness to try the next thing in language before the body.',
      'Anticipation. The text mid-day that lands at 9pm exactly as written.',
      'Two people who are curious about the same question at the same hour.'
    ],
    shadow_list: [
      'Flirting up to the line and never crossing — and calling that intimacy.',
      'Splitting attention between three people because focus feels like a cage.',
      'Talking the desire away — analyzing the heat until it is a footnote.',
      'Mistaking restless boredom for misalignment, and leaving before the body has spoken.'
    ],
    practice: 'Once a week, deliberately stop talking five minutes earlier than your body wants to. Gemini Eros stays alive when the words make room for the silence the body needs.',
    paradox: 'You will worry that the mind ruins the body, and discover that the mind, used carefully, is the only mind that can build the body into something more than reflex.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'Emotional safety unlocks the gate. Eros in Cancer is wired so the body needs to feel held before it lets itself be wanted.',
    trap: 'Mistaking absence-of-threat for desire. Settling into a love that is safe but not actually hot — and resenting both the safety and the absence of heat.',
    gift: 'The most tender erotic intelligence in the zodiac. Eros in Cancer, when met, brings a body that feels every room temperature change and a partner who will not pretend they did not.',
    body: 'Eros in Cancer is the most relational Eros in the zodiac. The arousal does not arrive on demand — it arrives once the room feels safe, the partner feels chosen, and the body is no longer scanning for the exit. The trap is the Cancer-shaped one: this Eros can ossify safety into a soft cage, and the body that was supposed to feel held starts feeling sealed in. The gift, when this Eros is met by a partner who can hold both the sensitivity and the heat, is one of the most loyal erotic signatures — desire that deepens with trust rather than thinning with familiarity, and an emotional channel between two bodies that does not need words.',
    desire_list: [
      'A partner who will not punish you for the day you are not in the mood.',
      'Privacy. The body that tells the truth in private dies a little in public-eye performance.',
      'Tenderness as the on-ramp — long before the heat arrives.',
      'Continuity. Eros in Cancer wants the same partner over weeks, not the same partner over an hour.'
    ],
    shadow_list: [
      'Withholding sex when the real ask is for emotional repair.',
      'Reading absence-of-rejection as desire.',
      'Letting the partner become a parent — and losing the heat in the process.',
      'Punishing the partner for not reading a mood you did not name.'
    ],
    practice: 'Once a week, name one feeling out loud before any sexual ask. Cancer Eros stays alive when the emotional channel is open, dies fast in unspoken weather.',
    paradox: 'You will worry that needing safety makes you less sexy, and discover that the safety, when it is real, is the very thing that makes the body able to come fully online.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'Being seen is the charge. Eros in Leo is wired for the ritual, the spotlight, the partner who looks at you like you are the only one in the room.',
    trap: 'Trading the ritual of being-seen for performance. Reading every flat moment as a withdrawal of love — and turning the bedroom into a stage.',
    gift: 'A generous, full-throated erotic presence. Eros in Leo, when met, is the partner who can be the lover, the audience, and the celebrant all at once.',
    body: 'Eros in Leo is the most theatrical Eros in the zodiac — and that is meant in the best way. The arousal builds when the partner shows up: the eye contact that does not flinch, the slow undressing that takes itself seriously, the way you are looked at when you walk into the room. The trap is the Leo-shaped one: when the seen-ness is not landing, this Eros can over-perform to compensate, and the bedroom turns into a stage where one person is auditioning and the other is grading. The gift, when this Eros is met, is unmatched warmth — a lover who treats your body like a celebration and rebuilds your confidence as a side effect of wanting you.',
    desire_list: [
      'A partner who looks at you with full attention and does not reach for the phone.',
      'Ritual. Eros in Leo wants the moment marked — the candle, the meal, the choice to make the night different.',
      'Praise that lands — specific, bodily, said out loud.',
      'A body that is allowed to take its time being looked at, undressed, met.'
    ],
    shadow_list: [
      'Reading any pause in attention as withdrawal of love.',
      'Performing in bed instead of arriving in bed.',
      'Picking partners who flatter rather than partners who actually see.',
      'Treating sex as a confirmation that you are still desirable, rather than as a meeting.'
    ],
    practice: 'Once a week, ask for one specific thing you want to hear. Leo Eros stays alive when praise is asked for and given, dies in unsaid hunger.',
    paradox: 'You will worry that wanting to be adored makes you needy, and discover that wanting to be adored is the most honest erotic ask in the zodiac — and that the right partner gives it without flinching.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'Devotion is the language. Eros in Virgo is wired for precision, care, service, and the specific heat of a partner who pays attention to the details.',
    trap: 'Translating Eros into a checklist. Letting the standard get so high that no actual body, including yours, can land in the heat.',
    gift: 'The most attentive lover in the zodiac. Eros in Virgo, when met, is the partner whose desire shows up as devotion — and whose devotion does not flatten into duty.',
    body: 'Eros in Virgo is the most precise Eros in the zodiac. The arousal builds through the small, careful things — the exact way a hand is placed, the partner who remembers the specific thing your body asked for last week, the love that shows up as attention to the details rather than performance. The trap is the Virgo-shaped one: this Eros has a critical eye, and turned inward it becomes a body that cannot stop watching itself, turned outward it becomes a partner who never quite measures up. The gift, when this Eros is owned, is one of the most devoted erotic signatures — a love that improves itself, a sex that updates itself, and a partner whose attention is the very form of their desire.',
    desire_list: [
      'A partner who pays attention — the small ask remembered, the big ask honored.',
      'Cleanliness, ritual, the choice to make the body and the room ready.',
      'Mutual improvement. Eros in Virgo wants a sex that gets better, not a sex that stays comfortable.',
      'Service that flows both ways — devotion offered and devotion received.'
    ],
    shadow_list: [
      'Watching yourself in bed instead of being in your body.',
      'Critiquing the partner mid-act — out loud or in your head — and killing the heat.',
      'Holding standards so high that no real body lands.',
      'Translating sexual desire into a service-task, and resenting the partner for not noticing the difference.'
    ],
    practice: 'Once a week, deliberately do one thing imperfectly in bed — and stay. Virgo Eros stays alive when imperfection is allowed, dies in the unending audit.',
    paradox: 'You will worry that wanting precision is unromantic, and discover that precision, offered without judgment, is one of the most generous erotic gifts there is.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'Aesthetic and balance are the doorway. Eros in Libra is wired for beauty, mirroring, mutual exchange — and the specific heat of two equals.',
    trap: 'Performing the partnership for the partnership\'s aesthetic. Choosing the relationship that looks right over the relationship that feels right.',
    gift: 'The most relationally-elegant Eros in the zodiac. Eros in Libra, when met, brings a partner who knows how to make the encounter feel like art and still be deeply embodied.',
    body: 'Eros in Libra is the most aesthetic Eros in the zodiac. The arousal builds through the right setting, the right balance of tension, the partner whose beauty — visual, emotional, conversational — is part of the heat. The trap is the Libra-shaped one: this Eros can choose the relationship that photographs well over the relationship that feels well, and the partner-as-aesthetic-object replaces the partner-as-actual-other. The gift, when this Eros is met, is one of the most generous erotic configurations — a love that knows how to court and keep courting, a sex that takes the trouble to be beautiful, and an erotic equality that does not collapse into power-play.',
    desire_list: [
      'A partner who courts. The flowers, the planned night, the deliberate gesture.',
      'Aesthetic — light, sheets, scent, the room that is not an afterthought.',
      'Mutual exchange. Eros in Libra is allergic to one-sided takings.',
      'Conversation, charm, foreplay that begins at lunch and ends at midnight.'
    ],
    shadow_list: [
      'Choosing the partner who looks right over the partner whose body actually wants yours.',
      'Avoiding sexual conflict so successfully that the heat dies.',
      'Using charm to bypass the harder ask.',
      'Treating the partnership as the deliverable and the partner as a tool.'
    ],
    practice: 'Once a week, name one thing you want that breaks the aesthetic — the unflattering ask, the unbeautiful truth. Libra Eros stays alive when the truth is allowed, even when it interrupts the picture.',
    paradox: 'You will worry that wanting things beautiful is shallow, and discover that the beauty, used to host the truth rather than hide from it, is exactly the medicine the world is short of.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'Depth is the charge. Eros in Scorpio is wired for the merger that does not stay polite — power, secrecy, transformation, the abyss two bodies can become.',
    trap: 'Mistaking intensity for love. Choosing the obsession that ruins you because the obsession at least feels real.',
    gift: 'The most transformative Eros in the zodiac. Eros in Scorpio, when met, is the rare partner who can hold both the sex and the soul-load it carries — and not blink.',
    body: 'Eros in Scorpio is the most intense Eros in the zodiac. The arousal does not arrive in casual heat — it arrives when the partner is willing to go past the polite layer of themselves and yours, to let the encounter actually change them. The trap is the Scorpio-shaped one: this Eros can confuse intensity with intimacy, and an obsession that feels enormously real can be a structural disaster. The gift, when this Eros is met by a partner who can hold the depth without fleeing or feeding, is one of the most rare erotic signatures — a sex that is also a transformation, a partner who knows you in a way nobody else does, and a faithfulness that is not duty but recognition.',
    desire_list: [
      'A partner who is not afraid of your depth — and not addicted to it either.',
      'Privacy. Scorpio Eros guards the inner door, and shares it only with the chosen.',
      'Power that flows in both directions — and the conversations to handle it.',
      'Transformation. The encounter that changes one or both of you, and is honored as such.'
    ],
    shadow_list: [
      'Confusing obsession with love.',
      'Punishing the partner with silence when the trust has been broken.',
      'Refusing intimacy after closeness, as a control move.',
      'Going underground for months and reading the underground as devotion.'
    ],
    practice: 'Once a week, name one truth about your erotic life that you have been keeping from your partner — and decide whether to share it or carry it consciously. Scorpio Eros stays alive when the inner door is named, dies in the silent vault.',
    paradox: 'You will worry that wanting depth is too much for any partner, and discover that the right partner does not flinch — and that the wrong partner mistaking intensity for love is what burned you, not the depth itself.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'Freedom and meaning are the charge. Eros in Sagittarius is wired for the journey, the open road, the partner who is part of an arc, not a cage.',
    trap: 'Mistaking the new for the alive. Burning every relationship at month nine because month nine is when settling-in feels like settling.',
    gift: 'The most adventurous Eros in the zodiac. Eros in Sagittarius, when met, is a love that keeps growing — a sex that is part of a life-mission, not a domestic afterthought.',
    body: 'Eros in Sagittarius is the most expansive Eros in the zodiac. The arousal builds through movement, novelty, the sense that the partner is going somewhere and is willing to take you with them. The trap is the Sagittarius-shaped one: this Eros can read settling-in as suffocation, and the relationship that survives novelty is the one that gets thrown away. The gift, when this Eros is owned, is unmatched — a long love that does not get smaller, a sex that is part of a life-mission rather than a side-quest, and a partner whose horizon you genuinely want to travel toward.',
    desire_list: [
      'A partner whose life is its own life — and whose horizon is interesting to yours.',
      'Travel, movement, the new place that wakes the body up.',
      'Meaning. Eros in Sagittarius wants the sex to be part of something bigger than the sex.',
      'Honesty. A truth-telling that does not flinch, even when it costs the comfort.'
    ],
    shadow_list: [
      'Leaving at month nine because month nine feels like a small room.',
      'Mistaking restless boredom for misalignment.',
      'Generalizing one bad week into a verdict on the partnership.',
      'Talking about the meaning of love instead of inhabiting one.'
    ],
    practice: 'Once a week, deliberately stay in one place — physically, emotionally, sexually — and watch what arrives that the move would have prevented. Sagittarius Eros stays alive when the staying is chosen, dies in the reflexive next-flight.',
    paradox: 'You will worry that staying small kills your wildness, and discover that wild-and-rooted is the only configuration that does not burn out by month nine.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The slow burn is the charge. Eros in Capricorn is wired for restraint, mastery, the years-long crush that finally lands — and lands deep.',
    trap: 'Translating Eros into achievement. Letting the relationship become another box to win, and losing the body in the project of the partnership.',
    gift: 'The most enduring Eros in the zodiac. Eros in Capricorn, when met, brings a love that gets better with time — and a sexual mastery that grows, not fades, across decades.',
    body: 'Eros in Capricorn is the most disciplined Eros in the zodiac. The arousal does not arrive in fireworks — it arrives in the slow build of trust, the partner who is willing to take the years required, the specific heat of a body that has decided to stay. The trap is the Capricorn-shaped one: this Eros can convert love into a series of accomplishments, and the relationship turns into a project where each partner is grading the other on milestones. The gift, when this Eros is met, is one of the most rare erotic signatures — a sex that improves over decades, a love that does not need novelty to stay alive, and a partner whose presence is the very thing that lets the body finally relax into desire.',
    desire_list: [
      'A partner who is willing to take time. Capricorn Eros does not give itself to the impatient.',
      'Mastery. The lover who has worked at being a lover, not just at being attractive.',
      'Reliability. The body unlocks when it knows the partner will be there next week.',
      'Quiet ritual. Eros in Capricorn is built on the unphotographed, repeated, devoted things.'
    ],
    shadow_list: [
      'Withholding desire to keep the upper hand.',
      'Translating love into duty, then resenting the duty.',
      'Choosing the partner who is impressive over the partner who is actually warm.',
      'Letting the body wait for "after the goal" — and the goal never arrives.'
    ],
    practice: 'Once a week, do one thing in bed that has no purpose, no metric, no goal. Capricorn Eros stays alive when the body is given the room to be useless and beloved.',
    paradox: 'You will worry that the slow burn means low heat, and discover that the slow burn, properly tended, is the only fire still warm at year twenty.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The friend-first charge. Eros in Aquarius is wired for mind-meets-mind, the unconventional partnership, the Eros that lives outside the script.',
    trap: 'Defaulting to detachment as a self-protection. Reading every closeness as a threat to autonomy — and pre-emptively cooling.',
    gift: 'The most original Eros in the zodiac. Eros in Aquarius, when met, builds a relationship nobody else could have predicted — and a sexual configuration that is genuinely the partners\', not the script\'s.',
    body: 'Eros in Aquarius is the most unconventional Eros in the zodiac. The arousal builds through the friendship, the shared mission, the sense that the partner is also a fellow-traveler in the larger life. The trap is the Aquarius-shaped one: this Eros can intellectualize away from the body when closeness gets uncomfortable, and a relationship that started warm can become a long, polite distance. The gift, when this Eros is owned, is unmatched — a partnership built to the actual shape of the partners, a sex that is not borrowed from the culture, and a freedom that does not require absence.',
    desire_list: [
      'A partner who is also a friend — and a peer in the larger work.',
      'Space. The relationship that allows separate hours, separate rooms, separate threads.',
      'Originality. Eros in Aquarius is bored by the script and electrified by the partner who throws the script away.',
      'Conversation that changes you — politics, ideas, the future.'
    ],
    shadow_list: [
      'Detaching the moment closeness lands.',
      'Mistaking emotional distance for autonomy.',
      'Choosing the unconventional configuration to avoid the harder ask of intimacy.',
      'Translating love into utility — what does this partner do for the mission?'
    ],
    practice: 'Once a week, deliberately stay in the room when the conversation gets emotional. Aquarius Eros stays alive when the head learns to stay close to the body the head loves.',
    paradox: 'You will worry that closeness will erase you, and discover that close-and-not-erased is the very thing your partnership was built to demonstrate to itself and the world.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'Dissolution is the charge. Eros in Pisces is wired for the merger that becomes mystical, fantasy that becomes flesh, the sex that becomes prayer.',
    trap: 'Drowning in the fantasy of the partner instead of meeting the actual partner. Loving the projection so well that the real person can never catch up.',
    gift: 'The most transcendent Eros in the zodiac. Eros in Pisces, when met by someone who can hold both the merger and the literal, brings a love that touches the holy.',
    body: 'Eros in Pisces is the most dissolving Eros in the zodiac. The arousal builds through the surrender, the partner who is willing to lose their edges with you, the sense that the encounter is also a small spiritual event. The trap is the Pisces-shaped one: this Eros can fall in love with the projection, with what the partner could be, with the romance of the romance — and miss the actual person standing in the room. The gift, when this Eros is met by a partner who can hold the literal as well as the mystical, is one of the most rare erotic signatures — a sex that is also a contemplation, a tenderness that does not need a script, and a love that does not flinch at the parts of the partner that nobody else has seen.',
    desire_list: [
      'A partner willing to dissolve the edges and not run.',
      'Music, water, candlelight — the elements that ease the boundary down.',
      'Imagination. Eros in Pisces wants fantasy named, played with, honored.',
      'The merger that does not lose either of you on the other side.'
    ],
    shadow_list: [
      'Loving the fantasy of the partner more than the partner.',
      'Merging so completely that you cannot tell whose feelings you are feeling.',
      'Numbing erotic disappointment with substances or the next romance.',
      'Treating sex as escape from a life you have not yet built.'
    ],
    practice: 'Once a week, name one literal thing about your partner — a fact, not a feeling — before the fantasy starts. Pisces Eros stays alive when the literal anchors the mystical, dies in pure projection.',
    paradox: 'You will worry that wanting the merger is too much for the world, and discover that the merger, anchored in the literal partner in front of you, is exactly what the world has gone numb without.'
  }
}

export const EROS_SIGNS = SIGNS

export function isErosSign(s: string): s is Sign {
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
  .checklist { list-style: none; padding: 0; margin: 6px 0 14px; }
  .checklist li { padding: 8px 0 8px 28px; position: relative; font-size: 15px; line-height: 1.55; border-bottom: 1px solid var(--line); }
  .checklist li:last-child { border-bottom: 0; }
  .checklist.do li::before { content: "✦"; position: absolute; left: 6px; top: 8px; color: #c93a52; font-weight: 700; }
  .checklist.dont li::before { content: "✗"; position: absolute; left: 6px; top: 8px; color: #5a564e; font-weight: 700; }
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

export function erosPageHTML(sign: Sign): string {
  const p = EROS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Eros in ${Sign}`

  const desireItems = p.desire_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherEros = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/eros/${s}">⚭ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/mars-${sign}">♂ Mars in ${Sign}</a>`,
    `<a href="/gab44/twin-flames/${sign}">∞ Twin flame for ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/eros">all 12 Eros signs</a>`
  ].join('')

  const title = `${headline} — your erotic signature · what turns you on, what to watch · gab44`
  const description = `${headline}: the specific erotic signature of asteroid 433 Eros in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Adult-relational shadow guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Eros by sign', item: `${SITE_URL}/gab44/eros` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/eros/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/eros/${sign}`,
        about: `Eros (asteroid 433) erotic signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/eros/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/eros/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%AD%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/eros">all 12 Eros signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/lilith/${sign}">Lilith in ${Sign}</a>
      <a href="/gab44/reading?ref=eros-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚭ ${sm.symbol}</div>
      <div class="meta">Eros (asteroid 433) · ${Sign} · erotic signature · adult/relational</div>
    </div>
    <h1><span class="accent">Eros</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.oneLine)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>The trap</h3>
        <p>${escapeHtml(p.trap)}</p>
      </div>
      <div class="panel">
        <h3>The gift</h3>
        <p>${escapeHtml(p.gift)}</p>
      </div>
    </div>

    <h2>What turns Eros in ${Sign} on</h2>
    <ul class="checklist do">${desireItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Eros paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Eros</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Eros reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">433 Eros · discovered 1898 · sexual signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Venus (love/values) · Mars (drive/will)</span></div>
      <div class="row"><span class="k">Eros names</span><span class="v">arousal · the specific charge · what makes you irresistible</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the wiring of desire · the shadow · the medicine</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=eros-${sign}">Get a $9 Eros-aware reading →</a>
    </div>

    <h2>The other 11 Eros signs</h2>
    <div class="strip">${otherEros}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen erotic-signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function erosIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = EROS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/eros/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚭ ${sm.symbol}</div>
      <div class="name">Eros in ${titleCase(s)}</div>
      <div class="axis">erotic signature · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Eros by sign — your erotic signature · what turns you on by zodiac · gab44 ✨`
  const description = `Eros (asteroid 433) by sign — the specific erotic signature for all 12 zodiac signs. What turns you on at a wiring level, what to watch in the shadow, the single discipline that keeps your desire alive. Distinct from Venus (love) and Mars (drive). Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/eros" />
<meta property="og:title" content="Eros by sign · gab44" />
<meta property="og:description" content="The erotic signature of asteroid 433 Eros in each zodiac sign — what turns you on at a wiring level." />
<meta property="og:type" content="website" />
<style>:root{--c1:#c93a52;--c2:#7a4ac9;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/chiron">Chiron by sign</a>
      <a href="/gab44/twin-flames">twin flames</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=eros-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#c93a52,#7a4ac9)">⚭</div>
      <div class="meta">12 sign-specific Eros profiles · asteroid 433 · evergreen · adult/relational</div>
    </div>
    <h1>Eros by <span class="accent">sign</span></h1>
    <p class="vibe">Eros is asteroid 433 — the specific signature of arousal, the wiring of what turns you on. Not Venus, which names what you love and what you value. Not Mars, which names your will and your drive. Eros names the charge: what makes the body lean in, what makes the head turn, what makes a person irresistible to you specifically. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=eros-index">Want an Eros-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Eros-by-sign profiles · evergreen erotic-signature guide.
    </footer>
  </div>
</body>
</html>`
}
