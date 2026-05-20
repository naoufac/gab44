// Doshas — Ayurvedic constitutional types — SEO funnel.
// /gab44/doshas (index) + /gab44/doshas/{slug}.
//
// 3 hand-written single-dosha guides — vata, pitta, kapha. The Ayurvedic
// constitutional system is the medical-philosophical frame that the
// yogic body-practice quadrant (mantras + mudras + pranayama + asanas +
// limbs) sits inside. Targets very-high-volume Ayurveda search cluster:
// "am I vata pitta or kapha", "vata dosha symptoms", "pitta diet",
// "kapha imbalance", "tridoshic constitution".
//
// Element-tinted gradient:
//  - vata (air + ether) = sky-indigo — the moving, light, dry, cold dosha
//  - pitta (fire + water) = amber-crimson — the transforming, hot, sharp dosha
//  - kapha (water + earth) = jade-rose — the stabilizing, heavy, oily dosha

import { SITE_URL } from '@/lib/identity'

export interface DoshaGuide {
  slug: string
  text: string
  sanskrit: string
  elements: string
  one_liner: string
  meaning: string
  physical_signs: string
  mental_signs: string
  the_gift: string
  the_shadow: string
  in_love: string
  in_work: string
  how_to_balance: string
  pair_with_asana: string
  pair_with_pranayama: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  key_questions: [string, string, string]
}

export const DOSHAS: DoshaGuide[] = [
  {
    slug: 'vata',
    text: 'Vata',
    sanskrit: 'वात',
    elements: 'air + ether',
    one_liner: 'The moving dosha — wind, breath, nervous system. Light, dry, cold, mobile, subtle.',
    meaning: 'Vata is the Ayurvedic dosha governing all movement in the body — breath, blood flow, nerve impulses, peristalsis, thought itself. The Sanskrit root *vā* means "to blow, to move." Classical lineage: the Charaka Samhita (c. 100 CE) and Sushruta Samhita (c. 600 BCE) name Vata the king of the three doshas because the other two cannot move without it. Composed of *vayu* (air) and *akasha* (ether/space), it is light, dry, cold, mobile, rough, and subtle. When vata governs your constitution, you are quick, creative, inspired, easily distracted — and easily depleted.',
    physical_signs: 'Slender frame, thin bones, prominent joints, dry skin, dry hair, irregular digestion (constipation alternating with looseness), light sleep that breaks easily, cold hands and feet, variable energy across the day. Body weight comes and goes. Voice is light, fast, sometimes raspy.',
    mental_signs: 'Quick learning, quick forgetting. Mind is fast, imaginative, inspired — and prone to anxiety, worry, scatter, overwhelm. You think in jumps. Sleep is fragile; ideas come at 3am. Under stress, the racing mind speeds up further.',
    the_gift: 'Inspiration. Creativity. The capacity to see possibilities others cannot. Vata at its best is the visionary — fast, free, weightless, generative. The poet who writes through the night, the dancer who never stops moving, the scientist whose mind makes connections nobody else can.',
    the_shadow: 'Anxiety. Fear. Scatter. Burnout. When unbalanced, vata becomes thinness without grounding — racing thoughts, no sleep, constipation, dry skin, joints that crack and ache, the sense of being blown through life rather than walking it. Classical Ayurveda says nearly every chronic illness begins as unaddressed vata imbalance.',
    in_love: 'Quick to fall in love, slow to settle. You want stimulation, novelty, conversation, sky. The partners who ground you (often kapha-heavy) feel boring at first and essential later. Your nervous system wants warmth, weight, slowness, the same body in bed every night — even when your mind protests.',
    in_work: 'Brilliant at starting, struggles to finish. You need variety, autonomy, creative latitude. Office routine drains you. Solo work, creative roles, anything novel — vata thrives. The discipline trick is not more force, it is more rhythm: same hours, same desk, same lunch.',
    how_to_balance: 'Warm + heavy + oily + slow + same. Warm cooked foods (soups, stews, porridge — never raw cold salads in winter). Sesame oil self-massage (abhyanga) before bath. Same bedtime every night — 10pm latest, asleep by 10:30. Slow yoga (Surya Namaskar at half-speed; long-held forward folds). Nadi Shodhana pranayama (alternate-nostril) — the single most calming breath for vata. Less screens, less travel, less caffeine. Spices: ginger, cinnamon, cumin, cardamom, fennel. Avoid: dry crackers, popcorn, raw vegetables in winter, ice water, irregular meals.',
    pair_with_asana: 'Balasana (child\'s pose) — the universal vata pacifier. Long-held forward folds (Paschimottanasana). Supported Setu Bandha (bridge). Avoid: fast vinyasa, headstands when depleted, anything that increases mobility without grounding.',
    pair_with_pranayama: 'Nadi Shodhana (alternate-nostril breath) — the single most calming pranayama for the vata nervous system. Bhramari (humming bee) before sleep.',
    pair_with_chakra: 'Root chakra (Muladhara) — the missing weight, the missing earth-tone.',
    pair_with_chakra_slug: 'root',
    key_questions: [
      'Where in my life am I moving faster than my nervous system can sustain?',
      'What rhythm could I keep daily that would be more grounding than the next inspiration?',
      'Who in my life feels heavy and grounding — and have I been undervaluing them because they are not "exciting"?'
    ]
  },
  {
    slug: 'pitta',
    text: 'Pitta',
    sanskrit: 'पित्त',
    elements: 'fire + water',
    one_liner: 'The transforming dosha — digestion, metabolism, ambition. Hot, sharp, light, oily, liquid.',
    meaning: 'Pitta is the Ayurvedic dosha governing all transformation in the body — digestion of food, digestion of experience, digestion of light into vision, of words into meaning. The Sanskrit root *tap* means "to heat, to burn." Classical lineage: the Charaka Samhita (c. 100 CE) names pitta the *agni* (fire) that cooks every input the body takes in. Composed of *tejas* (fire) and a touch of *apas* (water), it is hot, sharp, light, oily, liquid, and slightly sour. When pitta governs your constitution, you are precise, ambitious, intelligent — and easily inflamed.',
    physical_signs: 'Medium frame, athletic build, warm body, ruddy or freckled skin (often acne-prone or with rashes), thinning or graying hair early, strong sharp digestion (rarely constipated, sometimes loose), excellent appetite — you get *hangry*. Sleep is sound but short. You sweat easily. Eyes are sharp, often light-colored, sometimes piercing.',
    mental_signs: 'Sharp intellect, sharp tongue. Pitta minds love to argue, analyze, optimize, win. Memory is precise. Under stress, the sharp turns to anger, criticism, perfectionism. You take things personally because everything feels personal — pitta is the dosha most invested in identity, achievement, being right.',
    the_gift: 'Discernment. The capacity to see clearly, decide quickly, lead with confidence. Pitta at its best is the wise leader, the brilliant surgeon, the precise teacher — fire that transforms without consuming. The lawyer who never loses a case, the chef whose timing is perfect, the founder who can hold a vision through obstacles.',
    the_shadow: 'Anger. Criticism. Inflammation. Burnout-by-overdrive. When unbalanced, pitta becomes fire without water — irritability that flashes at small things, perfectionism that allows no rest, skin rashes, ulcers, headaches, the conviction that everyone else is doing it wrong. Ayurveda treats most inflammatory conditions (acid reflux, IBS-D, eczema, rosacea, chronic anger) as pitta imbalance.',
    in_love: 'Intense. You commit hard, fight hard, love hard. You want a partner who can match your fire — and then resent them for matching it. The work is learning that softness is not weakness in a partner; that being the relaxed one sometimes is a gift. Watch the criticism — pitta tongue can sear what pitta heart most needs.',
    in_work: 'Born for leadership. You execute, deliver, optimize. Risk: working harder until you collapse, then resenting people who took breaks. The discipline trick for pitta is not more effort — it is permission to rest, the deliberate cultivation of *sukha* (ease), the radical practice of finishing the workday on time.',
    how_to_balance: 'Cool + sweet + bitter + astringent + slow. Cool foods (cucumber, coconut, sweet juicy fruit, leafy greens). Avoid: spicy, fried, sour, fermented (no chili, no vinegar, no alcohol on flare-up days). Coconut oil rather than sesame for abhyanga. Moon-bathing — literally sitting under moonlight cools pitta the way sun cools nobody. Sheetali pranayama (cooling tongue-curl breath). Slow swims. Forest walks. Avoid noon-sun midday workouts. Spices: coriander, fennel, mint, rose, cardamom. Most important balancer: deliberate slowness when you most want to push.',
    pair_with_asana: 'Chandra Namaskar (moon salutation) — pitta\'s antidote to the heating sun salute. Supta Baddha Konasana (reclined butterfly). Twisting poses (cool the liver, classical pitta organ). Avoid: hot yoga, vigorous power flows in summer, anything competitive.',
    pair_with_pranayama: 'Sheetali (cooling tongue-curl) and Sheetkari (cooling teeth-hiss) — the two pranayamas designed specifically for pitta. Nadi Shodhana also works.',
    pair_with_chakra: 'Solar plexus (Manipura) — the literal fire-center; pitta is most at home and most out of balance here.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'Where in my life am I working harder than the situation actually requires?',
      'What would it cost me to stop being right for an afternoon?',
      'When did I last rest *before* I needed to — not as recovery, but as preference?'
    ]
  },
  {
    slug: 'kapha',
    text: 'Kapha',
    sanskrit: 'कफ',
    elements: 'water + earth',
    one_liner: 'The stabilizing dosha — structure, immunity, love. Heavy, slow, cool, oily, smooth, dense.',
    meaning: 'Kapha is the Ayurvedic dosha governing all structure and lubrication in the body — bones, muscle mass, mucous membranes, joint fluid, the matter that holds you together. The Sanskrit root *ślish* means "to embrace, to hold." Classical lineage: the Charaka Samhita (c. 100 CE) names kapha the *ojas* (essence, vital reserve) that makes immunity, fertility, and steadiness possible. Composed of *apas* (water) and *prithvi* (earth), it is heavy, slow, cool, oily, smooth, dense, soft, and sweet. When kapha governs your constitution, you are steady, kind, patient, beloved — and easily stuck.',
    physical_signs: 'Larger frame, solid bones, smooth oily skin (rarely wrinkles), thick lustrous hair, slow steady digestion, deep restful sleep, strong endurance, slow gain or loss of weight. Cold-and-damp tendencies (chest congestion, allergies, slow morning warmup). Voice is deep, calm, melodic.',
    mental_signs: 'Slow to learn, slow to forget. Mind is steady, calm, loyal, compassionate. Memory is long. Under stress, kapha doesn\'t get anxious or angry — it gets heavy: depression, attachment, refusal to move, comfort-eating, scrolling for hours. Kapha minds are the most resilient and the most prone to long-form rumination.',
    the_gift: 'Love. The capacity to hold, to comfort, to remain. Kapha at its best is the patient teacher, the loyal friend, the steady parent — earth that nourishes without rush. The doctor with perfect bedside manner, the partner who is still there at year forty, the elder whose presence calms a room.',
    the_shadow: 'Stagnation. Attachment. Depression. Stuck-ness. When unbalanced, kapha becomes earth without movement — weight gain, mucus, lethargy, melancholy, holding onto people / objects / jobs long past their useful date. Ayurveda treats most damp-stagnant conditions (sinus congestion, obesity, slow metabolism, attachment-based grief, melancholic depression) as kapha imbalance.',
    in_love: 'You bond for life. You forgive almost everything. The partners who excite you (often vata-quick or pitta-sharp) wear you out at first and feel like home eventually. The work: not waiting too long. Kapha is the dosha most likely to stay in a relationship that ended emotionally five years ago because leaving is heavy. Movement, not comfort, is the kapha medicine in love.',
    in_work: 'Steady, reliable, loyal. You hold institutions together. Risk: staying in the same role too long because changing is heavy. The discipline trick for kapha is not more effort — it is *intentional disturbance*: take the new project, change the desk, walk the long way, accept the role that scares you slightly. Movement is the medicine.',
    how_to_balance: 'Warm + light + dry + spicy + early. Warm cooked foods, light grains (millet, quinoa, barley over wheat), pungent spices (black pepper, ginger, cayenne, mustard seed), bitter greens. Skip dairy on damp days. Wake by 6am — kapha\'s heaviest hours are 6-10am, the longer you sleep into them the heavier you feel all day. Vigorous movement before breakfast (the only dosha for which fasted cardio is unambiguously good). Dry-brush before shower (garshana). Kapalabhati and Bhastrika pranayama (the two heating breath-fires that move stuck kapha). Avoid: napping, ice cream, overeating, leftovers, sweet drinks. Most important balancer: deliberate stimulation when you most want to hibernate.',
    pair_with_asana: 'Surya Namaskar (sun salutation) at full speed — kapha\'s primary medicine. Backbends (Bhujangasana, Ushtrasana) to open the kapha-heavy chest. Twisting standing poses. Avoid: long supine rests in the morning, restorative-only practice, anything that increases stillness.',
    pair_with_pranayama: 'Kapalabhati (skull-shining breath) and Bhastrika (bellows breath) — the two heating pranayamas designed to dislodge stuck kapha. Practice in the morning, never before bed.',
    pair_with_chakra: 'Heart chakra (Anahata) and earth/root — kapha\'s home regions; balance work happens at the throat (Vishuddha) where stuck speech wants to move.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'Where in my life have I confused steadiness with stuckness?',
      'What relationship, role, or routine would I leave if I trusted the next thing to hold me?',
      'When did I last move my body hard enough to actually sweat — and how did I feel after?'
    ]
  }
]

const DOSHA_BY_SLUG: Record<string, DoshaGuide> = Object.fromEntries(DOSHAS.map((d) => [d.slug, d]))

export const DOSHA_SLUGS = DOSHAS.map((d) => d.slug)

export function isDoshaSlug(s: string): boolean {
  return s in DOSHA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const DOSHA_ACCENT: Record<string, { c1: string; c2: string; label: string; glyph: string }> = {
  vata: { c1: '#5a8ec6', c2: '#1c4a78', label: 'Air + Ether · the moving dosha', glyph: '🌬️' },
  pitta: { c1: '#d96a3a', c2: '#8a2818', label: 'Fire + Water · the transforming dosha', glyph: '🔥' },
  kapha: { c1: '#6a9a6a', c2: '#2a5828', label: 'Water + Earth · the stabilizing dosha', glyph: '🌱' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function doshaPageHTML(slug: string): string {
  const r = DOSHA_BY_SLUG[slug]
  if (!r) return ''
  const accent = DOSHA_ACCENT[r.slug] || { c1: '#888', c2: '#444', label: '', glyph: '✦' }
  const readingHref = `/gab44/reading?ref=dosha-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.sanskrit)}) Dosha — Signs, Gifts &amp; How to Balance · gab44 ✨`
  const description = `What ${r.text} (${r.elements}) actually means in Ayurveda. The lineage (Charaka Samhita, Sushruta Samhita), physical and mental signs, the gift, the shadow, in love, in work, how to balance with diet / asana / pranayama. Hand-written, lineage-honest, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Doshas', item: `${SITE_URL}/gab44/doshas` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/doshas/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} dosha — signs, gifts & how to balance`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/doshas/${slug}`,
        about: `${r.text} dosha, Ayurveda, ${r.elements}`
      }
    ]
  })

  const otherDoshasHtml = DOSHAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = DOSHA_ACCENT[q.slug] || { c1: '#888', c2: '#444', glyph: '✦' }
    return `<a class="ph-mini" href="/gab44/doshas/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${acc.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/doshas/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/doshas/${slug}" />
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
  .hero .sanskrit { font-size: 22px; opacity: 0.85; margin: 0 0 12px }
  .hero .elements { font-size: 14px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
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
  .other-doshas { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/doshas">doshas</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="sanskrit">${escapeHtml(r.sanskrit)}</p>
    <p class="elements">${escapeHtml(accent.label)}</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <section><h2>What ${escapeHtml(r.text)} actually means</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>Physical signs</h2><p>${escapeHtml(r.physical_signs)}</p></section>
  <section><h2>Mental &amp; emotional signs</h2><p>${escapeHtml(r.mental_signs)}</p></section>
  <section><h2>The gift</h2><p>${escapeHtml(r.the_gift)}</p></section>
  <section><h2>The shadow</h2><p>${escapeHtml(r.the_shadow)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>How to balance</h2><p>${escapeHtml(r.how_to_balance)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="/gab44/asanas"><span class="lbl">Asana</span>${escapeHtml(r.pair_with_asana)}</a>
      <a href="/gab44/pranayama"><span class="lbl">Pranayama</span>${escapeHtml(r.pair_with_pranayama)}</a>
      <a href="/gab44/chakras/${r.pair_with_chakra_slug}"><span class="lbl">Chakra</span>${escapeHtml(r.pair_with_chakra)}</a>
      <a href="/gab44/limbs"><span class="lbl">Yoga frame</span>The eight-limb path</a>
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
    <h3>Want a $9 reading that names your dosha alongside your chart?</h3>
    <p>Your Ayurvedic constitution + your sun, moon, rising, and houses — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="other-doshas">${otherDoshasHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 3 doshas · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function doshasIndexHTML(): string {
  const cards = DOSHAS.map((r) => {
    const acc = DOSHA_ACCENT[r.slug]
    return `<a class="card" href="/gab44/doshas/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.sanskrit)}</span></h3>
      <p class="el">${escapeHtml(acc.label)}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = 'The 3 Doshas — Vata, Pitta, Kapha · Find Your Ayurvedic Constitution · gab44 ✨'
  const description = 'Hand-written guides to the three Ayurvedic doshas — vata (air+ether), pitta (fire+water), kapha (water+earth). Lineage from Charaka Samhita and Sushruta Samhita. Signs, gifts, shadow, how to balance with food, yoga, pranayama.'

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/doshas" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 880px; margin: 0 auto; padding: 32px 22px 80px }
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
    --c1:#888; --c2:#444;
    display: block; padding: 22px 18px; border-radius: 14px;
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); text-decoration: none;
    box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    transition: transform 0.15s ease;
  }
  .card:hover { transform: translateY(-2px) }
  .card .glyph { font-size: 36px; line-height: 1 }
  .card h3 { margin: 10px 0 4px; font-size: 22px }
  .card h3 .san { font-size: 15px; opacity: 0.78; margin-left: 6px }
  .card .el { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; opacity: 0.78; margin: 0 0 8px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ doshas</nav>
  <h1>The 3 <span class="accent">Doshas</span> — find your Ayurvedic constitution</h1>
  <p class="sub">The medical-philosophical frame that the entire yogic body-practice quadrant sits inside. From the Charaka Samhita (c. 100 CE). Read your own constitution. Read the dosha out of balance.</p>

  <div class="intro">
    <h3>How to find your dosha</h3>
    <p><strong>Frame.</strong> Thin and bony → vata. Medium and athletic → pitta. Solid and substantial → kapha.</p>
    <p><strong>Digestion.</strong> Irregular, gassy → vata. Sharp, sometimes loose, always hungry → pitta. Slow, steady, rarely hungry → kapha.</p>
    <p><strong>Sleep.</strong> Light, broken, vivid dreams → vata. Sound but short → pitta. Deep, long, hard to wake → kapha.</p>
    <p><strong>Under stress.</strong> You worry → vata. You criticize → pitta. You withdraw and eat → kapha.</p>
    <p>Most people are a blend of two with one dominant. The dosha to balance is the one currently out of balance — usually whichever feels most loud right now. Click below for the deep guide.</p>
  </div>

  <div class="grid">${cards}</div>

  <div class="reading-strip">
    <h2>Want your dosha read alongside your chart?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading combines your Ayurvedic constitution with sun/moon/rising — the way these systems talk. <a href="/gab44/reading?ref=doshas-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · lineage-honest · 3 doshas · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}
