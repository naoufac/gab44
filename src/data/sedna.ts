// Sedna × sign SEO funnel — /gab44/sedna (index) + /gab44/sedna/{sign}
// (12 pages). Round 26 of the gab44 evergreen surface. Targets the
// dwarf-planet / long-exile / betrayal-by-trusted-one keyword cluster:
// "sedna in {sign} meaning", "{sign} sedna", "dwarf planet sedna
// astrology", "sedna betrayal chart". Sedna is dwarf planet 90377 —
// discovered 2003, the trans-Neptunian object with the longest known
// orbit of any massive body in the solar system (~11,400 years), the
// thing that forced astronomers to start naming what lives past the
// Kuiper belt. Astrologically she is the Inuit goddess thrown off her
// father's kayak — the betrayed one, fingers severed by the hand of
// trust, who sank to the ocean floor and became the goddess of every
// sea creature that swims. The long-exile / inherited-betrayal /
// patient-return axis. Distinct keyword cluster from Eris (the
// disruption that exposes false harmony), from Lilith (the rejected
// wild feminine who walked away), and from Chiron (the wound that
// becomes teaching). Sedna names the betrayal that came from inside
// the trust circle and the centuries-long return-with-power that
// follows. Pairs structurally with Eris as the second page in the
// dwarf-planet shadow tier, opening the path to Haumea, Makemake,
// and the rest of the trans-Neptunian graph.
// Cross-funnels into /gab44/reading?ref=sedna-{sign}.

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

// Per-element accent kept inside a deep ocean / abyssal-blue band so
// the surface reads as the long-exile / underwater-return axis (distinct
// from the deep crimson Eris band, the gold Vertex band, the jade
// Hygiea band). Each element shifts the temperature inside the same
// oceanic family — colder air, warmer water, deeper earth, saltier fire.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#3a6b8c', c2: '#0c243a' },
  earth: { c1: '#2c5876', c2: '#0a1c30' },
  air:   { c1: '#487a9a', c2: '#10283e' },
  water: { c1: '#1f4868', c2: '#040f22' }
}

interface SednaProfile {
  sign: Sign
  // The specific kind of betrayal-from-the-trust-circle Sedna names in
  // this register — the hand that was supposed to hold and instead
  // pushed.
  betrayal: string
  // The long return — the way the exile becomes sovereignty over
  // generations / decades, the deep gift that the depth grew. Sedna is
  // never about quick recovery; she is about the centuries.
  return_: string
  // Big paragraph — the lived shape of Sedna in this sign, the way the
  // betrayal arrives, the long submersion, and the depth-power that
  // crystallises on the ocean floor.
  body: string
  // The medicine — how to work with Sedna instead of being trapped in
  // either the bypass ("I'm fine, it didn't happen") or the eternal
  // grievance ("I'm only the one who was thrown overboard").
  medicine: string
  // The shadow shape — the betrayal frozen as identity: victim-as-
  // permanent-self, eternal cold-shouldering of the trust circle, the
  // refusal to surface even when the surface is safe.
  shadow: string
  // Approximate generational year-bands. Sedna's orbit is so long
  // (~11,400 years) that the entire historical record sits inside a
  // single Sedna-by-sign register; she entered Taurus in 1865 and is
  // not expected to leave it for centuries. The per-sign archetype
  // therefore reads as transit / chart-point / aspect placement,
  // never as "your generation's natal Sedna sign."
  band: string
}

// Sedna sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. Sedna is the goddess thrown off the kayak by her father
// and pushed under when she clung to the side — fingers severed,
// sank to the ocean floor, and became the deep-mother of every sea
// creature. The long exile that becomes sovereignty.
export const SEDNA_PROFILES: Record<Sign, SednaProfile> = {
  aries: {
    sign: 'aries',
    betrayal: 'The hand that should have launched you instead clipped your wings the moment you began to move. The parent / mentor / first-circle figure who was threatened by your forward motion and disabled it, then framed the disabling as protection.',
    return_: 'Sovereignty over your own first move. Sedna in Aries returns as the person who knows, in the body, that no one else gets to authorise the start — and who will not betray the next generation\'s start the way her own was betrayed.',
    body: 'Sedna in Aries names the most primal version of the wound — the betrayal at the threshold, the moment the body said "go" and the trusted hand said "no, not yet, not you, not like that." She is the athlete pulled from the team because the coach felt eclipsed. She is the founder whose first investor was actually the predator. She is the child whose first independent act was punished as a betrayal of the family. The submersion is the long, slow learning that no permission is coming, and that the absence of permission was itself the lesson. The depth she crystallises on the ocean floor is the unshakeable certainty of the right to begin — not begged for, not granted, simply held. Sedna in Aries returns as the person who launches others without first checking whether their launching makes her smaller.',
    medicine: 'Identify one starting line you are still waiting for permission to cross, and cross it without telling the original betrayer. The Aries-Sedna register grows in the unauthorised first step that does not arrive as revenge but as quiet sovereignty.',
    shadow: 'The trap is permanent rage at the threshold — every new beginning re-enacts the original clipping, and so every new beginning is sabotaged in advance, not by anyone present but by the body remembering. Real Aries-Sedna return uses the wound as fuel for the start; the false one uses the wound as the reason no start is possible.',
    band: 'Sedna entered Aries around the year ~1700 BCE; this is read by transit and chart-point placement only.'
  },
  taurus: {
    sign: 'taurus',
    betrayal: 'The provider who provided conditionally. The body / land / inheritance that was promised and then withdrawn the moment you tried to actually receive it. The slow betrayal in the household economy — the food that came with terms, the dowry that came with debt, the body that was used as collateral for someone else\'s comfort.',
    return_: 'Sovereignty over your own ground. Sedna in Taurus returns as the person who refuses the conditional gift and builds, slowly and over a long horizon, the un-revokable material base — the land that cannot be taken back, the body that cannot be repossessed, the inheritance that goes forward instead of being held over the next head.',
    body: 'Sedna in Taurus is the only Sedna placement most of us have lived through — she has been here since 1865 and will stay through the early 22nd century. This is why the cultural register has been so saturated with the question of what it means to receive material safety from sources that were never safe: the inherited land that was stolen, the family wealth that came from extraction, the body marked as an asset before it was treated as a self. The submersion is generational, not personal — the ocean floor is the slow centuries of women, of the colonised, of the indentured, and of every body whose nourishment came with a price tag. The depth Sedna in Taurus is crystallising right now, in real time across the planet, is the long re-definition of material sovereignty: the moment the inheritance becomes the gift forward instead of the chain backward. She returns as the slow re-rooting in unconditional ground.',
    medicine: 'Identify one piece of material safety in your life that was given with terms attached, and either renegotiate the terms or build the un-conditional version alongside it. The Taurus-Sedna register grows in the patient construction of ground no one can take back.',
    shadow: 'The trap is hoard-as-revenge — the survivor who, having been starved, can never stop accumulating, and uses the accumulation as the weapon she was first wounded by. Real Taurus-Sedna return shares the ground; the false one fortifies it.',
    band: 'Sedna in Taurus: ~1865 → ~2150. The collective register of every living person.'
  },
  gemini: {
    sign: 'gemini',
    betrayal: 'The first language that betrayed you. The story your family told about you that you internalised. The teacher who used your words against you. The sibling who carried your secret to the wrong ear. The narrative inheritance that came with a thumb on the scale of who you were allowed to be.',
    return_: 'Sovereignty over your own story. Sedna in Gemini returns as the person who finally writes herself out of the family novel and into the page she gets to author — and who, having been mistranslated her whole early life, becomes the careful translator of others.',
    body: 'Sedna in Gemini names the verbal version of the wound — the betrayal that arrived as words and that has to be undone with words. She is the survivor who finally writes the memoir. She is the philosopher who refuses the founding text she was raised inside. She is the journalist who finally uses her own beat to investigate the institution she was groomed by. The submersion is the long silence in which the imposed narrative was the only narrative available, and the body had no language for the truth. The depth crystallised on the ocean floor is a different relationship to language itself: words used to liberate rather than to position, sentences as bridges instead of cages, story as medicine instead of inheritance. Sedna in Gemini returns as the writer of the alternative version, the speaker of the previously unspeakable, the patient translator of what the original story refused to name.',
    medicine: 'Write one sentence about yourself that contradicts a story your origin family told. Read it out loud to no one. The Gemini-Sedna register grows in the privately spoken sentence that the official story has no place for.',
    shadow: 'The trap is the loop — telling the story of the betrayal so often it becomes the only story, the survivor identity locked inside the original wound\'s vocabulary. Real Gemini-Sedna return finally tells a different story; the false one tells the same one in better prose.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Gemini for centuries.'
  },
  cancer: {
    sign: 'cancer',
    betrayal: 'The mother who was the first hand on the kayak. The home that turned out to have terms. The lineage of women who were each, in turn, betrayed by the lineage of women, and who passed the wound forward as if it were love. The most intimate version of the original story — the one where the kayak is the family and the father pushing you off it is the family.',
    return_: 'Sovereignty over your own home, your own kin, your own line. Sedna in Cancer returns as the person who breaks the multi-generational chain by being the first one in the lineage to refuse to pass the betrayal forward — by becoming, instead, the home she did not have.',
    body: 'Sedna in Cancer is the wound at the most intimate ring of trust — the wound that names the mother, the father, the family, the home, as the original kayak from which one was thrown. The submersion is the long, lonely realisation that home was the place the wound came from, and that no future home can be built on the assumption that it was otherwise. The ocean floor is the slow construction of a new kind of belonging — not a return to the original house, which was never safe, but the building of a different house with different rules, and the painful, patient parenting of one\'s own self into it. Sedna in Cancer returns as the person who finally becomes the safe inner parent the family did not provide, and who, in becoming that, becomes safe ground for someone else: a child, a community, a future ancestor.',
    medicine: 'Make one decision this week that prioritises the family you are building over the family you came from. Tell no one in the original family about it. The Cancer-Sedna register grows in the un-announced choice that quietly redirects the lineage.',
    shadow: 'The trap is the haunting — the original family kept alive as the only real family even after they have proven they cannot be it, the new home perpetually interrupted by the ghost of the old one. Real Cancer-Sedna return lets the original house be a closed chapter; the false one keeps re-opening it.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Cancer for centuries.'
  },
  leo: {
    sign: 'leo',
    betrayal: 'The first audience that withdrew its love when you became too visible. The parent who could not bear your shine, the partner who needed you smaller, the institution that promoted you only as long as you stayed inside its frame. The betrayal that arrived dressed as affection and revoked the affection the moment you stepped into your full size.',
    return_: 'Sovereignty over your own light. Sedna in Leo returns as the person who has stopped negotiating her brightness with the original audience, and who shines without the question "is this allowed" — because the audience that would have answered "no" has been left, finally, on shore.',
    body: 'Sedna in Leo names the wound at the centre of the visible self — the betrayal of the radiant child, the gifted student, the bright daughter, by the home that claimed to love the brightness and revoked the love the moment the brightness moved out of frame. The submersion is the long underground period in which the radiance has to be rebuilt from inside, without an audience, without applause, without the loop of being seen confirming the worth of being seen. The ocean floor is the radiance that no longer needs the witness — the shine that is its own proof, the joy that does not consult the original betrayer about whether it is permitted. Sedna in Leo returns as the person who has stopped performing for the home that revoked the seat, and who now lights rooms whose love does not have a clawback clause.',
    medicine: 'Do one creative act this week that the original audience would have disapproved of. Do not tell them. The Leo-Sedna register grows in the unwitnessed full-size act that proves the radiance is the self, not the audience.',
    shadow: 'The trap is the dimmer switch — the surviving radiance kept permanently at half-brightness in case the original betrayer is somehow watching, the chronic self-eclipse as adaptation to a withdrawal that no longer applies. Real Leo-Sedna return has stopped checking the original room; the false one is still performing for the empty seat.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Leo for centuries.'
  },
  virgo: {
    sign: 'virgo',
    betrayal: 'The system that promised meritocracy and revoked the merit. The institution that told you to do the work and then took the credit. The mentor who said "be useful" and used you. The body / health / mind that you trained and disciplined according to the authoritative rules and which the rules then refused to honour.',
    return_: 'Sovereignty over your own craft. Sedna in Virgo returns as the person who does the work for its own integrity, not for the institution\'s validation — and who, having been used, becomes scrupulous about what she lends her labour to and on what terms.',
    body: 'Sedna in Virgo is the wound of the conscientious one — the person who followed the protocol and was punished for following it, the person who built the careful career inside the careful system that turned out to be a long-running scam. The submersion is the slow discovery that the craft is real but the system that claimed to honour the craft was not, and that the years of compliance were, in fact, years of being moved across someone else\'s board. The ocean floor crystallises a new relationship to work itself: precision unhooked from approval, excellence unhooked from institution, discipline as a private practice rather than a publicly graded one. Sedna in Virgo returns as the master craftsperson who works to her own standard, who refuses to launder her precision into someone else\'s extraction, and who teaches the next generation the difference between the craft and the system.',
    medicine: 'Identify one thing in your work that you only do for institutional approval. Either stop doing it or do it on your own terms this week. The Virgo-Sedna register grows in the de-coupling of craft from compliance.',
    shadow: 'The trap is bitterness-as-perfectionism — the survivor who, betrayed by the institution, becomes the institution she was betrayed by, only stricter. Real Virgo-Sedna return works for the work; the false one works for the receipt.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Virgo for centuries.'
  },
  libra: {
    sign: 'libra',
    betrayal: 'The relationship that was the kayak. The partner who was the trusted hand. The friendship that swore symmetry and turned out to be a long, slow asymmetry running in only one direction. The harmony that was being maintained at the cost of one person\'s drowning.',
    return_: 'Sovereignty inside relationship. Sedna in Libra returns as the person who has stopped trading her own ground for relational continuity — and who, having been pushed off the kayak by the one she loved, knows in the bones that no relationship is worth the sea-floor and chooses, henceforth, only the partners who can hold without asking her to disappear.',
    body: 'Sedna in Libra names the wound that arrives in the form of the beloved — the partner, the best friend, the mentor-as-friend — and that therefore lives inside the most disorienting register of the entire Sedna mythology, because the kayak is the relationship and the hand pushing you under is the hand you trusted to hold yours. The submersion is the long re-learning of self-trust after the most intimate self-trust has been broken: figuring out which signals, internal and external, were always there and which were authored by the betrayer. The ocean floor crystallises a different kind of relational sovereignty: the unwillingness to bargain away the self for the relationship\'s continuation, the firm courteous "no" to the asymmetric offer, the patient cultivation of relationships in which two whole selves remain whole. Sedna in Libra returns as the partner who is no one\'s collateral.',
    medicine: 'Identify one current relationship in which you are quietly drowning to keep the surface calm. Surface, even at the cost of the calm. The Libra-Sedna register grows in the un-self-erasing relational truth.',
    shadow: 'The trap is permanent relational suspicion — the survivor who, having been betrayed by intimacy, refuses intimacy itself, and frames the refusal as wisdom. Real Libra-Sedna return picks better partners; the false one picks none and calls it sovereignty.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Libra for centuries.'
  },
  scorpio: {
    sign: 'scorpio',
    betrayal: 'The trust circle that was running an underworld. The family secret that the inner ring was protecting at your expense. The intimate access that was actually surveillance. The most layered version of the original myth — the kayak is the inner sanctum, and the hand that pushes you into the water is the hand you were sworn to silence about.',
    return_: 'Sovereignty in the depths. Sedna in Scorpio returns as the person who, having been thrown into the underworld by the very people who claimed to be its guardians, becomes a different kind of guardian — one who refuses the cover-up, who tells the depth-truth without performing the depth-talk, and who can be trusted with other people\'s underworlds because she has stopped trading hers.',
    body: 'Sedna in Scorpio is the wound at the most layered ring of trust — the betrayal that came from inside the keeping of the secret, the inner-circle conspiracy of which the survivor was both member and victim. The submersion is the long descent into the actual underworld, where the survivor can no longer pretend the family did not know, the institution did not protect, the inner ring did not collude. The ocean floor crystallises the only kind of depth that is not itself a cover: depth that surfaces what the inner ring was hiding, and that refuses to hide it again in any new ring. Sedna in Scorpio returns as the truth-keeper of the actually-deep — the person who can hold the genuine secrets and will not hold the cover-stories, the person who has earned, through her own descent, the right to say which silences serve the wound and which silences are themselves the wound.',
    medicine: 'Identify one secret you are keeping that is protecting the wrong party. Tell one trustworthy person, even if you cannot tell the world. The Scorpio-Sedna register grows in the un-collusion with the cover.',
    shadow: 'The trap is the new cover — the survivor who emerges from the descent only to start a new inner ring with the same dynamic, depth-talk that protects depth-harm, just under a different banner. Real Scorpio-Sedna return refuses the cover-up itself; the false one re-stages it.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Scorpio for centuries.'
  },
  sagittarius: {
    sign: 'sagittarius',
    betrayal: 'The teaching that promised meaning and delivered cult. The pilgrimage that ended in the guru\'s harm. The expansion that was packaged as freedom and turned out to be the most elaborate cage. The sacred quest that was pre-scripted to deposit you exactly where the betrayer needed you.',
    return_: 'Sovereignty of meaning. Sedna in Sagittarius returns as the person who, having been thrown into the deep by the teacher she trusted with the question of meaning itself, builds her own meaning-system from scratch, on the ocean floor, with no master\'s blessing — and who, when other students arrive, refuses to become the next master.',
    body: 'Sedna in Sagittarius names the wound that comes through the apparatus of meaning — the teacher, the lineage, the philosophy, the religion, the worldview that promised to make sense of the cosmos and instead used the seeker as an asset for its own expansion. The submersion is the long crisis of meaning that follows: if the meaning-system was the betrayer, then is meaning itself a trap? The ocean floor crystallises a different relationship to meaning: meaning as patient personal construction rather than received tradition, the quest as something one walks, not something one buys, philosophy as the slow work of an actual life rather than the product of an authority. Sedna in Sagittarius returns as the heretic-elder — the person who has lost faith in the system that misused her and gained, instead, faith in the un-systematised reality the system was trying to monopolise.',
    medicine: 'Identify one belief you hold because an authority told you to. Test it this week against your own life. Keep it or discard it on the test, not on the authority. The Sagittarius-Sedna register grows in the personally-tested cosmology.',
    shadow: 'The trap is permanent cynicism — the survivor of the false teaching becomes the person who teaches that no teaching is real, the betrayed seeker who weaponises the betrayal into a worldview of universal suspicion. Real Sagittarius-Sedna return rebuilds meaning; the false one tells you meaning was always a scam.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Sagittarius for centuries.'
  },
  capricorn: {
    sign: 'capricorn',
    betrayal: 'The structure that was supposed to hold. The contract that was a one-way obligation. The "long game" you were told to play, while the people who told you to play it were quietly cashing out. The institution that demanded patience from you and demanded none from itself. The father-figure-as-system who pushed you off the kayak the moment you started to outgrow his ladder.',
    return_: 'Sovereignty of structure. Sedna in Capricorn returns as the architect of structures that do not require betrayal to function — the founder who actually pays the people, the elder who actually transfers the power, the institution-builder who treats succession as the proof of integrity rather than the threat to it.',
    body: 'Sedna in Capricorn names the wound at the level of structure itself — the betrayal by the long game, by the institution, by the patriarchal-father-system that sold patience to the patient and pocketed the dividend. The submersion is the long disillusionment with hierarchies that were sold as meritocracies, with promotions that never came, with retirements that never paid out, with founders who took the building down on their way out the door. The ocean floor crystallises the slow architectural work of building structures that are different all the way down — institutions whose by-laws assume the founder will leave, contracts that assume the parties will outgrow them, succession as a feature rather than a betrayal. Sedna in Capricorn returns as the elder who hands over the ladder rather than kicking it.',
    medicine: 'Identify one structure in your life — work, family, contract — that has been sold to you as "the long game" and audit whether the long game has any actual long pay-off for you. If not, restructure or leave. The Capricorn-Sedna register grows in the honest audit of the slow promise.',
    shadow: 'The trap is the new pyramid — the survivor of the betraying structure rebuilds the same structure under her own name, and uses the original betrayal as the moral cover for the new extraction. Real Capricorn-Sedna return changes the architecture; the false one only changes the name on the door.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Capricorn for centuries.'
  },
  aquarius: {
    sign: 'aquarius',
    betrayal: 'The collective that was the kayak. The movement that asked for everything and gave the credit to its founders. The chosen family that turned out to have a hierarchy. The "we are different" that turned out to be the same shape as the world it was rejecting, only with a different cast list. The friend-as-comrade who voted you off the island the moment your loyalty was inconvenient.',
    return_: 'Sovereignty inside collectivity. Sedna in Aquarius returns as the person who has rebuilt her relationship to "we" from the ocean floor up — who joins collectives without disappearing into them, who can be a member without becoming property, and who refuses to participate in the kind of collective belonging that requires its members to be expendable.',
    body: 'Sedna in Aquarius names the wound that comes through the supposedly liberating group — the activist collective, the ideological movement, the chosen family, the friendship circle, the scene — and that therefore breaks one of the deepest modern promises, the promise that the chosen "we" would be the antidote to the original "we" that wounded us. The submersion is the long, lonely period in which neither the original tribe nor the chosen one is safe, and the survivor has to figure out whether collective belonging is even a thing she can do. The ocean floor crystallises a more demanding collectivity: the kind that does not require self-erasure, the kind that argues internally, the kind that protects its weakest member rather than its founders. Sedna in Aquarius returns as the person who has stopped looking for the perfect chosen family and has started building, slowly, the merely-honest one.',
    medicine: 'Identify one group you are loyal to that has not earned the loyalty in both directions. Renegotiate the terms or step back. The Aquarius-Sedna register grows in the audit of the supposedly-chosen family.',
    shadow: 'The trap is permanent isolationism dressed as principle — the survivor of the betraying collective becomes the lone wolf who frames every actual community offer as another trap. Real Aquarius-Sedna return rebuilds belonging on better terms; the false one tells you belonging itself was the lie.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Aquarius for centuries.'
  },
  pisces: {
    sign: 'pisces',
    betrayal: 'The mystical bypass that asked you to forgive what was still happening. The lineage that taught dissolution as virtue while quietly dissolving the boundaries it needed you not to defend. The "everything is one" that, at the moment of your harm, turned out to be wonderfully convenient for the harmer. The transcendent teaching used as the soft hand that pushes you off the kayak gently, with reverence, while still pushing.',
    return_: 'Sovereignty in the mystical register. Sedna in Pisces returns as the mystic who has stopped letting the mystical be used to launder material harm — who keeps the depth and discards the bypass, who can hold the unitive vision and the specific perpetrator in the same paragraph without the unitive vision dissolving the perpetrator out of accountability.',
    body: 'Sedna in Pisces is the wound at the mystical / dream / dissolution layer — the betrayal that arrived inside a register specifically designed to suspend ordinary judgement, the harm that was framed as transcendence while it was happening. The submersion is the long, dark period in which the survivor can no longer distinguish her own mystical states from the language her abuser used to access them, in which every spiritual teaching feels suspect and every dream feels like it might be installed. The ocean floor crystallises a hard-won discernment: the difference between mysticism and mystification, between depth and bypass, between the unitive vision and the gaslight that wears the costume of unitive vision. Sedna in Pisces returns as the discerning mystic — the one who can still see the ocean and refuses to use the ocean to drown anyone.',
    medicine: 'Identify one place where you are using a spiritual frame to avoid an actual fact in your life. Drop the frame. Look at the fact. The Pisces-Sedna register grows in the un-bypassed gaze.',
    shadow: 'The trap is mystical bitterness — the survivor of the false teaching abandons the mystical altogether and treats every depth-experience as suspect, throwing the ocean out with the shipwreck. Real Pisces-Sedna return clarifies the mystical; the false one renounces it.',
    band: 'Read by transit and chart-point placement only; Sedna will not enter Pisces for centuries.'
  }
}

export const SEDNA_SIGNS = SIGNS

export function isSednaSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #1f4868; }
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

export function sednaPageHTML(sign: Sign): string {
  const p = SEDNA_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Sedna in ${Sign}`

  // Other Sedna signs strip — discover the other 11. Glyph ⏀ (a doubled
  // U-shape evocative of the kayak's hull from below the waterline);
  // distinct from ⊛ (Eris), ◈ (Vertex), ⚸ (Lilith), ⚷ (Chiron),
  // ☊ (North Node), and the asteroid set.
  const otherSedna = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/sedna/${s}">⏀ Sedna ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Sedna pairs with Eris in the dwarf-planet tier,
  // and stands shoulder-to-shoulder with Lilith and Chiron as the
  // betrayal-axis third / depth body. The side strip leads with the
  // dwarf-planet sister (Eris) and the shadow-body family.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eris/${sign}">⊛ Eris in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/haumea/${sign}">✺ Haumea in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/makemake/${sign}">◉ Makemake in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur — betrayal-by-trust partner)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur — the foreknowing)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (the open wound)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/sedna">all 12 Sedna signs</a>`
  ].join('')

  const title = `${headline} — dwarf planet 90377, the long-exile / betrayal-and-return axis · gab44`
  const description = `${headline}: how Sedna (dwarf planet 90377) carries the long-exile / betrayed-by-trust register in this sign. ${p.betrayal} ${p.return_} The full archetype with medicine, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sedna', item: `${SITE_URL}/gab44/sedna` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/sedna/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/sedna/${sign}`,
        about: `${headline} — long-exile / betrayal-and-return axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/sedna/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.betrayal)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/sedna/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%8F%80%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/sedna">all 12 Sedna signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/eris/${sign}">Eris in ${Sign}</a>
      <a href="/gab44/lilith/${sign}">Lilith in ${Sign}</a>
      <a href="/gab44/reading?ref=sedna-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⏀ ${sm.symbol}</div>
      <div class="meta">Sedna ⏀ ${Sign} · dwarf planet 90377 · the long-exile / betrayal-and-return axis</div>
    </div>
    <h1><span class="accent">Sedna</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.betrayal)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⏀ Sedna in ${Sign} — the betrayal</h3>
        <p>${escapeHtml(p.betrayal)}</p>
      </div>
      <div class="panel">
        <h3>⏀ Sedna in ${Sign} — the long return</h3>
        <p>${escapeHtml(p.return_)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Sedna in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">⏀</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Sedna in ${Sign} stuck on the ocean floor</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Sedna</span><span class="v">⏀ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">dwarf planet 90377 (discovered 2003)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~11,400-year solar orbit, scattered disc / inner Oort</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">long-exile / betrayal-by-trusted-one / patient-return-with-power</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=sedna-${sign}">Get a $9 Sedna-aware reading →</a>
    </div>

    <h2>The other 11 Sedna signs</h2>
    <div class="strip">${otherSedna}</div>

    <h2>Related — your depth-body cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · long-exile / betrayal-and-return axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function sednaIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = SEDNA_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/sedna/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⏀ ${sm.symbol}</div>
      <div class="name">Sedna in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · long-exile / patient return</div>
      <div class="vibe-mini">${escapeHtml(p.betrayal)}</div>
    </a>`
  }).join('')

  const title = `Sedna by sign — dwarf planet 90377, the long-exile / betrayal-and-return axis · gab44 ✨`
  const description = `Sedna in {sign} — the long-exile / betrayed-by-trust signature across all 12 zodiac signs. The dwarf planet whose discovery opened the trans-Neptunian map; astrologically, the Inuit goddess thrown off her father's kayak who became the deep mother of every sea creature. The patient-return-with-power axis. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Sedna's natural neighbours are the other
  // dwarf planet (Eris), the two shadow bodies (Lilith / Chiron), and
  // the rest of the gab44 graph.
  const navStrip = [
    `<a href="/gab44/eris">⊛ Eris by sign (the disruption / unmasking)</a>`,
    `<a href="/gab44/haumea">✺ Haumea by sign (fertility / generative fragmentation)</a>`,
    `<a href="/gab44/makemake">◉ Makemake by sign (patient creation / restoration)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur — betrayal-by-trust partner)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur — the foreknowing)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/chiron">⚷ Chiron by sign (the open wound)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign</a>`,
    `<a href="/gab44/hygiea">✦ Hygiea by sign</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign</a>`,
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
<link rel="canonical" href="${SITE_URL}/gab44/sedna" />
<meta property="og:title" content="Sedna by sign · gab44" />
<meta property="og:description" content="The long-exile / betrayal-and-return signature of dwarf planet 90377 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#1f4868;--c2:#040f22;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/eris">⊛ Eris by sign</a>
      <a href="/gab44/lilith">⚸ Lilith by sign</a>
      <a href="/gab44/chiron">⚷ Chiron by sign</a>
      <a href="/gab44/reading?ref=sedna-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#1f4868,#040f22)">⏀</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · dwarf planet 90377 (discovered 2003)</div>
    </div>
    <h1>Sedna <span class="accent">by sign</span></h1>
    <p class="vibe">Lilith is what was rejected. Chiron is what was wounded. Eris is what gets said when the false harmony cracks. Sedna is what returns from the ocean floor — slowly, over centuries, with depth-power earned in long exile. The fourth shadow body, the second dwarf planet, the longest orbit on the map. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Sedna stands with Eris in the dwarf-planet tier — the pair that broke open the trans-Neptunian map — and with Lilith and Chiron in the betrayal-and-shadow family. Read the four together for the complete depth-axis: rejected, wounded, disrupted, exiled-and-returned. Then open out into the asteroid graph and the chart-point lane.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=sedna-index">Want a deeper, sedna-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Sedna-by-sign pages · evergreen · the long-exile and patient-return axis.
    </footer>
  </div>
</body>
</html>`
}
