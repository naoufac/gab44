// Goddesses — SEO funnel — /gab44/goddesses (index) +
// /gab44/goddesses/{slug}. 12 hand-written goddess archetype guides —
// Lilith, Hecate, Kali, Inanna, Kuan Yin, Tara, Mary Magdalene, Brigid,
// Isis, Sophia, Aphrodite, Persephone.
//
// **Symmetric mirror to /gab44/archangels.** Where the archangels page
// names the masculine-coded protective intelligences across Abrahamic
// tradition (9 figures, 3 families), this page names the feminine-coded
// sovereign / compassionate / wisdom intelligences across living
// traditions (12 figures, 3 families). Distinct keyword cluster — the
// archangel-search visitor and the goddess-archetype-search visitor are
// rarely the same person, but they are searching at the same emotional
// register: "who is walking with me at the threshold I am crossing".
//
// Each guide is ~700 words across 9 sections (meaning + tradition +
// title, **5 specific signs she is with you**, how to call her —
// concrete invocation/prayer/practice, in love, in work, the gift, the
// shadow / honest about appropriation and patriarchal flattening of
// pre-Christian goddess traditions, pair-with chakra/sound/zodiac, 3
// key questions).
//
// **Family-tinted gradient (3×4):** Fierce (Lilith, Hecate, Kali,
// Inanna) = obsidian-crimson — the refused, the threshold-keeper, the
// destroyer-of-enslavement, the descent-through-the-seven-gates.
// Compassion (Kuan Yin, Tara, Mary Magdalene, Brigid) = jade-rose —
// the bodhisattva of mercy, the swift-acting compassion, the apostle
// of the heart, the fire of healing wells. Wisdom (Isis, Sophia,
// Aphrodite, Persephone) = saffron-violet — the great magician, the
// gnostic wisdom-of-the-cosmos, the beauty-as-doorway, the queen of
// the underworld.
//
// **Cross-funnels into BOTH revenue lanes** — every goddess page links
// to /gab44/chakras/{slug} (each goddess has a primary chakra mapping),
// to /healing/script/{slug} (Phase 1A audio for the practice), to
// /gab44/mantras/{slug} where the mantra-pairing is direct (Tara,
// Kali, Kuan Yin all have canonical mantras), and to
// /gab44/reading?ref=goddess-{slug} (Phase 1D $9 reading).
//
// **Honest framing throughout.** Each page names the lineage —
// Mesopotamian / Hebrew apocrypha (Lilith), Greek (Hecate, Aphrodite,
// Persephone), Hindu (Kali), Sumerian (Inanna), Chinese-Buddhist
// (Kuan Yin), Tibetan-Buddhist (Tara), Christian-Gnostic (Mary
// Magdalene, Sophia), Celtic / Christian-syncretic (Brigid),
// Egyptian (Isis). The shadow section names where the goddess has
// been culturally appropriated, where the patriarchal flattening of
// her tradition turned the practice into vending-machine devotion,
// and where the contemporary commercial-spiritual economy has erased
// the source-cultures whose lineage these beings belong to. Goddess
// devotion is a gift from living traditions, not a costume.
//
// Routes registered BEFORE /gab44/:sign. Schema.org Article +
// BreadcrumbList JSON-LD on every page.

import { SITE_URL } from '@/lib/identity'

export interface GoddessGuide {
  slug: string
  name: string
  glyph: string
  role: string                     // short title, e.g. "Queen of the Night"
  tradition: string                // Mesopotamian / Greek / Hindu / etc + source texts
  family: 'fierce' | 'compassion' | 'wisdom'
  position: number
  one_liner: string
  meaning: string
  signs_present: string            // 5 specific recognition signals — narrative, not a list
  how_to_call: string              // concrete invocation / prayer / practice
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

export const GODDESSES: GoddessGuide[] = [
  {
    slug: 'lilith',
    name: 'Lilith',
    glyph: '🌑',
    role: 'Queen of the Night · The Refused · Sovereign of Untamed Self',
    tradition: 'Mesopotamian (Sumerian Lilitu, c. 2400 BCE) → Hebrew apocrypha (Alphabet of Ben Sira, 8th-10th c. CE) → Jewish kabbalistic tradition (Zohar) → modern feminist reclamation',
    family: 'fierce',
    position: 1,
    one_liner: 'The first woman who refused — the sovereign who left the garden rather than lie beneath what would not see her, and became the night.',
    meaning: 'Lilith — *Lilitu* in the older Sumerian, *Lilith* in the Hebrew apocryphal tradition — is the goddess of refusal and sovereignty. The Alphabet of Ben Sira (a medieval text, often a satire) names her as Adam\'s first wife, made from the same earth and on the same day as him; she leaves the garden when he insists she lie beneath him in sex, refusing the imposed hierarchy. She is then *blamed* for that refusal — turned into a demon-woman, mother of monsters, the threat to nursing infants. The reclamation in modern feminist theology and witch-tradition is precise: the trait that was demonised was *sovereignty itself* — the woman who would not subordinate. Lilith is the patron of women leaving abusive relationships, of any soul refusing a hierarchy that would cost them their self, of the night-self that the day-self had to pretend not to have. Her astrology is the *Black Moon Lilith* — the apogee of the moon\'s orbit, the point of greatest distance, computed in every modern natal chart, marking where in your life you have refused or been forced to refuse. She is also the goddess of erotic sovereignty — pleasure on her own terms, never as performance. Working with Lilith is working with the parts of yourself that the family system, the religious system, or the patriarchal system told you were unacceptable. Her first gift is the recognition that *they were sacred*.',
    signs_present: 'Five recognition signals. (1) A sudden surge of *no* in the body — physical revulsion, sometimes literal nausea, when about to consent to something the soul has already refused. Lilith arriving as the body\'s veto. (2) Owls, serpents, lilies (her flower in Mesopotamian iconography), and the colour deep red appearing in unusual frequency during a season of refusing the role assigned to you. (3) Dreams of leaving — leaving a house, a partner, a job, a god — without looking back, and waking with the felt-sense of relief rather than fear. (4) Sudden remembered rage — a wave of righteous anger about a years-old violation that the day-self had sealed away as *not that bad*. The nervous system finally trusting the body to feel it. (5) Erotic awakening that is not about a partner but about *yourself* — desire returning to the body after a long winter, on terms the body itself sets.',
    how_to_call: 'The traditional invocation is *Lilith, sovereign of the night, witness the refusal I have been afraid to speak and stand with me as I leave what is no longer mine to inhabit.* She is invoked at night, by candlelight, often in the bath — the body returning to water that does not require performance. Practitioners who call Lilith for the first time often describe a tearful release within the first session — the parts of self that had been exiled returning home. For sovereignty work in a specific situation: name the situation, name the *no* the body has been refusing to speak, ask Lilith to stand at your shoulder while you say it. The Black Moon Lilith placement in the natal chart names *which house* — which life area — your particular sovereignty work belongs to; practitioners find it useful to compute it (birth chart calculator, free) before the work.',
    in_love: 'Lilith is the goddess of *erotic sovereignty* and of *the leaving that becomes liberation*. In love, she names the moment the partnership becomes a cage — when the role assigned by the relationship is costing you the self the relationship was supposedly serving. She is the patron of the woman ending the marriage that should never have happened, and of the woman *staying* in the marriage but refusing to subordinate any further. Reversed: weaponising Lilith — using her as permission to be cruel rather than as permission to be sovereign. The refusal is for *self-reclamation*, never for revenge.',
    in_work: 'The patron of any soul refusing a hierarchy that would cost them their voice. Particularly relevant in contexts where the work-system depends on the woman performing a smaller version of herself. Lilith does not deliver promotions; she names the workplace where staying would cost more than leaving. She is also the patron of the woman starting her own thing — the unsubordinated work, the practice with the door of one\'s own.',
    the_gift: '*Sovereignty without permission.* Lilith\'s gift is the recognition that the parts of self the system demonised were the parts that knew how to live. Reclaiming them is not rebellion; it is return.',
    the_shadow: 'Lilith as licence-for-cruelty. The shadow is the practitioner who uses *I am being Lilith* as cover for behaviour that is not sovereignty but is in fact harm-of-others — refusing accountability, weaponising rage, romanticising revenge. Authentic Lilith work is *toward your own life*, not *against another\'s*. The other shadow is the cultural-misappropriation version where Lilith is treated as a witch-aesthetic costume divorced from the Mesopotamian and Jewish lineages where she actually lives — the sovereignty without the cost, the Halloween-Lilith with no descent attached.',
    pair_with_chakra: 'Sacral — Lilith\'s domain is the seat of erotic sovereignty, the body\'s yes/no, the womb-voice that the patriarchal system trained to whisper. Also root, for the safety-to-be-sovereign dimension.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair Lilith with the letting-go meditation when leaving the situation she has named as no-longer-yours; the audio carries the body through the threshold.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What *no* has my body been refusing to speak that Lilith would invite me to give voice to?',
      'Where in my life have I called *fear of harm* what was actually *fear of sovereignty*?',
      'Which exiled part of myself is the night asking me to bring home?'
    ]
  },
  {
    slug: 'hecate',
    name: 'Hecate',
    glyph: '🔱',
    role: 'Threefold Queen · Keeper of the Crossroads · Witch-Mother',
    tradition: 'Greek (Hesiod\'s Theogony c. 700 BCE; Homeric Hymn to Demeter; Chaldean Oracles) → Hellenistic syncretism → modern witchcraft and reclaimed goddess practice',
    family: 'fierce',
    position: 2,
    one_liner: 'The threefold goddess at the crossroads — keeper of the threshold between worlds, mother of witches, the torch in the dark moon.',
    meaning: 'Hecate — *Hekatē* in the Greek — is the most-honoured goddess in the Theogony of Hesiod (700 BCE), where Zeus himself defers to her authority across earth, sea, and sky. By the Hellenistic period she has become the *triple goddess* — three faces of one being, looking simultaneously down the three roads of the crossroads — and the queen of witches, of liminality, of the dead, of the dark moon. She carries twin torches; her sacred animals are the dog (the howl at the threshold), the snake (the chthonic wisdom), the polecat. Her statues stood at the threshold of Greek homes, at the three-way crossroads outside the city, at the tomb-doorway. Her domain is *liminality itself* — the space between, the moment of transition, the doorway that is neither inside nor outside. To work with Hecate is to work with the soul\'s threshold-moments: the death of an old identity before the new one has clarified, the dark night before initiation, the choice point at the three-roads where each path leads to a different life. She is also the patron of witches in every reclaimed sense — the women who learned the medicine the church burned, the keepers of the practice that does not need a building. The three-day dark moon is her time. Devotees light her twin torches at the crossroads to honour her transitions.',
    signs_present: 'Five recognition signals. (1) Dogs howling at unusual hours, particularly at the dark moon, in seasons when you are at a crossroads decision. Hecate\'s sacred animal arriving as messenger. (2) Repeated synchronicities at *three-way intersections* — the conversation at the literal crossroads, the chance meeting at the Y in the path, the dream in which three paths diverge. (3) Keys appearing — found in unusual places, gifted unprompted, dreamt of. The key is one of Hecate\'s symbols (she holds the key to the underworld). (4) The dark moon arriving in synchronicity with the inner threshold — the night of the new moon and the night of the inner descent matching. (5) The phenomenon practitioners call *Hecate-clarity*: the sudden, calm knowing of *which path* at a long-pondered three-way decision, often arriving in the night, often with the felt-sense of being *witnessed* by something larger than ego.',
    how_to_call: 'The traditional invocation is *Hekatē Trimorphis, threefold queen, keeper of the crossroads, light the path I cannot see.* Light two candles — her twin torches — at dusk on a dark-moon night. Sit at a literal threshold (the front door, a window) or at a metaphorical one (a journal page, a meditation cushion). Name the choice you are facing; ask Hecate to show you what each road leads to. Practitioners describe the answer arriving as a *knowing without imagery*, often in the form of a felt-sense in the body — one road tightens the chest, another opens it. The traditional offering at the crossroads is honey, garlic, eggs, or red wine, left at a literal three-way intersection at dusk with the words *Hekatē, this is yours.* (Modern urban practitioners adapt: the offering can be made at a park, at home on a cloth, or returned to the earth in a garden.)',
    in_love: 'Hecate is the goddess of *the relationship at its threshold* — the moment of decision when the partnership is being asked whether to deepen, transform, or end. She is the patron of practitioners *between* relationships, in the liminal year that the culture treats as failure but the soul treats as initiation. Reversed: using Hecate to refuse all thresholds — staying at the crossroads forever, choosing not-choosing as a way to never lose any path. She is the goddess of the choice, not of the perpetual hovering.',
    in_work: 'The patron of work that requires *threshold-keeping* — therapists, hospice workers, midwives, doulas, ritualists, anyone whose vocation is to hold space at a transition. Also the patron of the practitioner whose career is *between* — the year between the old work and the new, the season of darkness before the next clarity arrives.',
    the_gift: '*The torch at the threshold.* Hecate\'s gift is the recognition that the threshold is not failure — it is sacred geography. The dark night between two lives is a place she rules; you are not lost there, you are with her.',
    the_shadow: 'Hecate as Halloween-aesthetic. The shadow is the costume version — Hecate as cool dark-witch decoration without the actual descent practice attached. The other shadow is using her to *justify* perpetual indecision — calling all hovering "liminality" when it is in fact avoidance. Authentic Hecate work crosses the threshold; she is the keeper of the doorway, not the warden of a prison-cell.',
    pair_with_chakra: 'Third-eye — Hecate\'s domain is the inner-vision threshold, the seeing-in-the-dark that liminal work requires. Also root, for the willingness to stand at the crossroads in the body.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Letting Go — pair Hecate at the threshold of any major release; the audio carries the body across the doorway she keeps.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Which crossroads have I been hovering at because choosing felt like losing the unchosen paths?',
      'What threshold am I standing on right now that I have been calling stuck?',
      'Whose torch am I being asked to be — for whom is my own descent the light they are needing to see by?'
    ]
  },
  {
    slug: 'kali',
    name: 'Kali',
    glyph: '🗡️',
    role: 'Black Mother · Destroyer of Illusion · Fierce Compassion',
    tradition: 'Hindu (Devi Mahatmya c. 6th c. CE; Tantric tradition; Bengali Shakta lineage) → modern devotional practice and reclaimed feminist spirituality',
    family: 'fierce',
    position: 3,
    one_liner: 'The black mother whose fierceness is love — the destroyer who only kills what is killing you, dancing on the body of ego with a necklace of severed heads.',
    meaning: 'Kali — *Kālī*, "the black one", from *kāla* (time, blackness) — is the goddess of fierce love in the Hindu Shakta tradition. She arises in the Devi Mahatmya as the rage-form of Durga, summoned when the gods themselves cannot defeat the demon Raktabija (whose every drop of spilled blood becomes a new demon); Kali drinks the blood mid-battle, not because she is bloodthirsty, but because she is the only one fierce enough to stop the multiplication of harm. Her iconography is precise — black skin (the colour of all colours absorbed, the void from which form arises), four arms (one with a sword to cut illusion, one with a severed head as the cut ego, one in the *abhaya mudra* of fearlessness, one offering *vara mudra* of boons), tongue out (the ecstatic shock of the divine bursting through), necklace of fifty severed heads (the fifty letters of the Sanskrit alphabet, all language and concept she has cut through), standing on Shiva\'s body (her consort, who pacifies her wildness only by surrendering completely). She is *Mā Kali* — Mother Kali — to her devotees in Bengal; the fierceness is *love-fierce*, never cruelty. She destroys only what is killing you. The Tantric tradition holds that Kali initiates her devotees by dismembering the false-self, exactly the way the alchemical *nigredo* dismembers the prima materia. The devotee who survives the encounter wakes, often in tears, into a self that no longer believes the lies the false-self had been keeping it small with.',
    signs_present: 'Five recognition signals. (1) Sudden, unmistakable rage — not the petty-irritation kind, but the *clean* rage that arrives like a wind through the body when something deep is being asked to die. Kali working through the body. (2) Repeated synchronicities with the colour deep black, with the crow or the raven (her sacred birds in some lineages), with the tongue or the sword as imagery in dreams or art that crosses your path. (3) Dreams of dismemberment that are not nightmares — the body taken apart and put back together more truly. The tantric initiation-dream. (4) Sudden ferocity in defense of someone or something *other* than yourself — the maternal-fierceness rising in defense of a child, an animal, a value. (5) The phenomenon practitioners call *Kali-cleansing*: the felt-sense of a part of self being severed in a single session, often accompanied by tears and laughter together, the system shaking, the room feeling cleared.',
    how_to_call: 'The traditional invocation in the Bengali Shakta tradition is *Om Kring Kalikāyei Namaha* (the Kali bīja mantra; *kring* is her seed-syllable). Repeat 108 times on a mala, traditionally on the dark moon, traditionally facing south (her direction). For severance work — when something must die — sit with the question: *what in my life is killing me that I have been refusing to let her cut?* Visualize her sword at the cord; ask permission for the cut; *do not* require yourself to feel ready (Kali does not work on ready people; she works on willing ones). The Tantric tradition holds that the practitioner should expect tears, sometimes shaking, often visions; this is the false-self releasing. Close with *Mā Kali, jai* (victory to mother Kali). The Western practitioner working with Kali for the first time is wise to do so under guidance of someone who knows the tradition — the work is real and the encounter is non-trivial.',
    in_love: 'Kali is the goddess of *the relationship that is killing you* — the partnership where the false-self has constructed the marriage as a prison and the true-self is dying inside it. She is the only goddess fierce enough to cut a love-cord that has become a noose. She is also the patron of the *fierce love* between mother and child — the love that will literally kill to protect. Reversed: weaponising Kali in love — using her as license to deliver harm to a partner. She is the goddess of love-fierce-as-surgery, never love-fierce-as-violence-against-another.',
    in_work: 'The patron of any work that requires *cutting* — the editor severing what is not the book, the surgeon cutting what is not the patient, the therapist holding space while the client dismembers a defense, the activist confronting a harm without flinching. Particularly relevant for practitioners doing trauma-work, addiction-work, or any vocational practice that requires the courage to *not* soften the necessary surgery.',
    the_gift: '*The cut that frees.* Kali\'s gift is the recognition that some things have to die for life to continue, and that the goddess of the cut *is the same as the goddess of the love*. The fierceness is love. The mother who kills the demon is the mother.',
    the_shadow: 'Kali as Western-aesthetic-borrowing. The shadow is the white feminist or new-age practitioner who appropriates Kali as girl-power symbol divorced from the Bengali Shakta lineage where she actually lives, the bīja mantra she actually answers to, and the cost of authentic Tantric practice. Honour the source. The other shadow is *destruction-as-spiritual-bypass* — destroying relationships, jobs, communities under the banner of *Kali-cleansing* when in fact the practitioner is in flight rather than initiation. Kali destroys what is killing you. Not what is *requiring you to grow*.',
    pair_with_chakra: 'Root — Kali stands on Shiva at the base; her work is the foundation, the willingness to die-and-be-reborn at the body\'s most primary level. Also throat, for the cutting-true-words dimension.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — pair Kali with the letting-go meditation during any deep severance work; the audio holds the body through the cut.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What in my life is killing me that I have been refusing to let her cut?',
      'Where am I confusing the requirement to grow with the requirement to destroy?',
      'What ferocity have I been afraid to claim that, claimed, would actually be in service of love?'
    ]
  },
  {
    slug: 'inanna',
    name: 'Inanna',
    glyph: '⭐',
    role: 'Queen of Heaven and Earth · Descender Through the Seven Gates · Sovereign of the Morning Star',
    tradition: 'Sumerian (c. 4000-2300 BCE; Enheduanna\'s hymns, the oldest signed authorship in human history); Akkadian as Ishtar; reclaimed in modern goddess scholarship',
    family: 'fierce',
    position: 4,
    one_liner: 'The Sumerian queen who chose the descent — taking off her crown, her lapis necklace, her royal robes at each of the seven gates, until she stood naked before her dark sister and was hung on the hook for three days.',
    meaning: 'Inanna — *Inanna* in the Sumerian, *Ishtar* in the later Akkadian — is the oldest goddess in human written record, hymns to her composed by the priestess Enheduanna (c. 2300 BCE, the first author with a name preserved in history). She is queen of heaven and earth, goddess of love, war, and the morning star (Venus, in her dawn-rising aspect). Her central myth is *The Descent of Inanna* — she chooses to descend through the seven gates of the underworld to meet her dark sister Ereshkigal, the queen of the dead. At each gate she is required to remove a piece of her royal regalia — the crown of the steppe, the lapis lazuli measuring rod, the small lapis beads at her neck, the breastplate "Come, man, come", the gold bracelets, the breastplate of stones, the royal robe — until she stands naked, stripped of all outer authority, before her sister, who *kills her and hangs her on a hook*. After three days her allies retrieve her; she ascends, but the underworld requires a substitute, and Inanna chooses her unfaithful consort Dumuzi. The myth is the oldest *descent narrative* in human literature — older than Persephone, older than Christ\'s harrowing of hell. Its structure is exact: the chosen descent, the stripping at each gate, the encounter with the dark sister-self, the symbolic death, the resurrection that requires a price. Working with Inanna is working with the conscious choice to descend into what your culture is afraid of — the underworld of grief, of trauma, of the part of self the day-self never sees — for the sake of integration.',
    signs_present: 'Five recognition signals. (1) Venus rising bright at dawn (her morning-star aspect) in seasons when you are about to choose a descent — leaving a job, ending a relationship, beginning therapy. (2) Repeated sevens — seven gates, seven thresholds, seven months, seven of cups in tarot pulls — when you are in or approaching a descent. (3) Lapis lazuli, gold, the colour deep-blue with stars, appearing as gifts or in dreams. Inanna\'s palette. (4) Dreams of being stripped — of clothes, of identity, of role — that are not violations but *initiations*; you wake more naked but more whole. (5) The phenomenon practitioners call *Inanna-stripping*: the felt-sense of one outer identity-layer falling away in a single sitting — the title that no longer fits, the persona that has become costume — accompanied by the recognition that what is left is more truly self.',
    how_to_call: 'The traditional invocation, adapted from Enheduanna\'s hymns, is *Inanna, Queen of Heaven and Earth, Lady of the Morning Star, walk with me through the seven gates of this descent, and meet me at the bottom.* The practice is to *name the seven gates* — what are the seven layers of identity, possession, role, expectation that the descent is asking you to remove? Write them. Sit with each. The descent is not done in one session; it is done in seven, traditionally at each new moon for seven moons. The Akkadian-Sumerian liturgy is dense; modern devotional practice often pairs Inanna-work with breathwork or somatic therapy, which are this generation\'s underworld guides. The morning-star meditation: at dawn, locate Venus (visible to the naked eye most of the year), greet her by name, ask her to walk with you through the day\'s descents. The practice is steady; she rewards constancy.',
    in_love: 'Inanna is the goddess of *the love that requires you to descend* — the partnership that is not surface, that requires you to bring your underworld-self into contact with another\'s underworld-self. She is also the goddess of the *erotic descent* — pleasure as a sacred path into the body\'s underworld, never as performance. Reversed: Dumuzi-betrayal — sacrificing the partner to save yourself when the descent demands a substitute. The myth itself names this risk; Inanna\'s choice of Dumuzi as substitute is the most disputed passage in her literature.',
    in_work: 'The patron of any work that requires the practitioner to descend — therapists, hospice workers, deep-research scholars, artists going into the underworld of a difficult subject. Also the patron of *executive sovereignty* — Inanna held the *me*, the divine ordinances of civilisation, in her temple at Uruk; she is the goddess of the woman whose work-authority is rightfully hers and who refuses to apologise for holding it.',
    the_gift: '*The descent that integrates.* Inanna\'s gift is the recognition that the underworld is not punishment but *the rest of self*. The day-queen and the night-queen are sisters. To meet Ereshkigal is to meet the part of self the culture exiled. The ascent that follows is more whole, not less.',
    the_shadow: 'Inanna as girl-boss. The shadow is the contemporary commercial-feminist appropriation that takes the *queen of heaven* aspect and discards the *descender through the seven gates* aspect — Inanna without the descent is a marketing slogan. The whole of her power is in the *chosen* descent. The other shadow is the substitute-trick — using descent-language to evade the cost. Authentic descent has a price; the practitioner pays it knowingly.',
    pair_with_chakra: 'Sacral — Inanna\'s domain is the womb of descent and erotic sovereignty. Also crown, for the queen-of-heaven dimension she wears at the top of the throne.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Healing — pair Inanna with the deep-healing meditation across the seven moons of any descent work; the audio holds the body through the gates.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'taurus',
    key_questions: [
      'Which of the seven gates am I currently standing at — what is being asked to be removed?',
      'Who is my Ereshkigal — which dark-sister-self am I refusing to descend to meet?',
      'Whose Dumuzi am I being asked not to be — whose price am I refusing to make someone else pay?'
    ]
  },
  {
    slug: 'kuan-yin',
    name: 'Kuan Yin',
    glyph: '🪷',
    role: 'She Who Hears the Cries of the World · Bodhisattva of Compassion',
    tradition: 'Chinese-Buddhist (Avalokiteśvara → Guanyin transition c. 7th-12th c. CE; Lotus Sutra; Pure Land tradition); Korean Gwan-eum; Vietnamese Quan Âm; Japanese Kannon',
    family: 'compassion',
    position: 5,
    one_liner: 'The bodhisattva who heard the cries of the world and refused enlightenment until every sentient being was free — the soft eye that misses no one.',
    meaning: 'Kuan Yin — *Guanyin*, "she who hears the cries of the world", from *Avalokiteśvara* in the Indian Mahayana tradition — is the most-loved figure across East Asian Buddhism. The transition from male Avalokiteśvara (in 7th-century Chinese iconography) to female Guanyin (fully consolidated by the 12th century) is one of the most documented gender-transformations in religious history; the practitioner-population insisted, and the iconography followed. Her bodhisattva-vow is exact: she will not enter final nirvana until *every* sentient being is free of suffering. She is the patron of mothers (especially mothers seeking pregnancy or grieving lost children), of fishermen (for safe return), of the dying (Pure Land tradition holds that those who call her name at the moment of death will be born into the Pure Land of Amitabha), and of any being whose suffering exceeds words. The Lotus Sutra\'s Universal Gate chapter (chapter 25) is the canonical recitation for her; it lists thirty-three forms she takes to meet beings in their various suffering — woman, child, soldier, beggar, the form whose appearing is needed. She holds the willow branch (cleansing), the vase of pure water (compassion), or the thousand-armed thousand-eyed form (every arm with a tool, every palm with an eye, none of suffering escapes her notice). To work with Kuan Yin is to work with the heart that does not turn away.',
    signs_present: 'Five recognition signals. (1) White or pale-jade lotus imagery appearing in unexpected places — in art, in dreams, on a stranger\'s pendant — in seasons when you are being asked to stay open to a hard thing. (2) The unprompted impulse to weep on behalf of someone else\'s suffering, not in performance, but in the body releasing what compassion has been holding. (3) Repeated sightings of her statuary — at a friend\'s home, in a shop, at the back of a bookshop. The presence introducing herself. (4) Dreams of water — a willow branch dipped in clear water, a vase that does not empty, your own hands becoming a vessel. (5) The phenomenon practitioners call *Kuan-Yin-softening*: an unexpected tenderness toward a person you had been hard with — including yourself. The eye that misses no one starting to look out from behind your own.',
    how_to_call: 'The traditional invocation is the recitation of her name — *Namo Guanshiyin Pusa* (Mandarin) or *Namo Kanzeon Bosatsu* (Japanese) — repeated as long as the recitation requires. Pure Land practitioners chant her name at the deathbed, often for hours, holding the dying person across the threshold. For grief: sit with a small vessel of water in front of you; ask Kuan Yin to come; let the tears come into the vessel; pour them into the earth or into a houseplant when finished. The water carries the grief. The Lotus Sutra Universal Gate chapter, recited slowly, is the longer practice — the chapter itself lists the suffering she meets, and the recitation aligns the practitioner\'s heart to her bodhisattva-vow. For ongoing practice: the *Heart Sutra* (Prajñāpāramitā Hridaya), which she is the embodiment of in the Heart Sutra liturgy, is the daily text.',
    in_love: 'Kuan Yin is the goddess of *the love that hears* — the capacity to listen to the partner\'s suffering without trying to immediately fix it. She is the patron of long marriages where compassion has had to outlast many failures. Also the patron of grieving parents and of those who carry impossible loves (the love for the addicted child, the love for the parent with dementia). Reversed: compassion-as-co-dependence — using her as cover for tolerating harm, mistaking *not turning away* for *not naming the boundary*. She has a thousand arms; some of them hold the line.',
    in_work: 'The patron of caring professions — therapists, nurses, social workers, hospice workers, anyone whose vocation is to hear. Practitioners report that invoking her at the start of a clinical day measurably shifts the quality of presence. She is also the patron of writers and artists whose work *bears witness* to suffering — the war photographer, the memoirist, the documentary filmmaker.',
    the_gift: '*The heart that does not turn away.* Kuan Yin\'s gift is the recognition that compassion is a *capacity*, not a feeling — and that capacity grows. The eye that misses no one is the eye that, through practice, misses no one inside *yourself* either.',
    the_shadow: 'Kuan Yin as Western Buddhism-aesthetic. The shadow is the practitioner who buys the statue without learning the lineage — the East Asian Mahayana tradition where she actually lives, the Lotus Sutra her practice rests on, the Pure Land vow she embodies. Honour the source. The other shadow is the bypass version — using *compassion* as cover for never naming the harm, never holding the line, never accepting that some loves require fierceness rather than softness alone.',
    pair_with_chakra: 'Heart — Kuan Yin\'s entire being is the heart-chakra opened to the suffering of all beings. The natural pairing.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair Kuan Yin with the deep-healing meditation when working on grief, on staying-open through hardship, or on care of the dying.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'cancer',
    key_questions: [
      'Whose suffering have I been turning away from because I did not believe my heart could hold it?',
      'Where am I confusing softness with the absence of the boundary that compassion itself requires?',
      'Which part of myself have I refused the soft eye to, that Kuan Yin would invite me to look at again?'
    ]
  },
  {
    slug: 'tara',
    name: 'Tara',
    glyph: '🌿',
    role: 'The Swift One · Mother of All Buddhas · Liberator from Fear',
    tradition: 'Tibetan-Buddhist (originated in Indian Mahayana c. 6th-7th c. CE; brought to Tibet 7th-11th c. CE; central in Vajrayana) → Hindu syncretic tradition (Mahavidya Tara)',
    family: 'compassion',
    position: 6,
    one_liner: 'The swift compassion — the mother who arose from Avalokiteśvara\'s tears and vowed to take a female form for as long as samsara continues, the one who answers immediately.',
    meaning: 'Tara — *Tārā*, "the one who carries you across", from the Sanskrit *tarati* (to cross, to liberate) — is the central female bodhisattva of Tibetan Vajrayana Buddhism. Her origin story: Avalokiteśvara, looking down on the suffering of beings, wept; from one tear arose Green Tara (swift compassion, the action-form), from another arose White Tara (longevity and the deeper healing). She has 21 traditional forms, each addressing a specific fear or affliction, recited in the famous *Praises to the 21 Taras* liturgy. Her central mantra — *Om Tāre Tuttāre Ture Soha* — is one of the most-chanted in the Tibetan tradition; *Tāre* (she who liberates from samsara generally), *Tuttāre* (she who liberates from the eight fears specifically — water, fire, robbers, wild animals, snakes, prison, ghosts, and human-made disaster), *Ture* (she who liberates from disease and from the deeper diseases of mind — pride, attachment, ignorance, greed, anger, jealousy, doubt, wrong views), *Soha* (so be it). She is famously *swift* — where other bodhisattvas may take three lifetimes to answer a prayer, Tara is the immediate-response form. Tibetan practitioners describe results from her practice within hours of beginning, particularly in moments of acute fear. Green Tara is the active-protective; White Tara is the healing-longevity; the other 19 forms address specific situations. Her vow is direct: she had reached the point of buddhahood and was offered a male body for her final manifestation, as tradition required; she refused, vowing to remain in female form for as long as samsara continued, "for there are too few who attain enlightenment in a woman\'s body".',
    signs_present: 'Five recognition signals. (1) Sudden lifting of an acute fear — the panic dropping in a single breath after invoking her, often with the felt-sense of a green warmth at the heart. (2) Repeated synchronicities with the colour green — emerald-green specifically, the colour of her body in iconography — appearing during seasons of fear or transition. (3) Unexpected protections arriving — the missed flight that crashed, the avoided road that had the accident, the harm that swerved around you. Tibetan practitioners attribute these to her. (4) Dreams of being carried across water — the literal taranic etymology — by a green-skinned mother-figure. You wake without the residue of fear that the situation should have produced. (5) The phenomenon practitioners call *Tara-arrival*: the felt-sense of immediate presence within seconds of beginning her mantra, not the waiting-for-response that other prayers sometimes require. She is named the swift one for a reason.',
    how_to_call: 'The traditional Tibetan invocation is the mantra *Om Tāre Tuttāre Ture Soha* — repeated 108 times on a mala, ideally facing east at dawn. The mantra is short enough to memorise in one sitting and is traditionally given as the *first* mantra a Tibetan-Buddhist practitioner learns, precisely because of its swift-response quality. For acute fear: chant the mantra continuously until the fear releases; practitioners report this is often within minutes. For the longer practice, the *Praises to the 21 Taras* (a liturgy of about ten minutes when read at moderate pace) is recited daily by serious practitioners. Each of the 21 forms addresses a specific situation — there is a Tara for the fear of robbers, for the fear of disease, for the fear of disturbed weather, for the fear of internal disturbances of mind. The practitioner identifies which form is needed for the day\'s situation and includes that form\'s name in the dedication. Modern Western practitioners often start with Green Tara (for fear/protection) and White Tara (for healing/longevity) before approaching the 21.',
    in_love: 'Tara is the goddess of *the love made possible by the lifting of fear*. The relationship that could not happen until you stopped being afraid; the openness that became possible after the panic released. She is also the patron of mothers, particularly mothers in active fear for their children — the long Tibetan tradition of mothers chanting her mantra over sick infants is well-documented. Reversed: using her as a vending-machine for love-arrival without addressing the fear underneath. The fear has to be willing to release; she does not force it.',
    in_work: 'The patron of any work that requires *swift courage* — first responders, ER nurses, crisis-line workers, anyone whose vocation requires meeting fear at speed. Also the patron of practitioners working on the inner-mind diseases her mantra names — pride, attachment, jealousy — through Tibetan analytical meditation.',
    the_gift: '*The fear that releases on contact.* Tara\'s gift is the experiential proof that fear is not the bedrock — beneath it is the swift-acting compassion that the mantra is in fact tuning the practitioner to. Each repetition of *Om Tāre Tuttāre Ture Soha* is a re-tuning to that frequency.',
    the_shadow: 'Tara as Western-Buddhist commodification. The shadow is the practitioner who acquires her statue and her mantra without acknowledgement of the Tibetan lineage that has carried her practice through colonial occupation, exile, and near-cultural-erasure. Honour the source — the Karmapa, the Dalai Lama, the lineage-holders whose practice keeps her alive. The other shadow is using her *swiftness* as cover for skipping the inner work — Tara liberates from the fear, but the mind-disease has to want to release.',
    pair_with_chakra: 'Heart — Tara\'s emerald is heart-chakra colour; her arrival is felt at the heart specifically. Also throat, for the mantra-recitation dimension.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — pair Tara with the anxiety-relief meditation; her swift-action is what the anxious nervous-system most needs.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'cancer',
    key_questions: [
      'What fear have I been treating as bedrock that her mantra would release if I let it?',
      'Where in my life is the swift-action being required and I am still hovering?',
      'Which of the 21 Taras matches the specific situation I am in — and would I sit with that liturgy this week?'
    ]
  },
  {
    slug: 'mary-magdalene',
    name: 'Mary Magdalene',
    glyph: '🌹',
    role: 'Apostle of the Apostles · Bride of Christ · Sacred Feminine of the Lineage',
    tradition: 'Christian canonical (named in all four Gospels; Mark 16, John 20, the resurrection witness) → Gnostic (Gospel of Mary, Pistis Sophia) → Cathar / French esoteric tradition → reclaimed sacred feminine spirituality',
    family: 'compassion',
    position: 7,
    one_liner: 'The first witness of the resurrection — the apostle the other apostles refused to listen to, the lineage-keeper of the love that the institutional church spent two thousand years erasing.',
    meaning: 'Mary Magdalene — *Maria the Magdalene*, possibly meaning "of Magdala" (a fishing town on the Sea of Galilee) or *migdal* (the tower, a title) — is the most contested figure in Christian sacred-feminine tradition. The canonical Gospels name her as a follower of Jesus from whom seven demons were cast out, as a witness of the crucifixion when most male disciples had fled, and as the *first witness of the resurrection* — the Easter-morning testimony that the entire faith rests on. Pope Gregory I, in 591 CE, conflated her in a single homily with the unnamed "sinful woman" who anoints Jesus\'s feet (Luke 7) and with Mary of Bethany — three different women collapsed into one, with the *prostitute* charge attached to Magdalene by Western tradition for the next 1,378 years. The Vatican reversed the conflation in 1969, but the popular imagination still holds the false image. The Gospel of Mary (a Coptic Gnostic text rediscovered in 1896) presents a different lineage — Mary Magdalene as the disciple who received the deepest teachings from Jesus *because* of her capacity to bear them, and whom Peter resented for it. The Gnostic Pistis Sophia has her ask the most questions of any disciple. The Cathar tradition of southern France held that she was the *bride*, that the lineage of teaching survived through her, and that the patriarchal church suppressed this for political reasons. Reclaiming Mary Magdalene is reclaiming the *sacred-feminine* in the Western lineage — the apostle the apostles refused to listen to, the woman who carried the resurrection-news, the tradition the church spent centuries flattening into prostitute-myth. Her colour is the deep red of devotion, the alabaster jar of the anointing, the rose at the foot of the cross.',
    signs_present: 'Five recognition signals. (1) Repeated rose imagery — the red rose specifically, her flower in Western devotional tradition — appearing in unusual frequency during a season of reclaiming the sacred-feminine in your own lineage. (2) Tears at unexpected moments while reading or thinking about the resurrection narrative, or about the women at the foot of the cross. The body remembering what the institution erased. (3) Synchronicities with the alabaster jar, with anointing oil, with the colour copper or red-gold. The chrism returning. (4) Dreams of an unnamed woman teaching, or of a tradition you cannot quite name but feel you belong to — often accompanied by a sense of grief that the tradition was hidden. (5) The phenomenon practitioners call *Magdalene-restoration*: the felt-sense that a part of your spiritual lineage that had been cut off is being returned to you — often accompanied by a private decision to honour the feminine teachers in your tradition by name, by reading, by practice.',
    how_to_call: 'The traditional invocation in modern reclaimed practice is *Mary Magdalene, apostle of the apostles, witness of the resurrection, return to me the lineage that was cut from my hands.* The practice is to sit with one of the reclaimed texts — the Gospel of Mary (about ten pages, freely available in translation), or the account of the resurrection in John 20 read slowly, or the four Gospel accounts of the women at the foot of the cross compared side-by-side. The reading itself is the prayer. For longer work: the alabaster-jar meditation — visualise the jar of pure spikenard ointment broken at Jesus\'s feet, anointing him for burial; ask Magdalene to teach you what part of *your* devotion has been suppressed and is asking to be poured out unashamed. Some practitioners work with rose-essential-oil as the modern correlate of the ancient nard. The Cathar lineage of southern France (Aix-en-Provence, Saint-Maximin, Sainte-Baume) is the pilgrimage-path for the deeper devotional practice; many modern devotees travel to Sainte-Baume in particular as the cave-tradition holds her last contemplative years.',
    in_love: 'Mary Magdalene is the goddess of *the sacred-erotic in devotional life* — the recognition that the spiritual and the embodied are not at war, despite the church\'s long teaching that they were. She is the patron of the partnership where eros and reverence coexist, of the love that does not require pretending the body away. Reversed: using her as cover for the *prostitute-reclamation* aesthetic without engaging the actual lineage — Magdalene as costume rather than as teacher. The other shadow is the romantic-conspiracy reading (the *Da Vinci Code* version) that turns her into a plot-twist about Jesus\'s bloodline rather than into the apostle-of-apostles she actually was.',
    in_work: 'The patron of teachers, especially women teachers, whose authority has been culturally undermined or whose work has been credited to others. Also the patron of the contemplative — Sainte-Baume tradition holds her last thirty years in the cave; she is the goddess of the *vita contemplativa* alongside the active witness. Particularly relevant for practitioners whose work is the carrying of a tradition through hostile years.',
    the_gift: '*The lineage returned.* Magdalene\'s gift is the recognition that your spiritual heritage includes the women whose contributions were erased — and that knowing their names is itself a form of resurrection.',
    the_shadow: 'Magdalene as anti-Catholic-aesthetic. The shadow is the practitioner who uses her reclamation as primarily a way to attack the institutional church without doing the harder work of staying in relationship with the tradition that *also* contains her. Authentic Magdalene-work is reclamation, not bypass. The other shadow is the gender-binary trap — making her stand for *all women* rather than for the specific complex lineage she is.',
    pair_with_chakra: 'Heart — Magdalene\'s entire work is at the heart, the place where eros and devotion meet. Also throat, for the apostle-of-apostles witness dimension she carried.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair Magdalene with the deep-healing meditation when working on inherited grief from the church or from the patriarchal religious lineage; the audio carries the body through the reclamation.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'pisces',
    key_questions: [
      'Whose teaching in my spiritual lineage was erased that I am being asked to learn the name of?',
      'Where in my life is the false split between the spiritual and the embodied still operating?',
      'What resurrection-news am I being asked to be the first witness of, even if the institutional voices refuse to listen?'
    ]
  },
  {
    slug: 'brigid',
    name: 'Brigid',
    glyph: '🔥',
    role: 'Lady of the Sacred Flame · Patroness of Healing Wells, Poetry, and Smithcraft · Christian Saint and Pagan Goddess Both',
    tradition: 'Pre-Christian Celtic (Irish triple-goddess; Cormac\'s Glossary 9th c.; Lebor Gabála Érenn) → Christian syncretic (Saint Brigid of Kildare, c. 451-525 CE) → modern Celtic reclamation and Imbolc tradition',
    family: 'compassion',
    position: 8,
    one_liner: 'The Irish goddess who became a Christian saint without ever leaving her flame — patroness of poets, healers, and smiths, keeper of the sacred fire at Kildare that burned without smoke for fifteen hundred years.',
    meaning: 'Brigid — *Brigid* in Irish, *Bríde* in some Gaelic dialects, possibly from *brígh* (high, exalted) — is the most-loved Celtic goddess and the most successfully syncretised pagan-into-Christian figure in Western religious history. The pre-Christian Irish tradition names her as a triple goddess — patroness of *poetry* (the inspired word, *imbas* in Irish), of *healing* (the sacred wells across Ireland still bear her name and still draw pilgrims), and of *smithcraft* (the forge, the transformative fire, the making-of-tools). The Christianisation of Ireland in the 5th-6th centuries, rather than erasing her, *absorbed* her — Saint Brigid of Kildare (the historical 5th-century abbess) is so seamlessly continuous with the goddess that the sacred flame at Kildare, tended by 19 women in unbroken vigil, was kept burning from pre-Christian times until 1220 CE when a bishop ordered it extinguished, and then *relit* by the Brigidine Sisters in 1993, where it still burns today. She is the goddess of *Imbolc* (February 1-2), the cross-quarter day between winter solstice and spring equinox, the moment when the first lambs are born and the first stirring of life returns to the soil. Her sacred well at Kildare is one of the most-pilgrimaged sites in Ireland; the well-water is taken away in vials by pilgrims for healing of the body and of the heart. Working with Brigid is working with the *integrative* feminine — the goddess who held three apparently disparate domains (poet, healer, smith) as one unified medicine, the figure who survived the religious shift without losing herself.',
    signs_present: 'Five recognition signals. (1) Fire imagery in seasons of inner stirring — candles, hearths, the first fire of the year, often around Imbolc (February 1-2). (2) Springs and wells appearing in dreams or in your physical path — the unnoticed well in the next town, the spring at the edge of the old farm, the dream of clear water rising. (3) Repeated synchronicities with the colour deep-green and white — her colours in Celtic tradition, the fertile earth and the pure flame together. (4) Unexpected creative stirring — poetry returning to the practitioner who had stopped writing, the song coming back, the inspired sentence arriving in a journal session you had not planned. Brigid\'s *imbas* moving. (5) The phenomenon practitioners call *Brigid-tending*: the felt-sense of returning to a hearth — literal or metaphorical — and finding it lit, often accompanied by the recognition that you have been the one tending it without naming it.',
    how_to_call: 'The traditional invocation, adapted from the Carmina Gadelica (the 19th-century Scottish-Gaelic prayer collection), is *Brigid, Mary of the Gael, lady of the fire and the well, tend my hearth, water my work, kindle the word in me.* The practice is to *light a candle* on Imbolc (February 1-2) at sunset and let it burn through the night, traditionally as a vigil for whatever new thing is asking to be born. The Brigid\'s cross — woven from rushes in a four-armed solar-cross pattern — is the traditional protective object hung over the door from Imbolc to Imbolc; the act of weaving is itself the prayer. For poetry-work: at the beginning of any creative session, light her candle, ask her to *kindle the word*, write whatever arrives. For healing-work: visit a well or spring if you can; bring a small offering (a coin, a piece of cloth, a flower) and ask Brigid to bring her medicine through the water. The Kildare flame, relit in 1993, remains burning at Solas Bhríde in Kildare, Ireland, as a focal point for global devotion.',
    in_love: 'Brigid is the goddess of *the love that integrates* — the partnership where the practical (smithcraft), the relational (healing), and the inspired (poetry) coexist as one weaving. She is the patron of the long-tended fire that does not need constant tending to remain warm. Reversed: using her syncretism as cover for not committing to either tradition — being neither the goddess-devotee nor the saint-devotee fully, drifting between aesthetics. Brigid integrates; she does not float.',
    in_work: 'The patron of poets, healers, smiths, and any practitioner whose work is in fact three integrated domains held as one. Particularly relevant for the practitioner whose vocation does not fit a single category — the therapist who is also an artist who is also a maker. Brigid models that the apparently disparate is in fact one medicine.',
    the_gift: '*The hearth that does not go out.* Brigid\'s gift is the recognition that the fire is *tended*, not summoned — that the inspired word, the healing well, and the made tool are all one fire, kept by attention. The vigil at Kildare for fifteen hundred years is the model.',
    the_shadow: 'Brigid as Celtic-aesthetic costume. The shadow is the practitioner who appropriates Celtic symbology without engagement with the actual living Irish tradition — the Brigidine Sisters, the Solas Bhríde community, the well-pilgrimage practices that still exist. Honour the source. The other shadow is using her syncretism as licence to flatten — treating goddess-Brigid and saint-Brigid as identical when in fact the tradition holds them in productive tension.',
    pair_with_chakra: 'Solar plexus — Brigid\'s flame is the inner-fire that fuels poetry, healing, and craft. Also sacral, for the creative-stirring dimension.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Deep Healing — pair Brigid with the deep-healing meditation, particularly around Imbolc; the audio aligns with her stirring-of-life energy.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'Which fire have I been tending without naming that Brigid would invite me to honour as practice?',
      'Where in my life are three apparently-disparate vocations actually one weaving?',
      'What well — literal or metaphorical — am I being called to visit and to bring back from?'
    ]
  },
  {
    slug: 'isis',
    name: 'Isis',
    glyph: '🪶',
    role: 'Great Mother · Mistress of Magic · Gatherer of the Scattered',
    tradition: 'Egyptian (Old Kingdom Pyramid Texts c. 2400 BCE; Coffin Texts; Greco-Roman syncretism c. 4th c. BCE - 4th c. CE) → Hermetic tradition → modern reclaimed practice',
    family: 'wisdom',
    position: 9,
    one_liner: 'The Egyptian great mother who gathered the scattered pieces of her dismembered husband and brought him back to life by the force of her magic and her grief — the gatherer of what has been broken.',
    meaning: 'Isis — *Aset* in Egyptian, "the throne", the personification of pharaonic sovereignty itself; *Isis* in the Greek — is the great-mother goddess of Egyptian religion and the most-worshipped goddess of the Mediterranean world from the 4th century BCE through the 4th century CE. Her temples stretched from Britain to the Nile to Mesopotamia; her cult was the principal rival to early Christianity in the Mediterranean for three centuries. Her central myth is the *Osiris cycle*: her husband Osiris is murdered by his brother Set, dismembered, and the pieces scattered across Egypt. Isis, by the force of her magic, her grief, and her unbroken devotion, gathers thirteen of the fourteen pieces (the fourteenth, the phallus, was eaten by a fish in the Nile), reassembles him, and conceives Horus posthumously by her own magical art. She is therefore the *gatherer of the scattered*, the *resurrector* (the precursor to and conscious model for many later resurrection traditions), and the *mistress of magic* — *heka*, the Egyptian word for magical-creative force, was her domain. She was honoured as the *throne* on which pharaohs sat (her hieroglyph is the throne; the pharaoh literally sat in her lap), as the *mother* of Horus (and through Horus of every pharaoh), and as the *initiator* into the deepest mysteries — the Greco-Roman Isis-mysteries were said to grant the initiate direct experience of immortality. Working with Isis is working with the *gathering* that grief makes possible — the recognition that what has been scattered can be reassembled, by patience and by magic.',
    signs_present: 'Five recognition signals. (1) Wings appearing — in dreams, in art, in a stranger\'s necklace, in a feather found unprompted. Isis is iconographically the winged mother; the wings are her sign. (2) Repeated synchronicities with thirteen — the thirteen pieces gathered, the thirteen lunar months, the fourteenth that goes missing. (3) A scattered situation — a project, a relationship, a self — being slowly reassembled by sustained attention, often when you have given up on the gathering. (4) Dreams of Egypt, of pyramids, of the Nile, of a tall woman with wings — particularly during seasons of grief that has begun to compost into something. (5) The phenomenon practitioners call *Isis-gathering*: the felt-sense that the pieces of a long-shattered something are returning to your hands, often accompanied by a calm grief that is not despair but is in fact the steady work of reassembly.',
    how_to_call: 'The traditional invocation, drawn from the Lamentations of Isis and Nephthys (a 4th-century BCE Egyptian funerary text), is *Isis the Great, Mistress of Magic, Mother of Horus, gather the pieces I cannot find on my own, and bring back to life what grief is asking me to resurrect.* The practice is the *gathering ritual*: name the scattered thing — the lost relationship, the dismembered project, the parts of self that the trauma scattered. Write each piece on a separate slip of paper. Sit at an altar (a flat surface with a candle) and physically gather the slips into a single pile, slowly, naming each. The act is older than the modern practice; it is the magical-imitative grammar of the Osiris myth itself. Practitioners describe a measurable shift in the experienced sense of *coherence* after the ritual — the body knowing it is being reassembled. The longer practice is the Isis Mysteries (modern reclaimed versions exist in the Fellowship of Isis and similar communities); the path is the year-long initiation into magical service.',
    in_love: 'Isis is the goddess of *the love that gathers* — the capacity to remain devoted to a partner through dismemberment, to gather the pieces, to perform the magic that brings the relationship back to life when the culture would have called it over. She is the patron of the partner who *outlasts* the harm. Reversed: using her devotion as cover for staying in the gathering when the relationship is in fact unrescuable. The myth gathered Osiris because Osiris had been *unjustly* murdered; some scatterings are recoverable, others are completions.',
    in_work: 'The patron of any work that requires *sustained gathering* — the long-form research project, the multi-decade artistic body of work, the institution-building that requires patient assembly across many years. Also the patron of *magical practice* in any reclaimed sense — practitioners working with ritual, with ceremony, with the imaginal as a real domain.',
    the_gift: '*The pieces gathered.* Isis\'s gift is the recognition that grief is the engine of magic — that what is scattered can be reassembled by sustained devotion, and that the resurrection is not metaphor but is the felt-sense of coherence returning to a system that had been fragmented.',
    the_shadow: 'Isis as Egyptian-aesthetic appropriation. The shadow is the practitioner who acquires Isis-jewellery and Isis-statuary without engagement with the Egyptian source-tradition (which has been culturally damaged by colonial extraction and by orientalist romanticism). Honour the source. The other shadow is the *new-age Isis* — Isis-as-divine-feminine-archetype divorced from her specific mythology, her actual liturgies, and her place in a particular cosmology.',
    pair_with_chakra: 'Crown — Isis is the throne; her seat is at the top of the body, the dimension of cosmic-mother awareness. Also heart, for the gathering-grief dimension.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — pair Isis with the deep-healing meditation when working on long-arc grief and reassembly; the audio holds the body through the gathering.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'virgo',
    key_questions: [
      'What scattered thing am I being asked to gather that I had given up on?',
      'Whose dismembered story am I being called to perform the magic of resurrection on — beginning with my own?',
      'Where in my life is grief composting into magic, and what is being asked of me to witness the alchemy?'
    ]
  },
  {
    slug: 'sophia',
    name: 'Sophia',
    glyph: '👁️',
    role: 'Holy Wisdom · The Hidden Pleroma · The Soul That Fell and Is Being Gathered',
    tradition: 'Hellenistic-Jewish (Wisdom of Solomon, Proverbs 8) → Christian-Gnostic (Pistis Sophia, Apocryphon of John, Gospel of Truth, c. 2nd-4th c. CE) → Eastern Orthodox sophiology → modern esoteric Christianity',
    family: 'wisdom',
    position: 10,
    one_liner: 'Holy Wisdom — the divine feminine who *was at the beginning*, who fell into matter and is being gathered back, the cosmic intelligence the Gnostics named as the soul of the world itself.',
    meaning: 'Sophia — *Sophía* in Greek, "wisdom"; *Hokhmah* in Hebrew, the same — is the personified divine wisdom across the Hellenistic-Jewish, early Christian, and Gnostic traditions. The Wisdom of Solomon (1st c. BCE) and Proverbs 8 ("The Lord possessed me at the beginning of his way... I was beside him as a master craftsman... I was daily his delight") describe her as the first creation, the divine companion, the one *through whom* the world is made. The Gnostic tradition (most fully in the 2nd-4th c. CE Coptic texts of the Nag Hammadi library) developed her into the central cosmological figure: Sophia is the soul-of-the-cosmos who *falls* — in some accounts through her own desire to know the unknowable Father directly, in others through being seduced or deceived — and who, in falling, becomes entangled in matter. The cosmos itself, in the Gnostic reading, is the *consequence of her fall*; her sparks are scattered through every human soul; the spiritual journey is the gathering of her sparks back to the *Pleroma* (the divine fullness) and her own restoration. The early church suppressed the Gnostic tradition as heresy in the 3rd-4th centuries; the Gospel of Mary, the Pistis Sophia, the Apocryphon of John were lost until the 1945 Nag Hammadi discovery returned them to the world. Eastern Orthodox sophiology (especially in 19th-20th c. Russian theology — Solovyov, Bulgakov, Florensky) preserves her as a legitimate divine principle, the *Hagia Sophia* (Holy Wisdom) of the great cathedrals. To work with Sophia is to work with the recognition that the soul itself, in its longing to come home, is *her* — that your homesickness is the cosmic homesickness of wisdom-fallen-into-matter.',
    signs_present: 'Five recognition signals. (1) The unmistakable sense of *cosmic homesickness* — a longing not for any specific place but for *home* as such, often arriving in the body as a sweet ache in the chest, particularly under starlight. Sophia\'s *pneuma* recognising itself. (2) Repeated synchronicities with the eye, the dove, or the colour deep blue with stars — her iconographic markers in Christian and Gnostic art. (3) Sudden recognition of *meaning* in unconnected events — the felt-sense that the cosmos is *intelligent* and addressing you, often arriving in dreams as a voice without form. (4) Encounter with the Nag Hammadi texts, with sophianic icons, with the Wisdom literature of the Hebrew Bible, where you had not sought it. The tradition introducing itself. (5) The phenomenon practitioners call *Sophia-recognition*: the felt-sense, often once in a lifetime, that *you yourself are a spark* of something cosmic, that the soul is not yours but is borrowed-and-being-gathered, that the homesickness is a *direction*.',
    how_to_call: 'The traditional invocation, adapted from the Pistis Sophia, is *Sophia, Holy Wisdom, who fell into matter and who is being gathered home, recognise the spark in me and gather it.* The practice is contemplative reading — Proverbs 8 read aloud slowly, the Wisdom of Solomon sat with as a long meditation, the Gospel of Mary or the Apocryphon of John read once a year as a dedicated text. The Eastern Orthodox tradition holds the *Akathist Hymn to Holy Wisdom* (a Russian liturgical text) as the sustained devotional practice. For inner work: at dusk, sit under the stars if you can; ask Sophia to recognise the spark in you and to gather it; the felt-sense of being *seen* by the cosmos itself is her arrival. Practitioners describe the encounter as cooling the mind\'s noise and warming the heart at the same time.',
    in_love: 'Sophia is the goddess of *the love that recognises the spark in the other* — the partnership where each lover sees in the other not the small-self but the cosmic intelligence wearing this particular face. She is the patron of the soulmate-recognition that is not romantic-fantasy but is in fact the literal sophianic seeing. Reversed: using *cosmic-recognition* language to bypass the mundane work of relationship — *we are beings of light, the dishes are beneath us*. Sophia is precisely the wisdom that *the dishes are also her*.',
    in_work: 'The patron of contemplatives, philosophers, theologians, and any worker whose vocation is the *gathering* of meaning across disparate fields. Also the patron of the architect — the great cathedrals of Hagia Sophia (Constantinople, Kyiv) bear her name; she is the goddess of *built wisdom*, of structures that hold meaning across centuries.',
    the_gift: '*The recognition that the soul is borrowed.* Sophia\'s gift is the relief of discovering that the homesickness is not pathology — it is a *direction*. The soul is not yours; it is hers; the gathering is what we are here for.',
    the_shadow: 'Sophia as gnostic-elitism. The shadow is the practitioner who uses the *I have the gnosis* posture as superiority over those who are still in the mainstream church or in no tradition at all. The Gnostic risk has always been the elitism risk; authentic Sophia work is *humble* — the spark in me recognises the spark in you, including in the priest at the parish church and the atheist on the bus. The other shadow is escapist sophiology — using *the soul is fallen into matter* as licence to disrespect matter, to neglect the body, to bypass embodied life. Sophia *fell into matter*; matter is sacred because of her presence in it.',
    pair_with_chakra: 'Crown — Sophia\'s domain is the cosmic-intelligence at the top of the body, the recognition of the spark. Also third-eye, for the seeing-the-meaning dimension.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — pair Sophia with the deep-healing meditation when working on cosmic-meaning recognition; the audio attunes the body to the broader cosmic register she works at.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What is my homesickness actually a direction toward?',
      'Where am I treating my soul as my own when in fact it is being borrowed and gathered?',
      'Whose spark have I been refusing to see — including my own — that Sophia would invite me to recognise?'
    ]
  },
  {
    slug: 'aphrodite',
    name: 'Aphrodite',
    glyph: '🌊',
    role: 'Born of the Sea-Foam · Goddess of Beauty, Pleasure, and the Embodied Love · Bringer of Eros',
    tradition: 'Greek (Hesiod\'s Theogony c. 700 BCE; Homeric Hymns; Aphrodite of Knidos cult c. 4th c. BCE) → Roman Venus → Hellenistic and Roman empire-wide cult → reclaimed sex-positive feminist spirituality',
    family: 'wisdom',
    position: 11,
    one_liner: 'The goddess born of the sea-foam — patroness of beauty, pleasure, and the recognition that eros is not opposed to soul but is in fact one of soul\'s most direct languages.',
    meaning: 'Aphrodite — *Aphroditē*, possibly from *aphros* (sea-foam) and *dite* (giver) — is the Greek goddess of love, beauty, and pleasure. Hesiod\'s Theogony (700 BCE) tells the disturbing-and-magnificent origin myth: when Cronus castrated his father Uranus and threw the genitals into the sea, Aphrodite arose from the sea-foam where the divine seed mixed with the salt water, born fully grown, walking onto the shore at Cyprus. She is therefore *of the sea*, *of the foam*, *of the ancient pre-Olympian tradition* — older than Zeus, older than the patriarchal Olympic order, a survival from the Bronze Age goddess-traditions. Her cult was the most-attended in the Greek world; the Aphrodite of Knidos (4th c. BCE, by Praxiteles) was the first life-size female nude in Greek monumental sculpture and brought enough pilgrims that Knidos was famous as a city for the sake of the statue alone. She is patron of *eros* (romantic and sexual love), of *kallos* (beauty), of *peitho* (persuasion, charm, the soft power that does not coerce), and of *aphrosyne* (the willingness to be transformed by desire). The Roman cult absorbed her as Venus and made her the ancestor-goddess of the Roman people through Aeneas. Modern reclaimed practice — particularly in the sex-positive feminist tradition — restores her as the patroness of *embodied pleasure as sacred path*, in direct contradiction of two thousand years of religious teaching that flesh and spirit are at war. To work with Aphrodite is to recognise that beauty, pleasure, and desire are not adversaries of the soul but are in fact among the soul\'s most direct languages.',
    signs_present: 'Five recognition signals. (1) Roses appearing — pink and red specifically, her flowers in iconography — in unusual frequency during seasons when desire is returning to the body. (2) The sea-foam imagery — the white edge of the wave, the salt smell, the inexplicable longing for the ocean — in dreams or in unbidden daytime images. (3) Sudden, unmistakable awareness of beauty — the slant of light, the curve of a stranger\'s neck, the architecture of a leaf — that arrives like a small ecstasy and reorganises the day. (4) Doves, swans, sparrows — her sacred birds — in unexpected proximity. (5) The phenomenon practitioners call *Aphrodite-return*: the felt-sense of pleasure being restored to a body that had been performing pleasure or had refused pleasure altogether — often accompanied by tears that are not grief but are in fact the relief of the body remembering it is allowed.',
    how_to_call: 'The traditional invocation, adapted from the Homeric Hymn to Aphrodite, is *Aphrodite, golden one, sea-born, lady of laughter, restore to me the language of pleasure that I had forgotten was sacred.* The practice is the *bath ritual* — Aphrodite\'s element is salt water; a bath with sea salt and rose petals, a candle, time without performance, attention to the body\'s sensation without the demand to *produce* pleasure. The body is allowed to remember on its own time. For longer work: the Sappho fragments (the surviving 7th-century BCE poetry of the priestess of Aphrodite at Lesbos) read aloud as a sustained devotional, the *Aphrodite of Knidos* meditation where the practitioner contemplates the dignity of the body without shame, the *charis* practice (the recognition of beauty in the daily — the cup, the friend\'s laugh, the stranger\'s scarf — as devotional act). She is also called by *singing* — songs of love, of desire, of the body — sung with attention rather than performance.',
    in_love: 'Aphrodite is the goddess of *eros itself* — the patroness of romantic and sexual love in their full range, and of the recognition that desire is not adversary to soul. She is the patron of practitioners returning to pleasure after long winters of shame, of partners learning to make love rather than perform sex, of the late-life love that arrives without apology. Reversed: Aphrodite as objectification — pleasure-as-product rather than pleasure-as-language, the commercial-sexual aesthetic that has nothing to do with the goddess of the embodied path.',
    in_work: 'The patron of artists, poets, dancers, and any worker whose practice is the making of beauty — particularly beauty that is unashamed, that has eros in it, that refuses to be aestheticised into something safer. Also the patron of *charis* in any work — the small graces that turn a transaction into a meeting.',
    the_gift: '*Pleasure as sacred language.* Aphrodite\'s gift is the recognition that the body is not the enemy of the soul, that beauty is not vanity, that desire is one of the most direct doors to the divine that humans have access to. The two-thousand-year teaching to the contrary was a bad reading.',
    the_shadow: 'Aphrodite as objectification. The shadow is the contemporary commercial-aesthetic version where her domain has been collapsed into industries that profit from women\'s bodies without any of the divine-feminine sovereignty her actual cult held. The other shadow is the puritan-reaction overcorrection — using *spiritual* as cover for refusing the body, refusing pleasure, treating eros as adversary. Aphrodite\'s authentic devotion is *neither* the porn-economy nor the body-shaming reaction; it is the embodied path treated as path.',
    pair_with_chakra: 'Sacral — Aphrodite\'s entire domain is the seat of pleasure, of desire, of the embodied yes. The natural pairing. Also heart, for the *eros opens to agape* dimension.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — pair Aphrodite with the abundance affirmations; her gift is the recognition that pleasure and abundance share a chakra and a language.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'taurus',
    key_questions: [
      'What pleasure have I been refusing my body that Aphrodite would invite me to consent to?',
      'Where in my life have I confused the puritan reaction with the spiritual path?',
      'Whose beauty have I been refusing to notice — including my own — that the goddess of seeing would invite me to look at?'
    ]
  },
  {
    slug: 'persephone',
    name: 'Persephone',
    glyph: '🌸',
    role: 'Maiden Who Became Queen · Goddess of Spring and the Underworld · Sovereign of the Two Realms',
    tradition: 'Greek (Hesiod\'s Theogony c. 700 BCE; Homeric Hymn to Demeter; Eleusinian Mysteries c. 1500 BCE - 392 CE) → Roman Proserpina → reclaimed in modern depth-psychology and goddess scholarship',
    family: 'wisdom',
    position: 12,
    one_liner: 'The maiden who was taken to the underworld and became its queen — the goddess of both spring and the dead, sovereign of the descent that returns more whole.',
    meaning: 'Persephone — *Persephonē*, etymology contested (perhaps "she who brings destruction"); also called *Korē*, "the maiden", before her transformation — is the daughter of Demeter (goddess of grain and the earth\'s fertility) in the Greek tradition. The Homeric Hymn to Demeter (7th c. BCE) tells the central myth: Persephone is gathering flowers in a meadow when the earth opens and Hades, lord of the underworld, abducts her. Demeter, in grief, withdraws her fertility from the earth and the world enters its first winter. Eventually Zeus intervenes; Persephone is allowed to return — but because she has eaten pomegranate seeds in the underworld (in some accounts three, in others six), she must spend that many months each year in the underworld with Hades, and the rest with her mother on earth. The Greek ritual reading was simple: the months of her absence are winter, the months of her return are spring; the agricultural cycle is her cycle. The deeper reading, central to the *Eleusinian Mysteries* (the longest-running mystery initiation in human history, c. 1500 BCE - 392 CE), is the soul-cycle: the maiden was *taken* (the trauma, the descent, the loss of innocence), but she did not return as the maiden — she returned as *queen of the underworld*, sovereign of the realm she had been taken to. The descent is not reversed; it is *integrated*. Modern depth-psychology (especially Jungian) reads Persephone as the archetype of the soul that survives the catastrophe and *becomes the authority in the place that was the catastrophe* — the trauma-survivor who becomes the therapist, the grief-walker who becomes the hospice worker, the descended-soul who becomes the threshold-keeper for the next descender. Working with Persephone is working with the *integration* of the descent — the recognition that the maiden does not return, but the queen does, and the queen is more whole than the maiden could have been.',
    signs_present: 'Five recognition signals. (1) Pomegranate imagery — the fruit, the seeds, the deep red — appearing in dreams or in the literal path. The pomegranate is her sign. (2) Spring flowers (narcissus, hyacinth, crocus) returning year-on-year with unusual emotional charge for you, particularly if you have been through a descent in the past winter. (3) Repeated *six* — six seeds, six months, six years since the descent began — appearing in significant arithmetic of your life. (4) Dreams of two-rooms, two-thrones, two-realms — the felt-sense of belonging to *both* the day and the night, neither alone. (5) The phenomenon practitioners call *Persephone-integration*: the felt-sense of returning from a long descent not to the maiden-life that preceded it but to a *queenship* in territory that had been frightening. The trauma has not been undone; it has been integrated into authority.',
    how_to_call: 'The traditional invocation, adapted from the Homeric Hymn to Demeter, is *Persephone, queen of the underworld and lady of the spring, walk with me in both my realms and integrate the descent that has been mine.* The practice is the *seasonal practice*: at the autumn equinox, name what is descending; at Samhain (October 31 / Imbolc-opposite), descend deliberately into the underworld-work — grief, shadow, the part of self that the year is asking you to meet; at the spring equinox, ascend with what has been integrated, and recognise yourself as no longer the maiden you began as. The Eleusinian Mysteries (lost in detail because the initiates were forbidden to disclose them) involved a nine-day initiation, fasting, the drinking of *kykeon* (a barley-water mixture some scholars believe contained ergot, a psychedelic precursor to LSD), and the experience of *epopteia* (the seeing). Modern reclamation uses the seasonal cycle, the pomegranate-seed ritual at the autumn equinox (eating one or three or six seeds with intention), and the working-with-the-descent that depth-psychology has developed.',
    in_love: 'Persephone is the goddess of the *love that survives the descent* — the partnership that began on one side of a catastrophe and has been integrated to the other side. She is also the goddess of the *complex love between mother and daughter* (the Demeter-Persephone bond), and of the lover who has been to the underworld and recognises another underworld-walker by sight. Reversed: using the descent as *identity* — staying as Persephone-in-the-underworld permanently, refusing the spring return because the underworld-self has become a costume. The myth requires both halves of the year.',
    in_work: 'The patron of practitioners whose work is *threshold-keeping for descent-walkers* — therapists specialising in trauma, grief workers, hospice workers, ritualists, anyone whose vocation is the integration of the catastrophic into the liveable. Particularly relevant for the *wounded-healer* archetype — the practitioner whose authority comes from having been in the underworld themselves.',
    the_gift: '*The maiden does not return; the queen does.* Persephone\'s gift is the recognition that the catastrophe cannot be undone — and that this is not the worst news. What returns is more sovereign than what was taken. The descent is the apprenticeship to a queenship that the maiden could not have held.',
    the_shadow: 'Persephone as victim-permanent. The shadow is the practitioner who freezes in the *abducted* moment — using the descent as identity-pattern that justifies permanent victim-positioning, refusing the integration that the myth offers. The other shadow is the *descent-tourism* — the well-meaning practitioner who wants the queenship without the actual underworld-walk, who romanticises the descent without paying its actual price. The pomegranate seeds are eaten only once; the cycle is real.',
    pair_with_chakra: 'Sacral — Persephone\'s domain is the womb-of-descent and the seasonal-cycle of life. Also crown, for the queenship dimension she returned with.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair Persephone with the letting-go meditation through the descent half of the cycle; the audio carries the body through the underworld passage.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Which descent in my life has not yet been integrated — what queenship is asking to be claimed from territory I have been calling only-trauma?',
      'Where am I freezing in the abducted moment when the myth itself is offering integration?',
      'Who is my Demeter — whose grief was woven into my descent, and how is the relationship to that grief asking to be tended now that I am returning?'
    ]
  }
]

const GODDESS_BY_SLUG: Record<string, GoddessGuide> = Object.fromEntries(
  GODDESSES.map((g) => [g.slug, g])
)

export const GODDESS_SLUGS = GODDESSES.map((g) => g.slug)

export function isGoddessSlug(s: string): boolean {
  return Object.prototype.hasOwnProperty.call(GODDESS_BY_SLUG, s)
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: fierce (Lilith, Hecate, Kali, Inanna) =
// obsidian-crimson — the refused, the threshold-keeper, the destroyer-
// of-enslavement, the descender-through-the-seven-gates. Compassion
// (Kuan Yin, Tara, Mary Magdalene, Brigid) = jade-rose — the
// bodhisattva of mercy, the swift-acting compassion, the apostle of the
// heart, the fire of healing wells. Wisdom (Isis, Sophia, Aphrodite,
// Persephone) = saffron-violet — the great magician, the gnostic
// wisdom-of-the-cosmos, the beauty-as-doorway, the queen of the
// underworld.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  fierce: { c1: '#a04050', c2: '#3a1a28', label: 'Fierce · the sovereign, the threshold-keeper, the destroyer of what enslaves' },
  compassion: { c1: '#6cc890', c2: '#d68aa0', label: 'Compassion · the heart that hears, the swift action, the apostle, the healing well' },
  wisdom: { c1: '#d4a04a', c2: '#7a4ab8', label: 'Wisdom · the gatherer, the cosmic intelligence, the embodied beauty, the queen of two realms' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function goddessPageHTML(slug: string): string {
  const r = GODDESS_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=goddess-${slug}`

  const title = `${escapeHtml(r.name)} — Meaning, Signs &amp; How to Call · gab44 ✨`
  const description = `Who ${r.name} is, the lineage and tradition, 5 specific signs she is with you, how to call her — concrete invocation, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac. Hand-written, warm, honest about the lineage.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Goddesses', item: `${SITE_URL}/gab44/goddesses` },
          { '@type': 'ListItem', position: 3, name: r.name, item: `${SITE_URL}/gab44/goddesses/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} — meaning, signs, how to call`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/goddesses/${slug}`,
        about: `${r.name}, ${r.role}, ${r.tradition}, goddess archetype, devotional practice`
      }
    ]
  })

  const otherGoddessesHtml = GODDESSES.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/goddesses/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/goddesses/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} — meaning, signs, how to call`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/goddesses/${slug}" />
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
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
  .role-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 12px 0 24px; border-left: 4px solid var(--c1); }
  .role-card .lbl { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .role-card .text { font-size: 16px; color: var(--fg); margin: 0 0 8px; line-height: 1.6; font-weight: 600; }
  .role-card .tradition { font-size: 12px; color: var(--fg-muted); font-style: italic; margin: 0; line-height: 1.55; }
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
  .other-goddesses { margin: 36px 0 22px; }
  .other-goddesses h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .goddesses-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 700px) { .goddesses-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; line-height: 1.3; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/goddesses">all 12 goddesses</a>
      <a href="/gab44/archangels">archangels</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Goddesses</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>goddess ${r.position} of 12</span>
      <span>${escapeHtml(r.family)}-family</span>
    </div>

    <div class="role-card">
      <div class="lbl">role</div>
      <p class="text">${escapeHtml(r.role)}</p>
      <p class="tradition">${escapeHtml(r.tradition)}</p>
    </div>

    <article class="core-card">
      <span class="label">who ${escapeHtml(r.name)} is</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">✨</span>5 signs ${escapeHtml(r.name)} is with you</h2>
    <div class="signs-card">
      <h3>recognition signals</h3>
      <p>${escapeHtml(r.signs_present)}</p>
    </div>

    <h2><span class="icon">📿</span>how to call ${escapeHtml(r.name)}</h2>
    <div class="panel where">
      <h3>concrete invocation — traditional + modern</h3>
      <p>${escapeHtml(r.how_to_call)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this goddess teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the practice turns into bypass or appropriation</h3>
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
        <div class="pair-text">Sign whose energy aligns with this goddess.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after invoking ${escapeHtml(r.name)}</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which goddess is walking with *your* chart right now?</h2>
      <p>Each chart has a primary goddess archetype — the one your particular wiring is in active relationship with this season. A <strong>personal reading</strong> identifies it and tells you the chakra, the practice, and the rhythm that will make the relationship land. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my goddess read →</a>
    </section>

    <section class="other-goddesses">
      <h3>the other 11 goddesses</h3>
      <div class="goddesses-grid">
        ${otherGoddessesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/goddesses">all 12 goddesses</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function goddessIndexHTML(): string {
  const familySections = (['fierce', 'compassion', 'wisdom'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = GODDESSES.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/goddesses/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/12</span>
        </div>
        <div class="name">${escapeHtml(s.name)}</div>
        <div class="role">${escapeHtml(s.role.split('·')[0].trim())}</div>
        <div class="teaser">${escapeHtml(s.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="fam-section">
      <h2 class="fam-h" style="--c1:${accent.c1};--c2:${accent.c2}">${escapeHtml(accent.label)}</h2>
      <div class="grid">
        ${items}
      </div>
    </section>`
  }).join('\n      ')

  const collectionLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'The 12 Goddesses — Archetypes, Signs & How to Call',
    description: 'Hand-written guides to 12 goddess archetypes — Lilith, Hecate, Kali, Inanna, Kuan Yin, Tara, Mary Magdalene, Brigid, Isis, Sophia, Aphrodite, Persephone. Each page covers role, lineage, recognition signs, how to call her, the gift and the shadow.',
    url: `${SITE_URL}/gab44/goddesses`,
    hasPart: GODDESSES.map((g) => ({
      '@type': 'Article',
      name: g.name,
      url: `${SITE_URL}/gab44/goddesses/${g.slug}`,
      about: g.role
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 12 Goddesses — Archetypes, Signs &amp; How to Call · gab44 ✨</title>
<meta name="description" content="The 12 most-invoked goddess archetypes — Lilith (sovereignty), Hecate (crossroads), Kali (fierce love), Inanna (descent), Kuan Yin (compassion), Tara (swift mercy), Mary Magdalene (apostle), Brigid (sacred flame), Isis (gathering), Sophia (wisdom), Aphrodite (eros), Persephone (queen of two realms). What each one carries, signs she is with you, how to call her. Hand-written, honest about lineage." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/goddesses" />
<meta property="og:title" content="The 12 Goddesses — Archetypes &amp; How to Call · gab44" />
<meta property="og:description" content="From Lilith (the first refusal) to Persephone (the queen of two realms) — what each goddess carries, hand-written, honest about lineage." />
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
  .card .glyph { font-size: 28px; }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; line-height: 1.3; }
  .card .role { font-size: 12px; color: var(--accent); margin-bottom: 6px; font-weight: 500; line-height: 1.4; }
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
      <a href="/gab44/mantras">mantras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 <span class="accent">Goddesses</span> — archetypes, signs &amp; how to call</h1>
    <p class="sub">Hand-written guides to 12 goddess archetypes from living traditions. From Lilith (the first refusal) to Persephone (the queen of two realms). Each page carries the lineage, the recognition signs, the practice. Honest about appropriation, honest about source.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right goddess for the moment you are in?</strong> Click any of the 12 below. Every page has the actual *role* (the title and tradition), who the goddess *is*, *5 specific signs* she is already with you, *how to call her* (concrete invocation, prayer, practice from the living lineage), what her work means in love and in work, the *gift* she teaches, the *shadow* (where the practice turns into spiritual bypass, cultural appropriation, or commodification is named honestly), and pair-with cards for chakra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The 12 goddesses cluster naturally. <em>Fierce</em> (Lilith, Hecate, Kali, Inanna) are the sovereigns of the threshold — the first refusal, the keeper of the crossroads, the destroyer of what enslaves, the descender through the seven gates. <em>Compassion</em> (Kuan Yin, Tara, Mary Magdalene, Brigid) are the heart-keepers — the bodhisattva of mercy, the swift action, the apostle the apostles refused to listen to, the fire of the healing well. <em>Wisdom</em> (Isis, Sophia, Aphrodite, Persephone) are the integrators — the gatherer of the scattered, the cosmic intelligence, the goddess of embodied beauty, the queen of two realms.</p>
      <p><strong>Honest about lineage.</strong> Each page names where the goddess comes from — Mesopotamian, Hebrew apocrypha, Greek, Hindu Shakta, Sumerian, Chinese-Buddhist, Tibetan-Buddhist, Christian-Gnostic, Celtic, Egyptian. Authentic goddess devotion respects the lineage; commercial new-age practice that erases the source-cultures whose tradition these beings live within is a form of theft. We name the source.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which goddess is walking with your chart right now?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary goddess archetype — the one your particular wiring is in active relationship with this season. A $9 reading identifies it. <a href="/gab44/reading?ref=goddesses-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 12 goddesses · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
