// Solfeggio Frequencies — SEO funnel — /gab44/solfeggio (index) +
// /gab44/solfeggio/{slug}. 9 hand-written frequency guides — 174-hz,
// 285-hz, 396-hz, 417-hz, 528-hz, 639-hz, 741-hz, 852-hz, 963-hz.
// Distinct keyword cluster — extremely high TikTok and YouTube volume:
// "528 hz love frequency", "solfeggio frequencies meaning", "396 hz
// release fear", "639 hz heart chakra". Six of nine map one-to-one
// onto the chakras (396=root, 417=sacral, 528=solar-plexus, 639=heart,
// 741=throat, 852=third-eye), 963=crown — making this the *perfect*
// bridge between Phase 1A healing audio and Phase 1D $9 reading.
//
// Each guide is ~600 words across 9 sections (history + the claim,
// what it actually does, where it appears, in love, in work, the
// gift, the shadow / the science, pair-with chakra/sound/zodiac, 3
// key questions). Family-tinted gradient: foundation (174, 285) =
// teal — the body's groundwork; activation (396, 417, 528) = gold
// — the personal-power frequencies; expansion (639, 741, 852, 963)
// = violet — the upward channel. Cross-funnels into BOTH revenue
// lanes — every frequency links to /gab44/chakras/{slug} (gab44
// internal), /healing/script/{slug} (Phase 1A audio), AND /gab44/
// reading?ref=solfeggio-{slug} ($9 Phase 1D). Schema.org Article +
// BreadcrumbList JSON-LD. Routes registered BEFORE /gab44/:sign.

import { SITE_URL } from '@/lib/identity'

export interface SolfeggioGuide {
  slug: string
  hz: number
  name: string
  glyph: string
  family: 'foundation' | 'activation' | 'expansion'
  position: number
  one_liner: string
  meaning: string
  what_it_does: string
  where_found: string
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

export const SOLFEGGIOS: SolfeggioGuide[] = [
  {
    slug: '174-hz',
    hz: 174,
    name: '174 Hz · Foundation',
    glyph: '🪨',
    family: 'foundation',
    position: 1,
    one_liner: 'The lowest of the nine. A deep, almost sub-bass tone associated with relieving pain and giving the nervous system the message that it is safe to settle.',
    meaning: '174 Hz is the bottom of the Solfeggio ladder — a frequency so low that on most speakers it is felt more than heard. The traditional claim, drawn from the modern Solfeggio revival, is that this tone speaks directly to the body\'s pain receptors and the autonomic nervous system, signalling *safety*. It is the frequency many sound healers begin a session with — not because it does the deep work but because it tells the body it is allowed to relax enough for the deep work to begin. The number is read by some practitioners as derived from the original mediaeval Solfeggio hymn (the Ut queant laxis) — though the historical evidence for that claim is contested, the *experience* of the tone is reproducible: most listeners report a softening of the body within thirty seconds.',
    what_it_does: 'Reduces perceived pain (research is preliminary but consistent — lower-frequency sound has measurable analgesic effects on the autonomic nervous system). Slows the breath. Lowers shoulder tension. Gives the body permission to release the bracing patterns it has been holding without realising. As the *foundation* tone, it is the one to play before any other healing frequency, because the others cannot do their work in a body that is still bracing.',
    where_found: 'Modern sound-bath practice (almost every sound healer opens with 174 Hz). Spotify and YouTube collections under "Solfeggio" or "frequency healing". Therapeutic massage backgrounds. Birth and death-doula practices, where the tone is used to settle the body for big transitions.',
    in_love: 'A relationship that has stopped bracing — where the nervous system around the partner has gone from alert to settled. Reversed: a partnership where one or both nervous systems are still running on threat-detection; nothing else can heal until 174 Hz has done its work.',
    in_work: 'The first ten minutes of any creative session. The transition from outer-world to inner-work. Anywhere the question is *why can\'t I focus?* and the answer is *because the body has not been told it is safe yet.*',
    the_gift: '*Permission to settle.* The frequency is not magic; it is a signal. Low, consistent, undemanding. The body responds to it the way it responds to a long exhale — by choosing it.',
    the_shadow: 'Stopping at 174. People who use the foundation frequency to numb out instead of to settle into work. The tone is meant to *prepare* the field, not be the work itself.',
    pair_with_chakra: 'Root — the body\'s foundation, the centre of safety, the literal thing 174 Hz is asking to ground.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing — pair when settling the body before deeper work; 174 Hz is the doorway frequency.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'taurus',
    key_questions: [
      'Where in my body am I bracing right now without having noticed?',
      'What am I trying to heal *without* first telling the body it is safe?',
      'Which exhale am I refusing to let myself take?'
    ]
  },
  {
    slug: '285-hz',
    hz: 285,
    name: '285 Hz · Tissue',
    glyph: '🩹',
    family: 'foundation',
    position: 2,
    one_liner: 'A low frequency associated with cellular repair and tissue regeneration. Played in clinics, sound baths, and recovery rooms — the message it carries is *re-form*.',
    meaning: '285 Hz sits just above 174 in the Solfeggio ladder — still low, still felt-more-than-heard on most speakers. The traditional claim is that this tone speaks to the body at the level of the cell, signalling repair, regeneration, and the re-organisation of damaged tissue. Cymatics experiments (water-on-plate vibration patterns) consistently show that 285 Hz produces highly ordered geometric patterns — which is read by sound-healers as evidence that the tone *organises*, that it brings disordered systems back to coherent shape. Whether the cellular claim is metaphor or measurable, the experience is reproducible: people recovering from injury, surgery, or illness report deeper sleep and faster perceived recovery when 285 Hz is played in the background of their rest.',
    what_it_does: 'Used adjunct to recovery from surgery, injury, and illness — the body settles into sleep more quickly, which is when actual cellular repair happens. Plays well in the background of any rest or healing context. Sometimes called the *blueprint frequency* because the geometric patterns it generates in cymatics resemble cellular organisation.',
    where_found: 'Hospital recovery rooms (a small but growing number of integrative-medicine programs). Sound-bath sessions focused on physical recovery. Acupuncture and massage backgrounds. Late-night YouTube tracks for sleep and healing.',
    in_love: 'A relationship recovering from injury — physical, emotional, or relational. The tone of repair: not denying the wound, just creating the conditions where rebuilding can happen. Reversed: rushing past the rebuilding phase and pretending the injury never happened.',
    in_work: 'Recovery from burnout. The first three months after a difficult chapter ends. Anywhere the body is doing the slow work of re-knitting and the mind keeps demanding speed.',
    the_gift: '*Order returns.* Play 285 Hz in the background of rest and watch the body do what it knows how to do. The frequency does not heal; it gives healing room.',
    the_shadow: 'Outsourcing the work. Buying a 285 Hz playlist and assuming the frequency is doing the healing while the lifestyle that caused the wound continues unchanged.',
    pair_with_chakra: 'Root — the foundation chakra, the seat of physical body and survival; 285 Hz is the body-recovery frequency.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Sleep — pair when rest is the work; tissue repair happens in deep sleep, not in willpower.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'virgo',
    key_questions: [
      'What in my body or my life is in the slow work of re-knitting right now?',
      'Where am I demanding speed from a process that is asking for time?',
      'What conditions does my healing actually need that I have not been giving it?'
    ]
  },
  {
    slug: '396-hz',
    hz: 396,
    name: '396 Hz · Liberation',
    glyph: '🔓',
    family: 'activation',
    position: 3,
    one_liner: 'The frequency of releasing fear and guilt. The first of the six classical Solfeggio tones — the one mediaeval monks chanted to ask for the courage to face their own shadow.',
    meaning: '396 Hz is the lowest of the six tones in the original Solfeggio hymn (Ut queant laxis), the syllable *Ut* — later renamed *Do* and then dropped from the modern scale. Mediaeval Gregorian chant used these six tones for psalmody; the modern revival, drawing on the work of Joseph Puleo and others in the 1970s and 1990s, recovered the frequencies and assigned each to a layer of psyche-work. 396 Hz is read as the *liberation* frequency — the one that meets the parts of the self still running on fear, guilt, and inherited shame, and provides a sound-bath in which those layers can dissolve. Practitioners who use it report that it is not a *peaceful* frequency in the conventional sense; rather, it tends to bring up what has been buried, so it can be released. Liberation is not the same as comfort.',
    what_it_does: 'Surfaces buried fear and guilt for release. Often used at the start of shadow-work meditations and inherited-trauma sessions. People who play this frequency report old material coming up unexpectedly — a memory, a shame they thought was processed, a fear about a parent or a partner that hadn\'t been articulated. The tone is a permission slip: what was being held silently can now be voiced.',
    where_found: 'Shadow-work meditation playlists. Sound-healing sessions focused on releasing inherited trauma. Yoga teacher trainings (especially those informed by tantric or Kundalini lineages). Therapy adjuncts in some integrative-psychology practices.',
    in_love: 'A relationship willing to surface the buried fears each partner brought from their family-of-origin. Reversed: relationships that maintain peace by refusing to look at what is buried; the buried thing eventually drives every conflict the surface explanation cannot account for.',
    in_work: 'Creative practice. Therapy. Spiritual direction. Writing. Anywhere the gift requires meeting and releasing the part of the self that learned to be small.',
    the_gift: '*Buried things become movable.* What you cannot name cannot be released. 396 Hz is the frequency that helps name.',
    the_shadow: 'Liberation as identity. People who use the frequency to constantly surface material without ever integrating it — recovery as a permanent state instead of a passage.',
    pair_with_chakra: 'Root — the seat of survival fear; 396 Hz is the literal liberation frequency for the root chakra.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — pair when releasing what was buried; this frequency makes the buried movable.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What fear or guilt have I been holding silently because I have not yet been allowed to name it?',
      'Whose shame did I inherit that was never mine to carry?',
      'What would my life look like if the buried thing were finally released?'
    ]
  },
  {
    slug: '417-hz',
    hz: 417,
    name: '417 Hz · Change',
    glyph: '🔄',
    family: 'activation',
    position: 4,
    one_liner: 'The frequency of facilitating change and undoing situations. The second classical Solfeggio tone — the one for the moments when the old pattern has to break before the new can begin.',
    meaning: '417 Hz is the second tone in the Solfeggio sequence — the syllable *Re*. In the modern Solfeggio framework, it is read as the *change* frequency: the tone that helps a person move from a situation that is no longer working to one that can. The traditional claim is that 417 Hz vibrates at a rate that breaks crystallised energy patterns — old habits, recurring relational dynamics, stuck mindsets — by introducing a frequency these patterns cannot maintain coherence with. The experience for listeners is often *uncomfortable before it is liberating* — because change frequencies do not just dissolve the bad patterns; they dissolve any pattern, including the comfortable ones, that has crystallised past its usefulness. This is the tone for the threshold.',
    what_it_does: 'Loosens stuck patterns — habits of thought, relational scripts, repeated self-sabotage. Often used in transition meditations and life-change rituals. People play it in the background of major decisions: leaving a job, ending a relationship, beginning a new chapter. The tone does not make the change easier; it makes the *old pattern less maintainable*, which forces the change to happen.',
    where_found: 'Life-coaching meditation playlists. Yoga sessions focused on transition and release. Sound-bath sessions during life-passage rituals. Reiki practitioners who specialise in clearing old energetic patterns.',
    in_love: 'A relationship at a threshold — the moment before a change either reorganises the bond or ends it. 417 Hz is the frequency of *what cannot continue as it has been*. Reversed: trying to use the frequency to *force* a partner into a change they have not chosen; the tone loosens, but it does not coerce.',
    in_work: 'The week before a difficult decision. The morning of a hard conversation. Any moment where staying-the-same is no longer an option.',
    the_gift: '*The old pattern becomes loose enough to move.* Crystallised does not mean fixed; it means *holding shape until the right frequency is introduced.*',
    the_shadow: 'Change-addiction. Using 417 Hz to constantly destabilise without ever letting a new pattern stabilise. Liberation requires both the loosening *and* the reorganisation; the frequency is the loosening.',
    pair_with_chakra: 'Sacral — the seat of change, creativity, and emotional flow; 417 Hz is the sacral chakra\'s movement frequency.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair at thresholds; the frequency loosens, the practice releases.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What pattern in my life has crystallised past its usefulness?',
      'Where am I holding the shape of who I used to be when the new shape is asking to come through?',
      'What change have I been delaying because the old pattern still feels safer?'
    ]
  },
  {
    slug: '528-hz',
    hz: 528,
    name: '528 Hz · Love',
    glyph: '💚',
    family: 'activation',
    position: 5,
    one_liner: 'The most famous Solfeggio frequency. The "love frequency", the "DNA repair frequency", the "miracle tone" — claims range from poetic to hyperbolic, but the cultural reach is undeniable.',
    meaning: '528 Hz is the third Solfeggio tone — the syllable *Mi*, traditionally translated *Mira gestorum*, "miracle". Of the nine, this is the one that has spilled out of the sound-healing world and into mainstream culture: the "528 Hz love frequency" appears in pop songs, meditation apps, mainstream YouTube. The traditional claim is that this tone repairs DNA — a claim that is poetically beautiful and scientifically unsupported in its strict form, but that points at something real: 528 Hz consistently produces highly ordered, mandala-like patterns in cymatics, which sound healers read as evidence of *coherence-induction* — the bringing of disordered systems back to ordered shape. Whether DNA-level or psyche-level, the experience is reproducible: people who listen to 528 Hz regularly report a softening of self-judgement, an opening of the heart, and a sense of being *loved* — by themselves, by life, by something.',
    what_it_does: 'Heart-opening. Reduces self-judgement. Used in compassion meditation, self-love practice, forgiveness work. The "miracle frequency" is named that because of the experience, not the mechanism — listeners often describe a quality of *receiving* love that they had not been allowing themselves to feel.',
    where_found: 'Mainstream meditation apps (Calm, Insight Timer). YouTube — search 528 Hz and find five thousand tracks. Yoga studios. Music therapy. Some hospitals\' integrative-medicine programs. Pop music (artists from Snatam Kaur to mainstream songwriters have built tracks around 528 Hz).',
    in_love: 'The frequency of self-love and partner-love simultaneously — because the latter is built on the former. A relationship where 528 Hz is in the air is one where both partners are softening their self-criticism. Reversed: trying to receive love from a partner without first allowing 528 Hz to do its work on your own self-rejection.',
    in_work: 'Compassion-based work, healing professions, parenting, mentorship, art that asks the artist to be moved. Anywhere the work cannot proceed without an open heart.',
    the_gift: '*Coherence.* Whether at the DNA level (poetic claim) or the psyche level (reproducible experience), the frequency invites the listener back to wholeness. The body recognises it as *the right rate*.',
    the_shadow: 'Frequency-shopping. Treating 528 Hz as the frequency that will fix everything, instead of as one tool among many. Love-without-discernment is not love; it is bypassing.',
    pair_with_chakra: 'Solar plexus — the seat of self-love and worth; 528 Hz is the chakra\'s coherence frequency. Some traditions also map this to the heart.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — pair when claiming worth; the frequency is the love-of-self that lets abundance be received.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life have I been refusing to let myself be loved — by myself, by my people, by life?',
      'What does coherence actually feel like in my body, and when did I last feel it?',
      'What miracle have I been demanding be supplied externally that the frequency is asking me to extend internally?'
    ]
  },
  {
    slug: '639-hz',
    hz: 639,
    name: '639 Hz · Connection',
    glyph: '🫂',
    family: 'expansion',
    position: 6,
    one_liner: 'The relationship frequency. The fourth Solfeggio tone — the one for repairing bonds, opening communication, and re-tuning the connections between you and the people you love.',
    meaning: '639 Hz is the fourth Solfeggio tone — the syllable *Fa*, traditionally translated *Famuli tuorum*, "your servants". In the modern revival, it is read as the *connection* frequency — the tone for relationships, for reconciliation, for the work of bringing two harmonic patterns back into resonance with each other. Where 528 Hz works on the relationship between you and yourself, 639 Hz works on the relationships between you and others — partner, family, friends, the relational field. The traditional claim is that this tone *re-attunes* — that it brings two nervous systems that have fallen out of sync back into a state where they can hear each other again. Sound healers play 639 Hz in couples\' sessions, in family-of-origin work, in the difficult conversations a community needs but is not yet ready to have.',
    what_it_does: 'Re-attunes relationships. Used in couples\' meditation, family-constellation work, community healing. Often combined with intention-setting around a specific person or relationship. Listeners describe a sense of *being able to hear* — both literally and emotionally — what the other person has been saying that they had not been receiving.',
    where_found: 'Couples\' therapy adjuncts. Family-systems work. Community-mediation sound baths. Mainstream meditation tracks tagged "relationship healing" or "heart chakra".',
    in_love: 'The literal frequency of the heart chakra. A relationship willing to do its re-attuning work — both partners listening to each other for what they actually mean, not what each was already prepared to hear. Reversed: relationships that cannot hold 639 Hz because one or both partners are committed to misunderstanding.',
    in_work: 'Team facilitation. Difficult conversations. Mediation. Anywhere the work is to bring two parties back into resonance with each other.',
    the_gift: '*Re-tuning is possible.* The frequency carries the message that connection is not lost; it is fallen-out-of-sync. Sync is recoverable.',
    the_shadow: 'Forced reconciliation. Using the frequency to push for re-connection that one or both parties have not consented to. Re-attunement is offered, not imposed.',
    pair_with_chakra: 'Heart — the centre of connection, the literal seat of relational coherence.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair when releasing the version of the relationship that has stopped serving; re-attunement requires that the old shape loosens first.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'libra',
    key_questions: [
      'Which relationship in my life is asking to be re-tuned, not ended?',
      'Where have I been mishearing someone because I was committed to a particular interpretation?',
      'What conversation have I been postponing that the heart is ready for?'
    ]
  },
  {
    slug: '741-hz',
    hz: 741,
    name: '741 Hz · Expression',
    glyph: '🎙️',
    family: 'expansion',
    position: 7,
    one_liner: 'The frequency of self-expression and finding solutions. The fifth Solfeggio tone — the one for the throat chakra, for the voice that has been swallowed, for the truth that has been waiting to be spoken.',
    meaning: '741 Hz is the fifth Solfeggio tone — the syllable *Sol*, traditionally translated *Solve polluti*, "purify the unclean". In the modern framework, it is read as the *expression* frequency, the *cleansing* frequency, the *find-the-solution* frequency. It corresponds to the throat chakra, and the work it carries is the work of voice: speaking the unsaid, naming the unnamed, finding language for what has been wordless. Sound healers play it during journaling sessions, during creative breakthroughs, during moments where a person is on the edge of a truth they have been circling for years. The traditional claim is that this tone purifies the energetic body of toxins; the lived experience is that it loosens the throat — and what comes out, comes out.',
    what_it_does: 'Loosens the throat for expression. Used in creative practice, journaling, song-writing, public speaking preparation, and any work where the question is *what am I trying to say that I have not yet said?*. Also used as a clarity frequency — when a problem has been circling without resolution, 741 Hz often surfaces the missing piece.',
    where_found: 'Voice-work and singing-bowl studios. Songwriter workshops. Therapy adjuncts focused on expression. Late-night creative sessions on YouTube.',
    in_love: 'A relationship where both partners are practising saying what they actually mean. Reversed: a partnership where one or both partners have been swallowing their truth so long that the throat is in actual physical distress.',
    in_work: 'Writing. Public speaking. Teaching. Therapy. Any work where the value is in the clarity and courage of what is said.',
    the_gift: '*Voice returns.* The throat that has been swallowing remembers it has language.',
    the_shadow: 'Unfiltered expression. The frequency loosens; what comes out still has to be discerned. Liberation of voice without responsibility for what is said is not maturity; it is mess.',
    pair_with_chakra: 'Throat — the literal seat of expression; 741 Hz is the throat chakra\'s frequency.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — pair when finding the words for what has been unsaid; voice and release move together.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'gemini',
    key_questions: [
      'What truth have I been swallowing for so long that I have stopped noticing?',
      'Which problem in my life is asking for a solution that requires me to speak something difficult first?',
      'Whose voice would I sound like if I stopped editing myself?'
    ]
  },
  {
    slug: '852-hz',
    hz: 852,
    name: '852 Hz · Awakening',
    glyph: '👁️',
    family: 'expansion',
    position: 8,
    one_liner: 'The frequency of returning to spiritual order. The sixth Solfeggio tone — the third-eye frequency, the one for the moment when the inner sight remembers what it has been refusing to see.',
    meaning: '852 Hz is the sixth Solfeggio tone — the syllable *La*, traditionally translated *Labii reatum*, "the guilt of the lips". In the modern revival, it is read as the *awakening* frequency, the *return-to-spiritual-order* frequency, the tone for the third eye. Where the lower frequencies do the work of clearing and opening, 852 Hz does the work of *seeing* — bringing into conscious awareness the patterns and the truths the inner eye has been registering but not articulating. The traditional claim is that this tone heightens intuition and dissolves illusions; the lived experience is that listeners often have *a-ha* moments mid-meditation, recognise patterns in their lives that had been invisible, or feel a kind of *clear seeing* that does not feel mystical so much as *cognitive at a deeper register*.',
    what_it_does: 'Awakens intuition. Surfaces patterns the conscious mind has been refusing to integrate. Used in vision-quest meditation, dream-work, psychic-development practice, and the kind of strategic thinking where the question is *what am I seeing that I have not been letting myself see?*. Often experienced as the moment when a long-held pattern in one\'s life suddenly becomes visible.',
    where_found: 'Third-eye-focused meditation playlists. Psychic-development training. Lucid-dreaming practices. Some shamanic-journey sound-bath sessions.',
    in_love: 'Seeing your partner as they actually are — not as the projection you have been maintaining of them. Reversed: a relationship that cannot bear 852 Hz because the projection is doing too much work.',
    in_work: 'Strategy. Pattern-recognition. The work of seeing the *whole* picture, not just the parts you have been focused on. Anywhere the question is *what am I missing?*.',
    the_gift: '*Inner sight clarifies.* The third eye is not psychic in the dramatic sense; it is the centre that sees patterns the conscious mind processes too slowly to catch.',
    the_shadow: 'Spiritual bypassing dressed as awakening. Using the frequency to *transcend* situations that need engagement, not transcendence. Awakening means seeing more, not seeing less.',
    pair_with_chakra: 'Third eye — the literal seat of pattern-recognition; 852 Hz is the third-eye chakra\'s frequency.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — pair when the seeing is too much; the third eye opens, the body needs grounding.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'pisces',
    key_questions: [
      'What pattern in my life have I been seeing without articulating?',
      'Whose projection of me have I been confirming because I had not yet seen myself clearly?',
      'What awakening have I been refusing because I am not yet ready to act on what it would show me?'
    ]
  },
  {
    slug: '963-hz',
    hz: 963,
    name: '963 Hz · Unity',
    glyph: '☉',
    family: 'expansion',
    position: 9,
    one_liner: 'The highest of the Solfeggio frequencies. The crown chakra tone. The frequency of unity, of returning to source, of remembering that you are not separate from what you have been seeking.',
    meaning: '963 Hz is the highest of the nine Solfeggio frequencies — beyond the original six chants, but added in the modern revival to complete the octave-and-a-half framework that maps onto the seven chakras plus two foundation tones. It is the *crown chakra* frequency, the *unity consciousness* tone, the *return to source*. In the modern Solfeggio framework, this is read as the frequency that dissolves the sense of separation between the self and the larger field — between you and what you have been calling God, source, the universe, life, or simply the rest of existence. The traditional claim is that this tone reactivates the pineal gland; the lived experience is that listeners often report a softening of the boundary between self and not-self, a quality of *coming home* that is not an achievement but a remembering.',
    what_it_does: 'Dissolves the sense of separation. Used in deep meditation, contemplative prayer, samadhi practice, and any work whose endpoint is unity-consciousness. Often experienced as a quality of *not-aloneness* — the recognition that what you have been calling *me* is part of a larger pattern.',
    where_found: 'Deep-meditation playlists. Contemplative prayer practices (Christian, Sufi, Buddhist, secular). Cosmic-consciousness sound baths. The end of long sound-healing journeys, where the practitioner returns the listener to the larger field.',
    in_love: 'A relationship that has crossed the threshold from *we are two who love each other* to *we are part of one thing that is loving itself through us*. Reversed: chasing 963 Hz consciousness while the actual relationship is starved of the lower frequencies\' work.',
    in_work: 'Contemplative practice. Long-term spiritual direction. The integration phase of any deep healing journey. The end of a chapter where the question is no longer *what do I do?* but *how do I now live what I have been given?*.',
    the_gift: '*Separation dissolves.* The frequency does not give you something you did not have; it lets the boundary that hides what you already are become permeable.',
    the_shadow: 'Spiritual elitism. Using 963 Hz consciousness to feel *above* the lower frequencies\' work. Unity that has not been earned by the lower work is not unity; it is dissociation with a spiritual costume.',
    pair_with_chakra: 'Crown — the literal seat of unity-consciousness; 963 Hz is the crown chakra\'s frequency.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — pair as the closing of any deep-work session; 963 Hz returns the practitioner to the larger field.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'Where in my life have I been treating myself as separate from a field I am clearly part of?',
      'What have I been seeking outside myself that 963 Hz is asking me to recognise was already inside?',
      'What does unity-consciousness ask of me that bliss-states alone cannot deliver?'
    ]
  }
]

const SOLFEGGIO_BY_SLUG: Record<string, SolfeggioGuide> = Object.fromEntries(SOLFEGGIOS.map((s) => [s.slug, s]))

export const SOLFEGGIO_SLUGS = SOLFEGGIOS.map((s) => s.slug)

export function isSolfeggioSlug(s: string): boolean {
  return s in SOLFEGGIO_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: foundation (174, 285) = teal — the body's
// groundwork; activation (396, 417, 528) = gold — the personal-power
// frequencies; expansion (639, 741, 852, 963) = violet — the upward
// channel.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  foundation: { c1: '#5cb0a7', c2: '#1f6f6a', label: 'Foundation tones · the body\'s groundwork' },
  activation: { c1: '#d4a64a', c2: '#8a6818', label: 'Activation tones · the personal-power frequencies' },
  expansion: { c1: '#7c64b8', c2: '#3a2a82', label: 'Expansion tones · the upward channel' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function solfeggioPageHTML(slug: string): string {
  const r = SOLFEGGIO_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=solfeggio-${slug}`

  const title = `${r.hz} Hz Solfeggio Frequency — ${escapeHtml(r.name.split('· ')[1])} · Meaning &amp; Practice · gab44 ✨`
  const description = `What the ${r.hz} Hz Solfeggio frequency actually does, where it appears, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac, key questions. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Solfeggio frequencies', item: `${SITE_URL}/gab44/solfeggio` },
          { '@type': 'ListItem', position: 3, name: `${r.hz} Hz`, item: `${SITE_URL}/gab44/solfeggio/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.hz} Hz Solfeggio frequency — ${r.name.split('· ')[1]} · meaning & practice`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/solfeggio/${slug}`,
        about: `${r.hz} Hz Solfeggio frequency, sound healing, chakra tone`
      }
    ]
  })

  const otherSolfeggiosHtml = SOLFEGGIOS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/solfeggio/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${q.hz} Hz</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/solfeggio/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.hz} Hz · ${r.name.split('· ')[1]} — meaning & practice`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/solfeggio/${slug}" />
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
  h1 { font-size: 40px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .hz { font-family: 'JetBrains Mono', monospace; color: var(--accent); padding-right: 14px; }
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
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
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } h1 { font-size: 32px; } }
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
  .other-tones { margin: 36px 0 22px; }
  .other-tones h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .tones-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; }
  @media (max-width: 700px) { .tones-grid { grid-template-columns: repeat(4, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; font-family: 'JetBrains Mono', monospace; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/solfeggio">all 9 frequencies</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/geometry">sacred geometry</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Solfeggio Frequencies</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="hz">${r.hz} Hz</span>${escapeHtml(r.name.split('· ')[1] || r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>tone ${r.position} of 9</span>
      <span>${escapeHtml(r.family)}-family</span>
      <span>${r.hz} Hz</span>
    </div>

    <article class="core-card">
      <span class="label">what ${r.hz} Hz actually carries</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🎧</span>what it does</h2>
    <div class="signs-card">
      <h3>the work this frequency carries</h3>
      <p>${escapeHtml(r.what_it_does)}</p>
    </div>

    <h2><span class="icon">🌍</span>where it appears</h2>
    <div class="panel where">
      <h3>history, practice, and where you find it today</h3>
      <p>${escapeHtml(r.where_found)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this frequency teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the frequency becomes a shortcut</h3>
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
        <div class="pair-text">Sign whose energy aligns with this frequency.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after listening</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which frequency *your* chart is asking for?</h2>
      <p>Each chart has a primary tone — the one your nervous system has been waiting for. A <strong>personal reading</strong> identifies it and tells you which Solfeggio frequency to listen to daily, paired with the chakra and the practice that will make it land. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my frequency read →</a>
    </section>

    <section class="other-tones">
      <h3>the other 8 frequencies</h3>
      <div class="tones-grid">
        ${otherSolfeggiosHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/solfeggio">all 9 frequencies</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function solfeggioIndexHTML(): string {
  const familySections = (['foundation', 'activation', 'expansion'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = SOLFEGGIOS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/solfeggio/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="hz">${s.hz} Hz</span>
          <span class="pos">${s.position}/9</span>
        </div>
        <div class="name">${escapeHtml(s.name.split('· ')[1] || s.name)}</div>
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

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Solfeggio Frequencies — All 9 Tones &amp; What They Carry · gab44 ✨</title>
<meta name="description" content="The 9 Solfeggio frequencies (174, 285, 396, 417, 528, 639, 741, 852, 963 Hz) — what each tone actually does, the chakra it pairs with, the practice that makes it land. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/solfeggio" />
<meta property="og:title" content="Solfeggio Frequencies — All 9 Tones · gab44" />
<meta property="og:description" content="From 174 Hz (foundation) to 963 Hz (unity) — what each Solfeggio frequency carries, hand-written, honest about both the gift and the shortcut." />
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
  .card .hz { font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 700; color: var(--accent); }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
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
      <a href="/gab44/geometry">sacred geometry</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 9 <span class="accent">Solfeggio</span> frequencies — what each tone actually carries</h1>
    <p class="sub">From 174 Hz (foundation, the body settles) to 963 Hz (unity, separation dissolves). Each frequency has a job, a chakra, a practice that makes it land — and a shortcut to avoid. Hand-written, honest about both the gift and the trap.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right frequency for your moment?</strong> Click any tone below. Every page has the actual *meaning* (the history and the modern claim), what the frequency *does*, where you find it in practice today, what it means in love and in work, the *gift* it teaches, the *shadow* of using it as a shortcut, and pair-with cards for chakra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The nine tones cluster naturally. <em>Foundation</em> (174, 285) is the body\'s groundwork — pain relief and tissue repair. <em>Activation</em> (396, 417, 528) is the personal-power band — release, change, love. <em>Expansion</em> (639, 741, 852, 963) is the upward channel — connection, expression, awakening, unity. Six of the nine tones map one-to-one onto the chakras, which makes the Solfeggio framework the cleanest sound-to-body map there is.</p>
      <p><strong>Frequencies are tools, not magic.</strong> Each tone signals a permission to the body — it does not do the work for you. Listen with intention, paired with the chakra and the practice, and the frequency lands. Listen as background to scrolling and the frequency is wallpaper.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which frequency your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary tone — the one your nervous system has been waiting for. A $9 reading identifies it. <a href="/gab44/reading?ref=solfeggio-index">Get yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
