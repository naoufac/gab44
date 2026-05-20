// Kleshas — Patanjali's 5 yogic afflictions — SEO funnel.
// /gab44/kleshas (index) + /gab44/kleshas/{slug}.
//
// 5 hand-written klesha guides — the obstacles Yoga Sutra II.3-II.9 names as
// the source of suffering. Natural ground-level peer to /gab44/yamas-niyamas
// (the 10 ethics, YS 2.30-2.45): the kleshas are what you see, the ethics are
// what you practice in response.
//
// Two-family taxonomy:
//  - Root (avidya) = indigo-violet — the master ignorance from which all
//    other kleshas grow. YS 2.4 names it explicitly: avidya is the field;
//    the other four are its crops.
//  - Branches (asmita, raga, dvesha, abhinivesha) = saffron-amber — the four
//    derived afflictions: ego, attachment, aversion, fear of death.

import { SITE_URL } from '@/lib/identity'

export interface KleshaGuide {
  slug: string
  text: string
  sanskrit: string
  sutra: string
  family: 'root' | 'branch'
  position: number
  one_liner: string
  meaning: string
  what_it_looks_like: string
  in_love: string
  in_work: string
  the_gift: string
  the_shadow: string
  the_remedy: string
  pair_with_ethic: string
  pair_with_ethic_slug: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  key_questions: [string, string, string]
}

export const KLESHAS: KleshaGuide[] = [
  {
    slug: 'avidya',
    text: 'Avidya',
    sanskrit: 'अविद्या',
    sutra: 'YS 2.4-2.5 · "Avidya is the field for the others — the seeing of the impermanent as permanent, the impure as pure, suffering as joy, the non-self as self."',
    family: 'root',
    position: 1,
    one_liner: 'The root klesha. Mistaking the impermanent for the permanent, the body for the self, the surface for the truth. The master ignorance from which the other four afflictions grow.',
    meaning: 'Avidya (a-vidya, "not-seeing") is the foundational klesha in Patanjali\'s Yoga Sutra II.3-II.5. Vyasa\'s 5th-century commentary names it the *kshetra* — the field — and the other four kleshas the crops that grow in it. The classical definition (YS 2.5): seeing the impermanent (*anitya*) as permanent, the impure (*ashuchi*) as pure, the painful (*duhkha*) as pleasurable, the not-self (*anatman*) as self. This is not stupidity — it is the structural misperception every conditioned mind operates under until it is disrupted by practice, by grief, by grace. The Buddhist tradition uses the same term (Pali *avijja*) as the first link in the chain of dependent origination. Avidya is what the eight limbs were designed to dissolve.',
    what_it_looks_like: 'You treat the relationship as permanent and are shocked when it ends. You build your identity on the body and panic when it ages. You mistake the emotion for the truth ("I feel abandoned, therefore I am abandoned"). You take the thought-stream as your actual self. You forget, again and again, that everything you can name will one day be gone — and then you live as though the next thing matters more than the breath you are taking now.',
    in_love: 'Avidya in love is the conviction that *this* relationship will not change — that the partner you fell for is the partner you will always have, that the way you feel today is the way you will feel forever. When the change comes (and it does), avidya reads it as betrayal rather than as the nature of all conditioned things. The work is not to love less; the work is to love this person, today, knowing the form will shift.',
    in_work: 'Avidya in work is the unconscious assumption that the job, the role, the company, the income is the *self*. When the role ends, you do not just grieve the role — you grieve as though the self has ended, because you confused them. The wise professional treats every role as something they are doing, not something they are. The unwise one treats their LinkedIn as their soul.',
    the_gift: 'Avidya is the most fertile klesha to work on because every dissolution of avidya is also a dissolution of all four other kleshas at once. Each time you see clearly — that the body is impermanent, that the emotion is not the truth, that the I-thought is just a thought — the ego loosens (asmita), the grasping softens (raga), the aversion lightens (dvesha), the fear of death thins (abhinivesha). The whole field clears.',
    the_shadow: 'Performative non-attachment. The student who has read enough yoga philosophy to *say* "everything is impermanent" while still gripping the partner, the role, the body, the income with both hands. Avidya pretending to be vidya is its own subtler avidya. The actual practice is humble: notice, again, where you forgot. Not perform the seeing — actually see.',
    the_remedy: 'Svadhyaya (self-study, the 9th of the yamas/niyamas) is the direct antidote — read the source texts, watch the mind, name the patterns. The other limb-level practices that dissolve avidya: dhyana (meditation that lets the mind settle until the layers separate), pratyahara (sense-withdrawal that interrupts the automatic identification with input), and the felt-sense practice of asana itself, which by repeated direct experience teaches you the body is not who you are.',
    pair_with_ethic: 'Svadhyaya — self-study, the 9th niyama. The direct antidote to avidya: read the source texts, watch your own patterns, see what you have been blind to.',
    pair_with_ethic_slug: 'svadhyaya',
    pair_with_chakra: 'Third eye (Ajna) — the seeing-chakra; avidya is exactly the wound to this center; ajna-work opens the eye that avidya kept closed.',
    pair_with_chakra_slug: 'third-eye',
    key_questions: [
      'Where in my life am I treating something impermanent as though it will last forever — and what would change if I let myself feel its fragility?',
      'What belief about myself have I confused with the actual self I am — a role, an emotion, a body, a thought?',
      'When was the last time I sat still long enough for the mind-layers to separate, so I could see what is actually here behind the story?'
    ]
  },
  {
    slug: 'asmita',
    text: 'Asmita',
    sanskrit: 'अस्मिता',
    sutra: 'YS 2.6 · "Asmita is the identification of the seer with the instrument of seeing as one and the same."',
    family: 'branch',
    position: 2,
    one_liner: 'The ego-klesha. Confusing the witness (the seer) with the thoughts, feelings, body, and mind it observes (the instrument). The I-thought taken as the I.',
    meaning: 'Asmita (literally "I-am-ness") is the second klesha, defined in YS 2.6 as the collapse of the seer (*purusha*, pure consciousness) into the instrument of seeing (*prakriti*, the mind-body apparatus). When awareness identifies with the contents of awareness, asmita is born. Vyasa\'s commentary calls it the *eka-atmata-iva* — the *as-if-oneness* — the structural confusion that makes the witness say "I am angry" rather than "anger is being witnessed." Modern teachers (Krishnamacharya, Desikachar, Iyengar) all flag asmita as the most subtle klesha because it underwrites every story the self tells about itself.',
    what_it_looks_like: 'You are insulted and instantly defensive — the criticism landed because you took yourself to be the thing being criticized. You receive praise and inflate; you receive blame and contract. You confuse your achievements with your worth. You spend hours rehearsing what you should have said to win the argument, because the argument is happening *to you* — there is no distance between you and the argument. The I-thought has eaten the witness.',
    in_love: 'Asmita in love is the partner taking everything personally. They did not call back not because they were tired but *because of me*. The traffic is bad *to me*. The mood in the room is *about me*. The relationship cannot rest because the ego cannot rest. The work is to let the partner have their own weather — to notice that 90% of what feels personal was already there before you arrived in the room.',
    in_work: 'Asmita in work is the founder who cannot separate the company from their identity. When the company struggles, the body struggles; when an investor passes, the self has been rejected. The successful long-arc operator learns to do excellent work while holding the work loosely — the work is *what they do*, not *who they are*. This is the single hardest move for any ambitious person.',
    the_gift: 'Asmita is what makes individuation possible. Without some sense of "I," the human cannot act, choose, love, or create. Patanjali is not naming asmita to dissolve the self into a featureless soup — he is naming it so the practitioner can know the difference between the *functional ego* (necessary, useful, transparent) and the *identified ego* (sticky, defensive, suffering). The gift of working with asmita is a self that holds its own shape without grasping for it.',
    the_shadow: 'Spiritual bypass disguised as ego-death. The practitioner who reads two books and announces "I have no ego" usually has the most reactive ego in the room, just better hidden. Asmita does not disappear by being named; it dissolves slowly through pratyahara, dhyana, and the practice of catching the I-thought, again, after it has already claimed the next thing.',
    the_remedy: 'Ahimsa toward the self (the 1st yama, non-violence) is the underrated antidote: you cannot witness the ego compassionately while attacking it. Dhyana (the 7th limb, meditation) is the direct work — sit until the witness separates from the witnessed. The body practices (asana + pranayama) loosen identification with the body, which is the densest layer of asmita.',
    pair_with_ethic: 'Ahimsa — non-violence, the 1st yama. Asmita cannot soften under attack, even (especially) when the attack is internal; meet the I-thought with kindness, not war.',
    pair_with_ethic_slug: 'ahimsa',
    pair_with_chakra: 'Solar plexus (Manipura) — the literal seat of personal will and identity in the yogic body; manipura-work is asmita-work made visible.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'Where in my life did something happen *near* me that I instantly read as happening *to* me — and what would shift if I let it be weather instead of message?',
      'What achievement, role, or relationship am I currently using as proof of who I am — and what would be left if it were taken away?',
      'When was the last time I caught the I-thought arising and let it pass without grabbing it, just once, before identifying again?'
    ]
  },
  {
    slug: 'raga',
    text: 'Raga',
    sanskrit: 'राग',
    sutra: 'YS 2.7 · "Raga is the pull that follows pleasure."',
    family: 'branch',
    position: 3,
    one_liner: 'The attachment-klesha. The mind\'s reflex to chase, hoard, and recreate what once gave pleasure. Not desire itself — the *clinging* to remembered pleasure.',
    meaning: 'Raga (literally "coloring," "tint," "passion") is defined in YS 2.7 as *sukha-anushayi raga* — the clinging that *follows* (anushayi) pleasure (sukha). The clinging is the klesha, not the pleasure. Vyasa\'s commentary clarifies: when something pleases the mind once, a residue (samskara) is laid down, and the mind reflexively grasps to recreate the pleasure or to keep the source nearby. The Buddhist parallel is *tanha* (craving), one of the four noble truths. Modern teachers warn that raga is the most socially-rewarded klesha — consumer culture is built on it — so it is the hardest to even *see* as a problem.',
    what_it_looks_like: 'You order the same coffee, the same way, every morning, and feel a small contraction if it is wrong. You replay the good memory until it loses its edge. You buy the thing, get the rush of having it, and then notice the next thing. You keep the relationship past its useful date because the early-stage pleasure-memory keeps re-firing. You scroll, swipe, click — each tiny dopamine hit is raga in micro-form.',
    in_love: 'Raga in love is the partner who is in love with *being in love* — chasing the limerence-feeling rather than the actual person. When the brain-chemistry of new love fades (it always does, at about 18-24 months), raga reads this as "we have fallen out of love" rather than "the early-stage pleasure-pattern is complete; mature love begins now." Raga is what makes serial early-romance people; the work is to stay through the chemical shift and find the love that survives it.',
    in_work: 'Raga in work is the founder who cannot let go of the early-product-market-fit story even when the market has moved. The teacher who keeps teaching the curriculum that worked ten years ago. The professional who returns to the same kind of role over and over because the *feeling* of that role was once good. The healthy version of work asks: what is the next right move? Raga asks: what *felt* good?',
    the_gift: 'Raga points at what your body has loved — and that information matters. Followed honestly, it tells you what nourishes you. The work is not to extinguish raga but to relate to it skillfully: notice the pull, name the pull, decide consciously whether to follow it. Pleasure itself is not the problem; the unexamined chase is.',
    the_shadow: 'Renunciation-aesthetic without renunciation-substance. The student who renounces sugar, alcohol, and social media — and replaces all three with the cleaner-than-thou superiority that *feels exactly like raga underneath*. Real work on raga is humble: you keep getting pulled, you keep noticing, you keep choosing. The pull does not disappear; the unconscious obedience does.',
    the_remedy: 'Aparigraha (the 5th yama, non-grasping) is the direct ethical practice. Pratyahara (the 5th limb, sense-withdrawal) is the direct meditative practice — interrupt the input, let the mind notice it is generating pleasure-grasping continuously, watch the pattern. The strongest practice for raga is fasting from one beloved input for a week and watching how loud the mind gets in the silence.',
    pair_with_ethic: 'Aparigraha — non-grasping / non-hoarding, the 5th yama. The direct ethical antidote: practice loosening the grip on what gives pleasure, again and again.',
    pair_with_ethic_slug: 'aparigraha',
    pair_with_chakra: 'Sacral (Svadhisthana) — the pleasure-and-sensation chakra; sacral-work is the body-level practice of relating to pleasure without clinging.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What am I chasing today because of how it felt the first time — and is the actual present-moment thing still nourishing, or am I chasing the memory?',
      'Where in my life is the pleasure-pattern eating the relationship, role, or practice it was originally serving?',
      'If I went a week without my most-cherished input — coffee, screens, sweet food, a particular person — what would the silence underneath actually have to teach me?'
    ]
  },
  {
    slug: 'dvesha',
    text: 'Dvesha',
    sanskrit: 'द्वेष',
    sutra: 'YS 2.8 · "Dvesha is the push that follows pain."',
    family: 'branch',
    position: 4,
    one_liner: 'The aversion-klesha. The mind\'s reflex to flee, push away, and avoid whatever caused pain. The mirror-twin of raga: same clinging, opposite vector.',
    meaning: 'Dvesha (literally "hatred," "aversion," "repulsion") is defined in YS 2.8 as *duhkha-anushayi dvesha* — the clinging that *follows* (anushayi) suffering (duhkha). The grammar is identical to raga; only the polarity reverses. Once a thing has been painful, the mind lays down a samskara of avoidance, and from then on it pushes the thing away — sometimes the thing itself, more often anything that resembles it, often by association so loose the conscious mind cannot trace it. Vyasa: the aversion is not the pain; the pain has passed. The klesha is the leftover repulsion that organizes future behavior.',
    what_it_looks_like: 'You cross the street to avoid the person you fell out with three years ago. You will not eat the food that made you sick once, decades later. You feel a contraction at the sound of a song that played during a hard breakup. You criticize the entire category — all bosses, all exes, all therapists — because one of them once hurt you. You build a life carefully shaped around what you are no longer willing to feel.',
    in_love: 'Dvesha in love is the partner who is unconsciously screening every new person against the wound left by the last one. The unavailable-parent pattern, the cheating-ex pattern, the cold-mother pattern — dvesha keeps the file open, looking for matches, and pushes away anyone who triggers a near-match before the actual person can be met. The work is to feel the old pain enough that the file can close — then the new person can arrive as themselves.',
    in_work: 'Dvesha in work is the founder who will *never* go back to that vertical because of one bad experience; the writer who will *never* pitch that editor again; the engineer who categorically refuses the tool that once burned them. Often the dvesha is older than the current self — a 25-year-old refusing what hurt the 13-year-old. The price is a shrinking world. The remedy is not heroic exposure; it is curiosity about why the door is closed.',
    the_gift: 'Dvesha is the body\'s honest memory of what once hurt — and that information matters. It keeps you from putting your hand back on the stove. The work is the same as with raga: notice the push, name the push, decide consciously whether to follow it. Some aversions are wisdom; some are old fear in adult clothing. Practice teaches the difference.',
    the_shadow: 'Dvesha disguised as discernment. The practitioner who frames every aversion as principled boundary, every grudge as healthy limit. There is a real practice of boundaries; there is also a long, expensive habit of calling old fear by the name of wisdom. The honest question is: am I closing this door because I have outgrown what was behind it, or because I have not yet metabolized what hurt me there?',
    the_remedy: 'Karuna (compassion) toward the part of self that flinches, paired with santosha (contentment, the 7th niyama) toward what is present. Meet the aversion with curiosity rather than obedience. Asana practice that asks the body to stay one breath longer in the pose you do not like is small-scale dvesha-practice. So is the slow, patient return to the difficult conversation you have been avoiding.',
    pair_with_ethic: 'Santosha — contentment, the 7th niyama. The direct antidote: practice meeting what is here (including what you would push away) without organizing your life around its absence.',
    pair_with_ethic_slug: 'santosha',
    pair_with_chakra: 'Heart (Anahata) — the chakra most armored by dvesha; heart-work is exactly the practice of letting in what you have been keeping out.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What am I currently avoiding that the present situation does not actually require me to avoid — only the old wound does?',
      'Where in my life is a categorical "never" — never that food, never that kind of person, never that conversation — and whose voice is the never in, the adult self or the wounded child?',
      'If I sat with the original pain underneath this aversion for one full breath today, without trying to fix it, what would loosen?'
    ]
  },
  {
    slug: 'abhinivesha',
    text: 'Abhinivesha',
    sanskrit: 'अभिनिवेश',
    sutra: 'YS 2.9 · "Abhinivesha is the clinging to life — sustained even in the wise, by its own momentum."',
    family: 'branch',
    position: 5,
    one_liner: 'The fear-of-death klesha. The fifth and deepest affliction — the cellular clinging to continued existence that persists even after the other four have softened, even in the realized practitioner.',
    meaning: 'Abhinivesha (literally "leaning forward into," "tenacious holding-on") is defined in YS 2.9 as *svarasa-vahi vidushah api tatha rudhah* — flowing by its own taste, sustained (rudhah) even in the wise (vidushah). This is the most striking line in the kleshas chapter: Patanjali names this fifth affliction as the one that *the realized practitioner still carries.* It is biological, somatic, pre-rational — the body\'s grip on continuing. Vyasa\'s commentary points to its universality: every being, from insect to saint, recoils from death. The yogic practice is not the elimination of abhinivesha (impossible while embodied) but the conscious relationship with it: knowing the cling is there, not letting it run the show.',
    what_it_looks_like: 'You panic when the plane shakes. You cannot tolerate the small sensation that something might be physically wrong. You avoid old friends who are dying because their presence feels too close to the edge. You optimize health, diet, supplements, longevity protocols past the point of usefulness — abhinivesha wearing a self-care mask. You build a life that, looked at honestly, is mostly organized around postponing the inevitable.',
    in_love: 'Abhinivesha in love is the partner who cannot bear to be apart, because absence carries a whisper of permanent absence. The terror in your throat when they are an hour late. The pre-emptive ending of relationships because *not knowing when they will leave* is more unbearable than leaving first. Underneath every fear of abandonment is the older, cellular fear of disappearing. To love well is to feel this fear and stay anyway.',
    in_work: 'Abhinivesha in work is the workaholic compounding hours against the silence — if I keep producing, I am proof I exist. It is the legacy-obsession of the late-career operator: monuments, foundations, named buildings. There is honorable work in the world; there is also work that is mostly the body\'s plea: *not yet, not yet*. The honest professional learns to feel the plea, hold it tenderly, and still go home at six.',
    the_gift: 'Abhinivesha keeps you alive. It is the survival-instinct made conscious — the part of you that flinches from the cliff, that pulls your hand from the flame, that wakes you when you stop breathing. Patanjali is not naming abhinivesha to shame it; he is naming it so you can stop being run by it unconsciously. The mature relationship: thank the fear, listen to the fear, decline to let the fear be the only voice at the table.',
    the_shadow: 'Spiritual-bypass-around-death. The practitioner who says "I am not afraid to die" while organizing every choice around staying. The wellness-industry that frames longevity practice as enlightenment when it is mostly abhinivesha wearing matcha-colored clothes. Honest practice with abhinivesha does not erase the fear; it makes the fear sayable. *Yes, I am afraid. And — what do I want to do today anyway?*',
    the_remedy: 'Ishvara-pranidhana (the 10th niyama, surrender to a greater whole) is the direct ethical-spiritual antidote: a life lived in relationship to something larger than its own duration. Maranasati (Buddhist death-awareness practice, the sister tradition\'s parallel) — contemplating impermanence and mortality at intervals, not as morbidity but as clarifier. Tonglen-style heart-practice for those who are dying. The deepest practice: do the thing that scares you because you might not get to do it later.',
    pair_with_ethic: 'Ishvara-pranidhana — surrender to a greater whole, the 10th niyama. The direct antidote: a life held in relationship to something larger than its own duration.',
    pair_with_ethic_slug: 'ishvara-pranidhana',
    pair_with_chakra: 'Root (Muladhara) — the survival-chakra; abhinivesha is exactly the wound to muladhara made explicit; root-work is fear-of-existence-work, made bodily.',
    pair_with_chakra_slug: 'root',
    key_questions: [
      'What in my life am I doing primarily to postpone the inevitable — and what would I do instead if I trusted I had enough time today?',
      'Where in my closest relationships does the fear of losing them keep me from being fully present with them while they are here?',
      'If I sat with my own mortality, gently and seriously, for ten minutes today, what choice currently on my desk would simplify?'
    ]
  }
]

const KLESHA_BY_SLUG: Record<string, KleshaGuide> = Object.fromEntries(KLESHAS.map((k) => [k.slug, k]))

export const KLESHA_SLUGS = KLESHAS.map((k) => k.slug)

export function isKleshaSlug(s: string): boolean {
  return s in KLESHA_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const KLESHA_ACCENT: Record<string, { c1: string; c2: string; label: string; glyph: string }> = {
  avidya:      { c1: '#6a5aa0', c2: '#2e2566', label: 'Root klesha · the master ignorance', glyph: '🌑' },
  asmita:      { c1: '#d6a445', c2: '#8a5a18', label: 'Branch klesha · the I-am-ness', glyph: '🪞' },
  raga:        { c1: '#d8746a', c2: '#8a2a28', label: 'Branch klesha · the pull of pleasure', glyph: '🌹' },
  dvesha:      { c1: '#5a7a8a', c2: '#1c3a4a', label: 'Branch klesha · the push of pain', glyph: '🗡️' },
  abhinivesha: { c1: '#3a4858', c2: '#101820', label: 'Branch klesha · the clinging to life', glyph: '🕯️' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function kleshaPageHTML(slug: string): string {
  const r = KLESHA_BY_SLUG[slug]
  if (!r) return ''
  const accent = KLESHA_ACCENT[r.slug] || { c1: '#888', c2: '#444', label: '', glyph: '✦' }
  const readingHref = `/gab44/reading?ref=klesha-${slug}`

  const title = `${escapeHtml(r.text)} (${escapeHtml(r.sanskrit)}) — Patanjali's ${r.position === 1 ? 'Root' : 'Branch'} Klesha · ${r.position}/5 · gab44 ✨`
  const description = `What ${r.text} (${r.sanskrit}) actually means in Patanjali's Yoga Sutra ${r.sutra.split(' · ')[0]}. The lineage, what it looks like, in love, in work, the gift, the shadow, the direct remedy. Hand-written, source-text-honest, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Kleshas', item: `${SITE_URL}/gab44/kleshas` },
          { '@type': 'ListItem', position: 3, name: r.text, item: `${SITE_URL}/gab44/kleshas/${slug}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${r.text} — Patanjali's ${r.position}/5 klesha`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/kleshas/${slug}`,
        about: `${r.text} klesha, Patanjali Yoga Sutra, yogic affliction`
      }
    ]
  })

  const otherKleshasHtml = KLESHAS.filter((q) => q.slug !== slug).map((q) => {
    const acc = KLESHA_ACCENT[q.slug] || { c1: '#888', c2: '#444', glyph: '✦' }
    return `<a class="ph-mini" href="/gab44/kleshas/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${acc.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/kleshas/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/kleshas/${slug}" />
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
  .hero .family { font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.92; font-style: italic }
  .sutra-box {
    margin: 18px 0 22px; padding: 18px 20px;
    background: var(--bg-2); border-left: 3px solid var(--c1);
    border-radius: 6px; font-size: 14px; color: var(--fg-dim); font-style: italic;
  }
  .sutra-box strong { font-style: normal; color: var(--fg); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; display: block; margin-bottom: 6px; font-weight: 600 }
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
  .other-kleshas { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/kleshas">kleshas</a> ✦ ${escapeHtml(r.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(r.text)}</h1>
    <p class="sanskrit">${escapeHtml(r.sanskrit)}</p>
    <p class="family">${escapeHtml(accent.label)} · ${r.position} of 5</p>
    <p class="one-liner">${escapeHtml(r.one_liner)}</p>
  </header>

  <div class="sutra-box"><strong>Source · Yoga Sutra</strong>${escapeHtml(r.sutra)}</div>

  <section><h2>What ${escapeHtml(r.text)} actually means</h2><p>${escapeHtml(r.meaning)}</p></section>
  <section><h2>What it looks like in daily life</h2><p>${escapeHtml(r.what_it_looks_like)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(r.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(r.in_work)}</p></section>
  <section><h2>The gift</h2><p>${escapeHtml(r.the_gift)}</p></section>
  <section><h2>The shadow</h2><p>${escapeHtml(r.the_shadow)}</p></section>
  <section><h2>The direct remedy</h2><p>${escapeHtml(r.the_remedy)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="/gab44/yamas-niyamas/${r.pair_with_ethic_slug}"><span class="lbl">Ethic · antidote</span>${escapeHtml(r.pair_with_ethic)}</a>
      <a href="/gab44/chakras/${r.pair_with_chakra_slug}"><span class="lbl">Chakra</span>${escapeHtml(r.pair_with_chakra)}</a>
      <a href="/gab44/yamas-niyamas"><span class="lbl">10 ethics</span>The yamas + niyamas — what to practice</a>
      <a href="/gab44/limbs"><span class="lbl">8 limbs</span>The Ashtanga path of dissolution</a>
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
    <h3>Want a $9 reading that names the klesha currently running you?</h3>
    <p>Your chart + the klesha-pattern most active in this chapter of your life — read together, by hand.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <div class="other-kleshas">${otherKleshasHtml}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · Patanjali's 5 kleshas · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function kleshasIndexHTML(): string {
  const cards = KLESHAS.map((r) => {
    const acc = KLESHA_ACCENT[r.slug]
    return `<a class="card" href="/gab44/kleshas/${r.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${r.position} / 5</div>
      <h3>${escapeHtml(r.text)} <span class="san">${escapeHtml(r.sanskrit)}</span></h3>
      <p class="fam">${escapeHtml(acc.label)}</p>
      <p class="lead">${escapeHtml(r.one_liner)}</p>
    </a>`
  }).join('\n      ')

  const title = "The 5 Kleshas — Patanjali's Yogic Afflictions · YS 2.3-2.9 · gab44 ✨"
  const description = "Hand-written guides to Patanjali's 5 kleshas — avidya (ignorance), asmita (ego), raga (attachment), dvesha (aversion), abhinivesha (fear of death). Yoga Sutra II.3-II.9. The obstacles the eight limbs were designed to dissolve."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/kleshas" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 920px; margin: 0 auto; padding: 32px 22px 80px }
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
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ kleshas</nav>
  <h1>The 5 <span class="accent">Kleshas</span> — Patanjali's yogic afflictions</h1>
  <p class="sub">Yoga Sutra II.3-II.9. The five obstacles the eight limbs were designed to dissolve. Where the yamas + niyamas are what you <em>practice</em>, the kleshas are what you <em>see</em> — the suffering-patterns the practice meets.</p>

  <div class="intro">
    <h3>How to read this map</h3>
    <p><strong>One root, four branches.</strong> Patanjali names avidya — ignorance, the seeing of the impermanent as permanent — as the field (<em>kshetra</em>) from which the other four kleshas grow as crops. Soften avidya and all five soften together.</p>
    <p><strong>The four branches.</strong> Asmita (ego, the I-am-ness that mistakes the witness for the witnessed), raga (the pull that follows pleasure), dvesha (the push that follows pain), abhinivesha (the cellular clinging to continued existence — the fifth and deepest, present even in the wise).</p>
    <p><strong>How to use this funnel.</strong> Read the klesha most loud in your life right now. Each page names the source-sutra, what the klesha looks like in daily life, in love, in work — the gift, the shadow, and the direct ethical antidote from the yamas + niyamas funnel.</p>
  </div>

  <div class="grid">${cards}</div>

  <div class="reading-strip">
    <h2>Want your chart read through the kleshas?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading names the klesha currently most active in your chapter alongside sun/moon/rising. <a href="/gab44/reading?ref=kleshas-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-text-honest · 5 kleshas (YS 2.3-2.9) · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}
