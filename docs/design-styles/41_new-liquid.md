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
| `--nl-green` | `#1E7A68` | Links on milk surfaces and focus (4.4:1 on `--nl-ground`, so links on the ground use `--nl-forest`) |
| `--nl-gold` | `#C8A96B` | Warm rim light on milk in the ghee and heritage chapters |
| `--nl-ink` | `#171918` | Text |
| `--nl-ink-muted` | `#5C5A52` | Muted text (5.8:1 on ground) |

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
Append the house-style tail. No text, no logos, no bottles. Milk always creamy white.

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: physics, palette and interaction language were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, a portrait hero, a trace prompt, a texture and negatives. Added. Fixed: green `#1E7A68` links are only 4.4:1 on the cool ground `#E9ECE8`, so links on that ground are forest (green stays for links on milk and for the focus ring); "pure" removed from the image note in §9.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | Forest: primary CTA, dark chapters (milk on forest) | 10.5:1 on bg; milk on forest is the hero contrast |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk on forest | 11.3:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green: links on milk, focus ring | 4.4:1 on bg below 4.5:1 on the cool ground, so green links appear only on milk surfaces (4.7:1); on the ground links are forest. Focus ring use is fine (≥ 3:1). |
| Accent | --c-accent | `#C8A96B` | Gold rim light on milk in ghee and heritage chapters | 1.9:1 on bg; warm rim light on milk (ghee, heritage); decorative only |
| Background | --c-bg | `#E9ECE8` | Cool page ground so white milk reads (`--nl-ground`) | — |
| Surface | --c-surface | `#F7F4EC` | Milk: pool panels, inputs (`--nl-milk`) | text on surface 16.1:1 |
| Text | --c-text | `#171918` | Ink (`--nl-ink`) | 14.8:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions and labels (new token `--nl-ink-muted`) | 5.8:1 on bg, 6.3:1 on surface |
| Line | --c-line | `#E2D8C3` | Meniscus shadow line (`--nl-meniscus`), decorative | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#0B3B32` | Verified / pending dotted underline / forest DEMO label (always still, no liquid effects) | 6.6 / 6.5 / 10.5 :1 on `#E9ECE8` |

Focus ring: `--c-focus` `#1E7A68` (4.4:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Ground `#0A2A20` → `#1F5C45`; green ambient + white key; canopy reflected in the milk; slowest ripples (3 s) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Ground `#4A0A0F` → `#B3202A` at horizon; warm red rim on the milk edge; steady ripples |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Ground `#5A3304` → `#E89A1C`; amber low sun, long highlight streak; gentle swell |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Ivory `#F4EDE2` ground; soft white light; almost-still surface |

Dark-chapter inversion: forest chapters (end of 02, 06, 11, final CTA footer) use `#0B3B32` as ground with milk `#F7F4EC` text (11.3:1), muted `#B9C4BE`, links milk with underline, focus `#7FE0B8`; the milk stays white and becomes the hero contrast; the logo loop renders white. **The liquid is always milk-coloured** (gold only for ghee).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 300–500, opsz 144, SOFT 0 → 100 (animated) | clamp(3rem, 1.4rem + 7vw, 9rem) | 0.92 | −0.015em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 72, SOFT 50 | H1 clamp(2.4rem, 1.5rem + 3.4vw, 5rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.02 | −0.005em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem | 1.4 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 / 500 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: Fraunces' SOFT axis lets letterforms visibly soften when liquid touches them; Inter Tight stays rigid so reading is never disturbed.

### 12.3 Layout & surfaces
- **Grid:** 12 columns (gutter 24 px, 16 px mobile), margins 6vw, max-width 1440 px; liquid is always anchored in a 'vessel' area (a section's bottom 40%, a button's bounding box, the cursor's 120 px radius) and never covers body text
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 4 px (badges) · md 24 px (pool panels, inputs: soft liquid edge) · lg 999 px (drop cursor, droplets)
- **Border style:** no hard borders on liquid; edges are a 2 px meniscus line `#E2D8C3` plus a 1 px `#FFFDF8` highlight on the inner top edge
- **Shadow / elevation:** pool panels `0 1px 0 #FFFDF8 inset, 0 10px 30px -12px rgba(23,25,24,.18)`; the bottle has a softly distorted reflection below and a meniscus contact ring
- **Texture / overlay:** SDF metaball shader milk (Lambert `#F7F4EC` → `#EFE6D2`, specular `#FFFDF8`, meniscus `#E2D8C3`), light from top-left everywhere; 2–4 px refraction on images only (never text); static images on low-power devices

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Forest label (Inter Tight 600, 13 px, +0.16em, uppercase) on a 1 px liquid-thread underline with a droplet arrow head; 48 px tall, padding 14 px 0. **States:** default forest label + thread · hover the thread thickens 1 → 3 px and the cursor drop merges into the label's outline, which fills like a glass (320 ms) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active fill completes: milk label on a forest fill · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a droplet falls into the underline on a 1 s loop, `aria-busy`. **Motion:** spring stiffness 120 / damping 22 / mass 1.4. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Ink label, 1 px thread underline, droplet arrow; 48 px tall. **States:** default ink label · hover thread thickens 1 → 2 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading droplet loop. **Motion:** same spring. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest link on the ground, green link on milk; 1 px underline. **States:** default underline · hover the underline 'wets' from the cursor side: fills forest on milk or milk on forest (300 ms) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active fully filled · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 300 ms `--ease-out`. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px hit area, rounded 1.75 px icon with droplet terminals; menu icon = two lines that merge into one droplet, then ×. **States:** default icon · hover the drop cursor merges into the icon outline · focus-visible 2 px `#1E7A68` ring, 3 px offset · active a small crown of 6 droplets (400 ms) · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** path morph 300 ms (flubber). **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px bar, transparent on the ground then `#E9ECE8` at 92% + 8 px blur; links Inter Tight 500 13 px uppercase in forest; a 1 px meniscus line beneath ripples once when it crosses a light/dark chapter edge. Mobile: the menu fills the screen with milk from the bottom (700 ms meniscus fill) revealing Fraunces 2.25rem links. **States:** default forest links · hover underline wets · focus-visible 2 px `#1E7A68` ring, 3 px offset · active current page: 3 px milk thread beneath · disabled n/a · loading n/a. **Motion:** fill 700 ms, wave amplitude 12 px → 0. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 18 px milk drop with a faint meniscus edge and highlight, trailing two droplets that merge into it (metaball, 120 ms lag); over body text it becomes a thin caret-shaped drop; a click makes a 6-droplet crown (400 ms). **States:** default 18 px milk drop · hover drop stretches toward the link up to 1.4× along the axis · ROTATE drop flattens into a 64 px lens reading "drag · turn" · EXPLORE 48 px drop reading "explore"; images beneath refract 2 px · ENTER drop merges into the button outline, which fills (320 ms) · VIEW 40 px lens reading "view" · TRACE a milk bead reading "trace" that slides into the tube on click. **Touch fallback:** no custom cursor; a touch makes a single ripple; the bottle shows a "Drag to turn" hint; WebGL fluid off on mobile. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — PoolPanel: milk `#F7F4EC`, radius 24 px, 2 px meniscus edge, 1 px top highlight, padding 32 px (24 px mobile). **States:** default still pool · hover surface ripples once (2 px) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading panel fills from the bottom (700 ms) as content arrives. **Motion:** spring presets. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Rounded 4 px label, Inter Tight 600 11 px uppercase. **Pending verification**: earth-ink `#6B4C2A` + dotted underline on the claim. **DEMO · not live data**: forest fill with milk text; badges never ripple or drip (evidence stays still). **States:** default still label · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fade 240 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Milk pool field: 56 px, `#F7F4EC`, radius 24 px, meniscus edge; bottle ID in JetBrains Mono 18 px; label above; demo ID prefilled; error text earth-ink + icon. **States:** default still pool · hover edge ripples once · focus-visible 2 px `#1E7A68` ring, 3 px offset · active meniscus thickens to 3 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a droplet travels down a vertical tube through each step; the result itself is still and crisp. **Motion:** droplet 1400 ms per step. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — MeniscusEdge: a live 2 px meniscus line between chapters that ripples once (amplitude 6 px, 900 ms) as you cross it. **States:** default still line · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** ripple 900 ms. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Mono chapter number, Fraunces title revealed once per page by a milk fill rising inside the letters (SVG mask), SOFT 0 → 100 as it fills; one-line intro. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fill 700 ms. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — PoolPanel at columns 9–12: V-code (mono), name in Fraunces H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending* with dotted underline. **States:** default still · hover descriptor shows its source note · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading pool fill. **Motion:** rows 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle standing on a still milk surface (B1 plate or shader plane) with a softly distorted reflection and a meniscus contact ring; liquid is never animated inside the real glass. **States:** default idle float ±6 px over 6 s; the surface answers with a slow wide 2 px ripple at each low point · hover pointer tilt ±7°; a 1 px ripple under the pointer (desktop) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active drag turns the viewer and a soft wave rolls away from the base in the drag direction · disabled n/a · loading still milk-surface image + `AssetSlot` pool. **Motion:** spring presets. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — MilkTube: 6 px milk-filled tube on forest; nodes are 18 px milk pools along it; label Inter Tight 13 px + mono ID. **States:** default still pools · hover pool ripples · focus-visible 2 px `#1E7A68` ring, 3 px offset · active a bead of milk travels 1400 ms per hop and the node pool fills · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading tube fills progressively. **Motion:** hop 1400 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** rounded 1.75 px line icons whose terminals are small round droplets; states morph by path interpolation
- **Illustration technique:** shader milk (SDF metaballs) for UI; real high-speed pour photography or B1–B4 renders for chapters 09 and 15; crowns and ribbons only, never puddles
- **Photo treatment:** clean neutral grade so milk stays white; refraction displacement only on images inside blobs (static on mobile); real farm photos meet a single meniscus section edge

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | non-liquid reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes |
| `--spring-milk` | stiffness 120, damping 22, mass 1.4 | all liquid motion (signature: heavy, no wobble past one cycle) |
| `--dur-micro` | 320 ms | button fill, link wet |
| `--dur-reveal` | 600 ms | reveals |
| `--dur-scene` | 1200 ms | pour (500) + fill (700) |
| `--ripple` | 6 px, 900 ms | meniscus edge crossing |
| `--slosh` | 6° tilt, 900 ms | between variant worlds |
| `--float` | ±6 px / 6000 ms | bottle idle |
| `--hop` | 1400 ms | milk bead per node |
| `--scrub` | 1 | scroll-linked surface rise |

- **Signature transition:** the pour and the fill: a milk ribbon pours from top-right (500 ms), then fills the screen from the bottom with a meniscus wave (700 ms, 12 px → 0); at most three times on the home page (into 02, 08, 15)
- **Scroll behaviour:** the hero surface rises slowly to swallow the hero; chapter 09 offers a stirrable WebGL milk field at quarter resolution, paused off-screen
- **Reduced-motion fallback:** no physics, pours or fills; 300 ms cross-fades; static surfaces; static drop or the system cursor

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _fresh whole milk always creamy white, soft glossy highlights, thick slow controlled liquid, cool pale grey-green #E9ECE8 or deep forest #0B3B32 grounds, studio light from upper left, calm, premium, high-speed photography realism, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| NL1 | `web/public/desigo/styles/new-liquid/hero-surface.png` | 3200×2000 (16:10) | No | Perfectly still surface of fresh whole milk seen at a low angle, creamy white with a soft glossy highlight, one slow wide ripple ring at the centre where an object would stand, cool pale grey-green background, empty centre | spills, splashes, drips, coloured milk, objects | Hero desktop |
| NL2 | `web/public/desigo/styles/new-liquid/hero-surface-portrait.png` | 1400×2400 (7:12) | No | Still milk surface in portrait, low camera, the surface in the lower third with one wide ripple ring, cool pale grey-green background above, empty middle | spills, splashes, coloured milk | Hero mobile |
| NL3 | `web/public/desigo/styles/new-liquid/surface-master-26.png` | 3200×2000 + 1400×2400 | No | Still white milk surface reflecting a deep green forest canopy #1F5C45 and #0A2A20 in soft distortion, white key light, empty centre | green milk, leaves floating | MASTER 26 world |
| NL4 | `web/public/desigo/styles/new-liquid/surface-root-14.png` | 3200×2000 + 1400×2400 | No | Still white milk surface at dusk reflecting a crimson #B3202A horizon line, warm red rim light on the milk edge, empty centre | pink milk, red liquid, blood | ROOT 14 world |
| NL5 | `web/public/desigo/styles/new-liquid/surface-base-3.png` | 3200×2000 + 1400×2400 | No | Still white milk surface reflecting a low amber #E89A1C sun as a soft wobbling ellipse, long golden highlight streak, empty centre | orange milk, flavoured milk | BASE 3 world |
| NL6 | `web/public/desigo/styles/new-liquid/surface-essential.png` | 3200×2000 + 1400×2400 | No | Perfectly calm white milk surface in soft ivory #F4EDE2 light, no reflections, minimal, empty centre | ripples, objects | ESSENTIAL world |
| NL7 | `web/public/desigo/styles/new-liquid/milk-tube-route.png` | 3600×2000, transparent | Yes (real alpha) | Top-down view of a thin smooth channel of white milk flowing through eight small round still milk pools arranged as a gentle route, crisp edges, soft highlights, isolated on transparent background | spills, splashes, labels, numbers | Traceability (ch. 06), Trace-your-milk |
| NL8 | `web/public/desigo/styles/new-liquid/milk-macro.png` | 2048×2048, seamless | No | Seamless macro texture of a still milk surface with an extremely subtle creamy sheen, flat even light | bubbles, ripples, seams | Pool panel / input fill texture |
| NL9 | `web/public/desigo/styles/new-liquid/meniscus-wave.png` | 3600×800, transparent | Yes (real alpha) | Side view of a gently waving milk surface edge, creamy white with a thin soft shadow line, isolated on transparent background | splash, droplets flying | Fill transition edge |
| NL10 | `web/public/desigo/styles/new-liquid/droplet-crown.png` | 2000×2000, transparent | Yes (real alpha) | Small elegant milk crown splash with six round droplets, crisp, white, studio light, transparent background | puddle, mess, spray | Click crown, final CTA |
| NL11 | `web/public/desigo/styles/new-liquid/ghee-pour.png` | 2400×3000, transparent | Yes (real alpha) | Slow thick golden ghee pouring from a small brass ladle in a smooth ribbon, warm light, isolated on transparent background | jar, drips on surfaces, oil splatter | Ghee (ch. 12) — the only non-white liquid |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/41_new-liquid.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/new-liquid/
- [ ] Milk is milk-white in every world; gold liquid appears only in the ghee chapter
- [ ] At most three pour/fill transitions on the home page; Quality and trace results are still
- [ ] One WebGL context; device tiering turns all liquid into images on `deviceMemory ≤ 4`
