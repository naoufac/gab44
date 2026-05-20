import type { Page } from './types'
import { SIGNS } from '@data/daily'
import type { Sign } from '@data/daily'
import { ZODIAC_META } from '@data/zodiac'
import { PROFILES } from '@data/about'
import { RISING_PROFILES } from '@data/rising'
import { MOON_PROFILES } from '@data/moon'
import { CRYSTALS } from '@data/crystals'
import { ALL_PAIRS, parsePairSlug } from '@data/compat'
import { SUN_RISING_SLUGS, parseSunRisingSlug } from '@data/sun_rising'
import { ELEMENTS, MODALITIES } from '@data/groups'

function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1) }

export function signPages(): Page[] {
  const pages: Page[] = []

  // /horoscopes index
  pages.push({
    route: 'horoscopes',
    category: 'horoscopes',
    title: 'Zodiac Signs — All 12 personalities, traits & life paths',
    display_title: 'The 12 Signs',
    description: 'Deep profiles for every zodiac sign: gifts, shadows, love, career, spiritual gift, life lesson. The whole wheel, written warm.',
    intro: 'Twelve signs, twelve doorways into the same sky.',
    sections: [
      {
        heading: 'The signs',
        body: 'Pick a sign to read its full profile.',
        list: SIGNS.map(s => {
          const m = ZODIAC_META[s as Sign]
          return `${cap(s)} (${m.symbol} ${m.element}, ${m.modality}) — ${PROFILES[s as Sign].core.slice(0, 130)}…`
        }),
      },
    ],
  })

  // /horoscopes/[sign] — 12 deep sign profiles
  for (const sign of SIGNS) {
    const p = PROFILES[sign as Sign]
    const m = ZODIAC_META[sign as Sign]
    pages.push({
      route: `horoscopes/${sign}`,
      category: 'about_sign',
      title: `${cap(sign)} Personality, Traits & Life Path`,
      display_title: cap(sign),
      description: `Deep guide to ${cap(sign)} (${m.symbol}, ${m.element}, ${p.modality}, ruled by ${p.ruling_planet}): gifts, shadows, love, career, spiritual gift, life lesson.`,
      symbol: m.symbol,
      meta: [
        { label: 'Glyph', value: m.glyph },
        { label: 'Element', value: m.element },
        { label: 'Modality', value: p.modality },
        { label: 'Ruler', value: p.ruling_planet },
        { label: 'Season', value: p.season },
      ],
      intro: p.core,
      sections: [
        { heading: 'Gifts', body: '', list: [...p.gifts] },
        { heading: 'Shadows', body: '', list: [...p.shadows] },
        { heading: 'In love', body: p.love },
        { heading: 'In career', body: p.career },
        { heading: 'Spiritual gift', body: p.spiritual_gift },
        { heading: 'The lesson', body: p.lesson },
        { heading: 'Best partners', body: '', list: p.best_partners.map(s => cap(s)) },
        { heading: 'Famous ' + cap(sign) + 's', body: '', list: [...p.famous] },
      ],
      related: SIGNS.filter(s => s !== sign).map(s => ({
        label: cap(s), href: `/horoscopes/${s}`,
      })),
    })
  }

  // /rising/[sign] — 12 rising sign pages
  for (const sign of SIGNS) {
    const r = RISING_PROFILES[sign as Sign]
    const m = ZODIAC_META[sign as Sign]
    pages.push({
      route: `rising/${sign}`,
      category: 'rising',
      title: `${cap(sign)} Rising — Ascendant, First Impression & Life Chapters`,
      display_title: `${cap(sign)} Rising`,
      description: `${cap(sign)} ascendant: first impression, body style, social mask, defense mechanism, life chapters, life path. The face you wear into the world.`,
      symbol: m.symbol,
      meta: [
        { label: 'Sign', value: cap(sign) },
        { label: 'Element', value: m.element },
      ],
      intro: r.first_impression,
      sections: [
        { heading: 'Body style', body: r.body_style },
        { heading: 'Social mask', body: r.social_mask },
        { heading: 'Defense mechanism', body: r.defense_mechanism },
        { heading: 'Life chapters', body: r.life_chapters },
        { heading: 'Life path', body: r.life_path },
      ],
      related: SIGNS.filter(s => s !== sign).slice(0, 6).map(s => ({
        label: `${cap(s)} Rising`, href: `/rising/${s}`,
      })),
    })
  }

  // /moon/[sign] — 12 moon sign pages
  for (const sign of SIGNS) {
    const mo = MOON_PROFILES[sign as Sign]
    const m = ZODIAC_META[sign as Sign]
    pages.push({
      route: `moon/${sign}`,
      category: 'moon',
      title: `${cap(sign)} Moon — Emotional Core, Attachment & What Soothes`,
      display_title: `${cap(sign)} Moon`,
      description: `${cap(sign)} moon sign: emotional core, attachment style, what soothes, what stresses, childhood theme, in partnership. The inner weather.`,
      symbol: m.symbol,
      meta: [
        { label: 'Sign', value: cap(sign) },
        { label: 'Element', value: m.element },
      ],
      intro: mo.emotional_core,
      sections: [
        { heading: 'Attachment', body: mo.attachment },
        { heading: 'What soothes', body: mo.what_soothes },
        { heading: 'What stresses', body: mo.what_stresses },
        { heading: 'Childhood theme', body: mo.childhood_theme },
        { heading: 'In partnership', body: mo.in_partnership },
      ],
      related: SIGNS.filter(s => s !== sign).slice(0, 6).map(s => ({
        label: `${cap(s)} Moon`, href: `/moon/${s}`,
      })),
    })
  }

  // /crystals/[sign] — 12 sign crystal pages
  for (const sign of SIGNS) {
    const c = CRYSTALS[sign as Sign]
    const m = ZODIAC_META[sign as Sign]
    pages.push({
      route: `crystals/${sign}`,
      category: 'crystals',
      title: `${cap(sign)} Crystals — Stones for ${cap(sign)} Energy`,
      display_title: `Crystals for ${cap(sign)}`,
      description: `The best crystals for ${cap(sign)}: how each stone supports your sign's gifts, balances the shadows, and grounds the work.`,
      symbol: m.symbol,
      meta: [
        { label: 'Sign', value: cap(sign) },
        { label: 'Element', value: cap(m.element) },
        { label: 'Birthstone', value: c.birthstone },
      ],
      intro: `Three stones for ${cap(sign)} — primary, soft companion, shadow worker.`,
      sections: [
        { heading: `Primary stone — ${c.primary}`, body: c.primary_reason },
        { heading: `Soft companion — ${c.secondary}`, body: c.secondary_reason },
        { heading: `Shadow worker — ${c.tertiary}`, body: c.tertiary_reason },
        { heading: 'The practice', body: c.practice },
        { heading: 'The caution', body: c.caution },
      ],
      related: SIGNS.filter(s => s !== sign).slice(0, 6).map(s => ({
        label: `Crystals for ${cap(s)}`, href: `/crystals/${s}`,
      })),
    })
  }

  // /sun-rising/[sun]-[rising] — 144 pages
  for (const slug of SUN_RISING_SLUGS) {
    const pair = parseSunRisingSlug(slug)
    if (!pair) continue
    pages.push({
      route: `sun-rising/${slug}`,
      category: 'sun_rising',
      title: `${cap(pair.sun)} Sun with ${cap(pair.rising)} Rising — The Combination`,
      display_title: `${cap(pair.sun)} Sun · ${cap(pair.rising)} Rising`,
      description: `${cap(pair.sun)} sun with ${cap(pair.rising)} rising: how the inner self meets the social face. Body, mask, life chapters, and the texture of the combo.`,
      symbol: ZODIAC_META[pair.sun].symbol,
      meta: [
        { label: 'Sun', value: cap(pair.sun) },
        { label: 'Rising', value: cap(pair.rising) },
      ],
      intro: `What it's like to be a ${cap(pair.sun)} who arrives as a ${cap(pair.rising)}.`,
      sections: [
        { heading: 'The sun (inner self)', body: PROFILES[pair.sun].core },
        { heading: 'The rising (first impression)', body: RISING_PROFILES[pair.rising].first_impression },
        { heading: 'The combination — body style', body: RISING_PROFILES[pair.rising].body_style },
        { heading: 'The combination — social mask', body: RISING_PROFILES[pair.rising].social_mask },
        { heading: 'In love', body: PROFILES[pair.sun].love },
        { heading: 'In career', body: PROFILES[pair.sun].career },
        { heading: 'The life path', body: RISING_PROFILES[pair.rising].life_path },
      ],
    })
  }

  // /compatibility/[a-b] — 78 unique pairs
  const PAIRS = ALL_PAIRS()
  for (const slug of PAIRS) {
    const pair = parsePairSlug(slug)
    if (!pair.ok || !pair.first || !pair.second) continue
    const a = pair.first, b = pair.second
    pages.push({
      route: `compatibility/${slug}`,
      category: 'compat',
      title: `${cap(a)} & ${cap(b)} Compatibility — Love, Career, Spiritual`,
      display_title: `${cap(a)} & ${cap(b)}`,
      description: `${cap(a)} and ${cap(b)} compatibility: how the two signs meet in love, in work, in the long arc. Gifts of the pairing, the friction, the lesson.`,
      symbol: ZODIAC_META[a].symbol,
      meta: [
        { label: 'Sign A', value: cap(a) },
        { label: 'Sign B', value: cap(b) },
        { label: 'Elements', value: `${ZODIAC_META[a].element} & ${ZODIAC_META[b].element}` },
      ],
      intro: `${cap(a)} meets ${cap(b)}.`,
      sections: [
        { heading: `${cap(a)} brings`, body: PROFILES[a].core, list: [...PROFILES[a].gifts] },
        { heading: `${cap(b)} brings`, body: PROFILES[b].core, list: [...PROFILES[b].gifts] },
        { heading: 'In love', body: `${cap(a)}: ${PROFILES[a].love}\n\n${cap(b)}: ${PROFILES[b].love}` },
        { heading: 'In career / collaboration', body: `${cap(a)}: ${PROFILES[a].career}\n\n${cap(b)}: ${PROFILES[b].career}` },
        { heading: `The ${cap(a)} shadow to watch`, body: '', list: [...PROFILES[a].shadows] },
        { heading: `The ${cap(b)} shadow to watch`, body: '', list: [...PROFILES[b].shadows] },
        { heading: 'The lesson the pairing teaches', body: `${cap(a)}'s lesson: ${PROFILES[a].lesson}\n\n${cap(b)}'s lesson: ${PROFILES[b].lesson}` },
      ],
    })
  }

  // /elements/[element] — 4 element pages
  for (const el of ELEMENTS) {
    const elSigns = SIGNS.filter(s => ZODIAC_META[s as Sign].element.toLowerCase() === el)
    pages.push({
      route: `elements/${el}`,
      category: 'groups',
      title: `${cap(el)} Element — The ${cap(el)} Signs (${elSigns.map(s => cap(s)).join(', ')})`,
      display_title: `Element: ${cap(el)}`,
      description: `The ${el} element in astrology: ${elSigns.map(s => cap(s)).join(', ')}. What ${el}-sign people share, the gift, the shadow, the lesson.`,
      meta: [
        { label: 'Element', value: cap(el) },
        { label: 'Signs', value: elSigns.map(s => cap(s)).join(', ') },
      ],
      intro: `The three ${el} signs — what they share.`,
      sections: elSigns.map(s => ({
        heading: cap(s),
        body: PROFILES[s as Sign].core,
      })),
    })
  }

  // /modalities/[modality] — 3 modality pages
  for (const mod of MODALITIES) {
    const modSigns = SIGNS.filter(s => PROFILES[s as Sign].modality === mod)
    pages.push({
      route: `modalities/${mod}`,
      category: 'groups',
      title: `${cap(mod)} Signs — The ${cap(mod)} Modality (${modSigns.map(s => cap(s)).join(', ')})`,
      display_title: `Modality: ${cap(mod)}`,
      description: `The ${mod} modality in astrology: ${modSigns.map(s => cap(s)).join(', ')}. What ${mod} signs share, the gift, the shadow.`,
      meta: [
        { label: 'Modality', value: cap(mod) },
        { label: 'Signs', value: modSigns.map(s => cap(s)).join(', ') },
      ],
      intro: `The four ${mod} signs — what they share.`,
      sections: modSigns.map(s => ({
        heading: cap(s),
        body: PROFILES[s as Sign].core,
      })),
    })
  }

  return pages
}
