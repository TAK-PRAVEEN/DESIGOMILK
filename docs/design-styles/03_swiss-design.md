# 03 — Swiss Design · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 4 / 5** · Best used for: the evidence chapters — Traceability (06), Quality (07), Technology (11), Trace your milk (13) — and the /trace and /technology pages; also a strong whole-site alternative.

---

## 1. Style essence

Swiss Design (the International Typographic Style) organises information with an objective grid, asymmetric layouts, flush-left/ragged-right sans-serif type, generous white space, and photography or diagrams instead of illustration. Its promise is clarity and trust: the reader sees structure before decoration.

Origins: Zürich and Basel schools of the 1950s; Josef Müller-Brockmann, Armin Hofmann, Emil Ruder; later Massimo Vignelli's transit and identity systems.

Three reference points:
1. **Müller-Brockmann's Zürich Tonhalle posters** — rhythm, grid, type as structure.
2. **Vignelli's NYC subway diagram (1972)** — a complex network made legible with lines, nodes and colour codes; directly relevant to the trace path.
3. **Contemporary product sites built on Swiss principles** (e.g. Teenage Engineering, Vitsœ) — grids, numbers, specifications as beauty.

## 2. Why it fits DESIGO®

DESIGO®'s differentiator is *a system*: ORIGIN → TRACE → TEST → CHILL → PROCESS → FILL → DELIVER, eight trace nodes, a 16-point screen, V-codes, bottle IDs. Swiss Design was invented to make systems readable. Variant codes (V1+, V1, V2, V3), numerals (26, 14, 3) and cap colours behave like a transit colour code. The grid also signals rigour — the right tone for testing and traceability.

Where it fights: Swiss can be cold and corporate; it has no native vocabulary for cows, soil, hands or heritage. Fraunces' warmth would be replaced by a grotesk, which reduces the editorial luxury of the brief.

**Fit score: 4 / 5.** Excellent for the evidence half of the story and viable for the whole site if photography carries the warmth. Recommended as the "information layer" combined with Minimalism as the base.

## 3. Art direction

### Palette
| Token | Hex | Role |
|---|---|---|
| `--sw-white` | `#F7F4EC` | Ground (milk, never pure white) |
| `--sw-black` | `#171918` | Type, rules |
| `--sw-grey` | `#6B6F6C` | Secondary text (≈ 4.6:1 on milk — 16px+ only, milk ground only; 4.0:1 on variant light grounds) |
| `--sw-rule` | `#171918` 100% / 1px and 4px | Structural rules |
| `--sw-green` | `#1E7A68` | DESIGO® accent, active states |
| `--sw-forest` | `#0B3B32` | Inverse panels |
| Line colours (trace/transit) | MASTER 26 `#1F5C45` · ROOT 14 `#B3202A` · BASE 3 `#E89A1C` · ESSENTIAL `#CDB89A` (with `#4D4130` outline for contrast) | Variant "lines" |
| `--sw-signal` | `#7FE0B8` | Live/active dot in technology chapter only |

### Typography
- Display + text: **Inter Tight** (Inter Display optical size where available) — 700 for mega numerals, 500 for headings, 400 body. Tracking −0.04em at display sizes, 0 at body.
- Data: **IBM Plex Mono** 400/500 — IDs, temperatures, parameter tables (more "instrument" than JetBrains Mono).
- Warmth accent (optional, max once per page): **Fraunces** italic 300 for a single heritage word.
- Hindi later: **Noto Sans Devanagari** matched to Inter's x-height.
- Scale: modular 1.333 (perfect fourth): 12 · 16 · 21 · 28 · 38 · 50 · 67 · 89 · 119 · 159 px; mega numerals at 24–32vw.
- All text flush-left, ragged-right; no centred paragraphs. Labels uppercase 11–12px, +0.12em.

### Texture
None. Flat colour, hairline rules (1px) and structural rules (4px). The paper grain of the base system is removed in this style except in Heritage (10).

### Imagery
Photography cropped to the grid modules, full-bleed or exactly n columns wide; black-and-white option for archival material. Diagrams: hairline, orthogonal, 45° angles only (Vignelli). The bottle is a cut-out on milk.

### Iconography
Pictograms in the Otl Aicher spirit: 2px stroke, 45°/90° geometry, on a 24px grid — cow, drop, thermometer, flask, snowflake, factory, bottle, house for the eight trace nodes.

### Grid
12 columns + 8px baseline grid; 5vw outer margin, 24px gutters; columns grouped in 3 × 4 or 4 × 3 modules for asymmetric compositions. Every section starts with a **section header strip**: number (01–15) in mono left, title in column 4, a 1px rule across. Mobile: 4 columns, 16px margins, same baseline.

## 4. Motion & interaction language

- Motion is mechanical and exact: linear-feeling but softened — reveals `cubic-bezier(.16,1,.3,1)` 480ms; slides along the grid `cubic-bezier(.65,0,.35,1)` 800ms. No rotation except the bottle.
- Rules draw first (scaleX 0 → 1, 400ms), then text appears line by line (60ms stagger), then images wipe in along a grid edge (clip-path inset).
- Numbers count only when real: counters animate to an approved value; pending values show `—` and never animate.
- Cursor: crosshair-style — a 1px 20px cross in `--sw-black`; **link**: cross becomes a 6px filled square; **bottle**: a 56px square frame with corner ticks and `DRAG` / `TILT` label in Plex Mono; **trace node**: frame snaps to the node; touch: hidden.
- Hover: underline buttons with arrow; table rows highlight with a 4% green tint; nav items get a 4px rule above.
- Page transitions: columns wipe — 12 milk strips slide down with 30ms stagger (600ms total), then the next page draws its rules.
- A persistent **grid overlay** toggle (`G` key, for design QA and as a delightful easter egg) shows columns.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle sits on a grid line: its base aligns to the baseline of the hero headline, its vertical axis to the line between columns 8 and 9. A measurement annotation (hairline dimension lines) labels it: `DESIGO® V1+ · RETURNABLE GLASS · [size pending]`. Contact shadow kept but reduced to a 4px blurred ellipse. Float: ±4px only; tilt ±4°.

**Rotation.** With 360 frames, a horizontal degree ruler (0°–360°, ticks every 15°) sits under the bottle and acts as the scrubber: drag the bottle or the ruler. Keyboard: arrows step 5°, Shift+arrow 45°. Without frames: ±15° skew with the ruler showing only the available range — honest about what the asset allows.

**Variant worlds** — a transit system of four lines:
- **MASTER 26** — 4px rule and huge "26" in `#1F5C45`; ground `#D9E8DF`; spec table of descriptors.
- **ROOT 14** — `#B3202A` line and "14"; ground `#F3D9D6`.
- **BASE 3** — `#E89A1C` line and "3"; ground `#F8E4C2`.
- **ESSENTIAL** — `#CDB89A` line with `#4D4130` numerals "E"; ground `#F4EDE2`.
Each world uses the same layout — only the line colour and numeral change. Consistency *is* the luxury here. The info block is a two-column spec table: label (mono, grey) / value (Inter Tight 500), with pending values dotted-underlined.

## 6. Page-by-page treatment

### Home
| # | Chapter | Swiss treatment |
|---|---|---|
| 01 | Hero | Headline "Milk from the source." in Inter Tight 700, columns 1–6, flush left; bottle on column 8/9 axis with dimension lines; CTAs as a two-row list with arrows. |
| 02 | Bottle becomes the story | Six words become a numbered list (01 ORIGIN … 06 TRACE) in column 1–4; the active item's line connects to the pinned bottle with an orthogonal leader line. |
| 03 | Cow to bottle | Horizontal journey as a transit line with 7 stations, pictograms above, one sentence below each station. |
| 04 | Where it begins | Photograph exactly 8 columns wide, caption in mono below; text in columns 10–12. |
| 05 | Breeds | A data table: breed · native region · status (pending). Portrait module beside it. |
| 06 | Traceability | **Signature chapter.** Vignelli-style map: 8 nodes, 45° lines, forest ground, white rules; the active node shows its public explanation in a fixed info column. "Illustrative journey — not live data." |
| 07 | Quality | "16" at 30vw; 16 parameters in a 4 × 4 module grid; instrument hairline diagrams; values `— pending`. |
| 08 | Four milks | The four "lines" above; left index 01–04 as a vertical route. |
| 09 | Milk as material | A clean typographic interlude: the word MILK set huge, the ribbon replaced by a single white field moving through the grid. |
| 10 | Heritage | The one warm moment: Fraunces italic sentence aligned to the grid, archival B/W photo. |
| 11 | Technology | Seven verbs as a 7-column table, each with a pictogram and a one-line public description. |
| 12 | Ghee | Three grades as a spec table with source-milk column (V1 ← MASTER 26 …). |
| 13 | Trace your milk | Form with mono input, results as a step table (step · place · time · status), DEMO badge in the section header strip. |
| 14 | Story | Timeline on a horizontal ruler; only verified years. |
| 15 | Final CTA | Headline at full grid width; two CTAs; footer as a 4-column index. |

### Inner pages
- **/milk** — comparison table: rows = variants, columns = code, herbs (pending), grazing, cold chain, price (pending). Bottles above each row.
- **/milk/[variant]** — viewer columns 1–7; spec table columns 9–12; line colour throughout.
- **/ghee** — process diagram (5 steps), grade table.
- **/origin** — photo grid; breed table.
- **/trace** — full transit map + demo.
- **/technology** — the 7 verbs, each a module with diagram.
- **/about** — timeline ruler; no supporters list until written evidence is on file (KB Q34).
- **/reserve** — form in a 2-column grid; summary table on the right.

## 7. Component variants

`SectionHeaderStrip` (number · title · rule) · `GridOverlay` · `CrosshairCursor` · `DimensionedBottle` · `DegreeRuler` (360 scrubber) · `TransitTraceMap` · `PictogramSet` (8 nodes + 7 verbs) · `SpecTable` · `ComparisonTable` · `ModuleGrid16` · `StepTable` (trace demo) · `UnderlineButton` · `ClaimText` (dotted) · `AssetSlot` (grid-aligned dashed frame).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Swiss type system | Modular scale, Inter Tight/Plex Mono, rules, tokens | Baseline grid holds across sizes (±1px) | Brand colours | 2 |
| 2 | Grid & shell | Grid, nav, cursor, strips | 12-col + baseline, header strips, crosshair cursor, column-wipe transition | Every component snaps to grid; grid overlay toggle works | Vector wordmark | 3 |
| 3 | Hero | Dimensioned bottle | Bottle with dimension lines, headline | Size label shows pending until approved | Renders, pack size approval | 2 |
| 4 | Story sequence | Numbered list + leader lines | Pinned bottle, orthogonal leaders | Leaders never cross text; reduced motion = static list | 360 frames optional | 3 |
| 5 | Cow → bottle | Transit line journey | 7 stations, pictograms | Pictograms consistent 2px/24px | — | 3 |
| 6 | Origin | Grid-cropped photography | Photo modules, mono captions | Crops snap to modules on all breakpoints | B1, B2 | 2 |
| 7 | Breeds | Breed table | Table + portrait | Status column always visible | B3, breed approval | 2 |
| 8 | Trace map | Vignelli map | SVG map, node info column | 45°/90° only; nodes keyboard-operable; DEMO label | Trace wording | 4 |
| 9 | Quality | 16-module grid | Numeral, module grid, hairline instruments | No value without approval | Lab values, B6 | 3 |
| 10 | Four worlds + 360 | Line-coded variant worlds | 4 scenes, DegreeRuler viewer | Ruler and bottle stay in sync; keyboard 5°/45° | **360 sequences (A)** | 5 |
| 11 | Heritage | One warm module | Fraunces italic line, archival photo | Only chapter with serif | Archive photo (B11) | 1 |
| 12 | Technology | Verb table | 7-column table with pictograms | Public vocabulary only | — | 2 |
| 13 | Ghee | Grade table | Spec table, jar cut-out | Source-milk mapping correct | Jar cutout, prices approval | 2 |
| 14 | Trace demo | Step table result | Form + StepTable | `isDemo` flag in header strip; errors in plain words | — | 3 |
| 15 | /milk pages | Comparison + variant pages | ComparisonTable, variant pages | Table responsive (stacked on mobile) | A, pricing | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Photo grid, full map, verb modules | Map readable at 360px wide | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | Timeline ruler, ghee diagram, form | Form errors announced via aria-live | Milestones | 4 |
| 18 | Mobile pass | 4-col Swiss | Vertical transit lines, stacked tables | No horizontal scroll at 360px | — | 3 |
| 19 | A11y + reduced motion | AA+ | Table semantics, focus squares, static map | axe clean; tables have headers/scope | — | 2 |
| 20 | Perf, QA, handover | Ship | Grid QA checklist, docs | LCP ≤ 1.8s, INP ≤ 150ms, CLS ≤ 0.02 | Approvals | 3 |

Total ≈ 57 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A) — the degree ruler makes rotation a feature.
2. Confirmed pack sizes (for dimension labels) and prices.
3. Approved public trace wording and node names.
4. Lab parameter confirmation (which values may be shown publicly).
5. Photography B1–B8, ideally shot with consistent framing so it crops cleanly to modules.
6. Archive photographs (B11) for the single warm Heritage module.

## 10. Performance, accessibility and mobile

- Performance: Swiss is light — SVG diagrams, one font family + mono. Budget ≤ 150 KB JS on home; maps are inline SVG (≤ 25 KB).
- Accessibility: tables use real `<table>` semantics; the trace map has a parallel ordered list for screen readers; colour lines always paired with numerals/labels (ESSENTIAL's ivory line gets a dark outline for 3:1 non-text contrast).
- Reduced motion: no column wipes; rules appear instantly; bottle static with ruler still operable by keyboard.
- Mobile: the transit map rotates to vertical; spec tables become label/value stacks; the degree ruler becomes a thumb-sized slider under the bottle.

## 11. Risks and premium guardrails

Risks: corporate coldness, "annual report" dullness, losing the farm and the cow, grids that feel like templates.

**Premium guardrails**
1. Warm the system with the ground and the photographs — milk white `#F7F4EC`, real farm light — never pure white and grey stock.
2. Scale contrast is the drama: 30vw numerals beside 12px mono labels.
3. Asymmetry, always: never a centred, symmetric "template" layout.
4. Keep exactly one serif moment per page so the brand's heritage voice survives.
5. Pictograms custom-drawn for DESIGO® (cow, bottle, chiller) — never an icon pack.
6. Data looks precise but never invented: pending values show `—` and a label, not placeholder numbers.
7. Tables are beautiful: generous row height (56px), hairline separators, tabular numerals.
8. Copy in plain declaratives: "Every collection is recorded with where and when it happened." No superlatives.
9. Motion is precise and quick to settle (≤ 800ms) — a Swiss page never "floats around".
10. The bottle is still the protagonist: give it more empty modules than any table.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: duplicated ESSENTIAL line in §5 removed; 'DESIGO accent' → 'DESIGO® accent'; /about no longer lists supporters (excluded until written evidence is on file, KB Q34); muted grey `#6B6F6C` restricted to milk ground (4.6:1; it drops to 4.0:1 on variant light grounds). Fonts were already open-licence. Added cursor states, button/badge/form states, motion tokens and 10 image prompts (backdrops and textures only — photography and pictograms stay real/custom).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--sw-green`): primary button fill, active states, active trace node, links | 4.7:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on green | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest (`--sw-forest`): inverse panels, trace-map ground, footer | 11.3:1 on bg |
| Accent | `--c-accent` | `#7FE0B8` | signal mint (`--sw-signal`): live/active dot and focus ring on forest/charcoal only (technology, trace) | 1.4:1 on bg; decorative on milk; 7.9:1 on forest |
| Background | `--c-bg` | `#F7F4EC` | milk ground (`--sw-white`, never pure white) | text 16.1:1 |
| Surface | `--c-surface` | `#EFE9DC` | milk-2 table stripes, spec table header, inset modules | text on surface 14.6:1 |
| Text | `--c-text` | `#171918` | type and rules (`--sw-black`) | 16.1:1 on bg |
| Muted text | `--c-text-muted` | `#6B6F6C` | secondary text 16 px+ (`--sw-grey`), milk ground only | 4.6:1 on bg; 4.0:1 on variant light grounds → use `--c-text` there |
| Line | `--c-line` | `#171918` | structural rules 1 px (hairline) and 4 px (section strip); table separators `rgba(23,25,24,.16)` | 16.1:1 on bg |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#7A5A12` / `#171918` | ok = verified tick in tables; pending = `—` value + dotted underline + 'pending' label in dark amber; DEMO = charcoal badge in the section header strip | ok 7.1:1 · pending 5.8:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | 4 px line + 30vw '26' in base on light ground; spec table on milk |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red line and '14' on light ground |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber line; numeral '3' drawn in deep `#5A3304` for contrast |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory line with 1 px `#4D4130` outline (3:1 non-text); numeral 'E' in deep |

Dark-chapter inversion: in Traceability (06), Technology (11) and Trace your milk (13) `--c-bg` → `#0B3B32` (trace) or `#171918` (console), `--c-text` → `#F7F4EC`, `--c-text-muted` → `#A9B8B2` (≥ 6:1 on forest), `--c-line` → `#F7F4EC` at 100% / 24% for hairlines, `--c-accent` signal becomes the active/focus colour; primary green buttons switch to milk-outline buttons.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Inter Tight (variable) | `@fontsource-variable/inter-tight` · Google Fonts | 700 (mega numerals) / 600 | clamp(4rem, 12vw, 14rem); numerals up to 30vw | 0.9 | -0.04em | Sentence / numerals |
| Headline H1–H2 | Inter Tight | `@fontsource-variable/inter-tight` | 500 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.75rem, 2.6vw, 2.4rem) (1.333 scale) | 1.05 / 1.15 | -0.02em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.5 (24 px baseline) | 0 | Sentence, flush-left ragged-right |
| Label / UI | IBM Plex Mono | `@fontsource/ibm-plex-mono` · Google Fonts | 500 | 0.72rem (11–12 px) | 1.33 | +0.12em | UPPERCASE |
| Data / mono | IBM Plex Mono | `@fontsource/ibm-plex-mono` | 400 / 500, tabular | 0.875–1rem | 1.5 | 0 | As data |
| Devanagari (optional) | Noto Sans Devanagari (variable) | `@fontsource-variable/noto-sans-devanagari` | 400 / 600 | matched to Inter x-height (≈ 0.96×) | 1.6 | 0 | — |

Licence: Inter Tight, IBM Plex Mono, Noto Sans Devanagari and the optional heritage accent Fraunces (`@fontsource-variable/fraunces`, 300 italic, once per page) are all SIL OFL 1.1. Pairing: one neutral grotesk for structure plus an 'instrument' mono for every number keeps the system legible like a transit map.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutters, 5vw outer margin, max-width 1600 px; 8 px baseline grid; compositions in 3×4 or 4×3 modules, always asymmetric. Mobile: 4 columns, 16 px margins, same baseline.
- **Spacing scale:** multiples of 8: 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px; table rows 56 px.
- **Radius:** 0 everywhere (`--r-0`); `--r-pill` only for the cursor and tags.
- **Borders:** 1 px hairline `#171918`, 4 px structural rule for section strips and variant lines; table separators 1 px at 16%.
- **Elevation:** none — UI is flat. Bottle: contact shadow reduced to a 4 px blurred ellipse.
- **Texture/overlay:** none (paper grain only in Heritage 10). Optional `G`-key grid overlay (12 columns at 6% green) for QA.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — anatomy: green `#1E7A68` rectangle, radius 0, milk Inter Tight 500 label + arrow `→` set right; 48 px tall, padding 0 24 px; label and arrow align to the baseline grid · hover fill → `#0B3B32`, arrow travels 6 px (240 ms) · focus-visible 2 px `#171918` outline, 2 px offset · active fill `#0B3B32`, arrow returns · disabled fill `#C9C6BD`, label `#4D504C`, no arrow motion · loading arrow replaced by a 3-dot mono counter `···`, `aria-busy`.
- **Secondary button** — 1 px `#171918` frame, transparent fill, ink label + arrow; same sizes · hover frame 2 px and 4% green tint · focus-visible as primary · active 8% tint · disabled frame and label 40% · loading as primary. On forest: milk frame and label.
- **Text / arrow link** — the design-system link `EXPLORE THE SOURCE ———→`: Inter Tight 500 uppercase 0.8rem +0.12em, 1 px underline; hover underline → 4 px rule above (as nav), arrow travels 8 px; focus-visible 2 px outline; colour stays ink (green only when active).
- **Icon button (incl. menu)** — 44×44 px square, 1 px frame, 24 px Aicher-style pictogram (2 px stroke); menu = two 2 px bars that rotate to an ×; hover fill 4% green; focus-visible outline; active 8%; disabled 40%; `aria-label`, `aria-expanded` for menu.
- **Navigation bar** — desktop: 64 px milk bar, 1 px rule below; logo in columns 1–2, links as mono uppercase labels in columns 7–11, Reserve button in column 12; active link gets a 4 px rule above; chapter number of the current section shown in mono at the far right. Mobile: logo + menu icon; menu is a full-height milk sheet with a numbered list (01–08) in Inter Tight 500 and 1 px rules between items. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default: 1 px 20 px crosshair in `#171918` · hover (links): cross → 6 px filled square · ROTATE (bottle): 56 px square frame with corner ticks + `ROTATE` in Plex Mono · EXPLORE (photo/journey): frame + `EXPLORE` · ENTER (variant/inner page link): frame + `ENTER →` · VIEW (image): frame + `VIEW` · TRACE (trace node): frame snaps to the node + `TRACE`. On forest the cursor is milk. Touch/coarse pointer: hidden; tap hints use the same mono labels.
- **Card / panel / info block** — no cards — 'modules': content blocks aligned to n columns, separated by a 1 px top rule; label (mono, muted) + title (Inter Tight 500) + body; inset modules use `#EFE9DC` · hover (if interactive) 4% green tint + rule turns green · focus-visible outline · active 8% · disabled n/a · loading: grey `#EFE9DC` skeleton bars on the baseline grid.
- **Badge / tag** — mono uppercase 0.68rem, 22 px tall, 1 px frame, radius 0 (pill only for status dots): neutral ink frame; variant tag = 8 px square in cap colour + name; **pending verification** = dotted-underlined value + mono label `PENDING` in `#7A5A12`, value shows `—`; **DEMO · not live data** = solid `#171918` badge, milk text, placed in the section header strip. Hover on pending opens a popover with the source note.
- **Input + form field** — label (mono uppercase) above; 56 px input, radius 0, 1 px ink frame, Plex Mono 1.125rem, placeholder `DSG-BTL-000001-3 (sample format)`; helper text in muted · hover frame 2 px · focus-visible 2 px green outline + frame ink · invalid 2 px `#B3202A` frame + message · disabled `#EFE9DC` fill · loading primary button shows mono counter; results render as a step table (step · place · time · status) with DEMO badge.
- **Divider / ornament** — 1 px hairline full-width (default) and 4 px structural rule (section strip, variant line). No ornament.
- **Section header** — `SectionHeaderStrip`: chapter number `06` in Plex Mono left (column 1), title Inter Tight 500 starting in column 4, 1 px rule across under both; DEMO/pending status badges sit at the right end of the strip.
- **Product info block** — two-column spec table: label (mono, muted) / value (Inter Tight 500): CODE `DESIGO® V1+` · NAME `MASTER 26` · NUMERAL 26 · SIZE `1 L glass · 900 g` (pending underline) · PRICE `—` (pending) · DESCRIPTORS each a row with pending label; 4 px variant line above the table.
- **Bottle stage** — bottle cut-out on milk aligned to the grid: base on the hero headline baseline, vertical axis on the column 8/9 line; hairline dimension lines + mono annotation `DESIGO® V1+ · RETURNABLE GLASS · [size pending]`; 4 px blurred contact shadow; float ±4 px, tilt ±4°; 360 via the `DegreeRuler` (0–360°, ticks every 15°).
- **Trace node / timeline step** — Vignelli-style: 12 px circle node with 2 px milk stroke on a 4 px line (45°/90° only); states: upcoming (outline) · active (filled signal `#7FE0B8` + label, info column updates) · visited (filled milk) · hover (label appears) · focus-visible (2 px signal ring). Each node pairs with an Aicher pictogram and a one-line public description; an ordered list mirrors the map for screen readers.

### 12.5 Iconography & illustration
- **Icons:** custom Otl Aicher-spirit pictograms, 24 px grid, 2 px stroke, square caps, 45°/90° geometry only, no fill; eight trace nodes + seven verbs (cow, drop, thermometer, flask, snowflake, factory, bottle, house).
- **Illustration:** none beyond hairline orthogonal diagrams; AI images are limited to backdrops and textures (below).
- **Photo treatment:** real photography cropped exactly to n columns or full-bleed, neutral grade; black-and-white for archive; mono caption below (`IMG · place class · year`).

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals (480 ms) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | slides along the grid, column wipe |
| `--dur-micro` | `160ms` | hover, arrow |
| `--dur-reveal` | `480ms` | text and module reveal |
| `--dur-scene` | `800ms` | grid slides; ceiling for any Swiss motion |
| `--rule-draw` | `400ms` | rules scaleX 0→1 before text |
| `--stagger-line` | `60ms` | line-by-line text reveal |
| `--wipe-stagger` | `30ms × 12 strips (600ms)` | page transition column wipe |

Order of every reveal: rule draws → text lines → image wipes along a grid edge (clip-path inset). Counters animate only to approved values; pending values show `—` and never animate. Scroll: Lenis, pinned chapters `scrub: 1`. Reduced motion: no column wipes, rules and text appear instantly, bottle static (ruler still keyboard-operable), logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Swiss Design relies on real photography and custom pictograms; generated images are only neutral backdrops, colour fields and paper textures. Leave the right-centre (columns 7–10) empty for the bottle.

**Tail prompt (append to every prompt):** *Swiss International Typographic Style restraint, flat even light, milk white #F7F4EC, ink black #171918, brand green #1E7A68 and forest #0B3B32, precise orthogonal geometry, generous negative space, subtle offset-print paper texture, calm, objective, premium, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/swiss-design/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Seamless milk-white paper sweep photographed straight on, one soft diagonal band of morning light crossing from upper left, a single thin hard shadow line on the floor plane, vast empty space right of centre | objects, props, gradients in colour, vignette | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical milk-white paper sweep with a soft diagonal band of light and a thin horizon line at 62% height, empty centre | objects, props | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Flat matte colour field of pale green #D9E8DF paper with one crisp 4 percent darker vertical band and a single deep green #1F5C45 straight line crossing horizontally at the lower third, Swiss poster restraint | leaves, texture noise, gradients | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Flat matte colour field of pale rose #F3D9D6 paper with a single red #B3202A straight line crossing at the lower third, exact geometry, Swiss poster restraint | earth, texture noise, gradients | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Flat matte colour field of pale amber #F8E4C2 paper with a single amber #E89A1C straight line crossing at the lower third and one large faint circle outline, Swiss poster restraint | sun rays, texture noise | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Flat matte colour field of ivory #F4EDE2 paper with a single ivory-beige #CDB89A line outlined in thin dark brown #4D4130 crossing at the lower third, Swiss poster restraint | texture noise, ornaments | 08 Four milks · /milk/essential |
| 7 | `trace/transit-ground.png` | 3600×2000 | no | Abstract transit-map ground in deep forest green #0B3B32 with a faint 24 px square grid in 4 percent milk lines and a few thin straight lines meeting at 45 and 90 degree angles, no nodes, no labels | glow, neon, curves, city map | 06 Traceability, /trace |
| 8 | `journey/station-line.png` | 4800×800, transparent | yes (real alpha) | Single horizontal transit line 4 px thick in ink black with seven evenly spaced white circular stations outlined in black, perfectly flat vector look, isolated on transparent background | labels, icons, perspective | 03 Cow to bottle |
| 9 | `textures/offset-paper.png` | 2048×2048, seamless | no | Seamless tileable texture of uncoated offset printing paper in milk white #F7F4EC, extremely fine fibres, flat scan lighting | folds, stains, shadows | 10 Heritage module, print-like grounds |
| 10 | `technology/grid-plane.png` | 3600×2000 | no | Charcoal #171918 plane with a precise thin milk-white 12-column grid and baseline lines at 6 percent opacity, one signal mint #7FE0B8 square highlighting a single module | perspective, glow, neon | 11 Technology |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/03_swiss-design.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/swiss-design/
- [ ] Every module snaps to the 12-column + 8 px baseline grid (grid overlay check)
- [ ] Trace map has a parallel ordered list; tables use real `<table>` semantics
