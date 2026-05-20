// Pholus × sign SEO funnel — /gab44/pholus (index) + /gab44/pholus/{sign}
// (12 pages). Round 29 of the gab44 evergreen surface. Targets the
// centaur / small-cause-large-effect / unsealing keyword cluster:
// "pholus in {sign} meaning", "{sign} pholus", "centaur pholus astrology",
// "pholus small cause large effect", "pholus chart". Pholus is centaur
// 5145 — discovered 1992, the second centaur named (Chiron was first, in
// 1977). Centaurs are minor planets that orbit between Saturn and Neptune
// and live, structurally, between the orbits of the social planets and
// the trans-Neptunian shadow bodies. They are the mediators of crossings.
// Pholus, in myth, is the gentle centaur who hosts Heracles and, as a
// gesture of hospitality, opens the great wine-jar that Dionysus had left
// in the centaurs' keeping with one explicit instruction: do not unseal
// it until the right time. The smell of the wine on the wind brings the
// other centaurs charging down the mountain in a frenzy; the chain of
// events that follows — the battle, the wounding of Chiron, the death
// of Pholus himself by accidentally dropping a poisoned arrow on his own
// foot — cannot be reversed. Pholus is the body that names the small,
// well-meant act whose consequences cascade past anyone's ability to
// stop them. Astrologically he is the lid coming off — the moment of
// unsealing, the small first move whose downstream chain rearranges
// everything, the messenger of the irreversible. Distinct keyword
// cluster from Chiron (the open wound), from Eris (deliberate
// disruption), from Sedna (slow exile), from Haumea (fast multiplication),
// from Makemake (patient restoration). Pholus is the gentle host whose
// hospitality unseals more than he meant to. Opens the centaur lane —
// next moves: Chariklo (sacred enclosure), Nessus (abuse-cycle),
// Asbolus (the seer-centaur), Hylonome (the grief of the centaur).
// Cross-funnels into /gab44/reading?ref=pholus-{sign}.

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

// Per-element accent kept inside an amber-wine / spilled-vintage band so
// the surface reads as the unsealing / first-uncorked-jar axis (distinct
// from the deep crimson Eris band, the abyssal-blue Sedna band, the
// rose-magenta Haumea band, the volcanic-basalt-green Makemake band, the
// gold Vertex band, the jade Hygiea band). Each element shifts the
// temperature inside the same fermented-amber family — the colour of the
// wine that should not have been opened yet.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#c8782a', c2: '#4a1f08' },
  earth: { c1: '#9a5a22', c2: '#3a1a08' },
  air:   { c1: '#d68a3a', c2: '#5a2a10' },
  water: { c1: '#7a4218', c2: '#28100a' }
}

interface PholusProfile {
  sign: Sign
  // What gets unsealed when Pholus moves through this register — the
  // particular wine-jar this sign keeps lidded, the small first move
  // whose smell on the wind brings the chain charging down the mountain.
  unseals: string
  // The cascade that follows — the irreversible downstream chain. The
  // Pholus moment is never about the act itself; it is about the way the
  // act, once made, propagates past the actor's power to recall it.
  cascade: string
  // Big paragraph — the lived shape of Pholus in this sign, the texture
  // of the small first move, the way the consequence unfolds, and the
  // gentle host's particular relationship to the unsealing he both
  // performed and did not predict.
  body: string
  // The medicine — how to work with Pholus instead of being trapped in
  // either the chronic-sealing ("I will keep every jar lidded forever")
  // or the careless-uncorking ("I will open every jar without thinking
  // because the consequence is not my problem").
  medicine: string
  // The shadow shape — the centaur turned away from his own gentleness:
  // the unseaer who blames everyone but himself for the cascade, the
  // host who performs hospitality as a way of forcing irreversible
  // disclosure, the gentle one whose small acts are in fact deniable
  // detonations.
  shadow: string
  // Approximate generational year-bands. Pholus's orbit is ~92 years;
  // he was in Sagittarius at his 1992 discovery, moved through Capricorn
  // through the 2000s and 2010s, and entered Aquarius around 2018. The
  // per-sign archetype reads as transit / chart-point / generational
  // placement.
  band: string
}

// Pholus sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. Pholus is the centaur whose hospitality unsealed a jar that
// could not be re-sealed — the body whose gentle, well-meant act
// triggered an irreversible chain. Every sign has its own jar, its own
// kind of seal, its own characteristic cascade-when-the-lid-comes-off.
export const PHOLUS_PROFILES: Record<Sign, PholusProfile> = {
  aries: {
    sign: 'aries',
    unseals: 'The small first move that triggers a generational fire. Pholus in Aries names the action so apparently minor — one early shot fired, one early refusal, one impulsive yes — that the whole downstream conflict, alliance, or movement traces back to it. The seal that breaks is the seal on the courage someone else was waiting to release; once Aries-Pholus moves, the others charge.',
    cascade: 'The chain of action that follows is faster and larger than the original move warranted. Aries-Pholus opens a jar, and within months the political, organisational, or relational landscape has been rearranged — and most of the people now charging through the rearrangement have forgotten that the original gesture came from a single quiet first-mover.',
    body: 'Pholus in Aries names the unseaer whose first action looks small but unleashes a cascade of others\' courage. He is the activist whose single early-morning gesture — a sign held alone, a refusal to comply, an unscripted comment — becomes the seed footage that organises a movement. He is the founder whose two-paragraph manifesto, written half-meant on a Tuesday, becomes the founding text others build a decade of work on. He is the friend whose throwaway suggestion at dinner ends a marriage, opens a career, or starts a years-long project. The Aries-Pholus medicine is in knowing that small first moves in this register are never small in their consequence — and learning to take responsibility for the cascade as well as for the gesture itself.',
    medicine: 'Before any first move that has the texture of "small" or "just," ask explicitly: who is downstream of this who will charge once the lid is off? Take the action with full awareness of the cascade, not in denial of it. The Aries-Pholus register grows in the conscious uncorking.',
    shadow: 'The trap is the deniable unseaer — the activist, founder, or friend who triggers a cascade and then disclaims it ("I only said one thing"). Real Aries-Pholus authority owns the chain of consequence; the false one keeps unsealing and refusing to be the one who unsealed.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Aries in the late 1960s.'
  },
  taurus: {
    sign: 'taurus',
    unseals: 'The small material decision whose downstream consequence rearranges the substance of a place. Pholus in Taurus names the modest economic act — selling the family land, accepting the offer on the building, signing the supply contract — whose chain of consequence cannot be undone, whose physical cascade reshapes the terrain for a generation.',
    cascade: 'The Taurus-Pholus cascade is slow and absolutely physical: the sold field becomes a subdivision, the rezoned building empties a neighbourhood, the supply contract changes what an entire region grows or makes. The original deal sat on a single piece of paper; the cascade sits in the geography for decades.',
    body: 'Pholus in Taurus names the unseaer in the material order — the inheritor whose decision to sell quietly reshapes a town\'s housing market, the small-business founder whose pricing model becomes the regional default and rewrites what artisans get paid, the regenerative-agriculture buyer whose first land-purchase triggers the slow movement that, twenty years later, has changed the watershed. The seal that breaks is the seal on the substance of a place; the cascade is in the soil, in the rents, in the buildings, in what is grown. The Taurus-Pholus medicine is treating any material decision in your stewardship as if its physical consequence will outlast you, and choosing accordingly.',
    medicine: 'For any decision involving land, building, body, money, or substance — pause and write down the ten-year and the fifty-year physical consequence before you sign. The Taurus-Pholus register grows in the long-horizon material accountability.',
    shadow: 'The trap is the absentee owner — the inheritor or buyer whose material decisions ripple through other people\'s lives while he experiences only the abstract transaction. Real Taurus-Pholus stewardship stays present to the cascade; the false one signs the paper and moves to the next city.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Taurus in the early 1970s.'
  },
  gemini: {
    sign: 'gemini',
    unseals: 'The small word, the offhand sentence, the throwaway message that becomes the discourse. Pholus in Gemini names the unseaer of language — the writer, talker, or messenger whose half-formed phrase, once released, becomes the way an entire generation talks about a thing, and whose coinage cannot be taken back.',
    cascade: 'Gemini-Pholus unleashes the meme, the framing, the term-of-art that no one can put back in the jar. The original utterance was a Tuesday text; six months later the term is in headlines, six years later it is in the dictionary, sixty years later it is in the constitution. The propagation is fast and lossy and impossible to recall.',
    body: 'Pholus in Gemini is the writer whose two-line tweet became a generational frame; the journalist whose throwaway descriptor became the standard label for a movement; the academic whose footnote turned into the founding term of a sub-discipline; the friend whose nickname for a city stuck for a century. The seal that breaks is the seal on language itself, and the gentle host inside is genuinely surprised every time — he meant to share the wine with one guest, not to start a stampede. The Gemini-Pholus medicine is recognising that words in this register are physical: once released, they are weather. Speak and write knowing the propagation, not in denial of it.',
    medicine: 'Before any short-form public utterance, especially in your area of authority, read it as if a hundred thousand people will repeat it badly. If the bad repetition does damage, rewrite. The Gemini-Pholus register grows in the worst-case-reading discipline.',
    shadow: 'The trap is the deniable phrase-maker — the writer whose viral framing damages a discourse and who then claims it was never meant that way. Real Gemini-Pholus voice owns its propagation, including the misreadings; the false one only enjoys the spread.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Gemini in the late 1970s.'
  },
  cancer: {
    sign: 'cancer',
    unseals: 'The family disclosure that breaks a multi-generational silence. Pholus in Cancer names the moment one person tells one truth at one dinner that, in the telling, undoes the agreement under which the whole lineage had been operating — and the chain of disclosure, mourning, fight, and eventual reorganisation that follows cannot be sealed back.',
    cascade: 'The Cancer-Pholus cascade moves through the family system at the speed of conversation. One cousin tells one aunt at one wedding; within a year the secret is open, the marriage is renegotiated, the inheritance is contested, the children know. The lineage that operated on the sealed jar now has to learn to operate on the open one — and most lineages cannot do it without an interregnum.',
    body: 'Pholus in Cancer is the relative whose well-meant honesty at a family gathering unseals the sealed jar of a generational secret — the affair, the suicide, the fortune, the abuse, the parentage. The cascade includes mourning, anger, and eventually a more honest family architecture, but it also includes the un-recallable moment of disclosure that the lineage now has to live with. The Cancer-Pholus medicine is honouring both that the truth needed to come out and that the cascade will unfold past your control. Plan for the chain, not just the moment.',
    medicine: 'Before any major family disclosure, sit with three questions: is this true, is it mine to tell, and am I prepared to stay present through the multi-year cascade. If yes to all three, speak. If not, hold the seal a season longer. The Cancer-Pholus register grows in the prepared honesty.',
    shadow: 'The trap is the truth-thrower — the relative whose disclosure is performed as gift but is actually delivered as detonation, who unseals the jar and leaves the room. Real Cancer-Pholus disclosure stays for the cascade; the false one only reports the leak.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Cancer in the early 1980s.'
  },
  leo: {
    sign: 'leo',
    unseals: 'The small public gesture by a single visible figure that becomes the symbol of a moment. Pholus in Leo names the unseaer in the spotlight — the artist, performer, athlete, or public figure whose modest one-second action is, in the recording, the image that defines a year, a movement, or a generation.',
    cascade: 'The Leo-Pholus cascade is the one in which a single human gesture becomes iconography. The kneel, the smile, the speech, the refusal, the wave — what was personal becomes archetypal, and the figure who made the gesture spends the rest of the career, sometimes the rest of the life, in dialogue with what was unsealed.',
    body: 'Pholus in Leo is the public figure whose one-second action, often un-rehearsed and not entirely planned, becomes the image a culture uses to remember the moment. He is the athlete whose gesture during a national anthem becomes the centre of a year-long argument. He is the actor whose acceptance speech reorganises an industry\'s self-understanding. He is the singer whose costume choice on a televised stage rearranges what is wearable in public. The seal that breaks is the seal on what a single visible person can mean; the cascade is in iconography, in legacy, in the figure now permanently fused to the gesture. The Leo-Pholus medicine is making peace with the fusion — accepting that the small public gesture became a public symbol, and stewarding the symbol with care rather than running from it.',
    medicine: 'In any moment of public visibility, choose the gesture you would be content to be remembered by for the rest of your life. The Leo-Pholus register grows in the rehearsed-and-still-true public moment.',
    shadow: 'The trap is the gesture-as-brand-management — the public figure whose every "spontaneous" act is in fact a planned uncorking, whose unsealing-the-jar is calculated detonation. Real Leo-Pholus carries the iconography honestly; the false one engineers it.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Leo in the mid 1980s.'
  },
  virgo: {
    sign: 'virgo',
    unseals: 'The small craft, technical, or protocol decision whose downstream consequence rewrites an industry. Pholus in Virgo names the configuration default, the medical protocol tweak, the database schema choice, the editorial style guide change — the modest expert decision whose ripple, once it propagates through the practitioners, restructures the field.',
    cascade: 'The Virgo-Pholus cascade is technical and almost invisible until it is finished. A library author changes a default; a hospital changes a checklist; a regulator changes a unit; a typographer changes a default size. Five years later the entire field has reorganised around the new default, and few of the practitioners can name the original moment. The unsealed jar smells like a config flag; the chain charges through every downstream practice.',
    body: 'Pholus in Virgo is the under-celebrated expert whose careful but specific change has consequences far past the fix. He is the engineer whose changed library default broke half the dependent codebases worldwide on a Tuesday morning. He is the editor whose style-guide revision rewrote how a profession writes about its subjects. He is the doctor whose proposed checklist became standard practice across an entire continent\'s ICUs. The seal that breaks is the seal on what counts as the default; the cascade is in every downstream decision the field then makes inside the new default. The Virgo-Pholus medicine is the practitioner\'s long memory — knowing that defaults are jars, and that uncorking one is never just a local fix.',
    medicine: 'For any change to a default, protocol, or configuration in your domain, draft a one-page downstream-impact note before you ship. Read it back to yourself in six months. The Virgo-Pholus register grows in the practitioner\'s downstream literacy.',
    shadow: 'The trap is the un-accountable expert — the practitioner whose protocol change does industry-wide damage and who treats the cascade as not-his-problem because the change itself was technically correct. Real Virgo-Pholus craft owns the chain of consequence; the false one only owns the local fix.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Virgo in the late 1980s.'
  },
  libra: {
    sign: 'libra',
    unseals: 'The small relational disclosure that re-shapes an entire circle. Pholus in Libra names the conversation between two people, conducted in the right moment, that propagates through the larger network and rearranges who is in the room with whom for years. The seal that breaks is the seal on a relational configuration the group had been quietly maintaining.',
    cascade: 'The Libra-Pholus cascade moves through the social graph at the speed of confidence. One honest exchange between two people becomes — by the next gathering, the next holiday, the next professional opportunity — a wholesale re-grouping of the circle. The original conversation was over coffee; the chain restructures the friend-group, the team, the network, the field.',
    body: 'Pholus in Libra is the friend, peer, or colleague whose decision to have one direct conversation triggers a chain of relational re-alignments — affairs become public, partnerships dissolve, alliances form, people who were close drift, people who barely knew each other become inseparable. He is the diplomat whose careful one-on-one becomes the breaking-point of a treaty. He is the office colleague whose private check-in unwinds an entire team\'s power structure. The seal that breaks is the seal on relational silence; the cascade is in the re-mapped circle. The Libra-Pholus medicine is treating any relational uncorking as a deliberate act with multi-year consequences for everyone in the network, not only the two people in the room.',
    medicine: 'Before any disclosure-shaped one-on-one with someone in a shared circle, ask explicitly what re-arrangement of the circle this conversation will produce, and whether you are prepared to steward that re-arrangement well. The Libra-Pholus register grows in the network-aware honesty.',
    shadow: 'The trap is the ostensible-mediator — the relational unseaer whose careful one-on-ones are actually a way of moving the network without taking responsibility for the moves. Real Libra-Pholus is publicly accountable for the cascade; the false one specialises in deniable rearrangement.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Libra in the early 1990s.'
  },
  scorpio: {
    sign: 'scorpio',
    unseals: 'The small ritual, sexual, or psychological-depth move that uncorks an entire repressed cluster. Pholus in Scorpio names the modest depth-act — the question asked in therapy, the gesture made in intimacy, the moment of un-flinching attention — that lifts the lid on a long-sealed body of feeling and releases more than anyone planned to handle.',
    cascade: 'The Scorpio-Pholus cascade is internal first and then social. The unsealed jar releases grief, rage, desire, fear, or memory in volumes the original act did not predict; the chain then runs through the relationships, the family, the workplace, the community as the un-corked person reorganises around what is now known. The seal does not return.',
    body: 'Pholus in Scorpio is the body whose small depth-act unsealed a much larger psychic store. He is the patient whose one therapeutic hour broke open a multi-year processing arc. He is the lover whose one moment of true attention released a partner\'s decade of held-back feeling. He is the survivor whose first careful telling triggered a community-wide reckoning. He is the depth-worker whose one ritual at the right time uncorked something the participant had been carrying for thirty years. The seal that breaks is the seal on the depth-store; the cascade is in the reorganisation of the inner life and everything it touches. The Scorpio-Pholus medicine is preparing the container before the uncorking — knowing that the small act in this register is never small in its release.',
    medicine: 'Before any deliberate depth-work act — therapeutic, ritual, sexual, or radically honest — make sure the supports for the cascade are already in place: time, witnesses, follow-up, somatic work. The Scorpio-Pholus register grows in the well-prepared release.',
    shadow: 'The trap is the careless depth-uncorker — the depth-worker, lover, or therapist whose interventions trigger releases the participant has no support to integrate. Real Scorpio-Pholus authority builds the container first; the false one only enjoys the uncorking.',
    band: 'Read by transit and chart-point placement only; Pholus last passed Scorpio in the mid 1990s.'
  },
  sagittarius: {
    sign: 'sagittarius',
    unseals: 'The small philosophical, publishing, or translation act that re-orients a discipline. Pholus in Sagittarius names the essay, footnote, lecture, or first translation whose appearance — modest in its own moment — becomes the founding text of an intellectual movement, a religious reform, or a political imagination.',
    cascade: 'The Sagittarius-Pholus cascade moves at the speed of citation. One essay becomes ten footnotes becomes a hundred dissertations becomes a generation\'s vocabulary. One translated text becomes a school. One pamphlet becomes a political movement. The original act sat on a single page; the chain of intellectual consequence rewrites the field.',
    body: 'Pholus in Sagittarius is the thinker whose modest publication becomes the seed text of a school. He is the philosopher whose minor essay reorganises ethics for a generation. He is the translator whose first careful version of a long-ignored sutra opens an entire Western relationship to a Buddhist tradition. He is the historian whose footnote becomes the basis of a sub-discipline. He is the preacher whose one quiet sermon becomes a reform movement. The seal that breaks is the seal on what the discipline was permitted to think; the cascade is in the next generation\'s questions. He was, fittingly, in this very sign at the moment of his own discovery in 1992 — a centaur of the philosophical-cascade self-disclosed in a season already shaped by him. The Sagittarius-Pholus medicine is publishing with awareness of propagation, not in innocence of it.',
    medicine: 'When releasing a piece of long-form thought into your field, write it as if it might become foundational — not in vanity but in accountability. Take responsibility for what your formulation will license downstream. The Sagittarius-Pholus register grows in the published-with-awareness work.',
    shadow: 'The trap is the disavowing teacher — the philosopher whose work becomes the basis of a movement and who then refuses to engage with the movement\'s use of him. Real Sagittarius-Pholus owns the cascade of teaching; the false one publishes and runs.',
    band: 'Pholus discovered in Sagittarius in 1992; passed through this sign in the early 1990s and will not return for ~92 years.'
  },
  capricorn: {
    sign: 'capricorn',
    unseals: 'The small institutional, legal, or governance decision whose downstream consequence reshapes a sector. Pholus in Capricorn names the modest rule change, the single board vote, the precedent-setting opinion, or the regulatory definition tweak whose ripple, once propagated, restructures the institutional landscape for a generation.',
    cascade: 'The Capricorn-Pholus cascade moves through institutional time, slow at first and then total. The rule change becomes precedent; the precedent becomes default; the default becomes the structural reality the next generation inherits as natural. The original decision is in a meeting minute; the chain rewrites the contract, the law, the sector.',
    body: 'Pholus in Capricorn is the official whose modest decision reshapes an institutional landscape. He is the regulator whose single definition opens or closes an industry. He is the judge whose narrow ruling becomes the foundational precedent. He is the board chair whose one procedural reform transforms how a profession governs itself. He is the standards-body editor whose footnote in a draft becomes the load-bearing wall of an entire interoperability regime. He has been moving through Capricorn through the early 21st century, and the contemporary world\'s long cascade of small institutional decisions whose consequences cannot be reversed is, in part, a Capricorn-Pholus signature. The Capricorn-Pholus medicine is naming the decision\'s structural consequence in the moment of making it, and choosing on the basis of fifty-year impact rather than meeting-room convenience.',
    medicine: 'For any institutional or governance decision in your authority, draft a structural-impact memo before the vote. Name what the decision permits or forecloses for the next generation. The Capricorn-Pholus register grows in the long-horizon institutional accountability.',
    shadow: 'The trap is the rule-changer who hides behind committee — the official whose narrow procedural edit reshapes a sector and who then disclaims authorship by pointing at the process. Real Capricorn-Pholus signs the decision; the false one launders the cascade through bureaucracy.',
    band: 'Pholus has been transiting Capricorn through the early 21st century (~2001 → ~2018).'
  },
  aquarius: {
    sign: 'aquarius',
    unseals: 'The small civic, technological, or network decision that propagates to billions. Pholus in Aquarius names the protocol change, the platform feature, the open-source default, the policy update, or the network design choice whose ripple, once it touches a global system, rewrites the conditions under which civilisation operates.',
    cascade: 'The Aquarius-Pholus cascade is the contemporary, networked, planetary one. A small change in a recommendation algorithm reshapes what a generation reads. A protocol RFC becomes the load-bearing standard of every connected system. A privacy default rewrites what a billion phones do. A platform terms-of-service edit reorganises how a profession works. The original commit was three lines of code; the chain runs through the planet.',
    body: 'Pholus in Aquarius is the modern technologist, civic designer, or platform decision-maker whose small choice becomes the world\'s default. He is the protocol author whose RFC silently rewires the global internet. He is the platform engineer whose one ranking change reshapes the public sphere. He is the open-source maintainer whose dependency choice becomes a critical infrastructure that no one budgeted to maintain. He is the policy designer whose one-page default rewrites how billions consent or do not consent to having their data used. He has been moving through Aquarius since around 2018 — the years in which the cascading consequences of small civic-technical decisions have become the central political fact of the age. The Aquarius-Pholus medicine is treating any planetary-network decision as a constitutional act, with the seriousness that implies, and refusing the convenient fiction that "this is just a feature."',
    medicine: 'For any decision touching a system used by millions or billions, treat the decision document as if a future historian will read it. Name the cascade. Take the responsibility. The Aquarius-Pholus register grows in the planetary-scale accountability.',
    shadow: 'The trap is the it-was-just-a-feature defence — the network decision-maker whose civilisational consequence is launder through a "small product change" framing. Real Aquarius-Pholus is openly authored; the false one ships the change at midnight and refuses interviews.',
    band: 'Pholus has been transiting Aquarius since approximately 2018; the contemporary networked cascade is, in part, an Aquarius-Pholus signature.'
  },
  pisces: {
    sign: 'pisces',
    unseals: 'The small spiritual, artistic, or dream-act that uncorks a generational mood. Pholus in Pisces names the song, the poem, the painting, the prayer, the dream-image, or the contemplative gesture whose modest origin — half-meant, half-received — becomes the atmospheric register of an era.',
    cascade: 'The Pisces-Pholus cascade is mood-shaped and atmospheric: the song that becomes the year\'s grief, the image that becomes the decade\'s longing, the prayer that becomes the generation\'s consolation. The propagation is through feeling, not through citation; the chain runs through bodies, dreams, weather. The original gesture sat in a notebook; the cascade sits in the collective unconscious.',
    body: 'Pholus in Pisces is the artist or mystic whose modest gesture becomes a generation\'s atmospheric weather. He is the songwriter whose three-chord demo became the decade\'s funeral song. He is the painter whose small canvas became the image a wartime generation kept on its phones. He is the contemplative whose one-page prayer became the silent companion of millions. He is the filmmaker whose three-second shot became the dream-image of an era. The seal that breaks is the seal on what an era will allow itself to feel; the cascade is in the next twenty years\' weather of the heart. The Pisces-Pholus medicine is taking the artistic-spiritual gesture seriously even when it feels small — knowing that the form is the seed of a mood, and that moods have planetary downstream.',
    medicine: 'When you make work in this register — song, image, prayer, dream-act — release it knowing it may carry past you. Honour the work\'s autonomy from your moment. The Pisces-Pholus register grows in the released-with-reverence creative act.',
    shadow: 'The trap is the moodsetter-as-influencer — the artist whose atmospheric work is engineered for capture rather than offered to the unconscious. Real Pisces-Pholus releases without managing; the false one only A/B-tests the dream.',
    band: 'Read by transit and chart-point placement only; Pholus will enter Pisces in the 2030s.'
  }
}

export const PHOLUS_SIGNS = SIGNS

export function isPholusSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #7a4218; }
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

export function pholusPageHTML(sign: Sign): string {
  const p = PHOLUS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Pholus in ${Sign}`

  // Other Pholus signs strip — discover the other 11. Glyph ⚱ (the
  // amphora / wine-jar — the very vessel Pholus unsealed in the myth,
  // and the visual signature of this whole register). Distinct from
  // ⊛ Eris, ⏀ Sedna, ✺ Haumea, ◉ Makemake, ⚸ Lilith, ⚷ Chiron, ☊ North
  // Node, ◈ Vertex, and the asteroid set.
  const otherPholus = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/pholus/${s}">⚱ Pholus ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Pholus opens the centaur lane, so the side strip
  // leads with Chiron (his fellow centaur, already shipped), then surfaces
  // the dwarf-planet quartet (his thematic neighbours in the trans-Saturnian
  // shadow tier), then the asteroid graph and the chart-point lane.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (centaur sister — the open wound)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur sister — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur sister — the cycle-breaking)</a>`,
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
    `<a href="/gab44/pholus">all 12 Pholus signs</a>`
  ].join('')

  const title = `${headline} — centaur 5145, the small-cause-large-effect / unsealing axis · gab44`
  const description = `${headline}: how Pholus (centaur 5145, discovered 1992) carries the small-cause-large-effect / unsealing register in this sign. ${p.unseals} ${p.cascade} The full archetype with medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Pholus', item: `${SITE_URL}/gab44/pholus` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/pholus/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/pholus/${sign}`,
        about: `${headline} — small-cause-large-effect / unsealing axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/pholus/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.unseals)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/pholus/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B1%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/pholus">all 12 Pholus signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/chiron/${sign}">Chiron in ${Sign}</a>
      <a href="/gab44/eris/${sign}">Eris in ${Sign}</a>
      <a href="/gab44/reading?ref=pholus-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚱ ${sm.symbol}</div>
      <div class="meta">Pholus ⚱ ${Sign} · centaur 5145 · the small-cause-large-effect / unsealing axis</div>
    </div>
    <h1><span class="accent">Pholus</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.unseals)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⚱ Pholus in ${Sign} — what gets unsealed</h3>
        <p>${escapeHtml(p.unseals)}</p>
      </div>
      <div class="panel">
        <h3>⚱ Pholus in ${Sign} — the cascade</h3>
        <p>${escapeHtml(p.cascade)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Pholus in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">⚱</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Pholus in ${Sign} disowning the cascade</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Pholus</span><span class="v">⚱ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">centaur 5145 (discovered 1992)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~92-year solar orbit, between Saturn and Neptune</span></div>
      <div class="row"><span class="k">Named for</span><span class="v">the gentle centaur Pholos who unsealed the centaurs' wine-jar</span></div>
      <div class="row"><span class="k">Sister</span><span class="v">Chiron — the first centaur, the open wound</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">small-cause-large-effect / unsealing / the irreversible chain</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=pholus-${sign}">Get a $9 Pholus-aware reading →</a>
    </div>

    <h2>The other 11 Pholus signs</h2>
    <div class="strip">${otherPholus}</div>

    <h2>Related — your unsealing cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · small-cause-large-effect / unsealing axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function pholusIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = PHOLUS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/pholus/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚱ ${sm.symbol}</div>
      <div class="name">Pholus in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · the unsealing</div>
      <div class="vibe-mini">${escapeHtml(p.unseals)}</div>
    </a>`
  }).join('')

  const title = `Pholus by sign — centaur 5145, the small-cause-large-effect / unsealing axis · gab44 ✨`
  const description = `Pholus in {sign} — the small-cause-large-effect / unsealing signature across all 12 zodiac signs. The second centaur (5145 Pholus, discovered 1992), the gentle host whose hospitality uncorked the wine-jar that Dionysus had said not to open until the right time. The astrology of the irreversible chain. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Pholus opens the centaur lane (Chiron is the
  // first centaur, already shipped), and pairs structurally with the
  // dwarf-planet quartet in the wider trans-Saturnian shadow tier. After
  // Pholus the natural next centaur pages are Chariklo (sacred enclosure)
  // and Nessus (abuse-cycle).
  const navStrip = [
    `<a href="/gab44/chiron">⚷ Chiron by sign (centaur sister — the open wound)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur sister — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur sister — the cycle-breaking)</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/pholus" />
<meta property="og:title" content="Pholus by sign · gab44" />
<meta property="og:description" content="The small-cause-large-effect / unsealing signature of centaur 5145 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#7a4218;--c2:#28100a;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/chiron">⚷ Chiron</a>
      <a href="/gab44/chariklo">⊚ Chariklo</a>
      <a href="/gab44/nessus">⛓ Nessus</a>
      <a href="/gab44/eris">⊛ Eris</a>
      <a href="/gab44/sedna">⏀ Sedna</a>
      <a href="/gab44/reading?ref=pholus-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#7a4218,#28100a)">⚱</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · centaur 5145 (discovered 1992)</div>
    </div>
    <h1>Pholus <span class="accent">by sign</span></h1>
    <p class="vibe">Chiron is the open wound. Pholus is the small first move that, once made, cannot be unmade — the gentle centaur who opens the wine-jar Dionysus said not to open yet, and learns that the smell of the wine on the wind brings the rest of the herd charging down the mountain. Pholus opens the centaur lane and shares the trans-Saturnian shadow tier with the dwarf-planet quartet. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Pholus is the second centaur (after Chiron, already a gab44 page) and pairs structurally with the dwarf-planet quartet — Eris, Sedna, Haumea, Makemake — in the wider trans-Saturnian shadow tier. Read the centaur pair together for the small-cause-and-the-open-wound axis, then open into the dwarfs for the deeper shadow-and-creation map.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=pholus-index">Want a deeper, pholus-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Pholus-by-sign pages · evergreen · the small-cause-large-effect / unsealing axis.
    </footer>
  </div>
</body>
</html>`
}
