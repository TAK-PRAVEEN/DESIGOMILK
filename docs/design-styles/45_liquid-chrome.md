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
9. **Milk as material.** No chrome. Pure milk-white ribbons. The contrast proves milk is milk.
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
