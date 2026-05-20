// Eris × sign SEO funnel — /gab44/eris (index) + /gab44/eris/{sign}
// (12 pages). Targets the dwarf-planet / shadow-archetype keyword
// cluster: "eris in {sign} meaning", "{sign} eris", "dwarf planet eris
// astrology", "eris discord chart". Eris is the dwarf planet 136199
// discovered in 2005 — the largest object in the scattered disc, the
// trans-Neptunian body whose discovery forced the redefinition of
// "planet" itself (and demoted Pluto). Astrologically she is the
// disruption-as-truth-bringer: the uninvited goddess who throws the
// golden apple of "to the fairest" onto the table at the wedding she
// was not invited to, and the false harmony cracks open. Distinct
// keyword cluster from Lilith (rejected wild feminine) and Chiron
// (the open wound) — Eris names the disruption that exposes what was
// being suppressed in order to keep the room polite. Pairs structurally
// with the Lilith/Chiron pair as the third "shadow" body, opens the
// dwarf-planet tier alongside the asteroid graph (parallel to how
// Hygiea opened the wellness tier inside the asteroids).
// Cross-funnels into /gab44/reading?ref=eris-{sign}.

import { SITE_URL } from '@/lib/identity'
import { SIGNS, type Sign } from './daily'

interface SignBeat {
  symbol: string
  element: 'fire' | 'earth' | 'air' | 'water'
  modality: 'cardinal' | 'fixed' | 'mutable'
}

const SIGN_BEATS: Record<Sign, SignBeat> = {
  aries:       { symbol: '♈', element: 'fire',  modality: 'cardinal' },
  taurus:      { symbol: '♉', element: 'earth', modality: 'fixed'    },
  gemini:      { symbol: '♊', element: 'air',   modality: 'mutable'  },
  cancer:      { symbol: '♋', element: 'water', modality: 'cardinal' },
  leo:         { symbol: '♌', element: 'fire',  modality: 'fixed'    },
  virgo:       { symbol: '♍', element: 'earth', modality: 'mutable'  },
  libra:       { symbol: '♎', element: 'air',   modality: 'cardinal' },
  scorpio:     { symbol: '♏', element: 'water', modality: 'fixed'    },
  sagittarius: { symbol: '♐', element: 'fire',  modality: 'mutable'  },
  capricorn:   { symbol: '♑', element: 'earth', modality: 'cardinal' },
  aquarius:    { symbol: '♒', element: 'air',   modality: 'fixed'    },
  pisces:      { symbol: '♓', element: 'water', modality: 'mutable'  }
}

// Per-element accent kept inside a deep crimson / burnt-rose band so
// the surface reads as the disruption / unmasking axis (distinct from
// the jade hygiea band, the gold vertex band, etc.). Each element
// shifts the temperature inside the same family.
const ELEMENT_ACCENT: Record<SignBeat['element'], { c1: string; c2: string }> = {
  fire:  { c1: '#e0394d', c2: '#7a0c1f' },
  earth: { c1: '#b04a3a', c2: '#5c1c14' },
  air:   { c1: '#c95a6a', c2: '#6b1a2a' },
  water: { c1: '#9a3a52', c2: '#4a0e1c' }
}

interface ErisProfile {
  sign: Sign
  // What Eris in this sign disrupts — the specific false-harmony she
  // throws the apple onto the table of, the polite consensus that
  // cracks open in this register.
  disrupts: string
  // The truth that was being suppressed — what gets unmasked when
  // the disruption lands. Eris is not the wound; she is the messenger
  // who refuses to keep the secret.
  unmasks: string
  // Big paragraph — the lived shape of Eris in this sign, the way the
  // disruption arrives and the gift that lives on the other side.
  body: string
  // The medicine — how to work with Eris instead of being consumed
  // by the disruption (or by the false-harmony she came to break).
  medicine: string
  // The shadow shape — the disruption wired into its dysfunction:
  // chaos for chaos's sake, the apple thrown only to be the one who
  // threw it, drama as identity instead of truth as path.
  shadow: string
  // Approximate generational year-bands. Eris moves slowly (~559-year
  // orbit) — most living people share Eris in either Aries (since 1926)
  // or now beginning Taurus (around 2048). For depth, the per-sign
  // pages still describe the archetype as if any reader could carry it,
  // because the by-sign reading also applies to chart points and
  // transits, not just natal placement.
  band: string
}

// Eris sign hand-shaped meaning. Each is an honest paragraph, not a
// horoscope. Eris is the uninvited goddess at the wedding — the
// disruption who throws the apple of truth onto the polite table,
// and the false harmony that was being maintained at her expense
// finally cracks open.
export const ERIS_PROFILES: Record<Sign, ErisProfile> = {
  aries: {
    sign: 'aries',
    disrupts: 'The pretense of pacifism that is really suppressed rage. The polite "I am not angry" said through clenched teeth. The peacekeeping role assigned to people who were never asked if they consented to the role.',
    unmasks: 'The fact that the anger was always there — and that it is not the anger that broke the room, it is the suppression of it. Eris in Aries names rage as moral information.',
    body: 'Eris in Aries names the disruption that arrives as raw heat — the moment the suppressed fury finally walks into the room as itself, refusing to be the polite version one minute longer. Most living adults carry this Eris (she has been here since the late 1920s), which is why the cultural register has become saturated with the question of whose anger is permitted and whose is not. The gift is the willingness to use rage as the moral instrument it actually is — not as performance, not as a tantrum, but as the body\'s honest report on what is wrong in the room. The disruption looks like chaos at first; what it actually does is make the suppression visible. The fight that breaks out is the fight that was always implicit and was being held at the cost of someone\'s sanity.',
    medicine: 'Stop performing calm you do not feel. Let the anger speak in plain words once, in the right room, to the right person, before it has to break a door down to be heard. Eris in Aries grows when the rage gets a sentence, not a stage.',
    shadow: 'The trap is rage-as-identity — anger weaponised into permanent contempt, the apple thrown not to expose anything but only to confirm being the one who throws apples. Real Aries-Eris disruption changes the room and then leaves; the false one stays to keep breaking dishes.',
    band: 'Eris in Aries: ~1926 → ~2048. Almost every living adult carries it.'
  },
  taurus: {
    sign: 'taurus',
    disrupts: 'The polite materialism that calls hoarding "stewardship." The comfortable life built on someone else\'s extraction. The body-shame dressed up as discipline. The slow violence of the well-curated table.',
    unmasks: 'What the comfort actually rests on. Eris in Taurus names the moment the foundation of the visible "good life" gets exposed — the extraction, the inheritance, the un-paid labour, the body that was used.',
    body: 'Eris in Taurus arrives as the disruption of the polite material consensus — the moment the well-set table is overturned to show what it was actually built on. She names what the comfortable life rests on when no one wants to look: whose labour, whose body, whose land, whose silence. The disruption is bodily and concrete, never abstract: the inheritance contested, the property reclaimed, the wage-theft revealed, the supply chain shown. The gift is the willingness to be uncomfortable in the body in service of telling the truth about the body — refusing the curated calm that asks the body to perform serene while harm is being done. Eris in Taurus is moving into her sign band over the coming decades; expect the cultural register to centre material truth, body sovereignty, and the moral cost of luxury.',
    medicine: 'Look at one comfort in your life and trace it honestly to its real origin. Eris in Taurus grows in the willingness to know what is on your plate and at what cost — and then to act on what you find.',
    shadow: 'The trap is moralised austerity — the apple of discomfort thrown not to expose extraction but to perform virtue, the public renunciation that is itself a luxury. Real Taurus-Eris truth-telling changes what gets eaten; the false one only changes the post about it.',
    band: 'Eris in Taurus: ~2048 → ~2160. Beginning to enter cultural register.'
  },
  gemini: {
    sign: 'gemini',
    disrupts: 'The lie said in the calm voice. The plausible deniability of the well-spoken official. The narrative that lets the room continue to function only because no one says the obvious sentence out loud.',
    unmasks: 'The unsaid thing that is keeping everyone polite. Eris in Gemini is the message that breaks the room — the leaked memo, the said-aloud sentence, the receipt published. The disruption is information itself.',
    body: 'Eris in Gemini arrives as the disruption-by-utterance — the sentence that finally gets said in the room where it could not be said before, and the polite consensus collapses because the unsaid was load-bearing. She is the leaked transcript, the published receipt, the question asked at the press conference that the press conference was specifically designed to avoid. The gift is the willingness to be the messenger and pay the messenger\'s price: the room rearranges around the speaker, and not always with affection. The disruption is rarely physical; it is informational, paragraph-shaped, often arriving as a single line that everyone reads twice. Eris in Gemini grows the muscle of saying the obvious thing that no one was supposed to notice.',
    medicine: 'Say the sentence you have been editing out for a month. The Gemini-Eris register grows when the actual line gets spoken in the actual room — not on the timeline, not in the group chat, in the room.',
    shadow: 'The trap is truth-telling-as-spectacle — the apple thrown not to inform anyone but only to be the one who told. Real Gemini-Eris speech changes what people know and lets the room work with it; the false one only changes the speaker\'s follower count.',
    band: 'Read by transit and chart-point placement; Eris does not enter Gemini for centuries.'
  },
  cancer: {
    sign: 'cancer',
    disrupts: 'The family secret kept "for the children." The mother-myth used to silence the actual mother. The home-as-sanctuary that was a sanctuary only for some of its inhabitants.',
    unmasks: 'What was happening in the kitchen while everyone agreed not to mention it. Eris in Cancer is the moment the family story finally gets told from the inside, by the person it was being told over.',
    body: 'Eris in Cancer arrives in the most intimate possible register — the kitchen, the bedroom, the family table, the inherited story. She is the daughter who finally tells the room what the mother did. She is the truth said at the funeral that the eulogy was carefully written to avoid. The disruption is not impersonal; it is the precise person speaking the precise sentence about the precise thing that was being held by collective unspoken agreement. The gift is the willingness to be the inconvenient witness — the one who does not let the official family story stand because the official family story was the wound. Eris in Cancer grows the muscle of refusing to participate in the cover, even when the cover is wearing the face of "love."',
    medicine: 'Tell the true version of one family story to one person who deserves to hear it. The Cancer-Eris register grows in the spoken truth at the table that was set to silence it.',
    shadow: 'The trap is wound-as-currency — the family secret weaponised as permanent grievance, the disruption that never resolves into anything other than itself. Real Cancer-Eris truth-telling sets someone free; the false one only freezes the room.',
    band: 'Read by transit and chart-point placement; Eris does not enter Cancer for centuries.'
  },
  leo: {
    sign: 'leo',
    disrupts: 'The personal stage built on the silenced supporting cast. The charisma that requires everyone else to dim. The performance of "originality" by someone who has been quietly taking from the people they refuse to credit.',
    unmasks: 'Whose work the spotlight is actually shining. Eris in Leo names the moment the credits get re-read and the room sees the names that were missing.',
    body: 'Eris in Leo arrives at the gala — at the keynote, at the awards ceremony, at the room built specifically to celebrate one person\'s greatness. She is the heckler who is not heckling but stating a fact, the citation request the speaker cannot fulfil, the colleague who will not stay silent while the credit goes to the wrong person. The disruption is glamorous in its setting and devastating in its content. The gift is the willingness to expose performance built on uncredited labour — to refuse the spectacle and demand the receipt. Eris in Leo grows the muscle of caring more about whose work it actually was than whose face is on the poster.',
    medicine: 'Credit the people you have been quietly drawing on. Publicly. The Leo-Eris register grows when the supporting cast gets named on the stage they have been holding up.',
    shadow: 'The trap is take-down-as-performance — the disruption staged as its own stage, the apple thrown to become the new centre of attention. Real Leo-Eris truth changes whose name is at the top of the page; the false one only changes whose name is at the top of the trending tab.',
    band: 'Read by transit and chart-point placement; Eris does not enter Leo for centuries.'
  },
  virgo: {
    sign: 'virgo',
    disrupts: 'The system optimised at the cost of the people inside it. The metric that measures everything except what matters. The "well-run" institution whose efficiency depends on whose labour stays invisible.',
    unmasks: 'The actual cost of the clean spreadsheet. Eris in Virgo names the moment the system gets audited from the inside by someone who knows where the bodies are buried in the workflow.',
    body: 'Eris in Virgo arrives as the technical disruption — the audit, the leaked compliance memo, the engineer who refuses to ship the feature, the nurse who finally calls the staffing what it is. She is precise. She comes with documentation. She is not interested in the rhetorical fight, only in the demonstrable fact. The gift is the willingness to use craft itself as the instrument of truth — to refuse the optimisation that is actually exploitation, to insist that the system be measured against the people inside it instead of the other way around. Eris in Virgo grows the muscle of the principled resignation, the technical objection, the well-sourced refusal.',
    medicine: 'Pick one place where you have been complicit in the polished system and either fix it or refuse it. The Virgo-Eris register grows in the precise small refusal, not the grand gesture.',
    shadow: 'The trap is critique-as-paralysis — the disruption that only ever names what is wrong without ever building the alternative, the perpetual dissent that becomes its own polished system. Real Virgo-Eris audit produces a different workflow; the false one only produces a longer memo.',
    band: 'Read by transit and chart-point placement; Eris does not enter Virgo for centuries.'
  },
  libra: {
    sign: 'libra',
    disrupts: 'The peace-keeping that is really power-keeping. The "let\'s keep things harmonious" said by the person whose harmony depends on someone else\'s silence. The diplomatic register used to launder injustice.',
    unmasks: 'Who the harmony was for. Eris in Libra names the moment the room stops being polite because politeness was the camouflage of the imbalance.',
    body: 'Eris in Libra arrives at the negotiation table — at the mediated conversation, at the decorous dinner, at the institutional meeting where the rules of conduct were specifically designed to keep the powerful comfortable. She refuses the false symmetry that calls one person\'s grievance equivalent to the other\'s power. She points out who the "balanced" framing actually serves. The gift is the willingness to break the polite consensus when the polite consensus is the injustice — to choose justice over harmony when the two have been deliberately conflated. Eris in Libra grows the muscle of the principled disagreement that does not pretend the disagreement is between equals.',
    medicine: 'Refuse the false-symmetry framing once this week. Name the actual asymmetry. The Libra-Eris register grows when the room stops treating one side\'s discomfort as equivalent to the other side\'s harm.',
    shadow: 'The trap is contrarianism — disrupting harmony for the pleasure of disrupting it, the apple thrown at any wedding regardless of whether it had a real injustice at its centre. Real Libra-Eris disruption serves the actually-wronged; the false one only serves the disrupter.',
    band: 'Read by transit and chart-point placement; Eris does not enter Libra for centuries.'
  },
  scorpio: {
    sign: 'scorpio',
    disrupts: 'The taboo that protects the perpetrator. The "we do not speak of that" that lets the abuse continue. The depth-talk that performs going-deep while staying carefully on the surface of the actual rot.',
    unmasks: 'What was being covered by the silence. Eris in Scorpio is the moment the actual buried thing gets dug up — the financial irregularity, the abuse, the secret history of the institution, the inheritance fight, the unowned shadow that has been running the family for generations.',
    body: 'Eris in Scorpio arrives in the underworld and refuses to maintain the silence the underworld was being kept by. She is the survivor who finally names the perpetrator. She is the leak that brings down the institution. She is the audit that finds the off-the-books account. The disruption is permanent — Scorpio does not do reversible. Once Eris in Scorpio has spoken, the room cannot go back to before. The gift is the willingness to detonate the false-secret — to refuse the social contract of the cover-up, even at the price of the social structure that was being held together by it. Eris in Scorpio grows the muscle of the survival witness, the un-buyable testimony, the refusal of the bribe that asks for the silence.',
    medicine: 'Identify one taboo that is protecting the wrong party. Decide if you are the one to break it. If yes, do it cleanly. The Scorpio-Eris register grows in the specific named refusal of the specific cover.',
    shadow: 'The trap is exposure-as-cruelty — the disruption that exposes a real thing but with no proportional purpose, the apple thrown to ruin rather than to free. Real Scorpio-Eris testimony liberates someone; the false one only retraumatises everyone.',
    band: 'Read by transit and chart-point placement; Eris does not enter Scorpio for centuries.'
  },
  sagittarius: {
    sign: 'sagittarius',
    disrupts: 'The ideology presented as universal truth. The religious or philosophical authority used to silence the doubting voice. The "everyone reasonable agrees" that is doing a lot of work to define who counts as reasonable.',
    unmasks: 'The provincialism inside the universalism. Eris in Sagittarius names the moment the supposedly cosmic worldview gets revealed as one specific tradition\'s parochial story dressed up as the truth.',
    body: 'Eris in Sagittarius arrives at the pulpit, at the lecture hall, at the conference where the dominant worldview is being offered as if it were the only one. She is the heretic with citations. She is the indigenous knowledge-holder pointing out what the universal-history textbook left out. She is the apostate who refuses to be the convenient former-believer the new orthodoxy needed her to be. The gift is the willingness to challenge the totalising story without collapsing into nihilism — to insist that meaning is real and that no single tradition gets to monopolise its definition. Eris in Sagittarius grows the muscle of the principled doubt, the rigorous heresy, the cosmopolitan refusal of the false universal.',
    medicine: 'Read one serious source from outside the worldview you treat as default. Let it actually challenge you. The Sagittarius-Eris register grows in the willingness to be moved by what your tradition told you to dismiss.',
    shadow: 'The trap is reflexive contrarianism — disrupting any belief system because all belief systems are suspect, the apple thrown at every altar without the willingness to build any of your own. Real Sagittarius-Eris heresy plants something new; the false one only burns.',
    band: 'Read by transit and chart-point placement; Eris does not enter Sagittarius for centuries.'
  },
  capricorn: {
    sign: 'capricorn',
    disrupts: 'The hierarchy presented as natural order. The "this is just how things work" said by the people for whom things work. The institutional authority used to launder personal interest as impersonal necessity.',
    unmasks: 'Who set the rules and for whose benefit. Eris in Capricorn names the moment the structure gets traced to its actual founders, the moment "the way things are done" gets revealed as a set of choices made by specific people for specific reasons.',
    body: 'Eris in Capricorn arrives at the top of the pyramid and starts naming the bricks. She is the historian who refuses the founder-myth. She is the corporate insider who publishes the org-chart annotated with the kickbacks. She is the scholar who proves the "tradition" is in fact a 19th-century invention. The disruption is structural and slow — Capricorn does not do quick. The gift is the willingness to do the long forensic work of showing how the existing order was actually built, who paid the cost, and what would be different if the choices had been different. Eris in Capricorn grows the muscle of the patient unmasking of the institution — the kind that takes a decade and changes the field.',
    medicine: 'Pick one institution you take for granted and learn its actual founding history this month. The Capricorn-Eris register grows in the patient research that turns "natural" back into "built."',
    shadow: 'The trap is cynicism — the unmasking that ends in "everything is corrupt, nothing matters" rather than "this is corrupt, here is what matters more." Real Capricorn-Eris unmasking proposes a different structure; the false one only proposes that no structure is possible.',
    band: 'Read by transit and chart-point placement; Eris does not enter Capricorn for centuries.'
  },
  aquarius: {
    sign: 'aquarius',
    disrupts: 'The in-group consensus presented as moral progress. The "we have all already agreed" of the politically aligned group that has stopped checking whether the new orthodoxy is also a cage. The collective identity that no longer permits internal dissent.',
    unmasks: 'The conformity inside the rebellion. Eris in Aquarius names the moment the supposedly liberating movement gets revealed as having developed its own enforcement mechanisms.',
    body: 'Eris in Aquarius arrives inside the in-group — at the activist meeting, in the progressive Slack, in the radical journal — and refuses to maintain the new consensus when it has begun to function as the old consensus. She is the dissenter from within: the founding member who points out what the movement has stopped allowing itself to question, the writer who criticises her own side without becoming the other side\'s asset. The gift is the willingness to keep thinking after the group has stopped — to refuse the loyalty test that demands the in-group be treated as if it were exempt from the same scrutiny it directs outward. Eris in Aquarius grows the muscle of the principled friend who tells the friends what the friends do not want to hear.',
    medicine: 'Disagree with your in-group on one specific point this week. Stay in the room afterward. The Aquarius-Eris register grows in the held disagreement, not the dramatic exit.',
    shadow: 'The trap is contrarianism-for-clout — the disruption that always somehow positions the disrupter as the only honest one, the apple thrown for the pleasure of being the heretic. Real Aquarius-Eris dissent stays loyal to the project while disagreeing with the practice; the false one defects to whichever side rewards the defection most.',
    band: 'Read by transit and chart-point placement; Eris does not enter Aquarius for centuries.'
  },
  pisces: {
    sign: 'pisces',
    disrupts: 'The spiritual bypass that asks the harmed party to forgive instead of asking the harm to stop. The "we are all one" used to flatten the difference between the boot and the neck. The dream-language that lets the dreamer avoid the day.',
    unmasks: 'What the transcendence was being used to skip past. Eris in Pisces names the moment the mystical talk gets interrupted by the un-mystical fact — the unpaid worker at the retreat, the abuse covered by the lineage, the suffering that the meditation was being deployed to numb.',
    body: 'Eris in Pisces arrives in the most diffuse register and forces the diffuse to become specific. She is the ex-disciple who finally names what was happening at the ashram. She is the mystic who refuses to have her language laundered into a marketing pitch. She is the artist who breaks the dream open to show what the dream was hiding. The gift is the willingness to use the spiritual register honestly — to insist that real awakening cannot be built on suppressed fact, that compassion is not the same as silence, that the unitive vision must include the specific suffering it is so often used to dissolve. Eris in Pisces grows the muscle of the discerning mystic, the truth-telling sensitive, the artist who refuses to make the audience feel better in order to keep the audience.',
    medicine: 'Stop using "everything happens for a reason" or "they are doing their best" in any context where it is shielding harm. The Pisces-Eris register grows in the willingness to keep the spiritual register and the moral register both alive at once.',
    shadow: 'The trap is mystical-bitterness — the disruption of every spiritual frame because every spiritual frame has been misused by someone, the apple thrown until there is no remaining language for actual transcendence. Real Pisces-Eris truth-telling clarifies the mystical; the false one only abandons it.',
    band: 'Read by transit and chart-point placement; Eris does not enter Pisces for centuries.'
  }
}

export const ERIS_SIGNS = SIGNS

export function isErisSign(s: string): s is Sign {
  return SIGNS.includes(s as Sign)
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

const BASE_CSS = `
  ${PALETTE}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .hero { display: flex; align-items: center; gap: 18px; margin: 12px 0 18px; }
  .hero .ring {
    min-width: 64px; height: 64px; border-radius: 999px; display: grid; place-items: center;
    color: #fff; font-size: 26px; padding: 0 14px; box-shadow: 0 4px 16px rgba(20,14,4,0.10);
  }
  .hero .meta { color: var(--fg-muted); font-size: 13px; letter-spacing: 0.04em; }
  h1 { font-size: 40px; line-height: 1.05; margin: 6px 0 8px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text; background-clip: text; color: transparent; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; }
  p { margin: 0 0 14px; font-size: 16px; }
  .vibe { font-size: 17px; color: var(--fg-dim); margin: 0 0 24px; font-style: italic; }
  .card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 22px 26px; margin: 12px 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
  }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 10px 0; }
  @media (max-width: 600px) { .two-col { grid-template-columns: 1fr; } }
  .panel {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 20px;
  }
  .panel h3 {
    font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 8px; font-weight: 700;
  }
  .panel p { margin: 0; font-size: 15px; }
  .grid { display: grid; gap: 6px; margin: 8px 0 16px; }
  .row { display: flex; justify-content: space-between; gap: 14px;
    padding: 10px 12px; border-bottom: 1px solid var(--line); font-size: 15px; }
  .row:last-child { border-bottom: 0; }
  .row .k { color: var(--fg-muted); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px; }
  .row .v { color: var(--fg); text-align: right; }
  .row .v a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .strip { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 16px; }
  .strip a {
    background: var(--bg-2); padding: 7px 12px; border-radius: 999px;
    font-size: 13px; color: var(--fg-dim); text-decoration: none; border: 1px solid var(--line);
  }
  .strip a:hover { background: var(--accent-soft); color: var(--accent); }
  .meet-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
  .meet-list li {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 14px; font-size: 15px; line-height: 1.55;
  }
  .meet-list .marker { color: var(--accent); font-weight: 700; margin-right: 8px; }
  .shadow-list .marker { color: #b85432; }
  .cta-row { margin: 28px 0 12px; }
  .cta {
    display: inline-block; padding: 14px 22px; border-radius: 999px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    color: #fff; font-weight: 700; text-decoration: none; box-shadow: 0 6px 20px rgba(20,14,4,0.12);
  }
  .signs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
  .sign-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 18px 16px; text-decoration: none; color: var(--fg);
    transition: transform .12s, box-shadow .12s;
  }
  .sign-card:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(20,14,4,0.08); }
  .sign-card .glyph { font-size: 30px; font-weight: 800; margin-bottom: 6px; }
  .sign-card .name { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
  .sign-card .axis { color: var(--fg-muted); font-size: 12px; margin-bottom: 6px; }
  .sign-card .vibe-mini { color: var(--fg-dim); font-size: 13px; line-height: 1.45; }
  footer { margin-top: 48px; color: var(--fg-muted); font-size: 12px; text-align: center; }
`

export function erisPageHTML(sign: Sign): string {
  const p = ERIS_PROFILES[sign]
  const sm = SIGN_BEATS[sign]
  const accent = ELEMENT_ACCENT[sm.element]
  const Sign = titleCase(sign)
  const headline = `Eris in ${Sign}`

  // Other Eris signs strip — discover the other 11.
  const otherEris = SIGNS.filter((s) => s !== sign)
    .map((s) => `<a href="/gab44/eris/${s}">⊛ Eris ${SIGN_BEATS[s].symbol} ${titleCase(s)}</a>`)
    .join('')

  // Per-sign mesh — Eris is the third shadow body alongside Lilith and
  // Chiron, so the side strip leads with those two same-sign links and
  // then opens out into the asteroid family + chart-point lane.
  const sideStrip = [
    `<a href="/gab44/${sign}">${sm.symbol} ${Sign} profile</a>`,
    `<a href="/gab44/sedna/${sign}">⏀ Sedna in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/haumea/${sign}">✺ Haumea in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/makemake/${sign}">◉ Makemake in ${Sign} (dwarf-planet sister)</a>`,
    `<a href="/gab44/pholus/${sign}">⚱ Pholus in ${Sign} (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo/${sign}">⊚ Chariklo in ${Sign} (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus/${sign}">⛓ Nessus in ${Sign} (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus/${sign}">⟁ Asbolus in ${Sign} (centaur — the foreknowing)</a>`,
    `<a href="/gab44/lilith/${sign}">⚸ Lilith in ${Sign} (the rejected wild)</a>`,
    `<a href="/gab44/chiron/${sign}">⚷ Chiron in ${Sign} (the open wound)</a>`,
    `<a href="/gab44/north-node/${sign}">☊ North Node in ${Sign}</a>`,
    `<a href="/gab44/vertex/${sign}">◈ Vertex in ${Sign}</a>`,
    `<a href="/gab44/eros/${sign}">⚭ Eros in ${Sign}</a>`,
    `<a href="/gab44/psyche/${sign}">❋ Psyche in ${Sign}</a>`,
    `<a href="/gab44/juno/${sign}">⚵ Juno in ${Sign}</a>`,
    `<a href="/gab44/vesta/${sign}">⚶ Vesta in ${Sign}</a>`,
    `<a href="/gab44/pallas/${sign}">⚴ Pallas in ${Sign}</a>`,
    `<a href="/gab44/ceres/${sign}">⚳ Ceres in ${Sign}</a>`,
    `<a href="/gab44/hygiea/${sign}">✦ Hygiea in ${Sign}</a>`,
    `<a href="/gab44/sun-rising">sun × rising</a>`,
    `<a href="/gab44/decans">36 decans</a>`,
    `<a href="/gab44/personal-planets">personal planets</a>`,
    `<a href="/gab44/eris">all 12 Eris signs</a>`
  ].join('')

  const title = `${headline} — dwarf planet 136199, the disruption-as-truth-bringer · gab44`
  const description = `${headline}: how Eris (dwarf planet 136199) breaks the false harmony in this register. ${p.disrupts} ${p.unmasks} The full archetype with practice, shadow, and a $9 personal reading by Naoufal.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Eris', item: `${SITE_URL}/gab44/eris` },
          { '@type': 'ListItem', position: 3, name: headline, item: `${SITE_URL}/gab44/eris/${sign}` }
        ]
      },
      {
        '@type': 'Article',
        headline,
        description,
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/eris/${sign}`,
        about: `${headline} — dwarf-planet disruption / unmasking axis`
      }
    ]
  })

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/eris/${sign}" />
<meta property="og:title" content="${escapeHtml(headline)} · gab44" />
<meta property="og:description" content="${escapeHtml(p.disrupts)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/eris/${sign}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%8A%9B%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>:root{--c1:${accent.c1};--c2:${accent.c2};}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/eris">all 12 Eris signs</a>
      <a href="/gab44/${sign}">${Sign} profile</a>
      <a href="/gab44/lilith/${sign}">Lilith in ${Sign}</a>
      <a href="/gab44/chiron/${sign}">Chiron in ${Sign}</a>
      <a href="/gab44/reading?ref=eris-${sign}">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,${accent.c1},${accent.c2})">⊛ ${sm.symbol}</div>
      <div class="meta">Eris ⊛ ${Sign} · dwarf planet 136199 · the disruption / unmasking axis</div>
    </div>
    <h1><span class="accent">Eris</span> in ${Sign}</h1>
    <p class="vibe">${escapeHtml(p.disrupts)}</p>

    <div class="card">
      <p>${escapeHtml(p.body)}</p>
    </div>

    <div class="two-col">
      <div class="panel">
        <h3>⊛ Eris in ${Sign} — what she disrupts</h3>
        <p>${escapeHtml(p.disrupts)}</p>
      </div>
      <div class="panel">
        <h3>⊛ Eris in ${Sign} — what she unmasks</h3>
        <p>${escapeHtml(p.unmasks)}</p>
      </div>
    </div>

    <h2>Medicine — how to work with Eris in ${Sign}</h2>
    <ul class="meet-list">
      <li><span class="marker">⊛</span>${escapeHtml(p.medicine)}</li>
    </ul>

    <h2>Shadow — Eris in ${Sign} turned against itself</h2>
    <ul class="meet-list shadow-list">
      <li><span class="marker">✗</span>${escapeHtml(p.shadow)}</li>
    </ul>

    <h2>How this archetype reads</h2>
    <div class="grid">
      <div class="row"><span class="k">Eris</span><span class="v">⊛ ${sm.symbol} ${Sign} · ${sm.element} · ${sm.modality}</span></div>
      <div class="row"><span class="k">Type</span><span class="v">dwarf planet 136199 (discovered 2005)</span></div>
      <div class="row"><span class="k">Orbit</span><span class="v">~559-year solar orbit, scattered disc</span></div>
      <div class="row"><span class="k">Generation band</span><span class="v">${escapeHtml(p.band)}</span></div>
      <div class="row"><span class="k">Axis</span><span class="v">disruption-as-truth / unmasking the false harmony</span></div>
    </div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=eris-${sign}">Get a $9 Eris-aware reading →</a>
    </div>

    <h2>The other 11 Eris signs</h2>
    <div class="strip">${otherEris}</div>

    <h2>Related — your shadow-body cluster for ${Sign}</h2>
    <div class="strip">${sideStrip}</div>

    <footer>
      gab44 by Naoufal · ${escapeHtml(headline)} · dwarf-planet disruption / unmasking axis · evergreen.
    </footer>
  </div>
</body>
</html>`
}

export function erisIndexHTML(): string {
  const cards = SIGNS.map((s) => {
    const p = ERIS_PROFILES[s]
    const sm = SIGN_BEATS[s]
    const accent = ELEMENT_ACCENT[sm.element]
    return `<a class="sign-card" href="/gab44/eris/${s}">
      <div class="glyph" style="background:linear-gradient(135deg,${accent.c1},${accent.c2}); -webkit-background-clip:text; background-clip:text; color:transparent;">⊛ ${sm.symbol}</div>
      <div class="name">Eris in ${titleCase(s)}</div>
      <div class="axis">${sm.symbol} ${titleCase(s)} · disruption / unmasking</div>
      <div class="vibe-mini">${escapeHtml(p.disrupts)}</div>
    </a>`
  }).join('')

  const title = `Eris by sign — dwarf planet 136199, the disruption-as-truth-bringer · gab44 ✨`
  const description = `Eris in {sign} — the disruption-as-truth signature across all 12 zodiac signs. The dwarf planet that broke the definition of "planet" itself; astrologically, the goddess who throws the apple of truth onto the polite table when the false harmony was being held at someone's expense. Plus a $9 personal reading by Naoufal.`

  // Sister-surface nav — Eris's natural neighbours are the other two
  // shadow bodies (Lilith / Chiron), and the rest of the gab44 graph.
  const navStrip = [
    `<a href="/gab44/sedna">⏀ Sedna by sign (the long exile / patient return)</a>`,
    `<a href="/gab44/haumea">✺ Haumea by sign (fertility / generative fragmentation)</a>`,
    `<a href="/gab44/makemake">◉ Makemake by sign (patient creation / restoration)</a>`,
    `<a href="/gab44/pholus">⚱ Pholus by sign (centaur — the unsealing)</a>`,
    `<a href="/gab44/chariklo">⊚ Chariklo by sign (centaur — the sacred enclosure)</a>`,
    `<a href="/gab44/nessus">⛓ Nessus by sign (centaur — the cycle-breaking)</a>`,
    `<a href="/gab44/asbolus">⟁ Asbolus by sign (centaur — the foreknowing)</a>`,
    `<a href="/gab44/lilith">⚸ Lilith by sign (the rejected wild)</a>`,
    `<a href="/gab44/chiron">⚷ Chiron by sign (the open wound)</a>`,
    `<a href="/gab44/north-node">☊ North Node by sign</a>`,
    `<a href="/gab44/vertex">◈ Vertex by sign</a>`,
    `<a href="/gab44/hygiea">✦ Hygiea by sign</a>`,
    `<a href="/gab44/ceres">⚳ Ceres by sign</a>`,
    `<a href="/gab44/pallas">⚴ Pallas by sign</a>`,
    `<a href="/gab44/juno">⚵ Juno by sign</a>`,
    `<a href="/gab44/vesta">⚶ Vesta by sign</a>`,
    `<a href="/gab44/eros">⚭ Eros by sign</a>`,
    `<a href="/gab44/psyche">❋ Psyche by sign</a>`
  ].join('')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/eris" />
<meta property="og:title" content="Eris by sign · gab44" />
<meta property="og:description" content="The disruption-as-truth signature of dwarf planet 136199 across all 12 signs." />
<meta property="og:type" content="website" />
<style>:root{--c1:#b03040;--c2:#600818;}${BASE_CSS}</style>
</head>
<body>
  <div class="wrap">
    <nav class="nav">
      <a href="/gab44">gab44</a>
      <a href="/gab44/horoscopes">all signs</a>
      <a href="/gab44/personal-planets">personal planets</a>
      <a href="/gab44/sun-rising">sun × rising</a>
      <a href="/gab44/lilith">⚸ Lilith by sign</a>
      <a href="/gab44/chiron">⚷ Chiron by sign</a>
      <a href="/gab44/reading?ref=eris-index">$9 reading</a>
    </nav>

    <div class="hero">
      <div class="ring" style="background:linear-gradient(135deg,#b03040,#600818)">⊛</div>
      <div class="meta">12 pages · 1 per zodiac sign · evergreen · dwarf planet 136199 (discovered 2005)</div>
    </div>
    <h1>Eris <span class="accent">by sign</span></h1>
    <p class="vibe">Lilith is what was rejected. Chiron is what was wounded. Eris is what gets said when the false harmony cracks. The third shadow body — the dwarf planet whose discovery rewrote the solar system. Pick yours.</p>

    <div class="signs-grid">${cards}</div>

    <h2>Sister bodies</h2>
    <p>Eris stands with the other two shadow bodies — Lilith (the rejected wild feminine) and Chiron (the unhealing wound) — to make the full unmasking triangle. Pair the three for the complete shadow read, then open out into the asteroid family and the chart-point lane.</p>
    <div class="strip">${navStrip}</div>

    <div class="cta-row">
      <a class="cta" href="/gab44/reading?ref=eris-index">Want a deeper, eris-aware read? $9 →</a>
    </div>

    <footer>
      gab44 by Naoufal · 12 Eris-by-sign pages · evergreen · the dwarf-planet disruption axis.
    </footer>
  </div>
</body>
</html>`
}
