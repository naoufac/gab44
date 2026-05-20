// Dreams SEO funnel — /gab44/dreams (index) + /gab44/dreams/{slug}
// 12 archetypal dream symbols (snake, falling, teeth, being-chased, water,
// death, flying, fire, naked, baby, spider, ex-partner). Targets one of the
// highest-volume search clusters in all of search: "dream about snakes
// meaning", "what does it mean to dream of falling", "teeth falling out
// dream", "being chased dream meaning", "dreaming of dead people",
// "flying dream meaning", "dreaming of an ex". These are *immediate*
// emotional searches — somebody just woke up and wants the meaning RIGHT
// NOW. Universal cluster (every culture dreams), high curiosity volume,
// strong cross-funnel into chakras + healing audio + $9 reading.
//
// Each symbol guide is ~700 words across 9 sections (meaning, what your
// psyche is processing, common variants, in love, in work, the warning,
// the gift, pair-with chakra/sound/crystal, key questions). Realm-tinted
// gradient (shadow=indigo, transition=ochre, liberation=rose). Routes
// registered BEFORE /gab44/:sign daily route to avoid Hono RegExpRouter
// greedy-match. Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface DreamSymbolProfile {
  slug: string
  name: string
  emoji: string
  one_liner: string
  meaning: string
  what_your_psyche_is_processing: string
  common_variants: [string, string, string, string]
  in_love: string
  in_work: string
  the_warning: string
  the_gift: string
  realm: 'shadow' | 'transition' | 'liberation'
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const DREAM_SYMBOLS: DreamSymbolProfile[] = [
  {
    slug: 'snake',
    name: 'Snake',
    emoji: '🐍',
    one_liner: 'The oldest dream symbol. Transformation, hidden knowledge, the part of you waking up.',
    meaning: 'A snake in a dream is one of the most ancient and most-repeated symbols in the human psyche — it shows up across every culture, on every continent, in every century of recorded dreams. The snake is the symbol of transformation through shedding: it is the creature that periodically dies into its old skin and crawls out as itself again, larger. So a snake dream is almost always your unconscious telling you something is being shed. Old self, old story, old relationship, old job, old fear. The snake is rarely *bad news*, even when it bites — a bite in a dream is often the moment of injection, the venom of awakening that wakes you up to something you have been refusing to see. The shadow side of the snake is hidden danger: a person, a habit, a situation in your waking life that has been quietly working against you and that you have not yet named.',
    what_your_psyche_is_processing: 'Your psyche is processing a transformation that is already underway — whether you have consciously consented to it or not. Something in your life is shedding. That can feel terrifying (especially if you loved the old skin) but the dream is rarely warning you to stop the change. It is warning you to look at the change, to notice what is leaving, to make peace with it.',
    common_variants: [
      'A snake biting you — the moment of awakening, often painful but transformative; what truth has just bitten you?',
      'A snake in your bed or in your house — something hidden in your most private space (a habit, a relationship pattern, a self-deception).',
      'Many snakes — multiple changes happening at once, or multiple parts of you waking up; pay attention to where they are.',
      'A snake you cannot see clearly (in shadow, in water) — a transformation your conscious mind has not yet named.'
    ],
    in_love: 'In a love context, snake dreams often mark the moment a relationship is about to shift — for better or for worse. Either you are about to grow inside the relationship (the relationship is shedding its old form so a deeper one can emerge), or the relationship itself is shedding off your life. Pay attention to your *feeling* in the dream: was the snake threatening or magnetic? Were you afraid or fascinated? That feeling is your unconscious telling you whether to run or to lean in.',
    in_work: 'In a work context, snake dreams often arrive right before a career shift you have been resisting — a job you need to leave, a creative direction calling, a colleague you have been ignoring whose energy is actually toxic. The snake says: stop pretending. The shedding has already started.',
    the_warning: 'The warning of the snake is when you keep dreaming of one repeatedly and refuse to ask what it is asking of you. The unconscious will keep sending the symbol — louder, more frequent, more vivid — until you listen. If you have had three snake dreams in a row, sit down and ask yourself honestly: what am I refusing to shed?',
    the_gift: 'The gift of the snake is exactly its terror: it forces transformation that your ego could not have chosen on its own. People who befriend their snake dreams almost always say, looking back: "That was the dream that woke me up to ___." It marks the threshold of becoming.',
    realm: 'shadow',
    pair_with_chakra: 'Sacral chakra — transformation rises from the body, not the mind.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — for what is shedding off you right now.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Black obsidian (the shadow worker) or moonstone (transformation in motion)',
    key_questions: [
      'What in my life is currently shedding — and have I made peace with it leaving?',
      'Was the snake threatening or magnetic in the dream? What does that feeling tell me?',
      'If I stopped resisting this change, what would I actually do this week?'
    ]
  },
  {
    slug: 'falling',
    name: 'Falling',
    emoji: '🌀',
    one_liner: 'The most universal dream. Loss of control — sometimes terror, sometimes the unconscious teaching you to let go.',
    meaning: 'Falling is the most universally reported dream symbol on earth — almost every adult has had a falling dream. It happens most often at the edge of sleep (the hypnagogic jerk) but also deep in REM, and the meaning differs depending on when and how you fall. At the most surface level, falling is a dream of *loss of control*: something in your waking life has slipped past your ability to grip it. But the deeper teaching of the falling dream is almost always the opposite — it is your unconscious training you for *letting go*. Many spiritual traditions teach that the soul falls into a body at birth and falls back out at death; falling dreams are sometimes echoes of that original surrender. Whether the dream feels like terror or like flight depends on whether you are clenching against the fall or relaxing into it.',
    what_your_psyche_is_processing: 'Your psyche is processing a situation where you have been gripping too hard — a relationship, a job, a self-image, an outcome. The dream shows you what happens when you keep gripping (terror) versus when you finally release (flight). It is asking: what would happen if I stopped trying to control this?',
    common_variants: [
      'Falling and waking up gasping — your nervous system snapped you back; usually means the conscious self isn\'t ready to surrender yet, but the unconscious is asking.',
      'Falling slowly — peaceful surrender already happening; you are deeper into the letting-go than you realize.',
      'Falling and landing safely — completion of a transition; you survived something you were afraid of.',
      'Falling forever — dissolution of a structure you have outgrown; the old shape has no floor anymore.'
    ],
    in_love: 'Falling dreams in a love context often arrive when you are afraid of falling for someone — or afraid of falling *out* of love with someone you committed to. The dream is asking which is true: are you fighting the falling-toward, or fighting the falling-away?',
    in_work: 'In a work context, falling dreams cluster around moments of professional risk: stepping into a bigger role, leaving a stable role, being seen for who you really are. The fall is the cost of the leap. The dream usually arrives when you are about to do it anyway.',
    the_warning: 'The warning of the falling dream is when it becomes nightly and exhausting — that pattern usually means you are spending all of your daytime energy *gripping* in some specific area of life. Identify the grip. Loosen one finger.',
    the_gift: 'The gift of the falling dream is the felt experience of surrender. People who learn to relax inside the falling dream often start to fly mid-fall. That moment is the unconscious teaching you that letting go and lifting are the same gesture.',
    realm: 'transition',
    pair_with_chakra: 'Root chakra — the root that is currently uprooted.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — to relax the grip.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Smoky quartz (grounding into the falling) or hematite (anchor)',
    key_questions: [
      'What am I currently gripping too hard in waking life?',
      'In the dream, did I clench or relax? Which gesture is my soul rehearsing?',
      'If I let this thing go, what would land softer than I think?'
    ]
  },
  {
    slug: 'teeth-falling-out',
    name: 'Teeth Falling Out',
    emoji: '🦷',
    one_liner: 'Power, speech, identity. Something you cannot quite say is starting to fall out of your face.',
    meaning: 'Teeth-falling-out dreams are the second most common adult dream worldwide and one of the most distressing. The dreamer often wakes up panicked, running their tongue along their real teeth to confirm they are still there. The traditional psychoanalytic reading (Freud) connected teeth dreams to anxiety about powerlessness — teeth are the part of the body we use to bite, to chew, to shape speech. But the older symbolic reading is simpler: teeth in dreams represent the part of *you* that is your bite, your speech, your ability to take in what life offers and chew it. Teeth falling out almost always shows up at moments when you cannot quite *say* the thing you need to say, or cannot quite *bite into* the thing you need to commit to. Communication that has been stuck. Power that has been stuck. Identity that is loosening.',
    what_your_psyche_is_processing: 'Your psyche is processing a communication or identity issue — something you have not quite said out loud, or someone you have not quite stood up to, or a self-image you have outgrown but not yet replaced. The teeth fall because the structure is loose. The unconscious is telling you: the old shape is leaving, with or without your consent.',
    common_variants: [
      'Teeth crumbling in your mouth — the slow loss of voice over time; usually arrives during long stretches of silence about something important.',
      'One specific tooth falling out — a specific area: front teeth = how you present yourself, molars = how you process, canines = how you bite back.',
      'Teeth falling out painlessly — release of an old identity; usually less alarming than the dream felt in the morning.',
      'Spitting out teeth — finally letting yourself speak after a long silence; more empowering than it feels in the dream.'
    ],
    in_love: 'Teeth dreams in love often arrive when you have been holding back something you need to say to your partner — a need, a hurt, a truth, a "I am not happy and I do not yet have the words for why." The dream falls the teeth out because the words are about to come.',
    in_work: 'In work, teeth dreams cluster around moments of professional voicelessness — meetings where you stayed quiet but should have spoken, ideas you kept to yourself, conflicts you avoided. The dream is the body reporting back: I have been silent too long.',
    the_warning: 'The warning of teeth dreams is recurrence — if the same teeth-falling-out dream is showing up week after week, it is naming a chronic suppression. Find the conversation you are avoiding. Have it.',
    the_gift: 'The gift of teeth dreams is the immediate clarity they bring on waking. People often know exactly what the dream was about within the first thirty seconds of being awake. That immediacy is the unconscious cooperating with the conscious — it is not hiding the meaning.',
    realm: 'transition',
    pair_with_chakra: 'Throat chakra — the speech that has been stuck.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — to release what has been held in silence.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Blue lace agate (gentle voice) or aquamarine (clear speech)',
    key_questions: [
      'What is the conversation I have been avoiding having?',
      'Whose words have I been swallowing instead of speaking?',
      'What identity am I currently outgrowing — and who am I becoming on the other side?'
    ]
  },
  {
    slug: 'being-chased',
    name: 'Being Chased',
    emoji: '🏃',
    one_liner: 'Whatever you are running from in the dream is something you are running from in waking life. Always.',
    meaning: 'Being-chased dreams are among the most emotionally exhausting dreams a person can have. You wake up with your heart pounding, sometimes mid-sprint, sometimes mid-hide. The traditional symbolic reading is simple and almost always correct: whatever you are running from in the dream is something you are running from in waking life. The pursuer can be a person you know, a stranger, an animal, a shadow figure, a faceless threat — but the deepest teaching of dream psychology (from Jung onward) is that the pursuer is almost always *a part of yourself*, projected outward, that you have been refusing to face. The unconscious sends the chase to force the meeting. Until you turn around in the dream and look at what is chasing you, the chase will keep recurring.',
    what_your_psyche_is_processing: 'Your psyche is processing a part of yourself, a feeling, a truth, or a responsibility that you have been avoiding. The chase is the avoidance made visible. The dream is asking: what would happen if you stopped running and turned around?',
    common_variants: [
      'Being chased by a faceless figure — a part of yourself you cannot yet name; the dream wants you to turn around and look.',
      'Being chased by a known person — usually unfinished business or an unspoken truth between you and that person; the dream is asking for the conversation.',
      'Being chased by an animal — an instinct or a body-truth you have been intellectualizing away; what is your body trying to tell you?',
      'Being chased and getting caught — paradoxically, the catch is often a *relief* in the dream; you have stopped running, and now the work begins.'
    ],
    in_love: 'In love, chase dreams often arrive when one partner has been emotionally avoidant — running from intimacy, running from a hard conversation, running from a truth they sense. The chase is the body refusing to keep running.',
    in_work: 'In work, chase dreams cluster around responsibilities you have been postponing — a project you keep pushing back, a confrontation with a colleague, a career truth you sense ("this isn\'t what I want") but have been outrunning. The dream is the deadline.',
    the_warning: 'The warning of the chase dream is recurrence and increasing intensity — the pursuer gets closer, the speed gets faster, the spaces get tighter. That escalation almost always means the *thing* you are avoiding is getting larger and harder to keep at bay. The dream is asking for the conversation now.',
    the_gift: 'The gift of the chase dream is what happens the night you finally turn around. People who learn to stop running and face the pursuer in the dream almost always report a complete reorganization of the symbol the next time it appears. The pursuer becomes a guide, or a mirror, or simply disappears. The unconscious changes its tone the moment you stop avoiding.',
    realm: 'shadow',
    pair_with_chakra: 'Solar plexus — the courage chakra; the place where you turn around and face the pursuer.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — to soften the running nervous system.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Tiger\'s eye (warrior\'s courage) or black tourmaline (face the shadow)',
    key_questions: [
      'What am I currently running from in waking life — emotionally, professionally, or relationally?',
      'If I turned around in the dream, what would I see — and what would I say to it?',
      'What conversation, decision, or truth have I been outrunning, and what would happen if I let it catch me?'
    ]
  },
  {
    slug: 'water',
    name: 'Water',
    emoji: '🌊',
    one_liner: 'The unconscious. Emotion. The part of you that runs deep below the part of you that thinks.',
    meaning: 'Water in a dream is almost always a portrait of your inner emotional state. Calm water, rough water, deep water, frozen water, flooding water, drinking water — each is a different reading of how your emotional life is currently behaving. Across every dream tradition (Jungian, Freudian, indigenous, Vedic, biblical), water is the unconscious itself — the depth below the surface where memory and feeling and image live. The condition of the water in your dream is the condition of the depth in you. People in long-suppressed emotional states often dream of frozen lakes, dry riverbeds, or polluted water. People in active grief often dream of floods. People in healing often dream of deep, clear water they can swim in.',
    what_your_psyche_is_processing: 'Your psyche is processing the current weather of your emotional life — and showing you, through the water, what condition that weather is in. Not what you *think* you feel. What you actually feel underneath.',
    common_variants: [
      'Drowning — overwhelm; you are taking in more emotion than your nervous system can metabolize right now; the dream is asking for support.',
      'Calm clear water — emotional integration; a season of healing is taking hold even if you cannot feel it in waking life yet.',
      'Tidal wave or flood — repressed emotion breaking through; something you have been postponing is no longer postponable.',
      'Frozen / icy water — long-suppressed feeling; you may not even know what is under the ice anymore.'
    ],
    in_love: 'In love, water dreams describe the relational emotional climate. A relationship in flow shows up as moving water; a relationship in stagnation shows up as still or stagnant water; a relationship that has just experienced a rupture often shows up as flood or tidal wave. Pay attention to how *deep* the water is — depth is intimacy.',
    in_work: 'In work, water dreams often arrive during career transitions when the emotional dimension of the work has been ignored — burnout-as-flood, indifference-as-frozen-lake, clarity-as-clear-spring. The dream restores the felt sense to a domain you have been treating only with the head.',
    the_warning: 'The warning of water dreams is when the water is consistently destructive — drowning, flooding, tidal waves — over weeks. That pattern almost always means an emotional truth has been suppressed for too long. The dream is begging for support: a friend, a therapist, a body practice. Do not white-knuckle through it.',
    the_gift: 'The gift of water dreams is the precise emotional weather report they offer. Most people cannot accurately describe how they feel until they see it externalized — and the dream externalizes feeling perfectly. When you wake from a water dream, write down the condition of the water before you do anything else. That is your honest emotional state.',
    realm: 'liberation',
    pair_with_chakra: 'Sacral chakra — the water chakra, where feeling lives.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Healing — to befriend the depth.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Aquamarine (clarity in feeling) or moonstone (the tide of emotion)',
    key_questions: [
      'What was the condition of the water in my dream — and is that the condition of my emotional life right now?',
      'Where am I currently in the water: above it, below it, drowning, swimming, frozen on its surface?',
      'What emotion would I let myself feel today if I knew it would not destroy me?'
    ]
  },
  {
    slug: 'death',
    name: 'Death',
    emoji: '🕯️',
    one_liner: 'The end of an old self. Almost never literal. Almost always a transformation that was already underway.',
    meaning: 'Death dreams are some of the most distressing dreams a person can have, and almost none of them are literal. Across the entire dream-symbology canon (Jungian, Freudian, esoteric, biblical, tarot), death is the symbol of *transformation* — the ending of one phase so the next can begin. Dreams of your own death are usually not predictions; they are announcements of an old self that is being shed, an old identity that has finished its work, an old version of you whose job is done. Dreams of someone else dying are usually about a transformation that *they* are bringing into your life — or about the death of how you have known them, so a new dynamic can take its place. The Death card in tarot was almost never about literal death — it was about the threshold of becoming. Same here.',
    what_your_psyche_is_processing: 'Your psyche is processing an ending — of an identity, a relationship-shape, a life chapter, a self-concept. The dream is naming the ending so you can grieve it consciously rather than carry the corpse with you for years.',
    common_variants: [
      'Dreaming of your own death — the death of an identity (a role, a self-image, a way of being) that has finished its season.',
      'Dreaming of someone else dying — usually the death of how you have known them, or a major shift they are bringing into your life.',
      'Dreaming of the death of a loved one who is alive — almost never a prediction; usually about your fear of losing them or about a stage of relationship ending.',
      'Dreaming of being at a funeral — completing a goodbye your conscious self has not yet allowed itself to feel.'
    ],
    in_love: 'In love, death dreams almost always mark the end of a phase: the honeymoon ending and the deeper relationship beginning; or, less commonly, the relationship itself ending. They are rarely sudden. They are usually the unconscious naming a transition that has been underway for months.',
    in_work: 'In work, death dreams cluster around the end of career chapters — leaving a job, closing a business, finishing a degree, retiring. They are the unconscious giving the chapter a funeral so you can move on cleanly.',
    the_warning: 'The warning of death dreams is when they recur and you have not consciously named what is ending. The dream will keep arriving until you sit down and ask: what is finishing in my life right now? And then grieve it.',
    the_gift: 'The gift of death dreams is the permission to grieve. Many people are carrying around old selves and old chapters they never properly let go of. The dream is the unconscious holding the funeral the conscious self never held. You can say goodbye and walk forward lighter.',
    realm: 'transition',
    pair_with_chakra: 'Crown chakra — the threshold between this and that.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Letting Go — for what is finishing.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Black obsidian (shadow worker, threshold guardian) or amethyst (peace at the gate)',
    key_questions: [
      'What identity, role, or chapter is currently finishing in my life?',
      'Have I given it a proper goodbye — or am I dragging the body with me?',
      'Who am I becoming on the other side of this ending?'
    ]
  },
  {
    slug: 'flying',
    name: 'Flying',
    emoji: '🕊️',
    one_liner: 'The dream of the freed soul. You are stronger than your waking life is currently letting you be.',
    meaning: 'Flying dreams are among the most pleasurable dreams a person can have, and they are almost always a gift. Across cultures, flying dreams are read as a sign that the soul is operating freely — that the dreamer has, at least in the dream, slipped past the constraints of the body, the daytime self, the limits they accept in waking life. Flying dreams cluster around two life moments: (1) seasons of personal expansion, when you are growing past who you were, and the dream is the unconscious confirming the expansion; (2) seasons of constraint, when you feel boxed in by life, and the dream is the unconscious offering relief and reminding you that you are bigger than the box. People who learn lucid-flying (consciously flying inside a dream) often report it as one of the most spiritually transformative experiences of their life. The dream is showing you what your soul is capable of — if you would just lift.',
    what_your_psyche_is_processing: 'Your psyche is reporting back on your sense of personal power and freedom. Smooth, easy flying = you are aligned with something larger; struggling, low-altitude flying = the conscious self is constraining what the soul can do; falling out of flight = a recent loss of confidence that hasn\'t been processed yet.',
    common_variants: [
      'Smooth flying — alignment; you are in flow with a current bigger than you, even if waking life has not yet caught up.',
      'Struggling to fly / staying low — the conscious self is heavy with doubt or obligation; the soul knows it can lift, but the daytime mind keeps grounding it.',
      'Flying then falling — a recent confidence injury; somebody or something said *you cannot do this* and a small part of you believed them.',
      'Lucid flying — peak spiritual experience; the unconscious and conscious are cooperating fully; treat as confirmation.'
    ],
    in_love: 'In love, flying dreams often arrive when a relationship is genuinely freeing you — when partnership is making you bigger, not smaller. They are rare in relationships that constrain the soul. If you are flying often during a romance, that romance is feeding the soul.',
    in_work: 'In work, flying dreams cluster around moments when you finally land in the right work — work that uses you fully, work that calls forth your gifts, work that lets the soul lift. They also arrive during creative breakthroughs.',
    the_warning: 'There is no warning in the flying dream itself; the warning is in *the absence of it*. Long stretches with no flying dreams (in someone who used to have them often) usually mean the daytime self has been over-managing the soul. Loosen something. Let yourself dream again.',
    the_gift: 'The gift of the flying dream is the felt experience of who you actually are. Most people walk through life as a small fraction of themselves; the flying dream is your full size. Carry it back into waking life with you. Move as if you remembered the lift.',
    realm: 'liberation',
    pair_with_chakra: 'Crown chakra — the lift of the unbounded self.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Abundance — for the bigness the dream just reminded you of.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Selenite (clear soul) or clear quartz (amplify the lift)',
    key_questions: [
      'In waking life right now, am I living closer to my full size or a fraction of it?',
      'What in my life is currently lifting me — and what is currently grounding me too hard?',
      'If I moved through tomorrow as if I remembered the flying, what would change?'
    ]
  },
  {
    slug: 'fire',
    name: 'Fire',
    emoji: '🔥',
    one_liner: 'Passion, destruction, purification. Something is burning — and the question is what is being made room for.',
    meaning: 'Fire is one of the most charged dream symbols — it can be a gift or a warning, a liberation or a catastrophe, depending entirely on the context of the dream. Fire is the elemental of *transformation through destruction*: the old form is consumed so the new form can emerge. Wildfires destroy forests but also crack open seeds that cannot germinate without flame. The phoenix is the symbol of fire-as-rebirth. So fire dreams are almost always about something in your life that is being burned away — sometimes by your own choice (creative passion, righteous anger, the will to start over) and sometimes by force (loss, change you did not consent to, the universe clearing the field). The condition of the fire and your relationship to it tell you which.',
    what_your_psyche_is_processing: 'Your psyche is processing destruction-and-renewal. Something is being consumed. The dream is asking: what is being made room for? Sometimes the burning is your idea (passion, breakthrough, the willing destruction of an old structure); sometimes it is the universe\'s idea (a loss, an ending, a clearing). Either way, the field is being cleared.',
    common_variants: [
      'A house on fire — the structure of your life (often: family-of-origin, old identity, settled life) is burning to make room for a new shape.',
      'You holding fire calmly — alignment with creative or destructive passion that you have made peace with.',
      'A wildfire / forest fire — large-scale clearing; usually arrives during life-chapter endings (divorce, career change, big move).',
      'You being burned — anger or pain you have been holding; the dream is asking you to express it before it consumes more.'
    ],
    in_love: 'In love, fire dreams cluster around the most charged seasons — the early passion of new love, the destructive heat of a fight, the cleansing burn after a breakup. The condition of the fire tells you the condition of the love: contained = passion held well; out-of-control = passion has tipped into destruction; cold ash = the season has ended.',
    in_work: 'In work, fire dreams often arrive at creative breakthroughs (the spark) and at burnout points (the wildfire). They mark moments when something is either being born or being destroyed — sometimes both at once.',
    the_warning: 'The warning of the fire dream is when the fire is destructive and you are powerless against it — that almost always names a situation in waking life where something is being lost without your consent and you have not yet allowed yourself to grieve.',
    the_gift: 'The gift of the fire dream is its ferocity — it makes the stakes visible. After a fire dream, you usually know with great clarity what you actually care about, what is worth defending, and what you are ready to let burn.',
    realm: 'liberation',
    pair_with_chakra: 'Solar plexus — the inner fire chakra.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Letting Go — for what is being cleared.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Carnelian (creative fire) or fire agate (transmutation)',
    key_questions: [
      'What in my life is currently burning — and was the fire my choice or the universe\'s?',
      'What is being made room for?',
      'Where in my life have I been afraid of my own fire — and what would I do if I trusted it?'
    ]
  },
  {
    slug: 'naked-in-public',
    name: 'Naked in Public',
    emoji: '🙈',
    one_liner: 'The fear of being seen as you actually are. Or — the secret hope of finally being seen.',
    meaning: 'Naked-in-public dreams are some of the most universally embarrassing dreams. The dreamer is in school, at work, on a stage, walking down a street — and suddenly realizes (or others realize) that they are naked. Across dream traditions, the symbolic reading is twofold: the fear of vulnerability, and the deeper longing to be seen. The dream is using the body as a metaphor for the self — being naked is being unmasked, undefended, with nothing between your real self and the gaze of others. People who have these dreams during high-image-management seasons (new job, public role, performing a persona) are almost always being shown by the unconscious that the persona is exhausting and the real self wants out. The shadow side: somebody close to you may be seeing more of you than your masked version is comfortable with — and the dream is the body\'s warning system.',
    what_your_psyche_is_processing: 'Your psyche is processing a tension between your masked self and your real self — and reporting on the gap. The bigger the gap, the more these dreams arrive.',
    common_variants: [
      'Naked at school / at work — your professional persona is wearing thin; the real self is asking to come closer to the surface.',
      'Naked and no one notices — paradoxically, this often means you have already integrated more of your real self than you give yourself credit for; people are accepting you as you are.',
      'Partially clothed — partial integration; the most exposed parts of the dream usually map to the most exposed parts of your real life right now.',
      'Naked and proud — the unconscious congratulating you on a season of authenticity; treat as confirmation.'
    ],
    in_love: 'In love, naked dreams arrive at moments of emotional exposure — the moment of telling someone you love them, the moment of confessing a hidden part of yourself, the moment of being seen by a partner more deeply than you knew was possible. They can be terror-inducing or liberating; both are real.',
    in_work: 'In work, naked dreams cluster around imposter syndrome and performance anxiety — usually the dream is exaggerating the actual exposure. Most people in your life have already seen more of you than you think.',
    the_warning: 'The warning of naked dreams is when they are humiliating and recurring — that pattern usually names a part of yourself you are deeply ashamed of, or a season of life where the persona has gotten so tight the real self can no longer breathe inside it.',
    the_gift: 'The gift of naked dreams is the felt experience of being seen — and surviving. Most of these dreams end without catastrophe. The unconscious is saying: it is safer to be your real self in public than you currently believe.',
    realm: 'transition',
    pair_with_chakra: 'Sacral chakra — body, vulnerability, authenticity.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Anxiety Relief — for the exposed nervous system.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Rose quartz (gentle self) or sunstone (the courage to be seen)',
    key_questions: [
      'How big is the gap between my public self and my real self right now?',
      'Where am I currently most masked — and what would happen if I let one piece of the mask down this week?',
      'In the dream, was being seen catastrophic, or was it strangely freeing?'
    ]
  },
  {
    slug: 'baby',
    name: 'Baby',
    emoji: '👶',
    one_liner: 'A new beginning. Something is being born — a project, a relationship, a self.',
    meaning: 'Baby dreams are almost always about *something being born* — and almost never literal pregnancy (though they do sometimes arrive during real pregnancy). A baby in a dream is the symbol of a new beginning: a project, a creative work, a new relationship, a new chapter, a new self. The condition of the baby in the dream tells you the condition of the new beginning: a healthy thriving baby = the new thing is alive and on schedule; a sickly baby = the new thing is being neglected; a forgotten baby = you are forgetting to tend to a new beginning that is asking for your care; a baby growing rapidly = a new thing in your life is growing faster than you are tracking. People in transitional life seasons (new careers, new homes, new relationships, new self-concepts) have the most baby dreams.',
    what_your_psyche_is_processing: 'Your psyche is processing a new beginning that is currently in your life — and asking how you are caring for it. The unconscious is sensitive to what your conscious self may have already started forgetting.',
    common_variants: [
      'A healthy baby you are caring for — a new project / chapter / self that you are tending well; treat as confirmation.',
      'A baby you forgot about — a new beginning in your life that you have stopped tending; the dream is asking you to come back to it.',
      'A baby growing too fast — a new thing in your life is unfolding faster than your conscious self is tracking; pay attention.',
      'A sick or struggling baby — a new beginning that needs more care than you are currently giving it.'
    ],
    in_love: 'In love, baby dreams cluster around the early phase of relationship — the relationship itself is the baby. Pay attention to how the baby is doing in the dream. Healthy = the relationship is well-tended. Forgotten or struggling = the relationship is being neglected.',
    in_work: 'In work, baby dreams arrive at the start of new projects, new roles, new businesses. The baby is the project. The condition of the baby is the condition of the project.',
    the_warning: 'The warning of the baby dream is the *forgotten* baby — almost always a literal new thing in your life (relationship, project, self-concept) that you started, then drifted away from, and now the unconscious is delivering the bill.',
    the_gift: 'The gift of the baby dream is the reminder that something new is alive in your life right now — and asking for your love. Even if waking life feels stuck, the dream says: there is a new thing being born here. Care for it.',
    realm: 'liberation',
    pair_with_chakra: 'Sacral chakra — the chakra of creation and birth.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — for the new thing that is being born.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Moonstone (new beginnings) or rose quartz (the love that grows the baby)',
    key_questions: [
      'What new thing is currently being born in my life — and how is it doing?',
      'Have I been tending it, or have I forgotten about it?',
      'What would change if I treated this new beginning with the seriousness of caring for a baby?'
    ]
  },
  {
    slug: 'spider',
    name: 'Spider',
    emoji: '🕷️',
    one_liner: 'The weaver. Feminine creative power, fate, and the fear of what you yourself are spinning.',
    meaning: 'Spider dreams are charged with two opposite meanings, and the dreamer\'s relationship to the spider in the dream tells you which is operating. On one hand, the spider in dream-symbology (across cultures from West African to Native American to Greek) is the *weaver* — the creator of webs, the spinner of fate, the symbol of feminine creative power, patience, and the ability to make something out of almost nothing. On the other hand, in modern Western dreaming, spiders often carry fear and revulsion — and that fear-charge usually points to a feminine power, a creative force, or a fate-weaving capacity in your own life that you are currently afraid of. The shadow of the spider is the fear of your own creative power. A friendly spider is the unconscious congratulating you on weaving well; a threatening spider is the unconscious naming your discomfort with your own capacity to spin.',
    what_your_psyche_is_processing: 'Your psyche is processing your relationship to your own creative / feminine / fate-weaving power — and reporting on whether you currently honor it or fear it.',
    common_variants: [
      'A spider weaving a web you can see clearly — your creative work is flowering; treat as confirmation that what you are spinning is real and beautiful.',
      'A threatening spider — fear of your own power; usually arrives in seasons when you are about to step into bigger creative or feminine authority.',
      'Many spiders — multiple creative threads being spun at once; pay attention to which web feels most yours.',
      'A spider biting you — a creative awakening, often painful, often arriving right before a breakthrough.'
    ],
    in_love: 'In love, spider dreams often arrive when feminine power dynamics are at play — the partner who is doing the relational weaving (often invisibly), the partner who is being woven for. Pay attention to whether you are the weaver or the woven, and whether you have made peace with it.',
    in_work: 'In work, spider dreams cluster around creative breakthroughs and around moments of stepping into authority — particularly for women and feminine-identified people stepping into creative leadership.',
    the_warning: 'The warning of the spider dream is recurring fear-charged spiders in someone who is consistently undersized in their creative life. The dream is the unconscious begging the conscious self to step into the bigger size.',
    the_gift: 'The gift of the spider dream is the felt experience of one\'s own creative power — and the realization that the only thing standing between you and the web you are meant to weave is your fear of weaving it.',
    realm: 'shadow',
    pair_with_chakra: 'Sacral chakra — the chakra of creative-feminine power.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — for the web you are meant to spin.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Black obsidian (shadow weaver) or labradorite (creative feminine)',
    key_questions: [
      'Where in my life am I currently weaving — and have I been honoring it or hiding from it?',
      'In the dream, was the spider threatening or beautiful? What does that tell me about my relationship to my own power?',
      'What web am I afraid to spin?'
    ]
  },
  {
    slug: 'ex-partner',
    name: 'Ex-Partner',
    emoji: '💔',
    one_liner: 'Almost never about them. Almost always about an unfinished part of yourself that you left in that relationship.',
    meaning: 'Ex-partner dreams are some of the most disorienting dreams an adult can have — they arrive years, sometimes decades, after the relationship ended, often when the dreamer is in a happy current relationship. Almost without exception, these dreams are *not about the ex*. They are about a part of yourself that became visible in that relationship — a self you were, a self you tried to be, a self you escaped, a wound that opened, a gift that emerged. The ex in the dream is a doorway to that part of your own history. Sometimes the dream arrives because that part of you is asking to be reintegrated; sometimes because a current life situation has triggered the same dynamic; sometimes because you carry an unfinished feeling toward that period of your life that never got to land. The ex is rarely the message. The ex is the messenger.',
    what_your_psyche_is_processing: 'Your psyche is processing an unfinished piece of yourself from the relationship era — a feeling never fully felt, a goodbye never fully said, a self never fully reclaimed, a wound never fully healed. The dream is asking you to come back and finish.',
    common_variants: [
      'A neutral ex dream where you are simply existing together — usually a part of yourself from that era is asking to be re-integrated; ask which version of yourself you were back then.',
      'An ex dream where you are arguing or unresolved — an unfinished emotional thread; usually about a feeling you never let yourself fully feel back then.',
      'An ex dream where you are saying goodbye — a closure your conscious self has not yet given itself permission to make; honor it.',
      'A dream where you cheat with an ex (or your current partner cheats with one) — usually about a *quality* of that ex that is currently absent or longed for; rarely literal.'
    ],
    in_love: 'In current love, ex dreams arrive most often during moments when the new relationship is asking you to be a kind of self you also tried to be in the old one — and the unconscious is cross-referencing. They are almost never a sign that you should go back. They are a sign that an old self is being completed.',
    in_work: 'In work and identity, ex dreams sometimes correspond to a *career* you left rather than a person — an old version of professional you that you abandoned, that wants to be visited.',
    the_warning: 'The warning of recurring ex dreams is when they always feature the same ex and the same unresolved feeling — that pattern almost always names an emotional thread you have been refusing to face. Sometimes the right response is simply to write the letter (and never send it). The dream usually changes after that.',
    the_gift: 'The gift of the ex dream is the reminder that all your old loves left you with something — a self you were with them, a gift they gave, a wound that became wisdom. The dream offers you the chance to finally claim what was given. Take it.',
    realm: 'shadow',
    pair_with_chakra: 'Heart chakra — the chamber of unfinished feeling.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for what was never quite released.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rhodonite (heart healing) or rose quartz (gentle closure)',
    key_questions: [
      'What part of myself was I when I was with this person — and have I made peace with that version of me?',
      'What feeling did I never fully feel during that relationship?',
      'What unfinished sentence is the dream asking me to complete?'
    ]
  }
]

export const DREAM_SYMBOL_SLUGS = DREAM_SYMBOLS.map((d) => d.slug)
const DREAM_BY_SLUG: Record<string, DreamSymbolProfile> = Object.fromEntries(
  DREAM_SYMBOLS.map((d) => [d.slug, d])
)

export function isDreamSymbolSlug(s: string): boolean {
  return s in DREAM_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Realm-tinted gradient — shadow=indigo (what we run from),
// transition=ochre/amber (change/loss), liberation=rose (birth/lift).
const REALM_ACCENT: Record<DreamSymbolProfile['realm'], { c1: string; c2: string }> = {
  shadow:      { c1: '#5a4e7a', c2: '#2c2444' },
  transition:  { c1: '#d6a455', c2: '#9b6a28' },
  liberation:  { c1: '#dba2a2', c2: '#a87060' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function dreamSymbolPageHTML(slug: string): string {
  const d = DREAM_BY_SLUG[slug]
  if (!d) return ''
  const accent = REALM_ACCENT[d.realm]
  const readingHref = `/gab44/reading?ref=dream-${slug}`

  const title = `Dream About ${d.name} — Meaning, What Your Psyche Is Processing, Variants &amp; Warnings · gab44 ✨`
  const description = `What it means to dream about ${d.name.toLowerCase()}. ${d.meaning.substring(0, 150)}... Common variants, the warning, the gift, what to ask yourself.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Dreams', item: `${SITE_URL}/gab44/dreams` },
          { '@type': 'ListItem', position: 3, name: `${d.name} dream`, item: `${SITE_URL}/gab44/dreams/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Dream about ${d.name}: meaning, what your psyche is processing, common variants`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/dreams/${slug}`,
        about: `${d.name} dream meaning, dream symbolism, dream interpretation`
      }
    ]
  })

  const otherDreamsHtml = DREAM_SYMBOLS.filter((q) => q.slug !== slug).slice(0, 8).map((q) => {
    const acc = REALM_ACCENT[q.realm]
    return `<a class="ph-mini" href="/gab44/dreams/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/dreams/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/dreams/${slug}" />
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
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel ul { margin: 0; padding-left: 18px; }
  .signs-panel li { font-size: 14px; color: var(--fg); margin-bottom: 8px; }
  .signs-panel li:last-child { margin-bottom: 0; }
  .work-trap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .work-trap-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; }
  .panel.warn { border-left: 4px solid #d63d4d; }
  .panel.gift { border-left: 4px solid #2e9e6a; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.6; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } }
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
  .other-dreams { margin: 36px 0 22px; }
  .other-dreams h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .dreams-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .dreams-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/dreams">all 12 dreams</a>
      <a href="/gab44/spirit-animals">spirit animals</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ dream symbol</div>
    <span class="realm-pill">${escapeHtml(d.realm)} realm</span>
    <h1><span class="sym">${d.emoji}</span>Dream About ${escapeHtml(d.name)}</h1>
    <p class="sub">${escapeHtml(d.one_liner)}</p>

    <article class="core-card">
      <span class="label">what it means</span>
      <p class="text">${escapeHtml(d.meaning)}</p>
    </article>

    <h2><span class="icon">🧠</span>what your psyche is processing</h2>
    <p>${escapeHtml(d.what_your_psyche_is_processing)}</p>

    <div class="signs-panel">
      <h3>common variants of this dream</h3>
      <ul>
        <li>${escapeHtml(d.common_variants[0])}</li>
        <li>${escapeHtml(d.common_variants[1])}</li>
        <li>${escapeHtml(d.common_variants[2])}</li>
        <li>${escapeHtml(d.common_variants[3])}</li>
      </ul>
    </div>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ctx-grid">
      <div class="ctx-card">
        <h3>in love</h3>
        <p>${escapeHtml(d.in_love)}</p>
      </div>
      <div class="ctx-card">
        <h3>in work</h3>
        <p>${escapeHtml(d.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">⚖️</span>the warning + the gift</h2>
    <div class="work-trap-grid">
      <div class="panel warn">
        <h3>⚠ the warning</h3>
        <p>${escapeHtml(d.the_warning)}</p>
      </div>
      <div class="panel gift">
        <h3>✓ the gift</h3>
        <p>${escapeHtml(d.the_gift)}</p>
      </div>
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${d.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(d.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(d.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${d.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(d.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(d.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(d.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(d.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to ask yourself</h2>
    <div class="questions-card">
      <h3>sit with these on waking</h3>
      <ol>
        <li>${escapeHtml(d.key_questions[0])}</li>
        <li>${escapeHtml(d.key_questions[1])}</li>
        <li>${escapeHtml(d.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading about what your dreams are telling you</h2>
      <p>This page is the dream symbol for everyone. A <strong>personal reading</strong> looks at *your* chart, *your* season, and what your dream of ${escapeHtml(d.name.toLowerCase())} is asking from *you* specifically. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/dreams">all 12 dream symbols</a> · <a href="/gab44/spirit-animals">spirit animals (waking-life appearances)</a> · <a href="/gab44/twin-flames">twin flame stages</a> · <a href="/gab44/chakras/${d.pair_with_chakra_slug}">${escapeHtml(d.pair_with_chakra_slug.replace('-', ' '))} chakra</a>.
    </div>

    <section class="other-dreams">
      <h3>other dream symbols</h3>
      <div class="dreams-grid">
        ${otherDreamsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function dreamsIndexHTML(): string {
  const cards = DREAM_SYMBOLS.map((d) => {
    const accent = REALM_ACCENT[d.realm]
    return `<a href="/gab44/dreams/${d.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${d.emoji}</span>
        <span class="day">${escapeHtml(d.realm)}</span>
      </div>
      <div class="name">${escapeHtml(d.name)}</div>
      <div class="teaser">${escapeHtml(d.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dream Meaning &amp; Symbol Dictionary — 12 Archetypal Dreams Explained · gab44 ✨</title>
<meta name="description" content="What your dreams mean — 12 archetypal dream symbols (snake, falling, teeth, being chased, water, death, flying, fire, naked, baby, spider, ex-partner). What each is processing, common variants, the warning, the gift. Universal cluster, written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/dreams" />
<meta property="og:title" content="Dream Meaning &amp; Symbol Dictionary — 12 Archetypal Dreams · gab44" />
<meta property="og:description" content="Snake, falling, teeth, chased, water, death, flying, fire, naked, baby, spider, ex — what each dream is asking from you." />
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
      <a href="/gab44/spirit-animals">spirit animals</a>
      <a href="/gab44/twin-flames">twin flames</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 archetypal <span class="accent">dreams</span> — and what each is asking.</h1>
    <p class="sub">Snake, falling, teeth, being chased, water, death, flying, fire, naked, baby, spider, ex-partner. The dreams every adult has had. Each one is the unconscious doing real work — and the work is rarely what you fear.</p>

    <div class="intro">
      <h3>How to read your dream</h3>
      <p><strong>Almost no dream is literal.</strong> Dreams are not predictions. The death dream is not about death. The teeth-falling-out dream is not about teeth. The pursuer in your chase dream is, almost always, a part of you. The unconscious speaks in image because image is older and more truthful than language.</p>
      <p><strong>The feeling in the dream is more important than the content.</strong> A snake dream where you felt magnetic and curious is doing different work than a snake dream where you felt terror. Always start with: how did I feel?</p>
      <p><strong>Recurring dreams are the unconscious turning up the volume.</strong> If the same dream is showing up week after week, it is naming something the conscious self has refused to listen to. The dream will keep arriving until you sit down with it. A $9 personal reading can name what the dream is asking from *you* specifically.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know what your dream is asking from you specifically?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading looks at your chart + your season + the specific dream and names what your unconscious is processing. <a href="/gab44/reading?ref=dream-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
