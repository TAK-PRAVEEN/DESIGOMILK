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

**Why it fits.** The brief literally says "Apple product launch × interactive 3D exhibition". DESIGO®'s differentiator is a **traceability system**, told publicly as seven verbs (ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER), and a QR identity for each returnable bottle (*pending*; in pilot). A futuristic, instrument-like language makes that system feel credible and premium. The glass bottle with its clean cap is a beautiful object for spotlit, keynote-style presentation, and the 360 sequences make it a true exhibition object.

**Where it fights.** Milk is natural, rural and heritage-rich. A fully futuristic site would feel cold, industrial or "lab milk", the opposite of indigenous cows on free-grazing land. Over-claiming technology is also a risk (no "world's first", no RFID; the current system is QR, and the farm, plant and delivery apps are in pilot).

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Strong keynote direction; missing were colour roles and state colours, font packages and sizes, component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Inter Tight, Geist, Doto, JetBrains Mono, Fraunces). Body fix: internal system name removed from §2 (seven public verbs only) and the per-bottle QR identity marked pending / in pilot.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#7FE0B8` | signal: live/active state, primary CTA brackets, data glow | 12.4:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#0A0C0B` | label on a signal-filled (active) control | 12.4:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | brand green: links on light lab, secondary emphasis (UI only on void) | 3.8:1 vs bg (large text / UI only) |
| Accent | --c-accent | `#C8A96B` | heritage cross-reference only (gold tag linking ghee/heritage) | 8.7:1 vs bg (body-safe) |
| Background | --c-bg | `#0A0C0B` | dark lab void (never pure #000) | 16.7:1 with text |
| Surface | --c-surface | `#171918` | raised instrument cards on dark (brand charcoal) | text on surface 15.0:1 |
| Text | --c-text | `#ECEDEA` | text on void | 16.7:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#9BA19E` | secondary text, mono labels, PENDING tags | 7.5:1 vs bg (body-safe) |
| Line | --c-line | `#2A2F2D` | hairlines, construction lines at 4% | structural hairline, 1.4:1, never text |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#7FE0B8` / `#9BA19E` / `#7FE0B8` | ok = filled signal tick; pending = dotted underline + "PENDING" mono tag in muted; DEMO = large signal-outlined badge "DEMO · not live data" with signal text, sample IDs say "sample format" | signal on void 12.4:1; muted on void 7.5:1 |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | dark green void `#06140F`, cool overhead + `#1F5C45` rim, floor reflection tinted `#D9E8DF` 8%; readout `V1+ · 26 HERBS (pending) · EXTENDED COLD CHAIN (pending)` |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | deep red-black `#140405`, warm side light, `#B3202A` rim; `V1 · 14 HERBS (pending) · FREE GRAZED (pending)` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber-black `#140C02`, low golden key `#E89A1C`; `V2 · 3 HERBS (pending; conflict logged)` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | **white lab** `#FAFAF7`, soft daylight, ivory rim `#CDB89A`; `V3 · BALANCED DIET (pending)` |

Dark-chapter inversion: two labs. Dark lab is the default (hero, trace, technology, chambers). **White lab** (Quality, ESSENTIAL, /reserve, milk-as-material) swaps: `--c-bg` → `#FAFAF7`, `--c-surface` → `#F7F4EC`, `--c-text` → `#171918`, muted → `#5E6360`, `--c-primary` → `#1E7A68`, line → `#D9DAD5`, logo → charcoal. Transition = the scan-line expand (900 ms). Paired heritage chapters use their own style tokens.

Additional style tokens (kept from §3): `--fu-white` `#FAFAF7`, `--fu-milk` `#F7F4EC` (the milk itself, never blue-white), `--fu-forest` `#0B3B32` (footer), `--fu-line-light` `#D9DAD5`.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Inter Tight (alt. Geist) | `@fontsource-variable/inter-tight` (alt. `@fontsource-variable/geist`) | wght 200–300 | `clamp(4rem, 2rem + 9vw, 16rem)` | 0.9 | −0.04em | Sentence / upper for statements |
| Headline H1–H2 | Inter Tight · Fraunces Italic (one heritage line per chapter) | `@fontsource-variable/inter-tight` · `@fontsource-variable/fraunces` | 300 · italic 300 | H1 `clamp(2.6rem, 1.4rem + 5vw, 6rem)` · H2 `clamp(1.8rem, 1.3rem + 2vw, 3rem)` | 1.0 · 1.15 | −0.03em · 0 | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 (never lighter for body) | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence, 52ch |
| Label / UI | JetBrains Mono (technical labels) | `@fontsource-variable/jetbrains-mono` | 400 | `.6875rem` (11 px) | 1.3 | +0.12em | Upper |
| Data / mono | Doto (instrument numerals only) · JetBrains Mono (values) | `@fontsource-variable/doto` · `@fontsource-variable/jetbrains-mono` | Doto 700 · Mono 400 tabular | readout `clamp(4rem, 2rem + 10vw, 20rem)` · values `.875rem` | 1.0 · 1.4 | 0 · +0.02em | Numerals |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 300 / 400 | matches body | 1.65 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Inter Tight, Geist, Doto, JetBrains Mono, Fraunces, Noto Sans Devanagari: all OFL 1.1, no replacement needed. Pairing: one grotesk family from hairline display to UI keeps the system unified; mono and dot-matrix are the instruments; one Fraunces line is the bridge to heritage.

### 12.3 Layout & surfaces
- Grid: 12 columns (4 on mobile), 24 px gutters, 5vw margins, max-width 1440 px; visible construction lines at 4% on dark sections (hidden on mobile); text measure 52ch.
- Keynote pacing: one idea per screen; section heights in multiples of 100svh; pins 150–300vh.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192.
- Radius: `sm 0` · `md 2px` · `lg 4px` (instrument cards); corner brackets (┌ ┐ 12 px, 1 px) instead of rounded frames; pill only for cursor ring.
- Border: 1 px `#2A2F2D` on dark, `#D9DAD5` on light.
- Shadow: no UI shadows. Bottle: spotlight from above, rim light both sides, glossy floor with 30% reflection and caustics on dark; soft shadow + faint cool reflection on white.
- Texture: none (no grain). Light is the texture: spotlights, light sweeps, reflections.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: label (Inter Tight 500 upper +0.12em) + arrow framed by four 12 px signal corner brackets, 48 px, padding 14 px 24 px. States: default brackets 60% · hover brackets animate in to the label edge (200 ms), label shifts 2 px, arrow travels · focus-visible 2 px `#7FE0B8` ring offset 3 px + brackets 100% · active fill `#7FE0B8`, `#0A0C0B` label · disabled 30%, brackets static · loading "power-on" readout `···` (160 ms steps). 44 px target.
- **Secondary button**: label + arrow with 1 px `#ECEDEA` underline at 40%; hover underline to signal and arrow travels; focus signal ring; active signal label; disabled 30%; loading scanning underline.
- **Text / arrow link**: Inter Tight with 1 px underline at 40%; hover signal underline (240 ms) and 2 px arrow shift; focus signal ring. On white lab: green `#1E7A68`.
- **Icon button (incl. menu)**: 40 px square with corner brackets on hover; 1.25 px monoline glyph, square terminals, 20 px grid; idle outline, active signal fill. Menu = two hairlines → X. Focus signal ring; disabled 30%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: void bar 64 px (56 px mobile), 1 px `#2A2F2D` rule, logo left, links in mono labels, RESERVE bracketed primary. Mobile: menu opens a full-screen dark lab with links 40 px Inter Tight 200 and mono index numbers, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default: 20 px 1 px crosshair with centre dot on dark / 10 px ring on light · hover corner brackets snap around the target (magnetic ≤ 6 px) · ROTATE `DRAG · 360°` mono over the bottle · EXPLORE brackets + `EXPLORE` · ENTER `ENTER →` over chambers · VIEW `VIEW` over process photos · TRACE crosshair locks to map nodes with node code. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: InstrumentCard: `#171918`, 1 px `#2A2F2D`, radius 4 px, corner brackets, padding 24 px, mono labels + Inter Tight values. Hover (interactive) brackets to signal; focus signal ring; readouts power on (0 → .6 → 1 in 160 ms).
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: mono 11 px upper, 22 px, 1 px border. Pending verification: dotted underline + `PENDING` tag in `#9BA19E`. DEMO · not live data: large signal-outlined badge with signal text, always visible on the spatial map and the lookup terminal; sample IDs carry "sample format".
- **Input + form field (Trace-your-milk bottle ID)**: LookupTerminal: 56 px, `#0A0C0B` field, 1 px `#2A2F2D` border with corner brackets, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)` and a format hint line. States: hover border `#9BA19E` · focus-visible signal ring + brackets · error `#B3202A` border + mono message · disabled 30% · loading step-by-step reveal with timestamps (DEMO). Visible `<label>`.
- **Divider / ornament**: 1 px hairline with tick marks every 8 px for 64 px at the left (a ruler), or the horizontal scan line on section change.
- **Section header (chapter number + title pattern)**: mono index `06 — TRACE` + Inter Tight 200 headline at display size + one Fraunces italic line tying to heritage.
- **Product info block (variant name, code, price-pending, size, descriptors)**: instrument card: V-CODE (mono), name (Inter Tight 300), size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline + PENDING tags, readout line of descriptors (pending), CTA `Trace this bottle →`. Callouts available as a list.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: SpotlitStage: bottle spotlit from above, rim light both sides, glossy black floor with 30% reflection and animated caustics (dark) / soft shadow + faint reflection (white lab). Keynote rotation: frames scrubbed across 300vh with leader-line callouts (cap, glass, label, QR) by angle. Before frames arrive: ±25° turn + light sweep, never a fake spin; later the GLB `model` slot enables true orbit.
- **Trace node / timeline step**: SpatialTraceMap node: luminous 10 px point with 1 px ring; path = signal line in slight 3D perspective; camera glides node to node. States idle 50% · hover ring expands · focus-visible signal ring · active instrument card opens · pending hollow dashed ring. DOM/SVG fallback; keyboard order follows the route.

### 12.5 Iconography & illustration
- Icons: 1.25 px monoline, square terminals, 20 px grid; outline idle, signal fill active; no glow on icons.
- Illustration: none decorative; hairline instrumentation (ticks, coordinates, brackets, leader lines) is the graphic language.
- Photography: real process photos (lab test, chiller, filling) graded cool-neutral in precise frames with mono captions; farm and cows never rendered as sci-fi (paired heritage style).

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 200 / 600 / 1200 ms | brackets · reveals · scene |
| `--fu-sweep` | 1600 ms diagonal specular band | light sweep on chapter entry |
| `--fu-power-on` | 160 ms (0 → .6 → 1) | readouts appear |
| `--fu-scan` | 900 ms | white lab ↔ dark lab line expand |
| `--fu-keynote` | `scrub: 1` over 150–300vh | pinned rotations / camera moves |

- Keynote discipline: one object, one light, one idea per screen. Numbers count up with tabular figures; no glitch.
- 360 frames preload progressively (first 12, then the rest), decoded with `createImageBitmap`.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: static bottle at its best angle, callouts as a list, no sweeps or scrubs.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *clean optimistic near-future product exhibition, dark lab void #0A0C0B and graphite #171918 or white lab #FAFAF7, signal mint #7FE0B8 used sparingly, brand green #1E7A68, spotlight and soft reflections, precise, calm, keynote style, premium, no neon purple, no glitch, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/futuristic/hero-landscape.png` | 3200×2000 (16:10) | no | Dark void exhibition stage, glossy black reflective floor, a single soft overhead spotlight pool at the centre, faint caustic light ripples on the floor, subtle cool rim light at the edges, empty centre for an object | neon purple, cyberpunk city, HUD clutter, code rain, lens flare, objects on stage | Hero (ch. 01), /milk/[variant] launch |
| 2 | `web/public/desigo/styles/futuristic/hero-portrait.png` | 1400×2400 (7:12) | no | Tall dark void with a glossy floor in the lower third and a soft spotlight pool, empty centre | neon purple, HUD, objects | Hero mobile |
| 3 | `web/public/desigo/styles/futuristic/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Dark green void #06140F specimen chamber, cool overhead light and a bottle-green #1F5C45 rim glow, glossy floor with a faint pale-green #D9E8DF reflection, empty centre | plants, sci-fi props, neon purple, HUD | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/futuristic/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Deep red-black #140405 specimen chamber, warm side light and a crimson #B3202A rim glow, glossy floor, empty centre | alarm red lights, neon, HUD | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/futuristic/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Amber-black #140C02 specimen chamber lit by a low golden key light #E89A1C, glossy floor with warm reflection, empty centre | fire, neon, HUD | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/futuristic/world-essential.png` | 3200×2000 + 1400×2400 crop | no | White lab #FAFAF7 cyclorama with soft daylight, a faint ivory #CDB89A rim glow, a subtle cool reflection on a white floor, empty centre | lab equipment, people, blue-white cast | Four milks ch. 08, /milk/essential, Quality |
| 7 | `web/public/desigo/styles/futuristic/trace-spatial-network.png` | 3600×2000 | no | Dark spatial network of small luminous mint points connected by thin signal lines in slight 3D perspective, scattered points converging into one hub, deep void background, minimal | map labels, country borders, HUD text, neon purple | Traceability ch. 06, /trace (WebGL fallback still) |
| 8 | `web/public/desigo/styles/futuristic/texture-caustics.png` | 2048×2048, seamless | no | Seamless tileable caustic light pattern, soft white light ripples on pure black, for an animated floor caustic offset | colour, objects, vignette | SpotlitStage floor caustics |
| 9 | `web/public/desigo/styles/futuristic/milk-ribbon-highkey.png` | 3000×1500 | yes (real alpha) | A single glossy ribbon of pouring milk curling in mid-air with a crisp specular highlight, isolated on transparent background, soft high-key studio light | splashes everywhere, glass, bottle, blue-white tint | Milk as material ch. 09 |
| 10 | `web/public/desigo/styles/futuristic/technology-modules.png` | 3200×2000 | no | Seven minimal instrument modules in a row on a dark graphite surface, each a small rounded block with a single soft signal-mint indicator light, precise hairline gaps, calm | screens with text, buttons with labels, neon purple, cables mess | Technology ch. 11, /technology |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/34_futuristic.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/futuristic/
- [ ] No blocked technology claims (RFID, "world's first"); internal system names never shown
- [ ] Paired heritage style used for farm, breeds, heritage and ghee
