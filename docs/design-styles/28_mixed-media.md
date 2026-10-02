# 28 · Mixed Media — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Mixed Media combines different *materials of representation* in one composition: photography, hand drawing, paint, paper, type, 3D renders, data graphics and film. The tension between them is the point. A photo of a cow beside a pencil annotation beside a precise data line tells you "this is real, this was observed, this was measured". Unlike Collage (32), which is about cut-and-paste layering of found images, Mixed Media is about **different techniques describing the same subject**.

Reference points:
1. **Robert Rauschenberg's "combines"**: paint, photographs and objects on one surface.
2. **Field-notebook and design-research layouts** (Patagonia's environmental reports, Monocle features): photo plus hand annotation plus diagram.
3. **Apple's product pages for Vision Pro / iPhone camera**: a real photograph, a 3D render and a technical diagram in one scroll, each in its own register.

## 2. Fit for DESIGO® — score 4 / 5

**Why it fits.** DESIGO®'s whole proposition is that milk is **observed, recorded and measured** along its journey. Mixed Media can show that literally: a real **photograph** (the farm exists), a **hand-drawn annotation** (someone was there), a **data line** (it was recorded), the **3D bottle** (the product) and **paper** (heritage). It joins heritage and technology without choosing one, which is exactly the brief: "Indian agricultural heritage × interactive 3D exhibition".

**Where it can fight.** Too many techniques per screen turn into noise and undercut the "bottle is the hero" principle. Mixed Media needs a strict rulebook: max three media per viewport, one dominant.

**Recommendation.** A strong whole-site candidate when run with discipline, and an excellent choice for Chapters 03 (cow → bottle), 04 (farm), 06 (trace) and /origin even if another style leads.

## 3. Art direction

### Palette (brand-native, with "media colours")
| Token | Hex | Role |
|---|---|---|
| `--mm-milk` | `#F7F4EC` | Default ground |
| `--mm-paper` | `#EDE4D0` | Paper medium (heritage, notes) |
| `--mm-forest` | `#0B3B32` | Dark ground, type |
| `--mm-green` | `#1E7A68` | Links, data lines |
| `--mm-earth` | `#8C6A43` | Pencil/sepia annotation ink |
| `--mm-gold` | `#C8A96B` | Rules, heritage |
| `--mm-graphite` | `#4B4E4C` | Graphite drawing lines |
| `--mm-signal` | `#7FE0B8` | Data glow on dark only |
| `--mm-ink` | `#1E211F` | Body text |

Each **medium has a colour rule**: photographs are natural; drawings are graphite `#4B4E4C` or sepia `#8C6A43`; data is green `#1E7A68` (or signal on dark); type is ink or milk. A viewer learns the code: green means recorded, sepia means observed.

### Typography
- Display: **Fraunces** (opsz 144, SOFT 50) for headlines.
- Text and UI: **Inter Tight**.
- Annotation: **Caveat** 500 (OFL) in sepia, for field notes. Long term, replace it with a font made from the founder's or a farm team member's real handwriting.
- Data: **JetBrains Mono** in green for IDs, times, quantities ("12.0 kg · 05:42" demo only).
- Devanagari: **Noto Serif Devanagari** for occasional heritage words.

### Texture and media
- Photo: real DESIGO® images, natural grade, sharp-edged rectangles (no torn edges; that is Collage).
- Drawing: SVG line art at 1.25px graphite (cows, churn, bottle cross-section) that draws itself.
- Paper: a scanned cotton-paper texture at 100% only inside "paper" panels.
- Data: hairline charts, coordinate ticks, dashed measurement lines with arrowheads.
- 3D: the bottle (renders → 360 frames → GLB later).
- Film: optional 6–10s silent loops (milk pouring, hands at the bilona) when the client can supply them.

### Iconography
Two families: drawn (graphite, hand-wobble ≤ 0.5px) for heritage and nature, and technical (1.5px, square caps) for data and process. They are never mixed in one row.

### Grid
12 columns, 5vw margins, 24px gutters, plus an **annotation layer**: a free-positioned layer whose anchors are tied to elements (e.g. "this cow" → arrow to the photo). Each annotation's anchor is defined in data, so it reflows on mobile (it collapses to a numbered footnote under the image).

## 4. Motion and interaction language
- **Rule: each medium has its own motion.** Photos parallax (0.9–1.1×). Drawings draw (stroke-dashoffset, 900ms, `cubic-bezier(.33,0,.15,1)`). Data counts and ticks (600ms, `cubic-bezier(.16,1,.3,1)`). The bottle floats (6s cycle, ±10px). Type rises (600ms, 40ms stagger).
- **Cursor.** The default is the DESIGO® ring (12px). Over a photo it becomes a 1px crosshair with live coordinates in mono (e.g. `26.24°N`, *illustrative*), so the photo "becomes a location". Over a drawing it becomes a pencil tip. Over data, a readout tooltip. Over the bottle, `DRAG ⟲`.
- **Hover.** Annotations reveal on hover/focus over their anchored object (desktop). On touch they are always visible as numbered pins.
- **Transitions.** Medium-to-medium handoffs: a photograph "traces" into a drawing (opacity crossfade while the SVG line draws over it, 1200ms). This is the signature move.

### The bottle
The bottle is the only "3D medium". It floats with a contact shadow on milk ground, and around it appear **graphite construction lines** (centre axis, height dimension 1 L *pending*, the cap circle) and a **green data callout** for the variant code. Tilt ±8°. In the 360 viewer, dimension lines stay fixed while the bottle turns: the technical drawing holds still and the object moves.

## 5. Variant worlds

Each variant gets a different **dominant medium** while sharing the system:

| Variant | Dominant medium | Ground | Detail |
|---|---|---|---|
| MASTER 26 (V1+) | Botanical drawing: herb sketches (26 *pending*) around the bottle | `#D9E8DF` with `#1F5C45` | Graphite herbs, the green data callout "V1+" |
| ROOT 14 (V1) | Photograph: red earth and grazing, full-bleed | `#F3D9D6` panel over the photo, `#B3202A` cap echo | Sepia annotations of grazing ground |
| BASE 3 (V2) | Data: a calm diagram of the everyday routine (collection → doorstep) | `#F8E4C2`, lines `#5A3304` | Hairline timeline with demo times |
| ESSENTIAL (V3) | Type and paper: almost nothing but the bottle and words | `#F4EDE2` | "Simple, balanced, honest." in Fraunces |

## 6. Page-by-page treatment

1. **Hero.** Milk ground, the bottle with graphite construction lines drawing in, "Milk from the source." in Fraunces, one sepia note: "from indigenous Indian cows" with an arrow to the cap.
2. **Bottle becomes the story.** Six words orbit; each, when active, brings its medium: ORIGIN (photo of farm), BREED (drawing), FEED (herb sketch), FARM (map), QUALITY (data), TRACE (QR line).
3. **Cow to bottle.** **Signature chapter.** Seven stations, each a photo that traces into a drawing as it passes the centre, with a mono data stamp beneath (demo). The milk line is a continuous green data line.
4. **Farm.** Large photos with sepia field annotations ("free grazing", "breed rotation", *pending*).
5. **Breeds.** A breed plate: photo portrait (left), graphite profile drawing (right), region map tick (mono). Pending breeds show "awaiting confirmation".
6. **Traceability.** A paper map with drawn terrain, a green data path, and photo thumbnails pinned at nodes. DEMO label.
7. **Quality.** Data-dominant: 16 parameters as a clean table with a photograph of the paper test card (when supplied) annotated by arrows. Values pending.
8. **Four milks.** §5 worlds.
9. **Milk as material.** A slow-motion film loop of milk pouring (client-supplied), overlaid by a single graphite flow line. Canvas ribbon fallback.
10. **Heritage.** Paper medium dominant: line art of cow and churn, Fraunces italic statement, a gold rule.
11. **Technology.** Dark ground. Data medium dominant. Seven verbs as a technical diagram with drawn icons.
12. **Ghee.** Photograph of the bilona plus a drawing of the churn's motion (arrows) plus the jar. Three grades with their source milk.
13. **Trace your milk.** A form whose result is assembled from media: a farm photo slot, a drawn route and a data timeline, all labelled DEMO.
14. **Story.** Archive photographs, scanned documents, and dates in mono. Verified 2019 only in production.
15. **Final CTA.** All media fade out except the bottle and one line: "Know where your milk comes from."

### Inner pages
- **/milk**: four columns, each in its dominant medium.
- **/milk/[variant]**: 360 viewer with dimension lines, the medium story beneath, facts table.
- **/ghee**: process told as photo → drawing → data (time and temperature fields *pending*).
- **/origin**: field-notebook page (photos plus notes plus maps). The best page of this style.
- **/trace**: full map.
- **/technology**: seven-verb diagram, each verb expanding into photo + drawing + data.
- **/about**: archival scans plus timeline.
- **/reserve**: clean form on milk ground; a small drawn delivery route sketch.

## 7. Component variants
`MediaFrame` (photo with anchor points) · `Annotation` (sepia note + arrow, anchored) · `TraceDraw` (photo → line transition) · `DataStamp` (mono readout, demo-aware) · `ConstructionBottle` (bottle + dimension lines) · `FieldMap` (TraceMap) · `BreedPlate` · `MediaJourney` (JourneyTrack) · `PaperPanel` · `CursorModes` (crosshair / pencil / readout) · `AssetSlot` as a dashed photo frame with a sepia note: "Photo pending — cows grazing (B2)".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Media colour code and type | Tokens, specimen, "media rulebook" page | ≤ 3 media per viewport rule documented; contrast AA | Brand colours | 2 |
| 2 | Shell | Grid + annotation layer, cursor modes | Shell, `Annotation`, `CursorModes` | Annotations reflow to footnotes < 768px | none | 4 |
| 3 | Hero and bottle | Construction-line bottle | Hero | Lines aligned to bottle within 1px at all sizes | Renders | 3 |
| 4 | Bottle → story | Medium per word | Chapter 02 | Medium swap ≤ 600ms; one at a time | Photos B1, B5 | 3 |
| 5 | Cow → bottle | Photo → drawing journey | `MediaJourney`, `TraceDraw` | 7 stations; drawings derived from the real photos | B4, B8 + line art | 5 |
| 6 | Origin / farm | Field notes on photos | Chapter 04 | Notes only use approved copy | B1, B2 | 3 |
| 7 | Breeds | Breed plates | `BreedPlate` | Pending breeds labelled | B3 | 3 |
| 8 | Trace map | Paper field map | `FieldMap` | Keyboard nodes; DEMO | traceNodes, B7 | 4 |
| 9 | Quality | Data table + test-card photo | Chapter 07 | No invented values | B6 | 2 |
| 10 | Four worlds + 360 | Dominant medium per variant | Chapter 08 | Dimension lines fixed during spin | A, B5 | 5 |
| 11 | Heritage | Paper medium | Chapter 10 | Line art original | Line art | 2 |
| 12 | Technology | Data diagram | Chapter 11 | Public vocabulary | none | 3 |
| 13 | Ghee | Photo + drawing + jar | Chapter 12 | Prices pending | Ghee photos, jar | 3 |
| 14 | Trace demo | Assembled-media result | Chapter 13 | DEMO on every medium | demoProvider | 3 |
| 15 | /milk pages | Product pages | 5 routes | Viewer + facts | A | 4 |
| 16 | /origin, /trace, /technology | Field-notebook pages | 3 routes | Origin is the flagship | B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified milestones only | B10, B11 | 3 |
| 18 | Mobile | Footnote annotations, vertical journeys | Mobile pass | No overlapping media at 360px | none | 3 |
| 19 | A11y + reduced motion | Static media | Drawings complete, no trace transition | Annotations reachable by keyboard and screen reader | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | Image weight ≤ 1.2 MB above the fold total; LCP < 2.5s | all | 3 |

Total ≈ 65 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- The full photo list B1–B11, with emphasis on **paired shots** (a photo plus the same subject from a clean side angle so we can draw it).
- A photograph of the **16-point paper test card** (no third-party logo).
- Optional silent film loops: milk pour, bilona churning, bottle filling (4K, 10s).
- A handwriting sample from a founder or farmer (consent) for a custom annotation font.

## 10. Performance, accessibility and mobile
- Lazy-load every non-hero medium. SVG drawings are optimised (SVGO), ≤ 30 KB each.
- Film loops: muted, `playsinline`, poster frame, paused off-screen, never autoplay on Save-Data.
- Annotations are real text, not baked into images.
- Reduced motion: no tracing, drawings appear complete, no parallax.
- Mobile: one medium per screen, annotations as numbered footnotes, dimension lines simplified to the height line only.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Max three media per viewport, one dominant.
2. Every medium has a fixed colour and motion rule. No improvisation per page.
3. Drawings are traced from real DESIGO® photos, never from stock.
4. Handwritten annotations use approved copy only, and pending claims keep their dotted underline even in sepia.
5. Data stamps on demo content always carry "DEMO".
6. Generous milk-white space around the bottle. The product is never annotated over its label.
7. No torn paper, tape or stickers (that is Collage or Scrapbook, which cheapen this direction).

**Risks**: clutter, inconsistency between pages, annotation overload. Mitigation: the rulebook page in phase 1, design review gates at phases 5 and 10.

**Best used for:** the whole site (with strict rules), and especially the cow-to-bottle journey, farm and /origin field-notebook pages.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Strong rulebook (media colour code, motion per medium); missing were colour roles and state colours, font packages and sizes, per-component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Fraunces, Inter Tight, Caveat, JetBrains Mono, Noto Serif Devanagari); no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | primary CTAs, headlines, dark ground (brand forest) | 11.3:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | text on forest | 11.3:1 on primary |
| Secondary | --c-secondary | `#8C6A43` | sepia annotation ink ("observed"): Caveat notes and arrows, ≥ 20 px only | 4.5:1 vs bg (large text / UI only) |
| Accent | --c-accent | `#1E7A68` | data medium ("recorded"): data lines, links, focus ring | 4.7:1 vs bg (text-safe) |
| Background | --c-bg | `#F7F4EC` | milk ground (default) | 14.8:1 with text |
| Surface | --c-surface | `#EDE4D0` | paper medium panels (heritage, notes) | text on surface 12.9:1 |
| Text | --c-text | `#1E211F` | body text | 14.8:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#4B4E4C` | graphite: captions, drawing labels | 7.7:1 vs bg (body-safe) |
| Line | --c-line | `rgba(75,78,76,.28)` | graphite hairlines, construction and dimension lines | decorative; dimension lines at 100% graphite = 8:1 |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#8C6A43` / `#0B3B32` | ok = green data tick (recorded); pending = 1px dotted sepia underline + PENDING tag, kept even inside handwritten notes; DEMO = forest mono stamp with milk text on every demo medium | DEMO stamp milk on forest = 11.6:1; sepia underline is a marker, the claim text stays --c-text |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | dominant medium = botanical drawing: graphite herb sketches (26 *pending*) on `#D9E8DF`, `#1F5C45` data callout "V1+" |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | dominant medium = photograph: red earth and grazing full-bleed, `#F3D9D6` panel, `#B3202A` cap echo, sepia notes |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | dominant medium = data: hairline routine diagram (collection → doorstep, demo times) on `#F8E4C2`, lines `#5A3304` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | dominant medium = type + paper: bottle and one Fraunces line on `#F4EDE2` |

Dark-chapter inversion: Technology (ch. 11) and the trace lookup run on forest: `--c-bg` → `#0B3B32`, `--c-surface` → `#0F4A3F`, `--c-text` → `#F7F4EC`, `--c-accent` (data) → `#7FE0B8` signal, graphite lines → `rgba(217,232,223,.4)`, sepia notes → `#C8A96B`, logo → white.

Additional style tokens (kept from §3): `--mm-gold` `#C8A96B` (rules, heritage), `--mm-signal` `#7FE0B8` (data on dark only). Media colour code: photo = natural · drawing = graphite `#4B4E4C` or sepia `#8C6A43` · data = green · type = ink/milk.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | opsz 144, SOFT 50, wght 400 | `clamp(3.25rem, 2rem + 6vw, 8rem)` | 0.98 | −0.02em | Sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | wght 500 · italic 400 for heritage | H1 `clamp(2.6rem, 1.6rem + 4vw, 5rem)` · H2 `clamp(1.8rem, 1.3rem + 2vw, 3rem)` | 1.05 · 1.15 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight · annotations Caveat | `@fontsource-variable/inter-tight` · `@fontsource-variable/caveat` | 600 · Caveat 500 | label `.75rem` · note `clamp(1.25rem, 1.1rem + .6vw, 1.6rem)` | 1.2 · 1.15 | +0.18em · 0 | Upper · sentence |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 / 500, tabular | `clamp(.78rem, .74rem + .2vw, .875rem)` | 1.4 | +0.04em | Upper (IDs, coordinates) |
| Devanagari (optional) | Noto Serif Devanagari | `@fontsource-variable/noto-serif-devanagari` | 400 / 600 | matches H2 / body | 1.6 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Fraunces, Inter Tight, Caveat, JetBrains Mono, Noto Serif Devanagari: OFL 1.1. Caveat is a prototype stand-in; production annotations use a custom font from a founder's or farm member's real handwriting (consent, licensed to DESIGO®). Pairing: each typeface is a "medium" too: serif = editorial, grotesk = interface, script = observation, mono = record.

### 12.3 Layout & surfaces
- Grid: 12 columns, 5vw margins, 24 px gutters (16 px mobile), max-width 1440 px, text measure 62ch.
- Annotation layer: free-positioned, anchors defined in data `{target, x, y, side}`; below 768 px annotations collapse to numbered footnotes under the image.
- Rule: max 3 media per viewport, one dominant; ≥ 30% milk space around the bottle.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Radius: `sm 0` (photos are sharp rectangles) · `md 2px` (inputs, tags) · `lg 4px` (paper panels); pill only for cursor and footnote pins.
- Border: graphite hairline `rgba(75,78,76,.28)`; dimension lines 1px graphite with 6 px arrowheads.
- Shadow: UI flat; paper panels `0 1px 0 rgba(30,33,31,.06)`; bottle contact shadow + soft ambient drop.
- Texture: scanned cotton paper only inside paper panels; no torn edges, tape or stickers.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: forest button: underlined label + travelling arrow in a 1px forest frame, 48 px, padding 14 px 22 px, Inter Tight 600 upper. States: default · hover frame draws itself (400 ms), magnetic ≤ 6 px · focus-visible 2 px `#1E7A68` ring offset 3 px · active fill `#0B3B32`, milk label · disabled 40% · loading the arrow becomes a drawing graphite line that loops. 44 px target.
- **Secondary button**: label + arrow with a graphite underline; hover underline redraws as a hand-wobble sepia stroke (≤ 0.5 px wobble, 300 ms); focus green ring; active label forest; disabled 40%; loading underline traces.
- **Text / arrow link**: Inter Tight with 1px green underline (data colour = "recorded link"); arrow travels 4 px on hover; focus green ring. In notes, links are sepia Caveat with a drawn underline.
- **Icon button (incl. menu)**: 44 px, two families never mixed in a row: drawn (graphite, hand-wobble) for nature/heritage, technical (1.5 px, square caps) for data/process. Menu = two technical lines → X. Hover green · focus ring · active filled · disabled 40%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: milk bar 72 px (56 px mobile), graphite hairline beneath, logo left, links Inter Tight label style, RESERVE as primary. Mobile: menu sheet on paper `#EDE4D0` with links 28 px Fraunces and a small drawn route sketch, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 12 px DESIGO® ring · hover ring fills 20% green · over photos (VIEW) a 1px crosshair with live mono coordinates (*illustrative*) · over drawings a pencil tip · over data a readout tooltip · ROTATE `DRAG ⟲` over the bottle · EXPLORE `EXPLORE` ring 48 px over medium frames · ENTER `ENTER →` over variant worlds · TRACE crosshair snaps to map nodes. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: MediaFrame (photo, sharp edges, anchor points) and PaperPanel (`#EDE4D0`, 4 px radius, padding 28 px, paper texture). Hover (interactive): annotations reveal on hover/focus; on touch they are numbered pins always visible.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: mono 11 px upper, 24 px, 1px border, radius 2 px. Pending verification: dotted sepia underline on the claim + `PENDING` tag (graphite border, ink text), including inside Caveat notes. DEMO · not live data: forest stamp, milk text, on every demo medium (data stamps, map, lookup).
- **Input + form field (Trace-your-milk bottle ID)**: clean form field on milk: 56 px, 1px graphite border, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`, a sepia Caveat hint arrow "find it on the cap". States: hover border ink · focus-visible green ring 2 px · error `#B3202A` border + message · disabled 40% · loading green data line ticks across. Visible `<label>`; DEMO stamp beside.
- **Divider / ornament**: graphite dimension line with arrowheads and a mono measurement tick at centre; heritage sections use a gold 1px rule.
- **Section header (chapter number + title pattern)**: mono chapter tick `CH 03 · 26.24°N` (coordinates illustrative) + Fraunces title + one sepia annotation pointing at the key word.
- **Product info block (variant name, code, price-pending, size, descriptors)**: V-CODE green data callout, name Fraunces 500, size `1 L glass · 900 g` (dimension-line style) and price from `desigo.ts` with dotted pending underline, descriptors as Inter Tight list each marked pending, CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: bottle on milk ground with contact shadow; graphite construction lines (centre axis, height dimension "1 L" *pending*, cap circle) draw in around it; green data callout for the variant code. Tilt ±8°, float 6 s ±10 px. In Bottle360Viewer the dimension lines stay fixed while the bottle turns.
- **Trace node / timeline step**: node = green data dot (12 px) on a paper field map with a pinned photo thumbnail; path = continuous green data line; step = photo → drawing → mono data stamp (DEMO). States idle · hover sepia note appears · focus-visible green ring · active thumbnail expands to panel · pending step dashed graphite.

### 12.5 Iconography & illustration
- Two icon families on a 24 px grid: drawn (graphite `#4B4E4C`, 1.25 px, wobble ≤ 0.5 px) for nature/heritage; technical (1.5 px, square caps, green) for data/process.
- Illustration: SVG graphite line art traced from real DESIGO® photos (cows, churn, bottle cross-section) that draws itself; hairline charts, coordinate ticks, dashed measurement lines.
- Photography: natural grade, sharp-edged rectangles, no torn edges; paired shots (photo + clean side angle) so drawings can be traced.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 600 / 1200 ms | hover · reveals · scenes |
| `--mm-draw` | 900 ms, `cubic-bezier(.33,0,.15,1)` | drawings draw (stroke-dashoffset) |
| `--mm-count` | 600 ms, ease-out | data counts and ticks |
| `--mm-trace` | 1200 ms | photo → drawing crossfade (signature) |
| `--mm-float` | 6000 ms, ±10 px | bottle float |
| `--mm-stagger` | 40 ms | type rise stagger |

- Each medium has its own motion: photos parallax 0.9–1.1×, drawings draw, data counts, bottle floats, type rises.
- Signature: a photograph "traces" into a drawing as it passes the viewport centre.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: drawings appear complete, no tracing, no parallax.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *mixed-media field-notebook aesthetic, milk white #F7F4EC and cotton paper #EDE4D0, graphite #4B4E4C linework, sepia #8C6A43 ink, deep forest #0B3B32 and data green #1E7A68, warm natural light, generous empty space, editorial, calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/mixed-media/hero-landscape.png` | 3200×2000 (16:10) | no | Soft milk-white cotton paper ground with very faint graphite construction lines (a centre axis and concentric circles) and a faint sepia field sketch of a distant Thar landscape with a khejri tree along the lower edge, vast empty centre | handwriting, numbers, rulers with markings, coffee stains, tape | Hero (ch. 01) |
| 2 | `web/public/desigo/styles/mixed-media/hero-portrait.png` | 1400×2400 (7:12) | no | Tall milk-white paper ground, faint graphite centre axis, a small sepia sketch of dunes and one khejri tree at the bottom, empty centre | handwriting, numbers, tape | Hero mobile |
| 3 | `web/public/desigo/styles/mixed-media/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Botanical graphite pencil sketches of Indian medicinal herb sprigs (tulsi, ashwagandha, shatavari leaves) arranged as a loose open wreath on pale green paper #D9E8DF, bottle-green #1F5C45 accents, empty centre | labels, botanical names, coloured photos, counting grids | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/mixed-media/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Atmospheric painterly backdrop of red earth grazing land in Rajasthan at morning, low khejri trees, soft dust, crimson #B3202A earth tones toned toward pale rose #F3D9D6 haze, wide empty centre (backdrop only until the real grazing photograph arrives) | farm buildings, people, Holstein cows, fences with signs | Four milks ch. 08 (backdrop placeholder for B2) |
| 5 | `web/public/desigo/styles/mixed-media/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Pale wheat paper #F8E4C2 with a faint hairline graph grid and a few calm deep-brown #5A3304 hairline curves and tick marks, like a scientific diagram without any labels, empty centre | numbers, axis labels, charts with text | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/mixed-media/world-essential.png` | 3200×2000 + 1400×2400 crop | no | A single sheet of warm ivory #F4EDE2 cotton paper in soft daylight, one faint graphite horizontal rule, almost empty, calm | writing, folds, stains | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/mixed-media/journey-graphite-set.png` | 3600×1200 (3:1) | yes (real alpha) | Row of seven consistent graphite pencil line drawings evenly spaced: a zebu cow with hump and dewlap, a small Rajasthani farm shed with a khejri tree, a steel milk can, a round paper test card with sixteen dots, a stainless-steel milk chiller, a small clean dairy building, a delivery bicycle with an empty wire crate, single line weight, isolated on transparent background | bottles, jars, shading blobs, labels, Holstein cow | Cow → bottle ch. 03 (MediaJourney) |
| 8 | `web/public/desigo/styles/mixed-media/trace-field-map.png` | 3000×2000 | no | Hand-drawn terrain field map on cotton paper, graphite contour lines, sepia dunes and dry riverbeds, a few small empty circles where nodes go, no labels, faint and calm | place names, roads with numbers, compass text, satellite imagery | Traceability ch. 06, /trace (FieldMap) |
| 9 | `web/public/desigo/styles/mixed-media/texture-cotton-paper.png` | 2400×2400, seamless | no | Seamless tileable texture of warm cotton rag paper #EDE4D0, fine fibres, flat even scan lighting, no shadows | stains, folds, foxing heavy, vignette | PaperPanel texture |
| 10 | `web/public/desigo/styles/mixed-media/breed-gir-graphite.png` | 1600×2000 (4:5) | yes (real alpha) | Precise graphite profile drawing of a Gir cow, an Indian zebu breed with domed forehead, long curled ears and back-curving horns, full body side view facing left, respectful natural-history study, isolated on transparent background | cartoon, Holstein, labels, coloured fill | Breeds ch. 05 (BreedPlate, one of six) |
| 11 | `web/public/desigo/styles/mixed-media/ghee-churn-drawing.png` | 1600×2000 (4:5) | yes (real alpha) | Graphite and sepia drawing of a traditional wooden bilona churn in an earthen pot with its rope, with two curved motion arrows showing the back-and-forth churning, isolated on transparent background | ghee jar, labels, people, text in arrows | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/28_mixed-media.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/mixed-media/
- [ ] Media rulebook page built; ≤ 3 media per viewport audited on every page
- [ ] Annotations reflow to footnotes below 768 px and are keyboard/screen-reader reachable
