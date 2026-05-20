// Mars Retrograde survival × sign SEO funnel — /gab44/mars-retrograde
// (index) + /gab44/mars-retrograde/{sign} (12 pages). Targets the
// "mars retrograde {sign}" / "mars retrograde survival" / "anger mars
// retrograde" search clusters. Mars retrogrades for ~10 weeks every
// ~2 years — the longest of the personal-planet retrogrades. General
// explainer lives at /gab44/transits/mars-retrograde; these 13 pages
// are the SIGN-SPECIFIC survival kits. Mars rules action, will, anger,
// drive, sex, the engine of the chart. Cross-funnels into
// /gab44/reading?ref=mars-r-{sign}.

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

interface MarsRProfile {
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

// Mars Retrograde × sign survival kit. Mars rules action, will, anger,
// drive, sex, the engine. The retrograde re-routes the engine inward
// for ~10 weeks every ~2 years. Each sign has a different shape of
// engine-friction during the window.
export const MARS_R_PROFILES: Record<Sign, MarsRProfile> = {
  aries: {
    sign: 'aries',
    oneLine: 'Mars\'s ruling sign. The engine of the chart goes inward — and you feel every degree of the shift.',
    trap: 'Picking the fight in week one to make the friction tolerable. Acting on anger that will look different in week six.',
    gift: 'Ten weeks to learn the difference between reactive force and chosen force. The post-retrograde Aries fights cleaner.',
    body: 'Mars Retrograde for Aries is the deepest version of the rite — Mars is your ruler. The engine you live by goes into reverse, and you feel every degree of the shift. The trap is the Aries-specific one: picking the fight to make the friction tolerable, firing off the angry message that, in week six, you would have written differently. The gift, when you let the retrograde teach, is rare: ten weeks to feel anger without immediately discharging it. To learn the difference between reactive force (something happens, you swing) and chosen force (you have felt the anger, named it, decided what to do with it). The post-retrograde Aries is not less fierce; the fierceness is sharper, more decisive, more aimed.',
    do_list: [
      'Restart one project you abandoned mid-stride. Mars wants the un-finished here.',
      'Practice naming the anger before acting on it. Even a 60-second pause counts.',
      'Re-train the body — the practice that lapsed, the form that drifted.',
      'Have one honest conversation about a fight you have been avoiding (not picking new ones).'
    ],
    dont_list: [
      'Pick a new fight in week one because the engine is restless.',
      'Quit the job in week one of MarsR — wait until shadow-out.',
      'Send the angry message at night.',
      'Confuse impulse-action with decisive action.'
    ],
    practice: 'For the full 10 weeks, run a 24-hour rule on every angry send. Aries Mars survives by enforced delay-on-discharge.',
    paradox: 'You will feel the engine has been taken away and discover the engine was being re-built into something stronger.'
  },
  taurus: {
    sign: 'taurus',
    oneLine: 'The slow sign meets the slow engine. Resistance you have been calling patience gets a re-read.',
    trap: 'Confusing the retrograde\'s stuckness with your usual deliberate pace. Letting a stalled situation stay stalled because change is uncomfortable.',
    gift: 'Ten weeks to find the actual edge of your stamina. To re-tune the body, the work, the routine that has been on autopilot.',
    body: 'Mars Retrograde for Taurus is friction in the slow-cooker. You are wired for steady — the retrograde adds a layer of stuck on top of the slow that is your default, and the trap is calling the stuckness "patience" to avoid the re-tune. Ten weeks of feeling sticky around money, body, work, and the small daily acts of will. The gift is uncommon: a sanctioned slow audit of your stamina, your physical practice, your work-rhythms. The post-retrograde Taurus is in better shape — body, money, daily structure — because the retrograde forced a re-tune of the engine you usually outsource to inertia.',
    do_list: [
      'Re-tune one daily body practice that has lapsed.',
      'Audit one stalled work-stream — re-start with new intention or formally retire.',
      'Have one honest conversation about a money pattern you have been avoiding action on.',
      'Restart one form of exercise or movement you used to love.'
    ],
    dont_list: [
      'Confuse stuckness with patience.',
      'Push a major financial action through in week one without sleeping on it twice.',
      'Lift heavy / over-train in the first three weeks — injury risk is real for Taurus during MarsR.',
      'Stay in the comfortable stall when the body is asking for movement.'
    ],
    practice: 'For 10 weeks, every Sunday spend 30 minutes on one body or money question. Taurus Mars survives by sustained slow audit.',
    paradox: 'You will feel like nothing is moving and discover the slow re-tune was worth ten months of forward push.'
  },
  gemini: {
    sign: 'gemini',
    oneLine: 'The light-touch sign meets the slow-anger window. Words get heavy.',
    trap: 'A misunderstanding that turns into a real argument because the retrograde turned up the emotional weight on a sentence meant to be light.',
    gift: 'Ten weeks to learn what your actual anger sounds like — Gemini often jokes anger and never says it.',
    body: 'Mars Retrograde for Gemini is the season the anger you usually deflect with cleverness comes out un-disguised. The trap is what Gemini does best — making the difficult thing into a joke. Mars wants the joke off the table for ten weeks. The trap-deeper: a tense message lands wrong because the retrograde turns up the emotional weight, the joke is read as an attack, and the conversation escalates. The gift is rare for this sign: ten weeks of learning what your anger sounds like when you actually say it instead of glance-by-it. The post-retrograde Gemini communicates harder things more directly and, paradoxically, with less collateral damage.',
    do_list: [
      'Practice naming one feeling per day with no joke attached.',
      'Re-write the angry message twice before sending.',
      'Have one slow honest conversation in person about something you have been deflecting.',
      'Re-start one project that needed the engine to push through resistance.'
    ],
    dont_list: [
      'Joke an angry feeling away in week one — it will surface harder later.',
      'Send a tense message the same hour you read it.',
      'Pitch a new client / open a new project in week one — the engine is mid-rebuild.',
      'Confuse multiplicity-of-channels with productivity during MarsR.'
    ],
    practice: 'For 10 weeks, in every important conversation name one actual feeling before the analysis. Gemini Mars survives by pre-empting the joke.',
    paradox: 'You will feel un-witty and discover that the un-witty version of you was being heard for the first time.'
  },
  cancer: {
    sign: 'cancer',
    oneLine: 'The home sign. Mars retrograde brings the family-of-origin anger to the surface.',
    trap: 'Re-entering an old family fight because the retrograde made the old wound feel current.',
    gift: 'Ten weeks to feel the buried anger about the home — and to learn to hold it without acting it out on people who didn\'t cause it.',
    body: 'Mars Retrograde for Cancer is the surface-level rise of the home-and-family anger you have spent years quietly holding. The trap is the Cancer-specific one: the old wound feels current, and you re-enter a family fight that was already settled, or you act out the old anger on a partner / friend / colleague who is standing in for the original target. The gift is real and hard: ten weeks of learning to feel the anger without misdirecting it. To hold the old wound long enough to see what it is actually asking for — most often a boundary you never set, a conversation you never had, a piece of grief you never let yourself feel.',
    do_list: [
      'Journal the family-anger when it surfaces — write it before discharging it.',
      'Set one boundary you have been postponing for the family-of-origin.',
      'Have one inner-mother conversation with the version of you who was hurt.',
      'Re-tend the home — the literal space matters during MarsR.'
    ],
    dont_list: [
      'Act out family-of-origin anger on a current partner or friend.',
      'Re-enter an old family fight in week one without sleeping on it.',
      'Make a major home decision (move, lease, renovate) during the window.',
      'Confuse current irritation with old grief.'
    ],
    practice: 'For 10 weeks, when family-anger surfaces, write it for one full week before deciding anything. Cancer Mars survives by separating then-anger from now-action.',
    paradox: 'The old anger will feel current. By week ten you will know which parts were current and which parts were old grief asking to be felt and laid down.'
  },
  leo: {
    sign: 'leo',
    oneLine: 'The spotlight sign meets the off-stage engine. Pride gets re-tuned.',
    trap: 'Defending the public version of you in week one when the retrograde is asking the private version to step forward.',
    gift: 'Ten weeks to find what your drive looks like off-stage — which is where the real Leo creative engine actually lives.',
    body: 'Mars Retrograde for Leo is the off-stage chapter of the will. The pride that drives you to be seen gets a re-tune. The trap is defending the public version in week one — the brand, the performance, the carefully-built role — when the retrograde is asking the private version to step forward. The gift is real for this sign: ten weeks where the work happens off-stage, where the creative drive has to find a reason that is not applause. The post-retrograde Leo creative life has a different motor. Less performance, more authorship. Less reaction-to-being-seen, more devotion-to-the-work.',
    do_list: [
      'Make one piece of art with no audience in mind for the full retrograde.',
      'Re-edit one creative project where you knew something was off but kept publishing.',
      'Practice naming a creative want that does not depend on being seen.',
      'Re-train one body practice — Leo loves the body-engine being in form.'
    ],
    dont_list: [
      'Launch a major creative project in the first three weeks of MarsR.',
      'Defend the brand publicly in week one — wait, then re-state.',
      'Confuse audience-silence with creative-failure.',
      'Pick a public fight to feel relevant; the retrograde wants private depth instead.'
    ],
    practice: 'For 10 weeks, build twice as much in private as you publish in public. Leo Mars survives by deliberate behind-the-curtain.',
    paradox: 'You will feel briefly invisible and discover the work made invisibly is the work that lasts visibly.'
  },
  virgo: {
    sign: 'virgo',
    oneLine: 'The discerning sign meets the over-correction engine. Watch the inner critic on action and self-worth.',
    trap: 'Turning the retrograde\'s useful re-read of your work into a list of everything you have done wrong all year.',
    gift: 'Ten weeks to redesign your work-rhythm and physical practice on actually sustainable terms.',
    body: 'Mars Retrograde for Virgo is two-edged. The Virgo discipline — careful re-tune of work and body — is exactly what the retrograde is asking for. The Virgo trap — over-correction, self-attack, the 3am list of every imperfection — is exactly what the retrograde will amplify if you do not watch. The trap is the spiral: the useful audit becomes self-attack, the body that needs rest gets pushed harder, the work that needs a redesign gets a punishment-level intensification instead. The gift, with the inner critic on a leash, is real: ten weeks to redesign work-rhythm and body practice on terms that compound for decades, not quarters.',
    do_list: [
      'Pick one work-rhythm to redesign sustainably. Just one.',
      'Re-tune one body practice — slowly, with no self-attack.',
      'Notice when the inner critic switched from edit to attack — and stop.',
      'Have one honest conversation about a workflow that has been silently costing you.'
    ],
    dont_list: [
      'Over-train in week one because the engine feels stuck.',
      'Trust the 3am list of everything wrong — that\'s MarsR amplification.',
      'Try to fix every system at once — pick one or two.',
      'Apologize for things you did not do wrong because the retrograde made you doubt.'
    ],
    practice: 'For 10 weeks, run one bounded ten-minute "edit window" per day on the system that needs it most. Virgo Mars survives by bounded reform.',
    paradox: 'You will feel everything needs fixing. By week ten you will know that fixing one or two things well changed everything else.'
  },
  libra: {
    sign: 'libra',
    oneLine: 'The relational sign meets the open-conflict window. Avoidance gets harder.',
    trap: 'Performing fairness through clenched teeth instead of admitting you are angry, then discharging it sideways.',
    gift: 'Ten weeks to learn that direct anger is not the end of the relationship — it is often the beginning of the real one.',
    body: 'Mars Retrograde for Libra is the rite of direct anger. You are wired for harmony, fairness, accommodation. Mars retrogrades and the buried anger — about a partner who has taken too much, a collaboration that has been quietly imbalanced, a self-erasure that has been rationalized as kindness — comes up. The trap is the Libra-specific one: performing fairness through clenched teeth, then discharging the anger sideways (passive-aggression, withdrawal, a comment to the wrong person). The gift, when you let the retrograde teach, is rare: ten weeks to learn that direct anger is not the end of the relationship; for the relationships that matter, it is often the beginning of the real one.',
    do_list: [
      'Have one direct conversation about an imbalance you have been performing-fair through.',
      'Practice naming an anger before fairness-reasoning it away.',
      'Re-negotiate one professional relationship that has been silently costing you.',
      'Re-train one form of practice that asks you to take up space.'
    ],
    dont_list: [
      'Make a major relational decision (leave, move) in week one of MarsR.',
      'Discharge anger sideways onto a third party.',
      'Sign a partnership agreement in week one without sleeping on it twice.',
      'Confuse silence with peace.'
    ],
    practice: 'For 10 weeks, in every important conversation name your actual feeling before naming the fair compromise. Libra Mars survives by stated feeling first.',
    paradox: 'You will feel relationships getting more delicate, and end the window with the ones that survived directness clearer than ever.'
  },
  scorpio: {
    sign: 'scorpio',
    oneLine: 'Mars\'s traditional ruling sign. The buried anger, power, and sexual force surface — handle with care.',
    trap: 'Acting on revenge-impulses or power-moves in week one based on truths that need more time to settle.',
    gift: 'Ten weeks for the depth-work this sign does best: the audit of where you have been mis-using power and where you have been giving it away.',
    body: 'Mars Retrograde for Scorpio is one of the most demanding versions of the rite — Mars is your traditional ruler. Buried anger surfaces. Buried power-truths surface. Sexual force re-routes. The trap is the Scorpio one: acting on a revenge-impulse or power-move in week one, before the truth has fully loaded. Confronting before week three or four is rarely the right call. The gift is the depth-work this sign was made for: a careful audit of where you have been mis-using power (over a partner, in a workplace dynamic, against yourself) and where you have been giving it away (intimacy, money, energy). The post-retrograde Scorpio holds power more cleanly.',
    do_list: [
      'Write down what surfaced in week one and let it sit one full week before acting.',
      'Audit one power-dynamic without rushing to verdict.',
      'Channel the surfacing intensity into one creative or physical practice.',
      'Have one honest conversation about a sexual or intimacy truth you have been avoiding.'
    ],
    dont_list: [
      'Act on a revenge impulse in week one — wait for the full picture.',
      'Confront before week three or four.',
      'Sign or break a financial-power contract during MarsR without independent advice.',
      'Confuse the urge for vengeance with the call for justice.'
    ],
    practice: 'For 10 weeks, when an intense impulse arises, document and wait one full week before acting. Scorpio Mars survives by intensity-without-discharge.',
    paradox: 'You will feel ready to act in week one and discover that the picture in week ten was different and the right move was clearer.'
  },
  sagittarius: {
    sign: 'sagittarius',
    oneLine: 'The freedom sign meets the stay-and-look-again engine. Restlessness has nowhere to go.',
    trap: 'Booking the trip in week one to outrun the inner friction. Pronouncing the verdict on a teacher or path before the picture loads.',
    gift: 'Ten weeks to feel restlessness as a signal instead of using it as fuel. The next direction loads more truly when you stop sprinting.',
    body: 'Mars Retrograde for Sagittarius is the comeback of every plan to outrun friction by being in motion. Flights get changed, plans stall, the bold pronouncement gets fact-checked. The trap is the Sag default: keep moving, keep declaring, outrun the friction. MarsR will not let you. The gift, when you stop fighting, is rare for this sign: ten weeks of feeling restlessness as a signal instead of using it as fuel. The next teacher, the next chapter, the next true direction loads more clearly because you stopped sprinting toward the last one. The post-retrograde Sag is in fewer simultaneous adventures, and the ones chosen are deeper.',
    do_list: [
      'Pick one practice or commitment and stay with it for the full retrograde.',
      'Re-read one teacher or book that shaped you. Has it aged?',
      'Sit with restlessness for one full hour before acting on it.',
      'Have one slow conversation with a mentor or friend abroad.'
    ],
    dont_list: [
      'Book non-refundable travel in week one of MarsR.',
      'Make a bold public pronouncement on a topic you are still working out.',
      'Quit the path in week one because friction surfaced.',
      'Confuse restlessness with calling.'
    ],
    practice: 'For 10 weeks, replace one outward-search habit with one inward practice. Sagittarius Mars survives by re-routing the search.',
    paradox: 'You will feel the world has slowed and discover the world was waiting for you to catch up to yourself.'
  },
  capricorn: {
    sign: 'capricorn',
    oneLine: 'The career sign. MarsR re-tunes the long-build engine.',
    trap: 'Pushing forward on the career move in week one based on incomplete information. Climbing harder when the ladder needs re-positioning.',
    gift: 'Ten weeks to re-architect the long-build with a clearer engine and to redirect drive that has been compulsive into drive that is chosen.',
    body: 'Mars Retrograde for Capricorn is the career engine re-tune. The drive that has been compulsive — the climb, the achievement, the late nights — gets a re-read. The long-build that has been on autopilot gets audited. The trap is the Capricorn one: push the decision through, climb harder, sign. MarsR is asking you to slow long enough to make sure the ladder is on the right wall AND that you have the right reason to be climbing. The gift is huge: ten weeks of redesigning drive itself. The post-retrograde Capricorn is not less ambitious; the ambition is sharper, more chosen, less compulsive.',
    do_list: [
      'Re-read your job description, your client contract, your business agreement.',
      'Audit one compulsive work-pattern. Replace one weeknight crunch with one rest.',
      'Have one honest conversation about a long-build that needs re-positioning.',
      'Re-tune one body practice — Capricorn drive without body-care turns into burnout fast.'
    ],
    dont_list: [
      'Sign the new contract in week one without sleeping on it twice.',
      'Push the launch forward into MarsR if you can move it past shadow-out.',
      'Take the new public title or role you have not slept on for at least a week.',
      'Confuse climbing with growing.'
    ],
    practice: 'For 10 weeks, every Sunday spend 30 minutes re-reading one structural document of your career. Capricorn Mars survives by audit-as-discipline.',
    paradox: 'You will feel like the career has stalled and discover the stall was the room you needed to redesign the next decade.'
  },
  aquarius: {
    sign: 'aquarius',
    oneLine: 'The community sign. MarsR brings the buried group-anger and the long-deferred system-fight to the surface.',
    trap: 'Quitting the community in week one based on a single misread moment. Pivoting the system on a vibe.',
    gift: 'Ten weeks to re-architect the collective infrastructure of your life with the engine actually engaged.',
    body: 'Mars Retrograde for Aquarius brings the buried anger about groups, communities, and systems to the surface. The friend-group dynamic that has been quietly costing you. The platform you keep complaining about and never migrate from. The collaboration that has stopped serving anyone. The trap is the Aquarius one: a single misread emotional moment in week one frays the whole dynamic, and you exit. The gift is structural: ten weeks of redesigning the collective infrastructure of your life — the chats you should have left, the platforms you should have migrated, the role in the group you should have re-negotiated — with the engine actually engaged.',
    do_list: [
      'Audit one community / group / platform and migrate or re-negotiate.',
      'Have one honest conversation about a group-dynamic that has been frustrating you.',
      'Re-engage one collaboration that needs the engine you have been withholding.',
      'Re-train one form of practice that asks the body to be in a room with others.'
    ],
    dont_list: [
      'Quit a community in week one based on a single emotional moment.',
      'Pivot a major system or platform in week one without independent verification.',
      'Discharge group-anger in a public statement before re-reading the original thread.',
      'Confuse a vibe-drop with a verdict.'
    ],
    practice: 'For 10 weeks, do one weekly re-read of an emotional thread before responding. Aquarius Mars survives by deferred reaction.',
    paradox: 'You will feel the systems are all broken and discover that one well-rebuilt system is worth ten complained-about ones.'
  },
  pisces: {
    sign: 'pisces',
    oneLine: 'The porous sign meets the engine of will. Anger gets diffuse — and the body holds what the mind doesn\'t name.',
    trap: 'Absorbing the room\'s anger and treating it as your own; or numbing the surfacing engine with substances or fantasy.',
    gift: 'Ten weeks to learn what your actual anger feels like in the body, distinct from the room\'s — and to give the engine a vessel.',
    body: 'Mars Retrograde for Pisces is the rite of distinguishing your engine from the room\'s. The buried anger surfaces — and so does the buried anger of everyone around you, which Pisces will absorb on default. The trap is the Pisces-specific one: absorbing the room\'s anger and treating it as your own truth, or numbing the surfacing engine with substances, fantasy, dissolution. The gift, with a vessel, is real and rare: ten weeks of learning what your actual anger feels like in your actual body — distinct from the felt-sense of someone else\'s. The post-retrograde Pisces has a clearer body, a clearer no, and an engine that channels mystic energy without dissolving the self.',
    do_list: [
      'Body-scan daily — name what is yours vs what was absorbed from the room.',
      'Make one piece of art that processes the surfacing intensity.',
      'Set one loving no with no story attached.',
      'Re-engage one practice that grounds the channel — meditation, prayer, the body.'
    ],
    dont_list: [
      'Absorb the room\'s anger and act on it as your own.',
      'Numb the surfacing engine with substances or fantasy in week one.',
      'Make a major dissolve-the-boundary decision (move in, merge finances, end a relationship) in week one.',
      'Confuse spiritual openness with structural surrender.'
    ],
    practice: 'For 10 weeks, every morning name one literal feeling in your body before reading anyone else\'s. Pisces Mars survives by literal-before-mystical.',
    paradox: 'You will feel everything more vividly and discover that vivid plus literal is the medicine you have been needing.'
  }
}

export const MARS_R_SIGNS = SIGNS

export function isMarsRSign(s: string): s is Sign {
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

export function marsRPageHTML(sign: Sign): string {
  const p = MARS_R_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Mars Retrograde Survival for ${Sign}`

  const doItems = p.do_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')
  const dontItems = p.dont_list.map((d) => `<li>${escapeHtml(d)}</li>`).join('')

  const otherMRs = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/mars-retrograde/${s}">♂℞ ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/transits/mars-retrograde">♂℞ general explainer</a>`,
    `<a href="/gab44/personal-planets/mars-${sign}">♂ Mars in ${Sign}</a>`,
    `<a href="/gab44/mercury-retrograde/${sign}">☿℞ Mercury survival</a>`,
    `<a href="/gab44/venus-retrograde/${sign}">♀℞ Venus survival</a>`,
    `<a href="/gab44/saturn-return/${sign}">♄ Saturn return in ${Sign}</a>`,
    `<a href="/gab44/mars-retrograde">all 12 survival kits</a>`
  ].join('')

  const title = `${headline} — anger, drive, action · what surfaces, what to do · gab44`
  const description = `${headline}: how Mars Retrograde lands for ${Sign} in anger, drive, and action. ${p.oneLine} The trap: ${p.trap} The gift: ${p.gift} Survival kit + $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Mars Retrograde', item: `${SITE_URL}/gab44/mars-retrograde` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/mars-retrograde/${sign}` }
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
        mainEntityOfPage: `${SITE_URL}/gab44/mars-retrograde/${sign}`,
        about: `Mars Retrograde survival kit for ${Sign}`
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
<link rel="canonical" href="${SITE_URL}/gab44/mars-retrograde/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.oneLine)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/mars-retrograde/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%99%82%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/mars-retrograde">all 12 kits</a>
      <a href="/gab44/transits/mars-retrograde">general explainer</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/reading?ref=mars-r-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">♂℞ ${sm.symbol}</div>
      <div class="meta">Mars Retrograde survival · ${Sign} · ~10 weeks · ~every 2 years</div>
    </div>
    <h1><span class="accent">Mars Retrograde</span> for ${Sign}</h1>
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

    <h2>Do — for the ~10-week window</h2>
    <ul class="checklist do">${doItems}</ul>

    <h2>Don't — for the ~10-week window</h2>
    <ul class="checklist dont">${dontItems}</ul>

    <div class="card">
      <h3 style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:var(--fg-muted);font-weight:700;">The Mars paradox for ${Sign}</h3>
      <p style="margin:0;">${escapeHtml(p.paradox)}</p>
    </div>

    <h2>Single discipline for the window</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>How Mars Retrograde reads for ${Sign}</h2>
    <div class="grid">
      <div class="row"><span class="k">Sign</span><span class="v">${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Cycle</span><span class="v">~10 weeks retrograde · ~every 2 years</span></div>
      <div class="row"><span class="k">Shadow</span><span class="v">~3 weeks before + after exact retrograde</span></div>
      <div class="row"><span class="k">Mars rules</span><span class="v">action · will · anger · drive · sex · the engine</span></div>
      <div class="row"><span class="k">Theme</span><span class="v">re-act · re-fight · re-direct · re-engine</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=mars-r-${sign}">Get a $9 retrograde-aware reading →</a>
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

export function marsRIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = MARS_R_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/mars-retrograde/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">♂℞ ${sm.symbol}</div>
      <div class="name">Mars Retrograde for ${titleCase(s)}</div>
      <div class="axis">survival kit · ${sm.element}</div>
      <div class="vibe-mini">${escapeHtml(p.oneLine)}</div>
    </a>`
  }).join('')

  const title = `Mars Retrograde survival by sign — anger, drive, action · what to do · gab44 ✨`
  const description = `Mars Retrograde survival kit for all 12 zodiac signs. What surfaces in anger, drive, and action for your sun sign during the ~10-week window every ~2 years, what to do, what to avoid, and the single discipline that turns the retrograde into your friend. Plus a $9 personal reading by Naoufal.`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mars-retrograde" />
<meta property="og:title" content="Mars Retrograde survival by sign · gab44" />
<meta property="og:description" content="What surfaces in anger, drive, and action for your sun sign during the ~10-week window." />
<meta property="og:type" content="website" />
<style>:root{--c1:#c93a22;--c2:#48499c;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/transits/mars-retrograde">general explainer</a>
      <a href="/gab44/mercury-retrograde">mercury survival</a>
      <a href="/gab44/venus-retrograde">venus survival</a>
      <a href="/gab44/reading?ref=mars-r-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#c93a22,#48499c)">♂℞</div>
      <div class="meta">12 sign-specific survival kits · ~10 weeks · ~every 2 years · evergreen</div>
    </div>
    <h1>Mars Retrograde <span class="accent">survival</span></h1>
    <p class="vibe">Mars retrogrades roughly every 2 years for about 10 weeks — the longest of the personal-planet retrogrades. The general advice is one thing; the way it actually lands in your engine — anger, drive, sex, action — depends on your sun sign. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=mars-r-index">Want a retrograde-aware reading? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Mars-retrograde-by-sign survival kits · seasonal-evergreen.
    </footer>
  </div>
</body>
</html>`
}
