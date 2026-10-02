# 49 — Shape Design · DESIGO® build plan

> **Priority style (client request, 2026-10-03)**

**Fit score: 3.5 / 5** (4 for /milk and campaigns) · **Best used for:** the /milk line-up and chapter 08's
variant index, the cow → bottle journey as a sequence of shapes, launch posters and outdoor, and a sitewide system
of arch and circle masks for photography. It needs a calmer base (Minimalism or Luxury Typography) around it.

---

## 1. Style essence

Shape design builds compositions from a few bold geometric primitives (circles, arches, half-discs, blocks and
bars) set in flat colour, overlapped and cropped by the frame. Meaning comes from scale, placement and colour, not
detail. A circle can be a sun, a bottle cap or a drop of milk seen from above. Good shape design is poster logic:
one idea, readable in a second, then rewarding on a second look.

Three reference points:
1. **Louis Kahn's IIM Ahmedabad and Balkrishna Doshi's work**: Indian modernism made of circles cut into brick,
   arches and deep shade. Proof that pure geometry can feel Indian and warm.
2. **Jodhpur itself**: the arches and jharokhas of Mehrangarh, the stepped geometry of the Toorji ka Jhalra stepwell
   and the blue-city cubes seen from the fort. The local vocabulary is already shape design.
3. **Mid-century and Bauhaus posters** (Ellsworth Kelly's colour forms, Olle Eksell, the Bauhaus exhibition posters),
   for the discipline of flat colour and the crop.

## 2. Why it fits DESIGO® and where it fights

- **The product line-up is already a shape system.** Four identical bottles distinguished only by a coloured
  circle (the cap). Green, red, amber and ivory discs read instantly, even at icon size.
- **Jodhpur provides an ownable vocabulary.** Arches, steps and the sun disc are local and architectural, which keeps
  the style from looking like a generic tech-startup illustration kit.
- **It explains without claims.** The journey ORIGIN → DELIVER can be told as shapes changing into each other,
  without a single number.

**Where it fights:** flat geometry can look childish, corporate or "Memphis 2017"; it can flatten the farm's
warmth and the cows' dignity. The remedy is a strict primitive set, an earthy palette, real photography *inside*
the shapes (an arch masking a farm photo) and lots of milk-white air.

## 3. Art direction

### Shape vocabulary (five primitives only)
| Primitive | Meaning in DESIGO® | Proportion |
|---|---|---|
| **Circle** | Cap, sun, drop from above, the "you" node | Diameters on a 1 : 1.618 ladder |
| **Arch** | Jharokha, doorway, "where it begins", the frame for photos | Width : height 1 : 1.5, semicircular head |
| **Block** | Sandstone, step, batch, chiller, plant | Multiples of an 8vw module |
| **Bottle** | The DESIGO® silhouette (rounded body, shoulder, neck, cap) | Traced from the real render, never redrawn freehand |
| **Half-disc** | Hill, horizon, horn curve, rising sun | Always cut by a block or the frame |

No triangles, stars, squiggles or confetti. These five carry the whole site.

### Palette: earth and caps, flat
| Token | Hex | Use |
|---|---|---|
| `--milk` | `#F7F4EC` | Ground; at least 40% of every composition |
| `--sandstone` | `#D9A47A` | Jodhpur stone (earth lifted), blocks and arches |
| `--earth` | `#8C6A43` | Shadow blocks, ground lines |
| `--forest` | `#0B3B32` | Deep blocks, dark chapters |
| `--green` | `#1E7A68` | Links, focus ring, DESIGO® circle |
| `--gold` | `#C8A96B` | Sun disc on heritage, ghee |
| `--indigo` | `#3E5C8A` | Blue-city cube accent, used once per page at most |
| `--charcoal` | `#171918` | Type on light |
| Caps | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | The four variant circles; never mixed inside one scene except /milk |

Colours are flat: no gradients, no glows. Depth comes from overlap and a single 8% `--earth` offset block used as a
shadow (offset 1 module, no blur).

### Typography
- **Display:** *Outfit* 600–700 (OFL, geometric). It is the nearest open-licence cousin of the monoline DESIGO®
  wordmark, so shapes and letters share the same circle-based skeleton. Tracking −0.03em at display size.
- **Editorial accent:** *Fraunces* 300 italic for one sentence per scene, so the style keeps a human voice.
- **UI and body:** *Inter Tight* 400–600. **Data:** *JetBrains Mono*.
- Scale: display `clamp(3.5rem, 10vw, 11rem)`, line-height 0.9 · numerals inside circles `clamp(4rem, 14vw, 14rem)` ·
  body `1rem/1.6`, 58ch.

### Texture, imagery, iconography
- Texture: a 2% paper grain only on sandstone blocks; everything else is flat.
- Imagery: real photography **masked by shapes**: farm photos in arches, cow portraits in circles, delivery in a
  block. Generated imagery is limited to flat-shape plates and textures.
- Icons: built from the same five primitives (a circle + block = chiller; arch + circle = farm), 2 px stroke or solid.

### Grid
A 12-column grid overlaid with a **shape module of 8vw** (desktop) or 25vw (mobile). Shapes snap to the module;
text snaps to the columns. Compositions are cropped by the viewport edge on at least one side ("the frame cuts the
shape"), which is what makes them feel like posters rather than diagrams.

### Header wordmark
The black write/un-write DESIGO® loop stays as is. It never sits inside a shape, and nav sits on milk or forest only.

## 4. Motion and interaction language

| Motion | Spec |
|---|---|
| Shape enter | Slide in from the frame edge along one axis, 900 ms `cubic-bezier(.16,1,.3,1)`; no scaling from zero |
| Rotation | 90° or 180° quarter-turns only (half-disc becoming a hill, then a sun), 1200 ms `--ease-inout` |
| Morph | Circle ↔ arch ↔ bottle via SVG path interpolation (matched point counts), 1200 ms, scroll-scrubbed with `scrub: 1` |
| Mask reveal | An arch or circle mask grows over a photo from 0.6 → 1.0 of its final size, 1000 ms `--ease-milk` |
| Stagger | 120 ms between shapes; a maximum of 5 shapes animate per viewport |
| Transition | A full-screen block slides across (700 ms) in the next chapter's colour |

**Cursor states:** default 12 px solid charcoal circle · **link**: a 44 px ring that turns into a half-disc
"underline" under the link text · **image**: a 64 px arch outline labelled `VIEW` · **360**: a 72 px circle split into
two half-discs that rotate with drag (`DRAG`) · **text**: native caret · **disabled**: 30% circle · touch: none.

**Hover:** buttons are a text label sitting on a block that slides in from the left (240 ms); the arrow is a small
circle that travels 6 px. Magnetic offset ≤ 6 px.

## 5. The hero bottle and the four variants

The bottle stands inside an **arch**, with a large circle behind it (sun or cap colour) and a block plinth under it.
The real render sits on top of flat shapes, and the contrast between photographic glass and flat geometry is the
style's premium moment. Float ±8 px over 6 s, pointer tilt ±8°; the circle behind shifts 0.5× opposite to the tilt
for parallax. Contact shadow is replaced by a flat `--earth` ellipse at 12%.

- **Before 360 frames:** ±25° turn with sheen; the circle behind rotates slowly (one turn per 60 s) to suggest motion
  honestly without faking a spin.
- **After 360 frames:** drag rotates the bottle; the 360 control is a ring of 72 small ticks around the circle, with
  the current frame as a solid dot, and the counter `036 / 072` in mono.

| Variant | Shape world |
|---|---|
| **MASTER 26** | Stacked green circles of three sizes (canopy) on deep forest, the bottle in a tall arch; "26" set inside the largest circle in Outfit at 14rem. Line: "Twenty-six herbs. The fullest expression of the source." (herb count pending). |
| **ROOT 14** | Red stepped blocks rising like the stepwell and the earth strata, the bottle standing on the third step; "14" across two blocks. "Fourteen herbs, rooted in free grazing." (pending). |
| **BASE 3** | A huge amber sun disc half-set behind a single block horizon, the bottle in front at the disc's centre; "3" in the disc. "The everyday foundation." |
| **ESSENTIAL** | One ivory arch on milk, nothing else; "E" in the arch's head. "Simple, balanced, honest." |

**Info panel:** a sandstone block containing `DESIGO® V1+`, the name in Outfit 600, price and size (dotted underline,
"pending approval" tooltip), descriptors in a list with circle bullets, and `RESERVE ———→`.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | Milk. Bottle in a sandstone arch, a green circle behind, a block plinth. "MILK / FROM THE / SOURCE." in Outfit 700 at the left, cropped by nothing. Two CTAs. |
| 02 | Bottle becomes the story | Bottle pinned; six shapes orbit it, each carrying one word: ORIGIN (half-disc hill), BREED (circle portrait mask), FEED (block field), FARM (arch), QUALITY (16-dot circle), TRACE (bar). Milk → forest. |
| 03 | Cow → bottle | **Signature morph:** one shape transforms through seven stations with scroll: hill → arch (farm) → circle (milk can top) → 16-dot circle (test) → block (chill) → block stack (plant) → bottle silhouette. The real step illustrations sit beside each shape. |
| 04 | Where it begins | Real farm photography in large arch masks, three arches in a row like a colonnade; captions in Fraunces italic. AssetSlots are drawn as empty arches labelled with the needed photo. |
| 05 | Breeds | Six circular portrait masks (breed plates D1–D6 or real photos), each on a half-disc "ground". Names in Outfit; "Breed list client-stated · approval pending". The cow is always seen whole inside the circle, never cropped at the face. |
| 06 | Traceability | Forest. Nodes are shapes (FARM arch, COLLECTION circle, BATCH block, CHILLER block, BARREL circle-in-block, PLANT block stack, BOTTLE silhouette, YOU circle) linked by a 4 px bar that fills with scroll. "Illustrative journey — not live data". |
| 07 | Quality | A large circle of 16 dots (the test card abstracted), each dot labelled on hover from `qualityScreen`; results "— pending lab confirmation". |
| 08 | Four milks | Four shape worlds (section 5) with an index of four cap circles on the left edge. |
| 09 | Milk as material | The ribbon simulation constrained inside a giant circle on forest, like milk seen from above in a bowl. |
| 10 | Heritage | Sandstone blocks and a gold sun disc; the cow line art sits in an arch; italic statement. |
| 11 | Technology | Charcoal. Seven blocks in a row, one verb each; each block slides up as it activates. Statement in Outfit 300 caps. |
| 12 | Ghee | Gold. A half-disc churn shape (bilona), three stacked blocks for three grades, each linked by a bar to its milk's cap circle. Prices pending. |
| 13 | Trace your milk | Charcoal. The input sits in a long block; the result builds as shapes stacking into a bottle silhouette, line by line. `DEMO` badge in a circle, always visible. |
| 14 | Story | A row of blocks of varying height on a ground line, one per verified year. |
| 15 | Final CTA | All four cap circles converge into one green circle behind the returning bottle. "Know where your milk comes from." |

**Inner pages:** /milk is the signature: four arches in a row, each holding a bottle with its cap circle above, a
View Transition expanding the chosen arch · /milk/[variant] is its shape world, the tick-ring 360 viewer and a facts
table laid out in blocks · /origin is the arch colonnade and breed circles · /trace has the node shapes and the
demo · /technology has the seven blocks · /about has the year blocks and team portraits in circles · /ghee is the
churn shape and grade blocks · /reserve has four cap circles as the variant selector.

## 7. Component variants

`ShapeKit` (five primitives as SVG components with module snapping) · `ShapeMask` (arch, circle, block masks for
images) · `ShapeMorph` (path interpolation, scroll-scrubbed) · `CapIndex` (four-circle variant index) ·
`ArchColonnade` (FarmScene) · `BreedCircles` · `TraceMap.shapes` · `DotRing16` (QualityPanel) · `BlockRow`
(TechnologyGrid, StoryTimeline) · `TickRing360` (Bottle360Viewer control) · `BlockButton` · `ShapeCursor` ·
`EmptyArchSlot` (AssetSlot).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Palette, Outfit system | Tokens, type specimen, shape spec sheet | Five primitives only; fonts ≤ 130 KB | Wordmark vector | 2 |
| 2 | Grid & shell | Module grid, nav, cursor | `ShapeKit`, `ShapeCursor`, grid overlay | Shapes snap to module at all breakpoints | — | 3 |
| 3 | Hero | Arch + circle + bottle | Hero composition | LCP ≤ 2.0 s; bottle traced silhouette matches render | Render (have) | 2 |
| 4 | Bottle → story | Orbiting shapes | Pinned scene | Reduced motion = static grid | — | 3 |
| 5 | Cow → bottle | Morph sequence | `ShapeMorph` × 7 | Smooth at 60 fps; static strip fallback | E1–E7 | 5 |
| 6 | Origin / farm | Arch colonnade | `ArchColonnade`, `EmptyArchSlot` | Real photos only | Farm photos | 2 |
| 7 | Breeds | Circle portraits | `BreedCircles` | Whole animal visible; status visible | D1–D6 | 2 |
| 8 | Trace map | Node shapes | `TraceMap.shapes` | Keyboard nodes; label visible | — | 4 |
| 9 | Quality | 16-dot ring | `DotRing16` | No unconfirmed values | — | 2 |
| 10 | Four worlds + 360 | Shape worlds | 4 scenes, `TickRing360` | Numerals `aria-hidden`; counter correct | 360 frames | 6 |
| 11 | Heritage | Sandstone + sun | Scene | — | Cow line art | 2 |
| 12 | Technology | Block row | `BlockRow` | Public vocabulary only | — | 2 |
| 13 | Ghee | Churn + blocks | Scene | Prices pending-styled | Jar | 2 |
| 14 | Trace-your-milk | Stacking result | Demo | DEMO visible; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Arch line-up | Pages, transitions | View Transition fallback | 360 frames | 5 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | Content from `desigo.ts` only | Photos | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | Archive | 3 |
| 18 | Mobile | 25vw module | Re-composed posters | No horizontal scroll; shapes crop inside scenes | — | 3 |
| 19 | A11y + reduced motion | — | Static compositions | WCAG 2.2 AA; shapes decorative, `aria-hidden` | — | 2 |
| 20 | Perf, QA, handover | Ship | SVG audit, QA | Lighthouse ≥ 96; CLS < 0.02 | All | 3 |

**Total:** about 60 days.

## 9. Assets needed from DESIGO® and images to generate

**Real, from DESIGO®:** wordmark vector (the shapes must agree with it); 360 frames; 6–10 farm photographs composed
with room for arch and circle crops (shoot with masks in mind: subject centred, generous headroom); breed portraits.

**Images to generate** (flat plates and textures only; `web/public/desigo/styles/shape-design/`; full spec in section 12.7; use the house-style tail
but replace "subtle film grain, editorial" with "flat colour, no gradients"):
| # | File | Size | Prompt |
|---|---|---|---|
| SH1 | `jodhpur-arches.png` | 3200×2000 | Flat geometric composition inspired by Jodhpur fort architecture: three tall semicircular arches and a sun disc, sandstone #D9A47A, earth #8C6A43 and milk white #F7F4EC, flat colour, no gradients, no people, empty central arch, no text, no watermark, no logo, no letters |
| SH2 | `stepwell-blocks.png` | 3200×2000 | Flat geometric abstraction of a Rajasthani stepwell seen frontally, stacked rectangular steps in deep red #B3202A and oxblood #4A0A0F, strict symmetry, flat colour, no texture, no text, no watermark, no logo, no letters |
| SH3 | `sun-horizon-amber.png` | 3200×2000 | Minimal flat poster of a huge amber #E89A1C sun disc half set behind a single straight horizon block in deep brown #5A3304, milk-white sky, flat colour, no text, no watermark, no logo, no letters |
| SH4 | `canopy-circles.png` | 3200×2000 | Flat composition of overlapping circles in three greens #1F5C45, #0A2A20 and #D9E8DF suggesting a tree canopy, large empty clearing at center, flat colour, no text, no watermark, no logo, no letters |
| SH5 | `sandstone-grain.png` | 2048×2048, seamless | Seamless fine sandstone grain texture in warm #D9A47A, very subtle, flat lighting, no text, no watermark, no logo, no letters |

Shapes used in the UI are drawn in code; these plates are for posters, social and the hero backgrounds.

## 10. Performance, accessibility and mobile

- All primitives are inline SVG or CSS (`clip-path`, `border-radius`), so the page carries almost no image weight.
- Morphs use pre-computed path pairs with equal point counts (no runtime path libraries over 8 KB).
- Accessibility: shapes are `aria-hidden` and meaning is always in text; cap colour is never the only variant cue;
  amber and ivory scenes use charcoal text.
- Mobile: 25vw module; compositions re-designed vertically (arch above, text below), morph as a vertical sequence,
  shapes cropped inside their scene.

## 11. Risks and premium guardrails

**Risks:** childish or corporate flat illustration; "Memphis" confetti; loss of farm warmth; cows reduced to
cartoons; cap colours overused until the brand looks like a toy.

**Premium guardrails**
1. Five primitives only. Never add triangles, squiggles or confetti.
2. At least 40% milk-white ground in every composition. Air is what makes geometry expensive.
3. Animals and people appear only as real photographs or respectful plates inside masks, never built from shapes.
4. Each variant scene uses one cap colour; the four are seen together only on /milk and in the final CTA.
5. Flat colour, no gradients and no glows. Depth comes from overlap.
6. Every composition is cropped by the frame on at least one side.
7. Motion is limited to slide, quarter-turn and morph. Nothing bounces or pops.
8. Shapes never stand in for numbers or claims: a 16-dot ring is a test card illustration, not a result.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: strong shape vocabulary, palette and motion; missing colour roles (surface/muted/ok/pending/demo), Devanagari face, radius/shadow tokens, component states, motion tokens, negative prompts and hero-portrait, ESSENTIAL-world and journey prompts. Added all (Noto Sans Devanagari, as Outfit has no Devanagari); sandstone flagged as fill-only (2.0:1 on milk); image folder aligned to `styles/shape-design/`. Fonts OFL; no claim violations.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#0B3B32` | forest block: primary CTA block, deep chapter blocks | 11.3:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | label on forest block | 11.3:1 on primary |
| Secondary | `--c-secondary` | `#D9A47A` | Jodhpur sandstone: arches, blocks, info-panel block (fill only; ink text on it 7.4:1) | 2.0:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | DESIGO® circle, links, focus ring, progress bar | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk ground, ≥ 40% of every composition |  |
| Surface | `--c-surface` | `#EFE9DC` | flat raised plane (inputs, facts table rows) | text on surface 14.6:1 |
| Text | `--c-text` | `#171918` | charcoal type on light | 16.1:1 on bg |
| Muted text | `--c-text-muted` | `#5C574C` | captions, labels | 6.5:1 on bg |
| Line | `--c-line` | `rgba(23,25,24,.14)` | ground lines, table rules; 4 px bars are `--c-accent` | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#171918` | verified tick in a circle · pending value text + dotted underline · DEMO circle badge fill, milk label | ok 4.7:1 · pending 5.7:1 · demo 16.1:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--earth` | `#8C6A43` | 8% offset shadow block (1 module, no blur), 12% flat bottle ellipse | |
| Style extra | `--gold` | `#C8A96B` | sun disc on heritage, ghee | |
| Style extra | `--indigo` | `#3E5C8A` | blue-city cube, once per page at most | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | stacked circles in base / deep / light (canopy) on deep forest; numeral "26" in light inside the largest circle; milk text |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | stepped blocks in base and deep (stepwell + strata) on light `#F3D9D6`; "14" across two blocks; charcoal text on light |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | huge base-amber sun disc half-set behind a deep-brown horizon block on milk; "3" in deep inside the disc; charcoal text |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | one ivory arch (base `#CDB89A`) on milk/light; "E" in deep `#4D4130` in the arch head; charcoal text |

**Dark-chapter inversion:** dark chapters (06, 11, 13, footer) use `--c-bg` → `#0B3B32` (or `#171918` for 11/13), `--c-text` → `#F7F4EC`, `--c-text-muted` → `#C9C3B5`, `--c-line` → `rgba(247,244,236,.18)`, primary block → milk fill with forest label, accent → `#7FE0B8` on charcoal; shapes keep their flat colours; logo turns white and never sits inside a shape.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Outfit | `@fontsource-variable/outfit` | 600–700 | clamp(3.5rem, 10vw, 11rem); numerals in circles clamp(4rem, 14vw, 14rem) | 0.9 | −0.03em | UPPERCASE hero, sentence elsewhere |
| Headline H1–H2 | Outfit 600 · Fraunces 300 italic for one editorial sentence per scene | `@fontsource-variable/outfit` · `@fontsource-variable/fraunces` | Outfit 600 · Fraunces 300i opsz 72 | H1 clamp(2.4rem, 5vw, 5rem) · H2 clamp(1.6rem, 2.8vw, 2.8rem) | 1.0 | −0.02em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | 1rem, measure 58ch | 1.6 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | .72rem | 1.2 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | .8rem; 1.75rem trace input | 1.3 | 0 | as data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 500–600 | display +6% | 1.2 | 0 | — |

Licence: Outfit, Fraunces, Inter Tight, JetBrains Mono and Noto Sans Devanagari are all SIL OFL 1.1 via @fontsource. Pairing: Outfit's circle-based skeleton matches the monoline wordmark and the five primitives; Fraunces italic keeps one human sentence per scene.

### 12.3 Layout & surfaces
- **Grid:** 12 columns (5vw margins, 24 px gutters, max 1440 px) overlaid with a shape module of 8vw desktop / 25vw mobile; shapes snap to the module, text to the columns; every composition is cropped by the viewport on ≥ 1 side
- **Spacing scale:** 4 px base for UI (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128); composition spacing in modules (½ · 1 · 2 · 3)
- **Radius scale:** sm 0 (buttons, panels) · md 50% (circles) · lg arch `999px 999px 0 0` (semicircular head, width:height 1:1.5); pill only for the circle badge
- **Border style:** none on shapes (flat fills); UI frames 2 px solid where needed; 4 px accent bar for trace links/progress
- **Shadow / elevation:** no blur anywhere: one 8% `--earth` offset block (1 module) per composition; bottle sits on a flat `--earth` ellipse at 12% instead of a blurred contact shadow
- **Texture / overlay:** 2% paper grain on sandstone blocks only; everything else flat; no gradients, no glows

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: label on a forest block that slides in from the left; Inter Tight 600 caps milk + arrow as a small 8 px circle. 52 px high (44 px sm), padding 0 28 px, radius 0. Default: block present · hover: a second sandstone block slides in under the label from the left (240 ms), circle-arrow travels 6 px, magnetic ≤ 6 px · focus-visible: 2 px accent ring offset 3 px · active: block shifts 2 px down-right onto its earth offset · disabled: block at 30%, label muted · loading: circle-arrow rotates as a half-disc quarter-turn loop (1200 ms). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: label + circle-arrow with a 2 px charcoal underline, no block; hover: block slides in at 12% forest behind the label (240 ms) · focus-visible: accent ring · active: underline 4 px · disabled: muted · loading: underline fills left → right repeatedly (1200 ms).
- **Text / arrow link**: Inter Tight 500 with a half-disc 'underline' that grows under the text on hover (240 ms) and a 6 px circle arrow travel · focus-visible: accent ring · active: half-disc fills · disabled: muted, no shape · loading: n/a.
- **Icon button** (incl. menu): 44 px circle, 2 px stroke icon built from primitives (menu = two bars; close = two bars crossed at 90°). Hover: circle fills sandstone · focus-visible: accent ring · active: quarter-turn 90° (240 ms) · disabled: 30% · loading: half-disc rotates. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 72 px bar on milk or forest only, never over a shape; the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style). Six links in Inter Tight 600 caps; RESERVE as the primary block button. Active link marked by a 6 px accent circle below. Mobile: 56 px bar; the menu is a full-screen milk sheet where links stack as large Outfit lines each with its primitive (arch, circle, block…) as a 24 px marker; Esc closes, focus returns.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 12 px solid charcoal circle · hover: 44 px ring that turns into a half-disc under the link · ROTATE: 72 px circle split into two half-discs that rotate with drag, `DRAG` · EXPLORE: 64 px arch outline `EXPLORE` over shape compositions and the orbit · ENTER: block outline `ENTER` on /milk arches and inner-page links · VIEW: 64 px arch outline `VIEW` on photographs · TRACE: ring with a 4 px bar tail `TRACE` on trace nodes. Disabled: 30% circle. Touch: none; tap targets ≥ 44 px.
- **Card / panel / info block**: a flat block (sandstone or milk-2), radius 0, padding 1 module × ½ module (32 px min), no shadow except the optional earth offset block. Hover (if linked): offset block slides from 0 to 1 module (240 ms) · focus-visible: accent ring · loading: an empty arch outline (EmptyArchSlot) naming the missing asset.
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): circle or block tags, Inter Tight 600 .66rem caps. Pending verification: milk block with `--c-pending` text and dotted underline `PENDING APPROVAL`; DEMO · not live data: 64 px charcoal circle with milk `DEMO` and a block label `NOT LIVE DATA`, always visible on demo content; ILLUSTRATIVE tag on the trace map.
- **Input + form field** (Trace-your-milk bottle ID): trace input in a long block: JetBrains Mono 1.75rem, 64 px high, milk-2 fill, 2 px charcoal bottom bar, label above; demo `DSG-BTL-000001-3 (sample format)` prefilled. Default · hover: bar thickens to 4 px · focus-visible: 2 px accent ring + accent bar · active: caret · disabled: 30% · loading: result shapes stack into a bottle silhouette line by line (`aria-live=polite`) · error: pending-earth text + circle icon.
- **Divider / ornament**: a 4 px bar in accent (journey/trace) or a ground line (1 px `--c-line`) with a half-disc set on it; never triangles, squiggles or confetti.
- **Section header** (chapter number + title pattern): chapter number set inside a 64 px circle (Outfit 600) + label caps + title in Outfit 600; the composition's primitive enters from the frame edge (900 ms).
- **Product info block** (variant name, code, price-pending, size, descriptors): sandstone block (ink text 7.4:1): code line in mono, name in Outfit 600 48 px, Fraunces italic editorial line; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; descriptors with 6 px circle bullets; `RESERVE ———→` block button.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the real render stands inside an arch, a large circle (sun or cap colour) behind it, a block plinth under it, flat `--earth` ellipse at 12% beneath; the photographic glass against flat geometry is the premium moment. Float ±8 px / 6 s, tilt ±8°, circle parallax 0.5× opposite. Before 360 frames: ±25° turn with sheen, circle rotates once per 60 s; after: drag, 72-tick ring around the circle with the current frame as a solid dot, counter `036 / 072` mono.
- **Trace node / timeline step**: each node is its primitive (FARM arch, COLLECTION circle, BATCH block, CHILLER block, BARREL circle-in-block, PLANT block stack, BOTTLE silhouette, YOU circle) linked by a 4 px bar that fills with scroll. Default: outline 2 px milk on forest · hover: fills sandstone · focus-visible: accent ring · active: fills accent, panel opens (block) · disabled/not reached: 30% · loading: bar fill pulses. Label "Illustrative journey — not live data" always visible; nodes are buttons.

### 12.5 Iconography & illustration
Icons: built from the five primitives (circle + block = chiller; arch + circle = farm), 2 px stroke or solid, square ends, 24 px grid. Illustration: flat-shape plates only (SH series), no gradients; animals and people never built from shapes. Photo treatment: real photography masked by shapes (farm photos in arches, breed portraits whole-animal in circles, delivery in blocks), warm grade, subject centred with headroom for the crop.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | shape enter (slide from frame edge, one axis) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | quarter-turns, chapter block wipe |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | mask reveal 0.6 → 1.0 |
| `--dur-micro` | `240ms` | hover blocks, circle-arrow |
| `--dur-reveal` | `900ms` | shape enter |
| `--dur-scene` | `1200ms` | morph circle ↔ arch ↔ bottle, 90°/180° rotation |
| `--dur-wipe` | `700ms` | full-screen block transition in next chapter's colour |
| `--stagger` | `120ms` | between shapes; max 5 animated shapes per viewport |

Signature: the chapter 03 morph (hill → arch → circle → 16-dot circle → block → block stack → bottle silhouette) scroll-scrubbed with `scrub: 1`, using pre-computed equal-point paths. No scaling from zero, no bounce, no pop. Reduced motion: static compositions, morph shown as a static strip, block wipes become cross-fades (200 ms).

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *warm natural light, restrained premium palette of milk white #F7F4EC, deep forest green #0B3B32, earth brown #8C6A43 and warm gold #C8A96B, flat colour, no gradients, calm, high-end, no text, no watermark, no logo, no letters*

| # | File path (web/public/desigo/styles/shape-design/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| SH-H1 | `web/public/desigo/styles/shape-design/jodhpur-arches.png` | 3200×2000 (16:10) | no | Flat geometric composition inspired by Jodhpur fort architecture: three tall semicircular arches and a sun disc, sandstone #D9A47A, earth #8C6A43 and milk white #F7F4EC, no people, empty central arch | base negatives + gradients, 3D shading, triangles, confetti, Memphis squiggles | Ch. 01 hero background, posters |
| SH-H2 | `web/public/desigo/styles/shape-design/jodhpur-arch-portrait.png` | 1400×2400 (7:12) | no | Flat geometric vertical poster: one tall sandstone #D9A47A semicircular arch with a large green #1E7A68 circle behind its head and a block plinth below, milk white #F7F4EC ground, empty arch interior | base negatives + gradients, 3D shading, triangles, confetti | Ch. 01 hero (mobile) |
| SH-V1 | `web/public/desigo/styles/shape-design/canopy-circles.png` | 3200×2000 + 1400×2400 portrait | no | Flat composition of overlapping circles in three greens #1F5C45, #0A2A20 and #D9E8DF suggesting a tree canopy, large empty clearing at center | base negatives + leaf detail, gradients, outlines | MASTER 26 world |
| SH-V2 | `web/public/desigo/styles/shape-design/stepwell-blocks.png` | 3200×2000 + 1400×2400 portrait | no | Flat geometric abstraction of a Rajasthani stepwell seen frontally, stacked rectangular steps in deep red #B3202A and oxblood #4A0A0F on blush #F3D9D6, strict symmetry, no texture | base negatives + perspective depth, water, people, gradients | ROOT 14 world |
| SH-V3 | `web/public/desigo/styles/shape-design/sun-horizon-amber.png` | 3200×2000 + 1400×2400 portrait | no | Minimal flat poster of a huge amber #E89A1C sun disc half set behind a single straight horizon block in deep brown #5A3304, milk-white sky | base negatives + sun face, rays, gradients, clouds | BASE 3 world |
| SH-V4 | `web/public/desigo/styles/shape-design/ivory-arch.png` | 3200×2000 + 1400×2400 portrait | no | Single flat ivory #F4EDE2 semicircular arch with a sand #CDB89A edge block on a milk-white ground, vast empty space, utterly calm | base negatives + ornament, gradients, second arch, people | ESSENTIAL world |
| SH-J1 | `web/public/desigo/styles/shape-design/journey-primitives.png` | 3600×1600 (9:4) | yes (real alpha) | Flat row of geometric primitives on transparent background: a half-disc hill, a sandstone arch, a circle, a ring of sixteen small dots, a block and a stack of three blocks, evenly spaced on one ground line, earth, sandstone and forest colours | base negatives + bottle shapes, arrows, gradients, people, animals | Ch. 03 journey poster / social; ch. 06 static fallback |
| SH-T1 | `web/public/desigo/styles/shape-design/sandstone-grain.png` | 2048×2048, seamless | no | Seamless fine sandstone grain texture in warm #D9A47A, very subtle, flat lighting | base negatives + cracks, carvings, strong shadows | Sandstone blocks (2% overlay) |
| SH-T2 | `web/public/desigo/styles/shape-design/paper-grain-milk.png` | 2048×2048, seamless | no | Seamless very fine uncoated poster paper grain in milk white #F7F4EC, flat even light, almost invisible fibres | base negatives + folds, stains, foxing | Poster exports, print |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. UI shapes are drawn in code (SVG/`clip-path`); these plates are for posters, social and hero backgrounds. The bottle silhouette is traced from the real render, never generated.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/49_shape-design.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/shape-design/
