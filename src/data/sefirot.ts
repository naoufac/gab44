// Sefirot — Kabbalistic Tree of Life — SEO funnel.
// /gab44/sefirot (index) + /gab44/sefirot/{slug}.
//
// 10 hand-written sefirah guides. The canonical Western mystical map —
// direct peer to /gab44/chakras (Eastern body-map) and /gab44/archangels
// (Christian-Hebrew intelligences). The most-searched Kabbalistic surface
// in Western esotericism: "tiferet meaning", "what is kether", "binah
// sefira", "tree of life kabbalah explained", "malkuth meaning",
// "yesod kabbalah", "chesed mercy meaning", "geburah strength".
//
// Pillar-tinted gradient:
//  - mercy (Chokmah, Chesed, Netzach) = saffron-gold — the expansive right
//    pillar, the force of grace, the side of grace and Abraham
//  - severity (Binah, Geburah, Hod) = obsidian-violet — the contractive
//    left pillar, the side of form and Isaac
//  - mildness (Kether, Tiferet, Yesod, Malkuth) = sky-indigo — the
//    central pillar of balance, the path of the lightning bolt

import { SITE_URL } from '@/lib/identity'

export interface SefirahGuide {
  slug: string
  text: string                 // English name
  hebrew: string               // Hebrew name
  translation: string          // short translation
  tradition: string            // lineage source
  glyph: string
  pillar: 'mercy' | 'severity' | 'mildness'
  position: number             // 1..10 in classical sequence
  triad: string                // supernal | ethical | astral | manifest
  one_liner: string
  meaning: string
  what_it_carries: string
  how_to_work_with_it: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with_archangel: string
  pair_with_archangel_slug: string
  pair_with_planet: string
  pair_with_planet_slug: string
  pair_with_tarot: string
  pair_with_tarot_slug: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const SEFIROT: SefirahGuide[] = [
  {
    slug: 'kether',
    text: 'Kether',
    hebrew: 'כתר',
    translation: 'Crown — the unknowable source, the first ripple from Ein Sof (the limitless).',
    tradition: 'Kabbalistic — first emanation in the Sefer Yetzirah (c. 200 CE) and the Zohar (c. 1280 CE)',
    glyph: '👑',
    pillar: 'mildness',
    position: 1,
    triad: 'supernal',
    one_liner: 'The first emanation. The point where the infinite ripples into form for the first time — beyond thought, beyond name, the source above the source.',
    meaning: "Kether (כתר, 'Crown') is the first sefirah, the topmost point of the Tree of Life, and the first ripple of the infinite Ein Sof (אין סוף, 'without end') into manifestation. It is, in classical Kabbalistic language, *the will to be* — the original moment in which the unknowable chose to become knowable. Kether is also called *Keter Elyon* ('Supreme Crown') and is associated with the name of God Eheieh (אהיה, 'I shall be'), the same name given to Moses at the burning bush (Exodus 3:14). The Zohar describes Kether as the *Atika Kadisha* — the 'Ancient Holy One' — a face so concealed that even other sefirot cannot perceive it directly; they receive only the overflow of its grace. In the Lurianic Kabbalah of the 16th-century Safed school, Kether is the first vessel formed during *tzimtzum* (the divine contraction that made space for creation), and it remains the only sefirah that did not shatter in the *shevirat ha-kelim* ('breaking of the vessels'). To work with Kether is to make contact with the part of the self that exists before personality, before story, before name — the unbroken thread that connects the individual to the source from which the individual emerged.",
    what_it_carries: "The original yes. Kether carries the pre-cognitive will-to-exist — the energy that animates every other intention without itself being an intention. In a person, Kether is the felt-sense that you are here *on purpose*, even when you cannot name the purpose. In a moment of crisis, Kether is the voice that says simply *stay* without telling you why. In meditation, Kether is the quality of attention that is awake before any object of attention has arrived. Kether also carries *Ratzon* ('divine will') — the directional pull beneath all desires, the magnet that orients the soul toward its source even when the personality is wandering.",
    how_to_work_with_it: "Kether is approached by *unknowing*. Sit in silence. Do not name what you are doing. Do not visualize. Do not chant. Let attention rest above the head, in the space where the crown chakra opens upward into nothing. Hold the name *Eheieh* (אהיה — 'I shall be') as a breath rather than a word — inhale *Eh*, exhale *heieh*. Twenty minutes daily for a season. The practice ripens when, mid-day, a fragment of that silence returns spontaneously — a pause between two thoughts in which the person hearing the thoughts becomes briefly visible to themselves. This is Kether overflowing into ordinary time.",
    in_love: 'A relationship in which both partners remember the source they came from — the love is held inside something larger than the love itself, and so it does not have to carry the whole weight of meaning. Reversed: making the beloved into Kether — asking another person to be the source you cannot find in yourself.',
    in_work: 'Work that is *vocation* rather than *occupation* — the sense that this is what you are here for, even on the days it is hard. Kether-aligned work survives the absence of recognition because the recognition is not what was animating it.',
    the_gift: '*The unbroken thread.* You are connected to the source you came from; you cannot lose what you are.',
    the_shadow: 'Spiritual bypass. Hiding the daily, embodied, relational work of the lower sefirot behind the language of Kether — claiming the crown while neglecting the kingdom. The Hebrew prophets were vicious about this: there is no Kether without Malkuth, no source without earth.',
    pair_with_archangel: 'Metatron — the canonical Kabbalistic angel of Kether, the scribe at the throne who records the soul, the one closest to the source. Metatron is sometimes identified in the Talmud (Sanhedrin 38b, Chagigah 15a) as the transformed Enoch, the human who walked so close to the source that he became fire.',
    pair_with_archangel_slug: 'metatron',
    pair_with_planet: 'Neptune — modern attribution; the dissolution of the personal into the boundless. Classical Kabbalah names Kether the *Primum Mobile* (the first-moved heaven) rather than a planet, because it is the source of motion before any moving thing.',
    pair_with_planet_slug: 'neptune',
    pair_with_tarot: 'The Fool — Hebrew letter Aleph (א), the breath before speech, the spark that has not yet become any particular thing.',
    pair_with_tarot_slug: 'the-fool',
    pair_with_chakra: 'Crown — Kether is the Kabbalistic mirror of the crown chakra (sahasrara); both are the upward-opening point where the individual self meets the limitless field it emerged from.',
    pair_with_chakra_slug: 'crown',
    pair_with_sign: 'aquarius',
    key_questions: [
      'Where in my life have I forgotten that I came from a source larger than my biography — and what would change if I remembered for sixty seconds?',
      'Which of my desires are actually *Ratzon* (the soul-orientation toward source) and which are the personality grasping for substitutes for that orientation?',
      'If I sat in silence and let the crown of my head open upward into nothing, what would I hear that I have been refusing to hear?'
    ]
  },
  {
    slug: 'chokmah',
    text: 'Chokmah',
    hebrew: 'חכמה',
    translation: 'Wisdom — pure dynamic force, the flash of insight before form arrives.',
    tradition: 'Kabbalistic — the Father (Abba) of the supernal triad in the Zohar and Lurianic Kabbalah',
    glyph: '⚡',
    pillar: 'mercy',
    position: 2,
    triad: 'supernal',
    one_liner: 'Pure outflowing force. The lightning of insight in the instant before the mind has shaped it into thought — the Father, the seed, the dynamic give.',
    meaning: "Chokmah (חכמה, 'Wisdom') is the second sefirah, the topmost head of the right pillar (the Pillar of Mercy), and the first emanation that has *direction*. Where Kether is the unmoved source, Chokmah is the first movement — the outward push, the spark, the seed-thought before any thought has been spoken. Classical Kabbalah names Chokmah *Abba* ('the Father'), the active masculine principle whose counterpart is Binah, the Mother. The two together are *yichud Abba ve-Imma* — the union of Father and Mother in which all subsequent sefirot are conceived. Chokmah's divine name is Yah (יה), the shortest name of God, used in the word *Halleluyah* ('praise Yah'). The Bahir (12th century, the earliest Kabbalistic text) describes Chokmah as the *Reshit* — the 'beginning' of Genesis 1:1 ('In the beginning, God created') — the moment in which time itself starts. In a person, Chokmah is the flash that arrives before you have asked for it. It is the *seed-insight* you wake up with, the answer that comes a half-second before you have finished asking the question. Wisdom in the Kabbalistic sense is not accumulated knowledge; that is Binah's work. Chokmah is *revelation* — the pure giving, the lightning that strikes the head before the mind has had time to build a roof.",
    what_it_carries: "The seed-spark of every becoming. Chokmah carries the energy of *direct knowing without intermediary* — the insight that arrives without a chain of reasoning, the certainty about a person that you cannot justify, the right next word in a poem that you did not consciously choose. Chokmah is also the energy of *first words* — the original utterance that names a thing for the first time. Every act of original creation has Chokmah at its beginning.",
    how_to_work_with_it: "Chokmah cannot be summoned by effort; it can only be made hospitable. Three practices: (1) Keep a notebook by the bed and write the first sentence that comes to you upon waking, before the day has had time to clutter the channel. (2) Walk without a destination for an hour. Chokmah arrives when the planning mind has run out of reasons to keep planning. (3) Chant *Yah* on long slow exhales, twelve repetitions, three times a day for thirty days. The chant opens the right side of the head — the side of receiving.",
    in_love: 'A relationship in which both partners trust the *direct knowing* between them — the recognition that does not need to be argued for, the certainty that arrives before either has had time to construct it. Reversed: insisting that every certainty be justified — strangling Chokmah with Binah, killing the spark with explanation.',
    in_work: 'Creative work in which the first idea is the right idea — and the discipline is to honor it before the editing mind has had time to talk it out of being. Writers, designers, composers, founders: Chokmah is the spark; everything after is the labor of not betraying it.',
    the_gift: '*The right next thing arrives.* You know what to do before you know why.',
    the_shadow: 'Spark without ground. Chokmah unbalanced by Binah is the perpetual brilliant beginner who never finishes anything — the person whose insights are real but whose life is a scattered field of half-built towers. Chokmah needs Binah; the spark needs the womb.',
    pair_with_archangel: 'Raziel — the angel of mysteries, keeper of the secret wisdom given to Adam at the gates of Eden. The Sefer Raziel HaMalakh (medieval; attributed authorship) is the canonical text of Chokmah-side angelic wisdom.',
    pair_with_archangel_slug: 'raziel',
    pair_with_planet: 'Uranus — modern attribution; the lightning-strike of unexpected insight, the sudden break with old form. Classical Kabbalah names Chokmah the *Mazzaroth* (the zodiac itself, the fixed stars) — the field of all archetypal forms before any has taken shape.',
    pair_with_planet_slug: 'uranus',
    pair_with_tarot: 'The Magician — Hebrew letter Beth (ב); the will that channels the spark into the first act, the magician at the table with the four elements arranged.',
    pair_with_tarot_slug: 'the-magician',
    pair_with_chakra: 'Crown — Chokmah sits at the right side of the crown, the energetic location where the spark first descends into the body. Pair Chokmah work with crown-chakra practice when the question is *how to receive what is being given*.',
    pair_with_chakra_slug: 'crown',
    pair_with_sign: 'aries',
    key_questions: [
      'When did Chokmah last strike me — the insight that arrived without my asking — and did I write it down, or did I let the day cover it over?',
      'Where in my life have I been demanding *Binah* (full explanation) of an insight that was only ever going to come as *Chokmah* (the spark)?',
      'If I sat for an hour without a destination, what is the first idea that would arrive — and what is my pattern of dismissing it the moment it shows up?'
    ]
  },
  {
    slug: 'binah',
    text: 'Binah',
    hebrew: 'בינה',
    translation: 'Understanding — the great womb that gives the spark its first form.',
    tradition: 'Kabbalistic — the Mother (Imma) of the supernal triad in the Zohar and Lurianic Kabbalah',
    glyph: '🜲',
    pillar: 'severity',
    position: 3,
    triad: 'supernal',
    one_liner: 'The great womb. The pure structure that receives the spark of Chokmah and gives it its first form — the Mother, the dark sea, the divine intelligence that shapes.',
    meaning: "Binah (בינה, 'Understanding') is the third sefirah, the topmost head of the left pillar (the Pillar of Severity), and the great womb of the Tree. Where Chokmah is the active outflowing force (the Father), Binah is the receptive shaping intelligence (the Mother) — *Imma Elyon*, 'the Supreme Mother', who receives Chokmah's spark and gives it the form in which it will descend through the rest of the Tree. The Zohar names Binah *Yam* ('the Sea') — the dark womb-waters in which all subsequent sefirot are conceived. Her divine name is YHVH-Elohim, and she corresponds to the divine attribute of *binah* as distinguished from *chokmah*: where chokmah is *flash-insight*, binah is *deep understanding* — the patient comprehension that arrives only after the spark has been sat with, gestated, and structured into form. The Talmud's famous distinction is *chokhmah binah da'at* (חכמה בינה דעת — wisdom, understanding, knowledge): chokmah is the *what*, binah is the *how it fits together*, da'at is the *what to do about it*. Binah is also called *Ima* ('the Mother') because she is the source of all *structure* — the matrix in which form can stabilize. To work with Binah is to learn the difference between rushing past a piece of wisdom and *gestating* it.",
    what_it_carries: "The architecture of form. Binah carries the energy of *holding* — the capacity to keep a question, a relationship, a project, or a wound *inside* long enough for it to mature into its actual shape. Binah is also the energy of *sorrow* — not the depressed sorrow that paralyzes, but the deep sorrow of one who has comprehended what is and refuses to look away. Mary in the Christian tradition, Demeter in the Greek, Isis in the Egyptian — the great mothers who know and grieve and continue.",
    how_to_work_with_it: "Binah is approached through *patience and structure*. Three practices: (1) Take one piece of wisdom you have received (a teaching, an insight from a session, a verse) and live with it for forty days — do not move on. The forty-day container is the womb. (2) Build a vessel — a ritual, a daily practice, a written document — that *holds* what you have learned so it does not dissipate. Binah is the discipline of *containment*. (3) Sit with grief that you have been refusing. The grief is the womb-water; you cannot reach the form on the other side of it without going through.",
    in_love: 'A relationship that has learned to *hold* — that has weathered the spark of Chokmah and built around it the patient structure that lets the love deepen rather than scatter. Reversed: the womb that becomes a tomb — holding so tightly that what was conceived inside has no room to be born.',
    in_work: 'The work of *structure-making* — building institutions, writing the constitution, designing the protocol. Binah-work is the patient labor of giving the spark a form that can survive the centuries.',
    the_gift: '*The spark takes form.* What was lightning becomes river. What was insight becomes life.',
    the_shadow: 'Structure as cage. Binah unbalanced by Chokmah is the perfectionist who never finishes because the form is never quite right — the architect who keeps redrawing the temple instead of building it. Binah without Chokmah is the corpse of an idea that has been over-defined into immobility.',
    pair_with_archangel: 'Jophiel — the beauty of God, the angel who keeps the form of wisdom luminous. (Canonical Kabbalistic Binah is Tzaphkiel, the angel of contemplation; Jophiel is the closest available correspondence in the gab44 archangel set, and shares the contemplative-feminine register.)',
    pair_with_archangel_slug: 'jophiel',
    pair_with_planet: 'Saturn — the canonical Hermetic correspondence; the planet of form, structure, time, gestation. Saturn is the great teacher of Binah because the lessons of structure cannot be rushed.',
    pair_with_planet_slug: 'saturn',
    pair_with_tarot: 'The High Priestess — Hebrew letter Gimel (ג); the veiled feminine intelligence who holds the unspoken structure of the mysteries, the moon at her feet.',
    pair_with_tarot_slug: 'the-high-priestess',
    pair_with_chakra: 'Third Eye — Binah sits at the left side of the head, the energetic location of deep comprehension. Pair Binah work with third-eye practice when the question is *what is the shape of what I have understood*.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sign: 'capricorn',
    key_questions: [
      'Which insight have I rushed past instead of gestating — and what would it look like to give it forty days of patient holding before moving on?',
      'Where in my life is structure serving form (Binah doing her actual work) and where has it become a cage (form refusing to let the spark live)?',
      'What grief have I been refusing — and is it possible that the form on the other side of the grief is what I have actually been waiting for?'
    ]
  },
  {
    slug: 'chesed',
    text: 'Chesed',
    hebrew: 'חסד',
    translation: 'Mercy / Loving-kindness — expansive love, the open hand of grace.',
    tradition: 'Kabbalistic — the right shoulder of the ethical triad; Abraham in classical Kabbalah',
    glyph: '🌊',
    pillar: 'mercy',
    position: 4,
    triad: 'ethical',
    one_liner: 'Expansive, overflowing love. The energy of the open hand, the generous host, the rain that falls on all without distinction — the love that gives because it has so much to give.',
    meaning: "Chesed (חסד, 'Mercy' or 'Loving-kindness') is the fourth sefirah, the right shoulder of the Tree, and the first sefirah of the *ethical triad* — the heart-level emanations in which the supernal sefirot become liveable. Chesed is also called *Gedulah* ('Greatness') because of the magnitude of its outflowing love. In the patriarchal correspondence of the Zohar, Chesed is *Abraham* — the man who 'ran toward the strangers' (Genesis 18:2) and pleaded for the wicked of Sodom (Genesis 18:23-33). Chesed is the energy that gives without calculating, that pours without measuring, that says *yes* before knowing the cost. The Talmud (Sukkah 49b) places *gemilut chasadim* — acts of loving-kindness — as the foundation of the world; greater even than charity, because chesed gives to the living and the dead, to the rich and the poor, with the heart and not only the hand. In Lurianic Kabbalah, Chesed is the right arm of *Zeir Anpin* (the 'small face', the masculine principle that descends from the supernals into the world). Chesed is the energy of the host who opens the door, the parent who says *eat first*, the friend who shows up before you have asked. It is also, in the high Kabbalistic sense, the *attribute of God* through which the universe is sustained — without chesed the world would collapse under the weight of strict judgment (Geburah, Chesed's necessary counterweight).",
    what_it_carries: "Overflowing abundance. Chesed carries the energy of *enough-and-then-some* — the felt-sense that there is more than necessary, more than fair, more than you needed. Chesed is the energy that animates philanthropy, hospitality, mentorship, gift-giving, parenting at its most generous, and the kind of leadership that lifts everyone in the room. Chesed is also the energy of *forgiveness as overflow* — not the gritted-teeth forgiveness of obligation, but the forgiveness that flows naturally when the heart is full enough to no longer need the debt.",
    how_to_work_with_it: "Chesed grows by being *practiced as a daily discipline*. Three practices: (1) Give one thing every day for forty days — not money necessarily; an introduction, a sentence of praise, a real listening, a gift you have been saving. (2) Host. Open your table or your home or your inbox to one person per week who would not otherwise have access. (3) Pray for the people you find difficult — not 'pray *about* them' but pray *for* them, asking blessing on their lives. Chesed deepens when love is extended past where the heart naturally wants to stop.",
    in_love: 'A relationship animated by generosity rather than accounting — both partners give without keeping the ledger, and the love compounds. Reversed: chesed without geburah becomes love as enabling — the partner who pours into a relationship that needed boundary instead, and ends up depleted while the other never grows.',
    in_work: 'Leadership that lifts. The boss who shares credit, the mentor who opens doors without being asked, the founder who pays well above market because they can. Chesed-work creates institutions that people stay loyal to for decades.',
    the_gift: '*Abundance becomes available.* What you give expands the river you are drawing from.',
    the_shadow: 'Chesed without Geburah. Love that has no boundary becomes martyrdom; generosity without discernment becomes co-dependence; the open door without the locked one becomes a house that anyone can take from. The Kabbalists are clear: Chesed *must* be married to Geburah, or it dissolves the form it was trying to bless.',
    pair_with_archangel: 'Zadkiel — the canonical archangel of Chesed in classical Kabbalah; the angel of mercy, the violet flame of forgiveness, the one who stopped Abraham\'s hand on Mount Moriah (Genesis 22).',
    pair_with_archangel_slug: 'zadkiel',
    pair_with_planet: 'Jupiter — the canonical Hermetic correspondence; the great benefic, the planet of expansion, blessing, abundance, mercy, and joviality.',
    pair_with_planet_slug: 'jupiter',
    pair_with_tarot: 'Wheel of Fortune — Hebrew letter Kaph (כ); the wheel of Jupiter, the cycles of fortune that turn always toward more.',
    pair_with_tarot_slug: 'wheel-of-fortune',
    pair_with_chakra: 'Heart — Chesed sits at the right arm of the heart, the side of giving. Pair Chesed work with heart-chakra practice (anahata) when the question is *how to keep the river of love flowing outward without depleting the source*.',
    pair_with_chakra_slug: 'heart',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'Where in my life have I been keeping a ledger (counting what I gave, what I am owed) instead of trusting the chesed-river to refill itself when I give from fullness?',
      'Who in my circle has been giving me chesed without my noticing — and have I returned the blessing, or have I taken it as if it were automatic?',
      'Where has my chesed become enabling — love that needed to be paired with geburah (boundary) and instead poured itself into a vessel that could not be filled?'
    ]
  },
  {
    slug: 'geburah',
    text: 'Geburah',
    hebrew: 'גבורה',
    translation: 'Severity / Strength — the cutting force of boundary and discernment.',
    tradition: 'Kabbalistic — the left shoulder of the ethical triad; Isaac in classical Kabbalah',
    glyph: '🗡️',
    pillar: 'severity',
    position: 5,
    triad: 'ethical',
    one_liner: 'The clear sword. The cutting force that says no when no is the loving word — boundary, discernment, the strength that protects the form love needs to grow inside.',
    meaning: "Geburah (גבורה, 'Severity' or 'Strength') is the fifth sefirah, the left shoulder of the Tree, and the necessary counterweight to Chesed. Where Chesed is the open hand, Geburah is the discerning sword; where Chesed gives, Geburah withholds when withholding is what love requires. Geburah is also called *Din* ('Judgment') and *Pachad* ('Awe') — the strict attribute of God that gives form to chesed's overflow. In the patriarchal correspondence of the Zohar, Geburah is *Isaac* — the patriarch bound on the altar at Mount Moriah (Genesis 22), the figure of severity restrained, the strict judgment that almost cut and was stayed. The Lurianic Kabbalah is unsparing about Geburah: she is *not* darkness, she is *not* evil; she is the divine attribute without which the universe would dissolve into chesed's undifferentiated flood. The rabbis of the Talmud say that when God created the world by chesed alone, the world could not stand; only when geburah was added did stability arise (Genesis Rabbah 12:15). Geburah is the energy of the surgeon who cuts to heal, the parent who says no to protect, the boundary that keeps love from drowning what it loves. It is also the energy of righteous anger — the fire that burns at injustice precisely because love is real. In Kabbalistic practice, the descent of soul through the lower seven sefirot includes Geburah's purifying fire as the necessary refining of what would otherwise be untested grace.",
    what_it_carries: "The fire that refines. Geburah carries the energy of *no* — the loving no, the surgical no, the no that protects what love is trying to grow. Geburah also carries the energy of *consequence* — the natural reckoning that follows action, the gravity that gives weight to the choices we make. Justice in the Kabbalistic sense is not punishment; it is *the universe organizing itself to make truth visible*. Geburah is the agent of that organization.",
    how_to_work_with_it: "Geburah ripens through *practising the difficult no*. Three practices: (1) Identify one relationship in which you have been over-giving and write — and deliver — the boundary that has been waiting. The discomfort of doing this *is* the practice. (2) Sit with anger that you have been suppressing. Anger is geburah-information about a boundary that has been violated; honor the information by acting on it. (3) Once a season, do a *strict review* of your commitments — what is still alive, what is dead, what is draining you, what to cut. The cut is geburah's medicine.",
    in_love: 'A relationship in which the no is as honored as the yes — both partners trust that the other will speak the boundary, and so neither has to second-guess the love. Reversed: cruelty masquerading as honesty — geburah without chesed is the partner whose every word is technically true and somehow always wounds.',
    in_work: 'The leader who fires when firing is the loving act, the editor who cuts the favorite sentence, the founder who shuts down the beloved project that is not working. Geburah-work is the discipline of *protecting the larger by sacrificing the smaller*.',
    the_gift: '*Form holds.* The yes you give can be trusted because the no is real.',
    the_shadow: 'Geburah without Chesed. Severity that has lost mercy becomes cruelty. The boundary that was meant to protect becomes the wall that imprisons. The discerning sword becomes the executioner. The Kabbalists name this shadow *sitra achra* — the "other side", where unbalanced geburah falls away from the Tree and becomes the demonic. The corrective is always the same: bring chesed back to the heart.',
    pair_with_archangel: 'Chamuel — the canonical archangel of Geburah in classical Kabbalah (Khamael, the warrior-angel of Mars and divine justice); the angel who stays the hand of cruelty and wields the sword of righteous boundary.',
    pair_with_archangel_slug: 'chamuel',
    pair_with_planet: 'Mars — the canonical Hermetic correspondence; the planet of fire, will, boundary, righteous anger, and the cutting force of severance.',
    pair_with_planet_slug: 'mars',
    pair_with_tarot: 'The Tower — Hebrew letter Peh (פ); the lightning that strikes the structure built on falsehood, the merciful destruction that makes truth visible.',
    pair_with_tarot_slug: 'the-tower',
    pair_with_chakra: 'Heart — Geburah sits at the left arm of the heart, the side of withholding. Pair Geburah work with heart-chakra practice when the question is *what does love require me to refuse*.',
    pair_with_chakra_slug: 'heart',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Where in my life have I been chesed-only — pouring without boundary — and what is geburah asking me to refuse so that the love can survive?',
      'What anger have I been suppressing — and is it possible that the anger is geburah-information about a boundary I have been refusing to name?',
      'When I imagine the most difficult no in front of me right now, who does saying it actually protect — and what does refusing to say it cost the people I love?'
    ]
  },
  {
    slug: 'tiferet',
    text: 'Tiferet',
    hebrew: 'תפארת',
    translation: 'Beauty / Harmony — the radiant heart-center where mercy and severity meet.',
    tradition: 'Kabbalistic — the heart of the Tree; Jacob and the Sun in classical Kabbalah',
    glyph: '☀️',
    pillar: 'mildness',
    position: 6,
    triad: 'ethical',
    one_liner: 'The radiant center. The harmony where mercy and severity meet, where every sefirah passes through on its way down — the heart of the Tree, the Sun, the Son, the place of balance.',
    meaning: "Tiferet (תפארת, 'Beauty' or 'Harmony') is the sixth sefirah, the center of the Tree, and the radiant heart through which every other sefirah passes. Tiferet is the meeting-place of Chesed (mercy) and Geburah (severity) — the balanced point where the open hand and the discerning sword become a single integrated movement. Tiferet is also called *Rachamim* ('Compassion') because true compassion is precisely this balance: love that knows when to give and when to withhold. In the patriarchal correspondence of the Zohar, Tiferet is *Jacob* — the patriarch who wrestled with the angel (Genesis 32) and was renamed *Israel* ('one who has struggled with God'), the integrator of the heritage of Abraham (Chesed) and Isaac (Geburah). Tiferet's divine name is YHVH (יהוה), the unspeakable Tetragrammaton, because Tiferet is the central revelation of the divine in form — the place where the infinite becomes most accessible to the human heart. Lurianic Kabbalah places Tiferet at the *chest* of *Zeir Anpin* (the 'small face' of God descending into form), making it the heart-center through which all spiritual influence reaches the world. In the Christian-mystical reading (Christian Kabbalah of the Renaissance), Tiferet is the *Christ-position* — the redeeming heart that holds all opposites together; in the Jewish-mystical reading, Tiferet is the *Tzaddik*, the righteous one through whom divine flow descends. To work with Tiferet is to find the still center where every contradictory force in your life can be held without needing to be resolved.",
    what_it_carries: "The harmonizing center. Tiferet carries the energy of *the heart that holds opposites* — the capacity to love and discern in the same breath, to give and withhold in the same act, to honor both the spark of insight and the patient labor of form. Tiferet is also the energy of *radiance* — the quality in a person that pulls everyone in the room toward the center, not because they demand attention but because they are coherent. Tiferet is sometimes called the 'beauty that saves' because the integration it carries is itself the medicine the fractured world is asking for.",
    how_to_work_with_it: "Tiferet ripens through *integration practices*. Three practices: (1) Daily contemplation on the question *what would the integrated yes-and-no look like here* — apply it to every relationship, every project, every decision where you are tempted to collapse into one side or the other. (2) Heart-coherence practice: ten minutes morning and evening of slow breath, attention at the center of the chest, holding the felt-sense of one person you love and one person you are at odds with — at the same time. (3) Identify the polarity in your life that is asking to be integrated (work and rest, give and receive, speak and listen, push and yield) and walk it as a discipline for thirty days, deliberately taking the side you usually neglect.",
    in_love: 'A relationship that has become its own center — neither partner pulls toward an extreme, both have learned the rhythm of mercy and discernment that makes the love a place of radiance rather than a battlefield. Reversed: tiferet-as-people-pleasing — false harmony that papers over the actual tensions; the integration is performed rather than earned.',
    in_work: 'The leader who holds the room together — the colleague through whom every conflict somehow finds its way to balance. Tiferet-work is often invisible because it operates by *integration*, not by spectacle; the team that has a tiferet-person in it simply functions better and nobody can quite name why.',
    the_gift: '*Opposites become whole.* The contradictions you have been carrying turn out to have been waiting to meet each other in your heart.',
    the_shadow: 'False harmony. Tiferet weaponized becomes the polite refusal to take a side when sides need to be taken — the spiritual bypass of pretending integration when the actual work is to feel the rupture. Real Tiferet has been *through* Chesed and Geburah; counterfeit Tiferet has skipped both.',
    pair_with_archangel: 'Michael — the canonical archangel of Tiferet in classical Kabbalah; the great captain of the heavenly hosts, the angel of the Sun, the sword that is also the light, the integrator of fire and form.',
    pair_with_archangel_slug: 'michael',
    pair_with_planet: 'Sun — the canonical Hermetic correspondence; the radiant center of the system, the source of light and life, the heart of the chart.',
    pair_with_planet_slug: 'sun',
    pair_with_tarot: 'The Sun — Hebrew letter Resh (ר); the radiant heart of the major arcana, the child on the horse, joy made coherent.',
    pair_with_tarot_slug: 'the-sun',
    pair_with_chakra: 'Heart — Tiferet is the direct Kabbalistic mirror of the heart chakra (anahata); both are the central integrator of upper and lower, mercy and severity, the place where the contradictions of the embodied life find their meeting.',
    pair_with_chakra_slug: 'heart',
    pair_with_sign: 'leo',
    key_questions: [
      'Which polarity in my life have I been collapsing into one side of — and what would it look like to walk the integrated middle for thirty days instead?',
      'Where have I been performing integration without earning it (false harmony) when the actual work was to feel a rupture?',
      'When I bring to mind the people I love AND the people I am at odds with, can I hold both in my heart at the same time — and what does that holding tell me I have not yet integrated?'
    ]
  },
  {
    slug: 'netzach',
    text: 'Netzach',
    hebrew: 'נצח',
    translation: 'Victory / Eternity — endurance, art, the passionate flame that does not give up.',
    tradition: 'Kabbalistic — the right hip of the Tree; Moses in classical Kabbalah',
    glyph: '🌹',
    pillar: 'mercy',
    position: 7,
    triad: 'astral',
    one_liner: 'Endurance and beauty. The passionate flame of art, devotion and victory through perseverance — the right hip of the Tree, the energy that loves a thing long enough for the thing to ripen.',
    meaning: "Netzach (נצח, 'Victory' or 'Eternity') is the seventh sefirah, the right hip of the Tree, and the first sefirah of the *astral triad* — the realm of the formative forces that shape the personality and the artistic, devotional, and passionate dimensions of the soul. Netzach's primary meaning is *enduring victory* — not the victory of a single battle, but the victory that comes from *not stopping* across long time. The root *nun-tzadi-chet* (נ-צ-ח) carries both 'to conquer' and 'to last forever'; the same root gives us *l'nezach* ('forever') in liturgical Hebrew. In the patriarchal correspondence of the Zohar, Netzach is *Moses* — the prophet whose entire life was a forty-year exercise in not giving up on a people who repeatedly gave up on him, the man whose face became radiant from being in the presence of the divine. Netzach is the energy of *passion sustained over time* — the artist who returns to the studio every morning for thirty years, the devotee whose prayer life is a daily decade-long conversation, the parent whose love does not waver across decades of teenage indifference. Netzach is also the realm of *creative imagination* — the inner field in which images, melodies, longings and visions move. The Sefer Yetzirah associates Netzach with the right leg, the leg of going-forward, the limb that carries the body across the long distance of a vocation.",
    what_it_carries: "Sustained passion. Netzach carries the energy of *the long faithful flame* — the kind of love that becomes a craft, a vocation, a marriage, a movement. Netzach is also the energy of *aesthetic beauty* — the sense of rightness in a poem, a painting, a piece of music, a meal, a garden. Where Tiferet is the beauty of integration, Netzach is the beauty of *expression* — the form love takes when it becomes art. Netzach is the muse, the desire that does not fade, the eros that animates a life's work.",
    how_to_work_with_it: "Netzach grows through *daily faithful return*. Three practices: (1) Choose one craft, one practice, one relationship, one cause — and commit to it for a year of daily presence. The daily-ness is the practice. (2) Cultivate aesthetic intelligence: spend time with beauty (a poem, a song, a painting, a wild place) every day for thirty days. Netzach is fed by what it loves. (3) Notice the *desires that do not fade* — these are netzach-information about your actual vocation, as distinct from the surface-level desires that change with the weather. Honor the lasting ones.",
    in_love: 'A relationship in which both partners are still curious, still pursuing, still making art of the love after years and decades — netzach-love is the love that gets more interesting, not less, as time passes. Reversed: passion as obsession — netzach without hod becomes the pursuit that has lost contact with reality.',
    in_work: 'The craftsperson, the artist, the long-form thinker, the founder who is in it for the multi-decade arc. Netzach-work is often unrecognized in early years because its rewards come on a time-scale longer than the quarterly review.',
    the_gift: '*The long flame.* What you love does not fade because you have learned to return to it daily.',
    the_shadow: 'Passion without ground. Netzach unbalanced by Hod (rational discernment) becomes the artist who is sure of the masterpiece nobody else can see, the lover whose desire is real but whose object has long since stopped reciprocating, the founder whose vision has lost contact with the actual market. Netzach needs Hod the way the right leg needs the left to walk.',
    pair_with_archangel: 'Jophiel — the beauty of God, the angel who keeps the artistic and aesthetic flame burning; the closest correspondence in the gab44 archangel set to canonical Netzach (Haniel, the angel of Venus). Jophiel and Haniel share the aesthetic-feminine register.',
    pair_with_archangel_slug: 'jophiel',
    pair_with_planet: 'Venus — the canonical Hermetic correspondence; the planet of love, beauty, art, attraction, and the slow-ripening sweetness of devotion.',
    pair_with_planet_slug: 'venus',
    pair_with_tarot: 'The Empress — Hebrew letter Daleth (ד); the radiant goddess of fertility and creative abundance, the throne in the garden, the Venus-archetype of the major arcana.',
    pair_with_tarot_slug: 'the-empress',
    pair_with_chakra: 'Solar Plexus — Netzach sits at the right hip, near the energetic location of personal will and creative fire. Pair Netzach work with solar-plexus practice (manipura) when the question is *how to sustain the flame across the long distance*.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sign: 'libra',
    key_questions: [
      'What desire in me has not faded across years — and have I been treating it as netzach-information about my vocation, or have I been dismissing it as a phase?',
      'Where is my passion *without* hod — burning bright but disconnected from the reality-check of the world?',
      'Which craft or relationship is asking me to return daily for a year — and what am I afraid will happen if I actually make the commitment?'
    ]
  },
  {
    slug: 'hod',
    text: 'Hod',
    hebrew: 'הוד',
    translation: 'Splendor / Glory — intellect, communication, the magic of right speech.',
    tradition: 'Kabbalistic — the left hip of the Tree; Aaron in classical Kabbalah',
    glyph: '📜',
    pillar: 'severity',
    position: 8,
    triad: 'astral',
    one_liner: 'Intellect made luminous. The splendor of right form, right word, right ritual — the left hip of the Tree, the energy that names what netzach loves so the love can be communicated.',
    meaning: "Hod (הוד, 'Splendor' or 'Glory') is the eighth sefirah, the left hip of the Tree, and the analytical-communicative counterweight to Netzach's passionate flame. Where Netzach is the right leg of *what is loved*, Hod is the left leg of *how it is articulated*. Hod is the realm of language, ritual, ceremony, ceremony's structure, and the splendor that arrives when an inner truth finds its perfect outer form. In the patriarchal correspondence of the Zohar, Hod is *Aaron* — the brother of Moses, the high priest who carried out the ritual that gave Moses's revelation its communicable form. Where Moses (Netzach) had the vision, Aaron (Hod) had the liturgy. Hod is also the realm of *magic* — not stage-magic, but the precise speech-act that makes an inner reality outer (the lawyer's brief, the engineer's blueprint, the rabbi's blessing, the programmer's function). The Lurianic Kabbalah places Hod at the *left hip* of *Zeir Anpin*, partnered with Netzach at the right hip; together they form the legs of the spiritual body, the means by which the soul walks in the world. Hod is associated with the divine name *Elohim Tzva'ot* ('God of Hosts'), reflecting Hod's character as the orderly intelligence that gives every angelic legion its proper rank. To work with Hod is to learn that *how you say it* is not a secondary thing — the form *is* the splendor.",
    what_it_carries: "The splendor of precise form. Hod carries the energy of *the right word at the right time* — the speech-act that does its work because it has been chosen with care. Hod is also the energy of *system* — the ordered intelligence that builds protocols, writes documentation, designs rituals, codifies practices. Where Netzach loves, Hod *articulates the love so others can find it*. Hod is the librarian, the cataloger, the editor, the grammarian, the systems-thinker, the ritualist; without Hod's labor, Netzach's passion never reaches anyone past the singer.",
    how_to_work_with_it: "Hod ripens through *the discipline of articulation*. Three practices: (1) Write the thing down. Every insight you have, every truth you discover, every promise you make — give it written form. Hod is fed by the act of articulation. (2) Build a ritual: a daily one, weekly one, seasonal one. Hod is the energy of *the form repeated until it becomes the carrier*. (3) Study the craft of right speech — the lawyer's precision, the poet's compression, the diplomat's care, the mystic's circumlocution. Hod deepens when you learn the *how* of speaking matches the *what*.",
    in_love: 'A relationship in which both partners articulate well — what they need, what they appreciate, what they will not accept; words doing real work because they have been chosen with care. Reversed: hod without netzach becomes love as analysis — the partner who explains the relationship better than they live it.',
    in_work: 'The communicator, the codifier, the systems-builder, the lawyer, the technical writer, the editor, the ritualist. Hod-work is often the invisible infrastructure that makes other people\'s netzach-work legible and replicable.',
    the_gift: '*The right word.* What you mean reaches its hearer because the form was true to the substance.',
    the_shadow: 'Hod without Netzach. Form without passion becomes empty ritual — the perfectly-articulated message that has no heart, the perfectly-codified system that nobody wants to use, the precisely-correct word that lands without warmth. Hod is meant to *serve* netzach; when it forgets, it dries up everything it touches.',
    pair_with_archangel: 'Raphael — the canonical archangel of Hod in classical Kabbalah; the angel of Mercury, of healing through right communication, of the physician who knows the correct word for each diagnosis.',
    pair_with_archangel_slug: 'raphael',
    pair_with_planet: 'Mercury — the canonical Hermetic correspondence; the planet of language, intellect, communication, ritual, and the messenger between worlds.',
    pair_with_planet_slug: 'mercury',
    pair_with_tarot: 'Temperance — Hebrew letter Samekh (ס); the angel of alchemy and right blending, the precise art of mixing the elements until the splendor arrives.',
    pair_with_tarot_slug: 'temperance',
    pair_with_chakra: 'Solar Plexus — Hod sits at the left hip, near the seat of personal articulation. Pair Hod work with solar-plexus practice (manipura) when the question is *how to give the inner truth its precise outer form*.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sign: 'gemini',
    key_questions: [
      'Where in my life is the splendor missing because I have not done the labor of *form* — the writing down, the ritualizing, the articulating?',
      'Which of my truths has been waiting for its right word — and have I been treating the labor of finding that word as secondary, when it was actually the practice itself?',
      'Where has my hod become empty ritual — precise form without netzach-passion — and what would it look like to bring the flame back to the ceremony?'
    ]
  },
  {
    slug: 'yesod',
    text: 'Yesod',
    hebrew: 'יסוד',
    translation: 'Foundation — the astral, the dream-realm, the sexual-creative root.',
    tradition: 'Kabbalistic — the lower spine of the Tree; Joseph the Tzaddik in classical Kabbalah',
    glyph: '🌙',
    pillar: 'mildness',
    position: 9,
    triad: 'astral',
    one_liner: 'The foundation. The astral, dream, subconscious and sexual-creative root — the lunar storehouse where all the upper sefirot gather before flowing into the world of form.',
    meaning: "Yesod (יסוד, 'Foundation') is the ninth sefirah, the lower spine of the Tree, and the *gathering-point* at which all the energies of the upper nine sefirot are collected and concentrated before they flow downward into Malkuth, the manifest world. Yesod is the realm of the *astral* — the dream-realm, the imaginal, the subconscious, the sexual-creative root. In the patriarchal correspondence of the Zohar, Yesod is *Joseph the Tzaddik* — the dream-interpreter who held the divine influence so faithfully that his name became synonymous with the role of *tzaddik* ('the righteous one'), the figure through whom the upper worlds pour into the lower. Yesod is also the *sefirah of the covenant* (*Brit*), associated in classical Kabbalah with the sexual-creative organ and with the discipline of right relationship between the inner generative force and the outer creative life — the kabbalistic understanding being that *what you do with your generative energy, you do with the foundation of every reality you build*. The Lurianic Kabbalah places Yesod at the *foundation-stone* of *Zeir Anpin* — the place from which all influence descends into the world of Malkuth. Yesod is also the *moon-sphere*, the lunar storehouse that reflects all the upper light downward; without Yesod's reflective discipline, the upper sefirot have no orderly path into manifestation. To work with Yesod is to recognize that the *foundation* of every outer reality is an inner energetic configuration — and that the discipline of the dream, the sexual, and the imaginal is the discipline of what your outer life will be built on.",
    what_it_carries: "The reservoir of imaginal and generative force. Yesod carries the energy of *the imaginal foundation* — the dream that has not yet become an act, the desire that has not yet become a choice, the inner image that is rehearsing itself before it manifests. Yesod is also the energy of *sexual and creative integrity* — the felt-sense that what you do with your generative force matters, because it is the foundation on which the rest is built. Yesod is the realm of dreams, omens, synchronicities, the lunar cycle, the tides of the unconscious.",
    how_to_work_with_it: "Yesod ripens through *attention to the foundation*. Three practices: (1) Keep a dream journal for forty days. Yesod speaks first in dreams; the practice teaches you to hear. (2) Examine your generative life: where is your sexual-creative energy flowing, and is it flowing toward what you actually want to build? Yesod-work is the alignment of the inner generative current with the outer life it will become the foundation of. (3) Track the moon. Notice your own rhythm with the lunar cycle for three months; Yesod's discipline is the discipline of *being in time with the tides*.",
    in_love: 'A relationship grounded in shared imaginal and sexual integrity — both partners pay attention to dreams, to longing, to the inner foundation that the outer relationship is rising from. Reversed: yesod-as-fantasy — confusing the imaginal with the manifest, projecting dream-figures onto the actual beloved.',
    in_work: 'The work of *deep foundations* — the visioning, the prototyping, the slow inner labor that precedes any visible build. Yesod-work often looks like daydreaming to outsiders and is the actual generative source of everything that eventually becomes real.',
    the_gift: '*The foundation holds.* What you build will stand because the inner reservoir was attended to.',
    the_shadow: 'Yesod-as-leak. Generative force scattered into compulsions (porn, fantasy, drift, addiction) drains the foundation; the outer life cannot rise higher than the inner reservoir is full. The Kabbalists are explicit: the discipline of *shemirat ha-brit* (guarding the covenant of the foundation) is not moralism — it is the practical recognition that the foundation determines the building.',
    pair_with_archangel: 'Gabriel — the canonical archangel of Yesod in classical Kabbalah; the angel of the Moon, of dreams, of annunciation, of the lunar reservoir that holds the upper light in trust for the manifest world.',
    pair_with_archangel_slug: 'gabriel',
    pair_with_planet: 'Moon — the canonical Hermetic correspondence; the lunar mirror that reflects all the upper light downward, the cycles of the unconscious, the tides of the imaginal.',
    pair_with_planet_slug: 'moon',
    pair_with_tarot: 'The Moon — Hebrew letter Qoph (ק); the lunar mystery, the path through the imaginal, the dogs howling at the threshold of dream.',
    pair_with_tarot_slug: 'the-moon',
    pair_with_chakra: 'Sacral — Yesod is the direct Kabbalistic mirror of the sacral chakra (svadhisthana); both are the seat of generative creative-sexual force and the foundation on which the manifest life is built.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sign: 'cancer',
    key_questions: [
      'What have my dreams been telling me that I have been refusing to write down — and what would change if I treated the dream-life as the foundation it actually is?',
      'Where is my generative force leaking into compulsion (fantasy, drift, distraction) instead of flowing toward what I actually want to build?',
      'If I tracked my own rhythm with the moon for three months, what would I learn about the cycles of my own imaginal-creative life?'
    ]
  },
  {
    slug: 'malkuth',
    text: 'Malkuth',
    hebrew: 'מלכות',
    translation: 'Kingdom — Earth, embodiment, the Shekinah indwelling in the manifest.',
    tradition: 'Kabbalistic — the lowest sefirah, the manifest world; the Shekinah and the Bride in classical Kabbalah',
    glyph: '🌍',
    pillar: 'mildness',
    position: 10,
    triad: 'manifest',
    one_liner: 'The kingdom. Earth, embodiment, the manifest world — where every other sefirah arrives and becomes real. The Shekinah, the indwelling presence, the bride awaiting the bridegroom.',
    meaning: "Malkuth (מלכות, 'Kingdom') is the tenth and lowest sefirah, the manifest world, and the *destination* toward which the entire descending current of the Tree is flowing. Every spark from Kether, every shaping of Binah, every overflow of Chesed and tempering of Geburah, every radiance of Tiferet, every passion of Netzach and articulation of Hod, every gathering of Yesod — *all of it is on its way here*. Malkuth is the *Shekinah* (שכינה, the 'indwelling') — the feminine presence of God in the world, the divine bride whose reunion with the divine bridegroom (Tiferet) is the central mystery of the Lurianic Kabbalah. In the Zohar, Malkuth is *Knesset Yisrael* ('the Assembly of Israel') — the collective body of all souls and all created beings, the cosmic *kallah* (bride) whose wholeness is the redemption the entire Tree is laboring toward. Malkuth is the *body* — your literal body, the soil beneath your feet, the people you live with, the work you do with your hands, the meal you eat tonight. The Kabbalists are uncompromising about this: there is no Kether without Malkuth, no source without earth, no spirit without flesh. The whole Tree exists *in order that Malkuth may receive*. To skip Malkuth in the pursuit of upper-sefirah experiences is to refuse the very destination the divine has been moving toward for ten emanations. The work of Malkuth is *embodiment as practice*: making the ordinary holy, treating the body as a sefirah, recognizing the manifest world not as the lowest but as the *culmination* of everything the upper Tree was for.",
    what_it_carries: "Embodied presence. Malkuth carries the energy of *here-now-this* — the felt-sense that this body, this kitchen, this conversation, this Tuesday is where the entire Tree has been heading. Malkuth is also the energy of *the Shekinah* — the divine feminine indwelling in the physical, in the relational, in the political, in the ecological. To honor Malkuth is to honor the earth, the body, the meal, the household, the local community, the labor of hands. Malkuth is also the realm of *consequence and reception* — what the entire Tree has produced finally lands here, and what it does or fails to do here is the test of whether the upper sefirot were actually in alignment.",
    how_to_work_with_it: "Malkuth ripens through *embodied dailiness*. Three practices: (1) Take one daily, mundane act — cooking, washing, walking, sitting on the floor with a child — and treat it as the most important sefirah-work of your day. The transformation happens when the upper sefirot are recognized as *being here, in this*. (2) Tend the earth: garden, compost, walk on the ground barefoot, learn the names of three local plants. Malkuth deepens when the planet is felt as the Shekinah's body. (3) Eat consciously: one meal a day with full presence, blessing the food, knowing where it came from. The kitchen is the most under-honored temple of the Tree of Life.",
    in_love: 'A relationship that has been brought all the way down to earth — the love is in the shared meal, the shared bed, the shared bills, the shared parenting, the daily acts of body and home. Reversed: spiritualizing the relationship away from its embodied realities — pretending Malkuth is somehow less holy than the upper sefirot.',
    in_work: 'The carpenter, the chef, the gardener, the parent, the nurse, the cleaner — every work that touches the manifest world is malkuth-work. The Kabbalists would say: there is no higher work, only differently-located work. The doctor in the hospital and the prophet on the mountain are both serving Malkuth\'s reception of the divine.',
    the_gift: '*Heaven arrives in earth.* The Tree completes itself in your kitchen, your body, your soil, your Tuesday.',
    the_shadow: 'Spiritual disembodiment. The seeker who pursues kether-experiences while their actual life (relationships, finances, body, household) falls into disrepair has betrayed the entire Tree. Malkuth-shadow is the gnostic refusal of the body, the spiritual-bypass of the manifest world, the contempt for the daily that the Kabbalists name as the deepest possible failure of the work.',
    pair_with_archangel: 'Uriel — the angel of light who walks in the embodied world; the closest correspondence in the gab44 archangel set to canonical Malkuth (Sandalphon, the angel who carries prayers from earth to heaven). Uriel and Sandalphon share the role of the angel who *dignifies the manifest*.',
    pair_with_archangel_slug: 'uriel',
    pair_with_planet: 'Saturn — used here as the planet of *structure-in-time*, the ringed shaper of the manifest world. Classical Kabbalah names Malkuth\'s correspondence as *the Earth itself*; we use Saturn as the closest Hermetic planet because Saturn governs the laws of incarnation Malkuth is the destination of.',
    pair_with_planet_slug: 'saturn',
    pair_with_tarot: 'The World — Hebrew letter Tav (ת); the dancing figure within the wreath, the completion of the journey, the final card of the major arcana, the cosmic kingdom made whole.',
    pair_with_tarot_slug: 'the-world',
    pair_with_chakra: 'Root — Malkuth is the direct Kabbalistic mirror of the root chakra (muladhara); both are the foundation in the body, the seat of the manifest, the grounding place where the rest of the energetic system meets the earth.',
    pair_with_chakra_slug: 'root',
    pair_with_sign: 'taurus',
    key_questions: [
      'Where in my life have I been chasing upper-sefirot experiences (mysticism, insight, peak states) while neglecting the malkuth-work of my actual body, household, work, and earth?',
      'Which daily, mundane act of my life is asking to be honored as sefirah-work — and what would change if I treated it as the destination the entire Tree has been heading toward?',
      'If the Shekinah is the divine indwelling in the manifest world, where in my life have I been refusing to recognize Her — and what would it cost me to start?'
    ]
  }
]

const SEFIRAH_BY_SLUG: Record<string, SefirahGuide> = Object.fromEntries(SEFIROT.map((s) => [s.slug, s]))

export const SEFIRAH_SLUGS = SEFIROT.map((s) => s.slug)

export function isSefirahSlug(s: string): boolean {
  return s in SEFIRAH_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const PILLAR_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  mercy: { c1: '#d4a64a', c2: '#8a5818', label: 'Pillar of Mercy · the expansive right pillar' },
  severity: { c1: '#5a3a7a', c2: '#2a1840', label: 'Pillar of Severity · the contractive left pillar' },
  mildness: { c1: '#5a8ec6', c2: '#1c4a78', label: 'Pillar of Mildness · the central balancing pillar' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function sefirahPageHTML(slug: string): string {
  const r = SEFIRAH_BY_SLUG[slug]
  if (!r) return ''
  const accent = PILLAR_ACCENT[r.pillar] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=sefirah-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.hebrew)}) — Meaning, Tree of Life Position &amp; How to Work With It · gab44 ✨`
  const description = `What ${r.text} (${r.hebrew}) actually means in Kabbalah, the lineage it comes from (Sefer Yetzirah, Zohar, Lurianic), what this sefirah carries, how to work with it, in love, in work, the gift, the shadow, pair-with archangel/planet/tarot/chakra. Hand-written, warm, lineage-honest.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sefirot', item: `${SITE_URL}/gab44/sefirot` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/sefirot/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — meaning, Tree of Life position & how to work with it`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/sefirot/${slug}`,
        about: `${r.text} sefirah, Kabbalah, Tree of Life, ${r.tradition}`
      }
    ]
  })

  const otherSefirotHtml = SEFIROT.filter((q) => q.slug !== slug).map((q) => {
    const acc = PILLAR_ACCENT[q.pillar] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/sefirot/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/sefirot/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.text} (${r.hebrew}) — meaning & how to work with it`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/sefirot/${slug}" />
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
  .hebrew { font-size: 0.65em; color: var(--fg-muted); font-weight: 600; padding-left: 10px; letter-spacing: 0.05em; }
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
  .translation-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 12px 0 24px; border-left: 4px solid var(--c1); }
  .translation-card .lbl { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .translation-card .text { font-size: 16px; color: var(--fg); margin: 0 0 8px; line-height: 1.6; }
  .translation-card .tradition { font-size: 12px; color: var(--fg-muted); font-style: italic; margin: 0; }
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
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } h1 { font-size: 28px; } }
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
  .pair-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 700px) { .pair-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 420px) { .pair-grid { grid-template-columns: 1fr; } }
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
  .other-sefirot { margin: 36px 0 22px; }
  .other-sefirot h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .sefirot-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .sefirot-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 420px) { .sefirot-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 10px; line-height: 1.3; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/sefirot">all 10 sefirot</a>
      <a href="/gab44/archangels">archangels</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/planets">planets</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Sefirot · Tree of Life</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.text)}<span class="hebrew">${escapeHtml(r.hebrew)}</span></h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>sefirah ${r.position} of 10</span>
      <span>${escapeHtml(r.triad)} triad</span>
      <span>pillar of ${escapeHtml(r.pillar)}</span>
    </div>

    <div class="translation-card">
      <div class="lbl">translation</div>
      <p class="text">${escapeHtml(r.translation)}</p>
      <p class="tradition">${escapeHtml(r.tradition)}</p>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.text)} actually carries</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🌀</span>what it carries</h2>
    <div class="signs-card">
      <h3>the energy of this sefirah in a person</h3>
      <p>${escapeHtml(r.what_it_carries)}</p>
    </div>

    <h2><span class="icon">🛠️</span>how to work with it</h2>
    <div class="panel where">
      <h3>three practices · daily / weekly / seasonal</h3>
      <p>${escapeHtml(r.how_to_work_with_it)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this sefirah teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the sefirah becomes its own opposite</h3>
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
      <a class="pair-card" href="/gab44/archangels/${r.pair_with_archangel_slug}">
        <div class="pair-label">archangel</div>
        <div class="pair-name">${escapeHtml(r.pair_with_archangel_slug)}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_archangel)}</div>
      </a>
      <a class="pair-card" href="/gab44/planets/${r.pair_with_planet_slug}">
        <div class="pair-label">planet</div>
        <div class="pair-name">${escapeHtml(r.pair_with_planet_slug)}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_planet)}</div>
      </a>
      <a class="pair-card" href="/gab44/tarot/${r.pair_with_tarot_slug}">
        <div class="pair-label">tarot</div>
        <div class="pair-name">${escapeHtml(r.pair_with_tarot_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_tarot)}</div>
      </a>
      <a class="pair-card" href="/gab44/chakras/${r.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(r.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(r.pair_with_chakra)}</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after the practice</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which sefirah *your* chart is asking for?</h2>
      <p>Each chart has a primary sefirah — the location on the Tree of Life where your soul is doing its current work. A <strong>personal reading</strong> identifies it and tells you the archangel, the planet, and the practice that will make the sefirah land in your life. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Get my sefirah read →</a>
    </section>

    <section class="other-sefirot">
      <h3>the other 9 sefirot</h3>
      <div class="sefirot-grid">
        ${otherSefirotHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/sefirot">all 10 sefirot</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function sefirotIndexHTML(): string {
  const triads = [
    { key: 'supernal', label: 'Supernal Triad · the Above (Kether, Chokmah, Binah)' },
    { key: 'ethical', label: 'Ethical Triad · the Heart (Chesed, Geburah, Tiferet)' },
    { key: 'astral', label: 'Astral Triad · the Below (Netzach, Hod, Yesod)' },
    { key: 'manifest', label: 'Manifest · the Earth (Malkuth)' }
  ]

  const triadSections = triads.map((triad) => {
    const items = SEFIROT.filter((s) => s.triad === triad.key).map((s) => {
      const accent = PILLAR_ACCENT[s.pillar]
      return `<a href="/gab44/sefirot/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/10</span>
        </div>
        <div class="name">${escapeHtml(s.text)} <span class="hebrew">${escapeHtml(s.hebrew)}</span></div>
        <div class="trans">${escapeHtml(s.translation)}</div>
        <div class="teaser">${escapeHtml(s.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="fam-section">
      <h2 class="fam-h">${escapeHtml(triad.label)}</h2>
      <div class="grid">
        ${items}
      </div>
    </section>`
  }).join('\n      ')

  const collectionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The 10 Sefirot — Tree of Life — Meanings, Correspondences & How to Work With Each',
    description: 'Hand-written guides to the 10 sefirot of the Kabbalistic Tree of Life. From Kether (the Crown, the source) to Malkuth (the Kingdom, the manifest world). Each page covers meaning, lineage (Sefer Yetzirah, Zohar, Lurianic Kabbalah), what the sefirah carries, how to work with it, in love, in work, gift, shadow, pair-with archangel, planet, tarot, chakra.',
    url: `${SITE_URL}/gab44/sefirot`,
    hasPart: SEFIROT.map((s) => ({
      '@type': 'Article',
      name: `${s.text} (${s.hebrew})`,
      url: `${SITE_URL}/gab44/sefirot/${s.slug}`,
      about: s.translation
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 10 Sefirot of the Tree of Life — Meanings, Correspondences &amp; How to Work With Each · gab44 ✨</title>
<meta name="description" content="The 10 sefirot of the Kabbalistic Tree of Life — Kether (Crown), Chokmah (Wisdom), Binah (Understanding), Chesed (Mercy), Geburah (Severity), Tiferet (Beauty), Netzach (Victory), Hod (Splendor), Yesod (Foundation), Malkuth (Kingdom). What each sefirah means, the lineage it comes from (Sefer Yetzirah, Zohar, Lurianic Kabbalah), the practice. Hand-written, warm, lineage-honest." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/sefirot" />
<meta property="og:title" content="The 10 Sefirot — Tree of Life · gab44" />
<meta property="og:description" content="The canonical Western mystical map. From Kether (the Crown) to Malkuth (the Kingdom) — what each sefirah carries, hand-written, honest about lineage." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${collectionLd}</script>
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
    padding-left: 12px; border-left: 4px solid var(--accent); }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  @media (max-width: 800px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 18px 20px; border-radius: 12px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .glyph { font-size: 24px; }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 4px; line-height: 1.3; }
  .card .hebrew { font-size: 12px; color: var(--fg-muted); font-weight: 500; padding-left: 6px; }
  .card .trans { font-size: 12px; color: var(--accent); margin-bottom: 6px; font-weight: 500; line-height: 1.4; }
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
      <a href="/gab44/archangels">archangels</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/planets">planets</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 10 <span class="accent">Sefirot</span> — Tree of Life · meanings &amp; how to work with each</h1>
    <p class="sub">Hand-written guides to the canonical Western mystical map. From Kether (the Crown, the source) to Malkuth (the Kingdom, the manifest world). Each page has the actual lineage, the practice, the gift, the shadow.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right sefirah for your moment?</strong> Click any of the 10 below. Every page has the actual *meaning* (the Hebrew root, the lineage from Sefer Yetzirah / Zohar / Lurianic Kabbalah), what the sefirah *carries* in a person, *how to work with it* (three practices, daily / weekly / seasonal), what it means in love and in work, the *gift* it teaches, the *shadow* (the way the sefirah turns into its own opposite when unbalanced), and pair-with cards for archangel, planet, tarot, and chakra.</p>
      <p><strong>The four groups.</strong> The 10 sefirot cluster into four classical regions of the Tree. <em>Supernal Triad</em> (Kether, Chokmah, Binah) is the realm above the abyss — pure source, pure dynamic, pure form. <em>Ethical Triad</em> (Chesed, Geburah, Tiferet) is the heart of the Tree — the mercy / severity / harmony triangle where the soul does its central work. <em>Astral Triad</em> (Netzach, Hod, Yesod) is the formative realm below the heart — passion, articulation, and the dream-foundation. <em>Manifest</em> (Malkuth) is the kingdom — the body, the earth, the household, the world the entire Tree has been laboring toward.</p>
      <p><strong>The three pillars.</strong> The Tree is also organized vertically. <em>Pillar of Mercy</em> (right) — Chokmah, Chesed, Netzach: the expansive, give-outward energies. <em>Pillar of Severity</em> (left) — Binah, Geburah, Hod: the structuring, hold-form energies. <em>Pillar of Mildness</em> (center) — Kether, Tiferet, Yesod, Malkuth: the central balancing line, the path of the lightning bolt down which divine influence descends.</p>
      <p><strong>Sefirot are gifts from a living tradition.</strong> The Tree comes from Jewish Kabbalah — Sefer Yetzirah (~200 CE), the Zohar (~1280 CE), the Lurianic Kabbalah of Isaac Luria (Safed, 16th c.). It was taken up by Renaissance Christian Kabbalah, the Golden Dawn, and modern Western esotericism. The lineage is Jewish; the appropriation has been real. Every page names the source-text where possible and treats the Tree as practice, not decoration. Sefirot pair natively with the archangelic intelligences, the planetary forces, the tarot keys, and the chakric body-map — the entire mystical-architecture trinity of gab44 meets here. <a href="/gab44/archangels">See the archangels →</a> · <a href="/gab44/chakras">See the chakras →</a></p>
    </div>

    ${triadSections}

    <div class="reading-strip">
      <h2>Want to know which sefirah your chart is asking for?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary sefirah — the location on the Tree of Life where your soul is doing its current work. A $9 reading identifies it. <a href="/gab44/reading?ref=sefirot-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 10 sefirot · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
