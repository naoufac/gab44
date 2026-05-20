// Empath Types — SEO funnel — /gab44/empath (index) +
// /gab44/empath/{slug}. 7 hand-written guides to the recognised
// "types of empath" cluster: emotional, physical, intuitive, heyoka,
// geomantic, plant-animal, dream. Highest "which one am I" search
// volume of any cluster shipped — perfect funnel for the $9 reading
// ("I'll tell you which type you are based on your chart").
//
// Each guide is ~600 words across 9 sections (what it is, the signs,
// the gift, the shadow, in love, in work, the protection practice,
// pair-with chakra/sound/zodiac, 3 key questions). Family-tinted
// gradient: feeling-types (emotional, physical) = rose; knowing-types
// (intuitive, heyoka) = indigo; world-types (geomantic, plant-animal,
// dream) = sage. Cross-funnels into BOTH revenue lanes — every type
// links to /gab44/chakras/{slug} (gab44 internal), /healing/script/
// {slug} (Phase 1A audio), AND /gab44/reading?ref=empath-{slug} ($9
// Phase 1D). Schema.org Article + BreadcrumbList JSON-LD on each
// page. Routes registered BEFORE /gab44/:sign to avoid Hono
// RegExpRouter greedy-match.

import { SITE_URL } from '@/lib/identity'

export interface EmpathGuide {
  slug: string
  name: string
  glyph: string
  family: 'feeling' | 'knowing' | 'world'
  position: number
  one_liner: string
  meaning: string
  signs: string
  the_gift: string
  the_shadow: string
  in_love: string
  in_work: string
  protection_practice: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_sign: string
  key_questions: [string, string, string]
}

export const EMPATHS: EmpathGuide[] = [
  {
    slug: 'emotional',
    name: 'Emotional Empath',
    glyph: '💗',
    family: 'feeling',
    position: 1,
    one_liner: 'You feel other people\'s emotions in your own body — and you have been doing this so long you may not even realise some of the feelings you carry are not yours.',
    meaning: 'The most common type. An emotional empath does not just *understand* what someone is feeling — they *feel it themselves*, in their own chest, their own throat, their own gut. A friend tells you about her divorce; an hour later you are heavy and you cannot remember why. A coworker is angry; you suddenly want to leave the room without knowing what just happened. Most emotional empaths spend years thinking the emotions they pick up are their own — which makes self-knowledge harder, because half the weather inside them is being broadcast from outside. The work is not to stop feeling. The work is to learn the difference between *yours* and *theirs* — and to give the borrowed feelings back to where they came from.',
    signs: 'Walk into a room and feel the mood shift inside you within seconds. Cry at commercials. Cannot watch graphic news without it staying for days. Best friend has a bad week and you are exhausted by Friday without having done anything. Strong reaction to crowded places, hospitals, prisons, malls. Often described as "too sensitive" by people who are themselves emotionally guarded.',
    the_gift: 'You are a *witness* of the emotional field. People feel met by you in seconds because you actually feel what they are feeling — there is no acting required. This is the gift behind every great therapist, healer, mediator, and friend. You are what people mean when they say "she just *got* me." The gift is real and the world needs more of it.',
    the_shadow: 'Becoming a sponge. Carrying everyone\'s feelings without distinguishing them from your own. Compassion fatigue. Resentment that no one asks how *you* are — because you have made yourself so available that nobody believes you have weather of your own.',
    in_love: 'You feel your partner\'s state before they have words for it — which can be the most beautiful thing in the world or the most exhausting. Reversed: you absorb their stress and hand it back as your own anxiety, which then becomes the thing they have to manage.',
    in_work: 'Helping professions, healing arts, hospitality, teaching, leadership of small teams. Reversed: any role where the workplace itself is in chronic distress; you will eat the room\'s mood for breakfast and be empty by 2pm.',
    protection_practice: 'Before entering a room, pause and inventory what *you* are feeling right now. Then enter. After leaving, inventory again — what arrived that wasn\'t there before? That is the borrowed weather. Hand it back: imagine it returning to its rightful source. Bath with salt. Cold water on hands and face.',
    pair_with_chakra: 'Heart — the emotional empath\'s primary receiver and primary leak.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — pair with this type when releasing borrowed emotions.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'pisces',
    key_questions: [
      'Which feelings I am carrying right now are actually mine?',
      'Where in my life have I been mistaking borrowed weather for self-knowledge?',
      'What would it feel like to give a feeling back without abandoning the person it belongs to?'
    ]
  },
  {
    slug: 'physical',
    name: 'Physical Empath',
    glyph: '🩺',
    family: 'feeling',
    position: 2,
    one_liner: 'You feel other people\'s physical sensations in your own body — their headaches, their nausea, their pain — sometimes before they have named it themselves.',
    meaning: 'The body version of the emotional empath. A physical empath\'s nervous system reads other people\'s bodies the way an emotional empath reads their hearts. You sit next to someone with a migraine and your own head starts. You hug a friend who has been carrying back pain and an hour later your back hurts. You walk into a hospital and feel forty different ailments at once. Some physical empaths are also called *medical intuitives* when this gift is trained: they can scan a body and feel where it is in distress. Untrained, this type often suffers from chronic mystery symptoms — pain that arrives without injury, fatigue without cause, illness that cannot be diagnosed because it is not, in the strict sense, theirs.',
    signs: 'Mystery aches and pains that arrive after spending time with specific people. Hospitals exhaust you. You can feel which person in a crowd is sick. You\'ve had inexplicable symptoms that match someone close to you who *is* sick. Massage either deeply nourishes you (when the practitioner is grounded) or wrecks you (when they are not). Bodies tell you their state immediately.',
    the_gift: 'You are a *body witness*. Healers, bodyworkers, nurses, doctors, and intuitive physicians are often physical empaths who learned to read the gift consciously instead of reactively. The gift can be one of the most useful in the world — you can locate disease before it surfaces, comfort pain before it is articulated.',
    the_shadow: 'Becoming chronically unwell as a way of carrying other people\'s unwellness. Mystery illness. Burnout in healing professions. The healer who is sicker than her clients.',
    in_love: 'You feel your partner\'s body state immediately. This is the gift — *and* it is the source of the boundary problem. When they are sick, you become sick. When they are exhausted, you become exhausted. Reversed: a relationship where you have lost the line between your body and theirs.',
    in_work: 'Bodywork, energy healing, nursing, physical therapy, midwifery, athletics coaching. Reversed: hospitals or clinics where you have not built a hard practice of energetic clearing.',
    protection_practice: 'Daily body inventory before contact: what is mine. Physical clearing after contact: salt bath, cold rinse, walking on grass barefoot, shaking the body for two full minutes. Imagine your skin as a clear membrane: information passes through, but ownership does not.',
    pair_with_chakra: 'Sacral — the body\'s emotional centre, where physical sensation lives before words.',
    pair_with_chakra_slug: 'sacral',
    pair_with_sound: 'Deep Healing — pair with this type when restoring your own body after long contact with someone else\'s.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'virgo',
    key_questions: [
      'Which sensation in my body right now is actually mine, and which arrived through contact?',
      'Whose body am I carrying without consent — theirs or mine?',
      'Where is the line between empathy and merging, and have I crossed it?'
    ]
  },
  {
    slug: 'intuitive',
    name: 'Intuitive Empath',
    glyph: '🔮',
    family: 'knowing',
    position: 3,
    one_liner: 'You *know* things about people without being told — what they are about to say, what they are hiding, what is true in the room — and you have learned to second-guess yourself because the world rarely confirms it out loud.',
    meaning: 'Intuitive empaths receive information through *knowing* rather than feeling. You meet someone for the first time and immediately know they are lying, or grieving, or about to leave their job — and there is no obvious cue you could point to. The information arrives whole. This includes what tradition calls clairsentience (clear feeling), claircognizance (clear knowing), and clairaudience (clear hearing) — most intuitive empaths have one strong channel and a weaker one. The quiet tragedy of this type is that the information arrives so clearly it does not feel impressive — it feels obvious, like noticing the colour of the sky. So you assume everyone sees it. They don\'t. You then spend years thinking you are paranoid, or anxious, or imagining things — until enough of your "imagined" things turn out to be true that you stop arguing with yourself.',
    signs: 'You "had a feeling" about something or someone and were right — many times, across many years. You know the answer to a question before someone finishes asking. You sense a lie immediately. You have walked away from situations that later turned out badly, with no rational reason to walk away. People say "how did you know that?" more than once a month.',
    the_gift: 'You are a *truth detector*. Investors, therapists, teachers, leaders, artists, and journalists are often intuitive empaths who have learned to trust the channel. Once you stop arguing with the knowing, it becomes the most accurate compass you have ever owned.',
    the_shadow: 'Self-doubt as a permanent state. Arguing with your own knowing because the world demanded "evidence" you cannot provide. Or its inverse: the intuitive who has stopped checking, who confuses every passing thought for a download, and who walks around armed with certainties that aren\'t true.',
    in_love: 'You know your partner before they know themselves — which is a gift when received and a violation when imposed. Reversed: weaponising your knowing to win arguments, finishing their sentences, refusing them the dignity of telling their own story.',
    in_work: 'Strategy, therapy, investing, journalism, intelligence work, leadership, art. Reversed: workplaces that demand "data only" and punish the intuitive read; you will be right and ignored, and slowly stop offering the read.',
    protection_practice: 'Daily journaling of "knowings" — date them, write them down, let life confirm or deny. Over six months, you will have a track record. The track record is what teaches you to trust the channel without inflating it.',
    pair_with_chakra: 'Third eye — the literal seat of inner sight; trains with attention, not strain.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Anxiety Relief — pair with this type when the knowing feels like dread without source.',
    pair_with_sound_slug: 'anxiety',
    pair_with_sign: 'scorpio',
    key_questions: [
      'When was the last time my knowing was right and I did not act on it?',
      'When was the last time my knowing was wrong, and what did that teach me about its limits?',
      'What would it mean to trust the channel without becoming someone who is never wrong?'
    ]
  },
  {
    slug: 'heyoka',
    name: 'Heyoka Empath',
    glyph: '🪞',
    family: 'knowing',
    position: 4,
    one_liner: 'The sacred clown. The mirror. The empath whose presence makes other people uncomfortable on purpose — because what they are showing you is yourself.',
    meaning: 'Heyoka is a Lakota word for the sacred clown — the contrarian healer who does everything backwards on purpose to break people out of their patterns. In the modern empath taxonomy (which is a Western adaptation, not the original Lakota usage), the heyoka empath is the rarest type: not someone who absorbs your feelings or reads your future, but someone whose *presence* mirrors your shadow back to you. People meet a heyoka and are immediately either deeply uncomfortable or immediately devoted — because the heyoka, just by existing, is showing you the parts of yourself you have been refusing to look at. They tell uncomfortable truths laughingly. They break social conventions on instinct. They make people angry without trying. They also make people heal without trying — because the discomfort their presence creates is exactly the friction the soul needed.',
    signs: 'People either love you or are deeply unsettled by you — rarely neutral. You make jokes that land too true and people stop laughing. You break rules without realising they were rules. You can sense when someone is performing and you instinctively poke at the performance. Strangers tell you their darkest secrets within minutes. You have triggered more growth in others than you can account for, often by accident.',
    the_gift: 'You are a *catalyst*. The heyoka does not heal in the soft way — they heal in the necessary way, by holding up the mirror. People grow around you because they cannot keep pretending around you. Comedians, artists, therapists who do shadow work, and the friend who finally tells you what your other friends have been whispering — these are heyoka roles.',
    the_shadow: 'Cruelty disguised as truth-telling. Using the gift to puncture instead of liberate. Or, the inverse: the heyoka who has been told they are "too much" so often that they have flattened themselves and now mirror nothing — depressed, muted, refusing to do their job.',
    in_love: 'A partnership where both people are willing to be mirrored — where you can say the uncomfortable thing without being punished and they can say it back. Reversed: a relationship where your truth-telling has become a weapon, or theirs has been silenced because you punished it.',
    in_work: 'Comedy, therapy, art, leadership of organisations that need to change, frontline activism. Reversed: bureaucracy. You will accidentally combust the building.',
    protection_practice: 'The heyoka does not need protection from absorbing — they need protection from *withdrawing*. The world tries to flatten you because you are inconvenient. Daily practice: speak one true thing out loud per day, even (especially) when it makes you uncomfortable.',
    pair_with_chakra: 'Throat — the heyoka\'s gift lives in the speech act; silence is their burnout.',
    pair_with_chakra_slug: 'throat',
    pair_with_sound: 'Letting Go — pair with this type when releasing the world\'s pressure to flatten you.',
    pair_with_sound_slug: 'letting-go',
    pair_with_sign: 'aquarius',
    key_questions: [
      'What truth have I been swallowing because the room punished me last time I told it?',
      'When my mirror lands on someone, do I love them through it — or am I just enjoying the discomfort?',
      'Who is the heyoka in my life that I have been afraid to love back?'
    ]
  },
  {
    slug: 'geomantic',
    name: 'Geomantic Empath',
    glyph: '🌍',
    family: 'world',
    position: 5,
    one_liner: 'You feel *places*. Some rooms feel sacred, some feel poisoned, and your body has been telling you which is which since you were a child.',
    meaning: 'Geomantic empaths read the energy of *land*, of buildings, of rooms. The earth empath. You walk into a house and immediately feel whether it is a happy house or a haunted one. Some places restore you for reasons you cannot articulate — a particular hill, a particular forest, the kitchen of a particular grandmother. Other places drain you immediately, no matter how nice they are on paper. This type is the most under-discussed because the cultural language for it barely exists in the modern West, but indigenous traditions everywhere have known it forever. The land remembers what happened on it. Some empaths simply read that memory through their bodies. Battlefields, prisons, hospitals, places where great suffering occurred — these often hum unbearably to the geomantic empath. Sacred sites do the opposite.',
    signs: 'You feel different in different rooms for reasons you cannot explain. You\'ve avoided buying a house that "looked perfect" because something in you said no. You travel and certain places feel *home* immediately even though you have never been there. Earthquakes, weather changes, full moons hit your body distinctly. You feel called to specific landscapes.',
    the_gift: 'You are a *land reader*. Architects, real estate agents who actually serve their clients, gardeners, place-based therapists, retreat hosts, indigenous-tradition holders, feng shui practitioners — these are geomantic empaths who have learned to listen to land consciously. Cities are built by people who do not have your gift, which is part of why so many cities feel wrong.',
    the_shadow: 'Becoming nomadic without ground. Or, the inverse: trapped in a place that is poisoning you because you have not yet understood why you cannot thrive there. Many depressions in geomantic empaths are actually *location-mismatch* depressions — the wrong land for the soul.',
    in_love: 'A partner who shares your read of place — who agrees that this house, this neighbourhood, this country, *fits*. Reversed: a partner who insists you live somewhere that hurts you, framing your distress as "negativity" instead of accurate land-reading.',
    in_work: 'Architecture, gardening, agriculture, place-based hospitality, retreat design, indigenous and environmental advocacy. Reversed: any role that asks you to spend long hours in a building that hums wrong to your body.',
    protection_practice: 'Listen *first*. Before you sign a lease, before you take a job, before you accept an invitation to a place — sit there for one full hour alone if you can, and ask your body what it knows. The body always answers. Honor the answer.',
    pair_with_chakra: 'Root — the geomantic empath lives in the line between sit-bones and earth.',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Deep Healing — pair with this type when re-grounding after time spent on hostile land.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'taurus',
    key_questions: [
      'Which place in my life right now is actually nourishing me, and which is quietly draining me?',
      'When was the last time I trusted my body\'s read of a place over the social pressure to like it?',
      'Where on earth would my body say *yes* if I let it answer freely?'
    ]
  },
  {
    slug: 'plant-animal',
    name: 'Plant & Animal Empath',
    glyph: '🌱',
    family: 'world',
    position: 6,
    one_liner: 'You communicate with non-humans the way other people communicate with humans — and you have always known the trees were paying attention.',
    meaning: 'Plant and animal empaths receive information through, and feel deeply connected to, the non-human world. Animals approach you on the street; cats who hate everyone sleep on your chest; dogs you have never met want to leave their owners and come with you. Plants thrive in your home for no obvious reason. You know when an animal is sick before there are symptoms. You have grieved a tree being cut down the way other people grieve a friend. Some traditions call this *animism* — the lived recognition that the non-human world is conscious and communicating. The modern West treats this as fringe, but every indigenous tradition holds it, and many empaths know it in their bones from age three.',
    signs: 'Animals come to you. Plants thrive. You have wept over an animal\'s death more than over many humans\'. You feel insulted on behalf of trees. You can tell when a pet is in pain before the owner knows. You hike and feel "watched" by the forest in a friendly way.',
    the_gift: 'You are an *interspecies translator*. Veterinarians who actually heal, animal communicators, naturalists, gardeners, conservationists, herbalists, indigenous-tradition holders — these are plant-animal empaths who learned to listen across the species line. The non-human world has been waiting for translators.',
    the_shadow: 'Misanthropy — preferring animals because they are easier than people. Or, the inverse: ignoring the gift because the modern world treats it as childish, and slowly losing access to a register of perception that was once natural.',
    in_love: 'A partner who *also* sees the non-human world as conscious — or at minimum, respects that you do. Reversed: a partner who mocks your relationships with non-humans, treats your grief over a pet as excessive, or sees your plants as decoration.',
    in_work: 'Veterinary medicine, animal training, conservation, gardening, herbalism, ecology. Reversed: any work that requires you to be cruel to animals or land — you will burn out fast and the moral injury will be deep.',
    protection_practice: 'Daily contact. A few minutes barefoot on grass. A real conversation with a tree. Pet a cat slowly. The gift is a *channel*, and channels close when not used. Use it. The non-human world will reward the attention.',
    pair_with_chakra: 'Heart — interspecies love is heart-chakra work; the heart does not distinguish species.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — pair with this type when restoring after loss of an animal or plant companion.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_sign: 'cancer',
    key_questions: [
      'When was the last time I spoke to a non-human as if it could hear me — and let it answer?',
      'Which animal or plant in my life right now is asking for something I have been too busy to receive?',
      'Where has my misanthropy been protecting me, and where has it been costing me?'
    ]
  },
  {
    slug: 'dream',
    name: 'Dream Empath',
    glyph: '🌙',
    family: 'world',
    position: 7,
    one_liner: 'You receive information in dreams that turns out to be true — about people you love, about events that haven\'t happened yet, about parts of yourself the daylight could not show you.',
    meaning: 'The rarest of the seven types in modern accounting, but the oldest in human history — every traditional culture has held the dreamer as a respected role. A dream empath\'s sleeping mind is permeable to information the waking mind cannot reach. You dream of a relative and the next day she calls; you dream of a place you have never been and visit it five years later; you dream a conversation that then happens word-for-word with a stranger; you dream a warning and it saves you. Dream empaths often have vivid, narrative, recurring dreams from childhood. Many also experience precognitive dreams (the dream that comes true), telepathic dreams (you and a friend dream the same dream), and visitational dreams (someone who has died comes to speak). The gift is real and trainable, but it costs sleep until it is ordered.',
    signs: 'Vivid dreams since childhood. Dreams that came true at least three times in a way you cannot explain by chance. Recurring dreams that feel like assignments rather than randomness. Dreams of people you love and the dream turning out to match what was happening to them. Dreams that have given you actual answers to actual problems.',
    the_gift: 'You are a *night oracle*. Dream-workers, therapists who use dream material, artists whose work comes through dreams, indigenous tradition-holders, prophets in their original sense — these are dream empaths who have learned to honour the channel. The dream is not random; it is a separate operating system.',
    the_shadow: 'Insomnia. The dream empath whose channel is too open suffers; sleep is no longer rest, it is reception. Burnout from the night job. Or, the inverse: refusing to record dreams, letting the channel atrophy, and losing access to material that was meant for you.',
    in_love: 'A partnership where dreams are spoken about, recorded, taken seriously — where you can wake up and tell them and have them be received as data, not noise. Reversed: a partner who dismisses dream content; the dream empath then learns silence and the channel goes underground.',
    in_work: 'Therapy, dream-work, art, writing, psychic work, traditional ceremony. Reversed: any work that demands you not value sleep and not honour the night.',
    protection_practice: 'Dream journal *immediately upon waking*. The first 60 seconds of consciousness is when the channel is still open. Write in fragments, in the dark, in the half-state. Over months, patterns emerge. Set intentions before sleep: ask for what you need to know. The dream world responds to invitation.',
    pair_with_chakra: 'Crown — the channel of incoming-from-beyond, opened by sleep.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Sleep — pair with this type to actually *rest* between reception nights.',
    pair_with_sound_slug: 'sleep',
    pair_with_sign: 'pisces',
    key_questions: [
      'What recurring dream of mine is asking to be taken seriously?',
      'When did a dream tell me something true that I dismissed?',
      'What practice would honour the night job I have apparently been given?'
    ]
  }
]

const EMPATH_BY_SLUG: Record<string, EmpathGuide> = Object.fromEntries(EMPATHS.map((e) => [e.slug, e]))

export const EMPATH_SLUGS = EMPATHS.map((e) => e.slug)

export function isEmpathSlug(s: string): boolean {
  return s in EMPATH_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Family-tinted gradient: feeling (emotional, physical) = rose;
// knowing (intuitive, heyoka) = indigo; world (geomantic, plant-animal,
// dream) = sage.
const FAMILY_ACCENT: Record<string, { c1: string; c2: string; label: string }> = {
  feeling: { c1: '#d68aa0', c2: '#a04a6a', label: 'Feeling-types · the body register' },
  knowing: { c1: '#5a6cb8', c2: '#2c3a82', label: 'Knowing-types · the channel register' },
  world: { c1: '#7ba37c', c2: '#3e6e44', label: 'World-types · the field register' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function empathPageHTML(slug: string): string {
  const r = EMPATH_BY_SLUG[slug]
  if (!r) return ''
  const accent = FAMILY_ACCENT[r.family] || { c1: '#888', c2: '#444', label: '' }
  const readingHref = `/gab44/reading?ref=empath-${slug}`

  const title = `${escapeHtml(r.name)} — Signs, Gift, Shadow &amp; Protection · Type ${r.position} of 7 · gab44 ✨`
  const description = `What it means to be a ${r.name}: the signs, the gift, the shadow, in love, in work, the protection practice, pair-with chakra/sound/zodiac, key questions. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Empath types', item: `${SITE_URL}/gab44/empath` },
          { '@type': 'ListItem', position: 3, name: r.name, item: `${SITE_URL}/gab44/empath/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.name} — signs, gift, shadow & protection`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/empath/${slug}`,
        about: `${r.name} type, empath identification, energy work`
      }
    ]
  })

  const otherEmpathsHtml = EMPATHS.filter((q) => q.slug !== slug).map((q) => {
    const acc = FAMILY_ACCENT[q.family] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/empath/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.glyph}</span><span class="name">${escapeHtml(q.name.replace(' Empath', ''))}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/empath/${slug}" />
<meta property="og:title" content="${escapeHtml(`${r.name} — signs, gift, shadow & protection`)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/empath/${slug}" />
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
  .panel.protect { border-left: 4px solid #5a8ec6; }
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
  .other-empaths { margin: 36px 0 22px; }
  .other-empaths h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .empaths-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
  @media (max-width: 700px) { .empaths-grid { grid-template-columns: repeat(3, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
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
      <a href="/gab44/empath">all 7 types</a>
      <a href="/gab44/symbols">symbols</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ Empath Types</div>
    <span class="fam-pill">${escapeHtml(accent.label)}</span>
    <h1><span class="glyph">${r.glyph}</span>${escapeHtml(r.name)}</h1>
    <p class="sub">${escapeHtml(r.one_liner)}</p>
    <div class="meta-line">
      <span>type ${r.position} of 7</span>
      <span>${escapeHtml(r.family)}-register</span>
    </div>

    <article class="core-card">
      <span class="label">what a ${escapeHtml(r.name.toLowerCase())} actually is</span>
      <p class="text">${escapeHtml(r.meaning)}</p>
    </article>

    <h2><span class="icon">🪧</span>the signs</h2>
    <div class="signs-card">
      <h3>how to recognise this type</h3>
      <p>${escapeHtml(r.signs)}</p>
    </div>

    <h2><span class="icon">🎁</span>the gift</h2>
    <div class="panel gift">
      <h3>what you carry that the world needs</h3>
      <p>${escapeHtml(r.the_gift)}</p>
    </div>

    <h2><span class="icon">🌑</span>the shadow</h2>
    <div class="panel shadow">
      <h3>where the gift turns against you</h3>
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

    <h2><span class="icon">🛡️</span>the protection practice</h2>
    <div class="panel protect">
      <h3>how to keep the channel without becoming the channel</h3>
      <p>${escapeHtml(r.protection_practice)}</p>
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
        <div class="pair-text">Sign whose energy aligns with this type.</div>
      </a>
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after recognising you are this type</h3>
      <ol>
        <li>${escapeHtml(r.key_questions[0])}</li>
        <li>${escapeHtml(r.key_questions[1])}</li>
        <li>${escapeHtml(r.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ Want to know which type *you* actually are?</h2>
      <p>Most empaths are a primary type plus a secondary. A <strong>personal reading</strong> looks at *your* chart and tells you which type you are leading with, which is your secondary, and what protection practice will actually hold for *your* nervous system. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\\'t land</span></div>
      <a class="btn" href="${readingHref}">Get my empath read →</a>
    </section>

    <section class="other-empaths">
      <h3>other types of empath</h3>
      <div class="empaths-grid">
        ${otherEmpathsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44/empath">all 7 types</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function empathIndexHTML(): string {
  const familySections = (['feeling', 'knowing', 'world'] as const).map((fam) => {
    const accent = FAMILY_ACCENT[fam]
    const items = EMPATHS.filter((e) => e.family === fam).map((e) => {
      return `<a href="/gab44/empath/${e.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
        <div class="head">
          <span class="glyph">${e.glyph}</span>
          <span class="pos">${e.position}/7</span>
        </div>
        <div class="name">${escapeHtml(e.name)}</div>
        <div class="teaser">${escapeHtml(e.one_liner)}</div>
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
<title>The 7 Types of Empath — Which One Are You? · Signs, Gifts, Shadows · gab44 ✨</title>
<meta name="description" content="The 7 recognised types of empath: emotional, physical, intuitive, heyoka, geomantic, plant-animal, dream. Signs, gift, shadow, protection practice. Hand-written, warm. Most empaths are a primary plus a secondary." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/empath" />
<meta property="og:title" content="The 7 Types of Empath — Which One Are You? · gab44" />
<meta property="og:description" content="From emotional to dream empath, every type\\'s signs, gift, and protection practice — hand-written, warm, honest about both the gift and the shadow." />
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
    <h1>The 7 types of <span class="accent">empath</span> — which one are you, really?</h1>
    <p class="sub">From emotional empath (the body register) to dream empath (the world register). Each type has a gift, a shadow, and a protection practice you cannot skip. Most empaths are a primary plus a secondary — and the work of a lifetime is learning which one you are leading with.</p>

    <div class="intro">
      <h3>How to use this page</h3>
      <p><strong>Suspect you\'re an empath?</strong> Click your closest type below. Every page has the actual *signs* (so you can recognise yourself), the *gift* you carry, the *shadow* the gift casts when untrained, what it means in love and in work, the *protection practice* that keeps the channel without making you the channel, and pair-with cards for chakra, sound, and zodiac sign.</p>
      <p><strong>The three registers.</strong> The seven types cluster naturally. <em>Feeling-types</em> (emotional, physical) read the body — yours and theirs. <em>Knowing-types</em> (intuitive, heyoka) read the channel — information arriving without sensing it. <em>World-types</em> (geomantic, plant-animal, dream) read the field — places, non-humans, the night. The register tells you *how* the information arrives. The type tells you *what* the information is about.</p>
      <p><strong>Most empaths are a primary plus a secondary.</strong> An emotional-physical empath who leads with feeling and seconds with the body. An intuitive-dream empath whose downloads come both at noon and at 3am. Read the closest type first, then the next-closest. The combination is what makes you.</p>
    </div>

    ${familySections}

    <div class="reading-strip">
      <h2>Want to know which type you actually are — based on your chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 reading tells you which type you are leading with, which is your secondary, and what protection practice will actually hold for *your* nervous system. <a href="/gab44/reading?ref=empath-index">Get yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
