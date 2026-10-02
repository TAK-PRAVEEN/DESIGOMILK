# 45 · Liquid Chrome — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Liquid Chrome renders type and objects as **molten, mirror-polished metal**: letterforms that look poured and blobby, high-contrast reflections of an environment, soft bulges and drips, often animated so the chrome flows and ripples. It comes from the Y2K revival, music artwork (album covers and festival posters from 2019 onward), 3D type tools (Cinema 4D, Blender, Spline) and the "liquid metal" T-1000 memory. It is bold, sensual and very fashion-led.

For a milk brand this needs a careful translation. Chrome reflects its surroundings, so we make chrome that **reflects a milk-white world**: pale, pearly and soft, rather than black-and-silver club chrome. We also tie the metal to something true. **Stainless steel is the honest metal of dairy**: milk cans, chillers, tanks and ladles are all steel. Our chrome is "polished dairy steel", used for the variant numerals (26 · 14 · 3 · E), for steel props, and for one launch moment. **The milk itself never becomes metal and never turns grey.**

Reference points:
1. **Liquid chrome 3D typography** (the Spline and C4D chrome-type wave of 2020–24; Off-White, Nike and music-festival campaigns): the source look.
2. **Dairy stainless steel**: milk cans, bulk chillers and polished ladles, the material that already surrounds milk and keeps it clean.
3. **Anish Kapoor's mirror sculptures** (e.g. *Cloud Gate*, the *Sky Mirror* series): chrome as a calm surface that shows the world around it, a premium, gallery-grade use of reflection.

## 2. Fit for DESIGO® — score 2 / 5

**Why it can fit.** The four numerals (26, 14, 3, E) are strong typographic objects, and in polished steel they become launch-worthy sculptures. Reflective steel connects to real dairy hygiene, and the reflections let each variant world appear *in* the numeral. It delivers the "Apple product launch" gloss.

**Where it fights.** (1) Chrome is cold, synthetic and fashion-led, while DESIGO® is soil, cows and craft. (2) **Liquid metal near milk evokes contamination** (mercury, heavy metals) and is the worst possible association for a food brand. (3) Chrome reflections can turn a white bottle grey. (4) The style dates quickly and is everywhere in music and streetwear.

**Recommendation.** Not for the whole site. Use it for **the four numerals in the product chapter**, the **Technology chapter's steel**, and **one launch film or campaign**. Chrome is never fluid near milk: in DESIGO®'s use it is **solid, polished steel** that may ripple only in its own surface reflections.

## 3. Art direction

### Palette ("pearl steel")
| Token | Hex | Role |
|---|---|---|
| `--lc-milk` | `#F7F4EC` | Page ground; the environment chrome reflects |
| `--lc-pearl` | `#ECEDEA` | Chrome mid-tone (light reflection) |
| `--lc-steel-hi` | `#FFFFFF` | Specular peaks |
| `--lc-steel` | `#C3C8C6` | Brushed steel |
| `--lc-steel-mid` | `#8E9592` | Chrome mid shadow |
| `--lc-steel-deep` | `#3C4441` | Chrome deep reflection (with a green cast, not blue) |
| `--lc-forest` | `#0B3B32` | Horizon band reflected in chrome; nav; dark chapters |
| `--lc-green` | `#1E7A68` | Links |
| `--lc-gold` | `#C8A96B` | Warm reflection accent; ghee |
| `--lc-ink` | `#171918` | Body text |
| `--lc-ink-muted` | `#5C5A52` | Muted text (6.3:1 on milk) |

The **reflection environment** (an HDRI) is a milk-white studio with a single forest-green horizon band and a soft gold window. Every chrome object reflects this, so chrome in DESIGO® always looks pale, with a forest stripe: recognisably *ours*.

### Typography
- Chrome display (numerals only): a custom 3D extrusion of **Fraunces** 900 numerals (26 · 14 · 3 · E) with rounded bevels, rendered as chrome. The "liquid" look comes from inflated bevels (1.5% of glyph height) and soft corner melting, not from drips.
- Display (non-chrome): **Fraunces** 300–400.
- Text/UI: **Inter Tight** 400/500.
- Data: **JetBrains Mono**.
- Chrome is **never** used for running text, body copy, the wordmark or any word of more than three characters.

### Texture and imagery
- Chrome objects: pre-rendered (Blender Cycles) or real-time (Three.js `MeshPhysicalMaterial`, metalness 1, roughness 0.05–0.12) with the DESIGO® HDRI.
- **Brushed steel** (roughness 0.35, anisotropy): for props (milk can, ladle, chiller panel) in the Technology chapter.
- Real photographs of polished dairy steel (cans, tanks) with reflections of the actual plant (with consent and ops sign-off).
- No drips, no pours of metal, no puddles, no mercury-like beads.

### Iconography
Flat 1.5px line icons; never chrome.

### Grid
12 columns, margins 6vw. Chrome numerals are huge (40–60vh tall) and always **behind** the bottle in z-order, offset to columns 7–12, so the bottle stands in front of its numeral like a sculpture in front of a monument.

## 4. Motion & interaction language
- **Tempo.** Smooth, weighted, precise. Reveals 700ms `cubic-bezier(.16,1,.3,1)`; scene transitions 1200ms `cubic-bezier(.65,0,.35,1)`; numeral rotation scrubbed.
- **Reflection motion.** The numerals barely move; instead the **environment rotates** (HDRI rotation 0 → 40° across a chapter, scrubbed), so light flows across the surface like liquid. This gives the "liquid" quality without melting anything.
- **Surface ripple.** On first reveal only, a single soft ripple passes across a numeral's surface (normal-map wave, 1200ms, amplitude barely visible). Never repeated as a loop.
- **Cursor.** Default: a 14px forest dot. Over a chrome numeral: the cursor becomes a soft light source; the numeral's specular highlight follows it (real-time) and the label "26 · MASTER" (etc.) appears beside the cursor. Over the bottle: "drag · turn". Over links: the dot grows to 28px with a 10% forest fill.
- **Hover.** Buttons: the brand underlined label and travelling arrow, with the arrow head in brushed steel (a 2-frame sheen). Links: hairline underline in 300ms.
- **Reduced motion.** Static renders; no environment rotation; no ripple.

### The bottle
The bottle stands in front of its chrome numeral, which **reflects the bottle back** (a pre-rendered reflection pass, or a real-time reflection of a billboard of the render), so the numeral and bottle feel physically together. Crucially, the bottle and milk keep their **true colour**: the bottle sits in a milk-white light and is never placed where chrome bounce light would grey it. Contact shadow on a milk-white floor. Idle float ±6px over 6s; pointer tilt ±6°. With 360 frames, dragging the bottle also rotates the environment reflected in the numeral, so turning the bottle makes light move across the steel.

## 5. Variant worlds — four numerals

Each world is the same pearl-steel numeral, reflecting a different environment. Milk-white bottle in front.

| Variant | Numeral | Reflected environment | Ground | Rim light | Notes |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | **26** | Forest-canopy HDRI: deep greens `#1F5C45`, `#0A2A20`, with dappled light | Gradient `#D9E8DF` → `#F7F4EC` | Green bounce on the numeral only | Herb count (26) is *pending*; the numeral is the product name, not a claim |
| ROOT 14 (V1) | **14** | Red-earth cliff HDRI `#B3202A` → `#4A0A0F` | `#F3D9D6` → milk | Warm red rim on the numeral | — |
| BASE 3 (V2) | **3** | Golden-hour field HDRI `#E89A1C` with a low sun | `#F8E4C2` → milk | Amber sun streak across the numeral | Herb count conflict logged; numeral is the name only |
| ESSENTIAL (V3) | **E** | Plain ivory studio `#F4EDE2`, single soft window | Ivory | None: the purest pearl | The calmest of the four |

Info panel (flat, columns 1–4): V-CODE in mono, name in Fraunces, the `desigo.ts` line, price *pending*, descriptors *pending*.

## 6. Page-by-page treatment

1. **Hero.** Milk-white studio. **No chrome yet**: the bottle alone, with "MILK FROM THE SOURCE." and "Traceable milk from indigenous Indian cows." The chrome is saved for later chapters, so it feels earned.
2. **The bottle becomes the story.** The six words orbit the pinned bottle in flat Fraunces; behind it a pale steel ring (a polished band, like a can's rim) rotates its reflection slowly as the ground moves from milk to forest.
3. **From cow to bottle.** Flat, editorial horizontal track; at the CHILL and PLANT stations, the drawings are replaced by real photographs of polished steel (can, chiller) to show where metal genuinely belongs.
4. **Where it begins.** No chrome. Real farm photography.
5. **Breeds.** No chrome. Plates, regions, "*pending approval*".
6. **Traceability.** Forest ground; the route as fine brushed-steel rails with eight polished node studs; the pulse is a light reflection sliding along the rail (1.4s per hop). "Illustrative journey, not live data".
7. **Quality.** Lab white; the "16" as a brushed-steel numeral (not liquid, not shiny), the 16 parameters listed. Values "— pending lab confirmation".
8. **The four milks.** **The style's home**: §5 numerals, each 50vh tall behind its bottle, the environment rotating with scroll. A 1200ms crossfade of reflections between variants while the numeral morphs (26 → 14 → 3 → E) as a smooth chrome shape transition, the one "liquid" moment allowed, and it happens in the numeral, far from the milk.
9. **Milk as material.** No chrome. Plain milk-white ribbons. The contrast proves milk is milk.
10. **Heritage.** No chrome. Paper and serif.
11. **Technology.** Brushed and polished steel: seven steel tags engraved (as a render) with ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER, hung on a steel rail. "Tradition is the source. Technology protects the journey."
12. **Ghee.** Gold, not chrome: a warm brass-gold reflection on a polished lota beside the ghee jar (brass is the honest metal of the Indian kitchen); three grades, prices *pending*.
13. **Trace your milk.** A brushed-steel plate with an engraved-look input field; results slide in as steel tags. DEMO badge.
14. **Story.** Flat timeline; only verified 2019 in production.
15. **Final CTA.** The four numerals line up in a row, small and pale, reflecting the forest footer; the bottle in front. "Know where your milk comes from."

### Inner pages
- **/milk**: the four numerals in a 2×2 grid, each reflecting its world, bottles in front.
- **/milk/[variant]**: the numeral hero, the 360 viewer moving the reflection, facts on milk, "Trace this bottle".
- **/ghee**: brass-gold hero, editorial process.
- **/origin**: no chrome.
- **/trace**: the steel rail map.
- **/technology**: the steel tag rail and real steel equipment photographs.
- **/about**: no chrome.
- **/reserve**: plain form; one small steel numeral for the chosen variant.

## 7. Component variants
`ChromeNumeral` (pre-rendered sequence or real-time mesh, HDRI rotation) · `NumeralMorph` (26 → 14 → 3 → E) · `DesigoHDRI` (shared environment) · `SteelRing` (chapter 02) · `SteelRail` (TraceMap) · `SteelTag` (Technology and Trace-your-milk) · `BrushedNumeral` (Quality "16") · `LightCursor` (moves the specular highlight) · `ReflectionPass` (bottle reflected in numeral) · `AssetSlot` as a plain steel plate naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Pearl-steel palette, chrome rules | Tokens, **chrome usage rules**, specimen | Chrome only on numerals/props; body ≥ 7:1 | none | 3 |
| 2 | Shell (nav, footer, cursor) | Light cursor, flat shell | Shell components | Flat UI everywhere | none | 3 |
| 3 | Hero + bottle | Chrome-free hero | Hero | Bottle colour true; no grey cast | Bottle renders | 5 |
| 4 | Bottle → story | Steel ring | Chapter 02 | Ring behind bottle; words flat | Copy | 3 |
| 5 | Cow → bottle | Steel only where real | Chapter 03 | Real steel photos at CHILL/PLANT | Steel photos | 3 |
| 6 | Origin / farm | Chrome-free | Chapter 04 | Real photos | Farm photos | 2 |
| 7 | Breeds | Chrome-free | Chapter 05 | Pending labels | D1–D6 | 2 |
| 8 | Traceability map | Steel rails | `SteelRail` | Keyboard nodes; DEMO label | `traceNodes` | 3 |
| 9 | Quality | Brushed "16" | Chapter 07 | Brushed, not liquid | Lab approval | 2 |
| 10 | Four worlds + 360 | Numerals + morph | `ChromeNumeral`, `NumeralMorph` | Morph ≤ 1200ms; milk white in all worlds | A, 4 HDRIs, 3D artist | 6 |
| 11 | Heritage | Chrome-free | Chapter 10 | — | Copy approval | 2 |
| 12 | Technology | Steel tags | Chapter 11 | Public vocabulary; real equipment only with ops sign-off | Plant steel photos | 4 |
| 13 | Ghee | Brass-gold | Chapter 12 | No chrome; prices pending | Lota, jar | 3 |
| 14 | Trace-your-milk demo | Steel plate | Chapter 13 | DEMO visible | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Numerals as sequences on mobile | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Chrome only on /technology and /trace | Photos | 3 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Verified milestones only | Copy approval | 3 |
| 18 | Mobile pass | Pre-rendered chrome | Mobile layouts | No real-time 3D on mobile | none | 3 |
| 19 | A11y + reduced motion | Static renders | Stills | Numerals have text equivalents | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover, Blender files | Numeral sequences ≤ 900 KB each; LCP < 2.5s | all | 4 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C); a GLB of the bottle helps the reflection pass.
- A 3D artist for numerals, the morph and four HDRI environments (about three weeks).
- Real photographs of DESIGO®'s polished steel (cans, chiller, tanks) with ops sign-off on what may be shown.
- A brass lota and the ghee jar for the ghee chapter shoot.
- Confirmation that the numerals 26 and 3 may appear as *names* while the herb counts remain pending.

### Images to generate (environment and look-development only; final chrome is rendered in 3D; save under `web/public/desigo/styles/liquid-chrome/`)
Append the house-style tail. No text, no letters, no numbers (the numerals are built in 3D), no logos, no bottles, no liquid metal pours.

| # | File | Size | Prompt |
|---|---|---|---|
| LC1 | `hdri-studio.png` | 4096×2048 equirectangular | Equirectangular studio environment, milk-white walls and floor, one horizontal deep forest-green band at the horizon and one soft warm-gold window light, even soft illumination |
| LC2 | `hdri-master-26.png` | 4096×2048 equirectangular | Equirectangular forest canopy interior with deep greens #1F5C45 and #0A2A20 and dappled sunlight |
| LC3 | `hdri-root-14.png` | 4096×2048 equirectangular | Equirectangular landscape of layered red sandstone cliffs, crimson #B3202A to oxblood #4A0A0F, warm light |
| LC4 | `hdri-base-3.png` | 4096×2048 equirectangular | Equirectangular golden wheat field at sunset with a low sun, amber #E89A1C haze |
| LC5 | `hdri-essential.png` | 4096×2048 equirectangular | Equirectangular minimal ivory #F4EDE2 gallery room with a single soft skylight |
| LC6 | `steel-ring.png` (transparent) | 2400×2400 | A wide polished stainless-steel ring like the rim of a milk can, pale pearly reflections with one thin forest-green band, front three-quarter view, transparent background |
| LC7 | `brushed-steel.png` | 2048×2048, seamless | Seamless brushed stainless-steel texture, fine horizontal grain, soft pale reflection, flat light |
| LC8 | `steel-tags.png` (transparent) | 3200×1200 | Seven blank brushed stainless-steel tags hanging from a polished steel rail, soft studio light, transparent background, blank surfaces |

## 10. Performance, accessibility and mobile
- Chrome numerals ship as **pre-rendered sequences** (48 frames desktop, 24 mobile, AVIF) by default. Real-time chrome (one Three.js context, PMREM-filtered HDRI ≤ 1 MB) only on desktop with good GPU tiers.
- HDRI rotation in real-time mode costs only a uniform change; sequences map scroll to frame index.
- Numerals are decorative; the variant name and number are always present as text.
- Contrast: never place text over chrome. Text sits on flat milk or forest panels.
- Reduced motion: single stills; no morph (a crossfade instead).
- Mobile: numerals 36vh, behind the bottle at 48vh; pre-rendered only.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **Milk stays milk-white.** No chrome milk, no grey milk, no chrome bottle, no chrome cap. The bottle is lit by milk-white light, never by chrome bounce.
2. **No liquid metal pours, drips, puddles or beads anywhere** (mercury and contamination associations). "Liquid" lives only in moving reflections and the one numeral morph.
3. **Chrome on numerals and steel props only.** Never on body text, the wordmark, cows, people or food.
4. **Pale "pearl steel" with a forest horizon.** No black-and-silver club chrome, no rainbow iridescence, no Y2K bubbles.
5. Steel is honest: real dairy steel photographs, approved by operations.
6. **Ghee is brass and gold, not chrome.**
7. Numerals 26 and 3 are product names; herb counts stay *pending* in copy.

**Risks**: contamination associations, a fashion or nightclub feel, greyed product colour, fast dating. Mitigation: solid steel instead of liquid metal, a pale DESIGO® HDRI, chrome-free milk chapters, and the style limited to the product numerals and Technology.

**Best used for:** the four variant numerals in chapter 08 and /milk, the Technology chapter's steel, and a single launch film or campaign key visual.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: chrome-usage rules, HDRI and palette were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, hero backdrops (landscape + portrait), a trace prompt and negatives. All added; primary set to steel-deep `#3C4441` (9.1:1) because pearl steel cannot carry text. "Pure" removed from the chapter 09 line. No font-licence issues (chrome numerals are Fraunces 900 outlines, OFL).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#3C4441` | Steel-deep: primary CTA, steel tag labels | 9.1:1 on bg; chrome deep reflection with green cast; CTAs |
| Primary ink | --c-on-primary | `#F7F4EC` | Milk on steel-deep | 9.1:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest: horizon band reflected in chrome, nav, dark chapters | 11.3:1 on bg |
| Accent | --c-accent | `#1E7A68` | DESIGO green: links, focus ring | 4.7:1 on bg; links and focus |
| Background | --c-bg | `#F7F4EC` | Milk page ground, the environment chrome reflects (`--lc-milk`) | — |
| Surface | --c-surface | `#ECEDEA` | Pearl mid-tone (`--lc-pearl`): flat panels | text on surface 15.0:1 |
| Text | --c-text | `#171918` | Ink (`--lc-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions (new token `--lc-ink-muted`) | 6.3:1 on bg, 5.9:1 on surface |
| Line | --c-line | `rgba(60,68,65,.18)` | Hairlines | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#0B3B32` | Verified / pending dotted underline / forest DEMO label | 7.1 / 7.1 / 11.3 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#1E7A68` (4.7:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Numeral **26** reflecting a forest-canopy HDRI; ground `#D9E8DF` → milk; green bounce on the numeral only (26 is the name, herb count *pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Numeral **14** reflecting a red-earth cliff HDRI; ground `#F3D9D6` → milk; warm red rim |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Numeral **3** reflecting a golden-hour field HDRI; ground `#F8E4C2` → milk; amber streak (herb-count conflict: name only) |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Numeral **E** in a plain ivory studio, single soft window; the calmest pearl |

Dark-chapter inversion: Traceability and Technology use forest `#0B3B32`; text milk `#F7F4EC` (11.3:1), muted `#B9C4BE`, CTA labels become steel `#C3C8C6` (7.4:1 on forest), rails and tags brushed steel, focus `#7FE0B8`; text never sits on chrome; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 300–400 (chrome numerals: Fraunces 900 outlines extruded in 3D, numerals only) | clamp(3rem, 1.5rem + 6.5vw, 8.5rem); numerals 40–60vh | 0.95 | −0.015em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` (Google Fonts) | wght 400, opsz 72 | H1 clamp(2.4rem, 1.5rem + 3.2vw, 4.75rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.02 | −0.005em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem | 1.4 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` (Google Fonts) | 400 / 500 | matches body | 1.7 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Chrome is never used for running text, the wordmark or any word over three characters. Pairing rationale: Fraunces numerals with inflated bevels become sculptures; everything readable stays flat in Fraunces light and Inter Tight.

### 12.3 Layout & surfaces
- **Grid:** 12 columns (gutter 24 px, 16 px mobile), margins 6vw, max-width 1440 px; chrome numerals 40–60vh tall at columns 7–12, always behind the bottle in z-order; info panels at columns 1–4
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Radius scale:** sm 0 px (panels) · md 2 px (badges, inputs) · lg 999 px (cursor, steel studs)
- **Border style:** 1 px hairlines `rgba(60,68,65,.18)`; steel plates use a rendered bevel image, never a CSS gradient pretending to be metal
- **Shadow / elevation:** UI flat; the bottle has a contact shadow on a milk-white floor and stands in milk-white light so chrome bounce never greys it; numerals carry a pre-rendered reflection pass of the bottle
- **Texture / overlay:** brushed steel (roughness 0.35, anisotropic) only in Technology and Trace; one shared DESIGO® HDRI (milk studio, forest horizon band, gold window)

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Steel-deep label (Inter Tight 600, 13 px, +0.16em, uppercase) with a 1 px underline and a brushed-steel arrow head; 48 px tall, padding 14 px 0. **States:** default label + underline · hover a 1 px frame draws itself (400 ms), the arrow head gets a 2-frame sheen and travels 6 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active frame fills steel-deep, label milk · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the sheen sweeps the arrow head on a 1 s loop, `aria-busy`. **Motion:** 300 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Forest label, 1 px hairline + arrow. **States:** default hairline · hover hairline redraws (300 ms), arrow +6 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading sheen loop. **Motion:** 300 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Green link with 1 px underline. **States:** default hairline · hover hairline redraws left → right (300 ms) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active forest · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 300 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px hit area, flat 1.5 px forest line icon (never chrome); menu icon two lines → ×. **States:** default flat icon · hover 10% forest circle · focus-visible 2 px `#1E7A68` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 240 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px flat milk bar, hairline after scroll; links Inter Tight 500 13 px uppercase forest; RESERVE as a steel-deep text button; no chrome in the nav. Mobile: flat milk sheet with Fraunces links. **States:** default forest links · hover hairline draws · focus-visible 2 px `#1E7A68` ring, 3 px offset · active current page: 2 px steel-deep underline · disabled n/a · loading n/a. **Motion:** sheet fade 300 ms. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 14 px forest dot; labels Inter Tight 500 11 px uppercase. **States:** default 14 px dot · hover grows to 28 px with a 10% forest fill · ROTATE "drag · turn" over the bottle; dragging also rotates the environment reflected in the numeral · EXPLORE over a chrome numeral the cursor becomes a soft light source: the specular highlight follows it and "26 · MASTER" (etc.) appears beside it · ENTER 24 px ring with an arrow → · VIEW ring reading "view" · TRACE small steel stud reading "trace" over the rail map. **Touch fallback:** no cursor; numerals are pre-rendered sequences mapped to scroll; no real-time chrome on mobile. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — Flat panel on milk or forest (never over chrome), radius 0, 1 px hairline, padding 32 px (24 px mobile). **States:** default flat · hover border darkens · focus-visible 2 px `#1E7A68` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton bars `#ECEDEA`. **Motion:** 700 ms reveal. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Flat 2 px label, Inter Tight 600 11 px uppercase. In Technology / Trace a SteelTag render sits beside the live-text label. **Pending verification**: earth-ink + dotted underline. **DEMO · not live data**: forest fill with milk text. **States:** default flat label · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fade 240 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Brushed-steel plate frame (render) around a 56 px milk field — text never sits on metal; bottle ID in JetBrains Mono 18 px; label above; demo ID prefilled; error earth-ink + icon. **States:** default milk field in steel frame · hover a sheen crosses the frame once · focus-visible 2 px `#1E7A68` ring, 3 px offset · active 2 px green focus ring · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading results slide in as steel tags (render) each with a live-text label. **Motion:** tag slide 700 ms. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — 1 px hairline; in Technology one polished rail render (8 px tall) at most. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** none. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Mono chapter number, Fraunces title; in chapter 08 the chrome numeral is the section marker (`aria-hidden`, the variant name and number repeat as text). **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** numeral's single surface ripple on first reveal (1200 ms). **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Flat info panel at columns 1–4: V-code (mono), name in Fraunces H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending*; numerals 26 and 3 are names, herb counts stay *pending* in copy. **States:** default static · hover descriptor shows its source note · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton. **Motion:** rows 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle in front of its pearl-steel numeral, which reflects the bottle back (pre-rendered pass); bottle and milk keep their true colour in milk-white light; contact shadow on a milk floor. **States:** default idle float ±6 px over 6 s · hover pointer tilt ±6° · focus-visible 2 px `#1E7A68` ring, 3 px offset · active drag turns the 360 viewer and rotates the environment reflected in the numeral · disabled n/a · loading still render + plain steel-plate `AssetSlot`. **Motion:** HDRI rotation 0 → 40° per chapter, scrubbed. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — SteelRail node: polished 16 px steel stud (render sprite) on fine brushed rails over forest; label Inter Tight 13 px milk + mono ID. **States:** default stud · hover stud highlight brightens · focus-visible 2 px `#1E7A68` ring, 3 px offset · active a light reflection slides along the rail 1400 ms per hop; panel opens · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading studs appear in sequence. **Motion:** hop 1400 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** flat 1.5 px line icons in forest, 24 px grid; never chrome
- **Illustration technique:** Blender Cycles or Three.js `MeshPhysicalMaterial` (metalness 1, roughness 0.05–0.12) numerals with inflated bevels (1.5% of glyph height) and the shared DESIGO® HDRI; brushed steel props (roughness 0.35); no drips, pours or beads of metal
- **Photo treatment:** real photographs of DESIGO® polished dairy steel (cans, chiller, tanks) with ops sign-off; ghee shot with brass lota and gold light, never chrome

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scenes, numeral morph |
| `--dur-micro` | 300 ms | hairlines, sheen |
| `--dur-reveal` | 700 ms | reveals |
| `--dur-scene` | 1200 ms | scene transitions; 26 → 14 → 3 → E morph |
| `--hdri-rotate` | 0 → 40° per chapter, scrubbed | light flowing across chrome (signature 'liquid') |
| `--ripple` | 1200 ms, once on first reveal | numeral surface normal-map wave |
| `--float` | ±6 px / 6000 ms | bottle idle |
| `--hop` | 1400 ms | rail reflection per node |
| `--scrub` | 1 | numeral sequences |

- **Signature transition:** the numeral morph in chapter 08 (26 → 14 → 3 → E, 1200 ms) with a cross-fade of reflections — the one 'liquid' moment, far from the milk
- **Scroll behaviour:** numerals barely move; the environment rotates instead so light flows across the surface
- **Reduced-motion fallback:** static renders; no HDRI rotation, no ripple; the morph becomes a 300 ms cross-fade

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _pale pearl stainless steel and a milk-white studio #F7F4EC with a single deep forest-green #0B3B32 horizon band and a soft warm-gold #C8A96B window, clean reflections, solid polished metal, calm, gallery-grade, premium, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| LC1 | `web/public/desigo/styles/liquid-chrome/hero.png` | 3200×2000 (16:10) | No | Seamless milk-white studio sweep with soft even light, a faint deep forest-green horizon band far behind, one soft warm window glow at left, empty centre, no objects | chrome objects, metal, grey cast, numbers | Hero desktop (chrome-free hero) |
| LC2 | `web/public/desigo/styles/liquid-chrome/hero-portrait.png` | 1400×2400 (7:12) | No | Portrait milk-white studio sweep, faint forest-green horizon band at mid-height, soft window glow, empty centre | chrome objects, grey cast | Hero mobile |
| LC3 | `web/public/desigo/styles/liquid-chrome/hdri-master-26.png` | 4096×2048 equirectangular | No | Equirectangular forest canopy interior with deep greens #1F5C45 and #0A2A20 and dappled sunlight | people, buildings, text | MASTER 26 numeral reflection |
| LC4 | `web/public/desigo/styles/liquid-chrome/hdri-root-14.png` | 4096×2048 equirectangular | No | Equirectangular landscape of layered red sandstone cliffs, crimson #B3202A to oxblood #4A0A0F, warm light | people, roads, text | ROOT 14 numeral reflection |
| LC5 | `web/public/desigo/styles/liquid-chrome/hdri-base-3.png` | 4096×2048 equirectangular | No | Equirectangular golden wheat field at sunset with a low sun, amber #E89A1C haze | people, machinery | BASE 3 numeral reflection |
| LC6 | `web/public/desigo/styles/liquid-chrome/hdri-essential.png` | 4096×2048 equirectangular | No | Equirectangular minimal ivory #F4EDE2 gallery room with a single soft skylight | objects, artworks | ESSENTIAL numeral reflection |
| LC7 | `web/public/desigo/styles/liquid-chrome/steel-rail-route.png` | 3600×2000, transparent | Yes (real alpha) | Top-down view of fine brushed stainless-steel rails forming a gentle route with eight small polished round steel studs, pale pearly reflections with a thin forest-green band, isolated on transparent background | liquid metal, drips, labels, numbers | Traceability (ch. 06), /trace |
| LC8 | `web/public/desigo/styles/liquid-chrome/brushed-steel.png` | 2048×2048, seamless | No | Seamless brushed stainless-steel texture, fine horizontal grain, soft pale reflection, flat light | scratches, rust, fingerprints | Steel plates, Technology |
| LC9 | `web/public/desigo/styles/liquid-chrome/hdri-studio.png` | 4096×2048 equirectangular | No | Equirectangular studio environment, milk-white walls and floor, one horizontal deep forest-green band at the horizon and one soft warm-gold window light, even soft illumination | objects, people | Shared DESIGO® HDRI for all chrome |
| LC10 | `web/public/desigo/styles/liquid-chrome/steel-ring.png` | 2400×2400, transparent | Yes (real alpha) | A wide polished stainless-steel ring like the rim of a milk can, pale pearly reflections with one thin forest-green band, front three-quarter view, transparent background | liquid metal, black chrome, rainbow | Chapter 02 steel ring |
| LC11 | `web/public/desigo/styles/liquid-chrome/steel-tags.png` | 3200×1200, transparent | Yes (real alpha) | Seven blank brushed stainless-steel tags hanging from a polished steel rail, soft studio light, transparent background, blank surfaces | engraving, letters, numbers | Technology (ch. 11), Trace-your-milk results |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/45_liquid-chrome.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/liquid-chrome/
- [ ] No liquid-metal pours, drips, puddles or beads anywhere; chrome only on numerals and steel props
- [ ] Bottle and milk keep true colour (checked against the source render, no grey cast)
- [ ] Numerals have text equivalents; numeral sequences ≤ 900 KB each; no real-time chrome on mobile
