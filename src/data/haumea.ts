// Haumea × sign SEO funnel — /gab44/haumea (index) + /gab44/haumea/{sign}
// (12 pages). Round 27 of the gab44 evergreen surface. Targets the
// dwarf-planet / fertility / generative-fragmentation keyword cluster:
// "haumea in {sign} meaning", "{sign} haumea", "dwarf planet haumea
// astrology", "haumea fertility chart". Haumea is dwarf planet 136108
// — discovered 2004, named for the Hawaiian goddess of childbirth and
// fertility, the trans-Neptunian body that spins faster than any other
// large solar-system object (rotation period ~3.9 hours), the rapid
// spin elongating her into a stretched ellipsoid. She has two moons
// (Hi'iaka and Namaka) — her two daughters in the Hawaiian myth, born
// from her body. Astrologically she names the generative force whose
// creation requires self-fragmentation: the mother whose children come
// from her body literally being broken apart, the artist whose work is
// born from being torn open, the founder whose company multiplies by
// splitting, the teacher whose teaching propagates only because the
// students each become a different teacher. Distinct keyword cluster
// from Eris (disruption / unmasking), from Sedna (long-exile /
// patient-return), from Ceres (the nurturing harvest mother), and from
// Lilith / Chiron. Haumea is the spinning generative body whose gift
// is multiplication-through-fragmentation. Pairs structurally with Eris
// and Sedna as the third dwarf-planet page, completing the dwarf-tier
// arc before the centaur lane opens.
// Cross-funnels into /gab44/reading?ref=haumea-{sign}.

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

// Per-element accent kept inside a rose-magenta / fertility-pink band
// so the surface reads as the generative-fragmentation axis (distinct
// from the deep crimson Eris band, the abyssal-blue Sedna band, the
// jade Hygiea band, the gold Vertex band). Each element shifts the
// temperature inside the same rose-fruit family.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#e85a8e', c2: '#6a0a3a' },
  earth: { c1: '#c2547a', c2: '#54122e' },
  air:   { c1: '#d56a92', c2: '#5a1638' },
  water: { c1: '#a83e6a', c2: '#400824' }
}

interface HaumeaProfile {
  sign: Sign
  // What Haumea births in this register — the specific kind of new
  // life / new form / new generative possibility she catalyses through
  // the rapid spin and the willing fragmentation.
  births: string
  // What it costs — the price of the generativity, the way she has to
  // be willing to be broken apart for the new things to come from her.
  // Haumea is never about lossless creation; she is about the woman
  // whose body became two daughters.
  costs: string
  // Big paragraph — the lived shape of Haumea in this sign, the way
  // the rapid generation arrives, the fragmentation it requires, and
  // the multiplicity that comes from it.
  body: string
  // The medicine — how to work with Haumea instead of being trapped
  // in either the refusal-to-fragment ("I will protect my one form")
  // or the over-fragmentation ("I will scatter myself until nothing
  // remains").
  medicine: string
  // The shadow shape — the generativity turned against itself: the
  // chronic over-extension, the founder who births a hundred companies
  // and leaves none of them functional, the artist who fragments so
  // continuously that no work ever completes.
  shadow: string
  // Approximate generational year-bands. Haumea's orbit is ~283 years;
  // she entered Libra in the early 1980s and is currently moving
  // through Libra / Scorpio. The per-sign archetype reads as transit
  // / chart-point / generational placement.
  band: string
}

// Haumea sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. Haumea is the Hawaiian goddess of childbirth — the body
// that spins so fast it generates new bodies from its own substance,
// the mother whose two daughters Hi'iaka and Namaka were born from
// her body in pieces, and the dwarf planet whose own moons in our
// solar system carry their names.
export const HAUMEA_PROFILES: Record<Sign, HaumeaProfile> = {
  aries: {
    sign: 'aries',
    births: 'New starts, in a hurry, in plural. The fast first move that becomes three first moves. The founder who launches one company and finds it has split, by the second year, into a constellation of related ventures. The athlete whose body keeps generating new sports. The activist whose single cause keeps becoming a movement-of-movements.',
    costs: 'The original singular self that will not survive the spin. Haumea in Aries asks for the willingness to be the founder who is no longer the centre of the thing she founded — the willingness to let the first move generate the second and the third without insisting on remaining the only mover.',
    body: 'Haumea in Aries names the rapid generative-spin at the threshold of action — the body that, the moment it commits to one start, finds itself committed to several. She is the founder of three things at once who discovers that all three were always one thing in different costumes. She is the warrior whose first battle taught her to teach battle, and whose teaching multiplies into a school whose graduates are now fighting in places she will never visit. The cost is the singular-hero version of the start; the gift is the recognition that the start was always too big for one body, and that the rapid spin that fragments her is also what propagates her. Haumea in Aries grows the muscle of the originator who can survive ceasing to be the only origin.',
    medicine: 'Notice one project in your life that has already split, even if you have not officially admitted it. Acknowledge the split. Let the second branch grow without competing with the first. The Aries-Haumea register grows in the un-grudging hand-off.',
    shadow: 'The trap is the perpetual new start — the founder who launches because launching is the only thing that feels alive, the constant fragmentation into new beginnings none of which ever stabilise into anything. Real Aries-Haumea spin produces daughters who outlive her; the false one only produces stillbirths.',
    band: 'Read by transit and chart-point placement only; Haumea last entered Aries in the late 19th century.'
  },
  taurus: {
    sign: 'taurus',
    births: 'New material forms, in plural. The garden that becomes orchard becomes economy becomes inheritance line. The body that becomes child becomes lineage. The craft that becomes workshop becomes school becomes industry. The slow, plural, self-replicating fertility of substance.',
    costs: 'The hoardability of the original. Haumea in Taurus asks the substance to be willing to be transmitted — the willingness to let the inheritance go forward in fragments rather than be kept whole, to let the craft be taught instead of guarded, to let the body bear the weight of being one of many bearings.',
    body: 'Haumea in Taurus names the slow-rotation generative-fertility — the kind of creation that takes its time, accumulates substance, and only then begins to multiply, each fragment carrying the full genetic signature of the original. She is the heirloom seed that stayed safe in the freezer for forty years and now, planted, becomes a hundred plants. She is the matriarch whose recipes become the family\'s economy. She is the slow-built workshop that quietly trained the makers of three generations of an entire region\'s craft. The cost is the willingness to let substance be transmitted rather than hoarded; the gift is the fertility that compounds across generations.',
    medicine: 'Identify one piece of substance in your life — knowledge, recipe, capital, craft — that you have been keeping whole and could begin to transmit. Begin transmitting it. The Taurus-Haumea register grows in the carefully-given fragment.',
    shadow: 'The trap is hoard-as-fertility — the body that talks fertility and never lets anything actually leave its keeping, the substance that is endlessly readied for transmission and never transmitted. Real Taurus-Haumea fertility lets the seed go; the false one only photographs the seed.',
    band: 'Read by transit and chart-point placement only; Haumea last passed through Taurus in the early 20th century.'
  },
  gemini: {
    sign: 'gemini',
    births: 'New language, new ideas, new conversations — propagating in plural. The book that becomes ten translations becomes a tradition. The single insight that becomes a school of thought. The conversation that fragments into a thousand sub-conversations, each one alive, each one carrying the original signature.',
    costs: 'Sole authorship. Haumea in Gemini asks the speaker to release the idea fully into the mouths of the people who will speak it next, even when those people will mis-quote, re-direct, and re-purpose it beyond recognition.',
    body: 'Haumea in Gemini names the rapid intellectual fertility — the way one good sentence, spoken into the right room, propagates into a thousand sentences in mouths the original speaker will never meet. She is the writer whose first book becomes a genre. She is the philosopher whose technical term enters ordinary language. She is the meme-author who watches her phrase travel across the internet, mutating, distorting, and somehow, in each mutation, still carrying the original signal. The cost is the relinquishment of authorial control; the gift is the realisation that the idea was never owned to begin with — it was being held until the right wind came.',
    medicine: 'Say the sentence that you have been editing into perfect form for months, in any forum where it will be heard. Let it begin to fragment immediately. The Gemini-Haumea register grows in the un-perfected utterance let loose.',
    shadow: 'The trap is the chronic broadcaster — the speaker who fragments her language so continuously that no single sentence ever gets to land, the writer whose one idea becomes ten thousand slightly-different versions of itself with no single one any reader can carry. Real Gemini-Haumea fertility plants language in others\' mouths; the false one only fills the air with its own.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Gemini for centuries.'
  },
  cancer: {
    sign: 'cancer',
    births: 'New homes, new lineages, new families — generated from the body of the matriarch who is willing to bear the weight of being the founding ancestor. The chosen family that becomes a tribe. The household that becomes a community. The kitchen that becomes a hospitality industry. The mother who becomes a grandmother who becomes the mythic ancestress.',
    costs: 'Being the only one who remembers the beginning. Haumea in Cancer asks the matriarch to be willing to be eclipsed by her own descendants, to be honoured as the source while no longer being the centre, to let the line continue past her.',
    body: 'Haumea in Cancer names the deeply intimate version of the generative-fragmentation — the kind that happens at the kitchen table over decades, the way one woman\'s commitment to one home generates the network of homes that, in three generations, becomes a small civilisation. She is the great-grandmother whose recipes are now in eight kitchens. She is the chosen-family mother whose first house becomes a system of houses. She is the foster-parent whose love propagates outward into the families her children form, and the families those children form. The cost is the willingness to let the home you built be left, repeatedly, by the people you raised in it; the gift is the recognition that the leaving is the proof of the home.',
    medicine: 'Bless one descendant\'s departure from your home — biological, chosen, or metaphorical — without conditioning the blessing on their return. The Cancer-Haumea register grows in the unconditional release of the next generation.',
    shadow: 'The trap is the mother who refuses to be eclipsed — the matriarch who keeps the line alive only as her own audience, the grandmother whose love comes with the condition of being the centre. Real Cancer-Haumea fertility lets the line go forward without her; the false one keeps it tethered to her dining table.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Cancer for centuries.'
  },
  leo: {
    sign: 'leo',
    births: 'New radiance, in plural. The artist who becomes a school. The performer who trains performers. The single creative voice that propagates into a generation of voices, each one inflected by the original, none of them imitations. The lit room that lights other rooms.',
    costs: 'The exclusivity of the original spotlight. Haumea in Leo asks the radiant one to be willing to share the light without dimming it — to be the source rather than the show, the candle rather than the only flame in the room.',
    body: 'Haumea in Leo names the radiant generative-fertility — the artist, performer, leader, or charismatic whose light propagates rather than monopolises. She is the dance teacher whose students become the dance, the playwright whose actors keep finding new shows in the same lines, the bandleader whose sidemen become bandleaders. The cost is the willingness to be cited, not centred — to let the next generation\'s shine be the proof of yours. The gift is a kind of radiance that does not need the audience to confirm its own existence, because the radiance is now propagating in rooms its source will never enter.',
    medicine: 'Use your platform this week to elevate one person whose work you genuinely admire, with no expectation of reciprocity. The Leo-Haumea register grows in the spotlight that points outward as confidently as it once pointed inward.',
    shadow: 'The trap is the founder of the school who cannot bear the school — the radiant figure who cultivates students only as long as the students remain dimmer, who fragments her audience out of fear of being eclipsed. Real Leo-Haumea fertility produces successors; the false one produces sycophants.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Leo for centuries.'
  },
  virgo: {
    sign: 'virgo',
    births: 'New systems, new craft-lineages, new bodies of practice — propagating in plural. The single careful workflow that becomes the field\'s standard. The well-built tool that becomes a hundred well-built tools by other hands. The discipline that propagates because the discipline was specifically designed to propagate.',
    costs: 'The author\'s preferred version. Haumea in Virgo asks the craftsperson to ship the work in a form that can be picked up and modified by hands she does not know — not the perfect version for her own use, but the transmissible version that will get re-shaped by every craftsperson who picks it up.',
    body: 'Haumea in Virgo names the technical version of generative-fragmentation — the craft, system, or discipline that was specifically designed, from the start, to be improved by its inheritors rather than only preserved. She is the open-source maintainer whose project is now contributed to by people she has never met, in production at scale she did not predict. She is the surgeon whose technique is now taught in fifty hospitals, each adapting it to local conditions. She is the librarian whose cataloguing system becomes the field\'s convention precisely because she designed it to be modified. The cost is the perfectionist version of the work; the gift is the work that survives because it was built to be touched.',
    medicine: 'Document one piece of your craft this week in a form deliberately built for someone else to modify — not for them to copy. The Virgo-Haumea register grows in the gift specifically designed to be re-shaped.',
    shadow: 'The trap is the gatekeeper-as-craftsperson — the maker who fragments her craft into so many proprietary subspecialties that none of it can travel without her, the author who insists on personal approval of every adaptation. Real Virgo-Haumea propagation hands the craft on; the false one charges rent on every use.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Virgo for centuries.'
  },
  libra: {
    sign: 'libra',
    births: 'New relational forms, new partnerships, new institutions of pairing — propagating in plural. The first long marriage that becomes the model for several younger couples. The mediator whose method propagates into a generation of mediators. The diplomatic agreement that becomes the template for a region.',
    costs: 'The original closed pair. Haumea in Libra asks the partnership to be willing to be a public good rather than a private possession — to let the model travel, to let the technique be copied, to let the children-of-the-partnership form their own partnerships in turn.',
    body: 'Haumea in Libra is the placement most living adults have shared a register with — Haumea has been moving through Libra since the early 1980s. This is part of why the cultural register has been so saturated with the question of how relationship itself reproduces: how partnerships generate new partnerships, how relational technique becomes transmissible practice, how the model of "good partnership" travels (or fails to travel) into the next generation. The fragmentation is the willingness to let one\'s own relationship become public information, modelled, taught, modified. The gift is a culture of relational fertility — a generation that learned, from a previous generation\'s relationships, how to build the next ones differently. Haumea in Libra returns as the elder couple whose partnership has been the un-spoken curriculum for everyone who watched it.',
    medicine: 'Tell one younger person, in detail, what you have learned in your most generative relationship — and what failed. The Libra-Haumea register grows in the lineage-talk that turns private partnership into public craft.',
    shadow: 'The trap is the relationship-as-trophy — the partnership flaunted as an accomplishment rather than transmitted as a craft, the model that gets photographed but never explained. Real Libra-Haumea fertility teaches the next pair how; the false one only stands beside them at the wedding.',
    band: 'Haumea in Libra: ~1981 → ~2030. The collective register of every living adult.'
  },
  scorpio: {
    sign: 'scorpio',
    births: 'New depths, new initiations, new lineages of psychological / sexual / spiritual transmission — propagating in plural. The therapist whose method becomes a school. The mystic whose practice becomes a tradition. The trauma-informed teacher whose work, propagating in plural, generates the field that will eventually treat the next generation\'s wounds.',
    costs: 'The intimate exclusivity of the original transmission. Haumea in Scorpio asks the depth-worker to be willing to systematise what was originally one-on-one, to let the technique be taught even though the original transmission was personal — to risk the dilution that comes with scale.',
    body: 'Haumea in Scorpio is the second placement most living adults will share, as Haumea moves into Scorpio after Libra. She names the rapid generative-spin in the depth register — the way the mid-late-20th-century explosion of psychological, somatic, sexual, and contemplative methodologies has been propagating into the early 21st as a hundred branching schools, each one carrying the original transmission while also mutating it for new contexts. The cost is the relinquishment of the master-student-secret-lineage form; the gift is the re-propagation of depth itself, at a scale earlier centuries did not have language for.',
    medicine: 'Make one piece of your depth-knowledge transmissible this season — write it down, teach the basics, mentor someone. Risk the dilution. The Scorpio-Haumea register grows in the un-gatekept transmission.',
    shadow: 'The trap is the secret-school-as-brand — the depth-worker who keeps the work private long after privacy is the wrong choice, who frames every potential student as not-yet-ready in order to retain ownership of what should already be travelling. Real Scorpio-Haumea fertility risks the dilution; the false one weaponises the gate.',
    band: 'Haumea in Scorpio: roughly entering through ~2030 → ~2080. The next collective register.'
  },
  sagittarius: {
    sign: 'sagittarius',
    births: 'New worldviews, new philosophies, new traditions of meaning — propagating in plural. The single teaching that becomes a tradition that becomes a hundred traditions, each in its own context, each carrying the original spark. The pilgrimage that generates the route. The synthesis that becomes the field.',
    costs: 'Doctrinal control. Haumea in Sagittarius asks the founder of meaning to release the meaning into the hands of teachers and students who will adapt it past the founder\'s lifetime, accepting that the tradition that survives will not be the one she would have written.',
    body: 'Haumea in Sagittarius names the rapid generative-fertility in the meaning register — the way one teacher\'s synthesis, given to the right hour, becomes the seed for centuries of subsequent thought, none of which will resemble the founder\'s own intent past the third generation. She is the founder of every tradition that lasted, which is also the founder of every tradition that was no longer recognisable to its founder past her own children. The cost is doctrinal control. The gift is meaning that travels beyond a single life, propagating because it was offered, not because it was enforced.',
    medicine: 'Articulate one of your operating worldviews in a form that someone could disagree with intelligently — not in a form that demands agreement. The Sagittarius-Haumea register grows in the worldview offered for adaptation.',
    shadow: 'The trap is the dogmatic founder — the visionary who births a tradition and then spends her life policing its boundaries, fragmenting the lineage into purer-than-thou splinters. Real Sagittarius-Haumea fertility lets the tradition mutate; the false one only excommunicates the mutators.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Sagittarius until ~2080.'
  },
  capricorn: {
    sign: 'capricorn',
    births: 'New institutions, new structures, new long-form vehicles for human work — propagating in plural. The first institution that becomes the founding-model for a sector. The single law that becomes the template for a region\'s legal philosophy. The carefully built company that becomes the seed for a generation of carefully built companies.',
    costs: 'Founder-control. Haumea in Capricorn asks the institution-builder to design for succession from the start, to give up the option of remaining the indispensable centre, to architect for replication rather than for personal continuity.',
    body: 'Haumea in Capricorn names the structural version of generative-fragmentation — the slow, careful, deliberately-architected propagation of institutions, laws, contracts, and long-form vehicles. She is the founder who, from year one, designs the company for the day she will not be in it. She is the legislator whose careful law becomes the template for ten subsequent ones in ten different jurisdictions. She is the architect whose first building becomes the seed of a movement of buildings, each one adapted to its locality. The cost is founder-control; the gift is durable structure that outlives the founder.',
    medicine: 'Identify one structure in your life — work, contract, project — and design one element of it specifically for the version that will exist after you are no longer central. The Capricorn-Haumea register grows in the deliberate succession-design.',
    shadow: 'The trap is the founder who cannot leave — the institution-builder whose succession-plan is a year before her death, whose fragmentation comes too late and tears the structure rather than propagating it. Real Capricorn-Haumea fertility hands the structure forward in time; the false one only grips it tighter as the years pass.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Capricorn for over a century.'
  },
  aquarius: {
    sign: 'aquarius',
    births: 'New movements, new collectives, new modes of belonging — propagating in plural. The single activist circle that becomes a network of circles. The single cooperative that becomes a model for a federation. The single online community that propagates into a hundred mirrored communities, each adapting the original protocol.',
    costs: 'The original group. Haumea in Aquarius asks the founder of the collective to let the collective fragment into many collectives without insisting that the original be preserved as central — to let the model travel rather than the original keep the trademark.',
    body: 'Haumea in Aquarius names the rapid social-political generative-fertility — the way one well-designed collective, given the right moment, propagates across continents within a decade, each instance adapted to local conditions, each one carrying the original protocol. She is the founder of a movement that becomes a movement-of-movements, the architect of a community whose forking is itself the proof of its design. The cost is the willingness to be cited rather than continually re-invited to the centre. The gift is a culture that learned, from one collective\'s example, how to build the next ones differently.',
    medicine: 'Document one of your collective experiments in a form specifically designed to be replicated — not in a form designed to advertise the original. The Aquarius-Haumea register grows in the open-source community-design.',
    shadow: 'The trap is the founder who cannot bear the fork — the activist who fragments the movement only on her own terms, the community-architect who insists every adaptation pass through her approval. Real Aquarius-Haumea fertility welcomes the fork; the false one denounces it.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Aquarius for over a century.'
  },
  pisces: {
    sign: 'pisces',
    births: 'New mysticisms, new arts, new dreamspaces — propagating in plural. The single artist whose vision becomes the visual vocabulary of a decade. The mystic whose images propagate into a thousand other artists, dancers, musicians, poets. The dreamer whose dream becomes shared culture.',
    costs: 'Authorship of the original dream. Haumea in Pisces asks the artist to release the image fully into the collective, to be willing to see it mis-attributed, re-mixed, and absorbed into the wider culture in ways that may erase her name even as they propagate her vision.',
    body: 'Haumea in Pisces names the dream-register generative-fragmentation — the rapid propagation of an aesthetic, a mystical idiom, a dreamspace into the collective imagination via paths the original dreamer cannot trace. She is the artist whose specific palette becomes the season\'s visual language. She is the mystic whose particular framing of the divine becomes shared vocabulary across a generation\'s spiritual culture. She is the songwriter whose particular cadence becomes the cadence of a whole genre. The cost is authorship of the original dream; the gift is the dream\'s actual propagation, which was always the point.',
    medicine: 'Release one of your images / songs / pieces into the world without watermark, without attribution-requirement, with the explicit blessing that anyone may adapt it. The Pisces-Haumea register grows in the un-credited dream gift.',
    shadow: 'The trap is the dream-as-property — the artist who frags her aesthetic into endless self-citing variants, who polices every echo of her work as if echoes were thefts. Real Pisces-Haumea fertility lets the dream propagate; the false one only sues the dreamers.',
    band: 'Read by transit and chart-point placement only; Haumea will not enter Pisces for over a century.'
  }
}

export const HAUMEA_SIGNS = SIGNS

export function isHaumeaSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #a83e6a; }
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

export function haumeaPageHTML(sign: Sign): string {
  const p = HAUMEA_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Haumea in ${Sign}`

  // Other Haumea signs strip — discover the other 11. Glyph ✺ (a six-
  // petaled rosette evoking the fast-spin and the multiple offspring
  // — distinct from ⊛ Eris, ⏀ Sedna, ◈ Vertex, ⚸ Lilith, ⚷ Chiron,
  // ☊ North Node, and the asteroid set).
  const otherHaumea = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/haumea/${s}">✺ Haumea ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Haumea is the third dwarf-planet page, so the
  // side strip leads with Eris and Sedna (her dwarf-planet siblings),
  // then opens out into the shadow-body family and the asteroid graph.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/makemake/${sign}">◉ Makemake in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur — the foreknowing)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (the open wound)</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign} (the nurturing mother)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/haumea">all 12 Haumea signs</a>`
  ].join('')

  const title = `${headline} — dwarf planet 136108, the fertility / generative-fragmentation axis · gab44`
  const description = `${headline}: how Haumea (dwarf planet 136108) carries the rapid-generative-spin / fertility-through-fragmentation register in this sign. ${p.births} ${p.costs} The full archetype with medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Haumea', item: `${SITE_URL}/gab44/haumea` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/haumea/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/haumea/${sign}`,
        about: `${headline} — fertility / generative-fragmentation axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/haumea/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.births)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/haumea/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%BA%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/haumea">all 12 Haumea signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/eris/${sign}">Eris in ${Sign}</a>
      <a href="/gab44/sedna/${sign}">Sedna in ${Sign}</a>
      <a href="/gab44/reading?ref=haumea-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">✺ ${sm.symbol}</div>
      <div class="meta">Haumea ✺ ${Sign} · dwarf planet 136108 · the fertility / generative-fragmentation axis</div>
    </div>
    <h1><span class="accent">Haumea</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.births)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>✺ Haumea in ${Sign} — what she births</h3>
        <p>${escapeHtml(p.births)}</p>
      </div>
      <div class="panel">
        <h3>✺ Haumea in ${Sign} — what it costs</h3>
        <p>${escapeHtml(p.costs)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Haumea in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">✺</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Haumea in ${Sign} over-fragmenting</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Haumea</span><span class="v">✺ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">dwarf planet 136108 (discovered 2004)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~283-year solar orbit, Kuiper belt</span></div>
      <div class="row"><span class="k">Spin</span><span class="v">~3.9-hour rotation — fastest of any large body in the solar system</span></div>
      <div class="row"><span class="k">Moons</span><span class="v">Hi'iaka and Namaka (her two daughters in Hawaiian myth)</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">fertility / generative-fragmentation / propagation-through-self-multiplication</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=haumea-${sign}">Get a $9 Haumea-aware reading →</a>
    </div>

    <h2>The other 11 Haumea signs</h2>
    <div class="strip">${otherHaumea}</div>

    <h2>Related — your generativity cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · fertility / generative-fragmentation axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function haumeaIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = HAUMEA_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/haumea/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">✺ ${sm.symbol}</div>
      <div class="name">Haumea in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · fertility / fast spin</div>
      <div class="vibe-mini">${escapeHtml(p.births)}</div>
    </a>`
  }).join('')

  const title = `Haumea by sign — dwarf planet 136108, the fertility / generative-fragmentation axis · gab44 ✨`
  const description = `Haumea in {sign} — the rapid-spin fertility signature across all 12 zodiac signs. The Hawaiian goddess of childbirth as dwarf planet; the trans-Neptunian body that spins faster than any other large solar-system object, whose two moons Hi'iaka and Namaka were born from her body in myth. The propagation-through-self-multiplication axis. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Haumea's natural neighbours are the other
  // dwarf planets (Eris, Sedna), the nurturing-mother asteroid (Ceres),
  // and the rest of the gab44 graph.
  const navStrip = [
    `<a href="/gab44/eris">⊛ Eris by sign (the disruption / unmasking)</a>`,
    `<a href="/gab44/sedna">⏀ Sedna by sign (the long exile / patient return)</a>`,
    `<a href="/gab44/makemake">◉ Makemake by sign (patient creation / restoration)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur — the foreknowing)</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign (nurturing harvest mother)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/chiron">⚷ Chiron by sign (the open wound)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign</a>`,
    `<a href="/gab44/hygiea">✦ Hygiea by sign</a>`,
    `<a href="/gab44/pallas">⚴ Pallas by sign</a>`,
    `<a href="/gab44/juno">⚵ Juno by sign</a>`,
    `<a href="/gab44/vesta">⚶ Vesta by sign</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/haumea" />
<meta property="og:title" content="Haumea by sign · gab44" />
<meta property="og:description" content="The fertility / generative-fragmentation signature of dwarf planet 136108 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#a83e6a;--c2:#400824;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/eris">⊛ Eris by sign</a>
      <a href="/gab44/sedna">⏀ Sedna by sign</a>
      <a href="/gab44/ceres">⚳ Ceres by sign</a>
      <a href="/gab44/reading?ref=haumea-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#a83e6a,#400824)">✺</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · dwarf planet 136108 (discovered 2004)</div>
    </div>
    <h1>Haumea <span class="accent">by sign</span></h1>
    <p class="vibe">Eris is the disruption that exposes. Sedna is the exile that returns. Haumea is the rapid spin that multiplies — the goddess whose children came from her own body in pieces, the dwarf planet that turns so fast it has stretched itself into an ellipsoid and birthed two moons. The third dwarf-planet shadow body, the fertility axis. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Haumea completes the dwarf-planet trio she shares with Eris and Sedna — disruption, exile, and rapid generative fertility — and pairs with Ceres in the wider mothering / nurturing / harvest field. Read the trio together for the full dwarf-tier shadow read, then open out into the asteroid graph and the chart-point lane.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=haumea-index">Want a deeper, haumea-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Haumea-by-sign pages · evergreen · the fertility / generative-fragmentation axis.
    </footer>
  </div>
</body>
</html>`
}
