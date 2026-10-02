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

**Images to generate** (flat plates and textures only; `web/public/desigo/styles/shape/`; use the house-style tail
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
