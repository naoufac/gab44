// Makemake × sign SEO funnel — /gab44/makemake (index) + /gab44/makemake/{sign}
// (12 pages). Round 28 of the gab44 evergreen surface. Targets the
// dwarf-planet / creation / ecological-restoration keyword cluster:
// "makemake in {sign} meaning", "{sign} makemake", "dwarf planet
// makemake astrology", "makemake restoration chart". Makemake is dwarf
// planet 136472 — discovered 2005, named for the creator-god of Rapa
// Nui (Easter Island), the bringer of the first egg, the deity of the
// long-cycle ecological renewal who, in the bird-man cult, was honoured
// each spring as the one whose patient work made the next generation
// possible. Astrologically Makemake names the slow, deliberate creator
// — distinct from Haumea's rapid-spin generative-fragmentation. Where
// Haumea multiplies by being broken open, Makemake builds by replenishing
// what was depleted, restoring the ecological cycle, and keeping faith
// with the long timescale on which a place can sustain its species.
// The one whose first move is the egg, whose second move is the cycle,
// and whose third move is the restoration of every cycle that has been
// broken. Distinct keyword cluster from Eris (disruption / unmasking),
// Sedna (long-exile / patient-return), and Haumea (fast-spin fertility).
// Pairs with the asteroid Ceres (the harvest mother) and the asteroid
// Vesta (the sacred-fire keeper) — Makemake is the long-cycle ecological
// custodian-god who completes the dwarf-planet shadow tier as the fourth
// body, opening the path forward to centaurs (Pholus, Chariklo, Nessus)
// and the wider trans-Neptunian map.
// Cross-funnels into /gab44/reading?ref=makemake-{sign}.

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

// Per-element accent kept inside a deep-moss / volcanic-basalt-green band
// so the surface reads as the ecological-restoration / patient-creator
// axis (distinct from the deep crimson Eris band, the abyssal-blue Sedna
// band, the rose-magenta Haumea band, the gold Vertex band, the jade
// Hygiea band). Each element shifts the temperature inside the same
// long-cycle / Rapa-Nui green family.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#5a7a3e', c2: '#1f3014' },
  earth: { c1: '#3a5a3e', c2: '#1a2820' },
  air:   { c1: '#6a8a4a', c2: '#243620' },
  water: { c1: '#2a4a3a', c2: '#0e1c14' }
}

interface MakemakeProfile {
  sign: Sign
  // What Makemake creates / restores in this register — the specific
  // long-cycle ecological / cultural / structural restoration she takes
  // up, the cycle she replenishes when it has been broken or thinned by
  // over-extraction.
  restores: string
  // The patience the work requires. Makemake is never a fast-creator;
  // she is the deity of the long enough timescale that the depleted
  // soil can become rich again, the species can return, the practice
  // can re-stabilise. The fee in years.
  patience: string
  // Big paragraph — the lived shape of Makemake in this sign, the way
  // the patient creation / restoration arrives, the cycle she keeps
  // faith with, and the long horizon on which her work compounds.
  body: string
  // The medicine — how to work with Makemake instead of being trapped
  // in either the impatience-that-skips-the-cycle or the over-careful
  // preservation that confuses keeping-things-the-same with restoration.
  medicine: string
  // The shadow shape — the creator-god turned away from creation: the
  // chronic restorationist who is in fact only nostalgic, the gardener
  // who plants nothing because no possible plant fits her image of what
  // was, the cycle-keeper who refuses every actual cycle for the sake
  // of an idealised one.
  shadow: string
  // Approximate generational year-bands. Makemake's orbit is ~310 years;
  // she has been in Libra since the early 20th century and is just
  // beginning to enter Scorpio. The per-sign archetype reads as transit
  // / chart-point / generational placement.
  band: string
}

// Makemake sign hand-shaped meaning. Each is an honest paragraph, not
// a horoscope. Makemake is the Rapa Nui creator-god, the bringer of
// the first egg, the deity whose patient work makes the next cycle
// possible. The dwarf planet whose discovery extended the trans-
// Neptunian map and whose mythology centres on long-cycle ecological
// renewal in a small place that learned, the hard way, what it costs
// when the cycle is broken.
export const MAKEMAKE_PROFILES: Record<Sign, MakemakeProfile> = {
  aries: {
    sign: 'aries',
    restores: 'The depleted first move. The over-used start that has been forced too many times in the same direction and now no longer carries any new life. Makemake in Aries restores the soil of beginnings — the willingness to begin in a way that is patient enough, to let the first move be a seed planted with the cycle in mind rather than a flag thrown for the moment.',
    patience: 'Decades of starts that do not announce themselves. Makemake in Aries asks the warrior to be willing to begin without the first applause, to plant a beginning whose payoff lands long after the first feedback, to cultivate the kind of starts that compound across the next cycle rather than the kind that perform inside the current one.',
    body: 'Makemake in Aries names the patient restoration of the start itself — the deep work of repairing what over-aggressive starting cultures have depleted. She is the founder who, having watched a generation of move-fast-and-break-things produce mostly broken things, now begins her ventures slowly, in plural, with succession built in from the first pitch deck. She is the activist whose first action is a study group whose first study group is a five-year project. She is the athlete whose comeback is structured around the next decade of athletes who will follow her path. The cost is the relinquishment of the heroic-first-move register; the gift is starts that the next generation can stand on.',
    medicine: 'Begin one project this year specifically designed to mature in ten years rather than ten weeks. Tell almost no one what you are building. The Aries-Makemake register grows in the un-announced long-horizon start.',
    shadow: 'The trap is the perpetually-postponed start — the would-be founder who frames every actual beginning as not-yet-patient-enough, the warrior who confuses long-cycle restoration with chronic delay. Real Aries-Makemake patience does begin; the false one only critiques the impatient.',
    band: 'Read by transit and chart-point placement only; Makemake last passed Aries in the early 18th century.'
  },
  taurus: {
    sign: 'taurus',
    restores: 'The depleted soil. The literal soil, the metaphorical soil of the body and the household economy, the soil of the place — every register where the substance has been mined out by over-extraction and where the cycle of replenishment has been broken. Makemake in Taurus is the dwarf-planet deity of regenerative agriculture, of the body brought back to fertility after years of being treated as a resource, of the household that re-learns the slow accumulation rather than the fast turnover.',
    patience: 'Cycles measured in decades, not seasons. Makemake in Taurus is willing to wait the seven, twelve, twenty years that depleted ground actually requires to come back, and is willing to do the un-photogenic intermediate work — the cover crops, the rest-fallow seasons, the years of no harvest at all that the marketing language for "restoration" does not include.',
    body: 'Makemake in Taurus names the slow-substance ecological restoration — the patient regeneration of bodies, lands, household economies, and material cultures that have been depleted by an extractive cycle. She is the regenerative-agriculture farmer who buys the over-grazed pasture and accepts the seven-year horizon. She is the chronic-illness patient whose recovery is the slow re-building of every undermined system. She is the family-wealth steward who rejects the high-return year-on-year framing and chooses the multi-generational compounding instead. The cost is patience that earlier eras did not have to ask of the comparable bodies and lands; the gift is substance that, having been almost lost, returns thicker than before.',
    medicine: 'Identify one substance in your life — body, soil, household, savings — that has been treated extractively, and design the next decade of its care around restoration rather than extraction. The Taurus-Makemake register grows in the multi-decade restoration plan.',
    shadow: 'The trap is the nostalgic conservator — the steward who frames every restoration as a return-to-an-imagined-purer-past, who lets perfect-historical-fidelity be the enemy of any actual recovery. Real Taurus-Makemake restoration produces substance that did not exist before; the false one only photographs what once was.',
    band: 'Read by transit and chart-point placement only; Makemake last passed Taurus in the early-to-mid 18th century.'
  },
  gemini: {
    sign: 'gemini',
    restores: 'The depleted commons of language. The terms that have been so over-used in marketing copy and political register that they no longer mean anything. The conversations that have been so flattened by social media that they cannot carry an actual idea. Makemake in Gemini restores the ecology of meaning — the patient re-cultivation of words that can mean again.',
    patience: 'A generation of conversations. Makemake in Gemini is willing to spend twenty years rebuilding the public meaning of a single concept, knowing that the work is mostly invisible — the careful definition essays, the patient long-form interviews, the slow re-population of the ground language in which a difficult idea can be discussed without immediate misreading.',
    body: 'Makemake in Gemini names the long-cycle restoration of language and idea — the patient work of bringing meaning back to terms that have been worn out. She is the writer who spends a decade reclaiming a single concept from the discourse that destroyed it. She is the educator whose pedagogy specifically exists to re-cultivate the cognitive ground on which deeper thinking depends. She is the editor whose magazine is, secretly, a long re-forestation of the ecology of public conversation. The cost is the relinquishment of the take-of-the-week timeline; the gift is language that can carry meaning again.',
    medicine: 'Pick one degraded term that you care about and spend a year rebuilding its meaning in your own writing and conversation, by precise example rather than by complaint. The Gemini-Makemake register grows in the patient re-population of one word at a time.',
    shadow: 'The trap is the prescriptive lexicographer — the writer who spends decades policing language without ever cultivating any new soil for it, who confuses critique-of-degraded-meaning with the actual work of re-creating meaning. Real Gemini-Makemake restoration writes the new sentence; the false one only laments the old one.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Gemini until the late 21st century.'
  },
  cancer: {
    sign: 'cancer',
    restores: 'The depleted family-line, the broken inheritance pattern, the household ecology that has been hollowed out by intergenerational under-care. Makemake in Cancer is the patient cycle-keeper who repairs the multi-generational architecture: the lineage that has been wounded so consistently for so long that no one in the current cohort remembers what intact lineage felt like. She rebuilds it slowly, one generation at a time.',
    patience: 'Three to five generations of careful work, most of it un-witnessed. Makemake in Cancer is willing to be the ancestor whose primary contribution is the family-soil that the great-grandchildren will be able to grow in — and to accept that her own life will not see the harvest.',
    body: 'Makemake in Cancer names the long-cycle lineage restoration — the patient repair of family architecture that has been damaged across generations. She is the great-aunt who, knowing the family pattern, deliberately raises her children to break the cycle that broke her. She is the chosen-family elder who takes in the wounded twenty-somethings and builds, through five years of consistency, the safe-home muscle they were never given. She is the ancestor-in-training who keeps a multi-decade journal so that, two generations from now, someone in the line can read it and know what she did and why. The cost is the relinquishment of the credit-in-her-lifetime; the gift is a family-line that the descendants will inherit as livable.',
    medicine: 'Write one piece of multigenerational truth this year for a descendant you may not live to meet. Store it where it will be found. The Cancer-Makemake register grows in the message left for the ancestor-future.',
    shadow: 'The trap is the family-keeper-as-martyr — the lineage-restorer whose work performs as suffering rather than as legacy, who frames patience as resentment rather than as gift. Real Cancer-Makemake restoration leaves a livable inheritance; the false one only leaves a long letter about how hard it was.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Cancer for centuries.'
  },
  leo: {
    sign: 'leo',
    restores: 'The depleted creative ecology — the artistic field that has been over-mined for content, the playing-to-the-algorithm that has hollowed out the conditions for serious work, the celebrity-system whose chronic over-spotlight has burned out the soil on which sustained creativity depends. Makemake in Leo restores the long-cycle creative cultural commons.',
    patience: 'A career of careful work that does not chase the spotlight. Makemake in Leo is willing to make the seventh book quietly, to teach the fifteenth class with the same care as the first, to do the slow patient work of building an artistic ecosystem whose conditions outlast the trends.',
    body: 'Makemake in Leo names the patient restoration of creative ecology — the artist, performer, or cultural figure whose work specifically exists to repair the field rather than to win the current attention market. She is the mid-career artist who founds the residency programme that will outlive her gallery. She is the actor who builds the theatre that will train the actors of the next century. She is the bandleader whose secret accomplishment was the four decades of musicians who now play because she made the scene livable. The cost is the algorithmic short-cycle reward; the gift is a culture that can keep making art long after she is no longer in the room.',
    medicine: 'Build one structure this decade — residency, workshop, school, programme — that exists specifically to make the work of artists you will not personally know possible. The Leo-Makemake register grows in the un-self-centred cultural infrastructure.',
    shadow: 'The trap is the legacy-builder-as-monument — the artist who builds the residency in her own name to centre herself in the cultural memory rather than to actually feed the next generation. Real Leo-Makemake restoration grows other peoples\' careers; the false one only grows the donor wing.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Leo for centuries.'
  },
  virgo: {
    sign: 'virgo',
    restores: 'The depleted craft-knowledge, the broken technical lineage, the hollowed-out professional field whose under-paid maintenance work has been let go for so long that the field can no longer reproduce itself. Makemake in Virgo is the patient restoration of the un-glamorous practical knowledge that holds civilisations together.',
    patience: 'Decades of slow apprenticeship work that will not feature in any year-end report. Makemake in Virgo is willing to be the master craftsperson who takes one apprentice every three years, to be the librarian who spends a career re-cataloguing what previous generations let drift, to be the system-administrator whose contribution is the legibility of the system the next generation inherits.',
    body: 'Makemake in Virgo names the patient restoration of craft-knowledge and technical lineage — the under-celebrated practical work without which civilisation does not function. She is the carpenter who rebuilds the dying joinery technique by training one apprentice at a time. She is the maintainer of the open-source library whose decades of unglamorous bug-fixing keep an entire industry running. She is the public-health researcher whose patient restoration of basic epidemiological infrastructure becomes the foundation everyone else stands on the next time things go wrong. The cost is the never-headline-grabbing nature of the work; the gift is a field that the next generation can actually inherit.',
    medicine: 'Take one apprentice this year — formally or informally — in a craft you have spent a decade or more building. Teach the un-glamorous foundational layer. The Virgo-Makemake register grows in the careful one-on-one transmission of practical knowledge.',
    shadow: 'The trap is the under-paid steward who frames her own under-payment as virtue — the maintainer whose patience becomes pride in invisibility, the craft-keeper who refuses to advocate for the conditions her field actually needs to survive. Real Virgo-Makemake restoration includes the craft-and-the-conditions-for-the-craft; the false one only romanticises poverty.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Virgo for centuries.'
  },
  libra: {
    sign: 'libra',
    restores: 'The depleted relational commons — the institutions of pairing, partnership, and community-pairing whose customs have been hollowed out by the divorce-rate-as-feature, the dating-market-as-platform, the friendship-as-content-strategy. Makemake in Libra restores the long-cycle ecology of how humans pair up and build relational structures together.',
    patience: 'Multi-decade marriages, friendships, and partnerships built in plain sight. Makemake in Libra is willing to do the boring relational maintenance that most cultural representations of "relationship" do not include — the regular conversations, the small repairs, the patient growing-with-each-other across the long years that any actual viable partnership requires.',
    body: 'Makemake in Libra is the placement most living adults have shared a register with — Makemake has been moving through Libra since the early 20th century. She names the long-cycle restoration of relational and pairing ecology, the patient work of re-building the customs and institutions through which humans form sustained partnerships. She is the elder couple whose visible marriage has been an unspoken curriculum for a whole generation\'s younger couples. She is the multi-decade friendship that has weathered the entire arc of late-20th-century atomisation. She is the community-builder whose forty-year project was, in fact, a relational restoration work the wider culture badly needed. The cost is the un-glamorous nature of long-cycle relational work; the gift is relational forms that can survive the next century\'s pressures.',
    medicine: 'Have one explicitly long-cycle conversation with a partner, friend, or colleague this season — about what you would still want from the relationship in twenty years. Plan accordingly. The Libra-Makemake register grows in the explicitly long-cycle relational design.',
    shadow: 'The trap is the relationship-as-monument — the long marriage flaunted as accomplishment rather than treated as ecology, the friend-group whose stability becomes a closed wall against any new entrants. Real Libra-Makemake restoration cultivates relational forms that propagate; the false one only advertises its own.',
    band: 'Makemake in Libra: ~1899 → ~2030 (collective register).'
  },
  scorpio: {
    sign: 'scorpio',
    restores: 'The depleted depths — the broken initiatory, sexual, and psychological-depth ecologies that earlier centuries kept stable through specific rituals and lineages, and that the modern era has either abolished or commercialised. Makemake in Scorpio is the patient restoration of how a culture handles the dark register: how it initiates, how it grieves, how it carries the survivors of its own violences.',
    patience: 'A generation of patient depth-work largely conducted in private. Makemake in Scorpio is willing to do the multi-decade rebuilding of the conditions under which depth-work can be safe — to train the next generation of therapists, ritualists, sex-educators, grief-keepers, and trauma-workers, knowing that most of what she does will not be visible or rewarded by the cultural register.',
    body: 'Makemake in Scorpio names the long-cycle restoration of the depth-ecology — the sexual, ritual, psychological, and grief-related architectures that healthy cultures kept stable across centuries and whose modern collapse has produced a generation that does not know how to handle its own depths. She is the trauma-therapist whose patient lineage of supervision has, across forty years, made an entire region\'s therapy ecosystem credible. She is the funeral celebrant whose careful restoration of grief-ritual gives a city a way to mourn again. She is the sex-educator whose decades of patient work re-teach a culture how to handle desire without harm. The cost is the un-photogenic decades that the depth register requires; the gift is a culture that can handle its own dark.',
    medicine: 'Identify one depth-register skill — handling grief, conflict, sex, fear — that your culture has lost the ability to teach well, and become a quiet long-cycle teacher of it in your own community. The Scorpio-Makemake register grows in the patient transmission of dark-register practical wisdom.',
    shadow: 'The trap is the gatekeeper of secret knowledge — the depth-worker whose patience masquerades as withholding, who keeps the lineage closed in the name of protecting it. Real Scorpio-Makemake restoration trains the next century\'s depth-workers; the false one only protects the brand.',
    band: 'Makemake will enter Scorpio in the 2030s.'
  },
  sagittarius: {
    sign: 'sagittarius',
    restores: 'The depleted philosophical commons — the long-form traditions of meaning-making whose institutional homes (universities, religions, civic philosophies) have been thinned by short-cycle market pressures. Makemake in Sagittarius is the patient restoration of the conditions under which a culture can think slowly about meaning, ethics, and the long arc of its own future.',
    patience: 'A career of long-form thought that does not produce viral content. Makemake in Sagittarius is willing to write the careful book whose argument unfolds across two thousand pages, to teach the slow seminar whose effect lands a generation later, to build the patient institution where humans can still think across decades.',
    body: 'Makemake in Sagittarius names the long-cycle restoration of philosophical, religious, and civic-imaginative commons — the patient repair of the institutions and lineages within which a culture thinks about meaning. She is the philosopher whose forty-year body of work re-grounds an entire ethical tradition. She is the rabbi / imam / priest / monastic whose slow patient teaching keeps a religious lineage credible across a century of cultural pressure. She is the civic thinker whose long-form essays, mostly unread in their year of publication, become the founding texts of the next century\'s political imagination. The cost is the relinquishment of the take-economy timeline; the gift is meaning-architecture that future generations can inhabit.',
    medicine: 'Commit one decade of your intellectual life to a single long-form question, refusing to publish until the work is mature. Trust the long arc. The Sagittarius-Makemake register grows in the un-rushed philosophical project.',
    shadow: 'The trap is the long-form-as-status — the writer who claims the long-cycle register without ever doing the patient work, whose "decades-long project" is in fact a chronic excuse for not finishing. Real Sagittarius-Makemake patience produces the long book; the false one only frames itself.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Sagittarius until the 22nd century.'
  },
  capricorn: {
    sign: 'capricorn',
    restores: 'The depleted institutional architecture — the constitutions, charters, long-form contracts, and legal philosophies whose drafting was once the work of generations and which the modern short-cycle pressures have left badly maintained. Makemake in Capricorn is the patient restoration of the structural infrastructure on which civilisation actually depends.',
    patience: 'A career of structural work whose payoff lands in the lifetime of grandchildren. Makemake in Capricorn is willing to spend decades drafting laws, designing institutions, and revising charters whose effects will only be visible long after she is gone — and to accept that the credit, if it comes, will go to those who use what she built.',
    body: 'Makemake in Capricorn names the patient restoration of institutional architecture — the constitutional drafting, the long-form legal philosophy, the multi-generational institution-building that the modern era has neglected. She is the constitutional lawyer whose decades-long redrafting effort becomes the founding document of a future polity. She is the institution-builder whose careful by-laws assume the founder will leave and design every mechanism around that assumption. She is the long-arc historian whose patient excavation of institutional precedent gives a future generation the legal vocabulary to do something differently. The cost is the relinquishment of personal credit in her own lifetime; the gift is structural ground that future generations can build on.',
    medicine: 'Draft one piece of structural architecture this year — by-laws, contract, institutional protocol — explicitly designed for the version that will outlive you. The Capricorn-Makemake register grows in the post-self structural drafting.',
    shadow: 'The trap is the founder who restores in her own image — the institution-builder whose long-cycle work is actually a long-cycle self-monument, whose careful drafting always has her name on it. Real Capricorn-Makemake restoration designs structures the next generation can actually own; the false one only photographs the wing she gave money to.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Capricorn for centuries.'
  },
  aquarius: {
    sign: 'aquarius',
    restores: 'The depleted civic commons — the public spaces, the volunteer associations, the local governance bodies, the platforms-that-were-supposed-to-be-public whose ecological conditions have been mined out. Makemake in Aquarius is the patient restoration of the institutions of "we" at the level of civil society and public-good infrastructure.',
    patience: 'A career of un-glamorous civic work. Makemake in Aquarius is willing to be the volunteer who shows up to the local civic meeting for thirty years, the open-source contributor whose decades of small commits keep critical infrastructure alive, the community organiser whose multi-decade work re-builds the conditions under which a place can be self-governing.',
    body: 'Makemake in Aquarius names the long-cycle restoration of the civic commons — the patient rebuilding of the institutions, customs, and infrastructure through which a society at the public-good level can take care of itself. She is the local elected official whose forty-year tenure in a small region\'s school board quietly re-builds an education system. She is the volunteer fire chief whose decades of unglamorous coordination work hold a county together. She is the public-protocol designer whose patient work makes the next generation\'s digital civic infrastructure possible. The cost is the relinquishment of any individual-credit register; the gift is civic ground that future generations can stand on.',
    medicine: 'Take one un-glamorous public-good role this year — a board, a civic seat, a maintainer-ship, a coordinator role — and commit to it for a decade. The Aquarius-Makemake register grows in the multi-decade civic-commons commitment.',
    shadow: 'The trap is the chronic-volunteer-as-identity — the civic worker whose tenure becomes its own end, whose long service quietly blocks the next generation from growing into the role. Real Aquarius-Makemake civic work cultivates successors; the false one only refuses retirement.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Aquarius for centuries.'
  },
  pisces: {
    sign: 'pisces',
    restores: 'The depleted spiritual commons — the contemplative traditions, the dream-spaces, the artistic-mystical languages that earlier eras stewarded carefully and that the modern era has either abolished or commodified into wellness products. Makemake in Pisces is the patient restoration of the conditions under which contemplative and mystical depth can still take root in a culture that has largely paved over them.',
    patience: 'A lifetime of practice whose primary product is the practice itself. Makemake in Pisces is willing to spend decades meditating, writing, painting, dreaming — knowing that most of what she does will not produce a marketable artefact, and that the real product is the un-broken thread of contemplative attention she carries forward into a culture that has nearly lost the ability to hold it.',
    body: 'Makemake in Pisces names the long-cycle restoration of the contemplative-mystical commons — the patient stewardship of dream, meditation, artistic transcendence, and ritual depth across generations of cultural pressure. She is the contemplative practitioner whose decades of un-photographed sitting hold the lineage open for the students who will come long after her. She is the mystic-artist whose body of work is, secretly, a multi-decade restoration of the visual-spiritual vocabulary a wider culture can still draw from. She is the dream-keeper whose journals, written across forty years, will become source material for a future generation\'s renewed mystical imagination. The cost is the relinquishment of the marketable-spirituality register; the gift is contemplative ground that survives.',
    medicine: 'Commit to one daily contemplative practice for a decade, regardless of any visible result. The Pisces-Makemake register grows in the un-photographed daily sitting.',
    shadow: 'The trap is the long-practitioner-as-credential — the meditator whose decades of practice become a status claim rather than an offering, the mystic whose patience is in fact a refusal to actually transmit what she has stewarded. Real Pisces-Makemake restoration leaves contemplative ground a future generation can use; the false one only mentions her teachers.',
    band: 'Read by transit and chart-point placement only; Makemake will not enter Pisces for centuries.'
  }
}

export const MAKEMAKE_SIGNS = SIGNS

export function isMakemakeSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #2a4a3a; }
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

export function makemakePageHTML(sign: Sign): string {
  const p = MAKEMAKE_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Makemake in ${Sign}`

  // Other Makemake signs strip — discover the other 11. Glyph ◉
  // (a circled dot — the egg, the first form, the seed-of-the-cycle).
  // Distinct from ⊛ Eris, ⏀ Sedna, ✺ Haumea, ◈ Vertex, ⚸ Lilith,
  // ⚷ Chiron, ☊ North Node, and the asteroid set.
  const otherMakemake = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/makemake/${s}">◉ Makemake ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Makemake is the fourth dwarf-planet page completing
  // the trio Eris-Sedna-Haumea, so the side strip leads with all three
  // dwarf-planet siblings, then opens into the asteroid mother + sacred
  // fire (Ceres + Vesta) for thematic resonance, then the rest of the
  // shadow / depth body family.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/haumea/${sign}">✺ Haumea in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur — the foreknowing)</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign} (the harvest mother)</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign} (the sacred fire)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (the open wound)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/makemake">all 12 Makemake signs</a>`
  ].join('')

  const title = `${headline} — dwarf planet 136472, the patient creation / ecological-restoration axis · gab44`
  const description = `${headline}: how Makemake (dwarf planet 136472) carries the long-cycle creation / ecological-restoration register in this sign. ${p.restores} ${p.patience} The full archetype with medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Makemake', item: `${SITE_URL}/gab44/makemake` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/makemake/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/makemake/${sign}`,
        about: `${headline} — patient creation / ecological-restoration axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/makemake/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.restores)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/makemake/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%97%89%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/makemake">all 12 Makemake signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/eris/${sign}">Eris in ${Sign}</a>
      <a href="/gab44/sedna/${sign}">Sedna in ${Sign}</a>
      <a href="/gab44/haumea/${sign}">Haumea in ${Sign}</a>
      <a href="/gab44/reading?ref=makemake-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">◉ ${sm.symbol}</div>
      <div class="meta">Makemake ◉ ${Sign} · dwarf planet 136472 · the patient creation / ecological-restoration axis</div>
    </div>
    <h1><span class="accent">Makemake</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.restores)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>◉ Makemake in ${Sign} — what she restores</h3>
        <p>${escapeHtml(p.restores)}</p>
      </div>
      <div class="panel">
        <h3>◉ Makemake in ${Sign} — the patience the work asks</h3>
        <p>${escapeHtml(p.patience)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Makemake in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">◉</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Makemake in ${Sign} stuck on nostalgia</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Makemake</span><span class="v">◉ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">dwarf planet 136472 (discovered 2005)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~310-year solar orbit, classical Kuiper belt</span></div>
      <div class="row"><span class="k">Named for</span><span class="v">Rapa Nui (Easter Island) creator-god, bringer of the first egg</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">patient creation / ecological-restoration / long-cycle stewardship</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=makemake-${sign}">Get a $9 Makemake-aware reading →</a>
    </div>

    <h2>The other 11 Makemake signs</h2>
    <div class="strip">${otherMakemake}</div>

    <h2>Related — your long-cycle stewardship cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · patient creation / ecological-restoration axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function makemakeIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = MAKEMAKE_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/makemake/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">◉ ${sm.symbol}</div>
      <div class="name">Makemake in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · patient creation</div>
      <div class="vibe-mini">${escapeHtml(p.restores)}</div>
    </a>`
  }).join('')

  const title = `Makemake by sign — dwarf planet 136472, the patient creation / ecological-restoration axis · gab44 ✨`
  const description = `Makemake in {sign} — the long-cycle creation / ecological-restoration signature across all 12 zodiac signs. The dwarf planet named for the Rapa Nui creator-god, the bringer of the first egg, the deity of long-cycle ecological renewal. The patient stewardship axis. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Makemake's natural neighbours are the other
  // dwarf planets (Eris, Sedna, Haumea), the asteroid mother / sacred
  // fire pair (Ceres / Vesta) thematically aligned with long-cycle
  // stewardship, and the rest of the gab44 graph.
  const navStrip = [
    `<a href="/gab44/eris">⊛ Eris by sign (the disruption / unmasking)</a>`,
    `<a href="/gab44/sedna">⏀ Sedna by sign (the long exile / patient return)</a>`,
    `<a href="/gab44/haumea">✺ Haumea by sign (fertility / generative fragmentation)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur — the foreknowing)</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign (the harvest mother)</a>`,
    `<a href="/gab44/vesta">⚶ Vesta by sign (the sacred fire)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/chiron">⚷ Chiron by sign (the open wound)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/makemake" />
<meta property="og:title" content="Makemake by sign · gab44" />
<meta property="og:description" content="The patient creation / ecological-restoration signature of dwarf planet 136472 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#2a4a3a;--c2:#0e1c14;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/eris">⊛ Eris</a>
      <a href="/gab44/sedna">⏀ Sedna</a>
      <a href="/gab44/haumea">✺ Haumea</a>
      <a href="/gab44/reading?ref=makemake-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#2a4a3a,#0e1c14)">◉</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · dwarf planet 136472 (discovered 2005)</div>
    </div>
    <h1>Makemake <span class="accent">by sign</span></h1>
    <p class="vibe">Eris is the disruption that exposes. Sedna is the exile that returns. Haumea is the fast spin that multiplies. Makemake is the patient creator who restores the broken cycle — the Rapa Nui creator-god whose work is replenishing what extraction has thinned, on the long enough timescale that the soil can be ground again. The fourth dwarf-planet shadow body, completing the tier. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Makemake completes the dwarf-planet quartet she shares with Eris, Sedna, and Haumea — disruption, exile, fast fertility, and patient restoration — and pairs with Ceres / Vesta (the asteroid harvest-mother and sacred-fire-keeper) in the wider stewardship field. Read the four dwarfs together for the full long-cycle shadow-and-creation read, then open into the asteroid graph and the chart-point lane.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=makemake-index">Want a deeper, makemake-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Makemake-by-sign pages · evergreen · the patient creation and ecological-restoration axis.
    </footer>
  </div>
</body>
</html>`
}
