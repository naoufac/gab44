// Astrology Houses SEO funnel — /gab44/houses (index) + /gab44/houses/{1..12} (12 pages).
// Targets evergreen high-volume keywords: "first house astrology", "11th house meaning",
// "8th house transformation", "what does the 7th house mean". Each house profile is
// hand-written, distinct content angle from elements/modalities/signs.
// Each house routes to $9 reading via ?ref=house-{n}. Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface HouseProfile {
  num: number
  slug: string             // "1", "2", ..., "12"
  display: string          // "First House"
  ordinal: string          // "1st"
  symbol: string           // emoji
  natural_sign: string     // "Aries"
  natural_ruler: string    // "Mars"
  axis: string             // "Self / Other axis (with 7th)"
  one_liner: string
  themes: string           // big paragraph: what this house governs
  in_chart: string         // what it means when planets are here
  empty_house: string      // what it means when nobody lives there
  shadow: string           // hard side
  practice: string         // working with this house
  key_questions: [string, string, string]
}

export const HOUSES: HouseProfile[] = [
  {
    num: 1, slug: '1', display: 'First House', ordinal: '1st', symbol: '🌅',
    natural_sign: 'Aries', natural_ruler: 'Mars',
    axis: 'Self / Other (with the 7th house)',
    one_liner: 'Identity, body, the way you walk into a room.',
    themes: 'The First House is the sunrise of the chart — the eastern horizon at the moment you were born. It governs identity, self-presentation, the body, the persona, the first impression. Your rising sign sits here. Whatever planets live in this house show up in your face, your gait, your physical energy, the way strangers perceive you in the first thirty seconds. This is not the deepest you (that\'s the rest of the chart); this is the costume your soul put on for this lifetime.',
    in_chart: 'Planets in the First House are turned outward and visible. Sun here: identity is fused with self-expression; you are who you appear to be, and being seen is part of the path. Mars here: directness and physicality; people feel your assertiveness before they hear you speak. Venus here: a magnetic pleasing presence; people often comment on how you look. Mercury here: quick visible intelligence; you talk and think in real time. Saturn here: a serious early life; the body often carries discipline or restriction.',
    empty_house: 'Most houses in any chart have no planets. Don\'t panic — an empty First House just means identity isn\'t the loudest theme of your life. Read the rising sign and its ruler\'s placement to find where the energy actually lives. Many beautiful, embodied people have empty First Houses and a strong rising sign; the ruler\'s house tells you where the persona is grounded.',
    shadow: 'Over-identification with appearance, persona, or the body. Mistaking the costume for the wearer. The First House can become a prison if you forget there\'s a whole chart behind it — eleven other houses, dozens of other facets. Healthy First House work is wearing the persona well while remembering it\'s a tool, not the totality.',
    practice: 'Tend the body. Move it daily, dress it on purpose, pay attention to how it feels walking into rooms. Notice the difference between performing a self and inhabiting one. The First House grows when you stop apologizing for showing up the way you do.',
    key_questions: ['How do I show up before I\'ve said anything?', 'What does my body know that my mind hasn\'t named?', 'What persona am I wearing — and is it still the right one?']
  },
  {
    num: 2, slug: '2', display: 'Second House', ordinal: '2nd', symbol: '💰',
    natural_sign: 'Taurus', natural_ruler: 'Venus',
    axis: 'Personal / Shared resources (with the 8th house)',
    one_liner: 'Money, values, what is yours — what you earn and what you treasure.',
    themes: 'The Second House governs personal resources: money you earn (not money you inherit — that\'s the 8th), possessions, body image, self-worth, and the values you live by. It\'s the house of "what is mine." Your relationship with money — earning it, holding it, spending it, fearing it — lives here. So does your relationship with the body as a kind of ground (and the 5 senses). At a deeper level, the Second House is what you actually value when no one is looking, the things you would defend, the things you would keep if everything else burned.',
    in_chart: 'Planets in the Second House shape money and values directly. Venus here: pleasure-loving relationship with abundance; money flows around things that feel good. Saturn here: lessons around scarcity, discipline, slow durable wealth. Jupiter here: generosity, expansion, sometimes overspending. Pluto here: deep transformations through money — gain, loss, rebuild. Sun here: identity and earning are linked; you tend to be self-employed or build a recognizable financial signature.',
    empty_house: 'An empty Second House doesn\'t mean poverty. It means money and values aren\'t the loudest themes of your life — they get processed through whatever sign rules the house cusp and that ruler\'s placement. Read the ruler to find where your earning life actually lives.',
    shadow: 'Hoarding, miserliness, equating worth with net worth. The opposite shadow: chronic insecurity that never lets the resources land. Both are Second House distortions. Healthy 2nd House work is the steady knowing of what you have and what you\'re for, separate from market fluctuations.',
    practice: 'Track what you actually spend on, not just what you earn. Notice the difference between buying for pleasure and buying for relief. List the five things you would refuse to give up. The Second House grows when worth and net worth get unfused.',
    key_questions: ['What do I value when no one is watching?', 'What is my actual relationship with earning?', 'If I lost everything tangible, what would still be mine?']
  },
  {
    num: 3, slug: '3', display: 'Third House', ordinal: '3rd', symbol: '✉️',
    natural_sign: 'Gemini', natural_ruler: 'Mercury',
    axis: 'Mind / Belief (with the 9th house)',
    one_liner: 'Communication, siblings, short trips, the immediate world around you.',
    themes: 'The Third House governs how you think, talk, write, learn, and move through your immediate environment. Siblings live here; so do neighbors, the daily commute, the early school years, the books you grew up reading, the texts you send all day. It\'s the house of the working mind — quick, curious, networked. Where the 9th House is philosophy and long travel, the 3rd is conversation and the trip to the corner store. The 3rd house is also the house of small repeated acts: the daily walk, the Tuesday call with your brother, the morning newsletter.',
    in_chart: 'Planets in the Third House show up as voice and mind. Mercury here (its natural home): articulate, prolific, possibly a writer or teacher. Mars here: blunt, fast-talking, sometimes verbally combative. Venus here: charming communicator, beautifully written. Saturn here: a careful slow communicator; sometimes a learning challenge in early school turned into a deep slow mastery later. Moon here: emotional intelligence in conversation; you read rooms.',
    empty_house: 'An empty Third House doesn\'t mean you\'re inarticulate. It means the daily mind isn\'t a dominant chart theme. Read the cusp ruler\'s placement to find where your communication life actually lives — it might come through career (10th), partnerships (7th), or creative work (5th).',
    shadow: 'Gossip, scattered attention, the mind as defense against feeling. The 3rd house can become a hall of mirrors — talking about everything, knowing about everything, mastering nothing. Healthy 3rd house work is using the mind as a tool for connection, not as armor against it.',
    practice: 'Read more than you scroll. Write more than you tweet. Have one in-person conversation per day that isn\'t transactional. Call a sibling. Take a different route home. The 3rd house grows when curiosity is fed real food.',
    key_questions: ['How do I actually think — slowly, fast, in pictures, in words?', 'Who are the everyday voices that have shaped me most?', 'What is my mind for, beyond defending the self?']
  },
  {
    num: 4, slug: '4', display: 'Fourth House', ordinal: '4th', symbol: '🏡',
    natural_sign: 'Cancer', natural_ruler: 'Moon',
    axis: 'Roots / Public (with the 10th house)',
    one_liner: 'Home, family, roots, the private inner world.',
    themes: 'The Fourth House is the deepest base of the chart — the IC (Imum Coeli), the midnight point. It governs home, family, ancestry, the mother (or the parent who gave you the felt sense of safety, regardless of gender), the inner emotional foundation, the place you go when no one else is watching. Where the 10th House is your public role, the 4th is the private self that public role is built on top of. The childhood home lives here. The home you make as an adult lives here. The home inside your own chest lives here.',
    in_chart: 'Planets in the Fourth House shape your private emotional life and your relationship with origins. Moon here (its natural home): deep family ties, strong intuition about home and belonging. Saturn here: a heavy or restrictive early home; in adulthood, often the person who builds the most durable emotional foundations. Pluto here: transformative family wounds, sometimes inherited trauma being healed. Sun here: identity is rooted in family or in the home life; you may work from home or build a family business.',
    empty_house: 'An empty Fourth House doesn\'t mean rootless. It means the home theme runs through whatever sign rules the cusp and that ruler\'s placement. Many empty 4ths have stable, settled inner lives that simply don\'t loom large in the chart\'s narrative.',
    shadow: 'Living in the past, defining yourself entirely by family history, refusing to leave the childhood emotional patterns. The opposite shadow: refusing roots, never building a real home, treating belonging as weakness. Healthy 4th House work is honoring where you came from while building where you live now.',
    practice: 'Make your home actually feel like yours. Cook in it. Sleep well in it. Do the family work — not always reconciliation, sometimes boundary, but always honest. Ancestral healing matters here. So does daily small homemaking — folded laundry, fresh sheets, a candle lit at sundown.',
    key_questions: ['What does home actually mean to me?', 'What did I inherit emotionally — and what do I keep, what do I release?', 'Where does my real safety come from?']
  },
  {
    num: 5, slug: '5', display: 'Fifth House', ordinal: '5th', symbol: '🎨',
    natural_sign: 'Leo', natural_ruler: 'Sun',
    axis: 'Self-expression / Service (with the 11th house? — actually no: the 5/11 axis is creativity/community)',
    one_liner: 'Creativity, romance, children, play, the things that delight you.',
    themes: 'The Fifth House is the playground of the chart. It governs self-expression, creativity, romance (the courting, falling-in-love phase — 7th is the partnership), children, sport, performance, gambling, the things you do because they bring you alive. Whatever planets live here show you how you create and how you flirt. The 5th House asks: what makes you want to make? what makes you want to play? The Sun is at home here — this is where the inner kid runs the show on a good day.',
    in_chart: 'Planets in the Fifth House shape creative life and romantic life. Sun here (its natural home): radiant, creative, often performs or leads. Venus here: highly romantic; love comes with art, art comes with love. Mars here: passionate, sometimes impulsive in love; competitive in sport or play. Jupiter here: large appetite for life — many lovers, big creative output, often children. Neptune here: dreamy creative gifts; sometimes romantic illusion that needs careful tending.',
    empty_house: 'An empty Fifth House doesn\'t mean dull. It means creative or romantic themes run through whatever sign rules the cusp and the ruler\'s placement. Plenty of artists have empty 5ths — they create through Mercury, Venus, the 10th, the 12th.',
    shadow: 'Performance for validation, drama for excitement, refusing to mature out of the spotlight. The opposite shadow: numbing the inner kid, taking life too seriously, refusing play. Both are 5th House distortions. Healthy 5th House work is delight that doesn\'t need an audience, creation that doesn\'t need a market.',
    practice: 'Make something that nobody will see. Play a sport you\'re bad at. Date with curiosity instead of agenda. If you have children, watch them play and learn from them. The 5th House grows when joy stops needing to be productive.',
    key_questions: ['What did I love doing as a kid that I stopped doing?', 'What kind of creating brings me alive — and have I done any of it this week?', 'How do I love when love is pure pleasure, not strategy?']
  },
  {
    num: 6, slug: '6', display: 'Sixth House', ordinal: '6th', symbol: '🛠️',
    natural_sign: 'Virgo', natural_ruler: 'Mercury',
    axis: 'Service / Spirit (with the 12th house)',
    one_liner: 'Work, health, daily routine, service, the small things done well.',
    themes: 'The Sixth House governs the daily work — not the career (that\'s the 10th) but the actual texture of your workdays: routines, habits, service, the small disciplines, health, the body as a system to be tended. It\'s the house of the workshop, the kitchen, the gym, the daily walk, the medicine cabinet. The 6th House is where the visions of the higher houses meet the ground of repetition. Mastery lives here. So does burnout. The difference is whether the routine serves the life or the life serves the routine.',
    in_chart: 'Planets in the Sixth House show up as work-style and health-pattern. Mercury here: fastidious, organized, possibly a writer/editor/coder. Saturn here: deep mastery through long discipline; sometimes early health challenges that became the path. Mars here: physically active, sometimes overworking. Virgo Sun in the 6th (a "double 6th") is a true craftsman archetype. Moon here: emotional well-being is tightly linked to routine and food.',
    empty_house: 'An empty Sixth House doesn\'t mean lazy. It means the daily-work theme runs through whatever sign rules the cusp and that ruler\'s placement. The cusp ruler\'s house often shows what kind of daily structure your life actually settles into.',
    shadow: 'Workaholism, perfectionism, equating worth with productivity. The opposite shadow: chaos, missed appointments, the body neglected. Both are 6th House distortions. Healthy 6th House work is daily acts of competent care — for the body, the work, the people you serve.',
    practice: 'Keep a routine that serves the life you actually want. Eat real food at real meals. Notice when discipline becomes punishment, and adjust. Master one small craft to a level higher than necessary. The 6th House grows when you stop apologizing for paying attention to small things.',
    key_questions: ['What does my daily routine actually look like — and is it serving me?', 'How is my health, honestly?', 'What small craft am I tending toward mastery?']
  },
  {
    num: 7, slug: '7', display: 'Seventh House', ordinal: '7th', symbol: '🤝',
    natural_sign: 'Libra', natural_ruler: 'Venus',
    axis: 'Self / Other (with the 1st house)',
    one_liner: 'Partnership, marriage, the close other, the mirror.',
    themes: 'The Seventh House is the western horizon — the sunset, the place where you meet the other. It governs committed partnerships: marriage, business partners, the long-term beloved, the close enemy (yes, the 7th is also "open enemies" in old astrology — anyone you face directly across a table). Whatever planets live here show up in the long-term partner. The 7th is also the part of yourself you tend to project onto others until you grow into it. The shadow you fall in love with at 25 is often your own 7th house planet you haven\'t claimed yet.',
    in_chart: 'Planets in the Seventh House shape partnership patterns. Venus here: harmonious, often-partnered, marriage themes loom large. Mars here: passionate partnerships, sometimes conflictual; the partner is often a very direct or assertive person. Saturn here: serious commitments, often to older or more established partners; sometimes delays around marriage. Sun here: identity is tied up with partnership; you really do come alive in a "we." Moon here: an emotionally dependent or deeply nurturing partnership style.',
    empty_house: 'An empty Seventh House doesn\'t mean single forever. Many long-married people have empty 7ths — the partnership theme runs through whatever sign rules the cusp and that ruler\'s placement. Read the descendant sign for the qualities you tend to seek in a long-term partner.',
    shadow: 'Codependence, losing the self in the other, picking partners who carry your unowned shadow so you don\'t have to. The opposite shadow: serial avoidance of real partnership. Both are 7th House distortions. Healthy 7th House work is the long, honest mirror — taking back your projections, claiming your own qualities, partnering as a whole self with another whole self.',
    practice: 'Look at your last three significant partners and ask: what quality did I see in them that I had not yet claimed in me? Tend the partnership you\'re in like a third living thing — not "you" and "me" but "the relationship." Repair after rupture. The 7th House grows through the long marriage to one\'s own projections.',
    key_questions: ['Who is my mirror right now, and what are they showing me?', 'What do I keep choosing in partners — and what is that pattern asking me to claim?', 'What does mature partnership actually look like for me?']
  },
  {
    num: 8, slug: '8', display: 'Eighth House', ordinal: '8th', symbol: '🦂',
    natural_sign: 'Scorpio', natural_ruler: 'Pluto (modern) / Mars (traditional)',
    axis: 'Personal / Shared resources (with the 2nd house)',
    one_liner: 'Death, transformation, sex, shared resources, the deep psyche.',
    themes: 'The Eighth House is the most intense house in the zodiac. It governs death (literal and symbolic), transformation, sex (the merging, not the flirting), shared resources (inheritances, joint bank accounts, taxes, debt), other people\'s money, the occult, the psyche\'s depths. It\'s the house of the rebirth that follows the ego death. Where the 2nd House is what you earn, the 8th is what you receive from others — by inheritance, by partnership, by trauma, by initiation. The 8th is rarely shallow. When it shows up, the territory is real.',
    in_chart: 'Planets in the Eighth House show up as deep psychological themes. Pluto here (its natural home): profound transformation through crisis; the shaman archetype. Sun here: identity is forged through deep experiences — bereavement, sexual awakening, financial collapse and rebirth. Venus here: intense intimate relationships, shared finances are a major theme. Saturn here: a complicated relationship with shared resources; often debt or inheritance issues that mature into deep money mastery later.',
    empty_house: 'An empty Eighth House doesn\'t mean shallow life. Many people have empty 8ths and still go through major transformations; the transformation theme just runs through whatever sign rules the cusp and that ruler\'s placement. The 8th is heavy when occupied; lightness here is also a gift.',
    shadow: 'Power struggles, control issues, manipulation, refusal to grieve, holding onto the dead. The opposite shadow: chronic crisis-seeking, drama as identity. Both are 8th House distortions. Healthy 8th House work is the willingness to die before you die — to let the small self dissolve again and again into something larger.',
    practice: 'Grieve fully when grief comes. Tend shared resources honestly — taxes paid, debts named, inheritance discussed before the deathbed. Sex as communion, not transaction. Therapy. Shadow work. Pluto-house people: the work is to use power in service of life, not control.',
    key_questions: ['What is dying in me right now, and am I letting it go?', 'How do I hold shared resources — money, secrets, inheritance — honestly?', 'What in me is being initiated into something deeper?']
  },
  {
    num: 9, slug: '9', display: 'Ninth House', ordinal: '9th', symbol: '🌍',
    natural_sign: 'Sagittarius', natural_ruler: 'Jupiter',
    axis: 'Mind / Belief (with the 3rd house)',
    one_liner: 'Higher learning, philosophy, long travel, the meaning frame.',
    themes: 'The Ninth House is the upward-reaching mind. Where the 3rd House is communication and the immediate environment, the 9th is philosophy, religion, higher education, long-distance travel, foreign cultures, publishing, law, the search for meaning. It governs the worldview you build — the lens through which everything else gets interpreted. People with strong 9ths often live abroad, study formally well into adulthood, write books, teach, become spiritual seekers. The 9th asks: what is your story about what life is for?',
    in_chart: 'Planets in the Ninth House show up as belief-life and travel. Jupiter here (its natural home): expansive, optimistic, philosophical; often foreign travel or academic life. Sun here: identity built through worldview, teaching, or living abroad. Mercury here: a publishing-and-teaching mind. Mars here: passionate beliefs, sometimes dogmatic; activist or evangelist energy. Saturn here: serious academic discipline, often a slow-built expertise in one specific belief system or culture.',
    empty_house: 'An empty Ninth House doesn\'t mean meaningless life. The belief-life runs through whatever sign rules the cusp and that ruler\'s placement. Many deeply spiritual people have empty 9ths — the meaning-making just lives elsewhere in the chart.',
    shadow: 'Dogmatism, the tourist who sees only their own reflection, the philosopher who never lives the philosophy. The opposite shadow: cynicism, the refusal to commit to any meaning frame at all. Both are 9th House distortions. Healthy 9th House work is the long apprenticeship to a worldview that is both committed-to and held-loosely.',
    practice: 'Travel slowly, when you travel — long enough to be changed. Study something formally. Read across traditions. Notice your meaning frame: where did it come from, and does it still serve? The 9th House grows when belief deepens through tested experience.',
    key_questions: ['What is my actual worldview — where did I get it, and is it still mine?', 'What place changed me?', 'What am I being asked to teach, even now, even small?']
  },
  {
    num: 10, slug: '10', display: 'Tenth House', ordinal: '10th', symbol: '🏛️',
    natural_sign: 'Capricorn', natural_ruler: 'Saturn',
    axis: 'Roots / Public (with the 4th house)',
    one_liner: 'Career, public life, reputation, the role you play in the world.',
    themes: 'The Tenth House is the top of the chart — the Midheaven (MC), the high noon point. It governs career (vocation, not just job), public reputation, social standing, authority, the father (or whichever parent represented authority and the world), the legacy you build. Where the 4th House is your private base, the 10th is what you build on top of that base for everyone to see. People with strong 10ths often have visible roles: leaders, public figures, recognizable names in their field. The 10th asks: what are you building, and what will be remembered?',
    in_chart: 'Planets in the Tenth House show up publicly. Saturn here (its natural home): slow built durable career; often achieves significant authority later in life. Sun here: identity tightly linked with career; a public figure energy. Mars here: ambitious, driven, sometimes confrontational with authority. Pluto here: transformative public power; often goes through complete career rebirths. Moon here: a publicly nurturing role — teacher, healer, mother in the public sense.',
    empty_house: 'An empty Tenth House doesn\'t mean obscurity. The career-and-public theme runs through whatever sign rules the cusp and the ruler\'s placement. Many famous people have empty 10ths — the public role lives in another house, often the 5th (creative spotlight) or 11th (community-driven).',
    shadow: 'Workaholism, status-chasing, identifying entirely with the role. The opposite shadow: career avoidance, refusing visibility, hiding from authority. Both are 10th House distortions. Healthy 10th House work is the long building of a public role that is congruent with the inner truth — the visible self matches the invisible one.',
    practice: 'Notice the role you actually play in the world right now. Name your real ambition out loud — to yourself, then to one other person. Mentor someone younger. Tend your reputation honestly (truth told, debts paid). The 10th House grows in the long apprenticeship to a vocation that is more than ego.',
    key_questions: ['What am I actually building with this lifetime?', 'What role am I playing, and is it congruent with the inner self?', 'What will be left when the title goes?']
  },
  {
    num: 11, slug: '11', display: 'Eleventh House', ordinal: '11th', symbol: '🌐',
    natural_sign: 'Aquarius', natural_ruler: 'Uranus (modern) / Saturn (traditional)',
    axis: 'Self-expression / Community (with the 5th house)',
    one_liner: 'Friends, community, hopes, the future, the collective.',
    themes: 'The Eleventh House governs the network of chosen relationships — friends, allies, communities, groups, organizations, the collective you align with. It\'s the house of hopes, wishes, and the long-term goals you\'re moving toward. Where the 5th House is the personal creative spark, the 11th is what happens when that spark joins with others — collaborations, movements, scenes, the collective dreaming. The 11th is also the house of the future — the version of yourself you\'re becoming, and the world you\'re hoping into being.',
    in_chart: 'Planets in the Eleventh House shape friendships and movements. Uranus here (its natural home): unconventional friendships, often involved in progressive movements or new ideas. Jupiter here: large generous network of friends, often the connector. Sun here: identity is woven through community; you come alive in groups. Saturn here: a small, deeply committed friend circle; sometimes loneliness early that becomes durable lifelong bonds later. Pluto here: transformative friendships; the friends often go through deep changes alongside you.',
    empty_house: 'An empty Eleventh House doesn\'t mean friendless. The friendship-and-community theme runs through whatever sign rules the cusp and the ruler\'s placement. Many people with empty 11ths have rich social lives — the social energy just lives elsewhere in the chart.',
    shadow: 'Group-think, losing the self in the scene, choosing the popular over the true. The opposite shadow: misanthropy, isolation, refusing community altogether. Both are 11th House distortions. Healthy 11th House work is belonging without dissolving — finding your people without losing yourself.',
    practice: 'Tend the friendships you have. Cancel the obligations that aren\'t real friendships. Join one group that aligns with the future you\'re hoping into being. Name the world you want, out loud, to people who can help you build it. The 11th House grows when the personal becomes collective without losing its specificity.',
    key_questions: ['Who are my actual people, and am I tending them?', 'What is the future I\'m moving toward — for myself and for the collective?', 'What movement, group, or scene wants me to show up more fully?']
  },
  {
    num: 12, slug: '12', display: 'Twelfth House', ordinal: '12th', symbol: '🌌',
    natural_sign: 'Pisces', natural_ruler: 'Neptune (modern) / Jupiter (traditional)',
    axis: 'Service / Spirit (with the 6th house)',
    one_liner: 'The unconscious, the hidden, the spiritual, the place you go alone.',
    themes: 'The Twelfth House is the last house, the dissolving back into the larger ocean before the next cycle begins. It governs the unconscious, dreams, the spiritual life, retreats and hospitals and prisons (places of withdrawal from the world), service to something larger than the self, hidden enemies (including your own self-undoing patterns), and the karmic inheritance you walked in with. Where the 6th House is the daily small disciplines, the 12th is the cosmic unstructured — meditation, contemplation, the long sleep, the hidden room of the soul.',
    in_chart: 'Planets in the Twelfth House are turned inward. Neptune here (its natural home): mystical, dreamy, deeply intuitive; often a creative or spiritual gift. Sun here: a quieter persona, often a solo path; identity is found through inner work or service rather than outward achievement. Saturn here: lessons through solitude; often mature spiritual gifts that take decades to surface. Moon here: deep emotional life that runs underground; needs solitude to process. Pluto here: profound hidden transformations; sometimes ancestral/karmic themes.',
    empty_house: 'An empty Twelfth House doesn\'t mean spiritually shallow. The hidden-life theme runs through whatever sign rules the cusp and the ruler\'s placement. Many deeply spiritual people have empty 12ths — the inner life lives in the 4th, the 9th, or wherever the chart\'s mysticism actually anchors.',
    shadow: 'Self-undoing, hiding in addiction or escape, drowning in the collective unconscious without coming back, martyrdom in service. The opposite shadow: refusal to go inward at all, treating the unconscious as nonsense. Both are 12th House distortions. Healthy 12th House work is the deliberate inward journey — therapy, contemplative practice, long quiet — and the ability to come back with what was found.',
    practice: 'Sleep enough. Dream-journal. Spend time alone, on purpose. Service work that isn\'t about being seen. Therapy. Meditation. Notice the patterns of self-undoing — they tend to live in the 12th, often invisible until you look. The 12th House grows in the long apprenticeship to the soul.',
    key_questions: ['What is my hidden life, and how am I tending it?', 'What in me undoes me — and can I see it without judgment?', 'What is asking me to dissolve so something larger can move through?']
  }
]

const HOUSES_BY_SLUG: Record<string, HouseProfile> = Object.fromEntries(HOUSES.map((h) => [h.slug, h]))
export const HOUSE_SLUGS = HOUSES.map((h) => h.slug)

export function isHouseSlug(s: string): boolean {
  return s in HOUSES_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Each house gets an accent gradient that loosely tracks its natural sign's element.
// 1/Aries-fire, 2/Taurus-earth, 3/Gemini-air, 4/Cancer-water, etc.
const HOUSE_ACCENT: Record<number, { c1: string; c2: string }> = {
  1: { c1: '#ff8a4d', c2: '#c93a22' },     // fire
  2: { c1: '#a98c4f', c2: '#5e6f3a' },     // earth
  3: { c1: '#7ec8e8', c2: '#4a87b9' },     // air
  4: { c1: '#6f86d6', c2: '#48499c' },     // water
  5: { c1: '#ff8a4d', c2: '#c93a22' },     // fire
  6: { c1: '#a98c4f', c2: '#5e6f3a' },     // earth
  7: { c1: '#7ec8e8', c2: '#4a87b9' },     // air
  8: { c1: '#6f86d6', c2: '#48499c' },     // water
  9: { c1: '#ff8a4d', c2: '#c93a22' },     // fire
  10: { c1: '#a98c4f', c2: '#5e6f3a' },    // earth
  11: { c1: '#7ec8e8', c2: '#4a87b9' },    // air
  12: { c1: '#6f86d6', c2: '#48499c' }     // water
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function housePageHTML(slug: string): string {
  const house = HOUSES_BY_SLUG[slug]
  if (!house) return ''
  const accent = HOUSE_ACCENT[house.num]
  const readingHref = `/gab44/reading?ref=house-${slug}`

  const title = `The ${house.display} in Astrology — Themes, Planets, Meaning · gab44 ✨`
  const description = `Deep guide to the ${house.display} (${house.ordinal} house): themes, what planets here mean, empty-house reading, shadow, practice. Natural sign ${house.natural_sign}, ruled by ${house.natural_ruler}. Written warm, written human.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Houses', item: `${SITE_URL}/gab44/houses` },
          { '@type': 'ListItem', position: 3, name: house.display, item: `${SITE_URL}/gab44/houses/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `The ${house.display} in Astrology`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/houses/${slug}`,
        about: `${house.display} astrology — themes, planets, meaning`
      }
    ]
  })

  const otherHousesHtml = HOUSES.map((h) => {
    const cur = h.slug === slug ? ' current' : ''
    return `<a class="house-mini${cur}" href="/gab44/houses/${h.slug}"><span class="num">${h.num}</span><span class="sym">${h.symbol}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/houses/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/houses/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --house-c1:${accent.c1}; --house-c2:${accent.c2};
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
    background: linear-gradient(135deg, var(--house-c1), var(--house-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--house-c1), var(--house-c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 28px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span { background: var(--bg-2); padding: 5px 12px; border-radius: 999px; }
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
    background: linear-gradient(90deg, var(--house-c1), var(--house-c2));
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
    background: linear-gradient(135deg, var(--house-c1) 0%, var(--house-c2) 100%);
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
  .other-houses { margin: 36px 0 22px; }
  .other-houses h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .houses-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; }
  @media (max-width: 600px) { .houses-grid { grid-template-columns: repeat(6, 1fr); } h1 { font-size: 36px; } }
  .house-mini {
    text-align: center; padding: 8px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 2px;
  }
  .house-mini:hover { border-color: var(--accent); color: var(--accent); }
  .house-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .house-mini .num { font-family: 'JetBrains Mono', monospace; font-size: 10px; opacity: 0.7; }
  .house-mini .sym { font-size: 16px; line-height: 1; }
  .related-strip {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .related-strip a { color: var(--accent); text-decoration: none; font-weight: 600; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/houses">all 12 houses</a>
      <a href="/gab44/${house.natural_sign.toLowerCase()}/about">${house.natural_sign} sun-sign</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ astrology · ${house.ordinal} house</div>
    <h1><span class="sym">${house.symbol}</span>The <span class="accent">${escapeHtml(house.display)}</span></h1>
    <p class="sub">${escapeHtml(house.one_liner)}</p>
    <div class="meta-strip">
      <span>house ${house.num}</span>
      <span>natural sign · ${escapeHtml(house.natural_sign)}</span>
      <span>natural ruler · ${escapeHtml(house.natural_ruler)}</span>
      <span>${escapeHtml(house.axis)}</span>
    </div>

    <article class="core-card">
      <span class="label">what this house governs</span>
      <p class="text">${escapeHtml(house.themes)}</p>
    </article>

    <h2><span class="icon">🪐</span>planets in your ${house.ordinal} house</h2>
    <p>${escapeHtml(house.in_chart)}</p>

    <div class="two-col">
      <div class="panel">
        <h3>📭 if your ${house.ordinal} is empty</h3>
        <p>${escapeHtml(house.empty_house)}</p>
      </div>
      <div class="panel">
        <h3>🌑 the shadow</h3>
        <p>${escapeHtml(house.shadow)}</p>
      </div>
    </div>

    <h2><span class="icon">🌱</span>working with the ${house.ordinal} house</h2>
    <p>${escapeHtml(house.practice)}</p>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(house.key_questions[0])}</li>
        <li>${escapeHtml(house.key_questions[1])}</li>
        <li>${escapeHtml(house.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> chart</h2>
      <p>This page is for everyone with a ${house.ordinal} house — which is everyone. A <strong>personal life-path reading</strong> looks at <em>your</em> ${house.ordinal} house specifically: which sign rules it, which planets live there, what stage of life is activating it. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/${house.natural_sign.toLowerCase()}/about">${house.natural_sign} sun-sign profile</a> · <a href="/gab44/${house.natural_sign.toLowerCase()}/moon">${house.natural_sign} moon sign</a> · <a href="/gab44/${house.natural_sign.toLowerCase()}/rising">${house.natural_sign} rising</a> · <a href="/gab44/tarot">tarot major arcana</a> · <a href="/gab44/compatibility">78 compatibility pairs</a>.
    </div>

    <section class="other-houses">
      <h3>All 12 houses</h3>
      <div class="houses-grid">
        ${otherHousesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function housesIndexHTML(): string {
  const cards = HOUSES.map((h) => {
    const accent = HOUSE_ACCENT[h.num]
    return `<a href="/gab44/houses/${h.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="num">${h.ordinal} house</div>
      <div class="sym">${h.symbol}</div>
      <div class="name">${escapeHtml(h.display)}</div>
      <div class="natural">${escapeHtml(h.natural_sign)} · ${escapeHtml(h.natural_ruler)}</div>
      <div class="teaser">${escapeHtml(h.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 12 Houses of Astrology — Meaning, Themes, Planets · gab44 ✨</title>
<meta name="description" content="Deep evergreen guides to all 12 astrological houses: 1st house (self), 2nd (money), 4th (home), 7th (partnership), 8th (transformation), 10th (career), 12th (spirit). Themes, planets, shadow, practice. Written warm, written human." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/houses" />
<meta property="og:title" content="The 12 Houses of Astrology — Meaning Guide" />
<meta property="og:description" content="Twelve evergreen guides to the houses." />
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
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  @media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 460px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 20px 22px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .num { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--fg-muted); margin-bottom: 4px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .sym { font-size: 28px; line-height: 1; margin-bottom: 6px; }
  .card .name { font-size: 17px; font-weight: 700; margin-bottom: 2px; }
  .card .natural { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .teaser { font-size: 13px; color: var(--fg-dim); line-height: 1.5; }
  .reading-strip { background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center; }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--fg-on-accent); }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
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
      <a href="/gab44/tarot">tarot</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 12 <span class="accent">houses</span> of astrology.</h1>
    <p class="sub">Where the signs are <em>how</em> energy moves and the planets are <em>what</em> moves, the houses are <em>where</em> it lands — which area of life is being activated. Identity, money, home, partnership, transformation, career, the unconscious. Twelve hand-written, evergreen guides.</p>
    <div class="intro">
      <p>Every chart has all 12 houses, in the same order, starting from your ascendant (the sign rising at your moment of birth). The differences between charts are which sign rules each house, and which planets — if any — live in each house. A house with no planets isn\'t empty; it\'s just less loud, and gets read through whichever sign is on its cusp and where that sign\'s ruler lives.</p>
      <p>These guides cover what each house governs, what planets there mean, what an empty house signals, the shadow side, and the practical work of growing into the house. Read in order, or jump to the house that\'s asking for attention.</p>
    </div>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want this read for your actual chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading uses your full chart — every house, every planet placement, every sign on every cusp. <a href="/gab44/reading?ref=houses-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
