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

**Why it fits.** DESIGO® has a lot to **explain**: a seven-step journey, a node-based trace system, a 16-point screen, four variants with different feeds, breed rotation, returnable glass. Vector art explains complex systems cleanly, animates smoothly with scroll (SVG / Lottie / Rive), is light for Indian mobile networks, and stays consistent across web, packaging, social and DESIGO®'s farm, plant and delivery apps. It is also an honest choice while real photography is pending: illustration is clearly illustration, never a fake photo.

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

---

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Excellent vector grammar; missing were colour roles (muted text, states), font packages and sizes, component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Fraunces, Inter Tight, Manrope). Body fix: replaced an internal system name with the public wording "farm, plant and delivery apps".

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1E7A68` | primary illustration fill, CTAs, active states | 4.7:1 vs bg (text-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | label on green | 4.7:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | line colour, dark fills, focus ring (11.6:1) | 11.3:1 vs bg (body-safe) |
| Accent | --c-accent | `#C8A96B` | sun, ghee, highlights in illustrations | decorative only (2.1:1), never text; focus ring uses --c-secondary |
| Background | --c-bg | `#F7F4EC` | milk ground | 16.1:1 with text |
| Surface | --c-surface | `#EFE9DC` | light shape fills, diagram panels | text on surface 14.6:1 |
| Text | --c-text | `#171918` | body text (charcoal) | 16.1:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#3F645B` | captions, illustration labels (forest at 78%) | 6.0:1 vs bg (text-safe) |
| Line | --c-line | `rgba(11,59,50,.18)` | hairlines, diagram guides | decorative; strokes at 100% forest are 11.6:1 |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#C8A96B` / `#0B3B32` | ok = green filled node; pending = 1px dotted gold underline + "PENDING" tag; dashed outline on unconfirmed diagram steps; DEMO = forest tag on every animated demo step | DEMO tag milk on forest = 11.6:1; pending diagram steps are dashed forest outlines (11.6:1) |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | layered forest hills, 26 small leaf shapes (*pending*) in a ring orbiting 40 s/rev: `#0A2A20`, `#1F5C45`, `#D9E8DF`, gold sun |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red earth strata with root lines drawing downward, grazing cow: `#4A0A0F`, `#B3202A`, `#F3D9D6` |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | low large sun over a flat horizon, three leaves (*pending*): `#5A3304`, `#E89A1C`, `#F8E4C2` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | a single horizon line and one circle: `#4D4130`, `#CDB89A`, `#F4EDE2` |

Dark-chapter inversion: Technology (ch. 11) and /technology use tech mode: `--c-bg` → `#171918`, `--c-surface` → `#0B3B32`, `--c-text` → `#F7F4EC`, `--c-primary` → `#7FE0B8` (signal data lines), line → `rgba(127,224,184,.24)`, muted → `#9FD3C2`, logo → white.

Additional style tokens (kept from §3): `--va-mint` `#9FD3C2`, `--va-earth` `#8C6A43`, `--va-sand` `#D9C3A0`, `--va-signal` `#7FE0B8` (dark only). Rule: ≤ 5 fills + 1 line colour per illustration; gradients only two-stop within one hue (e.g. `#1E7A68 → #1F5C45`).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (alt. Manrope 700 for a technical feel) | `@fontsource-variable/fraunces` (alt. `@fontsource-variable/manrope`) | wght 500, opsz 144 | `clamp(3.25rem, 2rem + 6vw, 8rem)` | 1.0 | −0.02em | Sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 500 | H1 `clamp(2.6rem, 1.6rem + 4vw, 5rem)` · H2 `clamp(1.8rem, 1.3rem + 2vw, 3rem)` | 1.05 · 1.15 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight (illustration labels in forest) | `@fontsource-variable/inter-tight` | 600 | `clamp(.6875rem, .66rem + .12vw, .75rem)` (11–12 px) | 1.2 | +0.16em | Upper |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 / 500, tabular | `.875rem` | 1.4 | +0.02em | Upper |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 400 / 600 | matches body | 1.65 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Fraunces, Inter Tight, Manrope, JetBrains Mono, Noto Sans Devanagari: OFL 1.1, no replacement needed. Pairing: a warm editorial serif against precise geometric drawings keeps the system from feeling like a startup kit.

### 12.3 Layout & surfaces
- Grid: 12 columns, 24 px gutters, 5vw margins, max-width 1440 px; illustrations span 6–8 columns.
- Diagrams use fixed viewBoxes: 1600×900 desktop, a separately drawn 900×1600 for mobile (never scaled).
- Construction: every illustration on a 4 px grid inside a 24-unit module; stroke 1.5 px (2 px for hero art > 800 px; 1.75 px on mobile), round caps/joins.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Radius: `sm 2px` (small shapes, inputs) · `md 8px` (large shapes, panels) · `lg 8px`; pill only for cursor and milk drops.
- Border: 1.5 px forest lines; UI hairlines `rgba(11,59,50,.18)`.
- Shadow: flat offset darker fill down-right (no blur) inside illustrations; the photographic bottle keeps a vector contact shadow (ellipse with two-stop radial).
- Texture: none; Rajasthani jali / step-well geometry as background structure at ≤ 6% opacity.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: underlined label + travelling arrow inside a 1.5 px green frame (master system), 48 px, padding 14 px 22 px, radius 2 px, Inter Tight 600 upper. States: default · hover frame draws itself (400 ms), arrow travels 6 px, magnetic ≤ 6 px · focus-visible 2 px `#0B3B32` ring offset 3 px · active fill `#1E7A68` with milk label · disabled 40% · loading arrow morphs into a 3-dot vector loader. 44 px target.
- **Secondary button**: label + arrow with 1.5 px forest underline; hover underline draws left → right 240 ms; focus forest ring; active label green; disabled 40%; loading underline sweeps.
- **Text / arrow link**: Inter Tight with 1 px green underline; arrow `→` travels 4 px; focus forest ring.
- **Icon button (incl. menu)**: 44 px target, 24 px icon from the 60+ set (1.5 px stroke, round caps). Hover icon fills from outline (240 ms) · focus ring · active filled green · disabled 40%. Menu = two lines → X (240 ms). `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: milk bar 72 px (56 px mobile), hairline beneath, logo left, links Inter Tight label style, RESERVE primary. Mobile: menu sheet on `#EFE9DC` with each link paired with its 24 px vector icon, links 28 px Fraunces, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 12 px forest ring · hover ring fills 15% · over diagram nodes it snaps (magnetic ≤ 6 px) and shows the node label (TRACE) · ROTATE `DRAG` over the bottle · EXPLORE `EXPLORE` ring 48 px over scenes · ENTER `ENTER →` over landscape tiles · VIEW over photo insets · none over decorative illustration. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: card-free layout by default: diagram panels on `#EFE9DC`, radius 8 px, padding 24 px, no border; interactive tiles get a 1.5 px forest outline on hover and focus ring.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: Inter Tight 600 11 px upper, 24 px, radius 2 px. Pending verification: dotted gold underline + "PENDING" tag; unconfirmed diagram steps drawn dashed. DEMO · not live data: forest tag on every demo timeline step and on the Rive map.
- **Input + form field (Trace-your-milk bottle ID)**: 56 px, 1.5 px forest border, radius 2 px, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`, leading QR icon. States: hover border green · focus-visible forest ring 2 px · error `#B3202A` + message · disabled 40% · loading vector loader. Visible `<label>`; DEMO tag beside.
- **Divider / ornament**: 1.5 px forest line with a small geometric node (4 px circle) at each end; heritage uses a step-well geometry strip at 6%.
- **Section header (chapter number + title pattern)**: mono chapter number + 48 px icon that draws itself + Fraunces title + one lead line.
- **Product info block (variant name, code, price-pending, size, descriptors)**: V-CODE (mono), name (Fraunces 500), size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline, descriptors with vector bullet icons each pending-marked, feed diagram (herb counts *pending*), CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: photographic bottle in a vector world: geometric hill, gold sun disc, stylised grass at its base; vector contact shadow. Tilt ±8°. Bottle360Viewer framed by a thin vector turntable ring with 72 ticks that highlight the current frame.
- **Trace node / timeline step**: Rive node: idle (outline) · hover (fill 30%) · focus-visible (forest ring) · active (filled green + side panel) · pending (dashed). Timeline step = vector icon + mono time (DEMO) on a 1.5 px path; shape morphs connect steps. Steps also present as an HTML list.

### 12.5 Iconography & illustration
- Icon set (60+), 24 px grid, 1.5 px stroke, round caps and joins, 2 px corner radius: seven verbs, 16 quality parameters (abstract, never implying a health effect), breeds, delivery, glass return, QR, temperature, pin, herb.
- Illustration: the DESIGO® vector grammar (≤ 5 fills + 1 line colour, flat light from upper left, offset fills for shadow); breed-accurate cows checked against client photos; no Corporate Memphis people, no clip-art cows.
- Photography: paired with vector for proof (Origin, Breeds, bottle); shown as round insets inside vector scenes. Illustrations explain, photographs prove.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 800 / 1200 ms | hover · draw-on · morph |
| `--va-draw` | 800 ms ease-out; fill +200 ms | line draw-on then fill |
| `--va-morph` | 1200 ms ease-inout, `scrub: 1` | milk drop → can → barrel → bottle morphs |
| `--va-idle` | ≤ 6 s loops (tail flick, sun 2 px) | idle loops, paused off-screen |
| `--va-orbit` | 40 s per revolution | MASTER 26 leaf ring |
| `--va-wipe` | 1000 ms | shape-wipe section change |

- Engine: SVG + GSAP ScrollTrigger for scrubbed diagrams; Rive for interactive pieces (trace map node states, cow idle), Lottie fallback.
- No bouncy character animation; idle loops pause off-screen.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: final diagram states shown, morphs become static step sequences.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *precise flat geometric vector illustration, limited palette of milk white #F7F4EC, deep forest #0B3B32, green #1E7A68, mint #9FD3C2, earth #8C6A43, sand #D9C3A0 and gold #C8A96B, 1.5 px consistent strokes, flat light from upper left, two-stop gradients only, editorial and calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/vector-art/hero-landscape.png` | 3200×2000 (16:10) | no | Quiet flat vector horizon: a single Thar dune line, a gold sun disc, milk-white sky, subtle two-stop gradients, geometric construction, large empty centre (concept; production art redrawn as SVG) | 3D render, gradients mesh, people, clip art, isometric clutter | Hero (ch. 01) |
| 2 | `web/public/desigo/styles/vector-art/hero-portrait.png` | 1400×2400 (7:12) | no | Tall flat vector composition: gold sun disc high, dune line low, milk-white sky, empty centre | 3D, people, clip art | Hero mobile |
| 3 | `web/public/desigo/styles/vector-art/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Flat geometric vector landscape of layered forest hills in #0A2A20 and #1F5C45 under a pale #D9E8DF sky, a ring of small leaf shapes around an empty centre and a small gold sun | counted labels, 3D, gradients mesh, people | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/vector-art/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Flat vector red earth strata in horizontal bands #4A0A0F, #B3202A and #F3D9D6 with thin root lines descending, a small geometric zebu cow silhouette with hump grazing at one side, empty centre | cartoon face, Holstein, 3D, text | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/vector-art/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Flat vector scene: a large low amber #E89A1C sun disc over a flat #5A3304 horizon, pale #F8E4C2 sky, three simple leaf shapes, empty centre | 3D, lens flare, text | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/vector-art/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Minimal flat vector composition: one horizon line in #4D4130 and one circle in #CDB89A on a #F4EDE2 ground, minimum geometry | extra shapes, texture, text | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/vector-art/journey-vector-scene.png` | 3600×1200 (3:1) | yes (real alpha) | One continuous flat vector scene in a row: a breed-accurate zebu cow with hump and dewlap, a farm shed with a khejri tree, a steel milk can, a paper test card with sixteen cells, a milk chiller, a small dairy plant, a delivery bicycle with an empty crate, joined by a single milk-white path, isolated on transparent background | bottles, jars, Corporate Memphis people, cartoon faces, labels | Cow → bottle ch. 03 (concept for MorphSequence) |
| 8 | `web/public/desigo/styles/vector-art/technology-iso-pipeline.png` | 3200×2000 | no | Isometric flat vector pipeline of seven abstract modules on a charcoal #171918 ground connected by thin mint #7FE0B8 lines, precise, minimal | labels, screens with text, robots, neon purple | Technology ch. 11, /technology |
| 9 | `web/public/desigo/styles/vector-art/texture-jali.png` | 2048×2048, seamless | yes (real alpha) | Seamless tileable Rajasthani jali lattice geometry, thin forest-green lines on transparent background, very regular, low visual weight | ornament clutter, text, shading | Background structure at ≤ 6% |
| 10 | `web/public/desigo/styles/vector-art/heritage-stepwell.png` | 3200×2000 | no | Flat geometric vector illustration of a Rajasthani step-well seen front-on, stepped triangles and landings in earth and gold, a simple bilona churn silhouette at the base, calm | people, text, 3D | Heritage ch. 10 |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/33_vector-art.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/vector-art/
- [ ] Every diagram has `<title>`/`<desc>` and an HTML list equivalent
- [ ] Each breed drawing checked against client photographs; ≤ 5 fills per illustration
