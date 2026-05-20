// Mercury Retrograde survival × sign SEO funnel — /gab44/mercury-retrograde
// (index) + /gab44/mercury-retrograde/{sign} (12 pages). Targets the
// seasonal-evergreen "mercury retrograde survival" / "mercury retrograde
// {sign}" / "how to survive mercury retrograde" search clusters. Mercury
// goes retrograde ~3x per year for ~3 weeks each — high-traffic spikes
// every ~4 months. The general explainer lives at
// /gab44/transits/mercury-retrograde; these 13 pages are the SIGN-SPECIFIC
// survival kits — what tends to break for your sun sign during the window
// and the practice that lets the retrograde work for you instead of
// against you. Cross-funnels into /gab44/reading?ref=mr-{sign}.

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

interface MRProfile {
  sign: Sign
  oneLine: string       // short headline of how MR lands for this sign
  trap: string          // the specific trap this sign falls into
  gift: string          // the gift the 3-week window offers this sign
  body: string          // long body paragraph
  do_list: string[]     // 4–5 concrete do's during the window
  dont_list: string[]   // 4–5 concrete don'ts during the window
  practice: string      // single discipline for the 3-week window
  paradox: string       // the central paradox of MR for this sign
}

// Mercury Retrograde × sign survival kit. Each profile is honest about how
// the 3-week window actually lands for this sun sign — not a generic
// "back up your data" list. Mercury rules communication, contracts,
// technology, travel, the small mind. Each sign has a different shape of
// vulnerability and a different shape of gift during the re-cycle.
export const MR_PROFILES: Record<Sign, MRProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'The action-first sign meets the don\'t-act-first window.',
    trap: 'Firing off the fast email, the fast text, the fast decision — and watching it boomerang.',
    gift: 'A rare three weeks where you are forced to think before you fight. The clarity that lands when you don\'t move first is the clarity that runs the next quarter.',
    body: 'Mercury Retrograde for Aries is friction-with-the-engine. You are the sign of go; the retrograde is the sign of slow. The trap is sending the impulse-message at 11pm and waking up to a fire. The deeper trap is making a call — career, partnership, money — on the first read. Mercury Retrograde for Aries is the rare three-week window where the universe will not let you act fast without consequence. Use it. Almost everything you decide in this period that needs revising actually needs revising. The gift is uncommon clarity: when the engine is forced into idle, the strategy underneath the action gets a hearing.',
    do_list: [
      'Re-write the angry message. Then re-write it again. Then maybe send.',
      'Revisit one project you abandoned at 60%. Mercury rewards the un-finished here.',
      'Pause one decision you were going to make this week by ten days.',
      'Settle one old argument by listening first, talking second.'
    ],
    dont_list: [
      'Send the impulse-text at night.',
      'Sign a new contract you have not slept on.',
      'Quit the job in week one of the retrograde — wait at least until shadow-out.',
      'Buy the new device on day three; wait until the post-retrograde reviews drop.'
    ],
    practice: 'For the full three weeks, hold a 24-hour rule on every important send. Re-read in the morning. Aries Mercury survives by forced delay.',
    paradox: 'You will hate the slowness and find, by the end, that the slowness gave you the most strategic three weeks of the year.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The slow sign meets the slow-down sign. Mostly fine — except for money & devices.',
    trap: 'A purchase you slept on once but should have slept on three more times. A contract on autopay you forgot to audit.',
    gift: 'The yearly cleanup of the material life. Taurus benefits from MR more than almost any sign — slow is your native register.',
    body: 'Mercury Retrograde for Taurus is mostly your friend. The pace of the retrograde matches your nervous system. The trap is in the place Taurus is most invested: money and material things. Subscriptions you have been auto-paying for a year that you never actually use. A purchase you "slept on" once and convinced yourself was due diligence. A contract that has been quietly working against you. Mercury Retrograde is the audit window. It is also a friendly time to revisit the body — the routine that has stopped working, the diet you have been on autopilot through. The gift is rare in modern life: a sanctioned three weeks of going slower than the room.',
    do_list: [
      'Audit every subscription. Cancel three.',
      'Re-read one contract you signed in the last year — a lease, a salary letter, a client agreement.',
      'Revisit the body routine that has stopped working.',
      'Re-cook one recipe you used to love and forgot.'
    ],
    dont_list: [
      'Make a major purchase you have not researched twice.',
      'Sign a new lease without reading the small print.',
      'Auto-renew a service without using it for one full week first.',
      'Trust the impulse-buy at the end of a long day.'
    ],
    practice: 'For three weeks, every transaction over $100 sleeps for 48 hours before you commit. Taurus Mercury survives by enforced pause-on-spend.',
    paradox: 'You will save more money in three weeks of audit than in three months of restraint.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'Mercury\'s ruling sign. The retrograde hits you twice as hard — and twice as instructively.',
    trap: 'Twelve open conversations, three crossed wires, one that turns into a real misunderstanding.',
    gift: 'A rare clarity on which of your hundred ideas are the actual signal. Gemini who survives MR with grace ends the window with the next year of work clearer than ever.',
    body: 'Mercury Retrograde for Gemini is double-strength. You are Mercury\'s child. The retrograde puts the entire surface of your life — texts, emails, ideas, projects, conversations — into a re-read. The trap is the one you know best: too many open loops, too many half-said things, one that turns into a real misunderstanding because the recipient could not tell which sentence was the one you meant. The gift is the rare-for-Gemini permission to close loops instead of opening them. Three weeks of finishing instead of starting; three weeks of choosing which of the hundred ideas is the one. Mercury\'s retrograde is your retreat, even if you never leave the city.',
    do_list: [
      'Close five open loops — emails, texts, decisions you have been deferring.',
      'Revisit one project you started this year and stalled on. Finish or formally drop.',
      'Pick one idea from your notes app and commit to it for the full window.',
      'Have one long conversation in person with someone you have only been texting.'
    ],
    dont_list: [
      'Open a new project until shadow-out.',
      'Reply to anything important the same hour you read it.',
      'Trust your first interpretation of a tense message.',
      'Pitch a new client deck during week one — the third draft will be better.'
    ],
    practice: 'For three weeks, every morning name the ONE thing that gets the most of your mind today. Gemini Mercury survives by enforced single-channel.',
    paradox: 'You will feel the withdrawal of the multi-channel high and discover that one well-finished thing buys what twelve half-finished things never did.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The home & memory sign. MR brings the past to your door — sometimes literally.',
    trap: 'An old voice in the inbox that pulls you back into a dynamic you outgrew. A family conversation re-opened at the worst time.',
    gift: 'A real chance to revisit and re-mother the parts of your inner home you have been too busy to tend.',
    body: 'Mercury Retrograde for Cancer is the season the past comes home. An old name in the inbox. A song that returns you to age 17. A family thread re-opened. The trap is letting the wave of memory pull you into a dynamic — with a parent, an ex, a sibling — that you have already outgrown but feel obligated to re-enter because Mercury made it close again. The gift is in the same wave: the chance to revisit your own inner home with adult eyes. To re-mother the version of you that needed mothering. To re-organize the literal home — drawers, closets, the photo albums on the laptop you keep meaning to back up.',
    do_list: [
      'Re-organize one room or one corner of the home.',
      'Back up the photos. Mercury is asking.',
      'Revisit one piece of family history with the adult version of you — not the child.',
      'Have one conversation with an old friend you genuinely miss.'
    ],
    dont_list: [
      'Re-enter a relationship you ended for a reason.',
      'Make a major home decision (move, lease, renovate) during the window.',
      'Take family-of-origin guilt-trips at face value during MR — the volume is amplified.',
      'Confuse nostalgia with longing — let it be a feeling, not a directive.'
    ],
    practice: 'For three weeks, when an old name surfaces, sit with the feeling for 24 hours before responding. Cancer Mercury survives by separating memory from mandate.',
    paradox: 'The past will feel like it wants you back. By week three you will know which parts wanted you back and which parts you have already lovingly outgrown.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The spotlight sign meets the rough-draft window. Be careful what you publish.',
    trap: 'A creative thing you launched in week one that needed two more drafts. A public statement you wish you had waited on.',
    gift: 'Three weeks where the work happens off-stage. The pieces you build in private during MR carry weight when they finally land.',
    body: 'Mercury Retrograde for Leo is the off-stage chapter. You are wired to publish, perform, be seen. The retrograde wants you to draft, edit, and not publish yet. The trap is launching the creative thing — the post, the album, the talk, the brand — in week one and watching the launch land flat or, worse, get misread. The gift is the rare three weeks of permission to do the work no one is watching. The version of the project you build in this window will be the version that holds up for years. Treat MR as the writers-room time of the creative year. The audience can wait three weeks; the work cannot afford the rush.',
    do_list: [
      'Re-edit one creative piece you put out this year. Fix what you knew was off.',
      'Build the next launch fully in private. Schedule for after shadow-out.',
      'Re-read your last three public posts. What is the through-line? What needs to die?',
      'Make one piece of art with no audience in mind.'
    ],
    dont_list: [
      'Launch a major project in the first week of MR.',
      'Post the angry response to public criticism. Re-read in 48 hours.',
      'Sign the brand deal you have been chasing without sleeping on the contract.',
      'Confuse silence with rejection during MR — much of the audience is also off-stage.'
    ],
    practice: 'For three weeks, build twice as much in private as you put out in public. Leo Mercury survives by deliberate behind-the-curtain.',
    paradox: 'You will feel briefly invisible and discover the work that was made invisibly is the work that lasts visibly.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'Mercury\'s other ruling sign. MR is your audit, your edit, your favorite kind of three weeks.',
    trap: 'Over-correcting during the window — turning a useful re-read into a cycle of self-attack.',
    gift: 'The literal best three weeks of the year for the Virgo skillset: edit, refine, fix the system, organize the clutter.',
    body: 'Mercury Retrograde for Virgo is, more than for any other sign, a built-for-you season. Mercury is your other co-ruler. The retrograde wants what you want anyway: revisit, refine, organize, fix the system, close the loops. The trap is the Virgo-specific one: the useful edit slipping into self-attack. The 3am audit of every imperfection in the work. The "I should have done this better" loop running on repeat. The gift is enormous: this is the window where Virgo can untangle a quarter\'s worth of disorder in three weeks. Inbox zero. The system that has been a workaround for six months actually rebuilt. The practice you let lapse, picked back up. Just keep the inner critic on a leash.',
    do_list: [
      'Pick one system in your work or life and rebuild it properly.',
      'Inbox zero. For real this time.',
      'Revisit one health practice that lapsed. Rebuild without self-attack.',
      'Re-read one project from earlier this year and edit it cleanly.'
    ],
    dont_list: [
      'Let the audit become a self-attack. Mercury wants edit, not erasure.',
      'Try to fix everything at once. Pick one or two systems for the window.',
      'Trust the 3am voice in your head — that\'s MR amplification, not signal.',
      'Apologize for things you did not do wrong because the retrograde made you doubt.'
    ],
    practice: 'For three weeks, run one daily five-minute "edit window" on the system that needs it most. Virgo Mercury survives by bounded perfectionism.',
    paradox: 'You will feel like everything needs fixing. By week three you will know that fixing one or two systems well changed everything else.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'The relationship sign. MR re-opens conversations you thought were closed.',
    trap: 'A misunderstanding with a partner, a client, or a close friend that escalates because you each read the same message differently.',
    gift: 'Three weeks to revisit relationships and recalibrate the ones that have drifted out of true.',
    body: 'Mercury Retrograde for Libra is the relational re-read. The conversations you thought were settled get a second look — sometimes by you, sometimes by them. The trap is the one Libra knows: a tense message, two readings, the pattern escalates because both parties were doing fairness-performance instead of straight talk. The deeper trap is making a major relational decision (move in, move out, propose, leave) in week one based on retrograde noise. The gift is real: three weeks to revisit the relationships that have drifted out of true. The friend you have not properly seen in a year. The partner you have stopped having the actual conversation with. Mercury wants you to re-engage, not re-decide.',
    do_list: [
      'Have one slow conversation with a partner or close friend you have been on autopilot with.',
      'Reach out to one friend you genuinely miss.',
      'Re-negotiate one professional relationship that has been quietly imbalanced.',
      'Re-read your contracts with collaborators. Adjust what is not working.'
    ],
    dont_list: [
      'Make a major relational decision (move in, leave, propose) in week one of MR.',
      'Take a tense message at first read. Pause; re-read with charity.',
      'Sign a partnership agreement you have not slept on twice.',
      'Confuse re-engagement with re-commitment — Mercury wants the conversation, not yet the decision.'
    ],
    practice: 'For three weeks, have one in-person or voice conversation per week with someone you have only been texting. Libra Mercury survives by mode-upgrade.',
    paradox: 'You will feel relationships getting more delicate. By week three the ones that survived the delicacy are the ones worth keeping; the ones that did not were already gone.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'The depth sign. MR brings buried truths up — yours and other people\'s.',
    trap: 'Acting on a half-truth that surfaced in week one before the full picture has loaded.',
    gift: 'Three weeks to do the deep re-read of the parts of your life you only ever skim.',
    body: 'Mercury Retrograde for Scorpio is depth-charge season. Buried truths surface — about a relationship, a job, a money situation, a family secret. The trap is acting on the first surfacing. Scorpio\'s instinct is to investigate, confront, restructure — but in MR the first read is rarely the full read. The truth that surfaced in week one is real; what surfaces in week three is what to actually do about it. The gift is the depth-work this sign does best: the re-read of the contracts, the inheritance, the relationship dynamic, the body symptom you have been ignoring. Mercury wants you to look without flinching and to wait until the full picture has loaded before you act.',
    do_list: [
      'Re-read one contract that involves shared money or shared power. Note what feels off.',
      'Investigate one body symptom you have been minimizing.',
      'Have one honest conversation about money or intimacy that you have been avoiding.',
      'Audit one trust dynamic — with a partner, family, or business — without rushing to verdict.'
    ],
    dont_list: [
      'Make a major restructuring decision in week one based on what just surfaced.',
      'Confront before you have the full picture; wait for week three.',
      'Sign or break a financial-entanglement contract during MR without independent advice.',
      'Spiral into worst-case interpretation of a partner\'s silence — much of MR silence is logistical.'
    ],
    practice: 'For three weeks, when a truth surfaces, write it down and let it sit for one week before acting. Scorpio Mercury survives by investigation-without-verdict.',
    paradox: 'You will feel certain in week one and discover by week three that the actual picture was deeper and more workable than the first read.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The travel-and-meaning sign. MR scrambles flights, plans, and certainties.',
    trap: 'Booking the trip in week one and watching the flight cancel. Pronouncing the truth before it has finished forming.',
    gift: 'A rare three-week pause on the search-outward to do the search-inward.',
    body: 'Mercury Retrograde for Sagittarius is the comeback of every plan and every certainty. Flights get changed, schedules shift, the foreign trip has paperwork issues, the bold pronouncement you made last month gets gently fact-checked by the universe. The trap is the Sagittarius reflex: keep moving, keep declaring, outrun the friction. MR will not let you. The gift, when you stop fighting, is rare for this sign: three weeks of search-inward instead of search-outward. The philosophy you have been building gets a re-read. The teacher you outgrew gets a final goodbye. The next direction loads more clearly because you stopped sprinting toward the last one.',
    do_list: [
      'Re-read one book or teacher that shaped your worldview five years ago. Has it aged with you?',
      'Re-confirm every booking and document. Flights, visas, deadlines.',
      'Sit with one belief you have been declaring confidently and ask if it is still true.',
      'Have one slow conversation with a teacher, mentor, or friend abroad.'
    ],
    dont_list: [
      'Book non-refundable travel in week one of MR if you can avoid it.',
      'Make a bold public pronouncement on a topic you are still working out.',
      'Declare the next big move before MR is over — the next chapter is still loading.',
      'Confuse restlessness with calling. MR-restlessness is the engine asking to be re-aimed, not refueled.'
    ],
    practice: 'For three weeks, replace one outward-search habit (scrolling, browsing, planning) with one inward practice (writing, walking, sitting). Sagittarius Mercury survives by re-routing the search.',
    paradox: 'You will feel the world has slowed and discover the world was waiting for you to catch up to yourself.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The career sign. MR re-opens contracts, titles, and long-builds.',
    trap: 'Pushing forward on a career move in week one that is actually mid-information. Authority signed without a re-read.',
    gift: 'Three weeks to re-architect the long-build with a clearer head than the daily grind ever lets you have.',
    body: 'Mercury Retrograde for Capricorn is the career re-read. The contract gets re-opened. The title shift is mid-information. The boss-conversation you thought was settled has another act. The trap is Capricorn\'s default: push forward, sign, climb. MR is asking you to slow the climb just long enough to make sure the ladder is on the right wall. Three weeks. The gift is huge: a sanctioned audit of the long-build. The five-year plan that was made under different conditions and never updated. The role you have outgrown but kept signing for. The structure of your work-life that was right at 28 and is no longer right at 38. Mercury, in this sign\'s favorite mood, is on your side as the architect.',
    do_list: [
      'Re-read your job description, your salary letter, your client contract.',
      'Audit your five-year plan against your actual current life.',
      'Have one honest conversation with your boss / yourself / your business partner about what is no longer true.',
      'Revisit one long-build that has been on hold and decide: re-start or formally retire.'
    ],
    dont_list: [
      'Sign the new contract in week one without sleeping on it twice.',
      'Quit the job in week one of MR — the verdict in week three will be different and clearer.',
      'Push the launch forward into week two of MR if you can move it to after shadow-out.',
      'Take a public title or role you have not slept on for at least one week.'
    ],
    practice: 'For three weeks, every Sunday spend 30 minutes re-reading one structural document of your work-life. Capricorn Mercury survives by audit-as-discipline.',
    paradox: 'You will feel like the career has stalled and discover the stall was the room you needed to redesign the next decade.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The community-and-tech sign. MR is when the wifi dies and the group chat goes sideways.',
    trap: 'A group dynamic that frays because two people read the same message in opposite tones. A platform pivot in week one based on a vibe.',
    gift: 'Three weeks to re-architect the community / tech stack you have outgrown but kept patching.',
    body: 'Mercury Retrograde for Aquarius hits two of your most loaded zones at once: tech and community. The wifi acts up, the platform changes its rules, the group-chat misreads a message and the dynamic frays. The trap is the Aquarius default: pivot the system, leave the group, declare a new direction in week one based on what is mostly retrograde noise. The gift is structural: three weeks to rebuild the tech and community infrastructure of your life from scratch with a clear head. The chats you should have left a year ago. The platform you keep complaining about and never migrate from. The collaboration that has stopped serving anyone. Mercury wants you to re-architect, not just re-react.',
    do_list: [
      'Audit your tech stack — apps, subscriptions, platforms — and migrate one that has been due for a year.',
      'Re-read the dynamics of one community or group you are in. Keep, leave, or rebuild role.',
      'Reconnect with one person from a community you drifted out of — see if the door is still warm.',
      'Back up everything. Mercury asks twice if you ignore the first ask.'
    ],
    dont_list: [
      'Quit a community in week one based on a single misread message.',
      'Push a major tech / platform migration in week one — you will hit edge cases that resolve by week three.',
      'Confuse a vibe-drop with a verdict — MR amplifies social noise.',
      'Make a public statement about a group dynamic before re-reading the original thread.'
    ],
    practice: 'For three weeks, do one weekly re-read of a group thread or chat before responding. Aquarius Mercury survives by deferred reaction.',
    paradox: 'You will feel the systems are all broken and discover that one well-rebuilt system is worth ten complained-about ones.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The porous sign. MR is when the dream life turns up the volume and the messages get more telepathic — and more misread.',
    trap: 'Reading a tone that was not there. Absorbing the room\'s confusion and treating it as your own.',
    gift: 'Three weeks where the dream life, the synchronicities, and the felt-sense run unusually clear if you give them a vessel.',
    body: 'Mercury Retrograde for Pisces is amplification of the channel you already are. The dream life intensifies, the synchronicities multiply, the felt-sense of other people\'s moods is loud. The trap is the Pisces-specific one: reading a tone in a message that was not there, absorbing the room\'s confusion and treating it as your own truth, dissolving the boundary between what you sensed and what was actually said. The gift is rare and real: three weeks where the channel is unusually clear — the dream that names what you have been avoiding, the synchronicity that confirms the next direction. Pisces does well in MR if the gift is given a vessel: a dream journal, an art practice, a contemplative half-hour each morning.',
    do_list: [
      'Keep a dream journal for the full three weeks. Patterns will appear.',
      'Read messages literally before reading them emotionally. Ask a clarifying question if uncertain.',
      'Make one piece of art, music, or writing that processes what is surfacing.',
      'Reconnect with one practice — meditation, prayer, the body — that grounds the channel.'
    ],
    dont_list: [
      'Trust your read of a tense message before checking the literal words.',
      'Let other people\'s confusion become your verdict on yourself.',
      'Make a major dissolve-the-boundary decision in week one (move in, merge finances, end a relationship).',
      'Confuse spiritual openness with structural surrender — the boundary is medicine.'
    ],
    practice: 'For three weeks, every morning name one literal fact about your day before reading the felt-sense. Pisces Mercury survives by literal-before-mystical.',
    paradox: 'You will feel everything more vividly and discover that vivid plus literal is the medicine you have been needing.'
  }
}

export const MR_SIGNS = SIGNS

export function isMRSign(s: string): s is Sign {
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

export function mrPageHTML(sign: Sign): string {
  const p = MR_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Mercury Retrograde Survival for ${Sign}`

  const doItems = p.do_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const dontItems = p.dont_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherMRs = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/mercury-retrograde/${s}">☿℞ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/transits/mercury-retrograde">☿℞ general explainer</a>`,
    `<a href="/gab44/personal-planets/mercury-${sign}">☿ Mercury in ${Sign}</a>`,
    `<a href="/gab44/saturn-return/${sign}">♄ Saturn return in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/mercury-retrograde">all 12 survival kits</a>`
  ].join('')

  const title = `${headline} — what breaks, what to do, what to avoid · gab44`
  const description = `${headline}: how Mercury Retrograde lands for ${Sign}. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Survival kit + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Mercury Retrograde', item: `${SITE_URL}/gab44/mercury-retrograde` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/mercury-retrograde/${sign}` }
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
        mainEntityOfPage: `${SITE_URL}/gab44/mercury-retrograde/${sign}`,
        about: `Mercury Retrograde survival kit for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/mercury-retrograde/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/mercury-retrograde/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%98%BF%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/mercury-retrograde">all 12 kits</a>
      <a href="/gab44/transits/mercury-retrograde">general explainer</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/reading?ref=mr-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">☿℞ ${sm.symbol}</div>
      <div class="meta">Mercury Retrograde survival · ${Sign} · ~3 weeks · ~3× per year</div>
    </div>
    <h1><span class="accent">Mercury Retrograde</span> for ${Sign}</h1>
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

    <h2>Do — for the 3-week window</h2>
    <ul class="checklist do">${doItems}</ul>

    <h2>Don't — for the 3-week window</h2>
    <ul class="checklist dont">${dontItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Mercury paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for the window</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Mercury Retrograde reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~3 weeks retrograde · ~3× per year</span></div>
      <div class="row"><span class="k">Shadow</span><span class="v">~2 weeks before + after exact retrograde</span></div>
      <div class="row"><span class="k">Mercury rules</span><span class="v">communication · contracts · tech · travel · the small mind</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">re-view · re-vise · re-connect · re-do · re-member</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=mr-${sign}">Get a $9 retrograde-aware reading →</a>
    </div>

    <h2>The other 11 survival kits</h2>
    <div class="strip">${otherMRs}</div>

    <h2>Related</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · seasonal-evergreen survival kit.
    </footer>
  </div>
</body>
</html>`
}

export function mrIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = MR_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/mercury-retrograde/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">☿℞ ${sm.symbol}</div>
      <div class="name">Mercury Retrograde for ${titleCase(s)}</div>
      <div class="axis">survival kit · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Mercury Retrograde survival by sign — what breaks, what to do · gab44 ✨`
  const description = `Mercury Retrograde survival kit for all 12 zodiac signs. What tends to break for your sun sign during the 3-week window, what to do, what to avoid, and the single discipline that turns the retrograde into your friend. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mercury-retrograde" />
<meta property="og:title" content="Mercury Retrograde survival by sign · gab44" />
<meta property="og:description" content="What tends to break for your sun sign during the 3-week window — plus what to do." />
<meta property="og:type" content="website" />
<style>:root{--c1:#4a87b9;--c2:#c96442;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/transits/mercury-retrograde">general explainer</a>
      <a href="/gab44/transits">all transits</a>
      <a href="/gab44/reading?ref=mr-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#4a87b9,#c96442)">☿℞</div>
      <div class="meta">12 sign-specific survival kits · ~3 weeks · ~3× per year · evergreen</div>
    </div>
    <h1>Mercury Retrograde <span class="accent">survival</span></h1>
    <p class="vibe">Mercury goes retrograde three times a year for about three weeks each. The general advice is one thing; the way it actually lands for your sun sign is another. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=mr-index">Want a retrograde-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Mercury-retrograde-by-sign survival kits · seasonal-evergreen.
    </footer>
  </div>
</body>
</html>`
}
