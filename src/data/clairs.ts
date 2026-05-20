// Clair Senses (Psychic Abilities) SEO funnel — /gab44/clairs (index) +
// /gab44/clairs/{slug} (8 pages: clairvoyance, clairaudience, claircognizance,
// clairsentience, clairempathy, clairalience, clairgustance, clairtangency).
//
// Targets very-high-volume "am I psychic" search cluster: "what is
// clairvoyance", "claircognizant signs", "clairsentient meaning",
// "clairaudience how to develop", "what does it mean to be psychic",
// "types of psychic abilities", "clairalience scent", "psychometry meaning".
// Distinct keyword cluster from empath types (which is about feeling-types,
// not perceiving-modes) and from chakras (which is about energy centers,
// not psychic perception). The 8 clair senses are the *channels* through
// which intuition speaks — every spiritual reader has a primary plus a
// secondary, the same way they have a primary chakra-strength plus a
// secondary.
//
// Each guide is ~600 words across 9 sections (meaning + name origin, the
// signs you have it, how it shows up day-to-day, in love, in work, the
// gift, the shadow, how to develop it, pair-with chakra/sound/crystal,
// 3 key questions). Sense-tinted gradient: seeing/hearing/knowing modes
// = indigo/violet (head), feeling/empathy modes = rose (heart),
// scent/taste/touch modes = sage (body).
//
// Routes register straightforwardly at /gab44/clairs and /gab44/clairs/:slug
// — no greedy-match conflict because the namespace is fresh. Zero LLM cost.

import { SITE_URL } from '@/lib/identity'

export type ClairFamily = 'head' | 'heart' | 'body'

export interface ClairProfile {
  slug: string
  name: string
  display: string                // e.g. "Clairvoyance — Clear Seeing"
  short: string                  // e.g. "clairvoyance"
  english: string                // e.g. "clear seeing"
  emoji: string
  family: ClairFamily
  origin: string                 // latin etymology line
  one_liner: string
  meaning: string                // ~150-200 words
  signs_you_have_it: [string, string, string, string, string]
  day_to_day: string             // ~100 words
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  how_to_develop: string         // ~120 words
  pair_with_chakra_slug: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const CLAIRS: ClairProfile[] = [
  {
    slug: 'clairvoyance',
    name: 'clairvoyance',
    display: 'Clairvoyance — Clear Seeing',
    short: 'clairvoyance',
    english: 'clear seeing',
    emoji: '👁️',
    family: 'head',
    origin: 'from the French *clair* (clear) + *voyance* (seeing) — literally "clear vision."',
    one_liner: 'Information arrives as image — flashes of mental pictures, visions in meditation, dreams that turn out to be accurate, the inner movie that just *plays*.',
    meaning: 'Clairvoyance is intuitive information that arrives as visual imagery — flashes of pictures in the mind\'s eye, vivid dream sequences that turn out to be accurate, scenes that "play" in meditation, sudden symbolic images during conversation. It is the most-pictured psychic sense in popular culture (the crystal-ball reader, the medium "seeing" the loved one) — and also the most misunderstood. Most clairvoyants do not see ghosts in the room. They see *internally* — in the same screen behind the eyes where you can imagine your kitchen right now. The signal often arrives in symbol rather than literal scene: a tower for an upheaval, a door for a transition, the face of a specific person who turns out to be the one you needed to call. Like all the clair senses, clairvoyance can be born strong, can lie dormant for decades, and can be developed through patient practice — the seeing-channel works exactly like a muscle. Every human has it to some degree; some are born with the dial turned higher, the rest of us turn it up by paying attention to what was already there.',
    signs_you_have_it: [
      'You "see" the answer to a problem as a picture before you can put it into words.',
      'Your dreams are unusually visual and you remember them in scenes, not just feelings.',
      'In meditation, images arrive unbidden — symbols, faces, places you have not been.',
      'When someone tells you a story, your mind builds the visual scene without effort.',
      'You sometimes "see" how a situation will end — and you turn out to be right more often than chance.'
    ],
    day_to_day: 'Day-to-day, clairvoyance shows up as a visual imagination that runs slightly hotter than other people\'s. You design your apartment in your head before furniture arrives. You can recall a friend\'s outfit from a photograph you saw once. You sometimes "see" a clear scene before an event happens — a quick flash of where the lost keys are, a momentary image of a friend\'s face seconds before the friend texts. The signal is so quick that most clairvoyants miss it for years until someone names what they have been doing.',
    in_love: 'In love, clairvoyance shows up as the ability to "see" a partner\'s next move before they make it, to notice when their face does not match their words, and sometimes to dream of someone before meeting them. The shadow is over-reading: building an internal movie of the relationship and then being surprised when the partner turns out to be a different character than the one your inner cinema cast.',
    in_work: 'In work, clairvoyance is the gift of the strategist who can "see" how the project will land before it ships, the designer who can hold the entire interface in her head, the founder who has lived in the future business so long that the present roadmap is just transcription. Trust the visual flash; verify with data; ship.',
    the_gift: 'The gift of clairvoyance is the capacity to translate the invisible into the visible — the dream into the painting, the hunch into the plan, the unspoken pattern into the diagram everyone in the room finally understands. Clairvoyants are often artists, designers, architects, strategists, and visionary leaders.',
    the_shadow: 'The shadow of clairvoyance is over-imagining — confusing the inner movie for the outer reality, building a vivid scenario of what *might* happen and then being unable to receive what is *actually* happening. Or paranoia: seeing a "sign" everywhere, especially in absence. The cure is grounding (root chakra) plus journaling: write down the visions, then check them against the world.',
    how_to_develop: 'To develop clairvoyance: (1) practice visual recall — close your eyes and see your kitchen, your front door, a person\'s face — in increasing detail; (2) keep a dream journal beside the bed, write every fragment on waking, your dream-recall doubles within two weeks; (3) in meditation, allow images to arrive without trying to interpret them in the moment; (4) ask a question before sleep, watch for the symbolic answer in the next morning\'s dream. Clairvoyance is the most easily developed clair because the visual cortex is already running — you are simply being asked to look at a different screen.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Amethyst (third-eye opening) or labradorite (visionary protection)',
    key_questions: [
      'When was the last time I "saw" something coming and dismissed the image as "just my imagination" — and was I right?',
      'What recurring symbol shows up in my dreams or visions that I have never sat down to interpret?',
      'If I trusted the visual signal for one week, what would I do differently?'
    ]
  },
  {
    slug: 'clairaudience',
    name: 'clairaudience',
    display: 'Clairaudience — Clear Hearing',
    short: 'clairaudience',
    english: 'clear hearing',
    emoji: '👂',
    family: 'head',
    origin: 'from the French *clair* (clear) + Latin *audientia* (hearing) — literally "clear hearing."',
    one_liner: 'Information arrives as sound — the inner voice, a name spoken when no one is there, a piece of music that will not leave your head until you decode the message.',
    meaning: 'Clairaudience is intuitive information that arrives as sound — the inner voice that sometimes speaks a clear sentence, hearing your own name called when no one is in the room, a snippet of song stuck in your head whose lyric turns out to be the answer to the day\'s question, a familiar voice (a grandparent, a guide) speaking briefly inside the head with a tone you recognize. Like all the clairs, most clairaudient hearing is *internal* — not auditory hallucination, not voices "out there in the room." It is the internal-monologue voice, occasionally pierced by a sentence that does not feel like your own thinking. Clairaudients often experience repetitive numbers (angel numbers landing audibly), songs that "follow" them, ringing in one ear before insight, or the sudden absolute clarity of a sentence that arrives whole. Some are born strongly clairaudient; many do not realize they are clairaudient until someone names it, because the sound channel is so seamlessly integrated with regular thought.',
    signs_you_have_it: [
      'You sometimes "hear" a clear sentence in your head that does not feel like your own thinking — often containing words you would not normally use.',
      'Songs get stuck in your head in oddly meaningful ways — the lyric turns out to address the day\'s question.',
      'You hear your own name called when nobody is there.',
      'You experience high-pitched ringing in one ear (often the right) just before insight or in spiritually charged moments.',
      'You receive guidance from departed loved ones in the form of a familiar voice "speaking" briefly inside your head.'
    ],
    day_to_day: 'Day-to-day, clairaudience shows up as an internal narrator with an unusual signal-to-noise ratio. Most clairaudients learn to distinguish three streams: their own analytical thinking, their anxious worry-loop, and the calm, brief, absolutely-certain inner sentences that feel different in tone — quieter, slower, often kinder. The third stream is the clairaudient channel. Trust it once a week. Track which calls were accurate. The discernment comes with practice.',
    in_love: 'In love, clairaudience often surfaces as the inner voice that says yes or no with surprising certainty before the conscious mind has finished evaluating a partner. It is the friend who "hears" what someone really meant beneath what they said. The shadow is mistaking anxious self-talk for guidance — anxiety is loud, the clairaudient channel is quiet.',
    in_work: 'In work, clairaudience is the writer\'s gift (sentences arrive whole), the negotiator\'s gift (hearing the unspoken concession), the manager\'s gift (knowing what the room actually needs to hear). Songwriters, voice actors, journalists, therapists, teachers, and lawyers often have a strong clairaudient channel.',
    the_gift: 'The gift of clairaudience is the capacity to translate energy into language — to find the exact sentence that names the thing, to hear the unspoken question under the asked one, to deliver the message in the words that will land for *this* listener. Clairaudients are translators between worlds.',
    the_shadow: 'The shadow of clairaudience is anxious self-talk masquerading as guidance, the looped worry-voice claiming psychic authority, or paranoid hearing — interpreting every random sound as a "sign." The cure is silence: meditation that quiets the conscious chatter so the quieter channel can be heard distinctly.',
    how_to_develop: 'To develop clairaudience: (1) take 10 minutes of silent meditation daily — phone away, ears uncovered — and simply notice what voice arises; (2) ask a clear question, then listen for the *first* sentence that arrives and write it down without editing; (3) pay attention to songs stuck in your head and read the lyric as message; (4) journal the difference between "anxious-loop voice" and "calm-clear voice" — they sound different once you have named them; (5) practice talking less in conversations and listening for what is being said *between* the words.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Lapis lazuli (clear inner-voice) or blue calcite (calm receiving)',
    key_questions: [
      'What is the difference between my anxious self-talk and the quieter sentences that turn out to be right?',
      'When did I last hear a sentence in my head and dismiss it — and what did I lose by dismissing it?',
      'What song has been stuck in my head this week, and what is the lyric trying to tell me?'
    ]
  },
  {
    slug: 'claircognizance',
    name: 'claircognizance',
    display: 'Claircognizance — Clear Knowing',
    short: 'claircognizance',
    english: 'clear knowing',
    emoji: '💡',
    family: 'head',
    origin: 'from the French *clair* (clear) + Latin *cognoscere* (to know) — literally "clear knowing."',
    one_liner: 'You just know. No image, no voice, no feeling — the answer arrives whole, with absolute certainty, and you have no idea where it came from.',
    meaning: 'Claircognizance is intuitive information that arrives as *direct knowing*, with no intermediate sensory channel. No image, no voice, no body sensation — the answer simply lands, complete, and the claircognizant person has no story for where it came from. This is the most-overlooked clair sense because it does not feel "psychic" — it feels like ordinary knowing. The claircognizant says "I just know" and means it literally. They know how a meeting will end before it starts. They know when a friend is in trouble before the friend knows. They know the answer to a problem they never studied. The signal is silent, sudden, and absolute. Because there is no sensory packaging, claircognizants often spend years dismissing their own gift as "just being smart" or "just having a hunch" — and only realize what they have when they start tracking the times their certain-knowings turned out to be exactly right. Claircognizance is most often anchored in the crown chakra (top of head) rather than the third eye, because it bypasses imagery entirely.',
    signs_you_have_it: [
      'You "just know" things and cannot explain how — about people, situations, outcomes, the right answer.',
      'You give advice that is unusually precise without any idea where the advice came from.',
      'You finish other people\'s sentences accurately because you can sense the entire thought before they get there.',
      'You wake up knowing something that was not in your knowledge yesterday.',
      'You have been called "weirdly insightful" or "annoyingly always right" by people who do not understand how you do it.'
    ],
    day_to_day: 'Day-to-day, claircognizance shows up as a steady stream of micro-knowings that the rational mind tries (and fails) to retrofit with explanation. You know which exit on the highway is the right one before you read the sign. You know the friend who is about to call you was about to call. You know the right candidate to hire after thirty seconds of conversation. Most claircognizants spend the first half of their life arguing themselves out of their knowings. The second half — once they start trusting them — usually involves a major career upgrade.',
    in_love: 'In love, claircognizance is the gut-level knowing that this person is or is not for you — often within minutes, sometimes within seconds. The shadow is overriding the knowing because the conscious mind generates persuasive reasons to ignore it. The body and the knowing are usually right; the mind talks itself out of the obvious for years.',
    in_work: 'In work, claircognizance is the executive who makes "intuitive" decisions that turn out to be exactly right, the doctor whose diagnoses arrive before the chart is read, the consultant who knows the actual problem after one meeting. Claircognizants make excellent strategists, judges, founders, surgeons, and crisis decision-makers.',
    the_gift: 'The gift of claircognizance is bypassing the noise — going directly to the answer without having to walk through the entire argument. The claircognizant gets to the right call faster than the analytical thinker, when the channel is trusted. The gift is most powerful when the claircognizant ALSO has the discipline to verify the knowing with research, because gut + rigor is unbeatable.',
    the_shadow: 'The shadow of claircognizance is arrogance — the certainty without humility, the "I just know" that becomes "I am always right" and stops listening. Or the opposite: chronic dismissal, the claircognizant who refuses to trust their own knowing because it has no rational source. The cure for both is the same: track your knowings. Write them down. Look back monthly. The data calibrates you.',
    how_to_develop: 'To develop claircognizance: (1) start a "knowings log" — every time you have a sudden certainty about anything, write it down with the date and check back; (2) practice answering questions with the *first* answer that arrives, before reasoning kicks in (call this your gut-yes / gut-no test); (3) meditate on the crown of your head, not the third eye — claircognizance lives there; (4) ask "what do I already know about this?" before researching, and write the answer; (5) compare your written gut-answer to the eventual outcome, and watch your accuracy rise.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Clear quartz (pure knowing) or selenite (crown-channel clarity)',
    key_questions: [
      'What do I "just know" right now that I have been talking myself out of for months?',
      'Where in my life have I been trusting analysis over my own knowing — and what has that cost me?',
      'If I trusted my first-arriving answer for one week, what would I decide differently?'
    ]
  },
  {
    slug: 'clairsentience',
    name: 'clairsentience',
    display: 'Clairsentience — Clear Feeling',
    short: 'clairsentience',
    english: 'clear feeling',
    emoji: '🤲',
    family: 'heart',
    origin: 'from the French *clair* (clear) + Latin *sentire* (to feel) — literally "clear feeling."',
    one_liner: 'Information arrives as body sensation — a chill on the spine, a warmth in the chest, a knot in the gut, a sudden lightness when the truth is spoken.',
    meaning: 'Clairsentience is intuitive information that arrives as body sensation. The chill on the spine when something is *true* in a way the speaker did not intend. The warmth in the chest when you meet a person you are about to love. The sudden knot in the gut walking into a building you should not have entered. The lightness in the shoulders when a hard decision turns out to be the right one. Clairsentients read the world through their own physical body — the body is the antenna, the nervous system is the receiver, the skin and the gut and the chest are the screen on which the answer appears. Most clairsentients are intensely body-aware: they notice their pulse change, their stomach drop, their breath catch. They feel the weather of a room within seconds of entering it. They are also the most likely of the clairs to absorb other people\'s emotional states without noticing the absorption — clairsentience and empathic-overwhelm are siblings.',
    signs_you_have_it: [
      'You get goosebumps or a "shiver up the spine" when something is true or important — and you have learned to trust it.',
      'You feel a knot, drop, or lightness in your gut about decisions, often before you have any reasons.',
      'A room feels "off" or "warm" to you the moment you enter, before any conversation.',
      'Your body reacts to people you are about to meet — calm with some, tense with others, before words are exchanged.',
      'You feel physically heavy or sick after spending time with certain people, and physically lighter after others.'
    ],
    day_to_day: 'Day-to-day, clairsentience shows up as a body that is constantly editorializing on the world. The spine prickles when someone lies. The chest opens when a stranger is safe. The gut tightens approaching the bad meeting. The shoulders drop when the right decision is named. Clairsentients who learn to read their own bodies have a constant, accurate, real-time intuitive feed. Clairsentients who do not learn to read their own bodies often end up exhausted, anxious, or chronically ill — the antenna picks up signal whether you decode it or not.',
    in_love: 'In love, clairsentience is the body-knowing of safety or threat with a partner — the involuntary tension or relaxation, the way the breath changes when they walk into the room. The shadow is the clairsentient who has been overriding the body for so long that they no longer feel its signal at all, and end up in relationships their gut warned them about from week one.',
    in_work: 'In work, clairsentience is the ability to read the room — to feel which colleague is struggling, which client is about to walk, which deal is going to close. Therapists, doctors, hospitality workers, salespeople, healers, and bodyworkers tend to be strongly clairsentient.',
    the_gift: 'The gift of clairsentience is the body as truth-meter — a portable, always-on, remarkably accurate signal generator that tells you what is real beneath what is being said. Clairsentients are the people who can tell you "something is wrong with this deal" months before the spreadsheet shows it.',
    the_shadow: 'The shadow of clairsentience is empathic flooding — picking up everyone else\'s emotion, never being able to tell which feelings are yours. Or chronic numbness — the clairsentient who has been overriding the body for so long that the antenna is now offline, often manifesting as physical symptoms (chronic fatigue, anxiety, gut issues). The cure is the same: come back to the body. Daily.',
    how_to_develop: 'To develop clairsentience: (1) body scan twice daily — eyes closed, attention slowly moving from feet to crown, naming what each part feels; (2) before any decision, pause for 30 seconds and ask "what is my body saying?" — answer in body-language (tight/open/cold/warm/heavy/light); (3) keep a feeling journal — note the body-state before and after meetings, you\'ll see patterns; (4) ground daily — feet on grass, hands in dirt, cold water on the wrists — clairsentients lose signal when ungrounded.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Carnelian (sacral-felt knowing) or hematite (grounding the antenna)',
    key_questions: [
      'What was my body trying to tell me this week that I overrode with logic?',
      'Whose emotional state am I currently carrying as if it were my own?',
      'If I made the next big decision based purely on my body\'s yes or no, what would I choose?'
    ]
  },
  {
    slug: 'clairempathy',
    name: 'clairempathy',
    display: 'Clairempathy — Clear Emotional Reading',
    short: 'clairempathy',
    english: 'clear empathic reading',
    emoji: '💞',
    family: 'heart',
    origin: 'from the French *clair* (clear) + Greek *empatheia* (in-feeling) — literally "clear feeling-into."',
    one_liner: 'You feel other people\'s emotions as if they were your own — directly, without being told, often without wanting to.',
    meaning: 'Clairempathy is the capacity to feel another person\'s emotional state directly — to walk into a room and instantly know who is grieving, who is excited, who is masking rage with politeness. Unlike ordinary empathy (which involves cognitive understanding of another\'s feeling), clairempathy is *direct emotional reception* — the other person\'s feeling shows up in your own emotional system, sometimes so vividly that the clairempath cannot tell whose feeling it is until they pause to check. Clairempathy is closely related to clairsentience (the body channel), but distinct: clairsentience reads through *body sensation*; clairempathy reads through *emotional state*. Most strongly clairempathic people are also empath-types (see /gab44/empath) — but the empath taxonomy is about which dimension you are sensitive to (emotion, physicality, intuition, etc), while clairempathy specifically names the perceiving channel itself. Born clairempaths often grow up confused about which feelings are theirs and which they have absorbed; learning to discern is the developmental task of the gift.',
    signs_you_have_it: [
      'You catch other people\'s moods within minutes of being with them — often before you have spoken.',
      'You feel emotions arrive that have no source in your own life, and later realize you absorbed them from someone in your day.',
      'Crowds exhaust you fast — you are processing too many emotional signals at once.',
      'You can tell the moment someone is performing happiness over an underlying sadness.',
      'You sometimes need hours alone after social events to "discharge" feelings that were not yours.'
    ],
    day_to_day: 'Day-to-day, clairempathy shows up as an emotional life that is *too crowded* — too many feelings arriving from too many sources, often without the clairempath knowing which ones are theirs. The first developmental task is the question: "is this feeling mine?" — asked daily, sometimes hourly. Clairempaths who learn to ask this question consistently become extraordinary therapists, partners, friends, and leaders. Clairempaths who do not ask it tend to burn out, get ill, or quietly resent the people they are absorbing from.',
    in_love: 'In love, clairempathy is the gift of being able to feel exactly what the partner is feeling — and the curse of having no privacy from it. The clairempathic partner often knows what is wrong before the partner has spoken, which can be intimacy-deepening or intimacy-violating depending on how the clairempath uses the information. The shadow: caretaking-as-default, taking responsibility for fixing the partner\'s emotions, losing self in fusion.',
    in_work: 'In work, clairempathy is the gift of the therapist, the coach, the great manager, the client-relations lead, the healer, the writer of emotionally true fiction. Anywhere the work requires reading another\'s inner state in real time, the clairempath has an advantage — provided they have learned to discharge what they pick up.',
    the_gift: 'The gift of clairempathy is presence-with-others-as-they-actually-are. The clairempath does not need anyone to perform their emotional state; the clairempath sees through it. This makes them extraordinary listeners, intuitive readers of complex social fields, and the kind of friend everyone trusts with their real feelings. The gift, properly tended, is one of the most relational superpowers a human can carry.',
    the_shadow: 'The shadow of clairempathy is fusion — losing self in others\' feelings, mistaking absorbed emotion for personal emotion, becoming a vessel for everyone else\'s undischarged psychological material. Common burnout: chronic fatigue, anxiety, depression that "comes from nowhere," resentment, the urge to disappear from social life. The cure is *discharge practice* + the daily question "is this mine?"',
    how_to_develop: 'To develop clairempathy *responsibly*: (1) the daily practice "is this mine?" — every emotion that arrives, ask it; (2) discharge after social contact: shower, exercise, time alone, journaling; (3) learn the "energetic boundary" visualization — imagine a permeable membrane around your field that you control; (4) study the difference between empathy (feeling-with) and compassion (feeling-for) — compassion is sustainable, fusion is not; (5) say "no" to one social commitment per week to practice protecting your bandwidth.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Black tourmaline (energetic boundary) or rose quartz (open-but-protected heart)',
    key_questions: [
      'Whose feelings am I currently carrying that are not mine?',
      'When was the last time I asked "is this mine?" before assuming an emotion was about my own life?',
      'What would change if I treated my emotional bandwidth as a finite, sacred resource?'
    ]
  },
  {
    slug: 'clairalience',
    name: 'clairalience',
    display: 'Clairalience — Clear Smelling',
    short: 'clairalience',
    english: 'clear smelling',
    emoji: '🌸',
    family: 'body',
    origin: 'from the French *clair* (clear) + Latin *alium* (related to scent / olfaction) — sometimes also called *clairolfactance*.',
    one_liner: 'You smell what is not physically there — a departed grandmother\'s perfume, the cologne of a person you have not seen in years, smoke when there is no fire.',
    meaning: 'Clairalience is intuitive information that arrives as scent — usually phantom scent, with no physical source. The most reported clairalient experience is the *scent of a departed loved one* — a grandmother\'s perfume drifting through a room she has never been in, a partner\'s cologne in the car years after they passed, a parent\'s pipe-tobacco at the moment of crisis. Clairalience is also a daily-life channel for some practitioners: a sudden whiff of roses when an answer is yes, of smoke when the situation is not safe, of bread baking when home is being signaled. The mechanism is unclear (the olfactory cortex is one of the most directly emotional brain regions), but the experience is consistent across cultures and centuries — and clairalient experiences are unusually common among the bereaved as visitation phenomena. Most clairalients do not develop the channel intentionally; it shows up of its own accord, usually in moments of emotional or spiritual significance.',
    signs_you_have_it: [
      'You sometimes smell perfume, cologne, tobacco, or food associated with a departed loved one — with no physical source.',
      'You catch scents in places where the scent could not physically be (a forest in a city apartment, the sea in a desert).',
      'Specific scents mean specific things to you that no one else perceives — a recurring "this means yes" or "this means warning" scent.',
      'You smell things others in the room cannot smell.',
      'Your own intuitive yes/no is sometimes signaled by a quick whiff of something — you may not have even named it as a "psychic" experience until reading this.'
    ],
    day_to_day: 'Day-to-day, clairalience tends to be *occasional rather than constant* — most clairalients experience it in flashes during emotionally or spiritually charged moments rather than as a continuous channel. Common: the scent of a passed loved one in moments of stress, the scent of the natural world in dreams or meditation, the scent of an upcoming person before they arrive. The signal is brief and almost always emotionally meaningful.',
    in_love: 'In love, clairalience can show up as the recognition of a partner by scent in a way that runs deeper than physical chemistry — the body remembers the scent of the right person across years and time zones. Clairalients sometimes smell a partner before the partner arrives, even physically distant.',
    in_work: 'In work, clairalience is rarer in everyday application — more a confirmation channel than a primary tool. Where it does show up: perfumers, sommeliers, healers, bereavement counselors, anyone whose work touches the spiritual layer of the senses.',
    the_gift: 'The gift of clairalience is the most directly *emotional-memory-encoded* of the clair senses — scent is the sense most tightly bound to memory and feeling. When clairalience activates, it is often the universe (or a beloved) saying "I am here, in the way you would most viscerally recognize me." The gift is comfort.',
    the_shadow: 'The shadow of clairalience is rare but worth naming: phantom scents that signal medical issues (parosmia, certain seizure types) — if scent-experiences become frequent, intrusive, or sour-smelling, see a doctor; not all phantom scent is spiritual. The other shadow is interpretation-overreach — building elaborate stories around a single scent when the more honest answer is "I noticed something kind."',
    how_to_develop: 'Clairalience is one of the harder clairs to deliberately develop, but: (1) keep a journal of any phantom-scent experiences with date, location, emotional context; (2) sit with departed loved ones in meditation and invite their presence — clairalient visitation is most common when invited; (3) practice deep present-moment scent-noticing in daily life (the coffee, the book, the partner\'s skin) — the *muscle* of the olfactory cortex is your channel; (4) be patient. Clairalience often comes when it wants to come.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Selenite (crown channel) or angelite (visitation work)',
    key_questions: [
      'Have I had a phantom-scent experience and dismissed it because it did not fit my framework?',
      'Whose presence have I felt through scent — and have I let myself receive the visit?',
      'What is the recurring scent in my life, dreams, or memory that is asking to be acknowledged?'
    ]
  },
  {
    slug: 'clairgustance',
    name: 'clairgustance',
    display: 'Clairgustance — Clear Tasting',
    short: 'clairgustance',
    english: 'clear tasting',
    emoji: '👅',
    family: 'body',
    origin: 'from the French *clair* (clear) + Latin *gustare* (to taste) — literally "clear tasting."',
    one_liner: 'A taste arrives in the mouth that has no physical source — often connected to a memory, a person, a moment of intuitive download.',
    meaning: 'Clairgustance is intuitive information that arrives as taste — usually a phantom taste in the mouth with no physical source. The rarest of the clair senses to be deliberately developed, and one of the most overlooked: tastes can carry memory and meaning the way scents do (think of the *taste* of a grandparent\'s recipe), and clairgustant signals are usually a form of visitation, recognition, or spiritual communication via the most embodied possible channel. Mediums working with departed loved ones sometimes report receiving the taste of a specific food the deceased loved (a particular bread, coffee made a particular way) as a recognition signal during a session. Some intuitives experience clairgustance during meditation: a taste arrives, the meditator follows the trail of the taste backward to a memory, the memory turns out to hold the answer to the question being held in meditation. Clairgustance is not for everyone — many strong intuitives never experience it — but where it occurs, it is unmistakable.',
    signs_you_have_it: [
      'You sometimes taste food in your mouth that no one in the room is eating — especially foods associated with departed loved ones.',
      'During meditation, intuitive readings, or healing work, an unexpected taste arrives and carries meaning.',
      'You have a strong taste-memory association with people — specific foods carry specific people in your inner life.',
      'You receive guidance through taste-symbolism: a sudden taste of honey when an answer is yes, of metal when something is off.',
      'You are unusually attuned to subtle flavors in food, drink, even in the air.'
    ],
    day_to_day: 'Day-to-day, clairgustance is rarely a constant channel. Most clairgustants experience it occasionally, often during moments of spiritual significance: a meditation, a meal that triggers a visitation memory, a healing session, a moment of intense recognition with a person. The signal is brief, embodied, and almost always emotionally loaded.',
    in_love: 'In love, clairgustance is rare in the relational layer but can show up as the visceral recognition of a partner through shared food memory — a meal that becomes a touchstone, a flavor that the body associates with safety in their presence.',
    in_work: 'In work, clairgustance is rarest in application but most accessible to those whose work is already taste-centered: chefs, sommeliers, herbalists, healers using flower essences or homeopathy, mediums who use taste as a recognition signal during sessions.',
    the_gift: 'The gift of clairgustance is the most *bodily and emotionally encoded* of the clair senses — taste, like scent, is a sense that bypasses the rational mind and goes directly to the limbic system. When clairgustance activates, it is often a deep-body recognition that something or someone sacred is present. The gift is intimacy with the world through the most ancient sensory channel.',
    the_shadow: 'The shadow of clairgustance is medical mis-attribution — phantom tastes can also be neurological (some seizure types, certain medications, blood-sugar shifts) — if phantom-taste experiences become frequent or unpleasant, see a doctor. Spiritual interpretation is appropriate when the taste is meaningful and pleasant; medical investigation is appropriate when it is intrusive or worrying.',
    how_to_develop: 'Clairgustance is the hardest clair to deliberately develop, but: (1) eat with full present-moment attention — slow, eyes closed, notice every dimension of flavor; (2) keep a food-memory journal of meaningful taste-memories (a meal at age 7, a dish a grandparent made, the taste of a wedding cake); (3) in meditation, invite a departed loved one and notice if any taste arises; (4) work with herbal teas and flower essences to deepen the taste-channel\'s sensitivity; (5) honor any phantom-taste experience with a moment of attention, a journal note, and a thank-you.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Smoky quartz (embodiment) or amber (ancient memory)',
    key_questions: [
      'What taste-memory do I carry that holds someone I have lost?',
      'Have I dismissed a phantom-taste experience that was actually a moment of contact?',
      'When did I last eat with full presence — and what did the food try to tell me?'
    ]
  },
  {
    slug: 'clairtangency',
    name: 'clairtangency',
    display: 'Clairtangency — Clear Touching (Psychometry)',
    short: 'clairtangency',
    english: 'clear touching · psychometry',
    emoji: '✋',
    family: 'body',
    origin: 'from the French *clair* (clear) + Latin *tangere* (to touch) — literally "clear touching." Also called *psychometry* (Greek for "soul-measurement").',
    one_liner: 'You can pick up a stranger\'s ring, a stranger\'s photograph, the wall of an old house — and read the energy of the people, places, and stories the object has touched.',
    meaning: 'Clairtangency, also called *psychometry*, is the capacity to receive intuitive information by physically touching an object, a person, or a place. Pick up a piece of jewelry that belonged to a stranger and "feel" the wearer\'s personality, life events, even illnesses. Walk into an old building and feel what happened in its rooms. Hold a photograph and sense what the photographed person was carrying that day. Clairtangency is one of the most-tested clair senses (it has been used in police investigations, controversially), and one of the most physically anchored — it is a body-channel, requiring contact, and clairtangents often describe the information arriving through their hands as a stream of impressions, images, emotions, sometimes brief sentences. Born clairtangents are often the people who avoid antique shops, second-hand jewelry, or old houses because the energetic noise is overwhelming until they learn to manage the channel.',
    signs_you_have_it: [
      'You feel the "energy" of objects, especially old ones, antiques, or items with emotional history.',
      'You feel uncomfortable in old houses, hotels, or hospital rooms — picking up residue of past inhabitants.',
      'You can pick up someone\'s belongings (a watch, a ring, a phone) and "know" things about them.',
      'You strongly prefer new clothing or only second-hand items you have cleansed yourself.',
      'You touch a person on the shoulder or hand and receive a wave of impression about what they are going through.'
    ],
    day_to_day: 'Day-to-day, clairtangency shows up as a heightened sensitivity to objects and spaces. Some clairtangents avoid second-hand stores, museums, or graveyards because the energetic load is too high. Others learn to harness the channel: handling a friend\'s ring during a conversation gives them deeper read of what their friend is carrying; touching a new home before buying it tells them more than the inspection report.',
    in_love: 'In love, clairtangency is the heightened sensitivity of physical touch — the clairtangent partner can read their lover\'s emotional state through skin-contact, and is often deeply affected by the energetic history of objects in their lover\'s life (a previous-relationship gift, a family heirloom). This can deepen intimacy or, if untended, cause overwhelm.',
    in_work: 'In work, clairtangency is the gift of the energy-worker, the bodyworker, the antiques expert, the gemologist, the realtor reading a property, the medium working with personal effects of the deceased. Anywhere the work involves objects with history, the clairtangent has an unusual antenna.',
    the_gift: 'The gift of clairtangency is direct embodied access to the energetic record carried by people, objects, and places. The clairtangent can know things about the world that no analytic process could uncover — by touching it. The gift, properly stewarded, is one of the most intimate of the clairs.',
    the_shadow: 'The shadow of clairtangency is energetic overload — the inability to be in old buildings, around antiques, or in close physical proximity to others without absorbing more than the body can process. The cure is *grounding + cleansing practices*: regular bathing, time in nature, deliberate cleansing of objects (sage, salt, sunlight), and energetic boundary work.',
    how_to_develop: 'To develop clairtangency: (1) practice with a friend — hold an object that belongs to them, eyes closed, and report any impression that arises (color, feeling, image, person, place); compare with their reality; (2) develop a daily grounding practice; (3) cleanse second-hand objects before living with them (salt, sunlight, smoke, intention); (4) practice consciously "closing" your channel before entering crowded or energetically loaded spaces, and "opening" it when you choose to read; (5) honor the body — clairtangents who skip sleep, hydration, and rest lose the channel\'s clarity.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Black tourmaline (boundary + grounding) or smoky quartz (cleansing the load)',
    key_questions: [
      'What objects in my home carry energy that is not mine — and have I cleansed them?',
      'When I touched a stranger\'s belonging recently, did I receive an impression I dismissed as imagination?',
      'Where in my body am I storing energetic residue from places or people I have absorbed?'
    ]
  }
]

// ---------- helpers ----------

export const CLAIR_SLUGS = CLAIRS.map((c) => c.slug)
const CLAIR_BY_SLUG: Record<string, ClairProfile> = Object.fromEntries(
  CLAIRS.map((c) => [c.slug, c])
)
export function isClairSlug(s: string): boolean { return s in CLAIR_BY_SLUG }

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: head (seeing/hearing/knowing) = indigo,
// heart (feeling/empathy) = rose, body (smell/taste/touch) = sage.
const FAMILY_ACCENT: Record<ClairFamily, { c1: string; c2: string }> = {
  head:  { c1: '#7a6ec6', c2: '#3d3478' },
  heart: { c1: '#dba2a2', c2: '#a87060' },
  body:  { c1: '#7a9b6a', c2: '#3d5d2c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function familyLabel(f: ClairFamily): string {
  return f === 'head' ? 'mind senses (seeing · hearing · knowing)'
       : f === 'heart' ? 'heart senses (feeling · empathy)'
       : 'body senses (smell · taste · touch)'
}

// ---------- per-clair page ----------

export function clairPageHTML(slug: string): string {
  const c = CLAIR_BY_SLUG[slug]
  if (!c) return ''
  const accent = FAMILY_ACCENT[c.family]
  const readingHref = `/gab44/reading?ref=clair-${slug}`

  const title = `${escapeHtml(c.display)} — Signs, Gift, Shadow &amp; How to Develop · gab44 ✨`
  const description = `${c.display}: what it is, the 5 signs you have it, how it shows up day-to-day, in love, in work, the gift, the shadow, how to develop it. Hand-written, honest about the science.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Clair Senses', item: `${SITE_URL}/gab44/clairs` },
          { '@type': 'ListItem', position: 3, name: c.display, item: `${SITE_URL}/gab44/clairs/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${c.display}: signs, gift, shadow, development`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/clairs/${slug}`,
        about: `${c.display}, ${c.short}, psychic abilities, intuition, clair senses`
      }
    ]
  })

  const otherClairsHtml = CLAIRS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family]
    return `<a class="ph-mini" href="/gab44/clairs/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.short)}</span><span class="elem">${escapeHtml(q.english)}</span></a>`
  }).join('\n        ')

  const signsHtml = c.signs_you_have_it.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/clairs/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/clairs/${slug}" />
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
  .family-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .english-pill { display: inline-block; background: var(--bg-1); border: 1px solid var(--line);
    color: var(--fg-dim); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 12px;
    margin-left: 6px; }
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
  .origin-strip { background: var(--bg-2); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 16px; margin: 14px 0; font-size: 13px; color: var(--fg-dim); font-style: italic; }
  .origin-strip strong { color: var(--fg); font-style: normal; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel ul { margin: 0; padding-left: 20px; }
  .signs-panel li { font-size: 14px; color: var(--fg); margin-bottom: 8px; line-height: 1.55; }
  .signs-panel li:last-child { margin-bottom: 0; }
  .signs-panel p { margin: 0; font-size: 15px; line-height: 1.65; }
  .ud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ud-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .ud-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ud-card.shadow { border-left-color: var(--c2); }
  .ud-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ud-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .develop-card { background: linear-gradient(135deg, ${accent.c1}10 0%, ${accent.c2}10 100%);
    border: 1px solid var(--c1); border-radius: 14px; padding: 22px 24px; margin: 14px 0; }
  .develop-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .develop-card p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
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
  .other-clairs { margin: 36px 0 22px; }
  .other-clairs h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .clairs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .clairs-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 14px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 12px; color: var(--accent); font-weight: 700; }
  .ph-mini .elem { font-size: 10px; color: var(--fg-muted); letter-spacing: 0.05em; }
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
      <a href="/gab44/clairs">all 8 clair senses</a>
      <a href="/gab44/empath">empath types</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ clair sense</div>
    <span class="family-pill">${escapeHtml(c.family)} channel</span>
    <span class="english-pill">${escapeHtml(c.english)}</span>
    <h1><span class="sym">${c.emoji}</span>${escapeHtml(c.display)}</h1>
    <p class="sub">${escapeHtml(c.one_liner)}</p>

    <article class="core-card">
      <span class="label">what ${escapeHtml(c.short)} is</span>
      <p class="text">${escapeHtml(c.meaning)}</p>
    </article>
    <div class="origin-strip"><strong>name origin:</strong> ${escapeHtml(c.origin)}</div>

    <h2><span class="icon">⚪</span>signs you have it</h2>
    <div class="signs-panel">
      <h3>five recognition signs</h3>
      <ul>
        ${signsHtml}
      </ul>
    </div>

    <h2><span class="icon">⏱️</span>how it shows up day-to-day</h2>
    <div class="signs-panel">
      <h3>the daily signal</h3>
      <p>${escapeHtml(c.day_to_day)}</p>
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

    <h2><span class="icon">🎁</span>the gift &amp; the shadow</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>the gift</h3>
        <p>${escapeHtml(c.the_gift)}</p>
      </div>
      <div class="ud-card shadow">
        <h3>the shadow</h3>
        <p>${escapeHtml(c.the_shadow)}</p>
      </div>
    </div>

    <h2><span class="icon">🌱</span>how to develop it</h2>
    <div class="develop-card">
      <h3>the practice</h3>
      <p>${escapeHtml(c.how_to_develop)}</p>
    </div>

    <h2><span class="icon">🌿</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${c.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(c.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">the body-energy that grounds this clair</div>
      </a>
      <a class="pair-card" href="/healing/script/${c.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(c.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">a meditation that opens this channel</div>
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
      <h2>✉️ Want to know which clair sense is your strongest?</h2>
      <p>This page maps the channel. A <strong>personal reading</strong> looks at your specific chart and intuitive history and tells you which clair is your primary, which is your secondary, and the practice for opening the third over the next year. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/clairs">all 8 clair senses</a> · <a href="/gab44/empath">7 empath types</a> · <a href="/gab44/chakras/${c.pair_with_chakra_slug}">${escapeHtml(c.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/healing/script/${c.pair_with_sound_slug}">${escapeHtml(c.pair_with_sound_slug.replace(/-/g, ' '))} meditation</a> · <a href="/gab44/dreams">archetypal dreams</a>.
    </div>

    <section class="other-clairs">
      <h3>the other 7 clair senses</h3>
      <div class="clairs-grid">
        ${otherClairsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

// ---------- index ----------

export function clairsIndexHTML(): string {
  const title = `The 8 Clair Senses — Are You Psychic? Find Your Channel · gab44 ✨`
  const description = `All 8 clair senses (psychic abilities) explained — clairvoyance, clairaudience, claircognizance, clairsentience, clairempathy, clairalience, clairgustance, clairtangency. Signs, gift, shadow, how to develop.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Clair Senses', item: `${SITE_URL}/gab44/clairs` }
        ]
      },
      {
        '@type': 'CollectionPage',
        name: 'The 8 Clair Senses — psychic abilities explained',
        description: description.substring(0, 280),
        url: `${SITE_URL}/gab44/clairs`
      }
    ]
  })

  // Group by family
  const FAMILIES: { key: ClairFamily; label: string; sublabel: string }[] = [
    { key: 'head',  label: 'Mind senses',  sublabel: 'seeing · hearing · knowing — the clairs that arrive through the head' },
    { key: 'heart', label: 'Heart senses', sublabel: 'feeling · empathy — the clairs that arrive through the heart' },
    { key: 'body',  label: 'Body senses',  sublabel: 'smell · taste · touch — the clairs that arrive through the most embodied channels' }
  ]

  const familyRowsHtml = FAMILIES.map((fam) => {
    const inFam = CLAIRS.filter((c) => c.family === fam.key)
    const cards = inFam.map((c) => {
      const acc = FAMILY_ACCENT[c.family]
      return `<a class="clair-card" href="/gab44/clairs/${c.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
        <div class="cc-emoji">${c.emoji}</div>
        <div class="cc-title">${escapeHtml(c.short)}</div>
        <div class="cc-english">${escapeHtml(c.english)}</div>
        <div class="cc-tag">${escapeHtml(c.one_liner.substring(0, 90))}…</div>
      </a>`
    }).join('\n        ')
    return `<div class="family-row">
      <h3 class="family-label">${escapeHtml(fam.label)}</h3>
      <p class="family-sub">${escapeHtml(fam.sublabel)}</p>
      <div class="family-grid">
        ${cards}
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
<link rel="canonical" href="${SITE_URL}/gab44/clairs" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/clairs" />
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
      radial-gradient(1100px 600px at -10% -10%, #7a6ec61c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, #dba2a21c 0%, transparent 60%),
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
    background: linear-gradient(135deg, #7a6ec6, #dba2a2); box-shadow: 0 0 0 4px rgba(122,110,198,0.18); }
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
  .family-row { margin-bottom: 32px; }
  .family-label { font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg); margin: 0 0 6px; font-weight: 700; padding-left: 4px; }
  .family-sub { font-size: 13px; color: var(--fg-dim); margin: 0 0 14px; padding-left: 4px; font-style: italic; }
  .family-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  @media (max-width: 600px) { .family-grid { grid-template-columns: 1fr; } }
  .clair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 16px; text-decoration: none; transition: border-color 0.15s, transform 0.05s;
    border-top: 4px solid; border-image: linear-gradient(90deg, var(--c1), var(--c2)) 1;
    display: block; }
  .clair-card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .cc-emoji { font-size: 28px; margin-bottom: 6px; }
  .cc-title { font-size: 16px; font-weight: 800; color: var(--accent); margin-bottom: 2px; }
  .cc-english { font-size: 11px; color: var(--fg-muted); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; }
  .cc-tag { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
  .reading-cta {
    background: linear-gradient(135deg, #7a6ec6 0%, #3d3478 100%);
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
      <a href="/gab44/empath">empath types</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/dreams">dreams</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ the clair senses</div>
    <h1><span class="sym">🪬</span>The 8 Clair Senses</h1>
    <p class="sub">Every human has at least one. Most people have a primary plus a secondary. The clairs are the <em>channels</em> through which intuition speaks — knowing which is yours is the first step in trusting the signal.</p>

    <article class="intro-card">
      <span class="label">how to read this page</span>
      <p>"Clair" is the French word for *clear*. The clair senses are the <em>perceptual channels</em> through which intuitive information arrives — clear seeing, clear hearing, clear knowing, clear feeling. Distinct from empath types (which are about which kind of <em>signal</em> you are sensitive to: emotional, physical, intuitive, etc) and from chakras (which are about energy <em>centers</em> in the body), the clairs are about <em>how the message gets in</em>.</p>
      <p>Most people are strong in one or two of these channels and dimly aware of the others. Read each card below; the one (or two) where you find yourself thinking "wait — that\'s just how my brain works, I thought everyone did that" is almost certainly your primary clair.</p>
    </article>

    ${familyRowsHtml}

    <section class="reading-cta">
      <h2>✉️ Want to know which clair is your strongest?</h2>
      <p>A <strong>personal reading</strong> looks at your chart and your intuitive history and names your primary clair, your secondary, the one being asked to grow this year, and the daily practice that would open it. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="/gab44/reading?ref=clair-index">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/empath">7 empath types</a> · <a href="/gab44/chakras">7 chakras</a> · <a href="/gab44/dreams">archetypal dreams</a> · <a href="/gab44/auras">aura colors</a> · <a href="/gab44/symbols">spiritual symbols</a>.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
