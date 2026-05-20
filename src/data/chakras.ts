// Chakras SEO funnel — /gab44/chakras (index) + /gab44/chakras/{slug} (7 chakra
// pages: root, sacral, solar-plexus, heart, throat, third-eye, crown). Targets
// very-high-volume evergreen spiritual keywords: "root chakra healing",
// "sacral chakra meaning", "third eye chakra opening", "heart chakra blocked",
// "crown chakra signs", "throat chakra affirmations", "chakra colors meaning".
// Distinct keyword cluster from astrology — independent search audience.
//
// The ONLY revenue surface (besides /gab44/{sign}/crystals) that funnels into
// BOTH lanes: each chakra page links to /healing audio (Phase 1A affiliate)
// AND to /gab44/reading?ref=chakra-{slug} ($9 Phase 1D). Each page also
// cross-links to the matching crystal kit and life-path/zodiac association.
// Zero LLM cost — content baked into this module.

import { SITE_URL } from '@/lib/identity'

export interface ChakraProfile {
  slug: string
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7
  sanskrit: string         // 'Muladhara', 'Svadhisthana', ...
  sanskrit_meaning: string // 'root support', 'one's own place', ...
  english: string          // 'Root Chakra', 'Sacral Chakra', ...
  emoji: string
  symbol: string           // ◯ traditional petal motif (text)
  color: string            // 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  color_hex_1: string      // accent gradient start
  color_hex_2: string      // accent gradient end
  location: string         // 'base of spine'
  element: string          // 'earth', 'water', 'fire', 'air', 'ether', 'light', 'thought'
  body_systems: string     // 'adrenals, legs, feet, lower spine'
  petals: string           // '4 petals' (traditional iconography)
  seed_sound: string       // 'LAM', 'VAM', 'RAM', 'YAM', 'HAM', 'OM/KSHAM', 'silence/AUM'
  governs: string          // one-line: what this chakra governs
  one_liner: string
  // Body sections (~600-700 words total)
  meaning: string          // big paragraph: what this chakra IS
  when_open: string        // signs of an open / balanced chakra
  when_blocked: string     // signs of imbalance
  what_blocks: string      // common life patterns that close it
  how_to_open: string      // practices to balance
  affirmations: [string, string, string, string] // 4 affirmations
  pair_with_crystal: string // 1-2 stones (cross-link to /gab44/crystals)
  pair_with_sound: string   // which /healing meditation pairs best
  pair_with_zodiac: string  // 2-3 signs naturally tied to this chakra
  pair_with_lifepath: string // 1-2 life path numbers tied to this chakra
  shadow: string            // shadow expression — over-active or hyper-blocked
  key_questions: [string, string, string]
}

export const CHAKRAS: ChakraProfile[] = [
  {
    slug: 'root',
    number: 1,
    sanskrit: 'Muladhara',
    sanskrit_meaning: 'root support',
    english: 'Root Chakra',
    emoji: '🟥',
    symbol: '◇',
    color: 'red',
    color_hex_1: '#d63d4d',
    color_hex_2: '#7a1a26',
    location: 'base of the spine, perineum',
    element: 'earth',
    body_systems: 'adrenals, legs, feet, lower spine, immune system, large intestine',
    petals: '4 petals',
    seed_sound: 'LAM',
    governs: 'safety, survival, belonging, the body itself',
    one_liner: 'The first one. The one that decides whether you feel safe to be here at all.',
    meaning: 'The Root Chakra is the foundation of the whole system — the energetic centre at the base of your spine that decides whether you feel safe to be in a body, on this earth, in this life. When the root is steady, you feel like you belong here: money, food, shelter, your own physical existence all feel like they are basically taken care of, even when life is hard. When the root is shaky, the rest of the system runs on fumes — you can do all the spiritual practice in the world, but if the body does not feel safe, the energy keeps leaking out the bottom. Root work is unsexy and slow: regular meals, regular sleep, contact with the actual ground, financial stability that does not depend on adrenaline. It is also the most generous work you can do for the rest of your life — every other chakra opens more easily when the root is held.',
    when_open: 'You feel at home in your body. You trust that your basic needs will be met. Money is a tool you use, not a tyrant you serve. You can rest. You belong somewhere — even if "somewhere" is just one room. Your nervous system can come down from high alert. You eat, sleep, move, and recover in roughly the rhythm of a body, not the rhythm of a deadline.',
    when_blocked: 'Chronic anxiety about money, food, safety, or housing — even when objectively things are fine. Disconnection from the body (you live in your head). Sleep problems. Lower-back pain, hip tension, leg/foot issues. A persistent feeling of not-belonging — that you are temporarily passing through and could be asked to leave at any moment. Workaholism that runs on fear, not love.',
    what_blocks: 'Early instability — moving a lot, financial precarity in childhood, parents who were emotionally absent or unable to provide a sense of safety. Trauma stored in the body. Long periods of nervous-system overdrive (chronic stress, hyper-vigilance). Spiritual bypassing — leaving the body in pursuit of the "higher" and forgetting the work has to be done with feet on the floor.',
    how_to_open: 'Walking on actual ground (grass, sand, dirt). Eating regularly, especially root vegetables and protein. Sleeping enough. Building one form of financial steadiness (an emergency fund, a paid bill, a pattern). Strength training. Slow, repetitive, weight-bearing movement. Ritual contact with home — making the bed, lighting a candle, the mug you use every morning. Breathwork that slows the exhale longer than the inhale.',
    affirmations: [
      'I am safe in my body. I am safe on this earth.',
      'I belong here. My existence is not negotiable.',
      'I have what I need today, and I trust I will have what I need tomorrow.',
      'The ground is holding me. I can let it.'
    ],
    pair_with_crystal: 'Red jasper (steady, grounding) or hematite (anchoring) — see /gab44/crystals',
    pair_with_sound: 'The Deep Healing Meditation pairs naturally — slow body scan, return to the floor.',
    pair_with_zodiac: 'Taurus, Capricorn, Virgo — the earth signs naturally hold root energy',
    pair_with_lifepath: 'Life path 4 (the builder) — rooted, structural, patient',
    shadow: 'Over-active root: hoarding, control, fear of change, materialism without joy. Under-active root: dissociation, chronic instability, inability to rest, the body treated as an inconvenience.',
    key_questions: [
      'Where in my life do I not feel safe to take up space?',
      'What does my body need that I have been refusing to give it?',
      'If I trusted that I belonged here, what would I stop doing?'
    ]
  },
  {
    slug: 'sacral',
    number: 2,
    sanskrit: 'Svadhisthana',
    sanskrit_meaning: "one's own place",
    english: 'Sacral Chakra',
    emoji: '🟧',
    symbol: '◐',
    color: 'orange',
    color_hex_1: '#ff8a4d',
    color_hex_2: '#c93a22',
    location: 'lower belly, just below the navel',
    element: 'water',
    body_systems: 'reproductive organs, kidneys, bladder, sacrum, hips, lower back',
    petals: '6 petals',
    seed_sound: 'VAM',
    governs: 'emotion, pleasure, creativity, sexuality, flow',
    one_liner: 'The juicy one. The place where pleasure, creativity, and feeling actually live.',
    meaning: 'The Sacral Chakra is the energetic centre of feeling, pleasure, creativity, and sexuality — the place where life becomes more than survival and starts to be enjoyed. It is water-element, which means it is meant to flow: emotions move through, creative impulses arrive and depart, the body knows what it likes and is allowed to say so. A healthy sacral chakra feels like a body that has not been numbed out — you can actually taste your food, you actually want to make things, you can be intimate without panic, you can grieve without drowning. A blocked sacral chakra is the cost of cultures and childhoods that punished feeling: you become good at functioning but bad at enjoying, productive but dry, technically alive but quietly bored.',
    when_open: 'You feel things and let them move. You make things — even small things — for the joy of making. Pleasure does not feel dangerous or shameful. Sexuality feels like a part of you, not a part of you that needs to be hidden or managed. You can move through grief, joy, anger, longing without any of them taking you under. You laugh easily. You like your own body.',
    when_blocked: 'Numbness — the day passes and you don\'t remember feeling anything. Creative block. Sexual shutdown or sexual addiction (both are sacral imbalances). Hip pain, lower-back pain, menstrual problems, recurring UTIs or reproductive issues. Difficulty receiving pleasure (you can give but you can\'t receive). Emotional reactivity that floods (water out of its channel).',
    what_blocks: 'Childhoods where emotion was punished, where pleasure was dangerous, where the body was treated as suspect. Sexual shame, sexual trauma, religious shame around the body. Cultures that prize productivity over enjoyment. Chronic over-work that has trained you to ignore what your body wants. Dissociation as a survival strategy.',
    how_to_open: 'Move your hips — dance, hip openers in yoga, walking with hip rotation. Make something for no reason: bake, draw, sing in the car. Take long baths, swim, drink enough water. Eat foods you actually like. Notice pleasure when it happens — sun on skin, the first sip of coffee, a cat on your lap. Gently rebuild a relationship with your own body through touch that is not about producing anything.',
    affirmations: [
      'I am allowed to feel what I feel.',
      'My pleasure is sacred. My body is not a problem.',
      'Creativity flows through me. I do not have to force it.',
      'I can want what I want without apology.'
    ],
    pair_with_crystal: 'Carnelian (creative spark) or moonstone (cyclic flow) — see /gab44/crystals',
    pair_with_sound: 'The Letting Go Meditation — water imagery, releasing what you have been holding.',
    pair_with_zodiac: 'Cancer, Scorpio, Pisces — the water signs are native sacral territory',
    pair_with_lifepath: 'Life path 3 (the artist) and life path 6 (the lover/caretaker)',
    shadow: 'Over-active sacral: emotional flooding, addiction to intensity, sexuality used to fill an emptiness. Under-active sacral: numbness, joylessness, "I don\'t know what I want", creative paralysis.',
    key_questions: [
      'When did I learn that what I feel was inconvenient?',
      'What would I make right now if I knew nobody would judge it?',
      'What kind of pleasure have I been quietly refusing myself?'
    ]
  },
  {
    slug: 'solar-plexus',
    number: 3,
    sanskrit: 'Manipura',
    sanskrit_meaning: 'city of jewels',
    english: 'Solar Plexus Chakra',
    emoji: '🟨',
    symbol: '☀',
    color: 'yellow',
    color_hex_1: '#f4c542',
    color_hex_2: '#b88a1a',
    location: 'upper belly, between the navel and the breastbone',
    element: 'fire',
    body_systems: 'digestive organs, pancreas, liver, gallbladder, adrenals, mid-back',
    petals: '10 petals',
    seed_sound: 'RAM',
    governs: 'will, identity, personal power, confidence, action',
    one_liner: 'Your "yes". Your "no". The fire that says I am, and means it.',
    meaning: 'The Solar Plexus Chakra is the energetic centre of personal power — your will, your sense of identity, your ability to act in the world as yourself. It is fire-element, which means it is meant to burn: you have a clear "yes", you have a clear "no", you can take a stand for what matters to you, you can disappoint people without losing yourself. A healthy solar plexus feels like having an inner adult who knows who they are and is willing to act on it. A wounded solar plexus is the legacy of every "be small, be quiet, don\'t take up space" message you absorbed as a child — you become deferent, agreeable, and quietly furious about it.',
    when_open: 'You can say yes when you mean yes and no when you mean no. You disappoint people without spinning. You make decisions and stand by them. Confidence feels like a quiet ground, not a performance. You can take action without first needing permission. You take responsibility for your life — not in a punishing way, but in a "this is mine" way. Your digestion is steady (the gut and the solar plexus are deeply linked).',
    when_blocked: 'Chronic people-pleasing. Difficulty saying no. Decision-paralysis. Low self-trust. Low-grade chronic anger or resentment that has nowhere to go. Digestive problems — IBS, ulcers, acid reflux, blood sugar issues. Workaholism that compensates for shaky self-worth. Or the opposite — the over-active version: domineering, controlling, the bully (false fire compensating for a hollow core).',
    what_blocks: 'Childhoods where having a will was dangerous — where saying "no" was punished, where having opinions was met with disapproval, where confidence in a child was treated as a threat. Public shame in formative years. Jobs and relationships that required you to suppress yourself for survival. The "I don\'t want to be difficult" trap.',
    how_to_open: 'Practice small noes that don\'t cost much, then bigger ones. Set tiny boundaries and keep them. Move your core — sun salutations, planks, anything that fires up the belly. Eat warming, well-spiced food (fire fed by fire). Sit in actual sunlight. Make a decision quickly, on purpose, without re-litigating it. Take small actions that affirm "I exist and I am allowed to take up space."',
    affirmations: [
      'I have the right to be myself.',
      'My yes is my yes. My no is my no.',
      'I am allowed to take up space.',
      'I trust my own decisions.'
    ],
    pair_with_crystal: 'Citrine (golden confidence) or tiger\'s eye (focused action) — see /gab44/crystals',
    pair_with_sound: 'The Abundance Affirmations — direct, declarative, fire-aligned.',
    pair_with_zodiac: 'Aries, Leo, Sagittarius — the fire signs are native solar-plexus territory',
    pair_with_lifepath: 'Life path 1 (the leader) and life path 8 (the executive)',
    shadow: 'Over-active: domineering, controlling, the inflated ego that runs on insecurity. Under-active: people-pleasing, decision paralysis, the "I don\'t know what I want" that is really "I am not allowed to want."',
    key_questions: [
      'Where in my life have I traded my yes/no for someone else\'s comfort?',
      'What action have I been postponing because I\'m waiting for permission?',
      'If I let my own light shine at full strength, who would object — and is their objection mine to carry?'
    ]
  },
  {
    slug: 'heart',
    number: 4,
    sanskrit: 'Anahata',
    sanskrit_meaning: 'unstruck',
    english: 'Heart Chakra',
    emoji: '💚',
    symbol: '✦',
    color: 'green',
    color_hex_1: '#2e9e6a',
    color_hex_2: '#1a5e3e',
    location: 'centre of the chest',
    element: 'air',
    body_systems: 'heart, lungs, thymus, circulatory system, upper back, arms, hands',
    petals: '12 petals',
    seed_sound: 'YAM',
    governs: 'love, compassion, connection, grief, the bridge between body and spirit',
    one_liner: 'The bridge. Where the lower three chakras (body) meet the upper three (spirit).',
    meaning: 'The Heart Chakra is the bridge of the system — sitting at the centre, it connects the lower three chakras (body, emotion, will) with the upper three (voice, vision, spirit). The Sanskrit name *Anahata* means "unstruck" — the part of you that has not been wounded, even though life keeps trying. Heart energy is love, but not the Hallmark version: it includes grief, compassion, forgiveness, the willingness to be intimate with what is, the willingness to remain open even after disappointment. A healthy heart chakra feels like a chest that does not have to clench to protect itself. A wounded heart chakra is the residue of every betrayal, abandonment, or grief that you had to armour against — and the work, gently, is to soften that armour without going back to being defenseless.',
    when_open: 'You can love and be loved. You can grieve without shutting down. You can let people in and let them go without becoming bitter. You feel connection — to people, to animals, to the moment, to whatever you call sacred. You can forgive — not in a way that erases what happened, but in a way that frees you. You breathe deeply. Your chest feels like a place that is open for business.',
    when_blocked: 'Armour. A clenched chest. A history of "I\'m fine" said while drowning. Difficulty receiving love (often more than giving). Bitterness, cynicism, the "I don\'t need anyone" stance. Grief that has been frozen for years. Chronic upper-back tension, shoulder pain, shallow breathing. Heart conditions, asthma, lung issues. Codependency (heart open in only one direction — outward, never inward).',
    what_blocks: 'Heart-break that was never grieved. Childhoods where love was conditional, where the giver of love also caused harm. Loss without ritual or witness. Caretaker conditioning ("I love by giving, never by receiving"). Cultural conditioning around toughness, especially for men. The decision — usually unconscious — that to feel less is safer.',
    how_to_open: 'Open the chest physically — backbends, doorway stretches, swimming, anything that lifts the breastbone. Breathe deeply — long full exhales. Spend time with animals. Receive a compliment without deflecting. Cry when you need to. Write a letter to someone you have lost (don\'t send it). Practice loving-kindness meditation. Sit with grief instead of fixing it. Forgive in the slow, real sense — over months, not in a single dramatic moment.',
    affirmations: [
      'I am loved. I am loving. I am loveable.',
      'My heart can stay open even when life is hard.',
      'I receive love as easily as I give it.',
      'I am safe to feel this.'
    ],
    pair_with_crystal: 'Rose quartz (the universal heart-opener) or green aventurine (gentle expansion) — see /gab44/crystals',
    pair_with_sound: 'The Letting Go Meditation pairs deeply — heart practice is grief practice.',
    pair_with_zodiac: 'Libra, Cancer, Pisces — the natural heart signs (Libra/relating, Cancer/care, Pisces/compassion)',
    pair_with_lifepath: 'Life path 2 (the diplomat) and life path 6 (the caretaker)',
    shadow: 'Over-active heart: codependency, loving from emptiness, "I love everyone" as a way to avoid loving anyone particular. Under-active: armour, cynicism, "I don\'t need anyone", the heart treated as a liability.',
    key_questions: [
      'What grief have I been carrying that has never had a place to land?',
      'Where in my life have I become harder than I actually want to be?',
      'What would change if I let myself be loved exactly as I am — not as the version of me I think people want?'
    ]
  },
  {
    slug: 'throat',
    number: 5,
    sanskrit: 'Vishuddha',
    sanskrit_meaning: 'especially pure',
    english: 'Throat Chakra',
    emoji: '🟦',
    symbol: '◯',
    color: 'blue',
    color_hex_1: '#7ec8e8',
    color_hex_2: '#2c6e9e',
    location: 'throat, base of the neck',
    element: 'ether (sound, space)',
    body_systems: 'throat, thyroid, neck, jaw, ears, mouth, shoulders',
    petals: '16 petals',
    seed_sound: 'HAM',
    governs: 'voice, truth, expression, listening, authenticity',
    one_liner: 'The bridge between what you know and what the world hears. Your real voice, used.',
    meaning: 'The Throat Chakra is the centre of authentic expression — the channel through which your inner truth becomes something the world can receive. *Vishuddha* means "especially pure", and the work of this chakra is purification: stripping away the trained voice, the polite voice, the people-pleasing voice, and finding the actual voice underneath. It governs not just speaking but listening — true expression includes the silence to receive. A healthy throat chakra means you can say the thing that scares you to say. A wounded throat chakra is the residue of every "shhh", every "be quiet", every time speaking truth cost you something — until your real voice retreated so far back you can no longer find it.',
    when_open: 'You can say what is true even when it is uncomfortable. Your inner voice and your outer voice match (you don\'t say one thing while feeling another). You listen as well as you speak. Creativity flows through your voice — singing, writing, speaking, teaching. You can stay silent without it being suppression — you choose your silences. You can ask for what you need.',
    when_blocked: 'Chronic throat clearing, sore throats, thyroid problems, jaw tension (TMJ). Difficulty speaking up. Voice that does not match the body (too-quiet, sing-song, perpetually deferential). Lying — including "small" lies of omission to keep the peace. Or the opposite: talking constantly, never letting silence in (over-active). A persistent sense that "what I really mean" can never quite be said.',
    what_blocks: 'Childhoods where speaking up was punished, where opinions were dangerous, where children were "seen and not heard". Public humiliation around your voice (a teacher who mocked you, a family that laughed at the wrong thing). Creative criticism that froze the voice. Long periods of having to lie for survival. Cultures that prize politeness over honesty.',
    how_to_open: 'Sing in the car. Hum. Chant. Read out loud. Practice saying small true things to yourself first ("I don\'t actually want to go") before saying them to others. Journal — the throat\'s cousin practice. Stretch the neck and jaw. Drink water (the throat hates dryness). Try one conversation a day where you say exactly the truer version of what you usually say. Listen — really listen — to one person without preparing your response.',
    affirmations: [
      'My voice is welcome. My voice is true.',
      'I speak with kindness and with honesty.',
      'I listen as deeply as I speak.',
      'What I have to say matters.'
    ],
    pair_with_crystal: 'Lapis lazuli (truth-stone) or aquamarine (calm clear voice) — see /gab44/crystals',
    pair_with_sound: 'The Anxiety Relief Meditation — paced breath calms the throat and unlocks the voice.',
    pair_with_zodiac: 'Gemini (the messenger), Taurus (rules the throat in astrology), Sagittarius (the truth-teller)',
    pair_with_lifepath: 'Life path 3 (the communicator) and life path 5 (the messenger)',
    shadow: 'Over-active throat: talking over others, performing instead of expressing, weaponized words. Under-active: chronic silencing, can\'t say what you actually mean, voice that is technically present but never lands.',
    key_questions: [
      'What is the truth I have not said out loud yet — even to myself?',
      'Whose voice am I using when I speak — mine, or someone I learned to please?',
      'If I trusted that my voice was welcome, what would I say differently this week?'
    ]
  },
  {
    slug: 'third-eye',
    number: 6,
    sanskrit: 'Ajna',
    sanskrit_meaning: 'command, perceive',
    english: 'Third Eye Chakra',
    emoji: '🟪',
    symbol: '✶',
    color: 'indigo',
    color_hex_1: '#6943e0',
    color_hex_2: '#3a1e80',
    location: 'centre of the forehead, between the brows',
    element: 'light',
    body_systems: 'pituitary, pineal, eyes, brain, sinuses, central nervous system',
    petals: '2 petals',
    seed_sound: 'OM (or KSHAM)',
    governs: 'intuition, insight, vision, imagination, the inner knowing',
    one_liner: 'The inner sight. The part of you that knows things before they have proof.',
    meaning: 'The Third Eye Chakra is the seat of intuition, inner sight, and the kind of knowing that arrives without arguments. It governs the imagination, dreams, perception, and the felt sense that life has a pattern even when the pattern is not visible. *Ajna* means "to perceive" or "to command" — and these are the same thing in third-eye work: to see clearly is to be able to act with clarity. A healthy third eye means you can trust the small voice of intuition, you can see possibility, you can step back from a situation and read it. A blocked third eye is the cost of cultures that prize evidence over knowing — you become very logical and very flat, technically smart but functionally lost. The work is not to abandon logic, but to give intuition a seat at the table again.',
    when_open: 'You trust your gut. You sense things before you have evidence and you don\'t over-rule that sensing. You dream vividly and remember at least some of them. You can imagine futures and possibilities easily. Reading a room comes naturally — you know who is comfortable and who is not, even when nobody is saying anything. You see patterns in your own life. You can sit in stillness without panicking.',
    when_blocked: 'Over-thinking. Trapped in the head. Chronic doubt, including doubt about your own knowing. Difficulty making decisions because there is "not enough information" — there is never enough. Headaches, sinus problems, eye strain, brain fog, sleep without dreams. Or the over-active version — fantasy, magical thinking, escaping into imagination instead of meeting reality.',
    what_blocks: 'Cultures and educations that punish intuitive knowing ("how do you KNOW that?"). Childhoods where being perceptive about adult emotions was unsafe (you learned to un-see). Chronic stress (the third eye needs spaciousness). Constant input — phones, screens, noise — that crowds out the inner channel. Spiritual traditions that taught you to distrust your own perception in favour of external authority.',
    how_to_open: 'Sit in stillness, daily, even briefly. Reduce input — quiet, dim light, fewer screens before bed. Keep a dream journal. Trust one small intuitive nudge a day and follow it. Spend time in nature without your phone. Visualize — the third eye is exercised by imagining. Eye-rest practices (palming). Limit caffeine if intuition feels jittery instead of clear. Practice sitting with not-knowing as a posture, not a problem.',
    affirmations: [
      'I trust what I know, even when I cannot prove it yet.',
      'I am allowed to see clearly.',
      'My intuition is a teacher, not an inconvenience.',
      'I see what is here. I see what is becoming.'
    ],
    pair_with_crystal: 'Amethyst (the third-eye stone) or lapis lazuli (vision and truth) — see /gab44/crystals',
    pair_with_sound: 'The Deep Healing Meditation — the slowing-down it offers is third-eye nutrition.',
    pair_with_zodiac: 'Pisces, Scorpio, Cancer (the intuitive water signs); Aquarius (the visionary)',
    pair_with_lifepath: 'Life path 7 (the seeker) and life path 11 (the master visionary)',
    shadow: 'Over-active third eye: fantasy, ungrounded mysticism, "seeing" things that are projections. Under-active: pure logic, denial of intuition, cynicism about anything that can\'t be measured.',
    key_questions: [
      'What have I been knowing for a while that I have not let myself fully see?',
      'Where has logic been overruling a clear inner signal?',
      'If I gave my intuition a vote in my decisions, what would change this week?'
    ]
  },
  {
    slug: 'crown',
    number: 7,
    sanskrit: 'Sahasrara',
    sanskrit_meaning: 'thousand-petalled',
    english: 'Crown Chakra',
    emoji: '🟪',
    symbol: '✺',
    color: 'violet',
    color_hex_1: '#c4308a',
    color_hex_2: '#5a1854',
    location: 'top of the head (and just above)',
    element: 'thought, consciousness, the beyond',
    body_systems: 'brain, central nervous system, pineal, the whole-body energy field',
    petals: '1,000 petals (symbolic of the limitless)',
    seed_sound: 'silence (or AUM)',
    governs: 'connection to the larger pattern — the divine, the soul, the whole',
    one_liner: 'The doorway up. Where you stop being just yourself and remember you are part of something bigger.',
    meaning: 'The Crown Chakra is the doorway to whatever you call the larger pattern — the divine, the source, the field, the soul, the universe. *Sahasrara* means "thousand-petalled" — symbolic of the limitless, of a flower that opens upward beyond the body. Where the root chakra anchors you in the earth, the crown opens you to the sky; together, they make a column of light through which life can move. A healthy crown chakra feels like a quiet ongoing relationship with something larger than your individual self — through prayer, meditation, awe, contemplation, or simply the recognition that you are part of something vast and old. A blocked crown chakra feels like spiritual dryness — going through the motions, disconnected from meaning. The work is not to invent a religion that fits, but to remember the connection that was always there underneath the noise.',
    when_open: 'You feel connected to something larger than yourself, in whatever language that takes for you. You experience moments of awe regularly. You sense meaning even in difficulty. Spiritual practice (whatever yours is) feels alive, not performative. Your sense of self is steady but not rigid — you know you are part of a bigger field. You can sit with mystery without rushing to explain it.',
    when_blocked: 'Spiritual dryness — the "what is the point of all this?" question with no answer that lands. Cynicism about the sacred. Materialism as the only frame. Or the opposite — over-active crown — being so "spiritual" that you skip the body, skip the world, skip relationships, skip the actual work. Headaches at the very crown of the head, sleep disturbances, depression that is partly a soul-level disconnection. A persistent feeling of being lost without knowing what is lost.',
    what_blocks: 'Spiritual trauma — religion used as a weapon, traditions that taught fear of the divine instead of intimacy with it. Long periods of survival mode (when the system is in fight-or-flight, the crown is the first chakra to power down). Pure materialism. Loss of awe through over-busyness. The "I gave up on God" story that was actually "I gave up on the version of God I was given as a child."',
    how_to_open: 'Practice — any practice — done regularly. Meditation, prayer, contemplation, time in nature, time in silence. Awe-inducing experiences (mountains, oceans, music, art). Reading old wisdom traditions slowly, on your own terms. Service done from love, not duty. Asking the question "what is mine to do here?" and listening for the answer over weeks. Not skipping the body — the crown opens through the column, not in spite of it.',
    affirmations: [
      'I am part of something larger than myself.',
      'I am held by a pattern I do not have to understand.',
      'I am open to the wisdom that wants to move through me.',
      'I trust the unfolding.'
    ],
    pair_with_crystal: 'Clear quartz (universal amplifier) or selenite (crown-clearing light) — see /gab44/crystals',
    pair_with_sound: 'The Letting Go Meditation pairs naturally — surrender is the crown\'s native posture.',
    pair_with_zodiac: 'Pisces (the mystic), Sagittarius (the philosopher), Aquarius (the visionary)',
    pair_with_lifepath: 'Life path 9 (the universalist) and life path 22 (the master builder of the sacred)',
    shadow: 'Over-active crown: spiritual bypassing — using "everything happens for a reason" to avoid feeling, using meditation to escape rather than meet. Under-active: spiritual dryness, materialism, the cynicism that is sometimes a wound dressed up as wisdom.',
    key_questions: [
      'What practice — even a small one — would put me back in conversation with what I call sacred?',
      'Where have I confused spiritual bypass for actual peace?',
      'If I trusted I was held by something larger, how would this week be different?'
    ]
  }
]

export const CHAKRA_SLUGS = CHAKRAS.map((c) => c.slug)
const CHAKRAS_BY_SLUG: Record<string, ChakraProfile> = Object.fromEntries(
  CHAKRAS.map((c) => [c.slug, c])
)

export function isChakraSlug(s: string): boolean {
  return s in CHAKRAS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function chakraPageHTML(slug: string): string {
  const ch = CHAKRAS_BY_SLUG[slug]
  if (!ch) return ''
  const readingHref = `/gab44/reading?ref=chakra-${slug}`

  const title = `${ch.english} (${ch.sanskrit}) — Meaning, Healing, Affirmations · gab44 ✨`
  const description = `${ch.english}: ${ch.governs}. Color ${ch.color}, element ${ch.element}, seed sound ${ch.seed_sound}. Signs of an open vs blocked ${ch.color} chakra, what blocks it, how to open it, ${ch.affirmations.length} affirmations. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Chakras', item: `${SITE_URL}/gab44/chakras` },
          { '@type': 'ListItem', position: 3, name: ch.english, item: `${SITE_URL}/gab44/chakras/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${ch.english} (${ch.sanskrit}) — meaning, signs of imbalance, healing practices, affirmations`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/chakras/${slug}`,
        about: `${ch.english} healing, ${ch.color} chakra, ${ch.sanskrit}, chakra ${ch.number}`
      }
    ]
  })

  const otherChakrasHtml = CHAKRAS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    return `<a class="chak-mini${cur}" href="/gab44/chakras/${q.slug}" style="--c1:${q.color_hex_1};--c2:${q.color_hex_2}"><span class="dot"></span><span class="name">${escapeHtml(q.color)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chakras/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/chakras/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --c1:${ch.color_hex_1}; --c2:${ch.color_hex_2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${ch.color_hex_1}1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${ch.color_hex_2}1c 0%, transparent 60%),
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
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${ch.color_hex_1}1f; }
  h1 {
    font-size: 48px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .num { font-size: 0.5em; vertical-align: 8px; padding-right: 14px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 800; }
  .arch { font-size: 18px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
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
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 38px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .affirm-box {
    background: linear-gradient(135deg, ${ch.color_hex_1}1a 0%, ${ch.color_hex_2}1a 100%);
    border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 22px 0;
  }
  .affirm-box h3 { margin: 0 0 12px; font-size: 13px; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--fg-muted); font-weight: 700; }
  .affirm-box ul { margin: 0; padding-left: 0; list-style: none; }
  .affirm-box li { font-size: 16px; color: var(--fg); font-style: italic; padding: 6px 0; line-height: 1.5;
    border-bottom: 1px dashed ${ch.color_hex_1}40; }
  .affirm-box li:last-child { border-bottom: none; }
  .pair-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 18px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 18px; font-size: 14px; color: var(--fg-dim); }
  .pair-card .label { display: block; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .pair-card a:hover { text-decoration: underline; }
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
  .healing-cta {
    background: var(--bg-1); border: 1px solid ${ch.color_hex_1}60; border-left: 4px solid ${ch.color_hex_1};
    border-radius: 12px; padding: 18px 22px; margin: 22px 0; font-size: 15px; color: var(--fg-dim);
  }
  .healing-cta strong { color: var(--fg); }
  .healing-cta a { color: var(--accent); font-weight: 600; text-decoration: none; }
  .healing-cta a:hover { text-decoration: underline; }
  .other-chakras { margin: 36px 0 22px; }
  .other-chakras h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .chakras-row { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
  @media (max-width: 600px) { .chakras-row { grid-template-columns: repeat(7, 1fr); gap: 3px; } }
  .chak-mini {
    text-align: center; padding: 12px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 10px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .chak-mini:hover { border-color: var(--c1); }
  .chak-mini.current { border-color: var(--c1); border-width: 2px; }
  .chak-mini .dot { width: 22px; height: 22px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    box-shadow: 0 0 0 3px ${ch.color_hex_1}10; }
  .chak-mini .name { font-size: 9px; text-transform: uppercase; letter-spacing: 0.05em; }
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
      <a href="/gab44/chakras">all 7 chakras</a>
      <a href="/gab44/crystals">crystals</a>
      <a href="/healing">healing sounds</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ chakras &amp; energy</div>
    <h1><span class="num">${ch.number}.</span>${escapeHtml(ch.english)}</h1>
    <p class="arch">${escapeHtml(ch.sanskrit)} — “${escapeHtml(ch.sanskrit_meaning)}”</p>
    <p class="sub">${escapeHtml(ch.one_liner)}</p>
    <div class="meta-strip">
      <span>color · ${escapeHtml(ch.color)}</span>
      <span>element · ${escapeHtml(ch.element)}</span>
      <span>seed sound · ${escapeHtml(ch.seed_sound)}</span>
      <span>${escapeHtml(ch.petals)}</span>
      <span>at · ${escapeHtml(ch.location)}</span>
    </div>

    <article class="core-card">
      <span class="label">what it is</span>
      <p class="text">${escapeHtml(ch.meaning)}</p>
    </article>

    <h2><span class="icon">🌟</span>signs of an open ${escapeHtml(ch.color)} chakra</h2>
    <p>${escapeHtml(ch.when_open)}</p>

    <h2><span class="icon">🌑</span>signs of a blocked ${escapeHtml(ch.color)} chakra</h2>
    <p>${escapeHtml(ch.when_blocked)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>what blocks it</h3>
        <p>${escapeHtml(ch.what_blocks)}</p>
      </div>
      <div class="panel">
        <h3>how to open it</h3>
        <p>${escapeHtml(ch.how_to_open)}</p>
      </div>
    </div>

    <div class="affirm-box">
      <h3>${escapeHtml(ch.color)} chakra affirmations</h3>
      <ul>
        <li>${escapeHtml(ch.affirmations[0])}</li>
        <li>${escapeHtml(ch.affirmations[1])}</li>
        <li>${escapeHtml(ch.affirmations[2])}</li>
        <li>${escapeHtml(ch.affirmations[3])}</li>
      </ul>
    </div>

    <h2><span class="icon">🌒</span>the shadow</h2>
    <p>${escapeHtml(ch.shadow)}</p>

    <h2><span class="icon">🤝</span>what to pair this with</h2>
    <div class="pair-grid">
      <div class="pair-card">
        <span class="label">crystal</span>
        ${escapeHtml(ch.pair_with_crystal)}
      </div>
      <div class="pair-card">
        <span class="label">healing sound</span>
        ${escapeHtml(ch.pair_with_sound)} <a href="/healing">listen →</a>
      </div>
      <div class="pair-card">
        <span class="label">zodiac signs</span>
        ${escapeHtml(ch.pair_with_zodiac)}
      </div>
      <div class="pair-card">
        <span class="label">life path</span>
        ${escapeHtml(ch.pair_with_lifepath)}
      </div>
    </div>

    <div class="healing-cta">
      <strong>Pair this with sound:</strong> ${escapeHtml(ch.pair_with_sound)}
      Free, ~10 minutes — <a href="/healing">listen on /healing</a>.
    </div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(ch.key_questions[0])}</li>
        <li>${escapeHtml(ch.key_questions[1])}</li>
        <li>${escapeHtml(ch.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> energy</h2>
      <p>This page describes the ${escapeHtml(ch.english)} in general. A <strong>personal reading</strong> looks at <em>your</em> chart — which chakras your placements activate, which patterns are running quietly, where the work actually lives for the season you are in. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/chakras">all 7 chakras</a> · <a href="/gab44/crystals">crystal kits by sign</a> · <a href="/healing">healing sounds</a> · <a href="/gab44/numerology">life-path numbers</a> · <a href="/gab44/about">12 sun-sign profiles</a>.
    </div>

    <section class="other-chakras">
      <h3>The seven chakras</h3>
      <div class="chakras-row">
        ${otherChakrasHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function chakrasIndexHTML(): string {
  const cards = CHAKRAS.map((ch) => {
    return `<a href="/gab44/chakras/${ch.slug}" class="card" style="--c1:${ch.color_hex_1};--c2:${ch.color_hex_2}">
      <div class="head">
        <span class="dot"></span>
        <span class="num">${ch.number}</span>
      </div>
      <div class="name">${escapeHtml(ch.english)}</div>
      <div class="sanskrit">${escapeHtml(ch.sanskrit)} · ${escapeHtml(ch.color)}</div>
      <div class="teaser">${escapeHtml(ch.one_liner)}</div>
      <div class="meta">${escapeHtml(ch.element)} · ${escapeHtml(ch.seed_sound)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 7 Chakras — Meaning, Colors, Healing, Affirmations · gab44 ✨</title>
<meta name="description" content="What every chakra means: root (red, safety), sacral (orange, pleasure), solar plexus (yellow, will), heart (green, love), throat (blue, voice), third eye (indigo, intuition), crown (violet, spirit). Signs of imbalance, healing practices, affirmations. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chakras" />
<meta property="og:title" content="The 7 Chakras — Meaning, Colors, Healing, Affirmations" />
<meta property="og:description" content="A friendly map for the seven energy centres — meaning, colors, signs of imbalance, healing practices, affirmations." />
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
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .card .dot { width: 18px; height: 18px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px rgba(0,0,0,0.04); }
  .card .num { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--fg-muted); font-weight: 700; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; }
  .card .sanskrit { font-size: 12px; color: var(--fg-muted); margin-bottom: 8px;
    letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600; }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; margin-bottom: 8px; }
  .card .meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted); }
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
      <a href="/gab44/about">12 sun signs</a>
      <a href="/gab44/crystals">crystals</a>
      <a href="/healing">healing sounds</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The seven <span class="accent">chakras</span> — your energy map.</h1>
    <p class="sub">Seven energy centres along the spine, from earth to sky. Each one governs a layer of being — safety, pleasure, will, love, voice, intuition, spirit. Click any chakra to read what it does, what blocks it, and how to open it.</p>

    <div class="intro">
      <h3>How the system works</h3>
      <p><strong>From the ground up.</strong> The lower three chakras (root, sacral, solar plexus) are the body chakras — survival, feeling, will. The upper three (throat, third eye, crown) are the spirit chakras — voice, vision, the beyond. The <strong>heart sits in the middle</strong>, the bridge between the two halves.</p>
      <p><strong>One column, not seven separate dots.</strong> The chakras are meant to flow into each other. Energy that gets stuck at one centre cannot fully reach the others — that is what "blocked" means. The work is not to "fix" one chakra; it is to keep the column open.</p>
      <p><strong>You don't have to believe in chakras for them to work.</strong> Treat them as a map of the body's energetic territory. Where you feel tight, what you struggle to express, what you can't let yourself want — these all live somewhere in this column. The map gives you a way to find them.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want your chart read for which chakras are most active for <em>you</em>?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading walks through your chart and the energy patterns it carries — which chakras are loudly online, which are quietly closed, what your season is asking. <a href="/gab44/reading?ref=chakras-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
