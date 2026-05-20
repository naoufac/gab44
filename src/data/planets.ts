// Planets in Astrology SEO funnel — /gab44/planets (index, doubles as "how to
// read your birth chart" intro) + /gab44/planets/{slug} (10 planet pages: sun,
// moon, mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto). Targets
// foundational evergreen keywords: "sun in astrology meaning", "what does my
// venus sign mean", "mars in astrology", "saturn return", "pluto generations",
// "moon meaning astrology", "jupiter return". Completes the foundational stack
// alongside /gab44/about (signs), /gab44/houses (houses). Routes warm traffic
// to $9 reading via ?ref=planet-{slug}. Zero LLM cost — content baked into
// src/gab44/planets.ts.

import { SITE_URL } from '@/lib/identity'

export interface PlanetProfile {
  slug: string             // sun, moon, mercury, ...
  name: string             // 'The Sun', 'The Moon', 'Mercury'
  symbol: string           // ☉ ☽ ☿ ♀ ♂ ♃ ♄ ♅ ♆ ♇
  emoji: string            // larger emoji for cards
  rules: string            // one-line: what it rules
  rules_signs: string      // signs ruled in modern astrology
  rules_houses: string     // associated houses
  speed: string            // orbital cadence — quick context for transits
  generation_or_personal: string // "personal planet", "social planet", "generational planet"
  element: string          // for accent gradient
  one_liner: string
  meaning: string          // big paragraph: what this planet IS in your chart
  in_your_chart: string    // how it shows up
  in_a_sign: string        // generally — what the sign placement does
  in_a_house: string       // generally — what the house placement does
  shadow: string           // when it goes badly
  return_or_transit: string // saturn return, jupiter return, mars retrograde, etc.
  what_it_teaches: string  // the lesson
  key_questions: [string, string, string]
}

export const PLANETS: PlanetProfile[] = [
  {
    slug: 'sun', name: 'The Sun', symbol: '☉', emoji: '☀️',
    rules: 'identity, vitality, life force, the conscious self',
    rules_signs: 'Leo',
    rules_houses: '5th house (creativity, romance, children)',
    speed: 'one full zodiac in one year — about a month per sign',
    generation_or_personal: 'personal planet',
    element: 'fire',
    one_liner: 'Who you are, at the center. The light you give off when you forget to perform.',
    meaning: 'The Sun is the center of your chart and the center of you — your core identity, your essential vitality, the version of yourself you have to grow into across a lifetime. When people ask "what\'s your sign?" they mean your Sun sign, because the Sun is the most public, most stable, most you-shaped layer. But the Sun in your birth chart is more than just your zodiac sign: it has a degree, a house, and aspects to other planets that describe how the light moves through you. A strong Sun feels like having a clear inner compass; a wounded Sun (often from a difficult father story) feels like carrying a dimmer that you have to learn to turn back up. The lifelong work of the Sun is to become more fully who you are.',
    in_your_chart: 'Your Sun sign tells you the flavor of your essential self — Aries Sun is initiation, Cancer Sun is care, Capricorn Sun is mastery. Your Sun house tells you where in life you most naturally shine — the 1st house Sun radiates self, the 7th house Sun radiates through partnership, the 10th house Sun radiates through career and public face. Aspects to your Sun show what helps and what blocks the light.',
    in_a_sign: 'The sign colors the expression. A Pisces Sun expresses identity through empathy and imagination; a Capricorn Sun through structure and accomplishment; a Gemini Sun through curiosity and conversation. None is better — they are different shapes the same light takes.',
    in_a_house: 'The house tells you the arena. 1st house Sun = personality is the project; 4th = home and family are the project; 6th = daily craft and service; 10th = career and public legacy; 12th = inner life and the unseen.',
    shadow: 'When the Sun is overrun, you become the role at the cost of the soul — performance instead of presence. When the Sun is under-claimed, you live small, bright but apologetic, waiting for permission to take your own shape.',
    return_or_transit: 'Solar Return — every year on (or near) your birthday, the Sun returns to its exact natal position. The chart cast for that moment is your annual blueprint. Pay attention.',
    what_it_teaches: 'The Sun teaches that being yourself is a vocation, not an indulgence — that the world needs the specific shape of light you are.',
    key_questions: ['Where in my life am I most fully myself?', 'Where do I dim the light to keep someone else comfortable?', 'What would it look like to stop apologizing for the shape I am?']
  },
  {
    slug: 'moon', name: 'The Moon', symbol: '☽', emoji: '🌙',
    rules: 'emotion, mood, instinct, the inner home',
    rules_signs: 'Cancer',
    rules_houses: '4th house (home, family, roots)',
    speed: 'one full zodiac in 27.3 days — about 2.5 days per sign',
    generation_or_personal: 'personal planet',
    element: 'water',
    one_liner: 'How you actually feel — the inner weather, the private home no one else lives in.',
    meaning: 'The Moon is the inner life — your emotional reflexes, your instinctive comforts, the way you reach for safety when life gets loud. Where the Sun is your conscious self, the Moon is your unconscious self; where the Sun is who you are when you are at your best, the Moon is who you are at 3 AM with no one watching. The Moon describes how you receive nurture and how you give it, the early-childhood story you carry, the kind of home (literal and emotional) you need to recover. People who do not understand their Moon often spend years wondering why they keep needing things they "shouldn\'t" need; reading the Moon usually feels like permission to stop apologizing for being human in your specific shape.',
    in_your_chart: 'Your Moon sign describes your emotional core — Aries Moon needs space and action to settle; Cancer Moon needs tenderness and home; Aquarius Moon needs intellectual freedom inside intimacy. Your Moon house describes the arena where your emotional life is most active — 4th house Moon is rooted in home; 7th house Moon is rooted in relationship; 12th house Moon carries inherited or unconscious emotional material.',
    in_a_sign: 'The sign tells you what soothes you and what unsettles you. Earth Moons (Taurus, Virgo, Capricorn) need grounded routine; Water Moons (Cancer, Scorpio, Pisces) need depth and emotional safety; Fire Moons (Aries, Leo, Sagittarius) need passion and movement; Air Moons (Gemini, Libra, Aquarius) need conversation and space.',
    in_a_house: '4th house = home and family; 6th = work-and-care, daily emotional rhythms; 8th = deep merging, intimacy, inheritance; 12th = inner life, dreams, ancestral feeling.',
    shadow: 'A wounded Moon shows up as moodiness without insight, comfort-seeking that becomes avoidance, or a brittle inner home where every emotion is treated as a crisis. The work is friendship with the inner life, not management of it.',
    return_or_transit: 'Lunar Return — every 27.3 days, the Moon returns to its natal position. Each Lunar Return is a small monthly emotional reset — pay attention to which days of the month you reliably feel softer, more inward, more inclined to rest.',
    what_it_teaches: 'The Moon teaches that taking care of yourself in your specific way is not optional — it is how the rest of the chart stays online.',
    key_questions: ['What does my emotional life actually need that I have been refusing to give it?', 'What does home feel like to me, when I am honest?', 'Which old story is my emotional reflex still living inside?']
  },
  {
    slug: 'mercury', name: 'Mercury', symbol: '☿', emoji: '🪶',
    rules: 'mind, communication, learning, travel, exchange',
    rules_signs: 'Gemini and Virgo',
    rules_houses: '3rd (communication, siblings, short trips) and 6th (work, daily routine, health)',
    speed: 'one full zodiac in about 88 days — fast, with 3 retrograde periods per year',
    generation_or_personal: 'personal planet',
    element: 'air',
    one_liner: 'How you think, how you talk, how you learn, how you make sense of the world.',
    meaning: 'Mercury is the mind in motion — how you take information in, how you arrange it, and how you put it back out. Mercury rules conversation, writing, study, short journeys, and any kind of exchange (commerce included; the messenger god is also the trader). Where Mercury sits in your chart describes the speed and shape of your thinking. A Mercury in Gemini is quicksilver, multi-directional, voracious; a Mercury in Capricorn thinks slowly, structurally, and only speaks when something is solid; a Mercury in Pisces thinks in image and intuition rather than words. There is no "smart" placement — there are different kinds of intelligence, each suited to different work.',
    in_your_chart: 'Your Mercury sign tells you how your mind moves; your Mercury house tells you what it most often turns toward. A 3rd house Mercury is built for words and ideas; a 9th house Mercury is built for big-picture meaning and travel; a 6th house Mercury is built for the detail-craft of daily work.',
    in_a_sign: 'Air Mercury (Gemini, Libra, Aquarius) thinks in connection and abstraction. Earth Mercury (Taurus, Virgo, Capricorn) thinks in practical, embodied reality. Water Mercury (Cancer, Scorpio, Pisces) thinks in feeling, image, and pattern. Fire Mercury (Aries, Leo, Sagittarius) thinks in vision and urgency.',
    in_a_house: '3rd = native communicator; 6th = thinks through work and craft; 9th = thinks through philosophy and travel; 11th = thinks in community and group ideas.',
    shadow: 'Wounded Mercury can become anxious overthinking, sharp-tongued speech, mental rigidity, or a difficulty trusting the mind\'s own outputs. The work is to befriend your own thinking instead of fighting it.',
    return_or_transit: 'Mercury retrograde — three times a year, Mercury appears to move backward for about three weeks. Communication, contracts, travel, and tech all get delicate. Best used for review, revision, reconnection — not for launching. (See `/gab44/mercury-retrograde` if we ship it.)',
    what_it_teaches: 'Mercury teaches that the mind is a tool, not the master — and that learning how your mind specifically works is one of the great unlocks of adult life.',
    key_questions: ['How does my mind actually like to receive information — and am I honoring that?', 'Where am I overthinking what my body already knows?', 'What is my mind for — really?']
  },
  {
    slug: 'venus', name: 'Venus', symbol: '♀', emoji: '🌹',
    rules: 'love, beauty, value, money, what attracts you',
    rules_signs: 'Taurus and Libra',
    rules_houses: '2nd (money, values, possessions) and 7th (partnership, contracts)',
    speed: 'one full zodiac in about 225 days — slower than Mercury, with retrograde every 18 months',
    generation_or_personal: 'personal planet',
    element: 'earth',
    one_liner: 'What you love, what you find beautiful, what you value, how you attract.',
    meaning: 'Venus is the planet of attraction and value — what you love, what you find beautiful, what you are willing to pay for (in money, attention, energy). Venus governs both romantic relating and aesthetic taste, and these two are more linked than they look — what you find beautiful and what you find loveable both come from the same inner Venus signature. Venus also rules what you are worth (her 2nd house arena) and how you partner (her 7th house arena). Where Venus sits in your chart describes your love-language native tongue, your taste, and the kind of beauty you reach for as soothing.',
    in_your_chart: 'Your Venus sign tells you what attracts you and how you express affection. Your Venus house tells you the arena where your loves and values most shape your life. Aspects to Venus show how easily love flows for you and where it tends to snag.',
    in_a_sign: 'Venus in Taurus loves slow, sensual, embodied, loyal; Venus in Aquarius loves freedom, friendship-first, intellectual chemistry; Venus in Scorpio loves all-or-nothing depth; Venus in Aries loves chase, novelty, and the early sparks; Venus in Pisces loves dissolving, romantic merging, the soul-tier connection.',
    in_a_house: '2nd = values, money, self-worth; 5th = romance, play, creativity; 7th = partnership, marriage, contracts; 8th = intimacy, shared resources, deep merging; 10th = love expressed through public work or status.',
    shadow: 'Wounded Venus can become approval-seeking, transactional in love, materialistic in compensation, or stuck attracting partners who echo an old wound. The work is reclaiming what you actually find beautiful from what you were taught to find beautiful.',
    return_or_transit: 'Venus retrograde — every 18 months, Venus turns retrograde for about 40 days. Old loves resurface, values get re-examined, money matters slow down. Best used for revaluing, not for launching new love or new spending.',
    what_it_teaches: 'Venus teaches that what you love shapes your life — and that the work of refining your loves is also the work of refining your life.',
    key_questions: ['What do I find beautiful that I have been treating as frivolous?', 'What is my actual love-language — not the one I was taught?', 'What in my life would I pay any price to keep, and what am I paying for that does not match what I value?']
  },
  {
    slug: 'mars', name: 'Mars', symbol: '♂', emoji: '🔥',
    rules: 'will, drive, anger, sex, action',
    rules_signs: 'Aries (and traditionally Scorpio)',
    rules_houses: '1st (self, action, body) and traditionally 8th (sex, intimacy, transformation)',
    speed: 'one full zodiac in about 687 days — slow for a personal planet, with retrograde every 2 years',
    generation_or_personal: 'personal planet',
    element: 'fire',
    one_liner: 'Your engine — what makes you go, what makes you fight, what turns you on.',
    meaning: 'Mars is the planet of action, will, and drive — the engine of your chart. Mars describes how you go after what you want, how you fight, how you handle anger, and how you express sexuality. A strong, well-placed Mars feels like having a clear "yes" and a clear "no" you can deliver without apology; a wounded Mars often shows up as suppressed anger, chronic procrastination (energy held in the body without expression), or a tendency to fight the wrong battles. Mars is also the warrior, the boundary-keeper, the part of you that protects what you love. Modern astrology associates Mars with athletes, surgeons, soldiers, entrepreneurs — anyone whose work requires focused force.',
    in_your_chart: 'Your Mars sign tells you how you take action and express anger; your Mars house tells you the arena where your drive most concentrates. Aries Mars goes head-first; Cancer Mars protects what it loves; Capricorn Mars builds slowly and outlasts; Pisces Mars acts indirectly, often through art or service.',
    in_a_sign: 'Fire Mars (Aries, Leo, Sagittarius) acts visibly, with passion. Earth Mars (Taurus, Virgo, Capricorn) acts deliberately, with patience. Air Mars (Gemini, Libra, Aquarius) acts through ideas, persuasion, social moves. Water Mars (Cancer, Scorpio, Pisces) acts indirectly, often through emotional or strategic depth.',
    in_a_house: '1st = body, athletics, physical drive; 6th = work as the arena; 8th = sex, intimacy, deep emotional combat; 10th = career as battleground; 12th = anger turned inward — the work is to bring it back out.',
    shadow: 'Wounded Mars can become rage that lashes out (or implodes inward), procrastination, a tendency to start fights to avoid stillness, or a difficulty knowing what you actually want. The work is friendship with your own anger and your own desire — both of them real, both of them information.',
    return_or_transit: 'Mars Return — every 22-24 months, Mars returns to its natal position. The chart of the return is your two-year theme of will and action. Mars retrograde (every 2 years, ~10 weeks) is a great time to revise strategy, not to launch.',
    what_it_teaches: 'Mars teaches that you have a right to want, and that going after what you want is sacred work — even (especially) when other people would prefer you didn\'t.',
    key_questions: ['What do I actually want — not what I should want, what I do?', 'Where in my life is my anger trying to tell me something I have not been listening to?', 'Where am I picking the wrong fights to avoid the right one?']
  },
  {
    slug: 'jupiter', name: 'Jupiter', symbol: '♃', emoji: '🍀',
    rules: 'expansion, luck, meaning, philosophy, abundance',
    rules_signs: 'Sagittarius (and traditionally Pisces)',
    rules_houses: '9th (philosophy, travel, higher learning) and traditionally 12th (the unseen, hidden blessings)',
    speed: 'one full zodiac in about 12 years — about a year per sign',
    generation_or_personal: 'social planet',
    element: 'fire',
    one_liner: 'Your luck. Where life expands for you. The biggest yes in your chart.',
    meaning: 'Jupiter is the great benefic — the planet of expansion, meaning, and grace. Where Jupiter sits in your chart, life tends to be generous to you; the doors open easier, the timing works out, the right person shows up. Jupiter rules philosophy, foreign cultures, higher education, religion, and the search for meaning that animates a human life. A strong Jupiter feels like a baseline optimism about life — not naive, but rooted in some inner knowing that things are bigger and friendlier than they look. A wounded Jupiter can show up as overshooting, broken promises, or a search for meaning that becomes a search for escape.',
    in_your_chart: 'Your Jupiter sign tells you how you experience expansion and what flavors of meaning attract you; your Jupiter house tells you the arena where life tends to be generous. Aspects to Jupiter show how easily blessings can land for you.',
    in_a_sign: 'Sagittarius Jupiter is at home — philosophy, travel, the long view. Pisces Jupiter is also at home — mystical, compassionate, all-embracing. Capricorn Jupiter is in fall — luck has to be earned through work. Virgo Jupiter is in detriment — the impulse to over-edit can shrink the gift.',
    in_a_house: '2nd = financial luck, generous self-worth; 5th = creative abundance, lucky in love; 7th = lucky in partnership; 9th = lucky in travel, study, philosophy; 11th = lucky in community, friends, networks.',
    shadow: 'Over-Jupitered can become excess — over-spending, over-promising, over-believing in the version of the story that flatters. The work is to let Jupiter\'s gift mature into wisdom rather than just inflation.',
    return_or_transit: 'Jupiter Return — every 12 years (around ages 12, 24, 36, 48, 60, 72, 84), Jupiter returns to its natal position. Each Jupiter Return is a year of expansion, opportunity, and a meaningful new chapter. Mark them.',
    what_it_teaches: 'Jupiter teaches that meaning is not a luxury — it is the engine that makes the rest of the chart worth running.',
    key_questions: ['Where in my life is luck already trying to land — and am I receiving it?', 'What gives my life meaning, really?', 'Where am I overshooting, and where am I under-claiming the gift?']
  },
  {
    slug: 'saturn', name: 'Saturn', symbol: '♄', emoji: '🪨',
    rules: 'structure, discipline, time, limits, mastery',
    rules_signs: 'Capricorn (and traditionally Aquarius)',
    rules_houses: '10th (career, public role, achievement) and traditionally 11th (community, long-term goals)',
    speed: 'one full zodiac in about 29.5 years — about 2.5 years per sign',
    generation_or_personal: 'social planet',
    element: 'earth',
    one_liner: 'The teacher. The wall. The slow-builder of mastery. The "no" that becomes a "yes."',
    meaning: 'Saturn is the great teacher — the planet of structure, time, limits, and the slow discipline that turns potential into mastery. Where Saturn sits in your chart, life will not let you skip steps; you have to do the long work, take the rejections, build the muscle. This sounds harsh but it is the source of your most stable, most earned, most adult achievements. Everything Saturn touches has the smell of the long road. People with strong Saturn placements often feel like they have to work harder than others for what other people seem to receive easily — and they are usually right. But what they build, they own. Saturn is also the planet of the father, the inner authority, and the moment in adulthood when you stop seeking permission and become the authority yourself.',
    in_your_chart: 'Your Saturn sign tells you what kind of mastery you are here to develop; your Saturn house tells you the arena where the long discipline applies. Aspects to Saturn show where the lessons land hardest.',
    in_a_sign: 'Capricorn Saturn is at home — natural mastery of structure. Cancer Saturn is in detriment — the lesson is structuring emotional life, often through difficulty with the mother. Aries Saturn is in fall — the lesson is patience, waiting through the desire to act now.',
    in_a_house: '2nd = mastery of money and value; 4th = mastery of home, family, roots (often through hard family material); 7th = mastery of partnership (often through delayed or learned-the-hard-way relationships); 10th = mastery of career and public role; 12th = mastery of inner life, often through solitude or hidden work.',
    shadow: 'Wounded Saturn can become rigid perfectionism, harsh self-criticism, depression, or a pattern of refusing to enjoy what you have built. The work is to let Saturn graduate from punisher to mentor.',
    return_or_transit: 'Saturn Return — at ages 28-30, 58-60, and 88-90, Saturn returns to its natal position. The first Saturn Return is the great threshold of adulthood; the second often signals an elder chapter of authority and legacy. Both are intense and necessary. Plan around them, don\'t resist them.',
    what_it_teaches: 'Saturn teaches that mastery is real, that time is fair, and that what you build slowly outlasts what you build fast.',
    key_questions: ['What is my Saturn lesson — and have I stopped resenting it long enough to learn from it?', 'Where am I being asked to take responsibility I have been deferring?', 'What in my life have I built that I should be proud of, and have I let myself feel that?']
  },
  {
    slug: 'uranus', name: 'Uranus', symbol: '♅', emoji: '⚡',
    rules: 'awakening, rebellion, technology, sudden change',
    rules_signs: 'Aquarius (modern rulership)',
    rules_houses: '11th (community, future, group consciousness)',
    speed: 'one full zodiac in 84 years — about 7 years per sign',
    generation_or_personal: 'generational + personal arena',
    element: 'air',
    one_liner: 'The lightning bolt. The jailbreak. The sudden waking-up.',
    meaning: 'Uranus is the planet of awakening, rebellion, and sudden change. Uranus moves slowly through the zodiac (7 years per sign), so the sign is generational — but its house placement is deeply personal, marking the arena of your life where you are here to break a pattern, do something differently, or wake the rest of us up. Uranus rules technology, astrology, electricity, and any moment when life jolts you out of an arrangement that had become unconscious. People who live on the Uranus current tend to be ahead of their time, allergic to authority, and uncomfortable with anything that asks them to repress who they actually are. The downside is restlessness; the upside is freedom.',
    in_your_chart: 'Your Uranus sign describes your generation — what your cohort came in to disrupt and remake. Your Uranus house describes the personal arena where you carry that disruption. Aspects to Uranus show how the awakening lands.',
    in_a_sign: '(Generational placement — describes the cohort.) Uranus in Aquarius (1996-2003): the internet-native generation. Uranus in Pisces (2003-2010): the empath/spiritual-fluid generation. Uranus in Aries (2010-2018): the radical-individualist generation. Uranus in Taurus (2018-2026): generation of value-system rewrites — money, food, body, land.',
    in_a_house: '1st = the awakening is the self — radical individualism, often visibly different. 4th = breaking old family patterns. 7th = unconventional partnerships. 10th = unconventional career. 11th = community as the awakening arena.',
    shadow: 'Wounded Uranus can become chronic restlessness, contrarianism for its own sake, allergy to commitment, or compulsive disruption that never lets anything land. The work is to let the awakening serve something — not just rebel for the sake of rebellion.',
    return_or_transit: 'Uranus Opposition (Mid-Life Crisis) — at age 38-44, Uranus opposes its natal position. This is the classic mid-life awakening — the moment many people leave careers, marriages, locations, or identities they have outgrown. Half-Return at age 42; full Return at 84.',
    what_it_teaches: 'Uranus teaches that freedom is real, that the genuine self refuses to stay in the wrong shape forever, and that the lightning bolt usually arrives to free you from something you were too polite to leave on your own.',
    key_questions: ['What in my life is asking to be broken open?', 'What "shouldn\'t" be possible for me that secretly is?', 'Where am I tolerating an arrangement that no longer fits who I have become?']
  },
  {
    slug: 'neptune', name: 'Neptune', symbol: '♆', emoji: '🌫️',
    rules: 'dream, dissolution, mysticism, illusion, art',
    rules_signs: 'Pisces (modern rulership)',
    rules_houses: '12th (the unseen, dreams, ancestors, surrender)',
    speed: 'one full zodiac in about 165 years — about 14 years per sign',
    generation_or_personal: 'generational + personal arena',
    element: 'water',
    one_liner: 'The dissolver. The dream. The thinning veil between worlds.',
    meaning: 'Neptune is the planet of dissolution and dream. Neptune dissolves the boundaries between self and other, between the seen and the unseen, between the dream and the daily. Neptune rules art, music, mysticism, addiction, illusion, the ocean, the imagination, and the part of you that knows things without being able to explain how. Like Uranus, Neptune moves slowly (14 years per sign), so the sign is generational — but the house placement is personal, marking the arena of your life where reality is most permeable, where you are most prone to delusion, and where you are also most prone to grace. Neptune is the favorite planet of mystics, artists, healers, and addicts (often the same person at different stages of the same lesson).',
    in_your_chart: 'Your Neptune sign describes your generation\'s collective dream and collective delusion. Your Neptune house describes the personal arena where you are most porous, most magical, and most vulnerable to fog.',
    in_a_sign: '(Generational.) Neptune in Capricorn (1984-1998): the dream of structural transformation; the delusion of ambition. Neptune in Aquarius (1998-2012): the dream of internet utopia; the delusion of disembodied connection. Neptune in Pisces (2012-2025): mystical revival; the delusion of spiritual bypass. Neptune in Aries (2025-2039): the dream of radical individual awakening.',
    in_a_house: '1st = the self is the dream; often artistic, magnetic, hard to pin down. 4th = the home is the dream; often family fog or magic. 7th = partnerships are the dream and the delusion; tendency toward idealization. 10th = vocation has a mystical or artistic flavor. 12th = at home in the unseen.',
    shadow: 'Wounded Neptune can become escape — through substances, through fantasy partners, through chronic confusion about what you actually want. The work is to befriend Neptune\'s gift (intuition, art, devotion) without using it to escape the daily life that needs you.',
    return_or_transit: 'Neptune Square Neptune — at about age 41, Neptune squares its natal position. This often coincides with the mid-life dream-dissolution: the dream you organized your life around no longer fits, and a more honest one is being asked for.',
    what_it_teaches: 'Neptune teaches that the dream world is real, that the imagination is a faculty, and that the boundary between you and the larger life you are part of is thinner than the daily mind admits.',
    key_questions: ['Where in my life am I living a dream — and is it the dream I would consciously choose?', 'Where do I escape when reality gets sharp, and what would happen if I stopped?', 'What is my intuition trying to tell me that my logic keeps overriding?']
  },
  {
    slug: 'pluto', name: 'Pluto', symbol: '♇', emoji: '🌑',
    rules: 'transformation, power, death-and-rebirth, the underworld',
    rules_signs: 'Scorpio (modern rulership)',
    rules_houses: '8th (death, intimacy, shared resources, transformation)',
    speed: 'one full zodiac in about 248 years — 12 to 30 years per sign (eccentric orbit)',
    generation_or_personal: 'generational + personal arena',
    element: 'water',
    one_liner: 'The composter. The underworld guide. The power that arrives only after the death.',
    meaning: 'Pluto is the planet of transformation — death, rebirth, deep psychological work, and the kind of power that only becomes available after you have walked through your own underworld. Pluto rules everything underneath the surface: the psyche\'s shadow material, sexuality at its deepest, the inheritance of trauma and gift across generations, and the mass-scale forces (politics, money, collective unconscious) that move history. Pluto moves slowly (some signs take 30 years), so the sign is deeply generational. But the house placement is intensely personal, marking the arena of your life where you are here to be transformed at the root — usually through experiences that feel like death to the old self and that grant, on the other side, a kind of power you could not have earned any other way.',
    in_your_chart: 'Your Pluto sign describes your generation\'s collective transformation theme. Your Pluto house describes the personal arena of your life where you are here to die-and-be-reborn — often more than once.',
    in_a_sign: '(Generational.) Pluto in Scorpio (1983-1995): generation of psychological honesty and shadow integration; sex, death, and money decoded. Pluto in Sagittarius (1995-2008): generation of belief-system transformation; religion, philosophy, and travel reshaped. Pluto in Capricorn (2008-2024): generation of structural transformation — institutions, governments, financial systems remade. Pluto in Aquarius (2024-2044): generation of collective and technological transformation — sovereignty, AI, network power.',
    in_a_house: '1st = self is the underworld arena; multiple identity-deaths and reinventions. 4th = family is the transformation site (often inherited shadow). 7th = relationships as the death-and-rebirth arena. 8th = at home in the underworld; natural depth and power. 10th = career as the arena of power and transformation.',
    shadow: 'Wounded Pluto can become controlling, secretive, vengeful, or stuck in compulsive patterns of self-destruction-then-rebirth. The work is to wield power consciously rather than be wielded by unconscious power.',
    return_or_transit: 'Pluto Square Pluto — between ages 36 and 45 (varies by generation), Pluto squares its natal position. This is the deep mid-life transformation, often involving a major identity-death and the emergence of real adult power.',
    what_it_teaches: 'Pluto teaches that transformation is non-negotiable, that the things you have to die into make you the person who can carry the gifts on the other side, and that real power is the kind you have already paid for.',
    key_questions: ['What in my life is asking to die so something more honest can be born?', 'Where do I hold power I have not fully claimed, and where do I hand power away?', 'What did I survive that became the source of my actual strength?']
  }
]

const PLANETS_BY_SLUG: Record<string, PlanetProfile> = Object.fromEntries(PLANETS.map((p) => [p.slug, p]))
export const PLANET_SLUGS = PLANETS.map((p) => p.slug)

export function isPlanetSlug(s: string): boolean {
  return s in PLANETS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ELEMENT_ACCENT: Record<string, { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function planetPageHTML(slug: string): string {
  const p = PLANETS_BY_SLUG[slug]
  if (!p) return ''
  const accent = ELEMENT_ACCENT[p.element]
  const readingHref = `/gab44/reading?ref=planet-${slug}`

  const title = `${p.name} in Astrology — Meaning, Sign, House, ${p.name.replace('The ', '')} Return · gab44 ✨`
  const description = `What ${p.name} means in your birth chart: identity, signs, houses, return cycles, shadow, key questions. Personal placement guide. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Planets', item: `${SITE_URL}/gab44/planets` },
          { '@type': 'ListItem', position: 3, name: p.name, item: `${SITE_URL}/gab44/planets/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${p.name} in Astrology — meaning in your birth chart`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/planets/${slug}`,
        about: `${p.name} astrology meaning — sign, house, return, shadow, transit`
      }
    ]
  })

  const otherPlanetsHtml = PLANETS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    return `<a class="planet-mini${cur}" href="/gab44/planets/${q.slug}"><span class="sym">${q.symbol}</span><span class="name">${escapeHtml(q.name.replace('The ', ''))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/planets/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/planets/${slug}" />
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
    font-size: 48px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.6em; vertical-align: 4px; padding-right: 12px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .arch { font-size: 18px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
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
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 38px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .return-box {
    background: linear-gradient(135deg, ${accent.c1}1a 0%, ${accent.c2}1a 100%);
    border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 22px 0; font-size: 15px; color: var(--fg);
  }
  .return-box h3 { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--fg-muted); font-weight: 700; }
  .return-box p { margin: 0; font-size: 15px; }
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
  .other-planets { margin: 36px 0 22px; }
  .other-planets h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .planets-grid { display: grid; grid-template-columns: repeat(10, 1fr); gap: 4px; }
  @media (max-width: 720px) { .planets-grid { grid-template-columns: repeat(5, 1fr); } }
  .planet-mini {
    text-align: center; padding: 10px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px;
  }
  .planet-mini:hover { border-color: var(--accent); color: var(--accent); }
  .planet-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .planet-mini .sym { font-size: 20px; line-height: 1; }
  .planet-mini .name { font-size: 10px; }
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
      <a href="/gab44/planets">all 10 planets</a>
      <a href="/gab44/about">12 sun signs</a>
      <a href="/gab44/houses">12 houses</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ planets in astrology</div>
    <h1><span class="sym">${p.symbol}</span>${escapeHtml(p.name)}</h1>
    <p class="arch">${escapeHtml(p.rules)}</p>
    <p class="sub">${escapeHtml(p.one_liner)}</p>
    <div class="meta-strip">
      <span>rules · ${escapeHtml(p.rules_signs)}</span>
      <span>house · ${escapeHtml(p.rules_houses)}</span>
      <span>${escapeHtml(p.generation_or_personal)}</span>
      <span>cycle · ${escapeHtml(p.speed)}</span>
    </div>

    <article class="core-card">
      <span class="label">what it means</span>
      <p class="text">${escapeHtml(p.meaning)}</p>
    </article>

    <h2><span class="icon">🌟</span>in your chart</h2>
    <p>${escapeHtml(p.in_your_chart)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>♈ in a sign</h3>
        <p>${escapeHtml(p.in_a_sign)}</p>
      </div>
      <div class="panel">
        <h3>🏛️ in a house</h3>
        <p>${escapeHtml(p.in_a_house)}</p>
      </div>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <p>${escapeHtml(p.shadow)}</p>

    <div class="return-box">
      <h3>return / transit</h3>
      <p>${escapeHtml(p.return_or_transit)}</p>
    </div>

    <h2><span class="icon">📚</span>what it teaches</h2>
    <p>${escapeHtml(p.what_it_teaches)}</p>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(p.key_questions[0])}</li>
        <li>${escapeHtml(p.key_questions[1])}</li>
        <li>${escapeHtml(p.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> ${escapeHtml(p.name.replace('The ', '').toLowerCase())}</h2>
      <p>This page describes ${p.name} in general. A <strong>personal reading</strong> looks at <em>your</em> exact ${p.name.replace('The ', '').toLowerCase()} placement — sign, house, aspects to other planets — and tells you what this means for the season you are actually in. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/planets">all 10 planets</a> · <a href="/gab44/about">12 sun-sign profiles</a> · <a href="/gab44/houses">12 houses</a> · <a href="/gab44/moon">moon signs</a> · <a href="/gab44/numerology">life paths</a>.
    </div>

    <section class="other-planets">
      <h3>All ten planets</h3>
      <div class="planets-grid">
        ${otherPlanetsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function planetsIndexHTML(): string {
  const cards = PLANETS.map((p) => {
    const accent = ELEMENT_ACCENT[p.element]
    return `<a href="/gab44/planets/${p.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="sym-row"><span class="sym">${p.symbol}</span><span class="emoji">${p.emoji}</span></div>
      <div class="name">${escapeHtml(p.name)}</div>
      <div class="rules">${escapeHtml(p.rules)}</div>
      <div class="teaser">${escapeHtml(p.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 10 Planets in Astrology — How to Read Your Birth Chart · gab44 ✨</title>
<meta name="description" content="What every planet means in astrology: Sun (identity), Moon (emotion), Mercury (mind), Venus (love), Mars (drive), Jupiter (luck), Saturn (mastery), Uranus (awakening), Neptune (dream), Pluto (transformation). The map for reading your birth chart. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/planets" />
<meta property="og:title" content="The 10 Planets in Astrology — How to Read Your Birth Chart" />
<meta property="og:description" content="A friendly map for reading your birth chart, planet by planet." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 660px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .sym-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px; }
  .card .sym { font-size: 26px; font-weight: 700;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .card .emoji { font-size: 22px; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; }
  .card .rules { font-size: 12px; color: var(--fg-muted); margin-bottom: 8px;
    letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600; }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
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
      <a href="/gab44/about">12 sun signs</a>
      <a href="/gab44/houses">12 houses</a>
      <a href="/gab44/moon">moon signs</a>
      <a href="/gab44/rising">rising signs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>How to read your <span class="accent">birth chart</span> — the 10 planets.</h1>
    <p class="sub">A birth chart is a map. The signs are the flavors, the houses are the rooms, and the planets are the actors moving through them. Get the planets, and the rest of the chart starts to read itself.</p>

    <div class="intro">
      <h3>The three layers</h3>
      <p><strong>Signs (12)</strong> — the <em>how</em>. Aries does things impulsively, Taurus slowly, Gemini curiously. Each planet picks up the flavor of the sign it's standing in.</p>
      <p><strong>Houses (12)</strong> — the <em>where</em>. Each house is a room of life: identity, money, communication, home, romance, work, partnership, intimacy, philosophy, career, community, the inner life.</p>
      <p><strong>Planets (10)</strong> — the <em>who</em>. The actual actors. Sun is your core, Moon is your inner life, Venus is what you love, Mars is what drives you. Click any planet below to read what it does and what its placement in your chart means.</p>
      <p style="font-size:14px;color:var(--fg-muted);margin-top:14px">If you don't know your chart yet — most free birth-chart calculators online will give you the placements. You need your birth date, birth time, and birth city.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want all ten planets read for your specific chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading walks through your full chart — the planets, the houses they fall in, the conversations between them — and tells you the season you're actually in. <a href="/gab44/reading?ref=planets-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
