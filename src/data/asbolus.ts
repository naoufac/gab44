// Asbolus × sign SEO funnel — /gab44/asbolus (index) + /gab44/asbolus/{sign}
// (12 pages). Round 32 of the gab44 evergreen surface. Targets the
// centaur / prophetic / foreknowledge / augury keyword cluster:
// "asbolus in {sign} meaning", "{sign} asbolus", "centaur asbolus
// astrology", "asbolus seer chart", "prophetic centaur astrology".
// Asbolus is centaur 8405 — discovered 1995, the fifth named centaur
// (after Chiron, Pholus, Chariklo, Nessus). In Greek myth he is the
// seer-centaur who, by reading the flight of birds and the patterns
// in nature, foreknew that the centaur Caeneus' wedding feast would
// end in catastrophe; he warned the others not to come, was ignored,
// and watched the predicted disaster unfold. The augur whose accuracy
// did not include the social authority to be heeded. Astrologically
// Asbolus names the body of foreknowledge — the seeing of what is
// coming, the reading of the patterns before they land, the burden
// of being the one who can name what is about to happen and who is
// often not believed until after. Distinct from Chiron (the wound),
// Pholus (the cascade-already-running), Chariklo (the held container),
// Nessus (the abuse-cycle and the cycle-breaking), Eris (deliberate
// disruption), Sedna (long exile), Haumea (fast multiplication),
// Makemake (patient restoration). Pairs with Vertex (the destined
// encounter / the moment of fated arrival) on the foreknowledge /
// inevitability register: Vertex is the destined event itself,
// Asbolus is the one who saw it coming. Cross-funnels into
// /gab44/reading?ref=asbolus-{sign}.

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

// Per-element accent kept inside a twilight-and-augur-gold band so the
// surface reads as the prophetic / foreknowledge axis (distinct from
// the bruise-purple Nessus band, the silver-cyan Chariklo band, the
// amber-wine Pholus band, the indigo Chiron band, the deep crimson
// Eris band, the abyssal-blue Sedna band, the rose-magenta Haumea
// band, the volcanic-basalt-green Makemake band, the gold Vertex band,
// the jade Hygiea band). Each element shifts the temperature inside
// the same twilight-with-gold-augury family — the colour of the sky
// at the hour the augur reads the flight of birds.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ddb84a', c2: '#2a1a08' },
  earth: { c1: '#b89a3a', c2: '#2a2010' },
  air:   { c1: '#c8a850', c2: '#38280c' },
  water: { c1: '#1a3a5a', c2: '#050f1c' }
}

interface AsbolusProfile {
  sign: Sign
  // What kind of foreknowledge this register specifically delivers —
  // the particular pattern that the Asbolus-in-this-sign placement
  // reads early, the shape of the warning the seer carries, the kind
  // of "I can see this is going to happen" that this sign-flavour
  // shapes.
  foresees: string
  // The cost of the foreseeing — the specific kind of social, relational,
  // or institutional disregard that this sign's seer pays. Asbolus is
  // never about accurate prediction in the abstract; he is about the
  // gap between the accuracy of the foreknowledge and the listener's
  // willingness to act on it.
  cost: string
  // Big paragraph — the lived shape of Asbolus in this sign, the
  // texture of the foreknowing, the specific patterns the seer reads,
  // the burden of being the one who saw it before it landed, AND the
  // concrete medicine for the seer.
  body: string
  // The medicine — how to work with Asbolus instead of being trapped
  // in either the chronic Cassandra-resentment ("no one ever listens")
  // or the silent withdrawal ("I will stop saying what I see"). The
  // seer has structural moves available: what to write down, who to
  // tell, which records to keep, what counts as the right moment to
  // speak.
  medicine: string
  // The shadow shape — the seer turned away from the discipline of
  // seeing: the chronic prophet of doom whose accuracy serves her
  // self-image more than the people she could warn, the seer who
  // hoards the foreknowledge for credit later, the augur whose
  // un-actionable framing is itself the obstacle to being heeded.
  shadow: string
  // Approximate generational year-bands. Asbolus's orbit is ~76 years
  // (between Saturn and Uranus). Discovered 1995. He has transited
  // Sagittarius (1990s), Capricorn (early 2000s through 2010s), and
  // Aquarius (mid 2010s onward). The per-sign archetype reads as
  // transit / chart-point / generational placement.
  band: string
}

// Asbolus sign hand-shaped meaning. Each is an honest paragraph, not
// a horoscope. Asbolus is the centaur whose accurate reading of the
// patterns in nature foreknew the catastrophe his peers were walking
// into; whose warning was ignored; who watched it land. Each sign has
// its own kind of pattern, its own kind of foreknowledge, its own
// characteristic gap between accuracy and being-heard.
export const ASBOLUS_PROFILES: Record<Sign, AsbolusProfile> = {
  aries: {
    sign: 'aries',
    foresees: 'The first-mover who can see the conflict coming six months before it lands. Asbolus in Aries reads the early signals in a team, organisation, movement, or political moment — the small posture-shifts, the early fights, the quiet build-up — and can map the full conflict that is about to erupt while everyone else is still calling it interpersonal friction.',
    cost: 'The cost is the brittle authority of being early. The Aries-Asbolus seer is named alarmist or exaggerator until the predicted conflict arrives, at which point the credit usually goes to those who only named it once it was unmissable. The seer, having already spent the political capital, is rarely in the room when the strategy gets set.',
    body: 'Asbolus in Aries names the early-warning seer in conflict and competition. He is the operations manager who, six months before the founder collapse, has already drawn the exact map of how the failure will unfold and is told by everyone in the room that he is being dramatic. He is the strategist whose memo two years before the war reads, in retrospect, as if it had been written after. He is the activist elder who could see the movement\'s fracture coming and named it in three letters that the rest of the leadership filed and forgot. The Aries-Asbolus medicine is to write the foreknowledge down with date-stamps, share it with a trusted second witness in advance, and make peace with not being credited — let the record speak when the predicted conflict arrives, and do not waste the early authority on argument with those who cannot yet see.',
    medicine: 'When you can see a conflict coming, write it down with the date, share it with one trusted second witness, and stop arguing the case with those who cannot yet see. Let the record arrive when the conflict does. The Aries-Asbolus register grows in the dated, witnessed early read.',
    shadow: 'The trap is the I-told-you-so-as-identity — the seer whose accuracy becomes a tool for posthoc dominance over those who did not believe her, whose foresight starts to function as a way to stay above the people she could have actually helped. Real Aries-Asbolus serves the people; the false one only collects the receipts.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Aries in the late 1970s.'
  },
  taurus: {
    sign: 'taurus',
    foresees: 'The material decline that everyone else is treating as a bad season. Asbolus in Taurus reads the slow patterns in soil, body, household economy, market, region — and can map the multi-year extraction cycle whose downstream is the depletion no one wants to admit is structural. The early-soil seer; the body that knew before the diagnosis; the regional planner who saw the housing-market unwind ten years out.',
    cost: 'The cost is a particular kind of slow disregard. Taurus-Asbolus warnings sound like complaints to anyone whose attention is on the next quarter, the next harvest, the next sale; the seer is treated as someone who fails to appreciate what the season is currently producing. By the time the foreseen depletion is unmistakable, the seer is usually exhausted from a decade of being mistaken for a pessimist.',
    body: 'Asbolus in Taurus names the long-cycle material seer. He is the regenerative-agriculture elder who could read the over-grazing pattern of his region in 1985 and knew exactly which water tables would fail by 2025. He is the body-worker who could feel her client\'s structural collapse two years before the diagnostic imaging confirmed it. He is the regional planner whose memos through three election cycles were the un-read forecast of the housing-market unwind that arrived on schedule. The Taurus-Asbolus medicine is the long, careful, dated record — soil samples, body data, market indicators — and the discipline of speaking only at the moments the system can actually hear, while building the alternative practice that does not depend on being heeded.',
    medicine: 'When you can see a long-cycle material decline, keep dated records, build the alternative practice in parallel without waiting for permission, and speak at the few moments the system can hear. The Taurus-Asbolus register grows in the dated record + the parallel practice.',
    shadow: 'The trap is the chronic-Cassandra of decline — the seer whose accurate warnings become a permanent cultural posture of "everything is degraded," whose foresight is no longer paired with any constructive practice. Real Taurus-Asbolus builds the alternative; the false one only mourns the inevitable.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Taurus in the early 1980s.'
  },
  gemini: {
    sign: 'gemini',
    foresees: 'The discourse turn three years before it reaches the mainstream. Asbolus in Gemini reads the early signals in language and culture — the strange new term in a subculture, the shift in framing in obscure essays, the half-formed argument that is starting to have legs — and can map the full cultural conversation that the wider field will be having long before it arrives.',
    cost: 'The cost is the sound of irrelevance. The Gemini-Asbolus seer\'s foresights, in their own moment, look like concern about the wrong thing — too niche, too obscure, too interior to the small circles where the early signal is visible. By the time the foreseen discourse turn is in headlines, the seer\'s essay from three years prior is unread; the credit goes to those who named the turn after it was undeniable.',
    body: 'Asbolus in Gemini names the early-discourse seer. He is the journalist whose 2018 essay about the obscure subculture\'s framing language was the unread blueprint of the 2024 mainstream debate. He is the academic whose long footnote in 1992 was the foundation of an argument the field would adopt as common sense in 2018. He is the editor whose careful early commissions across a decade prepared a public intellectually for a conversation no one yet knew they would need to have. The Gemini-Asbolus medicine is to publish the early read at the right scale — not in the major outlet that is not yet ready to print it, but in the small careful venue whose archives the future research will reach back to find.',
    medicine: 'Publish your early reads at the small, archived, search-able scale they belong to — not in the mainstream venue not yet ready, not in the ephemeral platform that will lose them. The Gemini-Asbolus register grows in the carefully-archived early publication.',
    shadow: 'The trap is the prophetic-essayist as chronic complainer about being ignored — the writer whose body of early-correct work becomes a long résumé of grievance against the field that did not hear her in time. Real Gemini-Asbolus keeps publishing; the false one only keeps the grievance ledger.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Gemini in the mid 1980s.'
  },
  cancer: {
    sign: 'cancer',
    foresees: 'The family-system collapse five years before it lands. Asbolus in Cancer reads the long-pattern signals inside a family, lineage, household, or chosen-family circle — the cumulative weight of un-named dynamics, the slow accumulation of unprocessed grief, the multi-generational silence that is about to break — and can map the rupture that the family-system is moving toward.',
    cost: 'The cost is to be named the family disturber. The Cancer-Asbolus seer is told for years that she is exaggerating, dramatizing, projecting her own discomfort onto a stable system, until the foreseen rupture arrives and the family\'s organising story has to incorporate, after the fact, the warnings she was punished for giving.',
    body: 'Asbolus in Cancer names the family-system seer. She is the cousin who could see the marriage was going to end on the timeline it ended, and who said so quietly to one trusted aunt seven years out. She is the daughter who could read the pattern of her parents\' aging and knew which adult-child would have to step in two years before the medical event. She is the chosen-family elder whose careful early warnings about a member\'s deepening crisis were dismissed by the group as alarmism until the crisis arrived. The Cancer-Asbolus medicine is to entrust the foreknowledge to one or two trusted witnesses, write down the dated read, and prepare the practical scaffolding for the foreseen event without trying to convince the family-system itself — which often cannot hear until afterward.',
    medicine: 'Entrust the family-system foreknowledge to one or two trusted witnesses with dates, prepare the practical scaffolding (logistics, finances, childcare, eldercare) before it is needed, and stop trying to convince the larger system. The Cancer-Asbolus register grows in the witnessed read + the prepared scaffolding.',
    shadow: 'The trap is the seer-as-family-prosecutor — the relative whose foresights become a continuous indictment of the family\'s denial, whose accuracy is wielded as moral authority rather than offered as care. Real Cancer-Asbolus carries the read with grief, not with vindication; the false one only collects the I-told-you-sos.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Cancer in the late 1980s.'
  },
  leo: {
    sign: 'leo',
    foresees: 'The public figure\'s coming fall the season before it lands. Asbolus in Leo reads the early-signal patterns in a celebrity, executive, performer, or movement-leader\'s public arc — the strain in the recent appearances, the over-leveraging of the brand, the slip in the previously perfect surface — and can map the public collapse the wider audience is not yet able to see coming.',
    cost: 'The cost is the appearance of envy. The Leo-Asbolus seer\'s early read on a public figure is taken, by the figure\'s loyalists and by neutral observers, as a smaller person\'s wishful thinking about a larger one\'s downfall. By the time the predicted fall arrives the seer is either silently vindicated or actively framed as having helped pull it about.',
    body: 'Asbolus in Leo names the early-decline seer in the spotlight. He is the entertainment-industry elder who could see the star\'s upcoming public collapse three films before it landed and said so privately to one trusted producer. He is the political operative who could read the rising leader\'s structural fragility two years before the scandal broke. He is the music-critic whose careful 2002 essay was the unread forecast of an artist\'s 2007 unraveling. The Leo-Asbolus medicine is to refuse the public version of the foresight (which always reads as schadenfreude or rivalry) and to keep the dated private record for the small circle of people whose work depends on accurate forecasts of public arcs — agents, succession-planners, board members preparing the succession plan no one will admit needs preparing.',
    medicine: 'Keep the dated private record of the public figure you can see is approaching collapse; share it with the small circle whose work requires the read; refuse the public version. The Leo-Asbolus register grows in the privately-shared accurate succession-planning read.',
    shadow: 'The trap is the early-forecaster-as-rival — the seer whose foresights about a public figure are coloured, even slightly, by the personal stake in the figure\'s fall, whose accuracy contains a percentage of wish. Real Leo-Asbolus reads the arc with neutral attention; the false one reads it with the thumb on the scale.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Leo in the early 1990s.'
  },
  virgo: {
    sign: 'virgo',
    foresees: 'The system failure pattern six to twelve months before the incident. Asbolus in Virgo reads the early signals in a clinical, technical, regulatory, or operational system — the rising rate of small near-misses, the pattern in the maintenance log, the configuration drift, the staffing gap — and can map the major failure the system is moving toward while everyone else is still treating the small near-misses as random.',
    cost: 'The cost is the sound of nitpicking. The Virgo-Asbolus seer\'s warnings are heard as a careful person being too careful, as someone who fails to appreciate the difficulty of the actual operating environment. By the time the foreseen system failure arrives, the audit of the prior six months\' near-misses confirms exactly the pattern she had been describing, and the question of who escalated when becomes legally and politically central.',
    body: 'Asbolus in Virgo names the system-pattern seer. He is the senior nurse whose escalation memo three months before the patient-safety event is the document the inquiry rebuilds the case from. He is the site-reliability engineer whose internal post-mortem on the small September outage was the unread blueprint of the catastrophic January one. He is the regulatory inspector whose careful early notes across two years became, after the fact, the load-bearing evidence in the public hearing. The Virgo-Asbolus medicine is the discipline of formal escalation: the dated memo, the named recipients, the second-line copy, the version-controlled record. The seer in this register is most useful when the foreknowledge is properly filed, because filed records survive personnel changes; verbal warnings do not.',
    medicine: 'Always escalate system-failure foreknowledge in writing: dated memo, named recipients, second-line copy, version-controlled record. Filed records survive personnel changes; verbal warnings do not. The Virgo-Asbolus register grows in the formally filed early read.',
    shadow: 'The trap is the meticulous-record-keeper as risk-shedder — the seer whose careful escalations are designed primarily to put the legal liability on someone else when the failure arrives. Real Virgo-Asbolus escalates to prevent; the false one only escalates to be defensible.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Virgo in the early 1990s.'
  },
  libra: {
    sign: 'libra',
    foresees: 'The relationship\'s ending three years before it ends. Asbolus in Libra reads the early-signal patterns inside a marriage, partnership, friendship, or close working relationship — the small reciprocity-gaps, the subtle drift in shared meaning, the increase in the kind of small misunderstanding that used to repair quickly — and can map the dissolution the participants will not be ready to see for years.',
    cost: 'The cost is to be the friend whose honesty becomes uncomfortable. The Libra-Asbolus seer is the person whose careful, kind, accurate read of a friend\'s marriage trajectory is heard as judgment or interference; the friend pulls away, the relationship cools, and the foreseen dissolution arrives years later in a context where the seer is no longer close enough to the friend to support them through it.',
    body: 'Asbolus in Libra names the relational-arc seer. She is the close friend who could see the partnership unwinding in 2017 and named it once, gently, was rebuffed, and watched the divorce land in 2021 with no one in the friend\'s life remembering she had said. She is the business-coach whose careful early read of a co-founder relationship\'s trajectory was filed and forgotten until the disputed dissolution required mediation. She is the therapist whose read of a couple\'s structural mismatch was clear from session three and whose work for the next eighteen months was holding the container while the partners individually arrived at the same read. The Libra-Asbolus medicine is to name the foreknowledge once, kindly, with explicit respect for the participants\' agency, then withdraw the prediction and stay available for the future repair work — without insisting on either being heeded or being thanked.',
    medicine: 'Name the relational foreknowledge once, kindly, with explicit respect for the participants\' agency; then withdraw the prediction and stay available without insisting on being heeded or thanked. The Libra-Asbolus register grows in the once-named, once-withdrawn, kept-available read.',
    shadow: 'The trap is the friend who keeps offering the same read — the seer whose accurate prediction about a friend\'s relationship becomes a repeated unsolicited intervention that drives the friend away and forecloses the very support the dissolution will require. Real Libra-Asbolus says it once; the false one says it monthly.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Libra in the late 1990s.'
  },
  scorpio: {
    sign: 'scorpio',
    foresees: 'The depth-collapse a year before it lands. Asbolus in Scorpio reads the early-signal patterns in someone\'s psyche, in a community\'s shadow material, in an organisation\'s un-processed history — the small re-emergences of an old pattern, the dream content surfacing in supervision, the shift in the way the unspoken is functioning — and can map the depth-eruption the participants are not yet ready to know is coming.',
    cost: 'The cost is to be the seer whose accuracy carries the weight of what others are protecting themselves from. The Scorpio-Asbolus prediction is often experienced by the recipient as itself the threat — the seer\'s foreknowledge of the impending breakdown becomes, in the recipient\'s anxiety, the cause rather than the read.',
    body: 'Asbolus in Scorpio names the depth-pattern seer. She is the therapist whose supervision notes from session four foretold the patient\'s month-eleven depth-eruption in language so clear that, when the eruption arrived, the supervisor wept. She is the community-elder who could read the unprocessed history surfacing in the new generation\'s patterns and knew which past would have to be addressed before the community could continue. She is the depth-worker who could feel the collective collapse two months before the leadership crisis broke. The Scorpio-Asbolus medicine is to entrust the foreknowledge to a clinical or ritual peer with explicit confidentiality — a supervisor, a co-facilitator, a trusted depth-worker — and to use the foresight to prepare the container for the predicted eruption rather than to deliver the prediction to the person who will live through it.',
    medicine: 'Entrust the depth-pattern foreknowledge to a peer with explicit confidentiality (supervisor, co-facilitator, depth-worker) and use it to prepare the container, not to deliver the prediction to the one living it. The Scorpio-Asbolus register grows in the prepared container.',
    shadow: 'The trap is the depth-seer as un-asked-for diagnostician — the practitioner whose foresight becomes a continuous unsolicited interpretation of others\' inner lives, whose accuracy is delivered as confrontation. Real Scorpio-Asbolus prepares the container; the false one only delivers the read.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Scorpio in the late 1990s.'
  },
  sagittarius: {
    sign: 'sagittarius',
    foresees: 'The intellectual or religious tradition\'s coming reorientation a generation before it lands. Asbolus in Sagittarius reads the early signals in a discipline, school, or religious lineage — the questions that are starting to appear in the marginal essays, the doctrinal pressure points, the demographic shift in the practitioners — and can map the major reorientation the tradition is moving toward.',
    cost: 'The cost is to be the heretic. The Sagittarius-Asbolus seer\'s early read on a tradition\'s coming reorientation is heard, by the tradition\'s current authorities, as exactly the kind of disloyal prefiguration that has to be marginalised. By the time the foreseen reorientation arrives, the seer has often been pushed to the periphery of the discipline she could have helped lead through it.',
    body: 'Asbolus in Sagittarius names the lineage-reorientation seer. He is the philosopher whose 1965 essay was the unread blueprint of the 1990s philosophical turn, written from inside the discipline that would only adopt the position twenty-five years later. He is the theologian whose 1980 book about a coming reframing of religious authority was the precise outline of the institutional conversation his denomination would be having in 2015. He is the academic whose careful early forecast of a discipline\'s methodological turn was treated as career-suicide and is now standard reading. The Sagittarius-Asbolus medicine is the patient long-form publication, the cultivation of a small lineage of younger thinkers who can carry the read forward, and the willingness to be peripheral in your own field for a generation if that is the cost of being honest about what you can see coming.',
    medicine: 'Publish the lineage-reorientation read in long form; cultivate a small lineage of younger thinkers who can carry it forward; accept the cost of being peripheral for a generation. The Sagittarius-Asbolus register grows in the patient long-form record + the carefully cultivated successors.',
    shadow: 'The trap is the prophetic-tone-as-style — the writer whose forecasts about a tradition come dressed in such an oracular voice that the actual content is hard to extract from the rhetoric. Real Sagittarius-Asbolus forecasts in legible argument; the false one only intones.',
    band: 'Read by transit and chart-point placement only; Asbolus last passed Sagittarius in the late 1990s, his discovery decade.'
  },
  capricorn: {
    sign: 'capricorn',
    foresees: 'The institutional collapse a decade before it lands. Asbolus in Capricorn reads the early-signal patterns inside a state, corporation, regulatory body, or long-form institution — the slow drift of the institutional culture, the leadership-pipeline thinning, the legal architecture becoming incoherent, the public legitimacy quietly eroding — and can map the institutional unwind the wider system is not yet able to admit is coming.',
    cost: 'The cost is to be unhirable inside the very institutions the seer is reading. The Capricorn-Asbolus prediction about a sector\'s coming structural failure is heard by the sector\'s leadership as exactly the kind of disloyal pessimism that has to be excluded from the talent pool. By the time the foreseen institutional unwind arrives, the seer is usually in an adjacent field, watching the inquiry adopt, with a five-year lag, the exact framing she had been excluded for.',
    body: 'Asbolus in Capricorn names the institutional-decline seer. He is the senior civil servant whose careful 1995 memo about the coming legitimacy crisis of his agency was filed, ignored, and is now cited in every history of the agency\'s 2015 unwinding. He is the corporate strategist whose 2008 read on the parent company\'s structural fragility was treated as junior-officer alarmism and is now the case-study taught in business schools. He is the policy researcher whose decade-long forecast of a regulatory regime\'s coming failure became the foundation of the post-collapse reform agenda. He has been transiting Capricorn through the early 21st century, and the contemporary visibility of institutional-collapse-as-foreseeable is, in part, his signature in this sign. The Capricorn-Asbolus medicine is the careful peer-reviewed publication of the structural read in adjacent venues (academic journals, independent policy think tanks, foreign-press outlets) where the record can survive past the institution\'s ability to suppress it.',
    medicine: 'Publish the institutional-decline read in adjacent venues (academic, independent think tank, foreign press) where the record survives past the institution\'s ability to suppress it. The Capricorn-Asbolus register grows in the peer-reviewed adjacent-venue record.',
    shadow: 'The trap is the doom-forecaster as cultural posture — the analyst whose accurate institutional-decline reads become a permanent persona of "everything is failing" and lose their analytic specificity. Real Capricorn-Asbolus stays specific; the false one only stays prophetic.',
    band: 'Asbolus has been transiting Capricorn through the early 21st century (~2003 → ~2018).'
  },
  aquarius: {
    sign: 'aquarius',
    foresees: 'The civic / network / platform failure two to five years before it cascades. Asbolus in Aquarius reads the early signals in a network, commons, civic-technical project, or digital public sphere — the moderation default that is silently amplifying harm, the protocol drift, the governance capture, the user-base demographic turn — and can map the planetary-scale failure the system is moving toward while the system\'s leadership is still treating the early signals as edge cases.',
    cost: 'The cost is to be excluded from the network whose collapse the seer is reading. The Aquarius-Asbolus warning about a platform\'s coming failure is heard by the platform\'s governance as exactly the kind of out-of-step contributor whose access and visibility should be reduced. By the time the foreseen failure arrives, the seer is frequently no longer on the platform at all and the historical record of her early warnings is harder to reconstruct than it should be.',
    body: 'Asbolus in Aquarius names the network-and-commons seer. She is the platform-trust-and-safety researcher whose 2014 internal memo about the coming amplification of a specific class of harm was the unread blueprint of the 2019 mass incident. She is the civic-technologist whose careful forecast of a particular protocol\'s capture by a single actor became the post-mortem template five years later. She is the moderation-team elder whose early read of a community\'s coming collapse was treated as defeatism until the collapse arrived on schedule. She has been transiting Aquarius through the contemporary moment, and the visibility of platform-and-network harms as systemically foreseeable is, in part, her signature in this sign. The Aquarius-Asbolus medicine is the publication of the early read in archived, mirrored, federated venues — and the cultivation of allied researchers across institutions so that the read survives any single network\'s ability to suppress or de-rank it.',
    medicine: 'Publish the network-and-commons foreknowledge in archived, mirrored, federated venues; cultivate allied researchers across institutions so the read survives single-network suppression. The Aquarius-Asbolus register grows in the federated, mirrored archive.',
    shadow: 'The trap is the platform-doom-prophet as ambient noise — the researcher whose accurate forecasts blur into the surrounding tech-pessimism discourse and lose the specificity that would let governance bodies act on them. Real Aquarius-Asbolus stays specific and actionable; the false one only contributes to the doom-track ambient.',
    band: 'Asbolus has been transiting Aquarius from approximately the late 2010s onward.'
  },
  pisces: {
    sign: 'pisces',
    foresees: 'The collective-mood turn before it lands. Asbolus in Pisces reads the early-signal patterns in the cultural unconscious — the dream content surfacing in clients, the imagery turning up across unrelated artists, the shift in the kind of grief or longing showing up in the collective sphere — and can map the mood turn the wider culture is about to live through while it is still inarticulate.',
    cost: 'The cost is the sound of being mystical to listeners who have not yet felt the turn. The Pisces-Asbolus warning about a coming collective grief, a coming mood-collapse, a coming spiritual hunger is heard, before the turn lands, as personal projection or aesthetic preference. By the time the foreseen mood-turn arrives the seer\'s earlier images and warnings are in retrospect uncannily accurate, but the moment for naming them in advance has passed.',
    body: 'Asbolus in Pisces names the collective-mood seer. She is the contemplative whose dream-journal across decades reads, in retrospect, like the unconscious of the era she lived through — and whose specific images foretold the mood-turns of three subsequent decades. She is the artist whose paintings of 2007 are read by 2014 critics as if she had painted them after the fact. She is the depth-therapist whose decade-long observations of changing client material became the unread forecast of a generational shift. The Pisces-Asbolus medicine is the careful, dated, witnessed practice — keep the journal, date the dream, share with one trusted contemplative peer, make the work — and trust that the future\'s gratitude does not require the present\'s recognition.',
    medicine: 'Keep the dated witnessed contemplative / artistic record — journal, dream, image, work — share with one trusted peer, and trust the future\'s gratitude without needing the present\'s recognition. The Pisces-Asbolus register grows in the dated witnessed creative-contemplative record.',
    shadow: 'The trap is the visionary-as-self-mythology — the contemplative whose accurate mood-reads become an architecture for a personal mystique rather than an offering to the collective. Real Pisces-Asbolus offers the read; the false one only curates the persona.',
    band: 'Read by transit and chart-point placement only; Asbolus will enter Pisces in the late 2020s.'
  }
}

export const ASBOLUS_SIGNS = SIGNS

export function isAsbolusSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #1a3a5a; }
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

export function asbolusPageHTML(sign: Sign): string {
  const p = ASBOLUS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Asbolus in ${Sign}`

  // Other Asbolus signs strip — discover the other 11. Glyph ⟁ (white
  // triangle containing small white triangle — the augur's triangulating
  // sight, the eye-within-the-eye that reads the patterns ahead).
  // Distinct from ⊛ Eris, ⏀ Sedna, ✺ Haumea, ◉ Makemake, ⚱ Pholus,
  // ⊚ Chariklo, ⛓ Nessus, ⚸ Lilith, ⚷ Chiron, ☊ North Node, ◈ Vertex,
  // and the asteroid set.
  const otherAsbolus = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/asbolus/${s}">⟁ Asbolus ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Asbolus is the fifth centaur, so the side strip
  // leads with all four of his centaur sisters (Chiron the wound,
  // Pholus the unsealing, Chariklo the held container, Nessus the
  // breach), then surfaces Vertex (the destined encounter — the
  // foreseeing-pair body), then the dwarf-planet quartet, then the
  // asteroid graph and the chart-point lane.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur sister — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur sister — the cycle-breaking)</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign} (the destined encounter Asbolus saw coming)</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (deliberate disruption)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (long exile)</a>`,
    `<a href="/gab44/haumea/${sign}">✺ Haumea in ${Sign} (fast multiplication)</a>`,
    `<a href="/gab44/makemake/${sign}">◉ Makemake in ${Sign} (patient restoration)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
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
    `<a href="/gab44/asbolus">all 12 Asbolus signs</a>`
  ].join('')

  const title = `${headline} — centaur 8405, the prophetic / foreknowledge / augury axis · gab44`
  const description = `${headline}: how Asbolus (centaur 8405, discovered 1995) carries the prophetic / foreknowledge / augury register in this sign. ${p.foresees} ${p.cost} The full archetype with seer-medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Asbolus', item: `${SITE_URL}/gab44/asbolus` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/asbolus/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/asbolus/${sign}`,
        about: `${headline} — prophetic / foreknowledge / augury axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/asbolus/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.foresees)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/asbolus/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9F%81%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/asbolus">all 12 Asbolus signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/vertex/${sign}">Vertex in ${Sign}</a>
      <a href="/gab44/chiron/${sign}">Chiron in ${Sign}</a>
      <a href="/gab44/reading?ref=asbolus-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⟁ ${sm.symbol}</div>
      <div class="meta">Asbolus ⟁ ${Sign} · centaur 8405 · the prophetic / foreknowledge / augury axis</div>
    </div>
    <h1><span class="accent">Asbolus</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.foresees)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⟁ Asbolus in ${Sign} — what the seer foresees</h3>
        <p>${escapeHtml(p.foresees)}</p>
      </div>
      <div class="panel">
        <h3>⟁ Asbolus in ${Sign} — the cost of the foreseeing</h3>
        <p>${escapeHtml(p.cost)}</p>
      </div>
    </div>

    <h2>Seer-medicine — how to do this register without burning out</h2>
    <ul class="meet-list">
      <li><span class="marker">⟁</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Asbolus in ${Sign} as the chronic Cassandra</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Asbolus</span><span class="v">⟁ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">centaur 8405 (discovered 1995)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~76-year solar orbit, between Saturn and Uranus</span></div>
      <div class="row"><span class="k">Named for</span><span class="v">the centaur Asbolos, "the sooty one," reader of bird-flight and patterns in nature, augur of the wedding-feast</span></div>
      <div class="row"><span class="k">Sisters</span><span class="v">Chiron — wound · Pholus — unsealing · Chariklo — held container · Nessus — cycle-breaking</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">prophetic / foreknowledge / augury / the early read no one yet hears</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=asbolus-${sign}">Get a $9 Asbolus-aware reading →</a>
    </div>

    <h2>The other 11 Asbolus signs</h2>
    <div class="strip">${otherAsbolus}</div>

    <h2>Related — your foreknowledge cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · prophetic / foreknowledge / augury axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function asbolusIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = ASBOLUS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/asbolus/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⟁ ${sm.symbol}</div>
      <div class="name">Asbolus in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · the early read</div>
      <div class="vibe-mini">${escapeHtml(p.foresees)}</div>
    </a>`
  }).join('')

  const title = `Asbolus by sign — centaur 8405, the prophetic / foreknowledge / augury axis · gab44 ✨`
  const description = `Asbolus in {sign} — the prophetic / foreknowledge / augury signature across all 12 zodiac signs. The fifth centaur (8405 Asbolus, discovered 1995), the seer-centaur whose accurate reading of bird-flight and natural patterns foreknew the wedding-feast catastrophe and was ignored. The astrology of the early read no one is yet able to hear. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Asbolus extends the centaur quartet into a
  // five-body surface and pairs with Vertex on the foreknowledge /
  // inevitability register: Vertex is the destined encounter itself,
  // Asbolus is the one who saw it coming. Next centaur after him is
  // Hylonome (the centaur of grief) to complete the six-body tier.
  const navStrip = [
    `<a href="/gab44/chiron">⚷ Chiron by sign (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur sister — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur sister — the cycle-breaking)</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign (the destined encounter Asbolus saw coming)</a>`,
    `<a href="/gab44/eris">⊛ Eris by sign (deliberate disruption)</a>`,
    `<a href="/gab44/sedna">⏀ Sedna by sign (long exile / patient return)</a>`,
    `<a href="/gab44/haumea">✺ Haumea by sign (fast fertility / fragmentation)</a>`,
    `<a href="/gab44/makemake">◉ Makemake by sign (patient restoration)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/asbolus" />
<meta property="og:title" content="Asbolus by sign · gab44" />
<meta property="og:description" content="The prophetic / foreknowledge / augury signature of centaur 8405 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#1a3a5a;--c2:#050f1c;}${BASE_CSS}</style>
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
      <a href="/gab44/chariklo">⊚ Chariklo</a>
      <a href="/gab44/nessus">⛓ Nessus</a>
      <a href="/gab44/reading?ref=asbolus-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#1a3a5a,#050f1c)">⟁</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · centaur 8405 (discovered 1995)</div>
    </div>
    <h1>Asbolus <span class="accent">by sign</span></h1>
    <p class="vibe">Chiron is the open wound. Pholus is the small move that cannot be unmade. Chariklo is the sacred enclosure. Nessus is the breach Chariklo holds against. Asbolus is the seer-centaur who could read the patterns and foreknew the catastrophe his peers were walking into — and was ignored. The astrology of the early read no one is yet able to hear. The fifth centaur. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Asbolus extends the centaur quartet (Chiron + Pholus + Chariklo + Nessus) into a five-body surface and pairs structurally with Vertex on the foreknowledge / inevitability register: Vertex is the destined encounter itself, Asbolus is the one who saw it coming. Read the centaur five together for the wound-cascade-container-breach-foreknowing axis, then open into the dwarfs for the deeper shadow-and-creation map.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=asbolus-index">Want a deeper, asbolus-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Asbolus-by-sign pages · evergreen · the prophetic / foreknowledge / augury axis.
    </footer>
  </div>
</body>
</html>`
}
