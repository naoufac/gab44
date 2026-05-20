// Chariklo × sign SEO funnel — /gab44/chariklo (index) + /gab44/chariklo/{sign}
// (12 pages). Round 30 of the gab44 evergreen surface. Targets the
// centaur / sacred-enclosure / sacred-boundary keyword cluster:
// "chariklo in {sign} meaning", "{sign} chariklo", "centaur chariklo
// astrology", "chariklo sacred boundary chart". Chariklo is centaur
// 10199 — discovered 1997, the largest known centaur, and the only
// centaur with confirmed planetary rings (two narrow rings discovered
// 2013 around her ~258-km icy body). In Greek myth she is the wife of
// the wounded healer Chiron and the mother of three daughters; the
// nymph who tended the centaur of healing through his unhealing wound;
// the holder of sacred enclosure inside which the depth-work could be
// safe. Astrologically she is the body that names the protective ring,
// the boundary that holds the practice safe, the discreet container
// inside which initiation, depth-work, intimacy, or devotion can
// happen without being exposed or interrupted. Where Pholus uncorks
// the jar and lets the cascade run, Chariklo encircles the working
// space and lets the depth-form complete. Distinct keyword cluster
// from Chiron (the open wound), Pholus (the unsealing), Eris
// (deliberate disruption), Sedna (long exile), Haumea (fast
// fertility), Makemake (patient restoration). The sacred-enclosure
// centaur completes the Chiron-Pholus-Chariklo opening triad of the
// centaur lane, parallel to the Eris-Sedna-Haumea opening triad of
// the dwarf-planet quartet. Cross-funnels into
// /gab44/reading?ref=chariklo-{sign}.

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

// Per-element accent kept inside a silver-cyan / ringed-ice band so the
// surface reads as the sacred-enclosure / protective-boundary axis
// (distinct from the deep crimson Eris band, the abyssal-blue Sedna
// band, the rose-magenta Haumea band, the volcanic-basalt Makemake band,
// the amber-wine Pholus band, the gold Vertex band, the jade Hygiea
// band). Each element shifts the temperature inside the same silver-ice
// family — the colour of Chariklo's two confirmed icy rings.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#9ab2c4', c2: '#3a4858' },
  earth: { c1: '#5a7888', c2: '#1a2838' },
  air:   { c1: '#8aa0b2', c2: '#2a3848' },
  water: { c1: '#6a8a9e', c2: '#1a2838' }
}

interface CharikloProfile {
  sign: Sign
  // What kind of sacred-enclosure the Chariklo register builds in this
  // sign — the particular protective ring she draws, the kind of safe
  // working space her presence makes possible, the depth-form that can
  // complete inside her boundary.
  encloses: string
  // What the boundary protects — the practice, the partnership, the
  // depth-work, the initiation, or the devotion that needs the ring
  // around it to be able to take place at all. The Chariklo medicine
  // is never the work itself; it is the space inside which the work
  // can happen.
  protects: string
  // Big paragraph — the lived shape of Chariklo in this sign, the
  // texture of the sacred enclosure, the kind of ring she draws around
  // her people, and the depth-work she lets complete by being there.
  body: string
  // The medicine — how to work with Chariklo instead of being trapped
  // in either the chronic-fortress ("I will keep everyone out forever")
  // or the dissolved-boundary ("I will let everything in and protect
  // nothing").
  medicine: string
  // The shadow shape — the enclosure turned against itself: the
  // gatekeeper whose protection becomes its own end, the keeper of the
  // sacred container who keeps too many people out, the holder of the
  // ring who has forgotten that the ring is for the work and not for
  // her own importance.
  shadow: string
  // Approximate generational year-bands. Chariklo's orbit is ~63 years;
  // she has been transiting through Sagittarius (1990s), Capricorn
  // (mid 2000s through 2010s), and Aquarius (2017+). The per-sign
  // archetype reads as transit / chart-point / generational placement.
  band: string
}

// Chariklo sign hand-shaped meaning. Each is an honest paragraph, not
// a horoscope. Chariklo is the wife of Chiron, the keeper of his
// home-cave on Mount Pelion, the centaur with rings of her own. She
// names the discreet container inside which the long depth-work can
// be safe. Every sign has its own kind of enclosure, its own way of
// holding space, its own characteristic protective ring.
export const CHARIKLO_PROFILES: Record<Sign, CharikloProfile> = {
  aries: {
    sign: 'aries',
    encloses: 'The training ground in which the warrior can practice without being judged for the form yet. Chariklo in Aries draws the ring around the dojo, the sparring-space, the early-stage workshop in which the new fighter, founder, or leader can develop the move that does not yet have a name. The ring is the permission to be unfinished.',
    protects: 'The early courage that has not yet been tested in public. Aries-Chariklo protects the practice-room against premature exposure — the unfinished move kept private long enough to mature, the early venture given a quiet six months before the metrics start, the new leader given a year of small rooms before she takes the big one.',
    body: 'Chariklo in Aries is the trainer, mentor, or founder-of-the-training-space whose enclosure makes a generation of warriors possible. She is the coach whose dojo is sacred enough that thirty years of fighters could fail openly inside it without losing standing. She is the executive coach whose private one-on-ones are the ring inside which the new CEO can think without performing. She is the activist-elder whose weekly small meeting is the discreet enclosure where a generation of organisers learn to argue without breaking each other. The Aries-Chariklo medicine is recognising that early courage requires private practice and that someone must hold the ring or the practice cannot happen.',
    medicine: 'Identify one early-stage practitioner in your circle who needs an unwitnessed practice-space, and become the boundary they can practice inside. The Aries-Chariklo register grows in the held private training ground.',
    shadow: 'The trap is the gatekeeper-trainer — the holder of the sacred dojo who keeps it closed so long that it stops producing fighters, who confuses the prestige of the enclosure with its purpose. Real Aries-Chariklo opens the ring to those ready; the false one only guards her own door.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Aries in the 1960s.'
  },
  taurus: {
    sign: 'taurus',
    encloses: 'The body, the home, the household, the small piece of land in which a steady substance-life can take root. Chariklo in Taurus draws the ring around the kitchen, the garden, the workshop, the bedroom — the everyday spaces inside which the body and the household can grow rich without being interrupted by the extractive economy outside.',
    protects: 'The slow material life that needs to be left alone to deepen. Taurus-Chariklo protects the body\'s healing seasons, the garden\'s fallow years, the household\'s long boring stable decades, the workshop\'s patient apprentice years — every register where the work is to let substance accumulate undisturbed.',
    body: 'Chariklo in Taurus is the body-worker whose treatment room is sacred enough that decades of clients could fully drop into their physical experience inside it. She is the household elder whose home is the ring inside which an extended family can recover from the world and re-enter it more whole. She is the gardener whose garden, by being kept truly off the market, becomes the seed-bank her region depends on. She is the builder whose workshop is the discreet apprenticeship in which a craft survives. The Taurus-Chariklo medicine is treating the household / body / land as a sacred enclosure whose first job is to be left alone, not to be optimised, photographed, or monetised.',
    medicine: 'Identify one space in your stewardship that should be off the market — body, room, garden, household — and protect it from the extractive economy explicitly for the next decade. The Taurus-Chariklo register grows in the kept-off-market substance-space.',
    shadow: 'The trap is the household-as-citadel — the steward whose protective ring around the home becomes a wall against the world, whose enclosure stops being a place that returns substance to others. Real Taurus-Chariklo encloses to make abundance shareable; the false one only privatises.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Taurus in the early 1970s.'
  },
  gemini: {
    sign: 'gemini',
    encloses: 'The conversation in which something true can actually be said. Chariklo in Gemini draws the ring around the long lunch, the quiet phone call, the off-the-record interview, the supervision session, the private letter — the discreet talking-spaces inside which language can do real work without being performed for an audience.',
    protects: 'The unfinished thought that needs privacy to mature. Gemini-Chariklo protects the early draft, the half-formed idea, the disagreement that needs to be worked through one-on-one before it goes public, the term-of-art still being shaped, the consultation that needs to happen behind a closed door.',
    body: 'Chariklo in Gemini is the editor whose private feedback emails are the ring inside which a generation of writers learn to think more clearly. She is the supervisor whose hour-long sessions are the discreet container in which a junior practitioner can speak the doubt she cannot say in the team meeting. She is the friend whose long phone calls are the safe-enough talking-space in which a lifetime of un-formed thought can finally form. She is the journalist whose off-the-record conversations are the protective enclosure in which sources can risk being honest. The Gemini-Chariklo medicine is treating the private conversation as a real form, with its own integrity, distinct from public discourse — and protecting it as such.',
    medicine: 'Have one explicitly off-the-record conversation this week with someone who needs a discreet talking-space, and protect what is said inside it as a matter of practice. The Gemini-Chariklo register grows in the held private conversation.',
    shadow: 'The trap is the off-the-record-as-leverage — the conversational gatekeeper whose private channels become a way of controlling who can speak to whom, whose enclosure is in fact a sorting mechanism. Real Gemini-Chariklo holds the conversation for the speaker; the false one keeps it for herself.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Gemini in the mid 1970s.'
  },
  cancer: {
    sign: 'cancer',
    encloses: 'The family-shaped sanctuary in which the wounded can come home. Chariklo in Cancer draws the ring around the long-stay guest room, the chosen-family Sunday dinner, the elder\'s couch in the front room — the household-shaped enclosures inside which someone in collapse can be held until they recover the capacity to face the world again.',
    protects: 'The slow restoration of someone whose nervous system has been broken. Cancer-Chariklo protects the months of recovery that any deep collapse actually requires — and protects them at the level of the household, with food, with quiet, with the daily routine of a place that can be relied on, with the absence of the demand to perform recovery on a schedule.',
    body: 'Chariklo in Cancer is the mother, aunt, chosen-family elder, or housemate whose home is the sacred enclosure inside which collapsed people can recover. She is the long-game host who can take in the cousin in crisis for fourteen months without making it a story. She is the elder whose front room is, across decades, the recovery-room of choice for an entire extended family. She is the founder of the small intentional household whose explicit purpose is to be a slow-time refuge from the cycle-of-collapse-and-strive in the wider economy. The Cancer-Chariklo medicine is making the household visibly available as a refuge AND keeping its protective ring tight enough that the refuge does not get colonised by the surrounding emergency.',
    medicine: 'Designate one room or one regular meal in your household as a held-space for someone outside your immediate family who needs refuge, and keep the boundary clean. The Cancer-Chariklo register grows in the explicitly held household refuge.',
    shadow: 'The trap is the rescuer-household — the family elder whose enclosure draws in too many crises and dissolves under the weight, whose protective ring breaks because she could not say no to one more rescue. Real Cancer-Chariklo holds the boundary that lets her keep helping; the false one absorbs until she can no longer help anyone.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Cancer in the early 1980s.'
  },
  leo: {
    sign: 'leo',
    encloses: 'The rehearsal room. The early studio. The salon. The private workshop in which the artist or performer can do the un-finished work that is not yet ready for the stage. Chariklo in Leo draws the ring around the creative ground from which the public work eventually emerges, and protects it from the early audience that would distort the work in formation.',
    protects: 'The early creative process from premature exposure. Leo-Chariklo protects the year of un-photographed studio work, the workshop in which the play is still being built, the private music sessions before the album, the practice in which the artist learns the craft without anyone watching. The work needs the ring around it to mature into what it will become.',
    body: 'Chariklo in Leo is the studio elder, the patron, the rehearsal-room keeper, the workshop-runner whose protective enclosure makes a body of public work possible. She is the gallerist whose backroom is the year-long held space in which young artists prepare their first show. She is the theatre director whose closed rehearsal rooms are the sacred container inside which actors can be bad enough to discover what they are capable of. She is the mentor-elder whose private salon is the discreet enclosure in which a generation of writers test what they are not yet ready to publish. The Leo-Chariklo medicine is honouring the difference between rehearsal and performance — and being someone who can hold the rehearsal-space against premature exposure.',
    medicine: 'Hold one rehearsal-shaped space in your domain — studio, workshop, salon, private session — that is explicitly off-stage and protected as such. The Leo-Chariklo register grows in the held un-photographed creative ground.',
    shadow: 'The trap is the patron-as-gatekeeper — the studio elder whose protective ring becomes a way of controlling which artists get to rehearse, whose enclosure starts to function as a curating veto. Real Leo-Chariklo opens the rehearsal space generously; the false one keeps it as her own court.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Leo in the late 1980s.'
  },
  virgo: {
    sign: 'virgo',
    encloses: 'The clinic, the workshop, the lab, the apprentice-ship — the working spaces in which careful technical practice can be done without the constant interruption of the wider system\'s urgency. Chariklo in Virgo draws the ring around the room in which the craftswoman, doctor, technician, or maintainer can give one piece of work the full quality of her attention.',
    protects: 'The quality of careful work from the press of throughput. Virgo-Chariklo protects the patient half-hour visit, the long bench-test, the careful diagnostic session, the maintenance window in which the system can actually be fixed rather than patched — every register where the work needs to take the time it requires and the throughput culture wants to compress it.',
    body: 'Chariklo in Virgo is the clinician, technician, craftswoman, or maintainer whose protective ring around the working space lets careful practice survive in a throughput-driven world. She is the doctor whose practice is structured so that each patient gets the actual time their case requires. She is the master craftsperson whose workshop is held against the gig-economy compression of her field. She is the engineer whose insistence on real maintenance windows keeps a critical system running for thirty years instead of failing in three. She is the apprentice-keeper whose careful one-on-one transmission of practical knowledge is the only reason the field still has practitioners. The Virgo-Chariklo medicine is treating careful working time as a sacred enclosure that has to be defended against the surrounding pressure to compress it.',
    medicine: 'Hold one working window in your week — clinic hour, lab session, maintenance window, apprentice session — as explicitly protected against the throughput pressure. Defend it. The Virgo-Chariklo register grows in the held careful-work window.',
    shadow: 'The trap is the perfectionist-in-the-tower — the practitioner whose protective ring around her own working time becomes a refusal of any external accountability, whose enclosure starts to function as un-interruptibility-as-status. Real Virgo-Chariklo defends the time for the work\'s sake; the false one defends it for the autonomy.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Virgo in the late 1980s.'
  },
  libra: {
    sign: 'libra',
    encloses: 'The two-person sanctuary. The marriage. The deep friendship. The therapeutic alliance. The mediation room. Chariklo in Libra draws the protective ring around the relational dyad — the discreet two-person space inside which one human can fully be in honest, careful relation to another, undisturbed by the outside circle.',
    protects: 'The relational depth that requires protection from the surrounding network. Libra-Chariklo protects the long marriage from the over-intrusion of friend-group commentary, the therapy alliance from the surrounding family, the close friendship from the social-media exposure of every honest exchange — every register where two people doing real work together need an enclosure to do it inside.',
    body: 'Chariklo in Libra is the relational steward, partner, therapist, mediator, or friend whose protective ring around the dyad lets relational depth actually develop. She is the long-married elder whose marriage is the visible model of what a held two-person enclosure can become across decades. She is the therapist whose room is the safe enough container in which her client can risk what cannot be risked anywhere else. She is the mediator whose careful confidentiality is the reason the parties can actually negotiate. She is the friend whose word is good enough that two-person honesty between you is safe across years. The Libra-Chariklo medicine is taking the dyad seriously as a structural form with its own integrity — and protecting it accordingly.',
    medicine: 'Identify one important two-person relationship in your life and explicitly negotiate the protective ring around it: what stays inside, what does not. The Libra-Chariklo register grows in the explicitly held dyad.',
    shadow: 'The trap is the dyad-as-enmeshment — the partner whose protective ring around the two-person relationship becomes a wall against everyone else, whose enclosure starts to isolate rather than to deepen. Real Libra-Chariklo encloses to deepen; the false one encloses to possess.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Libra in the early 1990s.'
  },
  scorpio: {
    sign: 'scorpio',
    encloses: 'The depth-work container. The therapy room. The ritual circle. The bedroom. The grief-room. Chariklo in Scorpio draws the protective ring around the depth-spaces inside which the dark register — sex, grief, fear, initiation, the dying body, the shadow material — can be met with the seriousness it requires, without spilling into the surrounding social field.',
    protects: 'The depth-work itself. Scorpio-Chariklo protects the integrity of the therapeutic, ritual, sexual, or grief-work container — the closed door, the explicit confidentiality, the held silence, the sacred boundary that makes it safe enough for the depth-material to actually arise. Without the ring, the depth-work cannot happen; with the ring, it can.',
    body: 'Chariklo in Scorpio is the depth-worker, therapist, ritualist, sex-worker, grief-keeper, or hospice elder whose protective enclosure makes serious depth-work possible. She is the trauma-therapist whose closed-door confidentiality is the load-bearing wall of her client\'s capacity to remember. She is the funeral celebrant whose ritual circle is the discreet container inside which the family can finally let the body be dead. She is the sex-educator or sex-worker whose held boundaries are the reason the depth-encounter is safe rather than re-traumatising. She is the hospice nurse whose protected room is the threshold inside which dying can be allowed to be itself. The Scorpio-Chariklo medicine is naming the depth-container as the load-bearing structure of the whole practice — and being someone whose word about confidentiality, boundary, and ritual frame can be relied on.',
    medicine: 'In any depth-work in your life — therapeutic, ritual, sexual, grief — name the boundaries of the container explicitly with the people inside it, and keep your word about them across years. The Scorpio-Chariklo register grows in the kept depth-container.',
    shadow: 'The trap is the gatekeeper of depth-knowledge — the depth-worker whose protective ring becomes a refusal to ever transmit what she knows, whose enclosure becomes the brand. Real Scorpio-Chariklo holds the container for the work; the false one only holds it for her own importance.',
    band: 'Read by transit and chart-point placement only; Chariklo last passed Scorpio in the mid 1990s.'
  },
  sagittarius: {
    sign: 'sagittarius',
    encloses: 'The teaching-line. The seminary. The ashram. The graduate seminar. The scholarly community. Chariklo in Sagittarius draws the protective ring around the long-form teaching spaces inside which a philosophical, religious, or scholarly tradition can actually transmit itself across generations.',
    protects: 'The integrity of the teaching from the pressure to popularise. Sagittarius-Chariklo protects the closed seminar, the multi-year retreat, the long-form study circle, the lineage transmission — every register in which a serious teaching tradition needs the protective container to maintain its rigor against the temptation to convert into shareable content.',
    body: 'Chariklo in Sagittarius is the teacher, lineage-holder, scholar, or community-keeper whose protective enclosure lets a tradition actually transmit. She is the rabbi / imam / priest / teacher whose long-form Sunday-after-Sunday teaching circle is the discreet container in which a community\'s adults learn how to think. She is the philosophy-department elder whose seminar across decades produces the next generation of careful thinkers. She is the lineage-holder whose closed retreat is the protective ring inside which a depth-teaching can be transmitted intact rather than diluted into wellness content. She is, structurally, the wife-of-Chiron whose home-cave on the mountain hosted the heroic apprentices whose teachers no city would risk having visit. The Sagittarius-Chariklo medicine is treating the teaching-line as a real protective structure that requires explicit rules of enclosure, not just good intentions.',
    medicine: 'In any teaching role you hold, name explicitly what stays inside the room and what does not, and treat the enclosure as a formal commitment rather than a vibe. The Sagittarius-Chariklo register grows in the explicitly framed teaching container.',
    shadow: 'The trap is the closed-lineage-as-status — the teacher whose protective ring around her tradition becomes a vehicle for cultural capital, whose enclosure performs as exclusivity. Real Sagittarius-Chariklo opens the teaching to those ready; the false one only enjoys the velvet rope.',
    band: 'Chariklo passed Sagittarius through the late 1990s — including her own discovery year (1997) — and has since moved through Capricorn and into Aquarius.'
  },
  capricorn: {
    sign: 'capricorn',
    encloses: 'The institutional-enough container in which careful long-tenure work can survive the pressure of the surrounding system. Chariklo in Capricorn draws the protective ring around the small-but-legitimate institution, the foundation, the long-form fellowship, the trust — the structural enclosures inside which long-form work can outlast the changing political and market weather.',
    protects: 'The long-form work from the short-cycle pressure of the surrounding institutional weather. Capricorn-Chariklo protects the multi-decade fellowship, the foundation\'s endowment, the long-running journal, the obscure but rigorous standards body — every register where careful institutional structure is the load-bearing condition for serious work.',
    body: 'Chariklo in Capricorn is the institution-builder, board-chair, foundation-officer, or trust-steward whose protective structure lets long-form work survive. She is the small-foundation officer whose careful by-laws keep a research institute funded and free for forty years. She is the board chair whose protective procedural discipline keeps a small organisation\'s mission un-corrupted across multiple director changes. She is the trust steward whose patient legal architecture keeps a piece of land in commons across generations. She is the standards-body editor whose protective enclosure around the document-process keeps a critical interoperability standard honest. She has been transiting Capricorn since the mid 2000s. The Capricorn-Chariklo medicine is treating institutional structure as a protective ring that has to be drawn carefully and maintained or the work inside it does not survive.',
    medicine: 'For any institutional structure in your authority, audit whether its protective architecture is still load-bearing, and reinforce or redesign it as required. The Capricorn-Chariklo register grows in the carefully maintained institutional enclosure.',
    shadow: 'The trap is the procedural fortress — the institution-builder whose protective architecture becomes its own end, whose by-laws become a reason the institution cannot do anything new. Real Capricorn-Chariklo holds the structure for the mission; the false one holds it for the structure.',
    band: 'Chariklo transited Capricorn from the mid 2000s through ~2017.'
  },
  aquarius: {
    sign: 'aquarius',
    encloses: 'The civic / network / commons enclosure. The protocol governance body. The commons trust. The moderation team. The civic federation. Chariklo in Aquarius draws the protective ring around the civic and network-scale spaces inside which the public-good work can happen without being captured by the surrounding extractive pressures.',
    protects: 'The integrity of the commons and the network from capture. Aquarius-Chariklo protects the community circle from being colonised, the open-source maintainer team from being absorbed by a single company\'s interests, the moderation circle from political distortion, the federated community from the gravitational pull of centralisation — every register in which the protective ring around a commons is the load-bearing condition for its survival.',
    body: 'Chariklo in Aquarius is the contemporary civic / network / commons steward whose protective enclosure lets a commons survive the pull toward capture. She is the open-source-foundation officer whose careful governance kept a critical project from being silently absorbed by its largest corporate sponsor. She is the moderator-elder whose protective ring around her community lets honest discussion continue when every other equivalent space has collapsed into broadcast. She is the civic-federation steward whose patient relational work across local nodes keeps the network distributed against the gravitational pull of one big platform. She has been transiting Aquarius since around 2017 — through the years in which the question of who protects the commons has become the central political question of the age. The Aquarius-Chariklo medicine is treating the protective ring around the commons / network as a serious civic-architectural job that requires explicit governance, not just good faith.',
    medicine: 'For any commons or network you participate in, identify what protects it from capture and contribute concrete labour to that protection — moderation, governance, code, communication. The Aquarius-Chariklo register grows in the actively held commons enclosure.',
    shadow: 'The trap is the moderator-as-overlord — the commons steward whose protective ring becomes a gate she alone controls, whose enclosure starts to function as personal authority. Real Aquarius-Chariklo holds the boundary in service of the commons; the false one holds it in service of herself.',
    band: 'Chariklo entered Aquarius around 2017 and has been transiting the sign through the late 2010s and into the 2020s.'
  },
  pisces: {
    sign: 'pisces',
    encloses: 'The contemplative cell. The retreat house. The dream-keeping circle. The mystical lineage. Chariklo in Pisces draws the protective ring around the practice spaces inside which contemplative, mystical, dream, and devotional work can actually deepen — distinct from the wellness-product version of those same forms.',
    protects: 'The depth of the contemplative / mystical practice from the marketplace. Pisces-Chariklo protects the long retreat, the silent meditation hall, the closed dream circle, the un-published mystical lineage — every register in which the practice needs to be held outside the marketplace in order to be itself.',
    body: 'Chariklo in Pisces is the contemplative elder, retreat keeper, dream worker, mystical lineage holder, or hospice presence whose protective ring keeps depth-practice from being colonised by the surrounding market. She is the abbess whose retreat house has, across her tenure, been the safe-enough container inside which a generation of practitioners deepened beyond what their busy lives allowed. She is the dream-worker whose closed circle has held weekly across decades and inside which a small group of dreamers have, together, learned what dreaming actually is. She is the mystic whose discreet teaching to a few students is the reason a lineage will continue at all into the next century. The Pisces-Chariklo medicine is honouring that mystical / contemplative depth requires the protective ring around it — the closed door, the silent room, the un-publishable circle — and being someone who can be the keeper of that ring.',
    medicine: 'Hold or protect one explicitly off-market contemplative space in your life — retreat day, silent hour, closed circle, un-published practice — for at least the next year. The Pisces-Chariklo register grows in the held off-market contemplative space.',
    shadow: 'The trap is the contemplative gatekeeper — the retreat keeper whose protective ring becomes a way of curating who is spiritual enough, whose enclosure starts to function as exclusion. Real Pisces-Chariklo holds the ring around the practice; the false one only holds it around herself.',
    band: 'Read by transit and chart-point placement only; Chariklo will enter Pisces in the 2020s late period.'
  }
}

export const CHARIKLO_SIGNS = SIGNS

export function isCharikloSign(s: string): s is Sign {
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
  .meet-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
  .meet-list li {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 14px; font-size: 15px; line-height: 1.55;
  }
  .meet-list .marker { color: var(--accent); font-weight: 700; margin-right: 8px; }
  .shadow-list .marker { color: #5a7888; }
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

export function charikloPageHTML(sign: Sign): string {
  const p = CHARIKLO_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Chariklo in ${Sign}`

  // Other Chariklo signs strip — discover the other 11. Glyph ⊚ (a
  // ring around an inner body — the visual signature of Chariklo, the
  // only known centaur with confirmed planetary rings, and the visual
  // signature of this whole sacred-enclosure register). Distinct from
  // ⊛ Eris, ⏀ Sedna, ✺ Haumea, ◉ Makemake, ⚱ Pholus, ⚸ Lilith,
  // ⚷ Chiron, ☊ North Node, ◈ Vertex, and the asteroid set.
  const otherChariklo = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/chariklo/${s}">⊚ Chariklo ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Chariklo deepens the centaur lane, so the side
  // strip leads with her two centaur siblings (Chiron the open wound,
  // Pholus the unsealing), then surfaces the dwarf-planet quartet
  // (her thematic neighbours in the trans-Saturnian shadow tier),
  // then the asteroid graph and the chart-point lane.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur sister — the breach Chariklo holds against)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur sister — the foreknowing)</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (deliberate disruption)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (long exile)</a>`,
    `<a href="/gab44/haumea/${sign}">✺ Haumea in ${Sign} (fast multiplication)</a>`,
    `<a href="/gab44/makemake/${sign}">◉ Makemake in ${Sign} (patient restoration)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/chariklo">all 12 Chariklo signs</a>`
  ].join('')

  const title = `${headline} — centaur 10199, the sacred-enclosure / sacred-boundary axis · gab44`
  const description = `${headline}: how Chariklo (centaur 10199, discovered 1997, the only known centaur with rings) carries the sacred-enclosure / protective-boundary register in this sign. ${p.encloses} ${p.protects} The full archetype with medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Chariklo', item: `${SITE_URL}/gab44/chariklo` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/chariklo/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/chariklo/${sign}`,
        about: `${headline} — sacred-enclosure / sacred-boundary axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/chariklo/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.encloses)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/chariklo/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%8A%9A%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/chariklo">all 12 Chariklo signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/chiron/${sign}">Chiron in ${Sign}</a>
      <a href="/gab44/pholus/${sign}">Pholus in ${Sign}</a>
      <a href="/gab44/reading?ref=chariklo-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⊚ ${sm.symbol}</div>
      <div class="meta">Chariklo ⊚ ${Sign} · centaur 10199 · the sacred-enclosure / sacred-boundary axis</div>
    </div>
    <h1><span class="accent">Chariklo</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.encloses)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⊚ Chariklo in ${Sign} — what she encloses</h3>
        <p>${escapeHtml(p.encloses)}</p>
      </div>
      <div class="panel">
        <h3>⊚ Chariklo in ${Sign} — what the boundary protects</h3>
        <p>${escapeHtml(p.protects)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Chariklo in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">⊚</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Chariklo in ${Sign} as the closed gate</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Chariklo</span><span class="v">⊚ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">centaur 10199 (discovered 1997)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~63-year solar orbit, between Saturn and Uranus</span></div>
      <div class="row"><span class="k">Distinguishing feature</span><span class="v">the only known centaur with confirmed planetary rings (two narrow rings, ~250-km icy body)</span></div>
      <div class="row"><span class="k">Named for</span><span class="v">the nymph Chariklo, wife of Chiron, mother of three daughters</span></div>
      <div class="row"><span class="k">Sisters</span><span class="v">Chiron — the open wound · Pholus — the unsealing</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">sacred enclosure / protective boundary / the held container</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=chariklo-${sign}">Get a $9 Chariklo-aware reading →</a>
    </div>

    <h2>The other 11 Chariklo signs</h2>
    <div class="strip">${otherChariklo}</div>

    <h2>Related — your sacred-enclosure cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · sacred-enclosure / sacred-boundary axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function charikloIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = CHARIKLO_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/chariklo/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⊚ ${sm.symbol}</div>
      <div class="name">Chariklo in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · the sacred enclosure</div>
      <div class="vibe-mini">${escapeHtml(p.encloses)}</div>
    </a>`
  }).join('')

  const title = `Chariklo by sign — centaur 10199, the sacred-enclosure / sacred-boundary axis · gab44 ✨`
  const description = `Chariklo in {sign} — the sacred-enclosure / protective-boundary signature across all 12 zodiac signs. The third centaur (10199 Chariklo, discovered 1997), the wife of Chiron, the only known centaur with confirmed planetary rings. The astrology of the held container — the boundary inside which depth-work, intimacy, initiation, or careful practice can complete. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Chariklo completes the centaur opening triad
  // with Chiron and Pholus (already shipped) and pairs structurally
  // with the dwarf-planet quartet in the wider trans-Saturnian shadow
  // tier. After Chariklo the natural next centaurs are Nessus
  // (abuse-cycle), Asbolus (the seer), Hylonome (the centaur's grief).
  const navStrip = [
    `<a href="/gab44/chiron">⚷ Chiron by sign (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur sister — the breach Chariklo holds against)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur sister — the foreknowing)</a>`,
    `<a href="/gab44/eris">⊛ Eris by sign (deliberate disruption)</a>`,
    `<a href="/gab44/sedna">⏀ Sedna by sign (long exile / patient return)</a>`,
    `<a href="/gab44/haumea">✺ Haumea by sign (fast fertility / fragmentation)</a>`,
    `<a href="/gab44/makemake">◉ Makemake by sign (patient restoration)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign (the harvest mother)</a>`,
    `<a href="/gab44/vesta">⚶ Vesta by sign (the sacred fire)</a>`,
    `<a href="/gab44/hygiea">✦ Hygiea by sign</a>`,
    `<a href="/gab44/pallas">⚴ Pallas by sign</a>`,
    `<a href="/gab44/juno">⚵ Juno by sign</a>`,
    `<a href="/gab44/eros">⚭ Eros by sign</a>`,
    `<a href="/gab44/psyche">❋ Psyche by sign</a>`
  ].join('')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chariklo" />
<meta property="og:title" content="Chariklo by sign · gab44" />
<meta property="og:description" content="The sacred-enclosure / sacred-boundary signature of centaur 10199 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#5a7888;--c2:#1a2838;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/chiron">⚷ Chiron</a>
      <a href="/gab44/pholus">⚱ Pholus</a>
      <a href="/gab44/nessus">⛓ Nessus</a>
      <a href="/gab44/eris">⊛ Eris</a>
      <a href="/gab44/reading?ref=chariklo-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#5a7888,#1a2838)">⊚</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · centaur 10199 (discovered 1997, the only centaur with rings)</div>
    </div>
    <h1>Chariklo <span class="accent">by sign</span></h1>
    <p class="vibe">Chiron is the open wound. Pholus is the small first move that cannot be unmade. Chariklo is the wife of Chiron, the mother of three, the only centaur with rings of her own — the body that names the protective enclosure inside which the depth-work can be safe enough to complete. She completes the opening triad of the centaur lane. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Chariklo completes the centaur opening triad she shares with Chiron (the open wound) and Pholus (the unsealing) — wound, cascade, and the protective ring around the working space — and pairs structurally with the dwarf-planet quartet (Eris, Sedna, Haumea, Makemake) in the wider trans-Saturnian shadow tier. Read the centaur trio together for the wound-and-the-container axis, then open into the dwarfs for the deeper shadow-and-creation map.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=chariklo-index">Want a deeper, chariklo-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Chariklo-by-sign pages · evergreen · the sacred-enclosure and sacred-boundary axis.
    </footer>
  </div>
</body>
</html>`
}
