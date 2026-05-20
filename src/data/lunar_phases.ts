// Lunar Phases SEO funnel — /gab44/lunar (index) + /gab44/lunar/{slug} (8 moon
// phase guides: new-moon, waxing-crescent, first-quarter, waxing-gibbous,
// full-moon, waning-gibbous, last-quarter, waning-crescent). Targets some of
// the highest-volume spiritual keyword clusters in all of search: "new moon
// ritual", "full moon spiritual meaning", "what does the full moon mean",
// "new moon manifestation", "waxing crescent meaning", "8 phases of the moon
// spiritual". The moon's monthly cycle is the most universally-felt energetic
// rhythm — distinct keyword cluster from sun-sign astrology.
//
// Each phase guide is ~600-700 words across 8 sections (meaning, what's
// happening in the sky, what it feels like, what to do, what to release, the
// ritual, the lesson, pair-with — chakra/crystal/sound). Cross-funnels into
// BOTH revenue lanes — every page links to /healing audio (Phase 1A) AND to
// /gab44/reading?ref=lunar-{slug} ($9 Phase 1D). Routes BEFORE bare
// /gab44/:sign to avoid Hono greedy-match. Zero LLM cost.

import { SITE_URL } from '@/lib/identity'

export interface LunarPhaseProfile {
  slug: string
  name: string                     // "New Moon", "Full Moon"
  symbol: string                   // 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘
  emoji: string
  position_in_cycle: number        // 1..8 (for ordering, day count)
  day_of_cycle: string             // "Day 0", "Days 7-8", "Days 14-15"
  illumination: string             // "0%", "~25%", "~50%", "~75%", "100%"
  type: 'dark' | 'building' | 'full' | 'releasing'
  type_label: string               // "begin", "build", "peak", "release"
  one_liner: string
  meaning: string                  // big paragraph
  whats_happening: string          // sky / illumination
  what_it_feels_like: string
  what_to_do: string
  what_to_release: string
  ritual: string                   // a simple 5-minute ritual
  the_lesson: string
  pair_with_chakra: string         // chakra slug + reason
  pair_with_chakra_slug: string
  pair_with_sound: string          // healing audio slug + reason
  pair_with_sound_slug: string     // matches /healing/script/{slug} (deep-healing|deep-sleep|anxiety-relief|abundance-affirmations|letting-go)
  pair_with_crystal: string        // stone for this phase
  key_questions: [string, string, string]
}

export const LUNAR_PHASES: LunarPhaseProfile[] = [
  {
    slug: 'new-moon',
    name: 'New Moon',
    symbol: '🌑',
    emoji: '🌑',
    position_in_cycle: 1,
    day_of_cycle: 'Day 0 (start of cycle)',
    illumination: '0% — invisible',
    type: 'dark',
    type_label: 'begin',
    one_liner: 'The dark page. The moment before the next chapter is written.',
    meaning: 'The New Moon is the moment when the moon and sun are aligned in the sky — the moon is invisible from earth, hidden in the sun\'s glare. From a spiritual point of view, this is the most powerful moment of the lunar cycle for setting intentions. The sky is blank. The energy is reset. Whatever you plant now grows over the next ~14 days as the moon waxes, peaks at the Full Moon, then releases over the next 14 as it wanes. Almost every lunar tradition — from Indigenous ceremonies to Tibetan Buddhism to modern witchcraft — treats the New Moon as the start of the cycle, the moment to name what you want and offer it to the dark. The dark is not empty; it\'s fertile. What you write on the blank page is what the moon will help you grow.',
    whats_happening: 'The moon and sun are conjunct (in the same sign at the same degree). From earth, the moon is unlit on its earth-facing side — a black disc against a black sky. New Moons happen once a month, always in the sign the sun is currently in. The New Moon in Aries (~late March) is fiery and starts-things. The New Moon in Pisces (~late February) is dreamy and surrenders.',
    what_it_feels_like: 'A pull toward solitude. Lower energy than usual — your body knows the cycle is restarting and wants to rest. The desire to journal, plan, declutter. A natural quietness. Sometimes melancholy that\'s not a problem to fix — it\'s the dark before the new. Clarity about what you actually want, often arriving as a single sentence.',
    what_to_do: 'Set intentions — write them down by hand, three to seven of them, specific and personal. Keep them somewhere private. Plant something literal (seeds, a kitchen herb) if it suits the season. Take a long bath. Get to bed early. Read your intentions out loud to yourself. Trust the rest — the New Moon\'s job is to plant, not to harvest. Resist the urge to push.',
    what_to_release: 'The pressure to start everything at once. The hangover of last cycle\'s unfinished business — give yourself permission to start fresh. The voices that say "you should already know what you want" — clarity sometimes only arrives after writing.',
    ritual: 'Light one candle. Sit quietly for five minutes. Write seven intentions for the next 28 days, beginning with "I am open to…". Read each out loud once. Fold the paper, put it under a stone or a crystal, and let it sit until the Full Moon. Blow out the candle.',
    the_lesson: 'The New Moon teaches that all real work begins in the dark, in the unseen, in the moment before anyone is watching. The seed must be in the soil before it can break the surface. Intention is not a wish — it\'s a planted seed.',
    pair_with_chakra: 'Root chakra — for grounding the new beginning into the body so the intentions don\'t stay floaty.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go meditation — to release last cycle\'s residue before planting the next.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Black Moonstone or Labradorite — both honour the dark threshold and hold the intentions in trust.',
    key_questions: [
      'What is the one thing I am ready to begin this cycle?',
      'What truth has the dark been showing me that I have been ignoring?',
      'What seven intentions, said out loud, would feel like a real "yes" to the next 28 days?'
    ]
  },
  {
    slug: 'waxing-crescent',
    name: 'Waxing Crescent',
    symbol: '🌒',
    emoji: '🌱',
    position_in_cycle: 2,
    day_of_cycle: 'Days 1-6',
    illumination: '~10-30% — thin sliver in the western sky',
    type: 'building',
    type_label: 'plant',
    one_liner: 'The first sprout. The seed has cracked open underground.',
    meaning: 'The Waxing Crescent is the moon\'s first visible phase — a thin curve of light in the western sky just after sunset. Symbolically, this is the phase where the seed you planted at the New Moon has cracked open and is reaching toward light. The work is small, daily, mostly invisible. Most people abandon their New Moon intentions by the Waxing Crescent because nothing visible has happened yet. The phase is a discipline phase — keep tending what you planted before there is any proof it\'s growing. Every great cycle in nature looks like nothing at this stage. The work is faith.',
    whats_happening: 'The moon is moving away from the sun, slowly emerging from the glare. You can see it for an hour or two after sunset, low in the west, before it sets. The illumination grows day by day.',
    what_it_feels_like: 'Cautious optimism. A small, fragile yes. The first signs that the intention is real — a synchronicity, a name that comes up, a phone call. Energy is rising but still fragile — overcommitting now drains the cycle.',
    what_to_do: 'Take small daily action on your New Moon intentions. Five minutes a day on each one. Talk to one person about what you want — naming it out loud builds momentum. Tend the small things. Keep going when nothing is visible yet.',
    what_to_release: 'The need for the intentions to "prove themselves" already. The temptation to drop the intention because nothing has happened yet — that\'s the trap of this phase.',
    ritual: 'At dusk, find the crescent moon (it sets early — usually within 2-3 hours of sunset). Look at your written intentions. Pick one. Take one tiny action toward it tonight. Sleep with the paper under your pillow.',
    the_lesson: 'The Waxing Crescent teaches that faith is required before evidence. Every meaningful thing you ever built had a Waxing Crescent stage — a period where you kept going on belief alone. The lesson is to recognize the phase when you are in it, and not to abandon the seed.',
    pair_with_chakra: 'Sacral chakra — the chakra of creativity and the first stirring of new life.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Abundance Affirmations — to feed the small fragile yes with nervous-system trust.',
    pair_with_sound_slug: 'abundance',
    pair_with_crystal: 'Citrine — for sustained gentle momentum on early-stage intentions.',
    key_questions: [
      'What tiny daily action would keep my intention alive through the doubt of these first days?',
      'Whose voice — including my own — has been asking the seed to prove itself before its time?',
      'What would change if I trusted the work that nobody is seeing yet?'
    ]
  },
  {
    slug: 'first-quarter',
    name: 'First Quarter',
    symbol: '🌓',
    emoji: '⚒️',
    position_in_cycle: 3,
    day_of_cycle: 'Days 7-8',
    illumination: '50% — half-moon in the southern sky',
    type: 'building',
    type_label: 'push through',
    one_liner: 'The first resistance. The cycle\'s built-in test — and the muscle that grows from passing it.',
    meaning: 'The First Quarter Moon — half lit, half dark, perched in the southern sky around sunset — is the moon\'s first turning point. Astrologically it forms a square (90°) to the New Moon, and the energy is just like a square in a chart: friction. This is the phase where every monthly cycle hits its first real obstacle. The intention you planted at the New Moon now meets a real-world test. Doubt comes up. Schedules clash. The thing you said you would do becomes harder than expected. The First Quarter is the cycle\'s built-in test — and the test is exactly what makes the cycle deliver. The Full Moon ahead is fed by your refusal to quit at the First Quarter.',
    whats_happening: 'The moon is now 90° east of the sun. It rises around midday and sets around midnight, so it\'s the easiest moon of the cycle to see in the daytime. Half lit, half dark.',
    what_it_feels_like: 'Tension. Resistance from inside (the part of you that wants to quit) and outside (the schedule, the body, the people around you). A test of whether you really mean it. Often the moment when you doubt the intention you set just a week ago.',
    what_to_do: 'Push through the friction without forcing. Adjust the plan if needed but don\'t abandon it. Make the harder choice that aligns with the intention. Have a difficult conversation if it\'s in the way. This is the phase where decisions get made.',
    what_to_release: 'The story that resistance means the intention was wrong. Resistance is part of every cycle — it\'s the test, not the verdict.',
    ritual: 'Stand outside at dusk under the half-moon. Name out loud what you committed to at the New Moon. Then name out loud the obstacle that has shown up. Decide what you\'ll do about it in the next 24 hours. Drink a glass of water and go.',
    the_lesson: 'The First Quarter teaches that obstacles are part of the cycle, not exceptions to it. The quarter is the chart\'s built-in resistance — and the resistance is the forge. The lesson is to stop interpreting friction as a sign you should stop.',
    pair_with_chakra: 'Solar Plexus — the chakra of will, decision, and making the hard call.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Anxiety Relief meditation — for the chest-tightness that resistance brings up.',
    pair_with_sound_slug: 'anxiety',
    pair_with_crystal: 'Carnelian or Tiger\'s Eye — for the will to push through.',
    key_questions: [
      'What is the obstacle that showed up exactly on schedule, and what does it want me to learn?',
      'What harder choice would honor the intention I set seven days ago?',
      'Where am I about to quit something that is asking for one more push?'
    ]
  },
  {
    slug: 'waxing-gibbous',
    name: 'Waxing Gibbous',
    symbol: '🌔',
    emoji: '🌿',
    position_in_cycle: 4,
    day_of_cycle: 'Days 9-13',
    illumination: '~70-95% — almost-full',
    type: 'building',
    type_label: 'refine',
    one_liner: 'The work refines. The fruit is forming but not ripe.',
    meaning: 'The Waxing Gibbous is the phase between the First Quarter\'s push-through and the Full Moon\'s peak. The moon is more than half-lit, growing toward fullness, but not there yet. Symbolically, this is the refinement phase. The intention has survived the First Quarter test. Now the work is detail — adjustment, polish, follow-through, paying attention to the parts of the project that determine whether it lands well or just lands. The Waxing Gibbous is the phase where the difference between okay and excellent is built. Most people coast in this phase because they\'ve already done the hard part; the truly disciplined keep refining until the Full Moon.',
    whats_happening: 'The moon rises in the afternoon, sets after midnight. It\'s impossible to miss it — bright and obvious in the evening sky. Each night a little brighter and a little later in rising.',
    what_it_feels_like: 'Anticipation. Awareness that the peak is coming. A perfectionist tinge — the thing you\'re building suddenly seems almost-good-enough but not quite. Energy is high.',
    what_to_do: 'Refine. Polish. Re-read. Re-edit. Listen for what\'s still off. Have one honest conversation with someone who will tell you the truth. Trust the part of you that wants to keep tweaking — this phase rewards it.',
    what_to_release: 'Self-criticism that\'s actually paralysis disguised as "high standards." Refining is honest — paralysis is a stall.',
    ritual: 'Look at what you\'ve built since the New Moon. Write down the three things that still need polish. Pick one to do tonight. Pick one for tomorrow. Pick one for the day after.',
    the_lesson: 'The Waxing Gibbous teaches that excellence is built in the days when you could already coast. The lesson is the discipline of caring about details when the gross outcome is already secured.',
    pair_with_chakra: 'Heart chakra — the chakra of caring enough to do the small extra thing.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go meditation — to release the perfectionism that masquerades as standards.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Selenite — for clarity and refinement; charges naturally under any moon.',
    key_questions: [
      'What detail in this cycle\'s work do I know is "off" but have been hoping no one will notice?',
      'What would change if I treated the next five days as the most important of the cycle?',
      'Where am I about to settle for "good enough" when I have the energy to make it excellent?'
    ]
  },
  {
    slug: 'full-moon',
    name: 'Full Moon',
    symbol: '🌕',
    emoji: '✨',
    position_in_cycle: 5,
    day_of_cycle: 'Days 14-15',
    illumination: '100% — fully lit',
    type: 'full',
    type_label: 'peak · reveal',
    one_liner: 'The light fills everything. Whatever has been hidden is now visible.',
    meaning: 'The Full Moon is the moment when the sun and moon are exactly opposite each other in the sky — the moon is fully illuminated, and astrologically it forms an opposition (180°) to the sun. Just like an opposition in a birth chart, the energy of a Full Moon is mirror, revelation, and integration. Every Full Moon is the spotlight. Whatever has been hidden — in your relationships, in your body, in your work, in your inner life — gets lit up. People cry more on Full Moons. Babies are born on Full Moons. Hospitals run busier on Full Moons. The cliché that the Full Moon makes people emotional is real because the Full Moon is doing what light does: making it impossible to keep pretending. The work of the Full Moon is honesty — and the gift is that what you can finally see, you can finally work with.',
    whats_happening: 'The moon rises exactly as the sun sets, and sets exactly as the sun rises. It\'s in the sky all night. Always in the sign opposite the sun (Sun in Aries → Full Moon in Libra; Sun in Cancer → Full Moon in Capricorn). The astrological opposition flavours the emotional surface of the night.',
    what_it_feels_like: 'Big emotion. Sleeplessness. Conversations that go deeper than expected. Realizations that have been creeping up suddenly land. Tension in long-running situations. A dream that wakes you up. The body running hotter and brighter than usual.',
    what_to_do: 'Tell the truth — to yourself first, then to one person who can hear it. Look at what the light is showing you and don\'t look away. Celebrate what has been built since the New Moon (the fruit is now ripe). Have the conversation. Make the decision that the light has clarified.',
    what_to_release: 'The story that you didn\'t see what you saw. The version of yourself that was protecting you from a truth you no longer need protection from. Anything the light has clearly revealed as no longer yours to carry.',
    ritual: 'Step outside under the Full Moon if you can. Bring water — the moon charges water. Write down what the light is showing you. Then write what you\'re ready to release. Burn the second list (safely). Drink the moon-charged water in the morning.',
    the_lesson: 'The Full Moon teaches that what is revealed is also what can finally be released. The light is not punishing — it\'s freeing. The lesson is the courage to look at what is being shown.',
    pair_with_chakra: 'Crown chakra — the chakra of vision and the bigger picture.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Letting Go meditation — Full Moons are made for release.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Moonstone (especially Rainbow Moonstone) — the stone of the Full Moon. Charges under it.',
    key_questions: [
      'What is the Full Moon clearly showing me right now that I have been pretending not to see?',
      'What am I ready to release tonight that has been waiting for the light to fall on it?',
      'If everything in this cycle has been building to this peak — what am I called to celebrate, and what am I called to release?'
    ]
  },
  {
    slug: 'waning-gibbous',
    name: 'Waning Gibbous',
    symbol: '🌖',
    emoji: '📚',
    position_in_cycle: 6,
    day_of_cycle: 'Days 16-21',
    illumination: '~70-95% — bright but shrinking',
    type: 'releasing',
    type_label: 'integrate · share',
    one_liner: 'The teaching phase. What was revealed at the Full Moon is now ready to be shared.',
    meaning: 'The Waning Gibbous is the first phase after the Full Moon — the moon is still mostly bright but no longer growing. Where the Full Moon revealed, the Waning Gibbous integrates. The energy is reflective, articulate, generous. This is the phase of teaching, of articulating what you learned, of telling the story of what just happened to someone who can use it. Many indigenous traditions called this the "Disseminating Moon" — the time to give back what the cycle has taught you. The phase is also the natural moment for honest gratitude — the cycle is not over, but the harvest is in, and the body knows it.',
    whats_happening: 'The moon rises after sunset and is still very bright. Each night it rises later and is slightly less full. It\'s past peak but still dominant in the night sky.',
    what_it_feels_like: 'Reflective. Want to talk about what you\'ve been through. The natural impulse to teach, to write, to journal. Calmer than the Full Moon but the emotional residue is still close to the surface.',
    what_to_do: 'Articulate what you learned this cycle — even if only to your journal. Tell one person who could benefit. Express gratitude — written, said, or simply felt. Begin to integrate the changes the Full Moon revealed. Let the energy soften.',
    what_to_release: 'The urge to immediately start a new cycle. The phase wants you to digest, not to plant. Patience.',
    ritual: 'Pour a cup of tea. Pull out your journal. Answer this prompt: "The most important thing I learned in the past two weeks is…" Don\'t edit. Then text or message one person what you wrote.',
    the_lesson: 'The Waning Gibbous teaches that learning is not complete until it has been articulated. The lesson is to find words for what you\'ve been through — that is what makes the experience usable for the rest of your life.',
    pair_with_chakra: 'Throat chakra — the chakra of articulation, voice, and clear expression.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go meditation — for honest gratitude as you let last cycle\'s peak settle.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Aquamarine or Sodalite — both support clear articulation.',
    key_questions: [
      'What is the most important thing this cycle has taught me, in one sentence?',
      'Whose life would benefit from hearing what I just learned?',
      'What am I being asked to integrate before I rush into the next cycle?'
    ]
  },
  {
    slug: 'last-quarter',
    name: 'Last Quarter',
    symbol: '🌗',
    emoji: '🧹',
    position_in_cycle: 7,
    day_of_cycle: 'Days 22-23',
    illumination: '50% — half-moon, opposite half from First Quarter',
    type: 'releasing',
    type_label: 'release · let go',
    one_liner: 'The honest goodbye. What\'s no longer yours leaves now, with grace.',
    meaning: 'The Last Quarter Moon — half lit, half dark, the mirror image of the First Quarter — is the cycle\'s second turning point. Astrologically it forms another square (90°) to the sun, but where the First Quarter square is "push through resistance to build," the Last Quarter square is "release what you\'re still carrying so you can begin clean." The energy is real letting-go: forgiveness, ending, the honest goodbye, the resignation letter, the deletion of the contact. This is not the dramatic release of the Full Moon (which is revelation-driven). This is the calm, clear-headed letting-go of someone who has done the work and now sees clearly what no longer fits. The Last Quarter is one of the most under-rated phases in the cycle.',
    whats_happening: 'The moon now rises around midnight and is overhead at sunrise. It\'s the moon of the late night and early morning. Half-lit on the opposite side from the First Quarter.',
    what_it_feels_like: 'A quiet "no." The clarity that something needs to end. Forgiveness that surprises you. The ability to let go of something you\'ve been holding for years in a single conversation. Tiredness — not depression, just the natural end-of-cycle wind-down.',
    what_to_do: 'End what needs ending. Have the goodbye conversation. Write the resignation letter. Delete the apps that are eating your attention. Forgive someone — including yourself. Clear the inbox, the desk, the relationship that is no longer alive.',
    what_to_release: 'Anything you are holding "in case." This phase trusts that what is meant to come back will. Holding past the Last Quarter delays the next New Moon\'s seed.',
    ritual: 'Write a letter to someone or something you are letting go of (a relationship, a habit, a version of yourself). You don\'t have to send it. Burn it (safely) or shred it. Take a long shower. Sleep early.',
    the_lesson: 'The Last Quarter teaches that real release is not dramatic — it\'s clean. The lesson is the discipline of letting go before the next cycle begins, so that the New Moon\'s seed has space to grow.',
    pair_with_chakra: 'Heart chakra — the chakra of forgiveness and clean release.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go meditation — built for this exact phase.',
    pair_with_sound_slug: 'letting-go',
    pair_with_crystal: 'Smoky Quartz or Black Obsidian — for clean release of what no longer fits.',
    key_questions: [
      'What am I still holding "in case" that I know is not coming back to life?',
      'Whose forgiveness — given or received — is asking to be completed before the next cycle?',
      'If I let this go cleanly, with grace, what space would open up?'
    ]
  },
  {
    slug: 'waning-crescent',
    name: 'Waning Crescent',
    symbol: '🌘',
    emoji: '🌙',
    position_in_cycle: 8,
    day_of_cycle: 'Days 24-28 (last days before next New Moon)',
    illumination: '~5-25% — thin sliver in the eastern dawn sky',
    type: 'releasing',
    type_label: 'rest · empty',
    one_liner: 'The quiet hush before the next dark. The cycle\'s rest day.',
    meaning: 'The Waning Crescent — sometimes called the Dark Moon or Balsamic Moon — is the last phase of the cycle. The moon is a thin curve of light in the eastern sky just before sunrise, getting thinner each morning until it disappears entirely at the next New Moon. The energy is rest. Hibernation. Emptying. Many traditions called this the "wise woman" phase or the "elder" phase of the cycle. The work is essentially nothing — let the cycle complete, let the body rest, let the mind go quiet, trust the dark to do its dark work. Most people skip this phase and go straight to planning the next cycle, which is exactly why most people\'s cycles drain them. The Waning Crescent is the rest day that makes the next cycle possible.',
    whats_happening: 'The moon rises just before dawn and is hidden during most of the day. It\'s only briefly visible in the eastern sky right before sunrise, getting thinner each day. By the day before the New Moon, it\'s nearly invisible.',
    what_it_feels_like: 'Tired in a way that\'s not "you need to push through" but "you need to actually rest." Quiet. Sometimes melancholic — not depression, the natural quiet of an ending. Pulled toward solitude. Your body wants more sleep and more time alone than usual.',
    what_to_do: 'Rest. Read. Walk slowly. Eat warm food. Take a bath. Listen to soft music. Don\'t make new plans. Don\'t book new commitments for tonight. Honour the cycle\'s right to end.',
    what_to_release: 'The cultural story that "rest is laziness." The need to plan the next cycle while still in this one. The voice that says you should be more productive — at this phase, productivity IS rest.',
    ritual: 'Take a long bath in the evening. Add salt (sea salt or Epsom). Light one candle. Don\'t look at your phone. When you get out, write one sentence: "What I learned this cycle." Sleep early.',
    the_lesson: 'The Waning Crescent teaches that the cycle\'s rest is part of the cycle\'s work. Without the rest, the next cycle\'s seed has no soil to grow in. The lesson is the discipline of doing nothing on purpose.',
    pair_with_chakra: 'Third Eye chakra — the quiet inner-knowing chakra; this phase strengthens intuition like no other.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Sleep meditation — designed for this exact rest.',
    pair_with_sound_slug: 'sleep',
    pair_with_crystal: 'Amethyst or Lepidolite — both gentle, restful, dream-supportive stones.',
    key_questions: [
      'What does my body actually want right now if I let go of "should be productive"?',
      'What in the past 28 days has been worth simply sitting with for a few quiet days before I plan anything else?',
      'If rest IS the work of this phase — am I willing to do it?'
    ]
  }
]

export const LUNAR_PHASE_SLUGS = LUNAR_PHASES.map((p) => p.slug)
const LUNAR_BY_SLUG: Record<string, LunarPhaseProfile> = Object.fromEntries(
  LUNAR_PHASES.map((p) => [p.slug, p])
)

export function isLunarPhaseSlug(s: string): boolean {
  return s in LUNAR_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Type-tinted gradient — matches the lunar arc:
//   dark      = deep indigo (new moon, the seed in soil)
//   building  = warm amber-rose (waxing — energy growing)
//   full      = bright violet-cream (peak)
//   releasing = cool blue-grey (waning, soft)
const TYPE_ACCENT: Record<LunarPhaseProfile['type'], { c1: string; c2: string }> = {
  dark:      { c1: '#5a4b8a', c2: '#2c2046' },
  building:  { c1: '#f0a87b', c2: '#c96442' },
  full:      { c1: '#d8a8e8', c2: '#a060c0' },
  releasing: { c1: '#7d8a99', c2: '#4a5160' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function lunarPhasePageHTML(slug: string): string {
  const p = LUNAR_BY_SLUG[slug]
  if (!p) return ''
  const accent = TYPE_ACCENT[p.type]
  const readingHref = `/gab44/reading?ref=lunar-${slug}`

  const title = `${p.name} — Meaning, Ritual, What to Do · gab44 ✨`
  const description = `${p.name} (${p.day_of_cycle}, ${p.illumination}): ${p.meaning.substring(0, 140)}... Real evergreen guide — what's happening in the sky, what to do, what to release, the ritual, the lesson, key questions. Written warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Lunar Phases', item: `${SITE_URL}/gab44/lunar` },
          { '@type': 'ListItem', position: 3, name: p.name, item: `${SITE_URL}/gab44/lunar/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${p.name} — meaning, ritual, what to do, what to release`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/lunar/${slug}`,
        about: `${p.name} spiritual meaning, lunar cycle phase guide`
      }
    ]
  })

  const otherPhasesHtml = LUNAR_PHASES.map((q) => {
    const cur = q.slug === slug ? ' current' : ''
    const acc = TYPE_ACCENT[q.type]
    return `<a class="ph-mini${cur}" href="/gab44/lunar/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.symbol}</span><span class="name">${escapeHtml(q.name)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/lunar/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/lunar/${slug}" />
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
    font-size: 44px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .arch { font-size: 17px; color: var(--fg-dim); font-weight: 500; margin: 0 0 6px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
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
    background: linear-gradient(90deg, var(--c1), var(--c2));
  }
  .core-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 8px 0 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } h1 { font-size: 36px; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 22px;
  }
  .panel.do  { border-left: 4px solid #2e9e6a; }
  .panel.dont { border-left: 4px solid #d63d4d; }
  .panel h3 {
    font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; color: var(--fg); }
  .ritual-box {
    background: linear-gradient(135deg, var(--c1)1a 0%, var(--c2)15 100%);
    border: 1px solid var(--line); border-radius: 14px; padding: 22px 26px; margin: 22px 0;
  }
  .ritual-box h3 { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--fg-muted); font-weight: 700; }
  .ritual-box p { margin: 0; font-size: 15px; color: var(--fg); line-height: 1.7; }
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
  .questions { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0 0; }
  .questions h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions ul { margin: 0; padding-left: 20px; }
  .questions li { font-size: 15px; margin-bottom: 6px; color: var(--fg-dim); font-style: italic; }
  .questions li:last-child { margin-bottom: 0; }
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
  .other-phases { margin: 36px 0 22px; }
  .other-phases h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .phases-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .phases-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 12px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini.current { border-color: var(--c1); border-width: 2px; }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
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
      <a href="/gab44/lunar">all 8 phases</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ lunar phases</div>
    <h1><span class="sym">${p.symbol}</span>${escapeHtml(p.name)}</h1>
    <p class="arch">${escapeHtml(p.day_of_cycle)} · ${escapeHtml(p.illumination)}</p>
    <p class="sub">${escapeHtml(p.one_liner)}</p>
    <div class="meta-strip">
      <span>phase · ${escapeHtml(p.type_label)}</span>
      <span>position · ${p.position_in_cycle} of 8</span>
    </div>

    <article class="core-card">
      <span class="label">what it means</span>
      <p class="text">${escapeHtml(p.meaning)}</p>
    </article>

    <h2><span class="icon">🌌</span>what's happening in the sky</h2>
    <p>${escapeHtml(p.whats_happening)}</p>

    <h2><span class="icon">🌟</span>what it feels like</h2>
    <p>${escapeHtml(p.what_it_feels_like)}</p>

    <div class="two-col">
      <div class="panel do">
        <h3>✓ what to do</h3>
        <p>${escapeHtml(p.what_to_do)}</p>
      </div>
      <div class="panel dont">
        <h3>~ what to release</h3>
        <p>${escapeHtml(p.what_to_release)}</p>
      </div>
    </div>

    <div class="ritual-box">
      <h3>a 5-minute ritual</h3>
      <p>${escapeHtml(p.ritual)}</p>
    </div>

    <h2><span class="icon">📚</span>the lesson</h2>
    <p>${escapeHtml(p.the_lesson)}</p>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${p.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(p.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(p.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${p.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(p.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(p.pair_with_sound)}</div>
      </a>
      <div class="pair-card" style="cursor:default">
        <div class="pair-label">crystal</div>
        <div class="pair-name">${escapeHtml(p.pair_with_crystal.split(' or ')[0].split(' (')[0])}</div>
        <div class="pair-text">${escapeHtml(p.pair_with_crystal)}</div>
      </div>
    </div>

    <div class="questions">
      <h3>questions to sit with</h3>
      <ul>
        <li>${escapeHtml(p.key_questions[0])}</li>
        <li>${escapeHtml(p.key_questions[1])}</li>
        <li>${escapeHtml(p.key_questions[2])}</li>
      </ul>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading written for <em>your</em> ${escapeHtml(p.name)}</h2>
      <p>This page describes the ${escapeHtml(p.name)} for everyone. A <strong>personal reading</strong> looks at <em>your</em> chart — which sign this moon is in for you, what it activates in your life specifically, what to focus on this cycle. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <div class="related-strip">
      Related: <a href="/gab44/lunar">all 8 phases</a> · <a href="/gab44/chakras">7 chakras</a> · <a href="/gab44/crystals">crystals by sign</a> · <a href="/healing">healing meditations</a>.
    </div>

    <section class="other-phases">
      <h3>The full lunar cycle</h3>
      <div class="phases-grid">
        ${otherPhasesHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function lunarPhasesIndexHTML(): string {
  const cards = LUNAR_PHASES.map((p) => {
    const accent = TYPE_ACCENT[p.type]
    return `<a href="/gab44/lunar/${p.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${p.symbol}</span>
        <span class="day">Day ${p.position_in_cycle}/8</span>
      </div>
      <div class="name">${escapeHtml(p.name)}</div>
      <div class="when">${escapeHtml(p.day_of_cycle)} · ${escapeHtml(p.type_label)}</div>
      <div class="teaser">${escapeHtml(p.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>The 8 Phases of the Moon — Spiritual Meaning &amp; Rituals · gab44 ✨</title>
<meta name="description" content="A friendly, complete map of the 8 phases of the moon: New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Last Quarter, Waning Crescent. Spiritual meaning, ritual, what to do, what to release. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/lunar" />
<meta property="og:title" content="The 8 Phases of the Moon — A Friendly Spiritual Guide" />
<meta property="og:description" content="New Moon, Full Moon and the six phases between — what each one means, what to do, what to release, the ritual." />
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
  .card .sym { font-size: 32px; }
  .card .day { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; }
  .card .name { font-size: 19px; font-weight: 700; margin-bottom: 2px; }
  .card .when { font-size: 11px; color: var(--fg-muted); margin-bottom: 8px;
    letter-spacing: 0.05em; text-transform: uppercase; font-weight: 600; }
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
      <a href="/gab44/chakras">7 chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/crystals">crystals</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>The 8 phases of the <span class="accent">moon</span> — your monthly cycle.</h1>
    <p class="sub">From the New Moon's blank page to the Waning Crescent's quiet rest, the moon's monthly cycle is the most universally felt energetic rhythm in the body. Eight phases, each with its own job. Each with its own ritual. Each with its own lesson.</p>

    <div class="intro">
      <h3>How the cycle works</h3>
      <p><strong>The moon takes about 28 days to circle the earth.</strong> Across that cycle it passes through 8 distinct phases — from invisible (New Moon) to fully lit (Full Moon) and back. Almost every traditional culture noticed this and built spiritual practice around it.</p>
      <p><strong>The first half (New Moon → Full Moon)</strong> is the building half — the seed grows, faces its first test, refines, and reaches peak. This is the time to plant, push through, polish, and celebrate.</p>
      <p><strong>The second half (Full Moon → next New Moon)</strong> is the releasing half — the harvest is in, the truth has been revealed, and the work is now to integrate, let go, and rest. This phase is the one most people skip — and it's exactly the missed phase that makes their next cycle exhausting.</p>
      <p>Pair each phase with a chakra, a healing meditation, and a stone — all linked from each phase guide.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want to know what <em>your</em> upcoming Full Moon is asking of you?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading looks at the next major lunation in your chart — which house it falls in, what it's activating, what to focus on this cycle. <a href="/gab44/reading?ref=lunar-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
