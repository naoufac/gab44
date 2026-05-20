// Numerology Personal Year SEO funnel — /gab44/personal-year (index) +
// /gab44/personal-year/{1..9} (9 per-year pages).
//
// Targets calendar-cyclic high-intent searches: "personal year 1 meaning",
// "personal year 7 numerology", "what is my personal year 2026",
// "personal year calculator", "9 year cycle numerology". Distinct from
// /gab44/numerology (which is the life-path = identity number, your soul's
// arc); personal year is the energy of THIS calendar year for you
// specifically — the 9-year cycle that everyone is in regardless of life
// path. Calendar-cyclic means SEO traffic spikes every Jan-Feb when people
// search "what is my personal year". Evergreen because the cycle repeats
// every 9 years.
//
// Each year guide is ~700 words across 9 sections (meaning + theme,
// what this year is FOR, the gift, the shadow, in love, in work, money,
// what to release, what to invite, daily practice, pair-with chakra/sound/
// crystal, 3 key questions). Year-tinted gradient: 1=fire-orange (new
// beginning), 5=amber (movement), 9=violet (release/completion); other
// years interpolate.
//
// Routes register cleanly at /gab44/personal-year and /gab44/personal-year/:n
// (no greedy-match conflict — fresh namespace; numeric :n).

import { SITE_URL } from '@/lib/identity'

export interface PersonalYearProfile {
  num: number                    // 1..9
  display: string                // e.g. "Personal Year 1"
  theme: string                  // short tagline
  emoji: string
  one_liner: string
  meaning: string                // ~150-200w
  what_its_for: string           // ~120w — what THIS year is built for
  the_gift: string
  the_shadow: string
  in_love: string
  in_work: string
  money: string
  what_to_release: string
  what_to_invite: string
  daily_practice: string         // ~100w concrete practice
  pair_with_chakra_slug: string
  pair_with_sound_slug: string
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const PERSONAL_YEARS: PersonalYearProfile[] = [
  {
    num: 1,
    display: 'Personal Year 1',
    theme: 'beginning · planting · the new chapter',
    emoji: '🌱',
    one_liner: 'The first year of a fresh 9-year cycle. Plant the seed of who you are becoming. Everything begun this year shapes the next nine.',
    meaning: 'Personal Year 1 is the opening chapter of a fresh 9-year cycle. The previous year (a Personal Year 9) was the ending — the clearing-away, the closing of doors, the saying of goodbyes. This year is the *beginning*. The slate is blank in a way it has not been blank since you were last in a Year 1, and what you plant now will shape the next nine years more than any other single decision in the cycle. It is a year for boldness, for first steps, for the project you have been postponing, for the move, the launch, the leap. The energy of the year favors initiative — the universe will conspire with you to begin things, and the same universe will work against you if you spend the year hesitating. Year 1 is also a year of *self-definition*: who you decide you are now, the version of you that gets reinforced over the next nine years. Choose carefully. The seeds you plant in the first quarter of this year are the harvest of years 5, 6, and 7.',
    what_its_for: 'Personal Year 1 is built for *starting*. New jobs, new businesses, new relationships, new homes, new disciplines, new identities. It is the year to bet on yourself, even when the conditions are not perfect — because the conditions will never be more favorable than they are when the cycle is opening. Use it to clarify *who you are becoming*, then take the first concrete action toward that future. The year does not reward planning without action; it does not reward action without intention. It rewards the rare combination of both — clarity plus courage, sustained for twelve months.',
    the_gift: 'The gift of Year 1 is the rare alignment between the universe\'s timing and your own — the energy is on your side in a way it has not been for nine years. Bold moves land softer this year than they will in any other year of the cycle. Use the gift.',
    the_shadow: 'The shadow of Year 1 is the wasted opening — the year spent in hesitation, in indecision, in waiting for "the right time" which is in fact this very year you are wasting. Or recklessness — leaping without intention, planting seeds you will regret tending for the next nine years.',
    in_love: 'In love, Year 1 favors new beginnings — meeting someone new, redefining an existing relationship, or making a bold relational decision (move in together, propose, end a long stagnation). The year does not favor staying in limbo. Define what the relationship is becoming.',
    in_work: 'In work, Year 1 is the year to launch — the business, the role pivot, the side project that becomes the main project. It rewards visibility and self-promotion in a way no other year does. Put your name on it. Apply for the role. Pitch the idea.',
    money: 'Money in Year 1 is invested, not consolidated. This is a year for spending on the new beginning — the equipment, the course, the move — even if the books look tight. Year 1 money compounds over the cycle if planted well.',
    what_to_release: 'Release the version of yourself who was completing things last year. Release identities that no longer fit. Release relationships, commitments, and obligations that belong to the *previous* cycle and have no place in the new one.',
    what_to_invite: 'Invite boldness. Invite the new chapter. Invite the version of yourself you have been waiting to become. Invite the people who match the next nine years, not the last nine.',
    daily_practice: 'Each morning, write one sentence: "Today I am beginning ___." Make it small enough to actually do today, large enough to point at the bigger build. Each evening, write what you actually began. The practice trains the muscle that this year is asking you to build — initiative tied to action.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian (initiative) or red jasper (grounded courage)',
    key_questions: [
      'If everything I begin this year shapes the next nine, what is the one thing I want to begin first?',
      'Who am I becoming — and what would I do this week if I trusted that becoming?',
      'What from last year am I still carrying that does not belong in this new chapter?'
    ]
  },
  {
    num: 2,
    display: 'Personal Year 2',
    theme: 'partnership · patience · the slow tending',
    emoji: '🤝',
    one_liner: 'The patient year. Seeds planted in Year 1 are not yet visible above ground — your work is to tend, to partner, to wait without losing faith.',
    meaning: 'Personal Year 2 is the *patient year* of the cycle. The seeds you planted in Year 1 are below ground — invisible, but very much alive. Your work this year is not to plant more (the energy has shifted) but to *tend*. Water what you started. Show up daily. Trust that the soil is doing its work even when nothing visible is yet rising. Year 2 is also the year of *partnership* — the relationships that came into your life last year (or that you redefined) are now being asked to deepen. The collaborations, the friendships, the romantic partnership all carry more weight this year than they did last year. The energy favors cooperation over competition, listening over speaking, the long conversation over the quick decision. It is a softer year, often quieter, sometimes mistaken for stagnation by people who do not understand that stillness is the seed\'s favorite condition.',
    what_its_for: 'Personal Year 2 is built for *deepening* what you began. The relationship started in Year 1 is asked to mature. The business launched in Year 1 is asked to find its first real partnerships. The discipline started in Year 1 is asked to become routine. This is also the year for *receiving* — gifts, support, collaboration, mentorship — and for letting yourself be helped rather than insisting on doing everything alone. Year 2 is famously hard for people who confuse activity with progress; this is the year to learn that some seasons are slow and that the slow seasons are doing the most important invisible work.',
    the_gift: 'The gift of Year 2 is the rare permission to slow down. The universe is not asking for big moves — it is asking for tending. People who use Year 2 well end Year 3 with deep, durable foundations under everything they began.',
    the_shadow: 'The shadow of Year 2 is impatience — abandoning the seed because nothing visible is happening, ripping up what was planted, or making big new moves that contradict the previous year\'s commitments. The other shadow is over-dependence: confusing partnership with losing yourself.',
    in_love: 'In love, Year 2 deepens. New relationships from Year 1 mature. Existing relationships are asked to become more conscious — more communication, more vulnerability, more shared dream-building. The single Year 2 person finds love through patient connection, not lightning-bolt encounter.',
    in_work: 'In work, Year 2 is for collaboration, partnerships, alliances, and the slow build. This is the year to bring people into the project you started last year — co-founders, mentors, advisors, key hires. Avoid solo heroics. The year rewards we, not me.',
    money: 'Money in Year 2 is patient. Invested money compounds; impulsive money disappears. Long-term contracts, partnership equity, and steady income channels matter more than quick wins.',
    what_to_release: 'Release the urgency to "make the year happen" with force. Release the perfectionist refusal to let others help. Release the comparisons to people whose cycles are at a different point.',
    what_to_invite: 'Invite partnership. Invite collaboration. Invite the patience the seed requires. Invite the long horizon.',
    daily_practice: 'Each evening, name one person you let help you today, and one person you helped. If you cannot name either, the next day make it a deliberate practice. Year 2 is repaired through small daily acts of mutuality — the muscle the year is teaching.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Moonstone (patient receiving) or rose quartz (open-hearted partnership)',
    key_questions: [
      'What seed from last year am I about to abandon because it has not yet broken the surface?',
      'Whose support have I been refusing because I would rather do it alone?',
      'What relationship in my life is being asked to deepen — and what would deepening it actually require?'
    ]
  },
  {
    num: 3,
    display: 'Personal Year 3',
    theme: 'expression · creativity · the year you light up',
    emoji: '🎨',
    one_liner: 'The expressive year. Creativity surges; visibility increases; joy is the strategy. The seeds planted in Year 1 push above the soil — finally visible.',
    meaning: 'Personal Year 3 is the *expressive year* of the cycle — the year creativity surges, social life expands, visibility increases, and joy becomes a legitimate strategic choice rather than a guilty distraction. The seeds you planted in Year 1 and tended in Year 2 finally push above the soil. They are visible now, even if still small. This is the year to *show* what you have been building. Publish. Perform. Speak. Post. Network. Year 3 favors expression in every form — writing, art, music, public speaking, social media, performance. It is also a famously social year: invitations multiply, new friends arrive, the calendar fills. The year wants you out of the cave and into the room. The shadow Year 3 is scattered — joy without follow-through, parties without project, talent diluted across ten side-quests. The well-used Year 3 channels the surge into one or two big creative expressions that mark the cycle.',
    what_its_for: 'Personal Year 3 is built for *visibility*. The work you have been doing in private becomes the work others see. The art gets shown. The book gets published. The brand gets launched. The relationship goes Instagram-official. This is also the year to invest in your *voice* — public speaking practice, writing practice, creative skill-building. The year rewards expression and punishes hiding. It is also a wonderful year for travel, social gatherings, and the kind of experiences that become stories you will tell for the rest of the cycle.',
    the_gift: 'The gift of Year 3 is the natural lift in energy, charisma, and creative flow. People who lean into the year report unusual ease in attracting attention, opportunities, and collaborations. Use the lift.',
    the_shadow: 'The shadow of Year 3 is dispersion — too many social invitations, too many half-started projects, too much partying, not enough finishing. Or imposter syndrome that keeps you in the cave when the cycle is asking you out.',
    in_love: 'In love, Year 3 is flirtatious, expressive, and sometimes magnetic — singles meet many people; partnerships are asked to add play, romance, fun. The shadow: confusing attention with intimacy.',
    in_work: 'In work, Year 3 favors creative work, marketing, public-facing roles, launches, collaborations. Take the speaking engagement. Make the video. Pitch the new client. Lean into being seen.',
    money: 'Money in Year 3 is creative — expansive when the creative work is shipped, leaky when energy is dispersed. Track expenses; the social year is also an expensive year if you are not watching.',
    what_to_release: 'Release the hiding. Release the perfectionism that keeps work in drafts. Release the comparison that says someone else is more "qualified" to be visible than you.',
    what_to_invite: 'Invite expression in any form. Invite the audience. Invite the collaboration. Invite the joy of being witnessed.',
    daily_practice: 'Publish or share something every day for a week — even tiny. A sentence, a photo, a voice note, a sketch. The Year 3 muscle is the muscle of *putting it out there before it is ready*.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine (joyful expression) or aquamarine (clear voice)',
    key_questions: [
      'What creative work has been waiting in private for a year — and could ship this month?',
      'Where am I dispersing energy across ten projects when one would actually catch?',
      'What would I do this year if I trusted that being seen was the strategy, not the risk?'
    ]
  },
  {
    num: 4,
    display: 'Personal Year 4',
    theme: 'foundation · structure · the year of the build',
    emoji: '🏗️',
    one_liner: 'The build year. Discipline, structure, foundation. Less spark, more compound interest. What you build this year holds for decades.',
    meaning: 'Personal Year 4 is the *foundation year* — the year discipline, structure, and the long build matter more than inspiration, novelty, or lift. The party is over (Year 3 was the party). The work begins. Year 4 is the year you build the systems that will carry the next 5+ years: the morning routine, the weekly review, the contract, the LLC, the savings account, the investment plan, the marriage, the lease. The energy is grounded, sometimes heavy, often slower than you would like — but the foundations laid this year are uncommonly durable. Year 4 also tends to bring practical tests: an unexpected expense, a health issue, a logistical complication, a deadline that exposes whether your systems can hold weight. These are not punishments; they are the universe checking whether the foundation is solid before the cycle leans on it in Years 5-7.',
    what_its_for: 'Personal Year 4 is built for *structure*. Build the routines. Build the spreadsheets. Build the contracts. Build the team. Build the financial scaffolding. Build the body (this is a wonderful year for committing to long-term physical practice — strength training, yoga, daily walking). Build the relationships that hold weight. Avoid: launching brand-new ventures (the energy is wrong), big expensive impulse purchases, abandoning structures you spent the previous years building. The year rewards discipline and punishes shortcuts.',
    the_gift: 'The gift of Year 4 is the unusual durability of what you build. Habits formed this year stick. Systems built this year scale. Foundations laid this year hold for the rest of the cycle and often the rest of your life.',
    the_shadow: 'The shadow of Year 4 is rigidity — confusing structure with control, building so many systems that nothing moves. Or burnout — overworking the discipline muscle until rest becomes impossible. The cure is rhythm: hard work + real rest, not hard work alone.',
    in_love: 'In love, Year 4 deepens commitment — moving in, getting engaged, getting married, buying a home together. Existing relationships are asked to build shared infrastructure: shared finances, shared calendar, shared long-term plan. New relationships started this year tend to be unusually grounded.',
    in_work: 'In work, Year 4 is the year of operational excellence. Build the systems. Hire the operations person. Document the processes. Sign the long-term contracts. Avoid pivots; commit to the lane and run.',
    money: 'Money in Year 4 is *built*, not chased. This is the year for budgeting, retirement planning, debt repayment, contract negotiation, building a cash reserve. Long-horizon investments outperform short-term plays.',
    what_to_release: 'Release the romantic notion that progress always feels exciting. Release the comparison to people whose Year 3 is ongoing. Release the urge to skip the boring work that is in fact the year\'s sacred task.',
    what_to_invite: 'Invite the discipline. Invite the structure. Invite the long-term commitment. Invite the systems that will carry you when the next inspirational surge arrives in Year 5.',
    daily_practice: 'Pick one keystone habit and do it every single day for the entire year — without exception. Walking 30 minutes, meditating 10, writing 200 words, lifting 3x/week. Year 4 is repaired through one chosen, sustained, honored daily practice that compounds into a foundation you will use for decades.',
    pair_with_chakra_slug: 'root',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Hematite (grounded discipline) or smoky quartz (steadfast endurance)',
    key_questions: [
      'What system or structure, if I built it well this year, would carry me for the next decade?',
      'Where am I confusing busyness with foundation?',
      'What is the one keystone daily habit I am willing to commit to without exception until next December?'
    ]
  },
  {
    num: 5,
    display: 'Personal Year 5',
    theme: 'change · movement · the year of the unexpected turn',
    emoji: '🌪️',
    one_liner: 'The change year. Travel, pivot, surprise opportunity, sudden freedom. What was rigid in Year 4 becomes fluid; what was patient becomes urgent.',
    meaning: 'Personal Year 5 is the *movement year* of the cycle. After the discipline of Year 4, the universe opens the windows. Travel calls. Opportunities arrive that you did not seek. The pivot you have been considering becomes a pivot you make. Old structures loosen, sometimes abruptly. New people enter. The familiar feels suddenly insufficient. Year 5 is the year of *the unexpected turn* — the move to a new city, the surprise job offer, the ended relationship, the started business, the wild trip, the chance encounter that changes everything. The energy favors flexibility, adventure, saying yes, walking through doors that open. It does not favor clinging to what is no longer alive. Year 5 is also famously a year of *adventures of the body* — travel, sex, performance, athletic challenges, sensory experience. The midpoint of the 9-year cycle, it is the year you most often look back on as a turning point.',
    what_its_for: 'Personal Year 5 is built for *change*. Take the trip. Accept the offer. End the relationship that has been ending. Start the relationship that has been waiting. Make the move. Pivot the business. Try the new lane. The year rewards courage and punishes clinging. It is also built for *embodiment* — coming back into your body after a structured Year 4: physical adventure, dance, travel, sensual experience, movement practices.',
    the_gift: 'The gift of Year 5 is sudden expansion — opportunities arrive at a rate they will not arrive again until Year 5 of the next cycle. The doors open. Walk through.',
    the_shadow: 'The shadow of Year 5 is restlessness with no direction — chasing change for change\'s sake, abandoning what is working because the year is "supposed to be different," or making big moves from impulse rather than discernment. The cure is ground: even a year of change needs an anchor.',
    in_love: 'In love, Year 5 is volatile in the best and hardest senses. Relationships that should end, do end. Relationships that should change, change. New connections arrive fast. The single Year 5 person often meets someone formative; the partnered Year 5 often faces a "renegotiate or release" inflection.',
    in_work: 'In work, Year 5 is the year for the pivot, the move, the major change. New role, new city, new business, new specialty. The year rewards risk-taking and visibility. Take the meeting. Apply for the job in another country. Say yes to the speaking gig that scares you.',
    money: 'Money in Year 5 is variable — high when you accept the new opportunity, low when you cling to the comfortable but plateaued old one. Track carefully; the freedom-energy of the year can also be the spending-energy of the year.',
    what_to_release: 'Release what is no longer alive. Release the comfort of the predictable. Release the version of you who was happy with Year 4\'s structure but is now being called out of it.',
    what_to_invite: 'Invite the change. Invite the opportunity that does not yet have a precedent in your life. Invite the trip. Invite the new lane. Invite the version of yourself who walks through doors instead of waiting for permission.',
    daily_practice: 'Once a week, do one thing that scares you a little — say yes to a new invitation, take a different route home, talk to a stranger, try a new physical practice, send the bold email. Year 5 is repaired through accumulated small bravery — the muscle the year is teaching.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Carnelian (movement) or aquamarine (fluidity through change)',
    key_questions: [
      'What door has opened that I have been pretending not to see?',
      'What am I clinging to because it is comfortable, even though I know it is no longer alive?',
      'If I trusted that this year is built for change, what is the one big move I would make this quarter?'
    ]
  },
  {
    num: 6,
    display: 'Personal Year 6',
    theme: 'home · responsibility · love · the year of the deeper care',
    emoji: '🏡',
    one_liner: 'The home year. Family, marriage, children, the household, deep responsibility, the sacred ordinary. Love and obligation in equal measure.',
    meaning: 'Personal Year 6 is the *home year* of the cycle — the year family, marriage, children, household, and deep relational responsibility move to the foreground. After the wild change of Year 5, Year 6 is asking you to *settle into what now matters*. The relationships that survived Year 5 deepen. The home you live in is asked to become more truly home. The family commitments are asked to be honored more fully. New babies often arrive in Year 6 (literal, or symbolic — the new business is your baby, the new project is your baby). The energy is nurturing, sometimes heavy with responsibility, often beautiful in the way ordinary domestic love is beautiful. It is the year of *the sacred ordinary* — the meals cooked, the bedtimes honored, the partner tended, the parent visited, the friend called. Year 6 also brings inflection points in major relationships: the marriage proposal, the cohabitation decision, the engagement, the conscious commitment to building a life *with*.',
    what_its_for: 'Personal Year 6 is built for *love and responsibility* — and the recognition that they are the same thing seen from two angles. Tend the partner. Tend the children. Tend the parents. Tend the home. Tend the closest friendships. Build the wedding. Buy the house. Have the child. The year is also the year for *healing wounds in the family of origin* — old wounds with parents, siblings, exes — and for receiving the medicine of choosing to love better than you were loved. Avoid: throwing the year away on work projects at the expense of relational tending; the cycle will exact a tax for that next year.',
    the_gift: 'The gift of Year 6 is the deep settling-in. The relationships that matter become more clearly the relationships that matter. Home becomes more home. The ordinary becomes sacred when you stop performing for an audience and start tending what is yours.',
    the_shadow: 'The shadow of Year 6 is over-responsibility — taking on everyone else\'s load, becoming the family caretaker no one chose you to be, sacrificing your needs to perform virtue. Or controlling perfectionism: the home that has to be perfect, the partner who has to be improved, the children who have to be optimized. The cure is *love that honors limits* — yours, theirs.',
    in_love: 'In love, Year 6 deepens commitment to its core form. Marriage proposals, weddings, moving in, deep relationship inflection points. Existing relationships are asked to take their next adult step. New relationships started this year tend toward serious quickly.',
    in_work: 'In work, Year 6 favors service — work that nurtures others (teaching, healing, advising, parenting, hospitality, design that improves daily life). Pure ambition in Year 6 often runs into family-vs-work conflicts; the year wants integration.',
    money: 'Money in Year 6 is for the household — house, family, education, healthcare, the long-term security of the people you love. Savings deepen; investments anchor in long-term family stability rather than speculation.',
    what_to_release: 'Release perfectionism in domestic life. Release the resentment of unequal labor (have the conversation instead). Release control — you cannot optimize a family.',
    what_to_invite: 'Invite the depth of home. Invite the marriage. Invite the conversation with the parent you have been avoiding. Invite the slowness of cooking with the people you love.',
    daily_practice: 'Every day, do one small act of love for someone in your inner circle that takes less than 10 minutes — a text, a meal, a question asked about their day, a moment of full attention. Year 6 is repaired through accumulated small daily acts of present love.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (open-hearted love) or green aventurine (compassionate growth)',
    key_questions: [
      'Whose love and care have I been postponing for "when work calms down" — and is the postponement honest?',
      'What relationship in my life is asking for its next adult step — and what is keeping me from taking it?',
      'Where am I confusing being responsible with being responsible *for everyone\'s feelings*?'
    ]
  },
  {
    num: 7,
    display: 'Personal Year 7',
    theme: 'introspection · study · the inner year',
    emoji: '🧘',
    one_liner: 'The inner year. Study, retreat, spiritual deepening, the long quiet. Less doing, more listening. The year you become someone you have never been.',
    meaning: 'Personal Year 7 is the *inner year* of the cycle — the year the universe pulls you inward, asks you to slow down, to study, to retreat, to listen, to deepen. After the relational saturation of Year 6, Year 7 is solitude\'s turn. Not lonely — solitary. The energy resists external noise. Crowded social calendars feel exhausting; deep books feel essential. Spiritual practice intensifies. New skills are learned. Old questions are sat with. The year often coincides with: solo travel, sabbaticals, returning to school, taking up meditation, finishing the long project, writing the book, going to therapy, beginning a new spiritual lineage. Year 7 is also famously a year when "nothing is happening" externally while *everything* is happening internally — a year of seeded transformation that becomes visible only in Years 8 and 9. People who fight the year (filling it with forced activity) often crash by autumn. People who lean into the inwardness end the year as someone they have never been.',
    what_its_for: 'Personal Year 7 is built for *depth*. Study deeply (a subject, a craft, a tradition). Sit with the questions you have been avoiding. Take the meditation course. Begin therapy. Travel solo. Read the entire body of work of one author. Apprentice yourself to a teacher or a tradition. Take the sabbatical. Slow the calendar. The year is also for *spiritual deepening* — a real practice begun this year tends to last for the rest of life. Avoid: mistaking the inwardness for depression and trying to medicate it with activity. Let the year be quiet.',
    the_gift: 'The gift of Year 7 is the rare permission to step out of the world\'s noise and meet yourself. The transformation begun in Year 7 is invisible at first and life-changing at last.',
    the_shadow: 'The shadow of Year 7 is forced extroversion — fighting the year\'s pull toward inwardness with forced socializing, party-energy, or overwork; the cycle exacts a heavy tax for this. The other shadow is isolation as escape: confusing solitude (chosen, productive) with hiding (avoidant, draining).',
    in_love: 'In love, Year 7 is quieter. New relationships begun this year are often slower, deeper, more spiritually anchored. Existing relationships are asked to honor the partner\'s inwardness without taking it personally. The single Year 7 person sometimes spends the year unpartnered by choice — and uses the year to clarify what kind of love they actually want for the next cycle.',
    in_work: 'In work, Year 7 favors mastery, study, research, writing, spiritual or therapeutic work, depth of craft. Less visible work, more substantive. The year does not favor launches, big publicity moves, or major networking. It does favor finishing long-form work — books, courses, theses.',
    money: 'Money in Year 7 is often quiet — fewer big swings, steady tending. Investments in education, training, spiritual practice, and craft mastery pay disproportionately over the next two years.',
    what_to_release: 'Release the guilt of slowing down. Release the urge to fill silence with activity. Release the comparison to people whose Year 5 is ongoing and who are visibly "doing more."',
    what_to_invite: 'Invite the silence. Invite the long retreat. Invite the new spiritual practice. Invite the version of yourself that emerges only when no one is watching.',
    daily_practice: 'Spend 30 minutes alone, in silence, daily — no phone, no input, no podcast. Walk, sit, lie down, journal. The Year 7 muscle is the capacity to be with yourself without performance. Build it daily.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Amethyst (spiritual deepening) or lapis lazuli (inner truth)',
    key_questions: [
      'What is my soul asking me to study, sit with, or apprentice myself to this year?',
      'Where am I filling silence with activity because the silence frightens me?',
      'What spiritual or contemplative practice, begun this year, would I be glad to have for the next 30?'
    ]
  },
  {
    num: 8,
    display: 'Personal Year 8',
    theme: 'manifestation · power · harvest · the year you reap',
    emoji: '👑',
    one_liner: 'The harvest year. Money, power, recognition, real-world results. What you built in Years 1-7 finally pays. The year of standing in your authority.',
    meaning: 'Personal Year 8 is the *harvest year* of the cycle — the year money, power, recognition, and tangible results land in your life in a way they have not landed since the previous Year 8. The seeds planted in Year 1, tended through 2 and 4, expressed in 3, expanded in 5, deepened in 6, and clarified in 7 — finally yield. This is the year of *manifestation made material*: promotions, business growth, public recognition, real money, real influence. It is also famously the *power year* — the year you are asked to step into your authority, to lead, to make the bigger ask, to charge the higher rate, to claim the title. The energy favors decisive action, financial discipline, executive thinking, and ambition unapologetically named. People who use Year 8 well end the year wealthier, more visible, and more in command of their domain than they have ever been. People who flinch from it leave money, opportunity, and authority on the table — and wait nine years for the next chance.',
    what_its_for: 'Personal Year 8 is built for *executive action and material harvest*. Negotiate the raise. Charge the higher rate. Sign the bigger contract. Step into the leadership role. Claim the authority. Build the wealth. Make the strategic investment. Hire the team. Launch the bigger product. The year also rewards *financial mastery*: building real wealth, investing wisely, paying off debt, structuring assets for the long term. Avoid: smallness, false humility, deferring leadership to others, accepting the previous rate, leaving money on the table out of guilt.',
    the_gift: 'The gift of Year 8 is the rare alignment between effort and reward. The work compounds. The market notices. Money flows. Use the gift instead of explaining why you do not deserve it.',
    the_shadow: 'The shadow of Year 8 is misuse of power — ambition unmoored from ethics, money-grabbing without service, leadership without humility. Or its opposite: refusing the harvest, staying small to be liked, undercharging, deferring to less qualified leaders out of fear.',
    in_love: 'In love, Year 8 is for *partnership at the level of co-architecture* — building wealth together, building businesses together, building the future together. Power in the relationship is renegotiated; equality is asked to be made real. New relationships started this year tend to involve people of substance and authority.',
    in_work: 'In work, Year 8 is the year you ask for more — and get it. Promotion. Title change. New role. Big contract. Equity. The year favors visibility, executive presence, and decisive leadership. Take the meeting with the bigger client. Fire the underperformer. Hire the senior person. Step up.',
    money: 'Money in Year 8 is the central theme. This is THE year of the cycle for building real wealth — investments, business growth, asset accumulation, debt elimination, strategic financial moves. The decisions made this year shape financial reality for the rest of the cycle.',
    what_to_release: 'Release the smallness. Release the false humility. Release the apologetic pricing. Release the deference to less qualified people. Release the story that wealth is unspiritual.',
    what_to_invite: 'Invite the harvest. Invite the leadership. Invite the wealth. Invite the version of yourself who can hold money and power with integrity.',
    daily_practice: 'Each week, make one ask that is bigger than your current comfort zone — for money, for a meeting, for a role, for a partnership. The Year 8 muscle is the muscle of *asking for what the work is actually worth*. Track the asks. Track the yes-rate. Watch it rise.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Pyrite (manifest abundance) or tiger\'s eye (grounded power)',
    key_questions: [
      'Where am I undercharging — for my work, my time, my expertise — relative to what the market would actually pay?',
      'What leadership role am I being offered (or could ask for) that I have been deferring to others?',
      'If I trusted that this year is built for harvest, what is the one financial or career move I would make this quarter?'
    ]
  },
  {
    num: 9,
    display: 'Personal Year 9',
    theme: 'completion · release · the year of endings and graduation',
    emoji: '🍂',
    one_liner: 'The completion year. Endings, graduation, surrender, gratitude. What no longer fits leaves; what was complete is finished cleanly. Make space for the next cycle.',
    meaning: 'Personal Year 9 is the *completion year* of the cycle — the closing chapter before a new 9-year cycle begins next January. The year is about *release*: relationships that have run their course end, jobs that have completed their teaching are left, possessions that no longer serve are passed on, identities that have matured are graduated from. Year 9 is famously a year of *endings and goodbyes*. Some are chosen (the resignation, the move, the ended relationship); some arrive uninvited (the layoff, the loss, the unexpected turn). All of them are the cycle clearing space for what wants to begin in next year\'s Personal Year 1. The energy favors closure, forgiveness, gratitude, generosity, and the completion of long-running projects. It does NOT favor starting big new things — anything launched this year tends to be either a consolidation of what already exists or a false start that gets re-launched in Year 1. Year 9 is also the year of *spiritual graduation*: the lessons of the entire 9-year cycle are integrated, often with a clarity that surprises you.',
    what_its_for: 'Personal Year 9 is built for *closure and graduation*. Finish the long-running project. Have the closing conversations. Forgive what is finally ready to be forgiven. Pass on what no longer serves. Travel to the places that close chapters. Make peace with people you will not see again. Donate, declutter, release. The year is also for *generosity at scale* — giving back to the lineage that taught you, mentoring others through the cycle you are completing, contributing to causes that match the values you are graduating into. Avoid: starting brand-new ventures (the energy is wrong; wait for next year), forcing closure on things that are not yet ready to end, mistaking grief for failure.',
    the_gift: 'The gift of Year 9 is the rare clarity that comes when nine years of lessons integrate. You see the cycle\'s whole shape from the top of the mountain. The you who walks down is not the you who walked up.',
    the_shadow: 'The shadow of Year 9 is clinging — refusing to let what is ending end, dragging dead relationships and dead jobs and dead identities into the new cycle (where they actively block new growth). The other shadow is performative letting-go — burning bridges that did not need to burn out of dramatic emotion rather than honest discernment.',
    in_love: 'In love, Year 9 is decisive. Relationships that have completed their teaching end (often peacefully). Relationships that have graduated into deeper commitment crystallize. The year favors honest conversations about whether the relationship is the relationship for the next cycle. New deep relationships are rare in Year 9; new connections that arrive tend to be foreshadowing of next year\'s Year 1.',
    in_work: 'In work, Year 9 is for finishing — completing the long project, leaving the role that has taught what it had to teach, transitioning out cleanly. Avoid starting brand-new businesses or roles this year unless they are clearly the natural next step (most new things started in Year 9 turn out to be Year 1 ventures that were rushed).',
    money: 'Money in Year 9 is for *clearing*: paying off debt, closing accounts that no longer serve, simplifying financial structure, giving generously, preparing financial space for next cycle\'s opening Year 1. Savings tend to be drawn down (the year often involves big releases); investments tend to mature.',
    what_to_release: 'Release everything that does not belong in the next 9 years. Relationships, jobs, possessions, identities, beliefs, commitments, debts, resentments. The year asks: what is finished? Honor the answer.',
    what_to_invite: 'Invite the closure. Invite the goodbye. Invite the gratitude for what is ending. Invite the lessons. Invite the spaciousness that release creates for next year\'s new chapter.',
    daily_practice: 'Each week, *complete* one thing — finish the project, return the borrowed item, send the closure email, donate the clothes you no longer wear, have the goodbye conversation. The Year 9 muscle is the muscle of finishing well. Build it weekly. Notice the lightness.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Amethyst (graduation, spiritual closure) or selenite (clearing the field)',
    key_questions: [
      'What is finished in my life that I have been refusing to acknowledge as finished?',
      'Whose forgiveness — given or received — am I being asked to complete this year?',
      'If I made space (in my home, my schedule, my heart) for next year\'s new beginning, what would I release this month to start?'
    ]
  }
]

// ---------- helpers ----------

const PY_BY_NUM: Record<number, PersonalYearProfile> = Object.fromEntries(
  PERSONAL_YEARS.map((p) => [p.num, p])
)

export const PERSONAL_YEAR_NUMS = PERSONAL_YEARS.map((p) => p.num)

export function isPersonalYearNum(s: string): boolean {
  const n = parseInt(s, 10)
  return Number.isInteger(n) && n >= 1 && n <= 9
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Year-tinted gradient — interpolated across the cycle.
const YEAR_ACCENT: Record<number, { c1: string; c2: string }> = {
  1: { c1: '#d6814a', c2: '#9b4828' },   // fire-orange — beginning
  2: { c1: '#dba2a2', c2: '#a87060' },   // soft rose — partnership
  3: { c1: '#e8b94a', c2: '#b8852a' },   // golden — expression
  4: { c1: '#7a9b6a', c2: '#3d5d2c' },   // earth green — foundation
  5: { c1: '#c98a4a', c2: '#a85a2c' },   // amber — movement
  6: { c1: '#b06aa6', c2: '#783a78' },   // soft magenta — home/love
  7: { c1: '#5a6ec6', c2: '#2c3478' },   // indigo — inner
  8: { c1: '#9b6a3c', c2: '#5a3a1c' },   // bronze — harvest
  9: { c1: '#7a4ec6', c2: '#3c2478' }    // violet — completion
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// ---------- per-year page ----------

export function personalYearPageHTML(numStr: string): string {
  const n = parseInt(numStr, 10)
  if (!Number.isInteger(n) || n < 1 || n > 9) return ''
  const p = PY_BY_NUM[n]
  const accent = YEAR_ACCENT[n]
  const readingHref = `/gab44/reading?ref=personal-year-${n}`

  const title = `${escapeHtml(p.display)} — Meaning, Love, Work, Money &amp; the Practice · gab44 ✨`
  const description = `${p.display}: ${p.theme}. The meaning, what this year is for, the gift, the shadow, in love, in work, money, what to release, what to invite, daily practice. Hand-written.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Personal Year', item: `${SITE_URL}/gab44/personal-year` },
          { '@type': 'ListItem', position: 3, name: p.display, item: `${SITE_URL}/gab44/personal-year/${n}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${p.display}: meaning, love, work, money, practice`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/personal-year/${n}`,
        about: `${p.display}, numerology, personal year cycle`
      }
    ]
  })

  const otherYearsHtml = PERSONAL_YEARS.filter((q) => q.num !== n).map((q) => {
    const acc = YEAR_ACCENT[q.num]
    return `<a class="ph-mini" href="/gab44/personal-year/${q.num}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="num">${q.num}</span><span class="name">${escapeHtml(q.display.replace('Personal Year ', 'Year '))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/personal-year/${n}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/personal-year/${n}" />
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
  .year-badge { display: inline-flex; align-items: center; gap: 12px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 8px 18px 8px 12px; border-radius: 999px;
    font-weight: 800; font-size: 18px; margin-bottom: 14px; }
  .year-badge .num { font-size: 28px; font-weight: 800; line-height: 1; padding: 4px 10px;
    background: rgba(255,255,255,0.2); border-radius: 50%; min-width: 36px; text-align: center; }
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .theme-pill { display: inline-block; background: var(--bg-1); border: 1px solid var(--line);
    color: var(--fg-dim); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 12px;
    text-transform: lowercase; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel p { margin: 0; font-size: 15px; line-height: 1.65; }
  .ud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .ud-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .ud-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); }
  .ud-card.shadow { border-left-color: var(--c2); }
  .ud-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ud-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .triple-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin: 8px 0; }
  @media (max-width: 600px) { .triple-grid { grid-template-columns: 1fr; } }
  .triple-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 18px; border-left: 4px solid var(--c1); }
  .triple-card h3 { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .triple-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .release-invite-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 8px 0; }
  @media (max-width: 600px) { .release-invite-grid { grid-template-columns: 1fr; } }
  .ri-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 20px; }
  .ri-card.release { border-left: 4px solid #a85a5a; }
  .ri-card.invite { border-left: 4px solid #5a8a6a; }
  .ri-card h3 { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .ri-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .practice-card { background: linear-gradient(135deg, ${accent.c1}10 0%, ${accent.c2}10 100%);
    border: 1px solid var(--c1); border-radius: 14px; padding: 22px 24px; margin: 14px 0; }
  .practice-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .practice-card p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
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
  .other-years { margin: 36px 0 22px; }
  .other-years h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .years-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .years-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 14px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .num { font-size: 22px; font-weight: 800; color: var(--accent); }
  .ph-mini .name { font-size: 11px; }
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/personal-year">9-year cycle</a>
      <a href="/gab44/numerology">life path</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ personal year</div>
    <div class="year-badge"><span class="num">${n}</span><span>${escapeHtml(p.display)}</span></div>
    <span class="theme-pill">${escapeHtml(p.theme)}</span>
    <h1><span class="sym">${p.emoji}</span>${escapeHtml(p.display)}</h1>
    <p class="sub">${escapeHtml(p.one_liner)}</p>

    <article class="core-card">
      <span class="label">the meaning of personal year ${n}</span>
      <p class="text">${escapeHtml(p.meaning)}</p>
    </article>

    <h2><span class="icon">🎯</span>what this year is for</h2>
    <div class="signs-panel">
      <h3>the year\'s purpose</h3>
      <p>${escapeHtml(p.what_its_for)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift &amp; the shadow</h2>
    <div class="ud-grid">
      <div class="ud-card">
        <h3>the gift</h3>
        <p>${escapeHtml(p.the_gift)}</p>
      </div>
      <div class="ud-card shadow">
        <h3>the shadow</h3>
        <p>${escapeHtml(p.the_shadow)}</p>
      </div>
    </div>

    <h2><span class="icon">💞</span>love, work, money</h2>
    <div class="triple-grid">
      <div class="triple-card">
        <h3>in love</h3>
        <p>${escapeHtml(p.in_love)}</p>
      </div>
      <div class="triple-card">
        <h3>in work</h3>
        <p>${escapeHtml(p.in_work)}</p>
      </div>
      <div class="triple-card">
        <h3>money</h3>
        <p>${escapeHtml(p.money)}</p>
      </div>
    </div>

    <h2><span class="icon">↻</span>release &amp; invite</h2>
    <div class="release-invite-grid">
      <div class="ri-card release">
        <h3>what to release</h3>
        <p>${escapeHtml(p.what_to_release)}</p>
      </div>
      <div class="ri-card invite">
        <h3>what to invite</h3>
        <p>${escapeHtml(p.what_to_invite)}</p>
      </div>
    </div>

    <h2><span class="icon">🌱</span>the daily practice</h2>
    <div class="practice-card">
      <h3>build the year\'s muscle</h3>
      <p>${escapeHtml(p.daily_practice)}</p>
    </div>

    <h2><span class="icon">🌿</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${p.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(p.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">the body-energy that resonates with this year</div>
      </a>
      <a class="pair-card" href="/healing/script/${p.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(p.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">a meditation that pairs with this year\'s frequency</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(p.pair_with_crystal.split(' (')[0].split(' or ')[0])}</div>
        <div class="pair-text">${escapeHtml(p.pair_with_crystal)}</div>
      </div>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>three honest questions</h3>
      <ol>
        <li>${escapeHtml(p.key_questions[0])}</li>
        <li>${escapeHtml(p.key_questions[1])}</li>
        <li>${escapeHtml(p.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for YOUR personal year</h2>
      <p>This page maps Personal Year ${n} in general. A <strong>personal reading</strong> looks at YOUR specific chart, your life path, the year you are actually in, and writes you a letter mapping the year\'s 4 quarters, the months that matter most, and the practice for THIS specific year. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/personal-year">all 9 personal years</a> · <a href="/gab44/numerology">12 life-path numbers</a> · <a href="/gab44/chakras/${p.pair_with_chakra_slug}">${escapeHtml(p.pair_with_chakra_slug.replace('-', ' '))} chakra</a> · <a href="/healing/script/${p.pair_with_sound_slug}">${escapeHtml(p.pair_with_sound_slug.replace(/-/g, ' '))} meditation</a>.
    </div>

    <section class="other-years">
      <h3>the other 8 personal years in the 9-year cycle</h3>
      <div class="years-grid">
        ${otherYearsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

// ---------- index ----------

export function personalYearIndexHTML(): string {
  const title = `Personal Year Numerology — All 9 Years of the Cycle Explained · gab44 ✨`
  const description = `The 9-year personal-year cycle — what each year (1-9) is for, in love, in work, money, what to release, what to invite, daily practice. Plus how to calculate yours.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Personal Year', item: `${SITE_URL}/gab44/personal-year` }
        ]
      },
      {
        '@type': 'CollectionPage',
        name: 'The 9-year personal-year numerology cycle',
        description: description.substring(0, 280),
        url: `${SITE_URL}/gab44/personal-year`
      }
    ]
  })

  const cardsHtml = PERSONAL_YEARS.map((p) => {
    const acc = YEAR_ACCENT[p.num]
    return `<a class="year-card" href="/gab44/personal-year/${p.num}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="yc-num">${p.num}</div>
      <div class="yc-emoji">${p.emoji}</div>
      <div class="yc-title">${escapeHtml(p.display)}</div>
      <div class="yc-theme">${escapeHtml(p.theme)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/personal-year" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/personal-year" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, #d6814a1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, #7a4ec61c 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 920px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, #d6814a, #7a4ec6); box-shadow: 0 0 0 4px rgba(214,129,74,0.18); }
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 32px; font-style: italic; max-width: 640px; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .intro-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 28px;
  }
  .intro-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .intro-card p { font-size: 15px; line-height: 1.7; color: var(--fg); margin: 0 0 12px; }
  .intro-card p:last-child { margin: 0; }
  .calc-card {
    background: linear-gradient(135deg, #d6814a10 0%, #7a4ec610 100%);
    border: 2px solid #d6814a40; border-radius: 18px; padding: 28px 30px; margin: 0 0 28px;
  }
  .calc-card h3 { font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .calc-card .formula { font-size: 16px; line-height: 1.7; color: var(--fg); margin: 0 0 14px;
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 10px;
    padding: 14px 18px; font-family: 'JetBrains Mono', 'SF Mono', Menlo, monospace; }
  .calc-card .example { font-size: 14px; color: var(--fg-dim); margin: 0 0 8px; }
  .calc-card .example strong { color: var(--fg); }
  .years-grid-main { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 24px 0; }
  @media (max-width: 720px) { .years-grid-main { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .years-grid-main { grid-template-columns: 1fr; } }
  .year-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 20px; text-decoration: none; transition: border-color 0.15s, transform 0.05s;
    border-top: 4px solid; border-image: linear-gradient(90deg, var(--c1), var(--c2)) 1;
    display: block; position: relative; }
  .year-card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .yc-num { position: absolute; top: 14px; right: 18px; font-size: 38px; font-weight: 800;
    color: transparent; -webkit-text-stroke: 1.5px var(--c1); line-height: 1;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; }
  .yc-emoji { font-size: 32px; margin-bottom: 6px; }
  .yc-title { font-size: 16px; font-weight: 800; color: var(--accent); margin-bottom: 4px; }
  .yc-theme { font-size: 13px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
  .reading-cta {
    background: linear-gradient(135deg, #d6814a 0%, #7a4ec6 100%);
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
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/numerology">life path</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ personal year cycle</div>
    <h1><span class="sym">🌀</span>The 9-Year Personal-Year Cycle</h1>
    <p class="sub">Everyone is in a 9-year cycle. What you do this year matters more if you know what year of the cycle you are actually in.</p>

    <article class="intro-card">
      <span class="label">how the cycle works</span>
      <p>Personal Year is distinct from Life Path. <strong>Life Path</strong> is your soul\'s arc — the lesson you came in to learn, the gift you came in to bring; it does not change. <strong>Personal Year</strong> is the energy of <em>this calendar year for you specifically</em> — it changes every January, in a 9-year cycle that everyone is in regardless of life path. Year 1 plants seeds; Year 9 closes chapters; the seven years in between move through tending, expression, foundation, change, home, inwardness, and harvest before completion.</p>
      <p>Most people unknowingly fight their personal year — pushing for harvest in Year 2 (a tending year), pushing for expansion in Year 7 (an inner year), pushing for stability in Year 5 (a movement year). Knowing the year you are in lets you stop pushing against the current and use it instead.</p>
    </article>

    <article class="calc-card">
      <h3>📐 how to calculate your personal year</h3>
      <p class="formula">your personal year = (birth month + birth day + current year) → reduce to a single digit between 1 and 9</p>
      <p class="example"><strong>Example:</strong> someone born June 12, calculating for 2026:</p>
      <p class="example">→ 6 + 12 + 2026 = 2044</p>
      <p class="example">→ 2 + 0 + 4 + 4 = 10</p>
      <p class="example">→ 1 + 0 = <strong>1 → Personal Year 1</strong> (a beginning year)</p>
      <p class="example" style="margin-top:14px;font-style:italic">Personal year flips on your <em>solar return (your birthday)</em> in some traditions and on January 1 in others. Most contemporary numerologists use January 1 for simplicity.</p>
    </article>

    <h2><span class="icon">🌀</span>the 9 years of the cycle</h2>
    <p style="font-size:14px;color:var(--fg-dim)">Each year carries its own theme, its own gift, its own shadow, its own daily practice. Click into the one you are in (or the one you are heading toward) for the full reading.</p>
    <div class="years-grid-main">
      ${cardsHtml}
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading mapped to your specific year + life path</h2>
      <p>This page teaches the cycle. A <strong>personal reading</strong> takes your birth date, calculates your current personal year + your life path number, and writes you a letter mapping the next 12 months — quarter by quarter, the months that matter most, the practice for THIS year for YOU. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="/gab44/reading?ref=personal-year-index">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/numerology">12 life-path numbers (your soul\'s arc)</a> · <a href="/gab44/chakras">7 chakras</a> · <a href="/gab44/clairs">8 clair senses</a> · <a href="/gab44/lunar">8 lunar phases (the monthly cycle)</a>.
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
