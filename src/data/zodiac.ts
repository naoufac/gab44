// Per-sign zodiac landing pages — /gab44/{sign}.
// 12 SEO pages, each renders today's horoscope (KV-cached, MiniMax-generated)
// and routes the warm-traffic reader to the $9 personal reading via ?ref=daily-{sign}.
// Long-tail keyword surface for "{sign} horoscope today" — each visitor is a
// potential reading_requests row.

import { SITE_URL } from '@/lib/identity'
import { generateDailyHoroscope, isValidSign, SIGNS, type Sign } from './daily'

interface ZodiacEnv {
  MINIMAX_API_KEY: string
  KV: KVNamespace
}

interface SignMeta {
  symbol: string
  glyph: string
  dates: string
  element: 'fire' | 'earth' | 'air' | 'water'
  vibe: string
  one_liner: string
}

const META: Record<Sign, SignMeta> = {
  aries:       { symbol: '♈', glyph: 'ram',          dates: 'Mar 21 – Apr 19', element: 'fire',  vibe: 'first to leap',         one_liner: 'You move first. The rest of the chart catches up.' },
  taurus:      { symbol: '♉', glyph: 'bull',         dates: 'Apr 20 – May 20', element: 'earth', vibe: 'rooted, sensual',       one_liner: 'You trust slowness. The world keeps proving you right.' },
  gemini:      { symbol: '♊', glyph: 'twins',        dates: 'May 21 – Jun 20', element: 'air',   vibe: 'curious, plural',       one_liner: 'You are not contradicting yourself. You are paying attention.' },
  cancer:      { symbol: '♋', glyph: 'crab',         dates: 'Jun 21 – Jul 22', element: 'water', vibe: 'tender, protective',    one_liner: 'You feel everything first. That is a kind of seeing.' },
  leo:         { symbol: '♌', glyph: 'lion',         dates: 'Jul 23 – Aug 22', element: 'fire',  vibe: 'warm-hearted radiant',  one_liner: 'You were not too much. You were rounding up to the right size.' },
  virgo:       { symbol: '♍', glyph: 'maiden',       dates: 'Aug 23 – Sep 22', element: 'earth', vibe: 'precise, devoted',      one_liner: 'Your care is a form of architecture. Most people can\'t see the load it bears.' },
  libra:       { symbol: '♎', glyph: 'scales',       dates: 'Sep 23 – Oct 22', element: 'air',   vibe: 'balancing, beauty',     one_liner: 'You hold contradictions in elegance. That is rare and tiring.' },
  scorpio:     { symbol: '♏', glyph: 'scorpion',     dates: 'Oct 23 – Nov 21', element: 'water', vibe: 'deep, transformative',  one_liner: 'You know the shape of what is hidden. Most people guess.' },
  sagittarius: { symbol: '♐', glyph: 'archer',       dates: 'Nov 22 – Dec 21', element: 'fire',  vibe: 'open-road, honest',     one_liner: 'You leave to come back larger. The arrow always knows.' },
  capricorn:   { symbol: '♑', glyph: 'sea-goat',     dates: 'Dec 22 – Jan 19', element: 'earth', vibe: 'patient, ambitious',    one_liner: 'You build things that last. Time is on your side.' },
  aquarius:    { symbol: '♒', glyph: 'water-bearer', dates: 'Jan 20 – Feb 18', element: 'air',   vibe: 'inventive, free',       one_liner: 'You see the future earlier than the room. That feels lonely. It is also the gift.' },
  pisces:      { symbol: '♓', glyph: 'fish',         dates: 'Feb 19 – Mar 20', element: 'water', vibe: 'oceanic, intuitive',    one_liner: 'You feel the tide before it turns. Trust the small signal.' }
}

const ELEMENT_ACCENT: Record<SignMeta['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#ff8a4d', c2: '#c93a22' },
  earth: { c1: '#a98c4f', c2: '#5e6f3a' },
  air:   { c1: '#7ec8e8', c2: '#4a87b9' },
  water: { c1: '#6f86d6', c2: '#48499c' }
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export interface ZodiacPageOptions {
  sign: Sign
  date: string
  text: string
  source: string
}

export function zodiacPageHTML(opts: ZodiacPageOptions): string {
  const meta = META[opts.sign]
  const accent = ELEMENT_ACCENT[meta.element]
  const Sign = capitalize(opts.sign)
  const niceDate = new Date(opts.date + 'T00:00:00Z').toUTCString().slice(0, 16) // "Sat, 09 May 2026"
  const readingHref = `/gab44/reading?ref=daily-${opts.sign}`
  const horoscope = escapeHtml(opts.text)
  const title = `${Sign} Horoscope Today (${niceDate}) — gab44 ✨`
  const description = `Today's ${Sign} horoscope, written warm and modern — not a printed calendar. One concrete energy, one practical move, one tiny encouragement.`

  // JSON-LD for SEO. Two schema types: BreadcrumbList + Article.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: `${Sign} Horoscope Today`, item: `${SITE_URL}/gab44/${opts.sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline: `${Sign} Horoscope — ${niceDate}`,
        datePublished: opts.date,
        dateModified: opts.date,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/${opts.sign}`,
        about: `${Sign} (${meta.glyph}, ${meta.element})`
      }
    ]
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/${opts.sign}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/${opts.sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E${encodeURIComponent(meta.symbol)}%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --sign-c1:${accent.c1}; --sign-c2:${accent.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}22 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}22 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.6; min-height: 100vh;
  }
  .wrap { max-width: 660px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 {
    font-size: 46px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg);
  }
  h1 .glyph { font-size: 0.85em; vertical-align: -2px; background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); -webkit-background-clip: text; background-clip: text; color: transparent; padding-right: 8px; }
  h1 .accent { background: linear-gradient(135deg, var(--sign-c1), var(--sign-c2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .sub { font-size: 16px; color: var(--fg-dim); margin: 0 0 24px; }
  .meta-strip {
    display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 26px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--fg-muted);
  }
  .meta-strip span {
    background: var(--bg-2); padding: 5px 12px; border-radius: 999px;
  }
  .horoscope-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 24px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .horoscope-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--sign-c1), var(--sign-c2));
  }
  .horoscope-card .label {
    display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700;
  }
  .horoscope-card .text {
    font-size: 18px; line-height: 1.7; color: var(--fg); margin: 0;
  }
  .horoscope-card .source {
    margin-top: 16px; font-size: 11px; color: var(--fg-muted); font-family: 'JetBrains Mono', monospace;
  }
  .reading-cta {
    background: linear-gradient(135deg, var(--sign-c1) 0%, var(--sign-c2) 100%);
    color: var(--fg-on-accent); padding: 28px 30px; border-radius: 18px; margin: 22px 0 26px;
    box-shadow: 0 8px 28px rgba(20,14,4,0.10);
  }
  .reading-cta h2 { margin: 0 0 8px; font-size: 22px; font-weight: 800; }
  .reading-cta p { margin: 0 0 18px; opacity: 0.92; font-size: 15px; }
  .reading-cta .price { font-size: 36px; font-weight: 800; margin-right: 8px; }
  .reading-cta .price-note { opacity: 0.85; font-size: 13px; }
  .reading-cta a.btn {
    display: inline-block; background: #fffaf2; color: #1a1815;
    padding: 12px 26px; border-radius: 999px; font-weight: 700; text-decoration: none;
    font-size: 15px; transition: transform 0.05s;
  }
  .reading-cta a.btn:hover { transform: translateY(-1px); }
  .other-signs { margin: 30px 0 22px; }
  .other-signs h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .sign-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  @media (max-width: 520px) { .sign-grid { grid-template-columns: repeat(4, 1fr); } h1 { font-size: 36px; } }
  .sign-grid a {
    text-align: center; padding: 10px 4px; border-radius: 10px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600;
  }
  .sign-grid a:hover { border-color: var(--accent); color: var(--accent); }
  .sign-grid a.current { border-color: var(--accent); background: var(--accent-soft); color: var(--accent); }
  .sign-grid a .sym { display: block; font-size: 18px; line-height: 1; margin-bottom: 3px; color: var(--fg); }
  .healing-promo {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim);
  }
  .healing-promo a { color: var(--accent); text-decoration: none; font-weight: 600; }
  .healing-promo a:hover { text-decoration: underline; }
  footer { margin-top: 40px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
  footer a:hover { text-decoration: underline; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/healing">healing</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/${opts.sign}/about">about ${Sign}</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ daily horoscope</div>
    <h1><span class="glyph">${meta.symbol}</span><span class="accent">${Sign}</span> · today.</h1>
    <p class="sub">${escapeHtml(meta.one_liner)}</p>
    <div class="meta-strip">
      <span>📅 ${escapeHtml(niceDate)}</span>
      <span>🜂 ${escapeHtml(meta.element)}</span>
      <span>${escapeHtml(meta.dates)}</span>
      <span>${escapeHtml(meta.vibe)}</span>
    </div>

    <article class="horoscope-card">
      <span class="label">today's energy</span>
      <p class="text">${horoscope}</p>
      <div class="source">written fresh today · cached for the day · ${escapeHtml(opts.source)}</div>
    </article>

    <section class="reading-cta">
      <h2>✉️ Want it written for <em>you</em>?</h2>
      <p>This horoscope is for everyone with your sign. A <strong>personal life-path reading</strong> is written for one human — your birth chart, your intention, one real human reading you back. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn't land</span></div>
      <a class="btn" href="${readingHref}">Request your ${Sign} reading →</a>
    </section>

    <div class="healing-promo">
      🌿 Need to settle the nervous system before reading? <a href="/healing">Five free 10-minute healing meditations</a> — sleep, anxiety, abundance, letting-go, deep healing.
    </div>

    <section class="other-signs">
      <h3>Deepen this read · ${Sign} across the chart</h3>
      <p style="font-size:13px;color:var(--fg-dim);margin:-6px 0 12px;">Sun is the headline. These are the other lenses worth knowing.</p>
      <div class="sign-grid">
        <a class="sign" href="/gab44/${opts.sign}/about"><span class="sym">${meta.symbol}</span>about ${Sign}</a>
        <a class="sign" href="/gab44/${opts.sign}/moon"><span class="sym">☽</span>${Sign} moon</a>
        <a class="sign" href="/gab44/${opts.sign}/rising"><span class="sym">↗</span>${Sign} rising</a>
        <a class="sign" href="/gab44/decans/${opts.sign}-1"><span class="sym">${meta.symbol}</span>${Sign} 1st decan</a>
        <a class="sign" href="/gab44/personal-planets/mercury-${opts.sign}"><span class="sym">☿</span>Mercury ${Sign}</a>
        <a class="sign" href="/gab44/personal-planets/venus-${opts.sign}"><span class="sym">♀</span>Venus ${Sign}</a>
        <a class="sign" href="/gab44/personal-planets/mars-${opts.sign}"><span class="sym">♂</span>Mars ${Sign}</a>
        <a class="sign" href="/gab44/north-node/${opts.sign}"><span class="sym">☊</span>NN ${Sign}</a>
        <a class="sign" href="/gab44/lilith/${opts.sign}"><span class="sym">⚸</span>Lilith ${Sign}</a>
        <a class="sign" href="/gab44/chiron/${opts.sign}"><span class="sym">⚷</span>Chiron ${Sign}</a>
        <a class="sign" href="/gab44/sun-rising/${opts.sign}-${opts.sign}"><span class="sym">☉↗</span>${Sign}×${Sign}</a>
        <a class="sign" href="/gab44/${opts.sign}/crystals"><span class="sym">💎</span>${Sign} crystals</a>
      </div>
    </section>

    <section class="other-signs">
      <h3>The other 11 signs · today</h3>
      <div class="sign-grid">
        ${SIGNS.map((s) => {
          const m = META[s as Sign]
          const cur = s === opts.sign ? ' current' : ''
          return `<a class="sign${cur}" href="/gab44/${s}"><span class="sym">${m.symbol}</span>${capitalize(s)}</a>`
        }).join('\n        ')}
      </div>
    </section>

    <section class="other-signs">
      <h3>${Sign} compatibility · 11 pairs</h3>
      <div class="sign-grid">
        ${SIGNS.map((s) => {
          if (s === opts.sign) return ''
          const m = META[s as Sign]
          const i = (SIGNS as readonly string[]).indexOf(opts.sign)
          const j = (SIGNS as readonly string[]).indexOf(s)
          const pair = i <= j ? `${opts.sign}-${s}` : `${s}-${opts.sign}`
          return `<a class="sign" href="/gab44/compatibility/${pair}"><span class="sym">${m.symbol}</span>${capitalize(s)}</a>`
        }).filter(Boolean).join('\n        ')}
      </div>
      <p style="margin-top:14px;font-size:13px;color:var(--fg-dim)">Or see <a href="/gab44/compatibility" style="color:var(--accent);text-decoration:none;font-weight:600">all 78 pairs →</a></p>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written daily · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function zodiacIndexHTML(): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Daily Horoscopes — All 12 Signs · gab44 ✨</title>
<meta name="description" content="Today's horoscopes for all 12 zodiac signs — warm, modern, written daily. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces." />
<link rel="canonical" href="${SITE_URL}/gab44/horoscopes" />
<meta property="og:title" content="Daily Horoscopes — All 12 Signs" />
<meta property="og:description" content="Warm, modern daily horoscopes — written daily, no woo-woo filler." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 560px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  @media (max-width: 600px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  .grid a {
    background: var(--bg-1); border: 1px solid var(--line); padding: 18px 20px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s;
    display: block;
  }
  .grid a:hover { border-color: var(--accent); transform: translateY(-1px); }
  .grid .sym { font-size: 26px; line-height: 1; margin-bottom: 4px; }
  .grid .name { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
  .grid .dates { font-size: 12px; color: var(--fg-muted); }
  .reading-strip {
    background: var(--accent); color: var(--fg-on-accent); padding: 22px 26px;
    border-radius: 16px; margin: 28px 0 0; text-align: center;
  }
  .reading-strip h2 { margin: 0 0 6px; font-size: 18px; font-weight: 700; }
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
      <a href="/healing">healing</a>
      <a href="/gab44/about">sign profiles</a>
      <a href="/gab44/compatibility">compatibility</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>Daily <span class="accent">horoscopes</span> · all 12 signs.</h1>
    <p class="sub">Today's energy for every sign. Written warm and modern — one concrete energy, one practical move, one tiny encouragement. No "the planets align" filler.</p>
    <div class="grid">
      ${SIGNS.map((s) => {
        const m = META[s as Sign]
        return `<a href="/gab44/${s}">
        <div class="sym">${m.symbol}</div>
        <div class="name">${capitalize(s)}</div>
        <div class="dates">${m.dates}</div>
      </a>`
      }).join('\n      ')}
    </div>
    <div class="reading-strip">
      <h2>Want a reading written for one human — you?</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">$9 personal life-path reading · delivered in 48h · <a href="/gab44/reading?ref=horoscopes-index">request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export async function renderZodiacPage(sign: string, env: ZodiacEnv): Promise<{ status: number; html?: string }> {
  if (!isValidSign(sign)) return { status: 404 }
  try {
    const h = await generateDailyHoroscope(sign as Sign, env)
    const html = zodiacPageHTML({ sign: sign as Sign, date: h.date, text: h.text, source: h.source })
    return { status: 200, html }
  } catch (err: any) {
    // Soft-fail: render the page with a placeholder so the SEO/CTAs still work.
    const today = new Date().toISOString().slice(0, 10)
    const html = zodiacPageHTML({
      sign: sign as Sign,
      date: today,
      text: 'Today\'s reading is being written. Check back in a moment — or request a personal reading below.',
      source: 'placeholder · ' + String(err?.message ?? '').slice(0, 60)
    })
    return { status: 200, html }
  }
}

export { SIGNS as ZODIAC_SIGNS, META as ZODIAC_META }
