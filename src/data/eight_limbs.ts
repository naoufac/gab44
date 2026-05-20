// Eight Limbs of Yoga — SEO funnel — /gab44/limbs (index) + /gab44/limbs/{slug}.
// 8 hand-written limb guides — the canonical Patanjali Yoga Sutra (2.29) framework.
// Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi.
// Each page describes one limb and links to the funnels that operationalize it
// (asana → /gab44/asanas, pranayama → /gab44/pranayama, etc.).
// Position-gradient: outer limbs (1-4 = body) earth-tones, inner limbs (5-8 = mind)
// indigo-violet. Sequence matters — the limbs are a path, not a list.

import { SITE_URL } from '@/lib/identity'

export interface LimbGuide {
  slug: string
  text: string
  sanskrit: string
  translation: string
  sutra_reference: string
  glyph: string
  zone: 'outer' | 'inner'
  position: number
  one_liner: string
  meaning: string
  what_it_is: string
  how_to_practise: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  operationalized_by: string
  operationalized_link: string
  operationalized_link_text: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const LIMBS: LimbGuide[] = [
  {
    slug: 'yamas',
    text: 'Yamas',
    sanskrit: 'यम',
    translation: 'Restraints. The five ethical observances toward the world. Yama = restraint, self-restraint, the great vow.',
    sutra_reference: 'Yoga Sutra 2.30 — ahimsā satya asteya brahmacarya aparigrahā yamāḥ (the yamas are non-violence, truthfulness, non-stealing, sexual restraint, non-grasping)',
    glyph: '🌿',
    zone: 'outer',
    position: 1,
    one_liner: 'The first limb. Five ethical restraints in how you treat the world: non-violence, truth, non-stealing, sexual integrity, non-grasping. The foundation under every other practice.',
    meaning: "Patanjali begins the eight-limb sequence with the yamas because none of the rest matters without them. You can hold the deepest asana, sit the longest meditation, chant the most beautiful mantra, and if you are violent, dishonest, exploitative, sexually compulsive, and grasping — you are not doing yoga. The yamas are the *ethical preconditions* of the practice; they are how the practitioner is in the world before the practice begins. The five yamas (Yoga Sutra 2.30) are: **Ahimsa** (non-violence — toward beings, including yourself, including in thought); **Satya** (truthfulness — alignment between what is known, said, and done); **Asteya** (non-stealing — including time, attention, credit, and ideas, not just objects); **Brahmacharya** (sexual integrity — the regulation of sexual energy, not necessarily celibacy); **Aparigraha** (non-possessiveness — not grasping, not hoarding, the inner freedom that does not depend on what is owned). Each of the yamas can be a lifetime practice; together they are the ground under everything else.",
    what_it_is: 'The yamas are *negative* prescriptions — *do not harm, do not lie, do not steal, do not exploit sexually, do not grasp* — but Patanjali frames each one as a positive capacity that emerges when the restraint is established. Ahimsa established produces a presence that all beings around you can feel safe in (YS 2.35 — *in the presence of one rooted in non-violence, hostility ceases*). Satya established produces speech whose truth manifests (YS 2.36 — *one whose word is truth, what they say comes to pass*). Asteya established attracts abundance (YS 2.37). Brahmacharya established produces vitality (YS 2.38). Aparigraha established reveals the meaning of life (YS 2.39). The yamas are not rules; they are the path of becoming a being whose presence itself is a practice.',
    how_to_practise: 'Pick ONE yama at a time. Spend a month with it. Ahimsa: notice every act of violence (toward yourself, toward others, in thought) for 30 days. Satya: 30 days of speaking only what is true, kind, and necessary; if any of the three is missing, do not speak. Asteya: 30 days of taking nothing — credit, attention, time — that was not given. Brahmacharya: 30 days of conscious sexual presence — not necessarily celibacy, but the practice of *being present* to your sexual energy rather than driven by it. Aparigraha: 30 days of buying nothing you do not need; 30 days of giving away one thing per day. The yamas deepen by *daily attention*, not by intellectual study.',
    in_love: 'A relationship in which both partners hold the yamas — no harm (including the thousand micro-harms of contempt and contempt-disguised-as-honesty), truth (the version that includes care), no theft (of time, of attention, of credit), sexual presence (rather than sexual compulsion), and non-grasping (the love that does not need to own). The yamas in love are the difference between attachment and intimacy.',
    in_work: "The professional whose ethics are not transactional. Yamas-in-work look like: not cutting corners that produce harm (ahimsa), not promising what cannot be delivered (satya), not taking credit for others' work (asteya), not using sexuality or charisma as manipulation (brahmacharya), not hoarding influence or information (aparigraha). The yamas-trained worker is the one others trust unconditionally — and that trust is the only sustainable career advantage.",
    the_gift: '*Becoming a being in whose presence the practice has already begun.* The yamas establish the *ground* under everything else; without them, no other limb can land.',
    the_shadow: 'Yamas as performance. The practitioner who declares non-violence while being subtly contemptuous, who speaks "truth" as weaponized honesty, who claims non-grasping while accumulating reputation — has not actually practised the yamas; they have only practised the *language* of the yamas. The yamas are visible only in the long arc of behavior, never in the declaration.',
    operationalized_by: "The yamas have no single gab44 funnel because they pervade every practice; they are the ethical orientation that makes the rest land. The gab44 funnels that most directly support yama practice are the heart-opening practices — heart-chakra work, archangel Chamuel (lost-and-found compassion), and goddess Kuan Yin (the heart that hears).",
    operationalized_link: '/gab44/chakras/heart',
    operationalized_link_text: 'Heart chakra practice',
    pair_with_sign: 'libra',
    key_questions: [
      'Which of the five yamas — ahimsa, satya, asteya, brahmacharya, aparigraha — has the most pull on me right now, and what is that telling me about where my ethical practice has been thin?',
      'Where in my life have I been doing the *language* of the yamas without the actual practice — performing non-violence while being contemptuous, claiming truth while withholding, saying "non-grasping" while quietly hoarding?',
      'If I picked one yama and spent thirty days with it, which would I pick — and what would the version of me who finished that thirty days know that the current me does not?'
    ]
  },
  {
    slug: 'niyamas',
    text: 'Niyamas',
    sanskrit: 'नियम',
    translation: 'Observances. The five ethical observances toward the self. Niyama = observance, restraint-by-positive-action.',
    sutra_reference: 'Yoga Sutra 2.32 — śauca santoṣa tapas svādhyāya īśvarapraṇidhānāni niyamāḥ (the niyamas are cleanliness, contentment, discipline, self-study, surrender to the divine)',
    glyph: '☀️',
    zone: 'outer',
    position: 2,
    one_liner: 'The second limb. Five ethical observances in how you tend yourself: cleanliness, contentment, discipline, self-study, surrender. The inward-facing complement to the yamas.',
    meaning: "If the yamas are the ethical orientation toward the world, the niyamas are the ethical orientation toward the self. They are framed positively (in contrast to the yamas' negative framing): *do this*, not *do not do this*. The five niyamas (Yoga Sutra 2.32) are: **Saucha** (cleanliness/purity — of body, of environment, of intention, of speech); **Santosha** (contentment — the active practice of accepting what is, without grasping for what is not); **Tapas** (discipline/heat — the sustained effort that burns away what is not essential); **Svadhyaya** (self-study — both the study of scripture and the study of the self through the lens of scripture); **Ishvara-pranidhana** (surrender to the divine — dedicating the fruits of action to something larger than the self). Together with the yamas, the niyamas form the ethical foundation that the body-practice (limbs 3-4) and the mind-practice (limbs 5-8) are built on. The Yoga Sutra is explicit: the higher limbs cannot stabilize without the first two limbs in place.",
    what_it_is: 'Patanjali names the fruit of each niyama in YS 2.40-2.45. Saucha established produces detachment from the body and clarity of mind. Santosha established produces unsurpassable happiness (santoshad anuttamah sukha-labhah). Tapas established produces mastery over the body and senses. Svadhyaya established produces communion with the chosen deity / ultimate. Ishvara-pranidhana established produces samadhi itself — the eighth limb, the goal of yoga, is named here as the direct fruit of the second limb. The niyamas are not preparation; they are already a complete path.',
    how_to_practise: "Like the yamas, the niyamas deepen by daily attention to ONE at a time. Saucha: thirty days of consciously clean food, clean space, clean speech, clean intention. Santosha: thirty days of practising contentment with what is — not as resignation but as active appreciation. Tapas: thirty days of one daily discipline that *burns* — cold showers, fasted morning hours, sitting meditation, anything sustained that the system resists. Svadhyaya: thirty days reading one passage of scripture (the Yoga Sutras themselves, the Gita, the Tao Te Ching, or any contemplative text) and journaling on what it reflects back. Ishvara-pranidhana: thirty days of dedicating each action — meals, work, practice, conversation — to something larger than personal benefit.",
    in_love: 'A partnership in which both partners hold the niyamas inwardly. Saucha-love is honest (not hiding); santosha-love is content (not always reaching for more); tapas-love does the sustained work even when the relationship is hard; svadhyaya-love studies itself (and the partner) honestly; ishvara-pranidhana-love dedicates itself to a horizon larger than just two people.',
    in_work: "The professional who tends their own instrument. Saucha in work is the clean workspace, the clear communication, the unmuddied intention. Santosha is the contentment with current capacity even while building more. Tapas is the discipline that the work *requires*. Svadhyaya is the constant honest study of one's own work. Ishvara-pranidhana is the orientation of the work toward something larger than career or income.",
    the_gift: '*The five observances that tend the practitioner.* The niyamas are how you become the kind of being who can hold the higher limbs.',
    the_shadow: 'Niyamas as self-improvement performance. The practitioner who *posts* their saucha (clean diet, organized space, beautiful aesthetic) while being inwardly chaotic, who declares santosha while compulsively achieving, who weaponizes tapas as proof of superiority — has missed what the niyamas were for. Like the yamas, they are interior practices first; their visibility is incidental.',
    operationalized_by: "Saucha and tapas pair beautifully with pranayama practice (the breath as the cleanest, most disciplined instrument the body has). Svadhyaya pairs with self-study via the gab44 reading itself — having someone reflect your chart back to you is svadhyaya at its most direct. Ishvara-pranidhana pairs with mantra practice — every mantra is a dedication.",
    operationalized_link: '/gab44/mantras',
    operationalized_link_text: 'Mantra practice',
    pair_with_sign: 'virgo',
    key_questions: [
      'Which niyama — saucha, santosha, tapas, svadhyaya, ishvara-pranidhana — am I weakest in right now, and what would change if I gave it thirty days of attention?',
      'Where in my life have I been practising tapas (discipline) but not santosha (contentment) — and what does the imbalance produce?',
      'What would surrender (ishvara-pranidhana) look like if I dedicated the fruits of this month to something larger than my own gain?'
    ]
  },
  {
    slug: 'asana',
    text: 'Asana',
    sanskrit: 'आसन',
    translation: 'Posture / seat. Originally just *the seat for meditation*; expanded by hatha yoga (10th c. onward) into the full vocabulary of yoga poses.',
    sutra_reference: 'Yoga Sutra 2.46 — sthira sukham āsanam (asana is steady and comfortable). One verse for the entire posture-limb in Patanjali — the elaboration came later.',
    glyph: '🧘',
    zone: 'outer',
    position: 3,
    one_liner: 'The third limb. Posture. The body that has become a steady, comfortable seat for the breath and the attention. The most-mistranslated limb of yoga in the modern West.',
    meaning: "Almost everything modern Western yoga calls *yoga* is actually only this one limb — and even within this limb, only a subset. Patanjali's entire treatment of asana is a single line: *sthira sukham asanam* — *posture is steady and comfortable*. That is it. The 200+ named asanas of contemporary yoga were elaborated much later, primarily through the Hatha Yoga Pradipika (15th c.) and the modern teachers (Krishnamacharya, Iyengar, Pattabhi Jois) who built the vinyasa systems of the 20th century. For Patanjali, asana served one purpose: a stable, comfortable seat from which the higher limbs (pranayama, pratyahara, dharana, dhyana, samadhi) could be practised for long durations without the body becoming a distraction. Modern asana practice has expanded the limb enormously — the body itself becomes a site of self-knowledge, of nervous-system regulation, of emotional processing, of strength and resilience. None of this contradicts Patanjali; it amplifies what was implicit. But it is essential to remember: asana is the *third* limb, not the first, and it is preparation for what comes after.",
    what_it_is: "*Sthira sukham asanam* — steady AND comfortable. Both qualities together. Patanjali's second sutra on asana (2.47) names how to get there: *prayatna shaithilya ananta samapattibhyam* — by relaxing effort and meditating on the infinite. The pose is correctly inhabited when there is no struggle left in it; when the body is solid and at ease at the same time. This is why the classical asana practice is *less* about the elaborate poses and more about the long held postures — Mountain, Lotus, Hero — that train exactly this quality. Modern asana practice should always come back to this test: is the pose I am in *steady* (the structure is sound) AND *comfortable* (the body is at ease)? If both, it is asana. If only one, it is something else.",
    how_to_practise: 'Build a daily 20-minute asana practice. Start with five minutes of standing poses (Mountain, Tree, Warrior One — the grounding family). Move through ten minutes of opening (Down-Dog, Cobra or Camel, Bridge, Seated Forward Fold). Close with five minutes of restorative (Legs-Up-the-Wall, Corpse). Every pose: test for sthira (steady) AND sukha (comfortable). Where the test fails, modify until it passes — the *modified* pose held in sthira-sukha is real asana; the *full* pose held in struggle is not. Over time, the system expands and what was once struggle becomes ease. This is the practice.',
    in_love: 'A relationship that holds *sthira sukham* — steady AND comfortable. Not steady-but-tense (the relationship that holds together through performance), not comfortable-but-unsteady (the relationship that is easy until the first wind), but both at once. The pose-of-love that does not require effort to sustain because its structure is sound.',
    in_work: "The professional posture that is *sthira sukham* — solid stance, no bracing. Most cognitive workers are sukha-without-sthira (collapsed posture, lots of comfort) or sthira-without-sukha (rigid posture, lots of effort). The trained asana practitioner brings both to the desk, the meeting, the difficult conversation.",
    the_gift: '*A body that has become a comfortable seat for the breath.* The third limb prepares the body so that the higher limbs are possible — without it, sustained pranayama, sustained meditation, sustained presence are physically impossible.',
    the_shadow: 'Mistaking asana for yoga. The modern Western practitioner who does 90 minutes of asana five days a week and zero pranayama, zero pratyahara, zero dharana, zero dhyana has practised the third limb thoroughly and has not yet started the other seven. This is fine as long as you know it. The shadow is when the practitioner *thinks* they are doing yoga.',
    operationalized_by: 'The gab44 asana funnel — 16 hand-written pose guides across four families (grounding, heart, power, restorative). Each pose page includes the alignment, the contraindications, the lineage, the gift, and the shadow.',
    operationalized_link: '/gab44/asanas',
    operationalized_link_text: 'The 16 asanas',
    pair_with_sign: 'taurus',
    key_questions: [
      'In my current asana practice (if I have one), am I holding the poses with both sthira AND sukha — steady AND comfortable — or am I trading one for the other?',
      'Have I been mistaking asana for yoga? Which of the other seven limbs am I currently practising, and which have I been ignoring?',
      'What would happen if I shortened my asana practice and lengthened my pranayama or my sitting meditation by the same amount — would my yoga deepen or weaken?'
    ]
  },
  {
    slug: 'pranayama',
    text: 'Pranayama',
    sanskrit: 'प्राणायाम',
    translation: 'Prana = life-force / breath, ayama = extension / restraint. The extension and regulation of the life-force through the breath.',
    sutra_reference: 'Yoga Sutra 2.49-2.51 — tasmin sati svāsa-praśvāsayor gati-vicchedaḥ prāṇāyāmaḥ (with asana established, the regulation of inhale and exhale is pranayama). YS 2.52 names its fruit: the veil over the inner light is destroyed.',
    glyph: '🌬️',
    zone: 'outer',
    position: 4,
    one_liner: 'The fourth limb. Breath. The conscious regulation of the life-force. The bridge between body (outer limbs) and mind (inner limbs).',
    meaning: "Pranayama is the hinge of the eight-limb sequence. The first four limbs are the *outer* practices (ethics, observance, posture, breath); the last four are the *inner* practices (sense-withdrawal, concentration, meditation, absorption). Pranayama is where the outer becomes inner — the breath is the most-outer practice and the most-inner practice at the same time, the place where the involuntary nervous system meets conscious intention. Patanjali introduces pranayama only after asana is established (YS 2.49 — *tasmin sati*, *that being the case*); the body must be a steady seat before the breath can be lengthened. The classical claim is profound: pranayama practiced for long enough *destroys the veil over the inner light* (YS 2.52 — *tatah kshiyate prakasha-avaranam*). What we cannot see, we cannot see because of the agitation of the breath. Steady the breath, the veil thins. This is the central yogic claim about pranayama — and modern integrative medicine has confirmed enough of it (HRV, vagal tone, autonomic balance) that the older language no longer sounds mystical.",
    what_it_is: 'The regulation of the three movements of breath: *puraka* (inhale), *rechaka* (exhale), and *kumbhaka* (the retention — held either after the inhale or after the exhale). Patanjali names four phases (YS 2.50): external (after exhale), internal (after inhale), the suspended/middle (the natural pauses), and the long/subtle (the breath becoming so refined it nearly disappears). Each pranayama technique works one or more of these movements: Nadi Shodhana balances the channels; Kapalabhati works the active exhale; Bhastrika works both inhale and exhale forcefully; Sitali works cooling; Bhramari works internal vibration; the Wim Hof method works the retention. Each technique has its own ratio (e.g. 4-7-8, or equal-equal-equal, or breath-and-hold) and each ratio produces a specific nervous-system shift.',
    how_to_practise: 'Begin with ten minutes daily of Nadi Shodhana (alternate-nostril) — the foundational practice, safe for all bodies. Add five minutes of diaphragmatic breath before sleep. Build a Sunday practice of one heating technique (Kapalabhati or Bhastrika, 3-5 rounds) followed by one cooling technique (Bhramari or Sitali, 5 minutes) followed by ten minutes of sitting meditation. Pranayama deepens by *consistency* not by *intensity* — ten minutes daily for a year is incomparably more transformative than ninety minutes once a week.',
    in_love: 'A relationship in which the breath of the two partners has come into rhythm. Couples who have lived together for decades often breathe in synchrony without trying; pranayama-trained couples can do this consciously, and the felt-presence of the relationship deepens. The relational pranayama practice: sit facing each other, eyes closed, hands at the heart, breath even, for five minutes. The system that has just shared a steady breath cannot easily be combative for the next hour.',
    in_work: "The professional whose breath is regulated does the work differently than the professional whose breath is shallow and chest-bound. Five minutes of pranayama before any high-stakes work is the cheapest performance-enhancer available, more effective than caffeine, exercise, or pep-talk. The trained breath is the trained nervous system; the trained nervous system is the trained mind.",
    the_gift: '*The veil over the inner light begins to thin.* The fourth limb is where the work of yoga becomes felt-as-clear-seeing rather than only conceptual.',
    the_shadow: 'Pranayama as performance or as bypass. Practising aggressive techniques (Bhastrika, Wim Hof, Kapalabhati) without preparation, without the ethical foundation (yamas/niyamas), without the steady seat (asana) can destabilize the nervous system rather than refine it. Patanjali names the sequence deliberately — pranayama is the *fourth* limb, not the first. Skip the first three at your own risk.',
    operationalized_by: 'The gab44 pranayama funnel — 10 hand-written breath-practice guides across three families (foundation, cooling, heating). Each page has the actual rhythm, the contraindications, the lineage.',
    operationalized_link: '/gab44/pranayama',
    operationalized_link_text: 'The 10 pranayamas',
    pair_with_sign: 'gemini',
    key_questions: [
      'How long is my exhale right now, in seconds? And what does its length tell me about the state of my nervous system?',
      'Have I been treating pranayama as a *technique* to deploy when stressed, rather than as a daily practice that reshapes the system over months?',
      'Which of the four breath-phases (inhale, exhale, post-inhale retention, post-exhale retention) is most underdeveloped in my practice, and what would change if I attended to it for thirty days?'
    ]
  },
  {
    slug: 'pratyahara',
    text: 'Pratyahara',
    sanskrit: 'प्रत्याहार',
    translation: 'Sense-withdrawal. Prati = against / back, ahara = food / what is taken in. The withdrawal of the senses from their objects — the turtle pulling its limbs into its shell.',
    sutra_reference: 'Yoga Sutra 2.54 — sva-viṣayāsamprayoge cittasya svarūpānukāra ivendriyāṇām pratyāhāraḥ (pratyahara is the withdrawal of the senses from their objects, as if the senses had taken on the nature of consciousness itself)',
    glyph: '👁️',
    zone: 'inner',
    position: 5,
    one_liner: 'The fifth limb. The senses withdraw from their objects and turn inward. The hinge between the body practices (limbs 1-4) and the mind practices (limbs 6-8).',
    meaning: "Pratyahara is the most-overlooked limb in modern yoga, partly because it is the hardest to teach and partly because its fruits are quiet. The Sanskrit *pratyahara* combines *prati* (against / back) and *ahara* (that which is taken in — the same root as the food we eat). The senses, ordinarily, are constantly *taking in* — sight, sound, taste, touch, smell, and the mind itself as a sense organ. Pratyahara is the practice of *not* taking in: the senses turn back toward the inside, away from their objects. The classical image (used by both Patanjali commentary and the Bhagavad Gita 2.58) is the turtle: when threatened, it withdraws all four limbs and its head into its shell. Pratyahara is that withdrawal practised deliberately, not in response to threat but in service of inwardness. The fifth limb is the gateway between the outer practices and the inner practices — without it, attention cannot stabilize long enough for concentration (dharana, the sixth limb) to take root. Modern attention research (Goldhill, Newport) has rediscovered what Patanjali named two thousand years ago: the mind cannot focus until the senses stop feeding it new inputs.",
    what_it_is: "Pratyahara is not the cessation of sensation; the senses still work. It is the *withdrawal of attention* from the senses. Light still falls on the eye; the practitioner is no longer *looking*. Sound still reaches the ear; the practitioner is no longer *listening*. The senses have not been suppressed; they have been deprioritized. Patanjali's full description (YS 2.54) names the criterion: the senses *take on the nature of consciousness itself* — meaning, they are no longer pulled outward by their objects, they are at rest in their source. The classical practice is to start with a single sense (usually hearing or sight) and practise turning attention inward while the sense remains active. Over time, the capacity generalizes to all senses simultaneously.",
    how_to_practise: 'The simplest entry: sit in a quiet room, eyes open. Notice the visual field. Without closing the eyes, soften the gaze until the visual field is *received* rather than *scanned*. The eyes are still open, but you are no longer looking. Do the same with hearing: notice the ambient sound. Without plugging the ears, let the sound *arrive* without listening. Hold both for five minutes. This is pratyahara. To deepen: include touch (the felt-sense of the body in the chair, *received* not scanned), smell, and the mind itself (thoughts arriving without being followed). The full pratyahara is the entire sense-field at rest while still active. Daily practice: 10 minutes after pranayama, before any sitting meditation.',
    in_love: 'A relationship in which both partners can be together *without consuming each other*. Not the relationship of two senses constantly grabbing at each other — the relationship of two practitioners who can sit in the same room and be simultaneously alone and together. Pratyahara-love is the foundation of long-form intimacy; the love that does not need constant input.',
    in_work: 'The professional who can be in a room full of inputs (open-plan office, Slack notifications, ambient chatter) and remain inwardly composed because the senses are no longer being consumed by every nearby stimulus. Pratyahara-trained workers have an unusual quality of being *in* the environment without being *consumed by* it.',
    the_gift: '*The senses at rest in their source.* Pratyahara is the gateway to the inner limbs — without it, dharana cannot stabilize, dhyana cannot flow, samadhi is unreachable.',
    the_shadow: 'Pratyahara confused with dissociation. The practitioner who withdraws attention from the senses *because the world is overwhelming* is dissociating, not practising pratyahara. The difference is subtle but important: pratyahara is *chosen presence in inwardness*; dissociation is *involuntary absence from outwardness*. The same outer appearance, opposite inner reality.',
    operationalized_by: 'Pratyahara has no current dedicated funnel; the closest gab44 practice that supports it is silent chakra-meditation (sitting with a chakra-focus for sustained durations, sensing without grabbing). The healing-audio practice can also support pratyahara when the audio is used as a single object the senses rest on, rather than as something to listen to.',
    operationalized_link: '/gab44/chakras',
    operationalized_link_text: 'Chakra meditation',
    pair_with_sign: 'pisces',
    key_questions: [
      'In an ordinary 10-minute period of my day, how many sense-inputs am I being pulled by — sound, sight, phone, taste, thought — and what does that tell me about the state of my pratyahara?',
      'Where in my life am I confusing pratyahara (chosen inward withdrawal) with dissociation (involuntary absence) — and what is the difference for me, specifically?',
      'What would change if I practised 10 minutes of pratyahara daily — eyes soft, senses receiving without grabbing — for thirty days before any sitting meditation?'
    ]
  },
  {
    slug: 'dharana',
    text: 'Dharana',
    sanskrit: 'धारणा',
    translation: 'Concentration. Dha = to hold, dharana = the act of holding. The act of holding attention on a single point.',
    sutra_reference: 'Yoga Sutra 3.1 — deśa-bandhaś cittasya dhāraṇā (concentration is the binding of consciousness to a single place)',
    glyph: '🎯',
    zone: 'inner',
    position: 6,
    one_liner: 'The sixth limb. Single-pointed concentration. Attention bound to one object — a candle flame, a mantra, the breath, an image — and brought back every time it wanders.',
    meaning: "Dharana is the work of binding attention. The Sanskrit *desha-bandha* — *binding to a place* — is the precise instruction. Attention by default is scattered; it lands on whatever the senses bring in, on whatever thought arises. Dharana is the practice of choosing ONE object and bringing the attention back to it every time it wanders. The object can be physical (a candle flame, an icon, a yantra), aural (a mantra, a sound), kinesthetic (the breath, a chakra), or imaginal (a visualization). The object does not matter; the *binding* matters. Patanjali introduces dharana as the sixth limb (Yoga Sutra 3.1) because by this point — yamas, niyamas, asana, pranayama, pratyahara established — the practitioner has built the foundation. The body is stable, the breath is regulated, the senses are at rest. Only now is sustained concentration possible. Without the earlier limbs, dharana collapses within minutes; with them, it can be held for the durations that produce dhyana and samadhi.",
    what_it_is: 'Dharana is *attention with effort*. The practitioner notices the mind wander, gently returns it to the object, notices again, returns again. This noticing-and-returning IS the practice; without the wandering there would be no dharana. The classical instruction is: do not be disturbed by the wandering, only by the failure to notice that wandering happened. The return is the practice. Patanjali distinguishes dharana from dhyana (the next limb) by *effort*: dharana is the *effortful* binding; dhyana is the *uninterrupted flow* that emerges when the effort is no longer needed. Without dharana, dhyana never arrives; without dhyana, samadhi is unreachable.',
    how_to_practise: 'Pick an object. The breath at the nostrils is the classical beginner choice — concrete, always available, single-pointed. Sit comfortably (asana). Establish even breath (pranayama). Soften the senses (pratyahara). Now bring attention to the sensation of breath at the nostrils. The mind will wander; this is normal. When you notice, return. Do this for 10 minutes the first week. 15 the second. 20 the third. Build to 30. The duration matters; under 10 minutes there is barely time for the binding to stabilize. The mantra is the next-most-classical object — pick one (Om, So-Hum, the Gayatri) and let it become the desha to which attention binds.',
    in_love: 'A relationship in which both partners can hold attention on each other for sustained periods without the attention scattering — looking at each other for ten minutes without speech, without phone, without anywhere else attention could be. This sounds simple; for most modern couples it is nearly impossible. The capacity to do it is dharana applied to love.',
    in_work: "The professional whose attention can be bound to a single task for hours, returning to the task every time it wanders, without irritation at the wandering. This is the most-valuable single capacity in modern cognitive work; the worker who has dharana is producing what others cannot, by simple virtue of the duration of attention they can sustain.",
    the_gift: '*Attention bound, returning, bound again.* Dharana is the door that all the inner limbs need before they can open.',
    the_shadow: 'Forcing concentration. Dharana is *gentle return*, not *gripping*. The practitioner who *grips* the object with attention will exhaust themselves within five minutes; the practitioner who *softly returns* every time can hold for hours. The shadow of dharana is willpower without ease — it produces the appearance of concentration without the actual capacity.',
    operationalized_by: "The most direct gab44 dharana practice is mantra repetition. Each mantra page is designed to be a desha for sustained concentration — pick one (Om for beginners, the Gayatri for advanced) and use it as the object of dharana for 20-30 minutes daily.",
    operationalized_link: '/gab44/mantras/om',
    operationalized_link_text: 'Om — the foundational dharana object',
    pair_with_sign: 'capricorn',
    key_questions: [
      'How long can I hold attention on a single object before the first wander — 30 seconds, 2 minutes, 10 minutes — and what does that tell me about the state of my dharana?',
      'When my attention wanders, do I notice gently and return — or do I notice with irritation and grip? Which is more often, and what is the cost of the gripping pattern?',
      'What would change if I practised 20 minutes of dharana on a single mantra daily for ninety days?'
    ]
  },
  {
    slug: 'dhyana',
    text: 'Dhyana',
    sanskrit: 'ध्यान',
    translation: 'Meditation. Dhyana = the uninterrupted flow of attention toward an object. Cognate with the Pali jhana and the Chinese chan, the Japanese zen.',
    sutra_reference: 'Yoga Sutra 3.2 — tatra pratyaya-ekatānatā dhyānam (in that place, the unbroken flow of attention is dhyana)',
    glyph: '🪷',
    zone: 'inner',
    position: 7,
    one_liner: 'The seventh limb. Meditation. The uninterrupted flow of attention. What dharana ripens into when the effort of binding is no longer needed.',
    meaning: "Dhyana is dharana that has become continuous. Where dharana is *effortful return* — the attention wanders, you notice, you return — dhyana is the state when the wandering has stopped and the attention is *flowing toward the object without break*. Patanjali defines it precisely (YS 3.2): *pratyaya-ekatanata* — *the singular flow of cognition*. The same word *dhyana* travels: it becomes *jhana* in Pali, *chan* in Chinese, *zen* in Japanese — every contemplative tradition's word for sustained meditation traces back to this Sanskrit root. The seventh limb cannot be willed; it emerges from the established practice of the sixth. The classical commentaries are blunt: a practitioner who claims to *do* dhyana has not understood it. You *do* dharana; dhyana *arrives*. When the binding (dharana) has been steady long enough, there is a moment when the practitioner notices the attention has not wandered for several minutes — and the noticing itself is the line between dharana and dhyana. Below that line, you are returning. Above it, you are *here*.",
    what_it_is: 'Dhyana is *attention without effort*. The object is still there — the breath, the mantra, the candle flame, the felt-sense of presence — but the attention is no longer being *brought* to it; it is *flowing into* it. There is no more sense of an attentional subject and an attended object; there is only the flow. This is not yet samadhi (the eighth limb, in which subject and object dissolve entirely); it is the gateway state in which the duality of attention is thinning but has not yet dissolved. The Buddhist tradition expanded dhyana into the four (or eight) *jhanas*, each a deeper state of absorption; the Yoga Sutra is less elaborate, treating dhyana as a single quality (uninterrupted flow) that ripens into samadhi.',
    how_to_practise: 'Dhyana cannot be practised directly; it emerges from steady dharana. The instruction is: practise dharana as if you will be doing it for the rest of your life. Notice without expectation that the returns are happening less often; that the flow is becoming smoother; that minutes pass without a single wander. Do not try to *hold* dhyana — the trying re-introduces effort and collapses the state. The practitioner who sits dharana for 30 minutes daily, for years, will eventually find dhyana arrives without invitation. The classical instruction is *sit, return when needed, do not measure*. The measuring is the obstacle.',
    in_love: 'A relationship in which the attention between two partners flows without effort — not because the relationship is shallow, but because both partners have done enough of the deeper work that the flow no longer requires intention. Long-married couples sometimes describe this; mystics describe it as the relationship between a being and the divine. Dhyana-love is rare and unmistakable when it arrives.',
    in_work: "The professional who has entered *flow state* on a long task. Mihaly Csikszentmihalyi's *flow* is the modern Western re-description of dhyana — the state in which attention, task, and self merge, and effort becomes effortless. Workers who can enter this state regularly produce in three hours what others produce in ten.",
    the_gift: '*Attention flowing, uninterrupted.* Dhyana is the state every contemplative tradition points toward; the state in which the practitioner is finally home in the practice.',
    the_shadow: 'Mistaking pleasant relaxation for dhyana. Many sustained-meditation practitioners report a quiet, pleasant state that they call dhyana — and it is usually still dharana, or pre-dharana, with a softer texture. The criterion is precise: *pratyaya-ekatanata*, the uninterrupted flow of attention. If wandering is still happening, even softly, dhyana has not yet arrived. This is not a failure; the threshold is real, and the years of dharana before it are not wasted.',
    operationalized_by: "Dhyana cannot be operationalized — it emerges from sustained dharana practice. The gab44 funnels that support the practice that produces dhyana are the mantra pages (the foundational dharana objects) and the silent chakra-meditation practices.",
    operationalized_link: '/gab44/mantras',
    operationalized_link_text: 'Mantras as dharana objects',
    pair_with_sign: 'pisces',
    key_questions: [
      'In my current practice, when did I last notice that ten minutes had passed without a wander? What was the object of attention, and what was the texture of the flow?',
      'Have I been trying to *do* dhyana — and is that effort itself what has been preventing it from arriving?',
      'What would change if I committed to 30 minutes of dharana daily for two years, with no expectation of progress, and let dhyana arrive when it arrives?'
    ]
  },
  {
    slug: 'samadhi',
    text: 'Samadhi',
    sanskrit: 'समाधि',
    translation: 'Absorption. Sam = together, adhi = on / above, samadhi = the bringing-together of subject and object in a single state of absorption. The eighth limb, the destination, the limb that names yoga itself.',
    sutra_reference: 'Yoga Sutra 3.3 — tad evārtha-mātra-nirbhāsam svarūpa-śūnyam iva samādhiḥ (samadhi is the state in which the object alone shines forth, as if the subject had emptied of its own form)',
    glyph: '✨',
    zone: 'inner',
    position: 8,
    one_liner: 'The eighth limb. Absorption. The state in which the duality between meditator and meditated dissolves. The destination of the entire eight-limb path — and the state that gives yoga its name.',
    meaning: "Samadhi is the limb that names the practice. The Sanskrit word *yoga* derives from *yuj* (*to yoke, to bind together*); samadhi is the *yoking* — the union of subject and object, of meditator and meditated, of the individual self and the larger field. Patanjali defines samadhi (YS 3.3) as the state in which *the object alone shines forth, as if the subject had emptied of its own form*. The duality of meditation — there is a meditator, and there is a thing being meditated upon — collapses. What remains is only the object, but without anyone separate observing it; or, equivalently, only the observer, but with nothing separate to observe. The classical commentaries spend enormous attention on the different *grades* of samadhi: *savikalpa* (samadhi with mental content — thought, feeling, perception still present in subtle form) and *nirvikalpa* (samadhi without mental content — pure absorption, dissolution of all differentiation). Patanjali himself distinguishes *samprajñata samadhi* (with object) and *asamprajñata samadhi* (without object). The eight-limb path culminates in samadhi, but samadhi itself has depth; the path does not end at the doorway, it enters a much larger interior.",
    what_it_is: "Samadhi is *not* a heightened or altered state in the sense the word *state* usually means; it is the *removal* of the separation that ordinarily produces the sense of being-a-subject-experiencing-an-object. What was three (subject, object, the act of perceiving) becomes one. The classical descriptions emphasize that samadhi is *not* a blissful experience to be had by the practitioner (because there is no longer a separate practitioner having it); it is the temporary dissolution of the practitioner-having-experiences structure itself. The fruits of samadhi (Patanjali names them in Book 3, the Vibhuti Pada) include the well-known yogic siddhis (powers), but Patanjali warns: the siddhis are obstacles, not goals; the practitioner who pursues them has lost the path. Samadhi is the door, not the destination beyond the door. The Yoga Sutra closes with *kaivalya* (Book 4) — liberation — which is what samadhi opens onto.",
    how_to_practise: 'Samadhi cannot be practised, only prepared for. The eight-limb sequence IS the preparation: yamas + niyamas (ethical ground), asana (steady body), pranayama (regulated breath), pratyahara (senses at rest), dharana (concentration), dhyana (uninterrupted flow), samadhi (absorption). Each limb prepares the next. There is no shortcut. The traditional teaching is: practise the seven preceding limbs for as long as it takes; samadhi will arrive when the system is ready. The practitioner who seeks samadhi *directly* will not find it; the practitioner who establishes the path will eventually find that samadhi is already here.',
    in_love: 'The mystics use the language of samadhi to describe the union of the lover and the beloved. Rumi, Mirabai, the Sufi tradition, Christian mystics like John of the Cross — all use the same image. Romantic love at its rarest moments touches a flicker of this; the deeper version is the lifelong devotional path that the mystics walked. Samadhi-love is the disappearance of the separation between the one who loves and the one who is loved.',
    in_work: "The work that has lost the separation between worker and work. The artist who is no longer making art; the art is making itself through them. The surgeon who is no longer doing surgery; surgery is happening. This state appears occasionally in any sustained, high-skill practice — it is samadhi-fragment, glimpsed and lost. Practitioners who have walked the eight-limb path can enter it deliberately and remain longer.",
    the_gift: '*The union that the practice was always pointing toward.* Samadhi is the gift the path was preparing for from the first day the practitioner started attending to the yamas.',
    the_shadow: 'Claiming samadhi. The practitioner who *describes* their samadhi has not understood it; the state cannot be reported back to ordinary consciousness without distortion. The shadow is also pursuing samadhi for the *siddhis* (psychic powers) Patanjali names — this is the deepest trap of the path, and the Yoga Sutra spends most of Book 3 warning against it.',
    operationalized_by: "Samadhi cannot be operationalized — it is the fruit of the entire path. The gab44 funnels that support its preparation are the *integrated* set: yamas + niyamas (ethics, by way of heart-chakra and goddess practices), asana (16 poses), pranayama (10 breaths), and mantra (the foundational dharana objects).",
    operationalized_link: '/gab44/limbs',
    operationalized_link_text: 'Begin the eight-limb path',
    pair_with_sign: 'pisces',
    key_questions: [
      'Have I been seeking samadhi directly — as a state to attain — when the entire instruction has been to seek nothing and walk the eight-limb path?',
      'Which of the seven preceding limbs is most underdeveloped in my practice right now — and what would change if I attended to it for a year?',
      'What does it mean to me that yoga is named after this limb specifically — that the entire practice is named for the *union*, not for any of the steps along the way?'
    ]
  }
]

const LIMB_BY_SLUG: Record<string, LimbGuide> = Object.fromEntries(LIMBS.map((p) => [p.slug, p]))
export const LIMB_SLUGS = LIMBS.map((p) => p.slug)

export function isLimbSlug(s: string): boolean {
  return s in LIMB_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ZONE_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  outer: { c1: '#9c7a4a', c2: '#6c4a1a', label: 'Outer limbs · ethics, observance, body, breath' },
  inner: { c1: '#7a6cd6', c2: '#4a3a96', label: 'Inner limbs · sense-withdrawal, concentration, meditation, absorption' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function limbPageHTML(slug: string): string {
  const r = LIMB_BY_SLUG[slug]
  if (!r) return ''
  const accent = ZONE_ACCENT[r.zone] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=limb-${slug}`
  const prevLimb = LIMBS[r.position - 2]
  const nextLimb = LIMBS[r.position]

  const title = `${escapeHtml(r.text)} — The ${ordinal(r.position)} Limb of Yoga · Patanjali · gab44 ✨`
  const description = `What ${r.text} (${r.sanskrit}) means in Patanjali's eight-limb yoga path, the Yoga Sutra reference, how to practise it, in love and in work, the gift and the shadow. Hand-written, warm, lineage-honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Eight Limbs of Yoga', item: `${SITE_URL}/gab44/limbs` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/limbs/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — the ${ordinal(r.position)} limb of yoga`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/limbs/${slug}`,
        about: `Eight Limbs of Yoga, ${r.text}, Patanjali Yoga Sutra, Ashtanga, ${r.sutra_reference}`
      }
    ]
  })

  const otherLimbsHtml = LIMBS.filter((q) => q.slug !== slug).map((q) => {
    const acc = ZONE_ACCENT[q.zone] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/limbs/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="pos">${q.position}</span><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/limbs/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} — the ${ordinal(r.position)} limb of yoga`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/limbs/${slug}" />
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
  .zone-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
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
  .translation-card .sanskrit { font-size: 22px; color: var(--accent); margin: 0 0 8px; font-weight: 600; }
  .translation-card .text { font-size: 16px; color: var(--fg); margin: 0 0 8px; line-height: 1.6; }
  .translation-card .sutra { font-size: 12px; color: var(--fg-muted); font-style: italic; margin: 0; }
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
  .panel.oper { border-left: 4px solid #4a9c6a; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel p { font-size: 15px; color: var(--fg); margin: 0 0 8px; line-height: 1.65; }
  .panel a.oper-link { display: inline-block; margin-top: 8px; color: var(--accent); font-weight: 600;
    text-decoration: none; }
  .panel a.oper-link:hover { text-decoration: underline; }
  .nav-prev-next { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 28px 0; }
  @media (max-width: 600px) { .nav-prev-next { grid-template-columns: 1fr; } }
  .pn-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 18px; color: var(--fg-dim); text-decoration: none; transition: border-color 0.15s; }
  .pn-card:hover { border-color: var(--c1); }
  .pn-card .pn-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pn-card .pn-name { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .pn-card .pn-text { font-size: 12px; color: var(--fg-dim); line-height: 1.4; }
  .pn-card.right { text-align: right; }
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
  .other-limbs { margin: 36px 0 22px; }
  .other-limbs h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .limbs-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; }
  @media (max-width: 700px) { .limbs-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 420px) { .limbs-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 10px 6px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
    position: relative; overflow: hidden;
  }
  .ph-mini::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .pos { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--fg-muted); }
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
      <a href="/gab44/limbs">all 8 limbs</a>
      <a href="/gab44/asanas">asanas</a>
      <a href="/gab44/pranayama">pranayama</a>
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Eight Limbs</div>
    <span class="zone-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>limb ${r.position} of 8</span>
      <span>${escapeHtml(r.zone)}-zone</span>
    </div>

    <div class="translation-card">
      <div class="lbl">sanskrit · translation</div>
      <p class="sanskrit">${escapeHtml(r.sanskrit)}</p>
      <p class="text">${escapeHtml(r.translation)}</p>
      <p class="sutra">${escapeHtml(r.sutra_reference)}</p>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.text)} actually carries</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🌀</span>what it is</h2>
    <div class="signs-card">
      <h3>the limb itself, precisely defined</h3>
      <p>${escapeHtml(r.what_it_is)}</p>
    </div>

    <h2><span class="icon">🪷</span>how to practise</h2>
    <div class="panel where">
      <h3>the daily practice that grows this limb</h3>
      <p>${escapeHtml(r.how_to_practise)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this limb teaches</h3>
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

    <h2><span class="icon">🛤️</span>how to operationalize this limb</h2>
    <div class="panel oper">
      <h3>the gab44 funnels that support this practice</h3>
      <p>${escapeHtml(r.operationalized_by)}</p>
      <a class="oper-link" href="${r.operationalized_link}">→ ${escapeHtml(r.operationalized_link_text)}</a>
    </div>

    <div class="nav-prev-next">
      ${prevLimb ? `<a class="pn-card" href="/gab44/limbs/${prevLimb.slug}">
        <div class="pn-label">← previous limb</div>
        <div class="pn-name">${prevLimb.position}. ${escapeHtml(prevLimb.text)}</div>
        <div class="pn-text">${escapeHtml(prevLimb.translation.split('.')[0])}</div>
      </a>` : `<a class="pn-card" href="/gab44/limbs">
        <div class="pn-label">↑ this is the first limb</div>
        <div class="pn-name">All 8 Limbs</div>
        <div class="pn-text">See the full path</div>
      </a>`}
      ${nextLimb ? `<a class="pn-card right" href="/gab44/limbs/${nextLimb.slug}">
        <div class="pn-label">next limb →</div>
        <div class="pn-name">${nextLimb.position}. ${escapeHtml(nextLimb.text)}</div>
        <div class="pn-text">${escapeHtml(nextLimb.translation.split('.')[0])}</div>
      </a>` : `<a class="pn-card right" href="/gab44/limbs">
        <div class="pn-label">↑ this is the eighth limb</div>
        <div class="pn-name">The path complete</div>
        <div class="pn-text">Begin again from the first limb</div>
      </a>`}
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after the practice</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which limb *your* chart is asking for?</h2>
      <p>Each chart has a primary limb — the one your particular wiring has been ready to deepen into. A <strong>personal reading</strong> identifies it and tells you the asana, pranayama, and mantra that will make the limb land in your body and mind. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Get your reading →</a>
    </section>

    <div class="other-limbs">
      <h3>the other 7 limbs</h3>
      <div class="limbs-grid">
        ${otherLimbsHtml}
      </div>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/limbs">the eight-limb path</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

function ordinal(n: number): string {
  const s = ['th','st','nd','rd']
  const v = n % 100
  return n + (s[(v-20)%10] || s[v] || s[0])
}

export function limbIndexHTML(): string {
  const limbCards = LIMBS.map((s) => {
    const accent = ZONE_ACCENT[s.zone]
    return `<a href="/gab44/limbs/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="pos">limb ${s.position}</span>
        <span class="glyph">${s.glyph}</span>
      </div>
      <div class="name">${escapeHtml(s.text)}</div>
      <div class="sanskrit">${escapeHtml(s.sanskrit)}</div>
      <div class="trans">${escapeHtml(s.translation.split('.')[0])}</div>
      <div class="teaser">${escapeHtml(s.one_liner)}</div>
    </a>`
  }).join('\n      ')

  const collectionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Eight Limbs of Yoga — Patanjali Yoga Sutra · Ashtanga',
    description: 'The eight limbs of yoga as laid out by Patanjali in the Yoga Sutra (c. 200 BCE-200 CE). Hand-written guides to each limb — yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, samadhi — with the Sanskrit, the sutra reference, the modern practice, the gift, the shadow.',
    url: `${SITE_URL}/gab44/limbs`,
    hasPart: LIMBS.map((p) => ({
      '@type': 'Article',
      name: p.text,
      url: `${SITE_URL}/gab44/limbs/${p.slug}`,
      about: p.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The Eight Limbs of Yoga — Patanjali Yoga Sutra · Ashtanga · gab44 ✨</title>
<meta name="description" content="The Eight Limbs of Yoga (Ashtanga) as laid out by Patanjali in the Yoga Sutra c. 200 BCE-200 CE — yama (ethics), niyama (observance), asana (posture), pranayama (breath), pratyahara (sense-withdrawal), dharana (concentration), dhyana (meditation), samadhi (absorption). Each limb explained with the Sanskrit, the sutra reference, the modern daily practice, the gift, the shadow, and the gab44 funnels that operationalize it. Hand-written, warm, lineage-honest." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/limbs" />
<meta property="og:title" content="The Eight Limbs of Yoga · Patanjali Yoga Sutra · gab44" />
<meta property="og:description" content="From yama (ethics) to samadhi (absorption) — the canonical 8-limb yoga path, hand-written, lineage-honest." />
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
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 12px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .glyph { font-size: 24px; }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; line-height: 1.3; }
  .card .sanskrit { font-size: 16px; color: var(--accent); margin-bottom: 6px; font-weight: 500; }
  .card .trans { font-size: 12px; color: var(--fg-muted); margin-bottom: 8px; font-style: italic; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
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
      <a href="/gab44/asanas">asanas</a>
      <a href="/gab44/pranayama">pranayama</a>
      <a href="/gab44/mudras">mudras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The Eight <span class="accent">Limbs</span> of Yoga — the Patanjali path</h1>
    <p class="sub">The canonical 8-limb path from the Yoga Sutra of Patanjali (c. 200 BCE-200 CE). Hand-written guides to each limb. From <em>yama</em> (the ethics underneath everything) to <em>samadhi</em> (the absorption that gives yoga its name). The frame that holds every practice gab44 publishes.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>The sequence matters.</strong> Patanjali wrote the limbs in this order deliberately: yamas (1) before niyamas (2), niyamas before asana (3), asana before pranayama (4), pranayama before pratyahara (5), pratyahara before dharana (6), dharana before dhyana (7), dhyana before samadhi (8). Each limb prepares the next. The practitioner who tries the higher limbs without the lower will collapse back; the practitioner who attends to the lower will find the higher arrive on their own.</p>
      <p><strong>The two zones.</strong> Limbs 1-4 (yama, niyama, asana, pranayama) are the <em>outer</em> zone — the ethical and physical foundation. Limbs 5-8 (pratyahara, dharana, dhyana, samadhi) are the <em>inner</em> zone — the mental and meditative work. Pranayama (limb 4) is the hinge between the two; it is the most-outer practice and the most-inner practice at the same time.</p>
      <p><strong>This is the frame.</strong> Every body-practice on gab44 — <a href="/gab44/asanas">asanas</a>, <a href="/gab44/pranayama">pranayamas</a>, <a href="/gab44/mudras">mudras</a>, <a href="/gab44/mantras">mantras</a>, <a href="/gab44/chakras">chakras</a> — lives inside one of these eight limbs. Read the limbs to see where each practice belongs in the path, and what comes before and after.</p>
    </div>

    <div class="grid">
      ${limbCards}
    </div>

    <div class="reading-strip">
      <h2>Want to know which limb your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary limb — the one your particular wiring has been ready to deepen into. A $9 reading identifies it. <a href="/gab44/reading?ref=limbs-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · the 8-limb path · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
