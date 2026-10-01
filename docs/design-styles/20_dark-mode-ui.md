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
(rail, stage, inspector) · /technology has seven modules, each expandable · /about is a timeline and supporters
(pending badges) · /reserve is a dark form with a large variant segmented control.

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
5. Never expose internal RTCOM detail (locus IDs, app names, staff data). The UI shows public vocabulary only.
6. Food and cow photography is graded warm with lifted shadows, never moody-crushed.
7. Heritage stays warm even in dark mode.
8. Typography is tuned for dark (weights, tracking, off-white).
