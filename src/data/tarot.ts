// Tarot Major Arcana SEO funnel — /gab44/tarot (index) + /gab44/tarot/{card} (22 pages).
// Targets very-high-volume evergreen keywords: "fool tarot meaning", "death tarot card",
// "the tower tarot", "what does the lovers card mean". Each card profile is hand-written,
// distinct content angle from generic-meaning farms (deeper, warmer, gab44 voice).
// Each card routes to the $9 reading via ?ref=tarot-{slug}.
// Zero LLM cost — content baked into the bundle.

import { SITE_URL } from '@/lib/identity'

export interface TarotCard {
  slug: string
  num: number
  name: string
  display: string         // e.g., "The Fool"
  symbol: string          // emoji
  element: string         // air/fire/water/earth or planet
  ruler: string           // astrological correspondence
  yes_no: 'yes' | 'no' | 'maybe'
  one_liner: string
  upright: string
  reversed: string
  love: string
  career: string
  spiritual: string
  when_pulled: string
  symbols: [string, string, string]  // 3 symbol notes
}

export const TAROT_MAJORS: TarotCard[] = [
  {
    slug: 'the-fool', num: 0, name: 'fool', display: 'The Fool', symbol: '🌬️',
    element: 'Air', ruler: 'Uranus', yes_no: 'yes',
    one_liner: 'A leap that looks reckless from the outside and inevitable from the inside.',
    upright: 'The Fool is the beginning before the beginning — the moment before the foot leaves the cliff. The character on the card looks up, not down, because the first chapter of any new thing has to be entered with more faith than evidence. When this card lands, the universe is offering a door that doesn\'t come with a guarantee. The dog at the heel is the small voice of caution; the small bag holds everything you actually need. The Fool is not naive. The Fool has chosen, knowing.',
    reversed: 'Reversed, the Fool warns of leaping without listening. The instinct that usually says yes is being overridden by impulse, recklessness, or the urge to escape something rather than move toward something. There is a difference between a beginning and a flight. Sit with the question: am I walking toward the new chapter, or running from the old one? The card returns upright the moment the answer is honest.',
    love: 'In love, the Fool says: a fresh start is on the table. A new connection, a redefined dynamic with someone you already know, a willingness to let love feel new again. If single, an unexpected meeting that doesn\'t fit your usual type. If partnered, a shared adventure that breaks a rut. The risk: don\'t romanticize the leap so hard you ignore an actual yellow flag.',
    career: 'In career, the Fool blesses a beginning that doesn\'t yet have a paycheck attached — the first sketch, the first prototype, the first conversation that turns into a job a year from now. If you\'re considering a pivot, this is the universe co-signing it. Ask for the meeting. Send the message you\'ve been drafting. The structure you need will arrive after the leap, not before.',
    spiritual: 'Spiritually, the Fool is trust. Trust that you are held even when you can\'t see the floor. The card is numbered 0 because zero is the empty space the rest of the journey is born inside. Beginner\'s mind isn\'t weakness; it\'s the only state in which real learning happens. Drop a layer of expertise. Re-meet the basics with awe.',
    when_pulled: 'When you pull the Fool, something is asking to begin. Not perfectly, not yet finally, just begin. The leap is small but real. Take it the way the card character does — eyes up, bag light, dog at heel.',
    symbols: ['the cliff edge — beginning is also a kind of ending', 'the small white dog — instinct, loyalty, the body\'s yes', 'the white rose — purity of intention, not innocence']
  },
  {
    slug: 'the-magician', num: 1, name: 'magician', display: 'The Magician', symbol: '🜔',
    element: 'Air', ruler: 'Mercury', yes_no: 'yes',
    one_liner: 'The four tools are already on the table. Pick one up.',
    upright: 'The Magician stands at a table holding wand, cup, sword, pentacle — fire, water, air, earth — every element of creation arranged within reach. Above the head is the lemniscate, the sideways infinity that says: you are connected to the source, and the source moves through your hands. This card is potential made operative. It is the moment of declaring out loud what you intend, and taking the first concrete step toward making it real. The magic is not mystical; it\'s the discipline of choosing one channel and pouring through it.',
    reversed: 'Reversed, the Magician points to scattered energy, manipulation, or talent used cynically. You may be selling something you don\'t believe in, performing capability you don\'t have, or letting someone else perform it on you. The fix is the same as the gift: get honest about what you actually have and what you actually want, and align the two.',
    love: 'In love, the Magician asks you to declare. Stop hinting. Stop testing. Say the actual thing — to a person, to yourself, to the version of yourself making decisions for the next ten years. If single, the right relationship begins when you stop performing availability and start broadcasting the real one. If partnered, ask for what you actually need.',
    career: 'In career, this is the card of skilled execution. You have the materials. You\'ve done the prep. The only thing missing is the one move you haven\'t made yet — sending the proposal, opening the doc, building the thing instead of researching the thing. Magic is finished work, not planned work.',
    spiritual: 'Spiritually, the Magician is the realization that you are a channel, not a generator. The infinity above the head is the source; you are the conduit through which it expresses in this lifetime. Stop apologizing for the gift. Stop dimming. The world doesn\'t need more talented people hiding — it needs the ones who already know to show up.',
    when_pulled: 'When you pull the Magician, the universe is reminding you that you have what you need. Not someday. Now. The next chapter starts with a single deliberate act.',
    symbols: ['the four suits on the table — every element is yours to work with', 'the lemniscate above the head — connected to the infinite', 'the wand held high, the finger pointing down — as above, so below']
  },
  {
    slug: 'the-high-priestess', num: 2, name: 'high-priestess', display: 'The High Priestess', symbol: '🌙',
    element: 'Water', ruler: 'Moon', yes_no: 'maybe',
    one_liner: 'The answer is already in you. Stop asking; start listening.',
    upright: 'The High Priestess sits between two pillars, one black, one white, holding a partly hidden scroll. She is the threshold between the conscious and the unconscious, between what you know and what you know-but-haven\'t-said-yet. This card almost never asks for action. It asks for stillness. The information you need is not external; it is leaking through dreams, body sensations, the offhand comment you keep replaying. Get quiet enough to read it.',
    reversed: 'Reversed, the High Priestess warns that you\'re ignoring intuition or that intuition has become noise — anxiety dressed up as knowing. The fix is the same: slow the system down. Sleep. Walk without a podcast. Sit without a screen. The signal returns when the bandwidth clears.',
    love: 'In love, the Priestess says: you already know. The thing you keep trying to think your way out of, the thing you reframe and rationalize, is a thing your body decided about a long time ago. This isn\'t permission to act recklessly — it\'s permission to stop pretending you don\'t know. If single, listen to the small voice about who you actually want, not who you\'re supposed to want.',
    career: 'In career, this is rarely the card of charging forward. It\'s the card of pausing long enough to hear which direction is yours. The right move may not be visible in the spreadsheet; it may show up in a dream, a chance encounter, a phrase you read twice. Wait for the right move; don\'t force a wrong one to fit a deadline.',
    spiritual: 'Spiritually, the High Priestess is the inner teacher. The version of you that already knows. Practices that build her: meditation, journaling, dream-tracking, time alone with no input. The veil between worlds is thin in this card; treat the things that arrive in stillness as real.',
    when_pulled: 'When you pull the Priestess, stop looking outside. The next chapter is being written in you right now, in pencil, in a language you understand if you slow down. Listen.',
    symbols: ['the two pillars Boaz and Jachin — duality, threshold, between worlds', 'the partly visible TORA scroll — the wisdom isn\'t hidden, just unhurried', 'the moon at the foot — cycles, intuition, what comes and goes']
  },
  {
    slug: 'the-empress', num: 3, name: 'empress', display: 'The Empress', symbol: '🌷',
    element: 'Earth', ruler: 'Venus', yes_no: 'yes',
    one_liner: 'Abundance, beauty, fertility — the soft yes that the body recognizes as home.',
    upright: 'The Empress sits in a field of wheat, surrounded by trees, water, the symbol of Venus on her shield. She is mother in every sense — biological, creative, nurturing, sensual. This card is the lush yes. Things are growing. Bodies feel held. Creative projects move from idea to flesh. The Empress doesn\'t hustle the harvest; she trusts that what was planted is doing its work underground. When she shows up, the next chapter is one of gentle, unmistakable abundance.',
    reversed: 'Reversed, the Empress points to over-giving, smother-love, or creative blockage. You may be pouring into others without keeping any for yourself, or holding a creative thing so tightly it can\'t breathe. The fix: receive. Let yourself be cared for. Let the project rest. The garden grows whether you watch it or not.',
    love: 'In love, the Empress is sweetness, embodiment, sensuality — the relationship that makes you taste your food more, the touch that grounds you back into your body. If single, this card often heralds a relationship that begins through the body more than the mind. If partnered, return to the senses together: shared meals, slow mornings, fewer screens.',
    career: 'In career, the Empress is the creative project bearing fruit, the side thing turning into the main thing, the work that grows because you\'ve been good to it. Money themes show up — earned, not gambled. If self-employed, the offer that\'s been quietly maturing is ready to harvest.',
    spiritual: 'Spiritually, the Empress is the embodied sacred. God is not only in the meditation cushion; god is also in the strawberry, the bath, the long walk, the warm afternoon. Embodied joy is a spiritual practice. The body is not the obstacle to the divine; the body is the place the divine arrives.',
    when_pulled: 'When you pull the Empress, slow down and notice what is already growing. Tend it. Receive it. The next chapter is about presence to abundance, not pursuit of more.',
    symbols: ['the wheat field — abundance ripening on its own time', 'the Venus shield — love, beauty, the divine feminine', 'the flowing river — emotion in motion, life-force unblocked']
  },
  {
    slug: 'the-emperor', num: 4, name: 'emperor', display: 'The Emperor', symbol: '🜂',
    element: 'Fire', ruler: 'Aries', yes_no: 'yes',
    one_liner: 'Build the structure. The dream wants a frame to live inside.',
    upright: 'The Emperor sits on a stone throne, ram heads at the corners, wearing armor under his robe. He is the architect, the boundary-setter, the father in the best sense — the one who builds the walls inside which the soft things can grow safely. This card asks for structure. The ideas are great; now they need a framework. The vision is real; now it needs a calendar, a budget, a rule. The Emperor doesn\'t mean rigidity; he means the trustworthy container that lets the rest of life flourish.',
    reversed: 'Reversed, the Emperor warns of rigidity, controlling behavior, or the absence of healthy structure. You may be over-controlling something that needs to breathe, or you may be leaderless in your own life — waiting for permission, deferring to others. The medicine is the same: take honest authority over your own domain, and let others have authority over theirs.',
    love: 'In love, the Emperor is the relationship that gets serious — boundaries, agreements, who-does-what-when. If single, this card asks you to clarify your standards before the next person walks in; the right person needs to fit a real frame, not a fantasy. If partnered, the conversation about commitment, money, or shared structure is overdue.',
    career: 'In career, the Emperor is leadership. Stepping into authority you\'ve been hovering near. Setting rules others will follow, holding the line on quality, building the team or the system that will carry the next chapter. If you\'ve been operating without a plan, this card is asking you to write one.',
    spiritual: 'Spiritually, the Emperor is the sacred masculine — clarity, boundaries, the no that protects the yes. He teaches that limits are not a failure of love; they are the architecture of love. The path is ordered. The discipline is tender. The rule is also the prayer.',
    when_pulled: 'When you pull the Emperor, the next chapter wants a structure. Build it. Step into authority. The dream needs a frame, and the frame is yours to make.',
    symbols: ['the stone throne — earned, durable authority', 'the ram heads at the corners — Aries energy, willingness to lead', 'the ankh-topped scepter — life-force directed, not suppressed']
  },
  {
    slug: 'the-hierophant', num: 5, name: 'hierophant', display: 'The Hierophant', symbol: '⛪',
    element: 'Earth', ruler: 'Taurus', yes_no: 'maybe',
    one_liner: 'Tradition, mentorship, the lineage older than your one short life.',
    upright: 'The Hierophant sits between two pillars, two acolytes kneeling at his feet, one hand raised in blessing, one holding crossed keys. He is the keeper of tradition — religion, institution, the inherited ways of doing a thing. When he shows up, the path through your question is not the original one; it\'s the older one. The mentor, the rule, the proven method. Sometimes the right move isn\'t to invent. It\'s to apprentice. Find a teacher. Read the canon. Honor the lineage that already figured this out.',
    reversed: 'Reversed, the Hierophant is the moment to break with tradition. The inherited rule no longer fits; the institution is hollow; the mentor became a cage. The medicine is to claim your own authority — not in rebellion, but in earned divergence. Know what you\'re walking away from before you walk.',
    love: 'In love, the Hierophant brings traditional structures into focus — marriage, family, public commitment, religious or cultural rituals around the relationship. If single, this card can mean a relationship through traditional channels (a setup, a community event, family introductions). If partnered, conversations about formalizing, integrating with families, or aligning around shared values.',
    career: 'In career, the Hierophant is the right time to study, certify, apprentice, or join an established institution. The expert exists; go learn from them. The credential exists; go earn it. This is rarely the card of going it alone — it\'s the card of standing on shoulders.',
    spiritual: 'Spiritually, the Hierophant is the teacher in the lineage. The path that has been walked before you. Religion at its best — a structured wisdom older than you, useful precisely because it\'s older than you. Read the texts. Sit at the feet of someone who has done the inner work for decades. Tradition is not always the enemy of growth; sometimes it\'s the trellis.',
    when_pulled: 'When you pull the Hierophant, the universe is recommending the older path. A teacher, a tradition, an institution. Apprentice rather than reinvent.',
    symbols: ['the crossed keys — open and closed, the gates of mystery', 'the two pillars — tradition\'s structure, supportive not imprisoning', 'the two kneeling acolytes — lineage transmitted student to student']
  },
  {
    slug: 'the-lovers', num: 6, name: 'lovers', display: 'The Lovers', symbol: '💞',
    element: 'Air', ruler: 'Gemini', yes_no: 'yes',
    one_liner: 'Choice. Not who do I love — who am I when I love this way?',
    upright: 'The Lovers shows two figures under an angel\'s blessing — but the card is not really about the two of them. It\'s about the choice that creates them. Every meaningful union begins with a values-level decision: I choose this, and in choosing this, I become a particular self. The card can be a romantic relationship, but more deeply it\'s any moment when love asks you to align — what you do with what you say you want. The angel above is benediction. The choice below is yours.',
    reversed: 'Reversed, the Lovers points to a misalignment — between values, between what you want and what you\'re tolerating, between the relationship and the self you became inside it. The fix is honesty about what is actually being chosen, by whom, every day. Sometimes that\'s a hard conversation. Sometimes it\'s the end of one. Sometimes it\'s the beginning of a deeper one.',
    love: 'In love, the Lovers blesses partnerships built on shared values, not shared symptoms. If single, a connection is forming — or asking to form — that has the texture of mutual choice, not desperation. If partnered, a values-level choice is on the table: how you spend your time together, what you build, what you no longer tolerate.',
    career: 'In career, the Lovers is the values-aligned choice. The job offer that pays less but means more. The collaborator whose ethics match yours. The creative partnership that produces something neither of you could alone. If you\'re between options, the card asks: which one matches who you actually are, not who you used to be?',
    spiritual: 'Spiritually, the Lovers is union — between the conscious and unconscious, between the inner masculine and inner feminine, between you and the version of you that knows what you actually want. The relationship outside is always a mirror of the integration inside. Tend the inner relationship; the outer one stabilizes in response.',
    when_pulled: 'When you pull the Lovers, a values-aligned choice is being asked of you. Choose the thing that matches who you are now, not who you were. The angel blesses the alignment, not the convenience.',
    symbols: ['the angel — divine witness to a values-level choice', 'the tree of knowledge with the serpent — awareness, awakened choice', 'the two figures, naked — nothing hidden between them']
  },
  {
    slug: 'the-chariot', num: 7, name: 'chariot', display: 'The Chariot', symbol: '🛡️',
    element: 'Water', ruler: 'Cancer', yes_no: 'yes',
    one_liner: 'Two horses, one driver. Win by holding the reins, not by whipping them.',
    upright: 'The Chariot shows a figure in armor driving a chariot pulled by two sphinxes — one black, one white. The driver holds no reins; the sphinxes are controlled by will alone. This card is victory through directed will. You have opposing forces inside you (ambition and rest, action and surrender, head and heart) and the path to the next chapter requires holding both without letting either run the show. Pure willpower against the world burns out. Will integrated with the inner contradiction wins.',
    reversed: 'Reversed, the Chariot warns of a runaway — moving fast in a direction that isn\'t yours, or stalling because the inner forces aren\'t aligned. The medicine is to slow down enough to notice what\'s actually pulling. You can\'t arrive somewhere true on someone else\'s horses.',
    love: 'In love, the Chariot is the relationship that requires you to stay in your own seat. Co-regulation, not enmeshment. If single, a connection that asks you to bring your fullest self, not the contracted version. If partnered, the conversation about pace, direction, or commitment that you\'ve been avoiding — have it from the driver\'s seat, not the passenger\'s.',
    career: 'In career, the Chariot is decisive forward motion. Choose the lane. Set the deadline. Move. The competing options will multiply forever if you let them; pick one, drive it, and let the other shadows fall. Victory is available — but it\'s for the driver, not the deliberator.',
    spiritual: 'Spiritually, the Chariot is integration. The shadow and the light pulling the same wagon. Stop wishing the shadow away; it\'s half the locomotion. The mature spiritual life is not the one with no opposing forces; it\'s the one where you\'ve learned to hold the reins.',
    when_pulled: 'When you pull the Chariot, the next chapter is yours to drive. Two sides of you are pulling; align them, set a direction, and move.',
    symbols: ['the black and white sphinxes — opposing forces directed by will', 'the starry canopy — divine sanction over earthly action', 'the armor — protected purpose, not vulnerability disguised as confidence']
  },
  {
    slug: 'strength', num: 8, name: 'strength', display: 'Strength', symbol: '🦁',
    element: 'Fire', ruler: 'Leo', yes_no: 'yes',
    one_liner: 'Soft hand on the lion\'s jaw — strength is the courage to be tender.',
    upright: 'Strength shows a woman gently closing the mouth of a lion — not by force, but by presence. The lemniscate floats above her head. This card is courage redefined: not the absence of fear, but the steady relationship with everything wild and powerful in you. You don\'t conquer the lion of anger, hunger, grief — you befriend it. You learn its rhythms. You hold its gaze. The card is patience, inner authority, the kind of power that doesn\'t need to shout.',
    reversed: 'Reversed, Strength points to overcontrol or self-doubt. You may be muscling through with willpower when softness would do more, or you may be doubting a capacity that is genuinely there. The medicine is to drop into the body and listen. The lion isn\'t the enemy. The lion is the part of you that knows.',
    love: 'In love, Strength is the relationship that is held with patience, even through the hard parts. If single, a connection that asks you to lead with steadiness rather than performance. If partnered, the conflict that resolves not by winning but by both of you softening at the same time.',
    career: 'In career, Strength is the leadership style of presence. You don\'t have to be the loudest. The team trusts the person who is calm under load. The deal closes because you didn\'t panic. The pivot works because you didn\'t flinch. Quiet, steady, irreplaceable.',
    spiritual: 'Spiritually, Strength is the daily practice of meeting yourself with kindness. Self-discipline as love, not punishment. The animal in you is sacred; the work is integration, not exile. The lemniscate above the head is the same as the Magician\'s — same source, different application: there it was creation, here it is endurance.',
    when_pulled: 'When you pull Strength, you are stronger than you feel. The next chapter is held with a soft hand and a steady gaze. The wild thing in you is on your side.',
    symbols: ['the soft hand on the lion\'s jaw — power without force', 'the lemniscate above the head — divine source channeled into endurance', 'the white robe and flowers — purity of intention, gentleness as strength']
  },
  {
    slug: 'the-hermit', num: 9, name: 'hermit', display: 'The Hermit', symbol: '🕯️',
    element: 'Earth', ruler: 'Virgo', yes_no: 'no',
    one_liner: 'Withdraw. The lamp is not for the world yet; it\'s for the path under your feet.',
    upright: 'The Hermit stands alone on a snowy peak, holding a lantern with a six-pointed star. He has climbed away from the noise. This card is solitude as a spiritual technology — not loneliness, not depression, but deliberate withdrawal so the inner voice can be heard. Sometimes the next chapter is found by going on retreat, taking the long walk, ending the social cycle that is drowning the signal. The Hermit is patient. The lantern is small. But the light is real.',
    reversed: 'Reversed, the Hermit warns of isolation that has tipped into avoidance, or of refusing the call to go inward. You may be hiding in solitude, or refusing solitude when the soul is begging for it. The fix is honesty about what kind of withdrawal is medicine and what kind is wound.',
    love: 'In love, the Hermit asks for space. If single, this is rarely a card of new romance — it\'s a card of the inner work that prepares you for the next real one. If partnered, time alone is medicine, not rejection. The relationship gets stronger when you each go reclaim your own light.',
    career: 'In career, the Hermit is the deep-work season. Cancel the meetings. Close the inbox. Go make the thing that requires you to disappear. The visible chapter that follows will be born from this invisible one.',
    spiritual: 'Spiritually, the Hermit is the inner pilgrimage. The wisdom that is only available when the social self quiets down. Practices: silent retreat, fasting from input, long unstructured time. The lantern\'s star is the inner self; the light it gives is enough to see the next step, no further.',
    when_pulled: 'When you pull the Hermit, withdraw on purpose. The next chapter is being prepared in the quiet. Don\'t fill the silence — it has something to say.',
    symbols: ['the lantern with the six-pointed star — inner light made portable', 'the staff — the support that you carry, that carries you', 'the snowy peak — clarity gained by altitude, not crowd']
  },
  {
    slug: 'wheel-of-fortune', num: 10, name: 'wheel', display: 'Wheel of Fortune', symbol: '🎡',
    element: 'Fire', ruler: 'Jupiter', yes_no: 'yes',
    one_liner: 'The wheel turns. Your job is to ride it well, not to stop it.',
    upright: 'The Wheel of Fortune shows a great wheel turning between four sky-creatures (eagle, lion, ox, angel — the fixed signs Scorpio, Leo, Taurus, Aquarius) with the words TARO/ROTA inscribed around it. This card is destiny in motion. Cycles end. New ones begin. Things you didn\'t plan tilt in your favor; things you counted on shift. The card asks for a different relationship with control: you are not the wheel. You are not even the one turning it. But you are absolutely the one who chooses what to do as it turns.',
    reversed: 'Reversed, the Wheel points to feeling stuck in a downturn or resisting a cycle that wants to complete. The medicine is acceptance, not surrender — name the cycle, honor what it taught, and lean into the next quarter-turn. Resistance to the wheel doesn\'t stop the wheel; it just exhausts the rider.',
    love: 'In love, the Wheel often signals a turning point — a sudden meeting, an unexpected reconciliation, the end of a long stuck pattern. If single, a connection arrives by a path you didn\'t plot. If partnered, a phase of the relationship is ending and a different one is beginning; let it.',
    career: 'In career, the Wheel is luck made visible. The opportunity you couldn\'t have engineered. The contact you didn\'t cultivate but who appears anyway. The pivot that arrives because the field shifted, not because you forced it. Your job is to be ready when the wheel lifts you.',
    spiritual: 'Spiritually, the Wheel is the cosmic order beneath the apparent chaos. Destiny and free will are not opposites; they are partners. The wheel will turn either way. The question is whether you\'ll ride it consciously or get dragged. Practices: notice the cycles in your own life, mark the seasons, work with the moon if it helps.',
    when_pulled: 'When you pull the Wheel, expect motion you didn\'t initiate. The next chapter arrives partly by your effort and partly by something larger. Trust the turn.',
    symbols: ['the four fixed-sign creatures — stability around motion', 'the snake descending, the Anubis ascending — the wheel takes and gives', 'the sphinx atop the wheel — wisdom that holds steady through the turning']
  },
  {
    slug: 'justice', num: 11, name: 'justice', display: 'Justice', symbol: '⚖️',
    element: 'Air', ruler: 'Libra', yes_no: 'maybe',
    one_liner: 'The truth, weighed. The consequences, owned. The future, earned.',
    upright: 'Justice sits on a throne holding scales in one hand and an upright sword in the other. The crown, the red robe, the directly-meeting gaze. This card is honesty made operative. Cause and effect are at work. The choices you made are about to produce their fruit. The scales are the moral arithmetic of a life; the sword is the willingness to cut what is no longer aligned. Justice is not punishment. Justice is the truth coming forward — and the offer to align with it.',
    reversed: 'Reversed, Justice warns of dishonesty — to others or to yourself. A consequence is being avoided, a truth is being papered over, a relationship or contract is out of balance and the imbalance is starting to show. The medicine is alignment: tell the truth, fix the imbalance, take the responsibility. The sword is heavier when avoided.',
    love: 'In love, Justice asks: is this fair? Are both people getting what they\'re giving? The card often shows up around contracts (marriage, prenups, divorces, custody) but also around the unwritten contracts every couple builds and breaks. If single, the next relationship will reflect what you\'re actually willing to be honest about. If partnered, balance the books — emotionally, practically, both.',
    career: 'In career, Justice is the legal moment, the contract, the audit, the formal review. It\'s also the karmic payday — the work you did honestly is being counted, the corner you cut is being noticed. Tell the truth on the form. Sign the agreement you can stand behind. Adjust the imbalance now, before someone else has to.',
    spiritual: 'Spiritually, Justice is the law of cause and effect. Every action is a seed. Every word is a ripple. The card is not punitive — it\'s clarifying. The universe is keeping perfect books. Stop trying to outrun your own; come into alignment.',
    when_pulled: 'When you pull Justice, the truth is asking to be acknowledged. The next chapter belongs to the version of you who can tell it cleanly.',
    symbols: ['the scales — moral measurement, the books being balanced', 'the upright sword — clarity, the cut that aligns', 'the direct gaze — nothing hidden, nothing softened']
  },
  {
    slug: 'the-hanged-man', num: 12, name: 'hanged-man', display: 'The Hanged Man', symbol: '🙃',
    element: 'Water', ruler: 'Neptune', yes_no: 'no',
    one_liner: 'Suspended. The world looks different upside-down — that\'s the point.',
    upright: 'The Hanged Man hangs upside-down from a tree, one foot bound, hands behind back, a halo of light around his head. He is not in pain. He is in suspension — and inside the suspension, a new perspective. This card is the surrender that produces clarity. The thing you\'ve been pushing won\'t move because it isn\'t yet supposed to. The stuck-ness is not a failure; it\'s an invitation to invert. Stop trying. Look from underneath. The answer is upside-down from where you\'ve been searching.',
    reversed: 'Reversed, the Hanged Man warns of unnecessary suffering, martyrdom, or refusing to surrender when surrender is what\'s being asked. The fix: notice the difference between sacrifice that serves and sacrifice that just performs hardship. Drop what doesn\'t need to be carried.',
    love: 'In love, the Hanged Man is the season of pause. Either single and not actively dating, or partnered through a held-breath chapter. If single, this is rarely the card of "manifest your soulmate now" — it\'s the card of letting the soulmate-self mature. If partnered, a pause in the dynamic is medicine; the relationship is being re-seen.',
    career: 'In career, the Hanged Man often shows up around projects that need to wait, or around the conscious choice to step back from a thing you\'ve been pushing. The hidden gift: time spent not-doing reveals what should be done. The pause is the strategy.',
    spiritual: 'Spiritually, the Hanged Man is the surrender that opens the inner sight. Old frameworks dissolve; the new one isn\'t here yet; you hang in the in-between, halo and all. Practices: silent retreats, fasting from goals, deliberate stillness. The halo says: this is not failure. This is initiation.',
    when_pulled: 'When you pull the Hanged Man, the next chapter is found by surrender, not effort. Hang where you are. The sight is different from up there.',
    symbols: ['the bound foot — voluntary suspension, not punishment', 'the halo around the head — the light that comes through stillness', 'the calm face — peace inside the apparent paradox']
  },
  {
    slug: 'death', num: 13, name: 'death', display: 'Death', symbol: '🦴',
    element: 'Water', ruler: 'Scorpio', yes_no: 'no',
    one_liner: 'Ending. Necessary. Almost never literal. Always honest.',
    upright: 'Death rides a white horse, banner of the white rose against a dark sky, while figures kneel before him. This card is rarely about physical death; it is about the ending that has to happen for the next chapter to begin. The relationship that has to close. The job that has to end. The version of yourself that has to stop trying to be the only version of you. Death is not cruel. Death is the mercy of finality. The thing you\'ve been mostly-letting-go is being finally let go. Honor what was. Let it complete.',
    reversed: 'Reversed, Death points to a transformation that is being resisted — a clinging to what is already over. The medicine is to let the ending arrive. Resistance prolongs the pain; surrender shortens it. What is dying is dying; what is dead is dead. Bless it, and turn the page.',
    love: 'In love, Death is the end of a chapter — sometimes a relationship, more often an old version of the dynamic. The pattern that hasn\'t worked since 2023 is not going to start working in 2026. If single, a season of not-dating may be the right death; if partnered, a part of the relationship is composting and the soil is more fertile because of it.',
    career: 'In career, Death is the resignation, the closure, the cancellation, the official end. It\'s also the inner death — the version of you that has been trying to be everything to every project. Let the role end. Let the title go. The thing being born can\'t be born until the old container empties out.',
    spiritual: 'Spiritually, Death is initiation. The mystical traditions all have a death-and-rebirth at the heart, because all real transformation involves the end of something the small self thought it was. Trust the dying. The white rose on the banner is the promise — what comes next is purer than what is leaving.',
    when_pulled: 'When you pull Death, an ending is non-negotiable. The next chapter cannot begin until this one finishes. Bless it, grieve it, let it go.',
    symbols: ['the white horse — purity inside the transformation', 'the white rose banner — what is reborn after the ending', 'the rising sun in the distance — the new day that the ending makes possible']
  },
  {
    slug: 'temperance', num: 14, name: 'temperance', display: 'Temperance', symbol: '🧪',
    element: 'Fire', ruler: 'Sagittarius', yes_no: 'yes',
    one_liner: 'Mix the elements slowly. The right alchemy is patient.',
    upright: 'Temperance shows an angel pouring liquid between two cups, one foot on land, one in water. This card is alchemy — the slow, patient blending of opposites until something new emerges. Spirit and matter. Action and rest. The dream and the realistic timeline. The card asks for moderation, not as deprivation but as artistry. The right life is not made of extremes alternating; it is made of a deliberate balance held over time.',
    reversed: 'Reversed, Temperance warns of imbalance — overdoing one element, under-investing in another, or trying to force a fast result that requires slow synthesis. The medicine is patience and the willingness to recalibrate. Slow down. Mix again.',
    love: 'In love, Temperance is the relationship that is built rather than discovered. Different temperaments learning each other\'s pace. The blend that takes years and is worth the years. If single, a connection that asks for measured pace, not lightning. If partnered, the daily small adjustments that make the long road possible.',
    career: 'In career, Temperance is the long-game project. The skill that takes a decade. The business that compounds. The reputation built brick by brick. This card almost never blesses shortcuts; it blesses the steady artisans. The output is excellent because the process was patient.',
    spiritual: 'Spiritually, Temperance is the integration of opposites — masculine and feminine, light and shadow, spirit and body. The angel\'s feet (one in water, one on land) say: the path is not transcendence-of-the-body or surrender-to-it but the patient marriage of both. The cups pour back and forth indefinitely. This is the work.',
    when_pulled: 'When you pull Temperance, slow down. The next chapter is alchemy, not addition. Mix carefully. Let the synthesis happen on its own time.',
    symbols: ['the two cups — opposites in conversation, never finally resolved', 'one foot on land, one in water — embodied and inspired at once', 'the triangle on the chest — divine fire, ordered']
  },
  {
    slug: 'the-devil', num: 15, name: 'devil', display: 'The Devil', symbol: '😈',
    element: 'Earth', ruler: 'Capricorn', yes_no: 'no',
    one_liner: 'The chains are loose. You can take them off. You haven\'t.',
    upright: 'The Devil shows a horned figure presiding over two chained humans. The chains around their necks are loose enough to slip off — they just haven\'t. This card is bondage of one\'s own making. Addiction, obsession, the relationship you keep returning to that doesn\'t serve you, the pattern you can name and still re-enact. The Devil is not external evil. The Devil is the part of you that finds the cage strangely comfortable. Naming it is half the freedom. The other half is walking out.',
    reversed: 'Reversed, the Devil is the chain coming off. The recognition. The breaking-out. The relationship ended, the substance put down, the pattern finally seen and refused. The hard part is starting; the harder part is staying out. Both are doable. Both are happening right now.',
    love: 'In love, the Devil is unhealthy attachment, codependence, or the dynamic that thrives on intensity instead of intimacy. If single, the pull toward the unavailable is a flag; ask what the unavailability is doing for you. If partnered, the cycle that exhausts both of you is one of you can name, and a no can break.',
    career: 'In career, the Devil is the toxic job, the boss who weaponizes need, or the addiction to status / money / external validation that is shaping decisions you wouldn\'t otherwise make. The card asks: what is the cage costing me, and is the comfort of the cage worth it?',
    spiritual: 'Spiritually, the Devil is shadow work — meeting the parts of yourself you\'ve been pretending aren\'t yours. The lust, the greed, the rage, the fear. Not to indulge them; to integrate them. Repressed shadow runs the show from underground. Acknowledged shadow is at the table and easier to negotiate with.',
    when_pulled: 'When you pull the Devil, look at what you\'re still chained to that you\'ve been pretending you aren\'t. The chain is loose. The exit is available. The choice is yours.',
    symbols: ['the loose chains — the bondage is voluntary, however unconscious', 'the horns and bat wings — the shadow you\'ve disowned', 'the inverted torch — light pointing the wrong way until you turn it']
  },
  {
    slug: 'the-tower', num: 16, name: 'tower', display: 'The Tower', symbol: '⚡',
    element: 'Fire', ruler: 'Mars', yes_no: 'no',
    one_liner: 'The lightning strikes what was false. What was true survives.',
    upright: 'The Tower shows a tall structure struck by lightning, crown blown off, two figures falling. It looks catastrophic. It is, in a way. But the Tower is mercy in disguise: the structure being demolished was built on something untrue, and could not have stood much longer. A relationship built on a lie. A career built on shouldn\'t. A self-image that no longer fits. The lightning is sudden because gradual was tried first and it didn\'t take. After the Tower comes the Star — but you have to walk through the rubble to get there.',
    reversed: 'Reversed, the Tower is the slow-motion version: a collapse you sense coming, a denial that is starting to crack, a slower demolition because you\'ve started to notice. The medicine is to let it happen rather than prop it up. What is going has to go.',
    love: 'In love, the Tower is the sudden ending or the sudden truth. The mask comes off. The illusion shatters. If single, a fantasy about someone or something is breaking — and that\'s a kindness. If partnered, a real conversation is forcing itself; either the relationship survives the storm or it shouldn\'t have been a relationship in the first place.',
    career: 'In career, the Tower is the firing, the layoff, the company collapse, the deal that falls through, the public correction. It\'s rarely fun in the moment. It almost always opens space for something more aligned. The wreckage is generative.',
    spiritual: 'Spiritually, the Tower is the breaking of false constructs — the ego\'s scaffolding, the spiritual bypass, the identity that was performance. The lightning is grace, even when it doesn\'t feel like it. What is real survives the fall. What didn\'t was never going to make it.',
    when_pulled: 'When you pull the Tower, expect a structure to fall. Don\'t prop it up. The crash makes room for what you actually need. The Star is just past the rubble.',
    symbols: ['the lightning bolt — sudden truth, divine intervention', 'the crown blown off — the false authority being dethroned', 'the figures falling — shock, but also: free fall is also flight']
  },
  {
    slug: 'the-star', num: 17, name: 'star', display: 'The Star', symbol: '⭐',
    element: 'Air', ruler: 'Aquarius', yes_no: 'yes',
    one_liner: 'After the storm, the soft sky. Hope is a discipline. Practice it.',
    upright: 'The Star shows a woman kneeling at the water\'s edge, pouring two pitchers — one onto the land, one into the lake — beneath a sky of stars. This card is the deep exhale after the Tower. Healing is in motion. The wound is real, and it is closing. Hope returns in a quieter form than before — less naive, more earned. The Star asks for soft consistency: small daily acts of self-tending, of generosity, of trust. The big work is over; this is the long, gentle reweaving.',
    reversed: 'Reversed, the Star points to a temporary loss of faith, exhaustion, or the inability to receive the healing that is being offered. The medicine is rest and small reachable graces — sunlight, a friend, a meal, a walk. Hope returns by the back door when the front is too tired to open.',
    love: 'In love, the Star is renewal. The relationship that is healing after the hard chapter. The single chapter that is genuinely hopeful for the first time in a while. If single, a next-true-thing is not far away; the inner ground is preparing. If partnered, both of you are softening; the storm is over.',
    career: 'In career, the Star is the comeback. The new project that comes with peace. The work that fits, after a long period of work that didn\'t. The card encourages quiet, beautiful, generous output — not viral, but lasting.',
    spiritual: 'Spiritually, the Star is the felt sense of being held by something larger. The dark night of the soul lifts a little. The morning prayer feels like contact again. The card is also generosity — pour the water both inward and outward; healing flows both ways.',
    when_pulled: 'When you pull the Star, you are healing whether you can feel it daily or not. The next chapter is the long, soft return. Trust the slow return.',
    symbols: ['the seven small stars and one large — many small daily graces under one larger guiding light', 'the two pitchers — what you give and what you keep, in balance', 'the kneeling posture — humility, the stance healing requires']
  },
  {
    slug: 'the-moon', num: 18, name: 'moon', display: 'The Moon', symbol: '🌝',
    element: 'Water', ruler: 'Pisces', yes_no: 'maybe',
    one_liner: 'Walk through the dream. What looks like the path is the path.',
    upright: 'The Moon shows a winding path between two towers, with a dog and a wolf howling, a crayfish emerging from water. The moon above drips dew. This card is the territory of the unconscious — dreams, intuition, illusion, the stuff that is real but not yet rational. The path is unclear, and yet the path is exactly what is being asked of you. Trust what your body knows even when your head can\'t verify it. Old fears rise. So do old gifts. Walk anyway.',
    reversed: 'Reversed, the Moon points to confusion lifting, an illusion being seen through, or a fear that has been driving the show being named. The medicine is to honor what the unconscious is telling you and bring it into daylight without losing its strangeness.',
    love: 'In love, the Moon is the relationship full of feeling but short on clarity, or the season of dreaming about the next love before its shape is visible. If single, listen to dreams; intuition is loud. If partnered, the strange, hard-to-name discomfort is data, not noise.',
    career: 'In career, the Moon is the project still half-formed, the creative season where the work is mostly unconscious, the path that requires you to walk through the fog before the destination becomes visible. The card rewards faith more than planning right now.',
    spiritual: 'Spiritually, the Moon is the deep psyche, the dream-realm, the inner mythology. Practices: dream journaling, working with the moon\'s phases, ceremony, art. The Moon is also the place of confronting old fears that have been shaping your decisions from underground. Bring them up gently. Some of them dissolve in light.',
    when_pulled: 'When you pull the Moon, walk the path even though you can\'t see the end. The next chapter is mostly intuitive. The fog will clear when it\'s time.',
    symbols: ['the dog and the wolf — the domesticated and wild parts of you, both real', 'the crayfish from the water — what is rising from the unconscious', 'the dripping dew — wisdom that arrives from the dream-realm into waking life']
  },
  {
    slug: 'the-sun', num: 19, name: 'sun', display: 'The Sun', symbol: '☀️',
    element: 'Fire', ruler: 'Sun', yes_no: 'yes',
    one_liner: 'Joy without apology. The clearest yes in the deck.',
    upright: 'The Sun shows a child riding a white horse beneath a giant face-bearing sun, sunflowers blooming, banner raised. This card is unambiguous joy. Clarity. Vitality. The thing you\'ve been hoping for is here, or about to be. The card is also innocence regained — not naivety, but the post-shadow capacity to be present and delighted again. The hard chapter is over; the season of bright things has begun. Don\'t shrink it. Let yourself be in it.',
    reversed: 'Reversed, the Sun points to delayed brightness, false cheerfulness, or difficulty receiving good news. The medicine is to let yourself believe it. Joy is harder for some of us to receive than grief; practice receiving.',
    love: 'In love, the Sun is the most blessed card in the deck. New love, marriage, the child being born, the public affirmation, the joyous chapter. If single, a meeting of unmistakable lightness is on the way. If partnered, a season of genuine delight in each other.',
    career: 'In career, the Sun is success made visible. The launch that lands. The promotion. The recognition that finally arrives. The card almost always blesses creative work — the playful, generative, child-like part of any career.',
    spiritual: 'Spiritually, the Sun is the integration after the dark night. The self that walked through the underworld is back, brighter than before. Practices: gratitude, sunlight, play, dance, art with no purpose. Joy is a spiritual achievement, not a frivolous distraction. Earn it; receive it; share it.',
    when_pulled: 'When you pull the Sun, the next chapter is bright. Don\'t deflect it. Don\'t minimize it. Stand in the light. It\'s for you.',
    symbols: ['the child on the horse — innocence reclaimed after the journey', 'the sunflowers facing the sun — turn toward the light without apology', 'the great face of the sun — divine acknowledgment, full presence']
  },
  {
    slug: 'judgement', num: 20, name: 'judgement', display: 'Judgement', symbol: '🎺',
    element: 'Fire', ruler: 'Pluto', yes_no: 'yes',
    one_liner: 'The trumpet calls. You are being asked to rise into the next version of you.',
    upright: 'Judgement shows an angel blowing a trumpet over rising figures with arms outstretched. This card is the call to a higher version of yourself. A turning point that is also an awakening. You have become someone new — through the journey of the previous cards — and the universe is calling you to rise into that new self publicly, fully, without going back. It is also the card of forgiveness: the past is being judged kindly, integrated, released. You are free to rise.',
    reversed: 'Reversed, Judgement points to a refusal of the call — clinging to the old self, ignoring the inner knowing that something bigger is asking. The medicine is to listen. The trumpet doesn\'t go away; it just gets louder.',
    love: 'In love, Judgement is the relationship that calls you to a higher version of yourself. The reconciliation that asks both people to rise. The decision to commit, or to release, made from a deeper place than ego. If single, the next love is for the new self, not the old.',
    career: 'In career, Judgement is the calling. The work you\'ve always sensed you should do, but kept deferring. The pivot that\'s been knocking. The moment when the old role is finished and the new one is unmistakable. Answer the call.',
    spiritual: 'Spiritually, Judgement is the awakening. The dharma made personal. The realization that the life is for something larger than self-maintenance. The trumpet is the voice of the deepest self, calling the surface self home. Rise.',
    when_pulled: 'When you pull Judgement, you are being called. The next chapter is a higher version of you. Rise into it.',
    symbols: ['the angel\'s trumpet — the divine call, audible to those who listen', 'the rising figures — resurrection of the self after the dark passage', 'the open arms — full receiving of what is being offered']
  },
  {
    slug: 'the-world', num: 21, name: 'world', display: 'The World', symbol: '🌍',
    element: 'Earth', ruler: 'Saturn', yes_no: 'yes',
    one_liner: 'Completion. The cycle closes. The next one begins, wiser.',
    upright: 'The World shows a dancing figure inside a wreath, the four sky-creatures in the corners, holding two wands. This is the final card of the major arcana — completion, integration, the long journey arriving at its destination. What you set out to do has been done. What you set out to become has been become. The card is the celebratory pause before the next cycle begins. You are not at the end of your life; you are at the end of a chapter, and the next chapter starts at a higher altitude. Honor the arrival before the departure.',
    reversed: 'Reversed, the World points to incomplete cycles — the ending you haven\'t fully marked, the closure you haven\'t given yourself, or the resistance to celebrating because the next thing is already pulling at you. The medicine is to complete: name the arrival, mark it, then move on properly.',
    love: 'In love, the World is the long arc that completes. The relationship that arrived where it was meant to. The marriage that took years to become what it is. If single, a long inner cycle is closing — the next love begins from a much more whole self. If partnered, you have arrived at a new plateau together; honor it before pushing for the next one.',
    career: 'In career, the World is the project completing, the chapter ending well, the master craftsman finishing the apprenticeship. The card often heralds a significant transition — graduation, moving country, leaving the long-held role for the next big thing. You earned this.',
    spiritual: 'Spiritually, the World is the integrated self. The fool who left the cliff in card 0 is back, but transformed — having passed through every archetype of the journey. The dance is the celebration. The wreath is the cosmos in miniature. You are part of the whole, and the whole knows you.',
    when_pulled: 'When you pull the World, a cycle has completed. Honor the arrival. Mark the threshold. Then begin again, wiser.',
    symbols: ['the dancing figure — completion is a body-knowing, not just a thought', 'the wreath — the cosmos closed and whole', 'the four creatures in the corners — the elements of self, all integrated']
  }
]

const TAROT_BY_SLUG: Record<string, TarotCard> = Object.fromEntries(TAROT_MAJORS.map((c) => [c.slug, c]))
export const TAROT_SLUGS = TAROT_MAJORS.map((c) => c.slug)

export function isTarotSlug(s: string): boolean {
  return s in TAROT_BY_SLUG
}

export function getTarotCard(slug: string): TarotCard | undefined {
  return TAROT_BY_SLUG[slug]
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Element-tinted accents (matches rising/moon palette pattern, plus extras for planets).
const CARD_ACCENT: Record<string, { c1: string; c2: string }> = {
  Fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  Earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  Air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  Water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function tarotPageHTML(slug: string): string {
  const card = TAROT_BY_SLUG[slug]
  if (!card) return ''
  const accent = CARD_ACCENT[card.element] ?? CARD_ACCENT.Fire
  const readingHref = `/gab44/reading?ref=tarot-${slug}`

  const title = `${card.display} Tarot Card Meaning — Upright, Reversed, Love & Career · gab44 ✨`
  const description = `Deep guide to the ${card.display} (Major Arcana ${card.num}): upright meaning, reversed meaning, love, career, spiritual gift, when you pull this card. ${card.element} element, ruled by ${card.ruler}. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot — Major Arcana', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: card.display, item: `${SITE_URL}/gab44/tarot/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${card.display} — Tarot Card Meaning`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/tarot/${slug}`,
        about: `${card.display} tarot card — meaning, love, career, spiritual significance`
      }
    ]
  })

  const otherCardsHtml = TAROT_MAJORS.map((c) => {
    const cur = c.slug === slug ? ' current' : ''
    return `<a class="card-mini${cur}" href="/gab44/tarot/${c.slug}"><span class="sym">${c.symbol}</span><span class="num">${c.num}</span><span class="name">${escapeHtml(c.display)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --card-c1:${accent.c1}; --card-c2:${accent.c2};
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
    background: linear-gradient(135deg, var(--card-c1), var(--card-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--card-c1), var(--card-c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; }
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
    background: linear-gradient(90deg, var(--card-c1), var(--card-c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .symbols { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .symbols h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .symbols ul { margin: 0; padding-left: 20px; }
  .symbols li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); }
  .symbols li:last-child { margin-bottom: 0; }
  .reading-cta {
    background: linear-gradient(135deg, var(--card-c1) 0%, var(--card-c2) 100%);
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
  .other-cards { margin: 36px 0 22px; }
  .other-cards h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .cards-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  @media (max-width: 600px) { .cards-grid { grid-template-columns: repeat(4, 1fr); } h1 { font-size: 36px; } }
  @media (max-width: 380px) { .cards-grid { grid-template-columns: repeat(3, 1fr); } }
  .card-mini {
    text-align: center; padding: 10px 4px; border-radius: 10px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 10px; font-weight: 600; display: flex; flex-direction: column; gap: 2px;
  }
  .card-mini:hover { border-color: var(--accent); color: var(--accent); }
  .card-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .card-mini .sym { font-size: 18px; line-height: 1; }
  .card-mini .num { font-family: 'JetBrains Mono', monospace; font-size: 9px; opacity: 0.6; }
  .card-mini .name { font-size: 10px; }
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
      <a href="/gab44/tarot">all 22 major arcana</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot · major arcana ${card.num}</div>
    <h1><span class="sym">${card.symbol}</span><span class="accent">${escapeHtml(card.display)}</span></h1>
    <p class="sub">${escapeHtml(card.one_liner)}</p>
    <div class="meta-strip">
      <span>major arcana · ${card.num}</span>
      <span>🜂 ${escapeHtml(card.element)}</span>
      <span>ruled by ${escapeHtml(card.ruler)}</span>
      <span>yes/no: ${card.yes_no}</span>
    </div>

    <article class="core-card">
      <span class="label">upright meaning</span>
      <p class="text">${escapeHtml(card.upright)}</p>
    </article>

    <h2><span class="icon">🔄</span>reversed meaning</h2>
    <p>${escapeHtml(card.reversed)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>💞 in love</h3>
        <p>${escapeHtml(card.love)}</p>
      </div>
      <div class="panel">
        <h3>💼 in career</h3>
        <p>${escapeHtml(card.career)}</p>
      </div>
    </div>

    <h2><span class="icon">✨</span>spiritual gift</h2>
    <p>${escapeHtml(card.spiritual)}</p>

    <h2><span class="icon">🌀</span>when you pull this card</h2>
    <p>${escapeHtml(card.when_pulled)}</p>

    <div class="symbols">
      <h3>key symbols on this card</h3>
      <ul>
        <li>${escapeHtml(card.symbols[0])}</li>
        <li>${escapeHtml(card.symbols[1])}</li>
        <li>${escapeHtml(card.symbols[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> question, not the card</h2>
      <p>The ${card.display} is universal. Your question is yours alone. A <strong>personal life-path reading</strong> uses your full birth chart, your specific intention, and one human reader paying attention to your actual life — with tarot pulled in if it serves the question. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Want to go deeper? Browse <a href="/gab44/tarot">all 22 major arcana</a> · the <a href="/gab44/about">12 zodiac sun-sign profiles</a> · <a href="/gab44/compatibility">78 compatibility pairs</a> · <a href="/healing">free healing meditations</a>.
    </div>

    <section class="other-cards">
      <h3>Major Arcana · all 22</h3>
      <div class="cards-grid">
        ${otherCardsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function tarotIndexHTML(): string {
  const cards = TAROT_MAJORS.map((c) => {
    const accent = CARD_ACCENT[c.element] ?? CARD_ACCENT.Fire
    return `<a href="/gab44/tarot/${c.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="num">${c.num}</div>
      <div class="sym">${c.symbol}</div>
      <div class="name">${escapeHtml(c.display)}</div>
      <div class="element">${escapeHtml(c.element)} · ${escapeHtml(c.ruler)}</div>
      <div class="teaser">${escapeHtml(c.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Tarot Major Arcana — All 22 Card Meanings · gab44 ✨</title>
<meta name="description" content="Deep, evergreen guides to all 22 Major Arcana tarot cards: The Fool, The Magician, The Lovers, Death, The Tower, The Star, The World — upright + reversed meanings, love, career, spiritual gift. Written warm, written human." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot" />
<meta property="og:title" content="Tarot Major Arcana — All 22 Card Meanings" />
<meta property="og:description" content="Twenty-two evergreen guides to the Major Arcana." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 640px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .num { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--fg-muted); margin-bottom: 4px; letter-spacing: 0.05em; }
  .card .sym { font-size: 32px; line-height: 1; margin-bottom: 6px; }
  .card .name { font-size: 18px; font-weight: 700; margin-bottom: 2px; }
  .card .element { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
  .reading-strip { background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center; }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--fg-on-accent); }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/about">12 zodiac profiles</a>
      <a href="/gab44/horoscopes">daily horoscopes</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Tarot · the <span class="accent">Major Arcana</span>.</h1>
    <p class="sub">Twenty-two cards. Twenty-two archetypes — the journey from the Fool's first leap to the World's complete cycle. Each card here is a hand-written, evergreen guide: upright, reversed, in love, in career, the spiritual gift, the moment when you pull it.</p>
    <div class="intro">
      <p>The Major Arcana isn't fortune-telling. It's a mirror. Each card names a chapter of the human passage — beginnings (the Fool), commitments (the Lovers), endings (Death), redemptions (the Star), arrivals (the World). When a card lands in a reading, it's pointing at the chapter you're actually living, whether you'd named it yet or not.</p>
      <p>Read these in order to follow the journey, or jump to the card you pulled this morning. They're written to help you see, not to predict.</p>
    </div>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want a reading written for your actual question?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your full chart and your specific intention, with tarot pulled in when it serves. <a href="/gab44/reading?ref=tarot-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
