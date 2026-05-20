// Chinese Zodiac SEO funnel — /gab44/chinese (index) + /gab44/chinese/{slug}
// (12 animal guides: rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey,
// rooster, dog, pig). Targets a distinct, very-high-volume keyword cluster
// completely separate from Western astrology — Chinese New Year searches alone
// move 10M+ queries each January, and "year of the {animal}", "{animal} personality",
// "{animal} compatibility", "{animal} love", "{animal} 2026 horoscope" are evergreen
// year-round. Pulls in a global audience (especially Asia, Asian diaspora, and
// the substantial Western Chinese-zodiac-curious audience) that Western astrology
// pages don't capture. Distinct from Western astrology — the Chinese zodiac follows
// a 12-year animal cycle (not a 12-month sign cycle), and every animal carries one
// of the 5 elements (Wood, Fire, Earth, Metal, Water).
//
// Each animal guide is ~700-800 words across 9 sections (meaning, personality,
// gifts, shadows, in love, in career, lucky/unlucky, best matches, the year ahead).
// Cross-funnels into BOTH revenue lanes — every page links to /healing audio
// (Phase 1A) AND to /gab44/reading?ref=chinese-{slug} ($9 Phase 1D). Routes
// BEFORE the bare /gab44/:sign daily route to avoid Hono RegExpRouter greedy-match.
// Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface ChineseZodiacProfile {
  slug: string
  name: string                           // "Rat", "Ox", "Tiger"
  emoji: string                          // 🐀 🐂 🐅
  position_in_cycle: number              // 1..12
  element: 'wood' | 'fire' | 'earth' | 'metal' | 'water'  // fixed element of the animal
  yin_yang: 'yin' | 'yang'
  recent_years: string                   // "1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032"
  hours: string                          // "11 PM – 1 AM" (each animal rules 2 hours)
  one_liner: string
  meaning: string                        // big paragraph
  personality: string
  gifts: [string, string, string]
  shadows: [string, string, string]
  in_love: string
  in_career: string
  lucky_colors: string
  lucky_numbers: string
  unlucky: string
  best_matches: [string, string, string]   // animal slugs
  worst_match: string                      // animal slug
  the_year_ahead: string                   // general 2026/forward outlook
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string             // /healing/script/{slug} → letting-go|abundance|anxiety|sleep|deep-healing
  pair_with_crystal: string
  key_questions: [string, string, string]
}

export const CHINESE_ZODIAC: ChineseZodiacProfile[] = [
  {
    slug: 'rat',
    name: 'Rat',
    emoji: '🐀',
    position_in_cycle: 1,
    element: 'water',
    yin_yang: 'yang',
    recent_years: '1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032',
    hours: '11 PM – 1 AM (the hour of the Rat — the very start of the new day)',
    one_liner: 'The clever survivor. Quick, resourceful, and always two moves ahead.',
    meaning: 'The Rat is the first animal of the Chinese zodiac — and the legend says it earned that place by hitching a ride on the Ox\'s back across the river, then leaping off at the last second to cross the finish line first. That story is the Rat in a single image: not the strongest, not the loudest, but the most clever, the most opportunistic, and the most willing to use what others overlook. People born in Rat years are quick-minded, observant, charming when they want to be, and almost always ten steps ahead in any social situation. They are the natural networkers, hustlers, and small-business minds of the zodiac — the friend who somehow knows everyone, the colleague who somehow always has the inside info, the partner who notices everything. Underneath the charm is a deeply private survival instinct: Rats trust slowly, hold their cards close, and remember every kindness and every slight.',
    personality: 'Quick, alert, and adaptable. Rats read rooms in seconds and adjust their pitch accordingly. They\'re ambitious without being loud about it — most successful Rats look like they got lucky from the outside, while the Rat themselves knows they were laying groundwork for years. Their humor is sharp and observational. Their loyalty, once given, is fierce.',
    gifts: [
      'Sharp intelligence and pattern-spotting — they see opportunities others miss.',
      'Social charm — Rats can talk to anyone, from kings to street vendors, and make them feel seen.',
      'Resilience — they recover from setbacks faster than almost anyone in the zodiac.'
    ],
    shadows: [
      'Opportunism that crosses into manipulation — using people without admitting they\'re using them.',
      'Hoarding — money, secrets, contacts. The Rat\'s deep belief that scarcity is just around the corner.',
      'Hypercriticality — Rats see flaws so quickly they sometimes forget to also see the whole.'
    ],
    in_love: 'Rats fall hard but slowly. They want a partner who is brilliant company first, romantic second — long, late conversations matter more to them than flowers. They\'re generous with their attention but not always with their inner life; the partner who finally gets the Rat to open up is the partner the Rat keeps. They protect what they love fiercely and quietly. Ratty jealousy is real but rarely flares up — it goes underground and runs strategy instead.',
    in_career: 'Rats thrive in roles that reward intelligence, networks, and adaptability — entrepreneurs, journalists, traders, marketers, agents, lawyers, intelligence work. They get bored fast in predictable jobs. They\'re excellent under pressure and in fast-moving fields. Watch for: micromanaging out of distrust, and refusing to delegate the parts they secretly think only they can do well.',
    lucky_colors: 'Blue, gold, green',
    lucky_numbers: '2 and 3 — combinations like 23, 32, 200, 300',
    unlucky: 'The colors yellow and brown; the numbers 5 and 9; due-south directions',
    best_matches: ['ox', 'dragon', 'monkey'],
    worst_match: 'horse',
    the_year_ahead: 'Rats do their best work during Ox years (the partner from the original race), Dragon years (shared ambition), and their own year. The Rat\'s 60-year cycle peaks in their own year combined with their birth element — an opportunity to launch the venture, write the book, or make the big move. In off years, the Rat\'s job is to listen more than they speak and bank the insight for later.',
    pair_with_chakra: 'Sacral chakra — for the Rat\'s creative cunning and resourcefulness; also for grounding the survival anxiety that drives the hoarding.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance Affirmations — to soften the scarcity belief that drives the Rat\'s hoarding.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine or Pyrite — both anchor the Rat\'s ambition into honest, sustained work.',
    key_questions: [
      'Where am I being clever when what the situation is asking for is honest?',
      'What am I hoarding — money, secrets, or attention — out of an old fear that doesn\'t fit my life anymore?',
      'Who in my life knows the real me, not the version I\'m strategising in front of?'
    ]
  },
  {
    slug: 'ox',
    name: 'Ox',
    emoji: '🐂',
    position_in_cycle: 2,
    element: 'earth',
    yin_yang: 'yin',
    recent_years: '1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033',
    hours: '1 AM – 3 AM (the deepest hour of the night — the steady labour beneath the surface)',
    one_liner: 'The patient strength. Slow, honest, immovable — and the most reliable person you will ever know.',
    meaning: 'The Ox is the second animal of the Chinese zodiac — and the legend says the Ox should have been first, except the clever Rat hitched a ride and then leapt off ahead. The Ox\'s reaction in the legend is the Ox in life: not bitter, just steady. People born in Ox years are the patient, hard-working, deeply reliable backbone of any room they\'re in. They are not the flashiest, not the loudest, not the cleverest — but they are the ones who finish what they start, who keep their word, and who carry the load when it matters. The world quietly runs on Oxen. Their love is slow to build and slow to leave; their work is slow to start and impossible to stop.',
    personality: 'Steady, methodical, honest to a fault. Oxen value loyalty, fairness, and a job done right. They\'re not naturally social butterflies — they prefer small circles of trusted people to crowds. They have a long fuse but a real one; once provoked seriously, an Ox will hold a grudge for years. Their humor is dry and often surprises people who assumed they didn\'t have one.',
    gifts: [
      'Endurance — Oxen can outwork almost anyone, and they don\'t need recognition to keep going.',
      'Reliability — when an Ox commits, the thing happens. Not maybe. The thing happens.',
      'Practical wisdom — they\'re not impressed by trends or theories; they trust what they can build with their hands.'
    ],
    shadows: [
      'Stubbornness that crosses into rigidity — the Ox can dig in long after a position has stopped serving them.',
      'Slow to forgive — small slights get filed away and remembered for years.',
      'Conservatism that becomes resistance to any change, even good change.'
    ],
    in_love: 'Oxen are the most loyal partners in the zodiac. They take love seriously, build it slowly, and once committed, they are committed. They show love through steady acts — providing, fixing, being reliably there — more than through grand gestures or words. Their partner needs to learn to read the language. Ox jealousy is rare but their wounded pride is real; an Ox who has been betrayed will close the door and not open it again.',
    in_career: 'Oxen excel in fields that reward patience, craftsmanship, and steady output — agriculture, construction, engineering, medicine, traditional trades, finance, civil service. They build careers slowly and end up in senior, trusted positions because they were the ones who actually did the work for years while others were performing it. Watch for: refusing help, working past exhaustion, and assuming everyone else should also work as hard.',
    lucky_colors: 'Yellow, white, green',
    lucky_numbers: '1 and 4 — combinations like 14, 41, 144',
    unlucky: 'The colors blue; the numbers 3 and 6; due-north directions',
    best_matches: ['rat', 'snake', 'rooster'],
    worst_match: 'goat',
    the_year_ahead: 'Oxen find their stride in Snake years (depth + patience) and Rooster years (precision + work ethic). In their own year, the energy is intense — Oxen tend to overwork in their own years and need to be reminded that rest is part of the project. The off years are excellent times for an Ox to invest, save, and let the slow returns compound.',
    pair_with_chakra: 'Root chakra — the Ox is one of the most root-grounded animals in the zodiac; this pairing supports their patience and their connection to body and land.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing meditation — to release the held tension Oxen carry from years of bearing the weight.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Tiger\'s Eye or Carnelian — for grounded courage and to support the Ox\'s steady forward motion.',
    key_questions: [
      'Where am I digging in on a position that has already stopped serving me?',
      'Who has been waiting for me to ask for help, and what would change if I finally did?',
      'What grudge am I still carrying that I could lay down without losing anything I actually need?'
    ]
  },
  {
    slug: 'tiger',
    name: 'Tiger',
    emoji: '🐅',
    position_in_cycle: 3,
    element: 'wood',
    yin_yang: 'yang',
    recent_years: '1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034',
    hours: '3 AM – 5 AM (the hour of the Tiger — when the world is dark but the predator is awake)',
    one_liner: 'The brave leader. Magnetic, courageous, and impossible to ignore.',
    meaning: 'The Tiger is the third animal of the Chinese zodiac — and the legend says the Tiger arrived third because, despite being a powerful swimmer, the river\'s currents were rough. People born in Tiger years are natural-born leaders, magnetic personalities, and brave to the point of recklessness. They are the warriors and the entrepreneurs of the zodiac — the friend who organises the trip, the colleague who proposes the audacious plan, the partner who pulls you toward something bigger than you would have done alone. Tigers do not blend in. They walk into a room and the room reorganises around them. Their courage is real and their heart is enormous, but the cost of all that intensity is that Tigers burn through cycles of high energy and total exhaustion, and they often hide their exhaustion until they collapse.',
    personality: 'Bold, charismatic, generous, and emotionally intense. Tigers feel everything 30% more than the people around them — joy, anger, attraction, indignation. They have a strong sense of justice and will go to bat for anyone they perceive as being treated unfairly, sometimes including strangers. Their humor is big, warm, and loud. Their anger is short-lived but storm-strong. They forgive faster than they forget.',
    gifts: [
      'Courage — Tigers will say the thing, do the thing, take the leap when no one else will.',
      'Magnetism — they make the people around them feel braver, more alive, more themselves.',
      'A strong moral compass — Tigers fight for what they believe is right, even when it costs them.'
    ],
    shadows: [
      'Recklessness — the leap that didn\'t need to be taken; the fight that didn\'t need to be picked.',
      'Burnout — Tigers run on adrenaline and crash hard, then refuse to admit they\'ve crashed.',
      'Impatience with caution — the Tiger sometimes mistakes thoughtful people for cowards.'
    ],
    in_love: 'Tigers are passionate, generous, devoted partners — when they\'re in, they\'re completely in. They want a partner who can match their intensity, who can hold their own against the Tiger\'s big personality, and who can also offer the calm shore the Tiger comes back to between adventures. Tigers in unhealthy relationships dim — and a dim Tiger is a sad sight. They need a partner who reminds them how to be themselves. Tiger jealousy can flare hot, but the underlying loyalty is fierce.',
    in_career: 'Tigers thrive in roles that reward courage, leadership, and visible impact — entrepreneurship, military, emergency services, performing arts, sales, journalism, politics, advocacy. They are not happy in jobs that ask them to keep their head down or follow rules they think are stupid. They are excellent crisis-response leaders. Watch for: burning out the team, jumping into the next thing before finishing the last, and refusing to listen to the cautious voices who are actually right.',
    lucky_colors: 'Blue, grey, white, orange',
    lucky_numbers: '1, 3, 4 — combinations like 13, 14, 34',
    unlucky: 'The colors brown; the numbers 6, 7, 8; due-west directions',
    best_matches: ['horse', 'dog', 'pig'],
    worst_match: 'monkey',
    the_year_ahead: 'Tigers find their stride in Horse years (shared fire) and Dog years (loyalty + courage). Their own year is intense — Tigers tend to start too many things in their own year and need a trusted Ox or Goat friend to keep them honest about what to actually finish. The off years are excellent for the Tiger to recover, train, and prepare the pounce.',
    pair_with_chakra: 'Solar Plexus — the chakra of will, fire, and personal power. The Tiger lives here.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief meditation — for the after-burn the Tiger feels but rarely admits.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Tiger\'s Eye (their stone, by name) or Red Jasper — for grounded courage.',
    key_questions: [
      'What am I about to leap into that one quieter voice has been asking me to slow down on?',
      'Where have I been performing strength because I\'m too tired to admit I\'m exhausted?',
      'Who in my life sees the soft heart behind the big personality, and how do I keep them close?'
    ]
  },
  {
    slug: 'rabbit',
    name: 'Rabbit',
    emoji: '🐇',
    position_in_cycle: 4,
    element: 'wood',
    yin_yang: 'yin',
    recent_years: '1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035',
    hours: '5 AM – 7 AM (the hour of the Rabbit — soft pre-dawn, when the world is still gentle)',
    one_liner: 'The quiet diplomat. Gentle, refined, and quietly brilliant at peace-keeping.',
    meaning: 'The Rabbit is the fourth animal of the Chinese zodiac — and the legend says the Rabbit crossed the river by hopping across stones and floating logs, arriving fourth thanks to a friendly Dragon\'s breath that pushed a log into reach. People born in Rabbit years are gentle, refined, diplomatic, artistically gifted, and deeply attuned to the emotional weather of any room they\'re in. They are the diplomats and the aesthetes of the zodiac — the friend who knows exactly what to say, the colleague who smooths over conflict before it explodes, the partner who notices the painting on the wall and the change in your mood at the same time. Rabbits do not love conflict and will go to extraordinary lengths to avoid it, sometimes including suppressing their own truth for years to keep the peace. Underneath the gentleness is a surprising amount of steel; push a Rabbit too far and you discover they had a clear position the whole time.',
    personality: 'Gentle, refined, observant, and emotionally intelligent. Rabbits read rooms exquisitely and choose their words carefully. They love beauty — their homes are usually beautiful, their clothing tasteful, their food considered. They\'re excellent listeners and trusted confidants. Their humor is dry, witty, and observational. They feel deeply but rarely show it on the surface.',
    gifts: [
      'Diplomacy — Rabbits broker peace between people who couldn\'t talk to each other directly.',
      'Aesthetic intelligence — they make the spaces and the moments around them more beautiful.',
      'Emotional attunement — Rabbits sense what\'s actually being felt under what\'s being said.'
    ],
    shadows: [
      'Conflict-avoidance that becomes self-betrayal — saying yes when the truth is no.',
      'Withdrawal — when overwhelmed, the Rabbit disappears, sometimes for weeks, often without explanation.',
      'Over-refinement — judging others (silently) for not having the same taste, the same standards, the same gentleness.'
    ],
    in_love: 'Rabbits want partners who are kind, refined, emotionally intelligent, and don\'t bring drama into the home. They love through soft, considered acts — the breakfast made just right, the song played at the right moment, the quiet hand held during the hard week. They need beauty around them and time alone in equal measure. Rabbit love is rarely explosive; it\'s a long, beautiful warmth. Their wound: they sometimes stay in a relationship long past its expiration date because leaving requires the conflict they avoid.',
    in_career: 'Rabbits excel in fields that reward refinement, attention to detail, and emotional intelligence — diplomacy, design, the arts, therapy, medicine, hospitality, jewelry, perfumery, museum and curator work, mediation. They are excellent at de-escalating workplace conflict and at building cultures of psychological safety. Watch for: avoiding the difficult conversation that the team needs them to have, and burning out from absorbing everyone else\'s emotions.',
    lucky_colors: 'Red, pink, purple, blue',
    lucky_numbers: '3, 4, 6 — combinations like 34, 36, 46',
    unlucky: 'The colors dark brown, dark yellow; the numbers 1, 7, 8; due-south directions',
    best_matches: ['goat', 'pig', 'dog'],
    worst_match: 'rooster',
    the_year_ahead: 'Rabbits find their stride in Goat years (shared softness) and Pig years (gentle prosperity). Their own year is favourable but quiet — Rabbits in their own year often make a major life shift but in a refined, almost invisible way (a move, a relationship, a career pivot done with no fanfare). The off years are excellent for the Rabbit to refine the craft, decorate the home, and deepen the few friendships that matter most.',
    pair_with_chakra: 'Heart chakra — the Rabbit lives in the soft, kind, attuned heart space.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go meditation — to release the things the Rabbit has been holding inside to keep the peace.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose Quartz or Moonstone — both honour the Rabbit\'s gentle, attuned heart.',
    key_questions: [
      'Where am I saying yes to keep the peace when the truer answer is no?',
      'What conversation have I been avoiding for so long that the avoidance itself has become the problem?',
      'Whose feelings have I been carrying that aren\'t actually mine to carry?'
    ]
  },
  {
    slug: 'dragon',
    name: 'Dragon',
    emoji: '🐉',
    position_in_cycle: 5,
    element: 'earth',
    yin_yang: 'yang',
    recent_years: '1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036',
    hours: '7 AM – 9 AM (the hour of the Dragon — the morning when the world lights up)',
    one_liner: 'The visionary. Powerful, charismatic, and built to do something legendary.',
    meaning: 'The Dragon is the fifth animal of the Chinese zodiac — and the only mythical one. In Chinese culture the Dragon is the most auspicious and beloved of all the zodiac signs; Chinese parents try to time births to fall in Dragon years, and Dragon-year birth rates spike noticeably across Asia. The legend says the Dragon could have come first easily — could fly, could swim — but stopped to make rain for a village in need, then to push a Rabbit\'s log across the river, then was held up at the finish line. The Dragon\'s essence is exactly that: enormous power, used (when at its best) in service of something larger than itself. People born in Dragon years are charismatic, ambitious, visionary, generous, and built for big work. They feel destined for something — and very often they actually are.',
    personality: 'Powerful, magnetic, ambitious, and naturally generous on a big scale. Dragons think in huge arcs — what\'s my life\'s work, what mark do I want to leave, what\'s the legacy. They are the natural founders, prophets, builders of institutions. Their charm is enormous; their ambition is enormous; their generosity is enormous. So is their pride. Dragons rarely admit they were wrong, and almost never admit they were small.',
    gifts: [
      'Vision — Dragons see what could be built before anyone else does.',
      'Charisma — they attract the people, the resources, and the luck needed to build it.',
      'Generosity — at their best, Dragons use their power to lift entire communities, families, and movements.'
    ],
    shadows: [
      'Pride — the Dragon often cannot admit they were wrong, even when everyone else can see it.',
      'Imperiousness — treating people as supporting cast in the Dragon\'s story.',
      'Burnout from carrying too much — the Dragon refuses to delegate the parts they think only they can do.'
    ],
    in_love: 'Dragons love big, generously, and a little theatrically. They want a partner who is impressive in their own right — Dragons cannot be with someone they don\'t deeply admire. They are generous providers, generous lovers, generous gift-givers. The cost: they need to feel admired, and a partner who stops admiring (or who never started) will lose them. Dragon jealousy exists but is rarely small; it tends to express as withdrawal of warmth rather than possessiveness.',
    in_career: 'Dragons thrive in roles that reward vision, leadership, and big work — entrepreneurship, founding institutions, politics, creative directorship, religious or spiritual leadership, fields that require building something from nothing. They make terrible middle managers. They are at their best when given a big mountain and told to climb it. Watch for: scope creep into too many ventures at once, refusing to listen to dissent, and confusing their own ambition with everyone else\'s.',
    lucky_colors: 'Gold, silver, grey-white',
    lucky_numbers: '1, 6, 7 — combinations like 16, 17, 67',
    unlucky: 'The colors blue, green; the numbers 3, 8, 9; due-northwest directions',
    best_matches: ['rat', 'monkey', 'rooster'],
    worst_match: 'dog',
    the_year_ahead: 'Dragons find their stride in Monkey years (shared cleverness, vision) and Rooster years (the discipline the Dragon needs). Their own year is enormously powerful — Dragons in their own year often launch the big thing, found the company, write the book, get married. Off years are for the Dragon to deepen, study, and build the team they\'ll need for the next big move.',
    pair_with_chakra: 'Throat chakra — the Dragon\'s gift is voice; this pairing supports the Dragon in speaking what they see.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Abundance Affirmations — to remind the Dragon that abundance is shared, not hoarded.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine, Pyrite, or Lapis Lazuli — all honour the Dragon\'s leadership and big-vision energy.',
    key_questions: [
      'Where has my pride been keeping me from a truth that everyone else can already see?',
      'Who in my life have I been treating as supporting cast when they are a leading actor in their own story?',
      'What is the legacy I am actually building, and is it the one I would want my grandchildren to inherit?'
    ]
  },
  {
    slug: 'snake',
    name: 'Snake',
    emoji: '🐍',
    position_in_cycle: 6,
    element: 'fire',
    yin_yang: 'yin',
    recent_years: '1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037',
    hours: '9 AM – 11 AM (the hour of the Snake — when the sun warms the rocks)',
    one_liner: 'The wise mystic. Quiet, deep, and sees what no one else does.',
    meaning: 'The Snake is the sixth animal of the Chinese zodiac — and the legend says the Snake hitched a ride in the Horse\'s hoof, then slithered out at the finish line and startled the Horse so badly it reared back, letting the Snake cross sixth. That story shows the Snake\'s essence: quiet, strategic, and absolutely unbothered by appearing first. People born in Snake years are deeply intuitive, quietly brilliant, mysterious, and natural keepers of secrets. They are the philosophers, mystics, and strategic thinkers of the zodiac — the friend who says little but says it with surgical precision, the colleague who sees the whole game three moves ahead while everyone else is reacting to the last move, the partner who remembers everything you ever told them and never brings it up unless it matters. Snakes are not flashy. They are deep.',
    personality: 'Quiet, wise, deeply observant, and elegant. Snakes don\'t waste words. They study. They wait. They see patterns in human behavior that other people don\'t notice for years. They\'re drawn to the esoteric — philosophy, psychology, ancient texts, the occult — not as a hobby but as a calling. Their humor is dry and devastating. Their loyalty, given, is a covenant.',
    gifts: [
      'Intuition — Snakes know things they shouldn\'t know, and are right about people in ways that unnerve those people.',
      'Strategic depth — the Snake plays long games and almost always wins them.',
      'Wisdom — Snakes carry hard-won understanding of human nature and offer it sparingly to those who can use it.'
    ],
    shadows: [
      'Secretiveness that becomes deception — keeping cards close becomes lying by omission.',
      'Possessiveness — Snakes who love something hold on to it tightly and quietly, sometimes too long.',
      'Withdrawal into the inner world — months of disappearing inside their own head, leaving the people who love them feeling shut out.'
    ],
    in_love: 'Snakes love deeply, slowly, and possessively. They want a partner who can hold their own depth — someone who can sit in silence with them, who appreciates their mystery, and who doesn\'t demand they perform extraversion they don\'t have. Snake love is private. They will not narrate their relationship to the world, but inside the relationship the devotion is intense. Snake jealousy is real and quiet — they will not shout, but they will watch, and they will remember.',
    in_career: 'Snakes thrive in fields that reward depth, intuition, and strategic thinking — psychology, psychotherapy, philosophy, the occult and esoteric trades, research, intelligence work, finance (especially long-game investing), writing, art that comes from inner depth. They make excellent founders of one quiet, deep business that compounds over decades. Watch for: not asking for the help they need, withholding strategic insight from teammates, and disappearing into the inner world during a crisis.',
    lucky_colors: 'Black, red, yellow',
    lucky_numbers: '2, 8, 9 — combinations like 28, 29, 89',
    unlucky: 'The colors brown, gold, white; the numbers 1, 6, 7; due-northeast directions',
    best_matches: ['ox', 'rooster', 'monkey'],
    worst_match: 'pig',
    the_year_ahead: 'Snakes find their stride in Ox years (the deep work compounds) and Rooster years (precision meets intuition). Their own year is quietly transformational — Snakes in their own year often shed an old skin (a relationship, a profession, a belief) without telling anyone they\'re doing it. The off years are excellent for the Snake to study, save, and watch.',
    pair_with_chakra: 'Third Eye chakra — the seat of intuition. The Snake naturally lives here.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Sleep meditation — for the Snake\'s natural rhythm of long inner cycles and deep rest.',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Obsidian, Labradorite, or Amethyst — all support the Snake\'s deep inner sight.',
    key_questions: [
      'What am I keeping secret because it\'s wise to, and what am I keeping secret because I\'m afraid to share?',
      'Where has my long game become an excuse for not making the move now?',
      'Who in my life has been waiting for me to come out of the inner world and be present, and how long have they been waiting?'
    ]
  },
  {
    slug: 'horse',
    name: 'Horse',
    emoji: '🐎',
    position_in_cycle: 7,
    element: 'fire',
    yin_yang: 'yang',
    recent_years: '1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038',
    hours: '11 AM – 1 PM (the hour of the Horse — the bright noon hour)',
    one_liner: 'The free spirit. Energetic, independent, and impossible to cage.',
    meaning: 'The Horse is the seventh animal of the Chinese zodiac — and the legend says the Horse came seventh because they were spooked at the finish line by a Snake hidden in their hoof. The story captures the Horse perfectly: powerful, fast, confident, and easily spooked into reactivity. People born in Horse years are energetic, independent, social, adventurous, and deeply allergic to being controlled. They are the wanderers, the entrepreneurs of freedom, the friend who texts you from a different country every six months, the colleague who quits the safe job to start the wild thing. Horses run on movement — physical, emotional, geographical. A penned-up Horse is a sad and reactive Horse. A Horse with room to run is a luminous one.',
    personality: 'Energetic, optimistic, social, and freedom-loving. Horses are not subtle — they say what they think, they go where they want, they love the people they love openly. They\'re fantastic in groups and need a lot of social input to feel alive. Their humor is generous, big, and immediate. They\'re generally honest to the point of bluntness. They forgive fast and rarely hold grudges, mostly because they\'re already on to the next thing.',
    gifts: [
      'Energy — Horses bring a room to life; their enthusiasm is contagious.',
      'Courage — they\'ll try the new thing, take the leap, change continents on a hunch.',
      'Honesty — Horses tell you the truth, even when it\'s uncomfortable, because lying takes more energy than they have.'
    ],
    shadows: [
      'Restlessness that becomes flightiness — leaving the relationship, the job, the place just before the deeper work would have started.',
      'Reactivity — Horses spook easily and lash out, then forget they did it five minutes later.',
      'Allergy to commitment — sometimes confusing freedom with refusal to root.'
    ],
    in_love: 'Horses love passionately and need a partner who understands they need room to run. The partner who tries to cage a Horse loses them. The partner who runs alongside them (literally and figuratively) keeps them. Horses fall in love quickly and out of love just as quickly when they feel constrained. Horse love at its best is exhilarating, generous, and a little wild. Horse love that has settled into deep mutual freedom is one of the most beautiful relationships in the zodiac.',
    in_career: 'Horses thrive in roles that reward energy, freedom, travel, and bold action — sales, performing arts, sports, journalism, adventure tourism, founding companies, anything involving travel or new geographies, anything in the public eye. They make terrible cubicle workers. They are excellent in fast-moving, high-energy environments. Watch for: jumping ship just before the breakthrough, making impulsive financial decisions, and burning bridges that they\'ll wish they hadn\'t burned.',
    lucky_colors: 'Yellow, green',
    lucky_numbers: '2, 3, 7 — combinations like 23, 27, 37',
    unlucky: 'The colors blue, white, gold; the numbers 1, 5, 6; due-north directions',
    best_matches: ['tiger', 'goat', 'dog'],
    worst_match: 'rat',
    the_year_ahead: 'Horses find their stride in Tiger years (shared fire) and Dog years (loyal adventure). Their own year is electric — Horses in their own year often relocate, change careers, fall in love, leave a long relationship, or do all four. Off years are for the Horse to choose one of the wild things to actually finish.',
    pair_with_chakra: 'Solar Plexus — fire, will, and the Horse\'s inexhaustible momentum.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief meditation — for the spooked-Horse moments when the energy turns inward as panic.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Carnelian or Red Jasper — for the Horse\'s grounded fire.',
    key_questions: [
      'Where am I about to leave just before the deep root I actually want would have formed?',
      'What spooked me last week, and what is it actually pointing to?',
      'Who in my life has been giving me freedom and waiting patiently for me to also give roots?'
    ]
  },
  {
    slug: 'goat',
    name: 'Goat',
    emoji: '🐐',
    position_in_cycle: 8,
    element: 'earth',
    yin_yang: 'yin',
    recent_years: '1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039',
    hours: '1 PM – 3 PM (the hour of the Goat — the warm afternoon)',
    one_liner: 'The gentle artist. Creative, kind, and quietly strong.',
    meaning: 'The Goat (sometimes Sheep or Ram, depending on translation — the Chinese character covers all three) is the eighth animal of the Chinese zodiac. The legend says the Goat, the Monkey, and the Rooster crossed the river together on a raft they built cooperatively, arriving in that order. People born in Goat years are gentle, artistic, kind, deeply compassionate, and quietly strong in ways that surprise people who underestimated them. They are the artists, the healers, the caregivers, the makers of beauty, the ones who remember everyone\'s birthday and how everyone takes their tea. Goats are often misread as soft because they don\'t lead with force — but a Goat\'s strength is real, just patient. They will hold a position for years, quietly, until the world catches up to them.',
    personality: 'Gentle, creative, empathetic, and soft-spoken. Goats are aesthetically gifted and emotionally deep. They prefer beauty to confrontation, harmony to argument, depth to noise. They tend toward the artistic and the spiritual. Their humor is dry, surprising, and self-deprecating. They forgive easily but they also remember.',
    gifts: [
      'Compassion — Goats feel for people, animals, and causes in ways that move them to real action.',
      'Artistic gift — almost every Goat has a creative practice, even if they downplay it.',
      'Quiet strength — when a Goat has finally decided, the decision is made, and they will not be moved.'
    ],
    shadows: [
      'Indecision — Goats can spend years weighing options that should have been made in a week.',
      'People-pleasing that becomes self-erasure — losing themselves inside the needs of the people they care for.',
      'Pessimism — the Goat\'s sensitivity sometimes flips into seeing the worst-case scenario in everything.'
    ],
    in_love: 'Goats are tender, devoted, deeply loyal partners. They love through small considered acts — the right book left on the bedside table, the favourite meal made on a hard day, the hand on the back during the difficult conversation. They want a partner who is kind, creative, and who can share their love of beauty and quiet. They\'re not allergic to commitment; they are deeply afraid of conflict, so the partner who can hold a difficult conversation gently is the partner who keeps the Goat. Goat jealousy is mostly internal and rarely expressed.',
    in_career: 'Goats thrive in fields that reward creativity, sensitivity, and care — the arts, design, music, healing professions, therapy, social work, hospitality, gardening, food and craft, anything beautiful, anything that helps. They make incredible artists and incredible caregivers. Watch for: undercharging for their work, absorbing the team\'s emotional load until they collapse, and not asserting their boundaries until they\'ve already been crossed.',
    lucky_colors: 'Brown, red, purple',
    lucky_numbers: '3, 9, 4 — combinations like 39, 34, 49',
    unlucky: 'The colors gold, green; the numbers 6, 7, 8; due-southwest directions',
    best_matches: ['rabbit', 'horse', 'pig'],
    worst_match: 'ox',
    the_year_ahead: 'Goats find their stride in Rabbit years (shared softness) and Pig years (gentle prosperity). Their own year is quietly fertile — Goats in their own year often start the artistic project they\'ve been afraid to start, or finally name the relationship boundary they\'ve been weighing for years. Off years are for the Goat to make, to gather, and to be cared for in return.',
    pair_with_chakra: 'Heart chakra — the Goat\'s natural home; soft, attuned, generous.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go meditation — to release the things the Goat has been quietly carrying for everyone else.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose Quartz or Green Aventurine — both honour the Goat\'s tender heart and quiet strength.',
    key_questions: [
      'Whose feelings have I been carrying that aren\'t mine to carry?',
      'Where have I been undercharging — for my work, my time, my care — out of an old story that says I shouldn\'t ask for more?',
      'What artistic or creative thing have I been postponing for so long that the postponement has become a small grief?'
    ]
  },
  {
    slug: 'monkey',
    name: 'Monkey',
    emoji: '🐒',
    position_in_cycle: 9,
    element: 'metal',
    yin_yang: 'yang',
    recent_years: '1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040',
    hours: '3 PM – 5 PM (the hour of the Monkey — sharp, bright, mid-afternoon)',
    one_liner: 'The clever inventor. Quick, witty, and endlessly inventive.',
    meaning: 'The Monkey is the ninth animal of the Chinese zodiac — and one of the most beloved figures in Chinese folklore (the Monkey King, Sun Wukong, is a Monkey-year archetype taken to its mythic extreme). The legend says the Monkey crossed the river by clever cooperation with the Goat and the Rooster on a raft. People born in Monkey years are clever, inventive, witty, mischievous, fast-moving, and natural problem-solvers. They are the engineers, the comedians, the inventors, the friend who can fix anything with whatever\'s in the room, the colleague whose lateral thinking saves the project, the partner who keeps you laughing through the hard week. Monkeys are also slightly dangerous: their cleverness can become trickery, their wit can wound, and their ability to talk their way out of anything can become a habit of avoiding accountability.',
    personality: 'Quick, witty, inventive, and irreverent. Monkeys are mentally hyperactive — they think fast, talk fast, and bore quickly. They love a puzzle, a game, a challenge, a debate. Their humor is sharp, observational, and constant; they can find the absurd in any situation. Their loyalty is real but worn lightly; Monkeys do not perform devotion, they live it.',
    gifts: [
      'Cleverness — Monkeys solve problems other people can\'t even diagnose.',
      'Wit — they make life lighter, funnier, and more bearable for the people around them.',
      'Adaptability — drop a Monkey into any situation and watch them figure it out in three days.'
    ],
    shadows: [
      'Trickery — using cleverness to manipulate when straight talk would have served.',
      'Restless boredom — moving on from people, projects, and places before the deep work has happened.',
      'Wounding wit — using humor as a weapon and pretending it was just a joke.'
    ],
    in_love: 'Monkeys want partners who can keep up — intellectually, conversationally, and energetically. They\'re bored fast by partners who don\'t bring their own ideas, their own jokes, their own world. Monkey love is playful, inventive, and not very performative — the Monkey will not narrate their relationship on social media but they\'ll text you a meme that perfectly captures something only the two of you know. Monkey jealousy is mostly competitive — the Monkey wants to be the most interesting person in their partner\'s life.',
    in_career: 'Monkeys thrive in fields that reward cleverness, problem-solving, and lateral thinking — engineering, technology, comedy, advertising, teaching, journalism, research, design, anything that rewards the ability to see the angle no one else saw. They get bored fast in repetitive work. They\'re excellent in fast-moving, complex, ambiguous environments. Watch for: cutting corners that come back to bite, talking around accountability when they\'ve made a mistake, and being so clever they confuse their team.',
    lucky_colors: 'White, blue, gold',
    lucky_numbers: '4, 9, 1 — combinations like 14, 19, 49',
    unlucky: 'The colors red, pink; the numbers 2, 7, 8; due-southwest directions',
    best_matches: ['rat', 'dragon', 'snake'],
    worst_match: 'tiger',
    the_year_ahead: 'Monkeys find their stride in Rat years (shared cleverness) and Dragon years (vision + invention). Their own year is high-energy — Monkeys in their own year often launch a venture or pivot wildly. Off years are for the Monkey to actually finish one of the brilliant ideas they had in their own year and abandoned.',
    pair_with_chakra: 'Throat chakra — the Monkey\'s gift is quick speech and clever expression.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Anxiety Relief meditation — for the mental hyperactivity that flips into anxiety when the Monkey can\'t turn the brain off.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Fluorite or Clear Quartz — both support mental clarity and focus on what matters.',
    key_questions: [
      'Where have I been clever instead of honest, and who saw through it?',
      'What brilliant idea have I started and abandoned three times now, and what would it look like to actually finish it?',
      'Whose feelings has my wit cut, and have I gone back to make it right?'
    ]
  },
  {
    slug: 'rooster',
    name: 'Rooster',
    emoji: '🐓',
    position_in_cycle: 10,
    element: 'metal',
    yin_yang: 'yin',
    recent_years: '1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041',
    hours: '5 PM – 7 PM (the hour of the Rooster — sunset, the day\'s honest reckoning)',
    one_liner: 'The honest perfectionist. Hard-working, sharp, and unafraid to tell you the truth.',
    meaning: 'The Rooster is the tenth animal of the Chinese zodiac. The legend says the Rooster crossed the river on the same raft as the Goat and the Monkey, arriving tenth. People born in Rooster years are hard-working, sharp-eyed, perfectionist, honest, proud, and the most reliably-on-time people in the zodiac. They are the precision craftspeople, the meticulous editors, the colleagues whose work is always perfect, the friends who tell you the truth even when it stings, the partners who notice the dust on the shelf and the inconsistency in your story. Roosters are not subtle. They have very high standards and they are not shy about applying those standards to themselves and to everyone else. The world quietly improves when there\'s a Rooster in the room — and it can also feel exhausting to be in the room with one when their standards turn into criticism.',
    personality: 'Sharp, honest, hard-working, proud, and meticulous. Roosters notice everything — they see the typo, the misaligned thing, the missed step, the inconsistency. They take pride in their work and in their appearance (Roosters are usually well-groomed and well-dressed). They have a strong sense of right and wrong and will say so. Their humor is dry, observational, and often at the expense of human folly. Their loyalty is real but conditional on respect.',
    gifts: [
      'Excellence — a Rooster\'s work is the best work in the room.',
      'Honesty — they tell you the truth, even when it costs them.',
      'Reliability — Roosters keep their word, show up on time, and finish what they start.'
    ],
    shadows: [
      'Criticism that becomes wounding — the Rooster\'s sharp eye can flatten the people around them.',
      'Pride — the Rooster has a hard time admitting they were wrong.',
      'Perfectionism that becomes paralysis — refusing to ship work that\'s 95% there.'
    ],
    in_love: 'Roosters are loyal, devoted, and proud partners. They want a partner they can be proud of — someone whose work, character, and presentation match the Rooster\'s standards. They love through honesty and through reliable presence. The cost: their criticism, even when delivered with love, can wear a partner down. The Rooster who learns to soften the edges of their truth is the Rooster who keeps the love. Rooster jealousy can be sharp and pointed but they generally trust their partner unless given a real reason not to.',
    in_career: 'Roosters thrive in fields that reward precision, craft, and high standards — surgery, accounting, law, editing, design, military, fine craftsmanship, fashion, food (especially classical cuisine), anything that rewards excellence and gets it. They make excellent senior individual contributors. Watch for: micro-managing, refusing to delegate, and bruising their team with criticism that wasn\'t necessary.',
    lucky_colors: 'Gold, brown, yellow',
    lucky_numbers: '5, 7, 8 — combinations like 57, 58, 78',
    unlucky: 'The colors red; the numbers 1, 3, 9; due-east directions',
    best_matches: ['ox', 'snake', 'dragon'],
    worst_match: 'rabbit',
    the_year_ahead: 'Roosters find their stride in Ox years (shared work ethic) and Snake years (precision + depth). Their own year is high-discipline — Roosters in their own year often launch a high-craft project or finally take the qualification they\'ve been postponing. Off years are for the Rooster to refine their craft, mentor a younger colleague, and (if they can manage it) lower their criticism volume by 20%.',
    pair_with_chakra: 'Solar Plexus — the chakra of will, discipline, and rightful pride. The Rooster lives here.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Letting Go meditation — to release the perfectionism that has tipped into paralysis.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Pyrite or Tiger\'s Eye — for grounded confidence and disciplined work.',
    key_questions: [
      'Whose work or character have I been criticising recently, and was the criticism actually for them — or was it about something I haven\'t made peace with in myself?',
      'Where am I refusing to ship something because it\'s not perfect when shipped-and-good would have served everyone better?',
      'Where is my pride keeping me from an apology that would heal something important?'
    ]
  },
  {
    slug: 'dog',
    name: 'Dog',
    emoji: '🐕',
    position_in_cycle: 11,
    element: 'earth',
    yin_yang: 'yang',
    recent_years: '1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042',
    hours: '7 PM – 9 PM (the hour of the Dog — early evening, the watch hours)',
    one_liner: 'The faithful guardian. Loyal, principled, and the friend who shows up when it matters.',
    meaning: 'The Dog is the eleventh animal of the Chinese zodiac. The legend says the Dog was actually a powerful swimmer and could have come earlier, but stopped to play in the water because the journey was so much fun. The story is the Dog perfectly: capable, principled, loyal, and a little prone to getting distracted by joy. People born in Dog years are loyal, honest, principled, protective, and the friends who always pick up the phone. They are the moral compass of the zodiac — the colleague who calls out the unethical move, the friend who tells you when you\'re betraying yourself, the partner who keeps the relationship honest. Dogs trust slowly; once they trust, they trust completely; betray a Dog\'s trust and the door is closed for life. Dogs also worry — about loved ones, about justice, about whether they\'re doing enough. Worry is the Dog\'s shadow.',
    personality: 'Loyal, honest, principled, and warm-hearted. Dogs are the natural friends and protectors of any group. They have a strong sense of justice and a low tolerance for cruelty, dishonesty, or exploitation. They\'re straightforward — what you see is what you get. Their humor is warm, generous, and rarely at anyone\'s expense. Their love is steady and reliable.',
    gifts: [
      'Loyalty — Dogs do not abandon the people they love, even when it would be easier to.',
      'Integrity — Dogs say the true thing, do the right thing, and don\'t pretend to be other than they are.',
      'Protectiveness — the Dog will physically and emotionally protect their tribe at real cost to themselves.'
    ],
    shadows: [
      'Worry that becomes anxiety — the Dog\'s love manifests as fear for the people they love.',
      'Pessimism — Dogs see the unfair, the cruel, and the wrong easily, and can sink into bleak views of the world.',
      'Self-righteousness — the Dog\'s principles can become a cudgel they use on people who don\'t share them.'
    ],
    in_love: 'Dogs are devoted, loyal, deeply present partners. They want a partner who is honest, kind, and committed — Dogs cannot tolerate dishonesty in their primary relationship. They love steadily, reliably, and protectively. Their love is a kind of home. The cost: their worry can become smothering, and their principles can become rigidity. Dog jealousy is rooted in fear of betrayal more than in possessiveness; the partner who is reliably honest will not see it.',
    in_career: 'Dogs thrive in fields that reward principle, service, and protection — law, medicine, social work, education, public service, journalism (especially investigative), human rights, military, emergency services. They are excellent in roles that involve protecting other people, advocating for the under-served, or holding the line on ethics. Watch for: martyrdom, taking on more than they can carry, and becoming bitter when the world doesn\'t reward integrity the way they wish it would.',
    lucky_colors: 'Green, red, purple',
    lucky_numbers: '3, 4, 9 — combinations like 34, 39, 49',
    unlucky: 'The colors blue, white, gold; the numbers 1, 6, 7; due-northeast directions',
    best_matches: ['tiger', 'rabbit', 'horse'],
    worst_match: 'dragon',
    the_year_ahead: 'Dogs find their stride in Tiger years (shared courage, justice) and Rabbit years (gentle loyalty). Their own year is values-clarifying — Dogs in their own year often leave a job or a friendship that has slowly become incompatible with their integrity. Off years are for the Dog to rest from carrying everyone else\'s weight and remember they are also allowed to be cared for.',
    pair_with_chakra: 'Heart chakra — for the Dog\'s open, loyal, protective heart.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief meditation — for the worry that the Dog confuses with love.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Rose Quartz or Smoky Quartz — Rose Quartz for the loyal heart, Smoky Quartz to ground the worry.',
    key_questions: [
      'Whose worry am I carrying right now that I have confused with love?',
      'Where am I being self-righteous about a position when the kinder move would be to listen first?',
      'Who has been waiting for me to let them care for me back?'
    ]
  },
  {
    slug: 'pig',
    name: 'Pig',
    emoji: '🐖',
    position_in_cycle: 12,
    element: 'water',
    yin_yang: 'yin',
    recent_years: '1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043',
    hours: '9 PM – 11 PM (the hour of the Pig — the soft hours before sleep)',
    one_liner: 'The generous heart. Warm, sincere, and built to enjoy the good things in life.',
    meaning: 'The Pig is the twelfth and final animal of the Chinese zodiac. The legend says the Pig was last because they got hungry, stopped for a meal, then took a nap, and only made it across the river after everyone else had already crossed. The story is the Pig in a single image: warm, generous, sensual, deeply in love with the good things in life, and absolutely not in a rush. People born in Pig years are sincere, generous, warm-hearted, sensual, deeply hospitable, and the friend who keeps the best snacks at their place. They are the connoisseurs of pleasure — food, wine, music, art, beautiful objects, sleep, sex, conversation that lasts past midnight — and they are the most generous hosts in the zodiac. Pigs are also deeply trusting, sometimes naively so; the world is, in the Pig\'s view, a fundamentally good place, and the Pig can be wounded by people who take advantage of that trust.',
    personality: 'Warm, generous, sincere, and pleasure-loving. Pigs love beauty, comfort, food, friendship, and the slow accumulation of a good life. They\'re honest to a fault — Pigs do not strategise, do not manipulate, and assume others don\'t either (this is sometimes their downfall). Their humor is warm and inclusive. Their loyalty is generous and unconditional, sometimes to people who haven\'t earned it.',
    gifts: [
      'Generosity — Pigs give freely of their time, money, food, attention, and home.',
      'Sincerity — there is no performance with a Pig; what you see is what is real.',
      'Capacity for joy — Pigs know how to enjoy a meal, a friend, a moment, a season, and they teach the people around them how.'
    ],
    shadows: [
      'Naivety — trusting people who don\'t deserve it, then being shocked when betrayed.',
      'Indulgence — the love of pleasure can tip into excess, especially around food, drink, or comfort.',
      'Conflict-avoidance — the Pig sometimes lets a bad situation get worse rather than have the hard conversation.'
    ],
    in_love: 'Pigs are generous, devoted, sensual partners. They love through abundant acts — feeding the partner, hosting the partner\'s friends, remembering every anniversary, giving generously of body and attention. They want a partner who is warm, kind, and not a game-player; Pigs are bewildered by relationship games. The cost: Pigs sometimes give too much to partners who give back too little. Pig jealousy is rare; the underlying assumption is "we love each other and that is the situation." The Pig who learns to also receive love is the most thoroughly loved Pig in the world.',
    in_career: 'Pigs thrive in fields that reward warmth, generosity, hospitality, and the senses — hospitality, food and beverage, travel, the arts (especially music), philanthropy, healing professions, sales (the warm relational kind), education, publishing. They are not natural fighters in cutthroat industries. Watch for: undercharging, giving away their work, and not noticing when a colleague is taking credit for what the Pig built.',
    lucky_colors: 'Yellow, grey, brown, gold',
    lucky_numbers: '2, 5, 8 — combinations like 25, 28, 58',
    unlucky: 'The colors red, blue, green; the numbers 1, 7; due-southeast directions',
    best_matches: ['rabbit', 'goat', 'tiger'],
    worst_match: 'snake',
    the_year_ahead: 'Pigs find their stride in Rabbit years (shared softness, beauty) and Goat years (gentle prosperity). Their own year is warm and abundant — Pigs in their own year often consolidate (buy the home, marry the partner, host the celebration). Off years are for the Pig to keep the heart open, choose generously where to direct the love, and learn to also receive.',
    pair_with_chakra: 'Sacral chakra — the chakra of pleasure, sensuality, and the Pig\'s natural relationship to the body and to joy.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance Affirmations — to ground the Pig\'s natural relationship to abundance into honest, healthy receiving.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine, Carnelian, or Sunstone — all warm, abundant stones that match the Pig\'s nature.',
    key_questions: [
      'Where have I been over-trusting someone who has shown me, more than once, that they don\'t deserve it?',
      'What pleasure has tipped from joy into excess, and what would the kinder limit look like?',
      'Who has been giving generously to me that I have been missing because I was so busy giving to others?'
    ]
  }
]

export const CHINESE_ZODIAC_SLUGS = CHINESE_ZODIAC.map((c) => c.slug)
const CHINESE_BY_SLUG: Record<string, ChineseZodiacProfile> = Object.fromEntries(
  CHINESE_ZODIAC.map((c) => [c.slug, c])
)

export function isChineseZodiacSlug(s: string): boolean {
  return s in CHINESE_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Element-tinted accent — the 5 traditional Chinese elements
//   wood  = green (growth)
//   fire  = warm red-orange (energy)
//   earth = ochre / sand (steadiness)
//   metal = silver / cool grey (precision)
//   water = deep blue (flow, depth)
const ELEMENT_ACCENT: Record<ChineseZodiacProfile['element'], { c1: string; c2: string }> = {
  wood:  { c1: '#7ab06a', c2: '#3d7a4a' },
  fire:  { c1: '#e07b4d', c2: '#b8401f' },
  earth: { c1: '#d6a85a', c2: '#9c742b' },
  metal: { c1: '#b8b5b0', c2: '#7d7a73' },
  water: { c1: '#5a8ec6', c2: '#2a5a8a' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function chinesePageHTML(slug: string): string {
  const c = CHINESE_BY_SLUG[slug]
  if (!c) return ''
  const accent = ELEMENT_ACCENT[c.element]
  const readingHref = `/gab44/reading?ref=chinese-${slug}`

  const title = `Year of the ${c.name} — Personality, Love, Career, ${c.element[0].toUpperCase() + c.element.slice(1)} Element · gab44 ✨`
  const description = `Year of the ${c.name} (${c.recent_years.split(', ').slice(-3).join(', ')}): ${c.meaning.substring(0, 140)}... Personality, gifts, shadows, in love, in career, lucky/unlucky, best matches, the year ahead. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Chinese Zodiac', item: `${SITE_URL}/gab44/chinese` },
          { '@type': 'ListItem', position: 3, name: `Year of the ${c.name}`, item: `${SITE_URL}/gab44/chinese/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Year of the ${c.name} — meaning, personality, love, career, the year ahead`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/chinese/${slug}`,
        about: `Year of the ${c.name} Chinese zodiac, ${c.element} element, personality, compatibility, love`
      }
    ]
  })

  const otherAnimalsHtml = CHINESE_ZODIAC.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const acc = ELEMENT_ACCENT[q.element]
    return `<a class="ph-mini${cur}" href="/gab44/chinese/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  const matchesHtml = c.best_matches.map((m) => {
    const animal = CHINESE_BY_SLUG[m]
    return `<a class="match-chip" href="/gab44/chinese/${m}"><span class="sym">${animal.emoji}</span><span>${escapeHtml(animal.name)}</span></a>`
  }).join('\n        ')

  const worstAnimal = CHINESE_BY_SLUG[c.worst_match]

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chinese/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/chinese/${slug}" />
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
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .arch { font-size: 17px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span { background: var(--bg-2); padding: 5px 12px; border-radius: 999px; }
  h2 {
    font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg);
    letter-spacing: -0.01em;
  }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 36px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel.gifts  { border-left: 4px solid #2e9e6a; }
  .panel.shadows { border-left: 4px solid #d63d4d; }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel ul { margin: 0; padding-left: 18px; }
  .panel li { font-size: 14px; color: var(--fg); margin-bottom: 6px; }
  .panel li:last-child { margin-bottom: 0; }
  .lucky-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 18px 0 8px; }
  @media (max-width: 600px) { .lucky-grid { grid-template-columns: 1fr; } }
  .lucky-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px;
  }
  .lucky-card .label {
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px;
  }
  .lucky-card .val { font-size: 13px; color: var(--fg); }
  .matches-row { display: flex; gap: 10px; flex-wrap: wrap; margin: 14px 0 8px; }
  .match-chip { display: inline-flex; align-items: center; gap: 8px;
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 999px;
    padding: 8px 16px; text-decoration: none; color: var(--fg);
    font-size: 14px; font-weight: 600; transition: border-color 0.15s; }
  .match-chip:hover { border-color: var(--c1); }
  .match-chip .sym { font-size: 18px; }
  .worst-row {
    background: var(--bg-2); border-left: 3px solid #d63d4d; padding: 12px 18px;
    border-radius: 8px; margin: 14px 0 8px; font-size: 14px; color: var(--fg-dim);
  }
  .worst-row a { color: var(--accent); text-decoration: none; font-weight: 600; }
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
  .questions { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .questions h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); font-style: italic; }
  .questions li:last-child { margin-bottom: 0; }
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
  .other-animals { margin: 36px 0 22px; }
  .other-animals h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .animals-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  @media (max-width: 600px) { .animals-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini.current { border-color: var(--c1); border-width: 2px; }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
  .related-strip {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
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
      <a href="/gab44/chinese">all 12 animals</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ chinese zodiac · ${escapeHtml(c.element)} element</div>
    <h1><span class="sym">${c.emoji}</span>Year of the ${escapeHtml(c.name)}</h1>
    <p class="arch">${escapeHtml(c.recent_years)}</p>
    <p class="sub">${escapeHtml(c.one_liner)}</p>
    <div class="meta-strip">
      <span>element · ${escapeHtml(c.element)}</span>
      <span>energy · ${escapeHtml(c.yin_yang)}</span>
      <span>position · ${c.position_in_cycle} of 12</span>
      <span>hour · ${escapeHtml(c.hours.split(' (')[0])}</span>
    </div>

    <article class="core-card">
      <span class="label">what the ${escapeHtml(c.name)} means</span>
      <p class="text">${escapeHtml(c.meaning)}</p>
    </article>

    <h2><span class="icon">✨</span>personality</h2>
    <p>${escapeHtml(c.personality)}</p>

    <div class="two-col">
      <div class="panel gifts">
        <h3>✓ gifts</h3>
        <ul>
          <li>${escapeHtml(c.gifts[0])}</li>
          <li>${escapeHtml(c.gifts[1])}</li>
          <li>${escapeHtml(c.gifts[2])}</li>
        </ul>
      </div>
      <div class="panel shadows">
        <h3>~ shadows</h3>
        <ul>
          <li>${escapeHtml(c.shadows[0])}</li>
          <li>${escapeHtml(c.shadows[1])}</li>
          <li>${escapeHtml(c.shadows[2])}</li>
        </ul>
      </div>
    </div>

    <h2><span class="icon">💞</span>in love</h2>
    <p>${escapeHtml(c.in_love)}</p>

    <h2><span class="icon">💼</span>in career</h2>
    <p>${escapeHtml(c.in_career)}</p>

    <h2><span class="icon">🎯</span>best matches</h2>
    <div class="matches-row">
      ${matchesHtml}
    </div>
    <div class="worst-row">
      <strong>Trickiest pairing:</strong> <a href="/gab44/chinese/${c.worst_match}">${worstAnimal.emoji} ${escapeHtml(worstAnimal.name)}</a> — different rhythms, different priorities. Doesn\'t mean impossible, just means more conscious work.
    </div>

    <h2><span class="icon">🍀</span>lucky &amp; unlucky</h2>
    <div class="lucky-grid">
      <div class="lucky-card">
        <div class="label">colors</div>
        <div class="val">${escapeHtml(c.lucky_colors)}</div>
      </div>
      <div class="lucky-card">
        <div class="label">numbers</div>
        <div class="val">${escapeHtml(c.lucky_numbers)}</div>
      </div>
      <div class="lucky-card">
        <div class="label">avoid</div>
        <div class="val">${escapeHtml(c.unlucky)}</div>
      </div>
    </div>

    <h2><span class="icon">🗓️</span>the year ahead</h2>
    <p>${escapeHtml(c.the_year_ahead)}</p>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${c.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(c.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(c.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${c.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(c.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(c.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(c.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(c.pair_with_crystal)}</div>
      </div>
    </div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(c.key_questions[0])}</li>
        <li>${escapeHtml(c.key_questions[1])}</li>
        <li>${escapeHtml(c.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> ${escapeHtml(c.name)} year</h2>
      <p>This page describes the ${escapeHtml(c.name)} for everyone born in those years. A <strong>personal reading</strong> blends your Chinese zodiac (animal + element) with your Western chart for a portrait that\'s actually <em>you</em> — not a template. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/chinese">all 12 Chinese zodiac animals</a> · <a href="/gab44/about">12 Western signs</a> · <a href="/gab44/chakras">7 chakras</a> · <a href="/healing">healing meditations</a>.
    </div>

    <section class="other-animals">
      <h3>The full Chinese zodiac cycle</h3>
      <div class="animals-grid">
        ${otherAnimalsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function chineseIndexHTML(): string {
  const cards = CHINESE_ZODIAC.map((c) => {
    const accent = ELEMENT_ACCENT[c.element]
    return `<a href="/gab44/chinese/${c.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${c.emoji}</span>
        <span class="day">${c.position_in_cycle}/12 · ${escapeHtml(c.element)}</span>
      </div>
      <div class="name">${escapeHtml(c.name)}</div>
      <div class="when">${escapeHtml(c.recent_years.split(', ').slice(-3).join(' · '))}</div>
      <div class="teaser">${escapeHtml(c.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Chinese Zodiac — All 12 Animals, Personality &amp; Compatibility · gab44 ✨</title>
<meta name="description" content="A friendly, complete guide to the 12 animals of the Chinese zodiac: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig. Personality, gifts, shadows, in love, in career, lucky/unlucky, best matches. Each one paired with chakra + healing sound + crystal." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/chinese" />
<meta property="og:title" content="Chinese Zodiac — All 12 Animals · gab44" />
<meta property="og:description" content="Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig — what each animal means, who they love, who they clash with, the year ahead." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 680px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 800px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .sym { font-size: 38px; }
  .card .day { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; }
  .card .when { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px;
    letter-spacing: 0.05em; font-weight: 600; font-family: 'JetBrains Mono', monospace; }
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
      <a href="/gab44/about">12 Western signs</a>
      <a href="/gab44/chakras">7 chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 animals of the <span class="accent">Chinese zodiac</span>.</h1>
    <p class="sub">A 12-year cycle, each year ruled by an animal carrying one of five elements (Wood, Fire, Earth, Metal, Water). Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig — each one with its own personality, its own gifts and shadows, its own loves, its own clashes. Find your year, find your animal.</p>

    <div class="intro">
      <h3>How the Chinese zodiac works</h3>
      <p><strong>The Chinese zodiac runs on a 12-year cycle.</strong> Each year is ruled by one animal — and your animal is determined by your year of birth (more precisely, by Chinese New Year, which usually falls between mid-January and mid-February). If you were born in early January or early February, check the exact Chinese New Year date for your year — you might be the animal of the previous year.</p>
      <p><strong>Each animal carries one of the 5 traditional elements</strong> — Wood, Fire, Earth, Metal, Water — that flavors how it shows up. The Tiger and the Rabbit are both Wood animals (growth, spring). The Snake and the Horse are both Fire (passion, summer). The Ox, Dragon, Goat, and Dog are all Earth (steadiness, between-seasons). The Monkey and the Rooster are both Metal (precision, autumn). The Rat and the Pig are both Water (depth, winter).</p>
      <p><strong>The Chinese zodiac is distinct from Western astrology</strong> but they pair beautifully — your Western sign is the personality you act out day to day, your Chinese animal is the deeper temperament you bring into a whole year of someone\'s life. A $9 personal reading can blend both.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want your Chinese animal blended with your Western chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading combines your animal + element + birth chart for a real portrait. <a href="/gab44/reading?ref=chinese-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
