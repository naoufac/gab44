import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#FAF5EE"/>
  <text x="32" y="46" text-anchor="middle" font-family="Georgia, serif" font-size="44" fill="#D97757">✺</text>
</svg>`
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  })
}
