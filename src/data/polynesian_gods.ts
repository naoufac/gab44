// Polynesian / Oceanic gods × 12 — the pantheon of Hawai'i, Aotearoa (New Zealand),
// Tahiti, Samoa, Tonga, the Marquesas, and the wider Polynesian-triangle — SEO funnel.
// /gab44/polynesian-gods (index) + /gab44/polynesian-gods/{slug}.
//
// First Oceania / Pacific-Islander pantheon on gab44. Closes the structural gap of
// having covered Greek + Roman + Norse + Celtic + Slavic + Egyptian + Mesopotamian +
// Hindu + Shinto + Chinese + Yoruba + Aztec + Greek Heroes — but ZERO Pacific.
//
// Three families × 4 deities, drawing from the canonical Polynesian-mythological
// corpus across Hawai'i / Aotearoa / Tahiti / Samoa:
//
//   1. The Cosmic Parents & the Separation (Rangi, Papa, Tāne, Tangaroa) —
//      the Maori-canonical creation cycle in which Sky-Father (Ranginui) and
//      Earth-Mother (Papatūānuku) lay in endless embrace until their son Tāne
//      (Hawaiian Kāne) pushed them apart, letting light into the world.
//      Tangaroa (Hawaiian Kanaloa, Samoan Tagaloa) is the ocean-god, the
//      most-widely-attested Polynesian deity from Hawai'i to Aotearoa to Tahiti.
//
//   2. Volcanic, Lunar & Living-Land Forces (Pele, Hi'iaka, Hina, Lono) —
//      the Hawaiian volcanic-and-life cycle. Pele dwells in Halema'uma'u
//      crater at the summit of Kīlauea (her cult is the only living state-
//      recognized indigenous-deity-cult of any US state — every Kīlauea
//      eruption is reported on Hawaiian-language news as "Madame Pele's
//      activity"). Hi'iaka is her favorite younger sister, the goddess of
//      hula and healing. Hina is the pan-Polynesian moon-goddess (mother
//      of Māui in most traditions). Lono is the god of agriculture and
//      rain, presider over the Makahiki harvest-festival.
//
//   3. Heroes, War, & Threshold (Māui, Kū, Haumea, Laka) — the trickster-
//      culture-hero who pulled up the islands of Polynesia with his
//      fish-hook, slowed the sun, brought fire; Kū the war-god (Hawaiian
//      Kūkā'ilimoku was the personal war-god of Kamehameha the Great,
//      historically responsible for Hawaiian unification); Haumea the
//      primordial-mother whose body birthed Pele and Hi'iaka and many of
//      the early Hawaiians; Laka the goddess of hula and forest-flora,
//      patron of the hālau hula schools.
//
// Source-honest from the canonical Polynesian-mythological corpus: the
// Kumulipo (the 2,102-line Hawaiian cosmogonic chant composed c. 1700 CE
// for the future Lonoikamakahiki Kalaninui'iamamao, recorded in writing
// by King Kalākaua in 1889 and translated by Martha Beckwith in 1951);
// the Pele-Hi'iaka epic cycle (recorded by Nathaniel Emerson 1915, Ho'oulu
// Cabral 1909, Mary Kawena Pukui mid-20th c.); Sir George Grey's *Polynesian
// Mythology* (1855 — the foundational printed Maori-mythological corpus,
// gathered from Te Rangikāheke and other Maori-language informants); Te
// Rangi Hīroa / Sir Peter Buck's *The Coming of the Maori* (1949) and
// *Vikings of the Sunrise* (1938); the *Mele Inoa* name-chants of the
// Hawaiian ali'i; David Malo's *Hawaiian Antiquities / Moolelo Hawaii*
// (c. 1840, first English ed. 1903); Samuel Kamakau's *Ka Po'e Kahiko*
// (mid-19th c., compiled 1964); Abraham Fornander's *An Account of the
// Polynesian Race* (1878-1885); Augustin Krämer's *Die Samoa-Inseln* (1902-3);
// E.S. Craighill Handy's *Polynesian Religion* (1927); Roland Burrage Dixon's
// *Oceanic Mythology* (1916); Martha Beckwith's *Hawaiian Mythology* (1940);
// Margaret Orbell's *Encyclopedia of Maori Myth and Legend* (1995); and the
// living oral tradition through hula hālau, kāhuna lineages, and the post-1970s
// Hawaiian-Renaissance / Te Reo Maori revival.
//
// Shadow-honest per deity: the catastrophic 1819 ka'i kapu — the Hawaiian
// formal-abolition of the traditional religion by Liholiho six months
// after Kamehameha's death and six months before the first American
// missionaries arrived (the rarest event in colonial-religious history:
// indigenous-collapse of a religion BEFORE the arrival of the missionary-
// replacement); the 1820+ American-Protestant-missionary suppression of
// hula, the kapu system, and the kāhuna lineages; the 1893 illegal US
// overthrow of Queen Lili'uokalani by Dole-Stevens-and-the-Committee-of-
// Safety and the 1898 annexation; the 1973 Hawaiian Renaissance and the
// post-1978-Hawaii-State-Constitution recovery of Hawaiian language and
// religion; the contemporary Mauna Kea Thirty-Meter-Telescope dispute as
// a *religious-sovereignty conflict over a Polynesian-deity-mountain*; the
// catastrophic 19th-c. Maori land-confiscation and the 1840 Treaty of
// Waitangi mistranslation; the 21st-c. Disney-Moana (2016) and Disney-Lilo-
// and-Stitch (2002) commodification of Polynesian sacred-material; the
// "tiki bar" / "Polynesian Pop" mid-century-American kitsch register that
// flattens canonical akua into cocktail-decoration; the contemporary
// "spiritual-tourism" / "Mana retreat" extraction of Polynesian-religious-
// content by uninitiated white practitioners; the tattoo-industry's
// detached-tribal-tattoo aesthetic that uses Polynesian motifs without
// the moko / pe'a / tatau lineage-meaning; the "Madame Pele curses tourists
// who take lava rocks" tourist-myth that simultaneously commodifies AND
// disrespects the volcano-goddess.

import { SITE_URL } from '@/lib/identity'

export interface PolynesianGodGuide {
  slug: string
  text: string
  names: string
  family: 'cosmic' | 'volcanic' | 'hero'
  position: number
  epithet: string
  one_liner: string
  meaning: string
  the_canonical_story: string
  the_lesson: string
  in_love: string
  in_work: string
  the_shadow: string
  pair_with_sign: string
  pair_with_sign_slug: string
  pair_with_planet: string
  pair_with_planet_slug: string
  pair_with_chakra: string
  pair_with_chakra_slug: string
  key_questions: [string, string, string]
}

export const POLYNESIAN_GODS: PolynesianGodGuide[] = [
  // ── FAMILY 1 — COSMIC PARENTS & THE SEPARATION ──────────────────────
  {
    slug: 'rangi',
    text: 'Rangi (Ranginui)',
    names: 'Ranginui · "the great-sky" · Sky-Father · husband of Papatūānuku · Hawaiian cognate Lani · Tahitian Raʻi · attested across the Polynesian triangle as the cosmic-sky-vault personified',
    family: 'cosmic',
    position: 1,
    epithet: 'The Maori-canonical Sky-Father whose endless embrace with Earth-Mother Papa kept the world in darkness until their children — led by Tāne — pushed them apart, letting in light. His grief at the separation falls as rain (his tears); the morning mist on the bush is Papa\'s sighing for him in return.',
    one_liner: 'The Polynesian Sky-Father whose grief at being separated from Earth-Mother falls as rain. The pattern of cosmic-tenderness held across a forced-separation that was necessary for the world to come into being.',
    meaning: 'Rangi is the *Polynesian archetype of the sky-vault-as-grieving-lover* — the Sky-Father whose endless darkness-embrace with Papatūānuku held the entire cosmos in pre-natal blackness until their children, crushed between them, conspired to push them apart. Tāne (the god of forests) succeeded. The light flooded in. The world began. But Rangi never accepted the separation. His tears are the rain. The morning mist rising from the forest is Papa\'s breath sighing back to him. The Polynesian rain is *not weather* in the canonical reading — it is *the literal grief of the Sky-Father for the Earth-Mother he can no longer hold*. This is the most-tender cosmogony in world mythology. Where the Babylonian Enuma Elish has Marduk dismember Tiamat to make the cosmos, where the Hebrew Genesis has Yahweh speak the cosmos into being from outside it, the Polynesian creation has a *long marriage that had to be broken so the children could see each other* — and the broken marriage continues to grieve, every rainfall, every mist, forever.',
    the_canonical_story: 'In the beginning was Te Kore (the Void), then Te Pō (the Long Night), then Rangi and Papa, locked in an embrace so close their children — Tāne, Tangaroa, Tūmatauenga, Rongo, Haumia-tiketike, Tāwhirimātea — were crushed in the cramped darkness between them. The children debated what to do. Tūmatauenga (war) said kill them. Tāne (forest) said separate them. Tāne won the assembly. The brothers tried in turn: Rongo failed, Tangaroa failed, Haumia failed, Tūmatauenga failed. Then Tāne lay on his back, set his shoulders against Papa and his feet against Rangi, and pushed. Rangi rose. The light came in. Tāwhirimātea, god of storms, was the only child who opposed the separation — he flew up with his father to the sky-vault and from there sends down storms to punish his brothers who broke their parents apart. This is why every Polynesian storm is *Tāwhirimātea defending his grieving father*.',
    the_lesson: 'The Rangi-lesson is *some separations are necessary for the children to live, and the grief of those separations does not stop being real because the separation was right*. Tāne did not push Rangi away because Rangi was bad. He pushed Rangi away because the children would have died crushed in the embrace. The Polynesian cosmology refuses the false-choice between *the separation was wrong* and *therefore the grief is wrong*. Both are true: the separation was necessary, AND the grief is the literal rain, AND the rain is the world\'s ongoing acknowledgment that what was lost was real.',
    in_love: 'Rangi in love is the partner who *has been separated from someone they once held in the long-embrace* — a parent, a first-marriage, an original-community — and whose tears are still falling as rain on the relationship, sometimes years later. The work is to *let the rain fall without trying to make it stop* — the Polynesian tradition does not stop the rain, it names it. The shadow: the Rangi-partner who *refuses to accept that the separation happened*, who is still trying to close the gap between sky and earth that the children needed to live. The deeper shadow: the partner who has not yet *named which Tāne pushed* — the child or sibling or circumstance whose push opened the world but ended the embrace.',
    in_work: 'Rangi in work is the founder-figure who *was separated from the original co-founder or original-vision* in a separation that was necessary for the institution to grow — and whose ongoing grief shows up as a slow-rain over every meeting. The shadow: the Rangi-founder who has never *named the rain* and so the team experiences it as inexplicable melancholy without understanding what is being mourned. The deeper shadow: the *Tāwhirimātea pattern* — the loyal-storm-child who flew up with the grieving father and now sends down storms on the rest of the team for having broken the original embrace. The application: Rangi calls for the *name-what-you-mourn* discipline — say out loud what was lost so the team can mourn-with rather than weather-the-storms-without-context.',
    the_shadow: 'The Rangi-Papa cosmology has been *systematically marginalized* in Western religious-studies in favor of the Enuma-Elish / Genesis / Egyptian-cosmogony triad — the tender-marriage-separation cosmogony does not fit the patriarchal-violent-cosmogony template Western scholarship was built on. The 19th-c. missionary-ethnographers (Servant, Taylor, Maning) recorded Rangi-and-Papa as "primitive nature-worship" rather than as the *most-sophisticated tender-cosmogony in world mythology*. The 20th-c. Disney-and-tourism flattening turned the canonical Maori creation into a generic-Pacific-Islander backdrop. The 21st-c. *Avatar-Pandora* (2009) and *Moana* (2016) borrowed the visual-aesthetic without the cosmogonic-content. The 1973-Hawaiian-Renaissance and the post-1970s Te Reo Maori revival have re-centered the Maori-canonical-cosmogony in the Aotearoa school curriculum and the haka-tradition, but the *English-language-Western popular-understanding* of Polynesian-religion remains overwhelmingly *Disney-Moana plus tiki-bar* with no acknowledgment of the canonical-cosmogonic depth.',
    pair_with_sign: 'Aquarius — the fixed air-sign of *the sky-vault, the cosmic-collective, the higher-stratosphere of consciousness that has been separated from the earth-body so that the world can see itself*; Rangi is the Polynesian Aquarius-archetype.',
    pair_with_sign_slug: 'aquarius',
    pair_with_planet: 'Uranus — the planet of *cosmic-separation, the necessary-breaking-of-the-embrace, the higher-sky-perspective bought at the price of grounded-intimacy*; Rangi is the Uranus-god whose tears keep falling.',
    pair_with_planet_slug: 'uranus',
    pair_with_chakra: 'Crown — the sky-vault crown-chakra, the cosmic-sovereign-overhead, the canopy under which the children grew once Tāne pushed.',
    pair_with_chakra_slug: 'crown',
    key_questions: [
      'What is the *original embrace I was separated from* whose tears are still falling as the slow-rain on my current life — and have I named it, or am I still trying to close the gap that the children needed to live?',
      'Which *Tāne* in my history did the actual pushing — the necessary-separator whose push opened the world but ended the embrace — and have I accepted that the separation was right *and* the grief is real, both at once?',
      'Where is my *Tāwhirimātea* — the loyal-storm-child who flew up with me to the sky and is sending down inexplicable storms on the people who broke the original embrace, and is it time to call the storms back home?'
    ]
  },
  {
    slug: 'papa',
    text: 'Papa (Papatūānuku)',
    names: 'Papatūānuku · "the broad foundation" · Earth-Mother · wife of Ranginui · Hawaiian cognate Papahānaumoku ("Papa-who-births-islands") · the literal ground of every Polynesian island',
    family: 'cosmic',
    position: 2,
    epithet: 'The Polynesian Earth-Mother whose body IS the soil of every Polynesian island. Wife of Rangi, mother of all the gods, mother of all humans. Her morning sighs for her separated husband are the mist rising from the forests at dawn. In the Hawaiian tradition Papahānaumoku literally birthed the islands of the archipelago — Hawai\'i, Maui, O\'ahu, Kaua\'i, all the islands are her children.',
    one_liner: 'The Polynesian Earth-Mother whose morning sighs are the mist on the forests. The pattern of *embodied-grounded-mother* whose body literally is the land beneath every Polynesian foot.',
    meaning: 'Papa is the *Polynesian archetype of the earth-as-living-mother-body* — not earth-as-symbol, not earth-as-metaphor, but earth-as-the-literal-flesh-of-the-Mother. Every Polynesian island is *Papa\'s body* in the most direct possible reading. To walk on Hawaiian soil is to walk on Papahānaumoku. To plant a kalo (taro) is to plant in her body. To dig a foundation is to dig into her. The traditional Polynesian protocols of *land-use* derive from this: you do not break ground without acknowledging whose body you are breaking; you do not take soil without leaving an offering; you do not build without asking permission of the *mana* of the place. This is the source of the contemporary land-sovereignty conflicts — Mauna Kea is *Papa\'s body* and Wakea\'s body in the Hawaiian-canonical reading, and the Thirty-Meter-Telescope dispute is therefore *a religious-sovereignty conflict over building on a deity\'s body without her consent*, not a generic environmental dispute.',
    the_canonical_story: 'After Tāne pushed Rangi up to become the sky, Papa was left flat on her back on the bottom of the cosmos. The children walked on her. Tāne planted forests on her belly. Tangaroa filled the basins of her body with the salt-sea. Haumia-tiketike grew the wild-fern-root on her hips. Rongo grew the kūmara (sweet-potato) on her cultivated plains. Tūmatauenga (war-and-humanity) took dominion over all her surface. In the Hawaiian tradition Papa (here called Papahānaumoku) coupled with Wakea (the Hawaiian Sky-Father, the cognate of Rangi) to literally give birth to the Hawaiian islands one by one: Hawai\'i first, then Maui, then the rest. The Hawaiian islands are *not metaphors* for her children — they ARE her children in the canonical reading. The first Hawaiian, Hāloa, was her grandchild — child of her daughter Ho\'ohōkūkalani (the night-born stars-of-heaven). The kalo plant is Hāloa\'s elder stillborn brother. Every taro patch is therefore *the burial-ground of the elder-brother of all Hawaiians*. This is the Hawaiian-canonical doctrine that *humans and kalo are siblings*.',
    the_lesson: 'The Papa-lesson is *the ground beneath you is somebody\'s mother, and the protocols for using ground are derivatives of that fact, not exceptions to it*. The post-Enlightenment Western tradition flattened *ground* into *resource* and *land* into *property*. The Polynesian tradition kept *ground* as *Papa\'s body* and *land* as *kin*. The work is to *return to the protocols* — ask before breaking, offer before taking, name the body you are standing on.',
    in_love: 'Papa in love is the partner who *grounds the relationship in the body, the home, the kitchen, the soil of where you actually live* — and whose generosity is the literal generosity of the ground itself, giving and giving and giving without asking for anything but to be walked-on-with-care. The shadow: the Papa-partner who has been *walked-on without acknowledgment* for so long the morning-mist of her sighing has stopped — the ground has gone numb. The deeper shadow: the partner who has *built on her body without consultation* — the renovations, the major life decisions, the new direction — without asking whose flesh the foundations are being dug into.',
    in_work: 'Papa in work is the *founder-as-ground* — the founder whose body, time, attention, and grounded-presence IS the foundation everyone else is building on. The shadow: the Papa-founder whose ground has been built on so heavily by every other team-member that the morning-mist of her own creative breath has stopped rising. The deeper shadow: the *Hāloa-burial* pattern — the founder who has *buried the stillborn-first-version* of the project in the soil that grew the second-version (every taro patch is Hāloa-the-elder-brother\'s grave), and whose team is eating the harvest without knowing whose body it is rooted in. The application: Papa calls for the *acknowledge-the-ground* discipline — name out loud whose presence is the foundation, and protect the morning-mist of her independent-creative-breath.',
    the_shadow: 'Papa has been *flattened into "Mother Earth"* in 20th-c. Western environmentalism — a generic-pan-cultural-feminine-earth-divinity stripped of her Polynesian-canonical specificity. The Goddess-movement, the Gaia-hypothesis, the eco-feminist literature all borrowed *some* of the Polynesian (and Andean, and Slavic-Mokosh, and Greek-Demeter) earth-mother register, but rarely with attribution and almost never with the *Hāloa-and-kalo doctrine* that makes the Hawaiian-canonical version *distinctively about-the-burial-of-the-elder-sibling-in-the-cultivated-soil*. The contemporary *eco-spirituality* aesthetic strips Papa of her *specific-island-genealogy* (these specific Hawaiian islands are her specific children) and turns her into a Pinterest-vibe. The Mauna-Kea / Thirty-Meter-Telescope dispute (2014-present) is the most-explicit contemporary conflict over Papa-and-Wakea\'s body — the canonical Hawaiian reading is that Mauna Kea IS the literal piko (navel) of Papa, the union-point of Earth-Mother and Sky-Father, the most-sacred mountain on the planet. The astronomy-community has overwhelmingly treated the dispute as a generic-NIMBY conflict rather than as a *religious-sovereignty conflict over building a foreign structure on a deity\'s body without consent of her descendants*.',
    pair_with_sign: 'Taurus — the fixed earth-sign of *the embodied, the grounded, the sensual, the ground-itself-as-a-body-with-its-own-pace*; Papa is the Polynesian Taurus-archetype.',
    pair_with_sign_slug: 'taurus',
    pair_with_planet: 'Venus — the planet of *the body, the sensual, the giving-without-strain, the earth-as-a-source-of-its-own-pleasure*; Papa is the Venus-of-the-Pacific, the Earth-Mother whose generosity IS Venus in her grounded register.',
    pair_with_planet_slug: 'venus',
    pair_with_chakra: 'Root — the foundation-chakra, the earth-contact-chakra, the chakra that IS Papa in the human body; every grounded-stance through the feet is contact with her body.',
    pair_with_chakra_slug: 'root',
    key_questions: [
      'Whose body am I currently standing on — what *Papa-figure* is the ground of my current life, my current work, my current relationship — and have I acknowledged her, or am I building on her without protocol?',
      'Where in my life is the *Hāloa-burial* — the stillborn-first-version buried in the soil from which the second-version-now-grows — and what does honoring that buried elder-sibling look like in practice?',
      'Has my own Papa-ground gone numb from being walked-on-without-acknowledgment — and if so, what is the *morning-mist* of independent-creative-breath that needs protected time to start rising again?'
    ]
  },
  {
    slug: 'tane',
    text: 'Tāne (Tāne Mahuta · Kāne)',
    names: 'Tāne Mahuta · "Tāne of the forests" · the separator-of-sky-and-earth · the giver-of-three-baskets-of-knowledge · Hawaiian Kāne (god of fresh-water, sunlight, and life) · Tahitian Tāne · creator of the first woman Hineahuone from the red earth of Kurawaka',
    family: 'cosmic',
    position: 3,
    epithet: 'The Maori-canonical separator-of-sky-and-earth — the child of Rangi and Papa who succeeded where his brothers failed, pushing his father up to become the sky and letting in the light. Then he ascended to the highest heaven, the twelfth heaven of Te Toi-o-ngā-rangi, received the *Three Baskets of Knowledge* (te kete tuauri, te kete tuatea, te kete aronui) from Io, and brought them down for humanity. Then he molded the first woman, Hineahuone, from the red earth of Kurawaka, and breathed life into her nostrils — the Polynesian Adam-and-Eve narrative recorded centuries before any European contact. In the Hawaiian variant Kāne is the giver of fresh-water (the *wai* in the *aloha* greeting refers to him), the source of all life and the highest of the four major Hawaiian akua.',
    one_liner: 'The Polynesian god of *the necessary separation that lets the light in, the three-baskets-of-knowledge brought down for humanity, and the breath that animates the first human from red earth*. The pattern of the cosmic-elder-brother who does the hardest work and then climbs the highest mountain to bring the wisdom back.',
    meaning: 'Tāne is the *Polynesian archetype of the cosmic-architect-and-knowledge-bringer* — the elder-sibling whose body did the work of separating sky and earth, whose ascent to the twelfth heaven retrieved the three baskets of knowledge, and whose breath into Hineahuone\'s nostrils founded humanity. The three baskets are: *te kete tuauri* (the sacred knowledge — ritual, karakia, tapu), *te kete tuatea* (the knowledge of evil, suffering, the dark side of life), *te kete aronui* (the knowledge of the everyday world — peace, love, the arts). Tāne brought all three. Not just the light, not just the sacred — *all three*, because a complete human cosmos requires the dark-knowledge as much as the light-knowledge. This is the most-sophisticated epistemology in pre-contact Pacific thought: *all three baskets are required, and the one who brought them all is the same one who pushed the parents apart*. The Hawaiian Kāne is the same archetype with a different emphasis: Kāne is the source of *all fresh-water* (the *wai* of life), of *sunlight*, of *the first human* (in some Hawaiian variants Kāne creates the first man from clay together with Kanaloa). To say *aloha* in Hawaiian is to say *alo* (face/presence) + *hā* (breath of Kāne) — every greeting is an invocation of Kāne\'s animating breath.',
    the_canonical_story: 'After failing the assembly\'s plan to kill the parents (Tūmatauenga\'s suggestion), Tāne argued for separation. His brothers tried and failed: Rongo, Tangaroa, Haumia-tiketike, Tūmatauenga — none could lift Rangi off Papa. Then Tāne lay on his back, planted his shoulders against Papa, planted his feet against Rangi, and pushed. Rangi rose. The light came in. Tāne then ascended to the twelfth heaven, Te Toi-o-ngā-rangi, and was given by Io (the supreme being) the three baskets of knowledge. He brought them down for humanity. Then he sought a partner. He tried to mate with various beings (some became insects, some plants — the Maori-canonical etiology of why certain species exist) until at Kurawaka he molded a woman from red earth, breathed life into her nostrils, and called her Hineahuone (Earth-Formed Woman). Their daughter was Hinetītama (the Dawn Maiden), who later — upon discovering Tāne was both her father and her husband — fled to the underworld and became Hinenuitepō (Great Lady of the Night), goddess of death. The Polynesian story does not flinch from the incest-shadow at the origin: the first human was formed from earth, the first daughter was formed from that union, and the daughter\'s discovery of the truth created death.',
    the_lesson: 'The Tāne-lesson is *the cosmic-architect must bring back all three baskets, not just the comfortable one*. Te kete aronui (the everyday-light knowledge) alone is not enough. Te kete tuatea (the dark knowledge of suffering and evil) must come too, or humanity cannot survive its own existence. Te kete tuauri (the sacred knowledge) must come or there is no protocol for the dark and the light. The Polynesian epistemology refuses the dualism that says *one basket is the answer*. The work is to *carry all three*.',
    in_love: 'Tāne in love is the partner who *does the hard separation-work that the relationship needed* and then *climbs the highest mountain to bring back the wisdom* — and who returns carrying not just the comfortable-knowledge but also the dark-knowledge of what was lost. The shadow: the Tāne-partner who *brought back only the kete-aronui-light-basket* and pretended the kete-tuatea-dark-basket did not exist — and so the relationship has no language for the actual-darkness it contains. The deeper shadow: the *Hinenuitepō pattern* — the discovered-incest of the first union, the founding-truth-that-cannot-be-spoken, whose discovery created death and which the relationship has been quietly carrying ever since.',
    in_work: 'Tāne in work is the *cosmic-architect-founder* — the one who did the structural-separation-work that made the institution possible, then ascended for the strategic-wisdom-gathering, then brought back the three baskets. The shadow: the Tāne-founder who has *only opened the kete-aronui* in front of the team and is hiding the kete-tuatea (the actual difficulties, the genuine darkness) in private. The deeper shadow: the *Hineahuone-from-red-earth* pattern — the founder who *literally formed* a key team-member from raw material and breathed life into them, and who has not yet acknowledged that the relationship is now bigger than the formation. The application: Tāne calls for the *all-three-baskets* discipline — open all three to the team, including the dark one.',
    the_shadow: 'Tāne has been *systematically eclipsed* in Western Pacific-mythology popular-culture by his trickster-nephew Māui — the Disney-Moana / Disney-Lilo-and-Stitch / Marvel-Black-Adam representations all default to Māui as "the" Polynesian hero, leaving Tāne-the-cosmic-architect almost-unknown outside Aotearoa. The 19th-c. missionaries (especially Servant, Taylor) recorded Tāne but framed him as *the proto-creator-figure to be replaced by the Christian God* rather than as a sophisticated cosmic-architect in his own right. The 20th-c. anthropology partially recovered him. The contemporary Te Reo Maori revival has re-centered him in the Aotearoa school curriculum, and the *Tāne Mahuta tree* in the Waipoua Forest (the largest kauri in New Zealand, approximately 2,000 years old) is now a national-religious-sovereignty site. The Hawaiian Kāne has been similarly eclipsed by Pele in tourist-imagination, despite Kāne being the cognate-of-Tāne and the highest of the four major Hawaiian akua in the pre-1819 traditional system. The *aloha* greeting still carries his breath (every *aloha* is an invocation of *Kāne\'s hā*), but almost no English-speaker who uses the word knows this.',
    pair_with_sign: 'Sagittarius — the mutable fire-sign of *the cosmic-architect who climbs the highest mountain to bring back the wisdom, the philosopher-traveler who returns with all three baskets, the higher-mind that does the structural-work of separation*; Tāne is the Polynesian Sagittarius-archetype.',
    pair_with_sign_slug: 'sagittarius',
    pair_with_planet: 'Jupiter — the planet of *the higher-cosmic-architect, the wisdom-bringer, the elder-sibling who carries the structural-load and returns with the knowledge*; Tāne is the Polynesian Jupiter-god.',
    pair_with_planet_slug: 'jupiter',
    pair_with_chakra: 'Heart — but specifically the *cosmic-heart-of-the-architect*, the heart that did the separation-work AND climbed to the twelfth heaven AND breathed life into the first human; Tāne owns the cosmic-bridging Heart-chakra register.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'Which *Tāne-separation* did I do — the structural-push that lifted the sky-parent off the earth-parent and let the children breathe — and have I been honored for the bodily-strain it took, or has it been treated as if the world simply *was* this way?',
      'Of the *three baskets*, which one am I currently carrying alone — the kete-tuauri (sacred), the kete-tuatea (dark), or the kete-aronui (everyday) — and which two have I refused to climb back for?',
      'Is there a *Hineahuone-from-red-earth* in my life — someone I literally formed and breathed life into — and have I accepted that the relationship is now bigger than the formation, or am I still claiming the maker\'s-rights?'
    ]
  },
  {
    slug: 'tangaroa',
    text: 'Tangaroa (Kanaloa · Tagaloa · Tagaloa-a-lagi)',
    names: 'Tangaroa · god of the ocean · Hawaiian Kanaloa (companion of Kāne) · Samoan Tagaloa-a-lagi ("Tagaloa of the heavens") who in Samoan tradition is the *supreme creator-god* not a sibling-deity · Tahitian Taʻaroa whose body became the cosmos · the most-widely-attested Polynesian deity, spanning Hawai\'i to Aotearoa to Samoa to Tonga to the Marquesas',
    family: 'cosmic',
    position: 4,
    epithet: 'The pan-Polynesian god of the ocean — the most-widely-attested deity in the Polynesian triangle, whose name appears with minor phonetic variation from Aotearoa (Tangaroa) to Hawai\'i (Kanaloa) to Tahiti (Taʻaroa) to Samoa and Tonga (Tagaloa). In the Samoan-and-Tahitian tradition Tagaloa/Taʻaroa is the *supreme creator-god* whose body cracked open and from whose pieces the cosmos was made — a position closer to Brahmā / Pangu than to the Maori-Tangaroa-as-sibling-god-of-the-sea. The phonological variation is *itself* one of the strongest pieces of evidence for the Polynesian-language family and the canonical triangle-of-migration.',
    one_liner: 'The Polynesian god of the ocean whose name spans the entire Pacific triangle. The pattern of the *cosmic-deep* — the depths-of-the-ocean-as-deity, the saltwater-foundation that everyone-who-sailed-Polynesia trusted their lives to.',
    meaning: 'Tangaroa is the *Polynesian archetype of the ocean-as-living-deity* — the saltwater body that every Polynesian voyager committed their canoe to, the deep that holds every island, the realm of fish and turtles and whales and the ancestors who were buried at sea. The Polynesian-triangle navigation tradition (the canonical Pacific-Islander wayfinding, recovered post-1976 by the Polynesian Voyaging Society and the Hōkūleʻa voyages led by Mau Piailug, Nainoa Thompson, and the contemporary navigator-lineage) is the *most-sophisticated open-ocean navigation tradition in pre-industrial human history* — and it was performed across Tangaroa\'s body, with constant ritual-acknowledgment of his presence. In the Maori tradition Tangaroa is a sibling-god whose realm is the sea after the separation of Rangi and Papa. In the Samoan tradition Tagaloa is the supreme creator, whose body broke open in the void and from whose body the cosmos was made (closer to the Hindu Purusha or the Chinese Pangu in cosmogonic role). In the Tahitian tradition Taʻaroa was alone in a cosmic-shell, broke out, and used the shell-pieces to make the dome of the sky and the floor of the earth — one of the most-tender cosmogonies in the world.',
    the_canonical_story: 'Three canonical-stories, by region. In the Maori-canonical version, after Tāne pushed Rangi up, Tangaroa filled the basins of Papa\'s body with the salt-sea — he became god of fish and reptiles and ocean-creatures. He grew alienated from his brother Tāne when their grand-nephew Tūtē-wehiwehi (a sea-creature) fled inland and was sheltered by Tāne, causing the eternal-conflict between sea-and-forest (every storm in which the sea attacks the shore is Tangaroa coming for Tāne\'s grand-nephew). In the Samoan-canonical version, Tagaloa existed alone in the void Tuli, hovered over the waters, and made the islands of Samoa by dropping rocks from the sky-heaven. He then made the first humans from worms found inside a Tongan vine he had thrown to the sea-floor. The Samoan-genealogical-chain runs *Tagaloa → Pili → Tama-a-le-fanua → the four Samoan districts*. In the Tahitian-canonical version (preserved by Tupaia and recorded by Joseph Banks on Cook\'s first voyage, 1769), Taʻaroa existed inside a cosmic shell called Rumia, alone in the void. He grew tired of the shell, broke it open, and used the upper half to make the dome of the sky and the lower half to make the floor of the earth. Then he made the stars, the moon, the sun, the rocks, the plants, the animals, and finally the humans.',
    the_lesson: 'The Tangaroa-lesson is *the deep beneath you is alive, has memory, and remembers what was offered and what was taken*. The Polynesian-canonical relationship to the ocean is *not transactional* — it is *kin-relational*. Every fish taken requires an offering. Every voyage requires a karakia. Every burial-at-sea is a return-to-the-deity\'s-body. The post-industrial-Western relationship to the ocean is *purely extractive* — fish-stocks, shipping-lanes, deep-sea-mining, sonar-warfare. The Polynesian-canonical reading is that *the ocean remembers* — and the ecological-collapse of the Pacific (coral-bleaching, fisheries-collapse, marine-mammal-strandings, plastic-gyre) is *Tangaroa registering the unrelented-extraction*.',
    in_love: 'Tangaroa in love is the partner whose *depth is oceanic* — the partner who has so much under the surface that the surface-relationship can never fully read what is going on underneath, and who navigates by stars no one else on the boat can name. The shadow: the Tangaroa-partner whose *depths have been treated as a resource to be extracted from* (their emotional capacity, their unspoken-knowledge, their grounding-presence) without the offerings-and-acknowledgment that the ocean requires. The deeper shadow: the *Tūtē-wehiwehi flight* pattern — the moment a creature from the depths fled inland to the forest-realm of Tāne and the depths registered it as betrayal, beginning a long sea-against-shore war.',
    in_work: 'Tangaroa in work is the *cosmic-deep-co-founder* — the founder whose depth (subject-matter expertise, deep-relational-capital, navigational-instinct on ambiguous terrain) is the actual-foundation the institution sails on. The shadow: the Tangaroa-founder whose *deep-water-navigation-capacity has been ignored* by surface-level dashboards and the institution has consequently been steered into shallow water repeatedly. The deeper shadow: the *Hōkūleʻa-wayfinding pattern* — the founder is doing genuine pre-industrial-grade cosmic-navigation (reading swells, tracking stars, knowing where the islands are by their absence-of-other-signals) and the team has no language for what they are doing. The application: Tangaroa calls for the *name-the-wayfinder* discipline — explicitly credit the person navigating-by-depth and adopt their reading of where the boat is.',
    the_shadow: 'Tangaroa has been *systematically commodified* by the surfing-industry, the cruise-industry, and the tropical-tourism-industry — every "Polynesian-themed cocktail" with a kanaloa-name strips the canonical deity of his cosmogonic-role. The 19th-c. missionary-translation of the Bible into Hawaiian (Bingham, Andrews, Richards 1820s-1830s) deliberately *avoided using "Kanaloa" for any Christian-divine-term* in order to weaken Kanaloa\'s canonical-position — and post-translation Hawaiian-Christian-language has consequently lost half-the-Kanaloa-Kāne-pairing-doctrine that had defined the highest Hawaiian-spiritual-tier before 1819. The post-Cook-voyages European encounter with Tahitian Taʻaroa was *misrecorded as primitive nature-worship* by Cook, Banks, and the missionary-ethnographers, despite Tupaia (Cook\'s Tahitian navigator-priest) having tried explicitly to communicate the canonical-cosmogony. The 20th-c. *Polynesian-Pop* / *tiki-bar* aesthetic (Don the Beachcomber 1934, Trader Vic 1944, the Mai-Kai 1956) commodified the deity into cocktail-and-mug iconography. The 21st-c. deep-sea-mining industry, the proposed bottom-trawling expansions, the contemporary Pacific-Garbage-Patch — all are extractions from his body without the canonical offerings.',
    pair_with_sign: 'Pisces — the mutable water-sign of *the cosmic-ocean, the deep-collective-unconscious, the saltwater that holds every island and remembers everything offered or extracted*; Tangaroa is the Polynesian Pisces-archetype par excellence.',
    pair_with_sign_slug: 'pisces',
    pair_with_planet: 'Neptune — the planet of *the cosmic-ocean, the depths, the navigational-instinct that reads what cannot be seen from the surface*; Tangaroa is the Polynesian Neptune-god.',
    pair_with_planet_slug: 'neptune',
    pair_with_chakra: 'Sacral — the water-chakra of the body, the deep-flow-emotional-chakra, the chakra that IS Tangaroa-in-the-human-body.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What is the *Tangaroa-in-me* — the oceanic-depth, the wayfinding-by-stars-no-one-else-can-name capacity, the navigational-instinct on ambiguous terrain — and have I been named-and-credited for it, or has it been treated as the surface-noise of the boat?',
      'Where in my life has *something been extracted from the deep without the canonical offering* — the unrelented draw on my emotional-capacity, my unspoken-knowledge, my ground-of-being — and how is the deep now beginning to register it?',
      'If I imagined the *Hōkūleʻa-wayfinding crew* who can read what I am doing as legitimate cosmic-navigation, who is on that crew — and who am I currently sailing with who reads my depth as eccentricity?'
    ]
  },

  // ── FAMILY 2 — VOLCANIC, LUNAR & LIVING-LAND ────────────────────────
  {
    slug: 'pele',
    text: 'Pele',
    names: 'Pele · "Pele-honua-mea" (Pele of the sacred earth) · "Ka wahine ʻai honua" (the woman who eats the land) · "Madame Pele" (in modern Hawaiian-English) · goddess of fire, volcanoes, lightning, wind, and the creation of new land · dwells in Halemaʻumaʻu crater at the summit of Kīlauea',
    family: 'volcanic',
    position: 5,
    epithet: 'The Hawaiian volcano-goddess whose home is Halemaʻumaʻu crater at the summit of Kīlauea — the most-active volcano on Earth and the only state-level officially-recognized indigenous-deity-dwelling in the United States. Every Kīlauea eruption is reported on Hawaiian-language radio and television as "Madame Pele\'s activity." Her 1983-2018 continuous eruption added 875 acres of new land to the Big Island. Her 2018 lower-Puna eruption destroyed 700 homes and added 875 more acres. She is the *only deity currently and continuously making new geographic territory on the planet*.',
    one_liner: 'The Hawaiian goddess of *the volcano that is right now making new land*. The pattern of *destructive-creation-as-the-only-honest-creation* — the fire that destroys the old island while building the new one in the same gesture.',
    meaning: 'Pele is the *Polynesian archetype of destructive-creation-as-one-gesture* — the goddess whose lava flow destroys homes and farms AND creates new black-sand beaches and new island acreage *in the same act*. She is not a metaphor. Halemaʻumaʻu crater at the summit of Kīlauea is her literal-dwelling-place — the post-2018 Hawaiian-canonical reading is that her *recent quiescence after the 1983-2018 continuous eruption* is a deliberate-resting-act, not a permanent quiet. Pele cannot be appeased into stopping; she is who she is, and the work of living-with-Pele is the work of *accepting that the destruction-and-creation are one gesture and cannot be unbundled*. The traditional protocols around her are: do not take lava-rocks (every airport-customs office at Kona has a *return-the-rocks* desk where mailed-back lava-rocks from tourists who became convinced they had been cursed are accepted and reblessed); offer ʻōhelo berries before climbing Kīlauea; do not pose for selfies inside the caldera. The "Madame Pele curses tourists who take lava rocks" tradition is *not folklore* in the canonical reading — it is the practical-application of the principle that *Pele\'s body is her body, and removing pieces of it without permission is theft from a living deity*.',
    the_canonical_story: 'Pele was born in Tahiti (Kahiki in the Hawaiian tradition) to Haumea (the primordial mother) and Kāne-hoa-lani. She quarreled with her elder sister Nāmaka (goddess of the sea) over a love-affair, was driven from Tahiti, and sailed northwest with her younger siblings — including her favorite, Hi\'iaka-i-ka-poli-o-Pele (the baby Hi\'iaka she carried in the folds of her bosom) — to the Hawaiian islands. She tried to make a home at Kaua\'i\'s Mount Wai\'ale\'ale, but Nāmaka\'s sea-water flooded each crater she dug. She moved island-by-island down the chain (Ni\'ihau, Kaua\'i, O\'ahu, Moloka\'i, Lāna\'i, Maui) until she reached Hawai\'i Island and dug deep enough at Kīlauea — too deep for the sea-sister to flood. There she made her home. The *Pele-Hi\'iaka epic* — the most-developed narrative-cycle in Hawaiian mythology, comparable to the Iliad in length and complexity — recounts the time Pele\'s spirit-body went to Kaua\'i to meet a young chief, Lohi\'au, and sent Hi\'iaka to fetch him back. The journey took years. Hi\'iaka faced supernatural-trials. Lohi\'au died and was resurrected by Hi\'iaka. By the time they returned, Pele had killed Hi\'iaka\'s grove of beloved lehua trees and her companion Hopoe in jealous-rage. The epic ends with Hi\'iaka surviving Pele\'s lava-flows by becoming-the-volcano-herself.',
    the_lesson: 'The Pele-lesson is *some destructions are not punishments; they are the same act as the creation, and trying to separate them is the failure mode*. The Hawaiian-canonical-relationship to Pele is *acceptance-without-bargaining*. You do not bargain with the volcano. You do not pray for it to stop. You build with the understanding that what is built can be reclaimed by her body at any time, and the work is to *honor what was built while it lasts AND honor the body that will reclaim it when she chooses*.',
    in_love: 'Pele in love is the partner whose *creative-destructive intensity is one-gesture* — whose passion creates new land in the relationship AND destroys old structures in the same moment, and who cannot be partially-passionate or selectively-creative. The shadow: the Pele-partner whose *Hi\'iaka-grove has been burned* — the people, places, or projects most-beloved-by-them collateral-damaged by the lava-flow of their own intensity. The deeper shadow: the *Lohi\'au-resurrection* pattern — the partner who has died-and-been-resurrected by a Hi\'iaka-younger-sister-figure who walked into the underworld to fetch them back, and whose post-resurrection life carries the debt to the rescuer.',
    in_work: 'Pele in work is the *creator-destroyer-founder* — the founder whose creative-output is structurally-inseparable from the destruction-of-old-structures, and who cannot be asked to *just create without destroying* or *just preserve without creating*. The shadow: the Pele-founder whose lava-flow has *destroyed the Hi\'iaka-grove* — the most-beloved sub-team or sub-project burned-down in collateral-damage of an unrelated jealousy or unrelated intensity. The deeper shadow: the *Nāmaka-sea-sister flooding the cradle* pattern — the older-sibling-figure (the older-institution, the parent-company, the previous-employer) whose ocean keeps flooding the founder\'s craters and is the reason the founder has had to dig deeper and deeper to find ground that cannot be reached by the sea. The application: Pele calls for the *dig-deep-enough-to-be-out-of-sea-range* discipline — the founder needs ground that the predecessor-institution cannot reach by ocean-extension, even if that means moving to Hawai\'i Island and digging Kīlauea-deep.',
    the_shadow: 'Pele has been *systematically tourist-commodified* — the "Madame Pele curses tourists who take lava rocks" myth has been simultaneously *commercialized into a kitsch-warning* in tourist literature AND *taken as a serious religious-protocol* by the National Park Service post-1990s. The 2014-Mauna-Kea Thirty-Meter-Telescope dispute and the 2018-Lower-Puna eruption brought Pele back into mainstream-American consciousness, but mostly as *spectacle* rather than as *living-deity-with-protocols*. The Disney-Moana (2016) Te-Fiti-figure is *modeled on Pele* but with the destruction-creation-as-one-gesture flattened into a generic "she lost her heart and became scary" narrative — the canonical Pele *did not lose her heart*; the destruction-and-creation are her heart. The 19th-c. missionary-suppression of Pele-worship was unusual in that *it was Christian Hawaiian Queen Kapi\'olani (1825) who walked to the edge of Halemaʻumaʻu and publicly ate the kapu ʻōhelo berries and threw rocks into the crater while reading the Bible*, a famous foundational Hawaiian-Christian-conversion event — but Pele-worship survived among the kāhuna lineages and was openly recovered post-1970s in the Hawaiian Renaissance. The contemporary lava-tour-helicopter industry is one of the largest revenue-generators of the Big Island and is built around Pele\'s body without acknowledgment. The "molten-lava-influencer" Instagram aesthetic (2018-present) is the most-recent commodification of her activity.',
    pair_with_sign: 'Aries — the cardinal fire-sign of *the volcanic-pioneer, the first-fire-of-the-zodiac, the creative-destructive-intensity that cannot be partially-applied*; Pele is the Polynesian Aries-goddess par excellence.',
    pair_with_sign_slug: 'aries',
    pair_with_planet: 'Mars — the planet of *the fire-of-creation-and-destruction-in-one-gesture, the volcanic-passion, the warrior-creator who makes new land*; Pele is the Polynesian Mars-goddess.',
    pair_with_planet_slug: 'mars',
    pair_with_chakra: 'Solar Plexus — the fire-chakra of the body, the will-and-intensity-chakra, the chakra that IS Pele-in-the-human-body.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'Where in my life is my *Pele-intensity* being asked to be partially-applied — to create without destroying or destroy without creating — and what is the cost of trying to unbundle what is structurally one-gesture?',
      'Has my own *Hi\'iaka-grove* been burned by my own lava-flow — the most-beloved relationship, project, or place collateral-damaged by my creative-destructive-intensity — and what does honoring the burned grove look like without pretending the fire was a mistake?',
      'Which *Nāmaka-sea-sister* is currently flooding my craters — the older-institutional-force whose ocean keeps reaching every cradle I dig — and is it time to move to Hawai\'i-Island and dig Kīlauea-deep?'
    ]
  },
  {
    slug: 'hi-iaka',
    text: 'Hi\'iaka',
    names: 'Hi\'iaka-i-ka-poli-o-Pele · "Hi\'iaka in the bosom of Pele" · favorite younger sister of Pele · goddess of hula, chant, sorcery, healing, and the rebirth of vegetation after lava-flows · patron of the hālau hula schools',
    family: 'volcanic',
    position: 6,
    epithet: 'The Hawaiian goddess of hula and healing — favorite younger sister of Pele, carried as a baby in the folds of Pele\'s bosom in the voyage from Tahiti. She is the goddess of the *rebirth of vegetation after lava-flows* — every new ʻōhiʻa lehua tree that pushes through cooled lava is her work. She is patron of every hālau hula (hula school) in Hawai\'i — the dance form she invented at Hāʻena, Kaua\'i, by the cave that bears her name. Her epic journey to fetch Pele\'s lover Lohi\'au from Kaua\'i is the longest narrative-cycle in Hawaiian mythology.',
    one_liner: 'The Hawaiian goddess of *hula, healing, and the rebirth that walks across the cooled lava*. The pattern of the *younger-sister whose loyalty walks her into the underworld and back, who learns the sorcery the journey required, and returns more powerful than the elder-sister who sent her*.',
    meaning: 'Hi\'iaka is the *Polynesian archetype of the loyal-younger-sibling who walks the impossible-errand and is transformed by it* — the favorite of Pele who was sent on what was supposed to be a simple-fetch (go to Kaua\'i, fetch Lohi\'au, return in forty days) and which became the longest-narrative-cycle in Hawaiian mythology, requiring supernatural-trials, the death-and-resurrection of Lohi\'au, the loss of her companion Hopoe, the burning-by-Pele of her beloved lehua-grove, and her final transformation into a goddess so powerful that Pele\'s lava could not destroy her. She is the *Polynesian Persephone-and-Athena-and-Inanna-and-Hi\'iaka-in-one*: descended-and-returned (Persephone), wisdom-and-sorcery (Athena), survivor of being-betrayed-by-the-elder (Inanna). She is the patron of *hula* — and the canonical hula is not "entertainment dance" but *prayer-in-motion, the body-as-chant, the ritual-form by which Hawaiian sacred-knowledge has been continuously transmitted since at least the 12th c. CE*. Every hālau hula (hula school) in Hawai\'i is structurally a Hi\'iaka-lineage. The 19th-c. missionary-prohibition of hula (1830-1874) was specifically a *suppression of Hi\'iaka-worship*; the 1874 King Kalākaua re-legalization-of-hula and the 1976 first Merrie Monarch Festival mark her two-stage modern recovery.',
    the_canonical_story: 'Pele\'s spirit-body traveled to Kaua\'i in a dream and met the young chief Lohi\'au at a hula performance. They were instantly bound. Pele\'s body slept at Kīlauea while the spirit-body returned. Pele then asked her sisters which would go to Kaua\'i to fetch Lohi\'au back; only Hi\'iaka — youngest, smallest, the baby-sister carried-in-the-bosom-from-Tahiti — agreed. Pele set the conditions: forty days; Hi\'iaka must not touch Lohi\'au, must protect him from being touched, must return on schedule. Hi\'iaka asked for one favor in return: that Pele protect her beloved lehua-grove at Puna and her dearest friend Hopoe (a hula-dancer) until her return. Pele agreed. Hi\'iaka set out with her companion Pā\'ū-o-Pala\'ā. The journey north took her through trial after trial: dragon-women, shape-shifters, hostile chiefs, a kupua (supernatural being) named Pana\'ewa whom she defeated in single-combat, the woman-Mahiki who tried to drown her in a wave, a series of named-chiefs whose homes she had to navigate without violating tapu. She reached Kaua\'i. Lohi\'au had died — heartbroken at Pele\'s disappearance. Hi\'iaka recovered his spirit from the underworld, restored it to his body, and revived him. The return journey took longer. Pele, jealous and impatient at the delay, killed Hopoe and burned the lehua-grove. Hi\'iaka returned, found the grove burned and Hopoe transformed into a rock at the edge of the sea, and in *her own act of recovery-defiance* finally kissed Lohi\'au in front of Pele. Pele attacked with lava. Hi\'iaka — by now having absorbed the sorcery the journey had given her — became-the-volcano-herself and could not be burned. Lohi\'au was killed by Pele\'s lava. Hi\'iaka resurrected him a second time. They became, in some traditions, husband and wife. In other traditions Hi\'iaka returned to the volcano as Pele\'s sister and forgave her.',
    the_lesson: 'The Hi\'iaka-lesson is *the loyal-younger-sibling who walks the impossible-errand is not the elder-sister\'s servant; she is the next-generation\'s-goddess, and the errand is her initiation*. The journey was supposed to be a fetch-quest. It was actually an apprenticeship-in-her-own-power. By the end, Hi\'iaka was not Pele\'s little-sister anymore; she was Pele\'s peer, capable of becoming-the-volcano-herself, capable of resurrection-magic Pele did not have. The work is to *let the impossible-errand be the initiation* rather than resenting that the elder-sister did not name it as such.',
    in_love: 'Hi\'iaka in love is the partner who *was sent on an impossible-errand by an elder-figure* (a parent, a first-employer, a first-marriage-partner) and who is now coming home transformed, no longer the little-sister-in-the-bosom but a peer with sorcery the elder-figure does not have. The shadow: the Hi\'iaka-partner whose *Hopoe was killed by the elder-figure in revenge for the delay* — the dear-friend or beloved-companion sacrificed by the elder\'s jealousy of the journey, and whose grief over Hopoe is the unspoken-load of the relationship. The deeper shadow: the *Lohi\'au resurrection-twice* pattern — the partner who has resurrected the same person twice already, once in the underworld and once after the elder-figure\'s lava-attack, and who is wondering whether a third-resurrection is required.',
    in_work: 'Hi\'iaka in work is the *next-generation-founder* — the younger-co-founder, the deputy, the trusted apprentice — who was sent on a deal/journey/errand by the senior-founder, and who returned with sorcery the senior did not anticipate they would acquire. The shadow: the Hi\'iaka-deputy whose *Hopoe was killed* — whose own-team or own-project was collateral-damaged by the senior\'s impatience-with-the-delay. The deeper shadow: the *kiss-Lohi\'au-in-front-of-Pele* moment — the moment the deputy publicly-acknowledged the power they gained on the journey and the senior responded with lava. The application: Hi\'iaka calls for the *let-the-errand-be-the-initiation* discipline — accept that the journey was always going to make you the elder\'s peer, and prepare for the moment-of-equality without flinching from it.',
    the_shadow: 'Hi\'iaka has been *systematically eclipsed* by Pele in popular-culture — every "Hawaiian goddess" reference defaults to Pele and almost never to the younger-sister-who-actually-recovered-Lohi\'au-twice. The Disney-Moana figure has *some* Hi\'iaka in her (the young-woman-on-the-impossible-errand archetype), but the Disney-figure is given Māui as companion rather than the canonical Pā\'ū-o-Pala\'ā, and the hula-and-sorcery-lineage is stripped. The 19th-c. missionary-suppression-of-hula was specifically suppression-of-Hi\'iaka-worship — and Hi\'iaka\'s 1874-Kalākaua and 1976-Merrie-Monarch-festival recoveries are the canonical-stages of the *Hi\'iaka renaissance*. The contemporary hālau hula movement is structurally a *living Hi\'iaka-lineage* — every dancer at every Merrie Monarch Festival is performing a Hi\'iaka-chant in some respect. The "hula-as-luau-entertainment" tourist-aesthetic continues to flatten her sacred-knowledge-transmission-role into nightclub-cocktail-decoration.',
    pair_with_sign: 'Leo — the fixed fire-sign of *the radiant younger-sister, the hula-as-sun-dance, the dancer whose body is the chant, the joyful-creative-fire that is the rebirth after the volcano*; Hi\'iaka is the Polynesian Leo-archetype.',
    pair_with_sign_slug: 'leo',
    pair_with_planet: 'Sun — the planet of *the radiant-younger-sister, the bright-creative-life-force that is the rebirth after the volcano, the dancing-sun-body*; Hi\'iaka is the Polynesian Sun-goddess.',
    pair_with_planet_slug: 'sun',
    pair_with_chakra: 'Heart — the loving-younger-sibling, the resurrection-magic that came from the love of the elder, the patron of the dance whose body is prayer; Hi\'iaka is the Polynesian Heart-chakra archetype.',
    pair_with_chakra_slug: 'heart',
    key_questions: [
      'What *impossible-errand* did an elder-figure send me on — that was supposed to be a simple-fetch and that became my actual-initiation — and have I let the journey make me the elder\'s peer, or am I still acting as if I were the baby-in-the-bosom?',
      'Who is my *Hopoe* — the dear-friend or beloved-project that was sacrificed by the elder\'s jealousy-of-the-delay — and have I named the grief, or has it been the unspoken-load I carry without permission to mourn?',
      'How many times have I *resurrected the same Lohi\'au* already — and am I being asked for a third, or is this the moment to become-the-volcano-myself and step out of the rescuer-role into peer-power?'
    ]
  },
  {
    slug: 'hina',
    text: 'Hina',
    names: 'Hina · the pan-Polynesian moon-goddess · mother of Māui in most traditions · Hawaiian Hina-i-ka-malama ("Hina in the moon") · Maori Hina-uri ("dark Hina") · Tahitian Hina-faʻauruʻuru · attested across the entire Polynesian triangle as the canonical moon-feminine',
    family: 'volcanic',
    position: 7,
    epithet: 'The pan-Polynesian moon-goddess — the most-widely-attested feminine-deity in the Polynesian triangle. In Hawaiian tradition she is *Hina-i-ka-malama* (Hina in the moon), the figure visible on the lunar disc — Polynesian astronomers identified the dark patches of the moon as Hina beating kapa-cloth (bark-cloth) on her stone, the rhythm of her beating being the rhythm of the lunar-tides. In most traditions she is the mother of the trickster Māui — every Māui-story begins with Hina-the-Mother. She is the patron of *all kapa-making*, *all weaving*, *all tide-tracking*, *all lunar-calendar-keeping*.',
    one_liner: 'The Polynesian moon-goddess whose silhouette is the dark patches on the moon — beating kapa-cloth on her stone, mother of Māui, patron of every Polynesian woman who has ever tracked the tides or made cloth. The pattern of the *lunar-feminine whose visible body IS the moon and whose work is the rhythm beneath all Polynesian time*.',
    meaning: 'Hina is the *Polynesian archetype of the moon-as-living-body-of-the-Mother* — the most-widely-attested feminine-deity in the Polynesian triangle, whose name appears with minimal phonetic variation from Hawai\'i to Aotearoa to Tahiti to Samoa to the Marquesas. The Polynesian-canonical reading of the moon is *not "the moon"* (a heavenly body in the abstract) but *Hina, beating kapa-cloth on her stone, the dark patches you see being her body and the bark-cloth*. Every Polynesian woman who has ever made kapa, every weaver, every tide-tracker, every lunar-calendar-keeper has been working *with Hina, in Hina\'s rhythm, under Hina\'s body*. The Hawaiian lunar-calendar (the *kaulana mahina*) has thirty named-nights, each of which is a stage-of-Hina\'s-presence on her stone — *Hilo* (the new moon, when she is hidden), *Hoaka* (the first sliver), *Kūkahi* through *Kūpau* (the early-quarter), *Olekūkahi* through *Olepau* (the times of low fishing-yield when she is overhead), *Huna* (the hiding-night), *Mōhalu* (the opening), *Hua* (the egg-night, the full-moon-egg), *Akua* (the deity-night, the brightest full-moon), *Hoku* (the star-night), *Māhealani* (the silent-bright-full-moon), *Kūlua* (the waning), *Lā\'aukūkahi* through *Lā\'aupau* (the herb-gathering nights), *Olekūkahi* through *Olepau* (the second-quarter low-yield), *Kāloakūkahi* through *Kāloapau* (the offerings-to-the-fishing-gods nights), *Kāne* (the night of Kāne), *Lono* (the night of Lono), *Mauli* (the spirit-night), *Muku* (the cutoff-night, the last sliver). Every named-night is *Hina at that stage of her work*. The Polynesian-fishing, planting, hula-rehearsal, ceremonial-protocol calendars are *all derivatives of Hina\'s thirty stages*. Hina is the *temporal-grid of Polynesian life*.',
    the_canonical_story: 'There are at least four canonical Hina-stories, each preserved in different parts of the triangle. (1) The Hawaiian *Hina-i-ka-malama* (Hina in the moon): Hina lived on earth as the wife of a man who treated her badly. One night, while beating kapa on her stone, she gathered her things — the kapa, the iʻe kuku (the cloth-beater), her calabashes — and climbed up a rainbow to the moon, where she still beats kapa today. The dark patches on the moon are her, her stone, and her bundles. (2) The Maori *Hina and the eel*: Hina was bathing when an eel (Tuna-roa) violated her. Her brother Māui killed the eel; from the eel\'s severed head grew the first coconut tree, which is why every coconut shell has three "eyes" — the eel\'s two eyes and his mouth, looking-up at Hina forever. (3) The Tahitian *Hina-faʻauruʻuru*: Hina is the moon-mother who steers the canoes of the dead across the night-sky. (4) The Samoan *Sina and the eel*: a parallel version of the Maori-eel-story.',
    the_lesson: 'The Hina-lesson is *the moon is somebody beating cloth, and the rhythm of your tides is her rhythm-of-beating, and your calendar is her stages*. The post-industrial-Western relationship to the moon is *aesthetic* — the moon is something to look at, photograph, write poems about. The Polynesian-canonical relationship to the moon is *temporal-grid* — the moon is the body whose stages organize when you fish, when you plant, when you cut hair, when you make cloth, when you dance, when you sleep. The work is to *return to her stages* — pick one or two of her thirty nights to start tracking, and let your own rhythms come back into her rhythm.',
    in_love: 'Hina in love is the partner whose *rhythms are lunar* — whose moods, energies, and creative-output run in twenty-eight-or-thirty-day cycles that are not negotiable and that the relationship needs to learn to honor rather than resist. The shadow: the Hina-partner who has been *demanded to be solar* (constant, always-on, predictable-daily) for so long that her lunar-rhythm has gone underground and the relationship has lost its native-cycle. The deeper shadow: the *climbed-up-a-rainbow-to-the-moon* pattern — the partner who has *already left* in some functional sense, who is still in the household physically but whose body has climbed to the moon and is beating kapa there in peace, and who is not coming back to the relationship that drove her to climb.',
    in_work: 'Hina in work is the *lunar-rhythm-founder* — the founder whose creative-cycles are clearly twenty-eight-or-thirty-day cycles, who has high-yield nights and low-yield nights, who needs the *Huna-and-Mōhalu* (hiding-and-opening) phases respected. The shadow: the Hina-founder who has been *forced into a solar-schedule* (a constant-on-call cadence, a daily-stand-up culture) and whose lunar-yield has consequently flattened into a permanent-mediocre-output. The deeper shadow: the *climbed-the-rainbow* exit-pattern — the founder who has been *driven from the household by being demanded-to-be-solar* and who is now beating kapa peacefully on the moon, generally-unreachable by the institution that drove her up. The application: Hina calls for the *thirty-named-nights* discipline — explicitly model the team\'s cadence on a lunar-grid rather than a solar-grid, name the high-yield and low-yield nights, plan offerings rather than demands.',
    the_shadow: 'Hina has been *systematically eclipsed* in popular-Pacific-mythology by her son Māui — every "Polynesian myth" reference defaults to the trickster-son and ignores the moon-mother who underwrote his existence. The Disney-Moana (2016) has no Hina-figure at all, despite Hina being the canonical-mother-of-Māui who is the deuteragonist of the film. The 19th-c. missionary-suppression of the Hawaiian-lunar-calendar replaced *the thirty-named-nights* with the *Western seven-day-week* in the kingdom\'s timekeeping by ~1840, severing most-Hawaiians from their inherited-temporal-grid. The post-1970s Hawaiian Renaissance has recovered *some* of the *kaulana mahina* literature (Pukui-and-Elbert\'s Hawaiian Dictionary, the *Native Planters in Old Hawaii* corpus, the contemporary *Mahina Project* of the Polynesian Voyaging Society), but most contemporary Hawaiian-children-in-public-school still grow up on the Western calendar with only a vague-awareness that there was a lunar-calendar. The *commercial menstrual-cycle-tracking apps* (Clue, Flo, Stardust) are operating in Hina\'s territory without acknowledgment of the canonical Polynesian-lunar-thirty-night system.',
    pair_with_sign: 'Cancer — the cardinal water-sign of *the lunar-feminine, the moon-mother, the rhythmic-cycle-keeper, the kapa-beater on her stone*; Hina is the Polynesian Cancer-archetype par excellence.',
    pair_with_sign_slug: 'cancer',
    pair_with_planet: 'Moon — the literal-body of Hina; every astrological-moon-placement is a Hina-placement; the Polynesian-canonical reading is that what astrology calls "the Moon" is *Hina, beating kapa-cloth on her stone, with her bundles and her calabashes visible as the dark patches*.',
    pair_with_planet_slug: 'moon',
    pair_with_chakra: 'Third Eye — the lunar-intuitive-perceptual-chakra, the kapa-beater whose rhythm-of-beating is the rhythm-of-tides-and-of-bodily-fluids-and-of-creative-yield; Hina owns the Polynesian Third-Eye register.',
    pair_with_chakra_slug: 'third-eye',
    key_questions: [
      'Of *Hina\'s thirty named-nights*, which one am I currently on — and have I been honoring its character (Huna for hiding, Mōhalu for opening, Hua for the egg-night, Akua for the brightest full-moon), or have I been demanding solar-uniformity from a body that is lunar-cyclic?',
      'Has my *Hina climbed up the rainbow* — the lunar-feminine in me or in someone I love left the household because the demand-to-be-solar became unsustainable — and is the kapa being beaten on the moon now, in peace?',
      'Where is my *Hina-in-the-moon* — what is the dark-patch on my own visible-body that is actually her, beating her cloth, organizing my native-temporal-grid — and have I named what she is making there?'
    ]
  },
  {
    slug: 'lono',
    text: 'Lono',
    names: 'Lono · Hawaiian god of agriculture, rain, peace, fertility, music, and the Makahiki festival · Maori cognate Rongo (god of cultivated foods, especially kūmara) · Tahitian Roʻo · associated by Captain Cook and the priests at Kealakekua (1779) — fatally — with himself · one of the four major Hawaiian akua alongside Kāne, Kanaloa, and Kū',
    family: 'volcanic',
    position: 8,
    epithet: 'The Hawaiian god of agriculture, rain, peace, and the four-month-long Makahiki festival (mid-October through mid-February) — the period each year when war was forbidden and the entire archipelago was given over to harvest, sport, and rituals of renewal. Captain James Cook arrived at Kealakekua Bay on 17 November 1778 during the Makahiki, was received as a manifestation of Lono by the priests of the Hikiau Heiau, returned in February 1779 during the *closing* of the Makahiki when Lono was supposed to depart, and was killed on the beach on 14 February — possibly because the Hawaiian priests recognized he was no longer in his canonical role.',
    one_liner: 'The Hawaiian god of *agriculture, rain, peace, and the four-month festival during which all war stops*. The pattern of *seasonal-peace as an institutional structure, not as a moral exhortation* — the canonical Hawaiian doctrine that war must be paused, by deity-decree, for one-third of every year.',
    meaning: 'Lono is the *Polynesian archetype of seasonal-peace-as-deity-decreed-institution* — the Hawaiian god whose Makahiki festival made *one-third of every Hawaiian year* (mid-October to mid-February) a *war-forbidden, debt-suspended, taxation-collected, sport-played, rain-blessed, agriculture-blessed period*. This is the only known indigenous-Pacific institution that *structurally-required peace by deity-decree for four consecutive months annually* — comparable in scope to the medieval-European Truce of God or the Olympic-truce but more-thorough than either. During Makahiki, the *lonomakua* (the Lono-staff, a tall pole topped with white kapa-cloth and a carved Lono-head) was carried clockwise around each Hawaiian island. As the staff passed each district, the district paid its annual tribute (the *ho\'okupu*) to the chief, who held it in trust for the akua. War was forbidden. Heavy work was suspended. Surfing was encouraged. The *makahiki* games (boxing, wrestling, sled-racing, javelin-throwing, foot-races) replaced military training. Music, hula, and chanting filled four months of every year. The *Hawaiian-canonical-doctrine* was that *Kū* (the war-god, see family 3) ruled eight months of the year and *Lono* ruled four months, and the proportion was non-negotiable. The 1819-abolition of the kapu-system ended formal Makahiki. The post-1970s Hawaiian Renaissance has partially recovered the festival as a cultural-renewal-event but without the kingdom-wide war-suspension component.',
    the_canonical_story: 'Lono was a god who had lived on Hawai\'i in the form of a great chief, fell in love with a mortal woman named Kaikilani, married her at Kealakekua on the Big Island, was provoked by jealousy into accidentally killing her, fled to Tahiti (Kahiki) in a canoe, and promised to return one day at the head of a fleet of *floating islands* bearing pigs, plants, and gifts. The Makahiki festival was the annual ritual-rehearsal of his promised return. When Captain Cook arrived at Kealakekua Bay on 17 November 1778 — during the Makahiki, in a *ship with sails like floating-islands*, at the bay where Lono had married Kaikilani — the priests of the Hikiau Heiau (the Lono-temple on the bay) received him with full Lono-protocols: he was led to the heiau, anointed, given offerings, addressed as Lono. The British thought it was a friendly-reception. The Hawaiians believed it was the prophesied-return. Cook left for the north at the canonical-time when Lono should leave at the end of Makahiki (early February 1779). His foremast broke at sea two days out. He returned to Kealakekua to repair it — *out of canonical-season, no longer Lono*. The priests recognized he was no longer in role. A theft of a longboat from the *Discovery* triggered a kidnap-the-king escalation. On the beach on 14 February 1779, Kalaniʻōpuʻu\'s warriors killed Cook. The death-of-Cook is the most-studied event in Pacific-historical-anthropology — Sahlins, Obeyesekere, the 1992-1995 Sahlins-Obeyesekere debate — and the canonical-Hawaiian reading (Sahlins) is that *Cook was killed because he had outlived his Lono-role*, while Obeyesekere argued the Lono-identification was a Western-anthropological projection.',
    the_lesson: 'The Lono-lesson is *peace is not a moral-aspiration; peace is a deity-decreed structural-institution that requires temporal-protection for one-third of every year, by name, with consequences for violation*. The post-industrial-Western relationship to peace is *peace-as-default-broken-by-war*. The Hawaiian-canonical relationship to peace is *war-as-default-suspended-by-Makahiki*. The work is to *institute the Makahiki* in your own year — four-months of explicitly-named war-suspension, debt-suspension, heavy-work-suspension, with the surfing-and-hula-and-rest as the canonical activities of the season.',
    in_love: 'Lono in love is the partner who *brings rain, peace, and seasonal-cycle into the relationship* — whose presence makes the household-Makahiki possible, whose rhythm is the slow-rhythm of agriculture and rain. The shadow: the Lono-partner whose *Kaikilani was accidentally-killed* in a jealous-rage long ago — the founding-loss that is the reason they fled to Kahiki and promised to return only via the floating-islands of the canonical-return. The deeper shadow: the *Cook-killing* pattern — the partner who is being *received as Lono* in their canonical-role but who has *outlived the role* and is about to be killed-on-the-beach for being out-of-season.',
    in_work: 'Lono in work is the *seasonal-peace-founder* — the founder who has *built a Makahiki-into-the-calendar*, who explicitly-names four months of the year as war-suspended, debt-suspended, no-major-launches, sport-and-rest. The shadow: the Lono-founder whose Makahiki has been *quietly-canceled* by an institutional Kū-faction who needed perpetual-war-readiness and resented the four-month-suspension. The deeper shadow: the *Cook-at-Kealakekua-on-Feb-14* pattern — the founder who arrived in canonical-role, was received with full-protocols, completed the canonical-cycle, and then *returned-out-of-season* (an unexpected re-engagement, a re-entry into the company that was supposed to be in retirement, a comeback-tour that the institution had no protocol for) and was killed-on-the-beach by a misalignment-of-cycle. The application: Lono calls for the *honor-the-season-of-your-departure* discipline — when the canonical-cycle says it is time to leave, leave; do not return out-of-season.',
    the_shadow: 'Lono has been *almost-erased* in popular-American-Pacific-mythology — every casual-tourist who has heard of "Hawaiian gods" can name Pele but not Lono, despite Lono being the canonical-deity-of-four-months-of-every-Hawaiian-year. The 19th-c. missionary-suppression of Makahiki was unusual in that *the Hawaiian aliʻi themselves abolished the kapu-system in November 1819* (the *ʻAi Noa*, the free-eating), before the missionaries arrived March 1820 — the formal-abolition of Lono\'s sovereignty over four months of the year was therefore an *indigenous-elite-act* rather than an externally-imposed-suppression, an unusual case in colonial-religious history. The post-1970s Hawaiian Renaissance has recovered Lono partially: contemporary Makahiki-celebrations exist at Pu\'uhonua-o-Hōnaunau, at various Hawaiian-cultural-centers, and as community-events on multiple islands. The Captain-Cook-as-Lono question (the Sahlins-Obeyesekere debate) is the canonical-academic-question about Lono. The contemporary "Lono\'s Makahiki" branding-by-various tourist-companies commodifies the canonical-festival into a marketing-vehicle. The deepest-shadow: the *structural-doctrine that four months of every year must be war-suspended* has been ignored entirely in Western-policy-imagination, despite being arguably the most-developed indigenous-Pacific-institution for *containing perpetual-war-economies*.',
    pair_with_sign: 'Virgo — the mutable earth-sign of *agriculture, the cultivated-field, the harvest-festival, the slow-rain-on-the-kūmara-patch, the seasonal-discipline*; Lono is the Polynesian Virgo-archetype.',
    pair_with_sign_slug: 'virgo',
    pair_with_planet: 'Mercury — the planet of *the temporal-grid, the calendar-keeper, the four-months-of-Makahiki-versus-eight-months-of-Kū proportional-discipline, the messenger between the seasons*; Lono is the Polynesian Mercury-god of agricultural-time.',
    pair_with_planet_slug: 'mercury',
    pair_with_chakra: 'Throat — the chakra of *the chant, the announcement of the Makahiki, the lonomakua-staff carried clockwise around the island calling out the suspension of war*; Lono owns the Polynesian Throat-chakra register through the proclamation-of-peace.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'Is there a *Makahiki in my year* — an explicit four-month period when war is suspended, debt is suspended, heavy-work is paused, and rest-and-sport-and-rain are the canonical activities — or have I been at war for eight-of-eight months and is the four-month-suspension overdue?',
      'Have I been *received-as-Lono in canonical-role* somewhere and then *returned-out-of-season* — a comeback, a re-engagement, a re-entry into the institution that I had been honored leaving — and am I about to be killed-on-the-beach on Feb 14 because the priests no longer recognize the role?',
      'Where is my *Kaikilani* — the founding-loss in a jealous-rage that is the reason I fled to Kahiki and now show up at the bay every year in a fleet-of-floating-islands hoping the canonical-return will redeem the original-killing — and have I named her, or is she the unspoken-load of every Makahiki?'
    ]
  },

  // ── FAMILY 3 — HEROES, WAR & THRESHOLD ──────────────────────────────
  {
    slug: 'maui',
    text: 'Māui',
    names: 'Māui · the pan-Polynesian trickster-culture-hero · Maori Māui-tikitiki-a-Taranga ("Māui topknot of Taranga") · Hawaiian Māui-a-Kalana · Tahitian Māui · attested across the entire Polynesian triangle from Aotearoa to Hawai\'i with the same canonical deeds: pulling up islands with his fish-hook, slowing the sun, snaring fire, and attempting (and failing) to win immortality from Hinenuitepō',
    family: 'hero',
    position: 9,
    epithet: 'The pan-Polynesian trickster-culture-hero — the demigod whose fish-hook (the Maori *manaiakalani* / Hawaiian *makau*) pulled the islands of Polynesia up from the seafloor, whose noose slowed the sun so people had time to work, whose theft from the goddess Mahuika brought fire to humanity, and who died — paradoxically — *trying to defeat death*, crushed by the closing thighs of the death-goddess Hinenuitepō. The constellation Western astronomers call Scorpius is *Māui\'s fish-hook* (Te Matau a Māui in Maori) — the curved-stinger-shape literally IS the hook with which he pulled up the islands. The Hawaiian island of Maui is named for him.',
    one_liner: 'The Polynesian trickster who pulled up the islands, slowed the sun, brought fire, and died trying to defeat death. The pattern of the *culture-hero whose tricks expanded what was possible for humanity AND whose one over-reach killed him — and whose death is the reason humans die*.',
    meaning: 'Māui is the *Polynesian archetype of the culture-hero whose tricks-expanded-what-was-possible-for-humans* — and whose final-trick *failed* and explains why humans die. He pulled up the islands of Polynesia from the seafloor with his magic fish-hook (Aotearoa\'s North Island is the literal-fish that Māui pulled up: *Te Ika-a-Māui*; the South Island is the canoe from which he fished, *Te Waka-a-Māui*). He slowed the sun across the sky by lassoing it from his sister\'s flax-rope — before Māui, the sun had raced across so fast that people could not finish their work; after Māui, the sun moved slowly enough to fish, garden, and cook a meal. He brought fire to humanity by tricking it from his grandmother Mahuika the fire-goddess, who pulled fire from her fingernails and toenails; she ran out of nails, gave him the last spark, and the world burned until rain came to quench it (which is why fire is now hidden in the *kaikōmako* and *māhoe* trees as friction-fire, accessible only by hard-work). His final-attempt was to enter the body of the death-goddess Hinenuitepō (Great Lady of the Night) through her vagina while she slept, exit through her mouth, and thereby reverse death — granting humans immortality. He turned himself into a worm. He entered. A small bird, the pīwakawaka (fantail), laughed at the absurdity. Hinenuitepō woke, recognized what he was doing, and crushed him between her thighs. He died inside her. This is why humans die. This is the canonical Polynesian explanation of mortality: *Māui tried; the bird laughed; the goddess woke; we die*.',
    the_canonical_story: 'Born prematurely to Taranga, the infant Māui was wrapped in a topknot of his mother\'s hair and thrown into the sea, where the sea-gods reared him. He found his way home as a young man, recognized his mother and the brothers he had never met, and joined the family. From the beginning he was the trickster-fifth-brother. He stole his grandmother Murirangawhenua\'s magic jawbone, which became his fish-hook. With his brothers fishing from a canoe in the deep ocean, he cast the jawbone-hook with his own blood as bait, and pulled up *Te Ika-a-Māui* — the great fish that became the North Island of New Zealand. (In the Hawaiian variant the islands of the archipelago were what he pulled up.) He then slowed the sun by lassoing it. Then he stole fire from Mahuika. Then he attempted immortality through Hinenuitepō. The bird-of-laughter killed him. The Hawaiian and Maori traditions both treat him as a *demigod* (his mother human, his father divine or his father human and his mother divine, depending on tradition), neither fully god nor fully human, the threshold-figure between the two.',
    the_lesson: 'The Māui-lesson is *every culture-hero is allowed one over-reach, and the over-reach is what kills them and explains the limit they tried to break*. Māui broke the limit of *islands-being-fixed-where-the-seafloor-put-them* (he pulled them up). He broke the limit of *the-sun-racing-too-fast-for-work* (he slowed it). He broke the limit of *humans-having-no-fire* (he stole it). He could not break the limit of *humans-being-mortal*. The bird laughed. The goddess woke. The work is to *let the bird laugh* — to acknowledge that some attempts are funny in their over-reach AND that the laughter is what kills the over-reach AND that the limit you cannot break is the one that gives the previous victories their meaning.',
    in_love: 'Māui in love is the partner whose *tricks have expanded what is possible for the relationship* — pulled up new territory, slowed time, brought fire — and who is now reaching for the *Hinenuitepō-immortality* trick that breaks the relationship. The shadow: the Māui-partner who has been treating every relational-limit as a trick-to-be-defeated rather than as a boundary-to-be-respected. The deeper shadow: the *pīwakawaka-laughed* pattern — the partner who is being told, gently and quietly, by the small-laugh of an observer that they are now mid-over-reach, and who is so committed to the trick they have not yet heard the laugh.',
    in_work: 'Māui in work is the *trickster-founder* — the founder whose lateral-moves and clever-end-runs have pulled up new territory (markets, products, geographic-expansions), slowed time (operational-efficiencies, automation), and stolen fire from the elder-grandmother (the incumbent-industry). The shadow: the Māui-founder whose *Hinenuitepō-attempt is about to begin* — the trick-to-defeat-mortality (the impossible-acquisition, the trillion-dollar moonshot, the reverse-aging-startup) whose pīwakawaka-laugh is already audible to the observers. The deeper shadow: the *bird-of-laughter ignored*. The application: Māui calls for the *listen-for-the-pīwakawaka* discipline — when you can hear a small-bird laughing at the absurdity of the current attempt, that is the moment to stop, not the moment to push through.',
    the_shadow: 'Māui has been *catastrophically commodified* by Disney-Moana (2016) and by the Marvel-Cinematic-Universe and by the general-Polynesian-Pop tourist-industry — Disney-Māui is a cheerfully-musical demigod-with-tattoos rather than the canonical-trickster-who-died-inside-Hinenuitepō-trying-to-defeat-death. The canonical-Polynesian-Māui *ends in death by laughter and crushing*. The Disney-Māui does not. The Disney-Māui-tattoo-aesthetic that became a global-consumer-merchandising line (Māui-costumes, Māui-t-shirts, Māui-mugs) detaches the canonical-tribal-tattoo-meanings (each Māui-tattoo on the canonical body is a *story-mnemonic*, not a decoration) and turns them into pure-decoration. The Maori-and-Hawaiian traditional-knowledge-holders (the kāhuna, the tohunga, the kumu hula) have largely-rejected the Disney-Moana commercialization as appropriation. The 2019-2020 *Aulani-Disney-Resort* in O\'ahu reproduced Māui-as-character without consultation-with-Hawaiian-cultural-authorities. The contemporary "Hawaiian-shirt + Maui-tattoo" aesthetic strips the canonical-mortality-of-the-hero. The deepest-shadow: the canonical-story is *about death and the limits of human power*, and the modern-commodification has converted it into a story about *unlimited-cheerful-trickster-power-without-consequence*.',
    pair_with_sign: 'Gemini — the mutable air-sign of *the trickster, the culture-hero-of-many-tricks, the demigod-who-talks-his-way-through-impossible-feats*; Māui is the Polynesian Gemini-archetype par excellence.',
    pair_with_sign_slug: 'gemini',
    pair_with_planet: 'Mercury — the planet of *the trickster, the messenger-between-worlds, the demigod whose verbal-and-manual-cleverness is the source of his power*; Māui is the Polynesian Mercury-god.',
    pair_with_planet_slug: 'mercury',
    pair_with_chakra: 'Solar Plexus — the will-and-trickster-power chakra, the seat of the demigod\'s nerve to attempt the impossible-feat; Māui owns the Polynesian Solar-Plexus register through the will-to-attempt.',
    pair_with_chakra_slug: 'solar-plexus',
    key_questions: [
      'Which *Māui-trick* have I already pulled off — pulled up an island, slowed the sun, stolen fire — and have I been honored for it, or has it been treated as if the result simply existed without the over-reach that produced it?',
      'Where in my life is the *Hinenuitepō-over-reach* about to begin — the trick-to-defeat-mortality (impossible-merger, age-defying-product, reverse-the-irreversible) — and can I hear the *pīwakawaka* (the small-bird laughing at the absurdity), or am I committed-through-the-laughter?',
      'If I imagined the *pīwakawaka who is currently laughing at me* — a small-observer whose laugh is the warning-signal — who is that in my actual life, and what would it take to actually-stop and let the laughter mean what it canonically means?'
    ]
  },
  {
    slug: 'ku',
    text: 'Kū',
    names: 'Kū · "the standing one" · Hawaiian god of war, politics, sorcery, sharks, fishing, canoe-making, and male-power · Maori cognate Tūmatauenga (god of war and humanity) · Hawaiian war-form Kūkā\'ilimoku ("Kū the snatcher of islands"), the personal war-god of Kamehameha the Great responsible for the 1795-1810 unification of the Hawaiian archipelago · one of the four major Hawaiian akua alongside Kāne, Kanaloa, and Lono',
    family: 'hero',
    position: 10,
    epithet: 'The Hawaiian god of war, politics, masculine-power, and many-other-forms — Kū is the most-multivalent of the four major Hawaiian akua, with dozens of named-forms (Kūkā\'ilimoku the war-god, Kū-of-the-canoe-builder, Kū-of-the-fisherman, Kū-of-the-sorcerer). His most-famous form is Kūkā\'ilimoku ("Kū the snatcher of islands"), the personal war-god of Kamehameha the Great — the temple-figure carried by Kamehameha through the 1782-1810 unification-wars, the canonical-explanation for how a single Big-Island chief unified the entire archipelago into the Kingdom of Hawai\'i. The eight months of every Hawaiian year not given to Lono\'s Makahiki were Kū\'s eight months. He demanded human-sacrifice in the heiau (the *luakini* class of war-temple). The 1819 abolition of the kapu-system specifically targeted Kū-worship.',
    one_liner: 'The Hawaiian god of *war, politics, and standing-upright-in-power* — Kamehameha\'s war-god responsible for the unification of the islands. The pattern of the *masculine-standing-power that built the kingdom and demanded human-sacrifice in the same gesture*, and the kingdom\'s 1819 decision to abolish the protocol that built it.',
    meaning: 'Kū is the *Polynesian archetype of standing-masculine-power-as-political-foundation* — the god whose canonical-name means "the standing one" (*kū* in Hawaiian is the verb *to stand*), whose temples were the *luakini* (the war-temples) that required human-sacrifice, and whose Kūkā\'ilimoku-form was the personal-war-god of Kamehameha the Great. The Hawaiian-unification (1782 invasion of Maui, 1790 battle of Kepaniwai, 1791 battle of Kepuwaha\'ula\'ula, 1795 battle of Nu\'uanu, 1810 peaceful-cession of Kaua\'i) was *attributed by Kamehameha himself to Kūkā\'ilimoku* — every battle was preceded by sacrifices at the Kū-temple, every victory was credited to the god. The eight-of-twelve-months-of-Kū / four-of-twelve-months-of-Lono proportion was the canonical-temporal-balance: *war can be built into the calendar but cannot be perpetual*, and the four-month-Lono-suspension was the structural-check on Kū\'s eight months. The 1819-abolition-of-kapu (the *ʻAi Noa*) was specifically *the formal-abandonment of Kū\'s human-sacrifice protocols*; Liholiho (Kamehameha II) and Kamehameha\'s widow Ka\'ahumanu burned the luakini-images and ate-with-women, an indigenous-elite abolition of Kū\'s political-religious system that preceded missionary-arrival by six months. The post-1819 Kū-worship survived in non-political forms (Kū-of-the-canoe-builder, Kū-of-the-fisherman) and was suppressed-but-not-eliminated by the missionaries. The Maori Tūmatauenga is the same archetype with a different emphasis — the god of war AND of *humanity itself* (the Maori canonical-doctrine is that *humans are descendants of Tū*, the only Rangi-Papa-child who took dominion-over-the-surface).',
    the_canonical_story: 'There is no single-canonical Kū-narrative — Kū has many forms and many local-stories. The canonical-political-story is the Kamehameha-Kūkā\'ilimoku cycle (1782-1810). The young chief Kamehameha of Hawai\'i Island, nephew of the high-chief Kalaniʻōpuʻu, was given the war-god Kūkā\'ilimoku at Kalaniʻōpuʻu\'s deathbed (1782) while Kalaniʻōpuʻu\'s son Kīwalaʻō was given the political-rule of the island. The split was unstable. Kamehameha rebelled. He fought the 1782 battle of Mokuʻōhai, killed Kīwalaʻō, took control of the western half of Hawai\'i Island. Over the next 28 years, with Kūkā\'ilimoku carried by his side, Kamehameha conquered Maui (1790, the battle of Kepaniwai — "the damming of the waters" — was so bloody that the Iao Stream ran red and the bodies of the dead damned the flow), conquered O\'ahu (1795, the battle of Nu\'uanu — Kamehameha\'s army pushed O\'ahu\'s defenders backward up the Nu\'uanu Valley until they were forced over the Pali cliff to their deaths; 800-1000 Hawaiians died at the Pali, the most-concentrated battlefield-casualty event in pre-contact Hawaiian history), and accepted the peaceful-cession of Kaua\'i and Ni\'ihau from chief Kaumuali\'i (1810). The Kingdom of Hawai\'i was the first unified Hawaiian polity in island history. Kamehameha attributed it entirely to Kūkā\'ilimoku. He died in 1819. Six months later his son Liholiho and his widow Ka\'ahumanu abolished the kapu-system that included Kū-sacrifice. The Hawaiian Christian-missionaries arrived three months after that.',
    the_lesson: 'The Kū-lesson is *the political-religious structure that built the kingdom can be abolished by its own beneficiaries before the foreign-replacement arrives, and the abolition is not necessarily the missionaries\' fault*. The 1819-ʻAi-Noa is one of the most-studied indigenous-religious-collapses in colonial-history specifically because the Hawaiian-elite themselves did the abolition, six months before the missionaries arrived, on their own initiative. The deeper-lesson is *standing-masculine-power that requires human-sacrifice has a built-in self-destruct mechanism, and the next-generation of the elite will eventually pull the lever — usually right after the founder dies*.',
    in_love: 'Kū in love is the partner who *stands upright in power* — whose masculine-presence is the foundation of the household, whose decisions are firm, whose protections are absolute. The shadow: the Kū-partner whose *Kū-requires-human-sacrifice* mode has begun to demand sacrifices that the relationship cannot supply — the next-of-the-team, the next-of-the-friends, the next-of-the-children. The deeper shadow: the *1819-ʻAi-Noa* pattern — the moment the next-generation of the household (the partner, the children, the in-laws) collectively decides to abolish the standing-masculine-power-structure that the founder built, six months after the founder dies (or retires, or steps back), on their own initiative, before any external-pressure has arrived.',
    in_work: 'Kū in work is the *founder-as-Kamehameha* — the founder whose standing-masculine-power, war-god-personal-alliance, and willingness-to-extract-sacrifices built the kingdom from nothing. The shadow: the Kū-founder whose *Kūkā\'ilimoku has begun to demand a sacrifice the institution cannot supply* — the next-of-the-team is being asked to be the next-Pali-cliff casualty, the next 1000-people pushed-backward-into-the-valley. The deeper shadow: the *1819-ʻAi-Noa* pattern — the moment the second-generation (the inheriting-CEO, the board, the senior-leadership team) collectively abolishes the founder\'s war-god protocols within months of the founder\'s departure, on their own initiative, before any external-pressure. The application: Kū calls for the *plan-for-the-ʻAi-Noa* discipline — every Kamehameha-founder should explicitly-plan-and-bless the post-1819 structural-abolition of their own war-protocols, rather than leaving the abolition to be an act of disloyalty by the inheritors.',
    the_shadow: 'Kū has been *systematically demonized* in 19th-c. missionary-literature as "the bloody war-god of human-sacrifice" — a flattening that ignores his multivalent forms (Kū-of-the-canoe-builder, Kū-of-the-fisherman, Kū-of-the-sorcerer were not human-sacrifice-forms) and that uses the 1819-ʻAi-Noa as retrospective-justification for missionary-arrival. The post-1970s Hawaiian Renaissance has partially-rehabilitated Kū through the canoe-builder and fisherman forms while continuing to reject the luakini-form. The 1998-Aotearoa New-Zealand-Wars-revisionism has rehabilitated Tūmatauenga as god-of-humanity rather than just god-of-war (the canonical Maori-doctrine is that all humans are *Tū-mātanga* — Tū\'s-eyes — descendants who took dominion-over-the-surface after Tāne separated the parents). The Disney-Moana avoided the Kū-figure entirely. The "Hawaiian-warrior-tattoo" aesthetic uses Kū-iconography without the human-sacrifice context. The Mauna-Kea Thirty-Meter-Telescope dispute (2014-present) has invoked some Kū-elements — the *kū kia\'i mauna* (stand-as-protector-of-the-mountain) movement explicitly-claims-the-Kū-as-standing-protector framing, which is one of the most-sophisticated contemporary recoveries of the canonical-Kū-as-standing-one register.',
    pair_with_sign: 'Scorpio — the fixed water-sign of *deep-masculine-power, the war-and-political-foundation, the human-sacrifice protocol, the founder whose god demands more than the next-generation will pay*; Kū is the Polynesian Scorpio-archetype.',
    pair_with_sign_slug: 'scorpio',
    pair_with_planet: 'Pluto — the planet of *deep-political-power, the underworld-structure-on-which-the-kingdom-stands, the war-god-protocol-with-the-self-destruct-mechanism*; Kū is the Polynesian Pluto-god.',
    pair_with_planet_slug: 'pluto',
    pair_with_chakra: 'Root — the foundation-chakra, the standing-masculine-power-chakra, the chakra that IS *kū* (the verb *to stand*) in the human body.',
    pair_with_chakra_slug: 'root',
    key_questions: [
      'Which *Kūkā\'ilimoku-personal-war-god* did I carry through the founding-period of my kingdom — and is it still demanding the same protocol of sacrifice, or has the kingdom now grown to the point where the protocol is the obstacle?',
      'Is my *Pali-cliff* moment about to happen — the battle where I push the opposition backward up the valley until they are forced over the cliff, and have I considered whether 800-1000 Hawaiians-dead is the actual price of unification I want to pay?',
      'Have I *planned-for-the-ʻAi-Noa* — explicitly-blessing the post-departure structural-abolition of my own war-protocols by the next-generation — or am I leaving the abolition to be an act-of-disloyalty by the inheritors after I am gone?'
    ]
  },
  {
    slug: 'haumea',
    text: 'Haumea',
    names: 'Haumea · Hawaiian goddess of childbirth, fertility, and the primordial-mother · mother of Pele, Hi\'iaka, Nāmaka, and many of the early Hawaiians · associated with the *makalei* tree (the breadfruit / ʻulu) · in the Maori cognate Hua-Mea she is the firstborn-mother; in the post-2008 IAU nomenclature the dwarf-planet Haumea (orbiting beyond Neptune, with two moons named Hi\'iaka and Nāmaka after her daughters) is the only Hawaiian-named major astronomical-body in the solar system',
    family: 'hero',
    position: 11,
    epithet: 'The Hawaiian primordial-mother — mother of Pele, Hi\'iaka, Nāmaka, and many of the early Hawaiians. She is the goddess of *childbirth* and is invoked at every Hawaiian birth. Her body is the source of the *makalei* tree, the breadfruit (ʻulu) that became the principal-staple-food of the Hawaiian commoners. In 2008 the International Astronomical Union accepted "Haumea" as the official name of the trans-Neptunian dwarf-planet first observed in 2003 — making Haumea the only Hawaiian-deity-name in the solar-system\'s major-body nomenclature. Her two largest moons are named Hi\'iaka and Nāmaka after her daughters.',
    one_liner: 'The Hawaiian primordial-mother whose body birthed Pele, Hi\'iaka, Nāmaka, and the breadfruit tree. The pattern of the *primordial-mother whose body is the genealogical-foundation of the entire pantheon AND of the staple-food of the commoners*.',
    meaning: 'Haumea is the *Polynesian archetype of the primordial-mother-whose-body-is-the-genealogical-foundation* — the goddess from whose body Pele, Hi\'iaka, Nāmaka, and the early-Hawaiians were born. She is the canonical *grandmother-of-the-Pele-cycle* — every Hawaiian volcanic-event traces back-through-Pele to her body. She is also the goddess of *childbirth* — invoked at every Hawaiian birth, especially difficult births. The traditional Hawaiian-midwife protocol included Haumea-chants at each stage of labor. Her *makalei*-tree form is the breadfruit (ʻulu) — when Haumea\'s human-husband Wakea was hungry, she walked into a breadfruit tree and her body became the tree, providing the principal-staple-food for the Hawaiian commoners (the Hawaiian ali\'i ate taro from Hāloa\'s lineage; the commoners ate breadfruit from Haumea\'s body). She is also a *shape-shifter* who could appear as a beautiful young-woman or an elder, and who appeared in different ages to different generations of Hawaiian chiefs — making her the canonical-Hawaiian-archetype of the *immortal-mother who walks through history*. In 2008 the IAU named the dwarf-planet 136108-Haumea after her, with the two largest moons Hi\'iaka and Nāmaka after her daughters — the only Polynesian-deity-naming in the major solar-system bodies, a small recognition that the Hawaiian-canonical genealogical-mother stands at the cosmic-foundation.',
    the_canonical_story: 'Haumea\'s story is a *web of overlapping-cycles* rather than a single-linear narrative. She married Wakea (the Sky-Father, Rangi-cognate) — making her the Earth-Mother in the Hawaiian-chiefly-genealogy, the Hawaiian-cognate of Papa. She bore Pele, Hi\'iaka, Nāmaka, the seventeen-Hi\'iaka-sisters, and the Pele-brothers. She also bore Hāloa-naka — the stillborn-firstborn whose burial-in-the-earth grew the taro plant — and Hāloa-the-second, the first Hawaiian human. She walked through Hawaiian-history under many names, appearing-young to one generation and old to the next. In the *Haumea-and-Wakea cycle* she was offended by Wakea\'s second-wife and disappeared into the makalei-breadfruit-tree, providing the staple-food but withdrawing-her-divine-presence from his household. In other cycles she taught Hawaiian women the *ku\'i kalo* (taro-pounding) and the *kapa-making*. She is the *all-providing-and-finally-withdrawing-mother* whose generosity built the foundation AND whose withdrawal was the price of her dignity.',
    the_lesson: 'The Haumea-lesson is *the primordial-mother who built the foundation can withdraw her divine-presence when her dignity is violated, and the withdrawal is not a punishment; it is the canonical-protocol for honoring the dignity that the surrounding-household failed to honor*. Wakea\'s second-wife was a violation of her status. She did not fight, did not curse, did not demand justice. She walked-into-the-breadfruit-tree and became the staple-food while withdrawing her divine-conversation. The work is to *know when to walk into the breadfruit-tree* — to continue providing the foundational-nourishment while withdrawing the divine-conversation from a household that has lost the protocol.',
    in_love: 'Haumea in love is the partner who *is the genealogical-foundation of the entire-household* — whose body, time, and continuous-presence have birthed every-major-project, every-major-relationship, every-major-decision the household contains. The shadow: the Haumea-partner whose dignity has been *violated by an institutional-second-wife* — a new project, a new partnership, a new attention-direction that has the structural-position of a second-wife without the formal-acknowledgment, and who is *walking-into-the-breadfruit-tree* in response. The deeper shadow: the *immortal-mother-who-walks-through-history* pattern — the partner who has appeared-young to one generation and old to the next, who is recognized differently by different cohorts in the same household, and whose continuous-identity-across-time is being misread as multiple-different-people.',
    in_work: 'Haumea in work is the *primordial-founder-mother* — the founder whose body, time, and continuous-presence built the entire-genealogy of the institution\'s major-projects, every senior team-member, every product-line. The shadow: the Haumea-founder whose dignity has been *violated by a second-wife-equivalent* — a new co-founder, a new investor, a new strategic-direction that has the structural-position of a second-wife without the formal-acknowledgment, and who is *withdrawing the divine-conversation* while continuing to provide the foundational-nourishment. The deeper shadow: the *walks-through-history-under-many-names* pattern — the founder who has been a young-founder to one generation and an elder-founder to the next, and whose continuous-identity is being misread as if she were multiple-different-people across the institution\'s history. The application: Haumea calls for the *acknowledge-the-walks-into-the-breadfruit-tree* discipline — explicitly name the moment-of-withdrawal, do not pretend the breadfruit-tree-just-grew-there.',
    the_shadow: 'Haumea has been *systematically eclipsed* by her daughter Pele in popular-Hawaiian-mythology — every casual-tourist who has heard of Pele has rarely-heard of the primordial-mother-of-Pele. The 19th-c. missionary-literature treated Haumea minimally, focusing on Pele as the locus of "Hawaiian paganism to be opposed." The 2008-IAU naming of the dwarf-planet Haumea was a small-but-significant recognition — the IAU naming-conventions had previously required mythology-derived-names for trans-Neptunian dwarf-planets, and the Hawaiian-astronomy community (led by Caltech\'s Mike Brown and the Mauna Kea observatories) chose Haumea specifically to honor the Mauna-Kea-hosted-discovery (most of the dwarf-planet science was done from telescopes on Mauna Kea, on Wakea-and-Papa\'s navel-mountain). The contemporary Hawaiian-midwifery-movement has partially-recovered the Haumea-childbirth-chants in some hālau-and-cultural-center contexts. The breadfruit-renaissance (the post-2010 *Breadfruit Institute* in Kaua\'i, the staple-food-recovery movement) has partially-recovered the Haumea-makalei lineage.',
    pair_with_sign: 'Capricorn — the cardinal earth-sign of *the primordial-mother-as-structural-foundation, the immortal-mother-who-walks-through-history, the genealogical-elder*; Haumea is the Polynesian Capricorn-archetype.',
    pair_with_sign_slug: 'capricorn',
    pair_with_planet: 'Saturn — the planet of *the structural-foundation, the genealogical-mother, the elder-who-built-the-time-itself*; Haumea is the Polynesian Saturn-goddess.',
    pair_with_planet_slug: 'saturn',
    pair_with_chakra: 'Sacral — the chakra of *childbirth, of the primordial-mother-body, of the makalei-breadfruit-tree-as-her-body-providing-the-staple*; Haumea owns the Polynesian Sacral-chakra register through the childbirth-and-providing dimension.',
    pair_with_chakra_slug: 'sacral',
    key_questions: [
      'What is the *Haumea-body* in my current institution — the founding-mother-presence whose body has birthed every-major-project, every-senior-relationship, every-product-line — and have I acknowledged her, or have I been treating her as if she just-was-the-ground?',
      'Has my own *Haumea walked-into-the-breadfruit-tree* — has the divine-conversation withdrawn while the foundational-nourishment continues, in response to a violation of her dignity that the household failed to name — and what would re-extending the protocol look like?',
      'Am I being *recognized as a different-person* in different cohorts of the same household (the young-Haumea by one generation, the elder-Haumea by another) — and is my continuous-identity-across-time being misread as multiple-different-people who happen to share a name?'
    ]
  },
  {
    slug: 'laka',
    text: 'Laka',
    names: 'Laka · Hawaiian goddess of hula, forest-flora, and the *hālau hula* (hula schools) · in some traditions Pele\'s sister and Hi\'iaka\'s aunt · patron of the *kuahu* (the altar at the back of every hula school, on which Laka\'s body is invoked as the standing-altar) · associated with the *maile* vine, the *lehua* blossom, and the *ʻōhia* tree of the upland-forests · Maori cognate Raka, a female-figure associated with cooked-food and sometimes with peace',
    family: 'hero',
    position: 12,
    epithet: 'The Hawaiian goddess of hula and the forest-flora that hula-dancers gather for their costumes — the *maile* vine, the *lehua* blossom, the *ʻōhia* tree, the *ʻie\'ie* climbing-vine. Patron of every *hālau hula* (hula school) in Hawai\'i; every hula school has a *kuahu* altar at the back, on which Laka\'s presence is invoked at the start of every practice-session and every public-performance. Where Hi\'iaka is the goddess of hula\'s narrative-and-healing-power, Laka is the goddess of hula\'s *forest-rooted-aesthetic and embodiment-of-the-wild-greenery*. Together they form the dual-patronage-system of contemporary Hawaiian hula.',
    one_liner: 'The Hawaiian goddess of *hula, forest-flora, and the green-altar at the back of every hula school*. The pattern of the *aesthetic-embodiment of the wild-greenery that the dancer brings into the body and the body brings back to the forest*.',
    meaning: 'Laka is the *Polynesian archetype of the embodied-aesthetic-of-the-forest-that-walks-into-the-dance* — the Hawaiian goddess of hula whose presence is invoked at the *kuahu* (the green-altar) at the back of every *hālau hula*. The dual-patronage of Hawaiian hula is *Hi\'iaka-and-Laka*: Hi\'iaka is the goddess of *hula\'s narrative-power* (the chants that carry the genealogies, the healing-stories, the Pele-and-Hi\'iaka epic), and Laka is the goddess of *hula\'s embodied-aesthetic* (the maile-vine costumes, the lehua-blossom haku-lei, the ʻōhia-tree leaves, the green-flora-as-second-skin of the dancer). At the start of every hula-class and every public-performance, the *kumu hula* (master-teacher) opens with *E hō mai* or *Mele Komo* or another Laka-invocation chant, calling Laka into the space and asking her to enter the dancers\' bodies. The dancers wear forest-flora — gathered with prayers, with apologies-to-the-plant, with offerings — and they wear it not as decoration but as *Laka-herself-being-worn*. Every contemporary Merrie-Monarch-Festival performance is structurally a Laka-invocation. She is the canonical-archetype of the *aesthetic-as-embodied-prayer* — the proposition that beautiful-bodily-form-in-motion-clothed-in-the-wild-greenery is a complete-prayer in itself, not a means to a deeper-prayer.',
    the_canonical_story: 'Laka\'s story is *not narrative*; it is *altar-based*. Where Pele and Hi\'iaka have epic-narrative-cycles, Laka has a *standing-altar* and a body-of-chants. The canonical-Laka-chants (preserved by Pukui, Emerson, Korn, and the living-hālau-lineages) are *invocations of her presence* rather than stories-about-her: *E hō mai i ka ʻike mai luna mai e* (grant the knowledge from above), *Pupu weuweu e Laka e* (the dense-green-foliage of Laka), and many others. Her family-relationships are unclear — different lineages place her variously as Pele\'s sister, Pele\'s daughter, Pele\'s sister-in-law, an independent-deity-not-connected-to-the-Pele-cycle, or a manifestation-of-Kapo (another Pele-sister and goddess of sorcery). The Hawaiian-canonical position is that the *vagueness of Laka\'s genealogy is itself part of her character* — she is the *green-aesthetic-presence-of-the-forest*, not a personality with a fixed-biography. The hālau-hula tradition treats her primarily through the *kuahu altar* — a small stone-and-wood altar at the back of the hula-school, on which sit symbols of Laka (a stone, a piece of carved-wood, a small bundle of maile, sometimes a piece of ʻōhia bark), and into which Laka is asked to come at the start of every practice and depart at the end.',
    the_lesson: 'The Laka-lesson is *some deities are altar-deities rather than narrative-deities, and the demand-for-a-story is sometimes the wrong demand*. The post-Greek Western-mythology-tradition assumes that *every-deity-must-have-a-narrative-biography* — birth, parents, marriage, children, death-or-apotheosis. The Polynesian-canonical-tradition allows for *altar-deities whose presence is invoked through standing-form and whose biography is deliberately-vague*. The work is to *let some of your sacred-presences remain narrative-vague* — invoke them as embodied-aesthetic-prayer rather than insisting they have a biography that fits the Hi\'iaka-shaped or Pele-shaped story-template.',
    in_love: 'Laka in love is the partner whose *aesthetic-embodiment-of-wild-greenery* is the prayer-of-the-relationship — whose gathered-flora, whose intentional-clothing, whose body-as-second-skin-of-the-forest is the canonical-Laka-form. The shadow: the Laka-partner who has been *asked-for-a-narrative-biography* by a household that cannot tolerate the canonical-vagueness — whose aesthetic-presence is being treated as decoration rather than as embodied-prayer, and who is being demanded to fit a Hi\'iaka-shaped story-template. The deeper shadow: the *kuahu-altar abandoned* pattern — the household has stopped invoking Laka at the start of practice-sessions, the altar has gone dusty, and the aesthetic-presence is consequently no longer entering the bodies of the dancers.',
    in_work: 'Laka in work is the *aesthetic-presence-of-the-institution* — the founder-or-team-member whose embodied-aesthetic, whose intentional-form-and-craft, whose body-as-second-skin-of-the-craft is the prayer of the institution. The shadow: the Laka-founder whose aesthetic-presence has been *flattened into "brand"* — the prayer reduced to a logo, the embodied-craft reduced to a style-guide, the kuahu-altar replaced by a brand-bible. The deeper shadow: the *demand-for-narrative-biography* pattern — the institution is asking the aesthetic-presence to fit a Hi\'iaka-narrative-template (a hero\'s-journey storyline, a founder-myth) when the canonical-form is altar-based and the demand-for-story is structurally-wrong. The application: Laka calls for the *re-open-the-kuahu* discipline — restore the start-of-practice invocation of the aesthetic-presence as embodied-prayer, before any narrative-story-content is required.',
    the_shadow: 'Laka has been *systematically subsumed* into Hi\'iaka in popular-Hawaiian-mythology — every "hula goddess" reference defaults to Hi\'iaka and rarely-names the second-half of the dual-patronage. The 19th-c. missionary-suppression-of-hula targeted both Hi\'iaka and Laka equally, but the post-1874-Kalākaua-and-1976-Merrie-Monarch recovery has emphasized Hi\'iaka (with her epic-narrative) over Laka (with her altar-based vagueness). The contemporary commercial-hula (luau-entertainment, tourist-resort-hula) is *Laka-aesthetic without Laka-protocol* — the dancers wear the maile and lehua without the gathering-offerings, without the kuahu-altar-invocation, without the asking-permission of the plants. This is the most-direct-contemporary-violation of Laka-protocol, performed nightly across every Hawaiian-resort. The contemporary serious-hālau-hula movement (the schools-that-compete-at-Merrie-Monarch, the schools-led-by-recognized-kumu-hula) maintains Laka-protocol strictly. The 21st-c. *Instagram-hula-influencer* aesthetic continues to strip the canonical-protocol.',
    pair_with_sign: 'Libra — the cardinal air-sign of *the aesthetic-as-embodied-prayer, the green-altar at the back of the hālau, the balance-of-form-and-presence-and-protocol*; Laka is the Polynesian Libra-archetype.',
    pair_with_sign_slug: 'libra',
    pair_with_planet: 'Venus — the planet of *the aesthetic, the embodied-form, the wild-greenery-as-second-skin, the love-of-craft as itself the prayer*; Laka is the Polynesian Venus-goddess of forest-craft.',
    pair_with_planet_slug: 'venus',
    pair_with_chakra: 'Throat — the chakra of *the chant that opens the kuahu, the invocation that calls the goddess into the space, the canonical-Laka-invocation as throat-prayer*; Laka owns the Polynesian Throat-chakra register through the *Pupu weuweu e Laka e* invocation.',
    pair_with_chakra_slug: 'throat',
    key_questions: [
      'Where in my life is my *Laka-aesthetic-presence* — the embodied-form, the intentional-craft, the wild-greenery-as-second-skin — and has it been honored as embodied-prayer, or has it been flattened into "brand" or "style"?',
      'Has my *kuahu-altar* gone dusty — has the start-of-practice invocation of the aesthetic-presence been quietly-discontinued, and is the consequence that the aesthetic-presence is no longer entering the bodies of the dancers (or the work-of-the-team)?',
      'Am I being *demanded for a narrative-biography* by a household that cannot tolerate the canonical-vagueness of altar-deities — is the demand structurally-wrong, and would re-opening-the-altar-without-the-biography be the right form of refusal?'
    ]
  },
]

const POLYNESIAN_GODS_BY_SLUG: Record<string, PolynesianGodGuide> = Object.fromEntries(POLYNESIAN_GODS.map((g) => [g.slug, g]))

export const POLYNESIAN_GODS_SLUGS = POLYNESIAN_GODS.map((g) => g.slug)

export function isPolynesianGodSlug(s: string): boolean {
  return s in POLYNESIAN_GODS_BY_SLUG
}

const FAMILY_LABEL: Record<PolynesianGodGuide['family'], string> = {
  cosmic:   'Cosmic Parents & the Separation · sky, earth, forest, ocean',
  volcanic: 'Volcanic, Lunar & Living-Land · fire, moon, agriculture, hula-of-the-rebirth',
  hero:     'Heroes, War & Threshold · trickster, war, primordial-mother, forest-aesthetic',
}

const FAMILY_SHORT: Record<PolynesianGodGuide['family'], string> = {
  cosmic:   'Cosmic Parent',
  volcanic: 'Volcanic / Lunar',
  hero:     'Hero / Threshold',
}

const FAMILY_ACCENT: Record<PolynesianGodGuide['family'], { c1: string; c2: string; glyph: string }> = {
  cosmic:   { c1: '#3a6ea0', c2: '#152844', glyph: '🌌' },
  volcanic: { c1: '#c8543a', c2: '#5a1808', glyph: '🌋' },
  hero:     { c1: '#3e8a5a', c2: '#163820', glyph: '🪝' },
}

const PALETTE = `
  --bg-0:#faf9f5; --bg-1:#fff; --bg-2:#f1ede4; --bg-3:#e6e0d2;
  --line:rgba(34,24,12,0.10); --line-strong:rgba(34,24,12,0.18);
  --fg:#1a1815; --fg-dim:#5a564e; --fg-muted:#8b8779; --fg-on-accent:#fffaf2;
  --accent:#c96442; --accent-2:#b85432; --accent-soft:#fdebe2;
`

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function polynesianGodPageHTML(slug: string): string {
  const g = POLYNESIAN_GODS_BY_SLUG[slug]
  if (!g) return '<!doctype html><title>not found</title>'

  const accent = FAMILY_ACCENT[g.family]
  const readingHref = `/gab44/reading?ref=polynesian-${slug}`

  const title = `${escapeHtml(g.text)} — Polynesian God · ${g.position}/12 · gab44 ✨`
  const description = `${escapeHtml(g.one_liner)} What ${g.text} actually means in Polynesian / Oceanic mythology — the canonical story, the lesson, in love, in work, the shadow, paired with sign + planet + chakra. Source-honest from the Kumulipo, Pele-Hi\'iaka epic, Grey, Beckwith, Pukui, Te Rangi Hīroa.`

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'gab44', item: `${SITE_URL}/gab44` },
          { '@type': 'ListItem', position: 2, name: 'Polynesian Gods', item: `${SITE_URL}/gab44/polynesian-gods` },
          { '@type': 'ListItem', position: 3, name: g.text, item: `${SITE_URL}/gab44/polynesian-gods/${slug}` },
        ],
      },
      {
        '@type': 'Article',
        headline: `${g.text} — Polynesian God ${g.position}/12`,
        description: description.substring(0, 280),
        author: { '@type': 'Person', name: 'Naoufal Chobah' },
        publisher: { '@type': 'Organization', name: 'gab44' },
        mainEntityOfPage: `${SITE_URL}/gab44/polynesian-gods/${slug}`,
        about: `${g.text} Polynesian mythology, Hawaiian / Maori / Tahitian, ${g.family}`,
      },
    ],
  })

  const familyPeers = POLYNESIAN_GODS.filter((q) => q.family === g.family && q.slug !== slug).map((q) => {
    return `<a class="ph-mini" href="/gab44/polynesian-gods/${q.slug}" style="--c1:${accent.c1};--c2:${accent.c2}"><span class="sym">${accent.glyph}</span><span class="name">${escapeHtml(q.text)}</span></a>`
  }).join('\n        ')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/polynesian-gods/${slug}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE_URL}/gab44/polynesian-gods/${slug}" />
<script type="application/ld+json">${jsonLd}</script>
<style>
  :root { ${PALETTE} --c1:${accent.c1}; --c2:${accent.c2}; }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, 'Cormorant Garamond', serif; background: var(--bg-0); color: var(--fg); line-height: 1.65; -webkit-font-smoothing: antialiased }
  main { max-width: 760px; margin: 0 auto; padding: 32px 22px 96px }
  nav.crumbs { font-size: 13px; color: var(--fg-muted); margin-bottom: 16px }
  nav.crumbs a { color: var(--fg-dim); text-decoration: none; border-bottom: 1px dotted var(--line-strong) }
  .hero { background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%); color: var(--fg-on-accent); padding: 36px 28px; border-radius: 16px; margin-bottom: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.08) }
  .hero .symbol { font-size: 56px; line-height: 1 }
  .hero h1 { margin: 12px 0 6px; font-size: 38px; font-weight: 700; letter-spacing: -0.02em }
  .hero .names { font-size: 14px; opacity: 0.82; margin: 0 0 10px; font-style: italic }
  .hero .familylbl { font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; opacity: 0.78; margin: 0 }
  .hero .one-liner { margin: 16px 0 0; font-size: 17px; opacity: 0.94; font-style: italic; line-height: 1.55 }
  .hero .epithet { margin: 14px 0 0; font-size: 14px; opacity: 0.86; line-height: 1.6 }
  section { padding: 22px 0; border-bottom: 1px solid var(--line) }
  section:last-of-type { border-bottom: none }
  section h2 { font-size: 22px; margin: 0 0 10px; color: var(--c2); letter-spacing: -0.01em }
  section p { margin: 0 0 8px; color: var(--fg) }
  .pair-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 10px; margin-top: 8px }
  .pair-grid a { display: block; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--fg-dim); background: var(--bg-1); font-size: 14px; transition: transform 0.12s ease, border-color 0.12s ease }
  .pair-grid a:hover { transform: translateY(-1px); border-color: var(--c1) }
  .pair-grid a .lbl { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--fg-muted); margin-bottom: 3px }
  .questions ol { padding-left: 22px; margin: 8px 0 0 }
  .questions li { padding: 6px 0; color: var(--fg) }
  .cta-strip { margin-top: 28px; padding: 22px; background: linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-2) 100%); border-radius: 14px; border: 1px solid var(--line) }
  .cta-strip h3 { margin: 0 0 6px; color: var(--accent-2); font-size: 18px }
  .cta-strip p { margin: 0 0 12px; color: var(--fg-dim); font-size: 14px }
  .cta-strip a { display: inline-block; padding: 10px 18px; background: var(--accent); color: var(--fg-on-accent); text-decoration: none; border-radius: 999px; font-weight: 600; font-size: 14px }
  .family-peers { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px }
  .ph-mini { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%); color: var(--fg-on-accent); text-decoration: none; font-size: 14px }
  .ph-mini .sym { font-size: 16px }
  footer { padding: 24px 0; color: var(--fg-muted); font-size: 13px; text-align: center }
  footer a { color: var(--fg-dim) }
</style>
</head>
<body>
<main>
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ <a href="/gab44/polynesian-gods">polynesian gods</a> ✦ ${escapeHtml(g.text)}</nav>

  <header class="hero">
    <div class="symbol">${accent.glyph}</div>
    <h1>${escapeHtml(g.text)}</h1>
    <p class="names">${escapeHtml(g.names)}</p>
    <p class="familylbl">${escapeHtml(FAMILY_SHORT[g.family])} · ${g.position} of 12</p>
    <p class="one-liner">${escapeHtml(g.one_liner)}</p>
    <p class="epithet">${escapeHtml(g.epithet)}</p>
  </header>

  <section><h2>What ${escapeHtml(g.text)} actually means</h2><p>${escapeHtml(g.meaning)}</p></section>
  <section><h2>The canonical story</h2><p>${escapeHtml(g.the_canonical_story)}</p></section>
  <section><h2>The lesson</h2><p>${escapeHtml(g.the_lesson)}</p></section>
  <section><h2>In love</h2><p>${escapeHtml(g.in_love)}</p></section>
  <section><h2>In work</h2><p>${escapeHtml(g.in_work)}</p></section>
  <section><h2>The shadow — honest about modern misreadings</h2><p>${escapeHtml(g.the_shadow)}</p></section>

  <section>
    <h2>Pair with</h2>
    <div class="pair-grid">
      <a href="/gab44/${g.pair_with_sign_slug}/about"><span class="lbl">Zodiac sign</span>${escapeHtml(g.pair_with_sign)}</a>
      <a href="/gab44/planets/${g.pair_with_planet_slug}"><span class="lbl">Planet</span>${escapeHtml(g.pair_with_planet)}</a>
      <a href="/gab44/chakras/${g.pair_with_chakra_slug}"><span class="lbl">Chakra</span>${escapeHtml(g.pair_with_chakra)}</a>
      <a href="/gab44/polynesian-gods"><span class="lbl">The 12 Polynesian gods</span>The full Pacific-Islander pantheon</a>
    </div>
  </section>

  <section class="questions">
    <h2>3 key questions ${escapeHtml(g.text)} asks of you</h2>
    <ol>
      <li>${escapeHtml(g.key_questions[0])}</li>
      <li>${escapeHtml(g.key_questions[1])}</li>
      <li>${escapeHtml(g.key_questions[2])}</li>
    </ol>
  </section>

  <div class="cta-strip">
    <h3>Want a $9 reading that names which Polynesian deity is currently active in your chart?</h3>
    <p>Your chart + the Pacific-Islander archetype most active in this chapter — read together, by hand, named directly.</p>
    <a href="${readingHref}">Request your reading →</a>
  </div>

  <h3 style="margin:24px 0 6px;font-size:15px;color:var(--fg-dim)">Other gods in this family</h3>
  <div class="family-peers">${familyPeers}</div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-honest · Kumulipo, Pele-Hi\'iaka epic, Grey, Beckwith, Pukui, Te Rangi Hīroa · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

export function polynesianGodsIndexHTML(): string {
  const families: PolynesianGodGuide['family'][] = ['cosmic', 'volcanic', 'hero']

  const familyBlocks = families.map((f) => {
    const acc = FAMILY_ACCENT[f]
    const godsInFamily = POLYNESIAN_GODS.filter((g) => g.family === f)
    const cards = godsInFamily.map((g) => `<a class="card" href="/gab44/polynesian-gods/${g.slug}" style="--c1:${acc.c1};--c2:${acc.c2}">
      <div class="glyph">${acc.glyph}</div>
      <div class="pos">${g.position} / 12</div>
      <h3>${escapeHtml(g.text)}</h3>
      <p class="lead">${escapeHtml(g.one_liner)}</p>
    </a>`).join('\n      ')

    return `<section class="family-block">
      <h2 class="family-h">${escapeHtml(FAMILY_LABEL[f])}</h2>
      <div class="grid">${cards}</div>
    </section>`
  }).join('\n    ')

  const title = "The 12 Polynesian Gods — the Pantheon of the Pacific · gab44 ✨"
  const description = "Hand-written guides to 12 canonical Polynesian deities across Hawai\'i, Aotearoa (New Zealand), Tahiti, and Samoa: Rangi, Papa, Tāne, Tangaroa, Pele, Hi\'iaka, Hina, Lono, Māui, Kū, Haumea, Laka. Three families — Cosmic Parents & the Separation, Volcanic & Lunar & Living-Land, Heroes & War & Threshold — paired with zodiac sign, planet, and chakra. Source-honest from the Kumulipo, the Pele-Hi\'iaka epic, Grey, Beckwith, Pukui, Te Rangi Hīroa. The first Pacific-Islander pantheon on gab44."

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${SITE_URL}/gab44/polynesian-gods" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<style>
  :root { ${PALETTE} }
  * { box-sizing:border-box }
  html,body { margin:0; padding:0 }
  body { font-family: ui-serif, Georgia, serif; background: var(--bg-0); color: var(--fg); line-height: 1.65 }
  main { max-width: 1040px; margin: 0 auto; padding: 32px 22px 80px }
  nav.crumbs { font-size: 13px; color: var(--fg-muted); margin-bottom: 12px }
  nav.crumbs a { color: var(--fg-dim); text-decoration: none; border-bottom: 1px dotted var(--line-strong) }
  h1 { font-size: 36px; margin: 8px 0 6px; letter-spacing: -0.02em }
  h1 .accent { color: var(--accent) }
  .sub { color: var(--fg-dim); margin: 0 0 22px; font-size: 16px }
  .intro { background: var(--bg-1); border: 1px solid var(--line); border-radius: 14px; padding: 18px 20px; margin-bottom: 28px }
  .intro h3 { margin: 0 0 8px; font-size: 16px; color: var(--accent-2) }
  .intro p { margin: 0 0 8px; font-size: 14px; color: var(--fg-dim) }
  .family-block { margin-bottom: 32px }
  .family-h { font-size: 18px; color: var(--accent-2); margin: 0 0 12px; letter-spacing: -0.01em; border-bottom: 1px solid var(--line); padding-bottom: 6px }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px }
  .card { --c1:#888; --c2:#444; position: relative; display: block; padding: 20px 18px; border-radius: 14px; background: linear-gradient(135deg, var(--c1) 0%, var(--c2) 100%); color: var(--fg-on-accent); text-decoration: none; box-shadow: 0 6px 18px rgba(0,0,0,0.07); transition: transform 0.15s ease }
  .card:hover { transform: translateY(-2px) }
  .card .glyph { font-size: 32px; line-height: 1 }
  .card .pos { position: absolute; top: 12px; right: 14px; font-size: 11px; letter-spacing: 0.12em; opacity: 0.75 }
  .card h3 { margin: 10px 0 4px; font-size: 22px }
  .card .lead { font-size: 13px; opacity: 0.92; margin: 6px 0 0; font-style: italic; line-height: 1.5 }
  .reading-strip { margin-top: 28px; padding: 22px; background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%); color: var(--fg-on-accent); border-radius: 14px }
  .reading-strip h2 { margin: 0 0 6px; font-size: 19px }
  .reading-strip a { color: var(--fg-on-accent); border-bottom: 1px solid currentColor; text-decoration: none }
  footer { padding: 26px 0 0; color: var(--fg-muted); font-size: 13px; text-align: center }
  footer a { color: var(--fg-dim) }
</style>
</head>
<body>
<main>
  <nav class="crumbs"><a href="/gab44">gab44</a> ✦ polynesian gods</nav>
  <h1>The 12 <span class="accent">Polynesian Gods</span></h1>
  <p class="sub">The pantheon of Hawai\'i, Aotearoa (New Zealand), Tahiti, and Samoa. The first Pacific-Islander surface on gab44 — closing the Oceania gap in a single ship.</p>

  <div class="intro">
    <h3>How to read this map</h3>
    <p><strong>Three families.</strong> <em>Cosmic Parents & the Separation</em> (Rangi, Papa, Tāne, Tangaroa) carry the most-tender cosmogony in world mythology — Sky-Father grieving Earth-Mother as rain. <em>Volcanic, Lunar & Living-Land</em> (Pele, Hi\'iaka, Hina, Lono) carry the Hawaiian volcanic-and-life cycle — destructive-creation as one gesture, the moon-as-Hina-beating-cloth, the four-month Makahiki war-suspension. <em>Heroes, War & Threshold</em> (Māui, Kū, Haumea, Laka) carry the trickster-culture-hero who died trying to defeat death, the war-god who built the kingdom, the primordial-mother whose body is the breadfruit, and the green-altar of hula.</p>
    <p><strong>Source-honest.</strong> Each guide cites the Kumulipo (the 2,102-line Hawaiian cosmogonic chant c. 1700 CE), Sir George Grey\'s <em>Polynesian Mythology</em> (1855), the Pele-Hi\'iaka epic (Emerson 1915, Pukui 20th c.), Te Rangi Hīroa, Martha Beckwith, David Malo, Samuel Kamakau — and is honest about the 1819 ka\'i kapu, the missionary-suppression-of-hula, the 1893 Hawaiian overthrow, the Mauna Kea TMT dispute, Disney-Moana commodification, and the contemporary tiki-bar / Polynesian-Pop kitsch.</p>
    <p><strong>Paired with sign + planet + chakra.</strong> Each god is paired with one zodiac sign, one planet, and one chakra. The 12 deities cover all 12 zodiac signs, all 10 planets, and all 7 chakras — the cross-links let you walk from Pele → Aries → Mars → Solar Plexus and back.</p>
  </div>

  ${familyBlocks}

  <div class="reading-strip">
    <h2>Want a $9 reading that names which Polynesian deity is currently active in your chart?</h2>
    <p style="margin:0;font-size:14px;opacity:0.92">Your chart + the Pacific-Islander archetype most active in this chapter — read together, by hand. <a href="/gab44/reading?ref=polynesian-index">Get yours →</a></p>
  </div>

  <footer>by <a href="https://nchobah.com">Naoufal Chobah</a> · source-honest · Kumulipo, Pele-Hi\'iaka epic, Grey, Beckwith, Pukui, Te Rangi Hīroa · first Pacific pantheon on gab44 · <a href="/gab44">gab44</a></footer>
</main>
</body>
</html>`
}

