# 42 · Clay Render — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Clay Render is a **3D illustration language**: scenes and objects modelled in 3D and rendered as if sculpted from matte clay. It uses a single unglazed material, soft global illumination, gentle subsurface glow at thin edges, rounded bevels, tiny tool marks and fingerprints, and an almost monochrome palette with one or two accent tones. It grew from the architect's "clay render" (a model rendered in plain white to judge form and light) and from the 2020s Blender and Cinema 4D illustration scene.

**How it differs from `11_claymorphism`.** Claymorphism (doc 11) is a **UI technique**: inflated, pastel, double-shadowed cards and buttons, playful and toy-like. Clay Render (this doc) leaves the **UI flat and editorial** and applies clay only to **illustrations and scenes**: dioramas, still lifes and objects rendered with the restraint of an **architectural maquette** or a museum model. The palette is tonal (milk-white clay, terracotta, sand), not pastel candy, and nothing on the interface is puffy. One is a toy; the other is a sculpted model in a gallery.

Reference points:
1. **Architectural clay renders and white study models** (e.g., the maquettes in Peter Zumthor's and Studio Mumbai's work; Studio Mumbai's Indian craft-led models are a strong local reference).
2. **Contemporary clay-render illustrators** (the Blender "clay" scene, Six N. Five's soft sculptural worlds, Apple's 3D environmental illustrations): soft light, few materials, perfect composition.
3. **Indian terracotta craft technique** (Molela and Gorakhpur terracotta, Khurja pottery): hand-pressed form, kiln colour and visible finger marks. We borrow the *material and technique*, not devotional subjects.

## 2. Fit for DESIGO® — score 3.5 / 5

**Why it fits.** Clay is *matti*, the soil the farms stand on, and the material of the kulhad, matka and bilona pot. A tonal clay world can explain farms, the journey and the bilona process with warmth and calm while staying premium (maquette, not toy). Clay and glass are a beautiful material contrast: the real glass bottle standing in a clay world looks even clearer. It also solves imagery gaps without faking photographs, because clay is obviously illustration.

**Where it fights.** (1) Clay cows can easily become cute mascots, which is disrespectful and against the brand rules. (2) Clay texture near milk can suggest dust or dirt, so it must stay clean and kiln-fired, not muddy. (3) High-quality 3D production is costly and slow. (4) Overused, it reads like a startup illustration pack.

**Recommendation.** Use it as the **illustration system** for chapter 03 (journey), /origin, Ghee (the bilona process) and the 2×2 /milk worlds, on an Editorial or Minimalism base. Not for evidence chapters.

## 3. Art direction

### Palette ("fired and unfired clay")
| Token | Hex | Role |
|---|---|---|
| `--cr-milk-clay` | `#EFE9DE` | Unfired white clay: the main sculpt colour |
| `--cr-milk-clay-shade` | `#D9CFBF` | Clay in shadow |
| `--cr-terracotta` | `#B8704C` | Fired terracotta accent (pots, soil) |
| `--cr-terracotta-deep` | `#7E4530` | Terracotta shadow |
| `--cr-sand` | `#DCC6A0` | Sand clay (Thar ground) |
| `--cr-sage-clay` | `#A9BCA8` | Green-tinted clay for grass and trees (muted) |
| `--cr-earth` | `#8C6A43` | Brand earth |
| `--cr-ground` | `#F7F4EC` | Page ground (brand milk) |
| `--cr-forest` | `#0B3B32` | UI text on light, nav, dark sections |
| `--cr-gold` | `#C8A96B` | Light: warm key light colour, ghee |
| `--cr-ink` | `#171918` | Body text |

Scenes use at most **three clay tones plus one accent**.

### Typography
The UI stays editorial and flat, which is the key difference from Claymorphism.
- Display: **Fraunces** 300–400, opsz 144, SOFT 50, tight leading 0.95.
- Text/UI: **Inter Tight** 400/500.
- Labels on scenes: **Inter Tight** 500 uppercase +0.18em, 12px, set outside the render with hairline leaders.
- Data: **JetBrains Mono**.

### Texture and imagery
- **Material:** one matte clay shader (roughness 0.85–0.95), subsurface radius 1–2mm in scene scale, a subtle micro-noise bump, plus *occasional* fingerprints and tool marks (one per hero object, not a pattern).
- **Light:** a large soft key from the top-left (warm, 4800K), a cool fill (6500K, low), soft contact shadows and generous ambient occlusion. Every scene uses the same light rig.
- **Camera:** 50–85mm equivalent, slight elevation (15–25°), shallow depth of field on hero scenes.
- **Cows and people:** maquette-scale figures (as in an architectural model): simplified but anatomically correct zebu forms (hump, dewlap, long ears), standing calmly, no faces, no eyes, no expressions, no props for comedy. People are simple respectful figures dressed accurately.
- **Glass and milk are never clay.** The real bottle render, any milk pour and the ghee jar are composited as real materials into clay scenes.
- **Photography** stays real and separate. Clay never imitates a photograph of DESIGO®'s farm.

### Iconography
Flat 1.5px line icons in `--cr-forest`, not clay. The interface stays crisp.

### Grid
12 columns, margins 6vw, gutters 24px. Clay scenes are rendered in fixed frames (16:9 desktop, 4:5 mobile) or as transparent cut-outs that sit on the page ground with a matched contact shadow. Text occupies columns 1–5 or 8–12, and scenes the opposite side.

## 4. Motion & interaction language
- **Tempo.** Gentle and weighted. Reveals 650ms `cubic-bezier(.16,1,.3,1)`; scenes 1200ms `cubic-bezier(.65,0,.35,1)`; turntable loops 16s linear.
- **Turntable.** Hero clay scenes slowly rotate ±12° on a hidden turntable (pre-rendered as 48-frame sequences or a real-time GLB). Scroll scrubs the rotation inside pinned chapters.
- **Build-up.** Scenes assemble piece by piece, as if placed on a model table: each object drops 16px and settles (500ms, stagger 80ms, no bounce).
- **Cursor.** Default: a 14px forest dot. Over a clay scene: a 40px ring with a small "rotate" arc (drag rotates the turntable ±12°). Over hotspots: the ring tightens and shows the label. Over the bottle: "drag · turn". Over links: a 4px dot grows to 28px with a forest 10% fill.
- **Hover.** Clay objects with information lift 6px and gain a stronger contact shadow (pre-rendered hover frame or a GLB transform). Text links: hairline underline drawn left to right (300ms). Buttons: the brand underline and travelling arrow.
- **Reduced motion.** Single still renders; no turntable, no build-up.

### The bottle
The real glass bottle stands on a **clay plinth** (a hand-pressed milk-white clay block with soft finger marks on its edges), lit by the same rig as the clay so the composite is seamless. A real contact shadow is rendered on the plinth (a shadow-catcher pass) for each variant. Idle: the bottle floats a few millimetres above the plinth (±5px over 6s) and the shadow breathes in sync. Pointer tilt ±6°. When 360 frames arrive, the viewer replaces the still and the clay plinth turns with it (the plinth rendered as a matching 72-frame sequence or GLB).

## 5. Variant worlds — four clay still lifes

| Variant | Clay world | Tones | Accent | Composition |
|---|---|---|---|---|
| MASTER 26 (V1+) | A clay forest-floor maquette: rounded clay trees, a small grove, scattered clay leaves | `#A9BCA8`, `#7F9A86`, `#EFE9DE` | Deep green light `#1F5C45` in the background gradient | Bottle on a plinth inside a clearing |
| ROOT 14 (V1) | Stepped terracotta strata, like a cut through red earth, with clay grass on top | `#B8704C`, `#7E4530`, `#E8D3C4` | Ground light `#B3202A` at 20% in the backdrop | Bottle on the top step |
| BASE 3 (V2) | Rolling sand-clay field with rows of clay wheat and a large flat clay sun disc | `#DCC6A0`, `#C99E5E`, `#EFE9DE` | Amber backdrop `#E89A1C` → `#F8E4C2` | Bottle in front of the sun disc |
| ESSENTIAL (V3) | One white clay plinth on a white clay floor: nothing else | `#EFE9DE`, `#D9CFBF` | Ivory `#F4EDE2` backdrop | Pure form, the gallery piece |

The info panel is flat and editorial at columns 9–12: V-CODE in mono, name in Fraunces, the `desigo.ts` line, price *pending*, descriptors *pending*. Herb counts are never sculpted as numbers of objects until the claims are approved.

## 6. Page-by-page treatment

1. **Hero.** Milk ground. The bottle on its clay plinth, with a small milk-white clay maquette of a farm landscape (dunes, a khejri tree, a shed) behind it, softly out of focus. "MILK FROM THE SOURCE." in Fraunces; "Traceable milk from indigenous Indian cows." The maquette turns 4° with the pointer.
2. **The bottle becomes the story.** Six small clay objects appear around the pinned bottle, one per word: ORIGIN (a clay field tile), BREED (a calm zebu figure in profile), FEED (a clay bundle of fodder), FARM (a shed), QUALITY (a clay test card with 16 pressed dots), TRACE (a clay path). Each settles onto the table as its word appears.
3. **From cow to bottle.** The style's best page: a long clay maquette table with seven stations. The camera dollies along it; the milk line is a real white liquid line composited through the clay (or a white clay channel with a glossy milk fill).
4. **Where it begins.** Real farm photography leads. One clay maquette of the farm layout (approved by DESIGO®) explains geography. `AssetSlot`s for missing photos.
5. **Breeds.** Real portraits or the D-set engraved plates, *not* clay. The clay style stops here to keep the breeds dignified. Each breed "*pending approval*".
6. **Traceability.** A clay relief map (terracotta and white clay), the route pressed in as a groove with eight clay node buttons; the pulse is a white light travelling the groove (1.5s per hop). "Illustrative journey, not live data".
7. **Quality.** Flat, crisp, editorial: the large "16" and the list. Values "— pending lab confirmation". One small clay test card as the only object.
8. **The four milks.** §5 still lifes, one per screen, the turntable scrubbed by scroll.
9. **Milk as material.** A real milk pour into a clay kulhad (composite of the real pour footage and a clay render), the ribbon canvas as fallback.
10. **Heritage.** A terracotta still life (a matka, a kulhad and a bilona pot), lit warm, with approved heritage copy. Credit the craft tradition.
11. **Technology.** Seven white clay blocks in a row, each with a pressed icon for one verb. The statement "Tradition is the source. Technology protects the journey." No devices or screens in clay.
12. **Ghee.** The bilona process in clay: a pot, the wooden churn (rendered in clay with a wood accent), the butter, the slow heat. The real ghee jar composited at the end. Three grades, prices *pending*.
13. **Trace your milk.** A flat card UI; the result plays as the clay relief map lighting up step by step. DEMO badge.
14. **Story.** A flat editorial timeline; only verified 2019 in production.
15. **Final CTA.** The hero maquette returns, pulled back to show the whole clay world, and the bottle in front. "Know where your milk comes from."

### Inner pages
- **/milk**: the four clay still lifes in a 2×2 grid, each a small gallery piece.
- **/milk/[variant]**: still-life hero, 360 viewer on the clay plinth, facts, "Trace this bottle".
- **/ghee**: the clay bilona sequence in five steps.
- **/origin**: photo essays plus the clay farm maquette.
- **/trace**: the clay relief map full screen.
- **/technology**: the seven verb blocks.
- **/about**: editorial, one terracotta still life.
- **/reserve**: a flat form; the return loop as a small clay model of a doorstep with glass bottles (real glass composited).

## 7. Component variants
`ClayScene` (pre-rendered sequence or GLB, with turntable) · `ClayPlinth` (bottle stage with shadow catcher) · `MaquetteTable` (JourneyTrack) · `ClayReliefMap` (TraceMap) · `ClayObjectOrbit` (chapter 02) · `ClayStillLife` (variant world) · `BuildUp` (settle animation) · `RotateCursor` · `FlatInfoPanel` · `AssetSlot` as an empty clay plinth with a flat label naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Clay palette, flat UI type | Tokens, specimen, **clay material + light rig file** | UI fully flat; body ≥ 7:1 | 3D artist engaged | 3 |
| 2 | Shell (nav, footer, cursor) | Editorial shell, rotate cursor | Shell components | Cursor states documented | none | 3 |
| 3 | Hero + bottle | Bottle on clay plinth + maquette | `ClayPlinth`, hero | Glass composite seamless; shadow matches | Bottle renders, hero render | 5 |
| 4 | Bottle → story | Six clay objects | Chapter 02 | No cartoon cow; review by DESIGO® | Clay object set | 3 |
| 5 | Cow → bottle | Maquette table | `MaquetteTable` | Ops check of stations; mobile vertical | Ops reference | 5 |
| 6 | Origin / farm | Photo + maquette | Chapter 04 | Maquette layout approved | Farm photos, layout | 3 |
| 7 | Breeds | Real plates, no clay | Chapter 05 | Pending labels | D1–D6 | 3 |
| 8 | Traceability map | Clay relief map | `ClayReliefMap` | Keyboard nodes; DEMO label | `traceNodes` | 3 |
| 9 | Quality | Flat lab page | Chapter 07 | Values pending | Lab approval | 2 |
| 10 | Four worlds + 360 | Four still lifes + turntable | Chapter 08 | Plinth sequence aligned with 360 frames | A, 4 renders | 6 |
| 11 | Heritage | Terracotta still life | Chapter 10 | Craft credited | Reference photos | 3 |
| 12 | Technology | Seven verb blocks | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Clay bilona sequence | Chapter 12 | Matches DESIGO®'s real process | Process walkthrough, jar | 4 |
| 14 | Trace-your-milk demo | Relief map reveal | Chapter 13 | DEMO visible | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Still lifes lazy-loaded | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Clay never imitates real photos | Photos | 4 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Verified milestones only | Copy approval | 3 |
| 18 | Mobile pass | 4:5 renders | Mobile layouts | Sequences ≤ 24 frames on mobile | none | 3 |
| 19 | A11y + reduced motion | Still renders | Alt text for every scene | No turntable or build-up | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover, Blender source files | Each scene sequence ≤ 1.2 MB; LCP < 2.5s | all | 4 |

Total ≈ 68 days (3D production in parallel from phase 1).

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- A **3D artist** (Blender) for about five weeks: light rig, clay material, about 14 scenes and an object set.
- Ops references for the maquette table and farm layout; the bilona process walkthrough.
- Approval of the zebu figure design before any cow appears in clay.
- Real farm, cow and people photography for the photo-led chapters.

### Images to generate (concept and look-development only; final scenes are rendered by the 3D artist; save under `web/public/desigo/styles/clay-render/`)
Append the house-style tail. No text, no logos, no bottles, no faces.

| # | File | Size | Prompt |
|---|---|---|---|
| CR1 | `hero-maquette.png` | 3200×2000 + 1400×2400 | Soft matte clay render of a small architectural maquette of a Rajasthani farm landscape with low dunes, a khejri tree and a simple shed, unglazed milk-white clay with subtle finger marks, warm soft studio light, gentle ambient occlusion, shallow depth of field, a clay plinth empty at centre front |
| CR2 | `plinth.png` (transparent) | 2000×1400 | Hand-pressed rectangular milk-white clay plinth with soft finger marks on its edges, matte, soft top-left light, transparent background |
| CR3 | `world-master-26.png` | 3200×2000 | Matte clay render of a small forest-floor grove with rounded sage-green clay trees and scattered clay leaves, deep green #1F5C45 background light, empty clearing at centre |
| CR4 | `world-root-14.png` | 3200×2000 | Matte clay render of stepped terracotta earth strata cut in section with clay grass on top, crimson #B3202A background glow, empty top step at centre |
| CR5 | `world-base-3.png` | 3200×2000 | Matte sand-clay field with rows of simple clay wheat and a large flat clay sun disc behind the centre, amber #E89A1C to cream background, empty centre |
| CR6 | `world-essential.png` | 3200×2000 | A single milk-white clay plinth on a white clay floor in a soft ivory #F4EDE2 room, gallery calm, nothing else |
| CR7 | `bilona-clay.png` | 3200×2000 | Matte clay still life of an earthen pot with a wooden churning stick and rope, terracotta and milk-white clay, warm light, respectful, no people |
| CR8 | `zebu-figure.png` (transparent) | 1600×1600 | Maquette-scale matte clay figure of an Indian zebu cow standing calmly, accurate hump, dewlap and long ears, no facial features, simplified architectural model style, milk-white clay, transparent background |

## 10. Performance, accessibility and mobile
- Turntables are pre-rendered image sequences (AVIF, 48 frames desktop, 24 mobile, ≤ 1.2 MB per scene) drawn on a canvas, rather than real-time 3D, unless a GLB is clearly lighter.
- Optional real-time GLB scenes are Draco-compressed (≤ 2.5 MB), lazy, and replaced by stills on low-power devices.
- Every clay scene has descriptive alt text ("Clay model of the seven stations from farm to bottle").
- Reduced motion: single stills.
- Mobile: 4:5 crops, the bottle on its plinth at 48vh, the maquette table becomes a vertical sequence of station renders.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Maquette, not toy.** Tonal clay, one light rig, no pastel candy colours and no inflated UI. The interface stays flat (this is not Claymorphism).
2. **Cows are dignified figures.** No faces, eyes, smiles, cartoon proportions or comic poses. Breeds chapter uses real portraits or plates, never clay.
3. **Glass, milk and ghee are never clay.** Real renders and footage are composited in.
4. Clay is clean and kiln-fresh: no dust, crumbs or mud near milk.
5. Fingerprints are rare signatures (one per hero object), not a texture.
6. Numbers of objects never imply unapproved claims (no 26 sculpted herbs until approved).
7. Clay never imitates DESIGO®'s real farm as if it were documentary.

**Risks**: cuteness, cost and the "illustration pack" look. Mitigation: the maquette brief, an experienced 3D artist with one shared rig, and a limited set of about 14 scenes.

**Best used for:** the journey (chapter 03), /origin farm maquette, the Ghee bilona process and the /milk 2×2 still lifes, as the illustration system on an Editorial base.
