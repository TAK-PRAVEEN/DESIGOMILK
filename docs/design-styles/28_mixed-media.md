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
