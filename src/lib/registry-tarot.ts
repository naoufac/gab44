import type { Page } from './types'
import { TAROT_MAJORS } from '@data/tarot'
import { COURT_CARDS, SUITS } from '@data/tarot_court'
import { PIP_CARDS } from '@data/tarot_minors'
import { TAROT_SPREADS } from '@data/tarot_spreads'

function cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1) }

const SUIT_ELEMENT: Record<string, string> = {
  cups: 'Water', wands: 'Fire', swords: 'Air', pentacles: 'Earth',
}

export function tarotPages(): Page[] {
  const pages: Page[] = []

  // /tarot/[slug] — 22 majors
  for (const c of TAROT_MAJORS) {
    pages.push({
      route: `tarot/${c.slug}`,
      category: 'tarot',
      title: `${c.display} — Tarot Card Meaning`,
      display_title: c.display,
      description: `${c.display} (Major Arcana ${c.num}): upright meaning, reversed meaning, love, career, spiritual gift. ${c.element}, ruled by ${c.ruler}.`,
      symbol: c.symbol,
      meta: [
        { label: 'Number', value: String(c.num) },
        { label: 'Element', value: c.element },
        { label: 'Ruler', value: c.ruler },
        { label: 'Yes / No', value: c.yes_no },
      ],
      intro: c.one_liner,
      sections: [
        { heading: 'Upright', body: c.upright },
        { heading: 'Reversed', body: c.reversed },
        { heading: 'In love', body: c.love },
        { heading: 'In career', body: c.career },
        { heading: 'Spiritually', body: c.spiritual },
        { heading: 'When you pull this card', body: c.when_pulled },
        { heading: 'Three symbols on the card', body: '', list: [...c.symbols] },
      ],
      related: TAROT_MAJORS.filter(o => o.slug !== c.slug).slice(0, 6).map(o => ({
        label: o.display, href: `/tarot/${o.slug}`,
      })),
    })
  }

  // /tarot/court/[slug] — 16 court cards
  for (const c of COURT_CARDS) {
    const element = SUIT_ELEMENT[c.suit] ?? c.suit
    pages.push({
      route: `tarot/court/${c.slug}`,
      category: 'tarot_court',
      title: `${c.display} — Tarot Court Card Meaning`,
      display_title: c.display,
      description: `${c.display}: personality, energy, in love, in work, when this card appears. ${cap(c.suit)} suit (${element}).`,
      symbol: c.emoji,
      meta: [
        { label: 'Suit', value: cap(c.suit) },
        { label: 'Element', value: element },
        { label: 'Rank', value: cap(c.rank) },
        { label: 'Archetype', value: c.archetype },
      ],
      intro: c.one_liner,
      sections: [
        { heading: 'Upright', body: c.upright },
        { heading: 'Reversed', body: c.reversed },
        { heading: 'As a person', body: c.as_a_person },
        { heading: 'In love', body: c.in_love },
        { heading: 'In work', body: c.in_work },
        { heading: 'The shadow', body: c.the_shadow },
        { heading: 'When you pull this card', body: c.when_pulled },
        { heading: 'Three questions to sit with', body: '', list: [...c.key_questions] },
      ],
      related: COURT_CARDS.filter(o => o.suit === c.suit && o.slug !== c.slug).map(o => ({
        label: o.display, href: `/tarot/court/${o.slug}`,
      })),
    })
  }

  // /tarot/minors/[slug] — 40 pip cards
  for (const c of PIP_CARDS) {
    const element = SUIT_ELEMENT[c.suit] ?? c.suit
    pages.push({
      route: `tarot/minors/${c.slug}`,
      category: 'tarot_minors',
      title: `${c.display} — Tarot Card Meaning`,
      display_title: c.display,
      description: `${c.display}: upright meaning, reversed meaning, love, work, when this card appears. ${cap(c.suit)} suit.`,
      symbol: c.emoji,
      meta: [
        { label: 'Suit', value: cap(c.suit) },
        { label: 'Element', value: element },
        { label: 'Number', value: String(c.rank) },
      ],
      intro: c.one_liner,
      sections: [
        { heading: 'Upright', body: c.upright },
        { heading: 'Reversed', body: c.reversed },
        { heading: 'In love', body: c.in_love },
        { heading: 'In work', body: c.in_work },
        { heading: 'The gift', body: c.the_gift },
        { heading: 'The shadow', body: c.the_shadow },
        { heading: 'When you pull this card', body: c.when_pulled },
        { heading: 'Three questions to sit with', body: '', list: [...c.key_questions] },
      ],
      related: PIP_CARDS.filter(o => o.suit === c.suit && o.slug !== c.slug).slice(0, 6).map(o => ({
        label: o.display, href: `/tarot/minors/${o.slug}`,
      })),
    })
  }

  // /tarot/spreads/[slug]
  for (const s of TAROT_SPREADS) {
    pages.push({
      route: `tarot/spreads/${s.slug}`,
      category: 'tarot_spreads',
      title: `${s.display} — Tarot Spread`,
      display_title: s.display,
      description: `${s.display}: how to lay the spread, what each position means, when to use it. A ${s.card_count}-card tarot spread.`,
      symbol: s.emoji,
      meta: [
        { label: 'Cards', value: String(s.card_count) },
        { label: 'Type', value: cap(s.type) },
      ],
      intro: s.one_liner,
      sections: [
        { heading: 'When to use it', body: s.when_to_use },
        { heading: 'Positions', body: '', list: s.layout.map(p => `${p.position} — ${p.asks}`) },
        { heading: 'How to read it', body: s.how_to_read },
        { heading: 'In love', body: s.in_love },
        { heading: 'In work', body: s.in_work },
        { heading: 'Common mistakes', body: '', list: [...s.common_mistakes] },
        { heading: 'The lesson', body: s.the_lesson },
        { heading: 'Three questions to sit with', body: '', list: [...s.key_questions] },
      ],
      related: TAROT_SPREADS.filter(o => o.slug !== s.slug).slice(0, 5).map(o => ({
        label: o.display, href: `/tarot/spreads/${o.slug}`,
      })),
    })
  }

  // /tarot index
  pages.push({
    route: 'tarot',
    category: 'tarot',
    title: 'Tarot — All 78 cards, court, minors & spreads',
    display_title: 'Tarot',
    description: 'A full evergreen tarot reference: 22 Major Arcana, 16 court cards, 40 pip minors, and a library of practical spreads.',
    intro: 'Begin where the question pulls you — the cards know.',
    sections: [
      { heading: 'Major Arcana (22 cards)', body: 'The soul-journey cards. The big archetypes. Read the Fool first, then let your eye land.', list: TAROT_MAJORS.map(c => `${c.display} — ${c.one_liner}`) },
      { heading: 'Court cards (16)', body: 'The personalities you meet at the table — pages, knights, queens, kings of every suit.', list: COURT_CARDS.map(c => c.display) },
      { heading: 'Pip cards (40 minors)', body: 'Ace to ten across cups, wands, swords, pentacles — daily-life weather.', list: PIP_CARDS.map(c => c.display) },
      { heading: 'Spreads', body: 'Lay the cards in shape; let the geometry of the question give you a shape for the answer.', list: TAROT_SPREADS.map(s => s.display) },
    ],
  })

  // /tarot/court index
  pages.push({
    route: 'tarot/court',
    category: 'tarot_court',
    title: 'Tarot Court Cards — All 16 personalities',
    display_title: 'Tarot — Court Cards',
    description: 'Pages, knights, queens, kings of cups, wands, swords, pentacles. The 16 court cards: who they are, what they mean.',
    intro: 'Sixteen people at the table. Sometimes the card is you. Sometimes it is someone walking in.',
    sections: SUITS.map(s => ({
      heading: cap(s.slug) + ' — ' + s.element,
      body: s.the_realm,
      list: COURT_CARDS.filter(c => c.suit === s.slug).map(c => c.display),
    })),
  })

  // /tarot/minors index
  pages.push({
    route: 'tarot/minors',
    category: 'tarot_minors',
    title: 'Tarot Minor Arcana — All 40 pip cards',
    display_title: 'Tarot — Minor Arcana',
    description: 'The 40 pip cards: ace through ten of cups, wands, swords, pentacles. Daily-life energy in a card.',
    intro: 'Forty everyday weather-cards. Less archetype, more practical.',
    sections: [
      { heading: 'All 40 minors', body: '', list: PIP_CARDS.map(c => c.display) },
    ],
  })

  // /tarot/spreads index
  pages.push({
    route: 'tarot/spreads',
    category: 'tarot_spreads',
    title: 'Tarot Spreads — A library of layouts',
    display_title: 'Tarot — Spreads',
    description: 'Tarot spreads of every shape: 1-card draws, 3-card stories, Celtic crosses, relationship spreads. Pick by question.',
    intro: 'A spread is a question turned into geometry.',
    sections: [
      { heading: 'All spreads', body: '', list: TAROT_SPREADS.map(s => `${s.display} — ${s.one_liner}`) },
    ],
  })

  return pages
}
