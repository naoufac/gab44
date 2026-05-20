// Ceres × sign SEO funnel — /gab44/ceres (index) + /gab44/ceres/{sign}
// (12 pages). Ceres is asteroid 1 — the nurture / nourishment / grief
// signature, the great mother Demeter. The place in the chart where
// the soul learned how to FEED — and how it grieves when feeding is
// taken from it. Distinct from Vesta (sacred-fire devotion), from the
// relational asteroids Eros / Psyche / Juno, and from Pallas
// (strategy). Ceres is the harvest mother — what you actually keep
// alive by feeding it, and the loss-shaped wound underneath the
// feeding. Closes the big-four-asteroid set
// (Ceres / Pallas / Juno / Vesta) for the gab44 funnel.
// Cross-funnels into /gab44/reading?ref=ceres-{sign}.

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

// Ceres palette — harvest gold / wheat / hearth-earth, the colour of
// the threshing floor at the late-summer light. Deliberately not the
// olive/sage of Pallas, not the amber-rust of Vesta, not the wine of
// Juno, not the moon of Psyche, not the pink of Eros. Reads as "the
// barn at gleaning", "the bowl set down on a wooden table". Index
// gradient: `#b88748 → #6e4322` — the deep harvest-loam of Demeter's
// fields.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#d4954e', c2: '#7e4a1c' },
  earth: { c1: '#c8a875', c2: '#705022' },
  air:   { c1: '#dcc18a', c2: '#806233' },
  water: { c1: '#b59067', c2: '#5d3a1a' }
}

interface CeresProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  feed_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Ceres × sign: the nourishment-and-grief signature each sign was
// given. Distinct from Vesta's sacred-fire (Vesta keeps a flame for
// no audience; Ceres feeds a body across a season) and distinct from
// the relational asteroids: Ceres is not partnership but sustenance —
// the mother Demeter, the harvest, the bowl, the loss when the
// daughter is taken. Each per-sign profile names the specific shape
// of feeding that soul knows how to do, AND the specific
// loss-shaped wound the feeding circles. Both belong to Ceres — the
// shadow shape of nurture-turned-into-its-dysfunction (smother /
// over-give / use food as control / refuse to be fed / withhold to
// punish absence) is the same wiring as the gift, on a colder day.
export const CERES_PROFILES: Record<Sign, CeresProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The mother of the first courage. Ceres in Aries feeds by giving permission — to start, to want, to take up room — and grieves the loss of anyone whose first move was never witnessed or allowed.',
    trap: 'Confusing impatience with care. Ceres in Aries can feed too fast and too sharply, push the daughter to take her own first move before the daughter is ready, and call urgency a form of love when it is mostly its own restlessness.',
    gift: 'A genuinely activating nurture. Ceres in Aries, when met, is one of the most galvanizing care-bearers in the zodiac — a soul whose feeding pours courage, permission, and forward motion straight into the body of whoever is being fed.',
    body: 'Ceres in Aries is nurture-as-courage. The soul learned, somewhere in the early field, that the most loving thing it could offer was the permission to begin — to take up room, to want plainly, to make the first move. Feeding for this Ceres is not about a slow-cooked stew; it is about handing the spear over and saying, "your turn now". The trap is the Aries-shaped one: the same heat that makes the permission real can rush the timing; the courage offered can land before the body receiving it has built the floor to stand on. The gift, when this Ceres is honored, is one of the most activating nurtures in the zodiac — a soul whose presence feeds the courage of everyone in the room. The grief shape underneath: the rooms in which YOUR own first move was never quite witnessed — the fire-child whose initiating energy was named "too much".',
    feed_list: [
      'A specific person you have fed, this season, by giving them permission to begin — not advice, not a plan, just permission.',
      'A practice of pacing the activation to the body of the one being fed, not to the speed of your own restlessness.',
      'A self-feeding ritual that gives YOUR first-move courage somewhere to land — naming, weekly, a small thing you actually started.',
      'A relationship to anger as one of the foods you carry, not as a contaminant.'
    ],
    shadow_list: [
      'Translating impatience into a form of care.',
      'Pushing the daughter to take a first move before she has the floor.',
      'Reading slowness in others as a personal rejection.',
      'Withholding feeding until the receiver is "ready enough" by Aries pace.'
    ],
    practice: 'Once a week, name one person you fed by giving them permission — and one moment you over-rushed the giving. Aries Ceres grows when the activation also has a stewing time.',
    paradox: 'You will worry that pacing the giving dilutes the fire, and discover that Aries Ceres only stays a real nurture — and not just a push — when the courage offered is allowed to land at the receiver\'s tempo, not the giver\'s.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The mother of the body and the table. Ceres in Taurus feeds with the slow, sensory, grounded thing — the meal, the warm cloth, the steady house — and grieves the loss of safety, the disrupted ground, the bowl pulled out from under.',
    trap: 'Confusing comfort with care. Ceres in Taurus can let the feeding harden into the same ritual served past its season — feeding the daughter sweetness when the daughter has outgrown sweetness and now needs to be sent into her own field.',
    gift: 'A genuinely embodied nurture. Ceres in Taurus, when met, is one of the most reliably nourishing care-bearers in the zodiac — a soul whose feeding shows up as actual food, actual warmth, actual ground that can be stood on without flinching.',
    body: 'Ceres in Taurus is nurture-as-the-body-and-the-table. The soul learned that the foundational feeding is the sensory, somatic, slow one — the meal that smells like a real meal, the cloth that warms, the chair that holds, the room that has been the same room long enough that the body can finally let go. The trap is the Taurus-shaped one: the same instinct that makes the comfort real can keep the comfort going past its season; the daughter who needs to be sent into her own difficult field is fed sweetness instead, and the love becomes the sedative. The gift, when this Ceres is honored, is one of the most reliably nourishing care-bearers in the zodiac — a soul whose feeding builds the actual physical floor under another life. The grief shape underneath: the disrupted ground in your own early field — the home that moved, the body that was not always safe, the bowl pulled out from under.',
    feed_list: [
      'A specific weekly act of physical feeding — meal, ritual, slow shared time — given without performance.',
      'A practice of asking, each season, whether the comfort being offered is still in service of growth or has become its own destination.',
      'A self-feeding rhythm that returns you to your own body — touch, food, sleep, weight.',
      'A relationship to money and material as part of the feeding stack, not in opposition to it.'
    ],
    shadow_list: [
      'Translating comfort into the long sedation of someone who needs to be sent.',
      'Reading change in the receiver as betrayal of the table.',
      'Confusing "I always cook" with "I always nourish".',
      'Letting the meal become the only language of love.'
    ],
    practice: 'Once a season, name one feeding ritual that has stayed past its expiry — and one new feeding that the current season actually wants. Taurus Ceres grows when the table is allowed to change.',
    paradox: 'You will worry that changing the menu betrays the love, and discover that Taurus Ceres\'s gift stays nourishment — and not nostalgia — only when the table is also allowed to be re-set, season by season.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The mother of words and bridges. Ceres in Gemini feeds with the right sentence at the right moment — the question, the language for what nobody has named yet — and grieves the silences in which someone she loved was never given the words for what was happening to them.',
    trap: 'Confusing information with nourishment. Ceres in Gemini can keep handing over articles, podcasts, links, sentences, when what the body in front of her actually needs is to be held without a single explanatory word.',
    gift: 'A genuinely articulating nurture. Ceres in Gemini, when met, is one of the most freeing care-bearers in the zodiac — a soul whose feeding gives someone the language for an experience they had been carrying without words and who is suddenly recognized inside the sentence.',
    body: 'Ceres in Gemini is nurture-as-the-named-thing. The soul learned, somewhere early, that one of the most freeing acts of care is the act of putting an experience into language — the sentence that says, "this is what is actually happening", the question that finally lets the receiver feel found. Feeding for this Ceres is the right phrase, the curious witness, the bridge between the inner thing and a word for it. The trap is the Gemini-shaped one: language can become a deflection from contact; when the body in front of you is in real distress, the most sophisticated articulation can land as a wall, and the daughter ends up alone with another excellent sentence. The gift, when this Ceres is honored, is one of the most freeing nurtures in the zodiac — a soul whose words actually nourish. The grief shape underneath: the silences in your own field — the experiences nobody named for you, the years before someone gave you the sentence.',
    feed_list: [
      'A specific person you have fed this season by giving them language for what was happening to them.',
      'A practice of choosing, in real time, between offering a sentence and offering a silence.',
      'A self-feeding ritual that puts YOUR own current experience into your own words — journaling, voice memo, letter.',
      'A relationship to study as a way of making the next nourishing sentence available.'
    ],
    shadow_list: [
      'Translating discomfort with feeling into a flood of words.',
      'Sending links instead of being present.',
      'Mistaking the cleverness of the formulation for the depth of the contact.',
      'Letting the bridge of language become a way to never cross.'
    ],
    practice: 'Once a week, log one moment you fed someone with words — and one moment when not-speaking was the actual food. Gemini Ceres grows when both registers are kept alive.',
    paradox: 'You will worry that withholding the sentence withholds the love, and discover that Gemini Ceres only becomes a real nurture — and not a tutorial — when silence is also allowed to be one of the dishes served.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The mother at the inner gate. Ceres in Cancer feeds with the deeply felt, deeply sensed thing — the lap, the rocked-room, the meal that arrives the moment the hunger does — and grieves the homes that were never quite home.',
    trap: 'Confusing fusion with feeding. Ceres in Cancer can bind by feeding — make the love so intimate, so attuned, so total, that the receiver loses their own outline inside it, and the giver loses hers into the receiving.',
    gift: 'A genuinely homing nurture. Ceres in Cancer, when met, is one of the most deeply nourishing care-bearers in the zodiac — a soul whose feeding builds the actual emotional inside-of-a-home where another life can finally rest.',
    body: 'Ceres in Cancer is nurture-as-the-inside-of-a-home. The soul learned that the feeding it carries is the kind that builds, around another body, the whole atmosphere of having-arrived: the lap, the rocked-room, the meal exactly when, the not-having-to-explain. Cancer Ceres feeds at the precise temperature of intimacy. The trap is the Cancer-shaped one: the attunement is so deep that boundaries dissolve; the giver and the receiver fuse, and the love that was meant to make a home becomes a single room neither person can leave without it feeling like betrayal. The gift, when this Ceres is honored, is one of the most homing nurtures in the zodiac — a soul whose presence is, for the people she loves, what the word "home" actually means. The grief shape underneath: the homes in your own early field that were not quite homes — the moods you had to track, the tenderness that came with conditions.',
    feed_list: [
      'A specific home — relational, domestic, or chosen — that you have actually made for someone, and the way it has held them.',
      'A practice of holding intimacy WITH boundary — the closeness that does not ask the other to lose their outline.',
      'A self-feeding ritual that comes from a different source than the people you are mothering — solitude, lineage, your own body of water.',
      'A relationship to your own moods as data, not as the family weather.'
    ],
    shadow_list: [
      'Translating attunement into fusion.',
      'Reading any boundary the receiver draws as rejection.',
      'Feeding others to avoid the dishevelment of feeding yourself.',
      'Making the inside-of-the-home so total that the exit becomes traumatic.'
    ],
    practice: 'Once a week, name one moment you held intimacy without dissolving outline — and one moment you fused. Cancer Ceres grows when both are seen and the room is allowed to have a door.',
    paradox: 'You will worry that putting a door in the room weakens the home, and discover that Cancer Ceres\'s home only stays a home — and not a held breath — when the receiver is also free to walk out and back in again.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The mother who makes you feel chosen. Ceres in Leo feeds by witnessing — by seeing the soul of the daughter and naming her as significant — and grieves the rooms in which she herself was never quite the chosen one.',
    trap: 'Confusing visibility with care. Ceres in Leo can need the feeding to be seen — by the receiver, by the room, by herself — and the moment the love stops being mirrored back, the feeding can dim into withdrawal.',
    gift: 'A genuinely consecrating nurture. Ceres in Leo, when met, is one of the most empowering care-bearers in the zodiac — a soul whose feeding actually consecrates the receiver, names them as worthy, and lets them carry that naming as a structural belief about themselves for the rest of their life.',
    body: 'Ceres in Leo is nurture-as-consecration. The soul learned that one of the most powerful kinds of feeding is the act of looking at another being, recognizing the soul in there, and naming that soul as worthy — not generically, but specifically: "I see exactly what you are, and you are wanted". The trap is the Leo-shaped one: the giving has an audience-shape; the soul can begin needing the love it gives to be reflected back as its own significance, and when the mirror stops, the feeding stops with it. The gift, when this Ceres is honored, is one of the most empowering nurtures in the zodiac — a soul whose witnessing builds, in the receiver, a permanent inner sense of being chosen. The grief shape underneath: the rooms in which you were not the chosen one — the unwitnessed performances, the love that was conditional on being impressive.',
    feed_list: [
      'A specific person you have consecrated this year — named, in front of them, as exactly who they are and worthy of being it.',
      'A practice of giving the witnessing without measuring its return — feeding even when the mirror is silent.',
      'A self-feeding ritual that is YOUR own consecration of yourself — without an audience, without a stage.',
      'A relationship to praise as a confirmation, not a fuel.'
    ],
    shadow_list: [
      'Translating love into performance and waiting for applause.',
      'Reading lack of acknowledgment as proof of being unloved.',
      'Withdrawing the feeding the moment the spotlight moves.',
      'Confusing visibility of the gift with its reality.'
    ],
    practice: 'Once a month, consecrate someone in plain language — and notice if you needed it returned. Leo Ceres grows on the un-mirrored gift.',
    paradox: 'You will worry that giving without the mirror diminishes you, and discover that Leo Ceres\'s gift only stays a real consecration — and not a transaction — when it is also made on days the room is silent.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'The mother who tends the small thing. Ceres in Virgo feeds with the precise, attended, useful gesture — the right tea, the right tool, the calendar she keeps in her head — and grieves all the small unattended details that quietly killed the things she loved.',
    trap: 'Confusing service with love. Ceres in Virgo can feed by fixing, optimizing, correcting — and the daughter can grow up never knowing she was loved as a whole being, only as a problem her mother was kind enough to keep solving.',
    gift: 'A genuinely competent nurture. Ceres in Virgo, when met, is one of the most usefully nourishing care-bearers in the zodiac — a soul whose feeding shows up as the small, correct, attended gesture that actually keeps another life functioning.',
    body: 'Ceres in Virgo is nurture-as-the-small-precise-thing. The soul learned that one of the most reliable forms of love is the attentive small gesture — the right tea at the right moment, the calendar quietly held, the tool prepared, the discomfort named before it became a crisis. Feeding for this Ceres is granular and useful. The trap is the Virgo-shaped one: the same attention can flatten the receiver into a problem to be solved; the daughter is loved through corrections, and the underneath-message becomes "you are loved when you are improving". The gift, when this Ceres is honored, is one of the most usefully nourishing care-bearers in the zodiac — a soul whose tending actually keeps lives running. The grief shape underneath: the unattended small details in your own early field that quietly broke things you loved — and the love you only ever received in the form of being fixed.',
    feed_list: [
      'A specific small useful gesture you have given recently that actually changed someone\'s day.',
      'A practice of feeding without correcting — staying in the receiver\'s frame for a whole interaction.',
      'A self-feeding ritual where the discipline is loosened — the body fed without first being optimized.',
      'A relationship to imperfection as a form of presence, not as evidence of failure.'
    ],
    shadow_list: [
      'Translating love into the language of correction.',
      'Reading rest in the receiver as proof of insufficient discipline.',
      'Feeding others to avoid the dishevelment of being fed yourself.',
      'Confusing usefulness with worth.'
    ],
    practice: 'Once a week, give one act of care WITHOUT a correction inside it — pure presence, no fix. Virgo Ceres grows on the un-edited gift.',
    paradox: 'You will worry that giving without fixing fails the receiver, and discover that Virgo Ceres only becomes a real nurture — and not a project manager — when at least some of the feeding lands without the receiver having to also be improved.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'The mother of the shared table. Ceres in Libra feeds by making the room fair, the exchange honest, the meal a meeting of equals — and grieves the relationships in which one side was always carrying more than the other.',
    trap: 'Confusing harmony with feeding. Ceres in Libra can feed by smoothing — apologizing, mediating, absorbing imbalance — and the daughter can be fed a peace that was never honest, only convenient.',
    gift: 'A genuinely relational nurture. Ceres in Libra, when met, is one of the most graceful care-bearers in the zodiac — a soul whose feeding builds rooms in which two real people can meet without one of them having to disappear for the meeting to happen.',
    body: 'Ceres in Libra is nurture-as-the-fair-table. The soul learned that one of the deepest forms of feeding is the construction of an honest shared room — a meal where both sides show up real, a relationship where the giving is met with receiving, an exchange where one person\'s personhood does not have to shrink for the other\'s to be served. The trap is the Libra-shaped one: the same instinct that builds the fair table can begin paying the bill of fairness alone; the giver smooths, mediates, apologizes, and the harmony becomes a debt only she carries. The gift, when this Ceres is honored, is one of the most graceful nurtures in the zodiac — a soul whose feeding teaches the receiver what real reciprocity actually feels like. The grief shape underneath: the early relationships in which you were always the one carrying the balance, the peace, the smoothness — and never quite met as a whole self.',
    feed_list: [
      'A specific relationship in which you have insisted, this season, on real reciprocity — and stayed with the discomfort of insisting.',
      'A practice of distinguishing harmony (smooth surface) from fairness (held architecture).',
      'A self-feeding ritual where you receive without first earning the receiving.',
      'A relationship to disagreement as part of the feeding, not as the death of it.'
    ],
    shadow_list: [
      'Translating fairness into "I will carry the imbalance".',
      'Reading conflict as failure of the relational craft.',
      'Smoothing the room at the cost of telling the receiver the truth.',
      'Confusing being needed with being met.'
    ],
    practice: 'Once a season, name one relationship where you have stopped carrying the imbalance — and how the relationship actually responded. Libra Ceres grows on the held line.',
    paradox: 'You will worry that holding the line breaks the harmony, and discover that the only harmony Libra Ceres is here to feed is the kind that survives one side stopping the over-carry.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'The mother who can feed in the dark. Ceres in Scorpio feeds with what the surface refuses — grief, rage, longing, sex, the unvarnished truth — and grieves the years in which her own underground was met with denial.',
    trap: 'Confusing intensity with care. Ceres in Scorpio can feed only at the depth she finds interesting — grief and rage and naked truth — and starve the simple light a daughter also needs in order to grow without scars.',
    gift: 'A genuinely unflinching nurture. Ceres in Scorpio, when met, is one of the most necessary care-bearers in the zodiac — a soul whose feeding meets the receiver in the places no other care can reach: the grief, the truth, the body in extremis, the fact nobody else will name.',
    body: 'Ceres in Scorpio is nurture-as-meeting-the-underground. The soul learned that one of the most life-saving forms of feeding is the willingness to meet what other people refuse to look at — to feed the rage someone is not allowed to have, to sit with the grief everyone is hurrying past, to tell the truth that will burn through the polite room. The trap is the Scorpio-shaped one: the giver can begin offering depth only in its dark register; the daughter is fed in storm but starved in calm; ordinary light gets read as superficial and goes untended. The gift, when this Ceres is honored, is one of the most unflinching nurtures in the zodiac — a soul whose feeding is the company that does not flinch at the receiver\'s actual condition. The grief shape underneath: the years in which your own underground was met with denial — the rage, the grief, the truth nobody would witness with you.',
    feed_list: [
      'A specific person you have fed by going to the place no one else would meet them — grief, rage, naked truth, body in crisis.',
      'A practice of also feeding in the daylight register — joy, ease, the small ordinary thing.',
      'A self-feeding ritual that lets your own underground be met by something other than your own work.',
      'A relationship to truth-telling that uses the truth to free, not to control.'
    ],
    shadow_list: [
      'Confusing storm with depth.',
      'Reading ease as superficiality and starving it.',
      'Translating love into permanent crisis-response.',
      'Using the truth as a leash.'
    ],
    practice: 'Once a month, give one act of feeding that is purely light — easy, simple, not shadow-work. Scorpio Ceres grows when both registers are kept alive.',
    paradox: 'You will worry that the light-register feeding is shallow, and discover that Scorpio Ceres only becomes a real nurture — and not a permanent intensive-care unit — when the daughter is also fed on ordinary days.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The mother of the open field. Ceres in Sagittarius feeds by giving permission to leave — for the larger world, for the long teaching, for the meaning the daughter cannot find inside the kitchen — and grieves the souls she watched stay too small for fear of leaving.',
    trap: 'Confusing freedom with care. Ceres in Sagittarius can feed by always sending — push the daughter into the larger world before she has roots, and miss that one of the foods is also the kitchen she was supposed to come back to.',
    gift: 'A genuinely expansive nurture. Ceres in Sagittarius, when met, is one of the most widening care-bearers in the zodiac — a soul whose feeding hands the receiver an actual horizon, a meaning, a sense that the world is wider than the room they grew up in.',
    body: 'Ceres in Sagittarius is nurture-as-permission-to-leave. The soul learned that one of the truest forms of feeding is the gift of a horizon — to point at the larger world, the wider meaning, the teaching that will not be available inside the small room, and to release the daughter into it without guilt. The trap is the Sagittarius-shaped one: the same instinct can over-send; the giver becomes restless herself and translates her restlessness as care, pushing the receiver out before the receiver has any base to come back to, and the kitchen quietly closes. The gift, when this Ceres is honored, is one of the most widening nurtures in the zodiac — a soul whose blessing actually unlocks the larger-arc life of the receiver. The grief shape underneath: the souls in your own early field who stayed too small for fear of leaving — and the kitchen that was never quite the home base you would have liked it to be.',
    feed_list: [
      'A specific person you have fed by giving them permission to leave for a larger field — and a way the kitchen stayed warm for them to come back.',
      'A practice of distinguishing your own restlessness from the receiver\'s actual readiness to be sent.',
      'A self-feeding ritual that includes a base — a place, a body, a relationship — you yourself return to.',
      'A relationship to teaching as a form of feeding — the meaning passed on, not just the meal.'
    ],
    shadow_list: [
      'Translating restlessness into a recommendation that the daughter leave.',
      'Closing the kitchen the moment she leaves.',
      'Confusing the size of the horizon with the depth of the love.',
      'Mistaking the lecture for the meal.'
    ],
    practice: 'Once a season, name one person you sent — and one way the home was kept warm for return. Sagittarius Ceres grows on the door that opens AND the door that lets back in.',
    paradox: 'You will worry that holding a kitchen open shrinks the horizon, and discover that Sagittarius Ceres\'s gift only widens the receiver — and does not just scatter her — when the same hand that releases also keeps a door warm.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The mother of structure and provision. Ceres in Capricorn feeds with the long-arc thing — the roof, the school fees, the multi-decade plan — and grieves all the years she carried the structure alone for the lives she loved.',
    trap: 'Confusing provision with love. Ceres in Capricorn can let the feeding ossify into the bills paid and the duties met, and the daughter can grow up never having seen the giver soft, only seen the giver competent.',
    gift: 'A genuinely structural nurture. Ceres in Capricorn, when met, is one of the most enduring care-bearers in the zodiac — a soul whose feeding shows up as the roof under which an entire life can be built, the long provision that does not blink under pressure.',
    body: 'Ceres in Capricorn is nurture-as-the-load-bearing-wall. The soul learned that one of the deepest acts of feeding is the long, unsexy, multi-decade provision — the roof that stays up, the rent that gets paid, the plan that does not fall apart when the romantic feeling cools. Cap Ceres feeds with structure. The trap is the Capricorn-shaped one: the structure can replace the softness; the giver carries the whole architecture and never quite lets the receiver see her need anything in return, and the daughter learns to mirror — provision instead of presence, duty instead of contact. The gift, when this Ceres is honored, is one of the most enduring nurtures in the zodiac — a soul whose feeding makes lives possible that, without her load-bearing, would not have been. The grief shape underneath: the years you carried the structure of other people\'s lives without ever being asked how YOU were inside the carrying.',
    feed_list: [
      'A specific structural provision you have made — financial, logistical, multi-year — that someone\'s life is currently built on.',
      'A practice of letting the receiver SEE the giver soft — tired, needing, undefended — at least sometimes.',
      'A self-feeding ritual that is not also a productivity ritual — rest that is not earned, food that is not deserved.',
      'A relationship to authority that stays warm — held in service of the people, not as a costume.'
    ],
    shadow_list: [
      'Translating love into the bills paid.',
      'Refusing to let the receiver witness the cost.',
      'Confusing duration of provision with depth of contact.',
      'Letting structure substitute for presence.'
    ],
    practice: 'Once a season, let one person see you soft — tired, needing, undefended — and notice what they actually feed you in return. Capricorn Ceres grows on the witnessed cost.',
    paradox: 'You will worry that being seen soft undermines the structure, and discover that Capricorn Ceres\'s structure only stays a true home — and not a fortress — when the people inside it are also allowed to witness the load on the wall.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The mother who feeds the network. Ceres in Aquarius feeds at scale — the chosen family, the movement, the room of strangers given a structure of care — and grieves the small ordinary intimacy she sometimes traded to keep the larger field fed.',
    trap: 'Confusing the system with the soul. Ceres in Aquarius can feed the cause and forget the daughter; the network gets nurtured beautifully and the specific person in front of the giver gets fed last and least.',
    gift: 'A genuinely systemic nurture. Ceres in Aquarius, when met, is one of the most original care-bearers in the zodiac — a soul whose feeding extends past the individual into the chosen family, the movement, the network of souls who are now somebody\'s family because she made the room.',
    body: 'Ceres in Aquarius is nurture-as-the-built-network. The soul learned that feeding does not end at the kitchen door — that there is a whole class of nourishment which only happens at scale, in the room she designed for the unwanted, the chosen-family table, the movement she fed across years. The trap is the Aquarius-shaped one: the system is so satisfying to feed that the specific person can fall through; the daughter is loved abstractly, in principle, and not actually in the morning. The gift, when this Ceres is honored, is one of the most original nurtures in the zodiac — a soul whose feeding builds the chosen-family architecture inside which other people can finally rest. The grief shape underneath: the small ordinary intimacy you sometimes traded to keep the larger field fed — the daughter who got the principle but not always the breakfast.',
    feed_list: [
      'A specific network, chosen family, or community structure you feed — and the way it actually holds people.',
      'A practice of also feeding the closest person specifically, daily, by name.',
      'A self-feeding ritual that is not networked — solitude, body, an hour offline.',
      'A relationship to your own difference as a kind of food you bring to the table — not as a wall.'
    ],
    shadow_list: [
      'Feeding the abstraction while the specific person waits.',
      'Translating love into infrastructure and forgetting the breakfast.',
      'Confusing breadth of care with depth of contact.',
      'Using the cause as a way to never have to be intimate.'
    ],
    practice: 'Once a week, name how you fed the network AND name how you fed the closest person, by name. Aquarius Ceres grows when both stay alive.',
    paradox: 'You will worry that feeding the small intimate thing shrinks the network, and discover that Aquarius Ceres\'s movement only stays nourishing — and not abstract — when the closest person is also fed by name.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The mother who feels the field. Ceres in Pisces feeds with attunement, with prayer, with the unspoken thing — knowing what someone needs before they have words for needing it — and grieves the absorbed pain of everyone she has ever loved.',
    trap: 'Confusing dissolving with care. Ceres in Pisces can feed by losing her own outline, take on the receiver\'s weather as her own, and end up unable to tell where her hunger ends and the receiver\'s begins.',
    gift: 'A genuinely empathic nurture. Ceres in Pisces, when met, is one of the most healing care-bearers in the zodiac — a soul whose feeding answers the unspoken need, the prayer the receiver did not know they were praying, with a kind of feeding that is mostly presence shaped exactly to the wound.',
    body: 'Ceres in Pisces is nurture-as-attunement-to-the-unspoken. The soul learned that some forms of feeding never make it into language at all — the right hand on the right shoulder at the right minute, the prayer said quietly across a distance, the knowing of what someone needs before they have a name for needing it. Pisces Ceres feeds in the imaginal, in the energetic, in the not-quite-said. The trap is the Pisces-shaped one: the boundary between giver and receiver dissolves; the giver takes on the wound as her own, the feeding becomes a slow self-erasure, and the daughter is fed by a mother who is increasingly not there. The gift, when this Ceres is honored, is one of the most healing nurtures in the zodiac — a soul whose feeding lands in places no other care reaches. The grief shape underneath: the years of absorbing the pain of everyone you loved — the field-feeling that became a sponge, the prayers nobody else thought to say.',
    feed_list: [
      'A specific person you fed by sensing the unspoken need — and a way you stayed yourself through the giving.',
      'A practice of asking, in real time, "is this my feeling, or am I tracking someone else\'s?"',
      'A self-feeding ritual that returns you to your own outline — water, art, devotion, something that is YOURS.',
      'A relationship to prayer or contemplative practice as part of the feeding stack, not as a substitute for the body.'
    ],
    shadow_list: [
      'Translating empathy into self-erasure.',
      'Absorbing the receiver\'s wound as your own.',
      'Mistaking the dissolution of self for the depth of love.',
      'Letting the prayer replace the meal.'
    ],
    practice: 'Once a week, name one moment you sensed an unspoken need and fed it — AND one moment you stayed yourself through the giving. Pisces Ceres grows when both are kept alive.',
    paradox: 'You will worry that staying yourself dilutes the empathy, and discover that Pisces Ceres only becomes a real nurture — and not a vanishing — when the giver is also held inside the giving.'
  }
}

export const CERES_SIGNS = SIGNS

export function isCeresSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "⚳"; position: absolute; left: 6px; top: 8px; color: #7e4a1c; font-weight: 700; }
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

export function ceresPageHTML(sign: Sign): string {
  const p = CERES_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Ceres in ${Sign}`

  const feedItems = p.feed_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherCeres = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/ceres/${s}">⚳ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/ceres">all 12 Ceres signs</a>`
  ].join('')

  const title = `${headline} — your nurture / nourishment / grief signature · the harvest mother · gab44`
  const description = `${headline}: the specific nurture-and-grief signature of asteroid 1 Ceres in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Nurture / nourishment guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Ceres by sign', item: `${SITE_URL}/gab44/ceres` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/ceres/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/ceres/${sign}`,
        about: `Ceres (asteroid 1) nurture / nourishment / grief signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/ceres/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/ceres/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B3%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/ceres">all 12 Ceres signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/pallas/${sign}">Pallas in ${Sign}</a>
      <a href="/gab44/vesta/${sign}">Vesta in ${Sign}</a>
      <a href="/gab44/reading?ref=ceres-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚳ ${sm.symbol}</div>
      <div class="meta">Ceres (asteroid 1) · ${Sign} · nurture / nourishment / grief signature</div>
    </div>
    <h1><span class="accent">Ceres</span> in ${Sign}</h1>
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

    <h2>How Ceres in ${Sign} feeds</h2>
    <ul class="checklist do">${feedItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Ceres paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Ceres</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Ceres reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">1 Ceres · discovered 1801 · nurture / nourishment / grief signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Eros (arousal) · Psyche (recognition) · Juno (commitment) · Vesta (devotion) · Pallas (strategy)</span></div>
      <div class="row"><span class="k">Ceres names</span><span class="v">the harvest mother · the bowl · the loss-shaped wound</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the feeding · the trap · the grief</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=ceres-${sign}">Get a $9 Ceres-aware reading →</a>
    </div>

    <h2>The other 11 Ceres signs</h2>
    <div class="strip">${otherCeres}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen nurture / nourishment / grief signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function ceresIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = CERES_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/ceres/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚳ ${sm.symbol}</div>
      <div class="name">Ceres in ${titleCase(s)}</div>
      <div class="axis">harvest feeding · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Ceres by sign — your nurture / nourishment / grief signature · the harvest mother by zodiac · gab44 ✨`
  const description = `Ceres (asteroid 1) by sign — the specific nurture-and-grief signature for all 12 zodiac signs. The shape of feeding each sign was given, the trap of nurture-turned-its-shadow, the loss-wound underneath, and the medicine. Distinct from the relational asteroids (Eros, Psyche, Juno), the devotion-asteroid Vesta, and the strategy-asteroid Pallas — Ceres names the harvest mother, the bowl, how each sign actually feeds the lives it loves. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/ceres" />
<meta property="og:title" content="Ceres by sign · gab44" />
<meta property="og:description" content="The nurture-and-grief signature of asteroid 1 Ceres in each zodiac sign — the harvest mother, the bowl, the feeding each sign was given." />
<meta property="og:type" content="website" />
<style>:root{--c1:#b88748;--c2:#6e4322;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=ceres-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#b88748,#6e4322)">⚳</div>
      <div class="meta">12 sign-specific Ceres profiles · asteroid 1 · evergreen · nurture / nourishment / grief</div>
    </div>
    <h1>Ceres by <span class="accent">sign</span></h1>
    <p class="vibe">Ceres is asteroid 1 — Demeter, the harvest mother of the zodiac, the bowl. Where <a href="/gab44/eros">Eros</a> names arousal, <a href="/gab44/psyche">Psyche</a> names soul-recognition, <a href="/gab44/juno">Juno</a> names commitment, <a href="/gab44/vesta">Vesta</a> names sacred-fire devotion, and <a href="/gab44/pallas">Pallas</a> names elegant strategy, Ceres names the FEEDING — the specific shape of nurture each sign was given, and the loss-shaped grief that lives underneath the giving. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=ceres-index">Want a Ceres-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Ceres-by-sign profiles · evergreen nurture / nourishment / grief signature guide.
    </footer>
  </div>
</body>
</html>`
}
