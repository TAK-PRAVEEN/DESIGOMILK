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
| `--sw-grey` | `#6B6F6C` | Secondary text (≈ 4.6:1 on milk — 16px+ only) |
| `--sw-rule` | `#171918` 100% / 1px and 4px | Structural rules |
| `--sw-green` | `#1E7A68` | DESIGO accent, active states |
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
- **/about** — timeline ruler; supporters list (pending).
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
