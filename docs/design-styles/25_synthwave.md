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

**Where it works.** DESIGO® really does work at night. Collection, chilling and delivery happen before sunrise. A single chapter, or a campaign page called **"Before the sun"** (05:00 → 07:00), can use a re-tuned Synthwave: the grid becomes the trace network, the sun becomes the dawn over the Thar, and the neon becomes the cold-chain signal colour. Read this way, the style tells something true.

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
1. **Hero.** Night sky, sun 0% exposed, the bottle on the horizon with its reflection. Headline in Fraunces: "Milk from the source." A mono line beneath: `05:00 · JODHPUR` (city *pending*). CTAs as neon-underline links.
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
