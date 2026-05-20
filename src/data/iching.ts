// I Ching — SEO funnel — /gab44/iching (index) +
// /gab44/iching/{slug}. 64 hand-written hexagram guides — the full
// classical King Wen sequence, from #1 The Creative through #64 Before
// Completion. **Peer to /gab44/tarot/minor — same immediate-after-the-
// pull search intent, different lineage.** Most other "i ching meaning"
// pages are listicles; the gab44 framing names the lineage (Zhou
// dynasty, c. 1000 BCE; Confucius commentaries c. 500 BCE; Wilhelm-Baynes
// 1923 translation; Wang Bi commentary 226-249 CE) AND the shadow per
// hexagram, AND treats every reading as inquiry into a specific life
// situation rather than a fortune-cookie. Each guide is ~500 words
// across 9 sections (one-liner, meaning + tradition, when you pull this
// hexagram, the changing lines / what mutation means, in love, in work,
// the gift, the shadow, 3 key questions).
//
// **Family-tinted gradient (4×16):** Beginnings (#1-16) = jade — the
// foundational images, source-and-receive, the early texture of the
// situation. Cycles (#17-32) = amber — the relational hexagrams, how
// the situation moves, follows, decays, returns. Trials (#33-48) =
// obsidian — the trial-and-rectification hexagrams, the descent and
// the well. Completion (#49-64) = violet — the transformation
// hexagrams, revolution, cauldron, thunder, the wanderer, before-and-
// after completion.
//
// **Cross-funnels into BOTH revenue lanes** — every hexagram links to
// /gab44/reading?ref=iching-{slug} ($9 Phase 1D), and selected
// hexagrams cross-link to /healing/script/{slug} (Phase 1A audio) +
// /gab44/chakras/{slug} where the energetic mapping is direct + to the
// neighbouring hexagram in the King Wen sequence.
//
// Routes registered in src/index.ts at /gab44/iching and
// /gab44/iching/:slug. /gab44/:sign uses an explicit zodiac regex
// constraint, so 'iching' will not collide. Article + BreadcrumbList
// JSON-LD on every page; CollectionPage schema on the index.

import { SITE_URL } from '@/lib/identity'

export interface Hexagram {
  n: number
  slug: string
  chinese: string
  pinyin: string
  name_en: string
  glyph: string                   // unicode hexagram, U+4DC0..U+4DFF
  trigrams: string                // "above / below" in plain English
  family: 'beginnings' | 'cycles' | 'trials' | 'completion'
  one_liner: string
  meaning: string
  when_pulled: string
  changing_lines: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  key_questions: [string, string, string]
}

export const HEXAGRAMS: Hexagram[] = [
  {
    n: 1, slug: '1-the-creative', chinese: '乾', pinyin: 'Qián', name_en: 'The Creative',
    glyph: '䷀', trigrams: 'Heaven above Heaven', family: 'beginnings',
    one_liner: 'Pure creative force — the season the river runs uphill, six dragons rising in turn.',
    meaning: 'Hexagram 1, *Qián*, is the image of pure yang — six unbroken lines, heaven above heaven, the dragon force that originates everything. The Wilhelm-Baynes translation calls it *the Creative*, the Zhou-yi calls it *the originating*. It is the season the world is on your side: ideas arrive, doors open, the project that was stuck for a year suddenly moves. The Confucian wing of the I Ching ("the Great Treatise") says of this hexagram: *the great originating, success, furthering through perseverance*. The classical commentary attaches a dragon-image to each line — the dragon hidden in the deep, the dragon rising on the field, the dragon flying in the heavens — naming the rhythm of the rising creative force as it learns to use itself.',
    when_pulled: 'You have been given a season of green-light — what was blocked is unblocking, what was hidden is being seen. Do not waste it on small targets. Aim at the work the soul actually came here to do. The classical caution: *the dragon overflies its station* — pride is the only failure mode of *Qián*.',
    changing_lines: 'A changing 6 in the top line is the famous *arrogant dragon will have cause to repent* — the warning that pure rising force, taken past its proper limit, falls. Most other lines change toward hexagrams of consolidation; the lesson is that pure creativity must, at some point, take form.',
    in_love: 'A relationship in the *Qián* season is being given creative permission — the move you have wanted to make, the truth you have been afraid to say. Make it. Reversed/shadow: pride that mistakes its own desire for the other\'s permission.',
    in_work: 'The project, the launch, the leap — the world is supplying wind. Build, ship, claim. Do not under-aim. The classical text does not warn against ambition; it warns against ambition without rhythm.',
    the_gift: '*Originating force.* The recognition that you have been given access to the source-energy that brings new things into being. Use it for something that matters.',
    the_shadow: 'Pure rising force without form. The dragon that flies past its station — pride, overreach, mistaking the season for the self. *Qián* without *Kūn* (the Receptive) is a flood that destroys the field it could have watered.',
    key_questions: [
      'What in my life is being given green-light right now that I have been treating as still-stuck?',
      'Where am I aiming small because I do not trust the season I am in?',
      'What rhythm — what receptive form — does this rising force need to land cleanly?'
    ]
  },
  {
    n: 2, slug: '2-the-receptive', chinese: '坤', pinyin: 'Kūn', name_en: 'The Receptive',
    glyph: '䷁', trigrams: 'Earth above Earth', family: 'beginnings',
    one_liner: 'Pure receptive ground — the soil that lets the seed become a forest, the mare that carries without breaking.',
    meaning: 'Hexagram 2, *Kūn*, is the image of pure yin — six broken lines, earth above earth, the receptive ground that gives form to everything yang originates. *Qián* and *Kūn* are the two poles of the entire book; the remaining 62 hexagrams are how their dance plays out in time. The classical commentary attaches the image of the *mare* to *Kūn* — power that is yielding rather than driving, endurance that does not break under load. The Wilhelm-Baynes preface stresses this: receptivity in the I Ching is not passivity. It is the disciplined art of holding the field still enough that the seed can root, the partner can speak, the season can change. The hexagram counsels *furthering through the perseverance of a mare*: arrive at where you are going by carrying steadily, not by sprinting.',
    when_pulled: 'You are being asked to receive — to carry, to wait, to make the ground ready rather than to drive the outcome. The work right now is to soften, to listen, to let what is forming form on its own time. Trying to push will produce the opposite of what you want. The mare arrives.',
    changing_lines: 'The classical caution at line 1 is *when there is hoarfrost underfoot, solid ice is not far off* — small signals are predicting large movements. Read the small signs. Line 6 is *dragons fight in the meadow, their blood is black and yellow* — pure receptivity collapsing into pure resistance. The lesson: receptivity is *active*, never collapsed.',
    in_love: 'The relationship is being asked to receive — your partner, your kid, your parent, yourself. Stop pushing the conversation toward your conclusion. Let the other arrive on their own time. Reversed: collapse-as-receptivity, the partner who lets the harm continue under the banner of *yielding*. Receptivity has a backbone.',
    in_work: 'The project does not need more force. It needs the ground prepared — the relationships warmed, the documentation written, the field made hospitable so the work can land. Slow is not lazy. The mare gets there.',
    the_gift: '*Carrying power.* The recognition that the strongest position is sometimes the one that yields, holds the field, and does not break under load. The art of receptivity is the art of arriving without forcing.',
    the_shadow: 'Receptivity collapsed into passivity. The person who calls staying-too-long *yielding* — the marriage that should have ended five years ago, the job that should have been quit, the conversation that should have been had. The mare carries; she does not lie down in the road.',
    key_questions: [
      'What in my life right now is asking to be received rather than driven?',
      'Where am I calling collapse "yielding" — staying past the point of usefulness in the name of patience?',
      'What does the mare-version of this carry look like — strong, steady, unbroken, going at her own pace?'
    ]
  },
  {
    n: 3, slug: '3-difficulty-at-the-beginning', chinese: '屯', pinyin: 'Zhūn', name_en: 'Difficulty at the Beginning',
    glyph: '䷂', trigrams: 'Water above Thunder', family: 'beginnings',
    one_liner: 'The blade of grass shouldering through frozen ground — birth-pang, sprout-pain, the difficulty that means new life is arriving.',
    meaning: 'Hexagram 3, *Zhūn*, is the third hexagram for a precise reason — after the pure originating force (1) and the pure receptive ground (2), the third movement is *the meeting of the two*, and the meeting is hard. Yang has begun to push into yin; the seed is in the soil but has not yet broken the surface. The classical image is *the blade of grass shouldering through frozen earth* — the difficulty that means *life*, not the difficulty that means *failure*. Wilhelm-Baynes calls it *Difficulty at the Beginning*. The counsel is precise: this is not the time to push to the destination; this is the time to *gather helpers*, find the people who can carry parts of the load, and accept that the early days of every real undertaking are mud.',
    when_pulled: 'The thing you are starting is real, and it is hard, and that does not mean you are doing it wrong. The hardness *is the proof* that you are doing it for the first time. Do not interpret the difficulty as a verdict. Do not push alone. Find help. The sprout breaks through.',
    changing_lines: 'A changing 1 is *hesitation, hindrance — it furthers one to remain persevering* — the small line on which the entire venture turns; do not abandon at the first obstacle. Line 5 is *difficulty in blessing; in small matters, fortune; in great matters, misfortune* — when the venture is large, do not try to do it alone.',
    in_love: 'The new relationship is hard at the beginning — that does not mean it is wrong. The early days of every real partnership are the meeting of two whole histories; some grinding is normal. Reversed: ignoring real warnings under the banner of *every beginning is hard*. Difficulty that *teaches* is sprouting; difficulty that *only takes* is the wrong garden.',
    in_work: 'The new project is in mud. Stop trying to be a one-person army. The hexagram\'s exact counsel is *it furthers one to appoint helpers*. Find the collaborator, hire the help, ask the favour. The early days are not the time to be heroic.',
    the_gift: '*The first sprout.* The recognition that hardness at the beginning is sometimes *the proof of life*, not the verdict against it. New things take time to break the surface.',
    the_shadow: 'Romanticising difficulty. Treating every painful early stage as sacred, when sometimes the early pain is the right signal that the soil is wrong. Test: does the difficulty *teach* — do you see growth, even slowly? Or does it only *exhaust*?',
    key_questions: [
      'What new thing am I starting that is hard right now — and where am I confusing the hardness for a verdict?',
      'Who is the helper I have not yet asked — the collaborator, the friend, the mentor — that this difficulty is asking me to find?',
      'Is this the right soil? Does the difficulty *teach*, or does it only deplete?'
    ]
  },
  {
    n: 4, slug: '4-youthful-folly', chinese: '蒙', pinyin: 'Méng', name_en: 'Youthful Folly',
    glyph: '䷃', trigrams: 'Mountain above Water', family: 'beginnings',
    one_liner: 'The young spring at the foot of the mountain — beginner\'s confusion that becomes wisdom only if it remains open to teaching.',
    meaning: 'Hexagram 4, *Méng*, is the image of the spring emerging at the foot of the mountain — fresh water that has not yet learned its own course. The classical translation is *Youthful Folly* — the inexperience, the not-yet-knowing, the beginner\'s mind in its both-gift-and-trap form. The hexagram\'s most-cited line is *it is not I who seek the young fool, the young fool seeks me; at the first oracle I inform him; if he asks two or three times, it is importunity; if he importunes, I give him no information*. The lesson is precise: the teaching is available, but only on the terms of the teaching, not the terms of the seeker. The young fool who asks the same question three different ways looking for the answer he wants is not actually learning. He is shopping.',
    when_pulled: 'You are at a *learning* moment — and the question is whether you can stay open enough to actually be taught. Resist the urge to ask the question again until you get the answer you wanted. Resist the urge to know already. The spring at the foot of the mountain has not learned its course; that is not its failure, it is its task.',
    changing_lines: 'Line 4 is *embarrassed folly brings humiliation* — the moment of being caught not-knowing, which is in fact the threshold of knowing. The classical counsel is to *not flinch from the embarrassment* — the crack is the doorway. Line 6, *in punishing folly, it does not further to commit transgressions* — do not let teaching become cruelty.',
    in_love: 'A young or new relationship — or an old relationship being asked to begin again — needs *teachability*. The question is whether both partners can stay students of each other rather than experts on each other. Reversed: shopping for the answer you wanted, asking the same question of three different friends until one validates you.',
    in_work: 'You are in a *learning* phase — new role, new domain, new tool. The trap is pretending you already know in order to avoid the embarrassment of asking. The teacher will not chase you. Ask once, well, and listen.',
    the_gift: '*Beginner\'s mind.* The recognition that not-knowing is sometimes the most powerful position — if you can stay in it long enough to actually learn rather than rushing to *appear competent*.',
    the_shadow: 'Pretending to know to avoid embarrassment. Asking three friends until one tells you what you wanted to hear. Treating teaching as a vending machine.',
    key_questions: [
      'Where am I shopping for the answer I want rather than asking once and listening?',
      'What am I pretending to already know in order to avoid the embarrassment of being a student?',
      'Who is my actual teacher in this — the person whose answer I would respect even if it cost me?'
    ]
  },
  {
    n: 5, slug: '5-waiting', chinese: '需', pinyin: 'Xū', name_en: 'Waiting',
    glyph: '䷄', trigrams: 'Water above Heaven', family: 'beginnings',
    one_liner: 'Storm-cloud over heaven — the rain has not yet fallen; the wait is the work.',
    meaning: 'Hexagram 5, *Xū*, is the image of clouds gathered in the sky but not yet releasing their rain — the moment between the build-up and the breaking, when the only correct action is to wait, eat, drink, and keep your strength for the moment that has not yet arrived. The Wilhelm-Baynes translation is *Waiting (Nourishment)*; the secondary name is precise — the wait is *active*, you are *feeding the strength* the storm will require. The classical text says *if you are sincere, you have light and success; perseverance brings good fortune; it furthers one to cross the great water*. The promise is that the wait is not empty — the storm *is coming* — but the discipline is not to mistake impatience for progress.',
    when_pulled: 'You are being asked to wait — and the wait is the work. The thing will arrive; the question is whether you arrive at it with strength intact or with your nerves shredded by impatience. Eat well. Sleep. Keep the body strong. When the moment comes, you will need it.',
    changing_lines: 'Line 3 is *waiting in the mud, the enemy approaches* — the warning that waiting in the wrong place can attract trouble. Line 6 is the famous *one falls into the pit; three uninvited guests arrive; honour them, and in the end there is good fortune* — the unexpected arrival that, if received with hospitality rather than panic, becomes the answer.',
    in_love: 'The relationship needs time. The conversation you want to force is not ready. Trust the gestation. Reversed: the partner who calls *waiting forever* a virtue — at some point the wait becomes avoidance.',
    in_work: 'The launch, the response, the breakthrough is on its own clock. Pushing now will *cost you* the strength you will need when it arrives. Use the wait. Build the sub-system, write the better copy, train the body. The storm comes.',
    the_gift: '*Active patience.* The recognition that the wait is not nothing — it is the period of feeding the strength the next chapter will require.',
    the_shadow: 'Confusing waiting with avoidance. Calling perpetual hovering "patience". The hexagram counsels waiting *until the storm arrives*; it does not counsel never moving.',
    key_questions: [
      'What am I being asked to wait for — and how am I using the wait? Am I feeding the strength I will need, or am I bleeding it?',
      'Where am I calling avoidance "patience"?',
      'When the storm comes, will I have the body and the nerves to meet it?'
    ]
  },
  {
    n: 6, slug: '6-conflict', chinese: '訟', pinyin: 'Sòng', name_en: 'Conflict',
    glyph: '䷅', trigrams: 'Heaven above Water', family: 'beginnings',
    one_liner: 'Heaven rising, water sinking — two forces moving apart; the litigation that wins, but at the cost of the relationship.',
    meaning: 'Hexagram 6, *Sòng*, is the image of heaven and water moving in opposite directions — two parties whose interests have diverged to the point of contention. The classical counsel is sober: *if one is sincere and meets with obstruction, the way is barred; halfway, good fortune; carrying it through to the end, misfortune*. The hexagram does *not* counsel conflict-avoidance — it acknowledges that contention is real and sometimes necessary — but it counsels stopping at the right moment. The litigation that you press to the bitter end will *win* and cost you the field. The disagreement that you walk away from at *halfway* preserves the relationship and your own integrity. *It furthers one to see the great man* — find the wise third party (mediator, mentor, elder) before you escalate. *It does not further one to cross the great water* — do not start the new venture with this person while the conflict is unresolved.',
    when_pulled: 'You are in a contention. The hexagram\'s precise counsel is *halfway, good fortune* — the disagreement, named honestly and stopped before total war, is the right shape. Pushing to the end is the failure mode.',
    changing_lines: 'Line 4 is *unable to engage in conflict, one returns to fate, changes attitude, finds peace in perseverance — good fortune*. The hexagram\'s most-quoted teaching: the win is not in pressing through, it is in *changing one\'s own ground* and finding peace there.',
    in_love: 'The fight is real. The temptation is to *win*. The hexagram says: name the disagreement, hear what is being said underneath it, and stop at *halfway*. The marriage that survives is the one where neither partner needs to deliver the killing blow.',
    in_work: 'The contractual dispute, the colleague-conflict, the contested decision: stop at halfway. Find the third party. Do not press through. The case you would win in court is the case that ends your reputation.',
    the_gift: '*The half-way stop.* The recognition that the strongest position in a conflict is sometimes the one that names it cleanly and walks away before total war.',
    the_shadow: 'Pressing through to total victory. Winning the litigation and losing the field. The friend who has never been wrong in a single argument and has no friends left.',
    key_questions: [
      'What am I in conflict with right now — and have I passed the halfway-stop point?',
      'Who is the wise third party I have not yet consulted?',
      'What does it cost me to *win* this — and is the cost more than the victory is worth?'
    ]
  },
  {
    n: 7, slug: '7-the-army', chinese: '師', pinyin: 'Shī', name_en: 'The Army',
    glyph: '䷆', trigrams: 'Earth above Water', family: 'beginnings',
    one_liner: 'Water hidden under earth — the disciplined force, marshalled with cause; the army that is righteous because it is restrained.',
    meaning: 'Hexagram 7, *Shī*, is the image of water hidden in the earth — concealed force, disciplined and ready, but not yet expressed. The classical translation is *the Army*. The hexagram\'s counsel is *the army needs perseverance and a strong man — good fortune without blame*. The lesson is precise: power is righteous only when it is disciplined, when there is a cause that justifies it, and when there is a leader (literal or internal) capable of restraint. The hexagram does *not* counsel pacifism — there are times power must be marshalled — but it counsels the disciplined kind, the kind that knows why it is rising and what it is for.',
    when_pulled: 'You are in a season that requires *marshalled force* — the disciplined push, the boundary held, the limit enforced. The hexagram counsels: do this *with cause*, with rules, with a strong internal leader. Power without discipline is mob; power with discipline is the army.',
    changing_lines: 'Line 5 is *if there is game in the field, it furthers one to catch it; without blame; the eldest leads the army; the younger transports corpses* — the warning that mixed leadership in a campaign is fatal. Single command, clear cause.',
    in_love: 'The boundary you have been postponing must be held. The conversation you have been softening must be had with the full clarity of your cause. Reversed: aggression-as-boundary, the partner who calls cruelty *standing up for myself*.',
    in_work: 'Marshal the team. Hold the line. The campaign requires discipline and clear command — not consensus, not committee, not negotiation-of-the-obvious. Lead.',
    the_gift: '*Disciplined power.* The recognition that force, when righteous and restrained, is sometimes the only thing that protects what is worth protecting.',
    the_shadow: 'Power without discipline. The mob, the rage-spiral, the boundary held in cruelty rather than in clarity. The army with no cause is a gang.',
    key_questions: [
      'What in my life right now requires marshalled force — the boundary held, the limit enforced?',
      'Do I have a clear cause, or am I about to use power without discipline?',
      'Who is the strong man — the internal leader — who must rise in me to do this cleanly?'
    ]
  },
  {
    n: 8, slug: '8-holding-together', chinese: '比', pinyin: 'Bǐ', name_en: 'Holding Together (Union)',
    glyph: '䷇', trigrams: 'Water above Earth', family: 'beginnings',
    one_liner: 'Water gathering on earth — the village pool that everyone shares; the union that becomes the centre of belonging.',
    meaning: 'Hexagram 8, *Bǐ*, is the image of water gathering on earth — a pool, a lake, the village well around which the community forms. The classical name is *Holding Together (Union)*. The hexagram\'s counsel is *good fortune; inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; then there is no blame*. The lesson: union is good *when the centre of the union is sound*. If you are joining the gathering, ask first whether the centre — the leader, the project, the relationship, the cause — is one you can give your sublimity, constancy, and perseverance to. If not, do not join. *Late-comers find misfortune* — those who hesitate too long miss the gathering.',
    when_pulled: 'A union is forming around you — a team, a partnership, a community. The hexagram says *yes, but ask first*. Is the centre sound? Can you give it your full presence? If yes, do not be the late-comer. If no, do not be the late-leaver.',
    changing_lines: 'Line 5 is *manifestation of holding together; the king uses beaters on three sides only — game in front of him is allowed to escape* — the counsel that the leader of a union must allow voluntary belonging, never coerce it. Line 6 is *holding together without a head — misfortune* — union without leadership disperses.',
    in_love: 'The relationship is asking for full commitment. Ask first: is the centre sound? Then commit fully. Half-presence in union is worse than absence.',
    in_work: 'Join the team or do not. Half-membership is the worst of both worlds. If the project, the company, the cause is sound — give it everything. If not, leave cleanly.',
    the_gift: '*Belonging to a sound centre.* The recognition that union, when given to a centre worth uniting around, is one of the great human goods.',
    the_shadow: 'Half-presence. The team-member who is always almost-leaving and never-fully-here. The partner who is in the marriage and not in the marriage. Union requires a full yes.',
    key_questions: [
      'What union — relationship, team, community, cause — am I being asked to fully join?',
      'Is the centre sound? Can I give it my full sublimity, constancy, perseverance?',
      'Where am I half-present, costing both myself and the union the full power of being in?'
    ]
  },
  {
    n: 9, slug: '9-small-taming', chinese: '小畜', pinyin: 'Xiǎo Chù', name_en: 'Small Taming',
    glyph: '䷈', trigrams: 'Wind above Heaven', family: 'beginnings',
    one_liner: 'Wind rising into heaven — clouds gathering but no rain yet; small accumulation, small adjustment, small influence.',
    meaning: 'Hexagram 9, *Xiǎo Chù*, is the image of wind moving in the upper sky — clouds gathering, the storm not yet arrived. The classical name is *Small Taming* — small accumulation, small restraint, small influence. The hexagram counsels patience with the small: this is not the season of large breakthrough; it is the season of *the small move that prepares the field*. Refine the draft. Polish the routine. Restrain the impulse to push for the big result. The cumulus over your head will be a thunderstorm — eventually — but right now it is just clouds.',
    when_pulled: 'You are in a *small* season. The big breakthrough is not today. Today is the day the draft gets one more pass, the muscle gets one more set, the relationship gets one more honest sentence. Honour the small. The storm is forming.',
    changing_lines: 'Line 4 is *if you are sincere, blood vanishes and fear gives way; no blame* — sincerity in the small move dissolves the fear that the wait is forever. Line 6 is *the rain comes, the rest is at hand; it is owing to the steady accumulation of small virtues* — the storm finally arrives, and it arrived *because* of the small disciplines.',
    in_love: 'No grand gesture today. Today is the small kindness, the honest sentence, the half-hour of full presence. The relationship deepens by accumulation, not by breakthrough.',
    in_work: 'The big launch is not today. The small refinement, the careful pass, the one extra hour on the proposal — these are the day\'s work. The accumulation makes the storm.',
    the_gift: '*The small accumulation.* The recognition that most great things were built by people who refused to despise the small move.',
    the_shadow: 'Despising the small. The person who only respects breakthrough and treats every small day as wasted. The storm forms by accumulation; despise the small, lose the storm.',
    key_questions: [
      'What small move is today asking me to make — that I am tempted to skip because it does not feel big enough?',
      'Where am I despising the accumulation that is actually building the breakthrough I want?',
      'What discipline — small, daily, unglamorous — is mine to keep right now?'
    ]
  },
  {
    n: 10, slug: '10-treading', chinese: '履', pinyin: 'Lǚ', name_en: 'Treading (Conduct)',
    glyph: '䷉', trigrams: 'Heaven above Lake', family: 'beginnings',
    one_liner: 'Treading on the tail of the tiger — the careful step in dangerous company; conduct as protection.',
    meaning: 'Hexagram 10, *Lǚ*, is the image of stepping carefully — the foot on the tail of the tiger, the lake under heaven. The classical name is *Treading (Conduct)*. The hexagram\'s most-cited line: *treading on the tail of the tiger; it does not bite the man — success*. The lesson is precise: in dangerous company, in delicate situations, in encounters where one false move would be fatal, *conduct itself is the protection*. The careful, respectful, attentive step preserves you in conditions where force would be punished.',
    when_pulled: 'You are in delicate company — a powerful person, a dangerous situation, a relationship at the threshold. The hexagram says: *conduct yourself well and you will pass through unharmed*. Watch the tone. Watch the timing. Watch the small respect.',
    changing_lines: 'Line 3 is *a one-eyed man can see; a lame man can tread; he treads on the tail of the tiger; the tiger bites — misfortune* — the warning that overconfidence in delicate conditions is fatal. Know your limits.',
    in_love: 'A delicate moment in the relationship. The tone of the conversation matters more than the content. Conduct itself is the protection. Reversed: walking on eggshells forever — at some point real conversation must happen. Treading is the *crossing*; do not turn it into the destination.',
    in_work: 'You are dealing with a powerful client, a delicate negotiation, a high-stakes meeting. *Conduct itself is the protection*. Tone, timing, small respect. The tiger does not bite.',
    the_gift: '*Right conduct as armour.* The recognition that in delicate situations, *how* you do something matters more than *what* you do.',
    the_shadow: 'Treading forever — eggshells as a permanent state. At some point the careful step must become the honest step; perpetual deference is its own failure.',
    key_questions: [
      'What dangerous or delicate situation am I in right now where conduct itself is the protection?',
      'Where am I treading by overconfidence — assuming the tiger will not bite?',
      'Where am I treading forever — turning a careful crossing into permanent self-erasure?'
    ]
  },
  {
    n: 11, slug: '11-peace', chinese: '泰', pinyin: 'Tài', name_en: 'Peace',
    glyph: '䷊', trigrams: 'Earth above Heaven', family: 'beginnings',
    one_liner: 'Heaven below earth — the rare alignment when the small and the great work together; the season of peace.',
    meaning: 'Hexagram 11, *Tài*, is one of the most-loved hexagrams in the classical text — the image of heaven below earth, which sounds backwards, but is precisely the point. When the receptive yin is *above* the creative yang, the two flow into each other; the great descends to meet the small, the small rises to meet the great. The classical translation is *Peace*. The hexagram\'s counsel: *the small departs, the great approaches — good fortune; success*. Peace in the I Ching sense is not absence of trouble; it is *correct alignment* — when the right things are in the right places and the natural rhythms can move.',
    when_pulled: 'A season of *Tài* is upon you — the great and the small are in the right relationship, the obstacles are dissolving, what was blocked is moving. Use it. Plant the seeds. Build the relationships. Make the bold moves you have been postponing. *Tài* does not last forever — the I Ching is precise about this — but while it is here, it is here.',
    changing_lines: 'Line 6 is the famous *the wall falls back into the moat; do not use the army; from your own town, the orders come; perseverance brings humiliation* — the warning that *Tài* always tips into its opposite (#12) eventually, and the wise course is to consolidate near home rather than overreach as the season turns.',
    in_love: 'The relationship is in alignment. Receive it. Do not waste *Tài* on small grievances. Build the long thing. The small departs; the great approaches.',
    in_work: 'A breakthrough season. The doors are open. Walk through them. Build the partnership, ship the project, claim the territory. Use the alignment.',
    the_gift: '*Right relationship.* The recognition that peace is not nothing — it is the precise condition under which everything good becomes possible.',
    the_shadow: 'Wasting *Tài*. Spending the season of peace on small grievances, small jealousies, small fears — and waking up after the season turns realising you did not build during the time you could have built.',
    key_questions: [
      'What is in alignment in my life right now that I have been failing to receive?',
      'What am I postponing that *Tài* has actually given me permission to build?',
      'When the season turns — and it will — what will I wish I had built while peace was here?'
    ]
  },
  {
    n: 12, slug: '12-standstill', chinese: '否', pinyin: 'Pǐ', name_en: 'Standstill (Stagnation)',
    glyph: '䷋', trigrams: 'Heaven above Earth', family: 'beginnings',
    one_liner: 'Heaven and earth no longer speaking — the season the channels close; the wait inside the standstill.',
    meaning: 'Hexagram 12, *Pǐ*, is the inverse of *Tài* — heaven *above* earth, which again sounds correct but is in fact the failure mode: the great and the small no longer flow into each other, the channels close, the season stalls. The classical translation is *Standstill (Stagnation)*. The hexagram counsels: *evil people do not further the perseverance of the superior man; the great departs, the small approaches*. The wise behaviour in *Pǐ* is not to push — pushing into a closed channel breaks the channel — but to *withdraw, conserve, and wait for the season to turn*.',
    when_pulled: 'You are in a *Pǐ* season. The doors are closed. The relationships are not communicating. The project is stalled and pushing harder makes it worse. Withdraw, conserve, do not waste resources fighting the season. *Pǐ* turns — every standstill turns.',
    changing_lines: 'Line 5 is *standstill is giving way; good fortune for the great man; perish, perish! — bind it to a cluster of mulberry shoots* — the moment the season is *just about* to turn; consolidate, hold tight to the strong roots, do not relax too soon.',
    in_love: 'The conversation is closed. Pushing it open right now will only deepen the stall. Withdraw. Tend your own ground. The conversation that is not possible today will be possible later. Reversed: using *waiting for the season to turn* as license for endless avoidance. *Pǐ* turns; *avoidance* is forever.',
    in_work: 'The deal is stuck. The launch is stalled. The boss is not communicating. Pushing harder is breaking the channel. Withdraw to the work you can do. Conserve. The season turns.',
    the_gift: '*Strategic withdrawal.* The recognition that there are seasons where the wise move is to stop pushing and tend the smaller, stronger ground.',
    the_shadow: 'Withdrawing forever. Calling avoidance *waiting for the season*. The hexagram\'s precise teaching is that *Pǐ* turns — if your standstill never turns, the problem is not the season.',
    key_questions: [
      'What channel in my life is closed right now that I have been wasting force trying to push through?',
      'What can I do during the standstill that strengthens me for when it turns?',
      'Is this actually a season — does it have a turning point — or have I been calling permanent avoidance "*Pǐ*"?'
    ]
  },
  {
    n: 13, slug: '13-fellowship', chinese: '同人', pinyin: 'Tóng Rén', name_en: 'Fellowship with Men',
    glyph: '䷌', trigrams: 'Heaven above Fire', family: 'beginnings',
    one_liner: 'Fire rising into heaven — like-minded people gathering around a clear cause; the open-air alliance.',
    meaning: 'Hexagram 13, *Tóng Rén*, is the image of fire rising into heaven — light visible from afar, gathering those who can see it. The classical name is *Fellowship with Men* (or *Community*). The hexagram\'s counsel: *fellowship with men in the open — success; it furthers one to cross the great water; the perseverance of the superior man furthers*. The hexagram celebrates *open* community — alliances built in daylight on shared cause, not secret factions, not closed tribes. The fellowship that wins is the fellowship that anyone of right intent can join.',
    when_pulled: 'A community is forming. Find your people, build the alliance — but build it openly, not as a clique. The cause must be visible. The fellowship that lasts is the one whose principle is clear enough that newcomers can recognise it from afar.',
    changing_lines: 'Line 2 is *fellowship in the clan — humiliation* — the warning that closed-tribe fellowship (only my people, only my caste, only those who agree) is the failure mode of *Tóng Rén*. Line 5 is *first weeping, then laughing — after great struggles, they meet* — fellowship that survives a hard test is the deepest kind.',
    in_love: 'The relationship is part of a wider fellowship — friends, family, community. Honour the wider field; do not isolate the relationship into a closed bunker.',
    in_work: 'The alliance, the partnership, the team — build it openly. State the cause. Let it be visible. The closed clique loses; the open fellowship grows.',
    the_gift: '*Open alliance.* The recognition that the strongest community is the one whose principle is visible enough that newcomers can find it without permission.',
    the_shadow: 'Closed-clan fellowship. Only my people. Only those who agree with me. The hexagram\'s warning at line 2 is exactly this: *fellowship in the clan — humiliation*.',
    key_questions: [
      'What fellowship am I in right now — and is it open (cause-based) or closed (clan-based)?',
      'Who am I excluding by clan-loyalty rather than by clarity-of-cause?',
      'What is the cause my fellowship is built around — clearly enough that I could state it in one sentence?'
    ]
  },
  {
    n: 14, slug: '14-great-possession', chinese: '大有', pinyin: 'Dà Yǒu', name_en: 'Possession in Great Measure',
    glyph: '䷍', trigrams: 'Fire above Heaven', family: 'beginnings',
    one_liner: 'Fire above heaven — sun at noon, the brightest visibility; great possession that must be held with humility.',
    meaning: 'Hexagram 14, *Dà Yǒu*, is the image of fire above heaven — the sun at the height of the sky, illuminating everything. The classical name is *Possession in Great Measure*. The hexagram counsels: *supreme success*. The lesson: when you have come into great possession — material, social, creative, spiritual — the *manner* of holding it matters more than the having. Hold it with humility; share it; let the light of your noon illuminate others rather than blinding them. *Dà Yǒu* is one of the most auspicious hexagrams in the book, but its auspiciousness is conditional on the bearer\'s character.',
    when_pulled: 'You are in a season of abundance. Resources, opportunities, recognition — the noon sun is on you. Hold it well. Share generously. The wisdom of *Dà Yǒu* is that great possession reveals character; what you do with the abundance becomes the chapter.',
    changing_lines: 'Line 3 is *a prince offers it to the Son of Heaven; a petty man cannot do this* — the warning that great possession in the hands of a small character corrupts. Line 6 is *he is blessed by heaven; good fortune; nothing that does not further* — the rare line of pure auspiciousness, awarded to the bearer who held the great possession with humility.',
    in_love: 'The relationship is full — affection, trust, presence. Receive it without small jealousies or small possessivenesses. Share the warmth outward.',
    in_work: 'A season of abundance — resources, recognition, opportunity. Use it well. Lift those around you. The leader who hoards abundance during *Dà Yǒu* is remembered as small.',
    the_gift: '*Generous holding.* The recognition that abundance is given partly to be shared — and that the manner of holding it determines whether it grows or dissipates.',
    the_shadow: 'Hoarding abundance. Becoming small in the noon sun. The leader who, given much, gives little.',
    key_questions: [
      'What abundance has been given to me right now — that I am holding too tight, or sharing too little?',
      'Where am I becoming small in the noon sun?',
      'Whom does the light of my *Dà Yǒu* allow me to illuminate — and am I doing it?'
    ]
  },
  {
    n: 15, slug: '15-modesty', chinese: '謙', pinyin: 'Qiān', name_en: 'Modesty',
    glyph: '䷎', trigrams: 'Earth above Mountain', family: 'beginnings',
    one_liner: 'Mountain inside the earth — the great strength that does not rise up to be seen; modesty as the most powerful position.',
    meaning: 'Hexagram 15, *Qiān*, is uniquely auspicious in the I Ching — every single one of its lines is favourable, the only hexagram in the book of which this is true. Its image is the mountain *inside* the earth — the great strength that does not need to be visible to be real. The classical name is *Modesty* (Wilhelm-Baynes) or *Humility*. The hexagram counsels: *success; the superior man carries things through to the end*. Modesty in the I Ching is not self-effacement; it is the strength that does not require recognition to function.',
    when_pulled: 'A season of *Qiān* asks for the strength that does not need to be seen. Do the work without claiming credit. Hold the position without performing it. The mountain inside the earth is the most powerful image in the book; let it be your image.',
    changing_lines: 'Line 1 is *a superior man modest about his modesty may cross the great water — good fortune* — the deepest level: modesty so internalised it does not even know it is modesty. Every line of *Qiān* is favourable — there is no shadow line in this hexagram, the only one of its kind.',
    in_love: 'The relationship is asking for quiet strength — the partner who can hold the position without needing the recognition. Do the act of love without making sure the love is seen.',
    in_work: 'The work that is best done is the work nobody knows you did. The credit will come — or it will not — and the work itself is its own reward. Modesty is not a marketing strategy; it is a position of power.',
    the_gift: '*Strength that needs no audience.* The recognition that the most powerful position in any field is the one held by the person who does not require recognition to function.',
    the_shadow: 'False modesty. The performance of humility — *humble-bragging*, the "look how modest I am" trap. *Qiān* is the strength that *does not even know it is being modest* — the moment you perform it, you are no longer in the hexagram.',
    key_questions: [
      'Where am I performing my own modesty rather than embodying it?',
      'What work could I do today that nobody would ever know I did — and would I still do it?',
      'What does the mountain-inside-the-earth-version of my current position look like?'
    ]
  },
  {
    n: 16, slug: '16-enthusiasm', chinese: '豫', pinyin: 'Yù', name_en: 'Enthusiasm',
    glyph: '䷏', trigrams: 'Thunder above Earth', family: 'beginnings',
    one_liner: 'Thunder rising from the earth — the joy that mobilises a people; enthusiasm as organising principle.',
    meaning: 'Hexagram 16, *Yù*, is the image of thunder bursting up from the earth — the sudden release of energy after long compression. The classical name is *Enthusiasm*. The hexagram counsels: *it furthers one to install helpers and to set armies marching*. The lesson: enthusiasm, properly channelled, is one of the great organising forces — it gathers people, focuses energy, makes large things possible. The discipline is to channel it into structure quickly. Pure enthusiasm without form dissipates into noise; enthusiasm with helpers and direction becomes a movement.',
    when_pulled: 'A wave of *Yù* is rising — your own or in the people around you. The hexagram says: *channel it now*. Install the helpers, set the structure, give the energy somewhere to go. Pure enthusiasm without form is noise. Enthusiasm with form is movement.',
    changing_lines: 'Line 4 is *the source of enthusiasm; he achieves great things; he must not waver; friends gather round him as the hair gathers round a clasp* — the central image of the hexagram: the leader who is the *source* of enthusiasm gathers the field. Line 6 is *deluded enthusiasm — but if there is change, no blame* — the warning that enthusiasm spent on the wrong cause must be redirected the moment it is recognised.',
    in_love: 'A surge of joy in the relationship — channel it into a real plan, a real conversation, a real ritual. Do not waste the wave on noise.',
    in_work: 'The team is energised. *Now* is the moment to install structure — the document, the meeting cadence, the role assignments. Enthusiasm without form is the most-wasted resource in any organisation.',
    the_gift: '*Channelled mobilisation.* The recognition that enthusiasm, when given form quickly, is one of the most powerful organising forces available.',
    the_shadow: 'Enthusiasm as noise. The team that gets excited and never structures. The relationship that has chemistry and no commitment. The wave that breaks without leaving anything on the shore.',
    key_questions: [
      'Where is enthusiasm rising in me right now — and have I given it form, or am I letting it dissipate as noise?',
      'Who are the helpers I need to install while the wave is here?',
      'What structure does this energy need by the end of this week — before the wave passes?'
    ]
  },
  {
    n: 17, slug: '17-following', chinese: '隨', pinyin: 'Suí', name_en: 'Following',
    glyph: '䷐', trigrams: 'Lake above Thunder', family: 'cycles',
    one_liner: 'Thunder inside the lake — the season the strong agrees to follow the season; adapting to what is rising.',
    meaning: 'Hexagram 17, *Suí*, is the image of thunder *inside* the lake — the dynamic force voluntarily contained by the receptive vessel. The classical name is *Following*. The hexagram counsels: *supreme success; perseverance furthers; no blame*. The lesson: following in the I Ching sense is *not* subordination — it is the strong leader who recognises the season requires adapting rather than imposing his will. The wise leader follows the season; the foolish leader fights it. Following the right thing — the times, the moment, the deeper current — is itself a form of mastery.',
    when_pulled: 'You are being asked to *follow* — not to lead. Recognise what is rising and align with it. The temptation is to push your own agenda; the wisdom is to read the season and adapt.',
    changing_lines: 'Line 4 is *following creates success; perseverance brings misfortune; to go one\'s way with sincerity brings clarity* — the warning that following can become sycophancy; sincerity is the discriminator. Line 6 is *he meets with firm allegiance and is still further bound* — full surrender to the right cause yields the deepest connection.',
    in_love: 'The relationship is asking you to follow — to receive your partner\'s lead in something, to align with their season. Reversed: following out of fear rather than discernment.',
    in_work: 'The market, the team, the moment is rising in a direction. Read it and align. Stop pushing your previous agenda. The wise leader follows the season.',
    the_gift: '*Discerned following.* The recognition that following the right thing is a form of mastery, not weakness.',
    the_shadow: 'Following the wrong thing. Sycophancy, conformity, abdication. *Suí* requires sincerity in the discernment of *what* to follow.',
    key_questions: [
      'What is rising right now that I am being asked to follow rather than fight?',
      'Where am I following out of fear when I should be leading?',
      'What is the right thing — the season, the principle, the deeper current — for me to align with this season?'
    ]
  },
  {
    n: 18, slug: '18-work-on-the-decayed', chinese: '蠱', pinyin: 'Gǔ', name_en: 'Work on What Has Been Spoiled',
    glyph: '䷑', trigrams: 'Mountain above Wind', family: 'cycles',
    one_liner: 'Wind stopped at the mountain — long-stagnated air; the inherited mess that requires patient repair.',
    meaning: 'Hexagram 18, *Gǔ*, is the image of wind blocked by the mountain — air that has stopped circulating, the season of *decay-from-stagnation*. The classical name is *Work on What Has Been Spoiled* (or *Decay*). The hexagram counsels: *supreme success; it furthers one to cross the great water; before the starting point, three days; after the starting point, three days*. The lesson: there is something spoiled — an inherited mess, a stagnated relationship, a project gone bad — and the work is to repair it. The "three days before, three days after" counsel is precise: take the time to study the cause before acting, and to consolidate after.',
    when_pulled: 'There is something spoiled in your field that needs work — an inheritance, a relationship, a system, a habit. The hexagram says: do the repair, and study before and after. The mess is workable; ignoring it is not.',
    changing_lines: 'Line 1 is *setting right what has been spoiled by the father; if there is a son, no blame remains on the departed father* — the work of repairing what an elder generation has spoiled. Line 5 is *setting right with praise* — the repair done well that earns recognition.',
    in_love: 'A spoiled pattern — yours or inherited from family — needs work. Be patient. Study before acting. The pattern is workable but not fast.',
    in_work: 'The legacy system, the inherited team, the project that was botched — work it. Slowly, carefully, with full study of how it got this way. *Gǔ* is repair-work, not redesign.',
    the_gift: '*Patient repair.* The recognition that some things were broken before you arrived and the work is to fix them, not to escape them.',
    the_shadow: 'Refusing the inherited work. Pretending the mess belongs to someone else. The hexagram\'s exact frame: *if there is a son, no blame remains on the departed father* — the repair frees both inheritor and inheritor.',
    key_questions: [
      'What inherited mess in my life — family pattern, broken system, legacy — am I being asked to repair?',
      'Have I taken the three days before — actually studied how this got broken?',
      'Where am I confusing repair-work with escape — running away from a fix that would actually free me?'
    ]
  },
  {
    n: 19, slug: '19-approach', chinese: '臨', pinyin: 'Lín', name_en: 'Approach',
    glyph: '䷒', trigrams: 'Earth above Lake', family: 'cycles',
    one_liner: 'Earth above the lake — the spring approaching; the great rising into view.',
    meaning: 'Hexagram 19, *Lín*, is the image of the lake at the foot of the high earth — the moment the bright spring is approaching, the great is rising into the field. The classical name is *Approach*. The hexagram counsels: *supreme success; perseverance furthers; when the eighth month comes, there will be misfortune*. The two-part teaching: a great auspicious season is approaching — *and* it has a limit. Use the approach. Build during it. But know that no season lasts forever; the eighth month will come.',
    when_pulled: 'A bright season is approaching. Prepare to receive it. Build during it. And know it has a horizon — what you build during *Lín* is what you carry into the next season.',
    changing_lines: 'Line 3 is *comfortable approach; nothing that would further; if one is sorrowful about it, no blame* — the warning that comfort during *Lín* without effort is wasted approach. The grief at wasted opportunity is itself the redemption.',
    in_love: 'A new closeness is approaching. Receive it without grasping; build the structure that will carry it past the season.',
    in_work: 'A door is opening. Walk through. Build the project, claim the territory — knowing the season has a horizon.',
    the_gift: '*Bright season.* The recognition that the great is approaching and the moment to receive it is now.',
    the_shadow: 'Wasting the approach. Treating the bright season as forever. The eighth month always comes.',
    key_questions: [
      'What bright thing is approaching in my life right now that I have been treating as still-distant?',
      'What am I building during this season that will outlast it?',
      'Where am I being comfortable when I should be working?'
    ]
  },
  {
    n: 20, slug: '20-contemplation', chinese: '觀', pinyin: 'Guān', name_en: 'Contemplation (View)',
    glyph: '䷓', trigrams: 'Wind above Earth', family: 'cycles',
    one_liner: 'Wind moving over earth — the high view that sees the whole field; contemplation as the season\'s work.',
    meaning: 'Hexagram 20, *Guān*, is the image of wind moving over the earth — the high vantage from which the whole field is visible. The classical name is *Contemplation*. The hexagram counsels: *the ablution has been made, but not yet the offering; full of trust they look up*. The lesson: this is a season of *seeing*, not yet of acting. Climb the mountain, look at the whole field, study the patterns. The action follows from the seeing; if you act before you see, the action will be wrong.',
    when_pulled: 'A season of contemplation is on you. Resist the urge to act. Climb high. See the whole field. The action will follow naturally from the seeing — but only if the seeing is done first.',
    changing_lines: 'Line 5 is *contemplation of my life; the superior man is without blame* — the central inquiry: what is *my* life, viewed from the high vantage? Line 6 is *contemplation of his life* — viewing not just one\'s own life but the lives of others one is responsible for.',
    in_love: 'Step back. View the whole pattern of the relationship from the high vantage before taking the next move.',
    in_work: 'Stop iterating tactical moves. Climb the mountain. Look at the whole strategy. The right tactic emerges from the high view.',
    the_gift: '*The high view.* The recognition that some seasons are for *seeing*, and the action that follows the seeing is wiser than any action that preceded it.',
    the_shadow: 'Contemplation as endless analysis. Looking forever and never acting. *Guān* is the *first* movement; the offering follows.',
    key_questions: [
      'What field am I being asked to view from the high vantage right now?',
      'Where am I acting tactically when the work is to step back and see the whole pattern?',
      'When does my contemplation become the offering — the action that follows from the seeing?'
    ]
  },
  {
    n: 21, slug: '21-biting-through', chinese: '噬嗑', pinyin: 'Shì Kè', name_en: 'Biting Through',
    glyph: '䷔', trigrams: 'Fire above Thunder', family: 'cycles',
    one_liner: 'Lightning and thunder together — the obstruction that must be bitten through; firm justice applied at the right moment.',
    meaning: 'Hexagram 21, *Shì Kè*, is the image of fire and thunder together — illumination and decisive action combined. The classical name is *Biting Through*. The hexagram counsels: *success; it furthers one to let justice be administered*. The lesson: there is an obstruction in the field — a person, a situation, a behaviour blocking the rightful flow — and it must be *bitten through*, not negotiated around. Justice in the I Ching is not vindictiveness; it is the firm application of correction at the right moment to a situation that has gone past mediation.',
    when_pulled: 'There is an obstruction that has passed the stage of negotiation. The hexagram counsels: *bite through it*. Not cruelty — clarity. Apply the correction firmly and let the field flow.',
    changing_lines: 'Line 3 is *bites on old dried meat and strikes on something poisonous; slight humiliation; no blame* — the obstruction has been there too long; the bite must happen, but the long delay has spoiled some of the meat. Line 6 is *his neck is fastened in the wooden cangue; humiliation* — what was not bitten through in time becomes the obstruction the bearer himself is trapped by.',
    in_love: 'The hard conversation has been postponed too long. The bite must happen. Cleanly, without cruelty, and now.',
    in_work: 'The team member who has been performing badly. The vendor who has been failing. The contract that has gone bad. *Shì Kè*: bite through, justly.',
    the_gift: '*Justice as flow-restoration.* The recognition that some obstructions cannot be negotiated around and must be cleanly bitten through.',
    the_shadow: 'Cruelty masquerading as justice. The bite that becomes punishment, vindictiveness, retribution. *Shì Kè* is *the restoration of flow*, not the satisfaction of vengeance.',
    key_questions: [
      'What obstruction in my field has passed the stage of negotiation?',
      'Where am I postponing the necessary bite under the banner of *patience*?',
      'When I bite through, will I do it for restoration of flow — or am I dressing up vindictiveness as justice?'
    ]
  },
  {
    n: 22, slug: '22-grace', chinese: '賁', pinyin: 'Bì', name_en: 'Grace (Adornment)',
    glyph: '䷕', trigrams: 'Mountain above Fire', family: 'cycles',
    one_liner: 'Fire at the foot of the mountain — beauty that adorns, never replaces; grace as the right relation of form to substance.',
    meaning: 'Hexagram 22, *Bì*, is the image of fire illuminating the mountain — beauty arising at the foot of the substantial. The classical name is *Grace* (or *Adornment*). The hexagram counsels: *success; in small matters, it is favourable to undertake something*. The lesson: grace, beauty, adornment have their place — they make small matters succeed — but they cannot substitute for substance. The mountain comes first; the fire that illuminates it second. Form follows substance, not the other way around.',
    when_pulled: 'A season of *Bì* asks you to attend to the form, the presentation, the surface — but only as adornment of substance, never as substitute. Polish the work; do not mistake polish for the work.',
    changing_lines: 'Line 6 is *simple grace; no blame* — the highest form of adornment is the simplest. The white that lets the substance speak. Excessive ornamentation defeats *Bì*.',
    in_love: 'Attend to the small graces — the cooked meal, the clean room, the noticed detail. Adornment of love is real. But do not let beauty substitute for the harder substance.',
    in_work: 'Polish the proposal. Care for the presentation. Make it beautiful — but only after the substance is there.',
    the_gift: '*Right adornment.* The recognition that beauty is a real force in small matters and a real corruption when it tries to do the work of substance.',
    the_shadow: 'Adornment without substance. The beautiful proposal with nothing behind it. The performance of competence without the competence.',
    key_questions: [
      'Where am I attending to the form — and is the substance underneath it sound?',
      'Where am I letting beauty try to do the work of substance?',
      'What simple grace would adorn what I am building without overshadowing it?'
    ]
  },
  {
    n: 23, slug: '23-splitting-apart', chinese: '剝', pinyin: 'Bō', name_en: 'Splitting Apart',
    glyph: '䷖', trigrams: 'Mountain above Earth', family: 'cycles',
    one_liner: 'Mountain on top of earth — the high thing being eroded from below; the season of subtraction.',
    meaning: 'Hexagram 23, *Bō*, is the image of the mountain being eroded from beneath — five yin lines below, one yang line at the top, about to be displaced. The classical name is *Splitting Apart*. The hexagram counsels: *it does not further one to go anywhere*. The lesson is severe: this is a season of subtraction. What was high is being eroded. Pushing forward will not help. The wise behaviour is to *withdraw, conserve, and wait* — and to recognise that the erosion is part of a larger cycle that will, eventually, return (which is hexagram 24).',
    when_pulled: 'A season of subtraction is on you. Things are being lost — relationships ending, projects collapsing, identities outgrown. *Bō* counsels: do not fight the erosion; tend the small remaining ground; the cycle returns.',
    changing_lines: 'Line 6 is *a great fruit still uneaten; the superior man receives a carriage; the house of the inferior man is split apart* — the hidden line of *Bō*: in the deepest erosion, the seed of the next cycle is preserved. The fruit is still uneaten. The return is in the falling.',
    in_love: 'The relationship may be in subtraction. Do not fight what is leaving. Tend what remains. The cycle will turn — through the loss, not around it.',
    in_work: 'The project, the role, the company is in decline. Do not throw more force at what is dying. Conserve. Tend the seed that will be the next chapter.',
    the_gift: '*Honest subtraction.* The recognition that some seasons are for *losing well* — releasing what is leaving rather than fighting it.',
    the_shadow: 'Refusing the subtraction. Throwing more force at what is dying. The hexagram\'s exact counsel: *it does not further one to go anywhere*.',
    key_questions: [
      'What in my life is in subtraction right now that I have been refusing to release?',
      'What is the small remaining ground that I should be tending instead of throwing force at the loss?',
      'What seed — the great fruit still uneaten — is being preserved through this loss?'
    ]
  },
  {
    n: 24, slug: '24-return', chinese: '復', pinyin: 'Fù', name_en: 'Return (The Turning Point)',
    glyph: '䷗', trigrams: 'Earth above Thunder', family: 'cycles',
    one_liner: 'Thunder buried in the earth — the first yang line returning at the bottom; the turning point of the cycle.',
    meaning: 'Hexagram 24, *Fù*, is one of the most-loved hexagrams in the book — the image of the first yang line returning at the bottom of the field, the turning point of the cycle, the winter solstice when the light begins to return. The classical name is *Return*. The hexagram counsels: *success; going out and coming in without error; friends come without blame; to and fro goes the way; on the seventh day comes return*. The lesson: every cycle turns. The deepest winter is the moment the light returns. Do not interpret the lowest point as the verdict; it is in fact the beginning of the climb back.',
    when_pulled: 'A turning point is here. The first sign of the return is the small new movement — the small honest sentence, the small good day, the small renewed energy. Honour the small return; do not rush it. *On the seventh day comes return* — the cycle has its own clock.',
    changing_lines: 'Line 1 is *return from a short distance; no need for remorse — great good fortune* — the early return that does not require dramatic repentance. Line 6 is *missing the return; misfortune* — the only failure mode of *Fù* is not recognising the turning when it comes.',
    in_love: 'A relationship may be turning back toward you — or you toward it. Honour the small first signs. Do not demand the full return on day one. *On the seventh day*.',
    in_work: 'The slump is turning. The first small wins are the proof. Honour them; build on them; do not despise the small return.',
    the_gift: '*The turning point.* The recognition that every cycle turns and the lowest point is in fact the beginning of the climb.',
    the_shadow: 'Missing the return. Insisting that the winter is forever. The hexagram\'s exact warning at line 6: the failure mode of *Fù* is not recognising it when it arrives.',
    key_questions: [
      'What small return is happening in my life right now that I have been failing to honour?',
      'Where am I insisting that the winter is the verdict, when it is in fact the moment of turning?',
      'How do I build on the small first signs without demanding the full return on day one?'
    ]
  },
  {
    n: 25, slug: '25-innocence', chinese: '無妄', pinyin: 'Wú Wàng', name_en: 'Innocence (The Unexpected)',
    glyph: '䷘', trigrams: 'Heaven above Thunder', family: 'cycles',
    one_liner: 'Thunder under heaven — natural action in accordance with the moment; innocence as alignment with the real.',
    meaning: 'Hexagram 25, *Wú Wàng*, is the image of thunder rolling under heaven — action arising from the natural alignment with the moment, neither calculated nor distorted. The classical name is *Innocence* (or *The Unexpected*). The hexagram counsels: *supreme success; perseverance furthers; if someone is not as he should be, he has misfortune; it does not further him to undertake anything*. The lesson is precise: action that arises from natural alignment with what is — innocence in the I Ching sense, not naivete — succeeds. Action that arises from calculation, hidden agenda, or distortion of the real fails.',
    when_pulled: 'You are being asked to act from innocence — from the natural response to what is, without strategy, without the calculation of advantage. The hexagram counsels: *if you are aligned, success is supreme*. If you are not — if there is hidden agenda — do not act.',
    changing_lines: 'Line 5 is *use no medicine for an illness incurred through no fault of your own; it will pass of itself* — the counsel that not every problem requires intervention; some pass on their own when innocence is preserved.',
    in_love: 'Speak from the heart that is actually beating, not from the strategy. *Wú Wàng* in love is precisely this: the unguarded sentence is the powerful one.',
    in_work: 'Act from the alignment with the work itself, not from the calculation of advantage. The work knows; the calculation distorts.',
    the_gift: '*Aligned action.* The recognition that the most powerful action is the one that arises from natural alignment with what is, without strategy, without distortion.',
    the_shadow: 'Calculated action dressed as innocence. The performance of unguardedness. *Wú Wàng* is the real thing or it is nothing.',
    key_questions: [
      'Where in my life right now is the action being calculated when it could be aligned?',
      'What is my actual response to this situation — before strategy enters?',
      'Where am I performing innocence rather than embodying it?'
    ]
  },
  {
    n: 26, slug: '26-great-taming', chinese: '大畜', pinyin: 'Dà Chù', name_en: 'The Taming Power of the Great',
    glyph: '䷙', trigrams: 'Mountain above Heaven', family: 'cycles',
    one_liner: 'Heaven inside the mountain — the great force, gathered and held; accumulated power waiting for the right moment.',
    meaning: 'Hexagram 26, *Dà Chù*, is the image of heaven *inside* the mountain — vast creative force gathered and held within a strong container. The classical name is *The Taming Power of the Great*. The hexagram counsels: *perseverance furthers; not eating at home brings good fortune; it furthers one to cross the great water*. The lesson: this is a season of *accumulated capacity* — strength stored, knowledge gathered, resources marshalled. The right move is to use the accumulation for something large — *cross the great water* — rather than spend it on small daily comforts (*not eating at home*).',
    when_pulled: 'You have accumulated capacity — knowledge, resources, strength. The hexagram says: *use it for something great*. Not for small comfort; for the large undertaking. The mountain that holds heaven inside is meant to be a launchpad, not a treasury.',
    changing_lines: 'Line 4 is *the headboard of a young bull — great good fortune* — power that is restrained early before it can do harm; the strong leader who installs the right discipline before the strength becomes destructive.',
    in_love: 'The relationship has accumulated depth. Use it for something great — the big move, the long journey, the deep commitment. Do not waste accumulated love on small daily comforts.',
    in_work: 'You have built capacity. Now is the moment to use it for the large undertaking — the company, the launch, the magnum opus. Not the safe small task. The great water.',
    the_gift: '*Accumulated power, well-deployed.* The recognition that gathered capacity is meant for the large work, not for small comfort.',
    the_shadow: 'Hoarding capacity. The mountain that never deploys what heaven has placed inside it. Eating at home forever. *Dà Chù* requires the great crossing.',
    key_questions: [
      'What capacity have I accumulated that I have been failing to deploy?',
      'What is the great water for me right now — the large undertaking that *Dà Chù* is asking me to attempt?',
      'Where am I eating at home — spending accumulated power on small comfort?'
    ]
  },
  {
    n: 27, slug: '27-nourishment', chinese: '頤', pinyin: 'Yí', name_en: 'Nourishment (Providing Nourishment)',
    glyph: '䷚', trigrams: 'Mountain above Thunder', family: 'cycles',
    one_liner: 'The image of an open mouth — what enters and what is spoken; nourishment of body, mind, and word.',
    meaning: 'Hexagram 27, *Yí*, is visually the image of an open mouth — two yang lines top and bottom, four yin lines between, like the upper and lower jaws around the empty mouth. The classical name is *Nourishment*. The hexagram counsels: *perseverance brings good fortune; pay attention to the providing of nourishment and to what a man seeks to fill his own mouth with*. The lesson is dual: pay attention to what enters you (food, media, company, ideas) AND what proceeds from you (the words you speak, the way you nourish others). The mouth in the I Ching is the *exchange point* of life; both directions matter.',
    when_pulled: 'The hexagram is asking you to examine your nourishment — both what enters you and what proceeds from you. What you read, who you talk to, what you say, who you feed. The exchange point is asking for attention.',
    changing_lines: 'Line 1 is *you let your magic tortoise go and look at me with the corners of your mouth drooping — misfortune* — the warning of envying others\' nourishment instead of tending one\'s own. Line 6 is *the source of nourishment; awareness of danger brings good fortune; it furthers one to cross the great water* — the deepest nourishment is the one that becomes a source for others.',
    in_love: 'What are you feeding the relationship — your tone, your attention, your words? What are you taking from it? Both directions matter.',
    in_work: 'What are you consuming professionally — what books, what mentors, what feedback? What are you producing — what quality of work, what tone in conversation? The mouth.',
    the_gift: '*Attention to exchange.* The recognition that the mouth runs both ways and both directions of nourishment require care.',
    the_shadow: 'One-sided attention. Obsessing about what enters (the perfect diet, the perfect input) while ignoring what proceeds (the careless words, the harm spoken). Or the reverse.',
    key_questions: [
      'What am I feeding myself — physical, emotional, intellectual — and is it nourishment or noise?',
      'What is proceeding from me — my words, my work, my attention — and is it nourishment or harm?',
      'Where is my magic tortoise — my own source of nourishment — that I have let go of in order to envy another\'s?'
    ]
  },
  {
    n: 28, slug: '28-great-preponderance', chinese: '大過', pinyin: 'Dà Guò', name_en: 'Preponderance of the Great',
    glyph: '䷛', trigrams: 'Lake above Wind', family: 'cycles',
    one_liner: 'A ridge-pole sagging to the breaking point — extraordinary times that require extraordinary measures.',
    meaning: 'Hexagram 28, *Dà Guò*, is the image of a ridge-pole sagging at the centre under too much weight — four strong yang lines in the middle, two weak yin lines at the ends. The classical name is *Preponderance of the Great*. The hexagram counsels: *the ridge-pole sags to the breaking point; it furthers one to have somewhere to go; success*. The lesson: this is an extraordinary moment. The weight is too great for ordinary procedures. *Have somewhere to go* — find the next thing, do not freeze, do not cling to what is breaking. Extraordinary times require extraordinary action.',
    when_pulled: 'You are under extraordinary load. The ordinary playbook will not work. The hexagram says: *find somewhere to go*. Move. Do not cling to the breaking structure. Find the next room.',
    changing_lines: 'Line 5 is *a withered poplar puts forth flowers; an older woman takes a husband; no blame, no praise* — the late-spring blossom on the failing tree; brief beauty without long fruit. Line 6 is *one must go through the water; it goes over one\'s head; misfortune; no blame* — the warning that some loads cannot be carried; the wise course is sometimes to accept the cost of crossing rather than be crushed standing still.',
    in_love: 'The relationship is under extraordinary load. The ordinary moves will not bear it. *Have somewhere to go* — make a move, find the next room, do not freeze.',
    in_work: 'The team, the project, the role is under load that ordinary procedure cannot bear. Take the extraordinary action. Move.',
    the_gift: '*Extraordinary courage.* The recognition that some moments require leaving the breaking structure rather than reinforcing it.',
    the_shadow: 'Clinging to the breaking ridge-pole. Insisting the ordinary measures will work because they always have. The pole snaps.',
    key_questions: [
      'What in my life right now is sagging to the breaking point under too much weight?',
      'What is the *somewhere to go* the hexagram is pointing me toward?',
      'Where am I clinging to the breaking structure rather than finding the next room?'
    ]
  },
  {
    n: 29, slug: '29-the-abysmal', chinese: '坎', pinyin: 'Kǎn', name_en: 'The Abysmal (Water)',
    glyph: '䷜', trigrams: 'Water above Water', family: 'cycles',
    one_liner: 'Water flowing into water — the doubled abyss; the season the only way out is through.',
    meaning: 'Hexagram 29, *Kǎn*, is the image of water above water — the doubled abyss, the doubled danger, the season of compounded difficulty. The classical name is *The Abysmal*. The hexagram counsels: *if you are sincere, you have success in your heart; whatever you do succeeds*. The lesson is precise and severe: the danger is real, the abyss is real, but *the way through is sincerity*. Water always flows; it does not stop in fear. *Kǎn* counsels: become like water — keep moving, hold the form of the situation, trust that flow itself is the way.',
    when_pulled: 'You are in the abyss. The hexagram does not pretend otherwise. But it also says: *the way through is through*. Sincerity, presence, flow. Stop trying to escape; flow.',
    changing_lines: 'Line 4 is *a jug of wine, a bowl of rice with it; earthen vessels simply handed in through the window; certainly no blame* — in the depth of the abyss, the simplest sincere offering passes; ceremony is not required.',
    in_love: 'A hard season in the relationship. Sincerity, presence, *being with*. Do not perform fixing; do not perform calm. Be in it. Water flows.',
    in_work: 'A hard season in the work. The crisis is real. The way through is the daily honest action — not the heroic fix, the daily flow.',
    the_gift: '*The way through.* The recognition that even in the doubled abyss, sincerity and continued flow are themselves the path.',
    the_shadow: 'Frantic escape attempts that drown the swimmer. *Kǎn* counsels flow, not flight.',
    key_questions: [
      'What abyss am I in right now — and have I accepted it as real, or am I still pretending I am not in it?',
      'Where am I trying to fix it heroically when the work is daily honest flow?',
      'What is the small earthen vessel — the simple sincere offering — that the hexagram is asking me to hand through the window?'
    ]
  },
  {
    n: 30, slug: '30-the-clinging', chinese: '離', pinyin: 'Lí', name_en: 'The Clinging (Fire)',
    glyph: '䷝', trigrams: 'Fire above Fire', family: 'cycles',
    one_liner: 'Fire above fire — the doubled flame; brilliance that depends on what it clings to.',
    meaning: 'Hexagram 30, *Lí*, is the image of fire above fire — the doubled flame. Fire in the I Ching is *the clinging* because fire has no body of its own; it always clings to fuel. The classical name is *The Clinging (Fire)*. The hexagram counsels: *perseverance furthers; it brings success; care of the cow brings good fortune*. The lesson: brilliance depends on what it clings to. The flame is only as good as the fuel. *Care of the cow* — tend the source, the practice, the foundation from which the brilliance arises. Fire that consumes its source quickly burns out.',
    when_pulled: 'You are in a season of brilliance — and the hexagram is asking you to attend to *what the brilliance depends on*. The source, the practice, the daily ritual that makes the visible work possible. Care of the cow.',
    changing_lines: 'Line 3 is *in the light of the setting sun, men either beat the pot and sing, or loudly bewail the approach of old age; misfortune* — the warning that brilliance, faced with its mortality, can either celebrate or despair; the wise choice is the celebration.',
    in_love: 'The brilliance of the relationship — the chemistry, the connection, the shared light — depends on the fuel: the daily ritual, the care, the foundation. Tend the cow.',
    in_work: 'The brilliance of the work depends on the practice. The visible product is fire; the daily discipline is the fuel. Tend the practice.',
    the_gift: '*Sustained brilliance.* The recognition that the visible flame depends on attending to what it clings to — the practice, the source, the daily ritual.',
    the_shadow: 'Fire that consumes its source. The brilliance that does not tend its own foundation and burns out. The artist without the daily discipline. The leader without the inner practice.',
    key_questions: [
      'What brilliance in my life right now depends on a fuel I have been failing to tend?',
      'What is the cow — the daily practice, the foundation — for this fire?',
      'Where am I performing brilliance while consuming the source it depends on?'
    ]
  },
  {
    n: 31, slug: '31-influence', chinese: '咸', pinyin: 'Xián', name_en: 'Influence (Wooing)',
    glyph: '䷞', trigrams: 'Lake above Mountain', family: 'cycles',
    one_liner: 'Lake on top of mountain — the receptive responding to the strong; the season of mutual attraction.',
    meaning: 'Hexagram 31, *Xián*, is the image of the lake resting on the mountain — receptive yin atop strong yang, the two responding to each other. The classical name is *Influence (Wooing)*. The hexagram counsels: *success; perseverance furthers; to take a maiden to wife brings good fortune*. The lesson: the season is one of *mutual influence* — not domination, not submission, but the natural response of two well-formed beings. The classical commentary names this as the foundation of right partnership: yang reaches, yin receives, both are changed.',
    when_pulled: 'A season of mutual influence is here — relational, creative, professional. The hexagram counsels: receive and respond. Do not dominate, do not submit; allow the natural exchange.',
    changing_lines: 'The lines move up the body — *influence in the big toe; in the calves; in the thighs; in the heart; in the back of the neck; in the jaws and tongue*. The lesson: influence rises from low to high, from the foot to the speech. Speech-level influence is the highest, AND it is also the easiest to corrupt. The deepest influence is the heart line, line 4.',
    in_love: 'The mutual response is real. Receive it. Respond from your own truth. The relationship that is built on *Xián* — actual mutual response — is the deepest kind.',
    in_work: 'The collaboration, the partnership, the deal — let it be mutual. The deal where one party dominates and the other submits is not *Xián*; it is exploitation dressed as exchange.',
    the_gift: '*Mutual response.* The recognition that the deepest connections are built on actual response — not on dominance, not on submission, but on mutual change.',
    the_shadow: 'Performed influence. The wooing that is calculation. The relationship that looks mutual and is actually one-sided. *Xián* requires actual mutual change.',
    key_questions: [
      'Where in my life right now is mutual influence asking to be received?',
      'Where am I dominating instead of responding — or submitting instead of responding?',
      'What is the heart-line of this exchange — am I actually being changed, or only performing change?'
    ]
  },
  {
    n: 32, slug: '32-duration', chinese: '恆', pinyin: 'Héng', name_en: 'Duration',
    glyph: '䷟', trigrams: 'Thunder above Wind', family: 'cycles',
    one_liner: 'Thunder above wind — the steady pattern that endures; duration as discipline.',
    meaning: 'Hexagram 32, *Héng*, is the image of thunder and wind moving together in a sustained pattern. The classical name is *Duration*. The hexagram counsels: *success, no blame; perseverance furthers; it furthers one to have somewhere to go*. The lesson: this is a season of *staying with*. The marriage, the practice, the long project — the work is the duration itself. *Héng* does not mean *forever*; it means *long enough*. The discipline is to stay through the slumps that every long thing has, without confusing the slump with the verdict.',
    when_pulled: 'A season of duration is here. The work is to *stay with*. The marriage, the practice, the long project — not new beginnings today, but the disciplined continuation of what is already begun.',
    changing_lines: 'Line 4 is *no game in the field* — the warning that perseverance in the wrong place is its own failure. Sometimes *Héng* requires stopping. Line 6 is *restlessness as an enduring condition; misfortune* — duration as anxiety rather than as ground; the failure mode of perseverance is restless persistence.',
    in_love: 'Stay with the relationship through the slump that every relationship has. *Héng* asks for the steady ground, not the breakthrough.',
    in_work: 'The long project, the long practice, the long apprenticeship — stay with. The slump is not the verdict.',
    the_gift: '*Staying with.* The recognition that duration is itself a discipline, distinct from beginning, distinct from finishing.',
    the_shadow: 'Persistence in the wrong place. *Héng* requires staying with *the right thing*; staying with the wrong thing is not duration, it is being stuck.',
    key_questions: [
      'What in my life right now is asking for duration — for the steady stay-with rather than the new beginning?',
      'Where am I confusing being-stuck with *Héng* — perseverance in the wrong place?',
      'What does the *steady ground* version of this look like, distinct from restless persistence?'
    ]
  },
  {
    n: 33, slug: '33-retreat', chinese: '遯', pinyin: 'Dùn', name_en: 'Retreat',
    glyph: '䷠', trigrams: 'Heaven above Mountain', family: 'trials',
    one_liner: 'Heaven receding behind the mountain — strategic withdrawal that preserves what is worth preserving.',
    meaning: 'Hexagram 33, *Dùn*, is the image of heaven receding behind the mountain — the great voluntarily withdrawing as the small advances. The classical name is *Retreat*. The hexagram counsels: *success; in what is small, perseverance furthers*. The lesson: the time for forward push has ended; the wise course is *strategic withdrawal* — pulling back to preserve strength rather than expending it on a battle that will not be won. Retreat in the I Ching is not defeat; it is the disciplined recognition that the moment is wrong.',
    when_pulled: 'The hexagram counsels withdrawal. Not defeat — withdrawal. Pull back from the contested field. Preserve resources. Wait for the better season. The mountain is rising; let heaven recede behind it for now.',
    changing_lines: 'Line 4 is *voluntary retreat brings good fortune to the superior man; downfall to the inferior man* — retreat is good when it is *chosen* by the strong; ruinous when it is *forced* on the weak. The discriminator is voluntariness.',
    in_love: 'Pull back from the contested ground in the relationship. Not abandonment — strategic withdrawal. Stop pushing the conversation that is not ready. Tend your own quiet.',
    in_work: 'Withdraw from the contested deal, the failing project, the impossible client. Not surrender — strategic re-positioning. Preserve the strength for the better season.',
    the_gift: '*Voluntary withdrawal.* The recognition that the strong choose retreat at the right moment, while the weak are forced into it.',
    the_shadow: 'Confusing retreat with defeat. Or making it permanent — the soldier who retreats and never re-engages becomes a deserter. *Dùn* preserves strength *for the next campaign*.',
    key_questions: [
      'What contested ground in my life right now would benefit from voluntary withdrawal?',
      'Am I retreating because I am strong (preserving for next season) or because I am defeated (giving up)?',
      'What is the next season I am preserving strength for?'
    ]
  },
  {
    n: 34, slug: '34-great-power', chinese: '大壯', pinyin: 'Dà Zhuàng', name_en: 'The Power of the Great',
    glyph: '䷡', trigrams: 'Thunder above Heaven', family: 'trials',
    one_liner: 'Thunder above heaven — vast force in motion; great power that requires great discipline.',
    meaning: 'Hexagram 34, *Dà Zhuàng*, is the image of thunder bursting above heaven — vast power in motion. The classical name is *The Power of the Great*. The hexagram counsels: *perseverance furthers*. The lesson is brief and severe: when great power is in your hands, the only question that matters is *whether you are righteous enough to wield it*. Power without righteousness is the most destructive force in the I Ching; power with righteousness is the most transformative.',
    when_pulled: 'You have come into great power — political, financial, creative, relational. The hexagram\'s only counsel: *perseverance furthers*. Stay disciplined. The power is asking whether you are big enough to hold it.',
    changing_lines: 'Line 3 is *the inferior man uses power; the superior man does not act thus; perseverance brings danger* — the warning that power untempered by discipline becomes self-destruction. Line 6 is *a goat butts against a hedge; he cannot retreat, he cannot advance — recognising the difficulty brings good fortune* — power that has run into its own limits; the recognition itself is the freedom.',
    in_love: 'Power dynamics in the relationship are real. Use yours righteously. The strong partner who uses strength to dominate corrupts the relationship. The strong partner who uses strength to protect, lift, and free deepens it.',
    in_work: 'You have come into authority. Use it for the work, not for the self. Power deployed for the mission expands the mission; power deployed for the ego shrinks it.',
    the_gift: '*Disciplined power.* The recognition that the only thing more dangerous than weakness is strength without restraint.',
    the_shadow: 'The goat butting the hedge — power applied where it cannot succeed, ego refusing to recognise its limits. Power without discipline destroys what it touches.',
    key_questions: [
      'What power has been given to me right now — and am I using it for the mission or for the ego?',
      'Where am I being a goat butting a hedge — applying force where it cannot succeed?',
      'Who is the *me-with-discipline* who is big enough to hold this strength without being corrupted by it?'
    ]
  },
  {
    n: 35, slug: '35-progress', chinese: '晉', pinyin: 'Jìn', name_en: 'Progress',
    glyph: '䷢', trigrams: 'Fire above Earth', family: 'trials',
    one_liner: 'Sun rising over the earth — visible advancement; the bright morning of recognised progress.',
    meaning: 'Hexagram 35, *Jìn*, is the image of the sun rising above the earth — visible, bright, advancing. The classical name is *Progress*. The hexagram counsels: *the powerful prince is honoured with horses in large numbers; in a single day he is granted audience three times*. The lesson: this is a season of *recognised* progress. The work that has been quietly building is finally being seen, supported, advanced. Receive the recognition; use the support.',
    when_pulled: 'You are in a season of visible progress. The work that was quietly building is being recognised. Receive the recognition without false modesty, use the resources offered, advance the work.',
    changing_lines: 'Line 1 is *progressing, but turned back; perseverance brings good fortune; if one meets with no confidence, one should remain calm; no mistake* — early progress that meets resistance; calm continuation is the path. Line 6 is *making progress with the horns is permissible only for the purpose of punishing one\'s own city; awareness of danger brings good fortune* — progress turned to the conquest of others is corruption; turned inward to one\'s own discipline, it is mastery.',
    in_love: 'The relationship is advancing visibly. Honour the progress. Do not undercut it with false modesty.',
    in_work: 'Recognition is arriving. Receive it cleanly. Use the resources offered. Advance the work.',
    the_gift: '*Visible advance.* The recognition that some seasons reward the quiet years of work with bright recognition; receive them.',
    the_shadow: 'Progress turned to the conquest of others. Using rising power to dominate rather than to advance the work itself.',
    key_questions: [
      'Where in my life right now is progress visibly arriving that I have been failing to receive?',
      'Where am I undercutting recognition with false modesty?',
      'Where am I tempted to turn rising power outward (conquest) when it is meant to be turned inward (discipline)?'
    ]
  },
  {
    n: 36, slug: '36-darkening-of-the-light', chinese: '明夷', pinyin: 'Míng Yí', name_en: 'Darkening of the Light',
    glyph: '䷣', trigrams: 'Earth above Fire', family: 'trials',
    one_liner: 'Sun sunk beneath the earth — the season of hidden light; the wise behaviour in dark times.',
    meaning: 'Hexagram 36, *Míng Yí*, is the image of the sun sunk beneath the earth — the season of *hidden light*. The classical name is *Darkening of the Light*. The hexagram counsels: *in adversity, it furthers one to be persevering*. The lesson: there are seasons in which the wise course is to *hide the light* — to not display competence in environments that punish it, to keep counsel, to wait for the dawn. The light is not extinguished; it is hidden. The hexagram\'s most-cited line is *one veils his light, but yet still shines* — concealment as protection of the source.',
    when_pulled: 'You are in a darkening season — environmentally, politically, relationally. The wise behaviour is to *hide the light*: not to display all you know, not to engage every provocation, not to make yourself a target. Veil the light. The dawn will come.',
    changing_lines: 'Line 5 is *darkening of the light, as with Prince Chi; perseverance furthers* — the classical reference to Prince Chi, who survived a tyrannical dynasty by concealing his wisdom while preserving it for the next generation. Concealment as transmission.',
    in_love: 'Some truths are not safe to speak in this season. Hold them. The right moment will come. *Míng Yí* is not lying; it is preservation.',
    in_work: 'You are in a hostile environment — bad boss, toxic team, politically dangerous moment. Hide the light. Preserve the work. The dawn will come.',
    the_gift: '*Concealed strength.* The recognition that some seasons require hiding the light to preserve it for the dawn that is coming.',
    the_shadow: 'Hiding the light forever. Concealment as a permanent state. *Míng Yí* is *for the dark season*; carrying it into the light becomes its own corruption.',
    key_questions: [
      'What environment am I in right now where the wise course is to veil the light?',
      'What truth am I holding that is not safe to speak yet — and am I preserving it cleanly, or starting to lose track of it?',
      'When will the dawn come — and how will I know to begin shining again?'
    ]
  },
  {
    n: 37, slug: '37-the-family', chinese: '家人', pinyin: 'Jiā Rén', name_en: 'The Family (The Clan)',
    glyph: '䷤', trigrams: 'Wind above Fire', family: 'trials',
    one_liner: 'Fire kindling wind — the well-ordered hearth; the family as the foundational social form.',
    meaning: 'Hexagram 37, *Jiā Rén*, is the image of fire generating wind — the warmth of the hearth radiating outward. The classical name is *The Family (The Clan)*. The hexagram counsels: *the perseverance of the woman furthers*. The lesson is precise: the family — biological or chosen — is the foundational social form. The order in the family makes possible the order in the larger world. *Each in their right place; each holding the right responsibility* — the hexagram celebrates the well-ordered hearth, and counsels that the larger work depends on it.',
    when_pulled: 'Your family — biological or chosen — is asking for attention. Order the hearth. Tend the relationships. The larger work you are doing depends on a sound base; do not let the base decay while you fight for the larger goal.',
    changing_lines: 'Line 5 is *as a king he approaches his family; fear not; good fortune* — the leader who comes home as family, not as authority, holds the family. Line 6 is *his work commands respect; in the end, good fortune* — the family well-tended produces work that earns respect.',
    in_love: 'The relationship is the hearth. Tend it. Do not sacrifice it for the larger ambition; the larger ambition depends on it.',
    in_work: 'The team you have built is a family. Tend it. The leader who only optimises for output and neglects the human family of the team destroys the foundation.',
    the_gift: '*The well-ordered hearth.* The recognition that the foundation of any larger work is the family well-tended.',
    the_shadow: 'Sacrificing the family for the larger goal. The driven leader who builds the empire and loses the home. The hearth that goes cold while the world is conquered.',
    key_questions: [
      'What family — biological or chosen — am I being asked to tend right now?',
      'Where am I sacrificing the hearth for the larger goal — and is the goal even worth what I am sacrificing for it?',
      'How do I order this family well — each in their right place, each holding the right responsibility?'
    ]
  },
  {
    n: 38, slug: '38-opposition', chinese: '睽', pinyin: 'Kuí', name_en: 'Opposition',
    glyph: '䷥', trigrams: 'Fire above Lake', family: 'trials',
    one_liner: 'Fire rising and lake sinking — the two moving in opposite directions; opposition that contains the seed of new combination.',
    meaning: 'Hexagram 38, *Kuí*, is the image of fire rising while water sinks — two forces moving in opposite directions, unable to meet. The classical name is *Opposition*. The hexagram counsels: *in small matters, good fortune*. The lesson: this is a season of *misalignment*. Big undertakings will not work; small ones will. The wise behaviour is to keep the small things in good order while waiting for the larger alignment to return. *Kuí* also contains a hidden teaching: opposition often holds the seed of a new and stronger combination — the very fact that two parties are seeing things differently sometimes produces a third position neither could have found alone.',
    when_pulled: 'The current relational or organisational alignment is off. Big moves will not work. Tend the small details, keep the small honest things in order, and watch for the new alignment to emerge from the very opposition you are currently experiencing.',
    changing_lines: 'Line 6 is *isolated through opposition, one sees one\'s companion as a pig covered with dirt, as a wagon full of devils; one first draws the bow against him, then puts it aside; he is no robber, he wants to woo when the time comes; on going, rain falls; good fortune* — the warning that long opposition distorts perception; what looked like enemy is in fact ally. The rain is the reconciliation.',
    in_love: 'You and your partner are not seeing the same thing right now. Do not fight to align by force. Tend the small things. Wait for the rain.',
    in_work: 'The team is misaligned. Stop trying to force agreement. Keep the small things working. The new alignment emerges from the misalignment, not by overriding it.',
    the_gift: '*Productive opposition.* The recognition that some misalignments contain the seed of stronger future alignments — and that forcing premature agreement destroys the seed.',
    the_shadow: 'Reading opposition as enmity. The line-6 distortion: long opposition makes the other look like a pig covered with dirt. Most opposition is not enemy; most opposition is misseen ally.',
    key_questions: [
      'Where in my life right now am I in opposition — and am I forcing premature agreement, or letting the new alignment emerge?',
      'Whom am I seeing as an enemy who is in fact a misseen ally?',
      'What small thing can I tend well during this season of misalignment?'
    ]
  },
  {
    n: 39, slug: '39-obstruction', chinese: '蹇', pinyin: 'Jiǎn', name_en: 'Obstruction',
    glyph: '䷦', trigrams: 'Water above Mountain', family: 'trials',
    one_liner: 'Water on top of mountain — the path is blocked; obstruction that asks the traveller to stop and find help.',
    meaning: 'Hexagram 39, *Jiǎn*, is the image of water above the mountain — the steep path is blocked, the going is obstructed. The classical name is *Obstruction*. The hexagram counsels: *the south-west furthers; the north-east does not further; it furthers one to see the great man; perseverance brings good fortune*. The lesson: the direct way is blocked. The wise course is to *go around* (south-west, the easy route) rather than continue trying to push through (north-east, the steep blocked route), AND to *seek the great man* — find the wise counsel, the mentor, the third party who can see what you cannot.',
    when_pulled: 'The direct path is blocked. Stop pushing. Find the easier route (south-west) and find the wise counsel (the great man). The hexagram is precise: do not push through the blockage by force.',
    changing_lines: 'Line 5 is *in the midst of the greatest obstructions, friends come* — the deepest help arrives in the deepest blockage; the wise traveller accepts the help.',
    in_love: 'The conversation, the connection, the resolution is blocked. Stop pushing it directly. Find the side path. Get help — therapist, mentor, friend who can see what you cannot.',
    in_work: 'The deal, the project, the launch is blocked. Stop pushing it directly. Find the easier route. Find the great man — the advisor, the mentor, the consultant.',
    the_gift: '*The side path and the great man.* The recognition that some obstructions are gifts forcing the traveller to find help, take a different route, or both.',
    the_shadow: 'Pushing through forever. The traveller who refuses to take the side path, refuses to seek counsel, and exhausts himself against the blockage.',
    key_questions: [
      'What path in my life right now is blocked that I have been pushing forward by force?',
      'What is the south-west — the easier route — that I have been refusing because the north-east is the *real* path?',
      'Who is the great man I have not yet sought — the wise counsel, the mentor, the advisor?'
    ]
  },
  {
    n: 40, slug: '40-deliverance', chinese: '解', pinyin: 'Xiè', name_en: 'Deliverance',
    glyph: '䷧', trigrams: 'Thunder above Water', family: 'trials',
    one_liner: 'Thunder over water — the storm breaking and clearing; the season the long obstruction finally releases.',
    meaning: 'Hexagram 40, *Xiè*, is the image of thunder over water — the storm that breaks and then clears, releasing what has been held. The classical name is *Deliverance*. The hexagram counsels: *the south-west furthers; if there is nothing more to seek, return brings good fortune; if there is still something to seek, hastening brings good fortune*. The lesson: the obstruction has released. The wise behaviour now is *not to dwell* in the suffering that has just ended — return to ordinary life, or move quickly to claim what was being held back.',
    when_pulled: 'The release has come. The blockage that has been holding for a long time is finally breaking. The hexagram counsels: do not stay in the old grief; move into the new freedom. Return to ordinary life, or hasten to claim what was held.',
    changing_lines: 'Line 6 is *the prince shoots at a hawk on a high wall; he kills it; everything serves to further* — the precise final correction that closes the chapter cleanly. Sometimes deliverance requires one last decisive act.',
    in_love: 'The long-held tension is releasing. Do not stay in the old grief. Move into the new ground. Reconciliation, fresh start, or clean release — the hexagram is permission for the move.',
    in_work: 'The obstacle has cleared. Move quickly. Claim the territory that was being denied. Do not dwell in the old battle.',
    the_gift: '*Right exit from suffering.* The recognition that when deliverance comes, the wise behaviour is to leave the suffering cleanly rather than dwell in its aftermath.',
    the_shadow: 'Dwelling in the released grief. Continuing to feel the old suffering after the release has come — turning what was real grief into identity.',
    key_questions: [
      'What blockage in my life has just released that I have been continuing to suffer as if it were still active?',
      'Where am I being asked to *return* (to ordinary life) versus to *hasten* (to claim what is now possible)?',
      'What is the one last decisive act — the hawk on the high wall — that closes this chapter cleanly?'
    ]
  },
  {
    n: 41, slug: '41-decrease', chinese: '損', pinyin: 'Sǔn', name_en: 'Decrease',
    glyph: '䷨', trigrams: 'Mountain above Lake', family: 'trials',
    one_liner: 'Mountain above lake — what is below is decreased to enrich what is above; voluntary giving up that produces growth.',
    meaning: 'Hexagram 41, *Sǔn*, is the image of decrease — what is below given up to enrich what is above. The classical name is *Decrease*. The hexagram counsels: *if there is sincerity, supreme good fortune, no blame; one may be persevering in this; it furthers one to undertake something; how is this carried out? One may use two small bowls for the sacrifice*. The lesson: voluntary decrease — giving up something below in order to enrich something above — is a profound discipline. The smallest sincere offering, given with full presence, is greater than the largest insincere one.',
    when_pulled: 'Something is being asked of you to decrease — a habit, a possession, a relationship-pattern, a mode of being. The hexagram says: give it up sincerely. Even a small sincere giving is great. The decrease below feeds the growth above.',
    changing_lines: 'Line 5 is *someone does indeed increase him; ten pairs of tortoises cannot oppose it; supreme good fortune* — the sincere decrease that calls down enormous reciprocal blessing. The universe responds.',
    in_love: 'You are being asked to give up something — a defense, a habit, a way of being — that has been blocking the love. The decrease frees the increase.',
    in_work: 'Cut the unnecessary. The decrease frees energy for the increase. The smallest sincere offering is greater than the largest insincere one.',
    the_gift: '*Voluntary giving-up.* The recognition that decrease, sincerely offered, calls down increase that no calculation could have produced.',
    the_shadow: 'Performed decrease. The giving-up that is in fact a strategy. Sincerity is the discriminator.',
    key_questions: [
      'What in my life right now is asking to be decreased — voluntarily given up — to free the next level of growth?',
      'What is the *two small bowls* — the smallest sincere offering — that I can make today?',
      'Where am I performing decrease as strategy when the hexagram is asking for sincerity?'
    ]
  },
  {
    n: 42, slug: '42-increase', chinese: '益', pinyin: 'Yì', name_en: 'Increase',
    glyph: '䷩', trigrams: 'Wind above Thunder', family: 'trials',
    one_liner: 'Wind and thunder reinforcing each other — the dynamic increase; what is above gives down to what is below.',
    meaning: 'Hexagram 42, *Yì*, is the inverse of *Sǔn* — what is above gives *down* to enrich what is below. The classical name is *Increase*. The hexagram counsels: *it furthers one to undertake something; it furthers one to cross the great water*. The lesson: a season of expansion is here. Resources flow from above to below — the leader gives to the team, the parent gives to the child, the universe gives to the practitioner. The wise behaviour: *use the increase for great undertakings*, not for small comforts.',
    when_pulled: 'A season of increase is on you. Resources, support, opportunities are flowing toward you. The hexagram counsels: deploy them for something great. The increase is for the great water.',
    changing_lines: 'Line 5 is *if in truth you have a kind heart, ask not — supreme good fortune; truly, kindness will be recognised as your virtue* — the kindness that asks no recognition is itself recognised.',
    in_love: 'A season of giving in the relationship — receive it without smallness, give it without calculation. The increase grows by passing through.',
    in_work: 'Resources are arriving. Use them for the large undertaking — the launch, the team expansion, the bold investment.',
    the_gift: '*Increase used for great undertakings.* The recognition that resources arriving in a season of *Yì* are meant for the great water, not for small comfort.',
    the_shadow: 'Hoarding the increase. Using it for small comforts when it was meant for the great undertaking. The increase that is not deployed evaporates.',
    key_questions: [
      'What increase has arrived in my life right now — that I have been treating as small windfall rather than as season of great undertaking?',
      'What is the great water this increase is meant for?',
      'Where am I using arriving resources for small comfort instead of for the work they were sent to fund?'
    ]
  },
  {
    n: 43, slug: '43-breakthrough', chinese: '夬', pinyin: 'Guài', name_en: 'Breakthrough (Resoluteness)',
    glyph: '䷪', trigrams: 'Lake above Heaven', family: 'trials',
    one_liner: 'Lake risen above heaven — the dam about to break; resolute breakthrough that requires honest confrontation.',
    meaning: 'Hexagram 43, *Guài*, is the image of the lake risen above heaven — five strong yang lines pushing one weak yin line at the top out of the field. The classical name is *Breakthrough (Resoluteness)*. The hexagram counsels: *one must resolutely make the matter known at the court of the king; it must be announced truthfully; danger; it is necessary to notify one\'s own city; it does not further to resort to arms; it furthers one to undertake something*. The lesson: breakthrough requires honest, public, resolute confrontation — *with* the right tactics. Not arms (force) but *truthful announcement*. Name the thing. Stand by the naming.',
    when_pulled: 'A breakthrough is at hand — but it requires honest, public confrontation. The thing must be named. Do not use force; use truthful speech. Stand by what you announce. The dam breaks because it can no longer hold.',
    changing_lines: 'Line 4 is *no skin on his thighs and walking with difficulty; if a man were to let himself be led like a sheep, remorse would disappear; but if these words are heard, they will not be believed* — the warning that those who must lead the breakthrough are often the ones who suffered most in the obstruction; their leading requires courage that the comfortable will not even understand.',
    in_love: 'The thing that has been unspoken must be spoken. Honestly, publicly within the relationship. Not as accusation; as resolute naming. The breakthrough is on the other side of the truthful word.',
    in_work: 'The pattern that everyone is pretending not to see must be named. Resolutely. In public. Without arms (without political maneuvering), with truthful speech.',
    the_gift: '*Resolute truthful confrontation.* The recognition that some breakthroughs only happen on the other side of clean public truth-telling.',
    the_shadow: 'Truth-telling that becomes attack. Resoluteness that becomes brutality. *Guài* requires the force of honesty without the cruelty of force.',
    key_questions: [
      'What in my life is asking for resolute, honest, public naming?',
      'Where am I tempted to use force when the hexagram is asking for truthful speech?',
      'What dam is about to break that I have been holding back by my silence?'
    ]
  },
  {
    n: 44, slug: '44-coming-to-meet', chinese: '姤', pinyin: 'Gòu', name_en: 'Coming to Meet',
    glyph: '䷫', trigrams: 'Heaven above Wind', family: 'trials',
    one_liner: 'Wind under heaven — a single yin line returning at the bottom; the small force whose arrival must be carefully assessed.',
    meaning: 'Hexagram 44, *Gòu*, is the inverse of *Guài* — a single yin line returning at the bottom of five yang lines. The classical name is *Coming to Meet*. The hexagram counsels: *the maiden is powerful; one should not marry such a maiden*. The lesson: a small force is entering the field — and the I Ching counsels caution. *Gòu* is the warning that what looks like an innocent meeting may carry consequences far beyond the surface. Assess carefully before binding yourself.',
    when_pulled: 'A new arrival is in your field — a person, an opportunity, an idea. The hexagram counsels caution. Do not bind yourself prematurely. Assess. The small force, if it is wrong, can corrupt much larger structures.',
    changing_lines: 'Line 5 is *a melon covered with willow leaves; hidden lines; then it drops down to one from heaven* — the warning that what looks ordinary may contain unusual significance; the *meeting* is sometimes a fated encounter that requires careful reception.',
    in_love: 'A new attraction is arriving. Assess it carefully. The hexagram is not a verdict against — it is a counsel of caution. Do not bind yourself before you have seen what the small force actually carries.',
    in_work: 'A new opportunity, a new partner, a new offer is arriving. Assess. Do not commit prematurely. The hexagram\'s warning is real.',
    the_gift: '*Discernment at the threshold.* The recognition that not every arrival is to be received without question, and that careful assessment at the meeting is not paranoia but wisdom.',
    the_shadow: 'Premature binding. Marriage to the powerful maiden against the hexagram\'s exact warning. Or its inverse: paranoia that refuses every meeting, including the legitimate ones.',
    key_questions: [
      'What new arrival in my life right now needs careful assessment before I bind myself?',
      'Where am I in danger of premature binding to a small force whose consequences I have not yet seen?',
      'What is the actual cost of saying *not yet* until I have assessed?'
    ]
  },
  {
    n: 45, slug: '45-gathering-together', chinese: '萃', pinyin: 'Cuì', name_en: 'Gathering Together (Massing)',
    glyph: '䷬', trigrams: 'Lake above Earth', family: 'trials',
    one_liner: 'Lake on top of earth — the gathering of waters; massing as both opportunity and danger.',
    meaning: 'Hexagram 45, *Cuì*, is the image of waters gathering on the earth — a great pooling, a great congregation. The classical name is *Gathering Together (Massing)*. The hexagram counsels: *success; the king approaches his temple; it furthers one to see the great man; this brings success; perseverance furthers; to bring great offerings creates good fortune; it furthers one to undertake something*. The lesson: gathering is powerful AND dangerous. Many people massed together can produce great things — or great destruction. The classical counsel is to *honour the centre* (the king at his temple), *seek wisdom* (the great man), and *make great offerings* — investments commensurate with the scale of the gathering.',
    when_pulled: 'A gathering is forming — community, team, congregation, movement. The hexagram counsels: honour the centre, seek wisdom, make offerings worthy of the scale. Gatherings without these become mobs.',
    changing_lines: 'Line 5 is *if there is gathering together in his place, no blame; if some are not yet sincerely in the work, sublime and enduring perseverance is needed; then remorse disappears* — the leader of a gathering must hold steady through the resistance of those not yet sincere; sincerity is contagious if the leader holds.',
    in_love: 'The gathering — the wedding, the family event, the larger relational pattern — needs honouring. Make the offering. Hold the centre.',
    in_work: 'The team gathering, the company-wide moment, the movement — make it real. Honour the centre. Make offerings (resources, energy, presence) worthy of the gathering.',
    the_gift: '*Right gathering.* The recognition that congregations of people produce great things when honoured well, and great destruction when neglected.',
    the_shadow: 'Gathering without centre. The mob. The crowd that massed without honouring its core becomes destructive.',
    key_questions: [
      'What gathering — relational, professional, communal — am I being asked to honour right now?',
      'What offering, commensurate with the scale of the gathering, am I being asked to make?',
      'Where is the centre that this gathering needs to honour to remain a community rather than a mob?'
    ]
  },
  {
    n: 46, slug: '46-pushing-upward', chinese: '升', pinyin: 'Shēng', name_en: 'Pushing Upward',
    glyph: '䷭', trigrams: 'Earth above Wind', family: 'trials',
    one_liner: 'Wood pushing up through earth — the slow steady growth of the tree; pushing upward as patient persistence.',
    meaning: 'Hexagram 46, *Shēng*, is the image of wood (trigram *Sun*, also called Wind) pushing up through the earth — the slow, steady growth of the tree from the seed. The classical name is *Pushing Upward*. The hexagram counsels: *supreme success; one must see the great man; fear not; departure toward the south brings good fortune*. The lesson: the season favours steady upward movement — the slow growth, the patient climb, the disciplined progression. *See the great man* — find the wise counsel. *Fear not* — the season is with you. *South* is the direction of brightness in classical Chinese cosmology; move toward the bright direction.',
    when_pulled: 'A season of steady upward growth is here. The work is to persist — slowly, daily, with patience. Find the wise counsel; move toward the bright direction; fear nothing.',
    changing_lines: 'Line 4 is *the king offers him Mount Ch\'i; good fortune; no blame* — the fated recognition; the right person elevated to the right position. Line 6 is *pushing upward in darkness; it furthers one to be unremittingly persevering* — even when the way is dark, the disciplined upward push succeeds.',
    in_love: 'Steady growth. Daily presence. Do not rush toward the destination. The tree does not climb overnight.',
    in_work: 'Steady climb. Consistent work. Find the mentor. The hexagram is favourable for slow, disciplined ascent — not for shortcut, not for breakthrough.',
    the_gift: '*Patient ascent.* The recognition that some seasons reward steady daily upward push more than dramatic action.',
    the_shadow: 'Impatience. Trying to skip the steady climb. The tree that tries to grow overnight breaks.',
    key_questions: [
      'What in my life right now is asking for the steady patient upward push of *Shēng*?',
      'Where am I impatient, trying to skip the daily climb?',
      'Who is the great man — the wise counsel — I have not yet sought for this ascent?'
    ]
  },
  {
    n: 47, slug: '47-oppression', chinese: '困', pinyin: 'Kùn', name_en: 'Oppression (Exhaustion)',
    glyph: '䷮', trigrams: 'Lake above Water', family: 'trials',
    one_liner: 'Lake with water drained — the dry well; oppression as the season the resources have run out.',
    meaning: 'Hexagram 47, *Kùn*, is the image of the lake with water drained out below it — the dry well, the empty cistern. The classical name is *Oppression (Exhaustion)*. The hexagram counsels: *success; perseverance; the great man brings good fortune; no blame; when one has something to say, it is not believed*. The lesson is severe: this is a season of resource-exhaustion. People will not believe what you say. The wise behaviour is to keep your inner sincerity intact even when no one is listening, and to *not waste energy explaining yourself* to those who will not hear.',
    when_pulled: 'You are in a season of exhaustion. Resources, recognition, support are drained. The hexagram counsels: keep the inner sincerity. Do not waste energy on those who will not hear. The dawn comes — but not by your insisting on it.',
    changing_lines: 'Line 6 is *he is oppressed by creeping vines; he moves uncertainly and says — movement brings remorse; if one feels remorse over this and makes a start, good fortune* — even at the bottom of *Kùn*, the willingness to make one fresh start changes the season.',
    in_love: 'You are not being heard. Stop arguing your case. Hold your inner truth. The right ears will come.',
    in_work: 'You are exhausted; the team, the company, the project is exhausted. Stop trying to explain yourself to those who will not hear. Conserve. Hold the centre.',
    the_gift: '*Inner sincerity in exhaustion.* The recognition that the test of *Kùn* is whether you can hold your truth when no one believes it.',
    the_shadow: 'Bitterness. The exhaustion that turns into resentment. *Kùn* asks for sincerity-without-bitterness; the failure mode is bitter exhaustion that poisons the next season.',
    key_questions: [
      'Where am I exhausted right now — and who am I wasting energy trying to convince?',
      'What is my inner truth that I must hold even when no one believes it?',
      'How do I keep this exhaustion from turning into bitterness that poisons the next season?'
    ]
  },
  {
    n: 48, slug: '48-the-well', chinese: '井', pinyin: 'Jǐng', name_en: 'The Well',
    glyph: '䷯', trigrams: 'Water above Wind', family: 'trials',
    one_liner: 'Wood drawing water up through the earth — the village well; the inexhaustible source that depends on right-keeping.',
    meaning: 'Hexagram 48, *Jǐng*, is one of the deepest hexagrams in the book — the image of the village well, the source that does not move and from which every life draws. The classical name is *The Well*. The hexagram counsels: *the town may be changed, but the well cannot be changed; it neither decreases nor increases; they come and go and draw from the well; if one gets down almost to the water and the rope does not go all the way, or the jug breaks, it brings misfortune*. The lesson: there is a *source* in your life — a practice, a tradition, a relationship, a place — that is the well. It does not change. The work is to *keep the well clean*, to *let down the rope all the way*, and to *not break the jug at the moment of drawing*. The well is communal — many will draw from it.',
    when_pulled: 'There is a source in your life that has been neglected. Clean the well. Repair the jug. Let down the rope all the way. The well is what feeds you and the community; the maintenance of it is the central spiritual work.',
    changing_lines: 'Line 5 is *the well is clear and cold; one drinks from the cool spring* — the well well-kept; everyone is fed. Line 6 is *one draws from the well without hindrance; it is dependable; supreme good fortune* — the well in its highest function: the inexhaustible source.',
    in_love: 'The source of the relationship — the practice that has fed it — needs cleaning. The ritual that has slipped, the conversation that has been postponed, the well that has been neglected.',
    in_work: 'The deep practice that fed the work has slipped. Clean the well. The visible work depends on a source that requires regular maintenance.',
    the_gift: '*The inexhaustible source.* The recognition that the well does not change — but it does require keeping. Many will drink from a well well-kept.',
    the_shadow: 'Drawing without keeping. Drinking from the well and never cleaning it. The well dries.',
    key_questions: [
      'What is the well in my life — the practice, the tradition, the source — that I have been drawing from without keeping?',
      'Where has the rope been failing to reach all the way? Where has the jug been breaking?',
      'Who else drinks from this well — and am I keeping it clean for them as well as for myself?'
    ]
  },
  {
    n: 49, slug: '49-revolution', chinese: '革', pinyin: 'Gé', name_en: 'Revolution (Molting)',
    glyph: '䷰', trigrams: 'Lake above Fire', family: 'completion',
    one_liner: 'Fire under lake — the moment the old skin is shed; revolution as molting, transformation that requires perfect timing.',
    meaning: 'Hexagram 49, *Gé*, is the image of fire under the lake — boiling water, the heat that produces transformation. The classical name is *Revolution (Molting)*. The hexagram counsels: *on your own day, you are believed; supreme success; perseverance furthers; remorse disappears*. The lesson is precise: revolution requires *perfect timing*. Too early, and no one believes; too late, and the moment has passed. *On your own day* — the day the conditions are ripe — *you are believed*. The wise revolutionary waits for the day; the foolish one tries to manufacture it.',
    when_pulled: 'A transformation is at hand — old skin shedding, new skin forming. The hexagram counsels: wait for *your own day*. When the timing is right, the same words that were dismissed yesterday are heard. The molting is timed.',
    changing_lines: 'Line 5 is *the great man changes like a tiger; even before he questions the oracle, he is believed* — the fully aligned revolutionary whose timing and authority are so true that doubt does not arise. Line 6 is *the superior man changes like a panther; the inferior man molts in the face* — depth-of-change differs by character; the superior person changes deeply, the inferior changes only the surface.',
    in_love: 'The relationship is in molting. Old patterns are shedding. Wait for the right day to name the new pattern; do not force it before the conditions ripen.',
    in_work: 'The team, the company, the role is in revolution. Time the announcement. Time the move. The same proposal made on the right day succeeds where it failed yesterday.',
    the_gift: '*Right-timed transformation.* The recognition that revolution is a discipline of timing, not of will.',
    the_shadow: 'Premature revolution. Trying to force the molting before the new skin has formed. The animal exposed without protection.',
    key_questions: [
      'What in my life is in molting right now — old skin shedding, new skin still forming?',
      'When is *my own day* — the day the conditions ripen and what I have been saying becomes hearable?',
      'Where am I trying to force a transformation that is not yet ready?'
    ]
  },
  {
    n: 50, slug: '50-the-cauldron', chinese: '鼎', pinyin: 'Dǐng', name_en: 'The Cauldron',
    glyph: '䷱', trigrams: 'Fire above Wind', family: 'completion',
    one_liner: 'Wind feeding fire — the sacred vessel; the cauldron in which the raw becomes the cooked, the human becomes the wise.',
    meaning: 'Hexagram 50, *Dǐng*, is the image of the cauldron — the bronze ritual vessel of ancient China, used both for cooking food and for sacred offering. The classical name is *The Cauldron*. The hexagram counsels: *supreme good fortune; success*. The lesson: the cauldron is the vessel of *transformation* — what is raw enters, what is cooked emerges. Spiritually, this is the image of the body itself, the relationship, the practice — the vessel in which the raw human becomes the wise human. The wise behaviour is to *keep the cauldron well* — feed the fire, hold the form, let the cooking complete.',
    when_pulled: 'You are in the cauldron — a vessel of transformation that requires steady fire and held form. Do not interrupt the cooking. The raw becomes the cooked through *patient containment*.',
    changing_lines: 'Line 5 is *the cauldron has yellow handles, golden carrying rings; perseverance furthers* — the well-formed vessel; everything is in order. Line 6 is *the cauldron has rings of jade; great good fortune; nothing that would not act to further* — the most auspicious final line in the book; the vessel is precious, the work is whole.',
    in_love: 'The relationship is the cauldron. Both partners are being transformed. Do not interrupt the cooking. Hold the form.',
    in_work: 'The practice, the company, the long project is the cauldron. Steady fire. Held form. The wisdom is in the patience of containment.',
    the_gift: '*The vessel of transformation.* The recognition that some processes can only happen inside a held container, and that the holding itself is the work.',
    the_shadow: 'Lifting the lid. Interrupting the cooking. The impatience that opens the cauldron before the transformation completes — the meal is wasted.',
    key_questions: [
      'What cauldron am I in right now — what vessel of transformation am I being asked to hold?',
      'Where am I tempted to lift the lid before the cooking completes?',
      'How do I tend the fire and hold the form so the raw can become the cooked?'
    ]
  },
  {
    n: 51, slug: '51-the-arousing', chinese: '震', pinyin: 'Zhèn', name_en: 'The Arousing (Shock, Thunder)',
    glyph: '䷲', trigrams: 'Thunder above Thunder', family: 'completion',
    one_liner: 'Thunder above thunder — the doubled shock; awakening that arrives as terror and becomes laughter.',
    meaning: 'Hexagram 51, *Zhèn*, is the image of thunder above thunder — the doubled shock. The classical name is *The Arousing*. The hexagram counsels: *success; shock comes; oh oh!; laughing words; ha ha!; the shock terrifies for a hundred miles, and he does not let fall the sacrificial spoon and chalice*. The lesson is precise and beautiful: the shock arrives. The wise person *registers it* — *oh oh!* — but does not drop the sacred work — *he does not let fall the spoon and chalice* — and the shock passes into laughter — *ha ha!*. The terror is real; the discipline is the continuity of the sacred work through the terror.',
    when_pulled: 'A shock has arrived — bad news, sudden change, unexpected event. The hexagram\'s counsel is precise: register it, do not deny it, and *do not drop the sacred work*. The terror passes into laughter for the one who continues the practice through it.',
    changing_lines: 'Line 6 is *shock brings ruin and terrified gazing around; going ahead brings misfortune; if it has not yet touched one\'s own body but has reached one\'s neighbour first, there is no blame; one\'s comrades have something to talk about* — the proper response to a shock that has not yet touched you is to learn from it before it does.',
    in_love: 'A shock in the relationship has arrived. Register it, do not deny, do not drop the practice. The relationship that survives *Zhèn* is the deeper one.',
    in_work: 'A market shock, a leadership change, a sudden crisis. Register it cleanly. Do not drop the daily work. The terror passes into the next chapter for those who continue the practice.',
    the_gift: '*Continuity through shock.* The recognition that the discipline of *Zhèn* is to keep the sacred spoon in your hand even as the thunder rolls.',
    the_shadow: 'Frozen by shock. Dropping the work. Letting the terror become identity. The hexagram\'s exact counsel is the opposite: *the shock terrifies for a hundred miles, AND he does not drop the spoon*.',
    key_questions: [
      'What shock has just arrived in my life — and have I registered it cleanly, without freezing?',
      'What is my sacred spoon — the daily practice that I must not let fall through this?',
      'When does this shock pass from *oh oh* into *ha ha* — and what do I do in the interval?'
    ]
  },
  {
    n: 52, slug: '52-keeping-still', chinese: '艮', pinyin: 'Gèn', name_en: 'Keeping Still (Mountain)',
    glyph: '䷳', trigrams: 'Mountain above Mountain', family: 'completion',
    one_liner: 'Mountain above mountain — the doubled stillness; the practice of stopping that becomes the most active state.',
    meaning: 'Hexagram 52, *Gèn*, is the image of mountain above mountain — the doubled stillness. The classical name is *Keeping Still*. The hexagram counsels: *keeping his back still so that he no longer feels his body; he goes into his courtyard and does not see his people; no blame*. The lesson is profound: there is a kind of stillness so deep that the practitioner forgets the body — and from that depth, action arises that could not arise from any other state. *Gèn* is the meditation hexagram, the stillness that is more active than activity.',
    when_pulled: 'A season of stillness is on you — and the hexagram is asking for the deep kind, the kind that goes past the body. Stop. Sit. Let the mountain inside you stand. The action that arises from this stillness is wiser than any action you could plan.',
    changing_lines: 'Line 5 is *keeping his jaws still; the words have order; remorse disappears* — even the speech is stilled; the discipline of right speech arises from the stillness of the jaws. Line 6 is *noble-hearted keeping still; good fortune* — the deepest level: stillness in the heart itself.',
    in_love: 'Stop. Stop trying to fix. Stop explaining. Let the mountain stand. The relationship that has been over-managed needs the doubled stillness.',
    in_work: 'Stop iterating. Stop optimising. Stop pushing. Sit. The right move arises from the stillness, not from the planning.',
    the_gift: '*The active stillness.* The recognition that the deepest practice is the stopping that lets clarity arise.',
    the_shadow: 'Stillness as avoidance. Sitting forever to avoid the action that the stillness was meant to clarify. *Gèn* is the *first* movement; the action follows.',
    key_questions: [
      'Where in my life right now am I being asked to stop — to enter the doubled stillness — that I have been refusing because stopping feels like failure?',
      'What action am I planning that the hexagram is asking me to *not yet* take — to let stillness clarify it first?',
      'Where am I using stillness as avoidance rather than as clarification?'
    ]
  },
  {
    n: 53, slug: '53-development', chinese: '漸', pinyin: 'Jiàn', name_en: 'Development (Gradual Progress)',
    glyph: '䷴', trigrams: 'Wind above Mountain', family: 'completion',
    one_liner: 'Wood growing on mountain — the slow development of the tree; gradual progress that takes its full time.',
    meaning: 'Hexagram 53, *Jiàn*, is the image of wood growing on the mountain — gradual, slow development. The classical name is *Development*. The hexagram counsels: *the maiden is given in marriage; good fortune; perseverance furthers*. The lesson: this is the season for *gradual* progress — the tree growing on the mountain takes years, but its roots become deep and its trunk becomes unbreakable. The temptation to skip stages must be resisted; what is grown gradually lasts.',
    when_pulled: 'A season of gradual development is here. The work is to take each stage in turn, fully, before moving to the next. The tree on the mountain does not skip rings.',
    changing_lines: 'The lines move up the mountain — *the wild goose gradually draws near to the shore; to the cliff; to the plateau; to the tree; to the summit; to the cloud heights*. Each stage is its own teaching. The gradual ascent is the form of *Jiàn*.',
    in_love: 'The relationship is developing gradually. Honour each stage. Do not skip to the destination. The marriage that lasts is the one whose stages were each lived through.',
    in_work: 'The career, the practice, the mastery is developing gradually. Do not skip apprenticeship. Do not rush to the cloud heights. The wild goose takes the stages.',
    the_gift: '*Stages fully lived.* The recognition that gradual development produces what no shortcut can — depth of root, strength of trunk, length of life.',
    the_shadow: 'Skipping stages. The shortcut that produces brittle outcome. The summit reached without the foothills lacks the foundation to hold the climber there.',
    key_questions: [
      'What in my life is in gradual development right now that I am tempted to rush?',
      'Which stage am I at — and what does fully living *this* stage look like, before I move to the next?',
      'Where have I previously skipped a stage and watched the resulting structure prove brittle?'
    ]
  },
  {
    n: 54, slug: '54-the-marrying-maiden', chinese: '歸妹', pinyin: 'Guī Mèi', name_en: 'The Marrying Maiden',
    glyph: '䷵', trigrams: 'Thunder above Lake', family: 'completion',
    one_liner: 'Thunder above lake — the move that joins; the marriage that requires honest assessment of position.',
    meaning: 'Hexagram 54, *Guī Mèi*, is the image of thunder above the lake — the dynamic above the receptive, the move that joins. The classical name is *The Marrying Maiden*. The hexagram counsels: *undertakings bring misfortune; nothing that would further*. The lesson is severe: not every joining is right. *Guī Mèi* names the union that *should not be undertaken* — the position that is structurally wrong, the agreement that benefits one side more than the other, the marriage that the family politics demand but the souls do not. The hexagram counsels honest assessment before joining.',
    when_pulled: 'A union is being proposed — relationship, partnership, deal. The hexagram counsels: *assess the position*. Is this structurally right? Does it benefit both sides? Or is it a *Guī Mèi* — a joining that the politics demand but the soul does not?',
    changing_lines: 'Line 5 is *the sovereign Yi gave his daughter in marriage; the embroidered garments of the princess were not as gorgeous as those of the serving maid; the moon almost full; good fortune* — the wisdom of the high-position partner who does not flaunt her status; humility within the joining preserves the joining.',
    in_love: 'A union is being proposed and the hexagram is asking for *honest position-assessment*. Is this right? Or is it a Guī Mèi — a joining the politics want but the soul does not?',
    in_work: 'The deal, the partnership, the merger — assess the structure. The hexagram\'s warning is real: not every union should be undertaken.',
    the_gift: '*Honest assessment of joining.* The recognition that some unions benefit only one side and the wisdom is to refuse them rather than enter and suffer.',
    the_shadow: 'Joining without assessment. Marrying for the politics, the optics, the surface benefit. *Guī Mèi* unions produce *Guī Mèi* outcomes.',
    key_questions: [
      'What union am I being asked to enter — and have I honestly assessed the structural position?',
      'Where is the politics demanding what the soul does not want?',
      'What is the cost of refusing this joining — and is it less than the cost of entering?'
    ]
  },
  {
    n: 55, slug: '55-abundance', chinese: '豐', pinyin: 'Fēng', name_en: 'Abundance (Fullness)',
    glyph: '䷶', trigrams: 'Thunder above Fire', family: 'completion',
    one_liner: 'Thunder and lightning together — the noon of fullness; abundance that arrives knowing it will not last forever.',
    meaning: 'Hexagram 55, *Fēng*, is the image of thunder and lightning together — the bright dramatic noon of abundance. The classical name is *Abundance*. The hexagram counsels: *success; the king attains abundance; be not sad; be like the sun at midday*. The lesson: a season of *Fēng* is a great gift, and the I Ching is precise about how to receive it: *be like the sun at midday* — be fully present in the abundance, do not waste it on small fears, AND know that the noon is by definition the moment that begins to turn toward afternoon. Abundance has a horizon.',
    when_pulled: 'A season of abundance is here. The hexagram counsels: *be the sun at midday*. Use it. Do not shrink. Do not waste this on smallness. AND know it has a horizon — what you build during *Fēng* is what you carry into the next season.',
    changing_lines: 'Line 6 is *his house is in a state of abundance; he screens off his family; he peers through the gate and no longer perceives anyone; for three years he sees nothing — misfortune* — the warning that abundance, hoarded in private, becomes a prison; the abundant house with the closed gate is the failure mode of *Fēng*.',
    in_love: 'The relationship is full. Receive the fullness. Do not shrink with anticipatory grief. Be the sun at midday.',
    in_work: 'A season of fullness — recognition, resources, momentum. Be in it fully. Use it for the great work. The afternoon comes; meet it with what you built at noon.',
    the_gift: '*Full presence in fullness.* The recognition that abundance must be fully received to be fully used — and that hoarded abundance becomes its own prison.',
    the_shadow: 'Hoarding the abundance. The closed house, the screened-off family, the abundance that becomes a prison. *Fēng* is meant to be *expressed*.',
    key_questions: [
      'What abundance is in my life right now that I have been failing to fully receive?',
      'Where am I hoarding fullness instead of expressing it?',
      'When the afternoon comes — and it will — what will I wish I had built at this noon?'
    ]
  },
  {
    n: 56, slug: '56-the-wanderer', chinese: '旅', pinyin: 'Lǚ', name_en: 'The Wanderer',
    glyph: '䷷', trigrams: 'Fire above Mountain', family: 'completion',
    one_liner: 'Fire on top of mountain — the brushfire that does not stay; the wanderer whose discipline is the road itself.',
    meaning: 'Hexagram 56, *Lǚ*, is the image of fire moving across the mountain — the brushfire that does not stay long in any one place. The classical name is *The Wanderer*. The hexagram counsels: *success in small matters; perseverance brings good fortune to the wanderer*. The lesson: this is a season of *passing through*. The wanderer is in foreign territory — physically, emotionally, professionally. The discipline is to be a *good guest*: respectful, brief, paying for what you receive, not pretending to be a resident.',
    when_pulled: 'You are passing through a foreign territory — a new role, a new city, a new mode. The hexagram counsels: be a good guest. Pay attention. Pay for what you receive. Do not pretend to be a resident.',
    changing_lines: 'Line 6 is *the bird\'s nest burns up; the wanderer laughs at first, then must lament and weep; through carelessness he loses his cow; misfortune* — the warning that the wanderer who forgets he is a guest, who acts as if at home, loses the very things that protected him.',
    in_love: 'You are in unfamiliar emotional territory. Be respectful. Pay attention. Do not assume the patterns of your home territory apply.',
    in_work: 'You are in a new role, new domain, new context. Be a good guest. Learn before opining. Pay for what you receive.',
    the_gift: '*Right conduct in foreign territory.* The recognition that the wanderer\'s discipline — humility, attention, payment — is what allows safe passage.',
    the_shadow: 'The wanderer who forgets he is a guest. Acting as resident in someone else\'s territory. The bird\'s nest burns.',
    key_questions: [
      'What foreign territory am I in right now — and am I conducting myself as a good guest?',
      'Where am I assuming the patterns of my home territory apply?',
      'What is the cow I might carelessly lose by acting like a resident in territory where I am a guest?'
    ]
  },
  {
    n: 57, slug: '57-the-gentle', chinese: '巽', pinyin: 'Xùn', name_en: 'The Gentle (The Penetrating, Wind)',
    glyph: '䷸', trigrams: 'Wind above Wind', family: 'completion',
    one_liner: 'Wind above wind — the doubled gentle penetration; persistent influence that reaches everywhere.',
    meaning: 'Hexagram 57, *Xùn*, is the image of wind above wind — the doubled penetrating gentleness. The classical name is *The Gentle*. The hexagram counsels: *success through what is small; it furthers one to have somewhere to go; it furthers one to see the great man*. The lesson: gentle persistent penetration accomplishes what force cannot. Wind reaches every corner; the slow drip wears the stone. *Xùn* counsels: do not push; persist gently. The destination is reached by continued movement, not by force.',
    when_pulled: 'The work is to persist gently. Wind, not force. Continue the small daily action; it reaches further than the heroic intervention. *See the great man* — find the wise counsel for the *direction* of the persistence.',
    changing_lines: 'Line 5 is *perseverance brings good fortune; remorse vanishes; nothing that does not further; no beginning, but an end; before the change, three days; after the change, three days; good fortune* — the discipline of the well-timed change within the gentle persistence; the rhythm matters.',
    in_love: 'The pattern that needs changing in the relationship will not change by confrontation. It will change by gentle persistent re-orientation. Wind, not thunder.',
    in_work: 'The cultural change, the team transformation, the strategic shift — wind, not edict. Persist gently. Reach every corner.',
    the_gift: '*Gentle penetration.* The recognition that wind accomplishes what force cannot — and that the discipline of continuous gentle pressure is its own form of mastery.',
    the_shadow: 'Wind without direction. Endless gentle action that reaches everywhere and nowhere. *Xùn* requires *seeing the great man* — finding the right direction for the persistence.',
    key_questions: [
      'Where am I tempted to use force when the work is gentle persistent wind?',
      'What is the direction of my persistence — and have I found the great man who can guide it?',
      'What small daily action, persisted gently, would in fact reach further than any heroic intervention?'
    ]
  },
  {
    n: 58, slug: '58-the-joyous', chinese: '兌', pinyin: 'Duì', name_en: 'The Joyous (Lake)',
    glyph: '䷹', trigrams: 'Lake above Lake', family: 'completion',
    one_liner: 'Lake above lake — the doubled joy; pleasure that is sustained because it is shared.',
    meaning: 'Hexagram 58, *Duì*, is the image of lake above lake — the doubled joy. The classical name is *The Joyous*. The hexagram counsels: *success; perseverance is favourable*. The lesson: joy in the I Ching is not pleasure-seeking; it is *the sustained gladness of right relationship and right work*. *Duì* is the joy that does not deplete because it is shared — the lake that shares its surface with the sky and reflects it back.',
    when_pulled: 'A season of joy is here — and the hexagram counsels: *let it be shared*. Joy hoarded depletes; joy shared multiplies. The doubled lake reflects the sky.',
    changing_lines: 'Line 6 is *seductive joyousness* — the warning that joy can also be the cover for emptier seductions; the wise person notices the difference between sustaining gladness and the high that is in fact a craving in disguise.',
    in_love: 'A season of joy in the relationship. Share it outward. The joy that includes the wider community deepens; the joy that closes inward becomes thin.',
    in_work: 'A season of professional joy — the work is rewarding, the team is alive, the mission is clear. Share the gladness. Let others come in. The joy that becomes communal sustains.',
    the_gift: '*Sustained shared joy.* The recognition that gladness shared is not diluted but multiplied.',
    the_shadow: 'Seductive joyousness. The pleasure-seeking that masquerades as joy and produces only the high followed by the crash.',
    key_questions: [
      'Where in my life is joy present that I have been failing to share?',
      'What is the difference between this gladness and a seduction — and how can I tell?',
      'Who else does my joy include? Whom can I bring into the doubled lake?'
    ]
  },
  {
    n: 59, slug: '59-dispersion', chinese: '渙', pinyin: 'Huàn', name_en: 'Dispersion (Dissolution)',
    glyph: '䷺', trigrams: 'Wind above Water', family: 'completion',
    one_liner: 'Wind blowing across water — the dispersion of what was rigid; the dissolving of barriers.',
    meaning: 'Hexagram 59, *Huàn*, is the image of wind blowing across water — the surface dispersing, the rigid pattern dissolving. The classical name is *Dispersion*. The hexagram counsels: *success; the king approaches his temple; it furthers one to cross the great water; perseverance furthers*. The lesson: the season is dissolving rigidities — old defenses, old separations, old hardenings. The wise behaviour is to *honour the centre* (the king at his temple — keep the sacred), and to *use the dispersion* for the larger crossing that becomes possible when the rigidities yield.',
    when_pulled: 'Rigidities are dissolving in your field — old patterns, old defenses, old separations. The hexagram counsels: honour the centre, AND use the dispersion. What was blocked is becoming possible.',
    changing_lines: 'Line 5 is *his loud cries are as dissolving as sweat; dissolution; a king abides without blame* — the leader\'s clear public pronouncement dissolves the obstruction; sometimes the truth said loudly enough is itself the dispersion.',
    in_love: 'The defenses between you are dissolving. Honour the centre — the love that has held — and use the dispersion to cross into the deeper relationship that was blocked.',
    in_work: 'Old organisational rigidities are dissolving. Use the moment. The reorganisation that was impossible becomes possible. The product launch that was blocked clears.',
    the_gift: '*Dissolution as opening.* The recognition that not every dissolving is a loss; some are the precise condition that allows the next form to emerge.',
    the_shadow: 'Mistaking dissolution for chaos. Panicking at the loss of the rigid form. The wise course is to honour the centre and let the dispersion clear the way.',
    key_questions: [
      'What rigidity in my life is dissolving right now that I have been mistaking for loss?',
      'What is the centre I must honour through this dissolution to remain coherent?',
      'What great water becomes possible because of this dispersion?'
    ]
  },
  {
    n: 60, slug: '60-limitation', chinese: '節', pinyin: 'Jié', name_en: 'Limitation',
    glyph: '䷻', trigrams: 'Water above Lake', family: 'completion',
    one_liner: 'Water within the lake — the bounded form; limitation as the discipline that makes freedom possible.',
    meaning: 'Hexagram 60, *Jié*, is the image of water held within the lake — bounded form, contained energy. The classical name is *Limitation*. The hexagram counsels: *success; galling limitation must not be persevered in*. The lesson is dual: limitation is *good* — it is the discipline that makes form possible — AND limitation that becomes *galling* (oppressive, life-denying) must be released. The wise person finds the *right* limitation: the structure that frees rather than the structure that imprisons.',
    when_pulled: 'A season of limitation is here — and the hexagram is asking you to discern which limits free you and which strangle you. Honour the right limits; release the galling ones. The lake is bounded; water without form is flood.',
    changing_lines: 'Line 5 is *sweet limitation brings good fortune; going brings esteem* — the limitation that the practitioner himself recognises as right; the structure that does not feel like a cage.',
    in_love: 'The relationship has structures — rituals, agreements, rhythms. Some are right limits; some have become galling. Discern. Keep the right; release the strangling.',
    in_work: 'The discipline of the practice, the schedule, the rules. Which serve the work? Which strangle it? *Jié* asks for active discernment.',
    the_gift: '*Right limit.* The recognition that bounded form is freeing — and that the wise person knows the difference between the limit that frees and the limit that strangles.',
    the_shadow: 'Limitation as virtue regardless of consequence. The Stoic-pretence that all suffering is worth bearing. *Jié* counsels: galling limitation must not be persevered in.',
    key_questions: [
      'What limits in my life right now are *sweet* — they free me — and which are *galling* — they strangle me?',
      'Which galling limit have I been treating as virtue?',
      'What new bounded form is being asked of me — what right structure that would free the energy currently flooding?'
    ]
  },
  {
    n: 61, slug: '61-inner-truth', chinese: '中孚', pinyin: 'Zhōng Fú', name_en: 'Inner Truth',
    glyph: '䷼', trigrams: 'Wind above Lake', family: 'completion',
    one_liner: 'Wind above lake — the truth at the centre; the sincerity that touches even the wild and the silent.',
    meaning: 'Hexagram 61, *Zhōng Fú*, is one of the most-cherished hexagrams in the book — the image of wind moving over the lake, the breath touching the still water, the truth at the centre. The classical name is *Inner Truth*. The hexagram counsels: *pigs and fishes; good fortune; it furthers one to cross the great water; perseverance furthers*. The lesson: when sincerity is at the centre, it touches even the wild and the silent — the pigs (the hardest to influence) and the fishes (the most distant). The hexagram is the celebration of *truth lived from the centre*; nothing is beyond its reach.',
    when_pulled: 'The hexagram is naming the *inner truth* that is currently asking to be lived. Speak from the centre. Live from the centre. The reach of authentic sincerity goes further than any persuasion strategy could.',
    changing_lines: 'Line 2 is *a crane calling in the shade; its young answers it; I have a good goblet, I will share it with you* — the central image of the hexagram: the call of inner truth, even unseen, is heard and answered. Sincerity carries.',
    in_love: 'Speak from the centre. The truth lived honestly is the deepest gift; the relationship that survives *Zhōng Fú* is built on it.',
    in_work: 'The strategy, the proposal, the leadership move that comes from the centre lands further than the cleverest manufactured campaign. Pigs and fishes.',
    the_gift: '*Sincerity that reaches everywhere.* The recognition that authentic truth lived from the centre touches even what is least reachable.',
    the_shadow: 'Performed sincerity. The strategy of looking authentic. *Zhōng Fú* is the real thing or it is nothing.',
    key_questions: [
      'What is my inner truth that is currently asking to be lived rather than concealed?',
      'Where am I performing sincerity rather than living from the centre?',
      'Who are the pigs and fishes in my life — those hardest to reach — that authentic truth would in fact reach?'
    ]
  },
  {
    n: 62, slug: '62-small-preponderance', chinese: '小過', pinyin: 'Xiǎo Guò', name_en: 'Preponderance of the Small',
    glyph: '䷽', trigrams: 'Thunder above Mountain', family: 'completion',
    one_liner: 'Thunder above mountain — the season of small things, small ambitions; humility before the moment.',
    meaning: 'Hexagram 62, *Xiǎo Guò*, is the inverse of *Dà Guò* (#28) — the season in which the small is preponderant. The classical name is *Preponderance of the Small*. The hexagram counsels: *success; perseverance furthers; small things may be done, great things should not be done; the flying bird brings the message: it is not well to strive upward, it is well to remain below*. The lesson: this is *not* the season for great ambitions. The bird flying high is exposed; the bird remaining near the ground is safe. Small things, done well, are the work of *Xiǎo Guò*.',
    when_pulled: 'A season of *small* is here. Do not aim large. Tend the small details. The flying bird should remain near the ground. The hexagram\'s counsel is precise: *small things may be done, great things should not be done*.',
    changing_lines: 'Line 6 is *he passes by, not meeting him; the flying bird leaves him; misfortune; this means bad luck and injury* — the warning that ignoring the *small* counsel and reaching for the great in this season produces injury. The bird that flies too high in *Xiǎo Guò* is shot.',
    in_love: 'Do the small honest gestures. Do not attempt the grand renovation. The relationship is in the season of small.',
    in_work: 'Refine the existing. Do not launch the great new venture today. The day favours small precision over large ambition.',
    the_gift: '*Honour of the small season.* The recognition that some seasons reward exactly the work the ambitious resist — small, daily, unglamorous.',
    the_shadow: 'The flying bird that ignores the message. Pushing for the great in a season that punishes greatness. The injury that follows.',
    key_questions: [
      'What is the small work today is asking for — that I am tempted to skip in favour of a grand undertaking?',
      'Where is my bird flying too high in a season that asks for staying near the ground?',
      'What small precise action would in fact serve me better than the larger ambition I am imagining?'
    ]
  },
  {
    n: 63, slug: '63-after-completion', chinese: '既濟', pinyin: 'Jì Jì', name_en: 'After Completion',
    glyph: '䷾', trigrams: 'Water above Fire', family: 'completion',
    one_liner: 'Water above fire — the campfire under the cooking pot; everything in its right place, the moment after victory.',
    meaning: 'Hexagram 63, *Jì Jì*, is the image of water above fire — perfectly arranged for cooking. Every line is in its proper position. The classical name is *After Completion*. The hexagram counsels: *success in small matters; perseverance furthers; at the beginning, good fortune; at the end, disorder*. The lesson is precise and humbling: even at the moment of perfect alignment, *the seed of disorder is already present*. The wise person does not relax at the moment of completion; he tends the small things that will preserve the order through what comes next.',
    when_pulled: 'A completion has been reached. Everything is in its place. The hexagram\'s counsel is *do not relax*. The seed of disorder is already in the field. Tend the small. Preserve what was won.',
    changing_lines: 'Line 5 is *the neighbour in the east who slaughters an ox does not attain as much real happiness as the neighbour in the west with his small offering* — the warning that ostentatious celebration of completion attracts less blessing than the small sincere gratitude.',
    in_love: 'The relationship has reached a milestone. Honour it quietly. Do not relax the practices that built it. The disorder begins in the moment of *after-completion*.',
    in_work: 'A project has shipped. A goal has been hit. Honour it without ostentation, AND keep the discipline that produced it. The hexagram\'s warning is real.',
    the_gift: '*Vigilance in completion.* The recognition that the moment of perfect alignment is also the moment to begin tending what comes next.',
    the_shadow: 'Relaxation at completion. The team that, having shipped, drifts. The relationship that, having reached the milestone, stops practising. Disorder begins at the end.',
    key_questions: [
      'What completion have I just reached that I am tempted to relax into?',
      'What is the seed of disorder that is already in the field — and what small tending preserves the order?',
      'How do I celebrate without ostentation, and keep the discipline that produced this completion?'
    ]
  },
  {
    n: 64, slug: '64-before-completion', chinese: '未濟', pinyin: 'Wèi Jì', name_en: 'Before Completion',
    glyph: '䷿', trigrams: 'Fire above Water', family: 'completion',
    one_liner: 'Fire above water — the cooking pot still on the heat; the moment before completion when wisdom is most required.',
    meaning: 'Hexagram 64 — the *last* hexagram of the book and the inverse of #63 — is the image of fire above water, every line in the *wrong* position, the cooking not yet complete. The classical name is *Before Completion*. The hexagram counsels: *success; but if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further*. The lesson is precise and beautiful: the I Ching does *not* end with completion. It ends *before completion*. The wisdom is that life itself is *Wèi Jì* — perpetually almost-arrived. The little fox who is almost across must not get his tail wet at the last moment; the discipline is *to the last step*.',
    when_pulled: 'You are *almost* there. The hexagram\'s counsel is: do not slacken at the final stage. The little fox who gets his tail wet at the last crossing fails after all the work was done. Discipline to the last step. Then there is success.',
    changing_lines: 'Line 6 is *there is drinking of wine in genuine confidence; no blame; but if one wets his head, in truth he loses it* — the celebration that becomes intoxication; even at the very end, the discipline matters. The book closes on a warning to the practitioner who confuses near-completion with completion.',
    in_love: 'You are nearly there — the deeper relationship is forming. Do not slacken in the last steps. The fox who gets his tail wet has done all the work for nothing.',
    in_work: 'You are nearly there — the launch, the deal, the milestone. The last step is the most disciplined. Do not relax now.',
    the_gift: '*Discipline to the last step.* The recognition that life is perpetually *Wèi Jì* — almost-arrived — and the wisdom of the practitioner is the discipline that does not slacken at the final crossing.',
    the_shadow: 'Slackening at the last step. The fox\'s tail in the water. The book closes on this exact warning because it is the most common failure of all.',
    key_questions: [
      'What is the last step I am about to slacken on — and what discipline would carry me cleanly across?',
      'Where am I treating *near-completion* as if it were *completion*?',
      'How do I drink the wine in genuine confidence without wetting my head?'
    ]
  },
]

const HEXAGRAM_BY_SLUG: Record<string, Hexagram> = Object.fromEntries(HEXAGRAMS.map((h) => [h.slug, h]))
export const HEXAGRAM_SLUGS = HEXAGRAMS.map((h) => h.slug)

export function isHexagramSlug(s: string): boolean {
  return Object.prototype.hasOwnProperty.call(HEXAGRAM_BY_SLUG, s)
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient (4×16):
//   beginnings = jade — origins, source-and-receive
//   cycles     = amber — relational warmth, how the situation moves
//   trials     = obsidian — descent, refining, the well
//   completion = violet — transformation, revolution, before/after
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  beginnings: { c1: '#3d8a6b', c2: '#5fb392', label: 'Beginnings · the foundational images, source-and-receive, the early texture of the situation' },
  cycles: { c1: '#b8852f', c2: '#d4a558', label: 'Cycles · the relational hexagrams, how the situation moves, follows, decays, returns' },
  trials: { c1: '#3a2e3a', c2: '#6b5468', label: 'Trials · the trial-and-rectification hexagrams, the descent and the well' },
  completion: { c1: '#6943e0', c2: '#9474eb', label: 'Completion · the transformation hexagrams, revolution, cauldron, before-and-after' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function hexagramPageHTML(slug: string): string {
  const r = HEXAGRAM_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/iching/${slug}/?ref=iching-${slug}`
  const readingCta = `/gab44/reading?ref=iching-${slug}`

  // Neighbour navigation in King Wen sequence
  const prev = HEXAGRAMS[(r.n - 2 + 64) % 64]
  const next = HEXAGRAMS[r.n % 64]

  const title = `Hexagram ${r.n}: ${escapeHtml(r.name_en)} (${escapeHtml(r.chinese)} ${escapeHtml(r.pinyin)}) · I Ching · gab44 ✨`
  const description = `I Ching Hexagram ${r.n} ${r.name_en} (${r.chinese} ${r.pinyin}): meaning, when you pull this hexagram, the changing lines, in love, in work, the gift, the shadow. Hand-written, warm, honest about the lineage. Trigrams: ${r.trigrams}.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'I Ching', item: `${SITE_URL}/gab44/iching` },
          { '@type': 'ListItem', position: 3, name: `${r.n} · ${r.name_en}`, item: `${SITE_URL}/gab44/iching/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Hexagram ${r.n}: ${r.name_en} (${r.chinese} ${r.pinyin}) — I Ching meaning`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/iching/${slug}`,
        about: `I Ching, Yi Jing, Zhou Yi, hexagram ${r.n}, ${r.name_en}, ${r.chinese}, ${r.pinyin}, ${r.trigrams}, divination, classical Chinese`
      }
    ]
  })

  const otherHexagramsHtml = HEXAGRAMS.filter((q) => q.family === r.family && q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/iching/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${q.n} · ${escapeHtml(q.name_en)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/iching/${slug}" />
<meta property="og:title" content="${escapeHtml(`Hexagram ${r.n}: ${r.name_en} — I Ching`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/iching/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%98%AF%3C/text%3E%3C/svg%3E" />
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
  .role-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 12px 0 24px; border-left: 4px solid var(--c1); }
  .role-card h3 { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; }
  .role-card p { margin: 0; font-size: 16px; color: var(--fg-dim); }
  h2 { font-size: 18px; font-weight: 700; margin: 30px 0 8px; color: var(--fg); letter-spacing: -0.01em; }
  p { margin: 0 0 14px; color: var(--fg-dim); }
  .questions { background: linear-gradient(180deg, ${accent.c1}0d 0%, ${accent.c2}10 100%);
    border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px; margin: 24px 0; }
  .questions h2 { margin: 0 0 12px; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { margin-bottom: 10px; color: var(--fg); font-style: italic; }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 18px; margin: 6px 0; font-size: 14px; }
  .pair-card a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .pair-card a:hover { text-decoration: underline; }
  .reading-cta { background: var(--bg-1); border: 2px solid var(--c1); border-radius: 16px;
    padding: 26px 28px; margin: 32px 0 16px; text-align: left; }
  .reading-cta h3 { margin: 0 0 8px; font-size: 19px; color: var(--fg); }
  .reading-cta p { margin: 0 0 14px; color: var(--fg-dim); }
  .cta { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 11px 22px; border-radius: 999px;
    text-decoration: none; font-weight: 600; font-size: 14px; }
  .cta:hover { filter: brightness(1.06); }
  .nav-pair { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0 12px; }
  .nav-pair a { flex: 1 1 240px; background: var(--bg-1); border: 1px solid var(--line);
    border-radius: 12px; padding: 12px 16px; font-size: 14px;
    text-decoration: none; color: var(--fg); }
  .nav-pair a:hover { border-color: var(--line-strong); }
  .nav-pair .dir { display: block; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.12em; text-transform: uppercase; }
  .nav-pair .nm { font-weight: 600; }
  .other-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px; margin-top: 14px; }
  .ph-mini { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 10px;
    background: var(--bg-1); border: 1px solid var(--line);
    border-left: 3px solid var(--c1);
    text-decoration: none; color: var(--fg); font-size: 13px; }
  .ph-mini:hover { border-color: var(--line-strong); }
  .ph-mini .sym { font-size: 18px; }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
  footer a:hover { text-decoration: underline; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/iching">i ching index</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/runes">runes</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <div class="brand-mark"><span class="dot"></span> gab44 ✦ I Ching · 64 Hexagrams</div>
    <span class="fam-pill">${escapeHtml(accent.label.split('·')[0].trim())}</span>
    <h1><span class="glyph">${r.glyph}</span>${r.n} · ${escapeHtml(r.name_en)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <p class="meta-line">
      <span>${escapeHtml(r.chinese)} ${escapeHtml(r.pinyin)}</span>
      <span>${escapeHtml(r.trigrams)}</span>
      <span>King Wen #${r.n}</span>
    </p>
    <div class="role-card">
      <h3>The Hexagram</h3>
      <p>${escapeHtml(r.meaning)}</p>
    </div>

    <h2>When you pull this hexagram</h2>
    <p>${escapeHtml(r.when_pulled)}</p>

    <h2>The changing lines</h2>
    <p>${escapeHtml(r.changing_lines)}</p>

    <h2>In love</h2>
    <p>${escapeHtml(r.in_love)}</p>

    <h2>In work</h2>
    <p>${escapeHtml(r.in_work)}</p>

    <h2>The gift</h2>
    <p>${escapeHtml(r.the_gift)}</p>

    <h2>The shadow</h2>
    <p>${escapeHtml(r.the_shadow)}</p>

    <div class="questions">
      <h2>3 questions to sit with</h2>
      <ul>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ul>
    </div>

    <div class="reading-cta">
      <h3>Want a reading written for your specific situation? — $9</h3>
      <p>If this hexagram landed and the question is bigger than a single page can hold, I can write a hand-written reading for you, your relationship, or the decision you are sitting with. Delivered by email within 48 hours.</p>
      <a class="cta" href="${readingCta}">Request your $9 reading →</a>
    </div>

    <div class="nav-pair">
      <a href="/gab44/iching/${prev.slug}"><span class="dir">← previous</span><span class="nm">${prev.glyph} ${prev.n} · ${escapeHtml(prev.name_en)}</span></a>
      <a href="/gab44/iching/${next.slug}"><span class="dir">next →</span><span class="nm">${next.glyph} ${next.n} · ${escapeHtml(next.name_en)}</span></a>
    </div>

    <h2>Other hexagrams in the ${r.family} family</h2>
    <div class="other-grid">
      ${otherHexagramsHtml}
    </div>

    <footer>
      <p>The I Ching, the Yi Jing, the Zhou Yi — the *Book of Changes*. Compiled c. 1000 BCE; the Confucian "Ten Wings" commentaries c. 500 BCE; the Wilhelm-Baynes English translation 1923. Working with this hexagram is working with the oldest divination text in continuous use, and the prose above is hand-written by a practitioner who treats it as living tradition rather than fortune-cookie. — <a href="/gab44">gab44</a>.</p>
    </footer>
  </main>
</body>
</html>`
}

export function hexagramIndexHTML(): string {
  const accent = { c1: '#6943e0', c2: '#c96442' }

  const familySection = (family: 'beginnings' | 'cycles' | 'trials' | 'completion', label: string) => {
    const acc = FAMILY_ACCENT[family]
    const items = HEXAGRAMS.filter((h) => h.family === family).map((h) => `
      <a class="card" href="/gab44/iching/${h.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
        <div class="card-glyph">${h.glyph}</div>
        <div class="card-num">#${h.n}</div>
        <div class="card-name">${escapeHtml(h.name_en)}</div>
        <div class="card-zh">${escapeHtml(h.chinese)} · ${escapeHtml(h.pinyin)}</div>
      </a>`).join('')
    return `
      <section class="family">
        <div class="family-head" style="--c1:${acc.c1};--c2:${acc.c2}">
          <h2>${label}</h2>
          <p>${escapeHtml(acc.label)}</p>
        </div>
        <div class="card-grid">${items}</div>
      </section>`
  }

  const description = `The full I Ching — all 64 hexagrams in classical King Wen order. Hand-written guides for each: meaning, when you pull it, the changing lines, in love, in work, the gift, the shadow. Honest about lineage (Zhou-yi c. 1000 BCE, Confucian Ten Wings c. 500 BCE, Wilhelm-Baynes 1923), warm about the practice.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'I Ching — All 64 Hexagrams',
    description,
    url: `${SITE_URL}/gab44/iching`,
    hasPart: HEXAGRAMS.map((h) => ({
      '@type': 'Article',
      headline: `Hexagram ${h.n}: ${h.name_en}`,
      url: `${SITE_URL}/gab44/iching/${h.slug}`
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>I Ching — All 64 Hexagrams · gab44 ✨</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/iching" />
<meta property="og:title" content="I Ching — All 64 Hexagrams" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/iching" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%98%AF%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}1c 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.55; min-height: 100vh;
  }
  .wrap { max-width: 980px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark { display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 12px; }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, ${accent.c1}, ${accent.c2}); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 { font-size: 44px; line-height: 1.05; margin: 0 0 14px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  .lede { font-size: 18px; color: var(--fg-dim); max-width: 720px; margin: 0 0 18px; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .intro-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 14px 0 32px; }
  .intro-card h3 { margin: 0 0 8px; font-size: 16px; color: var(--fg); }
  .intro-card p { margin: 0 0 10px; color: var(--fg-dim); font-size: 15px; }
  .family { margin: 38px 0; }
  .family-head { padding: 14px 18px; border-radius: 12px; margin-bottom: 18px;
    background: linear-gradient(135deg, var(--c1)15 0%, var(--c2)15 100%);
    border-left: 4px solid var(--c1); }
  .family-head h2 { margin: 0 0 6px; font-size: 22px; color: var(--fg); }
  .family-head p { margin: 0; font-size: 14px; color: var(--fg-dim); }
  .card-grid { display: grid; gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
  .card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; text-decoration: none; color: var(--fg);
    border-left: 4px solid var(--c1); transition: border-color 0.15s, transform 0.05s; display: block; }
  .card:hover { border-color: var(--line-strong); transform: translateY(-1px); }
  .card-glyph { font-size: 26px; line-height: 1; margin-bottom: 6px; }
  .card-num { font-family: 'JetBrains Mono', monospace; font-size: 12px;
    color: var(--fg-muted); margin-bottom: 4px; }
  .card-name { font-size: 14px; font-weight: 600; color: var(--fg); margin-bottom: 4px; }
  .card-zh { font-size: 12px; color: var(--fg-dim); }
  .reading-cta { background: var(--bg-1); border: 2px solid var(--accent); border-radius: 16px;
    padding: 26px 28px; margin: 38px 0 16px; }
  .reading-cta h3 { margin: 0 0 8px; font-size: 19px; color: var(--fg); }
  .reading-cta p { margin: 0 0 14px; color: var(--fg-dim); }
  .cta { display: inline-block; background: var(--accent); color: var(--fg-on-accent);
    padding: 11px 22px; border-radius: 999px;
    text-decoration: none; font-weight: 600; font-size: 14px; }
  .cta:hover { background: var(--accent-2); }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
  footer a:hover { text-decoration: underline; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/runes">runes</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <div class="brand-mark"><span class="dot"></span> gab44 ✦ I Ching · 64 Hexagrams</div>
    <h1>I Ching — all 64 hexagrams</h1>
    <p class="lede">The <em>Yi Jing</em>, the <em>Zhou Yi</em>, the <em>Book of Changes</em> — the oldest divination text in continuous use, c. 1000 BCE Zhou-dynasty core, with the Confucian commentaries (the <em>Ten Wings</em>) layered on by 500 BCE. Hand-written guides for each hexagram in classical King Wen order — meaning, when you pull it, the changing lines, in love, in work, the gift, the shadow.</p>
    <p class="meta-line">King Wen sequence · Wilhelm-Baynes 1923 · 4 families × 16 hexagrams</p>

    <div class="intro-card">
      <h3>How to read the I Ching</h3>
      <p>The classical method: three coins tossed six times, building the hexagram from the bottom up. Heads = yang, tails = yin; three of a kind = a *changing* line, which signals the energy is in motion and points to a second hexagram (the situation evolving). Modern apps will toss for you, but the practice is older than the apps. Read the hexagram you got first; if there are changing lines, read the second hexagram as the *situation moving*. The gab44 framing here gives you per-hexagram meaning, the changing-line teaching, and the question the hexagram is most usefully asking you.</p>
      <p>The book is not a fortune-teller. It is a *mirror* the practitioner consults to see the situation more clearly. Treat the answer as inquiry, not as verdict.</p>
    </div>

    ${familySection('beginnings', '🌱 Beginnings · #1 through #16')}
    ${familySection('cycles', '🌿 Cycles · #17 through #32')}
    ${familySection('trials', '🔥 Trials · #33 through #48')}
    ${familySection('completion', '✨ Completion · #49 through #64')}

    <div class="reading-cta">
      <h3>Need a hexagram-specific reading? — $9</h3>
      <p>If you have pulled a hexagram and the question is bigger than the page can hold — relationship, decision, transition — I can write a hand-written reading for your specific situation. Delivered by email within 48 hours.</p>
      <a class="cta" href="/gab44/reading?ref=iching-index">Request your $9 reading →</a>
    </div>

    <footer>
      <p>The I Ching is older than every Western divinatory tradition combined and survives because the practice it points at is real. — <a href="/gab44">gab44</a>.</p>
    </footer>
  </main>
</body>
</html>`
}
