# 32 · Collage — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only. (Merged entry: "Collage" = "Collage art".)
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Collage builds an image by **cutting and layering** pieces of paper, photographs, printed matter and colour fields into one composition. Edges are visible (scissor-cut or torn), scale is playful (a giant cow beside a small bottle), and meaning comes from juxtaposition. Unlike Mixed Media (28), which combines *techniques* (photo + drawing + data), Collage is about **cut-out photographic fragments arranged on a flat ground**, with depth from overlap and shadow.

Reference points:
1. **Henri Matisse's cut-outs** (*The Snail*, *Jazz*): flat paper shapes, bold colour, joyful rhythm.
2. **Hannah Höch and the Dada photomontage**: photographic fragments recombined with surprising scale.
3. **Contemporary editorial collage (magazine covers and features from *The New York Times Magazine* and *The New Yorker*)**: clean-edged, flat-colour, cut-photo layering with plenty of breathing room.

## 2. Fit for DESIGO® — score 3 / 5

**Why it fits.** DESIGO®'s story has many real ingredients: cows, herbs, soil, hands, glass, caps, chillers, QR codes, the Thar landscape, the bilona churn. Collage can assemble them into **one picture per variant or chapter** that shows "everything that went into this bottle". It is tactile, Indian-craft-friendly (paper, block-print, newsprint), highly shareable, and gives a strong editorial identity that photography alone does not.

**Where it fights.** Busy layering competes with the bottle; cut-out photos of food can look low-budget if edges are poor; torn paper and tape can cheapen a premium product. It also depends heavily on high-quality real photography with clean cut-outs.

**Recommendation.** Strong for **ingredient stories**: the four variant worlds ("what goes into MASTER 26"), the cow-to-bottle journey, Origin and social/campaign. As a whole site it needs strict restraint: Matisse-like flat compositions with 3–6 elements, not Dada chaos. Lab, trace map and technology stay clean.

## 3. Art direction

### Palette ("cut paper on milk")
| Token | Hex | Role |
|---|---|---|
| `--cl-milk` | `#F7F4EC` | Ground |
| `--cl-paper` | `#EDE4D0` | Paper cut-outs (heritage) |
| `--cl-kraft` | `#C9A77C` | Kraft-paper pieces |
| `--cl-forest` | `#0B3B32` | Deep cut-paper shape, type |
| `--cl-green` | `#1E7A68` | Cut-paper shape |
| `--cl-earth` | `#8C6A43` | Soil fragments, rules |
| `--cl-gold` | `#C8A96B` | Accent shapes |
| `--cl-indigo` | `#2E4A7D` | Block-print indigo (Rajasthani dabu) accent |
| `--cl-ink` | `#1E211F` | Body text |

Plus each variant's base/deep/light as cut-paper fields (§5).

### Typography
- Display: **Fraunces** 600 italic + roman mixed, set as **cut-out word blocks**: each headline word on its own paper strip (milk or kraft), slightly offset (±2px, ±0.8°).
- Labels: **Inter Tight** 600 uppercase, set on narrow "label tape" strips (a printed strip, not sticky tape).
- Body and UI: **Inter Tight** 400.
- Data: **JetBrains Mono** on small typewriter-style tickets.
- No ransom-note lettering (mixed fonts per letter); it reads as a threat, not a brand.

### Texture and imagery
- **Cut photographs**: real DESIGO® photos cut out with a **clean scissor edge** (vector path with 1–2px white paper border) and a soft paper shadow (`0 6px 14px rgba(23,25,24,.14)`).
- Torn edges: allowed **only on paper fields** (heritage chapters), max one per composition, via an SVG mask with natural fibre.
- Paper grounds: scanned Sanganer handmade paper, kraft paper, and **Rajasthani block-print fragments** (dabu, bagru, commissioned or photographed with permission from a named printer).
- Flat shapes: Matisse-like cut leaves (herbs), sun, hills, in brand greens and earth.
- No tape, no staples, no paper clips (that is Scrapbook, style 09).

### Iconography
Cut-paper icons: filled flat shapes with a 1px paper edge highlight and a tiny shadow.

### Grid
12 columns underneath, but each composition is a **free "board"** (16:10 desktop, 4:5 mobile) whose elements are positioned in percentages in data (`{id, src, x, y, w, rot, z, depth}`). This allows recomposition per breakpoint. Text never sits on the board; it sits beside it on the grid (columns 1–4 or 9–12).

## 4. Motion and interaction language
- **Assemble on scroll.** Elements arrive one at a time, as if placed by hand: from 12px above with 0.96 scale, rotation settling to the final angle, 650ms `cubic-bezier(.16,1,.3,1)`, 90ms stagger, z-order respected.
- **Depth parallax.** Each layer has a `depth` (0–1). Pointer and scroll move layers 0–14px, giving a paper-theatre depth without 3D.
- **Cursor.** Not a scissors glyph, which is too literal. Instead, an 18px paper disc in milk with a 1px shadow. Over interactive cut-outs it "lifts" them (shadow grows, translateY −3px). Over the bottle: `DRAG`.
- **Hover.** A cut-out under the cursor lifts and its caption ticket slides out (300ms).
- **Transitions.** A **paper slide**: the next board's ground sheet slides over the old one at an angle (−2°), 1000ms `cubic-bezier(.65,0,.35,1)`.

### The bottle
The bottle is **the only element that is not paper**. It is the real photographic object, sharp, with true glass highlights, floating slightly above the board with a real contact shadow. Around and behind it, the collage assembles: herb cut-outs, a cow, a hill, a sun. This contrast (flat paper world, real glass bottle) gives the hero hierarchy. Tilt ±8°; collage layers parallax opposite the tilt. 360 viewer: the collage stays still while the bottle turns.

## 5. Variant worlds — four collages ("what goes into it")

| Variant | Ground | Cut-outs | Feel |
|---|---|---|---|
| MASTER 26 (V1+) | `#D9E8DF` paper, `#1F5C45` hill shape | 26 herb cut-outs *pending exact list*, cow portrait, sun | Lush, layered, densest of the four |
| ROOT 14 (V1) | `#F3D9D6`, `#B3202A` earth shape | Red soil fragment, roots, grazing cow, 14 herb leaves (*pending*) | Grounded, horizontal |
| BASE 3 (V2) | `#F8E4C2`, `#E89A1C` sun disc | Three herb cut-outs (*pending*), a kitchen shelf, morning sun | Simple, warm |
| ESSENTIAL (V3) | `#F4EDE2` | Only one cut-out: a single leaf or field strip | Almost empty, calm |

Density decreases from MASTER 26 to ESSENTIAL. The info panel sits on the grid beside the board: V-CODE ticket, name in Fraunces, price (*pending*), descriptors (*pending*).

## 6. Page-by-page treatment

1. **Hero.** Milk ground; the bottle; a sparse collage of five pieces (a cow cut-out, a sun disc, a Thar hill strip, a herb leaf, a block-print fragment) assembles around it. Headline words on paper strips: "Milk / from the / source."
2. **Bottle becomes the story.** Each of the six words brings one cut-out onto the board around the bottle; by the end, the collage is complete and the ground has turned forest.
3. **Cow to bottle.** A long horizontal board: seven stations as cut photographs connected by a cut-paper milk ribbon.
4. **Farm.** The style relaxes: two or three large real photographs, uncut, with one paper strip caption each.
5. **Breeds.** Breed portraits cut out on matching paper fields, with names on label strips (*pending*).
6. **Traceability.** **Collage off.** A clean map on milk paper with flat cut-paper nodes (circles) and a crisp path. DEMO label.
7. **Quality.** **Collage off.** Clinical milk page, "16", parameter list. Values pending.
8. **Four milks.** §5 collages, one per screen.
9. **Milk as material.** Torn milk-white paper layers peeling across a forest ground (SVG masks), with the canvas ribbon as an option.
10. **Heritage.** Block-print fragments, a kraft-paper cow silhouette and an italic statement. Printer credited.
11. **Technology.** Collage off, dark grid; one cut-paper bottle silhouette crossing from the paper world into the grid.
12. **Ghee.** Bilona churn photo cut out, jar, ghee-gold paper shapes, folk border from the label. Three grades.
13. **Trace your milk.** An input on a ticket; the result assembles a mini collage (farm cut-out, chiller, bottle) with DEMO stamped across.
14. **Story.** Archive photographs cut out on a long paper strip; verified items only.
15. **Final CTA.** The collage gently disassembles (pieces lift away), leaving the bottle. "Know where your milk comes from."

### Inner pages
- **/milk**: four small collage boards in a grid; hover lifts the bottle.
- **/milk/[variant]**: full collage hero, then 360 viewer on clean ground, facts.
- **/ghee**: the churn collage plus three jars.
- **/origin**: photo essay with occasional cut-out compositions.
- **/trace**, **/technology**: clean (collage only in the intro board).
- **/about**: archival collage; verified timeline.
- **/reserve**: clean form; a small collage of the crate and doorstep.

## 7. Component variants
`CollageBoard` (data-driven layers, per-breakpoint layouts) · `CutOut` (path-clipped photo + paper border + shadow) · `PaperStripHeadline` · `LabelStrip` · `Ticket` (mono data) · `PaperSlideTransition` · `DepthParallax` · `CollageBottle` · `PaperDiscCursor` · `AssetSlot` as a dashed cut-line outline with "Cut-out pending — breed portrait (B3)".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Paper palette, strip headlines | Tokens, specimen, paper scans | Text never on boards; AA | Paper scans, block-print permission | 2 |
| 2 | Shell | Board engine, nav, cursor | `CollageBoard`, data schema | Layers positioned by data; 60fps parallax | none | 4 |
| 3 | Hero and bottle | Bottle + sparse collage | Hero | ≤ 6 pieces; bottle hierarchy clear in a 5-second test | Renders, cut-outs (B1, B2) | 4 |
| 4 | Bottle → story | Collage completes with six words | Chapter 02 | Each piece tied to its word | B5 herbs | 3 |
| 5 | Cow → bottle | Long board journey | Chapter 03 | Mobile vertical board | B4, B8 cut-outs | 4 |
| 6 | Origin | Relaxed documentary | Chapter 04 | Uncut photos | B1, B2 | 2 |
| 7 | Breeds | Cut portraits | Chapter 05 | Clean edges at 2× DPR | B3 (same backdrop helps cutting) | 3 |
| 8 | Trace map | Clean map | TraceMap skin | Keyboard; DEMO | traceNodes | 3 |
| 9 | Quality | Clinical | Chapter 07 | Collage off | Lab approval | 2 |
| 10 | Four worlds + 360 | Four density levels | Chapter 08 | Board static while bottle turns | A, herb cut-outs | 6 |
| 11 | Heritage | Block-print collage | Chapter 10 | Printer credited | Block prints | 3 |
| 12 | Technology | Paper → grid crossing | Chapter 11 | Public vocabulary | none | 2 |
| 13 | Ghee | Churn collage | Chapter 12 | Prices pending | Ghee photos, jar | 3 |
| 14 | Trace demo | Result collage | Chapter 13 | DEMO stamped | demoProvider | 3 |
| 15 | /milk pages | Product pages | 5 routes | Viewer on clean ground | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Clean tech pages | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified only | B10, B11 | 3 |
| 18 | Mobile | 4:5 boards | Per-breakpoint layouts | ≤ 5 pieces on mobile boards | none | 3 |
| 19 | A11y + reduced motion | Static boards | No assembly, no parallax | Each board has a text description | none | 2 |
| 20 | Perf, QA, handover | Ship | Cut-out pipeline doc, reports | Each cut-out ≤ 80 KB AVIF; LCP < 2.5s | all | 3 |

Total ≈ 63 days (plus cut-out preparation, roughly 1 day per 15 cut-outs).

## 9. Assets needed from DESIGO®
- 360 sequences (A) and vector wordmark (C).
- **Photography shot for cutting**: subjects against plain backgrounds (cows, herbs flat-lay one by one, the churn, the jar, hands, crates). This is far better than cutting from busy farm photos.
- Herb list per variant (*pending*) before any herb cut-out is labelled.
- Block-print fragments: photographs or textile samples, with the printer's name for credit.

## 10. Performance, accessibility and mobile
- Cut-outs are AVIF/WebP with alpha, ≤ 80 KB, sized per breakpoint. Shadows are CSS, not baked.
- Boards lazy-load below the fold; layers decode in z-order.
- Each board has an accessible description ("Collage: a Gir cow, three herb leaves and the sun around the MASTER 26 bottle").
- Reduced motion: final composition shown, no parallax.
- Mobile: separate 4:5 layouts, fewer pieces, text below the board.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Matisse restraint: 3–6 pieces per board (MASTER 26 may reach 10), large empty paper.
2. Clean scissor edges with a paper border. Never sloppy masking, never AI-generated cut-outs.
3. No tape, staples, stickers, ransom-note type or grunge.
4. The bottle is always the real, sharp object above the paper world.
5. Lab, trace map and technology are collage-free.
6. Every herb or breed shown must match approved lists; unconfirmed items stay labelled pending.
7. Craft sources (block print, paper) are Indian and credited.

**Risks**: clutter, cheap-looking cut-outs, food looking pasted. Mitigation: shoot for cutting, density rules, a review gate at phase 3.

**Best used for:** the four variant worlds as "what goes into this bottle" ingredient collages, plus the journey chapter and social.
