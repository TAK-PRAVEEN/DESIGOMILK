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
| `--green` | `#1E7A68` | Links and focus ring on milk; on frost use `#18705F` (5.0:1, see 12.1) |
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

**Images to generate** (texture or backdrop only; `web/public/desigo/styles/frosted-glass/`; full spec in section 12.7; append the house-style tail):
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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: palette, type and motion present; missing colour roles, ok/pending/demo tokens, Devanagari face, radius/shadow scale, component states, motion tokens, negative prompts and 3 required prompts (hero portrait, variant frost plates, trace pane). Added all; link green darkened to `#18705F` on frost (`#1E7A68` is 4.35:1 on `#E8ECE6`); image folder aligned to `styles/frosted-glass/`. Fonts already OFL; no claim violations.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#0B3B32` | forest: the deep world behind frost, primary CTA fill, footer | 10.4:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | sharp milk label on forest | 11.3:1 on primary |
| Secondary | `--c-secondary` | `#A9B8B1` | frost-shadow: etched lettering shade, droplet inner shadow (decorative, never body text) | 1.7:1 on bg |
| Accent | `--c-accent` | `#18705F` | links and focus ring on frost (DESIGO green darkened for 4.5:1); `#1E7A68` on milk | 5.0:1 on bg |
| Background | `--c-bg` | `#E8ECE6` | default warm frost field (milk cooled with 4% forest) |  |
| Surface | `--c-surface` | `#F7F4EC` | 92% opaque front-plane panel where all body text sits | text on surface 14.8:1 |
| Text | `--c-text` | `#1E211F` | sharp ink text on light frost | 13.6:1 on bg |
| Muted text | `--c-text-muted` | `#4F5A54` | captions, labels on frost and panels | 6.0:1 on bg |
| Line | `--c-line` | `rgba(255,255,255,.7)` | frost-edge highlight, wipe-stripe edge; `rgba(30,33,31,.14)` dividers on panels | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#171918` | verified source tick (on milk panel) · pending value text + dotted underline · DEMO badge fill, sharp milk label 16:1 | ok 4.4:1 · pending 5.2:1 · demo 14.8:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--frost-warm` | `#F1EEE4` | frost over warm chapters (milk + 2% earth) | |
| Style extra | `--frost-edge` | `rgba(255,255,255,.7)` | droplet highlights | |
| Style extra | `--gold` | `#C8A96B` | one 1 px rim light per scene on the bottle shoulder | |
| Style extra | `--earth` | `#8C6A43` | heritage frost tint | |
| Style extra | `--green` | `#1E7A68` | links on milk surfaces | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | world behind = deep; frost tint `rgba(31,92,69,.42)` (base); sharp text milk `#F7F4EC` (14.0:1 on deep); etched word "Canopy." |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | world behind = deep; frost tint `rgba(179,32,42,.34)` frosted ruby; milk text; etched "Rooted." |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | world behind = deep; frost tint `rgba(232,154,28,.36)` apothecary amber, strongest backlight; milk text; etched "Everyday." |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | world behind = base `#CDB89A`; satin frost = light at 72%; ink text `#1E211F` (14.0:1 on light); etched "Essential." |

**Dark-chapter inversion:** on dark frosted scenes (02 late, 06, 11, 13, variant worlds) `--c-bg` → frost over `#0B3B32`/`#171918` (effective `#2C4A43`), `--c-text` → `#F7F4EC`, `--c-text-muted` → `#C9D3CE`, `--c-surface` → `rgba(11,59,50,.92)`, `--c-accent` → `#7FE0B8`, `--c-line` stays frost-edge; primary button inverts to milk fill / forest label; logo turns white and stays sharp in front of the frost.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | 300 · opsz 144 · SOFT 50 | clamp(3rem, 8vw, 9rem) | 0.95 | −0.035em | sentence; sharpens out of frost |
| Headline H1–H2 | Fraunces (600 for the one etched word) | `@fontsource-variable/fraunces` | 300 / 600 · opsz 144 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.05 | −0.02em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 500 (heavier to hold over frost) | 1.0625rem, measure 54ch | 1.6 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | .72rem | 1.2 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 500 · `tnum` | .8rem; 1.75rem trace input | 1.3 | +0.02em | as data |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` | 400 | display +6% | 1.25 | 0 | — |

Licence: all SIL OFL 1.1 via @fontsource, self-hosted (Tiro Devanagari Hindi added; the body named no Hindi face). Pairing: soft-axis Fraunces reads as warm glass, a slightly heavier Inter Tight holds up on frosted grounds.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw margins, 24 px gutters, max 1440 px; three depth planes: world (z 10), frost (z 15, full-bleed), front (z 20: bottle, text, panels)
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; section padding 24vh / 16vh
- **Radius scale:** sm 2 px (inputs, badges) · md 0 (scenes, buttons) · lg 20 px (only the borrowed glass info panel from doc 10)
- **Border style:** no edges on scenes; panels have a 1 px inset highlight `rgba(255,255,255,.7)` top edge; inputs a 1 px `rgba(30,33,31,.24)` frame
- **Shadow / elevation:** flat UI; bottle: contact shadow `0 30px 50px -20px rgba(11,59,50,.30)` + 8 px ellipse at 30%, one gold 1 px rim light on the shoulder; panel: `inset 0 1px 0 rgba(255,255,255,.7)` only
- **Texture / overlay:** FG1 etched texture at 40–70% + SVG `feTurbulence` micro-grain; frost blur 8 → 32 px scrubbed by chapter; ≤ 5 condensation droplets per viewport; pre-blurred AVIF on low-power devices

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: sharp label + travelling arrow on a forest `#0B3B32` plate (radius 0), 52 px high (44 px sm), padding 0 28 px, Inter Tight 600 caps milk. Default: solid, sits on the front plane · hover: 1 px frost-edge frame draws clockwise (600 ms), a 64 px clear 'wipe' highlight sweeps once across, arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px `--c-accent` ring offset 3 px · active: plate darkens to `#07211C`, 0.98 scale (120 ms) · disabled: 40% opacity, no wipe · loading: a slow fog sweep across the label (1.2 s loop), `aria-busy`. A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: underline button: ink label + arrow, 1 px underline etched in `--secondary` that turns ink on hover (240 ms), no plate; 44 px hit area. Focus-visible: accent ring · active: underline 2 px · disabled: muted 40% · loading: underline fogs in and out (900 ms).
- **Text / arrow link**: Inter Tight 500 accent-colour text with etched underline drawing left → right (240 ms in `--secondary`, then ink) and `———→` arrow travelling 6 px · focus-visible: accent ring · active: underline 2 px · disabled: muted, no underline · loading: n/a.
- **Icon button** (incl. menu): 40 px square (44 px hit), 1.25 px ink or milk line icon, transparent; menu = two lines. Hover: 40 px clear lens appears behind the icon · focus-visible: accent ring · active: lens shrinks 0.92 · disabled: 30% · loading: lens fogs/clears 900 ms. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar on the front plane over a 92% frost strip (`backdrop-filter: blur(16px)` only on capable devices, else solid `#F1EEE4`); the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style); it stays sharp in front of the frost, never blurred, etched or fogged. Six links + RESERVE primary. Hides on scroll down. Mobile: 56 px bar, menu opens a full-screen frosted forest sheet with large Fraunces links that sharpen in (80 ms stagger); focus trapped, Esc closes.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 10 px milk dot with a soft frost halo · hover: 40 px frosted lens that clears the text under it · ROTATE: 72 px clear lens with `DRAG` on the 360 viewer · EXPLORE: 64 px soft square `WIPE` over the one wipe zone per page · ENTER: lens with `ENTER` over chapter/inner-page links · VIEW: lens with `VIEW` over images behind frost · TRACE: lens with a droplet ring and `TRACE` over trace nodes. Disabled: 30% halo. Touch: no cursor; wipes become one autoplayed pass with a Replay button.
- **Card / panel / info block**: front-plane panel `rgba(247,244,236,.92)` (dark: `rgba(11,59,50,.92)`), radius 0 (20 px only for the product info panel), padding 32 px / 20 px mobile, inset top highlight. Text always sharp and ≥ 4.5:1 (body ≥ 7:1). Hover (if linked): panel lifts 4 px, frost behind clears slightly · focus-visible: accent ring · loading: skeleton lines fog in.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): 20 px high, radius 2 px, Inter Tight 600 .66rem caps. Pending verification: transparent with `--c-pending` text and dotted underline `PENDING APPROVAL`; DEMO · not live data: charcoal `#171918` fill, milk label `DEMO · NOT LIVE DATA`, always sharp and visible on demo content; never frosted.
- **Input + form field** (Trace-your-milk bottle ID): trace bottle-ID field as a 'clear wiped' strip in the frosted pane: JetBrains Mono 500 at 1.75rem, 64 px high, radius 2 px, 1 px frame, label above, prefilled `DSG-BTL-000001-3 (sample format)`. Default: clear strip with frost around · hover: strip widens its clear zone 8 px · focus-visible: 2 px accent ring + frame ink · active: caret · disabled: frosted over, 40% · loading: frost slowly re-covers then clears line by line as results arrive (`aria-live=polite`) · error: pending-earth text "No record for this ID".
- **Divider / ornament**: a 1 px frost-edge highlight line over a 1 px `rgba(30,33,31,.10)` shadow line (an etched groove); on heritage, a 0.5 px gold rule.
- **Section header** (chapter number + title pattern): mono chapter number `06` + Inter Tight caps label `TRACEABILITY` on the front plane, title in Fraunces 300 that sharpens from blur 10 px (900 ms); one etched word per scene in Fraunces 600 `--secondary` with 1 px inner highlight.
- **Product info block** (variant name, code, price-pending, size, descriptors): borrowed glassmorphism panel (doc 10), radius 20 px, 92% milk, sharp text: code line in mono, name in Fraunces 48 px, editorial line; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→`. Mobile: opaque bottom sheet.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the one sharp object in a frosted world: bottle on the front plane, frost behind, world (C1–C4 / colour) behind that; contact shadow + gold shoulder rim light; condensation layer on the render at 12% (masked, composited, never generated). Float ±8 px / 6 s, tilt ±8°, rim light slides with tilt. Before 360 frames: ±25° skew turn with sheen; after: drag-to-rotate with an optional 20% frost overlay in front on /milk/[variant] cleared by the lens; counter `036 / 072` mono.
- **Trace node / timeline step**: node = a clear 'wiped' 20 px circle in the frosted forest pane with a 1 px milk ring; CHILLER node carries condensation. Default: clear circle · hover: circle widens to 28 px · focus-visible: accent ring (`#7FE0B8` on dark) · active: panel opens on the front plane, path segment sharpens · disabled/not reached: frosted over 50% · loading: frost pulse 1.6 s. Label `ILLUSTRATIVE JOURNEY — NOT LIVE DATA` always sharp. Nodes are buttons; Esc closes panel.

### 12.5 Iconography & illustration
Icons: 1.25 px line icons, round caps, 24 px grid, ink or milk, never frosted or blurred. Illustration: E1–E7 line drawings stay on paper chapters (no frost) except the CHILL station, which frosts over with one droplet. Photo treatment: real farm photography is shown unfrosted and sharp (frost belongs to the cold chain, not the field); variant worlds C1–C4 sit behind frost and are revealed by one wipe per page; warm frost only, never icy blue or pure white.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | sharpen headline, panel reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | frost in, fog/clear transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | droplet slide, bottle travel |
| `--dur-micro` | `240ms` | etched underline, arrow, lens |
| `--dur-reveal` | `900ms` | sharpen (blur 10 px → 0, 80 ms line stagger) |
| `--dur-scene` | `1200ms` | frost in (opacity 0 → 1, world blur 0 → 28 px) |
| `--dur-fog` | `600ms + 600ms` | scene fogs, next clears |
| `--refog` | `4000ms` | wiped stripe refogs |
| `--blur-range` | `8px → 32px` | frost density scrubbed ch. 02 → 06, back to 8 px in Heritage |

Signature: wipe-to-reveal (64 px stripe, once per page) and headlines sharpening out of frost. Scroll: Lenis + ScrollTrigger `scrub: 1`. Droplets: 3–5 per scene, slide 40–120 px over 6–10 s, never stream or splash. Reduced motion: static frost at a fixed blur, no droplets, no wipes, headlines appear sharp; wiped content also exists as text. `backdrop-filter` on at most one plane per viewport.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *acid-etched frosted glass mood, diffuse shadowless light, warm frost tones of milk white #F7F4EC and frost #E8ECE6 with deep forest green #0B3B32 and a touch of warm gold #C8A96B, never icy blue, calm, premium, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/frosted-glass/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| FG-H1 | `web/public/desigo/styles/frosted-glass/frosted-pane-backlit.png` | 3200×2000 (16:10) | no | Large frosted glass pane softly backlit by warm morning light, blurred indistinct shapes of green leaves behind it, calm, minimal, empty center | base negatives + icy blue tint, bathroom tiles, spa stones, water streams, hands | Ch. 01 hero frost field (desktop) |
| FG-H2 | `web/public/desigo/styles/frosted-glass/frosted-pane-backlit-portrait.png` | 1400×2400 (7:12) | no | Vertical frosted glass pane softly backlit by warm dawn light, a faint wiped vertical sliver showing pale gold desert dawn behind, minimal, empty center | base negatives + icy blue tint, bathroom tiles, spa stones, hands | Ch. 01 hero (mobile) |
| FG-V1 | `web/public/desigo/styles/frosted-glass/frost-canopy.png` | 3200×2000 + 1400×2400 portrait | no | Deep forest canopy seen through thick frosted bottle-green glass, soft pools of green light #1F5C45 on dark #0A2A20, no sharp leaves, empty center | base negatives + sharp foliage, people, icy blue | MASTER 26 frosted world (pre-blurred fallback) |
| FG-V2 | `web/public/desigo/styles/frosted-glass/frost-ruby.png` | 3200×2000 + 1400×2400 portrait | no | Layered red earth strata seen through frosted ruby glass, warm horizontal bands of crimson #B3202A and oxblood #4A0A0F light, soft, empty center | base negatives + blood, fire, sharp rocks | ROOT 14 frosted world |
| FG-V3 | `web/public/desigo/styles/frosted-glass/frost-amber.png` | 3200×2000 + 1400×2400 portrait | no | Abstract warm amber light #E89A1C seen through thick frosted glass on deep brown #5A3304, a large soft round glow behind center, apothecary-glass mood, no objects | base negatives + sharp sun disc, lens flare, people | BASE 3 frosted world |
| FG-V4 | `web/public/desigo/styles/frosted-glass/frost-ivory.png` | 3200×2000 + 1400×2400 portrait | no | Minimal ivory gallery room seen through satin frosted glass, warm ivory #F4EDE2 and sand #CDB89A, one soft cool shadow, almost white, empty center | base negatives + furniture in focus, artworks, people | ESSENTIAL frosted world |
| FG-J1 | `web/public/desigo/styles/frosted-glass/frosted-trace-pane.png` | 3600×2000 (16:9) | no | Large fogged glass pane in front of a deep forest-green #0B3B32 darkness, very faint soft mint light lines suggesting a path behind the glass, a few small condensation beads, calm, empty | base negatives + map labels, UI, numbers, neon | Ch. 06 traceability frosted pane, /trace |
| FG-T1 | `web/public/desigo/styles/frosted-glass/etched-glass.png` | 2400×2400, seamless | no | Seamless tileable texture of acid-etched frosted glass, very fine even satin grain, warm milk-white tint, backlit, flat, no objects | base negatives + streaks, scratches, fingerprints, blue tint | Sitewide frost layer (FG1) |
| FG-T2 | `web/public/desigo/styles/frosted-glass/condensation-atlas.png` | 2048×2048 (1:1) | yes (real alpha) | Forty separate water condensation droplets of varied sizes on transparent background, macro, crisp highlights, evenly spaced grid for a sprite sheet, no glass texture | base negatives + running streams, splashes, background glass | `Condensation` sprites, bottle droplet layer (FG3) |
| FG-T3 | `web/public/desigo/styles/frosted-glass/fog-wipe-macro.png` | 3200×2000 (16:10) | no | Macro of a fogged cold glass surface with a single soft wiped stripe across it showing warm golden light behind, minimal, no hands, no objects | base negatives + hands, fingers, writing in fog, icy blue | Ch. 15 final CTA, wipe demo (FG4) |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Do not generate the bottle with condensation; droplets are composited onto the real render in code. A real macro photo of condensation on the returnable bottle beats any generated droplet.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/48_frosted-glass.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/frosted-glass/
