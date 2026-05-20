// Spirit Animals SEO funnel — /gab44/spirit-animals (index) + /gab44/spirit-animals/{slug}
// (12 animal guides: wolf, eagle, bear, owl, lion, hawk, snake, butterfly, deer,
// fox, horse, hummingbird). Distinct keyword cluster from Chinese zodiac —
// shamanic / Native-American / power-animal framing rather than year-of-the-animal.
// Targets evergreen high-volume queries: "wolf spirit animal meaning",
// "what does it mean when an owl appears to you", "butterfly symbolism",
// "fox spirit animal", "deer in dreams", "hawk symbolism", "what is my spirit animal".
// These are *appearance* searches — somebody saw an animal in real life or in a
// dream and wants the meaning right now. Highest-intent emotional searches in
// the spiritual cluster.
//
// Each animal guide is ~700 words across 9 sections (meaning, when this animal
// appears to you, gifts, shadows, in love, in work, the lesson, pair-with
// chakra/sound/crystal, key questions). Cross-funnels into BOTH revenue lanes —
// every page links to /healing audio (Phase 1A) AND /gab44/reading?ref=spirit-{slug}
// ($9 Phase 1D). Routes BEFORE the bare /gab44/:sign daily route to avoid Hono
// RegExpRouter greedy-match. Zero LLM cost — content baked in.
//
// Note: snake and horse appear in BOTH the Chinese zodiac funnel AND here. That's
// intentional — different frame, different keyword cluster. The Chinese page
// answers "year of the snake personality"; the spirit-animal page answers "snake
// appeared in my dream what does it mean". No content duplication.

import { SITE_URL } from '@/lib/identity'

export interface SpiritAnimalProfile {
  slug: string
  name: string
  emoji: string
  archetype: string                  // "the wise one", "the warrior", "the messenger"
  realm: 'earth' | 'air' | 'water' | 'fire'  // where this animal lives — drives the gradient
  one_liner: string
  meaning: string                    // big paragraph
  when_it_appears: string            // when this animal shows up for you (in life, dreams, repeated sightings)
  gifts: [string, string, string]
  shadows: [string, string, string]
  in_love: string
  in_work: string
  the_lesson: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string             // /healing/script/{slug} → letting-go|abundance|anxiety|sleep|deep-healing
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const SPIRIT_ANIMALS: SpiritAnimalProfile[] = [
  {
    slug: 'wolf',
    name: 'Wolf',
    emoji: '🐺',
    archetype: 'the loyal teacher',
    realm: 'earth',
    one_liner: 'Sharp instinct in a soft heart. The pack-keeper, the path-finder, the one who teaches by walking ahead.',
    meaning: 'The Wolf is the spirit-animal of deep instinct paired with deep loyalty. In almost every tradition that meets the wolf — Celtic, Norse, Native American, Mongolian, Japanese — the wolf is the teacher: not the gentle teacher who waits for you to be ready, but the teacher who walks ahead and trusts that you will keep up. Wolves move in packs but they also know solitude — long, brutal solitudes — and they come back from those solitudes wiser and quieter, not bitter. When Wolf comes into your life as a spirit animal, it usually means two things at once: you are being asked to trust your gut more (the wolf is one of the most sharply-instinctive animals in the natural world), and you are being asked to choose your pack more carefully. Not everyone deserves the loyalty you give. Wolf-people are often quietly fierce, very protective of the people they love, and have a low patience for performance — for the social games other animals seem to play.',
    when_it_appears: 'Wolf often appears when you are in transition — leaving a job, a relationship, a town, a version of yourself — and the path is unclear. A wolf in a dream is almost always a guide, not a threat (even if it scares you). Repeated wolf imagery in real life — a wolf logo at a key moment, a wolf documentary that won\'t leave you alone, a wolf showing up in art across a single week — usually means a teaching is in motion. The wolf is also the animal of grief work: it appears for the people who are learning to be alone without being lonely.',
    gifts: [
      'Sharp instinct — Wolf-people read situations in their body before their mind catches up.',
      'Fierce loyalty — they are the friend who shows up when everyone else has gone quiet.',
      'Comfort with solitude — they can do their own depth-work without needing constant company.'
    ],
    shadows: [
      'Snap-judgment — the same instinct that protects them sometimes locks them out of seeing nuance.',
      'Lone-wolf isolation — using independence as a way to avoid the vulnerability of being known.',
      'Over-protectiveness — confusing love with guarding, sometimes smothering the people they\'re trying to keep safe.'
    ],
    in_love: 'Wolf-people love deeply and slowly. They\'re not the partner who falls fast and loud — they\'re the partner who watches you for months, decides quietly that you are pack, and from that point forward shows up with a fierce, unwavering loyalty. They want a partner who can both be tender AND walk through the wilderness with them. The thing they cannot tolerate is performative love — they smell it instantly, and they back away.',
    in_work: 'Wolf-people thrive in roles that reward instinct, depth, and small-team trust — therapy, investigation, music, writing, coaching, founder roles. They do NOT thrive in roles that reward conformity or constant performance. They hate office politics. They\'d rather be in a pack of three doing real work than on a team of fifty doing theatre.',
    the_lesson: 'Trust your instinct — but make sure the people you call pack have actually earned it. Loyalty is a gift; do not give it cheap.',
    pair_with_chakra: 'Sacral chakra — the gut, the intuition, the felt sense that knows before words.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — for the loneliness of being the one who sees too clearly.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Smoky quartz (grounds the instinct) or moonstone (softens the lone-wolf edge)',
    key_questions: [
      'Where is my gut telling me something my mind hasn\'t admitted yet?',
      'Who in my life have I been calling pack who hasn\'t actually earned that name?',
      'Where is solitude protecting me, and where is it just keeping me from being known?'
    ]
  },
  {
    slug: 'eagle',
    name: 'Eagle',
    emoji: '🦅',
    archetype: 'the visionary',
    realm: 'air',
    one_liner: 'Sky-eye, big-picture view. The one who sees the whole landscape and reminds you that you are bigger than this hour.',
    meaning: 'The Eagle is the spirit-animal of clear sight and high perspective. In Native American tradition, the eagle is the messenger between earth and the Creator — the one whose feathers carry prayers up. In ancient Egypt, in Rome, in Greece, in Mongolia, the eagle is the bird of the sun, the bird of sovereignty, the bird that flies higher than any other and from up there can see what no ground-bound creature can see. When Eagle comes to you as a spirit animal, the message is almost always: zoom out. You\'re in the weeds, you\'re lost in the trees, you\'re obsessing over the small offense of last Tuesday — and Eagle is asking you to fly up and see the shape of your whole life. Eagle-people are often visionaries: founders, strategists, prophets, big-picture artists. They can hold a vision other people can\'t see yet, and they can hold it long enough for it to come true.',
    when_it_appears: 'Eagle appears when you have been stuck in the small frame for too long. A repeated eagle sighting, an eagle in a dream, an eagle that shows up in a feather found on a trail — these are spirit nudging you to take the high view. Eagle also appears at moments of decision, when you are trying to choose between two roads and you keep zoom-staring at the gravel; Eagle says: see where each road actually leads, in 5 years, in 10 years.',
    gifts: [
      'Big-picture clarity — they see patterns and trajectories most people miss.',
      'Courage of high places — they can hold a vision through long lonely stretches.',
      'Strategic stillness — they wait, they watch, and they strike when the moment is right; not before, not after.'
    ],
    shadows: [
      'Detachment — flying so high they lose touch with the bodies and feelings of people on the ground.',
      'Spiritual bypass — using "the bigger picture" to avoid the messy small picture they\'re actually in.',
      'Arrogance — believing the high view is the only true view, dismissing those who live close to the ground.'
    ],
    in_love: 'Eagle-people love with vision — they fall in love with the *trajectory* of a person, what they could become, the life they could build together. The risk is loving the projection more than the person. The gift is partners who feel deeply seen for who they are *becoming*. Eagles need partners who can fly with them but also pull them back to the ground when needed.',
    in_work: 'Eagle-people are founders, strategists, visionaries. They struggle in execution-heavy roles where the daily grind drowns out the vision. They thrive when paired with a grounded operator who can do the small things while Eagle holds the big map.',
    the_lesson: 'The high view is real and worth defending. But you are also a body, also a heart, also living an actual day on actual ground. Come down sometimes. Land.',
    pair_with_chakra: 'Third-eye chakra — vision, perspective, the inner sight that sees across time.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — to soften the edges of seeing too much, too clearly.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Lapis lazuli (the eagle stone of vision) or clear quartz (amplifies the seeing)',
    key_questions: [
      'What is the bigger pattern I\'ve been missing because I\'m too close to the trees?',
      'Where have I been so high that I forgot to feel my feet on the ground?',
      'What vision am I being asked to hold, even though no one else can see it yet?'
    ]
  },
  {
    slug: 'bear',
    name: 'Bear',
    emoji: '🐻',
    archetype: 'the inward warrior',
    realm: 'earth',
    one_liner: 'Strength that doesn\'t need to perform. The one who teaches you to go inside, to rest, to come back stronger.',
    meaning: 'The Bear is the spirit-animal of grounded strength and the medicine of the cave. In Norse tradition, in Slavic tradition, in Native American tradition, in Korean tradition, the bear is the animal of inwardness — the one who goes into the dark of winter and comes out in spring with the answer. Bear-medicine is not the strength of the lion (loud, sovereign, public). It is the strength of the body that knows when to fight and when to retreat. Bear teaches that going inward is not weakness — it is, in fact, where real power is gathered. People with bear medicine are often quiet, slow to anger but devastating when angered, deeply protective of family and den, and absolutely not interested in performance. Bear is also the animal of healers, herbalists, and quiet medicine carriers — there\'s a reason "bear medicine" is one of the most common phrases in indigenous traditions for the healer-archetype.',
    when_it_appears: 'Bear appears when you are being asked to retreat, to go into your cave, to rest, to think — not to push harder. A bear in a dream during a busy season is almost always a message: the answer will not come from more effort, it will come from going inside. Bear also appears for people in the grief of huge transitions — the death of a parent, the end of a long relationship, the moment when an old self is dying — when the work is to hibernate, to integrate, to let the soul catch up to the body.',
    gifts: [
      'Quiet strength — they don\'t need to prove they are strong; they just are.',
      'Capacity for depth-work — they can do the long, slow, lonely inner work most people skip.',
      'Fierce protectiveness — for the people, places, and projects they consider den, they will go to war.'
    ],
    shadows: [
      'Over-retreating — disappearing into the cave for so long the people who love them lose connection.',
      'Slow-to-anger / slow-to-act — sometimes the cave becomes a hiding place, not a recharging place.',
      'Refusing help — bears are proud, and they sometimes confuse needing help with being weak.'
    ],
    in_love: 'Bear-people love in a way that is steady, deep, and very physical (they need touch, presence, body-near-body). They are not the partner who throws fireworks; they are the partner who builds the den. The risk is going into the cave when conflict comes and leaving the partner outside. The gift is a love that doesn\'t leave when winter comes.',
    in_work: 'Bear-people thrive in deep, focused, often solitary work — therapists, healers, scientists, monks, deep-research roles, craftspeople. They suffer in fast-paced performative work environments. They do their best work in long uninterrupted stretches, with a real cave to disappear into and emerge from.',
    the_lesson: 'Going inward is not the same as running away. You are allowed to retreat, to rest, to take the long winter — but you have to come back out when spring comes. The cave is for healing, not for hiding.',
    pair_with_chakra: 'Root chakra — the body, the bones, the ground itself.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Sleep — for the long restorative cave-time bear-medicine asks for.',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Hematite (the iron in the bones) or black tourmaline (the cave\'s protection)',
    key_questions: [
      'Am I being asked to retreat, or am I being asked to push through? Which one is this?',
      'Where have I confused needing help with being weak?',
      'What does my cave look like, and how long has it been since I went inside on purpose?'
    ]
  },
  {
    slug: 'owl',
    name: 'Owl',
    emoji: '🦉',
    archetype: 'the night-seer',
    realm: 'air',
    one_liner: 'The seer of what others miss. The one who flies in the dark and tells you what is hidden.',
    meaning: 'The Owl is the spirit-animal of hidden knowledge, intuition, and the wisdom that comes from looking at what most people refuse to see. The owl flies at night — when most birds are asleep, when the world has gone quiet, when shadows hide things that don\'t want to be seen. In Greek tradition, the owl is the bird of Athena (wisdom). In Egyptian tradition, the owl is the night-traveler. In Native American tradition, the owl is sometimes a death-omen but more often a truth-teller: the bird that brings you the message you have been avoiding. Owl-people are often the ones in their family or workplace who *see what nobody else sees* — the affair, the lie, the early sign of illness, the unspoken resentment in the room. This is a lonely gift. People love the owl when it confirms what they already suspected; they hate the owl when it tells them something they didn\'t want to know.',
    when_it_appears: 'Owl appears when there is something hidden you need to see. A repeated owl sighting (especially at night, especially seeing the bird itself rather than just hearing it) often coincides with a moment when you are being asked to look squarely at a truth you\'ve been politely refusing to see. Owl in a dream is almost always a messenger of an inner knowing that has been knocking. Owl can also be a death-omen in some traditions — but the death is usually the death of an illusion, a relationship, or an old version of yourself, not literal death.',
    gifts: [
      'Penetrating insight — they see through performance, through politeness, through cover stories.',
      'Comfort with the dark — they\'re not afraid of grief, illness, or shadow material.',
      'Truth-telling — they will tell you the thing nobody else has the courage to say.'
    ],
    shadows: [
      'Cynicism — having seen too much, sometimes losing the capacity for innocent delight.',
      'Truth-bombing — telling truths people aren\'t ready for, in tones that don\'t leave room for grace.',
      'Isolation — being the only one in the room who sees the thing tends to make the room avoid you.'
    ],
    in_love: 'Owl-people love a partner they can be fully honest with. They cannot tolerate pretending — small white lies, performative niceness, papering over conflict. They want a partner who can sit with them in the dark and tell each other the truth. The risk: making the partner feel constantly examined. The gift: a relationship where nothing has to be hidden.',
    in_work: 'Owl-people thrive in roles that reward seeing-what-others-miss — investigators, therapists, editors, coaches, founders who spot blind spots, audit roles. They struggle in performance-heavy roles where you have to pretend things are fine when they\'re not.',
    the_lesson: 'You see what others don\'t. That is a gift, and it is also a responsibility. Speak the truth — but find a way to speak it kindly, on time, and in a tone that gives the other person room to receive it.',
    pair_with_chakra: 'Third-eye chakra — the inner seeing that doesn\'t need light.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — to soften the nervous system that has seen too much.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Labradorite (the night-stone of magic) or amethyst (calms the over-active inner sight)',
    key_questions: [
      'What truth have I been seeing but refusing to say out loud?',
      'Where have I told a truth in a tone that left no room for grace?',
      'What is my night vision telling me right now, that my daylight self keeps dismissing?'
    ]
  },
  {
    slug: 'lion',
    name: 'Lion',
    emoji: '🦁',
    archetype: 'the sovereign',
    realm: 'fire',
    one_liner: 'Heart-fire, presence, dignity. The one who reminds you of your own throne.',
    meaning: 'The Lion is the spirit-animal of sovereignty, dignity, and unapologetic presence. In every tradition the lion has met — Egyptian, Sumerian, African, Greek, Christian, Hindu — the lion is the king, the queen, the protector of the realm. Lion does not perform power. Lion does not earn power. Lion *is* power, and it is up to the world to either accept that or get out of the way. When Lion comes to you as a spirit animal, the message is almost always about reclaiming a sovereignty you have given away. You have been shrinking, you have been apologizing for taking up space, you have been letting someone else write your story — Lion is here to remind you that you have a throne, and you don\'t need permission to sit on it. Lion-people are warm but firm, generous but never small, and absolutely will not be talked over. They are also natural protectors — the lion sleeps most of the day, but when the pride is threatened, the lion moves.',
    when_it_appears: 'Lion appears when you have been playing small. Repeated lion imagery, a lion in a dream, the song that won\'t leave you alone with a lion in the lyric — Lion is calling you back to your full size. Lion also appears at moments of leadership transition: stepping into a role you\'re scared of, taking up space at the front of the room, becoming the parent your kid actually needs.',
    gifts: [
      'Natural authority — people listen when they speak, even before they\'ve earned it on paper.',
      'Generous warmth — Lion-people give heat freely; their love is tangible, you can feel it across a room.',
      'Capacity to hold a room — they can lead, mediate, and command without raising their voice.'
    ],
    shadows: [
      'Pride that won\'t bend — Lion-people sometimes confuse dignity with rigidity and refuse to apologize when they should.',
      'Need for the spotlight — the throne can become an addiction; Lion sometimes can\'t share the stage.',
      'Roar before listen — leading from heat rather than ear, missing what the room actually needs.'
    ],
    in_love: 'Lion-people love generously and unapologetically — they make sure you know you are theirs. They want a partner who is not threatened by their warmth and is also not eclipsed by it. They cannot tolerate small loves, lukewarm loves, half-hearted loves. They want fire that meets fire. Risk: pride preventing repair. Gift: a love that the whole pride feels safe inside.',
    in_work: 'Lion-people thrive in leadership roles, performance roles, founder roles — anywhere there is a stage and a story to hold. They do best when their warmth is allowed to lead — autocratic leadership eats Lion alive over time.',
    the_lesson: 'You have a throne. Sit on it. But remember the throne exists to protect the pride, not the king.',
    pair_with_chakra: 'Solar plexus chakra — the seat of personal power, the inner sun.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — for the heat of believing you deserve a wide life.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine (the sun-stone of confidence) or carnelian (the warrior\'s heart-fire)',
    key_questions: [
      'Where have I been playing small to make someone else more comfortable?',
      'What throne is mine to sit on that I have been refusing to claim?',
      'When my pride keeps me from apologizing, who pays the price?'
    ]
  },
  {
    slug: 'hawk',
    name: 'Hawk',
    emoji: '🦆',
    archetype: 'the messenger',
    realm: 'air',
    one_liner: 'The arrow-eye. The one who brings you a single sharp message — pay attention.',
    meaning: 'The Hawk is the spirit-animal of focused vision, signs, and messengers. Where the eagle gives you the panoramic view, the hawk gives you the single sharp arrow — the one detail you most need to see, in this exact moment. Across many indigenous traditions, hawks are seen as the messengers of spirit, the bird whose appearance stops you in your tracks and asks: pay attention to *this*. Hawk has the sharpest eyesight of the bird kingdom (8x better than humans), and that physical fact carries the spiritual message: you have been missing things that are right in front of you. People with hawk-medicine are often unusually focused, unusually able to tune everything else out and lock onto the one thing that matters, and unusually well-served by signs, synchronicities, and gut messages from the unseen.',
    when_it_appears: 'Hawk appears as a sign, almost always. A hawk that flies overhead at the exact moment you ask a question, a hawk on a fencepost on the day of a hard decision, a hawk feather found on a path — these are messengers, and Hawk-people learn to read them. Hawk also appears when you have been spreading yourself thin and need to focus down: stop trying to see everything, focus on the one thing.',
    gifts: [
      'Razor focus — they can drop everything else and lock onto the one thing.',
      'Sign-literacy — they\'re the friend who notices the synchronicities others miss.',
      'Speed of decision — once they see what to do, they don\'t waste months deliberating.'
    ],
    shadows: [
      'Tunnel-vision — locking onto the wrong thing and missing the bigger context.',
      'Over-reading signs — turning every coincidence into cosmic-significance until decision-paralysis sets in.',
      'Impatience — Hawk\'s speed sometimes runs ahead of where the people around them can move.'
    ],
    in_love: 'Hawk-people fall fast and decide fast. They tend to know in the first hour whether someone is theirs or not. Once decided, they fly straight. They want a partner who is a messenger too — who notices things, who tells the truth quickly, who doesn\'t make them dig.',
    in_work: 'Hawk-people thrive in roles that reward focus and decisiveness — surgeons, snipers (literal or metaphorical), founders, traders, editors, anyone who has to lock onto the one thing in a sea of noise. They struggle in roles that ask them to hold many balls in the air at once for long periods.',
    the_lesson: 'Pay attention. The signs are real. But also — locking onto the wrong sign is just as costly as missing them all. Discernment is the next level of vision.',
    pair_with_chakra: 'Third-eye chakra — the focused inner sight, the arrow-eye.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — to clear the over-reading, the false signs, the noise.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Tiger\'s eye (the focus stone) or hawk\'s eye (literally — for sharper sign-reading)',
    key_questions: [
      'What sign have I been seeing that I have been refusing to follow?',
      'Where have I locked onto the wrong target out of impatience?',
      'What is the one thing in front of me right now that, if I focused only on that, would change everything?'
    ]
  },
  {
    slug: 'snake',
    name: 'Snake',
    emoji: '🐍',
    archetype: 'the shedder',
    realm: 'earth',
    one_liner: 'Death and rebirth in the same body. The one who teaches you to leave behind the skin you no longer fit.',
    meaning: 'The Snake is the spirit-animal of transformation, healing, and shedding. In ancient Egypt, the snake (uraeus) wraps the pharaoh\'s crown — the symbol of sovereignty and rebirth. In Greek tradition, the snake is the symbol of medicine itself (the rod of Asclepius, the caduceus). In Hindu tradition, the kundalini is a serpent at the base of the spine that rises through the chakras toward enlightenment. In Mesoamerica, Quetzalcoatl is the feathered serpent — sky and earth fused. The thing every tradition that meets the snake agrees on: snake medicine is medicine of *shedding*. Snake outgrows itself, sheds the old skin in a single complete molt, and walks out larger, brighter, and unrecognizable. People with snake medicine are often the ones who go through dramatic transformations — coming out, leaving a religion, leaving a long marriage, recovering from addiction, surviving illness — and who come out the other side of those transformations not bitter but luminous. Snake teaches that you cannot grow without leaving the old skin behind. Trying to keep the old skin while growing the new one is what makes us sick.',
    when_it_appears: 'Snake appears when there is a skin you need to shed. A snake in a dream is almost never a threat (despite the cultural fear) — it\'s an announcement: a shedding is coming, or has already started. Repeated snake imagery, snake symbols showing up in your day, often coincide with a season of major transformation: leaving a job, ending a relationship, recovering from illness, releasing an identity that no longer fits.',
    gifts: [
      'Capacity for total transformation — they can become a different person without losing their core.',
      'Healing presence — Snake-medicine people are often natural healers, therapists, and teachers of others in transformation.',
      'Comfort with the dirty parts of growth — the molting, the awkward in-between, the not-yet-finished new skin.'
    ],
    shadows: [
      'Restless shedding — leaving things too quickly, before the lessons are finished.',
      'Cold-bloodedness — sometimes mistaking detachment for healing, walking away from people who actually mattered.',
      'Stinging when cornered — the venomous response when grace would have done the work.'
    ],
    in_love: 'Snake-people are partners who keep growing — and who require a partner who can grow with them. They can be deeply loyal, but loyal *in motion* — staying with someone through their transformations, expecting the same in return. They cannot tolerate stagnation. The risk: shedding so fast the partner can\'t keep up. The gift: a relationship that keeps evolving instead of dying.',
    in_work: 'Snake-people thrive in roles that involve transformation — therapists, healers, coaches, midwives (literal and metaphorical), people who help others shed old selves. They suffer in static jobs where the role hasn\'t changed in five years and the body knows it should have.',
    the_lesson: 'What you are outgrowing has to be released. Trying to be the new you while still wearing the old skin is the most exhausting thing you can do.',
    pair_with_chakra: 'Sacral chakra — the seat of transformation, the kundalini\'s first home.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — for the courage to shed what no longer fits.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Snakeskin agate (literally) or malachite (the transformation stone)',
    key_questions: [
      'What skin am I wearing that no longer fits me?',
      'Where am I shedding too fast — leaving things before the lesson finishes?',
      'What transformation has already started in me that I haven\'t yet admitted out loud?'
    ]
  },
  {
    slug: 'butterfly',
    name: 'Butterfly',
    emoji: '🦋',
    archetype: 'the soul-bearer',
    realm: 'air',
    one_liner: 'Total transformation, lightness, the soul made visible. The one who teaches you that the cocoon was always the point.',
    meaning: 'The Butterfly is the spirit-animal of transformation by total dissolution. Where the snake sheds, the butterfly *liquefies* — inside the cocoon, the caterpillar literally turns into mush before reorganizing into a butterfly. There is no hold-some-of-the-old-self version of this transformation. The caterpillar dies. Something new rises. In ancient Greek, the same word — *psyche* — meant both "butterfly" and "soul," because the Greeks understood: the butterfly is what the soul looks like, freed from the body. In Mexican tradition, monarchs returning each year are the souls of ancestors coming back to visit. In Aztec tradition, butterflies are the souls of warriors returning from battle. When Butterfly comes to you as a spirit animal, the message is: a transformation has begun, and you are deeper into the cocoon than you realize. The discomfort you\'re feeling is not death (even though it feels like it). It is the chrysalis. People with butterfly medicine are often the ones whose lives have been marked by total reinventions — the artist who used to be a banker, the activist who used to be a corporate lawyer, the mother who used to be a partygoer — and they carry the others around them through similar transformations.',
    when_it_appears: 'Butterfly appears in the middle of a transformation, not at the start and not at the end. A butterfly that follows you on a walk, a butterfly that lands on your hand, repeated butterfly imagery in the strangest places — this is spirit confirming: yes, what is happening to you right now is the cocoon. You are not broken. You are becoming. Butterflies are also commonly associated with visits from the deceased — a butterfly that appears at a funeral or anniversary often carries that meaning.',
    gifts: [
      'Capacity for total reinvention — they can become unrecognizable from who they were five years ago.',
      'Lightness in the middle of heavy seasons — they carry joy and color even through their own dissolution.',
      'Beauty as a serious thing — they understand that beauty is medicine, not decoration.'
    ],
    shadows: [
      'Flightiness — moving on to the next bloom too fast, never developing roots.',
      'Avoidance of the cocoon — wanting transformation without doing the messy mush-stage.',
      'Disconnection from grounded reality — living so much in becoming that they forget to land.'
    ],
    in_love: 'Butterfly-people love with lightness, color, and a free-flying tenderness. The risk: not being able to stay through the heavy seasons of a partnership. The gift: bringing joy, color, and the reminder that love does not have to be heavy to be real. They want a partner who can witness their transformations without trying to keep them as the caterpillar version.',
    in_work: 'Butterfly-people thrive in creative roles, in roles that allow reinvention, in roles that touch beauty — artists, designers, performers, writers, teachers. They struggle in roles that require them to be the same caterpillar for thirty years.',
    the_lesson: 'The cocoon is not failure. The mush is not breakdown. Trust the dissolution; the butterfly is already forming.',
    pair_with_chakra: 'Heart chakra — the soft middle, where transformation actually happens.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for the courage to dissolve into what comes next.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (the heart through transformation) or amethyst (cocoon protection)',
    key_questions: [
      'Am I in the cocoon right now? What does that mean for what I should and shouldn\'t do?',
      'Where have I been trying to skip the messy middle of my own becoming?',
      'What new self is forming in me that I have not yet given permission to land?'
    ]
  },
  {
    slug: 'deer',
    name: 'Deer',
    emoji: '🦌',
    archetype: 'the gentle one',
    realm: 'earth',
    one_liner: 'Soft strength. The one who teaches you that gentleness is not weakness — and that grace, calmly held, can move mountains.',
    meaning: 'The Deer is the spirit-animal of gentleness, sensitivity, and the strength of grace. In Celtic tradition, the white stag is the messenger of the otherworld. In Buddhist tradition, the deer is the witness of the Buddha\'s first sermon — the one who came close to listen. In Christian tradition, the hart panting for water is the soul longing for the divine. Deer-medicine is the medicine that says: you don\'t have to push, you don\'t have to make it happen, you don\'t have to fight. Gentleness will get you there. The deer\'s strength is not in horns or claws — it\'s in the impossibly delicate hooves that can balance on the edge of a cliff, the alert ears that hear what nobody else hears, the quiet that draws the spirit-world to you. People with deer medicine are often the highly sensitive ones in their families — the ones who feel everyone else\'s feelings, who startle easily, who are accused of being "too soft" — and Deer is here to tell them: that softness is the gift. The world doesn\'t need more bulldozers. It needs more deer.',
    when_it_appears: 'Deer appears when you have been forcing things — pushing through where you should have been receiving, fighting where you should have been listening, hardening where you should have stayed soft. A deer that lets you come close, a deer in a dream, repeated deer sightings in places you wouldn\'t expect — Deer is asking you to soften. Deer often appears in seasons when sensitivity is being asked of you: parenting a hurting child, supporting a friend through grief, being with a dying parent.',
    gifts: [
      'Deep sensitivity — they feel what others don\'t feel, and that information is real intelligence.',
      'Capacity for gentleness in heated rooms — they can de-escalate with their presence alone.',
      'Listening — they are excellent at hearing what is being said *underneath* what is being said.'
    ],
    shadows: [
      'Over-startling — the highly sensitive nervous system gets stuck in alarm and exhausts itself.',
      'Mistaking gentleness for boundaries — being too soft to say no, getting walked on.',
      'People-pleasing — the deer\'s instinct to keep the peace can override the deer\'s own truth.'
    ],
    in_love: 'Deer-people love with a tenderness that is rare and quietly devastating. They notice tiny things, remember offhand comments, and love by attending. They need a partner who is gentle with them in return — Deer cannot be loved roughly. The risk is over-tending the partner and forgetting their own needs. The gift is a love where every small kindness is felt deeply and returned in kind.',
    in_work: 'Deer-people thrive in roles that reward sensitivity and listening — therapists, teachers, nurses, midwives, caregivers, artists who work in subtle media. They suffer in cutthroat environments where their sensitivity is read as weakness. They need workplaces that protect their nervous system as a baseline.',
    the_lesson: 'Your sensitivity is not a flaw. It is information the rest of us cannot access. But sensitivity without boundaries becomes martyrdom — soft does not mean small.',
    pair_with_chakra: 'Heart chakra — the open sensitive heart that feels everything.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — to soften the always-on-alert nervous system.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Rose quartz (the gentle heart) or moonstone (the sensitive feminine)',
    key_questions: [
      'Where have I been forcing something that wanted to come gently?',
      'Where has my sensitivity been treated as a flaw — by others, or by me?',
      'How can I be soft AND have boundaries — what does that look like in this situation?'
    ]
  },
  {
    slug: 'fox',
    name: 'Fox',
    emoji: '🦊',
    archetype: 'the magician',
    realm: 'earth',
    one_liner: 'Cleverness, magic, and the art of moving between worlds. The one who teaches you that being seen is sometimes the riskiest move.',
    meaning: 'The Fox is the spirit-animal of cleverness, magic, and shape-shifting. In Japanese tradition, the kitsune is a fox-spirit with magical powers, capable of nine tails and total transformation. In Celtic tradition, the fox is a guide between the seen and unseen worlds. In Native American tradition, the fox is the trickster and the teacher — the one who shows you the lesson by playing the trick on you. Fox-medicine is medicine of intelligence-in-motion: knowing when to be seen, when to disappear, when to blend in, when to shine. The fox is small, not particularly strong, not particularly fast — and yet survives almost everywhere on earth, in nearly every climate, by sheer adaptability and cunning. People with fox medicine are often the ones in their family or workplace who *know how to read the room and move accordingly*. They can blend in when they need to, shine when they need to, and disappear when staying would have cost too much. Fox is also the animal of magic in the older sense — not theatrical magic, but the kind of intelligence that bends reality through clever framing.',
    when_it_appears: 'Fox appears when cleverness is being asked of you, not strength. A repeated fox sighting, a fox that crosses your path in an unexpected place, a fox in a dream — these often signal that the way through your current situation is not by pushing harder, it\'s by getting smarter. Fox often appears for people in tricky political situations at work or in family — when there is power dynamics in the room and brute honesty would cost too much.',
    gifts: [
      'Strategic intelligence — they know exactly when to speak and when to stay silent.',
      'Adaptability — they can thrive in nearly any environment, from boardroom to forest.',
      'Magic — they understand that perception is reality, and they can shape what people see.'
    ],
    shadows: [
      'Trickery — using cleverness to deceive people who would have been fine with the truth.',
      'Inability to be seen — disappearing so often they lose track of who they actually are.',
      'Cynicism — assuming everyone is also playing a game, missing genuine straightforwardness.'
    ],
    in_love: 'Fox-people love with playful intelligence — they\'re the partner you can\'t out-smart, the one who plays good games, who keeps you guessing. The risk: keeping a piece of themselves hidden as a strategic move, never fully letting the partner in. The gift: a partner who is endlessly interesting, who never bores you, who can read your moods like a book.',
    in_work: 'Fox-people thrive in roles that reward strategic intelligence — politics, sales, founder roles, lawyers, marketers, anyone who has to navigate human dynamics with skill. They suffer in roles that punish nuance and reward only blunt force.',
    the_lesson: 'Cleverness is a gift, but not every situation deserves to be played. Sometimes the most magical thing you can do is just be straightforwardly seen.',
    pair_with_chakra: 'Sacral chakra — the seat of creative cunning.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — for the magical mind that can shape reality.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian (the cunning fire) or fluorite (the strategic mind)',
    key_questions: [
      'Where am I playing a game when straightforwardness would have served me better?',
      'In what part of my life have I been blending in for so long I can\'t remember my own face?',
      'What situation right now is asking for cleverness, not strength?'
    ]
  },
  {
    slug: 'horse',
    name: 'Horse',
    emoji: '🐎',
    archetype: 'the journeyer',
    realm: 'fire',
    one_liner: 'Freedom, power, and the long ride. The one who teaches you that you were made to move.',
    meaning: 'The Horse is the spirit-animal of freedom, journey, and embodied power. Across nearly every culture that has met the horse — Mongol, Celtic, Plains tribes, Arabic, Norse — the horse is the partner who carries you across distances no human could walk. The horse is power harnessed but never broken; speed paired with relationship. Horse-medicine teaches that you were made to move, that staying still too long makes the body and the spirit sick, and that the great journeys of your life — geographic, spiritual, professional — are not detours from the real life. They are the real life. People with horse medicine are often the ones who can\'t stay long in any one place, the ones who keep changing cities and careers and identities, the ones whose families worry about them but who are doing exactly what their soul came to do. Horse is also the animal of partnership — the great horses of history were never solo; they were ridden, and the bond between rider and horse was sacred. So horse-people are often relational nomads: they move, but they bring trusted others with them.',
    when_it_appears: 'Horse appears when you have been still too long. A repeated horse sighting, a horse in a dream, a horse showing up in art and lyrics across a single week — Horse is asking: where is the next ride? Horse also appears at moments of journey-decision: should I take the trip, should I leave the city, should I quit the job, should I commit to this person and ride together — Horse is usually saying yes. Move.',
    gifts: [
      'Capacity for the long ride — they can sustain a multi-year journey other people would quit.',
      'Embodied power — they\'re comfortable in their bodies and unafraid of physical effort.',
      'Loyal partnership — once they choose someone to ride with, they ride hard and far together.'
    ],
    shadows: [
      'Restlessness — leaving good situations because the body wants movement, even when staying was right.',
      'Trampling — Horse-medicine people sometimes don\'t know their own size and unintentionally hurt softer creatures.',
      'Confusing motion with progress — moving constantly so you don\'t have to feel what would surface in stillness.'
    ],
    in_love: 'Horse-people love big, fast, and across distance. They need a partner who can ride with them — physically and metaphorically. They cannot tolerate partners who try to keep them in the stable. The risk: trampling a softer partner with their pace. The gift: a love that travels far and stays loyal across distance.',
    in_work: 'Horse-people thrive in roles that involve travel, movement, change, and big projects with long arcs — founders, missionaries, traveling consultants, performers, athletes. They suffer in static desk jobs where the same view drains the life out of them.',
    the_lesson: 'You were made to move. But also: motion is not the same as direction. Make sure the long ride has a horizon worth riding toward.',
    pair_with_chakra: 'Solar plexus chakra — the seat of will, the engine of the long ride.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — for the wide horizons that horse-medicine asks for.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Red jasper (the riding stone, ancient warrior\'s stone) or carnelian (vital fire)',
    key_questions: [
      'Where have I been still for too long, ignoring the part of me that needs movement?',
      'In my current direction, am I moving toward something — or just moving so I don\'t have to feel?',
      'Who is riding with me right now, and who am I trying to ride away from?'
    ]
  },
  {
    slug: 'hummingbird',
    name: 'Hummingbird',
    emoji: '🐦',
    archetype: 'the joy-bringer',
    realm: 'air',
    one_liner: 'Pure joy in motion. The smallest bird with the biggest heart — teaching that delight is a serious spiritual practice.',
    meaning: 'The Hummingbird is the spirit-animal of joy, presence, and the seriousness of delight. In Aztec tradition, Huitzilopochtli, the sun god, took the form of a hummingbird — a fierce solar warrior in a tiny body. In Mayan tradition, hummingbirds carry the prayers of lovers. Across South American and Native American traditions, the hummingbird is the bird whose sheer existence is a miracle: it can fly backwards, it can hover, its wings beat 80 times a second, its heart beats 1200 times a minute, and its life is short but extraordinarily intense. Hummingbird-medicine teaches that joy is not a frivolous thing. Joy is the highest spiritual practice. Joy is what we are here for. People with hummingbird medicine are often the ones who can find a moment of delight even on the hardest days, the ones who make others laugh in waiting rooms, the ones whose smile changes a room\'s temperature. This is not toxic positivity — it\'s a deep choice, often hard-won, that joy is real and available even in grief.',
    when_it_appears: 'Hummingbird appears when you have been taking yourself, your situation, or your healing too seriously. A hummingbird that hovers near you, a hummingbird in a dream, repeated hummingbird imagery in unexpected places — Hummingbird is reminding you to come back to delight. Hummingbird also appears for people in long grief seasons or long illness — not to dismiss the grief, but to remind: joy is still available, in tiny doses, and you are allowed to receive it.',
    gifts: [
      'Capacity for joy in hard times — they can find a moment of delight even in waiting rooms.',
      'Presence — hummingbird-medicine people are unusually here, in the moment, in the body.',
      'Tiny but mighty — small in physical size or social-presence, but with enormous heart-energy.'
    ],
    shadows: [
      'Flitting — never staying long enough on any one bloom to develop depth.',
      'Forced positivity — using joy as a way to skip over grief that wants to be felt.',
      'Burning out — the hummingbird\'s metabolism is intense; they exhaust themselves.'
    ],
    in_love: 'Hummingbird-people love with sweetness, intensity, and play. They are the partner who notices the small things, who plans the surprise picnic, who makes the ordinary day feel like a date. The risk: hovering, never landing, never letting things get heavy. The gift: a partner who reminds you, daily, that being together is supposed to be joyful.',
    in_work: 'Hummingbird-people thrive in creative, varied, light-touch work — short projects, flexible schedules, work that involves people and sweetness. They suffer in heavy bureaucratic roles that drain the joy out of every day.',
    the_lesson: 'Joy is a spiritual practice, not a distraction. But also: the hummingbird has to land sometimes. Learn the rhythm of hovering AND landing.',
    pair_with_chakra: 'Heart chakra — the joyful, open, light heart.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — for the sweet daily delight that hummingbird-medicine offers.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine (the sun-stone of joy) or rose quartz (the sweet heart)',
    key_questions: [
      'Where have I made myself too heavy, too serious, too far from joy?',
      'When was the last time I let myself receive a tiny delight without earning it first?',
      'Where am I hovering when I should be landing — and where am I landing when I should still be flying?'
    ]
  }
]

export const SPIRIT_ANIMAL_SLUGS = SPIRIT_ANIMALS.map((s) => s.slug)
const SPIRIT_BY_SLUG: Record<string, SpiritAnimalProfile> = Object.fromEntries(
  SPIRIT_ANIMALS.map((s) => [s.slug, s])
)

export function isSpiritAnimalSlug(s: string): boolean {
  return s in SPIRIT_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Realm-tinted accent — where this animal lives gives the gradient
//   earth = warm ochre / brown
//   air   = soft sky-blue / lavender
//   water = deep blue
//   fire  = warm red-orange
const REALM_ACCENT: Record<SpiritAnimalProfile['realm'], { c1: string; c2: string }> = {
  earth: { c1: '#a87c4a', c2: '#6e4a22' },
  air:   { c1: '#8aaed1', c2: '#4a6e94' },
  water: { c1: '#5a8ec6', c2: '#2a5a8a' },
  fire:  { c1: '#e07b4d', c2: '#b8401f' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function spiritAnimalPageHTML(slug: string): string {
  const s = SPIRIT_BY_SLUG[slug]
  if (!s) return ''
  const accent = REALM_ACCENT[s.realm]
  const readingHref = `/gab44/reading?ref=spirit-${slug}`

  const title = `${s.name} Spirit Animal — Meaning, When It Appears, Symbolism · gab44 ✨`
  const description = `${s.name} as a spirit animal: ${s.meaning.substring(0, 140)}... When it appears, gifts, shadows, in love, in work, the lesson. Written warm, paired with chakra + healing sound + crystal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Spirit Animals', item: `${SITE_URL}/gab44/spirit-animals` },
          { '@type': 'ListItem', position: 3, name: `${s.name} Spirit Animal`, item: `${SITE_URL}/gab44/spirit-animals/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${s.name} Spirit Animal — meaning, when it appears, gifts, shadows, the lesson`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/spirit-animals/${slug}`,
        about: `${s.name} spirit animal symbolism, meaning, dreams, signs, archetype`
      }
    ]
  })

  const otherAnimalsHtml = SPIRIT_ANIMALS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const acc = REALM_ACCENT[q.realm]
    return `<a class="ph-mini${cur}" href="/gab44/spirit-animals/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/spirit-animals/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/spirit-animals/${slug}" />
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
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .arch { font-size: 17px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; font-style: italic; }
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
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 36px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel.gifts  { border-left: 4px solid #2e9e6a; }
  .panel.shadows { border-left: 4px solid #d63d4d; }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel ul { margin: 0; padding-left: 18px; }
  .panel li { font-size: 14px; color: var(--fg); margin-bottom: 6px; }
  .panel li:last-child { margin-bottom: 0; }
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
  .other-animals { margin: 36px 0 22px; }
  .other-animals h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .animals-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  @media (max-width: 600px) { .animals-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini.current { border-color: var(--c1); border-width: 2px; }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
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
      <a href="/gab44/spirit-animals">all 12 spirit animals</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ spirit animals · ${escapeHtml(s.realm)} realm</div>
    <h1><span class="sym">${s.emoji}</span>${escapeHtml(s.name)} Spirit Animal</h1>
    <p class="arch">${escapeHtml(s.archetype)}</p>
    <p class="sub">${escapeHtml(s.one_liner)}</p>
    <div class="meta-strip">
      <span>realm · ${escapeHtml(s.realm)}</span>
      <span>archetype · ${escapeHtml(s.archetype)}</span>
      <span>chakra pair · ${escapeHtml(s.pair_with_chakra_slug.replace('-', ' '))}</span>
    </div>

    <article class="core-card">
      <span class="label">what the ${escapeHtml(s.name)} means as a spirit animal</span>
      <p class="text">${escapeHtml(s.meaning)}</p>
    </article>

    <h2><span class="icon">👁️</span>when ${escapeHtml(s.name)} appears for you</h2>
    <p>${escapeHtml(s.when_it_appears)}</p>

    <div class="two-col">
      <div class="panel gifts">
        <h3>✓ gifts of ${escapeHtml(s.name)} medicine</h3>
        <ul>
          <li>${escapeHtml(s.gifts[0])}</li>
          <li>${escapeHtml(s.gifts[1])}</li>
          <li>${escapeHtml(s.gifts[2])}</li>
        </ul>
      </div>
      <div class="panel shadows">
        <h3>~ shadows to watch</h3>
        <ul>
          <li>${escapeHtml(s.shadows[0])}</li>
          <li>${escapeHtml(s.shadows[1])}</li>
          <li>${escapeHtml(s.shadows[2])}</li>
        </ul>
      </div>
    </div>

    <h2><span class="icon">💞</span>in love</h2>
    <p>${escapeHtml(s.in_love)}</p>

    <h2><span class="icon">💼</span>in work</h2>
    <p>${escapeHtml(s.in_work)}</p>

    <h2><span class="icon">🪶</span>the lesson</h2>
    <p>${escapeHtml(s.the_lesson)}</p>

    <h2><span class="icon">🜂</span>pair with</h2>
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

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(s.key_questions[0])}</li>
        <li>${escapeHtml(s.key_questions[1])}</li>
        <li>${escapeHtml(s.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> ${escapeHtml(s.name)} medicine</h2>
      <p>This page is the universal portrait of ${escapeHtml(s.name)} as a spirit animal. A <strong>personal reading</strong> looks at *your* chart, *your* season, and which animal is actually walking with you right now (it might not even be the one you came here for). Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/spirit-animals">all 12 spirit animals</a> · <a href="/gab44/chinese">12 Chinese-zodiac animals</a> · <a href="/gab44/chakras">7 chakras</a> · <a href="/healing">healing meditations</a>.
    </div>

    <section class="other-animals">
      <h3>The full circle of spirit animals</h3>
      <div class="animals-grid">
        ${otherAnimalsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function spiritAnimalsIndexHTML(): string {
  const cards = SPIRIT_ANIMALS.map((s) => {
    const accent = REALM_ACCENT[s.realm]
    return `<a href="/gab44/spirit-animals/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${s.emoji}</span>
        <span class="day">${escapeHtml(s.realm)} · ${escapeHtml(s.archetype)}</span>
      </div>
      <div class="name">${escapeHtml(s.name)}</div>
      <div class="teaser">${escapeHtml(s.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Spirit Animals — All 12, Meanings &amp; What It Means When They Appear · gab44 ✨</title>
<meta name="description" content="A friendly, complete guide to 12 spirit animals: Wolf, Eagle, Bear, Owl, Lion, Hawk, Snake, Butterfly, Deer, Fox, Horse, Hummingbird. What each animal means, when it appears for you, the gift, the shadow, the lesson. Each one paired with chakra + healing sound + crystal." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/spirit-animals" />
<meta property="og:title" content="Spirit Animals — All 12 Meanings · gab44" />
<meta property="og:description" content="Wolf, Eagle, Bear, Owl, Lion, Hawk, Snake, Butterfly, Deer, Fox, Horse, Hummingbird — what each spirit animal means, when it appears, and the lesson it brings." />
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
  @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
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
    letter-spacing: 0.05em; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 6px; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
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
      <a href="/gab44/chinese">Chinese zodiac</a>
      <a href="/gab44/about">12 Western signs</a>
      <a href="/gab44/chakras">7 chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 <span class="accent">spirit animals</span> walking with us.</h1>
    <p class="sub">Twelve animals — Wolf, Eagle, Bear, Owl, Lion, Hawk, Snake, Butterfly, Deer, Fox, Horse, Hummingbird — each one a teacher, each one with its own medicine. Find the one that has been walking with you (in dreams, in real life, in the song that won\'t leave your head). Each guide is paired with a chakra, a healing sound, and a stone to anchor the medicine.</p>

    <div class="intro">
      <h3>What is a spirit animal?</h3>
      <p><strong>A spirit animal is a teacher in animal form.</strong> Across nearly every culture that has lived close to the natural world — Native American, Celtic, Norse, African, Aztec, Aboriginal, Shinto — there is a tradition of animals as messengers, guides, and walking teachers. Some animals come for a season; some walk with you your whole life. They appear in dreams, in real-life sightings (especially repeated, in unexpected places), in art and music that won\'t leave your attention alone, in the totem you keep buying without thinking about why.</p>
      <p><strong>You don\'t pick your spirit animal — it picks you.</strong> The animal that comes is usually the one carrying the medicine you most need, right now. Sometimes that medicine is courage (Lion, Wolf), sometimes it\'s gentleness (Deer), sometimes it\'s transformation (Snake, Butterfly), sometimes it\'s vision (Eagle, Hawk, Owl), sometimes it\'s joy (Hummingbird).</p>
      <p><strong>The 12 below are not exhaustive</strong> — there are hundreds of spirit-animal traditions across the world. These are the 12 that show up most often in the dreams and real-life sightings of the people who write to us. If your animal isn\'t here, it doesn\'t mean it\'s less real — and a $9 personal reading can name the one walking with you right now.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know which spirit animal is walking with you right now?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the animal in your dreams + your chart + your season. <a href="/gab44/reading?ref=spirit-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
