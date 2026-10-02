# 13 — Pixel Art · DESIGO® build plan

**Fit score: 1 / 5 for the whole site** · **Best used for:** a single campaign micro-site, "The Journey, 8-bit", or the
playful layer of chapter 13 *Trace your milk* (a pixel replay of a demo journey). The real product is never pixelated.

---

## 1. Style essence

Pixel art is imagery built on a visible square grid with a limited palette. Each pixel is placed on purpose, there is
no anti-aliasing, and dithering stands in for gradients. It began as a constraint of 1980s–90s hardware and survives
as a deliberate craft language: nostalgic, exact and patient.

Three reference points:
1. **Eboy's "pixoramas"**: dense isometric pixel cities, proof that pixel art can be meticulous rather than childish.
2. **The *Monument Valley* and *Sword & Sworcery* era of indie games**: restrained palettes, big negative space, slow pacing.
3. **Cross-stitch and Indian *kantha* / *phulkari* grids**: the same "one cell, one colour" logic in textile.
   This is the bridge to Indian craft, and the only route by which pixel art can feel at home on a Rajasthan milk brand.

## 2. Why it fits DESIGO® and where it fights the brand

**Where it fits**
- Traceability is discrete by nature: farm → collection → batch → chiller → barrel → plant → bottle → you. A tile-based
  map reads as "a system of recorded steps" at once.
- The grid ties to textile craft (phulkari, bandhani dots, kantha running stitch), so it can carry a Rajasthan flavour.
- It is memorable for social, for a younger audience and for a one-off campaign.

**Where it fights the brand**
- DESIGO® sells *premium glass, real cows and honest milk*. Pixelation suggests low resolution, games and artifice,
  which is the opposite of "real, traceable, photographed".
- The brief asks for "Apple launch × luxury editorial". Pixel art reads as indie or retro and costs the brand its premium position.
- Food appetite appeal falls when milk is shown as flat blocks of colour.

**Verdict:** 1/5 as a site-wide system. Use it as a **contained, clearly playful layer**: a campaign page
(`/journey-8bit`), a pixel "replay" inside the Trace-your-milk demo, the 404 page, and social stickers. The 20-phase plan
below is still complete, because the client asked to see every style built out. Wherever a phase would hurt the brand,
the plan says how to keep the real bottle and photography un-pixelated.

## 3. Art direction

### Palette: "Phulkari 16" (16 colours, all harmonised to brand tokens)
| Role | Hex | Note |
|---|---|---|
| Milk (bg) | `#F7F4EC` | brand milk |
| Milk shadow | `#E3DCCB` | dither partner |
| Paper | `#EDE4D0` | brand paper |
| Forest | `#0B3B32` | outlines, night |
| Forest mid | `#145246` | |
| DESIGO green | `#1E7A68` | primary UI |
| Leaf | `#4FA37F` | grass highlights |
| Signal | `#7FE0B8` | trace pulse only |
| Earth | `#8C6A43` | soil |
| Clay | `#B88A5A` | Rajasthani walls |
| Gold | `#C8A96B` | ghee, sun |
| MASTER cap | `#1F5C45` | |
| ROOT cap | `#B3202A` | |
| BASE cap | `#E89A1C` | |
| ESSENTIAL cap | `#CDB89A` | |
| Charcoal | `#171918` | text, 1-px outline |

Rule: sprites use only these 16 colours. Every UI text colour pairing still has to meet 4.5:1 or better
(`#171918` on `#F7F4EC` measures about 16:1).

### Typography
- **Display (pixel):** *Silkscreen* (OFL, Google Fonts). Used only for labels of 12 characters or fewer and at integer
  multiples of 8 px (16/24/32/48/64), with no fractional sizes.
- **Display (premium counterweight):** *Fraunces* 9pt-opsz italic for the brand sentences. This is the premium anchor.
- **Body:** *Inter Tight* 16/26.
- **Data:** *VT323* (OFL) for bottle IDs inside the pixel layer. *JetBrains Mono* is used everywhere else.
- **Devanagari (if needed):** *Mukta*. There is no good pixel Devanagari, so Hindi is never pixelated.

### Texture, imagery and icons
- 1-px charcoal outline sprites on a **4-px base pixel** (desktop), so one "art pixel" is 4×4 CSS px and the canvas
  scales with `image-rendering: pixelated`.
- Ordered **Bayer 4×4 dithering** for skies and milk gradients, never smooth gradients inside pixel scenes.
- Photography stays photographic. Pixel frames may *border* photos (an 8-bit phulkari frame) but never filter them.
- Icon set: 16×16 sprites for the seven verbs (ORIGIN, TRACE, TEST, CHILL, PROCESS, FILL, DELIVER), drawn as a single
  sheet `verbs-16.png`, with 2× and 4× renders for retina.

### Grid
- 12 columns, 24 px gutters, 5vw outer margin (brand gutter). All pixel scenes snap to an **8-px baseline**, so element
  heights are multiples of 8 and scenes never sit at half-pixels (`transform: translate3d(round(...))`).
- Scene canvases have fixed logical sizes, 320×180 (16:9) or 180×320 (mobile), scaled by an integer factor only.

## 4. Motion and interaction language

- **Frame-stepped motion.** Sprites animate at 8 fps (`steps()` easing). UI (nav, panels) keeps brand easing
  `cubic-bezier(.16,1,.3,1)` at 240/600 ms so the site still feels smooth.
- **Scroll:** in pixel scenes, scroll advances the scene by whole tiles (16 art-px). Lenis smooth scroll stays on,
  and positions are quantised on render.
- **Cursor states** (32×32 sprite cursor, CSS `cursor:url()` with a fallback):
  default = a small milk-drop arrow · link = drop with a frame bracket · drag (360) = two-arrow ↔ sprite ·
  view = magnifier · disabled = greyed drop. The cursor is never animated faster than 8 fps.
- **Hover:** buttons shift 1 art-px up with a 1-art-px charcoal drop shadow (no blur), and the arrow travels in 3 steps.
- **Transitions:** chapter changes use a 12-frame "tile wipe" (checkerboard dissolve, 480 ms). In reduced motion this
  becomes an instant cut.
- **Sound:** off by default. An optional 8-bit chime on the trace "delivered" step, behind a visible sound toggle.

## 5. The hero bottle and the four variants

**The bottle is never pixelated.** The real transparent render (later the 360 sequence) floats *on top of* a pixel
world with its true contact shadow. That contrast, a real glass object in a crafted pixel diorama, is the idea that
keeps the style premium.

- Float: translateY ±10 px over 6 s (brand). Tilt ±8° to the pointer. With 360 frames, drag or scroll maps to the frame
  index; until then the turn is limited to ±25° with a sheen sweep (no fake spin).
- A **pixel "shadow twin"**, a 24×64 art-px sprite of the bottle, appears only inside game scenes such as the
  Trace replay, where it walks the map.

| Variant | Pixel world (320×180 diorama) |
|---|---|
| **MASTER 26 (V1+)** | Deep-green forest canopy at dawn. Layered dithered greens `#0A2A20 → #1F5C45 → #D9E8DF`, small herb sprites in the foreground (generic leaves, not named herbs until the herb list is approved). |
| **ROOT 14 (V1)** | Rajasthan red earth: terraced field tiles in `#4A0A0F / #B3202A / #F3D9D6`, a khejri tree silhouette, heat-shimmer dither. |
| **BASE 3 (V2)** | Golden-hour village lane: amber sky dither `#5A3304 → #E89A1C → #F8E4C2`, long pixel shadows. |
| **ESSENTIAL (V3)** | Ivory gallery: almost-empty pale stone tiles `#4D4130 / #CDB89A / #F4EDE2`, a single plinth for the real bottle. This is the quietest scene and the most premium. |

## 6. Page-by-page treatment

### Home (15 chapters)
| # | Chapter | Pixel Art treatment |
|---|---|---|
| 01 | Hero | Milk-white page, Fraunces headline "Milk from the source.", the real bottle. A 1-tile-high pixel horizon (fields, a well, a cow silhouette) runs along the bottom edge only. |
| 02 | Bottle becomes the story | Six words in Silkscreen sit in 16-px pixel frames around the real bottle. Background steps milk → forest in 6 dithered stages, one per word. |
| 03 | Cow → bottle | **Primary pixel chapter.** A horizontal side-scroller: seven stations as 320×180 tiles. A pixel milk-line "fills" tile by tile, and each station has a short Inter Tight caption from `journey[]`. |
| 04 | Where it begins | Real farm photographs inside an 8-bit phulkari frame (an 8-colour border). Photos are **not** filtered. |
| 05 | Breeds | Real breed portraits (when supplied), each with a 16×16 pixel "breed badge" and a status chip "Client-stated · approval pending". |
| 06 | Traceability | A tile map. Nodes are 16×16 buildings, the path is a dotted tile line, and the signal pulse moves tile by tile. Label: "Illustrative journey — not live data". |
| 07 | Quality | The 16 parameters as a 4×4 grid of pixel tiles, each one a sprite icon plus its name. Values show "— pending lab confirmation". |
| 08 | Four milks | Four dioramas (section 5) with the real bottle centred and the info panel in Inter Tight with prices marked pending. |
| 09 | Milk as material | Dithered milk ribbon on canvas at 8 fps, as a deliberate contrast to the smooth versions in other styles. |
| 10 | Heritage | A pixel kantha border around a Fraunces italic statement. A pixel cow line drawing, dignified, side profile, no face cartoon. |
| 11 | Technology | Seven verb sprites in a row on charcoal, each lighting up in sequence. "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | Real jar cut-out. The folk border from the jar label is redrawn as a pixel border, tied to the three milks it comes from. |
| 13 | Trace your milk | **Pixel replay.** Enter the demo Bottle ID and the shadow-twin bottle walks the map backwards to the farm. A large DEMO badge stays fixed. |
| 14 | Story | A pixel timeline strip where only verified milestones render in production. |
| 15 | Final CTA | Back to milk white. The pixel horizon returns, the real bottle floats, and the two buttons appear: RESERVE DESIGO MILK · EXPLORE TRACEABILITY. |

### Inner pages
- **/milk:** four diorama cards in a 2×2 grid. Hover plays a 6-frame idle loop (wind in grass).
- **/milk/[variant]:** the variant diorama as a full-bleed header, then Bottle360Viewer on milk white (no pixel
  treatment around the viewer itself), and facts in a clean table.
- **/ghee:** pixel folk border and real jar, three grades as a table.
- **/origin:** the photography page with pixel frames, a breed index and a pixel map of Rajasthan/Gujarat districts
  (regions from `breeds[]`), labelled "breed homelands", not farm locations.
- **/trace:** the full tile map plus the replay.
- **/technology:** verb sprites and plain explanations.
- **/about:** a pixel timeline of verified milestones (no supporters listed until written evidence is on file, KB Q34).
- **/reserve:** a deliberately *non*-pixel, clean form, so commerce feels trustworthy.

## 7. Component variants

`PixelCanvas` (integer-scaled canvas with a quantise helper) · `SpriteSheet` · `DitherGradient` · `PixelFrame`
(phulkari border, 8/16 px) · `PixelCursor` · `TileWipe` transition · `JourneyTrack.pixel` · `TraceMap.tiles` ·
`QualityPanel.grid4x4` · `ProductScene.diorama` · `TraceYourMilk.replay` · `PixelBadge` (status chips) ·
`AssetSlot.pixel` (8-bit "asset needed" card naming the missing file). Shared components are untouched:
`Bottle360Viewer`, `DesigoNav` (keeps Inter Tight), `CTASection`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Lock the 16-colour palette and the pixel scale rules | `tokens.pixel.ts`, palette swatch page, Silkscreen/VT323 loaded with `font-display: swap` | Every sprite colour is in the 16-colour set; text pairs ≥ 4.5:1; type only at 8-px multiples | Brand hex confirmation (C) | 2 |
| 2 | Grid & shell | Nav, footer and cursor in the pixel layer | `PixelCursor` (5 states), footer with pixel horizon, nav unchanged | No sub-pixel blur at 1×/2×/3× DPR; cursor falls back on touch | — | 3 |
| 3 | Hero | Real bottle over a pixel horizon | Hero with horizon sprite, float/tilt | LCP ≤ 2.5 s; bottle never pixelated | Bottle render (have) | 3 |
| 4 | Bottle → story | Six-word orbit with dithered colour steps | Scroll-pinned scene, 6 dither stages | Words readable at 360 px; reduced motion shows a static list | — | 3 |
| 5 | Cow → bottle | Side-scroller journey | 7 station tiles, milk-line fill, mobile vertical | 8 fps sprites; no frame drops below 50 fps scroll; captions from content file | Hands-milking photo optional | 6 |
| 6 | Origin / farm | Photos in pixel frames | `PixelFrame`, parallax layers | Photos un-filtered; AssetSlots name the missing shots | Photos B1, B2, B4 | 3 |
| 7 | Breeds | Portrait plus pixel badges | `BreedExplorer.pixel` | Pending status visible on each breed | Photos B3 | 3 |
| 8 | Trace map | Tile map with pulse | `TraceMap.tiles`, node side panel | "Illustrative" label always visible; keyboard-navigable nodes | — | 5 |
| 9 | Quality | 4×4 parameter grid | 16 sprite icons, pending readouts | No values without confirmation | Photo B6 | 3 |
| 10 | Four worlds + 360 | Four dioramas plus the viewer | 4 dioramas, ProductScene, viewer integration | Viewer clean of pixel effects; frame index works with test frames | 360 sequences (A), pending → 2.5D | 8 |
| 11 | Heritage | Kantha border statement | Border sprite, cow line art | Cow drawn respectfully (profile, no caricature) | — | 2 |
| 12 | Technology | Verb sprites | 7 verb sprites, sequence | Copy matches public vocabulary | — | 2 |
| 13 | Ghee | Pixel folk border from the jar label | Border redraw, jar cut-out | Border approved by the brand owner | Jar label vector / photo | 2 |
| 14 | Trace-your-milk | Pixel replay | `TraceYourMilk.replay`, DEMO badge | `isDemo` shown on every step; replay skippable | — | 5 |
| 15 | /milk, /milk/[variant] | Inner product pages | 2 templates × 4 variants | Prices/sizes render with the pending style | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | Inner story pages | 3 templates | Breed homeland map labelled correctly | Photos B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates; non-pixel reserve form | Only verified milestones in production | Archive B11 | 4 |
| 18 | Mobile pass | 180×320 portrait scenes | Mobile sprite variants | Integer scaling on 360/390/414 px widths; no horizontal scroll | — | 4 |
| 19 | A11y + reduced motion | Static, readable fallbacks | Sprite `alt`s, static scene PNGs, sound off | WCAG 2.2 AA; reduced motion removes all steps() loops | — | 3 |
| 20 | Perf, QA, handover | Ship | Sprite atlas, Lighthouse report, handover doc | LCP ≤ 2.5 s, CLS < 0.05, JS ≤ 180 KB gz; sprite atlas ≤ 250 KB | All above | 4 |

**Total:** about 74 days for the full site. The recommended scope is a campaign page plus the chapter 03/13 layer,
about 18 days (phases 1, 2, 5, 8, 14, 19, 20 trimmed).

## 9. Assets needed from DESIGO®

- 360° sequences (A) and wordmark vector (C), as for every style.
- Real farm, breed and process photographs (B1–B9). These stay photographic.
- A **high-resolution scan of the ghee jar label border** and any textile or folk motif the brand already owns, so the
  pixel borders are derived from DESIGO®'s own patterns rather than invented ones.
- Approval of the pixel cow silhouette and the shadow-twin bottle sprite.

## 10. Performance, accessibility and mobile

- Sprites in one WebP/PNG atlas. Canvas scenes pause when off-screen (IntersectionObserver) and cap at 8 fps, which
  is very cheap on low-end Android.
- `image-rendering: pixelated` with integer scaling only. Use a DPR-aware scale factor so lines stay crisp.
- Text is **never** baked into sprites, so screen readers and translation still work.
- Silkscreen is limited to short uppercase labels, and every one has an Inter Tight `aria-label` equivalent.
- Mobile: portrait 180×320 scenes, the journey becomes vertical, and the cursor sprite is disabled.
- Reduced motion: all scenes are static frames, the tile wipe becomes a cut, and the replay becomes a step list.

## 11. Risks and premium guardrails

**Risks:** it looks like a game ad; it undermines "real milk"; Silkscreen strains readability; cheap emulation
(blurry, non-integer pixels) looks broken rather than crafted.

**Premium guardrails**
1. Never pixelate the bottle, the cows' photographs, the milk itself in product shots, or the DESIGO® wordmark.
2. One pixel layer per viewport at most. Fraunces and Inter Tight always carry the meaning.
3. Use the strict 16-colour palette, with no neon and no rainbow gradients.
4. Use integer scaling only. A single blurred pixel reads as a bug.
5. Derive borders from Indian textile grids (phulkari, kantha), never from video-game UI (hearts, coins, "LEVEL UP").
6. No game mechanics that trivialise food (no "power-ups", no "XP for drinking milk", no health framing).
7. Keep the milk-white space generous. Pixel scenes sit inside calm margins like museum dioramas.
8. Keep commerce (/reserve, prices) visually clean and non-pixel.
9. Do not put pixel claims in copy: no "16-bit fresh"-style puns and no superlatives.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added full token table (all hexes from the Phulkari 16 palette), state colours, dark inversion, @fontsource packages, all 14 components with states, motion tokens, 10 image prompts. Fonts were already OFL. Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1E7A68` | DESIGO green: primary buttons, active pixel frames, links | 4.7:1 vs bg. Passes 4.5:1 for text and UI. |
| Primary ink | --c-on-primary | `#F7F4EC` | milk text and sprite glyphs on green | 4.7:1 on primary. |
| Secondary | --c-secondary | `#0B3B32` | forest: sprite outlines at night, dark chapters, footer | 11.3:1 vs bg. |
| Accent | --c-accent | `#C8A96B` | gold: sun, ghee, selection highlight, focus-ring halo | 2.0:1 vs bg. Decorative only on milk; the focus ring is 2 px charcoal with a 2 px gold outer halo so it passes 3:1. |
| Background | --c-bg | `#F7F4EC` | milk page; every pixel scene sits inside it like a museum diorama |  |
| Surface | --c-surface | `#EDE4D0` | paper: panels, info blocks, sprite cards |  |
| Text | --c-text | `#171918` | charcoal body text and 1-art-px sprite outlines | 16.1:1 on bg · 14.0:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#145246` | forest-mid captions, labels | 8.2:1 on bg · 7.1:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#E3DCCB` | milk-shadow dither partner, dividers | Decorative dither / divider only. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#4FA37F` / `#8C6A43` / `#C8A96B` | leaf = recorded step; earth = pending (dotted underline); gold fill + charcoal text = DEMO badge | All three are fills or underlines carrying charcoal text (≥ 7:1); never small coloured text. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | 320×180 dithered forest canopy at dawn, generic leaf sprites (no named herbs) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | terraced red-earth field tiles, khejri silhouette, heat-shimmer dither |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | golden-hour village lane, amber Bayer-dithered sky, long pixel shadows |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory gallery of pale stone tiles and one plinth: the quietest diorama |

**Dark-chapter inversion:** Chapters 06, 11 and 13 and the night scenes: bg → `#0B3B32`, surface → `#145246`, text → `#F7F4EC`, muted → `#E3DCCB`, primary → `#4FA37F` with charcoal `#171918` ink, line → `#1E7A68`, sprite outlines → `#171918` stay. Signal `#7FE0B8` appears only as the trace pulse.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Silkscreen | `@fontsource/silkscreen` (Google Fonts: Silkscreen) | 400, 700 (static) | integer steps only: 32 px → 48 px (≥768) → 64 px (≥1024); no clamp, no fractional sizes | 1.0 (8-px multiple) | 0.04em | UPPER, ≤ 12 characters |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 9–144 auto, wght 300–400, italic, SOFT 50 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.05 / 1.15 | -0.02em | Sentence, italic for brand lines |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–600 | clamp(1rem, 0.95rem + 0.2vw, 1.0625rem) | 1.625 (26 px) | 0 | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600 | 0.72rem (pixel chips: Silkscreen 16 px) | 1.2 | +0.18em | UPPER |
| Data / mono | VT323 | `@fontsource/vt323` (Google Fonts: VT323) | 400 | 24 px inside pixel scenes (8-px multiple); JetBrains Mono 13 px (`@fontsource-variable/jetbrains-mono`) everywhere else | 1.0 | 0.02em | UPPER for IDs |
| Devanagari (optional) | Mukta | `@fontsource/mukta` (Google Fonts: Mukta) | 400, 600 | matches body / H2 sizes | 1.6 | 0 | n/a (never pixelated) |

Licence: all six families are SIL OFL 1.1 (Silkscreen, Fraunces, Inter Tight, VT323, JetBrains Mono, Mukta); self-host via @fontsource, `font-display: swap`.
Pairing: Silkscreen and VT323 give the 8-bit voice in tiny doses; Fraunces and Inter Tight carry every meaningful sentence so the brand stays premium.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw outer margin, max-width 1440 px; text measure ≤ 62ch. Pixel scenes are fixed logical canvases 320×180 (desktop) / 180×320 (mobile), scaled by integer factors only.
- **Spacing:** 8-px baseline: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Element heights are multiples of 8; positions are rounded to whole pixels.
- **Radius:** 0 everywhere (sm 0 · md 0 · lg 0). The cursor sprite is the only non-square shape.
- **Border:** UI: 2 px solid charcoal `#171918`. Pixel scenes: 1 art-px (4 CSS px at 4×) charcoal outline. Pixel frames: 8- or 16-px phulkari border sprites.
- **Shadow / elevation:** No blur on UI: hard pixel drop shadow `4px 4px 0 #171918` on hover/raised. The bottle alone keeps a real blurred contact shadow.
- **Texture / overlay:** Ordered Bayer 4×4 dither for gradients inside scenes only; `image-rendering: pixelated`; no grain and no texture over photographs or the bottle.

### 12.4 Components
All interactive components: `focus-visible` = 2 px solid `#171918` ring + 2 px `#C8A96B` outer halo, offset 2 px, square corners; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Solid block, green `#1E7A68` fill, milk Inter Tight 600 caps label + arrow, 2 px charcoal border, 0 radius, 48 px tall (56 px desktop hero), padding 16×24. Hover: lifts 4 px with `4px 4px 0 #171918` shadow, arrow travels in 3 steps (`steps(3)`, 240 ms). Active: drops back to 0, shadow removed. Disabled: milk-shadow fill, muted text. Loading: arrow replaced by a 3-frame pixel milk-drop spinner (8 fps). a11y: real `<button>`/`<a>`, label in text.
- **Secondary button**: Milk fill, charcoal 2 px border, forest label + arrow, same size grid. Hover: paper `#EDE4D0` fill and the same 4 px hard shadow. Active: pressed (no shadow). Disabled / loading as primary.
- **Text / arrow link**: Inter Tight 500, green `#1E7A68`, 2 px underline offset 4 px, arrow `→` at the end. Hover: arrow moves 8 px in 3 steps, underline turns forest. Active: underline 4 px. Visited stays green. Disabled: muted, no underline.
- **Icon button** (incl. menu): 44×44 px square hit area, 16×16 sprite icon drawn at 2× (32 px), 2 px charcoal border. Menu icon = 3 pixel bars that step into a pixel × over 3 frames (8 fps). Hover: paper fill + hard shadow. Active: pressed. Every icon button has an `aria-label`.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: Desktop: 72 px milk bar, Inter Tight caps links (no pixel font), 1-tile pixel horizon strip appears only in the footer. Scrolling down hides the bar; scrolling up shows it with a 240 ms ease-out. Mobile: full-screen milk menu, links stacked at 32 px Fraunces, the menu opens with a 12-frame tile wipe (480 ms; cut in reduced motion). Active link: 2 px green underline. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: 32×32 sprite via `cursor: url()` with system fallback, never animated above 8 fps. default = milk-drop arrow · hover (link) = drop inside a pixel frame bracket · ROTATE (360 viewer) = two-arrow ↔ sprite · EXPLORE (journey/map) = drop with a 4-way arrow · ENTER (chapter CTA) = drop with a → step · VIEW (image/diorama) = pixel magnifier · TRACE (trace input/nodes) = pulse-dot sprite in signal green. Touch: no custom cursor; tap targets ≥ 44 px and a 2-frame pressed state.
- **Card / panel / info block**: Paper `#EDE4D0` panel, 2 px charcoal border, 0 radius, 24 px padding, optional 8-px phulkari frame for photo cards. Hover (clickable): 4 px lift + hard shadow, 6-frame idle loop starts in its diorama. Static info blocks have no hover.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Uppercase chip inside a 2 px charcoal frame, 0 radius, 24 px tall; Silkscreen 16 px only for chips of ≤ 12 characters ("PENDING", "DEMO"), Inter Tight 600 caps for anything longer. Verified = leaf `#4FA37F` fill. Pending verification = milk fill, chip "PENDING" (aria-label "pending verification") plus an earth `#8C6A43` 2 px dotted underline on the claim text itself. DEMO = gold `#C8A96B` fill, charcoal Inter Tight caps "DEMO · NOT LIVE DATA", fixed in the trace replay and never scrolled away. States: static; chips fade in with their content.
- **Input + form field** (Trace-your-milk bottle ID): Label above in Inter Tight caps ("BOTTLE ID"), field 56 px tall, milk fill, 2 px charcoal border, VT323 24 px value, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: ring token. Error: ROOT red `#B3202A` 2 px border + text message below (not colour alone). Loading: pixel progress bar of 8 cells filling at 8 fps. Submit = primary button.
- **Divider / ornament**: 8-px phulkari / kantha pixel border sprite (max 8 colours from the palette) or a 1-tile pixel horizon. Never on /reserve or price blocks.
- **Section header** (chapter number + title pattern): Chapter number in Silkscreen 16 px ("03") inside a pixel frame, kicker in Inter Tight caps, title in Fraunces italic H2. Reveal: tile wipe 480 ms (static in reduced motion).
- **Product info block** (variant name, code, price-pending, size, descriptors): Clean, non-pixel: Fraunces variant name, VT323 code chip ("V1+"), size and price in Inter Tight with the pending dotted underline and a "pending" chip, descriptors as a list each carrying its status. No sprite inside the price area.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): The real render, never pixelated, centred on milk white over the variant's 320×180 diorama (integer-scaled, scene bottom third only). Real blurred contact shadow on a pixel plinth row. Float ±10 px / 6 s, tilt ±8°; before 360 frames: ±25° turn + sheen sweep. Bottle360Viewer has no pixel treatment.
- **Trace node / timeline step**: 16×16 sprite building per node on a dotted tile path; active node = signal `#7FE0B8` pulse moving tile by tile (8 fps); label in Inter Tight; demo values in VT323 with the DEMO chip. Keyboard: nodes are buttons in DOM order.

### 12.5 Iconography & illustration
- **Icons:** 16×16 sprites on a 1-art-px charcoal outline, 2-colour max fill, square corners; rendered at 2× and 4× (`verbs-16.png` for the seven verbs ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER).
- **Illustration:** Hand-placed pixel dioramas, 16-colour palette, Bayer 4×4 dithering, no anti-aliasing; borders derived from phulkari / kantha and the ghee-label border. AI images (12.7) are references or backdrops only and are re-quantised to the 16 colours before use.
- **Photo treatment:** Never pixelated or filtered. Photos may sit inside an 8-bit phulkari frame; natural colour grade.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | UI reveals, nav, panels |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | panel slides |
| `--ease-sprite` | `steps(1, end) per frame @ 8 fps (125 ms)` | all sprite animation |
| `--ease-arrow` | `steps(3)` | button arrow travel |
| `--dur-micro` | `240ms` | hover, press |
| `--dur-reveal` | `600ms` | text and panel reveals |
| `--dur-scene` | `480ms` | 12-frame tile wipe between chapters |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** 12-frame checkerboard tile wipe; journey side-scroller advancing by whole 16-art-px tiles; trace replay where the shadow-twin sprite walks the map.
- **Scroll:** Lenis smooth scroll stays on; scene positions are quantised on render; canvases pause off-screen.
- **Reduced motion:** All `steps()` loops stop, scenes show a static frame, tile wipe = instant cut, replay = ordered step list, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *crisp 32-bit pixel art on a visible square grid, no anti-aliasing, ordered Bayer dithering instead of gradients, strict limited palette of milk white #F7F4EC, forest green #0B3B32, DESIGO green #1E7A68, leaf green #4FA37F, earth brown #8C6A43, clay #B88A5A, warm gold #C8A96B, calm museum-diorama composition with generous empty space, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/pixel-art/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10); master canvas 320×200 upscaled 10× nearest-neighbour | no | Pixel-art landscape of a Rajasthan farm edge at dawn: low khejri trees, a stepwell silhouette, two zebu cows with humps grazing far right, soft dithered sky, a wide empty milk-white area in the centre and upper half for the product | smooth gradients, blur, anti-aliasing, 3D render, neon, game HUD, hearts, coins (+ base negative) | Ch. 01 hero horizon, ch. 15 final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12); canvas 140×240 upscaled 10× | no | Same pixel-art Rajasthan dawn farm as a tall portrait: horizon in the lowest fifth, khejri tree left, one zebu cow far right, dithered sky, large empty centre | smooth gradients, blur, anti-aliasing, game HUD (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×1800 (16:9); canvas 320×180 ×10 | no | Pixel-art diorama of a deep forest canopy at dawn, layered dithered greens #0A2A20 #1F5C45 #D9E8DF, generic leaf sprites in the foreground, empty clearing in the centre | named herbs, flowers with labels, blur (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×1800 (16:9); canvas 320×180 ×10 | no | Pixel-art diorama of terraced Rajasthan red-earth fields in #4A0A0F #B3202A #F3D9D6, a single khejri tree silhouette, heat-shimmer dither, empty centre | blur, neon, people (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×1800 (16:9); canvas 320×180 ×10 | no | Pixel-art diorama of a golden-hour village lane with mud-plastered walls, amber dithered sky from #5A3304 to #E89A1C to #F8E4C2, long pixel shadows, empty centre | blur, vehicles, people's faces (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×1800 (16:9); canvas 320×180 ×10 | no | Minimal pixel-art ivory gallery room of pale stone floor tiles in #4D4130 #CDB89A #F4EDE2 with a single empty plinth in the centre, almost empty | clutter, objects on the plinth, blur (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `journey/side-scroller.png` | 3200×200 strip (16:1); canvas 320×20 ×10, plus seven 320×180 station tiles | no | Pixel-art side-scrolling strip of seven stations in a row: zebu cow grazing, small thatched farm shed, steel milk can, round test card with sixteen dots, stainless chiller tank, small clean dairy plant, a doorstep at dawn, connected by one dotted milk line | factory smoke, trucks with branding, game score, coins (+ base negative) | Ch. 03 cow → bottle, /trace replay |
| 8 | `trace/tile-map.png` | 2560×1440 (16:9); canvas 256×144 ×10 | no | Top-down pixel-art tile map of a rural district: field tiles, a dirt path of dotted tiles linking eight small 16×16 buildings (farm, collection hut, chiller shed, plant, homes), calm palette | city skyline, cars, game UI, arrows with text (+ base negative) | Ch. 06 traceability, ch. 13 replay |
| 9 | `textures/kantha-border.png` | 1024×64 tileable horizontally (16:1); canvas 128×8 ×8 | yes | Seamless pixel-art border inspired by phulkari and kantha running-stitch embroidery, small diamonds and dashes in forest green, gold and clay on transparent background | religious symbols, swastika motif, Om, blur (+ base negative) | Pixel frames, heritage ch. 10, ghee ch. 12 |
| 10 | `textures/dither-sky.png` | 512×512 seamless | no | Seamless tileable ordered Bayer 4×4 dither texture blending milk white #F7F4EC into paper #EDE4D0, perfectly regular pixel pattern | noise, blur, objects (+ base negative) | Scene skies, 404 page |

Generated pixel images are art-direction bases: an illustrator re-quantises them to the 16-colour palette and the integer grid before shipping. The bottle sprite "shadow twin" is hand-drawn, never generated.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/13_pixel-art.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/pixel-art/
- [ ] Bottle, photographs and wordmark are never pixelated; integer scaling verified at 1×/2×/3× DPR
- [ ] Every sprite colour is in the Phulkari 16 palette; /reserve and prices are pixel-free
