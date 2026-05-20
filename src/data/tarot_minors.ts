// Tarot Minor Arcana — Pip Cards SEO funnel.
// /gab44/tarot/minor (index) + /gab44/tarot/minor/{rank}-of-{suit} (40 pip card pages).
//
// Together with /gab44/tarot (22 majors), /gab44/tarot/court (16 court cards),
// /gab44/tarot/suits (4 suit overviews), and /gab44/tarot/spreads (8 spreads),
// THIS COMPLETES THE FULL 78-CARD TAROT DECK on gab44.
//
// Targets very-high-volume tarot keywords distinct from majors and court:
// "ace of cups meaning", "ten of swords reversed", "five of pentacles love",
// "three of wands career", "nine of cups wish", "eight of cups meaning",
// "two of pentacles balance", "six of swords transition". Pip cards are the
// MOST-PULLED cards in any tarot reading — there are 40 of them in a 78-card
// deck — so completing this cluster is the most-searched single ship in the
// gab44 tarot graph.
//
// Each pip card is ~500 words across 9 sections (one-liner, upright, reversed,
// in love, in work, the gift, the shadow, when pulled, key questions).
//
// Suit-tinted gradient (matches court cards): cups=ocean blue, wands=ember
// orange, swords=cool steel-blue, pentacles=earth green. Numerology-tinted
// rank label (ace, 2-10).
//
// Routes registered BEFORE /gab44/tarot/:card to avoid Hono RegExpRouter
// matching 'minor' as a card slug. Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export type Suit = 'cups' | 'wands' | 'swords' | 'pentacles'
export type PipRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface PipCard {
  slug: string                 // e.g. "ace-of-cups", "ten-of-swords"
  rank: PipRank
  suit: Suit
  display: string              // e.g. "Ace of Cups"
  emoji: string
  one_liner: string
  upright: string              // ~140w
  reversed: string             // ~80w
  in_love: string              // ~70w
  in_work: string              // ~70w
  the_gift: string             // ~50w
  the_shadow: string           // ~50w
  when_pulled: string          // ~60w
  key_questions: [string, string, string]
}

const RANK_NAMES: Record<PipRank, string> = {
  1: 'ace', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'
}

function rankLabel(r: PipRank): string {
  return r === 1 ? 'Ace' : RANK_NAMES[r].charAt(0).toUpperCase() + RANK_NAMES[r].slice(1)
}

const SUIT_DISPLAY: Record<Suit, string> = {
  cups: 'Cups',
  wands: 'Wands',
  swords: 'Swords',
  pentacles: 'Pentacles'
}

const SUIT_ELEMENT: Record<Suit, string> = {
  cups: 'Water',
  wands: 'Fire',
  swords: 'Air',
  pentacles: 'Earth'
}

const SUIT_EMOJI: Record<Suit, string> = {
  cups: '🏆',
  wands: '🔥',
  swords: '⚔️',
  pentacles: '🪙'
}

const SUIT_ACCENT: Record<Suit, { c1: string; c2: string }> = {
  cups:      { c1: '#6f86d6', c2: '#3a4a8c' },
  wands:     { c1: '#ff8a4d', c2: '#c93a22' },
  swords:    { c1: '#7ec8e8', c2: '#4a87b9' },
  pentacles: { c1: '#a98c4f', c2: '#5e6f3a' }
}

// ---------- the 40 pip cards ----------

export const PIP_CARDS: PipCard[] = [
  // ========== CUPS (water — emotion, relationships, intuition) ==========
  {
    slug: 'ace-of-cups', rank: 1, suit: 'cups', display: 'Ace of Cups', emoji: '🌊',
    one_liner: 'A cup overflowing — new emotional beginning, the heart opening, love offered without conditions.',
    upright: 'The Ace of Cups is the heart-opening moment. A hand emerges from cloud, holding a chalice that overflows with five streams of water — too much love to contain, too much feeling to hold tidy. This is the start of something at the emotional layer: a new relationship, a creative project that feeds your soul, a spiritual awakening, the moment a friendship deepens past small talk. The card is the universe offering you a cup. Your only job is to receive — to let yourself feel the thing without immediately analyzing whether you deserve it, whether it will last, whether the timing is right. New love. New tenderness. New softness toward yourself. The dove descending into the cup is the descent of grace. The tide is in. Drink.',
    reversed: 'Reversed, the cup is upside down — feelings blocked, the offering refused, emotional unavailability either from you or the situation. Often signals a creative dry spell, a heart still healing from old grief, or self-protection so thick that even safe love cannot get through. The medicine is to ask: what would I have to feel if I let myself receive this?',
    in_love: 'Brand-new love, a soul-level meeting, or a fresh chapter inside an existing relationship. If single: someone arrives whose presence feels different — softer, kinder, more honest. If partnered: an emotional reset, a forgiveness, the day you remember why you chose them. Receive without auditioning the gift.',
    in_work: 'Creative inspiration, a project that comes from the heart not the resume, or a workplace that finally feels human. The Ace of Cups in career is the work that makes you cry in the good way. A vocation, not just a job. Say yes to the offer that scares you because it means too much.',
    the_gift: 'Receptivity. The capacity to let love in instead of inspecting the doormat. The Ace of Cups gives you back your beginner heart — the one that has not been broken yet, or has been broken and chosen to soften anyway.',
    the_shadow: 'Emotional flooding — confusing the intensity of new love with the truth of it. The Ace can also be a fantasy if you fall in love with the *idea* of the cup instead of receiving the actual liquid being offered.',
    when_pulled: 'Something tender is starting. Do not analyze it. Do not plan it. Do not protect against it preemptively. Open both hands and accept the cup. Notice what your body feels in the next 24 hours — the body knows before the mind does.',
    key_questions: [
      'What am I being offered right now that I have been refusing because it might require me to feel?',
      'If I let this love (or this creative project) in fully, what would have to change about how I move?',
      'Where in my life am I parched — and why have I been pretending I am not thirsty?'
    ]
  },
  {
    slug: 'two-of-cups', rank: 2, suit: 'cups', display: 'Two of Cups', emoji: '💞',
    one_liner: 'Mutual recognition — two souls meeting as equals, the look that changes everything, partnership in love or in work.',
    upright: 'The Two of Cups shows two figures exchanging cups in a small private ritual — the moment two people see each other clearly and decide to keep meeting. This is recognition: not infatuation, not chemistry alone, but the deeper thing — "oh, you too?" The card is the soulmate card in the most useful sense: not a guarantee of romance, but a guarantee of mutuality. Whatever is happening between you is being received on the other side. The signals are landing. The work being put in is being matched. In love this is the meaningful first date, the engagement, the moment in a long marriage when you remember each other again. In friendship it is the friend who becomes family. In business it is the partner who shares your obsession at the same temperature.',
    reversed: 'Reversed, the cups tip and the exchange falters — imbalance, miscommunication, the connection that looked mutual but the giving is going one direction. Sometimes signals a relationship that needs honest conversation about what each person actually wants. Other times: the recognition was real but the timing or circumstances cannot honor it.',
    in_love: 'A genuine match — not project, not fantasy, actual exchange. If single: the meeting is close. If partnered: a moment of real recognition is being asked of you — see them again, as the person they are now, not the person you have stored in memory.',
    in_work: 'A business partnership, a creative collaboration, or a working relationship where the trust is mutual and the contribution is balanced. The Two of Cups in career is the co-founder you have been waiting for, or the colleague who becomes a friend.',
    the_gift: 'Mutuality. The kind of love or partnership where you do not have to perform to be loved, do not have to chase to be chosen, do not have to over-give to keep them.',
    the_shadow: 'Mistaking chemistry for compatibility. The Two of Cups can be a brief, intense match that does not survive contact with daily life. Receive the recognition but check whether the deeper structure can hold it.',
    when_pulled: 'Pay attention to who is showing up mutually right now. Show up back. The Two of Cups asks you to honor reciprocal love when you find it — these connections are rare; do not under-invest because it feels too good to trust.',
    key_questions: [
      'Where in my life is real mutuality on offer — and am I showing up fully on my side of it?',
      'Where am I doing all the giving and calling it love?',
      'What would it look like to receive at the same temperature I give?'
    ]
  },
  {
    slug: 'three-of-cups', rank: 3, suit: 'cups', display: 'Three of Cups', emoji: '🥂',
    one_liner: 'Celebration — friendship, community, the joy that is shared, the toast lifted with people who love you.',
    upright: 'Three figures lift their cups in a circle — celebration, the kind that only happens when the people gathered actually want to be there together. The Three of Cups is the wedding, the birthday, the night the project shipped, the dinner with your closest friends where you laughed until you cried. It is friendship at its best — the chosen family, the people who knew you before, the ones who stay. The card celebrates plurality: the joy that becomes more joy when shared. It also marks community more broadly — the team, the squad, the support network that has your back when things get hard. Often pulls when you are about to be invited to something good, or when you need to stop white-knuckling alone and call someone.',
    reversed: 'Reversed, the circle starts to feel performative — gossip instead of friendship, third-party drama, exclusion (you out, or someone you love out), the feeling of being lonely in a crowded room. Sometimes a warning that the celebration is hiding the work — too many parties, not enough quiet recovery.',
    in_love: 'In love, often a third party is involved — not necessarily an affair, but a friend, a family member, an ex, or a community whose presence is shaping the relationship. Could be wonderful (a wedding, a chosen family) or strained (third-wheeling). Honest attention is the medicine.',
    in_work: 'Team success, a launch celebration, or a project that lifts because of the chemistry of the group. The Three of Cups at work signals you are part of something bigger than your individual contribution — honor the team.',
    the_gift: 'Community. The unrepeatable joy of being known and loved by your people. The Three of Cups says: do not skip the party. Do not be too busy for the people you love. The work will be there tomorrow.',
    the_shadow: 'Performative joy — posting the celebration instead of feeling it, choosing the bigger party over the deeper conversation. Also: friendship turning into gossip, the in-crowd defining itself by who is excluded.',
    when_pulled: 'Call your people. Show up to the dinner. Lift the cup with someone who loves you. The card is asking you to remember that joy unshared is half-joy, and you have been alone too much lately.',
    key_questions: [
      'Who in my life have I not celebrated with in too long?',
      'Where am I performing community instead of being inside one?',
      'What in me wants to be witnessed — and who would be honored to witness it?'
    ]
  },
  {
    slug: 'four-of-cups', rank: 4, suit: 'cups', display: 'Four of Cups', emoji: '🍵',
    one_liner: 'Apathy — the offered cup ignored, the gift you cannot see because you are looking at yesterday.',
    upright: 'A figure sits under a tree, arms folded, three cups already on the ground — and a fourth being offered from a cloud, which the figure has not noticed. The Four of Cups is the apathy card: emotional saturation, the pull of contemplation, the moment when nothing is wrong exactly but nothing feels alive either. You are over-fed on the cups you already drank. You are bored. You are pulled inward, mid-rumination, working through something — and meanwhile life is offering you a new chapter that you keep missing because you are looking down. The card is not a punishment; sometimes the inward turn is right and necessary. But it also asks: have you looked up in the last week? Has someone offered you something genuinely good that you brushed off because you were sure you already knew what it was?',
    reversed: 'Reversed, the figure looks up — the cloud-cup is finally seen. New awareness, accepting offered opportunities, snapping out of the fog. The medicine is sometimes literally: go outside, eat a real meal, call a friend, do a 10-minute meditation. The depression-fog lifts; the offer becomes visible.',
    in_love: 'Boredom in a relationship that is actually fine — or restlessness that is really about you, not them. If single: someone good is being offered and you are dismissing them because they are not your usual type. Look up.',
    in_work: 'Career stuck-ness, the role that pays well but no longer feeds you, or the project you are too tired to receive properly. The Four of Cups at work asks if you have over-fed yourself on the same kind of validation and need a new flavor.',
    the_gift: 'Discernment. Sometimes saying "no thank you" to the obvious option is wisdom — there is often a fourth cup coming. The card honors the necessary inward turn before a real yes.',
    the_shadow: 'Chronic apathy. Numbness presenting as wisdom. Refusing every offered cup because nothing is *enough* — the unspoken belief that you do not deserve to be happy, dressed as cool detachment.',
    when_pulled: 'Look up. Something is being offered right now and you are not seeing it because you are convinced you already know how this story goes. Spend ten minutes today asking: what have I dismissed too quickly?',
    key_questions: [
      'What is being offered to me right now that I have been refusing to see?',
      'Where has my contemplation tipped over into avoidance?',
      'If I gave this offered cup a real chance for one week, what would change?'
    ]
  },
  {
    slug: 'five-of-cups', rank: 5, suit: 'cups', display: 'Five of Cups', emoji: '🥀',
    one_liner: 'Grief — three cups spilled, two still standing, the figure facing the loss instead of the remainder.',
    upright: 'A cloaked figure stares down at three spilled cups while two cups stand unspilled behind them. The Five of Cups is the grief card. Something has been lost — a relationship ended, a hope died, a version of yourself you were attached to is no longer available. The pain is real. The card honors that. But it also draws your attention to the two cups behind you — the things still standing, the love still here, the parts of your life that did not break. Both are true: real loss in front, real remainder behind. The medicine is not to skip the grief (do not skip the grief; sit there as long as the body needs) but eventually, when ready, to turn around. The bridge in the background goes home. Something is still standing. You are still standing.',
    reversed: 'Reversed, the figure turns. Acceptance, integration, finding grace, learning to carry what cannot be undone. Sometimes signals the moment after grief when life starts to feel like life again — quieter, sadder, but real. Or: refusing to grieve, suppressing instead of processing.',
    in_love: 'Heartbreak, a breakup, the grief of a love that did not become what you hoped. If partnered: a disappointment, a betrayal, a loss the relationship is metabolizing. The medicine: feel it fully, then notice what love is still in your life that did not leave when the loss happened.',
    in_work: 'A failed project, a layoff, a colleague leaving, a vision that did not survive contact with reality. The Five of Cups at work asks you to mourn properly before pivoting — you need the closure, not just the next plan.',
    the_gift: 'The capacity to grieve. People who can grieve are people who can love deeply again later. The Five of Cups is permission to fall apart for a while.',
    the_shadow: 'Stuck in loss. Grief becoming identity. Refusing to turn around because the spilled cups feel more real than the remaining ones — and starting to almost prefer the role of the one who lost.',
    when_pulled: 'Honor the grief. Do not rush past it. But do not build a permanent home there either. The two cups behind you are real. When you are ready — and only when you are ready — turn around.',
    key_questions: [
      'What have I lost that I have not properly grieved — and what is being asked of my grief now?',
      'What is still standing behind me that I have been too sad to see?',
      'When the time comes to turn around, what would be my first step toward the bridge home?'
    ]
  },
  {
    slug: 'six-of-cups', rank: 6, suit: 'cups', display: 'Six of Cups', emoji: '🌼',
    one_liner: 'Nostalgia — a child handing flowers in a courtyard, the past visiting, the inner kid asking to be remembered.',
    upright: 'Two children in a sunlit courtyard, one offering flowers in a cup. The Six of Cups is the nostalgia card — innocence, childhood, sweetness, the past visiting in a way that softens you. Often signals literal reconnection (an old friend reaches out, a family reunion, an ex returning), but more deeply it signals reconnection with your *younger self* — the kid you were before life made you guarded. The card asks you to remember what you loved before you knew anyone was watching. The dance you did at six. The book you read for the seventh time. The food that tastes like your grandmother. There is a tenderness here, and a healing — the past returning not to trap you but to give you something you needed.',
    reversed: 'Reversed, nostalgia turns into stuck-ness — refusing to grow up, idealizing a past that was not actually that good, or being unable to release a person who is no longer good for you because they remind you of a softer time. Sometimes signals childhood wounds asking for adult attention.',
    in_love: 'An ex returning, or a current partner reminding you of an early version of love. The Six of Cups in love asks: is this nostalgia healthy (sweet, remembering) or trapping (unable to let them go because of the memory)?',
    in_work: 'A job that connects you to your younger dreams, returning to a craft you abandoned, or a colleague from the past reappearing with an offer. Often signals work that has heart-history — go toward it.',
    the_gift: 'The inner child. The Six of Cups gives you back the parts of yourself you put down when you decided to be serious. Play. Joy without justification. Sweetness for its own sake.',
    the_shadow: 'Living in the past. Idealizing a time that was not the paradise you remember. Refusing to grow up because adulthood felt like a betrayal of the kid you were.',
    when_pulled: 'Visit your inner child. Do something they would have loved. Reach out to a person from your past who made you feel safe. Or — write a letter to the kid you were and tell them what you needed to hear back then.',
    key_questions: [
      'What did I love at age 7 that I have stopped letting myself love?',
      'Who from my past is asking for my attention right now — in real life or in memory?',
      'What part of me has been waiting in the courtyard, holding flowers, hoping I would remember?'
    ]
  },
  {
    slug: 'seven-of-cups', rank: 7, suit: 'cups', display: 'Seven of Cups', emoji: '🌫️',
    one_liner: 'Choices in fog — seven floating cups, each offering something different, and you cannot tell which is real.',
    upright: 'A figure faces seven floating cups — each containing something different (a snake, a castle, a wreath, a dragon, jewels, a head, a draped figure). The Seven of Cups is the card of overwhelm by options, fantasy, daydreaming, the moment when too many possibilities collapse into none. You are spoiled for choice. You are lost in your own head, designing future lives instead of building this one. The card is asking: which of these are real opportunities, and which are wish-images that disappear the moment you reach for them? The medicine is grounding — write the options down, notice which excite the body and which only excite the mind, and pick *one*. Indecision is a decision. Daydreaming is not the same as discerning. Pick the cup. Drink it. See what is actually in there.',
    reversed: 'Reversed, the fog clears — clarity, making a choice, focus, finally picking one path. Often signals the relief of stopping the daydream loop and committing. Or, less generously: realizing one of the cups was a deception and avoiding it just in time.',
    in_love: 'Multiple romantic possibilities, or one relationship with too many fantasy projections layered onto it. The Seven of Cups in love asks: am I in love with *this person*, or with the story I am telling about them?',
    in_work: 'Career options multiplying — too many directions, too many side projects, no commitment to any. The card asks you to pick one and go deep, even if it means letting go of the romance of the others.',
    the_gift: 'Imagination. The Seven of Cups can be the visioning phase of a real creation — necessary daydream before commit. Honor the imagination, then pick.',
    the_shadow: 'Chronic indecision. Living in fantasy because reality requires effort. The trap of keeping all options open, which is the same as choosing nothing.',
    when_pulled: 'Pick one. The card is naming that you have been spinning in possibility for too long. Choose the cup that scares you a little because it is real, not the cup that thrills you because it is dreamy.',
    key_questions: [
      'Which of these cups is fantasy, and which is a real opportunity I could move toward today?',
      'What am I avoiding by keeping all my options open?',
      'If I had to commit to one path for 90 days, which one would my body lean toward?'
    ]
  },
  {
    slug: 'eight-of-cups', rank: 8, suit: 'cups', display: 'Eight of Cups', emoji: '🌙',
    one_liner: 'Walking away — leaving what no longer feeds you, even when it looks fine from the outside.',
    upright: 'A cloaked figure walks away from eight neatly stacked cups, toward a mountain under a moon. The Eight of Cups is the leaving card — but a quiet, dignified leaving, not a dramatic break. You have built something. You have stayed long enough to know it is not where your soul wants to be. The cups are not broken — that is the hardest part. From the outside everything looks fine. The job pays. The relationship is functional. The friend group exists. But something in you knows it is no longer your home. The card honors the courage to leave a *good-enough* situation in search of the right one. It is the card of the spiritual quest — not running from, but moving toward. The mountain is the next chapter. The moon lights the path. You will walk it alone for a while.',
    reversed: 'Reversed, the figure stays — fear of leaving, returning to a situation you already left, avoidance. Or, less generously: leaving for the wrong reason (escapism instead of growth, running away instead of toward something). Sometimes signals the difficulty of trusting that the next thing is worth the leaving.',
    in_love: 'Walking away from a relationship that is not bad but is not right — or staying when you should have already left. The Eight of Cups in love asks the hardest question: is this love feeding me, or am I staying because leaving feels rude?',
    in_work: 'Quitting a job that pays well but does not match your soul. The Eight of Cups at work is the resignation letter you have been drafting for months. Sometimes the right call. Sometimes spiritual bypassing of the actual issue (which is internal, not the job).',
    the_gift: 'The courage to leave good-enough in search of right. The Eight of Cups gives you back your sovereignty over your own path.',
    the_shadow: 'Chronic fleeing. Leaving every situation right before depth becomes possible. The wanderer who cannot stay, dressed up as the seeker.',
    when_pulled: 'Something in your life is asking to be left. Honor that. But before walking, sit with the question: am I leaving toward something real, or running from a feeling that will follow me?',
    key_questions: [
      'What is fine in my life that is no longer right for me?',
      'What would I have to admit to walk away from this with grace?',
      'Where is the mountain I am being called toward — and am I willing to walk alone for a while to reach it?'
    ]
  },
  {
    slug: 'nine-of-cups', rank: 9, suit: 'cups', display: 'Nine of Cups', emoji: '🌟',
    one_liner: 'The wish card — nine cups arranged on a shelf, the smug satisfaction of having received what you asked for.',
    upright: 'A figure sits with arms folded, smiling, in front of nine arranged cups — the wish card. The Nine of Cups is the card of *getting what you wanted*: the goal achieved, the wish granted, the abundance landed, the long work paying off. Emotional satisfaction, contentment, the warm dinner with the people you love after a long climb. The card honors enjoyment — the actual permission to be happy with what you have, not in a smug way but in a grounded way. Often pulls when you are about to receive good news, or when you need to remember that you have *already* received what you were asking for and forgot to celebrate.',
    reversed: 'Reversed, the smile falters — smugness, dissatisfaction-after-getting, "is this it?", or the unfulfilled wish (the thing you asked for arrived but it does not actually feed you). Sometimes a warning to check whether you are wishing for the right thing.',
    in_love: 'A wish in love granted — the relationship deepening, the partner you asked the universe for arriving. If partnered: a sweet stable phase. The medicine: notice it. Do not skip the satisfaction.',
    in_work: 'A goal achieved, a contract signed, a launch that lands. The Nine of Cups at work is the moment your effort meets the world\'s yes. Pause. Acknowledge it. Then ask: what is the *next* wish, and is it still the right one?',
    the_gift: 'Permission to enjoy. The Nine of Cups gives you back the right to be satisfied — to receive the abundance you have actually generated, instead of immediately moving the goal post.',
    the_shadow: 'Smugness. Or its opposite: the wish granted but the heart still empty, signaling you wished for the wrong thing. The card asks you to check whether your wish-list is still authentic.',
    when_pulled: 'Take stock of what you already have. The wish you made two years ago — has it landed? Have you noticed? Sit with the satisfaction. Then, if a new wish is forming, notice if it is yours or borrowed.',
    key_questions: [
      'What did I wish for two years ago that has actually arrived — and have I let myself enjoy it?',
      'Where am I still chasing because stopping feels uncomfortable?',
      'If the next wish came true tomorrow, would it actually feed me?'
    ]
  },
  {
    slug: 'ten-of-cups', rank: 10, suit: 'cups', display: 'Ten of Cups', emoji: '🌈',
    one_liner: 'A rainbow of ten cups over a family — emotional fulfillment, home, the long-built love that holds.',
    upright: 'A rainbow of ten cups arches over a family standing together — the parents, the dancing children, the simple home. The Ten of Cups is the emotional fulfillment card: the love that lasts, the chosen family, the home that feels like home, the long-arrived joy. This is not the spark of the Ace of Cups but the steady warmth of the long fire — the relationship that survived the hard years, the friendship that became family, the children who grew up loved. The card honors what was built, not just felt — the daily small acts that compounded into a life worth waking up to. Often pulls during settled-in love, after a long search, or when you need to be reminded that you already have the kind of love many people are still searching for.',
    reversed: 'Reversed, the rainbow cracks — family disconnection, broken home, the picture-perfect facade hiding the real strain. Or: the relationship is fine but you have been pretending it is the rainbow when it is actually two people getting through the day. Honest conversation needed.',
    in_love: 'Long-term partnership at its best — the relationship that became a home. If single: a vision of what is possible, and an invitation to build for it (not chase a sparkly fantasy that cannot become a Ten).',
    in_work: 'The work-family that holds you, the team that became friends, the company culture that actually feeds people. Or: knowing the work is good but the job is not your *home* — and that is okay; not every Ten of Cups is at the office.',
    the_gift: 'Emotional fulfillment that compounds. The Ten of Cups says: the love you build slowly and tend daily becomes more beautiful, not less, with time.',
    the_shadow: 'The performative family. The Christmas-card image masking the silent dinner table. The Ten of Cups reversed asks for honesty about whether the picture is the reality, or just the photograph.',
    when_pulled: 'Notice what you have built. Send a thank-you to the people who are your home. If the rainbow is cracked, the card is asking you to repair it before it falls — usually one honest conversation is enough.',
    key_questions: [
      'What love have I built that I have stopped noticing because I take it for granted?',
      'Where is the picture not matching the reality — and what conversation is overdue?',
      'If I were building toward a Ten of Cups in the next ten years, what would I do differently this week?'
    ]
  },

  // ========== WANDS (fire — passion, will, creativity) ==========
  {
    slug: 'ace-of-wands', rank: 1, suit: 'wands', display: 'Ace of Wands', emoji: '🔥',
    one_liner: 'The spark — a hand from cloud holds a flowering staff, fire from nothing, the new beginning that lights you up.',
    upright: 'A hand emerges from cloud holding a sprouting wand — green leaves on a freshly-cut staff, fire shimmering at the tip. The Ace of Wands is the spark card: a new creative beginning, a passion ignited, an idea so alive that your body is already on its feet before your mind has caught up. Often signals the start of a project that comes from deep desire, not duty. A new business, a new artistic obsession, a sexual chemistry, the leap into a new chapter. The wand is not just fire — it has leaves; this beginning is alive, growing, organic, not forced. Receive the spark. Move while the fire is hot. The opportunity to *begin* is itself the gift; readiness is not a feeling, it is a decision.',
    reversed: 'Reversed, the spark flickers — delays, blocked motivation, the fear of starting, or starting too many things and finishing none. Sometimes signals you need to wait — the conditions for the fire are not yet right and rushing will burn out the kindling.',
    in_love: 'New chemistry, the heat of attraction, the passionate phase. If single: someone is about to walk in who lights you up. If partnered: rekindling, sexual reawakening, remembering you are alive together.',
    in_work: 'A new venture, the project you cannot stop thinking about, the creative idea that will not let you sleep. The Ace of Wands at work says: this is the one. Start. The plan can come later.',
    the_gift: 'Courage to begin. The Ace of Wands gives you permission to start before you are ready — because the fire only stays lit if you feed it action.',
    the_shadow: 'All spark, no follow-through. Starting ten things and finishing none. The Ace of Wands shadow is the chronic-beginner who mistakes ignition for completion.',
    when_pulled: 'Begin. Today. The single concrete step. The card is naming that the fire is already lit and the only failure mode is not moving.',
    key_questions: [
      'What is on fire in me right now that I have been postponing because the timing is not perfect?',
      'What is the smallest concrete action I could take in the next 24 hours to honor this spark?',
      'Where am I confusing the thrill of the idea with the act of building it?'
    ]
  },
  {
    slug: 'two-of-wands', rank: 2, suit: 'wands', display: 'Two of Wands', emoji: '🗺️',
    one_liner: 'Vision-planning — a figure on a balcony holds a globe, two wands in hand, deciding the next horizon.',
    upright: 'A figure stands on a stone balcony, holding a small globe in one hand and a wand in the other, with a second wand fixed to the wall beside them. The Two of Wands is the planning card — the moment after the spark when you decide what to actually build with the fire. The world is in your hand. The decision is yours. Where will you take this? Which direction is the next horizon? The card is the entrepreneur sketching on a napkin, the artist deciding which series to commit to, the partner-couple deciding to move countries. The fixed wand on the wall is what you have already built; the wand in your hand is the one you are about to swing toward the new thing. Vision phase. Strategy phase. Make the plan.',
    reversed: 'Reversed, the planning loops — overthinking, fear of the unknown, refusing to make the decision because all the maps look risky. Or: making the plan but not committing to any of it. Sometimes signals being too restricted by safe-territory thinking when expansion is needed.',
    in_love: 'Deciding whether to commit deeper, move in, get married, or move countries together. The Two of Wands in love is the planning conversation that the relationship has been postponing.',
    in_work: 'Strategy. Roadmap. The 90-day plan. The Two of Wands at work is asking you to *decide* what direction to go, not gather more data. You have enough information.',
    the_gift: 'Discernment about direction. The Two of Wands honors the strategic mind — the part of you that holds the globe, sees the options, and chooses.',
    the_shadow: 'Stuck on the balcony forever. The eternal planner who never crosses the sea. Strategy as procrastination dressed up as wisdom.',
    when_pulled: 'Pick the horizon. The card is asking you to commit to a direction so the fire has somewhere to go. The plan does not have to be perfect — it has to be *chosen*.',
    key_questions: [
      'What direction am I avoiding because committing to it would close other doors?',
      'What plan have I been refining for too long — and what would happen if I just shipped version 1?',
      'If I had to bet my fire on one horizon for the next year, which would it be?'
    ]
  },
  {
    slug: 'three-of-wands', rank: 3, suit: 'wands', display: 'Three of Wands', emoji: '⛵',
    one_liner: 'Ships sailing — the figure on the cliff watches their investments cross the water, vision becoming voyage.',
    upright: 'A figure stands on a cliff, three wands planted in the ground beside them, watching ships sail outward across a wide sea. The Three of Wands is the moment after the plan when the work is in motion — your investments are in flight, the projects are launched, your message is reaching the world. The card honors the long-vision phase: you have done your part, the ships are sailing, now you wait for the return. There is also expansion in this card: foreign lands, broadening horizons, scale, the moment a small idea becomes a bigger world. Often signals foreign opportunity, travel, online reach, or partnerships that extend beyond your original local circle.',
    reversed: 'Reversed, the ships do not return on time — delays in plans, setbacks in expansion, foreign-territory frustrations. Sometimes signals overcommitment to scale before the foundation is solid, or impatience with how long the long game takes.',
    in_love: 'A long-distance relationship, an international love, or a partner whose work takes them away. The Three of Wands in love asks for trust during separation — the ships do come back, but the trust has to be built while they are away.',
    in_work: 'Launching globally, expanding into new markets, partnerships that scale. The Three of Wands at work is the moment after launch when you must trust that the work is doing its work and not over-tinker out of anxiety.',
    the_gift: 'Long vision. The Three of Wands gives you the patience to watch the ships sail without dragging them back to shore.',
    the_shadow: 'Watching forever, never starting the next thing. The Three of Wands shadow is becoming so attached to the ships that you do not begin a new fleet.',
    when_pulled: 'Trust the work you have already shipped. The ships are sailing; you do not need to swim out and check on them. Use this waiting phase to plan the next horizon.',
    key_questions: [
      'What have I already launched that I am over-checking out of anxiety?',
      'What expansion am I avoiding because it would mean my world gets bigger than I am used to?',
      'Where could I extend my reach right now if I trusted my own work more?'
    ]
  },
  {
    slug: 'four-of-wands', rank: 4, suit: 'wands', display: 'Four of Wands', emoji: '🎉',
    one_liner: 'Celebration arch — four wands form a wreathed gate, two figures dancing under it, milestone reached.',
    upright: 'Four wands form a wreathed archway under which two figures lift garlands in celebration — a wedding, a homecoming, a milestone party. The Four of Wands is the milestone card: the threshold reached, the chapter finished well enough to celebrate, the foundation built. Often a literal wedding, housewarming, graduation, or product launch — the public moment of "we made it through this stage." More deeply, it is the *threshold* card — the moment between what was and what is next, the celebration that marks the difference. Honor the milestone before pushing for the next horizon. You earned this.',
    reversed: 'Reversed, the celebration is delayed or dampened — the wedding postponed, the housewarming subdued, the milestone reached but not honored. Or: lack of community support, transitions that feel lonely, instability beneath the celebration.',
    in_love: 'Engagement, marriage, moving in together, or anniversary. The Four of Wands in love is the public commitment, the formal threshold. Sweet card. Honor it.',
    in_work: 'Launch day, contract signed, milestone reached, the team finally hitting the goal. The Four of Wands at work is the company offsite, the launch party, the moment to honor the team before pushing into the next sprint.',
    the_gift: 'Threshold-honoring. The capacity to mark the moment, to gather the community, to make a small ceremony out of the milestone instead of skipping past it.',
    the_shadow: 'Achievement-skipping. Burning past every milestone toward the next, never letting yourself land in the threshold long enough to feel the arrival.',
    when_pulled: 'Mark the moment. Throw the small party. Send the announcement. Take the photo. The card is naming that something has crossed a threshold and deserves a ceremony, even a private one.',
    key_questions: [
      'What milestone have I reached that I have not properly celebrated?',
      'Who are the people I want under the arch with me — and have I invited them?',
      'What is the smallest ceremony I could create this week to honor what is finishing?'
    ]
  },
  {
    slug: 'five-of-wands', rank: 5, suit: 'wands', display: 'Five of Wands', emoji: '⚡',
    one_liner: 'Five figures in scrappy combat, wands clashing — friction, competition, the team that has not yet aligned.',
    upright: 'Five figures clash with raised wands — chaotic, scrappy, energetic, but not lethal. The Five of Wands is the friction card: competition, disagreement, the team that has not yet aligned, the meeting where everyone is talking past each other. Often signals creative friction (the brainstorm where the ideas collide, the band figuring out the song, the co-founders disagreeing on direction). The energy is hot — and the heat can be productive if held well. The medicine is not to *avoid* the conflict but to channel it: get into a real conversation, name the disagreements clearly, find the synthesis on the other side. Five-of-Wands energy is the fire of multiple wills meeting; if no one has a vision strong enough to align them, the conflict eats itself.',
    reversed: 'Reversed, the conflict either resolves (synthesis found, alignment reached) or goes underground (avoidance, passive-aggression, fake harmony). Sometimes signals the relief of choosing not to engage in a fight that was never yours.',
    in_love: 'Petty arguments, unresolved tension, the same fight on a loop. The Five of Wands in love asks: is this conflict productive (working out a real difference) or symptomatic (dancing around the real thing neither of you will name)?',
    in_work: 'Team disagreement, healthy creative friction, or the rivalrous workplace. The Five of Wands at work asks for a real meeting where the disagreements get named — not another email thread.',
    the_gift: 'Productive conflict. The capacity to disagree out loud and find a stronger answer than any one person could have made alone.',
    the_shadow: 'Conflict for sport. The relationship or workplace that runs on friction because no one knows how to be intimate without it. Drama as bonding.',
    when_pulled: 'Have the real conversation. The avoidance is more expensive than the fight. Schedule the meeting where the actual disagreement gets named, and find the synthesis on the other side.',
    key_questions: [
      'Which conflict in my life have I been avoiding — and what would happen if I named it directly?',
      'Where is friction productive in my life right now (signal of real difference) and where is it symptomatic (avoidance of the real issue)?',
      'What am I willing to fight for — and what am I just fighting because it has become a habit?'
    ]
  },
  {
    slug: 'six-of-wands', rank: 6, suit: 'wands', display: 'Six of Wands', emoji: '🏆',
    one_liner: 'A figure rides a horse through a cheering crowd, laurel wreath on the wand — public victory, recognition.',
    upright: 'A figure on horseback rides through a cheering crowd, holding a wand crowned with a laurel wreath. The Six of Wands is the public victory card: recognition, success, the parade after the long campaign. The work has been seen. The win has been acknowledged. Often pulls when something you have been quietly building gets a public yes — promotion, award, viral moment, public praise. The card honors visible achievement and the right to enjoy it. Receive the praise. Let the crowd cheer. You earned this leg of the journey.',
    reversed: 'Reversed, the parade falters — public failure, lack of recognition, ego-trip from a win that has gone to the head, or pretending to be okay with not being recognized when you actually wanted it. Sometimes a warning that public success is not the same as private fulfillment.',
    in_love: 'Public recognition of the relationship — engagement announcement, marriage, going public. Or: the relationship is successful from outside but the couple knows the inside is harder than the photos.',
    in_work: 'Promotion, public win, the launch that lands, the recognition you have been working toward. The Six of Wands at work says: receive it; do not deflect; let the crowd cheer.',
    the_gift: 'The capacity to receive public success without deflecting. The Six of Wands gives you back the right to enjoy being seen.',
    the_shadow: 'Recognition addiction. Living for the parade. Or: deflecting praise so reflexively that you starve the part of you that needs to be seen.',
    when_pulled: 'Receive the recognition. Do not deflect. Do not minimize. The work has earned this. Let yourself feel it for one full day before moving on.',
    key_questions: [
      'Where is praise being offered to me that I have been deflecting?',
      'Where is my ego attached to the parade more than to the actual work?',
      'If I trusted that I was already enough without the recognition, what would I build differently?'
    ]
  },
  {
    slug: 'seven-of-wands', rank: 7, suit: 'wands', display: 'Seven of Wands', emoji: '🛡️',
    one_liner: 'A figure on a hill defends with one wand against six rising — courage under pressure, holding ground.',
    upright: 'A figure stands on a hill, raised wand in hand, defending against six wands rising from below. The Seven of Wands is the courage-under-pressure card: holding your position when the pressure is on, defending what you have built, standing your ground when others push back. The high ground is yours. You have something worth protecting — a position, a project, a boundary, a truth — and the world is testing it. The card honors perseverance, the willingness to keep standing when many forces push back. Not all opposition is wrong; the test is sharpening you. The medicine is to stay clear-eyed about *why* you are defending what you are defending — and to know when to lower the wand and walk down the hill instead of fighting forever.',
    reversed: 'Reversed, the figure tires — overwhelmed, giving in, exhaustion-as-defeat. Or: realizing the hill was not worth defending and walking down with grace. Sometimes signals burnout from a fight you should have ended weeks ago.',
    in_love: 'Defending the relationship from outside pressure (family, exes, social judgment), or defending your boundaries inside the relationship. The Seven of Wands in love asks: is this hill mine to die on?',
    in_work: 'A position under pressure, a launch under attack, defending your idea in a meeting where it is unpopular. The Seven of Wands at work asks for clarity — defend what is worth defending; release what is not.',
    the_gift: 'Perseverance. The capacity to keep standing when the wave is breaking. The Seven of Wands gives you the spine for the long fight.',
    the_shadow: 'Defensiveness as personality. Fighting every battle. The hill that was never actually yours but you have been on it so long you forgot why.',
    when_pulled: 'Ask: is this hill worth this fight? If yes, stand. If no, walk down with dignity. The card is naming that you are using a lot of energy on a defense — make sure it is the right one.',
    key_questions: [
      'What am I defending right now, and is it actually worth my energy?',
      'Which battles have become identity instead of strategy?',
      'Where is rest a stronger move than continuing to fight?'
    ]
  },
  {
    slug: 'eight-of-wands', rank: 8, suit: 'wands', display: 'Eight of Wands', emoji: '🚀',
    one_liner: 'Eight wands fly through air toward their target — swift movement, news, rapid alignment, message in motion.',
    upright: 'Eight wands fly through clear sky in parallel toward their target. The Eight of Wands is the rapid-action card: news traveling fast, things accelerating, swift movement, the moment after a long stillness when everything starts moving at once. Often signals incoming news (a long-awaited yes, an offer, a message from a distance), or the period when a project that took forever to start suddenly moves at speed. The wands are aligned — meaning the energies are coordinated, not scattered; the work is landing. Keep up. Reply to the email. Say the yes. Send the message. The Eight of Wands is the green-light card.',
    reversed: 'Reversed, the wands jam — delays, miscommunication, frustrating slowness, messages not landing. Sometimes signals the need to *slow down* — too fast for the foundation to hold, sloppy execution, communication that is not being received clearly because it is being sent too quickly.',
    in_love: 'Sudden movement in love — the long-awaited message arrives, the relationship accelerates, the proposal comes after months of pause. Or: communication finally flowing after a stuck phase.',
    in_work: 'Rapid progress, news arriving, the deal closing, the response after silence. The Eight of Wands at work says: things are moving — keep up, do not over-deliberate, ship.',
    the_gift: 'Velocity. The capacity to ride momentum when it arrives instead of slowing it down out of caution.',
    the_shadow: 'Recklessness. Moving too fast for clarity, sending messages you have not thought through, mistaking velocity for direction.',
    when_pulled: 'Reply to the messages. Say the yes. Move while the energy is here. The card is naming that this is the green-light moment — and green lights do not stay green forever.',
    key_questions: [
      'What message have I been sitting on that the universe is asking me to send?',
      'Where is momentum on offer that I have been slowing down out of habit?',
      'If I trusted this acceleration, what is the next concrete action in the next 24 hours?'
    ]
  },
  {
    slug: 'nine-of-wands', rank: 9, suit: 'wands', display: 'Nine of Wands', emoji: '🌑',
    one_liner: 'A weary figure stands guard near eight planted wands, holding the ninth — almost there, do not give up now.',
    upright: 'A bandaged figure leans on a wand, eight more planted behind them like a fence. The Nine of Wands is the resilience card: weary, scarred, almost-at-the-end, the last stretch before the win. You have been through it. The body is tired. The hope is slim. But you are closer to the finish than you can see from here. The card honors the grit it takes to keep going when every part of you wants to stop — and reminds you that the resistance you are encountering at this stage is a sign you are near the threshold, not a sign you should turn back. Vigilance is the gift; paranoia is the shadow. Stay alert, but trust again.',
    reversed: 'Reversed, the walls thicken — paranoia, defensive fortification, exhaustion as armor, refusing to let anyone in even though help is being offered. Or: collapse, giving up just before the win, the last-mile retreat.',
    in_love: 'Trust issues from past wounds, defensiveness, the relationship that requires you to drop your shield even though the body still flinches. The Nine of Wands in love asks for the trust to lower the guard — or, if the situation is genuinely unsafe, the wisdom to keep it raised.',
    in_work: 'The last stretch of a long project, the burnout phase, the moment you want to quit one mile before the finish line. The Nine of Wands at work says: you are nearly there; one more push.',
    the_gift: 'Grit. The Nine of Wands gives you the body-knowing that you have survived harder things than this and can survive one more push.',
    the_shadow: 'Hyper-vigilance as identity. Trauma-armor that does not come off even when the war is over. Exhaustion mistaken for strength.',
    when_pulled: 'Do not quit yet. Rest tonight. Keep going tomorrow. The card is naming that you are weary and close — both true. The finish is real.',
    key_questions: [
      'What am I one push away from finishing — and what is the smallest step toward it tomorrow?',
      'Where am I keeping a shield up against a battle that already ended?',
      'What support is being offered to me right now that I have been refusing because the body cannot trust?'
    ]
  },
  {
    slug: 'ten-of-wands', rank: 10, suit: 'wands', display: 'Ten of Wands', emoji: '🪵',
    one_liner: 'A figure carries ten wands, hunched under the load — overload, the burden of carrying it all alone.',
    upright: 'A figure walks toward a town in the distance, hunched under the weight of ten wands gathered awkwardly in their arms. The Ten of Wands is the burden card: overload, taking on too much, the weight of carrying it all alone. Often signals burnout, the weight of obligations stacked on top of a vision that started as joy and has become labor, or the moment when the success you built has become the cage you live inside. The town is in sight — the work is *almost* done — but the cost has been too high. The card asks the hardest question: which of these wands are actually mine to carry, and which did I pick up out of habit, fear, or guilt?',
    reversed: 'Reversed, the burden gets put down — delegation, releasing what is not yours, letting other people help, the relief of finally saying "I cannot do this alone." Sometimes signals leaving a job, a role, a responsibility you have outgrown.',
    in_love: 'Carrying the relationship alone — being the only one doing emotional work, planning, repairing. The Ten of Wands in love asks for an honest conversation about the load and how it gets shared.',
    in_work: 'Overload, the project that has eaten your life, the role that has expanded into 80 hours a week. The Ten of Wands at work is the burnout warning — drop something or it drops you.',
    the_gift: 'The wisdom to put it down. The Ten of Wands gives you back the capacity to release what was never yours and ask for help.',
    the_shadow: 'Martyrdom. The badge of honor in being overloaded. The identity of "I do everything around here." The Ten of Wands shadow is the silent agreement that suffering equals worth.',
    when_pulled: 'Drop a wand. Today. Pick the heaviest thing you are carrying that is not actually yours, and put it down. The card is naming that you are about to break — and the fix is releasing, not pushing harder.',
    key_questions: [
      'Which of these burdens are not actually mine — and what would happen if I put one down today?',
      'Who am I carrying that needs to start carrying themselves?',
      'What success have I built that has become the cage I live in — and what would freedom from it look like?'
    ]
  },

  // ========== SWORDS (air — mind, conflict, truth) ==========
  {
    slug: 'ace-of-swords', rank: 1, suit: 'swords', display: 'Ace of Swords', emoji: '⚔️',
    one_liner: 'A hand from cloud holds a crowned sword — breakthrough thought, mental clarity, the truth that cuts clean.',
    upright: 'A hand emerges from cloud, gripping a sword crowned with a wreath, reaching toward sky. The Ace of Swords is the breakthrough-thought card: mental clarity arriving like dawn, a truth that cuts clean, the moment a fog lifts and you see the situation exactly as it is. Often signals a decision being made, a conversation that brings clarity, a piece of news that reframes everything, or the breakthrough idea that unlocks the next move. The crown on the sword is sovereignty — when the mind is clear, you are not at the mercy of moods or other people\'s narratives; you can think for yourself. The card asks for clean truth — both giving it and receiving it. Mental dawn.',
    reversed: 'Reversed, the sword is dulled — confusion, miscommunication, brutal truth wielded carelessly, or clarity that arrives but you refuse to act on it. Sometimes signals the truth that lands too sharp — necessary information delivered cruelly. The medicine is precision *with* care.',
    in_love: 'A hard conversation that clears the air, an honest declaration, or a new clarity about whether the relationship works. The Ace of Swords in love asks for the truth-said-clean, even when it changes things.',
    in_work: 'A clear strategic decision, a breakthrough insight, the email that says exactly what needs to be said. The Ace of Swords at work is the moment a long-tangled problem suddenly becomes solvable.',
    the_gift: 'Clean truth. The Ace of Swords gives you back the capacity to think clearly and speak precisely — without sugar-coating and without cruelty.',
    the_shadow: 'Clarity weaponized. The truth-teller who uses honesty as cover for cruelty. Or: clarity received but ignored.',
    when_pulled: 'Speak the clean truth. Make the decision. The card is asking you to act on the clarity you already have — postponing it now is the only way to lose it.',
    key_questions: [
      'What truth have I seen clearly and not yet spoken?',
      'Where is precision needed in my life — and where am I being vague to avoid responsibility?',
      'What decision is overdue — and what would change if I made it today?'
    ]
  },
  {
    slug: 'two-of-swords', rank: 2, suit: 'swords', display: 'Two of Swords', emoji: '⚖️',
    one_liner: 'A blindfolded figure holds two swords crossed at the chest — stalemate, decision deferred, the choice you cannot keep avoiding.',
    upright: 'A blindfolded figure sits on a stone bench, two swords crossed over the chest, sea behind. The Two of Swords is the stalemate card: a decision being avoided, two options weighed forever, the blindfold keeping you from seeing what you already know. The card is the impasse — the relationship that needs a decision, the job offer you have been turning over for weeks, the conversation you keep not having. The waters behind suggest emotion is hidden but present. The blindfold is self-imposed; you can take it off. The card asks you to stop pretending you do not have enough information — you do. The work is to choose.',
    reversed: 'Reversed, the blindfold comes off — facing facts, breaking the impasse, finally choosing. Sometimes signals the truth coming out, or the realization that one option was always more right than the other and you knew it.',
    in_love: 'A relationship at a crossroads — stay or leave, deepen or part, address the issue or pretend it does not exist. The Two of Swords in love asks for the courage to look at what you have been avoiding seeing.',
    in_work: 'A decision deferred — accept the offer or not, leave the company or not, end the project or not. The Two of Swords at work is the email draft you keep saving without sending.',
    the_gift: 'The recognition that decision-deferral is itself a decision — and a costly one. The Two of Swords gives you back agency over your own choices.',
    the_shadow: 'Chronic avoidance. The blindfold that has become a personality. The wisdom-flavored cowardice of "I am still gathering information" when you actually know.',
    when_pulled: 'Take the blindfold off. Make the call. Even the "wrong" decision is more freeing than continuing to weigh. The card is naming that you have been on this bench long enough.',
    key_questions: [
      'What decision am I refusing to make — and what is the cost of continuing to defer it?',
      'What do I already know that the blindfold is keeping me from acknowledging?',
      'If I had to choose by Friday, which way would my body lean — and what is that telling me?'
    ]
  },
  {
    slug: 'three-of-swords', rank: 3, suit: 'swords', display: 'Three of Swords', emoji: '💔',
    one_liner: 'Three swords pierce a heart in stormy sky — heartbreak, the painful truth, grief that arrives through words.',
    upright: 'Three swords pierce a single heart suspended against a stormy sky. The Three of Swords is the heartbreak card: the betrayal, the harsh truth, the conversation that cut, the loss that came through words rather than silence. The pain is real and the card honors it — does not minimize, does not rush past. Often signals the moment a relationship breaks, the truth comes out, the friend reveals their other face, or the news arrives that splits your before from your after. The card is also a card of clarity: sometimes the cut is what was needed for the wound underneath to be visible. The storm passes. The heart heals. But not by skipping the pain — by walking through it.',
    reversed: 'Reversed, the swords begin to be removed — healing from heartbreak, releasing pain, the slow integration of a hard truth. Or: refusing to grieve, suppressing the pain, the heart that has not yet let itself break.',
    in_love: 'Heartbreak, a breakup, a betrayal revealed, the painful truth a couple has been avoiding finally said. The Three of Swords in love asks for honest grieving — not through, but with.',
    in_work: 'Disappointing news, a hard critique, a project that fails publicly, or a betrayal by a colleague. The Three of Swords at work asks you to feel the loss before strategizing the next move.',
    the_gift: 'The capacity to grieve through truth. The Three of Swords names that some pain is the cost of clarity — and that clarity, even painful, is healing.',
    the_shadow: 'Wound-clinging. Becoming the heartbreak. Identifying so deeply with the cut that healing feels like betraying the depth of the love that was lost.',
    when_pulled: 'Let yourself feel it. Cry if the body wants to. Write the unsent letter. Call a friend. The card is naming that grief is not something to manage — it is something to honor.',
    key_questions: [
      'What truth have I learned recently that I have not yet let break me — and is the unbreaking what is keeping me numb?',
      'Where is heartbreak asking for my attention — and how would I treat a friend in this much pain?',
      'What would it look like to grieve with grace instead of efficiency?'
    ]
  },
  {
    slug: 'four-of-swords', rank: 4, suit: 'swords', display: 'Four of Swords', emoji: '🛌',
    one_liner: 'A figure lies on a stone tomb in a chapel, three swords on the wall, one beneath — rest, retreat, the necessary pause.',
    upright: 'A figure lies in a chapel atop a stone effigy, three swords mounted on the wall above, one beneath the body. The Four of Swords is the rest card: retreat, recovery, contemplation, the necessary pause after a hard period. The figure is not dead — they are resting. The card honors the wisdom of stillness: you cannot keep fighting from the Three of Swords forever; you cannot move from impasse to action without first letting the body restore. Often signals the need for actual rest — sleep, vacation, retreat, silence — but also the deeper rest of *not deciding* for a while, of letting the question sit while the unconscious works on it.',
    reversed: 'Reversed, rest becomes restlessness — unable to slow down, burning out from refusing to stop, or the stuck-rest of avoidance (rest as procrastination from a real action that is needed). Sometimes signals the moment to come back from retreat and reengage.',
    in_love: 'A pause in the relationship, a couple taking space, or a needed retreat from dating to heal. The Four of Swords in love is the wisdom of not forcing forward when forward needs marinating.',
    in_work: 'Burnout, sabbatical, the strategic pause before the next push. The Four of Swords at work says: rest is not the opposite of productivity; it is the foundation of it.',
    the_gift: 'The wisdom to rest. The Four of Swords gives you permission to stop without earning it — to recognize that recovery is a stage of the work, not a betrayal of it.',
    the_shadow: 'Rest as escape. Sleeping through the call. Hiding in the chapel forever because the world outside requires too much.',
    when_pulled: 'Rest. Today. Actually. Cancel something. Sleep early. Take the day off. The card is naming that you have been pushing from depleted reserves and the next move requires you full.',
    key_questions: [
      'What rest have I been refusing because resting feels like falling behind?',
      'What would change if I gave myself one full day of nothing in the next week?',
      'What is the unconscious working on while I am quiet — and am I trusting it to finish?'
    ]
  },
  {
    slug: 'five-of-swords', rank: 5, suit: 'swords', display: 'Five of Swords', emoji: '🥀',
    one_liner: 'Three figures, three swords on the ground — pyrrhic victory, winning the argument and losing the friend.',
    upright: 'A smirking figure holds three swords while two others walk away defeated, swords on the ground. The Five of Swords is the pyrrhic-victory card: winning the argument and losing the relationship, conflict won at high cost, the empty triumph of being right when being right was not what mattered. Often signals a fight you are about to win that you should not have been in. The card asks the hardest question of conflict: what is the win actually costing you? Sometimes the wisdom is to lose the battle on purpose — to lower the sword, to walk away from the fight you could win, because the relationship is more valuable than the point.',
    reversed: 'Reversed, the figures begin to make peace — seeking reconciliation, releasing the grudge, learning to lose gracefully. Sometimes signals the apology that needs to come from your side, or the realization that you have been the smirking figure and it is time to drop the sword.',
    in_love: 'The argument that becomes a fight that becomes a wound. Or: realizing you have been the one who needs to win every disagreement, and noticing the cost. The Five of Swords in love asks: do I want to be right or do I want to be close?',
    in_work: 'Workplace politics, the rivalrous colleague, the meeting that becomes a battlefield. The Five of Swords at work asks whether your "wins" are building anything or just creating quiet enemies.',
    the_gift: 'The wisdom to lose on purpose. The Five of Swords gives you back the discernment to know when winning is the trap.',
    the_shadow: 'Compulsive winning. The ego that has to be right at all costs. The smirk that reads as victory but is actually loneliness.',
    when_pulled: 'Drop the sword. Apologize first. The card is naming that you are about to win something that will cost you more than it returns. Choose the relationship over the point.',
    key_questions: [
      'Where am I winning arguments at the cost of the relationships I claim to value?',
      'What apology is overdue from my side — and what is the ego preserving by not making it?',
      'If I lost this fight on purpose this week, what would heal?'
    ]
  },
  {
    slug: 'six-of-swords', rank: 6, suit: 'swords', display: 'Six of Swords', emoji: '⛵',
    one_liner: 'A ferryman carries figures across calm water, six swords planted in the boat — transition, moving toward calmer waters.',
    upright: 'A ferryman poles a small boat across still gray water, two figures inside, six swords planted upright in the hull. The Six of Swords is the transition card: leaving difficult territory, moving from rough waters to calmer ones, the slow exit from a hard chapter. Often pulls during literal moves (cities, jobs, relationships ending), but more deeply marks the *internal* migration — the slow letting-go of a way of being that has run its course. The swords come with you. The grief comes with you. But the destination is calmer than what you are leaving. The card honors patient progress: not a leap, a row.',
    reversed: 'Reversed, the boat does not move — stuck in the harbor, unable to leave, returning to the same shore you keep trying to leave. Or: forced transitions you did not choose, leaving before you have finished mourning the leaving.',
    in_love: 'Leaving a relationship behind, taking emotional distance to heal, or a couple transitioning together to a calmer phase after a hard period. The Six of Swords in love is the slow row to the next shore.',
    in_work: 'Changing jobs, careers, companies — the slow professional migration. The Six of Swords at work says: the new shore is calmer; trust the row.',
    the_gift: 'Patient transition. The Six of Swords honors the slow, unspectacular work of moving on with the swords still in the boat — you do not have to be healed before you are allowed to leave.',
    the_shadow: 'Eternal transitioning. Always between, never arrived. The chronic-mover who never lets the new shore become home.',
    when_pulled: 'Trust the row. The water is calmer than you think. Do not rush — but do not return. The card is naming that you are mid-passage and the next shore is real.',
    key_questions: [
      'What am I leaving behind that I have been trying to drag into the boat with me?',
      'What new shore is on the horizon — and what would arrival there look like?',
      'Where am I stuck between, and what would let me start rowing?'
    ]
  },
  {
    slug: 'seven-of-swords', rank: 7, suit: 'swords', display: 'Seven of Swords', emoji: '🎭',
    one_liner: 'A figure tiptoes from a camp with five swords, two left behind — deception, strategy, the truth half-told.',
    upright: 'A figure sneaks away from a camp carrying five swords, looking back over the shoulder, two swords left planted behind. The Seven of Swords is the strategy-or-deception card: secrecy, mental cunning, getting away with something, or being deceived. The card has both shapes — sometimes the strategy is righteous (escape from harm, getting yourself out of a situation that was hurting you), sometimes it is theft (taking what is not yours, dressing self-interest as wisdom). The card asks for honesty about your own motives. Are you protecting something real, or are you sneaking? Are you being deceived — by someone else, or by your own story?',
    reversed: 'Reversed, deception is exposed — confession, returning what was taken, transparency, the truth coming out. Or: paranoia, mistrust where trust is warranted. The medicine is rigorous self-honesty.',
    in_love: 'Deception in love — yours or theirs. Hidden communications, half-truths, secrets accumulating. The Seven of Swords in love asks: what am I hiding, and what am I being lied to about — and what is the cost of continuing the masquerade?',
    in_work: 'Office politics, hidden agendas, strategy versus integrity. The Seven of Swords at work asks: am I being clever or am I being shady? The line is thinner than the ego likes to admit.',
    the_gift: 'Strategic intelligence. Honest cunning. The Seven of Swords at its best is the wisdom to extricate yourself from a trap without slamming any doors.',
    the_shadow: 'Self-deception. The story you tell yourself about why your behavior is fine — when, if a friend were doing it, you would call it what it is.',
    when_pulled: 'Get rigorous about your own honesty. Where are you cutting corners with the truth? Where is your strategy actually theft? The card is asking you to look at what you have been carrying away from camp.',
    key_questions: [
      'Where am I being honest with myself, and where am I telling a flattering version of a less flattering truth?',
      'What deception am I caught in — by someone else, or by my own narrative?',
      'What would it cost to come back to camp and put the swords down?'
    ]
  },
  {
    slug: 'eight-of-swords', rank: 8, suit: 'swords', display: 'Eight of Swords', emoji: '🪢',
    one_liner: 'A blindfolded, loosely-bound figure stands among eight swords — mental imprisonment, the trap that is not locked.',
    upright: 'A blindfolded woman stands loosely bound among eight swords planted in muddy ground. The Eight of Swords is the mental-prison card: feeling trapped in a situation you cannot see your way out of, victim story, paralysis from a problem that — if you took the blindfold off — has more solutions than the mind can currently see. The bonds are loose; the swords leave a path; the door is not locked. The trap is the *story* you are telling about the situation. The card asks for an outside perspective: tell a friend the situation and let them point out the obvious move you cannot see. The way out is closer than the prison feels.',
    reversed: 'Reversed, the blindfold lifts — seeing options, breaking free, realizing the trap was largely mental. Or: deeper into the prison, the despair of the looped story tightening.',
    in_love: 'Feeling trapped in a relationship, or in singleness, with a story that says no good options exist. The Eight of Swords in love asks: who told me there were no other ways through? And is that voice mine, or borrowed?',
    in_work: 'Trapped in a job, a contract, a project. The Eight of Swords at work usually has more options than the mind can currently see — talk to someone outside the situation; the obvious move will become visible.',
    the_gift: 'The recognition that mental traps are real, and also unlockable. The Eight of Swords gives you back the agency you forgot you had.',
    the_shadow: 'Victim identity. The story of "I have no choices" calcifying into a worldview. Refusing to be helped because the prison has become a strange home.',
    when_pulled: 'Tell a trusted friend the whole situation. Let them point out the option you cannot see from inside. The card is naming that the trap is largely mental — and externalizing it loosens it.',
    key_questions: [
      'What story am I telling about why I am stuck — and is the story actually true?',
      'Who could see this situation more clearly than I can right now?',
      'If I took the blindfold off for one hour, what would I notice about the swords around me?'
    ]
  },
  {
    slug: 'nine-of-swords', rank: 9, suit: 'swords', display: 'Nine of Swords', emoji: '🌙',
    one_liner: 'A figure sits up in bed, head in hands, nine swords on the wall — anxiety, sleepless worry, the 3 a.m. spiral.',
    upright: 'A figure sits up in bed in the dark, face buried in hands, nine swords mounted in rows on the wall behind. The Nine of Swords is the anxiety card: nightmares, the 3 a.m. mental loop, worry that magnifies every shadow into a monster. The card honors the real suffering of mental anguish — and also points out, gently, that 80% of what you are spiraling about is not happening; it is mental rehearsal of catastrophes that may never arrive. The medicine is to come back to the body: name what is *actually* true right now, in this moment, in this room. Most of what the swords are stabbing is not real. The dawn is closer than the mind believes.',
    reversed: 'Reversed, dawn returns — the spiral breaks, the worry releases, mental health support is found, sleep returns. Sometimes signals the necessity of professional help; the Nine of Swords reversed is the card of seeking the support you have been white-knuckling without.',
    in_love: 'Anxiety in love — overthinking the relationship, projecting fears, the 3 a.m. spiral about what they meant by that text. The Nine of Swords in love asks for grounded conversation, not more silent rehearsal.',
    in_work: 'Career anxiety, imposter syndrome, the work-stress that follows you home and into bed. The Nine of Swords at work is the warning sign that the body is no longer recovering and rest is not optional.',
    the_gift: 'The reminder that the mind is powerful and not always accurate. The Nine of Swords gives you back the practice of distinguishing real threats from rehearsed ones.',
    the_shadow: 'Anxiety as identity. Treating the spiral as wisdom. The chronic over-thinker who confuses worry with caring.',
    when_pulled: 'Get out of bed. Drink water. Write down what you are spiraling about. Read it tomorrow. The card is naming that the night-mind is lying — the morning will offer perspective. If the spirals are chronic, get help; you do not have to carry this alone.',
    key_questions: [
      'What am I spiraling about that has not actually happened?',
      'What support — friend, therapist, doctor, ritual — would let me sleep tonight?',
      'If the morning version of me were here right now, what would she say to the 3 a.m. version?'
    ]
  },
  {
    slug: 'ten-of-swords', rank: 10, suit: 'swords', display: 'Ten of Swords', emoji: '🌅',
    one_liner: 'A figure face-down with ten swords in the back — rock bottom, painful endings, and the dawn rising behind.',
    upright: 'A figure lies face-down on a beach, ten swords plunged into the back, the sky behind them lightening with dawn. The Ten of Swords is the rock-bottom card: painful endings, betrayal, the worst version of the situation arriving — and yet the dawn is rising. The card is dramatic but it is also the most hopeful of the bad cards: the worst is over. There is nowhere lower to fall. The only direction is up. Often signals the moment a long-suffering chapter ends — the friendship that finally betrayed, the project that finally failed, the relationship that finally collapsed — and the strange relief of the bottom being reached. From here, recovery begins.',
    reversed: 'Reversed, recovery begins — regeneration, the worst is past, learning the lesson of the collapse. Or: refusing to acknowledge the ending has happened, prolonging the pain by trying to revive what is already over.',
    in_love: 'A painful ending in love — the breakup that hurt, the betrayal that cannot be undone, the relationship that will not be repaired. The Ten of Swords in love says: it is over; the dawn is real; let it end so the next chapter can begin.',
    in_work: 'A project ending badly, a layoff, a failure that cannot be hidden. The Ten of Swords at work asks for honest acknowledgment: this version of the work is dead. The next version begins from honesty about the death.',
    the_gift: 'The relief of the bottom. The Ten of Swords gives you back the dawn — the recognition that the worst of this chapter has passed and the next is forming.',
    the_shadow: 'Catastrophizing. Treating every setback as a Ten of Swords. The drama-attachment that magnifies losses for the story value.',
    when_pulled: 'Acknowledge the ending. Do not try to revive what is already over. Look at the dawn behind the body — there is more to come, and what is coming begins from this honesty.',
    key_questions: [
      'What is over that I have been pretending might still be saved?',
      'What is the dawn rising behind this collapse — even if it is too early to see clearly yet?',
      'If I let this ending be a real ending, what space would open in my life?'
    ]
  },

  // ========== PENTACLES (earth — money, body, work, manifestation) ==========
  {
    slug: 'ace-of-pentacles', rank: 1, suit: 'pentacles', display: 'Ace of Pentacles', emoji: '🪙',
    one_liner: 'A hand from cloud holds a golden pentacle over a garden — a new financial seed, opportunity, the gift of abundance.',
    upright: 'A hand emerges from cloud, holding a single golden pentacle, hovering over a garden of white lilies and red roses with an arched gateway in the distance. The Ace of Pentacles is the new-resource card: a job offer, a financial opportunity, an inheritance, an investment that pays off, a body-level new beginning (a pregnancy, a move into a new home, a fitness or health start). The card is the seed of material flourishing — but it is a *seed*, not the harvest. The gift is real; the question is whether you will plant it and tend it, or admire it for a week and then leave it on a shelf. Receive it. Then begin the work of growing it.',
    reversed: 'Reversed, the seed is dropped — missed opportunities, scarcity mindset, refusing the offer because it does not look exactly like what was imagined, or accepting the seed and never planting it. Sometimes signals delays in financial good news.',
    in_love: 'A relationship with material grounding — moving in together, marriage with shared finances, the practical foundations of a long love. The Ace of Pentacles in love asks if your love can hold money conversations, not just feeling ones.',
    in_work: 'A new opportunity — job offer, contract, business idea with real legs. The Ace of Pentacles at work says: this seed is real. Plant it. Tend it. Do not chase the next shinier seed before this one has roots.',
    the_gift: 'The gift of grounded receiving. The Ace of Pentacles teaches the discipline of receiving material gifts and *building with them* — not just spending them.',
    the_shadow: 'Scarcity refusal. Saying no to the gift because the inner story is "I do not deserve abundance." Or: receiving and squandering, never planting the seed.',
    when_pulled: 'Receive the offer. Then ask: what is the smallest concrete step toward planting it? The card is naming that something material is on the table and ready to grow.',
    key_questions: [
      'What seed has been offered to me lately that I have not yet planted?',
      'Where am I refusing material abundance because of an inner story about deservingness?',
      'What would change if I treated this offer as the start of a long build, not a quick win?'
    ]
  },
  {
    slug: 'two-of-pentacles', rank: 2, suit: 'pentacles', display: 'Two of Pentacles', emoji: '🤹',
    one_liner: 'A figure juggles two pentacles in a lemniscate, ships rolling in waves behind — balance, juggling priorities, adapting to flux.',
    upright: 'A figure dances with two pentacles linked by an infinity symbol, ships sailing rough waters behind. The Two of Pentacles is the juggling card: balancing competing priorities, adapting to change, riding the waves of a busy season without dropping the ball. Often signals being stretched across multiple obligations — work and home, two clients, several roles — and the ask is to stay light-footed, not to grip too hard. The infinity loop suggests the juggle is sustainable *if* you keep moving; the moment you try to stop and hold both, gravity wins. The card honors flexibility, agility, the dance over the wave.',
    reversed: 'Reversed, the juggle becomes overwhelm — dropped balls, financial imbalance, taking on too much, failing to prioritize. The medicine is honesty: which pentacle is actually load-bearing, and which can be set down?',
    in_love: 'Balancing love and other commitments — work, family, kids, the partner. The Two of Pentacles in love asks if the schedule has room for the relationship, or if the relationship is the ball you keep dropping.',
    in_work: 'Multitasking, juggling clients, balancing roles. The Two of Pentacles at work says: agility is the strategy here, but check that you are not running so many priorities that none of them get your real attention.',
    the_gift: 'Agility under flux. The Two of Pentacles gives you the body-knowing that stability under change comes from movement, not stillness.',
    the_shadow: 'Chronic overcommitment. Juggling as identity. Saying yes to every pentacle that gets thrown at you because you cannot bear to be still.',
    when_pulled: 'Look at what you are juggling. Pick one pentacle to set down for a week. The card is naming that the juggle is sustainable but not infinite — protect the load.',
    key_questions: [
      'Which of the things I am juggling are actually mine?',
      'Where am I confusing busyness with importance?',
      'What would I have to admit to set one of these pentacles down?'
    ]
  },
  {
    slug: 'three-of-pentacles', rank: 3, suit: 'pentacles', display: 'Three of Pentacles', emoji: '🛠️',
    one_liner: 'A craftsperson and two architects collaborate over a cathedral plan — mastery, teamwork, the work being recognized.',
    upright: 'A craftsperson stands on a bench in a cathedral, consulting with two figures holding architectural plans. The Three of Pentacles is the collaboration card: skilled work being recognized, teamwork at its best, the apprentice and the master designing together. The card honors craft — the slow, patient mastery of something done well — and the moment when that craft is *seen* by people who can pay for it or partner with it. Often signals a contract, a commission, a promotion based on demonstrated skill, or the moment a team clicks because each person\'s expertise is honored. Mastery in collaboration with people who get it.',
    reversed: 'Reversed, the team disorganizes — lack of collaboration, mediocre work, conflicting visions, or skill that is not being recognized. Sometimes signals the need to find better collaborators, or to develop your craft more before seeking recognition.',
    in_love: 'A relationship as collaboration — building something together, teamwork in parenting or projects, recognizing each other\'s skill. The Three of Pentacles in love is the partner who can see and honor what you are good at.',
    in_work: 'Collaborative project, contract awarded, team success, mastery recognized. The Three of Pentacles at work is the moment your craft meets people who can use it — say yes, and bring your A game.',
    the_gift: 'Craft + collaboration. The Three of Pentacles teaches that mastery is not solo; it grows in conversation with people who can see what you are doing.',
    the_shadow: 'Going-it-alone as virtue. The hero-myth that says "real masters work in isolation." The Three of Pentacles shadow is refusing the team because asking for help feels like weakness.',
    when_pulled: 'Find your collaborators. Honor the skill of others. The card is naming that the next stage of your work requires you to stop being a soloist.',
    key_questions: [
      'Whose mastery is on offer to me right now that I have been too proud to ask for?',
      'What craft of mine is ready to be seen — and who would honor it?',
      'Where am I working alone on something that would be better with two more brains?'
    ]
  },
  {
    slug: 'four-of-pentacles', rank: 4, suit: 'pentacles', display: 'Four of Pentacles', emoji: '🪢',
    one_liner: 'A figure clutches one pentacle, with two under feet and one on the head — holding tight, security, miserliness.',
    upright: 'A crowned figure sits clutching one pentacle to the chest, two pentacles beneath the feet, one on top of the head. The Four of Pentacles is the holding-tight card: security, savings, control of resources — but also miserliness, scarcity-grip, the fear of letting go that turns abundance into hoarding. The card asks the hardest question of money: are you holding because you have a real plan for these resources, or are you gripping out of fear that there will not be more? Sometimes the right move is exactly this hold (saving for a real goal, not impulse-spending). Often the card asks for an open hand — generosity, investment, letting some of the pentacles flow out so they can compound back.',
    reversed: 'Reversed, the grip loosens — generosity, releasing control, investing instead of hoarding, opening the hand. Or, less generously: financial loss after a long grip, or sudden over-spending after over-saving.',
    in_love: 'Emotional miserliness — withholding affection, controlling the relationship through resource control, possessiveness. The Four of Pentacles in love asks: am I holding this person, or holding *onto* them?',
    in_work: 'Saving aggressively, refusing to invest, controlling the budget tightly. The Four of Pentacles at work asks if the control is wisdom or if it is preventing the growth that comes from spending strategically.',
    the_gift: 'Discernment about resource. The Four of Pentacles can be the wise hold — saving for a real future, not an imagined apocalypse.',
    the_shadow: 'Hoarding. Scarcity gripping the hand shut. The miser who has more than enough but cannot enjoy it because the body is convinced loss is one bad month away.',
    when_pulled: 'Open one hand. Spend on something life-giving. Give to someone who needs it more. The card is asking you to test whether your grip is wisdom or fear.',
    key_questions: [
      'What am I holding tightly that would compound if I let it flow?',
      'Where is my grip a real plan, and where is it scarcity dressed as prudence?',
      'What would generosity feel like in my life this week?'
    ]
  },
  {
    slug: 'five-of-pentacles', rank: 5, suit: 'pentacles', display: 'Five of Pentacles', emoji: '🌨️',
    one_liner: 'Two figures pass a lit church window in the snow — financial hardship, feeling left out in the cold, help close but unseen.',
    upright: 'Two figures, one limping, walk through snow past a stained-glass church window glowing warm. The Five of Pentacles is the hardship card: financial trouble, illness, feeling left out in the cold, the spiritual dryness of a hard season. The figures are walking past the church without going in — there is help available; they have not asked. The card honors the real suffering of material hardship and also points out the tragedy of pride: support exists, community exists, the warm window is right there, but the suffering has become so familiar that asking for help feels harder than continuing to walk in the cold.',
    reversed: 'Reversed, the figures turn into the church — recovery, finding shelter, accepting help, the end of the hardest stretch. Or: the slow climb out of poverty, the hand finally accepted from someone who has been offering it.',
    in_love: 'Loneliness, feeling unseen even within a relationship, the cold of emotional disconnection. The Five of Pentacles in love asks: is there warm light I am walking past out of pride?',
    in_work: 'Financial difficulty, job loss, the lean season. The Five of Pentacles at work asks you to ask for help — apply for the program, take the loan, call the contact, accept the consulting gig that is not glamorous but pays.',
    the_gift: 'The dignity of asking for help. The Five of Pentacles gives you back the right to be supported — to walk into the church instead of past it.',
    the_shadow: 'Pride that prefers suffering. The "I will figure it out alone" stance that turns into chronic hardship. Identifying so deeply with the struggle that receiving feels like losing something.',
    when_pulled: 'Ask for help. Today. The card is naming that warm support is available and your body has been pretending it is not. Pride is more expensive than the ask.',
    key_questions: [
      'What support is right in front of me that I have been too proud to ask for?',
      'What hardship have I made so familiar that I no longer notice the way out?',
      'Who would actually be honored to help me — and why have I not let them?'
    ]
  },
  {
    slug: 'six-of-pentacles', rank: 6, suit: 'pentacles', display: 'Six of Pentacles', emoji: '⚖️',
    one_liner: 'A merchant weighs gold and gives to two kneeling figures — generosity, charity, the give-and-receive flow.',
    upright: 'A merchant holds a balanced scale in one hand and drops coins into the hands of two kneeling figures with the other. The Six of Pentacles is the generosity card: giving and receiving in balance, charity flowing, the wealth that circulates instead of stagnating. Often signals a season of both ends — sometimes you are the giver (a gift, a mentorship, a meal for someone in need), sometimes you are the receiver (accepting help, taking the loan, allowing someone to give you what you need). The card honors the *flow*. Wealth that does not circulate stops being wealth. Generosity is also asking: it takes courage to receive.',
    reversed: 'Reversed, the balance tips — power dynamics in giving (gifts with strings attached, charity that buys control), debts unrepaid, or the inability to let yourself receive. Sometimes signals the need to set boundaries around generosity that has become depletion.',
    in_love: 'A balanced exchange of care — both giving, both receiving, neither keeping score. The Six of Pentacles in love asks if the relationship\'s give-and-receive is actually balanced or just labeled balanced.',
    in_work: 'Mentorship, charitable contribution, generous teamwork. The Six of Pentacles at work is the senior who lifts the junior, the founder who pays it forward, the project that supports the community.',
    the_gift: 'The capacity to give *and* receive. The Six of Pentacles gives you back the balanced flow — generosity that does not deplete you, receiving that does not shame you.',
    the_shadow: 'One-sided giving. The chronic-giver who cannot receive. The chronic-receiver who never gives back. Charity used as control.',
    when_pulled: 'Look at your give/receive ledger. Where are you out of balance — too much giving, too little? Adjust this week. The card is naming that the flow is the medicine.',
    key_questions: [
      'Where in my life am I giving more than I receive — and what is the cost of continuing?',
      'Where am I receiving without giving back — and is the relationship sustainable?',
      'What generosity is mine to extend right now — and what generosity is mine to accept?'
    ]
  },
  {
    slug: 'seven-of-pentacles', rank: 7, suit: 'pentacles', display: 'Seven of Pentacles', emoji: '🌱',
    one_liner: 'A farmer leans on a hoe, looking at seven pentacles growing on a vine — patience, the long game, harvest pending.',
    upright: 'A figure leans on a hoe, looking at a flourishing vine bearing seven pentacles. The Seven of Pentacles is the patience card: the long game, the moment of pause where you check the growth of what you have planted. The work has been done. The plants are growing. Now you wait — and waiting is also a skill. The card asks for assessment, not action: are these the right plants? Are some weeds that need pulling? Is the season changing in a way that requires you to adjust? Often signals investment of all kinds — financial, creative, relational — that has been growing slowly and is asking for evaluation rather than more frantic action.',
    reversed: 'Reversed, patience runs out — impatient harvesting (pulling the fruit before it is ripe), abandoning the project right before it matures, or doubling down on a bad investment because of sunk-cost. The medicine is honest assessment.',
    in_love: 'A relationship growing slowly, the long marriage, the pause to evaluate where this love is heading. The Seven of Pentacles in love asks: is this growing in the direction we want, and what would we adjust if we were honest?',
    in_work: 'A long-build project, an investment that needs more time, the moment to assess strategy mid-stream. The Seven of Pentacles at work says: take the strategic pause; do not just grind harder.',
    the_gift: 'Strategic patience. The Seven of Pentacles gives you back the discipline of the long view — the recognition that some fruits take seasons, not weeks.',
    the_shadow: 'Patience as procrastination. Hiding from the action that is needed by labeling inactivity "the long game." Or: sunk-cost loyalty to investments that should be cut.',
    when_pulled: 'Evaluate. What is growing? What is not? What needs more water? What needs to be pulled out? The card asks for honest assessment, not more effort.',
    key_questions: [
      'What in my life is growing that I have been impatient with — and what would the long-view show me?',
      'Where am I clinging to an investment that is no longer growing?',
      'What harvest is closer than I think — and what would let me trust the timeline?'
    ]
  },
  {
    slug: 'eight-of-pentacles', rank: 8, suit: 'pentacles', display: 'Eight of Pentacles', emoji: '🔨',
    one_liner: 'An apprentice carves pentacles on a workbench — mastery through practice, the deep work of becoming skilled.',
    upright: 'A figure sits at a workbench carving pentacles, with finished ones hung on the wall behind. The Eight of Pentacles is the apprenticeship card: the deep, repetitive work of getting good at something, the long apprenticeship where skill is built one careful copy at a time. The card honors deliberate practice — the kind that compounds slowly and then suddenly. Often signals a phase of focused study, a return to a craft, or the discipline of going deep on one skill instead of dabbling in many. The card is the antidote to the Seven of Cups — fewer fantasies, more reps. Mastery through ten thousand hours.',
    reversed: 'Reversed, the practice falters — shortcuts, distraction, lack of focus, or perfectionism so tight that nothing ever ships. Sometimes signals the apprentice who has overstayed and needs to graduate — to start producing, not just practicing.',
    in_love: 'The deep work of relationship — learning each other carefully, building skill at communication, repair, intimacy. The Eight of Pentacles in love says: love is also a practice; treat it like one.',
    in_work: 'Skill development, certification, going deep on a craft, the long-term mastery that pays off years from now. The Eight of Pentacles at work is the practice that nobody sees — and that nobody can replicate later.',
    the_gift: 'Deliberate practice. The Eight of Pentacles gives you the discipline that turns talent into reliable mastery.',
    the_shadow: 'Eternal apprenticeship. The student who never graduates because graduating means being judged. Or: perfectionism that prevents shipping.',
    when_pulled: 'Pick one skill. Practice it deliberately for the next 90 days. The card is naming that depth is more valuable than breadth right now.',
    key_questions: [
      'What craft am I being called to deepen — and what would 90 days of focused practice look like?',
      'Where am I dabbling instead of mastering?',
      'When is the right moment to graduate from apprentice to producer?'
    ]
  },
  {
    slug: 'nine-of-pentacles', rank: 9, suit: 'pentacles', display: 'Nine of Pentacles', emoji: '🌳',
    one_liner: 'A robed figure stands in a vineyard with a falcon — independent success, self-made luxury, comfort earned alone.',
    upright: 'A robed figure stands in a lush vineyard, a falcon perched on the gloved hand, mountains in the distance. The Nine of Pentacles is the independent-success card: self-made wealth, the comfort earned alone, the dignity of standing in a garden you tended. Often signals financial security after a long climb, the solo creator who built the life they wanted, or the season of enjoying what you have made without needing approval from anyone. The falcon is the trained instinct — not wild anymore, not a pet either, but an ally. The card honors solitude as sovereignty: the capacity to be alone in luxury, satisfied, in your own good company.',
    reversed: 'Reversed, the garden withers — financial dependence, inner emptiness despite material wealth, or loneliness behind the appearance of independence. Sometimes signals the cost of independence taken too far — sovereignty becoming isolation.',
    in_love: 'Self-sufficiency in love — capable of being alone, choosing partnership rather than needing it. The Nine of Pentacles in love is the partner who comes from fullness, not lack.',
    in_work: 'Solo success, financial independence, the freelance life that actually works. The Nine of Pentacles at work is the moment your skill becomes the kind of asset that pays you whether you show up or not.',
    the_gift: 'Sovereignty. The Nine of Pentacles gives you back the dignity of standing in your own garden, alone, at peace.',
    the_shadow: 'Isolation as success. The wealth that has no one to share it with. Independence weaponized into loneliness.',
    when_pulled: 'Enjoy what you have built. The card is asking you to stop measuring against others and stand in your own vineyard for one full afternoon.',
    key_questions: [
      'What have I built alone that I have not let myself enjoy?',
      'Where has my independence tipped over into isolation?',
      'Who would I want in this vineyard with me — and have I invited them?'
    ]
  },
  {
    slug: 'ten-of-pentacles', rank: 10, suit: 'pentacles', display: 'Ten of Pentacles', emoji: '🏛️',
    one_liner: 'Ten pentacles arranged over a multi-generational family scene — legacy, generational wealth, the long-built establishment.',
    upright: 'Ten pentacles arranged in the Tree of Life pattern over a scene of three generations together — an elder, a couple, a child, dogs. The Ten of Pentacles is the legacy card: established wealth, multi-generational stability, the family or community that endures, the foundation strong enough to bless the next generation. The card honors what is *built to last*: not the spark of the Ace of Pentacles, but the cathedral that the spark eventually became. Often signals inheritance, family business, marriage into a stable family, or the moment your work becomes something that will outlive you. Wealth as lineage, not paycheck.',
    reversed: 'Reversed, the legacy strains — family financial tension, the inheritance that becomes a fight, or the generational pattern that needs to be broken (wealth in one generation built on harm to another). Sometimes signals the call to start a *new* lineage rather than continue the old one.',
    in_love: 'Marriage with deep family integration, the long-term partnership that becomes a family enterprise, the love that is also a small civilization. The Ten of Pentacles in love asks: are we building something that will outlast us?',
    in_work: 'Family business, established company, generational client relationships, work that compounds over decades. The Ten of Pentacles at work is the long-term build — boring on the daily, magnificent in retrospect.',
    the_gift: 'Lineage. The Ten of Pentacles gives you back the long-time horizon — the recognition that some things you build are not for you alone, but for the people who come after.',
    the_shadow: 'Inheritance as identity. Wealth that calcifies. The family system that demands loyalty over individuation. The "old money" trap of preserving a fortune at the cost of the souls inside it.',
    when_pulled: 'Think long-time. What are you building that you would be proud to pass on? The card is asking you to lift your gaze past this quarter to the lineage you are part of.',
    key_questions: [
      'What in my life is built to last — and am I tending it like it matters?',
      'What lineage am I in (family, work, community), and is it worth continuing?',
      'If I am the one who breaks an old pattern, what new lineage am I starting?'
    ]
  }
]

const PIP_BY_SLUG: Record<string, PipCard> = Object.fromEntries(PIP_CARDS.map((c) => [c.slug, c]))
export const PIP_SLUGS = PIP_CARDS.map((c) => c.slug)

export function isPipSlug(s: string): boolean {
  return s in PIP_BY_SLUG
}

// ---------- shared styles ----------

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// ---------- per-card page ----------

export function pipPageHTML(slug: string): string {
  const card = PIP_BY_SLUG[slug]
  if (!card) return ''
  const accent = SUIT_ACCENT[card.suit]
  const readingHref = `/gab44/reading?ref=pip-${slug}`
  const suitDisplay = SUIT_DISPLAY[card.suit]
  const element = SUIT_ELEMENT[card.suit]
  const suitEmoji = SUIT_EMOJI[card.suit]

  const title = `${card.display} Tarot Meaning — Upright, Reversed, Love &amp; Career · gab44 ✨`
  const description = `Deep guide to the ${card.display}: upright meaning, reversed, in love, in work, the gift, the shadow, when you pull this card. ${suitDisplay} suit, ${element} element. Hand-written, warm, human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: 'Minor Arcana', item: `${SITE_URL}/gab44/tarot/minor` },
          { '@type': 'ListItem', position: 4, name: card.display, item: `${SITE_URL}/gab44/tarot/minor/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${card.display}: meaning, reversed, love, work`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/tarot/minor/${slug}`,
        about: `${card.display}, tarot ${suitDisplay} suit, minor arcana, tarot meaning`
      }
    ]
  })

  // siblings in the same suit
  const sameSuit = PIP_CARDS.filter((c) => c.suit === card.suit && c.slug !== card.slug)
  const sameSuitHtml = sameSuit.map((c) => {
    return `<a class="sibling-card" href="/gab44/tarot/minor/${c.slug}">
      <div class="sib-rank">${rankLabel(c.rank)}</div>
      <div class="sib-emoji">${c.emoji}</div>
      <div class="sib-title">${escapeHtml(c.display)}</div>
    </a>`
  }).join('\n        ')

  // same rank in other suits
  const sameRank = PIP_CARDS.filter((c) => c.rank === card.rank && c.suit !== card.suit)
  const sameRankHtml = sameRank.map((c) => {
    const acc = SUIT_ACCENT[c.suit]
    return `<a class="sibling-card" href="/gab44/tarot/minor/${c.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="sib-rank">${SUIT_DISPLAY[c.suit]}</div>
      <div class="sib-emoji">${c.emoji}</div>
      <div class="sib-title">${escapeHtml(c.display)}</div>
    </a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/minor/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/minor/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE} --c1:${accent.c1}; --c2:${accent.c2};}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(900px 600px at -10% -10%, ${accent.c1}24 0%, transparent 50%),
      radial-gradient(1100px 700px at 110% 110%, ${accent.c2}18 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 760px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}30; }
  .rank-pill, .suit-pill { display: inline-block; padding: 4px 12px; border-radius: 999px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim); margin-right: 6px; }
  .suit-pill a { color: var(--accent); text-decoration: none; }
  h1 { font-size: 40px; line-height: 1.05; margin: 8px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 32px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--c1); padding-right: 6px; }
  h3 { font-size: 14px; margin: 0 0 8px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--fg-muted); }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 26px 28px; margin: 0 0 28px;
    border-left: 5px solid var(--c1);
  }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--c2); margin-bottom: 8px; font-weight: 700; }
  .core-card p { font-size: 16px; line-height: 1.7; margin: 0; }
  .ud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  @media (max-width: 600px) { .ud-grid { grid-template-columns: 1fr; } }
  .ud-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 20px; }
  .ud-card.rev { border-color: var(--line-strong); background: var(--bg-2); }
  .ud-card h3 { color: var(--c2); margin-bottom: 6px; }
  .ud-card.rev h3 { color: var(--accent-2); }
  .ud-card p { font-size: 14px; line-height: 1.65; color: var(--fg-dim); margin: 0; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .signs-panel p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.65; }
  .questions-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid var(--c1); }
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
  .siblings-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 22px; }
  @media (max-width: 600px) { .siblings-grid { grid-template-columns: repeat(2, 1fr); } }
  .sibling-card {
    text-align: center; padding: 12px 8px; border-radius: 10px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    transition: border-color 0.15s; border-left: 3px solid var(--c1);
  }
  .sibling-card:hover { border-color: var(--c1); }
  .sibling-card .sib-rank { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .sibling-card .sib-emoji { font-size: 22px; margin-bottom: 4px; }
  .sibling-card .sib-title { font-size: 12px; font-weight: 600; color: var(--accent); }
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
      <a href="/gab44/tarot">22 majors</a>
      <a href="/gab44/tarot/minor">all 40 minors</a>
      <a href="/gab44/tarot/court">16 courts</a>
      <a href="/gab44/tarot/suits/${card.suit}">${escapeHtml(suitDisplay)} suit</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot minor arcana</div>
    <span class="rank-pill">${rankLabel(card.rank)}</span>
    <span class="suit-pill">suit of <a href="/gab44/tarot/suits/${card.suit}">${escapeHtml(suitDisplay.toLowerCase())}</a> · ${escapeHtml(element.toLowerCase())} ${suitEmoji}</span>
    <h1><span class="sym">${card.emoji}</span>${escapeHtml(card.display)}</h1>
    <p class="sub">${escapeHtml(card.one_liner)}</p>

    <article class="core-card">
      <span class="label">upright meaning</span>
      <p>${escapeHtml(card.upright)}</p>
    </article>

    <h2><span class="icon">↻</span>upright vs reversed</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>upright (one-line)</h3>
        <p>${escapeHtml(card.one_liner)}</p>
      </div>
      <div class="ud-card rev">
        <h3>reversed</h3>
        <p>${escapeHtml(card.reversed)}</p>
      </div>
    </div>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>in love</h3>
        <p>${escapeHtml(card.in_love)}</p>
      </div>
      <div class="ud-card">
        <h3>in work</h3>
        <p>${escapeHtml(card.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🎁</span>the gift &amp; the shadow</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>the gift</h3>
        <p>${escapeHtml(card.the_gift)}</p>
      </div>
      <div class="ud-card rev">
        <h3>the shadow</h3>
        <p>${escapeHtml(card.the_shadow)}</p>
      </div>
    </div>

    <h2><span class="icon">🎴</span>when you pull this card</h2>
    <div class="signs-panel">
      <h3>what this card is asking of you</h3>
      <p>${escapeHtml(card.when_pulled)}</p>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>three honest questions</h3>
      <ol>
        <li>${escapeHtml(card.key_questions[0])}</li>
        <li>${escapeHtml(card.key_questions[1])}</li>
        <li>${escapeHtml(card.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for your specific question</h2>
      <p>This page teaches the card. A <strong>personal reading</strong> pulls the cards <em>for you</em>, against your chart and your specific question, and writes you a letter back. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot/minor">all 40 minor arcana</a> · <a href="/gab44/tarot/suits/${card.suit}">the full ${escapeHtml(suitDisplay.toLowerCase())} suit</a> · <a href="/gab44/tarot/court">16 court cards</a> · <a href="/gab44/tarot">22 major arcana</a> · <a href="/gab44/tarot/spreads">tarot spreads</a>.
    </div>

    <section class="related-section">
      <h3>other ${escapeHtml(suitDisplay.toLowerCase())} (ace through ten)</h3>
      <div class="siblings-grid">
        ${sameSuitHtml}
      </div>
      <h3>${rankLabel(card.rank)}s in the other three suits</h3>
      <div class="siblings-grid">
        ${sameRankHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

// ---------- index page ----------

export function pipIndexHTML(): string {
  const title = `Tarot Minor Arcana — All 40 Pip Cards (Ace through Ten) · gab44 ✨`
  const description = `All 40 tarot minor arcana cards explained — Ace through Ten across Cups, Wands, Swords, Pentacles. Hand-written meanings, in love + work, gift + shadow, when you pull each card.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: 'Minor Arcana', item: `${SITE_URL}/gab44/tarot/minor` }
        ]
      },
      {
        '@type': 'CollectionPage',
        name: 'Tarot Minor Arcana — all 40 pip cards',
        description: description.substring(0, 280),
        url: `${SITE_URL}/gab44/tarot/minor`
      }
    ]
  })

  // Render as 4 columns (suits) × 10 rows (ranks)
  const SUIT_ORDER: Suit[] = ['cups', 'wands', 'swords', 'pentacles']
  const RANKS: PipRank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const headerRow = SUIT_ORDER.map((s) => {
    const acc = SUIT_ACCENT[s]
    return `<a class="suit-header" href="/gab44/tarot/suits/${s}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="sh-emoji">${SUIT_EMOJI[s]}</div>
      <div class="sh-title">${SUIT_DISPLAY[s]}</div>
      <div class="sh-element">${SUIT_ELEMENT[s]}</div>
    </a>`
  }).join('\n        ')

  const rowsHtml = RANKS.map((r) => {
    const cells = SUIT_ORDER.map((s) => {
      const c = PIP_CARDS.find((q) => q.rank === r && q.suit === s)!
      const acc = SUIT_ACCENT[s]
      return `<a class="grid-cell" href="/gab44/tarot/minor/${c.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
        <div class="cell-emoji">${c.emoji}</div>
        <div class="cell-title">${escapeHtml(c.display)}</div>
        <div class="cell-line">${escapeHtml(c.one_liner.split(' — ')[0])}</div>
      </a>`
    }).join('\n        ')
    return `<div class="rank-row">
      <h3 class="rank-label">${rankLabel(r)}</h3>
      <div class="row-grid">
        ${cells}
      </div>
    </div>`
  }).join('\n    ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/minor" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/minor" />
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
      radial-gradient(1100px 600px at -10% -10%, #6f86d61a 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, #c93a221a 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 1040px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, #6f86d6, #c93a22); box-shadow: 0 0 0 4px rgba(111,134,214,0.18); }
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 32px; font-style: italic; max-width: 680px; }
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

  .suits-header { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 22px; }
  @media (max-width: 600px) { .suits-header { grid-template-columns: repeat(2, 1fr); } }
  .suit-header { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 12px; text-align: center; text-decoration: none;
    border-top: 4px solid; border-image: linear-gradient(90deg, var(--c1), var(--c2)) 1;
    transition: border-color 0.15s; }
  .suit-header:hover { border-color: var(--c1); }
  .sh-emoji { font-size: 28px; margin-bottom: 4px; }
  .sh-title { font-size: 16px; font-weight: 800; color: var(--accent); margin-bottom: 2px; }
  .sh-element { font-size: 11px; color: var(--fg-muted); letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; }

  .rank-row { margin-bottom: 18px; }
  .rank-label { font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; padding-left: 4px; }
  .row-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  @media (max-width: 600px) { .row-grid { grid-template-columns: repeat(2, 1fr); } }
  .grid-cell { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 10px 14px; text-align: left; text-decoration: none;
    border-left: 3px solid var(--c1); transition: border-color 0.15s; }
  .grid-cell:hover { border-color: var(--c1); }
  .cell-emoji { font-size: 22px; margin-bottom: 4px; }
  .cell-title { font-size: 13px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .cell-line { font-size: 11px; color: var(--fg-dim); line-height: 1.45; font-style: italic; }

  .reading-cta {
    background: linear-gradient(135deg, #6f86d6 0%, #2c3a78 100%);
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
      <a href="/gab44/tarot">22 majors</a>
      <a href="/gab44/tarot/court">16 courts</a>
      <a href="/gab44/tarot/spreads">spreads</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot minor arcana</div>
    <h1><span class="sym">🃏</span>The 40 Pip Cards</h1>
    <p class="sub">Ace through Ten across Cups (water · feeling), Wands (fire · will), Swords (air · mind), Pentacles (earth · matter). The minor arcana are the most-pulled cards in any spread — these are the cards that show what is happening in your daily life right now.</p>

    <article class="intro-card">
      <span class="label">how to read minor arcana</span>
      <p>Minor arcana cards are the daily cards. The 22 major arcana are the soul-arc — big themes, fate-level questions. The court cards are the people. The 40 minors (this page) are the moment-to-moment texture: today\'s grief, this week\'s decision, the conversation that needs to happen, the seed that just got planted. Read the suit for the realm (heart, will, mind, matter), and the rank for the stage (1=beginning · 10=completion). Then ask: where in my life is this energy showing up right now?</p>
      <p>Together with the 22 majors, 16 courts, and these 40 minors, this completes the full 78-card tarot deck. Click any card below to read the full meaning — upright, reversed, in love, in work, the gift and the shadow.</p>
    </article>

    <h2><span class="icon">🜂</span>the four suits — pick a realm to go deep</h2>
    <div class="suits-header">
      ${headerRow}
    </div>

    <h2><span class="icon">🎴</span>all 40 minor arcana by rank</h2>
    ${rowsHtml}

    <section class="reading-cta">
      <h2>✉️ Pulled a card and want a reading written for you?</h2>
      <p>If a card showed up in your last reading and you are not sure what it means for *your* situation — we will pull a fresh spread <em>for your specific question</em>, written by hand against your chart, delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="/gab44/reading?ref=minor-index">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot">all 22 Major Arcana</a> · <a href="/gab44/tarot/court">16 court cards</a> · <a href="/gab44/tarot/spreads">tarot spreads</a> · <a href="/gab44/runes">Elder Futhark runes</a> · <a href="/gab44/dreams">archetypal dreams</a> · <a href="/gab44/chakras">the 7 chakras</a>.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
