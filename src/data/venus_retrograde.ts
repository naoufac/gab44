// Venus Retrograde survival × sign SEO funnel — /gab44/venus-retrograde
// (index) + /gab44/venus-retrograde/{sign} (12 pages). Targets the
// "venus retrograde {sign}" / "venus retrograde survival" / "ex came back
// venus retrograde" search clusters. Venus retrogrades for ~40 days every
// ~18 months — less frequent than Mercury but very high-intent (people
// notice their relationships, money, and aesthetics getting weird and
// search). General explainer lives at /gab44/transits/venus-retrograde;
// these 13 pages are the SIGN-SPECIFIC survival kits — what tends to
// surface in love, money, and value for your sun sign during the window.
// Cross-funnels into /gab44/reading?ref=vr-{sign}.

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

const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

interface VRProfile {
  sign: Sign
  oneLine: string
  trap: string
  gift: string
  body: string
  do_list: string[]
  dont_list: string[]
  practice: string
  paradox: string
}

// Venus Retrograde × sign survival kit. Venus rules love, beauty, money,
// value, attraction, taste. The retrograde turns each of these inward for
// ~40 days every ~18 months. Each sign has a different shape of love-test
// and money-audit during the window.
export const VR_PROFILES: Record<Sign, VRProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The first-mover sign meets the don\'t-pursue window. Venus pulls back; let her.',
    trap: 'Pursuing the new flame in week one with the usual Aries fire — and watching them ghost as the truth surfaces.',
    gift: 'A rare ~40 days where the universe stops you from chasing the wrong person. The clarity on what you actually want lands when you stop charging.',
    body: 'Venus Retrograde for Aries is the slow-down on the chase. You are wired to pursue — in love, in attraction, in taste, in spending. The retrograde wants you not to. The trap is meeting someone in week one and turning the full Aries voltage on them; what looks like chemistry is often just heat looking for a target. The deeper trap is impulse-spending on the bold thing — a wardrobe upgrade, a big-ticket want — that the post-retrograde you would not buy. The gift, when you let it land, is rare for this sign: ~40 days of clarity on what you actually want versus what you have been wanting because wanting feels good.',
    do_list: [
      'Sit with the new attraction for a week before pursuing.',
      'Revisit one old love-pattern that keeps repeating. Name it without judgment.',
      'Audit what you have been drawn to lately — is it real, or is it heat?',
      'Hold one big purchase for the full retrograde window.'
    ],
    dont_list: [
      'Pursue a new flame in week one — the picture is loading.',
      'Confess a feeling to an ex who resurfaces unless you have done the work.',
      'Buy the bold-statement piece you would not buy in a quieter month.',
      'Confuse impulse-attraction with destiny.'
    ],
    practice: 'For ~40 days, every want gets a 7-day waiting period before action. Aries Venus survives by enforced delay-on-want.',
    paradox: 'You will hate the slowness and discover by the end that what survived the slowness is what was real.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'Venus\'s ruling sign. The retrograde re-reads love, beauty, money, taste — your whole turf.',
    trap: 'Holding too tight to a relationship that is asking to be re-examined, or to a possession that has stopped giving back.',
    gift: 'The deep audit of your sense of value. Taurus emerges from VR with a relationship to love and money that is actually yours.',
    body: 'Venus Retrograde for Taurus is the deepest version of the rite — Venus is your ruler. Everything Venus touches, this retrograde turns up the volume on: the relationship you have been on cruise control in, the body and the body\'s pleasures, the home and what is in it, the money story, the aesthetic, the relationship to your own worth. The trap is the Taurus-specific one: holding too tight to what is asking to change. The relationship that has stopped nourishing but feels safe. The possession you cling to past its season. The version of yourself in love that worked at 25 and no longer fits at 35. The gift is the full audit: by the end, what is left is what is yours.',
    do_list: [
      'Have one slow honest conversation with a partner about what is no longer true.',
      'Audit one possession-pattern: do I still love this, or just own it?',
      'Re-examine your money story — what is "enough" today, really?',
      'Revisit one pleasure you used to love and forgot to make space for.'
    ],
    dont_list: [
      'Hold a relationship together by inertia in week one — the picture is loading.',
      'Make a major aesthetic-overhaul purchase you would not make in a calmer week.',
      'Confuse comfort with love. Venus is asking the difference.',
      'Sign or break a financial-romantic agreement during the window without sleeping on it twice.'
    ],
    practice: 'For ~40 days, every Sunday spend 30 minutes on one Venus-ruled question: love, body, money, beauty, worth. Taurus Venus survives by sustained inquiry.',
    paradox: 'You will feel like everything is being shaken loose and discover by the end that what stayed is what truly belonged to you.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The light-touch sign meets the depth-of-feeling window. Surfaces get scratched.',
    trap: 'Multiple flirtations getting tangled because the retrograde turns up the emotional volume on what was meant to be light.',
    gift: 'A rare three-channel clarity: which relationships are real friendship, which are romance, which are just stimulation.',
    body: 'Venus Retrograde for Gemini surfaces the difference between the many connections you keep open and the few that actually feed you. The trap is a tangle — the texts with three different people, the emotional volume on each one going up under the retrograde, one of them turning into a real misunderstanding because the depth was greater than the conversation could carry. The gift, when you let the retrograde sort, is a sharper map of your relational life: which people are friendship, which are romance, which are just background stimulation that was never going anywhere. Worth knowing.',
    do_list: [
      'Pick one connection that has been on autopilot and have a real conversation in person or on the phone.',
      'Notice which relationships you reach for when bored vs when you actually want to connect.',
      'Revisit a friendship you let drift and check in with the actual person.',
      'Re-read one piece of writing about love that shaped you — has it aged?'
    ],
    dont_list: [
      'Flirt three ways during VR — one of them is going to take it more seriously than you meant.',
      'End a relationship in week one over a single misread message.',
      'Make a fast aesthetic pivot on a vibe — wait until shadow-out.',
      'Confuse curiosity with chemistry.'
    ],
    practice: 'For ~40 days, before opening a new connection, name what you actually want from it. Gemini Venus survives by stated intent.',
    paradox: 'You will feel relationships getting more delicate and end the window with fewer but deeper threads.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The home-and-feeling sign. Venus retrograde brings old loves and old feelings to your door.',
    trap: 'Letting nostalgia for an old love pull you back into a dynamic you already outgrew.',
    gift: 'Real clarity on what home, family, and love mean to the version of you alive today (vs the one who needed something different ten years ago).',
    body: 'Venus Retrograde for Cancer is the season the past walks back in. An ex appears in the inbox. A song catches you off guard. An old feeling for someone you did not know you still had any feeling for shows up at 11pm. The trap is the Cancer one: letting the wave of nostalgia pull you into a dynamic that was real once and is not real now. The gift is in the same wave: a rare chance to revisit your own history of love with the eyes you have today, to re-mother the version of you that was hurt then, to re-define what family and home mean now versus what they meant when you needed something different.',
    do_list: [
      'Sit with the feeling that the old name brings up for 7 days before responding.',
      'Re-mother the version of you who was hurt back then.',
      'Revisit one piece of love-history with adult eyes, not the kid\'s.',
      'Have one honest conversation with a current partner about what home means now.'
    ],
    dont_list: [
      'Re-enter a relationship in week one because nostalgia made it feel close.',
      'Make a move-in or move-out decision during VR.',
      'Confuse longing for the past with desire for the present.',
      'Take guilt-trips from family-of-origin at face value during VR — the volume is amplified.'
    ],
    practice: 'For ~40 days, when an old name surfaces, journal the feeling for one week before deciding anything. Cancer Venus survives by separating memory from mandate.',
    paradox: 'The past will feel like it wants you back. By the end you will know which parts wanted you back and which parts you have already, gently, outgrown.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The romance-and-spotlight sign. Venus retrograde turns the spotlight inward.',
    trap: 'Performing the relationship instead of being in it, then feeling the gap when the audience drops away.',
    gift: 'A rare ~40 days where love is private, not performed — which is where Leo love actually grows.',
    body: 'Venus Retrograde for Leo is the off-stage chapter of the romantic life. You are wired to express love bigly, beautifully, publicly. The retrograde wants the private version. The trap is the Leo-specific one: feeling the gap when the audience drops away and reading it as a problem with the relationship rather than as the retrograde stripping back the performance to see what is underneath. The gift is exactly that: a rare ~40 days to find out what your love looks like when no one is watching. To love your partner (or your aloneness) in the kitchen, without the camera. The post-retrograde version of your love will be the one with actual roots.',
    do_list: [
      'Spend one full day of the retrograde in love with someone (or yourself) with no posting.',
      'Revisit one relationship that you "performed" and stopped tending — repair if real, release if not.',
      'Audit your aesthetic for what is yours versus what is for the camera.',
      'Re-read one piece of art about love that shaped you when you were younger.'
    ],
    dont_list: [
      'Make a public relationship announcement (engagement, soft launch, breakup) in the first half of VR.',
      'Confuse audience-silence with relationship-failure during the window.',
      'Buy the statement-piece you would buy purely for how it photographs.',
      'End a relationship in week one because the spark dimmed — Venus is asking what is underneath.'
    ],
    practice: 'For ~40 days, do one private act of love each day with no record. Leo Venus survives by un-photographed devotion.',
    paradox: 'You will feel briefly unseen and discover the love built in private during VR is the love that lasts visibly afterwards.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'The discerning sign meets the over-correction trap. Watch the inner critic on love and self-worth.',
    trap: 'Turning the retrograde\'s useful re-read into a list of everything wrong with your relationship — or with yourself.',
    gift: 'A real, careful audit of which standards are actually yours and which were inherited or anxious.',
    body: 'Venus Retrograde for Virgo is two-edged. The Virgo skill — careful discernment — is exactly what the retrograde is asking for. The Virgo trap — over-correction, self-attack, listing every imperfection — is exactly what the retrograde will amplify if you do not watch. The trap is the 3am loop on every flaw in the partner, in the relationship, in your own body. The gift, when you keep the inner critic on a leash, is a beautiful careful audit: which standards are actually yours, which are inherited from a parent or culture, which are anxious-protective. The post-retrograde Virgo loves with more honest standards and fewer anxious ones.',
    do_list: [
      'Audit one standard you hold in love — is it yours, or anxious?',
      'Re-tend one practice that has lapsed (body, ritual, daily care).',
      'Have one honest conversation with a partner about what is actually working.',
      'Notice when the inner critic has switched from edit to attack — and stop.'
    ],
    dont_list: [
      'Trust the 3am list of everything wrong — that is VR amplification, not signal.',
      'Apologize for things you did not do wrong because the retrograde made you doubt.',
      'Make a major over-haul of your aesthetic during week one.',
      'Try to fix everything in the relationship at once — pick one or two things.'
    ],
    practice: 'For ~40 days, run one bounded ten-minute "edit window" per week on one Venus-ruled question. Virgo Venus survives by bounded perfectionism.',
    paradox: 'You will feel everything needs fixing. By the end you will know that fixing one or two things well changed the rest.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'Venus\'s other ruling sign. The retrograde re-reads every relationship and every "deal."',
    trap: 'Performing fairness instead of stating preference. A relational pattern of self-erasure surfaces and asks for repair.',
    gift: 'The clearest look this sign gets, all year, at which relationships are actually mutual and which run on your accommodation.',
    body: 'Venus Retrograde for Libra is the deepest relational re-read in the wheel — Venus is your ruler, relationships are your axis. The trap is the Libra-specific one: performing fairness instead of stating preference, accommodating until the self disappears, then feeling the resentment that has built and not knowing what to do with it. The retrograde will surface every relationship that has run on your bending and ask if it can survive your standing up. Some will, some will not. The gift is the clearest look you get all year at which partnerships are mutual and which were running on your one-sided care. The post-retrograde Libra is in fewer relationships but deeper ones.',
    do_list: [
      'Have one conversation in which you say what you actually want, no performance.',
      'Re-negotiate one relationship — professional or personal — that has been quietly imbalanced.',
      'Audit your aesthetic for what is yours vs for what others approve.',
      'Re-read one contract or agreement and adjust what is no longer fair.'
    ],
    dont_list: [
      'Make a major relational decision (move in, leave, propose) in week one of VR.',
      'Sign a partnership agreement you have not slept on twice.',
      'Stay in a conversation past the point where you have erased yourself — leave and revisit.',
      'Confuse re-engagement with re-commitment.'
    ],
    practice: 'For ~40 days, in every relational decision name your actual preference before naming the fair compromise. Libra Venus survives by stated preference first.',
    paradox: 'You will feel the relationships getting more delicate, and end the window with the ones worth keeping clearer than ever.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'The intimacy sign. VR brings buried truths about love, money, and trust to the surface.',
    trap: 'Acting on a half-truth that surfaced in week one. Confronting before the full picture has loaded.',
    gift: 'A rare ~40 days for the depth-work this sign does best: the audit of trust, intimacy, and shared resources.',
    body: 'Venus Retrograde for Scorpio is depth-charge season for love and money. A trust-truth surfaces — about a partner\'s spending, about an intimacy gap, about an inheritance dynamic, about a body symptom you have been minimizing in a partnership. The trap is acting on the first surfacing. Scorpio investigates, confronts, restructures — but in VR the first read is rarely the full read. The gift is the depth-work: the careful audit of trust, of shared money, of intimacy, of where you have been giving access you should not have or denying access you should. The post-retrograde Scorpio is in fewer entanglements but more fully in the ones that remain.',
    do_list: [
      'Write down what surfaced in week one and let it sit for at least one week before action.',
      'Re-read one financial-entanglement document — joint accounts, prenup, business stake.',
      'Have one honest conversation about intimacy or trust you have been avoiding.',
      'Audit one trust dynamic without rushing to verdict.'
    ],
    dont_list: [
      'Confront in week one — wait for the full picture by week three or four.',
      'Sign or break a financial-romantic contract during the window without sleeping on it twice.',
      'Spiral into worst-case interpretation of a partner\'s silence.',
      'Make a vow you would not make in a calmer month.'
    ],
    practice: 'For ~40 days, when a truth surfaces, document and wait one full week before acting. Scorpio Venus survives by investigation-without-verdict.',
    paradox: 'You will feel certain in week one and discover by the end that the actual picture was deeper and more workable than the first read.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The freedom sign meets the stay-and-look-again window. Old loves and old beliefs about love return.',
    trap: 'Booking the trip with the new flame in week one and watching it become the breakup trip. Or running from a real conversation by booking flight.',
    gift: 'A rare invitation to stop running on the relational front long enough to see what is actually true.',
    body: 'Venus Retrograde for Sagittarius is the comeback of every belief about love and every plan to outrun a relationship moment. The flight gets cancelled. The new flame asks for a conversation you would normally avoid by being in transit. An old love reappears and the philosophy of love you have been carrying gets fact-checked. The trap is the Sag default: keep moving, keep declaring, outrun the friction. VR will not let you. The gift is the search-inward: the one love-question you have been deferring by being in motion. The teacher about love whose lessons you outgrew. The next relationship direction loads more clearly when you stop sprinting.',
    do_list: [
      'Re-read one teacher or book about love that shaped you. Has it aged?',
      'Have one slow conversation with a partner — in person, no flight booked as escape.',
      'Sit with one belief about love you keep declaring and ask if it is still true.',
      'Audit your aesthetic for what is yours versus what is for the next adventure photo.'
    ],
    dont_list: [
      'Book non-refundable couples-travel in week one.',
      'Make a bold public love-declaration on a topic you are still working out.',
      'Run from a real conversation by leaving town.',
      'Confuse restlessness with calling — VR-restlessness is the heart asking to be re-aimed, not refueled.'
    ],
    practice: 'For ~40 days, replace one outward-search habit (apps, scrolling) with one slow practice of presence with one person. Sagittarius Venus survives by re-routing the search.',
    paradox: 'You will feel the love-life has slowed and discover the love-life was waiting for you to catch up to yourself.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The structure sign. VR re-opens the architecture of your long-term relationships.',
    trap: 'Pushing forward on the long-term relationship decision in week one when the full information is still loading.',
    gift: 'Three to six weeks to re-architect the long-term relationship and money picture with a clearer head.',
    body: 'Venus Retrograde for Capricorn is the relationship architecture audit. The long-term partnership gets a re-read. The shared money picture gets a re-read. The "five-year plan" of the love-life gets a re-read. The trap is the Capricorn one: push the decision through, sign, climb. VR is asking you to slow long enough to make sure the ladder is on the right wall. The gift is huge: a sanctioned audit of the long-build of love. The relationship structure that was right at 28 and is no longer right at 38. The financial entanglement made under different conditions and never updated. Mercury Retrograde re-reads contracts in general; Venus Retrograde re-reads the romantic ones.',
    do_list: [
      'Re-read your long-term commitment — marriage agreement, cohabitation arrangement, shared financial plan.',
      'Have one honest conversation with your partner about what is no longer true in the structure.',
      'Audit one long-build romantic plan against your actual current self.',
      'Revisit one love-pattern that has been on hold and decide: re-start or formally retire.'
    ],
    dont_list: [
      'Sign a major commitment-contract in week one without sleeping on it twice.',
      'Quit a long-term relationship in week one of VR — the verdict in week six will be different.',
      'Push the engagement / move-in / merge-finances move forward into VR if you can move it past shadow-out.',
      'Confuse stability with rightness.'
    ],
    practice: 'For ~40 days, every Sunday spend 30 minutes re-reading one structural document of your romantic life. Capricorn Venus survives by audit-as-discipline.',
    paradox: 'You will feel like the relationship has stalled and discover the stall was the room you needed to redesign the next decade.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The chosen-family sign. VR re-reads the friendships, group-loves, and unconventional relationship structures.',
    trap: 'A friendship-group dynamic frays because two people read the same emotional moment in opposite tones.',
    gift: 'Three to six weeks to re-architect the relational community you have outgrown but kept patching.',
    body: 'Venus Retrograde for Aquarius is two zones at once: the chosen-family / friendship-group, and the unconventional relationship structures (open, polyamorous, non-traditional, long-distance). The trap is Aquarius-specific: a single misread emotional moment in a group fraying the whole dynamic, or pivoting a relationship structure in week one based on a vibe. The gift is structural: a sanctioned ~40 days to rebuild the relational community of your life with a clear head. The friend-group you should have left a year ago. The relationship structure you keep complaining about and never re-negotiate. Venus wants you to re-architect, not just re-react.',
    do_list: [
      'Audit one friend-group or community you are in. Keep, leave, or rebuild your role.',
      'Re-negotiate one relationship structure that has been quietly mismatched.',
      'Reconnect with one friend you drifted out of.',
      'Have one honest conversation about what your aesthetic is for, and who it is for.'
    ],
    dont_list: [
      'Quit a friend-group in week one based on a single misread message.',
      'Pivot a relationship structure in week one — wait until edges have settled.',
      'Confuse a vibe-drop with a verdict.',
      'Make a public statement about a love-dynamic before re-reading the original conversation.'
    ],
    practice: 'For ~40 days, do one weekly re-read of an emotional thread before responding. Aquarius Venus survives by deferred reaction.',
    paradox: 'You will feel the relational systems are all broken and discover that one well-rebuilt system is worth ten complained-about ones.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The porous sign. VR amplifies the dream-life of love — and the risk of dissolving the boundary in the wrong place.',
    trap: 'Reading a partner\'s tone that was not there, dissolving into the partner\'s mood, mistaking telepathy for what was actually said.',
    gift: 'A rare ~40 days where the dream and the felt-sense of love run unusually clear if you give them a vessel.',
    body: 'Venus Retrograde for Pisces is amplification of the channel you already are in love. The dream-life gets vivid. The synchronicities multiply. The felt-sense of a partner\'s mood is loud. The trap is the Pisces-specific one: reading a tone in a message that was not there, dissolving the boundary between what you sensed and what was actually said, mistaking absorption for love, or romanticising a connection past where it actually goes. The gift is rare and real: ~40 days where, given a vessel — a journal, an art practice, a contemplative half-hour — the channel runs unusually clear. The dream that names what you have been avoiding, the synchronicity that confirms the right person.',
    do_list: [
      'Keep a love-and-dream journal for the full retrograde window.',
      'Read messages literally before reading them emotionally; ask a clarifying question if uncertain.',
      'Make one piece of art that processes what is surfacing in love.',
      'Reconnect with one practice that grounds the channel.'
    ],
    dont_list: [
      'Trust your read of a tense romantic message before checking the literal words.',
      'Let the partner\'s confusion become your verdict on the relationship.',
      'Make a major dissolve-the-boundary decision in week one (move in, merge finances, end a relationship).',
      'Confuse spiritual openness with relational structurelessness.'
    ],
    practice: 'For ~40 days, every morning name one literal fact about your love-life before reading the felt-sense. Pisces Venus survives by literal-before-mystical.',
    paradox: 'You will feel everything in love more vividly and discover that vivid plus literal is the medicine you have been needing.'
  }
}

export const VR_SIGNS = SIGNS

export function isVRSign(s: string): s is Sign {
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
  .checklist.do li::before { content: "✓"; position: absolute; left: 6px; top: 8px; color: #5e8a3a; font-weight: 700; }
  .checklist.dont li::before { content: "✗"; position: absolute; left: 6px; top: 8px; color: #c93a22; font-weight: 700; }
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

export function vrPageHTML(sign: Sign): string {
  const p = VR_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Venus Retrograde Survival for ${Sign}`

  const doItems = p.do_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const dontItems = p.dont_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherVRs = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/venus-retrograde/${s}">♀℞ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/transits/venus-retrograde">♀℞ general explainer</a>`,
    `<a href="/gab44/personal-planets/venus-${sign}">♀ Venus in ${Sign}</a>`,
    `<a href="/gab44/mercury-retrograde/${sign}">☿℞ Mercury survival</a>`,
    `<a href="/gab44/saturn-return/${sign}">♄ Saturn return in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/venus-retrograde">all 12 survival kits</a>`
  ].join('')

  const title = `${headline} — love, money, value · what surfaces, what to do · gab44`
  const description = `${headline}: how Venus Retrograde lands for ${Sign} in love, money, beauty, value. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Survival kit + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Venus Retrograde', item: `${SITE_URL}/gab44/venus-retrograde` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/venus-retrograde/${sign}` }
        ]
      },
      {
        '@type': 'HowTo',
        name: headline,
        description: p.oneLine,
        step: [
          ...p.do_list.map((d, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Do: ${d}` })),
          ...p.dont_list.map((d, i) => ({ '@type': 'HowToStep', position: p.do_list.length + i + 1, name: `Don't: ${d}` }))
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/venus-retrograde/${sign}`,
        about: `Venus Retrograde survival kit for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/venus-retrograde/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/venus-retrograde/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%99%80%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/venus-retrograde">all 12 kits</a>
      <a href="/gab44/transits/venus-retrograde">general explainer</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/reading?ref=vr-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">♀℞ ${sm.symbol}</div>
      <div class="meta">Venus Retrograde survival · ${Sign} · ~40 days · ~every 18 months</div>
    </div>
    <h1><span class="accent">Venus Retrograde</span> for ${Sign}</h1>
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

    <h2>Do — for the ~40-day window</h2>
    <ul class="checklist do">${doItems}</ul>

    <h2>Don't — for the ~40-day window</h2>
    <ul class="checklist dont">${dontItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Venus paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for the window</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Venus Retrograde reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~40 days retrograde · ~every 18 months</span></div>
      <div class="row"><span class="k">Shadow</span><span class="v">~2 weeks before + after exact retrograde</span></div>
      <div class="row"><span class="k">Venus rules</span><span class="v">love · beauty · money · value · attraction · taste</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">re-love · re-value · re-attract · re-define beauty</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vr-${sign}">Get a $9 retrograde-aware reading →</a>
    </div>

    <h2>The other 11 survival kits</h2>
    <div class="strip">${otherVRs}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · seasonal-evergreen survival kit.
    </footer>
  </div>
</body>
</html>`
}

export function vrIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = VR_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/venus-retrograde/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">♀℞ ${sm.symbol}</div>
      <div class="name">Venus Retrograde for ${titleCase(s)}</div>
      <div class="axis">survival kit · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Venus Retrograde survival by sign — love, money, value · what to do · gab44 ✨`
  const description = `Venus Retrograde survival kit for all 12 zodiac signs. What surfaces in love, money, and value for your sun sign during the ~40-day window, what to do, what to avoid, and the single discipline that turns the retrograde into your friend. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/venus-retrograde" />
<meta property="og:title" content="Venus Retrograde survival by sign · gab44" />
<meta property="og:description" content="What surfaces in love, money, and value for your sun sign during the ~40-day window." />
<meta property="og:type" content="website" />
<style>:root{--c1:#48499c;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/transits/venus-retrograde">general explainer</a>
      <a href="/gab44/mercury-retrograde">mercury retrograde survival</a>
      <a href="/gab44/reading?ref=vr-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#48499c,#c96442)">♀℞</div>
      <div class="meta">12 sign-specific survival kits · ~40 days · ~every 18 months · evergreen</div>
    </div>
    <h1>Venus Retrograde <span class="accent">survival</span></h1>
    <p class="vibe">Venus retrogrades roughly every 18 months for about 40 days. The general advice is one thing; the way it actually lands in your love, money, and value-life depends on your sun sign. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vr-index">Want a retrograde-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Venus-retrograde-by-sign survival kits · seasonal-evergreen.
    </footer>
  </div>
</body>
</html>`
}
