# 48 — Frosted Glass · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 4 / 5** · **Best used for:** the CHILL story (chapter 02's transition, chapter 06's chiller node,
chapter 11), chapter 08 *The four milks* as frosted-bottle worlds, the hero's first seconds and the final CTA. It is
an atmosphere and a material for whole scenes, and pairs naturally with 10 Glassmorphism, which keeps the UI panels.

---

## 1. Style essence

Frosted glass is a *scene* style rather than a panel style. Surfaces are acid-etched or sandblasted, so shapes and
colours behind them dissolve into soft fields; cold condensation beads on the surface; a wiped stripe reveals a sharp
world behind; light is diffuse and shadowless. The mood is cold, clean, hushed and tactile, like holding a chilled
glass bottle taken from the fridge.

Three reference points:
1. **Acid-etched architectural glass**: SANAA's Glass Pavilion in Toledo, Steven Holl's translucent glass planks at
   the Nelson-Atkins Bloch Building. Buildings that glow rather than reflect.
2. **Frosted perfume and spirits bottles** in still-life photography: satin glass, one hard rim light, a single bead
   of water running down.
3. **Cold-drink condensation photography**: macro droplets, a finger-wiped line through fog, breath on a cold window.

### How it differs from 10 Glassmorphism
| | 10 Glassmorphism | 48 Frosted Glass |
|---|---|---|
| What is glass | UI panels (cards, nav, info panels) | The whole scene surface, the type and the bottle's world |
| Behind the glass | A colourful world that stays readable | Shapes dissolved into colour fields, revealed by interaction |
| Signature effect | `backdrop-filter` blur + specular edge | Etched texture, condensation, *wipe to reveal*, frost density over scroll |
| Edges | Bright 1 px highlight, radius 20 px | No edges: full-bleed frost; type is etched into the surface |
| Story | "The interface is made of glass" | "The milk is cold, and the glass protects it" (CHILL) |

The two can share a page: frosted glass as the environment, glassmorphism for the occasional info panel.

## 2. Why it fits DESIGO® and where it fights

- **The product is a returnable glass bottle that lives cold.** Frost is the honest material of the brand: CHILL
  is one of the seven public verbs and "Delivered cold, early morning" is public copy.
- **It flatters the existing renders.** A transparent render placed behind or in front of frost gains depth with no
  3D work, and the 360 frames will look even better.
- **It is restrained by nature.** Frost removes detail, which suits a brand that should say little and verify all.

**Where it fights:** blur everywhere is low-contrast and expensive on mid-range Android; frost on milk-white is
invisible; cold blue frost would fight the warm agricultural heritage. The remedy is a *warm* frost tinted from milk
and forest, strong backgrounds behind it, and clear sharp text always sitting on the front of the glass.

## 3. Art direction

### Palette: warm frost, never icy blue
| Token | Hex | Use |
|---|---|---|
| `--frost` | `#E8ECE6` | Default frost field (milk cooled with 4% forest) |
| `--frost-warm` | `#F1EEE4` | Frost over warm chapters (milk + 2% earth) |
| `--frost-shadow` | `#A9B8B1` | Etched lettering shade, droplet inner shadow |
| `--frost-edge` | `rgba(255,255,255,.7)` | Droplet highlights, wipe-stripe edge |
| `--milk` | `#F7F4EC` | Sharp text on dark frost |
| `--ink` | `#1E211F` | Sharp text on light frost |
| `--forest` | `#0B3B32` | Deep world behind frost; footer |
| `--green` | `#1E7A68` | Links, focus ring |
| `--gold` | `#C8A96B` | One rim light per scene (a 1 px line on the bottle shoulder) |
| `--earth` | `#8C6A43` | Heritage frost tint |

Variant frosts (the world behind / the frost tint / sharp text):
| Variant | World behind | Frost tint | Text |
|---|---|---|---|
| MASTER 26 | `#0A2A20` | `rgba(31,92,69,.42)` frosted bottle-green | `#F7F4EC` |
| ROOT 14 | `#4A0A0F` | `rgba(179,32,42,.34)` frosted ruby | `#F7F4EC` |
| BASE 3 | `#5A3304` | `rgba(232,154,28,.36)` frosted amber, like an apothecary bottle | `#F7F4EC` |
| ESSENTIAL | `#CDB89A` | `rgba(244,237,226,.72)` satin ivory | `#1E211F` |

### Typography
- **Display:** *Fraunces* 300 (OFL), opsz 144, SOFT 50. Headlines **sharpen out of the frost** (blur → crisp).
- **Etched lettering:** *Fraunces* 600 at display size rendered as an etched cut in the glass: `--frost-shadow` with
  a 1 px inner highlight, used for one word per scene (e.g. "Cold.").
- **UI and body:** *Inter Tight* 500, slightly heavier than usual to hold up over frost.
- **Data:** *JetBrains Mono* 500 for bottle IDs.
- Scale: system scale; body `1.0625rem/1.6`, measure 54ch, always on an opaque or 92% surface.

### Texture, imagery, iconography
- Frost: a 2400 px seamless etched-glass texture (FG1) at 40–70% opacity, plus an SVG `feTurbulence` grain for micro
  variation. Condensation: a sprite atlas of 40 droplets (FG3) placed by seed so it never repeats exactly.
- Imagery: variant worlds C1–C4 and real farm photography *behind* the frost; one sharp "wipe" per scene reveals them.
- Icons: 1.25 px line icons in ink or milk, never frosted.

### Grid
12 columns, 5vw margins, 24 px gutters. Scenes are built in three depth planes: **world** (z 10, sharp photo or
colour), **frost** (z 15, full-bleed), **front** (z 20, bottle and sharp text). Radius is 0 for scenes, matching the
editorial default; the only curves are the bottle's own.

### Header wordmark
The black write/un-write DESIGO® loop stays sharp and in front of the frost. On dark frosted scenes it swaps to milk.
It is never blurred, etched or fogged.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Frost in | Frost layer opacity 0 → 1 and the world's blur 0 → 28 px over 1200 ms `cubic-bezier(.65,0,.35,1)`, like a cold pane fogging |
| Sharpen (headline reveal) | Text `filter: blur(10px)`, opacity .4 → crisp, 900 ms `cubic-bezier(.16,1,.3,1)`, 80 ms stagger per line |
| Frost density with scroll | Chapters 02 → 06: blur radius scrubs 8 → 32 px as the story moves towards CHILL; it warms back to 8 px in the Heritage chapter |
| Wipe to reveal | Pointer drag (or a scripted pass on touch) wipes a 64 px stripe that clears the frost; the stripe refogs over 4 s. Used **once** per page |
| Condensation | 3–5 droplets per scene slide 40–120 px down over 6–10 s with `--ease-milk`; they never stream |
| Transition | The current scene fogs (600 ms) and the next one clears (600 ms) |

**Cursor states:** default 10 px milk dot with frost halo · **link**: 40 px frosted lens clearing on the text ·
**wipe zone**: 64 px soft square `WIPE` · **360**: 72 px clear lens `DRAG` · **text**: native caret · **disabled**:
30% halo · touch: none (wipes become one autoplayed pass with "Replay").

**Hover:** the text-link underline is etched (draws over 240 ms in `--frost-shadow`, then turns ink), arrows travel
6 px, the primary button frame draws itself (600 ms), and magnetic offset is ≤ 6 px.

## 5. The hero bottle and the four variants

The bottle is the **one sharp object in a frosted world**. It stands in front of the frost with contact shadow and a
gold rim light on its shoulder; condensation on the *bottle itself* (a masked droplet layer on the render, 12% opacity)
says "just out of the cold". Float ±8 px over 6 s; pointer tilt ±8°; the rim light slides with the tilt.

- **Before 360 frames:** ±25° turn with sheen sweep; the droplet layer stays aligned because the turn is a skew,
  not a fake rotation.
- **After 360 frames:** drag to rotate; a clear "wipe" lens (cursor) shows the label sharp through a frosted overlay
  that sits *in front* of the bottle at 20% on /milk/[variant] only, so reading the label becomes a small reward.
  Frame counter in JetBrains Mono, `036 / 072`.

| Variant | Frosted-glass world |
|---|---|
| **MASTER 26** | Forest canopy (C1) behind frosted bottle-green glass: the canopy becomes soft green light pools. One wipe reveals the sharp canopy. The etched word: "Canopy." Line: "Twenty-six herbs. The fullest expression of the source." (herb count pending). |
| **ROOT 14** | Red earth strata (C2) behind frosted ruby glass, read as warm horizontal bands of light. Etched word: "Rooted." Line: "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | Golden field (C3) behind frosted amber: the sun disc becomes a large soft glow behind the bottle, the strongest backlight on the site. Etched word: "Everyday." |
| **ESSENTIAL** | Ivory gallery (C4) behind satin ivory frost: almost white, ink text, a single cool shadow. Etched word: "Essential." Line: "Simple, balanced, honest." |

The info panel is the one place a glassmorphism panel (doc 10) appears: `DESIGO® V1+`, name, price and size with
dotted-underline pending styling, descriptors and `RESERVE ———→`, sharp text on a 92% panel.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Opens fogged: a frosted milk-warm field with the bottle sharp in front. Over 1.2 s the headline "MILK / FROM THE / SOURCE." sharpens out of the frost. A faint wiped stripe reveals a sliver of the Thar dawn (B6) behind. CTAs sharp. |
| 02 | Bottle becomes the story | Bottle pinned. Each of the six words appears sharp on the front plane while a matching image sits frosted behind; the background moves milk → forest, and frost density rises with each word. |
| 03 | Cow → bottle | Paper chapter, no frost (contrast). The single exception is the CHILL station: the illustration frosts over and a droplet runs down, the one cold moment in a warm line. |
| 04 | Where it begins | Real farm photography **unfrosted**. Frost belongs to the cold chain, not the field. A thin frosted band at the bottom holds the caption. |
| 05 | Breeds | Paper, no frost. Breed plates (D1–D6) sharp; status "Breed list client-stated · approval pending". |
| 06 | Traceability | Forest. The trace path runs across a frosted pane; nodes are clear "wiped" circles in the frost. The CHILLER node has condensation. "Illustrative journey — not live data". |
| 07 | Quality | Lab white with light frost (8 px). The 16 parameters in a sharp two-column list; readouts "— pending lab confirmation". The test-card image sits behind frost and clears on hover. |
| 08 | Four milks | Four frosted worlds (section 5), 01–04 index sharp on the left edge. |
| 09 | Milk as material | The canvas milk ribbon seen *through* frosted glass: soft, slow, luminous. One wipe stripe shows it sharp. |
| 10 | Heritage | Warm paper; frost recedes completely. Gold hairlines, italic statement. |
| 11 | Technology | Charcoal behind frost: the grid and data lines become soft mint light. The seven verbs sharpen one by one; "CHILL" is the only one etched. |
| 12 | Ghee | Warm gold, no frost. Ghee is not chilled, so the material language stays truthful. |
| 13 | Trace your milk | Charcoal frosted pane; the bottle-ID input is a clear wiped field. Results clear line by line from frost. `DEMO` badge sharp and always visible. |
| 14 | Story | Paper, no frost; verified milestones only. |
| 15 | Final CTA | The bottle returns sharp; the whole screen fogs to milk-frost, then "Know where your milk comes from." sharpens. Milk → forest. |

**Inner pages:** /milk is four frosted panes that clear on hover, handing off to /milk/[variant] by View
Transition · /milk/[variant] has its frosted world, the clear-lens 360 viewer and a sharp facts table with pending
values · /origin and /about are unfrosted photo pages · /trace and /technology are frosted · /ghee is unfrosted gold ·
/reserve is an opaque form on calm milk-frost.

## 7. Component variants

`FrostField` (texture + blur plane) · `FrostDensity` (scroll-scrubbed blur) · `WipeReveal` (pointer mask with
refog) · `Condensation` (seeded droplet sprites) · `SharpenHeadline` · `EtchedWord` · `ClearLensCursor` ·
`FrostedWorld` (ProductScene variant) · `TraceMap.frosted` · `QualityPanel.frost` · `TraceYourMilk.wiped` ·
`BottleDroplets` (masked overlay on renders) · `InfoPanel.glass` (borrowed from doc 10) · `PendingValue`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Warm-frost palette, sharpen reveal | Tokens, frost specimen | Text always on ≥ 92% surface or dark world; fonts ≤ 150 KB | Wordmark vector | 2 |
| 2 | Grid & shell | Depth planes, nav, cursor | `FrostField`, `ClearLensCursor` | Wordmark never blurred; 3 planes documented | FG1 | 3 |
| 3 | Hero | Fogged opening | Hero, `SharpenHeadline` | LCP ≤ 2.2 s (text LCP, frost loads after) | Render, B6 | 3 |
| 4 | Bottle → story | Rising frost density | Pinned scene, `FrostDensity` | 60 fps on mid-Android or fallback to static frost | — | 3 |
| 5 | Cow → bottle | Warm line with one cold station | Track + CHILL frost | Only CHILL frosts | E1–E7 | 2 |
| 6 | Origin / farm | Unfrosted photo | Photo scene, frosted caption band | No stock; real photos | Farm photos | 2 |
| 7 | Breeds | Plates | Breed index | Status line visible | D1–D6 | 2 |
| 8 | Trace map | Frosted pane path | `TraceMap.frosted` | Nodes keyboard-accessible; label visible | FG3 | 4 |
| 9 | Quality | Light frost lab | `QualityPanel.frost` | No unconfirmed values | Test-card image | 2 |
| 10 | Four worlds + 360 | Frosted worlds, clear lens | 4 scenes, viewer | Text ≥ 4.5:1 on each tint; lens works by keyboard toggle too | C1–C4, 360 | 7 |
| 11 | Heritage | Warm, no frost | Paper scene | — | A2 | 1 |
| 12 | Technology | Frosted charcoal | Verb sequence | Public vocabulary only | F1 | 2 |
| 13 | Ghee | Unfrosted gold | Ghee scene | Prices pending-styled | Jar | 2 |
| 14 | Trace-your-milk | Wiped input | Demo, line reveals | DEMO always visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Frosted panes | Row + product page | View Transition fallback | 360 | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` only | Photos | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | Archive | 3 |
| 18 | Mobile | Cheap frost | Pre-blurred images replace live blur | No `backdrop-filter` on < 4 GB devices; no horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | Clear mode | No wipes/droplets; static frost | WCAG 2.2 AA; wipe content also reachable without wiping | — | 2 |
| 20 | Perf, QA, handover | Ship | GPU audit, QA list | Lighthouse ≥ 92; INP ≤ 200 ms; no jank > 50 ms | All | 4 |

**Total:** about 59 days.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** 360 frames (transparent, so frost can sit behind and in front); one real macro photo of
condensation on the actual returnable bottle (it is honest, and it beats any generated droplet); farm photos for the
unfrosted chapters.

**Images to generate** (texture or backdrop only; `web/public/desigo/styles/frosted/`; append the house-style tail):
| # | File | Size | Prompt |
|---|---|---|---|
| FG1 | `etched-glass.png` | 2400×2400, seamless | Seamless tileable texture of acid-etched frosted glass, very fine even satin grain, warm milk-white tint, backlit, flat, no objects, no text, no watermark, no logo, no letters |
| FG2 | `frosted-pane-backlit.png` | 3200×2000 | Large frosted glass pane softly backlit by warm morning light, blurred indistinct shapes of green leaves behind it, calm, minimal, empty center, no text, no watermark, no logo, no letters |
| FG3 | `condensation-atlas.png` | 2048×2048, transparent | Forty separate water condensation droplets of varied sizes on transparent background, macro, crisp highlights, evenly spaced grid for a sprite sheet, no glass texture, no text, no watermark, no logo, no letters |
| FG4 | `fog-wipe-macro.png` | 3200×2000 | Macro of a fogged cold glass surface with a single soft wiped stripe across it showing warm golden light behind, minimal, no hands, no objects, no text, no watermark, no logo, no letters |
| FG5 | `frost-amber.png` | 3200×2000 | Abstract warm amber light seen through thick frosted glass, soft round glow behind center, apothecary-glass mood, no objects, no text, no watermark, no logo, no letters |

Do not generate the bottle with condensation; droplets are composited onto the real render in code.

## 10. Performance, accessibility and mobile

- `backdrop-filter` on at most one plane per viewport; elsewhere frost is a **pre-blurred AVIF** built at compile
  time plus the FG1 texture. Low-power devices (`deviceMemory < 4`) get pre-blurred mode only.
- Droplets: at most 5 transform-only sprites, paused off-screen.
- Accessibility: text never sits *inside* frost. Wiped reveals are decorative and their content also exists as text.
  Reduced motion: static frost, no droplets, no wipes.
- Mobile: pre-blurred frost, one autoplayed wipe pass, bottle centred, opaque bottom-sheet info panel.

## 11. Risks and premium guardrails

**Risks:** muddy low-contrast pages; GPU cost; "spa" or bathroom-glass cliché; cold blue frost that fights heritage;
overlap with glassmorphism producing a generic "glass UI" look.

**Premium guardrails**
1. Frost tells the CHILL story. It does not appear on the farm, breeds, heritage or ghee, where warmth is the truth.
2. Warm frost only (`#E8ECE6` / `#F1EEE4`). Never icy blue, never pure white.
3. Text is always sharp, on the front plane, at ≥ 4.5:1 (body ≥ 7:1).
4. One wipe interaction per page, one etched word per scene.
5. A maximum of 5 droplets in view; droplets slide slowly and never stream or splash.
6. Never fog the DESIGO® wordmark or the bottle's label.
7. Frost backgrounds need something behind them (colour world or photo). Frost on plain milk is not used.
8. No implied temperatures. Frost is an image of cold, never a stated number.
