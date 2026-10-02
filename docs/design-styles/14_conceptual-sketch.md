# 14 — Conceptual Sketch · DESIGO® build plan

**Fit score: 4 / 5** · **Best used for:** explaining the system: chapter 03 *From cow to bottle*, the /technology
and /trace pages, and the annotation layer on product pages. It can carry the whole site if it is paired with Luxury
Typography for the hero and the four milks.

---

## 1. Style essence

Conceptual sketch is the visual language of the designer's or engineer's notebook: graphite and ink line drawings,
construction lines, arrows, margin notes, exploded views and "thinking made visible". It looks unfinished on purpose.
It shows *how something works and how it was reasoned*, and drawn well it signals intelligence and honesty.

Three reference points:
1. **Leonardo's codices and Dieter Rams-era Braun sketchbooks**: annotation as authority.
2. **Patent drawings and exploded assembly diagrams**: hairline, numbered callouts, "Fig. 3".
3. **Indian architectural notebooks** (Doshi's sketches, Correa's site sketches) and the hand-ruled *bahi-khata*
   ledger: a local precedent for hand-recorded, trustworthy information.

## 2. Why it fits DESIGO®

- **Traceability is an argument, and sketches argue.** "Milk moves in identified lots; each hand-off is recorded"
  becomes a hand-drawn chain of numbered boxes. People believe a diagram they can watch being drawn.
- **"Honest by design."** A sketch never pretends to be a photograph. It is the right medium while real photos are
  still pending. Where a photo is missing, a labelled drawing is more honest than stock.
- **It bridges heritage and technology.** The same pen draws a Tharparkar cow and a chiller schematic.
- It is cheap to produce, as SVG line art animated with `stroke-dashoffset`, and very light to load.

**Where it fights:** used everywhere it can look unfinished, or like a start-up pitch deck. The fix is to pair
it with impeccable typography and real product renders. The sketch explains and the bottle sells. Score 4, not 5,
because it cannot carry the luxury hero moment alone.

## 3. Art direction

### Palette
| Token | Hex | Use |
|---|---|---|
| `--sketch-paper` | `#F4EFE3` | Notebook paper (between milk and paper) |
| `--sketch-paper-2` | `#EAE2D0` | Facing page, inset panels |
| `--graphite` | `#3A3D3B` | Primary line (2H–HB pencil feel) |
| `--graphite-light` | `#9A9C97` | Construction lines, 40% |
| `--ink` | `#1E211F` | Final ink lines, body text |
| `--forest` | `#0B3B32` | Headlines, the "inked" brand layer |
| `--annot-green` | `#1E7A68` | Margin notes, arrows (DESIGO green "fountain pen") |
| `--annot-earth` | `#8C6A43` | Soil and farm notes |
| `--gold` | `#C8A96B` | Highlighter marks (only 1 per viewport) |
| `--signal` | `#7FE0B8` | Technology chapter only, as a "light-table" glow |

Variant ink colours (the only coloured lines allowed on a variant page): MASTER `#1F5C45`, ROOT `#B3202A`,
BASE `#C77F0F` (BASE amber darkened from `#E89A1C` for line legibility), ESSENTIAL `#8E7A5C`.

### Typography
- **Display:** *Fraunces* (opsz 72–144, SOFT 50, weight 350). Keep the brand serif. The headline is the "printed"
  part of the page.
- **Annotation:** *Kalam* (Indian Type Foundry, OFL, Latin and Devanagari). It is a real hand, it is Indian, and it is
  legible. Use it at 18–22 px, rotated −1.5° to +1.5°, and **never for more than 12 words**.
- **Body:** *Inter Tight* 16/26.
- **Data / figure labels:** *JetBrains Mono* 12 px uppercase for "FIG. 03 — CHILL", batch IDs and demo IDs.

### Texture, imagery, iconography
- Paper grain at 3% opacity (SVG feTurbulence baked to a 256 px tile), a faint 8 mm dot grid, and an occasional
  ruled margin line in `#C9BFA8`.
- **Line weights:** construction 0.75 px, sketch 1.25 px, inked 1.75 px, emphasis 2.5 px. Use variable-width SVG paths
  (two offset strokes) for a real pen feel.
- Icons are hand-drawn 24 px glyphs for the seven verbs, each with an arrow vocabulary: → flows, ⟲ returns
  (returnable glass), ⊙ records.
- Photos appear "taped in" (flat, no fake tape texture: a 1 px graphite frame with a Kalam caption beneath).

### Grid
Notebook grid: 12 columns, a **left margin column** (`grid-column: 1 / 3`) reserved for annotations on desktop and
a 24 px dot-grid baseline. On mobile, annotations move inline below the drawing.

## 4. Motion and interaction language

- **Draw-on reveals:** SVG paths animate `stroke-dashoffset` over 1200 ms with `--ease-out` (`cubic-bezier(.16,1,.3,1)`),
  construction lines first (0–400 ms) and then inked lines (300–1200 ms), so the drawing appears to be *thought* and then *committed*.
- **Scroll-scrubbed drawing** in chapters 03 and 06: line progress = scroll progress (`scrub: 1`), so the pen follows the reader.
- **Annotations** pop in 200 ms after their subject, fade plus a 4 px rise, rotation fixed.
- **Hover:** links get a hand-drawn underline that redraws left → right (240 ms). Primary buttons get a sketched
  rectangle that draws around the label (600 ms), consistent with the brand's "frame draws itself" rule.
- **Cursor states:** default = small graphite dot (8 px) · link = dot grows to 28 px ring with pencil texture ·
  drag (360) = ring with ⟲ glyph · view = "zoom" loupe ring · text = thin caret · disabled = dashed ring.
- **Page transitions:** a page-turn wipe (clip-path diagonal, 600 ms `--ease-inout`). No 3D page curl, which looks cheap.

## 5. The hero bottle and the four variants

- The **real render** (later the 360 sequence) floats on notebook paper with its contact shadow. Around it, a
  **construction drawing of the same bottle** (centre line, ellipses for the neck and base, dimension arrows) draws
  itself at 30% opacity. The finished product sits on top of the sketch, so the effect reads as "designed with
  intention".
- Pointer tilt ±8° (brand). The construction ellipses re-draw subtly to match the tilt, which gives a convincing
  parallax.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards scroll and drag drive the frame
  index, and the sketched centre line stays fixed as a turntable axis.

| Variant | Sketch world |
|---|---|
| **MASTER 26** | Forest-green ink. A botanical study page with leaf sketches *not* named as specific herbs until the herb list is approved, a forest-canopy cross-section and the note "Herb formula: MasterHerb™ (pending)". |
| **ROOT 14** | Red ink. A soil-section drawing (topsoil, root lines) and a free-grazing route sketched as a dotted loop on a field plan. |
| **BASE 3** | Amber ink. A golden-hour village elevation with long hatched shadows. "The everyday foundation." in Kalam. |
| **ESSENTIAL** | Warm-grey ink. Almost nothing: the bottle's elevation, plan and section as a technical sheet. It is the quietest page. |

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Paper, the real bottle, the construction drawing around it, and a Fraunces headline "Milk from the source." One Kalam note points to the cap: "every cap has a colour — and a reason". |
| 02 | Bottle becomes the story | Six words written into the margin one by one, each linked by a drawn leader line to the bottle. The background transitions paper → forest, and lines invert to milk-white chalk. |
| 03 | Cow → bottle | **Signature chapter.** A long horizontal sketchbook spread with seven stations drawn in sequence, connected by one continuous milk line drawn on scroll. Stations carry "FIG. 01–07" labels. Mobile: a vertical spread. |
| 04 | Where it begins | Real photos "taped in" with Kalam captions. Missing photos become labelled line drawings plus an AssetSlot naming the shot. |
| 05 | Breeds | A field-study page per breed: contour drawing, region note (from `breeds[]`) and a status note "client-stated · approval pending". A photo replaces the drawing when supplied. |
| 06 | Traceability | A flowchart drawn on forest "blackboard" in chalk lines. Nodes are hand-drawn boxes and the pulse is a moving chalk dot. Panel copy comes from `traceNodes[]`. Label: "Illustrative journey — not live data". |
| 07 | Quality | An instrument plate: three hairline instrument drawings (thermometer, fat/SNF gauge, a 16-square test card), with the parameter list handwritten-style but set in Inter Tight for legibility. Readouts say "— pending lab confirmation". |
| 08 | Four milks | Each variant gets a notebook spread in its ink colour (section 5). The info panel is clean typography on the right page. |
| 09 | Milk as material | Contour lines of a milk ribbon (topographic hatching) flowing on canvas. Reduced motion: a static drawing. |
| 10 | Heritage | A big Fraunces italic statement and a dignified cow study (life-drawing style, profile and three-quarter), with gold hairline rules. |
| 11 | Technology | A blueprint inversion: forest-blue paper, chalk-white lines, seven verbs as a system diagram. "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | A drawn bilona churn (an exploded view of the vessel and churning staff, with no process claims beyond "bilona"), the real jar and three grades linked by arrows to their milks. |
| 13 | Trace your milk | A ledger page: enter the demo Bottle ID and each step is "written in" line by line, with a DEMO stamp drawn as a rubber stamp outline. |
| 14 | Story | Timeline as a dated notebook. Production shows verified entries only. |
| 15 | Final CTA | The construction drawing collapses into the real bottle, and the page ends on clean paper with two underlined buttons. |

**Inner pages:** /milk is a contact sheet of four spreads · /milk/[variant] has a sketched elevation header, then the
Bottle360Viewer on clean paper with a drawn turntable axis and a fact table · /ghee has the bilona exploded view ·
/origin is a field journal (breeds, feed, rotation) · /trace is the full flowchart plus a ledger demo ·
/technology is the blueprint system diagram with one figure per verb · /about is the notebook timeline (no supporters listed until written evidence is on file, KB Q34) · /reserve is a clean form whose only sketch is the returnable-glass loop ⟲.

## 7. Component variants

`SketchPath` (dash-offset draw, two-stroke pen) · `ConstructionBottle` (SVG overlay matched to render bounds) ·
`MarginNote` (Kalam, rotation, leader line) · `FigureLabel` · `TapedPhoto` · `ChalkboardScene` (inverted palette) ·
`JourneyTrack.sketchbook` · `TraceMap.flowchart` · `QualityPanel.instrumentPlate` · `TraceYourMilk.ledger` ·
`DemoStamp` · `SketchButton` (frame draws on hover) · `SketchCursor` · `AssetSlot.drawing` (a sketch of the
missing shot plus a file-name request).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Notebook palette, line weights, Kalam rules | `tokens.sketch.ts`, type specimen, line-weight sheet | Kalam ≤ 12 words per note; contrast ≥ 4.5:1 for every annotation | — | 2 |
| 2 | Grid & shell | Margin-column grid, nav, cursor | `SketchCursor` 6 states, paper grain, page-turn transition | Grain ≤ 8 KB; transition 600 ms; touch skips the cursor | — | 3 |
| 3 | Hero | Bottle and construction drawing | `ConstructionBottle`, hero | Overlay aligns within 2 px at all breakpoints; LCP ≤ 2.5 s | Render (have) | 4 |
| 4 | Bottle → story | Margin words with leader lines | Pinned 300vh scene | Lines recompute on resize; static list in reduced motion | — | 3 |
| 5 | Cow → bottle | Sketchbook journey | 7 station illustrations, continuous scrubbed line | Line continuity with no gaps; mobile vertical | Illustration art direction sign-off | 8 |
| 6 | Origin / farm | Taped photos and drawn fallbacks | `TapedPhoto`, `AssetSlot.drawing` | No stock; each missing photo named | Photos B1, B2, B4 | 3 |
| 7 | Breeds | Field-study pages | 6 contour drawings, explorer | Status chips visible; drawings approved for breed accuracy (hump, dewlap, horns) | Breed photos B3 as drawing reference | 6 |
| 8 | Trace map | Chalk flowchart | `TraceMap.flowchart`, side panel | Nodes keyboard accessible; "Illustrative" label | — | 4 |
| 9 | Quality | Instrument plate | 3 instrument SVGs, 16-param list | No unconfirmed values | Photo B6 | 3 |
| 10 | Four worlds + 360 | Four ink spreads and the viewer | 4 spreads, viewer with turntable axis | Frame-index driving works with test frames; ink colour contrast ≥ 3:1 for lines | 360 (A) | 7 |
| 11 | Heritage | Statement and cow study | Cow life-drawing SVG | Respectful, anatomically correct, culturally approved | — | 3 |
| 12 | Technology | Blueprint system | Inverted scene, 7 figures | Public vocabulary only | — | 3 |
| 13 | Ghee | Bilona exploded view | Churn drawing, grade links | No process/health claims beyond approved wording | Jar photo, label | 3 |
| 14 | Trace-your-milk | Ledger demo | `TraceYourMilk.ledger`, `DemoStamp` | `isDemo` on each line; works without JS (SSR list) | — | 4 |
| 15 | /milk, /milk/[variant] | Product pages | 2 templates | Pending prices styled; viewer clean | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` only | Photos B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only in production | Archive B11 | 4 |
| 18 | Mobile | Inline annotations, vertical journeys | Mobile layouts | Annotations never overlap the drawings at 360 px | — | 4 |
| 19 | A11y + reduced motion | Drawings fully described | `<title>/<desc>` on SVGs, static states | WCAG 2.2 AA; drawings complete instantly in reduced motion | — | 3 |
| 20 | Perf, QA, handover | Ship | SVGO-optimised art, report | Total SVG ≤ 400 KB; LCP ≤ 2.5 s; CLS < 0.05 | All | 4 |

**Total:** about 80 days (illustration-heavy). As an *accent* inside a Luxury/Editorial site (chapters 03, 06, 11,
/technology, /trace) it takes about 25 days.

## 9. Assets needed from DESIGO®

- 360 sequences, wordmark vector and photography, as standard.
- **Reference photos for every breed and process step**, because drawings must be traced from DESIGO®'s real cows and
  facility to stay honest, not invented.
- Bottle technical dimensions (height, diameter, neck) for the construction drawing. Approximate values are fine but
  must be marked "illustrative".
- Photos or drawings of the actual bilona vessel used.
- Optional: real founder sketches or handwritten notes. A genuine margin note in a founder's hand is worth more than any font.

## 10. Performance, accessibility and mobile

- Everything is SVG. Animate `stroke-dashoffset` only (compositor friendly), and pre-compute path lengths at build time.
- Pause scrubbed scenes off-screen. Paper grain is a single tiled image, not a live filter.
- Every illustrative SVG gets `role="img"` with a `<title>`, and diagrams have a text equivalent list (the trace chain
  as an ordered list).
- Kalam is decorative only. Core information is always repeated in Inter Tight.
- Mobile: the margin column collapses, notes sit under figures, and the horizontal journey becomes a vertical
  sketchbook with the line drawn downward.
- Reduced motion: drawings appear complete with no draw-on.

## 11. Risks and premium guardrails

**Risks:** it looks unfinished or "start-up whiteboard"; handwriting overload; diagrams over-explain internal system detail
(exposing operating detail); drawings of cows that are anatomically wrong.

**Premium guardrails**
1. The bottle and wordmark are always the finished, rendered objects. Sketch surrounds them and never replaces them.
2. One drawing system: the same pen, weights, arrowheads and annotation rotation range across the site.
3. Handwriting is for notes, never for headlines, prices or body copy.
4. No fake tape, coffee stains, crumpled paper or doodle clip-art. The texture budget is grain plus a dot grid.
5. Diagrams use the **public vocabulary** only (ORIGIN … DELIVER) and never internal names like Locus or barrel-ID schemas.
6. Cows are drawn by a skilled illustrator from DESIGO® reference photos, with dignity and anatomical correctness.
7. Generous white space: a maximum of 3 annotations per viewport.
8. Every figure that implies data carries "illustrative" or "pending" where applicable.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added it with tokens from the notebook palette, the four variant ink colours, Kalam annotation role, all 14 components, motion tokens and 11 image prompts. Fonts already OFL. Body: "RTCOM internals" reworded to "internal system detail". Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | forest "inked" layer: headlines, primary button frame and fill, final ink lines | 10.9:1 vs bg. Passes AAA for text. |
| Primary ink | --c-on-primary | `#F4EFE3` | paper text on forest fills | 10.9:1 on primary. |
| Secondary | --c-secondary | `#1E7A68` | DESIGO-green fountain pen: margin notes, arrows, links | 4.5:1 vs bg. Passes 4.5:1, so notes can be green text. |
| Accent | --c-accent | `#C8A96B` | gold highlighter mark (max 1 per viewport), focus halo | 2.0:1 vs bg. Never text; the focus ring is forest 2 px with a gold 3 px halo. |
| Background | --c-bg | `#F4EFE3` | notebook paper |  |
| Surface | --c-surface | `#EAE2D0` | facing page, inset panels, info blocks |  |
| Text | --c-text | `#1E211F` | ink: body text and final ink lines | 14.2:1 on bg · 12.6:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#3A3D3B` | graphite: captions, figure labels, primary sketch line | 9.6:1 on bg · 8.5:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#C9BFA8` | ruled margin line, dividers (construction lines use graphite-light #9A9C97) | Decorative; construction line #9A9C97 is 2.6:1 and decorative only. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#8C6A43` / `#B3202A` | green tick = recorded step; earth dotted underline = pending; red rubber-stamp outline = DEMO | DEMO red stamp text is 5.8:1 on paper; pending earth underline carries no text of its own. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | forest-green ink (`#1F5C45`): botanical study page of generic leaves, canopy cross-section, "Herb formula: MasterHerb™ (pending)" |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red ink (`#B3202A`): soil-section drawing and a dotted free-grazing loop on a field plan |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber ink darkened to `#C77F0F` for line legibility: golden-hour village elevation with hatched shadows |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | warm-grey ink (`#8E7A5C`): the bottle's elevation, plan and section as a quiet technical sheet |

**Dark-chapter inversion:** Chalkboard and blueprint chapters (06, 11, 02 end): bg → forest `#0B3B32`, surface → `#0F4A3F`, text and all lines → chalk `#F4EFE3`, muted → `#C9D3CD`, primary button → chalk frame with forest label on hover fill, accent stays gold, signal `#7FE0B8` only as the light-table glow in ch. 11.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 72–144, SOFT 50, wght 350 | clamp(4rem, 9vw, 9rem) | 0.95 | -0.025em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 36–72, SOFT 50, wght 350–400, italic | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.05 / 1.15 | -0.015em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–500 | clamp(1rem, 0.95rem + 0.2vw, 1.0625rem) | 1.625 (26 px) | 0 | Sentence |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 600 | 0.72rem | 1.2 | +0.18em | UPPER |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400–500 | 0.75rem (12 px) figure labels · 0.8125rem IDs | 1.4 | +0.08em | UPPER ("FIG. 03 — CHILL") |
| Devanagari (optional) | Kalam | `@fontsource/kalam` (Google Fonts: Kalam) | 300, 400, 700 static (use 400) | 1.125–1.375rem (18–22 px) | 1.35 | 0 | n/a |
| Annotation (style-specific) | Kalam | `@fontsource/kalam` (Google Fonts: Kalam) | 400, 700 static | clamp(1.125rem, 1rem + 0.4vw, 1.375rem) | 1.3 | 0 | Sentence; ≤ 12 words; rotate −1.5° to +1.5° |

Licence: Fraunces, Inter Tight, JetBrains Mono and Kalam (Indian Type Foundry) are all SIL OFL 1.1; self-hosted via @fontsource.
Pairing: Fraunces is the printed page, Kalam the hand that annotates it (Latin + Devanagari in one family), Inter Tight and JetBrains Mono keep data legible.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw outer margin, max-width 1440 px; columns 1–2 are the annotation margin on desktop (`grid-column: 1 / 3`); content measure ≤ 62ch. Mobile: annotations inline below their figure.
- **Spacing:** 24 px dot-grid baseline: 4 · 8 · 12 · 24 · 48 · 72 · 96 · 144. Max 3 annotations per viewport.
- **Radius:** sm 0 · md 2px · lg 2px (brand `--r-1`); hand-drawn frames are SVG paths, not CSS radius.
- **Border:** SVG pen weights: construction 0.75 px graphite-light, sketch 1.25 px graphite, inked 1.75 px forest, emphasis 2.5 px. CSS borders 1 px `#3A3D3B` only on inputs.
- **Shadow / elevation:** None on UI (flat paper). The bottle keeps its contact shadow plus soft ambient drop shadow.
- **Texture / overlay:** Paper grain 3% (256 px baked SVG-turbulence tile, ≤ 8 KB), 8 mm dot grid in `#C9BFA8` at 35%, one ruled margin line. No tape, stains or crumples.

### 12.4 Components
All interactive components: `focus-visible` = 2 px forest `#0B3B32` hand-drawn rectangle (SVG) + 3 px gold `#C8A96B` halo; native outline fallback; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Inter Tight 600 caps forest label + arrow `→`, 48 px tall, padding 12×20, no fill at rest, 1.75 px forest sketched frame already drawn. Hover: frame redraws left→right (600 ms) and fills forest, label turns paper `#F4EFE3`, arrow travels 8 px. Active: fill darkens to `#0A2A20`. Disabled: dashed graphite-light construction frame, muted label. Loading: a pencil scribble line loops under the label (1200 ms dash cycle), label kept.
- **Secondary button**: Underlined label + arrow, no frame at rest; 1.25 px graphite underline. Hover: the sketched rectangle draws around the label (600 ms, the brand "frame draws itself" rule). Active: frame inks to forest. Disabled / loading as primary.
- **Text / arrow link**: Inter Tight 500 green `#1E7A68` with a hand-drawn SVG underline (1.25 px, slight wobble). Hover: underline redraws left → right in 240 ms, arrow moves 6 px. Active: underline 2.5 px. Disabled: graphite-light, no underline.
- **Icon button** (incl. menu): 44×44 hit area, 24 px hand-drawn glyph (1.25 px). Menu = two sketched lines that redraw into a sketched × (400 ms). Hover: a sketched circle draws around the glyph. Active: circle inks. `aria-label` on every one.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: Desktop: 72 px transparent bar on paper with a 0.75 px graphite-light rule beneath, Inter Tight caps links; active link has a hand-drawn underline. Mobile: full-screen paper sheet with Fraunces 32 px links and a Kalam note "choose a chapter"; opens with the page-turn diagonal clip-path (600 ms, fade in reduced motion). Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = 8 px graphite dot · hover = 28 px pencil-textured ring · ROTATE = ring with ⟲ glyph · EXPLORE = ring with a drawn → arrow · ENTER = ring with a short underline stroke under "ENTER" (Inter Tight 9 px) · VIEW = loupe ring · TRACE = ring with ⊙ (records) glyph. Text = thin caret, disabled = dashed ring. Touch: native, no custom cursor; tap draws a 200 ms ring at the touch point.
- **Card / panel / info block**: Surface `#EAE2D0` facing-page panel, no border radius, a 1.25 px graphite hand-drawn frame, 24 px padding, figure label ("FIG. 04") top-left in mono. Taped photos: 1 px graphite frame + Kalam caption beneath. Hover (if clickable): frame inks to forest (240 ms).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Mono 11 px caps inside a hand-drawn pill outline (SVG), 24 px tall. Verified: green outline + ✓. Pending verification: earth `#8C6A43` dotted underline on the claim text plus a chip "PENDING VERIFICATION". DEMO: rubber-stamp outline in ROOT red `#B3202A`, text "DEMO · NOT LIVE DATA", rotated −2°, drawn in (400 ms). States: static after reveal.
- **Input + form field** (Trace-your-milk bottle ID): Mono caps label "BOTTLE ID" above, the field is a ledger line: no box, a 1.25 px graphite baseline, 56 px tall, JetBrains Mono 20 px value, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: baseline inks to forest 2.5 px + ring token. Error: red `#B3202A` underline + text message. Loading: line "writes in" left → right. Works without JS (SSR list).
- **Divider / ornament**: A single hand-drawn rule with a small ⟲ or → terminal, or a construction line with tick marks. Max one per section.
- **Section header** (chapter number + title pattern): Mono figure number "FIG. 03" + Kalam margin note on the left, Fraunces H2 title on the right; the underline draws on reveal (1200 ms).
- **Product info block** (variant name, code, price-pending, size, descriptors): Clean type on the right-hand page: Fraunces variant name, mono code ("V1+"), size and price in Inter Tight with the earth dotted pending underline and a pending chip, descriptors as a list with status; one Kalam note max ("price pending" is never handwritten).
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Real render on notebook paper with contact shadow; around it a 30% construction drawing (centre line, neck and base ellipses, dimension arrows with no numbers unless supplied, marked "illustrative"). Float ±10 px / 6 s, tilt ±8°, ellipses re-draw to match tilt; before 360 frames ±25° + sheen; with frames the sketched centre line stays as the turntable axis.
- **Trace node / timeline step**: Hand-drawn box per node linked by one continuous milk line drawn on scroll (`scrub: 1`); active node = box inks forest and a chalk/ink dot travels; label Inter Tight, verb in mono, demo values with the DEMO stamp. Ordered-list text equivalent in the DOM.

### 12.5 Iconography & illustration
- **Icons:** 24 px hand-drawn glyphs, 1.25 px stroke, round caps, slightly open joins; arrow vocabulary → flows, ⟲ returns (returnable glass), ⊙ records.
- **Illustration:** SVG line art with two-stroke variable width; construction lines first, then ink. Cows and process steps traced from DESIGO® reference photos by an illustrator (see doc E-set and D line set).
- **Photo treatment:** "Taped in" flat: 1 px graphite frame, Kalam caption, natural grade, no filters and no fake tape.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | draw-on, reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page-turn wipe |
| `--dur-micro` | `240ms` | link underline redraw |
| `--dur-reveal` | `600ms` | button frame draw, annotation pop (+4 px rise) |
| `--dur-scene` | `1200ms` | full drawing draw-on (construction 0–400 ms, ink 300–1200 ms) |
| `--delay-note` | `200ms` | annotation after its subject |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** draw-on via `stroke-dashoffset` (path lengths precomputed); construction drawing collapsing into the real bottle at the final CTA.
- **Scroll:** chapters 03 and 06 scrub line progress to scroll (`scrub: 1`); scenes pause off-screen.
- **Reduced motion:** drawings appear complete, no scrub, page-turn becomes fade, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *single-weight hand-drawn ink and graphite line drawing on warm notebook paper #F4EFE3, faint light-graphite construction lines, sparing DESIGO green #1E7A68 fountain-pen accents, light hatching only, engineer's sketchbook and patent-drawing clarity, generous white space, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/conceptual-sketch/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-landscape.png` | 3200×2000 (16:10) | no | Warm notebook paper with a faint 8 mm dot grid, a light graphite horizon sketch of the Thar desert edge with two khejri trees along the bottom edge, a few loose construction lines and ellipses, the centre left completely empty | numbers, dimension figures, handwriting, tape, coffee stains, crumpled paper, colour fill (+ base negative) | Ch. 01 hero backdrop |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Same notebook-paper hero as a tall portrait: horizon sketch in the lowest fifth, one khejri tree, faint dot grid, empty centre | numbers, handwriting, tape, stains (+ base negative) | Mobile hero |
| 3 | `worlds/master-26.png` | 3200×2000 (16:10) | no | Botanical study page in forest-green ink #1F5C45: generic leaf and stem sketches and a forest-canopy cross-section drawing arranged around a large empty centre | named herb labels, botanical captions, colour wash (+ base negative) | Ch. 08 / /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 (16:10) | no | Soil-section study in red ink #B3202A: topsoil layers, fine root lines and a dotted looping grazing route on a field plan, empty centre | map labels, colour wash (+ base negative) | Ch. 08 / /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 (16:10) | no | Village street elevation at golden hour drawn in amber ink #C77F0F: mud-plastered houses, a neem tree, long hatched shadows, empty centre | people's faces, shop signs, colour wash (+ base negative) | Ch. 08 / /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 (16:10) | no | Almost blank technical drawing sheet in warm-grey ink #8E7A5C: a thin border frame, centre lines and a few empty dimension arrows, enormous empty centre | numbers, dimension figures, title block text, bottle outline (+ base negative) | Ch. 08 / /milk/essential |
| 7 | `journey/sketchbook-spread.png` | 4800×1600 (3:1) | yes | Long sketchbook spread of seven stations drawn in sequence: a zebu cow with hump and dewlap grazing, a small farm shed with a khejri tree, a steel milk can, a round test card with sixteen dots, a stainless-steel chiller, a small dairy plant, a doorstep at dawn, linked by one continuous flowing line, on transparent background | FIG numbers, captions, arrows with text, shading (+ base negative) | Ch. 03 cow → bottle, /trace |
| 8 | `trace/chalk-flowchart.png` | 3200×2000 (16:10) | no | Chalk line drawing on a deep forest green blackboard #0B3B32: eight hand-drawn empty boxes connected by one chalk line in a gentle zigzag, a few construction ticks, lots of space | writing in boxes, chalk text, equations, smudged clutter (+ base negative) | Ch. 06 traceability backdrop |
| 9 | `textures/notebook-paper.png` | 2400×2400 seamless | no | Seamless tileable warm notebook paper #F4EFE3 with a very faint 8 mm dot grid and subtle paper fibre, flat scan lighting | lines of handwriting, stains, folds, shadows (+ base negative) | Global paper texture (baked to 256 px tile) |
| 10 | `ghee/bilona-exploded.png` | 1600×2000 (4:5) | yes | Exploded-view line drawing of a traditional wooden bilona churn: earthen pot, churning staff and rope separated along a vertical axis with thin leader lines, respectful and precise, on transparent background | callout text, numbers, people, ghee jar (+ base negative) | Ch. 12 ghee, /ghee |
| 11 | `heritage/cow-study.png` | 1600×2000 (4:5) | yes | Life-drawing study of a Tharparkar zebu cow, white-grey coat suggested by sparse hatching, hump, dewlap and lyre-shaped horns accurate, three-quarter view facing left, calm and dignified, on transparent background | cartoon, exaggerated features, adornment, religious marks (+ base negative) | Ch. 10 heritage |

Breed field studies reuse the line-art set `breeds/line/*.png` (brief section D); illustrators trace final art from DESIGO® reference photos, so generated drawings are drafts for art direction only.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/14_conceptual-sketch.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/conceptual-sketch/
- [ ] Construction overlay aligns to the bottle render within 2 px at all breakpoints
- [ ] Kalam never used for headlines, prices or > 12 words; max 3 annotations per viewport
