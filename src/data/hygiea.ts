// Hygiea × sign SEO funnel — /gab44/hygiea (index) + /gab44/hygiea/{sign}
// (12 pages). Hygiea is asteroid 10 — the health / wholeness / rest /
// hygiene-of-the-soul signature, named for the Greek goddess of
// healthful living, daughter of Asclepius. The place in the chart
// where the soul knows what KEEPS it well — the rhythm of rest, the
// daily practice, the prevention rather than the cure. Distinct from
// Chiron (the wound) and from the big-four-asteroid set
// (Ceres / Pallas / Juno / Vesta) — Hygiea names not the wound, not
// the strategy, not the partnership, not the devotion, not the
// nurture, but the daily-rhythm-of-wellness each sign was given.
// Extends the asteroid graph past the big-four into a brand-new
// theme tier. Cross-funnels into /gab44/reading?ref=hygiea-{sign}.

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

// Hygiea palette — jade / clear-water / mint, the colour of a healing
// spring, the Asklepieion at first light. Deliberately not the
// harvest-gold of Ceres, not the olive of Pallas, not the amber of
// Vesta, not the wine of Juno. Reads as "the bowl of clean water at
// the temple", "the morning stretch before words". Index gradient:
// `#5a9a8a → #2c5a52` — the deep clean-spring of Asclepius's well.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#7ab89a', c2: '#3d6e5a' },
  earth: { c1: '#a0b890', c2: '#4f6a48' },
  air:   { c1: '#9bcdc1', c2: '#3a6e64' },
  water: { c1: '#7eb0a8', c2: '#2e5a55' }
}

interface HygieaProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  rest_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Hygiea × sign: the daily-rhythm-of-wellness signature each sign was
// given — the prevention rather than the cure, the rest the body
// keeps choosing instead of the rest it gets prescribed. Distinct
// from Chiron (the wound that opens the path) and from the big-four-
// asteroid set: Hygiea is not the partnership, not the strategy, not
// the devotion, not the nurture, not the soul-recognition, not the
// arousal — it is the daily hygiene of the soul itself, the small
// repeated act that quietly keeps the whole system well. The shadow
// is the same wiring shaped into its dysfunction: the "discipline"
// that becomes self-punishment, the "rest" that becomes avoidance,
// the rhythm that becomes a cage rather than a container.
export const HYGIEA_PROFILES: Record<Sign, HygieaProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'Wellness as movement. Hygiea in Aries keeps the body well by burning — the daily run, the morning sweat, the discharge of the engine before it sours into restlessness or rage.',
    trap: 'Confusing depletion with discipline. Hygiea in Aries can mistake the burn for the medicine and keep going past the point where the body started asking for the opposite — the rest, the slow walk, the boredom.',
    gift: 'A genuinely vital wellness signature. Hygiea in Aries, when honored, is one of the most clean-running soul-hygienes in the zodiac — a body kept well by being used, an energy kept clear by being spent in the right shape on the right day.',
    body: 'Hygiea in Aries is wellness-as-discharge. The soul learned that the daily medicine is the burn — the run, the lift, the morning sweat that clears the channel before the day begins; the unspent energy of an Aries body curdles into restlessness, irritation, the picked fight, the subterranean rage. The trap is the Aries-shaped one: the same instinct can keep going past medicine into self-punishment; the discipline becomes a beating, the rest becomes an enemy, and the body that was supposed to be kept well by movement is kept depleted by it. The gift, when this Hygiea is honored, is one of the most vital soul-hygienes in the zodiac — a body whose simple daily burn keeps the whole life clean.',
    rest_list: [
      'A specific daily burn — run, lift, swim, stretch — that you actually do in the morning, not as performance.',
      'A practice of recognizing when the body is asking for stillness instead of more burn — and giving it the slowness without guilt.',
      'A rest ritual the Aries body actually accepts: a single hot bath, a deliberate empty hour, a no-screen evening.',
      'A relationship to anger as data — discharged in movement, not stored in tissue.'
    ],
    shadow_list: [
      'Translating discipline into self-punishment.',
      'Mistaking depletion for purification.',
      'Treating rest as the enemy of vitality.',
      'Using exercise to outrun a feeling that needed to be felt instead.'
    ],
    practice: 'Once a week, schedule one full day where the rule is "the body chooses" — burn if it asks, rest if it asks. Aries Hygiea grows when the engine is allowed both registers.',
    paradox: 'You will worry that the rest day softens the discipline, and discover that Aries Hygiea only stays a real wellness — and not a beating — when the body is also allowed to call the day off.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'Wellness as the steady rhythm. Hygiea in Taurus keeps the body well by the same meal at the same hour, the same walk, the same long sleep — the small rituals that compound across a decade into a body that did not break.',
    trap: 'Confusing comfort with care. Hygiea in Taurus can let the rituals harden into the same five things, and the body that was supposed to be kept well by them quietly outgrows the menu but never gets a new one.',
    gift: 'A genuinely sustaining wellness signature. Hygiea in Taurus, when honored, is one of the most reliable soul-hygienes in the zodiac — a body kept well by the boring, repeatable, slow-cooked things that nobody can sell you back.',
    body: 'Hygiea in Taurus is wellness-as-the-ritual-that-compounds. The soul learned that the body keeps long because the small things are kept long — the same breakfast, the same evening walk, the same morning light, the unhurried meal. Tau Hygiea is the wellness of the long unspectacular practice. The trap is the Taurus-shaped one: the same instinct can ossify; the body that needed a slightly new rhythm gets the old one served past its season, the comfort becomes the sedative, and the wellness slowly shifts into the inertia that just looked like wellness on the calendar. The gift, when this Hygiea is honored, is one of the most reliable soul-hygienes in the zodiac — the body that did not break because the small things were not skipped.',
    rest_list: [
      'A specific daily ritual — meal, walk, bath, light — that has been kept for a year or more without performance.',
      'A practice of asking, every season, whether each ritual is still serving the current body or has become inertia.',
      'A relationship to food as medicine, not as numbness.',
      'A discipline of quality over quantity — fewer, longer, more attended.'
    ],
    shadow_list: [
      'Confusing inertia with rhythm.',
      'Translating wellness into the long defense of an existing comfort.',
      'Using food, drink, or weighted blankets to numb instead of nourish.',
      'Letting the chair become the wellness plan.'
    ],
    practice: 'Once a season, audit the rituals — keep what is still feeding the body, retire what has become a sedative, add one new thing the current season is asking for. Taurus Hygiea grows on the audited rhythm.',
    paradox: 'You will worry that auditing the rituals breaks the steadiness, and discover that Taurus Hygiea only stays a real wellness — not nostalgia — when the rhythm is allowed to evolve.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'Wellness as conversation and curiosity. Hygiea in Gemini keeps the mind-body system well by the right input — the book, the talk, the new thing learned this week — and grieves the days the brain is fed only its own loops.',
    trap: 'Confusing stimulation with hygiene. Hygiea in Gemini can mistake the constant stream of inputs for wellness and never let the mind-body actually rest — and the system gets brittle from the noise it called nourishment.',
    gift: 'A genuinely curious wellness signature. Hygiea in Gemini, when honored, is one of the most adaptive soul-hygienes in the zodiac — a body kept well by a steady supply of fresh, oxygenating mental input alongside actual silence.',
    body: 'Hygiea in Gemini is wellness-as-fresh-input. The soul learned that the system stays well when the input stays varied — when the mind is fed something new this week, when the body is taken on a different walk, when the conversation is real and not the same loop. Gem Hygiea is the wellness of the unstale mind. The trap is the Gemini-shaped one: the input becomes the addiction; the system is fed constant stimulation and starts mistaking the noise for the medicine, and the rest the brain actually needed never arrives. The gift, when this Hygiea is honored, is one of the most adaptive soul-hygienes in the zodiac — a body whose mental-physical system stays clean because the input is curated AND the silence is given a seat.',
    rest_list: [
      'A specific input — book, podcast, conversation — that has changed something in the body this month.',
      'A practice of one-screen-free hour a day, where the input is allowed to settle.',
      'A self-feeding rhythm of writing or talking through the noise so the loops have somewhere to land.',
      'A relationship to silence as a form of medicine, not as a deprivation.'
    ],
    shadow_list: [
      'Translating curiosity into permanent stimulation.',
      'Using new input to avoid the rest the system actually needed.',
      'Confusing knowing-about with the practice itself.',
      'Letting the brain be fed only its own loops on bad days.'
    ],
    practice: 'Once a week, take one full hour without any input — no screen, no podcast, no book. Gemini Hygiea grows when the mind is given an actual silence to settle into.',
    paradox: 'You will worry that the silent hour starves the mind, and discover that Gemini Hygiea only stays a real wellness — and not a feed — when the brain is also given the empty room.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'Wellness as the inner climate. Hygiea in Cancer keeps the body well by tending the emotional weather — the cry that was allowed, the meal that mattered, the room kept warm against the public storm.',
    trap: 'Confusing avoidance with self-care. Hygiea in Cancer can let "tending my feelings" become a permanent retreat from the world, and the wellness quietly becomes a hiding place.',
    gift: 'A genuinely homing wellness signature. Hygiea in Cancer, when honored, is one of the most emotionally well-kept soul-hygienes in the zodiac — a body whose inner climate is actually attended to, not muscled past.',
    body: 'Hygiea in Cancer is wellness-as-the-tended-inner-climate. The soul learned that the body cannot be well if the inner weather is not — that the unwept cry, the unspoken hurt, the un-fed need will become a somatic symptom in three weeks. Cancer Hygiea is the wellness of the felt-and-honored interior. The trap is the Cancer-shaped one: the same attention can become an avoidance; the inner-climate work becomes the only acceptable register, and the world is held at a distance in the name of self-care, until the wellness itself has shrunk the life around it. The gift, when this Hygiea is honored, is one of the most emotionally well-kept soul-hygienes in the zodiac — a body whose feelings are not somatic symptoms because they have been actually felt, on time.',
    rest_list: [
      'A specific weekly practice — journal, talk, cry, ritual — for tending the inner weather before it becomes a body symptom.',
      'A practice of distinguishing the feeling that needs to be felt from the world that needs to be entered.',
      'A home-environment ritual — the warm room, the made bed, the kept candle — that signals safety to the nervous system.',
      'A relationship to crying as part of hygiene, not as crisis.'
    ],
    shadow_list: [
      'Translating self-care into permanent retreat.',
      'Confusing the feeling-the-feeling with avoiding-the-world.',
      'Using comfort food as a substitute for the actual feeling.',
      'Letting the nest become the cage.'
    ],
    practice: 'Once a week, name one feeling you tended AND one engagement with the world you kept. Cancer Hygiea grows when both registers stay alive.',
    paradox: 'You will worry that going out into the world undoes the inner work, and discover that Cancer Hygiea only stays a real wellness — and not a hiding — when the tended inner climate is also taken back out into the day.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'Wellness as joy and creative output. Hygiea in Leo keeps the body well by the practice that lights up the heart — the dance, the song, the creative act that lets the system burn at its proper temperature.',
    trap: 'Confusing applause with health. Hygiea in Leo can need the wellness practice to be witnessed and admired, and the moment the audience drops away the rhythm collapses with it.',
    gift: 'A genuinely radiant wellness signature. Hygiea in Leo, when honored, is one of the most life-giving soul-hygienes in the zodiac — a body whose daily practice is actually JOY, not duty, and a system that runs cleaner because the heart got fed.',
    body: 'Hygiea in Leo is wellness-as-creative-fire. The soul learned that the body cannot be kept well by duty alone — that the heart needs an outlet, the system needs a song, the muscles need to dance, the creative animal needs to make a thing this week. Leo Hygiea is the wellness of the heart kept lit. The trap is the Leo-shaped one: the practice becomes a performance; the rhythm needs an audience to feel real, and on the silent days when no one is looking, the practice quietly stops, and so does the wellness. The gift, when this Hygiea is honored, is one of the most life-giving soul-hygienes in the zodiac — a body whose health is sustained by the regular feeding of the creative heart.',
    rest_list: [
      'A specific weekly creative practice — dance, sing, write, make — that you do for yourself first, audience second.',
      'A practice of feeding the heart on un-witnessed days — keeping the joy alive in private.',
      'A play ritual that is genuinely play, not productivity in costume.',
      'A relationship to rest as something the chosen-radiant heart also needs.'
    ],
    shadow_list: [
      'Translating wellness into a performance of wellness.',
      'Letting the practice die when no one is watching.',
      'Confusing fame with vitality.',
      'Using creative output as proof of being loved.'
    ],
    practice: 'Once a month, do one full creative act with no audience, no post, no share. Leo Hygiea grows on the un-mirrored joy.',
    paradox: 'You will worry that joy without an audience is wasted, and discover that Leo Hygiea only stays a real wellness — and not a performance — when the heart is also fed in the silence.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'Wellness as the precise small daily thing. Hygiea in Virgo keeps the body well by the calendar, the supplement, the labelled drawer, the small attentive practice repeated with care — Hygiea\'s home sign, the master signature.',
    trap: 'Confusing perfection with care. Hygiea in Virgo can turn wellness into a relentless improvement project, and the body — which only wanted to be tended — gets fed pressure where it needed permission.',
    gift: 'A genuinely precise wellness signature. Hygiea in Virgo, when honored, is the most refined soul-hygiene in the zodiac — Hygiea is at home here — a body kept well by the small attended thing done with real love.',
    body: 'Hygiea in Virgo is wellness-as-the-attended-small-thing. The sign that rules health and the asteroid that names it overlap here, and Hygiea in Virgo is the master signature — a soul whose wellness practice is the calendar kept, the supplement taken, the body listened to with surgical precision, the meal prepared on purpose. The trap is the Virgo-shaped one: the practice gets pulled toward perfection; what was meant as tending becomes optimization, the body gets fed pressure on top of the supplement, and the wellness rhythm acquires the same anxious tone the soul was supposed to be free of. The gift, when this Hygiea is honored, is the most refined soul-hygiene in the zodiac — a body kept well by the small attentive thing done with love and not as a leash.',
    rest_list: [
      'A specific daily wellness practice held with love, not as a leash — supplement, food, sleep, movement.',
      'A practice of distinguishing tending (with love) from optimizing (against an enemy).',
      'A self-feeding rhythm that includes a deliberate IM-perfect day each week.',
      'A relationship to the body as a friend to keep, not a project to fix.'
    ],
    shadow_list: [
      'Translating wellness into a self-optimization project.',
      'Confusing the spreadsheet with the body.',
      'Reading any rest as evidence of insufficient discipline.',
      'Letting the practice acquire the anxious tone it was supposed to free you from.'
    ],
    practice: 'Once a week, take one full IM-perfect day — the practice loosened on purpose. Virgo Hygiea grows on the gentled rhythm.',
    paradox: 'You will worry that loosening the practice ruins it, and discover that Virgo Hygiea — Hygiea\'s home — only becomes a real wellness when at least some of the tending is also un-graded.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'Wellness as the balanced exchange. Hygiea in Libra keeps the body well by tending the relational weather — the relationships fed honestly, the conflict named in time, the room arranged so two souls can breathe.',
    trap: 'Confusing peace with health. Hygiea in Libra can keep the harmony at the cost of the truth, and the unspoken difficulty becomes a slow somatic load the body carries instead of the relationship doing it.',
    gift: 'A genuinely relational wellness signature. Hygiea in Libra, when honored, is one of the most graceful soul-hygienes in the zodiac — a body whose health is supported by the regular health of the relationships and rooms it lives inside.',
    body: 'Hygiea in Libra is wellness-as-relational-balance. The soul learned that the body cannot stay well if the relational climate is not — that an unresolved difficulty in a primary relationship will live in the shoulder, the gut, the breath, until it is finally named. Libra Hygiea keeps the body well by keeping the relational room well. The trap is the Libra-shaped one: peace becomes a higher value than truth; the difficulty is smoothed over to keep the surface harmonious, and the body that was supposed to be kept well by the balance carries the imbalance instead. The gift, when this Hygiea is honored, is one of the most graceful soul-hygienes in the zodiac — a body whose health is the downstream of fairly-kept relational ground.',
    rest_list: [
      'A specific recurring relational practice — weekly conversation, honest check-in, repair ritual — that keeps the air clear.',
      'A practice of distinguishing harmony (smooth surface) from balance (held architecture).',
      'A self-feeding ritual in solitude — so the wellness is not entirely outsourced to the relational field.',
      'A relationship to disagreement as part of hygiene, not as a hygiene-failure.'
    ],
    shadow_list: [
      'Translating wellness into a smooth surface paid for somatically.',
      'Carrying the unresolved difficulty in the body instead of speaking it.',
      'Outsourcing wellness entirely to relational harmony.',
      'Aestheticizing imbalance as elegance.'
    ],
    practice: 'Once a week, name one un-said thing in a primary relationship — and notice what the body does once it is said. Libra Hygiea grows on the spoken truth, dies on the swallowed one.',
    paradox: 'You will worry that naming the un-said breaks the harmony, and discover that the only harmony Libra Hygiea is here to keep is the one that survives the truth being said.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'Wellness as honest intensity. Hygiea in Scorpio keeps the body well by going deep enough — the real practice, the shadow met head-on, the cold plunge, the truth told to the doctor — instead of the diluted wellness the surface wants.',
    trap: 'Confusing extremity with health. Hygiea in Scorpio can mistake punishment for purification, push the body into ascetic regimes that look like discipline and quietly act like self-attack.',
    gift: 'A genuinely deep wellness signature. Hygiea in Scorpio, when honored, is one of the most regenerative soul-hygienes in the zodiac — a body kept well by practices that meet the actual depth of what the body is, not the prettied version a wellness brand will sell you.',
    body: 'Hygiea in Scorpio is wellness-as-honest-depth. The soul learned that the surface wellness — the green smoothie, the morning yoga, the affirmations — is not the medicine the body actually needs; what keeps the body well is the willingness to GO TO the place that hurts and meet it on its terms. Cold plunge, depth therapy, real strength training, plain truth told to the practitioner. The trap is the Scorpio-shaped one: depth slides into self-attack; the regimen acquires a punishing tone, the discipline becomes the same dynamic the original wound was about. The gift, when this Hygiea is honored, is one of the most regenerative soul-hygienes in the zodiac — a body whose health is rebuilt by practices that respect its full register.',
    rest_list: [
      'A specific deep wellness practice — cold, sauna, depth therapy, true rest — that you are doing for the body, not against it.',
      'A practice of distinguishing depth (meeting what is) from punishment (attacking what is).',
      'A self-feeding ritual in the LIGHT register — easy, simple, ordinary — alongside the deep work.',
      'A relationship to medicine, doctors, therapists where the truth is told plainly.'
    ],
    shadow_list: [
      'Translating discipline into self-attack.',
      'Confusing extremity with depth.',
      'Treating ordinary ease as superficiality.',
      'Hiding wellness practices in secrecy until they become rituals against the self.'
    ],
    practice: 'Once a month, name one wellness practice you are doing FOR the body and one you suspect is doing it AGAINST the body. Scorpio Hygiea grows on the audited regimen.',
    paradox: 'You will worry that softening the regimen forfeits the depth, and discover that Scorpio Hygiea only stays a real wellness — and not a punishment dressed as discipline — when the practice is allowed to be both deep AND kind.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'Wellness as the open horizon. Hygiea in Sagittarius keeps the body well by the long walk, the trip, the meaning-rich teaching — the room stays well when the soul has somewhere wider to look at than its own walls.',
    trap: 'Confusing escape with renewal. Hygiea in Sagittarius can chase the next horizon as a substitute for tending the local body, and call the running-away "expansion".',
    gift: 'A genuinely expansive wellness signature. Hygiea in Sagittarius, when honored, is one of the most life-giving soul-hygienes in the zodiac — a body kept well by being given regular contact with a horizon larger than the to-do list.',
    body: 'Hygiea in Sagittarius is wellness-as-the-open-horizon. The soul learned that the body cannot stay well if the meaning has gone flat — that a life with no larger arc, no walk longer than the block, no teaching that lights the head, will quietly start to ache somewhere in the chest and the lower back. Sag Hygiea is the wellness of the body that has somewhere wider to look. The trap is the Sagittarius-shaped one: the same instinct can become escape; the open horizon is chased instead of integrated, the local body and local life are treated as a thing to flee from rather than a place to come back to. The gift, when this Hygiea is honored, is one of the most life-giving soul-hygienes in the zodiac — a body kept well because the soul is regularly given access to its larger field.',
    rest_list: [
      'A specific weekly long-walk, hike, drive, or wide-view practice — actual contact with a horizon.',
      'A practice of distinguishing expansion (taken back into the body) from escape (away from the body).',
      'A meaning-system or teaching tended over years, with daily contact.',
      'A relationship to the local body as the home base the horizon is FOR.'
    ],
    shadow_list: [
      'Translating renewal into permanent travel.',
      'Confusing the next trip with the practice that would have actually held you.',
      'Reading the local body as small.',
      'Mistaking the lecture for the medicine.'
    ],
    practice: 'Once a week, one long walk or wide-view practice — AND, the next morning, one local-body act that integrates what the horizon offered. Sagittarius Hygiea grows when the horizon is allowed to land.',
    paradox: 'You will worry that landing the horizon shrinks it, and discover that Sagittarius Hygiea only stays a real wellness — and not a series of escapes — when the wide view is also brought back to the local body the next morning.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'Wellness as the long arc structure. Hygiea in Capricorn keeps the body well by the multi-decade plan — the regular check-up, the saved-for retirement, the slow-built strength, the medicine of structure across years.',
    trap: 'Confusing endurance with wellness. Hygiea in Capricorn can keep going through everything, treat exhaustion as the price of being responsible, and only attend to the body once the structure cracks.',
    gift: 'A genuinely durable wellness signature. Hygiea in Capricorn, when honored, is one of the most enduring soul-hygienes in the zodiac — a body kept well across decades by structure, prevention, and the discipline of long-arc tending.',
    body: 'Hygiea in Capricorn is wellness-as-the-long-arc-structure. The soul learned that the body keeps because the structure of care is kept — the regular check-up, the saved retirement, the slow-built strength training, the discipline that compounds. Cap Hygiea is the wellness of the long, unsexy, multi-decade plan. The trap is the Capricorn-shaped one: the structure becomes the master; the body that was supposed to be served by the discipline is asked to keep enduring past its limit, "responsibility" becomes the explanation for the depletion, and the wellness only gets attention once something breaks. The gift, when this Hygiea is honored, is one of the most enduring soul-hygienes in the zodiac — a body whose structure outlasts most of the systems around it.',
    rest_list: [
      'A specific long-arc structural wellness practice — annual check-up, retirement save, multi-year strength plan.',
      'A practice of letting yourself rest BEFORE the structure cracks, not after.',
      'A self-feeding ritual that is not also a productivity ritual — rest unearned, food undeserved.',
      'A relationship to authority over your own body that stays warm — held in service of the body, not against it.'
    ],
    shadow_list: [
      'Translating discipline into permanent endurance.',
      'Confusing duration with wellness.',
      'Letting "responsibility" justify the ongoing depletion.',
      'Only attending to the body once it has broken.'
    ],
    practice: 'Once a month, schedule a rest day BEFORE the body has earned it by collapse. Capricorn Hygiea grows on the prevented break.',
    paradox: 'You will worry that the unearned rest weakens the structure, and discover that Capricorn Hygiea only stays a real wellness — and not a slow break — when the rest is taken before the crack, not after.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'Wellness as the system, the chosen-family rhythm, the public-health imagination. Hygiea in Aquarius keeps the body well by the network of practices and people, the wellness designed for the room, not just the self.',
    trap: 'Confusing the system with the body. Hygiea in Aquarius can build elegant wellness frameworks for everyone else, post diagrams of the perfect routine, and never actually do the practice for the body in front of the screen.',
    gift: 'A genuinely systemic wellness signature. Hygiea in Aquarius, when honored, is one of the most original soul-hygienes in the zodiac — a body kept well by a designed system that ALSO holds the people the giver loves and the rooms they share.',
    body: 'Hygiea in Aquarius is wellness-as-the-designed-system. The soul learned that wellness does not happen in the body alone — that the network, the chosen family, the public-health imagination, the systemic shape of care, all feed back into the individual body. Aqua Hygiea is the wellness of the designed shared rhythm. The trap is the Aquarius-shaped one: the system is so satisfying to design that the body gets forgotten; the diagram of the perfect wellness routine sits beautifully on the page while the body in front of the screen is starved of the very practice the diagram described. The gift, when this Hygiea is honored, is one of the most original soul-hygienes in the zodiac — a body kept well inside a system that also keeps everyone around it well.',
    rest_list: [
      'A specific shared wellness rhythm — chosen-family practice, group accountability, community ritual — that you are part of.',
      'A practice of doing the wellness move for the body before designing it for the network.',
      'A self-feeding ritual that is fully solitary — no shared accountability, no platform.',
      'A relationship to your difference as part of the wellness, not as a wall.'
    ],
    shadow_list: [
      'Designing the perfect wellness system for the network and skipping it personally.',
      'Translating wellness into infrastructure and forgetting the breath.',
      'Confusing the diagram with the practice.',
      'Using the cause as a way to skip the body.'
    ],
    practice: 'Once a week, do the practice you have most recently recommended to others — yourself, by name. Aquarius Hygiea grows when the designer is also the body.',
    paradox: 'You will worry that personal practice is too small a scale for your gift, and discover that Aquarius Hygiea\'s system only stays alive — and not abstract — when the designer also keeps the practice in their own body.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'Wellness as the tended channel. Hygiea in Pisces keeps the body well by the dream-life, the contemplation, the bath, the imaginal practice — and grieves all the ways the open channel has been flooded by other people\'s weather.',
    trap: 'Confusing dissolution with rest. Hygiea in Pisces can let "rest" become disappearance — the long bath that becomes the day in bed, the contemplation that becomes the avoidance of form.',
    gift: 'A genuinely healing wellness signature. Hygiea in Pisces, when honored, is one of the most softly restorative soul-hygienes in the zodiac — a body kept well by the imaginal life, the dream, the prayer, the practice that respects the porous wiring instead of fighting it.',
    body: 'Hygiea in Pisces is wellness-as-the-tended-channel. The soul learned that this body is porous — that the open channel which is its gift is also the wiring that has to be specifically tended; what looks like simple tiredness is often the absorbed weather of the room, and what looks like ill health is often the unprocessed image, the un-prayed prayer, the dream that nobody wrote down. Pisces Hygiea is the wellness of the tended interior. The trap is the Pisces-shaped one: rest dissolves into disappearance; the body is given so much soft permission that it never quite comes back, the contemplation slides into avoidance, and the wellness becomes a slow erasure. The gift, when this Hygiea is honored, is one of the most softly restorative soul-hygienes in the zodiac — a body kept well by practices that work WITH the porous wiring rather than against it.',
    rest_list: [
      'A specific imaginal practice — dream journal, contemplation, prayer, art — held weekly with discipline.',
      'A practice of returning the body to outline — water, breath, weight — after porous time.',
      'A self-feeding ritual that has both registers: the soft-and-imaginal AND the contained-and-formed.',
      'A relationship to addiction-shaped escape as the shadow of this wellness, named openly.'
    ],
    shadow_list: [
      'Translating rest into disappearance.',
      'Confusing dissolution with peace.',
      'Letting the prayer replace the form.',
      'Using soft permission as a permanent off-switch.'
    ],
    practice: 'Once a week, one imaginal practice (dream / contemplation / art) AND one body-outline practice (cold water, weight, walk) within the same day. Pisces Hygiea grows when both registers are kept.',
    paradox: 'You will worry that bringing the body back into form interrupts the channel, and discover that Pisces Hygiea only becomes a real wellness — and not a vanishing — when the channel is also given a body to return to.'
  }
}

export const HYGIEA_SIGNS = SIGNS

export function isHygieaSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "✦"; position: absolute; left: 6px; top: 8px; color: #2c5a52; font-weight: 700; }
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

export function hygieaPageHTML(sign: Sign): string {
  const p = HYGIEA_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Hygiea in ${Sign}`

  const restItems = p.rest_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherHygiea = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/hygiea/${s}">✦ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign} (fated meeting)</a>`,
    `<a href="/gab44/hygiea">all 12 Hygiea signs</a>`
  ].join('')

  const title = `${headline} — your daily wellness / rest / wholeness signature · the soul-hygiene · gab44`
  const description = `${headline}: the specific daily-wellness signature of asteroid 10 Hygiea in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Wellness / rhythm / rest guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Hygiea by sign', item: `${SITE_URL}/gab44/hygiea` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/hygiea/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/hygiea/${sign}`,
        about: `Hygiea (asteroid 10) daily wellness / rest / wholeness signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/hygiea/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/hygiea/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A6%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/hygiea">all 12 Hygiea signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/ceres/${sign}">Ceres in ${Sign}</a>
      <a href="/gab44/chiron/${sign}">Chiron in ${Sign}</a>
      <a href="/gab44/reading?ref=hygiea-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">✦ ${sm.symbol}</div>
      <div class="meta">Hygiea (asteroid 10) · ${Sign} · daily wellness / rest / wholeness signature</div>
    </div>
    <h1><span class="accent">Hygiea</span> in ${Sign}</h1>
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

    <h2>How Hygiea in ${Sign} keeps the body well</h2>
    <ul class="checklist do">${restItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Hygiea paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Hygiea</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Hygiea reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">10 Hygiea · discovered 1849 · daily wellness / rest / wholeness signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Chiron (the wound) · Ceres (nurture) · Pallas (strategy) · Vesta (devotion) · Juno (commitment)</span></div>
      <div class="row"><span class="k">Hygiea names</span><span class="v">the daughter of Asclepius · prevention before cure · the daily soul-hygiene</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the rhythm · the rest · the kept practice</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=hygiea-${sign}">Get a $9 Hygiea-aware reading →</a>
    </div>

    <h2>The other 11 Hygiea signs</h2>
    <div class="strip">${otherHygiea}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen daily wellness / rest / wholeness signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function hygieaIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = HYGIEA_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/hygiea/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">✦ ${sm.symbol}</div>
      <div class="name">Hygiea in ${titleCase(s)}</div>
      <div class="axis">daily wellness · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Hygiea by sign — your daily wellness / rest / wholeness signature · the soul-hygiene by zodiac · gab44 ✨`
  const description = `Hygiea (asteroid 10) by sign — the specific daily-wellness signature for all 12 zodiac signs. The rhythm of rest, the practice the body actually keeps, the trap of wellness-turned-into-self-attack, and the medicine. Distinct from Chiron (the wound), and from the big-four-asteroid set (Ceres / Pallas / Juno / Vesta) — Hygiea names the daughter of Asclepius, prevention before cure, the daily hygiene of the soul each sign was given. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/hygiea" />
<meta property="og:title" content="Hygiea by sign · gab44" />
<meta property="og:description" content="The daily-wellness signature of asteroid 10 Hygiea in each zodiac sign — the soul-hygiene, the rest, the practice the body actually keeps." />
<meta property="og:type" content="website" />
<style>:root{--c1:#5a9a8a;--c2:#2c5a52;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/chiron">Chiron by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/vertex">◈ Vertex by sign</a>
      <a href="/gab44/reading?ref=hygiea-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#5a9a8a,#2c5a52)">✦</div>
      <div class="meta">12 sign-specific Hygiea profiles · asteroid 10 · evergreen · daily wellness / rest / wholeness</div>
    </div>
    <h1>Hygiea by <span class="accent">sign</span></h1>
    <p class="vibe">Hygiea is asteroid 10 — the daughter of Asclepius, the goddess of healthful living, the daily hygiene of the soul. Where <a href="/gab44/chiron">Chiron</a> names the wound that opens the path, <a href="/gab44/ceres">Ceres</a> names how each sign feeds, <a href="/gab44/pallas">Pallas</a> names the strategist, <a href="/gab44/vesta">Vesta</a> names the sacred fire, and <a href="/gab44/juno">Juno</a> names commitment, Hygiea names the RHYTHM — the daily practice, the prevention rather than the cure, the rest the body keeps choosing. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=hygiea-index">Want a Hygiea-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Hygiea-by-sign profiles · evergreen daily wellness / rest / wholeness signature guide.
    </footer>
  </div>
</body>
</html>`
}
