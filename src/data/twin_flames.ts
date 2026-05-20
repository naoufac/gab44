// Twin Flames SEO funnel — /gab44/twin-flames (index) + /gab44/twin-flames/{slug}
// (8 stages of the twin flame journey: recognition, awakening, testing, crisis,
// runner-chaser, surrender, reunion, mission). Targets one of the highest-volume
// AND highest-emotional-intent search clusters in spiritual relationships:
// "twin flame stages", "twin flame separation pain", "twin flame reunion signs",
// "am I a runner or chaser", "twin flame surrender", "11:11 twin flame", "twin
// flame vs soulmate". These are searches by people in real relationship pain or
// real relationship awe — the highest-converting traffic on the platform.
//
// Each stage guide is ~600-700 words across 8 sections (what this stage is, what
// it feels like, the signs you're in it, the work, the trap, what helps, the
// lesson, pair-with chakra/sound/crystal). Cross-funnels into BOTH revenue lanes —
// every page links to /healing audio (Phase 1A) AND /gab44/reading?ref=twin-{slug}
// ($9 Phase 1D). Stage-tinted gradient (early=warm yellow, middle=fire-orange,
// crisis=deep red, surrender=violet, reunion=rose-gold). Cross-linked from the
// 11:11 and 12:12 angel-number pages (the iconic twin-flame portals). Routes
// registered BEFORE the bare /gab44/:sign daily route to avoid Hono RegExpRouter
// greedy-match. Zero LLM cost — content baked in.

import { SITE_URL } from '@/lib/identity'

export interface TwinFlameStageProfile {
  slug: string
  number: number          // 1..8
  name: string            // "Recognition", "Awakening", "Crisis"
  emoji: string
  one_liner: string
  what_it_is: string
  what_it_feels_like: string
  signs_youre_in_it: [string, string, string, string]
  the_work: string
  the_trap: string
  what_helps: string
  the_lesson: string
  tone: 'warm' | 'fire' | 'crisis' | 'surrender' | 'reunion'  // drives gradient
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_crystal: string
}

export const TWIN_FLAME_STAGES: TwinFlameStageProfile[] = [
  {
    slug: 'recognition',
    number: 1,
    name: 'Recognition',
    emoji: '✨',
    one_liner: 'The yearning before the meeting. The soul knows there is someone — and starts looking.',
    what_it_is: 'Recognition is the stage *before* you meet your twin flame in this lifetime. It is the long, often years-long phase where your soul has begun to remember that there is someone — a counterpart, a mirror, a person whose energy is paired with yours — and a yearning starts to grow that no current relationship can satisfy. People in this stage often describe it as "looking for someone I have never met". You may have intense dreams of a person you cannot see clearly. You may keep finding yourself drawn to certain places, certain music, certain themes, almost as if being prepared. You may feel a low-level loneliness even in good relationships, because none of them are quite *the* one.',
    what_it_feels_like: 'A persistent ache that doesn\'t track to anything specific in your current life. Vivid, repeating dreams of someone you can\'t name. A sense of preparation — like a season of healing, learning, deepening, that has no obvious purpose but feels essential. Synchronicities pick up: 11:11s start showing up everywhere, songs about soulmates won\'t stop following you, certain songs make you cry without knowing why. There\'s often a feeling that you are getting ready for something you can\'t name yet.',
    signs_youre_in_it: [
      'You\'ve started seeing 11:11 (or 222, 333, 1111) constantly — the angel numbers of soul recognition.',
      'You feel a yearning that doesn\'t match anyone currently in your life.',
      'You\'re going through a quiet but intense phase of personal healing — almost like preparation.',
      'You have repeating dreams of a faceless person, or a "presence" you can\'t identify.'
    ],
    the_work: 'The work of recognition is not to find them. It is to become the version of yourself that *can* recognize them when they appear. Twin flames are not soulmates — they are mirrors. Whatever you have not yet healed, the twin flame will reflect back to you with painful precision. So this stage is for healing what you can heal alone: old wounds, old patterns, old self-betrayals. Therapy. Journaling. Meditation. Learning to be alone without being lonely. The recognition stage is, in a sense, the most important stage of the whole journey — because the work you do here is what determines whether the meeting (next stage) breaks you or transforms you.',
    the_trap: 'Trying to force the meeting. Searching dating apps obsessively, looking for "the signs", projecting twin-flame energy onto every intense connection. Many people exit recognition prematurely by deciding the wrong person is their twin and locking in for years of unnecessary pain. Recognition has its own timeline; it cannot be rushed.',
    what_helps: 'Doing your own healing work — *seriously*. Journaling, therapy, meditation, somatic practice. Trusting that the meeting will happen when both of you are ready, and not before. Cultivating a rich, full life that does not depend on the twin showing up.',
    the_lesson: 'You cannot meet someone you are not yet ready to meet. The yearning is the call to become.',
    tone: 'warm',
    pair_with_chakra: 'Heart chakra — the longing that has no current object.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for the old patterns that need to leave first.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rose quartz (heart-opening) or moonstone (preparation, intuition)'
  },
  {
    slug: 'awakening',
    number: 2,
    name: 'Awakening',
    emoji: '🔥',
    one_liner: 'The first meeting. Time stops. Your nervous system says: oh. There you are.',
    what_it_is: 'Awakening is the first meeting in physical form. Most twin-flame literature describes this as a single, unmistakable moment — though it can also be a series of small moments adding up to the same conclusion. The hallmark is recognition that does not match the surface: you may have just met this person, but your body, your gut, your nervous system act as if you have known them for lifetimes. The eyes are usually where it lands. People often report "looking into their twin\'s eyes for the first time" as the moment time stopped, the moment everything reorganized.',
    what_it_feels_like: 'An immediate, almost unsettling sense of familiarity. A body-level recognition that arrives before any words have been exchanged. There is often an instant intensity that bypasses the normal getting-to-know-you phase. Conversations that should be small-talk become deep within minutes. There is a feeling of *coming home* paired with a feeling of *uh oh, this is going to change my life*. Many people describe waking up the next morning feeling fundamentally different, as if their entire internal architecture has been rearranged.',
    signs_youre_in_it: [
      'A meeting (or a series of meetings) where time felt distorted — minutes felt like hours, or hours felt like minutes.',
      'Body-level recognition that bypassed the normal stranger-to-acquaintance progression.',
      'Eye contact that felt almost too intense to hold; both of you keep coming back to it.',
      'A flood of synchronicities in the days right after — songs, signs, repeating numbers, "coincidences".'
    ],
    the_work: 'The work in awakening is to *witness* what is happening without immediately trying to define it or grab at it. Twin flame meetings often happen at inconvenient times — when one or both people are in other relationships, in different cities, in different life-stages. The awakening is not a permission slip to break your life; it is information. Sit with it. Notice it. Don\'t move from it for a while.',
    the_trap: 'Confusing the intensity with destiny in a way that makes you abandon your present life immediately. Many twin-flame stories are wrecked at this stage by impulsive decisions: ending current relationships before integration is real, moving cities to chase the connection, declaring the relationship in dramatic ways before either person is ready. The awakening is real — but it is the *beginning* of something, not the proof that you should reorganize your life within a week.',
    what_helps: 'Slowing down. Letting both nervous systems regulate. Telling almost no one (most people will misinterpret). Continuing your own life and your own healing. Trusting that if this is real, it will hold up to the test of time.',
    the_lesson: 'Recognition is the doorway, not the destination. Walk through slowly.',
    tone: 'fire',
    pair_with_chakra: 'Heart chakra — the home-coming sensation in the chest.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — to integrate the energetic shift the meeting causes.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Rose quartz (heart) or rhodonite (the twin-flame stone)'
  },
  {
    slug: 'testing',
    number: 3,
    name: 'Testing',
    emoji: '⚖️',
    one_liner: 'The shadow shows up. The doubt arrives. Is this real or am I making this up?',
    what_it_is: 'Testing is the stage where the early intensity of awakening is challenged by reality. The honeymoon-glow fades. The other person\'s flaws become visible. Your own insecurities start projecting onto them. You begin to question whether what you felt at the awakening was real, or whether you imagined it, or whether you were just lonely. External tests also arrive: timing problems, geography, other relationships either of you are in, family disapproval, work pressures. Testing is the universe (and your psyche) asking: *is this real enough to survive contact with reality?*',
    what_it_feels_like: 'A push-pull. Some days the connection feels as undeniable as it did at awakening; other days you wonder if you imagined the whole thing. Doubt becomes a frequent visitor. You may notice yourself or your twin pulling back, getting busy, becoming "too tired to talk". The shadow material starts showing up — the things you did not heal in recognition come up *with* this person, sometimes brutally.',
    signs_youre_in_it: [
      'You\'ve started doubting what you felt at the meeting — was that real, or am I in a story?',
      'You\'re seeing your twin\'s flaws clearly for the first time, and some of them mirror yours.',
      'External tests are stacking up: distance, timing, other relationships, life logistics.',
      'You\'re seeing your *own* unhealed material flare up in this person\'s presence.'
    ],
    the_work: 'The work of testing is to keep doing your own healing while the connection is being tested. The temptation is to externalize: "this is the other person\'s fault", "the universe is punishing me", "twin-flame love isn\'t real". The actual work is to look in the mirror — because that\'s what twin flames are. The unhealed thing in you is the unhealed thing flaring up. Heal it. Don\'t blame them for showing it to you.',
    the_trap: 'Either: blowing up the connection prematurely because the testing feels too hard, OR: gripping the connection so tightly that you cease to be a healthy person while clinging to it. Both are flight responses to the test. The test is asking you to stay sovereign while staying open.',
    what_helps: 'Therapy. Inner-child work. Naming your projections out loud, even just to a journal. Telling the truth about what is actually happening in your nervous system without dressing it up.',
    the_lesson: 'Twin flames are mirrors. The flaws you see are the flaws you have not yet faced in yourself.',
    tone: 'fire',
    pair_with_chakra: 'Solar plexus chakra — the seat of doubt and personal sovereignty.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief — for the doubt-spirals testing creates.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Citrine (sovereign sun-fire) or smoky quartz (grounds the doubt)'
  },
  {
    slug: 'crisis',
    number: 4,
    name: 'Crisis',
    emoji: '🌋',
    one_liner: 'The break. The catastrophic argument, the geographic impossibility, the "we can\'t do this anymore". The dark night.',
    what_it_is: 'Crisis is the stage where the testing breaks open into something that feels unsurvivable. There is usually a triggering event — a fight that goes too far, a betrayal, a discovery, a geographic move that feels final, an external relationship that interrupts, a death, an illness. The connection that felt so destined now feels broken in a way that nothing can repair. Many twin-flame journeys spend YEARS in crisis. It is the longest, hardest stage, and the one where most people give up.',
    what_it_feels_like: 'Grief that is bigger than the relationship\'s actual time. Physical symptoms — chest pain, insomnia, loss of appetite, pulled-apart-from-the-self sensations. Repeating intrusive thoughts of the twin. Often: rage. Sometimes: depression that lasts months or years. The body experiences the crisis as a literal wound. People in crisis often describe it as "the most painful thing I have ever survived" — and they mean it.',
    signs_youre_in_it: [
      'A break — a fight, a separation, an unbridgeable rupture — has happened, and you cannot un-feel it.',
      'You\'re experiencing physical symptoms (chest pain, insomnia, body-grief) that match the energetic break.',
      'You\'re cycling through rage, grief, hope, despair, sometimes within a single hour.',
      'You\'re convinced this is the end — but you can\'t actually let go either.'
    ],
    the_work: 'The work of crisis is the most counterintuitive in the journey. It is to stop trying to fix it. The connection has gone underground; nothing you do at the surface will work. The work is to grieve fully, to feel the unsurvivable feelings until they finish, and to start living a real life again — not because you have given up on the connection, but because YOUR life is yours regardless of what happens with the twin.',
    the_trap: 'Trying to fix it from the outside. Sending texts you regret. Reaching out at 3am. Stalking their social media. Lining up a replacement relationship to numb the wound. Making a religion out of the suffering. None of this serves the journey.',
    what_helps: 'Therapy — *real* therapy, with a therapist who understands intense connections. Somatic work for the body-grief. Journaling. Building a real, full life that has nothing to do with the twin. Time. Brutally, time.',
    the_lesson: 'Some breaks are the only doorway through. What looks like an ending is, in this work, almost always the deepest part of the work itself.',
    tone: 'crisis',
    pair_with_chakra: 'Heart chakra — but specifically the broken-open heart, the Rumi-style wound.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for the part of you that knows it must release.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Rhodonite (the heart-healing stone) or obsidian (for the depth of the grief)'
  },
  {
    slug: 'runner-chaser',
    number: 5,
    name: 'Runner & Chaser',
    emoji: '🏃',
    one_liner: 'One pulls away. The other holds on. The most painful, most necessary dynamic in the whole journey.',
    what_it_is: 'The runner-chaser dynamic is the energetic pattern that often emerges after crisis. One twin (the "runner") pulls away — they go silent, they get into another relationship, they move cities, they change their number, they gaslight the connection itself, they say "this isn\'t real". The other twin (the "chaser") cannot stop reaching for them — calls, texts, social-media-stalking, dreaming about them, building their entire inner life around the absent twin. This is one of the most painful and most well-documented patterns in the twin-flame literature, and it serves a purpose: it forces both people to do the work that contact would have prevented.',
    what_it_feels_like: 'For the chaser: a constant, gnawing yearning. Inability to focus on real life because the twin is always running on a back channel of consciousness. Cycling between hope (they\'ll come back) and despair (they\'re really gone). Often: bitterness, especially as time stretches. For the runner: a low-level constant unease. The twin shows up in dreams. The runner often gets into relationships that are not satisfying in a way they\'ve never experienced. The runner is not free; they are also in the dynamic, just on the other side of it.',
    signs_youre_in_it: [
      'You\'re chasing: you cannot stop reaching out, even when the other person has made clear they need space.',
      'You\'re running: you\'ve gotten into a new relationship that doesn\'t feel quite real, while the twin keeps showing up in dreams.',
      'You\'re both: the dynamic flips depending on which one of you is more triggered that month.',
      'External tests have failed to fix it — therapy, time, distance, none of it has dissolved the connection.'
    ],
    the_work: 'The work of this stage is, almost always: *stop chasing*. Not because the connection isn\'t real (it is), but because the chasing is reinforcing the dynamic, not breaking it. The chaser has to learn to come back to themselves so completely that the running becomes irrelevant. This is also the stage where you finally do the deep healing work that recognition was supposed to start — childhood wounds, attachment patterns, all of it. The runner cannot return to a chaser; they can only return to a sovereign person.',
    the_trap: 'Becoming a professional chaser. Building your identity around the longing. Making the twin into a religion. Stalking. Sending escalating messages. Lining up "co-incidences" that are actually you arranging things. None of this serves; all of it delays.',
    what_helps: 'Therapy specifically about your attachment style. No-contact (real, full no-contact, not pretend no-contact with one peek per week). Somatic work to feel the longing without acting on it. Letting yourself live a full life that does not depend on the twin\'s return.',
    the_lesson: 'You cannot make someone come back. You can only become so whole that whether they come back or not is no longer the center of your life.',
    tone: 'crisis',
    pair_with_chakra: 'Sacral chakra — the seat of attachment, longing, addiction.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Letting Go — over and over, until the longing has space to breathe.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Black tourmaline (cuts the cord, protects) or obsidian (depth-work)'
  },
  {
    slug: 'surrender',
    number: 6,
    name: 'Surrender',
    emoji: '🕊️',
    one_liner: 'The chase stops. Not because they came back, but because YOU came back to yourself.',
    what_it_is: 'Surrender is the stage where the chasing finally stops — not because you have given up on the connection (you haven\'t, not really), but because you have realized, at the cell level, that you cannot make this happen. The twin will return or not. You will live your life either way. Surrender is often described as a sudden moment, but in practice it is usually a long slow descent into acceptance, sometimes years long. The marker of surrender is that for the first time in the journey, you can think about your twin without the chest-clench. You can wish them well. You can mean it.',
    what_it_feels_like: 'A strange peace where the chest-pain used to be. The twin still appears in your thoughts, but those thoughts no longer hijack your day. Real life starts to come back — work that matters, friends you\'ve been ignoring, hobbies, body, joy. The synchronicities (11:11s, songs, signs) often *increase* during surrender, but they no longer feel like proof you should chase. They feel like a quiet companion presence. You start to live again, fully, even in the absence.',
    signs_youre_in_it: [
      'You can think about your twin without an immediate chest-clench or tear-flood.',
      'You\'ve genuinely stopped trying to engineer reunion — no checking, no maneuvering, no signs-reading-as-strategy.',
      'You\'re building a real life that you would be glad to live regardless of what happens with the twin.',
      'You can wish them well — and on a good day, you mean it.'
    ],
    the_work: 'The work of surrender is to live. Fully. As if the twin will never return — not because you don\'t love them, but because you owe yourself a real life regardless. This is also the stage where you finish the inner-child work, the attachment work, the all-of-it work. Surrender is the deepest healing of the journey.',
    the_trap: 'Pretend-surrender. Saying you\'ve let go while still secretly checking their social media every day. Real surrender requires real release. Anything less is the chase in disguise.',
    what_helps: 'Building a real life. Friendships. Work. Travel. Body practices — yoga, dance, hiking, anything that returns you to your own embodiment. Spiritual practice. Service. The things that matter when the twin is not the center.',
    the_lesson: 'You came here to be a whole human, not half of a twin-pair. Becoming whole is the work. Reunion, if it comes, is the bonus.',
    tone: 'surrender',
    pair_with_chakra: 'Crown chakra — the surrender of personal will to the larger pattern.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Sleep — for the rest you\'ve been denying yourself.',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Amethyst (the surrender stone) or selenite (clear, releasing)'
  },
  {
    slug: 'reunion',
    number: 7,
    name: 'Reunion',
    emoji: '💞',
    one_liner: 'They come back. Or you find each other again. The thing that felt impossible is suddenly happening.',
    what_it_is: 'Reunion is the stage where the twin returns. The reunion is almost always preceded by surrender — the chasing has stopped, the chaser has done the work, the runner has done their own. Reunion does not look the way it did in awakening; the intensity is different. There is more peace, more quiet, more "of course". The drama of the early stages is gone. What remains is a connection that has been forged through fire and survived.',
    what_it_feels_like: 'Calm where there used to be storm. Recognition without panic. Conversations that pick up as if no time had passed. Often: a sense of "oh, of course". The twin shows up in real life again, sometimes through a mundane channel (a chance meeting, a text out of nowhere) that nonetheless feels right. The chest-clench is gone; what remains is warmth.',
    signs_youre_in_it: [
      'They\'ve actually come back — not just appeared in a dream, but reached out in real life.',
      'When you reconnect, the conversation is calm, present, real — not the old storm.',
      'You can be with them without losing yourself; they can be with you without running.',
      'Both of you have, separately, done the work — and you can feel it in the texture of the connection.'
    ],
    the_work: 'The work of reunion is *not* to fall back into the old dynamic. The patterns that broke the connection the first time are still in muscle memory. The work is to consciously build new patterns: communication that is direct, conflict that is repaired in real time, neither of you slipping into the old runner or chaser dynamic. Reunion that lasts is reunion where both people have integrated their old shadow material.',
    the_trap: 'Treating reunion as the ending. It is not. It is a new beginning, and it requires its own work. Many reunions fall apart because the couple thought the work was done, when it was actually just starting.',
    what_helps: 'Couple\'s therapy (yes, even for twin flames). Direct, honest, repeated conversations about what broke last time. Both people continuing their individual healing.',
    the_lesson: 'Reunion is the prize, but the prize is not the destination. You came together to do something — together — and the doing is the next chapter.',
    tone: 'reunion',
    pair_with_chakra: 'Heart chakra — the heart that has been broken open and is now strong because of it.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Abundance — the wide, daily, sweet abundance of love you fought for.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Rose quartz (the lasting heart) or rhodonite (twin-flame stone)'
  },
  {
    slug: 'mission',
    number: 8,
    name: 'Mission',
    emoji: '🜂',
    one_liner: 'The twin pair, once stable, becomes a vessel. There is something the two of you came to do — together, in the world.',
    what_it_is: 'Mission is the final and least-discussed stage of the twin-flame journey. The traditional twin-flame teaching is that twin flames do not come together for the relationship itself — they come together for what the two of them, paired, are here to do *in the world*. The mission can be raising children, building a creative project, leading a community, doing healing work, creating something that affects many lives. The mission is what makes the whole brutal journey worth it: the twin-pair is a vessel for service. The work of every previous stage was, in a sense, the soul-forge that made the two of them strong enough to carry the mission together.',
    what_it_feels_like: 'A sense of purpose that extends beyond the relationship. The relationship feels less like the *point* and more like the *foundation*. Both of you, together, are doing or making something that affects others. There is a quiet groundedness — the storm of earlier stages is fully gone — and what remains is two people building a life that matters.',
    signs_youre_in_it: [
      'You and your twin, together, are doing or building something that extends outward — children, a project, a body of work, a movement.',
      'The relationship is no longer the obsessive center of your life; it is the stable platform from which the mission is launched.',
      'Both of you continue to grow — separately and together — and the relationship doesn\'t threaten that.',
      'Other people in your orbit can feel the integrity of the pair — your couple-energy is healing for others, not just for you.'
    ],
    the_work: 'The work of mission is to keep doing the work. The relationship at this stage is steady, but maintenance is the practice. Both of you continue to heal individual wounds, to repair small ruptures in real time, to keep your own selves whole as well as the partnership. The mission requires both of you to be alive in your own right.',
    the_trap: 'Resting on the achievement of reunion. Stopping the inner work. Becoming so identified with the partnership that the individual self atrophies. The mission requires two whole humans, not one merged blob.',
    what_helps: 'Continued practice. Continued individual work. Service. Doing the work that called you here, together.',
    the_lesson: 'You did not come for the love story. You came for the love story so you could do the *work* the love story made possible.',
    tone: 'reunion',
    pair_with_chakra: 'Crown chakra — the union of personal love with larger purpose.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Healing — for the long, integrated life you are now living together.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_crystal: 'Selenite (clear, integrated) or clear quartz (amplifies the joint mission)'
  }
]

export const TWIN_FLAME_STAGE_SLUGS = TWIN_FLAME_STAGES.map((t) => t.slug)
const TWIN_FLAME_BY_SLUG: Record<string, TwinFlameStageProfile> = Object.fromEntries(
  TWIN_FLAME_STAGES.map((t) => [t.slug, t])
)

export function isTwinFlameStageSlug(s: string): boolean {
  return s in TWIN_FLAME_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Stage-tone gradient — early stages warm, middle fire, crisis deep red,
// surrender violet, reunion rose-gold.
const TONE_ACCENT: Record<TwinFlameStageProfile['tone'], { c1: string; c2: string }> = {
  warm:      { c1: '#e8b96e', c2: '#b8853a' },
  fire:      { c1: '#e07b4d', c2: '#b8401f' },
  crisis:    { c1: '#a83d4d', c2: '#5a1a26' },
  surrender: { c1: '#9b7fb5', c2: '#5e4577' },
  reunion:   { c1: '#dba2a2', c2: '#a87060' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function twinFlameStagePageHTML(slug: string): string {
  const t = TWIN_FLAME_BY_SLUG[slug]
  if (!t) return ''
  const accent = TONE_ACCENT[t.tone]
  const readingHref = `/gab44/reading?ref=twin-${slug}`

  const title = `Twin Flame ${t.name} (Stage ${t.number} of 8) — Signs, What It Feels Like, The Work · gab44 ✨`
  const description = `Stage ${t.number} of the twin flame journey: ${t.name}. ${t.what_it_is.substring(0, 130)}... Signs you\'re in it, what it feels like, the work, the trap, what helps, the lesson.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Twin Flames', item: `${SITE_URL}/gab44/twin-flames` },
          { '@type': 'ListItem', position: 3, name: `${t.name} (Stage ${t.number})`, item: `${SITE_URL}/gab44/twin-flames/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Twin Flame Stage ${t.number}: ${t.name} — signs, what it feels like, the work, the lesson`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/twin-flames/${slug}`,
        about: `Twin flame ${t.name} stage, twin flame journey, signs of ${t.name}`
      }
    ]
  })

  const otherStagesHtml = TWIN_FLAME_STAGES.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const acc = TONE_ACCENT[q.tone]
    return `<a class="ph-mini${cur}" href="/gab44/twin-flames/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="num">${q.number}</span><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/twin-flames/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/twin-flames/${slug}" />
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
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .stage-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .signs-panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px; margin: 14px 0; border-left: 4px solid var(--c1); }
  .signs-panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .signs-panel ul { margin: 0; padding-left: 18px; }
  .signs-panel li { font-size: 14px; color: var(--fg); margin-bottom: 8px; }
  .signs-panel li:last-child { margin-bottom: 0; }
  .work-trap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0; }
  @media (max-width: 600px) { .work-trap-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; }
  .panel.work { border-left: 4px solid #2e9e6a; }
  .panel.trap { border-left: 4px solid #d63d4d; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.6; }
  .helps-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 14px 0; border-left: 4px solid #5a8ec6; }
  .helps-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .helps-card p { font-size: 14px; color: var(--fg); margin: 0; }
  .lesson-card { background: linear-gradient(135deg, var(--c1)10, var(--c2)10);
    border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px; margin: 14px 0;
    text-align: center; font-style: italic; font-size: 17px; color: var(--fg); }
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; font-size: 13px; color: var(--fg-dim); text-decoration: none;
    transition: border-color 0.15s; }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 4px; }
  .pair-card .pair-text { font-size: 12px; color: var(--fg-dim); line-height: 1.5; }
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
  .other-stages { margin: 36px 0 22px; }
  .other-stages h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .stages-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .stages-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini.current { border-color: var(--c1); border-width: 2px; }
  .ph-mini .num { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--fg-muted); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); }
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
      <a href="/gab44/twin-flames">all 8 stages</a>
      <a href="/gab44/angel-numbers/1111">1111 portal</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ twin flames · stage ${t.number} of 8</div>
    <span class="stage-pill">stage ${t.number} · ${escapeHtml(t.tone)}</span>
    <h1><span class="sym">${t.emoji}</span>${escapeHtml(t.name)}</h1>
    <p class="sub">${escapeHtml(t.one_liner)}</p>

    <article class="core-card">
      <span class="label">what ${escapeHtml(t.name)} is</span>
      <p class="text">${escapeHtml(t.what_it_is)}</p>
    </article>

    <h2><span class="icon">💓</span>what it feels like</h2>
    <p>${escapeHtml(t.what_it_feels_like)}</p>

    <div class="signs-panel">
      <h3>signs you\'re in this stage</h3>
      <ul>
        <li>${escapeHtml(t.signs_youre_in_it[0])}</li>
        <li>${escapeHtml(t.signs_youre_in_it[1])}</li>
        <li>${escapeHtml(t.signs_youre_in_it[2])}</li>
        <li>${escapeHtml(t.signs_youre_in_it[3])}</li>
      </ul>
    </div>

    <h2><span class="icon">⚒️</span>the work + the trap</h2>
    <div class="work-trap-grid">
      <div class="panel work">
        <h3>✓ the work</h3>
        <p>${escapeHtml(t.the_work)}</p>
      </div>
      <div class="panel trap">
        <h3>⚠ the trap</h3>
        <p>${escapeHtml(t.the_trap)}</p>
      </div>
    </div>

    <div class="helps-card">
      <h3>what helps</h3>
      <p>${escapeHtml(t.what_helps)}</p>
    </div>

    <div class="lesson-card">
      <strong>The lesson:</strong> ${escapeHtml(t.the_lesson)}
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${t.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(t.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(t.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${t.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(t.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(t.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(t.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(t.pair_with_crystal)}</div>
      </div>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> twin-flame stage</h2>
      <p>This page describes ${escapeHtml(t.name.toLowerCase())} for everyone. A <strong>personal reading</strong> looks at *your* chart, *your* synastry with the connection, and which stage you are actually in (it might be a stage you skipped that\'s asking to be revisited). Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/twin-flames">the full 8-stage journey</a> · <a href="/gab44/angel-numbers/1111">1111 — the twin flame portal</a> · <a href="/gab44/angel-numbers/1212">1212 — ascension &amp; reunion</a> · <a href="/gab44/compatibility">12×12 zodiac compatibility</a>.
    </div>

    <section class="other-stages">
      <h3>The full twin flame journey</h3>
      <div class="stages-grid">
        ${otherStagesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function twinFlamesIndexHTML(): string {
  const cards = TWIN_FLAME_STAGES.map((t) => {
    const accent = TONE_ACCENT[t.tone]
    return `<a href="/gab44/twin-flames/${t.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${t.emoji}</span>
        <span class="day">stage ${t.number} of 8 · ${escapeHtml(t.tone)}</span>
      </div>
      <div class="name">${escapeHtml(t.name)}</div>
      <div class="teaser">${escapeHtml(t.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Twin Flames — All 8 Stages of the Journey, Signs &amp; What Helps · gab44 ✨</title>
<meta name="description" content="The complete twin flame journey: 8 stages — recognition, awakening, testing, crisis, runner &amp; chaser, surrender, reunion, mission. What each stage is, how it feels, the signs, the work, the trap, what helps, the lesson. Written by someone who has lived it." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/twin-flames" />
<meta property="og:title" content="Twin Flames — All 8 Stages of the Journey · gab44" />
<meta property="og:description" content="Recognition, Awakening, Testing, Crisis, Runner &amp; Chaser, Surrender, Reunion, Mission — what each stage feels like and what actually helps." />
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
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 680px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .sym { font-size: 38px; }
  .card .day { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
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
      <a href="/gab44/angel-numbers/1111">1111 portal</a>
      <a href="/gab44/compatibility">12×12 compat</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 8 stages of the <span class="accent">twin flame</span> journey.</h1>
    <p class="sub">Recognition, Awakening, Testing, Crisis, Runner &amp; Chaser, Surrender, Reunion, Mission. The journey is not linear — most people loop through the middle stages many times before they reach surrender. Written warm, written by someone who has lived it.</p>

    <div class="intro">
      <h3>What is a twin flame?</h3>
      <p><strong>A twin flame is not a soulmate.</strong> Soulmates are companions — people who feel like home, who fit you well, who are easy. Twin flames are mirrors — and they are not easy. The traditional teaching is that twin flames are two people whose souls were divided into a pair, and whose paths in this lifetime are intertwined for the purpose of transformation. The connection is intense, irreplaceable, and almost always painful in its earlier stages, because the twin reflects back to you everything in yourself that you have not yet healed.</p>
      <p><strong>Not every intense connection is a twin flame.</strong> One of the most common pitfalls in this work is misnaming a karmic relationship, an obsessive love-bombing connection, or a trauma-bond as a twin flame. The signs of a real twin-flame connection are unmistakable — and the journey, whether it ends in reunion or not, transforms both people.</p>
      <p><strong>The 8 stages below describe the most common arc.</strong> Not everyone passes through every stage in order; many people loop through testing, crisis, and runner-chaser many times. Some people never reach reunion in this lifetime — and that is not failure. The point of the journey is the work itself. A $9 personal reading can name where you actually are and what stage is asking for your attention.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know which stage you\'re really in?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading looks at your chart + your synastry + your season and names the stage you\'re actually in (which is sometimes not the one you think). <a href="/gab44/reading?ref=twin-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
