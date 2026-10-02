# 25 · Synthwave — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only, no build until a direction is approved.
Shared rules: IA from `docs/website/01`, tokens from `02`, motion script from `03`, assets from `04`, copy only from `web/src/content/desigo.ts`. Claims marked *pending* stay visibly pending (dotted underline). DESIGO® is always written with ®.

---

## 1. Style essence

Synthwave is a 2010s revival of 1980s night-drive aesthetics: a perspective grid running to a horizon, a striped setting sun, chrome type, neon edges and a VHS haze. It is nostalgia for a future that never arrived.

Reference points:
1. **Outrun / the Drive (2011) poster era**: grid floor, sun disc, magenta and cyan.
2. **Kavinsky and Miami Nights 1984 album covers**: chrome lettering, horizon glow, palm silhouettes.
3. **Stranger Things title sequence**: one restrained neon wordmark on black, slow push-in. This is the quietest form of the style and the one we take from.

## 2. Fit for DESIGO® — score 1.5 / 5 (whole site) · 3 / 5 (one campaign chapter)

**Where it fights the brand.** DESIGO® is about soil, cows, glass, cold milk at dawn and honest records. Synthwave is artificial, nocturnal and ironic. Magenta-on-purple has no link to milk, and neon makes food look synthetic. Whole-site Synthwave would undercut the "traceable, from the source" promise and read as a novelty drink.

**Where it works.** DESIGO® works through the night: collection, chilling and delivery start before sunrise (exact times *pending ops confirmation*). A single chapter, or a campaign page called **"Before the sun"** (05:00 → 07:00), can use a re-tuned Synthwave: the grid becomes the trace network, the sun becomes the dawn over the Thar, and the neon becomes the cold-chain signal colour. Read this way, the style tells something true.

**Recommendation.** Do not ship Synthwave as the site language. Use it for (a) Chapter 11 Technology as an alternate skin, or (b) a standalone `/before-the-sun` campaign page about the night cold chain and early-morning delivery. The 20-phase plan below still covers the whole site for completeness, and phases 3, 8, 12 and 14 are the ones worth building.

## 3. Art direction

### Palette ("Thar night", re-tuned away from purple and pink)
| Token | Hex | Role |
|---|---|---|
| `--sw-night` | `#06110F` | Base sky (forest pushed toward black) |
| `--sw-sky-2` | `#0B3B32` | Upper horizon band (brand forest) |
| `--sw-horizon` | `#123F4A` | Teal haze at the horizon line |
| `--sw-grid` | `#7FE0B8` | Grid lines and data glow (brand `--signal`) |
| `--sw-sun-top` | `#F3D9A0` | Sun top (milk-gold) |
| `--sw-sun-mid` | `#E89A1C` | Sun middle (BASE 3 amber) |
| `--sw-sun-low` | `#B3202A` | Sun bottom (ROOT 14 red) |
| `--sw-chrome` | `#F7F4EC → #C8A96B` | Chrome gradient for display type (milk → gold) |
| `--sw-text` | `#F7F4EC` | Body text on night |
| `--sw-muted` | `#8FA8A0` | Secondary text, ≥ 4.5:1 on `--sw-night` |

Magenta is banned. If a campaign needs one cool accent, use `#5FB3C9` (dawn cyan), and only for the glow edge.

### Typography
- Display: **Syne** (OFL) ExtraBold, tracked −0.02em, filled with the chrome gradient through `background-clip:text`, with a 1px `#7FE0B8` inner rule on a separate layer. Use it only for chapter titles of 1–3 words.
- Editorial counterpoint: **Fraunces** italic 300 for one sentence per chapter. This keeps DESIGO® warm.
- UI and text: **Inter Tight** 400/500 with uppercase labels at +0.18em.
- Data: **JetBrains Mono** for times (05:42), temperatures and IDs, styled like a dashboard readout.
- Avoid: Monoton, Neon Tubes, Streamster and any script "retro" fonts. They read as cheap immediately.

### Texture and imagery
- A 2% scanline overlay (`repeating-linear-gradient`, 3px), switched off on body-text blocks.
- Bloom: CSS `filter: drop-shadow(0 0 12px #7FE0B880)` on grid lines only, never on photos.
- Photography: real DESIGO® night and dawn photos (milk collection under headlamps, chiller lights, the delivery rider at 05:30), graded teal-shadow / gold-highlight. Never neon-tint a cow or the milk itself.
- Silhouettes: khejri trees and a Thar dune line replace palms. They are drawn as a flat `#06110F` layer against the sun.

### Iconography
Monoline 1.5px icons in `--sw-grid` on a 24px grid with square caps. The seven verbs (ORIGIN … DELIVER) get one glyph each, drawn as if they were wireframe.

### Grid
12 columns, 5vw gutters on desktop and 16px on mobile. The **visual** grid is the perspective floor: a CSS 3D plane `rotateX(72deg)` with lines every 64px that scroll toward the viewer with page scroll. Content sits on the normal 12-column layout above the horizon line, which is fixed at 58% of viewport height.

## 4. Motion and interaction language

- **Scroll.** The floor grid translates on `background-position-y` linked to scroll (1px scroll = 0.6px grid). The sun rises from 0% (below the horizon) to 40% exposed across a chapter, so dawn arrives as you read.
- **Easing.** Reveals use `cubic-bezier(.16,1,.3,1)` at 600ms. Scenes use `cubic-bezier(.65,0,.35,1)` at 1200ms. No glitch jitter except a single 120ms chromatic split on the chapter-title entrance, and none under reduced motion.
- **Cursor.** A 10px ring in `#7FE0B8` with a 1px trail of 6 points that fade over 300ms. Hovering a link turns it into a 28px horizon line with arrow; over the bottle it becomes `DRAG ⟲`; over map nodes it becomes a crosshair.
- **Hover.** Links draw a neon underline left→right in 240ms. Primary button: the 1px frame draws itself and the glow rises from 0 to 8px.
- **Transitions.** Between chapters a horizontal "scan" wipe at 900ms. Inside the campaign page, sections hand off by the sun's height.

### The bottle
The bottle stands on the grid floor at the horizon. Below it a **reflection** at 25% opacity (flipped, masked with a linear gradient) is distorted by a 2px sine ripple on the grid. A rim light in `--sw-sun-mid` comes from behind. Pointer tilt is ±6° (gentler than the default). When 360 frames arrive, scroll scrubs frames 0→71 as the sun rises. Until then the 2D render gets the default ±25° skew and a sheen sweep, never a fake spin.

## 5. The hero bottle and the four variant worlds

Each variant is a different **hour** on the same horizon:

| Variant | Hour | Sky | Sun | Grid | Floor note |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | 04:30 · deep night | `#0A2A20` | barely risen, `#1F5C45` → `#D9E8DF` rim | `#7FE0B8` | dense grid (32px), slow |
| ROOT 14 (V1) | 05:15 · red first light | `#4A0A0F` → `#06110F` | `#B3202A` disc | `#F3D9D6` at 40% | standard grid |
| BASE 3 (V2) | 06:00 · amber dawn | `#5A3304` | `#E89A1C` full disc | `#F8E4C2` at 35% | wider grid (96px) |
| ESSENTIAL (V3) | 06:45 · ivory morning | `#4D4130` → `#F4EDE2` | ivory haze, no disc | `#CDB89A` at 25% | grid fades out; daylight wins |

So the four milks become one sunrise. The info panel is a frosted dashboard card (`rgba(6,17,15,.72)`, 1px `#7FE0B8` at 30%) showing V-CODE, name, price (*pending*) and the official descriptors (*pending*).

## 6. Page-by-page treatment

### Home (campaign skin, 15 chapters)
1. **Hero.** Night sky, sun 0% exposed, the bottle on the horizon with its reflection. Headline in Fraunces: "Milk from the source." A mono line beneath: `05:00 · JODHPUR` (time and city both *pending*; the time stays illustrative until operations confirm it). CTAs as neon-underline links.
2. **Bottle becomes the story.** Six words orbit on the grid floor as wireframe labels that rise into place. Sky shifts night → forest.
3. **Cow to bottle.** The horizontal track becomes a night road. Seven stations sit as roadside markers with a glowing milk line along the road edge. Real photos inside the markers.
4. **Farm.** Breaks the style on purpose: real dawn photography, full-bleed, with only the horizon line overlaid. This proves the farm is real.
5. **Breeds.** Portraits on dark plates, graded to dawn light, with mono captions. Breed names *pending approval*.
6. **Traceability.** The style's best moment. The trace map *is* the grid. Nodes are glowing intersections, the path pulses at 1.6s per hop. Label "Illustrative journey — not live data".
7. **Quality.** A dashboard of 16 tiles for the screen parameters, each lighting in sequence. Values read `— pending lab confirmation`.
8. **Four milks.** The four hours from §5.
9. **Milk as material.** The milk ribbon becomes a light trail across the horizon (canvas, 1 ribbon, `#F7F4EC` core with a gold edge).
10. **Heritage.** The sun fully up. Fades to paper `#EDE4D0` and the style switches off. The contrast is deliberate: heritage is daylight.
11. **Technology.** Grid at full intensity: "Tradition is the source. Technology protects the journey." The seven verbs appear as neon labels on the floor.
12. **Ghee.** Warm amber sun, jar silhouetted, folk border redrawn in 1px gold line.
13. **Trace your milk.** A terminal-style input with a DEMO badge in `#E89A1C`.
14. **Story.** The timeline as mile markers on the road. Only the verified 2019 item shows in production; pending items are hidden.
15. **Final CTA.** Sunrise complete, grid dissolves into milk white: "Know where your milk comes from."

### Inner pages
- **/milk**: the four hours as a horizontal strip; tapping one scrolls the sun.
- **/milk/[variant]**: a full-height horizon in that variant's hour, the Bottle360Viewer on the floor with reflection, the facts dashboard, and "Trace this bottle".
- **/ghee**: amber dusk (ghee is made slowly), three jars on the horizon.
- **/origin**: style off. Documentary daylight, with only nav and footer in night skin.
- **/trace**: full grid map, keyboard-navigable nodes.
- **/technology**: the seven verbs as seven "levels", each a short scene.
- **/about**: style off (paper editorial); the founding year sits on a single horizon card.
- **/reserve**: a night-delivery form with a time-slot picker styled as a clock dial (05:00–07:00, *pending ops confirmation*).

## 7. Component variants
- `DesigoNav`: transparent on night with a 1px bottom rule in `#7FE0B8` at 20%. RESERVE gets a neon frame.
- `DesigoCursor`: ring plus trail (above).
- `AmbientBackground` → `HorizonScene` (sky gradient, sun disc with 6 horizontal cut stripes, perspective floor, dune silhouette).
- `Bottle` → `BottleOnHorizon` (reflection, rim light).
- `Bottle360Viewer`: frame index bound to sun height in campaign mode.
- `TraceMap` → `GridTraceMap` (nodes at grid intersections).
- `QualityPanel` → `DashboardTiles`.
- `JourneyTrack` → `NightRoad`.
- `TraceYourMilk` → `TerminalLookup`.
- `CTASection` → `Sunrise`.
- `AssetSlot`: dark plate with a dashed neon outline naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Thar-night palette and font stack | `synthwave.css` tokens, chrome-text utility, type specimen page | No magenta; all text ≥ 4.5:1; Syne only ≤ 3 words | Brand colours confirmed (C) | 2 |
| 2 | Grid and shell | Horizon scene, nav, footer, cursor | `HorizonScene`, nav skin, cursor ring+trail | Horizon locked at 58vh; 60fps grid scroll on mid-range Android | none | 3 |
| 3 | Hero and bottle | Bottle on horizon with reflection | `BottleOnHorizon`, sun rise 0–15% | Reflection masked cleanly; tilt ±6°; no fake spin | Transparent renders (have) | 3 |
| 4 | Bottle → story | Orbit words on the grid floor | Chapter 02 | Each word readable for ≥ 30vh of scroll | Approved one-liners | 2 |
| 5 | Cow → bottle | Night-road journey | `NightRoad` horizontal / vertical | Line draws in sync with scroll; mobile vertical | Photos B4, B8 | 4 |
| 6 | Origin / farm | Daylight break chapter | Chapter 04 with photo parallax | Photos untinted; AssetSlots where missing | Photos B1, B2 | 2 |
| 7 | Breeds | Dawn-graded portraits | Chapter 05 | Only confirmed breeds; "pending" shown | Breed portraits B3 | 2 |
| 8 | Trace map | Grid-as-map | `GridTraceMap` | Nodes are buttons; panel opens by keyboard; DEMO label | traceNodes copy | 4 |
| 9 | Quality / lab | 16-tile dashboard | `DashboardTiles` | No invented values; pending readout | Lab values approval | 2 |
| 10 | Four worlds + 360 | Four hours of sunrise | Chapter 08, variant panel | Each hour distinct; 360 frames scrub when present | 360 sequences A | 5 |
| 11 | Heritage | Style-off daylight chapter | Chapter 10 paper | Transition night→paper ≤ 1.2s, no flashes | Line art | 2 |
| 12 | Technology | Full-intensity grid | Chapter 11 | Seven verbs in public vocabulary only | none | 3 |
| 13 | Ghee | Amber dusk | Chapter 12 | Prices marked pending | Ghee jar render, label art | 2 |
| 14 | Trace demo | Terminal lookup | `TerminalLookup` | DEMO badge always visible; demo IDs only | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Inner product pages | 5 routes | Viewer works by drag, keys, touch | 360 sequences A | 4 |
| 16 | /origin, /trace, /technology | Inner story pages | 3 routes | Origin style-off; trace map reused | Photos B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Only verified milestones; reserve slots marked pending | Ops confirmation | 3 |
| 18 | Mobile pass | Separate mobile composition | Mobile horizon at 52vh, vertical road | No horizontal scroll at 360px; grid at half density | none | 3 |
| 19 | A11y + reduced motion | Calm, readable fallback | Static sky gradient, scanlines off | WCAG 2.2 AA; reduced motion = no grid scroll, no glow pulse | none | 2 |
| 20 | Perf, QA, handover | Ship-ready | Lighthouse report, QA sheet, handover doc | LCP < 2.5s 4G; CLS < 0.05; JS < 180 KB gz for chapter | all above | 3 |

Total ≈ 58 days whole site. Campaign-page-only (phases 1–3, 8, 10, 12, 14, 18–20) ≈ 30 days.

## 9. Assets needed from DESIGO®
- 360 sequences for all four bottles (A). The reflection looks far better with real rotation.
- **Night and dawn photography**: collection by headlamp, the chiller at night, a rider at 05:30, the Thar horizon at first light (3:2, ≥ 2400px, RAW if possible for grading).
- Confirmation of actual collection and delivery times before any time appears in copy.
- Vector wordmark (C) for a chrome-gradient treatment that does not alter its shape.

## 10. Performance, accessibility and mobile
- The grid is one CSS gradient on a transformed plane, not WebGL. The sun is SVG. Bloom uses `drop-shadow` on ≤ 3 elements per viewport.
- Pause the grid animation off-screen (IntersectionObserver).
- Dark backgrounds: test text on `#06110F` at ≥ 7:1 for body. Neon `#7FE0B8` is decoration and never small text on a light ground.
- Reduced motion: static horizon, no scanlines, no chromatic split, viewer auto-spin off.
- Photosensitivity: no flashing above 3 Hz. Glow pulses are ≥ 1.6s.
- Mobile: horizon at 52vh, bottle 46vh tall, reflection hidden below 400px width to save height.

## 11. Risks, guardrails and keeping it premium

**Premium guardrails**
1. No magenta, no purple, no palm trees, no sunglasses, no cassette or DeLorean props.
2. One neon colour per viewport (`#7FE0B8`); everything else is dawn tones taken from the variant caps.
3. Chrome type is limited to chapter titles. Body copy is always flat Inter Tight.
4. Real photography is never neon-tinted. Milk is always shown its true white.
5. Grain and scanlines stay ≤ 2% opacity and are removed on text.
6. Every Synthwave chapter must end in daylight, so the brand story closes on the farm.
7. Copy stays sincere. No "rad", no "totally", no irony about the product.
8. No claims about freshness times or temperatures until confirmed. Readouts show "pending".

**Risks**: the style looks like an energy drink, neon makes milk look artificial, and it dates quickly. Mitigation: campaign-only, with a fixed end date and the core site in the main direction.

**Best used for:** one campaign page or the Technology chapter, "Before the sun", telling the night cold chain and dawn delivery.

---

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: §3 palette, type and motion were solid but there was no colour-role map, no state colours, no component states, no font packages, no image prompts and no acceptance list. All added. Fonts already OFL (Syne, Fraunces, Inter Tight, JetBrains Mono). Body fix: night-time operations and the hero "05:00" line are now marked pending ops confirmation.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#7FE0B8` | neon frame of primary CTAs, grid lines, active trace path (brand `--signal`) | 12.1:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#06110F` | label on a filled mint chip (pressed / active state) | 12.1:1 on primary |
| Secondary | --c-secondary | `#E89A1C` | sun middle, secondary emphasis, ghee/dusk accents (BASE 3 amber) | 8.3:1 vs bg (body-safe) |
| Accent | --c-accent | `#F3D9A0` | focus ring, sun top, chrome highlight | 13.9:1 vs bg (body-safe) |
| Background | --c-bg | `#06110F` | night sky / page | 17.5:1 with text |
| Surface | --c-surface | `#0B3B32` | dashboard panels at 72% (`rgba(11,59,50,.72)`) over the horizon, upper horizon band | text on surface 11.3:1 |
| Text | --c-text | `#F7F4EC` | body copy, always flat (never chrome) | 17.5:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#8FA8A0` | captions, mono labels, footnotes | 7.6:1 vs bg (body-safe) |
| Line | --c-line | `rgba(127,224,184,.30)` | panel borders, nav rule (20%), hairlines | decorative; meets 3:1 only as a focus indicator when at 100% |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#7FE0B8` / `#F3D9A0` / `#E89A1C` | ok = verified trace step (solid mint node); pending = dotted 1px underline + PENDING tag in dawn gold; DEMO badge filled amber with `#06110F` text | amber badge text `#06110F` on `#E89A1C` = 8.5:1; gold dotted underline is decorative, label stays in --c-text |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | 04:30 deep night: sky `#0A2A20`, barely risen sun with `#1F5C45` → `#D9E8DF` rim, dense 32 px mint grid |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | 05:15 red first light: sky `#4A0A0F` → `#06110F`, `#B3202A` disc, grid `#F3D9D6` at 40% |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | 06:00 amber dawn: sky `#5A3304`, full `#E89A1C` disc, wide 96 px grid `#F8E4C2` at 35% |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | 06:45 ivory morning: `#4D4130` → `#F4EDE2`, ivory haze, no disc, grid `#CDB89A` at 25% fading out |

Dark-chapter inversion: this style *is* dark by default. The inversion runs the other way: Heritage (ch. 10), /origin and /about switch to a daylight paper theme (`--c-bg` `#EDE4D0`, `--c-text` `#1E211F`, `--c-primary` → `#1E7A68`, line → `rgba(30,33,31,.16)`, logo → charcoal). Hour labels on the variant worlds are art direction only and never appear as operational times.

Additional style tokens (kept from §3): `--sw-horizon` `#123F4A` (teal haze), `--sw-sun-low` `#B3202A`, chrome gradient `#F7F4EC → #C8A96B` (display type only), dawn cyan `#5FB3C9` (glow edge only, max one per page). Magenta, purple and pink are banned.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Syne | `@fontsource-variable/syne` (Google Fonts: Syne) | wght 800 | `clamp(3.5rem, 2rem + 7vw, 9rem)` | 0.92 | −0.02em | Upper, 1–3 words; chrome gradient via `background-clip:text` |
| Headline H1–H2 | Syne (H1) · Fraunces Italic (H2 editorial line) | `@fontsource-variable/syne` · `@fontsource-variable/fraunces` | Syne 700 · Fraunces 300 italic, opsz 72 | H1 `clamp(2.6rem, 1.6rem + 4vw, 5rem)` · H2 `clamp(1.8rem, 1.3rem + 2vw, 3rem)` | 1.0 · 1.15 | −0.02em · 0 | H1 upper · H2 sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.65 (dark ground) | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 | `.75rem` | 1.2 | +0.18em | Upper |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 / 500, tabular | `clamp(.8rem, .75rem + .2vw, .9rem)` | 1.4 | +0.04em | Upper for times / IDs |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 400 / 600 | matches body | 1.7 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Syne, Fraunces, Inter Tight, JetBrains Mono and Noto Sans Devanagari are all SIL OFL 1.1; no replacement was needed. Pairing: wide geometric Syne carries the 1980s chrome title, Fraunces italic keeps one warm human line per chapter, Inter Tight does the work.

### 12.3 Layout & surfaces
- Grid: 12 columns, gutter 16 px (mobile) → 5vw (desktop), content max-width 1280 px inside a 1440 px frame; text measure 60ch.
- Horizon: fixed at 58vh (desktop) / 52vh (mobile). Content sits above it; the perspective floor is a CSS plane `rotateX(72deg)` with 64 px line spacing (32 px half-density on mobile).
- Spacing scale (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Section padding 96–128 px desktop, 64 px mobile.
- Radius: `sm 0` (default), `md 2px` (inputs, badges), `lg 4px` (dashboard panels); `pill 999px` only for the cursor ring.
- Borders: 1px `rgba(127,224,184,.30)`; nav bottom rule at 20%.
- Elevation: no drop shadows on UI. Panels use `0 0 0 1px rgba(127,224,184,.3), 0 0 24px rgba(127,224,184,.12)`; bloom `drop-shadow(0 0 12px #7FE0B880)` on grid lines only (≤ 3 elements per viewport).
- Texture: 2% scanline overlay (`repeating-linear-gradient`, 3 px) + static grain, both removed on body-text blocks.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: label + travelling arrow inside a 1px mint frame, 48 px tall, padding 14 px 22 px, radius 0, Inter Tight 500 upper +0.18em. States: default frame at 60% · hover frame draws to 100% clockwise (400 ms) and glow rises 0 → 8 px · focus-visible 2px `#F3D9A0` ring offset 3 px · active fill `#7FE0B8` with `#06110F` label · disabled 30% opacity, no glow, `aria-disabled` · loading arrow becomes a 3-dot mono ellipsis, label kept. Magnetic ≤ 6 px. A11y: native `<button>`/`<a>`, 44 px min target.
- **Secondary button**: underlined label + arrow, no frame, 44 px target. Underline 1px `#F7F4EC` at 40%. States: hover neon underline draws left → right in 240 ms · focus-visible gold ring · active label `#7FE0B8` · disabled 40% · loading underline runs as a scanning segment.
- **Text / arrow link**: inline Inter Tight with 1px underline at 40%; arrow links append `→` that travels 4 px on hover. Hover: underline recolours to mint and draws in 240 ms. Visited not styled. Focus-visible gold ring 2 px.
- **Icon button (incl. menu)**: 40 px square, 1.5 px mint monoline glyph on transparent, 1px frame appears on hover. Menu icon = two horizontal lines that become an X (240 ms). States: hover glow 0 → 6 px · focus-visible gold ring · active filled mint / dark glyph · disabled 30%. `aria-label` always, `aria-expanded` on menu.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: transparent over night, 72 px tall (56 px mobile), 1px bottom rule `rgba(127,224,184,.2)`; logo left, six links centre (Inter Tight label style), RESERVE right in a neon frame. On scroll > 80 px it gains `rgba(6,17,15,.72)` + `backdrop-filter: blur(12px)`. Mobile: menu icon opens a full-screen night sheet with the grid floor static at the bottom, links 32 px Syne, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 10 px mint ring + 6-point fading trail (300 ms) · hover (link) ring stretches into a 28 px horizon line with arrow · ROTATE over the bottle `DRAG ⟲` in mono · EXPLORE over chapters/cards: ring 48 px with `EXPLORE` · ENTER over variant worlds: `ENTER →` · VIEW over photos: `VIEW` · TRACE over map nodes: thin crosshair with node code. Trail disabled in reduced motion. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: dashboard panel: `rgba(11,59,50,.72)` + blur 12 px, 1px mint border at 30%, radius 4 px, padding 24 px (32 px desktop), corner tick marks 8 px. Hover (interactive only): border to 60% + glow 12 px. Focus-visible gold ring. Body text never on the grid floor, always on a panel or the flat sky.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: mono 11 px upper +0.08em, 24 px tall, radius 2 px, 1px border. Pending verification: the claim keeps a 1px dotted `#F3D9A0` underline and a `PENDING` tag (gold border, `#F7F4EC` text). DEMO · not live data: filled `#E89A1C`, `#06110F` text, always visible on trace map, quality tiles and lookup. Tooltip on focus explains why.
- **Input + form field (Trace-your-milk bottle ID)**: terminal style: 56 px tall, `#06110F` field, 1px mint border at 40%, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)` in muted. Prompt glyph `›` and a blinking 1px caret (static in reduced motion). States: hover border 70% · focus-visible border 100% + gold ring · error border `#B3202A` + message below · disabled 40% · loading row of scanning dots. Visible `<label>`; DEMO badge sits beside the label.
- **Divider / ornament**: a 1px horizon line in mint at 30% with a 6 px sun-disc dot centred; chapter breaks use the "scan" wipe line (2 px, 900 ms).
- **Section header (chapter number + title pattern)**: mono chapter number `05 / 15` in muted + 40 px mint rule, then the Syne chrome title (1–3 words) and one Fraunces italic sentence. Left-aligned on desktop, centred on mobile.
- **Product info block (variant name, code, price-pending, size, descriptors)**: dashboard panel: V-CODE (mono, mint), name (Syne 700 upper), size `1 L glass · 900 g` with pending underline, price from `desigo.ts` (e.g. `₹94` for MASTER 26) with dotted pending underline + PENDING tag, descriptors as a mono list each with pending underline, CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: bottle stands on the grid floor at the horizon line; 25% flipped reflection masked by a linear gradient with a 2 px sine ripple; rim light in `#E89A1C` from behind; contact shadow ellipse `rgba(0,0,0,.55)` blur 24 px; tilt ±6°. Bottle360Viewer frames scrub 0 → 71 as the sun rises; until frames exist, ±25° skew + sheen sweep, no fake spin.
- **Trace node / timeline step**: node = glowing grid intersection (12 px dot, mint, halo 0 → 10 px); path pulses 1.6 s per hop; timeline step = mile-marker post with mono time and label. States: idle 50% · hover halo · focus-visible gold ring · active filled + side panel opens · pending step dotted outline. Nodes are `<button>`s; panel reachable by keyboard.

### 12.5 Iconography & illustration
- Icons: 24 px grid, 1.5 px stroke, square caps, mitred corners, no fill; mint on night, forest on paper chapters. Seven verbs (ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER) drawn wireframe-style.
- Illustration: flat silhouettes (khejri trees, dune line) in `#06110F` against the sun; the perspective grid is the only "graphic".
- Photography: real night/dawn DESIGO® photos graded teal shadow / gold highlight; never neon-tinted; milk always true white. Crop 3:2 desktop, 4:5 mobile.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 600 / 1200 ms | hover · reveals · scenes |
| `--sw-scan` | 900 ms, ease-inout | horizontal scan wipe between chapters |
| `--sw-split` | 120 ms, once | chromatic split on chapter-title entrance only |
| `--sw-pulse` | 1600 ms per hop | trace path pulse (≤ 0.6 Hz, photosafe) |
| `--sw-grid-speed` | 0.6 px per 1 px scroll | floor grid scroll linkage |

- Signature: the sun rises 0 → 40% across each chapter (`scrub: 1`), so dawn arrives as you read.
- No bounce, no glitch jitter beyond the single 120 ms split; nothing flashes above 3 Hz.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: static horizon, scanlines off, no chromatic split, grid frozen.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *re-tuned synthwave, Thar night palette of forest-black #06110F, deep forest #0B3B32, teal haze #123F4A, mint grid glow #7FE0B8, dawn gold #F3D9A0 and amber #E89A1C, subtle film grain, restrained, cinematic, premium, no magenta, no purple, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/synthwave/hero-landscape.png` | 3200×2000 (16:10) | no | Wide night horizon over the Thar desert edge before dawn, a faint luminous mint perspective grid floor receding to a horizon line at 58% height, low dune and khejri tree silhouettes in near-black green, a striped sun disc glowing gold to amber to deep red just below the horizon, deep forest-black sky, large empty calm centre | magenta, purple, pink neon, palm trees, cars, sunglasses, cassette, chrome lettering, city skyline, glitch | Hero (ch. 01), /before-the-sun |
| 2 | `web/public/desigo/styles/synthwave/hero-portrait.png` | 1400×2400 (7:12) | no | Tall portrait version: night sky over a Thar dune horizon at 52% height, mint perspective grid floor in the lower half, half-risen striped gold-to-amber sun disc behind the centre, empty centre column for a product | magenta, purple, palm trees, cars, city skyline, glitch | Hero mobile |
| 3 | `web/public/desigo/styles/synthwave/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Deep night at 04:30 over a desert horizon, sky deep green #0A2A20, a barely risen sun rim in bottle green #1F5C45 with a pale green #D9E8DF edge, a dense fine mint grid floor, faint khejri silhouettes, empty centre | magenta, purple, bright sun, palm trees | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/synthwave/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Red first light at 05:15 over red sandstone dunes, sky graded oxblood #4A0A0F to forest-black, a deep crimson #B3202A sun disc with horizontal cut stripes, grid floor in pale rose #F3D9D6 at low opacity, empty centre | magenta, purple, pink neon, blood, palm trees | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/synthwave/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Amber dawn at 06:00, sky deep brown #5A3304, a full amber #E89A1C striped sun disc on the horizon, a wide sparse grid floor in pale wheat #F8E4C2, low dunes, warm haze, empty centre | magenta, purple, palm trees, harsh lens flare | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/synthwave/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Ivory morning at 06:45, sky graded from warm taupe #4D4130 to ivory #F4EDE2, soft haze with no visible sun disc, a fading grid floor in pale sand #CDB89A, calm daylight winning, empty centre | magenta, purple, neon glow, palm trees | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/synthwave/trace-grid-map.png` | 3000×2000 | yes (real alpha) | Abstract perspective grid seen from a low aerial angle, scattered glowing mint intersections as farm nodes joined by one continuous luminous path into a single hub, isolated on transparent background | map labels, country borders, magenta, purple, satellite photo | Traceability ch. 06, /trace |
| 8 | `web/public/desigo/styles/synthwave/journey-night-road.png` | 3600×1200 (3:1) | no | Long horizontal night road across flat desert towards a faint dawn horizon, a thin glowing milk-white line along the road edge, seven evenly spaced small roadside marker posts as plain silhouettes, deep green-black ground | vehicles, headlights, people, magenta, purple, signboards | Cow → bottle ch. 03 (NightRoad) |
| 9 | `web/public/desigo/styles/synthwave/texture-scanline-grain.png` | 1024×1024, seamless | no | Seamless tileable texture of very fine horizontal scanlines and monochrome film grain on neutral mid-grey, perfectly even, subtle, flat | colour, vignette, banding, moire, scratches | Scanline overlay (2%) sitewide |
| 10 | `web/public/desigo/styles/synthwave/ghee-dusk.png` | 3200×2000 | no | Amber dusk over soft dunes, a large soft gold sun disc low behind the centre, a faint warm gold grid floor, slow and calm atmosphere, empty foreground centre | magenta, purple, fire, candles, palm trees | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/25_synthwave.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/synthwave/
- [ ] No magenta/purple/pink anywhere; one neon colour (`#7FE0B8`) per viewport
- [ ] Campaign ends in daylight (heritage paper inversion verified)
