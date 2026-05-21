// gab44 navigation manifest — SINGLE SOURCE for top nav, footer nav, breadcrumbs, sitemap.
// Edit here; all four surfaces follow.
//
// Rule 5: the four surfaces must verifiably derive from this file.
// Rule 6: top nav must be 4–6 items, every body section maps to one nav parent.

export interface NavItem {
  label: string
  href: string
  // children are surface-only (sub-links shown under nav category pages, not in the top nav)
  children?: Array<{ label: string; href: string }>
}

// TOP NAV — 5 items per rule 6 ("Today · Signs · Tarot · Wisdom · About")
export const TOP_NAV: NavItem[] = [
  { label: 'Today',     href: '/' },
  { label: 'Signs',     href: '/horoscopes' },
  { label: 'Tarot',     href: '/tarot' },
  { label: 'Wisdom',    href: '/wisdom' },
  { label: 'About',     href: '/about' },
]

// FOOTER NAV — same 5 parents + sitemap link
export const FOOTER_NAV: NavItem[] = [
  ...TOP_NAV,
  { label: 'Sitemap',   href: '/sitemap-index.xml' },
]

// Category map — every page assigned to exactly one top-nav parent (rule 6).
// Drives breadcrumb building.
export const CATEGORY: Record<string, { label: string; parent: string; parentHref: string }> = {
  // Signs umbrella
  horoscopes:        { label: 'Signs',              parent: 'Signs',    parentHref: '/horoscopes' },
  about_sign:        { label: 'About the sign',     parent: 'Signs',    parentHref: '/horoscopes' },
  rising:            { label: 'Rising sign',        parent: 'Signs',    parentHref: '/horoscopes' },
  moon:              { label: 'Moon sign',          parent: 'Signs',    parentHref: '/horoscopes' },
  sun_rising:        { label: 'Sun × Rising',       parent: 'Signs',    parentHref: '/horoscopes' },
  compat:            { label: 'Compatibility',      parent: 'Signs',    parentHref: '/horoscopes' },
  groups:            { label: 'Elements & modalities', parent: 'Signs', parentHref: '/horoscopes' },
  zodiac:            { label: 'Zodiac',             parent: 'Signs',    parentHref: '/horoscopes' },
  // Tarot umbrella
  tarot:             { label: 'Tarot — Majors',     parent: 'Tarot',    parentHref: '/tarot' },
  tarot_court:       { label: 'Tarot — Court',      parent: 'Tarot',    parentHref: '/tarot' },
  tarot_minors:      { label: 'Tarot — Minors',     parent: 'Tarot',    parentHref: '/tarot' },
  tarot_spreads:     { label: 'Tarot — Spreads',    parent: 'Tarot',    parentHref: '/tarot' },
  // Wisdom umbrella — everything else
  runes:             { label: 'Runes',              parent: 'Wisdom',   parentHref: '/wisdom' },
  iching:            { label: 'I Ching',            parent: 'Wisdom',   parentHref: '/wisdom' },
  chakras:           { label: 'Chakras',            parent: 'Wisdom',   parentHref: '/wisdom' },
  mantras:           { label: 'Mantras',            parent: 'Wisdom',   parentHref: '/wisdom' },
  solfeggio:         { label: 'Solfeggio',          parent: 'Wisdom',   parentHref: '/wisdom' },
  goddesses:         { label: 'Goddesses',          parent: 'Wisdom',   parentHref: '/wisdom' },
  archangels:        { label: 'Archangels',         parent: 'Wisdom',   parentHref: '/wisdom' },
  angel_numbers:     { label: 'Angel numbers',      parent: 'Wisdom',   parentHref: '/wisdom' },
  symbols:           { label: 'Spiritual symbols',  parent: 'Wisdom',   parentHref: '/wisdom' },
  sacred_geometry:   { label: 'Sacred geometry',    parent: 'Wisdom',   parentHref: '/wisdom' },
  spirit_animals:    { label: 'Spirit animals',     parent: 'Wisdom',   parentHref: '/wisdom' },
  dreams:            { label: 'Dream symbols',      parent: 'Wisdom',   parentHref: '/wisdom' },
  manifestation:     { label: 'Manifestation',      parent: 'Wisdom',   parentHref: '/wisdom' },
  clairs:            { label: 'Clair senses',       parent: 'Wisdom',   parentHref: '/wisdom' },
  empath_types:      { label: 'Empath types',       parent: 'Wisdom',   parentHref: '/wisdom' },
  auras:             { label: 'Auras',              parent: 'Wisdom',   parentHref: '/wisdom' },
  lunar_phases:      { label: 'Lunar phases',       parent: 'Wisdom',   parentHref: '/wisdom' },
  twin_flames:       { label: 'Twin flames',        parent: 'Wisdom',   parentHref: '/wisdom' },
  crystals:          { label: 'Crystals × Signs',   parent: 'Wisdom',   parentHref: '/wisdom' },
  crystals_intent:   { label: 'Crystals by intent', parent: 'Wisdom',   parentHref: '/wisdom' },
  numerology:        { label: 'Numerology — Life paths', parent: 'Wisdom', parentHref: '/wisdom' },
  personal_year:     { label: 'Personal year',      parent: 'Wisdom',   parentHref: '/wisdom' },
  aspects:           { label: 'Aspects',            parent: 'Wisdom',   parentHref: '/wisdom' },
  houses:            { label: 'Houses',             parent: 'Wisdom',   parentHref: '/wisdom' },
  planets:           { label: 'Planets',            parent: 'Wisdom',   parentHref: '/wisdom' },
  personal_planets:  { label: 'Personal planets',   parent: 'Wisdom',   parentHref: '/wisdom' },
  transits:          { label: 'Transits',           parent: 'Wisdom',   parentHref: '/wisdom' },
  // Asteroids + dwarf planets — Wisdom
  asbolus:           { label: 'Asbolus',            parent: 'Wisdom',   parentHref: '/wisdom' },
  ceres:             { label: 'Ceres',              parent: 'Wisdom',   parentHref: '/wisdom' },
  chariklo:          { label: 'Chariklo',           parent: 'Wisdom',   parentHref: '/wisdom' },
  chiron:            { label: 'Chiron',             parent: 'Wisdom',   parentHref: '/wisdom' },
  eris:              { label: 'Eris',               parent: 'Wisdom',   parentHref: '/wisdom' },
  eros:              { label: 'Eros',               parent: 'Wisdom',   parentHref: '/wisdom' },
  haumea:            { label: 'Haumea',             parent: 'Wisdom',   parentHref: '/wisdom' },
  hygiea:            { label: 'Hygiea',             parent: 'Wisdom',   parentHref: '/wisdom' },
  juno:              { label: 'Juno',               parent: 'Wisdom',   parentHref: '/wisdom' },
  lilith:            { label: 'Lilith',             parent: 'Wisdom',   parentHref: '/wisdom' },
  makemake:          { label: 'Makemake',           parent: 'Wisdom',   parentHref: '/wisdom' },
  nessus:            { label: 'Nessus',             parent: 'Wisdom',   parentHref: '/wisdom' },
  nodes:             { label: 'Lunar nodes',        parent: 'Wisdom',   parentHref: '/wisdom' },
  pallas:            { label: 'Pallas',             parent: 'Wisdom',   parentHref: '/wisdom' },
  pholus:            { label: 'Pholus',             parent: 'Wisdom',   parentHref: '/wisdom' },
  psyche:            { label: 'Psyche',             parent: 'Wisdom',   parentHref: '/wisdom' },
  sedna:             { label: 'Sedna',              parent: 'Wisdom',   parentHref: '/wisdom' },
  vertex:            { label: 'Vertex',             parent: 'Wisdom',   parentHref: '/wisdom' },
  vesta:             { label: 'Vesta',              parent: 'Wisdom',   parentHref: '/wisdom' },
  mars_retrograde:   { label: 'Mars retrograde',    parent: 'Wisdom',   parentHref: '/wisdom' },
  mercury_retrograde:{ label: 'Mercury retrograde', parent: 'Wisdom',   parentHref: '/wisdom' },
  venus_retrograde:  { label: 'Venus retrograde',   parent: 'Wisdom',   parentHref: '/wisdom' },
  saturn_return:     { label: 'Saturn return',      parent: 'Wisdom',   parentHref: '/wisdom' },
  decans:            { label: 'Decans',             parent: 'Wisdom',   parentHref: '/wisdom' },
  // A1 expansion — yoga, ayurveda, kabbalah, vedic, world pantheons (Wisdom)
  asanas:             { label: 'Asanas',                       parent: 'Wisdom',   parentHref: '/wisdom' },
  aztec_gods:         { label: 'Aztec Gods',                   parent: 'Wisdom',   parentHref: '/wisdom' },
  bach_flowers:       { label: 'Bach Flower Remedies',         parent: 'Wisdom',   parentHref: '/wisdom' },
  celtic_gods:        { label: 'Celtic Gods',                  parent: 'Wisdom',   parentHref: '/wisdom' },
  devas:              { label: 'Hindu Devas',                  parent: 'Wisdom',   parentHref: '/wisdom' },
  doshas:             { label: 'Doshas (Ayurveda)',            parent: 'Wisdom',   parentHref: '/wisdom' },
  egyptian_gods:      { label: 'Egyptian Gods',                parent: 'Wisdom',   parentHref: '/wisdom' },
  kleshas:            { label: 'Kleshas (Yoga Sutras)',        parent: 'Wisdom',   parentHref: '/wisdom' },
  limbs:              { label: 'Eight Limbs of Yoga',          parent: 'Wisdom',   parentHref: '/wisdom' },
  mesopotamian_gods:  { label: 'Mesopotamian Gods',            parent: 'Wisdom',   parentHref: '/wisdom' },
  mudras:             { label: 'Mudras',                       parent: 'Wisdom',   parentHref: '/wisdom' },
  nakshatras:         { label: 'Nakshatras (Vedic)',           parent: 'Wisdom',   parentHref: '/wisdom' },
  norse_gods:         { label: 'Norse Gods',                   parent: 'Wisdom',   parentHref: '/wisdom' },
  olympians:          { label: 'Olympian Gods',                parent: 'Wisdom',   parentHref: '/wisdom' },
  roman_gods:         { label: 'Roman Gods',                   parent: 'Wisdom',   parentHref: '/wisdom' },
  slavic_gods:        { label: 'Slavic Gods',                  parent: 'Wisdom',   parentHref: '/wisdom' },
  orishas:            { label: 'Orishas',                      parent: 'Wisdom',   parentHref: '/wisdom' },
  pranayama:          { label: 'Pranayama',                    parent: 'Wisdom',   parentHref: '/wisdom' },
  sabbats:            { label: 'Wheel of the Year (Sabbats)',  parent: 'Wisdom',   parentHref: '/wisdom' },
  sefirot:            { label: 'Sefirot (Kabbalah)',           parent: 'Wisdom',   parentHref: '/wisdom' },
  shinto_kami:        { label: 'Shinto Kami',                  parent: 'Wisdom',   parentHref: '/wisdom' },
  yamas_niyamas:      { label: 'Yamas & Niyamas',              parent: 'Wisdom',   parentHref: '/wisdom' },
  // About
  about:             { label: 'About',              parent: 'About',    parentHref: '/about' },
}
