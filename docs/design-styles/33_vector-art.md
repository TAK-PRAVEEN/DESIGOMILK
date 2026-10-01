# 33 · Vector Art — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Vector Art is illustration built from mathematical shapes: clean paths, flat or gently graded fills, consistent stroke weights and geometric construction. It scales perfectly, animates cheaply and explains clearly. At its best (premium editorial infographics, flagship product explainers) it feels precise and calm, not "corporate clip-art".

Reference points:
1. **Stripe and Linear marketing illustrations**: precise geometry, limited palettes, subtle gradients, isometric explanation.
2. **Monocle / Kinfolk-era editorial infographics and the Penguin / Pentagram systems**: flat shapes with an editorial voice.
3. **Indian line-and-shape traditions such as Warli and Gond**: shape-based storytelling. This is a *structural* reference (pictograms built from simple geometry), used respectfully, not imitated.

## 2. Fit for DESIGO® — score 4 / 5

**Why it fits.** DESIGO® has a lot to **explain**: a seven-step journey, a node-based trace system, a 16-point screen, four variants with different feeds, breed rotation, returnable glass. Vector art explains complex systems cleanly, animates smoothly with scroll (SVG / Lottie / Rive), is light for Indian mobile networks, and stays consistent across web, packaging, social and the RTCOM apps. It is also an honest choice while real photography is pending: illustration is clearly illustration, never a fake photo.

**Where it fights.** Vector art can look generic ("tech startup flat illustration") and loses the warmth, soil and reality that a provenance brand needs. Flat cows can feel childish. It cannot replace real farm photography as *proof*.

**Recommendation.** An excellent **system language for explanation**: Chapters 03 (journey), 06 (trace), 07 (quality), 11 (technology), /trace and /technology, plus icons sitewide. For the whole site, pair it with real photography in Origin and Breeds and with the photographic bottle. Illustrations explain, photographs prove.

## 3. Art direction

### Palette ("DESIGO® geometric")
| Token | Hex | Role |
|---|---|---|
| `--va-milk` | `#F7F4EC` | Ground |
| `--va-milk-2` | `#EFE9DC` | Shape fill (light) |
| `--va-forest` | `#0B3B32` | Line, dark fill |
| `--va-green` | `#1E7A68` | Primary illustration fill |
| `--va-mint` | `#9FD3C2` | Light green fill (tint of green) |
| `--va-earth` | `#8C6A43` | Soil, wood, cow coat |
| `--va-sand` | `#D9C3A0` | Desert, light earth |
| `--va-gold` | `#C8A96B` | Sun, ghee, highlights |
| `--va-charcoal` | `#171918` | Tech-mode ground |
| `--va-signal` | `#7FE0B8` | Data lines on dark |

Plus the four variant ramps (base/deep/light). **Rule:** each illustration uses at most five fills plus one line colour. Gradients are allowed only as two-stop linear fills within the same hue (e.g. `#1E7A68 → #1F5C45`).

### Typography
- Display: **Fraunces** 500 (keeps editorial warmth against geometric drawings).
- Text and UI: **Inter Tight**. Illustration labels are Inter Tight 600 uppercase, 11–12px, +0.16em, in forest.
- Data: **JetBrains Mono**.
- Alternative geometric display (if the client wants a more technical feel): **Manrope** 700, which matches the monoline wordmark.

### Construction rules (the "DESIGO® vector grammar")
- **Grid**: every illustration is drawn on a 4px grid inside a 24-unit module.
- **Stroke**: 1.5px at 1×, round caps and joins. One weight per illustration (2px for hero illustrations above 800px).
- **Corner radius**: 2px on small shapes, 8px on large. Never pill-round except for the cursor and milk drops.
- **Light**: flat, from the upper left. Shadows are a single darker fill offset down-right (no blur), except the photographic bottle.
- **Cows**: built from geometry but anatomically accurate per breed (Gir's domed forehead and curled horns, Tharparkar's lyre horns and white-grey coat, Kankrej's large lyre horns, Sahiwal's reddish coat and loose skin, Red Sindhi's deep red coat, Rathi's patched coat). Each breed drawing is checked against the client's photographs.
- **Indian geometry**: patterns from Rajasthani architecture (jali grids, step-well geometry) as background structure at 6% opacity.

### Iconography
A 24px icon set (60+ icons) on the same grammar: seven verbs, 16 quality parameters (abstract, never implying a health effect), breeds, delivery, glass return, QR, temperature, map pin, herb.

### Grid
12 columns, 24px gutters, 5vw margins. Illustrations occupy 6–8 columns. Diagrams use a fixed internal coordinate system (viewBox 1600×900) so scroll-linked animation stays stable across sizes. Mobile: diagrams switch to a vertical viewBox (900×1600), drawn separately rather than scaled.

## 4. Motion and interaction language
- **Engine.** SVG plus GSAP ScrollTrigger for scroll-scrubbed diagrams; **Rive** for interactive pieces (the trace map node states, the cow idle), with Lottie as a fallback.
- **Draw-on.** Lines draw (stroke-dashoffset) 800ms `cubic-bezier(.16,1,.3,1)`; fills fade in 200ms after their outline.
- **Morphs.** Shape morphs connect steps (a milk drop → a can → a barrel → a bottle), 1200ms `cubic-bezier(.65,0,.35,1)`, scroll-scrubbed with `scrub: 1`.
- **Idle loops.** Subtle, ≤ 6s: a cow's tail flicks once every 6s; the sun shifts 2px. All pause off-screen.
- **Cursor.** 12px ring in forest. Over diagram nodes it snaps (magnetic ≤ 6px) and shows the node label. Over the bottle: `DRAG`. Over illustrations: none.
- **Hover.** Icons fill from outline (240ms); buttons draw their frame (master system).
- **Transitions.** Section grounds change colour behind a single shape that scales up from the last element of the previous scene (a "shape wipe", 1000ms).

### The bottle
The bottle stays **photographic**. Vector art builds the world around it: a geometric hill, sun disc and stylised grass at its base; a soft vector contact shadow (an ellipse with a two-stop radial). Pointer tilt ±8°. In diagrams, a **vector bottle icon** (same silhouette, traced precisely from the render) is used for small-scale representation, which keeps the photo for hero moments. 360 viewer: standard, framed by a thin vector turntable ring with 72 tick marks that highlight with the current frame.

## 5. Variant worlds — four geometric landscapes

| Variant | Landscape | Fills | Detail |
|---|---|---|---|
| MASTER 26 (V1+) | Layered forest hills, 26 small leaf shapes (*pending*) in a ring | `#0A2A20`, `#1F5C45`, `#D9E8DF`, gold sun | The densest pattern; leaves orbit slowly (40s/rev) |
| ROOT 14 (V1) | Red earth strata with root lines, grazing cow | `#4A0A0F`, `#B3202A`, `#F3D9D6` | Horizontal bands; roots draw downward on entry |
| BASE 3 (V2) | Low sun over a flat horizon, three leaves (*pending*) | `#5A3304`, `#E89A1C`, `#F8E4C2` | Large sun disc |
| ESSENTIAL (V3) | A single horizon line and one circle | `#4D4130`, `#CDB89A`, `#F4EDE2` | Minimum geometry |

The info panel is a clean card-free layout: V-CODE (mono), name (Fraunces), price (*pending*), descriptors (*pending*) with vector bullet icons.

## 6. Page-by-page treatment

1. **Hero.** The photographic bottle on milk ground; behind it a quiet vector horizon (Thar dune line, sun disc in gold). "Milk from the source." CTAs.
2. **Bottle becomes the story.** Six words orbit, each with a 48px vector icon that draws itself.
3. **Cow to bottle.** **Flagship chapter**: one continuous vector scene scrolls horizontally: cow (breed-accurate) → farm → milking can → paper test card → chiller → plant → bottle. Shape morphs link the steps. Real photographs appear as small round insets (proof).
4. **Farm.** Real photography leads; vector only as a thin map overlay (location dot, *pending* public farm details).
5. **Breeds.** Real portrait (left) plus a precise vector profile (right) highlighting distinguishing features (horns, hump, coat), labelled. Pending breeds labelled.
6. **Traceability.** A Rive-driven node map: farm, collection, batch, chiller, barrel, plant, bottle, you. Each node has idle / hover / active states and a side panel. "Illustrative journey — not live data".
7. **Quality.** A clean diagram of the 16-point paper test: a vector test card with 16 cells that fill in sequence, each labelled. Values pending.
8. **Four milks.** §5 landscapes.
9. **Milk as material.** A vector milk ribbon (one SVG path animated with a noise-driven morph) or the canvas ribbon.
10. **Heritage.** Vector at its warmest: a step-well geometry background, a vector bilona churn and a cow, and an italic statement.
11. **Technology.** Charcoal ground, signal lines; the seven verbs as an isometric vector pipeline. "Tradition is the source. Technology protects the journey."
12. **Ghee.** A vector bilona churn animation (the churning motion, 4s loop), the photographic jar, three grades linked by lines to their source milk bottles.
13. **Trace your milk.** Input → an animated vector timeline of the demo journey, DEMO on every step.
14. **Story.** A clean vector timeline; verified 2019 only in production.
15. **Final CTA.** The landscape returns at dawn; the bottle centred. "Know where your milk comes from."

### Inner pages
- **/milk**: four landscapes as tiles; tap to enter.
- **/milk/[variant]**: landscape hero, 360 viewer with the tick ring, feed diagram (herb counts *pending*), facts.
- **/ghee**: vector process (milk → curd → churn → butter → ghee), each step drawn and described factually.
- **/origin**: photography plus a vector map and breed profiles.
- **/trace**: full Rive map.
- **/technology**: the isometric pipeline, one verb per screen.
- **/about**: timeline.
- **/reserve**: form plus a vector "glass loop" diagram (deliver → use → return → wash → refill, *pending ops confirmation*).

## 7. Component variants
`VectorScene` (viewBox-locked, scroll-scrubbed) · `MorphSequence` · `RiveTraceMap` · `BreedProfile` (photo + vector) · `TestCardDiagram` (QualityPanel) · `IconSet` (60+) · `TurntableRing` (360 viewer frame) · `IsoPipeline` (TechnologyGrid) · `ChurnLoop` (GheeScene) · `GlassLoop` · `ShapeWipe` · `AssetSlot` as a dashed vector frame with an icon naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and grammar | Palette + vector grammar | Tokens, grammar sheet, specimen | ≤ 5 fills per illustration; stroke rules documented | Brand colours | 3 |
| 2 | Shell and icons | Nav, footer, cursor, first 30 icons | Shell, `IconSet` v1 | Icons pixel-aligned at 24px | none | 4 |
| 3 | Hero and bottle | Bottle in vector horizon | Hero | Photo bottle + vector world integrate; LCP OK | Renders | 3 |
| 4 | Bottle → story | Icon orbit | Chapter 02 | Icons draw ≤ 800ms | Copy | 2 |
| 5 | Cow → bottle | Morph journey | `MorphSequence` | 60fps scrub; mobile vertical version drawn | B3/B4 for breed accuracy | 7 |
| 6 | Origin | Photo + map overlay | Chapter 04 | Farm details pending-labelled | B1, B2 | 2 |
| 7 | Breeds | Breed profiles | `BreedProfile` | Each profile checked against photos | B3 | 4 |
| 8 | Trace map | Rive map | `RiveTraceMap` | Keyboard + screen reader; DEMO | traceNodes | 5 |
| 9 | Quality | Test-card diagram | Chapter 07 | No implied health effects in icons | Test card photo (B6) | 3 |
| 10 | Four worlds + 360 | Landscapes + turntable | Chapter 08 | Tick ring syncs to frame | A | 5 |
| 11 | Heritage | Step-well + churn | Chapter 10 | Pattern opacity ≤ 6% | none | 3 |
| 12 | Technology | Iso pipeline | Chapter 11 | Public vocabulary | none | 4 |
| 13 | Ghee | Churn loop | Chapter 12 | Process copy factual; prices pending | Jar render | 3 |
| 14 | Trace demo | Animated timeline | Chapter 13 | DEMO every step | demoProvider | 3 |
| 15 | /milk pages | Product pages | 5 routes | Feed diagrams pending-labelled | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Reuse scenes, no duplication | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Glass loop marked pending | Ops confirmation | 3 |
| 18 | Mobile | Vertical viewBoxes | Mobile scenes | Separate compositions, not scaled | none | 4 |
| 19 | A11y + reduced motion | Static diagrams | `<title>/<desc>` on SVGs | Diagrams understandable without motion | none | 2 |
| 20 | Perf, QA, handover | Ship | Vector source files (Figma/AI), Rive files, reports | Total SVG/Rive ≤ 400 KB per page; LCP < 2.5s | all | 3 |

Total ≈ 71 days (illustration-heavy).

## 9. Assets needed from DESIGO®
- 360 sequences (A), vector wordmark (C).
- Breed photographs (B3) for anatomical accuracy, and approval of each breed drawing.
- A photo of the paper test card (B6) to redraw accurately (no third-party logo).
- Confirmed process facts for diagrams (chiller location, plant steps, return loop), each marked pending until approved.
- Herb lists per variant before drawing labelled herbs.

## 10. Performance, accessibility and mobile
- SVG inlined only for above-the-fold; the rest lazy-loaded. SVGO with precision 2. Rive runtime loaded only on pages with Rive.
- Each diagram has `<title>` and `<desc>`, and its steps are also present as an HTML list.
- Reduced motion: final states shown; morphs replaced by static step sequences.
- Mobile: dedicated vertical drawings; stroke weight 1.75px for small screens.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. One vector grammar, enforced. No mixed stock illustration packs.
2. No "corporate Memphis" people (tiny heads, giant limbs) and no clip-art cows. Breed-accurate drawings only.
3. Illustrations explain; real photographs prove. Never illustrate where a photo is required as evidence (farm, people, lab).
4. Limited palette (≤ 5 fills) and generous milk space.
5. Restrained, purposeful motion; no bouncy character animation.
6. Diagrams show only confirmed process steps; demo data is labelled.
7. The bottle on product pages is always photographic.

**Risks**: generic startup look, losing warmth, overpromising process detail. Mitigation: breed accuracy, editorial serif, photography pairing, pending labels on unconfirmed steps.

**Best used for:** the explanation layer (journey, trace map, quality test, technology pipeline and the sitewide icon system), paired with real photography.
