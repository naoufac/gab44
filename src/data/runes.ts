// Runes — Elder Futhark SEO funnel — /gab44/runes (index) +
// /gab44/runes/{slug}. 24 hand-written Elder Futhark rune guides.
// Targets the divination cluster parallel to tarot: somebody just pulled a
// rune and wants the meaning right now. Universal cluster — Norse-pagan
// revival has globalized through TikTok and witchtok far beyond its
// Scandinavian origins.
//
// Each guide is ~500-600 words across 9 sections (the rune sound + name,
// upright meaning, reversed/merkstave meaning, what it asks, in love, in
// work, the gift, the shadow, pair-with chakra/sound/crystal/sign, 3 key
// questions). Aett-tinted gradient: Freyr's aett (1-8) = gold (creation,
// abundance), Hagal's aett (9-16) = indigo (forces beyond control,
// initiation), Tyr's aett (17-24) = red (the human realm, will,
// completion). Cross-funnels into BOTH revenue lanes — every rune links
// to /gab44/chakras/{slug} (gab44 internal), /healing/script/{slug}
// (Phase 1A audio), and /gab44/reading?ref=rune-{slug} ($9 Phase 1D).
// Schema.org Article + BreadcrumbList JSON-LD on each page.
// Routes registered BEFORE /gab44/:sign to avoid Hono RegExpRouter
// greedy-match.

import { SITE_URL } from '@/lib/identity'

export interface RuneGuide {
  slug: string
  name: string
  rune_char: string
  sound: string
  aett: 'freyr' | 'hagal' | 'tyr'
  position: number
  one_liner: string
  meaning: string
  upright: string
  reversed: string
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

export const RUNES: RuneGuide[] = [
  {
    slug: 'fehu',
    name: 'Fehu',
    rune_char: 'ᚠ',
    sound: 'F',
    aett: 'freyr',
    position: 1,
    one_liner: 'Cattle, wealth, the moveable abundance that flows through your hands — and the responsibility that comes with it.',
    meaning: 'The first rune of the Elder Futhark, Fehu means "cattle" — and in the Iron Age north, cattle was wealth: it could move, it could multiply, and you could lose it overnight. Fehu is the rune of abundance that flows. Money, opportunity, possessions, energy — all things that come into the hands and pass through them. It is not the rune of buried gold (that is Othala); it is the rune of currency, of circulation, of the river that brings the harvest and can also flood. To draw Fehu is to be reminded that prosperity is movement, that hoarding is a kind of death, and that the wealth you steward is a measure of the wealth you generously circulate.',
    upright: 'New money, raise, gift, opportunity, harvest. A flow is opening — investment is paying back, work is being recognized, a door is offering itself. Steward it well: spend on what nourishes, save what is wise to save, share what is wise to share. Fehu rewards generosity within reason and punishes hoarding.',
    reversed: 'Loss, theft, blocked flow, scarcity mindset. Money may be leaking through cracks you have not yet seen — a contract clause, a draining relationship, an addiction. It can also signal envy: yours of theirs, or theirs of you. Audit where wealth is going, name what you actually need, and release the fear that asks you to grip too tightly.',
    in_love: 'A relationship that nourishes, that adds — partner who lifts your material life, or one who teaches you generosity. Reversed: a partner draining your resources, or your own scarcity-thinking driving someone away. Love is a flow, not a balance sheet; check which one you are running.',
    in_work: 'Income increase, promotion, contract that pays. The work you have planted is yielding. Reversed: an offer that looks like wealth but costs more than it gives; a job that drains health for money.',
    the_gift: 'The gift of Fehu is the lesson that abundance is *circulation*. The wealthiest people you will ever meet are not the most rich — they are the ones whose money moves through their hands like the river through the valley, leaving the land green. Learn this and the river will keep finding you.',
    the_shadow: 'The shadow of Fehu is greed and fear-of-loss masquerading as prudence. Hoarders are not safe — they are paralyzed. The shadow asks: what would you do if losing everything tomorrow would not destroy you?',
    pair_with_chakra: 'Root chakra — Fehu is survival made abundant; the body must feel safe before money can flow.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Abundance — listen daily for 21 days while sitting with Fehu.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'taurus',
    key_questions: [
      'What flow have I been blocking out of fear of losing it?',
      'Where in my life is my generosity actually a form of self-respect?',
      'If money came in tomorrow, would it find a clear channel — or a cluttered one?'
    ]
  },
  {
    slug: 'uruz',
    name: 'Uruz',
    rune_char: 'ᚢ',
    sound: 'U',
    aett: 'freyr',
    position: 2,
    one_liner: 'The wild ox, raw vital strength, the body force that breaks the old form and births the new.',
    meaning: 'Uruz means "aurochs" — the now-extinct wild ox of the European forests, twice the size of cattle, untameable, the animal a young man had to face alone to prove his manhood. Uruz is the rune of *primal strength*. Not refined, not strategic — *force*. Health, vitality, the surge of power in the body that does not ask permission. It is the rune of recovery from illness, the rune of unblocking, the rune of the raw will to live. When Uruz arrives, an old form is being broken so a stronger one can take shape.',
    upright: 'Vitality, healing, strength, courage, raw power. A surge of life-force is available — body recovering, will returning, capacity expanding. This is the time to do the hard physical thing: train, fast, endure, protect. Uruz says yes to the body.',
    reversed: 'Weakness, exhaustion, sickness, force misapplied. The strength is leaking — through over-giving, through illness, through bullying (your own or someone else\'s). Or the strength has gone unconscious and is running you instead of being run. Pause, rest, and ask the body what it actually needs.',
    in_love: 'A passionate, embodied connection — the love that wants the body, not just the idea. Reversed: dominance, possessiveness, sex used as control, or impotence in any of its forms (physical, emotional, voicing).',
    in_work: 'A demanding project that requires endurance and grit. Promotion that asks for more strength than you thought you had. Reversed: burnout, a workplace where you are being broken instead of forged.',
    the_gift: 'Uruz teaches that you are stronger than you have ever needed to be. The body has reserves the mind has never asked it to use. To pull Uruz is to be told: the wild thing inside you is ready when you are.',
    the_shadow: 'The shadow of Uruz is brute force — strength used against, not for. Bullying, intimidation, the man who confuses muscle for masculinity. Or its inverse: collapse, the surrender of strength to avoid responsibility for using it.',
    pair_with_chakra: 'Sacral chakra — Uruz lives in the hips, the womb, the pelvis; vital force is sacred.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Healing — pair with Uruz when restoring vitality after a long depletion.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'taurus',
    key_questions: [
      'Where am I being asked to be stronger than I have been comfortable being?',
      'Is my strength flowing toward something I love, or against something I fear?',
      'What in my body has been waiting for permission to fully arrive?'
    ]
  },
  {
    slug: 'thurisaz',
    name: 'Thurisaz',
    rune_char: 'ᚦ',
    sound: 'TH',
    aett: 'freyr',
    position: 3,
    one_liner: 'The thorn, the giant, the protective force with edges — what hurts to touch but keeps you safe.',
    meaning: 'Thurisaz means "giant" or "thorn." It is the rune of Thor\'s hammer, the rune of the thorn-hedge that protects the rose and pierces the careless hand. Thurisaz is *defensive force* — the gate, the boundary, the saint\'s sword. It is also the rune of obstacle, the moment when the world says NO so that something better can later say yes. It is the most contested rune in modern reading because it is double-faced: the same force that wounds you is the force that protects you.',
    upright: 'Protection, boundary, a difficult test that strengthens, the force of the cosmos clearing what cannot stand. Conflict that resolves cleanly. A no that is a kindness. Thor strikes the giant; the road opens.',
    reversed: 'Defenselessness, vulnerability, attack from outside, recklessness. Or its inverse: an over-defended life, walls so high nothing good gets through either. The thorn that turned inward.',
    in_love: 'A relationship that has reached its testing point — what survives is real. Reversed: a wounding partner, or your own walls keeping love at distance.',
    in_work: 'An obstacle to push through — and one worth pushing. Reversed: a hostile workplace, a colleague-thorn, or your own defensive posturing limiting what you can build.',
    the_gift: 'Thurisaz teaches that pain has a function. The thorn is not a punishment; it is the price of the rose. Some doors close because they were never yours to walk through. The hammer falls on what cannot stand.',
    the_shadow: 'The shadow is cruelty — Thurisaz weaponized. The use of edge to wound rather than to defend. Or paranoia: seeing thorns where there are only flowers.',
    pair_with_chakra: 'Solar plexus — Thurisaz is the boundary the will must learn to set.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Letting Go — when Thurisaz cuts, the next move is to release what was on the other side.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aries',
    key_questions: [
      'What boundary is this moment asking me to set or to defend?',
      'Where has my defensiveness become my prison?',
      'What no, said now, would protect a future yes?'
    ]
  },
  {
    slug: 'ansuz',
    name: 'Ansuz',
    rune_char: 'ᚨ',
    sound: 'A',
    aett: 'freyr',
    position: 4,
    one_liner: 'Odin\'s rune — divine breath, sacred message, the word that comes through you and changes everything.',
    meaning: 'Ansuz means "god" — specifically, the breath of Odin, the rune of *received wisdom*. It is the rune of the bard, the prophet, the teacher whose words you cannot un-hear. To pull Ansuz is to be told that a message is coming — through a book, a stranger, a dream, a sudden insight in the shower. It is the rune of inspiration in the literal sense: in-spirare, the spirit breathing in. It is also the rune of *attention*: the messages have always been there; you are now ready to hear them.',
    upright: 'Insight, message, wisdom, the right teacher, the right book at the right moment. A sudden clarity. A truth told in a way you can finally hear it. The voice of guidance — yours, the elders\', the gods\'.',
    reversed: 'Miscommunication, lies, manipulation through speech, a teacher who is not. The static that drowns the signal. Or your own resistance to a message you do not want to hear.',
    in_love: 'A conversation that changes everything — a confession, a question, a truth named. Reversed: lies, gaslighting, words used to confuse rather than clarify.',
    in_work: 'A mentor appears, a presentation lands, a piece of writing is published. Reversed: communication breakdowns, the wrong words said in the wrong room.',
    the_gift: 'Ansuz teaches that the universe is in conversation with you constantly. The message is in the bird, the song on the radio, the line of a stranger. Wisdom is not earned; it is *received* by those who have built ears for it.',
    the_shadow: 'The shadow is the silver-tongued — the manipulator, the cult leader, the influencer who weaponizes wisdom-shaped speech. Or the closed ear: the part of you that refuses the message because it would require change.',
    pair_with_chakra: 'Throat chakra — Ansuz is the breath becoming word.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Anxiety Relief — when the message is loud and the nervous system is loud, this clears the channel.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'gemini',
    key_questions: [
      'What message has the universe been repeating that I have been pretending not to hear?',
      'Whose voice am I listening to that does not actually want my flourishing?',
      'If I were one breath quieter, what would I finally hear?'
    ]
  },
  {
    slug: 'raidho',
    name: 'Raidho',
    rune_char: 'ᚱ',
    sound: 'R',
    aett: 'freyr',
    position: 5,
    one_liner: 'The journey, the chariot, the rhythm of moving in right relationship with where you are going.',
    meaning: 'Raidho means "ride" or "journey." It is the rune of the road, the chariot, the rhythm of hooves on a long path. Raidho is not just travel — it is *aligned* travel. The right movement at the right pace toward the right destination. It rules pilgrimage, ceremony, ritual ordering, music, and the kind of project that has both a destination and a discipline. To pull Raidho is to be told that you are on a journey, and the journey itself is the medicine.',
    upright: 'Travel, progress, momentum, ritual, right action in right order. A trip that matters. A project finding its rhythm. The moment when discipline starts to feel like flow. Raidho is the smooth gait, the cadence, the steady miles.',
    reversed: 'Delay, journey gone wrong, broken rhythm, a path you are walking that is not yours. Travel troubles. Or the deeper reversed: rushing where you should be slow, slowing where you should ride.',
    in_love: 'A relationship moving — moving in, moving forward, taking a trip together, finding a shared rhythm. Reversed: long-distance fatigue, a partnership stuck in place, two riders out of step.',
    in_work: 'A project advancing on schedule. A new role, a relocation, a tour. Reversed: a delayed launch, missed deadlines, the wrong career road.',
    the_gift: 'Raidho teaches that the journey *is* the wisdom. The destination is just a marker; the way you ride is the life. Pace, rhythm, ritual, discipline — these are not boring; they are how the soul travels.',
    the_shadow: 'The shadow is the wandering — the journey without a destination, the perpetual travel as avoidance. Or the rigid road: the inability to deviate when the path itself is asking you to.',
    pair_with_chakra: 'Sacral chakra — Raidho moves in the hips, the rhythm of the dance.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Anxiety Relief — for travel anxiety and rhythm-restoration.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'Am I on the right road, or just a road I have been on for a long time?',
      'What rhythm am I moving in — and is it mine?',
      'What ritual would mark the leg of the journey I am currently on?'
    ]
  },
  {
    slug: 'kenaz',
    name: 'Kenaz',
    rune_char: 'ᚲ',
    sound: 'K',
    aett: 'freyr',
    position: 6,
    one_liner: 'The torch, the flame, the controlled fire that lets you see and create — knowledge made useful.',
    meaning: 'Kenaz means "torch." It is the rune of *applied fire* — the smith\'s forge, the candle in the long night, the lamp that lets you read the rune. Kenaz is creativity, knowledge, art, craft, the spark that turns raw matter into something. It is the rune of the maker: the writer at the desk, the smith at the anvil, the cook over the flame. To pull Kenaz is to be told that the work of your hands matters, and that the light to do it is available.',
    upright: 'Creativity, clarity, knowledge applied, the craft refining itself, the shadow of a confused situation finally illuminated. The right tool for the right job. Inspiration meeting skill.',
    reversed: 'A torch gone out — confusion, blockage, creative dryness, a situation where the lights are off and you are guessing. The fire that consumed instead of warmed (burnout, obsession). A skill misused.',
    in_love: 'A relationship that lights the way — partner who sees you clearly, who illuminates corners of yourself you missed. Reversed: confusion, dishonesty, the partner who keeps you in the dark.',
    in_work: 'A creative breakthrough, a new skill mastered, the right teacher, the right project. Reversed: writer\'s block, a skills gap, a project where you cannot see the next move.',
    the_gift: 'Kenaz teaches that *knowledge becomes power only when made* — only when shaped by your hands into a thing the world can use. The torch is yours to carry, but only if you keep it lit.',
    the_shadow: 'The shadow is information-hoarding, the eternal student who never makes, the perfectionist who keeps the candle covered so no one will see it shake.',
    pair_with_chakra: 'Solar plexus — Kenaz is the will-fire of the maker.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — creativity is a form of abundance; pair them in practice.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'What am I being given the light to see right now?',
      'What craft is asking for my hands and I have been avoiding the workshop?',
      'Where has my knowledge stayed in the head when it should have moved to the hands?'
    ]
  },
  {
    slug: 'gebo',
    name: 'Gebo',
    rune_char: 'ᚷ',
    sound: 'G',
    aett: 'freyr',
    position: 7,
    one_liner: 'The gift — the sacred exchange that bonds giver and receiver, the unbroken cord between souls.',
    meaning: 'Gebo means "gift." Its shape — the X — is itself an exchange, two lines crossing in equal measure. Gebo is the rune of *sacred reciprocity*: a gift given creates a bond, and the only way to honor a gift is to give one back, eventually, of equivalent depth. It is the rune of partnership in its truest sense: two beings standing in a covenant of mutual giving. To pull Gebo is to be reminded that the deepest bonds in life — friendship, marriage, mentor-student, between you and your gods — are built on gifts that flow both ways.',
    upright: 'Gift, partnership, marriage, contract honored, generosity met with generosity. A bond made or strengthened. The acknowledgement that what you have to give is what someone else has been waiting for.',
    reversed: 'Gebo is one of the few runes that has no reverse — the X looks the same upside down. But it can fall *blank-side up*: the gift withdrawn, the contract broken, the bond made one-sided. Or guilt-giving, transactional love, the gift with strings.',
    in_love: 'Partnership, marriage, the moment of becoming "we." A relationship that gives and receives in equal measure. Reversed/blank: the relationship that has gone transactional, or the gift you keep giving that no one is receiving.',
    in_work: 'Contract signed, partnership formed, a collaboration that creates something neither of you could alone. Reversed: a deal that takes more than it gives.',
    the_gift: 'Gebo teaches that *to give is to bind* — and that this binding is not a chain but a thread. The web of your life is woven of every gift exchanged. The richest people in the world are the most threaded.',
    the_shadow: 'The shadow is the gift with strings, the favor that becomes a debt, the love that keeps score. Or the inability to receive — the constant giver who refuses every gift offered back.',
    pair_with_chakra: 'Heart chakra — Gebo is two hearts in covenant.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — sometimes the deepest gift is releasing what was given.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'libra',
    key_questions: [
      'Whose gift have I never properly received?',
      'What gift is mine to give right now, even if it terrifies me?',
      'Which of my relationships has stopped flowing both ways?'
    ]
  },
  {
    slug: 'wunjo',
    name: 'Wunjo',
    rune_char: 'ᚹ',
    sound: 'W',
    aett: 'freyr',
    position: 8,
    one_liner: 'Joy — the simple, hard-won, banner-flying joy of belonging to your people in a flourishing time.',
    meaning: 'Wunjo means "joy" or "wish-fulfillment." Its shape suggests a banner, a flag — and in the old culture a flag meant *clan*, meant home, meant the people you belong to flourishing together. Wunjo is therefore not solitary joy; it is *joy-in-belonging*. The harvest feast. The return after the journey. The fellowship that makes the wine sweet. To pull Wunjo is to be told that the season of joy has arrived — or that it is closer than your nervous system has been allowing you to feel.',
    upright: 'Joy, harmony, success, fellowship, the wish granted. A season of light. Friends gathered. A long-held desire met. Wunjo is the rune of the moment you say "I am happy" and mean it.',
    reversed: 'Sorrow, alienation, a flag torn, a wish denied. The party you were not invited to. Or the deeper reversed: a joy you are refusing to let yourself feel because grief has been your shape for too long.',
    in_love: 'A relationship in its blooming — laughter, ease, fellowship, the deep simple joy of being known. Reversed: estrangement, a couple at a friend\'s wedding feeling alone, or your own inability to receive a love that is offered freely.',
    in_work: 'A team flourishing, a project celebrated, recognition that lands. Reversed: workplace alienation, a win that does not feel like one, isolation in your role.',
    the_gift: 'Wunjo teaches that joy is *political* — joy is the proof that your people are well, that the harvest came in, that the long winter ended. To allow yourself joy is to declare the war is over. Many have not yet given themselves permission.',
    the_shadow: 'The shadow is forced cheerfulness — joy performed, not felt. Or its inverse: the inability to receive joy because you have been bracing for the next loss. Wunjo asks you to stop bracing.',
    pair_with_chakra: 'Heart chakra — joy is the heart\'s native state when nothing is in the way.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — joy is abundance felt; let them potentiate each other.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What joy have I not been letting myself feel?',
      'Whose company makes me remember what flourishing feels like?',
      'If the war were truly over, what would I do today?'
    ]
  },
  {
    slug: 'hagalaz',
    name: 'Hagalaz',
    rune_char: 'ᚺ',
    sound: 'H',
    aett: 'hagal',
    position: 9,
    one_liner: 'Hail — the storm that destroys the harvest and feeds the soil, the disruption you did not choose but needed.',
    meaning: 'Hagalaz means "hail." It is the rune of the *uncontrollable disruption* — the storm that wrecks the crop, the illness that cancels the trip, the breakup you did not see coming. But hail melts into water, and the water feeds the field. Hagalaz is the rune of *necessary destruction* — what is broken so that the deeper renewal can begin. It is the first rune of the second aett, where the human will meets the forces that overrule it.',
    upright: 'Disruption, sudden change, an unwanted event that turns out to clear the ground. A storm passing through. A loss that, looked back on, was the redirection. The rune of "this is happening to you, not because of you."',
    reversed: 'Hagalaz, like Gebo, has no clean reverse — the shape is symmetrical. But blank-side: stagnation that should have already been broken, a long-overdue storm refusing to come, or the unwillingness to learn from a hailstorm that did pass through.',
    in_love: 'A relationship-shaking event — a fight that surfaces what was buried, a breakup that frees both, a crisis that, after the wreckage, makes a deeper love possible. The truth-storm.',
    in_work: 'A layoff, a sudden pivot, an industry shift. Reversed: a workplace where the storm has been coming for years and everyone is pretending the sky is clear.',
    the_gift: 'Hagalaz teaches that destruction has a function. The storm comes. The harvest is lost. And the field, watered, deeper-rooted, yields more next year. Some growth is possible only after a clearing.',
    the_shadow: 'The shadow is victim-paralysis — being so identified with the storm that you forget to plant when it passes. Or its inverse: courting destruction, romanticizing crisis, never learning to grow in calm weather.',
    pair_with_chakra: 'Root chakra — when hail comes, the work is to stay rooted.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — Hagalaz is what is being released; this audio is the release itself.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What in my life has just been disrupted, and what was the disruption protecting me from?',
      'Where am I bracing for a storm that has actually already passed?',
      'What would I plant if I trusted that the field had been watered?'
    ]
  },
  {
    slug: 'naudhiz',
    name: 'Naudhiz',
    rune_char: 'ᚾ',
    sound: 'N',
    aett: 'hagal',
    position: 10,
    one_liner: 'Need — the friction that births the fire, the constraint that makes you find the way through.',
    meaning: 'Naudhiz means "need" or "necessity." Its shape — two crossed sticks — is the *need-fire*, the fire kindled by friction in a time of plague or disaster, when no other flame would do. Naudhiz is the rune of *constructive constraint*. It says: this lack you are sitting in, this hunger, this not-enough — it is the friction that will birth your fire. To pull Naudhiz is to be told that what you do not have is also what you are about to discover you can make.',
    upright: 'Constraint that produces, hunger that fuels, the need that teaches the skill, lack as gift. The deadline that finally produces the page. The poverty that produces the genius. Need as the mother of invention, in its true Norse sense.',
    reversed: 'Lack as identity, scarcity as religion, the inability to acknowledge a need that is real. Or the opposite: a manufactured need that has no friction-fire underneath it, just performance.',
    in_love: 'A relationship where genuine need has been articulated — and met. Or the rune of "I need help, please" finally said aloud. Reversed: codependence dressed as need, or chronic refusal to need anyone.',
    in_work: 'A constraint that makes the work better — a budget cut that births a smarter design, a deadline that finally produces the page. Reversed: a chronic-lack culture that drains rather than forges.',
    the_gift: 'Naudhiz teaches that *need is sacred*. The body needing water, the soul needing meaning, the heart needing love — these are not weaknesses; they are the friction that lets life burn. People who cannot need cannot kindle.',
    the_shadow: 'The shadow is martyrdom — making a virtue of unmet need, refusing the help that would meet it. Or scarcity programming so deep that even when given, you cannot receive.',
    pair_with_chakra: 'Solar plexus — need turns into will at this center.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — often the friction of need is felt as anxiety first; the audio cools the spark.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What need am I refusing to name?',
      'What constraint, if I stopped fighting it, might forge what I have been trying to manufacture?',
      'Whose help is the universe currently offering that my pride has been rejecting?'
    ]
  },
  {
    slug: 'isa',
    name: 'Isa',
    rune_char: 'ᛁ',
    sound: 'I',
    aett: 'hagal',
    position: 11,
    one_liner: 'Ice — the great pause, the frozen river, the stillness that reveals the structure beneath.',
    meaning: 'Isa means "ice." A single vertical line — the still, frozen pillar of the river. Isa is the rune of *the pause*. Not death (that is Eihwaz), not destruction (that is Hagalaz) — *pause*. The river is still flowing underneath, but on the surface nothing moves, and the stillness lets you see things that motion hid. It is the rune of the long winter, the dormant phase, the year you did not know was rebuilding you. To pull Isa is to be told that the freeze is not failure; it is the form the rebuilding is taking.',
    upright: 'Stillness, pause, plateau, a project frozen, a relationship in suspended animation. Reflection. The slow internal work that has no visible output. Isa says: do not force the river; trust the freeze.',
    reversed: 'Isa is symmetrical — no clean reverse. But shadow-side: a freeze that has become a permanent state, the inability to thaw, emotional ice as defense. Or the impatience that mistakes pause for problem.',
    in_love: 'A relationship in pause — distance, a season of cooler temperatures, the moment of "let us see in three months." Reversed: emotional ice, a partner gone cold, or your own walls of frost.',
    in_work: 'A project frozen, a job in stagnant mode, a sabbatical, a winter season in the career. Reversed: a workplace where everyone has been on ice for too long.',
    the_gift: 'Isa teaches that pause is not the opposite of progress — it is one of its forms. Trees grow most in the years their roots deepen, not the years their branches shoot. The frozen river is gathering force.',
    the_shadow: 'The shadow is permanent freeze — the depression that calcifies, the relationship in cryogenic suspension, the dream put on ice and never thawed. Isa is medicine until it becomes a tomb.',
    pair_with_chakra: 'Crown chakra — stillness opens the highest channel.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Sleep — Isa is the frequency of winter rest; pair them on long-pause nights.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What in my life is frozen because it needs to be — and what is frozen because I have not yet thawed it?',
      'In this stillness, what structure beneath the surface am I being shown?',
      'What is the pause asking me to learn before I move again?'
    ]
  },
  {
    slug: 'jera',
    name: 'Jera',
    rune_char: 'ᛃ',
    sound: 'J / Y',
    aett: 'hagal',
    position: 12,
    one_liner: 'The harvest — the cyclical reward, the year that turns, the patience of the seasons keeping faith with the planter.',
    meaning: 'Jera means "year" or "harvest." Its shape — two arcs facing each other — is the cycle of the seasons, the spiral of return. Jera is the rune of *cyclical justice*. Whatever you have planted, the year will bring you the yield of, in its own time, by its own laws. It is the rune of patience rewarded, of the long arc bending toward the harvest, of the trust that what you have done in the dark will bear fruit in the light.',
    upright: 'Harvest, reward, cyclical return, a project bearing fruit, a long effort paying off. The year completing. Karmic justice — what you sowed, you reap. Jera is one of the most quietly hopeful runes.',
    reversed: 'Jera is symmetrical — no clean reverse. But shadow: a harvest delayed beyond reason (often because the planting was done wrong), or impatience for a yield the year has not yet had time to bring.',
    in_love: 'A relationship coming into a season of yield — the years of work paying off, the season of harvest in love. Reversed/shadow: a partnership that has skipped the planting and expects the harvest, or a long love coming to its right ending in its right time.',
    in_work: 'A career in its harvest year — promotion, vesting, the launch that lands. Reversed/shadow: skipping the foundation work; or a harvest yearned for that is still two seasons away.',
    the_gift: 'Jera teaches that the universe is not unjust — it is *cyclical*. The harvest comes in its time. Your job is to plant well, weed faithfully, and trust the year. The patient will eat well.',
    the_shadow: 'The shadow is the demand for instant harvest, the gambler\'s impatience, the spiritual bypass that wants enlightenment without practice. Jera is medicine for the rushed.',
    pair_with_chakra: 'Sacral chakra — Jera is the womb of the year.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — pair Jera with abundance audio when the harvest is approaching.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'virgo',
    key_questions: [
      'What did I plant a year ago that is now bearing fruit?',
      'What am I planting now that I will feed myself with a year from now?',
      'Where am I demanding a harvest that the season has not yet brought?'
    ]
  },
  {
    slug: 'eihwaz',
    name: 'Eihwaz',
    rune_char: 'ᛇ',
    sound: 'EI',
    aett: 'hagal',
    position: 13,
    one_liner: 'The yew — the tree of life and death, the bow of the warrior, the rune of initiation through transformation.',
    meaning: 'Eihwaz means "yew." The yew is the longest-lived tree in northern Europe, a tree that grows from its own dead heartwood, planted in graveyards because it is the tree that touches both worlds. Eihwaz is the rune of *the great transformation* — death-and-rebirth, the initiation, the long descent and the long return. It is the World Tree axis, the connection between the ordinary world and the deep one. To pull Eihwaz is to be in an initiatory passage.',
    upright: 'Initiation, transformation, the threshold between what you were and what you are becoming. A profound passage. The shamanic journey. The dark night of the soul that opens into a wider one.',
    reversed: 'Eihwaz is roughly symmetrical — no clean reverse. Shadow: refusing the initiation, clinging to the old form, or the false initiation (a dramatic crisis that produced no real transformation).',
    in_love: 'A relationship that has become an initiation — partner who reveals you to yourself in ways that hurt and heal. Reversed: refusal to grow with the partnership; a love asking for a death you are refusing.',
    in_work: 'A career-defining transformation, a vocation revealing itself through hardship. Reversed: clinging to the role you already outgrew.',
    the_gift: 'Eihwaz teaches that *some growth requires the death of who you have been*. The yew lives by composting its own heartwood. You will lose forms of yourself you loved. What returns is more deeply yours.',
    the_shadow: 'The shadow is identity-clinging, the refusal to die forward, the long mourning for a self you have already outlived.',
    pair_with_chakra: 'Third eye — Eihwaz opens the seer\'s vision.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Letting Go — initiation requires releasing.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What in me is asking to die so that the next version can live?',
      'What initiation am I currently inside, even if I have not yet named it?',
      'Where am I treating a death-and-rebirth process as merely a problem to solve?'
    ]
  },
  {
    slug: 'perthro',
    name: 'Perthro',
    rune_char: 'ᛈ',
    sound: 'P',
    aett: 'hagal',
    position: 14,
    one_liner: 'The dice cup, the womb of fate, the secret kept and the mystery revealed in its own time.',
    meaning: 'Perthro means "dice cup" or "lot-cup" — the vessel from which the fate-stones are cast. It is the most enigmatic rune, the rune of *hidden things*, of fate, of the mystery you do not yet know is yours. It rules dreams, divination itself, the unborn, the secret, the wyrd that is being woven in the dark loom. To pull Perthro is to be told that something is happening behind the veil, and it is yours, and you will know in time.',
    upright: 'Mystery, fate revealing itself, hidden gift, divination active, a secret about to surface, an unborn thing taking form. Initiation into the mysteries. The rune of the seer.',
    reversed: 'Stagnation in the unseen, a secret that will not surface, fate stuck in the cup, hidden knowledge being withheld (from you or by you). The vessel turned upside down.',
    in_love: 'A hidden love, a fate-driven encounter, a mystery in a relationship that will reveal itself. Reversed: secrets corroding a partnership; a fated bond delayed by avoidance.',
    in_work: 'A project gestating in the dark, a hidden opportunity, a destiny-piece falling into place. Reversed: corporate politics, hidden agendas, the project quietly being undermined.',
    the_gift: 'Perthro teaches that *not everything is yours to know yet*. Some seeds grow in the dark. Trust the cup; the dice will fall when they fall.',
    the_shadow: 'The shadow is forced revelation — pulling the seedling up to check the roots, demanding clarity from a mystery that needs more time, or weaponizing secrets.',
    pair_with_chakra: 'Sacral chakra — Perthro is the womb-cup.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Sleep — many of Perthro\'s revelations come in dream.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'pisces',
    key_questions: [
      'What is gestating in me right now that I am being asked not to rush?',
      'What secret have I been keeping that wants to come into the light?',
      'Where am I forcing clarity from a process that needs to stay in the cup a little longer?'
    ]
  },
  {
    slug: 'algiz',
    name: 'Algiz',
    rune_char: 'ᛉ',
    sound: 'Z',
    aett: 'hagal',
    position: 15,
    one_liner: 'The elk, the upraised hand, the protective sanctuary — divine guardianship and the boundary that keeps the sacred whole.',
    meaning: 'Algiz means "elk" — and the rune\'s shape, like antlers raised, is also the human figure with arms upraised in invocation, in protection, in connection to the gods. Algiz is the rune of *spiritual protection*, the sanctuary, the temenos, the sacred space defended. It is the rune of guardian energies, of higher self, of the connection upward that keeps you safe. To pull Algiz is to be told that protection is available — and that your job is to keep the sanctuary clean.',
    upright: 'Protection, divine guardianship, sanctuary, intuition active, the higher self engaged, a defended boundary that lets the sacred grow. The rune of "you are watched over."',
    reversed: 'Vulnerability, defenselessness, a sanctuary breached, intuition not yet trusted, or a connection upward that has been let go slack. The antlers down.',
    in_love: 'A relationship that is a sanctuary — partner who protects your becoming. Reversed: a love that has been left unprotected; boundaries you have not been keeping.',
    in_work: 'A protected workspace, a mentor-figure shielding you, a contract favoring you. Reversed: a workplace where you have lost protection or never had it.',
    the_gift: 'Algiz teaches that you are guarded, but the guardian needs you to participate — the elk listens, the human arms raise. Protection is a relationship, not a guarantee.',
    the_shadow: 'The shadow is paranoia — fortress where there should be sanctuary, walls instead of borders. Or its inverse: refusing the protection that is available, the spiritual bypass that says "I do not need help."',
    pair_with_chakra: 'Crown chakra — Algiz is the upward channel.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — for restoring the protective field.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'Whose protection am I being offered that I have been refusing?',
      'What sanctuary in my life have I let become merely a fortress?',
      'Where is my intuition speaking that I have been overruling?'
    ]
  },
  {
    slug: 'sowilo',
    name: 'Sowilo',
    rune_char: 'ᛋ',
    sound: 'S',
    aett: 'hagal',
    position: 16,
    one_liner: 'The sun — undefeated light, the victory, the wholeness, the radiant force that nothing in the darkness can hold against.',
    meaning: 'Sowilo means "sun." Its shape — a lightning-bolt zigzag — is the sun-wheel turning, the lightning of life, the spark that cannot be extinguished. Sowilo is the rune of *victory and wholeness*. It is the most unambiguously positive rune in the Futhark — there is no shadow side to the sun in the Norse imagination, only its presence and its absence. To pull Sowilo is to be told that light is winning, that wholeness is possible, that the wheel is turning toward summer.',
    upright: 'Victory, wholeness, vitality, success, the goal achieved, the truth shining, illumination, recovery from illness, the long winter ending. Sowilo is *yes* in its purest form.',
    reversed: 'Sowilo is symmetrical — no reverse. But shadow: an inability to receive the light, eyes still adjusted to dark, a victory that you have not let yourself claim. The sun is shining; are you stepping into it?',
    in_love: 'A relationship in its sunlight — joy, ease, mutual flourishing, public commitment. Or a single self-radiance attracting the right partner. The summer of love.',
    in_work: 'A goal achieved, a project succeeded, recognition that lights up the path forward. Health restored. The career equivalent of summer.',
    the_gift: 'Sowilo teaches that *victory is possible*. The story does not always end in tragedy. Some long efforts are answered by the sun rising over a clear horizon. Allow yourself to win.',
    the_shadow: 'The shadow is *refusing* the sun — the trauma-conditioned belief that joy is dangerous, that success will be punished, that the light is too much for the eyes that adjusted to the dark. Sowilo asks: will you step out?',
    pair_with_chakra: 'Solar plexus — Sowilo is the inner sun.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — pair the inner sun with abundance audio for radiant practice.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'What victory am I refusing to claim?',
      'Where in my life is the sun shining that I have been standing in the shade of?',
      'If I let myself be fully whole, what would I do today?'
    ]
  },
  {
    slug: 'tiwaz',
    name: 'Tiwaz',
    rune_char: 'ᛏ',
    sound: 'T',
    aett: 'tyr',
    position: 17,
    one_liner: 'Tyr\'s rune — the warrior of justice, the sacrifice for what is right, the courage that does the difficult honest thing.',
    meaning: 'Tiwaz means "Tyr," the Norse god of justice and lawful war. Its shape is an upward arrow. Tyr is the god who put his hand in the wolf\'s mouth so the wolf could be bound; he sacrificed his hand to keep his oath. Tiwaz is therefore the rune of *honorable sacrifice*, of *just battle*, of *the courage to do the right thing when it costs you*. It opens the third aett — the realm of the human will engaging the world. To pull Tiwaz is to be called to integrity.',
    upright: 'Justice, courage, honor, victory through righteous action, sacrifice for the truth, leadership, integrity. The willingness to put the hand in the wolf\'s mouth if the oath demands it.',
    reversed: 'Cowardice, injustice, dishonor, oath broken, the easy path chosen over the right one. Or its inverse: rigidity, the warrior who has forgotten the cause, war without honor.',
    in_love: 'A partnership built on honor and truth-telling. The willingness to do the hard right thing. Reversed: dishonesty in love, or a relationship in which one of you is fighting and the other is hiding.',
    in_work: 'Leadership through example, a just cause taken up, a project requiring sacrifice for integrity. Reversed: corporate corruption, an unjust system you are inside, a moral compromise you have been making.',
    the_gift: 'Tiwaz teaches that there is a kind of sacrifice that does not diminish you — it *constitutes* you. Tyr did not lose his hand; he became the god whose hand was given. Integrity is built from the things you sacrificed to keep it.',
    the_shadow: 'The shadow is martyrdom for the wrong cause, the warrior who fights to feel useful, the rigidity that confuses being right with being righteous.',
    pair_with_chakra: 'Solar plexus — Tiwaz is the will to act on what is right.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — courage often shows up as anxiety first; the audio helps the warrior breathe.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aries',
    key_questions: [
      'What honest, difficult thing am I being asked to do?',
      'Where have I been choosing the easy path because the right one would cost me?',
      'What oath of mine is currently being tested?'
    ]
  },
  {
    slug: 'berkano',
    name: 'Berkano',
    rune_char: 'ᛒ',
    sound: 'B',
    aett: 'tyr',
    position: 18,
    one_liner: 'The birch — the mother tree, the gentle force of growth, the rune of becoming and of being held.',
    meaning: 'Berkano means "birch." The birch is the first tree to colonize the bare earth after fire — the pioneer mother, the soft white tree that prepares the ground for everything else. Berkano is the rune of *gentle, generative growth*. It is the rune of mothers, of birth, of nurturance, of the patient holding that lets a thing become itself. It is also the rune of new beginnings — not dramatic ones, but quiet, steady, well-tended ones.',
    upright: 'Birth, beginning, growth, nurturance, fertility, healing, the maternal force, a project taking gentle root, a body restoring itself, family and home blossoming. The slow soft yes of growth.',
    reversed: 'Stagnation, miscarriage (literal or metaphoric), family conflict, neglect of self or others, growth refused, a beginning never begun. The mother gone hard or absent.',
    in_love: 'A relationship taking root, family forming, the soft devoted love that nurtures both. Pregnancy, sometimes literally. Reversed: family discord, a relationship neglecting itself, or a love that needs more soft attention.',
    in_work: 'A new venture taking gentle hold, a creative project gestating, a workplace where you are growing well. Reversed: a project starved of attention, growth without care.',
    the_gift: 'Berkano teaches that *the gentlest forces grow the deepest roots*. Birch trees outlast oaks in some forests because they are willing to be soft. What you nurture this season is what you will live in next.',
    the_shadow: 'The shadow is *over-mothering* — the smothering, the inability to let what you grew become its own thing. Or its inverse: maternal absence, refusing to nurture what you started.',
    pair_with_chakra: 'Sacral chakra — Berkano is the womb of becoming.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Healing — for restoration during a Berkano season.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'cancer',
    key_questions: [
      'What in my life is asking to be tended like a young birch?',
      'Where have I been forcing what wanted to be grown gently?',
      'Whose mothering — given or received — is currently being asked to soften or to ripen?'
    ]
  },
  {
    slug: 'ehwaz',
    name: 'Ehwaz',
    rune_char: 'ᛖ',
    sound: 'E',
    aett: 'tyr',
    position: 19,
    one_liner: 'The horse — partnership, trust, the bond of mutual carrying, the rune of teamwork that goes the distance.',
    meaning: 'Ehwaz means "horse." Specifically, the horse-and-rider as a single unit — neither the rider alone nor the horse alone, but the *trust between them* that allows them to cross terrain neither could cross separately. Ehwaz is the rune of *true partnership*: marriage, business, friendship, the working bond between a person and their craft. It is also the rune of trust-as-vehicle: trust is the horse that carries you both.',
    upright: 'Partnership, trust, teamwork, marriage, a working bond, mutual carrying, harmony in joint movement. The horse and rider as one. A relationship that is also a vehicle for your destination.',
    reversed: 'Discord, mistrust, a partnership at odds, the rider fighting the horse, a marriage where each pulls a different direction. Or stagnation in a relationship — the horse refusing to move.',
    in_love: 'Partnership at its most functional — two beings working together. Marriage, joint ventures, the team that becomes a family. Reversed: a partnership where the trust has gone, or where one is dragging the other.',
    in_work: 'A great working partnership — co-founder, business marriage, the assistant who has become indispensable. Reversed: a team in conflict, a partner you have outgrown, a working bond that needs honest renegotiation.',
    the_gift: 'Ehwaz teaches that *you cannot reach the far country alone*. The right partnership is not a luxury; it is the vehicle. Choose your horse with care; it will carry you further than your legs can.',
    the_shadow: 'The shadow is the partnership of convenience — the bond that has lost trust but is still riding. Or chronic solo-mode, the refusal to let any partnership carry you.',
    pair_with_chakra: 'Heart chakra — partnership lives at the heart.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — sometimes the partnership-work is releasing what is no longer trustworthy.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'libra',
    key_questions: [
      'Which of my partnerships is currently carrying me — and which am I currently carrying?',
      'Where has trust gone slack and needs honest re-tightening?',
      'What far country am I trying to reach that requires a partner I have not yet let in?'
    ]
  },
  {
    slug: 'mannaz',
    name: 'Mannaz',
    rune_char: 'ᛗ',
    sound: 'M',
    aett: 'tyr',
    position: 20,
    one_liner: 'The human — the self, the social being, the rune of becoming who you are in the company of others.',
    meaning: 'Mannaz means "human" or "humankind." Its shape suggests two figures interlinked — the self in relation. Mannaz is the rune of *the integrated person*: not the lone hero, not the dissolved-into-the-collective, but the individual who is fully themselves *because* they are in honest relation. It is the rune of community, of role, of healthy interdependence. To pull Mannaz is to be asked: who are you, in the mirror your people are holding up?',
    upright: 'Self-knowledge, social belonging, healthy individuation, community, the right role in the right group, intelligence applied to relationship. A maturity in being human.',
    reversed: 'Isolation, alienation, identity confusion, social masks, performance instead of presence. Or its inverse: lost-in-the-crowd, no individual self left.',
    in_love: 'A partnership of equals where each helps the other become more themselves. Reversed: codependence, dissolution of self in the other, or radical isolation in the relationship.',
    in_work: 'The right role in the right team, recognition for who you actually are. Reversed: performing a role that is not yours, alienation from your community of practice.',
    the_gift: 'Mannaz teaches that *you become yourself only in relation*. The hermit-fantasy is a fantasy. Real maturity is being able to be unmistakably yourself in a room full of other people.',
    the_shadow: 'The shadow is the social mask — the chameleon-self that has forgotten its own face. Or the rigid identity that cannot change shape for the room.',
    pair_with_chakra: 'Heart chakra — Mannaz is the heart in relation.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — social anxiety often masks Mannaz-work waiting to happen.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aquarius',
    key_questions: [
      'In what room do I become most fully myself?',
      'Where has my mask become heavier than my face?',
      'What community am I being asked to step more deeply into — or out of?'
    ]
  },
  {
    slug: 'laguz',
    name: 'Laguz',
    rune_char: 'ᛚ',
    sound: 'L',
    aett: 'tyr',
    position: 21,
    one_liner: 'Water — flow, intuition, the deep currents of feeling, the rune of moving with what cannot be controlled.',
    meaning: 'Laguz means "water" — and especially the *moving* water: the river, the tide, the wave, the unconscious. Laguz is the rune of *flow and intuition*. It is the rune of dream-life, of emotional currents, of the unconscious wisdom that knows before the conscious mind does. It is also the rune of *yielding to what is bigger than you* — the wave is going to crest whether you brace or surf. To pull Laguz is to be told: trust the water; you have always been part of it.',
    upright: 'Flow, intuition, emotional truth, the unconscious speaking, dreamwork, surrender to a current that is going somewhere right. Psychic openness, healing through feeling, the tide turning.',
    reversed: 'Drowning, emotional overwhelm, intuition ignored, the dam breaking. Or the inverse: emotional shutdown, the river dammed, the flow refused.',
    in_love: 'A flowing emotional connection, intuitive partnership, deep waters that nourish both. Reversed: emotional flooding, or shutdown, or a love going in the wrong direction.',
    in_work: 'Creative flow, intuitive decision-making, going with a current that is rising. Reversed: drowning in the role, ignoring the gut signal, fighting an industry tide that has already turned.',
    the_gift: 'Laguz teaches that *some of your wisest knowing arrives in the water* — in dreams, in baths, in tears. The unconscious is older than your conscious self. Listen to it.',
    the_shadow: 'The shadow is dissociation — using flow as escape, drowning the conscious self in the unconscious. Or its inverse: refusing the depths altogether, living entirely on the surface.',
    pair_with_chakra: 'Sacral chakra — Laguz is the watery center.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Sleep — water and dream are the same medicine.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'pisces',
    key_questions: [
      'What is the water in me trying to tell me?',
      'Where have I been bracing against a current that is going somewhere right?',
      'What feeling have I been afraid to fully feel?'
    ]
  },
  {
    slug: 'ingwaz',
    name: 'Ingwaz',
    rune_char: 'ᛜ',
    sound: 'NG',
    aett: 'tyr',
    position: 22,
    one_liner: 'Ing\'s rune — the seed kept whole through winter, the gestation, the long internal preparation before the visible release.',
    meaning: 'Ingwaz means "Ing," a fertility god whose seed is kept safe through the winter and released in spring. Its shape — a closed diamond — is the seed itself, intact. Ingwaz is the rune of *contained potential*. The pregnancy that has not yet shown. The book that has been written but not published. The decision made internally that has not yet been spoken. It is the rune of *the right kind of waiting* — the preparation that builds force.',
    upright: 'Gestation, contained potential, the seed safe, the long internal work that is about to become visible, an idea ripened and ready. The completion of an internal phase before external launch.',
    reversed: 'Ingwaz is symmetrical — no clean reverse. Shadow: containment that has become hoarding, the seed kept so long it died. Or premature release, opening the seed before it is ready.',
    in_love: 'A relationship maturing internally before going public. The fertility-cycle of a love. Reversed: a relationship kept secret too long, or rushed into the open before it had grown.',
    in_work: 'A project ripened and ready to launch. The right internal preparation before public release. Reversed: launch fatigue (delaying the release that is ready), or premature launch.',
    the_gift: 'Ingwaz teaches that *some things must be hidden to grow*. The seed in the dark is doing the most important work. Trust the gestation. Release when the form is ripe.',
    the_shadow: 'The shadow is permanent hiding — the dream kept so long secret that it dies in the dark. Or perfectionism: the seed never quite ready.',
    pair_with_chakra: 'Sacral chakra — Ingwaz is the womb-seed.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — the seed becoming the harvest.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'taurus',
    key_questions: [
      'What is gestating in me that I am being asked to keep contained a little longer?',
      'What seed have I been hiding so long it is at risk of never being planted?',
      'Where am I trying to launch what is not yet ripe?'
    ]
  },
  {
    slug: 'dagaz',
    name: 'Dagaz',
    rune_char: 'ᛞ',
    sound: 'D',
    aett: 'tyr',
    position: 23,
    one_liner: 'The dawn — the breakthrough moment, the threshold between night and day, the great turning that arrives all at once.',
    meaning: 'Dagaz means "day" — and specifically the *dawn*, the threshold between night and day. Its shape — the figure-eight tilted — suggests the infinite, the bow-tie of transformation. Dagaz is the rune of *the breakthrough*. The long process is over; the new state is suddenly here. The depression lifts. The puzzle-piece falls. The relationship clicks. It is the rune of *qualitative change*, the moment after which nothing is the same.',
    upright: 'Breakthrough, awakening, dawn, the great turning, hope arriving, a long darkness ending, a transformation completing. Dagaz is one of the most welcome runes — it says: it is shifting *now*.',
    reversed: 'Dagaz is symmetrical — no clean reverse. Shadow: the dawn endlessly delayed because you are not letting yourself recognize that the turning has already happened. The breakthrough not received.',
    in_love: 'A relationship reaching its breakthrough — clarity arriving, a new chapter, a long crisis resolving. The morning after the long night.',
    in_work: 'A career breakthrough, a long project finally clicking, a strategic insight that changes everything. Reversed: a breakthrough you have not yet acted on.',
    the_gift: 'Dagaz teaches that *change can be sudden*. The slow accumulation has its breakthrough moment. The dawn comes faster than the dusk. Allow the new day.',
    the_shadow: 'The shadow is *not noticing the dawn*. Eyes adjusted to night, you can mistake morning for more night. Or refusing the breakthrough because the night had become identity.',
    pair_with_chakra: 'Crown chakra — Dagaz opens the highest channel.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Abundance — pair Dagaz with abundance audio at first light.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'gemini',
    key_questions: [
      'What in my life has just turned, even if I have not yet allowed myself to feel it?',
      'Where am I treating dawn as more night?',
      'What breakthrough is asking to be received fully?'
    ]
  },
  {
    slug: 'othala',
    name: 'Othala',
    rune_char: 'ᛟ',
    sound: 'O',
    aett: 'tyr',
    position: 24,
    one_liner: 'The ancestral home — heritage, inheritance, the deep belonging that comes from knowing where you came from.',
    meaning: 'Othala means "ancestral land" or "inheritance." It is the final rune of the Elder Futhark, the rune of *what is permanently yours*: the homestead, the lineage, the deep family belonging, the spiritual inheritance from those who came before. Othala is the rune of *roots*. Where Fehu is moveable wealth, Othala is the wealth that does not move — the land, the heritage, the soul-line. To pull Othala is to be returned to your roots.',
    upright: 'Heritage, inheritance, ancestral wisdom, deep belonging, the return home, family wealth in its widest sense (material, spiritual, lineage), legacy. A place, real or symbolic, that is yours.',
    reversed: 'Disinheritance, family rupture, severed roots, exile (chosen or imposed), the loss of belonging. Or its inverse: stuck in the ancestral past, unable to leave the homestead.',
    in_love: 'A relationship that becomes home, a marriage that establishes lineage, a partner who is family. Reversed: a partnership in conflict with family-of-origin, or a love that has been kept at the doorstep too long.',
    in_work: 'A career-as-legacy, building something that will outlast you, founding a family business, returning to the family field. Reversed: an inherited career that is not yours, or a career uprooted from any sense of place.',
    the_gift: 'Othala teaches that *you are not from nowhere*. Even if your ancestors did not give you what you needed, you are still in lineage. Roots are not a prison; they are how the tree stands. Reclaim your inheritance — the parts that nourish — and compost the rest.',
    the_shadow: 'The shadow is rigid clannishness — Othala turned into "blood-and-soil" exclusion (a real and ugly use this rune was put to in the 20th century, which is why some readers still find it heavy). The healed Othala is welcoming, not closed; deep, not narrow.',
    pair_with_chakra: 'Root chakra — Othala is the deepest root.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing — for ancestral healing work.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What in my lineage am I being asked to reclaim?',
      'What inheritance, material or spiritual, have I not yet allowed myself to receive?',
      'Where is home for me now — and what is asking to be made home?'
    ]
  }
]

const RUNE_BY_SLUG: Record<string, RuneGuide> = Object.fromEntries(RUNES.map((r) => [r.slug, r]))

export const RUNE_SLUGS = RUNES.map((r) => r.slug)

export function isRuneSlug(s: string): boolean {
  return s in RUNE_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Aett-tinted gradient: Freyr (creation, abundance) = gold,
// Hagal (forces beyond control, initiation) = indigo,
// Tyr (human realm, will, completion) = red.
const AETT_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  freyr: { c1: '#d6a85a', c2: '#a06e2c', label: "Freyr's aett · creation" },
  hagal: { c1: '#5a6cb8', c2: '#2c3a82', label: "Hagal's aett · initiation" },
  tyr: { c1: '#c46a52', c2: '#8a3d2c', label: "Tyr's aett · the human realm" }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function runePageHTML(slug: string): string {
  const r = RUNE_BY_SLUG[slug]
  if (!r) return ''
  const accent = AETT_ACCENT[r.aett] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=rune-${slug}`

  const title = `${escapeHtml(r.name)} (${r.rune_char}) — Elder Futhark Rune Meaning · Upright, Reversed, In Love &amp; Work · gab44 ✨`
  const description = `What ${r.name} means when you pull it: upright reading, reversed/merkstave, in love, in work, the gift, the shadow, pair-with chakra/sound/crystal, key questions. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Runes', item: `${SITE_URL}/gab44/runes` },
          { '@type': 'ListItem', position: 3, name: r.name, item: `${SITE_URL}/gab44/runes/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} (${r.rune_char}) — Elder Futhark rune meaning`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/runes/${slug}`,
        about: `${r.name} rune meaning, Elder Futhark, Norse divination`
      }
    ]
  })

  const otherRunesHtml = RUNES.filter((q) => q.slug !== slug).slice(0, 12).map((q) => {
    const acc = AETT_ACCENT[q.aett] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/runes/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.rune_char}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/runes/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} (${r.rune_char}) — Elder Futhark rune meaning`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/runes/${slug}" />
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
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .glyph { font-size: 1.1em; vertical-align: -2px; padding-right: 14px; color: var(--c2); }
  .aett-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
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
  .reading-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .reading-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .reading-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px; }
  .reading-card.up { border-left: 4px solid var(--c1); }
  .reading-card.rev { border-left: 4px solid #8b8779; }
  .reading-card .lbl { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .reading-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.6; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px; padding: 14px 18px; }
  .ctx-card.love { border-left: 4px solid #d68aa0; }
  .ctx-card.work { border-left: 4px solid #5a6cb8; }
  .ctx-card .lbl { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .ctx-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; margin: 8px 0; }
  .panel.gift { border-left: 4px solid var(--c1); }
  .panel.shadow { border-left: 4px solid #d63d4d; }
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
  .other-runes { margin: 36px 0 22px; }
  .other-runes h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .runes-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  @media (max-width: 700px) { .runes-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 460px) { .runes-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; color: var(--c2); }
  .ph-mini .name { font-size: 11px; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/runes">all 24 runes</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Elder Futhark</div>
    <span class="aett-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.rune_char}</span>${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>position ${r.position} of 24</span>
      <span>sound: ${escapeHtml(r.sound)}</span>
      <span>${escapeHtml(r.aett)}'s aett</span>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.name)} means</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">⬆️</span>upright &amp; reversed</h2>
    <div class="reading-grid">
      <div class="reading-card up">
        <div class="lbl">upright</div>
        <p>${escapeHtml(r.upright)}</p>
      </div>
      <div class="reading-card rev">
        <div class="lbl">reversed / merkstave</div>
        <p>${escapeHtml(r.reversed)}</p>
      </div>
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

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this rune teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the rune turns against you</h3>
      <p>${escapeHtml(r.the_shadow)}</p>
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
        <div class="pair-text">Sign whose energy aligns with this rune.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after pulling ${escapeHtml(r.name)}</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading that interprets the runes for *your* life</h2>
      <p>The meaning above is general. A <strong>personal reading</strong> looks at *your* chart, *your* current season, and the specific rune-pull (or 3-rune spread) you bring — and tells you what this rune is actually saying *to you*. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-runes">
      <h3>other runes in the futhark</h3>
      <div class="runes-grid">
        ${otherRunesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/runes">all 24 runes</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function runeIndexHTML(): string {
  const aettSections = (['freyr', 'hagal', 'tyr'] as const).map((aett) => {
    const accent = AETT_ACCENT[aett]
    const items = RUNES.filter((r) => r.aett === aett).map((r) => {
      return `<a href="/gab44/runes/${r.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${r.rune_char}</span>
          <span class="pos">${r.position}/24</span>
        </div>
        <div class="name">${escapeHtml(r.name)}</div>
        <div class="sound">sound: ${escapeHtml(r.sound)}</div>
        <div class="teaser">${escapeHtml(r.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="aett-section">
      <h2 class="aett-h" style="--c1:${accent.c1};--c2:${accent.c2}">${escapeHtml(accent.label)}</h2>
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
<title>Elder Futhark Runes — All 24 Meanings · Upright, Reversed, In Love &amp; Work · gab44 ✨</title>
<meta name="description" content="All 24 Elder Futhark runes explained: meaning, upright, reversed, in love, in work, the gift, the shadow, pair-with chakra/sound/crystal, key questions. Hand-written, warm. Norse divination for the modern seeker." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/runes" />
<meta property="og:title" content="Elder Futhark — All 24 Runes Explained · gab44" />
<meta property="og:description" content="Fehu to Othala, every rune\\'s meaning, upright and reversed, in love and in work — hand-written, warm, honest." />
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
  .aett-section { margin: 28px 0 16px; }
  .aett-h { font-size: 18px; font-weight: 700; color: var(--fg);
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
  .card .glyph { font-size: 38px; color: var(--c2); }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 20px; font-weight: 700; margin-bottom: 2px; }
  .card .sound { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    margin-bottom: 8px; letter-spacing: 0.05em; }
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
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 24 <span class="accent">Elder Futhark runes</span> — meanings, upright, reversed, in love &amp; in work.</h1>
    <p class="sub">From Fehu (cattle, abundance) to Othala (ancestral home). Each rune is a force, a season, a question. Hand-written, warm, honest about the gift and the shadow.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Pulled a rune and want the meaning right now?</strong> Click the rune below — every page has the upright reading, the reversed/merkstave reading, what it means in love and in work, the gift it teaches, the shadow it casts, and pair-with cards for chakra, sound, and zodiac sign.</p>
      <p><strong>The three aetts.</strong> The Futhark is divided into three groups of eight. <em>Freyr\\'s aett</em> (1-8) is the realm of creation, fertility, and the gifts of the gods. <em>Hagal\\'s aett</em> (9-16) is the realm of forces beyond control — initiation, weather, fate. <em>Tyr\\'s aett</em> (17-24) is the human realm — will, partnership, completion. Aett tells you the *register* of the rune; the rune itself tells you the specific note.</p>
      <p><strong>Distinct from tarot.</strong> Where the tarot is a 78-card story spread across kings and seekers, the runes are 24 *forces* — closer to elements than to characters. Many readers use both: tarot for the narrative, runes for the weather.</p>
    </div>

    ${aettSections}

    <div class="reading-strip">
      <h2>Pulled a rune and want it read in the context of *your* life?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 reading interprets your rune (or 3-rune spread) in the context of your chart and current season. <a href="/gab44/reading?ref=rune-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
