// Angel Numbers SEO funnel — /gab44/angel-numbers (index) + /gab44/angel-numbers/{slug} (13 pages).
// Targets one of the highest-volume evergreen spiritual keyword clusters: "111 meaning",
// "222 angel number", "what does 333 mean", "1111 spiritual meaning", "twin flame 1212".
// Each page is hand-written, ~600 words across 7 sections. Routes warm traffic to
// $9 reading via ?ref=angel-{slug}. Zero LLM cost — content baked into the bundle.

import { SITE_URL } from '@/lib/identity'

export interface AngelNumber {
  num: string             // "111", "222", ... "1212"
  slug: string            // same as num (URL-safe digits)
  display: string         // "111", "11:11"
  archetype: string       // short title
  symbol: string          // emoji
  ruling_planet: string   // numerology link
  element: string         // fire/earth/air/water (accent)
  one_liner: string
  message: string         // big paragraph: the spiritual message
  in_love: string
  in_career: string
  twin_flame: string      // very common search modifier
  what_to_do: string      // practice / next step
  warning: string         // shadow / caveat
  pair_with: string       // pair with which sign / life path / crystal
  key_questions: [string, string, string]
}

export const ANGEL_NUMBERS: AngelNumber[] = [
  {
    num: '111', slug: '111', display: '111', archetype: 'The Doorway',
    symbol: '🚪', ruling_planet: 'Sun', element: 'fire',
    one_liner: 'A door is opening. Watch your thoughts — they are about to become real, fast.',
    message: '111 is the number of fresh manifestation. When it shows up — on a clock, a license plate, a receipt — the universe is putting a stamp on whatever you were just thinking about. The veil between thought and form is thin in this season; what you feed gets fed back to you. People who see 111 are usually at the start of something — a relationship considered, a project not yet named, a city they keep dreaming of. The number is not asking you to be cautious. It is asking you to be honest about what you actually want, because that is what will arrive. The doorway is open. Decide what you are walking through.',
    in_love: 'A new chapter — sometimes a new person, sometimes a brand-new feeling about the person already in your life. If single, 111 often shows up before a meaningful encounter; pay attention to the next stranger who slows your breath. If partnered, it is asking you to renew the vow underneath, not just the routine.',
    in_career: 'A start. The idea you have been turning over has more weight than you think. Begin the small first version this week — the file, the page, the first message to the first person. 111 favors action over planning.',
    twin_flame: 'A common 111 timing for twin flames is meeting, recognition, or a return after a separation phase. The mirror is warming up. Whatever you have been doing in your own healing has prepared the ground.',
    what_to_do: 'For one full day, audit your inner monologue like a recording. Whatever you would not want broadcast back to you — that is the thread to change. Then pick one tiny tangible action toward what you actually want, and do it before the day ends.',
    warning: 'Do not waste 111 on anxious rumination. Manifestation works in both directions; what you fear can also walk through the door if it is the loudest voice in your head.',
    pair_with: 'Aries energy (the start), Life Path 1 (the pioneer), or clear quartz (amplifier of intention).',
    key_questions: ['What thought have I been quietly repeating about my life?', 'If this thought becomes real, do I want it to?', 'What is one tiny action I can take today toward what I actually want?']
  },
  {
    num: '222', slug: '222', display: '222', archetype: 'The Alignment',
    symbol: '⚖️', ruling_planet: 'Moon', element: 'water',
    one_liner: 'You are on the right path. Trust the pace.',
    message: '222 is the number of confirmation. It tends to show up in the middle of a stretch where you have been wondering whether to keep going, whether the relationship is worth the patience, whether the project is on track. The angels (or whatever name you give the larger intelligence) answer with: yes. Stay. The seeds you planted are germinating underground; the apparent slowness is not stuckness, it is the natural pace of the thing you are growing. 222 is the favorite number of people in long, faithful work — the second year of a marriage, the second year of a craft, the quiet middle stretch where most people quit. It is asking you not to.',
    in_love: 'You and your person are in alignment, even if it doesn\'t feel exciting right now. Trust the steady. If single, 222 is often a sign that an aligned partner is being prepared for you in the same season you are being prepared for them.',
    in_career: 'Stay the course. The thing you have been building has more momentum than the noise lets you feel. Do not pivot just because the middle is boring. Patience is its own currency now.',
    twin_flame: 'A 222 phase is typically a harmonious in-relationship season for twin flames, or — if separated — a sign that the inner work both are doing is converging. The road is righting itself.',
    what_to_do: 'Resist the urge to start something new just because the current thing is in the unflashy middle. Light a candle for the work in progress. Send one message of gratitude to someone who has been steady with you.',
    warning: 'Do not mistake 222 for "everything is perfect, do nothing." It is asking for trust, not passivity. Keep watering.',
    pair_with: 'Libra energy (balance), Life Path 2 (the diplomat), or rose quartz (gentle commitment).',
    key_questions: ['Where in my life am I being asked to keep going past the boring middle?', 'What am I tempted to abandon that is actually almost ready?', 'Who in my life has been steady with me — and have I told them?']
  },
  {
    num: '333', slug: '333', display: '333', archetype: 'The Witnesses',
    symbol: '👁️', ruling_planet: 'Jupiter', element: 'air',
    one_liner: 'Your guides are with you. Speak. Create. The audience is listening.',
    message: '333 is the number of expression and divine support. The classical reading is that the ascended masters or your guides — pick the language that fits — are present and amplifying. People see 333 a lot when they are about to be heard, when they are creating something with reach, when they are being asked to step into a more public version of their voice. It is also a number of joyful collaboration; 333 often arrives during seasons when the right people are arranging themselves around you. Old loneliness is ending. The witnesses have arrived.',
    in_love: 'A communicative season. Conversations get easier; old misunderstandings clear. If single, 333 favors people you meet through community — friends of friends, classes, creative groups — over apps.',
    in_career: 'Speak up. Publish the thing. Send the proposal. Your work needs an audience and the audience is being assembled. Collaboration over solo grind.',
    twin_flame: 'A 333 phase often signals that the connection is being witnessed and supported by something larger than just the two people. Trust the encounters. The conversations between you are doing more work than they appear to.',
    what_to_do: 'Say the thing you have been editing in your head for months. Out loud, on paper, on a page someone can find. The universe is leaning in.',
    warning: 'Do not perform what is not yours to say. 333 amplifies — make sure what you put out reflects who you actually are. Otherwise it amplifies the mask.',
    pair_with: 'Gemini or Sagittarius energy (the speakers), Life Path 3 (the communicator), or citrine (creative voice).',
    key_questions: ['What have I been wanting to say but editing into silence?', 'Who is my audience — really? Have I let them know I exist?', 'Where am I supported in ways I haven\'t named?']
  },
  {
    num: '444', slug: '444', display: '444', archetype: 'The Foundation',
    symbol: '🏛️', ruling_planet: 'Saturn', element: 'earth',
    one_liner: 'You are protected. The walls of your life are being reinforced.',
    message: '444 is the number of foundation, protection, and steady presence. It tends to show up during seasons of difficulty — often when you have been worrying, grieving, or feeling exposed — and its message is essentially: you are safe, the structure holds, the angels have you. The number is also a sign that the work you have done on your inner life — the boundaries you set, the discipline you held, the quiet decisions that no one applauded — is now becoming the actual ground you stand on. 444 doesn\'t arrive to fix your situation; it arrives to remind you that the ground beneath your feet is more solid than your fear lets you feel.',
    in_love: 'A grounded, safe phase. The relationship is more stable than the recent worry suggested. If single, 444 often signals that you are being protected from a wrong fit — and that the right one is being prepared on a longer timeline than you wanted.',
    in_career: 'Build. The boring infrastructure work — the systems, the savings, the documentation, the long contract — is the right work for this season. Skipping the foundation now will cost three times as much later.',
    twin_flame: 'A 444 phase is often the slow, foundational rebuilding stage — either of the connection itself or of the inner home each person has to become before the union can hold weight.',
    what_to_do: 'Strengthen one boundary today — financial, emotional, or with your time. Notice the four walls around you, the floor under you. Breathe into the support that is already here.',
    warning: 'Do not confuse "protected" with "rescued." 444 builds — it does not bypass. The stability comes from the choices you make, blessed and amplified.',
    pair_with: 'Taurus or Capricorn energy (the builders), Life Path 4 (the steady), or hematite (grounding stone).',
    key_questions: ['What in my life is more stable than my fear lets me see?', 'What boundary needs reinforcing today?', 'Where have I been trying to skip the slow foundational work?']
  },
  {
    num: '555', slug: '555', display: '555', archetype: 'The Threshold',
    symbol: '🌪️', ruling_planet: 'Mercury', element: 'air',
    one_liner: 'A big change is coming — sooner than you think, bigger than you planned.',
    message: '555 is the number of transition. When it shows up, the life you currently have is about to reorganize — sometimes by your decision, sometimes by an event you didn\'t see coming. The change is not punishment; it is liberation in disguise. 555 typically signals a move (geographic or inner), a relationship redefinition, a job shift, or a big creative pivot. The timeline is faster than your nervous system would prefer. The right response is not to brace; it is to lighten — drop what you no longer need, finish the small things you keep procrastinating on, make room for what is arriving.',
    in_love: 'A redefinition. Sometimes that means a relationship leveling up dramatically; sometimes it means one ending so you can be ready for the one already aiming for you. Either way, the static version is not the version you keep.',
    in_career: 'Pivot, expand, or leave. 555 doesn\'t reward holding on for stability\'s sake. Listen to the restless voice you have been muting; it has accurate information.',
    twin_flame: 'A 555 phase is often a major shift — first contact, reunion, or a separation that turns out to be the necessary catalyst. Big movement. Pack lightly.',
    what_to_do: 'Pick one thing in your life — a possession, a habit, a commitment — that you have outgrown. Today, release it. Make literal physical space for what is coming.',
    warning: 'Do not panic-grip what is leaving. 555 changes are easier when you cooperate with the current than when you swim against it.',
    pair_with: 'Sagittarius or Gemini energy (the wanderers), Life Path 5 (the free spirit), or labradorite (transition stone).',
    key_questions: ['What is leaving my life that I have been pretending will stay?', 'What am I making room for?', 'Where am I bracing instead of lightening?']
  },
  {
    num: '666', slug: '666', display: '666', archetype: 'The Reset',
    symbol: '⚖️', ruling_planet: 'Venus', element: 'earth',
    one_liner: 'Not a curse. A recalibration — your inner life and outer life are out of balance.',
    message: '666 is the most misunderstood angel number. The horror-movie association is a relatively recent overlay; in numerology, 666 is about the material plane, the body, the home, the relationship — the territory of the 6 — falling out of alignment with the inner life. When 666 shows up, you have probably been over-spending one side: too much work and not enough rest, too much giving and not enough receiving, too much body and not enough soul, or vice versa. The number is not predicting doom. It is asking you to recalibrate the daily life so the inner and outer can resume their conversation. People who heed 666 quickly often look back on it as the moment a small course-correction prevented a much bigger collapse later.',
    in_love: 'Are you giving too much? Receiving too little? Or putting the relationship on autopilot while you over-invest in work? The dynamic needs an honest re-balance, not a dramatic exit.',
    in_career: 'The work-life ratio has tipped. Either you are over-working at the cost of your home life, or you have been so consumed by personal life that the work has quietly eroded. Take stock honestly.',
    twin_flame: 'A 666 phase often calls both people to look at material-plane realities — money, living situation, body care — that have been neglected in favor of the spiritual high. Get the practical right and the connection re-stabilizes.',
    what_to_do: 'List the four pillars of your life: body, home, work, relationships. Rate each 1-10 honestly. The lowest one is where 666 is asking you to put attention this week.',
    warning: 'Do not spiritually-bypass 666 by deciding the practical things are unimportant. The body and the bills are part of the path, not distractions from it.',
    pair_with: 'Taurus or Libra energy (the balancers), Life Path 6 (the nurturer), or smoky quartz (grounding what is in excess).',
    key_questions: ['Which pillar of my life have I been neglecting?', 'Where am I over-giving in a way that depletes me?', 'What is one practical small fix that would reset the balance?']
  },
  {
    num: '777', slug: '777', display: '777', archetype: 'The Confirmation',
    symbol: '🍀', ruling_planet: 'Neptune', element: 'water',
    one_liner: 'You are exactly where you are supposed to be. Spiritual luck is on your side.',
    message: '777 is the number of mystic confirmation. It tends to show up during seasons of inner growth — deep reading, therapy, meditation, study, soul-searching — and its message is: you are aligned, the work you are doing is sacred, you are about to receive insight, recognition, or genuine grace. There is a quality of quiet luck around 777 — synchronicities increase, the right book finds you, the conversation that changes everything happens with the stranger in the seat next to yours. The number is also the favorite of teachers, healers, and writers in their season of breakthrough — when the inner study finally meets a public hour. Trust the season. Take the deep breath. The door is opening because you got ready.',
    in_love: 'A spiritually significant connection — sometimes a soul-tier meeting, sometimes a deepening with someone already in your life that turns out to be karmic. The connection has reasons beyond chemistry.',
    in_career: 'Insight breakthrough. The thing you have been studying is about to find its expression — a book, a project, a teaching role, a recognition. The "luck" is earned interest on years of inner work.',
    twin_flame: 'A 777 phase often marks a spiritually significant chapter — recognition, deeper communion, or a breakthrough in the inner work that the connection has been catalyzing.',
    what_to_do: 'Notice the synchronicities this week without explaining them away. Keep a small notebook of "coincidences" for seven days. The pattern will speak.',
    warning: 'Do not use 777 as an excuse to wait passively for magic. The luck rewards the inner work — keep doing it.',
    pair_with: 'Pisces or Scorpio energy (the mystics), Life Path 7 (the seeker), or amethyst (intuition stone).',
    key_questions: ['What inner work am I doing that is about to be confirmed?', 'What synchronicity have I been ignoring?', 'Where in my life is grace already arriving — and have I noticed?']
  },
  {
    num: '888', slug: '888', display: '888', archetype: 'The Abundance',
    symbol: '♾️', ruling_planet: 'Saturn', element: 'earth',
    one_liner: 'Material abundance is on its way — and the karmic balance is settling.',
    message: '888 is the number of material abundance and karmic completion. When it shows up, money, opportunity, recognition, or some other tangible reward is moving toward you — often the return on a long stretch of integrity, work, or generosity. The Chinese tradition reads 8 as the most prosperous number; the angel-number reading layers in karmic justice — what you put out is finally circling back, sometimes with interest. 888 is also a closing number; it often arrives at the end of a financial or career cycle, signaling that what was unfinished is being settled (sometimes a debt repaid, sometimes a long-promised payout, sometimes a lawsuit closing). Receive it without guilt. The abundance is not random; it has your name on it.',
    in_love: 'A relationship that "gives back" is being recognized — either an existing one entering a season of mutual flourishing, or a new one of equal value arriving. The era of one-sided love is closing.',
    in_career: 'Money, recognition, contract, raise, payout. 888 favors people who have been doing the right thing for a long time without being seen. Now you are seen.',
    twin_flame: 'A 888 phase often signals karmic completion between the two — the lessons that needed to be learned have been learned, and the next chapter (whatever shape it takes) carries less heaviness.',
    what_to_do: 'Do not block the gift. When the offer comes, accept it cleanly — without negotiating yourself smaller. Give yourself permission to receive at scale.',
    warning: 'Do not hoard. 888 abundance flows when it is allowed to circulate. Tip generously, give once, then receive without flinching.',
    pair_with: 'Capricorn or Taurus energy (the builders of wealth), Life Path 8 (the power broker), or pyrite or citrine (abundance stones).',
    key_questions: ['What long stretch of effort is finally being recognized?', 'Where do I block abundance by not letting myself receive cleanly?', 'What karmic loop is closing in my life right now?']
  },
  {
    num: '999', slug: '999', display: '999', archetype: 'The Completion',
    symbol: '🌒', ruling_planet: 'Pluto', element: 'water',
    one_liner: 'A chapter is ending. Let it. The next one needs the room.',
    message: '999 is the number of completion. It shows up at the end of a long arc — a relationship, a job, a creative project, a version of yourself — and its message is: this thing has finished its work for you, and trying to keep it past its natural end will only cost you energy. 999 is rarely about sudden endings; it is more often about endings you have been postponing. The angels are giving you permission. The grief is appropriate; the chapter mattered. But the next chapter — the bigger one, the more you-shaped one — is waiting on the other side of the ending you keep delaying. Let go. The release is the gift.',
    in_love: 'A relationship arc completing. Sometimes a deepening into a permanent commitment (the previous version of "us" ends so the new one can begin); sometimes a true ending. Trust which one your body actually knows.',
    in_career: 'A project, role, or career identity is finished. Resist the temptation to extend it for stability. The new direction needs the space the old one is occupying.',
    twin_flame: 'A 999 phase often marks the completion of a karmic cycle — sometimes the connection itself transmutes into a new form, sometimes one or both are released to a different path.',
    what_to_do: 'Write the closing line of the chapter as if it were a book — what you learned, what you are grateful for, what you are setting down. Then close the book and put it on the shelf.',
    warning: 'Do not hold on out of fear of the empty space. 999 always has 1, 2, 3 ready on the other side.',
    pair_with: 'Scorpio or Pisces energy (the transformers), Life Path 9 (the humanitarian / closer), or obsidian (release stone).',
    key_questions: ['What in my life has been finished for a while that I am still hauling?', 'What new beginning is waiting on the room this ending will create?', 'What gratitude do I owe the chapter that is closing?']
  },
  {
    num: '000', slug: '000', display: '000', archetype: 'The Source',
    symbol: '⭕', ruling_planet: 'Pluto / Sun', element: 'fire',
    one_liner: 'A pure beginning. The blank page. You are connected to source.',
    message: '000 is the number of the void and the womb — pure potential, the blank page, the moment before the moment. When it shows up, you are at a true starting point — sometimes the start of a brand-new cycle, sometimes a return to your essence after a long stretch of distortion. 000 also signals strong spiritual presence and connection to source; many people see it in the middle of meditation, prayer, or after a profound shift. The number is asking you to remember what you actually are underneath all the roles, achievements, and identities. The blank page is not empty — it is full of possibility. What you write on it next is yours to choose.',
    in_love: 'A clean slate. Sometimes a brand-new relationship that doesn\'t carry the patterns of the past; sometimes an old relationship reset to its essence after a hard stretch.',
    in_career: 'Starting from scratch with the wisdom of everything that came before. The blank page is yours to write — and you have more permission than you are giving yourself.',
    twin_flame: 'A 000 phase often marks the return to essence — the connection stripped of the drama, the lessons, the karmic noise. Pure presence with each other, or pure presence within the self that prepares for it.',
    what_to_do: 'Sit in silence for ten minutes today with no input. Notice what is left when the noise quiets. That is the ground you are building on.',
    warning: 'Do not panic the emptiness into busyness. 000 needs the space to be empty before it can become full.',
    pair_with: 'Aries energy (the start), Life Path 1 (the pioneer), or selenite (the cleanser).',
    key_questions: ['What in me is the part underneath all the roles?', 'If the page is blank, what do I actually want to write on it?', 'Where in my life do I confuse busyness with becoming?']
  },
  {
    num: '1010', slug: '1010', display: '10:10', archetype: 'The Awakening',
    symbol: '🌓', ruling_planet: 'Sun / Pluto', element: 'air',
    one_liner: 'A spiritual awakening is in motion. You are remembering who you are.',
    message: '1010 (often seen as 10:10 on a clock) is the number of awakening — the moment the inner life starts ordering the outer. It tends to show up during seasons when you are reading more, sleeping less because your mind keeps lighting up, having vivid dreams, asking bigger questions, leaving conversations because they suddenly feel hollow. The number combines 1 (beginning, sovereignty) and 0 (source, potential) doubled — the start of a new spiritual cycle and a deep reconnection to source. People who see 1010 often look back on this season as the moment they stopped sleepwalking. The awakening is not a crisis. It is a homecoming.',
    in_love: 'The connections you have outgrown become unbearable; the ones that match your awakened self start finding you. This can mean leaving, or it can mean a partner waking up alongside you.',
    in_career: 'Work that does not match your soul becomes physically uncomfortable. The new direction you have been ignoring will get louder until you turn toward it.',
    twin_flame: 'A 1010 phase is often the spiritual awakening that twin-flame work tends to catalyze — for one or both. The recognition deepens; the call to inner work intensifies.',
    what_to_do: 'Honor what is becoming intolerable in your life — it is information, not weakness. Begin one practice this week that feeds the awakening (silent walks, journaling, fasting, meditation — whatever your body asks for).',
    warning: 'Do not isolate. The awakening can feel lonely; find one other person on a similar path. Community is part of the medicine.',
    pair_with: 'Aquarius energy (the awakener), Life Path 1 / 11 (the visionary), or moldavite (high-frequency catalyst — handle carefully).',
    key_questions: ['What in my old life is becoming unbearable — and what is that telling me?', 'What practice would honor the awakening I am in?', 'Who else is awake that I could share this season with?']
  },
  {
    num: '1111', slug: '1111', display: '11:11', archetype: 'The Portal',
    symbol: '✨', ruling_planet: 'Sun (master 11)', element: 'air',
    one_liner: 'The portal moment. Make a wish — your soul is being heard.',
    message: '1111 is the most-googled angel number and arguably the most powerful — four 1s in a row, with master 11 layered on master 11. When it shows up, you are inside a portal: a moment when the gap between thought and manifestation is at its thinnest, intuition is at its highest, and your soul-level desires are being heard with unusual clarity. The folk tradition of "make a wish at 11:11" is closer to true than it sounds — the wish names what you actually want, and the portal acts on it. 1111 is also the classic twin-flame number; many soul-recognitions, dream encounters, and synchronistic meetings happen in 1111 windows. Pay attention. The window does not stay open forever, but while it is open, it is real.',
    in_love: 'A soul-recognition window. Many people meet a karmically significant person in a 1111 phase. If already in a relationship, 1111 deepens the soul-level acknowledgment of why you are together.',
    in_career: 'Wish-grade clarity about what you actually want. Trust the answer that comes when you are honest, even if it terrifies you. The portal favors brave honesty.',
    twin_flame: '1111 is the iconic twin-flame number — first meetings, awakenings to the connection, dream visits, sudden recognition. If you have been thinking about your twin and 1111 keeps showing, you are in the active phase, not the random phase.',
    what_to_do: 'When you see 11:11, stop for thirty seconds. Don\'t pull out your phone. Ask one question to the highest version of yourself and listen for the answer. Write it down within the hour.',
    warning: 'Do not waste the portal on small thoughts. 1111 amplifies whatever you focus on — make it the soul-level question, not the petty one.',
    pair_with: 'Aquarius or Aries energy (vision + start), Life Path 11 (the visionary), or moldavite, danburite, or angel aura quartz (portal-amplifiers).',
    key_questions: ['If I really got what I asked for, what would I ask for?', 'What soul-level recognition am I being asked to acknowledge?', 'Whose face came to mind when I read this — and what does my body know about why?']
  },
  {
    num: '1212', slug: '1212', display: '12:12', archetype: 'The Ascension',
    symbol: '🪜', ruling_planet: 'Jupiter', element: 'fire',
    one_liner: 'Step up to a higher version of yourself. The ladder is being held.',
    message: '1212 (often seen as 12:12 on a clock) is the number of ascension — leveling up to a higher version of yourself, your work, your relationships. It combines 12 (completion of a cycle — twelve signs, twelve houses, twelve disciples) with itself, doubled. When it shows up, you are being invited to step into a more elevated, more aligned, more soul-shaped version of your life. The new version requires you to drop the old self-image — the smallness, the over-apology, the fear of taking up space. The ladder is being held; the climb is yours to make. 1212 tends to show up at the start of significant life chapters: the year you finally start the business, the month you commit to the relationship, the week you start the practice that will define the next decade.',
    in_love: 'A relationship leveling up — engagement, marriage, deeper commitment, conscious co-creation. If single, 1212 favors a partner who matches the elevated version of you, not the safe version.',
    in_career: 'A real step up — bigger role, bigger project, bigger audience. Resist the urge to under-claim. The opportunity is calibrated for who you are becoming, not who you have been.',
    twin_flame: 'A 1212 phase is often the ascension into a more conscious, less reactive, less karmic version of the connection. Both people doing their work meet the connection on a higher floor.',
    what_to_do: 'Picture the version of yourself one year from now — the one who already has the thing you are building. Today, make one decision the way that future self would make it.',
    warning: 'Do not bring the old self-image up the new ladder. 1212 ascension requires shedding before climbing.',
    pair_with: 'Sagittarius energy (the elevation), Life Path 3 / 12-reduced (the expression), or selenite (lifts the field).',
    key_questions: ['What is the next version of me asking me to drop?', 'Where am I under-claiming the level I am ready for?', 'What decision would my one-year-from-now self make differently than I would today?']
  }
]

const ANGEL_NUMBERS_BY_SLUG: Record<string, AngelNumber> = Object.fromEntries(ANGEL_NUMBERS.map((a) => [a.slug, a]))
export const ANGEL_NUMBER_SLUGS = ANGEL_NUMBERS.map((a) => a.slug)

export function isAngelNumberSlug(s: string): boolean {
  return s in ANGEL_NUMBERS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ELEMENT_ACCENT: Record<string, { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function angelNumberPageHTML(slug: string): string {
  const a = ANGEL_NUMBERS_BY_SLUG[slug]
  if (!a) return ''
  const accent = ELEMENT_ACCENT[a.element]
  const readingHref = `/gab44/reading?ref=angel-${slug}`

  const title = `${a.display} Angel Number Meaning — ${a.archetype} · Spiritual & Twin Flame · gab44 ✨`
  const description = `What ${a.display} means: the spiritual message, in love, in career, twin flame meaning, what to do when you see it. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Angel Numbers', item: `${SITE_URL}/gab44/angel-numbers` },
          { '@type': 'ListItem', position: 3, name: `${a.display} meaning`, item: `${SITE_URL}/gab44/angel-numbers/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${a.display} Angel Number Meaning — ${a.archetype}`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/angel-numbers/${slug}`,
        about: `Angel number ${a.display} meaning — spiritual message, love, career, twin flame`
      }
    ]
  })

  const otherNumbersHtml = ANGEL_NUMBERS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    return `<a class="num-mini${cur}" href="/gab44/angel-numbers/${q.slug}"><span class="num">${escapeHtml(q.display)}</span><span class="sym">${q.symbol}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/angel-numbers/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/angel-numbers/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --c1:${accent.c1}; --c2:${accent.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}1c 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 56px; line-height: 1.0; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.55em; vertical-align: 8px; padding-right: 10px; }
  h1 .num { background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .arch { font-size: 20px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span { background: var(--bg-2); padding: 5px 12px; border-radius: 999px; }
  h2 {
    font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg);
    letter-spacing: -0.01em;
  }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 44px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .pair-box {
    background: var(--bg-2); border: 1px solid var(--line); border-radius: 12px;
    padding: 16px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .pair-box strong { color: var(--fg); }
  .warn-box {
    background: #fff7ec; border: 1px solid #f0d9b6; border-left: 3px solid #d68a3a;
    border-radius: 10px; padding: 14px 20px; margin: 14px 0; font-size: 14px; color: #5a4318;
  }
  .warn-box strong { color: #3d2c0e; }
  .questions { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .questions h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); font-style: italic; }
  .questions li:last-child { margin-bottom: 0; }
  .reading-cta {
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); padding: 30px 32px; border-radius: 18px; margin: 32px 0;
    box-shadow: 0 8px 28px rgba(20,14,4,0.10);
  }
  .reading-cta h2 { margin: 0 0 8px; font-size: 24px; font-weight: 800; color: var(--fg-on-accent); }
  .reading-cta p { margin: 0 0 18px; opacity: 0.92; font-size: 15px; }
  .reading-cta .price { font-size: 38px; font-weight: 800; margin-right: 8px; }
  .reading-cta .price-note { opacity: 0.85; font-size: 13px; }
  .reading-cta a.btn {
    display: inline-block; background: #fffaf2; color: #1a1815;
    padding: 12px 26px; border-radius: 999px; font-weight: 700; text-decoration: none;
    font-size: 15px; transition: transform 0.05s;
  }
  .reading-cta a.btn:hover { transform: translateY(-1px); }
  .other-nums { margin: 36px 0 22px; }
  .other-nums h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .nums-grid { display: grid; grid-template-columns: repeat(13, 1fr); gap: 4px; }
  @media (max-width: 720px) { .nums-grid { grid-template-columns: repeat(7, 1fr); } }
  @media (max-width: 480px) { .nums-grid { grid-template-columns: repeat(5, 1fr); } }
  .num-mini {
    text-align: center; padding: 8px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 2px;
  }
  .num-mini:hover { border-color: var(--accent); color: var(--accent); }
  .num-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .num-mini .num { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; }
  .num-mini .sym { font-size: 14px; line-height: 1; }
  .related-strip {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .related-strip a { color: var(--accent); text-decoration: none; font-weight: 600; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/angel-numbers">all 13 numbers</a>
      <a href="/gab44/numerology">life paths</a>
      <a href="/gab44/about">sun signs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ angel numbers</div>
    <h1><span class="sym">${a.symbol}</span><span class="num">${escapeHtml(a.display)}</span></h1>
    <p class="arch">${escapeHtml(a.archetype)}</p>
    <p class="sub">${escapeHtml(a.one_liner)}</p>
    <div class="meta-strip">
      <span>angel number · ${escapeHtml(a.display)}</span>
      <span>archetype · ${escapeHtml(a.archetype)}</span>
      <span>ruling planet · ${escapeHtml(a.ruling_planet)}</span>
      <span>element · ${escapeHtml(a.element)}</span>
    </div>

    <article class="core-card">
      <span class="label">the message</span>
      <p class="text">${escapeHtml(a.message)}</p>
    </article>

    <div class="two-col">
      <div class="panel">
        <h3>💞 in love</h3>
        <p>${escapeHtml(a.in_love)}</p>
      </div>
      <div class="panel">
        <h3>💼 in career</h3>
        <p>${escapeHtml(a.in_career)}</p>
      </div>
    </div>

    <h2><span class="icon">🔥</span>twin flame meaning</h2>
    <p>${escapeHtml(a.twin_flame)}</p>
    <p style="font-size:14px;color:var(--fg-dim)">For the full picture, see <a href="/gab44/twin-flames" style="color:var(--accent);font-weight:600">the 8 stages of the twin flame journey</a> — recognition, awakening, testing, crisis, runner &amp; chaser, surrender, reunion, mission.</p>

    <h2><span class="icon">🌱</span>what to do when you see it</h2>
    <p>${escapeHtml(a.what_to_do)}</p>

    <div class="warn-box"><strong>⚠ A note of caution:</strong> ${escapeHtml(a.warning)}</div>

    <div class="pair-box"><strong>Pair with:</strong> ${escapeHtml(a.pair_with)}</div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(a.key_questions[0])}</li>
        <li>${escapeHtml(a.key_questions[1])}</li>
        <li>${escapeHtml(a.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for the season you are actually in</h2>
      <p>This page describes ${a.display}. A <strong>personal reading</strong> looks at your full chart — sun, moon, rising, life-path number, and the angel number that has been showing up for you — and tells you what season you are actually in. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/angel-numbers">all 13 angel numbers</a> · <a href="/gab44/twin-flames">twin flames — 8 stages</a> · <a href="/gab44/numerology">12 life paths</a> · <a href="/gab44/about">12 sun-sign profiles</a> · <a href="/gab44/tarot">tarot</a> · <a href="/gab44/crystals">crystals by sign</a>.
    </div>

    <section class="other-nums">
      <h3>All angel numbers</h3>
      <div class="nums-grid">
        ${otherNumbersHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function angelNumbersIndexHTML(): string {
  const cards = ANGEL_NUMBERS.map((a) => {
    const accent = ELEMENT_ACCENT[a.element]
    return `<a href="/gab44/angel-numbers/${a.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="num-big">${escapeHtml(a.display)}</div>
      <div class="sym">${a.symbol}</div>
      <div class="name">${escapeHtml(a.archetype)}</div>
      <div class="ruler">${escapeHtml(a.ruling_planet)} · ${escapeHtml(a.element)}</div>
      <div class="teaser">${escapeHtml(a.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Angel Numbers Meanings — 111, 222, 333, 444, 555, 666, 777, 888, 999, 1010, 11:11, 12:12 · gab44 ✨</title>
<meta name="description" content="What every common angel number means: 111 (Doorway), 222 (Alignment), 333 (Witnesses), 444 (Foundation), 555 (Threshold), 666 (Reset), 777 (Confirmation), 888 (Abundance), 999 (Completion), 000 (Source), 1010 (Awakening), 11:11 (Portal), 12:12 (Ascension). Spiritual + twin flame meanings. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/angel-numbers" />
<meta property="og:title" content="Angel Numbers Meanings — All 13 (111, 222, 333, 444, 1111, 12:12, more)" />
<meta property="og:description" content="Thirteen evergreen guides to the angel numbers people see most often." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh; }
  .wrap { max-width: 980px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 660px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 8px; }
  .intro p:last-child { margin: 0; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .num-big { font-family: 'JetBrains Mono', monospace; font-size: 28px;
    font-weight: 800; margin-bottom: 4px; letter-spacing: -0.02em;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .card .sym { font-size: 22px; line-height: 1; margin-bottom: 6px; }
  .card .name { font-size: 16px; font-weight: 700; margin-bottom: 2px; color: var(--fg); }
  .card .ruler { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
  .reading-strip { background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center; }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--fg-on-accent); }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/numerology">life paths</a>
      <a href="/gab44/about">12 sun-sign profiles</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/crystals">crystals</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Angel numbers — what those <span class="accent">repeating digits</span> are saying.</h1>
    <p class="sub">When the same number sequence keeps showing up — on clocks, license plates, receipts, page counts — it's not coincidence. Thirteen evergreen guides to the angel numbers people see most often, written warm and clear.</p>

    <div class="intro">
      <h3>How to read this page</h3>
      <p>If a particular number has been showing up for you, click straight through — each guide covers the spiritual message, what it means in love and in career, the twin-flame reading, what to do when you see it, and a small caution. Scroll-friendly, ten minutes.</p>
      <p>If you don't have a number in mind, the most-seen ones globally are <strong>1111</strong>, <strong>222</strong>, and <strong>444</strong>. Start there.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know what season you are actually in?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your full chart — sun, moon, rising, life-path number, and the angel number that's been finding you — to tell you what's really happening underneath. <a href="/gab44/reading?ref=angel-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
