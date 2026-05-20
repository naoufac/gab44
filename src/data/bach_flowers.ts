// Bach Flower Remedies — Dr. Edward Bach's 38 essences — SEO funnel.
// /gab44/bach-flowers (index) + /gab44/bach-flowers/{slug}.
//
// 38 hand-written remedy guides organized by Bach's own 7 emotional groups
// (from "The Twelve Healers and Other Remedies", 1936). Each remedy addresses
// ONE specific emotional/mental state — the most direct emotional-intent
// surface in the funnel (somebody searches "remedy for fear", "I can't say no",
// "I keep repeating the same mistakes" — Bach named that state in 1936).
//
// Seven-family taxonomy (Bach's own grouping):
//   1. Fear (5) — saffron-fire
//   2. Uncertainty (6) — copper-ember
//   3. Insufficient interest in present (7) — soft sage
//   4. Loneliness (3) — twilight indigo
//   5. Over-sensitivity (4) — rose-blush
//   6. Despondency or despair (8) — deep slate
//   7. Over-care for welfare of others (5) — warm ochre

import { SITE_URL } from '@/lib/identity'

export interface BachRemedy {
  slug: string
  text: string
  latin: string
  group: 'fear' | 'uncertainty' | 'present' | 'loneliness' | 'oversensitivity' | 'despair' | 'overcare'
  position: number
  one_liner: string
  meaning: string
  the_state: string
  the_shift: string
  in_love: string
  in_work: string
  the_practice: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_crystal_sign: string
  pair_with_crystal_slug: string
  key_questions: [string, string, string]
}

export const BACH_REMEDIES: BachRemedy[] = [
  // ── GROUP 1 — FEAR (5) ────────────────────────────────────────────
  {
    slug: 'rock-rose',
    text: 'Rock Rose',
    latin: 'Helianthemum nummularium',
    group: 'fear',
    position: 1,
    one_liner: 'For terror, panic, and the emergency states where fear has frozen the system. Bach\'s remedy for the moment fear becomes acute.',
    meaning: 'Rock Rose is the first of Bach\'s 5 fear remedies and one of the 4 ingredients in his famous Rescue Remedy. Bach named it for "the rescue remedy" of panic — the moment terror has gripped the nervous system. Where Mimulus addresses known fears and Aspen addresses vague dread, Rock Rose addresses fear that has crossed into emergency: the nightmare you wake from drenched, the accident witnessed, the news that drops the floor out. Bach saw Rock Rose as the courage-bringer that meets the system where panic has frozen it.',
    the_state: 'Terror. The body locked. The breath shallow. The mind refusing to process what just happened. Post-nightmare adrenal flood. The moment you hear bad news and the floor goes. Acute panic where ordinary fear-management cannot reach.',
    the_shift: 'Courage that meets terror without denying it. The nervous system returns to ground. The breath deepens. The mind unfreezes enough to choose. Not the absence of fear — the presence of self-possession alongside it.',
    in_love: 'Rock Rose in love is the partner who has just received devastating news and needs the system to come back online before any conversation can happen. The work is not to talk first — the work is to settle the body first, then talk.',
    in_work: 'Rock Rose in work is the founder the morning after the term sheet collapses, the surgeon mid-emergency, the parent in the school-call moment. The remedy returns the system to operability when ordinary calming has failed.',
    the_practice: 'Box breathing — in 4, hold 4, out 4, hold 4 — for 3 full minutes, eyes closed, both feet flat on the ground. The body cannot stay in fight-or-flight while the vagus is being toned this way.',
    pair_with_chakra: 'Root (Muladhara) — survival, ground, the chakra fear most directly knocks offline.',
    pair_with_chakra_slug: 'root',
    pair_with_crystal_sign: 'Aries',
    pair_with_crystal_slug: 'aries',
    key_questions: [
      'What recent event is my system still processing as an emergency — and have I given the body permission to come down from alert?',
      'Where in my body is the terror sitting right now, and what would a single conscious breath into that exact spot do?',
      'If I knew I had the courage to meet whatever is coming, what would I do today that I am currently postponing out of dread?'
    ]
  },
  {
    slug: 'mimulus',
    text: 'Mimulus',
    latin: 'Mimulus guttatus',
    group: 'fear',
    position: 2,
    one_liner: 'For known, nameable fears — the things you can list. Bach\'s remedy for the everyday phobias and worldly anxieties.',
    meaning: 'Mimulus is Bach\'s remedy for fears with a name. Fear of public speaking. Fear of flying. Fear of the dentist, the dark, the spider, the conversation. Bach distinguished it from Aspen (vague dread without source) and Rock Rose (acute terror) precisely on this point: Mimulus is for the fears you can list. Bach saw the Mimulus type as the shy, sensitive person who is easily frightened by ordinary life — and whose courage, when it comes, is quiet and steady rather than dramatic.',
    the_state: 'Specific, nameable fears. The list. The phobia. The anticipatory anxiety before a known event — the meeting, the flight, the procedure, the difficult conversation. The shy retreat. The held breath before the door opens.',
    the_shift: 'Quiet courage. The capacity to walk toward the known fear without grand declarations. The fear remains, but the action becomes possible alongside it.',
    in_love: 'Mimulus in love is the partner afraid of the conversation that needs to happen — afraid of conflict, afraid of being misread, afraid of the silence after. The work is small: one sentence at a time, with the fear acknowledged, not denied.',
    in_work: 'Mimulus in work is the brilliant introvert dreading the keynote, the engineer dreading the demo, the operator dreading the difficult feedback. The remedy supports the move forward without performing fearlessness.',
    the_practice: 'Name the fear out loud, specifically, in one sentence. ("I am afraid that when I open my mouth in the meeting, my voice will shake.") Naming reduces the fear by ~30% in lab studies (Lieberman 2007 — affect labeling). Then do the smallest first step.',
    pair_with_chakra: 'Solar plexus (Manipura) — personal courage, the chakra that meets named fear with named action.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'What is the specific, nameable fear sitting between me and the action I keep postponing — and can I say it out loud, in one sentence?',
      'If I imagined the worst case fully, in detail, would I survive it? What changes when I let myself finish the imagining?',
      'What is the smallest possible first step I could take toward this fear today — small enough that the fear cannot block it?'
    ]
  },
  {
    slug: 'cherry-plum',
    text: 'Cherry Plum',
    latin: 'Prunus cerasifera',
    group: 'fear',
    position: 3,
    one_liner: 'For the fear of losing control — of breaking down, of doing something terrible, of the mind giving way. Bach\'s remedy for the inner emergency.',
    meaning: 'Cherry Plum is Bach\'s remedy for the most frightening fear of all: the fear of one\'s own mind. The fear of breaking down, of snapping, of doing harm to oneself or others, of "losing it." Bach described it as the fear of "the mind being over-strained, of reason giving way." It is one of the 5 ingredients of Rescue Remedy precisely because crisis often brings this fear with it. The Cherry Plum state is the white-knuckled grip on control — and the relief, when the remedy lands, of trusting that the system will hold even if grip is released.',
    the_state: 'White-knuckled control. The terror of one\'s own impulses. The fear that if you let go even a little, something terrible will happen — you\'ll say it, do it, break it, become the thing. Intrusive thoughts that frighten the person having them. The held-together-by-force state.',
    the_shift: 'Trust in the system. The recognition that the worst impulses are not the truth of who you are — they are pressure-release valves that lose their power when met with compassion instead of clamp-down. Release without collapse.',
    in_love: 'Cherry Plum in love is the partner terrified of their own anger — gripping the conversation so tightly it cannot move. The work is to trust that you will not become the worst version of yourself just because the worst version has a voice in your head.',
    in_work: 'Cherry Plum in work is the operator under sustained pressure who has begun to fear their own breaking-point. The remedy supports the choice to step back, breathe, eat, sleep — before the system makes the choice for you.',
    the_practice: 'When the intrusive thought arrives, do not fight it. Acknowledge: "I am having the thought that ___." (Not "I want to ___" — "I am having the thought.") The distance the language creates breaks the loop. (ACT therapy, Hayes 1999.)',
    pair_with_chakra: 'Crown (Sahasrara) — the seat of self-trust and surrender; Cherry Plum is the remedy for the moment the crown chakra is gripped too tight.',
    pair_with_chakra_slug: 'crown',
    pair_with_crystal_sign: 'Scorpio',
    pair_with_crystal_slug: 'scorpio',
    key_questions: [
      'What thought am I afraid to have — and what would change if I let myself notice it without acting on it?',
      'Where am I holding the system together by force right now, and what small release would the body actually be safe enough to allow?',
      'Who do I trust enough to say the unsayable thing to, with no plan to act on it — just to let it out of the pressure-cooker of my own head?'
    ]
  },
  {
    slug: 'aspen',
    text: 'Aspen',
    latin: 'Populus tremula',
    group: 'fear',
    position: 4,
    one_liner: 'For vague, nameless fears — the dread without cause. Bach\'s remedy for the trembling that has no story.',
    meaning: 'Aspen is Bach\'s remedy for fear that has no source you can name. The 3am wake-up with a sense of foreboding. The cold dread that arrives without trigger. The feeling that something terrible is about to happen, no evidence offered. Bach took the remedy from the aspen tree, whose leaves tremble in the slightest breeze — a perfect emblem for the nervous system that quivers at currents nobody else feels. Aspen types are often highly intuitive, picking up on energies and atmospheres that less sensitive systems miss — but without grounding, this becomes a haunting.',
    the_state: 'Nameless dread. Goosebumps for no reason. The 3am wake-up convinced something is wrong but unable to name what. The sense of being watched, the room "off," the future "heavy." Hypervigilance without object.',
    the_shift: 'Trust in the unseen as well as the seen. The intuitive system reports without panic; the body holds steady even when the air is "thick." Sensitivity becomes a gift rather than a haunting.',
    in_love: 'Aspen in love is the partner who senses something is wrong but cannot name it, and the partner who dismisses the sensing because there is no evidence. The work for one is to honor the perception; the work for the other is not to require courtroom evidence before believing it.',
    in_work: 'Aspen in work is the founder who knows the deal will collapse three weeks before it does. The remedy supports the move from "haunted by knowing" to "calm in knowing," so the foresight becomes useful instead of paralyzing.',
    the_practice: 'When the nameless dread arrives, name what you ARE certain of. "I am safe right now. The room is X. My body is Y." Three specific present-tense observations. The dread lives in the unreal; the antidote is the real.',
    pair_with_chakra: 'Third eye (Ajna) — the intuitive chakra that, when ungrounded, becomes Aspen\'s haunting.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_crystal_sign: 'Pisces',
    pair_with_crystal_slug: 'pisces',
    key_questions: [
      'What does my body know right now that my mind has not yet let itself articulate?',
      'When the nameless dread arrives, what three concrete facts about this present moment can I name to bring myself back?',
      'Where might my intuition be reporting something real that I have been dismissing because it cannot be proven?'
    ]
  },
  {
    slug: 'red-chestnut',
    text: 'Red Chestnut',
    latin: 'Aesculus carnea',
    group: 'fear',
    position: 5,
    one_liner: 'For fear and worry for others — the parent waiting up, the friend tracking the flight. Bach\'s remedy for love that has become anxiety.',
    meaning: 'Red Chestnut is Bach\'s remedy for the fear that lives on behalf of others. The parent who cannot sleep until the teenager is home. The friend who tracks the flight. The partner whose stomach drops every time the phone rings unexpectedly. Bach saw the Red Chestnut state as a misdirection of love — care that has lost its trust in the world, that imagines harm into being out of love. The remedy returns the loved one to their own life, and the worrier to their own sleep.',
    the_state: 'Anxious projection onto loved ones. Catastrophizing on their behalf. Cannot stop imagining what could happen to them. Calls and texts to check in beyond what reassures. Sleep interrupted by their safety.',
    the_shift: 'Love that trusts. Concern that releases the loved one to their own life. The capacity to sit with not-knowing without filling the gap with worst-case scenarios. Sleep returns.',
    in_love: 'Red Chestnut in love is the partner whose worry has become surveillance — and the loved one who feels followed, not held. The remedy supports the move from "I cannot stop imagining what could happen to you" to "I trust your life to you, and mine to me."',
    in_work: 'Red Chestnut in work is the team-lead who carries each report\'s wellbeing as a personal load — burning out from the weight of caring for everyone\'s nervous system. The remedy supports care without absorption.',
    the_practice: 'When the worry-loop starts, send the loved one a brief, specific blessing — out loud or silent — and then return your attention to your own breath. "May they be safe. May they be wise. Their life is theirs." Repeat as needed.',
    pair_with_chakra: 'Heart (Anahata) — the love-chakra; Red Chestnut is the remedy for the heart that loves with anxious grip.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Cancer',
    pair_with_crystal_slug: 'cancer',
    key_questions: [
      'Whose life am I currently living instead of my own — and what would my own life look like if I let them have theirs back?',
      'What worst-case scenario am I rehearsing on someone else\'s behalf, and what evidence do I have it is more likely than the ordinary case?',
      'When my loved one is doing well, can I let myself enjoy it — or do I immediately scan for the next thing to worry about?'
    ]
  },

  // ── GROUP 2 — UNCERTAINTY (6) ─────────────────────────────────────
  {
    slug: 'cerato',
    text: 'Cerato',
    latin: 'Ceratostigma willmottiana',
    group: 'uncertainty',
    position: 6,
    one_liner: 'For those who doubt their own judgment and constantly seek advice. Bach\'s remedy for the inner-knowing that has been outsourced.',
    meaning: 'Cerato is Bach\'s remedy for the person who already knows but cannot trust their knowing. They ask everyone. They poll the friends, the family, the internet. They take the advice that contradicts what they already felt — and then regret it. Bach saw the Cerato state as a kind of self-betrayal: the inner voice is intact, but its authority has been handed away. The remedy returns inner authority to its rightful owner.',
    the_state: 'Constant advice-seeking. Polling everyone before a decision. Discounting your own gut in favor of others\' opinions. Regretting the decision afterward because it was not actually yours.',
    the_shift: 'Inner authority restored. The capacity to consult others without being overridden by them. Your own knowing becomes the home base, with outside input as data, not verdict.',
    in_love: 'Cerato in love is the partner who polls every friend about the relationship before bringing the question to the partner. The work is to trust what you already feel about this person enough to bring it directly to them.',
    in_work: 'Cerato in work is the operator who knows the right call but seeks twelve opinions before making it — and ends up making the seventh opinion\'s call, not their own. The remedy supports the move to decisive ownership.',
    the_practice: 'Before consulting anyone, write down your own first answer to the question. Seal it. Consult if you must. Then compare. If you keep overriding your sealed answer, the work is to honor it more often, not to consult less.',
    pair_with_chakra: 'Solar plexus (Manipura) — personal will and self-trust; Cerato is the chakra-of-decision unable to land in itself.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Libra',
    pair_with_crystal_slug: 'libra',
    key_questions: [
      'What did my first instinct tell me about this decision — before I started asking around?',
      'Whose voice is loudest in my head when I am deciding, and is that voice actually wiser than mine, or just louder?',
      'When I made a decision that was truly mine, no consultation, how did it land — and what does that tell me about whose authority I should be living by?'
    ]
  },
  {
    slug: 'scleranthus',
    text: 'Scleranthus',
    latin: 'Scleranthus annuus',
    group: 'uncertainty',
    position: 7,
    one_liner: 'For wavering between two choices — the swing between options that never resolves. Bach\'s remedy for the pendulum mind.',
    meaning: 'Scleranthus is Bach\'s remedy for the mind that swings. Today A is obviously right; tomorrow it is just as obviously B. The pendulum cannot settle. The Scleranthus type is often described as the "indecisive optimist" — both options look good, the swing is internal rather than externally consulted (which is Cerato\'s territory), and the cost is the steady forward motion that requires committing to one path. Bach saw the remedy as bringing the still-point inside the swing.',
    the_state: 'Wavering between two paths. Monday certain of A; Tuesday certain of B; Wednesday back to A. Mood swings without external cause. Travel plans changed three times. The pendulum that cannot settle.',
    the_shift: 'The still-point inside the swing. The capacity to choose one option AND let the other go without grief. Decisions land and stay landed. The energy that was lost to wavering returns to the chosen path.',
    in_love: 'Scleranthus in love is the partner swinging between staying and leaving every other day, with no event triggering the swing. The work is to commit to the question, sit with one answer long enough to test it, and notice the swing as the wound, not the wisdom.',
    in_work: 'Scleranthus in work is the founder pivoting weekly, the writer rewriting the opening sentence forever. The remedy supports the commitment to ONE direction long enough for results to inform the next decision.',
    the_practice: 'When the swing arrives, write both options on a single piece of paper. Choose one. Set a 7-day moratorium: no re-deciding. Live as if the choice is final. Notice what happens to the swing itself when you refuse to feed it.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of balance; Scleranthus is the heart unable to settle on one direction long enough to walk it.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Gemini',
    pair_with_crystal_slug: 'gemini',
    key_questions: [
      'What decision have I been re-deciding for weeks, and what would change if I let one option be final for just seven days?',
      'When I imagine myself one year from now having taken path A, then path B, which version of me looks more rested — even if less certain?',
      'What is the wavering itself costing me — and is the cost of that cost higher than the cost of being "wrong" about which path?'
    ]
  },
  {
    slug: 'gentian',
    text: 'Gentian',
    latin: 'Gentiana amarella',
    group: 'uncertainty',
    position: 8,
    one_liner: 'For discouragement after a setback — the deflation, not the despair. Bach\'s remedy for the small fall that has knocked you flat.',
    meaning: 'Gentian is Bach\'s remedy for discouragement. Not despair — that is Sweet Chestnut\'s territory. Not hopelessness — that is Gorse. Gentian is the disproportionate deflation after the small setback: the job interview that did not land, the date that fizzled, the rejection email, the diet broken on day three. The Gentian person is fundamentally hopeful but flattened by every dip in the road. The remedy returns the capacity to get up after small falls without making them mean more than they do.',
    the_state: 'Disproportionate discouragement after a setback. The small failure feels like the whole project. The dip on the chart feels like the trend. Wants to give up after the first "no." Easily deflated, especially in early stages.',
    the_shift: 'Resilient hope. Setbacks are received as data, not verdicts. The capacity to feel the small failure, name it, and get up the next morning anyway. The recognition that no single moment defines the arc.',
    in_love: 'Gentian in love is the person who reads one read-message-no-reply as the end of the relationship. The work is to let small disappointments be small — to ask what they actually mean before scaling them up into the whole story.',
    in_work: 'Gentian in work is the founder who takes the first investor "no" as proof the company is doomed. The remedy supports the long-arc operator stance: the no is a data point, not a verdict.',
    the_practice: 'After a setback, write the smallest, most honest version of what happened. ("I sent an email. They did not reply within 3 days.") Then write what your mind made it mean. ("Therefore I am unhirable.") Notice the gap. The work lives in the gap.',
    pair_with_chakra: 'Solar plexus (Manipura) — personal will and momentum; Gentian is the chakra of forward-motion temporarily knocked offline.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'What small setback have I scaled up into a verdict about myself — and what would be left if I let it stay small?',
      'When I have recovered from setbacks before, what was the smallest first step that started the return — and can I take that step today?',
      'What story am I currently telling about this dip in the road, and is the story doing more damage than the dip itself?'
    ]
  },
  {
    slug: 'gorse',
    text: 'Gorse',
    latin: 'Ulex europaeus',
    group: 'uncertainty',
    position: 9,
    one_liner: 'For hopelessness — the "what is the point" state where you have given up trying. Bach\'s remedy for the long flat after too many attempts.',
    meaning: 'Gorse is Bach\'s remedy for the state past Gentian. Where Gentian is the deflation after one setback, Gorse is the resignation after many. The chronic illness that has not improved. The job search that has gone on too long. The relationship pattern that keeps recurring. The Gorse type often says "I will try, but it will not work" — they go through the motions without expectation. Bach saw the remedy as the relighting of the inner flame, the return of expectancy, the willingness to risk hope one more time.',
    the_state: 'Hopelessness without acute pain. The flat resignation of "what is the point." Going through motions without belief. "I have tried everything." Says yes to one more attempt but expects nothing. The pilot light has gone out.',
    the_shift: 'The relighting of the inner flame. The willingness to expect, to try, to risk being wrong about hope. Not certainty — just the return of openness to the possibility of change.',
    in_love: 'Gorse in love is the person who has been hurt enough times that they go into the next relationship already preparing for its ending. The work is to let yourself want this one to work — knowing it might not.',
    in_work: 'Gorse in work is the founder on the fifth pivot who has stopped believing in any of them. The remedy supports the choice to either fully invest in one direction or honestly walk away — not the half-life of "trying without believing."',
    the_practice: 'Find the one thing in your life that is currently working — however small. A friendship. A morning routine. A piece of work that did land. Write it down. Read it. The pilot light needs ONE flame to relight from, and there is always one.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of hope; Gorse is the heart-flame turned down to embers, waiting for the breath that relights it.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Pisces',
    pair_with_crystal_slug: 'pisces',
    key_questions: [
      'What have I quietly given up on while still going through the motions — and what would honesty about giving up actually free me to do?',
      'If I let myself hope for change in this area, what would I have to be willing to risk that I am currently protecting myself from?',
      'What ONE small thing is currently working in my life that I could let myself feel, without immediately discounting it?'
    ]
  },
  {
    slug: 'hornbeam',
    text: 'Hornbeam',
    latin: 'Carpinus betulus',
    group: 'uncertainty',
    position: 10,
    one_liner: 'For Monday-morning weariness — the dread of effort that comes before any effort. Bach\'s remedy for the mind that is tired of the task before starting.',
    meaning: 'Hornbeam is Bach\'s remedy for what he called "the Monday-morning feeling." It is mental tiredness, not physical — the dread of the day ahead before the day has started. The Hornbeam person can do the thing once they begin; the resistance is in the starting. Bach distinguished it sharply from Olive (true physical exhaustion after long effort): Hornbeam is the *idea* of being tired, the heaviness of anticipated effort. The remedy meets the threshold-anxiety of beginning.',
    the_state: 'Pre-effort tiredness. Dreading the day before getting out of bed. "I cannot face it." The task feels heavy in anticipation but is usually fine once started. Procrastination that is not laziness — it is anticipatory weariness.',
    the_shift: 'The capacity to begin. The recognition that the dread was a phantom — the work, once started, has its own momentum. Fresh interest returns to tasks that had become routine-heavy.',
    in_love: 'Hornbeam in love is the partner dreading the conversation that, once started, would actually go fine — and so the conversation never starts. The work is to lower the threshold of beginning.',
    in_work: 'Hornbeam in work is the writer dreading the page, the founder dreading the spreadsheet, the operator dreading the inbox. The remedy supports the smallest possible first action — the 2-minute rule — to cross the threshold.',
    the_practice: 'The 2-minute rule (David Allen). Whatever you are dreading, commit to doing for exactly 2 minutes. Set a timer. After 2 minutes you can stop guilt-free. You will almost always continue — because the threshold was the problem, not the task.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of initiation; Hornbeam is the will-chakra in its threshold-resistance moment.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Taurus',
    pair_with_crystal_slug: 'taurus',
    key_questions: [
      'What task am I dreading right now that I could probably do in 20 minutes if I just started — and what is the 2-minute first move?',
      'Where in my life has routine become heaviness, and what would freshen the task — a new setting, new music, a new approach?',
      'When I have pushed through Hornbeam-resistance before, how did I feel afterward — and does that memory help me start sooner this time?'
    ]
  },
  {
    slug: 'wild-oat',
    text: 'Wild Oat',
    latin: 'Bromus ramosus',
    group: 'uncertainty',
    position: 11,
    one_liner: 'For uncertainty about life direction — the talented person who cannot find their path. Bach\'s remedy for the dissatisfied wanderer.',
    meaning: 'Wild Oat is Bach\'s remedy for the deep uncertainty about life direction. Not a single decision (Scleranthus) — the whole arc. The Wild Oat person is often capable, talented, multi-skilled — and chronically dissatisfied because no path has felt like THE path. They try careers, relationships, locations, philosophies. Each is "fine, but not quite it." Bach saw the remedy as the clarifier — not the giver of direction, but the dissolver of the static that prevents the inner direction from being heard.',
    the_state: 'Chronic dissatisfaction with chosen path despite no specific problem. Multi-talented but unable to commit. "Is this really what I am meant to do?" Job-hops, relationship-hops, place-hops. The grass is always greener.',
    the_shift: 'Inner clarity about direction. The recognition of what you are actually for — and the willingness to commit to it long enough to develop mastery. The end of the search-state.',
    in_love: 'Wild Oat in love is the partner who is never quite sure if this is "the one" — not because of any specific concern, but because of a chronic restlessness with whatever is here. The work is to let "good enough" be the foundation depth is built on.',
    in_work: 'Wild Oat in work is the talented generalist who has not yet committed to a specialty long enough to become exceptional at it. The remedy supports the choice to go deep in ONE thing for a defined period — and see what emerges.',
    the_practice: 'Pick one path. Commit to it for 90 days with NO option to reconsider during that window. Notice what depth feels like when shallow exploration is taken off the table. Many Wild Oat states resolve in the 90-day depth, not in the next path-change.',
    pair_with_chakra: 'Third eye (Ajna) — the chakra of vision and life-direction; Wild Oat is the inner-eye unable to settle on what it actually sees.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_crystal_sign: 'Sagittarius',
    pair_with_crystal_slug: 'sagittarius',
    key_questions: [
      'What path have I quietly known for a long time was mine — and have I been disqualifying it because it felt too obvious, too small, too unglamorous?',
      'If I committed to one direction for the next 90 days with no escape clause, which one would my body relax into — even if my mind protested?',
      'What is the cost of the search-state itself, separate from any path I might choose — and have I been counting it?'
    ]
  },
]

// ── GROUP 3 — INSUFFICIENT INTEREST IN PRESENT (7) ────────────────
const BACH_GROUP_3: BachRemedy[] = [
  {
    slug: 'clematis',
    text: 'Clematis',
    latin: 'Clematis vitalba',
    group: 'present',
    position: 12,
    one_liner: 'For dreaminess and escapism — the absent-minded daydreamer who is not quite here. Bach\'s remedy for the soul living in the future.',
    meaning: 'Clematis is Bach\'s remedy for the daydreamer. The person whose body is in the room but whose attention is elsewhere — the future, the fantasy, the next thing, the imagined version. Bach saw Clematis types as kind, gentle, often artistic — and chronically un-grounded. They drift through life without quite landing in it. The remedy is not a stimulant; it is an anchor. It returns the dreamer to the present without killing the imagination that made them dream.',
    the_state: 'Mental absence. Daydreaming through conversations. Plans for the future-self crowding out attention to the current one. Sleepy, vague, not-quite-here. Drifting. The body in the room, the soul somewhere else.',
    the_shift: 'Embodied presence. The dreamer\'s creativity intact, but rooted in the now. Attention returns to the conversation, the body, the meal, the moment. The future becomes a direction, not a hiding place.',
    in_love: 'Clematis in love is the partner who is "with" you but not really there — listening through a fog. The work is to land in the actual person sitting across the table, not the future version of the relationship you are imagining.',
    in_work: 'Clematis in work is the visionary who designs beautiful futures and never executes them. The remedy supports the move from imagining to building — one small concrete action in the now.',
    the_practice: 'The 5-4-3-2-1 grounding: name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste. Three times a day. The body cannot drift while the senses are being consulted.',
    pair_with_chakra: 'Root (Muladhara) — the ground-chakra; Clematis is exactly the root deficit that lets attention float away.',
    pair_with_chakra_slug: 'root',
    pair_with_crystal_sign: 'Pisces',
    pair_with_crystal_slug: 'pisces',
    key_questions: [
      'Where am I currently NOT when my body is in this room — the future I am imagining, the past I am replaying, the fantasy I am rehearsing?',
      'What is in front of me right now that would actually nourish me if I let myself fully arrive at it?',
      'If I stayed present for the next 30 minutes — really here — what might I notice that I have been missing?'
    ]
  },
  {
    slug: 'honeysuckle',
    text: 'Honeysuckle',
    latin: 'Lonicera caprifolium',
    group: 'present',
    position: 13,
    one_liner: 'For living in the past — the nostalgia that has become a refuge. Bach\'s remedy for the soul that prefers what was.',
    meaning: 'Honeysuckle is Bach\'s remedy for the person whose attention is in the past. The good old days. The relationship that ended. The home that was sold. The version of life that was. Bach saw the Honeysuckle state as a gentle but real grief that has not completed — the past is preferred to the present, and the present is therefore unable to nourish. The remedy returns the gift of memory without the captivity to it.',
    the_state: 'Living in memory. The past is more vivid than the present. Nostalgia as refuge. "Things used to be better." Re-reading old letters, scrolling old photos, returning to old places. The future feels less real than what was.',
    the_shift: 'Memory as treasury, not prison. The past is honored without being fled to. The present becomes available — not because the past was diminished, but because the soul has stopped needing it as escape.',
    in_love: 'Honeysuckle in love is the partner who keeps comparing this relationship to the previous one, or who lives in the early-days memories of THIS relationship rather than meeting it as it now is. The work is to fall in love with what is, not what was.',
    in_work: 'Honeysuckle in work is the founder whose best work was years ago and who has not let themselves do new work since. The remedy supports the move to make new things, not just curate the old.',
    the_practice: 'Once a week, deliberately revisit one good memory — fully, with permission, no guilt. Then close it. The opposite of repression is not constant return; it is honored revisit, then full engagement with now.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of love and memory; Honeysuckle is the heart-chakra still holding the old shape.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Cancer',
    pair_with_crystal_slug: 'cancer',
    key_questions: [
      'What chapter of my life am I still living in even though it ended — and what would honoring its ending free in me?',
      'If I let the past be precious AND complete, what energy currently spent on returning to it would become available for now?',
      'What new thing am I afraid to start because it would mean accepting that the old thing is over?'
    ]
  },
  {
    slug: 'wild-rose',
    text: 'Wild Rose',
    latin: 'Rosa canina',
    group: 'present',
    position: 14,
    one_liner: 'For resignation and apathy — the drift through life without protest or engagement. Bach\'s remedy for the soul that has stopped caring.',
    meaning: 'Wild Rose is Bach\'s remedy for resignation. Not despair (Sweet Chestnut) — that is too active. Not hopelessness (Gorse) — that still wants something. Wild Rose is the deeper flatness of having stopped wanting. The person accepts whatever life brings, not from spiritual equanimity but from disengagement. Bach saw it as a kind of quiet surrender to mediocrity. The remedy returns the will to care — the protest, the joy, the engagement that makes a life feel lived.',
    the_state: 'Resigned apathy. "It is what it is." No complaints, no enthusiasm. Accepts whatever circumstances bring. The light has gone out of the eyes. Going through motions without protest or joy.',
    the_shift: 'Return of vitality. The will to care, to protest the unacceptable, to celebrate the joyful. Engagement with life as something worth being awake for. Color returns.',
    in_love: 'Wild Rose in love is the partner who has stopped fighting AND stopped delighting — present in body, absent in spirit, with no complaint and no celebration. The work is to feel something again, even if the first feeling is anger.',
    in_work: 'Wild Rose in work is the employee who has stopped quitting AND stopped engaging. The remedy supports either fully showing up or honestly leaving — not the half-life of resigned presence.',
    the_practice: 'For one week, deliberately notice one thing each day that you love — and one thing each day that genuinely irritates you. Both. The point is not the content; it is the return of preference. Caring requires being moved, in both directions.',
    pair_with_chakra: 'Solar plexus (Manipura) — the will-chakra dimmed almost to nothing; Wild Rose relights the personal flame.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Taurus',
    pair_with_crystal_slug: 'taurus',
    key_questions: [
      'Where in my life have I quietly stopped caring — and is the not-caring a wisdom or a wound?',
      'What did I once love that I have stopped noticing — and could I let myself notice it once today, fully?',
      'What would I protest if I let myself — and what would happen if I let the protest become voice?'
    ]
  },
  {
    slug: 'olive',
    text: 'Olive',
    latin: 'Olea europaea',
    group: 'present',
    position: 15,
    one_liner: 'For complete exhaustion after a long struggle — when reserves have actually been spent. Bach\'s remedy for true depletion.',
    meaning: 'Olive is Bach\'s remedy for genuine exhaustion. Not the mental anticipation of effort (Hornbeam) — this is the real thing. Post-illness exhaustion. Post-crisis depletion. The long caregiver after the funeral. The marathon ended. The Olive state is when reserves have actually been used up. The remedy is not stimulation; it is permission to rest fully, and the restoration that follows true rest.',
    the_state: 'Total exhaustion of body and mind. Empty after sustained effort. Cannot bring oneself to even the small things. Sleep does not fully restore. Reserves spent. The well dry.',
    the_shift: 'Restoration. Sleep returns to its proper restorative function. Energy returns gradually as the system actually refills. Permission to fully rest without guilt — which is the prerequisite to genuine recovery.',
    in_love: 'Olive in love is the partner who has nothing left to give and is being asked, gently, for more. The work is to honestly name the depletion — and to let yourself receive, not give, until the well refills.',
    in_work: 'Olive in work is the founder after the 18-month sprint, the doctor after the pandemic ward, the parent after the difficult years. The remedy supports the radical permission to rest as the work — not skip the rest to return to the work.',
    the_practice: 'Schedule 3 full days where you do not produce anything. No meetings, no emails, no "small tasks." Sleep when sleepy. Eat when hungry. Walk slowly. The well refills on its own timeline; your job is to stop draining it.',
    pair_with_chakra: 'Sacral (Svadhisthana) — the chakra of vital reserves; Olive is the sacral well drained to the bottom.',
    pair_with_chakra_slug: 'sacral',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'Where am I currently asking myself to produce from a depleted well — and what would happen if I admitted the well is empty?',
      'When did I last rest fully — not "lower-effort work," but actual rest with no agenda?',
      'What would I have to give myself permission to skip in order to fully restore — and what is the cost of NOT skipping it?'
    ]
  },
  {
    slug: 'white-chestnut',
    text: 'White Chestnut',
    latin: 'Aesculus hippocastanum',
    group: 'present',
    position: 16,
    one_liner: 'For unwanted repetitive thoughts — the mental loop that will not stop. Bach\'s remedy for the broken-record mind.',
    meaning: 'White Chestnut is Bach\'s remedy for the mind that will not stop. The same worry, played again. The conversation rehearsed for the seventeenth time. The 3am loop of what-ifs. The Bach person experiences thought as a record stuck in a groove. The remedy is not the silencing of the mind — it is the unsticking of the needle. Thoughts return to flowing through, rather than circling the drain.',
    the_state: 'Repetitive, unwanted thoughts. The loop. The same conversation rehearsed dozens of times. The same worry returned to. Cannot focus because the same thought keeps interrupting. Sleep disturbed by mental chatter.',
    the_shift: 'Mental flow. Thoughts arise and pass without sticking. The mind quiets enough to focus, to read, to sleep. The loop dissolves — not because the worry was solved, but because the needle came unstuck.',
    in_love: 'White Chestnut in love is the partner replaying the same fight in their head for days after it was resolved. The work is to recognize the loop as the wound, not the resolution path — and to interrupt it physically when the mind cannot.',
    in_work: 'White Chestnut in work is the operator who cannot concentrate because the same recurring concern keeps cutting in. The remedy supports the move from mental loop-running to written loop-naming, which is what releases the needle.',
    the_practice: 'Write the loop down. The full version. In detail. Then close the notebook. The mind loops what is unprocessed; writing it processes it. If the loop returns, write again. Loop dissolves when the mind sees its content has been recorded.',
    pair_with_chakra: 'Third eye (Ajna) — the mental-chakra in over-firing mode; White Chestnut is the chakra unable to settle.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'What specific thought is currently looping in me, and have I let myself write it down in full just once?',
      'When the loop arrives, what physical action interrupts it — walking, breathing, water on the face — and have I been using it?',
      'What is my mind trying to process by repeating, and is there a person, page, or practice that would actually finish the processing?'
    ]
  },
  {
    slug: 'mustard',
    text: 'Mustard',
    latin: 'Sinapis arvensis',
    group: 'present',
    position: 17,
    one_liner: 'For sudden depression with no apparent cause — the dark cloud that descends without warning. Bach\'s remedy for the weatherless storm.',
    meaning: 'Mustard is Bach\'s remedy for depression that arrives without obvious trigger. Yesterday fine, today flat. No external event to point to. Bach described it as "a dark cloud which descends," a "deep gloom for no reason." The Mustard state can be brief or long, but it shares the quality of not being attached to a story. The remedy is not the resolution of the cause — there is no cause to resolve. It is the dissolution of the cloud itself.',
    the_state: 'Sudden, unexplained depression. The dark cloud with no trigger. "I have no reason to feel this way." The morning was fine; the afternoon is flat. Can last hours or weeks. No external event to point to.',
    the_shift: 'The cloud lifts. Light returns. The recognition that some states are weather rather than story — they come, they go, and the work is to wait them out with kindness rather than search for a cause that does not exist.',
    in_love: 'Mustard in love is the partner suddenly withdrawn and unable to say why. The work for them is to name the cloud without inventing reasons; the work for the other is not to take it personally.',
    in_work: 'Mustard in work is the operator whose energy has flatlined without explanation in the middle of a project that was going fine. The remedy supports gentle continuation rather than crisis-investigation.',
    the_practice: 'When the cloud arrives, name it as weather: "The Mustard cloud is here today. It is not my fault. It will pass." Then do gentle maintenance — eat, walk, sleep — and do not make major decisions until it has lifted.',
    pair_with_chakra: 'Crown (Sahasrara) — the chakra most subject to the descending cloud; Mustard meets the crown when its light has been temporarily occluded.',
    pair_with_chakra_slug: 'crown',
    pair_with_crystal_sign: 'Pisces',
    pair_with_crystal_slug: 'pisces',
    key_questions: [
      'When the dark cloud arrived, did I add a story to it that made it heavier — and can I notice the story as separate from the cloud?',
      'What is my body asking for right now that I have been overriding because the depression "is not allowed" to need anything?',
      'When this state has lifted before, what helped — and what made it worse? Trust the data, not the despair.'
    ]
  },
  {
    slug: 'chestnut-bud',
    text: 'Chestnut Bud',
    latin: 'Aesculus hippocastanum (bud)',
    group: 'present',
    position: 18,
    one_liner: 'For repeating the same mistakes — the inability to learn from experience. Bach\'s remedy for the soul on the same circle.',
    meaning: 'Chestnut Bud is Bach\'s remedy for the pattern that will not break. Same kind of partner, three times. Same kind of job, four times. Same kind of fight, repeatedly. The Chestnut Bud person experiences the recurrence but cannot quite see the pattern, or cannot apply the lesson. Bach distinguished it from Honeysuckle (living in the past) by its quality of NOT learning from the past — repeating it because it has not been integrated. The remedy supports the conscious extraction of lesson from experience.',
    the_state: 'Repeating the same mistake. Same kind of partner, same kind of role, same kind of conflict. Lessons not being learned. "Why does this keep happening to me?" The pattern visible to others but not to the self.',
    the_shift: 'Pattern recognition. The capacity to extract lesson from experience rather than just live experience. The same situation arrives — and is met differently this time because the lesson finally landed.',
    in_love: 'Chestnut Bud in love is the person who keeps choosing the same kind of unavailable partner with different faces. The work is to look at the actual pattern, name what it served, and grieve the version of self that needed it.',
    in_work: 'Chestnut Bud in work is the founder making the same hiring mistake three times, the operator missing the same kind of deadline. The remedy supports the move from "bad luck" to "my pattern," which is where change becomes possible.',
    the_practice: 'List the last 3 times this pattern occurred. Write what they had in common. Look for YOUR move that was the same each time. Not theirs. Yours. The lesson lives in your move.',
    pair_with_chakra: 'Third eye (Ajna) — the chakra of seeing; Chestnut Bud is the eye unable to see its own pattern.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'What pattern keeps repeating in my life with different faces — and what is MY move that is consistent across all the iterations?',
      'What would I have to feel, or grieve, in order to actually break this pattern rather than keep recreating it?',
      'If a wise friend watched me make this mistake three times, what would they have wanted me to see?'
    ]
  },
]
BACH_REMEDIES.push(...BACH_GROUP_3)

// ── GROUP 4 — LONELINESS (3) ──────────────────────────────────────
const BACH_GROUP_4: BachRemedy[] = [
  {
    slug: 'water-violet',
    text: 'Water Violet',
    latin: 'Hottonia palustris',
    group: 'loneliness',
    position: 19,
    one_liner: 'For the self-sufficient who have withdrawn into proud aloneness. Bach\'s remedy for the loneliness of those too capable to ask.',
    meaning: 'Water Violet is Bach\'s remedy for the dignified loner. The capable one. The quiet, self-sufficient person who can do it all themselves and therefore does — and ends up alone. Bach described the Water Violet type as gentle, peaceful, often spiritually inclined, but isolated by the very strength that makes them admirable. The remedy does not turn them into extroverts; it softens the wall that prevents intimacy.',
    the_state: 'Proud self-sufficiency that has become isolation. Capable of everything, accepts help with nothing. People come to them; they go to no one. Aloof not from coldness but from a quiet refusal to need.',
    the_shift: 'The capacity to need without shame. Strength that includes receiving as well as giving. The wall comes down enough for intimacy without losing the integrity of the self.',
    in_love: 'Water Violet in love is the partner who is always the helper, never the helped — and who is therefore loved at arm\'s length. The work is to let yourself be cared for, which feels more vulnerable than caring for others.',
    in_work: 'Water Violet in work is the leader who carries everyone\'s weight and asks nothing in return — and who is therefore lonely in the seat. The remedy supports the move from "indispensable" to "interdependent."',
    the_practice: 'Once this week, ask for something you do not strictly need. A favor, a kindness, an opinion. Notice the discomfort. The discomfort is the wall, and asking is what dissolves it.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of intimate exchange; Water Violet is the heart that gives without receiving.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Aquarius',
    pair_with_crystal_slug: 'aquarius',
    key_questions: [
      'Who in my life would I let care for me if I let myself need anything — and what is stopping me from asking?',
      'What does my self-sufficiency cost me in real intimacy, and is the cost worth what it buys?',
      'When did I learn that needing was unsafe — and is that lesson still serving the person I am now?'
    ]
  },
  {
    slug: 'impatiens',
    text: 'Impatiens',
    latin: 'Impatiens glandulifera',
    group: 'loneliness',
    position: 20,
    one_liner: 'For impatience and irritation at the slow pace of others. Bach\'s remedy for the quick mind ahead of everyone else.',
    meaning: 'Impatiens is Bach\'s remedy for the impatient. The fast thinker. The one who finishes others\' sentences. The one who works ahead, walks ahead, drives fast, and is constantly held up by people who cannot match the pace. Bach saw Impatiens as a loneliness remedy because the impatient end up alone — they cannot bear the slowness, and others cannot bear the pressure. It is one of the 5 ingredients in Rescue Remedy because impatience reaches crisis levels in acute situations.',
    the_state: 'Irritation at slow pace. Finishing others\' sentences. Walking ahead. Driving aggressively. Cannot tolerate detail-work or repetitive explanation. Tension in jaw, shoulders, hands.',
    the_shift: 'The capacity for others\' pace. Quickness intact, but no longer used as a weapon against slower beings. Tension dissolves. Relationships deepen because patience becomes available.',
    in_love: 'Impatiens in love is the partner who experiences the other\'s slower processing as inadequacy rather than difference. The work is to recognize that fast is not better, just faster — and that depth often requires slowness.',
    in_work: 'Impatiens in work is the brilliant operator who burns out their team by demanding speed they cannot sustain. The remedy supports the move from "drive everyone faster" to "design the work around realistic pace."',
    the_practice: 'When impatience rises, slow your breathing on purpose. Out-breath longer than in-breath. This is the only thing the body cannot do while in irritation — the two states are physiologically incompatible.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of personal pace; Impatiens is the solar plexus pushing past where others can follow.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Aries',
    pair_with_crystal_slug: 'aries',
    key_questions: [
      'Where does my impatience cost me more than the time it "saves" — in relationships, in depth, in body-tension?',
      'When I have been forced to wait, what have I discovered that the speed would have missed?',
      'Whose pace am I currently demanding match mine, when the kinder move is to match theirs?'
    ]
  },
  {
    slug: 'heather',
    text: 'Heather',
    latin: 'Calluna vulgaris',
    group: 'loneliness',
    position: 21,
    one_liner: 'For talkativeness and inability to be alone. Bach\'s remedy for the lonely heart that cannot bear silence.',
    meaning: 'Heather is Bach\'s remedy for the talker who cannot stop. The person who buttonholes strangers at parties. The friend who fills every silence with their own concerns. The colleague whose conversations are monologues. Bach saw the Heather state as deep loneliness expressed paradoxically as over-presence: the Heather person cannot bear to be alone, so they overflow onto others — which drives the others away, deepening the loneliness. The remedy returns the capacity to be alone with the self, which is the only thing that makes good company possible.',
    the_state: 'Compulsive talking, mostly about oneself. Cannot bear silence. Strangers buttonholed. Conversations become monologues. The need to be the center of attention. Drains others without noticing.',
    the_shift: 'The capacity to listen. The ability to be alone without panic. Self-company becomes nourishing. Conversations become exchanges. Others stay rather than retreat.',
    in_love: 'Heather in love is the partner whose share of conversation has crowded the partner out — and who is therefore lonely in a relationship full of words. The work is to ask, listen, and bear the silence between responses.',
    in_work: 'Heather in work is the colleague whose updates never end and who fills every meeting. The remedy supports the move to ratio — listening twice as much as speaking, in every interaction, for a defined period.',
    the_practice: 'For one full day, ask one question every time you would otherwise share. Then listen to the answer without redirecting back to yourself. Notice what people actually want to say when given the room.',
    pair_with_chakra: 'Throat (Vishuddha) — the chakra of speech; Heather is the throat using voice as defense against loneliness rather than as exchange.',
    pair_with_chakra_slug: 'throat',
    pair_with_crystal_sign: 'Leo',
    pair_with_crystal_slug: 'leo',
    key_questions: [
      'When I am alone, what arises that my talking has been keeping at bay — and would meeting it be worse than the loneliness of being avoided?',
      'In my last three conversations, what ratio of speaking to listening did I hold — and what would change if I reversed it?',
      'What would I want to be asked, if someone genuinely wanted to know — and could I become the person who asks others that question?'
    ]
  },
]
BACH_REMEDIES.push(...BACH_GROUP_4)

// ── GROUP 5 — OVERSENSITIVITY (4) ─────────────────────────────────
const BACH_GROUP_5: BachRemedy[] = [
  {
    slug: 'agrimony',
    text: 'Agrimony',
    latin: 'Agrimonia eupatoria',
    group: 'oversensitivity',
    position: 22,
    one_liner: 'For hiding distress behind cheerfulness — the jovial mask over private pain. Bach\'s remedy for the smile that costs.',
    meaning: 'Agrimony is Bach\'s remedy for the cheerful mask. The person who is always "fine." The life of the party. The peacemaker who jokes their way past anything difficult. Bach saw the Agrimony state as inner torment hidden behind outward jollity — the suffering goes unmet because no one knows it is there. The remedy is not the loss of humor or warmth; it is the restoration of access to one\'s own true feelings, even when those feelings are unpleasant. The mask softens; the face beneath becomes visible.',
    the_state: 'Hiding distress behind cheerfulness. Always "fine." Jokes away pain. Conflict-averse to the point of self-betrayal. Substance use to soften feelings rather than face them. Inner torment invisible to others.',
    the_shift: 'Permission to be unwell publicly. The capacity to name difficulty without performing comfort. Humor remains, but ceases to be defense. Real intimacy becomes possible because the real self shows up.',
    in_love: 'Agrimony in love is the partner who never lets their distress be seen — and who therefore is never truly met. The work is to let the partner see you on a bad day without rushing to reassure them you are fine.',
    in_work: 'Agrimony in work is the team-member everyone likes who is privately burning out and saying nothing. The remedy supports the move to ask for help, name capacity-limits, and let leadership see the real state.',
    the_practice: 'Once today, when someone asks "how are you?", answer truthfully. Not a long story — one accurate sentence. ("Honestly, I am tired today.") Notice the discomfort. The discomfort is the mask, and the truth is the dissolving of it.',
    pair_with_chakra: 'Throat (Vishuddha) — the chakra of authentic voice; Agrimony is the throat trained to perform "fine" instead of speak truth.',
    pair_with_chakra_slug: 'throat',
    pair_with_crystal_sign: 'Libra',
    pair_with_crystal_slug: 'libra',
    key_questions: [
      'What difficult truth about my state today have I been performing past — and what would saying it out loud, once, actually cost?',
      'Who in my life knows the version of me that is not "fine" — and if no one does, what is that costing me?',
      'When I was last honestly unwell with someone, how did they respond — and is the fear of bad response actually rooted in evidence or in old wound?'
    ]
  },
  {
    slug: 'centaury',
    text: 'Centaury',
    latin: 'Centaurium umbellatum',
    group: 'oversensitivity',
    position: 23,
    one_liner: 'For the inability to say no — the doormat-pleaser whose service has eaten their life. Bach\'s remedy for the soul without boundaries.',
    meaning: 'Centaury is Bach\'s remedy for the over-server. The person who cannot say no. The one who agrees to every request, takes on every favor, says yes when their body is saying no. Bach saw the Centaury type as kind, gentle, often spiritually devoted — but bypassing their own needs so consistently that the self begins to disappear. The remedy is not the development of selfishness; it is the recovery of the self that has the right to choose what it serves.',
    the_state: 'Cannot say no. Over-commits. Says yes when meaning no. Resentment builds underneath the agreeable surface. Boundaries unclear or absent. Service has become servitude.',
    the_shift: 'The capacity to say no without guilt. Service that is chosen rather than reflexive. Resentment dissolves because the self is no longer being violated by its own agreements. Energy returns.',
    in_love: 'Centaury in love is the partner who has been giving past depletion for years — and who has begun to disappear inside the giving. The work is to disappoint the partner once, gently, on something small, and notice the relationship survives.',
    in_work: 'Centaury in work is the colleague who picks up every dropped ball. The remedy supports the move from "indispensable doormat" to "trusted teammate" — by letting some balls drop and trusting others to pick them up.',
    the_practice: 'For one week, before saying yes to any request, ask: "What does my body want to do?" Then notice the gap between body-yes and mouth-yes. Honor the body once. The world does not end.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of personal will; Centaury is the will that has not yet learned its right to choose.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Cancer',
    pair_with_crystal_slug: 'cancer',
    key_questions: [
      'What recent yes did I give that my body had already said no to — and what would change if I rescinded it?',
      'What do I imagine would happen if I disappointed the people I keep saying yes to — and is the imagined cost actually accurate to the real cost?',
      'Whose needs am I currently serving at the expense of mine, and is the service mutual or one-way?'
    ]
  },
  {
    slug: 'walnut',
    text: 'Walnut',
    latin: 'Juglans regia',
    group: 'oversensitivity',
    position: 24,
    one_liner: 'For protection during transitions and changes. Bach\'s remedy for the link that needs to break, gently.',
    meaning: 'Walnut is Bach\'s remedy for transition. Moving country. Leaving the marriage. Changing career. Entering puberty, menopause, retirement. The Walnut moment is when the old way of being needs to end so the new way can begin — and when one is over-sensitive to the influence of the past, the family of origin, the old habits, the people who knew the old self. Bach called Walnut "the link-breaker." The remedy protects the new direction while honoring the old.',
    the_state: 'Over-influenced by past ties during a transition. Old habits resurface. Family of origin\'s opinions become loud. The new self feels unstable. Doubt about the change.',
    the_shift: 'The capacity to make the change cleanly. Old ties honored without being obeyed. The new self is protected long enough to root. Transition completes.',
    in_love: 'Walnut in love is the partner trying to make a relationship change — leaving, deepening, redefining — while everyone in the old configuration pulls them back. The work is to honor the past without letting it veto the future.',
    in_work: 'Walnut in work is the founder pivoting the company, the operator changing fields, the leader stepping back into smaller scope. The remedy supports the cleanness of the move against the gravitational pull of who you used to be.',
    the_practice: 'Name the transition out loud, with witness. "I am no longer X; I am becoming Y." Choose ONE person who knew the old self and tell them what is changing. The announcement is the protection.',
    pair_with_chakra: 'Crown (Sahasrara) — the chakra of identity-rebirth; Walnut is the crown during the changing of inner authority.',
    pair_with_chakra_slug: 'crown',
    pair_with_crystal_sign: 'Scorpio',
    pair_with_crystal_slug: 'scorpio',
    key_questions: [
      'What transition am I currently in — and who in my old life is pulling me back into the version of me that is changing?',
      'What link needs to break, gently, in order for the new direction to root?',
      'Have I named the change out loud to at least one witness — and if not, what would naming it change?'
    ]
  },
  {
    slug: 'holly',
    text: 'Holly',
    latin: 'Ilex aquifolium',
    group: 'oversensitivity',
    position: 25,
    one_liner: 'For hatred, envy, jealousy, and suspicion — the closed heart in protective contraction. Bach\'s remedy for the heart that has lost trust.',
    meaning: 'Holly is Bach\'s remedy for the contracted heart. Hatred. Envy. Jealousy. Suspicion. Bach saw Holly as the great remedy for the absence of love — when the heart has closed against another (or against life itself) and has begun to leak the toxins of that closure. Bach considered Holly one of the most universal remedies because, in his view, every negative emotion eventually traces back to some absence of love. The remedy is not the manufacturing of feeling; it is the dissolving of what blocks the feeling that wants to be there.',
    the_state: 'Hatred, envy, jealousy, suspicion. Hardened against another or against life. The heart in contraction. Bitter reactions to others\' good fortune. Inability to feel warmth where warmth would be natural.',
    the_shift: 'The heart opens enough to feel. Not forced love — the dissolving of the wall that prevents love. Compassion returns, including for the part of the self that needed the wall.',
    in_love: 'Holly in love is the partner whose suspicion or jealousy has become bigger than the relationship. The work is to recognize the wound under the suspicion — what was lost or feared — and to grieve it directly rather than weaponize it.',
    in_work: 'Holly in work is the colleague who is bitter at another\'s promotion, the founder who hates the competitor. The remedy supports the move from envy to acknowledgment — what the envy says you want, which can then become a direction.',
    the_practice: 'Identify the specific person or situation your heart has hardened against. Name what you actually wanted from them or from it. The hatred is usually grief in armor; the practice is to remove the armor and let the grief be felt.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of love itself; Holly is the heart in its most contracted protective shape.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Scorpio',
    pair_with_crystal_slug: 'scorpio',
    key_questions: [
      'Who has my heart closed against, and what did I actually want from them that I did not receive?',
      'What is the envy telling me I want for myself — and could I pursue it directly, separate from the person I envy?',
      'If I let the wall down even slightly with this person, what would I risk feeling — and is the risk worth the freedom?'
    ]
  },
]
BACH_REMEDIES.push(...BACH_GROUP_5)

// ── GROUP 6 — DESPONDENCY OR DESPAIR (8) ──────────────────────────
const BACH_GROUP_6: BachRemedy[] = [
  {
    slug: 'larch',
    text: 'Larch',
    latin: 'Larix decidua',
    group: 'despair',
    position: 26,
    one_liner: 'For lack of confidence and anticipation of failure. Bach\'s remedy for the soul that has already decided it cannot.',
    meaning: 'Larch is Bach\'s remedy for the person who does not try because they have already decided they will fail. Not despair (Sweet Chestnut) — confidence-collapse. The Larch person often watches less talented peers succeed at things they are actually more qualified for, because the peers tried and they did not. Bach saw the remedy as the dissolver of self-imposed disqualification — not the manufacture of confidence, but the removal of the conviction that prevents attempt.',
    the_state: 'Anticipated failure. "I cannot do it." Does not try, because the failure is already certain. Watches less-qualified others succeed. Capable but disqualifying self before the test.',
    the_shift: 'Willingness to attempt. The recognition that failure-while-trying is information; failure-by-default is just self-exile. Action becomes possible without the prerequisite of certainty.',
    in_love: 'Larch in love is the person who does not pursue someone they care about because they have already decided they would be refused. The work is to let yourself be refused honestly, rather than refuse yourself preemptively.',
    in_work: 'Larch in work is the operator who does not apply for the role they are actually qualified for. The remedy supports the move from "I cannot" to "I will try" — without requiring belief in success.',
    the_practice: 'Apply for, ask for, or attempt one thing this week that you have been disqualifying yourself from. The outcome does not matter for this practice. The practice IS the asking, separate from the result.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of self-trust; Larch is the manipura that has been silenced before being asked.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'What have I been disqualifying myself from before any external rejection — and what would happen if I let the world be the one to say no?',
      'When someone else, less qualified than me, succeeded at this — what does that tell me about the gap between competence and attempt?',
      'What is the smallest first attempt I could make today at the thing I have decided I cannot do?'
    ]
  },
  {
    slug: 'pine',
    text: 'Pine',
    latin: 'Pinus sylvestris',
    group: 'despair',
    position: 27,
    one_liner: 'For self-blame and guilt — the soul that takes responsibility for everything, including others\' faults. Bach\'s remedy for over-ownership.',
    meaning: 'Pine is Bach\'s remedy for the chronic self-blamer. The person who apologizes for everything. The one who takes responsibility for moods, weather, others\' choices, things long past. Bach saw the Pine state as a misdirection of conscience — the inner judge has become indiscriminate, blaming the self for things outside its responsibility. The remedy returns conscience to its proper function: clear about real responsibility, free of the false guilt that paralyzes.',
    the_state: 'Chronic self-blame. Guilt for things outside one\'s control. Apologizing constantly. Takes responsibility for others\' moods, others\' choices. The inner judge in overdrive.',
    the_shift: 'Accurate responsibility. The capacity to own what is yours and release what is not. Guilt becomes information about specific actions rather than a chronic state of being. Forgiveness — of self — becomes available.',
    in_love: 'Pine in love is the partner apologizing for things they did not cause — and therefore unable to apologize meaningfully for things they did. The work is to discriminate: real harm I caused vs. weather I am not responsible for.',
    in_work: 'Pine in work is the manager taking the team\'s failures personally beyond what the role requires. The remedy supports the move from "everything is my fault" to "this specific thing I will own, this other thing belongs to its actual cause."',
    the_practice: 'For each guilt that arrives this week, ask: "Did I, specifically, cause this through my choice?" If yes, make repair. If no, release. Most Pine guilt collapses under this single question.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of self-evaluation; Pine is the inner judge in over-firing mode.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'What am I currently feeling guilty about that, if I am honest, was not actually my doing?',
      'When I have apologized recently, which apologies were for real harm I caused — and which were reflexive padding?',
      'If I let myself fully forgive myself for this one thing, what would I do with the energy I have been spending on the guilt?'
    ]
  },
  {
    slug: 'elm',
    text: 'Elm',
    latin: 'Ulmus procera',
    group: 'despair',
    position: 28,
    one_liner: 'For temporary overwhelm in the capable — when the load momentarily exceeds the carrier. Bach\'s remedy for the strong, briefly buckling.',
    meaning: 'Elm is Bach\'s remedy for the capable person in a moment of overwhelm. Not chronic incapacity — that is Larch. Not despair — that is Sweet Chestnut. Elm is the experienced operator who has carried great weight, has the skill and the will, but has temporarily run into a load that exceeds what the body can hold right now. Bach described it as a momentary collapse of competence in someone who is genuinely competent. The remedy supports the brief sit-down before the standing-up.',
    the_state: 'Temporary overwhelm in the capable. "I cannot do this right now" from someone who normally can. Crisis-of-confidence in the middle of important work. The strong person briefly buckling.',
    the_shift: 'The capacity returns. Not because the load reduced — because the system caught its breath, ate something, slept once, and remembered its competence. Strength reasserts.',
    in_love: 'Elm in love is the usually-reliable partner who has hit a wall and momentarily cannot show up the way they normally do. The work — for both — is to recognize this as temporary, ask for help once, and let the system recover.',
    in_work: 'Elm in work is the founder mid-launch, the surgeon mid-week, the operator mid-quarter who has hit the wall. The remedy supports the short, restorative pause that ends the wall.',
    the_practice: 'Eat. Sleep. Walk outside for 20 minutes. In that order. Most Elm moments are physiological before they are existential. Address the body first; the rest usually clears.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of capable will; Elm is the will momentarily exceeded.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'Am I in an Elm moment (temporary overwhelm in a capable person) — or have I been here for weeks and need a different remedy entirely?',
      'What is the smallest physiological care I have been skipping that, if I gave it tonight, might restore the system?',
      'Who do I trust enough to ask for one specific helping-hand right now that would let me sit down before standing back up?'
    ]
  },
  {
    slug: 'sweet-chestnut',
    text: 'Sweet Chestnut',
    latin: 'Castanea sativa',
    group: 'despair',
    position: 29,
    one_liner: 'For the dark night of the soul — the deepest despair where it feels there is no way through. Bach\'s remedy for absolute extremity.',
    meaning: 'Sweet Chestnut is Bach\'s remedy for the deepest reach of despair. The dark night of the soul. The moment the person has reached the limit of endurance and there appears to be no way forward. Bach described it as "that hopeless despair when it seems there is nothing but destruction and annihilation left to face." The Sweet Chestnut state is past Gorse (resigned hopelessness) — it is acute existential anguish. The remedy is the recognition that this dark night is itself the doorway, not the wall — that the rock-bottom is, paradoxically, the place from which the new direction reveals itself.',
    the_state: 'Extreme mental anguish. The dark night of the soul. "I cannot bear another moment." Reached the absolute limit. Cannot see a way through. The bottom of the well. Existential despair.',
    the_shift: 'The recognition that the bottom is the doorway. Not the end of suffering — but the end of the kind of suffering that hopes for a way around. The new direction emerges from the rock itself, not from the avoidance of it.',
    in_love: 'Sweet Chestnut in love is the partner who has reached the end of what they can endure in a configuration — and who must let the configuration itself die for them to live. The work is to honor the bottom rather than flee it.',
    in_work: 'Sweet Chestnut in work is the founder at the moment the company has failed and the self has not yet found what comes after. The remedy supports the sitting-with-bottom that precedes the unforeseeable next move.',
    the_practice: 'Tell ONE person — friend, therapist, line — the truth of where you are. Not a polished version. The raw one. The Sweet Chestnut state magnifies in isolation and softens slightly the moment another human knows.',
    pair_with_chakra: 'Crown (Sahasrara) — the chakra of meaning itself; Sweet Chestnut is the crown in its darkest before-dawn moment.',
    pair_with_chakra_slug: 'crown',
    pair_with_crystal_sign: 'Scorpio',
    pair_with_crystal_slug: 'scorpio',
    key_questions: [
      'What has reached its end in me right now that I have been trying to keep alive past its natural completion?',
      'Who is the one person I could tell the truth of this moment to — not asking them to fix it, just to know it?',
      'If the bottom is the doorway rather than the wall, what might be on the other side that I cannot see from here?'
    ]
  },
  {
    slug: 'star-of-bethlehem',
    text: 'Star of Bethlehem',
    latin: 'Ornithogalum umbellatum',
    group: 'despair',
    position: 30,
    one_liner: 'For shock and trauma — recent or long-held. Bach\'s remedy for the body that has not finished processing what happened.',
    meaning: 'Star of Bethlehem is Bach\'s remedy for shock. The accident, the loss, the bad news, the assault — any event the system did not have time to absorb. Bach saw it as the comforter remedy, working on shocks both recent and decades-old that still live in the body. It is one of the 5 ingredients of Rescue Remedy. The remedy meets the frozen place in the nervous system where the original event is still happening, and gently lets it complete.',
    the_state: 'Shock — acute or held. The body locked around an unprocessed event. Numbness alternating with sudden grief. The original trauma still present in the system, sometimes from years ago. Cannot fully relax because the system is still bracing.',
    the_shift: 'Comfort. The frozen place softens. The body realizes the event is over. Grief can complete its arc rather than circling indefinitely. The held trauma releases — sometimes gradually, sometimes in one warm wave.',
    in_love: 'Star of Bethlehem in love is the partner still living inside a past trauma that closes them when intimacy approaches. The work is to recognize the trigger as old rather than current — and to give the body the comfort the original moment was denied.',
    in_work: 'Star of Bethlehem in work is the operator still affected by the bankruptcy, the public failure, the betrayal — even years later. The remedy supports the processing that allows full presence to return to current work.',
    the_practice: 'Place a warm hand on the part of your body that holds the shock. (You will know where.) Breathe slowly into that hand. Tell the body: "It is over. You survived. You are safe now." Repeat as needed.',
    pair_with_chakra: 'Heart (Anahata) — the chakra where most shock is held; Star of Bethlehem is the warm hand on the heart that has been bracing.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Cancer',
    pair_with_crystal_slug: 'cancer',
    key_questions: [
      'What event — recent or long past — is my body still bracing around as if it were happening?',
      'Where in my body does the shock live, and have I given that place the kind hand and slow breath it has been waiting for?',
      'Who could be a safe witness to the processing of this — and have I let myself ask?'
    ]
  },
  {
    slug: 'willow',
    text: 'Willow',
    latin: 'Salix vitellina',
    group: 'despair',
    position: 31,
    one_liner: 'For resentment and bitterness — the "life is unfair" stance that has hardened into chronic grievance. Bach\'s remedy for the soul stuck in unjust.',
    meaning: 'Willow is Bach\'s remedy for chronic resentment. The person who feels life has dealt them an unfair hand and cannot let it go. Not the active anger of Holly — that has heat. Willow is colder: it is the sour, sulky, woe-is-me stance that complains without acting, that blames without forgiving, that fixates on the wrong done. Bach saw Willow types as having genuinely suffered, often genuinely been wronged — and as having confused that wrong with a verdict on their whole life. The remedy supports the move from blame to responsibility, which is the only doorway out of grievance.',
    the_state: 'Chronic resentment. "Life is unfair." Bitterness. Sulky withdrawal. Sees self as victim of circumstances. Cannot enjoy others\' happiness. Complains without acting. The grievance has become identity.',
    the_shift: 'The recognition that grievance, however justified, is now its own prison. Movement returns. The capacity to take responsibility for the next step, even though the previous wrong was real. Joy becomes available.',
    in_love: 'Willow in love is the partner keeping score across years. The work is to recognize that being right about the wrong does not produce love — only releasing it does. Justice without release is just slow erosion.',
    in_work: 'Willow in work is the colleague who explains every setback by what others did to them — and who therefore never recovers the steering wheel. The remedy supports the move from "they did this to me" to "what do I do next."',
    the_practice: 'List your top three resentments. For each, write one action you could take this week that would move you forward — independent of whether the other person ever apologizes or repairs. The locus of agency returns to you.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of agency; Willow is the will that has been given away to grievance.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Scorpio',
    pair_with_crystal_slug: 'scorpio',
    key_questions: [
      'What grievance have I been carrying so long it has begun to feel like identity — and who would I be without it?',
      'What action could I take this week that would move me forward regardless of whether the original wrong is ever acknowledged?',
      'Is being right about what happened more important to me than being free of it?'
    ]
  },
  {
    slug: 'oak',
    text: 'Oak',
    latin: 'Quercus robur',
    group: 'despair',
    position: 32,
    one_liner: 'For the persistent who push past the point of breaking. Bach\'s remedy for the soul that will not rest until it shatters.',
    meaning: 'Oak is Bach\'s remedy for the relentless plodder. The person who keeps going past where any sane system would stop. The caregiver who has not rested in years. The founder pushing through the third health-warning. The Oak type is admirable — strong, reliable, dutiful, refuses to give up — and is also bound for collapse if the relentlessness does not soften. Bach saw the remedy as the granter of permission to rest — which the Oak personality cannot give themselves.',
    the_state: 'Plodding on past breaking-point. Refuses to give up despite exhaustion. Duty-bound. Cannot let others down. The body warning, the mind overriding. Heading for forced rest because chosen rest will not happen.',
    the_shift: 'The capacity to rest before forced to. The recognition that strength includes knowing when to stop. The relentlessness becomes available as gift, not as compulsion.',
    in_love: 'Oak in love is the partner who keeps showing up perfectly for the family even as they are crumbling internally. The work is to let yourself need, take, receive — to be the one carried rather than the one carrying, for one week.',
    in_work: 'Oak in work is the founder in year 7 still pushing daily through what should have been delegated 3 years ago. The remedy supports the move from "I must do it all" to "what would happen if I stopped, just to see."',
    the_practice: 'Take one full day off this week. No exceptions. No "small task." Notice the panic that arises. The panic IS the Oak pattern — and the noticing is what begins to soften it.',
    pair_with_chakra: 'Root (Muladhara) — the chakra of endurance; Oak is the root chakra over-using its strength without renewing it.',
    pair_with_chakra_slug: 'root',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'Where am I currently pushing past my body\'s clear signals to stop — and what catastrophe do I imagine would happen if I stopped?',
      'When was the last time I rested fully without an emergency forcing it?',
      'What would my body say to me right now if I sat still for 5 minutes and actually listened?'
    ]
  },
  {
    slug: 'crab-apple',
    text: 'Crab Apple',
    latin: 'Malus pumila',
    group: 'despair',
    position: 33,
    one_liner: 'For the sense of being unclean — physical or moral. Bach\'s cleansing remedy for the soul that cannot accept its own form.',
    meaning: 'Crab Apple is Bach\'s cleansing remedy. The person who feels unclean — physically (skin, body, illness), morally (shame, "I am bad"), or aesthetically (perfectionism about appearance). Bach called it "the cleanser." The Crab Apple state can be small (obsessive hand-washing, fixation on a single flaw) or large (deep moral self-rejection). The remedy supports radical self-acceptance — not the manufacturing of self-love, but the dissolving of the conviction that the self is contaminated and needs to be scrubbed out.',
    the_state: 'Sense of being unclean. Obsession with physical or moral imperfection. Excessive washing, picking, cleaning. Disgust at one\'s own body. Perfectionism about appearance. "Something is wrong with me."',
    the_shift: 'Self-acceptance. The body is allowed to be a body. Imperfections become information, not stains. Cleaning returns to its proper function (hygiene) rather than its compulsive one (purification).',
    in_love: 'Crab Apple in love is the partner who cannot believe they are loveable in their current body, who hides parts, who armors against being seen fully. The work is to let yourself be seen exactly as you are by one person — and survive their continued love.',
    in_work: 'Crab Apple in work is the perfectionist who cannot ship because the work is never clean enough. The remedy supports the move from "this is not clean enough yet" to "this is what it is, and it is enough to send."',
    the_practice: 'Look at the body part you most reject in a mirror. Touch it gently. Say out loud: "This is part of me. It is allowed." Repeat daily. Self-acceptance, in Bach\'s view, is not philosophical — it is a relationship with the body, built one repetition at a time.',
    pair_with_chakra: 'Sacral (Svadhisthana) — the chakra of body-acceptance; Crab Apple is the sacral in its harshest self-rejection.',
    pair_with_chakra_slug: 'sacral',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'What part of myself — body, history, choice, feeling — am I currently treating as a stain that needs to be removed rather than a fact that needs to be accepted?',
      'When did I learn that this part of me was unacceptable, and is the source still alive in me — or just an echo?',
      'What would change if I let this particular imperfection simply BE, without urgency, for one week?'
    ]
  },
]
BACH_REMEDIES.push(...BACH_GROUP_6)

// ── GROUP 7 — OVERCARE FOR WELFARE OF OTHERS (5) ──────────────────
const BACH_GROUP_7: BachRemedy[] = [
  {
    slug: 'chicory',
    text: 'Chicory',
    latin: 'Cichorium intybus',
    group: 'overcare',
    position: 34,
    one_liner: 'For possessive love — care given with strings attached. Bach\'s remedy for the heart that loves to bind.',
    meaning: 'Chicory is Bach\'s remedy for the love that demands. The mother who gives endlessly and expects to be the center. The friend who keeps score. The partner whose affection comes with implicit invoice. Bach saw the Chicory state as love distorted by need — the giver gives, but the gift is hooked. The remedy is not the loss of caring; it is the restoration of clean love, given freely, without the binding. The other is allowed to be other rather than to be possession.',
    the_state: 'Possessive, conditional love. Gives much, expects reciprocation. Keeps score. Hurt easily by perceived neglect. "After all I have done for you." Love offered with strings.',
    the_shift: 'Love given freely. Care without contract. The other is allowed to be themselves rather than to fulfill an unspoken role. Giving becomes nourishing rather than depleting because it is not transactional.',
    in_love: 'Chicory in love is the partner whose every kindness becomes a future debt collected. The work is to give without invoice, even once — and notice what changes in the quality of the giving itself.',
    in_work: 'Chicory in work is the leader who has done a lot for the team and now demands loyalty in return. The remedy supports the move from "after all I did" to "I did it because I chose to; they owe nothing."',
    the_practice: 'This week, give something — time, kindness, attention — to someone in your life with NO mention of it after. No reminder, no reference. Notice the discomfort of giving freely. The discomfort is the binding seeking attachment.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of love; Chicory is the heart that has confused love with possession.',
    pair_with_chakra_slug: 'heart',
    pair_with_crystal_sign: 'Cancer',
    pair_with_crystal_slug: 'cancer',
    key_questions: [
      'Where am I currently keeping score in a relationship — and what would change if I burned the ledger?',
      'What do I need from the people I give to that I have not asked for directly — and what is the fear behind the not-asking?',
      'If I imagined the people I love free of any debt to me, what would the love look like — and is that the love I want?'
    ]
  },
  {
    slug: 'vervain',
    text: 'Vervain',
    latin: 'Verbena officinalis',
    group: 'overcare',
    position: 35,
    one_liner: 'For over-enthusiasm and fanaticism — the cause carried past the point of wisdom. Bach\'s remedy for the soul on fire with conviction.',
    meaning: 'Vervain is Bach\'s remedy for the over-zealous. The person who burns with conviction and cannot understand why others do not match the heat. The activist who alienates with intensity. The teacher who lectures. The reformer who cannot stop reforming. Bach saw Vervain types as genuinely good, often gifted, but tipped into excess — they cannot relax their cause, cannot let others come to it in their own time, cannot rest. The remedy preserves the conviction while softening the compulsion to convert.',
    the_state: 'Over-enthusiasm. Fanaticism. Tries to convert others to one\'s cause or opinion. Cannot relax. Burns with intensity that exhausts self and others. Lectures. Argues. Cannot let others come in their own time.',
    the_shift: 'Conviction without compulsion. The cause remains; the need to force-feed it dissolves. Others are allowed to disagree, or to come to the truth on their own timeline. The teacher\'s nervous system returns to ground.',
    in_love: 'Vervain in love is the partner who keeps trying to convert the other to a way of eating, thinking, voting, healing. The work is to live the conviction without prescribing it — and to notice that example does more than argument ever did.',
    in_work: 'Vervain in work is the founder who burns out the team with mission-intensity, the operator who lectures peers on optimal methodology. The remedy supports the move from "I must convince" to "I will live it; they will see."',
    the_practice: 'For one week, do not try to convince anyone of anything. Hold your convictions privately. Live them visibly. Notice what changes — both in your own nervous system and in how others receive you.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of will; Vervain is the will burning past its container.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Sagittarius',
    pair_with_crystal_slug: 'sagittarius',
    key_questions: [
      'What cause or conviction have I been trying to convert others to — and is the converting actually serving the cause, or just exhausting everyone?',
      'When have I been most successfully influential — and was it through pressure or through example?',
      'What would happen to the cause if I held it more quietly, more privately, but lived it more visibly?'
    ]
  },
  {
    slug: 'vine',
    text: 'Vine',
    latin: 'Vitis vinifera',
    group: 'overcare',
    position: 36,
    one_liner: 'For the domineering — the strong personality whose authority has become tyranny. Bach\'s remedy for the soul that rules others.',
    meaning: 'Vine is Bach\'s remedy for the dominator. The natural leader whose leadership has become inflexible authority. The CEO who cannot delegate. The patriarch whose word is law. The friend who knows what is best for everyone. Bach saw Vine types as genuinely strong, capable, often visionary — and as having lost the capacity for true collaboration. The remedy preserves the strength while restoring respect for others\' autonomy. Authority returns to its proper function: serving the group rather than overriding it.',
    the_state: 'Dominating. Inflexible. Demands obedience. Knows what is best for everyone. Cannot collaborate as equal. Authority has become tyranny. Strong but not listening.',
    the_shift: 'Authority that serves. Strength that includes deference. The recognition that the best leaders make others stronger, not smaller. Collaboration becomes possible because hierarchy stops being defended.',
    in_love: 'Vine in love is the partner who has become a parent to the other, deciding for them, overriding their preferences "for their own good." The work is to consult before deciding, even on small things — and to discover that the other has their own wisdom.',
    in_work: 'Vine in work is the founder who cannot delegate, the leader whose meetings are monologues. The remedy supports the move from "I will decide" to "I will listen first" — without losing the capacity to decide when listening is complete.',
    the_practice: 'For one week, in every meeting or conversation, ask "what do you think?" before sharing your view. Then actually wait for the answer. Then let the answer move you. Notice what changes in the quality of the decisions made.',
    pair_with_chakra: 'Solar plexus (Manipura) — the chakra of personal power; Vine is the will using its strength to override rather than collaborate.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_crystal_sign: 'Leo',
    pair_with_crystal_slug: 'leo',
    key_questions: [
      'Where am I currently overriding others when consultation would have been wiser — and what is the fear behind needing to dominate?',
      'When I have collaborated as equal recently, what was the outcome — and does it match my belief that I "must" decide alone?',
      'Who in my life has wisdom I have been ignoring because I have decided I know better — and what would change if I let them lead one decision?'
    ]
  },
  {
    slug: 'beech',
    text: 'Beech',
    latin: 'Fagus sylvatica',
    group: 'overcare',
    position: 37,
    one_liner: 'For intolerance and criticism of others. Bach\'s remedy for the soul that cannot let imperfection be.',
    meaning: 'Beech is Bach\'s remedy for the critical eye. The person who notices every flaw in others, who irritates at small habits, who cannot let differences alone. Bach saw the Beech state as intolerance rooted in the conviction that there is a right way to be (usually one\'s own) — and that deviations are personal affronts. The remedy is not the loss of discernment; it is the recovery of tolerance. The eye still sees what is true, but the heart no longer requires others to conform.',
    the_state: 'Intolerant of others. Critical. Irritated by small differences in habit, opinion, style. Judges. Believes there is a right way (usually yours) and others are doing it wrong. Cannot let imperfection be.',
    the_shift: 'Tolerance. The capacity to notice difference without requiring conformity. Others are allowed their own way. The critical eye softens into a discerning one — which is much more useful and far less exhausting.',
    in_love: 'Beech in love is the partner whose corrections of the other have eroded the relationship without either fully noticing. The work is to find one habit of theirs that irritates you — and consciously stop correcting it for a month. Notice what happens.',
    in_work: 'Beech in work is the colleague whose feedback is consistently sharp, often correct, but received as attack. The remedy supports the move from "you should" to "here is what I noticed" — same accuracy, much less violence.',
    the_practice: 'For one week, when you notice yourself silently judging someone, ask: "What might be true for them that I do not see?" The reframe is not denial of what is wrong — it is the addition of what might also be present.',
    pair_with_chakra: 'Third eye (Ajna) — the seeing-chakra in its critical-rather-than-discerning mode; Beech is the eye that has lost its softness.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_crystal_sign: 'Virgo',
    pair_with_crystal_slug: 'virgo',
    key_questions: [
      'Whose habit or way of being am I currently most irritated by — and what does my irritation reveal about my own rigid rules?',
      'When I have been on the receiving end of someone\'s intolerance, how did it land — and am I willing to do that landing in someone else?',
      'What would change in my relationships if my noticing of difference were curious rather than judging?'
    ]
  },
  {
    slug: 'rock-water',
    text: 'Rock Water',
    latin: 'Aqua petra',
    group: 'overcare',
    position: 38,
    one_liner: 'For rigid self-discipline — the soul that demands perfection of itself. Bach\'s remedy for the self that has become its own dictator.',
    meaning: 'Rock Water is the only Bach remedy made from water itself, drawn from a healing spring. It is the remedy for the rigid disciplinarian — but turned inward. The Rock Water person demands perfection of themselves: strict diet, strict practice, strict moral code. They do not impose it on others (that would be Vine or Vervain) — they impose it on themselves. Bach saw the Rock Water state as a sincere spiritual desire turned into self-tyranny. The remedy preserves discipline while restoring kindness toward the disciplined.',
    the_state: 'Rigid self-discipline. Strict rules for self. Denies self pleasure as if pleasure were sin. Sets impossible standards. Cannot relax. Spiritual perfectionism. The hardest taskmaster the self has is the self.',
    the_shift: 'Discipline that includes kindness. The capacity to keep the practice without the cruelty. Pleasure becomes allowed. Rest becomes practice. The relationship with self softens — and, paradoxically, the discipline often becomes more sustainable.',
    in_love: 'Rock Water in love is the partner whose rigorous self-standards make the other feel constantly inadequate by proximity. The work is to let yourself be imperfect in front of the partner — and to discover that the love survives.',
    in_work: 'Rock Water in work is the operator who cannot enjoy any milestone because the next standard is already raised. The remedy supports the move to actually celebrate, actually rest, actually be in the win — before the next ascent.',
    the_practice: 'This week, deliberately break one of your own rules. Eat the food you have forbidden. Skip the practice that has become compulsive. Sleep in. Notice what happens — the world does not end, and the discipline, returned to voluntarily, becomes more honest.',
    pair_with_chakra: 'Crown (Sahasrara) — the chakra of spiritual aspiration; Rock Water is the crown gripped so tight it has lost touch with grace.',
    pair_with_chakra_slug: 'crown',
    pair_with_crystal_sign: 'Capricorn',
    pair_with_crystal_slug: 'capricorn',
    key_questions: [
      'What rule am I keeping that has begun to harm more than help — and what would breaking it once teach me?',
      'When I have softened a discipline before, did it actually collapse, or did it deepen into something more sustainable?',
      'Whose taskmaster did I inherit — and is the master I am being to myself actually mine, or somebody else\'s?'
    ]
  },
]
BACH_REMEDIES.push(...BACH_GROUP_7)

const BACH_BY_SLUG: Record<string, BachRemedy> = Object.fromEntries(BACH_REMEDIES.map((r) => [r.slug, r]))

export const BACH_SLUGS = BACH_REMEDIES.map((r) => r.slug)

export function isBachSlug(s: string): boolean {
  return s in BACH_BY_SLUG
}

const BACH_GROUP_LABEL: Record<BachRemedy['group'], string> = {
  fear: 'Fear · the 5 fear-remedies',
  uncertainty: 'Uncertainty · the 6 doubt-remedies',
  present: 'Insufficient interest in the present · the 7 drift-remedies',
  loneliness: 'Loneliness · the 3 isolation-remedies',
  oversensitivity: 'Over-sensitivity to influences · the 4 wall-remedies',
  despair: 'Despondency or despair · the 8 dark-night remedies',
  overcare: 'Over-care for welfare of others · the 5 grip-remedies',
}

const BACH_GROUP_SHORT: Record<BachRemedy['group'], string> = {
  fear: 'Fear',
  uncertainty: 'Uncertainty',
  present: 'Not present',
  loneliness: 'Loneliness',
  oversensitivity: 'Over-sensitive',
  despair: 'Despair',
  overcare: 'Over-care',
}

const BACH_GROUP_ACCENT: Record<BachRemedy['group'], { c1: string; c2: string; glyph: string }> = {
  fear:            { c1: '#d8746a', c2: '#8a2a28', glyph: '🔥' },
  uncertainty:     { c1: '#c08550', c2: '#704020', glyph: '🌗' },
  present:         { c1: '#8aa878', c2: '#3a5a38' , glyph: '🌿' },
  loneliness:      { c1: '#6a5aa0', c2: '#2e2566', glyph: '🌙' },
  oversensitivity: { c1: '#d09898', c2: '#8a4848', glyph: '🌸' },
  despair:         { c1: '#5a6878', c2: '#1a2838', glyph: '🌑' },
  overcare:        { c1: '#d6a445', c2: '#8a5a18', glyph: '☀️' },
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function bachRemedyPageHTML(slug: string): string {
  const r = BACH_BY_SLUG[slug]
  if (!r) return ''
  const accent = BACH_GROUP_ACCENT[r.group]
  const groupLabel = BACH_GROUP_LABEL[r.group]
  const readingHref = `/gab44/reading?ref=bach-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.latin)}) — Bach Flower Remedy · ${r.position}/38 · gab44 ✨`
  const description = `What ${r.text} actually treats in Dr. Edward Bach's system (1936). The state, the shift, in love, in work, the practice, the chakra + crystal pair. Hand-written, source-text-honest, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Bach Flower Remedies', item: `${SITE_URL}/gab44/bach-flowers` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/bach-flowers/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — Bach Flower Remedy ${r.position}/38`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/bach-flowers/${slug}`,
        about: `${r.text} Bach flower remedy, ${r.latin}, emotional healing`
      }
    ]
  })

  // Other remedies in same group
  const groupPeers = BACH_REMEDIES.filter((q) => q.group === r.group && q.slug !== slug).map((q) => {
    return `<a class="ph-mini" href="/gab44/bach-flowers/${q.slug}" style="--c1:${accent.c1};--c2:${accent.c2}"><span class="sym">${accent.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/bach-flowers/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/bach-flowers/${slug}" />
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
  .hero .latin { font-size: 18px; opacity: 0.85; margin: 0 0 12px; font-style: italic }
  .hero .grouplbl { font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
  section { padding: 22px 0; border-bottom: 1px solid var(--line) }
  section:last-of-type { border-bottom: none }
  section h2 { font-size: 22px; margin: 0 0 10px; color: var(--c2); letter-spacing: -0.01em }
  section p { margin: 0 0 8px; color: var(--fg) }
  .pair-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 10px; margin-top: 8px }
  .pair-grid a {
    display: block; padding: 10px 12px; border: 1px solid var(--line);
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
  .group-peers { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
  .ph-mini {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 14px; border-radius: 999px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none; font-size: 14px;
  }
  .ph-mini .sym { font-size: 16px }
  footer { padding: 24px 0; color: var(--fg-muted); font-size: 13px; text-align: center }
  footer a { color: var(--fg-dim) }
</style>
</head>
<body>
<main>
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/bach-flowers">bach flowers</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="latin">${escapeHtml(r.latin)}</p>
    <p class="grouplbl">${escapeHtml(groupLabel)} · ${r.position} of 38</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <section><h2>What ${escapeHtml(r.text)} actually treats</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>The state it meets</h2><p>${escapeHtml(r.the_state)}</p></section>
  <section><h2>The shift it brings</h2><p>${escapeHtml(r.the_shift)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>A 5-minute practice</h2><p>${escapeHtml(r.the_practice)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="/gab44/chakras/${r.pair_with_chakra_slug}"><span class="lbl">Chakra</span>${escapeHtml(r.pair_with_chakra)}</a>
      <a href="/gab44/${r.pair_with_crystal_slug}/crystals"><span class="lbl">Crystals (by sign)</span>${escapeHtml(r.pair_with_crystal_sign)} crystals — stones that resonate with this remedy</a>
      <a href="/healing"><span class="lbl">Healing audio</span>Guided meditations · 5 free tracks</a>
      <a href="/gab44/bach-flowers"><span class="lbl">All 38 remedies</span>The full Bach map · 7 emotional groups</a>
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
    <h3>Want a $9 reading that names the Bach state currently running you?</h3>
    <p>Your chart + the Bach pattern most active in this chapter — read together, by hand, named directly.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <h3 style="margin:24px 0 6px;font-size:15px;color:var(--fg-dim)">Other remedies in this group</h3>
  <div class="group-peers">${groupPeers}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · Dr. Edward Bach's 38 flower remedies (1936) · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function bachFlowersIndexHTML(): string {
  // Group cards by Bach's 7 emotional groups
  const groups: BachRemedy['group'][] = ['fear', 'uncertainty', 'present', 'loneliness', 'oversensitivity', 'despair', 'overcare']

  const groupBlocks = groups.map((g) => {
    const acc = BACH_GROUP_ACCENT[g]
    const remediesInGroup = BACH_REMEDIES.filter((r) => r.group === g)
    const cards = remediesInGroup.map((r) => `<a class="card" href="/gab44/bach-flowers/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${r.position} / 38</div>
      <h3>${escapeHtml(r.text)} <span class="lat">${escapeHtml(r.latin)}</span></h3>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`).join('\n      ')

    return `<section class="group-block">
      <h2 class="group-h">${escapeHtml(BACH_GROUP_LABEL[g])}</h2>
      <div class="grid">${cards}</div>
    </section>`
  }).join('\n    ')

  const title = "The 38 Bach Flower Remedies — Dr. Edward Bach's 1936 System · gab44 ✨"
  const description = "Hand-written guides to all 38 Bach flower remedies, organized by Bach's own 7 emotional groups: fear, uncertainty, insufficient interest in the present, loneliness, over-sensitivity, despair, over-care for others. Source-text-honest, warm, with chakra + crystal pairings."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/bach-flowers" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 1040px; margin: 0 auto; padding: 32px 22px 80px }
  nav.crumbs { font-size: 13px; color: var(--fg-muted); margin-bottom: 12px }
  nav.crumbs a { color: var(--fg-dim); text-decoration: none; border-bottom: 1px dotted var(--line-strong) }
  h1 { font-size: 36px; margin: 8px 0 6px; letter-spacing: -0.02em }
  h1 .accent { color: var(--accent) }
  .sub { color: var(--fg-dim); margin: 0 0 22px; font-size: 16px }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 20px; margin-bottom: 28px;
  }
  .intro h3 { margin: 0 0 8px; font-size: 16px; color: var(--accent-2) }
  .intro p { margin: 0 0 8px; font-size: 14px; color: var(--fg-dim) }
  .group-block { margin-bottom: 32px }
  .group-h { font-size: 18px; color: var(--accent-2); margin: 0 0 12px; letter-spacing: -0.01em; border-bottom: 1px solid var(--line); padding-bottom: 6px }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px }
  .card {
    --c1:#888; --c2:#444; position: relative;
    display: block; padding: 20px 18px; border-radius: 14px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none;
    box-shadow: 0 6px 18px rgba(0,0,0,0.07);
    transition: transform 0.15s ease;
  }
  .card:hover { transform: translateY(-2px) }
  .card .glyph { font-size: 32px; line-height: 1 }
  .card .pos { position: absolute; top: 12px; right: 14px; font-size: 11px; letter-spacing: 0.12em; opacity: 0.75 }
  .card h3 { margin: 10px 0 4px; font-size: 20px }
  .card h3 .lat { font-size: 13px; opacity: 0.78; margin-left: 6px; font-style: italic }
  .card .lead { font-size: 13px; opacity: 0.92; margin: 6px 0 0; font-style: italic }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ bach flowers</nav>
  <h1>The 38 <span class="accent">Bach Flower Remedies</span></h1>
  <p class="sub">Dr. Edward Bach's 1936 system. Each remedy addresses ONE specific emotional or mental state — named with surgical precision in <em>The Twelve Healers and Other Remedies</em>. Organized below by Bach's own 7 emotional groups.</p>

  <div class="intro">
    <h3>How to use this map</h3>
    <p><strong>Find the state.</strong> Bach named one remedy per emotional state. Read your current state in the descriptions below; the remedy will usually feel obvious when you reach it.</p>
    <p><strong>Seven emotional groups.</strong> Bach grouped the 38 by the underlying soul-quality each addresses: fear (5), uncertainty (6), insufficient interest in the present (7), loneliness (3), over-sensitivity (4), despondency or despair (8), over-care for others (5).</p>
    <p><strong>Five-minute practices.</strong> Each page carries one practice you can do without any essence — Bach\'s remedies work alongside conscious work, not as substitutes for it. Each is paired with the chakra and crystal-set that resonate most directly.</p>
  </div>

  ${groupBlocks}

  <div class="reading-strip">
    <h2>Want a $9 reading that names the Bach pattern most active in your chapter?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">Your chart + the Bach state currently running you — read together, by hand. <a href="/gab44/reading?ref=bach-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 38 Bach flower remedies, 1936 · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}
