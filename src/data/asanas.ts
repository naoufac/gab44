// Asanas — SEO funnel — /gab44/asanas (index) + /gab44/asanas/{slug}.
// 16 hand-written yoga-pose guides. Completes the body-practice quadrant:
// SOUND (mantras) + GESTURE (mudras) + BREATH (pranayama) + POSTURE (asanas).
//
// Family-tinted gradient: grounding (mountain, child, downward-dog, corpse) = sage-green —
// the daily-practice family; heart (cobra, camel, bridge, fish) = rose-amber — the
// heart-throat opening family; power (warrior-one, tree, chair, plank) = ember-orange —
// the activating family; restorative (legs-up-the-wall, butterfly, seated-forward-fold,
// happy-baby) = lavender-indigo — the surrender / restorative family.

import { SITE_URL } from '@/lib/identity'

export interface AsanaGuide {
  slug: string
  text: string
  translation: string
  tradition: string
  glyph: string
  family: 'grounding' | 'heart' | 'power' | 'restorative'
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
  pair_with_pranayama: string
  pair_with_pranayama_slug: string
  pair_with_mudra: string
  pair_with_mudra_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const ASANAS: AsanaGuide[] = [
  {
    slug: 'mountain',
    text: 'Mountain Pose',
    translation: 'Tadasana. Tada = mountain, asana = seat / posture. The pose of standing as a mountain stands.',
    tradition: 'Hatha Yoga — codified in modern Iyengar lineage as the foundational standing pose from which all other standing postures are built',
    glyph: '🏔️',
    family: 'grounding',
    position: 1,
    one_liner: 'The pose that looks like nothing and contains everything. Standing on two feet, fully — the posture every other pose returns to.',
    meaning: 'In an Iyengar class, the teacher will spend twenty minutes on Mountain. Newcomers wonder what could possibly take twenty minutes about *standing*. By the end they understand. Tadasana is the discovery that most adults do not actually know how to stand. We slump into one hip, lock the knees, push the head forward, brace the shoulders. Mountain is the slow undoing of every collapse: feet rooted at four corners, knees soft but tracked over the toes, pelvis neither tucked nor tipped, spine long, ribs unflared, crown of the head reaching like a thread is pulling it up. From this posture the breath finally has room. Every other standing pose in yoga — every warrior, every tree, every twist — is a variation of mountain. Skip mountain and the rest is performance. The classical instruction is *steady as a mountain, alive as a tree* — immovable foundation, living body.',
    what_it_does: 'Re-organizes the postural musculature. Most chronic neck, shoulder, and lower-back pain in modern adults is a postural-collapse problem, not a tissue problem; Tadasana practiced 5 minutes a day for 6 weeks resolves a remarkable percentage of it. Improves balance, breath capacity (the ribcage is finally not compressed), and proprioception. Mentally: teaches the difference between *tension* and *tone* — Mountain is fully toned without being tense. Used as the reset pose between any two demanding postures, and as the starting pose of every sun salutation.',
    how_to_form: 'Stand barefoot. Feet hip-distance apart, second toe pointing forward. Spread the toes; lift them, then place them down one by one. Press into four points of each foot — base of big toe, base of little toe, inner heel, outer heel. Lift the knee caps without locking the knees. Tilt the pelvis neutral: no tuck, no tip. Lengthen the tailbone toward the floor. Draw the lower belly gently in. Roll the shoulders up, back, and down — letting the shoulder blades slide toward the back pockets. Arms hang heavy, palms facing the thighs (or forward, to open the chest more). Lengthen the back of the neck; chin slightly tucked. Crown of the head lifts. Stand for 1-3 minutes. Breathe.',
    in_love: 'The partnership in which both partners can stand fully on their own feet before they lean toward each other — leaning is a choice, not a collapse. Reversed: a relationship where one partner is the load-bearing wall and the other has forgotten how to stand alone; if the wall moves, the whole structure falls.',
    in_work: 'The professional who can hold their own ground without bracing. Tadasana is the body of the negotiator who is not posturing, the teacher who is not performing, the surgeon who is not gripping the scalpel. Practiced 5 minutes before any high-stakes meeting, the body learns: I do not have to brace to be solid.',
    the_gift: '*Standing as a mountain stands.* Steady without effort, alive without performance, rooted without rigidity.',
    the_shadow: 'Treating Mountain as a "rest pose" — a slack interval between the "real" poses. Mountain done slack is just standing; Mountain done with attention is the practice itself. The pose looks identical from the outside whether you are doing it or not. Only you can tell.',
    pair_with_chakra: 'Root — Mountain is the pose of the root chakra. The four-corner foot-press is literally the activation of the root: connection to earth, presence in the body, the felt sense of *I am here*.',
    pair_with_chakra_slug: 'root',
    pair_with_pranayama: 'Diaphragmatic — Mountain teaches the upright spine; diaphragmatic breath fills that spine with the long belly-breath the slumped posture could not accommodate. The two practices were designed together.',
    pair_with_pranayama_slug: 'diaphragmatic',
    pair_with_mudra: 'Bhumisparsha — the earth-touching gesture. Mountain is bhumisparsha standing: the whole body, not just the fingers, in contact with the earth as witness.',
    pair_with_mudra_slug: 'bhumisparsha',
    pair_with_sign: 'taurus',
    key_questions: [
      'When I stand for one full minute with attention, where in my body has been doing all the work that the bones could be doing — and where am I bracing what gravity could carry?',
      'Where in my life have I been leaning on something or someone because I have forgotten that I can stand?',
      'What would change if I started every demanding moment of my day with thirty seconds of Mountain — feet, breath, crown, before I move?'
    ]
  },
  {
    slug: 'child',
    text: "Child's Pose",
    translation: 'Balasana. Bala = child, asana = seat. The pose of the child returning to the earth.',
    tradition: 'Hatha Yoga — the universal rest pose, present in every modern lineage from Ashtanga to restorative yoga',
    glyph: '🧘',
    family: 'grounding',
    position: 2,
    one_liner: 'The pose to come back to whenever the practice (or the day, or the life) has asked too much. Forehead on the earth, arms heavy, breath returning.',
    meaning: 'Balasana is the pose of *enough for now*. In a vinyasa class, the unspoken rule is: at any point, in any sequence, you can come into Balasana. The teacher will not call you back. The pose is the body of a child who has run all the way to a parent and is collapsing into them — knees folded, forehead down, the whole posterior chain finally allowed to soften. The forehead-on-floor pressure (the brow chakra meeting the earth) is somatically distinctive: a stress response cannot survive that contact for more than a few breaths. Modern restorative practice names Balasana as the most-reliable parasympathetic-activation pose in the entire yoga vocabulary. The Buddhist tradition has no formal equivalent to Balasana, but the prostration practices (sastanga in Sanskrit) cover the same somatic ground: the forehead-down posture as humility, surrender, return.',
    what_it_does: 'Activates the parasympathetic nervous system within 3-5 breaths. The forehead pressure stimulates the vagal complex; the hip-folded position releases the psoas; the spinal flexion gently decompresses the lumbar discs. Used clinically for anxiety, panic, post-trauma somatic-regulation, and as the universal "exit ramp" from any too-much practice. Also relieves menstrual cramps (the gentle abdominal pressure), tension headaches, and lower-back fatigue.',
    how_to_form: 'Kneel on the floor. Big toes touching, knees as wide as is comfortable (wider knees = more hip-opening; knees together = more lower-back release). Sit your hips back toward your heels — if they do not reach, place a folded blanket between hips and heels. Fold forward, walking the hands out in front. Forehead to the floor (or to a block, or to a stacked fist if the forehead does not reach). Arms long in front, or — for the surrender version — arms heavy alongside the body, palms up. Let the shoulders fall toward the floor. Breathe into the back ribs. Stay for 5 breaths to 10 minutes. Come out slowly, walking the hands back.',
    in_love: 'The partnership in which one partner can collapse into the other when the day has been too much, and the other knows to stay still until the breath returns. Reversed: a relationship in which neither partner has somewhere soft to land; the bracing never gets to stop.',
    in_work: 'The signal: take Balasana between two demanding work blocks. Not at the end of the day — between. Three minutes of forehead-on-the-ground after a difficult conversation is the most reliable nervous-system reset on the menu, more effective than coffee, screen-break, or walk for the specific work of *returning to capacity*.',
    the_gift: '*The right to stop.* The pose teaches the body that it has permission to rest before it has finished, before it deserves it, before the work is done.',
    the_shadow: 'Avoidance. Balasana hidden in: a pose taken every time the practice gets hard so that the practice never deepens, a permanent retreat that masquerades as rest. Rest and avoidance are visually identical from the outside; only the practitioner knows which is happening.',
    pair_with_chakra: "Third Eye — the forehead-floor contact is the third-eye chakra meeting the earth. The classical preparation for any meditation or visualization practice; the third eye that has just touched ground is open without effort.",
    pair_with_chakra_slug: 'third-eye',
    pair_with_pranayama: 'Bhramari — the humming-bee breath. Both practices use forehead-pressure or skull-vibration to settle the nervous system. Hum into Balasana for the deepest version of either.',
    pair_with_pranayama_slug: 'bhramari',
    pair_with_mudra: 'Anjali — the bow at the heart. Balasana is anjali horizontal; the whole body is the bow. Pair when the work is humble return.',
    pair_with_mudra_slug: 'anjali',
    pair_with_sign: 'cancer',
    key_questions: [
      'Where in my life have I been performing capacity I do not have, when the actual move is to fold forward and stop?',
      'When was the last time I let my forehead touch something solid — earth, wall, a beloved\'s shoulder — and let the system actually unbrace?',
      'What would change if I took Balasana three times a day, not when I am exhausted, but before I am, as a preventive practice?'
    ]
  },
  {
    slug: 'downward-dog',
    text: 'Downward-Facing Dog',
    translation: 'Adho Mukha Svanasana. Adho = downward, mukha = face, svana = dog. The pose of a dog stretching after a long sleep.',
    tradition: 'Hatha Yoga — central to the Ashtanga sun-salutation sequence; arguably the most-recognised yoga pose in the modern West',
    glyph: '🐕',
    family: 'grounding',
    position: 3,
    one_liner: 'The full-body stretch every dog knows by instinct. Hands and feet on the floor, hips pointing to the sky, body in an inverted V.',
    meaning: 'Watch a dog wake from a nap: it stretches in adho mukha svanasana. The pose was named after the gesture because it is older than yoga itself — it is the body remembering what every quadruped knows about how to undo a long stillness. In modern asana practice Down-Dog is the *transition* pose: between the standing poses and the floor work, between the inhale and the exhale of a vinyasa flow, between fatigue and renewed energy. It is also a posture diagnostic: a tight hamstrings shows up immediately, a weak shoulder cannot hold it, a held lower-back collapses into it. Down-Dog is the pose that tells the practitioner where the body is today. The Ashtanga primary series includes Down-Dog in nearly every vinyasa — by the end of a practice you have held it forty or fifty times. The pose belongs in every category at once: it is a forward fold, a mild inversion, a shoulder-opener, a hamstring-stretch, and a strengthener.',
    what_it_does: 'Lengthens the entire posterior chain — hamstrings, calves, spinal erectors, latissimus. Strengthens the shoulders, the wrists, and the deep core. As a mild inversion (heart above head, head below pelvis), it gently improves circulation to the brain without the contraindications of a full inversion. Used to relieve mild back pain, energize when fatigued, and as a transition pose to mark the end of one phase of practice and the start of another. The 5-breath hold is the signature length; held longer, it becomes a strength pose.',
    how_to_form: 'Start on hands and knees, hands shoulder-width, knees hip-width. Spread the fingers wide; press into the knuckles and the pads of the fingers (not just the heel of the hand). Tuck the toes, lift the knees, send the hips up and back. The body forms an inverted V. Press the chest gently toward the thighs — this is the work, not getting the heels down. Heels reach toward the floor but do not need to touch. Ears between the upper arms; neck long. Pedal one heel down, then the other, to release calf-tightness. Then hold, breathing into the back ribs, for 5-10 breaths.',
    in_love: 'The partnership that knows how to lengthen back to its full shape after a hard stretch. Reversed: a relationship that has been pressed and compressed for so long that no one remembers what its full length looked like.',
    in_work: 'The pose of the worker between two demanding blocks. Forty seconds in Down-Dog after a long focus session re-circulates the blood, re-positions the spine, and resets the breath — the cheapest active-recovery available at a desk. Modify with hands on the seat of a chair if the floor is not available.',
    the_gift: '*The full-body stretch the animal knew before the mind got involved.* Lengthening as instinct, not as effort.',
    the_shadow: 'Forcing the heels down. The pose is not about heels-to-floor; it is about lengthening the spine. Practitioners who grip and push to get the heels down round the back, lose the chest-to-thigh action, and miss the actual pose. Soft knees, long spine, heels reaching but not arriving.',
    pair_with_chakra: 'Sacral — Down-Dog opens the hips and lower back, the sacral-chakra territory. The pose unwinds the held-tension that the sacral chakra carries and re-floods the area with circulation.',
    pair_with_chakra_slug: 'sacral',
    pair_with_pranayama: 'Ujjayi — the ocean breath. Down-Dog is one of the longest holds in a vinyasa sequence; Ujjayi is the breath that lets the body stay in it without fatigue. The classical pairing for the pose.',
    pair_with_pranayama_slug: 'ujjayi',
    pair_with_mudra: 'Prithvi — the earth-element mudra. Both practices use hand-and-foot pressure into the earth as the activation; Prithvi is the gesture version of what Down-Dog does with the whole body.',
    pair_with_mudra_slug: 'prithvi',
    pair_with_sign: 'virgo',
    key_questions: [
      'Where in my body has the longest unstretched line — and what would change if I lengthened it 60 seconds a day?',
      'In my work, where am I rounding my back to reach what I should be lengthening my spine to reach?',
      'When I imagine taking Down-Dog three times today — at desk, before meeting, before bed — what arrives: relief, resistance, or both?'
    ]
  },
  {
    slug: 'corpse',
    text: 'Corpse Pose',
    translation: 'Savasana. Sava = corpse, asana = posture. The pose of lying as a corpse lies.',
    tradition: 'Hatha Yoga — named in the Hatha Yoga Pradipika ch. 1 verse 32 as the pose for integration; Iyengar called it "the most difficult of all asanas"',
    glyph: '🌙',
    family: 'grounding',
    position: 4,
    one_liner: 'Lying flat on the back. Eyes closed. Doing absolutely nothing. The pose that ends every yoga class — and the pose most practitioners cannot do.',
    meaning: 'Savasana is the easiest pose to enter and the hardest pose to inhabit. The body lies flat, palms up, feet falling open, eyes closed. There is nothing to *do*. And for most modern adults, *nothing to do* is intolerable — within thirty seconds the mind has produced a shopping list, a regret, a plan, a worry, a fantasy. Savasana is the practice of being present to the body that is doing nothing. Iyengar called it the most difficult of all asanas, because every other pose has an action; this one has only attention. The pose is named *corpse* deliberately: it is the practice of being as still as the dead, of releasing the constant motor-imagery and verbal-stream that keeps the system on, of letting consciousness rest on the bare floor of the body. Traditionally held at the end of any asana session for 10-15 minutes minimum (5 minutes per 30 minutes of practice is the rule). The yogic claim is that the integration of the practice happens *in Savasana*, not in the poses themselves — the poses prepare the system, Savasana lets the system absorb.',
    what_it_does: 'Activates the deepest parasympathetic state most modern adults experience while awake. Brainwaves drop from beta (active thinking) to alpha and theta — the same range as deep meditation. Heart rate variability climbs. Cortisol drops measurably. The integration window is real: muscle memory, motor learning, and somatic processing of held emotion all consolidate during the 10-15 minute Savasana that follows asana. Practiced on its own (without preceding asana), Savasana is essentially yoga-nidra without the guided script — a profound rest practice in its own right.',
    how_to_form: 'Lie on your back on a yoga mat or rug. Legs slightly wider than hip-distance, feet falling out to the sides (not actively held). Arms about 30 cm from the body, palms facing up. Shoulder blades broad on the floor. Slight tuck of the chin to lengthen the back of the neck (or use a thin pillow). Eyes closed. Cover with a blanket — the body cools quickly when it stops moving, and cold pulls the system back into sympathetic tone. Now: do nothing. Watch the breath without changing it. When thoughts arise, do not push them away; let them pass like clouds. Hold for 10-15 minutes minimum. To come out: wiggle fingers and toes, draw knees in, roll to the right side, pause, then press up to sitting. Never sit up directly from Savasana — it shocks the system.',
    in_love: 'The relationship that includes silence — long, sustained, unfilled silence. Two people in a room not performing, not entertaining, not even comforting; just present and resting. Reversed: a partnership in which silence is a problem to be solved; every quiet moment immediately filled, the system never allowed to integrate.',
    in_work: 'The professional who closes the laptop and lies down for ten minutes between two cognitive blocks, instead of grinding through. Modern productivity research (Walker, Klein) confirms what Savasana already knew: integration happens during rest, not during effort. The work after a 12-minute Savasana is markedly better than the work after a 12-minute social-media break.',
    the_gift: '*Doing absolutely nothing, with attention.* The hardest practice, named correctly — *corpse*. Most practitioners take a lifetime to inhabit ten minutes of Savasana.',
    the_shadow: 'Sleep. Falling asleep in Savasana is the most common shadow — the body, finally given permission to rest, takes the nearest exit. Sleep is not Savasana; Savasana is *aware* rest. The two are not the same, and the integration only happens when consciousness stays present. If sleep keeps winning, your system is sleep-deprived; address that first.',
    pair_with_chakra: 'Crown — Savasana is the pose of crown-chakra integration. With nothing for the body to do, attention can rest at the top of the head, where the practice culminates.',
    pair_with_chakra_slug: 'crown',
    pair_with_pranayama: 'Diaphragmatic — Savasana is the only pose in which fully diaphragmatic breathing is the default position; the back ribs are supported, the diaphragm can drop freely. The most reliable training-ground for the breath.',
    pair_with_pranayama_slug: 'diaphragmatic',
    pair_with_mudra: 'Dhyana — the cupped-hands meditation gesture. Savasana with palms up is the lying version of dhyana; the same receptive openness, horizontal instead of seated.',
    pair_with_mudra_slug: 'dhyana',
    pair_with_sign: 'pisces',
    key_questions: [
      'Can I lie still for ten minutes without falling asleep and without grabbing my phone — and if not, what is my system telling me about what is unprocessed?',
      'Where in my life have I been skipping the integration step (the Savasana) and rushing from one demanding pose to the next?',
      'What would change if I treated 12 minutes of Savasana as more valuable than 30 minutes of any other practice?'
    ]
  },
  {
    slug: 'cobra',
    text: 'Cobra Pose',
    translation: 'Bhujangasana. Bhujanga = serpent / cobra, asana = posture. The pose of a cobra lifting its hood.',
    tradition: 'Hatha Yoga — described in the Gheranda Samhita (ch. 2 v. 42-43) and the Hatha Yoga Pradipika; central to the modern sun-salutation sequence',
    glyph: '🐍',
    family: 'heart',
    position: 5,
    one_liner: 'Lying face-down, hands under shoulders, the chest lifts off the floor. The first backbend most yogis learn. The pose that re-opens the heart after a day of rounding forward.',
    meaning: "Bhujangasana is the backbend the body says yes to. Unlike camel or bridge — which can intimidate beginners — cobra is approachable: you start lying on the ground, and you lift only what wants to lift. The Gheranda Samhita describes it as the pose of the serpent that has been coiled and is now uncoiling, lifting only the upper third of itself off the earth. The serpent-symbolism is precise: in yogic anatomy, the kundalini energy is described as a coiled serpent at the base of the spine; cobra is the posture that physically mirrors that uncoiling. Practically, cobra is the antidote to modern desk-life: most cognitive work compresses the front of the body (rounded shoulders, collapsed chest, slumped lower back) and stretches the back. Cobra reverses the entire compression: chest lifts, shoulders draw back, front spine opens, lower back gently engages. The pose teaches the spinal extensors — muscles most adults have not fired with intention in years.",
    what_it_does: 'Strengthens the spinal extensors, opens the chest and front shoulders, stretches the abdomen and hip flexors, lengthens the front spine. The chest-lift improves breath capacity by physically un-compressing the ribcage. As a heart-opening backbend, cobra is mood-shifting: practiced daily for 6 weeks, it measurably reduces mild depressive symptoms (the open-chest posture appears to signal *safe, present, available* to the limbic system). Used clinically for forward-head-posture rehabilitation, mild sciatica, and as the entry-point backbend before any deeper extension.',
    how_to_form: 'Lie face-down on a mat. Legs together, feet flat, toes pointing back. Hands flat on the floor, fingertips at the level of the lowest ribs, elbows bent and tucked alongside the body. Press the tops of the feet, the pubic bone, and the thighs firmly into the floor. INHALE: peel the chest up off the floor — leading with the heart, not the head. Engage the back muscles first; the hands are barely used. Keep the elbows bent, shoulders rolled back and down. Lift only as high as the back can do the work. Look forward, not up (the neck is the last thing to lift, and it follows the spine). Hold 3-5 breaths. EXHALE: slowly lower.',
    in_love: "A partnership in which the heart is willing to lift even when the day has compressed it. The pose of saying *yes, still, here I am* — not performance, not declaration, just the chest re-opening to receive. Reversed: a relationship where one partner is permanently rounded forward, protecting the heart from a perceived threat that may have stopped existing years ago.",
    in_work: "The pose of the worker who can return to open-presence after a long focused-task. Five cobras at the end of a desk session unfolds the body the work pressed into. Specifically useful for: writers, programmers, anyone who has spent hours bent over a tool.",
    the_gift: '*The heart lifting first.* The pose teaches the body that the heart can lead — that you do not have to push with the arms, brace with the shoulders, or grip to come forward. The back is enough.',
    the_shadow: 'Pressing up with the hands. Cobra collapsed into push-up shape is no longer cobra; the spinal extensors get bypassed, the shoulders crunch, the lower back compresses. The hands are guides, not engines.',
    pair_with_chakra: 'Heart — Cobra is the pose of the heart chakra. The chest physically lifts and opens at the heart-center; the posture *is* the heart-opening.',
    pair_with_chakra_slug: 'heart',
    pair_with_pranayama: 'Ujjayi — the ocean breath sustains cobra across multiple breaths. Pair when the work is to inhabit the open chest, not just visit it.',
    pair_with_pranayama_slug: 'ujjayi',
    pair_with_mudra: 'Hridaya — the heart mudra. Cobra is hridaya posturally; the gesture closes the circuit the pose has already opened.',
    pair_with_mudra_slug: 'hridaya',
    pair_with_sign: 'leo',
    key_questions: [
      'Where has my chest been rounded forward — and what part of me has been protecting itself by collapsing?',
      'In my relationships and my work, when did I last lead with my heart instead of my head?',
      'What would change if I took five cobras every morning before I checked my phone?'
    ]
  },
  {
    slug: 'camel',
    text: 'Camel Pose',
    translation: 'Ustrasana. Ustra = camel, asana = posture. The pose of a kneeling camel arching back.',
    tradition: 'Hatha Yoga — described in the Hatha Yoga Pradipika and the Gheranda Samhita; one of the deepest accessible backbends in the standing-pose vocabulary',
    glyph: '🐪',
    family: 'heart',
    position: 6,
    one_liner: 'Kneeling, hands reaching back to the heels, chest open to the sky. The pose that brings up everything the body has been holding in the chest.',
    meaning: "Camel is the pose that makes people cry. In a yoga teacher-training, more than one student per cohort will weep in or after Ustrasana; it is so common the lineage names it. The somatic logic is straightforward: most chronic emotional armor lives in the front body — chest, throat, abdomen, hip flexors — and Ustrasana stretches the entire front line at once. What was being held there has nowhere to go; it surfaces. The Gheranda Samhita names it as one of the asanas that brings *prana into the navel* (the seat of stored emotion in yogic anatomy). Camel is also the deepest accessible backbend for most practitioners: deeper than cobra (which only lifts the upper body) and deeper than bridge (which is supported by the floor). The kneeling base means the lower body is anchored while the entire upper body extends backward. Done with care, it is profoundly opening. Done with force, it can be damaging to the lumbar spine — this is the pose that most demands respect for the contraindications.",
    what_it_does: 'Stretches the entire front chain — quadriceps, hip flexors, abdomen, intercostals, pectorals, anterior deltoids, anterior neck. Strengthens the spinal extensors. Opens the chest and throat profoundly; many people experience a vocal-release after Ustrasana (the throat unbraces and the voice resonates differently). Mood-shifting: the open-throat-open-chest combination signals *safe to express* to the autonomic nervous system. Used carefully in trauma-informed yoga as the deepest accessible heart-opener; the held grief, anger, or fear stored in the front body has somewhere to surface from.',
    how_to_form: 'Kneel on a folded blanket or mat, knees hip-width, tops of feet flat on the floor (or toes tucked under, for height). Place hands on the lower back, fingers pointing down, palms supporting the sacrum. Lift the chest UP first — this is the entire pose, the up before the back. Then, keeping the chest lifted, begin to arch back, opening the heart toward the sky. If the back can support it, reach one hand at a time to the heels (or to blocks placed alongside the feet). Let the head fall back ONLY if the neck supports it; otherwise keep the chin tucked. Press the hips FORWARD over the knees — this is the key alignment, hips over knees, not behind them. Hold 3-5 breaths. To come out: chin to chest, hands to lower back, lift the chest UP first, then slowly come upright. Rest in child\'s pose afterward.',
    in_love: 'The relationship that allows the deep emotional opening even when it is unpredictable, even when one partner does not know what will come out. Camel-love is post-armor love — the chest is fully exposed. Reversed: a relationship in which both partners are still armored; the depth of opening Camel asks for would feel unsafe.',
    in_work: "The professional who can let the work shake them — who does not need to be poker-faced in every meeting, who has not built a permanent armor around the front of the body to survive the work. Camel is the antidote pose for anyone in high-stakes service work (surgeons, therapists, teachers, performers) where the armor has been chronic for years.",
    the_gift: '*The right to come undone.* Camel teaches the body that profound opening is survivable — that what surfaces when the chest opens does not have to be re-stored; it can be felt, witnessed, and released.',
    the_shadow: 'Forcing the depth. Pushing the hips back rather than forward over the knees, dumping into the lower back, dropping the head when the neck cannot support it — these are the injuries Camel is famous for. Less depth, perfect alignment, hips forward; that is the pose. Always rest in child\'s pose afterward to integrate.',
    pair_with_chakra: 'Throat — Camel\'s deepest opening is at the throat. The pose is one of very few that physically extends the anterior neck; throat-chakra release is the signature effect.',
    pair_with_chakra_slug: 'throat',
    pair_with_pranayama: 'Bhastrika — the bellows breath. The strong-breath practice prepares the system for the depth of opening Camel offers; Bhastrika before Camel is a classical sequencing.',
    pair_with_pranayama_slug: 'bhastrika',
    pair_with_mudra: 'Vishuddha — the throat-chakra mudra. The hand-gesture sealing the throat-opening Camel has just delivered.',
    pair_with_mudra_slug: 'vishuddha',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What have I been storing in my chest, my throat, my abdomen — and am I ready to let it surface?',
      'When was the last time I let my heart open all the way without immediately closing it again?',
      'Do I have the support — the child\'s pose afterward, the trusted person, the safe room — that the depth of this opening will need?'
    ]
  },
  {
    slug: 'bridge',
    text: 'Bridge Pose',
    translation: 'Setu Bandha Sarvangasana. Setu = bridge, bandha = lock / bond, sarva-anga = all-limbs, asana = posture. The whole-body bridge.',
    tradition: 'Hatha Yoga — Iyengar lineage refined the modern alignment; central to restorative yoga as the supported-bridge variation',
    glyph: '🌉',
    family: 'heart',
    position: 7,
    one_liner: 'Lying on the back, knees bent, feet flat, hips lift toward the sky. The accessible backbend — a heart-opener anyone can practice safely.',
    meaning: "Bridge is the heart-opener for the rest of us. Where camel demands depth and risks the lumbar spine, bridge offers the same opening through a fundamentally safer architecture: the back is supported by the floor, the hips lift only as far as the glutes and back can carry them, and the head and shoulders stay grounded. The Sanskrit name — Setu Bandha Sarva-Anga-Asana — translates as *the lock that bridges all the limbs*; the pose literally connects (bandha = lock) the upper body and lower body through the elevated bridge of the torso. In Iyengar lineage, supported bridge (with a block under the sacrum) is one of the most-prescribed therapeutic poses: for back-pain, for anxiety, for mild depression, for menstrual cramps, for menopausal flushing, for insomnia. The pose is restorative when supported and strengthening when active; same shape, two practices.",
    what_it_does: 'Strengthens the glutes, hamstrings, and lower-back extensors. Opens the chest, the front of the shoulders, and the hip flexors. The active version is energizing — heart rate rises, alertness climbs. The supported version (block under the sacrum) is the opposite: it shifts blood return through the chest, slows the heart, and is one of the most reliable parasympathetic activators in restorative yoga. Bridge is also a thyroid-stimulating posture; the chin-to-chest action gently compresses the throat, increasing local circulation. Used clinically for: lower-back rehabilitation, mild depression, anxiety, menstrual discomfort.',
    how_to_form: 'Lie on your back. Bend the knees, feet flat on the floor hip-distance apart, heels close enough to the buttocks that the fingertips can graze them. Arms alongside the body, palms down. Press the feet firmly into the floor. INHALE: lift the hips up, rolling the spine off the floor one vertebra at a time — tailbone first, then sacrum, then lumbar, then mid-back. Stop when the hips are level with the knees (or slightly lower); do not push higher. Roll the shoulders under, interlace the fingers under the back, and walk the shoulder blades together so that the chest opens. Hold 5-10 breaths. EXHALE: release the hands, slowly roll down vertebra by vertebra — upper back first, then middle, then lower, then sacrum, then tailbone. For supported bridge: place a yoga block on its medium height under the sacrum (NOT the lower back); rest there, fully passive, for 3-10 minutes.',
    in_love: "A relationship that has built a bridge between two people — not erased the gap, but spanned it, with structure on both sides. Reversed: a partnership where the bridge has been built but neither partner is willing to walk across it.",
    in_work: 'The professional who has built a bridge between two domains, two teams, two ways of thinking. Bridge-people in organizations are rare and load-bearing; the pose is the body of that vocation. Practiced in supported form, also the most reliable 5-minute reset between two heavy work blocks.',
    the_gift: '*The bridge that holds.* Whether active or supported, the pose teaches the body that opening and structure are not opposites — the chest can be wide AND the foundation can be solid.',
    the_shadow: 'Pushing the hips too high and dumping into the lower back, gripping the glutes so hard the pose becomes a glute-clench, or letting the knees splay out wider than the feet. Bridge with sloppy alignment becomes lumbar compression; the pose was designed to *prevent* exactly that.',
    pair_with_chakra: 'Heart — Bridge opens the chest while supporting the back; the heart-chakra opening is its signature. The supported version is one of the deepest sustained heart-opening poses available.',
    pair_with_chakra_slug: 'heart',
    pair_with_pranayama: 'Ujjayi — the ocean breath sustains the active bridge; in the supported version, Ujjayi deepens the parasympathetic effect. Pair with either variation.',
    pair_with_pranayama_slug: 'ujjayi',
    pair_with_mudra: 'Hridaya — the heart mudra. Bridge IS hridaya posturally; the gesture seals what the pose has opened.',
    pair_with_mudra_slug: 'hridaya',
    pair_with_sign: 'libra',
    key_questions: [
      'Where in my life have I been refusing to build a bridge because I want one side to come to the other?',
      'What would change if I took 5 minutes of supported bridge daily for two weeks — what would my heart, my back, my sleep tell me?',
      'In my own body: which side is the foundation, which side is the opening, and have I been giving them equal attention?'
    ]
  },
  {
    slug: 'fish',
    text: 'Fish Pose',
    translation: 'Matsyasana. Matsya = fish, asana = posture. The pose attributed to Matsya, the first incarnation of Vishnu.',
    tradition: 'Hatha Yoga — named in the Gheranda Samhita (ch. 2 v. 21); traditionally practiced as the counter-pose to shoulderstand',
    glyph: '🐟',
    family: 'heart',
    position: 8,
    one_liner: "Lying on the back, lifting the chest, crown of the head touching the floor. The body becomes an arch with the throat fully open to the sky.",
    meaning: "Matsyasana is named after Matsya, the fish-incarnation of Vishnu who carried the rishis safely across a great flood. The pose's mythic register is exactly that: a body that floats, that holds the heart and throat above the waters, that can be sustained for long durations because it is structurally supported by the architecture of the spine itself. Geometrically, Matsyasana is the inverse of shoulderstand: where shoulderstand presses the chin into the chest and closes the throat, fish lifts the chest and opens the throat fully. They are traditionally paired — shoulderstand for the closure, fish for the opening, in equal duration. The pose is the most direct throat-chakra activator in the entire asana vocabulary: the anterior neck extends fully, the thyroid is gently stretched, the voice opens. Matsyasana is also a respiratory pose: the open chest creates the largest possible breath capacity for the duration of the hold; some yoga traditions use it as a pranayama-preparation pose specifically for that reason.",
    what_it_does: 'Opens the chest, the front of the throat, the front shoulders, and the hip flexors. Stretches the entire anterior cervical spine — most adults have never deliberately stretched the front of the neck, and Matsyasana is the safest way. Stimulates the thyroid through gentle local compression-then-release. Improves respiratory capacity for the duration of the hold (the ribcage is fully open). Used clinically for: forward-head-posture, voice work, thyroid support (anecdotally), and as a complement to any practice that closes the front of the neck.',
    how_to_form: "Lie on your back. Legs together, straight on the floor. Slide the hands palms-down underneath the hips, fingers reaching toward the knees, forearms flat on the floor. Press the elbows and forearms firmly into the floor — this is the lift mechanism. INHALE: lift the chest UP, drawing the shoulder blades together. Let the head come back, and gently rest the CROWN (not the back) of the head on the floor. The neck should feel a stretch but not pinch; if it pinches, place a folded blanket under the head, lower the chest slightly, or come out. Hold 5-10 breaths, breathing into the fully-open ribcage. To come out: lift the head first (chin to chest), then lower the chest, then release the hands and rest.",
    in_love: "The partnership that floats. A relationship that has built enough structural integrity through the spine of its history that it can hold its heart and throat open without collapse. Reversed: a relationship that is gasping above the surface — open throat, but the back is exhausted from the effort.",
    in_work: "The work of the voice — singers, speakers, teachers, anyone whose throat is their instrument. Fish is the pose that prepares the voice; practiced for 60 seconds before a presentation, the throat resonates differently, the voice carries further with less effort.",
    the_gift: '*The throat finally open to the sky.* The pose teaches the body that the front of the neck — the place most modern adults armor — has been ready to release for years; nothing was holding it closed except habit.',
    the_shadow: 'Putting weight on the head. The crown rests on the floor; the weight is in the elbows and forearms. If the head bears the body, the cervical spine is at risk. If the neck feels any sharpness, the pose is wrong — come out.',
    pair_with_chakra: 'Throat — Matsyasana is the throat-chakra pose. The anterior neck stretch and thyroid stimulation are its signature; no other asana opens the throat as fully.',
    pair_with_chakra_slug: 'throat',
    pair_with_pranayama: 'Bhramari — the humming-bee breath. Hum into Matsyasana for the deepest throat-chakra activation in the entire body-practice canon; the resonance of the hum fills the fully-open chest.',
    pair_with_pranayama_slug: 'bhramari',
    pair_with_mudra: 'Vishuddha — the throat-chakra mudra. The hand-gesture that seals what fish has opened.',
    pair_with_mudra_slug: 'vishuddha',
    pair_with_sign: 'pisces',
    key_questions: [
      "Where in my life has my voice been waiting in my throat for the front of my neck to finally release?",
      'What would change if I practiced fish for 60 seconds before every conversation that asked me to speak honestly?',
      "When I imagine the crown of my head on the floor and the chest fully open to the sky, what feels most exposed — and is that the thing that has been waiting to come into view?"
    ]
  },
  {
    slug: 'warrior-one',
    text: 'Warrior One',
    translation: 'Virabhadrasana I. Virabhadra = the fierce warrior born from the rage-lock of Shiva\'s grief. The pose of the warrior arrived at the threshold.',
    tradition: 'Hatha Yoga — named after the mythological warrior Virabhadra (Shiva Purana); central to Iyengar and Ashtanga lineages as the foundational warrior pose',
    glyph: '⚔️',
    family: 'power',
    position: 9,
    one_liner: 'Front knee bent, back leg long, arms reaching up, hips squared forward, chest open to the sky. The body of a warrior who has arrived.',
    meaning: "Virabhadrasana is named after a warrior born of grief. The myth: Shiva's first wife Sati is shamed at her father Daksha's sacrifice and immolates herself; in his rage and grief, Shiva tears a lock of his own hair and from it springs Virabhadra — the fierce warrior who avenges her. The warrior is a *grief-warrior*, not a war-warrior; he was made from love that had nowhere else to go. The three warrior poses each capture a moment of his appearance: Warrior One is the moment of arrival, sword raised. Warrior Two is the moment of seeing the enemy and steadying. Warrior Three is the moment of striking. To inhabit Warrior One is to embody arrival itself — the body of someone who has come from elsewhere, with purpose, and is now squarely facing what they came for. The pose's distinctive alignment — squared hips, arms reaching up, front knee bent, back foot planted — is precisely the geometry of *I am here and I am ready*. Iyengar gave the modern alignment its rigor; in his lineage the squared hips are the entire pose, and the rest is dressing.",
    what_it_does: 'Strengthens the legs, glutes, core, shoulders, and upper back. Stretches the hip flexors of the back leg — chronically tight in modern desk workers. Opens the chest fully. Builds the *postural endurance* that makes 30-minute meetings possible without collapse. The squared-hips alignment is therapeutic for SI-joint dysfunction (the most common low-back complaint), but only when done correctly; sloppy Warrior One can aggravate it. Mentally: the pose builds the felt-sense of *fierce arrival*. The body that has held Warrior One for 5 breaths walks differently into the next moment.',
    how_to_form: 'From Mountain, step the right foot back 3-4 feet (a long step). Front foot points straight forward; back foot turns out 45-60 degrees. SQUARE the hips toward the front — this is the work of the pose. The back hip wants to swing open; consciously draw it forward. Bend the front knee to 90 degrees, knee directly over the ankle, NOT past it. Press into the outer edge of the back foot; lift the back arch. Lengthen up through the crown. INHALE: sweep both arms up overhead. Palms can face each other or touch. Bicep close to the ears. Lift the heart, slight backbend, gaze forward or slightly up. Hold 5-8 breaths. Switch sides.',
    in_love: 'The partnership in which both partners have *arrived* — neither is still trying to win the other, neither is still half-stepped toward the door. Reversed: a relationship in which one partner is squared forward, fully arrived, while the other is still mid-step, hips swung, half-elsewhere.',
    in_work: "The pose of the professional who is fully arrived at their post. The doctor before rounds, the lawyer before oral argument, the teacher before the classroom door. Three breaths of Warrior One in private posture-correction language: I am here. I have come to do this. I have what it takes.",
    the_gift: '*Arrival itself.* The body that has held Warrior One knows what *here and now and ready* feels like. Most other arrivals in the day will feel half-stepped by comparison.',
    the_shadow: "Letting the hips fall open. Warrior One with un-squared hips is a different pose — looser, easier, and missing the entire point. The squared-hips alignment is the pose; if it cannot be maintained, step the back foot in or shorten the stance.",
    pair_with_chakra: 'Solar Plexus — Warrior One is the pose of the solar-plexus chakra. The squared-hips alignment activates the core, the open chest activates the heart, but the warrior\'s *will* is centered at the solar plexus: the fire of *I am here on purpose*.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_pranayama: 'Kapalabhati — the skull-shining breath. Both practices build heat and will; Kapalabhati before Warrior One is a classical sequencing for activation work.',
    pair_with_pranayama_slug: 'kapalabhati',
    pair_with_mudra: 'Vajra — the thunderbolt mudra. The hand-gesture of fierce focused energy; pair when the work is to bring the warrior\'s clarity into the hand as well as the spine.',
    pair_with_mudra_slug: 'vajra',
    pair_with_sign: 'aries',
    key_questions: [
      'Where in my life have I been half-arrived — physically here but with my back hip swung open toward an exit?',
      'When did I last embody *fierce arrival* — coming to a moment squared, present, with arms raised?',
      'What grief is the warrior in me made from — and what is the love I would protect with that fierceness?'
    ]
  },
  {
    slug: 'tree',
    text: 'Tree Pose',
    translation: 'Vrksasana. Vrksa = tree, asana = posture. The pose of standing on one foot like a tree stands on its roots.',
    tradition: 'Hatha Yoga — described in the Gheranda Samhita; one of the oldest named balancing poses in the yogic vocabulary',
    glyph: '🌳',
    family: 'power',
    position: 10,
    one_liner: 'One foot rooted, the other folded against the inner thigh, arms reaching like branches. The pose that teaches the impossibility of balance without movement.',
    meaning: "Vrksasana is the deepest balance-teaching in yoga, hidden in the simplest pose. Stand on one foot. That is the whole instruction. Within thirty seconds the practitioner discovers a counter-intuitive truth: balance is not stillness. The standing foot is making thousands of micro-adjustments per minute — toes gripping, arch flexing, ankle stabilizing — and the breath, the gaze, the very position of the second foot all participate in the constant re-finding of upright. A tree looks still from a distance; up close, every leaf is moving, the trunk is swaying imperceptibly, the roots are growing. Vrksasana is the pose of that paradox. The Sanskrit name encodes the lesson: the *tree* is the model — rooted, alive, swaying, never frozen. Modern balance research has caught up with what the pose has known for a thousand years: balance is a dynamic process, not a static state. People who lose their balance reflexes (the elderly, the sedentary, the chronically dissociated) lose them not because their bodies are weak but because they have stopped *practicing the small adjustments*. Vrksasana is the practice of those adjustments.",
    what_it_does: 'Strengthens the standing-foot intrinsics, the calf, the glutes, the deep core, and the proprioceptive system that holds you upright in any complex posture. Improves balance reflexes, which prevents falls in old age (the leading cause of preventable injury after 65). Mentally: builds focus, single-pointed attention, and the felt sense of dynamic equilibrium. Used clinically for: balance rehabilitation post-injury, vestibular work, focus training, and as a regular daily practice for anyone over 50.',
    how_to_form: 'From Mountain, shift the weight into the LEFT foot. Press all four corners of the left foot firmly into the floor. Bend the right knee, take the right foot in the hand, and place it: against the inner left calf (easiest), or against the inner left thigh (classical), but NEVER against the side of the knee — never the knee joint itself. Press the right foot and the left thigh into each other firmly; they hold each other up. Square the hips forward. Bring the hands to anjali at the heart (easier) or sweep them overhead, fingertips reaching like branches (full pose). Find a single point on the wall ahead at eye level (the *drishti*) — gaze does not move. Hold 5-10 breaths. Switch sides.',
    in_love: 'The relationship that learns to balance dynamically — not by becoming still, but by making constant small adjustments together. Reversed: a partnership trying to hold itself in frozen equilibrium; the moment anything shifts, the whole pose falls.',
    in_work: 'The professional who has learned to focus on a single point while everything else moves. The drishti is the entire skill: when the gaze stays, the body finds the balance. When the gaze wanders, the system collapses. Tree-trained focus transfers directly to high-distraction cognitive work.',
    the_gift: '*Dynamic equilibrium.* The pose teaches the body that balance is not stillness but the constant willingness to adjust. Most modern adults seek the wrong kind of balance; Tree teaches the right kind.',
    the_shadow: 'Foot against the knee. The classic Vrksasana injury: the lifted foot pressed into the side of the standing knee joint, slowly stretching the medial ligaments. The foot goes ABOVE the knee or BELOW the knee — never against it.',
    pair_with_chakra: 'Root — Tree is rooted by definition. The standing-foot work is pure root-chakra activation; the more the practitioner attends to the four corners of the foot, the deeper the chakra activates.',
    pair_with_chakra_slug: 'root',
    pair_with_pranayama: 'Nadi Shodhana — the alternate-nostril breath. Both practices balance asymmetric work; Nadi Shodhana before Tree restores the channel-balance that Tree will then test.',
    pair_with_pranayama_slug: 'nadi-shodhana',
    pair_with_mudra: 'Prithvi — the earth-element mudra. The gesture of root-down stability. Pair when the work is to inhabit the standing leg fully.',
    pair_with_mudra_slug: 'prithvi',
    pair_with_sign: 'taurus',
    key_questions: [
      'When I stand on one foot, where do my eyes go first — and what does that tell me about how I lose balance in the rest of my life?',
      'In my relationships and my work, am I trying for *frozen* balance, when *dynamic* balance is what is actually possible?',
      'Where would 60 seconds of tree, daily, on each foot, change the way I move through the rest of the day?'
    ]
  },
  {
    slug: 'chair',
    text: 'Chair Pose',
    translation: 'Utkatasana. Utkata = powerful / intense / fierce, asana = posture. The intense pose. Sometimes translated *fierce seat*.',
    tradition: 'Hatha Yoga — central to the Ashtanga sun-salutation B sequence; the Sanskrit name names it more accurately than the English translation does',
    glyph: '🔥',
    family: 'power',
    position: 11,
    one_liner: 'Standing with knees bent as if sitting in an invisible chair, arms reaching overhead. The pose that burns. Heat as a teacher.',
    meaning: "Utkatasana is the pose the English language got wrong. Translating it as *chair pose* makes it sound restful, which it emphatically is not. The Sanskrit *utkata* means *fierce, intense, powerful* — and that is the actual pose. You sit in an invisible chair, knees bent, hips low, arms reaching, and within thirty seconds the thighs are burning, the shoulders are screaming, the breath is shortening, and the practitioner is being given a choice: stay with the heat or escape it. This is the entire teaching. Most uncomfortable sensations in life are not signals of damage; they are signals of *capacity being requested*. Utkatasana is the controlled environment in which to learn the difference. The thigh-burn at minute one is not damage; it is the muscles asking for more endurance, which they will build if the pose is held. The same mechanic applies in many areas of life: the relationship that is hard, the work that is demanding, the practice that is uncomfortable. Utkatasana is the body's training ground for the discernment of *stay or escape*. Ashtanga sun salutation B includes Utkatasana as the very first pose after the initial standing series — the practice is told *get into the heat early; the rest of the practice will be easier from there*.",
    what_it_does: 'Strengthens the quadriceps, glutes, calves, and the entire posterior chain (when the chest stays lifted). Builds shoulder endurance (arms overhead is its own work). Increases core temperature rapidly — three rounds of Utkatasana is a more effective warm-up than five minutes of jogging. Cardiovascularly active: HR climbs, breath deepens. Mentally: builds the tolerance for sustained discomfort, the *capacity for capacity*. Used as the gateway pose for any heat-building practice.',
    how_to_form: 'From Mountain, INHALE: sweep the arms up overhead, palms facing each other or touching. EXHALE: bend the knees, sit the hips DOWN and BACK — as if behind you is a chair you are slowly sitting into. Knees stay over the ankles (or just behind), NOT past the toes. Weight in the heels — you should be able to wiggle the toes. Chest stays lifted; shoulders down away from the ears. Tailbone lengthens down; lower belly draws in. Gaze forward or up at the thumbs. Hold 5-10 breaths. The longer the hold, the more the pose teaches. Come out by straightening the legs (INHALE) and lowering the arms (EXHALE).',
    in_love: "The relationship in which both partners can sit with discomfort together — the hard conversation, the uncomfortable silence, the moment when escape would be easier. Reversed: a partnership in which the first sign of heat triggers exit; the relationship never builds the capacity it needs to deepen.",
    in_work: "The pose of the worker who can stay with a hard task past the point of initial resistance. Three minutes of Utkatasana in the morning is a posture-correction for the rest of the day: the system that has just sat with controlled discomfort tolerates uncontrolled discomfort better.",
    the_gift: '*Heat as teacher.* The pose builds the capacity to stay present to intensity — which is, after all, what most growth requires.',
    the_shadow: 'Bailing too early. Utkatasana exits the moment the burn starts are the moments the pose was about to teach something. Stay one more breath. The thresholds where the practice ends and the practice begins are exactly where the work happens.',
    pair_with_chakra: 'Solar Plexus — Utkatasana builds heat at the solar plexus, the fire-chakra. The pose is solar-plexus activation in its purest form: power, will, sustained intensity.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_pranayama: 'Kapalabhati — the skull-shining breath. Both practices build heat; the pairing compounds it. Kapalabhati before Utkatasana, and Utkatasana with Kapalabhati for the most heat-building 5 minutes in the body-practice canon.',
    pair_with_pranayama_slug: 'kapalabhati',
    pair_with_mudra: 'Surya — the sun mudra. The fire-element gesture. Surya hand-position with Utkatasana whole-body fire is the classical pairing for solar-plexus work.',
    pair_with_mudra_slug: 'surya',
    pair_with_sign: 'leo',
    key_questions: [
      'In my life right now, where am I in Utkatasana — sitting with sustained intensity — and am I about to bail, or about to receive what the heat has been teaching?',
      'What is my edge between *useful discomfort* and *damaging strain* — and have I been confusing the two in either direction?',
      'What would change if I added one extra breath every time the burn started — at the desk, in the relationship, on the mat?'
    ]
  },
  {
    slug: 'plank',
    text: 'Plank Pose',
    translation: 'Phalakasana. Phalaka = plank / board, asana = posture. The pose of the body straight as a plank.',
    tradition: 'Hatha Yoga — the modern name; the position itself is present in classical Surya Namaskar as the transition between Down-Dog and Chaturanga',
    glyph: '🪵',
    family: 'power',
    position: 12,
    one_liner: "The top of a push-up. The body as a single straight line from crown to heels. The pose that builds the core nothing else can quite reach.",
    meaning: "Plank is the pose most modern fitness has rediscovered without realizing it is yoga. Phalakasana is named in the modern yoga vocabulary, but the position has been present in the classical sun salutation sequence forever — it is the moment between Down-Dog and Chaturanga in every vinyasa flow. What is unusual about Plank is that it activates the entire kinematic chain simultaneously: the shoulder girdle stabilizes, the core engages, the glutes fire, the legs lengthen, the foot-flexors hold. There is nowhere to hide. Most people cannot hold a true plank for sixty seconds — not because the muscles are weak, but because the *coordination* of the whole chain is something the body has to learn. The pose is the body of a single straight line, held by the conscious activation of every muscle that ordinarily slumps. Modern strength science has caught up with what yoga noticed first: the plank is the single most efficient *core-stabilization* exercise in any movement vocabulary. It builds the kind of core that supports everything else — running, lifting, standing, breathing — better than any rotational or flexion-based core work.",
    what_it_does: 'Strengthens the deep core (transverse abdominis, multifidus), the shoulder girdle (serratus anterior, lower traps), the glutes, and the entire posterior chain. Builds endurance and *isometric strength* — the capacity to hold a position under load without movement, which is the kind of strength most life-tasks actually require (carrying, lifting, holding). Improves posture by retraining the deep stabilizers. Used clinically for lower-back rehabilitation, postural correction, and as the foundation of any strength practice.',
    how_to_form: 'From hands and knees, walk the hands forward until they are directly under the shoulders (or slightly forward of them). Tuck the toes; lift the knees; press back through the heels. The body forms a straight line from crown to heels — no sag in the lower back, no piking up at the hips. Press the floor away with the hands; engage the serratus anterior so the upper back is broad. Engage the core: draw the lower belly in, lengthen the tailbone toward the heels. Glutes engaged but not gripping. Gaze slightly forward of the hands. Hold 30 seconds to 2 minutes. To come out: lower the knees and rest.',
    in_love: 'The relationship that can hold a single line — same values, same direction, same shape — under sustained load. Reversed: a partnership in which one part of the line is sagging (the trust, the communication, the shared direction) and the rest is over-compensating until it fails.',
    in_work: 'The professional who has built the *isometric strength* to hold a position under load without movement. Long projects, long careers, long marriages — all require this kind of endurance, which the plank trains directly.',
    the_gift: '*The body as a single straight line.* The pose teaches integration: when the whole chain is engaged together, no single link bears the load.',
    the_shadow: 'Sagging or piking. Plank with a dropped lower back is a recipe for lumbar injury; plank with hips piked up is a different, easier pose (more like inverted-V). Either modification is fine as a step toward the real pose, but recognize that they are not Phalakasana itself.',
    pair_with_chakra: "Solar Plexus — Plank's core-activation is solar-plexus territory. The pose builds the will-and-strength fire of the third chakra; the inability to hold plank is often a felt sense of *I do not have the willpower* that the pose can re-train.",
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_pranayama: 'Bhastrika — the bellows breath. Both practices build internal heat and stability; Bhastrika after Plank is one of the most heat-generating sequences available.',
    pair_with_pranayama_slug: 'bhastrika',
    pair_with_mudra: 'Vajra — the thunderbolt mudra. The gesture of focused, integrated force. Vajra fingers, plank body — the whole system on one line.',
    pair_with_mudra_slug: 'vajra',
    pair_with_sign: 'capricorn',
    key_questions: [
      "Where in my body and my life is the straight line sagging — and what would change if I engaged the whole chain instead of letting one part carry it?",
      'What is my current plank hold — 30 seconds, 60, 120 — and what would 30 seconds more, every day for a month, teach me about my endurance?',
      'Which of my long-form commitments (relationship, career, practice) is asking for plank-strength — sustained holding under load — and where am I trying to substitute short bursts?'
    ]
  },
  {
    slug: 'legs-up-the-wall',
    text: 'Legs-Up-the-Wall',
    translation: 'Viparita Karani. Viparita = inverted / reversed, karani = action / doing. The inverted action — undoing gravity.',
    tradition: 'Hatha Yoga — described in the Hatha Yoga Pradipika ch. 3 as one of the great mudras for longevity; the modern restorative version is the gentlest mainstream inversion in yoga',
    glyph: '🦶',
    family: 'restorative',
    position: 13,
    one_liner: 'Lying on the back, legs straight up against a wall. The pose that costs nothing, asks nothing, and changes everything.',
    meaning: "Viparita Karani is the pose that the lineage holds as a near-miracle. The Hatha Yoga Pradipika names it among the great mudras and claims it slows ageing, heals digestion, and clears the mind. The modern, less-mystical version is gentler in claim but extraordinary in effect: lie on your back with your legs straight up the wall, and let the body do nothing for ten minutes. The geometry alone produces measurable benefits: blood that has pooled in the legs all day from standing or sitting drains back through the venous system; the lymphatic fluid follows; the lower back is gently traction-relieved by gravity working against it instead of with it; the heart-rate slows; the parasympathetic activates; the entire system, which has been fighting gravity all day, gets ten minutes of *upside-down rest*. Viparita Karani is, in calorie-and-effort terms, the cheapest restorative practice available. Nothing else costs so little and gives so much. The classical practice is sometimes called *the fountain of youth pose*; modern medicine cannot quite confirm the longevity claim but can confirm everything else.",
    what_it_does: 'Drains lymphatic and venous fluid from the legs back toward the core. Reduces leg swelling, fatigue, and lower-back compression. Slows heart rate within 3-5 minutes; activates the parasympathetic nervous system deeply. The mild-inversion effect (head slightly below heart) gently improves cerebral circulation without the contraindications of a full inversion. Used clinically for: insomnia (15 minutes before bed), jet lag, post-surgical edema, varicose veins, anxiety, and as the universal "I am too tired to do any other practice" pose. Safe in pregnancy (early-to-mid term), in chronic illness, after long flights.',
    how_to_form: 'Place a mat or rug perpendicular to a wall. Sit sideways with one hip touching the wall. Lie back as you simultaneously swing the legs up the wall — the goal is to end up with the sitting bones close to or touching the wall, the legs going straight up. Some bodies need a folded blanket under the hips to make this comfortable; experiment. Arms either by the sides (palms up), in cactus arms (elbows bent at 90 degrees), or one hand on belly + one hand on heart. Eyes closed. Stay for 5-15 minutes. To come out: bend the knees, roll to the right side, pause for a breath, then press up to sitting.',
    in_love: 'The relationship that allows for the *inverted rest* — the pause where neither partner is doing anything for the other, where both are simply present and gravity-relieved together. Reversed: a partnership in which rest never gets to happen; the wall is never reached because someone always has to keep moving.',
    in_work: "The professional who has learned that ten minutes of legs-up-the-wall at 3pm is more productive than another coffee. The body that drains the day at midday returns to the afternoon work fresh; the body that pushes through arrives at evening depleted.",
    the_gift: '*Inverting the action.* The pose teaches the body that doing *less than nothing* — actively reversing the position the day has demanded — is a real practice, not just absence of practice.',
    the_shadow: 'Holding it as performance. Viparita Karani only works if it is genuinely surrendered to; the practitioner who is mentally rehearsing email while in the pose is not actually doing it. Eyes closed, attention to breath, no agenda. Otherwise it is just lying with legs up.',
    pair_with_chakra: 'Heart — the inverted position brings extra circulation to the chest; the slow breath and parasympathetic activation are heart-chakra restoration in the most literal sense.',
    pair_with_chakra_slug: 'heart',
    pair_with_pranayama: 'Four-seven-eight — Dr. Weil\'s 4-7-8 breath. Both practices are sleep-bridge practices; combining them is the most reliable 15-minute fall-asleep protocol available.',
    pair_with_pranayama_slug: 'four-seven-eight',
    pair_with_mudra: 'Dhyana — the cupped-hands meditation gesture. Hands resting in dhyana on the lower belly while in Viparita Karani is the classical restorative pairing.',
    pair_with_mudra_slug: 'dhyana',
    pair_with_sign: 'cancer',
    key_questions: [
      'Where in my life have I been treating rest as something I have to *earn* by exhausting myself first — when the actual move is to invert the action before the exhaustion?',
      'What would change if I took 15 minutes of legs-up-the-wall daily for two weeks — what would my sleep, my swelling, my mood tell me?',
      'In a day that has demanded I be upright, doing, moving, producing — what part of me has been waiting all day to be inverted?'
    ]
  },
  {
    slug: 'butterfly',
    text: 'Butterfly Pose',
    translation: 'Baddha Konasana. Baddha = bound, kona = angle, asana = posture. The bound-angle pose; sometimes called the cobbler\'s pose.',
    tradition: 'Hatha Yoga — described in the Hatha Yoga Pradipika; named in the Iyengar lineage as one of the most-prescribed hip-openers',
    glyph: '🦋',
    family: 'restorative',
    position: 14,
    one_liner: 'Seated, soles of the feet pressed together, knees falling open. The hip-opener that the body has been waiting for since childhood.',
    meaning: "Baddha Konasana is the pose every toddler does naturally. Sit a two-year-old down and they will fold into baddha konasana without instruction — knees out, soles together, spine upright, breath easy. By adulthood, most people cannot get the knees within thirty centimetres of the floor in this shape. The hip-flexors and inner thighs have shortened from years of sitting in chairs (which is the *opposite* posture — knees forward and parallel). Baddha Konasana is the slow return to the natural sitting shape the body started with. The Iyengar lineage names this pose among the most-prescribed for women's health (it improves pelvic circulation, supports menstrual regulation, and is held throughout pregnancy as a safe daily hip-opener). The pose is also a profound emotional-release shape: the hips are where most adults store unprocessed grief, fear, and sexual experience, and any pose that opens the hips will eventually surface what has been held there. Baddha Konasana is the *gentle* hip-opener — accessible to almost every body, with the option to deepen into a full forward fold for the more intense version. The shadow side of forced hip-opening (pushing the knees down with the hands or with weight) can damage the hip joint; the wise version is patience.",
    what_it_does: 'Opens the hips, the inner thighs (adductors), and the pelvic floor. Improves circulation to the pelvic and lower-abdominal organs. Used clinically for: menstrual regulation, fertility support, pregnancy preparation, prostate health, sciatica relief, and chronic hip-flexor tightness. Emotionally: hip-opening poses surface unprocessed somatic material from the pelvic region — held grief, fear, and sexual trauma can become available for witnessing in this shape; the practice is to stay present without forcing.',
    how_to_form: 'Sit on a folded blanket if the hips are tight (this allows the knees to fall lower). Bring the soles of the feet together; let the knees fall open to the sides. Hold the feet (or the ankles, or the shins) with the hands. Lengthen the spine UPRIGHT — this is the entire pose for most practitioners; do NOT pull the knees down with effort. Press the soles of the feet into each other. To deepen: keeping the spine long, hinge forward from the hips (NOT from the lower back) and fold gently over the feet. Stop at the first edge; do not push past it. Hold 1-5 minutes. The hips open by *time*, not by force.',
    in_love: 'The relationship that has allowed the hips to open — the parts of the self that adulthood and trauma had closed, slowly returning to availability. Reversed: a partnership in which the body is bracing closed; intimacy never quite reaches the depth the body could carry, because the depth is held in the tightness.',
    in_work: 'The pose of the worker who sits in chairs all day undoing what the chairs have done. Five minutes of butterfly at the end of a workday reverses the postural compression of an eight-hour seat; over weeks, the gait, the posture, and the energy all shift.',
    the_gift: '*The return to the natural sitting shape.* The pose teaches the body that what felt natural at age two is still possible — the hips have been waiting all this time to be invited back.',
    the_shadow: 'Forcing the knees down. Pressing the knees toward the floor with the hands, with elbows, with weight, with willpower — the most common Baddha Konasana injury, slowly degrading the hip-joint capsule. The hips open in their own time over weeks; no single session needs to push.',
    pair_with_chakra: 'Sacral — Baddha Konasana is the sacral-chakra pose. The pelvic-region circulation it generates, the inner-thigh opening, and the emotional-somatic material it can surface are all sacral-chakra territory.',
    pair_with_chakra_slug: 'sacral',
    pair_with_pranayama: 'Sitali — the cooling tongue-curl breath. Both practices have a cooling, settling quality; Sitali into Baddha Konasana is a classical late-afternoon practice for systems that have been overheated by the day.',
    pair_with_pranayama_slug: 'sitali',
    pair_with_mudra: 'Yoni — the womb gesture. The sacred-feminine, pelvic-region mudra. Both practices honor the body of feminine somatic memory; the pairing is one of the deepest sacral-chakra practices in the canon.',
    pair_with_mudra_slug: 'yoni',
    pair_with_sign: 'cancer',
    key_questions: [
      'Where in my hips, my pelvis, my inner thighs has my body been holding something I have not yet been ready to feel?',
      'What would change if I sat in butterfly for ten minutes every evening, without forcing, without expectation, for three weeks?',
      'When I imagine my hips slowly opening over months — not by force but by patient invitation — what arrives in me: relief, fear, longing, all three?'
    ]
  },
  {
    slug: 'seated-forward-fold',
    text: 'Seated Forward Fold',
    translation: 'Paschimottanasana. Paschima = west / behind / back-of-body, uttana = intense stretch, asana = posture. The intense stretch of the back of the body.',
    tradition: 'Hatha Yoga — described in the Hatha Yoga Pradipika as the foremost of all asanas (ch. 1 v. 28-29); the pose lineage calls "the king of asanas"',
    glyph: '🌊',
    family: 'restorative',
    position: 15,
    one_liner: 'Sitting with legs straight in front, folding the torso over the legs. The pose that puts the body in a position the modern world has forgotten.',
    meaning: "Paschimottanasana is the pose the Hatha Yoga Pradipika calls *the foremost of all asanas* — a high claim for a pose that looks deceptively simple. Sit on the floor with legs straight in front, and fold the torso forward over the legs. That is the entire shape. What the simplicity hides is the depth: the pose stretches the entire posterior chain of the body in a single sustained action — feet, calves, hamstrings, glutes, lower back, mid-back, upper back, neck, and (in the deepest version) even the back of the skull. The Sanskrit name is precise: *paschima* means *west*, but it also means *the back of the body* in yogic anatomy, because the body faces east (toward the rising sun) and the back is therefore the western side. *Uttana* is *intense stretch*. The pose is the *intense stretch of the back of the body*, named with characteristic yogic accuracy. Modern desk culture has guaranteed that the back of the body is the chronically-tight part for most adults — sitting all day, the hamstrings shorten, the hip flexors lock, the lower back compresses. Paschimottanasana is the pose that systematically reverses every one of those compressions in a single posture. The lineage's high regard for it is not mystical; it is functional. Few poses do as much in one shape.",
    what_it_does: 'Stretches the entire posterior chain — calves, hamstrings, glutes, spinal erectors, and the back of the neck. Mildly compresses the abdomen, improving digestion. Activates the parasympathetic nervous system (forward folds are universally calming). Reduces lower-back pain in the modern desk-postured population. Emotionally: the forward-fold position is a return-to-self posture, the body turning toward its own interior; the pose has a quality of *introspection* that other poses cannot quite match.',
    how_to_form: 'Sit on a folded blanket (so the pelvis tilts forward, not back). Legs straight in front, feet flexed (toes pointing up). Spine LONG and upright. Inhale, sweep the arms overhead. EXHALE: hinge forward FROM THE HIPS (not the lower back), keeping the spine long. Reach toward the feet — but do NOT round the back to get there. Hold whatever is reachable: the shins, the ankles, the feet. If the back rounds significantly, use a strap around the feet and hold that. Stay 1-5 minutes, allowing the back of the body to slowly release. With each exhale, the fold deepens slightly; do not push. To come out: inhale, lift the chest, sweep the arms up, lower.',
    in_love: 'The partnership that has learned to fold inward together — long sustained quiet, no performance, the back of the self exposed and trusted. Reversed: a relationship in which forward-fold is impossible, because the position is too vulnerable; the back-of-the-body is armored and never gets to release.',
    in_work: "The professional who has built the time and the practice to fold inward — to do the introspective work that the outward-facing day cannot accommodate. Five minutes of paschimottanasana at end-of-day is the body's invitation to that interior work.",
    the_gift: '*The intense stretch of the back of the body, named correctly.* The pose teaches the body that the unseen side — the back, the interior, the hidden — has been waiting to be attended to.',
    the_shadow: 'Rounding the back. Paschimottanasana with a rounded spine reaches the feet faster but bypasses the actual pose; the hamstring stretch is replaced with a lumbar-disc stretch, which is not what the body wanted. Long spine, short fold, patient release.',
    pair_with_chakra: 'Sacral — the pose presses gently into the sacral region; the fold is sacral-chakra introspection and release. Some lineages also name it a third-eye pose (the forehead-toward-knee approach), but sacral is the primary.',
    pair_with_chakra_slug: 'sacral',
    pair_with_pranayama: 'Ujjayi — the ocean breath. Pair when the work is to hold the fold for the longer durations (3-5 minutes) where the deeper release happens. Ujjayi gives the long fold its through-line.',
    pair_with_pranayama_slug: 'ujjayi',
    pair_with_mudra: 'Dhyana — the cupped-hands meditation gesture. Hands resting in dhyana on the feet (or thighs, in modified version) while folded is the meditation-inside-the-asana classical pairing.',
    pair_with_mudra_slug: 'dhyana',
    pair_with_sign: 'virgo',
    key_questions: [
      'What is the back-of-my-body — physical, psychological, the unseen side — telling me it has been waiting to release?',
      'Where in my life have I been refusing to fold inward — keeping every gesture outward and forward, never turning to face my own interior?',
      'When I imagine 5 minutes of seated forward fold every evening for a month, what arrives in me: relief, restlessness, longing, all three?'
    ]
  },
  {
    slug: 'happy-baby',
    text: 'Happy Baby Pose',
    translation: 'Ananda Balasana. Ananda = bliss / joy, bala = child, asana = posture. The bliss-child pose.',
    tradition: 'Modern yoga — the Sanskrit name is recent (early 20th-century naming convention); the position itself is universal (every infant does it)',
    glyph: '🍼',
    family: 'restorative',
    position: 16,
    one_liner: 'Lying on the back, knees pulled toward the armpits, hands holding the feet, rocking gently. The pose every infant does, and most adults have forgotten.',
    meaning: "Ananda Balasana is the most universally-recognizable pose in yoga, because every human being has done it before they could speak. Lay an infant on their back and they will reach for their feet and pull their knees toward their chest and rock; it is a self-soothing reflex hard-wired into the nervous system. The yogic tradition named the position in the modern period — the Sanskrit *Ananda Balasana* (bliss-child) is twentieth-century vocabulary — but the position itself predates yoga, predates language, predates everything. The pose's name is precise: it is the pose of the *happy* child, not the surrendered or grieving one (Balasana, the kneeling forward-fold child's pose, is the surrender; Ananda Balasana is the *delight*). The position is anatomically beautiful: full hip-opening, full sacral release, gentle inner-thigh stretch, lower-back decompression, all simultaneously, with zero load on any joint. The pose is also playful in a way few yoga poses are; the rocking side-to-side is encouraged, the slight smile is encouraged, the giggling-because-this-feels-ridiculous is encouraged. Yoga that takes itself too seriously misses what Ananda Balasana has known forever: the body is also for joy.",
    what_it_does: 'Opens the hips, the inner thighs, and the groin in the most gentle position available (the back is supported by the floor, so the spine is protected). Releases the lower back through gentle gravity-traction. Massages the sacrum and lumbar spine through the rocking motion. Activates the parasympathetic nervous system. Used clinically for: lower-back release post-long-day, sacral decompression, hip-opening for tight-hipped beginners who cannot yet sit in butterfly, and as the *play* pose at the end of a serious practice. Emotionally: the pose is one of the few yoga shapes that explicitly invites *playfulness* — laughter in this pose is part of the practice, not a distraction from it.',
    how_to_form: 'Lie on your back. Draw the knees in toward the chest. Reach the hands UP between the legs and HOLD the outsides of the feet (or the inside arches, or the ankles, or the calves if the feet do not reach). Pull the knees DOWN toward the armpits — knees do NOT come to the chest, they come to the armpits, on either side. Soles of the feet face the ceiling. Press the feet UP into the hands while the hands pull the feet DOWN; this resistance is the activation. The lower back should be flat on the floor. ROCK side to side, gently, massaging the sacrum and lumbar spine. Stay 1-3 minutes. Smile. Laugh if it arrives.',
    in_love: 'The partnership that has kept room for play. Not performance, not seduction — actual childlike delight, the body that giggles in the middle of intimacy because the moment is absurd. Reversed: a relationship that has forgotten ananda; everything is heavy, even the rest.',
    in_work: 'The professional who has kept room for delight inside the work. Ananda is not a reward at the end of the day — it is a quality available *during* the work, if the body remembers how to access it. Practice happy baby for two minutes at lunch and the afternoon work changes flavour.',
    the_gift: '*The body is also for joy.* The pose teaches what every infant knew before language took over: delight is a position the body can choose.',
    the_shadow: 'Heaviness. Ananda Balasana done as if it were Balasana — serious, focused, *correct* — misses the entire point. The pose is happy. If it is not happy, it is not the pose.',
    pair_with_chakra: 'Sacral — the sacral-chakra opening pose par excellence; the position combines hip-opening, pelvic-floor work, and the emotional quality of *joy*, all of which the sacral chakra carries.',
    pair_with_chakra_slug: 'sacral',
    pair_with_pranayama: 'Bhramari — the humming-bee breath. Both practices are gentle, restorative, and (when done together) profoundly soothing; the hum into happy-baby is one of the deepest parasympathetic combinations available.',
    pair_with_pranayama_slug: 'bhramari',
    pair_with_mudra: 'Yoni — the womb gesture. The sacred-feminine pelvic mudra. Both practices honor the joy-aspect of the pelvic body; pair when the work is to return delight to the sacral region.',
    pair_with_mudra_slug: 'yoni',
    pair_with_sign: 'leo',
    key_questions: [
      'When was the last time my body chose joy — not earned it, not waited for it, just chose it, the way an infant does?',
      'In my practice, in my work, in my relationships — am I treating delight as a destination or as a *current option*?',
      'What would change if I took happy baby for two minutes daily — and let myself laugh in the pose, every time, even when nothing is funny?'
    ]
  }
]

const ASANA_BY_SLUG: Record<string, AsanaGuide> = Object.fromEntries(ASANAS.map((p) => [p.slug, p]))
export const ASANA_SLUGS = ASANAS.map((p) => p.slug)

export function isAsanaSlug(s: string): boolean {
  return s in ASANA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  grounding: { c1: '#7a9c6a', c2: '#3a5c2a', label: 'Grounding poses · the daily-practice family' },
  heart: { c1: '#d68a8a', c2: '#a04848', label: 'Heart-opening poses · the chest-throat opening family' },
  power: { c1: '#d68a4a', c2: '#a04818', label: 'Power poses · the activating family' },
  restorative: { c1: '#9c8ad6', c2: '#5a4a96', label: 'Restorative poses · the surrender family' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function asanaPageHTML(slug: string): string {
  const r = ASANA_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=asana-${slug}`

  const title = `${escapeHtml(r.text)} — Meaning, How to Practise &amp; What It Does · gab44 ✨`
  const description = `What ${r.text} actually means, the tradition it comes from, what the pose does in the body, how to practise it with the real alignment, in love, in work, the gift, the shadow, pair-with chakra/pranayama/mudra/zodiac. Hand-written, warm, lineage-honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Asanas', item: `${SITE_URL}/gab44/asanas` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/asanas/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — meaning, how to practise & what it does`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/asanas/${slug}`,
        about: `${r.text} yoga pose, ${r.tradition}, asana practice, yoga posture`
      }
    ]
  })

  const otherAsanasHtml = ASANAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/asanas/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/asanas/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} — meaning & how to practise`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/asanas/${slug}" />
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
  .other-asanas { margin: 36px 0 22px; }
  .other-asanas h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .asanas-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .asanas-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 420px) { .asanas-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/asanas">all 16 asanas</a>
      <a href="/gab44/pranayama">pranayama</a>
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Asana</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>asana ${r.position} of 16</span>
      <span>${escapeHtml(r.family)}-family</span>
    </div>

    <div class="translation-card">
      <div class="lbl">translation</div>
      <p class="text">${escapeHtml(r.translation)}</p>
      <p class="tradition">${escapeHtml(r.tradition)}</p>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.text)} actually carries</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🌀</span>what it does</h2>
    <div class="signs-card">
      <h3>the work this pose carries (and the contraindications)</h3>
      <p>${escapeHtml(r.what_it_does)}</p>
    </div>

    <h2><span class="icon">🧘</span>how to practise</h2>
    <div class="panel where">
      <h3>alignment · duration · entry &amp; exit</h3>
      <p>${escapeHtml(r.how_to_form)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this pose teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the practice goes wrong</h3>
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
        <div class="pair-name">${escapeHtml(r.pair_with_chakra_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/gab44/pranayama/${r.pair_with_pranayama_slug}">
        <div class="pair-label">breath</div>
        <div class="pair-name">${escapeHtml(r.pair_with_pranayama_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_pranayama)}</div>
      </a>
      <a class="pair-card" href="/gab44/mudras/${r.pair_with_mudra_slug}">
        <div class="pair-label">mudra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_mudra_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_mudra)}</div>
      </a>
      <a class="pair-card" href="/gab44/${r.pair_with_sign}/about">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sign)}</div>
        <div class="pair-text">Sign whose energy aligns with this pose.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to practise with</h2>
    <div class="questions-card">
      <h3>before / during / after the pose</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which pose *your* chart is asking for?</h2>
      <p>Each chart has a primary asana — the pose your particular wiring has been waiting to inhabit. A <strong>personal reading</strong> identifies it and tells you the breath, the mudra, and the chakra that will make the pose land. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Get your reading →</a>
    </section>

    <div class="other-asanas">
      <h3>the other 15 poses</h3>
      <div class="asanas-grid">
        ${otherAsanasHtml}
      </div>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/asanas">all 16 asanas</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function asanaIndexHTML(): string {
  const familySections = (['grounding', 'heart', 'power', 'restorative'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = ASANAS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/asanas/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
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
    name: 'The 16 Asanas — Meanings, How to Practise & What They Do',
    description: 'Hand-written guides to 16 of the most-practised yoga poses across hatha, ashtanga, iyengar and restorative traditions. Each page covers meaning, what the pose does in the body, how to practise it (with real alignment cues), the gift, the shadow, and the contraindications.',
    url: `${SITE_URL}/gab44/asanas`,
    hasPart: ASANAS.map((p) => ({
      '@type': 'Article',
      name: p.text,
      url: `${SITE_URL}/gab44/asanas/${p.slug}`,
      about: p.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 16 Asanas — Meanings, How to Practise &amp; What They Do · gab44 ✨</title>
<meta name="description" content="The 16 most-practised yoga poses (asanas) — Tadasana (mountain), Balasana (child), Adho Mukha Svanasana (downward dog), Savasana (corpse), Bhujangasana (cobra), Ustrasana (camel), Setu Bandha (bridge), Matsyasana (fish), Virabhadrasana I (warrior one), Vrksasana (tree), Utkatasana (chair), Phalakasana (plank), Viparita Karani (legs up the wall), Baddha Konasana (butterfly), Paschimottanasana (seated forward fold), Ananda Balasana (happy baby). What each pose actually does, how to practise it with real alignment, the contraindications. Hand-written, warm, lineage-honest." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/asanas" />
<meta property="og:title" content="The 16 Asanas — Meanings &amp; How to Practise · gab44" />
<meta property="og:description" content="From Tadasana (the daily standing pose) to Ananda Balasana (the bliss-child pose) — what each asana carries, hand-written, honest about lineage." />
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
      <a href="/gab44/pranayama">pranayama</a>
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/solfeggio">solfeggio</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 16 <span class="accent">Asanas</span> — meanings, how to practise &amp; what they do</h1>
    <p class="sub">Hand-written guides to the most-practised yoga poses across hatha, ashtanga, iyengar and restorative traditions. From Tadasana (the daily standing pose) to Ananda Balasana (the bliss-child pose). Each page has the actual lineage, the actual alignment, the gift, the shadow, and the contraindications.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right pose for your moment?</strong> Click any of the 16 below. Every page has the actual *meaning* (tradition + translation), what the pose *does* in the body and nervous system (with the contraindications named explicitly), *how to practise* it (alignment, duration, entry &amp; exit), what it means in love and in work, the *gift* it teaches, the *shadow* (forcing, performance, bailing — named where relevant), and pair-with cards for chakra, pranayama (breath), mudra (gesture), and zodiac.</p>
      <p><strong>The four families.</strong> The 16 poses cluster naturally. <em>Grounding</em> (Mountain, Child, Down-Dog, Corpse) is the daily-practice family — safe for everyone, the foundation of every other practice. <em>Heart</em> (Cobra, Camel, Bridge, Fish) is the heart-throat opening family — for the chest that has been compressed, the throat that has been silenced, the front body that has armored against the world. <em>Power</em> (Warrior One, Tree, Chair, Plank) is the activating family — for strength, will, sustained presence. <em>Restorative</em> (Legs-Up-the-Wall, Butterfly, Seated Forward Fold, Happy Baby) is the surrender family — for the inversion of the day, the slow opening, the introspection, the joy.</p>
      <p><strong>Posture is the fourth leg of the body-practice quadrant.</strong> Sound (mantras), gesture (mudras), and breath (pranayama) shape the inside; posture is what shapes the outside. The four practices together have been the spine of yogic transmission for millennia. <a href="/gab44/pranayama">See the 10 pranayamas →</a> · <a href="/gab44/mudras">See the 16 mudras →</a> · <a href="/gab44/mantras">See the 12 mantras →</a></p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which pose your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary asana — the pose your particular wiring has been waiting to inhabit. A $9 reading identifies it. <a href="/gab44/reading?ref=asanas-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 16 asanas · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
