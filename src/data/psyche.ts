// Psyche × sign SEO funnel — /gab44/psyche (index) + /gab44/psyche/{sign}
// (12 pages). Psyche is asteroid 16 — the specific signature of soul-
// recognition, the way a partner can know you at a depth that does not
// fit anywhere else. Distinct from Eros (arousal), Venus (love/values),
// and Mars (drive/will). Psyche names what makes you feel SEEN — and
// what you are actually scanning for in a partnership beyond chemistry.
// Companion lane to /gab44/eros (R17): the Eros/Psyche couple is one
// of the oldest erotic-mythic pairings, and astrologers read them
// together. Cross-funnels into /gab44/reading?ref=psyche-{sign}.

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

// Psyche palette — softer than Eros, leaning into recognition / soul /
// the unseen. More moon-toned than the Eros pink.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ffb27a', c2: '#c9572f' },
  earth: { c1: '#b89c6f', c2: '#5e6f3a' },
  air:   { c1: '#a4c7ff', c2: '#4a5ec9' },
  water: { c1: '#7a8ee6', c2: '#383e9c' }
}

interface PsycheProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  recognized_list: string[]
  shadow_list: string[]
  practice: string
  paradox: string
}

// Psyche × sign: where each sign is recognized at the soul layer,
// what makes them feel seen, and the shadow-shape the same wiring
// takes when the recognition is missing or mis-handled.
export const PSYCHE_PROFILES: Record<Sign, PsycheProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'Recognized through fire. Psyche in Aries is seen by the partner who is not afraid of the heat — and who will not ask you to dim it.',
    trap: 'Confusing the partner who tolerates your intensity with the partner who recognizes it. Burning bright into the room and reading silence as awe instead of overwhelm.',
    gift: 'When Psyche in Aries is met, the partner does not flinch and does not flatter. They name the fire and stay close to it — and the body finally knows it has not been hallucinating its own scale.',
    body: 'Psyche in Aries is recognition through fire. The soul is scanning for the partner who can take the full force of your aliveness without recoiling, without performing acceptance, without quietly editing it down. The trap is the Aries-shaped one: the partner who simply does not push back can look like the partner who sees you, when really they are just absent. The gift, when this Psyche is met, is one of the most direct soul-recognitions in the zodiac — not romantic in the soft sense, but a fellow-traveler who does not need you smaller and who tells you the truth at full volume because that is the only volume your soul understood from the beginning.',
    recognized_list: [
      'A partner who matches your scale — not your loudness, your scale.',
      'Direct truth-telling. Aries Psyche dies in coded politeness.',
      'A fellow fighter — someone whose courage is also their default.',
      'The relationship that does not require you to apologize for your aliveness.'
    ],
    shadow_list: [
      'Reading absence-of-pushback as recognition.',
      'Dating the partner who is impressed by you instead of the partner who can meet you.',
      'Going louder when not seen instead of going elsewhere.',
      'Calling combat intimacy because it is at least heat.'
    ],
    practice: 'Once a week, name out loud one thing about yourself that nobody around you has named back to you yet. Aries Psyche stays alive on uncoded recognition; dies in self-editing.',
    paradox: 'You will worry that wanting fully-met fire is too much, and discover that fully-met fire is the only configuration where your scale stops being a problem and becomes an offering.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'Recognized through presence. Psyche in Taurus is seen by the partner who can simply BE there — slowly, patiently, without performing intimacy.',
    trap: 'Mistaking comfort for recognition. Settling into the partnership where nothing is demanded of either soul because the comfort feels like safety.',
    gift: 'A long, slow, steadily-built sense of being known. Psyche in Taurus, when met, is the rare soul-recognition that gets deeper, not blurrier, with time.',
    body: 'Psyche in Taurus is recognition through presence. The soul is scanning for the partner who can simply BE there with you — across years, across the boring weeks, across the ordinary Tuesdays — without needing the relationship to entertain itself. The trap is the Taurus-shaped one: stillness that is companionship can be confused with stillness that is avoidance, and a long, comfortable partnership can pass for a deeply-known one when it is actually a long, comfortable parallel-living. The gift, when this Psyche is met, is one of the most lasting soul-recognitions there is — a partner who has watched you across enough seasons to know the shape of you in a way no number of intense conversations could match.',
    recognized_list: [
      'A partner who stays. The recognition that builds across seasons, not weekends.',
      'Embodied attention — the partner who is in the room, in their body, with you.',
      'The repeated, ordinary thing done with love. Taurus Psyche reads through ritual.',
      'Pleasure that is shared without commentary — the meal, the bath, the slow afternoon.'
    ],
    shadow_list: [
      'Confusing comfort with knowing.',
      'Letting the relationship settle into parallel-living and calling it loyalty.',
      'Avoiding the harder conversation because the comfort feels like the love.',
      'Dating someone whose body is in the room but whose attention has been elsewhere for years.'
    ],
    practice: 'Once a week, do one ordinary thing with deliberate attention to the partner — eat, walk, sit — and let it count as the recognition. Taurus Psyche stays alive on attended ordinary, dies in busy distance.',
    paradox: 'You will worry that wanting the long, slow form of being known is unromantic, and discover that the long-and-slow is the only form of being known that does not vanish at the first hard winter.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'Recognized through the conversation. Psyche in Gemini is seen by the partner whose mind hooks into yours and does not let go.',
    trap: 'Mistaking entertaining conversation for soul-recognition. The clever exchange that goes everywhere and nowhere can pass for the meeting of minds.',
    gift: 'A genuine intellectual marriage. Psyche in Gemini, when met, is a relationship where the conversation is also the love and the love is also the conversation — and neither thins out.',
    body: 'Psyche in Gemini is recognition through the mind. The soul is scanning for the partner whose head moves at your tempo, who follows the half-finished sentence, who knows which thread you mean when you say "the thing we were talking about". The trap is the Gemini-shaped one: a clever conversation can run for years without anything underneath it actually meeting, and Gemini Psyche can mistake the volume of words for the depth of recognition. The gift, when this Psyche is met, is one of the most underrated soul-recognitions in the zodiac — a partner whose mind genuinely fits yours, where the conversation becomes a shared instrument that gets better with practice rather than emptier with use.',
    recognized_list: [
      'A partner who genuinely thinks alongside you — not performs interest.',
      'The conversation that updates over years. Gemini Psyche needs growth, not loops.',
      'Curiosity met with curiosity — same questions, different angles.',
      'Words used precisely. The friend-lover who does not collapse meaning to keep things smooth.'
    ],
    shadow_list: [
      'Confusing entertaining conversation with shared depth.',
      'Splitting your inner life across many people because no single partner is enough.',
      'Verbalizing every feeling so quickly it never lands.',
      'Choosing the partner who agrees with you over the partner who can think with you.'
    ],
    practice: 'Once a week, ask one question and let your partner answer for ten uninterrupted minutes. Gemini Psyche stays alive when the listening is as serious as the speaking.',
    paradox: 'You will worry that needing intellectual recognition is cold, and discover that intellectual recognition, properly received, is one of the warmest forms of love a Gemini knows how to feel.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'Recognized through emotional knowing. Psyche in Cancer is seen by the partner who can feel the room as you feel it — without you having to translate.',
    trap: 'Translating need into hint. Letting an unspoken weather become a test the partner is failing without knowing the test exists.',
    gift: 'Wordless recognition. Psyche in Cancer, when met, is the rare partner whose emotional channel is open to yours and who does not need you to perform your feelings to notice them.',
    body: 'Psyche in Cancer is recognition through emotional knowing. The soul is scanning for the partner who is in the same emotional room you are in — who feels when something has shifted, who senses the day is heavier without needing the report. The trap is the Cancer-shaped one: an unspoken weather becomes a test, and the partner who would have shown up with words still gets graded on whether they noticed without them. The gift, when this Psyche is met, is one of the most tender soul-recognitions in the zodiac — a partner whose emotional intelligence matches yours, where the silent room is full instead of fearful, and where the weather is shared instead of carried alone.',
    recognized_list: [
      'A partner whose emotional channel is open — and who knows when yours has narrowed.',
      'The silence that is companionable, not anxious.',
      'A partner who can sit with feeling without rushing to fix or interpret.',
      'Family-feeling, in the best sense. Cancer Psyche wants the soul-recognition that feels like home.'
    ],
    shadow_list: [
      'Translating need into hint and resenting the partner for not reading it.',
      'Confusing emotional dependence with soul-recognition.',
      'Withdrawing instead of asking, then grading the silence.',
      'Re-creating the original family wound and reading the familiarity as love.'
    ],
    practice: 'Once a week, name one feeling out loud BEFORE the partner has asked. Cancer Psyche stays alive when the emotional weather is shared, dies in unspoken accounting.',
    paradox: 'You will worry that needing to be felt-without-words is unrealistic, and discover that the right partner does feel it — and the work is to also speak it, so the love has both lanes open.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'Recognized as singular. Psyche in Leo is seen by the partner who treats you as the chosen-one, the only-one-of-you, the actual person and not the role.',
    trap: 'Settling for an audience instead of a witness. Reading admiration as recognition, applause as love — and missing the partner who could actually see.',
    gift: 'A love that names you specifically. Psyche in Leo, when met, is the partnership where you are not adored as a category but recognized as exactly who you turned out to be.',
    body: 'Psyche in Leo is recognition through being-named-specifically. The soul is scanning for the partner who looks at you and sees YOU — not the role, not the achievement, not the version that performs — and tells you what they see in language only this version of you would recognize. The trap is the Leo-shaped one: applause and recognition feel similar, and Leo Psyche can build a life around the partners who flatter while missing the rare partners who could actually meet. The gift, when this Psyche is met, is one of the most luminous soul-recognitions in the zodiac — the love that knows your name, in the deeper sense, and uses it.',
    recognized_list: [
      'A partner who names what they see — out loud, in detail, in the right register.',
      'A witness, not an audience. Leo Psyche knows the difference.',
      'Praise that is specific to you, not to the role you play.',
      'A love that does not flatten you into a type.'
    ],
    shadow_list: [
      'Mistaking applause for recognition.',
      'Performing for the partner instead of arriving with them.',
      'Choosing the partner who admires you over the partner who can match you.',
      'Reading silence as withdrawal of love instead of asking what is happening.'
    ],
    practice: 'Once a week, ask the partner one specific thing they have noticed about you that nobody else has named. Leo Psyche stays alive on uncoded specific recognition.',
    paradox: 'You will worry that needing to be seen-as-singular is grandiosity, and discover that the singular recognition is exactly the offering Leo Psyche brings the world — and the relationship that gives it back is the one that lasts.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'Recognized through devoted attention. Psyche in Virgo is seen by the partner who notices the small, careful things — and lets them count.',
    trap: 'Translating recognition into a checklist. Letting the small-thing-noticed become the only currency of love and going hungry the days the checklist runs short.',
    gift: 'A love that pays attention. Psyche in Virgo, when met, is the partner who sees the work, the care, the quiet labor of being you, and names it.',
    body: 'Psyche in Virgo is recognition through devoted attention. The soul is scanning for the partner who notices what you have actually done — the small kindness offered, the harder thought thought through, the version of yourself you have been becoming with no audience. The trap is the Virgo-shaped one: the same eye that watches the partner closely watches the self even more closely, and the recognition that lands gets graded against the recognition that did not. The gift, when this Psyche is met, is one of the most steady soul-recognitions in the zodiac — a partner who treats your effort as visible and your improvement as belonging in the story of the love.',
    recognized_list: [
      'A partner who notices the work — and names it without being asked.',
      'A devotion expressed in detail, not declaration.',
      'Being seen for the becoming, not just the arriving.',
      'A partnership that improves itself together — and where each notices the other improving.'
    ],
    shadow_list: [
      'Critiquing the partner instead of letting them in.',
      'Turning the relationship into a series of audits.',
      'Withholding praise the way you withhold it from yourself.',
      'Choosing the partner who needs fixing because the project is easier than being seen.'
    ],
    practice: 'Once a week, name one specific thing the partner has done that you noticed and have not yet thanked them for. Virgo Psyche stays alive when the noticing is voiced both ways.',
    paradox: 'You will worry that wanting your devotion noticed is needy, and discover that visible devotion answered with visible devotion is the actual cycle Virgo Psyche came here to learn.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'Recognized through the meeting of equals. Psyche in Libra is seen by the partner who can be a true counterpart — not a complement, not an audience.',
    trap: 'Choosing the relationship that looks like meeting over the relationship that actually meets. The aesthetically-perfect couple that has not had a real conversation in two years.',
    gift: 'A love between actual equals. Psyche in Libra, when met, is the partnership where each is recognized as the other\'s peer in the deepest sense — not a project, not a complement, a fellow.',
    body: 'Psyche in Libra is recognition through the meeting of equals. The soul is scanning for the partner who can stand at your scale — not a fan, not a project, a counterpart whose own life weight is enough to balance yours. The trap is the Libra-shaped one: the aesthetic of partnership can be performed so well that the actual partnership goes uncrosschecked, and Libra Psyche can wake up after years inside a beautiful arrangement that has not actually met itself in a long time. The gift, when this Psyche is met, is one of the most elegant soul-recognitions in the zodiac — two whole adults, each genuinely the other\'s peer, both choosing the relationship freely and ongoingly.',
    recognized_list: [
      'A partner whose own life weight matches yours.',
      'The relationship that survives disagreement without aesthetic damage.',
      'Genuine fairness — not performed fairness.',
      'A peer. Libra Psyche dies in subtle pedestal-and-supplicant configurations, going either direction.'
    ],
    shadow_list: [
      'Choosing the relationship that photographs well over the relationship that actually meets.',
      'Avoiding sexual or emotional truth to keep the beauty of the aesthetic.',
      'Disappearing into the partner\'s shape and calling it harmony.',
      'Mistaking a complementary skillset for a soul-counterpart.'
    ],
    practice: 'Once a week, name one place where you and the partner have NOT actually met yet. Libra Psyche stays alive when the unmet places are honored, dies in the polished omission.',
    paradox: 'You will worry that asking for true peer-meeting will break the beautiful thing you have, and discover that true peer-meeting is the only thing that keeps the beautiful thing actually alive.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'Recognized in the dark. Psyche in Scorpio is seen by the partner who does not flinch from the parts of you nobody else has been allowed near.',
    trap: 'Mistaking obsession for soul-recognition. Choosing the partner whose intensity matches yours but whose actual depth does not, and reading the heat as knowing.',
    gift: 'Recognition without flinching. Psyche in Scorpio, when met, is one of the rarest soul-recognitions in the zodiac — a partner who has seen you at the bottom and stayed.',
    body: 'Psyche in Scorpio is recognition in the dark. The soul is scanning for the partner who can sit with the parts of you you have hidden from everyone else, who can hear the worst sentence and still be in the room, who is not flattered or destabilized by access to your underground. The trap is the Scorpio-shaped one: intensity is not the same as depth, and the partner whose own underground is uncontained can feel like recognition while really being a co-haunting. The gift, when this Psyche is met, is one of the most loyal soul-recognitions there is — a love that has met you below the polished layer and chosen you anyway.',
    recognized_list: [
      'A partner who can hear the worst sentence and stay in the room.',
      'Privacy that is honored. Scorpio Psyche shares the underground with the chosen — and not with the merely curious.',
      'A partner whose own depth is contained — not leaking, not avoidant.',
      'Loyalty that has been tested and proven, not just declared.'
    ],
    shadow_list: [
      'Confusing intensity with depth.',
      'Testing the partner instead of asking — and grading them on the silent test.',
      'Going underground for months and reading the underground as devotion.',
      'Choosing the partner who haunts you over the partner who can hold you.'
    ],
    practice: 'Once a week, share one true thing about your inner life that the partner has not yet been invited into. Scorpio Psyche stays alive when the underground is named, dies in the silent vault.',
    paradox: 'You will worry that letting someone see all of you means losing your power, and discover that being seen all the way through is the only place where Scorpio Psyche\'s power finally feels like home rather than burden.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'Recognized as a fellow seeker. Psyche in Sagittarius is seen by the partner whose horizon overlaps yours and whose questions are bigger than the relationship.',
    trap: 'Confusing shared restlessness with shared meaning. Picking the fellow-traveler who is running with you and reading the running as recognition.',
    gift: 'A genuine companion in the larger life. Psyche in Sagittarius, when met, is a love that is also a fellowship — and a fellowship that is also a love.',
    body: 'Psyche in Sagittarius is recognition as a fellow seeker. The soul is scanning for the partner whose own life is going somewhere you are interested in — whose questions overlap yours, whose horizon you actually want to walk toward, whose meaning-system you can argue with at full volume because the argument itself is the love. The trap is the Sagittarius-shaped one: a partner who runs alongside you can pass for a partner who is going somewhere with you, and Sagittarius Psyche can wake up in a love that is mostly motion and not very much meeting. The gift, when this Psyche is met, is one of the most spacious soul-recognitions in the zodiac — a love that grows the world for both of you instead of shrinking either life.',
    recognized_list: [
      'A partner whose own questions are interesting to yours.',
      'Genuine intellectual / spiritual disagreement, run at full warmth.',
      'A horizon worth walking toward together.',
      'Truth-telling. Sagittarius Psyche dies in conflict-avoidant tact.'
    ],
    shadow_list: [
      'Confusing motion with direction.',
      'Generalizing one bad week into a verdict on the partnership.',
      'Choosing freedom over recognition because freedom is the easier ask.',
      'Going philosophical to dodge the specific feeling.'
    ],
    practice: 'Once a week, name one question your soul is sitting with — and let the partner answer their version of it. Sagittarius Psyche stays alive when the meaning-conversation is shared.',
    paradox: 'You will worry that staying in one relationship makes you smaller, and discover that staying in one relationship that actually meets you is what makes the world large enough to live in.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'Recognized through long time. Psyche in Capricorn is seen by the partner who has watched you become who you are — and chooses you across each version.',
    trap: 'Translating the relationship into accomplishment. Letting the years become a checklist instead of a witness, and grading both selves on hitting the marks.',
    gift: 'A love witnessed across decades. Psyche in Capricorn, when met, is one of the most enduring soul-recognitions there is — a partner who knows your story because they were inside it.',
    body: 'Psyche in Capricorn is recognition through long time. The soul is scanning for the partner who has watched you across enough years and enough versions to know the actual shape of you — not the version on a good day, not the version on a hard day, the actual through-line. The trap is the Capricorn-shaped one: long time can become a project, and the relationship\'s years can be graded on accomplishment instead of on knowing. The gift, when this Psyche is met, is one of the most rare soul-recognitions in the zodiac — a love that has seen the work, the failure, the becoming, and chosen the next version each time.',
    recognized_list: [
      'A partner who chooses you again at each new version of you.',
      'A love that has weathered actual failure together.',
      'Recognition without nostalgia — the partner who sees the current you, not the early one.',
      'Reliability that is not duty — devotion that has stayed warm across decades.'
    ],
    shadow_list: [
      'Treating the relationship as a series of milestones to hit.',
      'Withholding the present-tense vulnerability because the past-tense competence has been the language.',
      'Choosing the partner who is impressive over the partner who actually sees.',
      'Letting the body and the soul wait until "after the goal" — and the goal not coming.'
    ],
    practice: 'Once a week, name one way you are different now from how you were a year ago — and ask the partner to name one way they have noticed. Capricorn Psyche stays alive on present-tense witness, dies in retrospective grading.',
    paradox: 'You will worry that the slow form of being known is unromantic, and discover that the slow-and-witnessed is the only form of knowing that does not get unwritten by a single bad year.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'Recognized through ideas. Psyche in Aquarius is seen by the friend-soul whose mind hooks into yours at the level of the larger work.',
    trap: 'Defaulting to the unconventional configuration to avoid the harder ask of being known specifically. Hiding inside the originality of the partnership instead of letting it land.',
    gift: 'A genuine fellow-traveler. Psyche in Aquarius, when met, is a partner whose company makes the larger life make sense in a way no single conventional love could.',
    body: 'Psyche in Aquarius is recognition through ideas, the larger work, the mission. The soul is scanning for the friend-soul whose mind hooks into yours at scale — whose politics, whose questions, whose vision of the world is in the same neighborhood as yours, and whose company makes the rest of the life feel less alien. The trap is the Aquarius-shaped one: the configuration of the relationship can become the focus instead of the actual people inside it, and Aquarius Psyche can spend years optimizing the structure of a partnership while never quite letting it close enough to count. The gift, when this Psyche is met, is one of the most original soul-recognitions in the zodiac — a love that does not look like anyone else\'s love and yet is unmistakably love.',
    recognized_list: [
      'A partner who is also a fellow-citizen of the larger work.',
      'Originality. Aquarius Psyche dies inside the borrowed script.',
      'Friendship-quality intimacy — peer first, then everything else.',
      'Space that is offered, not negotiated.'
    ],
    shadow_list: [
      'Detaching the moment closeness lands.',
      'Mistaking emotional distance for autonomy.',
      'Choosing the unconventional configuration as a hiding place from intimacy.',
      'Translating love into utility — what does this partner do for the mission?'
    ],
    practice: 'Once a week, deliberately stay in the room when the conversation gets emotional — and answer in the body, not the head. Aquarius Psyche stays alive when the mind learns to stay close to the body the mind loves.',
    paradox: 'You will worry that close-recognition will erase your originality, and discover that close-and-original is exactly the configuration Aquarius Psyche came here to demonstrate to itself and the world.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'Recognized in the unspoken. Psyche in Pisces is seen by the partner who hears the prayer you did not say — and stays in the room with you anyway.',
    trap: 'Loving the partner who could hear it instead of the partner who actually does. Building the entire relationship in the imagination and asking the real human to live up to the projection.',
    gift: 'Recognition at the soul layer. Psyche in Pisces, when met by a partner who can hold both the unspoken and the literal, is one of the most transcendent soul-recognitions in the zodiac.',
    body: 'Psyche in Pisces is recognition in the unspoken. The soul is scanning for the partner who hears what was not said, who is in the same emotional weather you are in, who can sit inside the unsayable without rushing to translate it. The trap is the Pisces-shaped one: the longing for that recognition is so old that Pisces Psyche can fall in love with the IDEA of being known — the partner who could see, the partner who almost sees, the partner who would see if only — instead of the partner who actually does. The gift, when this Psyche is met by a partner who can hold the literal as well as the mystical, is one of the most healing soul-recognitions there is — a love that touches the original wound of not-being-seen and quietly closes it.',
    recognized_list: [
      'A partner whose feeling-channel is open in your direction.',
      'The shared silence that is full, not empty.',
      'A partner who can hold the literal as well as the spiritual.',
      'The love that is also a quiet unwinding of an old loneliness.'
    ],
    shadow_list: [
      'Loving the projection of the partner more than the partner.',
      'Merging so completely that you cannot tell whose feelings you are in.',
      'Using fantasy to bypass the literal partner standing in front of you.',
      'Numbing the disappointment with substances or the next romance.'
    ],
    practice: 'Once a week, name one literal thing about the partner — not a feeling, a fact — before the imagination takes over. Pisces Psyche stays alive when the literal anchors the mystical, dies in pure projection.',
    paradox: 'You will worry that wanting to be known in the unspoken is too much for any partner, and discover that the right partner is also waiting to be known that way — and the work was always letting it be mutual instead of one-sided longing.'
  }
}

export const PSYCHE_SIGNS = SIGNS

export function isPsycheSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "❋"; position: absolute; left: 6px; top: 8px; color: #4a5ec9; font-weight: 700; }
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

export function psychePageHTML(sign: Sign): string {
  const p = PSYCHE_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Psyche in ${Sign}`

  const recogItems = p.recognized_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const shadowItems = p.shadow_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherPsyches = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/psyche/${s}">❋ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/twin-flames/${sign}">∞ Twin flame for ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/psyche">all 12 Psyche signs</a>`
  ].join('')

  const title = `${headline} — your soul-recognition signature · how you are seen, what you scan for · gab44`
  const description = `${headline}: the specific soul-recognition signature of asteroid 16 Psyche in ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Eros/Psyche couple guide + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Psyche by sign', item: `${SITE_URL}/gab44/psyche` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/psyche/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/psyche/${sign}`,
        about: `Psyche (asteroid 16) soul-recognition signature for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/psyche/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/psyche/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9D%8B%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/psyche">all 12 Psyche signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/eros/${sign}">Eros in ${Sign}</a>
      <a href="/gab44/reading?ref=psyche-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">❋ ${sm.symbol}</div>
      <div class="meta">Psyche (asteroid 16) · ${Sign} · soul-recognition signature</div>
    </div>
    <h1><span class="accent">Psyche</span> in ${Sign}</h1>
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

    <h2>How Psyche in ${Sign} feels recognized</h2>
    <ul class="checklist do">${recogItems}</ul>

    <h2>Shadow patterns to watch</h2>
    <ul class="checklist dont">${shadowItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Psyche paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for this Psyche</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Psyche reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Asteroid</span><span class="v">16 Psyche · discovered 1852 · soul-recognition signature</span></div>
      <div class="row"><span class="k">Distinct from</span><span class="v">Eros (arousal) · Venus (love) · Mars (drive)</span></div>
      <div class="row"><span class="k">Psyche names</span><span class="v">recognition · what makes you feel seen · the soul-meeting you scan for</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">how you are known · the shadow · the medicine</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=psyche-${sign}">Get a $9 Eros/Psyche-aware reading →</a>
    </div>

    <h2>The other 11 Psyche signs</h2>
    <div class="strip">${otherPsyches}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · evergreen soul-recognition guide.
    </footer>
  </div>
</body>
</html>`
}

export function psycheIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = PSYCHE_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/psyche/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">❋ ${sm.symbol}</div>
      <div class="name">Psyche in ${titleCase(s)}</div>
      <div class="axis">soul-recognition · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Psyche by sign — your soul-recognition signature · how you are seen by zodiac · gab44 ✨`
  const description = `Psyche (asteroid 16) by sign — the specific soul-recognition signature for all 12 zodiac signs. How you are seen at the soul layer, what you actually scan for in a partner, the shadow and the medicine. Companion to Eros (asteroid 433); together they read as the Eros/Psyche couple. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/psyche" />
<meta property="og:title" content="Psyche by sign · gab44" />
<meta property="og:description" content="The soul-recognition signature of asteroid 16 Psyche in each zodiac sign — how you are seen at the soul layer." />
<meta property="og:type" content="website" />
<style>:root{--c1:#4a5ec9;--c2:#383e9c;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/eros">Eros by sign</a>
      <a href="/gab44/juno">Juno by sign</a>
      <a href="/gab44/vesta">Vesta by sign</a>
      <a href="/gab44/pallas">Pallas by sign</a>
      <a href="/gab44/ceres">Ceres by sign</a>
      <a href="/gab44/lilith">Lilith by sign</a>
      <a href="/gab44/chiron">Chiron by sign</a>
      <a href="/gab44/hygiea">Hygiea by sign</a>
      <a href="/gab44/reading?ref=psyche-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#4a5ec9,#383e9c)">❋</div>
      <div class="meta">12 sign-specific Psyche profiles · asteroid 16 · evergreen · soul-recognition</div>
    </div>
    <h1>Psyche by <span class="accent">sign</span></h1>
    <p class="vibe">Psyche is asteroid 16 — the specific signature of soul-recognition, the way you feel SEEN, the partner you are actually scanning for once chemistry has done its work. Not Eros, which names what arouses you. Not Venus, which names what you love. Psyche names what makes you feel known. Together with <a href="/gab44/eros">Eros</a>, Psyche forms the oldest erotic-mythic couple — and astrologers read them together. Pick your sign.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=psyche-index">Want an Eros/Psyche-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Psyche-by-sign profiles · evergreen soul-recognition guide.
    </footer>
  </div>
</body>
</html>`
}
