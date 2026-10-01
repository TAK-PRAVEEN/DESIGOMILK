# 34 · Futuristic — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Futuristic design imagines products as objects from a near, optimistic future: precise geometry, luminous surfaces, spatial depth, thin technical type, interfaces that feel like instruments, and objects presented as if in a laboratory or a launch keynote. It differs from Cyberpunk (dystopian, neon, dirty) and Cybercore (dense digital texture). Futuristic is **clean, bright, confident and calm**.

Reference points:
1. **Apple product launch pages (Vision Pro, iPhone Pro)**: a single object in darkness or white void, light sweeps, scroll-driven 3D rotation, enormous type.
2. **Teenage Engineering and Nothing (Phone (1) launch)**: technical labels, dot-matrix details, honest hardware.
3. **Dieter Rams / Braun and Japanese lab design**: instruments that are calm, legible and precise. This is the "near future" that ages well.

## 2. Fit for DESIGO® — score 4 / 5 (Technology, Trace and product launch) · 3.5 / 5 (whole site)

**Why it fits.** The brief literally says "Apple product launch × interactive 3D exhibition". DESIGO®'s differentiator is a **traceability system** (RTCOM: ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER) and a QR identity on every bottle. A futuristic, instrument-like language makes that system feel credible and premium. The glass bottle with its clean cap is a beautiful object for spotlit, keynote-style presentation, and the 360 sequences make it a true exhibition object.

**Where it fights.** Milk is natural, rural and heritage-rich. A fully futuristic site would feel cold, industrial or "lab milk", the opposite of indigenous cows on free-grazing land. Over-claiming technology is also a risk (no "world's first", no RFID; current system is QR, and the RTCOM apps are in pilot).

**Recommendation.** Use Futuristic as the language for the **bottle hero / product launch moments, Chapter 06 Trace, 07 Quality, 11 Technology, 13 Trace your milk, /trace and /technology**, and pair it with a warm heritage style (Wabi-Sabi, Editorial, Mixed Media) for farm, breeds, heritage and ghee. The idea: "Tradition is the source. Technology protects the journey." becomes the literal style switch.

## 3. Art direction

### Palette ("white lab / dark lab")
| Token | Hex | Role |
|---|---|---|
| `--fu-void` | `#0A0C0B` | Dark lab background |
| `--fu-graphite` | `#171918` | Raised surfaces on dark (brand charcoal) |
| `--fu-line-dark` | `#2A2F2D` | Hairlines on dark |
| `--fu-white` | `#FAFAF7` | White lab background (cooler than milk) |
| `--fu-milk` | `#F7F4EC` | The milk itself, warm reference |
| `--fu-line-light` | `#D9DAD5` | Hairlines on light |
| `--fu-signal` | `#7FE0B8` | Live/active state, data glow |
| `--fu-green` | `#1E7A68` | Brand accent, links on light |
| `--fu-forest` | `#0B3B32` | Brand dark, footer |
| `--fu-gold` | `#C8A96B` | Heritage cross-reference only |
| `--fu-text-dark` | `#ECEDEA` | Text on void (≥ 15:1) |
| `--fu-text-mute` | `#9BA19E` | Secondary on void (≥ 6:1) |

### Typography
- Display: **Inter Tight** 200–300 at very large sizes (8–16rem), tracking −0.04em. It is the master UI face, so the system stays unified. An alternative for a more "instrument" feel is **Geist** (OFL).
- Technical labels: **JetBrains Mono** 400, 11px, uppercase, +0.12em ("V1+ · 1000 ML *pending* · QR-ID").
- Dot-matrix accents: **Doto** (OFL) for numerals on instrument readouts only ("16", "05:42" demo).
- Editorial bridge: **Fraunces** italic, used only in the one sentence that ties to heritage per chapter.

### Texture and imagery
- No grain. Surfaces are clean, with **light** as the texture: soft spotlights, light sweeps across glass, faint reflections on a glossy floor.
- **Glass and caustics**: the bottle casts a caustic light pattern on the floor (a pre-rendered or generated caustic texture, animated by offset).
- **Hairline instrumentation**: 1px rules, tick marks, coordinate labels, corner brackets (┌ ┐) around focus areas.
- Photography: real DESIGO® process photos (lab test, chiller, filling line) graded cool-neutral, presented in precise frames with technical captions.

### Iconography
1.25px monoline icons with square terminals, built on a 20px grid; states: outline (idle), signal fill (active).

### Grid
A 12-column grid with **visible construction**: on dark sections, faint 1px column lines at 4% opacity. Corner-bracketed focus frames. Content measures: 52ch text. Section height multiples of 100svh for keynote pacing. Mobile: 4 columns, brackets kept, construction lines hidden.

## 4. Motion and interaction language
- **Keynote pacing.** One idea per screen. Long pins (150–300vh) with scroll-scrubbed camera moves (`scrub: 1`). Scenes 1200ms `cubic-bezier(.65,0,.35,1)`, reveals 600ms `cubic-bezier(.16,1,.3,1)`.
- **Light sweeps.** A diagonal specular band crosses the bottle and type (CSS mask with a linear gradient, 1600ms) at chapter entry.
- **Instrument UI.** Numbers count up with tabular figures; readouts appear with a 2-frame "power on" (opacity 0 → 0.6 → 1 in 160ms). No glitch.
- **Cursor.** A precise 1px crosshair (20px) with a centre dot on dark; a 10px ring on light. Over interactive elements it shows corner brackets that snap around the target (magnetic ≤ 6px). Over the bottle: `DRAG · 360°` in mono.
- **Hover.** Brackets animate in (200ms); the button label shifts 2px with arrow travel.
- **Transitions.** White lab ↔ dark lab: a horizontal light line expands to full screen (900ms), like a scanner bar but slow and clean.

### The bottle
**The exhibition object.** On dark: spotlit from above, rim light both sides, a glossy black floor with a 30% reflection and a caustic pattern. On white: soft shadow, a faint cool reflection. Scroll drives a keynote rotation. With 360 frames: frame index scrubbed across 300vh, with technical callouts (cap, glass, label, QR) appearing at the right angles via leader lines. Before frames arrive: the master ±25° turn with a light sweep. No fake spin. Later, a GLB model enables true camera orbits (the viewer's `model` slot).

## 5. Variant worlds — four "specimen chambers"

| Variant | Chamber | Light | Readout |
|---|---|---|---|
| MASTER 26 (V1+) | Dark green void `#06140F` | Cool overhead plus green rim `#1F5C45`; floor reflection tinted `#D9E8DF` 8% | `V1+ · 26 HERBS (pending) · EXTENDED COLD CHAIN (pending)` |
| ROOT 14 (V1) | Deep red-black `#140405` | Warm side light, `#B3202A` rim | `V1 · 14 HERBS (pending) · FREE GRAZED (pending)` |
| BASE 3 (V2) | Amber-black `#140C02` | Low golden key `#E89A1C` | `V2 · 3 HERBS (pending; conflict logged)` |
| ESSENTIAL (V3) | **White lab** `#FAFAF7` | Soft daylight; ivory rim `#CDB89A` | `V3 · BALANCED DIET (pending)` |

ESSENTIAL is the only white chamber, which deliberately signals simplicity. The info panel is an instrument card: corner brackets, mono labels, Inter Tight values, and the pending marker as a dotted underline plus "PENDING" tag in `--fu-text-mute`.

## 6. Page-by-page treatment

1. **Hero.** Dark void, a spotlit bottle on a reflective floor, light sweep on load (1.6s). "Milk from the source." in Inter Tight 200 at 12rem; secondary line in Fraunces italic: "Traceable milk from indigenous Indian cows."
2. **Bottle becomes the story.** Keynote rotation; six words appear as technical callouts with leader lines (ORIGIN, BREED, FEED, FARM, QUALITY, TRACE). The void fades to forest.
3. **Cow to bottle.** Style switches to warm heritage (paired style). Futuristic appears only as a thin progress instrument at the top (7 ticks).
4. **Farm.** Paired heritage style (photography).
5. **Breeds.** Paired heritage style.
6. **Traceability.** **Futuristic flagship**: a dark spatial map, nodes as luminous points connected by signal lines in a slight 3D perspective (CSS 3D or a light WebGL layer), camera glides node to node with scroll; side panel as instrument card. "Illustrative journey — not live data".
7. **Quality.** White lab: "16" in Doto at 20rem; 16 parameter rows with tick boxes that light in sequence; instrument readouts for temperature and fat/SNF showing `— pending lab confirmation`.
8. **Four milks.** Four specimen chambers (§5).
9. **Milk as material.** A high-key white void with a single glossy milk ribbon (canvas, specular highlight) and light sweep.
10. **Heritage.** Paired heritage style (paper, linework).
11. **Technology.** Dark lab: "TRADITION IS THE SOURCE. / TECHNOLOGY PROTECTS THE JOURNEY." Seven verbs as seven instrument modules lighting up in sequence; each opens a one-sentence explanation (public vocabulary only, no RFID, no "world's first").
12. **Ghee.** Paired heritage (warm gold), with a small futuristic trace tag linking each grade to its source milk.
13. **Trace your milk.** A precise lookup terminal: bottle ID input with format hint (`DSG-BTL-000001-3`, sample format), step-by-step reveal with timestamps. A large DEMO badge in signal.
14. **Story.** Paired editorial.
15. **Final CTA.** The bottle returns in the dark void and the light rises to milk white. "Know where your milk comes from."

### Inner pages
- **/milk**: four chambers in a horizontal gallery with keyboard navigation.
- **/milk/[variant]**: **the launch page**: 300vh 360 rotation with callouts, specs (pending-marked), "Trace this bottle".
- **/ghee**: paired heritage with instrument tags.
- **/origin**: paired heritage.
- **/trace**: the full spatial map plus lookup.
- **/technology**: seven modules, one per screen.
- **/about**: paired editorial.
- **/reserve**: clean white-lab form, instrument-style summary panel.

## 7. Component variants
`SpotlitStage` (bottle + reflection + caustics) · `LightSweep` · `CalloutLeader` (360-angle-aware) · `InstrumentCard` · `Readout` (Doto/mono, pending-aware) · `SpatialTraceMap` · `ModuleGrid` (TechnologyGrid) · `LookupTerminal` · `BracketCursor` · `ScanTransition` · `ProgressInstrument` · `AssetSlot` as a bracketed empty frame with a mono label "ASSET PENDING · 360 SEQUENCE · MASTER 26".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Lab palettes, Inter Tight display, mono, Doto | Tokens, specimen | Text ≥ 7:1 on void; Doto only for numerals | Brand colours | 2 |
| 2 | Shell | Construction grid, nav, bracket cursor | Shell, `BracketCursor` | Cursor snaps ≤ 6px; no jank | none | 3 |
| 3 | Hero and bottle | Spotlit stage | `SpotlitStage`, `LightSweep` | Reflection and caustics ≤ 4ms/frame on mid Android | Renders (alpha) | 4 |
| 4 | Bottle → story | Keynote rotation + callouts | Chapter 02 | Callouts align to bottle features | A (best), renders (fallback) | 4 |
| 5 | Cow → bottle | Paired-style chapter + progress instrument | Chapter 03 | Clear style handoff | Paired style tokens | 3 |
| 6 | Origin | Paired style | Chapter 04 | — | B1, B2 | 2 |
| 7 | Breeds | Paired style | Chapter 05 | Pending labels | B3 | 2 |
| 8 | Trace map | Spatial map | `SpatialTraceMap` | Keyboard nav; DOM fallback without WebGL; DEMO | traceNodes, B7 | 6 |
| 9 | Quality | White-lab instruments | Chapter 07 | No invented values | Lab approval, B6 | 3 |
| 10 | Four worlds + 360 | Specimen chambers | Chapter 08 | Frame scrub smooth; callouts by angle | A | 6 |
| 11 | Heritage | Paired style | Chapter 10 | — | Line art | 2 |
| 12 | Technology | Instrument modules | Chapter 11 | No blocked claims (RFID, world's first) | none | 4 |
| 13 | Ghee | Paired + trace tags | Chapter 12 | Prices pending | Jar render | 2 |
| 14 | Trace demo | Lookup terminal | `LookupTerminal` | DEMO prominent; sample-format notice | demoProvider | 3 |
| 15 | /milk pages | Launch pages | 5 routes | 300vh rotation; callouts accessible as list | A | 5 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Trace page reuses map | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified only | none | 3 |
| 18 | Mobile | Vertical keynote | Mobile pass | Reflection off < 400px; map as vertical line | none | 3 |
| 19 | A11y + reduced motion | Static exhibition | No sweeps, no scrubs | Callouts as list; focus brackets visible | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | 360 frames preloaded progressively (first 12 then rest); LCP < 2.5s | all | 3 |

Total ≈ 64 days (plus paired-style chapters from the chosen heritage style).

## 9. Assets needed from DESIGO®
- **360 sequences (A) are critical**. This style is built around rotation. A second, higher-frame (120) set for the hero would be ideal.
- Future: GLB models per bottle (enables true orbit and light).
- Process photography (B6, B7, B8) for the trace and technology chapters.
- Confirmed technical facts for callouts (bottle volume, QR format, chiller / cold chain wording), each pending until approved.

## 10. Performance, accessibility and mobile
- WebGL only for the trace map, optional; DOM/SVG fallback is the default on low-end devices (`navigator.deviceMemory < 4`).
- 360 frames: WebP 40–70 KB, progressive preload, decoded via `createImageBitmap`, drawn to canvas.
- Dark sections: no pure #000; text weight ≥ 300 at display sizes and 400 for body.
- Reduced motion: static bottle at its best angle, callouts as a list, no light sweeps or scrubs.
- Mobile: bottle 55svh, callouts as tappable dots, chambers as full-screen swipes.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Clean future, not cyberpunk: no neon purple, glitch, HUD clutter or fake code rain.
2. Technology claims follow the public vocabulary only: QR (not RFID), "in pilot" where true, never "world's first".
3. Always pair with warm heritage chapters. Farm and cows are never rendered as sci-fi.
4. The milk must look like milk: warm white `#F7F4EC`, never blue-white.
5. One object, one light, one idea per screen (keynote discipline).
6. Demo data is loudly labelled DEMO; sample bottle IDs say "sample format".
7. No fake 3D: until frames or a GLB arrive, the bottle turns ±25° only.

**Risks**: a cold "lab milk" impression, technology overclaim, heavy pages. Mitigation: paired heritage style, claim rules, progressive loading.

**Best used for:** the bottle launch moments and the Trace / Quality / Technology / Trace-your-milk chapters, paired with a warm heritage style.
