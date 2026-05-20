// Juno × sign SEO funnel — /gab44/juno (index) + /gab44/juno/{sign}
// (12 pages). Juno is asteroid 3 — the specific signature of the
// long-term partnership-form you commit to and stay inside. Distinct
// from Eros (arousal — asteroid 433) and Psyche (soul-recognition —
// asteroid 16). Together with Eros and Psyche, Juno completes the
// relational asteroid trio: arousal × recognition × commitment.
// Companion lane to /gab44/eros (R17) and /gab44/psyche (R18).
// Cross-funnels into /gab44/reading?ref=juno-{sign}.

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

// Juno palette — wine / burgundy / plum, deeper than Eros (pink/red)
// and Psyche (moon-blue). Reads as "marriage", "vow", "the long yes".
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#e8a87c', c2: '#a13d3d' },
  earth: { c1: '#c2a878', c2: '#7a4f30' },
  air:   { c1: '#d8a8c4', c2: '#7e3a5c' },
  water: { c1: '#b58cb8', c2: '#5a2840' }
}

interface JunoProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  commit_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Juno × sign: the partnership-form each sign actually commits to
// long-term — the legal/spiritual yes — and the shadow shape the same
// wiring takes when the marriage is being performed instead of lived.
export const JUNO_PROFILES: Record<Sign, JunoProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'I commit to a partnership of equals-in-fight. Juno in Aries says YES to the partner who walks into the room at full size, will not negotiate themselves smaller for me, and is willing to be argued with at full warmth.',
    trap: 'Confusing combat for partnership. Aries Juno can mistake a relationship that fights well for a relationship that builds well — and stay inside heat that is not actually going anywhere.',
    gift: 'A partnership that keeps both of you sharp. Juno in Aries, when met, is one of the most active long marriages in the zodiac — a love that does not flatten either fire and that gets stronger from honest friction.',
    body: 'Juno in Aries is commitment to a partnership of equal fight. Where Psyche in Aries needs the partner who can take your scale and Eros in Aries wants the chase, Juno in Aries is the question of who you actually want to be at the table with for the long version of your life. The trap is the Aries-shaped one: combat is exciting, and a partnership that fights well can be confused with a partnership that builds well — but the only marriage that actually holds for an Aries Juno is one where both of you are growing, not just both of you bringing heat. The gift, when this Juno is met, is one of the most active long partnerships there is — two whole adult fires choosing each other on purpose, sharpening each other, and refusing to dim.',
    commit_list: [
      'A partner who is fully on their own feet — and who can argue with you at full volume and stay close.',
      'The legal/spiritual yes that recognizes both of you as equally heat-bringing.',
      'A partnership that grows under disagreement instead of avoiding it.',
      'A long-term love where neither of you is asked to dim.'
    ],
    shadow_list: [
      'Confusing combat-as-thrill with partnership-as-build.',
      'Saying yes too fast because the heat felt like recognition.',
      'Picking the partner who can take heat over the partner who can also build.',
      'Reading peace as boredom and starting fires to test the bond.'
    ],
    practice: 'Once a season, name out loud one shared project — not a plan, an actual project — that the partnership is currently building. Aries Juno stays alive on shared aim, dies in shared heat alone.',
    paradox: 'You will worry that long partnership requires losing the fire, and discover that the right partnership is exactly what finally lets the fire burn straight, instead of having to spend itself on the friction of being unmet.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'I commit to a partnership of shared body — bed, kitchen, land, rhythm — built across years. Juno in Taurus says YES to the partner whose body and tempo can live alongside mine for the long version of life.',
    trap: 'Mistaking comfort for commitment. Taurus Juno can stay inside a partnership for the warmth of the bed and the quiet of the kitchen long after the actual yes has gone unattended.',
    gift: 'A long, embodied marriage. Juno in Taurus, when met, is one of the most reliable long partnerships there is — a love that thickens through the body, the home, and the shared seasons.',
    body: 'Juno in Taurus is commitment to a partnership of shared body. Where Psyche in Taurus is recognized through presence, Juno in Taurus is the question of what kind of long-term life-shape you actually want to live INSIDE — the bed, the kitchen, the land, the hours, the tempo. The trap is the Taurus-shaped one: comfort is so deeply right for this Juno that the partnership can keep its shape long after the actual mutual choosing has stopped — two bodies in the same house, parallel rather than partnered. The gift, when this Juno is met, is one of the most embodied marriages in the zodiac — a yes that gets richer with the shared meals, the shared bed, the shared work of building the life.',
    commit_list: [
      'A partner who wants the same daily rhythm — bed, food, work, rest — actually shared.',
      'A partnership that gets richer from repetition, not poorer.',
      'The legal/spiritual yes that includes the body and the home as part of the love.',
      'Sensual loyalty — pleasure shared with the partner, not alongside them.'
    ],
    shadow_list: [
      'Staying inside the comfort long after the choosing has stopped.',
      'Confusing the shared house with shared partnership.',
      'Avoiding the harder yearly conversation because the warmth feels like the love.',
      'Saying yes once and treating it as eternal — instead of choosing again each year.'
    ],
    practice: 'Once a season, sit at the table with the partner and name out loud whether you would choose this partnership again as it stands today. Taurus Juno stays alive on the renewing yes, dies in the assumed yes.',
    paradox: 'You will worry that the marriage that stays comfortable will grow inert, and discover that the right marriage is the one where comfort is the floor, not the ceiling — and the actual yes keeps getting renewed inside it.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'I commit to a partnership of unending conversation. Juno in Gemini says YES to the partner whose mind keeps offering me a new angle, year after year, and who will argue with me as a sport and as a love.',
    trap: 'Avoiding the deeper yes by keeping the talk moving. Gemini Juno can love the conversational shape of the partnership so much that the actual settling-in never lands — and the marriage stays a clever sketch.',
    gift: 'A genuine intellectual marriage. Juno in Gemini, when met, is the rare partnership where the conversation IS the love and the love IS the conversation — and both keep updating instead of looping.',
    body: 'Juno in Gemini is commitment to a partnership of unending conversation. Where Psyche in Gemini is recognized through the mind, Juno in Gemini is the question of who you want to talk-with for the rest of your life — whose thinking-tempo you can live inside, whose questions don\'t bore you in five years. The trap is the Gemini-shaped one: keeping the conversation light is a way to also keep the commitment light, and Gemini Juno can build a partnership where the talk is brilliant but the actual yes never properly lands. The gift, when this Juno is met, is one of the most underrated marriages in the zodiac — the talk becomes the long instrument, the love deepens through the talk instead of in spite of it, and neither of you ever has to be quiet to keep the peace.',
    commit_list: [
      'A partner whose mind genuinely fits yours — and whose curiosity keeps updating.',
      'A long marriage where the conversation is allowed to go to the hard places.',
      'The legal/spiritual yes that does not require boredom or one-channel intimacy.',
      'Two lives that keep growing each other intellectually for decades.'
    ],
    shadow_list: [
      'Keeping the talk witty to keep the depth at bay.',
      'Splitting the inner life across many friendships because no one partnership is enough.',
      'Avoiding the actual yes by staying in the prelude.',
      'Choosing the partner who agrees with you over the partner who can think with you.'
    ],
    practice: 'Once a month, ask the partner one question you have not asked before — and listen all the way through their answer. Gemini Juno stays alive on the question that has not been asked, dies on the loop.',
    paradox: 'You will worry that the long marriage will eventually run the conversation dry, and discover that the right partnership is the one where the talk-stream actually deepens with shared time, instead of thinning.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'I commit to a partnership of home. Juno in Cancer says YES to the partner with whom I can build the inside-place — the family-shape, however we define it — that I have been hungry for since the beginning.',
    trap: 'Re-creating the original family wound and reading the familiarity as commitment. Cancer Juno can mistake the partner who triggers the old not-being-met for the partner who can finally meet, and stay inside the wound trying to win it backward.',
    gift: 'A genuinely held home. Juno in Cancer, when met, is one of the most tender long partnerships there is — a marriage that finally feels like the inside-place this Juno was always reaching for.',
    body: 'Juno in Cancer is commitment to a partnership of home. Where Psyche in Cancer is recognized through emotional knowing, Juno in Cancer is the question of who you want to make the inside-place with — the home, the family-shape, the emotional weather, the long mutual holding. The trap is the Cancer-shaped one: the longing for the home is so old that this Juno can fall in love with the partner who promises it but withholds it, recreating the original emptiness inside a new container. The gift, when this Juno is met, is one of the most healing marriages in the zodiac — a partnership that finally builds the inside-place, where the emotional weather is mutual, and where home is actually home.',
    commit_list: [
      'A partner who can hold the emotional weather without flinching or fixing.',
      'A partnership that is also a making-of-home — physical, emotional, ritual.',
      'The yes that includes family-of-choice, even before family-of-blood.',
      'A love that stays in the room when the old wound surfaces.'
    ],
    shadow_list: [
      'Choosing the partner who reproduces the original family wound.',
      'Translating need into hint and resenting the partner for not reading it.',
      'Withdrawing into the shell instead of asking for the partnership.',
      'Confusing emotional dependence with shared home.'
    ],
    practice: 'Once a month, name one feeling out loud BEFORE the partner has had to ask. Cancer Juno stays alive on shared weather, dies in unspoken accounting.',
    paradox: 'You will worry that the partnership that becomes home will absorb you, and discover that the right home is the one that holds you and lets you keep your edges at the same time.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'I commit to a partnership that is named, declared, and danced in front of the world. Juno in Leo says YES to the partner with whom love is allowed to be a public artifact — visible, celebrated, specific.',
    trap: 'Performing the marriage instead of inhabiting it. Leo Juno can build the most photogenic partnership in the room while the actual yes between the two people inside it has gone quiet.',
    gift: 'A love that is genuinely named. Juno in Leo, when met, is the partnership where the public form and the private inside both burn — a marriage that is a celebration on purpose.',
    body: 'Juno in Leo is commitment to a partnership that is allowed to be visible. Where Psyche in Leo is recognized as singular, Juno in Leo is the question of who you want to stand in the room with — publicly chosen, publicly declaring, publicly belonging to each other in the deeper sense. The trap is the Leo-shaped one: the visible form of the marriage can become the focus instead of the actual love, and Leo Juno can perform a partnership for years that has not had a real conversation since the wedding. The gift, when this Juno is met, is one of the most luminous long partnerships in the zodiac — a love that is allowed to be loud, that is named in front of the world, and that keeps re-declaring itself between the two people inside it.',
    commit_list: [
      'A partner who is proud to stand next to you — and whom you are proud to stand next to.',
      'A long marriage that is allowed to be a celebration, not just an arrangement.',
      'The yes that names you to the world and also re-names you to each other.',
      'Specific praise. Leo Juno dies in long silence between the two of you.'
    ],
    shadow_list: [
      'Performing the marriage to the audience instead of inhabiting it with the partner.',
      'Choosing the photogenic partner over the meeting partner.',
      'Withholding present-tense vulnerability because the public version has been the language.',
      'Reading lack of applause as withdrawal of love.'
    ],
    practice: 'Once a month, tell the partner one specific thing you have noticed and admired — not in front of others, alone with them. Leo Juno stays alive on uncoded specific praise.',
    paradox: 'You will worry that the visible partnership is shallow by definition, and discover that the right marriage is exactly where the public form and the private fire mutually amplify each other, instead of competing.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'I commit to a partnership of devoted daily service. Juno in Virgo says YES to the partner with whom love is expressed through the small attended things — the cup of tea, the careful sentence, the noticed detail, repeated for years.',
    trap: 'Translating partnership into a checklist of duties and grading both selves on it. Virgo Juno can run a flawless household while the actual love between the two people inside it has gone unspoken.',
    gift: 'A love that pays attention. Juno in Virgo, when met, is one of the most steady long partnerships there is — a marriage of mutual devotion expressed in fact, in care, in the daily noticing.',
    body: 'Juno in Virgo is commitment to a partnership of devoted daily service. Where Psyche in Virgo is recognized through devoted attention, Juno in Virgo is the question of with whom you want to live out the small attended life — who do you want to make the tea for, year after year, and who do you want to make the tea for you. The trap is the Virgo-shaped one: the ledger can take over, and the marriage becomes a long mutual audit instead of a long mutual love. The gift, when this Juno is met, is one of the most reliable marriages in the zodiac — a love that is built in the small things and that gets steadier with the years.',
    commit_list: [
      'A partner who notices the work — and whose work you also notice.',
      'A partnership where devotion is expressed in detail, not declaration.',
      'The yes that is renewed in the daily attended thing.',
      'A long marriage where each is allowed to keep improving without being graded.'
    ],
    shadow_list: [
      'Turning the marriage into a long mutual audit.',
      'Critiquing instead of praising the work the partner is doing.',
      'Withholding praise the way you withhold it from yourself.',
      'Choosing the partner who needs fixing because the project is easier than the meeting.'
    ],
    practice: 'Once a week, name one specific thing the partner did this week that you noticed and have not yet thanked them for. Virgo Juno stays alive when devotion is voiced both ways.',
    paradox: 'You will worry that wanting the small attended marriage is unromantic, and discover that the small attended marriage is the most romantic configuration the Virgo Juno actually knows how to feel.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'I commit to a partnership of true peer-meeting. Juno in Libra says YES to the partner who is genuinely my equal — not my complement, not my project — and with whom the partnership can be a balanced, lifelong meeting of two whole adults.',
    trap: 'Choosing the partnership that performs meeting over the partnership that actually meets. Libra Juno can build the most elegant long marriage in the room around two people who have stopped meeting.',
    gift: 'A love between actual equals. Juno in Libra, when met, is one of the most elegant long partnerships in the zodiac — two whole lives held in fair balance, choosing each other freely and ongoingly.',
    body: 'Juno in Libra is commitment to a partnership of true peer-meeting. Where Psyche in Libra is recognized through the meeting of equals, Juno in Libra is the question of with whom you can live out the long, fair, mutually-chosen marriage — a partnership where neither side is the project, neither is the complement, and both are fully on their own feet. The trap is the Libra-shaped one: the aesthetics of partnership can run the marriage for years while the actual peer-meeting underneath has quietly stopped, and Libra Juno can wake up inside a beautiful long arrangement that has been running on form. The gift, when this Juno is met, is one of the most refined marriages in the zodiac — actual peer-meeting, sustained, year after year, between two whole adults choosing the love on purpose.',
    commit_list: [
      'A partner whose own life weight matches yours.',
      'A long partnership that survives disagreement without aesthetic damage.',
      'The yes between two adults each genuinely on their own feet.',
      'A marriage that is actively, mutually re-chosen — not coasted on.'
    ],
    shadow_list: [
      'Choosing the relationship that photographs well over the relationship that actually meets.',
      'Avoiding sexual or emotional truth to keep the elegance of the form.',
      'Disappearing into the partner\'s shape and calling it harmony.',
      'Saying yes to keep the peace and treating that as the real yes.'
    ],
    practice: 'Once a month, name one place where you and the partner have NOT actually met yet. Libra Juno stays alive when the unmet places are honored, dies in the polished omission.',
    paradox: 'You will worry that asking for true peer-meeting will break the elegant thing you have, and discover that true peer-meeting is what keeps the elegant thing actually alive across the decades.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'I commit to a partnership of all-the-way truth — including the underground. Juno in Scorpio says YES to the partner who can hear the whole sentence, sit with the whole shadow, and stay.',
    trap: 'Confusing intensity for commitment. Scorpio Juno can stay inside a haunted, obsessive love for years and read the haunting as devotion, while the actual mutual yes has gone unsaid.',
    gift: 'A partnership without flinching. Juno in Scorpio, when met, is one of the most loyal marriages in the zodiac — a love that has met both of you below the polished layer and chosen the next chapter anyway.',
    body: 'Juno in Scorpio is commitment to a partnership of all-the-way truth. Where Psyche in Scorpio is recognized in the dark, Juno in Scorpio is the question of with whom you can spend the long version of your life with the underground also welcomed in — your worst sentence, your hardest grief, the parts you have never been allowed to say. The trap is the Scorpio-shaped one: intensity is not the same as commitment, and the partner whose own underground is uncontained can feel like a vow while really being a mutual haunting. The gift, when this Juno is met, is one of the most deeply loyal marriages there is — a partnership that has earned the underground access on both sides and that gets stronger every time the truth lands.',
    commit_list: [
      'A partner who can hear the worst sentence and stay in the room.',
      'A long partnership where privacy and disclosure are both honored.',
      'The yes that includes the shadow, on both sides, and gets sealed by it instead of broken by it.',
      'Loyalty that has been tested and proven, not just declared.'
    ],
    shadow_list: [
      'Confusing intensity with depth, and devotion with mutual haunting.',
      'Testing the partner instead of asking — and grading them on the silent test.',
      'Going underground for months and reading the underground as the marriage.',
      'Choosing the partner who haunts you over the partner who can hold you.'
    ],
    practice: 'Once a month, share one true thing about your inner life that the partner has not yet been invited into. Scorpio Juno stays alive when the underground is mutually accessed, dies in the silent vault.',
    paradox: 'You will worry that letting the partner all the way in means losing your sovereignty, and discover that being all the way in with one person is exactly where Scorpio Juno\'s sovereignty finally feels at home.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'I commit to a partnership of fellow-traveling. Juno in Sagittarius says YES to the partner whose horizon overlaps mine, whose larger life I am genuinely interested in walking toward, and with whom the marriage is also a fellowship.',
    trap: 'Confusing motion for marriage. Sagittarius Juno can run alongside a partner for years and read the running as the long yes, while the actual settling-in is being avoided.',
    gift: 'A genuine companion in the larger life. Juno in Sagittarius, when met, is one of the most spacious marriages in the zodiac — a love that grows the world for both of you instead of shrinking either life.',
    body: 'Juno in Sagittarius is commitment to a partnership of fellow-traveling. Where Psyche in Sagittarius is recognized as a fellow seeker, Juno in Sagittarius is the question of with whom you actually want to walk the long road — whose questions, whose meaning-system, whose horizon overlaps yours enough to spend a life inside. The trap is the Sagittarius-shaped one: a partner who can run with you can pass for a partner who is going somewhere with you, and Sagittarius Juno can wake up after years inside a partnership of motion that never made the actual yes. The gift, when this Juno is met, is one of the most expansive long partnerships in the zodiac — a marriage that is also a long shared seeking, where the larger life and the love grow each other.',
    commit_list: [
      'A partner whose own questions are interesting to yours.',
      'A long partnership that is also a fellowship — same horizon, large life.',
      'The yes that includes truth-telling and full-warmth disagreement.',
      'A marriage where neither of you has to shrink to fit the other.'
    ],
    shadow_list: [
      'Confusing motion with direction.',
      'Choosing freedom over commitment because freedom is the easier ask.',
      'Generalizing one bad week into a verdict on the marriage.',
      'Going philosophical to dodge the specific feeling.'
    ],
    practice: 'Once a season, name one question you and the partner are sitting inside together — and name how the partnership is helping you walk it. Sagittarius Juno stays alive on shared meaning, dies in shared motion alone.',
    paradox: 'You will worry that staying inside one marriage will make the world smaller, and discover that the right marriage is exactly what makes the world large enough to actually live in.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'I commit to a partnership built across decades. Juno in Capricorn says YES to the partner whose long-time presence will witness the actual through-line of who I become — and who I am willing to witness in the same way.',
    trap: 'Translating the marriage into accomplishment. Capricorn Juno can grade the partnership on milestones hit instead of on the actual mutual seeing, and turn the long love into a long résumé.',
    gift: 'A love witnessed across decades. Juno in Capricorn, when met, is one of the most enduring long partnerships there is — a marriage that has weathered the actual failure, the actual weather, and the actual becoming.',
    body: 'Juno in Capricorn is commitment to a partnership built across decades. Where Psyche in Capricorn is recognized through long time, Juno in Capricorn is the question of with whom you want to serve the long arc — whose presence across the years will witness who you actually become, and whose becoming you are willing to stay close enough to also witness. The trap is the Capricorn-shaped one: the long partnership can become a project, with milestones graded and present-tense vulnerability waiting until "after the next goal" — and the next goal not coming. The gift, when this Juno is met, is one of the most rare marriages in the zodiac — a yes that gets re-said quietly across each season of life, a love that has weathered actual failure and stayed warm.',
    commit_list: [
      'A partner who can be witnessed and who can witness back.',
      'A long marriage that has weathered actual failure together.',
      'The yes that gets re-said across the years, not assumed because of the original ceremony.',
      'Reliability that is not duty — devotion that has stayed warm across decades.'
    ],
    shadow_list: [
      'Treating the marriage as a series of milestones to hit.',
      'Withholding present-tense vulnerability because past-tense competence has been the language.',
      'Choosing the partner who is impressive over the partner who can actually see.',
      'Letting the body and the soul wait for the goal that does not come.'
    ],
    practice: 'Once a season, name out loud one way you are different now from how you were a year ago — and ask the partner to name one way they have noticed. Capricorn Juno stays alive on present-tense witness, dies in retrospective grading.',
    paradox: 'You will worry that the slow form of marriage is unromantic, and discover that the slow-and-witnessed is the only form of marriage that does not get unwritten by a single bad year.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'I commit to a partnership of friendship-quality intimacy. Juno in Aquarius says YES to the partner who is also a true peer, a fellow-citizen of the larger work, and whose company makes the whole life feel less alien.',
    trap: 'Hiding inside the unconventional configuration to avoid the harder ask of being known. Aquarius Juno can build the most original long partnership in the room and use the originality as a place to not have to land.',
    gift: 'A genuinely original marriage. Juno in Aquarius, when met, is one of the most distinctive long partnerships in the zodiac — a love that does not look like anyone else\'s love and is unmistakably love.',
    body: 'Juno in Aquarius is commitment to a partnership of friendship-quality intimacy. Where Psyche in Aquarius is recognized through ideas, Juno in Aquarius is the question of with whom you want to share the long arc of the larger work — whose vision overlaps yours, whose own life-project is one you genuinely want to walk alongside. The trap is the Aquarius-shaped one: the configuration of the marriage can become the focus instead of the actual people inside it, and Aquarius Juno can spend years optimizing the structure of a partnership while never quite letting it close enough to count. The gift, when this Juno is met, is one of the most original long partnerships there is — friendship-first, free, shared mission, and unmistakably love at the same time.',
    commit_list: [
      'A partner who is also a fellow-citizen of the larger work.',
      'A long partnership where originality and intimacy coexist.',
      'The yes that does not require copying anyone else\'s marriage shape.',
      'Space that is offered, not negotiated.'
    ],
    shadow_list: [
      'Detaching the moment closeness lands.',
      'Mistaking emotional distance for autonomy.',
      'Choosing the unconventional configuration as a hiding place from intimacy.',
      'Translating love into utility — what does this partner do for the mission?'
    ],
    practice: 'Once a month, deliberately stay in the room when the conversation gets emotional — and answer in the body, not the head. Aquarius Juno stays alive when the mind learns to stay close to the body the mind committed to.',
    paradox: 'You will worry that close commitment will erase your originality, and discover that close-and-original is exactly the marriage Aquarius Juno came here to demonstrate to itself and the world.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'I commit to a partnership of merged depths — anchored by the literal. Juno in Pisces says YES to the partner who can hold both the unspoken and the practical, with whom the merging is also embodied life.',
    trap: 'Loving the projection of the marriage more than the marriage. Pisces Juno can sustain a fantasy of the partnership that the literal partner standing in the room is being asked to live up to.',
    gift: 'A genuinely merged long partnership. Juno in Pisces, when met by a partner who can hold both the mystical and the practical, is one of the most healing marriages in the zodiac — a love that touches the original wound of not-being-met and quietly closes it across the years.',
    body: 'Juno in Pisces is commitment to a partnership of merged depths. Where Psyche in Pisces is recognized in the unspoken, Juno in Pisces is the question of with whom you can spend the long version of your life inside the same emotional weather — whose feeling-channel will stay open in your direction year after year, and whose practical hand will also stay on the kitchen table. The trap is the Pisces-shaped one: the longing for that merging is so old that this Juno can fall in love with the IDEA of being held — the partner who could see, the partner who almost holds, the partner who would arrive if only — instead of the literal partner standing in front of them. The gift, when this Juno is met by a partner who can also hold the literal, is one of the most transcendent marriages in the zodiac — a long mutual merging anchored by ordinary life.',
    commit_list: [
      'A partner whose feeling-channel is open in your direction across the years.',
      'A long marriage that holds both the literal and the mystical.',
      'The yes that includes the underground AND the kitchen table.',
      'A partner whose practical hand is present, not just their soul.'
    ],
    shadow_list: [
      'Loving the projection of the partner more than the partner.',
      'Merging so completely that you cannot tell whose feelings you are in.',
      'Using fantasy to bypass the literal partner standing in front of you.',
      'Numbing the disappointment with substances or the next romance.'
    ],
    practice: 'Once a week, name one literal thing about the partner — not a feeling, a fact — before the imagination takes over. Pisces Juno stays alive when the literal anchors the mystical, dies in pure projection.',
    paradox: 'You will worry that wanting the long, merged marriage is too much for any partner, and discover that the right partner is also waiting to be merged that way — and the work was always letting it be mutual instead of one-sided longing.'
  }
}

export const JUNO_SIGNS = SIGNS

export function isJunoSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "⚵"; position: absolute; left: 6px; top: 8px; color: #7e3a5c; font-weight: 700; }
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

export function junoPageHTML(sign: Sign): string {
  const p = JUNO_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Juno in ${Sign}`

  const commitItems = p.commit_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherJunos = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/juno/${s}">⚵ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/twin-flames/${sign}">∞ Twin flame for ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/juno">all 12 Juno signs</a>`
  ].join('')

  const title = `${headline} — your commitment signature · the partnership-form you say YES to · gab44`
  const description = `${headline}: the specific commitment signature of asteroid 3 Juno in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Eros/Psyche/Juno relational asteroid trio guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Juno by sign', item: `${SITE_URL}/gab44/juno` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/juno/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/juno/${sign}`,
        about: `Juno (asteroid 3) commitment signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/juno/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/juno/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9A%B5%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/juno">all 12 Juno signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/eros/${sign}">Eros in ${Sign}</a>
      <a href="/gab44/psyche/${sign}">Psyche in ${Sign}</a>
      <a href="/gab44/reading?ref=juno-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⚵ ${sm.symbol}</div>
      <div class="meta">Juno (asteroid 3) · ${Sign} · commitment / partnership signature</div>
    </div>
    <h1><span class="accent">Juno</span> in ${Sign}</h1>
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

    <h2>What Juno in ${Sign} commits to</h2>
    <ul class="checklist do">${commitItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Juno paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Juno</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Juno reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">3 Juno · discovered 1804 · long-partnership / commitment signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Eros (arousal) · Psyche (recognition) · Venus (love) · Mars (drive)</span></div>
      <div class="row"><span class="k">Juno names</span><span class="v">commitment · the partnership-form you say YES to · the long mutual yes</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">the marriage-shape · the shadow · the medicine</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=juno-${sign}">Get a $9 Eros/Psyche/Juno-aware reading →</a>
    </div>

    <h2>The other 11 Juno signs</h2>
    <div class="strip">${otherJunos}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen commitment-signature guide.
    </footer>
  </div>
</body>
</html>`
}

export function junoIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = JUNO_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/juno/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⚵ ${sm.symbol}</div>
      <div class="name">Juno in ${titleCase(s)}</div>
      <div class="axis">commitment · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Juno by sign — your commitment signature · the partnership-form you say YES to · gab44 ✨`
  const description = `Juno (asteroid 3) by sign — the specific commitment signature for all 12 zodiac signs. The partnership-form you actually say YES to long-term, the trap, and the medicine. Together with Eros (asteroid 433, arousal) and Psyche (asteroid 16, soul-recognition), Juno completes the relational asteroid trio. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/juno" />
<meta property="og:title" content="Juno by sign · gab44" />
<meta property="og:description" content="The commitment signature of asteroid 3 Juno in each zodiac sign — the partnership-form you say YES to long-term." />
<meta property="og:type" content="website" />
<style>:root{--c1:#7e3a5c;--c2:#5a2840;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/psyche">Psyche by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=juno-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#7e3a5c,#5a2840)">⚵</div>
      <div class="meta">12 sign-specific Juno profiles · asteroid 3 · evergreen · commitment / partnership</div>
    </div>
    <h1>Juno by <span class="accent">sign</span></h1>
    <p class="vibe">Juno is asteroid 3 — the specific signature of the long partnership you actually commit to and stay inside. Not Eros, which names what arouses you. Not Psyche, which names what makes you feel seen. Juno names the shape of the YES — the marriage-form, the legal-and-spiritual contract, the long mutual choice. Together with <a href="/gab44/eros">Eros</a> (arousal) and <a href="/gab44/psyche">Psyche</a> (soul-recognition), Juno completes the relational asteroid trio. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=juno-index">Want an Eros/Psyche/Juno-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Juno-by-sign profiles · evergreen commitment-signature guide.
    </footer>
  </div>
</body>
</html>`
}
