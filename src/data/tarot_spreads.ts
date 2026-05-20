// Tarot Spreads SEO funnel — /gab44/tarot/spreads (index) +
// /gab44/tarot/spreads/{slug} per-spread.
// 8 hand-written tarot spreads (three-card, celtic-cross, love, yes-no,
// career, daily-draw, relationship, year-ahead). Targets very-high-volume
// evergreen keywords: "3 card tarot reading", "celtic cross tarot",
// "love tarot spread", "yes no tarot", "career tarot spread",
// "daily tarot draw", "relationship tarot spread", "year ahead tarot".
// These are *I-want-to-read-tarot-right-now* searches — extremely high
// intent. Complements the existing 22-card Major Arcana funnel
// (/gab44/tarot/{card}) — each spread cross-links into the relevant
// cards, deepening the tarot vertical.
//
// Each spread guide is ~700 words across 8 sections (when to use,
// the layout, how to read, in love, in work, common mistakes, the
// lesson, pair-with). Type-tinted gradient (beginner=sage, classic=
// indigo, love=rose, direction=amber). Routes registered AT
// /gab44/tarot/spreads (BEFORE the bare /gab44/tarot/:slug to avoid
// Hono RegExpRouter greedy-match grabbing 'spreads' as a card slug).
// Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface TarotSpreadProfile {
  slug: string
  name: string
  display: string
  emoji: string
  card_count: number
  type: 'beginner' | 'classic' | 'love' | 'direction'
  one_liner: string
  when_to_use: string
  layout: { position: string; asks: string }[]
  how_to_read: string
  in_love: string
  in_work: string
  common_mistakes: [string, string, string]
  the_lesson: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  example_card_slugs: [string, string]  // cross-links into existing /gab44/tarot/{card} pages
  key_questions: [string, string, string]
}

export const TAROT_SPREADS: TarotSpreadProfile[] = [
  {
    slug: 'three-card',
    name: 'three-card',
    display: 'Three-Card Spread',
    emoji: '🃏',
    card_count: 3,
    type: 'beginner',
    one_liner: 'The most-pulled tarot spread on earth. Past, present, future — or situation, action, outcome. The first spread every reader learns.',
    when_to_use: 'The three-card spread is the Swiss Army knife of tarot. It is the spread most readers learn first and most readers come back to forever, because three cards is enough to tell a story but not so many that the story gets lost. Use it when you want a clean, focused reading with a beginning, a middle, and an end. It is ideal for: a single specific question (one situation, not your whole life), a check-in on where you are right now, or a flash-read when you do not have time for a full Celtic Cross. The classic interpretation is past / present / future, but readers also use it as situation / action / outcome, mind / body / spirit, or what helps / what hurts / what to do. Pick one frame before you draw. Stick with that frame through the reading.',
    layout: [
      { position: 'Card 1 — Past (or Situation)', asks: 'Where this came from. The ground the present is standing on. The pattern, the wound, the gift, the season just behind you.' },
      { position: 'Card 2 — Present (or Action)', asks: 'Where you are right now. The active force in the situation. What is alive in the moment. What you are being asked to face.' },
      { position: 'Card 3 — Future (or Outcome)', asks: 'Where this is heading if the present is honored. Not destiny — a likely trajectory. The card answers: what does this become?' }
    ],
    how_to_read: 'Read in order, left to right, like a sentence. Card 1 is the *because*, Card 2 is the *now*, Card 3 is the *therefore*. The most useful trick: do not read each card in isolation. Read them as a *story*. Notice the through-line — does Card 1 explain why Card 2 is happening? Does Card 3 follow naturally from Card 2 or break against it? If Cards 1 and 2 are heavy and Card 3 is light, the spread is telling you the dark season is ending. If Cards 1 and 2 are light and Card 3 is heavy, the spread is naming a turn ahead. The Major Arcana cards in any position carry weight (a life lesson, a soul-level theme); the Minor Arcana cards describe the day-to-day. A spread of all Majors says: this is bigger than you thought. A spread of all Minors says: this is more workable than you thought.',
    in_love: 'In love, the three-card frame *self / them / between us* is the most useful adaptation. Card 1 = what you bring, Card 2 = what they bring, Card 3 = the field between you. Reading it this way names the dynamic without making one person the problem. If single, frame as: where I have been in love / what I am ready for now / who is coming.',
    in_work: 'In work, the frame *what is finishing / what is alive now / what is being born* is the cleanest. Career questions are almost always about transitions, and the three-card spread is built for transitions. Pull when you are between roles, between projects, or trying to decide whether to leap.',
    common_mistakes: [
      'Re-pulling because you do not like the cards. The first spread is the spread. Pulling again to "double-check" muddies the signal — the unconscious answered already.',
      'Reading each card alone. The spread is a sentence, not three independent words. Look at how the cards talk to each other.',
      'Asking too many questions at once. One frame, one question, one spread. If you have three questions, do three separate three-card spreads.'
    ],
    the_lesson: 'The lesson of the three-card spread is that almost any situation, told well, has a beginning, a middle, and an end. The cards are not predicting; they are giving you a frame inside which to see the situation more clearly. The smaller the spread, the more precisely it tends to land — three cards is often *more* useful than ten because the story is forced to be honest.',
    pair_with_chakra: 'Throat chakra — speaking the story honestly is the practice.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — to clear the field before pulling.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Clear quartz (clarity) or amethyst (intuitive listening)',
    example_card_slugs: ['the-fool', 'the-world'],
    key_questions: [
      'What is the one specific situation I am asking about — and have I named it cleanly?',
      'Which frame fits this question best — past/present/future, or situation/action/outcome, or self/them/between?',
      'Am I willing to receive an answer I did not expect?'
    ]
  },
  {
    slug: 'celtic-cross',
    name: 'celtic-cross',
    display: 'Celtic Cross Spread',
    emoji: '✚',
    card_count: 10,
    type: 'classic',
    one_liner: 'The most iconic tarot spread in the world. Ten cards, six positions in the cross, four positions in the staff — a full architecture of a situation.',
    when_to_use: 'The Celtic Cross is the spread tarot is most often *pictured* with. Ten cards laid in a particular shape — a six-card cross on the left and a four-card vertical staff on the right — that has been the standard tarot architecture in the English-speaking world since the early 1900s. Use it when the question deserves real architecture: a relationship at a turning point, a major career decision, a season of life that needs naming. The Celtic Cross is overkill for "should I text him?" and exactly right for "what is going on with this whole chapter of my life?" Plan to spend at least 30 minutes with it. Have a notebook out. Read each position carefully, then read the cross-and-staff as two paragraphs.',
    layout: [
      { position: 'Card 1 — The Heart', asks: 'The core of the situation. What this is actually about underneath the surface story.' },
      { position: 'Card 2 — The Cross', asks: 'What crosses you. The challenge, opposition, or counter-energy. Laid sideways across Card 1.' },
      { position: 'Card 3 — Below (Foundation)', asks: 'What is rooted underneath. The unconscious basis. The history that built this ground.' },
      { position: 'Card 4 — Behind (Recent Past)', asks: 'What is just leaving. The energy of the past few weeks or months that is on its way out.' },
      { position: 'Card 5 — Above (Crown)', asks: 'What you are conscious of. The aspiration, the highest possibility, what you can see from where you stand.' },
      { position: 'Card 6 — Ahead (Near Future)', asks: 'What is coming next. The energy of the next few weeks. Card 5 is the dream; Card 6 is the next chapter.' },
      { position: 'Card 7 — Self', asks: 'How you are showing up in this. Your stance, attitude, energy.' },
      { position: 'Card 8 — Environment', asks: 'How others see you, the energetic room you are operating in, the influence of the people around the situation.' },
      { position: 'Card 9 — Hopes & Fears', asks: 'What you both want and dread (often the same thing). The card most readers say jumps off the table.' },
      { position: 'Card 10 — Outcome', asks: 'Where this lands if the present trajectory holds. Not destiny — the forecast.' }
    ],
    how_to_read: 'Read the cross first (Cards 1-6) as the architecture of the situation, then the staff (Cards 7-10) as where you stand inside that architecture. Always start with Cards 1+2: the heart and what crosses it. Those two together are the question the spread is actually answering, and they often surprise the reader. Card 3 (below) is the unconscious; Card 5 (above) is the conscious. Card 4 (behind) and Card 6 (ahead) are the time-axis. Card 7 is you; Card 8 is the room. Card 9 is the most-revealing card in the spread — it almost always names a feeling the conscious self had not yet admitted. Card 10 is the forecast, and it is *the most rewriteable card* — the present always has the power to change Card 10 if Card 9 is finally confronted.',
    in_love: 'In love, the Celtic Cross is appropriate only for big questions: "what is happening to us?", "what is this relationship really for?", "is this the moment to commit / leave / try again?" Do not pull it for "does he like me?" — that is a three-card or yes/no question. The architecture is wasted on small questions and devastatingly precise on big ones.',
    in_work: 'In work, the Celtic Cross is the spread to pull when you are at a real fork: a job offer that means moving cities, leaving a stable role, launching a business, leaving a business. The 10 positions name the texture of the decision: not just what to do, but what you are bringing, what is opposing it, what your own conscious mind hopes for, what your unconscious already fears. Most "wrong" career moves were felt in Card 9 long before they happened.',
    common_mistakes: [
      'Reading each card in isolation. The Celtic Cross is two paragraphs (cross + staff), not ten one-sentence answers.',
      'Skipping Card 9. Hopes-and-Fears is the most uncomfortable card in the spread, which is exactly why it is the most useful. Read it.',
      'Treating Card 10 as fate. The outcome is the trajectory of the *current* moment. The point of Cards 1-9 is to give you the information that lets you change Card 10 if you want to.'
    ],
    the_lesson: 'The lesson of the Celtic Cross is that any human situation has more architecture than the conscious mind can hold at once. Ten cards is a lot, but ten is also approximately how many distinct forces are active in any real-life decision (you, them, the past, the future, what you want, what you fear, the room, the foundation, the challenge, the heart). The spread is honest about complexity. So the reading is honest in return.',
    pair_with_chakra: 'Third eye chakra — the spread is asking you to see clearly at every layer.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — to settle the nervous system before reading 10 cards.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Lapis lazuli (vision) or labradorite (depth)',
    example_card_slugs: ['the-tower', 'the-star'],
    key_questions: [
      'Is the question I am asking actually big enough to deserve 10 cards — or am I overshooting?',
      'Am I willing to sit with Card 9 even if it shows me a fear I have been avoiding?',
      'If Card 10 is heavy, what would I be willing to change in the present to rewrite it?'
    ]
  },
  {
    slug: 'love',
    name: 'love',
    display: 'Love Spread',
    emoji: '💞',
    card_count: 5,
    type: 'love',
    one_liner: 'Five cards for the dynamic between two people. You, them, the connection, the obstacle, the outcome. The most-pulled love spread.',
    when_to_use: 'The five-card love spread is for when you want to look at *the two of you*, not just one of you. It works for any romantic dynamic — a new connection, an established relationship, an ex-situation, a person you cannot tell whether to take seriously. Use it when the question is more about *us* than about *me* or *them* alone. The spread will feel especially clean if you have a specific person in mind, but it can also be done open-handed (about love in general, about the next love coming). Do not pull it on someone else without their consent — pull it on the field between you, which is fair game because you are part of that field.',
    layout: [
      { position: 'Card 1 — You', asks: 'What you are bringing into the connection right now. Your current state, your emotional weather, what you carry into the room.' },
      { position: 'Card 2 — Them', asks: 'What they are bringing. Their current state. Useful clarification: the card describes their energetic offering in this dynamic, not their full personhood.' },
      { position: 'Card 3 — The Connection', asks: 'The third thing that is created when you and they are together. The energetic field. The dynamic itself.' },
      { position: 'Card 4 — The Obstacle', asks: 'What is in the way. Could be a circumstance, a pattern, a belief, a wound, a third party, a timing.' },
      { position: 'Card 5 — The Outcome', asks: 'Where this is going if both of you stay honest with the obstacle in Card 4. Not fated — workable.' }
    ],
    how_to_read: 'Start with Cards 1 and 2 side by side. Are the two of you in similar territory or wildly different? If similar, the connection often has resonance and ease. If wildly different, the connection often has tension that can be either generative (you grow each other) or exhausting (you wear each other out). Card 3 (the connection) is the spread\'s heart — it names what the *field between you* is actually doing. A high-vibration card here means the dynamic itself is healthy even if the obstacle is real. A low-vibration card here means the dynamic is the obstacle. Card 4 is what to face. Card 5 only matters if Card 4 is honored. Most love spreads die in Card 4 — the reader sees the obstacle, refuses to do anything about it, and the outcome stays heavy.',
    in_love: 'This is the love spread, so the love frame is built in. But there is a subtler way to use it: pull it not on a current person but on the *kind of love you are ready for*. Card 1 = where you are; Card 2 = the kind of partner the universe is currently sending; Card 3 = the relationship-shape that would actually work right now; Card 4 = the inner pattern you would have to break to receive it; Card 5 = the version of you on the other side of breaking that pattern.',
    in_work: 'For work *partnerships* — co-founders, creative duos, mentor relationships — the love spread is surprisingly accurate. Replace "love" with "partnership". Card 4 (the obstacle) often names the structural issue (mismatched commitment, money, ego, vision drift) before the partnership has even named it itself.',
    common_mistakes: [
      'Pulling on someone you are obsessed with rather than connected to. The cards will respond, but they will respond to the obsession, not the connection.',
      'Reading Card 2 as "their character" rather than "their current energy in this dynamic". A great person can show up small in a particular relationship; the card describes what they are bringing here, not who they are.',
      'Ignoring Card 4. Love spreads are most useful when the obstacle is named out loud and worked. Pretty cards in 1-2-3-5 do not save a relationship from an unaddressed Card 4.'
    ],
    the_lesson: 'The lesson of the love spread is that a relationship is a third thing — not just two people, but the *field between them*. Most love-spread-pullers want the cards to tell them whether the other person is right. The cards almost always answer the more useful question: are *the two of you, together*, doing real work or playing pretend? Card 3 is the truth-teller.',
    pair_with_chakra: 'Heart chakra — the chamber the spread is reading.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — to soften the grip before pulling.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (gentle heart) or rhodonite (heart healing)',
    example_card_slugs: ['the-lovers', 'two-of-cups'],
    key_questions: [
      'Am I asking about the *us* or am I really only asking about the *them*?',
      'What obstacle do I already secretly know is in the way?',
      'If the cards confirm what I already feel, am I willing to act on it?'
    ]
  },
  {
    slug: 'yes-no',
    name: 'yes-no',
    display: 'Yes / No Spread',
    emoji: '⚖️',
    card_count: 1,
    type: 'beginner',
    one_liner: 'One card. One yes-or-no question. The fastest, most-pulled tarot reading on earth.',
    when_to_use: 'The yes/no spread is the fastest tarot reading possible — one card, one question, one answer. It is the spread for closed-yes-or-no questions: "should I take the job?", "is this person interested?", "should I send the message?", "is now the time?". It is *not* the spread for "what is happening with my life?" or "tell me about my future" — those are open-ended questions, and yes/no is for closed ones. The traditional method assigns each Major Arcana card a yes / no / maybe based on its energy (the Sun = yes; the Tower = no; the High Priestess = maybe). For Minor Arcana, upright cards lean yes, reversed lean no, and the suit shifts the answer (Cups = yes when love-questions match; Swords = often no or "wait"; Wands = yes if action-questions; Pentacles = yes if material-questions).',
    layout: [
      { position: 'Card 1 — The Answer', asks: 'Yes, no, or wait — the single-card verdict. Read by orientation (upright/reversed) AND by the card\'s inherent energy AND by how the card relates to your specific question.' }
    ],
    how_to_read: 'Combine three signals: (1) orientation — upright cards lean toward yes, reversed cards lean toward no (some readers shuffle without reversals; if you do, skip this); (2) inherent yes/no — the bright, forward-moving cards (Sun, Star, World, Magician, Empress, Aces, Nines except Nine of Swords) are yes; the dark, holding-back, or warning cards (Tower, Devil, Three of Swords, Five of Cups, Ten of Swords) are no; the contemplative cards (High Priestess, Hermit, Hanged Man, Four of Cups, Seven of Cups) are *wait* or *unclear yet*; (3) match to your question — the Death card is "no" to "should I stay?" but a strong "yes" to "should I let this end?". Hold all three signals at once. The answer is usually clear within ten seconds.',
    in_love: 'For love yes/no questions, Cups dominate the answer. Cups upright = usually yes. Cups reversed or dry (Five, Eight) = wait or no. The Lovers card is a strong yes; the Devil is "yes but be honest about what is at stake"; the Three of Swords is a quiet no. For "is this person interested?": pull, then ignore the words and look at the *energy* — does the card lean toward you (Knight of Cups, Page of Cups, Two of Cups) or away (Eight of Cups, Five of Pentacles, Hermit)?',
    in_work: 'For work yes/no questions, Pentacles and Wands carry most of the weight. Pentacles upright (especially Aces, Threes, Tens) = yes for stable choices. Wands upright = yes for action choices. Swords show up to say "wait, you have not thought this through enough" — the Two of Swords is the most common "ask again later" card in work yes/no readings. The Tower is "no, and the version of yes you wanted is not real anyway".',
    common_mistakes: [
      'Asking yes/no when the question is actually multi-part. "Should I take this job and move cities?" is two questions; pull two cards (or use the three-card spread). One card cannot answer a compound question.',
      'Re-pulling until you get yes. The first card is the answer. Re-pulling teaches the unconscious that you are not actually listening, and the readings become noisier the more often you do it.',
      'Asking yes/no on someone else\'s life. "Will my friend accept this offer?" is not your question to ask — pull on what *you* should do in response, not what *they* should do.'
    ],
    the_lesson: 'The lesson of the yes/no spread is that asking the right question is harder than reading the answer. If your question is sharp, the card will be sharp. If your question is fuzzy, the card will be fuzzy. The discipline is on the questioning side, not the reading side. Most "ambiguous" yes/no readings are ambiguous because the question was not actually closed.',
    pair_with_chakra: 'Solar plexus — the chakra of decision and personal will.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — to clear the panic that drives bad questions.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Citrine (clarity of will) or pyrite (decisive ground)',
    example_card_slugs: ['the-sun', 'the-tower'],
    key_questions: [
      'Is this actually a closed yes/no question — or am I trying to compress something open into a single card?',
      'What answer am I afraid the cards will give? (That answer is often what the card actually says.)',
      'If the answer is yes, am I ready to act this week?'
    ]
  },
  {
    slug: 'career',
    name: 'career',
    display: 'Career Path Spread',
    emoji: '🜃',
    card_count: 5,
    type: 'direction',
    one_liner: 'Five cards for the work question. Where you are, what you bring, the obstacle, the next step, the outcome. The spread for forks in the road.',
    when_to_use: 'The career-path spread is for moments when work is at a fork: a job offer, a pivot, a launch, a leaving, a return after a break, a creative project that wants to become a career. It works for anyone whose relationship to work is in motion — employees, founders, freelancers, artists, parents returning, students choosing. Pull it when the question is concrete enough to act on within three months. It is not for "what is my purpose in life?" (too open — use the Celtic Cross or a soul-purpose spread). It is for "should I take this offer?", "is this side project worth committing to?", "should I leave this role?". The five cards are designed to translate vague work-anxiety into a clear next step.',
    layout: [
      { position: 'Card 1 — Where You Are', asks: 'Your current career season. Are you in growth, stuck, ending, beginning, sleeping. The honest baseline.' },
      { position: 'Card 2 — What You Bring', asks: 'The gift, skill, or quality you carry into work that the situation actually wants. Often surprising — not always the credential you think it is.' },
      { position: 'Card 3 — The Obstacle', asks: 'What is in the way. Sometimes external (money, timing, market). Often internal (fear, perfectionism, identity). Usually both.' },
      { position: 'Card 4 — The Next Step', asks: 'The single concrete move. Not the strategy — the next physical action. This is the card to act on within a week.' },
      { position: 'Card 5 — The Outcome', asks: 'Where this goes if you take Card 4. Not the final destination — the next chapter.' }
    ],
    how_to_read: 'Read in order. Card 1 names the season honestly — if you have been in burnout, the card will say so. If you have been coasting, the card will say so. Card 2 is often the most-overlooked card in the spread: people skip it because they assume they know what they bring. Read it carefully — the unconscious almost always names a quality the conscious mind has been undervaluing (often a soft skill, a rest skill, a perspective gained through hardship). Card 3 is what to face. Card 4 is the spread\'s heart — it should be a small, doable action. If Card 4 looks like a giant leap, scale it down: "send the email", "open the doc", "have the conversation". Card 5 follows from Card 4 — it is the chapter that opens because you took the step.',
    in_love: 'For relationship-work overlap (a partner whose career affects yours, a co-founder relationship, a partner asking you to choose between them and the work) — the career spread will honor the work side cleanly, but pair it with a love spread to honor the relationship side. Reading both at once tells you whether the two are actually opposed or whether you have been told they are.',
    in_work: 'This is the work spread, so the work frame is built in. The most useful adaptation: pull it not on a single decision but on a *season*. "What does this next chapter of my work want?" — the spread will name where the chapter is ripe (Card 1), what it needs from you (Card 2), what is in the way (Card 3), and the first concrete move (Card 4). It is the strongest one-page strategic plan most professionals will ever generate.',
    common_mistakes: [
      'Asking too far ahead. "What will my career look like in five years?" is unreadable. Five years is multiple Card 5s. Stay inside the next three months.',
      'Treating Card 4 as advice rather than instruction. The Next Step card is the spread\'s gift — it tells you what to *do this week*. Most people read it and then do nothing. The cards know.',
      'Conflating Card 3 (obstacle) with Card 1 (where you are). The obstacle is what is in the way; the season is the ground. They are different cards.'
    ],
    the_lesson: 'The lesson of the career spread is that career questions are almost always about identity, not about strategy. Card 2 (what you bring) usually answers a question the asker did not ask: who are you? Card 3 (the obstacle) usually names an internal pattern, not an external one. Career anxiety usually clears the moment the spread reframes the question from "what should I do?" to "what is mine to bring?".',
    pair_with_chakra: 'Solar plexus — the chakra of personal power and direction.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance Affirmations — to settle the scarcity that fuels bad career decisions.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Tiger\'s eye (decisive ground) or pyrite (manifestation)',
    example_card_slugs: ['the-magician', 'eight-of-pentacles'],
    key_questions: [
      'Is my question actionable within three months — or am I asking about a five-year horizon the cards cannot read?',
      'If Card 4 names a small, embarrassingly concrete action — am I willing to do it this week?',
      'What internal obstacle have I been blaming on external circumstances?'
    ]
  },
  {
    slug: 'daily-draw',
    name: 'daily-draw',
    display: 'Daily Card Draw',
    emoji: '☀️',
    card_count: 1,
    type: 'beginner',
    one_liner: 'One card, every morning. The smallest tarot practice — and the one that builds the deepest relationship with the deck.',
    when_to_use: 'The daily card draw is the foundational tarot practice. One card, every morning, with one question: *what do I need to see today?* Or: *what is the energy of the day ahead?* Or simply: *what do you have for me?* Drawn quickly, with intention, before you check your phone. The point is not the prediction — the point is the *practice* of meeting the day with a frame. The card you draw becomes a lens you carry through the day. You notice things you would have otherwise missed because the card has primed your attention. The daily draw is also the single most effective way to learn a tarot deck. Reading 200 days of the same deck does more for your tarot literacy than any book ever will.',
    layout: [
      { position: 'Card 1 — Today', asks: 'The lens for the day. The energy you are walking into. The quality the day is asking you to bring. The thing to notice. The thing to be careful of.' }
    ],
    how_to_read: 'Pull first, interpret briefly, then *carry the card with you* through the day. Most readers spend two minutes interpreting the card in the morning and then five hours noticing how the card showed up during the day — that second part is where the real reading happens. If you pulled the Hermit, notice when you needed solitude and when you got it (or did not). If you pulled the Three of Cups, notice the moments of friendship and joy. The morning card is a hypothesis; the day is the test. Keep a one-line journal entry each evening: which card, and how it landed. After a month, patterns become visible. After three months, the daily draw becomes one of the most accurate forms of self-tracking available.',
    in_love: 'A specifically-love daily draw is also possible: pull a single card each morning with the question "what does my heart need today?" or, for a couple, "what does our relationship need today?". This is the gentlest possible relationship practice — one card a day, minimum maintenance, deeply revealing over time.',
    in_work: 'For work, the daily draw can be focused: "what is mine to do today?" — pulled before opening email. The card primes your priority. Some readers pair it with a closing card at the end of the day ("what is mine to release before sleep?") for a clean energetic open and close to the work day.',
    common_mistakes: [
      'Pulling more than once per day. The daily card is the daily card. Re-pulling because you do not like it teaches the unconscious that you are not listening — and the cards stop being clear.',
      'Skipping the evening reflection. The morning pull is half the practice; the evening "did this card show up today?" is the other half. Without the reflection, the practice never deepens.',
      'Treating the card as fate rather than as lens. The Tower in the morning does not mean disaster; it means the *quality* of disruption is the energy of your day, and your job is to notice where that quality shows up — sometimes as a real disruption, sometimes as a freedom you needed.'
    ],
    the_lesson: 'The lesson of the daily card is that small repeated practice beats large infrequent practice every time. Most tarot readers who *say* they read tarot have done a Celtic Cross twice and never opened the deck again. Tarot readers who do a daily card for a year develop a literacy with the deck that no class can teach. Show up daily. Pull one card. Carry it. Reflect at night. Repeat.',
    pair_with_chakra: 'Crown chakra — the daily practice of opening the channel.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — to start the day from a clean field.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Selenite (daily clearing) or amethyst (intuitive listening)',
    example_card_slugs: ['the-high-priestess', 'the-hermit'],
    key_questions: [
      'Am I pulling at the same time each morning — and before I check my phone?',
      'Am I keeping a one-line evening note on whether and how the card showed up?',
      'After 30 days of daily pulls, what patterns am I starting to see?'
    ]
  },
  {
    slug: 'relationship',
    name: 'relationship',
    display: 'Relationship Spread',
    emoji: '🤝',
    card_count: 7,
    type: 'love',
    one_liner: 'Seven cards for an established connection. What each person brings, what each person needs, the dynamic, the obstacle, the next chapter. Deeper than the love spread.',
    when_to_use: 'The seven-card relationship spread is for established connections that need real attention — romantic partnerships of months or years, deep friendships, family-of-origin dynamics, long co-creative partnerships. It is not the spread for a new dating prospect (use the love spread) or a yes/no relationship question (use yes/no). It is the spread for the conversation you would have if you had three honest hours and a willing partner. The seven positions name what each person is bringing, what each person is hungry for, the field between, the work the relationship is doing, the obstacle, and the next chapter. Pull it alone, or pull it with the other person if both of you are willing — paired-pull readings (where each person draws their own "what I bring" card) can be the most generative therapy session a couple ever has.',
    layout: [
      { position: 'Card 1 — What You Bring', asks: 'Your current offering. What you are showing up with. Your active energy in the relationship.' },
      { position: 'Card 2 — What You Need', asks: 'The hunger underneath. What part of you the relationship is asked to feed. Often a part you have not named out loud.' },
      { position: 'Card 3 — What They Bring', asks: 'Their current offering in this dynamic. (Pulled with their consent if possible; pulled with humility about projection if not.)' },
      { position: 'Card 4 — What They Need', asks: 'Their hunger underneath. What they are looking for from you (or from love itself in this season).' },
      { position: 'Card 5 — The Field Between', asks: 'The third thing the two of you create. The dynamic itself — independent of either of you alone.' },
      { position: 'Card 6 — The Obstacle', asks: 'What is in the way of Card 5 being healthier. A pattern, a wound, a circumstance, a third party, a timing.' },
      { position: 'Card 7 — The Next Chapter', asks: 'Where this goes if Cards 2, 4, and 6 are honored. The trajectory if both people stay present.' }
    ],
    how_to_read: 'Read Cards 1-2 (you) and Cards 3-4 (them) as paired pairs. The most useful comparison: does what you bring match what they need? Does what they bring match what you need? When the brings and needs misalign, the relationship is doing real work and either growing or wearing down — Card 5 (the field) tells you which. Card 6 (the obstacle) is where most relationships make or break: relationships that name and work the obstacle move into Card 7; relationships that ignore the obstacle stall. Card 7 is rewriteable in the same way the Celtic Cross outcome card is rewriteable — it is the trajectory of the *current pattern*, not the destiny.',
    in_love: 'This is the love spread, so the love frame is built in. For partnered couples doing the spread together, the most useful version is to *each* pull Cards 1 and 2 separately (do not show until done) and *each* pull Cards 3 and 4 about the other (humbly). Then compare: did your partner pull what you actually need? Did you pull what they actually bring? The places where the readings agree are gold; the places where they diverge are the conversations to have.',
    in_work: 'For long-term work partnerships (co-founders, creative duos, mentor-mentee, leader-team), the spread maps cleanly. Replace "the relationship" with "the partnership" and the seven cards still hold. Card 5 (the field) becomes the partnership culture; Card 6 becomes the structural friction; Card 7 becomes whether the partnership is heading toward expansion or dissolution.',
    common_mistakes: [
      'Pulling on the partner without their permission, then treating the cards as a verdict. Even with consent, Cards 3-4 are the *energetic offering* of the partner in this dynamic — not their full personhood, and not a license to confront them with "the cards said you are this".',
      'Reading Cards 1-2 (you) less honestly than Cards 3-4 (them). Most spread-pullers go easy on themselves and hard on the partner. Reverse the bias: read Cards 1-2 with the most honesty.',
      'Skipping Card 6. The obstacle is the spread\'s most useful card. Most relationships die in unaddressed Card 6 territory, not in big betrayal cards.'
    ],
    the_lesson: 'The lesson of the relationship spread is that relationships are *systems* — three things, not two. You + them + the field between. Most relationship problems are field problems, not character problems. Card 5 is where the actual relationship lives, and reading it kindly is the most generous thing the spread teaches.',
    pair_with_chakra: 'Heart chakra — the chamber the seven cards are reading.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for the patterns that have outlived their usefulness.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rhodonite (heart healing) or kunzite (gentle love)',
    example_card_slugs: ['two-of-cups', 'four-of-wands'],
    key_questions: [
      'Am I pulling Cards 3-4 with humility — knowing they describe an offering, not a verdict on a person?',
      'Am I reading Cards 1-2 as honestly as I am reading Cards 3-4?',
      'If Card 6 names something I have been avoiding, am I willing to bring it to the relationship?'
    ]
  },
  {
    slug: 'year-ahead',
    name: 'year-ahead',
    display: 'Year-Ahead Spread',
    emoji: '🗓️',
    card_count: 12,
    type: 'classic',
    one_liner: 'Twelve cards, one for each month of the year. The classic New Year spread, also useful on your birthday, a solar return, or any threshold.',
    when_to_use: 'The year-ahead spread is the largest commonly-pulled tarot spread — twelve cards, one for each of the next twelve months. Pull it on New Year\'s Eve, on your birthday, on a solar return, or on any clear threshold (a move, a graduation, the first day of a new chapter). The point is not to predict the year (the future is more rewriteable than that) but to *prime the year* — to give each month a frame, a question, a quality to pay attention to. Read once at the threshold, then revisit each month\'s card on the first of that month for a one-minute check-in. The year-ahead spread is best understood as a *companion* through the year, not a verdict at its start.',
    layout: [
      { position: 'Cards 1-12 — Months 1-12', asks: 'Each card describes the energetic flavor of one month — what is ripening, what is being asked, what to lean into, what to release.' }
    ],
    how_to_read: 'Lay all twelve cards in a circle (clockwise like a clock face) or in a line (left to right). Read each card *briefly* on the first pass — one or two sentences per month, no more. Resist the urge to do a full Celtic Cross on each card. Then look at the *shape* of the year: where are the heavy cards? Where are the light ones? Where does the energy peak? Where does it dip? Note any month with a Major Arcana card — those are the soul-level chapters of the year, the months where transformation is asked. Note any month with three or more cards from the same suit — those are seasonal themes (a Cups season for love, a Pentacles season for money, a Wands season for action, a Swords season for clarity or conflict). Then revisit each card on the first day of its month and read it more deeply — by then, the context will have arrived to make the card legible.',
    in_love: 'For a love-themed year-ahead, frame the question at draw-time as "what is each month asking of my heart?". The Cups cards will dominate love-themed year-aheads (drawn this way), and the months without Cups will be the months of solo work, friendship, or rest from love.',
    in_work: 'For a career-themed year-ahead, frame at draw-time as "what is each month asking of my work?". Pentacles and Wands will tend to dominate. Months without Pentacles or Wands are the months for rest, learning, or pivot — not the months for big career moves.',
    common_mistakes: [
      'Reading all twelve cards in full Celtic Cross depth on day one. The year-ahead is meant to be read briefly at the threshold and revisited monthly. Reading it all at once exhausts the reader and over-determines the year.',
      'Treating heavy cards (Tower, Death, Three of Swords, Ten of Swords) as bad news. Every year has hard months. The cards are naming the *quality* of the month — not whether the month will be good or bad. A Tower month is often the most growth-rich month of the year.',
      'Refusing to revisit. The year-ahead is a relationship with the year, not a horoscope. Revisit each card on the first of its month — the practice is what makes the spread useful.'
    ],
    the_lesson: 'The lesson of the year-ahead is that a year has shape, and naming the shape gives you the chance to live with the shape rather than against it. Most people resist their own year (fighting the rest months, rushing the slow months, missing the peak months because they were not paying attention). The year-ahead spread teaches you to listen to the year as a piece of music — twelve movements, each with its own tempo. Honor the tempo, and the year goes farther.',
    pair_with_chakra: 'Crown chakra — the long view, the overarching story.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — to settle into the long arc of the year.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Clear quartz (clarity across time) or moonstone (cycles)',
    example_card_slugs: ['the-wheel-of-fortune', 'the-world'],
    key_questions: [
      'Am I drawing this at a real threshold (New Year, birthday, solar return) — or am I forcing one?',
      'Am I willing to revisit each card on the first of its month — or will I read once and never look again?',
      'What is the shape of this year — where are the peaks, the dips, the soul-level Major months?'
    ]
  }
]

export const TAROT_SPREAD_SLUGS = TAROT_SPREADS.map((s) => s.slug)
const SPREAD_BY_SLUG: Record<string, TarotSpreadProfile> = Object.fromEntries(
  TAROT_SPREADS.map((s) => [s.slug, s])
)

export function isTarotSpreadSlug(s: string): boolean {
  return s in SPREAD_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Type-tinted gradient — beginner=sage, classic=indigo, love=rose, direction=amber.
const TYPE_ACCENT: Record<TarotSpreadProfile['type'], { c1: string; c2: string }> = {
  beginner:  { c1: '#7a9b6a', c2: '#3d5d2c' },
  classic:   { c1: '#5a4e7a', c2: '#2c2444' },
  love:      { c1: '#dba2a2', c2: '#a87060' },
  direction: { c1: '#d6a455', c2: '#9b6a28' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function tarotSpreadPageHTML(slug: string): string {
  const s = SPREAD_BY_SLUG[slug]
  if (!s) return ''
  const accent = TYPE_ACCENT[s.type]
  const readingHref = `/gab44/reading?ref=spread-${slug}`

  const title = `${escapeHtml(s.display)} — How to Read, Layout, Common Mistakes &amp; the Lesson · gab44 ✨`
  const description = `${s.display} explained — when to use it, the ${s.card_count}-card layout, how to read each position, common mistakes, and the deeper lesson. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Tarot', item: `${SITE_URL}/gab44/tarot` },
          { '@type': 'ListItem', position: 3, name: 'Spreads', item: `${SITE_URL}/gab44/tarot/spreads` },
          { '@type': 'ListItem', position: 4, name: s.display, item: `${SITE_URL}/gab44/tarot/spreads/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${s.display}: how to read, layout, common mistakes`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/tarot/spreads/${slug}`,
        about: `${s.display}, tarot spread, tarot reading, how to read tarot`
      }
    ]
  })

  const otherSpreadsHtml = TAROT_SPREADS.filter((q) => q.slug !== slug).map((q) => {
    const acc = TYPE_ACCENT[q.type]
    return `<a class="ph-mini" href="/gab44/tarot/spreads/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.display)}</span></a>`
  }).join('\n        ')

  const positionsHtml = s.layout.map((pos, i) => {
    return `<div class="position-card">
        <div class="pos-num">${s.layout.length === 1 ? 'Card' : `Position ${i + 1}`}</div>
        <h4>${escapeHtml(pos.position)}</h4>
        <p>${escapeHtml(pos.asks)}</p>
      </div>`
  }).join('\n      ')

  const exampleCardsHtml = s.example_card_slugs.map((cardSlug) => {
    return `<a class="card-chip" href="/gab44/tarot/${cardSlug}">${escapeHtml(cardSlug.replace(/-/g, ' '))}</a>`
  }).join(' ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/spreads/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/tarot/spreads/${slug}" />
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
  .type-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px;
    margin-right: 8px; }
  .count-pill { display: inline-block; background: var(--bg-1); border: 1px solid var(--line);
    color: var(--fg-dim); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 12px; }
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
  .layout-stack { display: flex; flex-direction: column; gap: 10px; margin: 14px 0; }
  .position-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 16px 20px; border-left: 4px solid var(--c1); }
  .position-card .pos-num { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .position-card h4 { margin: 0 0 6px; font-size: 15px; color: var(--fg); font-weight: 700; }
  .position-card p { margin: 0; font-size: 14px; color: var(--fg-dim); line-height: 1.55; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel ul { margin: 0; padding-left: 18px; }
  .signs-panel li { font-size: 14px; color: var(--fg); margin-bottom: 8px; }
  .signs-panel li:last-child { margin-bottom: 0; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ctx-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ctx-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
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
  .lesson-card { background: linear-gradient(135deg, ${accent.c1}10 0%, ${accent.c2}10 100%);
    border: 1px solid var(--c1); border-radius: 14px; padding: 22px 24px; margin: 14px 0; }
  .lesson-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .lesson-card p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .examples-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 20px; margin: 14px 0; font-size: 13px; color: var(--fg-dim); }
  .examples-strip .label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; display: block; }
  .card-chip { display: inline-block; background: var(--bg-2); border: 1px solid var(--line);
    color: var(--accent); padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
    text-decoration: none; margin: 2px 4px 2px 0; transition: border-color 0.15s; }
  .card-chip:hover { border-color: var(--c1); }
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
  .other-spreads { margin: 36px 0 22px; }
  .other-spreads h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .spreads-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .spreads-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/tarot">all 22 tarot cards</a>
      <a href="/gab44/tarot/spreads">all 8 spreads</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ tarot spread</div>
    <span class="type-pill">${escapeHtml(s.type)}</span>
    <span class="count-pill">${s.card_count}-card</span>
    <h1><span class="sym">${s.emoji}</span>${escapeHtml(s.display)}</h1>
    <p class="sub">${escapeHtml(s.one_liner)}</p>

    <article class="core-card">
      <span class="label">when to use this spread</span>
      <p class="text">${escapeHtml(s.when_to_use)}</p>
    </article>

    <h2><span class="icon">🎴</span>the layout</h2>
    <div class="layout-stack">
      ${positionsHtml}
    </div>

    <h2><span class="icon">📖</span>how to read it</h2>
    <p>${escapeHtml(s.how_to_read)}</p>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ctx-grid">
      <div class="ctx-card">
        <h3>in love</h3>
        <p>${escapeHtml(s.in_love)}</p>
      </div>
      <div class="ctx-card">
        <h3>in work</h3>
        <p>${escapeHtml(s.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">⚠️</span>common mistakes</h2>
    <div class="signs-panel">
      <h3>watch out for these</h3>
      <ul>
        <li>${escapeHtml(s.common_mistakes[0])}</li>
        <li>${escapeHtml(s.common_mistakes[1])}</li>
        <li>${escapeHtml(s.common_mistakes[2])}</li>
      </ul>
    </div>

    <h2><span class="icon">🪶</span>the lesson</h2>
    <div class="lesson-card">
      <h3>the deeper teaching</h3>
      <p>${escapeHtml(s.the_lesson)}</p>
    </div>

    <div class="examples-strip">
      <span class="label">cards that often appear in this spread</span>
      ${exampleCardsHtml} <em style="color:var(--fg-muted);font-size:12px">— each links to the full card meaning</em>
    </div>

    <h2><span class="icon">🌿</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${s.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(s.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(s.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${s.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(s.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(s.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(s.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(s.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to ask before pulling</h2>
    <div class="questions-card">
      <h3>sit with these</h3>
      <ol>
        <li>${escapeHtml(s.key_questions[0])}</li>
        <li>${escapeHtml(s.key_questions[1])}</li>
        <li>${escapeHtml(s.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for your specific question</h2>
      <p>This page teaches the spread. A <strong>personal reading</strong> pulls the cards *for you*, against your chart and your specific question, and writes you a letter back. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/tarot/spreads">all 8 tarot spreads</a> · <a href="/gab44/tarot">all 22 tarot Major Arcana cards</a> · <a href="/gab44/chakras/${s.pair_with_chakra_slug}">${escapeHtml(s.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/gab44/dreams">dreams</a>.
    </div>

    <section class="other-spreads">
      <h3>other tarot spreads</h3>
      <div class="spreads-grid">
        ${otherSpreadsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function tarotSpreadsIndexHTML(): string {
  const cards = TAROT_SPREADS.map((s) => {
    const accent = TYPE_ACCENT[s.type]
    return `<a href="/gab44/tarot/spreads/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${s.emoji}</span>
        <span class="day">${s.card_count}-card · ${escapeHtml(s.type)}</span>
      </div>
      <div class="name">${escapeHtml(s.display)}</div>
      <div class="teaser">${escapeHtml(s.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 8 Most-Pulled Tarot Spreads — How to Read Each, Layout &amp; Lessons · gab44 ✨</title>
<meta name="description" content="The 8 tarot spreads every reader uses — three-card, Celtic Cross, love, yes/no, career, daily draw, relationship, year-ahead. When to use each, the layout, how to read, common mistakes, the lesson. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/tarot/spreads" />
<meta property="og:title" content="The 8 Most-Pulled Tarot Spreads · gab44" />
<meta property="og:description" content="Three-card, Celtic Cross, love, yes/no, career, daily draw, relationship, year-ahead. How to read each one." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 680px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .sym { font-size: 38px; }
  .card .day { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; text-transform: uppercase; }
  .card .name { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
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
      <a href="/gab44/tarot">all 22 tarot cards</a>
      <a href="/gab44/dreams">dreams</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 8 most-pulled <span class="accent">tarot spreads</span> — how to read each.</h1>
    <p class="sub">Three-card, Celtic Cross, love, yes/no, career, daily draw, relationship, year-ahead. The spreads every reader uses — what each one is for, how to lay it out, how to read it, what to avoid.</p>

    <div class="intro">
      <h3>How to choose a spread</h3>
      <p><strong>Match the spread to the question.</strong> Closed yes/no questions get one card. Quick check-ins get three. Big architecture questions (relationships at a turning point, major career forks) get the Celtic Cross. Daily practice gets one card every morning. Year thresholds get twelve. Pulling a Celtic Cross on "should I text him?" wastes the spread; pulling yes/no on "what is happening to my whole life?" wastes the question.</p>
      <p><strong>Smaller spreads are often clearer.</strong> A three-card spread, read carefully, is usually more useful than a sloppy ten-card spread. The discipline is in the reading, not the size.</p>
      <p><strong>Re-pulling muddies the signal.</strong> The first spread is the spread. Re-shuffling because you do not like the cards teaches the unconscious that you are not actually listening — and the readings get noisier the more often you do it. Pull once. Sit with it.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want the cards pulled for you, by hand, written warm?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading pulls a spread tuned to *your* specific question, reads it against *your* chart, and writes you a letter back. <a href="/gab44/reading?ref=spread-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
