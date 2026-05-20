// Numerology Life Path SEO funnel — /gab44/numerology (index) + /gab44/numerology/{1..9,11,22,33} (12 pages).
// Targets very-high-volume evergreen keywords: "life path 1", "life path 7", "what does my
// life path number mean", "master number 11 meaning". Distinct keyword cluster from the
// astrology funnel (numerology, not zodiac). Each profile is hand-written, ~600 words across
// 7 sections. Routes warm traffic to $9 reading via ?ref=lifepath-{n}. Zero LLM cost — content
// baked into the bundle.

import { SITE_URL } from '@/lib/identity'

export interface LifePathProfile {
  num: string             // "1".."9", "11", "22", "33"
  slug: string            // same as num
  display: string         // "Life Path 1"
  archetype: string       // "The Pioneer"
  symbol: string
  ruling_planet: string   // numerological tradition links each number to a planet
  element: string         // fire/earth/air/water (used for accent gradient)
  one_liner: string
  essence: string         // big paragraph: the core energy
  gifts: string           // strengths
  shadows: string         // pitfalls
  in_love: string         // partnership
  at_work: string         // career
  spiritual_gift: string  // the offering
  key_questions: [string, string, string]
}

export const LIFE_PATHS: LifePathProfile[] = [
  {
    num: '1', slug: '1', display: 'Life Path 1', archetype: 'The Pioneer', symbol: '🚩',
    ruling_planet: 'Sun', element: 'fire',
    one_liner: 'Independent, original, here to begin what no one else has begun.',
    essence: 'Life Path 1 is the number of beginnings — the first footprint on fresh snow. People with this path arrive in this lifetime to start things, to lead, to bring something into the world that wasn\'t there yesterday. The 1 has a strong, often blunt sense of self; you\'ve been told since childhood that you have "your own way of doing things," and trying to suppress that has cost you energy in every relationship where you tried it. The deepest call of the 1 is original action — not copying, not collaborating to the point of disappearing, but stepping forward and naming what is yours. The shadow side is loneliness, and the gift is that loneliness, sat with, becomes sovereignty.',
    gifts: 'Initiative, courage, originality, the ability to start from zero. 1s are the founders, the first-children, the ones who will go ahead alone if the group won\'t move. Strong willpower, clear inner compass, low tolerance for nonsense. When a 1 commits, things get built — quickly. The capacity to be alone without disintegrating is a 1 superpower most other paths envy.',
    shadows: 'Stubbornness, ego that confuses being right with being whole, isolation that calcifies into bitterness. 1s can become tyrannical when they feel unseen — "I\'ll do it myself" hardening into "I don\'t need anyone." The work is to stay sovereign without becoming brittle.',
    in_love: 'Wants a partner, not a fan. Needs space to breathe, dislikes possessiveness, but is fiercely loyal once committed. Best matched with paths that can hold their own ground (3, 5, 7) and respect autonomy. Struggles with paths that need constant emotional reassurance unless the 1 has done deep heart work.',
    at_work: 'Founder, lead, soloist, first-mover. Thrives running their own thing. Suffocates in rigid hierarchies. The 1 in a corporate ladder usually either becomes the boss or leaves; "middle manager 1" is unhappy 1.',
    spiritual_gift: 'The 1 reminds the rest of us that beginning is sacred. That one person, fully claimed, is enough. That the new can be born again, every morning, out of the willingness to put your foot down on ground no one else has walked.',
    key_questions: ['What am I here to begin that no one else will begin?', 'Where do I confuse self-reliance with self-isolation?', 'What in my life is mine to lead — really mine, not borrowed?']
  },
  {
    num: '2', slug: '2', display: 'Life Path 2', archetype: 'The Diplomat', symbol: '🤝',
    ruling_planet: 'Moon', element: 'water',
    one_liner: 'Sensitive, peace-making, here to bring the others together.',
    essence: 'Life Path 2 is the number of relationship — the bridge, the listener, the one who feels the room before anyone speaks. 2s arrive with thinner skin than most, which is both their gift and their weather. They sense subtle currents, pick up unspoken tensions, and instinctively move toward harmony. The deep call of the 2 is partnership — not co-dependence, but the genuine art of being with another person without losing yourself. 2s often spend the first half of their lives over-merging (becoming what others need) and the second half learning to stand inside the relationship with their own ground intact. When they get it, they become the most peaceful, mature presence in any room.',
    gifts: 'Empathy, intuition, patience, emotional intelligence. 2s read between the lines. They\'re the diplomats who can hear both sides without taking either personally. In groups they\'re the glue. In one-on-one, they\'re the rare person who actually listens. They sense detail others miss — the tone shift, the pulled face, the reason behind the reason.',
    shadows: 'Over-giving, conflict-avoidance, losing the self inside the relationship. 2s can become quietly resentful from saying yes too long. The shadow 2 is the martyr, the one whose generosity has a hook in it. The work is to let the inside-knowing become outside-honesty.',
    in_love: 'Romantic, devoted, wants depth. The danger is dissolving into the partner\'s life. The medicine is keeping a private inner room — friendships, art, a practice — that\'s not shared. Best with paths that respect emotional pace (4, 6, 8 done well).',
    at_work: 'Mediator, counselor, teacher, designer, anyone whose work is reading and serving people. Underestimated in cultures that worship loud. 2s often become the indispensable second-in-command, then quietly burn out unless they ask for credit.',
    spiritual_gift: 'The 2 reminds us that softness is strength, that listening is an act of love, that two well-bonded people can do more than two strong soloists. They are the proof that the bridge matters as much as either shore.',
    key_questions: ['Where am I saying yes when I mean no?', 'Whose feelings am I carrying that aren\'t mine to carry?', 'What does it look like for me to be in relationship without disappearing?']
  },
  {
    num: '3', slug: '3', display: 'Life Path 3', archetype: 'The Communicator', symbol: '🎭',
    ruling_planet: 'Jupiter', element: 'air',
    one_liner: 'Expressive, creative, here to delight the world into remembering itself.',
    essence: 'Life Path 3 is the number of expression — the artist, the writer, the storyteller, the one who lights up a room without trying. 3s carry a buoyant, almost solar quality. They live for connection, conversation, color, and the moment when something funny or beautiful arrives unexpectedly. The deep call of the 3 is creative voice — not "being creative" as a hobby, but actually shaping the world through what they say, write, sing, draw, or perform. The shadow is scattered energy and the lifetime habit of starting many things and finishing few. The work is to let depth catch up with sparkle.',
    gifts: 'Charm, wit, optimism, creative output, the ability to lift a heavy room with a single sentence. 3s are natural performers — even introverted 3s have a private theater inside. They tell good stories, find the humor in pain, and often become the family\'s memory-keeper. When they commit to a craft, the output is prolific.',
    shadows: 'Surface, scatter, dissipation. 3s can become "the fun one" as a way of avoiding harder feelings. The shadow 3 is gossipy, reactive, and unable to sit still long enough to finish what they\'ve started. Substance use is sometimes a 3 trap — anything that keeps the lights bright and the depths quiet. The work is creative discipline.',
    in_love: 'Playful, romantic, expressive. Loves big and loud. Needs a partner who can keep up with the energy and also gently bring them down to earth. Wilts under criticism. Best with paths that celebrate (5, 1) or anchor (4, 6) without crushing.',
    at_work: 'Writer, performer, designer, marketer, teacher, speaker. Anywhere the work is communicating, persuading, or performing. 3s can be magnificent in front of a camera or a classroom. They die a slow death in spreadsheet-only roles.',
    spiritual_gift: 'The 3 reminds the world that joy is a vocation, not a leftover. That telling the truth funny is sometimes the only way the truth can be heard. That play and depth are not opposites.',
    key_questions: ['What is the creative voice I\'ve been afraid to use seriously?', 'Where am I performing instead of expressing?', 'What would change if I finished what I started?']
  },
  {
    num: '4', slug: '4', display: 'Life Path 4', archetype: 'The Builder', symbol: '🧱',
    ruling_planet: 'Saturn', element: 'earth',
    one_liner: 'Steady, practical, here to build what will outlast the builder.',
    essence: 'Life Path 4 is the number of foundation — the carpenter, the engineer, the patient ant carrying the same grain home day after day until the structure is unmistakable. 4s have a deep, often early relationship with discipline; they tend to be the responsible child, the reliable friend, the one who actually did the homework. The deep call of the 4 is building — not just structures, but systems, habits, families, institutions. The shadow is rigidity, the inability to play, the lifetime of duty that quietly hollows out joy. The work is letting flexibility return without losing the spine.',
    gifts: 'Reliability, work ethic, organization, patience, the rare ability to actually finish a long thing. 4s build trust through showing up — in sport, in friendship, in business, in marriage. They are the people you call when something has to actually get done. Stable nervous systems, low drama, deep loyalty.',
    shadows: 'Rigidity, workaholism, fear of change, contempt for "fluffier" paths. The shadow 4 is the person who built a perfect life and forgot to live in it. Difficulty resting. Difficulty admitting needs. The work is play, softness, asking for help.',
    in_love: 'Slow to start, deeply devoted once committed. Wants long-term, hates games, requires reliability in return. Best matched with paths that can handle the slow burn (2, 6, 8) and that bring color and play in (3, 5 in moderation).',
    at_work: 'Engineer, builder, architect, accountant, operations, anywhere the work is "make this real and make it last." Often becomes the unflappable backbone of any team. Suffers in chaotic startups unless the role is clearly to bring order.',
    spiritual_gift: 'The 4 teaches that brick by brick is not boring — it is sacred. That trust is built in the small repeated acts. That a steady person, sustained over decades, becomes its own kind of cathedral.',
    key_questions: ['What am I building, really? Is it still worth building?', 'Where has discipline become punishment?', 'What would happen if I let myself rest without earning it?']
  },
  {
    num: '5', slug: '5', display: 'Life Path 5', archetype: 'The Free Spirit', symbol: '🧭',
    ruling_planet: 'Mercury', element: 'air',
    one_liner: 'Curious, adventurous, here to taste many lives in one lifetime.',
    essence: 'Life Path 5 is the number of freedom and experience — the traveler, the polymath, the one who refuses to be one thing for too long. 5s arrive with restless feet and an appetite for variety: foods, places, languages, ideas, lovers, careers. The deep call of the 5 is direct experience — not learning about life from books but actually putting the body in many rooms. The shadow is scattering so thoroughly that depth never lands and commitment never happens. The work of the 5 is learning to stay long enough to receive what only time gives, while keeping the soul that needs to roam alive.',
    gifts: 'Adaptability, curiosity, charm, fast learning, comfort across cultures and contexts. 5s can walk into any room and find a way to belong. They\'re the friend who has lived in five cities, speaks three languages, and has a story for every continent. Resilience under chaos. Fast intelligence.',
    shadows: 'Restlessness that becomes flight. The shadow 5 ditches the moment things get real — relationships, jobs, projects. Excess in pleasure. Inability to commit. Trading depth for novelty. The work is choosing one room and staying long enough for the room to teach you what only staying teaches.',
    in_love: 'Magnetic, exciting, sometimes a flight risk. Cannot tolerate possessiveness. Needs a partner with their own life. Best with paths that share the love of freedom (1, 3, 7, another 5 — carefully) and that don\'t need constant reassurance.',
    at_work: 'Travel writer, journalist, sales, entrepreneur, freelancer, performer, anything with variety and motion. Suffocates in cubicle work. Often invents their own job because no existing one fits.',
    spiritual_gift: 'The 5 reminds the rest of us that life is meant to be tasted. That changing your mind, your country, your career, is sometimes the most loyal thing you can do to your own becoming. That movement is a form of prayer.',
    key_questions: ['What am I running from — and what am I running toward?', 'Where would staying open something staying-only can open?', 'What is the difference between freedom and avoidance, in my life right now?']
  },
  {
    num: '6', slug: '6', display: 'Life Path 6', archetype: 'The Nurturer', symbol: '🏡',
    ruling_planet: 'Venus', element: 'earth',
    one_liner: 'Caring, responsible, here to hold the people, the home, the heart.',
    essence: 'Life Path 6 is the number of love and responsibility — the parent, the healer, the host, the one whose home is always the warm one. 6s arrive with a mother\'s sense of duty regardless of gender; they\'re the ones who notice who hasn\'t eaten, who is actually unwell behind the polite face, who needs the second invitation. The deep call of the 6 is service through love — not service from depletion, but the mature kind that holds others without disappearing. The shadow is over-responsibility: taking care of everyone except yourself, and slowly becoming bitter. The work is loving from fullness, not from fear of being unloved if you stop giving.',
    gifts: 'Warmth, devotion, caretaking, the ability to make any space feel like home. 6s are the natural healers, the family glue, the friend who shows up with soup. Beautiful aesthetic sense — Venus rules them. Deep loyalty. The kind of person whose love feels like a place you can rest.',
    shadows: 'Over-giving, martyrdom, controlling under the guise of caring, the family scapegoat-or-savior dynamic. The shadow 6 sacrifices themselves and then resents it. Tendency to enmeshment, especially with adult children or partners. The work is the boundary that loves better than the open door.',
    in_love: 'Devoted, romantic, family-oriented, often wants children or chosen-family. Needs a partner who can receive love and also give it back without flinching. Best with paths that don\'t mistake their care for weakness (2, 4, 8) and that are willing to grow with them.',
    at_work: 'Teacher, nurse, therapist, hospitality, family business, social work, design, anything where the work is making people feel seen and held. Risk: burnout. Medicine: paid well, supported, supervised.',
    spiritual_gift: 'The 6 reminds the world that love is not soft work. That holding a family, a community, a home, takes muscle most economies don\'t pay for and most cultures forget to honor. That care is the ground civilization grows on.',
    key_questions: ['Whose load am I carrying that they could carry themselves?', 'Where does my caring need a boundary in order to stay love?', 'What would happen if I let someone take care of me?']
  },
  {
    num: '7', slug: '7', display: 'Life Path 7', archetype: 'The Seeker', symbol: '🔭',
    ruling_planet: 'Neptune', element: 'water',
    one_liner: 'Introspective, mystical, here to look behind the curtain.',
    essence: 'Life Path 7 is the number of the seeker — the philosopher, the mystic, the analyst, the quiet one in the corner who is actually thinking the deepest thought in the room. 7s come in with a built-in sense that the surface of the world is not the whole of it, and they spend their lives investigating — through books, meditation, science, religion, therapy, solitude. The deep call of the 7 is truth, especially the kind that takes years to find. The shadow is over-living in the head, retreating from intimacy, building a beautiful inner cathedral and forgetting how to come home for dinner. The work is integration: bringing the depth back into the body and the relationship.',
    gifts: 'Insight, wisdom, intuition, the rare ability to see patterns others miss. 7s are natural researchers, mystics, healers, scientists, writers. They give the kind of advice that lands years later. Self-sufficient. Comfortable alone. Often the spiritual elder of any group, even when young.',
    shadows: 'Withdrawal, intellectualizing emotion, suspicion of relationship, perfectionism in spiritual practice. The shadow 7 is the person who has read every book and let no person actually in. Cynicism wearing the mask of discernment. The work is letting people see them — undefended.',
    in_love: 'Slow, deep, picky, often celibate stretches. Needs a partner who respects solitude and can match the depth. Disastrous with shallow paths. Best with paths that have their own rich inner world (4, 9, another 7) and don\'t need them to perform extroversion.',
    at_work: 'Researcher, scientist, philosopher, therapist, theologian, novelist, programmer. Anywhere the work is sustained focus on a hard question. 7s in surface jobs become miserable fast.',
    spiritual_gift: 'The 7 reminds the rest of us that there is more underneath than we are usually willing to look at. That solitude is not loneliness, that quiet is not absence, that the person who studies truth long enough becomes a lamp others can read by.',
    key_questions: ['What truth am I in this lifetime to find?', 'Where has the inner cathedral cost me intimacy?', 'What in my life can only be answered by silence and time?']
  },
  {
    num: '8', slug: '8', display: 'Life Path 8', archetype: 'The Power Broker', symbol: '⚖️',
    ruling_planet: 'Saturn', element: 'earth',
    one_liner: 'Ambitious, just, here to learn the right use of power and money.',
    essence: 'Life Path 8 is the number of material mastery — the executive, the entrepreneur, the judge, the one who can move resources at scale. 8s come in with karmic homework around power: how to wield it without abusing it, how to make money without becoming money, how to lose and rebuild. They tend to live large lives — high highs, sharp lows, then the slow climb back up wiser. The deep call of the 8 is integrity at scale: building something big without losing the soul. The shadow is greed, control, mistaking net worth for self-worth. The work is letting the material life serve a larger purpose than the material life itself.',
    gifts: 'Drive, executive intelligence, the ability to see structure in chaos, courage with money, comfort with leadership. 8s build companies, win court cases, run cities. They are the people who can hold a ten-million-dollar decision without the pressure breaking them. Discipline. Strategic patience.',
    shadows: 'Greed, ruthlessness, workaholism that hollows the soul. The shadow 8 confuses winning with worth and ends up rich and empty. Difficulty showing vulnerability. Tendency to view relationships as transactions. The work is generosity that isn\'t performance.',
    in_love: 'Wants a powerful equal, not an admirer. Needs a partner who isn\'t intimidated by their drive and who pulls them back into their humanity when work has eaten the week. Best with paths that have their own gravitas (2 done well, 4, 6, another 8 carefully).',
    at_work: 'Founder, executive, lawyer, finance, real estate, anything where the work is building empire. The 8 can go very high in any field they choose. The risk is forgetting why they started. The reward is the rare 8 who builds wealth and uses it for good.',
    spiritual_gift: 'The 8 reminds the world that money and power are not enemies of spirit — they\'re tools, and tools take training. The 8 who has burned and rebuilt becomes one of the most valuable elders on the planet: someone who has seen the inside of the game and chooses to play it cleanly.',
    key_questions: ['What is my actual relationship with money and power — and what story am I still rewriting about it?', 'Where am I confusing winning with worth?', 'If I had everything I\'m chasing, what would I do tomorrow morning?']
  },
  {
    num: '9', slug: '9', display: 'Life Path 9', archetype: 'The Humanitarian', symbol: '🌍',
    ruling_planet: 'Mars', element: 'fire',
    one_liner: 'Compassionate, idealistic, here to love the whole, not just the inner circle.',
    essence: 'Life Path 9 is the number of completion and universal love — the artist, the activist, the elder, the one whose love includes the stranger. 9s arrive feeling slightly older than their peers; many remember being told as children that they "had old eyes." They carry a wide moral horizon — they want the world fairer, kinder, more beautiful — and a corresponding sensitivity that means injustice physically hurts them. The deep call of the 9 is humanitarian service: love that doesn\'t stop at the family door. The shadow is martyrdom, savior complexes, and the bitterness of caring about a world that won\'t hurry up. The work is letting compassion stay tender without becoming bottomless.',
    gifts: 'Compassion, vision, artistic sensibility, the ability to hold a wide perspective. 9s often become artists, healers, activists, teachers, philanthropists. They give powerful endings — to projects, relationships, life chapters — because they understand completion. They\'re the friend whose love feels almost spiritual.',
    shadows: 'Martyrdom, resentment of those who care less, idealism that refuses the messy real. The shadow 9 carries the weight of the world and lets it become bitterness. Difficulty receiving — used to giving. The work is letting the small life nourish the big mission.',
    in_love: 'Romantic, deep, sometimes lonely because most people don\'t go as wide. Needs a partner who shares the moral horizon. Best with paths that share the depth (2, 6, 7) and that won\'t mock the seriousness.',
    at_work: 'Artist, activist, NGO worker, teacher, philosopher, philanthropist, healer. Often takes a winding career path because they refuse work that contradicts their values. The 9 who finds aligned work becomes a true elder of any field.',
    spiritual_gift: 'The 9 teaches that the heart is not finite — that love can include the stranger, the enemy, the unborn. They are the proof that wide compassion is possible, even now, even in this world.',
    key_questions: ['Whose suffering am I carrying that I cannot actually fix?', 'Where do I need to come back to my small life so the big love stays alive?', 'What is the closing chapter I have not yet been brave enough to close?']
  },
  {
    num: '11', slug: '11', display: 'Life Path 11 (Master)', archetype: 'The Visionary', symbol: '🕯️',
    ruling_planet: 'Uranus', element: 'air',
    one_liner: 'Intuitive, electric, here to channel what hasn\'t been channeled before.',
    essence: 'Life Path 11 is a master number — a high-voltage version of the 2 that didn\'t reduce. 11s arrive wired differently: hyper-intuitive, often empathic to a painful degree, with a sense of mission they can\'t quite articulate at first. Many spend their twenties feeling vaguely off — like they were born for something specific that the world hasn\'t named yet. The deep call of the 11 is to channel: art, ideas, healing, vision that doesn\'t come from ordinary thinking. The shadow is overwhelm — the wiring is sensitive enough that anxiety, addiction, and burnout are real risks. The work is grounding the antenna without dulling it.',
    gifts: 'Intuition, vision, originality, the ability to see what the culture hasn\'t named yet. 11s are often the artists, mystics, scientists, founders who bring something genuinely new. They feel things before they happen. When grounded, their presence is electric in a clean way. They can heal others by simply being in the room.',
    shadows: 'Anxiety, sensory overwhelm, self-doubt, addiction (anything that quiets the antenna). The shadow 11 lives at half-voltage to survive, and slowly resents the world for not making space for the full one. The work is daily nervous-system care, deep work with a teacher or therapist who understands sensitivity, and faith that the gift is worth the cost.',
    in_love: 'Deep, intense, soulmate-pattern. Needs a partner who can hold the bandwidth without trying to fix or dim them. Best with paths that respect mystery (7, 9, another master number, well-developed 4 or 6 for grounding).',
    at_work: 'Artist, healer, founder, mystic, scientist, anything channel-shaped. Suffocates fast in dull work. Better self-employed or in a small mission-aligned team. Often finds the right work in the late twenties or thirties, after a "lost" stretch.',
    spiritual_gift: 'The 11 reminds the world that there are people whose nervous systems are receivers — and that what they receive, received cleanly, is medicine the rest of us cannot make. They are proof that sensitivity is not weakness when it is held well; it is one of the rarest gifts the species has.',
    key_questions: ['What am I receiving that I have been afraid to put down on the page?', 'How do I tend the antenna so the gift doesn\'t blow out?', 'What practice keeps me grounded without dulling the vision?']
  },
  {
    num: '22', slug: '22', display: 'Life Path 22 (Master)', archetype: 'The Master Builder', symbol: '🏛️',
    ruling_planet: 'Saturn / Uranus', element: 'earth',
    one_liner: 'Visionary AND practical, here to build what others only imagine.',
    essence: 'Life Path 22 is the highest of the master numbers — the rare combination of 11\'s vision and 4\'s building muscle. 22s come in with the ability to dream large and execute large. They\'re the people who actually finish the cathedral, the company, the movement, the body of work. The deep call of the 22 is manifest service: take an impossible vision and build it real, at scale, in this lifetime. The shadow is the weight of the gift — many 22s spend years convinced they\'re ordinary because the scale of what they\'re actually here to do is intimidating. The work is consenting to the size of the life.',
    gifts: 'Vision plus discipline, leadership, the rare ability to organize an impossible-looking project from idea to finished structure. 22s found schools, build companies, write the books that change fields, design the city. Patient with long timelines (often 20-year arcs). Strong moral compass.',
    shadows: 'Self-undermining, hiding, settling for "small life" out of fear of the responsibility of the large one. The shadow 22 is the person with the vision, the talent, and the stamina, who stays in the safe job. The other shadow: getting the vision and burning out by trying to hold it alone. The work is showing up for the life-size life and accepting partnership.',
    in_love: 'Wants a partner who can match the scale of the life. Needs a deep collaborator, not an admirer. Best with paths that share gravitas (4, 8, 9, another master number).',
    at_work: 'Founder, architect, large-system designer, head of a movement or institution. Often needs the first half of life to find the scale they\'re actually built for. Once they consent to it, the output is astonishing.',
    spiritual_gift: 'The 22 reminds the world that vision without execution is decoration, and execution without vision is grinding. The rare people who can hold both are how civilizations actually shift. The 22 is the proof that the impossible can be built — slowly, patiently, by hand.',
    key_questions: ['What is the life-size life I have been afraid to consent to?', 'Where am I hiding from the scale of my actual gift?', 'Who is meant to build this with me — and have I asked them?']
  },
  {
    num: '33', slug: '33', display: 'Life Path 33 (Master)', archetype: 'The Master Teacher', symbol: '🌅',
    ruling_planet: 'Sun / Venus / Saturn', element: 'water',
    one_liner: 'Devoted, sacrificial-ish, here to embody love at the level of teaching.',
    essence: 'Life Path 33 is the rarest of the master numbers — extremely uncommon and not lightly claimed. The 33 is sometimes called the "Christ number" or "Master Teacher" — combining the nurturing of the 6 with the master energies of the 11 and 22. 33s come in with an unusually large heart and an unusually heavy assignment: to teach love, often at considerable personal cost. Many 33s have a sacrificial flavor to their lives, but the mature version is not martyr — it\'s love that stays grounded while serving widely. The deep call of the 33 is to be the embodied teaching. The shadow is collapse under the weight, or its opposite: spiritual ego masquerading as service.',
    gifts: 'Vast compassion, healing presence, teaching ability, the rare combination of warmth and wisdom that touches strangers. 33s often become teachers, therapists, healers, religious leaders, parents-of-many. Their presence carries a kind of permission to be human. They give love at scale.',
    shadows: 'Burnout, savior complex, taking on what is not theirs, spiritual ego. The shadow 33 sacrifices physical health for the mission and slowly resents the people they serve. The other shadow: refusing the assignment and going small to avoid the cost. The work is supported service — a real circle, real boundaries, real care for the body that\'s doing the carrying.',
    in_love: 'Romantic, devoted, deep — and at risk of carrying the partner. Needs someone who can hold their own weight and meet the depth. Best with mature paths (8, 9, another master) that won\'t collapse onto the 33\'s strength.',
    at_work: 'Teacher, healer, religious leader, large-scale parent, mentor of mentors. The work scales over decades. Often the first half is preparation (sometimes painful) and the second half is the visible service.',
    spiritual_gift: 'The 33 reminds the world that love can be a vocation, that teaching can be a sacred craft, that the people who carry the most light usually have the heaviest history of carrying. They are the proof that the heart can be trained and that the trained heart is the most useful thing on earth.',
    key_questions: ['What is the love I have been entrusted with — and how am I tending it?', 'Where does my service need a real boundary so the gift can survive?', 'Who teaches the teacher? Where am I being held?']
  }
]

const LIFE_PATHS_BY_SLUG: Record<string, LifePathProfile> = Object.fromEntries(LIFE_PATHS.map((p) => [p.slug, p]))
export const LIFE_PATH_SLUGS = LIFE_PATHS.map((p) => p.slug)

export function isLifePathSlug(s: string): boolean {
  return s in LIFE_PATHS_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Per-element accent gradient (matches sibling pages: rising/moon/about element coding).
const ELEMENT_ACCENT: Record<string, { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function lifePathPageHTML(slug: string): string {
  const p = LIFE_PATHS_BY_SLUG[slug]
  if (!p) return ''
  const accent = ELEMENT_ACCENT[p.element]
  const readingHref = `/gab44/reading?ref=lifepath-${slug}`

  const isMaster = slug === '11' || slug === '22' || slug === '33'
  const titleSuffix = isMaster ? ` (Master Number)` : ''
  const title = `Life Path ${slug}${titleSuffix} — ${p.archetype} · Numerology Meaning · gab44 ✨`
  const description = `Deep guide to Life Path ${slug}: the ${p.archetype}. Essence, gifts, shadows, in love, at work, spiritual gift, key questions. ${isMaster ? 'Master number — high voltage. ' : ''}Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Numerology', item: `${SITE_URL}/gab44/numerology` },
          { '@type': 'ListItem', position: 3, name: p.display, item: `${SITE_URL}/gab44/numerology/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Life Path ${slug} — ${p.archetype}`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/numerology/${slug}`,
        about: `Numerology life path ${slug} — meaning, archetype, gifts, shadows`
      }
    ]
  })

  const otherPathsHtml = LIFE_PATHS.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    return `<a class="path-mini${cur}" href="/gab44/numerology/${q.slug}"><span class="num">${q.num}</span><span class="sym">${q.symbol}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/numerology/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/numerology/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --path-c1:${accent.c1}; --path-c2:${accent.c2};
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
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--path-c1), var(--path-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .num { background: linear-gradient(135deg, var(--path-c1), var(--path-c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .arch { font-size: 20px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span { background: var(--bg-2); padding: 5px 12px; border-radius: 999px; }
  .master-badge { background: linear-gradient(135deg, var(--path-c1), var(--path-c2)) !important;
    color: var(--fg-on-accent) !important; font-weight: 700; }
  h2 {
    font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg);
    letter-spacing: -0.01em;
  }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--path-c1), var(--path-c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .questions { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .questions h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); font-style: italic; }
  .questions li:last-child { margin-bottom: 0; }
  .reading-cta {
    background: linear-gradient(135deg, var(--path-c1) 0%, var(--path-c2) 100%);
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
  .other-paths { margin: 36px 0 22px; }
  .other-paths h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .paths-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; }
  @media (max-width: 600px) { .paths-grid { grid-template-columns: repeat(6, 1fr); } h1 { font-size: 36px; } }
  .path-mini {
    text-align: center; padding: 8px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 2px;
  }
  .path-mini:hover { border-color: var(--accent); color: var(--accent); }
  .path-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .path-mini .num { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; }
  .path-mini .sym { font-size: 14px; line-height: 1; }
  .related-strip {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .related-strip a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .calc-box {
    background: var(--bg-2); border: 1px solid var(--line); border-radius: 12px;
    padding: 16px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .calc-box strong { color: var(--fg); }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/numerology">all 12 paths</a>
      <a href="/gab44/about">sun signs</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ numerology · life path</div>
    <h1><span class="sym">${p.symbol}</span>Life Path <span class="num">${p.num}</span></h1>
    <p class="arch">${escapeHtml(p.archetype)}</p>
    <p class="sub">${escapeHtml(p.one_liner)}</p>
    <div class="meta-strip">
      ${isMaster ? '<span class="master-badge">master number</span>' : ''}
      <span>archetype · ${escapeHtml(p.archetype)}</span>
      <span>ruling planet · ${escapeHtml(p.ruling_planet)}</span>
      <span>element · ${escapeHtml(p.element)}</span>
    </div>

    <article class="core-card">
      <span class="label">the essence</span>
      <p class="text">${escapeHtml(p.essence)}</p>
    </article>

    <h2><span class="icon">✨</span>your gifts</h2>
    <p>${escapeHtml(p.gifts)}</p>

    <h2><span class="icon">🌑</span>your shadows</h2>
    <p>${escapeHtml(p.shadows)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>💞 in love</h3>
        <p>${escapeHtml(p.in_love)}</p>
      </div>
      <div class="panel">
        <h3>💼 at work</h3>
        <p>${escapeHtml(p.at_work)}</p>
      </div>
    </div>

    <h2><span class="icon">🌱</span>your spiritual gift</h2>
    <p>${escapeHtml(p.spiritual_gift)}</p>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(p.key_questions[0])}</li>
        <li>${escapeHtml(p.key_questions[1])}</li>
        <li>${escapeHtml(p.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> life path</h2>
      <p>This page describes Life Path ${p.num}. A <strong>personal reading</strong> looks at <em>your</em> full chart — life path number, sun sign, moon, rising, and the dialogue between them. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/numerology">all 12 life paths</a> · <a href="/gab44/about">12 sun-sign profiles</a> · <a href="/gab44/moon">moon signs</a> · <a href="/gab44/rising">rising signs</a> · <a href="/gab44/houses">12 astrology houses</a>.
    </div>

    <section class="other-paths">
      <h3>All life paths</h3>
      <div class="paths-grid">
        ${otherPathsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function numerologyIndexHTML(): string {
  const cards = LIFE_PATHS.map((p) => {
    const accent = ELEMENT_ACCENT[p.element]
    const isMaster = p.slug === '11' || p.slug === '22' || p.slug === '33'
    return `<a href="/gab44/numerology/${p.slug}" class="card${isMaster ? ' master' : ''}" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="num">${escapeHtml(p.display)}${isMaster ? ' ★' : ''}</div>
      <div class="sym">${p.symbol}</div>
      <div class="name">${escapeHtml(p.archetype)}</div>
      <div class="ruler">${escapeHtml(p.ruling_planet)} · ${escapeHtml(p.element)}</div>
      <div class="teaser">${escapeHtml(p.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Numerology Life Path Numbers — All 12 Meanings (1-9 + Master 11, 22, 33) · gab44 ✨</title>
<meta name="description" content="Deep evergreen guides to all 12 numerology life path numbers: 1 (Pioneer), 2 (Diplomat), 3 (Communicator), 4 (Builder), 5 (Free Spirit), 6 (Nurturer), 7 (Seeker), 8 (Power Broker), 9 (Humanitarian), and master numbers 11, 22, 33. How to calculate yours. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/numerology" />
<meta property="og:title" content="Numerology Life Path Numbers — All 12 Meanings" />
<meta property="og:description" content="Twelve evergreen guides to the life path numbers." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 660px; }
  .calc-box {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .calc-box h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .calc-box p { margin: 0 0 8px; }
  .calc-box p:last-child { margin: 0; }
  .calc-box code { background: var(--bg-2); padding: 2px 8px; border-radius: 6px;
    font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card.master { background: linear-gradient(135deg, #fff 0%, var(--accent-soft) 100%); }
  .card .num { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--fg-muted); margin-bottom: 4px; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; }
  .card.master .num { color: var(--accent); }
  .card .sym { font-size: 28px; line-height: 1; margin-bottom: 6px; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
  .card .ruler { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
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
      <a href="/gab44/about">12 sun-sign profiles</a>
      <a href="/gab44/moon">moon signs</a>
      <a href="/gab44/rising">rising signs</a>
      <a href="/gab44/houses">12 houses</a>
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/angel-numbers">angel numbers</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Numerology — the 12 <span class="accent">life paths</span>.</h1>
    <p class="sub">Where astrology reads the sky at the moment you arrived, numerology reads the math of your birthday — the single number that runs underneath the rest. Nine single digits, three master numbers (11, 22, 33), twelve evergreen guides written warm.</p>

    <div class="calc-box">
      <h3>How to find your life path</h3>
      <p>Add every digit of your full birth date, then reduce until you have a single digit — <strong>unless</strong> you arrive at 11, 22, or 33 along the way. Those stay as master numbers.</p>
      <p>Example: born <strong>1990-04-23</strong> → <code>1+9+9+0+4+2+3 = 28 → 2+8 = 10 → 1+0 = 1</code>. Life Path 1.</p>
      <p>Example: born <strong>1985-07-29</strong> → <code>1+9+8+5+7+2+9 = 41 → 4+1 = 5</code>. Life Path 5.</p>
      <p>Example: born <strong>1979-11-22</strong> → <code>1+9+7+9+1+1+2+2 = 32 → 3+2 = 5</code>. Life Path 5 (no master appeared in the chain).</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want this read for your full chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your life-path number alongside your sun, moon, rising, and houses — the way these numbers and signs talk to each other. <a href="/gab44/reading?ref=numerology-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
