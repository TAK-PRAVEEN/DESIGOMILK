# DESIGO® — Image Generation Brief (for the client's image generator)

Version 1 · 2026-10-01 · Save each result exactly at the path given (inside `web/public/desigo/`).

## Ground rules (please keep these)
1. **Generated = illustration, texture or backdrop only.** Anything the site presents as *real* (our farms, our cows,
   our people, our plant, test results) must be a real photograph. A generated "Desigo farm" photo would misrepresent the brand.
2. **No text, letters, logos or labels inside generated images.** Typography is added in code, and AI-generated lettering looks fake.
3. **Do not regenerate the bottle or the jar.** The product renders and cut-outs we already have stay. The real 360° frames
   come from a photo shoot or a 3D model (see section H).
4. Cows must look like **Indian zebu breeds** (hump, dewlap, long ears, lyre or curved horns), never Holstein or Jersey.
   Show them with respect: no cartoon mascots and no comic poses.
5. Output: PNG, **sRGB**, at least the size given. When "transparent" is asked for, a real alpha channel is required, not a checkerboard.
6. Suffix every prompt with: *"no text, no watermark, no logo, no letters"*.

Append this **house-style tail** to every prompt unless told otherwise:
> warm natural light, restrained premium palette of milk white #F7F4EC, deep forest green #0B3B32, earth brown #8C6A43
> and warm gold #C8A96B, subtle film grain, editorial, calm, high-end, no text, no watermark, no logo, no letters

---

## A. Textures & paper (used in 6+ chapters) — `textures/`
| # | File | Size | Prompt |
|---|---|---|---|
| A1 | `textures/paper-archival.png` | 2400×2400, seamless | Seamless tileable texture of aged cotton rag paper, warm ivory #EDE4D0, very subtle fibres and faint foxing spots, flat even lighting, top-down scan, no shadows, no folds |
| A2 | `textures/paper-handmade-indian.png` | 2400×2400, seamless | Seamless tileable texture of Indian handmade khadi paper with visible pressed plant fibres and soft deckled irregularity, warm cream, flat scan lighting |
| A3 | `textures/linen-milk.png` | 2048×2048, seamless | Seamless tileable fine linen cloth texture in milk white #F7F4EC, extremely subtle weave, flat lighting |
| A4 | `textures/stone-plinth.png` | 2048×1024 | Front view of a rectangular sandstone plinth in Jodhpur pale sandstone, soft gallery top light, isolated on transparent background |
| A5 | `textures/clay-terracotta.png` | 2048×2048, seamless | Seamless texture of unglazed terracotta clay surface (like a kulhad cup), fine cracks, warm earth tones, flat light |
| A6 | `textures/grain-overlay.png` | 1024×1024, seamless | Seamless monochrome photographic film grain on mid-grey, fine, even |

## B. Chapter backdrops (environment plates, *not* claims) — `milk/`, `textures/`
| # | File | Size | Prompt |
|---|---|---|---|
| B1 | `milk/milk-surface-top.png` | 3000×2000 | Top-down macro of a still surface of fresh whole milk with a single slow ripple, soft overcast light, creamy white with faint warm highlights, minimal |
| B2 | `milk/milk-ribbon-01.png` (transparent) | 3000×1500 | A single long ribbon of pouring milk curling in mid-air like silk, glossy, isolated on transparent background, studio light from upper left |
| B3 | `milk/milk-ribbon-02.png` (transparent) | 3000×1500 | Two milk ribbons crossing in a slow S-curve with tiny droplets, isolated on transparent background, studio light from upper left |
| B4 | `milk/milk-crown-splash.png` (transparent) | 2400×2400 | Low wide milk crown splash seen from slightly above, isolated on transparent background, crisp droplets, soft studio light |
| B5 | `milk/clouds-milk.png` | 3000×2000 | Soft cumulus clouds that look like whipped milk at dawn, pale cream and faint peach sky, airy, ethereal, lots of empty space at center |
| B6 | `textures/thar-dunes-dawn.png` | 3600×2000 | Wide panoramic landscape of the Thar desert edge near Jodhpur at dawn, low khejri trees, soft dunes, mist, muted gold and sage, very calm, painterly realism, large empty sky |
| B7 | `textures/grass-foreground.png` (transparent) | 3600×1200 | Foreground strip of tall green wheat grass blades, shallow depth of field, isolated on transparent background (used as a parallax layer) |

## C. Variant worlds (one environment per milk; the bottle is composited in code) — `products/worlds/`
Landscape 3200×2000 **and** portrait 1400×2400 for mobile. Keep a clear empty zone in the centre where the bottle goes.
| # | File | Prompt |
|---|---|---|
| C1 | `products/worlds/master-26.png` | Deep forest canopy interior at golden hour, dappled light through dark green leaves, floating pollen motes, rich bottle-green #1F5C45 and #0A2A20, empty clearing in the center, cinematic depth |
| C2 | `products/worlds/root-14.png` | Abstract landscape of layered red earth strata like Rajasthan sandstone cliffs, deep crimson #B3202A to oxblood #4A0A0F, warm rim light, empty space at center, minimal, sculptural |
| C3 | `products/worlds/base-3.png` | Vast golden wheat field at sunset dissolving into amber haze, a large low sun disc behind the center, saturated amber #E89A1C to deep brown #5A3304, calm, cinematic |
| C4 | `products/worlds/essential.png` | Minimal ivory gallery room with soft skylight from above, a pale sandstone plinth in the center, warm ivory #F4EDE2 walls, gentle shadows, museum calm |
| C5 | `products/worlds/ghee.png` | Warm golden light in a rustic Rajasthani kitchen corner, earthen matka pots and a wooden bilona churn softly out of focus, honey-gold tones, empty foreground center |

## D. Breed plates (Victorian / natural-history engravings, clearly *illustrations*) — `breeds/`
Portrait 1600×2000, **transparent background**, same framing for all six: full body in three-quarter view facing left,
standing on a small patch of ground. Use this prompt template:
> Scientific natural-history engraving of a **[BREED]** cow, an Indian zebu breed, [TRAITS], fine copperplate cross-hatching,
> sepia-brown ink #5A4630 on transparent background, 19th-century zoological plate style, elegant and respectful,
> full body three-quarter view facing left, no text, no border, no labels

| # | File | [BREED] · [TRAITS] |
|---|---|---|
| D1 | `breeds/gir.png` | Gir · domed convex forehead, long pendulous curled ears, horns curving back and upward, mottled red-and-white coat |
| D2 | `breeds/tharparkar.png` | Tharparkar · white to light-grey coat, medium lyre-shaped horns, long face, hardy desert build |
| D3 | `breeds/red-sindhi.png` | Red Sindhi · deep red coat, compact body, short thick horns, prominent hump |
| D4 | `breeds/sahiwal.png` | Sahiwal · reddish-brown coat, loose skin and large dewlap, short stubby horns, heavy build |
| D5 | `breeds/rathi.png` | Rathi · brown coat with white patches, medium size, short curved horns |
| D6 | `breeds/kankrej.png` | Kankrej · silver-grey coat darker at the shoulders, very large lyre-shaped horns, powerful frame |

The same six as **line-art versions** (for the Conceptual Sketch, Heritage and Handwritten styles): same template, but replace the
rendering with *"single-weight hand-drawn ink line drawing, no shading, forest-green #0B3B32 line on transparent background"*,
and save as `breeds/line/<name>.png`.

## E. Journey & heritage illustrations — `traceability/`, `textures/`
| # | File | Size | Prompt |
|---|---|---|---|
| E1–E7 | `traceability/step-cow.png`, `step-farm.png`, `step-milk.png`, `step-test.png`, `step-chill.png`, `step-plant.png`, `step-bottle.png` | 1600×1600, transparent | Hand-drawn ink illustration of **[a zebu cow grazing / a small Rajasthani farm with a thatched shed and khejri tree / a steel milk can / a round paper test card with sixteen dots / a stainless-steel milk chiller / a small clean dairy plant building / a returnable glass milk bottle]**, single-weight forest-green line on transparent background, conceptual sketch style, generous white space, consistent line thickness across the set |
| E8 | `textures/heritage-border.png` | 3000×300, transparent, tileable horizontally | Ornamental Rajasthani folk border pattern of dots, triangles and small leaves, inspired by block printing, warm gold and terracotta on transparent background |
| E9 | `textures/botanical-herbs.png` | 2400×2400, transparent | Botanical illustration plate of Indian medicinal herbs (ashwagandha, shatavari, giloy, tulsi) arranged loosely, fine watercolour with ink outline, transparent background, no labels |
| E10 | `textures/bilona-churn.png` | 1600×2000, transparent | Fine ink-and-wash illustration of a traditional wooden bilona churn in an earthen pot with a rope, respectful, warm sepia, transparent background |
| E11 | `textures/kulhad-cracked.png` | 2000×2000, transparent | Single hand-made terracotta kulhad cup with a fine crack, wabi-sabi, soft side light, isolated on transparent background |

## F. Technology chapter — `technology/`
| # | File | Size | Prompt |
|---|---|---|---|
| F1 | `technology/grid-horizon.png` | 3600×2000 | Dark forest-green #07211C void with a faint glowing mint #7FE0B8 perspective grid receding to a horizon, thin luminous data lines curving across, very minimal, deep, no text |
| F2 | `technology/node-map.png` | 3000×2000, transparent | Abstract network of small glowing nodes connected by thin mint lines, loosely shaped like a map of farms feeding into one hub, transparent background, no text |

## G. Per-style hero key art (only for the styles we prototype) — `styles/<style>/hero.png`
3200×2000 plus a 1400×2400 portrait. Each one is the empty environment the bottle floats in. Leave the centre empty.
| Style | Prompt core |
|---|---|
| Wabi-Sabi | Grey handmade paper with a large faded Devanagari letter form in pale grey, a cracked terracotta kulhad bowl at lower right, soft side light, one red ink seal mark, vast negative space |
| Surrealism | Endless calm sea of milk under a pale sky, a single distant khejri tree standing in the milk, soft dreamlike light, Magritte-inspired, empty center |
| Ethereal / Aurora | Soft drifting veils of pearl, sage and pale-gold light like an aurora over a dawn field, very soft focus, glowing, empty center |
| Victorian | Ornate Art Nouveau frame of vines, wheat ears and lotus in forest green and gold, aged paper inside, empty oval center (frame only, transparent center) |
| Bohemian | Sunlit Rajasthani courtyard with block-printed textiles, brass vessels and marigolds, warm, layered, empty space at center |
| Claymorphism | Soft matte clay diorama of rolling green pastures, a tiny clay farm and round clay cows, pastel milk-and-sage palette, studio light, empty center |
| Pixel Art | 32-bit pixel-art landscape of a Rajasthan farm at dawn with zebu cows, limited palette of forest green, cream, gold, crisp pixels, no text |
| Synthwave / Futuristic | Dark horizon with a soft green sunrise, glowing grid floor, faint dunes silhouettes, restrained (no neon pink), empty center |
| Collage / Scrapbook / Mixed Media | Flat-lay of torn handmade papers, pressed grass, a kraft tag, string and a faded farm field photo texture, warm, tactile, empty center area |

## H. The bottle in 3D: how to get the 360° frames
Image generators cannot produce 72 *consistent* frames of one real bottle. Two routes, in order of preference:
1. **Photograph it** on a turntable: 72 frames, locked camera, transparent background. Spec in `04_ASSET_REQUESTS.md`.
2. **Make a 3D model** (GLB) of the real bottle and label. Image-to-3D tools, such as the Higgsfield "generate 3D" tool connected to
   this workspace, can produce a draft GLB from a clean front cut-out. We then render 72 frames from the model, or use the
   GLB directly in the viewer's `model` slot. The label must be checked against the real one before publishing.

## Where each image goes in the build
| Component | Images |
|---|---|
| AmbientBackground / grain | A1–A6 |
| HeroStory | B5 or style hero (G), B2–B3 |
| Journey | E1–E7, A1 |
| FarmScene | B6, B7 (+ real farm photos, still required) |
| BreedExplorer | D1–D6 (+ real breed photos later) |
| QualityPanel | E1 test card illustration (E-set) |
| ProductWorlds | C1–C4 |
| MilkFlow / Material | B1–B4 |
| Heritage | E8–E11, A2 |
| Technology | F1–F2 |
| GheeScene | C5, E8, E10 |
| FinalCTA | B2–B4, C4 |

**Priority order:** C1–C4 → D1–D6 → B2–B4 → A1/A2/A6 → E1–E7 → B6/B7 → F1 → the rest.
