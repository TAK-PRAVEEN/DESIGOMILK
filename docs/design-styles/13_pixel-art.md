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
- **/about:** a pixel timeline and supporters marked pending.
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
