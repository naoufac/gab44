// Olympian Gods — the canonical 12 Olympians — SEO funnel.
// /gab44/olympians (index) + /gab44/olympians/{slug}.
//
// Peer to Norse Gods and Hindu Devas: every zodiac sign on gab44 already
// invokes these beings in its archetypal substrate (Aries is Ares, Libra is
// Aphrodite, Sagittarius is Zeus, Pisces is Poseidon, etc.). This funnel
// names the 12 Olympians the entire western-astrology stack has been
// invoking silently.
//
// Three-family taxonomy:
//  - Cronid sovereigns (Zeus, Hera, Poseidon, Demeter) = the four siblings
//    born of Cronos and Rhea who divided the cosmos after the Titanomachy.
//  - Bright Olympians (Athena, Apollo, Artemis, Aphrodite) = the radiant
//    children of Zeus (Aphrodite by alternate Hesiod tradition from Uranus's
//    sea-foam).
//  - Workshop & ecstatic (Ares, Hephaestus, Hermes, Dionysus) = the active,
//    transformative, mobile, dying-and-rising Olympians.
//
// Source-honest from Homer (Iliad + Odyssey c. 750 BCE), Hesiod (Theogony +
// Works and Days c. 700 BCE), the Homeric Hymns (c. 7th-6th c. BCE), Pindar,
// the 5th-c. tragedians (Aeschylus, Sophocles, Euripides), Apollodorus'
// Library (1st-2nd c. CE), Ovid's Metamorphoses (8 CE), Pausanias'
// Description of Greece (2nd c. CE), the Orphic Hymns (c. 2nd-3rd c. CE).
// Shadow-honest: 19th-c. Hellenist-supremacist appropriation, Olympic-Games
// erasure of other pantheons, Nietzschean Apollonian/Dionysian binary,
// commodified Aphrodite, sanitized Zeus, fascist Pallas-Athena.

import { SITE_URL } from '@/lib/identity'

export interface OlympianGuide {
  slug: string
  text: string
  greek: string
  family: 'cronid' | 'bright' | 'workshop'
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
  pair_with_sign: string
  pair_with_sign_slug: string
  pair_with_planet: string
  pair_with_planet_slug: string
  key_questions: [string, string, string]
}

export const OLYMPIANS: OlympianGuide[] = [
  {
    slug: 'zeus',
    text: 'Zeus',
    greek: 'Ζεύς',
    family: 'cronid',
    position: 1,
    epithet: 'King of the gods · Sky-father · Cloud-gatherer · Thunderer · Aegis-bearer · Xenios (god of guest-friendship) · Horkios (god of oaths)',
    source_text: 'Homer Iliad (passim, esp. Book 1 + Book 8 — the golden chain), Hesiod Theogony 453-506 (the swallowing by Cronos) + 617-735 (the Titanomachy), Homeric Hymn to Zeus (23), Pindar Olympian Odes, Aeschylus Prometheus Bound, Apollodorus Library 1.1-1.2',
    one_liner: 'King of the gods. Sky-father, cloud-gatherer, the lightning-bearer who overthrew his father Cronos and divided the cosmos with Poseidon and Hades. The Olympic patron — the founder of the Games at Olympia — and the lord of oaths, guest-friendship, and the order of the cosmos. The god whose justice is both the lightning and the law.',
    meaning: 'Zeus (Ζεύς — from Proto-Indo-European *Dyēus, "sky-father," cognate with Sanskrit Dyaus, Latin Iuppiter, Norse Týr in its older horizon) is the youngest son of the Titans Cronos and Rhea. Cronos, fearing the prophecy that his children would overthrow him, swallowed each newborn — Hestia, Demeter, Hera, Hades, Poseidon — until Rhea hid the infant Zeus in a Cretan cave and gave Cronos a stone in swaddling clothes to swallow instead (Theogony 453-506). Zeus grew, forced Cronos to vomit up his siblings, and waged the ten-year *Titanomachy* against his father and the Titans, emerging victorious with the Hundred-Handers and the Cyclopes (who forged him the thunderbolt). After the war the three Cronid brothers cast lots: Zeus drew the sky, Poseidon the sea, Hades the underworld; the earth and Olympus they shared (Iliad 15.187-193). Zeus is the *guarantor of the cosmic order*. He is god of oaths (sworn upon the river Styx and binding even him); god of guest-friendship (*xenia*, the most sacred Greek institution — Paris violated it and the Trojan War followed); god of the assembly (the Olympic Assembly). He is also the rapist of Europa, Leda, Io, Callisto, Danaë, Antiope, and dozens more — the mythology records this baldly, and any honest reading of Zeus must hold both the *lawgiver* and the *serial sexual violator* in the same frame. His children fill the rest of the pantheon: Athena, Apollo, Artemis, Ares, Aphrodite (in Homer\'s line), Hermes, Hephaestus (in some traditions), Dionysus. The Olympic Games were celebrated in his honor at Olympia from 776 BCE; the cult-statue by Phidias was one of the Seven Wonders. The Roman *Iuppiter* (Jupiter) is the direct continuation.',
    iconography: 'Mature bearded man, regal, in his prime. Lightning bolt in his right hand. Eagle at his feet or perched on his scepter (the eagle is *his* bird, who carried off Ganymede and announced his judgments). Aegis (the goat-skin shield, sometimes shared with Athena). Throne on Olympus. Sometimes the bull (Europa) or swan (Leda) or shower of gold (Danaë) — the metamorphoses through which he conducted his many rapes. Crown of oak leaves (the oak was sacred to him, especially at Dodona, his oldest oracle).',
    invocation: 'Thursday (Latin *dies Iovis*, French *jeudi*, the day of Jupiter/Zeus — the *Jovian* day across Romance languages). Offer wine, olive oil, and the *first portion* of any meal (the libation poured to Zeus before any feast, ritualized as *aparchai*). At a doorway or threshold — *Zeus Herkeios* was the guardian of the household enclosure, the god of the courtyard altar. The traditional invocation in Greek revival practice: *Ὦ Ζεῦ πάτερ, ὑψιβρεμέτα* (O father Zeus, high-thundering). Especially called when a guest arrives (he is *Xenios*, the patron of hospitality), when an oath is being sworn (he is *Horkios*), when a refugee or supplicant seeks protection (he is *Hikesios*, the protector of suppliants — Aeschylus made an entire trilogy on this).',
    in_love: 'Zeus in love is *the partner whose attention is sovereign* — the one whose noticing makes you feel chosen by the sky itself. The honest reading of Zeus also requires naming the *predatory* dimension of this register: Zeus-energy in its shadow form is the partner whose "sovereign attention" is actually serial sexual conquest dressed up as fate (Europa carried off, Leda raped in swan-form, Io transformed into a cow to escape Hera\'s wrath). The legitimate Zeus-register in a partnership is *the sky-roof under which the marriage shelters* — the partner whose protection feels cosmically warranted. The shadow is the partner who has confused the sky-throne with permission to take whatever they want.',
    in_work: 'Zeus in work is the CEO, the head of state, the chief justice — the one whose seat carries the binding authority for the whole assembly. Zeus-energy is *guarantor of order*. He is the lightning *and* the law — both the punishment and the legal frame that justifies it. The shadow is the leader who has confused *holding the seat* with *being above the law* — the executive who exempts themselves from the rules they enforce, the founder whose Olympus has become a private kingdom rather than a covenanted order.',
    the_gift: 'Zeus gives the recognition that *order requires a binding authority*. The cosmos does not run on consent alone; somebody has to hold the thunderbolt, somebody has to enforce the oath, somebody has to receive the supplicant\'s plea. The gift is the willingness to be the one in the room who *takes the seat* — who holds the binding authority and is willing to throw the lightning when *xenia* is violated, when the oath is broken, when the order requires defense.',
    the_shadow: '19th-century European colonial powers weaponized the Olympic pantheon — Zeus especially — as charter for "western civilization" as the inheritor of Greco-Roman supremacy. The Olympic Games revival (Pierre de Coubertin, 1896) explicitly framed itself as a return to "Hellenic ideals" while systematically erasing the indigenous, African, and Asian athletic-religious traditions that predate and surround the Olympic. The Nazi Olympics of 1936 weaponized Zeus-statuary as charter for Aryan-supremacist mythology (Leni Riefenstahl\'s *Olympia*). The other shadow: Zeus\'s rapes have been sanitized in 19th-c. academia and continue to be in modern pop culture (Percy Jackson, Hercules-Disney) — turning serial sexual violation into "amorous adventures" is a structural erasure. The Eddic-honest Zeus is the lightning-bearer *and* the serial rapist; reading him requires holding both.',
    pair_with_sign: 'Sagittarius — the Jovial fire-sign of the lightning-arrow; expansive, oath-keeping, sky-questing.',
    pair_with_sign_slug: 'sagittarius',
    pair_with_planet: 'Jupiter — the planet of Zeus by direct Roman naming; the largest planet, the king of the celestial bodies, the expansive Jovian benefic.',
    pair_with_planet_slug: 'jupiter',
    key_questions: [
      'Where in my life am I being called to take the Zeus-seat — to hold the binding authority that the room is asking for — and have I been avoiding it because the lightning would actually have to be thrown?',
      'Where has my "sovereign attention" become predatory — the noticing that takes rather than gives — and what would Hera, Athena, or Aphrodite say to me about the difference?',
      'Whose Olympus am I quietly trespassing on, treating someone else\'s domain as my own to legislate from — and what would it look like to honor *xenia* there instead?'
    ]
  },
  {
    slug: 'hera',
    text: 'Hera',
    greek: 'Ἥρα',
    family: 'cronid',
    position: 2,
    epithet: 'Queen of the gods · Ox-eyed · Golden-throned · White-armed · Wife of Zeus · Goddess of marriage, women, childbirth, sovereignty',
    source_text: 'Homer Iliad (Book 1, 14, 15 — her deception of Zeus on Mount Ida), Hesiod Theogony 921-923 + 927-929, Homeric Hymn to Hera (12), Pausanias Description of Greece 2.17 (the Heraion at Argos), Apollodorus Library, Callimachus Hymns',
    one_liner: 'Queen of the gods. Sister and wife of Zeus, goddess of marriage, women, sovereignty, and childbirth. The vengeful pursuer of Zeus\'s lovers and bastards — and the goddess whose temple at Samos and Heraion at Argos predate most Olympian sanctuaries. Worshipped at Argos a thousand years before Athens worshipped Athena.',
    meaning: 'Hera (Ἥρα — etymology disputed, possibly meaning "lady" or "year," cognate with the seasonal cycles she oversaw) is the daughter of Cronos and Rhea, sister and wife of Zeus. She is the *senior queen* of Olympus, presiding over marriage, women\'s lives, childbirth, and sovereignty itself. The popular and Hollywood reading of Hera as "the jealous wife of Zeus" is real to the texts but misses the older theological register: Hera was worshipped at Argos and Samos *before* Zeus, in cult-sites that suggest she was a pre-Olympian Great Goddess whose primacy was demoted by the patriarchalization of the pantheon. Pausanias (Description of Greece 2.17) records the *Heraion at Argos* — one of the oldest Greek temples — as her chief sanctuary. The *Hieros Gamos* (sacred marriage of Hera and Zeus) was reenacted annually at the Heraion in a ritual that marked the renewal of the cosmic order. The Iliad shows her in full power: in Book 14 she seduces Zeus on Mount Ida — borrowing Aphrodite\'s girdle — to distract him from the battlefield so that the Greeks can win. She bore Zeus four children: Ares (war), Hephaestus (the smith — whom she cast off Olympus in disgust at his lameness, or alternatively bore parthenogenically in retaliation for Zeus producing Athena from his head — Theogony 927-929), Hebe (cup-bearer of the gods), and Eileithyia (goddess of childbirth). Her persecution of Zeus\'s lovers (Io transformed into a cow, Semele incinerated, Heracles given his Twelve Labors as punishment) is the recurring mythic register — but Hera was also the *bride-goddess*: every Greek marriage was performed under her patronage, every wife wore the bridal veil that was her sign, every childbirth invoked her daughter Eileithyia (whom she controlled). The Roman *Juno* is her direct continuation. Hera is on gab44 already as *Juno* (the asteroid of marriage commitment, /gab44/juno).',
    iconography: 'Mature, regal woman, crowned with the *polos* (high cylindrical headdress) or the *stephanos* (gold diadem). Peacock at her side (her sacred bird, whose tail-feathers carry the hundred eyes of her servant Argus, slain by Hermes — Ovid Metamorphoses 1.622-723). Cuckoo (the bird Zeus first appeared to her as in courtship). Lily (her flower). Pomegranate (fertility-symbol). Throne — the golden throne is her direct emblem. Veil drawn over her hair (the bridal veil is *her* sign). Sometimes wielding a scepter topped with a cuckoo or lotus.',
    invocation: 'June — the month named after her Roman form, *Juno*, the traditional month of weddings in the Roman and continuing-Christian-European calendar precisely because Juno/Hera presided over marriage. Offer pomegranate, white flowers (lilies especially), milk, and the wedding ring. At the household hearth or at the marriage-bed. The traditional Greek revival invocation: *Πότνια Ἥρη, χρυσόθρονε* (Sovereign Hera, golden-throned). Especially called by women entering or sustaining marriage; by women in childbirth (her daughter Eileithyia is the direct attendant); by anyone working with the *sovereignty* register — the dignity of holding a seat of authority that is yours by birth or by binding vow.',
    in_love: 'Hera in love is the partner who *holds the marriage as a sacred institution* — for whom the wedding vow is a cosmic structure to be honored, not a private contract to be renegotiated. Hera-energy in a partnership is *covenanted sovereignty* — the queen who is also the wife who is also the priestess of the bond itself. The shadow is the partner whose investment in the marriage-as-institution becomes vengeful possessiveness — Hera\'s persecution of Zeus\'s lovers is the warning text. The other shadow: the partner who has confused *holding the throne* with *requiring the other to be the king they refuse to be* — the wife whose sovereignty depends on a husband she resents.',
    in_work: 'Hera in work is the senior partner, the chair of the board, the matriarch of the family business, the founder\'s wife who actually built the company — the figure of *queenship by tenure*. Hera-energy is *recognition of the senior seat*. The shadow is the queen whose authority is contingent on the king, who has spent decades building the household and now resents that the public credit went to the husband-figure who wandered while she stayed.',
    the_gift: 'Hera gives the recognition that *covenant is its own sovereignty*. The wedding vow, the household-tending, the patient holding of the institution through every test — this is not subordinate work. The Heraion at Argos predates the Parthenon at Athens by centuries. The pre-Olympian Great Goddess whose primacy was demoted is still the *senior* presence. The gift is the dignity of the long covenant, the queen who is the queen because she has held the throne while everyone else came and went.',
    the_shadow: 'Hera has been *uniquely* flattened by patriarchal myth-retelling — reduced from the pre-Olympian Great Goddess of Argos to "Zeus\'s jealous wife." The Disney-Hercules version is the cleanest example of this flattening (Hera is recast as a kindly stepmother, Hades as the villain, Heracles as the wholesome hero) — but academic mythography has often participated in the same erasure. The other shadow: the *Hera-as-perfect-housewife* register in 19th-c. Romantic and 20th-c. fascist literature, which weaponized her as a model of patriarchal-marriage-norm. The third shadow: Hera-fans-in-mythology-blogs who have *over-corrected* in the other direction and treated her as a #girlboss, stripping the genuinely-cruel vengeance against Io, Semele, and Heracles (innocents who suffered because of *Zeus\'s* violations) from the figure. The real Hera holds both — the senior queen *and* the vengeful pursuer — and reading her requires both.',
    pair_with_sign: 'Leo — the regal-sovereign sign, the queen of the zodiac; the lion-throne and the gold-diadem are Hera\'s register at her most public.',
    pair_with_sign_slug: 'leo',
    pair_with_planet: 'Jupiter — the planet of her husband Zeus, which she co-rules by consort-right; in classical astrology Jupiter governs the marriage-house when Hera is the working archetype.',
    pair_with_planet_slug: 'jupiter',
    key_questions: [
      'Where in my life am I being called to take the Hera-seat — the senior covenanted authority — and have I been deferring it to a Zeus-figure who has not earned it?',
      'Whom in my life am I punishing as Io, Semele, or Heracles — punishing the *innocent third party* for the violations of the actual figure whose betrayal I cannot confront directly?',
      'Where has my marriage / partnership / institutional bond become a throne I rule from rather than a covenant I tend — and what would the Heraion at Argos, the millennium-older sanctuary, say to me about the difference?'
    ]
  },
  {
    slug: 'poseidon',
    text: 'Poseidon',
    greek: 'Ποσειδῶν',
    family: 'cronid',
    position: 3,
    epithet: 'Earth-shaker · Lord of the sea · Storm-bringer · Father of horses · Dark-haired · Holder of the trident · Cursed Odysseus across ten years of homecoming',
    source_text: 'Homer Iliad (Book 13 — his intervention for the Greeks) + Odyssey (Books 1, 5, 9 — the curse on Odysseus, the Cyclops Polyphemus), Hesiod Theogony 453-506, Homeric Hymn to Poseidon (22), Plato Critias (the Atlantis myth), Pausanias 7.21 + 2.30 (the contest with Athena for Athens), Apollodorus Library 1.4 + 3.14',
    one_liner: 'Earth-shaker, lord of the sea, father of horses. The brother of Zeus and Hades who drew the sea by lot after the Titanomachy. The god whose trident lifts and breaks ships, whose anger is the tsunami, whose curse on Odysseus took ten years to lift. The temperamental god of the unbounded element.',
    meaning: 'Poseidon (Ποσειδῶν — etymology disputed, possibly "lord of the earth/waters" or "husband of the goddess of the earth," reflecting his archaic association with both earth-quake and sea) is the second-born son of Cronos and Rhea (after Hestia and Demeter, before Hera, Hades, and Zeus — Hesiod\'s ordering). After the Titanomachy he drew the sea by lot, leaving the sky to Zeus and the underworld to Hades. He lives in the palace of *Aegae* under the Aegean Sea (Iliad 13.21). His authority is over the *unbounded element*: the sea (storm, calm, navigation, drowning), the earthquake (the seismic upheaval, his epithet *Ennosigaios* — "earth-shaker"), and *horses* (he created the horse, either by striking the earth with his trident or by mating with Demeter in mare-form — Pausanias 8.42; the Olympic Equestrian Games were held in his honor at Isthmia). His weapon is the *trident* (originally a fishing-spear, the fisherman\'s tool elevated to a divine emblem). His character in the Iliad and Odyssey is *temperamental* — quick to anger, slow to forgive, vengeful when crossed. The signature Poseidon-story is the *curse on Odysseus*: Odysseus blinded the Cyclops Polyphemus (Poseidon\'s son) and Poseidon swore that Odysseus would never reach home, or would reach it broken — the ten-year *Odyssey* is the working-out of that curse (Odyssey 9.526-535). He contested Athens against Athena: he offered the city the gift of salt-water (or a war-horse, sources vary), Athena offered the olive tree, the citizens chose the olive, and Poseidon\'s wounded pride flooded the Thriasian plain (Pausanias 1.24). Plato\'s *Critias* names him as the founder-god of Atlantis (the lost continent he sired ten kings on with the mortal Cleito). He is the father of *Theseus* (or Aegeus, depending on tradition), Triton, the Cyclopes Polyphemus and others, the wing-horse Pegasus (by Medusa). The Roman *Neptune* is his direct continuation.',
    iconography: 'Mature bearded man, dark-haired (his epithet *kyanochaites*, "dark-haired"). Trident in right hand. Sometimes nude to the waist (the sea-god\'s body is exposed to its element). Riding in a chariot pulled by hippocampi (horse-fish hybrids) or by sea-horses. Sometimes wreathed in seaweed. The dolphin and the horse are his sacred animals. The bull is also sacred (the Cretan Bull he sent to Minos, which Theseus later killed as the Minotaur\'s father). His palace is at *Aegae*; his shrine at *Isthmia* (the Isthmian Games were celebrated in his honor every two years).',
    invocation: 'Friday is Aphrodite\'s, Wednesday is Hermes\', but Poseidon has no single weekday — he is honored *at the shore*. The traditional offering is wine poured into the sea (the *libation to the lord of the depths*) and the *first fish* of a catch. At a river-mouth, at a harbor, before a sea-voyage, before a long horse-ride. The traditional Greek revival invocation: *Ποσείδαον γαιήοχε κυανοχαῖτα* (Poseidon, earth-holder, dark-haired). Especially called by sailors, by people in earthquake-zones, by riders of horses, by those grieving a drowning, by those processing rage that has nowhere to land (Poseidon is the god of *unbounded anger*, and a sea-offering at the shore can be a real container for it).',
    in_love: 'Poseidon in love is the partner who carries *the unbounded element* — whose moods are the weather, whose anger when crossed is the tsunami, whose tenderness when calm is the wide-open Mediterranean. Poseidon-energy in a partnership is *largeness without containment* — the partner whose feelings are real and enormous and not always rateable to the situation. The shadow is the partner whose moods drown the other one, whose vengeance for small slights becomes a ten-year Odyssey, whose temperament has been mistaken for "passion" when it is actually emotional dysregulation that requires real practice to bound. Poseidon and Demeter\'s rape-myth (he chased her, she shape-shifted into a mare, he caught her by becoming a stallion) is the cautionary register here.',
    in_work: 'Poseidon in work is the temperamental founder, the volatile artist, the captain whose ship runs because of *and despite* his moods. Poseidon-energy is *generative volatility* — the work that comes from the unbounded element and could not come from the contained one. The shadow is the worker whose tantrums have become structural, whose team has organized itself entirely around managing the storm, whose *Odyssey-curse* falls on subordinates who blinded the wrong Cyclops at the wrong meeting.',
    the_gift: 'Poseidon gives the recognition that *some elements cannot be contained, only honored*. The sea cannot be made into a swimming-pool; the earthquake cannot be legislated away; the horse cannot be turned into a bicycle. The gift is the willingness to live with the unbounded — to pour the wine into the sea, to feel the seismic shift in the marriage and not pretend it is a tremor, to ride the horse rather than tame it.',
    the_shadow: 'Poseidon has been Hollywood-flattened into the "angry sea-god" — Aquaman, the Pirates-of-the-Caribbean storm, the Disney-Hercules background villain. The Eddic-honest Poseidon is more complex: he is *also* the patron of athletes, the founder of Atlantis, the father of horses, the brother whose vote at the Olympic assembly mattered as much as Zeus\'s. The other shadow: the *Cthulhu-mythos* horror-aestheticization of "the deep ones" has bled back into Poseidon-imagery and made the god of the sea into a generic cosmic-horror figure, stripping his *Olympian assembly-member* register. The third shadow: the Atlantis-myth in modern conspiratorial-occult literature (Edgar Cayce, Madame Blavatsky) has been weaponized as a charter for Aryan-supremacist "lost-superior-race" narratives that have nothing to do with Plato\'s actual text and that the genuine Plato-scholarship has spent a century repudiating.',
    pair_with_sign: 'Pisces — the watery dissolution-sign, the two-fish swimming in opposite directions; Poseidon\'s element is the Piscean element by direct astrological assignment.',
    pair_with_sign_slug: 'pisces',
    pair_with_planet: 'Neptune — the planet of Poseidon by direct Roman naming; the boundary-dissolving outer planet, the unbounded element of the modern astrological frame.',
    pair_with_planet_slug: 'neptune',
    key_questions: [
      'Where in my life is an unbounded element — a grief, a rage, a longing — that I have been trying to contain in a swimming-pool when it is actually a sea?',
      'Whom in my life am I currently subjecting to a ten-year Odyssey of my own wounded pride — punishing the long-traveling other for a Cyclops-blinding that they did not entirely intend?',
      'What part of me is the horse Poseidon created — the wild creature that needs to be ridden, not tamed — and have I been spending years trying to make it a bicycle?'
    ]
  },
  {
    slug: 'demeter',
    text: 'Demeter',
    greek: 'Δημήτηρ',
    family: 'cronid',
    position: 4,
    epithet: 'Grain-mother · The fair-haired · Bringer of seasons · Mistress of the Eleusinian Mysteries · Mother of Persephone · The grieving one',
    source_text: 'Homeric Hymn to Demeter (the foundational text, c. 7th c. BCE — the rape of Persephone and the founding of the Mysteries), Hesiod Theogony 453-506 + 912-914, Pausanias 1.38 + 8.25 (the Eleusinian sanctuary and the Black Demeter of Phigalia), Pindar fragments on the Mysteries, Ovid Metamorphoses 5.341-661',
    one_liner: 'Grain-mother. Goddess of the harvest, the cultivated earth, the cycles of seed and sprout. The Eleusinian Mysteries — the 2000-year-running mystery-cult of antiquity — were celebrated in her name. The mother whose grief at Persephone\'s abduction by Hades turned the seasons cold, and whose mystery-rite promised the initiate a better death.',
    meaning: 'Demeter (Δημήτηρ — "earth-mother" or "grain-mother," from *dā/gē* "earth" + *mētēr* "mother") is the second daughter of Cronos and Rhea, sister of Hestia, Hera, Hades, Poseidon, and Zeus. Her domain is the *cultivated* earth — the grain-field specifically, as distinct from Gaia\'s primordial earth. She taught humanity agriculture (her sacred grain is wheat); the *Thesmophoria* (a three-day women-only festival in autumn) and the *Eleusinian Mysteries* (the most important mystery-cult of antiquity, run continuously at Eleusis from at least the 8th c. BCE until Theodosius shut it down in 392 CE) were her chief rites. Her central myth is the *Rape of Persephone* (Homeric Hymn to Demeter): her daughter Persephone (also called Kore, "the maiden") was gathering flowers when Hades opened the earth and abducted her into the underworld. Demeter wandered the earth searching for her, refusing food and rest. In her grief she came to Eleusis disguised as an old woman, was taken in by Queen Metaneira, tried to make her son Demophoon immortal by placing him in the fire (interrupted by Metaneira\'s horror), and revealed her divinity. She then withdrew her gift of grain from the earth — and the first famine began. Faced with the prospect of all humanity dying (and so all sacrifices ending), Zeus negotiated with Hades for Persephone\'s return — but Persephone had eaten pomegranate seeds in the underworld (4 or 6, depending on version), binding her to spend that many months each year with Hades. The *etiology* of the seasons: when Persephone is with her mother, the earth blooms (spring/summer); when she is with Hades, Demeter\'s grief turns the earth cold (autumn/winter). The Eleusinian Mysteries reenacted this story in a *teletē* (initiation) that included a fasting walk from Athens to Eleusis along the Sacred Way, the drinking of *kykeon* (a barley-and-mint potion, possibly psychoactive — the ergot-LSD hypothesis is still contested), and a final initiation in the *Telesterion* whose contents were so secret that no surviving text reveals what was actually shown. Initiates were promised a better death: "Happy is he who has seen these things; whoever has not been initiated and has no share in them has no part in such good things, but mingles with the dead in the dank dark." (Homeric Hymn to Demeter 480-482). The Roman *Ceres* is her direct continuation (the word *cereal* derives from her).',
    iconography: 'Mature woman, often middle-aged or older, golden-haired or veiled. Crown of wheat or grain-ears. Sheaf of wheat in her arms. Cornucopia (horn of plenty). Torch (used to search for Persephone in the dark). Sometimes a serpent at her side. The pomegranate (the fruit that bound Persephone to the underworld). Mother-and-daughter pair (Demeter with Persephone is one of the most-reproduced iconographic motifs in Greek art). The *Black Demeter of Phigalia* (Pausanias 8.42) shows her in a darker register — mare-headed, holding a dolphin and a dove, depicting her grief and her shape-shifting flight from Poseidon\'s pursuit.',
    invocation: 'Autumn — September (the *Greater Mysteries* at Eleusis ran from Boedromion 14-23, roughly September). Offer grain (any whole grain — wheat, barley, oats), pomegranate seeds, honey, milk, mint (the herb of the *kykeon*). At a grain-field, garden, or where any food is grown. The traditional invocation: *Δημήτηρ ξανθή, καρποδότειρα, μήτηρ* (Fair Demeter, fruit-giver, mother). Especially called by mothers grieving lost children (no other goddess holds maternal grief with this register), by people processing the death of a parent, by people working with seasonal depression (the *seasonal-affective* dimension was already cosmologically named by the Greeks — Demeter\'s grief *is* the cold months), by initiates of any contemplative tradition seeking the *teletē*-register of mystery-cult.',
    in_love: 'Demeter in love is the partner whose love-register is *maternal-cosmic* — the one who feeds, tends, holds, mourns for the beloved as if their fate were the cycle of the world itself. Demeter-energy in a partnership is *grain-giving devotion*. The shadow is the parent (often biological mother) whose maternal love for a child has become so totalizing that the partner-as-adult has been demoted to a satellite — and the partner-as-adult is treated as one more child to be fed and worried over. The other shadow: the *Demeter-without-Persephone* register — the mother whose identity collapsed when the child was abducted by adulthood (the empty-nest grief) and who has not yet found the *Mystery* that gave the original Demeter her late-life initiate-teacher role.',
    in_work: 'Demeter in work is the farmer, the chef, the doula, the elementary-school teacher, the gardener, the food-system organizer, the famine-relief worker. Demeter-energy is *feeding the people*. The shadow is the worker who has confused *being indispensable to the feeding* with *the only acceptable identity*; or the worker who has weaponized food-as-control (the parent who feeds with strings attached, the chef whose generosity is performative dominance).',
    the_gift: 'Demeter gives the most-promised gift of the ancient world: *initiation into a better death*. The Eleusinian Mysteries ran continuously for over a thousand years because they delivered, to those who passed through them, the experiential conviction that *death is not the end of the cycle, only the season of the underworld-stay*. The gift is the recognition that grief is itself a *teletē* — that the year you spend in the autumn of Persephone-gone is also the year you become eligible to be Metaneira\'s old-woman teacher in someone else\'s kitchen. The pomegranate-binding is not a curse; it is a contract that allows the world to keep turning.',
    the_shadow: 'The Eleusinian Mysteries have been heavily *new-age-commodified* — the *kykeon*-as-psychedelic hypothesis (Wasson, Hofmann, and Ruck\'s 1978 *Road to Eleusis*) has been weaponized as marketing for modern psychedelic retreat-centers that claim Eleusinian lineage despite having no continuous transmission. The other shadow: 19th-century academic mythography read Demeter through a *fertility-cult-mother-goddess* lens that flattened her into a generic earth-mother and stripped the *Mystery-initiator* register (Frazer\'s *Golden Bough* is the worst offender). The third shadow: contemporary neo-fascist literature has appropriated Demeter as "the ancestral European earth-mother" (the same move made on Brigid, on Frigg, on every grain-goddess) — the genuine response: Demeter\'s rite at Eleusis was open to *every* class, every gender, slaves and free, Greek and foreign-speaker — the *only* prerequisite for initiation was the ability to speak Greek well enough to follow the ritual. The Mysteries were the most racially-inclusive religious institution of the ancient world.',
    pair_with_sign: 'Virgo — the maiden-harvest sign, sheaf of wheat in her arms; Demeter\'s register at the moment of the gathered harvest, and Persephone\'s register at the moment before the descent.',
    pair_with_sign_slug: 'virgo',
    pair_with_planet: 'Saturn — the disciplined elder-planet, the rulership of the autumnal contraction and the harvested grain; Cronos-Saturn is also Demeter\'s father, the Titan whose deposition seated the Cronid generation.',
    pair_with_planet_slug: 'saturn',
    key_questions: [
      'What in me has been abducted into the underworld — a daughter, a vocation, a part of my own self — and have I been refusing to let the seasons turn, refusing to let the grain die back so that it can return?',
      'Whom am I currently feeding *with strings attached* — using the gift of food/care/attention as a soft form of control — and what would it look like to feed with the open hand of Demeter at Eleusis welcoming every stranger?',
      'Where in my life am I being called into the *Mystery* register — the late-life teacher in someone else\'s kitchen — and have I been refusing the invitation because the empty nest still hurts too much to make room for the new initiate?'
    ]
  },
  {
    slug: 'athena',
    text: 'Athena',
    greek: 'Ἀθηνᾶ',
    family: 'bright',
    position: 5,
    epithet: 'Grey-eyed · Pallas Athena · Tritogeneia · The unmarried virgin · Patron of Athens · Goddess of wisdom, strategy, craft, weaving, just war',
    source_text: 'Homer Iliad (Book 1 — restraining Achilles; Book 5 — wounding Ares; Book 22 — the deception of Hector) + Odyssey (Book 1, 13, 24 — her active patronage of Odysseus), Hesiod Theogony 886-900 + 924-926 (the birth from Zeus\'s head), Homeric Hymns 11 + 28, Aeschylus Eumenides (her founding of the Athenian court), Apollodorus Library 1.3, Pausanias 1.24 (the Parthenon)',
    one_liner: 'Grey-eyed goddess of wisdom, weaving, strategy, and the just-war that is fought to defend the city. Born full-grown and fully-armored from Zeus\'s head after Zeus swallowed her pregnant mother Metis. Patron of Athens by contest against Poseidon. The Olympian whose strategy preserved Odysseus and whose vote in the Eumenides founded the Athenian court of law.',
    meaning: 'Athena (Ἀθηνᾶ — etymology disputed; possibly from a pre-Greek substrate, possibly meaning "she of Athens" in pre-Hellenic form) is the daughter of Zeus and the Titaness *Metis* ("wisdom, cunning, craft"). When Zeus learned that Metis was prophesied to bear a son greater than him, he swallowed her — and Athena gestated inside Zeus\'s head. Hephaestus (or Prometheus, sources vary) split Zeus\'s skull with an axe and Athena leapt out full-grown and fully-armored, with a war-cry that shook Olympus (Theogony 886-900; Pindar Olympian 7.35-38). She is *Parthenos* (the virgin, the unmarried one — the only major Olympian who never takes a lover), *Glaukōpis* (grey-eyed or owl-eyed, her signature Homeric epithet), and *Pallas* (a name whose meaning is contested — possibly "maiden," possibly from a childhood-friend named Pallas whom Athena accidentally killed and whose name she took as memorial). She *won Athens* in a contest against Poseidon: he offered the city salt-water (or a war-horse); she offered the olive tree. The citizens chose her gift; she became the city\'s patron, and the Parthenon was built on the Acropolis to house Phidias\'s cult-statue (the *Athena Parthenos*, 11.5m tall, gold and ivory, destroyed in late antiquity — the Pausanias description survives). Her domain is *practical wisdom in service of the city*: weaving (she taught Arachne — and turned her into a spider for hubris), pottery, metallurgy, just-war (as distinct from Ares\'s bloodlust-war), strategy. In the Odyssey she is *Odysseus\'s patron* — guiding him home, manifesting as old men and shepherds and Mentor (the original sense of the word, the eponym of all mentorship). In Aeschylus\'s *Eumenides* (the third Oresteia play) Athena founds the Athenian court of law by casting the tie-breaking vote that acquits Orestes — the mythological charter for Athenian democracy. The Roman *Minerva* is her continuation. Her aegis is the Medusa-headed shield (Medusa was a Gorgon slain by Perseus, who gave Athena the severed head — Athena affixed it to her shield, where its petrifying gaze defended her). Her sacred bird is the owl (*Athene noctua*, the Little Owl, common across the Athenian Acropolis).',
    iconography: 'Tall woman in full armor — helmet (often with crest), spear, shield with the Gorgoneion (Medusa-head). Aegis (the goat-skin cloak fringed with snakes, edged with the heads of Gorgons). Olive branch in left hand or at her feet (her victory-gift to Athens). Owl on her shoulder or at her feet (*glaukōpis* — grey-eyed-as-the-owl). Sometimes Nike (winged Victory) standing in her outstretched hand. The Phidian *Athena Parthenos* stood 11.5 meters in the Parthenon, gold-and-ivory, the most expensive cult-statue in Greek antiquity.',
    invocation: 'No single weekday in classical Greek practice (the seven-day week is Babylonian-Roman); modern Hellenic-revival practice tends to honor her on the new moon. Offer olive oil, olives, owl-feathers (found, not killed), woven cloth, the spindle. At the threshold of any strategic decision or any act of just-war (the difficult conversation, the legal motion, the resignation letter). The traditional Greek revival invocation: *Παλλὰς Ἀθηναίη γλαυκῶπις* (Pallas Athena, grey-eyed). Especially called by lawyers preparing arguments, by strategists planning campaigns, by craftspeople taking up new work (Athena patronized *every* craft), by women claiming intellectual authority, by anyone fighting a defensive war (the *just* war, as distinct from the bloodlust-war of Ares).',
    in_love: 'Athena in love is *not* a romantic register — she is the unmarried virgin, the *Parthenos*. Athena-energy in a partnership is *the partner who is your strategic advisor, your mentor, your weaving-companion at the loom* — the one whose love for you takes the form of *making you cleverer*, of *winning your city for you*, of *standing as Mentor at your shoulder when you go to court*. Athena-as-relational-figure is the *non-romantic deep companionship* — the lifelong friend, the godmother, the godparent. The shadow: the partner who has confused *strategic counsel* with *strategic control* — the chess-master who has been moving you around the board without telling you. The other shadow: the relentless intellectualization of every feeling, the Athena who has weaponized her wisdom-register to evade the body, the eros, and the irrational.',
    in_work: 'Athena in work is the lawyer, the strategist, the engineer, the architect, the doctoral advisor, the weaver, the editor, the founder whose victory comes from clever long-game thinking rather than brute force. Athena-energy is *practical wisdom in service of the polis*. The shadow is the strategist whose cleverness has become decoupled from any genuine *polis* — the consultant who has no city, the lawyer whose only client is themselves, the editor who turned Arachne into a spider for the crime of weaving a tapestry slightly better than the goddess\'s. Hubris-punishment is the recurring Athena-shadow.',
    the_gift: 'Athena gives the recognition that *wisdom that does not serve the polis is hubris*. The olive tree, the just-war shield, the loom — these are all *city-building* gifts. The gift is the willingness to put your cleverness into the service of the actual community you live in, to be Mentor at someone else\'s shoulder, to vote with Athena for Orestes when the court is hung. The other gift: *strategy as restraint* — in Iliad 1, Athena descends from Olympus to grab Achilles\'s hair and stop him from drawing his sword on Agamemnon. The Athena-move is often *the not-doing*, the stayed hand.',
    the_shadow: 'Athena has been the most-weaponized goddess in the history of European supremacist mythography. The 19th-century European colonial powers explicitly framed themselves as the inheritors of "Hellenic civilization" with Athena as the patron — *Britannia* statues across the British Empire are direct iconographic copies of Athena; the *Athena Parthenos* was the model for *Columbia* in early American iconography. The Nazi-era *Pallas Athene Verein* and the Athena-cult in Italian Fascism both weaponized her as a charter for "Aryan wisdom." The Olympic Games revival (1896) deployed her iconography to frame "Hellenic civilization" as supreme. The other shadow: *Athena-as-girlboss* in contemporary corporate-feminist mythography flattens her into a generic "wise queen" figure and strips her *patron-of-the-actual-city-of-Athens* register, treating her wisdom as an individual self-help asset rather than a collective civic infrastructure. The third shadow: the *Pallas Athena* asteroid in modern astrology has been over-individualized — Athena was the patron of the *polis*, not the individual; reading her chart-placement as "your personal wisdom-style" misses the *for-the-city* condition without which Athena-wisdom becomes the hubris she punishes.',
    pair_with_sign: 'Aquarius — the wisdom-collective sign, the innovator in service of the polity; Athena\'s register at the founding of the Athenian court in the Eumenides.',
    pair_with_sign_slug: 'aquarius',
    pair_with_planet: 'Uranus — the revolutionary-innovator planet, the sudden-insight that founds new orders (Athena leapt full-armored from Zeus\'s head; the Uranian shock-of-the-new is her birth-pattern).',
    pair_with_planet_slug: 'uranus',
    key_questions: [
      'Where in my life is my cleverness currently *not serving the polis* — being deployed for personal gain or revenge or self-protection rather than for the actual city I belong to?',
      'Whom am I currently turning into a spider for the crime of being slightly better than me at the weaving — and what would the *non-hubristic* response actually look like?',
      'Where is the room asking me to be Athena descending to grab Achilles\'s hair — to step in with the stayed hand, the strategic intervention — and have I been hesitating because it feels like over-reach when it is actually the assignment?'
    ]
  },
  {
    slug: 'apollo',
    text: 'Apollo',
    greek: 'Ἀπόλλων',
    family: 'bright',
    position: 6,
    epithet: 'Far-shooter · Phoebus (the bright) · Mouse-god · Lord of Delphi · The lyre-bearer · God of prophecy, music, healing, plague, light, and order',
    source_text: 'Homer Iliad (Book 1 — sending plague on the Greeks; Book 16 — slaying Patroclus indirectly) + Odyssey, Homeric Hymn to Apollo (the foundational text — birth at Delos, founding of Delphi), Aeschylus Eumenides (Apollo as prosecutor of Orestes), Euripides Alcestis, Pindar Pythian Odes, Apollodorus Library 1.4, Plutarch Moralia (the Delphic essays)',
    one_liner: 'Far-shooter, lord of Delphi, the bright god of prophecy, music, healing, plague, light, and order. Son of Zeus and Leto, twin brother of Artemis, born on Delos. The god whose oracle at Delphi spoke the prophecies that shaped Greek history for a thousand years — and whose plague-arrows in Iliad 1 began the wrath of Achilles.',
    meaning: 'Apollo (Ἀπόλλων — etymology disputed; possibly from a pre-Greek substrate, possibly meaning "one who drives away" — both plague and enemies) is the son of Zeus and the Titaness Leto, twin brother of Artemis. Hera persecuted Leto in pregnancy and forbade her birth on any solid land; the floating island of Delos accepted her, and there Leto bore the twins (Homeric Hymn to Apollo). Apollo grew rapidly, killed the Python (the chthonic serpent-oracle at Delphi) and took over the oracle, instituted the Pythian Games (the second-greatest Panhellenic Games after the Olympics), and became the *lord of Delphi* — the most important oracular sanctuary of the Greek world. His domain is *order, light, prophecy, music, healing, plague*. The dual register *plague and healing* is essential to him: the Iliad opens with Apollo sending plague-arrows on the Greek camp because Agamemnon refused to return a priest\'s daughter, and the *Paean* (the song of healing) is sung to him to lift plagues. He is the lyre-player (Hermes invented the lyre, gave it to Apollo in exchange for a settlement of the cattle-theft case — Homeric Hymn to Hermes), the leader of the Muses (the *Mousagetes*), the patron of the *Pythian* oracle and the *Sibylline* oracles. His chief mortal lovers were male and female — Hyacinthus (the Spartan youth he accidentally killed with a discus, from whose blood the hyacinth flower sprang), Cyparissus (the youth who mourned a slain deer and was transformed into the cypress), Daphne (the nymph who fled him and was transformed into the laurel — *daphne* in Greek). The *Delphic* maxims — γνῶθι σαυτόν ("know thyself") and μηδὲν ἄγαν ("nothing in excess") — were inscribed in the temple of Apollo at Delphi and define the *Apollonian* register: self-knowledge, measure, order. The Roman *Apollo* (the only major Olympian whose Roman name is the same as the Greek) continued the cult; Augustus claimed Apollo as his personal patron, which began the imperial-Roman Apollo-cult that bled into the 19th-c. *Apollonian* aesthetic of European neoclassicism. In *Aeschylus\'s Eumenides* Apollo serves as Orestes\'s defense advocate, the patriarchal voice arguing that the father\'s blood is more sacred than the mother\'s — the speech that Athena\'s tie-breaking vote effectively endorses.',
    iconography: 'Beardless youth, athletic, idealized — the *kouros* archetype, the model of male beauty in classical Greek art. Lyre or kithara in one hand. Bow in the other (he is the *Far-shooter*, the archer-god). Laurel wreath on his head or in his hand (in memory of Daphne). Sometimes the python-serpent at his feet (the chthonic predecessor he slew at Delphi). Chariot of the sun (a later Roman conflation of Apollo with Helios — strictly in Homer and Hesiod, Helios is a separate god, but by Hellenistic times Apollo had absorbed the sun-driving function). The Delphic *omphalos* (the navel-stone marking the center of the world). The Belvedere Apollo (a 2nd-c. BCE Roman copy of a lost Greek bronze) became the most-replicated nude male body in the European art-academy from the Renaissance to the 19th c.',
    invocation: 'Sunday (the Sun-day, in the modern conflation of Apollo with the solar function). Offer laurel (bay leaves), olive oil, milk, honey, music (sung or instrumental). At the threshold of any prophecy-receiving practice (oracle, tarot pull, dream-incubation), any musical performance, any healing work, any moment requiring *measure* and *order*. The traditional invocation: *Φοῖβε Ἀπόλλων ἑκατηβελέτα* (Phoebus Apollo, far-shooter). Especially called by musicians, by doctors and healers (his son Asclepius founded the medical tradition), by poets (the Muses\' leader), by anyone in plague-time, by anyone facing the Delphic question — *know thyself, nothing in excess*. The Sibyl\'s tripod, the laurel-leaf-chewing of the Pythia, the *enthousiasmos* (god-possession) of the oracle are his signature ritual-states.',
    in_love: 'Apollo in love is the *radiant idealized lover* — the partner whose beauty, order, and clarity make every domain they touch feel composed. Apollo-energy in a partnership is *measured, musical, healing*. The shadow is the partner whose perfection has become a *closed* aesthetic — who cannot tolerate the messy, the irrational, the Dionysian dimension of the relationship. The other shadow: Apollo\'s pursuit of Daphne (and Hyacinthus and Cyparissus, with their tragic deaths) is the warning text — the *radiant* lover whose pursuit becomes destructive, whose love accidentally kills the beloved with the discus, whose laurel-crown is made from the woman who fled him. The cleanest contemporary reading: Apollo-energy as the partner who *idealizes* without *seeing*, whose love is for the imagined-perfect version of the other rather than the actual person.',
    in_work: 'Apollo in work is the conductor, the physician, the architect, the poet, the public-health officer, the priest, the academic — anyone whose work is *the imposition of order on chaos*. Apollo-energy is *measure, light, and form*. The shadow is the worker whose order-imposition has become tyrannical — the conductor whose orchestra is afraid of them, the physician whose authority has become contempt for the patient\'s knowledge, the academic whose Delphic discipline has become gate-keeping. The Apollo-shadow in work is *the bright god whose light has become a searchlight*, illuminating others\' failures while exempting himself.',
    the_gift: 'Apollo gives the most-replicated cultural ideal of the western tradition: *measured beauty*. The Delphic maxims — *know thyself*, *nothing in excess* — are still load-bearing 2400 years later. The gift is the recognition that *order is not the opposite of art*; that the *measure* is what makes the music music and not noise; that *light shed on the dark places* is the prophetic gift Apollo passes to anyone willing to take it up.',
    the_shadow: 'Apollo has been the most-supremacist-appropriated Olympian after Athena. The *Apollonian* in 19th-c. and 20th-c. European aesthetics (especially Winckelmann, Nietzsche\'s *Birth of Tragedy*, the Nazi-era classical-sculpture cult, Leni Riefenstahl\'s 1936 Olympic film) was weaponized as charter for *white-marble-purity* aesthetic. Greek statues were originally painted in bright polychrome — the *white marble* aesthetic is a 19th-c. fantasy that the actual archaeology has thoroughly disproved, yet the *Apollonian-as-white-marble* register continues to shape every western-civilization discourse. The Nietzschean *Apollonian/Dionysian* binary, while genuinely useful as an analytic frame, has been over-deployed to flatten both gods — the *real* Apollo is also the plague-arrow-shooter, the killer of Hyacinthus, the pursuer of Daphne; the Dionysian was no less ordered than the Apollonian in actual cult-practice (the Bacchae are *ordered* madness, the *thiasos* is a structured community). The other shadow: Apollo as the *patron of European civilization* against the "irrational East" is the structural framing that licensed colonial scholarship for two centuries. The Apollo-cult must be read with this history named.',
    pair_with_sign: 'Leo — the solar sign of the lyre-court, the radiant kouros, the regal-creative; Apollo\'s register at his most public and most beautiful.',
    pair_with_sign_slug: 'leo',
    pair_with_planet: 'Sun — the solar body Apollo absorbed by Hellenistic times; the source of light, the daily cycle of order, the central body around which the polis orbits.',
    pair_with_planet_slug: 'sun',
    key_questions: [
      'Where in my life has my pursuit of measured beauty become the destruction of the actual beloved — the Daphne who fled the Apollo, the Hyacinthus accidentally killed by the discus?',
      'What plague-arrow am I currently flinging into a camp because I am angry about a private slight (Iliad 1) — and what is the priest-of-Chryses-figure whose daughter I would have to actually return?',
      'Where in my life is the Delphic invitation — *know thyself, nothing in excess* — being offered to me, and have I been refusing to climb to the temple because the truth the Pythia would speak is the truth I cannot yet hear?'
    ]
  },
  {
    slug: 'artemis',
    text: 'Artemis',
    greek: 'Ἄρτεμις',
    family: 'bright',
    position: 7,
    epithet: 'Lady of wild things · The huntress · Bow-bearer · Moon-goddess · Protector of childbirth · The unmarried virgin · The Bear-goddess of Brauron',
    source_text: 'Homer Iliad (Book 21 — beaten by Hera) + Odyssey, Homeric Hymn to Artemis (9 + 27), Callimachus Hymn to Artemis (the foundational text — her child-self requesting bow and arrows), Euripides Hippolytus + Iphigenia in Aulis + Iphigenia in Tauris, Pausanias 1.33 + 8.37 (Brauron and the bear-cult), Apollodorus Library 1.4 + 3.4 (Actaeon\'s death)',
    one_liner: 'Lady of wild things. Twin sister of Apollo, daughter of Zeus and Leto. Goddess of the hunt, the wilderness, the moon, and childbirth. The unmarried virgin who roams the forests with her band of nymphs, who turned Actaeon into a stag for accidentally seeing her bathe, and whose bear-cult at Brauron required every Athenian girl to live as a bear for a year before marriage.',
    meaning: 'Artemis (Ἄρτεμις — etymology contested, possibly from a pre-Greek substrate; one theory derives it from *artemēs* "safe, unharmed," the protective virginity-state) is the twin sister of Apollo, born first (on the island of Ortygia or Delos) and reportedly assisted at her own brother\'s birth, becoming associated with childbirth (Callimachus). She asked her father Zeus, in Callimachus\'s *Hymn to Artemis*, for: a bow and arrows, a band of sixty nymphs as companions, twenty more attendant nymphs to care for her hunting-dogs, eternal virginity, every mountain in the world, and a single city of her own. Zeus granted all of it. Her domain is *the wilderness as distinct from the polis* — the uncultivated land, the forest, the mountain, the moon (her counterpart to Apollo\'s sun in the Hellenistic conflation, though strictly Selene is the moon-goddess and Artemis acquired the moon-association later). She is *Parthenos* (unmarried virgin) like Athena, but Artemis\'s virginity is *wilderness-virginity* (the state of being uncolonized) whereas Athena\'s is *polis-virginity* (the state of being free for civic work). Her bear-cult at *Brauron* (the *Arkteia*) required every Athenian girl between ages 5 and 10 to live for a year at the sanctuary as a *bear* (wearing saffron robes, dancing barefoot, learning the wilderness-rites) before she would be eligible for marriage at puberty — a structural acknowledgment that the wild-girl had to be honored before she could become the polis-wife. Her chief Asian sanctuary at *Ephesus* (the Temple of Artemis, one of the Seven Wonders) housed a many-breasted *Artemis Ephesia* whose iconography differed sharply from the slim Greek huntress — the *Ephesia* is a syncretism with the Anatolian mother-goddess. Her chief myth-cycle is the *vengeance on those who violate her wilderness*: she turned Actaeon into a stag for accidentally seeing her bathe (his own hounds tore him apart); she killed Niobe\'s seven daughters with arrows (Apollo killed the seven sons) when Niobe boasted she had more children than Leto; she required *Iphigenia* as sacrifice from Agamemnon for killing a sacred deer (the foundational event of the Trojan War — Euripides made two plays of it). The Roman *Diana* is her continuation.',
    iconography: 'Young, athletic, beardless (she is *parthenos*). Short tunic (the hunting *chiton*, hitched up for running). Bow and quiver. Crescent moon on her brow (the Hellenistic-and-later moon-association). Hunting dogs at her feet. Sometimes a deer or stag beside her. Sometimes a bear (the Brauronian cult). Sometimes the spear instead of the bow (the boar-hunt). The *Artemis Ephesia* is depicted in a wholly different mode — many-breasted (or many-egged or many-bull-testicled, the iconography is contested), heavily robed, frontal, hieratic. Her sacred trees are the cypress and the palm; her flower is the amaranth. Her primary animal is the deer; her sacrificial animal is the goat (and historically the deer when a deer-sacrifice was required).',
    invocation: 'Monday in the modern conflation of Artemis with the moon; in classical practice no specific day. Offer at the new moon (her especially-honored phase as huntress) or full moon (her especially-honored phase as protector of childbirth and wild things). Offer milk, honey, sea-water, deer-antler if found (never hunted), saffron threads (the *Arkteia* saffron-robe color), water from a wild spring. At a forest-edge, mountain, or any wilderness. The traditional invocation: *Ἄρτεμι ἰοχέαιρα παρθένε ἐλαφηβόλε* (Artemis, arrow-pouring, virgin, deer-shooter). Especially called by hunters (who must honor the wild before taking from it), by women in childbirth, by girls in the *threshold* phase before puberty or before partnership, by anyone whose work is in the wilderness, by anyone reclaiming a *non-polis* self that the city has been trying to colonize.',
    in_love: 'Artemis in love is *not* a partner-relational register at all — she is the *autonomous virgin* in the wilderness-original sense (the *un-married* one, *parthenos*). Artemis-energy in a partnership is the partner whose *wildness is the precondition of being with them* — the one who needs the forest, the long solo run, the mountain-cabin alone, who will not be domesticated. The shadow is the partner who has confused Artemis-energy with chronic emotional unavailability; or the partner who weaponizes their wilderness as a defense against intimacy, who turns every closeness-bid into the discus that killed Hyacinthus. The other shadow: the *Actaeon-fate* register — the partner who genuinely respects Artemis\'s wilderness but is torn apart by the consequences of having accidentally trespassed on it. The cleanest non-romantic register: Artemis is the goddess of *every woman\'s un-domesticated self*, the part of every person that does not belong to the marriage / the institution / the polis.',
    in_work: 'Artemis in work is the wildlife biologist, the wilderness-therapist, the doula (her childbirth-protector function), the midwife, the long-distance runner, the solo-traveler, the photographer in remote places, the hunter (especially the *honoring* hunter, the indigenous-hunting tradition that asks the deer for permission). Artemis-energy is *wild competence*. The shadow is the worker whose Artemis-wilderness has been weaponized into hostility toward any colleague who shows up — the lone-wolf who has confused wilderness-respect with team-evasion.',
    the_gift: 'Artemis gives the recognition that *the wilderness is real and prior*. Before there was a polis there was a forest; before Athena got Athens there was Brauron; before any woman became a wife she lived a year as a bear. The gift is the *protection of the un-colonized*. Artemis stands as the goddess of every part of a person that has not been domesticated and that, honored, allows the polis-self to function. To know Artemis is to know that the city only works because there is still a forest the city has not yet eaten.',
    the_shadow: 'Artemis has been *Diana-feminized* in modern western culture — turned into a Disney huntress, a girl-power archery aesthetic, a stripped-of-her-vengeance huntress. The *real* Artemis is the goddess who had Actaeon torn apart by his own hounds, who killed Niobe\'s seven daughters, who demanded Iphigenia\'s sacrifice — the wilderness-vengeance dimension is structural to her, and reading her as only-the-protective-feminist flattens her. The other shadow: the *Artemis Ephesia* (many-breasted Anatolian mother-goddess) has been confused with the Greek Artemis (slim virgin huntress) by Hellenistic and Christian sources — Pliny conflated them, Paul preached against them in the same speech (Acts 19), the New Age conflates them — but they were originally distinct cults that merged at the syncretic boundary, and reading them as one figure obscures both. The third shadow: the *Brauronian bear-cult* has been new-age-feminism-romanticized as a "matriarchal initiation rite" stripping the structural fact that it was a *pre-marriage rite* in a patriarchal city whose girls had no choice about marriage. The bear-year was real and important, *and* it was the antechamber of a forced wife-life. Both must be held.',
    pair_with_sign: 'Cancer — the lunar-mother sign of protective wildness and the threshold of childbirth; Artemis\'s register at her *protector-of-the-wild-young* function.',
    pair_with_sign_slug: 'cancer',
    pair_with_planet: 'Moon — Artemis\'s body in the Hellenistic conflation with Selene; the lunar cycle of wilderness, childbirth, and the un-domesticated rhythm.',
    pair_with_planet_slug: 'moon',
    key_questions: [
      'What un-colonized wilderness in me am I currently letting the polis eat — the long-distance run, the solo cabin, the part of myself the marriage has been trying to domesticate?',
      'Who is the Actaeon in my life — the genuinely-respectful person who has accidentally trespassed on my wilderness — and am I currently letting my hounds tear them apart for what was not their fault?',
      'Where am I being called to honor the *bear-year* — my own or someone else\'s — the threshold-time of un-civilized formation that has to happen before any polis-role can be taken up well?'
    ]
  },
  {
    slug: 'aphrodite',
    text: 'Aphrodite',
    greek: 'Ἀφροδίτη',
    family: 'bright',
    position: 8,
    epithet: 'Foam-born · Cyprus-born · Cytherea · Golden · Laughter-loving · Goddess of love, beauty, sexual desire, generation, and the sea-foam at the cosmic origin',
    source_text: 'Hesiod Theogony 188-206 (the foundational text — birth from sea-foam of Uranus\'s castrated genitals), Homer Iliad (Book 3, 5, 14, 21) + Odyssey (Book 8 — the catching by Hephaestus), Homeric Hymn to Aphrodite (5 — Anchises, the birth of Aeneas), Sappho Fragments (her invocations of Aphrodite), Plato Symposium (the two-Aphrodites speech of Pausanias), Apollodorus Library 1.1 + 3.14, Lucretius De Rerum Natura 1.1-43 (the Roman Venus invocation)',
    one_liner: 'Goddess of love, beauty, sexual desire, and generative force. Born from the sea-foam where Uranus\'s severed genitals fell after Cronos castrated him. The Olympian whose girdle could make anyone irresistible, whose vanity-judgment by Paris started the Trojan War, and whose Roman form Venus opens Lucretius\'s entire De Rerum Natura as the principle of cosmic generation.',
    meaning: 'Aphrodite (Ἀφροδίτη — by Hesiodic etymology from *aphros*, "foam") has *two* origin-stories in the canonical sources, and Plato\'s Symposium makes the doubleness theological: the *older* Aphrodite (Aphrodite Ourania, "heavenly") is born from the sea-foam where the severed genitals of Uranus fell after Cronos castrated him with the adamantine sickle (Theogony 188-206 — she rose from the foam and stepped onto Cyprus, fully-grown, the most ancient Olympian by birth though not by reign). The *younger* Aphrodite (Aphrodite Pandemos, "common") is the daughter of Zeus and the Titaness Dione (Iliad 5.370-417). The two-Aphrodites distinction — *Ourania* (heavenly/spiritual love) vs *Pandemos* (common/erotic love) — is Pausanias\'s speech in the Symposium, foundational to two thousand years of western theology of love. Her domain is *sexual desire and generative force*. Lucretius opens *De Rerum Natura* with an invocation to Venus as the principle by which "all things are conceived, leap up to the light of the sun, all things shine fair under your power" — the most powerful statement of Aphrodite as *cosmic generative principle* in surviving Latin literature. Her chief myth-cycles: the *Judgment of Paris* (she bribed Paris with Helen, the most beautiful mortal woman, in exchange for his vote for her in the beauty-contest against Hera and Athena — this began the Trojan War); her *marriage to Hephaestus* (a forced political marriage; she took Ares as her lover; Hephaestus caught them in a golden net and exposed them to the laughter of the gods — Odyssey 8.266-366); her *affair with Anchises* (the Trojan prince, by whom she bore *Aeneas*, the ancestor of Romulus and thus of Rome — the Homeric Hymn to Aphrodite tells this in full); her *protection of Paris* (rescuing him from death in single combat with Menelaus by enveloping him in a cloud — Iliad 3); her *being wounded by Diomedes* (the Achaean hero, who stabbed her wrist when she tried to rescue Aeneas — Iliad 5, the only moment in surviving Greek literature where a mortal wounds an Olympian). Her sacred sanctuary was on *Cyprus* (especially Paphos, where the cult-stone — a *baetyl*, an aniconic black stone — was her image, suggesting an ancient near-eastern origin in the Astarte / Ishtar / Inanna cult-cluster). The Roman *Venus* continued the cult.',
    iconography: 'Beautiful, mature, sensuous woman, often nude (the *Aphrodite of Knidos* by Praxiteles, c. 360 BCE, was the first fully-nude female cult-statue in Greek art and revolutionized the depiction of the female body). Sometimes emerging from a scallop-shell or sea-foam (Botticelli\'s 1485 *Birth of Venus* is the most-reproduced image but also a 15th-c. neo-Platonic interpretation; the original Greek iconography showed her stepping ashore on Cyprus). Crowned with myrtle (her sacred plant) or roses. Doves at her feet or in her hands (her sacred birds). Sometimes the *cestus* (her embroidered girdle, which made the wearer irresistible — Hera borrowed it in Iliad 14 to seduce Zeus). Eros (the young god of erotic love, her son by Ares — or her companion, depending on tradition) often beside her. Mirror, golden apple. The *Capitoline Venus*, the *Venus de Milo* (c. 130 BCE), and the *Knidian Aphrodite* set the template for two millennia of European nude female sculpture.',
    invocation: 'Friday (Latin *dies Veneris*, French *vendredi*, the day of Venus / Aphrodite — across all Romance languages). Offer roses, myrtle, doves (released, not killed), honey, wine, scented oils, perfume. At a body of water (her birth-element) or in a chamber prepared for love. The traditional invocation: *χρυσοστέφαν᾽ Ἀφροδίτη* (Gold-crowned Aphrodite — the most-used Sappho invocation). Sappho\'s entire surviving corpus is essentially a sequence of Aphrodite-prayers — *Sappho 1* is the foundational Aphrodite-invocation in lyric poetry, beginning *ποικιλόθρον᾽ ἀθανάτ᾽ Ἀφρόδιτα* ("on the throne of many colors, immortal Aphrodite"). Especially called by anyone in love, anyone entering or sustaining a sexual partnership, anyone whose creative work is in beauty (artists, designers, perfumers, florists), anyone processing the *Pandemos* dimension of love (the bodily, erotic, sometimes-painful register).',
    in_love: 'Aphrodite in love is the *direct* love-register — the partner whose presence is erotic gravitation, whose laughter unlocks the body, whose attention makes you feel both beautiful and slightly dangerous. Aphrodite-energy in a partnership is *the cestus-wearer*, the one whose girdle of attraction is the gravitational center of the relationship. The shadow is the partner who has weaponized their beauty as a *tool of control* (the Helen-of-Troy register — Aphrodite gave Helen to Paris not as a gift to either but as a strategic move in the Judgment); or the partner whose erotic-cosmic dimension has become possessive vanity (the *Judgment of Paris* register on Aphrodite\'s side — the goddess who must win the beauty-contest at any cost). The other shadow: the *Aphrodite-Hephaestus marriage* — the partner who has accepted a politically-convenient marriage while taking the actually-desired love (Ares) elsewhere, and is unsurprised when the golden net falls.',
    in_work: 'Aphrodite in work is the artist, the designer, the perfumer, the cosmetic chemist, the wedding-planner, the seducer, the courtesan (a real and historically-honored profession in many cultures), the actor, the matchmaker. Aphrodite-energy is *generative beauty*. The shadow is the worker whose beauty-work has become the *industry of beauty-extraction* — the cosmetic industry that sells dissatisfaction-with-the-body, the dating-app that monetizes the desire it manufactures, the influencer whose "beauty" is a monetized scarcity-strategy. The Aphrodite-Pandemos shadow at industrial scale.',
    the_gift: 'Aphrodite gives the recognition that *the cosmos is generative*. Lucretius opens *De Rerum Natura* with Venus because, for the Epicurean cosmology, *the entire universe is in continuous generation through erotic attraction* — atoms find each other, light finds the eye, the spring finds the seed. The gift is the recognition that desire is *cosmic-load-bearing*, not a private indulgence; that to honor Aphrodite is to honor the generative principle by which any new thing comes into existence at all. The other gift: *the laughter-loving* dimension — Homer\'s frequent epithet for her, *philommeidēs*, "laughter-loving" — the Aphrodite-shaped relief that some of the most serious matters are best entered through the laughter that breaks the over-seriousness.',
    the_shadow: 'Aphrodite has been the most-commodified Olympian in modern western culture. The *birth-from-sea-foam* origin (which is birth-from-castrated-Uranus-genitals, a deeply violent cosmic event) has been completely sanitized by Botticelli\'s 1485 painting and every cosmetic-industry reproduction since — turning Aphrodite into a decorative scallop-shell goddess and stripping the Hesiodic theological weight (she is born from *violence at the cosmic origin*, the first feminine principle to emerge after the castration of the sky-father). The cosmetic and beauty industry uses Venus imagery to market dissatisfaction at industrial scale — every "Venus razor" ad, every Aphrodite-named fragrance is monetizing the Aphrodite-Pandemos register at a scale that the actual Greek cult never imagined. The other shadow: *Aphrodite-as-empowerment* in contemporary feminism has flattened her into a generic "love-yourself" figure, stripping the *Judgment of Paris* moment (Aphrodite\'s willingness to start a war by promising someone else\'s wife to Paris) and the *Pandemos vs Ourania* distinction. The third shadow: the *cult-of-female-beauty* in 19th-c. Romantic art (and continuing into Hollywood) collapsed Aphrodite into a single visual register — young, white, blonde, slim — that has nothing to do with the Anatolian-Cyprian *baetyl* (the aniconic black stone that was her original cult-image). Aphrodite was originally the Greek interface to *Astarte / Ishtar / Inanna* (already on gab44 — see /gab44/goddesses/inanna), and reading her without the near-eastern lineage is reading half the goddess.',
    pair_with_sign: 'Libra — the partnership-sign of the balanced attraction; Aphrodite\'s register at her most relational, the sign whose *libra* (scales) measures the give-and-take of love.',
    pair_with_sign_slug: 'libra',
    pair_with_planet: 'Venus — the planet of Aphrodite by direct Roman naming; the brightest object in the night sky after the moon, the morning star and evening star, the celestial body of attraction itself.',
    pair_with_planet_slug: 'venus',
    key_questions: [
      'Where in my life have I been wearing the *cestus* — the girdle of attraction — as a tool of control rather than as a generative offering, and what would it look like to take it off in this one relationship?',
      'Whom am I currently promising as Aphrodite promised Helen — offering someone else\'s loyalty / time / availability in service of *my* judgment-of-Paris victory — and what war am I about to start?',
      'Where has my *Aphrodite-Pandemos* (bodily, erotic, immediate) become disconnected from my *Aphrodite-Ourania* (cosmic, generative, soul-deep), and which of the two am I currently starving?'
    ]
  },
  {
    slug: 'ares',
    text: 'Ares',
    greek: 'Ἄρης',
    family: 'workshop',
    position: 9,
    epithet: 'Slayer of men · Bronze · Shield-piercer · Most hateful (Zeus\'s epithet for him) · The bloodthirsty · The lover of Aphrodite',
    source_text: 'Homer Iliad (Book 5, 15, 21 — wounded by Diomedes, defeated by Athena), Hesiod Theogony 921 + 933-937 (his children with Aphrodite — Phobos and Deimos, Harmonia, Eros), Homeric Hymn to Ares (8 — the syncretic Stoic version), Aeschylus Seven Against Thebes, Apollodorus Library 1.4',
    one_liner: 'God of war as slaughter, courage, and battlefield rage. Son of Zeus and Hera, lover of Aphrodite, father of Phobos (fear) and Deimos (terror). The Olympian most-disliked by the other Olympians — Zeus in Iliad 5 calls him "most hateful of all the gods." The rehabilitated Roman Mars whose dignity the Greek Ares never had.',
    meaning: 'Ares (Ἄρης — possibly from a root meaning "ruin" or "curse") is the son of Zeus and Hera. Unlike his sister Athena, who governs the *just war* (the defense of the polis, the strategic war), Ares governs *war-as-slaughter* — the bloodlust, the battlefield rage, the courage that is indistinguishable from violence-addiction. He is the *least-loved* Olympian: Iliad 5.890-891 has Zeus saying to the wounded Ares — "Most hateful of all gods to me are you, for forever quarreling and wars and battles are your delight." In the Iliad Ares fights for the Trojans (in opposition to Athena, who fights for the Greeks) and is *wounded twice* — first by Diomedes (with Athena\'s help, Iliad 5), then defeated by Athena directly (Iliad 21). His chief myth-cycle is the *adultery with Aphrodite*: Aphrodite was politically-married to Hephaestus but took Ares as her lover; Hephaestus caught them in a golden net and exposed them to the laughter of the assembled gods (Odyssey 8.266-366). From their union came Eros (in some traditions), Phobos (fear, who attended Ares on the battlefield), Deimos (terror, his counterpart), Harmonia (paradoxically the goddess of harmony — the mythic statement that *new harmonies come from the resolution of conflict*), and several lesser children. Ares\'s cult was *less central* in classical Greek religion than the Roman Mars-cult would later become: he had a few sanctuaries (one at the *Areopagus*, "the hill of Ares," the rocky outcrop in Athens where homicide-cases were tried — said to have been the site where Ares was tried for killing a son of Poseidon), but no Pythian Games, no Eleusinian Mysteries, no Apollo-scale oracular center. When Greek war-religion was needed, the Greeks tended to honor Athena (strategic war) or Apollo (plague-as-war) rather than Ares (slaughter-as-war). The Roman *Mars* underwent a major theological rehabilitation: Mars was the *father of Romulus and Remus*, the founder-god of Rome, second-only-to-Jupiter in Roman state-cult, the patron of the legions and of *agriculture* (the *Campus Martius* was the Roman military training-field, and March/*Martius* was the start of both the war-season and the agricultural year). The Roman Mars therefore carries dignities the Greek Ares never had.',
    iconography: 'Powerful, fully-armored warrior. Often beardless in earlier art, bearded in later. Bronze helmet (sometimes with the visor down, which obscures the face). Spear and shield. Sometimes nude with helmet only (the heroic-nude convention). Riding in a chariot pulled by *Phobos* and *Deimos* (his sons-as-fear-and-terror). Sometimes accompanied by *Enyo* (his sister or consort, goddess of war-cry). The vulture is sometimes his sacred bird (the carrion-bird of the battlefield); the dog and the boar are also sacred. Roman Mars iconography is grander — armored emperor-figure, often standing over a defeated enemy, sometimes paired with Venus (the rehabilitated Aphrodite-Ares marriage of the Roman pantheon).',
    invocation: 'Tuesday (Latin *dies Martis*, French *mardi*, Italian *martedì*, Spanish *martes* — the day of Mars/Ares across Romance languages). Offer at the threshold of a necessary fight (a difficult conversation, a court case, a confrontation, a military deployment, the saying of the difficult-no). Iron is his metal. Red is his color. Offerings: red wine, an iron object, a sharpened blade (held, not used). At the boundary of a contested territory (the property-line, the discipline-meeting, the negotiating table). The traditional invocation: *Ἄρες Ἄρες βροτολοιγέ μιαιφόνε τειχεσιπλῆτα* (Ares, Ares, man-slayer, blood-stained, wall-piercer — Iliad 5.31). Modern reading note: Ares-invocation is *not* invocation of war-tourism — it is the recognition that some situations require the slaughter-energy and that pretending otherwise (insisting Athena will solve everything) is a different kind of cowardice. Especially called by soldiers, by people in physical combat-sport, by people in necessary boundary-defense, by anyone whose work requires *naming the violence already happening*.',
    in_love: 'Ares in love is *the passionate, sometimes-volatile lover* — the partner whose desire is direct, whose anger is direct, whose body shows up fully. The Aphrodite-Ares affair is the mythic charter: erotic-love and war-rage are theologically linked, the same fire kindled in different rooms. Ares-energy in a partnership is *the willingness to fight for what matters* and the willingness to *be the one fought-with* (couples therapy is fundamentally Ares-work, the structured field on which the fight can happen). The shadow is the partner whose Ares-fire has become domestic violence, the rage that crosses from passion into harm. The other shadow: the partner who has confused *being fought for* with *being fought over* — the Helen-of-Troy register where two Ares-figures battle each other in the partnership\'s name.',
    in_work: 'Ares in work is the soldier, the firefighter, the contract-negotiator, the labor-organizer (the strike *is* the Ares-move when Athena\'s court-petition has failed), the trial-lawyer in adversarial proceedings, the surgeon at the moment of cutting, the contact-sport athlete, the security worker. Ares-energy is *necessary violence well-channeled*. The shadow is the worker whose Ares-energy has become *gratuitous aggression* — the manager whose every meeting is a battlefield, the lawyer whose every motion is hostile when collaboration would have served, the surgeon who has become the scalpel.',
    the_gift: 'Ares gives the recognition that *some situations require the slaughter-energy*. The Olympians prefer Athena, and the cult of *just war* is the prevailing Greek register, but the Iliad does not deny that Ares is real — that battlefield rage is its own gift, that *courage-indistinguishable-from-violence-addiction* is what actually carries soldiers through a battle they did not start. The gift is the willingness to name the fire that is in the work and to direct it well, rather than to pretend it is not there.',
    the_shadow: 'Ares has been the most *militarist-coopted* Olympian. The Roman Mars-cult rehabilitated him as the dignified patron of legitimate empire, and from that point the European state-religions of war have used Mars-imagery for two thousand years. Every Western military uses Mars/Ares motifs in heraldry; the *USS Mars*-type ship-naming convention, the *Mars Attacks* / *Bringer of War* (Holst, *The Planets*, 1916) cultural-imaginary, all carry the dignification. The other shadow: the *Mars in astrology* register has been over-individualized — your "Mars sign" treated as a personality-trait when the historical Mars/Ares was *cosmically-disruptive*, the principle by which any new thing has to break the old order before it can establish itself. The third shadow: the *Aphrodite-Ares affair* has been romanticized into a beauty-and-beast aesthetic in Western painting (Botticelli\'s *Mars and Venus* c. 1485 is the prototype) that strips the theological seriousness — *Harmonia is their daughter*, the goddess of harmony comes from the union of slaughter and beauty, the mythic statement is that *new harmonies are forged through conflict*, not that Mars and Venus are a cute mismatched couple.',
    pair_with_sign: 'Aries — literally the Ares-sign (the Latin form was *Aries* by direct continuation); the cardinal-fire sign of initiating-force and the headfirst confrontation.',
    pair_with_sign_slug: 'aries',
    pair_with_planet: 'Mars — the planet of Ares by direct Roman naming; the red planet of fight-and-fuck, drive, will, and the warrior\'s body in Western astrology.',
    pair_with_planet_slug: 'mars',
    key_questions: [
      'Where in my life is there a fight I have been avoiding because *Athena\'s strategic counsel* failed and the remaining work is genuinely *Ares\' slaughter* — and have I been pretending it can still be negotiated?',
      'Where has my Ares-fire crossed from passion into harm — at home, at work, in the body — and who is currently carrying the wound my anger left?',
      'What harmony in my life is currently being forged in the Aphrodite-Ares union — the conflict whose resolution will produce *Harmonia* — and have I been trying to skip the conflict?'
    ]
  },
  {
    slug: 'hephaestus',
    text: 'Hephaestus',
    greek: 'Ἥφαιστος',
    family: 'workshop',
    position: 10,
    epithet: 'Lame-footed · The smith · Skilled-with-both-hands · Cast from Olympus · Husband of Aphrodite · The maker of the gods\' weapons',
    source_text: 'Homer Iliad (Book 1 — the cup-bearer scene; Book 18 — the forging of Achilles\'s shield, the longest ekphrasis in surviving Greek literature) + Odyssey (Book 8 — the golden net), Hesiod Theogony 927-929 (his parthenogenic birth by Hera), Homeric Hymn to Hephaestus (20), Apollodorus Library 1.3, Pausanias 1.14 (the Hephaisteion in Athens — the best-preserved Greek temple anywhere)',
    one_liner: 'Lame smith-god of the forge, fire, metallurgy, and craft. Son of Hera (by parthenogenesis in one tradition; by Zeus in another). Cast from Olympus by his mother because of his lameness — or by his father for taking his mother\'s side. The only Olympian with a disability, the only Olympian who *works*, and the maker of every divine weapon in the cosmos.',
    meaning: 'Hephaestus (Ἥφαιστος — etymology uncertain, possibly from a pre-Greek substrate via the Lemnian language) is the smith-god, the divine craftsman, the only Olympian who *works* in the sense of physical labor. His birth and lameness have two parallel traditions: (1) Hesiod (Theogony 927-929) says Hera bore him parthenogenically in retaliation for Zeus producing Athena from his own head; Hera, disgusted at the imperfect child, threw him from Olympus — he fell for a full day and landed in the sea, where he was raised by the sea-goddesses Thetis and Eurynome in a cave for nine years, learning his smith-craft. (2) An alternative tradition (Iliad 1.586-594) has Hephaestus born to both Zeus and Hera, lamed by Zeus who threw him from Olympus for taking Hera\'s side in a quarrel — again landing on Lemnos, where the Sintian people cared for him. Either way: *the divine craftsman is the cast-out child*. He is *lame* (often shown limping or supported by a stick or wheeled chair — one of the most explicit disability-representations in the Olympic pantheon), *bearded*, *muscular* (the forge-arms), and *radically unromantic* in appearance compared to the bright Olympian beauty-standard. He is married to Aphrodite — a forced political marriage, the most physically-beautiful goddess given to the least-conventionally-beautiful god; she takes Ares as her lover; Hephaestus catches them in a golden net (Odyssey 8.266-366), exposes them to the gods, and the gods *laugh* — at Ares and Aphrodite, but also (the texts are honest) at Hephaestus himself. His chief works: the *aegis* (Athena\'s and Zeus\'s shield), Zeus\'s thunderbolts, Apollo\'s and Artemis\'s arrows, Achilles\'s shield (Iliad 18.478-608 — the longest *ekphrasis* in Greek literature, a forty-line description of the entire cosmos rendered on a single bronze shield: the city at peace and the city at war, the wedding and the trial, the harvest and the dance, the river of Ocean around the rim), the golden serving-maidens that walked and spoke and helped him at the forge (Iliad 18.417-420 — one of the earliest depictions of artificial-intelligence-like servitor-androids in world literature), the brazen-footed bulls of Aeëtes, the necklace of Harmonia (which carried a curse — every later owner died young), Pandora (he formed the first woman from clay at Zeus\'s command — Hesiod Works and Days). His chief sanctuary was on *Lemnos* (the island where he landed) and at Athens (where the *Hephaisteion*, the temple of Hephaestus, stands in the Agora — the best-preserved Greek temple anywhere). The Roman *Vulcan* continued the cult (the Vulcanalia in August honored him as the god who kept the harvest-fires from devouring the granaries).',
    iconography: 'Bearded, muscular, lame — often shown with a clubbed or twisted foot, sometimes leaning on a stick, sometimes seated at the forge because standing is hard. Smith\'s leather apron over a short tunic. Hammer and tongs. Sometimes accompanied by the *Cyclopes* (his apprentices, the one-eyed giants who forge with him under Mount Aetna in the Roman tradition). The forge itself behind him, fire glowing. Olive-wood spear-handles, anvil. The *golden serving-maidens* sometimes shown beside him as attendants.',
    invocation: 'August is his Roman month (the Vulcanalia, August 23). Offer at any forge, kiln, kitchen-fire, workshop, garage, or any place where physical making happens. Offerings: a small iron object, the first fire of a fire-pit, olive oil, the worker\'s sweat. The traditional invocation: *Ἥφαιστον κλυτόμητιν ἀείσομαι* (Hephaestus, famed for his craft, I shall sing — Homeric Hymn to Hephaestus). Especially called by craftspeople, mechanics, blacksmiths, jewelers, tattoo artists, kitchen-cooks, surgeons (the surgical hand is Hephaestus-work), 3D-printer operators, anyone whose work is *making with the hands*, anyone with a disability whose labor has been disrespected, anyone in a marriage of unequal physical-beauty registers (Hephaestus-Aphrodite is the cleanest mythic charter for the *what does it mean to be loved despite the body* question).',
    in_love: 'Hephaestus in love is *the partner who makes things for the beloved* — the one whose love-language is the well-made thing, the meal cooked, the chair built, the broken-thing repaired. Hephaestus-energy in a partnership is *love-as-craft*. The shadow is the partner who has confused the well-made things with *full intimacy* — who has substituted the gifts for the conversation, who has worked at the forge for forty years and barely seen his Aphrodite at all. The other shadow: the Hephaestus-Aphrodite *golden net* register — the wounded partner whose response to the lover\'s infidelity is to expose them publicly in a humiliation that the entire room laughs at, including the wounded party themselves. The third shadow: the partner who has internalized *being unloveable because of the body* and has stopped reaching out, accepting a politically-convenient partnership and treating the actual love as forever-elsewhere.',
    in_work: 'Hephaestus in work is the worker, the craftsperson, the engineer, the surgeon, the mechanic, the chef, the welder, the tattooist, the seamstress, the AI-engineer (the *golden serving-maidens* he forged are the oldest description of artificial servants in surviving literature — Hephaestus is the patron of every maker of automata). Hephaestus-energy is *craft-mastery rooted in disability, exile, and patient solo labor*. The shadow is the worker whose craft has become *isolation* — the maker in the forge who has not come out for a decade, whose mastery is real and whose loneliness is structural.',
    the_gift: 'Hephaestus gives the recognition that *the cast-out child is the one who makes the cosmos*. Every weapon the gods wield was forged by the lame god they laughed at. The shield of Achilles — the most-described object in Greek literature, a forty-line ekphrasis of the entire cosmos rendered in bronze — was made by Hephaestus alone in his forge. The gift is the dignity of *disability-as-condition-of-mastery*; the recognition that the body the polis rejected may produce the work the polis cannot live without; the patience of the long solo labor at the forge while the beautiful Olympians fly around above.',
    the_shadow: 'Hephaestus has been the most *disability-mocked* Olympian. The Greek texts themselves participate in this — the *laughter at Hephaestus* is named explicitly in Iliad 1 (he serves as cup-bearer at a feast and the gods laugh at his limping), and the Odyssey 8 net-scene makes him a comic figure. 19th-c. classicism inherited this and routinely treated him as the comic-relief Olympian, the butt of jokes, the not-really-divine god. The other shadow: *Vulcan / Spock / Star Trek* and other modern uses have stripped Hephaestus into a generic logical-engineer figure, missing the *cast-out child* and *disability* registers that are central to his theology. The third shadow: the *Hephaestus-Aphrodite marriage* has been read as comic (the ugly husband, the beautiful wife) rather than as the tragedy it actually is — Aphrodite was *given* to Hephaestus in a political arrangement she did not consent to, and the affair with Ares is her response to a marriage she did not choose. Reading the cycle as a sit-com plot misses both the Hephaestus-grief and the Aphrodite-coercion. The fourth shadow: contemporary disability-rights scholarship has begun to reclaim Hephaestus as a *positive disability-representation* in classical literature, but earlier classical scholarship explicitly used his lameness as a cosmological-allegory for the *defective* (Aristotle invoked him this way in *De Caelo*).',
    pair_with_sign: 'Taurus — the patient earth-craft sign of slow mastery, the hands at the forge over decades, the body-of-the-bull that grounds the workshop.',
    pair_with_sign_slug: 'taurus',
    pair_with_planet: 'Saturn — the disciplined elder-planet, the rulership of structure, slow time, the patient solo labor; Hephaestus\'s register at the forge over decades.',
    pair_with_planet_slug: 'saturn',
    key_questions: [
      'Where in my life have I been substituting the well-made things for the actual intimacy — bringing the forged gifts to a marriage that needed me to come out of the forge and sit at the table?',
      'Where am I currently in the *cast-out child* register — the part of myself the family or polis rejected — and have I been letting the rejection define the body, or have I been allowing the forge to teach the cosmos through me anyway?',
      'Whom in my life am I laughing at, in the Iliad-1 way — making the comic-relief out of the person whose limping makes me uncomfortable — when actually the cosmos is being forged by exactly that person?'
    ]
  },
  {
    slug: 'hermes',
    text: 'Hermes',
    greek: 'Ἑρμῆς',
    family: 'workshop',
    position: 11,
    epithet: 'Messenger of the gods · Argeiphontes (slayer of Argus) · Psychopompos (guide of souls) · Trickster · The cattle-thief · The lyre-inventor · God of boundaries, commerce, travelers, thieves, heralds, athletes',
    source_text: 'Homer Iliad (Book 24 — guiding Priam to Achilles) + Odyssey (Book 5 — sent to Calypso; Book 24 — guiding the suitors\' souls to Hades), Hesiod Theogony 938-939, Homeric Hymn to Hermes (4 — the foundational text, the newborn god\'s cattle-theft and lyre-invention), Apollodorus Library 3.10, the Orphic Hymn to Hermes, late-Hellenistic Hermes Trismegistus tradition',
    one_liner: 'Messenger of the gods, guide of souls, god of boundaries, commerce, travelers, thieves, and heralds. Son of Zeus and the nymph Maia. Born in a cave on Mount Cyllene and on his first day of life stole Apollo\'s cattle, invented the lyre from a tortoise-shell, and talked his way out of trouble by giving Apollo the lyre. The Olympian whose feet have wings and whose function is *to move between worlds*.',
    meaning: 'Hermes (Ἑρμῆς — from *herma*, "stone-heap," the cairn-marker at a boundary; he is fundamentally *the god of the marked boundary*) is the son of Zeus and the Pleiad nymph Maia, born in a cave on Mount Cyllene in Arcadia. His chief biographical text is the *Homeric Hymn to Hermes* (4), which describes his first day of life as one of the most extraordinary opening days in all mythology: he is born at dawn, climbs out of the cradle by noon, invents the lyre by inventing it (he encounters a tortoise, kills it, scoops out the flesh, strings the shell with sheep-gut and reeds — the first lyre), then walks to Pieria, steals fifty of Apollo\'s cattle, drives them backwards (so the hoof-prints lead the wrong way), sacrifices two to the twelve gods (including himself in the dozen — the first hint of his *meta*-position in the pantheon), returns home, gets back into the cradle, pretends to be a sleeping baby; Apollo tracks the theft, accuses him, Hermes denies everything in the most charming testimony in surviving Greek literature, Zeus mediates, Hermes offers Apollo the lyre as compensation and Apollo accepts, brothers ever after. *This is the entire Hermes-pattern compressed into a single day*: boundary-crossing (cradle to cattle-pasture), theft, invention, charm, settlement of disputes, gift-exchange that creates lifelong relationship. His domain is *the marked boundary in every direction*: the property-line (the *herma* cairn was the original boundary-marker), the threshold (he was *Hermes Propylaios*, "of the gateway"), the road (he was the patron of travelers — *Hermes Hodios*), the marketplace (commerce is exchange-across-boundaries — he was *Hermes Agoraios*, of the agora), the language-translation (he was the patron of heralds and interpreters — the etymological root of *hermeneutics*), and most importantly *the boundary between the living and the dead* — he is *Psychopompos*, the guide of souls. In the Odyssey 24 he leads the souls of the slain suitors to Hades; in the Iliad 24 he guides Priam through the Greek camp to Achilles\'s tent (a passage-between-worlds in social terms — the enemy king crossing into the killer\'s tent). His sandals are winged (*talaria*); his hat is winged (*petasos*); his staff is the *kerykeion* (the herald\'s staff, two serpents intertwined — what the Romans called the *caduceus*). His Slayer-of-Argus myth: when Zeus turned Io into a cow to escape Hera\'s wrath, Hera set her hundred-eyed servant Argus to watch the cow; Hermes lulled Argus to sleep with a long story and killed him (the epithet *Argeiphontes*, "Argus-slayer," is one of his most-used Homeric formulae). The Roman *Mercury* continued the cult and became the patron of *commerce* especially (the Latin *merx* — "merchandise" — is etymologically related to Mercury). The late-Hellenistic *Hermes Trismegistus* ("thrice-great Hermes") syncretism conflated Hermes with the Egyptian Thoth and produced the *Corpus Hermeticum*, the foundational text of Western esotericism — but this is *Hermes-Trismegistus*, a distinct theological figure from the Olympian Hermes, and many later confusions stem from blurring the two.',
    iconography: 'Young, beardless, athletic, mobile (the most mobile body in the pantheon — always shown in motion or about to move). Winged sandals (*talaria*) on his feet. Winged hat (*petasos*) or sometimes just the *petasos* (traveler\'s broad-brimmed hat). The *kerykeion* (the herald\'s staff, two serpents intertwined around a winged rod — distinct from the Asclepian rod of medicine, with which it is often confused in modern logos). Sometimes a purse (his commerce-function). Sometimes a ram (Hermes-Kriophoros, "ram-bearer," the iconography that later influenced Christian Good-Shepherd imagery). The *herma* statues — square stone pillars topped with Hermes\'s head and bearing an erect phallus — stood at boundaries and crossroads across the Greek world; the famous *Mutilation of the Hermai* in Athens 415 BCE (an act of religious vandalism on the eve of the Sicilian expedition) was one of the most consequential single events of the Peloponnesian War.',
    invocation: 'Wednesday (Latin *dies Mercurii*, French *mercredi*, Italian *mercoledì*, Spanish *miércoles* — the day of Mercury/Hermes across Romance languages). Offer at a crossroads, threshold, gateway, or boundary. The traditional offering is a small *herm* or stone (the cairn-tradition is alive in the modern practice of leaving a stone at a trailhead or grave). Mint, dill, honey, milk. The traditional invocation: *Ἑρμῆν ὕμνει Μοῦσα Διὸς καὶ Μαιάδος υἱόν* (Sing, Muse, of Hermes, son of Zeus and Maia — Homeric Hymn to Hermes 1). Especially called by travelers (before any journey), by traders and businesspeople, by writers and translators (the *hermeneutic* function), by thieves (yes — Hermes was honestly named as the patron of theft, especially of the cunning-clever kind), by athletes (he was a patron of gymnasiums and athletic festivals), by hospice workers and chaplains (his *psychopompos* function), by anyone doing boundary-work of any kind.',
    in_love: 'Hermes in love is *the swift, charming, communicative partner* — the one whose word-play is the foreplay, whose attention darts and returns, whose love-language is the message sent at the right moment from across the room. Hermes-energy in a partnership is *fluent boundary-crossing*. The shadow is the partner whose Hermes-charm is *avoidant* — who has confused fluency with availability, whose talent for crossing boundaries means the relationship cannot find one to honor. The other shadow: the *Hermes-Trickster* register in a relationship — the partner whose cleverness is in service of evading accountability, whose every conversation moves the boundary just enough that the original commitment can no longer be located. The third shadow: Hermes is the only Olympian whose theft is *honored* in his own myth — and partners with strong Hermes-shadow can use *charm-as-cover-for-theft* in financial, emotional, or attention-based ways.',
    in_work: 'Hermes in work is the journalist, the diplomat, the translator, the trader, the messenger-courier-FedEx-driver, the contract-negotiator, the writer, the hermeneut (the literary critic, the textual interpreter, the *exegete*), the thief (the security-tester, the hacker, the lockpicker, the magician — the *cunning-clever* category of professional theft), the boundary-marker (the surveyor, the cartographer, the GIS analyst), the athlete (especially the runner), the psychopomp (the hospice worker, the funeral director, the death-doula — Hermes\'s guide-of-souls function is theirs). Hermes-energy is *fluent crossing of marked boundaries*. The shadow is the worker whose Hermes-fluency has *no anchor* — the journalist who has no editor, the diplomat with no nation, the freelancer whose mobility has become rootlessness.',
    the_gift: 'Hermes gives the recognition that *the boundary is a passage, not a wall*. Every wall in the cosmos has a Hermes-gate. The dead pass; the living pass; the language passes; the goods pass; the wealth passes; the meaning passes. The gift is *fluent crossing*. To know Hermes is to know that there is no domain you are not allowed to enter — provided you respect the *herma* at the threshold, leave the offering, name yourself, and accept that you are not the lord of the domain you are entering, only its current crosser. The other gift: *the swift settlement* — Hermes did not fight Apollo over the stolen cattle; he negotiated, gave the lyre, made a brother. The Hermes-shape of conflict-resolution is *gift-exchange-creates-relationship*.',
    the_shadow: 'Hermes has been *commerce-flattened* in modern western culture. The Roman Mercury was already over-identified with commerce, but the modern *Mercury* (the FTD florists\' logo, the *Mercury* car brand, every commercial use of the *caduceus* — including the *medical* caduceus, which is a 19th-c. US Army Medical Corps misidentification that should be the *Rod of Asclepius* with one serpent, not Hermes\'s with two) has reduced him to the patron of money-exchange specifically. The historical Hermes was the patron of *every* boundary-crossing, with commerce only one node. The other shadow: *Hermes Trismegistus* — the late-Hellenistic syncretism with Egyptian Thoth — produced the *Corpus Hermeticum* and the foundational Western esoteric tradition (alchemy, the *Emerald Tablet*, the entire Hermetic tradition through to the Golden Dawn and beyond), but this is *theologically distinct* from the Olympian Hermes. Conflating them — as much New Age literature does — produces incoherent practice. The third shadow: *Hermes-the-Trickster* has been Percy-Jackson-flattened into a charming uncle-figure, stripping the *Argeiphontes* (Argus-slayer, murderer-by-storytelling) and the *psychopompos* (death-guide) registers. The fourth shadow: the *Mercury-in-astrology* register has been over-individualized as "your communication-style," when historically Mercury/Hermes was the *function* of communication-across-boundaries, including the boundary between the living and the dead.',
    pair_with_sign: 'Gemini — the twin-sign of communication, exchange, fluency, and the boundary-crossing pair; Hermes\'s primary astrological seat.',
    pair_with_sign_slug: 'gemini',
    pair_with_planet: 'Mercury — the planet of Hermes by direct Roman naming; the swift inner planet, the boundary-crossing principle, the ruler of communication and exchange.',
    pair_with_planet_slug: 'mercury',
    key_questions: [
      'What boundary in my life am I being asked to cross *honoring the herma at the threshold* — leaving the offering, naming myself — rather than slipping across in trickster-mode hoping no one will notice?',
      'Where has my Hermes-fluency become Hermes-evasion — the charm-and-swiftness that lets me leave every commitment before it can land?',
      'Who in my life has been guiding souls — mine or others\' — and have I been honoring them as a Hermes-figure (the psychopomp deserves the wine-libation, the herma-stone, the named gratitude), or have I been taking the guiding for granted?'
    ]
  },
  {
    slug: 'dionysus',
    text: 'Dionysus',
    greek: 'Διόνυσος',
    family: 'workshop',
    position: 12,
    epithet: 'Twice-born · The bull-horned · The wine-god · Bromios (the roarer) · Eleutherios (the liberator) · Lysios (the loosener) · The dying-and-rising god · Lord of the theatre',
    source_text: 'Euripides Bacchae (the foundational text c. 405 BCE — Dionysus returns to Thebes and destroys his unbelieving cousin Pentheus), Homer Iliad 6.130-140 (the Lycurgus story) + Odyssey, Hesiod Theogony 940-942, Homeric Hymn to Dionysus (7 + 26), the Orphic Hymns (the Orphic-Dionysus / Zagreus tradition — torn apart by Titans and reborn), Plutarch Moralia (Isis and Osiris — the Dionysus-Osiris syncretism), Nonnus Dionysiaca (the late-antique 48-book epic of Dionysus, c. 5th c. CE)',
    one_liner: 'The twice-born god of wine, ecstasy, theatre, madness, and the dying-and-rising mystery. Son of Zeus and the mortal Semele, who was incinerated by Zeus\'s undisguised glory; Zeus rescued the foetal Dionysus from her ashes and sewed him into his thigh to gestate. The Olympian most-distant from Olympus — the god whose worship arrived from outside, whose maenads tore Pentheus apart for refusing the rite, whose mysteries promised the initiate a death-and-rebirth.',
    meaning: 'Dionysus (Διόνυσος — etymology disputed, possibly "Zeus of Nysa" or "the divine son of Nysa," referring to the mountain where he was raised) is the only Olympian with a *mortal mother* and one of two Olympians (with Heracles, who is sometimes counted as the thirteenth) whose journey from mortal-circumstances to Olympic-divinity is the entire arc. His mother Semele was a Theban princess; Zeus impregnated her in mortal disguise; Hera, in jealous fury, tricked Semele into demanding to see Zeus in his full divine glory — and the mortal woman was incinerated by the sight (Euripides Bacchae 1-12). Zeus rescued the six-month foetus from her ashes and sewed him into his own *thigh* (μηρός, *mēros*) to gestate three more months — Dionysus is therefore the *twice-born*, born once of Semele\'s body and again of Zeus\'s thigh. He was raised by the nymphs of Mount Nysa to protect him from Hera\'s wrath. He invented wine, taught humanity viticulture, and *brought the god back to Greece from the East* — the foundational Bacchae plot is Dionysus arriving in Thebes (his mother\'s city) to demand worship and being refused by his cousin Pentheus, with consequences that are the bloodiest in surviving Greek theatre. The *Orphic-Dionysus* tradition gives him an alternative theology: as the infant *Zagreus*, son of Zeus and Persephone, he was torn apart by the Titans, who ate everything but his heart; Zeus rescued the heart, swallowed it, impregnated Semele with it, and Dionysus was reborn — the *dying-and-rising god* register, parallel to Osiris in Egypt, Tammuz in Mesopotamia, and (in later Christian appropriations) Christ. This Orphic-Dionysus is one of the foundational *mystery-god* figures of antiquity, and the Dionysian Mysteries (distinct from the Eleusinian but sometimes overlapping) promised the initiate a *katabasis* (descent) and *anabasis* (ascent) corresponding to the god\'s. The *Dionysia* (the Athenian theatrical festivals — the *Greater Dionysia* in March, the *Lenaea* in January, the *Anthesteria* in February) were the *origin of Western theatre* — every surviving Greek tragedy was performed at a Dionysia, in the theatre of Dionysus on the south slope of the Acropolis. Tragedy is *literally* a Dionysian religious rite. His *Maenads* (female devotees) entered ecstatic states (*mania*), wandered the mountains, and in the Bacchae literally *tore Pentheus apart with their hands* — his own mother Agave, in ecstasy, dismembered her son thinking he was a lion. The Roman *Bacchus / Liber Pater* continued the cult; the *Bacchanalia* were a major Roman cult until the Senate suppressed them in 186 BCE under fear of their political organization-potential.',
    iconography: 'Most-iconographically-variable Olympian. In earlier (5th-c. BCE) art: mature, bearded, robed, holding the *thyrsus* (a staff topped with a pine-cone, wrapped with ivy and grape-vine — his weapon and his sceptre), wreathed with ivy and grape-leaves. In later (Hellenistic and Roman) art: beardless, youthful, sometimes effeminate (the *Apollonian* aesthetic of later antiquity absorbed Dionysus into the same beautiful-youth register). His chariot is pulled by panthers or leopards. He is accompanied by his *thiasos*: maenads (female devotees), satyrs (the half-goat / half-horse companions, lustful and joyous), sileni (the older satyrs, including *Silenus* — his foster-father, a wise drunkard), and sometimes Pan. The mask is his — the theatrical mask is his sacred object, and dramatic performance is his rite. The bull (his epithet *Tauroceros*, "bull-horned") and the panther are his sacred animals. Grape, ivy, pine-cone, fig, fennel-stalk are his sacred plants.',
    invocation: 'No fixed weekday — Dionysus disrupts the calendrical order. His sacred months: March (Greater Dionysia), January (Lenaea), February (Anthesteria), August through October (the wine-harvest and pressing). Offer: wine (especially the first pour of a new vintage), grapes, ivy, the mask. At the theatre, at the wine-press, at the threshold of any ecstatic practice. The traditional invocation: *Διόνυσε εὐοῖ* (Dionysus, *euoi!* — the maenadic ritual-cry). Especially called by actors, poets, theatre-makers, musicians (the *dithyramb* was the choral hymn to Dionysus, the original form of Greek drama), winemakers, anyone working with ecstatic states (whether through wine, dance, sex, music, or contemplative practice), anyone in deep grief or initiatory crisis (the *katabasis* register), anyone working with mortality and the dying-and-rising mystery.',
    in_love: 'Dionysus in love is *the partner who arrives from outside the city and demands the rite* — the one whose presence dissolves the polis-norms, whose love is *eleutheria* (liberation) and *lysis* (loosening), whose register breaks every domestic arrangement and asks for the ecstatic engagement. Dionysus-energy in a partnership is *the dying-and-rising* — the relationship that lets itself end and return, that risks the *katabasis* together. The shadow is the partner whose Dionysus-energy has become *chronic emotional intoxication* — who has confused the maenadic register with the daily one, who treats every ordinary Tuesday as if it were the Greater Dionysia. The other shadow: the Pentheus-figure on the *other* side — the partner who refuses the rite, who locks down the polis-rules, who in some way deserves the tearing-apart they would have received from the maenads. The third shadow: the bro-Dionysus, the frat-Dionysus — alcohol-as-Dionysus stripped of mystery, drinking-as-tradition without katabasis-as-rebirth.',
    in_work: 'Dionysus in work is the actor, the playwright, the theatre-director, the musician, the wine-maker, the chef (the *symposium*-host, the dinner-party as ritual), the festival-organizer, the grief counselor (his *psychopompic* dimension intersects with Hermes\'), the contemplative-practice teacher who works with non-ordinary states. Dionysus-energy is *ecstasy as professional craft*. The shadow is the artist whose Dionysian dimension has become unmanageable — the actor who cannot leave the role, the musician whose substance-use has crossed from ritual to addiction, the festival-organizer whose own festival is destroying them. The Dionysian artist needs the *Apollonian* counterweight (the form, the practice, the discipline) — Nietzsche\'s binary, while overdetermined, is real to the craft.',
    the_gift: 'Dionysus gives the recognition that *the cosmos contains the necessary madness*. The polis cannot contain everything; some experiences require the maenadic mountain, the wine-skin opened in the dark, the mask put on so the face can come off, the descent that has to happen for the ascent. The gift is the recognition that *grief, ecstasy, sex, theatre, music, the deep losing-and-finding* are all one Dionysian rite, and that to honor him is to make a place in the year and in the body for the cycle that the polis-self would otherwise refuse. The other gift: the *Orphic-Zagreus* register — the promise that *what is torn apart can be reborn*, that the dismembered heart can be sewn into another womb and another life, that *no katabasis is final*.',
    the_shadow: 'Dionysus has been the most *philosophically-binaried* Olympian. Nietzsche\'s *Birth of Tragedy* (1872) framed him against Apollo as the *Apollonian / Dionysian* binary — order vs ecstasy, form vs dissolution, individuation vs collective madness. The binary is genuinely useful but has been over-deployed, flattening both gods. Dionysus is not *only* ecstasy — the *thiasos* (the Dionysian community) is structured, the dithyramb is formally composed, the wine-harvest is a precisely-timed agricultural rite. The other shadow: *bro-Dionysus / frat-Dionysus* — the modern consumer-alcohol industry uses Dionysian imagery to market drinking-as-tradition while stripping the *mystery* dimension. *The wine without the rite is not Dionysian.* The third shadow: *Dionysus-as-counterculture-icon* in the 1960s-70s (the Manson family explicitly invoked the Bacchae, the Living Theatre staged *Dionysus in 69*, the entire psychedelic counterculture used Dionysian imagery) treated him as the permission-slip for any transgression, stripping the *Pentheus-is-torn-apart* register that should accompany the rite. Dionysian practice is *not* consequence-free; the Maenads in the Bacchae *literally dismember innocents in their ecstasy*, and Euripides was unambiguous that this is a *catastrophe*, not a celebration. The fourth shadow: the *Dionysus-Osiris-Christ* parallel in 19th-c. comparative mythology (Frazer\'s *Golden Bough*) flattened all dying-and-rising gods into one figure, missing the specifically-Greek theatrical-political dimension of Dionysus that has no counterpart in Osiris or Christ.',
    pair_with_sign: 'Scorpio — the descent-and-rebirth sign of the katabasis, the death-and-resurrection cycle; Dionysus\'s register at the Orphic-Zagreus dimension.',
    pair_with_sign_slug: 'scorpio',
    pair_with_planet: 'Pluto — the chthonic transformation-planet of the underworld-descent; Dionysus\'s register as the dying-and-rising mystery-god, the heart-of-Zagreus eaten and reborn.',
    pair_with_planet_slug: 'pluto',
    key_questions: [
      'What rite am I currently refusing — what Dionysian arrival from outside the polis am I locking down as Pentheus locked down Thebes — and what will the maenads do to me if I keep refusing?',
      'Where has my Dionysian dimension crossed from rite to addiction — the wine-without-mystery, the ecstasy-without-discipline, the maenadic register lived in every ordinary Tuesday?',
      'What in me has been torn apart by Titans and is currently waiting in the heart-fragment to be sewn into the next thigh — and have I been treating the dismemberment as the end of the story rather than as the necessary middle of the dying-and-rising arc?'
    ]
  },
]

const GOD_BY_SLUG: Record<string, OlympianGuide> = Object.fromEntries(OLYMPIANS.map((g) => [g.slug, g]))

export const OLYMPIAN_SLUGS = OLYMPIANS.map((g) => g.slug)

export function isOlympianSlug(s: string): boolean {
  return s in GOD_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const GOD_ACCENT: Record<string, { c1: string; c2: string; label: string; glyph: string }> = {
  zeus:       { c1: '#d8b438', c2: '#7a5808', label: 'Cronid · sky-father',          glyph: '⚡' },
  hera:       { c1: '#c87080', c2: '#7a2a48', label: 'Cronid · queen of heaven',     glyph: '👑' },
  poseidon:   { c1: '#3a7898', c2: '#0a3858', label: 'Cronid · earth-shaker',        glyph: '🔱' },
  demeter:    { c1: '#c8a058', c2: '#7a5018', label: 'Cronid · grain-mother',        glyph: '🌾' },
  athena:     { c1: '#8898b0', c2: '#384858', label: 'Bright · wisdom-strategist',   glyph: '🦉' },
  apollo:     { c1: '#e8c060', c2: '#a07820', label: 'Bright · the radiant',         glyph: '🎵' },
  artemis:    { c1: '#a8b8c0', c2: '#506068', label: 'Bright · lady of wild things', glyph: '🏹' },
  aphrodite:  { c1: '#e890a0', c2: '#a04860', label: 'Bright · foam-born',           glyph: '🌹' },
  ares:       { c1: '#c84838', c2: '#7a1808', label: 'Workshop · slayer of men',     glyph: '⚔️' },
  hephaestus: { c1: '#a06038', c2: '#502808', label: 'Workshop · the lame smith',    glyph: '🔨' },
  hermes:     { c1: '#9098a8', c2: '#404858', label: 'Workshop · messenger',         glyph: '🪶' },
  dionysus:   { c1: '#7838a0', c2: '#380858', label: 'Workshop · twice-born',        glyph: '🍇' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function olympianPageHTML(slug: string): string {
  const r = GOD_BY_SLUG[slug]
  if (!r) return ''
  const accent = GOD_ACCENT[r.slug] || { c1: '#888', c2: '#444', label: '', glyph: '✦' }
  const readingHref = `/gab44/reading?ref=olympian-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.greek)}) — Olympian God · ${r.position}/12 · gab44 ✨`
  const description = `Who ${r.text} (${r.greek}) actually is. ${escapeHtml(r.epithet)}. Source-text honest — ${escapeHtml(r.source_text.split(',')[0])}. Iconography, invocation, in love, in work, the gift, the shadow, paired zodiac sign and planet.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Olympian Gods', item: `${SITE_URL}/gab44/olympians` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/olympians/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — Olympian god, ${r.position}/12`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/olympians/${slug}`,
        about: `${r.text} Olympian god, Greek deity, ${r.family}`
      }
    ]
  })

  const otherGodsHtml = OLYMPIANS.filter((q) => q.slug !== slug).map((q) => {
    const acc = GOD_ACCENT[q.slug] || { c1: '#888', c2: '#444', glyph: '✦' }
    return `<a class="ph-mini" href="/gab44/olympians/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${acc.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/olympians/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/olympians/${slug}" />
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
  .hero .greek { font-size: 22px; opacity: 0.85; margin: 0 0 6px; font-style: italic }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/olympians">olympian gods</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="greek">${escapeHtml(r.greek)}</p>
    <p class="epithet">${escapeHtml(r.epithet)}</p>
    <p class="family">${escapeHtml(accent.label)} · ${r.position} of 12</p>
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
      <a href="/gab44/${r.pair_with_sign_slug}"><span class="lbl">Sign</span>${escapeHtml(r.pair_with_sign)}</a>
      <a href="/gab44/planets/${r.pair_with_planet_slug}"><span class="lbl">Planet</span>${escapeHtml(r.pair_with_planet)}</a>
      <a href="/gab44/olympians"><span class="lbl">12 Olympians</span>The whole pantheon — who is who</a>
      <a href="/gab44/norse-gods"><span class="lbl">10 Norse gods</span>The peer Eddic pantheon</a>
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
    <h3>Want a $9 reading that names the Olympian walking with you right now?</h3>
    <p>Your chart + the Olympian archetype most present in this chapter of your life — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="other-gods">${otherGodsHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 12 Olympians · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function olympiansIndexHTML(): string {
  const cards = OLYMPIANS.map((r) => {
    const acc = GOD_ACCENT[r.slug]
    return `<a class="card" href="/gab44/olympians/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${r.position} / 12</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.greek)}</span></h3>
      <p class="fam">${escapeHtml(acc.label)}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = "The 12 Olympian Gods — Cronid sovereigns, Bright Olympians, Workshop & Ecstatic, source-honest · gab44 ✨"
  const description = "Hand-written guides to the 12 canonical Olympian gods — Cronid sovereigns (Zeus, Hera, Poseidon, Demeter), Bright Olympians (Athena, Apollo, Artemis, Aphrodite), Workshop & Ecstatic (Ares, Hephaestus, Hermes, Dionysus). Homer-Hesiod source-honest, lineage-named, shadow-honest about Hellenist-supremacist appropriation, sanitized rape myths, and the 19th-c. white-marble fantasy. The beings behind every zodiac sign already on gab44."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/olympians" />
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ olympian gods</nav>
  <h1>The 12 Olympian <span class="accent">Gods</span> — the beings behind the zodiac</h1>
  <p class="sub">Every zodiac sign on gab44 already invokes them silently — Aries is Ares, Libra is Aphrodite, Sagittarius is Zeus, Pisces is Poseidon. This page is the closing of that gap: the 12 Olympians the entire western-astrology stack has been touching all along, named from Homer and Hesiod, sourced from the Homeric Hymns and the 5th-c. tragedians, and named honestly in their shadows as well as their gifts.</p>

  <div class="intro">
    <h3>How to read this map</h3>
    <p><strong>Three families.</strong> The Cronid sovereigns (Zeus, Hera, Poseidon, Demeter — the four children of Cronos and Rhea who divided the cosmos after the Titanomachy). The Bright Olympians (Athena, Apollo, Artemis, Aphrodite — the radiant children of Zeus; Aphrodite by alternate Hesiodic tradition from the sea-foam of Uranus\'s castrated genitals). The Workshop & Ecstatic (Ares, Hephaestus, Hermes, Dionysus — the active, transformative, mobile, dying-and-rising Olympians).</p>
    <p><strong>Each guide is source-honest.</strong> Homer (Iliad, Odyssey c. 750 BCE), Hesiod (Theogony, Works and Days c. 700 BCE), the Homeric Hymns, the 5th-c. tragedians (Aeschylus, Sophocles, Euripides), Apollodorus, Ovid, Pausanias. The modern shadow is named explicitly: 19th-c. Hellenist-supremacist appropriation per god, sanitized rape-myths in Zeus and Apollo, the white-marble fantasy of 19th-c. classicism that erased the original polychrome statuary, Nazi-era and Olympic-Games co-option, Disney/Percy Jackson flattening, contemporary-feminist over-correction.</p>
    <p><strong>How to use this funnel.</strong> Read the Olympian your life is currently asking about — the one whose function is loudest in your present chapter. Each page pairs with a zodiac sign (already on gab44) and a planet (already on gab44), turning every god into a 3-funnel cross-link node.</p>
  </div>

  <div class="grid">${cards}</div>

  <div class="reading-strip">
    <h2>Want your chart read alongside the Olympian walking with you?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the Olympian archetype most active in your current chapter alongside sun/moon/rising. <a href="/gab44/reading?ref=olympians-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 12 Olympians · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

