// Archangels — SEO funnel — /gab44/archangels (index) +
// /gab44/archangels/{slug}. 9 hand-written archangel guides — Michael,
// Gabriel, Raphael, Uriel, Chamuel, Jophiel, Zadkiel, Raziel, Metatron.
//
// **Highest-emotional-intent surface in the spiritual-search graph.**
// People search archangels in the moments they are most reachable —
// fear, illness, breakup, grief, life-purpose crisis, child in trouble,
// before a court date, before surgery. Every search of "archangel
// michael protection prayer", "archangel raphael healing prayer",
// "archangel chamuel love", "how to call gabriel" lands on a page where
// the visitor is already half-praying. We meet them with warmth, the
// actual lineage (Christian / Jewish kabbalistic / Islamic), the
// concrete invocation, and a $9 reading CTA for the visitor whose
// life-situation is bigger than a single page can hold.
//
// Each guide is ~600 words across 9 sections (meaning + tradition +
// title, **5 specific signs they are with you**, how to call them
// — concrete invocation/prayer, in love, in work, the gift, the shadow
// / honest about Christian-only purity claims, pair-with chakra/sound/
// zodiac, 3 key questions).
//
// **Family-tinted gradient (3×3):** Protectors (Michael, Uriel,
// Zadkiel) = fire-violet — the warriors, the shield, the cutter of
// cords. Heralds (Gabriel, Raziel, Metatron) = sky-blue — the
// messengers, the keeper of mysteries, the scribe at the throne.
// Healers (Raphael, Chamuel, Jophiel) = emerald-rose — the doctor of
// the body, the healer of the heart, the bringer of beauty.
//
// **Cross-funnels into BOTH revenue lanes** — every archangel page
// links to /gab44/chakras/{slug} (each archangel has a chakra
// alignment in the kabbalistic tree-of-life mapping), to
// /healing/script/{slug} (Phase 1A audio for the practice), and to
// /gab44/reading?ref=archangel-{slug} (Phase 1D $9 reading).
//
// **Honest framing throughout.** Each page names the lineage —
// canonical (Michael / Gabriel / Raphael in the canonical Bible &
// Quran), apocryphal (Uriel / Chamuel / Jophiel / Zadkiel from the
// Book of Enoch), kabbalistic (Raziel / Metatron from the Zohar). The
// shadow section names where the archangel-tradition has been used
// to gatekeep, where Christian-purity claims have erased the older
// Jewish kabbalistic and Islamic mystical traditions, and where
// commercial spiritual-bypassing turns the practice into vending-
// machine prayer.
//
// Routes registered BEFORE /gab44/:sign. Schema.org Article +
// BreadcrumbList JSON-LD on every page.

import { SITE_URL } from '@/lib/identity'

export interface ArchangelGuide {
  slug: string
  name: string
  glyph: string
  role: string                     // short title, e.g. "Prince of Light"
  tradition: string                // canonical / apocryphal / kabbalistic
  family: 'protector' | 'herald' | 'healer'
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

export const ARCHANGELS: ArchangelGuide[] = [
  {
    slug: 'michael',
    name: 'Michael',
    glyph: '⚔️',
    role: 'Prince of Light · Cutter of Cords · Protector',
    tradition: 'Canonical — Daniel 10:13, Jude 1:9, Revelation 12:7; Quran 2:98 as Mikail; named in the Talmud and the Book of Enoch',
    family: 'protector',
    position: 1,
    one_liner: 'The archangel of protection, courage, and the sword that cuts every cord that is no longer yours to carry.',
    meaning: 'Michael — *Mi-cha-El*, "who is like God" — is the only archangel named as such in the canonical Hebrew Bible (Daniel) and is the most-invoked angelic figure across Jewish, Christian, and Islamic traditions. His weapon is a sword of blue flame; his role is the *protector at the threshold* — the one you call when something has to be cut, when a cord has to be severed, when fear has to be named for what it is. Where Gabriel announces and Raphael heals, Michael *defends*. He is the angel of soldiers and firefighters and people leaving abusive relationships. He is also the angel of the last breath — Jewish and Christian funerary traditions name him as the soul-conductor at the moment of death, the one who carries the soul across. To call Michael is not to ask him to fight your battle for you; it is to ask him to stand at your side while you find your own courage. The body knows him by a temperature change — a sudden warmth at the back of the neck, or a sudden cool-blue calm in the chest.',
    signs_present: 'Five recognition signals. (1) A sudden warmth or shiver at the back of the neck or right shoulder when you have just thought of him or just spoken his name. (2) Blue flashes — the iris-edge blue of a gas flame — in the periphery of your vision, often when you are near a decision that requires courage. (3) Repeated sightings of his name — on a street sign, a stranger\'s necklace, a book spine, a license plate — when you are in a season of cord-cutting. (4) Dreams of swords, shields, knights, or a tall figure in armor whose face you cannot see; you wake feeling protected rather than afraid. (5) The phenomenon practitioners call *Michael-clearing*: walking into a room and feeling the heaviness lift in a single breath, often accompanied by the smell of ozone or a metallic tang at the back of the throat.',
    how_to_call: 'The traditional invocation is short and specific: *Archangel Michael, please cut all cords that are not aligned with my highest good, and stand with me in [the situation].* Name the situation out loud — vagueness reduces the practice to incantation. Stand if you can; visualize a sword of blue flame at your right side. Stay in the visualization for sixty seconds — the body needs that long to register the shift. Close with *Thank you, it is done.* For ongoing protection, traditional practice repeats the call at threshold moments — leaving the house, entering a difficult conversation, before sleep. The Jewish liturgy includes the *bedtime Shema* with a four-archangel invocation (Michael at the right, Gabriel at the left, Uriel before, Raphael behind) — practitioners across traditions use this as a nightly clearing.',
    in_love: 'Michael is the archangel of *cord-cutting* in love — the one you call when a relationship is over but is still occupying space in your nervous system. He does not return lost lovers; he frees you from the ones whose energy is still draining you. Reversed: weaponising Michael — calling him to *attack* an ex or an opponent. Michael does not punish; he protects. The moment the practice becomes attack-prayer, it has stopped being his.',
    in_work: 'The angel of the courageous decision — leaving the job that is killing you, naming the boundary in the meeting, refusing the contract that would compromise you. Michael does not make the decision for you; he stands at your right shoulder while you make it. Particularly powerful before legal proceedings, difficult negotiations, or any meeting where you have been afraid of a specific person.',
    the_gift: '*Cut what is no longer yours to carry.* Michael\'s gift is not victory — it is the ability to stop carrying what was never yours in the first place. The sword cuts both ways; the practitioner ends each session lighter, not heavier.',
    the_shadow: 'Michael as warrior-cosplay. The shadow is the spiritual-bypass version of the practice — the one where Michael is summoned to *destroy* enemies, win lawsuits, or punish ex-partners. Authentic Michael work is always *toward your own freedom*, never *against another\'s freedom*. The other shadow is Christian-supremacist Michael — the version that erases his presence as Mikail in the Quran or as the kabbalistic protector of Israel in the Zohar. Michael is older than any one tradition\'s claim on him.',
    pair_with_chakra: 'Throat — Michael\'s sword cuts at the throat-line; the practice of speaking the truth that has been stuck is his work. Also root, for the protection-of-the-body dimension.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — pair Michael\'s cord-cutting with the letting-go meditation; the sword cuts, the audio carries you through the release.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aries',
    key_questions: [
      'What cord am I still carrying that I have not yet asked Michael to cut?',
      'Where am I trying to use his sword *against* someone instead of *for* my own freedom?',
      'What courage have I been waiting to feel before I act, that the act itself would actually generate?'
    ]
  },
  {
    slug: 'gabriel',
    name: 'Gabriel',
    glyph: '📯',
    role: 'Herald · Messenger · Bringer of Annunciation',
    tradition: 'Canonical — Daniel 8:16, Luke 1:19 (annunciation to Mary); Quran 2:97 as Jibril (revealer of the Quran to Muhammad); honored across Jewish, Christian, and Islamic traditions',
    family: 'herald',
    position: 2,
    one_liner: 'The archangel of messages, beginnings, conception, voice, and the courage to say yes to the life that is coming.',
    meaning: 'Gabriel — *Gavri-El*, "God is my strength" — is the messenger of every great beginning in the Abrahamic traditions. He announces the births (John the Baptist, Jesus); he dictates the Quran across twenty-three years to Muhammad; he interprets dreams for Daniel. Where Michael protects, Gabriel *announces* — he is the angel you meet just before something irreversible. His instrument is the trumpet, and his time is the dawn. To work with Gabriel is to work with the *threshold of becoming*: the new project, the pregnancy, the book you are about to write, the conversation that will change a relationship forever, the public voice you have been afraid to use. He is also the angel of clear communication — speech-therapists, writers, singers, public-speakers across traditions invoke him before performance. The body knows him by a clarity in the throat — the phlegm clearing, the voice settling into its lower register, a sudden ease in saying the difficult thing.',
    signs_present: 'Five recognition signals. (1) A clearing in the throat — a sudden ease in speaking, or the voice dropping into a register that surprises you. (2) White feathers in unexpected places, or repeated sightings of trumpets, scrolls, lilies (Gabriel\'s flower in Christian iconography). (3) A clear, specific message arriving when you needed it — a stranger\'s sentence, a book opening to the right page, a song lyric on the radio precisely answering the question you were sitting with. (4) Dreams with vivid, *narrated* content — a voice telling you something unmistakable, a name you didn\'t know, an instruction. You wake remembering the message. (5) Pregnancy, conception, or birth-related synchronicities — Gabriel\'s domain. People trying to conceive often work with him directly.',
    how_to_call: 'The traditional invocation is *Archangel Gabriel, bring me the message I am ready to hear, and the courage to act on it.* Sit at dawn if you can — Gabriel\'s hour. Have something to write with — paper, journal, voice memo. Ask the specific question, then *do not interrupt the silence*. Practitioners describe the answer arriving as a complete sentence, often in a register that is not their usual inner voice. Write it down before doubting it. For voice work — public speaking, writing, singing, hard conversations — invoke Gabriel just before, with hand at the throat: *Gabriel, let the words be true and clear.*',
    in_love: 'Gabriel is the archangel of *the conversation that has to be had* — the one where you finally name what is true, the one that begins or ends the relationship. Particularly powerful for couples trying to conceive (he is the canonical angel of conception). Reversed: Gabriel\'s message arriving and the practitioner refusing to deliver it. The trumpet sounded; the messenger went silent. Resentment grows in the pause.',
    in_work: 'The angel of the project announcement, the book proposal, the launch, the keynote. Gabriel is also the angel of *clarity in writing* — invoke him at the start of a writing session, ask for the message that wants to come through, then begin. Practitioners describe a measurable difference in the prose that emerges.',
    the_gift: '*The message you are ready to hear.* Gabriel does not deliver messages the practitioner cannot yet metabolize. The arrival of his voice means the body is already prepared for what is coming.',
    the_shadow: 'Gabriel-as-validation-machine. The shadow is the practitioner who calls Gabriel only to confirm what they already believe — and who refuses the message when it is uncomfortable. The other shadow is Christian-only Gabriel — the version that erases his identity as Jibril, the angel of the Quran. Gabriel is the most cross-traditional of all archangels; any practice that claims him as one tradition\'s alone is half-blind.',
    pair_with_chakra: 'Throat — Gabriel\'s entire work is the cleared, true voice. Also third-eye, for the dream-message dimension.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Deep Healing — pair Gabriel\'s annunciation with the deep-healing meditation when you are about to receive a hard message; the audio prepares the body to listen.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'gemini',
    key_questions: [
      'What message has arrived that I have not yet delivered?',
      'Whose voice in me is afraid to say the true thing — and what would Gabriel sound like if he spoke through it?',
      'What new thing is asking to be born through me that I have been refusing to announce?'
    ]
  },
  {
    slug: 'raphael',
    name: 'Raphael',
    glyph: '💚',
    role: 'Healer · Doctor of God · Guide of Travellers',
    tradition: 'Apocryphal canonical — Book of Tobit (Tobias and the angel); honored in Jewish, Christian, and Islamic traditions; named in the Book of Enoch',
    family: 'healer',
    position: 3,
    one_liner: 'The archangel of healing — body, mind, and the journey home — whose name itself means "God heals."',
    meaning: 'Raphael — *Rafa-El*, "God heals" — is the healer of the archangelic college and the patron of doctors, nurses, therapists, and travellers. His story comes from the Book of Tobit (canonical in the Catholic and Orthodox Bibles, deuterocanonical in the Protestant), where he travels in disguise with the young Tobias to retrieve a debt, drives out the demon Asmodeus, and heals Tobit\'s blindness with fish gall. The story names everything Raphael does: he travels with you, he protects the marriage, he restores sight, he drives out what does not belong in the body. He is the archangel of *physical* healing in particular — surgeries, illnesses, injuries — but also the archangel of the *therapy session*, the breakthrough, the body remembering what it had to forget. His emerald-green light is the colour of the heart-chakra in many esoteric maps; medical-intuitive practitioners across traditions describe Raphael\'s presence as a green warmth specifically at the site of pain. He is also the patron of travellers — invoke him before a journey for safe passage.',
    signs_present: 'Five recognition signals. (1) A green light or shimmer in the periphery, often at the site of a pain or a medical concern. (2) The unprompted right book, podcast, or doctor\'s name arriving in your awareness when a health concern is unresolved. (3) Sudden remission, faster-than-expected healing, or a previously stuck symptom shifting after you have explicitly invoked him — practitioners describe the shift as *the wound forgetting itself.* (4) Dreams of doctors, nurses, healers, or being given medicine; you wake feeling lighter in the body. (5) Synchronicities around travel — the right flight, the safe road, the stranger who appears with the help you needed in a foreign city. Raphael\'s domain explicitly includes travellers.',
    how_to_call: 'The traditional invocation is *Archangel Raphael, please surround me (or [name]) with your emerald healing light and bring [the situation] back to wholeness.* Place a hand on the part of the body that hurts. Visualize green light pouring through the hand into the tissue for sixty seconds. The practice is most powerful when paired with whatever medical care is available — Raphael\'s tradition is not anti-medicine; he is named the *patron* of doctors. Practitioners working with chronic illness invoke him daily for twenty-one days as a course-of-prayer; many report a measurable shift in the same window the body would have shifted with a course of physical therapy. For travel: at the door, before leaving, say *Raphael, walk with me on this journey. Bring me home whole.*',
    in_love: 'Raphael is the archangel of *the marriage healed* and *the heart that has to be repaired before it can love again*. The Tobit story is fundamentally a love story — Raphael protects Tobias and Sarah\'s marriage from the demon that had killed her seven previous husbands. He is the angel of post-grief love. Reversed: using Raphael as a wish-list for a future partner. He does not deliver people; he heals the heart that is doing the loving.',
    in_work: 'The angel of healers in their own work — therapists, nurses, doctors, bodyworkers, coaches. Practitioners who do healing work for others traditionally invoke Raphael before each session for clarity, protection, and the right hands. He is also the angel of *career-healing* — the work that is healing, or the healing work you are being called to begin.',
    the_gift: '*The body, returned to wholeness.* Raphael\'s gift is not a guarantee of physical cure — it is the felt-sense that you are not alone in the body during the healing. Even when the diagnosis does not change, the experience of being-in-the-body changes.',
    the_shadow: 'Raphael as substitute-for-medicine. The shadow is the practitioner who refuses doctors and counts on prayer alone. Authentic Raphael work is *with* medicine, not *against* it — he is the patron *of* doctors. The other shadow is the spiritual-bypass version where Raphael is invoked but the trauma underneath the illness is never addressed; the body cannot heal what the soul refuses to acknowledge.',
    pair_with_chakra: 'Heart — Raphael\'s emerald light is heart-chakra colour in every esoteric map; his work is the heart-as-organ and the heart-as-feeling-centre.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — the natural pairing; pair Raphael\'s invocation with the deep-healing meditation for any course of physical or emotional healing work.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'virgo',
    key_questions: [
      'What part of my body have I been at war with that Raphael would invite me to befriend?',
      'What healing am I waiting for permission to ask for?',
      'Where in my work am I called to heal others — and how is that work itself healing me?'
    ]
  },
  {
    slug: 'uriel',
    name: 'Uriel',
    glyph: '🔥',
    role: 'Light of God · Bringer of Wisdom · Keeper of the Flame',
    tradition: 'Apocryphal — Book of Enoch (1 Enoch 9:1, 21:5), 2 Esdras 4-5; honored in Eastern Orthodox and some Catholic traditions; central in Jewish kabbalistic angelology',
    family: 'protector',
    position: 4,
    one_liner: 'The archangel of inner wisdom, the lamp at the threshold, and the steady fire that survives the dark night of the soul.',
    meaning: 'Uriel — *Uri-El*, "fire of God" or "light of God" — is the archangel of inner illumination, philosophical understanding, and the long passage through the dark night. He does not appear in the Protestant canon but is central in the Book of Enoch (where he is one of the four chief archangels, alongside Michael, Gabriel, and Raphael) and in 2 Esdras (where he answers Ezra\'s questions about the meaning of suffering). The Eastern Orthodox church names him explicitly; the Catholic church removed him from the official roster in 745 CE but practitioners in every tradition kept him in. His domain is the *understanding that comes only after the long sitting in the dark* — the wisdom that arrives at the end of the depression, the meaning that emerges from the grief, the philosophical clarity that follows the crisis. Where Raphael heals the body, Uriel heals the *understanding*. He is the angel of the dark night of the soul (St John of the Cross\'s phrase) — the patron of practitioners moving through long, slow inner work that has no obvious external markers.',
    signs_present: 'Five recognition signals. (1) A candle burning longer than it should, or relighting unexpectedly, in a season of grief or confusion. (2) A sudden, unbidden understanding arriving — often while doing something mundane (washing dishes, walking) — that resolves a question you have been sitting with for months. (3) Repeated synchronicities involving the words *light*, *flame*, *lamp*, *illumination* — book titles, song lyrics, street names. (4) Dreams of fire that does not burn — a candle, a hearth, a torch carried through a dark passage. You wake calmer. (5) The phenomenon called *Uriel-thinking*: a quality of slow, philosophical clarity that is not your normal cognitive register. Practitioners describe it as *thinking with a candle in the room rather than a fluorescent light*.',
    how_to_call: 'The traditional invocation is *Archangel Uriel, light the lamp at my threshold and show me what this season is asking me to understand.* Light a candle if you can — the practice is older than the lit-candle technology of the modern home, but the gesture matters. Sit with the question for ten minutes minimum; Uriel does not arrive in three. Practitioners working through long-form grief or philosophical crisis sit with him weekly for the duration of the season. The Jewish bedtime Shema places him *before* the practitioner — the lamp at the threshold of sleep. Practitioners adapt: at the door of any new chapter, name his presence before crossing.',
    in_love: 'Uriel is the angel of the *understanding* that follows a relationship — the meaning the heart was being asked to learn, the pattern that has now ended. He is not the angel of finding new love; he is the angel of what the old love was for. Reversed: weaponising the understanding — using Uriel\'s clarity as a hammer against an ex, or against the version of yourself that loved them.',
    in_work: 'The angel of the long, slow project — the dissertation, the book, the philosophical work, the long inner shift that no one else can see yet. Practitioners describe Uriel-work as *the lamp that does not go out* during the years when the work is invisible to the outside world.',
    the_gift: '*Understanding earned in the dark.* Uriel\'s gift is the meaning you can only know after the long sitting. The clarity is not given as instruction; it is given as recognition — *oh, that was what this was for*.',
    the_shadow: 'Uriel as bypassing-the-feeling. The shadow is the practitioner who reaches for understanding too early — who tries to *intellectualize* the grief before the grief is finished. Uriel does not arrive while you are still avoiding. He arrives at the bottom of the descent, after Michael has cut the cords and Raphael has tended the body. The other shadow is the practitioner who hoards Uriel\'s wisdom — who treats philosophical insight as superiority over those still in the dark.',
    pair_with_chakra: 'Third-eye — Uriel\'s lamp is the inner-vision chakra; the seeing-in-the-dark that is wisdom. Also crown, for the philosophical-understanding dimension.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Letting Go — pair Uriel during the long passage of letting go; his lamp keeps the practitioner company through the descent.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'capricorn',
    key_questions: [
      'What am I trying to understand too quickly that Uriel would invite me to sit with longer?',
      'Where in my life is the long, invisible work asking me to keep the lamp lit?',
      'What meaning am I now ready to let arrive — that I refused for the last year because I was not yet ready to know it?'
    ]
  },
  {
    slug: 'chamuel',
    name: 'Chamuel',
    glyph: '💗',
    role: 'He Who Sees God · Bringer of Compassion · Finder of the Lost',
    tradition: 'Apocryphal — early Christian and kabbalistic angelology; named in the Pseudo-Dionysius hierarchy and in some Eastern Orthodox liturgical traditions',
    family: 'healer',
    position: 5,
    one_liner: 'The archangel of love — self-love, romantic love, lost objects, lost relationships, lost peace — whose pink light finds what was hidden.',
    meaning: 'Chamuel — *Camael* in some traditions, *Cha-mu-El*, "he who sees God" — is the archangel of compassion and one of the most-worked-with angels in modern devotional practice. His domain is the *love that finds what was lost*: the lost relationship, the lost peace, the lost connection with self, even the lost object — practitioners pray to Chamuel for help finding keys, wallets, phones, and the practice has a long folk-tradition of working. His pink-rose light is the heart-chakra rose specifically (where Raphael\'s emerald is the heart-as-organ, Chamuel\'s rose is the heart-as-love). He is the angel of *self-compassion* especially — the patron of practitioners learning to love the parts of themselves that have been exiled. He is also the angel of *world-peace work* — meditators and activists across traditions invoke him for the larger field of human reconciliation.',
    signs_present: 'Five recognition signals. (1) Pink or rose flashes in the periphery, often during conflict or self-criticism — Chamuel arriving with the softer eye. (2) Lost objects returning — keys reappearing in places you already searched, the missing photo turning up. (3) An unexpected reconciliation — an old friend texting after years, a family member opening to a conversation that was closed. (4) Dreams of pink-rose light, of finding lost things, of being held. (5) The phenomenon practitioners call *Chamuel-softening*: a sudden ease in the chest during a moment when you would normally be hard on yourself. The internal critic goes quiet for a breath.',
    how_to_call: 'The traditional invocation is *Archangel Chamuel, help me find [the lost thing — object, peace, person, self] and bring it back to me with love.* For lost objects, name the object specifically and stop searching for sixty seconds. Practitioners report the location arriving as a sudden image. For self-compassion: place a hand on the heart, breathe in pink-rose light, exhale the inner critic\'s most recent sentence. Twenty rounds. For relationships: name the person and the situation; ask Chamuel to soften both your heart and theirs *for the highest good*. Chamuel does not force reconciliation; he creates the conditions in which it becomes possible.',
    in_love: 'Chamuel is the *primary* archangel of romantic love — and of self-love as the foundation that romantic love rests on. He does not deliver soulmates as a vending-machine prayer; he prepares the heart so that love, when it arrives, can be received. Particularly powerful for practitioners moving out of long single-seasons or out of relationship-grief. Reversed: using Chamuel as a manipulation tool — trying to *direct* a specific person\'s heart against their will. Chamuel does not override consent.',
    in_work: 'The angel of teamwork, of the difficult colleague reconciliation, of the workplace where compassion has died. Particularly relevant for practitioners in caring professions — therapists, teachers, social workers, hospice workers — who need to keep the heart open through repeated exposure to suffering.',
    the_gift: '*What was lost can be found.* Chamuel\'s gift is the recognition that the soft eye is not weakness — it is the only eye that can see through to where the lost thing is hiding. The keys, the connection, the version of yourself you abandoned at fourteen.',
    the_shadow: 'Chamuel as romantic-vending-machine. The shadow is the practitioner who calls him only for soulmate-delivery and never for the harder work of self-compassion that has to come first. The other shadow is Chamuel-as-bypass — using *love and light* to avoid the legitimate anger or grief the heart is asking to feel. Authentic Chamuel work meets the hard feeling first, then softens.',
    pair_with_chakra: 'Heart — Chamuel\'s rose-pink is the heart-as-love-centre; the soft eye is heart-chakra work specifically.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair Chamuel\'s soft eye with the letting-go meditation when working on self-forgiveness or relationship-grief.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'libra',
    key_questions: [
      'What part of myself am I still treating as unloveable that Chamuel would invite me to find again?',
      'Where in my life am I searching with hard eyes for something that only soft eyes can find?',
      'Who am I refusing to love — including myself — that the practice of compassion would ask me to revisit?'
    ]
  },
  {
    slug: 'jophiel',
    name: 'Jophiel',
    glyph: '🌻',
    role: 'Beauty of God · Bringer of Joy · Patron of Artists',
    tradition: 'Apocryphal — Eastern Orthodox tradition; named in some Jewish kabbalistic sources as Iofiel; referenced in Pseudo-Dionysius',
    family: 'healer',
    position: 6,
    one_liner: 'The archangel of beauty, joy, creativity, and the recognition that the heavy mind can be lifted by an open window and a fresh flower.',
    meaning: 'Jophiel — *Iofi-El*, "beauty of God" — is the archangel of beauty, joy, and the lifting of heavy thought-patterns. She is one of the few archangels traditionally rendered with feminine pronouns in Western devotional practice (though pronouns vary across tradition). Her domain is *the small thing that lightens everything* — the bouquet on the table, the cleaned and aired room, the right music, the joke that breaks the tension at the funeral. She is the patron of artists, decorators, gardeners, florists, hairdressers, and anyone whose work makes the world more bearable through beauty. She is also the angel of the *positive thought-shift* — practitioners working with cognitive behavioural patterns, reframing, gratitude practice, often invoke her at the start of the work. Her colour is the bright sunflower-yellow of the solar-plexus, but with a heart-chakra warmth — the colour of joy specifically, not pride.',
    signs_present: 'Five recognition signals. (1) Yellow flowers appearing — gifted, growing, dropped on a path — in seasons when joy has been thin. (2) A sudden ease about a thought that was heavy; the same situation looks lighter without anything having changed externally. (3) Repeated impulse to clean, decorate, plant something — Jophiel arrives as housekeeping. (4) Dreams in bright colour, particularly yellow and sunlit; you wake more rested than you should be. (5) The phenomenon practitioners call *Jophiel-noticing*: an unexpectedly sharp eye for the beautiful in the ordinary — a particular slant of light, a child\'s laugh, the colour of a stranger\'s scarf — that makes the ordinary day feel sacred.',
    how_to_call: 'The traditional invocation is *Archangel Jophiel, help me see beauty here and lift the thoughts that are weighing me down.* Open a window if you can — Jophiel arrives through fresh air and natural light. Place a flower in the room; if no flower, an image. Sit and ask: *what beautiful thing is in this room that I have not yet noticed?* The first answer is hers. For thought-shifting: name the heavy thought, then ask *Jophiel, what is the beautiful angle on this same situation that is also true?* The reframe arrives gently — never as denial of the hard truth, always as an *additional* truth.',
    in_love: 'Jophiel is the angel of *seeing your partner in their beauty* — particularly relevant in long-term relationships where habit has dulled the eye. She is also the angel of the first-date energy returning to a tired marriage. Reversed: aestheticising love — turning the relationship into an Instagram-aesthetic instead of a real connection. Jophiel\'s beauty is not surface; it is *recognition*.',
    in_work: 'The patron of artists, designers, and anyone whose work creates beauty. Also the angel of the *workplace beautified* — the office plant, the cleared desk, the music in the background that makes the work bearable. Practitioners report that invoking Jophiel before a creative project shifts the quality of attention, often dramatically.',
    the_gift: '*The recognition that lightness is not denial.* Jophiel teaches that joy and grief can coexist in the same hour, that the bouquet on the funeral table is not pretending no one died — it is honouring that life continues. The light eye is not the shallow eye.',
    the_shadow: 'Jophiel as toxic-positivity. The shadow is the practitioner who uses *beauty* and *good vibes only* as a defense against legitimate hard feelings. Authentic Jophiel work meets the hard feeling first, then opens a window. The other shadow is Jophiel-as-Instagram — turning beauty into performance instead of recognition.',
    pair_with_chakra: 'Solar plexus — Jophiel\'s yellow is solar-plexus colour; the joy and confidence dimensions. Also third-eye, for the noticing-the-beautiful capacity.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — pair Jophiel with the abundance affirmations; her beauty-eye sees the abundance that scarcity-mind has been hiding.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'leo',
    key_questions: [
      'What heavy thought have I been carrying that a fresh angle would lighten without dishonouring?',
      'Where in my life have I stopped noticing the beauty that is still present?',
      'What art, what flower, what small act of beautification has my soul been asking me to make?'
    ]
  },
  {
    slug: 'zadkiel',
    name: 'Zadkiel',
    glyph: '🟣',
    role: 'Righteousness of God · Bringer of Mercy · Keeper of Forgiveness',
    tradition: 'Apocryphal — Jewish kabbalistic tradition (Zadkiel as ruler of the Sephirah of Chesed/Mercy); named in early Christian angelologies; appears in the Zohar',
    family: 'protector',
    position: 7,
    one_liner: 'The archangel of forgiveness, mercy, and the violet flame that transmutes what cannot be unmade.',
    meaning: 'Zadkiel — *Tzadki-El*, "righteousness of God" — is the archangel of mercy and forgiveness, and in the kabbalistic tree of life he rules the sephirah of Chesed (loving-kindness). His domain is *the wound that cannot be healed by remembering what happened differently* — the genuine harm done, by you or to you, that requires the deeper work of forgiveness. Where Michael cuts cords (severing what is no longer yours), Zadkiel *transmutes* — he takes what was done and turns it into something the soul can carry without infection. His traditional flame is violet — the colour at the highest end of the visible spectrum, the colour of transformation in many esoteric maps. The Ascended Masters tradition (twentieth-century synthesis of theosophical and Christian-mystical lineages) names Zadkiel as the keeper of the Violet Flame, the alchemical fire of forgiveness. He is the angel of the difficult forgiveness — the abuser, the parent, the version of yourself that hurt someone you loved. Authentic forgiveness is not pretending the harm did not happen; it is freeing yourself from the harm continuing to live in the body.',
    signs_present: 'Five recognition signals. (1) Violet or purple flashes in the periphery, often during forgiveness work or family-history reckoning. (2) An unexpected softening toward someone you have not been able to forgive — a grandmother who was cruel, an ex who lied, a younger version of yourself who chose poorly. (3) Repeated synchronicities with violet — flowers, scarves, sunset light, lavender scent appearing in odd places. (4) Dreams of being forgiven, or forgiving — often involving a specific person you would not consciously have chosen to dream about. (5) The phenomenon practitioners call *Zadkiel-release*: the felt-sense of a long-carried weight visibly lifting, often accompanied by tears that arrive without apparent trigger.',
    how_to_call: 'The traditional invocation is *Archangel Zadkiel, surround me in the violet flame and transmute [the harm — yours or theirs] into wisdom my soul can carry.* Sit. Visualize a column of violet flame from crown to soles, breathing through you. Name what is being forgiven; do *not* require yourself to feel the forgiveness yet — the work is allowing Zadkiel to begin the transmutation while the body is still angry. Practitioners describe the felt-sense as a *clean* anger — the rage stops being toxic, even when it remains. The Violet Flame mantra in the Ascended Masters tradition is *I am a being of violet fire / I am the purity God desires* — repeat as the practice. For deep family-history work, the practice is repeated daily for forty days.',
    in_love: 'Zadkiel is the angel of *forgiving the partner who genuinely hurt you* — when the relationship is over but the hurt is still alive. He is also the angel of *self-forgiveness for the partner you hurt*. Reversed: pseudo-forgiveness — declaring the work done before it is done, performing magnanimity over still-fresh wounds. Zadkiel does not require pretense; the violet flame works on whatever is honestly named.',
    in_work: 'The angel of *leaving the bitter workplace without the bitterness*. Particularly relevant for practitioners exiting toxic professional environments who do not want to carry the harm into the next role. Also the angel of *the difficult professional reconciliation* — the colleague you have to work with despite history.',
    the_gift: '*Free without forgetting.* Zadkiel\'s deepest gift is the recognition that you can be free from a harm without forgetting that it happened. Forgiveness is not historical revisionism; it is freedom from the ongoing energetic charge.',
    the_shadow: 'Zadkiel as forced-forgiveness. The shadow is the practitioner — or the religion — that demands forgiveness before the wound is fully felt, often re-traumatising the person who was harmed. Authentic Zadkiel work *follows* the legitimate anger and grief; it does not skip them. The other shadow is using the violet flame as bypass — treating it as a shortcut around the real internal work.',
    pair_with_chakra: 'Crown — Zadkiel\'s violet is crown-chakra colour; the integration that follows real forgiveness lives at the top of the body.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Letting Go — the natural pairing; pair Zadkiel with the letting-go meditation across the forty-day forgiveness window.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What harm — done to me or by me — have I been carrying that the violet flame would ask me to transmute?',
      'Where am I confusing forgiveness with forgetting, and what would *free without forgetting* look like in this situation?',
      'What forgiveness am I waiting to feel before I do the work — that the work itself would generate the feeling for?'
    ]
  },
  {
    slug: 'raziel',
    name: 'Raziel',
    glyph: '📜',
    role: 'Secret of God · Keeper of Mysteries · Angel of the Sefer Raziel',
    tradition: 'Kabbalistic — central to Jewish mystical tradition; the Sefer Raziel HaMalach (Book of the Angel Raziel), a medieval grimoire; named in the Zohar',
    family: 'herald',
    position: 8,
    one_liner: 'The archangel of esoteric knowledge — the one who whispers the secrets of the cosmos to those who can carry them.',
    meaning: 'Raziel — *Razi-El*, "secret of God" — is the archangel of mystery and the keeper of the Sefer Raziel HaMalach, the legendary book containing all the secrets of the universe given by God to Adam after the expulsion from Eden. The book is also a real medieval Jewish kabbalistic grimoire (compiled c. 13th century) that influenced Western esoteric tradition through the Renaissance. Raziel\'s domain is *the knowledge that arrives when you are ready to carry it* — the dream-message about a previous lifetime, the sudden understanding of the symbol you have been seeing, the kabbalistic insight, the alchemical recognition. He is the patron of mystics, esoteric students, tarot readers, kabbalists, and anyone whose work involves drawing meaning from symbol systems. He is also the angel of *channelled writing* — practitioners working as scribes for messages beyond their ordinary cognitive register often invoke him before sitting down.',
    signs_present: 'Five recognition signals. (1) The right book finding you at the right moment — a passage opening when you flip the page randomly, a title arriving in conversation. (2) Dreams of libraries, scrolls, scribes, ancient texts; you wake with a phrase you cannot trace. (3) Sudden interest in a symbol system — kabbalah, tarot, runes, sacred geometry — without prior context. Raziel arrives as curiosity. (4) Channelled writing flowing without effort — sentences arriving complete, in a register that surprises you. (5) The phenomenon practitioners call *Raziel-recognition*: meeting a piece of esoteric knowledge for the first time and immediately knowing it is true, before you have any rational basis for the knowing.',
    how_to_call: 'The traditional invocation is *Archangel Raziel, open the book of mysteries to the page I am ready to read.* Sit with paper or journal — Raziel\'s communication is often written. Ask the specific question you have been sitting with; allow the answer to arrive as a sentence rather than as instruction. The Sefer Raziel HaMalach itself includes an angelic-name invocation tradition that is too elaborate for the modern practitioner; a simplified contemporary practice is to write the question at the top of a page, sit for sixty seconds, and write whatever arrives without editing for five minutes. Practitioners describe Raziel-writing as *cleaner* than ordinary writing — fewer false starts, more declarative.',
    in_love: 'Raziel is the angel of the *recognition* moment — the moment two people meet and both feel they have known each other for longer than this life would allow. He is the angel of past-life work in relationships, soul-contract recognition, the deep sense of *I know you*. Reversed: using esoteric knowledge to over-mystify a relationship that is not actually working. Raziel reveals; he does not force fit.',
    in_work: 'The angel of the writer, the researcher, the philosopher, the tarot reader, the kabbalist. Practitioners doing scholarly or esoteric work invoke him before sessions for clarity. He is also the angel of the *first reading of a profound text* — invoke him before opening a book that is meant to change you.',
    the_gift: '*The mystery, when you are ready.* Raziel does not deliver knowledge as performance; he delivers it as *recognition* of what the soul already knew. The arrival of the knowledge means the soul is ready to live with it.',
    the_shadow: 'Raziel as gnostic-elitism. The shadow is the practitioner who hoards esoteric knowledge as superiority — the *I know things you do not* posture. Authentic Raziel work circulates the mystery; it does not gatekeep it. The other shadow is the practitioner who pursues secrets as escape from ordinary embodied living. Mystery is not a substitute for the dishes.',
    pair_with_chakra: 'Third-eye — Raziel\'s domain is the seeing-into-mystery chakra. Also crown, for the cosmological-knowledge dimension.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — pair Raziel with the deep-healing meditation when working on past-life or soul-contract material.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What knowledge am I ready to receive that I have been postponing because I was not yet ready to live with it?',
      'Which symbol system has been knocking at my attention — and what would Raziel say if I sat down to listen?',
      'Where am I treating mystery as performance instead of as recognition?'
    ]
  },
  {
    slug: 'metatron',
    name: 'Metatron',
    glyph: '🟦',
    role: 'Voice of God · Scribe at the Throne · Keeper of the Cube',
    tradition: 'Kabbalistic — central in Jewish mystical tradition (Talmud Chagigah 15a, the Zohar); named in Merkavah and Hekhalot literature; one of the most-discussed angels in Jewish esoteric thought',
    family: 'herald',
    position: 9,
    one_liner: 'The archangel who was once the human Enoch, who keeps the records of every soul, and whose Cube holds the geometry of creation.',
    meaning: 'Metatron — name of contested etymology, possibly from Greek *meta* (after) and *thronos* (throne) — is the most singular figure in Jewish angelology. The Talmud (Chagigah 15a) tells the story of Rabbi Elisha ben Abuyah seeing Metatron seated in heaven (angels traditionally stand) and concluding there must be *two powers* — for which he was excommunicated. Metatron is also identified in Jewish mystical tradition with Enoch, the antediluvian patriarch *taken by God* in Genesis 5:24, who was transfigured into the highest of angels. He is the *scribe at the throne*, the keeper of the Akashic records (the soul-archive of every choice ever made), and in the Ascended Masters tradition, the keeper of *Metatron\'s Cube* — a sacred-geometric form containing all five Platonic solids and considered a map of creation itself. His domain is *the soul\'s record* — past lives, soul-contracts, ancestral lineage, the larger narrative of which this lifetime is one chapter. He is the patron of the indigo and crystal children of new-age tradition; practitioners working with sensitive children traditionally invoke him.',
    signs_present: 'Five recognition signals. (1) Repeated sightings of Metatron\'s Cube — in jewellery, art, sacred-geometry imagery — in a season when you are doing soul-narrative work. (2) Sudden memories that are *not yours in this life* — past-life recall, ancestral memory, scenes you cannot place. (3) Children showing unusual sensitivity around you — Metatron\'s presence is often felt by children before adults notice. (4) Dreams of writing, of being shown a record-book, of seeing scenes from your own life as though from above. (5) The phenomenon practitioners call *Metatron-perspective*: the felt-sense of seeing your current life-situation from a much larger vantage point — usually at a moment of decision when the small-self is overwhelmed.',
    how_to_call: 'The traditional invocation is *Archangel Metatron, show me where this lifetime fits in the larger story I have been writing across many.* Visualize Metatron\'s Cube — a six-pointed structure of overlapping circles — surrounding the body. Sit with the question for ten minutes. Metatron\'s answer often arrives as a *zoomed-out perspective* on a situation that had been narrowing your view. For Akashic-record work (consulting the soul\'s archive about a recurring pattern), the practice is to ask *Metatron, what is the deeper story of this pattern across my soul\'s history?* and write whatever arrives. Some practitioners report direct visual access; many report a *knowing* that does not have an image.',
    in_love: 'Metatron is the angel of *soul-contract recognition* in love — the felt-sense that this relationship was agreed-to before either of you arrived in this lifetime. He helps the practitioner read the larger arc of the relationship: what was it for, what are you here to learn together, what is the chapter ending. Reversed: using soul-contract language to bypass a real-world need to leave a harmful relationship. Soul-contracts are real; they are also fulfillable. Completion is allowed.',
    in_work: 'The angel of the *long-arc work* — the work you are doing across multiple lifetimes, the soul-purpose work that this incarnation is one chapter of. Practitioners doing vocational discernment invoke him for the larger view. Also the angel of *teachers of esoteric children* — Waldorf teachers, sensitive-child therapists, anyone working with children whose register is wider than the standard.',
    the_gift: '*The longer story.* Metatron\'s deepest gift is the recognition that this lifetime is a chapter, not the entire book. The current crisis is one scene. The current love is one chapter. The freedom that comes from this perspective is not detachment — it is faith that the larger arc is coherent.',
    the_shadow: 'Metatron as cosmic-bypass. The shadow is the practitioner who uses *past-life* and *soul-contract* and *Akashic record* language to avoid the work of *this* life. The longer story does not excuse not doing the dishes. Authentic Metatron work returns the practitioner *to* this life with more capacity, not less. The other shadow is the gnostic-elitism risk shared with Raziel — the *I have access to records you do not* posture.',
    pair_with_chakra: 'Crown — Metatron\'s seat is at the throne; his work is at the top of the body, the dimension of cosmic-narrative awareness. Also third-eye, for the past-life vision dimension.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — the natural pairing; pair Metatron with the deep-healing meditation when working on soul-contract or past-life material.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'pisces',
    key_questions: [
      'What part of my current crisis is actually a chapter in a much longer story I am writing across lifetimes?',
      'What soul-contract have I been treating as a prison that is actually fulfillable?',
      'Where in my life is the larger view trying to break through that I have been refusing to admit?'
    ]
  }
]

const ARCHANGEL_BY_SLUG: Record<string, ArchangelGuide> = Object.fromEntries(
  ARCHANGELS.map((a) => [a.slug, a])
)

export const ARCHANGEL_SLUGS = ARCHANGELS.map((a) => a.slug)

export function isArchangelSlug(s: string): boolean {
  return Object.prototype.hasOwnProperty.call(ARCHANGEL_BY_SLUG, s)
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: protector (Michael, Uriel, Zadkiel) =
// fire-violet — the warriors, the shield, the cutter of cords. Herald
// (Gabriel, Raziel, Metatron) = sky-blue — the messengers, the keepers
// of mystery, the scribe at the throne. Healer (Raphael, Chamuel,
// Jophiel) = emerald-rose — the doctor of the body, the healer of the
// heart, the bringer of beauty.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  protector: { c1: '#9b6cc8', c2: '#5a3a8a', label: 'Protectors · the warriors at the threshold' },
  herald: { c1: '#6a9bd4', c2: '#2e5a96', label: 'Heralds · the messengers, the scribes at the throne' },
  healer: { c1: '#6cc890', c2: '#a04a64', label: 'Healers · the doctors of body, heart, and beauty' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function archangelPageHTML(slug: string): string {
  const r = ARCHANGEL_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=archangel-${slug}`

  const title = `Archangel ${escapeHtml(r.name)} — Meaning, Signs, How to Call · gab44 ✨`
  const description = `Who Archangel ${r.name} is, the lineage and tradition, 5 specific signs they are with you, how to call them — concrete invocation, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac. Hand-written, warm, honest about the lineage.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Archangels', item: `${SITE_URL}/gab44/archangels` },
          { '@type': 'ListItem', position: 3, name: `Archangel ${r.name}`, item: `${SITE_URL}/gab44/archangels/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Archangel ${r.name} — meaning, signs, how to call`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/archangels/${slug}`,
        about: `Archangel ${r.name}, ${r.role}, ${r.tradition}, angelic invocation`
      }
    ]
  })

  const otherArchangelsHtml = ARCHANGELS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/archangels/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/archangels/${slug}" />
<meta property="og:title" content="${escapeHtml(`Archangel ${r.name} — meaning, signs, how to call`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/archangels/${slug}" />
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
  .other-archangels { margin: 36px 0 22px; }
  .other-archangels h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .archangels-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 700px) { .archangels-grid { grid-template-columns: repeat(2, 1fr); } }
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
      <a href="/gab44/archangels">all 9 archangels</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Archangels</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>Archangel ${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>archangel ${r.position} of 9</span>
      <span>${escapeHtml(r.family)}-family</span>
    </div>

    <div class="role-card">
      <div class="lbl">role</div>
      <p class="text">${escapeHtml(r.role)}</p>
      <p class="tradition">${escapeHtml(r.tradition)}</p>
    </div>

    <article class="core-card">
      <span class="label">who Archangel ${escapeHtml(r.name)} is</span>
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
      <h3>what this archangel teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the practice turns into bypass</h3>
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
        <div class="pair-text">Sign whose energy aligns with this archangel.</div>
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
      <h2>✉️ Want to know which archangel is walking with *your* chart right now?</h2>
      <p>Each chart has a primary archangel — the one your particular wiring is in active relationship with this season. A <strong>personal reading</strong> identifies it and tells you the chakra, the practice, and the rhythm that will make the relationship land. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my archangel read →</a>
    </section>

    <section class="other-archangels">
      <h3>the other 8 archangels</h3>
      <div class="archangels-grid">
        ${otherArchangelsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/archangels">all 9 archangels</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function archangelIndexHTML(): string {
  const familySections = (['protector', 'herald', 'healer'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = ARCHANGELS.filter((s) => s.family === fam).map((s) => {
      return `<a href="/gab44/archangels/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="pos">${s.position}/9</span>
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
    name: 'The 9 Archangels — Meanings, Signs & How to Call',
    description: 'Hand-written guides to the 9 most-invoked archangels — Michael, Gabriel, Raphael, Uriel, Chamuel, Jophiel, Zadkiel, Raziel, Metatron. Each page covers role, lineage, recognition signs, how to call them, the gift and the shadow.',
    url: `${SITE_URL}/gab44/archangels`,
    hasPart: ARCHANGELS.map((a) => ({
      '@type': 'Article',
      name: `Archangel ${a.name}`,
      url: `${SITE_URL}/gab44/archangels/${a.slug}`,
      about: a.role
    }))
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 9 Archangels — Meanings, Signs &amp; How to Call · gab44 ✨</title>
<meta name="description" content="The 9 most-invoked archangels — Michael (protection), Gabriel (messages), Raphael (healing), Uriel (wisdom), Chamuel (love), Jophiel (joy), Zadkiel (forgiveness), Raziel (mystery), Metatron (soul-records). What each one carries, signs they are with you, how to call them. Hand-written, warm, honest about lineage." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/archangels" />
<meta property="og:title" content="The 9 Archangels — Meanings &amp; How to Call · gab44" />
<meta property="og:description" content="From Michael (the sword that cuts every cord) to Metatron (the scribe at the throne) — what each archangel carries, hand-written, honest about lineage." />
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
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
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
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/mantras">mantras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 9 <span class="accent">Archangels</span> — meanings, signs &amp; how to call</h1>
    <p class="sub">Hand-written guides to the most-invoked archangels in living tradition. From Michael (the sword that cuts every cord) to Metatron (the scribe at the throne, the keeper of the soul\'s records). Each page carries the lineage, the recognition signs, the practice.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Looking for the right archangel for the moment you are in?</strong> Click any of the 9 below. Every page has the actual *role* (the title and tradition), who the archangel *is*, *5 specific signs* they are already with you, *how to call them* (concrete invocation, prayer, practice), what their work means in love and in work, the *gift* they teach, the *shadow* (where the practice turns into spiritual bypass or gatekeeping is named honestly), and pair-with cards for chakra, sound (Phase 1A audio), and zodiac.</p>
      <p><strong>The three families.</strong> The 9 archangels cluster naturally. <em>Protectors</em> (Michael, Uriel, Zadkiel) are the warriors at the threshold — the cutter of cords, the lamp in the dark night, the violet flame that transmutes harm into wisdom. <em>Heralds</em> (Gabriel, Raziel, Metatron) are the messengers, the keepers of mystery, the scribes at the throne — the voice that announces, the secret that arrives when you are ready, the longer story across lifetimes. <em>Healers</em> (Raphael, Chamuel, Jophiel) are the doctors of body, heart, and beauty — the emerald light at the wound, the rose-pink eye that finds the lost, the sunflower yellow that lifts the heavy thought.</p>
      <p><strong>Honest about lineage.</strong> Each page names where the archangel comes from — canonical (named in Hebrew Bible, New Testament, Quran), apocryphal (named in the Book of Enoch, the Pseudo-Dionysian hierarchy, Eastern Orthodox tradition), or kabbalistic (central in Jewish mystical tradition, the Zohar, the Sefer Raziel). Authentic angelic invocation respects the lineage; commercial new-age practice that erases the Jewish, Christian, Islamic, or kabbalistic origins of these beings is a form of theft. We name the source.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which archangel is walking with your chart right now?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Each chart has a primary archangel — the one your particular wiring is in active relationship with this season. A $9 reading identifies it. <a href="/gab44/reading?ref=archangels-index">Get yours →</a></p>
    </div>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · 9 archangels · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
