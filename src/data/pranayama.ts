// Pranayama — SEO funnel — /gab44/pranayama (index) + /gab44/pranayama/{slug}.
// 10 hand-written breath-practice guides. Completes the body-practice tripod:
// SOUND (mantras, v3.59) + GESTURE (mudras, v3.63) + BREATH (pranayama, this).
//
// Family-tinted gradient: foundation (nadi-shodhana, ujjayi, diaphragmatic,
// box-breathing) = teal-blue — the daily, safe-for-everyone practices; cooling
// (bhramari, sitali, four-seven-eight) = blue-violet — the calming /
// parasympathetic practices; heating (kapalabhati, bhastrika, wim-hof) =
// saffron-red — the activating / sympathetic practices.

import { SITE_URL } from '@/lib/identity'

export interface PranayamaGuide {
  slug: string
  text: string
  translation: string
  tradition: string
  glyph: string
  family: 'foundation' | 'cooling' | 'heating'
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
  pair_with_mudra: string
  pair_with_mudra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const PRANAYAMAS: PranayamaGuide[] = [
  {
    slug: 'nadi-shodhana',
    text: 'Nadi Shodhana',
    translation: 'Alternate-nostril breath. Nadi = subtle channel, shodhana = purifying.',
    tradition: 'Hatha Yoga — described in the Hatha Yoga Pradipika (ch. 2) and the Gheranda Samhita as the foundational pranayama',
    glyph: '🌗',
    family: 'foundation',
    position: 1,
    one_liner: 'The single most-recommended pranayama in modern integrative medicine. Closes one nostril, breathes in the other, switches sides. Balances the two halves of the nervous system.',
    meaning: 'The yogic anatomy holds that prana flows through two main subtle channels (nadis): Ida, on the left side (lunar, receptive, parasympathetic in modern terms) and Pingala, on the right (solar, active, sympathetic). Ordinary life is asymmetric — most adults breathe predominantly through one nostril at any given hour, and the nervous system swings accordingly. Nadi Shodhana is the practice of physically alternating which channel carries the breath, restoring balance between the two halves. Sushumna, the central channel, is said to open only when Ida and Pingala are equalized — making this the gateway practice for any deeper meditation. Modern research (Bhavanani 2014; Telles 2013) shows measurable rise in heart-rate variability, drop in blood pressure, and improved prefrontal cortex coherence after just 10 minutes. The Hatha Yoga Pradipika names this as the first pranayama any serious practitioner is expected to master — before the heating techniques are ever attempted.',
    what_it_does: 'Balances the two halves of the autonomic nervous system. Within 2-3 minutes, HRV rises, blood pressure eases, and prefrontal cortex coherence increases. The felt result is "alert calm" — parasympathetic tone elevated without sympathetic tone collapsing. The safest pranayama for all populations: pregnant women, elderly, post-surgical, anxious, and chronically ill can all practice without contraindication.',
    how_to_form: 'Sit upright. Bring the right hand to the face: thumb resting near the right nostril, ring finger near the left. CLOSE the right with the thumb. INHALE through the LEFT, slow, 4 counts. CLOSE both nostrils, HOLD for 2-4 counts (skip the hold if new). OPEN the right (ring finger closes left), EXHALE through the RIGHT for 6 counts. INHALE through the right for 4. CLOSE both, HOLD. OPEN left, EXHALE for 6. That is one full round. Build to 10 rounds. Slow is the whole practice — if the breath is rushed, the benefit collapses.',
    in_love: 'A partnership in which both partners take turns leading and following — left and right alternating, neither dominant. The breath of a couple that has learned to switch without resentment. Reversed: a relationship stuck on one side, one partner doing all the receiving or all the activating, the channel calcifying.',
    in_work: 'Deep focus work that needs sustained attention without burnout. Five minutes of Nadi Shodhana before a two-hour focus block produces measurably longer sustained attention than caffeine, without the crash. Particularly useful before any work that requires both creativity (Ida) and execution (Pingala) — writing, design, strategy, integration.',
    the_gift: '*Balance.* Both halves of the nervous system held in equal tension — alert without anxiety, calm without dullness.',
    the_shadow: 'Mechanical performance. Nadi Shodhana done in a rush, as a checkbox, with shallow short breaths — looks like the practice but does none of the work. Slow is the entire point; if you do not have 10 minutes to do it slowly, do something else.',
    pair_with_chakra: 'Third Eye — Nadi Shodhana balances Ida and Pingala, which meet at the ajna (third eye). The classical opening practice for any meditation that targets the third-eye chakra.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_mudra: 'Vayu — the air-element mudra. Nadi Shodhana is the breath that consciously moves the air element through both channels; Vayu Mudra is the gesture of that same element.',
    pair_with_mudra_slug: 'vayu',
    pair_with_sound: 'Anxiety Relief — pair when anxiety is rooted in nervous-system imbalance rather than situation. Ten minutes of Nadi Shodhana before the audio doubles the felt-shift, because the system is already in coherence when the audio meets it.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'gemini',
    key_questions: [
      'Which nostril am I dominant in right now — and what does that tell me about which half of myself has been doing the work today?',
      'Where in my life have I been running on Pingala alone (push, force, activity) or Ida alone (retreat, receptivity, dream)?',
      'What would it take for me to sit for the full ten minutes — not five, not three — and actually let the channels balance?'
    ]
  },
  {
    slug: 'ujjayi',
    text: 'Ujjayi',
    translation: 'Victorious breath. Ujjayi = "to conquer" or "to be victorious" — the breath of the sovereign.',
    tradition: 'Hatha Yoga — Hatha Yoga Pradipika ch. 2; Ashtanga and Iyengar lineages name it the default breath of all asana practice',
    glyph: '🌊',
    family: 'foundation',
    position: 2,
    one_liner: 'The ocean-sound breath. Slight throat constriction makes inhale and exhale audible — a soft Darth-Vader hush. The breath that holds a yoga practice together.',
    meaning: 'Ujjayi is the breath of yoga itself — in any modern Ashtanga or vinyasa class, when the teacher says "breathe", they mean Ujjayi. The technique: a slight tone of the glottis (the muscle at the back of the throat) makes the air passing through it audibly hiss, both on the way in and on the way out. The sound is the practice — when you can hear your own breath softly all the way across the room, you know it is steady, even, and long. The Sanskrit *ujjayi* translates as "victorious" because the practice gives the breath authority over the wandering mind: as long as the sound is even, the mind has nowhere to slip. Patanjali never names Ujjayi by that name in the Yoga Sutras, but the technique is implicit in his definition of pranayama as the lengthening of inhale and exhale. In Iyengar lineage, Ujjayi is described as the breath that lets you hold a pose long enough to actually live in it.',
    what_it_does: 'Lengthens the breath and lowers its frequency. A normal breath is 12-18 cycles per minute; Ujjayi at practice tempo drops to 4-6 cycles per minute — and the parasympathetic shift at that rate is immediate. The throat-constriction also creates a small back-pressure on the exhale, which strengthens the diaphragm over time. The audible quality keeps attention anchored: as long as you can hear the breath, you cannot have left it. Used to hold focus through long asana practice, long sits, and long endurance work (Ujjayi is the breath competitive free-divers use during the breath-up phase before a dive).',
    how_to_form: 'Sit or stand. Open your mouth and exhale as if fogging a mirror — feel the slight constriction at the back of the throat. Now close your mouth and breathe through the nose, keeping that same throat shape. The sound should be a soft *ssss* on the inhale and a soft *hhhh* on the exhale — audible to you, possibly audible to someone next to you, not strained. The breath should be EVEN: inhale and exhale roughly the same length, 4-6 seconds each. If the throat goes hoarse, you are pressing too hard. Practice for 5-10 minutes on its own, or carry it through an entire yoga practice.',
    in_love: 'A partnership that has found its tempo — the breath even, the rhythm steady, no drama needed to mark that the love is alive. The audible breath of two people who have stopped performing for each other. Reversed: a relationship in which one partner is gasping (too short) or holding (too long); the rhythm is broken and neither knows how to restart it.',
    in_work: 'Long-form sustained work that needs presence rather than push. Writing, surgery, teaching, performing. Ujjayi is the breath of the professional who has stopped fighting the work and started inhabiting it — the breath audible to themselves, anchoring attention without effort.',
    the_gift: '*Sovereignty over the breath, and through it, the mind.* As long as the sound is even, the wandering has nowhere to go.',
    the_shadow: 'Force. Ujjayi pressed too hard becomes Vader-impression — a vocal performance of yoga rather than the actual practice. If the throat hurts, the breath is wrong. Soft is the rule.',
    pair_with_chakra: 'Throat — Ujjayi is the breath of the throat chakra; the slight constriction of the glottis is the throat-chakra muscle actively shaping the breath. The classical pairing for any throat-chakra practice (truth-speaking, voice work, mantra).',
    pair_with_chakra_slug: 'throat',
    pair_with_mudra: 'Anjali — the bow at the heart. Ujjayi is the breath of the practitioner who has bowed inwardly to the work; Anjali is the body posture that matches.',
    pair_with_mudra_slug: 'anjali',
    pair_with_sound: 'Letting Go — pair when the work is to stay present with what is being released for the full duration of the audio. Ujjayi gives the practice its through-line; without it the attention drifts.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life have I been holding the breath in (gripping) or letting it slip out (collapsing) rather than evening it?',
      'What would it sound like if my breath had as much presence as my voice does when I speak something I actually mean?',
      'Which of my current practices would deepen if I simply added the audible throat-sound for the full duration?'
    ]
  },
  {
    slug: 'diaphragmatic',
    text: 'Diaphragmatic Breath',
    translation: 'Belly breath / three-part breath / dirga pranayama. Dirga = long, complete.',
    tradition: 'Universal — present in yogic dirga pranayama, Buddhist anapana, Daoist dantian-breathing, and modern somatic-trauma practice (Levine, van der Kolk)',
    glyph: '🫁',
    family: 'foundation',
    position: 3,
    one_liner: 'The first breath every human knows and the breath most adults have forgotten. The diaphragm drops, the belly expands, the lungs fill from the bottom up. Returning home.',
    meaning: 'A newborn breathes diaphragmatically: belly rises and falls, shoulders never move. By adulthood, chronic stress, posture, and held emotion have inverted the pattern — most adults breathe shallowly into the upper chest, shoulders rising, diaphragm locked. Diaphragmatic breathing is the practice of returning the breath to its original architecture. The diaphragm — a dome-shaped muscle under the lungs — descends on the inhale, displacing the abdominal contents downward, which is why the belly expands; on the exhale it relaxes back upward, the belly falls. *Dirga pranayama* (the three-part version taught in classical yoga) extends this further: belly first, then ribs, then upper chest on inhale; upper chest first, then ribs, then belly on exhale. Used as the foundation for all other pranayama. Modern somatic trauma work (Peter Levine, Bessel van der Kolk) names diaphragmatic breath as the single most-reliable bottom-up regulator of the autonomic nervous system — the vagus nerve runs through the diaphragm, and every full belly-breath stimulates it directly.',
    what_it_does: 'Activates the vagus nerve and shifts the autonomic nervous system into parasympathetic dominance within 2-3 breaths. The pressure of the descending diaphragm on the vagal trunk is a direct mechanical signal: *safe, settled, here*. Used clinically for anxiety, panic, hypertension, IBS, and PTSD. Also the foundation breath for sleep (most insomnia is upper-chest breath that the body cannot down-regulate from), for digestion (the diaphragm massages the abdominal organs on every cycle), and for any other pranayama (you cannot do Ujjayi, Nadi Shodhana, or Kapalabhati from a chest-breath baseline).',
    how_to_form: 'Lie on your back, knees bent. Place one hand on your belly, the other on your chest. INHALE slowly through the nose — feel ONLY the belly hand rise, the chest hand should be still. EXHALE slowly through the nose or mouth — belly hand falls. 6 seconds in, 8 seconds out. 10 cycles. When this is easy, add the three-part version: inhale fills belly first (2 sec), then lower ribs (2 sec), then upper chest (2 sec); exhale empties upper chest first (2 sec), then ribs (2 sec), then belly (2 sec). Once you can do this lying down, do it seated. Once you can do it seated, you have it for life.',
    in_love: 'A partnership in which both partners breathe deeply when they are with each other — shoulders down, jaws unclenched, bodies not braced. Reversed: a relationship in which one or both partners is chest-breathing around the other; the body is reporting threat even when the mind is reporting love.',
    in_work: 'The breath of the worker who has stopped bracing. Most cognitive workers are upper-chest breathing for 8 hours a day; switching to diaphragmatic for even 5 minutes per hour produces measurable improvement in HRV, decision-quality, and end-of-day energy. The cheapest productivity intervention available.',
    the_gift: '*Coming home to the body that was already breathing for you.* You did not invent this breath — you remembered it.',
    the_shadow: 'Forcing the belly out. Diaphragmatic breath is not "puffing the belly" — it is *letting* the belly expand because the diaphragm has descended. If you are pushing the abdominal wall outward with muscle effort, the diaphragm is locked. Soften.',
    pair_with_chakra: 'Sacral — Diaphragmatic breath expands directly into the sacral region; the practice is feeling the belly rise and fall in the sacral chakra space (just below the navel).',
    pair_with_chakra_slug: 'sacral',
    pair_with_mudra: 'Dhyana — the cupped-hands gesture of seated meditation. Dhyana rests at the lower belly, exactly where the diaphragmatic breath terminates; the two practices have always been paired.',
    pair_with_mudra_slug: 'dhyana',
    pair_with_sound: 'Deep Sleep — pair when the work is to drop into rest. Diaphragmatic breath is the only reliable breath-bridge into sleep; the audio finishes what the breath has started.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'cancer',
    key_questions: [
      'Where in my day have I been chest-breathing as if under threat, when nothing is actually threatening me?',
      'What would change in my body, my decisions, my relationships, if I returned to belly-breath even 10% more of the day?',
      'When did I last lie on the floor and let the diaphragm do its work without any agenda?'
    ]
  },
  {
    slug: 'box-breathing',
    text: 'Box Breathing',
    translation: 'Sama vritti pranayama. Sama = equal, vritti = fluctuation/cycle. Equal-cycle breath.',
    tradition: 'Classical yogic (sama vritti) — adopted by US Navy SEALs as the standard stress-regulation breath; widely taught in clinical anxiety treatment',
    glyph: '🟦',
    family: 'foundation',
    position: 4,
    one_liner: 'Four equal sides: inhale 4, hold 4, exhale 4, hold 4. The breath of the operator under fire. The breath of the patient before surgery. The breath any system can run on.',
    meaning: 'Box breathing is the simplest possible pranayama: every phase of the breath cycle is the same length. Four seconds in, four seconds hold full, four seconds out, four seconds hold empty. The shape of a square — hence "box". In classical yoga the technique is called *sama vritti* (equal-fluctuation) and is named in the Yoga Sutras as the foundation of all rhythmic pranayama: when the inhale and exhale are equal, the mind ceases to oscillate. In the modern era, box breathing was popularized by Mark Divine (former US Navy SEAL) as the breath the special-operations community uses to hold themselves steady before, during, and after high-acuity tasks. Clinical anxiety treatment now teaches it as a first-line intervention. The reason it works: each of the four equal phases is long enough to override the rapid-shallow stress breath pattern, and short enough to be repeatable without strain. Anyone, anywhere, in any state, can run a box.',
    what_it_does: 'Imposes an external rhythm on a nervous system that has lost its own. The mind under stress is fluctuating fast; the breath under stress is fluctuating fast. Box breathing forcibly slows both. Within 3-4 cycles (about 60 seconds) the parasympathetic system catches the rhythm and takes over. HRV rises, cortisol drops, prefrontal cortex comes back online. Used by special-operations, anesthesiologists, ER doctors, public speakers, and increasingly by sales teams before high-stakes calls.',
    how_to_form: 'Anywhere. Sitting, standing, lying down. INHALE through the nose for 4 counts. HOLD full (lungs full, glottis closed) for 4. EXHALE through nose or mouth for 4. HOLD empty (lungs empty) for 4. Repeat. 4 cycles minimum, 10-20 cycles for deeper work. If 4 counts feels short, build to 5 or 6 — but keep all four sides equal. NEVER let one side become longer than another; the practice IS the equality.',
    in_love: 'A partnership that has matched its rhythm — equal effort in, equal pause, equal release, equal rest. The four-sided box of two people whose love does not depend on intensity to know it is alive. Reversed: a relationship with unequal sides — one partner doing all the inhaling (taking) or all the exhaling (giving), the box collapsed into a line.',
    in_work: 'The breath of the high-acuity moment. Before a hard conversation. Before a presentation. Before opening the email you are dreading. Before the surgery. Box breathing for 60 seconds drops the system into operator-mode: the prefrontal cortex back online, the body steady, the hands no longer shaking.',
    the_gift: '*Rhythm imposed by will.* You do not wait for the system to settle — you give it the rhythm it cannot find on its own, and it follows.',
    the_shadow: 'Mistaking the box for the only breath you need. Box breathing is brilliant *as an intervention* — but a life run entirely on box-breath is a life that has lost contact with the natural fluctuations of the breath that knows when to be longer on the exhale. Use the box, then return to the body.',
    pair_with_chakra: 'Solar Plexus — Box breathing strengthens the solar-plexus chakra; the will-imposing-rhythm-on-chaos is exactly the work of the solar-plexus (manipura). Used to rebuild a depleted solar plexus after chronic stress.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mudra: 'Surya — the solar mudra. Both box breathing and surya mudra strengthen the manipura / will-and-action axis; both are operator-tools.',
    pair_with_mudra_slug: 'surya',
    pair_with_sound: 'Anxiety Relief — pair as the immediate intervention when anxiety is acute. Run 5 cycles of box-breath, then open the audio; the system is already 40% there.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'capricorn',
    key_questions: [
      'Which side of my box has been collapsing today — the inhale, the hold, the exhale, or the empty-pause?',
      'Where in my life have I been demanding rhythm from a situation that needed it imposed from inside me instead?',
      'What would change if I ran 60 seconds of box-breath before every hard email, hard call, hard conversation, hard moment?'
    ]
  },
  {
    slug: 'bhramari',
    text: 'Bhramari',
    translation: 'Humming-bee breath. Bhramari = "she of the bees" — the goddess associated with the humming-bee sound.',
    tradition: 'Hatha Yoga — Hatha Yoga Pradipika ch. 2; Gheranda Samhita names it among the eight kumbhakas',
    glyph: '🐝',
    family: 'cooling',
    position: 5,
    one_liner: 'Soft humming exhale, mouth closed, sound vibrating the skull. The breath of a bee. Resets the vagus nerve in a single exhale.',
    meaning: 'Bhramari is the easiest pranayama in the world to teach — close your mouth, hum on the exhale, feel the buzz inside your skull — and one of the most physiologically powerful. The humming is not decorative; it is the mechanism. Modern research (Trivedi 2018; Pramanik 2010) shows that the vibration of nasal exhalation increases endogenous nitric oxide production in the sinuses 15-fold, and the laryngeal vibration directly stimulates the vagus nerve where it runs through the carotid sheath. In yogic terms, Bhramari is named for the goddess Bhramari Devi — slayer of the demon Arunasura, the "demon of inner restlessness" — and the practice is described in the Hatha Yoga Pradipika as the breath that "drives away the bee-swarm of the wandering mind". Anyone who has hummed Bhramari for even three exhales has felt the demonstrable internal quieting; it is one of those rare techniques whose folkloric framing and physiological mechanism converge.',
    what_it_does: 'Stimulates the vagus nerve via laryngeal vibration. Increases nasal nitric oxide. Lowers heart rate within 3-4 exhales. Particularly effective for tinnitus (the internal hum competes with the ringing), for the post-panic-attack settle, and for falling asleep when the mind is running. Also used pre-public-speaking — Bhramari coats the throat and soothes the vocal cords in a way that water cannot.',
    how_to_form: 'Sit. Close your eyes. (Optional: Shanmukhi Mudra — index fingers on closed eyelids, middle fingers on nostrils, ring fingers above lips, pinkies below lips, thumbs in ear-canals; this is the classical form, sealing the senses.) INHALE slowly through the nose, mouth closed. EXHALE while humming — lips closed, jaw relaxed, tongue resting on the floor of the mouth. The sound should be steady "mmmmm" for the full length of the exhale. Feel the vibration in the front of the skull, behind the eyes, and at the crown. 6-10 cycles. Each exhale longer than the inhale.',
    in_love: 'A partnership in which both partners have learned that quietly humming together — literally or metaphorically — is more bonding than dramatic conversation. The low-frequency hum of two nervous systems that have synchronized. Reversed: a relationship in which both partners are stuck in the head-noise, neither willing to drop into the simple buzz of being together.',
    in_work: 'The breath of the worker who has discovered that 60 seconds of humming before opening the difficult task is worth more than 60 minutes of caffeine. Particularly useful for voice-workers (teachers, podcasters, singers) — Bhramari warms the entire vocal apparatus better than any vocal exercise.',
    the_gift: '*The bee-swarm of the mind quiets.* You did not have to fight it — you hummed it down.',
    the_shadow: 'Self-consciousness. Bhramari requires audibly humming, and many adults will not hum where anyone can hear. The cost of that self-consciousness is the practice itself. Find a private room and let it sound silly.',
    pair_with_chakra: 'Third Eye — Bhramari\'s vibration concentrates in the front of the skull, exactly at the third-eye location. The classical pairing for any third-eye opening practice; the hum is the third eye finding its own resonance.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_mudra: 'Shunya — the inner-space mudra. Bhramari clears the inner space until only the hum remains; Shunya Mudra is the gesture of that same emptiness.',
    pair_with_mudra_slug: 'shunya',
    pair_with_sound: 'Deep Healing — pair as a 2-minute warmup before any long meditation. Bhramari resets the vagal tone; the audio then meets a body already in coherence.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'pisces',
    key_questions: [
      'Where in my life have I been trying to silence the bee-swarm of the mind with force, when humming would have worked?',
      'When did I last let a sound come out of my body that was not for anyone else to hear?',
      'What would change if I hummed Bhramari for 60 seconds before every difficult conversation, every hard email, every panic-spiral moment?'
    ]
  },
  {
    slug: 'sitali',
    text: 'Sitali',
    translation: 'Cooling breath. Sitali = "cooling" or "soothing". Sometimes called sitkari when done through the teeth instead of the tongue.',
    tradition: 'Hatha Yoga — Hatha Yoga Pradipika ch. 2; specifically named as the breath for reducing pitta (heat / fire) in the body',
    glyph: '💧',
    family: 'cooling',
    position: 6,
    one_liner: 'Curl the tongue into a tube, inhale through it — the air enters cool. The literal heat-reducing breath. Used for hot flashes, anger, summer, and the moment after intensity.',
    meaning: 'Sitali is the most physically literal pranayama in the canon: it cools the body. The technique works because the air drawn across the moist, curled tongue picks up evaporative cooling, and the air entering the body is measurably 3-5°C lower than ambient. (Sitkari, the variant for those who cannot curl the tongue genetically — about 30% of people — accomplishes the same by drawing air across the teeth with the tongue pressed to the upper palate.) Ayurvedic medicine names Sitali specifically as the *pitta-reducing* breath: it lowers internal heat, calms anger, eases hot flashes, treats summer heat exhaustion, and reduces inflammation. In modern terms, Sitali is the rare pranayama whose effect is *thermodynamic* before it is anything else — the body actually cools — and *then* the parasympathetic effects follow because a cooler body is a calmer body.',
    what_it_does: 'Lowers core body temperature 0.3-0.7°C within 5 minutes of practice. Reduces sympathetic nervous system activity. Eases hot flashes, perimenopausal heat surges, anger arousal, summer heat exhaustion, hypertension. Also used for any inflammatory condition where the felt-sense is *too hot* — heartburn, skin flares, post-exercise overheating. The only pranayama specifically contraindicated in cold weather (cool air on an already-cold body), and the only one specifically recommended for hot weather (cool air on an already-hot body).',
    how_to_form: 'Sit. Curl your tongue lengthwise into a tube (if you can; about 70% of people genetically can — the others use the Sitkari variant). Stick the tongue tube slightly past the lips. INHALE through the tube — feel the cool air across the tongue, hear the soft sucking sound. Close the mouth, EXHALE through the nose. Repeat 10-20 cycles. For Sitkari: press tongue to upper palate, slightly part the lips into a smile, inhale through the teeth (feel cool air across the teeth and gums), close mouth, exhale through nose.',
    in_love: 'A partnership that has cooled where it needed to. The argument that was almost about to ignite, and one partner said "let me take a breath" — and Sitali was the breath. The relational cooling that does not mean withdrawal, but means heat lowered to a sustainable level. Reversed: a relationship that has been running too hot for too long; the body itself is reporting overheat (inflammation, insomnia, irritability) and no one is taking the breath.',
    in_work: 'The breath of the worker who feels the email about to burn through them. Three minutes of Sitali before responding to provocation. Particularly useful for any work where heat-of-the-moment decisions cost real money — negotiation, conflict mediation, customer-facing crises.',
    the_gift: '*The body actually cools.* Not metaphorically. The thermometer would read lower. The fire was being fed by overheat itself; cool the body and the fire eases.',
    the_shadow: 'Avoidance of the heat that was telling you something true. Sometimes the body is hot because something needs to be confronted, not cooled. Sitali used to suppress every difficult feeling becomes a way of refusing to feel the fire that is teaching you something.',
    pair_with_chakra: 'Heart — Sitali cools the heart-region specifically; the breath enters at the front of the chest. Used for any heart-chakra practice where the work is to reduce heat (grief, anger, resentment, jealousy) rather than to open.',
    pair_with_chakra_slug: 'heart',
    pair_with_mudra: 'Varada — the gesture of compassionate giving. Sitali cools the giver before they give; Varada is the hand-shape of giving from a cooled rather than reactive place.',
    pair_with_mudra_slug: 'varada',
    pair_with_sound: 'Anxiety Relief — pair when the anxiety has a hot, agitated quality (rather than a frozen, dissociated quality). Sitali first, then the audio.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aries',
    key_questions: [
      'Where in my life is the heat I am carrying actually serving me — and where is it just burning me?',
      'What email, what conversation, what decision am I about to make hot, that 3 minutes of Sitali would let me make warm-but-clear instead?',
      'When did I last let my body actually cool — not through escape (AC, ice cream, dissociation) but through the breath itself?'
    ]
  },
  {
    slug: 'four-seven-eight',
    text: '4-7-8 Breath',
    translation: 'A modern hybrid based on the classical sama-vritti family, with deliberately unequal sides for parasympathetic dominance.',
    tradition: 'Modern — codified by Dr. Andrew Weil (Harvard, integrative medicine) in the 1990s; derived from classical yogic pranayama traditions',
    glyph: '🌙',
    family: 'cooling',
    position: 7,
    one_liner: 'Inhale 4. Hold 7. Exhale 8. The single most-recommended breath for falling asleep. The exhale is twice the inhale by design — the parasympathetic accelerator.',
    meaning: 'The 4-7-8 breath was developed by Dr. Andrew Weil (an integrative-medicine physician trained in classical yoga and ayurveda) as a deliberately simple, deliberately asymmetric pranayama that any patient could remember in a panic state. The architecture is intentional: a 4-count inhale (short enough to not trigger hyperventilation), a 7-count hold (long enough to begin CO₂ tolerance), and an 8-count exhale (long enough to fully empty the lungs and stimulate the vagus). The exhale being twice the inhale is the key — parasympathetic activation is most strongly triggered by *long exhales*, and 4-7-8 is the most accessible way to produce them at scale. Weil specifically named this breath as a *replacement for benzodiazepines* in mild-to-moderate anxiety and insomnia; he claims (and decades of clinical use bear out) that four cycles of 4-7-8, practised twice daily for six weeks, will retrain the autonomic nervous system\'s baseline. It is now the breath most-recommended by sleep-specialists for sleep-onset insomnia.',
    what_it_does: 'Forces parasympathetic dominance via the long exhale. The 7-count hold is just long enough to begin CO₂ tolerance, which retrains the chemoreflex over weeks; the 8-count exhale fully empties the lungs and maximally stimulates the vagus nerve. Within 2-3 full cycles, heart rate drops 5-10 bpm, blood pressure eases, and the mind quiets. Used clinically for insomnia, panic-attack interruption, generalized anxiety, and pre-procedure calming. The four-cycle dose (about 60 seconds) is enough for most acute interventions; the twice-daily practice retrains the baseline.',
    how_to_form: 'Sit or lie down. Touch the tip of the tongue to the ridge behind the upper front teeth (this is the yogic *khechari mudra* lite — keeps the airway shape consistent). EXHALE fully through the mouth (a soft *whoosh* sound). Close the mouth. INHALE through the nose for 4 counts. HOLD the breath for 7 counts. EXHALE through the mouth, lips slightly pursed, with the soft whoosh sound, for 8 counts. That is one cycle. Repeat for 4 cycles. (Do not exceed 4 cycles in the first weeks — the technique is potent and the body needs to adjust.) Practice twice daily — once on waking, once on going to bed.',
    in_love: 'A partnership in which the long exhale is welcomed — there is time for the breath to fully release before the next inhale begins. A relationship that has stopped sprinting. Reversed: a relationship in which neither partner has space to fully exhale; every release immediately consumed by the next demand.',
    in_work: 'The breath of the worker who has discovered that one minute of 4-7-8 is worth more than ten minutes of pacing. Particularly useful at end-of-day, to deliberately shift from work-mode to rest-mode; 4-7-8 is the bridge.',
    the_gift: '*Sleep without a pill.* The autonomic nervous system retrained from inside, by you, with no substance, no app, no purchase.',
    the_shadow: 'Mechanical counting. 4-7-8 is so simple that it can become a counting exercise that misses the body. The counts are scaffolding for the *experience* of the long exhale; if you are only counting and not feeling, the practice has collapsed into arithmetic.',
    pair_with_chakra: 'Root — 4-7-8 settles the system into root-chakra safety; the long exhale is the body\'s statement that the ground is here and can be trusted. Used for any root-chakra practice (grounding, sleep, safety, embodiment).',
    pair_with_chakra_slug: 'root',
    pair_with_mudra: 'Chin — palms-down rooting gesture. 4-7-8 is the breath of the body that is being rooted by the earth that is already holding it; Chin Mudra is the hand-shape of that same rooting.',
    pair_with_mudra_slug: 'chin',
    pair_with_sound: 'Deep Sleep — pair as the bridge into sleep. Four cycles of 4-7-8, lying in bed, then the audio. The combination has been used by Naoufal\'s users as the single most-reliable bedtime protocol.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'cancer',
    key_questions: [
      'When did I last let an exhale actually finish — all the way to the end — before grabbing the next inhale?',
      'Where in my life have I been treating my insomnia (literal or metaphorical) with substance when the breath would have done the work in six weeks?',
      'What would change if I practiced 4 cycles of 4-7-8 twice daily for six weeks — and let the baseline shift before I judged the technique?'
    ]
  },
  {
    slug: 'kapalabhati',
    text: 'Kapalabhati',
    translation: 'Skull-shining breath. Kapala = skull, bhati = shining / radiance. The breath that polishes the skull from inside.',
    tradition: 'Hatha Yoga — one of the six classical shatkarmas (cleansing practices) in the Hatha Yoga Pradipika ch. 2',
    glyph: '☀️',
    family: 'heating',
    position: 8,
    one_liner: 'Sharp, forceful exhales from the belly, passive inhales. One round = 30-60 short pumps. The morning espresso of pranayama — clears the head, oxygenates the brain, lights up the system.',
    meaning: 'Kapalabhati is named for its felt-effect: practitioners report a clear, radiant, "shining" sensation behind the forehead after a few rounds — as if the skull had been polished from the inside. The mechanism is straightforward — rapid, forceful exhalations driven by sharp contractions of the abdominal wall, with the inhalations happening passively in between. The Hatha Yoga Pradipika classes Kapalabhati not among the pranayamas but among the six *shatkarmas* (cleansing practices), specifically as a respiratory-system cleanse. Classical use: clearing the sinuses, mobilizing stuck pulmonary mucus, sharpening the mind for study. Modern use: morning practice to wake up the autonomic nervous system, pre-meditation preparation to clear "fog", post-meal digestive support. Kapalabhati is the gateway to the heating practices — if you can hold a Kapalabhati round, you can do Bhastrika; if you can hold Bhastrika, you can begin to approach the more dangerous breath-retention practices.',
    what_it_does: 'Massively oxygenates the bloodstream (each forced exhale clears more residual CO₂ than a normal exhale, and the rebound inhale brings in more O₂). Activates the sympathetic nervous system — heart rate rises, alertness rises, mental fog lifts. The strong abdominal contractions massage the abdominal organs (liver, pancreas, intestines) and stimulate peristalsis. Used clinically for sinus congestion, chronic lethargy, post-COVID respiratory recovery (under medical supervision), and as a sustainable alternative to morning caffeine. CONTRAINDICATED in: pregnancy, untreated hypertension, recent abdominal surgery, ulcers, glaucoma, vertigo.',
    how_to_form: 'Sit upright, spine long, hands resting on the knees. INHALE normally to about half-full. Now execute a SHARP, FORCEFUL exhale through the nose, driven by a quick snap of the abdominal wall pulling in toward the spine. The INHALE between exhales is PASSIVE — the belly simply releases and air comes back in on its own. The rhythm is *exhale-pause-exhale-pause* at about 1-2 exhales per second. Start with 1 round of 30 exhales. Rest. Build to 3 rounds of 60 exhales. After each round, sit still for 60 seconds and notice the shining-skull sensation. STOP if you feel dizzy, lightheaded, or short of breath — these mean you are pushing past your edge.',
    in_love: 'A partnership that has learned to actively clear stale air between them — the willingness to forcefully exhale resentment, accumulated grievance, the haze of routine — and then let the inhale of fresh contact happen naturally. Reversed: a relationship in which both partners are passively rebreathing the same stale dynamic, never forcing the exhale that would clear it.',
    in_work: 'The breath of the worker who has discovered that 3 minutes of Kapalabhati at 7am is worth more than 3 espressos. Particularly useful for: pre-deep-work mental fog clearing, post-lunch slump rescue, pre-creative-work activation. The cognitive lift is real and measurable.',
    the_gift: '*Radiance.* The forehead actually feels clearer. The fog lifts. You are awake in a way that caffeine cannot give you because the alertness is endogenous, not borrowed.',
    the_shadow: 'Force overriding contraindication. Kapalabhati is potent and not for everyone. Practitioners with hypertension, glaucoma, pregnancy, or unprocessed trauma can be harmed. Never push past dizziness; never practice in defiance of medical advice; never let a teacher pressure a student into a round they are not ready for.',
    pair_with_chakra: 'Solar Plexus — Kapalabhati is driven by the solar-plexus (manipura) musculature; each sharp exhale is the solar-plexus contracting. The classical pairing for any manipura-strengthening practice (will, action, fire-element work).',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mudra: 'Surya — the solar mudra. Both kapalabhati and surya mudra activate the fire/solar axis; both are practices for awakening, alertness, the will to act.',
    pair_with_mudra_slug: 'surya',
    pair_with_sound: 'Abundance Affirmations — pair as the morning activation sequence: 3 rounds of Kapalabhati to clear the system, then the abundance audio to plant the day\'s intention into a system that is awake and oxygenated.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life am I rebreathing stale air — relational, professional, mental — when a forceful exhale would clear it?',
      'When did I last let myself feel actually awake, not borrowed-awake from caffeine?',
      'What would change in my mornings if I replaced even half my coffee with 3 rounds of Kapalabhati?'
    ]
  },
  {
    slug: 'bhastrika',
    text: 'Bhastrika',
    translation: 'Bellows breath. Bhastrika = bellows — the forge-tool that pumps air to make the fire roar.',
    tradition: 'Hatha Yoga — Hatha Yoga Pradipika ch. 2; named as one of the eight kumbhakas; classed as a *heating* pranayama',
    glyph: '🔥',
    family: 'heating',
    position: 9,
    one_liner: 'Both inhale and exhale are forceful. The bellows pumping the inner fire. Stronger than Kapalabhati. Builds heat, builds prana, builds the practitioner\'s capacity for intensity.',
    meaning: 'Where Kapalabhati has forceful exhales and passive inhales, Bhastrika has forceful BOTH. Imagine a blacksmith\'s bellows: the leather sack is squeezed (forceful exhale) and then released to suck air in (forceful inhale), again and again, fanning the forge-fire. Bhastrika is the breath that pumps the inner fire — the *agni* of yogic anatomy — and the felt-result is heat: a literal rise in core body temperature, a flushing of the face, a quickening of the heart. The Hatha Yoga Pradipika names Bhastrika as one of the *kumbhakas* (breath-retention practices) and describes it as the breath that "destroys the three blocks" (granthis) along the central channel and prepares the body for kundalini awakening. In modern practice, Bhastrika is used carefully: it is potent, it is heating, and it requires solid Kapalabhati capacity first. Sadhguru\'s Inner Engineering protocols use a modified Bhastrika (Bhastrika-pranayama, or "Bhastrika-Surya-Bedhana") as the morning activator for advanced practitioners.',
    what_it_does: 'Generates internal heat (measurable rise in core temperature of 0.5-1.0°C). Strong sympathetic activation. Increases oxygen saturation and CO₂ tolerance. Stimulates the digestive fire (agni). Used to: break through chronic lethargy, recover from cold exposure, prepare the body for deep meditation, activate the body before kundalini work. CONTRAINDICATED in: pregnancy, hypertension, heart disease, recent surgery, glaucoma, vertigo, panic disorder. NEVER practiced before sleep.',
    how_to_form: 'Sit upright. Hands on knees, palms up or down. INHALE forcefully and fully through the nose, expanding the belly and chest. EXHALE forcefully and fully through the nose, contracting the belly. Both phases are equal in length and equal in force — about 1 second each, so one full cycle per 2 seconds. Start with 1 round of 10 cycles. Rest with normal breath for 60 seconds. Build to 3 rounds of 20 cycles, with rest between. STOP if you feel lightheaded, see spots, or feel heart-racing past comfort. Never practice without first having Kapalabhati capacity, and never practice late in the day.',
    in_love: 'A partnership that has built genuine intensity capacity — both partners can pump the bellows of presence-with-each-other without burning the house down. Reversed: a relationship in which one partner is trying to fan the fire and the other is closing the bellows; the heat never builds, or it builds and then collapses.',
    in_work: 'The breath of the worker about to enter sustained high-intensity work. Pre-startup-pitch. Pre-marathon. Pre-competitive task. Bhastrika is the activation breath; once it has done its work, the system is ready for output that ordinary baseline could not produce.',
    the_gift: '*Inner fire generated by will.* You did not wait for the mood — you pumped the bellows and the fire rose.',
    the_shadow: 'Burnout from over-use. Bhastrika is for activation, not for daily abuse. Practitioners who run Bhastrika as their default breath burn out the adrenals; the fire that was supposed to be a forge becomes a wildfire. Use sparingly, with reverence, with rest.',
    pair_with_chakra: 'Solar Plexus — Bhastrika fans the manipura (solar plexus / fire-center) chakra. The classical pairing for any practice that targets the will, the digestive fire, or the practitioner\'s active capacity.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mudra: 'Apana — the elimination/downward-current mudra. Bhastrika moves prana strongly; Apana ensures the spent prana can be released rather than accumulated as agitation.',
    pair_with_mudra_slug: 'apana',
    pair_with_sound: 'Abundance Affirmations — pair when the affirmations need to land in a body that is awake, hot, and ready to receive. Bhastrika first (carefully), then the audio.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'aries',
    key_questions: [
      'Where in my life have I been waiting for the mood to arrive when I could have pumped the bellows and generated the heat myself?',
      'Have I been using activation breath as a substitute for genuine rest — burning my own forge?',
      'What is the one moment per week where Bhastrika (used carefully, used reverently) would be the perfect tool — and where else does it not belong?'
    ]
  },
  {
    slug: 'wim-hof',
    text: 'Wim Hof Method',
    translation: 'A modern hybrid combining Tibetan Tummo (heating breath) with Pranayama hyperventilation and breath-hold technique.',
    tradition: 'Modern (Wim Hof, Netherlands, 2000s) — synthesised from Tibetan Buddhist Tummo, classical pranayama, and modern science of CO₂ tolerance and cold exposure',
    glyph: '🧊',
    family: 'heating',
    position: 10,
    one_liner: '30-40 deep breaths with full exhales, then full empty-lung hold for 60-90 seconds, then recovery breath held 15 seconds. Three rounds. Built for cold exposure but produces measurable shifts standing alone.',
    meaning: 'The Wim Hof Method is the most-researched modern breathing protocol — peer-reviewed studies (Kox et al., PNAS 2014; Buijze et al.) have demonstrated that practitioners can voluntarily modulate their autonomic nervous system, immune response, and pH balance through this technique. Wim Hof, "The Iceman", developed the method by combining Tibetan Tummo (the heat-generating monk practice) with adapted pranayama and concepts from his own decades of cold-water swimming. The method has three legs: the breathing, the cold exposure, and the commitment/mindset. The breathing alone produces alkalosis (raised blood pH from CO₂ blow-off), which during the breath-hold extends the hold-time well past what should be physiologically possible — and during that long hold, profound shifts in mood, immune activation, and felt-sense are reported. The method has been controversial (some practitioners have drowned doing it in water — never practice in water) and is now mainstream enough to be taught in corporate wellness programs.',
    what_it_does: 'Produces transient respiratory alkalosis (raised blood pH), which suppresses the urge to breathe and enables long breath-holds. Activates the sympathetic nervous system during the breathing phase, then deeply settles the parasympathetic during the holds. Demonstrably activates the immune system (Kox 2014 — practitioners voluntarily released adrenaline in response to bacterial-endotoxin challenge, suppressing inflammatory response). Reduces inflammation, sharpens cold tolerance, improves mood. NEVER practice in or near water, while driving, or while pregnant.',
    how_to_form: 'Sit or lie down — somewhere comfortable, NEVER in or near water. ROUND 1: take 30-40 deep breaths — full inhale through nose or mouth (belly + chest), let the exhale go *passively* (do not force it). After the 30th-40th breath, exhale fully, then HOLD with empty lungs. Hold as long as comfortable (60-90 seconds typical; do not strain). When the urge to breathe is strong, take a big RECOVERY INHALE and hold it for 15 seconds. Release. That is round 1. Repeat for rounds 2 and 3. Most practitioners notice longer breath-holds in round 2 and 3 due to CO₂ tolerance shift. After 3 rounds, return to normal breath. Total protocol: 12-20 minutes.',
    in_love: 'A partnership in which both partners have learned to do hard things together (cold exposure, breath holds, edges) without breaking. The relationship that survived its own breath-hold and found a deeper register on the other side. Reversed: a relationship that has never deliberately held its breath together — that has been afraid of any edge, and so has stayed shallow.',
    in_work: 'The breath of the high-performer who has discovered that the immune-and-mood lift from a 20-minute Wim Hof session is durable for the rest of the day. Particularly useful for: chronic-fatigue resilience, autoimmune symptom management (under medical supervision), athletic performance preparation, mental-edge training.',
    the_gift: '*Voluntary access to states the body was not supposed to be able to reach voluntarily.* The breath becomes the lever.',
    the_shadow: 'Drowning. Recklessness. Hubris. The method has killed practitioners who did it in water. It can trigger panic in unprocessed trauma. It can mask warning signals from the body that should not be masked. Reverence is mandatory; recklessness is fatal.',
    pair_with_chakra: 'Root — Wim Hof builds root-chakra survival capacity through the controlled stress of breath-hold and cold. The body that learns "I can hold my breath and live" rebuilds its baseline sense of safety from the ground up.',
    pair_with_chakra_slug: 'root',
    pair_with_mudra: 'Bhumisparsha — the earth-touching gesture. Wim Hof returns the practitioner to ground-truth (this body, this breath, this temperature); Bhumisparsha is the same touching-down of the witness to what is real.',
    pair_with_mudra_slug: 'bhumisparsha',
    pair_with_sound: 'Letting Go — pair when the work of the breath-hold has surfaced something to release. The audio meets a system that has just been opened by the method; release lands deeper.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Where in my life have I been outsourcing my immune system, my mood, my temperature regulation — when the breath itself is a lever?',
      'Have I been using Wim Hof (or any intense protocol) to bypass psychological work I need to actually do?',
      'When I imagine doing 3 rounds of the method tomorrow morning, what arrives — interest, dread, curiosity, avoidance? What does that tell me?'
    ]
  }
]

const PRANAYAMA_BY_SLUG: Record<string, PranayamaGuide> = Object.fromEntries(PRANAYAMAS.map((p) => [p.slug, p]))
export const PRANAYAMA_SLUGS = PRANAYAMAS.map((p) => p.slug)

export function isPranayamaSlug(s: string): boolean {
  return s in PRANAYAMA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  foundation: { c1: '#4a8a9c', c2: '#1c4a5c', label: 'Foundation breaths · the daily, safe-for-everyone practices' },
  cooling: { c1: '#7a9cd6', c2: '#3a5a96', label: 'Cooling breaths · the calming, parasympathetic practices' },
  heating: { c1: '#d68a4a', c2: '#a04818', label: 'Heating breaths · the activating, sympathetic practices' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function pranayamaPageHTML(slug: string): string {
  const r = PRANAYAMA_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=pranayama-${slug}`

  const title = `${escapeHtml(r.text)} — Meaning, How to Practise &amp; What It Does · gab44 ✨`
  const description = `What ${r.text} actually means, the tradition it comes from, what the breath does in the body and nervous system, how to practise it (rhythm, ratio, duration), in love, in work, the gift, the shadow, pair-with chakra/mudra/sound/zodiac. Hand-written, warm, lineage-honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Pranayama', item: `${SITE_URL}/gab44/pranayama` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/pranayama/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — meaning, how to practise & what it does`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/pranayama/${slug}`,
        about: `${r.text} pranayama, ${r.tradition}, breath practice, yogic breathing`
      }
    ]
  })

  const otherPranayamasHtml = PRANAYAMAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/pranayama/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/pranayama/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} — meaning & how to practise`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/pranayama/${slug}" />
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
  .other-pranayamas { margin: 36px 0 22px; }
  .other-pranayamas h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .pranayamas-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .pranayamas-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 420px) { .pranayamas-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/pranayama">all 10 pranayamas</a>
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Pranayama</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>pranayama ${r.position} of 10</span>
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
      <h3>the work this breath carries (and the contraindications)</h3>
      <p>${escapeHtml(r.what_it_does)}</p>
    </div>

    <h2><span class="icon">🫁</span>how to practise</h2>
    <div class="panel where">
      <h3>rhythm · ratio · duration</h3>
      <p>${escapeHtml(r.how_to_form)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this breath teaches</h3>
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
        <div class="pair-name">${escapeHtml(r.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/gab44/mudras/${r.pair_with_mudra_slug}">
        <div class="pair-label">mudra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_mudra_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_mudra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${r.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_sound)}</div>
      </a>
      <a class="pair-card" href="/gab44/${r.pair_with_sign}/about">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sign)}</div>
        <div class="pair-text">Sign whose energy aligns with this breath.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to breathe with</h2>
    <div class="questions-card">
      <h3>before / during / after the practice</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which breath *your* chart is asking for?</h2>
      <p>Each chart has a primary pranayama — the breath your particular wiring has been waiting to learn. A <strong>personal reading</strong> identifies it and tells you the chakra, the mudra, and the timing that will make the breath land in your body. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Get your reading →</a>
    </section>

    <div class="other-pranayamas">
      <h3>the other 9 breaths</h3>
      <div class="pranayamas-grid">
        ${otherPranayamasHtml}
      </div>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/pranayama">all 10 pranayamas</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function pranayamaIndexHTML(): string {
  const familySections = (['foundation', 'cooling', 'heating'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = PRANAYAMAS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/pranayama/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/10</span>
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
    name: 'The 10 Pranayamas — Meanings, How to Practise & What They Do',
    description: 'Hand-written guides to 10 of the most-practised pranayama (breath) techniques across yogic, buddhist and modern integrative traditions. Each page covers meaning, what the breath does in the body, how to practise it (with the actual rhythm and duration), the gift, the shadow, and the contraindications.',
    url: `${SITE_URL}/gab44/pranayama`,
    hasPart: PRANAYAMAS.map((p) => ({
      '@type': 'Article',
      name: p.text,
      url: `${SITE_URL}/gab44/pranayama/${p.slug}`,
      about: p.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 10 Pranayamas — Meanings, How to Practise &amp; What They Do · gab44 ✨</title>
<meta name="description" content="The 10 most-practised pranayama (breath) techniques — Nadi Shodhana (alternate nostril), Ujjayi (ocean breath), diaphragmatic, box-breathing, Bhramari (humming bee), Sitali (cooling), 4-7-8, Kapalabhati (skull shining), Bhastrika (bellows), Wim Hof Method. What each breath actually does, how to practise it with the real rhythm, and the contraindications. Hand-written, warm, lineage-honest." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/pranayama" />
<meta property="og:title" content="The 10 Pranayamas — Meanings &amp; How to Practise · gab44" />
<meta property="og:description" content="From Nadi Shodhana (the daily balancing breath) to the Wim Hof Method (the modern cold-and-breath protocol) — what each pranayama carries, hand-written, honest about lineage." />
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
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/solfeggio">solfeggio</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 10 <span class="accent">Pranayamas</span> — meanings, how to practise &amp; what they do</h1>
    <p class="sub">Hand-written guides to the most-practised breath techniques across yogic, buddhist, and modern integrative traditions. From Nadi Shodhana (the daily balancing breath) to the Wim Hof Method (the cold-and-breath protocol). Each page has the actual lineage, the actual rhythm, the gift, the shadow, and the contraindications.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right breath for your moment?</strong> Click any of the 10 below. Every page has the actual *meaning* (tradition + translation), what the breath *does* in the body and nervous system (with the contraindications named explicitly), *how to practise* it (rhythm, ratio, duration), what it means in love and in work, the *gift* it teaches, the *shadow* (forcing, performance, drowning — named where relevant), and pair-with cards for chakra, mudra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The 10 breaths cluster naturally. <em>Foundation</em> (Nadi Shodhana, Ujjayi, Diaphragmatic, Box) is the daily-breath family — safe for everyone, recommended as default practice. <em>Cooling</em> (Bhramari, Sitali, 4-7-8) is the parasympathetic family — for anxiety, heat, insomnia, the moment after intensity. <em>Heating</em> (Kapalabhati, Bhastrika, Wim Hof) is the sympathetic family — for activation, morning awakening, immune resilience, and the edges of human performance; these require respect for the contraindications.</p>
      <p><strong>Breath is the third leg of the body-practice tripod.</strong> Sound (mantras) and gesture (mudras) shape the inside; breath is what moves through both. A pranayama practice paired with the right mudra and the right mantra has been the spine of yogic transmission for centuries. <a href="/gab44/mudras">See the 16 mudras →</a> · <a href="/gab44/mantras">See the 12 mantras →</a></p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which breath your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary pranayama — the breath your particular wiring has been waiting to learn. A $9 reading identifies it. <a href="/gab44/reading?ref=pranayama-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 10 pranayamas · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
