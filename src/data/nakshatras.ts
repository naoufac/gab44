// Nakshatras — Vedic lunar mansions — SEO funnel.
// /gab44/nakshatras (index) + /gab44/nakshatras/{slug}.
//
// 27 hand-written nakshatra guides — the canonical Vedic lunar-mansion map,
// the 27 divisions of the ecliptic the Moon traverses each sidereal month.
// Direct peer to /gab44 zodiac signs (western tropical 12) — same wheel,
// finer resolution, different lineage. Peer to /gab44/doshas — both are
// Vedic foundations; doshas name the constitution, nakshatras name the
// lunar-mansion the soul is born under. The most-searched jyotish surface
// in Western astrology: "what is my nakshatra", "ashwini nakshatra meaning",
// "rohini nakshatra personality", "magha nakshatra career", "ashlesha
// nakshatra love", "mula nakshatra spirituality", "revati nakshatra".
//
// Group-tinted gradient (3×9):
//   personal (1-9: Ashwini through Ashlesha) = sunrise saffron — the
//     individual emerging, body and identity, the first quarter of the
//     wheel from Aries to Cancer
//   social (10-18: Magha through Jyeshtha) = noon amber — relational
//     life, status, partnership, the social-world quarter from Leo to
//     Scorpio
//   spiritual (19-27: Mula through Revati) = dusk indigo — dharma,
//     dissolution, liberation, the soul-arc quarter from Sagittarius to
//     Pisces

import { SITE_URL } from '@/lib/identity'

export interface Nakshatra {
  n: number
  slug: string
  name: string
  sanskrit: string
  glyph: string
  symbol: string
  deity: string
  ruler: string
  ruler_slug: string
  yoni: string
  gana: 'deva' | 'manushya' | 'rakshasa'
  sign_range: string
  zodiac_pair: string
  zodiac_slug: string
  family: 'personal' | 'social' | 'spiritual'
  one_liner: string
  meaning: string
  when_active: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  key_questions: [string, string, string]
}

export const NAKSHATRAS: Nakshatra[] = [
  {
    n: 1, slug: 'ashwini', name: 'Ashwini', sanskrit: 'अश्विनी', glyph: '🐎',
    symbol: "horse's head", deity: 'the Ashwins — twin horsemen, physicians of the gods',
    ruler: 'Ketu', ruler_slug: 'ketu', yoni: 'male horse', gana: 'deva',
    sign_range: "Aries 0°00' – 13°20'", zodiac_pair: 'Aries', zodiac_slug: 'aries',
    family: 'personal',
    one_liner: 'The first hooves — the spark that arrives at full gallop, healer and pioneer in one breath.',
    meaning: "Ashwini (अश्विनी, 'the horsemen') is the first nakshatra, the opening 13°20' of sidereal Aries, ruled by Ketu and presided over by the Ashvini Kumaras — the twin horse-headed physicians of the gods named in the Rig Veda (1.116, 1.117) as the doctors who restored the sight of the blind, the legs of the lame, the youth of the aged. The symbol is *the horse's head* — pure forward thrust, the muscle-memory of the run before the rider has had time to think about the route. Ashwini begins the wheel: it is the nakshatra of *first arrivals* — the spark, the new venture, the healing that happens before diagnosis has caught up. Classical Vedic astrology (Brihat Parashara Hora Shastra, c. 4th century CE in its current form) gives Ashwini natives a quick mind, swift action, and a natural gift for healing — the energy that gets there first. The Ketu rulership names what is hidden underneath: the speed comes from a soul-memory the personality cannot yet account for, the gift of *direct knowing* that bypasses analysis. Ashwini does not deliberate; Ashwini moves.",
    when_active: 'The Moon transits Ashwini once every sidereal month for roughly a day — a window for starting things, taking the first step, beginning the healing protocol, mounting the new project. Anything begun under Ashwini moon carries the *first-arrival* signature; the energy is fast, the mistakes are fast too. Use the window for ignition, not for completion.',
    in_love: 'Ashwini falls fast and gallops in. The first encounter has the quality of recognition — *I know you* — even when the personality has not yet been introduced. Reversed: the gallop without the rider — falling in love with the velocity of falling rather than the person at the other end. Ashwini love that lasts is Ashwini love that learned to *dismount* and meet the partner on the ground.',
    in_work: 'Pioneering work — the first product, the unmapped territory, the medicine for what no one else has diagnosed yet. Founders, ER doctors, first-responders, athletes, sales-pioneers, opener-of-new-markets. Ashwini is wasted on maintenance; give it new ground.',
    the_gift: '*Healing speed.* The recognition that arrives before the chart has been read, the action that restores before the protocol has been written. Ashwini at its best is the doctor who is already moving by the time the rest of the room has registered the emergency.',
    the_shadow: 'Speed without seat. Ashwini unbalanced is impulsive, restless, unable to finish, addicted to the new beginning because the middle is unbearable. The classical caution: the horse runs only as far as the rider can stay mounted. Ashwini that learns to slow down does not lose its speed; it gains a route.',
    pair_with_chakra: 'Crown — Ashwini Ketu-rulership opens at the top of the head, the direct-knowing channel, the spark that arrives from above the personality. Pair Ashwini work with crown-chakra practice when the question is *how to trust the first impulse*.',
    pair_with_chakra_slug: 'crown',
    key_questions: [
      'What in my life is asking for a *first-arrival* — the impulse, the ignition, the unhesitating yes — that I have been over-deliberating into stillness?',
      'Where am I in love with the gallop more than the destination — moving fast to avoid the question the slowing-down would surface?',
      'If I trusted my Ashwini knowing (the answer that arrives before the analysis), what would I do in the next 24 hours?'
    ]
  },
  {
    n: 2, slug: 'bharani', name: 'Bharani', sanskrit: 'भरणी', glyph: '🔻',
    symbol: 'the yoni — the bearing, the womb that carries and releases',
    deity: 'Yama — the first mortal, lord of death and dharma',
    ruler: 'Venus', ruler_slug: 'venus', yoni: 'male elephant', gana: 'manushya',
    sign_range: "Aries 13°20' – 26°40'", zodiac_pair: 'Aries', zodiac_slug: 'aries',
    family: 'personal',
    one_liner: 'The bearing — the womb that holds the seed, ushers it through, and meets it at the threshold of death.',
    meaning: "Bharani (भरणी, 'the bearer') is the second nakshatra, sidereal Aries 13°20'–26°40', ruled by Venus and presided over by Yama — the first mortal in the Rig Veda (10.14), who walked the path of death first and so became dharma-raja, the king who shows the souls the road. The symbol is the yoni — the female generative organ, the bearing-vessel — and the gana is *manushya* (human), distinct from the deva first nakshatra. Bharani is the nakshatra of *carrying* — the womb that holds the becoming child, the discipline that holds the practice through years before the fruit ripens, the friend who holds the secret. Classical jyotish (Phaladeepika 6.2, Saravali 10) names Bharani natives steady, sensual, capable of immense endurance, and unusually able to be present with the dying — Yama-people, threshold-people. The Venus rulership names the *aesthetic* of the carry: Bharani holds beauty in the carrying, makes the long discipline gorgeous rather than grim. The shadow is when the carry becomes possession — the bearing-vessel that refuses to release at the right time.",
    when_active: 'The Moon transits Bharani roughly a day a month — a window for *holding*: starting a long discipline, taking on a stewardship, sitting with someone in transition (birth, death, threshold of any kind). Anything begun under Bharani moon will *test the carry* — only undertake what you are willing to bear past the point of ease.',
    in_love: 'Bharani love is intense, embodied, demands both passion and steadiness. The Bharani partner is the one who will sit with you on the worst night and still want you in the morning. Reversed: possession-as-love — the carrying that became gripping, the womb that refuses to release the grown child.',
    in_work: 'Work that requires *long carry* — therapy, midwifery, hospice, archival research, mastery in a craft, raising the unfunded company through year three. Bharani is wasted on sprint-cycles; give it work that takes a decade.',
    the_gift: '*Bearing strength.* The capacity to hold steady through what would crack a less-grounded person. Bharani teaches that endurance is not grim — it can be beautiful, sensual, and deeply present.',
    the_shadow: 'Holding past the release. Bharani unbalanced confuses *carrying* with *clutching* — the parent who cannot let the child grow up, the lover who cannot let the partner leave, the practitioner who cannot let the student surpass the teacher. The Yama-side teaches: release is part of the carry.',
    pair_with_chakra: 'Sacral — Bharani Venus-rulership lives in the sacral, the seat of generative power, sensuality, and the womb of becoming. Pair Bharani work with sacral-chakra practice when the question is *what am I being asked to bear, and when is the release*.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What in my life am I being asked to *bear* through a season that has no shortcut — and am I treating the carrying as discipline or as suffering?',
      'Where am I holding past the point of release — confusing love-as-carrying with love-as-gripping?',
      'If Yama (the threshold-lord) were standing at my shoulder, which carrying would he tell me to set down and which to keep?'
    ]
  },
  {
    n: 3, slug: 'krittika', name: 'Krittika', sanskrit: 'कृत्तिका', glyph: '🔥',
    symbol: 'the razor / the flame — Agni\'s blade that cuts what is false',
    deity: 'Agni — fire, the messenger between humans and gods',
    ruler: 'Sun', ruler_slug: 'sun', yoni: 'female sheep', gana: 'rakshasa',
    sign_range: "Aries 26°40' – Taurus 10°00'", zodiac_pair: 'Aries / Taurus', zodiac_slug: 'aries',
    family: 'personal',
    one_liner: "Agni's blade — the flame that purifies, the razor that cuts what is false, the foster-mother of Skanda the warrior.",
    meaning: "Krittika (कृत्तिका, 'the cutters') is the third nakshatra, straddling sidereal Aries 26°40' and Taurus 10°00', ruled by the Sun and presided over by Agni — the fire-god named more times than any other in the Rig Veda, the messenger between mortal and divine. The symbol is the *razor* and the *flame*. The Krittikas in Vedic myth are the six sister-stars (the Pleiades, the visible cluster in Taurus) who became foster-mothers to Skanda, the warrior-son of Shiva — Krittika people often have this *foster-mother* quality, fierce and protective for those not biologically their own. Classical jyotish names Krittika natives sharp, direct, intolerant of falseness, with a natural gift for cutting through to the truth of a situation. The fire is purifying, not destructive — Krittika is the heat that *separates* gold from the slag. The shadow is when the cutting becomes critical, the discernment becomes contempt, the purifying fire turns on the person rather than on the falseness.",
    when_active: 'The Moon transits Krittika once a sidereal month — a window for *purification*: ending what is false, cutting what is unnecessary, confronting what has been avoided. Krittika moon is good for the difficult conversation, the resignation letter, the renunciation. Bad for negotiation or compromise — the energy is razor, not silk.',
    in_love: 'Krittika partner is the one who will tell you the truth you have been avoiding — and stay. Honest, fierce, intolerant of pretense. Reversed: the razor turned on the beloved — criticism mistaken for honesty, contempt mistaken for clarity.',
    in_work: 'Work that requires *cutting through* — editors, surgeons, auditors, prosecutors, military strategists, teachers who refuse to coddle, founders who can cull a product line without sentiment. Krittika is wasted on diplomacy; give it the work that needs the blade.',
    the_gift: '*Purifying discernment.* The capacity to see what is false and cut it cleanly — not from contempt but from devotion to the truth on the other side of the cut.',
    the_shadow: 'Contempt mistaken for clarity. Krittika unbalanced uses the razor on people rather than on the falseness — the cutting word, the dismissal, the burning down of a relationship because a single thread was rotten. The Agni-fire teaches: burn the chaff, keep the grain.',
    pair_with_chakra: 'Solar plexus — Krittika Sun-rulership lives in the solar plexus, the seat of clarity, will, and right-discernment. Pair Krittika work with solar-plexus practice when the question is *what needs to be cut, and is the cut from love or from contempt*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What in my life is asking for the Krittika blade — the clean cut, the honest end, the burning-away of what is false — and am I avoiding it because the cut requires courage?',
      'Where am I cutting *people* when I should be cutting *patterns* — turning Agni-fire on the human instead of on the falseness the human is caught in?',
      'If Agni were sitting across from me, which of my comforts would he name as the chaff, and which as the grain?'
    ]
  },
  {
    n: 4, slug: 'rohini', name: 'Rohini', sanskrit: 'रोहिणी', glyph: '🌹',
    symbol: 'the cart / the chariot — fertile growth, the most-beloved mansion',
    deity: 'Brahma / Prajapati — the creator, the lord of progeny',
    ruler: 'Moon', ruler_slug: 'moon', yoni: 'male serpent', gana: 'manushya',
    sign_range: "Taurus 10°00' – 23°20'", zodiac_pair: 'Taurus', zodiac_slug: 'taurus',
    family: 'personal',
    one_liner: 'The chariot of growth — the most-beloved mansion, where the Moon is exalted and the earth gives without reserve.',
    meaning: "Rohini (रोहिणी, 'the red one' / 'the growing one') is the fourth nakshatra, sidereal Taurus 10°00'–23°20', ruled by the Moon and presided over by Brahma / Prajapati — the creator, the lord of progeny. The symbol is the *cart* (rohi, the conveyance that carries the harvest in from the field), and the presiding star is the brilliant red Aldebaran. Rohini is the *moon's favorite wife* in Vedic myth — the most-beloved nakshatra, the one the lunar consort returns to with greatest tenderness. It is the mansion of the Moon's *exaltation* (highest dignity); anything begun under Rohini moon carries the fertility of the moon at full power. Classical jyotish names Rohini natives beautiful, sensual, magnetic, fertile, with a deep love of beauty and a natural gift for growing things — gardens, businesses, children, art. The shadow is the *attachment to what one has grown* — the parent who cannot let the child go, the gardener who cannot prune, the builder who refuses to update what worked five years ago.",
    when_active: 'The Moon transits Rohini once a sidereal month — *the* window for planting, conceiving, beginning anything you want to last and grow. Marriages, businesses, children, projects, gardens. Rohini moon is also a sensual window — for art, intimacy, beauty-work. Bad for endings; the energy will not let you let go.',
    in_love: 'Rohini love is sensual, devoted, abundant, magnetic — the love that wants to *build a life*, plant a garden, raise children, age together. Reversed: the love that became possession through abundance — the partner who gives so generously that the partner cannot leave.',
    in_work: 'Work that *grows* — farming, design, gardening, hospitality, branding, child-rearing, building a business that compounds. Rohini founders create products people fall in love with. Bad fit: work that requires constant pivoting; Rohini wants to plant and tend.',
    the_gift: "*Fertile presence.* The capacity to grow whatever you turn your attention to — relationships, harvests, businesses, children. Rohini is the proof that abundance is a *practice*, not a circumstance.",
    the_shadow: "Possession through abundance. Rohini unbalanced cannot let go — of the grown child, of the outdated product, of the relationship that has run its course. The Brahma-side teaches: the creator creates *and* releases; what is not released stops growing.",
    pair_with_chakra: 'Heart — Rohini Moon-rulership in Taurus lives in the heart, the seat of devotion, beauty, and sustaining love. Pair Rohini work with heart-chakra practice when the question is *what am I growing, and what is asking to be released*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What in my life is asking to be *planted* under the Rohini moon — the seed, the relationship, the venture I want to last decades — and have I committed the soil to it?',
      'Where am I holding too tightly to what I have grown — refusing the prune, the release, the next iteration?',
      'If Brahma the creator were at my shoulder, which of my creations would he tell me are still growing and which have asked to be set free?'
    ]
  },
  {
    n: 5, slug: 'mrigashira', name: 'Mrigashira', sanskrit: 'मृगशिरा', glyph: '🦌',
    symbol: "the deer's head — the searcher who follows the scent",
    deity: 'Soma — the moon-god, the nectar that the gods drink',
    ruler: 'Mars', ruler_slug: 'mars', yoni: 'female serpent', gana: 'deva',
    sign_range: "Taurus 23°20' – Gemini 6°40'", zodiac_pair: 'Taurus / Gemini', zodiac_slug: 'taurus',
    family: 'personal',
    one_liner: "The deer's head — the searcher who follows the scent of what is not yet visible, the seeker who never quite arrives.",
    meaning: "Mrigashira (मृगशिरा, 'deer's head') is the fifth nakshatra, straddling sidereal Taurus 23°20' and Gemini 6°40', ruled by Mars and presided over by Soma — the moon-god, the nectar-drink of the Vedic gods, the principle of refined ecstatic experience. The symbol is the *deer's head*, eternally lifted, eternally scenting the wind for what is on the other side of the horizon. Mrigashira is the *seeker* nakshatra — the soul that is always reaching toward what is not yet here, the scholar, the traveler, the perpetual student. Classical jyotish names Mrigashira natives curious, intelligent, restless, gentle, with a deep love of refined experience (Soma's gift) and a hard time staying put when the next scent arrives. The Mars rulership names the *muscle* of the search — the energy that keeps the deer moving even when the body is tired. The shadow is when the search becomes avoidance — the perpetual seeker who never lets themselves arrive, because arrival would end the seeking.",
    when_active: 'The Moon transits Mrigashira once a sidereal month — a window for *searching*: the research trip, the exploratory conversation, the first scent of the new direction. Anything begun under Mrigashira moon will *expand*; do not start what you need to keep small.',
    in_love: 'Mrigashira love is curious, refined, gentle — the partner who keeps discovering new layers of you over years. Reversed: the seeker who could not stop seeking even after finding — the partner who is always already half-leaving for the next scent.',
    in_work: 'Research, journalism, scholarship, travel-writing, anthropology, refined craft (perfumery, tea, wine), product-discovery, ethnography. Mrigashira-work is at its best when the *finding* matters less than the *seeking*. Bad fit: production work, repetitive execution.',
    the_gift: '*Refined searching.* The capacity to follow the scent of what is not yet visible — the next idea, the better life, the truer answer. Mrigashira is the soul that keeps the wheel turning by always reaching for the next horizon.',
    the_shadow: 'Search as avoidance. Mrigashira unbalanced uses the seeking to never have to arrive — the perpetual research that never publishes, the perpetual dating that never commits, the perpetual learning that never teaches. The Soma-side teaches: the nectar is *drunk*, not chased.',
    pair_with_chakra: 'Throat — Mrigashira at the Taurus-Gemini cusp lives in the throat, the seat of curiosity, articulation, and refined expression. Pair Mrigashira work with throat-chakra practice when the question is *what am I really seeking, and am I willing to arrive*.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'What scent has my deer-head been lifting toward for the last year — and is the seeking *taking me somewhere*, or has it become the place I live to avoid arrival?',
      'Where am I refusing to *drink the Soma I already found* — the partner, the work, the truth — because drinking it would end the search?',
      'If I let myself fully arrive at one of the doors I have been scenting at, what would change in my life?'
    ]
  },
  {
    n: 6, slug: 'ardra', name: 'Ardra', sanskrit: 'आर्द्रा', glyph: '💧',
    symbol: 'the teardrop / the diamond — the moisture that breaks open the seed',
    deity: 'Rudra — the storm-god, the fierce wild face of Shiva',
    ruler: 'Rahu', ruler_slug: 'rahu', yoni: 'female dog', gana: 'manushya',
    sign_range: "Gemini 6°40' – 20°00'", zodiac_pair: 'Gemini', zodiac_slug: 'gemini',
    family: 'personal',
    one_liner: "Rudra's storm — the teardrop that cracks the seed, the breakdown that becomes breakthrough.",
    meaning: "Ardra (आर्द्रा, 'the moist one') is the sixth nakshatra, sidereal Gemini 6°40'–20°00', ruled by Rahu (the north node, the soul's hunger) and presided over by Rudra — the storm-god of the Rig Veda, the fierce, weeping, wild face of Shiva, the deity who *howls* (Rud) at the threshold of every great transition. The symbol is the *teardrop* — the moisture that softens the husk of the seed so the green can break through, and equally the tears that come when an old self is dying. The presiding star is Betelgeuse, the red giant in Orion's shoulder. Classical jyotish names Ardra natives intense, intellectually fierce, prone to dramatic life-changes, gifted in research and analysis, capable of weathering storms that would break the average person. The Rahu rulership names the *hunger* underneath: Ardra people are searching for something the personality cannot quite name, and the hunger drives them through storm after storm until the unnamed thing is found. The shadow is when the storm becomes the identity — when one cannot stop weeping long enough to notice the seed has already broken open.",
    when_active: 'The Moon transits Ardra once a sidereal month — a window for *breaking down what needs to die*: the difficult conversation, the resignation, the leaving of the relationship that has been killing you. Ardra moon is bad for new beginnings (anything begun in storm becomes storm); good for what is already ending.',
    in_love: 'Ardra love is intense, transformative, often through storm. The Ardra partner is the one who breaks your heart open in a way that lets the real one be born. Reversed: the love that *needs* the storm to feel real — drama mistaken for depth.',
    in_work: 'Research that requires going where no one else has — pharmacology, deep psychology, investigative journalism, crisis-management, trauma-therapy, dark-comedy. Ardra-work is fed by *what others find disturbing*. Bad fit: hospitality, customer-service-as-pleasantness.',
    the_gift: '*Transformative breaking.* The capacity to weather the storms that crack the old self and let the truer self be born. Ardra is the proof that the breakdown is the *means* of the breakthrough.',
    the_shadow: 'Storm-as-identity. Ardra unbalanced confuses *being in storm* with *being alive* — the addiction to crisis, the inability to live in calm because calm feels like death. The Rudra-side teaches: the storm has a *purpose*; when it has done its work, it ends.',
    pair_with_chakra: 'Third eye — Ardra Rahu-rulership opens at the third eye, the seat of penetrating sight, the eye that sees through the storm. Pair Ardra work with third-eye practice when the question is *what is this storm trying to break open*.',
    pair_with_chakra_slug: 'third-eye',
    key_questions: [
      'What storm is currently breaking down in my life — and am I letting it do its Rudra-work, or am I running for shelter that will postpone the necessary breaking?',
      'Where am I confusing *storm* with *aliveness* — needing the crisis because the calm has not yet been claimed as home?',
      'If the teardrop did its work and the seed broke open, what would the green that comes through it look like?'
    ]
  },
  {
    n: 7, slug: 'punarvasu', name: 'Punarvasu', sanskrit: 'पुनर्वसु', glyph: '🏹',
    symbol: 'the bow and quiver — the return home, the renewal of light',
    deity: 'Aditi — the boundless mother, mother of the twelve Adityas',
    ruler: 'Jupiter', ruler_slug: 'jupiter', yoni: 'female cat', gana: 'deva',
    sign_range: "Gemini 20°00' – Cancer 3°20'", zodiac_pair: 'Gemini / Cancer', zodiac_slug: 'gemini',
    family: 'personal',
    one_liner: 'The return — the bow that brings the wanderer home, the second light after the storm.',
    meaning: "Punarvasu (पुनर्वसु, 'return of the light' / 'goods restored') is the seventh nakshatra, straddling sidereal Gemini 20°00' and Cancer 3°20', ruled by Jupiter and presided over by Aditi — the boundless mother of the Rig Veda, mother of the twelve Adityas (the solar deities), the goddess named *Aditi* (without bounds) and *Diti's* counter-pole (bounded creation). The symbol is the *bow and quiver*, naming the practitioner returning home from a long campaign, the wandering soul whose belongings are restored. Punarvasu is the nakshatra of *renewal* — the second chance, the friendship resumed after years apart, the home returned to after exile, the practice picked up after the long pause. Classical jyotish names Punarvasu natives warm, philosophical, optimistic, capable of recovering from setbacks that would break others, with a deep instinct for *coming back*. The Jupiter rulership names the *teaching* in the return: Punarvasu people have learned what they have learned by leaving and returning, and their wisdom is often the wisdom of the prodigal.",
    when_active: 'The Moon transits Punarvasu once a sidereal month — a window for *returning*: resuming the practice, calling the friend you have not spoken to, going home after a long stay away. Punarvasu moon is excellent for restoring what was set down — and bad for first ventures (the energy wants the second pass, not the first).',
    in_love: 'Punarvasu love is the love that returns — the partner you reunited with after years, the relationship that survived the season of separation. Reversed: the perpetual returner who never fully arrives — leaving and returning as a way to avoid the work of presence.',
    in_work: 'Teaching, philosophy, writing, second-act careers, restorative work (libraries, archives, restoration), counseling, mentoring. Punarvasu-work shines in the *return to the source* — bringing wisdom back to the field one once departed.',
    the_gift: '*Renewing return.* The capacity to come back — to the practice, the relationship, the home, the truer version of the self — after the season away. Punarvasu is the proof that the journey is the necessary preparation for the return.',
    the_shadow: 'Return-without-arrival. Punarvasu unbalanced keeps returning without ever fully landing — the wanderer who is always *about to* settle. The Aditi-side teaches: the boundless mother holds the home that lets the wanderer finally rest.',
    pair_with_chakra: 'Heart — Punarvasu Jupiter-rulership at the Gemini-Cancer cusp lives in the heart, the seat of homecoming and restored belonging. Pair Punarvasu work with heart-chakra practice when the question is *what is asking to be returned to*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What in my life is asking for a *Punarvasu return* — the practice, the friendship, the home, the work I left and have been pretending I do not miss?',
      'Where am I returning *without arriving* — keeping the door open as an escape route rather than walking through it?',
      'If Aditi the boundless mother were holding the threshold of my home, what would I lay down at her feet before walking back in?'
    ]
  },
  {
    n: 8, slug: 'pushya', name: 'Pushya', sanskrit: 'पुष्य', glyph: '🌸',
    symbol: "the cow's udder / the flower — the nourishing star, the most auspicious mansion",
    deity: 'Brihaspati — the guru of the gods, lord of sacred speech',
    ruler: 'Saturn', ruler_slug: 'saturn', yoni: 'male goat', gana: 'deva',
    sign_range: "Cancer 3°20' – 16°40'", zodiac_pair: 'Cancer', zodiac_slug: 'cancer',
    family: 'personal',
    one_liner: "Brihaspati's flower — the most auspicious mansion, the nourishment that comes through discipline, the milk that feeds the worthy.",
    meaning: "Pushya (पुष्य, 'the nourisher') is the eighth nakshatra, sidereal Cancer 3°20'–16°40', ruled by Saturn and presided over by Brihaspati — the guru of the gods, the lord of sacred speech, the planetary intelligence of Jupiter. The symbol is the *cow's udder* (the nourishment that feeds without depleting) and the *flower* (Pushya as 'the blossoming'). Pushya is, in classical jyotish, the *most auspicious nakshatra* — the one chosen for coronations, sacred rituals, the beginning of long undertakings that must succeed. The Saturn rulership names what the auspiciousness costs: Pushya nourishment is *earned through discipline* — the cow gives milk to the one who tends her, not to the one who demands it. Classical texts name Pushya natives loyal, philosophical, naturally given to service, with a deep instinct for the discipline that makes long-term success possible. The shadow is the *moralism* of the disciplined — the Pushya person who has paid the price and resents those who have not.",
    when_active: 'The Moon transits Pushya once a sidereal month — *the* window in classical jyotish for major beginnings: the coronation, the wedding, the launch, the long undertaking. Pushya moon is good for everything *except* marriage (a strange classical exception, on the grounds that Pushya tends toward service rather than partnership).',
    in_love: 'Pushya love is loyal, devoted, often service-oriented — the partner who shows love through care, discipline, and steady presence. Reversed: love-as-duty without joy — the disciplined partner who pays the price of presence without ever quite arriving in the pleasure.',
    in_work: 'Teaching, priesthood, healing, philosophy, long discipline (law, medicine, monastic practice), nourishing work that *feeds* others (chefs, therapists, caregivers, educators). Pushya is the patron of *the worthwhile long career*.',
    the_gift: "*Disciplined nourishment.* The capacity to feed others — students, patients, children, communities — from a well that the discipline of the practitioner has kept full.",
    the_shadow: "Moralism-of-the-disciplined. Pushya unbalanced becomes superior to those who have not paid the same price — the guru who looks down on the householder, the monk who looks down on the worker, the teacher who looks down on the student. The Brihaspati-side teaches: sacred speech *uplifts*, never *diminishes*.",
    pair_with_chakra: 'Heart — Pushya in Cancer lives in the heart, the seat of nourishing love and the milk-and-honey of the spiritual mother. Pair Pushya work with heart-chakra practice when the question is *am I nourishing from a full well, or from depletion*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What in my life is asking for the *Pushya begin* — the long undertaking, the coronation-level commitment, the discipline I have been postponing because the cost is real?',
      'Where am I nourishing others *from depletion* — paying the price of Pushya without keeping the well full enough for the giving to be clean?',
      'If Brihaspati the guru sat beside me, which of my disciplines would he call uplifting and which would he call moralistic?'
    ]
  },
  {
    n: 9, slug: 'ashlesha', name: 'Ashlesha', sanskrit: 'आश्लेषा', glyph: '🐍',
    symbol: 'the coiled serpent — the kundalini that binds and the wisdom that hisses',
    deity: 'the Nagas — the serpent-spirits, keepers of hidden wisdom and venom',
    ruler: 'Mercury', ruler_slug: 'mercury', yoni: 'male cat', gana: 'rakshasa',
    sign_range: "Cancer 16°40' – 30°00'", zodiac_pair: 'Cancer', zodiac_slug: 'cancer',
    family: 'personal',
    one_liner: 'The coiled serpent — the wisdom that hisses, the embrace that can heal or constrict, the kundalini at rest at the base of the spine.',
    meaning: "Ashlesha (आश्लेषा, 'the embrace' / 'the entwiner') is the ninth nakshatra, the closing 13°20' of sidereal Cancer, ruled by Mercury and presided over by the Nagas — the serpent-beings of Vedic and Hindu cosmology, keepers of underground wisdom, guardians of the treasures of the earth. The symbol is the *coiled serpent* — the kundalini-energy that lies dormant at the base of the spine until awakened, the snake whose venom is poison or medicine depending on the wielder. Ashlesha is the *most intense* of the personal-quarter nakshatras — the mansion where the individual is forced to meet the depth-energies before crossing into the social half of the wheel. Classical jyotish names Ashlesha natives penetratingly intelligent, magnetic, often skilled in healing or in influence, with a natural gift for *seeing through* people's surfaces. The Mercury rulership names the *speech-power* of the serpent: Ashlesha words can heal or wound with surgical precision. The shadow is the *venom turned inward or outward* — manipulation, addiction, the serpent that bites its own tail or strikes the innocent.",
    when_active: 'The Moon transits Ashlesha once a sidereal month — a window for *facing the coiled energies*: the addiction, the manipulation pattern, the inherited family-pattern, the kundalini practice. Ashlesha moon is bad for negotiation (the energy will be too intense) and excellent for the work that requires going underground.',
    in_love: 'Ashlesha love is intense, magnetic, often consuming. The Ashlesha partner sees through you in a way that is either healing or unsettling, depending on the alignment. Reversed: love-as-coiling — the embrace that becomes constriction, the magnetism that becomes manipulation.',
    in_work: 'Healing (especially shadow-work, addiction recovery, depth psychology), influence (PR, persuasion, political consulting), hypnosis, esoteric studies, herbalism, surgery, investigative work that requires going where others cannot. Ashlesha-work *thrives in the underground*.',
    the_gift: '*Penetrating sight.* The capacity to see through surfaces, to know what is underneath the words, to wield speech that heals because it is true at depth. Ashlesha is the proof that the underground holds the medicine the surface lacks.',
    the_shadow: "Venom misdirected. Ashlesha unbalanced uses the penetrating gift to *manipulate* rather than to *heal* — the influence-without-consent, the addiction (substance or relational), the inherited family-pattern that bites the next generation. The Naga-side teaches: the serpent's venom *heals* when consciously offered, *poisons* when reactively spilled.",
    pair_with_chakra: 'Sacral — Ashlesha in late Cancer lives at the sacral, the seat of the kundalini, intimacy, and the depth-energies. Pair Ashlesha work with sacral-chakra practice when the question is *what coiled energy is asking to be wielded consciously*.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What coiled energy in my life — addiction, magnetism, inherited family-pattern, kundalini — is asking to be wielded consciously rather than acted out unconsciously?',
      'Where is my Ashlesha-gift (the penetrating seeing) being used to *manipulate* rather than to *heal* — including in subtle ways?',
      'If the Nagas were the keepers of my underground treasures, which one would they say I am ready to bring up, and which is not yet time?'
    ]
  },
  {
    n: 10, slug: 'magha', name: 'Magha', sanskrit: 'मघा', glyph: '👑',
    symbol: 'the royal throne — the seat of the ancestors, the dignity of lineage',
    deity: 'the Pitris — the ancestors, the fathers, the lineage-fathers',
    ruler: 'Ketu', ruler_slug: 'ketu', yoni: 'male rat', gana: 'rakshasa',
    sign_range: "Leo 0°00' – 13°20'", zodiac_pair: 'Leo', zodiac_slug: 'leo',
    family: 'social',
    one_liner: 'The royal throne — the seat the ancestors prepared, the lineage that walks in through you.',
    meaning: "Magha (मघा, 'the great one' / 'the mighty') is the tenth nakshatra, the opening 13°20' of sidereal Leo, ruled by Ketu and presided over by the *Pitris* — the ancestors, the lineage-fathers who watch over their descendants. The symbol is the *royal throne* — the seat of inherited dignity, the chair the lineage prepared. The presiding star is Regulus, the heart of the Lion, the *little king*. Magha is the gateway to the social half of the wheel: the individual (personal nakshatras) is now asked to take their place in the lineage and in society. Classical jyotish names Magha natives dignified, ambitious, capable of leadership, deeply connected to family and ancestry, with a natural sense of *what their lineage is asking them to embody*. The Ketu rulership (echoing Ashwini, the wheel-opener) names the *past-life* component — Magha people often feel they are completing work begun by their predecessors. The shadow is the *entitled throne* — sitting on the inherited dignity without doing the work to earn it in this lifetime.",
    when_active: 'The Moon transits Magha once a sidereal month — a window for *honouring the ancestors* (rituals, family-history work, lineage-clearing), claiming public-facing position, accepting a leadership role, or stepping into a role someone in the lineage held before. Magha moon is especially powerful for ancestral work — the Pitris are nearest at this transit.',
    in_love: 'Magha love is dignified, often family-conscious, looking for the partner the lineage approves of. The Magha partner is loyal, generous in public ways. Reversed: love that is *more about lineage than about the person* — the marriage chosen for ancestors rather than for the soul.',
    in_work: 'Leadership, public-facing roles, work that *carries a lineage forward* (family business, institutional leadership, traditional craft, classical art, politics, judiciary). Magha-work shines when the practitioner consciously serves a tradition larger than themselves.',
    the_gift: '*Lineage dignity.* The capacity to sit on the inherited throne with the consciousness that you are continuing the work of those who came before — and the discipline of doing your own work to deserve the seat.',
    the_shadow: 'Entitlement of the inherited throne. Magha unbalanced wears the dignity without doing the work — the heir who lives off the inheritance, the leader who confuses the role with the labor. The Pitris-side teaches: the throne is a *post*, not a reward.',
    pair_with_chakra: 'Solar plexus — Magha in early Leo lives in the solar plexus, the seat of dignity, leadership, and right-pride. Pair Magha work with solar-plexus practice when the question is *am I earning the seat my lineage prepared*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What work did my lineage start that I am being asked to continue — and am I serving it consciously or unconsciously?',
      'Where am I *sitting on inherited dignity* without paying the labor that would earn the seat in this lifetime?',
      'If the Pitris (my ancestors) stood behind me at every meeting, which of my actions would they bless and which would they ask me to refine?'
    ]
  },
  {
    n: 11, slug: 'purva-phalguni', name: 'Purva Phalguni', sanskrit: 'पूर्व फाल्गुनी', glyph: '🛏️',
    symbol: 'the front legs of the bed / the hammock — the place of rest, pleasure, courtship',
    deity: 'Bhaga — the god of marital felicity, shared good fortune',
    ruler: 'Venus', ruler_slug: 'venus', yoni: 'female rat', gana: 'manushya',
    sign_range: "Leo 13°20' – 26°40'", zodiac_pair: 'Leo', zodiac_slug: 'leo',
    family: 'social',
    one_liner: "Bhaga's bed — the front legs of the hammock, the pleasure of courtship, the celebrating of what life has given.",
    meaning: "Purva Phalguni (पूर्व फाल्गुनी, 'former / front of the bed') is the eleventh nakshatra, sidereal Leo 13°20'–26°40', ruled by Venus and presided over by Bhaga — the Vedic god of *marital felicity, shared good fortune, the dignified celebration of what life has given*. The symbol is the *front legs of the bed* (or the front of a hammock), naming the *lying down* part of life — pleasure, courtship, leisure, the celebration. Purva Phalguni is the nakshatra of *enjoying what has been earned*. Classical jyotish names Purva Phalguni natives warm, generous, attractive, sociable, with a natural gift for hospitality, romance, and celebration. The Venus rulership names the *aesthetic* of the celebration — Purva Phalguni people make pleasure into an art. The shadow is the celebration that *forgets the work* — the pleasure-as-escape, the perpetual party, the romance-without-foundation.",
    when_active: 'The Moon transits Purva Phalguni once a sidereal month — a window for *celebration*: weddings, parties, courtship, romantic evenings, taking the well-earned rest. Purva Phalguni moon is excellent for first dates, betrothals, and beginning anything that should be *enjoyable*.',
    in_love: 'Purva Phalguni love is warm, romantic, celebratory — the partner who makes the relationship into an ongoing pleasure. Reversed: love-as-pleasure-without-presence — the partner who enjoys the romance but cannot sustain through the harder seasons.',
    in_work: 'Hospitality, entertainment, romance industries (events, weddings, fashion), pleasure-arts (cooking, perfumery, wine), performance, celebrity culture. Purva Phalguni shines when the *experience itself* is the product.',
    the_gift: '*Celebrative pleasure.* The capacity to fully enjoy what has been given, to make pleasure into a discipline, to remind the rest of us that the work was *for the celebration*.',
    the_shadow: 'Pleasure-as-escape. Purva Phalguni unbalanced cannot stop celebrating long enough to do the work that makes the celebration possible — the perpetual party-thrower whose finances and relationships are in quiet crisis underneath.',
    pair_with_chakra: 'Sacral — Purva Phalguni Venus-rulership lives at the sacral, the seat of pleasure, sensuality, and courtship. Pair Purva Phalguni work with sacral-chakra practice when the question is *am I celebrating what was earned, or escaping what is unfaced*.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What in my life is asking to be *celebrated* — properly, with friends, with food, with romance — that I have been treating as undeserving of pause?',
      'Where am I using pleasure as *escape* — Purva Phalguni without the foundation that earned it?',
      'If Bhaga the god of shared good fortune sat at my table, which of my celebrations would he bless as honest and which would he name as avoidance?'
    ]
  },
  {
    n: 12, slug: 'uttara-phalguni', name: 'Uttara Phalguni', sanskrit: 'उत्तर फाल्गुनी', glyph: '🤝',
    symbol: 'the back legs of the bed — the foundation under the marriage, the partnership-contract',
    deity: 'Aryaman — the god of contracts, hospitality, and the bond between friends',
    ruler: 'Sun', ruler_slug: 'sun', yoni: 'bull', gana: 'manushya',
    sign_range: "Leo 26°40' – Virgo 10°00'", zodiac_pair: 'Leo / Virgo', zodiac_slug: 'leo',
    family: 'social',
    one_liner: "Aryaman's contract — the back legs of the bed, the foundation under every honest partnership, the bond that survives the seasons.",
    meaning: "Uttara Phalguni (उत्तर फाल्गुनी, 'latter / back of the bed') is the twelfth nakshatra, straddling sidereal Leo 26°40' and Virgo 10°00', ruled by the Sun and presided over by Aryaman — the Vedic god of *contracts, hospitality, the bond between friends*, one of the twelve Adityas, the solar deities. Where Purva Phalguni is the *front* of the bed (the courtship, the romance, the celebration), Uttara Phalguni is the *back* — the foundation, the discipline that makes the partnership last, the contract underneath the romance. Classical jyotish names Uttara Phalguni natives reliable, generous in friendship, capable of sustaining the long partnership, with a natural gift for the *bond that survives seasons*. The Sun rulership names the *dignity* of the contract — Uttara Phalguni keeps the promise even when no one is watching. The shadow is the *contract that became cold* — the marriage maintained for the form, the friendship continued out of obligation rather than love.",
    when_active: 'The Moon transits Uttara Phalguni once a sidereal month — a window for *making contracts*: marriages, business partnerships, formal agreements, the moving-in-together, the legal commitment. Uttara Phalguni moon is excellent for *anything that needs to last*.',
    in_love: 'Uttara Phalguni love is the love that *commits and stays* — the marriage, the long friendship, the partnership maintained through the years. Reversed: love-by-contract-without-warmth — the partnership that became transactional, the friendship that became duty.',
    in_work: 'Long partnerships, co-founder relationships, alliances, contractual work (law, real-estate, diplomacy), institutional service, friendship-based businesses. Uttara Phalguni shines in *the work that lasts a decade with the same people*.',
    the_gift: '*Contract-keeping warmth.* The capacity to commit and stay — to maintain the partnership through the unromantic seasons because the contract was made consciously and the partnership matters.',
    the_shadow: 'Contract-without-warmth. Uttara Phalguni unbalanced keeps the form without the substance — the marriage that is technically intact and emotionally empty, the friendship that meets monthly out of habit. The Aryaman-side teaches: the *bond* is sacred; the *form* is its servant.',
    pair_with_chakra: 'Heart — Uttara Phalguni at the Leo-Virgo cusp lives in the heart, the seat of committed bonded love. Pair Uttara Phalguni work with heart-chakra practice when the question is *is this commitment still warm, or has it become only form*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What commitment in my life is asking for *Uttara Phalguni renewal* — the conscious re-making of the contract that has been maintained on form alone?',
      'Where am I keeping the contract while letting the warmth drain — the marriage, the friendship, the partnership running on Aryaman without Bhaga?',
      'If Aryaman the contract-god sat at my desk, which of my commitments would he say to renew with full intent and which to release?'
    ]
  },
  {
    n: 13, slug: 'hasta', name: 'Hasta', sanskrit: 'हस्त', glyph: '✋',
    symbol: 'the hand — the skilled hand that crafts, heals, and grasps what is needed',
    deity: 'Savitar — the solar deity of inspiration, the giver of impulse',
    ruler: 'Moon', ruler_slug: 'moon', yoni: 'female buffalo', gana: 'deva',
    sign_range: "Virgo 10°00' – 23°20'", zodiac_pair: 'Virgo', zodiac_slug: 'virgo',
    family: 'social',
    one_liner: "Savitar's hand — the skilled hand that crafts the gift, heals the body, grasps what the moment asks for.",
    meaning: "Hasta (हस्त, 'the hand') is the thirteenth nakshatra, sidereal Virgo 10°00'–23°20', ruled by the Moon and presided over by Savitar — the solar deity of *inspiration*, the giver of the impulse-to-act, the Vedic god to whom the Gayatri Mantra is addressed. The symbol is the *hand*, and the nakshatra is named for the five fingers — the five attributes of skilled action: the thumb of *grasping*, the index of *pointing*, the middle of *measuring*, the ring of *adorning*, the little finger of *delicacy*. Hasta is the nakshatra of *craft* — the skilled hand that makes what the world needs. Classical jyotish names Hasta natives clever, dexterous, gifted in craft, healing, and detailed work, with a natural ability to *bring the inspiration into form*. The Moon rulership names the *responsiveness* of the hand: Hasta people read the moment and adjust the work to fit it. The shadow is the *hand that grasps too much* — taking on more than can be done well, the manipulator who uses the skilled hand for sleight.",
    when_active: 'The Moon transits Hasta once a sidereal month — a window for *crafted work*: making the prototype, beginning the apprenticeship, doing the healing session, the detailed labor that requires the skilled hand. Hasta moon is excellent for *anything that requires precision*.',
    in_love: 'Hasta love is attentive, often expressed through *acts of skilled care* — cooking, healing touch, making the home beautiful, building things for the partner. Reversed: love-as-control through skilled hands — the partner who manages the relationship like a craftwork project.',
    in_work: 'Craft (any), healing (especially hands-on bodywork, surgery, massage), detailed work (editing, accounting, programming), agriculture, design. Hasta-work is wherever the *hand* makes the difference.',
    the_gift: '*Skilled responsiveness.* The capacity to read the moment and make what it needs with hands that have practiced for years. Hasta is the proof that mastery is *built one detail at a time*.',
    the_shadow: 'Grasping more than the hand can hold. Hasta unbalanced takes on more than can be done well — the perpetual yes that produces mediocre work because the hand is overextended. The Savitar-side teaches: inspiration is *abundant*; the hand is *finite*; choose.',
    pair_with_chakra: 'Throat — Hasta in Virgo lives at the throat, the seat of skilled articulation and the precise word. Pair Hasta work with throat-chakra practice when the question is *what is my hand being asked to make right now*.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'What is my Hasta hand being asked to make in this season — the craft, the healing, the precise work — and am I giving it the time it requires?',
      'Where am I *grasping more than the hand can hold* — saying yes to so much that nothing receives the full quality of my making?',
      'If Savitar the inspiration-giver were watching my hands at work, which of my craft would he bless as fully attended and which would he ask me to slow down for?'
    ]
  },
  {
    n: 14, slug: 'chitra', name: 'Chitra', sanskrit: 'चित्रा', glyph: '💎',
    symbol: 'the bright jewel / the pearl — the brilliant work, the architect, the shining one',
    deity: "Tvashtar — the divine craftsman, the artificer of the gods' weapons",
    ruler: 'Mars', ruler_slug: 'mars', yoni: 'female tiger', gana: 'rakshasa',
    sign_range: "Virgo 23°20' – Libra 6°40'", zodiac_pair: 'Virgo / Libra', zodiac_slug: 'virgo',
    family: 'social',
    one_liner: "Tvashtar's jewel — the brilliant work, the architect's vision, the design that makes the world more beautiful.",
    meaning: "Chitra (चित्रा, 'the bright one' / 'the brilliant') is the fourteenth nakshatra, straddling sidereal Virgo 23°20' and Libra 6°40', ruled by Mars and presided over by Tvashtar — the divine craftsman of the Rig Veda, the artificer who fashioned Indra's thunderbolt, the architect-deity of cosmic forms. The presiding star is Spica, the brightest star in Virgo. The symbol is the *bright jewel* or *pearl* — the singular brilliant thing the artisan produces after long labor. Chitra is the nakshatra of *brilliant making* — design, architecture, art that *shines*. Classical jyotish names Chitra natives charismatic, artistically gifted, ambitious, with an eye for form and aesthetics and a Mars-driven willingness to build large things. The shadow is the *style without substance* — the brilliance that became surface, the design that prioritized appearance over function, the artisan in love with their own jewel.",
    when_active: 'The Moon transits Chitra once a sidereal month — a window for *brilliant making*: launching the designed product, opening the gallery show, beginning the architecture project, presenting the work. Chitra moon is excellent for *anything that should shine*.',
    in_love: 'Chitra love is *beautiful* — attentive to aesthetics, to the form of the relationship, to the way the partnership *appears*. Chitra partners design their love-life. Reversed: love-as-stage — the relationship maintained for how it looks, not for what it is.',
    in_work: 'Architecture, design, fashion, jewelry, branding, visual arts, fine craft, anything that produces a *singular brilliant object*. Chitra-work *announces itself* — and the practitioner is willing to be seen as a maker.',
    the_gift: '*Brilliant design.* The capacity to make work that *shines* — that announces itself, that elevates the surroundings, that brings beauty into form.',
    the_shadow: 'Style over substance. Chitra unbalanced makes the jewel hollow — the brilliant surface with nothing underneath, the design that prioritized appearance, the practitioner more in love with the work than with what the work is for.',
    pair_with_chakra: 'Throat — Chitra at the Virgo-Libra cusp lives at the throat, the seat of brilliant articulation and visible expression. Pair Chitra work with throat-chakra practice when the question is *is my brilliance in service of something beyond itself*.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'What in my life is the Chitra-jewel I am polishing — and have I built the substance under the brilliance?',
      'Where am I prioritizing *how it looks* over *what it does* — Chitra without Hasta, design without craft?',
      'If Tvashtar the divine craftsman examined my current work, which piece would he name brilliant and which merely shiny?'
    ]
  },
  {
    n: 15, slug: 'swati', name: 'Swati', sanskrit: 'स्वाती', glyph: '🌾',
    symbol: 'the young plant moving in the wind / the sword — independent, flexible, self-going',
    deity: 'Vayu — the wind-god, the breath of the cosmos',
    ruler: 'Rahu', ruler_slug: 'rahu', yoni: 'male buffalo', gana: 'deva',
    sign_range: "Libra 6°40' – 20°00'", zodiac_pair: 'Libra', zodiac_slug: 'libra',
    family: 'social',
    one_liner: "Vayu's reed in the wind — the independent one, flexible, self-going, bending without breaking.",
    meaning: "Swati (स्वाती, 'the self-going one' / 'the independent one') is the fifteenth nakshatra, sidereal Libra 6°40'–20°00', ruled by Rahu and presided over by Vayu — the wind-god, the prana, the breath of the cosmos. The symbol is the *young plant moving in the wind* (or alternately, the *sword*) — the slender stalk that bends in every direction and never breaks because its strength is in its flexibility. The presiding star is Arcturus. Swati is the nakshatra of *independence* — the soul that goes its own way, that cannot be pushed or coerced, that bends and rises again. Classical jyotish names Swati natives diplomatic (Libra placement), independent, gifted in trade and negotiation (Vayu's mobility), capable of weathering shifting fortunes because they do not over-attach. The Rahu rulership names the *hunger* in the independence: Swati people are searching for something the wind keeps pointing them toward, and they cannot stay still long enough to be domesticated. The shadow is the *isolation* — the independence that became loneliness, the bending that turned to rootlessness.",
    when_active: 'The Moon transits Swati once a sidereal month — a window for *independent action*: leaving the job, beginning the solo venture, choosing your own way against the family-pressure, the trip taken alone. Swati moon is excellent for *anything that requires going your own direction*.',
    in_love: 'Swati love requires *space* — the Swati partner cannot be possessed, cannot be domesticated, will love you fully and still need solitude. Reversed: the independence that prevented intimacy — bending away from depth, mistaking distance for freedom.',
    in_work: 'Trade, travel, diplomacy, sales, consulting, solo-practice in any field, art, writing, anything where the practitioner *goes their own way*. Swati-work shines in *the independent path*.',
    the_gift: '*Flexible independence.* The capacity to bend without breaking, to go your own way without losing your roots, to weather changing fortunes because your strength is in your responsiveness, not in your rigidity.',
    the_shadow: 'Independence-as-isolation. Swati unbalanced cannot stay long enough to be known — the wind that keeps moving, the relationship that ended just as it began deepening. The Vayu-side teaches: the wind *touches* every leaf; the touch is the connection.',
    pair_with_chakra: 'Heart — Swati in Libra lives at the heart, the seat of independent loving. Pair Swati work with heart-chakra practice when the question is *am I bending toward freedom or away from intimacy*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What in my life is asking for *Swati self-going* — the independent move my family or context will not approve of?',
      'Where is my independence preventing the *intimacy* that would deepen me — bending away from depth in the name of freedom?',
      'If Vayu the wind were teaching me, which of my movements would he call responsive flexibility and which mere restlessness?'
    ]
  },
  {
    n: 16, slug: 'vishakha', name: 'Vishakha', sanskrit: 'विशाखा', glyph: '🌿',
    symbol: 'the forked branch / the triumphal archway — the goal that requires the long aim',
    deity: 'Indra and Agni — the storm-king and the fire, paired in purposeful action',
    ruler: 'Jupiter', ruler_slug: 'jupiter', yoni: 'male tiger', gana: 'rakshasa',
    sign_range: "Libra 20°00' – Scorpio 3°20'", zodiac_pair: 'Libra / Scorpio', zodiac_slug: 'libra',
    family: 'social',
    one_liner: "Indra and Agni's archway — the goal that requires the long aim, the forked branch where the practitioner chooses the path.",
    meaning: "Vishakha (विशाखा, 'the forked one' / 'two-branched') is the sixteenth nakshatra, straddling sidereal Libra 20°00' and Scorpio 3°20', ruled by Jupiter and presided over by Indra and Agni *together* — the only nakshatra with dual deities, naming the alliance of *storm-power and fire-power in purposeful action*. The symbol is the *forked branch* (the choice between paths) and the *triumphal archway* (the structure that marks the achievement). Vishakha is the nakshatra of *focused ambition* — the practitioner who takes the long aim and refuses to be deflected. Classical jyotish names Vishakha natives ambitious, goal-oriented, capable of intense focus, with a natural gift for *staying with the target through the years it takes*. The Jupiter rulership names the *wisdom* required: Vishakha succeeds when the goal is worth the aim. The shadow is the *goal that consumed the goal-setter* — ambition that hollowed out the person, the archway built at the cost of everything else.",
    when_active: 'The Moon transits Vishakha once a sidereal month — a window for *taking the long aim*: setting the multi-year goal, beginning the apprenticeship that will take a decade, committing to the practice that will pay off in twenty years. Vishakha moon is excellent for *anything that requires sustained focus*.',
    in_love: 'Vishakha love is determined — the partner who chose you and will work toward the relationship as a long aim. Reversed: love-as-conquest — the partner who pursued you for the win and lost interest after the archway was built.',
    in_work: 'Ambitious long-term projects, founding companies, political careers, athletic peak-performance, doctorates, the long mastery of a craft. Vishakha-work shines in *what takes a decade*.',
    the_gift: '*Focused long aim.* The capacity to stay with a goal through the seasons of resistance, to keep the target visible when the immediate environment cannot see it, to walk under the archway you built with your own labor.',
    the_shadow: 'Goal that ate the goal-setter. Vishakha unbalanced sacrifices everything to the aim — health, relationships, joy — and arrives at the archway with no one to walk through it beside. The Indra-Agni teaching: the *storm-fire* alliance is for *purposeful action*, not for self-immolation.',
    pair_with_chakra: 'Solar plexus — Vishakha at the Libra-Scorpio cusp lives at the solar plexus, the seat of willed ambition. Pair Vishakha work with solar-plexus practice when the question is *is this goal worth the years it will cost*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What long aim am I currently holding — and is it worth the years of focus the archway will require?',
      'Where is my Vishakha-ambition consuming the *life that would walk under the archway* — costing the relationships and joys for which the goal was originally a means?',
      'If Indra and Agni walked beside me, would they bless this aim as purposeful or name it as compensation for an emptiness the goal cannot fill?'
    ]
  },
  {
    n: 17, slug: 'anuradha', name: 'Anuradha', sanskrit: 'अनुराधा', glyph: '🪷',
    symbol: 'the lotus / the triumphal archway after the friendship — devotion that crosses time',
    deity: 'Mitra — the god of friendship, of the binding oath, of the shared dawn',
    ruler: 'Saturn', ruler_slug: 'saturn', yoni: 'female deer', gana: 'deva',
    sign_range: "Scorpio 3°20' – 16°40'", zodiac_pair: 'Scorpio', zodiac_slug: 'scorpio',
    family: 'social',
    one_liner: "Mitra's lotus — devotion that keeps blooming, the friend who stays through every season, the loyalty that crosses time.",
    meaning: "Anuradha (अनुराधा, 'following Radha' / 'success of devotion') is the seventeenth nakshatra, sidereal Scorpio 3°20'–16°40', ruled by Saturn and presided over by Mitra — the Vedic god of *friendship, of the binding oath, of the shared dawn*. Mitra is the day-deity twin of Varuna (the night), and the deity *Mitra* (friendship) gives us the Sanskrit and Persian *mithra* and the word *meet*. The symbol is the *lotus* (devotion that grows up through dark water), or alternatively the *triumphal arch built by the friends after the campaign*. Anuradha is the nakshatra of *devoted friendship* — the bond that survives geographic distance, the oath that crosses decades, the deep partnership that does not need to perform. Classical jyotish names Anuradha natives loyal, devoted, capable of profound friendship, often gifted with the ability to gather long-loyal communities, with a steadiness that grows over time (the Saturn rulership). The shadow is the *devotion that obscures the devotee* — losing the self in service of the bond.",
    when_active: 'The Moon transits Anuradha once a sidereal month — a window for *renewing friendships*: the long-overdue reunion, the message to the friend you have lost touch with, the renewal of the oath. Anuradha moon is excellent for *anything that requires loyalty over time*.',
    in_love: 'Anuradha love is *devoted* — the partner who shows up through illness, financial crisis, and the seasons that test every union. Reversed: devotion that erased the devotee — losing the self in the service of the bond.',
    in_work: 'Community-building, alliances, long-term partnerships, fundraising (the loyal-donor base), spiritual practice, devotional traditions, brand-loyalty work. Anuradha shines wherever *long-loyal community* is the asset.',
    the_gift: '*Devotion that grows.* The capacity to keep the bond alive through years and across distances, to be the friend who stays, to build the kind of community that outlives the founders.',
    the_shadow: 'Self-erasure in devotion. Anuradha unbalanced loses the self in service of the bond — the devotee who became invisible, the friend who exists only for others. The Mitra-side teaches: friendship is *between two who remain whole*; the bond requires both, not one absorbed into the other.',
    pair_with_chakra: 'Heart — Anuradha in Scorpio lives at the heart, the seat of devotion. Pair Anuradha work with heart-chakra practice when the question is *am I devoted and whole, or devoted and erased*.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What friendship is currently asking for *Anuradha renewal* — the message I have been postponing, the loyalty I have been letting drift?',
      'Where is my devotion erasing me — Anuradha that has become self-loss rather than self-and-other?',
      'If Mitra the friendship-god sat beside my closest bond, which of my devotions would he bless as alive and which would he name as habit?'
    ]
  },
  {
    n: 18, slug: 'jyeshtha', name: 'Jyeshtha', sanskrit: 'ज्येष्ठा', glyph: '👁️',
    symbol: 'the earring / the umbrella / the talisman — the protective amulet of the elder',
    deity: 'Indra — the storm-king, the wielder of the thunderbolt, chief of the Vedic gods',
    ruler: 'Mercury', ruler_slug: 'mercury', yoni: 'male deer', gana: 'rakshasa',
    sign_range: "Scorpio 16°40' – 30°00'", zodiac_pair: 'Scorpio', zodiac_slug: 'scorpio',
    family: 'social',
    one_liner: "Indra's thunderbolt — the elder who has won the right to carry the protective amulet, power earned through trial.",
    meaning: "Jyeshtha (ज्येष्ठा, 'the eldest' / 'the senior') is the eighteenth nakshatra, the closing 13°20' of sidereal Scorpio, ruled by Mercury and presided over by Indra — the storm-king of the Vedic pantheon, wielder of the thunderbolt, chief of the gods. The symbol is the *earring* (the mark of the elder, the talisman of seniority) or the *umbrella* (the protective canopy held over the worthy). Jyeshtha is the nakshatra of *the eldest* — the elder sibling, the senior practitioner, the one who has been through enough trials to carry the talisman. Classical jyesthma names Jyeshtha natives capable, courageous, often deeply protective of those weaker than themselves, prone to assuming responsibility beyond their years, with a natural seniority. The Indra-rulership names the *thunderbolt-aspect*: Jyeshtha people can call lightning when the situation requires it. The shadow is the *loneliness of the eldest* — carrying responsibility no one else will, isolated by seniority, sometimes resenting the role.",
    when_active: 'The Moon transits Jyeshtha once a sidereal month — a window for *assuming senior responsibility*: taking the protective role, defending what is vulnerable, claiming the elder-position. Jyeshtha moon is intense and powerful — best for serious matters, bad for trivial undertakings.',
    in_love: 'Jyeshtha love is *protective* — the partner who guards the relationship, defends the family, holds the role of the strong one. Reversed: protection-that-controls — the partner who is so guarding that the guarded one cannot breathe.',
    in_work: 'Leadership of difficult teams, protective work (security, advocacy, defense, military, law enforcement), eldest-sibling work in any family business, work that requires *assuming the lightning*. Jyeshtha shines where seniority is earned through trial.',
    the_gift: '*Earned seniority.* The capacity to carry the talisman the elders carry — to be the protective canopy, to call the lightning when the situation requires, to be the one others rely on.',
    the_shadow: 'Lonely elder. Jyeshtha unbalanced carries the role at the cost of the self — isolated by responsibility, resentful of those who do not see what the carrying costs, unable to set down the umbrella long enough to be vulnerable. The Indra-side teaches: even the storm-king has Indrani; even the eldest needs to be held.',
    pair_with_chakra: 'Solar plexus — Jyeshtha in late Scorpio lives at the solar plexus, the seat of dignified protective power. Pair Jyeshtha work with solar-plexus practice when the question is *whom am I protecting, and who is protecting me*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What responsibility am I currently carrying that asks for the *Jyeshtha thunderbolt* — and have I claimed the seniority cleanly or am I performing it under protest?',
      'Where is my protective Jyeshtha role isolating me — being the eldest at the cost of being vulnerable?',
      'If Indra were teaching me to wield the thunderbolt, which of my uses of power would he call rightful and which would he name as the eldest acting out their loneliness?'
    ]
  },
  {
    n: 19, slug: 'mula', name: 'Mula', sanskrit: 'मूल', glyph: '🌱',
    symbol: 'the bunch of roots / the tied bundle — the root that goes to the source',
    deity: 'Nirriti — the goddess of dissolution, of the necessary destruction',
    ruler: 'Ketu', ruler_slug: 'ketu', yoni: 'male dog', gana: 'rakshasa',
    sign_range: "Sagittarius 0°00' – 13°20'", zodiac_pair: 'Sagittarius', zodiac_slug: 'sagittarius',
    family: 'spiritual',
    one_liner: "Nirriti's tied roots — the digging-down to the source, the dissolution that makes the new ground.",
    meaning: "Mula (मूल, 'the root') is the nineteenth nakshatra, the opening 13°20' of sidereal Sagittarius, ruled by Ketu and presided over by Nirriti — the goddess of *dissolution, of the necessary destruction, of the calamity that clears the way*. The symbol is the *bunch of tied roots*, naming the digging-down to the source. Mula opens the spiritual quarter of the wheel: where the social half asked the soul to claim a place in the world, the spiritual half asks the soul to *uproot what has been claimed and find what is underneath*. Classical jyotish names Mula natives philosophical, fierce, deeply curious about origins (etymology, archaeology, depth psychology, root-cause analysis), often called through painful initiations that strip them down to what is essential. The Ketu rulership and the Nirriti deity together name the *dissolution-energy*: Mula people are sometimes the ones in whose lives things *fall apart so the deeper foundation can be reached*. The shadow is the *attraction to destruction for its own sake* — uprooting what need not be uprooted, mistaking demolition for liberation.",
    when_active: 'The Moon transits Mula once a sidereal month — a window for *root-work*: getting to the bottom of the problem, the depth-therapy session, the genealogy research, the practice that goes to the source. Mula moon is bad for new ventures (the energy is dissolving, not building) and excellent for *finishing what needs to end*.',
    in_love: 'Mula love is intense, root-going, often transformative — the partner who shows you what was buried in you, the relationship that uproots and replants you. Reversed: love-as-demolition — the partner who keeps tearing things down without rebuilding.',
    in_work: 'Research at the root level (etymology, archaeology, deep psychology, theology, paleontology), depth-healing work, demolition-and-rebuild work, investigative journalism, philosophy. Mula shines wherever the work requires *going to the source*.',
    the_gift: '*Root-knowing.* The capacity to dig down past the surface explanations and find what is actually underneath — the etymology, the original cause, the foundation that needs to be reckoned with.',
    the_shadow: 'Dissolution for its own sake. Mula unbalanced demolishes what need not be demolished — the relationship uprooted in a single bad season, the career left in a moment of philosophical exhaustion, the home dismantled on impulse. The Nirriti-side teaches: dissolution is *purposeful*; it clears for *what is coming*.',
    pair_with_chakra: 'Root — Mula in early Sagittarius lives at the root chakra, the seat of foundation and the dissolution-and-rebuild of the foundation. Pair Mula work with root-chakra practice when the question is *what foundation needs to be uprooted, and what needs to be left*.',
    pair_with_chakra_slug: 'root',
    key_questions: [
      'What in my life is currently asking for *Mula root-work* — the foundation that needs to be examined, the inherited pattern that needs to be traced to source?',
      'Where is my Mula-energy *dissolving for its own sake* — demolishing what could have been transformed?',
      'If Nirriti the dissolution-goddess walked through my life, which roots would she pull and which would she leave intact?'
    ]
  },
  {
    n: 20, slug: 'purva-ashadha', name: 'Purva Ashadha', sanskrit: 'पूर्व आषाढ़ा', glyph: '🌊',
    symbol: 'the winnowing basket / the fan — the invincible early water, the first victory',
    deity: 'Apas — the cosmic waters, the primordial purifying flow',
    ruler: 'Venus', ruler_slug: 'venus', yoni: 'male monkey', gana: 'manushya',
    sign_range: "Sagittarius 13°20' – 26°40'", zodiac_pair: 'Sagittarius', zodiac_slug: 'sagittarius',
    family: 'spiritual',
    one_liner: "Apas's invincible water — the first victory, the purifying flood, the fan that separates the chaff.",
    meaning: "Purva Ashadha (पूर्व आषाढ़ा, 'the earlier invincible one') is the twentieth nakshatra, sidereal Sagittarius 13°20'–26°40', ruled by Venus and presided over by Apas — the *cosmic waters* of the Rig Veda, the primordial purifying flow that washes away what no longer serves. The symbol is the *winnowing basket* (the fan that separates grain from chaff) and the *invincible water*. Purva Ashadha is the nakshatra of *the first invincible victory* — the breakthrough that comes through *yielding to the right flow*, the purification that washes a long stuckness clear. Classical jyotish names Purva Ashadha natives optimistic, ambitious, philosophical (the Sagittarius placement), persuasive, capable of riding waves of fortune with grace, with a natural gift for *purification* — clearing the field, washing the wound, separating what matters from what does not. The Venus rulership names the *grace* of the purification — Purva Ashadha cleanses without harshness. The shadow is *pride in the victory* — declaring invincibility before the work is fully done.",
    when_active: 'The Moon transits Purva Ashadha once a sidereal month — a window for *purification*: the cleanse, the clearing-out, the breaking of the stuckness, the first decisive move in a long battle. Purva Ashadha moon is excellent for *anything that requires riding a wave*.',
    in_love: 'Purva Ashadha love is *expansive, purifying* — the partner who washes you clear of an old pattern, the relationship that arrives like a flood. Reversed: love-as-conquest before depth — declaring victory at the first wave before the relationship has weathered a season.',
    in_work: 'Persuasion (sales, marketing, oratory), purification-work (cleansing, detox, decluttering, organizational restructuring), water-related work, philosophy, teaching. Purva Ashadha shines in *the first decisive wave*.',
    the_gift: '*Purifying invincibility.* The capacity to ride the cleansing wave, to win the first battle of a long campaign with grace, to separate what matters from what does not without harshness.',
    the_shadow: 'Premature triumph. Purva Ashadha unbalanced declares the war won at the first won battle — the invincibility-mood that does not survive the second wave. The Apas-side teaches: the waters *keep flowing*; the purification is *ongoing*.',
    pair_with_chakra: 'Sacral — Purva Ashadha Venus-rulership in Sagittarius lives at the sacral, the seat of flowing water and pleasure-with-purification. Pair Purva Ashadha work with sacral-chakra practice when the question is *what is being washed clear, and have I let the full wave pass*.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What in my life is asking for the *Purva Ashadha first wave* — the decisive purifying move that will clear the long stuckness?',
      'Where am I declaring victory *before the second wave has come* — calling the campaign won at the first battle?',
      'If Apas the cosmic waters poured through my life right now, what would be left standing and what would be carried away?'
    ]
  },
  {
    n: 21, slug: 'uttara-ashadha', name: 'Uttara Ashadha', sanskrit: 'उत्तर आषाढ़ा', glyph: '🐘',
    symbol: 'the elephant tusk / the planks of a bed — the later invincible one, the lasting victory',
    deity: 'the Vishvadevas — the ten universal gods, collective dharmic intelligences',
    ruler: 'Sun', ruler_slug: 'sun', yoni: 'male mongoose', gana: 'manushya',
    sign_range: "Sagittarius 26°40' – Capricorn 10°00'", zodiac_pair: 'Sagittarius / Capricorn', zodiac_slug: 'sagittarius',
    family: 'spiritual',
    one_liner: 'The lasting victory — the elephant tusk that does not break, the bed of permanence the dharmic work earns.',
    meaning: "Uttara Ashadha (उत्तर आषाढ़ा, 'the later invincible one') is the twenty-first nakshatra, straddling sidereal Sagittarius 26°40' and Capricorn 10°00', ruled by the Sun and presided over by the *Vishvadevas* — the ten universal gods, the collective dharmic intelligences of the Vedic pantheon. The symbol is the *elephant tusk* (strength that does not break) or the *planks of a bed* (the foundation under what is being built). Where Purva Ashadha is the *first* invincible victory, Uttara Ashadha is the *later, lasting* victory — the win that holds, the dharmic work that bears fruit across generations. Classical jyotish names Uttara Ashadha natives dharmic, principled, persistent, capable of *the long invincibility* — succeeding not by talent alone but by alignment with universal order. The Vishvadevas as deity name the *collective dharma* — Uttara Ashadha succeeds when serving something larger than personal ambition. The shadow is *the rigid dharma* — clinging to the principle when the principle has stopped serving life.",
    when_active: 'The Moon transits Uttara Ashadha once a sidereal month — a window for *lasting commitments*: marriages, dharmic vows, beginning long undertakings that should bear fruit for generations, taking the principled stand. Uttara Ashadha moon is *the* window for things that should *last*.',
    in_love: 'Uttara Ashadha love is the love that *holds across years* — the dharmic marriage, the partnership built on shared principle. Reversed: love-by-principle-without-feeling — the marriage that became more about the vow than about the two people inside it.',
    in_work: 'Dharmic work, leadership of institutions, judiciary, long-term policy, ethics, religious practice, anything that *serves something larger than the practitioner*. Uttara Ashadha shines in *the work that becomes legacy*.',
    the_gift: "*Lasting victory.* The capacity to build wins that hold across years, to align with universal dharma so that the work bears fruit longer than the practitioner's life.",
    the_shadow: "Rigid principle. Uttara Ashadha unbalanced clings to the dharma after the dharma has become a corpse — refusing the necessary adaptation, mistaking inflexibility for principle. The Vishvadevas teach: dharma is *the universal*; the universal *keeps moving*.",
    pair_with_chakra: 'Solar plexus — Uttara Ashadha at the Sagittarius-Capricorn cusp lives at the solar plexus, the seat of dharmic willed action. Pair Uttara Ashadha work with solar-plexus practice when the question is *am I serving the universal dharma or the dead form of it*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What dharmic work am I building that is asking for *Uttara Ashadha permanence* — the long victory that will outlast the season?',
      'Where am I serving a *dead form of dharma* — clinging to the principle that was once living but has hardened?',
      'If the Vishvadevas examined my current life, which of my commitments would they bless as serving the universal and which as serving my personal rigidity?'
    ]
  },
  {
    n: 22, slug: 'shravana', name: 'Shravana', sanskrit: 'श्रवण', glyph: '👂',
    symbol: 'the ear / the three footprints of Vishnu — the listening, the receiving of sacred sound',
    deity: 'Vishnu — the preserver, the cosmic deity who crosses the three worlds in three steps',
    ruler: 'Moon', ruler_slug: 'moon', yoni: 'female monkey', gana: 'deva',
    sign_range: "Capricorn 10°00' – 23°20'", zodiac_pair: 'Capricorn', zodiac_slug: 'capricorn',
    family: 'spiritual',
    one_liner: "Vishnu's three footprints, the listening ear — the practitioner who hears the sacred and walks where the gods have walked.",
    meaning: "Shravana (श्रवण, 'the hearing') is the twenty-second nakshatra, sidereal Capricorn 10°00'–23°20', ruled by the Moon and presided over by Vishnu — the preserver, the cosmic deity who in the *Trivikrama* myth crossed the three worlds in three steps to win them back from the asura Bali. The symbol is the *ear* (Shravana from *shru*, 'to hear' — the root of *shruti*, 'that which is heard', the Vedas themselves) and the *three footprints of Vishnu*. Shravana is the nakshatra of *sacred listening* — receiving the teaching, hearing the dharma, the disciple's ear at the foot of the guru. Classical jyotish names Shravana natives studious, scholarly, gifted in language and learning, with a natural ear for music and for the truth in what is being said, often drawn to spiritual teaching and to traditions of *shruti*. The Moon rulership names the *receptive* quality of the listening: Shravana receives the teaching before applying it. The shadow is the *passive listening* — endless reception without action, the perpetual student who never teaches.",
    when_active: 'The Moon transits Shravana once a sidereal month — a window for *receiving*: the teaching, the audiobook, the lecture, the deep conversation with the elder, the music that opens the heart. Shravana moon is excellent for *anything that requires listening before speaking*.',
    in_love: 'Shravana love is *attentive* — the partner who actually listens, who hears what was said and what was meant. Reversed: listening-without-action — the partner who hears every confession and never adjusts the behavior.',
    in_work: 'Teaching (especially traditions of *shruti* — Vedanta, classical music, language), translation, audiobook narration, music, podcasting, journalism, therapy, counseling. Shravana shines wherever the ear is the primary instrument.',
    the_gift: '*Sacred reception.* The capacity to hear what is being said — the teaching, the music, the unspoken truth in the conversation — and to receive it with the discipline of *shruti*, the heard-and-held tradition.',
    the_shadow: "Listening without doing. Shravana unbalanced receives endlessly without ever acting on what was received — the spiritual seeker who can quote every tradition and embody none of them. The Vishnu-side teaches: the *three footprints* are *taken*; the hearing is the preparation for the walking.",
    pair_with_chakra: 'Throat — Shravana in Capricorn lives at the throat, the seat of sacred hearing and articulation. Pair Shravana work with throat-chakra practice when the question is *am I letting what I have heard become what I do*.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'What teaching is currently asking for my *Shravana ear* — the deep listening that comes before the response?',
      'Where am I *listening without doing* — collecting teachings as decoration without letting them shape my life?',
      'If Vishnu took his three steps across my life today, where would the footprints land — and have I been walking in them?'
    ]
  },
  {
    n: 23, slug: 'dhanishta', name: 'Dhanishta', sanskrit: 'धनिष्ठा', glyph: '🪘',
    symbol: 'the drum / the flute — the rhythm of abundance, the music of the wealthiest',
    deity: 'the eight Vasus — the elemental deities, lords of earthly abundance',
    ruler: 'Mars', ruler_slug: 'mars', yoni: 'female lion', gana: 'rakshasa',
    sign_range: "Capricorn 23°20' – Aquarius 6°40'", zodiac_pair: 'Capricorn / Aquarius', zodiac_slug: 'capricorn',
    family: 'spiritual',
    one_liner: "The Vasus' drum — the rhythm of true abundance, the music made by the wealthiest, the percussion that calls the gods.",
    meaning: "Dhanishta (धनिष्ठा, 'the wealthiest' / 'the most abundant') is the twenty-third nakshatra, straddling sidereal Capricorn 23°20' and Aquarius 6°40', ruled by Mars and presided over by the eight Vasus — the elemental deities of the Vedic pantheon, the lords of *earthly abundance* (the eight Vasus include Prithivi/earth, Apas/water, Anila/wind, Anala/fire, Dyaus/sky, Soma/moon, Surya/sun, and Nakshatrani/stars). The symbol is the *drum* or the *flute* — the rhythm that calls the gods and the music that comes from real abundance. Dhanishta is the nakshatra of *true wealth* — not the accumulation but the *flow*, the rhythm of resources moving through. Classical jyotish names Dhanishta natives rhythmic, musical, ambitious, generous when wealth flows, with a natural sense of *timing* and of *what makes the rhythm right*. The Mars rulership names the *energy* required to keep the drum beating; the eight Vasus name the *element-mastery* — Dhanishta succeeds when working *with the elements* rather than against them. The shadow is *wealth as identity* — losing the music in the counting of the gold.",
    when_active: 'The Moon transits Dhanishta once a sidereal month — a window for *establishing rhythm*: launching a recurring practice, founding a music project, setting the cadence of a new venture, beginning a wealth-flow project (investment, business, real-estate). Dhanishta moon is excellent for *anything that needs to find its drum-beat*.',
    in_love: 'Dhanishta love has *rhythm* — the partner who knows the beat of the relationship, who can keep the music going through seasons. Reversed: relationship-as-accumulation — the partner who measures the love in possessions, not in the rhythm of the shared life.',
    in_work: 'Music, percussion, dance, finance, real-estate, investment, ensemble work that requires *rhythm-matching*, any work where *timing* is the medium. Dhanishta shines wherever the *drum-beat* of the work matters.',
    the_gift: '*Abundant rhythm.* The capacity to find the beat that makes the work flow, the music that makes the resources move, the timing that turns ordinary effort into true wealth.',
    the_shadow: "Wealth as identity. Dhanishta unbalanced confuses *the count* with *the music* — the wealthy who lost the joy in the accumulation, the practitioner whose drum became silent under the weight of what was being protected. The Vasus teach: abundance is *the elements moving*; what is hoarded stops being abundant.",
    pair_with_chakra: 'Sacral — Dhanishta at the Capricorn-Aquarius cusp lives at the sacral, the seat of rhythmic creative flow and abundance. Pair Dhanishta work with sacral-chakra practice when the question is *what is the rhythm of my abundance, and am I hoarding or moving*.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What in my life is asking for *Dhanishta rhythm* — the cadence, the beat, the timing that would let the work flow into true abundance?',
      'Where am I *hoarding what was abundance* — turning the music into possessions, the flow into stagnation?',
      'If the eight Vasus stood at my door, which of the elements (earth, water, fire, air, sky, moon, sun, stars) would they say is most active in my life and which is asleep?'
    ]
  },
  {
    n: 24, slug: 'shatabhisha', name: 'Shatabhisha', sanskrit: 'शतभिषा', glyph: '⭕',
    symbol: 'the empty circle / the 100 healers — the veil between worlds, the secret cure',
    deity: 'Varuna — the night-deity, lord of cosmic waters and binding oaths',
    ruler: 'Rahu', ruler_slug: 'rahu', yoni: 'female horse', gana: 'rakshasa',
    sign_range: "Aquarius 6°40' – 20°00'", zodiac_pair: 'Aquarius', zodiac_slug: 'aquarius',
    family: 'spiritual',
    one_liner: "Varuna's hundred healers — the empty circle, the secret cure, the veil where the unseen world touches the seen.",
    meaning: "Shatabhisha (शतभिषा, 'the hundred healers' / 'the hundred medicines') is the twenty-fourth nakshatra, sidereal Aquarius 6°40'–20°00', ruled by Rahu and presided over by Varuna — the night-deity, lord of *cosmic waters and binding oaths*, the Vedic god of *what is hidden and held*. Mitra and Varuna are paired — Mitra is friendship-day, Varuna is oath-night. The symbol is the *empty circle* — the protective enclosure, the veil between worlds — or alternately *the hundred healers*, naming the array of subtle medicines that operate on planes the body cannot see. Shatabhisha is the nakshatra of *the secret cure* — the healer who works with energies others do not perceive, the practitioner of the unseen. Classical jyotish names Shatabhisha natives reclusive, mystical, gifted in healing arts (especially the subtle and the alternative), with a natural draw to the *veil* — the place where the seen and unseen worlds touch. The Rahu rulership names the *hunger* in the seeking: Shatabhisha people are searching for medicines that orthodox traditions do not offer. The shadow is *isolation in the veil* — losing the link to the daylight world.",
    when_active: 'The Moon transits Shatabhisha once a sidereal month — a window for *secret healing*: the energy-work session, the dream-work, the alternative-medicine protocol, the meditation retreat. Shatabhisha moon is bad for public-facing work (the energy is veiled) and excellent for *the work that requires solitude*.',
    in_love: 'Shatabhisha love has a *secret quality* — the partner who knows you in a way no one else does, the relationship that lives outside the social frame. Reversed: love-as-secret — the relationship that cannot survive daylight, the partner kept hidden.',
    in_work: 'Healing (energy work, homeopathy, acupuncture, astrology, depth psychology), research into hidden subjects, technology (Aquarius placement — Shatabhisha pioneers often work in fringe tech), occult studies, intelligence work, anything that *operates behind the veil*.',
    the_gift: '*Secret medicine.* The capacity to work with energies others do not perceive, to heal through subtle means, to walk in the *veil-region* where the seen and unseen worlds touch.',
    the_shadow: "Isolation in the veil. Shatabhisha unbalanced loses the link to the daylight world — the healer who became a recluse, the mystic who cannot translate the medicine into ordinary language. The Varuna-side teaches: even the night-god is *paired with Mitra*; the veil needs the friendship-day to be of use.",
    pair_with_chakra: 'Third eye — Shatabhisha Rahu-rulership opens at the third eye, the seat of veiled sight. Pair Shatabhisha work with third-eye practice when the question is *what hidden medicine am I being asked to wield, and am I keeping the link to the daylight world*.',
    pair_with_chakra_slug: 'third-eye',
    key_questions: [
      'What secret medicine — the energy-work, the dream, the unseen healing — is currently asking for my attention?',
      'Where is my Shatabhisha veil becoming *isolation* — losing the bridge between the unseen work and the ordinary life it should serve?',
      'If Varuna the night-god held up his thousand-eyed gaze on my life, which of my hidden practices would he bless and which would he name as escape from the daylight?'
    ]
  },
  {
    n: 25, slug: 'purva-bhadrapada', name: 'Purva Bhadrapada', sanskrit: 'पूर्व भाद्रपदा', glyph: '🔥',
    symbol: 'the two-faced man / the funeral cot — the fierce ascetic fire, the threshold of transformation',
    deity: 'Aja Ekapada — the one-footed goat, ancient solar-fire deity of cosmic transformation',
    ruler: 'Jupiter', ruler_slug: 'jupiter', yoni: 'male lion', gana: 'manushya',
    sign_range: "Aquarius 20°00' – Pisces 3°20'", zodiac_pair: 'Aquarius / Pisces', zodiac_slug: 'aquarius',
    family: 'spiritual',
    one_liner: 'The one-footed goat — the fierce ascetic fire, the two-faced threshold, the cremation-pyre that purifies what survives.',
    meaning: "Purva Bhadrapada (पूर्व भाद्रपदा, 'the earlier auspicious-foot') is the twenty-fifth nakshatra, straddling sidereal Aquarius 20°00' and Pisces 3°20', ruled by Jupiter and presided over by *Aja Ekapada* — the ancient *one-footed goat*, a primordial Vedic deity of cosmic fire and transformation, sometimes considered an early form of Shiva-Rudra. The symbol is the *two-faced man* (Janus-like, looking both ways at the threshold) or alternately the *funeral cot* (the pyre on which the old self is burned). Purva Bhadrapada is the nakshatra of *fierce ascetic transformation* — the practitioner whose spiritual work involves *burning what cannot survive the next stage*. Classical jyotish names Purva Bhadrapada natives intense, philosophical, often called through trials that strip away the inessential, capable of fierce spiritual commitment, with a natural draw to the *transformative fires* (tapas, ascetic practice, dark-night-of-the-soul work). The Jupiter rulership names the *wisdom* in the burning — Purva Bhadrapada succeeds when the practitioner can name what the fire is for. The shadow is *fire without purpose* — burning for the sake of burning, the ascetic who lost touch with what the asceticism was supposed to refine.",
    when_active: 'The Moon transits Purva Bhadrapada once a sidereal month — a window for *fierce transformation*: the retreat, the fast, the renunciation, the burning-away of what cannot continue. Purva Bhadrapada moon is bad for new beginnings, excellent for *what is asking to be released through fire*.',
    in_love: 'Purva Bhadrapada love is *transformative through fire* — the partner who burns away your illusions, the relationship that strips you to the essence. Reversed: love-as-conflagration — the relationship that burns everything including what should have been kept.',
    in_work: 'Spiritual teaching (especially fierce/ascetic lineages), depth psychology, transformational work, philosophy, theology, intelligence work, anything that requires *being able to handle fire*. Purva Bhadrapada shines wherever the *pyre is the tool*.',
    the_gift: '*Transformative fire.* The capacity to burn what cannot continue and remain present at the burning — to be the practitioner the fire purifies rather than consumes.',
    the_shadow: "Fire without purpose. Purva Bhadrapada unbalanced burns for the burning — the ascetic-as-identity, the renunciation that became performance, the spiritual fire that consumed the life it was supposed to refine. The Aja Ekapada teaches: even the one-footed goat *stands*; the fire is in service of the standing.",
    pair_with_chakra: 'Solar plexus — Purva Bhadrapada at the Aquarius-Pisces cusp lives at the solar plexus, the seat of transformative will. Pair Purva Bhadrapada work with solar-plexus practice when the question is *what is this fire for, and what must survive the burning*.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'What in my life is currently on the *Purva Bhadrapada pyre* — the season of renunciation, the burning-away of what cannot continue?',
      'Where am I burning *for the sake of burning* — fire-as-identity rather than fire-in-service-of-what-comes-next?',
      'If Aja Ekapada the one-footed cosmic goat held the pyre, which of my attachments would he tell me are ready to burn and which need more time?'
    ]
  },
  {
    n: 26, slug: 'uttara-bhadrapada', name: 'Uttara Bhadrapada', sanskrit: 'उत्तर भाद्रपदा', glyph: '🌌',
    symbol: 'the twin / the serpent of the depths — the cosmic depth, the kundalini at full stretch',
    deity: 'Ahir Budhnya — the serpent of the deep, lord of the cosmic ocean-bed',
    ruler: 'Saturn', ruler_slug: 'saturn', yoni: 'female cow', gana: 'manushya',
    sign_range: "Pisces 3°20' – 16°40'", zodiac_pair: 'Pisces', zodiac_slug: 'pisces',
    family: 'spiritual',
    one_liner: 'The serpent of the depths — the cosmic-ocean-bed, the wisdom that has come from the longest journey down.',
    meaning: "Uttara Bhadrapada (उत्तर भाद्रपदा, 'the later auspicious-foot') is the twenty-sixth nakshatra, sidereal Pisces 3°20'–16°40', ruled by Saturn and presided over by *Ahir Budhnya* — the *serpent of the depths*, the cosmic deity of the ocean-bed, the foundational stillness underneath all becoming. The symbol is the *twin* (the integrated polarity, the inner pair finally at peace) or alternately the *serpent at rest at the bottom of the cosmic waters*. Where Purva Bhadrapada is the *fire* of the threshold, Uttara Bhadrapada is the *deep stillness on the other side of the fire* — the wisdom that has come from the longest journey down. Classical jyotish names Uttara Bhadrapada natives deep, wise, often quiet, contemplative, gifted in subtle understanding, with a natural orientation toward *the integration of opposites*. The Saturn rulership names the *time* it took to earn the depth — Uttara Bhadrapada wisdom is *earned through years*. The shadow is *withdrawal mistaken for depth* — using the contemplative orientation to never quite come back up to the surface where the wisdom would be of use.",
    when_active: 'The Moon transits Uttara Bhadrapada once a sidereal month — a window for *deep integration*: the long meditation, the reconciling of inner opposites, the wisdom-teaching, the work that comes from the bottom of the well. Uttara Bhadrapada moon is excellent for *anything that requires depth and patience*.',
    in_love: 'Uttara Bhadrapada love is *deep, quiet, integrative* — the partner who has done the work, who can hold both sides of you without flinching. Reversed: depth-as-withdrawal — the partner who is so deep they cannot reach you on the surface.',
    in_work: 'Contemplative work, wisdom-teaching, depth psychology, theology, philosophy, hospice, ocean and underwater work, anything that *requires the long descent*. Uttara Bhadrapada shines in *what comes from the bottom*.',
    the_gift: '*Deep integration.* The capacity to hold opposites — the inner twin, the seen and unseen, the conscious and unconscious — at peace at the bottom of the cosmic ocean.',
    the_shadow: "Withdrawal mistaken for depth. Uttara Bhadrapada unbalanced uses the contemplative orientation to never come back up — the mystic who has the wisdom and refuses to translate it, the depth that became hiding. The Ahir Budhnya teaches: the *serpent at the bottom* still *holds the cosmos up*; depth is *foundational*, not escapist.",
    pair_with_chakra: 'Crown — Uttara Bhadrapada in Pisces lives at the crown, the seat of integrated cosmic awareness. Pair Uttara Bhadrapada work with crown-chakra practice when the question is *what depth am I being asked to integrate, and am I bringing it back up to use*.',
    pair_with_chakra_slug: 'crown',
    key_questions: [
      'What in my life is currently asking for *Uttara Bhadrapada depth* — the long descent, the integration of inner opposites, the wisdom that comes from staying down longer than is comfortable?',
      'Where am I using depth *as withdrawal* — staying at the bottom because the surface is harder than the well?',
      'If Ahir Budhnya the serpent of the deep held my chart, which of my contemplations would he name as foundational and which as hiding?'
    ]
  },
  {
    n: 27, slug: 'revati', name: 'Revati', sanskrit: 'रेवती', glyph: '🐟',
    symbol: 'the fish / the drum — the safe passage home, the nourisher who guides the wanderer',
    deity: 'Pushan — the nourisher, the guide on the way, the protector of travelers and souls',
    ruler: 'Mercury', ruler_slug: 'mercury', yoni: 'female elephant', gana: 'deva',
    sign_range: "Pisces 16°40' – 30°00'", zodiac_pair: 'Pisces', zodiac_slug: 'pisces',
    family: 'spiritual',
    one_liner: "Pushan's fish — the safe passage, the nourisher who guides the wanderer home, the completion at the end of the wheel.",
    meaning: "Revati (रेवती, 'the wealthy one' / 'the abundant one') is the twenty-seventh nakshatra, the closing 13°20' of sidereal Pisces, ruled by Mercury and presided over by Pushan — the *nourisher*, the Vedic deity of *safe passage*, the protector of travelers on the road and of souls on the journey between lives. The symbol is the *fish* (the soul moving through cosmic waters) or alternately the *drum* (the rhythm that calls the wanderer home). Revati closes the wheel; it is the nakshatra of *completion, safe passage, gentle return*. After the fierce fires of Purva Bhadrapada and the depths of Uttara Bhadrapada, Revati is the *gentle ferrying* — the soul brought home, the practitioner who has crossed the entire journey and now serves as guide for those still crossing. Classical jyotish names Revati natives gentle, nurturing, generous, often natural caregivers and guides for others, with a deep instinct for *safe passage* — they know how to bring people through transitions, including the final one. The Mercury rulership names the *communication* gift: Revati speaks the language of the wanderer because Revati has been the wanderer. The shadow is the *over-giving* — exhausting the nourisher in service of the nourished.",
    when_active: 'The Moon transits Revati once a sidereal month — a window for *safe passage*: ending a journey, returning home, completing a project, accompanying someone through transition (including dying), the gentle close. Revati moon is excellent for *anything that requires gentle ending*.',
    in_love: 'Revati love is *gentle, nourishing, generous to a fault* — the partner who feeds you, who guides you home, who can hold the ferry across the river. Reversed: over-giving — the partner who feeds everyone and starves themselves, who guides others home and cannot find their own.',
    in_work: 'Caregiving, hospice, animal welfare, guidance work (mentoring, coaching, spiritual direction), travel industries, ferrying work in any form (helping others through transitions). Revati shines in *the gentle accompaniment*.',
    the_gift: '*Safe passage.* The capacity to bring others through transitions — the journey, the project, the dying — with gentleness and without hurry. Revati closes what others have started, including the wheel itself.',
    the_shadow: "Over-giving. Revati unbalanced exhausts the nourisher in service of the nourished — the caregiver who never asks for care, the guide who got everyone else home and lost their own. The Pushan-side teaches: the *nourisher* is *fed first* so that the nourishing can continue; emptying the well does not honor anyone.",
    pair_with_chakra: 'Crown — Revati in late Pisces lives at the crown, the seat of completion and gentle dissolution back into source. Pair Revati work with crown-chakra practice when the question is *am I bringing others home in a way that lets me also be brought home*.',
    pair_with_chakra_slug: 'crown',
    key_questions: [
      'What in my life is asking for *Revati safe passage* — the gentle close, the ferrying-home, the completion that needs to be done with care?',
      'Where am I *Revati-giving past my own reserves* — guiding everyone else home and losing my own way?',
      'If Pushan the nourisher took my hand at the end of the wheel, where would he bring me, and what would he ask me to set down before crossing?'
    ]
  },
]

const NAKSHATRA_BY_SLUG: Record<string, Nakshatra> = Object.fromEntries(NAKSHATRAS.map((n) => [n.slug, n]))
export const NAKSHATRA_SLUGS = NAKSHATRAS.map((n) => n.slug)

export function isNakshatraSlug(s: string): boolean {
  return Object.prototype.hasOwnProperty.call(NAKSHATRA_BY_SLUG, s)
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient (3×9):
//   personal  (1-9)   = sunrise saffron — the individual emerging, body and identity (Aries→Cancer)
//   social    (10-18) = noon amber       — relational life, status, partnership (Leo→Scorpio)
//   spiritual (19-27) = dusk indigo      — dharma, dissolution, liberation (Sagittarius→Pisces)
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  personal:  { c1: '#e08a3c', c2: '#f4b860', label: 'Personal · the individual emerging — body, identity, the first quarter of the wheel from Aries to Cancer' },
  social:    { c1: '#b8852f', c2: '#d4a558', label: 'Social · relational life, status, partnership — the Leo-through-Scorpio quarter' },
  spiritual: { c1: '#5840a8', c2: '#8a72d4', label: 'Spiritual · dharma, dissolution, liberation — the Sagittarius-through-Pisces quarter' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function nakshatraPageHTML(slug: string): string {
  const r = NAKSHATRA_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingCta = `/gab44/reading?ref=nakshatra-${slug}`

  const prev = NAKSHATRAS[(r.n - 2 + 27) % 27]
  const next = NAKSHATRAS[r.n % 27]

  const title = `${escapeHtml(r.name)} Nakshatra (${escapeHtml(r.sanskrit)}) — Meaning, Deity, Ruler &amp; How to Work With It · gab44 ✨`
  const description = `${r.name} Nakshatra (${r.sanskrit}) — meaning, deity (${r.deity.split('—')[0].trim()}), ruler (${r.ruler}), symbol (${r.symbol.split('—')[0].trim()}), zodiac range (${r.sign_range}), in love, in work, the gift, the shadow. Hand-written Vedic-lineage guide to the ${r.n}${r.n === 1 ? 'st' : r.n === 2 ? 'nd' : r.n === 3 ? 'rd' : 'th'} of 27 lunar mansions.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Nakshatras', item: `${SITE_URL}/gab44/nakshatras` },
          { '@type': 'ListItem', position: 3, name: `${r.n} · ${r.name}`, item: `${SITE_URL}/gab44/nakshatras/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} Nakshatra (${r.sanskrit}) — meaning, deity, ruler, how to work with it`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/nakshatras/${slug}`,
        about: `Vedic astrology, jyotish, nakshatra ${r.n}, ${r.name}, ${r.sanskrit}, ${r.sign_range}, ${r.deity}, ${r.ruler} rulership`
      }
    ]
  })

  const otherInFamily = NAKSHATRAS.filter((q) => q.family === r.family && q.slug !== slug).map((q) => {
    return `<a class="ph-mini" href="/gab44/nakshatras/${q.slug}"><span class="sym">${q.glyph}</span><span class="name">${q.n} · ${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/nakshatras/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} Nakshatra (${r.sanskrit}) — meaning & how to work with it`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/nakshatras/${slug}" />
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
  .sanskrit { font-size: 0.6em; color: var(--fg-muted); font-weight: 600; padding-left: 10px; letter-spacing: 0.04em; }
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
  .info-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 12px 0 24px; border-left: 4px solid var(--c1); }
  .info-card .row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; font-size: 13px; }
  @media (max-width: 520px) { .info-card .row { grid-template-columns: 1fr; } }
  .info-card .lbl { color: var(--fg-muted); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .info-card .val { color: var(--fg); font-weight: 500; margin-bottom: 6px; }
  h2 { font-size: 19px; font-weight: 700; margin: 30px 0 10px; color: var(--fg); letter-spacing: -0.01em; }
  p { margin: 0 0 14px; color: var(--fg-dim); }
  .role-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 12px 0 16px; border-left: 4px solid var(--c1); }
  .role-card h3 { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; }
  .role-card p { margin: 0; font-size: 16px; color: var(--fg); }
  .questions { background: linear-gradient(180deg, ${accent.c1}0d 0%, ${accent.c2}10 100%);
    border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px; margin: 24px 0; }
  .questions h2 { margin: 0 0 12px; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { margin-bottom: 10px; color: var(--fg); font-style: italic; }
  .pair-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 14px 0; }
  @media (max-width: 520px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 18px; font-size: 13px; text-decoration: none; color: var(--fg); }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent); text-transform: capitalize; }
  .reading-cta { background: var(--bg-1); border: 2px solid var(--c1); border-radius: 16px;
    padding: 26px 28px; margin: 32px 0 16px; }
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
      <a href="/gab44/nakshatras">all 27 nakshatras</a>
      <a href="/gab44/${r.zodiac_slug}">${r.zodiac_pair.split('/')[0].trim().toLowerCase()}</a>
      <a href="/gab44/doshas">doshas</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Nakshatras · 27 Lunar Mansions</div>
    <span class="fam-pill">${escapeHtml(accent.label.split('·')[0].trim())}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.name)}<span class="sanskrit">${escapeHtml(r.sanskrit)}</span></h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <p class="meta-line">
      <span>nakshatra ${r.n} of 27</span>
      <span>${escapeHtml(r.sign_range)}</span>
    </p>

    <div class="info-card">
      <div class="row">
        <div>
          <div class="lbl">deity</div>
          <div class="val">${escapeHtml(r.deity)}</div>
        </div>
        <div>
          <div class="lbl">ruler (graha)</div>
          <div class="val">${escapeHtml(r.ruler)}</div>
        </div>
        <div>
          <div class="lbl">symbol</div>
          <div class="val">${escapeHtml(r.symbol)}</div>
        </div>
        <div>
          <div class="lbl">yoni (animal)</div>
          <div class="val">${escapeHtml(r.yoni)}</div>
        </div>
        <div>
          <div class="lbl">gana</div>
          <div class="val">${escapeHtml(r.gana)}</div>
        </div>
        <div>
          <div class="lbl">sidereal range</div>
          <div class="val">${escapeHtml(r.sign_range)}</div>
        </div>
      </div>
    </div>

    <div class="role-card">
      <h3>The Nakshatra</h3>
      <p>${escapeHtml(r.meaning)}</p>
    </div>

    <h2>When the Moon transits ${r.name}</h2>
    <p>${escapeHtml(r.when_active)}</p>

    <h2>In love</h2>
    <p>${escapeHtml(r.in_love)}</p>

    <h2>In work</h2>
    <p>${escapeHtml(r.in_work)}</p>

    <h2>The gift</h2>
    <p>${escapeHtml(r.the_gift)}</p>

    <h2>The shadow</h2>
    <p>${escapeHtml(r.the_shadow)}</p>

    <h2>Pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/${r.zodiac_slug}">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(r.zodiac_pair)}</div>
      </a>
      <a class="pair-card" href="/gab44/chakras/${r.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_chakra_slug.replace('-', ' '))}</div>
      </a>
    </div>
    <p style="font-size:13px;color:var(--fg-muted);margin:0 0 18px">${escapeHtml(r.pair_with_chakra)}</p>

    <div class="questions">
      <h2>3 questions to sit with</h2>
      <ul>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ul>
    </div>

    <div class="reading-cta">
      <h3>Want to know which nakshatra your Moon is in? — $9</h3>
      <p>Your Moon's nakshatra is the lunar mansion the soul is born under — distinct from your western Sun-sign, and the single most predictive Vedic placement. A <strong>personal reading</strong> identifies it from your birth time and tells you what the nakshatra is asking from this life. Delivered by email within 48 hours.</p>
      <a class="cta" href="${readingCta}">Request your $9 reading →</a>
    </div>

    <div class="nav-pair">
      <a href="/gab44/nakshatras/${prev.slug}"><span class="dir">← previous</span><span class="nm">${prev.glyph} ${prev.n} · ${escapeHtml(prev.name)}</span></a>
      <a href="/gab44/nakshatras/${next.slug}"><span class="dir">next →</span><span class="nm">${next.glyph} ${next.n} · ${escapeHtml(next.name)}</span></a>
    </div>

    <h2>Other nakshatras in the ${r.family} family</h2>
    <div class="other-grid">
      ${otherInFamily}
    </div>

    <footer>
      <p>Nakshatras are the 27 lunar mansions of Vedic astrology — the divisions of the ecliptic the Moon traverses in a sidereal month. The lineage: the Vedanga Jyotisha (c. 1400-1200 BCE), Brihat Parashara Hora Shastra (c. 4th c. CE in current form), Phaladeepika, Saravali, and the living traditions of jyotish. The framing here treats each nakshatra as living teaching, not as personality-test. — <a href="/gab44">gab44</a>.</p>
    </footer>
  </main>
</body>
</html>`
}

export function nakshatrasIndexHTML(): string {
  const accent = { c1: '#e08a3c', c2: '#8a72d4' }

  const familySection = (family: 'personal' | 'social' | 'spiritual', label: string) => {
    const acc = FAMILY_ACCENT[family]
    const items = NAKSHATRAS.filter((n) => n.family === family).map((n) => `
      <a class="card" href="/gab44/nakshatras/${n.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
        <div class="card-head">
          <span class="card-glyph">${n.glyph}</span>
          <span class="card-num">${n.n}/27</span>
        </div>
        <div class="card-name">${escapeHtml(n.name)}</div>
        <div class="card-sk">${escapeHtml(n.sanskrit)}</div>
        <div class="card-deity">${escapeHtml(n.deity.split('—')[0].trim())}</div>
        <div class="card-range">${escapeHtml(n.sign_range)}</div>
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

  const description = `The full Vedic nakshatra wheel — 27 lunar mansions of jyotish, the divisions of the ecliptic the Moon traverses in a sidereal month. Hand-written guides for each: meaning, deity, ruler, symbol, in love, in work, the gift, the shadow. Honest about the lineage (Vedanga Jyotisha, Brihat Parashara Hora Shastra, Phaladeepika, Saravali), warm about the practice.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The 27 Nakshatras — Vedic Lunar Mansions — Meanings & How to Work With Each',
    description,
    url: `${SITE_URL}/gab44/nakshatras`,
    hasPart: NAKSHATRAS.map((n) => ({
      '@type': 'Article',
      name: `${n.n} · ${n.name} (${n.sanskrit})`,
      url: `${SITE_URL}/gab44/nakshatras/${n.slug}`,
      about: `${n.deity}, ruled by ${n.ruler}, ${n.sign_range}`
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 27 Nakshatras — Vedic Lunar Mansions · Meanings, Deities, Rulers &amp; How to Work With Each · gab44 ✨</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/nakshatras" />
<meta property="og:title" content="The 27 Nakshatras — Vedic Lunar Mansions · gab44" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE_URL}/gab44/nakshatras" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
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
  h1 .accent { color: var(--accent); }
  .lede { font-size: 18px; color: var(--fg-dim); max-width: 760px; margin: 0 0 18px; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .intro { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 14px 0 32px; }
  .intro h3 { margin: 0 0 8px; font-size: 16px; color: var(--fg); }
  .intro p { margin: 0 0 10px; color: var(--fg-dim); font-size: 15px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .family { margin: 38px 0; }
  .family-head { padding: 14px 18px; border-radius: 12px; margin-bottom: 18px;
    background: linear-gradient(135deg, var(--c1)15 0%, var(--c2)15 100%);
    border-left: 4px solid var(--c1); }
  .family-head h2 { margin: 0 0 6px; font-size: 22px; color: var(--fg); }
  .family-head p { margin: 0; font-size: 14px; color: var(--fg-dim); }
  .card-grid { display: grid; gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); }
  .card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; text-decoration: none; color: var(--fg);
    border-left: 4px solid var(--c1); transition: border-color 0.15s, transform 0.05s; display: block; }
  .card:hover { border-color: var(--line-strong); transform: translateY(-1px); }
  .card-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
  .card-glyph { font-size: 24px; line-height: 1; }
  .card-num { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--fg-muted); letter-spacing: 0.05em; }
  .card-name { font-size: 16px; font-weight: 700; color: var(--fg); margin-bottom: 2px; line-height: 1.2; }
  .card-sk { font-size: 11px; color: var(--fg-muted); margin-bottom: 6px; }
  .card-deity { font-size: 12px; color: var(--accent); font-weight: 500; margin-bottom: 4px; line-height: 1.3; }
  .card-range { font-size: 11px; color: var(--fg-dim); font-family: 'JetBrains Mono', monospace; }
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
      <a href="/gab44">← gab44</a>
      <a href="/gab44/doshas">doshas</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/sefirot">sefirot</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Nakshatras · 27 Lunar Mansions</div>
    <h1>The 27 <span class="accent">Nakshatras</span> — Vedic Lunar Mansions</h1>
    <p class="lede">The full Vedic wheel — the 27 divisions of the ecliptic that the Moon traverses in a sidereal month. Hand-written guides for each: meaning, deity, ruler, symbol, in love, in work, the gift, the shadow.</p>
    <p class="meta-line">Vedanga Jyotisha · Brihat Parashara Hora Shastra · Phaladeepika · Saravali · 3 families × 9 nakshatras</p>

    <div class="intro">
      <h3>How to read this wheel</h3>
      <p><strong>The nakshatra wheel is the finer-resolution Vedic map.</strong> Where the 12 western tropical signs divide the ecliptic into 30°-wedges, the 27 nakshatras divide it into 13°20'-mansions — three nakshatras to every two zodiac signs, the actual rooms the Moon passes through every sidereal month. In jyotish (Vedic astrology), <em>which nakshatra your Moon is in</em> is the single most predictive birth-chart placement — more so than the Sun-sign that anchors western popular astrology. The Moon-nakshatra is sometimes called the *janma nakshatra* (birth-star); it names the lunar mansion the soul is born under and the texture of the inner life you actually live.</p>
      <p><strong>The three families.</strong> The 27 cluster into three groups of nine. <em>Personal</em> (1–9, Ashwini through Ashlesha) — the individual emerging, body and identity, the first quarter of the wheel from Aries through Cancer. <em>Social</em> (10–18, Magha through Jyeshtha) — relational life, status, partnership, the Leo-through-Scorpio quarter where the soul takes its place in the world. <em>Spiritual</em> (19–27, Mula through Revati) — dharma, dissolution, liberation, the Sagittarius-through-Pisces quarter where the soul completes the journey and returns to source. Every chart has placements in all three families; the dominant family names where the soul is doing its current work.</p>
      <p><strong>Each nakshatra has a deity, a ruler (a planetary intelligence called a *graha*), a symbol, a yoni (animal-association), and a gana (temperament — deva/manushya/rakshasa).</strong> These are not decorative. The deity names the archetypal force the nakshatra channels (Yama presides over Bharani's carrying, Vishnu over Shravana's listening, Pushan over Revati's safe passage). The ruler names the planetary flavor the nakshatra carries (Ketu opens Ashwini and Magha and Mula; Mercury rules Ashlesha and Jyeshtha and Revati). The symbol — the horse's head, the lotus, the funeral cot, the fish — names the image the nakshatra teaches with. The yoni and gana name the temperament: Vedic astrology uses these in marriage-compatibility (the famous *Ashtakoot* matching), but they also name the energy-signature of the nakshatra in any context.</p>
      <p><strong>The lineage is real.</strong> Nakshatras predate the western zodiac signs by a millennium — the Vedanga Jyotisha (the astronomical appendix to the Vedas) is dated c. 1400–1200 BCE, with the nakshatra system already articulated. The classical synthesis is in the *Brihat Parashara Hora Shastra* (BPHS, c. 4th c. CE in current form, attributed to the sage Parashara), with the *Phaladeepika*, *Saravali*, and *Jataka Parijata* as later medieval-renaissance refinements. The framing here draws from the classical texts and from contemporary practicing jyotishis. Honest note: jyotish was kept as a Brahmin-caste discipline for centuries, and the western-yoga commercial economy has flattened nakshatra into personality-quiz content. The pages below name the lineage, the source-texts, and the cultural texture each nakshatra comes from. Pair the nakshatra with your <a href="/gab44/${'aries'}">western zodiac sign</a>, your <a href="/gab44/chakras">chakra body-map</a>, your <a href="/gab44/doshas">Ayurvedic dosha</a> — the wheels speak to each other.</p>
    </div>

    ${familySection('personal', '🌅 Personal nakshatras · 1 through 9 · Ashwini through Ashlesha')}
    ${familySection('social', '🌞 Social nakshatras · 10 through 18 · Magha through Jyeshtha')}
    ${familySection('spiritual', '🌌 Spiritual nakshatras · 19 through 27 · Mula through Revati')}

    <div class="reading-cta">
      <h3>Want to know which nakshatra your Moon is in? — $9</h3>
      <p>Your Moon-nakshatra is the lunar mansion the soul is born under — the single most predictive Vedic birth placement. A <strong>personal reading</strong> identifies it from your birth time and tells you what the nakshatra is asking from this life. Delivered by email within 48 hours.</p>
      <a class="cta" href="/gab44/reading?ref=nakshatras-index">Request your $9 reading →</a>
    </div>

    <footer>
      <p>The nakshatra wheel is older than every western divinatory tradition combined and survives because the practice it points at is real. Lineage: Vedanga Jyotisha (c. 1400-1200 BCE), Brihat Parashara Hora Shastra (c. 4th c. CE in current form), Phaladeepika, Saravali, Jataka Parijata. — <a href="/gab44">gab44</a>.</p>
    </footer>
  </main>
</body>
</html>`
}
