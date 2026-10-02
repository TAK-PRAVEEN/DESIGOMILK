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
| `--cr-ink-muted` | `#5C5A52` | Muted text, scene labels (6.3:1 on milk) |

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: material, light rig, palette and the difference from Claymorphism were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, a portrait hero, journey and trace prompts, a texture and negatives. All added. Primary set to terracotta-deep `#7E4530` (6.9:1); terracotta `#B8704C` (3.5:1) stays accent/illustration only. No claim or font-licence issues found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#7E4530` | Terracotta-deep: primary CTA, active states, chapter numbers | 6.9:1 on bg; fired-clay shadow `--cr-terracotta-deep`, CTAs and key accents |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk on terracotta-deep | 6.9:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest: UI text links, nav, dark sections | 11.3:1 on bg |
| Accent | --c-accent | `#B8704C` | Terracotta: pots, soil, active marks in diagrams | 3.5:1 on bg; terracotta `--cr-terracotta` for non-text marks and renders only |
| Background | --c-bg | `#F7F4EC` | Brand milk page ground (`--cr-ground`) | — |
| Surface | --c-surface | `#EFE9DE` | Unfired milk clay (`--cr-milk-clay`): flat info panels | text on surface 14.6:1 |
| Text | --c-text | `#171918` | Ink (`--cr-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions, scene labels (new token `--cr-ink-muted`) | 6.3:1 on bg, 5.7:1 on surface |
| Line | --c-line | `rgba(23,25,24,.14)` | Hairlines and leaders to scene labels | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#0B3B32` | Verified / pending dotted underline / forest DEMO label | 7.1 / 7.1 / 11.3 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#0B3B32` (11.3:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#A9BCA8` | Clay forest-floor grove in `#A9BCA8` / `#7F9A86` / `#EFE9DE`, deep green `#1F5C45` backdrop light |
| ROOT 14 (V1, red cap) | `#B3202A` | `#7E4530` | `#E8D3C4` | Stepped terracotta strata `#B8704C` / `#7E4530` / `#E8D3C4`, ground light `#B3202A` at 20% |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#C99E5E` | `#F8E4C2` | Sand-clay field `#DCC6A0` / `#C99E5E` with clay wheat and a clay sun disc; amber backdrop `#E89A1C` → `#F8E4C2` |
| ESSENTIAL (V3, ivory cap) | `#D9CFBF` | `#4D4130` | `#F4EDE2` | One white clay plinth on a white clay floor `#EFE9DE` / `#D9CFBF`, ivory backdrop; the gallery piece |

Dark-chapter inversion: dark sections (Technology, footer) use forest `#0B3B32`, text milk `#F7F4EC` (11.3:1), muted `#B9C4BE`, line `rgba(247,244,236,.18)`; CTAs switch to milk labels; clay renders keep the same light rig on a forest backdrop; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 300–400, opsz 144, SOFT 50 | clamp(3rem, 1.5rem + 6.5vw, 8.5rem) | 0.95 | −0.015em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 72, SOFT 50 | H1 clamp(2.4rem, 1.5rem + 3.2vw, 4.75rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.0 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 | 0.75rem (12 px), set outside renders with hairline leaders | 1.4 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 / 500 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: a soft, tight-leaded Fraunces echoes the sculpted forms while the UI stays flat and editorial in Inter Tight — the key difference from Claymorphism.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, gutter 24 px (16 px mobile), margins 6vw, max-width 1440 px; clay scenes in fixed frames (16:9 desktop, 4:5 mobile) or as transparent cut-outs with a matched contact shadow; text in columns 1–5 or 8–12, scenes on the opposite side
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 0 px (frames) · md 2 px (panels, inputs, badges) · lg 999 px (cursor only); softness lives in the renders, never in UI
- **Border style:** 1 px hairlines `rgba(23,25,24,.14)`; scene labels use 1 px leaders
- **Shadow / elevation:** UI is flat (no shadows). Renders carry baked ambient occlusion and contact shadows from one rig; the bottle gets a shadow-catcher pass on its clay plinth
- **Texture / overlay:** no UI texture; clay micro-noise and one fingerprint per hero object live only inside renders

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Terracotta-deep label (Inter Tight 600, 13 px, +0.16em, uppercase) with a 1 px underline and travelling arrow; 48 px tall, padding 14 px 0. **States:** default label + underline · hover a 1 px frame draws itself around the label (400 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active frame fills terracotta-deep, label milk · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading underline becomes an indeterminate 1 px bar, `aria-busy`. **Motion:** 300 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Forest label, same type, 1 px hairline + arrow. **States:** default forest label · hover hairline redraws left → right (300 ms), arrow +6 px · focus-visible 2 px `#0B3B32` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading indeterminate bar. **Motion:** 300 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest body link with 1 px underline. **States:** default hairline · hover underline redraws left → right (300 ms) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active terracotta-deep · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 300 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px hit area, flat 1.5 px forest line icon (never clay); menu icon = two lines → ×. **States:** default flat icon · hover a 10% forest circle fills behind · focus-visible 2 px `#0B3B32` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 240 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px flat milk bar with a 1 px hairline after scroll; links Inter Tight 500 13 px uppercase in forest; RESERVE as a terracotta-deep text button. Mobile: flat milk sheet with Fraunces 2.25rem links and one small clay plinth render at the bottom. **States:** default forest links · hover hairline draws · focus-visible 2 px `#0B3B32` ring, 3 px offset · active current page: 2 px terracotta-deep underline · disabled n/a · loading n/a. **Motion:** sheet fades 300 ms. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 14 px forest dot; labels Inter Tight 500 11 px uppercase. **States:** default 14 px dot · hover grows to 28 px with a 10% forest fill over links · ROTATE 40 px ring with a small rotate arc over clay scenes (drag turns the turntable ±12°); "drag · turn" over the bottle · EXPLORE 40 px ring reading "explore" over the maquette table · ENTER ring tightens to 24 px with an arrow → · VIEW ring tightens and shows the hotspot's label · TRACE ring with a groove dot reading "trace" over the relief map. **Touch fallback:** no cursor; turntables respond to swipe; hotspots are tappable buttons; stills on low-power devices. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — FlatInfoPanel: milk clay `#EFE9DE`, radius 2 px, 1 px hairline, padding 32 px (24 px mobile); no inflated or double shadows (this is not Claymorphism). **States:** default flat panel · hover border darkens; the linked clay object lifts 6 px (pre-rendered hover frame) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton bars `#D9CFBF`. **Motion:** 650 ms reveal. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Flat 2 px-radius label, Inter Tight 600 11 px uppercase, 1 px border. **Pending verification**: earth-ink `#6B4C2A` + dotted underline on the claim. **DEMO · not live data**: forest fill with milk text, on the relief map and every Trace-your-milk result. **States:** default flat label · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fade 240 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Flat card field 56 px, 1 px forest 30% border, radius 2 px; bottle ID in JetBrains Mono 18 px; label above; demo ID prefilled; error earth-ink + icon. **States:** default flat field · hover border 60% · focus-visible 2 px `#0B3B32` ring, 3 px offset · active 2 px forest border · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the clay relief map lights step by step. **Motion:** step 1500 ms. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — 1 px hairline, or one small clay pebble render (48 px transparent PNG) centred as an ornament, at most once per page. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** pebble settles 16 px (500 ms). **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Mono chapter number in terracotta-deep, Fraunces SOFT 50 title, one-line intro; the chapter's clay object settles beside it. **States:** default static · hover none · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** build-up: object drops 16 px and settles (500 ms). **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — FlatInfoPanel at columns 9–12: V-code (mono), name in Fraunces H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending*; herb counts are never sculpted as numbers of objects. **States:** default static · hover descriptor shows its source note · focus-visible 2 px `#0B3B32` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton. **Motion:** rows 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Real glass bottle on a hand-pressed milk-white clay plinth with soft finger marks, lit by the same rig, with a shadow-catcher contact shadow per variant. **States:** default idle float ±5 px over 6 s; the shadow breathes in sync · hover pointer tilt ±6° · focus-visible 2 px `#0B3B32` ring, 3 px offset · active drag turns the 360 viewer and the plinth turns with it (matching 72-frame sequence or GLB) · disabled n/a · loading still render + an empty clay plinth `AssetSlot`. **Motion:** `--ease-inout` float. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — ClayReliefMap node: a pre-rendered 32 px clay button pressed into a groove route on a terracotta-and-white relief; label Inter Tight 13 px + mono ID. **States:** default clay node · hover node lifts 2 px (hover frame) · focus-visible 2 px `#0B3B32` ring, 3 px offset · active a white light travels the groove 1500 ms per hop and the node glows · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading nodes appear one by one. **Motion:** hop 1500 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** flat 1.5 px forest line icons, rounded caps, 24 px grid — never clay
- **Illustration technique:** Blender clay renders: one matte clay shader (roughness 0.85–0.95, subsurface 1–2 mm), one light rig (warm 4800 K key top-left, cool 6500 K fill), 50–85 mm camera at 15–25° elevation; maquette-scale zebu figures without faces; glass, milk and ghee are never clay but composited real
- **Photo treatment:** real farm photography stays separate and natural; clay never imitates a DESIGO® farm photograph

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes, float |
| `--ease-settle` | `cubic-bezier(.22,.9,.24,1)` | build-up drop and settle (signature) |
| `--dur-micro` | 300 ms | hover |
| `--dur-reveal` | 650 ms | reveals |
| `--dur-scene` | 1200 ms | scene transitions |
| `--build` | 500 ms, drop 16 px, stagger 80 ms | objects placed on the model table |
| `--turntable` | 16 s linear loop, ±12° | hero clay scenes (48 frames desktop / 24 mobile) |
| `--float` | ±5 px / 6000 ms | bottle idle |
| `--hop` | 1500 ms | relief-map light |
| `--scrub` | 1 | turntable scrub in pinned chapters |

- **Signature transition:** build-up: each scene assembles piece by piece as if placed on a model table (drop 16 px, settle, no bounce)
- **Scroll behaviour:** scroll scrubs the turntable inside pinned chapters; the camera dollies along the maquette table in chapter 03
- **Reduced-motion fallback:** single still renders; no turntable, no build-up, no float

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _soft matte clay render, unglazed milk-white clay #EFE9DE with terracotta #B8704C and sand #DCC6A0, one warm soft key light from top-left with a cool fill, gentle ambient occlusion, architectural maquette restraint, shallow depth of field, calm, premium, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| CR1 | `web/public/desigo/styles/clay-render/hero-maquette.png` | 3200×2000 (16:10) | No | Small architectural clay maquette of a Rajasthani farm landscape with low dunes, a khejri tree and a simple shed, unglazed milk-white clay with subtle finger marks, a clay plinth empty at centre front | toy look, pastel candy, cows with faces, glossy plastic | Hero desktop |
| CR2 | `web/public/desigo/styles/clay-render/hero-maquette-portrait.png` | 1400×2400 (7:12) | No | Vertical crop of the same clay farm maquette, dunes and khejri tree in the upper half, an empty milk-white clay plinth in the lower middle | toy look, pastel candy, glossy plastic | Hero mobile |
| CR3 | `web/public/desigo/styles/clay-render/world-master-26.png` | 3200×2000 + 1400×2400 | No | Matte clay forest-floor grove with rounded sage-green clay trees #A9BCA8 and scattered clay leaves, deep green #1F5C45 background light, empty clearing at centre | cartoon trees, bright green, counted herbs | MASTER 26 world |
| CR4 | `web/public/desigo/styles/clay-render/world-root-14.png` | 3200×2000 + 1400×2400 | No | Matte clay render of stepped terracotta earth strata #B8704C and #7E4530 cut in section with clay grass on top, crimson #B3202A background glow, empty top step at centre | lava, glossy, toy | ROOT 14 world |
| CR5 | `web/public/desigo/styles/clay-render/world-base-3.png` | 3200×2000 + 1400×2400 | No | Matte sand-clay field #DCC6A0 with rows of simple clay wheat and a large flat clay sun disc behind the centre, amber #E89A1C to cream background, empty centre | sun face, neon, toy | BASE 3 world |
| CR6 | `web/public/desigo/styles/clay-render/world-essential.png` | 3200×2000 + 1400×2400 | No | A single milk-white clay plinth on a white clay floor in a soft ivory #F4EDE2 room, gallery calm, nothing else | objects, colour | ESSENTIAL world |
| CR7 | `web/public/desigo/styles/clay-render/maquette-table.png` | 6000×1600 | No | Long clay maquette table with seven small stations in a row: a calm faceless clay zebu cow with hump and dewlap, a farm shed, a milk can, a round test card with sixteen pressed dots, a chiller, a small dairy plant, a doorstep, joined by an empty white channel for a milk line | faces, eyes, smiles, bottle, people in comic poses | Cow → bottle (ch. 03) look-dev |
| CR8 | `web/public/desigo/styles/clay-render/relief-map.png` | 3200×2000, transparent | Yes (real alpha) | Top-down terracotta and white clay relief map with a pressed groove route and eight small round clay buttons along it, soft top-left light, isolated on transparent background | labels, numbers, real map borders | Traceability (ch. 06), Trace-your-milk |
| CR9 | `web/public/desigo/styles/clay-render/clay-surface.png` | 2048×2048, seamless | No | Seamless macro texture of smooth unglazed milk-white clay with fine micro-noise, flat even light | fingerprints pattern, cracks, dirt | Look-dev material reference |
| CR10 | `web/public/desigo/styles/clay-render/plinth.png` | 2000×1400, transparent | Yes (real alpha) | Hand-pressed rectangular milk-white clay plinth with soft finger marks on its edges, matte, soft top-left light, transparent background | bottle, objects on top | Bottle stage plinth |
| CR11 | `web/public/desigo/styles/clay-render/zebu-figure.png` | 1600×1600, transparent | Yes (real alpha) | Maquette-scale matte clay figure of an Indian zebu cow standing calmly, accurate hump, dewlap and long ears, no facial features, milk-white clay, transparent background | eyes, smile, cartoon proportions, Holstein spots | Chapter 02 BREED object (after approval) |
| CR12 | `web/public/desigo/styles/clay-render/bilona-clay.png` | 3200×2000 | No | Matte clay still life of an earthen pot with a wooden churning stick and rope, terracotta and milk-white clay, warm light, respectful, no people | jar, people, deities | Ghee (ch. 12) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/42_clay-render.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/clay-render/
- [ ] UI is fully flat (no inflated, double-shadow cards)
- [ ] Zebu figure design approved by DESIGO® before any cow appears in clay; no faces
- [ ] Glass, milk and ghee are composited real, never clay; each scene sequence ≤ 1.2 MB
