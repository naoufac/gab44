// Manifestation Methods SEO funnel — /gab44/manifestation (index) +
// /gab44/manifestation/{slug}. 10 hand-written method guides:
// 369-method, scripting, pillow-method, whisper-method, 5x55-method,
// two-cup-method, 17-second-rule, vision-board, letter-to-universe,
// mirror-method. Targets the highest-volume manifestation searches in
// all of search (much TikTok-driven): "369 method how to", "scripting
// manifestation", "pillow method does it work", "whisper method",
// "5x55 manifestation", "2 cup method", "17 second rule abraham hicks",
// "vision board ideas", "letter to the universe", "mirror affirmations".
// Universal cluster — non-Western audience too.
//
// Each guide is ~600-700 words across 9 sections (what it is, how it
// works energetically, step-by-step, when to use, common mistakes, the
// deeper truth / why it sometimes fails, pair-with chakra/sound/crystal,
// 3 key questions). Realm-tinted gradient (writing=indigo, spoken=coral,
// ritual=green, energy=violet). Routes registered at /gab44/manifestation
// (no Hono RegExpRouter conflict — 'manifestation' is not a sign or card).
// Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface ManifestationMethod {
  slug: string
  name: string
  realm: 'writing' | 'spoken' | 'ritual' | 'energy'
  emoji: string
  one_liner: string
  origin_note: string
  meaning: string
  how_it_works: string
  steps: [string, string, string, string]
  when_to_use: string
  common_mistakes: [string, string, string]
  the_deeper_truth: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const MANIFESTATION_METHODS: ManifestationMethod[] = [
  {
    slug: '369-method',
    name: '369 Method',
    realm: 'writing',
    emoji: '✍️',
    one_liner: 'Write your desire 3 times in the morning, 6 times at noon, 9 times before bed. Tesla\'s numbers, scaled for the human nervous system.',
    origin_note: 'Inspired by Nikola Tesla\'s claim that 3, 6, and 9 were the keys to the universe. Went viral on TikTok in the early 2020s and has stayed there ever since.',
    meaning: 'The 369 method is the most popular manifestation practice on the internet for one reason: it is structured. You do not have to "feel" anything mystical. You just write a single sentence in the morning (3x), at midday (6x), and before sleep (9x). The structure is what makes it work — your conscious mind cannot drift, your unconscious mind absorbs the repetition, and the spacing across the day means the desire becomes part of *every chapter* of your day, not just one journaling moment.',
    how_it_works: 'The 369 method works through a combination of repetition (the unconscious mind learns by repetition), spaced practice (memory neuroscience: spaced repetition outperforms massed practice for retention), and emotional anchoring (the desire shows up at three different states — sleepy morning brain, busy midday brain, soft pre-sleep brain). Skeptics call this "just journaling." Practitioners call it daily energetic alignment. Both are right.',
    steps: [
      'Pick ONE desire and write it as a present-tense affirmation. Not "I want a new job" but "I am loving my new job that pays $X and lets me work remote."',
      'Morning, within 30 minutes of waking: write the same sentence 3 times in your journal. Feel into it as you write — do not rush.',
      'Midday or early afternoon: write the sentence 6 times. Pause between each line.',
      'Before sleep, lights low: write the sentence 9 times. Let it be the last thing on your mind as you fall asleep — the unconscious will work on it overnight.'
    ],
    when_to_use: 'Best for goals with a clear, specific, time-bound shape — a job, a sum of money, a move, a partner archetype, a creative project finished. Less effective for vague spiritual asks ("I want peace") because the structure benefits from a sentence that can be repeated identically each time.',
    common_mistakes: [
      'Changing the wording each time — pick the sentence carefully, then repeat it identically. The repetition is the point.',
      'Doing it for 33 days expecting a magic deadline — there is no magic deadline. Manifestation is not a microwave; it is a garden.',
      'Writing it from scarcity ("I am no longer broke") — the unconscious hears "broke." Write from the having ("I am abundant; money flows").'
    ],
    the_deeper_truth: 'The 369 method works not because Tesla was right about the numbers, but because human nervous systems respond to ritual repetition spaced across the day. If you did 4-7-10, or 5-5-5, or 7-3-1, with the same intention, it would work too. The numbers are scaffolding. Your daily commitment is the substance. Two weeks of honest 369 outperforms two months of inconsistent 369 every time.',
    pair_with_chakra: 'Throat chakra — written word is voiced thought; the throat governs both.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Abundance Affirmations — daily structured affirmation pairs perfectly with structured writing.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine (manifestation classic) or clear quartz (amplifies any intention)',
    key_questions: [
      'Is my sentence written from the having, or from the lacking?',
      'Am I willing to do this for two weeks before judging the results?',
      'What action would I take today if I already had what I am writing about?'
    ]
  },
  {
    slug: 'scripting',
    name: 'Scripting',
    realm: 'writing',
    emoji: '📜',
    one_liner: 'Write your desired life as a journal entry from the future — present tense, sensory detail, as if it has already happened.',
    origin_note: 'Long predates the internet. Used by Napoleon Hill in Think and Grow Rich (1937) and by Joseph Murphy in The Power of Your Subconscious Mind. Modern TikTok scripting is the same practice with a viral name.',
    meaning: 'Scripting is the most literary of the manifestation methods — you write a journal entry as if you were yourself six months, one year, or three years from now, looking back on the life you wanted. You describe the bedroom you wake up in, the breakfast you make, the work you go to, the partner who texts you, the bank balance, the body, the friendships, the energy of an ordinary Tuesday. The point is not the writing — the point is that to write it convincingly, you have to *feel* it, and to feel it, your nervous system has to drop into the future state. That state is what manifests.',
    how_it_works: 'Scripting works through what neuroscientists call "future self-continuity" — the more vividly your nervous system can experience a future self, the more your present self acts in alignment with that future. People who write scripts make different daily decisions: they apply for the better job, they leave the wrong relationship, they save money differently. The script is not the magic. The decisions made by the person *who has felt the script* are the magic.',
    steps: [
      'Pick a date in the future — six months out, one year, three years. Write the date at the top of the page.',
      'Begin: "Today is an ordinary Tuesday in my life." Write a journal entry for that day from that future-self perspective. Present tense.',
      'Use sensory detail — what do you see when you wake? What do you smell? Who texts you first? What is the temperature of the room? What did breakfast taste like?',
      'Close with one line of gratitude — "I cannot believe I get to live this life." Re-read the script before sleep, slowly, until the feeling is in your body.'
    ],
    when_to_use: 'Best for whole-life manifestation rather than single-goal — career-and-relationship-and-home together, a season of life rather than a transaction. Especially powerful at major transitions (after a breakup, before a move, at a birthday) when the nervous system is already loose enough to imagine a different future.',
    common_mistakes: [
      'Writing in future tense ("I will have...") — write in present tense ("I have..."). The unconscious does not parse "will."',
      'Listing achievements like a resume — write a *day*. Days are what we live; achievements are what we mark.',
      'Re-reading critically — do not edit, do not check for plausibility. The script is for your unconscious; your inner critic is not invited.'
    ],
    the_deeper_truth: 'Most people who script and "see no results" are not scripting wrong — they are scripting once and then returning to a daily nervous-system state that contradicts the script. The script tells the unconscious *where you are going*; the daily state tells the unconscious *where you actually live*. The work is to bring the daily state closer and closer to the scripted one — not just on paper but in posture, in voice, in the room you walk into and the people you text.',
    pair_with_chakra: 'Third eye — scripting is structured visualization; the third eye governs inner sight.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — to soften the body enough to drop into the scripted state.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Lapis lazuli (vision and clarity) or amethyst (heightens visualization)',
    key_questions: [
      'When I read my own script, can I *feel* it in my body — or am I reading it as a stranger?',
      'What in my daily routine right now contradicts the script?',
      'What is one thing my future self would do this week that I have been avoiding?'
    ]
  },
  {
    slug: 'pillow-method',
    name: 'Pillow Method',
    realm: 'ritual',
    emoji: '🛌',
    one_liner: 'Write your desire on a piece of paper, slip it under your pillow, and sleep with it — the unconscious does the work overnight.',
    origin_note: 'Folk magic dating back centuries (love spells, dream divination). Modernized through New Thought writers in the 20th century and went viral via TikTok manifestation creators.',
    meaning: 'The pillow method is the simplest of all the methods — you write your desire on a piece of paper before bed and place it under your pillow. The principle: sleep is when the unconscious mind processes, integrates, and rewires. By placing the written intention physically beneath your head, you create a small ritual of consecration — *this* is what I am asking my unconscious to work on tonight. It is not the paper that does anything. It is the consistency of the practice that signals to the unconscious: this matters.',
    how_it_works: 'Sleep neuroscience confirms what the practice intuited: sleep is when long-term memory consolidates, problems dissolve, and creative leaps happen. The pillow method does not magically pull your desire out of the universe — it directs your sleeping brain toward the work of integration. People who do the pillow method consistently often report dreams that contain literal solutions, unexpected ideas on waking, or shifts in emotional certainty about a goal that had felt impossible.',
    steps: [
      'On a small piece of paper, write your desire as a present-tense statement. Add "Thank you" at the end — gratitude collapses the gap between asking and having.',
      'Fold the paper three times — once for the body of the desire, once for its emotional truth, once for its release.',
      'Place it under your pillow before sleep. As your head touches the pillow, briefly visualize the desire as already real. Then let go.',
      'On waking, do not check the paper or rush to journal. Simply lie there for one minute and notice what is already different in your body. Repeat for a moon cycle (28 days).'
    ],
    when_to_use: 'Best for desires that have an emotional charge — love, healing, family reconciliation, creative breakthroughs. The pillow method works less well for cold transactional goals (a sum of money, a job title) and more powerfully for soul-level shifts.',
    common_mistakes: [
      'Forgetting to remove and replace the paper — write a fresh one weekly. Old paper accumulates spent intention.',
      'Checking obsessively for results during the day — the work is happening at night; trust the process.',
      'Multiple papers for multiple desires — one desire per pillow per cycle. The unconscious works best with focused energy.'
    ],
    the_deeper_truth: 'The pillow method is a contract with your sleeping self — you are saying "I trust the part of me that does its best work in the dark." Most adults have lost touch with that part. They want their conscious, daytime, controlling mind to do all the manifesting. The pillow method is a humble admission that the conscious mind is not the only intelligence in you — and the night-mind, the dream-mind, the body-mind have been waiting to be invited in.',
    pair_with_chakra: 'Crown chakra — sleep opens the crown; intention placed there reaches the highest octave.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Sleep — listen as you fall asleep with the paper beneath you.',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Amethyst (under pillow — classic dream-stone) or moonstone (for cycles and intuition)',
    key_questions: [
      'Am I willing to trust my sleeping self to do work I cannot consciously control?',
      'What is the desire underneath the desire — what would having this give me that I do not have now?',
      'Have I told my unconscious that this matters, or have I treated it as a side-project?'
    ]
  },
  {
    slug: 'whisper-method',
    name: 'Whisper Method',
    realm: 'spoken',
    emoji: '🤫',
    one_liner: 'Whisper your desire (often a desired action from a specific person) into their imagined ear three times before sleep. Controversial. Powerful for some.',
    origin_note: 'Modern TikTok-era technique with no clear single origin. Resembles medieval folk love-magic and older "directed dreaming" traditions. Highly debated for its ethical edges.',
    meaning: 'The whisper method asks you to lie in bed at night, close your eyes, imagine a specific person beside you, and whisper your desire (often: "you are calling me," "you are missing me," "you are coming back") into their imagined ear three times. Then release. Practitioners report the person reaching out within hours or days. Skeptics call it unethical (you are trying to influence another\'s free will) or coincidental. The practice is most effective when the desire reflects a *real* mutual emotional truth — not when you are trying to bend someone who has clearly, repeatedly chosen otherwise.',
    how_it_works: 'There are two competing explanations. The mystical one: thought is energy, and a focused thought directed at a person can reach them at the unconscious or telepathic level. The psychological one: the whisper method is mostly affecting *you* — it clarifies your own emotional state, shifts your nervous-system signal, and the result is that you behave differently around the person (or write the message you have been avoiding) and they respond to that. Both explanations point to the same outcome — but the second is more honest about who is being changed.',
    steps: [
      'Before sleep, lie in a dark quiet room. Close your eyes. Slow the breath.',
      'Picture the specific person beside you. See their face, the rise and fall of their breathing, the texture of their hair.',
      'In your imagination, lean in close to their ear and whisper the same sentence three times. Examples: "you are calling me," "you are softening," "you are coming home." Keep it simple, present-tense, kind.',
      'Release the image. Do not chase. Trust that whatever is meant to land has landed. Sleep.'
    ],
    when_to_use: 'Best for relationships where there is a real but stuck connection — a friend who has gone quiet, a family member who has hardened, an old love who is at the edge of returning. Worst for trying to control a person who has actively, recently set a clear boundary against you. That is not whisper — that is denial.',
    common_mistakes: [
      'Whispering coercive sentences ("you cannot live without me") — these usually backfire on the *whisperer*, deepening obsession rather than connection.',
      'Doing it nightly for months on the same disinterested person — at some point this is rumination dressed as ritual. Set a 7-night limit.',
      'Confusing whisper-method results with strategy — if they call after a week, you still have to show up as a healthy partner. The whisper does not do the relationship; you do.'
    ],
    the_deeper_truth: 'The whisper method works best when you whisper what is *already true beneath the surface*. If the person is genuinely missing you and just stuck in pride, the whisper softens both of you. If the person has truly moved on, the whisper will not move them — but it will, often painfully, move you toward acceptance. Treat this method as a clarifying mirror, not a command. The kindest version of this practice is whispering: "if this is meant for me, let it return; if not, let me let it go."',
    pair_with_chakra: 'Heart chakra — the whisper method only works ethically when the heart leads.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — to release the version of the practice that has tipped from longing into clinging.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (for the heart frequency) or rhodonite (for emotional release)',
    key_questions: [
      'Am I whispering to bring back a real mutual love, or to override their clear no?',
      'If they never respond, am I willing to let this go gracefully?',
      'What sentence would I whisper to *myself* tonight that I have been refusing to hear?'
    ]
  },
  {
    slug: '5x55-method',
    name: '5x55 Method',
    realm: 'writing',
    emoji: '✏️',
    one_liner: 'Write your desire 55 times for 5 days in a row. Five days of obsessive, focused repetition; the 55 number forces presence.',
    origin_note: 'Newer than 369 (popularized in the late 2010s through Instagram and YouTube manifestation creators). Sometimes attributed to numerology — 5 = change, doubled = accelerated change.',
    meaning: 'The 5x55 method is for people who want intensity, not patience. You write a single intention statement 55 times in a row, in one sitting, every day, for 5 consecutive days. By day 3 your hand hurts and you are bored — and that is when the work happens. Boredom is the threshold the conscious mind has to cross before the unconscious gets to drive. The 55 repetitions force you past the surface and into the deep place where belief actually changes.',
    how_it_works: 'Repetition fatigue is the active ingredient. The first 10 times you write a sentence, your conscious mind is engaged — checking the wording, judging the believability, comparing it to current reality. Around 25-35 you start to drift. By 40-55 your hand is on autopilot and your unconscious is the one absorbing the message. Five days of this stacks the imprint — by day 5, the sentence is wired. The reason this is more powerful than journaling once is the same reason a calligrapher\'s thousandth stroke is different from their first: depth comes from repetition, not from feeling.',
    steps: [
      'Pick ONE desire. Write it as a present-tense affirmation. Test it: does it feel just-out-of-reach but plausible? If it feels insanely distant, soften it. If it feels easy, raise it.',
      'In a dedicated journal, set a timer for 30-45 minutes. Write the sentence 55 times — slowly, neatly, *meaning* each one.',
      'Do the same thing for 5 consecutive days. Same sentence, same time of day if possible.',
      'On day 5, after the 55th line, write one paragraph of release: "I trust this is being arranged. Show me the next aligned step." Then close the journal and stop.'
    ],
    when_to_use: 'Best for one-shot intensity goals — an upcoming opportunity (interview, audition, pitch), a financial goal (a specific debt cleared, a specific sum saved), a one-month sprint. Less suited for slow-bake desires (lifelong love, long-term health) where consistency over months beats intensity over days.',
    common_mistakes: [
      'Skipping a day — the streak is part of the medicine. If you skip, restart from day 1.',
      'Writing it carelessly to get the count done — the count is meaningless without presence. Better to write 30 with attention than 55 on autopilot.',
      'Continuing past day 5 — stop. The message has been delivered. Continuing turns alignment into anxiety.'
    ],
    the_deeper_truth: 'Five days of focused 5x55 work is a contract with yourself: "I am willing to commit to this desire enough to be bored by it." Most desires that "do not manifest" never received this level of dedication. The universe responds to commitment, not to wishing. The 5x55 is one of the loudest commitments you can make in writing.',
    pair_with_chakra: 'Solar plexus — the will, the commitment to follow through, lives here.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance Affirmations — to amplify the structured-discipline frequency.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Tiger\'s eye (willpower) or pyrite (focused manifestation)',
    key_questions: [
      'Is my sentence aimed at one clear thing, or am I trying to manifest an entire life in one line?',
      'On day 3 when I am bored — will I keep the appointment with myself?',
      'What does my body do as I write line 50? That sensation is the doorway.'
    ]
  },
  {
    slug: 'two-cup-method',
    name: 'Two Cup Method',
    realm: 'ritual',
    emoji: '🥛',
    one_liner: 'Label one cup with your current reality, one with your desired reality, pour water from one to the other, drink. Reality-shift ritual.',
    origin_note: 'Emerged from the "shifting" community on TikTok and YouTube around 2020 — a subculture that practices conscious reality-shifting (e.g. into a desired-reality version of life). Distinct from older folk water-magic traditions.',
    meaning: 'The two cup method is the most embodied of the manifestation rituals. You take two glasses of water. On the first, you label "current reality" with what you no longer want (e.g. "broke," "alone," "sick"). On the second, you label "desired reality" with what you do want (e.g. "abundant," "loved," "vibrant"). You pour the water from cup A into cup B, watching the labels merge — and then you drink the water from cup B. The body literally absorbs the desired-reality water. The ritual is theatrical on purpose. The point is to give your nervous system a vivid, multi-sensory crossing point: you have *physically* moved your reality from one container to the other.',
    how_it_works: 'Embodied cognition research is clear that what we *do* with our bodies shapes what we believe more than what we *think*. The two cup method weaponizes this — by physically pouring and drinking, you give the unconscious a sensory anchor for the shift. It is the same logic as a wedding ring (a physical token for an emotional state) or burning a letter (a physical release for an emotional grief). Skeptics will call it placebo. Practitioners will say: yes, and placebo works.',
    steps: [
      'Take two clean drinking glasses. Fill the first with water. Tape a label that names your current reality (one or two words: "stuck," "anxious," "broke").',
      'On the second empty glass, tape a label naming your desired reality ("flowing," "calm," "abundant"). Stand in front of the two cups for a moment.',
      'With intention, pour the water from cup A into cup B. Watch the labels — feel the moment of crossing. Let yourself notice that the water has not changed; only its container has.',
      'Drink the water from cup B in one continuous draught. Then write down — in one line — what you noticed, felt, or saw. Repeat once a week or at threshold moments (full moon, new moon, birthday).'
    ],
    when_to_use: 'Best at threshold moments where you need a *visible* ritual to mark an internal shift — leaving a job, ending a relationship, entering a new chapter. Also powerful when you need an embodied anchor and writing-based methods feel too cerebral.',
    common_mistakes: [
      'Doing it skeptically while filming yourself — the ritual asks for sincerity; performance dilutes it.',
      'Using vague labels ("happiness" vs "sadness") — pick concrete one-word states. The unconscious wants specificity.',
      'Doing it daily — the ritual loses force through repetition. Treat it as a threshold practice, not a daily one.'
    ],
    the_deeper_truth: 'The two cup method is one of the few manifestation methods that gives your body a memorable moment. Most adults try to manifest entirely from the head — they read, they journal, they think. The body is the part that has not been invited to the practice. The two cup method puts *water in your hands* and *water in your mouth*. That is what makes it stick.',
    pair_with_chakra: 'Sacral chakra — water is the sacral element; the body\'s ability to flow lives here.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — to honor the release of the "current reality" container.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Aquamarine (water energy) or moonstone (for transitions)',
    key_questions: [
      'What am I ready to no longer be the holder of?',
      'What container am I now ready to drink from?',
      'When was the last time my *body* — not just my mind — was invited to a practice?'
    ]
  },
  {
    slug: '17-second-rule',
    name: '17-Second Rule',
    realm: 'energy',
    emoji: '⏱️',
    one_liner: 'Hold a pure positive thought for 17 seconds and another thought of equal frequency joins it; 68 seconds of pure thought equals manifestation in motion.',
    origin_note: 'From Esther Hicks / Abraham (channeled material), 1990s onward. The 17/68 numbers are part of the Abraham-Hicks teaching framework; the idea is that thought has momentum that compounds in 17-second blocks.',
    meaning: 'Abraham-Hicks teach that thoughts have momentum — a single positive thought that you can hold *purely* (without contradicting it with doubt) for 17 seconds attracts another thought of the same frequency. By 34 seconds, you have a flow. By 68 seconds (four 17-second blocks), you have what they call "manifestation in motion" — the thought has enough momentum that the universe begins arranging matching circumstances. The 17-second rule is the most subtle of the methods — there is no writing, no ritual, no performance. Just the discipline of holding a feeling-tone clean for one short minute.',
    how_it_works: 'Whether you accept the metaphysical framing or not, the practice is also good neuroscience. Holding a positive emotional state for 17+ seconds is enough to begin shifting the autonomic nervous system — heart rate variability rises, the body softens, the brain releases dopamine and serotonin. Those neurochemicals make you more open, more creative, and more likely to take aligned action in the next minute. The "manifestation" is the *next minute of your life*, lived from a different chemical state than the one you were in before.',
    steps: [
      'Sit or lie quietly. Pick a positive thought — gratitude for something specific, a good memory, a desired moment imagined in detail.',
      'Hold the thought purely for 17 seconds — no doubt, no "but," no checking. If a contradicting thought arises, gently restart the 17 count.',
      'When you reach 17, notice that the next matching thought arrives without effort. Let the thread continue. Aim for 34, then 68 seconds.',
      'After 68 seconds, do not try to "use" the state — just walk into your day from inside it. Notice what shifts in the next hour.'
    ],
    when_to_use: 'Best for emotional state-shifting in the moment (anxiety spike, before a difficult conversation, in a low mood) and as a daily 5-minute practice. Less suited for cold goal-setting where structure helps; this method rewards intuitive feeling.',
    common_mistakes: [
      'Trying to "force" purity of thought — the more you fight the contradicting thought, the louder it gets. Soft attention beats hard attention.',
      'Picking a desire that feels too distant ("I am a millionaire") — you will not be able to hold it pure. Pick something close enough to feel real.',
      'Watching the clock — the 17 seconds is approximate; the *feeling* is the metric, not the timer.'
    ],
    the_deeper_truth: 'The 17-second rule is a daily reminder that your nervous-system state in this very minute is what is constructing the next minute. Most adults walk through their day in a low-frequency baseline — slightly anxious, slightly resentful, slightly bored — and wonder why their reality matches. The 17-second rule is one minute of conscious correction. Done daily, it raises the baseline. The baseline is the manifestation.',
    pair_with_chakra: 'Heart chakra — pure positive feeling lives in the heart, not the head.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — to settle the body into the receptive state needed for sustained pure thought.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Rose quartz (heart-frequency anchor) or selenite (for clearing competing thoughts)',
    key_questions: [
      'What positive thought can I hold purely *right now* for 17 seconds without contradicting it?',
      'What is my current baseline frequency — the feeling-tone I default to between events?',
      'If my next minute were lived from this clean state, what would I do differently?'
    ]
  },
  {
    slug: 'vision-board',
    name: 'Vision Board',
    realm: 'ritual',
    emoji: '🖼️',
    one_liner: 'Make a visual collage of the life you are calling in — images, words, textures. Keep it where your eyes find it daily.',
    origin_note: 'Older than the term — collaging desires is older than print culture. Made famous by The Secret (2006) and the prosperity-coaching world. The 21st century version is often digital (Pinterest boards, phone wallpapers).',
    meaning: 'A vision board is a one-page visual representation of the life you are calling in. Magazine cuttings, photos, words, fabric scraps, screen-printed images, drawings — anything that visually represents the season you are moving toward. The point is not the artistic merit of the board. The point is that the board lives in your daily eyeline (above the desk, on the bedroom wall, as your phone wallpaper) so that your unconscious mind sees it dozens of times per day. Your unconscious works in images, not sentences. The vision board feeds it the right images.',
    how_it_works: 'Visualization research is unambiguous: athletes who imagine their performance perform better; cancer patients who visualize healing report better outcomes; people who imagine the life they want make different daily decisions. The vision board automates this — instead of having to *remember* to visualize, you simply look up. The board does the reminding. The reminding shifts the daily decisions. The daily decisions shift the life.',
    steps: [
      'Gather raw material — magazines, printouts, fabric, ribbon, words written by hand. Spend at least an hour on this; the gathering is part of the magic.',
      'Pick a substrate (corkboard, large sheet of paper, framed canvas). Lay everything out before you glue — let the composition emerge.',
      'Include images for ALL the major life domains, not just the obvious one — health, love, work, home, money, friendship, creativity, spirit. A board that is all about money is energetically thin.',
      'Place the finished board where your eyes naturally land — above the desk, beside the bathroom mirror, beside the bed. Refresh it every 6 months.'
    ],
    when_to_use: 'Best at the start of a new chapter (new year, birthday, after a major loss or move). Also powerful when you have been languishing — a board reorients the unconscious by giving it new images to chew on.',
    common_mistakes: [
      'Making it once and forgetting it — a board you never look at is just paper. The looking is the practice.',
      'Filling it with luxury imagery you do not actually want — Bali villas, designer cars — when your real desire is something quieter. Be honest about what your soul is actually calling.',
      'No body imagery — many vision boards forget the physical self. Include images of how you want to *feel in your body*, not just what you want to own.'
    ],
    the_deeper_truth: 'A vision board is your unconscious\'s daily breakfast. What it eats every morning is what it becomes. Most people feed their unconscious news headlines, social media, and mirror-criticism. A vision board interrupts that diet. It says: today, my unconscious will see *this* — the version of my life I am building. After enough mornings of seeing the board, the unconscious starts behaving as if it is already that life. That behavior is the manifestation.',
    pair_with_chakra: 'Third eye — the seat of inner vision and visualization.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Abundance Affirmations — listen daily while looking at the board for double encoding.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Lapis lazuli (vision) or labradorite (magic of the imagination)',
    key_questions: [
      'Does my board include all of life or only the obvious wants?',
      'Where in my home does my eye naturally land — and is the board there?',
      'When was the last time I refreshed it? Has my soul moved on while the board stayed still?'
    ]
  },
  {
    slug: 'letter-to-universe',
    name: 'Letter to the Universe',
    realm: 'writing',
    emoji: '💌',
    one_liner: 'Write a thank-you letter to the universe (or God, or your higher self) for the manifestation as if it has already arrived.',
    origin_note: 'Spiritual writing tradition (gratitude journaling, devotional letter-writing) crossed with modern manifestation practice. Promoted heavily by Pam Grout (E-Squared) and Gabby Bernstein among others.',
    meaning: 'A letter to the universe is the most relational of the manifestation methods — instead of writing for yourself, you write *to* something larger than yourself, in gratitude for a desire that has already been granted. The voice is warm, intimate, conversational. "Dear universe, thank you for the new home — I cannot believe how perfect the morning light is in the kitchen." The genre is thank-you letter, not wish list. The change of voice is the medicine: gratitude collapses the gap between asking and having, and writing as if it has already arrived puts your nervous system in the receiving state, not the wanting state.',
    how_it_works: 'Wanting and having are different nervous-system states. Wanting is a forward-leaning, deficit-tracking state — your body knows you do not yet have it. Having is a settled, gratitude-flavored state — your body knows the thing is already yours. Most manifestation fails not because the desire is wrong but because the practitioner stays in the wanting state. The letter-to-universe trick is to spend 20 minutes practicing the *having* state in the only place no one judges you for it: the page.',
    steps: [
      'Open a fresh page. Date it 1-3 months in the future. Write "Dear universe," (or "Dear God," or "Dear higher self," — whatever language is honest for you).',
      'Begin: "Thank you for...". Describe the desire as if it has already arrived. Be specific — the texture, the smell, the moment you noticed it had landed.',
      'Include the unexpected gifts that came with the manifestation — friendships, lessons, expansions you did not even ask for. The universe always over-delivers; honor that.',
      'Sign your name. Read the letter aloud once, slowly. Then either burn it (release ritual) or fold it and tuck it inside a book you love.'
    ],
    when_to_use: 'Best for soul-level desires — love, vocation, healing, family — where the warmth of the genre matches the warmth of the desire. Also powerful at moments when ordinary desire-writing has become rote and you need a fresh emotional voice.',
    common_mistakes: [
      'Writing it like a transaction ("Thank you for the $50K, signed, please deliver in 30 days") — the universe is not amazon. Write to the universe like you would write to your most-loved friend.',
      'Forgetting to include unexpected gifts — most lives that change include side-blessings the asker did not foresee. Leave room for those.',
      'Writing it once and forgetting — re-read the letter weekly to keep the having-state alive in your nervous system.'
    ],
    the_deeper_truth: 'The letter-to-universe practice changes who you are praying to. Most manifestation methods position you as the one who must do all the work. The letter positions you as the one being held by something larger — and that shift, from "I am the source" to "I am being met," is often what unblocks years of stuckness. Receiving requires admitting there is something to receive *from*. The letter is that admission, in writing.',
    pair_with_chakra: 'Crown chakra — the connection point between the personal self and the larger field.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — to soften the body into the receiving state.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Selenite (connection to the higher) or angelite (gentle communion)',
    key_questions: [
      'Who or what am I writing to — and is that voice of source loving or punitive in my imagination?',
      'Can I write the unexpected gifts as well, or only the literal ask?',
      'Am I in the wanting or the having state right now — and which one is my nervous system more familiar with?'
    ]
  },
  {
    slug: 'mirror-method',
    name: 'Mirror Method',
    realm: 'spoken',
    emoji: '🪞',
    one_liner: 'Stand in front of a mirror, look yourself in the eyes, and speak your desire as a present-tense affirmation. Embodied and brutal.',
    origin_note: 'Long predates the internet — Louise Hay built her healing teaching around mirror work in the 1980s. Older roots in religious confession, devotional speech, and theatrical practice. Modern TikTok mirror manifestation is the same practice with a faster format.',
    meaning: 'The mirror method asks you to look at yourself — really look — and speak your desire aloud, in the first person, present tense, while holding your own gaze. "I am loved." "I am abundant." "I am healing." It is the most confronting of the methods because the eyes do not lie. You cannot fake the conviction; the mirror sees through. Many people cry the first few times they try it. That crying is the work — it is the gap between the self that has been carrying old beliefs and the self that is being asked to claim a new truth. The crying is the bridge being built.',
    how_it_works: 'Eye contact with oneself activates the same neural circuits as eye contact with another — the fusiform face area, the empathy networks, the social-bond chemistry. When you speak a positive truth into your own eyes, you are giving yourself the kind of recognition that humans usually need from others. Over time, the mirror practice rewires the inner critic into an inner ally. Louise Hay\'s entire body of work was built on the observation that people who could not look themselves in the eye and say "I love you" were people whose lives reflected exactly that withholding back to them.',
    steps: [
      'Stand in front of a mirror in a private room. Close enough to see your eyes clearly. Take three breaths to settle.',
      'Look into your own eyes — both eyes, not jumping back and forth. Hold the gaze.',
      'Speak the affirmation aloud, slowly, with feeling. "I am [...]." Repeat 3-5 times. Notice the resistance, the tearing, the smile that breaks through.',
      'Close with one sentence of self-blessing: "I am here. I am safe. I am held by my own love." Walk away without checking the mirror again.'
    ],
    when_to_use: 'Best for self-relationship desires — self-love, healing the inner critic, body image, confidence, voice. Also powerful as a daily preparation before scary thresholds (interview, hard conversation, performance). Less suited for transactional manifestation; the mirror method is fundamentally about relationship with self.',
    common_mistakes: [
      'Doing it for one minute and giving up — the first 30 seconds are awkward; the breakthrough is at 60-120 seconds. Stay through the resistance.',
      'Speaking what you wish were true with no body conviction — the mirror sees the gap. Choose an affirmation you can say *with at least 70% honesty*; raise the bar from there.',
      'Doing it in a dirty bathroom with bad lighting — environment matters. Light a candle. Make it sacred. The body responds to the staging.'
    ],
    the_deeper_truth: 'The mirror method is the loneliest of the manifestation methods — there is no audience, no journal, no ritual object. Just you and your own eyes. That is exactly its power. Most manifestation fails because somewhere underneath the desire is a self-image that says "I don\'t deserve this." The mirror is where you confront and rewrite that self-image. When you can finally look yourself in the eye and say *I love you* and mean it, you have already manifested the foundation that everything else gets built on. Without that foundation, nothing manifested stays.',
    pair_with_chakra: 'Heart chakra — to meet yourself with love rather than judgement.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — soften the body before the mirror, not after.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Rose quartz (self-love) or rhodonite (forgiveness of self)',
    key_questions: [
      'Can I look myself in the eye for 60 seconds without flinching?',
      'What sentence is my body refusing to let me say to myself yet?',
      'If I could believe what the mirror is asking me to believe, what would change in my next 24 hours?'
    ]
  }
]

export const MANIFESTATION_SLUGS = MANIFESTATION_METHODS.map((m) => m.slug)
const METHOD_BY_SLUG: Record<string, ManifestationMethod> = Object.fromEntries(
  MANIFESTATION_METHODS.map((m) => [m.slug, m])
)

export function isManifestationSlug(s: string): boolean {
  return s in METHOD_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Realm-tinted gradient: writing=indigo, spoken=coral, ritual=green, energy=violet.
const REALM_ACCENT: Record<string, { c1: string; c2: string }> = {
  writing: { c1: '#5a6cb8', c2: '#2c3a82' },
  spoken: { c1: '#d68a5a', c2: '#a05230' },
  ritual: { c1: '#5aa069', c2: '#2c5e3a' },
  energy: { c1: '#9a5ac6', c2: '#5a2c84' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function manifestationPageHTML(slug: string): string {
  const m = METHOD_BY_SLUG[slug]
  if (!m) return ''
  const accent = REALM_ACCENT[m.realm] || { c1: '#888', c2: '#444' }
  const readingHref = `/gab44/reading?ref=manifest-${slug}`

  const title = `${escapeHtml(m.name)} — How It Works, Step-by-Step, Common Mistakes · gab44 ✨`
  const description = `What the ${m.name} is, how it actually works, the step-by-step practice, when to use it, common mistakes, and the deeper truth most teachers don't say. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Manifestation methods', item: `${SITE_URL}/gab44/manifestation` },
          { '@type': 'ListItem', position: 3, name: m.name, item: `${SITE_URL}/gab44/manifestation/${slug}` }
        ]
      },
      {
        '@type': 'HowTo',
        name: `${m.name}: how to practice it`,
        description: m.one_liner,
        step: m.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: `Step ${i + 1}`,
          text: s
        }))
      },
      {
        '@type': 'Article',
        headline: `${m.name}: how it works, step-by-step, and the deeper truth`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/manifestation/${slug}`,
        about: `${m.name}, manifestation method, law of attraction practice`
      }
    ]
  })

  const otherMethodsHtml = MANIFESTATION_METHODS.filter((q) => q.slug !== slug).map((q) => {
    const acc = REALM_ACCENT[q.realm] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/manifestation/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/manifestation/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/manifestation/${slug}" />
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
  .realm-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .origin { font-size: 13px; color: var(--fg-muted); margin: 0 0 24px; padding: 10px 14px; border-left: 3px solid var(--c1);
    background: var(--bg-1); border-radius: 0 8px 8px 0; }
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
  .steps-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px;
    border-left: 4px solid var(--c1); margin: 8px 0; }
  .steps-card ol { margin: 0; padding-left: 22px; }
  .steps-card li { font-size: 15px; color: var(--fg); margin-bottom: 12px; line-height: 1.6; }
  .steps-card li:last-child { margin-bottom: 0; }
  .steps-card li::marker { color: var(--c1); font-weight: 700; }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); margin: 8px 0; }
  .ctx-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; margin: 8px 0; }
  .panel.shadow { border-left: 4px solid #d63d4d; }
  .panel.truth { border-left: 4px solid #5a6cb8; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel ul { margin: 0; padding-left: 18px; }
  .panel li { font-size: 14px; color: var(--fg); margin-bottom: 6px; line-height: 1.55; }
  .panel li:last-child { margin-bottom: 0; }
  .panel.truth p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
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
  .other-methods { margin: 36px 0 22px; }
  .other-methods h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .methods-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .methods-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 460px) { .methods-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/manifestation">all 10 methods</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ manifestation method</div>
    <span class="realm-pill">${escapeHtml(m.realm)} method</span>
    <h1><span class="sym">${m.emoji}</span>${escapeHtml(m.name)}</h1>
    <p class="sub">${escapeHtml(m.one_liner)}</p>
    <p class="origin"><strong>Origin:</strong> ${escapeHtml(m.origin_note)}</p>

    <article class="core-card">
      <span class="label">what it is</span>
      <p class="text">${escapeHtml(m.meaning)}</p>
    </article>

    <h2><span class="icon">⚡</span>how it actually works</h2>
    <p>${escapeHtml(m.how_it_works)}</p>

    <h2><span class="icon">🪜</span>step-by-step</h2>
    <div class="steps-card">
      <ol>
        <li>${escapeHtml(m.steps[0])}</li>
        <li>${escapeHtml(m.steps[1])}</li>
        <li>${escapeHtml(m.steps[2])}</li>
        <li>${escapeHtml(m.steps[3])}</li>
      </ol>
    </div>

    <h2><span class="icon">🎯</span>when to use it</h2>
    <div class="ctx-card">
      <p>${escapeHtml(m.when_to_use)}</p>
    </div>

    <h2><span class="icon">⚠️</span>common mistakes</h2>
    <div class="panel shadow">
      <h3>watch for these</h3>
      <ul>
        <li>${escapeHtml(m.common_mistakes[0])}</li>
        <li>${escapeHtml(m.common_mistakes[1])}</li>
        <li>${escapeHtml(m.common_mistakes[2])}</li>
      </ul>
    </div>

    <h2><span class="icon">🔍</span>the deeper truth</h2>
    <div class="panel truth">
      <h3>what most teachers don't say</h3>
      <p>${escapeHtml(m.the_deeper_truth)}</p>
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${m.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(m.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(m.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${m.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(m.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(m.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(m.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(m.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after the practice</h3>
      <ol>
        <li>${escapeHtml(m.key_questions[0])}</li>
        <li>${escapeHtml(m.key_questions[1])}</li>
        <li>${escapeHtml(m.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading that names what is actually blocking your manifestation</h2>
      <p>The ${m.name.toLowerCase()} works for some and stalls for others. A <strong>personal reading</strong> looks at *your* chart, *your* current season, and the specific energetic pattern your manifestation is trying to move through — and tells you what is actually in the way. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/manifestation">all 10 methods</a> · <a href="/gab44/chakras/${m.pair_with_chakra_slug}">${escapeHtml(m.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/gab44/numerology">numerology life path</a> · <a href="/healing/script/${m.pair_with_sound_slug}">${escapeHtml(m.pair_with_sound_slug.replace(/-/g, ' '))} audio</a>.
    </div>

    <section class="other-methods">
      <h3>other manifestation methods</h3>
      <div class="methods-grid">
        ${otherMethodsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function manifestationIndexHTML(): string {
  const cards = MANIFESTATION_METHODS.map((m) => {
    const accent = REALM_ACCENT[m.realm] || { c1: '#888', c2: '#444' }
    return `<a href="/gab44/manifestation/${m.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${m.emoji}</span>
        <span class="day">${escapeHtml(m.realm)}</span>
      </div>
      <div class="name">${escapeHtml(m.name)}</div>
      <div class="teaser">${escapeHtml(m.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Manifestation Methods — 369, Scripting, Pillow, Whisper, 5x55, Mirror & More · gab44 ✨</title>
<meta name="description" content="The 10 most popular manifestation methods explained: 369 method, scripting, pillow method, whisper method, 5x55, two cup, 17-second rule, vision board, letter to the universe, mirror method. How each one works, step-by-step, common mistakes, the deeper truth." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/manifestation" />
<meta property="og:title" content="Manifestation Methods — 10 Practices Explained · gab44" />
<meta property="og:description" content="369, scripting, pillow, whisper, 5x55, two cup, 17-second, vision board, letter, mirror. Hand-written, warm, honest about what works." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 720px; }
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
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
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
      <a href="/gab44/numerology">numerology</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>10 <span class="accent">manifestation methods</span> — what works, what doesn\'t.</h1>
    <p class="sub">369, scripting, pillow, whisper, 5x55, two cup, 17-second rule, vision board, letter to the universe, mirror. Hand-written, warm, honest — including the deeper truth most TikTok teachers leave out.</p>

    <div class="intro">
      <h3>How to read this page</h3>
      <p><strong>The methods are sorted by realm</strong>, not by popularity. Writing methods (369, scripting, 5x55, letter) work the conscious-to-unconscious bridge through repetition. Spoken methods (whisper, mirror) work through voice and direct address. Ritual methods (pillow, two cup, vision board) work through the body and physical objects. Energy methods (17-second rule) work through pure feeling-tone. Pick the realm that matches the part of you most ready to be invited in.</p>
      <p><strong>None of these methods is "the right one."</strong> What works for one nervous system stalls another. The honest truth: the method matters less than the consistency, and the consistency matters less than the *belief that you are worthy of receiving*. That belief is what most adults are actually working on when they pick up a manifestation practice — even if they call it "wanting more money" or "wanting love."</p>
      <p><strong>This page is the methods in general.</strong> A $9 personal reading looks at *your* chart and *your* current season and tells you which method is actually right for you right now — and what specifically is in the way of your manifestation landing.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Tried the methods, still nothing landing? There\'s usually one specific block.</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the specific energetic pattern, soul-contract, or chart placement that is actually in the way — and which method (or which deeper inner work) will move it. <a href="/gab44/reading?ref=manifest-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
