// Mudras — SEO funnel — /gab44/mudras (index) + /gab44/mudras/{slug}.
// 16 hand-written mudra guides. Natural peer to mantras (the v3.59 ship) —
// SOUND + GESTURE is the canonical pairing in yogic and buddhist practice.
//
// Family-tinted gradient: foundation (gyan, chin, anjali, dhyana, prana)
// = teal-blue — the daily gestures; heart (hridaya, padma, abhaya,
// varada, bhumisparsha) = rose — the compassion gestures; power (shuni,
// surya, vayu, apana, shunya, kalesvara) = saffron — the elemental
// gestures.

import { SITE_URL } from '@/lib/identity'

export interface MudraGuide {
  slug: string
  text: string
  translation: string
  tradition: string
  glyph: string
  family: 'foundation' | 'heart' | 'power'
  position: number
  one_liner: string
  meaning: string
  what_it_does: string
  how_to_form: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_mantra: string
  pair_with_mantra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const MUDRAS: MudraGuide[] = [
  {
    slug: 'gyan',
    text: 'Gyan Mudra',
    translation: 'The gesture of knowledge / wisdom.',
    tradition: 'Vedic / Yogic — described in the Hatha Yoga Pradipika and the Gheranda Samhita',
    glyph: '🤏',
    family: 'foundation',
    position: 1,
    one_liner: 'The most-recognized meditation gesture in the world. Index touches thumb. The two ends of a circle — the individual self meeting the universal self.',
    meaning: 'Gyan Mudra (also called Jnana Mudra) is the gesture you have seen in nearly every image of a meditating yogi, sage, or buddha. The thumb represents the universal consciousness (Brahman, the totality); the index finger represents the individual self (Atman, the personal). When the two touch, the circuit closes: the individual self comes into contact with the universal field it has always been inside. The remaining three fingers — middle, ring, pinky — extend outward, representing the three gunas (sattva, rajas, tamas) of nature, and they are held active because nature is the field in which the recognition happens. The Hatha Yoga Pradipika (15th century) names this gesture as one of the foundational mudras of seated meditation; classical Indian iconography uses it constantly. To form Gyan Mudra is to make a small physical statement that the practitioner is willing — for the duration of the practice — to remember that the individual is not separate from the totality.',
    what_it_does: 'Anchors attention. Within thirty seconds of holding the gesture, attention naturally consolidates because the body has been given a single, simple, kinesthetic reference point. The very slight pressure of fingertip against thumb is enough to remind the wandering mind where it is. Research on hand-position-and-attention (Bhavanani et al., 2012) shows measurable calming of heart-rate variability when this gesture is held with conscious breath for 5+ minutes. Used as the default seated-meditation gesture across virtually every Hindu and Buddhist tradition.',
    how_to_form: 'Sit. Rest hands on knees or thighs, palms up. Tip of index finger touches tip of thumb — light contact, not pressed. Other three fingers extend gently, neither stiff nor floppy. Spine long. Breath natural. Hold for the length of the meditation — 5, 11, or 31 minutes traditional. The gesture is symmetrical: both hands the same. If the fingers go numb, you are pressing too hard.',
    in_love: 'A relationship in which both partners remember the larger field they are inside — the love does not have to perform itself, because both people are anchored to the same totality. Reversed: a partnership where the index finger is gripping the thumb too hard — possessiveness, fusion, the loss of the larger context.',
    in_work: 'Long-form focused work where consolidating attention is the actual job — writing, coding, research, contemplation. Gyan Mudra at the start of a deep-work block tells the nervous system: I am here, this is the field, the wandering is over for now.',
    the_gift: '*Attention consolidates.* The smallest possible gesture produces the largest possible effect — the wandering mind has a single point to return to.',
    the_shadow: 'Decoration. Holding Gyan Mudra for photographs without ever using it as the actual anchor of an actual practice. The gesture is a tool; outside the practice it is a costume.',
    pair_with_chakra: 'Crown — Gyan Mudra is the gesture of the crown chakra; the practice is recognising that the individual self is not separate from the universal field the crown opens to.',
    pair_with_chakra_slug: 'crown',
    pair_with_mantra: 'Om — Gyan + Om is the canonical opening of any seated meditation; one anchors the body, one anchors the breath, both anchor consciousness.',
    pair_with_mantra_slug: 'om',
    pair_with_sound: 'Deep Healing — pair as the opening gesture of any long meditation; Gyan Mudra is the body\'s statement that the practice has begun.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'When was the last time I sat long enough for Gyan Mudra to actually do its work — not seconds, but minutes?',
      'Where in my life have I forgotten that the individual self I am protecting is not separate from the larger field?',
      'What does the simple touch of finger and thumb remind me of, every time, when I let it?'
    ]
  },
  {
    slug: 'chin',
    text: 'Chin Mudra',
    translation: 'The gesture of consciousness / receptivity.',
    tradition: 'Vedic / Yogic — the receptive variant of Gyan, found in classical hatha sources',
    glyph: '👌',
    family: 'foundation',
    position: 2,
    one_liner: 'Gyan Mudra\'s mirror image. Same finger contact, but palms face down. The receptive, grounding orientation — wisdom received rather than offered.',
    meaning: 'Chin Mudra is the close sibling of Gyan Mudra and shares its meaning — index meets thumb, individual self meets universal self — but the orientation is inverted: palms face down, resting on the knees rather than opening upward. Where Gyan Mudra is offering and receiving (palms up, open to what arrives), Chin Mudra is rooting and receiving (palms down, grounded in what is already here). The classical hatha sources describe the two together as a single practice: Gyan when the practitioner wants to invite the larger field in, Chin when the practitioner wants to settle into the field that is already holding them. In Kundalini and Iyengar traditions, Chin Mudra is the default for grounding sequences — meditations on stability, on root-chakra work, on the practice of being inhabited by the body rather than reaching out beyond it.',
    what_it_does: 'Roots attention into the body. Where Gyan Mudra subtly opens the practitioner upward (palms up draws prana into the energetic body), Chin Mudra subtly settles the practitioner downward (palms down draws prana into the physical body). Particularly useful for practitioners who are already in their head and need the gesture to remind them that the body is already here, already grounded, already enough.',
    how_to_form: 'Sit. Rest hands on knees or thighs, palms DOWN. Tip of index touches tip of thumb (same as Gyan). Other three fingers extend gently. The physical contact between palm and thigh is a felt-sense reminder of the body in space. Hold for the full meditation. Some traditions alternate: Gyan for the opening half of the practice, Chin for the closing half.',
    in_love: 'A relationship that has stopped reaching outside itself for validation — the love is settled, rooted, palms down on the home it has built. Reversed: a partnership that has become too settled — comfort calcifying into avoidance of the upward orientation Gyan Mudra invites.',
    in_work: 'Work that asks the practitioner to be embodied rather than ideated — manual work, craft, parenting, caregiving, gardening, somatic therapy. Chin Mudra is the gesture of the body that has stopped trying to escape itself.',
    the_gift: '*Embodied rooting.* The practitioner is reminded that they are already where they need to be.',
    the_shadow: 'Avoidance of the upward orientation. Chin Mudra is grounding, not retreat. A practitioner who only ever uses Chin and never Gyan is shutting out the larger field rather than rooting into the body that meets it.',
    pair_with_chakra: 'Root — Chin Mudra is the gesture of the root chakra; palms down, the practice of being held by the earth that is already holding the body.',
    pair_with_chakra_slug: 'root',
    pair_with_mantra: 'So Hum — pair when the work is to listen to the breath that is already happening; Chin Mudra is the body\'s posture for that listening.',
    pair_with_mantra_slug: 'so-hum',
    pair_with_sound: 'Anxiety Relief — pair when the nervous system needs grounding more than expansion; Chin Mudra brings prana into the body and quiets the upward agitation.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'taurus',
    key_questions: [
      'Where in my life have I been reaching upward when the actual work was to root downward?',
      'What part of my body is asking to be inhabited rather than escaped from?',
      'When did I last let the earth hold me instead of trying to hold the earth?'
    ]
  },
  {
    slug: 'anjali',
    text: 'Anjali Mudra',
    translation: 'The gesture of offering / reverence. (Namaste.)',
    tradition: 'Pan-Indian — Hindu, Buddhist, Jain, Sikh; the universal greeting gesture',
    glyph: '🙏',
    family: 'foundation',
    position: 3,
    one_liner: 'Palms together at the heart. The single most recognized gesture of reverence on earth. The body\'s way of saying *I see you, and we are both here*.',
    meaning: 'Anjali Mudra is the gesture you make when you say *namaste* — palms pressed together, fingers pointing up, hands held at the heart center. Across every dharmic tradition (Hindu, Buddhist, Jain, Sikh) and across most of Southeast Asia (where it appears as *wai* in Thailand, *sampeah* in Cambodia, *gassho* in Japanese Zen), Anjali Mudra is the universal greeting that means *I bow to the consciousness in you, which is the same consciousness in me*. The two hands meeting in the centerline of the body are a small architectural statement: the left side (lunar, receptive) and the right side (solar, active) come together at the heart, the integrating chakra. Yoga classes begin and end with this gesture; temple visits begin and end with this gesture; a deep conversation between two people who recognize each other ends with this gesture. To form Anjali Mudra is to remember — physically, before words — that the other person is not separate.',
    what_it_does: 'Integrates left and right. The bilateral symmetry of the gesture quiets the asymmetric processing of ordinary cognition (left-brain analytical, right-brain holistic) and produces a measurable shift toward balanced attention. Used as the opening and closing of yoga, meditation, prayer, and meeting because it returns the practitioner to centerline before the next thing begins.',
    how_to_form: 'Hands at heart-center, palms pressed together fully (not just fingertips), thumbs lightly touching the sternum. Fingers point upward. Shoulders relaxed; elbows soft, not flared. Eyes can be open (to greet someone) or closed (to greet the self). The gesture has weight only when the pressing is even — left hand and right hand offering equally; one is not stronger than the other. Hold for as long as the moment requires — a breath, a verse, a full meditation.',
    in_love: 'The bow at the beginning and end of every important conversation. The gesture that says *I see you* before *let me tell you*. A partnership that has retained Anjali — even silently, even internally — has not let familiarity erode reverence. Reversed: a relationship in which the partners have stopped seeing each other; familiarity without reverence becomes contempt.',
    in_work: 'Service work, teaching, therapy, leadership. The internal Anjali — the silent bow toward the person across from the practitioner — is the difference between transactional and reverent work. The bow does not need to be visible to do its work.',
    the_gift: '*Centerline returned.* Left meets right at the heart; the practitioner is whole-bodied again before the next breath.',
    the_shadow: 'Performance. Anjali Mudra as a costume of spirituality — used at the end of a yoga class as performance, then immediately forgotten in the car on the way home. The gesture is meant to *change the practitioner*; if it doesn\'t, it has become decoration.',
    pair_with_chakra: 'Heart — Anjali Mudra is held AT the heart; the gesture is the heart-chakra\'s posture for greeting another consciousness as not-separate.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Lokah Samastah — pair as the closing of any practice where the work has been to widen the radius of concern; Anjali bows the work toward all beings.',
    pair_with_mantra_slug: 'lokah-samastah',
    pair_with_sound: 'Deep Healing — pair as the opening or closing gesture of any deep-work session; Anjali is the threshold-bow that opens and closes the field.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'libra',
    key_questions: [
      'Where in my life have I let familiarity erode the reverence Anjali used to mark?',
      'Which person, internal or external, am I overdue to bow to — silently, in the heart?',
      'What would my next conversation feel like if I held a silent Anjali toward the other person for the first three breaths?'
    ]
  },
  {
    slug: 'dhyana',
    text: 'Dhyana Mudra',
    translation: 'The gesture of meditation / contemplation.',
    tradition: 'Buddhist (Mahayana / Vajrayana) — the iconic seated-Buddha gesture',
    glyph: '🧘',
    family: 'foundation',
    position: 4,
    one_liner: 'Both hands cupped in the lap, right resting on left, thumbs lightly touching. The seated-Buddha gesture. Stillness, depth, the bowl that holds the practice.',
    meaning: 'Dhyana Mudra is the gesture of Shakyamuni Buddha in seated meditation — the iconic posture you see in temple statues from Sarnath to Kamakura to Bangkok. Both hands rest in the lap (at the level of the lower abdomen), palms up, the right hand resting on top of the left. The thumbs lightly meet at the tips, forming an oval that mirrors the cupped bowl shape of the hands. In Buddhist iconography, the right hand symbolizes wisdom (prajna) and the left hand symbolizes skillful means (upaya) — the two coming together is the practitioner-becoming-whole. The oval formed by the thumbs is sometimes called the *triangle of fire* or *meditation oval* and is said to seal the practice in the hara (the energetic center below the navel). Dhyana Mudra is the gesture of the long sit — not the quick five-minute settle, but the practice of dropping into the depth.',
    what_it_does: 'Settles the body for long meditation. The weight of the hands resting in the lap engages a small but persistent kinesthetic anchor that pulls attention into the lower belly (the hara, in Japanese Zen; the dantian, in Daoist practice). Unlike Gyan Mudra (which keeps the practitioner alert), Dhyana Mudra is for *deepening* — for the second half of a long sit, when alertness is no longer the work and depth is. Particularly used in zen, vipassana, and Tibetan tantric sitting.',
    how_to_form: 'Sit in a stable cross-legged posture (or on a chair, feet flat). Hands rest in the lap, palms up, right hand on top of left. The wrists rest naturally against the lower belly. Thumbs lightly meet at the tips — light enough that you cannot see them touching from outside, only feel it from inside. If the thumbs separate during the sit, gently rejoin them; the touch is the anchor. If the thumbs press hard, you are gripping; release. Hold for the full meditation — traditionally 25-40 minutes.',
    in_love: 'A partnership that has dropped past the first decade of effort and has begun to *deepen*. The gesture of a couple that no longer needs to perform; both hands rest together, alert and at ease. Reversed: a relationship where one partner is doing all the holding and the other partner\'s hand has slipped away.',
    in_work: 'Long-form contemplative or analytical work. Writing the second half of a book. The fourth hour of a meditation retreat. Anywhere the work is not to *start* but to *deepen*. Dhyana Mudra is the gesture of the practitioner who has stopped beginning.',
    the_gift: '*Depth becomes possible.* The bowl is held; the practice can fall through itself.',
    the_shadow: 'Sleepiness as depth. Dhyana Mudra can lubricate the slide into dullness if the practitioner is not alert. Real depth is alert; dullness is just dullness. If the thumbs go slack and the head drops, the gesture has become a pillow.',
    pair_with_chakra: 'Sacral — Dhyana Mudra rests AT the lower belly, the sacral chakra; the gesture sinks consciousness into the hara, the energetic center of stable depth.',
    pair_with_chakra_slug: 'sacral',
    pair_with_mantra: 'Om Ah Hum — pair when the work is to settle body-speech-mind into a long, integrated sit; Dhyana holds the body, Om Ah Hum threads the breath.',
    pair_with_mantra_slug: 'om-ah-hum',
    pair_with_sound: 'Letting Go — pair for long sessions of release and integration; Dhyana is the bowl in which the letting-go can fall.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'pisces',
    key_questions: [
      'When was the last time I sat long enough for *depth* to become possible — not minutes, but a real settle?',
      'What practice in my life is asking to be deepened rather than restarted?',
      'Where have I been confusing dullness with depth, and what would alert depth ask of me instead?'
    ]
  },
  {
    slug: 'prana',
    text: 'Prana Mudra',
    translation: 'The gesture of vital force / life energy.',
    tradition: 'Hatha Yoga — referenced in the Hatha Yoga Pradipika as a pranic-activation gesture',
    glyph: '⚡',
    family: 'foundation',
    position: 5,
    one_liner: 'Thumb meets ring + pinky together; index and middle extend. The gesture that wakes the prana — the vital force — in a body that has gone tired.',
    meaning: 'Prana Mudra activates the *prana vayu* — the vital force that animates the body. The thumb represents fire (the activating element); the ring finger represents earth (the stabilizing element); the pinky represents water (the flowing element). When the three meet, the gesture combines the elements that produce *prana* in the yogic five-element model: fire ignites, water flows, earth holds. The remaining two fingers (index, middle) extend outward, allowing the activated prana to radiate. The Hatha Yoga Pradipika treats prana as the most-precious resource of the practitioner — without prana, no practice. Prana Mudra is the gesture you form when prana is low: after illness, after long exertion, after grief, after a depletion the body has not yet recovered from. The gesture is a small physical request to the inner reserves: *please return*.',
    what_it_does: 'Re-charges depleted vital force. Practitioners report that holding Prana Mudra for 15-30 minutes with steady breath produces a measurable lift — the kind of energy return that does not come from caffeine or stimulation but from the body remembering where its reserves are. Particularly useful in the convalescent period after illness, in the post-adrenal-fatigue period, or in the gray week after a major emotional event. Not a quick fix; a slow re-ignition.',
    how_to_form: 'Sit comfortably. Thumb, ring finger, and pinky meet at the tips on each hand. Index and middle fingers extend, gently straight, not stiff. Rest hands palm-up on knees or thighs. Long, slow breath — 5 seconds in, 5 seconds out, ideally through the nose. Hold 15-30 minutes per session. Best practiced in the morning (to set the day) or in the late afternoon (to recover from depletion). Avoid right before sleep — the gesture activates rather than soothes.',
    in_love: 'A relationship where one partner is depleted and the other is asked to hold space for the slow return of vitality. The gesture of patience: prana does not return on demand. Reversed: a partnership that demands one partner stay activated when their body is asking for rest.',
    in_work: 'The first week back after burnout, illness, or major life upheaval. Prana Mudra is the gesture of the practitioner who has been knocked down and is gathering the strength to stand up. Not heroic — patient.',
    the_gift: '*Reserves return.* The body remembers it has more than it thought, and the gesture is the small ceremony of the remembering.',
    the_shadow: 'Forcing prana before it is ready. The gesture invites the return; it does not order it. A practitioner who tries to *push* prana back will only deplete further. Patience is the price; the gesture is the invitation.',
    pair_with_chakra: 'Sacral — Prana Mudra activates the sacral chakra (the seat of vital energy in yogic anatomy); the elements combine and the lower belly warms.',
    pair_with_chakra_slug: 'sacral',
    pair_with_mantra: 'Gayatri Mantra — pair when the body needs solar energy returned; the Gayatri is a sunrise prayer, Prana Mudra is the body\'s posture for receiving it.',
    pair_with_mantra_slug: 'gayatri-mantra',
    pair_with_sound: 'Abundance — pair when the work is to receive what has been waiting; Prana Mudra is the gesture of opening the channel.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life is my prana low, and which practice have I been postponing that would help return it?',
      'What am I trying to push that the body is asking me to be patient with instead?',
      'When did I last let recovery be its own work, rather than treating rest as the failure to be productive?'
    ]
  },
  {
    slug: 'hridaya',
    text: 'Hridaya Mudra',
    translation: 'The gesture of the heart.',
    tradition: 'Hatha yogic / tantric — described in classical pranic-cleansing sequences',
    glyph: '💗',
    family: 'heart',
    position: 6,
    one_liner: 'Index folds under thumb; middle and ring touch thumb tip; pinky extends. The gesture that opens the heart when grief has tightened it.',
    meaning: 'Hridaya Mudra is the gesture for the *hridaya granthi* — the heart knot, one of the three energetic knots in tantric anatomy that bind awareness to the body. The gesture is specific in form: the index finger folds DOWN into the base of the thumb (representing the ego retracting), while the tips of the middle and ring fingers join the tip of the thumb (representing the heart re-meeting the witness). The pinky extends freely (representing earth, the body that holds the practice). Hridaya is the mudra of grief-work: the gesture you form when the heart has gone numb, when an old loss has surfaced, when forgiveness is asked of you and the body is not yet ready. Classical tantric sources name Hridaya as the cleansing-of-the-heart-channel gesture — held for long sessions over weeks, it dissolves residue that has accumulated in the energetic heart. Modern teachers call it the *heart-attack gesture* because it is often recommended as a daily practice for cardiac patients, but the deeper use is emotional: Hridaya Mudra is what the body forms when the heart is asking to be allowed to feel again.',
    what_it_does: 'Opens the heart-channel. The specific folding of the index (ego retracts) and the meeting of middle-ring-thumb (witness re-touches feeling) creates an energetic geometry that the tantric tradition names as direct support for the *anahata* chakra. Used over weeks, Hridaya Mudra softens the chest, deepens the breath into the lower lobes of the lungs (where grief is often stored), and re-introduces the body to feelings it had defended itself from. Not a fast-acting gesture — a patient one.',
    how_to_form: 'Sit. Rest hands on knees, palms up. Bend the index finger down so the tip touches the base of the thumb (not the side — the inside of the thumb-pad). Bring the tips of the middle and ring fingers to touch the tip of the thumb. The pinky extends straight. Light pressure, not gripping. Breath natural; ideally let the breath drop into the chest rather than the belly for this practice. Hold 15-30 minutes, daily, for at least a week to feel the work begin.',
    in_love: 'A relationship returning from a wound — the heart re-opening to a partner who has been forgiven, or to a new person after grief. Hridaya is the gesture of letting feeling come back when the body has been guarding against it. Reversed: a partnership where one partner is forcing the other to open their heart before the body is ready; the work is patience, not pressure.',
    in_work: 'Caregiving, therapy, hospice, anywhere work asks the heart to stay open through repeated contact with pain. Hridaya is the gesture of the practitioner who has chosen heart-work as their craft and is asking the body to keep up.',
    the_gift: '*The heart re-opens.* What grief had closed, the gesture patiently un-closes — over weeks, not minutes.',
    the_shadow: 'Rushing the heart. The gesture invites the opening; it does not force it. A practitioner who treats Hridaya as a quick fix for unresolved grief will find the gesture frustrating; the work is to keep showing up to the practice while the body sets the pace.',
    pair_with_chakra: 'Heart — Hridaya Mudra is the direct gesture for the heart chakra (anahata); the geometry of the fingers maps to the energetic structure of the chakra itself.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Om Mani Padme Hum — pair when the work is to let compassion (mani, the jewel) sit in the open lotus of the heart (padme); Hridaya is the body\'s posture for receiving the mantra.',
    pair_with_mantra_slug: 'om-mani-padme-hum',
    pair_with_sound: 'Letting Go — pair when the work is grief-release; Hridaya holds the heart while the audio walks the practitioner through what the body has been carrying.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'cancer',
    key_questions: [
      'What grief is asking my heart to re-open, and have I given it the patient time the work requires?',
      'Where in my body have I been guarding against feeling, and what would softening that guard feel like?',
      'Who am I overdue to forgive — not in word, but in the silent practice the heart actually does?'
    ]
  },
  {
    slug: 'padma',
    text: 'Padma Mudra',
    translation: 'The gesture of the lotus.',
    tradition: 'Pan-dharmic — Hindu, Buddhist; the iconic gesture of the lotus opening',
    glyph: '🪷',
    family: 'heart',
    position: 7,
    one_liner: 'Heels of palms touch; thumbs and pinkies touch; middle three fingers open like petals. The body forming a lotus. Devotion as the opening of the chest.',
    meaning: 'Padma Mudra is the gesture of the lotus — the central symbol of the dharmic traditions. The lotus grows in muddy water and opens above it, untouched by the murk it grew through. To form the gesture is to make a small architectural statement that the practitioner accepts both: the mud the life has grown through, AND the opening that has happened anyway. The two heels of the palms touch and the two thumbs touch and the two pinkies touch, but the middle three fingers of each hand open outward like the eight petals of the heart-chakra lotus. The gesture is bilateral and symmetric — like Anjali, it returns the practitioner to centerline — but the opening of the petals invites the chest itself to open wider, the shoulders to roll back, the heart to be displayed rather than protected. Used in classical devotional practice as the gesture of offering — the practitioner is *offering* the open heart to the divine, the teacher, the beloved.',
    what_it_does: 'Opens the chest. The bilateral palm-base contact + the outward fanning of the middle fingers creates a small physical opening across the sternum that, held with conscious breath, releases the protective rounding of the shoulders many of us carry from sitting at screens, from old emotional armor, from the accumulated forward-fold of modern life. Used in classical iconography to depict the buddha-mind opening to all beings, the gesture is also a practical postural reset for the contemporary practitioner whose chest has spent the day collapsing inward.',
    how_to_form: 'Sit. Bring hands to heart-center, palms facing each other. Touch the heels of the palms together, touch the two thumbs together, touch the two pinkies together — but let the middle three fingers of each hand fan outward, creating a lotus-bowl shape. The hands should look like an opening flower viewed from the front. Hold at heart-center or slightly lower (at the lower sternum). Breath into the chest rather than the belly for this practice. Hold 5-15 minutes. Excellent paired with a slow forward gaze (eyes soft, looking 6 feet ahead).',
    in_love: 'A relationship in which both partners have stopped guarding their chest from the other — the love is offered openly because both people have done enough work to know what they are offering. Reversed: a partnership where the petals have closed back into a bud; love is still present, but the practitioner has stopped offering it.',
    in_work: 'Teaching, public-speaking, performance, service. Anywhere the work asks the practitioner to *be visible*. Padma Mudra before a class, a talk, a performance is the gesture of the practitioner choosing to be seen instead of guarding against being seen.',
    the_gift: '*Visibility becomes safe.* The petals open and the chest meets the world without flinching.',
    the_shadow: 'Performative openness. Padma Mudra as Instagram aesthetic — the gesture struck for the photo, the chest closing back the moment the camera turns away. The opening is meant to be lived, not posed.',
    pair_with_chakra: 'Heart — Padma Mudra is the gesture of the heart chakra opening as a lotus; the visual geometry of the mudra matches the classical eight-petal anahata symbol.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Om Mani Padme Hum — *padme* IS the lotus; the mantra and the mudra are the same offering in sound and gesture form.',
    pair_with_mantra_slug: 'om-mani-padme-hum',
    pair_with_sound: 'Deep Healing — pair when the work is to be visible to the self; Padma is the gesture of the heart that has decided to be seen.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life has my chest been collapsing inward, and what would opening look like in the moment I least want to?',
      'What devotion am I quietly carrying that has not yet been offered openly?',
      'Where am I performing openness when the practice is asking me to live it?'
    ]
  },
  {
    slug: 'abhaya',
    text: 'Abhaya Mudra',
    translation: 'The gesture of fearlessness / no-fear.',
    tradition: 'Pan-dharmic — Hindu, Buddhist, Jain; the protective gesture of every great teacher',
    glyph: '✋',
    family: 'heart',
    position: 8,
    one_liner: 'Right hand raised to shoulder height, palm facing forward, fingers up. The buddha-and-shiva gesture that says: *do not be afraid.*',
    meaning: 'Abhaya Mudra is the gesture you have seen in every temple statue of a teaching buddha or a blessing-bestowing deity — the right hand raised to shoulder height, palm forward, fingers pointing up. The translation *abhaya* means *no fear*, and the gesture is the deity\'s declaration to the seeker: *the path you are walking has been walked; the protection you need is already with you; do not be afraid.* Across every dharmic tradition, Abhaya Mudra is the gesture of refuge — the buddha offering refuge to those who have walked the path of fear, Vishnu offering protection to his devotees, Christ in early Byzantine iconography raising the same hand in the same gesture for the same reason. To form Abhaya Mudra as a practitioner is to take the gesture from being something offered TO you and turning it around — offering it to yourself, to the part of you that is afraid, to the future self that is about to walk into the difficult thing.',
    what_it_does: 'Activates the protective response in the practitioner\'s own nervous system. The raising of the hand, the open palm, the eye-level position of the gesture — all three are bilateral cues the human brain recognizes as *stop, be present, you are not in danger right now*. Used as a self-pacification gesture in moments of acute fear (before a hard conversation, in the middle of a panic attack, before a court date, before surgery), Abhaya Mudra interrupts the spiral of catastrophizing and returns the practitioner to the present moment.',
    how_to_form: 'Stand or sit upright. Raise the right hand to shoulder height, elbow bent, palm facing forward, fingers pointing up, fingers together (not splayed). The left hand rests at the hip or in the lap, often in *varada* (the giving gesture). Soft gaze, slow breath, slight smile if possible. Hold 30 seconds to 3 minutes in moments of acute fear; longer (10-20 minutes) as a daily practice of cultivating fearlessness.',
    in_love: 'A relationship in which one partner is walking into a fear and the other is silently offering Abhaya — the unspoken *I am here, you are not alone, the path is walkable*. Reversed: a partnership where one partner is using the appearance of fearlessness to mask fears they have not yet faced; the gesture must be honest, not performance.',
    in_work: 'Public-facing work that asks the practitioner to walk into discomfort daily — teaching, healing, leadership, advocacy. Abhaya Mudra before the difficult meeting, the difficult conversation, the difficult performance is the practitioner\'s way of saying to themselves: *the path is walkable, walk.*',
    the_gift: '*Fear becomes companion, not master.* The hand raised stops the spiral; the moment returns; the next step becomes possible.',
    the_shadow: 'Bypassing fear. Abhaya is not the gesture of pretending not to be afraid — it is the gesture of being afraid AND walking. A practitioner who uses Abhaya as a way of suppressing the fear-signal will eventually find the body in revolt; the gesture is honest acknowledgment, not denial.',
    pair_with_chakra: 'Solar Plexus — Abhaya Mudra activates the solar plexus chakra (manipura), the seat of personal power and the willingness to walk forward despite fear.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mantra: 'Om Tare Tuttare Ture Soha — Tara is the buddha of swift compassion who interrupts the spiral of fear; Abhaya is the body\'s posture for receiving her protection.',
    pair_with_mantra_slug: 'om-tare-tuttare-ture-soha',
    pair_with_sound: 'Anxiety Relief — pair as an active-practice gesture during the audio; the hand raised gives the nervous system a kinesthetic anchor as the words walk the practitioner through grounding.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aries',
    key_questions: [
      'What fear am I about to walk into, and what would it feel like to raise the hand that says I will walk anyway?',
      'Where have I been pretending not to be afraid when honest acknowledgment of the fear would actually serve me?',
      'Who in my life is silently asking me to offer Abhaya — to be the steady presence that says *the path is walkable*?'
    ]
  },
  {
    slug: 'varada',
    text: 'Varada Mudra',
    translation: 'The gesture of giving / boon-bestowing.',
    tradition: 'Pan-dharmic — Hindu, Buddhist; the iconic giving gesture of every benevolent deity',
    glyph: '🤲',
    family: 'heart',
    position: 9,
    one_liner: 'Hand at hip level, palm facing forward and slightly down, fingers pointing down. The buddha-gives-the-gift gesture. Generosity made visible.',
    meaning: 'Varada Mudra is the companion gesture to Abhaya — where Abhaya is the raised hand of protection, Varada is the lowered hand of giving. In nearly every classical statue of a benevolent deity (the Medicine Buddha, Avalokiteshvara, Vishnu, the Bodhisattvas), one hand is raised in Abhaya (do not fear) and the other lowered in Varada (here is the gift). The right hand is held at the level of the hip, palm rotated to face forward and slightly downward, fingers pointing toward the earth. The gesture is the deity\'s declaration that the gift — the boon, the protection, the dharma — is freely available to the seeker who approaches. To form Varada as a practitioner is to take the gesture out of the temple iconography and use it as a reminder that the practitioner\'s own giving must also be free, lowered, available — not held above the recipient as a power-display, but offered at hip-level as something that is theirs to take.',
    what_it_does: 'Re-orients the practitioner from receiving to giving. The lowered hand, the downward palm, the open fingers all cue the nervous system into the giving-mode rather than the receiving-mode. Particularly useful for practitioners whose default has been to grasp, to take, to need — the gesture is a small re-training of the body toward generosity. Practiced as a daily mudra, it shifts the practitioner\'s habitual relationship to abundance from scarcity-and-grasping to flow-and-offering.',
    how_to_form: 'Stand or sit upright. Lower the right hand to hip level, elbow relaxed at the side. Rotate the palm so it faces forward and slightly downward (about 45 degrees toward the floor). Fingers point gently toward the earth. The left hand can rest in the lap or hold Abhaya for the classical pair. Soft breath, soft gaze. Hold for the length of any practice where the work is to cultivate generosity — 10-20 minutes daily, or as the gesture you hold while giving something difficult away.',
    in_love: 'A relationship in which the practitioner has chosen to give without scorekeeping — Varada is the gesture of love offered as a gift, not as an investment with expected returns. Reversed: a partnership where one partner is giving with secret accounting; the gesture is meant to be free, and accounting cancels the giving.',
    in_work: 'Service work, philanthropy, teaching, mentorship. Anywhere the work is to give from abundance rather than from obligation. Varada Mudra at the start of a teaching block, a service shift, a difficult act of generosity is the practitioner\'s reminder that the gift is theirs to give freely.',
    the_gift: '*Generosity becomes posture, not effort.* The lowered hand, the open palm, the body remembers what it is to give freely.',
    the_shadow: 'Performance of generosity. Varada Mudra used as a way to be seen as generous, while internal scorekeeping continues. The gesture must be coupled with the inner work; otherwise it is just a pose for an audience.',
    pair_with_chakra: 'Heart — Varada Mudra is the heart chakra offering itself outward; the hand at hip level is the lowered chalice from which the heart pours.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Lokah Samastah Sukhino Bhavantu — *may all beings be happy*; the mantra of widening the radius of giving, Varada is the body\'s posture for the offering.',
    pair_with_mantra_slug: 'lokah-samastah',
    pair_with_sound: 'Abundance — pair when the work is to shift from grasping to flowing; Varada teaches the body that giving and receiving are the same gesture from opposite angles.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What gift have I been holding above the recipient as a power-display, and what would it feel like to lower the hand?',
      'Where is my generosity contaminated by hidden scorekeeping, and what would freely-given look like instead?',
      'Whose hand is lowered toward me right now, offering a gift I have not yet had the humility to receive?'
    ]
  },
  {
    slug: 'bhumisparsha',
    text: 'Bhumisparsha Mudra',
    translation: 'The gesture of touching the earth / earth-witness.',
    tradition: 'Buddhist — the gesture of Shakyamuni Buddha at the moment of enlightenment',
    glyph: '🌍',
    family: 'heart',
    position: 10,
    one_liner: 'Right hand reaches down, fingers touching the earth. The buddha-touching-the-ground gesture at the moment of awakening — calling the earth to witness.',
    meaning: 'Bhumisparsha Mudra is the most narratively specific mudra in the buddhist tradition. According to the classical account of the Buddha\'s enlightenment under the bodhi tree at Bodhgaya, Mara — the personification of doubt, fear, and illusion — challenged the seated Siddhartha: *who witnesses your right to awaken?* In response, the Buddha did not speak. He simply lowered his right hand from his lap and touched the earth — calling the earth itself, the ground he had walked through every previous lifetime, to be his witness. The earth responded by trembling. And in that moment, awakening was complete. Every seated buddha-statue with the right hand reaching toward the ground depicts this exact moment. To form Bhumisparsha as a practitioner is to call upon the same witness for the practitioner\'s own moments of doubt — to remember that the earth, the body, the lineage, the practice itself, all bear witness to the work the practitioner has done. The gesture is the answer to every internal Mara who asks *who do you think you are*.',
    what_it_does: 'Grounds the practitioner in the legitimacy of their own path. The downward reach toward earth, the kinesthetic anchor of fingertip-on-ground (or fingertip-on-knee, when seated cross-legged), reminds the body that the practitioner is held by something larger and older than the doubt. Particularly useful in moments of imposter syndrome, self-doubt, or the felt-sense of *who am I to attempt this*. Bhumisparsha is the body\'s answer: *the earth witnesses; that is enough*.',
    how_to_form: 'Sit cross-legged or on a chair. Left hand rests in the lap, palm up, holding Dhyana Mudra. Right hand reaches down, fingers extending toward the earth. If seated on the ground, the fingertips actually touch the earth (or floor). If seated on a chair, the fingers touch the knee or the side of the leg. The palm faces inward (toward the body). Hold for the length of the meditation when the work is to address doubt — typically 10-30 minutes. Excellent before any significant teaching, performance, or threshold-crossing.',
    in_love: 'A relationship that has weathered doubt — the partners can each call the earth to witness what they have built together, and the earth answers by trembling its agreement. Reversed: a partnership where one partner is still asking the external world to validate the love, rather than letting the earth (the felt-sense of what is true) witness for itself.',
    in_work: 'Threshold-crossing work: the day before a big launch, before submitting the book, before going on stage. Bhumisparsha is the gesture of the practitioner who has done the work and is calling the earth to witness — and trusting the earth\'s answer.',
    the_gift: '*The witness is already here.* The earth, the lineage, the body — all of them already bear witness, and no further validation is needed.',
    the_shadow: 'External validation. Bhumisparsha addresses internal doubt; if the practitioner is using the gesture while still seeking external approval, the witness has not yet been internalized. The work is to let the earth be enough.',
    pair_with_chakra: 'Root — Bhumisparsha is the root chakra reaching toward earth itself; the gesture grounds the practitioner in the most foundational support there is.',
    pair_with_chakra_slug: 'root',
    pair_with_mantra: 'Om Namah Shivaya — pair when the work is to remember that the practitioner is held by a force older than every doubt; Shiva is the earth that bears witness.',
    pair_with_mantra_slug: 'om-namah-shivaya',
    pair_with_sound: 'Deep Healing — pair before any threshold-crossing meditation; Bhumisparsha calls the earth, the audio walks the practitioner through.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What internal Mara is asking *who do you think you are*, and what does the earth\'s witness answer?',
      'Where have I been seeking external validation when the earth, the body, the lineage already bear witness to my work?',
      'What threshold am I about to cross where Bhumisparsha — the small lowering of the hand — would change everything?'
    ]
  },
  {
    slug: 'shuni',
    text: 'Shuni Mudra',
    translation: 'The gesture of patience / discipline.',
    tradition: 'Vedic / Yogic — the Saturn mudra, balancing the patience-and-discipline current',
    glyph: '🪐',
    family: 'power',
    position: 11,
    one_liner: 'Middle finger meets thumb. The Saturn gesture — the mudra of patience, discipline, and the long endurance of the work.',
    meaning: 'Shuni Mudra activates the element of *akasha* (space/ether) and is associated in Vedic finger-astrology with the planet Saturn — the slow, disciplined, long-cycle teacher of the zodiac. The middle finger represents Saturn in the hand-as-cosmos mapping, and Saturn represents the long-form work: the discipline that does not produce quick results but produces results that hold. When the middle finger meets the thumb, the practitioner activates the patience-channel — the willingness to wait, to keep showing up to a practice that has not yet borne fruit, to accept that real change is slow change. Shuni is the gesture of the practitioner mid-decade through a craft, mid-year through a degree, mid-life through the work that is finally maturing. Classical Indian texts call it *the mudra of the long path* — held over weeks, it strengthens the practitioner\'s capacity to sustain effort without immediate reward.',
    what_it_does: 'Steadies the long-form will. The middle finger\'s contact with the thumb produces a kinesthetic signal the nervous system recognizes as *we are in this for the long haul*. Particularly useful for practitioners working on multi-year projects, deep habit-changes, addiction recovery, slow-motion creative work, or anything where the work asks for years of patience the body has not yet learned to give. The gesture is small but the field of effect is large.',
    how_to_form: 'Sit. Rest hands on knees, palms up. Tip of middle finger touches tip of thumb. Other three fingers (index, ring, pinky) extend gently outward. Spine long; breath steady. Hold 15-45 minutes daily for at least a month to feel the patience-current strengthen. Particularly useful at the start of any practice that requires sustained discipline.',
    in_love: 'A long-term relationship that has weathered the unsexy middle decades — Shuni is the gesture of the partners who have done the long work and are still in the practice. Reversed: a partnership where one partner is rushing the maturation, demanding the depth of a 20-year love at year three.',
    in_work: 'Multi-year craft: the writing of a long book, the building of a slow business, the mastering of a discipline. Shuni at the start of the daily practice block is the gesture of the practitioner remembering: *this is year four, year four is supposed to feel like this, keep going*.',
    the_gift: '*Patience becomes structural.* The body learns to sustain effort without the dopamine of immediate reward.',
    the_shadow: 'Rigidity. Shuni\'s discipline can ossify into joyless duty if it is not balanced with the lighter mudras. The long path is meant to be walked with breath, with rhythm, with occasional rest — not as a tomb.',
    pair_with_chakra: 'Throat — Shuni Mudra steadies the throat chakra (vishuddha), the seat of disciplined expression; the long-form voice that says the same true thing for decades.',
    pair_with_chakra_slug: 'throat',
    pair_with_mantra: 'Om Namah Shivaya — pair for the long-form work; Shiva is the ascetic of the long path, Shuni is the body\'s posture for the same patience.',
    pair_with_mantra_slug: 'om-namah-shivaya',
    pair_with_sound: 'Letting Go — pair when the work is the long-form release of attachment to immediate results; Shuni teaches the body to keep going without the reward.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What multi-year work am I in the middle of, and have I given my body permission to feel the unsexy middle?',
      'Where have I been demanding immediate results from a practice that is asking for years of patience?',
      'What discipline have I been calling rigidity that is actually structural patience — and how do I let it breathe?'
    ]
  },
  {
    slug: 'surya',
    text: 'Surya Mudra',
    translation: 'The gesture of the sun.',
    tradition: 'Vedic / Yogic — the sun mudra, activating the fire-and-transformation current',
    glyph: '☀️',
    family: 'power',
    position: 12,
    one_liner: 'Ring finger folds under thumb. The sun gesture — fire activated, metabolism kindled, the body warmed from inside.',
    meaning: 'Surya Mudra is the gesture of the sun — the activator, the metabolizer, the warmer. In the Vedic hand-as-cosmos mapping, the ring finger represents the element earth (the body, density, mass), and the thumb represents fire (the activating force). When the ring finger folds DOWN into the base of the thumb (not the side — the inside of the thumb-pad), the gesture symbolically subdues earth with fire — the dense becomes warmer, the slow becomes faster, the cold becomes activated. Classical Indian sources describe Surya Mudra as the *agni-stimulating* gesture — kindling the digestive fire (jatharagni), the metabolic fire of the body. Practitioners use it when energy is low without being depleted (Prana Mudra is for depletion), when the body is cold, when the metabolism has gone sluggish, when the work requires more solar fire than the day has supplied. The gesture is bright, brief, activating — held for shorter sessions than the foundation mudras, because the fire it kindles does not need to burn long to do its work.',
    what_it_does: 'Kindles internal fire. The folding of the ring finger (earth) under the thumb (fire) is the body\'s small declaration that *the metabolizing force is now active*. Practitioners report subtle warming within 5-10 minutes of holding the gesture; the digestive fire stirs; sluggishness lifts. Particularly useful in winter, in cold climates, after heavy meals, or when the body has gone slow without being tired. Not for practitioners with already-high pitta (fire constitution); Surya intensifies, it does not balance.',
    how_to_form: 'Sit comfortably. Bend the ring finger DOWN so the fingertip touches the base of the thumb (the soft mound at the base of the thumb-palm). Place the thumb on top of the bent ring finger, pressing gently. The remaining three fingers (index, middle, pinky) extend gently outward. Rest hands on knees, palms up. Hold 10-15 minutes — shorter than the foundation mudras. Once the body warms, release. Best practiced in the morning or early afternoon, never close to sleep.',
    in_love: 'A relationship that has gone cold but not dead — Surya is the gesture of the partner kindling the fire that the practice of long-love sometimes needs. Reversed: a partnership where one partner is trying to over-warm a relationship whose cooling was actually appropriate to its season.',
    in_work: 'Work that has gone sluggish — the project that has stalled, the practice that has gone routine, the body that has slowed in the middle of the long day. Surya at the start of the afternoon block is the gesture of metabolizing the morning\'s lunch and re-kindling the work-fire.',
    the_gift: '*Internal fire returns.* The metabolizing force activates; the cold lifts; the sluggishness clears.',
    the_shadow: 'Over-stimulation. Surya kindles fire, and a practitioner who is already over-fired (pitta-dominant, agitated, inflamed) will be made worse by the gesture. The body\'s constitution must be honored; not every mudra is for every body.',
    pair_with_chakra: 'Solar Plexus — Surya Mudra activates the solar plexus chakra (manipura), the seat of digestive and metabolic fire; the gesture and the chakra share the same solar element.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mantra: 'Gayatri Mantra — the sunrise prayer; pair Surya for solar activation, Gayatri for solar invocation; gesture and sound complete the offering.',
    pair_with_mantra_slug: 'gayatri-mantra',
    pair_with_sound: 'Abundance — pair when the work is to re-kindle the inner fire that abundance-consciousness requires; Surya is the body\'s posture for activated reception.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my body has the fire gone sluggish, and have I given Surya the few minutes it needs to re-kindle?',
      'What project, practice, or relationship has gone cold for the right reasons — and which one has gone cold for the wrong reasons?',
      'Where am I already over-fired, and would the practice today be cooling-down rather than kindling-up?'
    ]
  },
  {
    slug: 'vayu',
    text: 'Vayu Mudra',
    translation: 'The gesture of air / wind.',
    tradition: 'Vedic / Yogic — the air mudra, balancing the wind-element current',
    glyph: '🌬️',
    family: 'power',
    position: 13,
    one_liner: 'Index folds under thumb. The air-balance gesture — for the body whose vata (wind) has gone scattered or excessive.',
    meaning: 'Vayu Mudra is the air-balancing gesture. In the Vedic five-element mapping, the index finger represents air (vayu, the wind element), and excessive air in the body produces the patterns Ayurveda groups under *vata imbalance*: scatteredness, restlessness, dryness, insomnia, anxiety-of-the-wandering-mind variety, joint cracking, gas, flightiness. When the index finger folds DOWN into the base of the thumb, the gesture symbolically subdues air — the wind-element is reduced, the scattered becomes settled, the dry becomes moistened, the restless becomes grounded. Classical Ayurvedic sources name Vayu Mudra as the daily mudra for vata-dominant constitutions, particularly in autumn (vata season) and old age (vata life-stage). Where Surya kindles fire and Prana activates vital force, Vayu *settles* — it is a calming mudra, not an activating one. Held over weeks, it patiently re-grounds the scattered nervous system into the body it has been floating above.',
    what_it_does: 'Calms wind. The folding of the index (air) under the thumb (fire) is the body\'s small request to the wind-element to settle. Practitioners with vata imbalance — racing thoughts, anxious wandering, joint pain, dry skin, restless sleep — report measurable settling within a week of daily practice. The gesture is the body\'s antidote to *too-much-air*: the over-stimulation of modern life, the device-scattered attention, the dryness of insufficient sleep.',
    how_to_form: 'Sit comfortably. Bend the index finger DOWN so the fingertip touches the base of the thumb (the soft mound at the base of the thumb-palm). Place the thumb on top of the bent index finger, pressing gently. The remaining three fingers (middle, ring, pinky) extend gently outward. Rest hands on knees, palms up. Hold 15-45 minutes daily. Particularly good practice before sleep (vata imbalance disturbs sleep) and in the late afternoon (vata accumulates in the evening hours).',
    in_love: 'A relationship that has gone scattered — too many texts, too many half-conversations, too much wind without ground. Vayu is the gesture of the partner choosing to settle the air. Reversed: a partnership where one partner is using Vayu to suppress legitimate wind that needed to move.',
    in_work: 'Work that has gone scattered — the morning of 47 open browser tabs, the afternoon of half-finished tasks, the day that has fragmented past coherence. Vayu before re-entering the work is the gesture of asking the wind to settle so a single thread can be picked up and followed.',
    the_gift: '*Wind settles.* The scattered nervous system grounds; the restlessness quiets; the body remembers where it lives.',
    the_shadow: 'Suppression. Sometimes the wind is moving because something legitimate is happening — an emotion that needs to be felt, an idea that needs to scatter before it can re-form. Vayu held without discernment can suppress what should be allowed to move. The work is to ask: *is this wind that needs settling, or wind that is in the middle of its work?*',
    pair_with_chakra: 'Heart — Vayu Mudra settles the heart chakra (anahata), the seat of the breath and the vayu element in the body; the heart that has gone scattered finds its center.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'So Hum — the natural-breath mantra; pair Vayu for the gesture-of-settling, So Hum for the sound-of-settling; the wind is calmed in two registers.',
    pair_with_mantra_slug: 'so-hum',
    pair_with_sound: 'Sleep — pair before bed when vata imbalance is disturbing sleep; Vayu settles the wind, the audio carries the body into rest.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'gemini',
    key_questions: [
      'Where has my wind been excessive — scattered attention, racing thoughts, restless sleep — and have I given the gesture the daily practice it needs?',
      'What wind in my life needs to settle, and what wind is in the middle of its legitimate work?',
      'Where am I using fragmentation as a way to avoid the single thread that is actually mine to follow?'
    ]
  },
  {
    slug: 'apana',
    text: 'Apana Mudra',
    translation: 'The gesture of downward-cleansing force.',
    tradition: 'Vedic / Yogic — the apana-vayu mudra, cleansing and elimination',
    glyph: '🌊',
    family: 'power',
    position: 14,
    one_liner: 'Middle + ring meet thumb; index and pinky extend. The cleansing gesture — the downward-moving energy that releases what the body is done with.',
    meaning: 'Apana Mudra activates the *apana vayu* — one of the five vayus (pranic currents) of yogic anatomy, specifically the downward-moving force responsible for elimination, release, and the body\'s cleansing functions. Where prana vayu moves upward and inward (intake, energy, breath in), apana vayu moves downward and outward (release, elimination, breath out, menstruation, childbirth, defecation, tears, sweat). The body is healthy when both vayus move freely; illness often begins when apana is blocked — constipation, urinary retention, suppressed grief, suppressed periods, the inability to release what the body is done with. The gesture is specific: middle finger and ring finger touch the thumb (representing the three doshas — fire, water, earth — converging at the elimination channel), while index (air) and pinky (water) extend outward, allowing the downward flow to move without obstruction. Apana Mudra is the body\'s small request: *please let what is finished, leave*. Held daily over weeks, it supports the body\'s cleansing systems — digestive, urinary, menstrual, lymphatic, emotional.',
    what_it_does: 'Activates the downward-cleansing current. The gesture is widely taught in yoga as a digestive-support and detoxification mudra, but its deeper use is energetic-emotional: the body that cannot release physically often cannot release emotionally either, and apana mudra addresses both registers at once. Practitioners report measurable improvement in elimination patterns within a week of daily practice; emotional release (grief surfacing, old tears finally falling) often accompanies.',
    how_to_form: 'Sit comfortably. Touch the tips of the middle finger and ring finger to the tip of the thumb. The index finger and pinky finger extend straight outward, not stiff. Rest hands on knees, palms up. Hold 15-30 minutes daily — particularly useful first thing in the morning (the natural apana hour, when the body wants to eliminate) and during menstruation (when the apana current is naturally amplified). Avoid during pregnancy without guidance — the cleansing-and-downward-moving force is contraindicated in the first two trimesters.',
    in_love: 'A relationship that needs to release what is finished — Apana is the gesture of the partner who has finally accepted that something is over and is asking the body to help with the letting-go. Reversed: a partnership where one partner is using cleansing as a way to bypass grief; the release must be felt, not just performed.',
    in_work: 'The end of a project, the close of a chapter, the wrapping-up of a long arc. Apana is the gesture of the practitioner who has finished and is asking the body to integrate the closure — to release what was carried and not yet put down.',
    the_gift: '*What is finished can leave.* The downward-cleansing current activates; the body releases what it has been holding.',
    the_shadow: 'Bypass. Apana Mudra can be used as a way to push away what should be felt first. The release is real, but the grief, the anger, the sorrow that came with the held-thing must be allowed before the cleansing can do its full work.',
    pair_with_chakra: 'Sacral — Apana Mudra activates the sacral chakra (svadhishthana) and the downward-cleansing channels it governs; the gesture and the chakra share the elimination-and-flow current.',
    pair_with_chakra_slug: 'sacral',
    pair_with_mantra: 'Om Ah Hum — body-speech-mind purification; Apana is the body\'s posture for releasing what each of the three registers has been holding.',
    pair_with_mantra_slug: 'om-ah-hum',
    pair_with_sound: 'Letting Go — pair when the work is full-spectrum release; Apana activates the body, the audio walks the practitioner through what the body is letting go of.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What is my body holding that is finished but has not yet been allowed to leave?',
      'Where am I trying to cleanse what I have not yet allowed myself to feel?',
      'What downward, releasing, ending-this work is the practice today asking of me?'
    ]
  },
  {
    slug: 'shunya',
    text: 'Shunya Mudra',
    translation: 'The gesture of emptiness / void.',
    tradition: 'Vedic / Yogic — the space mudra, balancing the akasha element',
    glyph: '⚫',
    family: 'power',
    position: 15,
    one_liner: 'Middle finger folds under thumb. The emptiness gesture — the practice of meeting the space that opens when the heart-mind is no longer full.',
    meaning: 'Shunya Mudra is the gesture of *shunyata* — emptiness, void, the space that opens when consciousness has stopped trying to fill itself. In the Vedic five-element mapping, the middle finger represents akasha (space, ether), and excessive akasha in the body produces patterns Ayurveda groups under *too much space*: ear problems (the ear-canal is the most akasha-dominant organ), dizziness, the felt-sense of disconnection, dissociation. When the middle finger folds DOWN into the base of the thumb, the gesture reduces excess space — the practitioner returns from dissociation into embodiment. Classical Indian sources also use Shunya Mudra as a treatment-mudra for ear infections, vertigo, and hearing problems; daily practice of 30-45 minutes is reported to support healing. The deeper use is contemplative: Shunya is the gesture of the practitioner who has tasted shunyata (in vipassana, in deep meditation, in psychedelic insight) and is now asking the body to integrate the experience without dissociation. The void is real; the body must remain inhabited while the void is met.',
    what_it_does: 'Reduces excess space; supports the body\'s integration after deep contemplative or transformational experience. The folding of the middle finger (akasha) under the thumb (fire) is a request to the space-element to consolidate — to come back into form, to re-inhabit the body that the consciousness has been floating beyond. Used as a treatment mudra for ear problems, vertigo, and the dissociative aftermath of intense practice.',
    how_to_form: 'Sit comfortably. Bend the middle finger DOWN so the fingertip touches the base of the thumb. Place the thumb on top of the bent middle finger, pressing gently. The remaining three fingers (index, ring, pinky) extend gently outward. Rest hands on knees, palms up. Hold 30-45 minutes — longer than the foundation mudras, because integration-work is slow work. Particularly useful after deep meditation, after psychedelic experiences, after grief that has briefly dissociated the practitioner from the body.',
    in_love: 'A relationship after a major rupture or revelation — one or both partners have touched something larger than the relationship, and the work is to come back into the body of the love without letting the larger truth dissociate them from it. Reversed: a partnership where one partner is using *I have touched the void* as a way to refuse embodiment in the relationship.',
    in_work: 'Integration work — the days and weeks after a major creative breakthrough, after a meditation retreat, after a transformational experience. Shunya is the gesture of the practitioner who has touched the larger field and is now asking the body to come back and finish the work in form.',
    the_gift: '*Embodiment returns.* The space that opened in the experience is integrated into the body that remains the practitioner\'s home.',
    the_shadow: 'Spiritual bypass through dissociation. *I have touched the void, so daily life no longer applies to me* is a common after-effect of intense practice. Shunya is the antidote: the practitioner is asked to come back into the body and let the void inform the embodied life, not replace it.',
    pair_with_chakra: 'Third Eye — Shunya Mudra integrates the third-eye chakra (ajna), the seat of vision and the practitioner\'s relationship to what is larger than form; the gesture brings the vision back into the body.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_mantra: 'Om Shanti — peace; pair Shunya for the gesture of integration, Om Shanti for the sound of the peace that is the void\'s actual face.',
    pair_with_mantra_slug: 'om-shanti',
    pair_with_sound: 'Deep Healing — pair when integration is the work; Shunya brings the body back, the audio holds the space for the integration to complete.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What larger thing have I touched recently that has not yet been integrated into the daily body?',
      'Where am I using dissociation as a substitute for embodiment, and what would coming back fully feel like?',
      'How do I let the void inform my life without letting it replace my life?'
    ]
  },
  {
    slug: 'kalesvara',
    text: 'Kalesvara Mudra',
    translation: 'The gesture of the lord of time / mind-calming.',
    tradition: 'Vedic / Yogic — the time-stilling mudra, calming the over-active mind',
    glyph: '🕉️',
    family: 'power',
    position: 16,
    one_liner: 'Middle fingers touch tip to tip; other fingers fold inward; thumbs point toward chest. The most architecturally complex mudra in the practice — the gesture that calms the rushing, time-pressured mind.',
    meaning: 'Kalesvara Mudra is named after Kala-Ishvara — *kala* meaning *time*, *ishvara* meaning *lord*. It is the gesture of the practitioner asking time itself to slow, asking the rushing, future-pressured, anxious mind to step out of the time-stream for a moment and remember that the present is the only place the body actually is. The form is complex: the tips of the two middle fingers touch each other point-to-point; the other six fingers (index, ring, pinky on each hand) bend and touch each other at the second knuckle, palm-side; the thumbs touch tip-to-tip and point toward the chest. The resulting shape is a small bowl held in front of the heart, with the middle fingers reaching forward like the prow of a boat. The architecture is intentional — the geometry of the gesture is what does the work, more so than in any of the simpler mudras. Classical Indian sources describe Kalesvara as the *mind-calming mudra* — the gesture for practitioners whose minds are racing too fast for the body to keep up. Held over weeks, it is said to weaken the grip of compulsive thought and re-establish the practitioner\'s capacity to be present.',
    what_it_does: 'Calms the over-active mind. The complex geometry, the inward-pointing thumbs (toward the heart), the small bowl-shape held at the chest, and the forward-reaching middle fingers create a kinesthetic structure that the brain finds difficult to maintain while also racing — holding the gesture correctly requires enough attention that the racing slows. The mudra is therefore both a posture AND a practice: the difficulty of forming it correctly is part of the practice. Particularly useful for practitioners with compulsive thinking patterns, anxiety, OCD-spectrum challenges, or the *can\'t-stop-the-mind* aftermath of trauma.',
    how_to_form: 'Sit. Bring hands in front of the chest. Tips of the two middle fingers touch each other (palm-side facing each other). The other six fingers (index, ring, pinky on each hand) bend inward and touch each other at the SECOND knuckle (not the first). The thumbs touch tip-to-tip and point TOWARD the chest, not outward. The whole shape is a small architectural bowl held in front of the heart, with the middle-finger prow reaching forward. Hold 15-20 minutes daily. Difficult at first; this is the practice. Sometimes paired with mantra to give the over-active mind something to chew on while the body settles.',
    in_love: 'A relationship where one partner has been rushing the other — pressing the timeline, demanding decisions before the other is ready. Kalesvara is the gesture of the partner choosing to step out of the rush and meet the relationship at the pace it can actually hold. Reversed: a partnership where one partner uses *time-stilling* as a way to avoid commitment to the future the relationship needs.',
    in_work: 'Work under time-pressure where the pressure has become the problem. Kalesvara before a deadline-driven block is the gesture of the practitioner reminding themselves that the body cannot work well at racing-speed and that slowing is the actual path to faster completion.',
    the_gift: '*Time slows; presence returns.* The racing mind meets a body that is willing to wait, and the gap between them closes.',
    the_shadow: 'Avoidance of legitimate urgency. Sometimes time is genuinely short and the work is to move quickly. Kalesvara is for racing-without-cause; if the cause is real, the gesture can become a way to avoid the action the moment is asking for.',
    pair_with_chakra: 'Crown — Kalesvara Mudra integrates the crown chakra (sahasrara) with the heart; the time-pressured mind is brought back into the timeless presence the crown opens into.',
    pair_with_chakra_slug: 'crown',
    pair_with_mantra: 'Om — the seed sound of all time and all timelessness; pair Kalesvara for the gesture, Om for the breath; together they meet the time-stream from both sides.',
    pair_with_mantra_slug: 'om',
    pair_with_sound: 'Anxiety Relief — pair when the work is to interrupt the time-pressured spiral; Kalesvara holds the body, the audio walks the nervous system back into present time.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'virgo',
    key_questions: [
      'Where has my mind been racing faster than my body can hold, and have I given Kalesvara the difficult attention it asks for?',
      'What time-pressure am I imposing on a situation that is actually moving at the pace it can?',
      'When did I last let the architecture of the gesture be the practice — letting the difficulty of the form be what does the work?'
    ]
  }
]

const MUDRA_BY_SLUG: Record<string, MudraGuide> = Object.fromEntries(MUDRAS.map((m) => [m.slug, m]))

export const MUDRA_SLUGS = MUDRAS.map((m) => m.slug)

export function isMudraSlug(s: string): boolean {
  return s in MUDRA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  foundation: { c1: '#4a8a9c', c2: '#1c4a5c', label: 'Foundation mudras · the daily gestures' },
  heart: { c1: '#d68aa0', c2: '#a04a64', label: 'Heart mudras · the compassion gestures' },
  power: { c1: '#d4a64a', c2: '#8a5818', label: 'Power mudras · the elemental gestures' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function mudraPageHTML(slug: string): string {
  const r = MUDRA_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=mudra-${slug}`

  const title = `${escapeHtml(r.text)} — Meaning, How to Hold &amp; What It Does · gab44 ✨`
  const description = `What ${r.text} actually means, the tradition it comes from, what the mudra does in the body and nervous system, how to form the gesture (finger placement, breath, duration), in love, in work, the gift, the shadow, pair-with chakra/mantra/sound/zodiac. Hand-written, warm, lineage-honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Mudras', item: `${SITE_URL}/gab44/mudras` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/mudras/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — meaning, how to hold & what it does`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/mudras/${slug}`,
        about: `${r.text} mudra, ${r.tradition}, hand gesture, yogic practice, buddhist practice`
      }
    ]
  })

  const otherMudrasHtml = MUDRAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/mudras/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text.split(' ').slice(0, 3).join(' '))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mudras/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} — meaning & how to hold`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/mudras/${slug}" />
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
  .brand-mark { display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px; }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 { font-size: 36px; line-height: 1.1; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  .glyph { font-size: 1.25em; padding-right: 12px; }
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
  .translation-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 12px 0 24px; border-left: 4px solid var(--c1); }
  .translation-card .lbl { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .translation-card .text { font-size: 16px; color: var(--fg); margin: 0 0 8px; line-height: 1.6; }
  .translation-card .tradition { font-size: 12px; color: var(--fg-muted); font-style: italic; margin: 0; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px; position: relative; overflow: hidden;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06); }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .signs-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-card p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } h1 { font-size: 28px; } }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px; padding: 14px 18px; }
  .ctx-card.love { border-left: 4px solid #d68aa0; }
  .ctx-card.work { border-left: 4px solid #5a6cb8; }
  .ctx-card .lbl { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .ctx-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; margin: 8px 0; }
  .panel.gift { border-left: 4px solid var(--c1); }
  .panel.shadow { border-left: 4px solid #d63d4d; }
  .panel.where { border-left: 4px solid #5a8ec6; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .pair-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 700px) { .pair-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 420px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; font-size: 13px; color: var(--fg-dim); text-decoration: none;
    transition: border-color 0.15s; }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent);
    margin-bottom: 4px; text-transform: capitalize; }
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
  .other-mudras { margin: 36px 0 22px; }
  .other-mudras h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .mudras-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .mudras-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 420px) { .mudras-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 10px; line-height: 1.3; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/mudras">all 16 mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Mudras</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>mudra ${r.position} of 16</span>
      <span>${escapeHtml(r.family)}-family</span>
    </div>

    <div class="translation-card">
      <div class="lbl">translation</div>
      <p class="text">${escapeHtml(r.translation)}</p>
      <p class="tradition">${escapeHtml(r.tradition)}</p>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.text.split(' ').slice(0, 3).join(' '))} actually carries</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🌀</span>what it does</h2>
    <div class="signs-card">
      <h3>the work this mudra carries</h3>
      <p>${escapeHtml(r.what_it_does)}</p>
    </div>

    <h2><span class="icon">🤲</span>how to form</h2>
    <div class="panel where">
      <h3>finger placement · breath · duration</h3>
      <p>${escapeHtml(r.how_to_form)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this mudra teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the gesture becomes decoration</h3>
      <p>${escapeHtml(r.the_shadow)}</p>
    </div>

    <h2><span class="icon">💞</span>in love &amp; in work</h2>
    <div class="ctx-grid">
      <div class="ctx-card love">
        <div class="lbl">in love</div>
        <p>${escapeHtml(r.in_love)}</p>
      </div>
      <div class="ctx-card work">
        <div class="lbl">in work</div>
        <p>${escapeHtml(r.in_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${r.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/gab44/mantras/${r.pair_with_mantra_slug}">
        <div class="pair-label">mantra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_mantra_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_mantra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${r.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_sound)}</div>
      </a>
      <a class="pair-card" href="/gab44/${r.pair_with_sign}/about">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sign)}</div>
        <div class="pair-text">Sign whose energy aligns with this gesture.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after holding</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which mudra *your* chart is asking for?</h2>
      <p>Each chart has a primary mudra — the gesture your particular wiring has been waiting to learn. A <strong>personal reading</strong> identifies it and tells you the chakra, the timing, and the breath that will make the gesture land in your body. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Get my mudra read →</a>
    </section>

    <section class="other-mudras">
      <h3>the other 15 mudras</h3>
      <div class="mudras-grid">
        ${otherMudrasHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/mudras">all 16 mudras</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function mudraIndexHTML(): string {
  const familySections = (['foundation', 'heart', 'power'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = MUDRAS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/mudras/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/16</span>
        </div>
        <div class="name">${escapeHtml(s.text)}</div>
        <div class="trans">${escapeHtml(s.translation)}</div>
        <div class="teaser">${escapeHtml(s.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="fam-section">
      <h2 class="fam-h" style="--c1:${accent.c1};--c2:${accent.c2}">${escapeHtml(accent.label)}</h2>
      <div class="grid">
        ${items}
      </div>
    </section>`
  }).join('\n      ')

  const collectionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The 16 Mudras — Meanings, How to Hold & What They Do',
    description: 'Hand-written guides to 16 of the most-practised mudras across yogic, hindu and buddhist traditions. Each page covers meaning, translation, what the mudra does in the body, how to form the gesture, the gift and the shadow.',
    url: `${SITE_URL}/gab44/mudras`,
    hasPart: MUDRAS.map((m) => ({
      '@type': 'Article',
      name: m.text,
      url: `${SITE_URL}/gab44/mudras/${m.slug}`,
      about: m.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 16 Mudras — Meanings, How to Hold &amp; What They Do · gab44 ✨</title>
<meta name="description" content="The 16 most-practised mudras (Gyan, Chin, Anjali, Dhyana, Prana, Hridaya, Padma, Abhaya, Varada, Bhumisparsha, Shuni, Surya, Vayu, Apana, Shunya, Kalesvara) — what each gesture means, the tradition it comes from, what it does in the body and nervous system, how to form it. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mudras" />
<meta property="og:title" content="The 16 Mudras — Meanings &amp; How to Hold · gab44" />
<meta property="og:description" content="From Gyan (the meditation gesture) to Kalesvara (the calming-mind gesture) — what each mudra carries, hand-written, honest about lineage." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${collectionLd}</script>
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 760px; }
  .intro { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim); }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .fam-section { margin: 28px 0 16px; }
  .fam-h { font-size: 18px; font-weight: 700; color: var(--fg);
    letter-spacing: 0.05em; text-transform: lowercase; margin: 0 0 14px;
    padding-left: 12px; border-left: 4px solid var(--c1); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 18px 20px; border-radius: 12px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .glyph { font-size: 24px; }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 4px; line-height: 1.3; }
  .card .trans { font-size: 12px; color: var(--accent); margin-bottom: 6px; font-weight: 500; line-height: 1.4; }
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
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/solfeggio">solfeggio</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 16 <span class="accent">Mudras</span> — meanings, how to hold &amp; what they do</h1>
    <p class="sub">Hand-written guides to the most-practised hand gestures across yogic and buddhist tradition. From Gyan (the meditation gesture) to Kalesvara (the gesture that calms a busy mind). Each page has the actual lineage, the practice, the gift, the shadow.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right gesture for your moment?</strong> Click any of the 16 below. Every page has the actual *meaning* (tradition + translation), what the mudra *does* in the body and nervous system, *how to form* it (finger placement, breath, duration), what it means in love and in work, the *gift* it teaches, the *shadow* (gesture-as-decoration is named where relevant), and pair-with cards for chakra, mantra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The 16 mudras cluster naturally. <em>Foundation</em> (Gyan, Chin, Anjali, Dhyana, Prana) is the daily-gesture family — the ones you'll meet first in any practice. <em>Heart</em> (Hridaya, Padma, Abhaya, Varada, Bhumisparsha) is the compassion family — the gestures that open the heart and root the body. <em>Power</em> (Shuni, Surya, Vayu, Apana, Shunya, Kalesvara) is the elemental family — gestures that balance the five elements (space, air, fire, water, earth) and the planetary forces inside the body.</p>
      <p><strong>Mudras are gifts from living traditions.</strong> Each page names the lineage (Hatha Yoga Pradipika, Gheranda Samhita, Vajrayana Buddhist practice, classical Indian dance), the canonical reference where possible, and where the gesture has been culturally restricted. Mudras + mantras are the canonical pairing — sound and gesture together complete the body's offering. <a href="/gab44/mantras">See the 12 mantras →</a></p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which mudra your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary mudra — the gesture your particular wiring has been waiting to learn. A $9 reading identifies it. <a href="/gab44/reading?ref=mudras-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 16 mudras · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
