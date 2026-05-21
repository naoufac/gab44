import type { APIRoute } from 'astro'

export const GET: APIRoute = () =>
  new Response('3789b31cdb478155fb89cd098d445416', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
