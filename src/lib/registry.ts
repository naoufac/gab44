import type { Page } from './types'
import { tarotPages } from './registry-tarot'
import { signPages } from './registry-signs'
import { allAsteroidPages } from './registry-asteroids'
import { allWisdomPages } from './registry-wisdom'

let _cache: Page[] | null = null

export function getAllPages(): Page[] {
  if (_cache) return _cache
  const pages: Page[] = []
  pages.push(...tarotPages())
  pages.push(...signPages())
  pages.push(...allAsteroidPages())
  pages.push(...allWisdomPages())

  // Wisdom hub
  pages.push({
    route: 'wisdom',
    category: 'tarot',  // hub page; we'll override breadcrumb behaviour in layout
    title: 'Wisdom — A library of evergreen astrology, tarot, runes, chakras, and more',
    display_title: 'Wisdom',
    description: 'Every wisdom tradition in one place: runes, I Ching, chakras, mantras, goddesses, archangels, angel numbers, sacred geometry, and more.',
    intro: 'Pick a doorway. They all lead inward.',
    sections: [
      { heading: 'Astrology — the wheel', body: 'The signs, rising, moon, decans, and personal planets.', list: ['The 12 signs', 'Rising signs', 'Moon signs', 'Sun × Rising', 'Compatibility', 'Elements & modalities', 'Houses', 'Aspects', 'Decans', 'Personal planets'] },
      { heading: 'Tarot — the 78 cards', body: 'Majors, court, minors, and a library of spreads.', list: ['Major Arcana (22)', 'Court cards (16)', 'Pip cards (40)', 'Spreads'] },
      { heading: 'Asteroids & dwarf planets', body: 'The deeper-than-the-classical signal — Chiron, Lilith, Vesta, Juno, Pallas, Ceres, and the centaur/dwarf family.', list: ['Chiron', 'Lilith', 'Vesta', 'Juno', 'Pallas', 'Ceres', 'Chariklo', 'Pholus', 'Nessus', 'Asbolus', 'Eris', 'Sedna', 'Haumea', 'Makemake', 'Hygiea', 'Eros', 'Psyche', 'Vertex'] },
      { heading: 'Transits & retrogrades', body: 'The sky moving — Mercury / Venus / Mars retrograde, Saturn return, lunar phases, transits, lunar nodes.', list: ['Mercury retrograde', 'Venus retrograde', 'Mars retrograde', 'Saturn return', 'Lunar phases', 'Transits', 'Lunar nodes'] },
      { heading: 'Other traditions', body: 'I Ching, runes, chakras, mantras, solfeggio frequencies, sacred geometry, dream symbols, manifestation methods.', list: ['I Ching', 'Runes', 'Chakras', 'Mantras', 'Solfeggio', 'Sacred geometry', 'Dream symbols', 'Manifestation', 'Spirit animals', 'Spiritual symbols'] },
      { heading: 'Inner senses & energy', body: 'Clair senses, empath types, auras, twin flame stages.', list: ['Clair senses', 'Empath types', 'Auras', 'Twin flame stages'] },
      { heading: 'Numbers & cycles', body: 'Life paths, personal years, angel numbers, archangels, goddesses, Chinese zodiac, crystals.', list: ['Numerology — Life paths', 'Personal years', 'Angel numbers', 'Archangels', 'Goddesses', 'Chinese zodiac', 'Crystals (by sign)', 'Crystals (by intent)'] },
    ],
  })

  // About page
  pages.push({
    route: 'about',
    category: 'about',
    title: 'About gab44',
    display_title: 'About gab44',
    description: 'gab44 is a warm, modern astrology reference: 1,100+ evergreen pages on signs, tarot, runes, chakras, and the language of the sky. Written human.',
    intro: 'Astrology, warmly written.',
    sections: [
      { heading: 'What this is', body: 'gab44 is an evergreen astrology reference. No daily AI-generated noise, no horoscope-by-the-numbers. Every page is hand-written. The voice is warm. The frame is modern. The intention is to be the friend who actually knows the sky, not the booth at the back of the bookstore.' },
      { heading: 'What\'s here', body: 'The 12 signs and how they meet. The 78 tarot cards and their spreads. The 24 elder runes. The 7 chakras. The 64 hexagrams of the I Ching. Sacred geometry, dream symbols, spirit animals, mantras, solfeggio frequencies, archangels, goddesses, life path numbers, personal years, lunar phases, transits, and the asteroid family that the daily horoscope columns forget about.' },
      { heading: 'How to use it', body: 'Read like a reference, not a feed. Look up the sign of the person you\'re trying to understand. Look up the card you just pulled. Look up the transit your friend keeps mentioning. The pages are linked — once you start one, you\'ll find your way to the next.' },
      { heading: 'Written by', body: 'Naoufal Chobah. Built warm. Built to last. Built so that the language of the sky stays accessible to anyone who wants to learn it.' },
    ],
  })

  _cache = pages
  return pages
}
