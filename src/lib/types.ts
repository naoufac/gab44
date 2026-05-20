// Universal page shape. Every domain (tarot card, sign profile, asteroid×sign, rune, etc.)
// projects into this type so the catch-all route can render anything with one template.

export interface PageMeta { label: string; value: string }

export interface PageSection {
  heading: string
  body: string         // plain text or simple HTML-safe lines; newlines preserved as <p> breaks
  list?: string[]      // optional bullet list (overrides body if present)
}

export interface RelatedLink { label: string; href: string }

export interface Page {
  route: string                  // path without leading slash, e.g. "tarot/the-fool"
  category: string               // matches a key in CATEGORY map (nav.ts)
  title: string                  // <title> + h1
  display_title: string          // shown as h1 if different from <title>
  description: string            // <meta name="description"> — 140-180 chars
  symbol?: string                // emoji/glyph for hero
  meta?: PageMeta[]              // small "Element: Air · Ruler: Mercury" data row
  intro?: string                 // one-line lede under h1
  sections: PageSection[]        // article body
  related?: RelatedLink[]        // related-page links at bottom
  parent_route?: string          // breadcrumb parent (defaults to category parent href)
}
