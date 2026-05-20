// Hindu Devas — 12 most-searched Sanskrit/Vedic deities — SEO funnel.
// /gab44/devas (index) + /gab44/devas/{slug}.
//
// 12 hand-written deva/devi guides — the actual beings the Sanskrit/Vedic
// stack on gab44 already orbits. Mantras, mudras, asanas, pranayama, eight
// limbs, yamas+niyamas, kleshas, doshas, and nakshatras all exist on gab44
// without naming the *who*. This ship closes that structural gap.
//
// Four-family taxonomy:
//  - Trimurti (Brahma, Vishnu, Shiva) = saffron/violet/obsidian — the three
//    cosmic functions: create, preserve, transform.
//  - Avatars (Krishna, Rama, Hanuman) = indigo/jade/sindoor — Vishnu's two
//    most-loved earthly forms + the perfect devotee.
//  - Devis (Lakshmi, Saraswati, Durga, Parvati) = gold/white/crimson/rose —
//    the four mahadevis: abundance, wisdom, warrior protection, devoted love.
//  - Sons (Ganesh, Kartikeya) = rose/peacock — the two sons of Shiva +
//    Parvati: remover of obstacles + spiritual warrior.

import { SITE_URL } from '@/lib/identity'

export interface DevaGuide {
  slug: string
  text: string
  sanskrit: string
  family: 'trimurti' | 'avatar' | 'devi' | 'son'
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
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_mantra: string
  pair_with_mantra_slug: string
  key_questions: [string, string, string]
}

export const DEVAS: DevaGuide[] = [
  {
    slug: 'brahma',
    text: 'Brahma',
    sanskrit: 'ब्रह्मा',
    family: 'trimurti',
    position: 1,
    epithet: 'The Creator · Svayambhu (self-born) · Pitamaha (grandfather of all)',
    source_text: 'Rig Veda 10.121 (Hiranyagarbha sukta, the golden womb), Brahma Purana, Manusmriti 1.5-1.9',
    one_liner: 'The first of the Trimurti — the four-faced creator who utters the Vedas, the original consciousness whose day is a kalpa (4.32 billion years) and whose night dissolves the cosmos back into seed.',
    meaning: 'Brahma (note: distinct from *Brahman*, the impersonal absolute) is the creator-aspect of the Trimurti — the cosmic function of *bringing-forth*. The Rig Veda\'s Hiranyagarbha hymn (10.121) names him as the golden embryo that floated on the cosmic waters before time began; the Brahma Purana opens with his self-creation from a lotus growing from Vishnu\'s navel. Four faces look in the four directions because the Vedas (one per face) must be uttered toward every horizon at once. Almost no temples are dedicated to Brahma — only Pushkar in Rajasthan is significant — because the *function* of creation, once complete, recedes; the devotee\'s relationship is more naturally with Vishnu (who maintains) or Shiva (who transforms). His day = one kalpa = 4.32 billion years; his night = the same; his life = 100 of his years = 311 trillion human years. When his life ends, Mahapralaya (the great dissolution) occurs and a new Brahma is born from Vishnu\'s next navel-lotus.',
    iconography: 'Four faces (chaturmukha) looking in the four cardinal directions, four arms holding the four Vedas + a kamandalu (water-pot) + a mala (rosary) + sometimes a sruva (sacrificial ladle). Seated on a white lotus (padma) growing from Vishnu\'s navel, riding the hamsa (white swan) which can separate milk from water — discrimination between the eternal and the temporal. Skin is reddish-gold. Consort: Saraswati (knowledge — because to create you must first know).',
    invocation: 'The Gayatri Mantra itself (Rig Veda 3.62.10) is offered to Savitri / Brahma\'s solar aspect — *Om bhur bhuvah svaha, tat savitur varenyam, bhargo devasya dhimahi, dhiyo yo nah prachodayat* ("on the three worlds we meditate on that splendor of the divine solar being; may it inspire our discrimination"). Recited at sunrise. Also: simple *Om brahmane namah*. Brahma-puja is rare; better to honor him through clear thought, the first creative act of any day, and offering the morning silence before speech.',
    in_love: 'Brahma in love is the moment before the relationship has form — the meeting where neither of you knows what you are yet, the conversation that creates the bond as it is being spoken. Brahma-energy in a partnership is the willingness to keep *bringing-forth* new aspects of each other rather than to settle into the form-of-the-relationship as fixed. The shadow is the partner who is always *starting* (new project, new declaration, new vision) without ever moving into the preserving (Vishnu) or transforming (Shiva) phases.',
    in_work: 'Brahma in work is the founder, the writer at the blank page, the architect drawing the first line. Brahma-energy is required to begin — to bring something out of the void of "there was nothing here." The shadow is the chronic starter who cannot maintain or finish; the perfect Brahma must hand off to Vishnu (who keeps the structure alive) and eventually to Shiva (who dissolves the obsolete form to make room for the next creation).',
    the_gift: 'Brahma offers the experience of the *first move* — the first word of the poem, the first stroke of the painting, the first cell of the embryo, the first thought of the morning. To know Brahma is to know that creation is happening *through* you every time you originate something, and that you are participating in the same function the cosmos is.',
    the_shadow: 'The story of Brahma\'s curse explains the absence of temples: in the Shiva Purana, Brahma lied to Shiva about having seen the top of Shiva\'s infinite lingam, and as punishment was cursed never to be widely worshipped. The shadow Brahma is the creator who *claims* completion before it exists, who fabricates the achievement, who confuses the *idea* of creation with the *work* of creation. Modern shadow: the entrepreneur who pitches the deck without building the product, the writer who tweets about the book without writing it.',
    pair_with_chakra: 'Crown (Sahasrara) — the chakra of cosmic consciousness and originating thought; where Brahma\'s creative impulse enters the body before any specific form takes shape.',
    pair_with_chakra_slug: 'crown',
    pair_with_mantra: 'Gayatri mantra — the most ancient extant mantra, offered to the solar/creator aspect; the canonical Brahma-honoring sound.',
    pair_with_mantra_slug: 'gayatri-mantra',
    key_questions: [
      'Where in my life am I being called to originate something — to make the first move on something that does not yet exist?',
      'When I do create, do I hand off cleanly to the Vishnu-energy of maintenance, or do I abandon and start the next thing?',
      'What new beginning have I been refusing because I am scared of the responsibility of being the one who started it?'
    ]
  },
  {
    slug: 'vishnu',
    text: 'Vishnu',
    sanskrit: 'विष्णु',
    family: 'trimurti',
    position: 2,
    epithet: 'The Preserver · Narayana (resting on the waters) · Hari (remover of sorrow) · Jagannath (lord of the universe)',
    source_text: 'Rig Veda 1.22.16-21 + 1.154 (the three strides), Vishnu Purana, Bhagavata Purana, Mahabharata (Bhagavad Gita)',
    one_liner: 'The Preserver. The Trimurti\'s sustaining function — the consciousness that holds the cosmos together between Brahma\'s creation and Shiva\'s dissolution. Descends in 10 avatars (dashavatara) whenever dharma collapses.',
    meaning: 'Vishnu is the *maintaining* aspect of the Trimurti. In the Rig Veda (1.22.16-21) he is the deva whose three strides (Trivikrama) measure the entire cosmos: earth, atmosphere, and the heavens above. Between cycles of creation he rests on the cosmic serpent Ananta-Shesha, floating on the milky ocean (kshira-sagara) with Lakshmi seated at his feet. The Vishnu Purana and the Bhagavata Purana name him as the source from which Brahma emerges on a navel-lotus at each cosmic dawn. Vaishnavism — devotion to Vishnu and his avatars, particularly Krishna and Rama — is the largest tradition in modern Hinduism. The 10 avatars (Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki) are the periodic descents he makes when dharma collapses; each avatar restores the cosmic balance and then withdraws.',
    iconography: 'Four arms holding shankha (conch, the primordial sound), chakra (Sudarshana, the discus of swift dharma), gada (mace, authority), padma (lotus, beauty and detachment). Skin dark blue or black like the depths of the cosmic ocean. Crowned, garlanded with vanamala (forest-flower garland), the kaustubha gem at his throat. Reclines on Ananta-Shesha (the thousand-headed serpent of infinity) on the milky ocean. Mount: Garuda (the great eagle, devourer of serpents). Consort: Lakshmi at his feet, anointing them.',
    invocation: 'The 12-syllable mantra *Om Namo Bhagavate Vasudevaya* ("I bow to the divine Vasudeva / Krishna") — one of the highest-protective mantras in Vaishnavism. Also *Om Vishnave Namah*. The Vishnu Sahasranama (1000 names of Vishnu, from the Mahabharata\'s Anushasana Parva) is chanted by Vaishnavas at dawn. Yellow flowers, tulsi (holy basil) leaves, butter lamps. Thursday is Vishnu\'s day.',
    in_love: 'Vishnu in love is the partner who *stays* — who maintains the bond across the seasons of the relationship, who shows up for the daily small acts (the cup of tea brought without asking, the message that arrives at the right hour), who does not need the relationship to be in constant Brahma-creation or Shiva-transformation to feel alive in it. The shadow is the partner who *only* maintains, who refuses to either create new texture or to transform stuck patterns.',
    in_work: 'Vishnu in work is the steward, the operator, the executive who keeps the company alive across decades, the maintainer of the open-source library nobody else will touch, the parent who runs the household across years without needing applause for it. Vishnu-energy is the long arc — the willingness to be the one who *holds the form* of something while it does its work in the world. The shadow is the bureaucrat who maintains structure long after the structure has become harmful.',
    the_gift: 'Vishnu offers the experience of *being held*. To meditate on Vishnu reclining on Ananta-Shesha is to experience that the cosmos is being maintained moment-to-moment by a consciousness that does not need you to *do* anything for it to keep doing its work. The gift is the relaxation of the assumption that you are personally holding everything together.',
    the_shadow: 'The shadow of Vishnu-devotion is the spiritual passivity that uses *"Vishnu will provide"* to avoid taking action that dharma is asking of you. The actual Vishnu of the Bhagavad Gita (as Krishna) tells Arjuna the opposite: *act, fulfill your dharma, do not abdicate from your duty in the name of detachment*. Krishna\'s teaching is karma-yoga (action without attachment to fruit), not karma-renunciation. Also: Vaishnavite triumphalism that has historically dismissed Shiva-devotees and Shakta-devotees as inferior — a sectarianism the actual Vishnu would not endorse.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of love that sustains across time; where Vishnu\'s maintaining function meets the embodied human capacity for ongoing devotion.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Hare Krishna — the maha-mantra of the Vaishnavite tradition; chanted on a mala 108 times, invokes Krishna (Vishnu\'s 8th avatar) and Rama (the 7th) together.',
    pair_with_mantra_slug: 'hare-krishna',
    key_questions: [
      'Where in my life am I being asked to be the one who *maintains* — to keep showing up for something across time, without applause, without drama?',
      'Am I confusing devotion with passivity — using "letting go" to avoid acting on what dharma is asking of me?',
      'What in my life is being held together by a consciousness larger than mine, and what would shift if I trusted that more?'
    ]
  },
  {
    slug: 'shiva',
    text: 'Shiva',
    sanskrit: 'शिव',
    family: 'trimurti',
    position: 3,
    epithet: 'The Transformer · Mahadeva (great god) · Nataraja (lord of the dance) · Bholenath (the innocent lord) · Pashupati (lord of beings)',
    source_text: 'Rig Veda Rudra hymn (2.33), Shvetashvatara Upanishad, Shiva Purana, Linga Purana, Yajurveda Sri Rudram',
    one_liner: 'The Transformer. The Trimurti\'s dissolving function — the consciousness that destroys what is finished so the new can begin. Ascetic on Mount Kailash, householder with Parvati, cosmic dancer whose 108 dance steps maintain reality.',
    meaning: 'Shiva is the *dissolving* and *transforming* aspect of the Trimurti — not "destroyer" in the modern sense of malice, but the cosmic principle that returns form to formless when its season ends. The Rig Veda\'s Rudra hymn (2.33) is his oldest known form: the howling storm-deity who is also Shiva (*"the auspicious"*) when he is propitiated. The Shvetashvatara Upanishad (c. 400 BCE) is the first text to name him as the supreme reality. The Shiva Purana details his cosmic biography: meditation on Kailash, marriage to Parvati after her tapas, fatherhood of Ganesh and Kartikeya, the swallowing of the halahala poison (turning his throat blue, hence Nilkantha) to save creation. As Nataraja he dances the Tandava — the cosmic dance that simultaneously creates, preserves, dissolves, and liberates. The Yajurveda\'s Sri Rudram (one of the oldest extant Shiva hymns) is chanted in Shiva temples daily.',
    iconography: 'Three eyes (the third is the eye of wisdom that burns illusion to ash). Matted hair (jata) bound up, with the Ganga river flowing from the top. Crescent moon on his head. Snake (Vasuki) around his neck. Tiger-skin garment. Trident (trishula — the three gunas: sattva, rajas, tamas) in his hand. Damaru (the small drum, the heartbeat of the cosmos). Ash smeared on his body (vibhuti — that everything returns to ash). Linga (the abstract aniconic form, the pillar of light that has no top or bottom — see Lingodbhava). Mount: Nandi (the white bull, the perfect devotee). Lives on Kailash. As Nataraja: dancing inside a ring of cosmic fire, crushing the demon of forgetfulness underfoot.',
    invocation: 'Panchakshara mantra (the five syllables): *Om Namah Shivaya* — perhaps the most-chanted mantra in all of Hinduism. Each syllable corresponds to one of the five elements (na/earth, ma/water, shi/fire, va/air, ya/ether) — to chant it is to harmonize the body\'s elements. Also: the Mahamrityunjaya mantra (Yajurveda 3.60: *"Om tryambakam yajamahe sugandhim pushtivardhanam, urvarukamiva bandhanan mrityor mukshiya mamritat"* — "we worship the three-eyed one who nourishes all; like a ripe cucumber from its stem, may we be liberated from death into immortality"). Bilva leaves, white flowers, ash, milk-and-honey poured on the linga. Monday is Shiva\'s day; Mondays of Shravana month (July-August) are the holiest.',
    in_love: 'Shiva in love is the partner who can hold *transformation* — who can be present with the version of you that is dying and the version that is being born without panicking and trying to freeze you at any one form. The Shiva-Parvati relationship in the Puranas is the great paradigm: she pursues him through her tapas, he tests her, they become equals (Ardhanarishvara, the half-male-half-female form). The shadow is the partner who *only* transforms, who keeps tearing the relationship down to its foundations every six months because they cannot bear stability.',
    in_work: 'Shiva in work is the editor who cuts the manuscript in half so the real book can emerge, the entrepreneur who shuts the company down rather than maintain a dying form, the surgeon who removes the tumor, the parent who lets the child leave home. Shiva-energy is required for any *necessary ending* — and most modern people are terrible at it, which is why most companies, relationships, and life-chapters persist long past their season.',
    the_gift: 'Shiva offers the experience that *dissolution is not the enemy*. To meditate on the cremation ground (Shiva is the lord of cremation grounds) is to experience that what is being lost is being returned to its source, and that what is returning to source is making room for the new. The gift is the loss of the fear that endings are catastrophes.',
    the_shadow: 'Spiritual bypassing through *"everything is impermanent, why care"* — the false detachment that uses Shiva-philosophy to avoid the work of maintaining what dharma is asking you to maintain. Shiva is not nihilism; Shiva is the *appropriate* dissolution of what has finished its work, not the *premature* dissolution of what is still doing its work. Also: the modern fetishization of Shiva-aesthetic (skull rosary, tiger-skin, ash) without the actual practice (meditation, tapas, vairagya, service).',
    pair_with_chakra: 'Third Eye (Ajna) — the seeing-chakra; Shiva\'s third eye is the eye of discriminative wisdom that burns illusion; ajna-practice is direct Shiva-practice.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_mantra: 'Om Namah Shivaya — the five-syllable mantra of Shiva-devotion; the canonical sound through which Shiva-bhakti is practiced.',
    pair_with_mantra_slug: 'om-namah-shivaya',
    key_questions: [
      'What in my life has finished its season and is asking to be dissolved — and what fear is keeping me from letting it go?',
      'Where am I confusing *transformation* with *destruction* — refusing the change because I cannot tell the difference between the death of a form and the death of myself?',
      'When have I last felt the version of me that is dying make room for the version that is being born — and what did I learn from that crossing?'
    ]
  },
  {
    slug: 'ganesh',
    text: 'Ganesh',
    sanskrit: 'गणेश',
    family: 'son',
    position: 4,
    epithet: 'The Remover of Obstacles · Vighnaharta (obstacle-destroyer) · Vinayaka (the one who removes) · Ganapati (lord of the ganas)',
    source_text: 'Ganesha Purana, Mudgala Purana, Shiva Purana (his birth-story), Atharva Veda Ganapati Atharvashirsha',
    one_liner: 'The Remover of Obstacles. Elephant-headed son of Shiva and Parvati. Lord of beginnings — invoked before every undertaking, every journey, every text. The most universally beloved deva in the Hindu pantheon.',
    meaning: 'Ganesh is the elephant-headed son of Shiva and Parvati, the Remover of Obstacles (and, in some accounts, the *placer* of obstacles where the devotee needs the friction in order to grow). His birth-story (Shiva Purana): Parvati created him from the turmeric paste of her own bath while Shiva was away in meditation; when Shiva returned, the boy refused to let him enter Parvati\'s chamber, and Shiva — not recognizing his own son — beheaded him in rage. Parvati\'s grief was such that Shiva sent his ganas (attendants) to bring back the head of the first creature they found, which was an elephant. The boy was revived with the elephant\'s head, blessed as Ganapati (lord of the ganas), and granted the boon of being invoked first before any other deva. The Ganapati Atharvashirsha (a late Upanishad attached to the Atharva Veda) declares him identical to Brahman — the absolute. He is invoked at the start of every Hindu text, every ceremony, every business venture, every wedding, every journey.',
    iconography: 'Elephant head with one tusk (the other broken — used to write the Mahabharata as Vyasa dictated it). Four arms holding ankusha (goad — gently steering the elephant of the mind), pasha (noose — for catching wandering thoughts), modaka (a sweet — the reward of practice) + an abhaya mudra (palm facing out, "do not fear"). Large belly (containing the entire cosmos). Mount: mushaka (the mouse — the small ego the immense self rides). Red or yellow flowers, durva grass (his favorite offering), modakas (steamed sweet dumplings), coconut.',
    invocation: 'Om Gam Ganapataye Namaha — the canonical Ganesh mantra; recited 108 times before beginning any important undertaking. Also Om Shri Ganeshaya Namaha. The Ganapati Atharvashirsha is chanted in full at major Ganesh festivals. Ganesh Chaturthi (Aug-Sept) is the largest festival; clay murti is worshipped for 10 days then dissolved in water (returning Ganesh to the elemental source). Tuesday is his day.',
    in_love: 'Ganesh in love is the willingness to invoke the *blessing of the new beginning* in each chapter of the relationship — to mark the first date, the first I-love-you, the move-in, the engagement, the marriage, the parenthood, the empty-nest as distinct chapters that each deserve invocation. The shadow is the relationship that has forgotten how to begin again, that treats every new chapter as an extension of the old without honoring the threshold.',
    in_work: 'Ganesh in work is the practice of *invoking* before *executing*. To call on Ganesh before opening the laptop is to put the work inside a frame of intention rather than reactivity. Ganesh-energy is the discipline of beginnings — the recognition that the first 60 seconds of any undertaking determine the energetic shape of the whole arc.',
    the_gift: 'Ganesh offers the experience that *the obstacle is the path* — that what is in the way is the way. The literal etymology: *Vighnaharta* means "obstacle-remover," but in the deeper teaching, Ganesh sometimes *places* the obstacle exactly where you need the friction to grow. The gift is the trust that whatever is currently blocking you was placed there with a precise pedagogical intention.',
    the_shadow: 'Reductive Ganesh-devotion that uses him as a vending machine: invoke, get the boon, move on. The actual practice is *relationship*, not transaction. Also: the Western yoga-studio Ganesh statue treated as decor rather than as a presence. The Ganapati Atharvashirsha warns that mantras chanted without bhava (feeling-tone) bring only their literal sound — not their living transmission.',
    pair_with_chakra: 'Root (Muladhara) — the foundation-chakra; Ganesh is the deva of muladhara in classical tantric mapping (he sits at the root of the spine), and root-work is the literal seat of his removing-obstacles function.',
    pair_with_chakra_slug: 'root',
    pair_with_mantra: 'Om Gam Ganapataye Namaha — the canonical Ganesh seed-mantra; the sound through which his blessing is invoked.',
    pair_with_mantra_slug: 'om-gam-ganapataye-namaha',
    key_questions: [
      'What new chapter am I beginning right now that I have not yet *invoked* — that I have not yet marked with the threshold-honoring it deserves?',
      'What obstacle in my life might be a placed obstacle — pedagogical, precise, in the way because it is the way?',
      'When was the last time I treated a Hindu deva (or any deity) as a vending machine rather than as a presence — and what would shift if I let the relationship become real?'
    ]
  },
  {
    slug: 'hanuman',
    text: 'Hanuman',
    sanskrit: 'हनुमान्',
    family: 'avatar',
    position: 5,
    epithet: 'The Perfect Devotee · Bajrangbali (one of thunderbolt strength) · Maruti (son of the wind-god Vayu) · Sankat-mochan (remover of distress)',
    source_text: 'Valmiki Ramayana (especially the Sundara Kanda — the 5th book), Tulsidas\'s Hanuman Chalisa (16th c.), Anjaneya Upanishad',
    one_liner: 'The Perfect Devotee. Vanara (monkey-like being) of immense strength who served Rama. The archetype of bhakti — surrender so complete that the devotee\'s power becomes limitless because there is no ego left to leak it.',
    meaning: 'Hanuman is the vanara warrior who became Rama\'s perfect devotee in the Ramayana. Son of Vayu (the wind-god) and Anjana, he is a Chiranjivi (one of seven immortals — alive even now, in subtle form, wherever Rama\'s name is being chanted). The Sundara Kanda (the 5th book of Valmiki\'s Ramayana, the most-recited Sanskrit text in the Hindu world after the Bhagavad Gita) tells of his single-handed leap from India to Lanka to find Sita, his confrontation with Ravana\'s court, and his return — the entire book is the literature of bhakti made narrative. Tulsidas\'s 16th-century Hanuman Chalisa (40 verses) is recited daily by tens of millions across north India; the verse *"Bhoot pishach nikat nahin aave, Mahabir jab naam sunave"* ("ghosts and demons do not approach when the great hero\'s name is heard") is invoked in moments of fear. His central teaching: when ego is fully dissolved into devotion to the beloved, the devotee\'s strength becomes the strength of the beloved.',
    iconography: 'Vanara form — anthropomorphic monkey-bodied. Sindoor (vermilion) covering his entire body (he once smeared sindoor on his whole body after seeing Sita apply a single dot of it for Rama, reasoning that more sindoor = more love for Rama). Carries a gada (mace, his weapon). Sometimes shown carrying the Dronagiri mountain (he flew to the Himalayas, could not identify the specific Sanjivani herb needed to save Lakshmana, and uprooted the entire mountain to bring back). Chest open, revealing Rama and Sita inside his heart (the iconic "heart-opening" image). Mount: he is himself the mount of Rama in many devotional images; he carries Rama and Lakshmana on his shoulders.',
    invocation: 'Hanuman Chalisa (40 verses by Tulsidas) — recited at dawn, dusk, before exams, before any test of courage, in fear, in illness. Also the 12-syllable mantra *Om Hum Hanumate Namaha*. And the shortest invocation: simply *Jai Hanuman* (victory to Hanuman) — said before any task that requires courage. Sindoor and til (sesame) oil offered. Tuesday is his day. Saturday is also associated (he protects from Shani\'s influence).',
    in_love: 'Hanuman in love is *devotional love* — love that is not centered on what the beloved gives you but on the privilege of serving them. The Hanuman-Rama relationship is not romantic but is the purest paradigm of love-without-self in the Hindu tradition. In a partnership, Hanuman-energy is the willingness to be the one who carries the harder weight without keeping score. The shadow is the codependent who *performs* selflessness while accumulating quiet resentment.',
    in_work: 'Hanuman in work is the second-in-command who serves the founder with such total devotion that the founder\'s vision becomes amplified through them. He is the COO to Rama\'s CEO, the bishop to the king, the trusted lieutenant. Hanuman-energy is the gift of being *of service to a vision larger than your own* without losing your strength in the process — because the strength comes *from* the service.',
    the_gift: 'Hanuman offers the experience that *devotion is the access route to limitless strength*. When the Chalisa says *"jasu hriday agar basahi Rama-Lakshman, sakal kaam karahi sab takhan"* — "in whose heart Rama and Lakshmana dwell, all tasks are accomplished" — the teaching is that the strength is not earned through tapas alone but unlocked through bhakti. The gift is the discovery that surrender is not weakness.',
    the_shadow: 'The Hindutva-era political co-option of Hanuman as a militant symbol of muscular Hindu nationalism — completely opposite to the actual Hanuman of the Ramayana, whose strength is *only* deployed in service of dharma, never in conquest. Also: hyper-masculine bro-spirituality that fetishizes the strength without doing the bhakti — *Bajrangbali* gym aesthetic without *Sundara Kanda* practice. The actual Hanuman is gentle, humble, and would weep at how his image has been weaponized.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of devotional love; Hanuman with the open chest revealing Rama-Sita is the literal iconographic image of anahata fully opened.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Hare Krishna — the maha-mantra that contains both Krishna and Rama (the two beloveds of Vishnu); Hanuman\'s heart contains Rama, so this mantra is also his.',
    pair_with_mantra_slug: 'hare-krishna',
    key_questions: [
      'Who or what in my life am I being called to serve with the kind of devotion that makes my ego transparent — and have I been refusing the assignment?',
      'Where am I performing selflessness while keeping a quiet ledger of what I am owed for it?',
      'When was the last time I felt my own strength *unlocked* by surrender rather than by effort — and what did that teach me about where my real power comes from?'
    ]
  },
  {
    slug: 'krishna',
    text: 'Krishna',
    sanskrit: 'कृष्ण',
    family: 'avatar',
    position: 6,
    epithet: 'The 8th Avatar of Vishnu · Govinda (cowherd) · Madhava (sweet one) · Vasudeva (son of Vasudeva) · Yogeshwara (lord of yoga) · The Divine Lover',
    source_text: 'Mahabharata (Bhagavad Gita is chapter 6.25-6.42 of the Bhishma Parva), Bhagavata Purana (10th canto), Harivamsha, Gita Govinda (Jayadeva, 12th c.)',
    one_liner: 'The 8th avatar of Vishnu. The cowherd-lover of Vrindavan, the charioteer-philosopher of Kurukshetra, the divine player whose lila (play) is the cosmos itself. Bhagavad Gita is his teaching. Source of more bhakti literature than any other deva.',
    meaning: 'Krishna is the 8th avatar of Vishnu — descended to remove the burden of unrighteous kings from the earth at the close of the Dwapara Yuga. His biography spans the Bhagavata Purana (10th canto) and the Mahabharata: born in prison to Devaki and Vasudeva, raised in Vrindavan by foster-parents Yashoda and Nanda, the cowherd-boy who stole butter and played the flute by which the gopis (cowherd girls) were drawn into rasa-lila (the dance of divine play). The married Radha\'s love for him is the most celebrated love-poetry in Sanskrit (Jayadeva\'s Gita Govinda, 12th c.). In his Dwarka chapter he becomes king, then on the battlefield of Kurukshetra he becomes Arjuna\'s charioteer and delivers the Bhagavad Gita — the most studied Hindu text in the modern world. ISKCON (Hare Krishna movement) since 1966 brought the Krishna-bhakti tradition into global Vaishnavism. The two great teachings: *lila* (the cosmos as divine play, not as serious work) and *karma-yoga* (action without attachment to fruit).',
    iconography: 'Dark blue skin (the color of the depths). Peacock feather in his crown. Flute (bansuri) at his lips. Yellow silk dhoti. Tulsi-mala (rosary of holy basil beads) at his neck. Sometimes with one foot crossed over the other in the tribhanga (three-bend) pose. With Radha in his Vrindavan form; with Arjuna and the chariot in his Kurukshetra form; with Sudarshana chakra in his Dwarka form. Surrounded by gopis, cows, calves, flutes. As baby Krishna (Bal Gopal) — crawling, butter-stealing, the cosmic player as an infant.',
    invocation: 'Hare Krishna maha-mantra (16-syllable, the central practice of ISKCON and Gaudiya Vaishnavism): *Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare*. Also *Om Namo Bhagavate Vasudevaya* (12 syllables). Reading the Bhagavad Gita — even one verse a day — is itself Krishna-practice. Janmashtami (Aug-Sept) is his birthday; midnight celebration. Yellow flowers, basil leaves, butter, milk.',
    in_love: 'Krishna in love is the divine lover — not chaste, not transactional, but *playful*. The rasa-lila (the circle dance where Krishna multiplied himself so each gopi felt he was dancing only with her) is the paradigm: divine love is *infinite intimacy* with everyone at once, not zero-sum allocation. Radha is the foremost gopi not because she was first but because her *bhava* (feeling) was most intense. The shadow is the partner who uses *"Krishna had many gopis"* to justify promiscuity that is actually just ego-feeding rather than divine play.',
    in_work: 'Krishna in work is *karma-yoga* — the teaching of the Bhagavad Gita 2.47: *"karmanyevadhikaraste ma phaleshu kadachana"* ("you have the right to action, never to its fruit"). Krishna-energy in work is the discipline of *doing your dharma fully without grasping for the outcome*. The shadow is the worker who uses karma-yoga to be sloppy about quality, mistaking "non-attachment to fruit" for "non-attachment to excellence." Krishna asks for *both* — perfect action *and* non-attachment.',
    the_gift: 'Krishna offers the experience that *the cosmos is play, not punishment*. To know Krishna is to feel that what looks like serious karma-business is actually divine *lila* — that the gods are not somber but playful, that meditation can be joyful, that bhakti is essentially the relaxation into the divine love-affair that has been happening all along.',
    the_shadow: 'Western commodification of Krishna-bhakti as airport-pamphlet evangelism and yoga-festival kirtan-aesthetic without the actual sadhana (the long discipline of japa, scripture study, seva). Also: the Hindutva co-option of Krishna as a *Hindu* nationalist symbol — the actual Krishna of the Gita speaks to *Arjuna as a human being facing his dharma*, not as a Hindu identity-claim. The Gita\'s teaching is universal; the politicization is reductive.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of divine love; Krishna-bhakti is the most heart-centered devotional tradition in the Hindu world.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Hare Krishna — the maha-mantra of Krishna-bhakti; chanted on a 108-bead japa-mala, the central practice of the Krishna-devotional tradition.',
    pair_with_mantra_slug: 'hare-krishna',
    key_questions: [
      'Where in my life have I been treating the cosmos as serious work when it is asking to be received as divine play?',
      'Am I living the Bhagavad Gita\'s karma-yoga — full action, no grasping for fruit — or am I either grasping (action with attachment) or abdicating (no action in the name of detachment)?',
      'What would change if I let myself feel that the divine is in love with me — not abstractly, but in the specific, intimate, playful way Krishna is in love with Radha?'
    ]
  },
  {
    slug: 'rama',
    text: 'Rama',
    sanskrit: 'राम',
    family: 'avatar',
    position: 7,
    epithet: 'The 7th Avatar of Vishnu · Maryada Purushottama (the perfect upholder of dharma) · Raghunath (lord of the Raghu lineage) · Sita-pati (husband of Sita)',
    source_text: 'Valmiki Ramayana (c. 5th-4th c. BCE, the original 24,000-verse Sanskrit epic), Tulsidas Ramcharitmanas (1574 CE Awadhi retelling, the most-recited Rama text in modern north India), Adhyatma Ramayana',
    one_liner: 'The 7th avatar of Vishnu. The dharmic king whose entire life is the working-out of how to remain righteous when righteousness costs everything. Husband of Sita, devotee-king of Ayodhya, the model of vrata (vow-keeping) in the Hindu world.',
    meaning: 'Rama is the 7th avatar of Vishnu, descended in the Treta Yuga to slay the demon-king Ravana and restore dharma. Valmiki\'s Ramayana (c. 5th-4th c. BCE, 24,000 verses across 7 kandas) tells his biography: prince of Ayodhya, exiled to the forest for 14 years by his father\'s ill-given boon to a stepmother, accompanied by his wife Sita and brother Lakshmana, the abduction of Sita by Ravana, the war in Lanka with Hanuman and the vanara army, the return to Ayodhya and coronation. Tulsidas\'s 16th-century Ramcharitmanas re-rendered the epic in vernacular Awadhi — the most-recited Rama text in modern north India, performed annually as Ram-lila in every village across the Hindi belt. Where Krishna is the divine lover, Rama is the divine *householder-king* — Maryada Purushottama, the perfect upholder of social-and-cosmic order. His life is not a romance; it is a working-out of the cost of dharma: he loses his throne to keep his father\'s word; he loses his wife to monarchy\'s demand for visible chastity; he ultimately loses his own life to the gods\' summons. Diwali (the festival of lights, Oct-Nov) commemorates his return to Ayodhya.',
    iconography: 'Standing or seated in royal posture. Dark blue or green skin (matching Vishnu). Crown (mukuta) of an Ayodhyan prince. Yellow silk dhoti. Bow (kodanda — his signature weapon) in one hand, quiver of arrows on his back. Sometimes shown with Sita seated to his left, Lakshmana standing behind, and Hanuman kneeling in devotion at his feet — the iconic Rama-Darbar (court of Rama) image. Tilak on forehead. Calm, sovereign expression — not the playful Krishna grin, but the steady gaze of the one who carries the weight of dharma without performing the burden.',
    invocation: 'Sri Ram Jai Ram Jai Jai Ram — the simplest and most-chanted Rama mantra; the dhun (rhythmic chant) sung at every Hindu funeral procession in north India as the body is carried to cremation. Also: Om Sri Ramaya Namaha. The Ram-naam (the name "Ram" itself, chanted as japa) is considered by Tulsidas to be greater than Rama himself — *"naam pratapa"*, the glory of the name. Reading even a chaupai (4-line verse) of the Ramcharitmanas daily is itself Rama-practice. Diwali (Oct-Nov) is his return-to-Ayodhya festival; Ram Navami (March-April) is his birthday.',
    in_love: 'Rama in love is the partner who *keeps the word*. The Rama-Sita relationship is the great paradigm of vrata-marriage — vow-keeping as the substance of love rather than feeling-keeping. Rama goes into exile because his father gave a word; Sita goes with him because she gave a word; Lakshmana goes because he gave a word. When the relationship breaks, it breaks not on feeling but on the social demand for visible proof — Rama exiles a pregnant Sita to satisfy his subjects\' doubt about her chastity. The shadow is the moral perfectionism that prefers being right over staying in relationship — the partner who chooses the abstract principle over the embodied beloved standing in front of them.',
    in_work: 'Rama in work is the leader who carries the institutional weight without making it about themselves — the CEO who stays in role through the crisis, the founder who keeps the company\'s vision intact through every market cycle, the parent who maintains the household through illness and exile. Rama-energy is the discipline of *vrata*: I gave my word, so I will keep it, even if circumstances change and keeping it costs me everything. The shadow is the rigid rule-follower who keeps the letter while losing the spirit — the operator so committed to *form* that they cannot adapt when adaptation is what dharma is actually asking.',
    the_gift: 'Rama offers the experience that *integrity is its own reward* — that to be the kind of person whose word can be relied on is itself a form of liberation, not a constraint. The Ramcharitmanas teaches that the name "Ram" is greater than Rama because the name can be carried into every situation; the embodied Rama could only be in one place at a time, but his *name* protects the devotee anywhere. The gift is the discovery that the practice of vow-keeping makes a clearer, simpler life.',
    the_shadow: 'The political weaponization of Rama by Hindutva nationalism as a symbol of muscular Hindu identity against Muslim minorities — culminating in the 1992 Babri Masjid demolition and the 2024 Ayodhya Ram Mandir consecration. The actual Rama of Valmiki and Tulsidas does not endorse communal hatred; he weeps for Ravana when Ravana dies, performs his last rites with dignity. Also: the patriarchal misuse of the Sita-exile episode as justification for chastity-control of women; modern Hindu feminist scholarship (Madhu Kishwar, Nabaneeta Dev Sen) has long named this co-option and reclaimed Sita as the moral center of the epic, not its accessory.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of steady devotion and vow-keeping; Rama-bhakti is heart-centered devotion to dharma-as-form, the love that takes the shape of integrity.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Hare Krishna — the maha-mantra contains "Hare Rama" in its second half, making it as much a Rama-mantra as a Krishna-mantra; chanted on a mala 108 times.',
    pair_with_mantra_slug: 'hare-krishna',
    key_questions: [
      'Where in my life have I been holding a vow that costs me everything to keep — and is the cost actually the practice, or is the cost a signal I need to renegotiate the vow?',
      'Am I confusing *integrity* with *rigidity* — keeping the letter of a commitment in a way that violates its spirit?',
      'When the social demand for visible perfection conflicts with the private truth of relationship, which one is dharma actually asking me to honor?'
    ]
  },
  {
    slug: 'lakshmi',
    text: 'Lakshmi',
    sanskrit: 'लक्ष्मी',
    family: 'devi',
    position: 8,
    epithet: 'The Goddess of Abundance · Shri (auspiciousness) · Padma (lotus-born) · Sridevi (the goddess Shri) · consort of Vishnu',
    source_text: 'Sri Sukta (Rig Veda Khila 2.6, c. 1000 BCE — the oldest extant Lakshmi hymn), Vishnu Purana, Lakshmi Tantra, Devi Bhagavata Purana',
    one_liner: 'The goddess of abundance — material, spiritual, relational, aesthetic. Consort of Vishnu, lotus-born from the churning of the cosmic ocean. The most-invoked devi in modern Hindu daily practice — every Diwali night, every new business, every threshold of prosperity.',
    meaning: 'Lakshmi (literally "good sign," "fortune") is the goddess of *shri* — auspiciousness, abundance, prosperity, beauty, sovereignty. The Sri Sukta (Rig Veda Khila 2.6) is her oldest hymn, naming her as the golden one (Hiranyavarna) whose touch makes wealth appear. The Vishnu Purana tells her origin: at the churning of the cosmic ocean (samudra manthan) by devas and asuras, after the poison and the nectar emerged, Lakshmi herself rose from the foaming waters seated on a lotus, and chose Vishnu as her consort. She incarnates alongside each of Vishnu\'s avatars — as Sita beside Rama, Rukmini beside Krishna, Padmavati beside Venkateshwara. Her eight forms (Ashtalakshmi) name eight categories of abundance: Adi (primordial), Dhana (wealth), Dhanya (grain/food), Gaja (royal/elephantine), Santana (progeny), Vira (courage), Vijaya (victory), Vidya (knowledge). Diwali (the festival of lights, Oct-Nov, on the new moon of Kartika month) is her central festival — every Hindu home is cleaned, decorated, and lit to welcome her in.',
    iconography: 'Seated or standing on a pink lotus (padma). Four arms holding two lotuses + a kalasha (vessel overflowing with gold) + an abhaya mudra (do not fear). Gold coins falling from one hand. Two elephants on either side anointing her with water from raised trunks (gajalakshmi — the most common iconographic form). Red sari with gold border. Heavy gold jewelry — but tastefully arrayed, never gaudy (the goddess of *aesthetic* abundance, not vulgarity). Owl (uluka) as a secondary mount (the bird that sees in darkness — abundance sees what others miss). With Vishnu: seated at his feet on the cosmic serpent Ananta-Shesha.',
    invocation: 'Om Sri Mahalakshmyai Namaha — the canonical Lakshmi seed-mantra. Sri Sukta (16 verses, Rig Veda Khila) — chanted on Fridays (her day) and on Diwali. Lakshmi Ashtotram (108 names) and Lakshmi Sahasranama (1000 names) for deeper practice. On Diwali night the house is cleaned (Lakshmi will not enter a dirty home), lit with diyas, decorated with rangoli at the threshold, and a small puja is performed with red flowers, sweets, gold coins, and the Sri Sukta. Friday is her day; the Kartika new moon is her festival.',
    in_love: 'Lakshmi in love is *abundance as relationship* — the partner who knows that wealth is not the opposite of love but its medium when offered freely. The Lakshmi-Vishnu relationship is the paradigm: she sits at his feet not as subordinate but as the source of his earthly abundance; he is incomplete without her. Lakshmi-energy in a partnership is the willingness to *bring abundance into the relationship* — beauty, care, tended-home, generosity — without making it transactional. The shadow is the partner who confuses *materialism* with abundance, or who weaponizes generosity as control.',
    in_work: 'Lakshmi in work is the founder who builds wealth as a *flow* rather than as a hoard, the entrepreneur who recognizes that prosperity that does not circulate becomes stagnant. Lakshmi-energy is the discipline of *receiving cleanly* — the willingness to be paid well for honest work, to charge a fair price, to receive a gift without diminishing the giver. The shadow is the scarcity-mindset that experiences receiving as shameful or the greed that hoards what was meant to flow. Lakshmi withdraws from homes (and businesses) where she is hoarded; she returns to those that practice generosity.',
    the_gift: 'Lakshmi offers the experience that *abundance is your birthright, not a transgression*. The Sri Sukta\'s repeated refrain — *"Hiranyavarnam harinim suvarna-rajata-srajam"* ("the golden-colored one, the deer-like one, garlanded with gold and silver") — is the goddess herself reassuring the devotee that the cosmos *wants* you to have what you need to live, that piety is not poverty, that material flourishing is a legitimate spiritual outcome.',
    the_shadow: 'Modern Hindu commercialization of Lakshmi-puja as wealth-extraction prayer — the Diwali-as-shopping-festival, the entrepreneur asking Lakshmi for return-on-investment without doing the actual work, the corruption of Lakshmi-bhakti into prosperity-gospel without the dharmic foundation. The Sri Sukta is clear: Lakshmi only stays where there is *also* truth, generosity, cleanliness, and right conduct. She *leaves* (Alakshmi, her shadow sister, replaces her) where wealth is hoarded, where the home is unclean, where the family is in discord, where the worker exploits.',
    pair_with_chakra: 'Sacral (Svadhisthana) — the chakra of creativity, sensuality, and material flow; Lakshmi\'s domain is exactly the abundance that flows through the body\'s capacity to receive and to create.',
    pair_with_chakra_slug: 'sacral',
    pair_with_mantra: 'Gayatri mantra — chanted at sunrise, often paired with Lakshmi-puja to invoke the abundance of the rising day; the universal mantra of auspiciousness.',
    pair_with_mantra_slug: 'gayatri-mantra',
    key_questions: [
      'Where in my life am I refusing the abundance the cosmos is trying to give me — out of guilt, scarcity-conditioning, or false-modesty?',
      'Am I keeping my home, my work, and my relationships clean enough that Lakshmi can enter — or have I let stagnation and clutter close the door?',
      'When abundance does flow to me, do I let it circulate as generosity, or do I hoard it and watch it sour?'
    ]
  },
  {
    slug: 'saraswati',
    text: 'Saraswati',
    sanskrit: 'सरस्वती',
    family: 'devi',
    position: 9,
    epithet: 'The Goddess of Wisdom · Vagdevi (goddess of speech) · Sharada (giver of essence) · Vidyadayini (giver of knowledge) · consort of Brahma',
    source_text: 'Rig Veda 6.61 + 7.95 (the Saraswati hymns to the now-vanished river), Devi Mahatmya, Saraswati Stotram (attributed to Adi Shankara, 8th c.), Saraswati Rahasya Upanishad',
    one_liner: 'The goddess of wisdom, learning, music, and speech. Consort of Brahma. Patron of every student, scholar, musician, writer, and orator in the Hindu world. The deva of svadhyaya (self-study) made personal.',
    meaning: 'Saraswati (literally "she who flows") originated as the goddess of the Saraswati river — one of the Rig Vedic seven sacred rivers, named in over 70 Rig Vedic hymns as a mighty perennial river flowing from the Himalayas to the sea (satellite imagery and paleo-channel research has confirmed she existed and dried up c. 1900 BCE). When the river disappeared, the goddess remained — and was elevated from river-deity to the goddess of all that *flows*: speech, music, knowledge, wisdom. The Devi Mahatmya (c. 6th c. CE) names her as one of the three primary Devis alongside Lakshmi and Parvati. She is the consort of Brahma — because to *create* (Brahma\'s function) one must first *know* (Saraswati\'s function). She is the patron of svadhyaya (self-study, the 9th niyama), the goddess every Hindu student invokes before opening a book, every musician invokes before playing, every writer invokes before drafting. Vasant Panchami (the 5th day of Magha, late Jan / early Feb) is her festival — children\'s first writing lessons traditionally happen on this day (the *akshara-abhyasa* ritual).',
    iconography: 'Seated on a white lotus (the unstained mind). Wearing pure white sari (sattva — the gunas of clarity). Four arms holding a veena (the Indian stringed instrument — music, the structured vibration of consciousness) + a book (the Vedas) + a mala (japa-rosary) + a kalasha (vessel of soma, the elixir of knowledge). Mount: hamsa (the white swan that can separate milk from water — discriminative knowledge) OR a peacock (sometimes shown, representing the conquest of pride). Pale-gold or cream complexion. Crescent moon on her forehead (in some depictions). No heavy jewelry — she is the goddess of *essence*, not ornamentation; she sits in the simplicity of the scholar.',
    invocation: 'Saraswati Vandana — *"Ya kundendu tushara hara dhavala, ya shubhra vastravruta, ya veena varadanda manditakara, ya shweta padmasana"* ("she who is white like jasmine, the moon, frost, and pearls; clothed in pure white; her hand adorned with the veena; seated on the white lotus...") — chanted by Hindu students at the start of every school year. Also: Om Aim Saraswatyai Namaha (the *aim* seed is her specific bija). Pen-puja on Vasant Panchami — students place their pens at her feet, accept them back blessed. Thursday is her day (alongside Brahma). White flowers, white sweets, milk, sandalwood paste.',
    in_love: 'Saraswati in love is the partner who *converses* — who knows that the deepest intimacy in long-term love is the willingness to keep *thinking together*, to keep speech alive, to keep the music in the household. The shadow is the relationship that has stopped talking — that has substituted logistical coordination for actual exchange. Saraswati-energy is the discipline of bringing your reading, your music, your questions, your wonder back into the partnership rather than letting them happen only outside it.',
    in_work: 'Saraswati in work is the scholar, the writer, the researcher, the musician, the teacher. Saraswati-energy is the discipline of *clarity* — the willingness to do the slow work of *knowing the thing properly* before speaking on it. The shadow is the influencer who skips the study and goes straight to the post, the consultant who skips the research and goes straight to the deliverable. Saraswati is fierce on this: she withdraws from those who pretend to knowledge they have not earned.',
    the_gift: 'Saraswati offers the experience that *learning is itself a form of bhakti*. To open a book with reverence is to be in relationship with the lineage that wrote it. To play music with attention is to be in relationship with the cosmic vibration that is the source of all music. Saraswati-practice is the recognition that intellectual rigor and devotional surrender are not opposed — they are the same practice in different registers.',
    the_shadow: 'The caste-and-class gatekeeping of Saraswati through Sanskrit education — historically, access to her was restricted to upper-caste Brahmin males, and the Indian education system still carries that residue. The actual Saraswati of the Rig Veda is the *river* — she flows where she flows, she is not anyone\'s property, and the modern democratization of education is her returning to her true universal form. Also: the modern academic\'s seduction by *knowing about* rather than *knowing* — Saraswati does not honor mere data-collection; she honors transformation through study.',
    pair_with_chakra: 'Throat (Vishuddha) — the chakra of speech and expression; Saraswati is the deva of vishuddha in classical tantric mapping, and throat-work is the literal seat of her speech-function.',
    pair_with_chakra_slug: 'throat',
    pair_with_mantra: 'Om — the primordial seed-syllable; Saraswati as Vagdevi (goddess of speech) is the indwelling intelligence of Om itself, the source from which all sound and meaning emerge.',
    pair_with_mantra_slug: 'om',
    key_questions: [
      'What am I currently pretending to know that I have not actually studied — and what would shift if I returned to the actual source-text?',
      'Where in my life has the *music* gone silent — the conversation in my closest relationships, the reading that fed my mind, the play that fed my body?',
      'Am I treating learning as accumulation (more facts, more credentials) or as transformation (slower study, deeper integration)?'
    ]
  },
  {
    slug: 'durga',
    text: 'Durga',
    sanskrit: 'दुर्गा',
    family: 'devi',
    position: 10,
    epithet: 'The Warrior Goddess · Mahishasura-mardini (slayer of the buffalo-demon) · Shakti (cosmic power) · Devi (the goddess) · Durgatinashini (destroyer of difficulties)',
    source_text: 'Devi Mahatmya (c. 6th c. CE, also called Durga Saptashati or Chandi Path — the central Shakta scripture, 700 verses across 13 chapters in the Markandeya Purana), Devi Bhagavata Purana, Lalita Sahasranama',
    one_liner: 'The warrior goddess. The cosmos\'s ultimate defender — the consolidated Shakti of all the devas, sent forth to slay the buffalo-demon when no male god could. Patron of Navaratri. The deity who appears when ordinary force has failed and something larger must intervene.',
    meaning: 'Durga (literally "the fortress," "the unreachable") is the warrior aspect of the Mahadevi. The Devi Mahatmya (c. 6th c. CE, the foundational Shakta scripture) tells her origin: the buffalo-demon Mahishasura had defeated all the devas through a boon making him unkillable by any male; in desperation, the devas combined their tejas (radiant power) into a single feminine form, armed her with each deva\'s weapon, and sent her forth. She rode the lion (or tiger), confronted Mahishasura through nine days of battle, and on the tenth day beheaded him. This is the cosmological frame of Navaratri (the nine-night autumn festival, Sept-Oct) and Dussehra/Vijayadashami (the tenth day of victory). She is the Mahadevi (great goddess) in her *protective-warrior* form — distinct from Parvati (her gentle householder form), Kali (her terrifying-destroyer form), and Lakshmi+Saraswati (her abundance + wisdom aspects). Shaktism — devotion to the Devi as supreme — names Durga as the active Brahman (the cosmic principle in motion), where Shiva is the silent witness.',
    iconography: 'Eighteen-armed (sometimes eight, sometimes ten) — each arm holding one weapon donated by a male deva: Shiva\'s trident, Vishnu\'s discus, Indra\'s vajra, Yama\'s staff, Vayu\'s bow, Agni\'s spear, Brahma\'s kamandalu, Vishvakarma\'s axe, Surya\'s rays. Riding a lion or tiger — the symbol of fearlessness and royal sovereignty. Red sari (the color of Shakti). Crowned. Three eyes (like Shiva — the third is wisdom). Calm-fierce expression as she stands on the body of Mahishasura, trident through his throat, his buffalo-form behind her — the famous Mahishasura-mardini image (every Indian temple has one).',
    invocation: 'The Devi Mahatmya itself (700 verses, chanted in full as the Chandi Path during Navaratri) — the most powerful invocation of Durga. The opening verse — *"Ya devi sarva bhuteshu shakti rupena samsthita, namastasyai namastasyai namastasyai namo namaha"* ("to the goddess who in all beings dwells in the form of power, salutations again and again and again") — is one of the most-chanted Sanskrit verses. Also: Om Dum Durgayai Namaha (the *dum* seed). Navaratri (Sept-Oct) is her primary festival — nine nights of fasting, kirtan, and chandi-recitation. Tuesday and Friday are her days. Red flowers (hibiscus is favored), red bangles, kumkum, lemon garlands.',
    in_love: 'Durga in love is the partner who *fights for the relationship* — who knows that love sometimes requires not gentleness but the willingness to draw a line, name a betrayal, defend a boundary. Where Lakshmi is the goddess of abundance-as-relationship and Saraswati is the goddess of speech-as-relationship, Durga is the goddess of *protection-as-relationship* — the love that says *no further, this is the line*. The shadow is the partner who confuses Durga-energy with mere combativeness, who fights everywhere and protects nothing.',
    in_work: 'Durga in work is the operator who steps in when ordinary methods have failed — the crisis-CEO, the lawyer who takes on the case nobody else will, the activist who confronts the institution that needs confronting. Durga-energy is *legitimate force in service of dharma*. The shadow is the use of Durga\'s aesthetic (warrior-woman empowerment branding) without doing the actual work of confrontation — calling oneself a warrior while avoiding the actual battles dharma is asking one to fight.',
    the_gift: 'Durga offers the experience that *there is a force on the side of dharma that is bigger than your individual capacity*. When the demon is too large to defeat alone, the practitioner does not have to become bigger; the practitioner invokes the goddess and lets *her* fight through them. The gift is the relief of knowing that you do not have to be Atlas — there is a Devi whose actual job is to handle what cannot be handled.',
    the_shadow: 'The political weaponization of Durga as Hindu-nationalist warrior-iconography against Muslims and other minorities — particularly in Bengali nationalism and in the Hindutva use of Durga-puja as identity-marker. The actual Devi of the Devi Mahatmya does not fight humans; she fights *adharma itself* — the cosmic principle of disorder, not particular communities. Also: corporate appropriation of Durga as "girlboss" motivational iconography, stripped of the dharmic frame (Shaktism is not self-empowerment, it is surrender to the cosmic feminine as supreme).',
    pair_with_chakra: 'Solar Plexus (Manipura) — the chakra of warrior-will and personal power; Durga is the goddess of manipura at full activation, the fire of the just confrontation made bodily.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mantra: 'Gayatri mantra — the Devi Gayatri, *"Om mahadevyai cha vidmahe Durgayai cha dhimahi tanno devi prachodayat"*, is a Durga-specific gayatri; the goddess invoked at sunrise to fight the day\'s battles.',
    pair_with_mantra_slug: 'gayatri-mantra',
    key_questions: [
      'What in my life is a Mahishasura — a demon-pattern too large for my individual capacity to defeat — that I have been trying to handle alone instead of invoking the larger force?',
      'Where am I confusing *combativeness* with *protection* — fighting battles dharma is not asking me to fight, while avoiding the one battle that is mine?',
      'When dharma calls me to draw a hard line, can I do so without apology, or does my conditioning around feminine niceness keep me from being the Durga the situation needs?'
    ]
  },
  {
    slug: 'parvati',
    text: 'Parvati',
    sanskrit: 'पार्वती',
    family: 'devi',
    position: 11,
    epithet: 'The Devoted Goddess · Uma (light) · Gauri (the fair one) · Annapurna (giver of food) · Shakti (cosmic power) · consort of Shiva, mother of Ganesh and Kartikeya',
    source_text: 'Skanda Purana, Shiva Purana, Devi Bhagavata Purana, Kalidasa\'s Kumarasambhava (5th c. CE — the great Sanskrit kavya on her tapas to win Shiva), Soundarya Lahari (attributed to Adi Shankara)',
    one_liner: 'The devoted goddess — daughter of the mountain Himavan, consort of Shiva, mother of Ganesh and Kartikeya. The Mahadevi in her gentle-householder form. Her tapas (austerities) to win Shiva is the central paradigm of patient devotion in the Hindu world.',
    meaning: 'Parvati (literally "she of the mountain," daughter of Himavan, king of the Himalayas) is the gentle-householder form of the Mahadevi — distinct from Durga (warrior) and Kali (destroyer), though all three are aspects of the same Shakti. The Skanda Purana tells her central story: born as the reincarnation of Sati (Shiva\'s first wife, who self-immolated when her father insulted Shiva), Parvati performed ferocious tapas — meditation through the heat of summer, the cold of winter, eating only one bilva leaf a day — for thousands of years to win the ascetic Shiva\'s love. Shiva tested her, finally accepted her, and they became Ardhanarishvara (the half-male half-female unified deity — the iconographic image of the union of consciousness and energy). Their two sons are Ganesh (the elephant-headed remover of obstacles) and Kartikeya (the warrior-deva). Where Durga is the cosmic protector and Kali the cosmic destroyer, Parvati is the cosmic *mother* and the cosmic *householder* — the goddess of marriage, fertility, family, and the patient devotion that holds a long love together. As Annapurna she is the giver of food; as Gauri she is the fair-skinned one of summer; as Uma she is the light.',
    iconography: 'Seated or standing in graceful posture, often beside Shiva on Mount Kailash. Golden or cream complexion (Gauri). Crown, gold ornaments (more than Saraswati, less than Lakshmi — she is the householder, not the wealth-goddess). Red sari (often with green border — the marriage colors). Two arms (sometimes four) holding lotus, mirror, sometimes Ganesh as an infant on her lap. With Shiva: leaning against him on Kailash, surrounded by Nandi (the bull) and the children. As Ardhanarishvara: the right side is Shiva (ascetic, ash-smeared, with matted hair and snake), the left side is Parvati (gold-complexioned, jeweled, sari-clad) — one body, two halves, the literal iconography of consciousness-and-energy as inseparable.',
    invocation: 'Om Parvatyai Namaha. Mahalakshmi-Mahasaraswati-Mahakali — the three goddesses of the Devi Mahatmya are all considered forms of Parvati. The Lalita Sahasranama (1000 names of the Devi as Lalita Tripura Sundari) is one of the central Parvati-Shakta texts. The Soundarya Lahari (100 verses, attributed to Adi Shankara) is the most exquisite hymn to the goddess in Sanskrit. Married Hindu women perform Mangala Gauri vrata (Tuesday fasts to Gauri) for the wellbeing of their husbands. Teej (the monsoon festival) and Karva Chauth (the autumn fast) are her central married-women festivals. Monday is her day (alongside Shiva).',
    in_love: 'Parvati in love is the partner who *waits* — who does the slow tapas of becoming the person the beloved can choose. The Parvati-Shiva paradigm is patient devotion: she pursued Shiva not by performing for him, but by going into the forest alone and meditating until her presence itself became undeniable. The teaching is that the deepest love is not the one you negotiate for or perform yourself into; it is the one that emerges when both parties have done their own becoming and meet in the equality of completed selves. The shadow is the partner who confuses *waiting* with *pining* — the years spent in vague hoping rather than in actual tapas.',
    in_work: 'Parvati in work is the long-arc practitioner — the artist who works on the same craft for thirty years before being recognized, the parent who maintains the household across decades, the meditator who sits the same cushion through three thousand mornings. Parvati-energy is *tapas-as-discipline* — the patience to be in the slow burn long enough for the form you are seeking to actually emerge. The shadow is *tapas-as-self-punishment*: discipline that is mostly about proving one\'s worthiness rather than serving the actual work.',
    the_gift: 'Parvati offers the experience that *patient devotion is itself a kind of power*. The Kumarasambhava\'s most famous line — Shiva\'s recognition of Parvati after testing her — captures it: he sees that her tapas has made her his equal, not his supplicant. The gift is the discovery that the slow, unglamorous practice of *just keep showing up* eventually transforms the practitioner into someone the universe cannot ignore.',
    the_shadow: 'The patriarchal misuse of the Parvati-Shiva story as justification for women\'s endless waiting and self-sacrifice in unequal marriages — *"if you just do enough tapas, he will come around"* used to keep women in relationships that are actually finished. The actual Parvati is not waiting for an emotionally-unavailable Shiva to wake up; she is doing her own becoming, and her tapas is for *herself*, not for him. When Shiva tests her and tries to dissuade her from marriage, she refuses him — she would rather complete her tapas than marry a Shiva who has not seen her clearly. Also: the saccharine "good Hindu wife" co-option of Parvati as obedient consort, stripping her of the fierce-Shakti dimension she shares with Durga and Kali.',
    pair_with_chakra: 'Heart (Anahata) — the chakra of devotional patience and equal partnership; Parvati-bhakti is the love that has done its own work, the heart that meets the beloved at full height.',
    pair_with_chakra_slug: 'heart',
    pair_with_mantra: 'Om Namah Shivaya — the canonical Shiva mantra, equally a Parvati mantra (since she is Shiva\'s inseparable Shakti, the energy of which his consciousness is the witness); chanted on a mala 108 times.',
    pair_with_mantra_slug: 'om-namah-shivaya',
    key_questions: [
      'Where in my life am I being asked to do tapas — slow, unglamorous, sustained practice — for something the universe will not give me on faster terms?',
      'Am I confusing *patient devotion* with *passive pining* — actually doing the work of becoming, or just waiting and calling it surrender?',
      'When the beloved tests me, can I stand in my own completed self (the Parvati who refuses Shiva\'s dissuasion) — or do I collapse into supplication?'
    ]
  },
  {
    slug: 'kartikeya',
    text: 'Kartikeya',
    sanskrit: 'कार्तिकेय',
    family: 'son',
    position: 12,
    epithet: 'The Warrior Son · Skanda (the leaper) · Murugan (Tamil — the beautiful one) · Subramanya (auspicious) · Shanmukha (six-faced) · Senapati (commander of the deva army)',
    source_text: 'Skanda Purana (the longest Purana, 81,000 verses dedicated to him), Kalidasa\'s Kumarasambhava (5th c. CE — narrates his birth), Tamil Thirumurai + Thiruppugazh (Arunagirinathar, 15th c.), Mahabharata Vana Parva',
    one_liner: 'The warrior son of Shiva and Parvati. Six-faced commander of the deva army. The most-beloved deity in Tamil Nadu (as Murugan). Patron of spiritual warriors — the deva who chases off the demons that stand between the practitioner and liberation.',
    meaning: 'Kartikeya (in north India) / Murugan (in Tamil Nadu) / Skanda (in classical Sanskrit) is the warrior son of Shiva and Parvati, born specifically to slay the demon Tarakasura who had received a boon that he could only be killed by a son of Shiva (and Shiva at the time was in deep meditation, vowed to celibacy). The Kumarasambhava narrates the cosmic intrigue: the devas sent Kama (god of love) to disrupt Shiva\'s meditation; Shiva burned Kama to ash with his third eye; eventually Parvati\'s tapas softened him; their union produced Kartikeya, fostered by the six Krittika nymphs (the Pleiades — hence Kartikeya, "of the Krittikas," and his six faces, one for each foster-mother). He grew rapidly into a warrior, was made Senapati (commander) of the deva army, and slew Tarakasura. While he is significant in north India, in Tamil Nadu he is the *primary deity* — Murugan, the lord of the six pada-sthalams (sacred warrior-sites) across the Tamil land, the patron of the Tamil people. The 15th-century Tamil saint-poet Arunagirinathar\'s *Thiruppugazh* (1,365 surviving hymns to Murugan) is the central Murugan devotional text.',
    iconography: 'Six faces (Shanmukha) looking in all directions. Twelve arms holding various weapons (spear, sword, bow, mace, vajra, discus, conch, abhaya mudra). Riding the peacock (mayura — the bird that can kill snakes, symbol of the conquest of ego). Spear (vel — his signature weapon, the spear given to him by Parvati) in his primary right hand. Crown, golden complexion, youthful warrior\'s body — Kartikeya is always depicted as a young man, never aged. With his two consorts Valli (daughter of a tribal chieftain) and Devasena (daughter of Indra) — the integration of folk-Tamil and Vedic-Sanskrit traditions in his hagiography.',
    invocation: 'Om Saravana Bhava — the canonical six-syllable mantra (one syllable for each face); chanted on a mala 108 times. Also Om Sharavanabhavaya Namaha. The Thiruppugazh (in Tamil) is the primary devotional poetry. Skanda Sashti (the six-day festival in October-November) commemorates his slaying of the demon Surapadman. Thaipusam (January-February — Tamil festival celebrated across Tamil Nadu, Sri Lanka, Malaysia, Singapore, Mauritius) is his largest festival; devotees pierce their cheeks and tongues with vel-spears, carry kavadi (ornate burdens), and walk to Murugan temples in trance. Tuesday is his day. Red and yellow flowers, vibhuti (ash), kumkum.',
    in_love: 'Kartikeya in love is the partner who *protects the relationship from the demons that try to enter it* — the partner who sees the third-party flirtation, the addiction, the workaholism, the dissociation that is trying to consume the bond, and confronts it directly with the vel-spear of clear naming. Kartikeya-energy in a partnership is the willingness to *fight for the love against everything that would erode it* — not to fight the partner, but to fight what is attacking the partnership. The shadow is the partner who confuses Kartikeya-energy with possessiveness — the jealous warrior who fights ghosts that are not actually there.',
    in_work: 'Kartikeya in work is the executor — the second-in-command who actually wins the battles, the operator who slays the obstacles that the strategists could not, the surgeon, the special-ops commander. Kartikeya-energy is *focused, decisive action against a clearly named adversary*. The shadow is the warrior without a war — the operator who is so addicted to combat-mode that they create adversaries where dharma was actually asking for cooperation.',
    the_gift: 'Kartikeya offers the experience that *the demons standing between you and liberation can actually be slain*. The Thiruppugazh\'s recurring refrain — *"Murugaa, Murugaa"* — is the devotee calling on the warrior-deva to fight what the devotee cannot fight alone: the addiction, the depression, the anxiety, the karma-pattern that keeps consuming the practice. The gift is the recognition that you have a divine commander on your side, and that the *vel* (the spear of clear discriminative awareness) can pierce what intellectualizing cannot.',
    the_shadow: 'The militarization of Kartikeya as a Hindu-nationalist warrior-symbol (less prominent than Rama-co-option, but present in Tamil-nationalist politics). Also: the macho appropriation of Murugan-bhakti by extreme Thaipusam practitioners who use the festival as performance-piercing without the underlying tapas (the actual tradition involves 48 days of celibacy, vegetarian fasting, and spiritual preparation before the piercing — the festival is meant to be the *culmination* of the tapas, not the substitute for it).',
    pair_with_chakra: 'Solar Plexus (Manipura) — the chakra of warrior-will and decisive action; Kartikeya is the deva of manipura at full activation in its specifically masculine-warrior register, the spear of clear naming made bodily.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_mantra: 'Om — the primordial sound; Kartikeya\'s six-syllable Saravana-Bhava mantra is built around Om as its first syllable, and the deva\'s six faces are sometimes mapped to the six syllables of Om-Sa-Ra-Va-Na-Bha-Va.',
    pair_with_mantra_slug: 'om',
    key_questions: [
      'What demon-pattern in my life — addiction, anxiety, karma-loop, relational dynamic — has been consuming my practice that I have been trying to handle through analysis when it actually requires the *vel* of decisive confrontation?',
      'Where in my closest relationships am I avoiding the necessary fight *for the relationship* — the clear naming of what is attacking the bond — because I am confusing peacekeeping with peace?',
      'Am I the warrior with a war, or the warrior creating wars because I have become addicted to combat-mode?'
    ]
  }
]

const DEVA_BY_SLUG: Record<string, DevaGuide> = Object.fromEntries(DEVAS.map((d) => [d.slug, d]))

export const DEVA_SLUGS = DEVAS.map((d) => d.slug)

export function isDevaSlug(s: string): boolean {
  return s in DEVA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const DEVA_ACCENT: Record<string, { c1: string; c2: string; label: string; glyph: string }> = {
  brahma:    { c1: '#d6a445', c2: '#8a5a18', label: 'Trimurti · the creator',         glyph: '🪷' },
  vishnu:    { c1: '#3a5a8a', c2: '#102844', label: 'Trimurti · the preserver',       glyph: '🐚' },
  shiva:     { c1: '#4a3a58', c2: '#181020', label: 'Trimurti · the transformer',     glyph: '🔱' },
  ganesh:    { c1: '#d8746a', c2: '#8a2a28', label: 'Son of Shiva · obstacle-remover', glyph: '🐘' },
  hanuman:   { c1: '#c44a2a', c2: '#6a1808', label: 'Avatar-devotee · the perfect bhakta', glyph: '🙏' },
  krishna:   { c1: '#5a78a8', c2: '#1a3068', label: 'Avatar · the divine lover',       glyph: '🎶' },
  rama:      { c1: '#3a7858', c2: '#0e3828', label: 'Avatar · the dharmic king',       glyph: '🏹' },
  lakshmi:   { c1: '#e0a948', c2: '#a06818', label: 'Mahadevi · abundance',            glyph: '🌸' },
  saraswati: { c1: '#c8c4d0', c2: '#6e6c84', label: 'Mahadevi · wisdom',               glyph: '🪶' },
  durga:     { c1: '#c8443a', c2: '#7a1010', label: 'Mahadevi · warrior',              glyph: '⚔️' },
  parvati:   { c1: '#d88aa8', c2: '#8a3858', label: 'Mahadevi · devoted householder',  glyph: '🌺' },
  kartikeya: { c1: '#e88838', c2: '#a04a0a', label: 'Son of Shiva · spiritual warrior',glyph: '🦚' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function devaPageHTML(slug: string): string {
  const r = DEVA_BY_SLUG[slug]
  if (!r) return ''
  const accent = DEVA_ACCENT[r.slug] || { c1: '#888', c2: '#444', label: '', glyph: '✦' }
  const readingHref = `/gab44/reading?ref=deva-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.sanskrit)}) — Hindu Deva · ${r.position}/12 · gab44 ✨`
  const description = `Who ${r.text} (${r.sanskrit}) actually is. ${escapeHtml(r.epithet)}. Source-text honest — ${escapeHtml(r.source_text.split(',')[0])}. Iconography, invocation, in love, in work, the gift, the shadow, paired chakra and mantra.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Devas', item: `${SITE_URL}/gab44/devas` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/devas/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — Hindu deva, ${r.position}/12`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/devas/${slug}`,
        about: `${r.text} Hindu deva, Sanskrit deity, ${r.family}`
      }
    ]
  })

  const otherDevasHtml = DEVAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = DEVA_ACCENT[q.slug] || { c1: '#888', c2: '#444', glyph: '✦' }
    return `<a class="ph-mini" href="/gab44/devas/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${acc.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/devas/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/devas/${slug}" />
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
  .hero .sanskrit { font-size: 22px; opacity: 0.85; margin: 0 0 6px }
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
  .other-devas { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/devas">devas</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="sanskrit">${escapeHtml(r.sanskrit)}</p>
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
      <a href="/gab44/chakras/${r.pair_with_chakra_slug}"><span class="lbl">Chakra</span>${escapeHtml(r.pair_with_chakra)}</a>
      <a href="/gab44/mantras/${r.pair_with_mantra_slug}"><span class="lbl">Mantra</span>${escapeHtml(r.pair_with_mantra)}</a>
      <a href="/gab44/devas"><span class="lbl">12 devas</span>The whole pantheon — who is who</a>
      <a href="/gab44/kleshas"><span class="lbl">5 kleshas</span>The afflictions these devas help dissolve</a>
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
    <h3>Want a $9 reading that names the deva walking with you right now?</h3>
    <p>Your chart + the Hindu deva archetype most present in this chapter of your life — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="other-devas">${otherDevasHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 12 Hindu devas · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function devasIndexHTML(): string {
  const cards = DEVAS.map((r) => {
    const acc = DEVA_ACCENT[r.slug]
    return `<a class="card" href="/gab44/devas/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${r.position} / 12</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.sanskrit)}</span></h3>
      <p class="fam">${escapeHtml(acc.label)}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = "The 12 Hindu Devas — Sanskrit deities, source-honest · gab44 ✨"
  const description = "Hand-written guides to the 12 most-searched Hindu devas — Trimurti (Brahma, Vishnu, Shiva), avatars (Krishna, Rama, Hanuman), Mahadevis (Lakshmi, Saraswati, Durga, Parvati), sons of Shiva (Ganesh, Kartikeya). Source-text honest. The who behind every mantra, mudra, asana, and limb on gab44."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/devas" />
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
  .card h3 .san { font-size: 15px; opacity: 0.78; margin-left: 6px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ devas</nav>
  <h1>The 12 Hindu <span class="accent">Devas</span> — the who behind the practice</h1>
  <p class="sub">Mantras, mudras, asanas, pranayama, eight limbs, yamas + niyamas, kleshas, doshas, nakshatras — the Sanskrit-Vedic stack on gab44 already orbits these beings. This page is the closing of that gap: the 12 devas the practice has been invoking all along, named, sourced, and met.</p>

  <div class="intro">
    <h3>How to read this map</h3>
    <p><strong>Four families.</strong> The Trimurti (Brahma, Vishnu, Shiva — create, preserve, transform). The avatars (Krishna, Rama, Hanuman — Vishnu's two most-loved earthly descents plus the perfect devotee). The four Mahadevis (Lakshmi, Saraswati, Durga, Parvati — abundance, wisdom, warrior, devoted partner). The sons (Ganesh, Kartikeya — remover of obstacles + spiritual warrior).</p>
    <p><strong>Each guide is source-honest.</strong> The Rig Veda hymn, the Purana that tells the story, the lineage-keepers who carried the practice across millennia, the modern shadow (political weaponization, commercial flattening, appropriation).</p>
    <p><strong>How to use this funnel.</strong> Read the deva your life is currently asking about — the one whose function is most loud in your present chapter. Each page pairs with the chakra and mantra that hold the deva's energy in your body and your sadhana.</p>
  </div>

  <div class="grid">${cards}</div>

  <div class="reading-strip">
    <h2>Want your chart read alongside the deva walking with you?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the Hindu deva archetype most active in your current chapter alongside sun/moon/rising. <a href="/gab44/reading?ref=devas-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 12 Hindu devas · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

