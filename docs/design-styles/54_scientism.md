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
| `--stamp` | `#8C6A43` | "PENDING" rubber stamp, uncertainty marks (= earth) |
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
tail):
| # | File | Size | Prompt |
|---|---|---|---|
| SC1 | `herbarium-sheet-empty.png` | 2000×2800 | Empty museum herbarium mounting sheet on warm cream paper with a few small strips of linen tape and faint pencil guide marks, no plants, flat scan lighting, no text, no watermark, no logo, no letters |
| SC2 | `soil-profile.png` | 1600×2400, transparent | Scientific illustration of a soil profile cross-section with layered red-earth strata and fine roots, watercolour and ink, textbook plate style, transparent background, no labels, no text, no watermark, no logo, no letters |
| SC3 | `lab-paper.png` | 2400×2400, seamless | Seamless texture of slightly aged laboratory notebook paper, warm cream, faint fibres, flat light, no lines, no text, no watermark, no logo, no letters |
| SC4 | `glassware-line-set.png` | 2400×1600, transparent | Set of simple scientific glassware line drawings: beaker, test tube in a rack, conical flask, single-weight ink line, textbook diagram style, evenly spaced, transparent background, no labels, no text, no watermark, no logo, no letters |
| SC5 | `sun-path.png` | 3200×2000 | Minimal scientific diagram of a sun path arc over a flat horizon in thin amber lines on cream paper, a few faint construction lines, no labels, no text, no watermark, no logo, no letters |

Never generate molecules, protein structures, microscope views, charts with values or apparatus that pretends to be
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
