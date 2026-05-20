// Sacred Geometry — SEO funnel — /gab44/geometry (index) +
// /gab44/geometry/{slug}. 10 hand-written guides — flower-of-life,
// metatrons-cube, sri-yantra, merkaba, vesica-piscis, seed-of-life,
// fruit-of-life, platonic-solids, torus, fibonacci-spiral. Distinct
// keyword cluster from spiritual_symbols (those are emblems; these
// are geometric patterns); no overlap. Universal cluster — non-Western
// audience too via spiritual TikTok and tattoo searches. Targets:
// "flower of life meaning", "metatron's cube symbolism", "sri yantra
// meaning", "merkaba spiritual meaning", "vesica piscis", "seed of
// life", "torus energy field", "fibonacci spiral sacred geometry",
// "platonic solids spiritual meaning", "fruit of life".
//
// Each guide is ~600 words across 9 sections (origin + meaning,
// pattern it carries, where you find it, in love, in work, the gift,
// the shadow, pair-with chakra/sound/zodiac, 3 key questions).
// Family-tinted gradient: circles-of-life (flower, seed, fruit,
// vesica) = teal; 3d-cosmic (metatron, merkaba, platonic, torus)
// = violet; flow-pattern (sri-yantra, fibonacci) = gold. Cross-funnels
// into BOTH revenue lanes — every shape links to /gab44/chakras/{slug}
// (gab44 internal), /healing/script/{slug} (Phase 1A audio), AND
// /gab44/reading?ref=geometry-{slug} ($9 Phase 1D). Schema.org Article
// + BreadcrumbList JSON-LD on each page. Routes registered BEFORE
// /gab44/:sign to avoid Hono RegExpRouter greedy-match.

import { SITE_URL } from '@/lib/identity'

export interface GeometryGuide {
  slug: string
  name: string
  glyph: string
  family: 'circles' | 'cosmic' | 'flow'
  position: number
  one_liner: string
  meaning: string
  pattern: string
  where_found: string
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

export const GEOMETRIES: GeometryGuide[] = [
  {
    slug: 'flower-of-life',
    name: 'Flower of Life',
    glyph: '🌸',
    family: 'circles',
    position: 1,
    one_liner: 'Nineteen interlocking circles in a perfect hexagonal weave — the master pattern that contains every other geometry, the blueprint that mystics have been pointing at for at least six thousand years.',
    meaning: 'The Flower of Life is the most repeated diagram in the history of sacred art — found etched into temple walls in Egypt (Abydos, ~3000 BCE), painted in Chinese Buddhist scrolls, embroidered on Islamic tiles, drawn in the margins of Leonardo da Vinci\'s notebooks. Nineteen overlapping circles, all the same size, arranged in a hexagonal lattice — and inside this single drawing every other sacred-geometry pattern can be derived: the Seed of Life (the inner six), the Egg of Life (eight), the Fruit of Life (thirteen), Metatron\'s Cube, the five Platonic Solids, the entire fabric of pattern. The mystic claim is simple and not even mystical: this is what creation looks like at the geometric level — the rule by which a single point becomes a cosmos. You don\'t need to believe that to feel it. The pattern is mathematically self-replicating, visually completing, and in front of any person who looks at it for sixty seconds, the breath slows down. That is not an accident.',
    pattern: 'The pattern is built from one circle drawn around a single point — and then six more circles drawn from each of the points where the first circle\'s perimeter intersects the next. Then twelve more. Each circle is the same size, and every circle\'s centre lies on the perimeter of its neighbour. The result is a hexagonal weave that could continue infinitely outward; the standard nineteen-circle version is the artist\'s convention, not a rule of the geometry.',
    where_found: 'Etched into the granite of the Osirion temple at Abydos (Egypt, dated to at least 3000 BCE, possibly older). On the floors of the Forbidden City in Beijing. In Italian Renaissance manuscripts, including da Vinci\'s. On Mongolian Buddhist temples. In Galician folk embroidery. On Islamic mosques across the world. The fact that this pattern appears, identically, on three continents in cultures that had no contact with each other is the part that has unsettled scholars for two centuries.',
    in_love: 'A relationship where each person is their own complete circle, and the overlap is the field where the third thing lives — the love that is neither yours nor theirs but the thing made by the meeting. Reversed: relationships where one person dissolves into the other; the Flower of Life requires that each circle keep its centre.',
    in_work: 'Architecture, design, engineering, biology, music. Anywhere that pattern, harmony, and structure are the raw material. The Flower of Life is the artist\'s reminder that beauty is mathematical and the mathematician\'s reminder that math is beautiful.',
    the_gift: 'The pattern is *order without rigidity*. Looking at the Flower of Life slows the nervous system because the eye keeps finding completion — every circle resolves, every triangle closes, every gap has a reason. It is the visual proof that order and grace are the same thing.',
    the_shadow: 'Pattern-worship. People who hang the Flower of Life on the wall and assume the geometry will do the work for them. The pattern is a mirror, not an engine; it shows you the order you are capable of seeing, but it does not generate that order in your life.',
    pair_with_chakra: 'Crown — the centre that holds the whole, the way the centre point holds the Flower.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — pair with this geometry when you need order to return to a chaotic system.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'libra',
    key_questions: [
      'Where in my life am I trying to force a circle to become a square?',
      'Which overlap with another person is the third thing — not theirs, not mine, but the thing made by the meeting?',
      'What pattern is already there in my life that I have been refusing to see?'
    ]
  },
  {
    slug: 'metatrons-cube',
    name: 'Metatron\'s Cube',
    glyph: '🔯',
    family: 'cosmic',
    position: 2,
    one_liner: 'Thirteen circles connected by every possible straight line — and from those lines, every Platonic solid emerges. Named after the archangel said to record every soul that has ever lived.',
    meaning: 'Metatron\'s Cube is what you get when you take the thirteen circles of the Fruit of Life and draw a straight line from the centre of each circle to the centre of every other circle. Seventy-eight lines later, you have a single figure that contains, embedded inside it, all five of the Platonic solids — the tetrahedron, the cube, the octahedron, the icosahedron, and the dodecahedron — which are the only five three-dimensional shapes whose every face is the same regular polygon. In Plato\'s cosmology, those five solids are the building blocks of the four elements (fire, earth, air, water) plus the heavens. So Metatron\'s Cube is the *engineering drawing* of physical reality, traced from a single point. Metatron is the archangel of the Akashic record — the angel who is said to write down every soul, every thought, every action. The cube bears his name because he is the keeper of what is recorded; the geometry is the *book* in which everything is written.',
    pattern: 'Start with the Fruit of Life: thirteen circles, one in the centre, six in a hexagonal ring around it, six more reaching outward. Now connect the centres of every circle to every other circle with a straight line — every centre to every centre, no exceptions. Seventy-eight lines. Inside the resulting tangle, all five Platonic solids appear as projection shadows: the cube, the octahedron, the tetrahedron, the icosahedron, the dodecahedron.',
    where_found: 'Jewish Kabbalistic texts (Metatron is a major figure in Merkabah mysticism). Medieval European alchemical manuscripts. Modern New Age pendants and crystal grids. Tattoo art across the spiritual revival of the last twenty years. The figure was less common in pre-modern public art than the Flower or Sri Yantra; it lived more in private esoteric notebooks.',
    in_love: 'A relationship that contains every shape — practical (the cube), passionate (the tetrahedron), elemental (water, fire, air), and transcendent (the dodecahedron). Reversed: a relationship that has flattened into one shape and refuses the others.',
    in_work: 'Engineering, architecture, mathematics, theoretical physics — anywhere the question is *what is the building-block?* Metatron\'s Cube belongs to people who want to see the structure underneath the structure.',
    the_gift: 'The geometry is *containment*. Every shape that physical reality is built from is held inside this single figure. To meditate on it is to remember that you do not need to leave one form to enter another; all the forms are already in you.',
    the_shadow: 'Mystification. The cube is often presented as if drawing it on a chakra solves the problem; geometry alone does not. The shape is a map; you still have to walk.',
    pair_with_chakra: 'Third eye — the seat of pattern-recognition, where the lines connect into a figure.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — pair when the world feels chaotic and you need the structure underneath to come into view.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'aquarius',
    key_questions: [
      'Which of the five elements (fire, earth, air, water, ether) is missing from my current life?',
      'What pattern have I been recording without realising it — what is in my Akashic line?',
      'When I draw the line from this part of myself to that one, what shape appears?'
    ]
  },
  {
    slug: 'sri-yantra',
    name: 'Sri Yantra',
    glyph: '🔱',
    family: 'flow',
    position: 3,
    one_liner: 'Nine interlocking triangles — four pointing up, five pointing down — drawn around a single central dot called the bindu. Older than recorded Hinduism. The most precise sacred geometry on earth.',
    meaning: 'The Sri Yantra (also: Shri Yantra, Sri Chakra) is the supreme yantra in Tantric Hinduism — a geometric figure used as a meditation device, a ritual object, and a representation of the goddess Tripura Sundari. Nine interlocking triangles: four facing upward (the masculine principle, Shiva) and five facing downward (the feminine principle, Shakti), creating forty-three smaller triangles by their intersection, all arranged around a central point called the bindu — the seed, the singularity, the place where divinity touches the geometric plane. Drawing a Sri Yantra correctly is mathematically extreme: every line must cross every other line at a precise angle, and the centres of all forty-three sub-triangles must align. The traditional claim is that no human being can draw a perfect Sri Yantra, only approximate one — because perfection in this geometry is what divinity *itself* is. Practitioners use it as a focus for meditation, a base for visualising the syllable Om, and an aid in the worship of Lalita, the goddess of beauty and bliss.',
    pattern: 'Begin from a central point (the bindu). Around it, nine triangles — four with apex up, five with apex down — interlocking with each other to form an eight-petalled lotus, then a sixteen-petalled lotus, three protective rings, and an outer square (the bhupura) with four T-shaped gates. The whole figure is built around the bindu and breathes outward in concentric stages — exactly the way the cosmos itself, in Tantric metaphysics, expands from the singular point.',
    where_found: 'Hindu temples across India for at least 1,200 years (oldest verified examples around 8th century CE; oral tradition holds the figure as far older). Painted, etched, and engraved on copper, gold, silver, and stone. Tibetan Buddhist mandalas borrow the structure. The figure has spread globally through yoga, kundalini practice, and the spiritual revival of the past century.',
    in_love: 'The dance of upward and downward triangles is the dance of opposites that *create* something new — masculine and feminine, action and surrender, the rising and the descending. Reversed: a relationship where both partners face the same direction; the Sri Yantra requires opposition for creation.',
    in_work: 'Anywhere the work is to hold tension between opposites — leadership that must be both firm and receptive, creativity that must hold structure and chaos, healing that must hold the body and the soul. The yantra is the geometric instruction.',
    the_gift: 'The Sri Yantra teaches that divinity is not transcendence *of* the body but the perfect interlocking of opposites *in* the body. Every direction has a counter-direction; every up has a down; every Shiva has a Shakti. The bindu — the centre — is where the opposites meet, and that meeting is what is divine.',
    the_shadow: 'Aesthetic without practice. Hanging the Sri Yantra without learning its mantra (Om Sri Maha Lalitayai Namah) or its visualisation reduces it to wallpaper. The geometry was meant to be inhabited, not displayed.',
    pair_with_chakra: 'Heart — the bindu of the body, where Shiva and Shakti meet inside you.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — the Sri Yantra is the yantra of Lalita, who is also the goddess of prosperity; pair when claiming worth.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'scorpio',
    key_questions: [
      'Where in my life am I refusing to hold both opposites — picking one and disowning the other?',
      'What is my bindu — the singular point everything else in my life is rotating around?',
      'Which Shakti am I refusing to let through; which Shiva am I refusing to ground?'
    ]
  },
  {
    slug: 'merkaba',
    name: 'Merkaba',
    glyph: '✡',
    family: 'cosmic',
    position: 4,
    one_liner: 'Two interlocking tetrahedrons — one pointing up, one pointing down — forming a three-dimensional Star of David. Said to be the *light vehicle* the soul uses to travel between dimensions.',
    meaning: 'Merkaba (also: Merkavah) is a Hebrew word that means *chariot* — specifically, the chariot of God described in the prophet Ezekiel\'s vision (Ezekiel 1) and elaborated in Merkabah mysticism, one of the oldest strands of Jewish esotericism. Geometrically, the Merkaba is two tetrahedrons (four-faced pyramids) interlocked at their midpoints, one pointing up, one pointing down — the three-dimensional version of the two-dimensional Star of David. The mystic teaching, drawn from Merkabah, Kabbalistic, and later Egyptian-revival sources, is that this shape exists around every human body as a *light field* — and that with the right meditation it can be activated to spin in counter-rotating directions, creating a vehicle the soul can use to travel between states of consciousness. Sceptics call this poetry; practitioners call it experience. The geometry itself is undeniable: a perfect interlocking of masculine (upward, Shiva-like) and feminine (downward, Shakti-like) tetrahedrons, the same pattern as the Sri Yantra in three dimensions instead of two.',
    pattern: 'Two regular tetrahedrons — each tetrahedron has four equilateral-triangle faces. One points upward, with its apex at the top of your head. The other points downward, with its apex below your feet. They overlap at your heart centre, interlocking through your torso. Seen from any side, the figure is a Star of David. Seen from above, the figure is a hexagon. Seen from any angle, it is the geometry of *meeting*.',
    where_found: 'Jewish Merkabah mysticism (1st-12th century CE manuscripts). Egyptian-revival hermetic texts. New Age channelled material from the 1980s onward (notably Drunvalo Melchizedek\'s Flower of Life teachings). Modern crystal grids and meditation cards. Tattoo art across the global spiritual revival of the past two decades.',
    in_love: 'A relationship in which both directions of love can be held — the divine descent that comes through one partner and the human ascent that rises through the other. Reversed: a relationship where one partner is always playing the upward triangle and the other is always playing the downward; the Merkaba requires both, in both.',
    in_work: 'Healing arts, deep meditation, energy work, ceremonial practice. Anywhere the practitioner is asked to hold the field for both visible and invisible work simultaneously.',
    the_gift: 'The Merkaba is *the body as vehicle*. To activate the field — even imaginatively — is to remember that the body is not the limit of the self; it is the chariot the self travels in. The interlock of up and down is the geometric lock that holds both directions of you in one figure.',
    the_shadow: 'Activation theatre. People who buy a Merkaba pendant and believe they have done the work; the shape on the chest is not the shape *being* the chest. The Merkaba is supposed to be embodied, not worn.',
    pair_with_chakra: 'Heart — the literal centre of the figure, the place where the two tetrahedrons interlock.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair when releasing what does not belong to your light vehicle.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'sagittarius',
    key_questions: [
      'What is my upward tetrahedron — the part of me reaching toward something larger?',
      'What is my downward tetrahedron — the part of me grounded into the body and the earth?',
      'Where do they interlock, and what becomes possible at that interlock that neither can do alone?'
    ]
  },
  {
    slug: 'vesica-piscis',
    name: 'Vesica Piscis',
    glyph: '⊙',
    family: 'circles',
    position: 5,
    one_liner: 'Two circles overlapping perfectly through each other\'s centre. The almond-shaped opening at the meeting is called the *vesica* — the womb of creation, the doorway between worlds.',
    meaning: 'Vesica Piscis is Latin for *bladder of the fish* — the lens-shaped figure formed when two circles of the same size overlap so that the centre of each circle lies on the perimeter of the other. It is the simplest sacred-geometry figure that involves more than one circle, and from it every other figure in the family can be derived: the Seed of Life (six vesicas around a centre), the Flower of Life (an entire weave of them), the Christian fish symbol (a vesica with two lines extending from the meeting point), the pointed Gothic arch (a vesica turned vertical and built into stone). The mystic reading: the two circles are the two aspects of divinity — masculine and feminine, spirit and matter, inside and outside — and the overlap, the almond-shaped opening, is *where the third thing comes through*. The doorway. The womb. The eye of the needle. Every culture that uses this figure uses it for the same reason: it is the geometric drawing of *meeting*.',
    pattern: 'Two circles of equal radius. The centre of each lies on the perimeter of the other. The overlap is a pointed-oval lens shape (mathematically: an *intersection of two disks*). The proportion of the lens — its height to its width — is the square root of three, one of the foundational ratios in classical architecture.',
    where_found: 'Christian iconography (the Christ in Majesty figures often sit inside a vesica-shaped almond, the *mandorla*). The pre-Christian Pythagorean tradition (the vesica was the foundation of their geometric proofs). Gothic cathedrals (every pointed arch is a vesica). Roman well-covers in Glastonbury, England (the Chalice Well lid is the most famous Vesica Piscis in the West). Egyptian, Sumerian, and Mesoamerican religious art.',
    in_love: 'The whole geometry of romantic love. Two complete circles meeting at the *third thing* — the relationship that is neither yours nor theirs but the thing made by the meeting. Reversed: a relationship where one circle has dissolved its centre and the vesica has become a single misshapen disc.',
    in_work: 'Mediation, design, midwifery (literal: the vesica is the geometric drawing of birth), therapy, art. Anywhere the work is to *hold the doorway* between two parties, two states, or two realms.',
    the_gift: 'The vesica is the geometric proof that *meeting creates*. Two complete things, overlapping, generate a third thing that neither could be alone. The opening is fertile.',
    the_shadow: 'Boundary-loss disguised as meeting. A vesica requires *two* circles. If one circle has collapsed into the other, the geometry is broken — and what looks like deep merger is actually self-erasure.',
    pair_with_chakra: 'Sacral — the body\'s vesica, the literal womb, the place where third things become.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — pair when releasing the parts of yourself that have crossed into someone else\'s circle.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'pisces',
    key_questions: [
      'In which of my relationships is the vesica intact — both circles whole, both centres clear?',
      'Which doorway in my life have I been refusing to walk through?',
      'What third thing is asking to be born from a meeting I have been avoiding?'
    ]
  },
  {
    slug: 'seed-of-life',
    name: 'Seed of Life',
    glyph: '🌱',
    family: 'circles',
    position: 6,
    one_liner: 'Seven interlocking circles — one in the centre, six around it. The first stage of the Flower of Life. The geometric drawing of the seven days of creation.',
    meaning: 'The Seed of Life is the inner heart of the Flower of Life: seven circles, all the same size, with one circle in the centre and six circles arranged hexagonally around it, each touching the centre and its two neighbours. Six is the maximum number of equal circles you can fit around a central one without distortion — the geometry simply works that way — which is one of the small mathematical perfections that mystics have always read as sign rather than coincidence. The Seed is read as the geometric record of Genesis: each of the seven circles is one of the seven days of creation, the seventh being the Sabbath, the rest, the day on which the pattern is whole. The figure is also the seed from which the rest of the Flower of Life grows; if you keep adding circles outward following the same rule, the Seed unfolds into the Egg of Life (eight), the Fruit of Life (thirteen), and finally the full nineteen-circle Flower. So the Seed is *creation in its first compressed form*: every later geometry is already implicit in it.',
    pattern: 'Start with one circle. From any point on its perimeter, draw a second circle of the same size whose centre is on the first circle\'s edge. Continue around: every new circle is centred on a point where the previous circles meet. Six circles fit perfectly around the first. Seven circles total. The figure is hexagonal, perfectly symmetric, and sits inside a larger circle drawn from the outermost intersections.',
    where_found: 'The inner section of every Flower of Life carving and tile — Abydos, the Forbidden City, Italian Renaissance manuscripts. Hebrew Kabbalistic diagrams. Christian iconography (the Seed is sometimes superimposed on the haloes of saints in Eastern Orthodox icons). Modern sacred-geometry pendants and crystal grids.',
    in_love: 'The relationship still in its early stage — the centre circle (you and them) and the six circles around (the things you build together: home, friends, intimacy, work, family, future). When all seven are healthy, the geometry holds. Reversed: a relationship where one of the surrounding circles has collapsed and the centre is being asked to compensate.',
    in_work: 'Beginnings. The first ninety days of any project, where the centre idea has to be surrounded by six supporting structures (resources, allies, location, time, energy, vision). Without the surrounding six, the centre cannot germinate.',
    the_gift: 'The Seed is *implicit*. Everything that the Flower will become is already inside the Seed; you do not need to invent it, only to let it unfold. To meditate on the Seed is to remember that the future is inside the present, compressed but complete.',
    the_shadow: 'Premature unfolding. People who try to expand into the Flower before the Seed is whole — building outward when the centre circle is still hollow.',
    pair_with_chakra: 'Sacral — the seat of creativity, the body\'s seed-bed.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance — pair when planting; the Seed is the geometry of starting.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'taurus',
    key_questions: [
      'What seed am I currently planting that I have not yet named?',
      'Which of the six surrounding circles in my life is missing right now?',
      'Where am I trying to skip from the Seed to the Flower without letting the unfolding happen?'
    ]
  },
  {
    slug: 'fruit-of-life',
    name: 'Fruit of Life',
    glyph: '🍇',
    family: 'circles',
    position: 7,
    one_liner: 'Thirteen circles drawn from the Flower of Life — the harvest stage, the figure from which Metatron\'s Cube and all five Platonic Solids can be derived.',
    meaning: 'If you take the Flower of Life and remove all the circles except thirteen — the central circle, the six in the first ring, and the six in the second ring positioned at the points of a six-pointed star — you have the Fruit of Life. It is the *harvest* of the geometry: the figure from which Metatron\'s Cube is built (by drawing a line from each circle to every other), and inside Metatron\'s Cube the five Platonic Solids appear. So the Fruit of Life is the bridge from the two-dimensional family of overlapping circles to the three-dimensional family of solids that make physical reality. It is also the geometric expression of completion: the thirteen circles correspond, in many esoteric systems, to the twelve disciples around Christ, the twelve tribes around the central tabernacle, the twelve signs around the sun, the twelve months around the year, and other patterns of *twelve plus one*. The thirteenth — the centre — is what unifies the twelve.',
    pattern: 'Thirteen circles, all the same size. One central circle, six surrounding it (the inner ring of the Flower of Life), and six more positioned outward at the points where the second ring of the Flower would extend — but only six of them, not the full twelve. The arrangement looks like a six-pointed star made of circles, with the seventh circle in the centre, and the six outermost circles each in a position that completes the figure\'s sixfold symmetry.',
    where_found: 'Drunvalo Melchizedek\'s Flower of Life teachings (popularised the figure in the Western New Age tradition). Esoteric Christian iconography (especially around the figure of Christ surrounded by the disciples). Modern crystal grid layouts. Sacred-geometry tattoo art.',
    in_love: 'The relationship at its harvest — when the centre (the bond) has produced twelve fruits (intimacy, trust, growth, conflict resolved, history, future, family, friendship, sex, money handled, loss faced, joy claimed). When all twelve are present, the bond is whole. Reversed: a partnership where the centre is full but the twelve fruits have not yet ripened, or have ripened in only some sectors.',
    in_work: 'Mastery stage. The point in any craft where the original seed has produced the full constellation of skills, relationships, and outputs. The Fruit is the geometric drawing of *integration*.',
    the_gift: 'The figure is *completion that is also generative*. The Fruit is harvest — and yet from it Metatron\'s Cube is drawn, and from that Cube the building blocks of the next world. So the Fruit is not the end; it is the seed of the next form.',
    the_shadow: 'Premature harvest. The person who declares themselves complete before the twelve circles are all whole. The Fruit only forms after the Flower has fully unfolded.',
    pair_with_chakra: 'Solar plexus — the centre of mature integration, the will that holds the twelve directions.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance — pair at harvest; the Fruit is the geometry of having.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'virgo',
    key_questions: [
      'Of the twelve fruits in my life, which are ripe, which are still growing, and which have not yet appeared?',
      'What is my central thirteenth — the unifying centre that holds the twelve?',
      'Now that I am at this harvest, what is the next seed it is asking me to plant?'
    ]
  },
  {
    slug: 'platonic-solids',
    name: 'Platonic Solids',
    glyph: '🔻',
    family: 'cosmic',
    position: 8,
    one_liner: 'The only five three-dimensional shapes whose every face is identical and every edge meets at the same angle. Plato called them the building blocks of the elements; modern geometry calls them the only ones possible.',
    meaning: 'There are exactly five Platonic Solids — no more, no fewer, ever. The tetrahedron (four triangular faces), the cube (six square faces), the octahedron (eight triangular faces), the dodecahedron (twelve pentagonal faces), and the icosahedron (twenty triangular faces). They are the only convex polyhedra whose faces are all the same regular polygon and whose vertices all meet at the same angle. This is not a mystical claim; it is a mathematical proof. Plato, in *Timaeus*, assigned each solid to one of the five elements: tetrahedron = fire (its sharp points), cube = earth (its stability), octahedron = air (its lightness), icosahedron = water (its near-roundness), dodecahedron = ether or the heavens (its near-spherical perfection, its association with the twelve constellations). Modern crystallography and chemistry both confirm Plato\'s instinct: most fundamental atomic structures, the lattices of crystals, the geometry of viruses, the symmetry of DNA — all of them resolve into Platonic-Solid shapes. The five solids are the building blocks reality actually uses.',
    pattern: 'The tetrahedron has 4 vertices, 6 edges, 4 faces. The cube has 8 vertices, 12 edges, 6 faces. The octahedron has 6 vertices, 12 edges, 8 faces. The dodecahedron has 20 vertices, 30 edges, 12 faces. The icosahedron has 12 vertices, 30 edges, 20 faces. Every vertex of every solid is identical to every other vertex on that solid (vertex-transitive), every edge to every other edge, every face to every other face. They are, geometrically, the most symmetrical 3D shapes that can exist.',
    where_found: 'Plato\'s *Timaeus* (4th century BCE). Kepler\'s *Mysterium Cosmographicum* (the astronomer used the solids to model planetary distances). Buckminster Fuller\'s geodesic domes (use icosahedral symmetry). Modern molecular biology (many viruses are icosahedral). Crystal grid layouts. Sacred-geometry pendants and ritual objects.',
    in_love: 'A relationship that learns to embody each element in turn — fire (passion, the tetrahedron), earth (commitment, the cube), air (communication, the octahedron), water (intimacy, the icosahedron), ether (the shared meaning, the dodecahedron). Reversed: a relationship stuck in one solid; over time, the missing elements ask to be admitted.',
    in_work: 'Architecture, structural engineering, chemistry, sculpture, design. Any craft where the question is *which shape carries the load best* leads to a Platonic-Solid answer. They are the answer reality keeps reaching for.',
    the_gift: 'The five solids are *the limit of possibility*. There are five and only ever five. The constraint is not poverty; it is grace — reality is a finite number of forms, and learning the five is learning the alphabet of structure.',
    the_shadow: 'Element-mismatching. People who try to cube an icosahedral problem; people who try to bring fire (tetrahedron) to a situation that needs water. The solids each have their place, and confusion of element is the most common shadow.',
    pair_with_chakra: 'Root — the body\'s base-element, the foundation each solid is asking the body to learn.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing — pair when re-grounding into the body\'s elemental structure.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'capricorn',
    key_questions: [
      'Which of the five elements (fire, earth, air, water, ether) is currently strongest in my life?',
      'Which is missing, and what would it cost to admit it?',
      'Which solid am I trying to use for a job another solid is built for?'
    ]
  },
  {
    slug: 'torus',
    name: 'Torus',
    glyph: '🍩',
    family: 'cosmic',
    position: 9,
    one_liner: 'A doughnut-shaped energy field that flows in through one pole, out through the other, and around the body — the geometry mystics use to describe the human aura, the heart\'s electromagnetic field, and the shape of the universe.',
    meaning: 'A torus is the surface of revolution generated by rotating a circle around an axis that does not intersect it — the result is a doughnut shape, a ring with a hole. In sacred geometry, the torus is treated as the *fundamental flow pattern of energy*: energy enters at one pole (say, the top), flows down through the central axis, exits at the other pole (the bottom), curves around the outside, and returns to the entry pole. Continuous, self-sustaining, self-referencing. The torus is the geometry that mystics use to describe the human aura, the electromagnetic field of the heart (which has been measurably shown to extend several feet around the body in the toroidal pattern), the magnetic field of the Earth, the shape of a smoke ring, and — in some cosmological models — the shape of the universe itself. It is the *self-sustaining circulation*: the figure that does not lose its energy outward but recycles it through itself indefinitely.',
    pattern: 'A circle, rotating around an axis that lies in the same plane as the circle but does not pass through it. The path traced by the rotating circle is a torus. The hole in the middle is the central axis; the body of the doughnut is the field. Energy in toroidal flow moves through the central hole, around the outside surface, and back in — a closed, recursive loop.',
    where_found: 'Modern physics (toroidal magnetic confinement in fusion reactors). HeartMath Institute research on the heart\'s electromagnetic field. Buckminster Fuller\'s synergetic geometry. Sacred-geometry teachings of the past forty years (especially Nassim Haramein\'s and the New Age physics tradition). Crystal grids that pattern the torus shape around a central stone.',
    in_love: 'A relationship as a torus: love flows through the central channel between the two of you, circulates around the outside (your shared life with the world), and returns. The relationship that does not deplete itself by leaking outward, because what is given returns. Reversed: relationships where the circulation has broken — love goes out and never comes back, or comes back as something else.',
    in_work: 'Energy management. The work of staying replenished by your own work — instead of the linear depletion of giving outward without recovery, the toroidal pattern of giving and receiving along the same channel.',
    the_gift: 'The torus is *self-sustenance*. To meditate on the torus is to remember that energy is meant to circulate; what leaves you is meant to come back. The gift is in learning to close the loop — to receive on the same channel you give on.',
    the_shadow: 'Linear depletion. People who give in one direction without ever closing the circle — output without intake, broadcast without reception. The torus reminds them the geometry is not a line; it is a loop.',
    pair_with_chakra: 'Heart — the literal toroidal generator of the body, where the field is strongest.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair when re-establishing the inflow that matches your outflow.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'leo',
    key_questions: [
      'On which channel of mine has the loop broken — energy goes out but does not come back?',
      'What kind of intake matches the kind of output I have been giving?',
      'How would my life feel if every act of giving had a built-in mechanism for return?'
    ]
  },
  {
    slug: 'fibonacci-spiral',
    name: 'Fibonacci Spiral',
    glyph: '🐚',
    family: 'flow',
    position: 10,
    one_liner: 'A logarithmic spiral whose growth follows the ratio 1.618… — the golden ratio — the same proportion found in nautilus shells, sunflower seeds, hurricane arms, and the spiral arms of galaxies.',
    meaning: 'The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55… each number the sum of the two before it. As the sequence grows, the ratio between consecutive numbers approaches a single irrational number, 1.618033988…, called the golden ratio (Phi). When you draw a spiral whose every quarter-turn expands by exactly that ratio, you get the *Fibonacci spiral* — the same curve you find in the chambered nautilus shell, the seed-head of a sunflower, the curl of a fern, the spiral of a hurricane, the arms of the Milky Way galaxy, the curve of the cochlea inside your ear. The same ratio appears in the proportions of the Parthenon, in da Vinci\'s drawings, in classical music, in the human body (the ratio between segments of the finger, between forearm and full arm). It is the geometric signature of *organic growth* — the rule that nature applies when it wants something to grow without losing its proportion. Mystics read this as evidence that the universe is ordered by a single signature; mathematicians read it as the eigenvalue of certain growth processes. Both are right.',
    pattern: 'Begin with two adjacent squares of side length 1. Add a square of side length 2 along one edge. Then a square of side length 3, then 5, then 8, then 13 — each square\'s side length is the sum of the two previous. The squares fan out into a quarter-turn spiral. Inscribe a quarter-circle inside each square, connecting them at the corners, and the result is the Fibonacci spiral — the curve that grows by a factor of Phi (1.618…) every quarter-turn.',
    where_found: 'Nature: nautilus shells, snail shells, pinecones, sunflower seed-heads, fern fronds, hurricane arms, galactic spiral arms, the human cochlea, the curve of an unfurling fiddlehead. Art: Parthenon proportions, da Vinci, Botticelli, modern photography composition. Music: the rhythm of certain Bach fugues, the structure of certain Mozart sonatas. Stock-market technical analysis (Elliott Wave theory, with mixed empirical support).',
    in_love: 'A relationship that grows by the same ratio it had at the start — each phase a recognisable expansion of the previous, never abandoning what came before. Reversed: relationships that grow by addition (more activity, more talk, more stuff) rather than by ratio (deepening within the same shape).',
    in_work: 'Craft mastery, art, design, biology, finance. Anywhere the work is to grow without losing proportion. The Fibonacci is the geometric instruction for *expansion that remains itself*.',
    the_gift: 'The Fibonacci is *organic growth*. The spiral does not invent its next phase; it derives it from what came before. To follow the Fibonacci is to grow by adding the previous two stages, not by importing something foreign.',
    the_shadow: 'Forced growth. People who try to leap from 5 to 21 without the 8 and the 13. The Fibonacci insists on every step; the rate is built in, and skipping is not allowed.',
    pair_with_chakra: 'Throat — the centre of expression, where growth has to find its outward voice.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Abundance — pair when claiming a growth phase; Fibonacci is the geometry of the natural expansion.',
    pair_with_sound_slug: 'abundance',
    pair_with_sign: 'gemini',
    key_questions: [
      'What is my current Fibonacci stage — what number am I on, and what was the one before?',
      'Where am I trying to skip to a stage I have not earned through the previous two?',
      'Which phase of my life was actually proportional growth, and which was just addition?'
    ]
  }
]

const GEOMETRY_BY_SLUG: Record<string, GeometryGuide> = Object.fromEntries(GEOMETRIES.map((g) => [g.slug, g]))

export const GEOMETRY_SLUGS = GEOMETRIES.map((g) => g.slug)

export function isGeometrySlug(s: string): boolean {
  return s in GEOMETRY_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: circles-of-life (flower, seed, fruit,
// vesica) = teal; cosmic-3d (metatron, merkaba, platonic, torus) =
// violet; flow-pattern (sri-yantra, fibonacci) = gold.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  circles: { c1: '#5cb0a7', c2: '#1f6f6a', label: 'Circles of life · the unfolding family' },
  cosmic: { c1: '#7c64b8', c2: '#3a2a82', label: '3D / cosmic geometry · the building blocks' },
  flow: { c1: '#d4a64a', c2: '#8a6818', label: 'Flow patterns · the growth signatures' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function geometryPageHTML(slug: string): string {
  const r = GEOMETRY_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=geometry-${slug}`

  const title = `${escapeHtml(r.name)} — Meaning, Pattern &amp; Spiritual Practice · gab44 ✨`
  const description = `What the ${r.name} actually means, the pattern it carries, where it appears in the world, in love, in work, the gift, the shadow, pair-with chakra/sound/zodiac, key questions. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Sacred geometry', item: `${SITE_URL}/gab44/geometry` },
          { '@type': 'ListItem', position: 3, name: r.name, item: `${SITE_URL}/gab44/geometry/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} — meaning, pattern & spiritual practice`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/geometry/${slug}`,
        about: `${r.name} sacred geometry, spiritual meaning, energy practice`
      }
    ]
  })

  const otherGeometriesHtml = GEOMETRIES.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/geometry/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/geometry/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} — meaning, pattern & spiritual practice`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/geometry/${slug}" />
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
  h1 { font-size: 40px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .glyph { font-size: 0.95em; vertical-align: -2px; padding-right: 14px; }
  .fam-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
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
  .signs-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-card p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .ctx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .ctx-grid { grid-template-columns: 1fr; } h1 { font-size: 32px; } }
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
  .other-shapes { margin: 36px 0 22px; }
  .other-shapes h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .shapes-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .shapes-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 10px; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/geometry">all 10 shapes</a>
      <a href="/gab44/symbols">symbols</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Sacred Geometry</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>shape ${r.position} of 10</span>
      <span>${escapeHtml(r.family)}-family</span>
    </div>

    <article class="core-card">
      <span class="label">what the ${escapeHtml(r.name.toLowerCase())} actually is</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">📐</span>the pattern</h2>
    <div class="signs-card">
      <h3>how the geometry is built</h3>
      <p>${escapeHtml(r.pattern)}</p>
    </div>

    <h2><span class="icon">🌍</span>where it appears</h2>
    <div class="panel where">
      <h3>history, art, and where you find it today</h3>
      <p>${escapeHtml(r.where_found)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what this geometry teaches</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the shape becomes wallpaper</h3>
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
        <div class="pair-text">Sign whose energy aligns with this geometry.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after working with this shape</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want a reading that uses *your* geometry?</h2>
      <p>Each chart has its own internal sacred geometry — a shape made by the angles between your planets. A <strong>personal reading</strong> traces that shape and tells you what it is asking you to embody. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my geometry read →</a>
    </section>

    <section class="other-shapes">
      <h3>the other 9 shapes</h3>
      <div class="shapes-grid">
        ${otherGeometriesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/geometry">all 10 shapes</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function geometryIndexHTML(): string {
  const familySections = (['circles', 'cosmic', 'flow'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = GEOMETRIES.filter((g) => g.family === fam).map((g) => {
      return `<a href="/gab44/geometry/${g.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${g.glyph}</span>
          <span class="pos">${g.position}/10</span>
        </div>
        <div class="name">${escapeHtml(g.name)}</div>
        <div class="teaser">${escapeHtml(g.one_liner)}</div>
      </a>`
    }).join('\n        ')
    return `<section class="fam-section">
      <h2 class="fam-h" style="--c1:${accent.c1};--c2:${accent.c2}">${escapeHtml(accent.label)}</h2>
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
<title>Sacred Geometry — 10 Shapes That Mystics Have Pointed At for Millennia · gab44 ✨</title>
<meta name="description" content="The 10 most repeated patterns in sacred geometry: flower of life, metatron's cube, sri yantra, merkaba, vesica piscis, seed of life, fruit of life, platonic solids, torus, fibonacci spiral. Hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/geometry" />
<meta property="og:title" content="Sacred Geometry — 10 Shapes Mystics Have Pointed At · gab44" />
<meta property="og:description" content="From the Flower of Life to the Fibonacci Spiral, every pattern's meaning, history, and practice — hand-written, honest about both the gift and the trap." />
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
  .card .glyph { font-size: 32px; }
  .card .pos { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
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
      <a href="/gab44/symbols">symbols</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>10 patterns of <span class="accent">sacred geometry</span> — and what they actually carry</h1>
    <p class="sub">From the Flower of Life (the master pattern) to the Fibonacci Spiral (nature\'s growth signature). Each shape has a meaning, a history on three continents, a gift, and a shadow you cannot skip. Hand-written, honest about both the wisdom and the wallpaper.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Pulled toward a shape?</strong> Click it below. Every page has the actual *meaning* (what the geometry carries), the *pattern* (how it is built), where it *appears* in the world (history, art, nature), what it means in love and in work, the *gift* it teaches, the *shadow* of mistaking the symbol for the practice, and pair-with cards for chakra, sound, and zodiac.</p>
      <p><strong>The three families.</strong> The ten shapes cluster naturally. <em>Circles-of-life</em> (flower, seed, fruit, vesica) are the unfolding family — each one is a stage of the same generative process. <em>Cosmic 3D</em> (metatron, merkaba, platonic solids, torus) are the building blocks — the geometries from which physical reality is built. <em>Flow patterns</em> (sri yantra, fibonacci spiral) are the growth signatures — the shapes that show how energy moves and how things grow.</p>
      <p><strong>Symbols vs geometry.</strong> A symbol is an emblem — the ankh, the eye, the lotus — meant to be *recognised*. A sacred geometry is a *pattern* — meant to be *built into*. Symbols hang on walls; geometries hold the wall up.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want a reading that uses your chart\'s geometry?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Every chart makes its own pattern from the angles between planets. A $9 reading traces that shape and tells you what it is asking you to embody. <a href="/gab44/reading?ref=geometry-index">Get yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
