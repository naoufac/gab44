// Norse Gods — 10 most-searched Aesir/Vanir/Underworld deities — SEO funnel.
// /gab44/norse-gods (index) + /gab44/norse-gods/{slug}.
//
// Peer to Hindu Devas: where the Sanskrit-Vedic stack on gab44 names the
// devas behind every mantra/mudra/asana, this funnel names the Norse beings
// behind the Elder Futhark runes already on gab44 + the Norse-lineage strand
// of the Wheel of the Year (Yule via Hákonar saga góða + Bede c. 725 CE).
//
// Three-family taxonomy:
//  - Aesir court (Odin, Thor, Loki, Frigg, Tyr, Heimdall, Baldur) = sky/Asgard.
//  - Vanir (Freya, Freyr) = earth/fertility, the older agricultural lineage.
//  - Underworld (Hel) = Helheim, daughter of Loki, keeper of the unwarred dead.
//
// Source-honest from Poetic Edda (Codex Regius c. 1270 CE, oral c. 9-10th c.),
// Snorri's Prose Edda (1220 CE), Heimskringla, Saxo Grammaticus' Gesta Danorum
// (c. 1200), Tacitus' Germania (98 CE), Adam of Bremen on Uppsala (c. 1075).
// Shadow-honest: folkish/nazi appropriation per god where applicable.

import { SITE_URL } from '@/lib/identity'

export interface NorseGodGuide {
  slug: string
  text: string
  old_norse: string
  family: 'aesir' | 'vanir' | 'underworld'
  position: number
  epithet: string
  source_text: string
  one_liner: string
  meaning: string
  iconography: string
  invocation: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  pair_with_rune: string
  pair_with_rune_slug: string
  pair_with_sabbat: string
  pair_with_sabbat_slug: string
  key_questions: [string, string, string]
}

export const NORSE_GODS: NorseGodGuide[] = [
  {
    slug: 'odin',
    text: 'Odin',
    old_norse: 'Óðinn',
    family: 'aesir',
    position: 1,
    epithet: 'The Allfather · Yggr (the terrible) · Grímnir (the masked) · Bölverkr (worker of evil) · Wanderer · One-eyed · The Hanged God',
    source_text: 'Poetic Edda (Völuspá, Hávamál, Grímnismál), Snorri\'s Prose Edda (Gylfaginning), Heimskringla (Ynglinga Saga), Saxo Grammaticus Gesta Danorum, Tacitus Germania 9 (as Mercurius)',
    one_liner: 'The Allfather. The one-eyed wanderer who hanged himself on the world-tree Yggdrasil for nine nights to receive the runes. God of wisdom, war, poetry, and the dead — the relentless seeker who pays in flesh for every knowledge worth keeping.',
    meaning: 'Odin (Óðinn — from óðr, "frenzy, fury, ecstasy, poetic inspiration") is the chief of the Aesir but not the easy or kindly chief of any other pantheon. He is the god who *pays* for what he knows: he gave one eye to Mímir for a single drink from the well of wisdom (Gylfaginning 15), and he hanged himself on Yggdrasil, pierced by his own spear, for nine nights "myself given to myself" (Hávamál 138-139) to receive the runes. He stole the mead of poetry (Skáldskaparmál) by seduction and shape-shifting. He sends his ravens Huginn (thought) and Muninn (memory) out across the nine worlds each dawn. He receives half the battle-dead in Valhalla (the other half go to Freya in Folkvangr — Grímnismál 14) — not to reward them but to muster the einherjar for Ragnarök, the final war he already knows he loses. He is the god of poets and warriors, kings and outcasts, shamans and madmen — anyone whose vocation requires that they suffer for what they see. The Tacitus identification of Odin with Mercury (Germania 9, 98 CE) marks the continental Germanic worship of him under the name Wodan a thousand years before the Eddas were written. Wednesday is Wodan\'s-day. The Yule Wild Hunt — Odin and his ghost-army riding the winter sky — is the source of the Santa-Claus mythology stripped of every shadow.',
    iconography: 'One eye (the other left at Mímir\'s well). Long grey beard and wide-brimmed traveler\'s hat pulled low (he walks Midgard in disguise as Grímnir, "the masked"). Blue cloak. Spear *Gungnir* (forged by the dwarves Sons of Ivaldi, never misses its mark, every oath sworn upon it is binding). Eight-legged horse *Sleipnir* (born of Loki in mare-form mated with the stallion Svaðilfari — Gylfaginning 42). Ring *Draupnir* (drips eight gold rings every ninth night). Two ravens Huginn + Muninn on his shoulders. Two wolves Geri + Freki at his feet (he eats nothing — only drinks wine — and gives all his meat to the wolves, Grímnismál 19). Throne *Hliðskjálf* from which he sees all of the nine worlds.',
    invocation: 'Wednesday (Óðinsdagr, Wodan\'s-day). The mead and the rune are his offerings — pour mead, draw a rune from the bag and look at it for nine breaths. The Hávamál (the "sayings of the High One") is his text — 164 stanzas of practical and mystical wisdom, beginning "All the doorways, before going forward, should be looked around, should be peered at" (Hávamál 1). Recite stanzas 138-145 (the *Rúnatal*, the rune-song) when sitting with a real choice that will cost you something. The traditional invocation in modern Heathenry: *Hail Óðinn, wanderer, one-eyed, hanged-on-the-tree, gift of the runes, lord of the mead.* No animal sacrifice in modern practice; the historical blót used horse, but the contemporary heathen offering is mead, mead-cake, or a poem.',
    in_love: 'Odin in love is *the partner who is always partly elsewhere* — the one whose vocation pulls them out the door at midnight, whose mind is on the next horizon, who cannot promise easy fidelity because they belong first to the work. The Eddas record his three wives — Frigg, Jörð, Rindr — and many lovers; the wandering is his nature. Odin-energy in a relationship is the *intensity* of presence when present alongside the *depth* of absence when gone. The shadow is the partner who uses "I am called to the work" as a cover for emotional unavailability or for the chronic seductions of the next gleam on the horizon.',
    in_work: 'Odin in work is the poet, the shaman, the strategist, the founder who pays for the vision in years of obscurity. Odin-energy is *willing to hang on the tree* — to undergo the unrewarded suffering that the knowledge requires. The shadow Odin is the founder who sacrifices everyone else for the vision (the team becomes the einherjar — bodies to be spent), and the chronic seeker who never lands because every plateau is just another horizon to walk past. Odin-work demands a Frigg, a household-keeper who tends what Odin abandons every morning.',
    the_gift: 'Odin gives the recognition that *real knowledge is paid for in flesh*. The runes did not come to him for free — they came because he hung pierced for nine nights. The mead of poetry did not come for free — it came through shape-shifting theft. The gift is the willingness to pay, the refusal of the cheap version of wisdom, the spear *Gungnir* of clear naming that does not miss.',
    the_shadow: 'The most appropriated god in the Norse pantheon. Modern shadow: SS *Wewelsburg* iconography (the Black Sun, the Wolfsangel, the runic adoption by Heinrich Himmler\'s *Ahnenerbe*); contemporary folkish-Asatru / *Wotansvolk* / *Asatru Folk Assembly* white-nationalist movements who claim Odin for ethnic-Aryan worship. The genuine lineage explicitly rejects this — *The Troth*, the inclusive heathen organization, has formally repudiated the folkish movement, as has *Ásatrúarfélagið* (the Icelandic Ásatrú church). The other shadow: Odin as MCU-Anthony-Hopkins benevolent-king, which strips the *one-eyed payment for wisdom* and the *Ragnarök-he-already-loses* from the figure, leaving only a generic patriarch. The real Odin is more dangerous than either the supremacist cosplay or the Marvel softening — he is the god who *eats himself* to know.',
    pair_with_rune: 'Ansuz — the rune of breath, voice, and divine inspiration; literally "Odin\'s rune" in the Anglo-Saxon Rune Poem. The rune the Allfather drew first from the well of Mímir.',
    pair_with_rune_slug: 'ansuz',
    pair_with_sabbat: 'Yule — Odin\'s Wild Hunt rides the longest nights of the year; the Yule-blót was historically dedicated to him, and the Norse Yule-tree (the green tree brought indoors at midwinter) honors his hanging on Yggdrasil.',
    pair_with_sabbat_slug: 'yule',
    key_questions: [
      'What knowledge am I demanding for free that will only come if I am willing to hang for nine nights, to give the eye, to pay in flesh?',
      'Where in my life am I confusing the seductive wandering of the next horizon with the patient sitting-at-the-well that the vocation actually requires?',
      'Whom in my closest relationships have I been treating as an einheri — a body to be spent for my Ragnarök — rather than as a person whose Ragnarök does not have to be mine?'
    ]
  },
  {
    slug: 'thor',
    text: 'Thor',
    old_norse: 'Þórr',
    family: 'aesir',
    position: 2,
    epithet: 'The Thunderer · Vingþórr (battle-Thor) · Hlórriði · Asa-Thor · Defender of Midgard · Friend of Man',
    source_text: 'Poetic Edda (Þrymskviða, Hárbarðsljóð, Hymiskviða, Lokasenna), Snorri\'s Prose Edda (Gylfaginning + Skáldskaparmál — Thor\'s journey to Útgarða-Loki, Thor\'s fishing of the Midgard Serpent), Tacitus Germania 9 (as Hercules), Adam of Bremen on Uppsala (Thor central, 1075 CE)',
    one_liner: 'The Thunderer. The red-bearded protector of Midgard who rides a goat-drawn chariot across the sky, kills giants with the hammer Mjölnir, and at Ragnarök slays the world-serpent before falling from its venom. The common-folk\'s god — the working farmer\'s god, the seafarer\'s god.',
    meaning: 'Thor (Þórr — from *thunraz, "thunder") is the most widely worshipped Norse god in the historical record. Adam of Bremen, describing the temple at Uppsala in 1075, names him as the central deity — Thor in the middle, Odin and Freyr beside him — because the agricultural and seafaring populations needed *weather*, and Thor *makes* the weather. He is the son of Odin and the earth-goddess Jörð. He is enormously strong, red-bearded, hot-tempered, slow-witted compared to Odin and Loki, but morally simple in a way the other Aesir often are not: he protects Midgard from the giants who would unmake it. His hammer *Mjölnir* (forged by the dwarves Sindri and Brokkr, with a handle made too short by Loki\'s sabotage as a fly — Skáldskaparmál 35) is the most-worn protective amulet in the Norse-Germanic world; thousands of Mjölnir pendants survive from the 9th-11th centuries. The Thursday-name (Thor\'s-day, Donnerstag, Þórsdagr) carries his Wednesday-Friday flanking by Odin and Freya. His many adventures (the visit to Útgarða-Loki, the fishing-trip with Hymir where he hooks the world-serpent, the cross-dressing to retrieve the stolen hammer from Þrymr) make him the most narratively-present god in the Eddic corpus.',
    iconography: 'Massive red beard. Iron gauntlets *Járngreipr* (without which he cannot wield the hammer). Belt of strength *Megingjörð* (doubles his already-enormous strength). Hammer *Mjölnir* (returns to his hand when thrown, can be shrunk small enough to wear inside his shirt). Goat-drawn chariot pulled by *Tanngrisnir* and *Tanngnjóstr* (the goats he can eat each night and resurrect each morning by laying their bones intact in their skins and consecrating them with Mjölnir — Gylfaginning 44). Thunder is the rolling of the chariot-wheels; lightning is the hammer-throw.',
    invocation: 'Thursday (Þórsdagr). Wear or hold a Mjölnir pendant. Offer beer (the working-class drink, distinct from Odin\'s aristocratic mead) and bread. The traditional protective gesture in historical sources is the *hamarsmark* — drawing the sign of the hammer in the air, hand moving down then across (parallel to and predating the Christian sign of the cross in the same region). Modern heathen invocation: *Hail Þórr, defender, hallower of the home, friend of the working folk.* Used in modern Asatru blessings of land, house, and child (the *hamarsmark* is made over a newborn for protection — the historical practice recorded in Saxo Grammaticus).',
    in_love: 'Thor in love is *the partner who shows up* — the one who is loud, present, hot-tempered, generous, who would smash through any door for you and would never leave you alone in a fight. The Eddas record his marriage to Sif (golden-haired earth-goddess) and his loyalty to her — when Loki shears her hair as a prank, Thor threatens to kill him until the dwarves replace it with hair of literal gold. Thor-energy in a partnership is *protective fire* — the partner who will not let the world come for you. The shadow is the partner whose protection-mode tips into possessiveness or whose temper makes the home itself the dangerous weather.',
    in_work: 'Thor in work is the foreman, the captain, the soldier, the firefighter, the operator who runs toward the giants. Thor-energy is *direct, physical, weather-making* — the kind of work that protects a community from the forces that would unmake it. The shadow is the worker whose only tool is the hammer, who turns every problem into a giant to be smashed when the work actually needed Odin\'s subtle naming or Frigg\'s patient weaving.',
    the_gift: 'Thor gives the experience of being *defended*. The Mjölnir pendant worn under the shirt, the protective gesture made over the cradle, the friend who arrives with the truck when you call at 3 a.m. — these are Thor-shapes in the world. To know Thor is to know that the giants of the world can be answered, that the storms can be ridden, that there is a red-bearded god in the working-class clothes who is on your side.',
    the_shadow: 'Thor has been *less* weaponized by the folkish movement than Odin (the supremacists prefer Odin\'s warrior-aristocrat register), but the Mjölnir pendant has been adopted by some far-right groups and the Asatru Folk Assembly invokes Thor heavily. The genuine modern Heathen response: Mjölnir-wearing predates and outsizes any nazi-cooption by a thousand years and tens of thousands of pendants; the symbol cannot be ceded. The other shadow: Thor as the MCU-Chris-Hemsworth comic-relief himbo, which empties him of the agricultural-protective register that made him the *most-worshipped* god in the historical Norse world. The historical Thor is the working farmer\'s god — not a superhero, but the patron of *the people who are tired and need the rain to come*.',
    pair_with_rune: 'Thurisaz — the giant-rune, the thorn-rune, the rune Mjölnir was forged to answer. The rune of breakthrough force, the necessary destructive impulse turned outward against what would destroy the home.',
    pair_with_rune_slug: 'thurisaz',
    pair_with_sabbat: 'Litha — the summer solstice; the height of thunder season in the Norse year, the peak of Thor\'s sky-charioting.',
    pair_with_sabbat_slug: 'litha',
    key_questions: [
      'Where in my life is the storm Thor would have already ridden into — the giant I have been negotiating with when actually the hammer has been waiting in my hand?',
      'Whose protector am I, and have I been letting the weight of being-the-Thor turn me hot-tempered toward the very people I am defending?',
      'When was the last time I let someone be Thor *for me* — let myself be the one defended, rather than always running toward the front?'
    ]
  },
  {
    slug: 'loki',
    text: 'Loki',
    old_norse: 'Loki Laufeyjarson',
    family: 'aesir',
    position: 3,
    epithet: 'The Trickster · Sky-Walker · Shape-Shifter · Father of Monsters · The Sly One · Loptr',
    source_text: 'Poetic Edda (Lokasenna, Þrymskviða, Reginsmál, Völuspá — bound under the snake), Snorri\'s Prose Edda (Gylfaginning + Skáldskaparmál — the binding, the mead-theft, the wall-builder), Heimskringla',
    one_liner: 'The trickster. Blood-brother to Odin, father of the wolf Fenrir, the world-serpent Jörmungandr, and Hel — and the eight-legged horse Sleipnir, whom he birthed in mare-form. Bound under a serpent\'s venom-drip until Ragnarök, when he sails the ship of nails against the Aesir and falls slaying Heimdall.',
    meaning: 'Loki is the most theologically uncomfortable figure in the Norse pantheon and the most modern-feeling. He is not a "god of evil" in any clean dualistic sense — he is *change-as-such*, the necessary disruption inside the Aesir court that breaks every static arrangement and forces movement. He is the son of the giant Fárbauti and the giantess (or female-Aesir, sources disagree) Laufey — Aesir by blood-brotherhood with Odin (Lokasenna 9), not by birth. He is the *only* shape-shifter in the pantheon: he becomes a salmon (caught in the net at his binding), a mare (impregnated by Svaðilfari, giving birth to Sleipnir — Gylfaginning 42), a fly (sabotaging the dwarves\' forging of Mjölnir), a falcon (rescuing Idunn), an old woman (refusing to weep for Baldur — the act that seals the apocalypse). His three children with the giantess Angrboða — Fenrir the wolf, Jörmungandr the world-serpent, and Hel the half-rotten queen of the dead — are the three creatures whose loose-binding by the Aesir is the structural cause of Ragnarök. Whether Loki is "evil" or "necessary" or "tragic" is a question every reader of the Eddas has to answer themselves; the texts do not resolve it. He is bound under a venom-dripping serpent in punishment for arranging Baldur\'s death; his wife Sigyn holds a bowl to catch the venom and only when she turns to empty it does Loki convulse — *and that is why the earth shakes*, the Norse said.',
    iconography: 'Slender, fast, dark-haired. No fixed iconography because shape-shifting is the form. Sometimes shown with scarred lips (the dwarves Brokkr sewed his lips shut as a lesser punishment for the head-forfeit he owed them — Skáldskaparmál 35). The serpent above and the bowl in Sigyn\'s hand below are his most-identifying scene. In the Snaptun stone (Denmark, c. 1000 CE) — one of the only confirmed Loki images — he is shown with scarred lips and an expression of complicated suffering.',
    invocation: 'Loki is *not* a god you invoke casually. The Lokasenna ends with the Aesir binding him; modern heathens are split on whether to honor him at all — *Ásatrúarfélagið* and *The Troth* both leave the question to the individual; some heathen kindreds will not toast him at sumbel; others (the Lokean movement, especially within queer-inclusive heathenry) honor him explicitly as the patron of shape-shifters, queer people, the differently-formed, the necessary-disrupters. If you call him, do it on Saturday (the day not assigned to any other Norse god, the in-between day), with fire (his element — *Loptr* may mean "the lofty one" but later medieval association linked him to flame; this is contested). The best modern offering: an apology owed but undelivered, a truth said aloud to no one. He is the god of the held-back, and what he answers is the willingness to release.',
    in_love: 'Loki in love is *the partner who will not let the relationship calcify* — the one who breaks the surface of every comfortable assumption, who shape-shifts so the partnership cannot become a museum. His marriage to Sigyn — who holds the bowl through every cycle of the venom, knowing the shaking will come every time she turns to empty it — is the longest-suffering loyalty in the Eddas. Loki-energy in a partnership is *truthful, mobile, and exhausting*. The shadow is the partner who shape-shifts to evade accountability rather than to advance love — the gaslighter, the chronic deflector, the one whose every conversation moves a different shape from the one before.',
    in_work: 'Loki in work is the change-agent, the consultant brought in to break the static culture, the trickster-strategist, the inventor whose breakthroughs come from violations of received form. Loki-energy is *necessary disruption* — the willingness to make the room uncomfortable because the room had become a coffin. The shadow is the disrupter who never builds, the consultant addicted to the breaking, the one who confuses *destabilization* with *transformation* (Loki breaks the cycle; Shiva-energy actually transforms it).',
    the_gift: 'Loki gives the recognition that *the disruption is part of the system, not outside it*. The Aesir would calcify without him; Mjölnir would not have been forged without his sabotage-and-amend; Sleipnir would not exist; the walls of Asgard would have been built by the giant and the Aesir would have lost the sun and moon. The gift is the willingness to host the trickster — to know that the shape-shifting, queer, uncomfortable presence in your community is *load-bearing*, and that exiling Loki means losing what Loki keeps mobile.',
    the_shadow: 'Loki has become a Marvel-romance-object via Tom Hiddleston, which has flattened him into a roguish bisexual antihero and stripped the *bound-under-the-venom-for-arranging-the-murder-of-Baldur* register. The Eddic Loki is not safe and not easy. The other shadow: the Lokean movement at its worst can use Loki as a permission-slip for chaos-without-accountability, weaponizing the trickster-archetype as a shield against critique. The genuine Loki-work is the willingness to be *both* shape-shifter *and* bound — to know that disruption has consequences and that even the trickster\'s wife sits holding the bowl.',
    pair_with_rune: 'Hagalaz — the hail-rune; the disruption that comes from beyond the field, the necessary destruction inside the storm. The rune whose form changes most across the Elder/Younger Futhark transition, the shape-shifter of the rune-row.',
    pair_with_rune_slug: 'hagalaz',
    pair_with_sabbat: 'Samhain — the threshold festival when the veil between worlds thins; Loki the boundary-crosser is most present at the borders, the shape-shifter at the gate.',
    pair_with_sabbat_slug: 'samhain',
    key_questions: [
      'Where in my life has the shape-shifting become evasion of accountability rather than the necessary disruption of a calcified form?',
      'Whom in my community have I been quietly exiling as "the Loki" — the queer one, the truth-teller, the uncomfortable presence — when actually the community has been calcifying without their disruption?',
      'Who is the Sigyn in my life — the one holding the bowl through every cycle of my venom — and have I been giving them anything back for the patience?'
    ]
  },
  {
    slug: 'frigg',
    text: 'Frigg',
    old_norse: 'Frigg',
    family: 'aesir',
    position: 4,
    epithet: 'Queen of Asgard · Allmother · Foreknower · The Silent One · Wife of Odin · Mother of Baldur',
    source_text: 'Poetic Edda (Völuspá, Lokasenna, Vafþrúðnismál — the wager with Odin), Snorri\'s Prose Edda (Gylfaginning 35 — naming her foreknowledge; 49 — the death of Baldur), Tacitus Germania (as the unnamed wife, identified with continental Frīja)',
    one_liner: 'The Queen of Asgard. Wife of Odin, mother of Baldur, the only being besides Odin who sits on Hliðskjálf and sees into all nine worlds. She knows every fate — and speaks none of them. The Allmother of the household, the weaver who keeps the home stable while the Allfather wanders.',
    meaning: 'Frigg (Frigg — from a Germanic root meaning "beloved," also the source of Friday/Freitag/Frīgedæg) is the most narratively-quiet of the major Aesir and the most cosmologically powerful. Snorri says (Gylfaginning 35) that *she knows all the fates of men, but she speaks none of them* — a register of foreknowledge that even Odin does not have, because Odin has to *pay* for what he sees while Frigg simply knows. The Vafþrúðnismál opens with her warning Odin not to wager with the giant (he ignores her, as the Allfather does). Her story-cycle is centered on the death of her son Baldur (Gylfaginning 49): foreseeing his death, she extracted oaths from every living thing not to harm him — except the mistletoe, which she judged too young to swear. Loki found this gap, fashioned a mistletoe dart, and gave it to the blind god Höðr who threw it. Baldur died; Frigg sent Hermóðr to Hel to plead for his return; Hel agreed if every living thing would weep — and Loki in old-woman shape refused, and Baldur stayed in Hel. Frigg\'s grief is the only mother-grief named in the Eddic corpus. Her hall is *Fensalir* ("the marsh-halls"). She is associated with weaving (her distaff is the constellation Orion\'s Belt in continental Germanic tradition — *Friggjarrokkr*, "Frigg\'s distaff").',
    iconography: 'Mature, regal woman. Bunch of household keys at her belt (the housewife\'s authority — historically the keys of a Norse household were the wife\'s domain). Distaff and spindle (she weaves the clouds, weaves the fates she sees). Falcon-feather cloak (which Freya owns but Frigg sometimes wears — the goddesses overlap, and some scholars argue Frigg/Freya were one figure in the proto-Germanic horizon and split later — the *Frigg-Freya question* is unresolved). Seated on Hliðskjálf beside Odin.',
    invocation: 'Friday (Frīgedæg, Freitag, Friday — etymologically *her* day, though some scholars credit Freya). Offer at the *threshold* of the home — the doorway, the hearth. Light a candle in the household keys; offer milk, bread, woven cloth. The traditional invocation: *Hail Frigg, allmother, foreknower, who keeps the home while the wanderer wanders.* Especially called when something in the household is collapsing — the marriage, the children, the financial container; Frigg is the patron of *keeping the structure together when the Allfather is gone again*.',
    in_love: 'Frigg in love is the partner who *holds the marriage while it is being tested* — the one who knows what the other one will do (because she sees the fates and speaks none of them) and who chooses the staying anyway. Her marriage to Odin — the wandering, the wagering, the infidelities — is the deepest portrait of a long marriage in the Norse texts. Frigg-energy in a relationship is *foreknowing, weaving, silent, load-bearing*. The shadow is the partner who knows everything and says nothing — who lets the foreknowledge become a withholding, who turns the silence into a wall.',
    in_work: 'Frigg in work is the COO, the chief of staff, the operations director, the one whose work is invisible because she has prevented the disaster *before* it manifested. Frigg-energy is *systems-keeping* — the weaving of the structure that lets every other role function. The shadow is the worker whose competence becomes invisible labor, who carries the household and the office and the team while the founders ride out to the wars.',
    the_gift: 'Frigg gives the recognition that *the foreknowledge is the practice*. She does not announce what she sees. She quietly does the work the foreknowledge implies — extracting the oaths, weaving the protection, keeping the home in the shape that will catch the falling. The gift is the willingness to know without proclaiming, to act without explaining, to weave what only later will be seen as having always been there.',
    the_shadow: 'Frigg has been less *politically* appropriated than Odin or Thor (the supremacist movements prefer male-coded warrior-figures), but she has been *culturally* flattened — reduced to "the wife of Odin" in popular treatments, stripped of the *foreknowledge greater than Odin\'s* register, made into a generic queen-figure. The other shadow: the *Frigg-as-perfect-housewife* register in 20th-century folkish-pagan literature, which weaponized her as a model of submissive domesticity. The historical and Eddic Frigg is none of this — she is the keeper of the keys, the seer-greater-than-the-seer, the only being who *withholds* what she knows even from her husband. The "silence" is not submission; it is the discipline of one who knows.',
    pair_with_rune: 'Berkano — the birch-rune, the mother-rune, the rune of birth and gentle nurture. The household-keeper\'s rune.',
    pair_with_rune_slug: 'berkano',
    pair_with_sabbat: 'Imbolc — the festival of the mother-goddess at the rising of the spring, the household hearth re-lit; Frigg\'s register of motherhood at the cradle of the year.',
    pair_with_sabbat_slug: 'imbolc',
    key_questions: [
      'What do I already know about how this is going to end, and what would it look like to act on the foreknowing without yet announcing it?',
      'Where in my closest relationship am I withholding the foreseeing as protection of the other — and where has the withholding become the wall instead?',
      'Whose Frigg am I — whose household am I quietly keeping while the Allfather rides — and have I let myself be seen for the work, or has it become invisible labor I am secretly resenting?'
    ]
  },
  {
    slug: 'tyr',
    text: 'Tyr',
    old_norse: 'Týr',
    family: 'aesir',
    position: 5,
    epithet: 'The Lawspeaker · The One-Handed · God of Single Combat · The Oath-Keeper · Continental Tīwaz / Anglo-Saxon Tīw',
    source_text: 'Poetic Edda (Hymiskviða, Lokasenna), Snorri\'s Prose Edda (Gylfaginning 25 + 34 — the binding of Fenrir; Skáldskaparmál — Tyr the bravest), Tacitus Germania 9 (as Mars), continental Tīwaz attestations c. 100 CE',
    one_liner: 'The lawspeaker. The one-handed god who put his hand in the wolf Fenrir\'s mouth as the pledge for a binding everyone knew was a trick — and lost the hand when the wolf realized. The Norse god of *named sacrifice* — the one who pays the price of the oath out of his own body.',
    meaning: 'Týr (Anglo-Saxon Tīw, continental Tīwaz, possibly the original Indo-European sky-father whose role was largely displaced by Odin — the etymology of *Týr* is related to Sanskrit *Dyaus*, Latin *Deus*, Greek *Zeus*; in the proto-Germanic horizon he may have been the supreme god, demoted by the time of the Eddas to a third-rank Aesir). His central myth is the binding of Fenrir (Gylfaginning 34): the Aesir grew frightened of the wolf-son of Loki, who was growing too large to be controlled. They forged the gentle-looking but unbreakable ribbon *Gleipnir* (made of impossible things — the sound of a cat\'s footfall, the beard of a woman, the roots of a mountain, the sinews of a bear, the breath of a fish, the spittle of a bird). They asked Fenrir to let them bind him with it as a test of his strength. Fenrir, suspicious, said he would only allow it if one of the Aesir would put their hand in his mouth as pledge. *No one would but Tyr.* When the ribbon held and the wolf realized the trick, Fenrir bit off Tyr\'s right hand. The myth is the Norse pantheon\'s primary statement on *the cost of the binding-oath that must be sworn even knowing it will cost the one who swears it*. At Ragnarök Tyr fights the hound Garm — they kill each other. Tuesday (Tīwesdæg, Dienstag, Tuesday) is his day.',
    iconography: 'One-handed (the right hand bitten off by Fenrir). Sword (he is the god of single combat, the Norse *holmgang*). Sometimes shown with the wolf at his side or facing him. The Anglo-Saxon Rune Poem describes the rune *Tīr*: "Tīr is a sign — it keeps faith well with princes, it is ever on its course over the mists of night, it never fails."',
    invocation: 'Tuesday (Týsdagr). Offer at a place where an oath is being kept under pressure — the courthouse, the meeting where the difficult promise is being honored, the disciplined practice that has not been abandoned. Iron is his metal (the sword-iron). The traditional modern Heathen invocation: *Hail Týr, oath-keeper, one-handed, lawspeaker.* Especially called by people swearing oaths they know will cost them — military service, marriage vows, the disciplined practice maintained when no one is watching.',
    in_love: 'Tyr in love is the partner who *honors the vow even when the vow has become inconvenient* — the one who put their hand in the wolf\'s mouth knowing how it ends, and stays. Tyr-energy in a relationship is *named integrity* — the willingness to be held to what you said you would do. The shadow is the partner who has confused *oath-keeping* with *self-erasing martyrdom* — the one who stays at any cost long after the relationship has become the wolf that is now eating the hand for nothing.',
    in_work: 'Tyr in work is the lawyer who will not write the brief that violates the law, the contractor who will not cut the corner, the surgeon who will not operate beyond their skill, the manager who keeps the difficult promise to the team even when leadership pressures them to break it. Tyr-energy is *named, lawful, sacrificial integrity*. The shadow is the institutional bureaucrat who has confused *the letter of the law* with *the spirit of the law* — the rule-following that has become the cage.',
    the_gift: 'Tyr gives the recognition that *some oaths must be sworn even knowing the cost*. The hand is not lost by mistake; it is offered. The gift is the willingness to be the one in the circle who, when no one else will, says *I will pledge my body for this binding.* It is the dignity of the named price.',
    the_shadow: 'Tyr has been adopted by some folkish/supremacist movements as a symbol of "Aryan martial valor" — the Tyr-rune appears on neo-nazi insignia. The Wehrmacht\'s 32nd SS Volunteer Grenadier Division used the Tyr-rune as its symbol. The genuine Heathen response: the rune predates and outsizes any nazi-coopation by 1800 years; the rune of the *oath-keeper who pays from his own body* cannot be ceded to people whose actual practice was the breaking of every oath. The other shadow: Tyr as the patron of *any* warrior register, which strips the *lawspeaker* dimension and leaves only the *single-combatant*. The historical Tyr was a *judicial* god as much as a martial one — the *Thing* (the Norse assembly) was held under his patronage; his single-combat was the *holmgang*, the formal duel as legal procedure.',
    pair_with_rune: 'Tiwaz — literally Tyr\'s rune; the arrow-shape, the rune of single combat, victory, and the named oath. The clearest god-rune pairing in the Elder Futhark.',
    pair_with_rune_slug: 'tiwaz',
    pair_with_sabbat: 'Ostara — the spring equinox; the season of single-combat and the resumption of campaign, the Norse spring-thing where oaths were sworn at the rising of the year.',
    pair_with_sabbat_slug: 'ostara',
    key_questions: [
      'What oath am I currently being asked to swear knowing it will cost me — and what would it look like to put the hand in the wolf\'s mouth willingly rather than to be tricked into it?',
      'Where in my life have I confused oath-keeping with self-erasing martyrdom — the staying-in that has become the wolf eating the hand for nothing?',
      'Am I a Týr-figure in any community — the one who holds the law when no one else will — and have I let myself be seen for that, or has the integrity become invisible?'
    ]
  },
  {
    slug: 'heimdall',
    text: 'Heimdall',
    old_norse: 'Heimdallr',
    family: 'aesir',
    position: 6,
    epithet: 'The Watcher · Guardian of Bifrost · The White God · He of Nine Mothers · Rígr (the walker) · Father of the social classes',
    source_text: 'Poetic Edda (Völuspá 1 — addressing all the sons of Heimdall; Rígsþula — the founding of the three classes; Grímnismál 13 — Himinbjörg), Snorri\'s Prose Edda (Gylfaginning 27, Skáldskaparmál)',
    one_liner: 'The watcher at the rainbow-bridge Bifrost. The white god who hears grass grow and wool grow on sheep, who needs less sleep than a bird, who sees a hundred leagues by day or night. The horn-blower whose Gjallarhorn will sound at Ragnarök — and the wandering Rígr who fathered the three social classes of humankind.',
    meaning: 'Heimdall (Heimdallr — etymology uncertain, possibly "world-tree" or "world-illuminator") is the sentinel of the Aesir, posted at the foot of Bifrost (the rainbow bridge connecting Asgard to Midgard) in his hall *Himinbjörg* ("sky-cliffs"). His senses are inhuman: Snorri says he can hear the grass grow on the earth and the wool grow on a sheep, can see a hundred leagues by night as well as by day, and needs less sleep than a bird. He is the son of *nine mothers* (Völuspá; the Skáldskaparmál names them as Gjálp, Greip, Eistla, Eyrgjafa, Ulfrún, Angeyja, Imdr, Atla, and Járnsaxa — generally read as the nine waves of the sea, daughters of the sea-giant Ægir). He owns the *Gjallarhorn* ("the loud-sounding horn"), which he will blow at the first sign of Ragnarök to wake the Aesir. He and Loki kill each other at Ragnarök — a long-running enmity hinted at across the Eddas. His other crucial myth is the *Rígsþula*: as the wandering Rígr he walked Midgard and fathered three sons by three different households — *Þræll* (the slave-class progenitor), *Karl* (the free-farmer-class progenitor), and *Jarl* (the noble-warrior-class progenitor) — making Heimdall the *ancestor of all human social classes* in the Norse cosmogony. Hence the Völuspá opens with the seeress addressing "all sons of Heimdall" — all of humankind.',
    iconography: 'White-skinned (called "the white god"). Gold teeth (epithet *Gullintanni*, "gold-teeth"). The horn Gjallarhorn at his belt. The horse *Gulltoppr* ("golden-mane"). Sword *Hofuð* (literally "head" — possibly because Heimdall was slain by a head, in the lost *Heimdalargaldr* fragment). Stationed at the foot of the rainbow-bridge, always watching.',
    invocation: 'No traditional day in the medieval calendar. Modern Heathen practice tends to invoke him at dawn (he is the watcher who sees first) or before any long-distance journey, or at the threshold of any major life-passage. Offer at doorways, windowsills, gates — wherever the boundary between *inside* and *outside* lives. The horn-call is his symbol — a small bell, a horn, even the household alarm can be tuned to him as the sentinel-presence. *Hail Heimdallr, watcher, horn-bearer, ancestor of all the kin.*',
    in_love: 'Heimdall in love is the partner who *sees what is coming before it arrives* — who notices the small drift, the early tremor, the conversation that ended slightly wrong three weeks ago that the other one has already forgotten. Heimdall-energy in a partnership is *long-range attentiveness*. The shadow is the partner whose hyper-vigilance becomes surveillance — who watches so closely that the other one cannot move freely, who sounds the Gjallarhorn at every flicker.',
    in_work: 'Heimdall in work is the security analyst, the early-warning monitor, the editor who catches the small inconsistency that signals the structural problem, the sentinel who notices the team-culture drift before it has produced any visible damage. Heimdall-energy is *the watcher whose job is to see what others miss*. The shadow is the watcher who has become only-the-watcher — never the actor, never the builder, always the alarm and never the response.',
    the_gift: 'Heimdall gives the recognition that *seeing-first is its own discipline*. The hearing of grass growing, the hundred-league sight, the readiness of the horn — these are not gifts of leisure but of *trained attention*. The gift is the recognition that the watcher is also the *first ancestor* — that the discipline of sentinel-presence is the gift the social order rests on.',
    the_shadow: 'Heimdall has been folkish-appropriated through the *Rígsþula* — the founding of the three-class hierarchy has been read as a charter for racial-essentialism (the three classes have been racialized in some 19th-century and modern white-nationalist literature). The genuine response: the Rígsþula is a sociological myth about *class*, not *race* — the three sons differ in *occupation* and *kin-bond*, and the text explicitly says Heimdall fathered them across different *households*, not different *peoples*. Reading the myth as racial is a 19th-century imposition with no textual support. The other shadow: the MCU-Idris-Elba Heimdall, which kept the sentinel-register but stripped the *ancestor of all kin* dimension.',
    pair_with_rune: 'Mannaz — the rune of humanity, the kin-rune; Heimdall as Rígr is literally the ancestor of the Mannaz-folk, the father of the three classes.',
    pair_with_rune_slug: 'mannaz',
    pair_with_sabbat: 'Mabon — the autumn equinox, the threshold-festival of balance and the gate; Heimdall the gate-keeper of Bifrost at the equinox of the year.',
    pair_with_sabbat_slug: 'mabon',
    key_questions: [
      'What am I currently sensing — the small drift, the early tremor — that I have been talking myself out of treating as real signal because the proof has not yet arrived?',
      'Where in my life has the sentinel-discipline tipped into surveillance — the watching-so-close that the relationship cannot move freely?',
      'Am I only-the-watcher in some part of my life — sounding alarms without ever moving from the post — and what would it look like to also be the response?'
    ]
  },
  {
    slug: 'baldur',
    text: 'Baldur',
    old_norse: 'Baldr',
    family: 'aesir',
    position: 7,
    epithet: 'The Shining One · The Beautiful · The Bleeding God · Son of Odin and Frigg · The Returner-After-Ragnarök',
    source_text: 'Poetic Edda (Völuspá 31-35 + Baldrs draumar — the dreams of Baldur), Snorri\'s Prose Edda (Gylfaginning 49 — the death of Baldur), Saxo Grammaticus Gesta Danorum Book III (Balderus the rival of Hötherus — variant tradition)',
    one_liner: 'The shining one. The most beautiful, gentle, and wise of the Aesir. Foreseen to die, mourned by every living thing except one (Loki in old-woman form refusing to weep) — and prophesied to return after Ragnarök to rule the new world. The Norse pantheon\'s dying-and-rising god.',
    meaning: 'Baldr (Baldur — possibly from a root meaning "lord, prince" or "bold one") is the son of Odin and Frigg, the most beloved of the Aesir, described as so radiant that light shines from his body. His mythic cycle is short and devastating. The *Baldrs draumar* (Baldur\'s Dreams) opens with him having nightmares of his own death — the gods gather, Odin rides to Hel to consult a dead seeress, and learns the prophecy is true. Frigg extracts oaths from every living thing not to harm Baldur — but neglects the mistletoe (Gylfaginning 49). At a feast, the gods throw weapons at Baldur as a game (because nothing harms him). Loki, learning of the mistletoe-gap, fashions a dart and gives it to the blind god *Höðr* (Baldur\'s brother), who throws it — and Baldur falls dead. The Aesir burn him on his ship *Hringhorni* with his wife Nanna (who dies of grief beside him) and his horse. Odin places the gold ring *Draupnir* on his pyre. The Aesir send Hermóðr to Hel to plead for Baldur\'s return; Hel agrees if every living thing will weep for him. Every thing weeps — except an old giantess called Þökk ("thanks"), widely understood to be Loki in disguise, who refuses. Baldur stays in Hel. Crucially: the Völuspá (60-66) prophesies that *after Ragnarök*, when the old world has burned and drowned and a new earth rises green from the sea, Baldur and Höðr both return from Hel and rule the new world. Baldur is the only Aesir explicitly named as *surviving the apocalypse by being already dead through it*.',
    iconography: 'Radiant, golden-haired, beautiful young man — the most physically perfect being in the Norse pantheon. His ship *Hringhorni* (the largest ship ever built) under his pyre. The mistletoe sprig — small, almost insignificant — that killed him. The gold ring Draupnir. His wife Nanna at his side.',
    invocation: 'Sunday in some modern Heathen traditions (the sun-day, the shining-day, though etymologically Sunday is Sól\'s-day not Baldur\'s). Offer at the height of summer — Midsummer / Litha is his peak-light moment, and the same moment that contains his shadow (the light begins to wane immediately after Midsummer, foreshadowing Baldur\'s fall). The traditional invocation: *Hail Baldr, shining one, beloved, returner — who will rule the green-rising earth after the burning.* Especially called in grief — Baldur is the patron of those who have lost the most-beautiful and who are waiting for the new world.',
    in_love: 'Baldur in love is the partner who is *radiantly present* — gentle, generous, kind, the one whose simple gentleness draws everyone to them. Baldur-energy in a relationship is *the gift of safety*. The shadow is the partner who is *too beautiful to be harmed* — who cannot tolerate any rough surface in the relationship, who collapses at the first hard conversation because the mistletoe always finds the gap. The other shadow: the partner who *idealizes* their beloved into Baldur-shape, demanding perfection — and then mourns when reality breaks through.',
    in_work: 'Baldur in work is the beloved figure — the leader everyone loves, the colleague every team wants, the artist whose work is unmistakably gentle. Baldur-energy is *radiant goodness*. The shadow is the worker whose universal-belovedness becomes a structural fragility — the team or project that cannot survive the first internal critique because the figure at the center has been made too pure to handle complaint.',
    the_gift: 'Baldur gives the most cosmically-hopeful gift in the Norse pantheon: *the new world is real*. The Eddas do not end at Ragnarök. The new earth rises green from the sea; Baldur and Höðr return from Hel and rule together — Höðr the blind brother who *threw the dart* is rehabilitated as co-ruler. The gift is the promise that *the apocalypse is not the last word*, that what has been lost is held in Hel and returned when the burning has cleared the way.',
    the_shadow: 'Baldur has been less politically appropriated than Odin or Thor, partly because his myth resists weaponization (a gentle dying god is harder to nazify than a warrior-aristocrat). However, the *folkish* reading of Baldur as "the pure Aryan god murdered by the trickster" has appeared in some far-right literature — the genuine Eddic reading rejects this entirely (Baldur is not "racially pure," he is the *vulnerable* one, the one whose perfection makes him a target). The other shadow: Baldur-as-Christ in 19th-century romantic-revival literature, which Christianized the figure into a generic dying-god-of-light. The Eddic Baldur is distinct: he does not redeem anyone by dying; he simply *dies*, is mourned, and *waits* for the new world. The patience is the practice.',
    pair_with_rune: 'Sowilo — the sun-rune; the rune of radiance, victory through light, the shining presence. Baldur as the embodied sun-god of the Aesir.',
    pair_with_rune_slug: 'sowilo',
    pair_with_sabbat: 'Litha — the summer solstice, the peak of light; the moment Baldur shines brightest and the moment the light begins to wane toward his fall.',
    pair_with_sabbat_slug: 'litha',
    key_questions: [
      'What has been lost in my life that I have been refusing to fully mourn because the loss seems too large — what would it look like to weep, knowing the new world only rises if every thing weeps?',
      'Whom have I been Baldur-ing — idealizing into a purity that cannot handle the rough surface of real relationship — and where is the mistletoe-gap I have not noticed?',
      'What in my life is currently in Hel — gone but not dead, waiting for the new world — and what would it look like to keep faith with its return rather than to declare it lost?'
    ]
  },
  {
    slug: 'freya',
    text: 'Freya',
    old_norse: 'Freyja',
    family: 'vanir',
    position: 8,
    epithet: 'The Lady · Mistress of Seidr · Owner of Folkvangr · Wearer of Brísingamen · Falcon-Cloaked · Tears of Gold',
    source_text: 'Poetic Edda (Þrymskviða — the giant\'s demand for her; Hyndluljóð — Freya summons Hyndla; Grímnismál 14 — Folkvangr), Snorri\'s Prose Edda (Gylfaginning 24 — naming her domains; Skáldskaparmál — Brísingamen, the falcon-cloak)',
    one_liner: 'The Vanir goddess of love, beauty, gold, war, and seidr. She owns the necklace Brísingamen and the falcon-cloak. She rides a chariot drawn by two cats. She weeps tears of red gold for her lost husband Óðr. She receives half the battle-dead in her hall Folkvangr — the other half go to Odin.',
    meaning: 'Freyja (Freya — "lady") is the most powerful goddess in the Norse pantheon and arguably the most important Vanir deity. Her brother is Freyr; her father is Njörðr; she came to the Aesir as a hostage after the Aesir-Vanir war and brought with her *seiðr* — the Norse shamanic-magic tradition associated with prophecy, fate-weaving, and shape-shifting, which she taught to Odin (the *Ynglinga Saga* names her as the one who taught seidr to the Aesir, though it was considered ergi — feminine, shameful — for men to practice). She owns the necklace *Brísingamen* (forged by four dwarves; she slept one night with each in exchange — Sörla þáttr). She owns the falcon-feather cloak that lets the wearer fly between worlds (Loki borrows it repeatedly). She rides a chariot drawn by two large cats (sometimes named Bygul and Trjegul in modern reconstructions; the medieval texts do not name them). Her hall is *Sessrúmnir* ("seat-roomy"), located in *Folkvangr* ("field of the host") — and crucially, *she chooses first* among the battle-slain, before Odin (Grímnismál 14). This is theologically remarkable: the war-dead do not go primarily to Odin\'s Valhalla; *half go to Freya*. Her husband *Óðr* is mysterious (the name is etymologically close to Odin\'s — *Óðr* means "frenzy, fury" and *Óðinn* means "frenzied-one"; some scholars argue Óðr and Odin are the same figure split, others reject this). Óðr wandered away from her and she weeps tears of red gold seeking him.',
    iconography: 'Beautiful, gold-haired, gold-adorned. Necklace Brísingamen at her throat. Falcon-feather cloak. Chariot drawn by two great cats. Sometimes shown with the boar *Hildisvíni* ("battle-swine"). Tears as gold droplets. Veil (associated with seidr-practice — the seer\'s covering).',
    invocation: 'Friday (Frīgedæg — etymologically *Frigg\'s-day* in the most-accepted reading, but Freya-day in others; both goddesses are honored on Friday in most modern practice). Offer gold, honey, mead, flowers, cat-images. The traditional invocation: *Hail Freyja, lady of seidr, owner of Folkvangr, gold-weeper, falcon-cloaked.* Especially called for: love-work, sexual-sovereignty work, grief-work (she knows the search for the lost beloved), and seidr-practice. The historical seidr ritual involved the *vǫlva* (seeress) sitting on a raised platform (*seiðhjallr*) in a feathered cloak, chanting prophecy — modern reconstructed seidr practice honors Freya as the patron of this.',
    in_love: 'Freya in love is *sovereign* — she chooses, she takes, she leaves, she weeps openly when the beloved is gone. She slept with the four dwarves for Brísingamen. She is not chaste and does not pretend to be. Freya-energy in a partnership is *embodied desire, gold-adorned, unapologetic*. The shadow is the partner whose sovereignty has tipped into transactionality — the one who has confused *I chose this* with *I am owed this*, who weaponizes the necklace into a price. The other shadow: the partner who cannot let the wandering Óðr go and spends decades weeping gold for someone who left.',
    in_work: 'Freya in work is the creative director, the seer, the consultant who reads the system\'s patterns at a depth others cannot reach, the artist whose work is unmistakably sensual, the priestess. Freya-energy is *seidr — pattern-weaving, fate-reading, the magic-of-perception*. The shadow is the worker who has commodified the seidr — turned the gift of prophetic-perception into a saleable service that hollows the practice; or the creative whose unapologetic sensuality has become brand-performance.',
    the_gift: 'Freya gives the recognition that *the goddess of love is also the goddess of war and the goddess of magic, and these are the same goddess*. The same one who wears Brísingamen chooses half the battle-slain. The same one who weeps gold for Óðr also teaches Odin to weave fate. The gift is the refusal of the split — the recognition that the erotic, the martial, and the magical are *one practice in three registers*, and that the goddess who holds them is not partial.',
    the_shadow: 'Freya has been folkish-flattened into "Aryan-blonde fertility-goddess" in 19th-century and modern far-right literature, stripped of the *teacher of seidr* register (because seidr was considered *ergi* — gender-transgressive, queer-coded — and the folkish movements cannot tolerate that dimension). The genuine Freya is *queer-of-practice* — her gift to the Aesir, the magic that Odin himself had to set aside his warrior-gender to learn, is exactly the dimension the supremacist appropriation cannot accommodate. The other shadow: Freya as "the Norse Aphrodite," which reduces her to a love-goddess and strips the war-goddess and seidr-master registers. She is all three, and the reduction is the appropriation.',
    pair_with_rune: 'Fehu — the cattle-rune, the wealth-rune, the rune of moving prosperity and gold; Freya the gold-weeping goddess whose tears are red gold themselves.',
    pair_with_rune_slug: 'fehu',
    pair_with_sabbat: 'Beltane — the May Day fire-festival of love, fertility, and the sacred sexual union; Freya at the peak of her erotic-sovereign register.',
    pair_with_sabbat_slug: 'beltane',
    key_questions: [
      'Where in my life have I split off the erotic, the martial, and the magical into three different selves — and what would it look like to let one Freya-figure hold all three?',
      'What necklace have I worn that I am quietly ashamed of how I came by — and what would it look like to wear it without the shame, sovereign in the choice I made?',
      'For whom or what am I currently weeping golden tears — a relationship, a calling, a lost beloved — and is the weeping still seeking, or has it become the home I am refusing to leave?'
    ]
  },
  {
    slug: 'freyr',
    text: 'Freyr',
    old_norse: 'Freyr',
    family: 'vanir',
    position: 9,
    epithet: 'The Lord · Yngvi-Freyr · Sacred-King · God of Peace and Plenty · Sun-Boar Rider · The Self-Sacrificing Lover',
    source_text: 'Poetic Edda (Skírnismál — the wooing of Gerðr; Lokasenna 35-36 — Loki\'s mockery), Snorri\'s Prose Edda (Gylfaginning 24 — Freyr\'s domains; Skáldskaparmál — the gift of Skíðblaðnir and Gullinbursti), Adam of Bremen on Uppsala (Freyr central beside Thor, 1075 CE), Ynglinga Saga (the Yngling-kings as descendants of Freyr)',
    one_liner: 'The Vanir god of peace, harvest, prosperity, and sacred kingship. Brother of Freya, owner of the golden boar Gullinbursti and the ship Skíðblaðnir that fits in a pocket. He gave away his magical sword for love — and at Ragnarök fights Surtr with only an antler, and falls.',
    meaning: 'Freyr (Freyr — "lord," the masculine of Freyja\'s "lady"; also called *Yngvi-Freyr* in his role as ancestor of the Swedish Yngling royal line) is the second-most-worshipped god in the historical Norse record, particularly in Sweden — Adam of Bremen describes him at Uppsala as central beside Thor, "with his enormous phallus" representing peace and pleasure. He is the brother of Freya, son of Njörðr, and like his sister came to the Aesir as a hostage after the Aesir-Vanir war. He is the god of the *sacred king* — the king whose function is the *fertility of the land*, and whose body and luck are the literal source of the harvest (this is the Frazerian dying-king-as-sacrificial-fertility motif, attested in the Yngling-kings, several of whom were ritually killed in years of poor harvest, *Ynglinga Saga* 15 + 18 + 47). His central myth is the *Skírnismál*: Freyr sat on Hliðskjálf and saw the giantess *Gerðr* and fell in love. He sent his servant Skírnir to woo her — and gave Skírnir his magical self-fighting sword as wedding-gift. Gerðr eventually consented. *And Freyr gave away the sword forever*. At Ragnarök, Freyr fights the fire-giant Surtr with only an antler — and falls. He is the god who *paid for love with his own future survival*. His gifts from the dwarves include the ship Skíðblaðnir (the largest ship ever built, but which folds up small enough to fit in a pouch) and the golden boar Gullinbursti (whose bristles light up the dark).',
    iconography: 'Phallic (Adam of Bremen explicit; the Rällinge statuette, c. 1000 CE from Sweden, depicts him bearded, cross-legged, with erect phallus — one of the only confirmed god-images surviving from the pre-Christian Norse world). Golden boar Gullinbursti at his side. The ship Skíðblaðnir folded into a pocket. Sometimes shown with the antler in place of the sword (the marker of his Ragnarök fate). Crown of grain, harvest-sheaves.',
    invocation: 'Harvest-time. The historical Yngling-kings\' year-blots were dedicated to him for peace and harvest. Modern Heathen invocation: at the *blót* of harvest, with bread, beer, and the first grain. *Hail Freyr, lord, sacred-king, peace-giver, lover-who-gave-the-sword.* Especially called for: prosperity work, peace-keeping in community, the long-marriage practice (Gerðr-and-Freyr is the Eddic portrait of *a love that cost the lover their future, willingly*), and harvest-work of any kind.',
    in_love: 'Freyr in love is *the lover who pays a permanent cost for the beloved* — who gives away the sword that would have saved them, knowing that Ragnarök comes and they will fall. Freyr-energy in a partnership is *love that does not protect itself*. The shadow is the partner who has confused *giving away the sword* with *erasing themselves* — the codependent who gives away their boundaries and then resents the beloved for the loss; or the lover who romanticizes the sacrifice into a martyrdom-aesthetic without the underlying *yes, I chose this*.',
    in_work: 'Freyr in work is the harvest-farmer, the peace-broker, the diplomat, the founder whose company is genuinely a *peace* (not a war), the king whose body is the body of the project. Freyr-energy is *the long sustaining cultivation*. The shadow is the worker who has given away every sword for the relational-harmony of the team and finds themselves at Ragnarök with only an antler — the founder who avoided every fight and now cannot defend the company they built; or the leader who has become the literal sacrifice-king, killed when the harvest fails.',
    the_gift: 'Freyr gives the recognition that *love sometimes costs the future you would otherwise have had, and the love is still worth it*. Skírnir brings Gerðr; the marriage happens; Freyr falls at Ragnarök fighting with an antler. The Eddas do not present this as tragedy — they present it as *the price the sacred king willingly paid*. The gift is the willingness to give away the sword when love asks for it, and to accept the Ragnarök that comes.',
    the_shadow: 'Freyr has been less politically appropriated than the warrior-Aesir (his domain of peace and fertility does not weaponize cleanly). However, the *Yngling-king-descent* mythology has been used in Swedish nationalism (the medieval Yngling dynasty traced descent to Freyr; modern Swedish far-right groups have invoked this lineage). The Rällinge phallic statuette has been censored or downplayed in many modern presentations — Adam of Bremen\'s description was bowdlerized in 19th-century translations. The other shadow: the Freyr-as-generic-fertility-god reduction, which strips the *sacred king who gave away the sword and falls at Ragnarök* register and leaves only the harvest-god, missing the most central and most costly part of his myth.',
    pair_with_rune: 'Ingwaz — the rune of Ing (Yngvi-Freyr); literally Freyr\'s rune in the Elder Futhark. The seed-rune, the sealed potential, the latent harvest waiting for spring.',
    pair_with_rune_slug: 'ingwaz',
    pair_with_sabbat: 'Lughnasadh — the harvest festival; the sacred king at the peak of the grain-cycle, the moment the king becomes the harvest.',
    pair_with_sabbat_slug: 'lughnasadh',
    key_questions: [
      'What sword am I currently being asked to give away for love — and am I confusing the willing-payment with the erasure-of-self?',
      'Where in my life have I become the sacred king — the one whose body the harvest depends on — and have I been letting that role go unnamed while quietly resenting the weight?',
      'What in my life is currently in the Ingwaz stage — sealed, latent, waiting — and is the patience faithful, or has it become avoidance of the planting?'
    ]
  },
  {
    slug: 'hel',
    text: 'Hel',
    old_norse: 'Hel',
    family: 'underworld',
    position: 10,
    epithet: 'Queen of Helheim · Daughter of Loki · Half-Living, Half-Dead · Receiver of the Straw-Dead · The Hidden One',
    source_text: 'Poetic Edda (Völuspá; Baldrs draumar — Odin\'s ride to her hall), Snorri\'s Prose Edda (Gylfaginning 34 — naming her domain; 49 — her conversation with Hermóðr about Baldur), Heimskringla',
    one_liner: 'The queen of the underworld, daughter of Loki and the giantess Angrboða. Half her face is the face of a living woman; half is the face of a corpse. She rules Helheim — the dwelling-place of those who died of sickness, age, or accident, the *non-warrior dead*. The Norse pantheon\'s only female sovereign of the underworld.',
    meaning: 'Hel (the same name as her realm — *Hel* meaning both the queen and the place; etymologically related to "to conceal" — *the hidden one*) is one of the three monstrous children of Loki and the giantess Angrboða (her siblings: the wolf Fenrir and the world-serpent Jörmungandr). Odin cast all three into the cosmos: Fenrir bound, Jörmungandr thrown into the sea around Midgard, and Hel given dominion over the dead in *Helheim* / *Niflhel* (Gylfaginning 34). Her appearance: *half her body is the color of living flesh; half is the color of a corpse* — the perfect emblem of the threshold-state she rules. Her hall is called *Éljúðnir* ("damp-dripping"); her dish is *Hungr* (hunger); her knife is *Sultr* (famine); her bed is *Kör* (sickbed); her bed-curtain is *Blíkjandaböl* ("gleaming bale"). Her realm receives the *strá-daudr* ("straw-dead") — those who died of illness, old age, accident, or any non-violent cause. *Most people, in other words.* Warriors went to Valhalla (Odin) or Folkvangr (Freya); everyone else went to Hel. This is a crucial theological point that is often missed: *Hel was not punishment.* Hel was the ordinary destination of the ordinary dead. The Christian conflation of *Hel* with *Hell* (the same etymology, but the medieval Christian afterlife of punishment grafted onto the Norse word) is a fundamental distortion — the Norse Hel had nothing to do with moral judgment. Her most famous mythic moment: Hermóðr rides to her hall on Sleipnir to plead for Baldur\'s return; Hel agrees on the condition that every living thing must weep for him. The agreement fails (Loki in disguise refuses to weep) and Baldur stays — and *at Ragnarök, Baldur returns from Hel to rule the new world*. Hel is the *holder* of what is waiting, not the destroyer.',
    iconography: 'Half-living, half-dead — the most distinctive iconography in the Norse pantheon. One side of her face / body is the flesh of a living young woman; the other is grey-blue corpse-flesh, sometimes shown as decaying or skeletal. Crown. Sometimes shown enthroned in the damp-dripping hall, with the dish Hungr before her. The dog *Garmr* guards the gate of her realm.',
    invocation: 'Hel is *not* invoked for casual purposes. Modern Heathen practice tends to honor her at *Samhain* (when the veil between worlds thins, when the ordinary dead are remembered) and in the work of grief, ancestor-tending, and integration of mortality. Offer cold water, bread, milk at a grave or at a doorway facing north (her direction). The traditional invocation: *Hail Hel, daughter of Loki, half-living, half-dead, holder of the ordinary dead, keeper of Baldur until the new world.* Especially called by those doing deep grief-work, those tending the dying, hospice workers, those integrating their own mortality.',
    in_love: 'Hel in love is the partner who is *not afraid of the dying-parts of you* — who can sit beside the half-corpse face of grief, illness, depression, fear-of-death, and simply hold. Hel-energy in a partnership is *the willingness to be in the damp-dripping hall together*, not to fix it, not to bypass it, just to be there. The shadow is the partner who has confused this with *staying in the underworld permanently* — who has made the relationship into Helheim and never lets either of you come back up. Or the partner who weaponizes their grief, illness, or death-anxiety as a permanent claim on the other\'s presence.',
    in_work: 'Hel in work is the hospice worker, the funeral director, the grief counselor, the trauma therapist, the death-doula, the obituary writer, the editor who sits with the failed manuscript and helps it die well. Hel-energy is *the dignified holding of what is dying*. The shadow is the worker who has become so identified with the underworld that they cannot also live in the upper world — who only knows how to be in the damp-dripping hall, and is now suffering the unmetabolizable secondary grief of every death they have witnessed.',
    the_gift: 'Hel gives the recognition that *the ordinary death is not punishment*. The straw-dead — the people who died in their beds, of cancer, of old age, of car accidents, of the slow ordinary collapse of bodies — they did not lose. They simply went where most people go. The Norse cosmology refuses the warrior-aristocracy theology that the only good death is a violent one; Hel\'s realm holds the schoolteachers and the grandmothers and the bakers and the people who were just tired at the end. The gift is the dignified holding. And the gift is the *waiting*: Hel held Baldur until the new world, and she will hold what you have lost until whatever your new world is.',
    the_shadow: 'Hel has been Christianized into *Hell* — the most consequential single misappropriation in the entire Norse pantheon. The Christian missionaries used the existing Norse word for "place of the ordinary dead" to translate the Greek *Gehenna* / *Hades*, and a thousand years of Christian theology grafted *eternal punishment* onto a word that had never meant anything of the kind. Recovering the pre-Christian Hel is one of the most important moves of contemporary Heathenry. The other shadow: Hel has been horror-aestheticized — the "half-corpse" iconography has been used in shock-art and gothic fashion in ways that strip her *holder of the ordinary dead* dimension and leave only the visual gimmick. The real Hel is *uncomfortably ordinary*. She holds the people you loved who died in regular ways, and she does it without judgment.',
    pair_with_rune: 'Eihwaz — the yew-rune; the tree of death-and-rebirth (the yew is poisonous and immensely long-lived, the graveyard-tree); the rune that holds the threshold between worlds.',
    pair_with_rune_slug: 'eihwaz',
    pair_with_sabbat: 'Samhain — the festival of the ancestors and the thinning veil; Hel as the queen of the realm being honored, the holder of those crossing back in remembrance.',
    pair_with_sabbat_slug: 'samhain',
    key_questions: [
      'What ordinary death am I refusing to honor as ordinary — a parent, a friend, a relationship — because the culture I live in only honors the heroic, the violent, the explainable kind?',
      'Whom in my life am I being asked to sit beside in the damp-dripping hall right now — without fixing, without bypassing, just present — and have I been finding reasons to leave the room?',
      'What in me is currently half-living, half-dead — the part of myself in transition I have not made peace with — and what would it look like to let Hel hold it with dignity rather than to demand it resolve to one side?'
    ]
  }
]

const GOD_BY_SLUG: Record<string, NorseGodGuide> = Object.fromEntries(NORSE_GODS.map((g) => [g.slug, g]))

export const NORSE_GOD_SLUGS = NORSE_GODS.map((g) => g.slug)

export function isNorseGodSlug(s: string): boolean {
  return s in GOD_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const GOD_ACCENT: Record<string, { c1: string; c2: string; label: string; glyph: string }> = {
  odin:     { c1: '#3a4a6a', c2: '#10182a', label: 'Aesir · the Allfather',         glyph: '🐦‍⬛' },
  thor:     { c1: '#c44a2a', c2: '#7a1808', label: 'Aesir · the thunderer',         glyph: '🔨' },
  loki:     { c1: '#6a4a2a', c2: '#2a1808', label: 'Aesir · the trickster',         glyph: '🔥' },
  frigg:    { c1: '#c8b07a', c2: '#7a5a20', label: 'Aesir · the queen-allmother',   glyph: '🗝️' },
  tyr:      { c1: '#7a7a8a', c2: '#3a3a48', label: 'Aesir · the lawspeaker',        glyph: '⚔️' },
  heimdall: { c1: '#d0c8b8', c2: '#6a6458', label: 'Aesir · the watcher',           glyph: '📯' },
  baldur:   { c1: '#e8c878', c2: '#a08a30', label: 'Aesir · the shining one',       glyph: '☀️' },
  freya:    { c1: '#d8a868', c2: '#8a5818', label: 'Vanir · the lady of seidr',     glyph: '🐈‍⬛' },
  freyr:    { c1: '#a8b878', c2: '#586828', label: 'Vanir · the sacred king',       glyph: '🌾' },
  hel:      { c1: '#586878', c2: '#1a2030', label: 'Underworld · the half-dead',    glyph: '🌑' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function norseGodPageHTML(slug: string): string {
  const r = GOD_BY_SLUG[slug]
  if (!r) return ''
  const accent = GOD_ACCENT[r.slug] || { c1: '#888', c2: '#444', label: '', glyph: '✦' }
  const readingHref = `/gab44/reading?ref=norse-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.old_norse)}) — Norse God · ${r.position}/10 · gab44 ✨`
  const description = `Who ${r.text} (${r.old_norse}) actually is. ${escapeHtml(r.epithet)}. Source-text honest — ${escapeHtml(r.source_text.split(',')[0])}. Iconography, invocation, in love, in work, the gift, the shadow, paired rune and sabbat.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Norse Gods', item: `${SITE_URL}/gab44/norse-gods` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/norse-gods/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — Norse god, ${r.position}/10`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/norse-gods/${slug}`,
        about: `${r.text} Norse god, Old Norse deity, ${r.family}`
      }
    ]
  })

  const otherGodsHtml = NORSE_GODS.filter((q) => q.slug !== slug).map((q) => {
    const acc = GOD_ACCENT[q.slug] || { c1: '#888', c2: '#444', glyph: '✦' }
    return `<a class="ph-mini" href="/gab44/norse-gods/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${acc.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/norse-gods/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/norse-gods/${slug}" />
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
  .hero .oldnorse { font-size: 22px; opacity: 0.85; margin: 0 0 6px; font-style: italic }
  .hero .epithet { font-size: 14px; opacity: 0.85; margin: 0 0 12px; font-style: italic }
  .hero .family { font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
  .source-box {
    margin: 18px 0 22px; padding: 18px 20px;
    background: var(--bg-2); border-left: 3px solid var(--c1);
    border-radius: 6px; font-size: 13px; color: var(--fg-dim);
  }
  .source-box strong { color: var(--fg); font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; display: block; margin-bottom: 6px; font-weight: 600 }
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
  .other-gods { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/norse-gods">norse gods</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="oldnorse">${escapeHtml(r.old_norse)}</p>
    <p class="epithet">${escapeHtml(r.epithet)}</p>
    <p class="family">${escapeHtml(accent.label)} · ${r.position} of 10</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <div class="source-box"><strong>Source texts</strong>${escapeHtml(r.source_text)}</div>

  <section><h2>Who ${escapeHtml(r.text)} actually is</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>Iconography</h2><p>${escapeHtml(r.iconography)}</p></section>
  <section><h2>How to invoke ${escapeHtml(r.text)}</h2><p>${escapeHtml(r.invocation)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>The gift</h2><p>${escapeHtml(r.the_gift)}</p></section>
  <section><h2>The shadow</h2><p>${escapeHtml(r.the_shadow)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="/gab44/runes/${r.pair_with_rune_slug}"><span class="lbl">Rune</span>${escapeHtml(r.pair_with_rune)}</a>
      <a href="/gab44/sabbats/${r.pair_with_sabbat_slug}"><span class="lbl">Sabbat</span>${escapeHtml(r.pair_with_sabbat)}</a>
      <a href="/gab44/norse-gods"><span class="lbl">10 gods</span>The whole pantheon — who is who</a>
      <a href="/gab44/devas"><span class="lbl">12 devas</span>The Hindu peer-pantheon</a>
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
    <h3>Want a $9 reading that names the Norse god walking with you right now?</h3>
    <p>Your chart + the Norse archetype most present in this chapter of your life — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="other-gods">${otherGodsHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 10 Norse gods · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function norseGodsIndexHTML(): string {
  const cards = NORSE_GODS.map((r) => {
    const acc = GOD_ACCENT[r.slug]
    return `<a class="card" href="/gab44/norse-gods/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${r.position} / 10</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.old_norse)}</span></h3>
      <p class="fam">${escapeHtml(acc.label)}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = "The 10 Norse Gods — Aesir, Vanir, Helheim, source-honest · gab44 ✨"
  const description = "Hand-written guides to the 10 most-searched Norse gods — Aesir court (Odin, Thor, Loki, Frigg, Tyr, Heimdall, Baldur), Vanir (Freya, Freyr), Helheim (Hel). Eddic source-text honest, lineage-named, shadow-honest about folkish/nazi appropriation. The beings behind every rune already on gab44 + the Norse strand of the Wheel of the Year."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/norse-gods" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 980px; margin: 0 auto; padding: 32px 22px 80px }
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
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px }
  .card {
    --c1:#888; --c2:#444; position: relative;
    display: block; padding: 22px 18px; border-radius: 14px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none;
    box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    transition: transform 0.15s ease;
  }
  .card:hover { transform: translateY(-2px) }
  .card .glyph { font-size: 36px; line-height: 1 }
  .card .pos { position: absolute; top: 14px; right: 16px; font-size: 11px; letter-spacing: 0.12em; opacity: 0.75 }
  .card h3 { margin: 10px 0 4px; font-size: 22px }
  .card h3 .san { font-size: 15px; opacity: 0.78; margin-left: 6px; font-style: italic }
  .card .fam { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; opacity: 0.78; margin: 0 0 8px }
  .card .lead { font-size: 14px; opacity: 0.92; margin: 0; font-style: italic }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ norse gods</nav>
  <h1>The 10 Norse <span class="accent">Gods</span> — the beings behind the runes</h1>
  <p class="sub">The Elder Futhark on gab44 invokes them silently in every cast. The Wheel of the Year inherits Yule from Bede and the Hákonar saga. This page is the closing of that gap: the 10 Norse gods the practice has been touching all along, named from the Eddas, sourced from Snorri, and named honestly in their shadows as well as their gifts.</p>

  <div class="intro">
    <h3>How to read this map</h3>
    <p><strong>Three families.</strong> The Aesir court (Odin, Thor, Loki, Frigg, Tyr, Heimdall, Baldur — sky-court, Asgard). The Vanir (Freya, Freyr — the older earth-and-fertility lineage that came to the Aesir as hostages after the Aesir-Vanir war and brought seidr-magic with them). The Underworld (Hel, daughter of Loki, queen of the ordinary dead — the figure most distorted by Christianization).</p>
    <p><strong>Each guide is source-honest.</strong> The Eddic passage, the Snorri reference, the Tacitus continental-Germanic root, the lineage-keepers (Codex Regius c. 1270, Snorri 1220, Saxo c. 1200, Adam of Bremen 1075), the modern shadow named explicitly — folkish/SS appropriation per god where applicable, Marvel-flattening where applicable, Christianization where applicable.</p>
    <p><strong>How to use this funnel.</strong> Read the god your life is currently asking about — the one whose function is most loud in your present chapter. Each page pairs with a rune (already on gab44) and a sabbat (already on gab44), turning every god into a 3-funnel cross-link node.</p>
  </div>

  <div class="grid">${cards}</div>

  <div class="reading-strip">
    <h2>Want your chart read alongside the Norse god walking with you?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the Norse god archetype most active in your current chapter alongside sun/moon/rising. <a href="/gab44/reading?ref=norse-gods-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 10 Norse gods · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}
