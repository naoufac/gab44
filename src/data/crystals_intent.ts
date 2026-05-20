// Crystals-by-Intent SEO funnel — /gab44/crystals-for (index) +
// /gab44/crystals-for/{slug}. 10 hand-written intent kits:
// anxiety, sleep, love, money, protection, confidence, grief, clarity,
// healing, manifestation. Targets one of the highest-volume search clusters
// in all of mystic search: "best crystals for anxiety", "crystals for love",
// "crystals for protection from negative energy", "crystals for money and
// abundance", "crystals for sleep and insomnia", "crystals for confidence",
// "crystals for grief and heartbreak", "crystals for focus and clarity",
// "crystals for healing", "crystals for manifestation".
//
// Distinct cluster from /gab44/{sign}/crystals (which is per-sign birthstone +
// 3-stone kit). This is per-INTENT — a different keyword universe with much
// higher monthly volume globally. Universal cluster — non-Western audience too.
//
// Each guide is ~700 words across 10 sections (what crystals do for this intent,
// the top 3 stones with deep why + how-to, 5 supporting stones, how to use them
// (cleanse + charge + place + wear), common mistakes, the deeper truth (what
// crystals can/can't do for this intent), pair-with chakra/sound/zodiac signs,
// 3 key questions). Intent-realm tinted gradient: calm=teal, love=rose,
// abundance=gold, protection=indigo. Routes registered at /gab44/crystals-for
// (no Hono RegExpRouter conflict — distinct from /gab44/{sign}/crystals).
// Zero LLM cost — content baked in. Cross-funnels into BOTH revenue lanes:
// each kit links to /gab44/chakras/{slug}, /healing/script/{slug}, and
// /gab44/reading?ref=intent-{slug}.

import { SITE_URL } from '@/lib/identity'

export interface CrystalIntentKit {
  slug: string
  name: string
  search_phrase: string
  realm: 'calm' | 'love' | 'abundance' | 'protection'
  emoji: string
  one_liner: string
  meaning: string
  top_three: [
    { name: string; why: string; how_to_use: string },
    { name: string; why: string; how_to_use: string },
    { name: string; why: string; how_to_use: string }
  ]
  supporting: [string, string, string, string, string]
  how_to_use: string
  cleansing: string
  charging: string
  common_mistakes: [string, string, string]
  the_deeper_truth: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  pair_with_sound: string
  pair_with_sound_slug: string
  pair_with_signs: [string, string, string]
  key_questions: [string, string, string]
}

export const CRYSTAL_INTENT_KITS: CrystalIntentKit[] = [
  {
    slug: 'anxiety',
    name: 'Crystals for Anxiety',
    search_phrase: 'best crystals for anxiety and panic',
    realm: 'calm',
    emoji: '🌊',
    one_liner: 'Stones that down-regulate the nervous system, anchor you to the body, and quiet the spiraling mind.',
    meaning: 'Anxiety is the nervous system stuck in a loop — the body still rehearsing a threat that has already passed (or never came). The right crystals work with that loop in two directions: cool stones (lepidolite, blue lace agate, amethyst) drop the activation, while grounding stones (smoky quartz, hematite, black tourmaline) bring you back into the body so the mind has something solid to land on. Crystals are not a substitute for therapy or medication; they are a *somatic anchor* — something the hand can hold, something the breath can return to. Think of them as a tiny altar you can carry in your pocket.',
    top_three: [
      {
        name: 'Lepidolite',
        why: 'The single most-recommended anxiety stone in the modern crystal community, and for good reason: lepidolite naturally contains lithium (the same element used in some anxiety and mood medications), and although you cannot absorb lithium through skin contact, the energetic resonance is unmistakable — practitioners consistently report a softening of the nervous system within minutes. It is the stone for 3am awakenings, looping thoughts, and the kind of anxiety that has no clear cause.',
        how_to_use: 'Hold one in each hand during a panic episode. Place under the pillow at night. Carry a small piece in the pocket on hard days — touch it whenever the chest tightens.'
      },
      {
        name: 'Blue Lace Agate',
        why: 'A pale, almost ethereal blue, this stone is associated with the throat chakra and works specifically on the kind of anxiety that lives in the throat — the lump, the held breath, the words you cannot say. It softens reactive speech, slows the inhale, and is particularly useful for anxious children and for adults who anxiety-talk (the runaway monologue version of panic).',
        how_to_use: 'Wear as a pendant resting on the throat or sternum. Place over the throat during a 5-minute breathing practice — inhale 4, hold 4, exhale 6.'
      },
      {
        name: 'Black Tourmaline',
        why: 'When anxiety has the quality of "everything is too much" — too much input, too many people, too much electromagnetic noise — black tourmaline is the grounding cord. It is the most reliable protection stone in the kit and works by giving the nervous system a sense of *floor*. Without ground, anxiety floats; with ground, it has somewhere to settle.',
        how_to_use: 'Place by the front door or by the bed. Hold during meditation. Pair with a slow exhale — imagine the excess energy moving down through the stone into the earth.'
      }
    ],
    supporting: [
      'Amethyst — the classic calming purple stone; place under pillow for sleep-anxiety.',
      'Smoky Quartz — gentler than tourmaline, good for daytime grounding without dimming.',
      'Howlite — soft white veined stone, specifically for racing thoughts before bed.',
      'Rose Quartz — when anxiety has a self-criticism layer, this softens it with self-love.',
      'Hematite — silvery and dense, used by ancient soldiers; pulls scattered energy back into the body.'
    ],
    how_to_use: 'Anxiety is somatic, so the use must be somatic. Hold the stone in your palm and notice its temperature, weight, and texture — let your nervous system register a physical truth that is not the anxious thought. Place stones around the home (bedside, desk, doorway) to create a felt sense of held space. Do not over-rely on any single stone; rotate based on what the body asks for.',
    cleansing: 'Run under cool water for 30 seconds (lepidolite, amethyst, smoky quartz, hematite, blue lace agate, rose quartz, howlite are all water-safe in short bursts). Smoke-cleanse with sage or palo santo for stones that have been holding a lot of anxiety. Avoid salt water for any of these — it can erode the surface over time.',
    charging: 'Moonlight (full moon especially) is gentle and effective for all calming stones. Sunlight can fade lepidolite and amethyst — use indirect morning sun only, max 1 hour.',
    common_mistakes: [
      'Treating crystals as a replacement for therapy or medication — they are companions to inner work, not substitutes for it.',
      'Buying ten stones at once — your nervous system can only build relationship with 1-2 at a time. Start small, go deep.',
      'Forgetting to cleanse — a stone that has been "holding" your anxiety for two weeks is saturated. It needs a rinse.'
    ],
    the_deeper_truth: 'Crystals do not eliminate anxiety. They give the anxious nervous system a focal point that is not the anxious thought. That focal point — the smooth weight in the palm, the cool color at the throat — is what lets the body remember it is safe. The stone is a doorway; the work is on the other side. Most people who say "crystals don\'t work for me" never actually held the stone for more than thirty seconds at a time.',
    pair_with_chakra: 'Heart chakra — anxiety often masks an unmet need for self-compassion; the heart is where lepidolite + rose quartz both work.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Anxiety Relief — listen with the stone in your hand, breathing slow.',
    pair_with_sound_slug: 'anxiety',
    pair_with_signs: ['gemini', 'virgo', 'pisces'],
    key_questions: [
      'When the anxiety arrives, what is my body actually asking me to notice?',
      'Have I been treating my body with the same patience I would give a small frightened animal?',
      'What in my daily routine is feeding the anxiety I am trying to soothe with a crystal?'
    ]
  },
  {
    slug: 'sleep',
    name: 'Crystals for Sleep',
    search_phrase: 'best crystals for sleep and insomnia',
    realm: 'calm',
    emoji: '🌙',
    one_liner: 'Stones that quiet the mental tape, soften the body, and invite the kind of sleep that actually restores you.',
    meaning: 'Insomnia is rarely about being tired — it is about the nervous system being unable to release the day. Crystals for sleep work in three ways: they slow the overactive mind (amethyst, howlite), they hold the dream-space open (moonstone, selenite), and they tell the body it is safe to surrender (lepidolite, smoky quartz). The bedroom becomes a small temple, and the stones are the candles that mark its corners. Used consistently, this is one of the cheapest, gentlest, most under-rated sleep tools that exists.',
    top_three: [
      {
        name: 'Amethyst',
        why: 'The undisputed queen of the sleep kit. A purple-violet variety of quartz, amethyst has been used for restful sleep across cultures for centuries — the Greeks even named it from "a-methystos" (not drunk), believing it kept the mind clear and the body steady. Modern practitioners place it under the pillow or on the bedside table; it consistently produces longer, deeper, more dream-rich sleep.',
        how_to_use: 'Place a tumbled stone or small cluster under the pillow (a tumbled stone is more comfortable). Or set on the bedside table within arm\'s reach. Hold for two minutes before turning out the lamp.'
      },
      {
        name: 'Lepidolite',
        why: 'Where amethyst quiets the thinking mind, lepidolite quiets the *anxious* mind — the part of you replaying the day or rehearsing tomorrow. Its natural lithium content makes it the best stone for the "I cannot stop thinking" species of insomnia. Pair amethyst (for depth) with lepidolite (for surrender) and most sleep complaints soften within a week.',
        how_to_use: 'Place beside the bed, on the heart center as you lie down for 60 seconds, or under the pillow alongside amethyst.'
      },
      {
        name: 'Moonstone',
        why: 'For people whose sleep is shallow or whose dreams have stopped coming, moonstone opens the dream channel and deepens the lunar half of the cycle. It is particularly powerful for women in any phase of cyclical or hormonal shift — perimenopause, postpartum, premenstrual — when sleep architecture goes haywire.',
        how_to_use: 'Place at the head of the bed. Wear as a ring or pendant during the late-evening wind-down. Pair with a glass of water on the nightstand — moonstone\'s relationship to water is part of its medicine.'
      }
    ],
    supporting: [
      'Howlite — specifically for racing pre-sleep thoughts; place on the third eye for 5 minutes.',
      'Selenite — clears the bedroom\'s energetic field; one wand on the nightstand resets the room.',
      'Smoky Quartz — for nightmare-prone sleepers; absorbs anxious dream content.',
      'Rose Quartz — for grief-related insomnia; hold against the heart as you fall asleep.',
      'Blue Lace Agate — for early-morning awakening (3-4am); softens the spike of cortisol.'
    ],
    how_to_use: 'The bedroom is the practice. Keep three to five sleep stones on the nightstand and a pinch of selenite by the door (clears whatever you bring home from the day). Never put crystals under a child\'s pillow without supervision — small pieces are a choking hazard. For adults, place a smooth tumbled stone in the pillowcase, or hold one in your dominant hand as you read your last page of the night.',
    cleansing: 'Moonlight is the natural ally of every sleep stone — leave them on a windowsill during the full moon for an overnight reset. Avoid harsh sunlight, which fades amethyst over time.',
    charging: 'Full-moon nights are non-negotiable for the sleep kit. New-moon nights are also good for resetting intent. Selenite charges every other stone simply by being placed alongside it.',
    common_mistakes: [
      'Filling the bedroom with too many stones — your nervous system needs *less* input at night, not more. Three is plenty.',
      'Keeping stimulating stones (citrine, carnelian, pyrite) on the nightstand — they are wonderful, but they wake the system up.',
      'Forgetting that the phone is the actual sleep thief — no crystal will out-perform a lit screen at 11:30pm.'
    ],
    the_deeper_truth: 'Crystals will not fix a phone-in-bed habit. They will not fix late-night caffeine, a chaotic nervous system, or a relationship that has the body holding its breath. What they will do is mark the bedroom as a sacred container — and that signaling, repeated nightly, is what teaches the body to surrender. The work is the consistency. The stones are the witnesses.',
    pair_with_chakra: 'Crown chakra — sleep is a temporary opening of the crown; amethyst and selenite both work here.',
    pair_with_chakra_slug: 'crown',
    pair_with_sound: 'Deep Sleep — combine with bedside crystals as a nightly ritual.',
    pair_with_sound_slug: 'sleep',
    pair_with_signs: ['cancer', 'pisces', 'taurus'],
    key_questions: [
      'What is the last hour of my day actually telling my body?',
      'Where in the body do I feel the resistance to letting go of the day?',
      'If my bedroom were treated as a sacred space, what would change about how I enter it?'
    ]
  },
  {
    slug: 'love',
    name: 'Crystals for Love',
    search_phrase: 'best crystals for attracting love and heart healing',
    realm: 'love',
    emoji: '🌹',
    one_liner: 'Stones that open the heart to receive — rose quartz at the center of every love kit, supported by stones for self-worth, communication, and trust.',
    meaning: 'The "crystals for love" search is two questions disguised as one: how do I attract love, and how do I heal the parts of me that block it? The honest answer is that the second question is the work — no stone will magnetize a partner who matches a heart that has not yet been opened to itself. The love kit is therefore mostly a *self-love* kit, with a few supporting stones for partner attraction and relationship maintenance. Rose quartz is the irreplaceable centerpiece; everything else builds around it.',
    top_three: [
      {
        name: 'Rose Quartz',
        why: 'The unconditional love stone, the heart stone, the stone every other love practice rests on. Pale pink, gentle, ubiquitous, often dismissed as "basic" — and yet there is nothing basic about it. Rose quartz holds the frequency of self-love, romantic love, parental love, friendship love, and the love that is simply present in a body without object. If you only owned one love crystal, this is it.',
        how_to_use: 'Wear as a pendant resting on the heart. Place a large piece on the bedside table or beside a photo of someone you love. Hold during a 5-minute "may I be loved, may I love" meditation.'
      },
      {
        name: 'Rhodonite',
        why: 'Rose quartz softens the heart; rhodonite *reconciles* it. A pink-and-black stone (the black is the wound, the pink is the healing growing through it), rhodonite is the stone for old heartbreak, betrayal, forgiveness, and the long slow work of restoring the capacity to trust. People drawn to it are usually doing post-breakup work or pre-relationship clearing.',
        how_to_use: 'Hold while journaling about a past hurt. Place over the heart for 10 minutes during a forgiveness practice. Wear as a ring on the dominant hand when re-entering the dating world.'
      },
      {
        name: 'Green Aventurine',
        why: 'Often called the "luck stone," green aventurine is also the stone of new heart openings — first dates, first kisses, the willingness to risk again. Where rose quartz holds the existing love and rhodonite heals the past, green aventurine opens the future door. Carry one when you are ready to actually meet someone, not when you are still grieving.',
        how_to_use: 'Carry in a pocket or bag on dates. Place by the front door before going out to socialize. Hold while writing your "qualities of my person" list.'
      }
    ],
    supporting: [
      'Moonstone — for the divine-feminine, intuitive, cyclical layer of love.',
      'Garnet — for passion, sensuality, and the embodied physical layer of partnership.',
      'Amazonite — for honest communication in existing relationships.',
      'Emerald — the traditional stone of fidelity and lasting commitment.',
      'Pink Tourmaline — for healing childhood-attachment wounds that show up in adult love.'
    ],
    how_to_use: 'Build a small altar in the bedroom or living space — a piece of rose quartz at the center, the others around it. Add a candle, a photo of yourself smiling, a flower. Sit there once a day for two minutes and breathe. The altar is not magic; it is a daily appointment with the part of you that wants to be loved well. Make the appointment, and the rest follows.',
    cleansing: 'Rose quartz, rhodonite, and green aventurine are all water-safe — rinse under cool water and pat dry. Smoke-cleanse with rose petals or palo santo for emotional resets after heartbreak.',
    charging: 'Pink full-moon nights especially. Place the love kit on a windowsill during a Venus-ruled day (Friday) for a tradition-based extra layer.',
    common_mistakes: [
      'Buying every love crystal at once — start with rose quartz alone and live with it for a moon cycle before adding more.',
      'Trying to "manifest a specific person" with crystals — this almost always backfires; manifest the qualities, never the name.',
      'Skipping the self-love work and expecting partner-attraction crystals to do it for you — a closed heart cannot magnetize an open one.'
    ],
    the_deeper_truth: 'The crystals that attract love are the same crystals that attract self-love — because the heart that has learned to love itself does not need to convince anyone else. Rose quartz is sometimes dismissed as too obvious, too pink, too cliché. But ask anyone who has worn one over the heart for thirty days straight: something softens. And what softens, attracts.',
    pair_with_chakra: 'Heart chakra — every stone in this kit works directly on the heart center.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — for the heart-clearing layer that has to come before new love can land.',
    pair_with_sound_slug: 'letting-go',
    pair_with_signs: ['libra', 'taurus', 'cancer'],
    key_questions: [
      'Am I trying to attract love or trying to avoid loneliness? They are not the same.',
      'What part of me am I still refusing to love, and how is that closing the door to a partner?',
      'If the love I want walked through the door this week, would I be ready to receive it without sabotaging it?'
    ]
  },
  {
    slug: 'money',
    name: 'Crystals for Money',
    search_phrase: 'best crystals for money and abundance',
    realm: 'abundance',
    emoji: '💰',
    one_liner: 'Stones that shift the relationship with abundance — citrine and pyrite at the center, supported by stones for confidence, action, and worth.',
    meaning: 'Most people searching "crystals for money" are not looking for magic — they are looking for permission. Permission to want more. Permission to receive without guilt. Permission to act on opportunities without shrinking. The crystals in this kit work on that permission first; the money follows. Citrine is the unmistakable centerpiece (the merchant\'s stone, traditionally placed in the cash register); pyrite is the action-stone that turns desire into doing; supporting stones address the deeper layers of self-worth that determine your money ceiling.',
    top_three: [
      {
        name: 'Citrine',
        why: 'The single most-recommended abundance stone in every tradition that uses crystals at all. A golden-yellow variety of quartz, citrine has been called the "merchant\'s stone" for centuries — placed in shop registers, business safes, and modern entrepreneurs\' desks for one reason: it works on the part of the psyche that decides whether you are someone who deserves to receive. Bright, warm, and unburnable, citrine never needs cleansing — it carries no shadow.',
        how_to_use: 'Keep on your desk, in the wallet, or in the cash drawer. Hold while reviewing income or sending an invoice. Pair with a written abundance affirmation — "money flows easily and I am ready to receive it."'
      },
      {
        name: 'Pyrite',
        why: 'Where citrine works on receiving, pyrite works on *acting*. A metallic gold-brassy stone (also called "fool\'s gold"), pyrite is the stone of confident, embodied financial action — sending the pitch, asking for the raise, raising your prices, buying the asset. People drawn to pyrite are usually under-earning relative to their skill and need to embody the confidence their work already deserves.',
        how_to_use: 'Hold before an important money conversation. Keep on the desk during pricing decisions. Place near the laptop when sending invoices or pitches.'
      },
      {
        name: 'Green Aventurine',
        why: 'Known as the "luck stone," green aventurine opens the channel for opportunity — the unexpected windfall, the email from the right person, the door that opens without you having to push it. Citrine builds the receiver, pyrite builds the actor, green aventurine arranges the synchronicity.',
        how_to_use: 'Carry in a pocket on important meeting days. Place on a vision board or near a savings account login. Hold while writing the next financial goal.'
      }
    ],
    supporting: [
      'Tiger\'s Eye — for the courage layer; especially good for people raising prices.',
      'Jade — the classic prosperity stone in East Asian tradition; long-term wealth.',
      'Malachite — for transformation of money trauma and old scarcity stories.',
      'Carnelian — for the action and momentum layer; helps procrastinators ship.',
      'Smoky Quartz — to ground abundance into actual practical decisions, not fantasy.'
    ],
    how_to_use: 'The desk is the altar. Place citrine in the upper-left corner of the workspace (the wealth corner in feng shui). Keep pyrite near the keyboard. Carry green aventurine in your wallet. Every time you make a financial decision — even a small one, a coffee, a subscription — pause for one breath and notice whether the decision is coming from scarcity or sufficiency. The stones will not change the answer; they will change *whether you notice* the answer.',
    cleansing: 'Citrine never needs cleansing. Pyrite cannot be water-cleansed (it tarnishes) — use sage smoke or moonlight. Green aventurine is water-safe.',
    charging: 'Full sun for citrine. New-moon nights for pyrite (intention-setting energy). Friday (Venus day, prosperity day in tradition) for the whole kit.',
    common_mistakes: [
      'Buying expensive crystals expecting them to "manifest" the money to pay for themselves — this is exactly the scarcity loop the practice is meant to break.',
      'Hiding the crystals in a drawer — they need to be visible in the workspace to do their job (the daily reminder is the practice).',
      'Skipping the actual money work — looking at your numbers, raising your prices, asking for the raise. Crystals support action; they don\'t replace it.'
    ],
    the_deeper_truth: 'Money flows toward people who have made peace with deserving it. Crystals are not a shortcut to that peace — they are a daily nudge toward it. The person who works the citrine consistently for ninety days is a different person at the end: not because the stone changed their finances, but because the stone reminded them, ninety times, that they are someone who can receive. That reminder, repeated, is the medicine.',
    pair_with_chakra: 'Solar plexus — the chakra of self-worth, will, and the personal sun; both citrine and pyrite work here.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance Affirmations — listen daily with citrine in hand.',
    pair_with_sound_slug: 'abundance',
    pair_with_signs: ['leo', 'taurus', 'capricorn'],
    key_questions: [
      'When money arrives unexpectedly, do I receive it cleanly or do I feel I have to "earn" it retroactively?',
      'What is my actual money ceiling — the number above which I start sabotaging?',
      'If I knew I deserved twice my current income, what would I do differently this week?'
    ]
  },
  {
    slug: 'protection',
    name: 'Crystals for Protection',
    search_phrase: 'best crystals for protection from negative energy',
    realm: 'protection',
    emoji: '🛡️',
    one_liner: 'Stones that create an energetic boundary — black tourmaline at the gate, with stones for psychic shielding, evil-eye deflection, and grounding.',
    meaning: '"Protection" in the crystal world means three different things: protection from environmental energy (the bad-day-at-the-office residue you carry home), protection from other people\'s projections (the gossip, the resentment, the energy vampire), and protection from spiritual or psychic intrusion (the empath\'s overload, the bad-feeling-place, the unwanted attachment). Black tourmaline handles all three at the entry-level. The deeper kit fine-tunes for which kind of protection your life actually needs — and the work is figuring out which one.',
    top_three: [
      {
        name: 'Black Tourmaline',
        why: 'The most reliable, the most-recommended, the most-tested protection stone in modern crystal use. Black, opaque, often fibrous in structure — and energetically the equivalent of closing the front door. Black tourmaline does three things at once: it grounds excess energy into the earth, it deflects ambient negativity, and it transmutes (rather than absorbs) hostile energy. Unlike obsidian, which holds the shadow, tourmaline lets it pass through.',
        how_to_use: 'Place at all four corners of a room for a "sealed" space. Carry in a pocket when entering high-conflict environments. Place by the front door of the home — the energetic doormat.'
      },
      {
        name: 'Black Obsidian',
        why: 'A volcanic glass formed in seconds when lava hits cold air. Obsidian is the protection stone for inner-shadow work — the psychic mirror that shows you exactly what you have been refusing to see, while also blocking outside intrusion. Use with respect: obsidian does not soften reality. It clarifies it.',
        how_to_use: 'Hold during shadow-work journaling. Place on the desk during difficult truth-telling conversations. Pair with a black-tourmaline grounding companion to soften the intensity.'
      },
      {
        name: 'Selenite',
        why: 'A translucent, almost moonlight-white stone (technically gypsum, named after the moon goddess Selene), selenite is the cleanser of the protection kit. Where tourmaline blocks and obsidian clarifies, selenite *clears* — the room, the aura, the lingering charge of an argument. Every protection altar needs at least one selenite wand.',
        how_to_use: 'Sweep a selenite wand around the perimeter of the body (12 inches off skin) once per day. Place one on every windowsill of the home. Use to cleanse other crystals — selenite recharges them simply by sitting alongside.'
      }
    ],
    supporting: [
      'Smoky Quartz — softer than tourmaline, good for daily personal carry.',
      'Hematite — silvery and dense, classic warrior\'s stone for aggressive environments.',
      'Tiger\'s Eye — protective AND confidence-building; for facing rather than hiding.',
      'Black Onyx — for protection from gossip and verbal attack.',
      'Labradorite — psychic shielding for empaths and intuitives in crowded rooms.'
    ],
    how_to_use: 'Map your protection needs first. Are you walking into hostile rooms (carry tiger\'s eye, hematite)? Are you living with someone whose mood weighs on you (place tourmaline at the bedroom door)? Are you an empath drowning in crowds (wear labradorite as a pendant)? The kit only works when matched to the specific kind of energy you are protecting against. Every protection altar needs at least one cleanser (selenite) and one grounding stone (tourmaline or hematite). Beyond that, customize.',
    cleansing: 'Black tourmaline benefits from a weekly water rinse and a moonlight reset — it gets saturated faster than other stones. Obsidian: smoke-cleanse with sage. Selenite cannot get wet (it dissolves in water) — use smoke or simply sunlight.',
    charging: 'Full moon for the whole kit. Tourmaline can also be "earthed" — bury in the garden overnight every few months for a deep reset.',
    common_mistakes: [
      'Forgetting to cleanse protection stones — they hold what they deflect, and they hold a *lot*. Saturated tourmaline becomes useless.',
      'Treating protection as a substitute for actual boundary-setting — no crystal will replace the conversation you have been avoiding.',
      'Buying a "protection set" of ten stones — you don\'t need ten. You need the right two for your situation, used consistently.'
    ],
    the_deeper_truth: 'The protection you most need is usually internal, not external. Most people who feel "psychically attacked" are actually under-resourced, under-rested, and under-boundaried. Protection crystals are excellent — and the deeper work is to become the kind of person whose energy field is naturally clear. The stones are the training wheels. The discernment is the destination.',
    pair_with_chakra: 'Root chakra — the chakra of safety, ground, and the body\'s sense of "I am here, I am held."',
    pair_with_chakra_slug: 'root',
    pair_with_sound: 'Letting Go — to release what protection alone cannot dissolve.',
    pair_with_sound_slug: 'letting-go',
    pair_with_signs: ['scorpio', 'capricorn', 'cancer'],
    key_questions: [
      'What am I actually protecting against — a person, an environment, a thought-form, or my own unhealed reactivity?',
      'Where in my life have I been using "protection" as an excuse not to set a real boundary?',
      'If I felt completely safe in my own body, what would change about who I let close?'
    ]
  },
  {
    slug: 'confidence',
    name: 'Crystals for Confidence',
    search_phrase: 'best crystals for confidence and self-worth',
    realm: 'love',
    emoji: '🦁',
    one_liner: 'Stones that strengthen the solar plexus, anchor the voice, and remind you that you are allowed to take up space.',
    meaning: 'Confidence is not the absence of fear; it is the willingness to act in spite of it. The crystals in this kit work directly on the solar plexus (the will-center), the throat (the voice), and the third eye (the self-perception that decides whether you believe in your own worth). The kit is especially useful for people who are competent but quiet — those who *should* be confident based on their skills, and who are not, because somewhere along the line they were taught that being seen was dangerous. The stones unteach that.',
    top_three: [
      {
        name: 'Citrine',
        why: 'Citrine is the abundance stone, but it is also the *self-worth* stone — and self-worth is the ground on which confidence stands. Bright, golden, sun-like, citrine warms the solar plexus and reminds the body that it is allowed to want, allowed to claim, allowed to receive. The same stone that brings money also brings the willingness to ask for it.',
        how_to_use: 'Place on the solar plexus (just below the sternum) for a 5-minute lie-down before a confidence-demanding event. Wear as a pendant. Hold during the "I am enough" affirmation practice.'
      },
      {
        name: 'Tiger\'s Eye',
        why: 'A golden-brown chatoyant stone with a "cat\'s eye" shimmer — and the most warrior-like of the confidence kit. Tiger\'s eye is for the moment of action: the pitch, the audition, the difficult conversation, the moment you raise your hand. It does not invent confidence; it gathers the confidence you already have but have been hiding from.',
        how_to_use: 'Carry in the dominant hand\'s pocket on courage days. Hold for 30 seconds before a high-stakes meeting. Place on the desk during work that requires assertion.'
      },
      {
        name: 'Carnelian',
        why: 'A deep orange variety of chalcedony, carnelian is the action-and-momentum stone — what tiger\'s eye does for the moment, carnelian does for the ongoing project. It is particularly good for people whose confidence collapses partway through a goal (the second-album, the final-mile, the deep-middle of the manuscript). It re-ignites the spark.',
        how_to_use: 'Wear or carry during creative work. Place on the writing desk or in the studio. Hold during the daily "first action" of a long project.'
      }
    ],
    supporting: [
      'Pyrite — for embodied financial confidence.',
      'Sunstone — for natural authority and leadership presence.',
      'Garnet — for passionate, full-bodied self-expression.',
      'Amazonite — for confident *truth-telling*, especially in conflict.',
      'Lapis Lazuli — for the inner-knowing kind of confidence rooted in self-awareness.'
    ],
    how_to_use: 'Wear the confidence kit. Pendants work beautifully (citrine, tiger\'s eye, lapis can all be worn close to the body), as do rings on the dominant hand. The skin-contact matters — confidence stones work through felt sense, not abstract intention. Pair with a daily mirror practice: hold the stone, look at your own reflection, and say one true thing about yourself out loud. Repeat for thirty days. The stone will remind you you said it; you will start to believe yourself.',
    cleansing: 'Water-rinse for citrine, tiger\'s eye, and carnelian. Smoke-cleanse weekly if the kit is in heavy daily use.',
    charging: 'Full sun is the natural ally for the confidence kit — citrine, carnelian, tiger\'s eye, sunstone all love sunlight. 1-2 hours, midday.',
    common_mistakes: [
      'Wearing confidence crystals only on hard days — the practice works through consistency, not emergency dosing.',
      'Confusing confidence with arrogance — the goal is self-trust, not self-promotion.',
      'Forgetting to practice the *behavior* of confidence — speaking up, asking, taking up space. Crystals support behavior; they don\'t generate it.'
    ],
    the_deeper_truth: 'Most people who lack confidence do not lack ability — they lack the permission to claim what they already have. The crystals do not give you new abilities. They give you the daily, embodied reminder that the abilities are already there. Tiger\'s eye in your pocket does not make you smarter than you were yesterday; it reminds you, ten times a day, that you have been smart all along.',
    pair_with_chakra: 'Solar plexus — the chakra of will, identity, and the personal sun.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance Affirmations — confidence and worth share a frequency.',
    pair_with_sound_slug: 'abundance',
    pair_with_signs: ['leo', 'aries', 'sagittarius'],
    key_questions: [
      'When have I been confident in the past — and what conditions made that possible?',
      'What is the smallest act of confidence I could practice today, repeatedly, until it stops feeling brave?',
      'Whose voice in my head is telling me I am not enough — and do I still believe them?'
    ]
  },
  {
    slug: 'grief',
    name: 'Crystals for Grief',
    search_phrase: 'best crystals for grief and heartbreak',
    realm: 'calm',
    emoji: '🕊️',
    one_liner: 'Stones that hold the heart while it grieves — without rushing it, without bypassing the pain, without pretending the loss did not happen.',
    meaning: 'Grief is not a problem to solve. It is a passage to be witnessed. The crystals in this kit do not "remove" grief — they sit with it. They hold the chest open when it would rather collapse. They invite tears that have been waiting. They mark the body as a sacred container for an unbearable feeling, and they remind the griever, gently, that they are still here. This is the kit for the first month after a death, after a breakup, after a miscarriage, after a friendship ends, after a part of life closes that cannot be reopened.',
    top_three: [
      {
        name: 'Apache Tear (Black Obsidian)',
        why: 'The traditional grief stone of several Indigenous American traditions. A small, smoky-translucent obsidian, the Apache tear holds the metaphor in its name — and energetically it absorbs sorrow gently, not all at once but a little each day. Practitioners report the stone "lightening" over weeks, as if it were carrying some of the grief on the griever\'s behalf.',
        how_to_use: 'Hold while crying. Carry in the pocket through the first weeks. Place on the bedside or beside a photo of the lost beloved.'
      },
      {
        name: 'Rose Quartz',
        why: 'In a grief kit, rose quartz is for the loving — the love that does not stop just because the beloved is gone. It softens the body around the loss, opens the heart back to receiving (eventually, slowly), and reminds the griever that love itself is not the wound. The wound is the absence of the form. The love remains.',
        how_to_use: 'Hold against the heart for as long as the body asks. Keep on the bedside through the night. Sleep with it in the pillowcase during the worst weeks.'
      },
      {
        name: 'Smoky Quartz',
        why: 'Grief is heavy. Smoky quartz holds heaviness without judgment. A grey-brown variety of quartz, it grounds the bereaved body when grief threatens to dissociate it ("I feel like I am floating, I cannot feel my legs"). Smoky quartz brings you back down — gently, without forcing — into a body that can feel.',
        how_to_use: 'Hold during the freeze moments — the ones where you cannot move, cannot eat, cannot speak. Place at the foot of the bed during sleep.'
      }
    ],
    supporting: [
      'Lepidolite — for the anxiety that grief produces; the 3am loops and worst-case spirals.',
      'Howlite — softens the mental tape that grief creates ("I should have, why didn\'t I").',
      'Moonstone — for cyclical grief that ebbs and returns; the unpredictable waves.',
      'Black Tourmaline — to keep the body grounded when grief makes the world feel unsafe.',
      'Rhodonite — for the eventual forgiveness layer, especially in unresolved relationship grief.'
    ],
    how_to_use: 'There is no rushing this. Hold the stones when the body asks. Cry into them, sleep with them, place them on the altar beside the photograph or the urn. Do not "use" grief crystals — *be with them*. The verb is wrong; grief is not a project. It is a season the body must move through, and the stones are the witnesses that mean you are not moving through it alone.',
    cleansing: 'Water-rinse weekly during heavy grief — the stones absorb a lot. Moonlight reset on the full moon. Some traditions recommend salt-water cleansing for grief stones (salt is the elemental form of tears) — if the stone is salt-safe (rose quartz is generally fine, briefly), this can be powerful.',
    charging: 'Moonlight is the natural ally — grief is a moon-energy, cyclical, soft, watery. Avoid harsh sunlight during the first month; the energy is too bright.',
    common_mistakes: [
      'Using grief crystals to bypass grief — to feel "better" faster. The stones do not work that way; they hold the feeling, not erase it.',
      'Putting them away too soon, when grief seems to have lifted — grief returns in waves; let the stones be available.',
      'Trying to fix the griever in your life with a gift of crystals — ask first. Grief is private. Some people will receive the gesture; others will feel intruded upon.'
    ],
    the_deeper_truth: 'The crystals do not heal grief. *Time* does some of it. *Grieving fully* does most of it. *Being witnessed* does the rest. The stones are witnesses — small, patient, unhurried — and that is what makes them so suited to grief. They do not ask you to be okay. They do not check in to see if you have moved on. They hold what they hold, for as long as you need, and they ask nothing back.',
    pair_with_chakra: 'Heart chakra — grief is the heart breaking open in real time.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Letting Go — when (and only when) the body is ready.',
    pair_with_sound_slug: 'letting-go',
    pair_with_signs: ['cancer', 'pisces', 'scorpio'],
    key_questions: [
      'What does my grief actually need from me today — to be felt, to be moved through the body, or simply to be acknowledged?',
      'Who or what am I being asked to release — and what part of me is not yet ready?',
      'What is the love that survives the loss — and how do I carry it forward?'
    ]
  },
  {
    slug: 'clarity',
    name: 'Crystals for Clarity',
    search_phrase: 'best crystals for focus, clarity, and decision-making',
    realm: 'protection',
    emoji: '🔮',
    one_liner: 'Stones that cut through mental fog — clear quartz at the center, supported by stones for focus, decisive action, and inner truth.',
    meaning: 'Clarity is not the same as knowledge. You can know all the facts and still not be clear; you can know almost nothing and still be crystal-clear about what to do next. The clarity kit works on the *seeing* layer — the part of you that perceives directly, beneath the mental noise. Clear quartz is the obvious centerpiece (the master clarifier). Supporting stones address the specific blocks: scattered focus (fluorite), indecision (lapis lazuli), inability to hear inner voice (amethyst). Use this kit when the mind is full but the answer is missing.',
    top_three: [
      {
        name: 'Clear Quartz',
        why: 'The "master crystal" — colorless, transparent, infinitely programmable. Clear quartz amplifies whatever intention is set into it and clarifies whatever question is asked of it. It is the single most-used crystal across all traditions for one reason: it gets out of the way. There is no agenda in clear quartz. It is a clean lens, and the lens is what you need when the mind is foggy.',
        how_to_use: 'Hold during journaling. Place on the desk during decision-making. Program with a single question by holding it and stating the question clearly three times — then let it sit overnight.'
      },
      {
        name: 'Fluorite',
        why: 'The student\'s stone, the focus stone, the "stop scrolling and finish the work" stone. Fluorite (especially purple, green, or rainbow) cuts through scattered attention and reorganizes the mind into linear, useful order. People with ADHD-spectrum scatter or pre-deadline panic respond to fluorite quickly.',
        how_to_use: 'Place on the desk while working. Hold during study sessions. Wear as a pendant during long meetings or conferences.'
      },
      {
        name: 'Lapis Lazuli',
        why: 'A deep blue stone shot through with gold pyrite, used by ancient Egyptians for the eyebrows of Nefertiti and the headdress of pharaohs. Lapis is the inner-truth stone — it strips away social conditioning, polite agreement, and the "what should I want" layer, and shows you what you actually want underneath. The clarity it produces is sometimes uncomfortable; it is always honest.',
        how_to_use: 'Place on the third eye during meditation. Hold while writing the "what do I actually want" journal entry. Wear when stepping into roles of authority that require honest judgment.'
      }
    ],
    supporting: [
      'Amethyst — for spiritual clarity and the quiet that lets inner voice be heard.',
      'Sodalite — the "thinker\'s stone"; aids logical reasoning and clear writing.',
      'Hematite — for grounded clarity, especially on big-picture life decisions.',
      'Selenite — clears the energetic field around the question itself.',
      'Black Tourmaline — removes the protective fog around things you have been avoiding seeing.'
    ],
    how_to_use: 'Build the clarity altar on your desk. Center: clear quartz. Around it: fluorite (to the left, for the practical focus side), lapis (to the right, for the deep-truth side), selenite (in front, the cleanser). Sit at the altar before any major decision. Hold the relevant stone, ask the question out loud, and write whatever comes — without editing — for three pages. The clarity will be in the pages, not the stone. The stone is the doorway.',
    cleansing: 'Clear quartz is the workhorse and gets used heavily — water-rinse weekly. Fluorite and lapis: smoke-cleanse only (water can dull them). Selenite cannot get wet ever.',
    charging: 'Full moon for the whole kit. Sunlight for clear quartz only (1 hour max). Place all stones on a selenite slab between uses for ambient recharging.',
    common_mistakes: [
      'Asking the stones for the *answer* — they don\'t give answers; they clear the lens through which you see your own answer.',
      'Programming clear quartz with conflicting intentions — pick one question per stone per cycle.',
      'Skipping the journaling — the stone alone will not produce clarity; the writing is where the clarity lands.'
    ],
    the_deeper_truth: 'Most "I don\'t know what to do" is actually "I do know what to do, and I am afraid to admit it." The clarity stones do not invent the knowing — they soften the resistance to it. Lapis lazuli especially has this quality: people often put it down, walk away, and find themselves accidentally writing the answer twenty minutes later. The mind already knows. The stones make it safe enough to hear.',
    pair_with_chakra: 'Third eye — the chakra of perception, intuition, and the inner sight that produces clarity.',
    pair_with_chakra_slug: 'third-eye',
    pair_with_sound: 'Deep Healing — to soften the body enough that the mind\'s noise drops.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_signs: ['gemini', 'virgo', 'aquarius'],
    key_questions: [
      'What question am I avoiding asking myself, because I am afraid of the answer?',
      'If I trusted the first thing that arrived, what would I do this week?',
      'What is the noise that has been crowding out my clarity — and can I turn it off for one hour?'
    ]
  },
  {
    slug: 'healing',
    name: 'Crystals for Healing',
    search_phrase: 'best crystals for emotional and physical healing',
    realm: 'calm',
    emoji: '🌿',
    one_liner: 'Stones that support the body\'s own healing intelligence — across emotional, energetic, and (gently, never as substitute for medicine) physical layers.',
    meaning: '"Crystals for healing" is the broadest of all the searches in this cluster — and the most misused. Crystals do not heal physical illness; they support the conditions in which the body and psyche heal themselves. The healing kit works across three layers: emotional healing (rose quartz, rhodonite for old wounds), energetic healing (clear quartz, selenite for field-clearing), and the support-of-physical layer (amethyst for sleep-and-recovery, malachite for transformation). This kit is the foundation of every other intent kit — almost everything anyone wants from crystals lives somewhere in here.',
    top_three: [
      {
        name: 'Clear Quartz',
        why: 'The universal healer, the master crystal, the amplifier-and-clarifier. Clear quartz can be programmed for any healing intent — emotional, energetic, mental. It works as a multiplier alongside other stones, which is why almost every healing layout includes it. If you only owned three crystals, this would be one of the three.',
        how_to_use: 'Place on the body during rest (one on each chakra works as a simple grid). Program with a specific healing intention. Hold during meditation.'
      },
      {
        name: 'Amethyst',
        why: 'The traditional all-purpose healing stone — calming, sleep-supporting, dream-deepening, emotionally balancing. Amethyst is one of the oldest stones in human healing tradition, used in Egyptian, Greek, Roman, Tibetan, and medieval European medicine. It works on the part of healing that is not "intervention" but *rest* — and rest is what most of us need most.',
        how_to_use: 'Place under the pillow for sleep healing. Hold during gentle meditation. Place a cluster in the recovery room if convalescing.'
      },
      {
        name: 'Rose Quartz',
        why: 'Most healing — even physical healing — has an emotional substrate. Rose quartz works directly on that substrate. It softens the body around old hurt, opens the heart to self-care, and reminds the system that it is allowed to receive its own gentleness. The stone for the chronic-illness journey, the post-surgery recovery, and the long emotional rebuilds.',
        how_to_use: 'Place on the heart center during rest. Add to bath water (rose quartz is water-safe for short periods). Wear daily during a healing season.'
      }
    ],
    supporting: [
      'Selenite — clears the energetic field that would otherwise block other healing stones.',
      'Malachite — for transformation healing; releases old patterns held in the body.',
      'Bloodstone — traditional stone of the blood and physical vitality; recovery support.',
      'Lepidolite — for nervous-system healing during anxiety-rich recovery seasons.',
      'Smoky Quartz — grounds healing energy into the body so it actually integrates.'
    ],
    how_to_use: 'A simple healing layout: lie down, place one clear quartz at the crown (above the head), one rose quartz on the heart, one amethyst on the third eye. Add stones at any chakra that is calling. Stay for 20 minutes, breathing slow. Do not "do" anything — let the body receive. Repeat 2-3 times a week during a healing season.',
    cleansing: 'Healing stones absorb a lot — cleanse weekly. Water-rinse for clear quartz, rose quartz, amethyst (not in salt). Smoke-cleanse with sage or palo santo. Selenite cannot get wet.',
    charging: 'Full moon for the whole kit. Place on a selenite slab between uses. Avoid sunlight for amethyst and rose quartz (they fade).',
    common_mistakes: [
      'Treating crystals as medicine — they are companions to medicine, not substitutes. Always keep your medical relationships intact.',
      'Doing a healing layout once and expecting transformation — like any practice, this works through consistency.',
      'Forgetting that healing is also rest, food, sleep, water, sunlight, movement, and human contact — the stone is one piece of a much larger picture.'
    ],
    the_deeper_truth: 'The body wants to heal. It is, in fact, healing already, every minute, in ways we cannot see. Crystals do not initiate the healing; they support the conditions in which the existing healing can deepen. The most powerful thing any crystal can do for a healing journey is *remind you to slow down enough to let the healing happen*. That reminder, repeated daily, is most of what they are good for. The rest is the body\'s own intelligent work.',
    pair_with_chakra: 'Heart chakra — healing always passes through the heart, regardless of which body system needs it.',
    pair_with_chakra_slug: 'heart',
    pair_with_sound: 'Deep Healing — the foundational meditation for the foundational kit.',
    pair_with_sound_slug: 'deep-healing',
    pair_with_signs: ['cancer', 'pisces', 'virgo'],
    key_questions: [
      'What part of me is asking for healing right now — physical, emotional, energetic, or all three?',
      'Am I willing to slow down enough to let the healing happen, or am I trying to power through it?',
      'What is the smallest, gentlest act of self-care I could offer myself today?'
    ]
  },
  {
    slug: 'manifestation',
    name: 'Crystals for Manifestation',
    search_phrase: 'best crystals for manifestation and intention',
    realm: 'abundance',
    emoji: '✨',
    one_liner: 'Stones that amplify intention, focus the will, and turn desire into aligned action — clear quartz, citrine, and pyrite at the center.',
    meaning: 'Manifestation crystals work on three of the four parts of any manifestation: clarity (knowing what you want), commitment (the will to act on it), and reception (the willingness to receive it). The fourth part — the action itself — is yours, and no stone will do it for you. The kit is therefore not a magical shortcut but a daily anchor. People who manifest consistently report two things: they pick *one* clear desire at a time, and they let one stone hold that desire for thirty days while they do the work. The stones are the witnesses of commitment, not the source of magic.',
    top_three: [
      {
        name: 'Clear Quartz',
        why: 'Programmable, amplifying, neutral. Clear quartz is the manifestation stone par excellence because it adopts whatever intention you place into it — and then it broadcasts that intention back to you, every time you see it, hold it, or pass it on the desk. It is the simplest stone in the kit and arguably the most important.',
        how_to_use: 'Hold a clear quartz point in your dominant hand. Speak your intention out loud three times. Place the stone where you will see it daily. Renew the intention monthly.'
      },
      {
        name: 'Citrine',
        why: 'The abundance stone, but in a manifestation context, citrine is also the *receiving* stone. Most manifestation stalls happen at reception: you have done the work, the opportunity has shown up, and something in you cannot let it land. Citrine works directly on that receptivity layer. It is also the only stone that never needs cleansing — it carries no shadow, only light.',
        how_to_use: 'Place near where the desired outcome will arrive (citrine for money near the bank account login; citrine for love near the bedside; citrine for opportunity by the door).'
      },
      {
        name: 'Pyrite',
        why: 'Where citrine receives, pyrite *acts*. The metallic gold-brassy stone of action, pyrite holds the truth that manifestation without action is just wishing. Use pyrite for the daily steps: the email sent, the practice done, the call made. Pyrite turns intention into momentum, and momentum is what manifestation actually rides on.',
        how_to_use: 'Place on the workspace where the manifestation work happens. Hold before each "manifestation action" of the day.'
      }
    ],
    supporting: [
      'Green Aventurine — the luck-and-opportunity stone; opens unexpected doors.',
      'Selenite — clears the energetic field around the manifestation altar.',
      'Carnelian — for the action-momentum layer; fuels the daily practice.',
      'Tiger\'s Eye — for the courage layer; the willingness to actually act on the desire.',
      'Moonstone — for cyclical manifestation that follows the lunar cycle (new-moon set, full-moon harvest).'
    ],
    how_to_use: 'Build the manifestation altar. Center: clear quartz programmed with the specific intention (one intention per quartz; do not overload). Around it: citrine for receiving, pyrite for action, green aventurine for luck. Light a candle. Sit with the altar for 2 minutes a day — read the intention, hold the central quartz, do one small action toward it, blow out the candle. Repeat for 30 days minimum. The altar is the daily appointment with the desire.',
    cleansing: 'Cleanse the kit at the start of each manifestation cycle (new moon is traditional). Clear quartz: water-rinse + smoke-cleanse + reprogram. Citrine: never needs cleansing. Pyrite: smoke only (water tarnishes).',
    charging: 'New moon for setting intentions, full moon for amplifying them. The 30-day cycle naturally aligns with the lunar cycle.',
    common_mistakes: [
      'Programming the same crystal for multiple intentions — pick one per stone, and let it hold that one fully.',
      'Setting intentions and then ignoring them — the stones are reminders; if you don\'t look at them, the practice stalls.',
      'Skipping the action — the stones support manifestation, but actions create it. Pyrite cannot send your email for you.'
    ],
    the_deeper_truth: 'The crystals that manifest most reliably are the crystals you tend to most consistently. There is no magic in a crystal abandoned in a drawer. There is significant compounded magic in a crystal held daily, with the same intention, for thirty days. The substance of manifestation is not in the stone; it is in the daily, embodied, repeated practice of being someone who can want clearly, act consistently, and receive cleanly. The stone is a witness to that becoming.',
    pair_with_chakra: 'Solar plexus — the will-and-creation chakra; where manifestation actually lives.',
    pair_with_chakra_slug: 'solar-plexus',
    pair_with_sound: 'Abundance Affirmations — the audio companion to the daily altar practice.',
    pair_with_sound_slug: 'abundance',
    pair_with_signs: ['leo', 'aries', 'capricorn'],
    key_questions: [
      'What is the *one* desire I am willing to commit to fully for the next 30 days?',
      'What is the daily action this manifestation requires of me, and am I doing it?',
      'When the manifestation arrives, will I be ready to receive it without sabotaging it?'
    ]
  }
]

export const CRYSTAL_INTENT_SLUGS = CRYSTAL_INTENT_KITS.map((k) => k.slug)
const KIT_BY_SLUG: Record<string, CrystalIntentKit> = Object.fromEntries(
  CRYSTAL_INTENT_KITS.map((k) => [k.slug, k])
)

export function isCrystalIntentSlug(s: string): boolean {
  return s in KIT_BY_SLUG
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

// Realm-tinted gradient: calm=teal, love=rose, abundance=gold, protection=indigo.
const REALM_ACCENT: Record<string, { c1: string; c2: string }> = {
  calm: { c1: '#5aa0a8', c2: '#2c606a' },
  love: { c1: '#d68aa0', c2: '#a04a64' },
  abundance: { c1: '#d6a85a', c2: '#a06e2c' },
  protection: { c1: '#5a6cb8', c2: '#2c3a82' }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function crystalIntentPageHTML(slug: string): string {
  const k = KIT_BY_SLUG[slug]
  if (!k) return ''
  const accent = REALM_ACCENT[k.realm] || { c1: '#888', c2: '#444' }
  const readingHref = `/gab44/reading?ref=intent-${slug}`

  const title = `${escapeHtml(k.name)} — Top Stones, How To Use Them, Common Mistakes · gab44 ✨`
  const description = `The ${k.search_phrase}: top 3 stones, supporting stones, how to use them, how to cleanse and charge, common mistakes, the deeper truth most teachers don't say. Hand-written, warm.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Crystals by intent', item: `${SITE_URL}/gab44/crystals-for` },
          { '@type': 'ListItem', position: 3, name: k.name, item: `${SITE_URL}/gab44/crystals-for/${slug}` }
        ]
      },
      {
        '@type': 'HowTo',
        name: `${k.name}: how to use them`,
        description: k.one_liner,
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Choose stones', text: `Start with the top three: ${k.top_three[0].name}, ${k.top_three[1].name}, ${k.top_three[2].name}.` },
          { '@type': 'HowToStep', position: 2, name: 'Cleanse', text: k.cleansing },
          { '@type': 'HowToStep', position: 3, name: 'Charge', text: k.charging },
          { '@type': 'HowToStep', position: 4, name: 'Use', text: k.how_to_use }
        ]
      },
      {
        '@type': 'Article',
        headline: `${k.name}: which stones, how to use them, the deeper truth`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/crystals-for/${slug}`,
        about: `${k.name}, healing crystals, ${k.search_phrase}`
      }
    ]
  })

  const otherKitsHtml = CRYSTAL_INTENT_KITS.filter((q) => q.slug !== slug).map((q) => {
    const acc = REALM_ACCENT[q.realm] || { c1: '#888', c2: '#444' }
    return `<a class="ph-mini" href="/gab44/crystals-for/${q.slug}" style="--c1:${acc.c1};--c2:${acc.c2}"><span class="sym">${q.emoji}</span><span class="name">${escapeHtml(q.name.replace('Crystals for ', ''))}</span></a>`
  }).join('\n        ')

  const supportingHtml = k.supporting.map((s) => `<li>${escapeHtml(s)}</li>`).join('\n        ')

  const signLinksHtml = k.pair_with_signs.map((s) => `<a href="/gab44/${s}/crystals">${escapeHtml(s)} crystals</a>`).join(' · ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/crystals-for/${slug}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/crystals-for/${slug}" />
<meta name="twitter:card" content="summary" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root {${PALETTE}
    --c1:${accent.c1}; --c2:${accent.c2};
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    background:
      radial-gradient(1100px 600px at -10% -10%, ${accent.c1}1c 0%, transparent 50%),
      radial-gradient(900px 500px at 110% 110%, ${accent.c2}1c 0%, transparent 60%),
      var(--bg-0);
    color: var(--fg); line-height: 1.65; min-height: 100vh;
  }
  .wrap { max-width: 720px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .nav a:hover { text-decoration: underline; }
  .brand-mark {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 10px;
  }
  .brand-mark .dot { width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c1), var(--c2)); box-shadow: 0 0 0 4px ${accent.c1}1f; }
  h1 { font-size: 42px; line-height: 1.05; margin: 6px 0 8px;
    letter-spacing: -0.02em; font-weight: 800; color: var(--fg); }
  h1 .sym { font-size: 0.9em; vertical-align: -2px; padding-right: 12px; }
  .realm-pill { display: inline-block; background: linear-gradient(135deg, var(--c1), var(--c2));
    color: var(--fg-on-accent); padding: 4px 14px; border-radius: 999px;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; margin-bottom: 12px; }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 14px; font-style: italic; }
  h2 { font-size: 22px; margin: 36px 0 12px; font-weight: 700; color: var(--fg); letter-spacing: -0.01em; }
  h2 .icon { color: var(--accent); padding-right: 6px; }
  p { margin: 0 0 14px; font-size: 16px; }
  .core-card {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 18px;
    padding: 28px 30px; margin: 0 0 8px;
    box-shadow: 0 1px 2px rgba(20,14,4,0.04), 0 4px 14px rgba(20,14,4,0.06);
    position: relative; overflow: hidden;
  }
  .core-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .core-card .label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--fg-muted); margin-bottom: 8px; font-weight: 700; }
  .core-card .text { font-size: 17px; line-height: 1.7; color: var(--fg); margin: 0; }
  .top-stone { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 12px 0; border-left: 4px solid var(--c1); }
  .top-stone h3 { margin: 0 0 8px; font-size: 19px; font-weight: 700; color: var(--fg);
    display: flex; align-items: baseline; gap: 8px; }
  .top-stone .rank { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--c1);
    background: ${accent.c1}1a; padding: 3px 8px; border-radius: 999px; letter-spacing: 0.05em; font-weight: 700; }
  .top-stone p.why { font-size: 15px; color: var(--fg); margin: 0 0 10px; line-height: 1.65; }
  .top-stone .how-block { background: var(--bg-2); border-radius: 10px; padding: 12px 16px; margin-top: 10px; }
  .top-stone .how-block .how-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .top-stone .how-block p { font-size: 13px; color: var(--fg-dim); margin: 0; line-height: 1.55; }
  .supporting-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; border-left: 4px solid var(--c2); margin: 8px 0; }
  .supporting-card ul { margin: 0; padding-left: 18px; }
  .supporting-card li { font-size: 14px; color: var(--fg); margin-bottom: 8px; line-height: 1.55; }
  .supporting-card li:last-child { margin-bottom: 0; }
  .ctx-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px;
    border-left: 4px solid var(--c1); margin: 8px 0; }
  .ctx-card p { font-size: 14px; color: var(--fg); margin: 0; line-height: 1.55; }
  .care-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  @media (max-width: 600px) { .care-grid { grid-template-columns: 1fr; } h1 { font-size: 34px; } }
  .care-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 18px; }
  .care-card .care-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 6px; }
  .care-card p { font-size: 13px; color: var(--fg); margin: 0; line-height: 1.55; }
  .panel { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 20px 22px; margin: 8px 0; }
  .panel.shadow { border-left: 4px solid #d63d4d; }
  .panel.truth { border-left: 4px solid #5a6cb8; }
  .panel h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .panel ul { margin: 0; padding-left: 18px; }
  .panel li { font-size: 14px; color: var(--fg); margin-bottom: 6px; line-height: 1.55; }
  .panel li:last-child { margin-bottom: 0; }
  .panel.truth p { font-size: 15px; color: var(--fg); margin: 0; line-height: 1.65; }
  .pair-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 22px 0; }
  @media (max-width: 600px) { .pair-grid { grid-template-columns: 1fr; } }
  .pair-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 12px;
    padding: 14px 16px; font-size: 13px; color: var(--fg-dim); text-decoration: none;
    transition: border-color 0.15s; }
  .pair-card:hover { border-color: var(--c1); }
  .pair-card .pair-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); font-weight: 700; margin-bottom: 4px; }
  .pair-card .pair-name { font-size: 14px; font-weight: 600; color: var(--accent); margin-bottom: 4px; text-transform: capitalize; }
  .pair-card .pair-text { font-size: 12px; color: var(--fg-dim); line-height: 1.5; }
  .questions-card { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 20px 24px; margin: 14px 0; border-left: 4px solid #5a8ec6; }
  .questions-card h3 { font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 10px; font-weight: 700; }
  .questions-card ol { margin: 0; padding-left: 20px; }
  .questions-card li { font-size: 14px; color: var(--fg); margin-bottom: 8px; line-height: 1.55; }
  .questions-card li:last-child { margin-bottom: 0; }
  .reading-cta {
    background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%);
    color: var(--fg-on-accent); padding: 30px 32px; border-radius: 18px; margin: 32px 0;
    box-shadow: 0 8px 28px rgba(20,14,4,0.10);
  }
  .reading-cta h2 { margin: 0 0 8px; font-size: 24px; font-weight: 800; color: var(--fg-on-accent); }
  .reading-cta p { margin: 0 0 18px; opacity: 0.92; font-size: 15px; }
  .reading-cta .price { font-size: 38px; font-weight: 800; margin-right: 8px; }
  .reading-cta .price-note { opacity: 0.85; font-size: 13px; }
  .reading-cta a.btn {
    display: inline-block; background: #fffaf2; color: #1a1815;
    padding: 12px 26px; border-radius: 999px; font-weight: 700; text-decoration: none;
    font-size: 15px; transition: transform 0.05s;
  }
  .reading-cta a.btn:hover { transform: translateY(-1px); }
  .other-kits { margin: 36px 0 22px; }
  .other-kits h3 { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--fg-muted); margin: 0 0 12px; font-weight: 700; }
  .kits-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 700px) { .kits-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 460px) { .kits-grid { grid-template-columns: repeat(2, 1fr); } }
  .ph-mini {
    text-align: center; padding: 12px 8px; border-radius: 8px; text-decoration: none;
    background: var(--bg-1); border: 1px solid var(--line); color: var(--fg-dim);
    font-size: 11px; font-weight: 600; display: flex; flex-direction: column; gap: 4px; align-items: center;
  }
  .ph-mini:hover { border-color: var(--c1); }
  .ph-mini .sym { font-size: 22px; }
  .ph-mini .name { font-size: 11px; }
  .related-strip { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 18px 22px; margin: 18px 0; font-size: 14px; color: var(--fg-dim); text-transform: lowercase; }
  .related-strip a { color: var(--accent); text-decoration: none; font-weight: 600; }
  footer { margin-top: 44px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); text-decoration: none; }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/crystals-for">all 10 intents</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/crystals">per-sign crystals</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>

    <div class="brand-mark"><span class="dot"></span> gab44 ✦ crystals for ${escapeHtml(slug.replace(/-/g, ' '))}</div>
    <span class="realm-pill">${escapeHtml(k.realm)} kit</span>
    <h1><span class="sym">${k.emoji}</span>${escapeHtml(k.name)}</h1>
    <p class="sub">${escapeHtml(k.one_liner)}</p>

    <article class="core-card">
      <span class="label">why this kit</span>
      <p class="text">${escapeHtml(k.meaning)}</p>
    </article>

    <h2><span class="icon">💎</span>top 3 stones</h2>
    <div class="top-stone">
      <h3>${escapeHtml(k.top_three[0].name)} <span class="rank">primary</span></h3>
      <p class="why">${escapeHtml(k.top_three[0].why)}</p>
      <div class="how-block">
        <div class="how-label">how to use</div>
        <p>${escapeHtml(k.top_three[0].how_to_use)}</p>
      </div>
    </div>
    <div class="top-stone">
      <h3>${escapeHtml(k.top_three[1].name)} <span class="rank">companion</span></h3>
      <p class="why">${escapeHtml(k.top_three[1].why)}</p>
      <div class="how-block">
        <div class="how-label">how to use</div>
        <p>${escapeHtml(k.top_three[1].how_to_use)}</p>
      </div>
    </div>
    <div class="top-stone">
      <h3>${escapeHtml(k.top_three[2].name)} <span class="rank">grounding</span></h3>
      <p class="why">${escapeHtml(k.top_three[2].why)}</p>
      <div class="how-block">
        <div class="how-label">how to use</div>
        <p>${escapeHtml(k.top_three[2].how_to_use)}</p>
      </div>
    </div>

    <h2><span class="icon">🪨</span>5 supporting stones</h2>
    <div class="supporting-card">
      <ul>
        ${supportingHtml}
      </ul>
    </div>

    <h2><span class="icon">🤲</span>how to use them</h2>
    <div class="ctx-card">
      <p>${escapeHtml(k.how_to_use)}</p>
    </div>

    <div class="care-grid">
      <div class="care-card">
        <div class="care-label">how to cleanse</div>
        <p>${escapeHtml(k.cleansing)}</p>
      </div>
      <div class="care-card">
        <div class="care-label">how to charge</div>
        <p>${escapeHtml(k.charging)}</p>
      </div>
    </div>

    <h2><span class="icon">⚠️</span>common mistakes</h2>
    <div class="panel shadow">
      <h3>watch for these</h3>
      <ul>
        <li>${escapeHtml(k.common_mistakes[0])}</li>
        <li>${escapeHtml(k.common_mistakes[1])}</li>
        <li>${escapeHtml(k.common_mistakes[2])}</li>
      </ul>
    </div>

    <h2><span class="icon">🔍</span>the deeper truth</h2>
    <div class="panel truth">
      <h3>what most teachers don't say</h3>
      <p>${escapeHtml(k.the_deeper_truth)}</p>
    </div>

    <h2><span class="icon">🪶</span>pair with</h2>
    <div class="pair-grid">
      <a class="pair-card" href="/gab44/chakras/${k.pair_with_chakra_slug}">
        <div class="pair-label">chakra</div>
        <div class="pair-name">${escapeHtml(k.pair_with_chakra_slug.replace('-', ' '))}</div>
        <div class="pair-text">${escapeHtml(k.pair_with_chakra)}</div>
      </a>
      <a class="pair-card" href="/healing/script/${k.pair_with_sound_slug}">
        <div class="pair-label">sound</div>
        <div class="pair-name">${escapeHtml(k.pair_with_sound_slug.replace(/-/g, ' '))}</div>
        <div class="pair-text">${escapeHtml(k.pair_with_sound)}</div>
      </a>
      <a class="pair-card" href="/gab44/${k.pair_with_signs[0]}/crystals">
        <div class="pair-label">zodiac</div>
        <div class="pair-name">${escapeHtml(k.pair_with_signs.join(', '))}</div>
        <div class="pair-text">Signs that benefit most from this intent</div>
      </a>
    </div>
    <div class="related-strip">
      Per-sign kits: ${signLinksHtml}.
    </div>

    <h2><span class="icon">🔮</span>questions to sit with</h2>
    <div class="questions-card">
      <h3>before / during / after working with the stones</h3>
      <ol>
        <li>${escapeHtml(k.key_questions[0])}</li>
        <li>${escapeHtml(k.key_questions[1])}</li>
        <li>${escapeHtml(k.key_questions[2])}</li>
      </ol>
    </div>

    <section class="reading-cta">
      <h2>✉️ A reading that names which stone is actually for *you*</h2>
      <p>The kits above are general. A <strong>personal reading</strong> looks at *your* chart, *your* current season, and the specific energetic block ${k.realm === 'calm' ? 'softening' : k.realm === 'love' ? 'opening the heart' : k.realm === 'abundance' ? 'unlocking abundance' : 'protecting'} — and tells you the exact 1-2 stones to work with for the next 30 days. Delivered by email within 48 hours.</p>
      <div style="margin-bottom:16px"><span class="price">$9</span><span class="price-note">· one reading · pay-after-you-read if it didn\'t land</span></div>
      <a class="btn" href="${readingHref}">Request your reading →</a>
    </section>

    <section class="other-kits">
      <h3>other intent kits</h3>
      <div class="kits-grid">
        ${otherKitsHtml}
      </div>
    </section>

    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · written warm, written human · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}

export function crystalIntentIndexHTML(): string {
  const cards = CRYSTAL_INTENT_KITS.map((k) => {
    const accent = REALM_ACCENT[k.realm] || { c1: '#888', c2: '#444' }
    return `<a href="/gab44/crystals-for/${k.slug}" class="card" style="--c1:${accent.c1};--c2:${accent.c2}">
      <div class="head">
        <span class="sym">${k.emoji}</span>
        <span class="day">${escapeHtml(k.realm)}</span>
      </div>
      <div class="name">${escapeHtml(k.name)}</div>
      <div class="primary">primary stone: <strong>${escapeHtml(k.top_three[0].name)}</strong></div>
      <div class="teaser">${escapeHtml(k.one_liner)}</div>
    </a>`
  }).join('\n      ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Crystals by Intent — For Anxiety, Love, Money, Sleep, Protection &amp; More · gab44 ✨</title>
<meta name="description" content="The 10 most-searched crystal intents explained: crystals for anxiety, sleep, love, money, protection, confidence, grief, clarity, healing, manifestation. Top 3 stones, how to use them, common mistakes, the deeper truth — hand-written, warm." />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${SITE_URL}/gab44/crystals-for" />
<meta property="og:title" content="Crystals by Intent — 10 Kits Explained · gab44" />
<meta property="og:description" content="Anxiety, sleep, love, money, protection, confidence, grief, clarity, healing, manifestation. Hand-written, warm, honest about what works." />
<meta property="og:type" content="website" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9C%A8%3C/text%3E%3C/svg%3E" />
<style>
  :root {${PALETTE}}
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg-0); color: var(--fg); line-height: 1.55; min-height: 100vh; }
  .wrap { max-width: 980px; margin: 0 auto; padding: 48px 22px 96px; }
  .nav { font-size: 13px; margin-bottom: 24px; display: flex; gap: 18px; flex-wrap: wrap; }
  .nav a { color: var(--accent); text-decoration: none; font-weight: 500; }
  h1 { font-size: 42px; line-height: 1.05; margin: 8px 0 12px; letter-spacing: -0.02em; font-weight: 800; }
  h1 .accent { color: var(--accent); }
  .sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 28px; max-width: 720px; }
  .intro {
    background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px;
    padding: 22px 26px; margin: 0 0 28px; font-size: 15px; color: var(--fg-dim);
  }
  .intro h3 { margin: 0 0 8px; color: var(--fg); font-size: 15px;
    letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; }
  .intro p { margin: 0 0 10px; }
  .intro p:last-child { margin: 0; }
  .intro strong { color: var(--fg); }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--bg-1); border: 1px solid var(--line); padding: 22px 24px; border-radius: 14px;
    text-decoration: none; color: var(--fg); transition: border-color 0.15s, transform 0.05s; display: block;
    position: relative; overflow: hidden; }
  .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--c1), var(--c2)); }
  .card:hover { border-color: var(--c1); transform: translateY(-1px); }
  .card .head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px;
    justify-content: space-between; }
  .card .sym { font-size: 38px; }
  .card .day { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--fg-muted);
    letter-spacing: 0.05em; text-transform: uppercase; }
  .card .name { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  .card .primary { font-size: 12px; color: var(--fg-muted); margin-bottom: 8px; letter-spacing: 0.02em; }
  .card .primary strong { color: var(--c1); }
  .card .teaser { font-size: 14px; color: var(--fg-dim); line-height: 1.5; font-style: italic; }
  .reading-strip { background: var(--accent); color: var(--fg-on-accent); padding: 26px 28px;
    border-radius: 16px; margin: 32px 0 0; text-align: center; }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px; font-weight: 700; color: var(--fg-on-accent); }
  .reading-strip a { color: #fffaf2; font-weight: 700; text-decoration: underline; }
  footer { margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--line);
    color: var(--fg-muted); font-size: 13px; }
  footer a { color: var(--fg-dim); }
</style>
</head>
<body>
  <main class="wrap">
    <nav class="nav">
      <a href="/gab44">← gab44</a>
      <a href="/gab44/chakras">chakras</a>
      <a href="/gab44/crystals">per-sign crystals</a>
      <a href="/healing">healing audio</a>
      <a href="/gab44/reading">$9 reading</a>
    </nav>
    <h1>10 <span class="accent">crystal kits by intent</span> — what works, why, how to use them.</h1>
    <p class="sub">Anxiety, sleep, love, money, protection, confidence, grief, clarity, healing, manifestation. Top 3 stones for each, supporting stones, how to cleanse and charge, common mistakes, and the deeper truth.</p>

    <div class="intro">
      <h3>How to read this page</h3>
      <p><strong>The kits are sorted by intent realm</strong>, not by popularity. <em>Calm</em> kits (anxiety, sleep, grief, healing) work the parasympathetic nervous system. <em>Love</em> kits (love, confidence) work the heart and the solar plexus. <em>Abundance</em> kits (money, manifestation) work the will and reception. <em>Protection</em> kits (protection, clarity) work the discernment layer. Pick the realm that matches what your life is actually asking of you right now.</p>
      <p><strong>Distinct from per-sign crystals.</strong> If you want stones based on your zodiac sign, see <a href="/gab44/crystals">/gab44/crystals</a>. The kits below are based on what you are *trying to do or feel*, not what sign you were born under. Many people use both — a per-sign anchor and an intent kit for the current season.</p>
      <p><strong>Crystals don\'t replace medicine, therapy, or honest action.</strong> They are companions to the inner work, not shortcuts past it. Used consistently — held daily, cleansed weekly, paired with the actual practices that move a life — they become reliable, embodied anchors. Used as magic, they disappoint.</p>
    </div>

    <div class="grid">
      ${cards}
    </div>
    <div class="reading-strip">
      <h2>Not sure which kit is for you? A $9 reading names the exact 1-2 stones for your specific season.</h2>
      <p style="margin:0;font-size:14px;opacity:0.92">Most people need only 2 stones at a time, matched to what their chart and current season are actually asking for. <a href="/gab44/reading?ref=intent-index">Request yours →</a></p>
    </div>
    <footer>
      <p>by <a href="https://nchobah.com">Naoufal Chobah</a> · <a href="/gab44">gab44</a></p>
    </footer>
  </main>
</body>
</html>`
}
