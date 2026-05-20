// Auras SEO funnel — /gab44/auras (index) + /gab44/auras/{slug}.
// 9 hand-written aura-color guides (red, orange, yellow, green, blue,
// indigo, violet, pink, white). Targets very-high-volume keywords:
// "what does my aura color mean", "blue aura meaning", "purple aura
// personality", "red aura people", "white aura meaning", "rainbow aura",
// "what is my aura color quiz". Distinct cluster from chakras — chakras
// describe energy *centers within* the body; aura describes the energy
// *field around* the body. Different mystical frame, different keyword
// cluster, no content duplication.
//
// Each guide is ~500-600 words across 8 sections (meaning, what this
// aura color says about you, gifts, shadows, in love, in work, signs
// your aura is muddied or strong, pair-with chakra/sound/crystal,
// key questions). Color-themed gradient per aura. Routes registered
// at /gab44/auras (no Hono RegExpRouter conflict — 'auras' is not a
// zodiac sign or tarot card). Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface AuraProfile {
  slug: string
  name: string
  color: string
  emoji: string
  one_liner: string
  meaning: string
  what_this_aura_says_about_you: string
  gifts: [string, string, string]
  shadows: [string, string, string]
  in_love: string
  in_work: string
  signs_strong: string
  signs_muddy: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const AURAS: AuraProfile[] = [
  {
    slug: 'red',
    name: 'Red',
    color: 'red',
    emoji: '🔴',
    one_liner: 'Vital force, will, the body in motion. The most embodied, most physical, most alive aura color.',
    meaning: 'A red aura is the color of life-force itself — primal, embodied, alive in the body before it is alive in the mind. Red is the color of blood, of muscle, of the survival pulse, and a person with a red aura is rarely subtle. They walk into rooms and the room registers them. They are physical, sensual, magnetic, and sometimes overwhelming. The red aura is the most action-oriented of the colors: red people *do* before they *think*, *feel* before they *analyze*. The red is at its most beautiful when it is clear and steady — a deep ruby red, vital without being aggressive, present without being demanding. Murky red (brown-tinted, dull) suggests anger or trauma stored in the body that the conscious self has not yet faced.',
    what_this_aura_says_about_you: 'You are someone whose body leads. You feel emotions before you name them, you act before you over-think, you are deeply present in the physical world. People feel you when you walk in. You probably love food, sex, sport, and the kinds of work that involve your hands. The red aura is often misread as "aggressive" — but the truer reading is *embodied*. You are not floating above your life; you are inside it.',
    gifts: [
      'Tremendous physical energy and stamina — you can outlast almost anyone in any physical pursuit.',
      'Magnetic presence — you do not have to perform; people feel you simply by being near you.',
      'Decisiveness — when something needs to be done now, the red aura is the one that moves.'
    ],
    shadows: [
      'Quick to anger — the same red that fuels passion fuels rage; learn to feel it before you act on it.',
      'Impatience with the slow, the subtle, the indirect — not everyone leads with their body the way you do.',
      'Overwhelm in highly-sensitive environments — your aura is loud; you may need to learn to soften it.'
    ],
    in_love: 'In love, the red aura is intensely physical and intensely loyal once committed. You feel attraction in the body first and ask questions later. The shadow is jealousy and possessiveness when the love is uncertain. The gift is that you bring all of yourself to the bedroom, the kitchen, the long walks. Best partnered with someone whose aura is clear (blue, white) — they balance your fire without dampening it.',
    in_work: 'In work, the red aura thrives in physical, embodied, action-oriented roles — first responder, athlete, builder, performer, cook, surgeon. The desk job dampens you. The red aura wilts in over-analytical environments and blooms when there is *something to do*. If you have been sitting too long, your body is asking to move.',
    signs_strong: 'Clear, steady, deep ruby red. You feel grounded, present, sexually alive, decisive. People feel safe with you because you are *here*.',
    signs_muddy: 'Brown-tinted, dull, or with dark patches. Anger you have not faced, trauma stored in the body, exhaustion masked as drive. Move the body honestly — sweat, dance, run, fight a heavy bag. The aura clears.',
    pair_with_chakra: 'Root chakra — the seat of the red aura.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — for the anger and stuck rage stored in the body.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Red jasper (grounded vitality) or garnet (clear passion)',
    key_questions: [
      'When was the last time I moved my body honestly — sweat, dance, fight, sex?',
      'Is there anger I have been swallowing instead of feeling?',
      'Where in my life am I sitting too long?'
    ]
  },
  {
    slug: 'orange',
    name: 'Orange',
    color: 'orange',
    emoji: '🟠',
    one_liner: 'Creativity, playfulness, social warmth. The aura of artists, hosts, and people who can hold a room.',
    meaning: 'An orange aura is the color of creative life-force in motion — red\'s vitality, gentled by the sweetness of yellow. Orange people are warm, social, creative, generative. They are the friends who throw the parties, the hosts who make people feel at home, the artists who turn raw life into something beautiful and shared. Orange is also the color of healthy sexuality (not pure red survival-drive, but desire that wants to *play* and *create*) and the color of good appetite for life. A clear bright orange aura shines warm; a muddy orange aura suggests creative energy that has nowhere to go.',
    what_this_aura_says_about_you: 'You are someone for whom creativity is not a hobby — it is a metabolism. You make things: meals, parties, songs, stories, gardens, communities. You bring people together and make the gathering glow. You are deeply embodied without being raw. Sex, food, art, friendship — these are not separate pursuits for you; they are different expressions of the same warm hunger.',
    gifts: [
      'Creative generativity — ideas, projects, beauty flows out of you naturally.',
      'Social warmth — people open up around you; you make rooms feel safer and warmer.',
      'Playful aliveness — you can find delight in small things; you do not require grandeur to be happy.'
    ],
    shadows: [
      'Pleasure-seeking that turns into avoidance — when life gets hard, the orange aura sometimes hides in food, sex, parties, distractions.',
      'Difficulty with solitude — you draw life from others; learning to feed yourself alone is a real practice.',
      'Scattered creativity — many projects started, fewer finished; the orange aura sometimes needs blue (clarity) or red (decisiveness) to land its work.'
    ],
    in_love: 'In love, the orange aura brings warmth, play, and shared creativity. You date with your senses — meals, dancing, lazy weekends, in-jokes. The shadow is using charm to avoid depth. Best partnered with someone whose aura is grounded (red, green) — they keep your creativity tethered to something real.',
    in_work: 'In work, the orange aura thrives in creative, social, or hospitality roles — chef, designer, event-planner, artist, writer, teacher. The aura wilts under bureaucracy and blooms in any work that lets you make something beautiful for or with other people.',
    signs_strong: 'Clear bright orange. You feel creative, warm, socially generous, sexually alive without being driven. Projects flow.',
    signs_muddy: 'Brownish, dull, or scattered. Creative blockage, social exhaustion (giving too much to others), or pleasure-seeking that has tipped into avoidance. Solitude clears it.',
    pair_with_chakra: 'Sacral chakra — the seat of creative and sexual life-force.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance Affirmations — to claim the creative gift without scarcity-thinking.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian (creative ignition) or sunstone (joyful warmth)',
    key_questions: [
      'What creative project have I started and not finished — and why?',
      'Am I using social warmth to avoid solitude with myself?',
      'Where in my life have I traded play for performance?'
    ]
  },
  {
    slug: 'yellow',
    name: 'Yellow',
    color: 'yellow',
    emoji: '🟡',
    one_liner: 'Personal power, intellect, sunny clarity. The aura of teachers, leaders, and people who light rooms with thought.',
    meaning: 'A yellow aura is the color of personal power and lit-up intellect — bright, warm, mentally agile, sun-on-the-mind. Yellow people are quick thinkers, natural communicators, often charismatic in ways that make people sit up. They are the teachers, the mentors, the entrepreneurs, the ones who can take a complex idea and make it bright and simple. Yellow is also the color of healthy ego — not arrogance, but a clean sense of self, a knowing of what one is *here for*. A clear bright yellow aura radiates confidence and clarity; a muddy yellow suggests an over-active mind that has crowded out the heart.',
    what_this_aura_says_about_you: 'You are someone who lives in the mind without losing the body. You think fast, learn fast, communicate clearly. You probably became aware of your own mental life early, and you have spent years sharpening it. People come to you for clarity. You also have a strong sense of personal mission — you know what is yours to do, even if the path is not yet clear.',
    gifts: [
      'Mental quickness — you process and synthesize information faster than most.',
      'Natural teaching ability — you can take what you know and transmit it cleanly.',
      'Personal clarity — you tend to know what you want and why.'
    ],
    shadows: [
      'Over-thinking that crowds out feeling — the yellow aura can become brittle if it forgets the heart.',
      'Subtle superiority — the gift of seeing clearly can become the trap of feeling above those who do not.',
      'Burnout from constant mental output — the yellow aura needs rest more than it admits.'
    ],
    in_love: 'In love, the yellow aura connects through ideas, conversation, mutual mental respect. You fall for minds. The shadow is staying in the head when the relationship needs the body or heart. Best partnered with a green (heart-led) or blue (calm wisdom) aura — they invite you into deeper layers than the mind alone can see.',
    in_work: 'In work, the yellow aura thrives in teaching, leadership, entrepreneurship, communication, strategy. You blossom when your role uses your full mind. The aura wilts in repetitive or under-stimulating work — the bright mind needs problems to chew on.',
    signs_strong: 'Clear bright yellow. Thoughts flow clearly, you feel confident, you can teach what you know without ego. Energy is high.',
    signs_muddy: 'Pale, ashen, or with cloudy patches. Mental burnout, comparison, or ego-strain. The yellow aura clears with sunlight, sleep, and *receiving* (asking for help, listening more than teaching).',
    pair_with_chakra: 'Solar plexus chakra — the seat of personal power.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — to soften the over-active mind back into the body.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Citrine (mental clarity) or pyrite (confident manifestation)',
    key_questions: [
      'Where in my life is my mind running ahead of my heart?',
      'Have I been giving more than I am receiving — and is the giving from strength or performance?',
      'What does my body need that my mind keeps overruling?'
    ]
  },
  {
    slug: 'green',
    name: 'Green',
    color: 'green',
    emoji: '🟢',
    one_liner: 'Healing, harmony, the heart at peace. The aura of healers, gardeners, and those who restore.',
    meaning: 'A green aura is the color of the heart at peace — restorative, growing, balanced, alive. Green is the color of plants, of the heart chakra, of the lungs taking in clean air. Green people are natural healers — not always in the medical sense, but in the way they bring rest to a tired room. They are gardeners, therapists, mothers, mentors, the ones to whom others go when they are tired or sad. Green is also the color of healthy emotional life — feelings that move in and out without getting stuck. A clear emerald green aura radiates calm; a muddy green can suggest jealousy, resentment, or care-giving fatigue.',
    what_this_aura_says_about_you: 'You are someone whose presence calms others. You may not realize how much of your work in the world is *energetic* — simply being where you are, the rooms shift. You are intuitive about what others need, and often you give it before they ask. Your gift is also your trap: you can over-give. You have to learn to receive.',
    gifts: [
      'Natural healing presence — you make people feel safe, seen, restored.',
      'Emotional steadiness — you can hold space for difficult feelings without absorbing them.',
      'Connection to the natural world — plants, animals, weather; you feel held by the earth.'
    ],
    shadows: [
      'Over-giving until depleted — you may have spent years pouring into others without filling yourself.',
      'Jealousy or resentment when you feel uncared-for — green can muddy when the giving is one-way.',
      'Avoiding your own anger — the green aura is so committed to peace it can deny the part of itself that needs to fight.'
    ],
    in_love: 'In love, the green aura is steady, nurturing, devoted. You love through care — meals made, problems solved, presence offered. The shadow is becoming the caretaker rather than the partner. Best partnered with a red (vital) or yellow (clear) aura — they meet you at full strength rather than asking to be carried.',
    in_work: 'In work, the green aura thrives in healing, teaching, environmental, or care-based roles — therapist, doctor, teacher, farmer, environmental advocate. The aura blossoms in any role that involves *restoration*. It wilts in cut-throat or extractive work that asks you to harm.',
    signs_strong: 'Clear emerald green. You feel emotionally balanced, restorative, connected to the earth. People feel calmer near you.',
    signs_muddy: 'Olive-tinted, dull, or with brown patches. Care-giving fatigue, suppressed anger, or jealousy. Time alone in nature clears it; receiving care from others clears it faster.',
    pair_with_chakra: 'Heart chakra — the seat of the green aura.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — for the heart that has been holding too much for too long.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Green aventurine (gentle heart) or malachite (deep healing)',
    key_questions: [
      'Have I been giving more than I am receiving? For how long?',
      'Where is the anger I have been pretending to be at peace with?',
      'What part of nature has been calling me back?'
    ]
  },
  {
    slug: 'blue',
    name: 'Blue',
    color: 'blue',
    emoji: '🔵',
    one_liner: 'Calm clarity, truth, articulate voice. The aura of communicators, counselors, and those who speak with weight.',
    meaning: 'A blue aura is the color of clear water and clear sky — calm, articulate, true. Blue people are natural communicators (not always loud — sometimes very quiet) whose words land with weight. They are writers, counselors, teachers, the friends who say the one true sentence at the right moment. Blue is the color of the throat chakra, of voice in alignment with truth. A clear sky-blue aura feels honest and trustworthy; a muddy blue suggests held-back voice — words swallowed, truths unspoken.',
    what_this_aura_says_about_you: 'You are someone whose voice carries truth. People often feel like *finally* when you speak — you say what others have sensed but could not articulate. Your work in the world is verbal in some way: you write, teach, counsel, advise, or simply tell the truth in conversations others avoid. You probably learned early that words are powerful, and you treat them carefully.',
    gifts: [
      'Articulate truth-telling — you can name things others can only feel.',
      'Calm presence — you bring down the temperature of heated rooms.',
      'Sensitive reception — you hear what is between the lines, not just what is said.'
    ],
    shadows: [
      'Withdrawn detachment — the blue aura can become cold if it forgets the body and heart.',
      'Self-criticism over speech — you replay conversations, edit yourself, hold back when you should speak.',
      'Drowning in the feelings of others — your sensitivity is a gift, but it requires boundaries.'
    ],
    in_love: 'In love, the blue aura connects through honest, deep conversation. You fall for someone\'s truth-telling. The shadow is intellectualizing love instead of feeling it. Best partnered with an orange (warm) or red (embodied) aura — they bring the body back into the relationship.',
    in_work: 'In work, the blue aura thrives in writing, counseling, teaching, journalism, mediation, advisory roles. You blossom when your role honors your voice. The aura wilts in environments that require dishonesty or that suppress your speech.',
    signs_strong: 'Clear sky-blue. Voice flows, truth comes easily, you feel calm and articulate. Words land where you mean them to.',
    signs_muddy: 'Steel-blue, dull, or grayish. Held-back voice, withdrawal, exhaustion from absorbing others\' feelings. Speaking the unspoken thing clears it.',
    pair_with_chakra: 'Throat chakra — the seat of voice and truth.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — for the words and feelings held in silence.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Blue lace agate (gentle voice) or sodalite (clear thought + speech)',
    key_questions: [
      'What truth have I been holding inside instead of speaking?',
      'Am I editing my voice to be palatable — and at what cost?',
      'Where am I drowning in someone else\'s feelings without realizing?'
    ]
  },
  {
    slug: 'indigo',
    name: 'Indigo',
    color: 'indigo',
    emoji: '🔷',
    one_liner: 'Intuition, inner sight, deep knowing. The aura of mystics, dreamers, and natural seers.',
    meaning: 'An indigo aura is the color of deep intuition — the place where blue (clarity) meets violet (mysticism). Indigo people are natural seers, dreamers, intuitives. They sense things before they can explain them. They have vivid dreams, strong gut feelings, sometimes pre-cognitive flashes. The indigo aura is the third-eye chakra in the energy field — the inner sight made visible. A deep clear indigo radiates knowing without ego; a muddy indigo suggests intuition that has been distrusted or disconnected.',
    what_this_aura_says_about_you: 'You are someone who sees what others miss. You have always been intuitive — you knew things as a child you could not have known by reasoning. You may have learned to hide this gift to fit in, or you may have leaned into it as your central work. Either way, the indigo aura asks you to *trust* the inner sight. Most indigos\' biggest growth-edge is *believing* their own knowing.',
    gifts: [
      'Strong intuition — you sense direction, motive, truth, danger before they show on the surface.',
      'Vivid dream life — your dreams are working hard for you and often deliver clear messages.',
      'Pattern recognition across time — you can see how a small moment now will ripple into a big shape later.'
    ],
    shadows: [
      'Distrust of your own knowing — society has trained the indigo to need "proof"; you may second-guess yourself constantly.',
      'Sensitivity overload — the same antennae that pick up truth pick up everyone\'s pain; boundaries are non-negotiable.',
      'Loneliness — you see things others do not, and explaining what you see is exhausting; isolation is a real risk.'
    ],
    in_love: 'In love, the indigo aura senses the partner deeply, sometimes uncomfortably so. You know things about them they have not yet told you. Best partnered with someone who *believes* the inner life — a green (heart) or violet (mystic) aura. Logical-only partners can leave you lonely.',
    in_work: 'In work, the indigo aura thrives in psychology, counseling, art, writing, intuitive practice (tarot, astrology), dream work. Roles that ask only logic dampen the gift. Roles that honor the unseen make the indigo bloom.',
    signs_strong: 'Deep clear indigo. Dreams are vivid, intuition is sharp and trusted, you feel connected to the unseen layer of life.',
    signs_muddy: 'Bruised-looking, dull, or with cloudy patches. Distrusted intuition, sensitivity overload, or spiritual disconnection. Time alone, dream journaling, and meditation clear it.',
    pair_with_chakra: 'Third eye chakra — the seat of inner sight.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — to settle the over-active receiver back into clear knowing.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Lapis lazuli (vision) or labradorite (mystic depth)',
    key_questions: [
      'What have I been knowing that I have been refusing to trust?',
      'Whose energy am I carrying that is not mine?',
      'When was the last time I let myself sit in stillness without input?'
    ]
  },
  {
    slug: 'violet',
    name: 'Violet',
    color: 'violet',
    emoji: '🟣',
    one_liner: 'Spiritual connection, transcendence, the soul reaching upward. The aura of mystics and spiritual teachers.',
    meaning: 'A violet aura is the color of transcendence — the highest-vibration color in the visible aura spectrum. Violet people are spiritually attuned, often deeply involved in mystic traditions, meditation practices, healing arts, or simply a quiet relationship with the divine. The violet aura is the crown chakra in the energy field — the connection to the source above, made visible. A clear bright violet radiates spiritual presence; a muddy violet can suggest spiritual bypass — using practice to avoid the body or the messy emotional life.',
    what_this_aura_says_about_you: 'You are someone whose life has spiritual gravity. Whether or not you have named it that, you have always sensed there is more than the visible. You may meditate, pray, work with energy, study mystic texts, or simply have a quiet inner connection to something larger. You are often a teacher (formally or informally) — your presence reminds others that the deeper life is real.',
    gifts: [
      'Spiritual presence — your simple being-in-the-room reminds others of the sacred.',
      'Wisdom that comes from beyond personal experience — you channel insight that is not always your own.',
      'Capacity for transcendence — you can move through difficulty by stepping into a wider perspective.'
    ],
    shadows: [
      'Spiritual bypass — using practice to avoid the body, the emotions, the human work.',
      'Detachment from the practical — bills, dishes, ordinary care can feel beneath you.',
      'Subtle superiority — the violet aura can feel above the messier life-paths; humility is the medicine.'
    ],
    in_love: 'In love, the violet aura connects soul-first. You are looking for someone whose spiritual life is alive, even if expressed differently than yours. The shadow is using "spiritual incompatibility" to avoid emotional work. Best partnered with a green (heart) or red (embodied) aura — they keep you grounded.',
    in_work: 'In work, the violet aura thrives in spiritual teaching, energy healing, mystic arts, contemplative writing, hospice work, deep counseling. The aura wilts in purely material work and blossoms in any role that honors the sacred.',
    signs_strong: 'Clear bright violet, sometimes shimmering. You feel connected, peaceful, in flow with the larger order.',
    signs_muddy: 'Dull, brownish-purple, or with patches. Spiritual bypass, disconnection from the body, exhaustion from over-channeling. Grounding practices (walking, gardening, bodywork) clear it.',
    pair_with_chakra: 'Crown chakra — the seat of spiritual connection.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — to integrate the spiritual into the body.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Amethyst (clear spiritual connection) or selenite (clearing the channel)',
    key_questions: [
      'Where in my life am I using spiritual practice to avoid emotional work?',
      'Have I been honoring the body or hovering above it?',
      'What spiritual gift is mine to share — and have I been sharing it?'
    ]
  },
  {
    slug: 'pink',
    name: 'Pink',
    color: 'pink',
    emoji: '🌸',
    one_liner: 'Tender love, gentle warmth, the heart wide open. The aura of those who love openly and live softly.',
    meaning: 'A pink aura is the color of tender, unconditional love — softer than red, sweeter than green. Pink people radiate gentleness. They are the friends who show up with soup, the strangers who let you cut in line, the ones whose smiles you remember years later. The pink aura is the heart chakra in its most romantic, unguarded form — love that has not yet been wounded into protective coloration. A clear bubblegum pink radiates open-hearted warmth; a muddy pink suggests heart-armor or love-overgiving that has tipped into resentment.',
    what_this_aura_says_about_you: 'You are someone whose default setting is *love*. You have probably been called "too soft" or "too sensitive" by people who do not understand that softness is a strength. Your heart is wide open. The cost is that you feel everything; the gift is that you also love everything. The pink aura at its strongest is not naive — it is the kind of love that has chosen to stay open even after being hurt.',
    gifts: [
      'Unconditional warmth — you accept people in ways most cannot.',
      'Romantic depth — your love stories are vivid; you remember the texture of every connection.',
      'Healing the wounded — your softness gives others permission to soften too.'
    ],
    shadows: [
      'Over-attaching to people who need rather than reciprocate — the pink aura can fall into rescue patterns.',
      'Naivety about the harder edges of human nature — not everyone deserves your full openness.',
      'Self-erasure in relationships — you can lose yourself trying to keep the love alive.'
    ],
    in_love: 'In love, the pink aura is romantic, devoted, deeply tender. You love with your whole self. The shadow is loving people *out of* their better selves — you sometimes love the potential rather than the person. Best partnered with someone who can also receive love (not all auras can); a green or another pink works beautifully.',
    in_work: 'In work, the pink aura thrives in care work, teaching young children, counseling, hospice, childcare, animal care. Roles that ask for warmth bring the aura into full bloom. Roles that ask for cynicism or aggression dim it.',
    signs_strong: 'Clear bubblegum pink. You feel open, warm, romantically alive. Love flows in and out without depleting you.',
    signs_muddy: 'Dusty rose, brownish-pink, or armored-looking. Heart-wounds not yet processed, over-giving turned to resentment, or naivety meeting reality. Receiving love clears it.',
    pair_with_chakra: 'Heart chakra (higher heart) — the seat of unconditional love.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — for the heart that has been holding too much.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Rose quartz (the classic heart stone) or kunzite (gentle love)',
    key_questions: [
      'Where am I loving someone\'s potential rather than their reality?',
      'Have I been giving love I have not let myself receive?',
      'What boundary do I need to hold — without closing my heart?'
    ]
  },
  {
    slug: 'white',
    name: 'White',
    color: 'white',
    emoji: '⚪',
    one_liner: 'Purity, integration, the soul aligned. The rarest and highest aura — usually a temporary state of clarity.',
    meaning: 'A white aura is the rarest of the aura colors and almost always represents a *temporary state* rather than a permanent type. It is the color of total integration — every chakra clear, every aura color unified, the soul at peace. White auras are seen most often around people in deep meditation, around newborn babies, around those near the moment of death, and around people who have just had a major spiritual breakthrough. As an everyday aura, white can also indicate purity of purpose — someone who has organized their entire life around a single high value (service, devotion, art, truth) and lives almost monastically inside it. A clear bright white radiates peace; a flat or grayish white suggests dissociation rather than integration.',
    what_this_aura_says_about_you: 'If you are seeing white in your aura right now, something rare is happening. You may be in a moment of unusual clarity — a meditation breakthrough, a near-death experience, a major life transition, or a season of deep simplicity. White auras are usually not someone\'s default; they appear in *moments*. The work is to remember the white-aura state when ordinary life returns and to practice the conditions that brought it.',
    gifts: [
      'Total clarity — when the aura goes white, you see your life with unusual clean perspective.',
      'Energetic protection — white auras are notoriously hard to drain; they reflect what does not belong.',
      'Direct connection to source — meditation, prayer, creativity all flow easily in this state.'
    ],
    shadows: [
      'Dissociation that mimics integration — a flat white aura can look like peace but actually be numbness.',
      'Difficulty re-entering ordinary life — after a white-aura state, the noisiness of normal life can feel painful.',
      'Spiritual ego — claiming a white aura permanently is almost always wrong; humility is the right response.'
    ],
    in_love: 'In love, a white-aura state is rare and intense — usually present at moments of extraordinary intimacy (the wedding day, a deep healing conversation, sex that crosses into the sacred). Do not chase the white-aura state in love; it arrives when both people are fully present.',
    in_work: 'In work, the white aura is most common in monastic, contemplative, or artistic-flow states. Most professionals do not live in this aura full-time; they visit it in periods of deep focus or breakthrough.',
    signs_strong: 'Clear bright white, sometimes with rainbow shimmer. You feel integrated, peaceful, present, free of inner conflict.',
    signs_muddy: 'Flat gray-white, ashy, or hollow-looking. Dissociation rather than integration. Re-engagement with the body and emotional life clears it.',
    pair_with_chakra: 'All seven chakras balanced — but especially crown.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — to honor the rare clear state and let it settle into the body.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Selenite (clearing) or clear quartz (master integration)',
    key_questions: [
      'What conditions brought me to this clear state — and how can I return to them?',
      'Is this clarity integration, or is it dissociation in disguise?',
      'When ordinary life returns, what will I keep from this moment?'
    ]
  }
]

export const AURA_SLUGS = AURAS.map((a) => a.slug)
const AURA_BY_SLUG: Record<string, AuraProfile> = Object.fromEntries(
  AURAS.map((a) => [a.slug, a])
)

export function isAuraSlug(s: string): boolean {
  return s in AURA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Color-themed gradient per aura.
const AURA_ACCENT: Record<string, { c1: string; c2: string }> = {
  red:    { c1: '#d6483a', c2: '#8a2820' },
  orange: { c1: '#d68a3a', c2: '#a05420' },
  yellow: { c1: '#d6b83a', c2: '#9a8420' },
  green:  { c1: '#5aa069', c2: '#2c5e3a' },
  blue:   { c1: '#5a8ec6', c2: '#2c5184' },
  indigo: { c1: '#4a5a9a', c2: '#22305a' },
  violet: { c1: '#9a5ac6', c2: '#5a2c84' },
  pink:   { c1: '#dba2c0', c2: '#a87090' },
  white:  { c1: '#c8c8c8', c2: '#8a8a8a' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function auraPageHTML(slug: string): string {
  const a = AURA_BY_SLUG[slug]
  if (!a) return ''
  const accent = AURA_ACCENT[a.color] || { c1: '#888', c2: '#444' }
  const readingHref = `/gab44/reading?ref=aura-${slug}`

  const title = `${escapeHtml(a.name)} Aura — Meaning, Personality, Gifts &amp; Shadows · gab44 ✨`
  const description = `What a ${a.name.toLowerCase()} aura means. ${a.meaning.substring(0, 150)}... Gifts, shadows, in love, in work, signs your aura is strong or muddy.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Auras', item: `${SITE_URL}/gab44/auras` },
          { '@type': 'ListItem', position: 3, name: `${a.name} aura`, item: `${SITE_URL}/gab44/auras/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${a.name} aura: meaning, personality, gifts and shadows`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/auras/${slug}`,
        about: `${a.name} aura, aura color meaning, aura reading`
      }
    ]
  })

  const otherAurasHtml = AURAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = AURA_ACCENT[q.color] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/auras/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/auras/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/auras/${slug}" />
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
  .color-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
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
  .work-trap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .work-trap-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; }
  .panel.gift { border-left: 4px solid #2e9e6a; }
  .panel.shadow { border-left: 4px solid #d63d4d; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel ul { margin: 0; padding-left: 18px; }
  .panel li { font-size: 14px; color: var(--fg); margin-bottom: 6px; line-height: 1.55; }
  .panel li:last-child { margin-bottom: 0; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ctx-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ctx-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .signs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .signs-grid { grid-template-columns: 1fr; } }
  .sign-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px; }
  .sign-card.strong { border-left: 4px solid #2e9e6a; }
  .sign-card.muddy { border-left: 4px solid #d6a455; }
  .sign-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .sign-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
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
  .other-auras { margin: 36px 0 22px; }
  .other-auras h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .auras-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .auras-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/auras">all 9 auras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ aura color</div>
    <span class="color-pill">${escapeHtml(a.name)} aura</span>
    <h1><span class="sym">${a.emoji}</span>${escapeHtml(a.name)} Aura</h1>
    <p class="sub">${escapeHtml(a.one_liner)}</p>

    <article class="core-card">
      <span class="label">what it means</span>
      <p class="text">${escapeHtml(a.meaning)}</p>
    </article>

    <h2><span class="icon">🧠</span>what this aura color says about you</h2>
    <p>${escapeHtml(a.what_this_aura_says_about_you)}</p>

    <h2><span class="icon">⚖️</span>gifts &amp; shadows</h2>
    <div class="work-trap-grid">
      <div class="panel gift">
        <h3>✓ gifts</h3>
        <ul>
          <li>${escapeHtml(a.gifts[0])}</li>
          <li>${escapeHtml(a.gifts[1])}</li>
          <li>${escapeHtml(a.gifts[2])}</li>
        </ul>
      </div>
      <div class="panel shadow">
        <h3>⚠ shadows</h3>
        <ul>
          <li>${escapeHtml(a.shadows[0])}</li>
          <li>${escapeHtml(a.shadows[1])}</li>
          <li>${escapeHtml(a.shadows[2])}</li>
        </ul>
      </div>
    </div>

    <h2><span class="icon">💞</span>in love + at work</h2>
    <div class="ctx-grid">
      <div class="ctx-card">
        <h3>in love</h3>
        <p>${escapeHtml(a.in_love)}</p>
      </div>
      <div class="ctx-card">
        <h3>in work</h3>
        <p>${escapeHtml(a.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🔍</span>signs your aura is strong vs muddy</h2>
    <div class="signs-grid">
      <div class="sign-card strong">
        <h3>✓ strong / clear</h3>
        <p>${escapeHtml(a.signs_strong)}</p>
      </div>
      <div class="sign-card muddy">
        <h3>~ muddy / dim</h3>
        <p>${escapeHtml(a.signs_muddy)}</p>
      </div>
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${a.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(a.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(a.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${a.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(a.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(a.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(a.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(a.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>for the next quiet moment</h3>
      <ol>
        <li>${escapeHtml(a.key_questions[0])}</li>
        <li>${escapeHtml(a.key_questions[1])}</li>
        <li>${escapeHtml(a.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading that traces your specific aura right now</h2>
      <p>This page is the ${a.name.toLowerCase()} aura in general. A <strong>personal reading</strong> looks at *your* chart and *your* current season and traces the actual aura you are walking with right now — clear, muddy, shifting. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/auras">all 9 aura colors</a> · <a href="/gab44/chakras/${a.pair_with_chakra_slug}">${escapeHtml(a.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/gab44/dreams">dreams</a> · <a href="/healing/script/${a.pair_with_sound_slug}">${escapeHtml(a.pair_with_sound_slug.replace(/-/g, ' '))} audio</a>.
    </div>

    <section class="other-auras">
      <h3>other aura colors</h3>
      <div class="auras-grid">
        ${otherAurasHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function aurasIndexHTML(): string {
  const cards = AURAS.map((a) => {
    const accent = AURA_ACCENT[a.color] || { c1: '#888', c2: '#444' }
    return `<a href="/gab44/auras/${a.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${a.emoji}</span>
        <span class="day">${escapeHtml(a.color)}</span>
      </div>
      <div class="name">${escapeHtml(a.name)} aura</div>
      <div class="teaser">${escapeHtml(a.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Aura Colors Meaning — All 9 Auras Explained · gab44 ✨</title>
<meta name="description" content="What does your aura color mean? The 9 main aura colors (red, orange, yellow, green, blue, indigo, violet, pink, white) — meaning, personality, gifts, shadows, in love, in work. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/auras" />
<meta property="og:title" content="Aura Colors Meaning — All 9 Auras · gab44" />
<meta property="og:description" content="Red, orange, yellow, green, blue, indigo, violet, pink, white — what each aura color means about you." />
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
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 800px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .grid { grid-template-columns: 1fr; } }
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
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/dreams">dreams</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 9 <span class="accent">aura colors</span> — what each one means.</h1>
    <p class="sub">Red, orange, yellow, green, blue, indigo, violet, pink, white. The energy field around you has a color, and the color says something true about who you are right now.</p>

    <div class="intro">
      <h3>How to read your aura</h3>
      <p><strong>Your aura is the energy field around your body</strong> — distinct from chakras (which are energy centers *inside* the body). Sensitive people can see the aura directly; most of us read it indirectly through how rooms shift when someone walks in, how you feel after talking to someone, how a stranger\'s presence either lifts or drains you.</p>
      <p><strong>Most people have one or two dominant aura colors</strong> with shifting tints depending on their day, season, and inner state. The clearest version of your aura is the one you walk with after rest, sunlight, time alone, and honest conversation. The muddiest version shows up after heavy weeks, suppressed emotion, or carrying others\' energy.</p>
      <p><strong>This page is the aura in general.</strong> A $9 personal reading traces *your specific aura* against your chart and your current season — what color is dominant, what is shifting, what is muddied, and what wants to clear.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know what aura color you are walking with right now?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading traces your specific aura — current dominant color, what is shifting, what is muddied, what wants to clear. <a href="/gab44/reading?ref=aura-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
