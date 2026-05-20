// Per-sign asteroid + dwarf-planet + retrograde + node pages.
// Pattern: each module exports XXX_PROFILES: Record<Sign, XxxProfile>.
// Each profile has bespoke fields; we map field-name → section heading.

import type { Page } from './types'
import { SIGNS } from '@data/daily'
import type { Sign } from '@data/daily'
import { ZODIAC_META } from '@data/zodiac'

import { ASBOLUS_PROFILES } from '@data/asbolus'
import { CERES_PROFILES } from '@data/ceres'
import { CHARIKLO_PROFILES } from '@data/chariklo'
import { CHIRON_PROFILES } from '@data/chiron'
import { ERIS_PROFILES } from '@data/eris'
import { EROS_PROFILES } from '@data/eros'
import { HAUMEA_PROFILES } from '@data/haumea'
import { HYGIEA_PROFILES } from '@data/hygiea'
import { JUNO_PROFILES } from '@data/juno'
import { LILITH_PROFILES } from '@data/lilith'
import { MAKEMAKE_PROFILES } from '@data/makemake'
import { MARS_R_PROFILES } from '@data/mars_retrograde'
import { MR_PROFILES } from '@data/mercury_retrograde'
import { NESSUS_PROFILES } from '@data/nessus'
import { NODE_PROFILES } from '@data/nodes'
import { PALLAS_PROFILES } from '@data/pallas'
import { PHOLUS_PROFILES } from '@data/pholus'
import { PSYCHE_PROFILES } from '@data/psyche'
import { SATURN_PROFILES } from '@data/saturn_return'
import { SEDNA_PROFILES } from '@data/sedna'
import { VR_PROFILES } from '@data/venus_retrograde'
import { VERTEX_PROFILES } from '@data/vertex'
import { VESTA_PROFILES } from '@data/vesta'

function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1) }

interface AsteroidSpec {
  routeBase: string                // e.g. "chariklo"
  category: string                 // matches CATEGORY key in nav.ts
  displayLabel: string             // e.g. "Chariklo"
  titleSuffix: string              // e.g. "— Chariklo in {Sign}" (use {Sign} placeholder)
  descriptionPrefix: string        // intro sentence
  profiles: Record<string, any>
  fieldMap: Record<string, string> // field name → section heading
  introField?: string              // which field becomes intro line
  listFields?: Record<string, true>// field names that are arrays → render as list
}

function asteroidPages(spec: AsteroidSpec): Page[] {
  const out: Page[] = []
  for (const sign of SIGNS) {
    const prof = spec.profiles[sign]
    if (!prof) continue
    const m = ZODIAC_META[sign as Sign]
    const title = spec.titleSuffix.replace('{Sign}', cap(sign))
    const intro = spec.introField && prof[spec.introField] ? String(prof[spec.introField]) : `${spec.displayLabel} in ${cap(sign)}.`

    const sections = Object.entries(spec.fieldMap)
      .filter(([field]) => field !== spec.introField)
      .map(([field, heading]) => {
        const val = prof[field]
        if (val == null) return null
        if (Array.isArray(val)) {
          return { heading, body: '', list: val.map(String) }
        }
        return { heading, body: String(val) }
      })
      .filter((s): s is { heading: string; body: string; list?: string[] } => s !== null)

    out.push({
      route: `${spec.routeBase}/${sign}`,
      category: spec.category,
      title,
      display_title: title,
      description: `${spec.descriptionPrefix} ${cap(sign)} (${m.symbol}, ${m.element}).`,
      symbol: m.symbol,
      meta: [
        { label: 'Sign', value: cap(sign) },
        { label: 'Element', value: cap(m.element) },
      ],
      intro,
      sections,
      related: SIGNS.filter(s => s !== sign).slice(0, 6).map(s => ({
        label: `${spec.displayLabel} in ${cap(s)}`, href: `/${spec.routeBase}/${s}`,
      })),
    })
  }

  // Index page for the asteroid
  out.push({
    route: spec.routeBase,
    category: spec.category,
    title: `${spec.displayLabel} in Astrology — All 12 signs`,
    display_title: spec.displayLabel,
    description: `${spec.descriptionPrefix} Across the twelve signs.`,
    intro: `${spec.displayLabel} through the zodiac wheel.`,
    sections: [
      {
        heading: 'By sign',
        body: '',
        list: SIGNS.map(s => `${spec.displayLabel} in ${cap(s)}`),
      },
    ],
  })

  return out
}

export function allAsteroidPages(): Page[] {
  const out: Page[] = []

  out.push(...asteroidPages({
    routeBase: 'asbolus',  category: 'asbolus',  displayLabel: 'Asbolus',
    titleSuffix: 'Asbolus in {Sign} — The Seer\'s Foresight',
    descriptionPrefix: 'Asbolus, the centaur-seer, in this register: what you foresee, what it costs, and the medicine for the prophet.',
    profiles: ASBOLUS_PROFILES,
    fieldMap: { foresees: 'What you foresee', cost: 'The cost', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'ceres', category: 'ceres', displayLabel: 'Ceres',
    titleSuffix: 'Ceres in {Sign} — How You Nourish',
    descriptionPrefix: 'Ceres, the mother of nourishment, in this register: how you feed and are fed.',
    profiles: CERES_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', feed_list: 'What feeds it', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
    listFields: { feed_list: true, shadow_list: true },
  }))

  out.push(...asteroidPages({
    routeBase: 'chariklo', category: 'chariklo', displayLabel: 'Chariklo',
    titleSuffix: 'Chariklo in {Sign} — The Sacred Enclosure',
    descriptionPrefix: 'Chariklo, the boundary-holder, in this register: the ring she draws, the depth-work she protects.',
    profiles: CHARIKLO_PROFILES,
    fieldMap: { encloses: 'What she encloses', protects: 'What she protects', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'chiron', category: 'chiron', displayLabel: 'Chiron',
    titleSuffix: 'Chiron in {Sign} — The Wounded Healer',
    descriptionPrefix: 'Chiron in this register: the original wound, the gift it becomes, the practice that works with it.',
    profiles: CHIRON_PROFILES,
    fieldMap: { wound: 'The wound', gift: 'The gift', body: 'The lived shape', practice: 'The practice', paradox: 'The paradox' },
  }))

  out.push(...asteroidPages({
    routeBase: 'eris', category: 'eris', displayLabel: 'Eris',
    titleSuffix: 'Eris in {Sign} — The Disruption',
    descriptionPrefix: 'Eris in this register: the false harmony she breaks, the truth she unmasks.',
    profiles: ERIS_PROFILES,
    fieldMap: { disrupts: 'What she disrupts', unmasks: 'What she unmasks', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'eros', category: 'eros', displayLabel: 'Eros',
    titleSuffix: 'Eros in {Sign} — How You Desire',
    descriptionPrefix: 'Eros in this register: the shape of your desire, what turns you on, the shadow side.',
    profiles: EROS_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', desire_list: 'What you desire', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'haumea', category: 'haumea', displayLabel: 'Haumea',
    titleSuffix: 'Haumea in {Sign} — Rapid Generation',
    descriptionPrefix: 'Haumea in this register: what she births, what it costs, the practice of generative fragmentation.',
    profiles: HAUMEA_PROFILES,
    fieldMap: { births: 'What she births', costs: 'What it costs', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'hygiea', category: 'hygiea', displayLabel: 'Hygiea',
    titleSuffix: 'Hygiea in {Sign} — Health & Rest',
    descriptionPrefix: 'Hygiea in this register: the rest you need, the trap of over-tending, the practice.',
    profiles: HYGIEA_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', rest_list: 'What restores', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'juno', category: 'juno', displayLabel: 'Juno',
    titleSuffix: 'Juno in {Sign} — How You Commit',
    descriptionPrefix: 'Juno in this register: the texture of long commitment, what you bring to partnership, the shadow.',
    profiles: JUNO_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', commit_list: 'How you commit', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'lilith', category: 'lilith', displayLabel: 'Lilith',
    titleSuffix: 'Lilith in {Sign} — The Wild Feminine',
    descriptionPrefix: 'Lilith in this register: the archetype, the power, the wound, the shadow shape, the practice.',
    profiles: LILITH_PROFILES,
    fieldMap: { archetype: 'The archetype', power: 'The power', wound: 'The wound', shadow: 'The shadow', body: 'The lived shape', practice: 'The practice', trigger: 'The trigger' },
  }))

  out.push(...asteroidPages({
    routeBase: 'makemake', category: 'makemake', displayLabel: 'Makemake',
    titleSuffix: 'Makemake in {Sign} — Long-Cycle Restoration',
    descriptionPrefix: 'Makemake in this register: what she restores, the patience the work requires, the medicine.',
    profiles: MAKEMAKE_PROFILES,
    fieldMap: { restores: 'What she restores', patience: 'The patience', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'mars-retrograde', category: 'mars_retrograde', displayLabel: 'Mars Retrograde',
    titleSuffix: 'Mars Retrograde in {Sign} — How to Move',
    descriptionPrefix: 'Mars retrograde in this register: the trap, the gift, what to do (and what not to) during the window.',
    profiles: MARS_R_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', do_list: 'During the window — do', dont_list: 'During the window — don\'t', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'mercury-retrograde', category: 'mercury_retrograde', displayLabel: 'Mercury Retrograde',
    titleSuffix: 'Mercury Retrograde in {Sign} — How to Speak',
    descriptionPrefix: 'Mercury retrograde in this register: the trap, the gift, the practice for the 3-week window.',
    profiles: MR_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', do_list: 'During the window — do', dont_list: 'During the window — don\'t', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'nessus', category: 'nessus', displayLabel: 'Nessus',
    titleSuffix: 'Nessus in {Sign} — The Cycle-Breaker',
    descriptionPrefix: 'Nessus in this register: the boundary-breach, the lineage cycle, the cycle-breaking work.',
    profiles: NESSUS_PROFILES,
    fieldMap: { breach: 'The breach', cycle: 'The cycle', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'nodes', category: 'nodes', displayLabel: 'North Node',
    titleSuffix: 'North Node in {Sign} — Your Soul\'s Growth Edge',
    descriptionPrefix: 'North Node in this register: what calls you forward, what tempts you back, the practice.',
    profiles: NODE_PROFILES,
    fieldMap: { growth: 'What the North Node asks', release: 'What the South Node lets go', body: 'The lived shape', practice: 'The practice', birth_years: 'Approximate years' },
  }))

  out.push(...asteroidPages({
    routeBase: 'pallas', category: 'pallas', displayLabel: 'Pallas',
    titleSuffix: 'Pallas in {Sign} — Strategic Wisdom',
    descriptionPrefix: 'Pallas in this register: the patterns you see, the strategy you bring, the medicine.',
    profiles: PALLAS_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', see_list: 'What she sees', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'pholus', category: 'pholus', displayLabel: 'Pholus',
    titleSuffix: 'Pholus in {Sign} — Small Cause, Large Effect',
    descriptionPrefix: 'Pholus in this register: the wine-jar that gets unsealed, the cascade that follows, the medicine.',
    profiles: PHOLUS_PROFILES,
    fieldMap: { unseals: 'What he unseals', cascade: 'The cascade', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'psyche', category: 'psyche', displayLabel: 'Psyche',
    titleSuffix: 'Psyche in {Sign} — Being Truly Seen',
    descriptionPrefix: 'Psyche in this register: where you long to be recognized, the trap, the practice.',
    profiles: PSYCHE_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', recognized_list: 'Where you\'re recognized', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'saturn-return', category: 'saturn_return', displayLabel: 'Saturn Return',
    titleSuffix: 'Saturn Return in {Sign} — The Great Curriculum',
    descriptionPrefix: 'Saturn return in this register: the curriculum, what falls apart, what gets built.',
    profiles: SATURN_PROFILES,
    fieldMap: { curriculum: 'The curriculum', dismantles: 'What dismantles', builds: 'What gets built', body: 'The lived shape', practice: 'The practice', paradox: 'The paradox' },
  }))

  out.push(...asteroidPages({
    routeBase: 'sedna', category: 'sedna', displayLabel: 'Sedna',
    titleSuffix: 'Sedna in {Sign} — Betrayal & The Long Return',
    descriptionPrefix: 'Sedna in this register: the betrayal, the long return to sovereignty, the medicine.',
    profiles: SEDNA_PROFILES,
    fieldMap: { betrayal: 'The betrayal', return_: 'The long return', body: 'The lived shape', medicine: 'The medicine', shadow: 'The shadow', band: 'When it lands' },
  }))

  out.push(...asteroidPages({
    routeBase: 'venus-retrograde', category: 'venus_retrograde', displayLabel: 'Venus Retrograde',
    titleSuffix: 'Venus Retrograde in {Sign} — How to Love',
    descriptionPrefix: 'Venus retrograde in this register: the trap, the gift, the practice for the 40-day window.',
    profiles: VR_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', do_list: 'During the window — do', dont_list: 'During the window — don\'t', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  out.push(...asteroidPages({
    routeBase: 'vertex', category: 'vertex', displayLabel: 'Vertex',
    titleSuffix: 'Vertex in {Sign} — Fated Encounters',
    descriptionPrefix: 'Vertex in this register: the texture of the fated meeting, the door, the practice.',
    profiles: VERTEX_PROFILES,
    fieldMap: { encounter: 'The encounter', door: 'The door', body: 'The lived shape', practice: 'The practice', shadow: 'The shadow', cue: 'The body cue' },
  }))

  out.push(...asteroidPages({
    routeBase: 'vesta', category: 'vesta', displayLabel: 'Vesta',
    titleSuffix: 'Vesta in {Sign} — What You Tend',
    descriptionPrefix: 'Vesta, keeper of the sacred fire, in this register: what you tend, the trap, the practice.',
    profiles: VESTA_PROFILES,
    fieldMap: { oneLine: 'In one line', trap: 'The trap', gift: 'The gift', body: 'The lived shape', tend_list: 'What you tend', shadow_list: 'The shadow shapes', practice: 'The practice', paradox: 'The paradox' },
    introField: 'oneLine',
  }))

  return out
}
