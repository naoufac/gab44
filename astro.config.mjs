import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://gab44.com',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [sitemap()],
  prefetch: true
})
