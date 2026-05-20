// Vesta × sign SEO funnel — /gab44/vesta (index) + /gab44/vesta/{sign}
// (12 pages). Vesta is asteroid 4 — the sacred-fire / hearth /
// devotion signature, the place in life where the soul tends a flame
// specifically because IT is sacred to it, not because anyone is
// watching. Distinct from the relational asteroids (Eros/Psyche/Juno):
// Vesta is not about partnership but about the priestess work — the
// flame you would keep alive even if the world stopped paying for it.
// Different theme tier from R17/R18/R19 — designed not to collapse
// into the eros/psyche/juno cluster. Cross-funnels into
// /gab44/reading?ref=vesta-{sign}.

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

// Vesta palette — amber / saffron / firelight, deliberately not the
// wine of Juno or the moon of Psyche. Reads as "kept flame", "hearth",
// "the temple lamp that does not go out".
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ffcf6f', c2: '#c9572f' },
  earth: { c1: '#d8b369', c2: '#8a5a23' },
  air:   { c1: '#f0d8a4', c2: '#a8783a' },
  water: { c1: '#e8b888', c2: '#9a4a3a' }
}

interface VestaProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  tend_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Vesta × sign: the sacred fire each sign was given to tend — the
// devotion-signature, the priestess work, the flame that is kept
// alive because it IS sacred and not because anyone is watching. The
// shadow shape is the same wiring turned into either martyrdom (burn
// the keeper for the temple) or neglect (the flame went out unattended
// because the world did not applaud it).
export const VESTA_PROFILES: Record<Sign, VestaProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The sacred fire of the first ignition. Vesta in Aries tends the flame of starting — the new thing nobody else had the courage to strike, kept alive specifically because the world did not yet know to want it.',
    trap: 'Confusing starting with tending. Vesta in Aries can light a hundred sacred fires and walk away from each one before it has had time to actually burn — and read the lighting as the devotion.',
    gift: 'A sacred channel for the new. Vesta in Aries, when met, is one of the rarest priestesses in the zodiac — the keeper of the flame of beginnings, the one who has the courage to strike the match AND the discipline to stay.',
    body: 'Vesta in Aries is the sacred-fire of the first ignition. The soul was given the rare gift of being able to light what nobody else has had the courage to light — and the harder gift of having to learn to also stay. The trap is the Aries-shaped one: starting is the easy half; the priestess in Aries can spend a life striking new matches and call the striking the devotion, when the devotion is actually the staying. The gift, when this Vesta is honored, is one of the most generative configurations in the zodiac — a soul who can ignite the new AND hold the flame long enough for the fire to feed something.',
    tend_list: [
      'A new thing being deliberately kept alive past its first month — past the place where the world stops applauding the start.',
      'A daily ignition ritual: the small, repeated lighting of the work that nobody else is asking you to do.',
      'The flame of being-first held without competition — sacred-first, not winner-first.',
      'A practice of returning. Aries Vesta is healed by the second visit, the third visit, the hundredth visit — not the first.'
    ],
    shadow_list: [
      'Lighting fires faster than they can take.',
      'Calling the spark the whole work.',
      'Burning the keeper for the temple — depleting the body to keep the new thing alive.',
      'Choosing the next ignition over the discipline of staying with the last.'
    ],
    practice: 'Once a week, return to one project you started more than 30 days ago and do one small specific thing that keeps it alive. Aries Vesta stays alive on the return, dies on the perpetual restart.',
    paradox: 'You will worry that staying with one fire makes you smaller, and discover that staying with one fire is the only configuration where the Aries Vesta\'s gift of ignition is finally allowed to mean something.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The sacred fire of the body and the land. Vesta in Taurus tends the flame of embodied presence — the slow, hand-built thing, the food, the garden, the body itself, kept sacred against a world that is always trying to sell you a faster version.',
    trap: 'Confusing comfort with devotion. Vesta in Taurus can let the priestess work soften into mere pleasure-keeping — the body honored only when it is being fed and not when it is being asked to do hard sacred work.',
    gift: 'A genuinely embodied devotion. Vesta in Taurus, when met, is one of the most grounded priestesses in the zodiac — a soul who knows that the sacred lives in the hand, the soil, the bread, the bed, and tends the fire there.',
    body: 'Vesta in Taurus is sacred-fire as the body and the land. The soul was given the rare gift of knowing, in the bone, that the temple is the body and the temple is the soil — that there is no other place for the sacred to land than the hand and the kitchen and the floor under the foot. The trap is the Taurus-shaped one: comfort is so close to devotion that the priestess work can soften into mere body-pleasing, and the actual hard sacred labor of keeping the flame alive can go unattended. The gift, when this Vesta is honored, is one of the most reliable temples in the zodiac — a long, embodied practice that does not get hijacked by the next shiny method.',
    tend_list: [
      'A long-tended body practice — yoga, lifting, walking, dance — done because it is sacred, not because it is performance.',
      'A hand-made thing kept going for years: the garden, the bread, the loom, the studio.',
      'The body itself as the tabernacle: fed, rested, cared for as sacred matter.',
      'A relationship to the land — the actual soil — that is older than the year.'
    ],
    shadow_list: [
      'Letting comfort eclipse devotion — the soft chair instead of the hard mat.',
      'Feeding the body and starving the priestess.',
      'Confusing slow-living with the actual sacred work.',
      'Holding the temple beautiful and letting the lamp go out.'
    ],
    practice: 'Once a week, name one specific physical act — done with the body, not bought — that you have kept going for at least a year. Taurus Vesta stays alive on the long-attended hand-made practice, dies on the year of consumed comfort.',
    paradox: 'You will worry that the body-and-the-land practice is too pedestrian to be sacred, and discover that the body-and-the-land IS the sacred for Taurus Vesta — and that the more it is tended, the more transparent it becomes to the fire.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The sacred fire of the question. Vesta in Gemini tends the flame of language and inquiry — the conversation that has not yet been had, the precise word that has not yet been found, the question worth keeping alive across years.',
    trap: 'Confusing chatter with devotion. Vesta in Gemini can let the priestess work scatter into a thousand half-conversations and read the volume of words as the seriousness of the inquiry.',
    gift: 'A genuinely tended mind. Vesta in Gemini, when met, is one of the most agile priestesses in the zodiac — a soul who keeps a few specific questions alive across a whole life, returning to them with new tools as the years pass.',
    body: 'Vesta in Gemini is sacred-fire as the question. The soul was given the rare gift of moving easily between angles, registers, and disciplines — and the harder gift of having to choose, from inside that abundance, the few questions worth tending across decades. The trap is the Gemini-shaped one: the priestess can scatter into too many threads and read the scattering as breadth, when the actual sacred work is depth held inside one open question. The gift, when this Vesta is honored, is one of the most precise temples of mind in the zodiac — a soul who knows which questions are worth a lifetime, and stays with them.',
    tend_list: [
      'A small set of questions explicitly named and returned to across years — not seasons.',
      'A daily writing or reading practice that is not for an audience.',
      'A specific intellectual lineage actually studied — not skimmed.',
      'A vocabulary kept precise. Gemini Vesta stays alive when language is treated as sacred matter.'
    ],
    shadow_list: [
      'Confusing the volume of words with the depth of inquiry.',
      'Splitting attention across so many threads that none of them get tended.',
      'Performing curiosity instead of practicing it.',
      'Letting the mind become a feed instead of a temple.'
    ],
    practice: 'Once a week, name one of your few core questions out loud — and write one sentence that answers it more accurately than the sentence you had a year ago. Gemini Vesta stays alive on the long-held question, dies in the perpetual new tab.',
    paradox: 'You will worry that holding only a few questions makes you narrow, and discover that holding a few questions all the way across the years is the only configuration where Gemini Vesta\'s mind finally gets deep enough to actually meet the world.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The sacred fire of the home. Vesta in Cancer tends the flame of the inside-place — the hearth, the family-shape (however defined), the specific kitchen at the specific hour, kept sacred against a world that treats home as an Airbnb.',
    trap: 'Translating devotion into self-erasure. Vesta in Cancer can dissolve the priestess into the family she is feeding and forget that the temple was supposed to also include her own body and soul.',
    gift: 'A genuinely held home. Vesta in Cancer, when met, is one of the most tender priestesses in the zodiac — a soul who keeps the hearth alive in a way that nourishes both the people in the home and the keeper herself.',
    body: 'Vesta in Cancer is sacred-fire as the home. The soul was given the rare gift of knowing, in the body, what an inside-place feels like — and the harder gift of having to build that place explicitly, often for the first time in the lineage. The trap is the Cancer-shaped one: feeding others is so close to the devotion that the priestess work can become entirely outward-facing, and the keeper herself can quietly starve inside the temple she has built. The gift, when this Vesta is honored, is one of the most healing hearths in the zodiac — a home that is genuinely a sanctuary for everyone in it, including the one who tends the fire.',
    tend_list: [
      'A literal hearth — the actual room or table where the inside-place is kept.',
      'A weekly food / meal ritual that is sacred and not just functional.',
      'A practice of also being fed inside the home you are tending.',
      'An ancestor practice. Cancer Vesta stays alive when the lineage is given its hour.'
    ],
    shadow_list: [
      'Self-erasure into the family — the priestess vanished into the meal-plan.',
      'Confusing emotional caretaking with the sacred work.',
      'Holding the home together at the cost of the keeper\'s own body.',
      'Re-creating the original family shape when a new shape is what the soul actually came to build.'
    ],
    practice: 'Once a week, eat one meal at your own table that you cooked for yourself, slowly, with attention — exactly as you would feed a guest you loved. Cancer Vesta stays alive when the keeper is also a guest of her own hearth.',
    paradox: 'You will worry that taking care of the keeper inside the temple is selfish, and discover that the keeper inside the temple IS the temple — and that no home can hold what the keeper has not been allowed to hold inside herself.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The sacred fire of named beauty. Vesta in Leo tends the flame of creative signature — the specific thing made by THIS person and no one else, kept sacred even when there is no audience and no applause.',
    trap: 'Confusing applause with the fire. Vesta in Leo can begin to feed the priestess work from the audience\'s reaction and lose access to the version of the flame that is sacred whether or not anyone is watching.',
    gift: 'A genuinely radiant practice. Vesta in Leo, when met, is one of the most luminous priestesses in the zodiac — a soul whose creative signature is held as sacred matter and whose work radiates without needing the audience to validate it first.',
    body: 'Vesta in Leo is sacred-fire as named beauty. The soul was given the rare gift of being able to make a thing that is unmistakably HERS — a creative signature, a style, a voice — and the harder gift of having to learn to keep that fire lit even when nobody is clapping. The trap is the Leo-shaped one: applause is intoxicating and very close to the felt sense of being-alive, and the priestess can begin to need the audience as fuel and lose the version of the work that was sacred without it. The gift, when this Vesta is honored, is one of the most luminous practices in the zodiac — a creative signature kept burning whether the room is full or empty.',
    tend_list: [
      'A creative practice maintained on the days no one is watching.',
      'A signature-making discipline — the work that is unmistakably yours, refined over years.',
      'A practice of working without an audience: the studio day, the silent rehearsal, the unposted draft.',
      'A relationship to praise that takes it as nourishment, not as fuel.'
    ],
    shadow_list: [
      'Working only when the audience is present.',
      'Letting the audience\'s reaction become the actual fire instead of the byproduct.',
      'Confusing the brand with the priestess work.',
      'Withholding the work because the room was not big enough to "deserve" it.'
    ],
    practice: 'Once a week, do one specific piece of creative work that you will not show anyone. Leo Vesta stays alive on the unwatched practice, dies on the relationship where applause IS the fire.',
    paradox: 'You will worry that doing the work without an audience erases the gift, and discover that the unwatched practice is exactly where Leo Vesta\'s gift gets its actual root system — and where the radiance, when it does meet an audience, has something real to give.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'The sacred fire of devoted craft. Vesta in Virgo tends the flame of the small, attended thing — the precision, the care, the right detail held against a world that is always rounding down. This is the classical Vesta — Virgo is its strongest sign.',
    trap: 'Translating devotion into perfection-as-punishment. Vesta in Virgo can let the sacred discipline curdle into a self-grading machine that exiles the priestess from her own temple.',
    gift: 'A genuinely refined practice. Vesta in Virgo, when met, is the most classical priestess in the zodiac — Virgo is the sign of Vesta\'s natural home — a soul whose devotion to craft is what makes the world a slightly better-tuned instrument.',
    body: 'Vesta in Virgo is sacred-fire as devoted craft, and Virgo is the natural home of the Vesta archetype — the priestess sign of the zodiac. The soul was given the rare gift of an eye for the small attended thing — the right word, the right hem, the right line of code, the right amount of salt — and the harder gift of having to keep the standard sacred without weaponizing it against the priestess herself. The trap is the Virgo-shaped one: the standard can become a club instead of a discipline, and the same eye that tunes the work tunes the self until the keeper has been graded out of her own temple. The gift, when this Vesta is honored, is one of the most refined practices in the zodiac — the world made slightly more accurate, more cared-for, more in-tune, by a soul whose devotion is in the detail.',
    tend_list: [
      'A specific craft refined across years — the long apprenticeship to one practice.',
      'A daily small-attended ritual: the swept floor, the corrected line, the noticed thing fixed.',
      'A practice of mercy toward the keeper. Virgo Vesta stays alive when the priestess is allowed to be human inside the temple of accuracy.',
      'A specific lineage of mastery actually studied, not just admired.'
    ],
    shadow_list: [
      'Translating devotion into self-punishment.',
      'Endless perfecting that never lets the work go out into the world.',
      'Grading the keeper by the same impossible standard reserved for the work.',
      'Confusing critique with care.'
    ],
    practice: 'Once a week, ship one specific imperfect thing on purpose — not lazily, but knowingly. Virgo Vesta stays alive when the standard serves the work AND the keeper, dies when the standard exiles either.',
    paradox: 'You will worry that letting the work go out imperfect betrays the devotion, and discover that the only configuration where Virgo Vesta\'s craft actually meets the world is the one where the keeper is also allowed to be human inside the temple.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'The sacred fire of fair meeting. Vesta in Libra tends the flame of the just relationship — the contract, the table, the room where neither side is flattened — kept sacred against a world that prefers easier exchanges.',
    trap: 'Translating devotion into people-pleasing. Vesta in Libra can let the priestess work soften into the maintenance of social ease, and the actual hard sacred discipline of keeping the room fair can quietly disappear.',
    gift: 'A genuinely tended fairness. Vesta in Libra, when met, is one of the most refined priestesses in the zodiac — a soul who can keep a room genuinely fair across years, and whose presence is the architecture that lets honest meeting happen.',
    body: 'Vesta in Libra is sacred-fire as fair meeting. The soul was given the rare gift of being able to feel imbalance in a room and the harder gift of having to do something about it instead of merely smoothing it over. The trap is the Libra-shaped one: keeping the peace looks like the priestess work and is in fact its evil twin — the keeper who soothes is not the keeper who tends the actual fire of justice. The gift, when this Vesta is honored, is one of the most refined temples in the zodiac — a soul whose tended attention to fairness becomes the architecture inside which other people are also able to meet honestly.',
    tend_list: [
      'A discipline of naming imbalance out loud — not smoothing it.',
      'A relationship to mediation as sacred work, not as social labor.',
      'A long-tended practice of one art-of-meeting craft: facilitation, mediation, design, hospitality.',
      'An aesthetic discipline kept honest — beauty that does not paper over the unfair thing.'
    ],
    shadow_list: [
      'Confusing peace-keeping with fairness-keeping.',
      'Translating devotion into endless self-flexing to keep others comfortable.',
      'Aestheticizing the imbalance instead of addressing it.',
      'Tending everyone\'s temple but the priestess\'s own.'
    ],
    practice: 'Once a week, name one specific imbalance — in a relationship, a contract, a room — that you have noticed and have not yet addressed. Libra Vesta stays alive on named imbalance, dies on smoothed-over surface.',
    paradox: 'You will worry that naming the imbalance breaks the harmony, and discover that the only harmony Libra Vesta is here to tend is the one that survives being told the truth.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'The sacred fire of truth at the bottom. Vesta in Scorpio tends the flame of the underground — what most people will not look at, the grief, the shadow, the actual reckoning — kept sacred precisely because the world wants it minimized.',
    trap: 'Translating devotion into haunting. Vesta in Scorpio can mistake repeated descent for sacred work, and the priestess can stay underground long past the point where the descent has stopped being useful.',
    gift: 'A genuinely tended underworld. Vesta in Scorpio, when met, is one of the most necessary priestesses in the zodiac — a soul whose work is to keep one of the world\'s most-avoided fires lit, and to be a place where other souls can also descend without losing their footing.',
    body: 'Vesta in Scorpio is sacred-fire as truth-at-the-bottom. The soul was given the rare gift of being able to go to the place most people will not go — and the harder gift of having to come back up afterward, to bring the fire back to the surface where it can warm something. The trap is the Scorpio-shaped one: the descent is intoxicating and feels more sacred than the surface, and the priestess can begin to live in the underground as a habit rather than as a sacred journey. The gift, when this Vesta is honored, is one of the most necessary temples in the zodiac — a soul whose tended underground becomes a safe channel for other souls to also descend, do their work, and return.',
    tend_list: [
      'A descent practice that has both a way down AND a way back up.',
      'A discipline of telling the truth about the underground without theatricalizing it.',
      'A specific shadow-work or therapy lineage tended over years.',
      'A grief practice that returns to the surface afterward — not as denial, as dignity.'
    ],
    shadow_list: [
      'Living underground as habit instead of as sacred journey.',
      'Confusing endless descent with depth.',
      'Aestheticizing the wound instead of tending it.',
      'Becoming a haunting house instead of a hearth.'
    ],
    practice: 'Once a week, name one specific underground thing you have visited recently — and one specific surface thing you have brought back up because of it. Scorpio Vesta stays alive on the round-trip, dies on the one-way descent.',
    paradox: 'You will worry that going to the bottom makes you a darkness-handler instead of a fire-keeper, and discover that bringing the fire back UP from the bottom is exactly the priestess gift Scorpio Vesta came here for.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The sacred fire of the larger life. Vesta in Sagittarius tends the flame of meaning — the question worth a lifetime, the horizon worth walking toward, the philosophy held against a world that prefers smaller answers.',
    trap: 'Translating devotion into perpetual seeking. Vesta in Sagittarius can mistake the openness of the question for the depth of the practice, and the priestess can keep moving toward new horizons without ever sitting down inside one and tending the fire.',
    gift: 'A genuinely tended cosmology. Vesta in Sagittarius, when met, is one of the most spacious priestesses in the zodiac — a soul whose long-held meaning-system is large enough to host other people\'s questions and grounded enough to hold its own.',
    body: 'Vesta in Sagittarius is sacred-fire as the larger life. The soul was given the rare gift of being able to ask the questions most people round down — what is this all for, what does meaning even consist of, what is worth a whole lifetime — and the harder gift of having to actually SETTLE somewhere long enough to develop a real answer. The trap is the Sagittarius-shaped one: openness can pass for depth, and the priestess can spend a life walking from horizon to horizon without ever staying long enough to tend a specific fire. The gift, when this Vesta is honored, is one of the most generous temples in the zodiac — a meaning-system large enough to host other souls\' questions and rooted enough to actually hold them.',
    tend_list: [
      'A specific philosophical or spiritual lineage actually committed to — not sampled.',
      'A daily meaning practice: a text studied, a question sat with, a teaching returned to.',
      'A long-tended teaching practice — one mentor, one workshop, one offering held across years.',
      'A horizon kept honest. Sagittarius Vesta stays alive when the larger life is also the lived life.'
    ],
    shadow_list: [
      'Confusing perpetual seeking with the priestess work.',
      'Walking away from one fire to chase the next horizon.',
      'Translating depth into volume of paths sampled.',
      'Speaking in generalities to dodge the specific local fire that needs tending today.'
    ],
    practice: 'Once a season, name one specific meaning-question you have been sitting with for at least a year — and one specific way you are answering it differently now. Sagittarius Vesta stays alive on the sat-with question, dies on the perpetual new horizon.',
    paradox: 'You will worry that committing to one meaning-system makes the world smaller, and discover that committing to one meaning-system all the way across the years is the only configuration where Sagittarius Vesta\'s horizon actually gets large.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The sacred fire of the long arc. Vesta in Capricorn tends the flame of decade-scale work — the cathedral that takes a hundred years, the slow specific practice, kept sacred against a world that wants quarterly results.',
    trap: 'Translating devotion into duty. Vesta in Capricorn can let the priestess work harden into a long obligation, and the keeper can spend decades inside a temple she has stopped feeling reverent toward.',
    gift: 'A genuinely tended long arc. Vesta in Capricorn, when met, is one of the most enduring priestesses in the zodiac — a soul whose decade-scale practice becomes a living monument that other people can orient by.',
    body: 'Vesta in Capricorn is sacred-fire as the long arc. The soul was given the rare gift of being able to stay at one altar for decades — and the harder gift of having to keep the actual reverence alive across that span, instead of letting the practice become a long performance of duty. The trap is the Capricorn-shaped one: the discipline can outlive the devotion, and the priestess can wake up at year fifteen still tending the fire and no longer remembering why she started. The gift, when this Vesta is honored, is one of the most enduring temples in the zodiac — a long-tended fire that has not become rote, and that other people can orient their own practice by.',
    tend_list: [
      'A specific decade-scale practice that is still alive in the present-tense, not just being maintained.',
      'A discipline of returning to the original WHY — once a year at minimum.',
      'A craft, a body of work, an institution being built across more than ten years.',
      'A relationship to mastery that stays warm — not a relationship to mastery that hardens into authority.'
    ],
    shadow_list: [
      'Confusing duration with devotion.',
      'Tending the temple long after the fire has gone out.',
      'Translating the priestess work into a résumé.',
      'Letting authority take the place of reverence.'
    ],
    practice: 'Once a year, write one paragraph naming why you are still tending this specific fire — in present-tense, not nostalgia. Capricorn Vesta stays alive on the renewed why, dies on the duty that has outlived the devotion.',
    paradox: 'You will worry that the long, slow form of the priestess work is unromantic, and discover that the long-and-renewed is the only form of devotion that does not get unwritten by a single bad year.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The sacred fire of the future. Vesta in Aquarius tends the flame of the coming-thing — what nobody else has named yet, the system that does not yet exist, the future kept sacred against a present that is too dense to see it.',
    trap: 'Translating devotion into perpetual prototype. Vesta in Aquarius can keep the priestess work always one iteration away from arriving, and use the future as a place where the actual sacred work never has to land.',
    gift: 'A genuinely tended future. Vesta in Aquarius, when met, is one of the most original priestesses in the zodiac — a soul whose long-tended attention to the coming-thing actually helps the future become hospitable to the rest of us.',
    body: 'Vesta in Aquarius is sacred-fire as the future. The soul was given the rare gift of being able to feel, ahead of everyone else, the thing that is trying to come into being — and the harder gift of having to also LAND that thing into the present, where it can actually feed people. The trap is the Aquarius-shaped one: the future is comfortable as a permanent prototype, and the priestess can spend a life iterating toward an arrival that is structurally never allowed to happen. The gift, when this Vesta is honored, is one of the most original temples in the zodiac — a soul whose tended attention to the coming-thing makes that thing a little more arrivable for everyone else.',
    tend_list: [
      'A specific future-facing project being landed into the present, not just iterated.',
      'A discipline of finishing prototypes — not just starting new ones.',
      'A long-tended fellowship of fellow-builders, not a parade of one-off collaborators.',
      'A practice of the future being also embodied, not just intellectual.'
    ],
    shadow_list: [
      'Iterating forever to avoid landing.',
      'Translating the future into a hiding place from the present.',
      'Confusing originality with the priestess work.',
      'Detaching from the body of the present that the future is supposed to be feeding.'
    ],
    practice: 'Once a month, ship one specific tangible thing into the present — not the future. Aquarius Vesta stays alive on the landed prototype, dies on the perpetual draft.',
    paradox: 'You will worry that landing the future into the present makes it less original, and discover that landing is the only configuration where Aquarius Vesta\'s gift of seeing-ahead actually becomes a fire that can feed people.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The sacred fire of the unspoken. Vesta in Pisces tends the flame of the mystic channel — what can only be tended in silence, the prayer, the meditation, the unsayable, kept sacred against a world that prefers things louder.',
    trap: 'Translating devotion into dissolution. Vesta in Pisces can let the priestess work melt back into the ocean it came from, and the keeper can disappear into the very mystery she was supposed to be tending a specific lamp inside of.',
    gift: 'A genuinely tended channel. Vesta in Pisces, when met, is one of the most transcendent priestesses in the zodiac — a soul whose mystic practice is also embodied, and whose silence has architecture other people can rest inside.',
    body: 'Vesta in Pisces is sacred-fire as the unspoken. The soul was given the rare gift of being natively close to the channel that most people have to spend a lifetime trying to reach — and the harder gift of having to also keep a specific shape, a specific practice, a specific lamp, instead of dissolving back into the ocean. The trap is the Pisces-shaped one: the mystic is so close to the everyday for this Vesta that the priestess can let the work liquify and lose the shape that lets other people drink from it. The gift, when this Vesta is honored, is one of the most luminous temples in the zodiac — a mystic channel that is both transparent to the source AND grounded enough to actually serve.',
    tend_list: [
      'A specific contemplative practice tended for years — not sampled across many.',
      'A daily silence ritual at a specific hour.',
      'A creative or healing work that channels the unsayable into a form other people can receive.',
      'A relationship to embodiment that anchors the mystic instead of bypassing it.'
    ],
    shadow_list: [
      'Dissolution mistaken for devotion.',
      'Translating the priestess work into vague mood instead of specific practice.',
      'Numbing as a counterfeit of the actual mystic channel.',
      'Refusing form because form feels like a reduction of the source.'
    ],
    practice: 'Once a week, do one specific tangible piece of mystic practice — at a specific hour, in a specific place, for a specific length of time. Pisces Vesta stays alive on the embodied form, dies on the puddled mood.',
    paradox: 'You will worry that giving the mystic a specific form is a reduction, and discover that the specific form is exactly the lamp inside of which the mystic can actually be tended — and the only configuration where Pisces Vesta\'s gift becomes a fire other souls can also drink from.'
  }
}

export const VESTA_SIGNS = SIGNS

export function isVestaSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "⚶"; position: absolute; left: 6px; top: 8px; color: #c9572f; font-weight: 700; }
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

export function vestaPageHTML(sign: Sign): string {
  const p = VESTA_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Vesta in ${Sign}`

  const tendItems = p.tend_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherVestas = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/vesta/${s}">⚶ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/vesta">all 12 Vesta signs</a>`
  ].join('')

  const title = `${headline} — your sacred-fire / devotion signature · the priestess work · gab44`
  const description = `${headline}: the specific sacred-fire signature of asteroid 4 Vesta in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Sacred-fire / devotion guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Vesta by sign', item: `${SITE_URL}/gab44/vesta` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/vesta/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/vesta/${sign}`,
        about: `Vesta (asteroid 4) sacred-fire / devotion signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/vesta/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/vesta/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B6%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/vesta">all 12 Vesta signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/juno/${sign}">Juno in ${Sign}</a>
      <a href="/gab44/psyche/${sign}">Psyche in ${Sign}</a>
      <a href="/gab44/reading?ref=vesta-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚶ ${sm.symbol}</div>
      <div class="meta">Vesta (asteroid 4) · ${Sign} · sacred-fire / devotion signature</div>
    </div>
    <h1><span class="accent">Vesta</span> in ${Sign}</h1>
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

    <h2>What Vesta in ${Sign} tends</h2>
    <ul class="checklist do">${tendItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Vesta paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Vesta</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Vesta reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">4 Vesta · discovered 1807 · sacred-fire / devotion / priestess signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Eros (arousal) · Psyche (recognition) · Juno (commitment) · Ceres (nurture) · Pallas (strategy)</span></div>
      <div class="row"><span class="k">Vesta names</span><span class="v">the sacred-fire · what you tend without applause · the priestess work</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the temple · the trap · the medicine</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vesta-${sign}">Get a $9 Vesta-aware reading →</a>
    </div>

    <h2>The other 11 Vesta signs</h2>
    <div class="strip">${otherVestas}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen sacred-fire signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function vestaIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = VESTA_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/vesta/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚶ ${sm.symbol}</div>
      <div class="name">Vesta in ${titleCase(s)}</div>
      <div class="axis">sacred fire · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Vesta by sign — your sacred-fire / devotion signature · the priestess work by zodiac · gab44 ✨`
  const description = `Vesta (asteroid 4) by sign — the specific sacred-fire signature for all 12 zodiac signs. The flame each sign was given to tend, the trap, and the medicine. Distinct from the relational asteroids (Eros, Psyche, Juno) — Vesta names what you would keep alive even with no audience. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/vesta" />
<meta property="og:title" content="Vesta by sign · gab44" />
<meta property="og:description" content="The sacred-fire signature of asteroid 4 Vesta in each zodiac sign — the priestess work each sign was given to tend." />
<meta property="og:type" content="website" />
<style>:root{--c1:#c9572f;--c2:#8a3a1a;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=vesta-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#c9572f,#8a3a1a)">⚶</div>
      <div class="meta">12 sign-specific Vesta profiles · asteroid 4 · evergreen · sacred-fire / devotion</div>
    </div>
    <h1>Vesta by <span class="accent">sign</span></h1>
    <p class="vibe">Vesta is asteroid 4 — the priestess of the zodiac, the keeper of the sacred fire. Where <a href="/gab44/eros">Eros</a> names arousal, <a href="/gab44/psyche">Psyche</a> names soul-recognition, and <a href="/gab44/juno">Juno</a> names commitment, Vesta names the flame you would tend even with no audience — the place in life where the soul keeps something alive specifically because it is sacred to it. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vesta-index">Want a Vesta-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Vesta-by-sign profiles · evergreen sacred-fire signature guide.
    </footer>
  </div>
</body>
</html>`
}
