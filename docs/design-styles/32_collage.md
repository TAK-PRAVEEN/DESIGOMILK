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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Good board engine and density rules; missing were colour roles (no text-safe muted tone: earth `#8C6A43` is 4.49:1, so a 72% ink tone was added), state colours, font packages and sizes, component states, motion tokens, image prompts and acceptance list. All added. Fonts already OFL; no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | deep cut-paper shape, primary CTA, headline strips | 11.3:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | text on forest | 11.3:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | cut-paper shape, links | 4.7:1 vs bg (text-safe) |
| Accent | --c-accent | `#2E4A7D` | dabu block-print indigo: focus ring, active marker | 8.0:1 vs bg (body-safe) |
| Background | --c-bg | `#F7F4EC` | milk ground | 14.8:1 with text |
| Surface | --c-surface | `#EDE4D0` | paper cut-outs, heritage panels, label strips | text on surface 12.9:1 |
| Text | --c-text | `#1E211F` | body text (never on boards) | 14.8:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#5B5C58` | captions, ticket labels (ink at 72%) | 6.1:1 vs bg (text-safe) |
| Line | --c-line | `rgba(30,33,31,.14)` | cut lines, dividers | decorative |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#C8A96B` / `#0B3B32` | ok = green cut-paper tick; pending = 1px dotted gold underline + "PENDING" label strip; DEMO = forest ticket "DEMO · not live data" stamped across result collages | DEMO ticket milk on forest = 11.6:1; gold underline is a marker only |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | `#D9E8DF` paper, `#1F5C45` hill, 26 herb cut-outs (*pending exact list*), cow portrait, sun: densest (≤ 10 pieces) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | `#F3D9D6` ground, `#B3202A` earth shape, red soil fragment, roots, grazing cow, 14 herb leaves (*pending*): horizontal |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | `#F8E4C2` ground, `#E89A1C` sun disc, three herb cut-outs (*pending*), kitchen shelf: simple, warm |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | `#F4EDE2` ground, one single cut-out (a leaf or field strip): almost empty |

Dark-chapter inversion: ch. 02 ends on forest and Technology (ch. 11) runs collage-off on a dark grid: `--c-bg` → `#0B3B32`, `--c-surface` → `#0F4A3F`, `--c-text` → `#F7F4EC`, muted → `#D9E8DF`, accent → `#C8A96B`, logo → white. Trace map, Quality and Technology stay collage-free.

Additional style tokens (kept from §3): `--cl-kraft` `#C9A77C` (kraft pieces), `--cl-earth` `#8C6A43` (soil fragments, rules; large text only), `--cl-gold` `#C8A96B`. Cut-out border 1–2 px white paper; paper shadow `0 6px 14px rgba(23,25,24,.14)`.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (cut-out word blocks on paper strips) | `@fontsource-variable/fraunces` | wght 600, roman + italic mixed, opsz 144 | `clamp(3rem, 1.9rem + 5.5vw, 7.5rem)` | 1.0 | −0.01em | Sentence; each word on its own strip, ±2 px / ±0.8° |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 600 · italic 500 | H1 `clamp(2.4rem, 1.6rem + 3.6vw, 4.5rem)` · H2 `clamp(1.7rem, 1.3rem + 1.8vw, 2.75rem)` | 1.1 · 1.2 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight (on label strips) | `@fontsource-variable/inter-tight` | 600 | `.75rem` | 1.2 | +0.16em | Upper |
| Data / mono | JetBrains Mono (typewriter tickets) | `@fontsource-variable/jetbrains-mono` | 400 / 500 | `.875rem` | 1.4 | +0.04em | Upper |
| Devanagari (optional) | Noto Serif Devanagari | `@fontsource-variable/noto-serif-devanagari` | 400 / 600 | matches H2 / body | 1.6 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Fraunces, Inter Tight, JetBrains Mono, Noto Serif Devanagari: OFL 1.1, no replacement needed. Pairing: one serif family set as cut strips gives the collage voice; no ransom-note mixing; Inter Tight keeps reading clean beside the board.

### 12.3 Layout & surfaces
- Grid: 12 columns under every board, gutters 24 px / 16 px mobile, max-width 1440 px. Text sits beside boards on cols 1–4 or 9–12, never on the board.
- Boards: 16:10 desktop, 4:5 mobile; elements positioned in data `{id, src, x, y, w, rot, z, depth}` per breakpoint; 3–6 pieces (MASTER 26 ≤ 10; mobile ≤ 5).
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Radius: `sm 0` (scissor-cut edges) · `md 2px` (inputs, tickets) · `lg 0`; pill only for the paper-disc cursor.
- Border: cut-outs get a 1–2 px white paper border; label strips have none.
- Shadow: paper `0 6px 14px rgba(23,25,24,.14)`, lifted `0 10px 22px rgba(23,25,24,.18)`; bottle has a real contact shadow, floating slightly above the board.
- Texture: scanned Sanganer handmade paper and kraft; torn edges only on paper fields in heritage (max one per board); no tape, staples or stickers.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: paper-strip button: forest strip with milk Inter Tight 600 upper label + arrow, 50 px, padding 15 px 24 px, rotated −0.8°, paper shadow. States: default · hover strip lifts 3 px, shadow grows, arrow travels 6 px (300 ms) · focus-visible 2 px `#2E4A7D` ring offset 3 px · active strip flattens to 0° · disabled 40%, no shadow · loading a small paper disc rolls along the strip. 44 px target.
- **Secondary button**: milk strip with forest label + arrow and paper shadow, +0.6°; hover lift; focus indigo ring; active flat; disabled 40%; loading paper disc.
- **Text / arrow link**: Inter Tight with 1.5 px green underline; hover underline becomes a scissor-cut strip under the word (240 ms); focus indigo ring; arrow travels 4 px.
- **Icon button (incl. menu)**: 44 px cut-paper disc (flat fill + 1 px paper edge highlight + tiny shadow) with a filled cut glyph. Menu = two paper strips → X. Hover lift · focus indigo ring · active flat · disabled 40%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: milk bar 72 px (56 px mobile), no border, logo left, links as small label strips on hover, RESERVE as forest strip. Mobile: menu slides in as a paper sheet at −2° with links 28 px Fraunces, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 18 px milk paper disc with 1 px shadow · hover over interactive cut-outs lifts them (shadow grows, −3 px) · ROTATE `DRAG` over the bottle · EXPLORE `EXPLORE` disc 48 px over boards · ENTER `ENTER →` over variant boards · VIEW over photos · TRACE small disc with crosshair over map nodes. Never a scissors glyph. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: ticket / board card: paper surface, scissor-cut edge, 1 px white border, paper shadow, padding 24 px; the caption ticket slides out of a cut-out on hover/focus (300 ms).
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: label strip: Inter Tight 600 11 px upper on paper strip, 24 px. Pending verification: dotted gold underline + "PENDING" strip next to any herb, breed, price or city. DEMO · not live data: forest ticket stamped across demo result collages and the map.
- **Input + form field (Trace-your-milk bottle ID)**: ticket input: 56 px, 1 px ink border on milk, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`, ticket notch on the left. States: hover shadow · focus-visible indigo ring · error `#B3202A` border + strip message · disabled 40% · loading paper disc. Visible `<label>`; DEMO ticket beside.
- **Divider / ornament**: a narrow cut-paper strip (kraft or green) at −1°, 6 px tall, 120 px long; heritage uses a torn paper edge (one per board).
- **Section header (chapter number + title pattern)**: chapter number on a small kraft ticket (`03`) + headline set as cut-out word strips + a lead line in Inter Tight beside the board.
- **Product info block (variant name, code, price-pending, size, descriptors)**: beside the board on the grid: V-CODE ticket (mono), name in Fraunces, size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline, descriptors pending-marked, CTA strip `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: the bottle is the only non-paper object: real photo, sharp, true glass highlights, floating slightly above the board with a real contact shadow; collage assembles around it. Tilt ±8°, layers parallax opposite. In Bottle360Viewer the collage stays still while the bottle turns.
- **Trace node / timeline step**: collage-off map: flat cut-paper circles (16 px) as nodes on milk paper, crisp path; result timeline = ticket per step. States idle · hover node lifts · focus indigo ring · active ticket slides out · pending dashed cut-line circle.

### 12.5 Iconography & illustration
- Icons: cut-paper filled shapes on a 24 px grid, 1 px paper-edge highlight and tiny shadow; no outlines.
- Illustration: Matisse-like flat cut shapes (leaves, sun, hills) in brand greens and earth; Indian craft sources (block print, Sanganer paper) credited.
- Photography: shot for cutting against plain backgrounds; clean vector-path scissor edges with paper border; never AI-generated cut-outs (AI only for paper grounds and flat shapes below).

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 650 / 1000 ms | hover · piece placement · paper slide |
| `--cl-assemble` | 650 ms, ease-out, 90 ms stagger, from −12 px at 0.96 | pieces placed by hand on scroll |
| `--cl-depth` | 0–14 px by layer depth | pointer/scroll parallax |
| `--cl-slide` | 1000 ms, ease-inout, −2° | paper-slide board transition |
| `--cl-lift` | 300 ms | cut-out lift + ticket slide-out |

- Signature: the collage assembles piece by piece around the bottle and disassembles at the final CTA.
- Z-order respected during assembly; nothing spins or bounces.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: final composition shown, no parallax, no assembly.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *Matisse-like flat cut-paper collage, milk white #F7F4EC ground, handmade paper #EDE4D0, kraft #C9A77C, deep forest #0B3B32, green #1E7A68, earth #8C6A43, gold #C8A96B, indigo #2E4A7D accents, clean scissor edges, soft paper shadows, generous empty space, calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/collage/hero-landscape.png` | 3200×2000 (16:10) | no | Flat Matisse-style cut-paper composition on milk-white paper: a large gold sun disc, a green hill strip like the Thar edge, a single cut leaf and a small indigo cut shape, arranged sparsely around a large empty centre, soft paper shadows | photographs, tape, staples, stickers, torn magazine text, clutter | Hero board (ch. 01) backdrop |
| 2 | `web/public/desigo/styles/collage/hero-portrait.png` | 1400×2400 (4:5 board inside 7:12) | no | Tall cut-paper composition on milk paper: gold sun disc at the top, a green hill strip at the bottom, one leaf, empty centre | photographs, tape, clutter | Hero mobile |
| 3 | `web/public/desigo/styles/collage/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Lush layered cut-paper leaves in bottle green and pale green on #D9E8DF paper, a cut-paper hill in #1F5C45 and a small gold sun, leaves framing a clear empty centre, soft paper shadows | photos, labels, counted rows, tape | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/collage/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Horizontal cut-paper strata in crimson #B3202A and pale rose #F3D9D6 with one torn-edge earth band and fine cut root lines, calm, empty centre | photos, blood-red splashes, tape | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/collage/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | A large amber #E89A1C cut-paper sun disc low on pale wheat #F8E4C2 paper with three simple cut leaves, warm, empty centre | photos, tape, clutter | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/collage/world-essential.png` | 3200×2000 + 1400×2400 crop | no | A single cut-paper leaf resting on ivory #F4EDE2 handmade paper, soft shadow, almost entirely empty | multiple objects, text, tape | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/collage/journey-board.png` | 3600×1200 (3:1) | no | Long horizontal cut-paper board: a continuous milk-white cut-paper ribbon winding across kraft and green paper fields, with seven empty circular paper placeholders evenly spaced along it | photos, cows, bottles, labels, tape | Cow → bottle ch. 03 (board ground; real cut photos are placed in code) |
| 8 | `web/public/desigo/styles/collage/trace-paper-nodes.png` | 3000×2000 | yes (real alpha) | Flat cut-paper circles as nodes joined by a crisp cut-paper path, converging from scattered points into one hub, milk and green paper, isolated on transparent background | labels, map borders, tape | Traceability ch. 06 (collage-off map) |
| 9 | `web/public/desigo/styles/collage/texture-sanganer-paper.png` | 2400×2400, seamless | no | Seamless tileable texture of Sanganer handmade paper with visible pressed fibres and soft deckled irregularity, warm cream, flat scan lighting | stains, text, folds, vignette | Paper grounds |
| 10 | `web/public/desigo/styles/collage/texture-kraft.png` | 2048×2048, seamless | no | Seamless tileable kraft paper texture #C9A77C, fine fibres, flat even light | print, stains, creases | Kraft pieces, tickets |
| 11 | `web/public/desigo/styles/collage/ghee-cutpaper.png` | 3200×2000 | no | Warm ghee-gold cut-paper shapes on cream paper: a low sun, rounded drops and a narrow folk-border strip of cut triangles and dots, empty centre | jars, photos, text, tape | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/32_collage.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/collage/
- [ ] Each board has a text description; ≤ 6 pieces per board (MASTER 26 ≤ 10, mobile ≤ 5)
- [ ] No AI-generated cut-outs of real subjects; herb/breed pieces match approved lists or are marked pending
