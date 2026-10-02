# 54 — Scientism · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 4 / 5** · **Best used for:** chapter 07 *Quality*, chapter 05 *Breeds* as natural-history plates,
chapter 06 and /trace as schematics, /technology, the facts tables on /milk/[variant], and chapter 13 as a
chain-of-custody record. It works as the "evidence voice" next to an editorial or minimal base, and it only stays
honest if every value reads "pending lab confirmation" until the lab confirms it.

---

## 1. Style essence

Scientism turns the look of scientific method into an aesthetic: numbered plates and figures ("Fig. 7.2"),
specimen labels, scale bars, dimension lines, graph paper, leader-line callouts, data sheets with units, margin
notes, references and methodology captions. Its beauty comes from precision and humility: everything is labelled,
measured and sourced, and uncertainty is written down.

Three reference points:
1. **Herbarium sheets and museum specimen labels** (Kew, and the Botanical Survey of India's Central National
   Herbarium in Howrah): a specimen, a handwritten label, a scale and a catalogue number.
2. **Scientific journal figures and Edward Tufte's information design**: small multiples, sidenotes, data-ink
   discipline, captions that explain the method.
3. **The NCERT science-textbook diagram**: the labelled apparatus drawings that almost every Indian student grew up
   with. It is a shared local memory of "how things are tested".

### How it differs from neighbouring styles
| | 23 Victorian | 03 Swiss | 54 Scientism |
|---|---|---|---|
| Driver | Ornament and engraving | Grid and typography | **Method**: figures, units, labels, sources |
| Signature | Frames, copperplate | Asymmetric grid, Helvetica | Fig. numbers, scale bars, data sheets, "pending" notation |
| DESIGO® role | Heritage mood | Layout system | The evidence voice |

## 2. Why it fits DESIGO® and where it fights

- **DESIGO® sells verifiability.** A 16-point screen at source and again at the plant, a recorded journey, a QR
  identity per bottle: these are method stories, and scientism is the language of method.
- **It makes "pending" look respectable.** In a lab notebook, "result pending" is normal and honest. This style is
  the most natural home for the brand's `Claim.status` system.
- **It gives the breeds dignity.** Natural-history plates (D1–D6) present indigenous cows as subjects of careful
  study, never as mascots.
- **Chain of custody** is a real lab concept and a perfect frame for the trace demo.

**Where it fights:** the look of science carries authority, so it is the style most easily abused. Fake formulas,
molecule diagrams, made-up percentages or "clinically" language would turn it into pseudo-science and expose the brand
to regulatory risk. It can also feel cold next to farm and heritage. The remedy is strict honesty rules (section 11)
and warm chapters left in other styles.

## 3. Art direction

### Palette: lab paper, graph lines, one stamp colour
| Token | Hex | Use |
|---|---|---|
| `--lab-paper` | `#F7F4EC` | Page (= milk) |
| `--plate` | `#EFE9DC` | Plate and figure backgrounds (= milk-2) |
| `--graph-minor` | `rgba(11,59,50,.08)` | 4 mm graph grid |
| `--graph-major` | `rgba(11,59,50,.16)` | 20 mm grid |
| `--ink` | `#1E211F` | Text, diagram lines |
| `--forest` | `#0B3B32` | Figure titles, dark schematic pages |
| `--sepia` | `#5A4630` | Breed plates (as in D1–D6) |
| `--stamp` | `#7A5B37` | "PENDING" rubber stamp, uncertainty marks (earth darkened to 5.7:1; `#8C6A43` was 4.49:1) |
| `--green` | `#1E7A68` | Links, focus, confirmed "verified" tick |
| `--gold` | `#C8A96B` | Plate rule lines |
| Specimen dots | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | One cap-colour dot per variant specimen label |

There is no red "fail" and no green "pass" for results; the only status colours are stamp-earth (pending) and green
(verified source).

### Typography
- **Display:** *Fraunces* 300 (brand), opsz 144, for chapter titles only.
- **Figures and captions:** *IBM Plex Serif* (OFL) italic 400, 14 px, for "Fig. 7.1: …" captions and margin notes.
- **Labels:** *IBM Plex Sans Condensed* 500, 11 px, uppercase, +0.12em, for specimen labels and axis labels.
- **Notation and data:** *IBM Plex Mono* 400, 13 px, tabular, for values, units, IDs and catalogue numbers.
- **Devanagari:** *IBM Plex Sans Devanagari* (OFL), the same family.
- Body `1rem/1.6` in IBM Plex Sans, 60ch, with sidenotes in a 220 px margin column.

### Texture, imagery, iconography
- Graph paper (CSS gradients, not images) inside figures only; a 1% paper grain on plates.
- Imagery: breed plates D1–D6, real lab and test-card photographs with numbered callouts, technical line drawings
  made in-house as SVG (generated "technical drawings" are inaccurate and are not used for apparatus).
- Icons: apparatus-style line icons (1 px) drawn as a set: beaker, test card, thermometer silhouette, chiller, can,
  bottle, QR.

### Grid
12 columns plus a **margin-note column** (Tufte layout) on desktop, 5vw margins, a 16 px (4 mm) graph module for
figure interiors. Each chapter is a numbered **plate** with a title strip: `PLATE 07 · QUALITY SCREEN`.

### Header wordmark
The black write/un-write DESIGO® loop stays unchanged, top-left, outside any plate.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Plot | Diagram lines draw like a pen plotter at constant speed (600 px/s, `linear`), one stroke at a time |
| Leader lines | Callout leaders extend from the point to the label (300 ms `cubic-bezier(.16,1,.3,1)`), then the label fades in (240 ms) |
| Drawer | Specimen cards slide out like a museum drawer (500 ms `--ease-out`, 24 px) |
| Measure | Dimension lines appear with end ticks first (120 ms), then the line (300 ms), then the value |
| Stamp | "PENDING" stamp appears at 0.92 opacity with a 2° rotation, instantly (0 ms): stamps do not animate |
| Transition | Plate-to-plate: a hairline wipe across the title strip (600 ms `--ease-inout`) |

**Cursor states:** default is a 16 px fine crosshair (1 px ink) · **link**: the crosshair becomes a short leader
arrow · **plate image**: a 140 px **loupe** that magnifies 2× (uses the 2× asset) · **360**: crosshair with
`ROTATE · θ` · **text**: native caret · **disabled**: crosshair at 30% · touch: none; loupe on long-press.

**Hover:** links get a 1 px underline plus a superscript reference number style; table rows highlight in `--plate`;
callout numbers on figures connect to their list entries both ways (hover either to highlight both).

## 5. The hero bottle and the four variants

The bottle is presented as **a specimen on a plate**: centred on `--plate`, a 50 mm-style scale bar beneath, dimension
lines for height and diameter whose values read `H = — (pending measurement)` until the real bottle is measured, and
a specimen label:

```
SPECIMEN · DESIGO® returnable glass bottle
CATALOGUE · V1+  ●
SIZE · 1 L glass · 900 g   [PENDING]
```

Float is reduced to ±4 px over 6 s (a specimen sits still); pointer tilt ±6°.

- **Before 360 frames:** the plate is captioned honestly "Fig. 1: front elevation (single view available)"; the
  ±25° turn is offered as "Tilt study".
- **After 360 frames:** "Plate 1a–1d" shows four elevations (0°, 90°, 180°, 270°) as small multiples, and dragging
  the main view reads out `θ = 036 / 072 frames · 180°` in mono.

| Variant | Scientific plate |
|---|---|
| **MASTER 26** | `PLATE 08.1`. A herbarium sheet with **empty mounting slots** and the label "Herb list: 26 herbs stated by DESIGO® · pending confirmation". No herb is drawn or named until confirmed. Line: "Twenty-six herbs. The fullest expression of the source." |
| **ROOT 14** | `PLATE 08.2`. A soil-profile cross-section (illustrative strata, red earth), captioned "Fig. 8.2: illustrative soil profile, not a site survey". "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | `PLATE 08.3`. A sun-path arc diagram over a horizon in amber hairlines, the bottle at noon. "The everyday foundation." |
| **ESSENTIAL** | `PLATE 08.4`. An almost empty plate: the specimen, the scale bar and the label. "Simple, balanced, honest." |

**Data sheet** (facts table): `Code · Name · Price · Size · Herbs · Descriptors · Source · Status`, one row per
field, values in mono, each with its status stamp and source key, and `RESERVE ———→` beneath.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | `PLATE 01`. The bottle specimen (section 5) on the right; "MILK / FROM THE / SOURCE." in Fraunces left; a margin note: "Traceable milk from indigenous Indian cows." |
| 02 | Bottle becomes the story | Six numbered callouts (1 ORIGIN … 6 TRACE) with leader lines to the bottle, each with a one-line note. Milk → forest; lines invert to milk. |
| 03 | Cow → bottle | "Fig. 3: From cow to bottle (schematic)". A process flowchart with seven boxed stations, arrows and the E1–E7 drawings as figure insets. |
| 04 | Where it begins | **Field notes**: real farm photographs with field-notebook captions (date, region, photographer) taken from real metadata only. |
| 05 | Breeds | **Natural-history plates** D1–D6 in sepia with specimen labels: name, region (from `breeds`), "Status: client-stated · approval pending". The loupe works on each plate. |
| 06 | Traceability | A schematic on forest: node symbols in a legend, solid lines for recorded hand-offs. Title "Schematic 06: illustrative journey, not live data". |
| 07 | Quality | **Signature: the data sheet.** Left: a photo of the real 16-point test card with numbered callouts. Right: a table of the 16 parameters from `qualityScreen` with columns *Parameter · Screened at source · Re-screened at plant · Result*; every result cell reads "— pending lab confirmation" with the stamp. A methodology note states what is and is not yet confirmed. |
| 08 | Four milks | Four plates (section 5), indexed `08.1–08.4` in the left margin. |
| 09 | Milk as material | "Fig. 9: flow study (simulation)": the milk ribbon with fine streamlines over graph paper. |
| 10 | Heritage | An archival plate: the cow line art as an engraving study, gold rule lines, the italic statement as an epigraph with source. |
| 11 | Technology | "Diagram 11: the seven stages": a system diagram of ORIGIN → DELIVER as labelled blocks with arrows. Public vocabulary only; no internal system names. |
| 12 | Ghee | A **technical cross-section of the bilona churn** (in-house SVG) with labelled parts, and a grade table linking each ghee to its milk; prices pending. |
| 13 | Trace your milk | A **sample lookup form** (bottle ID in mono); the result is a **chain-of-custody record**: a table of hand-offs (node, step, record) from the demo data. `DEMO` stamp always visible. |
| 14 | Story | A chronology table with a source column; pending items hidden in production. |
| 15 | Final CTA | The specimen returns, plate closed: "Know where your milk comes from." with a single reference line to /trace. |

**Inner pages:** /milk shows four specimen plates as small multiples (same scale, same angle), each expanding into
/milk/[variant] (plate, elevation multiples, data sheet) · /trace is the schematic, the custody-record demo and a
glossary · /technology is the stage diagram with a sidenote per stage · /origin has field notes and breed plates · /about
has the chronology and sources · /ghee has the churn cross-section · /reserve is a clean "order form" with a specimen
selector.

## 7. Component variants

`Plate` (numbered title strip) · `Figure` (numbered caption, method note) · `SpecimenLabel` (reads `Claim.status`
and `source`) · `ScaleBar` · `DimensionLine` (value or pending) · `Callout` (numbered leader lines) · `MarginNote` ·
`GraphPaper` · `DataSheet` (QualityPanel, facts tables) · `StatusStamp` (PENDING / VERIFIED / DEMO) · `Schematic`
(TraceMap) · `StageDiagram` (TechnologyGrid) · `CustodyRecord` (TraceYourMilk) · `ElevationMultiples` (360 viewer
companion) · `Loupe` · `CrosshairCursor`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Plex system, stamps | Tokens, specimen, `StatusStamp` | Every `Claim` renders with status + source; fonts ≤ 170 KB | Wordmark vector | 3 |
| 2 | Grid & shell | Plates, margin column, cursor | `Plate`, `MarginNote`, `CrosshairCursor` | Margin notes reflow inline on mobile | — | 3 |
| 3 | Hero | Bottle specimen | `ScaleBar`, `DimensionLine`, label | LCP ≤ 2.0 s; dimensions pending until measured | Render | 3 |
| 4 | Bottle → story | Callouts | Pinned scene | Reduced motion = numbered list | — | 3 |
| 5 | Cow → bottle | Flowchart | Figure 3 | Copy from `journey` only | E1–E7 | 3 |
| 6 | Origin / farm | Field notes | Captioned photos | Metadata real; no invented dates | Farm photos with EXIF | 2 |
| 7 | Breeds | Plates + loupe | 6 plates, `Loupe` | Status visible; traits reviewed | D1–D6 (2× assets) | 3 |
| 8 | Trace map | Schematic | `Schematic` | Legend; keyboard nodes; label visible | — | 4 |
| 9 | Quality | Data sheet | `DataSheet`, test-card callouts | Zero unconfirmed values; methodology note approved | Test-card photo | 4 |
| 10 | Four worlds + 360 | Plates, elevations | 4 plates, `ElevationMultiples` | No herb named before confirmation; counter correct | 360 frames | 6 |
| 11 | Heritage | Archival plate | Scene | Epigraph sourced | Line art | 2 |
| 12 | Technology | Stage diagram | `StageDiagram` | Public vocabulary only | — | 2 |
| 13 | Ghee | Churn cross-section | SVG drawing, table | Drawing reviewed by the ghee maker; prices pending | Real churn reference photo | 3 |
| 14 | Trace-your-milk | Custody record | `CustodyRecord` | DEMO stamp visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Small multiples | Pages | Same scale across variants | 360 | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates, glossary | Content from `desigo.ts` | Photos | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Every chronology item sourced | Archive | 3 |
| 18 | Mobile | Plates on phones | Stacked figures, inline notes | Tables scroll inside their figure only | — | 3 |
| 19 | A11y + reduced motion | — | Table semantics, alt text | WCAG 2.2 AA; real `<table>` with headers; callouts linked by `aria-describedby` | — | 2 |
| 20 | Perf, QA, compliance | Ship | Claims audit vs `blockedClaims`, QA | Lighthouse ≥ 96; legal review of the Quality page | All | 4 |

**Total:** about 64 days.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** a macro photo of the real 16-point test card; lab confirmation of methods and any values
before they appear; the bottle's measured dimensions; reference photos of the real bilona churn; farm photos with
original metadata; 360 frames; final herb lists (only then may herbs be drawn).

**Images to generate** (illustration and texture only; `web/public/desigo/styles/scientism/`; append the house-style
tail; full spec in section 12.7):
| # | File | Size | Prompt |
|---|---|---|---|
| SC1 | `herbarium-sheet-empty.png` | 2000×2800 | Empty museum herbarium mounting sheet on warm cream paper with a few small strips of linen tape and faint pencil guide marks, no plants, flat scan lighting, no text, no watermark, no logo, no letters |
| SC2 | `soil-profile.png` | 1600×2400, transparent | Scientific illustration of a soil profile cross-section with layered red-earth strata and fine roots, watercolour and ink, textbook plate style, transparent background, no labels, no text, no watermark, no logo, no letters |
| SC3 | `lab-paper.png` | 2400×2400, seamless | Seamless texture of slightly aged laboratory notebook paper, warm cream, faint fibres, flat light, no lines, no text, no watermark, no logo, no letters |
| SC4 | `glassware-line-set.png` | 2400×1600, transparent | Set of simple scientific glassware line drawings: beaker, test tube in a rack, conical flask, single-weight ink line, textbook diagram style, evenly spaced, transparent background, no labels, no text, no watermark, no logo, no letters |
| SC5 | `sun-path.png` | 3200×2000 | Minimal scientific diagram of a sun path arc over a flat horizon in thin amber lines on cream paper, a few faint construction lines, no labels, no text, no watermark, no logo, no letters |

SC4 is a reference sheet for the in-house SVG icon set only and is never published (see 12.7). SC4 is a reference sheet for the in-house SVG icon set only and is never published (see 12.7). Never generate molecules, protein structures, microscope views, charts with values or apparatus that pretends to be
DESIGO®'s own lab.

## 10. Performance, accessibility and mobile

- Almost everything is SVG and HTML; graph paper is CSS; plates are AVIF with a 2× variant loaded only for the loupe.
- Accessibility: data sheets are real tables with `<th scope>`; callouts and figure numbers are linked
  programmatically; stamps have text equivalents ("Status: pending lab confirmation"); the loupe is optional, with
  full-size images available on tap; reduced motion shows completed plots.
- Mobile: the margin column becomes inline notes; plates stack; wide tables scroll horizontally *inside* the figure
  with a visible hint, never the page.

## 11. Risks and premium guardrails

**Risks:** pseudo-science and false authority; regulatory exposure (FSSAI, ASCI) if anything looks like a health or
nutrition claim; coldness; clutter of labels.

**Premium guardrails**
1. **Every value is real, sourced and confirmed, or it reads "— pending lab confirmation".** No exceptions, including
   decorative figures.
2. No molecules, no A2 or beta-casein diagrams, no nutrient charts, no "clinically", no percentages without a lab
   report on file.
3. Every illustrative figure says so in its caption ("illustrative", "schematic", "simulation").
4. Glow, colour or ticks never imply a test result.
5. Breed plates present cows with dignity: accurate anatomy, calm pose, sepia, no caricature.
6. A maximum of 6 callouts per figure and one figure per viewport. Precision is calm, not crowded.
7. The Quality page is reviewed by DESIGO®'s quality lead and a legal reviewer before launch.
8. Warm chapters (origin photos, heritage, story) keep their warmth. Scientism is the evidence voice, not the whole
   personality.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: strongest honesty rules in the set; missing primary/secondary/surface/muted roles, DEMO token, radius/shadow, component states, motion tokens, negatives, hero and ESSENTIAL/trace prompts. Fixed: `--stamp` earth `#8C6A43` fails as text (4.49:1 paper, 4.08:1 plate) → `#7A5B37`; SC4 glassware clarified as unpublished icon reference (body said generated apparatus is not used). IBM Plex fonts are OFL; no claim violations.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#0B3B32` | forest: figure titles, plate title strips, primary button, dark schematic pages | 11.3:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk on forest | 11.3:1 on primary |
| Secondary | `--c-secondary` | `#5A4630` | sepia: breed plates, engraving studies, archival plate rules | 8.1:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | links, focus ring, confirmed-source tick (never a test 'pass') | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | lab paper (= milk) |  |
| Surface | `--c-surface` | `#EFE9DC` | plate and figure backgrounds (= milk-2) | text on surface 13.4:1 |
| Text | `--c-text` | `#1E211F` | text and diagram lines | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E625C` | captions secondary, axis labels, sidenote metadata | 5.7:1 on bg |
| Line | `--c-line` | `rgba(11,59,50,.16)` | 20 mm major graph grid, table rules; minor grid `rgba(11,59,50,.08)` | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#0B3B32` | VERIFIED source stamp/tick · PENDING rubber stamp, uncertainty marks, "— pending lab confirmation" · DEMO stamp ink (forest), 2° rotation, 0.92 opacity | ok 4.7:1 · pending 5.7:1 · demo 11.3:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--graph-minor` | `rgba(11,59,50,.08)` | 4 mm graph grid inside figures only | |
| Style extra | `--graph-major` | `rgba(11,59,50,.16)` | 20 mm grid | |
| Style extra | `--gold` | `#C8A96B` | plate rule lines | |
| Style extra | `--specimen-dots` | `#1F5C45 · #B3202A · #E89A1C · #CDB89A` | one cap-colour dot per variant specimen label (never a status) | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | PLATE 08.1: herbarium sheet with empty mounting slots; base dot on the specimen label; light as plate tint; no herb drawn or named until confirmed |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | PLATE 08.2: illustrative soil-profile cross-section in base/deep strata, captioned "illustrative soil profile, not a site survey"; light plate tint |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | PLATE 08.3: sun-path arc in base-amber hairlines over a deep-brown horizon; light plate tint |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | PLATE 08.4: almost empty plate; deep `#4D4130` for the label rule, light plate tint |

**Dark-chapter inversion:** schematic pages (06 Traceability, /trace, 11 Technology) invert: `--c-bg` → `#0B3B32`, plate → `#0F4A3F`, text and diagram lines → `#F7F4EC`, muted → `#B5C7BF`, graph grid → `rgba(247,244,236,.08/.16)`, pending stamp → `#C8A96B`, demo stamp → `#F7F4EC`, accent → `#7FE0B8`; the logo turns white and stays outside any plate.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | 300 · opsz 144 | clamp(3rem, 7vw, 7.5rem) (chapter titles only) | 1.0 | −0.03em | sentence |
| Headline H1–H2 | Fraunces (plate titles) · IBM Plex Serif italic (Fig. captions, margin notes) | `@fontsource-variable/fraunces` · `@fontsource/ibm-plex-serif` | Fraunces 300–400 · Plex Serif 400 italic | H1 clamp(2.2rem, 4vw, 4rem) · H2 clamp(1.5rem, 2.4vw, 2.2rem) · caption 14 px | 1.15 (caption 1.45) | −0.01em | sentence |
| Body | IBM Plex Sans | `@fontsource-variable/ibm-plex-sans` | 400 / 500 | 1rem, measure 60ch; sidenotes 14 px in 220 px column | 1.6 | 0 | sentence |
| Label / UI | IBM Plex Sans Condensed | `@fontsource/ibm-plex-sans-condensed` | 500 | 11 px (.6875rem); 12 px min on mobile | 1.2 | +0.12em | UPPERCASE |
| Data / mono | IBM Plex Mono | `@fontsource/ibm-plex-mono` | 400 · `tnum` | 13 px values, units, IDs; 1.75rem trace input | 1.35 | 0 | as data |
| Devanagari (optional) | IBM Plex Sans Devanagari | `@fontsource/ibm-plex-sans-devanagari` | 400 / 500 | body +6% | 1.6 | 0 | — |

Licence: Fraunces and the IBM Plex family (Sans, Sans Condensed, Serif, Mono, Sans Devanagari) are SIL OFL 1.1 via @fontsource. Pairing: one superfamily (Plex) for every scientific register, with Fraunces as the brand voice on chapter titles only.

### 12.3 Layout & surfaces
- **Grid:** 12 columns + a 220 px margin-note column (Tufte layout) on desktop, 5vw margins, 24 px gutters, max 1440 px; 16 px (4 mm) graph module for figure interiors; each chapter is a numbered plate with a title strip `PLATE 07 · QUALITY SCREEN`
- **Spacing scale:** 4 px base aligned to the 16 px graph module: 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 0 · md 0 · lg 0 (plates, tables, labels are square); pill only for the loupe and callout number discs
- **Border style:** 1 px ink diagram and table lines; 0.5 px gold plate rules; specimen labels with a 1 px ink frame; dimension lines with 6 px end ticks
- **Shadow / elevation:** none on UI (paper is flat); bottle: specimen contact ellipse 6 px blur at 20%; drawers slide 24 px with no shadow
- **Texture / overlay:** graph paper as CSS gradients inside figures only; 1% paper grain on plates; no grain on data tables

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: forest `#0B3B32` plate, milk IBM Plex Sans Condensed 500 caps label + `→`, radius 0, 48 px high (44 px min), padding 0 24 px; like a form's submit key. Hover: 1 px frame draws clockwise (600 ms), arrow +6 px, magnetic ≤ 6 px · focus-visible: 2 px accent ring offset 3 px · active: plate `#07211C` · disabled: 40%, label muted · loading: plotter line draws under the label at constant speed (600 px/s). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: 1 px ink frame, transparent, ink label, same size. Hover: `--c-surface` fill · focus-visible: accent ring · active: frame 2 px · disabled: 40% · loading: plotter line.
- **Text / arrow link**: accent-green Plex Sans with 1 px underline plus a superscript reference number style (`Fig. 7.1¹`); hover highlights the referenced figure/list entry both ways, arrow +6 px · focus-visible: accent ring · active: ink · disabled: muted · loading: n/a.
- **Icon button** (incl. menu): 40 px square (44 px hit), 1 px apparatus-style line icon (beaker, test card, thermometer silhouette, chiller, can, bottle, QR, menu = three ruled lines). Hover: `--c-surface` square · focus-visible: accent ring · active: 0.96 · disabled: 30% · loading: crosshair rotates 90° stepwise. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar on lab paper with a 1 px rule beneath; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style); top-left, outside any plate. Six links in Plex Sans Condensed caps with plate numbers (`07 QUALITY`), RESERVE primary. Mobile: 56 px bar; menu opens a full-screen 'index of plates' table; Esc closes.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 16 px fine crosshair (1 px ink) · hover: crosshair becomes a short leader arrow · ROTATE: crosshair with `ROTATE · θ` on the main specimen view · EXPLORE: 140 px loupe magnifying 2× (2× asset) over plates · ENTER: leader arrow with `PLATE →` on chapter links · VIEW: loupe-less ring `VIEW FIG.` on photos that open full size · TRACE: crosshair snapping to schematic nodes with `TRACE`. Disabled: crosshair 30%. Touch: none; loupe on long-press; full-size image on tap.
- **Card / panel / info block**: `Plate` / `Figure`: plate fill `#EFE9DC`, radius 0, title strip (`PLATE 07 · QUALITY SCREEN`), numbered caption beneath in Plex Serif italic with a method note; specimen cards slide out like a drawer (500 ms, 24 px). Hover (if linked): rule thickens · focus-visible: accent ring · loading: graph paper shown with "Figure loading" caption.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): rubber-stamp style, Plex Sans Condensed 500 caps, 1.5 px frame, 2° rotation, 0.92 opacity, appears instantly (0 ms, stamps do not animate). Pending verification: `--c-pending` `PENDING` stamp + text equivalent "Status: pending lab confirmation"; DEMO · not live data: forest `DEMO · NOT LIVE DATA` stamp, always visible on the custody record; VERIFIED (source) stamp in accent; `ILLUSTRATIVE` / `SCHEMATIC` / `SIMULATION` figure tags.
- **Input + form field** (Trace-your-milk bottle ID): 'sample lookup form': IBM Plex Mono 1.75rem, 56 px high, 1 px ink frame on lab paper, label `SAMPLE ID` above in condensed caps, helper text below, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: frame 2 px · focus-visible: 2 px accent ring · active: caret · disabled: plate fill, 40% · loading: plotter line draws along the bottom edge · result: chain-of-custody table of hand-offs (node, step, record) from demo data (`aria-live=polite`) · error: pending text "No record for this sample ID".
- **Divider / ornament**: 0.5 px gold plate rule, or a scale-bar rule with end ticks; a hairline wipe across the title strip between plates (600 ms).
- **Section header** (chapter number + title pattern): title strip: `PLATE 07 · QUALITY SCREEN` in condensed caps on a 1 px rule + chapter title in Fraunces 300 + figure count in mono (`Figs. 7.1–7.3`).
- **Product info block** (variant name, code, price-pending, size, descriptors): data sheet table `Code · Name · Price · Size · Herbs · Descriptors · Source · Status`, one row per field, values in Plex Mono, each with status stamp and source key; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; `RESERVE ———→` beneath. Real `<table>` with `<th scope>`.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): a specimen on a plate: centred on `--c-surface`, 50 mm-style scale bar beneath, dimension lines for height and diameter reading `H = — (pending measurement)` until measured, specimen label (SPECIMEN · CATALOGUE V1+ ● · SIZE · PENDING). Float ±4 px / 6 s, tilt ±6°. Before 360 frames: "Fig. 1: front elevation (single view available)", ±25° 'Tilt study'; after: Plate 1a–1d elevations (0°/90°/180°/270°) as small multiples, drag readout `θ = 036 / 072 frames · 180°`.
- **Trace node / timeline step**: schematic node symbol from a legend (square = farm, circle = collection, …), 1 px ink, solid lines for recorded hand-offs; 44 px hit. Default: outline · hover: leader line + label extend (300 ms) · focus-visible: accent ring · active: filled forest symbol, record row highlighted in the custody table · disabled/not reached: dashed outline · loading: plotter draws the next segment. Title "Schematic 06: illustrative journey, not live data".

### 12.5 Iconography & illustration
Icons: 1 px apparatus-style line icons drawn in-house as one SVG set on a 24 px grid (beaker, test card, thermometer silhouette, chiller, can, bottle, QR). Illustration: natural-history breed plates D1–D6 in sepia; in-house technical SVG drawings (bilona cross-section reviewed by the ghee maker); every illustrative figure says "illustrative", "schematic" or "simulation". Photo treatment: real test-card and lab photographs with numbered callouts (max 6 per figure), neutral true-colour grade, metadata captions only from real EXIF.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | leader lines extend, drawers |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | plate-to-plate hairline wipe |
| `--ease-plot` | `linear (600 px/s)` | pen-plotter line drawing |
| `--dur-micro` | `240ms` | label fade-in after leader, hover |
| `--dur-reveal` | `500ms` | specimen drawer slide (24 px) |
| `--dur-scene` | `600ms` | plate transition wipe |
| `--dur-leader` | `300ms` | callout leader extends |
| `--dur-measure` | `120ms + 300ms` | dimension end ticks, then line, then value |
| `--stamp` | `0ms` | stamps appear instantly |

One figure per viewport; plotting is one stroke at a time. Scroll: Lenis + ScrollTrigger `scrub: 1` for plots only. Reduced motion: completed plots, leaders and dimensions shown static; loupe optional; stamps unchanged.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *warm natural light, restrained premium palette of milk white #F7F4EC, deep forest green #0B3B32, earth brown #8C6A43 and warm gold #C8A96B, subtle film grain, editorial, calm, high-end, no text, no watermark, no logo, no letters, scientific plate style, precise, calm*

| # | File path (web/public/desigo/styles/scientism/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| SC-H1 | `web/public/desigo/styles/scientism/hero-plate.png` | 3200×2000 (16:10) | no | Empty museum specimen plate on warm cream paper #EFE9DC with faint pencil construction lines and a thin gold #C8A96B rule border, flat scan lighting, generous empty center | base negatives + numbers, scale values, molecules, charts, apparatus | Ch. 01 hero plate ground |
| SC-H2 | `web/public/desigo/styles/scientism/hero-plate-portrait.png` | 1400×2400 (7:12) | no | Vertical empty specimen plate on warm cream paper with faint pencil guide marks and a thin gold rule frame, flat scan lighting, empty center | base negatives + numbers, scale values, molecules, charts | Ch. 01 hero (mobile) |
| SC-V1 | `web/public/desigo/styles/scientism/herbarium-sheet-empty.png` | 2000×2800 + 1400×2400 portrait | no | Empty museum herbarium mounting sheet on warm cream paper with a few small strips of linen tape and faint pencil guide marks, no plants, flat scan lighting | base negatives + plants, herbs, leaves, handwriting, labels | MASTER 26 plate 08.1 |
| SC-V2 | `web/public/desigo/styles/scientism/soil-profile.png` | 1600×2400 (2:3) | yes (real alpha) | Scientific illustration of a soil profile cross-section with layered red-earth strata from #B3202A to #4A0A0F and fine roots, watercolour and ink, textbook plate style, transparent background | base negatives + labels, depth numbers, arrows, minerals named | ROOT 14 plate 08.2 (captioned illustrative) |
| SC-V3 | `web/public/desigo/styles/scientism/sun-path.png` | 3200×2000 + 1400×2400 portrait | no | Minimal scientific diagram of a sun path arc over a flat horizon in thin amber #E89A1C lines on cream paper, a few faint construction lines | base negatives + labels, degree numbers, compass letters | BASE 3 plate 08.3 |
| SC-V4 | `web/public/desigo/styles/scientism/plate-empty-ivory.png` | 3200×2000 + 1400×2400 portrait | no | Almost blank ivory #F4EDE2 museum plate with one faint pencil frame line and a tiny corner mount, flat scan light, utterly quiet | base negatives + labels, numbers, objects | ESSENTIAL plate 08.4 |
| SC-J1 | `web/public/desigo/styles/scientism/survey-contour-paper.png` | 3600×2000 (9:5) | no | Pale cream survey paper with very faint hand-drawn contour lines in forest green at 10%, no place features, no labels, flat scan | base negatives + map labels, roads, place names, numbers, compass | Ch. 06 schematic ground (illustrative), /trace |
| SC-T1 | `web/public/desigo/styles/scientism/lab-paper.png` | 2400×2400, seamless | no | Seamless texture of slightly aged laboratory notebook paper, warm cream, faint fibres, flat light, no lines | base negatives + ruled lines, handwriting, stains | Plate grain (1%) |
| SC-R1 | `web/public/desigo/styles/scientism/_reference/glassware-line-set.png` | 2400×1600 (3:2) | yes (real alpha) | Set of simple scientific glassware line drawings: beaker, test tube in a rack, conical flask, single-weight ink line, textbook diagram style, evenly spaced, transparent background | base negatives + liquids with labels, measurement marks, branded lab equipment | Reference for the in-house SVG icon set only — not published |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Never generate molecules, protein structures, A2/beta-casein diagrams, microscope views, charts with values or apparatus that pretends to be DESIGO®'s own lab. Breed plates use the house D1–D6 brief.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/54_scientism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/scientism/
