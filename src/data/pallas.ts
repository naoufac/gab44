// Pallas × sign SEO funnel — /gab44/pallas (index) + /gab44/pallas/{sign}
// (12 pages). Pallas is asteroid 2 — the wisdom / strategy / pattern-
// recognition signature, the warrior-philosopher, the weaver. The
// place in the chart where the soul SEES patterns and translates them
// into elegant action. Distinct from Vesta (sacred-fire / devotion):
// Pallas is not the priestess but the strategist — Athena, not Hestia.
// Different theme tier from R17/R18/R19/R20 — completes the big-four-
// asteroid set (Ceres-Pallas-Juno-Vesta) on the wisdom/strategy axis,
// alongside Juno's commitment and Vesta's devotion. Cross-funnels into
// /gab44/reading?ref=pallas-{sign}.

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

// Pallas palette — olive / sage / silvered-leaf, deliberately not the
// amber of Vesta or the wine of Juno. Reads as "the owl at dusk", "the
// olive branch", "clear-eyed at the strategic table". Index gradient:
// `#5a7a3a → #2f4a25` — the deep evergreen of an Athenian grove.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#9bb86a', c2: '#557237' },
  earth: { c1: '#a8a87a', c2: '#5a6033' },
  air:   { c1: '#bccba8', c2: '#637d4d' },
  water: { c1: '#8aa890', c2: '#3d5a40' }
}

interface PallasProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  see_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Pallas × sign: the wisdom-and-strategy signature each sign was given
// — the specific shape of pattern-recognition and elegant action this
// soul brings to the strategic table. Distinct from Vesta's sacred-fire:
// Pallas is the warrior-philosopher, the weaver, the one who sees the
// shape of the whole and translates it into the right next move. The
// shadow shape is the same wiring turned into either over-plan
// (paralysis-by-pattern) or weaponized intelligence (the spear without
// the olive branch).
export const PALLAS_PROFILES: Record<Sign, PallasProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The strategist of the first move. Pallas in Aries sees the opening before anyone else has named there is a board — the elegant first strike, the courageous entry, the place to plant the spear so the rest of the battle becomes possible.',
    trap: 'Confusing speed with strategy. Pallas in Aries can mistake the fastness of the read for the rightness of it, and act on the first pattern that snaps into focus before the slower, deeper pattern has had time to surface.',
    gift: 'A genuinely opening intelligence. Pallas in Aries, when met, is one of the most useful strategists in the zodiac — the soul who can name the move that makes a stuck situation suddenly winnable, and have the courage to actually take it.',
    body: 'Pallas in Aries is wisdom-as-the-first-move. The soul was given a rare strategic gift: the ability to see, in a stuck or stagnant field, the precise opening through which forward motion becomes possible — and the courage to actually take that opening instead of just naming it. The trap is the Aries-shaped one: the same speed that makes the read possible can short-circuit the deeper reading; the strategist can keep acting on the surface pattern before the pattern under the pattern has had time to show. The gift, when this Pallas is honored, is one of the rarest configurations in the zodiac — a strategist who is also a fighter, who not only sees the elegant move but takes it.',
    see_list: [
      'A specific stuck situation you have already named the opening move in — and a date by which you will actually take it.',
      'A practice of holding the read for one more breath before acting, to let the second-order pattern surface.',
      'A first-strike discipline that is sacred not impulsive: chosen, not reactive.',
      'A relationship to courage as the executive arm of strategy, not the substitute for it.'
    ],
    shadow_list: [
      'Acting on the first pattern before the second pattern has had time to show.',
      'Confusing the speed of the read with the depth of it.',
      'Translating strategy into a continuous adrenaline supply.',
      'Storming the position without first asking whether the position is the actual one to take.'
    ],
    practice: 'Once a week, name one specific stuck thing — and the SECOND-best move you can see, not the first. Aries Pallas grows when forced to also see the slower pattern.',
    paradox: 'You will worry that pausing for the second pattern dulls the strategic edge, and discover that Aries Pallas only becomes a real strategist — not just a fighter — when the second pattern is allowed to also have a vote.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The strategist of resources and ground. Pallas in Taurus sees the long material pattern — what soil grows what, what asset compounds, what infrastructure is worth slowly building, what the body and the land are quietly trying to say.',
    trap: 'Confusing inertia with strategy. Pallas in Taurus can let the long-build instinct freeze into not-moving, and call the refusal to act a strategic patience when it is actually just the comfort of the chair.',
    gift: 'A genuinely material intelligence. Pallas in Taurus, when met, is one of the most grounded strategists in the zodiac — the soul who knows which resource to plant, which asset to keep, which slow infrastructure to build, and the patience to let it actually compound.',
    body: 'Pallas in Taurus is wisdom-as-resource-and-ground. The soul was given a rare strategic gift: the ability to read the slow material patterns most strategists miss — what compounds, what depletes, what soil grows what, what infrastructure is worth a decade. The trap is the Taurus-shaped one: the long-build instinct can curdle into pure inertia; the strategist can stay in the chair long after the chair has stopped being the strategic position. The gift, when this Pallas is honored, is one of the most reliable strategic intelligences in the zodiac — a soul whose plans actually hold across years, because they were built on the actual ground instead of on the day\'s noise.',
    see_list: [
      'A specific long resource being deliberately compounded — not merely held.',
      'A practice of reading the body as data: hunger, energy, recoil, slowness, signal.',
      'An infrastructure project being built on a five-or-ten year arc, with the first stone laid this season.',
      'A relationship to material as strategic terrain — not just as comfort.'
    ],
    shadow_list: [
      'Confusing inertia with patience.',
      'Translating strategy into the long defense of an existing comfort.',
      'Reading material only as supply, never as signal.',
      'Letting the chair become the strategy.'
    ],
    practice: 'Once a season, name one specific resource you are compounding AND one specific resource you are defending past its expiry. Taurus Pallas grows when patience and inertia are forced apart.',
    paradox: 'You will worry that distinguishing inertia from patience makes you restless, and discover that the only configuration where Taurus Pallas\'s slow-build gift actually compounds is the one where stagnation is also given a name.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The strategist of the connection. Pallas in Gemini sees the link nobody else has noticed — the precise bridge between two unrelated fields, the unexpected analogy, the elegant translation that makes a thing suddenly legible.',
    trap: 'Confusing connections with conclusions. Pallas in Gemini can keep weaving threads forever and never weave the actual fabric, mistaking the joy of seeing-the-link for the harder work of acting on what the link revealed.',
    gift: 'A genuinely associative intelligence. Pallas in Gemini, when met, is one of the most original strategists in the zodiac — a soul whose particular gift is to see the bridge between fields and then build a working translation across it.',
    body: 'Pallas in Gemini is wisdom-as-elegant-connection. The soul was given a rare strategic gift: the ability to hold two unrelated fields in mind at once and see, with unusual clarity, the bridge between them — the analogy that unlocks the problem, the translation that makes the foreign-thing suddenly usable. The trap is the Gemini-shaped one: the bridge-building can become its own destination; the strategist can spend a life delighting in the connections without ever crossing one of them and acting on the other side. The gift, when this Pallas is honored, is one of the most generative strategic intelligences in the zodiac — a soul who not only sees the bridge but walks it, and brings something concrete back from the other side.',
    see_list: [
      'A specific connection you have seen that nobody around you has named — and a sentence written about what to actually DO with it.',
      'A weaving practice: two distinct fields studied in parallel so the bridge has somewhere to land.',
      'A translation project — turning insight from one domain into usable form in another.',
      'A discipline of finishing one bridge-walk before starting the next.'
    ],
    shadow_list: [
      'Translating strategy into a feed of clever links.',
      'Confusing seeing-the-bridge with crossing it.',
      'Letting curiosity scatter the strategic attention into a thousand half-walked paths.',
      'Mistaking the joy of the analogy for the work of the implementation.'
    ],
    practice: 'Once a month, take one specific cross-field connection you have seen and ship one concrete output that uses it. Gemini Pallas grows on the implemented bridge, dies on the unwalked link.',
    paradox: 'You will worry that committing to one bridge erases the field of bridges, and discover that crossing one bridge all the way is what teaches Gemini Pallas to see the bridges that actually matter.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The strategist of sanctuary and protection. Pallas in Cancer sees the shape that keeps a soul safe — the architecture of belonging, the right boundary, the room or the lineage or the ritual that holds people through the storm.',
    trap: 'Confusing protection with control. Pallas in Cancer can let strategic care narrow into pre-emptive defense — fortifying a sanctuary against an enemy that is no longer at the gate, and quietly making the sanctuary itself the cage.',
    gift: 'A genuinely protective intelligence. Pallas in Cancer, when met, is one of the most attuned strategists in the zodiac — the soul who can design a container, a family-shape, a healing-room, a community structure that genuinely holds people through what the world cannot.',
    body: 'Pallas in Cancer is wisdom-as-sanctuary-design. The soul was given a rare strategic gift: the ability to feel, with unusual precision, what shape of container actually holds a person safely — what room, what family-form, what ritual, what boundary. The trap is the Cancer-shaped one: the same protective intelligence can over-fortify; the sanctuary becomes a defended position, the boundary becomes a wall, and the strategist forgets that the goal was always for someone to be able to LIVE inside the shape, not just to be defended from outside it. The gift, when this Pallas is honored, is one of the most healing strategic intelligences in the zodiac — a soul who builds the rooms inside which other souls can finally rest.',
    see_list: [
      'A specific container you have designed — relational, professional, domestic — that has actually held people through hard weather.',
      'A practice of asking, for each defense, whether the threat is current or historical.',
      'An ancestry-as-strategy practice: reading what the lineage already knows about safety.',
      'A boundary craft kept warm — protecting WITHOUT walling.'
    ],
    shadow_list: [
      'Defending the sanctuary against a threat that has already left.',
      'Confusing the strategist\'s wound with strategic intelligence.',
      'Translating care into pre-emptive control.',
      'Making the sanctuary a cage in the name of safety.'
    ],
    practice: 'Once a season, audit one specific boundary you keep — and ask whether the wall is currently protecting someone or just remembering an older threat. Cancer Pallas grows on the audited wall.',
    paradox: 'You will worry that questioning the wall risks the sanctuary, and discover that Cancer Pallas\'s sanctuary only stays sanctuary — and not cage — when the walls are also asked, regularly, what they are still doing there.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The strategist of the named vision. Pallas in Leo sees the clear narrative — the heroic frame, the unifying story, the shape of leadership that turns scattered effort into a coherent campaign with a recognizable face.',
    trap: 'Confusing the narrative with the territory. Pallas in Leo can fall in love with the elegance of the story and start serving the narrative instead of the ground — making strategic decisions that flatter the arc instead of fitting the actual situation.',
    gift: 'A genuinely visionary intelligence. Pallas in Leo, when met, is one of the most galvanizing strategists in the zodiac — a soul whose ability to name the unifying story turns a scattered group into an actual movement.',
    body: 'Pallas in Leo is wisdom-as-named-vision. The soul was given a rare strategic gift: the ability to see, inside a confused or scattered situation, the heroic frame — the narrative that makes the parts cohere, the arc that gives a campaign its spine, the clear vision other people can rally around. The trap is the Leo-shaped one: the narrative is so seductive that the strategist can begin to serve it instead of using it; the story becomes the master and the situation becomes the prop, and the campaign loses contact with the actual ground. The gift, when this Pallas is honored, is one of the most galvanizing strategic intelligences in the zodiac — a soul whose vision can turn loose effort into a coherent movement and keep the movement honest to its source.',
    see_list: [
      'A specific situation you have named the unifying story of — and a paragraph about where the story is currently TRUE versus aspirational.',
      'A leadership practice that takes the narrative as a map, not as the destination.',
      'A signature vision refined over years — not abandoned for the next exciting one.',
      'A relationship to praise that lets it confirm without redirecting the strategy.'
    ],
    shadow_list: [
      'Serving the narrative instead of the ground.',
      'Translating strategy into personal myth-making.',
      'Confusing audience reaction with strategic feedback.',
      'Editing the territory to flatter the story.'
    ],
    practice: 'Once a month, name one specific way the situation on the ground is currently DIVERGING from the heroic story you have been telling — and adjust either the story or the move. Leo Pallas grows on the audited narrative.',
    paradox: 'You will worry that auditing the narrative shrinks the vision, and discover that Leo Pallas\'s vision only stays alive when the gap between story and ground is named — and the leader is bigger than the campaign.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'The strategist of the elegant system. Pallas in Virgo sees the right next move inside a complex process — the small intervention that unlocks the whole sequence, the precise step, the quiet bottleneck that, when fixed, makes the entire system breathe.',
    trap: 'Confusing optimization with strategy. Pallas in Virgo can keep tuning the existing system long past the point where the system itself is the wrong system — refining the wrong shape into a more efficient version of the wrong shape.',
    gift: 'A genuinely procedural intelligence. Pallas in Virgo, when met, is one of the most useful strategists in the zodiac — the soul whose talent is for the small, attended fix that unlocks a much larger flow.',
    body: 'Pallas in Virgo is wisdom-as-elegant-system. The soul was given a rare strategic gift: the ability to look at a complex process and see, with unusual clarity, the small specific intervention that unlocks the entire flow — the right next step, the quiet bottleneck, the small calibration that re-aligns the whole machine. The trap is the Virgo-shaped one: the optimizer\'s eye can stay too long inside one system; the strategist tunes and re-tunes the existing shape, missing that the strategic move is no longer "improve THIS" but "leave THIS for a different shape entirely". The gift, when this Pallas is honored, is one of the most useful strategic intelligences in the zodiac — a soul whose small precise interventions repeatedly turn stuck systems into working ones.',
    see_list: [
      'A specific bottleneck you have named — and a 1-week experiment to actually shift it.',
      'A practice of asking, before optimizing further, whether the system itself is still the right system.',
      'A craft of process-design refined across years.',
      'A working method for separating tuning (improve what is) from re-design (build what should be).'
    ],
    shadow_list: [
      'Optimizing the wrong system into a more efficient version of itself.',
      'Translating strategy into endless tinkering.',
      'Confusing process-mastery with the actual goal of the process.',
      'Refusing to change the shape because the shape has been refined.'
    ],
    practice: 'Once a quarter, name one system you have been optimizing — and ask honestly whether the strategic move is still "tune" or has become "redesign". Virgo Pallas grows on the audited shape.',
    paradox: 'You will worry that questioning the system betrays the years of refinement, and discover that the only configuration where Virgo Pallas stays a real strategist is the one where the process itself is also allowed to be re-questioned.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'The strategist of fair design. Pallas in Libra sees the architecture of just exchange — the contract that holds, the table where both sides can show up real, the design that builds fairness into the structure instead of leaving it to good intentions.',
    trap: 'Confusing balance with strategy. Pallas in Libra can spend strategic attention smoothing the immediate room and lose the longer pattern, mistaking the comfort of the moment for the architecture of the lasting fair structure.',
    gift: 'A genuinely architectural intelligence. Pallas in Libra, when met, is one of the most refined strategists in the zodiac — a soul whose particular talent is to design containers — contracts, partnerships, governance, rooms — that make fairness structurally easier and unfairness structurally harder.',
    body: 'Pallas in Libra is wisdom-as-fair-architecture. The soul was given a rare strategic gift: the ability to see the structural shape that makes justice durable — the contract, the governance, the meeting design, the partnership shape that holds two real sides in honest exchange long after the goodwill has worn off. The trap is the Libra-shaped one: the same intelligence that designs the long fair structure can over-rotate into the short balanced moment; the strategist soothes the room and forgets that the strategic question was never "what makes today comfortable" but "what shape, when followed for years, makes injustice harder to slip in". The gift, when this Pallas is honored, is one of the most architectural strategic intelligences in the zodiac — a soul who builds fair structures that outlast the people who built them.',
    see_list: [
      'A specific contract, agreement, or governance shape you have designed — and the way it actually held when tested.',
      'A practice of distinguishing immediate balance from long structural fairness.',
      'A facilitation or mediation craft refined as strategic discipline, not social labor.',
      'An aesthetic of design held in service of fairness, not as decoration.'
    ],
    shadow_list: [
      'Soothing the room as a substitute for designing the long structure.',
      'Translating strategy into endless flexing toward whoever is loudest.',
      'Confusing the appearance of balance with the architecture of fairness.',
      'Aestheticizing imbalance instead of redesigning around it.'
    ],
    practice: 'Once a season, name one structural shape — a contract, a meeting form, a partnership protocol — that you have built or could build. Libra Pallas grows on the designed structure, not on the smoothed moment.',
    paradox: 'You will worry that designing the long structure breaks the harmony of the present, and discover that the only harmony Libra Pallas is here to design is the one whose architecture survives being tested.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'The strategist of the underground. Pallas in Scorpio sees the hidden power-shape — what is actually moving the situation under the visible movements, who really holds the leverage, and where the small honest cut breaks a stuck pattern.',
    trap: 'Confusing power-mapping with paranoia. Pallas in Scorpio can spend strategic attention reading every situation as covert manipulation, and the gift of seeing-the-hidden-shape can curdle into the inability to see when a thing is just what it looks like.',
    gift: 'A genuinely penetrating intelligence. Pallas in Scorpio, when met, is one of the most necessary strategists in the zodiac — a soul who reads power, leverage, and the hidden architecture of a situation with surgical accuracy and uses that reading to free, not to control.',
    body: 'Pallas in Scorpio is wisdom-as-underground-mapping. The soul was given a rare strategic gift: the ability to see, beneath the surface of any situation, the actual power-shape — who holds what leverage, where the hidden contract is, what the room is really negotiating under the words it is saying. The trap is the Scorpio-shaped one: the same eye that reads hidden architecture can begin reading hidden architecture even where there isn\'t any; the strategist defaults to "everyone is concealing something" and loses the simpler readings the situation actually warrants. The gift, when this Pallas is honored, is one of the most penetrating strategic intelligences in the zodiac — a soul whose ability to see under the surface is used to free other souls from the hidden contracts they are caught inside, not to control them with what is seen.',
    see_list: [
      'A specific situation you have read the hidden power-shape of — and a single honest move you have made or can make on the basis of that reading.',
      'A practice of also asking "what if it is exactly what it looks like" before defaulting to the hidden read.',
      'A craft of leverage-without-coercion — using what is seen to release, not to control.',
      'A shadow-work lineage tended over years, so the strategist\'s underground is also the strategist\'s.'
    ],
    shadow_list: [
      'Reading hidden architecture into situations that don\'t have any.',
      'Translating power-mapping into permanent suspicion.',
      'Using strategic insight to control rather than release.',
      'Confusing the seen-darkness with the only available reading.'
    ],
    practice: 'Once a month, take one situation you have read for hidden leverage — and write the simplest possible reading of it next to your subterranean reading. Scorpio Pallas grows when both readings are allowed to exist.',
    paradox: 'You will worry that adding the simple reading dulls the underground gift, and discover that Scorpio Pallas\'s gift becomes actually trustworthy only when it is also accountable to the simpler readings the situation may quietly warrant.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The strategist of the long arc. Pallas in Sagittarius sees the larger-pattern frame — the philosophy under the move, the long horizon under the next quarter, the meaning that aligns the small decision with the decade-scale arc.',
    trap: 'Confusing the long view with the right move. Pallas in Sagittarius can spend strategic attention on the philosophy of the situation while the local situation falls over — preferring the elegant horizon read to the slightly less glamorous next-step.',
    gift: 'A genuinely philosophical intelligence. Pallas in Sagittarius, when met, is one of the most spacious strategists in the zodiac — a soul whose long-arc reading actually changes the local moves, because the meaning is held alongside the immediate.',
    body: 'Pallas in Sagittarius is wisdom-as-long-arc. The soul was given a rare strategic gift: the ability to hold the very long horizon and the philosophical frame in the same field of attention as the local move, so that the next decision is shaped by where the whole arc is heading. The trap is the Sagittarius-shaped one: the long view is intoxicating; the strategist can begin spending strategic attention only on the horizon and let the local terrain — where the actual moves get made — go unmaintained. The gift, when this Pallas is honored, is one of the most spacious strategic intelligences in the zodiac — a soul whose long-arc clarity actually pulls the small daily moves into alignment with a meaning the rest of the world can also feel.',
    see_list: [
      'A specific long arc you are explicitly tracking — and a single concrete move this month that is shaped by it.',
      'A practice of converting philosophy into the next local action, not just into the next teaching.',
      'A meaning-system actually committed to over years, not sampled.',
      'A discipline of also tending the local terrain — the immediate, the small, the unglamorous.'
    ],
    shadow_list: [
      'Reading the horizon while the local terrain rots.',
      'Translating strategy into a series of grand teachings with no execution.',
      'Confusing the elegance of the philosophical frame with the rightness of the local move.',
      'Walking off when the next horizon arrives, before the current arc has been tended.'
    ],
    practice: 'Once a season, take your long-arc reading and name the one specific small local move this month that is downstream of it. Sagittarius Pallas grows when the horizon is forced to pay rent in the local action.',
    paradox: 'You will worry that anchoring to the local terrain shrinks the horizon, and discover that Sagittarius Pallas\'s long-arc gift only becomes a working strategy — instead of beautiful theory — when the local move is also held responsible to it.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The strategist of institutional design. Pallas in Capricorn sees the structural shape — the institution, the system, the multi-decade architecture that turns scattered effort into a thing that outlives its founder and keeps doing its work.',
    trap: 'Confusing the structure with the work. Pallas in Capricorn can let strategic attention freeze around protecting the existing structure — defending the institution after the institution has stopped serving the original purpose, and reading any change as a threat to the strategy.',
    gift: 'A genuinely institutional intelligence. Pallas in Capricorn, when met, is one of the most enduring strategists in the zodiac — the soul who can design a structure that holds across decades, gives strangers a place to do good work, and outlives its first generation.',
    body: 'Pallas in Capricorn is wisdom-as-institutional-architecture. The soul was given a rare strategic gift: the ability to design the structural shape — the institution, the org, the multi-year system — that turns one person\'s effort into a thing that outlives that person and keeps doing the work. The trap is the Capricorn-shaped one: the structure can become the master; the strategist can spend strategic attention defending the institution after the institution\'s purpose has shifted underneath it, mistaking the survival of the form for the survival of the work the form was supposed to do. The gift, when this Pallas is honored, is one of the most enduring strategic intelligences in the zodiac — a soul whose structures keep working across decades because they were designed to also be re-designable.',
    see_list: [
      'A specific structure — institution, org, system — you have designed or are designing for the long arc.',
      'A practice of asking, every year, whether the structure is still serving the work or has become its own purpose.',
      'A craft of authority that stays warm — held in service of the work, not as identity.',
      'A succession plan: the test of a structure is whether it survives the founder leaving.'
    ],
    shadow_list: [
      'Defending the form after the work the form served has moved.',
      'Translating strategy into the protection of an authority position.',
      'Confusing duration with strategic success.',
      'Letting the institution become a costume the work has to fit inside.'
    ],
    practice: 'Once a year, write one paragraph naming where the structure you tend is still serving the work versus where the structure has become its own justification. Capricorn Pallas grows on the audited form.',
    paradox: 'You will worry that questioning the structure undermines the strategy, and discover that the only configuration where Capricorn Pallas\'s long-arc gift remains strategic — instead of curating a museum — is the one where the structure is also asked, every year, what it is still for.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The strategist of the system-rewrite. Pallas in Aquarius sees the architectural pattern of an entire field — and the specific lever that, when moved, changes the whole system at once instead of fixing it case by case.',
    trap: 'Confusing system-thinking with abstraction. Pallas in Aquarius can stay so far up the abstraction ladder that the strategic insights never come down to a body — designing system-rewrites that no actual person can step into and walk around in.',
    gift: 'A genuinely systemic intelligence. Pallas in Aquarius, when met, is one of the most original strategists in the zodiac — a soul whose ability to see the pattern of the whole field translates into specific levers that actually change how the field works.',
    body: 'Pallas in Aquarius is wisdom-as-system-rewrite. The soul was given a rare strategic gift: the ability to see the pattern of an entire field at once — the network, the system, the architecture — and to identify the specific lever that, when moved, changes the whole shape instead of patching it case by case. The trap is the Aquarius-shaped one: the strategist can stay too far up; the system-read becomes pure abstraction, and the lever stays a beautiful diagram nobody can actually pull. The gift, when this Pallas is honored, is one of the most original strategic intelligences in the zodiac — a soul whose systemic reading produces specific embodied moves that meaningfully change how a field works.',
    see_list: [
      'A specific system you have read the pattern of — and the one concrete lever you can name AND can actually pull.',
      'A practice of bringing the system-read down into a body — a specific person, a specific room, a specific action.',
      'A network of fellow system-builders, so the rewrite is also collaborative.',
      'A discipline of finishing the implementation, not just the diagram.'
    ],
    shadow_list: [
      'Translating strategy into permanent diagram.',
      'Designing levers no actual person can pull.',
      'Confusing originality with strategic correctness.',
      'Detaching from the body of the present that the rewrite is supposed to serve.'
    ],
    practice: 'Once a quarter, take one system-read and name the embodied move — done in a body, in a room, on a date — that translates it into ground. Aquarius Pallas grows on the landed lever.',
    paradox: 'You will worry that the embodied move shrinks the elegance of the system-read, and discover that the only configuration where Aquarius Pallas\'s system-rewrite gift becomes a real strategy is the one where the lever is also pulled.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The strategist of the imaginal. Pallas in Pisces sees the pattern that has not yet hardened into form — the move that surfaces in dream, intuition, image, and synchronicity, before the rational mind has the data to name why it is right.',
    trap: 'Confusing intuition with strategy. Pallas in Pisces can act on every signal as if it were already the move, mistaking the felt-sense of a pattern for its actual readiness, and letting strategic discipline dissolve into mood-following.',
    gift: 'A genuinely imaginal intelligence. Pallas in Pisces, when met, is one of the most prescient strategists in the zodiac — a soul whose ability to read the pattern-before-it-forms repeatedly produces moves that look prophetic in retrospect, because they were aligned with a shape only the imaginal could see.',
    body: 'Pallas in Pisces is wisdom-as-imaginal-seeing. The soul was given a rare strategic gift: the ability to read patterns that have not yet hardened into form — to see, through dream and intuition and synchronicity, the move that the rational mind would only be able to justify months later. The trap is the Pisces-shaped one: the same channel can flood; not every felt-sense is a strategic signal, and the strategist can begin acting on the intensity of the impression rather than on the discrimination of which impressions are actually the load-bearing ones. The gift, when this Pallas is honored, is one of the most prescient strategic intelligences in the zodiac — a soul whose imaginal reading is also disciplined, and whose moves repeatedly land ahead of where the visible data could have predicted.',
    see_list: [
      'A specific imaginal signal — a dream, an intuition, a recurring image — that you actually translated into a tangible move, with the result.',
      'A practice of journaling impressions BEFORE acting, so the discrimination layer has somewhere to live.',
      'A contemplative or mystic lineage tended for years — anchoring imaginal reading in form.',
      'A relationship to embodiment that grounds the channel instead of bypassing it.'
    ],
    shadow_list: [
      'Confusing the intensity of an impression with its strategic weight.',
      'Translating strategy into pure mood-following.',
      'Letting the imaginal channel drown the discrimination layer.',
      'Refusing form because form feels like reduction.'
    ],
    practice: 'Once a week, log one imaginal signal you received AND one decision about whether to act on it — with the reasoning beside it. Pisces Pallas grows on the discriminated impression, dies on the undifferentiated wave.',
    paradox: 'You will worry that disciplining the imaginal closes the channel, and discover that the only configuration where Pisces Pallas becomes a real strategist — and not just a sensitive — is the one where the channel is also held accountable to a specific form.'
  }
}

export const PALLAS_SIGNS = SIGNS

export function isPallasSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "⚴"; position: absolute; left: 6px; top: 8px; color: #557237; font-weight: 700; }
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

export function pallasPageHTML(sign: Sign): string {
  const p = PALLAS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Pallas in ${Sign}`

  const seeItems = p.see_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherPallas = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/pallas/${s}">⚴ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/pallas">all 12 Pallas signs</a>`
  ].join('')

  const title = `${headline} — your wisdom / strategy / pattern signature · the warrior-philosopher · gab44`
  const description = `${headline}: the specific strategic-wisdom signature of asteroid 2 Pallas in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Wisdom / strategy guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Pallas by sign', item: `${SITE_URL}/gab44/pallas` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/pallas/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/pallas/${sign}`,
        about: `Pallas (asteroid 2) wisdom / strategy / pattern signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/pallas/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/pallas/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B4%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/pallas">all 12 Pallas signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/vesta/${sign}">Vesta in ${Sign}</a>
      <a href="/gab44/juno/${sign}">Juno in ${Sign}</a>
      <a href="/gab44/reading?ref=pallas-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚴ ${sm.symbol}</div>
      <div class="meta">Pallas (asteroid 2) · ${Sign} · wisdom / strategy / pattern signature</div>
    </div>
    <h1><span class="accent">Pallas</span> in ${Sign}</h1>
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

    <h2>What Pallas in ${Sign} sees</h2>
    <ul class="checklist do">${seeItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Pallas paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Pallas</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Pallas reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">2 Pallas · discovered 1802 · wisdom / strategy / pattern-recognition signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Eros (arousal) · Psyche (recognition) · Juno (commitment) · Vesta (devotion) · Ceres (nurture)</span></div>
      <div class="row"><span class="k">Pallas names</span><span class="v">the warrior-philosopher · the weaver · the elegant strategy</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the seeing · the trap · the move</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=pallas-${sign}">Get a $9 Pallas-aware reading →</a>
    </div>

    <h2>The other 11 Pallas signs</h2>
    <div class="strip">${otherPallas}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen wisdom / strategy signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function pallasIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = PALLAS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/pallas/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚴ ${sm.symbol}</div>
      <div class="name">Pallas in ${titleCase(s)}</div>
      <div class="axis">strategic seeing · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Pallas by sign — your wisdom / strategy / pattern signature · the warrior-philosopher by zodiac · gab44 ✨`
  const description = `Pallas (asteroid 2) by sign — the specific strategic-wisdom signature for all 12 zodiac signs. The shape of pattern-recognition, the elegant move, the trap, and the medicine. Distinct from the relational asteroids (Eros, Psyche, Juno) and the devotion-asteroid Vesta — Pallas names the warrior-philosopher, the weaver, how each sign sees patterns and translates them into action. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/pallas" />
<meta property="og:title" content="Pallas by sign · gab44" />
<meta property="og:description" content="The strategic-wisdom signature of asteroid 2 Pallas in each zodiac sign — the warrior-philosopher, the weaver, the elegant move." />
<meta property="og:type" content="website" />
<style>:root{--c1:#557237;--c2:#2f4a25;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=pallas-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#557237,#2f4a25)">⚴</div>
      <div class="meta">12 sign-specific Pallas profiles · asteroid 2 · evergreen · wisdom / strategy / pattern</div>
    </div>
    <h1>Pallas by <span class="accent">sign</span></h1>
    <p class="vibe">Pallas is asteroid 2 — Athena, the warrior-philosopher of the zodiac, the weaver. Where <a href="/gab44/eros">Eros</a> names arousal, <a href="/gab44/psyche">Psyche</a> names soul-recognition, <a href="/gab44/juno">Juno</a> names commitment, and <a href="/gab44/vesta">Vesta</a> names sacred-fire devotion, Pallas names the SEEING — the specific shape of pattern-recognition, strategy, and elegant action each sign was given. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=pallas-index">Want a Pallas-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Pallas-by-sign profiles · evergreen wisdom / strategy signature guide.
    </footer>
  </div>
</body>
</html>`
}
