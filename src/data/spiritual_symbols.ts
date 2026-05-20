// Spiritual Symbols — SEO funnel — /gab44/symbols (index) +
// /gab44/symbols/{slug}. 12 hand-written guides to the most-searched
// spiritual symbols across all of search: ankh, hamsa, eye-of-horus,
// lotus, om, triquetra, pentagram, mandala, yin-yang, tree-of-life,
// triple-moon, evil-eye. Universal cluster — non-Western audience too,
// since these symbols have globalized through TikTok and witchtok.
//
// Each guide is ~600 words across 9 sections (meaning, the message it
// carries, the misuse, in love, in work, the gift, the shadow, pair-with
// chakra/sound/zodiac, 3 key questions). Category-tinted gradient:
// protection = indigo, devotion = gold, cosmos = sage, pagan = violet.
// Cross-funnels into BOTH revenue lanes — every symbol links to
// /gab44/chakras/{slug} (gab44 internal), /healing/script/{slug}
// (Phase 1A audio), and /gab44/reading?ref=symbol-{slug} ($9 Phase 1D).
// Schema.org Article + BreadcrumbList JSON-LD on each page.
// Routes registered BEFORE /gab44/:sign to avoid Hono RegExpRouter
// greedy-match.

import { SITE_URL } from '@/lib/identity'

export interface SymbolGuide {
  slug: string
  name: string
  glyph: string
  origin: string
  category: 'protection' | 'devotion' | 'cosmos' | 'pagan'
  position: number
  one_liner: string
  meaning: string
  the_message: string
  the_misuse: string
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

export const SYMBOLS: SymbolGuide[] = [
  // ── PROTECTION ─────────────────────────────────────────────
  {
    slug: 'hamsa',
    name: 'Hamsa',
    glyph: '🪬',
    origin: 'Levant · North Africa · Mediterranean',
    category: 'protection',
    position: 1,
    one_liner: 'The open hand with the eye at its centre — the oldest answer to envy: I see you, you may not pass.',
    meaning: 'Across the Levant, North Africa, and the Mediterranean the hamsa lives in three living religions at once — *Khamsa* in Arabic, the *Hand of Miriam* in Hebrew, the *Hand of Fatima* in Islam — and probably predates all three. The number five is its body: five fingers, five senses, five directions, five pillars. The eye in the palm watches; the open hand says *halt*. Hamsa is not aggressive protection — there is no sword, no shield, no fire. Just the open palm: I am awake to what surrounds you, you may not pass through me. The most ancient response to envy, to the curse spoken in passing, to the gaze that wishes you smaller.',
    the_message: 'Stand visible and unafraid. The hamsa does not hide; it is mounted at the door, hung at the throat, painted on the wall — *because* protection is not concealment. You do not protect what is precious by hiding it. You protect it by being awake to what surrounds it, and by saying clearly, with the open hand: I see you, I am ready, you may not.',
    the_misuse: 'Treated as souvenir without reverence. The hamsa carries weight in three living religions; to wear one without knowing this is to hold a key without knowing what it opens. Buy it from a culture that holds it. Learn the prayer that comes with it. Otherwise the eye in the palm closes.',
    in_love: 'A relationship that protects what is precious without locking it up — the open hand, not the closed fist. Boundaries that say *halt* without saying *hide*. Reversed: jealousy disguised as care.',
    in_work: 'Public work that draws attention and therefore draws envy. The hamsa is the boundary line: I am visible; I am also held. Hang one over the desk if your work is going public this season.',
    the_gift: 'Hamsa teaches that protection is awareness, not concealment. The hidden treasure is the most stolen one; the watched treasure is the safest. You become harder to harm by being harder to surprise — not by being smaller.',
    the_shadow: 'Paranoia. When the eye in the palm starts seeing enemies in every face, the hamsa has eaten its wearer. Protection becomes its own curse. The open hand was never meant to clench.',
    pair_with_chakra: 'Solar plexus — the hamsa lives in the seat of personal will, where you say *no* with the body.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Letting Go — pair with the hamsa when releasing absorbed envy or psychic residue.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Whose gaze am I trying to deflect — and is it really their gaze, or my own?',
      'What in my life right now is precious enough that I should be standing visibly in front of it?',
      'Where is my open hand actually a closed fist?'
    ]
  },
  {
    slug: 'eye-of-horus',
    name: 'Eye of Horus',
    glyph: '𓂀',
    origin: 'Ancient Egypt',
    category: 'protection',
    position: 2,
    one_liner: 'The wounded eye made whole — symbol of healing, restored sight, and the protection of what was once broken.',
    meaning: 'In the myth, the falcon-god Horus loses his left eye in battle with Set, the god of chaos. Thoth, god of writing and magic, restores it. The Eye of Horus is therefore not a symbol of perfect vision — it is a symbol of *healed* vision. Of what was torn from you and given back. The Egyptians used the eye as protective amulet, painted it on coffins so the dead could see, and broke it into mathematical fractions for measuring grain (the six pieces of the eye add to 63/64; the missing 1/64 is the magic Thoth supplies — a reminder that no measurement is ever quite complete). The eye watches. The eye also remembers being injured.',
    the_message: 'See the wound and see past it. The Eye of Horus is not the eye that has never been hurt; it is the eye that *has* been hurt and has been pieced back together. Look at the place in your life where you lost an eye — and notice that what you can see now, you only see *because* of what was taken. The wisdom is in the scar tissue.',
    the_misuse: 'Worn for occult aesthetic without studying the myth. The Eye of Horus is one of the most-stolen symbols on earth, plastered on currency and conspiracy and Instagram, severed from its grief. Without the wound, the eye is just decoration.',
    in_love: 'A partnership that has survived a real breach and been put back together. The trust that exists *because* it once was broken. Reversed: a relationship pretending the wound was never there.',
    in_work: 'Work that comes from the place you were once cut. The book you write because of the loss; the practice you teach because you needed it; the business you build because nobody helped you when you needed it. The Eye of Horus is the most quietly profitable symbol in the world.',
    the_gift: 'The eye teaches that healed sight sees more than uninjured sight — because it knows what it is to not see. Protection comes not from never being broken, but from having been broken and having seen what is on the other side.',
    the_shadow: 'Hyper-vigilance. The eye that has been wounded once watches everything, sees threat everywhere, sleeps poorly. The Eye of Horus must learn to also close — Thoth restored the lid as well as the iris.',
    pair_with_chakra: 'Third eye — the seat of inner sight, restored after injury.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — pair with the eye when the wound is still living in the nervous system.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'scorpio',
    key_questions: [
      'What in my life can I now see only *because* it was taken from me first?',
      'Where am I still bleeding from a wound that wants to be made whole?',
      'When my Eye of Horus closes to rest, what am I afraid will happen?'
    ]
  },
  {
    slug: 'evil-eye',
    name: 'Evil Eye (Nazar)',
    glyph: '🧿',
    origin: 'Mediterranean · Middle East · Central Asia',
    category: 'protection',
    position: 3,
    one_liner: 'The blue glass eye that absorbs the harmful gaze — and shatters when the dose has become too much.',
    meaning: 'The *nazar* — Turkish for "sight" — is one of the most widespread amulets on earth. Concentric blue, white, light blue, black: the layered iris of an eye looking back at the gaze that wishes you harm. The belief is older than any single religion: Mesopotamian, Greek, Roman, Ottoman, all carry some version. The mechanism is mythic but specific: when someone looks at your fortune, your child, your face, your love, with envy — even if the envy is unconscious — they cast a thread of harm. The nazar absorbs it. And then, the most beautiful detail: a true nazar will *crack* when it has taken too much. You replace it. The new eye drinks the next portion. You live, the eye breaks.',
    the_message: 'Receive what is wishing you well. Deflect what is wishing you small. The nazar is a teacher of *attention to the field* — the recognition that gazes carry energy, that compliments without warmth feel different from compliments with warmth, that you can feel envy as a chill on the back of the neck. Listen to that chill. It is not paranoia; it is data.',
    the_misuse: 'Bought for fashion, hung without intention. A nazar is a working amulet — it has a job. To treat it as boho jewellery is to ask it to break for you while you do not even know it is working.',
    in_love: 'A relationship that other people\'s gazes are too interested in. New love draws envy; happy love draws envy; a child draws envy. Hang a small nazar in the window. Reversed: the nazar that has cracked and you have not noticed — the love is taking hits you have not been seeing.',
    in_work: 'Visible success, especially the kind that arrived suddenly. Promotion, viral post, public win. The nazar lives at the door of the studio for a reason.',
    the_gift: 'The nazar teaches that envy is real, ambient, and not personal. Most of it is unconscious. You do not need to be afraid of it; you need only to be in working relationship with it. The eye breaks; you do not.',
    the_shadow: 'Believing every misfortune is the evil eye. The nazar is *one* category of harm, not all of them. If your nazar is breaking weekly, look at your relationships, not just your luck.',
    pair_with_chakra: 'Third eye — the nazar mirrors back what is sent through the field of sight.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Letting Go — pair with the nazar to release absorbed psychic residue.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aries',
    key_questions: [
      'When was the last time my nazar broke — and what was I receiving in that season?',
      'Whose gaze in my life feels heavier than their words?',
      'What in my life is bright enough now that it deserves an amulet?'
    ]
  },

  // ── DEVOTION ───────────────────────────────────────────────
  {
    slug: 'ankh',
    name: 'Ankh',
    glyph: '☥',
    origin: 'Ancient Egypt',
    category: 'devotion',
    position: 4,
    one_liner: 'The key of life. The breath that animates all things — held in the hand of the gods, offered to the dead, drawn over the heart.',
    meaning: 'The ankh is the oldest symbol of life on earth that we still know how to read. Pharaohs carry it, gods extend it, mummies clutch it. The loop is the eternal — the sun rising again, the breath returning to the body, the soul finding its way back through. The cross beneath is the body, the manifest, the river you are walking. Together: the eternal married to the temporary, the soul embodied. To wear an ankh is not to ward off death but to remember that death is not the opposite of life — only of the body. Life itself, like the loop, has no opposite.',
    the_message: 'Choose what is alive. The ankh asks you to look at every relationship, every commitment, every habit and ask: does this breathe? Does this carry the loop? If yes, give it more of yourself. If no, release without guilt — life flows out of the dead branches as fast as it flows into the green ones, and the tree becomes more itself, not less.',
    the_misuse: 'Worn as aesthetic, the ankh becomes costume. The Egyptians did not give it lightly — it was placed in the hand of someone you wanted to live. To casually use it, or to wear it to look mystical, drains its hum. Treat it like a name: speak it, do not collect it.',
    in_love: 'A relationship that breathes. Where you both come back to the same room and feel more alive, not less. Reversed: a relationship that asks you to be smaller to keep it intact — that is the body without the loop.',
    in_work: 'Work that animates you — the kind where the day passes and you forgot to eat. Reversed: work that costs you breath, literal or metaphorical. The ankh on the desk says: *only the alive things*.',
    the_gift: 'The ankh teaches that life is a quality, not a quantity. A 30-year marriage where neither person is alive is not a long life; it is a long dying. The loop chooses the breath, not the duration.',
    the_shadow: 'Used as a token to feel mystical without doing the practice. The ankh is not a vibe; it is a reminder. Wearing one without remembering is the empty chalice — pretty, weightless, drinkable from no longer.',
    pair_with_chakra: 'Heart chakra — the ankh is held over the heart in coronation; that is where life enters the body.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair with the ankh when calling life-force back into a depleted body.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'leo',
    key_questions: [
      'Where in my life do I need the loop and not just the cross?',
      'What am I keeping alive only out of duty?',
      'If the ankh were placed in my hand right now, what would I draw it over?'
    ]
  },
  {
    slug: 'om',
    name: 'Om / Aum',
    glyph: 'ॐ',
    origin: 'India · Hindu · Buddhist · Jain',
    category: 'devotion',
    position: 5,
    one_liner: 'The first sound of the universe. Three syllables — A, U, M — and the silence that holds them.',
    meaning: 'In the Vedic and Yogic traditions, *Om* is not a word but a *vibration* — the sound of the universe coming into being and the sound of you remembering you are part of it. The Sanskrit script ॐ has four parts, not three: the *A* (waking), the *U* (dreaming), the *M* (deep sleep), and the silent dot above all three (turīya — the awareness inside which the other three appear). To chant Om is to walk through all four states in a single breath. To meditate on Om is to find that the silence between the syllables is older than the syllables. Buddhists, Jains, Sikhs, and Hindus share it; the chant predates all four.',
    the_message: 'Return to the hum. Om asks you to remember that under the noise of your day there is a base note still playing. The breath is the easiest doorway — three syllables, one breath, three states, one self. You do not have to *do* anything to find it. You only have to stop covering it.',
    the_misuse: 'Stickered on a yoga mat without practice. The Om is the most-tattooed Sanskrit syllable in the West and one of the least-meditated. To chant it is the practice; to wear it is only the bookmark.',
    in_love: 'A partnership that knows the silence as well as the talking. Where the third state — sleep beside each other — is as nourishing as the first two. Reversed: a relationship that fills every silence and never lets you both rest in the hum.',
    in_work: 'Work that has a base note running underneath it — a steady thrum you can return to when the surface gets noisy. Reversed: work where the *A* (action) has eaten the *M* (rest).',
    the_gift: 'Om teaches that you are always whole, even when you feel scattered. The four states are already in you; the chant just lines them up so you can hear it.',
    the_shadow: 'Spiritual bypass. Chanting Om to avoid the difficult conversation, the bill, the body. The hum is supposed to *return* you to the world, not lift you out of it.',
    pair_with_chakra: 'Throat — Om is sound made conscious; the throat is where the inner becomes audible.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Deep Healing — pair Om with deep healing when the system needs to remember its base note.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What is the base note still playing under the noise of my week?',
      'Which of the four states (waking, dreaming, deep sleep, awareness) is shortest in my life right now?',
      'When did I last chant something — anything — out loud?'
    ]
  },
  {
    slug: 'lotus-flower',
    name: 'Lotus Flower',
    glyph: '🪷',
    origin: 'India · Egypt · East Asia',
    category: 'devotion',
    position: 6,
    one_liner: 'The flower that rises out of the mud, opens at dawn, and closes at dusk — and is somehow always clean.',
    meaning: 'The lotus is held sacred in every major eastern tradition: in Egypt as the bloom from which Ra was born, in India as the seat of Lakshmi and the throne of the Buddha, in China and Japan as the symbol of purity. What every tradition agrees on is the *mud*. The lotus does not grow despite the swamp; it grows *because* of the swamp. Its roots are sunk in dark, fermenting, decaying matter — and the flower above is luminous, hydrophobic, untouched. The water beads off it. To pull a lotus and wash its petals is unnecessary; the flower has been doing its own washing while you slept. The teaching is exact: the conditions you grew in are not the conditions of the flower.',
    the_message: 'You are not the mud. You came *through* the mud. The lotus does not deny the swamp — it would not exist without it — but it does not stay in the swamp either. Whatever your conditions were, the flower at the top is the *integration* of those conditions, not the proof of them. Stop apologising for the swamp.',
    the_misuse: 'Lotus used to dismiss difficulty as "growth" while still being inside the difficulty. The lotus does not hover above the mud while complaining about how muddy the mud is; it *roots into* the mud and uses it. Aesthetic spirituality skips this part.',
    in_love: 'A partnership that has come up through hard ground and is now blooming. Where you are not pretending the early difficulty did not happen — you are letting the bloom be made of it. Reversed: a relationship that wants the bloom without the rooting.',
    in_work: 'Vocation that came out of your hardest season. The career born from the breakdown. The book born from the grief. The lotus is the most common origin story of meaningful work.',
    the_gift: 'The lotus teaches that the conditions you grew in are *fuel*, not destiny. The mud feeds the bloom; the bloom does not become the mud. Both are true; only one is your seat.',
    the_shadow: 'Spiritual cleansing-as-denial. Treating the lotus as a metaphor for "I have transcended" when in fact the work of transcending is *daily*. The lotus closes every night and re-opens every morning. The work is not done.',
    pair_with_chakra: 'Crown — the thousand-petalled lotus is literally the symbol of the seventh chakra in yogic anatomy.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Letting Go — pair with the lotus when releasing the identification with the swamp.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'pisces',
    key_questions: [
      'What mud did I grow through that the bloom would not exist without?',
      'Where am I still ashamed of the swamp instead of grateful for it?',
      'Has my lotus closed for the night and forgotten to re-open in the morning?'
    ]
  },

  // ── COSMOS ─────────────────────────────────────────────────
  {
    slug: 'mandala',
    name: 'Mandala',
    glyph: '⊛',
    origin: 'India · Tibet · Native American',
    category: 'cosmos',
    position: 7,
    one_liner: 'The circle drawn from the centre out — the cosmos rendered visible, and the self rendered as a circle around its own centre.',
    meaning: 'Mandala is Sanskrit for *circle*, but a mandala is not a circle the way a wheel is a circle. It is a circle drawn *from a centre outward* — a map of the universe centred on a single point. Tibetan Buddhists spend weeks drawing them in coloured sand and then sweep them away to teach impermanence. Carl Jung drew one a day for years and called them the most accurate self-portraits he ever produced. Every culture finds them — the rose windows of cathedrals, the medicine wheel of the Plains, the rangoli at the threshold of Indian homes. The mandala always has a centre, always has a periphery, and always organises everything in between.',
    the_message: 'Where is your centre? The mandala asks the only question that organises a life: from what point are you drawing? When you live without a centre, every decision feels equally weighted and every priority dissolves. When you live from a clear centre, the periphery sorts itself. Sit with a mandala until your eye finds its middle, then draw your week the same way.',
    the_misuse: 'Colouring-book mandalas treated as relaxation without recognition. They *are* relaxing because they are *organising* — the act of filling concentric rings calms the nervous system because it shows the system its own structure. The colouring is a side-effect; the geometry is the medicine.',
    in_love: 'A partnership where each person has their own clear centre and the relationship is the third circle, not the substitute centre. Reversed: enmeshment — two people who lost their own centre and are trying to share one.',
    in_work: 'Work organised around a single clear question. The book that has a thesis; the company that has a single sentence; the day that has one priority. The mandala is the test: does your work have a middle?',
    the_gift: 'The mandala teaches that order is not control. The Tibetans build it for weeks and sweep it in seconds. The order was real; the impermanence is also real. Both. Always both.',
    the_shadow: 'Perfectionism. The mandala drawn so carefully that you forget to live in it. The map mistaken for the territory. The Tibetans sweep theirs for a reason.',
    pair_with_chakra: 'Third eye — the mandala is the visual cortex\'s shorthand for *cosmic order*.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — pair with mandala-drawing when the inner world is fragmented.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'virgo',
    key_questions: [
      'What is at the centre of the circle I am currently drawing my life around?',
      'If I had to sweep my mandala away tomorrow, what would I have built it for?',
      'Where in my life is order serving me — and where has it become a substitute for living?'
    ]
  },
  {
    slug: 'yin-yang',
    name: 'Yin-Yang (Taijitu)',
    glyph: '☯',
    origin: 'China · Taoist',
    category: 'cosmos',
    position: 8,
    one_liner: 'Two halves curved into one circle — and a dot of each colour inside the other, because nothing is ever purely itself.',
    meaning: 'The Taijitu — the "diagram of supreme polarity" — is the visual centre of Taoist philosophy. *Yin* is the receptive, the dark, the cold, the moon, the feminine, the inward; *Yang* is the expressive, the light, the warm, the sun, the masculine, the outward. But the genius of the diagram is not the two halves — it is the *dot*. There is a small black dot in the white half and a small white dot in the black half. Nothing is ever purely one thing. The brightest summer day contains a seed of winter. The deepest grief contains a seed of relief. The most disciplined person contains a seed of chaos. To work with the Taijitu is to stop looking for purity and start looking for the dot.',
    the_message: 'Find the dot. The Taijitu asks you to refuse the temptation of clean opposites. Whatever you are inside right now — joy, grief, certainty, doubt — has its opposite already living inside it. The opposite is not the threat; it is the seed of the next half of the cycle. Hold it gently. It is the door out, when the door comes.',
    the_misuse: 'Yin-yang reduced to "balance" as if balance meant 50/50. The diagram is *flowing*, not balanced — sometimes more yin, sometimes more yang, sometimes the dot is the only thing keeping the whole circle from collapsing. Static balance is not the lesson.',
    in_love: 'A partnership where both people are allowed to be the full polarity — neither all light nor all dark — and where the seed of the other is welcomed in each. Reversed: roles flattened into halves with the dot erased; one partner forbidden from softness, the other forbidden from sharpness.',
    in_work: 'A practice that includes its opposite — rest inside discipline, play inside seriousness, doubt inside confidence. Reversed: work that worships one pole and rejects the other, eventually breaking when the rejected pole comes back through the basement.',
    the_gift: 'The Taijitu teaches that you are not stuck in your current state. The seed of the opposite is already there. You do not have to push your way to the other half; you only have to nourish the dot you already carry.',
    the_shadow: 'Spiritual bypass via "everything is balance". Some things are not in balance and need *change*, not philosophy. The Taoists were not passive; they were precise.',
    pair_with_chakra: 'Sacral — the Taijitu lives in the curve of the hips, where polarity meets in the body.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair with the Taijitu when the cycle is asking you to release the current pole.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'libra',
    key_questions: [
      'Which dot — the seed of the opposite — is already alive inside the state I am in right now?',
      'Where am I clinging to one pole and pretending its opposite is not in me?',
      'What in my life is asking for flow rather than balance?'
    ]
  },
  {
    slug: 'tree-of-life',
    name: 'Tree of Life',
    glyph: '🌳',
    origin: 'Kabbalah · Norse · Celtic · Mesoamerican',
    category: 'cosmos',
    position: 9,
    one_liner: 'The axis of the world — roots in the underworld, trunk in the human realm, branches in the heavens — and you, somewhere along it.',
    meaning: 'Almost every mystic tradition has a Tree of Life: the Norse Yggdrasil holding the nine worlds, the Kabbalistic *Etz Chaim* with its ten Sefirot, the Mayan *ceiba* connecting Xibalba to Heaven, the Celtic *crann bethadh* at the centre of every clan\'s sacred grove. The agreement is uncanny: the tree is *vertical*, with roots, trunk, and crown, and these correspond to underworld, middle world, and upper world. To be human is to live somewhere along the trunk. The branches reach for the sky we cannot quite touch; the roots dig into the dark we do not want to look at; and the trunk — the lived life — is the only place the two ever meet. The Tree of Life is the most honest map of the soul: top, bottom, *and* the part you are actually in.',
    the_message: 'You are not just the branches. The Tree of Life asks you to remember that the part of you that is reaching for the sun is held up by a part of you that is in the dark. Honour the roots. Tend the trunk. Trust the branches. All three are you, and a tree without any one of them is dead within a season.',
    the_misuse: 'Tree of Life as decorative pendant without rooting practice. The tree is a *vertical* symbol; if you are only wearing the canopy, you are wearing half a tree. Pair the symbol with a practice that goes downward as well as upward.',
    in_love: 'A partnership rooted in shared ground — same values in the dark, same reach toward the sky. Reversed: two people sharing a canopy without realising their roots are in different soils.',
    in_work: 'Work that comes from your *roots* — old wounds, ancestral lines, the buried things — and reaches toward your *branches*: the contribution, the legacy, the canopy others sit under. The trunk is the daily practice that connects them.',
    the_gift: 'The Tree of Life teaches that depth and height are the same axis. The deeper you go into the dark of your roots, the further your branches can extend. There is no shortcut.',
    the_shadow: 'Branches without roots — fast growth, public reach, glittering canopy, then a single storm and the whole thing falls. The Norse called it *Ragnarök*; we call it burnout.',
    pair_with_chakra: 'Root — the tree begins where your sit-bones meet the earth.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing — pair with the tree when restoring depth after a long season of reaching.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'taurus',
    key_questions: [
      'Are my roots and my branches in proportion right now — or has one outgrown the other?',
      'What in my underworld am I afraid to look at, that the canopy depends on?',
      'If a storm came tonight, would my tree stand?'
    ]
  },

  // ── PAGAN ──────────────────────────────────────────────────
  {
    slug: 'triquetra',
    name: 'Triquetra',
    glyph: '⚭',
    origin: 'Celtic · Norse · Christian',
    category: 'pagan',
    position: 10,
    one_liner: 'Three interlocked vesicas — the trinity that is older than the trinity, the three-that-is-one in every tradition that holds it.',
    meaning: 'The triquetra — Latin *tri-quetrus*, "three-cornered" — is one of the most pan-religious symbols on earth. It appears on Norse runestones, in the Book of Kells, on Indo-European bronze age artefacts, and on the foreheads of Hindu deities. Three identical curved triangles interlock so that no one of them is foreground and no one is background; pulling on one moves the other two. The Celts read it as maiden, mother, crone; the Norse as Odin, Vili, Vé; the Christians later adopted it for Father, Son, Holy Spirit. Every reading agrees: *three is the lowest number of distinct things that can become a fourth thing*. Two is opposition; three is system. The triquetra is the mind\'s shorthand for *relational wholeness*.',
    the_message: 'Look for the third. When a situation is locked in two-ness — me/them, yes/no, stay/go — the triquetra asks you to find the third element you have been refusing to see. The third is not the compromise; it is the dimension that makes the conflict resolvable. Mind and body are stuck; spirit is the third. Past and future are stuck; presence is the third.',
    the_misuse: 'Reduced to a band-tattoo aesthetic without any of its three terms. A triquetra without a triad behind it is just a knot. Choose the three you mean; live with them; *then* wear the symbol.',
    in_love: 'A partnership that has a *third* — a shared practice, a child, a calling, a god — that is bigger than either of you and holds both. Reversed: a couple stuck in pure two-ness, locked in the binary of each other.',
    in_work: 'Work organised around three terms instead of two — the founder, the team, and the customer; the body, the mind, and the craft; the past, the present, and the future. The triangle is more stable than the line.',
    the_gift: 'The triquetra teaches that wholeness is not symmetry; it is *systemic*. Three things in right relation make a fourth thing — a field — that none of them alone could be.',
    the_shadow: 'Mystical complexity for its own sake. Drawing triquetras while your two are still feuding is procrastination. Find the third by *living* the third, not by drawing it.',
    pair_with_chakra: 'Heart — the heart is the triquetra of the body: mind above, body below, and the heart as the integrating third.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair with the triquetra when releasing a binary that has no third yet.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'gemini',
    key_questions: [
      'Where in my life am I stuck in two-ness, and what is the third I have been refusing to see?',
      'What three things, in right relation, make me whole?',
      'Which of my three currently has the least attention?'
    ]
  },
  {
    slug: 'pentagram',
    name: 'Pentagram',
    glyph: '⛤',
    origin: 'Pythagorean · Pagan · Wiccan',
    category: 'pagan',
    position: 11,
    one_liner: 'The five-pointed star drawn in a single unbroken line — earth, air, fire, water, and the spirit that holds them.',
    meaning: 'The pentagram is older than every religion that has tried to claim or condemn it. The Pythagoreans considered it the symbol of mathematical perfection — the golden ratio is encoded in every angle of it, and it can be drawn without lifting the hand. The Babylonians, Hebrews, Christians, and Sumerians all used it. Its modern Pagan meaning — earth, air, fire, water, and spirit at the top — is a 20th-century systematisation, but the underlying instinct is ancient: five elements, four mundane and one transcendent, in a closed continuous circuit. The star upright, with spirit at the top, says *spirit governs matter*. The star inverted, with two points up, says *matter has temporarily forgotten*. Neither is evil; both are seasons.',
    the_message: 'Tend the five. The pentagram asks you to take inventory of the four physical elements in your life — earth (body/finances), air (mind/speech), fire (will/passion), water (feeling/relationship) — *and* the fifth, spirit, which holds the other four. When one of the five is starving, the star is no longer balanced, and the line you drew without lifting your hand starts to wobble.',
    the_misuse: 'Treated as edgy or evil because of cinematic appropriation. The inverted pentagram is not Satan; it is matter without spirit, which is a *condition*, not an enemy. The fear of the symbol is mostly cinematic.',
    in_love: 'A partnership that is whole across all five elements — bodies fed (earth), minds talking (air), passion alive (fire), feelings flowing (water), spirit shared (the fifth point). Reversed: love that is excellent in two of the five and starving in three.',
    in_work: 'Work that pays the body (earth), articulates clearly (air), drives toward something (fire), connects to people (water), and means something (spirit). The pentagram is a quick audit of any vocation.',
    the_gift: 'The pentagram teaches that wholeness is *five-fold*, not two-fold. Most burnout is one or two starving points eating the rest of the star. Feed the starved point; the star straightens.',
    the_shadow: 'Spirit-only spirituality — the star drawn with only the top point alive. The Pythagoreans were mathematicians; the four lower points are not optional.',
    pair_with_chakra: 'Solar plexus — the pentagram is the star of personal will, drawn from the centre out.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Deep Healing — pair with the pentagram when one of the five elements is depleted.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'capricorn',
    key_questions: [
      'Which of my five points (earth, air, fire, water, spirit) is the most starved right now?',
      'Which is overfed?',
      'If I drew my pentagram tonight, would I be able to do it without lifting my hand?'
    ]
  },
  {
    slug: 'triple-moon',
    name: 'Triple Moon',
    glyph: '☾',
    origin: 'Wicca · Greek · pre-Christian Europe',
    category: 'pagan',
    position: 12,
    one_liner: 'Waxing crescent, full circle, waning crescent — maiden, mother, crone — three faces of the same goddess, three seasons of the same life.',
    meaning: 'The Triple Moon — waxing crescent on the left, full circle in the middle, waning crescent on the right — is the central symbol of modern Wicca and is rooted in much older European goddess traditions: Greek Artemis/Selene/Hekate, Celtic Brigid/Danu/Cailleach, Norse Freyja in her three aspects. The three faces are not three different goddesses; they are three *modes* of the same one. The Maiden is becoming, learning, fierce, untouched. The Mother is fertile, generous, central, the giver. The Crone is finishing, knowing, untouchable, the keeper of what has been seen. Every woman is all three across her life, and many are all three within a single week. The triple moon makes visible what calendars try to flatten: a life is *cyclical*, not linear.',
    the_message: 'Honour all three. The Triple Moon asks you to notice which face you are in — and to refuse the cultural pressure to live forever in only one. The Maiden cannot last; the Mother is not a permanent assignment; the Crone is not the end of being a woman, she is the *third* of being a woman. Each face has its medicine. Each face is sovereign. None is failure.',
    the_misuse: 'Reduced to "feminine energy" aesthetic without honouring the Crone. Modern culture loves the Maiden, will buy the Mother, and silences the Crone. A Triple Moon without the Crone is two-thirds of a goddess.',
    in_love: 'A partnership that is allowed to be in different seasons together — sometimes maiden-energy (play, beginnings), sometimes mother-energy (tending, building), sometimes crone-energy (finishing, honest). Reversed: a relationship that demands one face only.',
    in_work: 'Work-cycles that honour the Crone — the season of finishing, releasing, and saying *enough* — instead of staying permanently in the Maiden\'s newness or the Mother\'s output.',
    the_gift: 'The Triple Moon teaches that wholeness is *cyclical*, not constant. You are not failing because you are no longer the Maiden; you are *becoming the next face*. Mourn what is leaving; greet what is arriving.',
    the_shadow: 'Stuck in one face. The eternal Maiden who refuses to grow up; the eternal Mother who refuses to put the children down; the prematurely Crone who is bitter at thirty. The wheel is meant to turn.',
    pair_with_chakra: 'Sacral — the triple moon lives in the womb, which is itself a small triple moon: cycle of becoming, fullness, and release.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair with the Triple Moon when the wheel is turning to the next face.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'cancer',
    key_questions: [
      'Which face of the moon am I currently in — Maiden, Mother, or Crone?',
      'Which face have I been resisting becoming?',
      'Which face is most starved in my life — and what would feeding it look like?'
    ]
  }
]

const SYMBOL_BY_SLUG: Record<string, SymbolGuide> = Object.fromEntries(SYMBOLS.map((s) => [s.slug, s]))

export const SYMBOL_SLUGS = SYMBOLS.map((s) => s.slug)

export function isSymbolSlug(s: string): boolean {
  return s in SYMBOL_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Category-tinted gradient: protection = indigo, devotion = gold,
// cosmos = sage, pagan = violet.
const CATEGORY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  protection: { c1: '#5a6cb8', c2: '#2c3a82', label: 'Protection · ward' },
  devotion: { c1: '#d6a85a', c2: '#a06e2c', label: 'Devotion · sacred' },
  cosmos: { c1: '#7ba37c', c2: '#3e6e44', label: 'Cosmos · pattern' },
  pagan: { c1: '#9b6cb8', c2: '#5e3a82', label: 'Pagan · craft' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function symbolPageHTML(slug: string): string {
  const r = SYMBOL_BY_SLUG[slug]
  if (!r) return ''
  const accent = CATEGORY_ACCENT[r.category] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=symbol-${slug}`

  const title = `${escapeHtml(r.name)} — Spiritual Symbol Meaning · Origin, Message, In Love &amp; Work · gab44 ✨`
  const description = `What ${r.name} means: origin, the message it carries, the misuse, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac, key questions. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Symbols', item: `${SITE_URL}/gab44/symbols` },
          { '@type': 'ListItem', position: 3, name: r.name, item: `${SITE_URL}/gab44/symbols/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} — spiritual symbol meaning`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/symbols/${slug}`,
        about: `${r.name} symbol meaning, ${r.origin}, spiritual symbology`
      }
    ]
  })

  const otherSymbolsHtml = SYMBOLS.filter((q) => q.slug !== slug).slice(0, 12).map((q) => {
    const acc = CATEGORY_ACCENT[q.category] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/symbols/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/symbols/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} — spiritual symbol meaning`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/symbols/${slug}" />
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
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .glyph { font-size: 1.0em; vertical-align: -2px; padding-right: 14px; color: var(--c2); }
  .cat-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  .meta-line { font-size: 13px; color: var(--fg-muted); margin: 0 0 22px;
    font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
  .meta-line span + span::before { content: '  ·  '; color: var(--line-strong); }
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
  .reading-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .reading-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .reading-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px; }
  .reading-card.up { border-left: 4px solid var(--c1); }
  .reading-card.rev { border-left: 4px solid #8b8779; }
  .reading-card .lbl { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .reading-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.6; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px; padding: 14px 18px; }
  .ctx-card.love { border-left: 4px solid #d68aa0; }
  .ctx-card.work { border-left: 4px solid #5a6cb8; }
  .ctx-card .lbl { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .ctx-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; margin: 8px 0; }
  .panel.gift { border-left: 4px solid var(--c1); }
  .panel.shadow { border-left: 4px solid #d63d4d; }
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
  .other-symbols { margin: 36px 0 22px; }
  .other-symbols h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .symbols-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  @media (max-width: 700px) { .symbols-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 460px) { .symbols-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; color: var(--c2); }
  .ph-mini .name { font-size: 11px; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/symbols">all 12 symbols</a>
      <a href="/gab44/runes">runes</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Spiritual Symbols</div>
    <span class="cat-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>${escapeHtml(r.origin)}</span>
      <span>${escapeHtml(r.category)}</span>
    </div>

    <article class="core-card">
      <span class="label">what ${escapeHtml(r.name)} means</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">📜</span>the message &amp; the misuse</h2>
    <div class="reading-grid">
      <div class="reading-card up">
        <div class="lbl">the message it carries</div>
        <p>${escapeHtml(r.the_message)}</p>
      </div>
      <div class="reading-card rev">
        <div class="lbl">the misuse</div>
        <p>${escapeHtml(r.the_misuse)}</p>
      </div>
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

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this symbol teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the symbol turns against you</h3>
      <p>${escapeHtml(r.the_shadow)}</p>
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
        <div class="pair-text">Sign whose energy aligns with this symbol.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after working with ${escapeHtml(r.name)}</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading that interprets ${escapeHtml(r.name)} for *your* life</h2>
      <p>The meaning above is general. A <strong>personal reading</strong> looks at *your* chart, *your* current season, and the specific symbol you have been drawn to — and tells you what it is actually saying *to you* and what to do with it. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-symbols">
      <h3>other spiritual symbols</h3>
      <div class="symbols-grid">
        ${otherSymbolsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/symbols">all 12 symbols</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function symbolIndexHTML(): string {
  const categorySections = (['protection', 'devotion', 'cosmos', 'pagan'] as const).map((cat) => {
    const accent = CATEGORY_ACCENT[cat]
    const items = SYMBOLS.filter((s) => s.category === cat).map((s) => {
      return `<a href="/gab44/symbols/${s.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${s.glyph}</span>
          <span class="origin">${escapeHtml(s.origin)}</span>
        </div>
        <div class="name">${escapeHtml(s.name)}</div>
        <div class="teaser">${escapeHtml(s.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="cat-section">
      <h2 class="cat-h" style="--c1:${accent.c1};--c2:${accent.c2}">${escapeHtml(accent.label)}</h2>
      <div class="grid">
        ${items}
      </div>
    </section>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Spiritual Symbols — All 12 Meanings · Ankh, Hamsa, Om, Lotus, Pentagram &amp; More · gab44 ✨</title>
<meta name="description" content="The 12 most-asked-about spiritual symbols, hand-written: ankh, hamsa, eye of horus, lotus, om, triquetra, pentagram, mandala, yin-yang, tree of life, triple moon, evil eye. Origin, meaning, the gift, the shadow." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/symbols" />
<meta property="og:title" content="Spiritual Symbols — All 12 Meanings · gab44" />
<meta property="og:description" content="From the ankh to the evil eye, every symbol\\'s meaning, origin, gift, and shadow — hand-written, warm, honest." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 760px; }
  .intro { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim); }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .cat-section { margin: 28px 0 16px; }
  .cat-h { font-size: 18px; font-weight: 700; color: var(--fg);
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
  .card .glyph { font-size: 36px; color: var(--c2); }
  .card .origin { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--fg-muted);
    letter-spacing: 0.05em; text-align: right; max-width: 60%; line-height: 1.3; }
  .card .name { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
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
      <a href="/gab44/runes">runes</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 most-searched <span class="accent">spiritual symbols</span> — meanings, origins, gifts &amp; shadows.</h1>
    <p class="sub">From the ankh to the evil eye. Each symbol is a key, a question, a season. Hand-written, warm, honest about the gift and the misuse — and why these particular twelve still resonate after thousands of years.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Wearing a symbol or drawn to one in a dream?</strong> Click the symbol below — every page has the origin and meaning, the message it carries, the misuse to avoid, what it says in love and in work, the gift it teaches, the shadow it casts, and pair-with cards for chakra, sound, and zodiac sign.</p>
      <p><strong>The four families.</strong> The twelve cluster naturally into four registers. <em>Protection</em> (hamsa, eye of horus, evil eye) — the symbols that ward, watch, and absorb. <em>Devotion</em> (ankh, om, lotus) — the symbols that point at the sacred and at the practice. <em>Cosmos</em> (mandala, yin-yang, tree of life) — the symbols that map the pattern of being. <em>Pagan craft</em> (triquetra, pentagram, triple moon) — the symbols of the Western mystical traditions.</p>
      <p><strong>Wear the one whose work you actually want to do.</strong> A symbol is not jewellery; it is a contract. The hamsa wants you awake. The lotus wants you rooted in the swamp. The pentagram wants you tending all five elements. Pick the contract you can keep.</p>
    </div>

    ${categorySections}

    <div class="reading-strip">
      <h2>Drawn to one of these symbols and want it read in the context of *your* life?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 reading interprets the symbol you have been holding in the context of your chart and current season. <a href="/gab44/reading?ref=symbol-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
