// Nessus × sign SEO funnel — /gab44/nessus (index) + /gab44/nessus/{sign}
// (12 pages). Round 31 of the gab44 evergreen surface. Targets the
// centaur / abuse-cycle / generational-predation / boundary-violation
// keyword cluster: "nessus in {sign} meaning", "{sign} nessus",
// "centaur nessus astrology", "nessus abuse cycle chart",
// "nessus boundary chart". Nessus is centaur 7066 — discovered 1993,
// the fourth centaur named (after Chiron, Pholus, and Chariklo). In
// Greek myth he is the centaur whose attempt to assault Heracles' wife
// Deianeira at the river Euenos — when she trusted him to ferry her
// across — initiated a multi-decade poison-arrow chain that eventually
// killed Heracles himself, the same arrow that killed Nessus returning
// to kill the man who had killed him. Astrologically Nessus is the body
// that names the violated container, the trust crossed, the boundary
// breached by someone in the position of safe-conduct, AND the long
// downstream cycle of harm that propagates from that breach across
// generations until someone in the line stops it. Where Chariklo holds
// the sacred enclosure, Nessus is the breaker of that enclosure;
// where Chiron carries the open wound and Pholus releases the cascade,
// Nessus carries the trans-generational chain of harm that demands
// either repetition or interruption. The work of Nessus astrology is
// the breaking of the cycle: the place where someone in the lineage
// finally chooses to be the last bearer of the chain rather than its
// next transmitter. Distinct keyword cluster from Chiron (the wound),
// Pholus (the unsealing), Chariklo (the held container), Eris
// (deliberate disruption), Sedna (long exile / patient return),
// Haumea (fast multiplication), Makemake (patient restoration). Pairs
// thematically with Sedna at the centaur-orbital scale (both are
// betrayal-by-trust bodies; Sedna is the patient return after exile,
// Nessus is the work of cycle-breaking after the breach). Cross-funnels
// into /gab44/reading?ref=nessus-{sign}.

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

// Per-element accent kept inside a bruise-purple / poisoned-blood band
// so the surface reads as the abuse-cycle / boundary-violation axis
// (distinct from the deep crimson Eris band, the abyssal-blue Sedna
// band, the rose-magenta Haumea band, the volcanic-basalt Makemake band,
// the amber-wine Pholus band, the silver-cyan Chariklo band, the gold
// Vertex band, the jade Hygiea band, the indigo Chiron band). Each
// element shifts the temperature inside the same bruise / dried-blood
// purple family — the colour of the centuries-old bruise that did not
// heal cleanly because the cycle went on.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#7a1f48', c2: '#220414' },
  earth: { c1: '#5a1a3a', c2: '#1a0612' },
  air:   { c1: '#8a3258', c2: '#2a0820' },
  water: { c1: '#4a1832', c2: '#14040c' }
}

interface NessusProfile {
  sign: Sign
  // The shape of the boundary-violation that this register is most
  // shaped by — the particular kind of trusted-passage that gets
  // breached when Nessus arrives by transit, chart-point, or natal
  // placement. Always specified as a concrete relational structure,
  // not as moral abstraction.
  breach: string
  // The cycle that gets transmitted unless someone in the lineage
  // breaks it. Nessus is never about the single act; he is about the
  // multi-generational propagation of harm that follows when the breach
  // is left un-named, un-witnessed, or un-repaired.
  cycle: string
  // Big paragraph — the lived shape of Nessus in this sign, the texture
  // of the violation, the propagation across the lineage, AND the work
  // of cycle-breaking — the place at which someone finally chooses to
  // be the last bearer of the chain rather than its next link.
  body: string
  // The medicine — how to do the cycle-breaking work in this register.
  // Always concrete: the boundary that must be named, the witness that
  // must be brought, the support that must be in place, the inheritance
  // that must be refused, the truth that must be spoken so that the
  // chain stops here.
  medicine: string
  // The shadow shape — Nessus turned away from the cycle-breaking work:
  // the bearer who silently transmits the chain to the next generation
  // because naming it is harder than passing it on, the survivor who
  // becomes the next predator, the witness who looks away. Named with
  // care; the point is to make the cycle-breaking visible, not to
  // shame those who could not yet do it.
  shadow: string
  // Approximate generational year-bands. Nessus's orbit is ~122 years;
  // he was discovered in 1993, has transited Aquarius / Pisces / Aries
  // through the 1990s-2010s, and has been in early Taurus since the late
  // 2010s / early 2020s. The per-sign archetype reads as transit /
  // chart-point / generational placement. The contemporary cultural
  // visibility of abuse-cycle work tracks his transit through these
  // signs.
  band: string
}

// Nessus sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. Nessus is the body that names the violated container, the
// trust crossed at the moment of safe-conduct, and the long generational
// chain of harm that follows unless someone in the lineage chooses to
// stop it. Each sign has its own kind of boundary-violation, its own
// kind of cycle, and its own kind of cycle-breaking work.
export const NESSUS_PROFILES: Record<Sign, NessusProfile> = {
  aries: {
    sign: 'aries',
    breach: 'The breach of the protector role — the senior in the warrior, organising, or first-responder lineage who, having been entrusted with the safety of the people in their care, used the position to cause the harm they were supposed to prevent. The coach, the captain, the early-stage founder, the activist elder, the veteran whose authority was the very thing that made the violation possible.',
    cycle: 'The Aries-Nessus cycle is the inheritance of leadership-as-license — the way founders, captains, and elders in a given lineage of action keep replicating the same boundary-crossing because no one in the lineage has named it as the line. The next generation of leaders absorbs the breach as part of the leadership-template and either passes it on or breaks the chain.',
    body: 'Nessus in Aries names the inheritance of the warrior-protector who became the harm. He is the chain in which the team captain abused the players, who became coaches, who absorbed the template, who passed it on to the next bench. He is the founder-elder whose movement repeated his violation across three generations of organisations. He is the first-responder lineage in which the role of safety became the cover for the same kind of harm. Aries-Nessus medicine is the moment a younger leader in the same line names the breach explicitly — out loud, on the record, with witnesses — and structurally redesigns the role so that it cannot happen again on her watch. The generation that breaks the Aries-Nessus chain leaves a leadership template the next cohort can actually trust.',
    medicine: 'In any leadership lineage you have inherited, name explicitly the boundary-violation embedded in your predecessors\' template — out loud, with witnesses — and design the protective architecture that makes its repetition structurally impossible under your tenure. The Aries-Nessus register grows in the explicitly named protector\'s breach.',
    shadow: 'The trap is the silent inheritor — the new leader who knows the line\'s history of harm and quietly maintains the silence as the price of admission to the role, becoming the next link without becoming the next perpetrator and yet still allowing the cycle to run. Real Aries-Nessus medicine names the line; the false one only inherits the silence.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Aries in the 2010s.'
  },
  taurus: {
    sign: 'taurus',
    breach: 'The breach of the household-economic container — the trust crossed by a parent, partner, business co-owner, financial fiduciary, or property-co-steward who used the shared material structure to extract from the people who depended on it. The body, the bank account, the deed, the inheritance, the marriage finances — every register where one person\'s safety relied on another\'s honesty about substance.',
    cycle: 'The Taurus-Nessus cycle is the way financial-and-bodily harm propagates through generations: the daughter who absorbs the same framework and replicates it on the next partner, the family in which the inherited estate is permanently entangled with the inherited harm, the household template in which extraction-by-the-trusted is silently normalised as how things work between intimates.',
    body: 'Nessus in Taurus names the centuries-deep inheritance of household-economic violation. He is the line in which one generation\'s embezzling patriarch produced two generations of women who could not separate love from financial control. He is the family in which inherited property carries an inherited pattern of who-takes-from-whom that no one has yet sat down to map and unmake. He is the marriage in which the body, the money, and the home all came under one person\'s coercive arrangement. He has been transiting Taurus since the late 2010s — and the contemporary visibility of financial-abuse and household-coercion as nameable forms is, in part, his signature in this sign. Taurus-Nessus medicine is the work of forensic clarity about the household economic structure, and of redesigning material relationships so that intimacy and substance are no longer routes for one person to control another.',
    medicine: 'In any household, marriage, or family-financial structure, audit the actual decision-making and access architecture for any place where one person can extract from another without consent, and redesign it. The Taurus-Nessus register grows in the renegotiated household material architecture.',
    shadow: 'The trap is the comfort-of-no-conflict — the partner or family member who knows the structure is extractive but maintains it because the renegotiation is more painful than the slow leak. Real Taurus-Nessus medicine renegotiates the structure; the false one only manages the slow leak.',
    band: 'Nessus has been transiting Taurus since approximately 2018; the contemporary financial-abuse-as-nameable-form discourse tracks this transit.'
  },
  gemini: {
    sign: 'gemini',
    breach: 'The breach of the storyteller / messenger / archivist role — the trust crossed by a teacher, journalist, family historian, sibling, or cousin who used their position as the line\'s narrator to construct, alter, or suppress the truth about what was done to whom. The story crossed becomes the second violation on top of the first.',
    cycle: 'The Gemini-Nessus cycle is the way an inherited family or institutional narrative carries the harm forward by lying about it — the official history that omits what happened, the family story that names the survivor as the troublemaker, the curriculum that erases the lineage of harm. The next generation absorbs the doctored narrative and either keeps doctoring it or finally writes the true version.',
    body: 'Nessus in Gemini names the propagation of harm through narrative complicity. He is the family in which the official version of grandfather\'s decade has been kept stable by everyone\'s small daily complicity, and the cousin who finally writes the true account is named the one who broke the family. He is the institution whose archive has, across decades, been quietly curated to keep certain abuses invisible, and the archivist of a later generation who finally publishes what was suppressed. He is the religious or political lineage in which the founding teacher\'s pattern of harm has been laundered into devotional language by every subsequent generation of biographers. The Gemini-Nessus medicine is the careful, sourced, witnessed re-writing of the narrative — accepting that the truth-teller will be punished by the line\'s loyalists and choosing to speak anyway.',
    medicine: 'In any line whose official narrative you suspect is laundering harm, become the narrator who names the truth — sourced, witnessed, on the record — and accept the cost of being the breaker of the official story. The Gemini-Nessus register grows in the carefully-told true version.',
    shadow: 'The trap is the keeper of the polished narrative — the family or institutional storyteller who knows the polish hides the harm and keeps polishing because un-polishing carries social cost. Real Gemini-Nessus medicine writes the true version; the false one only edits the smooth one.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Gemini in the early 2020s if at all (currently in early Taurus heading toward Gemini transit late 2020s onward depending on retrograde behaviour).'
  },
  cancer: {
    sign: 'cancer',
    breach: 'The breach of the family caregiver role — the trust crossed by a parent, grandparent, aunt, sibling, or chosen-family elder who, in the role of safety, was the source of the harm. The home that should have been the safest place that became the most dangerous one. The bedtime, the kitchen, the holiday, the back room — the everyday domestic architectures inside which the violation became routine.',
    cycle: 'The Cancer-Nessus cycle is the deepest of the lineage cycles: the way harm in the family system propagates by being treated as the normal water everyone swims in. The granddaughter who reproduces the same pattern with her own children because no one in the line has named it as a pattern. The chosen-family in which the same dynamic keeps appearing across decades because the foundational template has not yet been examined.',
    body: 'Nessus in Cancer names the multi-generational propagation of family-caregiver harm. He is the lineage in which the grandfather\'s pattern produced four generations of women whose default in intimate relationship is the freeze-and-comply they learned watching their mothers. He is the family in which the harm was done by the favourite uncle and the family\'s organising principle for thirty years has been the protection of his reputation. He is the chosen-family in which the founder-elder\'s abuses have been laundered into the community\'s self-mythology. The Cancer-Nessus medicine is the work that whole generations have only recently been able to do — naming the family-system harm out loud, choosing professional support, refusing to transmit the template to the next generation, and accepting the often-painful relational cost of being the line\'s cycle-breaker.',
    medicine: 'In any family-system pattern you can see propagating, choose to be the cycle-breaker explicitly: name the pattern out loud, get professional support, refuse to transmit the template, and accept the relational cost. The Cancer-Nessus register grows in the conscious lineage cycle-break.',
    shadow: 'The trap is the keeper of the family peace — the relative who sees the cycle clearly and stays silent because naming it splits the family. Real Cancer-Nessus medicine accepts the split; the false one only protects the surface peace and ships the cycle onward.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Cancer in the late 1960s.'
  },
  leo: {
    sign: 'leo',
    breach: 'The breach of the spotlight — the trust crossed by a coach, mentor, director, casting agent, talent manager, or studio elder who used the position of authority over a young person\'s public emergence to extract sexual, emotional, or financial compliance as the price of access. The career-as-leverage register; the audition-room cycle.',
    cycle: 'The Leo-Nessus cycle is the way an industry whose structure depends on gatekeepers controlling access to visibility absorbs and re-transmits the same predatory pattern across generations of new entrants. The 22-year-old whose first big break was conditional becomes, twenty years later, the gatekeeper who repeats the pattern, or the witness who stays silent because the industry runs on the silence.',
    body: 'Nessus in Leo names the inheritance of the spotlight-as-leverage. He is the entertainment-industry lineage in which the same gatekeeper-pattern has produced fifty years of abused careers and the structural conditions that made them possible. He is the sports-line in which the mentor-coach\'s authority over the next-generation athlete\'s career was systematically used as cover for harm. He is the academic line in which the dissertation-supervisor\'s power over a young scholar\'s entry into the field has been the architecture of decades of coercion. The Leo-Nessus medicine is structural: not only individual cycle-breaking but redesigning the gatekeeper architecture itself — independent oversight, shared-power audition processes, clear reporting lines, transparent career-step gates — so that no single individual can hold the kind of leverage that made the cycle possible.',
    medicine: 'In any visible-career lineage you participate in, work on the structural redesign of gatekeeper architecture so the leverage that enabled the cycle no longer exists. The Leo-Nessus register grows in the structural reform of access-to-visibility.',
    shadow: 'The trap is the survivor-as-gatekeeper — the person who survived the predatory architecture, gained the gatekeeper role themselves, and now polices entry on the same terms because that is the only template they were given. Real Leo-Nessus medicine redesigns the gate; the false one only operates the same one with a softer touch.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Leo in the 1980s.'
  },
  virgo: {
    sign: 'virgo',
    breach: 'The breach of the practitioner role — the trust crossed by a doctor, therapist, dentist, surgeon, midwife, pastor-counselor, supervisor, or other technical-helping professional who used the position of clinical or technical authority over a vulnerable person to cause harm. The Virgo-Nessus register is specifically the violation that happens inside the professional helping container.',
    cycle: 'The Virgo-Nessus cycle is the propagation through clinical / technical lineages: the next generation of practitioners trained inside a culture that quietly tolerated the harm absorbing the toleration as part of the professional formation, the institution that protects the credentialed perpetrator at the expense of the vulnerable patient because the reputation of the field is the protected object.',
    body: 'Nessus in Virgo names the inheritance of the breached helping container. He is the medical line in which decades of patient harm by a senior consultant were tolerated by colleagues whose own training had taught them not to question hierarchy. He is the therapy-lineage in which the founding figure\'s pattern of harm was laundered into the curriculum and propagated to two generations of clinicians. He is the religious-counselling line in which the pastoral container\'s breach has, across decades, been protected by the institution rather than by the harmed. The Virgo-Nessus medicine is the rigorous reform of the professional structure: mandatory reporting, independent supervision, survivor-led review processes, the explicit prioritisation of the harmed person over the credentialed perpetrator. It is the work the field rather than the individual must do.',
    medicine: 'In your own profession, use whatever institutional position you have to push for survivor-led review processes, independent supervision, and structural priority of the harmed over the credentialed. The Virgo-Nessus register grows in the structurally enforced professional accountability.',
    shadow: 'The trap is the colleague who knows — the practitioner who has watched the senior figure\'s pattern across years and has stayed silent because raising it would cost the career. Real Virgo-Nessus medicine raises it anyway, with the right institutional support; the false one only manages around the danger.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Virgo in the 1980s.'
  },
  libra: {
    sign: 'libra',
    breach: 'The breach of the partnership container — the trust crossed by a marriage partner, civil partner, business co-founder, dating partner, or close friend who used the relational architecture as the structure of harm. Coercive control; the long marriage in which the coercion was invisible to outsiders for decades; the business partnership in which the financial entanglement was the cage.',
    cycle: 'The Libra-Nessus cycle is the way coercive-relational templates propagate across friend groups, sibling cohorts, and generations: the daughter whose understanding of marriage was shaped by watching her mother\'s long compliance, the friend group in which the same partnership pattern keeps appearing because no one has named it as a pattern, the cohort whose dating-default carries an inherited script no one can quite see.',
    body: 'Nessus in Libra names the inheritance of relational coercion. He is the line in which one generation\'s coercive marriage produced the next generation\'s default expectation that intimate partnership requires the silent absorption of certain kinds of harm. He is the friend group whose relational template has, across years, normalised exactly the kind of dynamic each individual member would consciously reject. He is the partnership in which the legal, financial, and social entanglements operate explicitly as the cage that makes leaving impossible. The Libra-Nessus medicine is the work of relational re-architecture: the explicit naming of the coercive structure, the choice of professional support (couples therapy with a coercive-control-trained clinician, legal counsel, domestic abuse advocates), and the restructuring of the partnership so that either party can leave at any time without catastrophic loss — that asymmetry is the cage.',
    medicine: 'In any long-form partnership, audit the architecture for any place where one party cannot leave without disproportionate cost, and renegotiate the structure so that exit is genuinely available to both. The Libra-Nessus register grows in the genuinely exit-able partnership.',
    shadow: 'The trap is the partner who minimises — the spouse, business co-founder, or close friend who experiences the coercion and frames it to themselves as smaller than it is, because naming it as coercion is more painful than enduring it. Real Libra-Nessus medicine names it accurately; the false one only translates it into the language of personality differences.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Libra in the 1990s.'
  },
  scorpio: {
    sign: 'scorpio',
    breach: 'The breach of the depth-container — the trust crossed inside the therapy room, the ritual circle, the sacred-sex container, the initiatory school, the trauma-recovery program, the hospice setting, or any explicitly framed depth-work space where the boundary breach is doubly devastating because the container was the load-bearing structure of the work. The therapist who exploited the transference. The teacher who used the initiation as cover.',
    cycle: 'The Scorpio-Nessus cycle is the most insidious propagation: the lineage in which depth-workers themselves carry forward the same kind of boundary-breach in their own practice, because the only template they were given was a damaged one. The therapist whose own analyst harmed her now harms her clients in subtler ways. The lineage of ritualists whose founder\'s breach has been laundered into the lineage\'s self-mythology now reproduces the breach in every generation of practitioners.',
    body: 'Nessus in Scorpio names the deepest of the cycle inheritances: the way harm in the explicitly held depth-container propagates across the lineage of those who hold containers. He is the therapy-lineage in which the founder\'s pattern of using the transference was treated as charisma and absorbed into two generations of training. He is the ritual-school in which the founder\'s exploitation was reframed as initiation by every successor. He is the initiatory tradition that, having been corrupted in one generation, kept passing the corruption forward in spite of the genuine wisdom it also transmitted. The Scorpio-Nessus medicine is the most rigorous version of the cycle-break: requiring of the depth-worker that she do her own genuine, difficult, multi-year work on her own template; that she submit to active, structured supervision; that she be willing to publicly name her lineage\'s history of harm; and that she design her own container with explicit, legible, survivor-informed safeguards.',
    medicine: 'If you hold any depth-container — therapy, ritual, sex, initiation, trauma-recovery, hospice — submit to active, structured supervision; do your own template-work; and design your container with explicit, legible, survivor-informed safeguards. The Scorpio-Nessus register grows in the rigorously-held depth-container.',
    shadow: 'The trap is the depth-worker who claims her own healing as enough — the practitioner who treats her own past harm as sufficient credentials and skips the structural safeguards because she trusts her own intent. Real Scorpio-Nessus medicine builds the safeguards that do not depend on intent; the false one only trusts the intent.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Scorpio in the late 1990s.'
  },
  sagittarius: {
    sign: 'sagittarius',
    breach: 'The breach of the teacher / preacher / spiritual-authority role — the trust crossed by a guru, lineage-holder, religious leader, professor, retreat-master, or revered elder who used the authority of the teaching seat to extract sexual, emotional, financial, or labour compliance from students or congregants. The sangha cycle; the cult cycle; the academic-supervisor cycle.',
    cycle: 'The Sagittarius-Nessus cycle is the way teaching-lineages transmit harm by transmitting the founding teacher\'s entitled stance along with the genuine teaching, generation after generation. The student becomes the teacher, the teacher\'s template is the only one she has, and the lineage propagates both the wisdom and the harm in the same body of work. The community whose loyalty to the teaching becomes loyalty to the teacher\'s harm.',
    body: 'Nessus in Sagittarius names the inheritance of the corrupted teaching-line. He is the religious lineage whose founder\'s clear pattern of harm has been laundered by every generation of biographers into devotional language. He is the academic discipline in which the senior figure\'s decades of harm to junior scholars have been protected by the field because his work was foundational. He is the spiritual community whose loyalty to the teacher\'s teaching has become inseparable from loyalty to the teacher\'s exemption from accountability. The Sagittarius-Nessus medicine is the painful but necessary separation of the genuine teaching from the harmful teacher — the willingness to keep what is true while publicly naming the harm; the careful structural reform of the lineage so that the next generation\'s teaching authority is held inside accountable structures rather than as personal charisma.',
    medicine: 'In any teaching lineage you participate in or transmit, do the work of separating the genuine teaching from any harmful teacher — keep the truth, name the harm, restructure the lineage so authority is accountable. The Sagittarius-Nessus register grows in the publicly accountable teaching-line.',
    shadow: 'The trap is the loyal student-as-launderer — the disciple whose love for the teaching becomes the mechanism by which the teacher\'s harm is hidden across decades of biographical writing and lineage transmission. Real Sagittarius-Nessus medicine keeps the teaching honest about the teacher; the false one only keeps the teacher honoured.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Sagittarius in the early 2000s.'
  },
  capricorn: {
    sign: 'capricorn',
    breach: 'The breach of institutional trust — the trust crossed by a senior official, judge, regulator, board member, executive, or government leader whose role was the very architecture of public safety and who used it as the structure of harm. The state actor, the corporate officer, the institutional gatekeeper whose authority was the safety and whose breach is doubly devastating because there was no architecture above it to appeal to.',
    cycle: 'The Capricorn-Nessus cycle is the institutional one: the way an organisation\'s culture absorbs and replicates the founding leader\'s pattern, the way a regulator captured by an industry continues to be captured generation after generation, the way a state\'s historical pattern of impunity for senior officials becomes the political water everyone swims in. Cycle-breaking at this scale is constitutional / structural reform.',
    body: 'Nessus in Capricorn names the inheritance of institutional impunity. He is the state in which a generation of senior officials\' violations have been tolerated by the institutional structure, producing a political culture in which accountability for elite harm is structurally unavailable. He is the corporation whose founder\'s pattern of conduct has been the load-bearing template of the executive layer for fifty years. He is the regulatory body whose capture by the industry it was supposed to oversee has become the unspoken background of every appointment and every rule-making process. The Capricorn-Nessus medicine is the multi-decade work of institutional reform: independent oversight bodies, term limits, conflict-of-interest enforcement, asset disclosures, the structural redistribution of power so that no individual can occupy the architecture of safety as the architecture of harm. It is generational work; the cycle-breakers in this register are the institution-builders of the next century.',
    medicine: 'In any institutional reform work in your reach, push for the structural redistribution of power that makes a single individual\'s capture of the safety-architecture impossible. The Capricorn-Nessus register grows in the multi-decade structural reform of institutional accountability.',
    shadow: 'The trap is the principled-individual-inside-the-corrupted-structure — the official whose personal integrity becomes a substitute for the structural reform the institution actually needs, whose presence inside the corrupted system is used by the system to claim it is already accountable. Real Capricorn-Nessus medicine reforms the structure; the false one only embodies integrity inside the unreformed one.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Capricorn in the late 2000s.'
  },
  aquarius: {
    sign: 'aquarius',
    breach: 'The breach of the network / commons / platform container — the trust crossed by a platform, network operator, data steward, civic-technical project, or open-source maintainer-cohort whose users\' or community\'s safety was the load-bearing assumption and whose breach was the betrayal of that whole field. The platform that monetised the data its users trusted it with. The network that protected predators in the name of openness. The civic-tech project whose users became its product.',
    cycle: 'The Aquarius-Nessus cycle is the contemporary, networked, planetary one. A platform absorbs the practices of the platform that came before it, then transmits them — slightly worse — to the platform that comes after. A civic culture of impunity for network-scale violations becomes the political background against which every new network is built. The next generation of networks inherits the template unless someone actively breaks it.',
    body: 'Nessus in Aquarius names the inheritance of platform / network betrayal at the planetary scale. He is the platform whose user-trust became the resource it monetised against the users who provided it. He is the civic-tech project whose architecture of openness was deliberately weaponised by the predators it refused to design against. He is the network whose moderation defaults silently propagated harm to the most vulnerable users while protecting the loudest. The Aquarius-Nessus medicine is the architecture of the next generation of commons / networks / platforms designed explicitly with the harms of the previous generation as the load-bearing design constraint — survivor-led design processes, default-protective settings, transparent governance, the structural prioritisation of the most-vulnerable user over the most-powerful contributor. He has been transiting Aquarius in the relatively recent past, and the contemporary visibility of platform-harm-as-systemic is, in part, his signature in this sign.',
    medicine: 'For any network / commons / platform you contribute to, advocate for the design choices that take the previous generation\'s harms as the load-bearing constraint — survivor-led design, default-protective settings, transparent governance. The Aquarius-Nessus register grows in the structurally-protective network architecture.',
    shadow: 'The trap is the technologist-libertarian framing — the network designer whose commitment to abstract openness becomes the architecture of concrete harm to the people the openness exposed. Real Aquarius-Nessus medicine designs against the harm; the false one only celebrates the openness.',
    band: 'Nessus transited Aquarius approximately late 1990s through mid 2010s; the contemporary platform-accountability discourse tracks this transit.'
  },
  pisces: {
    sign: 'pisces',
    breach: 'The breach of the sanctuary — the trust crossed inside an explicitly held spiritual, contemplative, mystical, or hospice container where the visitor\'s vulnerability was the very condition of the work and the practitioner\'s authority was the safety. The retreat that became the predator\'s hunting ground. The hospice ward in which the dying were not safe. The shamanic medicine ceremony whose facilitator used the altered state as cover.',
    cycle: 'The Pisces-Nessus cycle is the way sanctuary-lineages transmit harm: the retreat tradition whose founder\'s pattern of harm has been laundered by every successor; the contemplative lineage whose practice still works but whose lineage of harm runs in parallel; the hospice or palliative culture in which a generation of practitioners absorbed a damaged template. Cycle-breaking here is the most painful version because the practice is genuine and the harm is real.',
    body: 'Nessus in Pisces names the inheritance of the violated sanctuary. He is the retreat tradition whose founder\'s decades of harm to vulnerable participants has been treated by each successor as a complicated personal flaw rather than as a structural feature of the lineage\'s power dynamics. He is the contemplative line in which the genuine depth of the practice has been used by every generation of teachers as cover for the same kinds of boundary breach. He is the medicine-ceremony culture in which the explicit altered-state vulnerability of participants has, across decades, been exploited by a succession of facilitators. The Pisces-Nessus medicine is the work of holding both: the practice is real, AND the lineage of harm is real; the contemplative or sanctuary container needs to be redesigned with explicit, structural, survivor-informed safeguards that do not depend on the trustworthiness of any individual practitioner. The genuine depth of the work is what makes the safeguards necessary, not what makes them optional.',
    medicine: 'In any sanctuary / contemplative / hospice container you hold or transmit, design explicit, structural, survivor-informed safeguards that do not depend on any individual practitioner\'s trustworthiness. The Pisces-Nessus register grows in the structurally-safeguarded sanctuary.',
    shadow: 'The trap is the depth-of-practice-as-license — the sanctuary holder whose genuine spiritual authority becomes the reason she does not need the structural safeguards, whose transparency seems unnecessary because the work is so true. Real Pisces-Nessus medicine accepts the safeguards as part of the practice; the false one trusts the depth and skips the structure.',
    band: 'Read by transit and chart-point placement only; Nessus last passed Pisces in the mid 2010s.'
  }
}

export const NESSUS_SIGNS = SIGNS

export function isNessusSign(s: string): s is Sign {
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
  .care { background: var(--bg-2); border: 1px solid var(--line); border-radius: 10px;
    padding: 12px 14px; margin: 0 0 18px; font-size: 14px; color: var(--fg-dim); }
  .care strong { color: var(--fg); }
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
  .shadow-list .marker { color: #5a1a3a; }
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

// Care notice surfaced on every per-sign Nessus page. The Nessus
// register can touch survivors; the page is written to honour the
// cycle-breaking work, but it should never be the only resource.
const CARE_NOTICE = `<div class="care">
  <strong>If this material touches a live wound:</strong> please don't sit
  with it alone. Talk to a trauma-informed therapist or contact a survivor-
  support organisation in your country. This page is a long-form
  astrological reflection, not a clinical resource — and the cycle-breaking
  work is real work that deserves real support.
</div>`

export function nessusPageHTML(sign: Sign): string {
  const p = NESSUS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Nessus in ${Sign}`

  // Other Nessus signs strip — discover the other 11. Glyph ⛓ (chain
  // link) — the visual signature of the multi-generational chain of
  // harm AND the link in the chain that someone in the lineage finally
  // breaks. Distinct from ⊛ Eris, ⏀ Sedna, ✺ Haumea, ◉ Makemake,
  // ⚱ Pholus, ⊚ Chariklo, ⚸ Lilith, ⚷ Chiron, ☊ North Node, ◈ Vertex,
  // and the asteroid set.
  const otherNessus = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/nessus/${s}">⛓ Nessus ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Nessus is the fourth centaur, so the side strip
  // leads with all three of his centaur sisters (Chiron the wound,
  // Pholus the unsealing, Chariklo the held container — the pair he
  // most directly inverts), then the dwarf-planet quartet (his thematic
  // cousins in the trans-Saturnian shadow tier — and especially Sedna,
  // his dwarf-planet partner in the betrayal-by-trust register), then
  // the asteroid graph and the chart-point lane.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur sister — the sacred enclosure Nessus breaks)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur sister — the foreknowing)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (the betrayal-by-trust at dwarf-planet scale)</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (deliberate disruption)</a>`,
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
    `<a href="/gab44/nessus">all 12 Nessus signs</a>`
  ].join('')

  const title = `${headline} — centaur 7066, the abuse-cycle / boundary-violation / cycle-breaking axis · gab44`
  const description = `${headline}: how Nessus (centaur 7066, discovered 1993) carries the multi-generational chain-of-harm AND the cycle-breaking work in this sign. ${p.breach} ${p.cycle} The full archetype with cycle-breaking medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Nessus', item: `${SITE_URL}/gab44/nessus` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/nessus/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/nessus/${sign}`,
        about: `${headline} — abuse-cycle / boundary-violation / cycle-breaking axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/nessus/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.breach)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/nessus/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9B%93%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/nessus">all 12 Nessus signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/chariklo/${sign}">Chariklo in ${Sign}</a>
      <a href="/gab44/sedna/${sign}">Sedna in ${Sign}</a>
      <a href="/gab44/reading?ref=nessus-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⛓ ${sm.symbol}</div>
      <div class="meta">Nessus ⛓ ${Sign} · centaur 7066 · the abuse-cycle / boundary-violation / cycle-breaking axis</div>
    </div>
    <h1><span class="accent">Nessus</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.breach)}</p>

    ${CARE_NOTICE}

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⛓ Nessus in ${Sign} — the breach</h3>
        <p>${escapeHtml(p.breach)}</p>
      </div>
      <div class="panel">
        <h3>⛓ Nessus in ${Sign} — the cycle</h3>
        <p>${escapeHtml(p.cycle)}</p>
      </div>
    </div>

    <h2>Cycle-breaking medicine — how to be the last bearer</h2>
    <ul class="meet-list">
      <li><span class="marker">⛓</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Nessus in ${Sign} as the silent transmitter</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Nessus</span><span class="v">⛓ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">centaur 7066 (discovered 1993)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~122-year solar orbit, between Saturn and Pluto</span></div>
      <div class="row"><span class="k">Named for</span><span class="v">the centaur Nessos, whose attempted assault on Deianeira opened a multi-decade poison-arrow chain that killed Heracles</span></div>
      <div class="row"><span class="k">Sisters</span><span class="v">Chiron — wound · Pholus — unsealing · Chariklo — sacred enclosure</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">abuse-cycle / boundary-violation / the work of being the last bearer of the chain</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=nessus-${sign}">Get a $9 Nessus-aware reading →</a>
    </div>

    <h2>The other 11 Nessus signs</h2>
    <div class="strip">${otherNessus}</div>

    <h2>Related — your cycle-breaking cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · abuse-cycle / boundary-violation / cycle-breaking axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function nessusIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = NESSUS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/nessus/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⛓ ${sm.symbol}</div>
      <div class="name">Nessus in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · cycle-breaking</div>
      <div class="vibe-mini">${escapeHtml(p.breach)}</div>
    </a>`
  }).join('')

  const title = `Nessus by sign — centaur 7066, the abuse-cycle / boundary-violation / cycle-breaking axis · gab44 ✨`
  const description = `Nessus in {sign} — the multi-generational chain-of-harm AND the cycle-breaking work, across all 12 zodiac signs. The fourth centaur (7066 Nessus, discovered 1993), the body that names the violated container and the line where someone finally chooses to be the last bearer of the chain rather than its next link. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Nessus completes the centaur opening trio's
  // first deepening (Chiron + Pholus + Chariklo + Nessus = the wound,
  // the cascade, the held container, the breach of the held container).
  // He pairs structurally with Sedna at the dwarf-planet scale (both
  // betrayal-by-trust bodies). Next centaurs after him are Asbolus
  // (the seer) and Hylonome (the centaur's grief).
  const navStrip = [
    `<a href="/gab44/chiron">⚷ Chiron by sign (centaur sister — the open wound)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur sister — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur sister — the sacred enclosure Nessus breaks)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur sister — the foreknowing)</a>`,
    `<a href="/gab44/sedna">⏀ Sedna by sign (the betrayal-by-trust at dwarf-planet scale)</a>`,
    `<a href="/gab44/eris">⊛ Eris by sign (deliberate disruption)</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/nessus" />
<meta property="og:title" content="Nessus by sign · gab44" />
<meta property="og:description" content="The abuse-cycle / boundary-violation / cycle-breaking signature of centaur 7066 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#5a1a3a;--c2:#1a0612;}${BASE_CSS}</style>
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
      <a href="/gab44/reading?ref=nessus-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#5a1a3a,#1a0612)">⛓</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · centaur 7066 (discovered 1993)</div>
    </div>
    <h1>Nessus <span class="accent">by sign</span></h1>
    <p class="vibe">Chiron is the open wound. Pholus is the small first move that cannot be unmade. Chariklo is the sacred enclosure inside which depth-work is safe. Nessus is the breaker of that enclosure — the centaur who used the trust of safe-conduct as the cover for harm, and whose poison-arrow set off a generations-long chain. The astrology of cycle-breaking: the place in the lineage where someone finally chooses to be the last link rather than the next transmitter. Pick yours.</p>

    ${CARE_NOTICE}

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Nessus is the fourth centaur (after Chiron, Pholus, and Chariklo) and pairs structurally with Sedna at the dwarf-planet scale — both are betrayal-by-trust bodies, but Nessus carries the multi-generational chain of transmitted harm and the work of breaking it, where Sedna carries the long exile and the patient return. Read the centaur quartet together for the full wound-cascade-container-breach axis, then open into the dwarfs for the deeper shadow-and-creation map.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=nessus-index">Want a deeper, nessus-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Nessus-by-sign pages · evergreen · the abuse-cycle / boundary-violation / cycle-breaking axis.
    </footer>
  </div>
</body>
</html>`
}
