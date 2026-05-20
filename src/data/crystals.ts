// Zodiac Crystals & Birthstones SEO funnel — /gab44/crystals (index) +
// /gab44/{sign}/crystals (12 pages). Targets evergreen high-volume keywords:
// "best crystals for {sign}", "{sign} birthstone", "what crystal should i wear
// for my zodiac sign", "{sign} healing stones". Hand-written ~600-word pages.
// Each routes to $9 reading via ?ref=crystals-{sign}, AND cross-promotes the
// healing audio at /healing — first SEO surface that links to BOTH revenue
// lanes (Phase 1A affiliate + Phase 1D paid reading).

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'
import { ZODIAC_META } from './zodiac'

export interface CrystalProfile {
  primary: string         // primary stone (the "anchor")
  secondary: string       // a softer companion
  tertiary: string        // the "shadow worker" — hard moments
  birthstone: string      // traditional birthstone for this season
  primary_reason: string  // why the primary stone matches
  secondary_reason: string
  tertiary_reason: string
  practice: string        // how to use the stones
  caution: string         // traps to avoid
}

export const CRYSTALS: Record<Sign, CrystalProfile> = {
  aries: {
    primary: 'Carnelian',
    secondary: 'Bloodstone',
    tertiary: 'Hematite',
    birthstone: 'Diamond (April) / Aquamarine (March)',
    primary_reason: 'Carnelian is fire stone made conscious — it carries the orange-red of action, courage, and clean ambition. Aries already runs hot; carnelian doesn\'t add fuel, it focuses the existing flame so it lands instead of scattering. Worn at the heart or pocketed before a hard conversation, it gives the warrior energy a target.',
    secondary_reason: 'Bloodstone is the warrior\'s companion — it tempers anger without dulling courage. Where carnelian is the spark, bloodstone is the shield. Carry it when the Aries fire is in danger of becoming reactive: family arguments, road rage, the moment your boss says no.',
    tertiary_reason: 'Hematite is the grounding cord. Aries lives 80% in the head and the will, which is why exhaustion ambushes them. Hematite at the feet (a small piece in the shoe, or held while standing barefoot) drops the energy back into the body and prevents burnout-by-overdrive.',
    practice: 'Morning carnelian to set a clear intention for the day; bloodstone in the pocket through any high-stakes meeting; hematite in the evening to discharge the day\'s fire and let sleep land. The Aries crystal kit is small, intense, and active — no large altar, just three stones that travel.',
    caution: 'Aries can collect stones the way they collect projects — many, briefly. Three real crystals worked steadily will outperform thirty unused ones. Don\'t let the kit become another performance.'
  },
  taurus: {
    primary: 'Rose Quartz',
    secondary: 'Emerald',
    tertiary: 'Smoky Quartz',
    birthstone: 'Emerald (May) / Diamond (April)',
    primary_reason: 'Rose quartz is Venus in stone form, and Taurus is ruled by Venus. Where many signs need rose quartz to learn self-love, Taurus needs it to keep the heart soft when their famous stubbornness threatens to harden into something colder. A rose quartz in the bedroom is not optional for Taurus — it\'s maintenance.',
    secondary_reason: 'Emerald is the May birthstone for a reason: it\'s the stone of fidelity, abundance, and the long quiet love that doesn\'t need to advertise itself. Wear emerald (or green tourmaline if emerald is out of budget) when the relationship feels like work — it reminds the Taurus heart why it chose to stay.',
    tertiary_reason: 'Smoky quartz absorbs the slow-building resentment Taurus is famous for. The bull doesn\'t blow up — they archive grievances, sometimes for years. Smoky quartz on the desk (or held during journaling) lets the buried frustrations surface and clear before they calcify into a relationship-ending decision.',
    practice: 'Rose quartz on the bedside table; emerald or green tourmaline as a daily wear (ring or pendant); smoky quartz at the journaling spot. The Taurus altar is permanent and tactile — not the traveling kit of an Aries, but a steady home altar that the bull tends.',
    caution: 'Taurus loves beautiful objects, which means crystal collecting can become luxury hoarding. The point is the inner shift, not the shelf. Three working stones over thirty admired ones.'
  },
  gemini: {
    primary: 'Citrine',
    secondary: 'Blue Lace Agate',
    tertiary: 'Lepidolite',
    birthstone: 'Pearl (June) / Agate (May)',
    primary_reason: 'Citrine is yellow joy in mineral form, which matches the Gemini default operating system: bright, curious, fast. But citrine also concentrates scattered energy into a useable beam — it helps Gemini finish the thing they keep almost-finishing. Carry citrine at writing time, study time, the deep-focus stretch of any project.',
    secondary_reason: 'Blue lace agate calms the throat chakra, and Gemini is a throat-driven sign — they think out loud, talk too fast, sometimes say things they regret three days later. Blue lace agate worn at the throat (pendant, or held to the throat for 30 seconds before a hard conversation) slows the speech down without dulling the wit.',
    tertiary_reason: 'Lepidolite is for the Gemini nervous system. The fast mind comes with anxiety as a side effect — the racing thoughts at 3am, the social-overstimulation crash. Lepidolite (which contains natural lithium) under the pillow or held during meditation gentles the nervous system without sedating it.',
    practice: 'Citrine on the desk during deep work; blue lace agate as everyday jewelry; lepidolite by the bed. The Gemini kit is verbal-cognitive — it tunes the instrument the sign uses most.',
    caution: 'Gemini will research crystals to death, learn every property, post about them, and own none. Buy three. Use them. The reading comes from the relationship, not the encyclopedia.'
  },
  cancer: {
    primary: 'Moonstone',
    secondary: 'Selenite',
    tertiary: 'Pearl',
    birthstone: 'Ruby (July) / Pearl (June)',
    primary_reason: 'Moonstone is the obvious choice for the moon-ruled sign. It carries lunar energy — cyclical, intuitive, soft. Cancer\'s moods follow the actual moon more than most signs, and moonstone lets the sign work *with* the cycle instead of fighting it. New moon: a fresh moonstone. Full moon: charge it on the windowsill.',
    secondary_reason: 'Selenite is the cleanser. Cancer is famously absorbent — they pick up other people\'s emotions like a sponge, especially in family settings. Selenite by the bed, or in the doorway of the home, clears the inherited weight that Cancer can\'t always tell apart from their own feelings.',
    tertiary_reason: 'Pearl, the June birthstone, is literally crystallized irritation made beautiful — a perfect Cancer symbol. The sign that takes hurt and turns it into nourishment for others. Wear pearl when the heart needs a reminder that the soft thing is also the strong thing.',
    practice: 'Moonstone on the windowsill (charge it monthly under the full moon); selenite by the bed and in the home\'s entryway; pearl as everyday jewelry, especially on hard family days. The Cancer kit is lunar and protective — about boundaries the sign forgot to draw.',
    caution: 'Cancer can use crystals as another way to take care of others first — buying for everyone, leaving themselves last. Buy your stones before you buy anyone else\'s.'
  },
  leo: {
    primary: 'Sunstone',
    secondary: 'Tiger\'s Eye',
    tertiary: 'Citrine',
    birthstone: 'Peridot (August) / Ruby (July)',
    primary_reason: 'Sunstone is solar energy in mineral form — and Leo is ruled by the sun. It amplifies Leo\'s natural radiance and confidence, which is sometimes exactly what the sign needs (a low-energy day, an audition, a presentation) and sometimes the opposite (when the ego is already running the show). Use intentionally, not constantly.',
    secondary_reason: 'Tiger\'s eye is the courage stone for Leo when the heart is bruised — heartbreak, public criticism, professional setback. It restores the personal power Leo needs to walk back into the room. Wear it during recovery, not during peak.',
    tertiary_reason: 'Citrine for creativity. Leo is the creative sign of the zodiac, and citrine concentrates creative output. Keep it on the working desk — the studio, the writing chair, the practice room.',
    practice: 'Sunstone for confidence boosts (worn for big moments); tiger\'s eye during recovery and rebuilding; citrine permanently on the creative desk. The Leo kit is performance-aware — it knows when to amplify and when to restore.',
    caution: 'Leo crystals can become props for the persona. The point is to nourish the inner creative kid, not to add to the costume. Use them privately first, publicly second.'
  },
  virgo: {
    primary: 'Amazonite',
    secondary: 'Moss Agate',
    tertiary: 'Amethyst',
    birthstone: 'Sapphire (September) / Peridot (August)',
    primary_reason: 'Amazonite calms the Virgo overthinking spiral. The sign that runs on analysis sometimes runs the analysis past the point of usefulness, into anxiety. Amazonite (worn at the throat or held during journaling) helps Virgo separate productive thinking from the kind of looping that has become self-harm.',
    secondary_reason: 'Moss agate is the gardener\'s stone — patient, steady, deeply earthy. Virgo is the most earth-bonded of the earth signs (alongside Taurus and Capricorn) and moss agate strengthens that connection. Carry it during slow, careful work — the kind of detailed labor Virgo is famous for.',
    tertiary_reason: 'Amethyst for sleep. Virgo\'s busy mind doesn\'t turn off easily, and chronic insomnia is a real Virgo affliction. Amethyst under the pillow, or as a small cluster on the bedside table, calms the mental chatter enough for sleep to land.',
    practice: 'Amazonite on the desk during analytical work; moss agate in the pocket during long focused sessions; amethyst by the bed. The Virgo kit serves the working mind — supports it without enabling its perfectionist edge.',
    caution: 'Virgo will research the "right" crystal to obsessive depth. The right crystal is the one you\'ll actually use. Buy. Don\'t over-think.'
  },
  libra: {
    primary: 'Lapis Lazuli',
    secondary: 'Rose Quartz',
    tertiary: 'Black Tourmaline',
    birthstone: 'Opal (October) / Sapphire (September)',
    primary_reason: 'Lapis lazuli, deep blue with gold flecks, is the stone of truth-telling — and Libra (the sign that smooths everything over) often needs help telling the harder truth that the relationship actually requires. Lapis at the throat, especially during difficult conversations, gives Libra the spine to say what they\'ve been avoiding for the sake of peace.',
    secondary_reason: 'Rose quartz keeps Libra\'s natural Venusian charm anchored in actual love rather than people-pleasing. Worn close to the heart (pendant), it reminds Libra that real love sometimes looks like saying no.',
    tertiary_reason: 'Black tourmaline for boundaries. Libra absorbs other people\'s moods at parties, in relationships, in any close situation. Black tourmaline at the doorway and in the pocket during high-stimulation environments stops the bleed.',
    practice: 'Lapis at the throat for hard conversations; rose quartz worn daily; black tourmaline for crowds and boundary-thin people. The Libra kit reinforces the spine the sign sometimes lets go soft.',
    caution: 'Libra will balance the kit so carefully it never gets used. Pick one, start there, add the next when the first feels integrated.'
  },
  scorpio: {
    primary: 'Obsidian',
    secondary: 'Malachite',
    tertiary: 'Garnet',
    birthstone: 'Topaz (November) / Opal (October)',
    primary_reason: 'Obsidian is the truth-mirror — it shows you what you\'ve been avoiding. Scorpio is the sign least afraid of looking, but even Scorpio has shadow corners. Obsidian (especially black or rainbow obsidian) on the altar or held during shadow work shows the next layer the sign is ready to face.',
    secondary_reason: 'Malachite is the heart\'s heavy lifter — it pulls deep emotional material to the surface so it can finally be processed. Scorpio archives feelings until the archive becomes a vault. Malachite during therapy days, journaling sessions, or after major life events lets the vault open in a managed way.',
    tertiary_reason: 'Garnet is the regenerative fire. After Scorpio has done its descent and faced what needed facing, garnet returns the life force — restores passion, sexuality, creative drive. Use it in the rebuilding phase, not the descent phase.',
    practice: 'Obsidian on the altar (or held during meditation) for shadow work; malachite during heart-processing days; garnet during the rebuild after a major transformation. The Scorpio kit is initiatory — not cosmetic, not gentle.',
    caution: 'Scorpio can over-use shadow stones and stay in the underworld too long. Balance with sun-coded stones (carnelian, citrine) on a regular basis — the descent is part of a cycle, not a permanent residence.'
  },
  sagittarius: {
    primary: 'Turquoise',
    secondary: 'Sodalite',
    tertiary: 'Lapis Lazuli',
    birthstone: 'Turquoise / Tanzanite (December) / Topaz (November)',
    primary_reason: 'Turquoise is the traveler\'s stone — it has been worn by riders, sailors, and pilgrims across cultures for thousands of years. Sagittarius is the zodiac\'s traveler, and turquoise both protects on the road and keeps the philosophical mind grounded enough to bring the wisdom home.',
    secondary_reason: 'Sodalite supports the higher mind, the philosopher\'s mind, the mind that wants to *understand* not just experience. Sagittarius can fly past the lesson chasing the next adventure; sodalite (on the desk, during reading time) helps the sign integrate before flying.',
    tertiary_reason: 'Lapis lazuli, again — the truth-stone — keeps Sagittarius\'s famous bluntness honest rather than careless. The sign that says the uncomfortable truth at the dinner table benefits from a stone that aims the truth-telling toward useful and away from cruel.',
    practice: 'Turquoise as everyday wear, especially while traveling; sodalite on the desk for reading and study; lapis lazuli before any conversation where honesty might land hard. The Sagittarius kit is traveler\'s + philosopher\'s — equipment for the inner road.',
    caution: 'Sagittarius will collect stones from every country they visit and forget which ones they were supposed to be using. Pick three. Travel with three.'
  },
  capricorn: {
    primary: 'Garnet',
    secondary: 'Black Tourmaline',
    tertiary: 'Onyx',
    birthstone: 'Garnet (January) / Turquoise (December)',
    primary_reason: 'Garnet, the January birthstone, is both passion and discipline — a perfect Capricorn match. The sign that builds long career arcs sometimes forgets there\'s a fire underneath the discipline. Garnet on the desk reminds the Capricorn engine that the fuel is desire, not duty.',
    secondary_reason: 'Black tourmaline shields Capricorn from the workplace politics, ambient negativity, and energy-vampire bosses the sign tends to encounter at high levels. Carry it at the office, especially during high-stakes weeks.',
    tertiary_reason: 'Onyx is grounded protection — strong, quiet, masculine in the archetypal sense. It supports the Capricorn nervous system through long campaigns: building a company, raising a family, finishing a multi-year degree. Onyx is the long-haul stone.',
    practice: 'Garnet on the desk and worn during creative phases of work; black tourmaline at the office every day; onyx as a long-haul anchor (often worn as a ring). The Capricorn kit is built for the long climb.',
    caution: 'Capricorn can treat crystals as another productivity tool — "what stone gets me promoted faster." That misses the point. The stones support the inner life that the climb depends on; they don\'t replace it.'
  },
  aquarius: {
    primary: 'Amethyst',
    secondary: 'Labradorite',
    tertiary: 'Aquamarine',
    birthstone: 'Amethyst (February) / Garnet (January)',
    primary_reason: 'Amethyst, the February birthstone, is the stone of the higher mind — visionary, calming, deeply Aquarian. The sign that lives in the future and the system finds in amethyst a calming companion for the often-tired Aquarius nervous system. On the desk during creative work, by the bed for deeper sleep.',
    secondary_reason: 'Labradorite is the magic stone — its iridescent flash matches the Aquarian feeling of seeing through the surface of the world to the patterns underneath. Aquarius often feels like an outsider; labradorite reminds them that being able to see the matrix is the gift, not the alienation.',
    tertiary_reason: 'Aquamarine supports the throat and the truth-speaking — Aquarius is here to say things the room isn\'t ready to hear, and aquamarine helps deliver the truth in a way that lands. Wear at the throat on big-speech days.',
    practice: 'Amethyst at the desk and the bed; labradorite as a daily wear (ring or pendant); aquamarine for big communication moments. The Aquarius kit is visionary-supportive — for the sign that channels future and needs help staying embodied while doing it.',
    caution: 'Aquarius will theorize about the stones more than use them. Buy three, use them daily, then theorize.'
  },
  pisces: {
    primary: 'Aquamarine',
    secondary: 'Amethyst',
    tertiary: 'Black Tourmaline',
    birthstone: 'Aquamarine (March) / Amethyst (February)',
    primary_reason: 'Aquamarine, the March birthstone, is literally the sea-stone — Pisces is the ocean of the zodiac, and aquamarine matches the sign\'s element directly. It supports emotional flow without overwhelm, helps Pisces feel without drowning. Worn at the throat or the heart, daily.',
    secondary_reason: 'Amethyst is the spiritual amplifier — and Pisces is the most spiritually open sign. Amethyst supports meditation, dream work, and the natural Pisces ability to receive intuitive information. By the bed for dream recall, on the altar for prayer.',
    tertiary_reason: 'Black tourmaline is critical for Pisces — without it, the sign\'s natural openness becomes a leak. Pisces absorbs everyone\'s feelings, often without realizing it, and ends up exhausted by lunchtime. Black tourmaline at the entryway, in the pocket during social days, by the workspace.',
    practice: 'Aquamarine worn daily; amethyst by the bed and on the altar; black tourmaline as a boundary stone everywhere Pisces moves through other people\'s energy. The Pisces kit is open + protected — the open part is the gift, the protection is what keeps the gift sustainable.',
    caution: 'Pisces will be drawn to every beautiful stone and own twenty within a year. The point is the boundary, not the collection. Three stones, used consistently, will outperform a curio cabinet.'
  }
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const ELEMENT_ACCENT: Record<string, { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function isCrystalSign(s: string): s is Sign {
  return (SIGNS as readonly string[]).includes(s)
}

export function crystalsPageHTML(sign: Sign): string {
  const meta = ZODIAC_META[sign]
  const profile = CRYSTALS[sign]
  const accent = ELEMENT_ACCENT[meta.element]
  const cap = capitalize(sign)
  const readingHref = `/gab44/reading?ref=crystals-${sign}`

  const title = `Best Crystals for ${cap} — Birthstones, Healing Stones, Meaning · gab44 ✨`
  const description = `Three crystals for ${cap} (${meta.dates}): ${profile.primary}, ${profile.secondary}, and ${profile.tertiary}. Why each one matches the ${meta.element} element of ${cap}, how to use them, and what to avoid. Birthstone: ${profile.birthstone}.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Crystals', item: `${SITE_URL}/gab44/crystals` },
          { '@type': 'ListItem', position: 3, name: `${cap} Crystals`, item: `${SITE_URL}/gab44/${sign}/crystals` }
        ]
      },
      {
        '@type': 'Article',
        headline: `Best Crystals for ${cap}`,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/${sign}/crystals`
      }
    ]
  })

  const otherSignsHtml = (SIGNS as readonly Sign[]).map((s) => {
    const m = ZODIAC_META[s]
    const cur = s === sign ? ' current' : ''
    return `<a class="sign-mini${cur}" href="/gab44/${s}/crystals"><span class="sym">${m.symbol}</span><span class="nm">${capitalize(s)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/${sign}/crystals" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/${sign}/crystals" />
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
  h1 .sym { font-size: 0.75em; vertical-align: 4px; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
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
  p { margin: 0 0 14px; font-size: 16px; }
  .stone-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 16px;
    padding: 22px 26px; margin: 14px 0;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 12px rgba(20,14,4,0.05);
    position: relative; overflow: hidden;
  }
  .stone-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2));
  }
  .stone-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 6px; font-weight: 700;
  }
  .stone-card h3 {
    font-size: 24px; margin: 0 0 10px; font-weight: 700; color: var(--fg);
  }
  .stone-card .stone-name { background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  .stone-card p { margin: 0; font-size: 15px; line-height: 1.65; color: var(--fg); }
  .practice-box, .caution-box {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 18px 0;
  }
  .practice-box { background: ${accent.c1}0c; border-color: ${accent.c1}33; }
  .caution-box { background: var(--bg-2); }
  .practice-box h3, .caution-box h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700; }
  .practice-box p, .caution-box p { margin: 0; font-size: 15px; }
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
  .healing-cross {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 24px 0; font-size: 15px; color: var(--fg-dim);
  }
  .healing-cross strong { color: var(--fg); }
  .healing-cross a { color: var(--accent); font-weight: 600; text-decoration: none; }
  .other-signs { margin: 36px 0 22px; }
  .other-signs h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .signs-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  @media (max-width: 600px) { .signs-grid { grid-template-columns: repeat(4, 1fr); } h1 { font-size: 34px; } }
  .sign-mini {
    text-align: center; padding: 8px 4px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 2px; align-items: center;
  }
  .sign-mini:hover { border-color: var(--accent); color: var(--accent); }
  .sign-mini.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .sign-mini .sym { font-size: 18px; line-height: 1; }
  .sign-mini .nm { font-size: 10px; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/crystals">all 12 sign crystals</a>
      <a href="/gab44/${sign}/about">${cap} sun-sign</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ crystals · ${cap}</div>
    <h1><span class="sym">${meta.symbol}</span>Crystals for <span class="accent">${cap}</span></h1>
    <p class="sub">${escapeHtml(meta.one_liner)}</p>
    <div class="meta-strip">
      <span>element · ${meta.element}</span>
      <span>${escapeHtml(meta.dates)}</span>
      <span>birthstone · ${escapeHtml(profile.birthstone)}</span>
    </div>

    <h2>The three stones</h2>
    <p>You don\'t need a curio cabinet. You need three stones, used steadily — one anchor, one companion, one for the harder days. Here\'s the kit for ${cap}.</p>

    <article class="stone-card">
      <span class="label">primary · the anchor</span>
      <h3 class="stone-name">${escapeHtml(profile.primary)}</h3>
      <p>${escapeHtml(profile.primary_reason)}</p>
    </article>

    <article class="stone-card">
      <span class="label">secondary · the companion</span>
      <h3 class="stone-name">${escapeHtml(profile.secondary)}</h3>
      <p>${escapeHtml(profile.secondary_reason)}</p>
    </article>

    <article class="stone-card">
      <span class="label">tertiary · the shadow worker</span>
      <h3 class="stone-name">${escapeHtml(profile.tertiary)}</h3>
      <p>${escapeHtml(profile.tertiary_reason)}</p>
    </article>

    <div class="practice-box">
      <h3>🌱 how to use them</h3>
      <p>${escapeHtml(profile.practice)}</p>
    </div>

    <div class="caution-box">
      <h3>⚠️ what to avoid</h3>
      <p>${escapeHtml(profile.caution)}</p>
    </div>

    <div class="healing-cross">
      <strong>Pair with sound.</strong> Crystals work well alongside guided meditation. Five free healing audio tracks (sleep, anxiety relief, abundance, letting go, deep healing) live at <a href="/healing">/healing</a> — work with the stone in your hand and the audio in your ears.
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading for <em>your</em> chart</h2>
      <p>This page is the kit for everyone with ${cap} sun. A <strong>personal reading</strong> looks at <em>your</em> full chart — sun, moon, rising, life path — and which stones the whole map is asking for. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-signs">
      <h3>All 12 sign crystals</h3>
      <div class="signs-grid">
        ${otherSignsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function crystalsIndexHTML(): string {
  const cards = (SIGNS as readonly Sign[]).map((s) => {
    const m = ZODIAC_META[s]
    const profile = CRYSTALS[s]
    const accent = ELEMENT_ACCENT[m.element]
    return `<a href="/gab44/${s}/crystals" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="sign">${m.symbol} ${capitalize(s)}</div>
      <div class="dates">${escapeHtml(m.dates)} · ${m.element}</div>
      <div class="primary">${escapeHtml(profile.primary)}</div>
      <div class="rest">+ ${escapeHtml(profile.secondary)} · ${escapeHtml(profile.tertiary)}</div>
      <div class="birthstone">birthstone · ${escapeHtml(profile.birthstone)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Crystals & Birthstones for Every Zodiac Sign — Healing Stones Guide · gab44 ✨</title>
<meta name="description" content="The three stones for each zodiac sign — anchor, companion, and shadow worker. Aries: carnelian, bloodstone, hematite. Taurus: rose quartz, emerald, smoky quartz. All 12 signs with traditional birthstones, how to use, what to avoid. Written warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/crystals" />
<meta property="og:title" content="Crystals for Every Zodiac Sign" />
<meta property="og:description" content="Three working stones per sign — anchor, companion, shadow worker." />
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
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--accent); transform: translateY(-1px); }
  .card .sign { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
  .card .dates { font-size: 11px; color: var(--fg-muted); margin-bottom: 12px; letter-spacing: 0.05em; text-transform: uppercase; }
  .card .primary { font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .card .rest { font-size: 13px; color: var(--fg-dim); margin-bottom: 8px; }
  .card .birthstone { font-size: 11px; color: var(--fg-muted); padding-top: 8px; border-top: 1px dashed var(--line); }
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
      <a href="/gab44/numerology">numerology</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Crystals & <span class="accent">birthstones</span> for every sign.</h1>
    <p class="sub">Three working stones per zodiac sign — an anchor, a companion, and one for the harder days. Plus the traditional birthstone for your month. The point is not to collect many; it\'s to use a few well.</p>
    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Want the kit chosen for your full chart?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">A $9 personal reading looks at your sun, moon, rising, and houses — and recommends the stones your specific chart is asking for, not just your sun sign\'s defaults. <a href="/gab44/reading?ref=crystals-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
