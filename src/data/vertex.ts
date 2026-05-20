// Vertex × sign SEO funnel — /gab44/vertex (index)
// + /gab44/vertex/{sign} (12 pages). Targets the fated-meeting / soul-
// recognition keyword cluster: "vertex in {sign} meaning", "{sign} vertex
// soulmate", "anti-vertex partner". The Vertex is a calculated chart
// point — the western intersection of the ecliptic and the prime vertical
// — that astrologers read as the point of fated encounter, the door
// through which the people-who-feel-like-destiny tend to walk in. The
// Anti-Vertex (180° opposite) is the door you walk through to meet them.
// Distinct from the lunar nodes (life-purpose axis) and from any
// asteroid (mythic body): the vertex is a chart point, a geometric door,
// and that distinction is the SEO opening — different keyword cluster,
// different intent. Routes warm traffic to /gab44/reading?ref=vertex-{sign}.

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

// Per-element accent kept inside a warm gold→coral band so the whole
// surface reads as the recognition / encounter axis (distinct from the
// jade hygiea band, the rose ceres band, etc.). Each element shifts
// the temperature inside the same family.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ffb347', c2: '#c14a18' },
  earth: { c1: '#d6a766', c2: '#8a5a2b' },
  air:   { c1: '#f0c987', c2: '#a07238' },
  water: { c1: '#dca070', c2: '#7a4a2a' }
}

// Anti-vertex: each vertex sign has the AVx in the sign 180° away.
// The AVx is the door you walk through to meet who is at the Vx.
const OPPOSITE: Record<Sign, Sign> = {
  aries: 'libra', taurus: 'scorpio', gemini: 'sagittarius',
  cancer: 'capricorn', leo: 'aquarius', virgo: 'pisces',
  libra: 'aries', scorpio: 'taurus', sagittarius: 'gemini',
  capricorn: 'cancer', aquarius: 'leo', pisces: 'virgo'
}

interface VertexProfile {
  sign: Sign
  anti: Sign
  // The texture of the fated meeting itself — what kind of encounter
  // recognises you, what setting tends to deliver the destined ones.
  encounter: string
  // The "anti-vertex" door — the situation, the act, the place you
  // walk through to be met by the vertex person.
  door: string
  // Big paragraph — the lived shape of vertex-in-this-sign.
  body: string
  // Working-with-it: the practice that opens the door.
  practice: string
  // The shadow shape — the encounter wired into its dysfunction
  // (the "fated" one that's actually a repetition of an old wound).
  shadow: string
  // Real-world cue: what the meeting tends to feel like in the body.
  cue: string
}

// Vertex sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. The Vertex names the texture of the fated meeting. The
// Anti-Vertex names the door you walked through to be met. Reading
// them together is what makes the lane useful.
export const VERTEX_PROFILES: Record<Sign, VertexProfile> = {
  aries: {
    sign: 'aries', anti: 'libra',
    encounter: 'Recognition mid-charge. The person who shows up while you are already moving — a collision, a sudden start, the "we met because we were both running."',
    door: 'Anti-Vertex in Libra: the door is the willingness to enter relationship at all — to stop being the lone arrow long enough for someone to step into your line of sight.',
    body: 'A Vertex in Aries marks the soul to be met in motion. The fated encounter rarely arrives in stillness — it walks in mid-action, while you are starting something, fighting for something, charging at something. The meeting is fast, often physical, often initiatory: a collision in the literal or figurative sense, the person who appears in the doorway you just kicked open. The Anti-Vertex in Libra is the door — the willingness to actually be in relationship, to stop reflexively going solo, that lets the destined one find the line of sight. Many Aries Vertex carriers describe the meeting as "instant," "like running into a wall," "knew within ten seconds." That is the Vertex doing what the Vertex does: collapsing the slow getting-to-know-you and skipping straight to recognition.',
    practice: 'Notice the next time you feel the urge to charge solo — and instead invite one specific person along. The Aries Vertex opens when you let someone share the first move.',
    shadow: 'The trap is the false-Vertex meeting wired by anger or rivalry — the "destined" one who is really a fight you keep restarting. Real Aries-Vertex recognition has heat without contempt; the false one runs on contempt.',
    cue: 'Heart kicks before mind catches up. A specific physical recognition in the chest — a thud, not a flutter.'
  },
  taurus: {
    sign: 'taurus', anti: 'scorpio',
    encounter: 'Recognition in the slow real. The person who arrives when you finally sit down — at the garden, the table, the long quiet meal. A meeting through the senses: shared food, shared touch, the body says yes before the mind speaks.',
    door: 'Anti-Vertex in Scorpio: the door is the willingness to be seen at depth, to let someone behind the comfortable surface, to stop curating the visible life.',
    body: 'A Vertex in Taurus marks the soul to be met in stillness, in the sensory, in the daily real. The fated encounter does not announce itself with drama — it shows up at a meal, at a market, at a slow afternoon, and the body recognises it before the mind does. The Anti-Vertex in Scorpio is the door — the willingness to be known at depth, to allow someone past the polished comfortable presentation, that lets the destined one find you. The recognition is steady and physical: the room temperature changes when they walk in, the body relaxes in their presence in a way it does not relax around anyone else. Many Taurus Vertex carriers describe the meeting as "felt safe immediately," "tasted right," "could have known him my whole life by the second hour." That is the Vertex doing what the Vertex does: routing destiny through the body, not the story.',
    practice: 'Sit somewhere ordinary for an hour, alone, with the phone away. The Taurus Vertex opens in the unguarded slow — the destined one arrives when you have stopped performing.',
    shadow: 'The trap is the false-Vertex meeting wired by comfort — the "destined" one who is really just the most comfortable continuation of the familiar. Real Taurus-Vertex recognition has the body saying yes; the false one has the mind saying "well, this is fine."',
    cue: 'Whole-body settle. Shoulders drop in their presence. Hunger and sleep regulate around them within days, not months.'
  },
  gemini: {
    sign: 'gemini', anti: 'sagittarius',
    encounter: 'Recognition in conversation. The fated meeting often happens through words first — a long thread, a chance exchange, the comment-section-to-coffee, the sibling-of-a-friend, the neighbor with a question. Words click before bodies are even in the same room.',
    door: 'Anti-Vertex in Sagittarius: the door is the willingness to commit to a meaning, to stop hedging — to land on a position long enough that someone can recognise the shape of your mind.',
    body: 'A Vertex in Gemini marks the soul to be met through language. The destined encounter often opens in conversation — a phone call, a chat thread, a question asked at the right moment by the right stranger — and the recognition is mind-shaped: an oh-you-think-like-that-too snap that arrives before the body or the biography catches up. The Anti-Vertex in Sagittarius is the door — the willingness to actually say what you think, to commit to a meaning out loud, that lets the destined one recognise the signal. The meeting is often local in the literal sense: the neighbor, the sibling, the cousin, the person three blocks over you somehow never met until now. Many Gemini Vertex carriers describe the meeting as "we just kept talking," "it was like finishing the other half of the same sentence," "I went home and read everything they ever wrote." That is the Vertex doing what the Vertex does: collapsing distance through pattern-recognition.',
    practice: 'Send the message you have been drafting. The Gemini Vertex opens through the sent word — the destined one is on the other side of the unsent reply.',
    shadow: 'The trap is the false-Vertex meeting wired by talk-as-substitute — the "destined" one with whom you have endless brilliant conversations and zero embodied life. Real Gemini-Vertex recognition makes you want to walk together, eat together, share the day; the false one stays trapped on the screen.',
    cue: 'The sentence you were about to say is the sentence they say. Time disappears in a one-hour conversation that turns out to have been four.'
  },
  cancer: {
    sign: 'cancer', anti: 'capricorn',
    encounter: 'Recognition through the home. The fated one arrives in the kitchen, at the family event, at the moment of softness — the "I felt I had known her my whole life" of a meeting in a domestic setting. The encounter is the family-of-the-heart finding itself.',
    door: 'Anti-Vertex in Capricorn: the door is the willingness to take responsibility, to be the adult, to build a structure visible enough that the destined one has somewhere to land.',
    body: 'A Vertex in Cancer marks the soul to be met in the inner room. The fated encounter rarely happens in the public arena — it happens at the kitchen table, at the brother\'s wedding, at the friend\'s birth, at the bedside of an aunt, in the soft underbelly of the day. The Anti-Vertex in Capricorn is the door — the willingness to actually carry weight, to be the responsible one, to build the structure that says "this is a life, you can stand in it" — that lets the destined one recognise a place to land. The recognition is family-shaped: the body reads them as kin before the biography confirms anything. Many Cancer Vertex carriers describe the meeting as "felt like coming home," "knew them in another life," "their face was a face I had been looking for." That is the Vertex doing what the Vertex does: collapsing strangers into kin through the soft inner door.',
    practice: 'Cook one meal for someone outside your circle this week. The Cancer Vertex opens through the offered hospitality — the destined one is at the table you set without expecting them.',
    shadow: 'The trap is the false-Vertex meeting wired by enmeshment — the "destined" one who is really a re-enactment of an unresolved family role. Real Cancer-Vertex recognition expands the family; the false one collapses you back into an old one.',
    cue: 'Body softens. Tears arrive without a clear cause within the first few meetings. Sleep deepens after time spent together.'
  },
  leo: {
    sign: 'leo', anti: 'aquarius',
    encounter: 'Recognition on the stage. The fated one spots you mid-performance — at the gallery opening, on stage, in the room where you are visibly being your specific signed self. The encounter is the soul-witness arriving for the work.',
    door: 'Anti-Vertex in Aquarius: the door is the willingness to step away from the specific personal stage long enough to be in the larger room — at the cause, the scene, the network — where the destined one can spot the unmistakable signal.',
    body: 'A Vertex in Leo marks the soul to be met while shining. The fated encounter rarely happens in private — it happens while you are visibly making the specific personal thing: on stage, at the show, mid-presentation, in the gallery, at the open-mic, in the room where the gift is being offered. The Anti-Vertex in Aquarius is the door — the willingness to be in the larger collective space, the scene, the cause, the network, where many people can see the signal — that lets the destined one recognise the unmistakable mark of your signature. The recognition is witness-shaped: they see the work and they see you, and the two collapse into one. Many Leo Vertex carriers describe the meeting as "they came up to me after the show," "they knew my work before they knew my name," "they said they could not look away." That is the Vertex doing what the Vertex does: routing destiny through visibility.',
    practice: 'Make the personal creative thing and put it where strangers can see it this month. The Leo Vertex opens through the signed gesture — the destined one is among the people who came to look.',
    shadow: 'The trap is the false-Vertex meeting wired by vanity — the "destined" one who is really a mirror you are using to confirm the performance. Real Leo-Vertex recognition makes you better at the work; the false one makes you more anxious about the audience.',
    cue: 'Eye contact across a room you cannot break. A specific feeling of being seen as the maker, not the mask.'
  },
  virgo: {
    sign: 'virgo', anti: 'pisces',
    encounter: 'Recognition through shared work. The fated one arrives as a collaborator — the colleague at the new job, the volunteer beside you at the soup kitchen, the craftsperson at the same workshop. The meeting is in the doing, side-by-side at the same task.',
    door: 'Anti-Vertex in Pisces: the door is the willingness to surrender the perfect plan, to leave room for the unexplained — to stop optimizing every encounter and let the soul show up uninvited.',
    body: 'A Vertex in Virgo marks the soul to be met through the work. The fated encounter rarely happens through chemistry alone — it happens beside you at the task, the project, the small useful thing being done well together. The Anti-Vertex in Pisces is the door — the willingness to enter the unrational, to leave the plan loose enough that the unexpected one can walk into it — that lets the destined one find the slot. The recognition is competence-shaped: respect arrives first, and only then opens out into the rest. Many Virgo Vertex carriers describe the meeting as "we worked together for six months and then suddenly it was obvious," "I trusted the way they did the small thing," "we just made sense alongside each other." That is the Vertex doing what the Vertex does: routing destiny through the everyday craft.',
    practice: 'Show up at one shared task this week without a clear personal agenda. The Virgo Vertex opens through the side-by-side useful — the destined one is across the table at the work.',
    shadow: 'The trap is the false-Vertex meeting wired by perfectionism — the "destined" one you keep trying to fix or be improved by. Real Virgo-Vertex recognition has each person doing their own work better in the other\'s presence; the false one has one of you trying to optimize the other.',
    cue: 'Quiet competence in their hands. The work goes faster and better in their presence in a way it does not with others.'
  },
  libra: {
    sign: 'libra', anti: 'aries',
    encounter: 'Recognition through introduction. The fated one is delivered by a third party — the mutual friend, the bridge person, the dinner-party host who said "you two should meet." The meeting arrives in the social arena, often by setup.',
    door: 'Anti-Vertex in Aries: the door is the willingness to make the first move, to act on your own behalf, to walk into the room you have been hesitating at the threshold of.',
    body: 'A Vertex in Libra marks the soul to be met through the social bridge. The fated encounter rarely arrives without a third party in the picture — the friend who introduced you, the mentor who put you in the same room, the algorithm of mutual connections. The Anti-Vertex in Aries is the door — the willingness to actually go to the thing, to RSVP yes, to stop hesitating at the threshold and walk into the room — that lets the destined one come into focus through the introduction. The recognition is harmony-shaped: the conversation flows in the way conversations rarely flow, the room rearranges itself around the pair, mutual friends comment on the obvious match. Many Libra Vertex carriers describe the meeting as "everyone said we had to meet," "the chemistry was instant and balanced," "we just fit." That is the Vertex doing what the Vertex does: routing destiny through the social fabric.',
    practice: 'Say yes to the introduction you would normally decline. The Libra Vertex opens through the social bridge — the destined one is at the dinner party your friend keeps mentioning.',
    shadow: 'The trap is the false-Vertex meeting wired by pleasing — the "destined" one with whom the relationship is so harmonious it never actually deepens. Real Libra-Vertex recognition can hold conflict; the false one collapses at the first disagreement.',
    cue: 'The conversation has the quality of a played duet — neither leading, neither following. Mutual friends say "obvious" before you do.'
  },
  scorpio: {
    sign: 'scorpio', anti: 'taurus',
    encounter: 'Recognition in the underworld. The fated one arrives at the hospital bedside, at the funeral, at the divorce, at the moment of the secret being told — through crisis, through taboo, through the door that opens only when something else has already broken.',
    door: 'Anti-Vertex in Taurus: the door is the willingness to be present in the body, in the simple real — to be available, sensorially present, when life cracks open and the person walks through the crack.',
    body: 'A Vertex in Scorpio marks the soul to be met in the dark room. The fated encounter rarely happens in the lit-up space — it happens at the crisis, the loss, the secret moment, the underworld passage that strips both people of pretense. The Anti-Vertex in Taurus is the door — the willingness to be embodied, to stay present in the room when the room gets heavy, to not flee into abstraction — that lets the destined one recognise a partner for the depth. The recognition is initiation-shaped: the meeting changes both lives, irreversibly, often within weeks. Many Scorpio Vertex carriers describe the meeting as "we met in the worst week of my life," "they saw the parts no one had ever seen," "I was never the same after." That is the Vertex doing what the Vertex does: routing destiny through the crucible.',
    practice: 'Tell the truth about the thing you would normally edit. The Scorpio Vertex opens through the spoken secret — the destined one is the one who can stay in the room when it lands.',
    shadow: 'The trap is the false-Vertex meeting wired by wound-bonding — the "destined" one who is really a co-addict in the same crisis, two people drowning together calling it love. Real Scorpio-Vertex recognition transforms; the false one fixates.',
    cue: 'Time slows when they enter the room. A specific feeling of being known to the bone within the first week.'
  },
  sagittarius: {
    sign: 'sagittarius', anti: 'gemini',
    encounter: 'Recognition on the road. The fated one is met abroad, in a foreign city, on a course, at a retreat, at the conference — through travel, through study, through the open horizon. The meeting often happens far from home.',
    door: 'Anti-Vertex in Gemini: the door is the willingness to keep curiosity open, to ask the local question, to talk to strangers in the airport, to follow the small conversational thread that leads through the city.',
    body: 'A Vertex in Sagittarius marks the soul to be met on the journey. The fated encounter rarely happens in the home neighborhood — it happens on the trip, at the conference in another country, at the retreat, on the long course, at the place reached only by leaving. The Anti-Vertex in Gemini is the door — the willingness to actually engage with the local world wherever you land, to ask the question of the stranger at the next table, to follow the small thread — that lets the destined one find you across the horizon. The recognition is meaning-shaped: the conversation goes immediately to the big question, the philosophy, the why-are-we-here, and both of you feel met at the level of the worldview. Many Sagittarius Vertex carriers describe the meeting as "we met on a trip," "we had the deepest possible conversation within an hour," "they came from a completely different world but I recognised them." That is the Vertex doing what the Vertex does: collapsing geographic distance through shared meaning.',
    practice: 'Take the trip you have been postponing. The Sagittarius Vertex opens through the foreign road — the destined one is in the city you have not yet visited.',
    shadow: 'The trap is the false-Vertex meeting wired by escapism — the "destined" one who only feels destined when you are away from your real life. Real Sagittarius-Vertex recognition follows you home; the false one collapses on the return flight.',
    cue: 'The conversation goes to meaning within the first hour. A specific feeling of "we belong to the same big story" before you know each other\'s small one.'
  },
  capricorn: {
    sign: 'capricorn', anti: 'cancer',
    encounter: 'Recognition through structure. The fated one arrives in the professional arena — at the job, at the board meeting, at the long-term project, in the hierarchical room. The meeting is slow-build, often workplace, often through a position of mutual responsibility.',
    door: 'Anti-Vertex in Cancer: the door is the willingness to let someone into the soft inner life — the family table, the home, the unguarded after-hours self — even when the meeting started in the formal arena.',
    body: 'A Vertex in Capricorn marks the soul to be met through the long structure. The fated encounter rarely arrives by accident — it arrives through the work, the institution, the long-term project where two people end up carrying weight together over months and years. The Anti-Vertex in Cancer is the door — the willingness to soften, to invite home, to let the formal acquaintance into the kitchen where the rest of the life actually lives — that lets the destined one cross from colleague to inevitability. The recognition is gravitas-shaped: it builds slowly, both people sense the weight of it, and at some point both realise the meeting was load-bearing all along. Many Capricorn Vertex carriers describe the meeting as "we worked together for years before it was obvious," "the slow burn that became the whole life," "I trusted them with the things that mattered before I trusted anyone with anything light." That is the Vertex doing what the Vertex does: collapsing decades of build into a single recognised arc.',
    practice: 'Invite the colleague you respect into the after-hours room. The Capricorn Vertex opens through the soft door inside the structured one — the destined one becomes inevitable when the two registers meet.',
    shadow: 'The trap is the false-Vertex meeting wired by status — the "destined" one who is really a strategic alliance dressed as fate. Real Capricorn-Vertex recognition can survive the loss of the structure; the false one ends when the org chart changes.',
    cue: 'Mutual respect arrives first and never leaves. A specific feeling that the relationship is building something visible in the world.'
  },
  aquarius: {
    sign: 'aquarius', anti: 'leo',
    encounter: 'Recognition through the cause. The fated one is met at the movement, the protest, the open-source project, the scene — among the people gathered around a shared signal. The meeting is collective-arena before it is personal.',
    door: 'Anti-Vertex in Leo: the door is the willingness to be visibly yourself in the collective room — to stop being the anonymous member and let the specific personal signal show, so the destined one can find the unmistakable frequency.',
    body: 'A Vertex in Aquarius marks the soul to be met at the gathering. The fated encounter rarely happens in the one-on-one — it happens in the room of the cause, the collective, the scene, the movement, the network of people gathered around a shared signal. The Anti-Vertex in Leo is the door — the willingness to be visibly the personal self inside the collective, to let the specific gift show through the shared work, to claim a stage even within the group — that lets the destined one find the unmistakable frequency in the crowd. The recognition is signal-shaped: both people are tuned to the same future, the same project, the same chord, and the meeting is the resonance recognising itself. Many Aquarius Vertex carriers describe the meeting as "we were both in the same group chat for years," "we kept showing up at the same things until we finally talked," "we were friends before anything else and that is the foundation." That is the Vertex doing what the Vertex does: routing destiny through the shared signal.',
    practice: 'Go to the meeting, the meet-up, the open thing for the cause you actually care about — and stay long enough to talk to one stranger. The Aquarius Vertex opens through the gathering.',
    shadow: 'The trap is the false-Vertex meeting wired by ideology — the "destined" one who only fits while you both believe the same thing, and dissolves the moment one of you grows. Real Aquarius-Vertex recognition is friend-shaped first; the false one is comrade-shaped first.',
    cue: 'You realise you are both tuned to a future no one in your immediate life can hear yet. The friendship feels older than the actual time you have known each other.'
  },
  pisces: {
    sign: 'pisces', anti: 'virgo',
    encounter: 'Recognition through the dream. The fated one arrives through synchronicity — the dream that turns out to be them, the "I had a feeling about you" stranger, the meeting that felt scripted. The encounter is the field of the unsayable knowing itself.',
    door: 'Anti-Vertex in Virgo: the door is the willingness to do the daily small thing — the practice, the routine, the showing-up — that gives the unconscious somewhere to deposit the synchronicity, somewhere to surface.',
    body: 'A Vertex in Pisces marks the soul to be met through the unsayable. The fated encounter often arrives with the texture of dream — the recognition that exceeds the biography, the meeting both of you remember as inevitable, the eyes that already knew. The Anti-Vertex in Virgo is the door — the willingness to do the daily ordinary practice, the un-magical routine, the small craft — that gives the synchronicity somewhere to land. The recognition is field-shaped: it happens at the level of the unspoken, both people sense the meeting as larger than the moment, and the rest of the life rearranges around it without anyone needing to argue. Many Pisces Vertex carriers describe the meeting as "I dreamed of him before I met him," "I knew her name before she said it," "we recognised each other from somewhere that has no address." That is the Vertex doing what the Vertex does: routing destiny through the silent field.',
    practice: 'Keep a dream log for one month. The Pisces Vertex opens through the noticed synchronicity — the destined one is on the other side of the pattern you finally write down.',
    shadow: 'The trap is the false-Vertex meeting wired by projection — the "destined" one onto whom you have hung an entire myth that has nothing to do with the actual person in front of you. Real Pisces-Vertex recognition deepens with time as the real person comes into focus; the false one dissolves the moment reality intrudes.',
    cue: 'A specific deja-vu in the first meeting. The feeling of having lived this conversation before, in a dream you cannot quite recover.'
  }
}

export const VERTEX_SIGNS = SIGNS

export function isVertexSign(s: string): s is Sign {
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
  .shadow-list .marker { color: #b85432; }
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

export function vertexPageHTML(sign: Sign): string {
  const p = VERTEX_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const anti = SIGN_BEATS[p.anti]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const Anti = titleCase(p.anti)
  const headline = `Vertex in ${Sign}`

  // Other vertex signs strip — discover the other 11.
  const otherVertex = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/vertex/${s}">◈ Vx ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh into the rest of the gab44 graph at the same-sign
  // level — vertex links into nodes (life-purpose axis), the asteroid
  // family (ceres/pallas/juno/vesta/eros/psyche/hygiea/chiron/lilith),
  // and back to the sign profile + reading. This is what makes vertex
  // a real node in the surface, not a stranded leaf.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/${p.anti}">${anti.symbol} ${Anti} (your Anti-Vertex)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (the centaur seer who foresaw the destined encounter)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign}</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/vertex">all 12 Vertex signs</a>`
  ].join('')

  const title = `${headline} — fated meeting, soulmate door, Anti-Vertex in ${Anti} · gab44`
  const description = `${headline}: how the fated encounter actually arrives. ${p.encounter} Anti-Vertex in ${Anti}: ${p.door} The full axis explained, with practice and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Vertex', item: `${SITE_URL}/gab44/vertex` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/vertex/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/vertex/${sign}`,
        about: `${headline} — fated meeting / soulmate-recognition axis`
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
<link rel="canonical" href="${SITE_URL}/gab44/vertex/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.encounter)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/vertex/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%97%88%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/vertex">all 12 Vertex signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/${p.anti}">${Anti} profile (AVx)</a>
      <a href="/gab44/reading?ref=vertex-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">◈ ${sm.symbol}</div>
      <div class="meta">Vertex ◈ ${Sign} · Anti-Vertex ◇ ${Anti} · the fated-meeting axis</div>
    </div>
    <h1><span class="accent">Vertex</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.encounter)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>◈ Vertex in ${Sign} — the encounter</h3>
        <p>${escapeHtml(p.encounter)}</p>
      </div>
      <div class="panel">
        <h3>◇ Anti-Vertex in ${Anti} — the door you walk through</h3>
        <p>${escapeHtml(p.door)}</p>
      </div>
    </div>

    <h2>How Vertex in ${Sign} actually meets you</h2>
    <ul class="meet-list">
      <li><span class="marker">◈</span>${escapeHtml(p.cue)}</li>
      <li><span class="marker">◈</span>${escapeHtml(p.encounter)}</li>
      <li><span class="marker">◈</span>${escapeHtml(p.door)}</li>
    </ul>

    <h2>Practice — open the door</h2>
    <p>${escapeHtml(p.practice)}</p>

    <h2>Shadow — the false fated one</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this axis reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Vertex</span><span class="v">◈ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Anti-Vertex</span><span class="v">◇ ${anti.symbol} ${Anti} · ${anti.element} · ${anti.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">calculated chart point (not a body)</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">fated encounter / soul-recognition</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vertex-${sign}">Get a $9 Vertex-aware reading →</a>
    </div>

    <h2>The other 11 Vertex signs</h2>
    <div class="strip">${otherVertex}</div>

    <h2>Related — your fated-meeting cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · fated-meeting / soul-recognition axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function vertexIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = VERTEX_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const anti = SIGN_BEATS[p.anti]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/vertex/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">◈ ${sm.symbol}</div>
      <div class="name">Vertex in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} ↔ ${anti.symbol} ${titleCase(p.anti)} (AVx)</div>
      <div class="vibe-mini">${escapeHtml(p.encounter)}</div>
    </a>`
  }).join('')

  const title = `Vertex by sign — fated meetings, soulmate door, Anti-Vertex axis · gab44 ✨`
  const description = `Vertex in {sign} — the fated-meeting signature across all 12 zodiac signs. The Vertex is the chart point that names how destiny tends to walk into your life: through action, through shared work, through introduction, through the underworld, through the dream. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — let the Vertex index hand visitors back into
  // the rest of the gab44 graph: the lunar-nodes axis (sister axis at
  // the chart-point level), the asteroid family, and the sign profiles.
  const navStrip = [
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (the centaur seer who foresaw the destined encounter)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/chiron">⚷ Chiron by sign</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign</a>`,
    `<a href="/gab44/eros">⚭ Eros by sign</a>`,
    `<a href="/gab44/psyche">❋ Psyche by sign</a>`,
    `<a href="/gab44/juno">⚵ Juno by sign</a>`,
    `<a href="/gab44/vesta">⚶ Vesta by sign</a>`,
    `<a href="/gab44/pallas">⚴ Pallas by sign</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign</a>`,
    `<a href="/gab44/hygiea">✦ Hygiea by sign</a>`
  ].join('')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/vertex" />
<meta property="og:title" content="Vertex by sign · gab44" />
<meta property="og:description" content="The fated-meeting signature across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#d6a766;--c2:#8a5a2b;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/reading?ref=vertex-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#d6a766,#8a5a2b)">◈</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · the chart point of fated encounter</div>
    </div>
    <h1>Vertex <span class="accent">by sign</span></h1>
    <p class="vibe">Sun is who you are. Moon is what you feel. The Vertex names how destiny tends to walk into the room. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister axes</h2>
    <p>The Vertex is one of two great chart-point axes that name fate: the Vertex/Anti-Vertex pair (fated encounter) and the lunar nodes (life-purpose direction). Pair the two for the full axis read, then layer in the asteroid family for the relational signatures.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=vertex-index">Want a deeper, vertex-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Vertex-by-sign pages · evergreen · the fated-meeting axis.
    </footer>
  </div>
</body>
</html>`
}
