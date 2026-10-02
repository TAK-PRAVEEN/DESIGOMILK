# 20 — Dark Mode UI · DESIGO® build plan

**Fit score: 4 / 5** · **Best used for:** chapters 06 *Traceability*, 11 *Technology* and 13 *Trace your milk*, the
pages /trace and /technology, and a **site-wide dark theme** (system preference plus a toggle) that every other style
must support. A full dark-first site is possible and dramatic, but milk-white is the brand's home colour, so dark
should be a mode, not the identity.

---

## 1. Style essence

Dark Mode UI is the interface language of pro tools and premium devices: near-black layered surfaces, elevation shown
by *lighter* surfaces instead of shadows, restrained accent colour, crisp type tuned for light-on-dark, precise
data display and subtle glows marking active state. It began as a developer and power-user preference and became
mainstream through iOS, macOS and Material dark themes. In marketing it signals *precision, technology, night*.

Three reference points:
1. **Apple product pages for Pro hardware** (black stage, single lit object, specs in light grey).
2. **Linear, Vercel and Raycast**: layered near-black surfaces, hairline borders and very calm accent glows.
3. **Indian night logistics**: the cold-chain, the 4 a.m. plant and the pre-dawn delivery run. DESIGO®'s work
   *really* happens in the dark, which gives the mode a narrative truth.

## 2. Why it fits DESIGO®

- **Glass plus milk on black is spectacular.** A white liquid in clear glass, lit from the side on charcoal, is the
  strongest possible product contrast. It is the Apple-launch hero.
- **Technology and traceability** read as credible in a precise dark UI (data, IDs, timestamps).
- **Brand already owns a dark colour:** forest `#0B3B32` and charcoal `#171918` are tokens, and the design system
  already scripts chapters 06, 11 and 13 as dark.
- **Accessibility and comfort:** many Indian users browse in system dark mode at night, so a proper dark theme is a
  quality signal.

**Where it fights:** a fully dark food site can feel cold or nocturnal and lose "fresh milk morning" warmth. Score 4:
excellent as the tech and trace layer plus a first-class theme, while the default identity stays milk-white.

## 3. Art direction

### Palette: "Cold Chain Night" (warm-tinted darks, never pure black)
| Token | Hex | Use | Contrast note |
|---|---|---|---|
| `--d-bg` | `#0E100F` | Page background (charcoal deepened) | — |
| `--d-surface-1` | `#171918` | Cards, nav (brand charcoal) | — |
| `--d-surface-2` | `#1F2220` | Raised panels | — |
| `--d-surface-3` | `#282C29` | Popovers, inputs | — |
| `--d-forest` | `#0B3B32` | Trace and tech scenes (brand forest) | — |
| `--d-border` | `rgba(247,244,236,.09)` | Hairlines | — |
| `--d-text` | `#F1EDE3` | Primary text (milk, slightly dimmed to avoid halation) | ≈ 16:1 on bg |
| `--d-text-2` | `#B8B3A7` | Secondary text | ≈ 9:1 |
| `--d-text-3` | `#8A867C` | Tertiary / captions (≥ 14 px only) | ≈ 5.1:1 |
| `--d-green` | `#3FA58C` | Links, primary (DESIGO green lifted for dark) | ≈ 6.3:1 |
| `--d-signal` | `#7FE0B8` | Live/active data, focus glow | ≈ 12:1 |
| `--d-gold` | `#D4B97F` | Ghee, heritage accents on dark | — |
| `--d-warn` | `#E8B04A` | "Pending" status | — |

Variant accents on dark (cap colour lifted for luminance; never as small text):
MASTER `#2E8A67` · ROOT `#D8424B` · BASE `#F2A93A` · ESSENTIAL `#DCC9AA`. Variant *deep* tones become scene
backgrounds: MASTER `#0A2A20`, ROOT `#2A0609` (deepened from `#4A0A0F`), BASE `#2B1802`, ESSENTIAL `#24201A`.

**Light theme** maps 1:1 to the brand system (milk, ink, forest), so every component ships with both token sets.

### Typography
- **Display:** *Inter Tight* 300–600 at display sizes with tight tracking (−0.03em). It looks like a precision tool.
  *Fraunces* is kept for one emotional line per chapter (italic, weight 300).
- **Body:** *Inter* (OFL, opsz axis) 16/26 with slightly increased letter-spacing (+0.005em) and weight 420 on
  dark to counter thinning (variable weight).
- **Data:** *JetBrains Mono* 13 px, tabular numbers, for IDs, timestamps and temperatures.
- **Devanagari:** *Hind* (Indian Type Foundry, OFL).

### Texture, imagery, iconography
- Surfaces: no textures. A 1% noise on `--d-bg` only, to avoid banding in gradients.
- **Lighting is the imagery.** Product is lit with a key light from upper left and a rim light (matching the 360
  brief), with a soft radial "stage pool" beneath (`#1F2220 → #0E100F`).
- Photography is graded darker (shadows lifted to `#141615`, never crushed) and shown in surface-2 frames with
  hairline borders.
- Icons: Lucide-style 1.5 px stroke, 20 px, `--d-text-2`, and `--d-signal` when active.
- Data viz: hairline grids `rgba(247,244,236,.06)`, signal-green paths with a 6 px glow (box-shadow / SVG filter).

### Grid
A 12-column grid with a 24 px gutter and 5vw margins, plus an **app-shell layout** on /trace and /technology:
left rail (240 px) for steps and nodes, main stage, right inspector (320 px) for node details. Elevation scale:
0 bg, 1 surface-1, 2 surface-2, 3 surface-3. Radius: 2 px (brand `--r-1`) on panels, with no large rounding.

## 4. Motion and interaction language

- **Precise and quick.** Micro 160–240 ms, panels 400 ms, scenes 900 ms. Easing `cubic-bezier(.16,1,.3,1)` for
  reveals and `cubic-bezier(.65,0,.35,1)` for panel slides.
- **Light as motion:** sections "power on". Hairlines draw (300 ms), then the content fades in, then the accent glow
  rises (opacity 0 → 1, 600 ms). It is like a device waking.
- **Scroll:** the trace path draws with scroll (`scrub: 1`), and the active node gets a 2-pulse glow (no infinite
  blinking).
- **Hover:** surfaces lift one elevation step (bg colour change, 160 ms), borders brighten to 16% and links
  underline in `--d-green`.
- **Focus:** 2 px `--d-signal` ring with a 4 px soft glow, highly visible.
- **Cursor states:** default = 8 px milk dot · link = 32 px hairline ring · drag (360) = ring with ↔ ticks ·
  view = ring with "VIEW" in mono 9 px · input = native caret · disabled = 20% ring. Mix-blend `difference` is off
  (it breaks on dark gradients).
- **Theme toggle:** a 600 ms cross-fade of tokens via the View Transitions API, with a circular reveal from the toggle
  position. It respects `prefers-color-scheme` and stores the choice in `localStorage` (try/catch).

## 5. The hero bottle and the four variants

The **black stage**: one bottle, lit like a product launch.

- The bottle stands on a faint reflective floor (a 20% opacity vertically flipped copy, masked with a gradient,
  blurred 2 px), plus a soft stage pool. Float ±10 px over 6 s, pointer tilt ±8°, and the rim light brightens on the
  side facing the pointer.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards scroll scrubs the frame index, and
  on /milk/[variant] the viewer gets an "inspector" HUD: frame counter, angle in degrees and a ⟲ auto-spin toggle, all mono.
- **Milk luminance:** on dark, the white milk becomes the brightest thing on the page, so the bottle *is* the light source.

| Variant | Dark world |
|---|---|
| **MASTER 26** | Deep green-black `#0A2A20` stage, a faint canopy-shadow gobo, accent `#2E8A67` on the code label "V1+". |
| **ROOT 14** | Oxblood-black `#2A0609`, a warm red rim light from the right, accent `#D8424B`. |
| **BASE 3** | Umber-black `#2B1802`, an amber pool of light beneath, accent `#F2A93A`. |
| **ESSENTIAL** | Neutral `#24201A`, white key light only. The most "Apple" of the four. |

## 6. Page-by-page treatment

(Dark theme. In light theme the same layouts map to brand light tokens.)

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | The black stage, a single lit bottle, "Milk from the source." in Inter Tight 300, and a sub-line in `--d-text-2`. In light theme this becomes milk white (the brand default). |
| 02 | Bottle becomes the story | Six words as spec-sheet labels around the bottle, hairline leaders and mono numbering 01–06. Background charcoal → forest. |
| 03 | Cow → bottle | Seven stations as a horizontal "pipeline" UI: cards on surface-1, a status dot per station and a progress line. |
| 04 | Where it begins | Documentary photos, darker grade, in hairline frames. Warmth via `--d-gold` captions. |
| 05 | Breeds | Breed list as a two-pane browser (list left, portrait right), with a status badge in `--d-warn` "approval pending". |
| 06 | Traceability | **Signature.** Forest app-shell: rail of nodes, stage with the glowing path and an inspector panel with `traceNodes[].body` and demo values in mono. Label: "Illustrative journey — not live data". |
| 07 | Quality | A dashboard of 16 parameter tiles in surface-2, each showing "— pending lab confirmation" in `--d-warn`, plus three instrument gauges with no values. |
| 08 | Four milks | Four lit stages (section 5) with a tabbed variant switcher (01–04) styled as a segmented control. |
| 09 | Milk as material | Milk ribbons glowing white on black: a high-contrast cinematic interlude. |
| 10 | Heritage | **Exception: switch to paper (light) even in dark mode.** Heritage needs warmth. Fraunces italic, line art. In dark theme use `#1E1B16` warm-dark paper with `--d-gold` rules. |
| 11 | Technology | **Signature.** Perspective grid floor, seven verbs as "system modules" lighting up in sequence, and the statement in Inter Tight caps. |
| 12 | Ghee | Warm-dark `#1C160C` with a gold-lit jar and three grades in surface cards. |
| 13 | Trace your milk | **Signature.** A command-palette-style input (⌘K pattern, but plain text "Enter Bottle ID"), results as a vertical timeline with timestamps in mono, and a persistent `DEMO` pill in `--d-warn`. |
| 14 | Story | A timeline on surface-1, verified milestones only. |
| 15 | Final CTA | The bottle on the black stage, the light rising to forest. "Know where your milk comes from." |

**Inner pages:** /milk is four stages in a 2×2 grid · /milk/[variant] is the stage, 360 viewer with inspector HUD and
a spec table · /ghee is gold-lit · /origin is documentary in the dark grade · /trace is the full app-shell explorer
(rail, stage, inspector) · /technology has seven modules, each expandable · /about is a timeline (no supporters listed until written evidence is on file, KB Q34) · /reserve is a dark form with a large variant segmented control.

## 7. Component variants

`ThemeProvider` (tokens, toggle, View Transition reveal) · `Surface` (elevation 0–3) · `HairlinePanel` · `StageLight`
(pool plus reflection) · `InspectorHUD` (360 viewer overlay) · `AppShell` (rail/stage/inspector) · `NodeRail` ·
`StatusBadge` (verified / pending / demo) · `MetricTile` · `SegmentedControl` · `CommandInput` · `TraceMap.appShell`
· `TechnologyGrid.modules` · `GlowFocus` · `DarkCursor` · `AssetSlot.dark`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Dual-theme tokens | Dark and light token sets, contrast matrix | Every text token ≥ 4.5:1 (body ≥ 7:1) in both themes; automated test | — | 3 |
| 2 | Grid & shell | Theme toggle, nav, cursor, app shell | `ThemeProvider`, `AppShell`, `DarkCursor` | No flash of wrong theme (inline script sets class before paint) | — | 4 |
| 3 | Hero | Black stage | `StageLight`, reflection | Reflection aligned; LCP ≤ 2.5 s; light theme equivalent | Render | 3 |
| 4 | Bottle → story | Spec labels | Pinned scene | Static in reduced motion | — | 3 |
| 5 | Cow → bottle | Pipeline UI | 7 station cards | Mobile vertical pipeline | B4, B6–B8 | 4 |
| 6 | Origin / farm | Dark-grade documentary | Frames, grading LUT guidance | Faces and animals not crushed (shadows ≥ `#141615`) | B1, B2 | 3 |
| 7 | Breeds | Two-pane browser | Breed browser | Pending badges; keyboard navigation | B3 | 3 |
| 8 | Trace map | App-shell trace | `TraceMap.appShell`, inspector | Illustrative label; arrow-key node navigation; `aria-live` inspector | — | 6 |
| 9 | Quality | Metric dashboard | 16 tiles, 3 gauges | No values without confirmation | — | 3 |
| 10 | Four worlds + 360 | Lit stages, HUD | 4 stages, `InspectorHUD` | HUD shows real frame index from the 360 set | 360 (A) | 7 |
| 11 | Heritage | Warm exception | Paper scene (both themes) | Warmth preserved in dark | — | 2 |
| 12 | Technology | Modules | `TechnologyGrid.modules` | Public vocabulary | — | 4 |
| 13 | Ghee | Gold-lit | Scene | — | Jar photo | 2 |
| 14 | Trace-your-milk | Command input | `CommandInput`, timeline | DEMO pill always visible; result announced to screen readers | — | 4 |
| 15 | /milk, /milk/[variant] | Product pages | 2 templates × 2 themes | Pending styling in both themes | 360 (A) | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | /trace explorer complete | B1–B8 | 6 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | B11 | 4 |
| 18 | Mobile | App shell → stacked | Rail becomes a horizontal stepper, inspector a bottom sheet | Bottom sheet accessible (focus trap, Esc) | — | 4 |
| 19 | A11y + reduced motion | Both themes AA | `forced-colors` support, focus audit | WCAG 2.2 AA both themes; no glow-only state indicators | — | 3 |
| 20 | Perf, QA, handover | Ship | Theme QA matrix (every page × 2 themes × 4 breakpoints) | LCP ≤ 2.5 s; CLS < 0.05; no theme flash | All | 4 |

**Total:** about 77 days for a fully dual-themed site. Dark tech layer only (chapters 06, 11, 13 plus /trace,
/technology plus the theme): about 28 days.

## 9. Assets needed from DESIGO®

- 360 sequences shot on transparent background with the **rim light** specified. Ideally a second set shot on black
  with real reflections for the hero.
- Night or pre-dawn process photography (plant, cold room, delivery) if available and consented.
- Approved wording for every trace node and technology verb (the dark UI makes copy look "official").
- Wordmark vector in a light (milk) version for dark backgrounds.

## 10. Performance, accessibility and mobile

- Avoid halation: off-white text `#F1EDE3`, not #FFF, and body weight 420 on dark.
- Glows are cheap box-shadows or pre-rendered, with no live blur on large areas.
- Never rely on glow alone for state: the active node also gets a label change and a shape change (filled dot).
- Theme init script inline in `<head>` (≤ 400 bytes) to avoid flashing.
- Mobile: OLED-friendly true-dark option (`#0A0B0A`) for battery, a bottom-sheet inspector and a sticky DEMO pill.
- Reduced motion: no power-on sequences; content appears complete.

## 11. Risks and premium guardrails

**Risks:** cold or tech-startup look for a food brand; low-contrast grey-on-black; "hacker dashboard" overload;
dark food photography looking unappetising.

**Premium guardrails**
1. Milk-white remains the brand default. Dark is a mode and a chapter, not the identity.
2. Warm darks only (charcoal and forest), never cold blue-black or pure #000.
3. One accent glow per viewport. Data is calm, not a control room.
4. Demo and pending states are unmistakable (`--d-warn` badges plus text), because dark UI looks authoritative and so must be honest.
5. Never expose internal system detail (internal IDs, app names, staff data). The UI shows public vocabulary only.
6. Food and cow photography is graded warm with lifted shadows, never moody-crushed.
7. Heritage stays warm even in dark mode.
8. Typography is tuned for dark (weights, tracking, off-white).

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added the Cold Chain Night tokens with a light-theme map, Inter/Hind packages, all 14 components, motion tokens and 10 image prompts. Body: "internal RTCOM detail" reworded to "internal system detail". Fonts already OFL. Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#3FA58C` | DESIGO green lifted for dark: primary button fill, links | 6.3:1 vs bg. AA for text and UI. |
| Primary ink | --c-on-primary | `#0E100F` | near-black label on green | 6.3:1 on primary. AA. |
| Secondary | --c-secondary | `#D4B97F` | dark gold: ghee and heritage accents, secondary emphasis | 10.0:1 vs bg. AAA. |
| Accent | --c-accent | `#7FE0B8` | signal: live/active data, focus glow, trace path | 12.1:1 vs bg. 12:1; focus ring 2 px signal + 4 px soft glow. |
| Background | --c-bg | `#0E100F` | page (charcoal deepened, never #000) |  |
| Surface | --c-surface | `#171918` | surface-1: cards, nav; surface-2 `#1F2220` raised panels; surface-3 `#282C29` popovers and inputs |  |
| Text | --c-text | `#F1EDE3` | milk slightly dimmed (avoids halation) | 16.3:1 on bg · 15.1:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#B8B3A7` | secondary text; tertiary `#8A867C` (5.3:1) for captions ≥ 14 px only | 9.1:1 on bg · 8.4:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `rgba(247,244,236,.09)` | hairlines; hover brightens to `rgba(247,244,236,.16)` | decorative only; never the sole carrier of meaning |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#7FE0B8` / `#E8B04A` / `#E8B04A` | signal = verified/active; warn amber = pending (outline chip + dotted underline) and DEMO (filled pill) — shape distinguishes them | Warn `#E8B04A` 9.8:1 on bg; DEMO pill text `#0E100F` on warn 9.8:1. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | deep green-black `#0A2A20` stage, faint canopy gobo, lifted accent `#2E8A67` on the code label "V1+" |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | oxblood-black `#2A0609` (deepened from `#4A0A0F`), warm red rim light from the right, accent `#D8424B` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | umber-black `#2B1802`, an amber pool of light beneath, accent `#F2A93A` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | neutral `#24201A`, white key light only, accent `#DCC9AA`: the most "Apple" of the four |

**Dark-chapter inversion:** This style is dark-first; the **light theme** maps 1:1 to brand tokens: bg `#0E100F` → `#F7F4EC`, surface-1/2/3 → `#EFE9DC` / `#EDE4D0` / `#F4EFE3`, text → `#1E211F`, muted → `#55584F`, primary → `#1E7A68` with milk ink, accent → forest `#0B3B32` focus, line → `rgba(30,33,31,.12)`. Heritage (ch. 10) uses warm-dark paper `#1E1B16` with `#D4B97F` rules even in dark mode; ghee uses `#1C160C`. Toggle: View Transitions circular reveal (600 ms), respects `prefers-color-scheme`, choice stored in try/catch-wrapped localStorage.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 300–600 | clamp(3.5rem, 8vw, 8rem) | 0.96 | -0.03em | Sentence |
| Headline H1–H2 | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–500 | H1 clamp(2.4rem, 4.6vw, 4.5rem) · H2 clamp(1.6rem, 2.8vw, 2.6rem) | 1.05 / 1.15 | -0.02em | Sentence |
| Body | Inter (variable) | `@fontsource-variable/inter` (Google Fonts: Inter) | opsz 14–32, wght 420 on dark / 400 on light | 1rem | 1.625 (26 px) | +0.005em | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600 | 0.72rem | 1.2 | +0.16em | UPPER |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400–500, `tnum` | 0.8125rem (13 px) | 1.45 | 0 | IDs, timestamps, temperatures |
| Devanagari (optional) | Hind | `@fontsource/hind` (Google Fonts: Hind) | 300–700 static (use 400, 500) | matches body / H2 | 1.6 | 0 | n/a |
| Emotional line (style-specific) | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz auto, wght 300, italic | clamp(1.6rem, 3vw, 2.6rem) | 1.2 | -0.01em | Sentence, one line per chapter |

Licence: Inter Tight, Inter, JetBrains Mono, Hind (Indian Type Foundry) and Fraunces are all SIL OFL 1.1.
Pairing: Inter Tight display reads as a precision tool; Inter (opsz) is tuned for light-on-dark body; JetBrains Mono carries every ID and number; one Fraunces italic line per chapter keeps warmth.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw margin, max-width 1440 px; app shell on /trace and /technology: left rail 240 px · stage · right inspector 320 px (bottom sheet on mobile).
- **Spacing:** 4-px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Radius:** sm 2px (panels, inputs, brand `--r-1`) · md 2px · lg 999px (DEMO pill and segmented-control thumb only).
- **Border:** 1 px `rgba(247,244,236,.09)` hairlines; hover/active 16%; inputs on surface-3 with the same hairline.
- **Shadow / elevation:** Elevation by lighter surface, not shadow: 0 `#0E100F` · 1 `#171918` · 2 `#1F2220` · 3 `#282C29`. Glows: box-shadow `0 0 0 4px rgba(127,224,184,.18)` on focus/active only; one accent glow per viewport.
- **Texture / overlay:** 1% noise on bg only (anti-banding); stage pool `radial-gradient(#1F2220, #0E100F)` under the bottle; no other textures.

### 12.4 Components
All interactive components: `focus-visible` = 2 px signal `#7FE0B8` ring, offset 2 px, plus 4 px soft glow `rgba(127,224,184,.18)`; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Green `#3FA58C` fill, `#0E100F` Inter Tight 600 caps label + arrow, radius 2, 48 px, padding 14×22. Hover: fill lightens to `#4DB59B`, arrow +6 px (160 ms). Active: `#358F79`. Disabled: surface-3 fill, tertiary label. Loading: label kept, a 1 px signal line sweeps the bottom edge (900 ms loop).
- **Secondary button**: Surface-1 with a 1 px hairline border, milk label. Hover: surface-2 and border 16% (160 ms). Active: surface-3. Disabled / loading as primary.
- **Text / arrow link**: Inter 500 `#3FA58C` with 1 px underline offset 3 px; hover underline 2 px + arrow +6 px (160 ms); disabled tertiary text.
- **Icon button** (incl. menu): 40×40 (44 px hit area) on surface-1, 20 px Lucide-style 1.5 px icon in `#B8B3A7`, signal when active. Menu icon → × (240 ms). Theme toggle is an icon button (sun/moon) triggering the circular View Transition. `aria-label` / `aria-pressed` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 64 px surface-1 bar at 85% with hairline bottom border, Inter Tight caps links in `#B8B3A7`, active in `#F1EDE3` with a 2 px signal underline; theme toggle at right. Mobile: bottom-sheet menu on surface-2 (radius 2 at the top), large Inter Tight 28 px links, sticky DEMO pill stays above it on trace pages. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = 8 px milk dot · hover = 32 px hairline ring · ROTATE = ring with ↔ ticks · EXPLORE = ring with a small → and rail tick · ENTER = ring with "ENTER" (mono 9 px) · VIEW = ring with "VIEW" (mono 9 px) · TRACE = ring with a signal centre dot. No `difference` blend. Touch: native; pressed states use surface steps.
- **Card / panel / info block**: Surface-1/2 panel, 1 px hairline, radius 2, 24 px padding, mono eyebrow + Inter Tight title. MetricTile shows value or "— pending lab confirmation" in warn. Hover (clickable): one elevation step up (160 ms).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inter Tight 11 px caps, 22 px tall. Verified: signal outline + filled dot. Pending verification: warn `#E8B04A` outline chip "PENDING VERIFICATION" + warn dotted underline on the claim. DEMO: filled warn pill radius 999, `#0E100F` text "DEMO · NOT LIVE DATA", sticky on trace pages. Static.
- **Input + form field** (Trace-your-milk bottle ID): Command-palette style: surface-3 field 56 px, hairline border, JetBrains Mono 16 px, leading "⌕" icon, label "Enter Bottle ID", placeholder `DSG-BTL-000001-3 (sample format)`. Focus: ring token. Error: `#D8424B` border + message text. Loading: steps stream into the timeline with mono timestamps (each prefixed DEMO).
- **Divider / ornament**: 1 px hairline, or a rail tick row (ticks every 64 px at 6%).
- **Section header** (chapter number + title pattern): Mono chapter number "06 —" in `#8A867C`, Inter Tight title, sub-line in `#B8B3A7`; sections "power on": hairline draws (300 ms) → content fades (400 ms) → accent glow rises (600 ms).
- **Product info block** (variant name, code, price-pending, size, descriptors): Spec table on surface-1: Inter Tight variant name, code label in the lifted variant accent ("V1+"), size and price in Inter with a warn dotted underline + pending chip, descriptors as rows with status badges; segmented control 01–04 switches variants.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Black stage: bottle on a faint reflective floor (20% flipped copy, gradient mask, 2 px blur) over the radial stage pool; key light upper-left, rim light brightening on the pointer side; the milk is the brightest thing on the page. Float ±10 px / 6 s, tilt ±8°; before 360 frames ±25° + sheen; with frames, an inspector HUD (frame counter, angle °, auto-spin toggle in mono).
- **Trace node / timeline step**: Rail item + timeline row: status dot (hollow → filled signal), mono timestamp, Inter Tight title, body from `traceNodes[]`; active node gets a 2-pulse glow, a filled dot and a "current" label (never glow alone). Inspector shows demo values with DEMO pill.

### 12.5 Iconography & illustration
- **Icons:** Lucide-style 1.5 px stroke, 20 px, round joins, `#B8B3A7` default and signal when active.
- **Illustration:** Data viz only: hairline grids `rgba(247,244,236,.06)`, signal paths with 6 px glow; perspective grid floor for technology.
- **Photo treatment:** Graded darker with lifted shadows (to `#141615`, never crushed), warm white balance for food and cows, shown in surface-2 frames with hairline borders.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, hovers |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | panel slides, inspector |
| `--dur-micro` | `160ms` | surface steps, hover |
| `--dur-panel` | `400ms` | panels, inspector |
| `--dur-reveal` | `600ms` | power-on glow, theme cross-fade |
| `--dur-scene` | `900ms` | scene transitions |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** "power on" sequence; trace path drawing with scroll; circular theme reveal.
- **Scroll:** trace path `scrub: 1`; active node 2-pulse glow (no infinite blinking).
- **Reduced motion:** no power-on, content appears complete, theme swaps instantly, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *dark premium product-launch stage, warm near-black charcoal #0E100F and #171918, one soft key light from upper left, subtle rim light, restrained accents of forest #0B3B32 and signal mint #7FE0B8 used sparingly, shadows lifted not crushed, calm and precise, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/dark-mode-ui/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | An empty dark product stage: warm charcoal backdrop, a faint glossy reflective floor, a soft circular pool of light in the centre where an object would stand, gentle falloff to the edges | objects on stage, spotlights fixtures, neon, smoke, blue tint (+ base negative) | Ch. 01 black stage, ch. 15 |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same empty dark stage as a tall portrait, pool of light in the lower-centre, faint reflective floor | objects, neon, blue tint (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Deep green-black #0A2A20 stage with a faint leaf-canopy shadow gobo cast across the back wall, soft pool of light in the centre | visible leaves, objects, neon green (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Oxblood-black #2A0609 stage with a warm red rim light grazing in from the right, soft central pool | objects, red haze, fire (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | Umber-black #2B1802 stage with a warm amber pool of light on the floor in the centre, faint dust in the beam | objects, flames, orange smoke (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Neutral warm-dark #24201A stage lit only by a clean white key light, minimal, the most restrained composition | objects, coloured light (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `trace/grid-horizon.png` | 3600×2000 (9:5) | no | Dark forest-green #07211C void with a faint mint #7FE0B8 perspective grid receding to a horizon and one thin luminous path curving through eight small glowing nodes | sci-fi city, HUD text, numbers, neon magenta (+ base negative) | Ch. 06 / ch. 11, /trace stage |
| 8 | `textures/noise-dark.png` | 1024×1024 seamless | no | Seamless tileable very fine monochrome noise on #0E100F, barely visible, even | patterns, scratches (+ base negative) | 1% anti-banding noise |
| 9 | `heritage/warm-dark-paper.png` | 2400×2400 seamless | no | Seamless tileable warm dark paper texture #1E1B16 with very soft cotton fibres, flat light | stains, text, folds (+ base negative) | Ch. 10 heritage in dark mode |
| 10 | `ghee/gold-lit.png` | 3200×2000 (16:10) | no | Warm dark #1C160C stage with a honey-gold key light from above-left and a soft gold pool in the centre | jar, objects, flames, lamps (+ base negative) | Ch. 12 ghee |

The best hero is a real photograph of the bottle on black with true reflections (asset request); generated stages are only the empty environment.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/20_dark-mode-ui.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/dark-mode-ui/
- [ ] Every component verified in both dark and light token sets; theme init script ≤ 400 bytes inline (no flash)
- [ ] Active/pending/demo never signalled by glow or colour alone
