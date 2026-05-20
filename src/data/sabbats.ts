// Wheel of the Year — the 8 Wiccan/Neopagan sabbats — SEO funnel.
// /gab44/sabbats (index) + /gab44/sabbats/{slug}.
//
// 8 hand-written sabbat guides — the seasonal-pagan wheel. Each sabbat has its
// own search volume — "samhain meaning", "beltane ritual", "imbolc traditions",
// "yule winter solstice" are all distinct queries.
//
// Two-family taxonomy:
//  - Fire festivals / cross-quarter (Samhain, Imbolc, Beltane, Lughnasadh) =
//    ember amber — the agricultural mid-points, fixed dates, Celtic origin.
//  - Solar quarters (Yule, Ostara, Litha, Mabon) = sky gold — the astronomical
//    solstices and equinoxes, Germanic/Saxon origin.

import { SITE_URL } from '@/lib/identity'

export interface SabbatGuide {
  slug: string
  text: string
  pronunciation: string
  alt_names: string
  date_northern: string
  date_southern: string
  family: 'cross-quarter' | 'solar-quarter'
  position: number
  zodiac_gate: string
  glyph: string
  one_liner: string
  meaning: string
  what_to_actually_do: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with: string
  pair_with_link: string
  pair_with_link_text: string
  key_questions: [string, string, string]
}

export const SABBATS: SabbatGuide[] = [
  {
    slug: 'samhain',
    text: 'Samhain',
    pronunciation: 'SAH-win (Irish Gaelic)',
    alt_names: 'Hallowmas · All Hallows\' Eve · Calan Gaeaf (Welsh) · Día de los Muertos (parallel)',
    date_northern: 'October 31 – November 1 (cross-quarter, sun at 15° Scorpio)',
    date_southern: 'April 30 – May 1',
    family: 'cross-quarter',
    position: 1,
    zodiac_gate: 'Mid-Scorpio · the deepest descent point of the wheel',
    glyph: '💀',
    one_liner: 'The thin veil. The Celtic new year begins in the dark. The ancestors return, the harvest closes, the year dies into its seed.',
    meaning: 'Samhain (from Old Irish *sam-fuin*, "summer\'s end") is the oldest of the four Gaelic fire festivals, attested in the Tochmarc Emire and the Mythological Cycle (c. 9th–11th century manuscripts of much older oral tradition). It marks the end of the harvest, the close of the light half of the year, and — in the Celtic frame — the actual new year. The boundary between the living and the dead thins; the *Aos Sí* (the otherworld) walks closer. The Christian church layered All Saints (Nov 1) and All Souls (Nov 2) on top, then secular culture layered Halloween. Modern Wicca, founded by Gerald Gardner in the 1940s-50s and codified by Doreen Valiente, recovers the older substrate: this is the festival where you sit with what has died, name your dead, and let the wheel turn into its dark quarter. The witches\' new year.',
    what_to_actually_do: 'Set an ancestor altar — photographs of those who died, a candle for each, food they loved (orange, pomegranate, dark bread, whisky if they drank it). Light the candles at sunset on October 31. Say their names out loud — the ones who shaped you, the ones whose names you almost forgot, the ones you never met but whose blood you carry. Sit for an hour. Eat a small meal in their presence. The traditional dumb supper: serve a plate for the dead, eat in silence. Burn a list of what died this year that was not a person — a relationship, an identity, a hope. The fire is the threshold-keeper.',
    in_love: 'A relationship met at Samhain is met at the place where comfort burns away. The question this sabbat asks the couple: what version of us has died this year, and are we honoring the loss or pretending it didn\'t happen? Samhain-love is the conversation about what is no longer alive in the relationship — said gently, named honestly, mourned together. Couples that survive long enough do this work yearly; couples that don\'t are buried in the unsaid.',
    in_work: 'The sabbat of honest closure. What project, role, or ambition died this year and needs to be named dead? Samhain-work is not the new-year resolution; it is the funeral that has to come first. The professional who skips this stage — who launches the new venture without burying the old one — carries unfinished grief into the next light half of the year.',
    the_gift: 'The ancestors recognize you. The dead are not gone; they are folded into the soil and the blood and the body. Samhain offers the practitioner the felt-sense of standing in a long line — supported by everyone who came before, accountable to everyone who comes after. The grief, fully felt, becomes ground.',
    the_shadow: 'Samhain as cosplay. The festival reduced to costumes and candy, scrubbed of the dead. Equally shadowed: morbid rumination disguised as spirituality — the practitioner who dwells in death-aesthetic without the actual ancestor-work, the actual mourning, the actual closure. Real Samhain has weight: it makes you call your living parents, write the letter, plant the bulb that will flower in spring.',
    pair_with: 'Persephone — the queen who descends through the seven gates each autumn; the goddess of the threshold to the underworld; the patron of every Samhain rite.',
    pair_with_link: '/gab44/goddesses/persephone',
    pair_with_link_text: 'Persephone — queen of the two realms',
    key_questions: [
      'Whose name am I forgetting to say — and what would change in me if I said it out loud tonight, with a candle lit?',
      'What died this year that I have not yet given a proper funeral — a relationship, a self-image, a hope, a version of my life?',
      'If I sat with my ancestors for an hour tonight, what would they want me to stop carrying into the next cycle?'
    ]
  },
  {
    slug: 'yule',
    text: 'Yule',
    pronunciation: 'YOOL (Old English/Norse)',
    alt_names: 'Winter Solstice · Midwinter · Alban Arthan (Welsh, "Light of Arthur") · Sol Invictus (Roman parallel)',
    date_northern: 'December 20–23 (sun at 0° Capricorn — astronomical winter solstice)',
    date_southern: 'June 20–23',
    family: 'solar-quarter',
    position: 2,
    zodiac_gate: 'Capricorn 0° · the longest night, the sun reborn',
    glyph: '🌲',
    one_liner: 'The longest night. The sun is reborn. The wheel\'s lowest point — and the moment from which all light begins to return.',
    meaning: 'Yule is the Germanic/Norse winter solstice, attested in the Old Norse *Hákonar saga góða* and the Anglo-Saxon calendar (Bede\'s *De Temporum Ratione*, c. 725 CE, names *Geola* as the midwinter month). The Christian church layered Christmas onto the Roman *Sol Invictus* (Dec 25, the "unconquered sun" festival of Aurelian, 274 CE) and the older Yule complex; modern Christmas inherits the Yule log, the evergreen tree, the wreath, the gifts, the feast. Astronomically, Yule is the moment when the sun reaches its southernmost point and pauses (Latin *solstitium* — "sun standing still") for three days before beginning its return. The pagan reading is precise: this is the rebirth of the sun. The longest night is also the turning point. Everything begins to return from here.',
    what_to_actually_do: 'Stay up through the longest night. Build a fire (a real one if you have a fireplace, candles in a circle if you don\'t) and tend it from sundown to dawn. The Yule log is the central ritual: an oak log, ideally from your own land or a neighbor\'s, carved with what you want the returning sun to grow. Burn it slowly. Bring evergreens into the house — pine, holly, ivy, fir — they hold the living green through the dead months. Eat slowly and well. At dawn, walk outside and greet the sun.',
    in_love: 'A relationship lit at Yule is a relationship that knows how to keep a candle through the dark. The question this sabbat asks the couple: when the world goes silent and the days are shortest, do we still have a fire? Yule-love is the practice of choosing each other in the dark — not as romance but as commitment. The couple that survives a Yule together has the substrate for everything else.',
    in_work: 'The sabbat of patience. What you plant in the dark now will not show for months. Yule-work is the quiet writing, the unseen building, the foundational thinking that produces nothing visible and is the entire substrate of the next year\'s harvest. The professional who can sit in this dark — without panic, without rushing to "show progress" — has the rarest and most valuable rhythm in modern work.',
    the_gift: 'The return. From this moment forward, the days lengthen. The seed under the snow is alive. The practitioner who has held the long night without flinching becomes someone whom others can trust in their own dark season.',
    the_shadow: 'Yule as forced cheer. The shadow is the cultural Christmas — the obligatory celebration that papers over the dark with consumer noise. Real Yule honors the dark first. The practitioner who skips straight to "celebration" without sitting in the actual longest night has missed what the sabbat was teaching. Equally shadowed: depressive seasonal collapse that has no fire in it at all. Yule asks for both — full darkness *and* tended flame.',
    pair_with: 'Capricorn season — the sign that begins on the solstice; the goat that climbs the mountain through the cold; the archetype of patient ascent through the long dark.',
    pair_with_link: '/gab44/capricorn',
    pair_with_link_text: 'Capricorn — the mountain through the cold',
    key_questions: [
      'What am I tending in the dark right now that won\'t show for months — and am I willing to keep the candle lit anyway?',
      'Where in my life am I forcing cheer over a darkness that needed to be sat with?',
      'If I greeted the dawn this Yule and let one specific thing be reborn — what would I want it to be?'
    ]
  },
  {
    slug: 'imbolc',
    text: 'Imbolc',
    pronunciation: 'IM-bolk or IM-bulk (Irish Gaelic)',
    alt_names: 'Brigid\'s Day · Candlemas · Oimelc ("ewe\'s milk") · Là Fhèill Brìghde (Scottish Gaelic)',
    date_northern: 'February 1–2 (cross-quarter, sun at 15° Aquarius)',
    date_southern: 'August 1–2',
    family: 'cross-quarter',
    position: 3,
    zodiac_gate: 'Mid-Aquarius · the first stirrings under the snow',
    glyph: '🕯️',
    one_liner: 'The first stirrings. The ewes give milk. Brigid\'s flame is lit. The earliest sign that the dark cycle is breaking — long before any visible spring.',
    meaning: 'Imbolc (Old Irish, possibly from *i mbolg* — "in the belly", referring to pregnant ewes) is the second of the four Gaelic fire festivals, attested in the 10th-century *Tochmarc Emire* and tied to the goddess-saint Brigid (Old Irish *Brigit* — "the exalted one"). Brigid is the triple-goddess of poetry, smithcraft, and healing in pre-Christian Ireland; the Catholic church canonized her as Saint Brigid of Kildare (c. 451–525 CE), preserving the older substrate in monastic form. The pagan festival celebrates the first sign that winter is breaking: the ewes begin to lactate weeks before they give birth, signaling pregnancy beneath the still-frozen ground. Candlemas (Feb 2) is the Christian overlay — the blessing of every candle that will be used in the church through the year. Modern Wicca recovers the older reading: this is Brigid\'s sabbat, the festival of the first flame after the long dark.',
    what_to_actually_do: 'Light candles at every window of the house at sunset on Feb 1. The traditional Irish practice: a Brigid\'s cross woven from rushes or wheat-straw, hung over the door for the year. Make a *Brídeóg* — a small doll of Brigid — and lay her in a small bed (a basket with cloth) by the hearth, with a wand of birch beside her. Leave a strip of cloth (a *brat Bhríde*) outside overnight; tradition says Brigid walks the land that night and blesses what she touches, and the cloth becomes a healing-charm for the year. Eat dairy. Drink milk.',
    in_love: 'A relationship at Imbolc is the relationship that is still half in winter but beginning to stir. The question this sabbat asks: what tender new thing wants to be born from us this year, and are we creating the protected space for it to grow? Imbolc-love is the first conversation about the new chapter — the move, the child, the project, the deepening — said quietly, while it is still a seed.',
    in_work: 'The sabbat of the first draft. What you were thinking through in the Yule dark begins to take shape now — not yet ready to show, but no longer just an idea. Imbolc-work is the first sketch, the first outline, the first prototype. Brigid is the goddess of the smith\'s forge: the moment when the raw material begins to take form under sustained heat.',
    the_gift: 'Hope returns with a body. Imbolc gives the practitioner the felt-sense that the dark was not infinite — that life was working beneath the surface all along. Brigid\'s flame, once lit, is harder to extinguish. The practitioner who has held the candle through Imbolc carries the conviction that spring is real, even when it is still snowing.',
    the_shadow: 'Imbolc skipped or rushed. The shadow is the practitioner who hears "first stirrings" and immediately tries to bloom — who forces the project public, announces the relationship, ships the prototype, when Imbolc was asking for tender private incubation. Equally shadowed: refusing to begin. The Yule practitioner who is so attached to the dark that they cannot light the first candle. Imbolc requires the small flame *and* the patience for the slow return.',
    pair_with: 'Brigid — the triple-goddess of flame, forge, and healing well; the patron of every Imbolc rite; the keeper of the sacred fire at Kildare.',
    pair_with_link: '/gab44/goddesses/brigid',
    pair_with_link_text: 'Brigid — sacred flame and healing wells',
    key_questions: [
      'What is stirring under the surface of my life right now that is not yet ready to show — and am I tending it like a flame in a cupped hand?',
      'Where have I been refusing to begin, holding the dark longer than it asked to be held?',
      'If Brigid walked my land tonight, what would I want her to bless? What small new thing would I lay in her path?'
    ]
  },
  {
    slug: 'ostara',
    text: 'Ostara',
    pronunciation: 'oh-STAR-ah (modern reconstruction)',
    alt_names: 'Spring Equinox · Vernal Equinox · Alban Eilir (Welsh, "Light of the Earth") · Eostre',
    date_northern: 'March 19–22 (sun at 0° Aries — astronomical spring equinox)',
    date_southern: 'September 19–22',
    family: 'solar-quarter',
    position: 4,
    zodiac_gate: 'Aries 0° · the astrological new year, light equals dark',
    glyph: '🌱',
    one_liner: 'The balance point. Light equals dark. Spring is here, the seeds crack open, the wheel\'s ascending half begins.',
    meaning: 'Ostara is the modern Wiccan name (popularized by Aidan Kelly in 1974) for the spring equinox, drawing on Jacob Grimm\'s reconstruction of the Anglo-Saxon goddess *Eostre*, mentioned by Bede (c. 725 CE, *De Temporum Ratione*) as the namesake of the Saxon month *Eosturmonath*. The Christian Easter inherits her name and many of her symbols — the egg (cosmic fertility), the hare (Eostre\'s sacred animal, the moon-creature). Astronomically, the spring equinox is the moment when day and night are equal length and the sun crosses the celestial equator northward — astrology marks this as the zero point of the zodiac, 0° Aries, the year\'s actual beginning in tropical astrology. Persephone\'s return from the underworld in the Eleusinian Mysteries falls at this gate. The wheel has completed its dark half; from here, light dominates.',
    what_to_actually_do: 'Plant something. Real seeds in real earth — herbs, flowers, a vegetable bed. The act is the ritual: bury the small thing in the dark, water it, trust the return. Dye eggs (the symbol is older than Easter and belongs to every fertility tradition from Persian Nowruz to pre-Christian Slavic *Pisanki*); the egg is the cosmic seed, the bounded universe that splits open into life. Eat the first green of the year — sprouts, microgreens, baby spinach. Walk a piece of land you know well and find the first three blooms; greet each by name.',
    in_love: 'A relationship at Ostara is the relationship that is ready to be planted publicly. The question this sabbat asks the couple: what wants to be visible now? The introduction to the family, the announcement, the move-in, the engagement. Ostara-love is the moment of going public with what Imbolc kept private. The balance also asks: is this relationship in actual balance — day and night equal — or has one of us been carrying more than our share through the dark?',
    in_work: 'The sabbat of the launch. What you sketched at Imbolc is ready to ship. Ostara-work is the project announcement, the public draft, the prototype released for feedback, the new role started. The balance question for work: am I planting *too much* this spring — overcommitting in the rush of new energy — or planting in proportion to what I can actually tend through summer?',
    the_gift: 'The return of obvious life. Ostara gives the practitioner the unambiguous experience of spring — the visible greening, the unmistakable lengthening of days, the joy that does not have to be manufactured. Persephone is back. Demeter\'s grief lifts. The earth begins to mean something other than endurance.',
    the_shadow: 'Ostara as productivity-bypass. The shadow is the practitioner who turns spring into hustle — who weaponizes the energy of new beginnings into endless launch cycles without honoring the balance the equinox is actually teaching. Equally shadowed: the practitioner who stays in winter past their season — who refuses the return of light because the dark felt like home. Ostara asks for both: the planting *and* the balance.',
    pair_with: 'Aries season — the sign that begins on the equinox; the ram that breaks the gate; the archetype of pure new beginning.',
    pair_with_link: '/gab44/aries',
    pair_with_link_text: 'Aries — the ram, the gate-breaker',
    key_questions: [
      'What seed is ready to be planted publicly this spring — what private thing is ready to be visible?',
      'Where in my life have I lost balance — what side of the scale is taking too much weight as the new cycle begins?',
      'If I planted exactly one thing this Ostara that I would tend faithfully through summer and harvest in autumn, what would it be?'
    ]
  },
  {
    slug: 'beltane',
    text: 'Beltane',
    pronunciation: 'BEL-tayn or BYAL-tin (Irish Gaelic)',
    alt_names: 'May Day · Bealtaine · Calan Mai (Welsh) · Walpurgisnacht (Germanic eve, April 30)',
    date_northern: 'May 1 (cross-quarter, sun at 15° Taurus)',
    date_southern: 'November 1',
    family: 'cross-quarter',
    position: 5,
    zodiac_gate: 'Mid-Taurus · the peak fertility point of the spring half',
    glyph: '🔥',
    one_liner: 'The fire festival. Peak fertility, peak desire, peak greening. The opposite gate to Samhain — the veil thins between living and living.',
    meaning: 'Beltane (Old Irish *Beltaine*, possibly from *bel* — "bright" — + *taine* — "fire") is the third Gaelic fire festival, attested in the 10th-century *Sanas Cormaic* (Cormac\'s glossary), which describes the lighting of two great bonfires through which cattle were driven for purification and protection before being moved to summer pasture. May Day is its English-Saxon parallel; Walpurgisnacht (April 30) is the Germanic eve. Beltane is Samhain\'s opposite gate — where Samhain is the descent into the dark, Beltane is the explosion into the light. The veil thins again, but this time between the living and the *more*-living: the fairy folk are abroad, the May Queen and the Green Man marry, the cattle leave the byre, the human body is offered to the sun. Modern Wicca preserves the sexual and ecstatic dimensions that Christian overlay tried to suppress.',
    what_to_actually_do: 'Light a fire after sundown on April 30. The traditional rite: leap the fire — alone, with your beloved, or with a wish in your mouth. Weave flower crowns from whatever is blooming locally (hawthorn is the traditional Beltane flower; the *huath* of the Celtic tree calendar). Set up a maypole if you have a yard and friends. Make love (with consent, with reverence, with attention — Beltane is one of two sabbats traditionally tied to the *Great Rite*, the sacred sexual union; the alternative is internal, alchemical, with your own creative work). Drink mead. Stay outside as long as you can.',
    in_love: 'A relationship at Beltane is the relationship at its erotic and creative peak. The question this sabbat asks the couple: are we still on fire for each other, or have we let the flame go to embers? Beltane-love is the practice of refusing the slow domestication that long relationships drift toward — the deliberate restoration of desire, play, and risk. New couples meeting at Beltane meet at the most-fertile gate of the year; long couples should treat it as the annual rekindling.',
    in_work: 'The sabbat of creative peak. Beltane-work is the project at its most alive — the team in flow, the writing pouring out, the launch landing. The energy is excess. The discipline is to *spend* it — Beltane is not a saving festival, it is a burning festival. The professional who hoards Beltane\'s fire saves nothing; the fire goes out anyway. Better to burn brilliantly and let summer build on the embers.',
    the_gift: 'The ecstatic body. Beltane returns the practitioner to themselves as a desiring, creative, embodied animal — not just a thinker, not just a worker, but a being on fire. This is the sabbat that reminds the modern person that they are not only a brain in a chair.',
    the_shadow: 'Beltane reduced to sex-as-commodity. The shadow is the festival weaponized into shame-free hedonism without the sacred reverence the rite originally carried. Equally shadowed: Christian-inherited prudery that refuses Beltane\'s body entirely. Real Beltane is both ecstatic and reverent — the body honored as the gate through which the divine enters the world.',
    pair_with: 'Aphrodite — the goddess of eros as a sacred path; the patron of every Beltane fire; the divinity who refuses to separate desire from the holy.',
    pair_with_link: '/gab44/goddesses/aphrodite',
    pair_with_link_text: 'Aphrodite — eros as sacred path',
    key_questions: [
      'Where in my life has the fire gone to embers — and what would it cost me to deliberately restoke it this Beltane?',
      'What creative work, relationship, or desire am I being prudish about — refusing the body, refusing the risk, refusing the joy?',
      'If I leapt the Beltane fire tonight with one specific wish in my mouth, what would the wish be?'
    ]
  },
  {
    slug: 'litha',
    text: 'Litha',
    pronunciation: 'LEE-thah (Old English)',
    alt_names: 'Summer Solstice · Midsummer · Alban Hefin (Welsh, "Light of the Shore") · St. John\'s Eve',
    date_northern: 'June 19–22 (sun at 0° Cancer — astronomical summer solstice)',
    date_southern: 'December 19–22',
    family: 'solar-quarter',
    position: 6,
    zodiac_gate: 'Cancer 0° · the longest day, peak light, fairy hour',
    glyph: '☀️',
    one_liner: 'The longest day. The sun at its highest. Peak light — and the moment from which the wheel begins its descent back into the dark.',
    meaning: 'Litha is the Anglo-Saxon name for the summer solstice, attested in Bede\'s *De Temporum Ratione* (c. 725 CE) as *Ærra Líða* and *Æfterra Líða* (the two months around midsummer). Astronomically, Litha is the moment the sun reaches its northernmost point and pauses before beginning its long return south — the mirror of Yule. Bonfires were lit on every hill across pre-Christian Europe to honor the sun at its strongest; Shakespeare\'s *A Midsummer Night\'s Dream* preserves the older substrate of fairy-folk walking abroad at this gate. The Christian church layered St. John\'s Day (June 24) onto the solstice. Modern Wicca recovers the older reading: this is the festival of the sun at its absolute peak — and, simultaneously, the precise moment from which the light begins to wane. The wheel\'s highest point is also its first descent.',
    what_to_actually_do: 'Be outside all day. Watch the sunrise — it is the earliest of the year — and the sunset, the latest. Build a fire at sunset and tend it through the short night. The traditional herbs for Litha: St. John\'s wort (named for the Christian overlay but used since pre-Christian times as the solar herb), mugwort, vervain, chamomile — harvest them at noon when the sun is highest. Make a *crown of herbs* and dry it for use through the year. Swim in moving water if you can; the solstice waters are traditionally considered blessed.',
    in_love: 'A relationship at Litha is the relationship at full bloom. The question this sabbat asks the couple: are we letting ourselves *enjoy* what we have built, or are we already strategizing the next stage? Litha-love is the practice of full presence to the peak — the vacation actually taken, the joy actually felt, the gratitude actually said out loud. Couples that cannot rest at Litha cannot rest anywhere.',
    in_work: 'The sabbat of peak visibility. The launch from Ostara is now in the world; the work begun at Imbolc is now mature. Litha-work is the practice of receiving the recognition — the public win, the press, the visible success — without spiritual-bypassing it as "just one stage of the wheel". The peak is real. Stand in it. The shadow waits in the temptation to immediately ask "what\'s next" instead of letting the achievement land.',
    the_gift: 'The peak. Litha gives the practitioner the unambiguous experience of life at its fullest — not as a problem to solve, not as a stage to grow from, but as a *gift* to receive. The longest day, fully lived, is the substrate that sustains the practitioner through the descent that follows.',
    the_shadow: 'Litha skipped. The shadow is the practitioner who cannot stop working long enough to enjoy the peak — who treats the longest day as just another Wednesday. Equally shadowed: clinging to the peak as if it were permanent. Litha is the precise moment from which the light begins to wane; the practitioner who refuses this is fighting the wheel itself.',
    pair_with: 'Cancer season — the sign that begins on the solstice; the cardinal water that begins the descent inward; the archetype of full feeling and sustained nurture.',
    pair_with_link: '/gab44/cancer',
    pair_with_link_text: 'Cancer — the home, the tide that turns',
    key_questions: [
      'Where in my life have I reached a peak that I haven\'t actually allowed myself to enjoy yet?',
      'What recognition am I deflecting that the moment is actually offering — and what would change if I just received it?',
      'If I rested fully for the longest day this Litha, with no productivity and no strategy, what would I do with the time?'
    ]
  },
  {
    slug: 'lughnasadh',
    text: 'Lughnasadh',
    pronunciation: 'LOO-nah-sah (Irish) or LAM-mas (English)',
    alt_names: 'Lammas · Lúnasa · Calan Awst (Welsh) · "Loaf-mass"',
    date_northern: 'August 1–2 (cross-quarter, sun at 15° Leo)',
    date_southern: 'February 1–2',
    family: 'cross-quarter',
    position: 7,
    zodiac_gate: 'Mid-Leo · the first harvest, the grain ripe',
    glyph: '🌾',
    one_liner: 'The first harvest. The grain is cut, the bread is baked, the long summer\'s work begins to pay. The first gratitude festival of the descending half.',
    meaning: 'Lughnasadh (Old Irish *Lúgnasad* — "the assembly of Lugh") is the fourth Gaelic fire festival, attested in the 12th-century *Acallam na Senórach* and tied to the god Lugh, the many-skilled, who established the festival in honor of his foster-mother Tailtiu (the mother-goddess of the earth, who died clearing the fields for agriculture). The Anglo-Saxon parallel is *Lammas* (from *hlafmæsse* — "loaf-mass"), the Christianized first-fruits festival where the first wheat harvested was baked into bread and blessed at church. This is the first of the three harvest sabbats (Lughnasadh, Mabon, Samhain) — the grain harvest. The corn-king is cut. The community gives thanks for the food that will carry them through the dark half. Modern Wicca holds both the Irish (Lughnasadh, the sacrifice) and Anglo-Saxon (Lammas, the bread) layers.',
    what_to_actually_do: 'Bake bread. Real bread, from grain you grind or at least flour you weigh — the entire arc from grain to loaf is the ritual. The first loaf belongs to the land: break it into four pieces and bury one at each corner of your home or garden. Eat the second with people you love. The traditional games of Lughnasadh are athletic — running, jumping, contest of skill, honoring Lugh\'s many-skilled-ness. Climb a hill (the Irish *cnoc*-festivals were always on high ground). Pick the first ripe fruit and offer the first bite back to the tree before eating the rest.',
    in_love: 'A relationship at Lughnasadh is the relationship at the first reckoning of harvest. The question this sabbat asks the couple: what have we actually grown together this year? Lughnasadh-love is the conversation that takes inventory honestly — what was planted at Ostara that is now ripe, what was planted that never came up, what surprised us. The first harvest is not the final harvest; what is gathered now is the down payment.',
    in_work: 'The sabbat of first results. The project that launched at Ostara, that peaked publicly at Litha, now begins to produce its first measurable yield — the first revenue, the first metrics, the first concrete outcome. Lughnasadh-work is the practice of receiving the first harvest *without* counting it as the final number. Some things will keep producing into Mabon and Samhain; some things have already given everything they will give. The discipline is honest assessment.',
    the_gift: 'Earned gratitude. Lughnasadh gives the practitioner the felt-sense of a year of work beginning to pay — not as luck, not as gift, but as the visible return on actual planted seed. The bread baked from grain you watched grow has a flavor no bought loaf can match. This is what compound effort tastes like.',
    the_shadow: 'Lughnasadh as scarcity-counting. The shadow is the practitioner who turns the first harvest into anxious accounting — comparing yields, calculating what was lost, dwelling on what didn\'t grow. Equally shadowed: the entitled harvest — receiving the yield without naming the sacrifice (Tailtiu died clearing the fields; the corn-king is cut; nothing comes from nothing). Real Lughnasadh holds gratitude *and* the cost the harvest required.',
    pair_with: 'Leo season — the sign in which Lughnasadh falls; the fixed fire that has sustained itself through the long summer; the archetype of generous abundance.',
    pair_with_link: '/gab44/leo',
    pair_with_link_text: 'Leo — the sustained fire, the generous king',
    key_questions: [
      'What did I plant earlier this year that is now ripening — and am I receiving the first harvest as gift or counting it as scarcity?',
      'What cost did this harvest require — whose Tailtiu cleared the fields for what I am now eating?',
      'If I baked one loaf of bread this Lughnasadh and broke it into four pieces, who or what would receive each piece?'
    ]
  },
  {
    slug: 'mabon',
    text: 'Mabon',
    pronunciation: 'MAY-bon (modern reconstruction)',
    alt_names: 'Autumn Equinox · Fall Equinox · Alban Elfed (Welsh, "Light of the Water") · Harvest Home · Michaelmas (Sept 29)',
    date_northern: 'September 21–24 (sun at 0° Libra — astronomical autumn equinox)',
    date_southern: 'March 21–24',
    family: 'solar-quarter',
    position: 8,
    zodiac_gate: 'Libra 0° · the second balance point, light equals dark again',
    glyph: '🍇',
    one_liner: 'The second balance. Light and dark equal again — but now the dark is winning. The second harvest. Gratitude in the face of the coming descent.',
    meaning: 'Mabon is the modern Wiccan name (coined by Aidan Kelly in 1974, drawing on the Welsh god Mabon ap Modron — "the divine son of the divine mother", from the Mabinogion) for the autumn equinox. Unlike Lughnasadh and Samhain, the autumn equinox has no continuous folk-festival tradition in the Celtic world (the Christianized Michaelmas, Sept 29, is the closest survivor); the modern Mabon is a reconstruction, but it does what the wheel needs: it names the second of the three harvest sabbats and the second balance point of the year. Astronomically, the autumn equinox is the mirror of Ostara — day and night equal length, the sun crossing the celestial equator southward. From here, the dark dominates. The fruit harvest follows the grain harvest; the wine is pressed; the apples are gathered.',
    what_to_actually_do: 'Gather what you can — apples, grapes, late tomatoes, herbs to dry, anything ripe. The traditional Mabon altar: a cornucopia of the harvest, candles in autumn colors (orange, deep red, gold), a glass of wine or cider, bread. Eat a full harvest meal with everyone you can gather — Mabon is the pagan thanksgiving (the American Thanksgiving in November is a late-harvest echo of the same impulse). Write a gratitude list of *everything* this year gave you, the good and the hard; the hard things often turn out to have been gifts in disguise by Mabon. Begin to prepare for the descent: put away the garden, stack the wood, look at the dark half clearly.',
    in_love: 'A relationship at Mabon is the relationship taking stock at the second balance point. The question this sabbat asks the couple: are we in actual balance heading into the descent, or is one of us heavier? Mabon-love is the practice of recalibration before the dark half — the explicit gratitude said, the honest reassessment, the deliberate adjustment that lets both partners enter winter on equal footing. Couples that don\'t recalibrate at Mabon often find Samhain too heavy.',
    in_work: 'The sabbat of the second harvest. What did not ripen at Lughnasadh has had two more months; some of it ripens now (the wine, the late fruit, the second-stage results), some of it is now clearly not going to ripen this cycle. Mabon-work is the honest inventory — what to harvest now, what to compost, what to carry into next year\'s planning. The professional who runs a Mabon retrospective every September enters the dark half with clarity.',
    the_gift: 'Gratitude that includes the hard. Mabon gives the practitioner the perspective to see the full year — the joys, the losses, the unexpected gifts disguised as setbacks. The wine pressed at Mabon is the year fermented into something the dark half can drink.',
    the_shadow: 'Mabon avoided. The shadow is the practitioner who races into autumn without the balance-check — who never names what the year actually gave, who never composts what didn\'t work, who arrives at Samhain unprepared because Mabon was skipped. Equally shadowed: clinging to the second harvest as if it were permanent abundance. Mabon is the moment when the light is *equal* but already losing; the discipline is to receive the harvest *and* prepare for the dark.',
    pair_with: 'Libra season — the sign that begins on the autumn equinox; the cardinal air that lives at the balance point; the archetype of weighing, recalibrating, and right-relationship.',
    pair_with_link: '/gab44/libra',
    pair_with_link_text: 'Libra — the scales at the equinox',
    key_questions: [
      'What did this year give me that I am still calling a loss — and what would change if I weighed it again at the Mabon balance?',
      'Where in my life is something heavier than it should be as I head into the dark half — and what recalibration would let me enter winter in actual balance?',
      'If I pressed this year into one glass of wine to drink through the dark half, what would I want the flavor to be?'
    ]
  }
]

const SABBAT_BY_SLUG: Record<string, SabbatGuide> = Object.fromEntries(SABBATS.map((s) => [s.slug, s]))

export const SABBAT_SLUGS = SABBATS.map((s) => s.slug)

export function isSabbatSlug(s: string): boolean {
  return s in SABBAT_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Cross-quarter / fire festivals = ember amber (the Celtic fire-festival family).
// Solar-quarter / astronomical = sky gold (the Germanic/Saxon solstice/equinox family).
const FAMILY_ACCENT: Record<'cross-quarter' | 'solar-quarter', { c1: string; c2: string; label: string }> = {
  'cross-quarter': { c1: '#d9742e', c2: '#7d3010', label: 'Cross-quarter · fire festival · Gaelic origin' },
  'solar-quarter': { c1: '#e0a830', c2: '#7a5818', label: 'Solar quarter · astronomical · solstice or equinox' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function sabbatPageHTML(slug: string): string {
  const r = SABBAT_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family]
  const readingHref = `/gab44/reading?ref=sabbat-${slug}`

  const familyText = r.family === 'cross-quarter' ? 'Cross-quarter fire festival' : 'Solar quarter (solstice or equinox)'
  const title = `${escapeHtml(r.text)} — ${familyText} · ${escapeHtml(r.zodiac_gate.split('·')[0].trim())} · gab44 ✨`
  const description = `What ${r.text} (${r.pronunciation}) actually means in the Wheel of the Year. The date, the lineage, what to actually do, in love, in work, the gift, the shadow, the zodiac gate. Hand-written, lineage-honest, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Wheel of the Year', item: `${SITE_URL}/gab44/sabbats` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/sabbats/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — ${familyText}, position ${r.position} of the Wheel of the Year`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/sabbats/${slug}`,
        about: `${r.text}, Wheel of the Year, Wiccan sabbat, ${familyText}, Celtic festival, pagan seasonal ritual`
      }
    ]
  })

  // Family siblings — show the other 3 in the same family.
  const siblingsHtml = SABBATS.filter((q) => q.family === r.family && q.slug !== slug).map((q) => {
    return `<a class="sib" href="/gab44/sabbats/${q.slug}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/sabbats/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/sabbats/${slug}" />
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
  .hero .pron { font-size: 18px; opacity: 0.85; margin: 0 0 12px; font-style: italic }
  .hero .family { font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
  .date-box {
    background: var(--bg-1); border: 1px solid var(--line); border-left: 4px solid var(--c1);
    padding: 14px 18px; margin: 0 0 22px; border-radius: 10px;
    font-size: 14px; color: var(--fg-dim);
  }
  .date-box strong { color: var(--c2); display: block; margin-bottom: 4px; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em }
  .date-box p { margin: 4px 0 0; line-height: 1.45 }
  section { padding: 22px 0; border-bottom: 1px solid var(--line) }
  section:last-of-type { border-bottom: none }
  section h2 { font-size: 22px; margin: 0 0 10px; color: var(--c2); letter-spacing: -0.01em }
  section p { margin: 0 0 8px; color: var(--fg) }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/sabbats">wheel of the year</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${r.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="pron">${escapeHtml(r.pronunciation)}</p>
    <p class="family">${escapeHtml(accent.label)} · #${r.position} of 8</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <div class="date-box">
    <strong>When</strong>
    <p><strong style="display:inline;color:var(--fg);font-size:13px">Northern hemisphere:</strong> ${escapeHtml(r.date_northern)}</p>
    <p><strong style="display:inline;color:var(--fg);font-size:13px">Southern hemisphere:</strong> ${escapeHtml(r.date_southern)}</p>
    <p style="margin-top:8px"><strong style="display:inline;color:var(--fg);font-size:13px">Also known as:</strong> ${escapeHtml(r.alt_names)}</p>
    <p style="margin-top:8px"><strong style="display:inline;color:var(--fg);font-size:13px">Zodiac gate:</strong> ${escapeHtml(r.zodiac_gate)}</p>
  </div>

  <section><h2>What ${escapeHtml(r.text)} actually means</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>What to actually do</h2><p>${escapeHtml(r.what_to_actually_do)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>The gift</h2><p>${escapeHtml(r.the_gift)}</p></section>
  <section><h2>The shadow</h2><p>${escapeHtml(r.the_shadow)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="${r.pair_with_link}"><span class="lbl">${escapeHtml(r.pair_with_link_text)}</span>${escapeHtml(r.pair_with)}</a>
      <a href="/gab44/sabbats"><span class="lbl">The whole wheel</span>All 8 sabbats — the seasonal-pagan year as a complete cycle</a>
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
    <h3>Want a $9 reading that names which sabbat your life is in right now?</h3>
    <p>Your chart + the gate of the wheel the moment is asking you to honor — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="siblings">${siblingsHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 8 sabbats · <a href="/gab44/sabbats">index</a> · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function sabbatsIndexHTML(): string {
  const fireCards = SABBATS.filter((s) => s.family === 'cross-quarter').map((r) => {
    const acc = FAMILY_ACCENT['cross-quarter']
    return `<a class="card" href="/gab44/sabbats/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${r.glyph}</div>
      <h3>${escapeHtml(r.text)}</h3>
      <p class="trans">${escapeHtml(r.date_northern.split('(')[0].trim())}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const solarCards = SABBATS.filter((s) => s.family === 'solar-quarter').map((r) => {
    const acc = FAMILY_ACCENT['solar-quarter']
    return `<a class="card" href="/gab44/sabbats/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${r.glyph}</div>
      <h3>${escapeHtml(r.text)}</h3>
      <p class="trans">${escapeHtml(r.date_northern.split('(')[0].trim())}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = 'The Wheel of the Year · 8 Wiccan Sabbats · Samhain, Yule, Imbolc, Ostara, Beltane, Litha, Lughnasadh, Mabon · gab44 ✨'
  const description = 'Hand-written guides to the 8 sabbats of the Wheel of the Year — the 4 Gaelic fire festivals (Samhain, Imbolc, Beltane, Lughnasadh) + the 4 solar quarters (Yule, Ostara, Litha, Mabon). Lineage-honest, with what to actually do, in love, in work, the gift, the shadow, and the zodiac gate for each.'

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The Wheel of the Year — 8 Wiccan Sabbats',
    description: description.substring(0, 280),
    url: `${SITE_URL}/gab44/sabbats`,
    hasPart: SABBATS.map((r) => ({
      '@type': 'Article',
      name: `${r.text} — ${r.family === 'cross-quarter' ? 'Cross-quarter fire festival' : 'Solar quarter'}, #${r.position}`,
      url: `${SITE_URL}/gab44/sabbats/${r.slug}`
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/sabbats" />
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
  h2.section .sub-label { font-size: 14px; opacity: 0.7; margin-left: 8px; font-style: italic; font-weight: 400 }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ wheel of the year</nav>
  <h1>The <span class="accent">Wheel of the Year</span> — 8 Wiccan sabbats</h1>
  <p class="sub">The seasonal-pagan year as a complete cycle. Four Gaelic fire festivals (Samhain · Imbolc · Beltane · Lughnasadh) + four astronomical gates (Yule · Ostara · Litha · Mabon). Eight thresholds, eight rites, eight invitations.</p>

  <div class="intro">
    <h3>How the wheel works</h3>
    <p><strong>The cross-quarter sabbats (ember/amber)</strong> are the four <em>fire festivals</em> of the Gaelic year — Samhain, Imbolc, Beltane, Lughnasadh. They fall at the midpoints between the solstices and equinoxes (sun at 15° of a fixed sign). They are the agricultural festivals: end of harvest, first stirrings, peak fertility, first grain.</p>
    <p><strong>The solar-quarter sabbats (sky/gold)</strong> are the four <em>astronomical</em> gates — Yule (winter solstice), Ostara (spring equinox), Litha (summer solstice), Mabon (autumn equinox). They mark the sun's actual turning points. The Germanic/Saxon and Christian traditions preserved these gates more than the Celtic.</p>
    <p>The two families weave together into an eight-spoked wheel. The classical instruction: pick the sabbat closest to today\'s date, read its page, do its rite, and watch the year teach itself.</p>
  </div>

  <h2 class="section">The 4 fire festivals <span class="sub-label">cross-quarter · Gaelic origin</span></h2>
  <div class="grid">${fireCards}</div>

  <h2 class="section">The 4 solar gates <span class="sub-label">solstice &amp; equinox · astronomical</span></h2>
  <div class="grid">${solarCards}</div>

  <div class="reading-strip">
    <h2>Want to know which sabbat your life is in right now?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the gate of the wheel the moment is asking you to honor. <a href="/gab44/reading?ref=sabbats-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 8 sabbats · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}
