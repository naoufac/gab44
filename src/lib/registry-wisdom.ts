// Catalog-style wisdom pages — each module exports an array of records keyed by `slug`.
// We use a generic catalogPages() helper to project each into a Page.

import type { Page } from './types'
import { ANGEL_NUMBERS } from '@data/angel_numbers'
import { ARCHANGELS } from '@data/archangels'
import { ASPECTS } from '@data/aspects'
import { AURAS } from '@data/auras'
import { CHAKRAS } from '@data/chakras'
import { CHINESE_ZODIAC } from '@data/chinese'
import { CLAIRS } from '@data/clairs'
import { CRYSTAL_INTENT_KITS } from '@data/crystals_intent'
import { DREAM_SYMBOLS } from '@data/dreams'
import { EMPATHS } from '@data/empath_types'
import { GODDESSES } from '@data/goddesses'
import { HEXAGRAMS } from '@data/iching'
import { HOUSES } from '@data/houses'
import { LUNAR_PHASES } from '@data/lunar_phases'
import { MANIFESTATION_METHODS } from '@data/manifestation'
import { MANTRAS } from '@data/mantras'
import { LIFE_PATHS } from '@data/numerology'
import { PERSONAL_YEARS } from '@data/personal_year'
import { PLANETS } from '@data/planets'
import { RUNES } from '@data/runes'
import { GEOMETRIES } from '@data/sacred_geometry'
import { SOLFEGGIOS } from '@data/solfeggio'
import { SPIRIT_ANIMALS } from '@data/spirit_animals'
import { SYMBOLS } from '@data/spiritual_symbols'
import { TRANSITS } from '@data/transits'
import { TWIN_FLAME_STAGES } from '@data/twin_flames'
import { DECAN_PROFILES } from '@data/decans'
import { PERSONAL_PROFILES, PERSONAL_PLANETS } from '@data/personal_planets'
import { SIGNS } from '@data/daily'

function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1) }

interface FieldSpec {
  field: string
  heading: string
  asList?: boolean       // value is an array → render bullet list
  asNote?: boolean       // value is { name, why, how_to_use } or similar — handled specially
}

interface CatalogSpec {
  records: any[]
  routeBase: string                // e.g. "runes"
  category: string                 // matches CATEGORY key
  displayLabel: string             // "Runes"
  slugField?: string               // default 'slug'
  titleField?: string              // default 'name' or 'display'
  symbolField?: string             // default tries emoji|glyph|symbol
  introField?: string              // default 'one_liner'
  meta?: (r: any) => { label: string; value: string }[]
  fields: FieldSpec[]
  titleTemplate?: (r: any) => string
  descriptionTemplate?: (r: any) => string
}

function getStr(r: any, ...keys: string[]): string {
  for (const k of keys) if (typeof r[k] === 'string' && r[k]) return r[k]
  return ''
}

function catalogPages(spec: CatalogSpec): Page[] {
  const slugField = spec.slugField ?? 'slug'
  const out: Page[] = []
  for (const r of spec.records) {
    const slug = String(r[slugField])
    const titleField = spec.titleField ?? (r['display'] ? 'display' : 'name')
    const titleText = String(r[titleField] ?? slug)
    const intro = spec.introField ? String(r[spec.introField] ?? '') : String(r.one_liner ?? '')
    const symbol = spec.symbolField ? String(r[spec.symbolField] ?? '') : getStr(r, 'emoji', 'glyph', 'symbol')

    const sections = spec.fields
      .map(fs => {
        const v = r[fs.field]
        if (v == null) return null
        if (fs.asList && Array.isArray(v)) {
          return { heading: fs.heading, body: '', list: v.map(String) }
        }
        if (fs.asNote && Array.isArray(v)) {
          // top_three: [{ name, why, how_to_use }]
          return {
            heading: fs.heading,
            body: '',
            list: v.map((x: any) =>
              typeof x === 'string' ? x : `${x.name ?? ''} — ${x.why ?? ''} (${x.how_to_use ?? ''})`,
            ),
          }
        }
        if (Array.isArray(v)) {
          return { heading: fs.heading, body: '', list: v.map(String) }
        }
        return { heading: fs.heading, body: String(v) }
      })
      .filter((s): s is { heading: string; body: string; list?: string[] } => s !== null)

    out.push({
      route: `${spec.routeBase}/${slug}`,
      category: spec.category,
      title: spec.titleTemplate ? spec.titleTemplate(r) : `${titleText} — ${spec.displayLabel}`,
      display_title: titleText,
      description: spec.descriptionTemplate
        ? spec.descriptionTemplate(r)
        : `${titleText} (${spec.displayLabel}). ${String(intro).slice(0, 140)}`,
      symbol,
      meta: spec.meta ? spec.meta(r) : [],
      intro,
      sections,
      related: spec.records
        .filter(o => o[slugField] !== r[slugField])
        .slice(0, 6)
        .map(o => ({ label: String(o[spec.titleField ?? (o['display'] ? 'display' : 'name')] ?? o[slugField]), href: `/${spec.routeBase}/${o[slugField]}` })),
    })
  }

  // Index page
  out.push({
    route: spec.routeBase,
    category: spec.category,
    title: `${spec.displayLabel} — All ${spec.records.length} entries`,
    display_title: spec.displayLabel,
    description: `A full evergreen reference: every ${spec.displayLabel.toLowerCase()} on one page.`,
    intro: `${spec.displayLabel}, mapped end to end.`,
    sections: [
      {
        heading: `All ${spec.records.length} ${spec.displayLabel.toLowerCase()}`,
        body: '',
        list: spec.records.map(r => {
          const t = spec.titleField ? r[spec.titleField] : (r.display ?? r.name ?? r[slugField])
          const o = r.one_liner ?? ''
          return o ? `${t} — ${o}` : String(t)
        }),
      },
    ],
  })

  return out
}

export function allWisdomPages(): Page[] {
  const out: Page[] = []

  out.push(...catalogPages({
    records: ANGEL_NUMBERS, routeBase: 'angel-numbers', category: 'angel_numbers',
    displayLabel: 'Angel numbers',
    titleField: 'display',
    meta: r => [{ label: 'Number', value: r.display }, { label: 'Archetype', value: r.archetype }, { label: 'Element', value: cap(r.element) }],
    titleTemplate: r => `${r.display} Meaning — Angel Number ${r.display}`,
    descriptionTemplate: r => `${r.display} angel number: the spiritual message, in love, in career, twin flame meaning, what to do when you see it.`,
    fields: [
      { field: 'message', heading: 'The message' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_career', heading: 'In career' },
      { field: 'twin_flame', heading: 'For twin flames' },
      { field: 'what_to_do', heading: 'What to do' },
      { field: 'warning', heading: 'The warning' },
      { field: 'pair_with', heading: 'Pair it with' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: ARCHANGELS, routeBase: 'archangels', category: 'archangels',
    displayLabel: 'Archangels',
    meta: r => [{ label: 'Role', value: r.role }, { label: 'Tradition', value: r.tradition }, { label: 'Family', value: cap(r.family) }],
    titleTemplate: r => `${r.name} — Archangel: meaning, signs, how to call`,
    descriptionTemplate: r => `${r.name} (${r.role}): meaning, the signs of their presence, how to call them, the gift, the shadow.`,
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'signs_present', heading: 'Signs of their presence' },
      { field: 'how_to_call', heading: 'How to call them' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: ASPECTS, routeBase: 'aspects', category: 'aspects',
    displayLabel: 'Aspects',
    meta: r => [{ label: 'Symbol', value: r.symbol }, { label: 'Geometry', value: r.geometry }, { label: 'Type', value: r.type_label }],
    fields: [
      { field: 'meaning', heading: 'What this aspect is' },
      { field: 'what_it_feels_like', heading: 'What it feels like' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_work', heading: 'The work' },
      { field: 'how_to_work_with_it', heading: 'How to work with it' },
      { field: 'the_lesson', heading: 'The lesson' },
      { field: 'myth_buster', heading: 'Myth-buster' },
      { field: 'shadow', heading: 'The shadow' },
      { field: 'pair_with', heading: 'Pair it with' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: AURAS, routeBase: 'auras', category: 'auras',
    displayLabel: 'Auras',
    meta: r => [{ label: 'Color', value: cap(r.color) }],
    fields: [
      { field: 'meaning', heading: 'What this aura means' },
      { field: 'what_this_aura_says_about_you', heading: 'What it says about you' },
      { field: 'gifts', heading: 'Gifts', asList: true },
      { field: 'shadows', heading: 'Shadows', asList: true },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'signs_strong', heading: 'When the aura is strong' },
      { field: 'signs_muddy', heading: 'When the aura is muddy' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: CHAKRAS, routeBase: 'chakras', category: 'chakras',
    displayLabel: 'Chakras',
    titleField: 'english',
    meta: r => [{ label: 'Number', value: String(r.number) }, { label: 'Sanskrit', value: `${r.sanskrit} (${r.sanskrit_meaning})` }, { label: 'Color', value: cap(r.color) }, { label: 'Element', value: cap(r.element) }, { label: 'Location', value: r.location }, { label: 'Seed sound', value: r.seed_sound }],
    fields: [
      { field: 'governs', heading: 'What it governs' },
      { field: 'meaning', heading: 'What this chakra is' },
      { field: 'when_open', heading: 'When it\'s open' },
      { field: 'when_blocked', heading: 'When it\'s blocked' },
      { field: 'what_blocks', heading: 'What blocks it' },
      { field: 'how_to_open', heading: 'How to open it' },
      { field: 'affirmations', heading: 'Affirmations', asList: true },
      { field: 'shadow', heading: 'The shadow' },
      { field: 'pair_with_crystal', heading: 'Pair with crystal' },
      { field: 'pair_with_sound', heading: 'Pair with sound' },
      { field: 'pair_with_zodiac', heading: 'Pair with zodiac' },
      { field: 'pair_with_lifepath', heading: 'Pair with life path' },
    ],
  }))

  out.push(...catalogPages({
    records: CHINESE_ZODIAC, routeBase: 'chinese-zodiac', category: 'chinese',
    displayLabel: 'Chinese zodiac',
    meta: r => [{ label: 'Animal', value: r.name }, { label: 'Element', value: cap(r.element) }, { label: 'Yin / Yang', value: cap(r.yin_yang) }, { label: 'Hours', value: r.hours }, { label: 'Recent years', value: r.recent_years }],
    fields: [
      { field: 'meaning', heading: 'The animal' },
      { field: 'personality', heading: 'Personality' },
      { field: 'gifts', heading: 'Gifts', asList: true },
      { field: 'shadows', heading: 'Shadows', asList: true },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_career', heading: 'In career' },
      { field: 'lucky_colors', heading: 'Lucky colors' },
      { field: 'lucky_numbers', heading: 'Lucky numbers' },
      { field: 'unlucky', heading: 'What\'s unlucky' },
      { field: 'best_matches', heading: 'Best matches', asList: true },
      { field: 'worst_match', heading: 'Worst match' },
      { field: 'the_year_ahead', heading: 'The year ahead' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: CLAIRS, routeBase: 'clair-senses', category: 'clairs',
    displayLabel: 'Clair senses',
    titleField: 'display',
    meta: r => [{ label: 'Family', value: cap(r.family) }, { label: 'Origin', value: r.origin }],
    fields: [
      { field: 'meaning', heading: 'What this clair sense is' },
      { field: 'signs_you_have_it', heading: 'Signs you have it', asList: true },
      { field: 'day_to_day', heading: 'Day to day' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'how_to_develop', heading: 'How to develop it' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: CRYSTAL_INTENT_KITS, routeBase: 'crystals-intent', category: 'crystals_intent',
    displayLabel: 'Crystal kits by intent',
    meta: r => [{ label: 'Realm', value: cap(r.realm) }],
    fields: [
      { field: 'meaning', heading: 'What this kit is for' },
      { field: 'top_three', heading: 'The top three stones', asNote: true },
      { field: 'supporting', heading: 'Supporting stones', asList: true },
      { field: 'how_to_use', heading: 'How to use the kit' },
      { field: 'cleansing', heading: 'How to cleanse them' },
      { field: 'charging', heading: 'How to charge them' },
      { field: 'common_mistakes', heading: 'Common mistakes', asList: true },
      { field: 'the_deeper_truth', heading: 'The deeper truth' },
      { field: 'pair_with_signs', heading: 'Pair with signs', asList: true },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: DREAM_SYMBOLS, routeBase: 'dreams', category: 'dreams',
    displayLabel: 'Dream symbols',
    meta: r => [{ label: 'Realm', value: cap(r.realm) }],
    fields: [
      { field: 'meaning', heading: 'What the dream is saying' },
      { field: 'what_your_psyche_is_processing', heading: 'What your psyche is processing' },
      { field: 'common_variants', heading: 'Common variants', asList: true },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_warning', heading: 'The warning' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: EMPATHS, routeBase: 'empath-types', category: 'empath_types',
    displayLabel: 'Empath types',
    meta: r => [{ label: 'Family', value: cap(r.family) }],
    fields: [
      { field: 'meaning', heading: 'What this empath type is' },
      { field: 'signs', heading: 'Signs you might be one' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'protection_practice', heading: 'The protection practice' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: GODDESSES, routeBase: 'goddesses', category: 'goddesses',
    displayLabel: 'Goddesses',
    meta: r => [{ label: 'Role', value: r.role }, { label: 'Tradition', value: r.tradition }, { label: 'Family', value: cap(r.family) }],
    fields: [
      { field: 'meaning', heading: 'Who she is' },
      { field: 'signs_present', heading: 'Signs of her presence' },
      { field: 'how_to_call', heading: 'How to call her' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: HEXAGRAMS, routeBase: 'iching', category: 'iching',
    displayLabel: 'I Ching',
    titleField: 'name_en',
    meta: r => [{ label: 'Hexagram', value: `${r.n} (${r.chinese} ${r.pinyin})` }, { label: 'Trigrams', value: r.trigrams }, { label: 'Family', value: cap(r.family) }],
    titleTemplate: r => `Hexagram ${r.n}: ${r.name_en} — I Ching Meaning`,
    descriptionTemplate: r => `Hexagram ${r.n} (${r.chinese} ${r.pinyin}): meaning, when pulled, changing lines, in love, in work. ${r.one_liner.slice(0, 100)}`,
    fields: [
      { field: 'meaning', heading: 'The hexagram' },
      { field: 'when_pulled', heading: 'When you pull this hexagram' },
      { field: 'changing_lines', heading: 'Changing lines' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: HOUSES, routeBase: 'houses', category: 'houses',
    displayLabel: 'Houses',
    titleField: 'display',
    meta: r => [{ label: 'House', value: r.ordinal }, { label: 'Natural sign', value: r.natural_sign }, { label: 'Natural ruler', value: r.natural_ruler }, { label: 'Axis', value: r.axis }],
    fields: [
      { field: 'themes', heading: 'Themes' },
      { field: 'in_chart', heading: 'In your chart' },
      { field: 'empty_house', heading: 'Empty house' },
      { field: 'shadow', heading: 'The shadow' },
      { field: 'practice', heading: 'The practice' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: LUNAR_PHASES, routeBase: 'lunar-phases', category: 'lunar_phases',
    displayLabel: 'Lunar phases',
    meta: r => [{ label: 'Phase', value: r.name }, { label: 'Day of cycle', value: r.day_of_cycle }, { label: 'Illumination', value: r.illumination }, { label: 'Type', value: r.type_label }],
    fields: [
      { field: 'meaning', heading: 'What this phase is' },
      { field: 'whats_happening', heading: 'What\'s happening in the sky' },
      { field: 'what_it_feels_like', heading: 'What it feels like' },
      { field: 'what_to_do', heading: 'What to do' },
      { field: 'what_to_release', heading: 'What to release' },
      { field: 'ritual', heading: 'A simple ritual' },
      { field: 'the_lesson', heading: 'The lesson' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: MANIFESTATION_METHODS, routeBase: 'manifestation', category: 'manifestation',
    displayLabel: 'Manifestation methods',
    meta: r => [{ label: 'Realm', value: cap(r.realm) }, { label: 'Origin', value: r.origin_note }],
    fields: [
      { field: 'meaning', heading: 'What this method is' },
      { field: 'how_it_works', heading: 'How it works' },
      { field: 'steps', heading: 'The steps', asList: true },
      { field: 'when_to_use', heading: 'When to use it' },
      { field: 'common_mistakes', heading: 'Common mistakes', asList: true },
      { field: 'the_deeper_truth', heading: 'The deeper truth' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: MANTRAS, routeBase: 'mantras', category: 'mantras',
    displayLabel: 'Mantras',
    titleField: 'text',
    meta: r => [{ label: 'Translation', value: r.translation }, { label: 'Tradition', value: r.tradition }, { label: 'Family', value: cap(r.family) }],
    fields: [
      { field: 'meaning', heading: 'What this mantra means' },
      { field: 'what_it_does', heading: 'What it does' },
      { field: 'how_to_chant', heading: 'How to chant it' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: LIFE_PATHS, routeBase: 'numerology', category: 'numerology',
    displayLabel: 'Numerology — Life paths',
    titleField: 'display',
    meta: r => [{ label: 'Number', value: r.num }, { label: 'Archetype', value: r.archetype }, { label: 'Ruling planet', value: r.ruling_planet }, { label: 'Element', value: cap(r.element) }],
    fields: [
      { field: 'essence', heading: 'The essence' },
      { field: 'gifts', heading: 'Gifts' },
      { field: 'shadows', heading: 'Shadows' },
      { field: 'in_love', heading: 'In love' },
      { field: 'at_work', heading: 'At work' },
      { field: 'spiritual_gift', heading: 'Spiritual gift' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: PERSONAL_YEARS, routeBase: 'personal-year', category: 'personal_year',
    slugField: 'num',
    titleField: 'display',
    displayLabel: 'Personal years',
    meta: r => [{ label: 'Theme', value: r.theme }],
    fields: [
      { field: 'meaning', heading: 'The year ahead' },
      { field: 'what_its_for', heading: 'What this year is for' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'money', heading: 'Money' },
      { field: 'what_to_release', heading: 'What to release' },
      { field: 'what_to_invite', heading: 'What to invite' },
      { field: 'daily_practice', heading: 'Daily practice' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: PLANETS, routeBase: 'planets', category: 'planets',
    displayLabel: 'Planets',
    meta: r => [{ label: 'Planet', value: r.name }, { label: 'Symbol', value: r.symbol }, { label: 'Rules', value: r.rules }, { label: 'Signs ruled', value: r.rules_signs }, { label: 'Speed', value: r.speed }],
    fields: [
      { field: 'meaning', heading: 'What this planet is' },
      { field: 'in_your_chart', heading: 'In your chart' },
      { field: 'in_a_sign', heading: 'In a sign' },
      { field: 'in_a_house', heading: 'In a house' },
      { field: 'shadow', heading: 'The shadow' },
      { field: 'return_or_transit', heading: 'Returns & transits' },
      { field: 'what_it_teaches', heading: 'What it teaches' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: RUNES, routeBase: 'runes', category: 'runes',
    displayLabel: 'Runes',
    meta: r => [{ label: 'Rune', value: r.rune_char }, { label: 'Sound', value: r.sound }, { label: 'Aett', value: cap(r.aett) }],
    fields: [
      { field: 'meaning', heading: 'What this rune means' },
      { field: 'upright', heading: 'Upright' },
      { field: 'reversed', heading: 'Reversed (or merkstave)' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: GEOMETRIES, routeBase: 'sacred-geometry', category: 'sacred_geometry',
    displayLabel: 'Sacred geometry',
    meta: r => [{ label: 'Family', value: cap(r.family) }],
    fields: [
      { field: 'meaning', heading: 'What this pattern is' },
      { field: 'pattern', heading: 'The pattern' },
      { field: 'where_found', heading: 'Where it\'s found' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: SOLFEGGIOS, routeBase: 'solfeggio', category: 'solfeggio',
    displayLabel: 'Solfeggio frequencies',
    meta: r => [{ label: 'Frequency', value: `${r.hz} Hz` }, { label: 'Family', value: cap(r.family) }],
    fields: [
      { field: 'meaning', heading: 'What this frequency is' },
      { field: 'what_it_does', heading: 'What it does' },
      { field: 'where_found', heading: 'Where it\'s found' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: SPIRIT_ANIMALS, routeBase: 'spirit-animals', category: 'spirit_animals',
    displayLabel: 'Spirit animals',
    meta: r => [{ label: 'Archetype', value: r.archetype }, { label: 'Realm', value: cap(r.realm) }],
    fields: [
      { field: 'meaning', heading: 'What this animal is' },
      { field: 'when_it_appears', heading: 'When it appears' },
      { field: 'gifts', heading: 'Gifts', asList: true },
      { field: 'shadows', heading: 'Shadows', asList: true },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_lesson', heading: 'The lesson' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: SYMBOLS, routeBase: 'symbols', category: 'symbols',
    displayLabel: 'Spiritual symbols',
    meta: r => [{ label: 'Origin', value: r.origin }, { label: 'Category', value: cap(r.category) }],
    fields: [
      { field: 'meaning', heading: 'What this symbol is' },
      { field: 'the_message', heading: 'The message' },
      { field: 'the_misuse', heading: 'How it\'s misused' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: TRANSITS, routeBase: 'transits', category: 'transits',
    displayLabel: 'Transits',
    meta: r => [{ label: 'Planet', value: r.planet }, { label: 'Cadence', value: r.cadence }, { label: 'When', value: r.age_or_when }],
    fields: [
      { field: 'meaning', heading: 'What this transit is' },
      { field: 'what_it_feels_like', heading: 'What it feels like' },
      { field: 'what_to_do', heading: 'What to do' },
      { field: 'what_not_to_do', heading: 'What not to do' },
      { field: 'the_lesson', heading: 'The lesson' },
      { field: 'myth_buster', heading: 'Myth-buster' },
      { field: 'shadow', heading: 'The shadow' },
      { field: 'pair_with', heading: 'Pair it with' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  out.push(...catalogPages({
    records: TWIN_FLAME_STAGES, routeBase: 'twin-flames', category: 'twin_flames',
    displayLabel: 'Twin flame stages',
    meta: r => [{ label: 'Stage', value: String(r.number) }, { label: 'Tone', value: cap(r.tone) }],
    fields: [
      { field: 'what_it_is', heading: 'What this stage is' },
      { field: 'what_it_feels_like', heading: 'What it feels like' },
      { field: 'signs_youre_in_it', heading: 'Signs you\'re in it', asList: true },
      { field: 'the_work', heading: 'The work' },
      { field: 'the_trap', heading: 'The trap' },
      { field: 'what_helps', heading: 'What helps' },
      { field: 'the_lesson', heading: 'The lesson' },
    ],
  }))

  // /decans/[sign-num] — 36 decans
  for (const slug of Object.keys(DECAN_PROFILES)) {
    const d = DECAN_PROFILES[slug]
    out.push({
      route: `decans/${slug}`,
      category: 'decans',
      title: `${cap(d.sign)} Decan ${d.num} — ${cap(d.sub_sign)} sub-sign ruled by ${d.sub_planet}`,
      display_title: `${cap(d.sign)} ${d.num} Decan`,
      description: `${cap(d.sign)} Decan ${d.num}: ${d.dates} (${d.degrees}). Sub-ruled by ${d.sub_planet}, with a ${d.sub_sign} flavor.`,
      meta: [
        { label: 'Sign', value: cap(d.sign) },
        { label: 'Decan', value: String(d.num) },
        { label: 'Dates', value: d.dates },
        { label: 'Degrees', value: d.degrees },
        { label: 'Sub-sign', value: cap(d.sub_sign) },
        { label: 'Sub-ruler', value: d.sub_planet },
      ],
      intro: d.vibe,
      sections: [
        { heading: 'The decan in depth', body: d.longer },
      ],
    })
  }

  // Decans index
  out.push({
    route: 'decans',
    category: 'decans',
    title: 'Decans — All 36 ten-degree segments of the zodiac',
    display_title: 'Decans',
    description: 'Every sign breaks into three 10° decans, each with a different planetary sub-flavor. The full 36-decan reference.',
    intro: '36 decans — each a finer-grained reading of who you are within your sign.',
    sections: [
      { heading: 'All 36 decans', body: '', list: Object.values(DECAN_PROFILES).map((d: any) => `${cap(d.sign)} Decan ${d.num} — ${d.dates}`) },
    ],
  })

  // /personal-planets/[planet-sign] — 36 entries (3 planets × 12 signs)
  for (const planet of PERSONAL_PLANETS) {
    for (const sign of SIGNS) {
      const slug = `${planet}-${sign}`
      const p = PERSONAL_PROFILES[slug]
      if (!p) continue
      out.push({
        route: `personal-planets/${slug}`,
        category: 'personal_planets',
        title: `${cap(planet)} in ${cap(sign)} — Personal Planet Meaning`,
        display_title: `${cap(planet)} in ${cap(sign)}`,
        description: `${cap(planet)} in ${cap(sign)}: how this personal-planet placement shows up — vibe, body, shadow, practice.`,
        meta: [{ label: 'Planet', value: cap(planet) }, { label: 'Sign', value: cap(sign) }],
        intro: p.vibe,
        sections: [
          { heading: 'The lived shape', body: p.body },
          { heading: 'The shadow', body: p.shadow },
          { heading: 'The practice', body: p.practice },
        ],
      })
    }
  }

  // /personal-planets index
  out.push({
    route: 'personal-planets',
    category: 'personal_planets',
    title: 'Personal Planets — Mercury, Venus, Mars across the zodiac',
    display_title: 'Personal Planets',
    description: 'Mercury, Venus, Mars — your personal planets — through all twelve signs. 36 placements.',
    intro: 'Mercury, Venus, Mars — your closest planetary companions.',
    sections: [
      { heading: 'All personal planet placements', body: '', list: Object.keys(PERSONAL_PROFILES).map(s => s.replace('-', ' in ')) },
    ],
  })

  return out
}
