// Per-page OG card. SVG at build time. URL: /og/<route-with-slashes-as-double-underscore>.svg
// e.g. /og/tarot__the-fool.svg, /og/horoscopes__aries.svg
// Reads design tokens (tier3.og) for colors/fonts — single source of design truth.

import type { APIRoute } from 'astro'
import { getAllPages } from '@/lib/registry'
import { OG_TOKENS, OG_BRAND } from '@/lib/og-tokens'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// wrap text: roughly N chars per line, max 3 lines
function wrap(text: string, perLine: number, maxLines: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > perLine) {
      if (cur) lines.push(cur)
      cur = w
      if (lines.length >= maxLines - 1) break
    } else {
      cur = (cur + ' ' + w).trim()
    }
  }
  if (cur && lines.length < maxLines) lines.push(cur)
  if (lines.length === maxLines && words.length > lines.join(' ').split(/\s+/).length) {
    // truncate last line
    const last = lines[lines.length - 1]
    if (last.length > perLine - 1) lines[lines.length - 1] = last.slice(0, perLine - 1) + '…'
    else lines[lines.length - 1] = last + '…'
  }
  return lines
}

function renderSvg(opts: { title: string; sub: string; symbol: string }): string {
  const w = 1200, h = 630
  const t = OG_TOKENS as any
  const titleLines = wrap(opts.title, 28, 3)
  const subLines = wrap(opts.sub, 60, 3)
  const titleStart = 220 + (3 - titleLines.length) * 30  // vertical center-ish

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${t.bg}"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="0" y="0" width="12" height="${h}" fill="${t.accent}"/>
  <text x="80" y="100" font-family="${esc(t.font_sub)}" font-size="22" letter-spacing="6" fill="${t.brand}" font-weight="600">✺ GAB44</text>
  ${opts.symbol ? `<text x="${w - 80}" y="130" text-anchor="end" font-size="92" font-family="${esc(t.font_sub)}">${esc(opts.symbol)}</text>` : ''}
  ${titleLines.map((line, i) => `<text x="80" y="${titleStart + i * 76}" font-family="${esc(t.font_title)}" font-size="68" fill="${t.text}" font-weight="600">${esc(line)}</text>`).join('\n  ')}
  ${subLines.map((line, i) => `<text x="80" y="${titleStart + titleLines.length * 76 + 32 + i * 36}" font-family="${esc(t.font_sub)}" font-size="28" fill="${t.sub_text}">${esc(line)}</text>`).join('\n  ')}
  <text x="80" y="${h - 50}" font-family="${esc(t.font_sub)}" font-size="22" fill="${t.sub_text}">${esc(OG_BRAND.site_url.replace(/^https?:\/\//, ''))} · ${esc(OG_BRAND.tagline)}</text>
</svg>`
}

export async function getStaticPaths() {
  const pages = getAllPages()
  // Plus a "default" og card
  const paths = pages.map(p => ({
    params: { slug: p.route.replace(/\//g, '__') },
    props: { title: p.display_title, sub: p.description, symbol: p.symbol ?? '' },
  }))
  paths.push({
    params: { slug: 'default' },
    props: { title: 'gab44', sub: 'Astrology, warmly written. The 12 signs, the 78 tarot cards, the 24 runes, the 64 hexagrams.', symbol: '✺' },
  })
  return paths
}

export const GET: APIRoute = ({ props }) => {
  const { title, sub, symbol } = props as { title: string; sub: string; symbol: string }
  const body = renderSvg({ title, sub, symbol })
  return new Response(body, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=31536000, immutable' },
  })
}
