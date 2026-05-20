// Mantras — SEO funnel — /gab44/mantras (index) + /gab44/mantras/{slug}.
// 12 hand-written mantra guides — om, so-hum, sat-nam,
// om-mani-padme-hum, lokah-samastah, om-tare-tuttare-ture-soha,
// om-shanti, gayatri-mantra, om-namah-shivaya,
// om-gam-ganapataye-namaha, hare-krishna, om-ah-hum.
//
// Distinct keyword cluster — extremely high search volume across yogic,
// buddhist, hindu and global "spiritual practice" audiences:
// "what does om mean", "om mani padme hum meaning", "gayatri mantra
// translation", "so hum meaning", "sat nam translation", "om namah
// shivaya meaning", "tara mantra", "lokah samastah translation",
// "ganesh mantra obstacles", "hare krishna mantra", "om ah hum chant".
//
// **Cleanest extension yet of the Phase 1A bridge.** Every mantra is
// SOUND — directly cross-linked to /healing audio for the practice
// context, AND to /gab44/solfeggio for the frequency overlap, AND to
// /gab44/chakras for the body map. Bridges into Phase 1D via
// /gab44/reading?ref=mantra-{slug}.
//
// Each guide is ~600 words across 9 sections (meaning + tradition +
// translation, what it does, how to chant — concrete practice, in love,
// in work, the gift, the shadow / honest about appropriation,
// pair-with chakra/sound/zodiac, 3 key questions).
//
// Family-tinted gradient: seed mantras (om, so-hum, sat-nam) = indigo
// — the bija/seed family; heart mantras (mani-padme-hum, lokah, tara,
// shanti) = rose — the compassion family; power mantras (gayatri,
// shiva, ganesha, krishna, ah-hum) = saffron — the devotion family.
//
// Routes registered BEFORE /gab44/:sign. Schema.org Article +
// BreadcrumbList JSON-LD. Honest framing throughout — appropriation is
// named where relevant; mantras are presented as gifts from living
// traditions, not as decoration.

import { SITE_URL } from '@/lib/identity'

export interface MantraGuide {
  slug: string
  text: string                     // transliteration, e.g. "Om Mani Padme Hum"
  translation: string              // English meaning, ~10w
  tradition: string                // e.g. "Tibetan Buddhist (Mahayana)"
  glyph: string
  family: 'seed' | 'heart' | 'power'
  position: number
  one_liner: string
  meaning: string
  what_it_does: string
  how_to_chant: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const MANTRAS: MantraGuide[] = [
  {
    slug: 'om',
    text: 'Om (Aum)',
    translation: 'The primordial sound — the seed of all sound, the vibration of being.',
    tradition: 'Vedic / Hindu / Buddhist (universal across dharmic traditions)',
    glyph: '🕉️',
    family: 'seed',
    position: 1,
    one_liner: 'The one-syllable mantra that contains all mantras. The sound the universe makes when it is being itself. The seed everyone returns to.',
    meaning: 'Om — written more accurately as A-U-M — is the most ancient and most condensed mantra in any living tradition. The Mandukya Upanishad (~800 BCE) calls it the syllable that contains the entire universe: A is waking consciousness, U is dreaming consciousness, M is deep dreamless sleep, and the silence after the M is turiya — the fourth state, pure awareness itself. To chant Om is not to perform a ritual; it is to consent to be the vibration that the universe already is. Across Hindu, Buddhist, Jain and Sikh traditions, Om is the seed (bija) from which every other mantra grows. The Christian Amen and the Hebrew Amein are widely understood to be the same vibration arriving in a different language. When you sit and let the body make this sound, you are not adding anything to yourself; you are returning to the substrate that has been holding you the whole time.',
    what_it_does: 'Settles the nervous system within thirty seconds. Aligns the breath and the spine. Synchronises the brain hemispheres (measurable on EEG during sustained Om chanting). Used as the opening and closing of almost every yogic, buddhist, and meditation practice — because it puts the practitioner in the only state from which inner work is actually possible: present, embodied, and listening.',
    how_to_chant: 'Sit with the spine long. Inhale fully. On the exhale, let the sound start in the belly with a long *Aaaaa*, rise into the chest with *Uuuuu*, and close in the lips with *Mmmmm* — about equal time on each. Feel the vibration travel: belly, chest, head. Then sit in the silence after. Three rounds is enough; eleven is traditional. The goal is not loudness — the goal is to become the vibration.',
    in_love: 'The relationship that does not need to fill the silence. Two people who can sit and breathe together and recognise that the field between them is the same field. Reversed: a partnership that uses noise to avoid the deeper listening Om would invite.',
    in_work: 'The first three breaths of any meaningful work. The threshold between scattered-mind and gathered-mind. The pause before saying yes or no to a hard question.',
    the_gift: '*Return to substrate.* Om does not give you anything new. It dissolves the noise that has been hiding what is already here.',
    the_shadow: 'Decoration. Wearing Om as jewellery, posting it on Instagram, getting it tattooed without ever having sat with the actual sound. The syllable is alive in the body of the practitioner; outside that body it is a logo.',
    pair_with_chakra: 'Crown — Om is the bija (seed) of the crown chakra; the entire syllable is the vibration of unity-consciousness condensed into sound.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — pair Om as the opening and closing of any deep-work session; it is the threshold sound.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'pisces',
    key_questions: [
      'When was the last time I sat with a single sound long enough to feel it land in my body?',
      'What in my life is asking me to return to substrate before I add anything new?',
      'Which silence have I been filling with words that Om would invite me to leave open?'
    ]
  },
  {
    slug: 'so-hum',
    text: 'So Hum',
    translation: 'I am that. That I am.',
    tradition: 'Vedic / Yogic — found in the Isha Upanishad and the Vijnana Bhairava Tantra',
    glyph: '🌬️',
    family: 'seed',
    position: 2,
    one_liner: 'The mantra of the breath itself. So on the inhale, Hum on the exhale. The mantra you have been chanting your whole life without knowing.',
    meaning: 'So Hum is sometimes called the *natural mantra* or *Hamsa mantra* (Hamsa being the same two syllables in reverse) because it is the sound the breath itself makes — *So* is the sound of inhaling, *Hum* is the sound of exhaling, and the practitioner who notices this has been chanting So Hum at roughly 21,600 times a day since birth. The translation is *I am that* — a Vedantic recognition that the *I* and the *that* (the larger field, the universe, the divine, the totality) are one continuous reality. The Vijnana Bhairava Tantra (~9th century) gives So Hum as a meditation on the breath: synchronise the syllables with the inhale and exhale and the boundary between practitioner and breath dissolves. Unlike most mantras, So Hum does not require chanting aloud; the breath is already saying it. The work is to listen.',
    what_it_does: 'Replaces effortful breath-counting with a felt-sense rhythm. Slows the breath to 5-6 per minute (the rate at which heart-rate variability optimises and the parasympathetic system engages). Produces the same nervous-system settling as box-breathing without the cognitive load. Particularly useful for practitioners who find counting-meditation drains their attention rather than gathering it.',
    how_to_chant: 'No vocalisation. Sit, eyes soft. Listen to the breath. On the inhale, mentally hear *Sooo*. On the exhale, mentally hear *Hummmm*. Allow the syllable and the breath to merge — you are not adding anything; you are noticing what was already there. Twenty rounds is a complete practice. The breath will naturally lengthen as the mantra anchors. Do not force it — let the mantra take over the work.',
    in_love: 'A relationship in which both partners have stopped performing. The recognition that the *I* and the *you* are the same field expressed in two voices. Reversed: a partnership where one partner is still trying to *be* something for the other rather than letting *that* breathe through them.',
    in_work: 'Long-form deep work where the cognitive system needs sustained calm without monitoring. Writing, music, surgery, contemplation. Anywhere the work is asking the mind to fall through itself.',
    the_gift: '*Effortless return.* So Hum is the mantra you cannot fail at because the breath is doing it for you.',
    the_shadow: 'Treating it as a technique to control the breath rather than to listen to it. So Hum is not breath-work — it is breath-listening. The moment it becomes an effort to produce, the practice has become its own opposite.',
    pair_with_chakra: 'Heart — So Hum lives in the breath, and the breath\'s seat is the heart-lung field; the recognition *I am that* lands in the heart, not the head.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — pair when the nervous system is overactivated; So Hum returns the breath to its natural depth without effort.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What part of my life have I been working hard to *become* that So Hum is reminding me I already am?',
      'When did I last let the breath teach me, instead of trying to teach the breath?',
      'What would *I am that* permit in me that *I want to be that* has been forbidding?'
    ]
  },
  {
    slug: 'sat-nam',
    text: 'Sat Nam',
    translation: 'Truth is my name. / Truth is my identity.',
    tradition: 'Sikh / Kundalini Yoga — the seed mantra of Yogi Bhajan\'s lineage',
    glyph: '🌟',
    family: 'seed',
    position: 3,
    one_liner: 'The mantra of returning to who you actually are. Sat (truth) is long; Nam (name/identity) is short. The whole practice in two breaths.',
    meaning: 'Sat Nam is the bija mantra of the Kundalini Yoga tradition as taught by Yogi Bhajan, drawn directly from Sikh devotional practice (it appears in the Guru Granth Sahib as the foundation of the Mool Mantra: *Ek Onkar Sat Nam*). The translation is *Truth is my name* — but the deeper meaning is *truth is the substrate I am made of*. Where Om points to the cosmic vibration, Sat Nam is more personal — it is the practitioner\'s own truthfulness, the recognition that beneath the constructed identity (the social self, the role, the performance) there is a *Sat* — a truth — that is who the practitioner actually is. Kundalini practitioners use Sat Nam as a salutation, as a closing mantra, and as the rhythmic chant during long meditation kriyas. It is the most-chanted mantra in the entire Kundalini lineage.',
    what_it_does: 'Cuts through performative identity. Anchors the practitioner in the version of themselves that does not require an audience. Used at the end of every Kundalini class as a way of sealing the work into the *Sat*-self before re-entering the world. Particularly useful for practitioners who notice they have been performing a version of themselves that has stopped serving them.',
    how_to_chant: 'Long *Sat* (held for the full inhale-and-then-some, mouth slightly open, vibrating in the upper palate) followed by short *Nam* (a single syllable, mouth closed, vibrating in the lips and chest). Repeat in rhythm with a slow breath — about 4-5 seconds per Sat Nam. Eleven minutes is the traditional Kundalini duration; three minutes works for daily practice. Allow the long Sat to do the heavy lifting; let the Nam land softly.',
    in_love: 'A partnership where both people have given each other permission to drop the performance. The relationship that does not require a curated self. Reversed: a partnership where the *Nam* the partner knows is not the *Sat* the practitioner actually is.',
    in_work: 'The practice of telling the truth in writing, in speaking, in deciding. Sat Nam is the mantra of the moment before saying *no* to a project that pays well but is not yours. Or *yes* to a project that scares you because it is.',
    the_gift: '*Identity returns to truth.* Sat Nam dissolves the curated self and lets the actual self breathe again.',
    the_shadow: 'Spiritual bypassing. Using *Sat Nam* as a slogan to skip the actual work of inquiry into which parts of the constructed self are protective and which are simply outdated. Truth without compassion for the false self that built itself for survival is just another performance.',
    pair_with_chakra: 'Throat — Sat Nam is the mantra of speaking truth; the throat is the chakra of authentic expression, where the *Sat* meets the world.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — pair when releasing a constructed identity that is no longer yours; Sat Nam carries the practice of returning to the truth underneath.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aquarius',
    key_questions: [
      'Which part of my current identity is *Sat* (truth) and which part is *Nam-ade-up* (a name I picked up)?',
      'What would I say differently this week if I trusted that truth is my actual name?',
      'Where am I performing a version of myself that the *Sat* underneath is asking me to retire?'
    ]
  },
  {
    slug: 'om-mani-padme-hum',
    text: 'Om Mani Padme Hum',
    translation: 'The jewel is in the lotus. / Compassion arises in the heart that holds suffering without flinching.',
    tradition: 'Tibetan Buddhist (Mahayana) — the mantra of Avalokiteshvara / Chenrezig',
    glyph: '🪷',
    family: 'heart',
    position: 4,
    one_liner: 'The most chanted mantra in the world. Six syllables, six perfections, six realms. The mantra of compassion in action.',
    meaning: 'Om Mani Padme Hum is the mantra of Avalokiteshvara (Sanskrit) / Chenrezig (Tibetan) — the bodhisattva of compassion, the embodied promise that compassion is not a feeling but a practice. The literal translation is *The jewel is in the lotus*: the lotus grows in muddy water and produces its bloom precisely because of the mud, not despite it; the jewel is the awakened mind that arises from — not above — the difficulty of human existence. Each of the six syllables is said to purify a different mode of suffering and embody one of the six paramitas (perfections): generosity, ethics, patience, diligence, concentration, wisdom. Tibetan practitioners chant this mantra constantly — on prayer beads, on prayer wheels, on prayer flags — because compassion is understood not as a rare achievement but as a cumulative practice. It is the most-recited mantra on earth.',
    what_it_does: 'Trains compassion as a muscle. Each chanting is a small commitment to seeing the suffering of beings (including oneself) without turning away. Tibetan psychology holds that compassion is not the *result* of awakening but the *path* of awakening — the practitioner becomes compassionate by acting compassionately, and the mantra is the rhythm of that action.',
    how_to_chant: 'Traditional: 108 repetitions on a mala (wooden or seed-bead string of 108 beads), one bead per recitation, a full thumb-roll of the bead between fingertip and middle finger. Pace: about one Om Mani Padme Hum per second — gentle, rhythmic, no rush. Modern: any pace works. The Dalai Lama is reported to chant it constantly, including while shaking hands. The practice is to let the mantra accompany the day, not to set it aside as a separate event.',
    in_love: 'A relationship where compassion has matured past *I will fix you* into *I will sit with you in the mud*. The recognition that the partner\'s difficulty is not a problem to be solved but a field to be loved. Reversed: a partnership where one partner\'s suffering is being judged rather than held.',
    in_work: 'Service-oriented work — therapy, teaching, parenting, caregiving, hospice, justice work. Anywhere the labour is to stay present with the suffering of another without numbing or performing.',
    the_gift: '*Compassion as muscle.* The mantra makes the heart bigger by giving it a rhythm to practise on, the way the body gets stronger by lifting weights it could not lift yesterday.',
    the_shadow: 'Tourism. Picking up Om Mani Padme Hum as decoration without learning the lineage that gave it (Tibetan Buddhism, including the cost Tibetans have paid to keep it alive). Compassion-mantra-as-fashion is the precise opposite of what the mantra teaches.',
    pair_with_chakra: 'Heart — Om Mani Padme Hum is the heart-chakra mantra of the entire dharmic world; the lotus is the heart, the jewel is what blooms from it.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair when releasing what cannot be held without being changed; the mantra carries the same teaching.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'pisces',
    key_questions: [
      'Where in my life is the jewel in the lotus — the awakening that is arising precisely from the mud I have not been wanting?',
      'Whose suffering have I been trying to fix instead of be present to?',
      'Which of the six paramitas (generosity, ethics, patience, diligence, concentration, wisdom) is the next one for me to actually practise?'
    ]
  },
  {
    slug: 'lokah-samastah',
    text: 'Lokah Samastah Sukhino Bhavantu',
    translation: 'May all beings everywhere be happy and free, and may the thoughts, words and actions of my own life contribute in some way to that happiness and to that freedom for all.',
    tradition: 'Vedic / Yogic — used widely in modern yoga lineages as a closing mantra',
    glyph: '🌍',
    family: 'heart',
    position: 5,
    one_liner: 'The mantra of universal goodwill. The closing prayer of countless yoga classes. The mantra that asks the practitioner to become the answer to the prayer.',
    meaning: 'Lokah Samastah Sukhino Bhavantu is one of the oldest peace prayers in the Vedic tradition — *Lokah* means worlds (all worlds, all realms, all beings); *Samastah* means everywhere, all together; *Sukhino* means happy, content, at ease; *Bhavantu* is the optative imperative *may they be*. The full prayer is *may all beings everywhere be happy and free*. The crucial second clause, often added in modern practice, makes it a vow rather than a wish: *and may the thoughts, words and actions of my own life contribute in some way to that happiness and to that freedom for all*. This is the mantra that turns prayer into responsibility: the practitioner does not just wish well-being on all beings; they enlist their own existence in the project. It is widely chanted at the close of yoga classes precisely because it asks the practitioner to take the practice off the mat.',
    what_it_does: 'Expands the radius of concern. Where most contemplative practice begins inside the practitioner\'s own nervous system, Lokah Samastah explicitly extends outward — to all beings, all realms, every form of life. It trains a wider ethical imagination: the practitioner who chants this regularly becomes incrementally less able to act in ways that disregard the well-being of others.',
    how_to_chant: 'Sit, hands at heart-centre, eyes closed. Sing or speak the full Sanskrit slowly: *Lokah / Samastah / Sukhino / Bhavantu* — one phrase per breath, four breaths per round. Three rounds at the end of a yoga or meditation practice is traditional. The English vow can be added silently in the heart after the Sanskrit: *and may the thoughts, words and actions of my own life contribute…*',
    in_love: 'A relationship that has become large enough to wish well for people outside the relationship — even people the relationship does not directly know. Mature love is centripetal first, centrifugal second. Reversed: a partnership that has become a closed system, suspicious of the wider field.',
    in_work: 'Work that has stakes beyond the worker. Climate, justice, education, healthcare, community organising. Anywhere the labour is for someone the worker may never meet.',
    the_gift: '*The radius of concern widens.* Compassion that started as a yoga pose ends as an ethic that touches strangers.',
    the_shadow: 'Performative goodness. Chanting Lokah Samastah while the practitioner\'s actual life is structured to disregard the wellbeing of beings outside their immediate circle. The mantra is meant to *be lived*; chanting it without the second clause (*may my actions contribute*) is the quiet betrayal.',
    pair_with_chakra: 'Heart — the mantra is the radius of the heart\'s concern; the bigger the heart, the wider the radius of beings included in *all*.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — pair when the inner work is connecting personal flourishing to the flourishing of others; abundance that does not include all is hoarding.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'libra',
    key_questions: [
      'Which beings have I quietly excluded from my version of *all*?',
      'What would my week look like if the second clause — *may my actions contribute* — was real?',
      'Where in my work is the wider radius of concern asking me to show up with more skill, not just more good intention?'
    ]
  },
  {
    slug: 'om-tare-tuttare-ture-soha',
    text: 'Om Tare Tuttare Ture Soha',
    translation: 'I bow to Tara — to the swift one, to the courageous one, to the liberator.',
    tradition: 'Tibetan Buddhist (Vajrayana) — the mantra of Green Tara',
    glyph: '🌿',
    family: 'heart',
    position: 6,
    one_liner: 'The mantra of swift help. Green Tara is the bodhisattva who arrives before you have finished asking. The mantra to recite when you need protection, fast.',
    meaning: 'Om Tare Tuttare Ture Soha is the mantra of Green Tara — the female bodhisattva of compassionate action in Tibetan Buddhism, often called *the swift one* because, unlike many bodhisattvas, she arrives instantly rather than waiting for prolonged supplication. The translation is approximate: *Tare* is the call (*Tara!*), *Tuttare* is the prayer for protection from the eight fears (lions, elephants, fire, snakes, thieves, prison, water, demons — read literally or read as the eight inner fears), *Ture* is the prayer for ultimate liberation, and *Soha* (Sanskrit *Svaha*) is the seal of completion — *so be it*. Green Tara is read as the feminine face of compassion-in-motion: where Avalokiteshvara holds compassion, Tara *acts* on it. Tibetans chant her mantra at the start of journeys, before difficult conversations, in moments of fear, and in the practice of cultivating courageous compassion.',
    what_it_does: 'Calls on a specific archetype of the awakened-feminine for help. Distinct from Om Mani Padme Hum in flavour: where Mani Padme Hum trains compassion as a steady muscle, Tare Tuttare Ture Soha is the mantra of *swift response* — the courage to move toward what one had been moving away from. Used by Tibetan practitioners in moments of acute fear, before life-decisions, and in the practice of *fearless compassion* — compassion that does not collapse under pressure.',
    how_to_chant: 'Traditional: 21, 108, or any multiple of 21 repetitions on a mala. The 21 Praises of Tara is a longer companion practice. Pace: medium-fast, almost rolling — Tara is *swift*, and the chant takes that quality. Modern adaptation: chant before any moment that requires courageous action. Visualise Green Tara seated on a lotus, right leg extended in readiness to step into the world.',
    in_love: 'A relationship that needs the practitioner to stop hesitating. Tara is the mantra of *moving toward* — the conversation you have been avoiding, the apology you have been delaying, the boundary you have been not setting.',
    in_work: 'Decisions that require courage. The mantra to recite before sending the email, taking the meeting, leaving the job, starting the company, telling the truth that will rearrange the room.',
    the_gift: '*Swift compassion.* Tara teaches that the awakened heart is not slow and contemplative; it is fast, decisive, and ready.',
    the_shadow: 'Spiritual escapism. Using Tara mantra to avoid the slow inner work that compassion requires — chanting for *swift help* with a problem the practitioner could solve themselves with steady honesty.',
    pair_with_chakra: 'Heart — Tara is heart-chakra activated and outward-flowing; her mantra moves the heart\'s compassion into the world\'s reach.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — pair when fear is the obstacle to compassionate action; Tara mantra helps the practitioner act from courage rather than paralysis.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aries',
    key_questions: [
      'Which courageous action have I been delaying that the swift one is asking me to take this week?',
      'Where in my life have I been waiting for help to arrive instead of becoming the help?',
      'What would I do today if I trusted that the awakened-feminine moves *fast*?'
    ]
  },
  {
    slug: 'om-shanti',
    text: 'Om Shanti Shanti Shanti',
    translation: 'Peace, peace, peace. (Peace in body, peace in mind, peace in spirit.)',
    tradition: 'Vedic — closing mantra of countless Upanishads and yogic practices',
    glyph: '🕊️',
    family: 'heart',
    position: 7,
    one_liner: 'The triple peace prayer. Peace in three layers, three repetitions, three directions. The mantra spoken at every ending.',
    meaning: 'Om Shanti Shanti Shanti is the *Shanti Mantra* — *shanti* meaning peace, calm, tranquillity. The triple repetition is not for emphasis; each of the three is for a different layer. In the traditional reading: the first *shanti* is for the *adhibhautika* (peace from suffering caused by external forces — other people, weather, events); the second is for the *adhidaivika* (peace from suffering caused by forces beyond direct human control — illness, fate, the gods); the third is for the *adhyatmika* (peace from suffering caused by one\'s own mind — thoughts, attachments, identifications). The mantra appears as the closing of the major Upanishads and is spoken at the end of yogic, vedantic, and meditation practice — and at funerals, where the three peaces become the prayer for the departing being to be at peace in body, in soul, and in mind.',
    what_it_does: 'Seals practice. The chant marks a transition: the practice was happening, and now it is integrating. Every nervous-system signal in the chant — the long exhale, the rhythmic repetition, the slight melody — drops the practitioner from active-engagement back into rest-and-settle. The triple repetition gives the body, mind, and spirit each their own seal.',
    how_to_chant: 'Slow, ceremonial. Long exhale on each *Shanti*. The three are not identical — chant the first *Shanti* loudest (for the world), the second medium (for the larger forces), the third softest (for the inner field, and for the inward turn). Eyes closed for the third. Hands at heart-centre. Bow at the end. Three rounds is enough; one round closes most practices.',
    in_love: 'The mantra spoken at the end of difficult conversations — when both partners have done the work, and the closing is asking for peace in body (the nervous system settling), peace in field (the relationship settling), and peace in heart (the inner field of each partner settling).',
    in_work: 'The end of any meaningful chapter. Closing a project, leaving a job, finishing a long piece of writing. The mantra of *the work is complete; let it rest now*.',
    the_gift: '*Layered peace.* The mantra recognises that peace is not one thing but three — outer, larger, inner — and it offers a seal for each.',
    the_shadow: 'Premature closing. Chanting the peace mantra before the work has actually been done. Saying *shanti shanti shanti* at the end of a practice the practitioner sleepwalked through is not peace; it is performance.',
    pair_with_chakra: 'Crown — the third *shanti* is the inner peace, the peace of the witness consciousness, which the crown chakra holds.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Sleep — pair as the closing of the day; *shanti shanti shanti* at the threshold of sleep gives the body permission to drop.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'pisces',
    key_questions: [
      'Of the three peaces — outer, larger, inner — which is the one my life is most lacking right now?',
      'What chapter is asking to be sealed with this mantra so that the next chapter has room to begin?',
      'Which *shanti* have I been speaking out loud while still carrying the opposite inside?'
    ]
  },
  {
    slug: 'gayatri-mantra',
    text: 'Om Bhur Bhuvah Svah · Tat Savitur Varenyam · Bhargo Devasya Dhimahi · Dhiyo Yo Nah Prachodayat',
    translation: 'May the divine light of the sun illuminate our minds and awaken our highest understanding.',
    tradition: 'Vedic / Hindu — Rig Veda 3.62.10, attributed to the sage Vishvamitra (~1500 BCE)',
    glyph: '☀️',
    family: 'power',
    position: 8,
    one_liner: 'The mantra of illumination. Older than recorded history. The mantra Brahmin priests chant at sunrise to ask the sun to clarify the mind.',
    meaning: 'The Gayatri Mantra is one of the oldest and most revered mantras in any living tradition — its lineage stretches back to the Rig Veda, written down ~1500 BCE but oral for centuries before. Attributed to the sage Vishvamitra, addressed to *Savitr* (the sun in its illuminating aspect), the mantra is a prayer for the *clarification of the mind*. The translation is approximately: *We meditate on the splendour of the divine sun; may that light illuminate our intellect, our understanding, our path.* The structure of the mantra is precisely metered (24 syllables in the Gayatri meter, one of the oldest Vedic meters), and traditional brahmin practice is to chant it 108 times at sunrise, noon, and sunset — three times a day, every day, for a lifetime. To chant the Gayatri is to ally oneself with intelligence itself: the practitioner is asking not for things, not for outcomes, but for the *clarity* with which to see whatever is given.',
    what_it_does: 'Sharpens cognition. Practitioners across millennia report that sustained Gayatri practice produces a measurable quality of *clear seeing* — the capacity to perceive a situation without the distortion of personal preference, fear, or wishful thinking. It is the mantra of the *intellect-as-instrument* — not the intellect that argues, but the intellect that recognises.',
    how_to_chant: 'Traditional: 108 repetitions on a rudraksha mala at sunrise. Sit facing east. Spine long. Eyes soft, half-open in the direction of the sun. The four lines of the mantra are chanted with deliberate metered pace — not quick, not slow, with full breath on each line. Modern: 11 repetitions before any work that requires clear thinking. The first line (*Om Bhur Bhuvah Svah*) names the three realms (earth, atmosphere, heaven); the rest is the prayer.',
    in_love: 'A relationship that is asking for clear seeing rather than feeling-driven reactivity. Gayatri is the mantra to chant before a difficult conversation in which the partner needs to be perceived accurately rather than projected upon.',
    in_work: 'Intellectual work that requires the mind to operate without ego. Research, judgement, teaching, decision-making at scale. The mantra of the work that the world needs done with a clear mind, not a clever one.',
    the_gift: '*Illumination.* The mantra trains the practitioner to ask not for outcomes but for the clarity to see what is.',
    the_shadow: 'Brahminical exclusivity. The Gayatri was historically restricted in some lineages to upper-caste male brahmins — a restriction that violates the spirit of a mantra whose entire content is the prayer for *all minds* to be illuminated. Reclaim the mantra by chanting it; the gatekeeping was always a betrayal of the gift.',
    pair_with_chakra: 'Third Eye — Gayatri is the third-eye mantra, the prayer for *vision* (in the deeper sense — the seeing that does not depend on the eye).',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Abundance — pair when the inner work is bringing clarity to a field that has been clouded by wanting; Gayatri illuminates first, manifests second.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life have I been asking for outcomes when what I actually need is clear seeing?',
      'Which decision is awaiting the *illumination* — not the reasoning, the illumination — that Gayatri trains?',
      'What would my work look like if I asked, before each task, for the mind to be clarified rather than for the task to be solved?'
    ]
  },
  {
    slug: 'om-namah-shivaya',
    text: 'Om Namah Shivaya',
    translation: 'I bow to the inner Shiva. / I honour the consciousness within.',
    tradition: 'Hindu (Shaivite) — the Pancha-akshara, the five-syllable mantra',
    glyph: '🔱',
    family: 'power',
    position: 9,
    one_liner: 'The five-syllable mantra. The mantra of the inner Shiva. The mantra of surrender to the consciousness that is already you.',
    meaning: 'Om Namah Shivaya is the Pancha-akshara mantra — the *five-syllable* mantra (Na-Ma-Shi-Va-Ya, with Om as the seed) — and the principal mantra of the Shaivite Hindu tradition. The literal translation is *I bow to Shiva*, but the deeper reading is *I bow to the inner consciousness that Shiva represents*: not Shiva-the-deity-out-there, but Shiva-the-witness-within. Each of the five syllables is associated with one of the five elements (Na = earth, Ma = water, Shi = fire, Va = air, Ya = ether) and one of the five koshas (sheaths) of the human being. To chant Om Namah Shivaya is to acknowledge that the consciousness behind the eyes — the witness, the seer — is not separate from the consciousness behind everything. The Shaivite reading is that *Shiva is not someone you worship; Shiva is who you actually are when the layers of identification fall away*.',
    what_it_does: 'Trains the inner-witness. Distinct from Om (which dissolves the boundary between self and field) and from Sat Nam (which returns to truth as identity), Om Namah Shivaya specifically trains the practitioner to *bow* — to the consciousness that is already present, that does not need to be cultivated, that is the substrate from which all cultivation happens. It is the mantra of surrender that is not weakness but recognition.',
    how_to_chant: 'Traditional: 108 repetitions on a rudraksha mala. The mantra has a natural rhythm — *Om-Na-Mah-Shi-Va-Ya* — six syllables that sit comfortably in a single breath. Allow the *Shi* to take a slight emphasis (it is the fire syllable). Sustained chanting of Om Namah Shivaya for 21 days is a traditional purification practice. Modern: any pace, any number, but the practice rewards consistency more than intensity.',
    in_love: 'A relationship in which the partners can recognise the consciousness in each other that is not the personality. The bow that says *I see who you are underneath who you have been*. Reversed: a partnership where the partners are still relating to each other\'s personalities and have not yet met underneath.',
    in_work: 'Work that requires surrender to a process larger than the worker — long-form creative work, contemplative work, healing work, parenting. The mantra of *I am not the doer; I am the witness of the doing*.',
    the_gift: '*The bow inward.* The mantra teaches that the deepest worship is not external but internal — the recognition of the consciousness that is already here.',
    the_shadow: 'Spiritual narcissism. Misreading *I am Shiva* as *therefore I am special* rather than *therefore everyone is*. The mantra is a teaching of universal consciousness; using it to elevate the personal self is the precise opposite of what it teaches.',
    pair_with_chakra: 'Third Eye — Shiva is associated with the third eye (the famous *trinetra*); the mantra activates the witness-consciousness that the third eye represents.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Letting Go — pair when the work is releasing the layers of identification; Om Namah Shivaya is the mantra of dissolution into witness.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Which layer of self-identification is the inner Shiva inviting me to bow before letting go of?',
      'Where in my life have I been performing as the doer when the witness was actually doing the work?',
      'What would my week look like if I treated every interaction as a chance to bow to the consciousness in the other?'
    ]
  },
  {
    slug: 'om-gam-ganapataye-namaha',
    text: 'Om Gam Ganapataye Namaha',
    translation: 'I bow to Ganesha — the remover of obstacles, the lord of beginnings.',
    tradition: 'Hindu — the principal mantra of Ganesha (Ganapati)',
    glyph: '🐘',
    family: 'power',
    position: 10,
    one_liner: 'The mantra of beginnings. Chant before any new project, journey, or undertaking. Ganesha is invoked first because he clears the way.',
    meaning: 'Om Gam Ganapataye Namaha is the principal mantra of Ganesha — the elephant-headed deity of the Hindu tradition who is universally understood as the *remover of obstacles* and the *lord of beginnings*. *Gam* is Ganesha\'s bija (seed) syllable; *Ganapataye* is the dative form of Ganapati, *the lord of the ganas* (the company, the team, the troops); *Namaha* is the salutation, *I bow*. Ganesha is invoked at the start of *every* major Hindu undertaking — weddings, journeys, business openings, surgeries, the start of a new academic year, the writing of a new book — because the tradition recognises that beginnings are sacred, fragile, and need *clearing*. The mantra is read as both a request for obstacles to be removed *and* as a recognition that Ganesha\'s deeper teaching is that obstacles themselves are not enemies — they are gates, and learning to meet them with the right energy is the practice.',
    what_it_does: 'Clears the field for beginnings. The chanting establishes a state of *preparedness* — the practitioner approaches the new undertaking with the energy of fresh-ground, not of carry-over. It is one of the few mantras that has a specifically *practical* function: chant before opening the laptop for a hard piece of writing; chant before the first day of a new job; chant before the difficult conversation that begins the next chapter.',
    how_to_chant: 'Traditional: 108 times at the start of any major undertaking. Modern: 21 times before any meaningful task. The mantra has a natural lift: *Om-Gam-Ga-Na-Pa-Ta-Ye-Na-Ma-Ha* — ten syllables that sit in two breaths comfortably. Allow the *Gam* to take a small emphasis (it is the seed). Chanted on Wednesdays in some traditions; on Tuesdays in others. The day matters less than the consistency.',
    in_love: 'A relationship at a threshold — a new commitment, a move-in, a marriage, a child, a hard conversation that begins the next phase. Ganesha mantra clears the field for that beginning to be met with the right energy.',
    in_work: 'Every meaningful new project. Launching a product, starting a company, opening a studio, taking on a new role, writing the first page. Ganesha is the patron of *beginnings*, and the practice is to honour that beginnings are the most charged moments of any chapter.',
    the_gift: '*The field clears.* The mantra does not magically remove difficulty; it shifts the practitioner\'s relationship to difficulty so that obstacles become collaborators rather than enemies.',
    the_shadow: 'Magical thinking. Treating Om Gam Ganapataye Namaha as a charm to make obstacles disappear rather than as a practice for meeting them well. Ganesha\'s deeper teaching is that the elephant-head is *for* navigating dense forests; the obstacles are part of the path.',
    pair_with_chakra: 'Root — Ganesha sits at the muladhara (root) chakra in tantric anatomy; the mantra of beginnings naturally pairs with the chakra of foundation and grounding.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Abundance — pair when starting any wealth- or work-related new chapter; Ganesha is the patron of *the beginning that lasts*.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'capricorn',
    key_questions: [
      'Which beginning in my current life has not yet been honoured with the right energy of opening?',
      'Which obstacle have I been treating as an enemy that the elephant-head is asking me to recognise as a gate?',
      'What would I begin this week if I trusted that beginnings are sacred and that the field is clearable?'
    ]
  },
  {
    slug: 'hare-krishna',
    text: 'Hare Krishna Hare Krishna · Krishna Krishna Hare Hare · Hare Rama Hare Rama · Rama Rama Hare Hare',
    translation: 'O divine energy, O all-attractive one, O joy-bringer — please engage me in your service.',
    tradition: 'Hindu (Vaishnavite, Gaudiya) — the Maha Mantra, popularised in the West by ISKCON',
    glyph: '🪈',
    family: 'power',
    position: 11,
    one_liner: 'The Great Mantra. Sixteen names of God in two breaths. The mantra that turns into ecstatic chant when it meets the right tempo.',
    meaning: 'The Hare Krishna mantra (formally the *Maha Mantra*, the *great mantra*) is a sixteen-word chant that consists of three names of the divine — *Hare* (the divine feminine energy, *Radha*), *Krishna* (the all-attractive form of the divine), *Rama* (the joy-bringer, the form of the divine that delights). The Maha Mantra appears in the Kali-Santarana Upanishad as the antidote to the difficulties of the present age (the *Kali Yuga*); it was popularised globally in the 20th century by A.C. Bhaktivedanta Swami Prabhupada and the International Society for Krishna Consciousness (ISKCON), and famously brought into Western culture by George Harrison\'s 1969 *Hare Krishna Mantra* recording. Beyond ISKCON, the mantra belongs to the broader Vaishnavite-bhakti tradition — devotional chanting (*kirtan*) is one of the oldest and most-practised paths to the divine in dharmic traditions, and Hare Krishna is its most-recited mantra.',
    what_it_does: 'Cultivates *bhakti* — devotional love. Distinct from the contemplative or insight-oriented mantras, Hare Krishna is unabashedly *devotional* — its job is to soften the heart, to engage the practitioner emotionally with the divine, to produce the joyful tears that the bhakti tradition recognises as a sign of inner softening. Sustained group kirtan with this mantra reliably produces ecstatic states (the rhythmic repetition, the call-and-response, the slow build of tempo). It is the mantra of *the loved heart*.',
    how_to_chant: 'Two paths. (1) *Japa* — quiet repetition on a mala, 16 rounds of 108 traditionally (a *full japa* — about two hours), or any number that feels right; the practice is private and contemplative. (2) *Kirtan* — group call-and-response chant, with harmonium and tabla, building tempo over 30-60 minutes from slow to ecstatic. The Maha Mantra is the most-chanted mantra in kirtan globally. Beginners: start with japa; allow kirtan to find you.',
    in_love: 'A relationship in which devotion is being practised — not as performance, but as the real labour of softening the heart toward the partner without expectation. The Maha Mantra is the mantra of *I love you for the sake of love itself*.',
    in_work: 'Work that requires the heart to be open in public — performance, teaching, hospitality, healing, any work where the worker\'s capacity to remain devoted to people they cannot control is the actual product.',
    the_gift: '*The heart softens.* The mantra trains the practitioner to remain in love with the world even when the world has not made that easy.',
    the_shadow: 'Cultic externalisation. The mantra, in some 20th-century groups, became coupled with rigid institutional practice that obscured its actual gift. The mantra itself is older than any of those institutions and belongs to anyone who chants it. Recover the mantra from the costume.',
    pair_with_chakra: 'Heart — the Maha Mantra is the heart-chakra mantra of the bhakti path; its work is the softening of the heart toward the divine and toward the world.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — pair when the inner work is opening to receiving; bhakti devotion makes the practitioner *receivable* to the larger field.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'cancer',
    key_questions: [
      'Where in my life has the devotional muscle gone slack from disuse?',
      'Which person, place, or practice is asking me to love without expecting a return?',
      'What would my week feel like if I let myself sing — out loud, off-key, in the kitchen — to something larger than myself?'
    ]
  },
  {
    slug: 'om-ah-hum',
    text: 'Om Ah Hum',
    translation: 'Body. Speech. Mind. (The three doors purified.)',
    tradition: 'Tibetan Buddhist (Vajrayana) — the foundational three-syllable mantra',
    glyph: '☸️',
    family: 'power',
    position: 12,
    one_liner: 'The three-syllable mantra. Body, speech, mind — purified in three breaths. The mantra you can chant in any moment, anywhere.',
    meaning: 'Om Ah Hum is the foundational three-syllable mantra of Tibetan Vajrayana Buddhism. Each syllable corresponds to one of the *three doors* through which the practitioner meets the world — *Om* is body (*kaya*), *Ah* is speech (*vak*), *Hum* is mind (*chitta*). To chant Om Ah Hum is to offer all three doors to the awakening process: *may my body be a vehicle of awakening; may my speech be a vehicle of awakening; may my mind be a vehicle of awakening*. The mantra is unusually compact — three syllables, three breaths, complete in less than ten seconds — which makes it the *portable* mantra of the Tibetan path: it can be chanted in any moment, at any threshold, between any two activities. Padmasambhava, the founder of Tibetan Buddhism, is said to have given Om Ah Hum as the practice that integrates the entire path into a form short enough to be carried through every breath of the day.',
    what_it_does: 'Integrates the practice into ordinary life. Where most mantras require a designated practice slot, Om Ah Hum is designed to be threaded through the day — chanted between meetings, before meals, at the threshold between activities, on a walk, at a stoplight. The three syllables train the practitioner to keep all three doors (body, speech, mind) aligned with the awakening intention rather than allowing them to drift into autopilot.',
    how_to_chant: 'Three breaths. Long *Om* (felt in the head, vibrating in the skull), long *Ah* (felt in the throat and chest, mouth open), long *Hum* (felt in the belly, lips closed, low and humming). One breath per syllable. A complete round takes about 12 seconds. Eleven rounds is a complete portable practice. Chant aloud when alone; chant silently when in public. Both work — the inner version produces the same nervous-system effect as the outer.',
    in_love: 'A relationship in which the practitioner is committed to keeping body, speech, and mind aligned — not performing one thing physically while saying another verbally while thinking a third thing internally. Om Ah Hum is the mantra of *integrity across the three doors*.',
    in_work: 'Work that requires sustained alignment between what the practitioner thinks, says, and does. Teaching, leadership, parenting, therapy, journalism, any work where misalignment between the three doors is the precise way the work fails.',
    the_gift: '*Three doors aligned.* The mantra trains the practitioner so that body, speech, and mind stop telling different stories.',
    the_shadow: 'Mantra-as-shortcut. Chanting Om Ah Hum at the threshold of every activity without ever doing the deeper work that actually aligns the three doors. The mantra is a *reminder*; the alignment is still the practitioner\'s job.',
    pair_with_chakra: 'Heart — the heart is the integrating chakra of the three doors; body (root + sacral), speech (throat), mind (third eye + crown) are bridged in the heart.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair as the closing of any practice that has worked across body-speech-mind; Om Ah Hum is the seal of integration.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'gemini',
    key_questions: [
      'Of the three doors — body, speech, mind — which one is currently telling a different story than the other two?',
      'Where in my day would Om Ah Hum, threaded through the threshold moments, change the texture of the day?',
      'Which alignment between thinking, speaking, and doing am I postponing that the mantra is asking me to attend to?'
    ]
  }
]

const MANTRA_BY_SLUG: Record<string, MantraGuide> = Object.fromEntries(MANTRAS.map((m) => [m.slug, m]))

export const MANTRA_SLUGS = MANTRAS.map((m) => m.slug)

export function isMantraSlug(s: string): boolean {
  return s in MANTRA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: seed (om, so-hum, sat-nam) = indigo — the
// bija/seed family; heart (mani-padme-hum, lokah, tara, shanti) = rose
// — the compassion family; power (gayatri, shiva, ganesha, krishna,
// ah-hum) = saffron — the devotion family.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  seed: { c1: '#6864b8', c2: '#2e2a82', label: 'Seed mantras · the bija family — the foundation' },
  heart: { c1: '#d68aa0', c2: '#a04a64', label: 'Heart mantras · the compassion family' },
  power: { c1: '#d4a64a', c2: '#8a5818', label: 'Power mantras · the devotion family' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function mantraPageHTML(slug: string): string {
  const r = MANTRA_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=mantra-${slug}`

  const title = `${escapeHtml(r.text)} — Meaning, Translation &amp; How to Chant · gab44 ✨`
  const description = `What ${r.text} actually means, where it comes from, what the mantra does, how to chant it, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac. Hand-written, warm, honest about the lineage.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Mantras', item: `${SITE_URL}/gab44/mantras` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/mantras/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — meaning, translation & how to chant`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/mantras/${slug}`,
        about: `${r.text} mantra, ${r.tradition}, sacred chant, sound healing`
      }
    ]
  })

  const otherMantrasHtml = MANTRAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/mantras/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text.split(' ').slice(0, 3).join(' '))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mantras/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} — meaning & how to chant`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/mantras/${slug}" />
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
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
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
  .other-mantras { margin: 36px 0 22px; }
  .other-mantras h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .mantras-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 700px) { .mantras-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/mantras">all 12 mantras</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/solfeggio">solfeggio</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Mantras</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>mantra ${r.position} of 12</span>
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

    <h2><span class="icon">🎧</span>what it does</h2>
    <div class="signs-card">
      <h3>the work this mantra carries</h3>
      <p>${escapeHtml(r.what_it_does)}</p>
    </div>

    <h2><span class="icon">📿</span>how to chant</h2>
    <div class="panel where">
      <h3>concrete practice — traditional + modern</h3>
      <p>${escapeHtml(r.how_to_chant)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this mantra teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the mantra becomes a costume</h3>
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
      <a class="pair-card" href="/healing/script/${r.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_sound)}</div>
      </a>
      <a class="pair-card" href="/gab44/${r.pair_with_sign}/about">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(r.pair_with_sign)}</div>
        <div class="pair-text">Sign whose energy aligns with this mantra.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after chanting</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which mantra *your* chart is asking for?</h2>
      <p>Each chart has a primary mantra — the one your particular wiring has been waiting to hear. A <strong>personal reading</strong> identifies it and tells you the chakra, the practice, and the rhythm that will make the mantra land in your body. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my mantra read →</a>
    </section>

    <section class="other-mantras">
      <h3>the other 11 mantras</h3>
      <div class="mantras-grid">
        ${otherMantrasHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/mantras">all 12 mantras</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function mantraIndexHTML(): string {
  const familySections = (['seed', 'heart', 'power'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = MANTRAS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/mantras/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/12</span>
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
    name: 'The 12 Mantras — Meanings, Translations & How to Chant',
    description: 'Hand-written guides to the 12 most-recited mantras across yogic, hindu, buddhist, and devotional traditions. Each page covers meaning, translation, what the mantra does, how to chant it, the gift and the shadow.',
    url: `${SITE_URL}/gab44/mantras`,
    hasPart: MANTRAS.map((m) => ({
      '@type': 'Article',
      name: m.text,
      url: `${SITE_URL}/gab44/mantras/${m.slug}`,
      about: m.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 12 Mantras — Meanings, Translations &amp; How to Chant · gab44 ✨</title>
<meta name="description" content="The 12 most-chanted mantras (Om, So Hum, Sat Nam, Om Mani Padme Hum, Lokah Samastah, Tara, Shanti, Gayatri, Om Namah Shivaya, Ganesha, Hare Krishna, Om Ah Hum) — what each mantra actually means, the tradition it comes from, what it does, how to chant it. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/mantras" />
<meta property="og:title" content="The 12 Mantras — Meanings &amp; How to Chant · gab44" />
<meta property="og:description" content="From Om (the seed of all sound) to Om Ah Hum (body, speech, mind) — what each mantra carries, hand-written, honest about lineage." />
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
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/solfeggio">solfeggio</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 <span class="accent">Mantras</span> — meanings, translations &amp; how to chant</h1>
    <p class="sub">Hand-written guides to the most-recited mantras in living tradition. From Om (the seed of all sound) to Om Ah Hum (body-speech-mind purification). Each page has the actual lineage, the practice, the gift, the shadow.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right mantra for your moment?</strong> Click any of the 12 below. Every page has the actual *meaning* (the tradition and the translation), what the mantra *does*, *how to chant it* (concrete practice — pace, posture, count), what it means in love and in work, the *gift* it teaches, the *shadow* (mantra-as-decoration is named where relevant), and pair-with cards for chakra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The 12 mantras cluster naturally. <em>Seed</em> (Om, So Hum, Sat Nam) is the bija family — the foundational sounds the breath and consciousness make. <em>Heart</em> (Om Mani Padme Hum, Lokah Samastah, Tara, Shanti) is the compassion family — the practice of widening the heart. <em>Power</em> (Gayatri, Om Namah Shivaya, Ganesha, Hare Krishna, Om Ah Hum) is the devotion family — alignment to a specific awakened-form for help, beginnings, illumination, surrender, integration.</p>
      <p><strong>Mantras are gifts from living traditions.</strong> Each page names the lineage, the source text where possible, and where the mantra has been culturally restricted. Reclaim the mantra by chanting it; treat the lineage with respect; allow the practice to land in the body before treating it as decoration.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which mantra your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary mantra — the one your particular wiring has been waiting to hear. A $9 reading identifies it. <a href="/gab44/reading?ref=mantras-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 12 mantras · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
