# 41 · New Liquid — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

"New Liquid" (fluid UI) treats the interface as a **liquid material**. Shapes are soft blobs that merge and separate (metaballs), buttons stretch towards the cursor with surface tension, page transitions flow like a pour or a flood, and images warp as if seen through water. It grew out of WebGL shader experiments (2018 onward), liquid-glass and "gooey" SVG filters, and Apple's recent move towards fluid, refractive system materials.

For DESIGO® the liquid is **milk itself**. Milk is opaque, creamy and slightly glossy, with a soft meniscus and a thick, slow flow. So the interface becomes **milk as interface material**: the cursor is a drop, transitions are pours, sections fill like a glass, and the edge between chapters is a meniscus line.

Reference points:
1. **WebGL fluid simulations** (Pavel Dobryakov's "WebGL Fluid Simulation", 2017, and the metaball and SDF shader community): the real physics look.
2. **Liquid product launches**: dairy and beverage advertising pours (milk crowns, slow ribbons), now rebuilt as interactive UI on award-winning sites.
3. **Apple's "Liquid Glass" interface material (2025)**: proof that fluid, refractive UI can be calm, premium and systematic.

## 2. Fit for DESIGO® — score 4 / 5

**Why it fits.** No style is closer to the product. Milk *is* the material, so every interaction reinforces the brand without one word of claim. Pours and fills carry the "launch film" energy of the brief, and the style works with today's single transparent renders, because the liquid lives around the bottle, not inside a 3D model. Chapter 09 (Milk as material) was already planned as a fluid moment; this style extends it into a whole interaction system.

**Where it fights.** (1) Milk spilt or dripping can read as mess or waste, which is wrong for a premium food brand. (2) Gooey shapes become slimy or childish fast if colours or speed are off. (3) WebGL fluid is expensive on mid-range Android phones, which are a real share of the Indian audience. (4) Coloured liquid would suggest flavoured milk. **The milk must always be white.**

**Recommendation.** A strong **interaction layer** for the whole site (cursor, buttons, transitions) and the lead style for chapters 09 and 15, built on a Minimalism or Luxury Typography base.

## 3. Art direction

### Palette ("milk and its light")
| Token | Hex | Role |
|---|---|---|
| `--nl-milk` | `#F7F4EC` | The liquid's body (brand milk) |
| `--nl-cream` | `#EFE6D2` | Liquid shading, the thick side of a flow |
| `--nl-skin` | `#FFFDF8` | Specular highlight on the milk surface |
| `--nl-meniscus` | `#E2D8C3` | The thin shadow line at a liquid edge |
| `--nl-ground` | `#E9ECE8` | Cool page ground, so white milk reads against it |
| `--nl-forest` | `#0B3B32` | Dark ground; milk on forest is the hero contrast |
| `--nl-green` | `#1E7A68` | Links and focus |
| `--nl-gold` | `#C8A96B` | Warm rim light on milk in the ghee and heritage chapters |
| `--nl-ink` | `#171918` | Text |

**Rule: the liquid is always milk-coloured.** Variant colours appear as the light, the ground and the reflection on the milk surface, never as the liquid itself.

### Typography
- Display: **Fraunces** variable with the SOFT axis animated (0 → 100) on hover and during pours, so the letterforms "soften" as liquid touches them. Weight 300–500.
- Text/UI: **Inter Tight** 400/500.
- Data: **JetBrains Mono**.
- Optional liquid headline effect: headings can be revealed by a milk fill rising inside the letters (SVG mask), used once per page.

### Texture and imagery
- **Shader milk**: an SDF metaball shader with a soft Lambert body (`--nl-milk` to `--nl-cream`), a narrow specular highlight (`--nl-skin`) and a subtle 2px meniscus edge (`--nl-meniscus`). Light comes from the top-left in every scene.
- **Photographed milk**: real milk-pour photography or the generated B1–B4 ribbons and crowns for chapters 09 and 15. A splash is crisp and controlled: a crown, never a puddle.
- **Refraction**: on images inside a liquid blob, a 2–4px displacement map (SVG `feDisplacementMap`), static on mobile.
- No liquid ever runs down the page or drips off text.

### Iconography
Rounded 1.75px line icons whose terminals are small round "droplets". Icons morph between states with path interpolation (flubber or equivalent).

### Grid
12 columns, margins 6vw. Liquid shapes are free-form but always **anchored**: they live in a defined "vessel" area (a section's bottom 40%, a button's bounding box, the cursor's 120px radius) and never cover body text.

## 4. Motion & interaction language
- **Physics, not easing.** Liquid moves with spring physics tuned to milk's thickness: stiffness 120, damping 22, mass 1.4 (slow and heavy, no wobble past one cycle). Non-liquid UI keeps the brand easings: reveals 600ms `cubic-bezier(.16,1,.3,1)`, scenes 1200ms `cubic-bezier(.65,0,.35,1)`.
- **Transitions ("the pour" and "the fill").** Between major chapters, milk pours from the top-right in a single ribbon (500ms), then fills the screen from the bottom with a gently waving meniscus (700ms, wave amplitude 12px easing to 0). The next chapter appears *in* the milk and the surface drops away. Total 1200ms. Used at most three times on the home page (into 02, into 08, into 15).
- **Section edges.** Light-to-dark chapter boundaries are a live meniscus line that ripples once (amplitude 6px, 900ms) as you cross it.
- **Cursor.** Default: an 18px milk drop with a faint meniscus edge and a highlight, trailing two smaller droplets that merge into it (metaball, 120ms lag). Over links: the drop stretches toward the link (up to 1.4× along the axis) and "wets" the underline, which fills with milk-white on forest or forest on milk. Over buttons: the drop merges into the button outline, which fills like a glass in 320ms. Over the bottle: the drop flattens into a 64px lens labelled "drag · turn". Over text: a thin caret-shaped drop (so reading is not disturbed). On click: a tiny crown (6 droplets, 400ms).
- **Buttons.** The brand underlined label with travelling arrow; the underline is a liquid thread that thickens on hover (1px → 3px) and the arrow head is a droplet.
- **Reduced motion.** No physics, no pours; cross-fades of 300ms; a static drop cursor (or the system cursor).

### The bottle
The bottle stands **on a still milk surface** (B1 top-down plate re-lit in perspective, or a shader plane), with its reflection softly distorted below it and a contact ring of meniscus around its base. Idle: the bottle floats ±6px over 6s and the surface answers with a slow, wide ripple at each low point (amplitude 2px). Pointer tilt ±7°, and the surface ripples where the pointer moves (a 1px ripple under the cursor, desktop only). When 360 frames arrive, drag turns the bottle and a soft wave rolls away from its base in the drag direction. The milk inside the bottle is the render's own; we never animate liquid inside the glass, since that would fake the product.

## 5. Variant worlds — four lights on one milk

The milk stays white in every world. What changes is the ground, the light and the reflection on the milk surface.

| Variant | Ground | Light on milk | Reflection | Motion character |
|---|---|---|---|---|
| MASTER 26 (V1+) | Deep forest `#0A2A20` to `#1F5C45` | Green-tinted ambient, a white key light | Canopy leaf shadows reflected and distorted in the surface | Slowest, deepest ripples (wave period 3s) |
| ROOT 14 (V1) | `#4A0A0F` to `#B3202A` at the horizon | Warm red rim on the milk's edge | A red-earth horizon line reflected | Medium, steady |
| BASE 3 (V2) | `#5A3304` to `#E89A1C` | Amber low sun, long highlight streak across the surface | Sun disc reflected as a wobbling ellipse | Warm, gentle swell |
| ESSENTIAL (V3) | Ivory `#F4EDE2` | Pure soft white light | Nothing but the bottle | Almost still: the calmest surface |

The info panel appears as a soft-edged milk "pool" panel (a rounded rectangle with a meniscus edge) at columns 9–12. It contains V-CODE, name, the `desigo.ts` line, price *pending* and descriptors *pending*.

## 6. Page-by-page treatment

1. **Hero.** Cool ground `--nl-ground`. The bottle stands on a still milk surface in the lower third. "MILK FROM THE SOURCE." above, with the SOFT axis easing in on load. "Traceable milk from indigenous Indian cows." CTAs with liquid underlines. Scroll: the surface rises slowly to swallow the hero and the first pour begins.
2. **The bottle becomes the story.** Milk ground turning to forest. The six words surface one at a time from beneath a milk layer (each emerges as the milk drains off it, 700ms), orbiting the pinned bottle.
3. **From cow to bottle.** The milk line is literally liquid: a thin milk stream flows left to right through seven station illustrations (cow, farm, milk, test, chill, plant, bottle), pooling briefly at each station.
4. **Where it begins.** The liquid steps back. Real farm photographs with a single meniscus line as the section edge.
5. **Breeds.** Breed plates on milk; hovering a plate gives it a faint refraction ripple (desktop only). "*Pending approval*" on each.
6. **Traceability.** Forest ground; the route is a milk-filled tube; the pulse is a bead of milk travelling 1.4s per hop through the tube. "Illustrative journey, not live data".
7. **Quality.** The liquid stops completely: a crisp lab-white page with the large "16" and the parameter list. Values "— pending lab confirmation". Stillness signals rigour.
8. **The four milks.** §5 worlds, each entered by a fill transition (first world) and then by a horizontal "slosh" between worlds (the milk surface tilts 6° and resettles, 900ms).
9. **Milk as material.** The style's peak: an interactive milk field (WebGL fluid at low resolution) that the visitor can stir with the cursor or a finger, with ribbons (B2/B3) above. A static photograph on low-power devices.
10. **Heritage.** Gold-rim light on a slow pour from a brass lota into a kulhad (real film or still), with approved heritage copy.
11. **Technology.** Milk as a precise line: thin milk channels on forest, branching and rejoining like the batch and chiller shares in `traceNodes`. "Tradition is the source. Technology protects the journey."
12. **Ghee.** Liquid gold for ghee, *the only non-white liquid in the site*, because ghee is gold. A slow, thick ghee pour beside the jar, three grades linked to their milks, prices *pending*.
13. **Trace your milk.** The input field is a small milk pool; on submit, a droplet travels down a vertical tube through each step. DEMO badge.
14. **Story.** A calm horizontal timeline; only verified 2019 in production.
15. **Final CTA.** The final pour: milk rises around the bottle and drains away to deep forest. "Know where your milk comes from."

### Inner pages
- **/milk**: four bottles on four small milk surfaces; hover sloshes the surface under the chosen one.
- **/milk/[variant]**: the variant's lit surface hero, the 360 viewer with surface waves, facts and "Trace this bottle".
- **/ghee**: the ghee pour hero, then a calm process page.
- **/origin**: photo essays with meniscus section edges.
- **/trace**: the milk-tube map.
- **/technology**: milk channels on forest.
- **/about**: almost no liquid; one meniscus line at the top.
- **/reserve**: the form, and a glass filling up as the visitor completes each step (progress indicator); the return loop shown as a bottle draining and refilling.

## 7. Component variants
`MilkSurface` (shader or image plane with ripples) · `PourTransition` · `FillTransition` · `MeniscusEdge` · `DropCursor` (metaball cursor with states) · `LiquidUnderline` · `LiquidButton` · `MilkTube` (TraceMap) · `StirField` (chapter 09, WebGL fluid) · `GheePour` · `PoolPanel` (info panel) · `FillProgress` (reserve) · `AssetSlot` as a still milk pool naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Milk palette, SOFT-axis type, spring presets | Tokens, physics presets | Milk never tinted; body ≥ 7:1 | none | 3 |
| 2 | Shell (nav, footer, cursor) | Drop cursor, liquid underline | `DropCursor`, `LiquidUnderline` | 60fps on mid Android (degrades to static drop) | none | 4 |
| 3 | Hero + bottle | Bottle on a milk surface | `MilkSurface`, hero | Reflection convincing; label never distorted | Bottle renders, B1 | 5 |
| 4 | Bottle → story | Words surfacing from milk | Chapter 02 | Words readable at every frame | Copy | 3 |
| 5 | Cow → bottle | Liquid milk line | Chapter 03 | Stream synced to scroll; mobile vertical | E1–E7 | 3 |
| 6 | Origin / farm | Meniscus edges | Chapter 04 | Real photos only | Farm photos | 2 |
| 7 | Breeds | Refraction hover | Chapter 05 | Pending labels; no refraction on mobile | D1–D6 | 2 |
| 8 | Traceability map | Milk tube + bead | `MilkTube` | Keyboard nodes; DEMO label | `traceNodes` | 3 |
| 9 | Quality | Still lab page | Chapter 07 | Zero liquid effects | Lab approval | 2 |
| 10 | Four worlds + 360 | Four lights, slosh transitions | Chapter 08 | Milk white in all four; slosh ≤ 900ms | A, C-set | 5 |
| 11 | Heritage | Lota-to-kulhad pour | Chapter 10 | Real footage or still | Pour footage | 2 |
| 12 | Technology | Milk channels | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Ghee pour | Chapter 12 | Gold only for ghee; prices pending | Ghee pour footage | 3 |
| 14 | Trace-your-milk demo | Droplet journey | Chapter 13 | DEMO visible; works without WebGL | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Slosh on hover, still on touch | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Liquid restrained on evidence pages | Photos | 3 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Fill progress accessible (`aria-valuenow`) | Reserve rules | 3 |
| 18 | Mobile pass | Static-first liquid | Mobile layouts | No WebGL fluid on mobile; image surfaces | none | 3 |
| 19 | A11y + reduced motion | Still milk | Static compositions | No pours, no physics; system cursor option | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | One WebGL context; shader ≤ 2 ms/frame on desktop; LCP < 2.5s | all | 4 |

Total ≈ 61 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **Real pour footage** (commissioned studio shoot, high-speed): milk into a glass, milk into a kulhad from a brass lota, ghee pouring from a ladle, a milk crown. 4K, 120fps or higher, on black and on milk-white backgrounds.
- Confirmation that DESIGO® is comfortable with "milk as interface" (some brands avoid splashes as wasteful). We propose: no puddles, no spills, only controlled pours and crowns.

### Images to generate (illustration/backdrop only; save under `web/public/desigo/styles/new-liquid/`)
Append the house-style tail. No text, no logos, no bottles. Milk always pure creamy white.

| # | File | Size | Prompt |
|---|---|---|---|
| NL1 | `hero-surface.png` | 3200×2000 + 1400×2400 | Perfectly still surface of fresh whole milk seen at a low angle, creamy white with a soft glossy highlight, one slow wide ripple ring at the centre where an object would stand, cool pale grey-green background, studio light from upper left, empty centre |
| NL2 | `meniscus-wave.png` (transparent) | 3600×800 | Side view of a gently waving milk surface edge, creamy white with a thin soft shadow line, isolated on transparent background |
| NL3 | `surface-master-26.png` | 3200×2000 | Still white milk surface reflecting a deep green forest canopy #1F5C45 and #0A2A20 in soft distortion, white key light, empty centre |
| NL4 | `surface-root-14.png` | 3200×2000 | Still white milk surface at dusk reflecting a crimson #B3202A horizon line, warm red rim light on the milk edge, empty centre |
| NL5 | `surface-base-3.png` | 3200×2000 | Still white milk surface reflecting a low amber #E89A1C sun as a soft wobbling ellipse, long golden highlight streak, empty centre |
| NL6 | `surface-essential.png` | 3200×2000 | Perfectly calm white milk surface in soft ivory #F4EDE2 light, no reflections, minimal, empty centre |
| NL7 | `ghee-pour.png` (transparent) | 2400×3000 | Slow thick golden ghee pouring from a small brass ladle in a smooth ribbon, warm light, isolated on transparent background |
| NL8 | `droplet-crown.png` (transparent) | 2000×2000 | Small elegant milk crown splash with six round droplets, crisp, white, studio light, transparent background |

## 10. Performance, accessibility and mobile
- One WebGL context for the whole page, reused by each liquid scene. The fluid simulation in chapter 09 runs at quarter resolution and pauses off-screen.
- Device tiering: on low-memory devices (`navigator.deviceMemory ≤ 4`) or reduced data, all liquid becomes images and CSS (gooey SVG filter only on the cursor, or none).
- The cursor drop is purely decorative; focus states are clear rings in `--nl-green`, never just a liquid effect.
- Text is never displaced or refracted. Refraction applies only to images.
- Reduced motion: no pours, fills or physics; static surfaces; standard cursor.
- Mobile: no custom cursor; touch creates a single ripple; transitions become 400ms fades with a meniscus line sweep.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Milk is always milk-white.** Variant colour lives in light and ground. The only exception is gold ghee in the ghee chapter.
2. **Controlled liquid only.** No puddles, spills, drips down text or splashes on people. Crowns and ribbons, never mess.
3. **Heavy, slow physics.** Milk is thick: no jelly wobble, no bounce, no cartoon blobs.
4. **Three pours maximum** on the home page. A transition that repeats becomes a gimmick.
5. **Stillness for evidence.** Quality and Trace-your-milk results are still and crisp.
6. Never animate liquid inside the real bottle render.
7. Copy stays factual: no "pure", "creamy goodness" or texture claims beyond the approved lines.

**Risks**: mess or waste associations, a slimy feel, mobile performance. Mitigation: a real pour shoot, heavy physics presets, device tiering, and the three-pour rule.

**Best used for:** the sitewide interaction layer (cursor, buttons, transitions), Milk as Material (09), the final CTA (15) and the four-milk world transitions.
