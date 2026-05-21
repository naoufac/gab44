// World-traditions registry — gab44 A1 expansion.
// 20 worker-only modules ported into Astro: yoga, ayurveda, kabbalah, vedic, and 8 world pantheons.
// Mirrors registry-wisdom.ts catalog pattern.

import type { Page } from './types'
import { LIMBS } from '@data/eight_limbs'
import { MUDRAS } from '@data/mudras'
import { PRANAYAMAS } from '@data/pranayama'
import { ASANAS } from '@data/asanas'
import { DOSHAS } from '@data/doshas'
import { BACH_REMEDIES } from '@data/bach_flowers'
import { NAKSHATRAS } from '@data/nakshatras'
import { ETHICS } from '@data/yamas_niyamas'
import { SEFIROT } from '@data/sefirot'
import { KLESHAS } from '@data/kleshas'
import { DEVAS } from '@data/hindu_devas'
import { OLYMPIANS } from '@data/olympians'
import { EGYPTIAN_GODS } from '@data/egyptian_gods'
import { CELTIC_GODS } from '@data/celtic_gods'
import { ORISHAS } from '@data/orishas'
import { MESOPOTAMIAN_GODS } from '@data/mesopotamian_gods'
import { AZTEC_GODS } from '@data/aztec_gods'
import { SHINTO_KAMI } from '@data/shinto_kami'
import { NORSE_GODS } from '@data/norse_gods'
import { SABBATS } from '@data/sabbats'
import { ROMAN_GODS } from '@data/roman_gods'
import { SLAVIC_GODS } from '@data/slavic_gods'

function cap(s: string): string { return s ? s.charAt(0).toUpperCase() + s.slice(1) : '' }

interface FieldSpec {
  field: string
  heading: string
  asList?: boolean
}

interface CatalogSpec {
  records: any[]
  routeBase: string
  category: string
  displayLabel: string
  slugField?: string
  titleField?: string
  symbolField?: string
  introField?: string
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

export function allTraditionPages(): Page[] {
  const out: Page[] = []

  // Yoga: eight limbs
  out.push(...catalogPages({
    records: LIMBS, routeBase: 'limbs', category: 'limbs',
    displayLabel: 'Eight Limbs of Yoga', titleField: 'text',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Position', value: String(r.position) },
      { label: 'Zone', value: cap(r.zone) },
    ],
    fields: [
      { field: 'meaning', heading: 'The limb' },
      { field: 'what_it_is', heading: 'What it actually is' },
      { field: 'how_to_practise', heading: 'How to practise' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'operationalized_by', heading: 'Operationalized by' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Mudras
  out.push(...catalogPages({
    records: MUDRAS, routeBase: 'mudras', category: 'mudras',
    displayLabel: 'Mudras', titleField: 'text',
    meta: r => [
      { label: 'Translation', value: r.translation },
      { label: 'Tradition', value: r.tradition },
      { label: 'Family', value: cap(r.family) },
    ],
    fields: [
      { field: 'meaning', heading: 'The mudra' },
      { field: 'what_it_does', heading: 'What it does' },
      { field: 'how_to_form', heading: 'How to form it' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Pranayama
  out.push(...catalogPages({
    records: PRANAYAMAS, routeBase: 'pranayama', category: 'pranayama',
    displayLabel: 'Pranayama', titleField: 'text',
    meta: r => [
      { label: 'Translation', value: r.translation },
      { label: 'Tradition', value: r.tradition },
      { label: 'Family', value: cap(r.family) },
    ],
    fields: [
      { field: 'meaning', heading: 'The breath' },
      { field: 'what_it_does', heading: 'What it does' },
      { field: 'how_to_form', heading: 'How to practise it' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Asanas
  out.push(...catalogPages({
    records: ASANAS, routeBase: 'asanas', category: 'asanas',
    displayLabel: 'Asanas', titleField: 'text',
    meta: r => [
      { label: 'Translation', value: r.translation },
      { label: 'Tradition', value: r.tradition },
      { label: 'Family', value: cap(r.family) },
    ],
    fields: [
      { field: 'meaning', heading: 'The pose' },
      { field: 'what_it_does', heading: 'What it does' },
      { field: 'how_to_form', heading: 'How to form it' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Doshas
  out.push(...catalogPages({
    records: DOSHAS, routeBase: 'doshas', category: 'doshas',
    displayLabel: 'Doshas (Ayurveda)', titleField: 'text',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Elements', value: r.elements },
    ],
    fields: [
      { field: 'meaning', heading: 'The dosha' },
      { field: 'physical_signs', heading: 'Physical signs' },
      { field: 'mental_signs', heading: 'Mental signs' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'how_to_balance', heading: 'How to balance it' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Bach flowers
  out.push(...catalogPages({
    records: BACH_REMEDIES, routeBase: 'bach-flowers', category: 'bach_flowers',
    displayLabel: 'Bach Flower Remedies', titleField: 'text',
    meta: r => [
      { label: 'Latin', value: r.latin },
      { label: 'Group', value: cap(r.group) },
    ],
    fields: [
      { field: 'meaning', heading: 'The remedy' },
      { field: 'the_state', heading: 'The state it addresses' },
      { field: 'the_shift', heading: 'The shift it makes' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_practice', heading: 'How to use it' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Nakshatras
  out.push(...catalogPages({
    records: NAKSHATRAS, routeBase: 'nakshatras', category: 'nakshatras',
    displayLabel: 'Nakshatras (Vedic)', titleField: 'name',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Number', value: String(r.n) },
      { label: 'Ruler', value: r.ruler },
      { label: 'Deity', value: r.deity },
      { label: 'Sign range', value: r.sign_range },
      { label: 'Family', value: cap(r.family) },
    ],
    fields: [
      { field: 'meaning', heading: 'The lunar mansion' },
      { field: 'when_active', heading: 'When the moon is here' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Yamas & Niyamas
  out.push(...catalogPages({
    records: ETHICS, routeBase: 'yamas-niyamas', category: 'yamas_niyamas',
    displayLabel: 'Yamas & Niyamas', titleField: 'text',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Translation', value: r.translation },
      { label: 'Family', value: cap(r.family) },
      { label: 'Position', value: String(r.position) },
    ],
    fields: [
      { field: 'meaning', heading: 'The ethic' },
      { field: 'what_it_actually_is', heading: 'What it actually is' },
      { field: 'thirty_day_practice', heading: 'A thirty-day practice' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Sefirot
  out.push(...catalogPages({
    records: SEFIROT, routeBase: 'sefirot', category: 'sefirot',
    displayLabel: 'Sefirot (Kabbalah)', titleField: 'text',
    meta: r => [
      { label: 'Hebrew', value: r.hebrew },
      { label: 'Translation', value: r.translation },
      { label: 'Pillar', value: cap(r.pillar) },
      { label: 'Position', value: String(r.position) },
      { label: 'Triad', value: r.triad },
    ],
    fields: [
      { field: 'meaning', heading: 'The sefirah' },
      { field: 'what_it_carries', heading: 'What it carries' },
      { field: 'how_to_work_with_it', heading: 'How to work with it' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Kleshas
  out.push(...catalogPages({
    records: KLESHAS, routeBase: 'kleshas', category: 'kleshas',
    displayLabel: 'Kleshas (Yoga Sutras)', titleField: 'text',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Sutra', value: r.sutra },
      { label: 'Family', value: cap(r.family) },
      { label: 'Position', value: String(r.position) },
    ],
    fields: [
      { field: 'meaning', heading: 'The klesha' },
      { field: 'what_it_looks_like', heading: 'What it looks like' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift inside it' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'the_remedy', heading: 'The remedy' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Hindu Devas
  out.push(...catalogPages({
    records: DEVAS, routeBase: 'devas', category: 'devas',
    displayLabel: 'Hindu Devas', titleField: 'text',
    meta: r => [
      { label: 'Sanskrit', value: r.sanskrit },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Olympian Gods
  out.push(...catalogPages({
    records: OLYMPIANS, routeBase: 'olympians', category: 'olympians',
    displayLabel: 'Olympian Gods', titleField: 'text',
    meta: r => [
      { label: 'Greek', value: r.greek },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Egyptian Gods
  out.push(...catalogPages({
    records: EGYPTIAN_GODS, routeBase: 'egyptian-gods', category: 'egyptian_gods',
    displayLabel: 'Egyptian Gods', titleField: 'text',
    meta: r => [
      { label: 'Hieroglyph name', value: r.hieroglyph_name },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Celtic Gods
  out.push(...catalogPages({
    records: CELTIC_GODS, routeBase: 'celtic-gods', category: 'celtic_gods',
    displayLabel: 'Celtic Gods', titleField: 'text',
    meta: r => [
      { label: 'Gaelic', value: r.gaelic_name },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Orishas
  out.push(...catalogPages({
    records: ORISHAS, routeBase: 'orishas', category: 'orishas',
    displayLabel: 'Orishas', titleField: 'text',
    meta: r => [
      { label: 'Yoruba', value: r.yoruba_name },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Mesopotamian Gods
  out.push(...catalogPages({
    records: MESOPOTAMIAN_GODS, routeBase: 'mesopotamian-gods', category: 'mesopotamian_gods',
    displayLabel: 'Mesopotamian Gods', titleField: 'text',
    meta: r => [
      { label: 'Names', value: r.names },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Aztec Gods
  out.push(...catalogPages({
    records: AZTEC_GODS, routeBase: 'aztec-gods', category: 'aztec_gods',
    displayLabel: 'Aztec Gods', titleField: 'text',
    meta: r => [
      { label: 'Names', value: r.names },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Shinto Kami
  out.push(...catalogPages({
    records: SHINTO_KAMI, routeBase: 'shinto-kami', category: 'shinto_kami',
    displayLabel: 'Shinto Kami', titleField: 'text',
    meta: r => [
      { label: 'Names', value: r.names },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Norse Gods
  out.push(...catalogPages({
    records: NORSE_GODS, routeBase: 'norse-gods', category: 'norse_gods',
    displayLabel: 'Norse Gods', titleField: 'text',
    meta: r => [
      { label: 'Old Norse', value: r.old_norse },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Sabbats (Wheel of the Year)
  out.push(...catalogPages({
    records: SABBATS, routeBase: 'sabbats', category: 'sabbats',
    displayLabel: 'Wheel of the Year (Sabbats)', titleField: 'text',
    meta: r => [
      { label: 'Pronunciation', value: r.pronunciation },
      { label: 'Northern date', value: r.date_northern },
      { label: 'Southern date', value: r.date_southern },
      { label: 'Family', value: cap(r.family) },
      { label: 'Zodiac gate', value: r.zodiac_gate },
    ],
    fields: [
      { field: 'meaning', heading: 'The sabbat' },
      { field: 'what_to_actually_do', heading: 'What to actually do' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Roman Gods — Dii Consentes (12), companion to Olympians per the
  // interpretatio graeca but structurally distinct (jurisdiction-and-formula,
  // not personality-and-myth). Ported from worker 2026-05-21.
  out.push(...catalogPages({
    records: ROMAN_GODS, routeBase: 'roman-gods', category: 'roman_gods',
    displayLabel: 'Roman Gods', titleField: 'text',
    meta: r => [
      { label: 'Names', value: r.names },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'the_canonical_story', heading: 'The canonical story' },
      { field: 'the_lesson', heading: 'The lesson' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  // Slavic Gods — three families: sovereign, life, shadow. Completes the
  // European pantheons set (Greek olympians, Roman gods, Celtic, Norse).
  // Source: Chronicle of Nestor, Helmold of Bosau, Slavic Primary Chronicle.
  out.push(...catalogPages({
    records: SLAVIC_GODS, routeBase: 'slavic-gods', category: 'slavic_gods',
    displayLabel: 'Slavic Gods', titleField: 'text',
    meta: r => [
      { label: 'Names', value: r.names },
      { label: 'Family', value: cap(r.family) },
      { label: 'Epithet', value: r.epithet },
      { label: 'Sources', value: r.source_text },
    ],
    fields: [
      { field: 'meaning', heading: 'Who they are' },
      { field: 'iconography', heading: 'Iconography' },
      { field: 'invocation', heading: 'How to invoke' },
      { field: 'in_love', heading: 'In love' },
      { field: 'in_work', heading: 'In work' },
      { field: 'the_gift', heading: 'The gift' },
      { field: 'the_shadow', heading: 'The shadow' },
      { field: 'key_questions', heading: 'Three questions to sit with', asList: true },
    ],
  }))

  return out
}
