// Yamas & Niyamas — the 10 ethics of Patanjali's Yoga Sutra — SEO funnel.
// /gab44/yamas-niyamas (index) + /gab44/yamas-niyamas/{slug}.
//
// 10 hand-written ethics guides — the ground-level deepening of the Eight Limbs
// ship. Yoga Sutra 2.30 (yamas) and 2.32 (niyamas). Each ethic has its own page
// because each has its own search volume — "ahimsa meaning" is a different
// query than "satya yoga" or "santosha contentment".
//
// Two-family taxonomy:
//  - Yamas (outward) — sunrise saffron — how you treat the world.
//      ahimsa, satya, asteya, brahmacharya, aparigraha.
//  - Niyamas (inward) — dusk indigo — how you tend yourself.
//      saucha, santosha, tapas, svadhyaya, ishvara-pranidhana.

import { SITE_URL } from '@/lib/identity'

export interface EthicGuide {
  slug: string
  text: string
  sanskrit: string
  translation: string
  family: 'yama' | 'niyama'
  position: number
  sutra_reference: string
  fruit_sutra: string
  glyph: string
  one_liner: string
  meaning: string
  what_it_actually_is: string
  thirty_day_practice: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with: string
  pair_with_link: string
  pair_with_link_text: string
  key_questions: [string, string, string]
}

export const ETHICS: EthicGuide[] = [
  {
    slug: 'ahimsa',
    text: 'Ahimsa',
    sanskrit: 'अहिंसा',
    translation: 'Non-violence. The first yama. A- (not) + himsa (harm).',
    family: 'yama',
    position: 1,
    sutra_reference: 'Yoga Sutra 2.30 — ahimsā satya asteya brahmacarya aparigrahā yamāḥ (the yamas begin with non-violence)',
    fruit_sutra: 'Yoga Sutra 2.35 — ahimsā-pratiṣṭhāyāṁ tat-sannidhau vaira-tyāgaḥ. "In the presence of one rooted in non-violence, hostility ceases."',
    glyph: '🕊️',
    one_liner: 'The first ethic. Non-violence toward every being — including yourself, including in thought, including the violence disguised as honesty.',
    meaning: 'Ahimsa is the first yama because Patanjali knew the rest cannot stand without it. The Sanskrit is built from negation — *a-himsa*, the absence of *himsa* (harm, injury, violence). It is not passive non-aggression; it is the active, sustained refusal to add violence to a world already full of it. Classical lineage runs from the Yoga Sutras (c. 200 BCE - 400 CE) through the Mahabharata, the Jain Acharanga Sutra (which makes ahimsa the foundational vow), and into Gandhi\'s 20th-century reframing as *satyagraha* — truth-force. The Jain monastics extend ahimsa to insects, to plants harvested before death, even to the air (they wear face cloths to avoid harming microbes). Patanjali\'s usage is less ascetic but no less serious: the practitioner of yoga commits to causing no harm in body, in speech, in thought, toward beings *including the self*.',
    what_it_actually_is: 'Ahimsa is not non-confrontation. Patanjali does not ask the yogi to be a doormat; the texts are full of warriors and householders. Ahimsa is the discipline of removing *gratuitous* harm — harm that serves no purpose other than the harming. The fierce conversation that protects a child is ahimsa. The brutal honesty offered to wound is not. The vegetable harvested for food is ahimsa-compatible in the Yogic frame; the animal killed for sport is not. The test is not the absence of force but the absence of *needless* force. Patanjali names a remarkable fruit in YS 2.35: when a being is rooted in ahimsa, the beings around them feel safe enough that hostility itself ceases in their presence. Animals approach. Strangers soften. The world becomes less defended around the non-violent one.',
    thirty_day_practice: 'Pick ONE register at a time. **Week 1 — toward beings.** Notice every micro-aggression — the snapped word, the dismissive gesture, the sigh of impatience. Do not stop them; just *see* them. The seeing itself starts the practice. **Week 2 — toward yourself.** Self-violence (the inner voice that calls you stupid, the body you hate in the mirror, the achievement you punish yourself for not reaching) is the most common form of himsa in modern life. For seven days, refuse the inner cruelty. **Week 3 — in speech.** Speak only what is true, kind, and necessary. If any of the three is missing, do not speak. **Week 4 — in thought.** Notice violent rehearsals — the imagined retort, the contemptuous internal verdict. Do not suppress; observe and release. By day 30 you will have a baseline for how often your day contains harm you were not previously seeing.',
    in_love: 'A relationship in which both partners hold ahimsa is unmistakable to outsiders. No contempt, no honesty-as-weapon, no withdrawal-as-punishment, no public mockery, no slow grinding-down of the other\'s confidence. Ahimsa-love does not mean conflict-free; it means that even the conflicts are conducted without contempt. The four horsemen of relational collapse (Gottman: contempt, criticism, defensiveness, stonewalling) are all forms of himsa. Their absence is what ahimsa-in-love looks like.',
    in_work: 'The professional who removes gratuitous harm. Not the conflict-avoider — ahimsa is fully compatible with hard conversations, firings handled with care, boundaries enforced. What ahimsa removes is the harm beyond what the situation requires: the dressing-down delivered for sport, the public humiliation that could have been a private word, the email cc\'d to make a point. The ahimsa-trained professional is the one whose authority does not require fear to function.',
    the_gift: 'Patanjali names it directly (YS 2.35): a presence that all beings around you feel safe in. Hostility ceases in your proximity. This is not metaphor — it is the lived experience of every practitioner who has held ahimsa long enough to embody it. Strangers approach. Animals do not flee. Children settle.',
    the_shadow: 'Ahimsa as spiritual bypassing. The practitioner who declares non-violence while being subtly contemptuous, who refuses confrontation while resentment compounds, who calls passive aggression "peacefulness" — has performed the language of ahimsa without the substance. The shadow is also self-collapse: the practitioner who has confused non-violence with the abolition of all force, who cannot say no, cannot defend a child, cannot enforce a boundary. Real ahimsa includes the warrior; what it removes is the cruelty.',
    pair_with: 'Heart chakra (Anahata) — the seat of compassion, the only chakra strong enough to sustain ahimsa across decades.',
    pair_with_link: '/gab44/chakras/heart',
    pair_with_link_text: 'Heart chakra practice',
    key_questions: [
      'Where in my life have I been performing non-violence while practicing a subtler kind of harm — contempt disguised as honesty, withdrawal disguised as peace?',
      'Who in my life has been receiving small daily violences from me that I have not been calling violence?',
      'What would my speech have to lose, this week, for it to qualify as ahimsa-trained?'
    ]
  },
  {
    slug: 'satya',
    text: 'Satya',
    sanskrit: 'सत्य',
    translation: 'Truthfulness. The second yama. From sat — "what is, what truly exists, the real".',
    family: 'yama',
    position: 2,
    sutra_reference: 'Yoga Sutra 2.30 — the second of the five yamas',
    fruit_sutra: 'Yoga Sutra 2.36 — satya-pratiṣṭhāyāṁ kriyā-phalāśrayatvam. "When truthfulness is established, the fruit of action becomes dependent on the word." The Sanskrit literally says: whatever the truthful one says, comes to pass.',
    glyph: '🪶',
    one_liner: 'The second ethic. Alignment between what is known, what is said, and what is done — the integrity that makes a word weigh something.',
    meaning: 'Satya is built from *sat* — the root that names existence itself, what truly is. Sanskrit philosophy uses *sat-chit-ananda* (being-consciousness-bliss) as the three signatures of ultimate reality; *satya* is the human practice of staying aligned with that root. Patanjali frames it as the second yama because truth without non-violence becomes weaponized honesty, but non-violence without truth becomes dishonest comfort. They are a pair. Classical lineage runs from the Yoga Sutras through the Upanishads (the Mundaka Upanishad\'s *satyam eva jayate* — "truth alone triumphs" — is now the national motto of India), the Manu Smriti, and into Gandhi\'s satyagraha (truth-force) which fused satya with ahimsa into a method.',
    what_it_actually_is: 'Satya is not the obligation to say everything that is true. The Yogic teaching is precise: speak what is *true*, *kind*, and *necessary* — if any of the three is missing, remain silent. The cruelest things are sometimes also true; satya does not authorize their delivery. The classical commentaries (Vyasa, Vachaspati Mishra) are explicit: if the truth would harm and no good comes of the harm, the practice is silence, not speech. Satya is also internal — the alignment between what you know, what you say, and what you do. The person whose word weighs nothing has not betrayed satya by lying; they have betrayed it by acting against their own knowledge. The fruit Patanjali names (YS 2.36) is striking: when satya is established, what the practitioner says *comes to pass*. The Sanskrit is *kriyā-phalāśrayatvam* — actions and their fruits take refuge in the truth-speaker\'s word.',
    thirty_day_practice: '**Week 1.** Speak nothing untrue for seven days. The small lies first — the "I\'m fine" when you are not, the "yes I read it" when you didn\'t, the agreement offered to avoid conflict. **Week 2.** Speak only what is true, kind, AND necessary. Drop the third of words that were sound for sound\'s sake. **Week 3.** Watch the gap between what you know and what you say. Where do you hold back the version that would actually serve? Where do you say the comforting half instead of the whole? **Week 4.** Watch the gap between what you say and what you do. The week of *kriya* — make your actions match your stated word, or change the word.',
    in_love: 'A relationship trained in satya does not run on diplomacy. The hard thing is named — gently, in the right register, at the right time — but it is named. The partner who has practiced satya does not erupt with stored grievances at month six because nothing was stored; each truth was offered when it was due. Satya-love is also the version of love that does not pretend to be more or less than it is: the relationship is named for what it actually is, not for what would be more comfortable to call it.',
    in_work: 'The professional whose word is a contract. They do not over-promise. They do not under-deliver to manage expectations. They tell their team what is actually true about the project. The satya-trained professional is unusual in modern work; their colleagues notice within weeks, and gravitate toward them, because everyone secretly knows the cost of office-truth-as-diplomacy.',
    the_gift: 'YS 2.36 — the word that lands. The truthful one\'s speech *acquires weight in reality*. Things they say happen. Promises they make hold. This is not magical; it is the compound interest of decades of alignment.',
    the_shadow: 'Satya as honesty-as-weapon. The practitioner who declares "I am just being honest" while delivering a contemptuous verdict — has weaponized truth and abandoned ahimsa. Truth without kindness, truth without necessity, truth-as-superiority-display — all are satya\'s shadow. Equally shadowed: the practitioner who confuses satya with the obligation to over-share, who broadcasts every internal weather pattern under cover of "transparency". Satya is alignment, not exposure.',
    pair_with: 'Throat chakra (Vishuddha) — the chakra of right speech, where the body holds back what wants to be said.',
    pair_with_link: '/gab44/chakras/throat',
    pair_with_link_text: 'Throat chakra practice',
    key_questions: [
      'Where in my life am I saying half-truths to keep the peace — and what is that costing me, and them?',
      'Which of my recent promises have I let drift, and what would it cost me to either deliver them or renegotiate them?',
      'If my word weighed exactly as much as my actions made it weigh — would I trust it?'
    ]
  },
  {
    slug: 'asteya',
    text: 'Asteya',
    sanskrit: 'अस्तेय',
    translation: 'Non-stealing. The third yama. A- (not) + steya (theft, stealing).',
    family: 'yama',
    position: 3,
    sutra_reference: 'Yoga Sutra 2.30 — the third of the five yamas',
    fruit_sutra: 'Yoga Sutra 2.37 — asteya-pratiṣṭhāyāṁ sarva-ratnopasthānam. "When non-stealing is established, all jewels present themselves."',
    glyph: '🤲',
    one_liner: 'The third ethic. Taking nothing that was not freely given — including time, attention, credit, ideas, and air.',
    meaning: 'Asteya is the deceptively simple yama. The first instinct is to read it as *do not steal objects*, and the texts confirm that reading — but they extend far past it. The classical commentaries (Vyasa on YS 2.37, Hariharananda Aranya, modern teachers Iyengar and Desikachar) widen *steya* to every form of taking-without-giving: time you take from someone who needed it, attention you extract for your own ego, ideas you appropriate without credit, opportunities you grab when they were due to another, even the air-time you take in conversation. Theft, in the Yogic frame, is the entire family of behaviors in which you accumulate at another\'s unacknowledged expense. The English translation "non-stealing" undersells the depth.',
    what_it_actually_is: 'Asteya begins with material objects (do not steal what is not yours) and immediately deepens. The commentaries name several common modern forms: **stealing time** (the meeting that runs long, the friend whose request for "five minutes" becomes an hour, the email reply that should have taken thirty seconds and took thirty days); **stealing attention** (turning conversations toward yourself, leaving social interactions emotionally depleted for the other party); **stealing credit** (taking authorship of an idea that came from a colleague, an intern, a partner, a teacher); **stealing potential** (preventing another\'s growth in order to maintain your own position). The yogic test for asteya is not "did I steal an object" but "did I take what was not freely given". YS 2.37 names the fruit: when the practitioner stops taking, the world begins offering — *sarva-ratnopasthāna*, all jewels present themselves. The Sanskrit is striking: the universe responds to the non-grasper by laying treasures in front of them, unbidden.',
    thirty_day_practice: '**Week 1 — objects.** Notice every small material taking — the pen kept, the parking spot grabbed when someone was waiting, the food eaten from a shared bowl beyond your share. **Week 2 — time.** Run every meeting to its stated end-time. Reply to every email within the time-frame the other person reasonably expected. Stop the conversation when the other person has signaled they need to go. **Week 3 — credit.** For seven days, name out loud the source of every idea you use. The blog post that inspired your strategy. The colleague who actually drafted the slide you presented. The friend who said the thing you are now claiming as your own insight. **Week 4 — opportunity.** Watch where you take what would have gone to another. The promotion you maneuvered for. The mention you angled into. The introduction you made about yourself instead of about a more-deserving peer.',
    in_love: 'The partner trained in asteya does not steal from the relationship\'s shared stock — they do not take more decision-power than was agreed, more emotional labor than was offered, more conversational air than balances. Asteya-love also does not steal from the partner\'s independent life: their friendships, their solitudes, their projects that have nothing to do with you. The relationship is the shared treasure; what each partner brought in is theirs.',
    in_work: 'The colleague whose career does not require taking from others. They name sources, credit teams, make introductions that serve the other party as much as themselves. They do not extract junior staff for emotional labor. They do not collect goodwill they did not earn. The asteya-trained professional finds — eventually — that opportunities flow toward them, exactly as Patanjali predicted, because everyone in the network can sense the difference between the taker and the non-taker.',
    the_gift: 'YS 2.37 — *all jewels present themselves*. The non-stealer becomes the recipient of unsolicited offers — opportunities, gifts, introductions, treasures. Modern teachers (Iyengar, T.K.V. Desikachar) attest to this in practice: the student who stops grasping is the student to whom the next teaching flows.',
    the_shadow: 'Asteya inverted into compulsive self-denial. The practitioner who refuses every gift, every offer, every help — under the banner of "not taking" — has confused asteya with self-erasure. Asteya does not forbid receiving; it forbids taking-without-giving. The freely offered gift is meant to be received with gratitude, not refused with virtue. Equally shadowed: the practitioner who declares non-stealing while continuing to extract — credit, time, attention — under cover of subtlety.',
    pair_with: 'Root chakra (Muladhara) — the chakra of having-enough; the felt-sense of sufficiency that makes non-grasping possible.',
    pair_with_link: '/gab44/chakras/root',
    pair_with_link_text: 'Root chakra practice',
    key_questions: [
      'Whose time, attention, or credit have I been taking from this week — and what would it cost to give it back?',
      'Where in my career have I claimed ground that another\'s work made possible, and have I named them?',
      'If I stopped grasping for one specific thing I have been chasing — what might present itself unsolicited?'
    ]
  },
  {
    slug: 'brahmacharya',
    text: 'Brahmacharya',
    sanskrit: 'ब्रह्मचर्य',
    translation: 'Right use of energy / sexual integrity. The fourth yama. Brahma- (the absolute) + charya- (walking, conduct) — "walking with the absolute".',
    family: 'yama',
    position: 4,
    sutra_reference: 'Yoga Sutra 2.30 — the fourth of the five yamas',
    fruit_sutra: 'Yoga Sutra 2.38 — brahmacarya-pratiṣṭhāyāṁ vīrya-lābhaḥ. "When brahmacharya is established, vitality is gained."',
    glyph: '🌊',
    one_liner: 'The fourth ethic. The conscious regulation of sexual and life-force energy — not necessarily celibacy, but presence to what is otherwise compulsive.',
    meaning: 'Brahmacharya is the most-mistranslated yama. The popular Western reading is "celibacy" — and in the renunciate monastic tradition (sannyasa), it is. But Patanjali was writing for the broader yoga community of householders, ascetics, and students alike; the broader reading is *the right use of life-force energy, of which the sexual is one form*. The Sanskrit literally translates as "walking with the absolute" — *Brahma* is the ultimate, *charya* is conduct. To practice brahmacharya is to move through life such that the choices align with what is highest, not what is compulsive. The classical commentaries (Vyasa, Vachaspati Mishra, modern teachers including Krishnamacharya, Iyengar, and Desikachar) all read it as energy-regulation more than enforced abstinence. The Bhagavad Gita names brahmacharya as one of the disciplines that leads to *yoga-yukta* — being united with yoga.',
    what_it_actually_is: 'Brahmacharya asks: where in your life is energy being spilled without consciousness? Sexual energy is the most obvious answer, and the texts spend serious time on it — but the practice extends to every form of vital energy. Attention spilled on doomscrolling is a brahmacharya question. Speech spilled on gossip is a brahmacharya question. The hours given to compulsive consumption (food, content, stimulation, even exercise) are brahmacharya questions. For householders, the sexual register of brahmacharya is *presence* — making love consciously, regulating energy according to season and stage of life, not abandoning sexuality but no longer being driven by it. The fruit Patanjali names (YS 2.38) is *vīrya* — vitality, vigor, courage, the energy that powers everything else. The brahmacharya-trained practitioner is unmistakable: their eyes have light, their voice has carry, their body has reserve.',
    thirty_day_practice: '**Week 1 — attention.** Where is your attention being spent compulsively? Phone, news, social media, food. Pick one. Reduce it deliberately for seven days. **Week 2 — sexuality.** If you are sexually active, practice presence: make love only when both you and your partner are present, not when either is using sex for relief, distraction, or score. If you are celibate, observe the compulsive sexual imagination without acting on it. **Week 3 — speech.** Brahmacharya in speech is the energy not spilled in gossip, in venting, in the conversational repetition that drains both parties. Reduce. **Week 4 — body.** Where is your vital energy leaking? Late nights, irregular eating, overtraining, undertraining. Pick one structural leak and stop it for seven days.',
    in_love: 'Brahmacharya-love is the sexual relationship in which both partners have moved past compulsion. Sex is one of the practices, not the relief from everything else; it has its rhythms, its seasons, its registers, and it is not used to manage anxiety, repair conflict, or extract validation. Couples trained in brahmacharya tend to report — in the long run — more sexual aliveness rather than less, because the energy has been conserved and is therefore present when it is invoked.',
    in_work: 'The professional whose energy lasts the decade. Brahmacharya at work is the refusal to spill in adrenalized urgency. It is the deep-work hour protected from the slack ping. It is the no-meeting morning. It is the early bedtime that makes the next day actually productive. The brahmacharya-trained professional is mistaken at first for being lower-output (because the visible scattered-effort metrics look lower); over years they out-produce the spillers by a wide margin.',
    the_gift: 'YS 2.38 — *vīrya-lābha*, the gain of vitality. The brahmacharya-trained one has energy when others have collapsed, presence when others have scattered, sexual aliveness when others have grown numb, longevity when others have burned out.',
    the_shadow: 'Brahmacharya inverted into repression. The practitioner who *forces* celibacy while burning with unacknowledged desire — has not practiced brahmacharya; they have stored it as resentment. The shadow is also enforced asceticism that turns into superiority — the yogi who looks down on householders for their sexual life. Patanjali was clear: the householder\'s brahmacharya is conscious, regulated sexuality, not abstinence. The other shadow is the spiritualization of sexual exploitation: teachers who use "tantric" framing to take from students. This is *steya* and *himsa* dressed in brahmacharya\'s language. Run.',
    pair_with: 'Sacral chakra (Svadhisthana) — the chakra of sexuality, creativity, and vital energy.',
    pair_with_link: '/gab44/chakras/sacral',
    pair_with_link_text: 'Sacral chakra practice',
    key_questions: [
      'Where in my life is energy leaking without my consent — attention, sex, speech, time?',
      'If I conserved one specific channel of energy for thirty days, what would I notice on day 31?',
      'What is the difference between the version of me that is driven by appetite, and the version that is present to it?'
    ]
  },
  {
    slug: 'aparigraha',
    text: 'Aparigraha',
    sanskrit: 'अपरिग्रह',
    translation: 'Non-possessiveness, non-grasping. The fifth yama. A- (not) + pari- (around) + graha- (grasping) — "no grasping-around".',
    family: 'yama',
    position: 5,
    sutra_reference: 'Yoga Sutra 2.30 — the fifth of the five yamas',
    fruit_sutra: 'Yoga Sutra 2.39 — aparigraha-sthairye janma-kathaṁtā-saṁbodhaḥ. "When non-grasping is firm, the meaning of birth is revealed."',
    glyph: '🪺',
    one_liner: 'The fifth ethic. The capacity to hold without owning, to enjoy without possessing, to love without grasping.',
    meaning: 'Aparigraha is built from a triple negation: *a-* (not) + *pari-* (around, completely) + *graha* (grasping). The Sanskrit literally means *no grasping-around-everything* — the refusal to wrap oneself in the things one has accumulated. Patanjali ends the yamas list with aparigraha because it is the master-key: the practitioner who has learned not to grasp has, in a sense, already practiced the first four. Classical commentaries (Vyasa, Vachaspati Mishra, modern teachers Iyengar and Sri K. Pattabhi Jois) read it as both the renunciate\'s vow of poverty AND the householder\'s practice of right relationship to possessions. The householder is not asked to give up belongings; they are asked to stop *needing* them, to hold them lightly enough that loss would not destabilize.',
    what_it_actually_is: 'Aparigraha is not poverty; it is the inner freedom that does not depend on what is owned. The classical example: the renunciate sannyasin who has nothing and is free; the king Janaka who had everything and was equally free, because his ownership did not produce attachment. The practice is to hold lightly — possessions, identities, relationships, achievements, even spiritual progress. Each of these is the seat of a particular grasping in modern life. Possessions: the constant accumulation, the storage unit full of things you do not use. Identities: the rigid self-concept ("I am a writer", "I am a runner", "I am a successful person") that cannot bend when life changes. Relationships: the partner held so tightly that the relationship suffocates. Achievements: the awards, titles, follower counts collected for the self they confirm rather than the contribution they make. YS 2.39 names the fruit: when grasping is dropped, *the meaning of birth itself becomes clear*. This is the deepest fruit promised in the yamas — aparigraha leads directly to the realization of why you are here.',
    thirty_day_practice: '**Week 1 — objects.** Give away one possession per day for seven days. Not a junk-drawer purge — a real thing you valued. Notice the resistance. **Week 2 — digital.** Unsubscribe, unfollow, archive. Reduce the inbox, the notification stream, the saved-for-later pile. Notice how much grasping is digital. **Week 3 — relational.** Where are you holding someone too tightly? A child, a partner, a friend. For seven days, soften the hold. Let them move. **Week 4 — identity.** Drop one self-label and notice what is left. "I am the smart one", "I am the disciplined one", "I am the one who always handles it". Aparigraha at this depth is the beginning of real freedom.',
    in_love: 'A relationship trained in aparigraha is one in which neither partner is owned. Each is held openly; the love is the gift of *choosing* one another daily, not the chain of being unable to leave. Aparigraha-love does not surveil. It does not extract proof. It does not require the partner to be small enough to fit a single container. The result is paradoxical and well-documented: the lightest hold produces the most stable bond.',
    in_work: 'The professional who is not owned by their role. They can leave it without identity collapse. They can hire above themselves without threat. They can promote a junior without fearing replacement. The aparigraha-trained professional is, in the long run, the rarest kind: the one whose ambition has dropped its grasping quality and become pure contribution.',
    the_gift: 'YS 2.39 — *janma-kathamtā-sambodha*, the revelation of why-you-were-born. This is the deepest gift in the yamas, the one Patanjali places at the end of the list because it presupposes the other four. When you have stopped grasping at what you can accumulate, life shows you the thing that was actually yours to do.',
    the_shadow: 'Aparigraha as performative minimalism. The practitioner who has reduced possessions while accumulating spiritual identity, follower count, or moral superiority — has only relocated the grasping. The shadow is also enforced poverty as virtue — refusing legitimate resources under the cover of non-attachment. Aparigraha is not anti-resource; it is anti-grasping. The wealthy practitioner who holds wealth lightly is closer to aparigraha than the poor one who clutches scarcity.',
    pair_with: 'Crown chakra (Sahasrara) — the chakra of release, of opening beyond the personal self.',
    pair_with_link: '/gab44/chakras/crown',
    pair_with_link_text: 'Crown chakra practice',
    key_questions: [
      'What am I gripping right now — possession, person, identity, achievement — that I could hold more lightly without losing?',
      'If I imagine the version of me that has stopped grasping for X, what does that version know that I currently do not?',
      'Which of my current "needs" are actually graspings — things I want to own rather than things I need to live?'
    ]
  },
  {
    slug: 'saucha',
    text: 'Saucha',
    sanskrit: 'शौच',
    translation: 'Cleanliness, purity. The first niyama. From shuci — clear, pure, clean.',
    family: 'niyama',
    position: 6,
    sutra_reference: 'Yoga Sutra 2.32 — śauca santoṣa tapas svādhyāya īśvarapraṇidhānāni niyamāḥ (the niyamas begin with cleanliness)',
    fruit_sutra: 'Yoga Sutra 2.40-2.41 — "From cleanliness, detachment from the body and disinterest in contact with others. From mental purity, brightness of being, one-pointedness, sense-mastery, and fitness for self-realization."',
    glyph: '💧',
    one_liner: 'The sixth ethic. Cleanliness of body, space, food, speech, and intention — the substrate that the higher practices depend on.',
    meaning: 'Saucha is the first niyama because Patanjali knew the mind cannot quiet in a cluttered body, a cluttered home, a cluttered diet, or cluttered intentions. The Sanskrit *shuci* names a kind of clarity that is both external and internal — the body that has been bathed, the room that has been swept, AND the mind that has been emptied of corruption. Classical Ayurveda extends saucha into a daily practice (*dinacharya*) that includes tongue-scraping, oil-pulling, abhyanga (self-massage), bowel regularity, and clean food. The Yogic frame deepens it: external cleanliness is the entry point, but internal saucha — purity of thought, of speech, of intention — is the actual work. The fruit Patanjali names is striking and double: external saucha produces *detachment from the body* (you stop being absorbed by it); internal saucha produces *brightness, focus, sense-mastery, and the fitness for realization*.',
    what_it_actually_is: 'External saucha: clean body, clean teeth, clean nails, clean clothes, clean home, clean food, clean water, clean air where possible. Modern life has inverted Ayurveda\'s dinacharya — most people brush teeth but skip tongue-scraping, shower but skip abhyanga, eat but skip the question of whether the food itself is clean. Internal saucha: clean speech (free of gossip, of needless complaint, of dishonest comfort), clean thought (the work of not entertaining contemptuous, envious, or fearful patterns once you notice them), clean intention (acting from the cleanest motive available to you in any moment). The classical commentaries treat external saucha as preparation for internal — the cleaner the vessel, the more the practice can land.',
    thirty_day_practice: '**Week 1 — body.** Add tongue-scraping each morning. Add oil-pulling (sesame or coconut, 5-10 minutes). Add a weekly abhyanga (warm oil self-massage). **Week 2 — space.** Pick one room. Strip it to essentials. Notice how the cleaner space lets the mind settle. **Week 3 — speech.** Seven days without gossip, without complaint-for-complaint\'s-sake, without speech that does not serve. **Week 4 — intention.** Before significant actions (a meeting, a conversation, a meal), ask: what is the cleanest motive available to me here? Act from that.',
    in_love: 'A relationship trained in saucha runs cleaner. The space is tended, the body is cared for, the speech is free of gossip about other people, the intentions toward one another are stated plainly. Saucha-love is not sterile — it is *clear*. The other partner can always tell where they stand because nothing is being hidden or muddied.',
    in_work: 'The professional with clean inputs and outputs. Their desk is ordered. Their email is processed. Their commitments are tracked. Their communication is direct. They do not hide work in ambiguity. The saucha-trained professional is recognizable within a week of working with them; their inbox is processed daily and their word means what it says.',
    the_gift: 'YS 2.40-2.41 — *sattva-shuddhi, saumanasya, ekagrya, indriya-jaya, atma-darshana-yogyatva*. Brightness of being. Cheerfulness. One-pointed focus. Mastery over the senses. Fitness for self-realization. Patanjali lists five fruits in two consecutive sutras because the gift compounds: the cleaner the substrate, the more the higher practices can do.',
    the_shadow: 'Saucha as obsessive purification. The practitioner who turns cleanliness into a compulsion — the orthorexic relationship to food, the OCD-grade cleaning ritual, the contempt for others\' uncleaner habits — has missed the practice. Saucha is *substrate*, not virtue. Equally shadowed: saucha as aesthetic performance — the curated minimalist space documented for an audience while the inner life remains cluttered. Saucha is internal first; what shows externally is incidental.',
    pair_with: 'Pranayama practice — the breath is the cleanest, most disciplined instrument the body has. Pranayama is saucha\'s most direct application.',
    pair_with_link: '/gab44/pranayama',
    pair_with_link_text: 'Pranayama practice',
    key_questions: [
      'Where in my body, space, diet, speech, or intention is the most uncleanliness — and which would shift the most by being cleaned?',
      'What is the difference between saucha-as-substrate (clearing what blocks practice) and saucha-as-virtue (cleanliness for its own sake)?',
      'If I cleaned one specific channel for thirty days — diet, speech, room, intention — what would land in the cleared space?'
    ]
  },
  {
    slug: 'santosha',
    text: 'Santosha',
    sanskrit: 'संतोष',
    translation: 'Contentment. The second niyama. Sam- (with, fully) + tosha- (satisfaction).',
    family: 'niyama',
    position: 7,
    sutra_reference: 'Yoga Sutra 2.32 — the second of the five niyamas',
    fruit_sutra: 'Yoga Sutra 2.42 — santoṣād anuttamaḥ sukha-lābhaḥ. "From contentment, unsurpassable happiness is gained."',
    glyph: '☀️',
    one_liner: 'The seventh ethic. The active practice of contentment with what is — not as resignation, but as the strength that does not require external outcomes to settle.',
    meaning: 'Santosha is built from *sam* (with, fully) and *tosha* (satisfaction). The Sanskrit names a contentment that is not the passive acceptance of fate, but the active capacity to be satisfied *with this*, right now, before the situation changes. Patanjali places santosha second among the niyamas because it is the inner discipline most under-practiced in modern life — a life organized around the next acquisition, the next achievement, the next state-change. The classical commentaries (Vyasa, Vachaspati Mishra) emphasize that santosha is *not* indifference. The practitioner still works, still strives, still moves — but the inner settledness does not depend on the outcome. The fruit Patanjali names is the most striking in the whole sutra: *anuttamaḥ sukha-lābhaḥ* — *unsurpassable* happiness. The Sanskrit *anuttama* literally means "not exceeded by anything"; the joy of contentment is the joy nothing else can top.',
    what_it_actually_is: 'Santosha is the deliberate practice of finding the situation as it is *sufficient*. Not a denial of preferences, not a refusal to act, not the abandonment of dreams — but the discipline of not making your peace contingent on outcome. The classical test: can you be content right now, before anything changes? If yes, you will continue to act in the world from a place of fullness rather than scarcity. If no, the next acquisition will not solve it either, because the not-content-yet pattern will simply move to the next target. Modern teachers (Ramana Maharshi, Eckhart Tolle\'s adaptation, Iyengar) all converge: santosha is the discovery that the felt-sense of "I am at peace" is available *now*, not at the destination.',
    thirty_day_practice: '**Week 1.** Each morning, before checking phone or beginning tasks, sit for two minutes and find one thing in the present moment that is *enough*. Body breathing. Coffee in the cup. The light through the window. Find it. Sit with it. **Week 2.** Notice every comparison. The thought "their life is better", "I should have more", "if only X" — see it, name it, let it pass. **Week 3.** For one week, buy nothing non-essential. Notice the impulse-to-acquire and what it was trying to soothe. **Week 4.** Each evening, name three things from the day that were already sufficient. The walk you took. The conversation you had. The work you finished. Build the muscle of seeing the enough that was always there.',
    in_love: 'A partner trained in santosha is unmistakable to live with. They do not require the relationship to provide something it cannot. They do not push for perpetual upgrade. They are present to the partnership *as it is*, on the days it is hard as well as the days it is easy. Paradoxically — and this is the practice\'s gift — santosha-love tends to produce *more* relational improvement, because both partners are no longer using one another as the source of unattained contentment.',
    in_work: 'The professional who is not chasing the next title in order to feel okay. They work from sufficiency, not from desperation. They take pride in the current role without needing it to be the final one. Their ambition has not vanished — it has dropped its grasping quality. The santosha-trained worker is, paradoxically, often the one promoted faster, because their work is no longer leaking the energy of dissatisfaction.',
    the_gift: 'YS 2.42 — *anuttamaḥ sukha-lābhaḥ*, unsurpassable happiness. The Sanskrit superlative is deliberate. Patanjali is naming a joy that no acquisition, no achievement, no external state-change can produce. It is the joy of having stopped waiting.',
    the_shadow: 'Santosha as spiritual bypass. The practitioner who declares contentment while quietly seething with envy, who refuses to acknowledge legitimate dissatisfaction (unjust working conditions, abusive relationship, untreated illness), who calls passivity "santosha" — has not practiced the niyama; they have used it as anesthesia. Real santosha does not foreclose action. The wise practitioner is *content with what is* and *also leaves the abusive relationship*. The two are not opposed; they are sequential — the action arises from settled ground, not from the panic of dissatisfaction.',
    pair_with: 'Heart chakra (Anahata) — the seat of the felt-sense of enough, the chakra where contentment lives.',
    pair_with_link: '/gab44/chakras/heart',
    pair_with_link_text: 'Heart chakra practice',
    key_questions: [
      'What in my life am I waiting for, that — if I am honest — would not actually deliver the contentment I have attached to it?',
      'Where can I find the felt-sense of "enough" already present, right now, before anything changes?',
      'What is the difference between healthy striving (from sufficiency) and compulsive striving (from inner emptiness) — and which one am I currently in?'
    ]
  },
  {
    slug: 'tapas',
    text: 'Tapas',
    sanskrit: 'तपस्',
    translation: 'Discipline, ascetic heat, the fire that burns. The third niyama. From tap — to heat, to burn, to glow.',
    family: 'niyama',
    position: 8,
    sutra_reference: 'Yoga Sutra 2.32 — the third of the five niyamas',
    fruit_sutra: 'Yoga Sutra 2.43 — kāyendriya-siddhir aśuddhi-kṣayāt tapasaḥ. "From tapas, the destruction of impurity and the perfection of body and senses."',
    glyph: '🔥',
    one_liner: 'The eighth ethic. The sustained discipline that burns — the heat the practice generates when it costs you something.',
    meaning: 'Tapas is the discipline-as-heat — the Sanskrit root *tap* means literally "to heat, to burn, to glow with heat". The Vedas use *tapas* for the cosmic heat the creator generates by ascetic practice; the Upanishads name *tapas* as one of the disciplines that produces realization; Patanjali installs it as the third niyama because no practice deepens without the sustained heat of effort against resistance. Classical lineage (Vyasa, the Bhagavad Gita\'s extensive treatment of tapas in chapter 17, modern teachers from Krishnamacharya to Iyengar) is unanimous: tapas is the *cost* of yoga, the discipline that the practice itself does not work without. The fruit Patanjali names (YS 2.43) is direct: *aśuddhi-kṣaya* — the destruction of impurity — and *kāyendriya-siddhi* — perfection of body and senses.',
    what_it_actually_is: 'Tapas is the sustained practice that produces heat in the system. The cold morning shower. The fasted hours. The seated meditation that the body wants to leave. The asana held thirty seconds past the easy mark. The conversation begun when it would have been easier to avoid. The Sanskrit specifies that tapas is *the discipline that burns away impurity*; without the burn there is no purification. Modern practitioners often want the fruit of tapas without the heat — they want the realization without the cost. The texts are clear: it does not work. The Bhagavad Gita (17.14-17.16) names three registers of tapas: *physical* (cleanliness, restraint, simplicity in food, sexual integrity), *speech* (truthful, kind, and beneficial words), *mental* (serenity, gentleness, silence, self-restraint, purity of intention). The complete practice trains all three.',
    thirty_day_practice: 'Pick ONE practice that costs you. **Cold shower** for 60 seconds at the end of every shower, daily, for 30 days. OR **fasted morning** (no food until noon) for 30 days. OR **30 minutes of seated meditation** every morning before the day begins, 30 days. OR **a daily asana practice** of fixed duration (45-60 minutes) at the same hour every day, 30 days. The choice matters less than the *sustained heat*; what matters is that you do not negotiate with yourself on the bad days. Tapas is the discipline that does not stop because the practitioner is tired. By day 30, the practice itself has begun to transform you — not because of the specific practice, but because of the sustained heat against resistance.',
    in_love: 'Tapas-love is the discipline of staying engaged when the relationship is hard. The hard conversation initiated when it would have been easier to withdraw. The repair attempted when both parties are exhausted. The fidelity practiced when the imagination wanders. Tapas-love is not the avoidance of conflict; it is the discipline of staying *in the work* of love on the days when love is work.',
    in_work: 'The professional who does the difficult deep work when the easier shallow work would still produce visible output. They sit with the problem long past the point where they could have shipped a partial solution. They write the hard memo. They have the hard meeting. The tapas-trained worker accumulates compound capability that the spiller never reaches.',
    the_gift: 'YS 2.43 — *aśuddhi-kṣaya, kāyendriya-siddhi*. Destruction of impurity, perfection of body and senses. The practitioner who sustains the heat of tapas for a long time finds the body becoming a clearer instrument, the senses sharper, the mind less fogged. Modern practitioners attest: after a year of daily seated meditation, the body remembers stillness even when the mind has not asked for it.',
    the_shadow: 'Tapas as self-punishment. The practitioner who turns discipline into masochism — extreme fasting, sleep deprivation, exercise compulsion — has lost the practice and entered another form of suffering. Real tapas is *sustained* heat, not destructive heat. Equally shadowed: tapas as superiority display. The practitioner who weaponizes their discipline against less-disciplined others has missed the point. Tapas is interior; what others see is incidental.',
    pair_with: 'Solar plexus chakra (Manipura) — the fire-center, the literal seat of *agni* in the body, the chakra that tapas most directly cultivates.',
    pair_with_link: '/gab44/chakras/solar-plexus',
    pair_with_link_text: 'Solar plexus chakra practice',
    key_questions: [
      'What single discipline, sustained for thirty days, would generate the most heat in my system right now?',
      'Where am I avoiding the sustained discomfort that the next stage of my practice actually requires?',
      'What is the difference between tapas-as-discipline (sustainable, transformative) and tapas-as-punishment (extractive, damaging) — and which one have I been practicing?'
    ]
  },
  {
    slug: 'svadhyaya',
    text: 'Svadhyaya',
    sanskrit: 'स्वाध्याय',
    translation: 'Self-study, study of self, study of scripture. The fourth niyama. Sva- (self, own) + adhyaya- (study, reading).',
    family: 'niyama',
    position: 9,
    sutra_reference: 'Yoga Sutra 2.32 — the fourth of the five niyamas',
    fruit_sutra: 'Yoga Sutra 2.44 — svādhyāyād iṣṭa-devatā-saṁprayogaḥ. "From self-study, union with the chosen deity."',
    glyph: '📖',
    one_liner: 'The ninth ethic. The double practice of studying scripture and studying yourself through it — the discipline of becoming the text\'s honest reader.',
    meaning: 'Svadhyaya is the most under-translated niyama. The Sanskrit *sva-adhyaya* literally means "self-study", but the classical reading is double: *study of the self* AND *study of the texts that reveal the self*. Patanjali installs it as the fourth niyama because the inner life cannot be examined honestly without a frame — and the frame is the lineage. The classical commentaries (Vyasa, Vachaspati Mishra) read svadhyaya as the daily reading of the Yoga Sutras themselves, the Upanishads, the Bhagavad Gita, or any contemplative text — *plus* the honest examination of one\'s own life through what the text reflects back. Modern teachers (Krishnamacharya, Desikachar, Iyengar) widen the practice: svadhyaya can be done with any contemplative source — sacred texts of any tradition, deep psychology, journaling, the chart-reading itself.',
    what_it_actually_is: 'Svadhyaya has two registers operating simultaneously. **Scripture register:** the daily, slow reading of one passage of a text that has held up across centuries. The Yoga Sutras. The Tao Te Ching. The Bhagavad Gita. The Sermon on the Mount. The Upanishads. The reading is not for information; it is for the slow letting-in of a frame that the modern mind does not generate on its own. **Self-study register:** the honest examination of one\'s own patterns through that frame. What the text reflects back about your reactivity, your grasping, your avoidances. Both registers depend on one another: scripture without self-study is intellectual ornament; self-study without scripture loops in the same blind spots. Together they constitute the daily honest mirror. The fruit Patanjali names (YS 2.44) is *iṣṭa-devatā-saṁprayoga* — union with the chosen deity. The Sanskrit is precise: svadhyaya brings the practitioner into direct, communicating contact with whatever they hold as the absolute.',
    thirty_day_practice: '**Daily.** Pick one text. The Yoga Sutras (Hariharananda Aranya translation), the Gita (Eknath Easwaran), the Tao Te Ching (Stephen Mitchell), the Sermon on the Mount, the Heart Sutra. Read ONE passage each morning. Slow. Three minutes. **Daily.** Journal ten minutes after the reading. What does the text reflect back about today? Where are you living it? Where are you not? **Weekly.** Pick one specific pattern the journaling has surfaced. Examine it explicitly through the text\'s frame. **Monthly.** Re-read the passages that landed hardest. Notice what is different in your reading now versus a month ago.',
    in_love: 'Svadhyaya-love is the relationship in which both partners study themselves, study the relationship, and study the texts (sacred or psychological) that help them see what they cannot see alone. Couples-therapy is svadhyaya. Honest journaling is svadhyaya. The shared reading of a contemplative book and the conversation it produces is svadhyaya at the relational level.',
    in_work: 'The professional who studies themselves at work. They keep an honest journal of patterns — what triggered the reactive email, what produced the great meeting, what they were avoiding when they procrastinated. They read in their field and outside it. The svadhyaya-trained worker is the one who improves year after year because the data of their own life is being honestly examined.',
    the_gift: 'YS 2.44 — *iṣṭa-devatā-saṁprayoga*, communion with the chosen deity / chosen ultimate. For practitioners with a personal deity, this is direct devotional union. For practitioners with a non-personal ultimate (the Tao, *brahman*, the Real), this is the felt-sense of contact with that. Svadhyaya is the niyama most directly responsible for transmuting study into experience.',
    the_shadow: 'Svadhyaya as intellectual collection. The practitioner who reads ten contemplative texts a year without ever sitting with what they reflect back — has performed svadhyaya as content consumption. The shadow is also the spiritual narcissism of endless self-examination without action — the journal that fills with the same patterns year after year because the examined patterns are never met with practice.',
    pair_with: 'A gab44 reading itself — the practice of having someone reflect your chart back to you is svadhyaya at its most concrete.',
    pair_with_link: '/gab44/reading?ref=svadhyaya',
    pair_with_link_text: 'A $9 personal reading',
    key_questions: [
      'Which contemplative text, read slowly for ten minutes daily for thirty days, would reflect back to me what I most need to see?',
      'Where in my life have I been studying patterns without changing them — and what would the next stage of svadhyaya require?',
      'If my self-study were honest enough that I could not look away — what is the one pattern I would have to face?'
    ]
  },
  {
    slug: 'ishvara-pranidhana',
    text: 'Ishvara Pranidhana',
    sanskrit: 'ईश्वरप्रणिधान',
    translation: 'Surrender to the divine. The fifth and final niyama. Ishvara- (the Lord, the absolute) + pranidhana- (devotion, dedication, surrender).',
    family: 'niyama',
    position: 10,
    sutra_reference: 'Yoga Sutra 2.32 — the fifth of the five niyamas. Also YS 1.23 and 2.1.',
    fruit_sutra: 'Yoga Sutra 2.45 — samādhi-siddhir īśvara-praṇidhānāt. "From surrender to the divine, samadhi is attained."',
    glyph: '🪷',
    one_liner: 'The tenth ethic. The dedication of all actions and their fruits to something larger than the self — the practice that, alone among the ten, Patanjali says leads directly to samadhi.',
    meaning: 'Ishvara Pranidhana is the deepest niyama and the only one Patanjali names *three times* in the Yoga Sutras (at 1.23, 2.1, and 2.32). The Sanskrit is built from *Ishvara* (the Lord, the personal aspect of the absolute, the chosen face of the divine) and *pranidhana* (devotion, dedication, the laying-down of one\'s effort at another\'s feet). The classical reading is precise: every action you take, every fruit of every action, is dedicated to something larger than personal benefit. You still act; you still strive; you still produce. But the *fruit* — the result, the reward, the credit — is given to the divine. This is the *karma yoga* the Bhagavad Gita names as the path to liberation: *karmaṇy evādhikāras te, mā phaleṣu kadācana* (2.47) — "you have a right to action, never to the fruits of action".',
    what_it_actually_is: 'Ishvara Pranidhana is the antidote to the entire grasping-and-accumulating apparatus the modern self runs on. The action remains the practitioner\'s; the outcome belongs to a larger order. Patanjali is famously flexible about what *Ishvara* means — for the theist, a personal God; for the non-theist, the chosen absolute (the Tao, *brahman*, the ground of being); for the agnostic, "what is larger than my personal will". The practice does not require metaphysical certainty; it requires the daily, structural orientation of one\'s actions toward a horizon larger than personal gain. The fruit Patanjali names (YS 2.45) is striking: *samadhi-siddhi* — the attainment of samadhi, the eighth limb, the goal of the entire eight-limbed path. Patanjali is saying: the fifth niyama, practiced fully, *bypasses the rest of the path* and lands the practitioner in the goal. This is why he names it three times.',
    thirty_day_practice: '**Each morning.** Before beginning the day, name one action you will take and dedicate its fruit explicitly. "This meeting today — I dedicate its outcome to my team\'s benefit, not my own positioning." **Before meals.** Take three seconds to dedicate the meal — to those who grew the food, to those who cooked it, to the body that will be nourished. **Before significant decisions.** Pause. Ask: who is this decision for? Re-orient if the answer is "for the personal self". **Each evening.** Review the day. Where did you act from grasping? Where did you act from dedication? Notice without judgment. **By day 30** you will have built the muscle of action-without-grasping-fruit. The work becomes lighter; paradoxically, the results often become better, because the energy of grasping has been replaced by the energy of offering.',
    in_love: 'Ishvara-pranidhana-love is the practice of dedicating the relationship to something larger than the personal benefit of either partner. The couple oriented toward their family, their community, their shared service — the partnership becomes a vehicle, not a destination. The practice does not erase intimacy; it deepens it by removing the suffocating pressure of two people trying to make each other into the meaning of life.',
    in_work: 'The professional whose work is dedicated. They do the job because the job needs doing — for the customer, for the colleague who depends on them, for the larger contribution. The credit, the bonus, the title are received without grasping. The ishvara-pranidhana-trained professional is rare and unmistakable; they are not climbing toward something, they are offering toward something.',
    the_gift: 'YS 2.45 — *samadhi-siddhi*. The direct attainment of samadhi, the goal of the entire eight-limbed path. Patanjali places this fruit at the end of the niyamas to signal: this single practice, sustained fully, is the path. Every other limb is preparation; ishvara-pranidhana is arrival.',
    the_shadow: 'Ishvara-pranidhana as bypass of agency. The practitioner who calls passivity "surrender", who refuses to act under cover of "letting the divine handle it" — has misread the niyama. Patanjali is clear: the action is still the practitioner\'s; only the fruit is offered. The shadow is also the spiritual-elitism that uses ishvara-pranidhana as proof of advanced practice — declaring devotion while continuing to grasp. Equally shadowed: the cult-form, in which surrender to "the divine" becomes surrender to a manipulative teacher\'s personal will. The classical ishvara is not a person; it is the ultimate. Real surrender is structural, not relational.',
    pair_with: 'Mantra practice — every mantra is, in essence, ishvara-pranidhana made portable. The dedication of breath and speech to what is larger.',
    pair_with_link: '/gab44/mantras',
    pair_with_link_text: 'Mantra practice',
    key_questions: [
      'What action today could I take such that I dedicate its fruit to something larger than my personal benefit — and feel the difference in how the action is conducted?',
      'Where in my life am I grasping at outcomes that, if I released them, would still arrive (or wouldn\'t, and that would be alright)?',
      'If I oriented one specific area of my life toward something larger than personal gain — career, relationship, creative work — what would change in how I move through it?'
    ]
  }
]

const ETHIC_BY_SLUG: Record<string, EthicGuide> = Object.fromEntries(ETHICS.map((e) => [e.slug, e]))

export const ETHIC_SLUGS = ETHICS.map((e) => e.slug)

export function isEthicSlug(s: string): boolean {
  return s in ETHIC_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Yamas = sunrise saffron (outward, how you treat the world).
// Niyamas = dusk indigo (inward, how you tend yourself).
const FAMILY_ACCENT: Record<'yama' | 'niyama', { c1: string; c2: string; label: string }> = {
  yama:   { c1: '#e89a4a', c2: '#a85820', label: 'Yama · outward ethic · how you treat the world' },
  niyama: { c1: '#6c6aa8', c2: '#322f6c', label: 'Niyama · inward ethic · how you tend yourself' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function ethicPageHTML(slug: string): string {
  const r = ETHIC_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family]
  const readingHref = `/gab44/reading?ref=ethic-${slug}`

  const familyText = r.family === 'yama' ? 'Yama' : 'Niyama'
  const title = `${escapeHtml(r.text)} (${escapeHtml(r.sanskrit)}) — ${familyText} ${r.position} · gab44 ✨`
  const description = `What ${r.text} (${r.translation.split('.')[0]}) actually means in Patanjali's Yoga Sutra. The sutra reference, the meaning, what it actually is, a 30-day practice, in love, in work, the gift, the shadow, the fruit Patanjali names. Hand-written, lineage-honest, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Yamas & Niyamas', item: `${SITE_URL}/gab44/yamas-niyamas` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/yamas-niyamas/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — ${familyText} ${r.position} of the Yoga Sutra`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/yamas-niyamas/${slug}`,
        about: `${r.text}, Patanjali Yoga Sutra, ${familyText}, yoga ethics`
      }
    ]
  })

  // Family siblings — show the other 4 in the same family.
  const siblingsHtml = ETHICS.filter((q) => q.family === r.family && q.slug !== slug).map((q) => {
    return `<a class="sib" href="/gab44/yamas-niyamas/${q.slug}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/yamas-niyamas/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/yamas-niyamas/${slug}" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root { ${PALETTE} --c1:${accent.c1}; --c2:${accent.c2}; }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body {
    font-family: ui-serif, Georgia, 'Cormorant Garamond', serif;
    background: var(--bg-0); color: var(--fg);
    line-height: 1.65; -webkit-font-smoothing: antialiased;
  }
  main { max-width: 760px; margin: 0 auto; padding: 32px 22px 96px }
  nav.crumbs { font-size: 13px; color: var(--fg-muted); margin-bottom: 16px }
  nav.crumbs a { color: var(--fg-dim); text-decoration: none; border-bottom: 1px dotted var(--line-strong) }
  .hero {
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent);
    padding: 36px 28px; border-radius: 16px; margin-bottom: 28px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }
  .hero .symbol { font-size: 56px; line-height: 1 }
  .hero h1 { margin: 12px 0 6px; font-size: 38px; font-weight: 700; letter-spacing: -0.02em }
  .hero .sanskrit { font-size: 22px; opacity: 0.85; margin: 0 0 12px }
  .hero .family { font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
  .sutra-box {
    background: var(--bg-1); border: 1px solid var(--line); border-left: 4px solid var(--c1);
    padding: 14px 18px; margin: 0 0 22px; border-radius: 10px;
    font-size: 14px; color: var(--fg-dim);
  }
  .sutra-box strong { color: var(--c2); display: block; margin-bottom: 4px; font-weight: 700 }
  section { padding: 22px 0; border-bottom: 1px solid var(--line) }
  section:last-of-type { border-bottom: none }
  section h2 { font-size: 22px; margin: 0 0 10px; color: var(--c2); letter-spacing: -0.01em }
  section p { margin: 0 0 8px; color: var(--fg) }
  .fruit-box {
    background: linear-gradient(135deg, var(--bg-2) 0%, var(--bg-3) 100%);
    border-radius: 12px; padding: 18px 22px; margin: 4px 0 6px;
    border-left: 4px solid var(--c1);
  }
  .fruit-box strong { display: block; color: var(--c2); font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px }
  .fruit-box p { margin: 0; font-style: italic }
  .pair-grid { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 8px }
  .pair-grid a {
    display: block; padding: 12px 14px; border: 1px solid var(--line);
    border-radius: 10px; text-decoration: none; color: var(--fg-dim);
    background: var(--bg-1); font-size: 14px;
    transition: transform 0.12s ease, border-color 0.12s ease;
  }
  .pair-grid a:hover { transform: translateY(-1px); border-color: var(--c1) }
  .pair-grid a .lbl { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--fg-muted); margin-bottom: 3px }
  .questions ol { padding-left: 22px; margin: 8px 0 0 }
  .questions li { padding: 6px 0; color: var(--fg) }
  .cta-strip {
    margin-top: 28px; padding: 22px;
    background: linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-2) 100%);
    border-radius: 14px; border: 1px solid var(--line);
  }
  .cta-strip h3 { margin: 0 0 6px; color: var(--accent-2); font-size: 18px }
  .cta-strip p { margin: 0 0 12px; color: var(--fg-dim); font-size: 14px }
  .cta-strip a {
    display: inline-block; padding: 10px 18px;
    background: var(--accent); color: var(--fg-on-accent);
    text-decoration: none; border-radius: 999px; font-weight: 600; font-size: 14px;
  }
  .siblings { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
  .sib {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 14px; border-radius: 999px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none; font-size: 13px;
  }
  .sib .sym { font-size: 15px }
  footer { padding: 24px 0; color: var(--fg-muted); font-size: 13px; text-align: center }
  footer a { color: var(--fg-dim) }
</style>
</head>
<body>
<main>
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/yamas-niyamas">yamas &amp; niyamas</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${r.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="sanskrit">${escapeHtml(r.sanskrit)} · ${escapeHtml(r.translation)}</p>
    <p class="family">${escapeHtml(accent.label)} · #${r.position}</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <div class="sutra-box">
    <strong>The sutra</strong>
    ${escapeHtml(r.sutra_reference)}
  </div>

  <section><h2>What ${escapeHtml(r.text)} actually means</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>What it actually is</h2><p>${escapeHtml(r.what_it_actually_is)}</p></section>
  <section><h2>A 30-day practice</h2><p>${escapeHtml(r.thirty_day_practice)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>The gift (the fruit Patanjali names)</h2>
    <div class="fruit-box">
      <strong>${escapeHtml(r.fruit_sutra.split('—')[0].trim())}</strong>
      <p>${escapeHtml(r.fruit_sutra.split('—').slice(1).join('—').trim())}</p>
    </div>
    <p>${escapeHtml(r.the_gift)}</p>
  </section>
  <section><h2>The shadow</h2><p>${escapeHtml(r.the_shadow)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="${r.pair_with_link}"><span class="lbl">${escapeHtml(r.pair_with_link_text)}</span>${escapeHtml(r.pair_with)}</a>
      <a href="/gab44/limbs/${r.family === 'yama' ? 'yamas' : 'niyamas'}"><span class="lbl">Master frame</span>The ${r.family === 'yama' ? 'first' : 'second'} of the eight limbs — ${r.family === 'yama' ? 'the yamas' : 'the niyamas'} as a whole</a>
    </div>
  </section>

  <section class="questions">
    <h2>3 key questions</h2>
    <ol>
      <li>${escapeHtml(r.key_questions[0])}</li>
      <li>${escapeHtml(r.key_questions[1])}</li>
      <li>${escapeHtml(r.key_questions[2])}</li>
    </ol>
  </section>

  <div class="cta-strip">
    <h3>Want a $9 reading that names which ethic is most alive for you right now?</h3>
    <p>Your chart + the ethic the moment is asking you to deepen — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="siblings">${siblingsHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 10 yamas &amp; niyamas · <a href="/gab44/yamas-niyamas">index</a> · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function ethicsIndexHTML(): string {
  const yamaCards = ETHICS.filter((e) => e.family === 'yama').map((r) => {
    const acc = FAMILY_ACCENT.yama
    return `<a class="card" href="/gab44/yamas-niyamas/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${r.glyph}</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.sanskrit)}</span></h3>
      <p class="trans">${escapeHtml(r.translation.split('.')[0])}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const niyamaCards = ETHICS.filter((e) => e.family === 'niyama').map((r) => {
    const acc = FAMILY_ACCENT.niyama
    return `<a class="card" href="/gab44/yamas-niyamas/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${r.glyph}</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.sanskrit)}</span></h3>
      <p class="trans">${escapeHtml(r.translation.split('.')[0])}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = 'The 10 Yamas &amp; Niyamas of Yoga · Patanjali\'s Ethics · gab44 ✨'
  const description = 'Hand-written guides to the 10 ethics of Patanjali\'s Yoga Sutra — the 5 yamas (ahimsa, satya, asteya, brahmacharya, aparigraha) and the 5 niyamas (saucha, santosha, tapas, svadhyaya, ishvara-pranidhana). Lineage-honest, with 30-day practices, the gift, the shadow, and the fruit Patanjali names for each.'

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The 10 Yamas & Niyamas of Yoga',
    description: description.substring(0, 280),
    url: `${SITE_URL}/gab44/yamas-niyamas`,
    hasPart: ETHICS.map((r) => ({
      '@type': 'Article',
      name: `${r.text} — ${r.family === 'yama' ? 'Yama' : 'Niyama'} ${r.position}`,
      url: `${SITE_URL}/gab44/yamas-niyamas/${r.slug}`
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/yamas-niyamas" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 920px; margin: 0 auto; padding: 32px 22px 80px }
  nav.crumbs { font-size: 13px; color: var(--fg-muted); margin-bottom: 12px }
  nav.crumbs a { color: var(--fg-dim); text-decoration: none; border-bottom: 1px dotted var(--line-strong) }
  h1 { font-size: 36px; margin: 8px 0 6px; letter-spacing: -0.02em }
  h1 .accent { color: var(--accent) }
  .sub { color: var(--fg-dim); margin: 0 0 22px; font-size: 16px }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 20px; margin-bottom: 24px;
  }
  .intro h3 { margin: 0 0 8px; font-size: 16px; color: var(--accent-2) }
  .intro p { margin: 0 0 8px; font-size: 14px; color: var(--fg-dim) }
  h2.section { font-size: 22px; margin: 28px 0 14px; padding-bottom: 6px; border-bottom: 1px solid var(--line) }
  h2.section .sanskrit { font-size: 16px; opacity: 0.7; margin-left: 8px }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px }
  .card {
    --c1:#888; --c2:#444;
    display: block; padding: 22px 18px; border-radius: 14px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none;
    box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    transition: transform 0.15s ease;
  }
  .card:hover { transform: translateY(-2px) }
  .card .glyph { font-size: 32px; line-height: 1 }
  .card h3 { margin: 10px 0 4px; font-size: 20px }
  .card h3 .san { font-size: 14px; opacity: 0.78; margin-left: 6px }
  .card .trans { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; opacity: 0.78; margin: 0 0 8px }
  .card .lead { font-size: 13px; opacity: 0.92; margin: 0; font-style: italic }
  .reading-strip {
    margin-top: 28px; padding: 22px;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
    color: var(--fg-on-accent); border-radius: 14px;
  }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px }
  .reading-strip a { color: var(--fg-on-accent); border-bottom: 1px solid currentColor; text-decoration: none }
  footer { padding: 26px 0 0; color: var(--fg-muted); font-size: 13px; text-align: center }
  footer a { color: var(--fg-dim) }
</style>
</head>
<body>
<main>
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ yamas &amp; niyamas</nav>
  <h1>The 10 <span class="accent">Yamas &amp; Niyamas</span> — Patanjali's ethics</h1>
  <p class="sub">The 5 ethical restraints toward the world (yamas) + the 5 ethical observances toward the self (niyamas). The first two limbs of the eight-limb path, expanded into the 10 individual ethics they contain. From the Yoga Sutras (c. 200 BCE – 400 CE).</p>

  <div class="intro">
    <h3>How these work</h3>
    <p><strong>The yamas (sunrise/saffron)</strong> are <em>outward</em>: how you treat the world. Five negative prescriptions — do not harm, do not lie, do not steal, do not exploit, do not grasp — each of which Patanjali says, when established, produces a specific fruit (Yoga Sutra 2.35-2.39).</p>
    <p><strong>The niyamas (dusk/indigo)</strong> are <em>inward</em>: how you tend yourself. Five positive observances — be clean, be content, be disciplined, study yourself, surrender — each of which produces a deeper fruit (Yoga Sutra 2.40-2.45).</p>
    <p>The classical instruction: pick ONE ethic at a time. Sit with it for a month. Watch what changes. The whole path is built from the ground up.</p>
  </div>

  <h2 class="section">The 5 Yamas <span class="sanskrit">यम · outward ethics</span></h2>
  <div class="grid">${yamaCards}</div>

  <h2 class="section">The 5 Niyamas <span class="sanskrit">नियम · inward ethics</span></h2>
  <div class="grid">${niyamaCards}</div>

  <div class="reading-strip">
    <h2>Want to know which ethic the moment is asking you to deepen?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the yama or niyama your chart is asking for right now. <a href="/gab44/reading?ref=yamas-niyamas-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 10 yamas &amp; niyamas · <a href="/gab44">gab44</a> · <a href="/gab44/limbs">the master frame: 8 limbs</a></footer>
</main>
</body>
</html>`
}

