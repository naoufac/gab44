// Tarot Court Cards & Suits SEO funnel — /gab44/tarot/court (index) +
// /gab44/tarot/court/{rank}-of-{suit} (16 court card pages) +
// /gab44/tarot/suits/{suit} (4 suit overview pages).
//
// Targets very-high-volume tarot keywords distinct from Major Arcana:
// "knight of cups meaning", "queen of swords reversed", "page of pentacles love",
// "king of wands career", "court cards tarot", "what is the suit of cups",
// "wands suit meaning", "tarot court cards explained", "pentacles tarot meaning".
// These are the highest-search court-card keywords; together with /tarot (22
// majors) and /tarot/spreads (8 spreads) this completes the most-searched
// half of the 78-card tarot deck.
//
// Each court card profile is ~700 words across 9 sections (one-liner, upright,
// reversed, as a person, in love, in work, the shadow, when you pull this card,
// pair-with chakra/sound/crystal + 3 key questions). Each suit overview is
// ~700 words across 8 sections (the realm, the gift, the shadow, in love, in
// work, the arc through the suit, pair-with, key questions).
//
// Suit-tinted gradient: cups=ocean blue (water), wands=ember orange (fire),
// swords=cool steel-blue (air), pentacles=earth green (earth).
//
// Routes registered BEFORE /gab44/tarot/:card to avoid Hono RegExpRouter
// matching 'court' or 'suits' as a card slug. Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export type Suit = 'cups' | 'wands' | 'swords' | 'pentacles'
export type Rank = 'page' | 'knight' | 'queen' | 'king'

export interface CourtCard {
  slug: string                  // e.g. "knight-of-cups"
  rank: Rank
  suit: Suit
  display: string               // e.g. "Knight of Cups"
  emoji: string
  archetype: string             // e.g. "the romantic envoy"
  one_liner: string
  upright: string
  reversed: string
  as_a_person: string
  in_love: string
  in_work: string
  the_shadow: string
  when_pulled: string
  pair_with_chakra_slug: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export interface SuitProfile {
  slug: Suit
  display: string               // e.g. "The Suit of Cups"
  short: string                 // e.g. "Cups"
  emoji: string                 // ♥ ♣ ♠ ♦ style — using tarot glyphs
  glyph: string                 // unicode tarot suit emoji
  element: string               // Water / Fire / Air / Earth
  body: string                  // heart / belly / mind / hands
  season: string                // summer / spring / autumn / winter
  cardinal_direction: string
  archetype: string             // e.g. "the heart's terrain"
  one_liner: string
  the_realm: string             // what this suit governs (~200w)
  the_gift: string              // ~100w
  the_shadow: string            // ~100w
  in_love: string               // ~100w
  in_work: string               // ~100w
  the_arc: string               // how the suit progresses ace → 10 → court (~150w)
  pair_with_chakra_slug: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

// ---------- the four suits ----------

export const SUITS: SuitProfile[] = [
  {
    slug: 'cups',
    display: 'The Suit of Cups',
    short: 'Cups',
    emoji: '🏆',
    glyph: '♥',
    element: 'Water',
    body: 'the heart, the gut, the throat',
    season: 'summer',
    cardinal_direction: 'west',
    archetype: 'the heart\'s terrain — emotion, intuition, relationship, the inner river',
    one_liner: 'The suit of feeling, intuition, love, dreams, and the unspoken signal between two people.',
    the_realm: 'Cups is the suit of the inner life — emotion, relationship, intuition, dreams, the un-spoken thing between two people in a quiet room. It governs everything that water governs in the body and in metaphor: tears, longing, the soft tide of mood, the way grief comes in waves and then lifts. When Cups dominate a reading, the question is rarely about strategy or money or action — it is about what you feel, what you are not letting yourself feel, who you love, who you have not forgiven, what the heart is asking for that the schedule has not yet honored. Cups rules the territory under the words. It rules the look across a table, the dream that woke you sweating, the pull toward someone whose phone you keep checking. It is the suit of the unconscious surfacing — the suit that says, you already know how you feel about this; the question is whether you will let yourself say it. Water finds the lowest point and pools there; Cups asks: what truth in you is that low point right now, and what would happen if you stopped damming it up?',
    the_gift: 'The gift of Cups is presence with feeling. The capacity to sit with another person\'s pain without rushing to fix it, to receive your own grief without needing it to make sense first, to love without a guarantee that the love will be returned or even seen. People with strong Cups energy in their reading or in their natal chart are the ones others come to when something has broken — not because they have answers, but because they can hold the question. They are also the ones most attuned to the texture of joy: the small, soft, often-missed kinds of beauty that the more action-oriented suits race past.',
    the_shadow: 'The shadow of Cups is drowning in feeling — confusing the intensity of an emotion with the truth of it, mistaking longing for love, mistaking comfort for connection. It is the suit most prone to fantasy: building a relationship in your head with someone who has not earned that real-estate, returning to a person who keeps wounding you because the body remembers them. Reversed Cups energy is escapism — the second glass of wine, the doom-scroll, the daydream that has slowly replaced the actual life.',
    in_love: 'In love, Cups is the whole arc: the meeting, the falling, the deepening, the grief, the forgiveness, the staying, the leaving. A reading saturated in Cups is naming that the relationship in question lives or dies in the emotional layer — not in the logistics, not in the resume, not in whether the timing makes sense, but in whether the two of you can stay tender with each other when it gets hard. Cups says: love is not a project. Love is a temperature you keep returning to.',
    in_work: 'In work, Cups governs the relational and creative dimensions — team dynamics, client trust, the artistic gesture, the way a brand makes someone feel. A career reading thick with Cups is asking whether the work feeds you or drains you at the level of the soul, not the bank account. Cups professionals: therapists, artists, healers, teachers of children, anyone whose work moves through the heart of another person. The shadow at work: people-pleasing, conflict-avoidance, taking every critique personally.',
    the_arc: 'The Cups suit progresses from the Ace (the cup overflowing — pure new feeling, the gift of the heart-opening moment) through the Two (recognition, partnership), the Three (celebration, friendship), and into the Five (loss, the spilled cups), the Eight (walking away from what no longer feeds you), the Ten (the family scene, the rainbow over the home — emotional fulfillment), and finally into the four court cards: Page (the dreamer, beginner intuition), Knight (the romantic envoy, feeling in motion), Queen (the empath, mastery of the inner life), King (emotional sovereignty, the elder who has felt everything and stayed soft).',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (the soft heart) or moonstone (the intuitive tide)',
    key_questions: [
      'What am I feeling right now that I have not let myself say out loud?',
      'Where am I confusing intensity with truth — and what would the quieter signal be telling me?',
      'If I stopped trying to fix this feeling and just sat with it for one hour, what would surface?'
    ]
  },
  {
    slug: 'wands',
    display: 'The Suit of Wands',
    short: 'Wands',
    emoji: '🔥',
    glyph: '♣',
    element: 'Fire',
    body: 'the solar plexus, the spine, the spark behind the sternum',
    season: 'spring',
    cardinal_direction: 'south',
    archetype: 'the spark — passion, will, creativity, the inner ignition',
    one_liner: 'The suit of fire, will, creative spark, ambition, sexual energy, and the leap that has not yet been taken.',
    the_realm: 'Wands is the suit of the spark — the moment a project becomes a thing you cannot not do, the moment a person walks into a room and the air changes, the moment you have an idea so alive that your body is on its feet before your mind has finished the sentence. It governs everything fire governs: passion, will, ambition, creative drive, sexual energy, the courage to begin. When Wands dominate a reading, the question is rarely about feeling or money or strategy — it is about *life-force*. Where is yours flowing? Where has it gone underground? What are you on fire about, and what are you doing with that fire? Wands rules the impulse to make. The novel you have been writing in your head for ten years. The business that wants to be born through you. The painting, the song, the speech, the leap. It is the suit of the new chapter that has not yet started because you keep waiting to feel ready, when the truth is that readiness is not a feeling — it is a decision. Wands says: the spark is already lit. Stop pretending you cannot see it. Stand up and move.',
    the_gift: 'The gift of Wands is courage — the willingness to risk looking foolish, to start without a guaranteed outcome, to lead before you have been crowned. People with strong Wands energy are catalysts. They walk into stale rooms and the energy shifts. They take the first step on the unbuilt road. They are also the ones who remember that play is sacred — that the work can be hard *and* alive, can be ambitious *and* fun. They make ambition look generous, because the fire is large enough for everyone in the room to warm at.',
    the_shadow: 'The shadow of Wands is the wildfire — passion that consumes everything in its path, the leap that becomes a flight from intimacy, the ambition that burns through people and leaves them feeling used. It is the suit most prone to burnout, scattered focus, and starting ten things while finishing none. Reversed Wands energy is also the *blocked* fire — the spark you keep tamping down because someone, once, told you it was too much. The shadow is rage with no channel, ambition with no trust, charisma weaponized.',
    in_love: 'In love, Wands is heat — chemistry, magnetism, the look across a crowded bar, the relationship that begins fast and burns bright. A reading thick with Wands is naming that the love in question is alive, but warning that fire without water becomes a drought. Wands relationships are passionate; they are not always sustainable without Cups (tenderness) and Pentacles (commitment, structure). The shadow: confusing intensity with intimacy, mistaking the spark for the fire — sparks fade if no one tends the kindling.',
    in_work: 'In work, Wands governs entrepreneurship, leadership, creativity, sales, performance — anywhere the work requires the worker to *be on fire* about the thing. A career reading thick with Wands is naming that you are being called to lead, to create, to start the thing instead of consulting on the thing other people are starting. Wands professionals: founders, artists, performers, evangelists, sales-leaders, anyone whose work requires bringing energy *into* a room.',
    the_arc: 'The Wands suit progresses from the Ace (the spark — the new idea, the new beginning, fire from nothing) through the Two (planning the empire), the Three (the ships sailing — investment made), the Five (competitive friction), the Eight (rapid forward motion, news traveling fast), the Ten (the burden of carrying the fire alone, burnout warning), and into the four court cards: Page (the apprentice with a torch, beginner enthusiasm), Knight (the conquistador, fire in motion), Queen (charismatic mastery, the warmth that draws people in), King (visionary leadership, fire that builds rather than consumes).',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian (the spark) or citrine (sustained will)',
    key_questions: [
      'What am I on fire about that I have been pretending not to see?',
      'Where is my passion flowing without a channel — and what container would let it become a build instead of a burn?',
      'What is the next concrete move that would honor this fire instead of just thinking about it?'
    ]
  },
  {
    slug: 'swords',
    display: 'The Suit of Swords',
    short: 'Swords',
    emoji: '⚔️',
    glyph: '♠',
    element: 'Air',
    body: 'the head, the throat, the chest cavity',
    season: 'autumn',
    cardinal_direction: 'east',
    archetype: 'the mind — thought, language, conflict, the truth that cuts',
    one_liner: 'The suit of mind, thought, language, conflict, communication, and the truth you have been avoiding.',
    the_realm: 'Swords is the suit of the mind — thought, language, decision, conflict, the truth you have been circling but have not yet named. It governs everything air governs: clarity, communication, ideas, mental cycles, the conversation that needs to happen, the boundary that needs to be drawn. When Swords dominate a reading, the question is rarely about feeling or fire or money — it is about *what you think, and what you say*. The mind is the most powerful tool in the deck and also the most dangerous. The same blade that cuts a cord can wound a beloved. The same words that liberate can also injure. Swords rules the territory of clarity — and of overthinking. Of the necessary conversation — and of the looped argument you have been having alone in the shower for three weeks. It is the suit of the truth that, once spoken, cannot be unspoken; the suit of the message that needs sending; the suit of the fear that grows in the dark and shrinks the moment you turn the light on it. Swords says: the mind serves you. Use it. Stop letting it run you.',
    the_gift: 'The gift of Swords is clarity — the capacity to see a situation cleanly, to name it cleanly, to act cleanly. People with strong Swords energy are the ones who can hold a room together with one well-placed sentence, the ones who can deliver hard news with grace, the ones who can think through a problem until the path forward becomes obvious. They are the editors, the strategists, the lawyers, the writers, the friends who tell you the truth nobody else will. The gift is precision: knowing exactly what to say, and exactly when not to say it.',
    the_shadow: 'The shadow of Swords is the mind devouring itself — anxiety, overthinking, paranoia, the 3 a.m. spiral, the conversation you keep rehearsing for an audience of one. It is the suit most prone to cruelty (especially intellectual cruelty — the cutting remark, the sarcasm dressed as honesty), to chronic worry, to mistaking analysis for action. Reversed Swords energy is being trapped in your head while life happens around you, or wielding language as a weapon — winning arguments while losing the relationship.',
    in_love: 'In love, Swords governs the conversations — the hard ones, the necessary ones, the ones you have been avoiding. A reading thick with Swords is naming that the relationship in question lives or dies in what gets said and what stays buried. Swords love is not necessarily painful — it is honest. The shadow: communication weaponized, sarcasm-as-armor, the fight-loop that recurs every two weeks because the underlying thing has never been said straight. Swords asks: what is the actual sentence you have been afraid to say to this person?',
    in_work: 'In work, Swords governs strategy, communication, decision-making, conflict resolution, intellectual work. A career reading thick with Swords is asking whether you are using your mind as a tool or being used by it. Swords professionals: writers, editors, lawyers, strategists, journalists, analysts, anyone whose work moves through language and clear thinking. The shadow at work: analysis paralysis, perfectionism, mistaking research for progress, the meeting that should have been an email.',
    the_arc: 'The Swords suit progresses from the Ace (the breakthrough thought, the sword of clarity, mental dawn) through the Two (the standoff, decision deferred), the Three (heartbreak through words, the cutting truth), the Five (the pyrrhic victory, winning the argument and losing the friend), the Eight (mental imprisonment, the bound figure who has not yet noticed she could walk away), the Ten (rock bottom — the mental story collapses, dawn behind), and into the four court cards: Page (the curious student, beginner critical thinking), Knight (the crusader, mental velocity, the cause), Queen (perceptive mastery, the truth-teller who has earned her edge), King (mental sovereignty, the judge whose word lands clean).',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Sodalite (mental clarity) or kyanite (clean speech)',
    key_questions: [
      'What is the one sentence I have been afraid to say — and to whom?',
      'Where is my mind looping on a problem that no amount of thought will solve?',
      'What truth, once named, would change what is possible in this situation?'
    ]
  },
  {
    slug: 'pentacles',
    display: 'The Suit of Pentacles',
    short: 'Pentacles',
    emoji: '🌳',
    glyph: '♦',
    element: 'Earth',
    body: 'the hands, the feet, the bones, the body itself',
    season: 'winter',
    cardinal_direction: 'north',
    archetype: 'the body, the ground, the build — money, work, health, home',
    one_liner: 'The suit of body, ground, money, work, home, health — everything that has to be touched and tended in the physical world.',
    the_realm: 'Pentacles is the suit of the body and the ground — money, work, home, health, craft, the physical world that has to be tended one hour at a time. It governs everything earth governs: rootedness, patience, the long build, the slow harvest, the meal cooked, the room cleaned, the savings account that grew because you stopped pretending it would grow on its own. When Pentacles dominate a reading, the question is rarely about feeling or fire or thought — it is about *the material*. What is your relationship to money right now? To your body? To your living space? Are you eating, sleeping, moving? Are you tending what needs tending, or have you outsourced the entire physical layer of your life because the ideas-layer felt more interesting? Pentacles is the suit that humbles. It says: the spiritual life and the material life are not two lives. The way you handle a $20 bill is the way you handle a million-dollar contract; the way you tend your kitchen is the way you tend your body; the way you treat the cashier is the way you treat your future. Pentacles asks: are you actually here, in this body, in this house, in this hour, doing the small thing in front of you?',
    the_gift: 'The gift of Pentacles is craftsmanship — the patience to build something well over a long horizon, the discipline to show up daily for work whose payoff is years away, the satisfaction of a job done cleanly. People with strong Pentacles energy are the builders of the world. They make things that last. They steward money instead of merely earning it. They tend bodies, gardens, homes, families, businesses — and they do it without needing applause. The gift is steadiness: the capacity to be the person whose word holds, whose work holds, whose life is built on a foundation that does not move when the wind changes.',
    the_shadow: 'The shadow of Pentacles is materialism unmoored from soul — the hoarding, the workaholism, the body neglected because the work is "more important," the savings account guarded with a closed fist while joy starves. It is also the *opposite* shadow: refusing the material altogether — spiritual bypass, the avoidance of money-talk, the contempt for "ordinary" work that is also a refusal to root. Reversed Pentacles energy is greed, scarcity-thinking, or the refusal to take the body and the bank account seriously as spiritual territory.',
    in_love: 'In love, Pentacles is the long build — the relationship that grows slow and stays, the partnership that survives the ordinary weeks, the choice to keep choosing each other across a decade of small Tuesdays. A reading thick with Pentacles is naming that the love in question lives or dies in the daily logistics — who cooks, who pays, who shows up for the school pickup, who tends the house when the other one is sick. Pentacles love is not the thunderbolt; it is the hearth. The shadow: relationships transactional, love conditional on performance.',
    in_work: 'In work, Pentacles governs craft, money, business, health, real estate, agriculture, anything that has to be built with the hands or the savings. A career reading thick with Pentacles is asking whether you are tending your livelihood with care or just chasing the next dollar. Pentacles professionals: craftspeople, builders, healers, financial advisors, farmers, body-workers, real-estate folk, anyone whose work shows up in the physical world.',
    the_arc: 'The Pentacles suit progresses from the Ace (the seed coin, the new resource, the opportunity that has not yet been planted) through the Three (skilled collaboration, the cathedral being built), the Five (material loss, the figures shivering outside the church), the Eight (the apprentice perfecting the craft, slow mastery), the Ten (generational wealth, the family seated together — the suit\'s peak), and into the four court cards: Page (the student with the coin held up to the light, beginner relationship to the material), Knight (the slow steady worker, methodical motion), Queen (nurturing abundance, mother of the household), King (the master craftsman, the patriarch of the long build).',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Tiger\'s eye (grounded confidence) or pyrite (manifest abundance)',
    key_questions: [
      'Where am I avoiding the material layer — money, body, home — because the inner life feels more sacred?',
      'What small daily practice would make me more rooted in the next 30 days than any big idea would?',
      'If I treated my body and my bank account as spiritual territory, what would I do differently this week?'
    ]
  }
]

// ---------- the 16 court cards ----------

export const COURT_CARDS: CourtCard[] = [
  // ===== CUPS (water — feeling, intuition, relationship) =====
  {
    slug: 'page-of-cups', rank: 'page', suit: 'cups',
    display: 'Page of Cups', emoji: '🐟',
    archetype: 'the dreamer — beginner intuition, the heart cracking open',
    one_liner: 'A surprise from the heart. A small gift, a tender message, a feeling you did not plan for.',
    upright: 'The Page of Cups stands by the shore holding a chalice from which a fish has unexpectedly leapt. The image is the whole card: a feeling has surfaced from the unconscious that the conscious mind did not invite, did not plan for, and does not quite know what to do with. The Page is the beginning of feeling — the new crush, the first creative impulse, the dream that woke you tender, the news that softened you in a way you did not expect to be softened. It is also the message — a text out of the blue, an apology you were not sure would come, a card in the mail. The Page does not yet know what the feeling means or where it leads. The Page only knows the feeling is real, and that ignoring it would be a small betrayal of the soul. Receive the fish. Sit with it. Let yourself be moved before you require the moving to make sense.',
    reversed: 'Reversed, the Page of Cups warns of emotional immaturity — the sulk, the silent treatment, the manipulative tear, the tantrum dressed as sensitivity. It can also point to a creative block: the artist in you has shut down because the inner critic has gotten too loud. Or to fantasy displacing reality — the daydream relationship, the imagined apology that will never come. The fix is to grow up the feeling without killing it: name it, sit with it, ask what it is actually asking for, and then act like an adult who has feelings, not a child who is run by them.',
    as_a_person: 'As a person, the Page of Cups is often a younger or younger-energy figure with a soft, dreamy quality — the artistic friend, the sensitive cousin, the gentle child, the new partner who is full of feeling and not yet sure what to do with it. Sometimes it is a messenger: the person who delivers emotional news. Watch for someone in your life this week who is bringing you a feeling-update, an invitation, an unexpected tenderness. Receive them generously. They are not yet polished, and that is exactly the gift.',
    in_love: 'In love, the Page of Cups is the new flutter — the crush, the first message, the moment a friendship begins to feel like something more. It can also be a tender re-entry: the partner reaching out with a soft gesture after a hard week. If single, watch for an unexpected sweet message this week. If partnered, receive your partner\'s small soft gestures the way you would have received them in month two of dating — let them count.',
    in_work: 'In work, the Page of Cups is the creative seed — the first sketch, the offhand idea that turns out to be the brief, the email from someone who liked your work and wanted you to know. It is the new project that does not yet have a deadline but has a feeling. Honor the feeling. Capture the seed before it scatters. The Page also signals: a junior collaborator with surprising emotional intelligence may be more useful than a senior expert with none.',
    the_shadow: 'The shadow of the Page of Cups is the eternal beginner — always falling in love with the *idea* of starting, never doing the work of staying. The feeling is real; the follow-through is missing. Or: the person who weaponizes sensitivity, using their own tenderness as a shield against accountability. The fix is the same: take the feeling seriously enough to follow it into actual practice.',
    when_pulled: 'When you pull the Page of Cups, a soft new feeling is at the door. Don\'t over-read it. Don\'t under-receive it. Open the door, let the feeling in, see what it is asking for, and respond like a kind adult who has not forgotten how to be moved.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz — the soft heart',
    key_questions: [
      'What feeling has surfaced this week that I did not plan for — and what is it asking of me?',
      'Whose tender message am I receiving with a closed door, when an open door would change something?',
      'What creative impulse have I been treating as too small to matter?'
    ]
  },
  {
    slug: 'knight-of-cups', rank: 'knight', suit: 'cups',
    display: 'Knight of Cups', emoji: '🍷',
    archetype: 'the romantic envoy — feeling in motion, the offer made on bended knee',
    one_liner: 'An offer made from the heart. The romantic gesture, the proposal, the message that says: I would like more of you.',
    upright: 'The Knight of Cups rides slowly — slower than every other knight in the deck — across a quiet landscape, holding a cup forward like an offering. He is not charging into battle; he is approaching with reverence. The card is the romantic envoy: the proposal, the love letter, the carefully chosen flowers, the friend showing up at your door with soup, the partner who made the dinner reservation knowing it was the anniversary and you had forgotten. The Knight of Cups is feeling that has decided to *act*. The Page received the feeling; the Knight delivers it. When this card lands, an emotional offer is being made — by you, to you, or between you. Receive it with the same softness it is being offered with. The shadow knight is performance — the grand gesture that is more about the gesture than about the person — but the upright Knight is sincere. The cup is full. The intention is honest. Meet it as it deserves.',
    reversed: 'Reversed, the Knight of Cups warns of false romance: the love-bombing partner who delivers grand gestures while undelivering on daily presence; the offer that looks beautiful and turns out to be empty; the over-promiser who cannot keep his own word. It can also signal an emotional retreat — the knight who arrived bearing the cup is now turning his horse around, withdrawing the offer. The fix is honesty: if the feeling has changed, name it. If the offer cannot be honored, withdraw it cleanly rather than ghosting the recipient.',
    as_a_person: 'As a person, the Knight of Cups is the romantic — the artist, the poet, the sensitive man (or sensitive-energy person), the friend who remembers your favorite drink, the partner who narrates the relationship in love-letters. He is also, sometimes, the over-romantic — the person whose feelings move faster than reality. Watch for someone in your life this week who is moving toward you in a tender way: receive what they bring, and notice whether the offering and the offerer match.',
    in_love: 'In love, the Knight of Cups is the offer — the first I-love-you, the moving-in question, the proposal, the willingness to make the relationship real in the world rather than only in private. If single, this card often heralds the meeting of someone romantic and intentional. If partnered, watch for the gesture being made (or being missed). If you are the Knight in this story, what is the offer you have been carrying and not yet delivered?',
    in_work: 'In work, the Knight of Cups is the heartfelt pitch, the proposal that wins because of feeling more than spec, the creative offering, the gift to a colleague that lands. It is also the artist or healer who is being asked to bring more of themselves into the work, not less. In any negotiation under this card, the relationship is the deal — lead with the feeling, the rest follows.',
    the_shadow: 'The shadow of the Knight of Cups is the fantasist — the partner who promises everything in candlelight and delivers nothing in daylight. Or the conflict-avoidant romantic who would rather perform love than do the harder work of actually being intimate when the lighting is bad. The fix: walk slower. Make smaller offers and keep them. Let the gesture and the daily life match.',
    when_pulled: 'When you pull the Knight of Cups, an emotional offer is in motion. If you are the one carrying the cup, deliver it with the sincerity it deserves. If you are the one receiving, receive softly and watch whether the offerer matches the offering over the next 30 days.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rhodochrosite — emotional courage',
    key_questions: [
      'What heartfelt offer have I been carrying that I have not yet delivered?',
      'Where is someone making me a real offer that I have been receiving with suspicion instead of softness?',
      'Am I performing the gesture, or actually living the feeling underneath it?'
    ]
  },
  {
    slug: 'queen-of-cups', rank: 'queen', suit: 'cups',
    display: 'Queen of Cups', emoji: '🌊',
    archetype: 'the empath sovereign — mastery of the inner life, the woman who has felt everything and stayed soft',
    one_liner: 'Emotional mastery — the friend who can hold your hardest truth without flinching, the person who has felt it all and kept her tenderness.',
    upright: 'The Queen of Cups sits on a throne at the edge of the sea, holding an ornate covered cup. The cup is closed because she has learned that not every feeling is meant to be shown to every passerby — sovereignty over the inner life means knowing what to share and what to keep sacred. She is the empath who has matured. She has felt everything — every grief, every betrayal, every joy — and she has not become hard. She is also not boundary-less; she is the opposite. She has learned that you cannot help anyone from inside their feeling. You have to stay on your own throne, on your own shore, and reach across. When this card lands, you (or someone in your story) are being called to that mastery: to feel deeply *and* to remain steady, to be moved without being swept away, to hold space for another\'s pain without absorbing it as your own. The Queen of Cups is the friend you call at 2 a.m. who does not panic for you but does not minimize you either. She is also: the therapist, the wise mother, the elder sister, the partner who has done her work.',
    reversed: 'Reversed, the Queen of Cups can show two shadows. One is the boundary-less empath: drowning in everyone else\'s emotion, having lost track of her own feelings under the weight of being The Strong One. The other is emotional manipulation — using sensitivity as power, weaponizing tears, making others responsible for managing her moods. The fix in either case is the same: come back to your own water. Tend your own feeling first. You cannot pour from an empty cup, and you cannot heal others from inside their wound.',
    as_a_person: 'As a person, the Queen of Cups is the empath who has done the work — often a feminine-energy figure, often older, often the person in your life everyone calls when something has broken. She is the therapist, the spiritual director, the wise mother, the partner who can sit with you through your worst night without trying to fix you. Watch for her this week: she may be about to enter your life as a guide, or she may be the one you are being asked to *become* for someone else.',
    in_love: 'In love, the Queen of Cups represents emotional intelligence as the foundation of intimacy. She is the partner who can hold the hard conversation without going to war, who can receive your grief without making it about her, who knows how to love you without losing herself in you. If single, you are being prepared to recognize this kind of partner — and to *be* this kind of partner. If partnered, the card is asking: are you bringing emotional adulthood to this relationship, or still asking your partner to parent your feelings?',
    in_work: 'In work, the Queen of Cups is the emotionally intelligent leader — the manager people stay for, the team-builder who notices when someone is struggling, the therapist, the healer, the artist whose work moves people. A career reading under this Queen is naming that emotional attunement is the asset; soft skills are the actual hard skills. If you are in healing or helping work, the Queen is your patron — and she insists you tend yourself first.',
    the_shadow: 'The shadow of the Queen of Cups is martyrdom — the woman who has poured so much into others that there is nothing left of herself, and who quietly resents everyone she has poured into. Or the mood-flooder — the person whose moods become weather everyone else has to forecast. The cure is the same: sit on your own throne. Tend your own water. Make your sovereignty visible.',
    when_pulled: 'When you pull the Queen of Cups, you are being called to a mature relationship with feeling — your own and others\'. Hold space without absorbing. Feel without flooding. Be soft and sovereign at the same time.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Moonstone — intuitive sovereignty',
    key_questions: [
      'Where am I absorbing other people\'s emotions instead of holding space for them?',
      'What feeling of my own have I postponed because I have been busy tending everyone else\'s?',
      'What would it look like to stay soft AND stay sovereign in this relationship?'
    ]
  },
  {
    slug: 'king-of-cups', rank: 'king', suit: 'cups',
    display: 'King of Cups', emoji: '🐬',
    archetype: 'the elder of the heart — emotional sovereignty, the man who has felt everything and built a calm sea around it',
    one_liner: 'The calm in the storm. Mastery of feeling so complete that the inner sea is steady even when the outer waves are wild.',
    upright: 'The King of Cups sits on a throne that floats on a turbulent sea, but his face is calm. The fish leaping behind him says the unconscious is still active — feeling has not been killed. The ship sailing in the distance says the world\'s storms still come. But the King has built a relationship with his own inner water such that the outer weather no longer rules him. This is mastery of the emotional life without suppression of it. He is the elder, the wise father (or wise mature-energy figure), the diplomat, the therapist who has been sitting with people\'s pain for thirty years and is still warm. When this card lands, you are being called to (or being given) emotional steadiness — the capacity to feel the storm and not be the storm, to receive others\' chaos without contributing your own. The King of Cups is also the man who has done his shadow work: he knows what he is capable of when wounded, and he has chosen, again, not to wound back.',
    reversed: 'Reversed, the King of Cups is the unprocessed emotional shadow — the man who has built such a strong outer calm that the inner sea has been entirely repressed, and the suppressed feeling now leaks out as cold cruelty, addiction, or dissociation. It can also point to emotional manipulation from a position of authority — the leader who uses his calm as a weapon, the partner who weaponizes his "rationality" against your feelings. The fix is to let the water move again — to feel what has been frozen, to be vulnerable on purpose with someone safe.',
    as_a_person: 'As a person, the King of Cups is often a mature masculine-energy figure who is unusually warm — the wise father, the kind boss, the older friend who has lived enough to be both soft and steady. He is sometimes a therapist, a spiritual director, a creative elder. Watch for him in your life this week: he may be the one who shows up with calm when you needed calm, or the one you are being asked to become for someone in your circle.',
    in_love: 'In love, the King of Cups is the partner who can hold the entire emotional weather of the relationship without becoming the weather himself. The man (or masculine-energy partner) who has done his work, who can be wounded without retaliating, who can sit with your hard truths without weaponizing them later. If you are dating, you are being prepared to recognize this kind of partner — and to weed out the imitations. If partnered, ask whether your own emotional steadiness is matching his — or whether you are leaning on his calm without offering yours.',
    in_work: 'In work, the King of Cups is the emotionally intelligent leader, the diplomat, the elder counselor, the senior healer. A career reading under this King is naming that the leadership being asked of you is *of the heart* — the kind that holds people through change, that speaks with care, that moves the team because the team trusts the leader\'s humanity. If you are being promoted, this is the King you are being asked to grow into.',
    the_shadow: 'The shadow of the King of Cups is the emotionally frozen patriarch — the man whose calm is actually disconnect, whose steadiness is actually shutdown. Or the manipulative therapist-figure — the man who reads everyone in the room and uses what he reads to control. The cure is the same: let the inner sea move. Feel something on purpose. Cry in front of someone. Be a body of water that has not decided to be ice.',
    when_pulled: 'When you pull the King of Cups, you are being called to the deepest version of emotional sovereignty: feeling fully, holding steady, refusing to wound from your own woundedness. The storm will come. You will not be the storm.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Aquamarine — calm depth',
    key_questions: [
      'Where am I confusing repression for sovereignty?',
      'Whose storm have I been holding without anyone noticing — and what does it cost me to keep holding it alone?',
      'What is one small way I could be vulnerable on purpose this week with someone safe?'
    ]
  },
  // ===== WANDS (fire — passion, will, creative spark) =====
  {
    slug: 'page-of-wands', rank: 'page', suit: 'wands',
    display: 'Page of Wands', emoji: '🪄',
    archetype: 'the apprentice with a torch — beginner enthusiasm, the spark not yet shaped',
    one_liner: 'A spark of inspiration. The first idea, the first lit-up moment of "I want to do this thing".',
    upright: 'The Page of Wands stands in a sunlit landscape, holding a flowering staff that he is studying the way a child studies something new. The staff has buds on it — the fire is just beginning. This is the energetic seed: the new passion, the idea you cannot stop thinking about, the project you mentioned to a friend at dinner and now will not leave your head. The Page is curiosity without yet a strategy. Enthusiasm without yet a structure. He has not built anything yet — he is at the beginning of building. When this card lands, an inspiration is asking to be taken seriously enough to *start*. Not finished. Just started. Buy the domain. Send the inquiry email. Take the first lesson. The shadow Page is all-talk-no-action — the one who lights up about ten new things a week and finishes none. The upright Page commits to one and walks toward it.',
    reversed: 'Reversed, the Page of Wands is the spark that fizzles, the project that is loud at the kickoff and silent by week three. It can also signal scattered energy — too many sparks, no fire — or false starts, where the enthusiasm was real but the foundation was missing. The fix: pick one of the ten things you have been excited about, and put one full week of attention on it. Most "I lose interest" is actually "I never gave it the depth that would have made it real."',
    as_a_person: 'As a person, the Page of Wands is the enthusiastic newcomer — the new hire who is full of ideas, the friend with the new business, the young creative who is generating more than he is shipping (yet). He is the messenger of new opportunity: a job offer, a project invitation, an idea brought to your door by someone younger or junior to you. Watch for him this week.',
    in_love: 'In love, the Page of Wands is the new flirtation — the spark, the chemistry that has not yet been tested. If single, an exciting new prospect is at the door. If partnered, the card is asking how you can re-introduce play, mischief, and creative enthusiasm to a relationship that may have gotten serious without your noticing.',
    in_work: 'In work, the Page of Wands is the creative idea, the new project, the proposal that excites the team. Take the seed seriously. Give it a week of real focus. Even sparks that ultimately do not become bonfires teach you what kind of fuel you actually have available.',
    the_shadow: 'The shadow of the Page of Wands is the over-talker — the person whose enthusiasm fills the room but whose follow-through is invisible. Or the dilettante: ten projects, none finished, all explained at length. The cure is depth — pick one and go deep enough that the fire becomes a coal-bed instead of a flicker.',
    when_pulled: 'When you pull the Page of Wands, an inspiration has arrived. Honor it by *starting*. Even imperfectly. Even small. The spark needs a first action to know whether it wants to become a fire.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian — creative spark',
    key_questions: [
      'What new spark has been knocking at my door — and what would the smallest possible first action look like?',
      'Where am I scattering across ten projects when one would actually catch fire if I gave it depth?',
      'What enthusiastic new person in my life is bringing me a real opportunity I have been treating as a passing comment?'
    ]
  },
  {
    slug: 'knight-of-wands', rank: 'knight', suit: 'wands',
    display: 'Knight of Wands', emoji: '🐎',
    archetype: 'the conquistador — fire in motion, the leap, the bold move',
    one_liner: 'Action, momentum, the bold move. The leap that has waited long enough.',
    upright: 'The Knight of Wands charges across an open landscape on a rearing horse, his staff raised. Of all the knights, he moves the fastest. This is fire in motion: the launch, the leap, the relocation, the bold pivot, the trip you finally booked, the company you finally started, the message you finally sent. The Knight has decided that more thinking will not help. The risk is real. The opportunity is also real. He is going. When this card lands, momentum is being asked of you. Not perfection. Not certainty. Movement. The shadow Knight is recklessness — burning bridges for the thrill of the burn — but the upright Knight has made a clean call: this thing matters, and waiting longer has costs the deciders are not naming. Saddle up. Go.',
    reversed: 'Reversed, the Knight of Wands is recklessness, impulsivity, the leap made for ego rather than direction. He can also point to delay — the energy is wanting to launch but something is keeping the horse rearing in place rather than charging forward. Or to scattered momentum: lots of motion, no direction. The fix is intention: name where you are actually going before you spur the horse.',
    as_a_person: 'As a person, the Knight of Wands is the bold one — the entrepreneur, the traveler, the pivot-maker, the friend who makes big leaps that look reckless and turn out to be timely. He is also, sometimes, the unreliable lover — passionate at the start, gone by the third month. Watch for him in your life this week: he may be making you an exciting offer, or he may be the energy you are being asked to embody.',
    in_love: 'In love, the Knight of Wands is the whirlwind — the fast romance, the love-at-first-sight that may or may not last, the partner who arrived in your life like weather. If single, a passionate connection may be near; check whether the chemistry has substance under it. If partnered, the card is asking for a bold move — the trip together, the proposal, the breaking of the routine that has been slowly killing the spark.',
    in_work: 'In work, the Knight of Wands is the launch — the pitch made, the company started, the role accepted, the brave move that needs to be made before the conditions are perfectly safe (because they will never be perfectly safe). Career under this knight rewards courage and punishes hesitation.',
    the_shadow: 'The shadow of the Knight of Wands is the leap that was actually a flight — the bold move that was not toward something but away from something the rider did not want to face. Or the burner-of-bridges who confuses drama with direction. The cure: pause long enough to name where you are going, then go.',
    when_pulled: 'When you pull the Knight of Wands, the leap has waited long enough. The risk is real. The opportunity is also real. Saddle up — and pick your direction before you spur the horse.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Garnet — passionate momentum',
    key_questions: [
      'What leap have I been planning for so long that the planning has started to be a way of avoiding the leap?',
      'Where would more momentum and less analysis change what is possible in the next 30 days?',
      'Am I about to leap toward something I want — or away from something I do not want to feel?'
    ]
  },
  {
    slug: 'queen-of-wands', rank: 'queen', suit: 'wands',
    display: 'Queen of Wands', emoji: '🌻',
    archetype: 'the magnetic sovereign — charismatic mastery, the warmth that draws people in',
    one_liner: 'Magnetism. Confidence. The woman whose presence in the room changes the room — and who knows it.',
    upright: 'The Queen of Wands sits on a throne flanked by lions, holding a sunflower in one hand and her staff in the other. A black cat sits at her feet. Every detail is charisma — she is the radiant one, the leader who does not have to raise her voice because the room already turns when she enters. She is mastery of fire that has matured: confidence without aggression, ambition without contempt, charisma that is generous rather than performative. When this card lands, you are being called to occupy your own magnetism — to stop dimming, stop apologizing for taking up space, stop pretending you do not see how the room re-arranges around you when you walk in. The Queen of Wands is the boss, the leader, the matriarch of the creative project, the friend whose self-confidence is contagious. She also represents the gift of being able to motivate others without having to manage them — she leads by example, by warmth, by *being lit up* in a way that gives others permission to be lit up too.',
    reversed: 'Reversed, the Queen of Wands can swing to two shadows. One is jealousy and competitive cattiness — the "queen bee" who guards her position by undermining other rising women (or men) in her sphere. The other is dimming — the woman who has been told for so long she is "too much" that she has agreed to take up half the room she was made for. The cure for the first is generosity; the cure for the second is permission. The world does not need fewer Queens. The world needs every Queen at full brightness.',
    as_a_person: 'As a person, the Queen of Wands is the magnetic one — the entrepreneur, the performer, the matriarch, the leader, the friend whose home is a hub. She is often a feminine-energy figure who has stopped asking permission and started leading. Watch for her this week: she may be your mentor, your collaborator, the person who gives you the contact that changes your career — or you may be being asked to become her.',
    in_love: 'In love, the Queen of Wands is the partner who is fully herself — the one whose self-possession is the very thing that makes her irresistible. If single, this card asks you to stop performing availability and start being unmistakably *you*; the right partner is drawn to that. If partnered, the card is asking whether your full self is in the relationship, or whether you have shrunk to make space for your partner\'s comfort.',
    in_work: 'In work, the Queen of Wands is the creative leader, the founder, the visible artist, the person whose career is built on personality + skill in equal measure. She is the public face. A career reading under this Queen is asking you to step into more visibility, not less — to write under your own name, to put your face on the work, to lead the meeting instead of taking the notes.',
    the_shadow: 'The shadow of the Queen of Wands is the diva — the leader who burns through staff because she cannot share the spotlight, the friend whose charisma is real but whose generosity is performative. Or the dimmer Queen — the woman who agreed, somewhere, that her brightness was a problem. Both shadows resolve in the same way: choose generosity at full brightness.',
    when_pulled: 'When you pull the Queen of Wands, your magnetism is being asked to stop hiding. Stand at full height. Lead from warmth. Take up the room you were made for, and trust that the room can hold you.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine — confident radiance',
    key_questions: [
      'Where am I dimming because someone, once, told me I was too much?',
      'Whose room am I being asked to walk into and change with my full presence — and what is keeping me at the door?',
      'How can I lead from generosity instead of competition?'
    ]
  },
  {
    slug: 'king-of-wands', rank: 'king', suit: 'wands',
    display: 'King of Wands', emoji: '🦁',
    archetype: 'the visionary leader — fire that builds rather than consumes, the elder who sees the empire',
    one_liner: 'Visionary leadership. Fire that has learned to build. The founder, the patriarch, the one who can see the whole map.',
    upright: 'The King of Wands sits on a throne carved with lions and salamanders, his staff held with the easy authority of a man who has earned his crown. He is fire that has matured: passion that has become vision, drive that has become strategy, charisma that has become leadership. He sees the whole map. He is the founder who can hold the ten-year plan and the next-month launch in the same breath. He is the patriarch (or patriarchal-energy figure) who leads not by control but by clarity of direction — people follow him because he knows where he is going. When this card lands, you are being called to (or being given access to) visionary leadership: the capacity to see further than the people around you and to set a direction that pulls them forward without having to push. The shadow King is the tyrant — fire turned to wildfire, ego unchecked — but the upright King has learned the discipline of fire: how to keep it warm enough to lead by, how to keep it from burning the people working under it.',
    reversed: 'Reversed, the King of Wands is the tyrant, the egomaniac, the leader whose fire has become destructive — the founder who burns out his own team, the visionary whose vision has become solipsism. Or the King who has lost his fire entirely — the once-bold leader who is now risk-averse, played-out, going through the motions. The fix: relight from a place of service, not ego. The crown is for the kingdom, not for the king.',
    as_a_person: 'As a person, the King of Wands is often a mature masculine-energy figure with vision and charisma — the founder, the senior leader, the patriarch, the older mentor whose career trajectory is what you would like yours to be. Watch for him in your life this week: he may be a mentor entering your story, an investor who sees you, a leader you are being asked to step into being.',
    in_love: 'In love, the King of Wands is the partner with vision — the one who can see your shared life ten years out and is building toward it. He is the partner who leads by example, who has done his work, who can hold the long arc of the relationship while also tending the daily hour. If single, you are being prepared to recognize a partner of substance and direction. If partnered, the card asks whether the two of you are co-architects of a shared vision or just sharing a calendar.',
    in_work: 'In work, the King of Wands is the visionary founder, the senior leader, the entrepreneur whose company is built around a clear thesis. A career reading under this King is asking for visionary leadership: name where you are going, and lead from there. The team will follow if you can articulate the destination clearly.',
    the_shadow: 'The shadow of the King of Wands is the tyrant — the founder who confuses vision with control, the leader whose ego has eaten the kingdom. Or the burned-out King — the one whose fire has gone cold and who is going through the motions. The cure for the first is humility; for the second, a return to first principles: what did you originally light this fire for?',
    when_pulled: 'When you pull the King of Wands, you are being called to lead. Not loudly. Not from ego. From vision — the clarity of a destination so clearly seen that others can see it through your eyes and choose to walk with you.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Sunstone — radiant leadership',
    key_questions: [
      'What is the destination I have been seeing clearly but not yet naming out loud to the people around me?',
      'Where is my fire building something — and where has it begun to burn the people who are building it with me?',
      'What would the most generous version of my leadership look like this quarter?'
    ]
  },
  // ===== SWORDS (air — mind, thought, conflict) =====
  {
    slug: 'page-of-swords', rank: 'page', suit: 'swords',
    display: 'Page of Swords', emoji: '🪶',
    archetype: 'the curious student — beginner critical thinking, the watchful eye',
    one_liner: 'Curiosity, vigilance, the quick mind. The student, the spy, the new idea sharp enough to cut.',
    upright: 'The Page of Swords stands on a windy hilltop, sword raised, looking back over his shoulder. He is alert — the wind is moving, the world is shifting, and he is paying attention. This is the beginner version of mental clarity: curiosity, watchfulness, the willingness to examine a situation from every angle before committing. He is also the messenger of news — often news that is sharp, that requires honesty, that may not be welcome. When this card lands, an idea or a piece of information is asking to be looked at clearly. Don\'t flinch. Don\'t fantasize. Examine the thing with the cool eye it deserves. The shadow Page is the gossip — the one who collects information for ammunition rather than understanding — but the upright Page is the truth-seeker, learning how to think with discipline before he learns how to wield the sword without wounding.',
    reversed: 'Reversed, the Page of Swords is gossip, paranoia, mental restlessness, news delivered cruelly or received in bad faith. He can also signal a young person (or younger-energy figure) using their sharp mind for cynicism rather than insight — the cleverness without the wisdom. The fix: ask whether the thought is making you more clear-eyed or more anxious; if anxious, the signal has become noise.',
    as_a_person: 'As a person, the Page of Swords is the smart young friend, the curious junior colleague, the journalist, the analyst, the kid who notices everything. Sometimes he is the messenger of difficult news. Watch for him this week — he may bring you a sharp insight, an honest critique, or an inconvenient truth.',
    in_love: 'In love, the Page of Swords is the message — often an honest one, sometimes an uncomfortable one. The text that names something. The conversation that finally happens. If single, watch for someone who engages your mind first; this is the best Page-of-Swords love. If partnered, the card asks for an honest conversation that has been deferred.',
    in_work: 'In work, the Page of Swords is the new analytical project, the research that needs doing, the contract that needs careful reading. Use the sharp mind for understanding, not for cutting people down. The card also signals: the inconvenient truth is more useful right now than the comfortable assumption.',
    the_shadow: 'The shadow of the Page of Swords is the cynic — the smart young person who has confused "seeing through" with "seeing." Or the gossip — the collector of information used as ammunition. The cure is the same: pair the sharpness with kindness. Mental sword is most powerful when it is wielded for clarity, not for combat.',
    when_pulled: 'When you pull the Page of Swords, examine the situation with cool eyes. The information you need is available — you have just been afraid to look at it directly. Look. The truth is the kindest version of the next step.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Sodalite — clear seeing',
    key_questions: [
      'What truth have I been refusing to look at directly because looking would mean acting?',
      'Whose honest message have I been receiving as an attack when it was offered as a gift?',
      'Am I using my sharp mind to understand or to wound?'
    ]
  },
  {
    slug: 'knight-of-swords', rank: 'knight', suit: 'swords',
    display: 'Knight of Swords', emoji: '🌪️',
    archetype: 'the crusader — mental velocity, the cause, the charge for truth',
    one_liner: 'Mental velocity. The charge into battle for an idea. The fast, focused, sometimes-too-fast pursuit of truth.',
    upright: 'The Knight of Swords charges across the page at full gallop, sword raised, the wind tearing his cloak behind him. He is the fastest knight in the deck — and the most focused. This is mental velocity in pursuit of a cause: the lawyer in court, the writer on deadline, the activist marching, the entrepreneur cutting through bureaucracy with a clear argument. He is *go*. He is the moment when thinking has reached the point of action and the action is decisive. When this card lands, a focused intellectual charge is being asked of you — write the brief, send the memo, make the case, take the position. The shadow Knight is the bully who confuses being right with being kind, who charges through nuance like it does not exist — but the upright Knight has chosen his cause carefully and is wielding his sharpness in service of it.',
    reversed: 'Reversed, the Knight of Swords is the bull in the china shop — fast, focused, and wreaking havoc he has not yet noticed. He can also point to scattered intellectual energy or to communication delivered too sharply. The fix: slow the horse. The truth lands better when it is delivered with care, not just with velocity.',
    as_a_person: 'As a person, the Knight of Swords is the focused communicator — the lawyer, the activist, the journalist on a story, the entrepreneur charging at a market. He is sometimes the partner whose intellect is the main attraction (and whose lack of patience is the main difficulty). Watch for him this week: he may bring you sharp news, a fast deal, a cutting remark, or a charge you are being asked to join.',
    in_love: 'In love, the Knight of Swords is the partner whose mind is the magnetism. The fast-talking, sharp, witty connection. If single, this kind of pairing is often near. If partnered, the card asks: are the two of you communicating at the speed of love, or at the speed of debate? The mind is the gift; it is also, sometimes, the wall.',
    in_work: 'In work, the Knight of Swords is the project that requires focused intellectual charge — the launch, the lawsuit, the campaign, the manuscript on deadline. Pour the mental fire forward. Cut through the noise. But check in once a week: are you cutting toward the destination or just cutting?',
    the_shadow: 'The shadow of the Knight of Swords is the bully — the person whose sharpness has become weapon, whose velocity has become reckless, whose charge has become its own purpose. Or the keyboard warrior — fighting battles online that the body cannot sustain. The cure: pick your cause more carefully, then move with dignity, not just speed.',
    when_pulled: 'When you pull the Knight of Swords, focused mental action is asked of you. Pick your cause. Charge clean. Watch your impact on the people you pass.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Kyanite — clean speech',
    key_questions: [
      'What cause have I been thinking about for too long without yet charging at it?',
      'Where is my mental velocity helping — and where is it leaving wounded people in its wake?',
      'Am I fighting for truth, or just fighting?'
    ]
  },
  {
    slug: 'queen-of-swords', rank: 'queen', suit: 'swords',
    display: 'Queen of Swords', emoji: '🦅',
    archetype: 'the truth-teller — perceptive mastery, the woman who has earned her edge',
    one_liner: 'Clarity earned through experience. The friend who tells you the truth nobody else will, with love and without flinching.',
    upright: 'The Queen of Swords sits on a throne above the clouds, sword held upright, her other hand extended in a kind of welcome — but only on her terms. She has lived enough to be unbothered by other people\'s discomfort with her honesty. She has been wounded; the wound has become wisdom; the wisdom has become a sword she now wields cleanly. She is the friend who tells you the truth nobody else will tell you, and tells it without cruelty. She is the editor whose feedback is sharp and exactly right. She is the partner whose word holds. She is the mother (or mother-energy figure) who has stopped lying to herself and to her children. When this card lands, you are being called to mature truth-telling — to say the thing that needs saying, with care for the listener but without hiding what is real. The Queen of Swords does not soften her truth to make it palatable; she sharpens her *kindness* to deliver it well.',
    reversed: 'Reversed, the Queen of Swords can swing two ways. One is bitterness — wisdom hardened into cynicism, a woman whose wounds have become bars instead of doors. The other is over-softening — the woman who has so much truth to tell and keeps swallowing it, becoming resentful and quietly hostile. The cure for both is the same: speak the truth out loud, with love, and do it before the bitterness sets in.',
    as_a_person: 'As a person, the Queen of Swords is the wise truth-teller — often a feminine-energy figure who has lived enough to no longer be afraid of honest conversation. The lawyer, the editor, the elder sister, the divorced mother who knows what she knows. Watch for her this week: she may be the friend whose hard advice you have been avoiding, or the energy you are being asked to embody.',
    in_love: 'In love, the Queen of Swords represents the partner who can tell you the hard truth and stay loving while doing it. The relationship under this Queen is built on a foundation of clean communication — even when the news is hard, even when the boundary is unwelcome. If single, you are being asked to stop softening yourself to be palatable; the right partner is drawn to your edge. If partnered, the card calls for a difficult, loving conversation.',
    in_work: 'In work, the Queen of Swords is the editor, the executive, the lawyer, the consultant whose feedback changes the trajectory of the project. A career reading under this Queen is asking for clean communication and the willingness to deliver hard news with grace. If you are leading, lead with truth. If you are being led, listen to the truth-teller in the room.',
    the_shadow: 'The shadow of the Queen of Swords is the bitter ex — wisdom hardened into a weapon, the truth-teller who tells the truth specifically to wound. Or the silent resenter, who has so much to say and never says it. The cure for both is the same: speak the truth, kindly, soon enough that it does not have to ferment into bitterness first.',
    when_pulled: 'When you pull the Queen of Swords, the truth is asking to be spoken — with love, with clarity, and without delay. Sharpen your kindness. Soften your sword. Speak.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Lapis lazuli — wise truth',
    key_questions: [
      'What truth have I been swallowing because I am afraid the listener will not be able to hold it?',
      'Where has my wisdom started to harden into bitterness — and what would it take to soften it back into wisdom?',
      'Whose truth-teller in my life have I been avoiding because I already know what they are going to say?'
    ]
  },
  {
    slug: 'king-of-swords', rank: 'king', suit: 'swords',
    display: 'King of Swords', emoji: '⚖️',
    archetype: 'the judge — mental sovereignty, the elder whose word lands clean',
    one_liner: 'Mental sovereignty. The judge, the elder, the mind so disciplined that the word lands cleanly the first time.',
    upright: 'The King of Swords sits on a throne in profile, sword held upright in his right hand. He is mental mastery in its mature form — the judge, the elder, the mind so disciplined that a single sentence from him can reorganize a situation. He is the leader who can hold a difficult decision steady against the pressure to please everyone. He is the lawyer whose argument is so clean it makes opposing counsel sit down. He is the father (or father-energy figure) whose word lands the first time, because his word has always meant what he said it meant. When this card lands, you are being called to clarity that has been earned — the kind that does not need to repeat itself to be heard. The shadow King is the cold judge — the man whose mind has become a weapon, whose sword cuts everything, including the people who love him — but the upright King wields the sword for the kingdom, not for his ego.',
    reversed: 'Reversed, the King of Swords can be the cold judge, the manipulator, the man whose mind has been weaponized — abusive in language, cutting in argument, weaponizing logic against the people who feel things. Or the King who has lost his clarity entirely — confused, ungrounded, making decisions without a thesis. The fix: come back to first principles. What do you actually believe, and what is the cleanest possible articulation of it?',
    as_a_person: 'As a person, the King of Swords is often a mature, decisive masculine-energy figure — the judge, the senior executive, the elder mentor, the father whose word has always held. Watch for him this week: he may be a mentor offering you sharp counsel, an authority figure in a difficult conversation, or the leader you are being asked to grow into.',
    in_love: 'In love, the King of Swords is the partner who can hold the difficult conversation without flinching, who can be honest without being cruel, who can hold a boundary cleanly. If single, you are being prepared to recognize this kind of clarity — and to weed out manipulators who imitate it. If partnered, the card asks for clean speech: the conversation that has been postponed needs to happen, and it needs to be honest.',
    in_work: 'In work, the King of Swords is the executive whose decisions are clean, the lawyer whose word holds, the senior strategist whose thesis is the team\'s map. A career reading under this King calls for decisive leadership grounded in honest analysis. If you are being asked to make a hard call, this is the King\'s permission to make it.',
    the_shadow: 'The shadow of the King of Swords is the cold patriarch — the man whose mind has eaten his heart, whose logic has become a weapon, whose authority is exercised against the very people he is supposed to be protecting. The cure is to remember whom the sword is for: not the king, but the kingdom.',
    when_pulled: 'When you pull the King of Swords, decisive clarity is being asked of you. Make the call. Speak it cleanly. Hold the boundary without apology. The kingdom is watching, and the kingdom needs a sovereign who can think.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Clear quartz — pure clarity',
    key_questions: [
      'What decision have I been postponing because I have been waiting for everyone to be comfortable with it?',
      'Where has my logic become a weapon against the people who love me?',
      'What would it look like to speak so cleanly that I do not need to repeat myself?'
    ]
  },
  // ===== PENTACLES (earth — body, money, work, home) =====
  {
    slug: 'page-of-pentacles', rank: 'page', suit: 'pentacles',
    display: 'Page of Pentacles', emoji: '🌱',
    archetype: 'the apprentice with the coin — beginner relationship to the material world',
    one_liner: 'A new opportunity in the material world — money, work, study, body, home. The seed that wants tending.',
    upright: 'The Page of Pentacles stands in a green meadow, holding a single golden coin up to the light, studying it the way a beginner studies a new craft. The card is the beginning of the material build: the new job, the first paycheck, the new business idea, the return to study, the new exercise practice, the first deposit into a savings account that will, twenty years later, be a real number. This is the seed — small, single, easy to dismiss. The Page asks you to take it seriously. The shadow Page treats opportunity as a fantasy ("when this gets bigger, I\'ll start") — but the upright Page treats every small opportunity as the actual thing, because every large thing began as a small thing tended carefully. When this card lands, the universe is offering a seed. Plant it. Tend it. Don\'t wait for a bigger one.',
    reversed: 'Reversed, the Page of Pentacles is the fantasist who never starts — the person with twenty business ideas and zero tax returns. Or the procrastinator who keeps treating opportunity as something to consider rather than something to act on. It can also signal money mismanagement at a beginner level: the first paycheck wasted, the savings account never opened. The fix: do the small concrete thing this week. Open the account. Send the invoice. Sign up for the class.',
    as_a_person: 'As a person, the Page of Pentacles is the diligent student, the new apprentice, the young person taking their first job seriously. He is often the messenger of opportunity — a job offer, a scholarship, a contract, a new client. Watch for him this week.',
    in_love: 'In love, the Page of Pentacles is the slow build — the relationship that begins not in fireworks but in steady, gentle, increasing investment. If single, watch for someone who is more grounded than glamorous; the long-haul partner often arrives this way. If partnered, the card asks for tending the small daily things — the meals together, the chores shared, the small physical kindnesses.',
    in_work: 'In work, the Page of Pentacles is the new opportunity — the job offer, the first contract, the small client who could become a long relationship. Take the small thing seriously. The career under this Page is built one small honored opportunity at a time.',
    the_shadow: 'The shadow of the Page of Pentacles is the perpetual planner — the person who has mapped out the empire and never built the first room. The cure is the smallest possible first action, done now.',
    when_pulled: 'When you pull the Page of Pentacles, a seed is being offered. Treat it like a real thing. Plant it. Water it. Twenty years from now you will look back and realize the entire build started here.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Green aventurine — grounded opportunity',
    key_questions: [
      'What small opportunity have I been treating as too small to honor — and what would happen if I treated it as real?',
      'What is the one concrete material action I have been postponing in favor of "thinking about it"?',
      'Where is the universe offering me a seed I keep waiting for to look more like a tree before I plant it?'
    ]
  },
  {
    slug: 'knight-of-pentacles', rank: 'knight', suit: 'pentacles',
    display: 'Knight of Pentacles', emoji: '🐂',
    archetype: 'the slow steady worker — methodical motion, the long horizon',
    one_liner: 'Slow, steady, reliable. The work that does not look exciting and turns out to be the work that built everything.',
    upright: 'The Knight of Pentacles sits motionless on a heavy workhorse, looking out over a ploughed field. He is the slowest knight in the deck — and the most reliable. This is the disciplined long build: the daily showing up, the practice, the work that does not look exciting and turns out, ten years later, to be the work that built everything. He is the entrepreneur who works for a decade before anyone notices, the artist who paints every morning whether inspired or not, the partner who shows up consistently for two decades. When this card lands, you are being called to *steadiness*. Not flashes. Not breakthroughs. The honest daily work that compounds. The shadow Knight is stuckness — the man who confuses motionlessness with patience, who has been "building" for ten years without shipping anything — but the upright Knight is moving, just slowly enough that the move is sustainable.',
    reversed: 'Reversed, the Knight of Pentacles is stagnation, perfectionism that prevents shipping, or the workaholic grind that has lost its purpose. The fix: ship something imperfect. Take a break. Rebuild the relationship between effort and outcome.',
    as_a_person: 'As a person, the Knight of Pentacles is the dependable one — the partner whose word holds across decades, the colleague whose work is always good enough, the friend who shows up. He is sometimes underrated because he is not flashy; the upright Knight asks you to value him properly. Watch for him this week.',
    in_love: 'In love, the Knight of Pentacles is the long-haul partner — the one who shows up daily, who keeps his promises, whose love is felt in the consistency rather than the grand gesture. If single, this card asks you to stop overlooking the slower-burn options in favor of the high-drama ones. If partnered, recognize the daily reliability of your partner as the form their love is taking.',
    in_work: 'In work, the Knight of Pentacles is the long-horizon project — the business that takes a decade to build, the practice that compounds, the manuscript written one chapter a month. Don\'t rush it. The slow build is the build. Career under this Knight rewards patience and punishes shortcut-seeking.',
    the_shadow: 'The shadow of the Knight of Pentacles is the perfectionist who never ships, or the workaholic whose grind has lost its meaning. The cure: ship something imperfect. Take a real day off. Reconnect effort to purpose.',
    when_pulled: 'When you pull the Knight of Pentacles, the steady daily work is the work. No shortcuts. The slow horse will get you there — and arrive with you intact.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Hematite — grounded persistence',
    key_questions: [
      'Where am I waiting for a breakthrough when the actual work is the daily compounding?',
      'What slow, steady person in my life have I been undervaluing?',
      'What is the smallest sustainable practice I could commit to for the next 90 days?'
    ]
  },
  {
    slug: 'queen-of-pentacles', rank: 'queen', suit: 'pentacles',
    display: 'Queen of Pentacles', emoji: '🌷',
    archetype: 'nurturing abundance — the matriarch of the household, the woman who has built a life that nourishes',
    one_liner: 'Nurturing abundance. The mother of the household. The woman who has built a life — a body, a home, a business — that actually nourishes the people inside it.',
    upright: 'The Queen of Pentacles sits on a throne in a fertile garden, holding a coin in her lap with a rabbit (fertility, abundance) at her feet. She is mastery of the material life made warm — money in service of love, work in service of nourishment, the home built so that the people inside it are actually fed. She is the mother (or mother-energy figure) who has built a life that holds her children and her work and her body and her home in tender balance. She is also the entrepreneur whose business takes care of her team, the friend whose hospitality is legendary because she actually loves feeding people. When this card lands, you are being called to (or being given) the integration of abundance and nourishment — the discipline to build the material life *and* the warmth to make sure the build is in service of love. The shadow Queen is the workaholic mother whose abundance has come at the cost of her presence — but the upright Queen has resolved the false choice between providing and being present.',
    reversed: 'Reversed, the Queen of Pentacles is either neglected (the body untended, the home chaotic, the bank account drained because she has been pouring into everyone but herself) or smothering (the over-provider whose generosity has become a way of controlling). The cure for both: tend yourself first. You cannot nourish from depletion, and you cannot give from a closed fist.',
    as_a_person: 'As a person, the Queen of Pentacles is the warm matriarch — often a feminine-energy figure who has built a household, a business, a body, a life that nourishes. The mother whose home is a refuge. The boss who actually cares for her team. The friend who feeds you, literally and otherwise. Watch for her this week.',
    in_love: 'In love, the Queen of Pentacles is the partner who builds a life with you — the home, the meals, the daily nourishment that makes love sustainable. If single, you are being asked to value (and to embody) groundedness as romance. If partnered, the card asks: are the two of you building a life that nourishes both of you, or is one nourishing the other?',
    in_work: 'In work, the Queen of Pentacles is the founder whose company nourishes its team, the leader whose work has soul, the builder whose money is in service of something. A career reading under this Queen asks: does the way I make money also nourish me, or am I trading my body and my time for numbers in a screen?',
    the_shadow: 'The shadow of the Queen of Pentacles is the depleted mother — the woman who has poured everything into the family, the business, the friends, and has nothing left for herself. Or the materialistic Queen — the one who confuses abundance with hoarding. Both shadows resolve in the same place: tend your own garden first.',
    when_pulled: 'When you pull the Queen of Pentacles, you are being called to nourishing abundance — money, body, home, food, all in service of love. Tend yourself first. Then let what overflows nourish the people you love.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Green jade — abundant nurturance',
    key_questions: [
      'Where am I pouring nourishment outward while my own garden goes dry?',
      'Is the way I am making money also nourishing me — or am I trading my body for numbers?',
      'What would it look like to receive my own care this week as generously as I give it to others?'
    ]
  },
  {
    slug: 'king-of-pentacles', rank: 'king', suit: 'pentacles',
    display: 'King of Pentacles', emoji: '🏰',
    archetype: 'the master craftsman — patriarch of the long build, the empire that nourishes',
    one_liner: 'Material mastery. The empire that nourishes. The man who built it slowly, built it well, and built it to last.',
    upright: 'The King of Pentacles sits on a throne carved with grapevines and bull-heads, dressed in robes embroidered with grapes, his palace visible behind him. He is mastery of the material world made permanent. The empire is built. The wealth is real. The body is tended. The home is solid. The reputation is unimpeachable. He is the patriarch (or patriarchal-energy figure) whose word in business has held for forty years, whose company is a legacy, whose family is provided for, whose body is alive in his sixties because he tended it in his thirties. When this card lands, you are being called to (or being given access to) the long-arc material build — the patient construction of real wealth, real reputation, real physical wellbeing. The shadow King is the miser — the man whose empire has become a fortress against generosity — but the upright King has resolved: the empire is *for* the kingdom, not for the king.',
    reversed: 'Reversed, the King of Pentacles is the miser, the workaholic patriarch whose empire has eaten his presence, the man whose wealth is a wall instead of a foundation. Or the King who has confused money with worth. The fix: open the gates. Use the wealth in service of love. The empire is not the point; the people inside it are.',
    as_a_person: 'As a person, the King of Pentacles is the established mature masculine-energy figure — the founder whose company is real, the patriarch whose family is solid, the elder whose advice on money or business is gold. Watch for him this week: he may be a mentor offering counsel, a partner whose stability is itself the gift, or the man you are being asked to grow into being.',
    in_love: 'In love, the King of Pentacles is the partner who has built a life and is offering to share it — the established, grounded, generous partner who can hold the long horizon. If single, you are being prepared to recognize (or to be) this kind of partner. If partnered, the card asks: is the wealth we have built in service of our shared life, or has it started to become its own end?',
    in_work: 'In work, the King of Pentacles is the founder whose business is solid, the established expert, the patriarch of the family enterprise. A career reading under this King asks for the long-arc build and rewards patience, generosity, and the willingness to build something that outlasts you.',
    the_shadow: 'The shadow of the King of Pentacles is the miser-patriarch — the man whose empire has become a fortress against vulnerability, whose wealth has become his worth. The cure: spend the money on love. Use the empire to nourish the people inside it.',
    when_pulled: 'When you pull the King of Pentacles, the long material build is yours to steward. Build it well. Build it slow. Build it for the kingdom, not for the king.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Pyrite — manifest mastery',
    key_questions: [
      'Where has my empire become a fortress against the very people I built it for?',
      'What long-horizon build is my soul asking me to commit to seriously this decade?',
      'Am I using money as a tool of love, or as a substitute for it?'
    ]
  }
]

// ---------- helpers ----------

export const COURT_SLUGS = COURT_CARDS.map((c) => c.slug)
export const SUIT_SLUGS: Suit[] = ['cups', 'wands', 'swords', 'pentacles']

const COURT_BY_SLUG: Record<string, CourtCard> = Object.fromEntries(
  COURT_CARDS.map((c) => [c.slug, c])
)
const SUIT_BY_SLUG: Record<string, SuitProfile> = Object.fromEntries(
  SUITS.map((s) => [s.slug, s])
)

export function isCourtSlug(s: string): boolean { return s in COURT_BY_SLUG }
export function isSuitSlug(s: string): s is Suit { return s in SUIT_BY_SLUG }

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Suit-tinted gradient.
const SUIT_ACCENT: Record<Suit, { c1: string; c2: string }> = {
  cups:      { c1: '#5a8ec6', c2: '#2c4a78' },   // ocean blue
  wands:     { c1: '#d6814a', c2: '#9b4828' },   // ember orange
  swords:    { c1: '#7a8ca8', c2: '#3d4a5e' },   // cool steel-blue
  pentacles: { c1: '#7a9b6a', c2: '#3d5d2c' }    // earth green
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function rankLabel(rank: Rank): string {
  return rank === 'page' ? 'Page' : rank === 'knight' ? 'Knight' : rank === 'queen' ? 'Queen' : 'King'
}

// ---------- per-court-card page ----------

export function courtCardPageHTML(slug: string): string {
  const c = COURT_BY_SLUG[slug]
  if (!c) return ''
  const suit = SUIT_BY_SLUG[c.suit]
  const accent = SUIT_ACCENT[c.suit]
  const readingHref = `/gab44/reading?ref=court-${slug}`

  const title = `${escapeHtml(c.display)} — Upright, Reversed, Love, Work &amp; the Shadow · gab44 ✨`
  const description = `${c.display}: upright meaning, reversed meaning, as a person, in love, in work, the shadow, when you pull this card. Hand-written, warm, honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: 'Court Cards', item: `${SITE_URL}/gab44/tarot/court` },
          { '@type': 'ListItem', position: 4, name: c.display, item: `${SITE_URL}/gab44/tarot/court/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${c.display}: meaning, love, work, shadow`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/tarot/court/${slug}`,
        about: `${c.display}, tarot court card, ${c.suit} tarot, tarot meaning`
      }
    ]
  })

  // related: other 3 cards in the same suit + 1 in same rank from another suit
  const sameSuit = COURT_CARDS.filter((q) => q.suit === c.suit && q.slug !== slug)
  const sameRank = COURT_CARDS.filter((q) => q.rank === c.rank && q.slug !== slug).slice(0, 3)
  const relatedSuitHtml = sameSuit.map((q) => {
    const acc = SUIT_ACCENT[q.suit]
    return `<a class="ph-mini" href="/gab44/tarot/court/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.display)}</span></a>`
  }).join('\n        ')
  const relatedRankHtml = sameRank.map((q) => {
    const acc = SUIT_ACCENT[q.suit]
    return `<a class="ph-mini" href="/gab44/tarot/court/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.display)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/court/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/court/${slug}" />
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
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .rank-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px;
    margin-right: 8px; }
  .suit-pill { display: inline-block; background: var(--bg-1); border: 1px solid var(--line);
    color: var(--fg-dim); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 12px; }
  .suit-pill a { color: var(--accent); text-decoration: none; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .ud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ud-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .ud-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ud-card.rev { border-left-color: var(--c2); opacity: 0.97; }
  .ud-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ud-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel p { margin: 0 0 10px; font-size: 15px; }
  .signs-panel p:last-child { margin-bottom: 0; }
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; font-size: 13px; color: var(--fg-dim); text-decoration: none;
    transition: border-color 0.15s; }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 4px; }
  .pair-card .pair-text { font-size: 12px; color: var(--fg-dim); line-height: 1.5; }
  .questions-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid #5a8ec6; }
  .questions-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions-card ol { margin: 0; padding-left: 20px; }
  .questions-card li { font-size: 14px; color: var(--fg); margin-bottom: 8px; line-height: 1.55; }
  .questions-card li:last-child { margin-bottom: 0; }
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
  .related-section { margin: 36px 0 22px; }
  .related-section h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .court-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; }
  @media (max-width: 600px) { .court-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/tarot">22 major arcana</a>
      <a href="/gab44/tarot/court">all 16 court cards</a>
      <a href="/gab44/tarot/suits/${c.suit}">${escapeHtml(suit.short)} suit</a>
      <a href="/gab44/tarot/spreads">spreads</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot court card</div>
    <span class="rank-pill">${escapeHtml(rankLabel(c.rank))}</span>
    <span class="suit-pill">suit of <a href="/gab44/tarot/suits/${c.suit}">${escapeHtml(suit.short.toLowerCase())}</a> · ${escapeHtml(suit.element.toLowerCase())}</span>
    <h1><span class="sym">${c.emoji}</span>${escapeHtml(c.display)}</h1>
    <p class="sub">${escapeHtml(c.archetype)} — ${escapeHtml(c.one_liner)}</p>

    <article class="core-card">
      <span class="label">upright meaning</span>
      <p class="text">${escapeHtml(c.upright)}</p>
    </article>

    <h2><span class="icon">↻</span>upright vs reversed</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>upright</h3>
        <p>${escapeHtml(c.one_liner)}</p>
      </div>
      <div class="ud-card rev">
        <h3>reversed</h3>
        <p>${escapeHtml(c.reversed)}</p>
      </div>
    </div>

    <h2><span class="icon">👤</span>as a person</h2>
    <div class="signs-panel">
      <h3>who shows up under this card</h3>
      <p>${escapeHtml(c.as_a_person)}</p>
    </div>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>in love</h3>
        <p>${escapeHtml(c.in_love)}</p>
      </div>
      <div class="ud-card">
        <h3>in work</h3>
        <p>${escapeHtml(c.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="signs-panel">
      <h3>the harder edge of this card</h3>
      <p>${escapeHtml(c.the_shadow)}</p>
    </div>

    <h2><span class="icon">🎴</span>when you pull this card</h2>
    <div class="signs-panel">
      <h3>what this card is asking of you right now</h3>
      <p>${escapeHtml(c.when_pulled)}</p>
    </div>

    <h2><span class="icon">🌿</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${c.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(c.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">the body-energy that resonates with this card</div>
      </a>
      <a class="pair-card" href="/healing/script/${c.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(c.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">a meditation that pairs with this card\'s frequency</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(c.pair_with_crystal.split(' (')[0].split(' or ')[0])}</div>
        <div class="pair-text">${escapeHtml(c.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>three honest questions</h3>
      <ol>
        <li>${escapeHtml(c.key_questions[0])}</li>
        <li>${escapeHtml(c.key_questions[1])}</li>
        <li>${escapeHtml(c.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for your specific question</h2>
      <p>This page teaches the card. A <strong>personal reading</strong> pulls the cards <em>for you</em>, against your chart and your specific question, and writes you a letter back. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot/court">all 16 court cards</a> · <a href="/gab44/tarot/suits/${c.suit}">the full ${escapeHtml(suit.short.toLowerCase())} suit</a> · <a href="/gab44/tarot">22 major arcana</a> · <a href="/gab44/tarot/spreads">tarot spreads</a> · <a href="/gab44/chakras/${c.pair_with_chakra_slug}">${escapeHtml(c.pair_with_chakra_slug.replace('-', ' '))} chakra</a>.
    </div>

    <section class="related-section">
      <h3>other ${escapeHtml(suit.short.toLowerCase())} court cards</h3>
      <div class="court-grid">
        ${relatedSuitHtml}
      </div>
      <h3>other ${escapeHtml(rankLabel(c.rank).toLowerCase())}s in the deck</h3>
      <div class="court-grid">
        ${relatedRankHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

// ---------- per-suit overview page ----------

export function suitPageHTML(slug: Suit): string {
  const s = SUIT_BY_SLUG[slug]
  if (!s) return ''
  const accent = SUIT_ACCENT[slug]
  const readingHref = `/gab44/reading?ref=suit-${slug}`

  const title = `${escapeHtml(s.display)} — Element, Realm, Court Cards &amp; the Lesson · gab44 ✨`
  const description = `${s.display}: what the suit governs, the gift, the shadow, in love and work, the arc through the suit, and pair-with chakra/sound/crystal. Hand-written.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: s.display, item: `${SITE_URL}/gab44/tarot/suits/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${s.display}: meaning, gift, shadow, court cards`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/tarot/suits/${slug}`,
        about: `${s.display}, ${s.element} tarot, tarot suits, tarot meaning`
      }
    ]
  })

  // 4 court cards in this suit
  const courtsInSuit = COURT_CARDS.filter((c) => c.suit === slug)
  const courtsHtml = courtsInSuit.map((c) => {
    return `<a class="court-card-link" href="/gab44/tarot/court/${c.slug}">
      <div class="ccl-rank">${escapeHtml(rankLabel(c.rank))}</div>
      <div class="ccl-emoji">${c.emoji}</div>
      <div class="ccl-title">${escapeHtml(c.display)}</div>
      <div class="ccl-arche">${escapeHtml(c.archetype.split(' — ')[0])}</div>
    </a>`
  }).join('\n        ')

  // other 3 suits
  const otherSuits = SUITS.filter((q) => q.slug !== slug)
  const otherSuitsHtml = otherSuits.map((q) => {
    const acc = SUIT_ACCENT[q.slug]
    return `<a class="ph-mini" href="/gab44/tarot/suits/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.short)}</span><span class="elem">${escapeHtml(q.element)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/suits/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/suits/${slug}" />
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
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .meta-pills { margin-bottom: 14px; }
  .meta-pill { display: inline-block; background: var(--bg-1); border: 1px solid var(--line);
    color: var(--fg-dim); padding: 4px 12px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.1em; font-weight: 700; margin-right: 6px; margin-bottom: 6px; }
  .element-pill { background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); border: none; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .ud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ud-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .ud-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ud-card.rev { border-left-color: var(--c2); }
  .ud-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ud-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel p { margin: 0; font-size: 15px; line-height: 1.65; }
  .court-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 14px 0; }
  @media (max-width: 600px) { .court-cards-grid { grid-template-columns: repeat(2, 1fr); } }
  .court-card-link { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 8px; text-decoration: none; text-align: center; transition: border-color 0.15s; display: block; }
  .court-card-link:hover { border-color: var(--c1); }
  .ccl-rank { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--fg-muted); font-weight: 700; }
  .ccl-emoji { font-size: 26px; margin: 6px 0 4px; }
  .ccl-title { font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .ccl-arche { font-size: 11px; color: var(--fg-dim); line-height: 1.4; font-style: italic; }
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; font-size: 13px; color: var(--fg-dim); text-decoration: none;
    transition: border-color 0.15s; }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 4px; }
  .pair-card .pair-text { font-size: 12px; color: var(--fg-dim); line-height: 1.5; }
  .questions-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid #5a8ec6; }
  .questions-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions-card ol { margin: 0; padding-left: 20px; }
  .questions-card li { font-size: 14px; color: var(--fg); margin-bottom: 8px; line-height: 1.55; }
  .questions-card li:last-child { margin-bottom: 0; }
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
  .other-section { margin: 36px 0 22px; }
  .other-section h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .other-suits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .ph-mini {
    text-align: center; padding: 14px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 26px; }
  .ph-mini .name { font-size: 13px; color: var(--accent); font-weight: 700; }
  .ph-mini .elem { font-size: 10px; color: var(--fg-muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/tarot">22 major arcana</a>
      <a href="/gab44/tarot/court">all 16 court cards</a>
      <a href="/gab44/tarot/spreads">spreads</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot suit</div>
    <div class="meta-pills">
      <span class="meta-pill element-pill">${escapeHtml(s.element)}</span>
      <span class="meta-pill">${escapeHtml(s.season)}</span>
      <span class="meta-pill">${escapeHtml(s.cardinal_direction)}</span>
      <span class="meta-pill">${escapeHtml(s.body)}</span>
    </div>
    <h1><span class="sym">${s.emoji}</span>${escapeHtml(s.display)}</h1>
    <p class="sub">${escapeHtml(s.archetype)}</p>

    <article class="core-card">
      <span class="label">the realm of ${escapeHtml(s.short.toLowerCase())}</span>
      <p class="text">${escapeHtml(s.the_realm)}</p>
    </article>

    <h2><span class="icon">🎁</span>the gift &amp; the shadow</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>the gift</h3>
        <p>${escapeHtml(s.the_gift)}</p>
      </div>
      <div class="ud-card rev">
        <h3>the shadow</h3>
        <p>${escapeHtml(s.the_shadow)}</p>
      </div>
    </div>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>in love</h3>
        <p>${escapeHtml(s.in_love)}</p>
      </div>
      <div class="ud-card">
        <h3>in work</h3>
        <p>${escapeHtml(s.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🎴</span>the four court cards of ${escapeHtml(s.short.toLowerCase())}</h2>
    <p style="font-size:14px;color:var(--fg-dim);margin-bottom:14px">Each court card is a way of meeting this suit\'s energy — beginner (Page) → seeker (Knight) → matured-internal (Queen) → matured-external (King).</p>
    <div class="court-cards-grid">
      ${courtsHtml}
    </div>

    <h2><span class="icon">📈</span>the arc through the suit</h2>
    <div class="signs-panel">
      <h3>ace through court</h3>
      <p>${escapeHtml(s.the_arc)}</p>
    </div>

    <h2><span class="icon">🌿</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${s.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(s.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">the body-energy that resonates with ${escapeHtml(s.short.toLowerCase())}</div>
      </a>
      <a class="pair-card" href="/healing/script/${s.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(s.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">a meditation that pairs with this suit</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(s.pair_with_crystal.split(' (')[0].split(' or ')[0])}</div>
        <div class="pair-text">${escapeHtml(s.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>three honest questions</h3>
      <ol>
        <li>${escapeHtml(s.key_questions[0])}</li>
        <li>${escapeHtml(s.key_questions[1])}</li>
        <li>${escapeHtml(s.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for your specific question</h2>
      <p>This page maps the suit. A <strong>personal reading</strong> pulls the cards <em>for you</em>, against your chart and your specific question, and writes you a letter back. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot">22 major arcana</a> · <a href="/gab44/tarot/court">all 16 court cards</a> · <a href="/gab44/tarot/spreads">tarot spreads</a> · <a href="/gab44/chakras/${s.pair_with_chakra_slug}">${escapeHtml(s.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/healing/script/${s.pair_with_sound_slug}">${escapeHtml(s.pair_with_sound_slug.replace(/-/g, ' '))} meditation</a>.
    </div>

    <section class="other-section">
      <h3>the other three suits</h3>
      <div class="other-suits-grid">
        ${otherSuitsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

// ---------- court cards index ----------

export function courtIndexHTML(): string {
  const title = `Tarot Court Cards — All 16 Pages, Knights, Queens &amp; Kings · gab44 ✨`
  const description = `All 16 tarot court cards explained — Page, Knight, Queen, King across Cups, Wands, Swords, Pentacles. Hand-written meanings, in love + work, the shadow, when you pull each card.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: 'Court Cards', item: `${SITE_URL}/gab44/tarot/court` }
        ]
      },
      {
        '@type': 'CollectionPage',
        name: 'Tarot Court Cards — all 16 + 4 suit overviews',
        description: description.substring(0, 280),
        url: `${SITE_URL}/gab44/tarot/court`
      }
    ]
  })

  // 4 rows × 4 columns: rows = ranks, columns = suits
  const RANKS: Rank[] = ['page', 'knight', 'queen', 'king']
  const SUIT_ORDER: Suit[] = ['cups', 'wands', 'swords', 'pentacles']

  const rowsHtml = RANKS.map((rank) => {
    const cells = SUIT_ORDER.map((suitSlug) => {
      const c = COURT_CARDS.find((q) => q.rank === rank && q.suit === suitSlug)!
      const acc = SUIT_ACCENT[suitSlug]
      return `<a class="grid-cell" href="/gab44/tarot/court/${c.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
        <div class="cell-emoji">${c.emoji}</div>
        <div class="cell-title">${escapeHtml(c.display)}</div>
        <div class="cell-arche">${escapeHtml(c.archetype.split(' — ')[0])}</div>
      </a>`
    }).join('\n      ')
    return `<div class="rank-row">
      <h3 class="rank-label">${escapeHtml(rankLabel(rank))}</h3>
      <div class="row-grid">
        ${cells}
      </div>
    </div>`
  }).join('\n    ')

  const suitsHtml = SUITS.map((s) => {
    const acc = SUIT_ACCENT[s.slug]
    return `<a class="suit-card" href="/gab44/tarot/suits/${s.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="suit-emoji">${s.emoji}</div>
      <div class="suit-title">${escapeHtml(s.short)}</div>
      <div class="suit-element">${escapeHtml(s.element)}</div>
      <div class="suit-tag">${escapeHtml(s.archetype.split(' — ')[0])}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/court" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/court" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, #5a8ec61c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, #d6814a1c 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 920px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, #5a8ec6, #d6814a); box-shadow: 0 0 0 4px rgba(90,142,198,0.18); }
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 32px; font-style: italic; max-width: 640px; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .intro-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 28px;
  }
  .intro-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .intro-card p { font-size: 15px; line-height: 1.7; color: var(--fg); margin: 0 0 12px; }
  .intro-card p:last-child { margin: 0; }

  .suits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 32px; }
  @media (max-width: 600px) { .suits-grid { grid-template-columns: repeat(2, 1fr); } }
  .suit-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 12px; text-align: center; text-decoration: none; transition: border-color 0.15s, transform 0.05s;
    border-top: 4px solid; border-image: linear-gradient(90deg, var(--c1), var(--c2)) 1; }
  .suit-card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .suit-emoji { font-size: 32px; margin-bottom: 6px; }
  .suit-title { font-size: 16px; font-weight: 800; color: var(--accent); margin-bottom: 2px; }
  .suit-element { font-size: 11px; color: var(--fg-muted); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; }
  .suit-tag { font-size: 12px; color: var(--fg-dim); margin-top: 6px; line-height: 1.4; font-style: italic; }

  .rank-row { margin-bottom: 24px; }
  .rank-label { font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; padding-left: 4px; }
  .row-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  @media (max-width: 600px) { .row-grid { grid-template-columns: repeat(2, 1fr); } }
  .grid-cell { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 10px; text-align: center; text-decoration: none; transition: border-color 0.15s;
    border-left: 3px solid var(--c1); }
  .grid-cell:hover { border-color: var(--c1); }
  .cell-emoji { font-size: 26px; margin-bottom: 6px; }
  .cell-title { font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .cell-arche { font-size: 11px; color: var(--fg-dim); line-height: 1.4; font-style: italic; }

  .reading-cta {
    background: linear-gradient(135deg, #5a8ec6 0%, #2c4a78 100%);
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
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/tarot">22 major arcana</a>
      <a href="/gab44/tarot/spreads">spreads</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot court cards</div>
    <h1><span class="sym">🎴</span>The 16 Court Cards</h1>
    <p class="sub">Page, Knight, Queen, King across Cups (water), Wands (fire), Swords (air), Pentacles (earth). The court cards are the people of the deck — the ones who walk into a reading and you suddenly know who the cards are talking about.</p>

    <article class="intro-card">
      <span class="label">how to read court cards</span>
      <p>Court cards are the most-misunderstood cards in tarot. New readers get nervous when one shows up because they are taught the cards represent literal people — and then no one in their life "fits". The truth is more useful: court cards represent <em>energies</em> first, and people second. The Page is beginner energy in this suit\'s realm. The Knight is seeking energy, motion, the chase. The Queen is matured-internal mastery — the energy turned inward. The King is matured-external mastery — the energy that holds a kingdom.</p>
      <p>Read the rank for the maturity of the energy. Read the suit for the realm. Then ask: where in my life am I being called to embody this — or who in my life is bringing this energy to me right now? Most court-card pulls are about <em>becoming</em>, not just describing.</p>
    </article>

    <h2><span class="icon">🜂</span>the four suits — pick a realm to go deep</h2>
    <div class="suits-grid">
      ${suitsHtml}
    </div>

    <h2><span class="icon">🎴</span>all 16 court cards by rank</h2>
    ${rowsHtml}

    <section class="reading-cta">
      <h2>✉️ Pulled a court card and want a reading written for you?</h2>
      <p>If a court card showed up in your last reading and you are not sure whether the energy is you, someone in your life, or something being asked of you — we\'ll pull a fresh spread <em>for your specific question</em>, written by hand against your chart, delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="/gab44/reading?ref=court-index">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot">all 22 Major Arcana</a> · <a href="/gab44/tarot/spreads">tarot spreads (3-card, Celtic Cross, love, career, etc)</a> · <a href="/gab44/runes">Elder Futhark runes</a> · <a href="/gab44/chakras">the 7 chakras</a> · <a href="/gab44/dreams">archetypal dreams</a>.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
