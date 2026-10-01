# 27 · Gothic — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Gothic design comes from medieval cathedral architecture and the Victorian Gothic Revival: pointed arches, tracery, blackletter type, deep shadow, candlelight, stained glass and vertical drama. In contemporary web and fashion it means dark backgrounds, ornate serif or blackletter display, heavy contrast and a ceremonial mood.

Reference points:
1. **Blackletter manuscripts and the Gutenberg Bible**: dense textura, red rubrication and drop caps.
2. **Alexander McQueen / Givenchy (Riccardo Tisci era) campaigns**: dark luxury, single object, candle-like light.
3. **Mehrangarh Fort, Jodhpur at night**: not Gothic historically, but it carries the same verticality, carved jharokha tracery, deep sandstone shadow and lamp-light. This is our bridge to DESIGO®.

## 2. Fit for DESIGO® — score 1 / 5 (whole site) · 2.5 / 5 (one ceremonial page)

**Where it fights the brand.** Milk stands for light, morning, nourishment and openness. Gothic stands for darkness, death, mystery and the Church. For a food brand, black backgrounds with ornate shadow can read as heavy or even ominous, and blackletter cuts legibility. Its European religious roots have no place in an Indian dairy story. As a whole-site language this is the poorest fit in the library.

**Where it can work.** The **Bilona ghee** ritual: slow, hand-churned, lamp-lit, ceremonial, made for festivals. Jodhpur's own fort architecture offers an Indian "gothic" vocabulary: pointed and cusped arches, carved stone screens and lamp niches. A **festival-night ghee edition** (Diwali, with ghee diyas) is ceremonial and dark in a way that suits the product.

**Recommendation.** Never use it as the site style. If used at all, use it for **one seasonal campaign page: "Bilona by lamplight"** (ghee, Diwali) built on Mehrangarh-style arches and diya light, *not* Christian or medieval European imagery. Blackletter is limited to one decorative initial. The full plan is written below for completeness. Only phases 1–3, 13 and 17–20 are recommended.

## 3. Art direction

### Palette ("Fort at lamplight")
| Token | Hex | Role |
|---|---|---|
| `--gt-night` | `#120E0B` | Base: warm black (not blue-black) |
| `--gt-stone` | `#2A211A` | Carved stone surfaces |
| `--gt-sandstone` | `#7A4E34` | Jodhpur red sandstone in shadow |
| `--gt-oxblood` | `#4A0A0F` | ROOT 14 deep, rubrication |
| `--gt-gold` | `#C8A96B` | Tracery lines, rules |
| `--gt-flame` | `#F2B45A` | Diya light (glow source only) |
| `--gt-ghee` | `#E8C77A` | Ghee highlight |
| `--gt-milk` | `#F7F4EC` | Text on dark, milk |
| `--gt-forest` | `#0B3B32` | Deep forest for MASTER world only |

Body text: `#F7F4EC` on `#120E0B` (≈ 17:1). Gold is for ornament and rules, never for long text.

### Typography
- Display: **Cormorant Garamond** 300–600 (OFL), high contrast, with italics for ceremony. Use **Cormorant SC** for labels.
- Decorative initial only: **UnifrakturCook** (OFL), one drop cap per page in oxblood or gold. It is never used for words.
- DESIGO® wordmark: unchanged vector.
- Body and UI: **Inter Tight** 400 at 17px/1.65 on dark (slightly larger for dark-mode legibility).
- Data: **JetBrains Mono** for any ID or demo field.
- Devanagari: **Tiro Devanagari Hindi** for "बिलोना" and festival words.

### Texture and imagery
- Carved-stone texture from real Jodhpur sandstone (photographed), at 6–10% over `--gt-stone`.
- **Jharokha arch frames**: SVG cusped arches (inspired by Rajput balconies) used as image masks and section portals.
- Light: every scene has one warm light source (diya, lamp, the sun through a jali screen) and falloff to near-black. Radial gradient `#F2B45A` at 18% → transparent at 60%.
- Photography: real ghee-making by lamp and early-morning light, shot low-key (chiaroscuro). No candles on altars, no crosses, no gargoyles, no skulls.

### Iconography
Thin gold line icons (1.25px) set inside small cusped-arch frames.

### Grid
Symmetric, vertical, 12 columns with a strong central axis. Content often sits in a centred 6-column "nave". Arched portals are 5:8 proportion. Vertical rhythm on a 12px baseline. Mobile: single centred column; arches narrow to 3:5.

## 4. Motion and interaction language
- **Scroll.** Slow and ceremonial: reveals at 900ms `cubic-bezier(.22,.9,.24,1)`. Light "breathes" (opacity 0.85 ↔ 1 over 4s) only on the diya glow.
- **Portal transitions.** Sections are entered **through an arch**. The cusped SVG mask scales from 0.6 → 3.0 over 1200ms, `cubic-bezier(.65,0,.35,1)`, revealing the next scene.
- **Cursor.** A small warm point of light (8px `#F2B45A` core, 80px soft halo at 10%) that slightly brightens nearby surfaces (a CSS radial gradient following the pointer at 0.15 lerp). Over links, the halo tightens. Over the bottle or jar: `ROTATE`.
- **Hover.** Gold rules extend 0 → 100% width in 400ms. Buttons: a gold 1px arch-topped frame draws itself.
- **No** flicker, smoke, bats or particles beyond very sparse dust motes (max 12, reduced-motion off).

### The bottle / jar
The milk bottle is **backlit**: rim light in `--gt-flame`, the face in soft shadow, milk glowing faintly through the glass (a screen-blend radial behind it). It floats inside a jharokha arch on a stone ledge with a hard contact shadow. Pointer tilt ±5° (heavy, slow, 0.08 lerp). The 360 viewer turns at a ceremonial 6°/s auto-spin.

## 5. Variant worlds — four chambers

| Variant | Chamber | Light | Palette |
|---|---|---|---|
| MASTER 26 (V1+) | Green stone hall, carved leaf tracery | Cool dawn through jali | `#0A2A20`, `#1F5C45`, gold |
| ROOT 14 (V1) | Red sandstone chamber, oxblood drapery | Lamp at the left | `#4A0A0F`, `#B3202A`, flame |
| BASE 3 (V2) | Amber courtyard at dusk | Low sun through arches | `#5A3304`, `#E89A1C` |
| ESSENTIAL (V3) | Plain lime-plaster alcove | Diffuse candle-free daylight | `#4D4130`, `#F4EDE2`. The calmest room. |

The info panel is a gold-ruled tablet inside an arch: V-CODE, name, price (*pending*), descriptors (*pending*). "26 herbs" and "14 herbs" carry the pending mark.

## 6. Page-by-page treatment (whole-site version)

1. **Hero.** Black, one arch, the bottle inside it, backlit. "Milk from the source." in Cormorant 300. The light rises slowly as the page loads (1.6s).
2. **Bottle becomes the story.** Six words carved into the arch's stone surround, each lighting up in turn.
3. **Cow to bottle.** A corridor of seven arches, horizontally pinned, each framing a real photograph. A thin gold line runs along the floor.
4. **Farm.** **Style switches off**: full daylight documentary. A Gothic farm would be a lie.
5. **Breeds.** Portraits in arched frames like a gallery of miniatures, with names in Cormorant SC (*pending*).
6. **Traceability.** A gold-line map engraved on a dark stone tablet. The pulse is a moving lamp-light. DEMO label.
7. **Quality.** A clean, high-contrast parchment panel `#EDE4D0` with 16 parameters set as a manuscript list with red rubricated numerals. Values pending.
8. **Four milks.** The four chambers.
9. **Milk as material.** Milk ribbon lit from within, glowing against black. This is the style's best visual.
10. **Heritage.** Manuscript page: one UnifrakturCook initial, Cormorant text and hand-drawn cow line art in gold.
11. **Technology.** A stone tablet with seven verbs carved. "Tradition is the source. Technology protects the journey."
12. **Ghee.** **The hero of this style.** Bilona churn by lamp, the jar in an arch niche, diyas. Three grades tied to their milks.
13. **Trace your milk.** A scroll-like tablet with input and DEMO seal.
14. **Story.** Gold-ruled ledger with the verified 2019 line only.
15. **Final CTA.** Dawn breaks through the arch: black → milk white over 1.2s. "Know where your milk comes from." The style must end in light.

### Inner pages
- **/milk**: four arched niches in a row.
- **/milk/[variant]**: chamber hero, then a parchment fact section.
- **/ghee**: the full "Bilona by lamplight" campaign (recommended scope).
- **/origin**: daylight documentary (style off).
- **/trace**: tablet map.
- **/technology**: carved verbs.
- **/about**: manuscript page.
- **/reserve**: parchment form inside an arch, with a festival gift option (*pending commercial approval*).

## 7. Component variants
`ArchPortal` (mask transition) · `ArchFrame` (image mask) · `LampCursor` · `BacklitBottle` · `StoneTablet` (panel) · `ManuscriptList` (QualityPanel) · `EngravedTraceMap` · `ChamberScene` (ProductScene) · `ArcadeTrack` (JourneyTrack) · `DropCap` · `GoldRuleButton` · `AssetSlot` as an empty arch niche with an engraved label.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Warm-dark palette, Cormorant stack | Tokens, specimen, arch SVG set | Body ≥ 7:1; blackletter only as initials | Brand colours | 2 |
| 2 | Shell | Centred nave grid, nav, lamp cursor | Shell, `LampCursor` | Cursor light ≤ 1 repaint layer; 60fps | none | 3 |
| 3 | Hero and bottle | Backlit bottle in arch | Hero | Milk still reads white; no ominous mood (5-person test) | Renders | 3 |
| 4 | Bottle → story | Carved words | Chapter 02 | Words legible ≥ 4.5:1 | Copy | 2 |
| 5 | Cow → bottle | Arcade track | `ArcadeTrack` | Mobile vertical; photos untinted | B4, B8 | 4 |
| 6 | Origin | Daylight break | Chapter 04 | Style fully off | B1, B2 | 2 |
| 7 | Breeds | Arched gallery | Chapter 05 | Pending labels | B3 | 2 |
| 8 | Trace map | Engraved map | `EngravedTraceMap` | Keyboard; DEMO | traceNodes | 4 |
| 9 | Quality | Parchment list | Chapter 07 | Light ground; no invented values | Lab approval | 2 |
| 10 | Four worlds + 360 | Four chambers | Chapter 08 | Each chamber distinct; viewer scrubs | A | 5 |
| 11 | Heritage | Manuscript | Chapter 10 | One drop cap only | Line art | 2 |
| 12 | Technology | Carved tablet | Chapter 11 | Public vocabulary | none | 2 |
| 13 | Ghee | Bilona by lamplight | Chapter 12 + campaign | Prices pending; no health claims for ghee | Ghee photography (lamp-lit) | 4 |
| 14 | Trace demo | Tablet lookup | Chapter 13 | DEMO seal always visible | demoProvider | 2 |
| 15 | /milk pages | Niches + variant pages | 5 routes | Facts on light ground | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Origin daylight | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified milestones only | Festival offer approval | 3 |
| 18 | Mobile | Narrow arches | Mobile layouts | Portal transition simplified to fade | none | 3 |
| 19 | A11y + reduced motion | Readable dark | Static lighting, no portals | AA; focus rings gold 2px on dark | none | 2 |
| 20 | Perf, QA, handover | Ship | Report, QA, handover | LCP < 2.5s; dark images AVIF with no banding | all | 3 |

Total ≈ 58 days whole site. Recommended "Bilona by lamplight" campaign only (phases 1–3, 13, 17–20) ≈ 22 days.

## 9. Assets needed from DESIGO®
- **Lamp-lit ghee photography**: the bilona churn, hands, the jar, diyas (low-key, RAW).
- Jar 360 sequence (same spec as bottles, 72 frames) for the ghee hero.
- Photographs of Jodhpur sandstone and arch details (or licensed photographs of Mehrangarh with permission).
- Approval of festival / gifting copy and prices.

## 10. Performance, accessibility and mobile
- Dark gradients cause banding. Add 1% noise and export AVIF at 10-bit where possible.
- The lamp cursor uses one CSS custom-property-driven radial gradient on a fixed layer, not a canvas.
- Body text minimum 17px on dark, line-height 1.65, weight 400 (not 300).
- Reduced motion: no portal scaling, no breathing light, static lit scenes.
- Mobile: arches as simple top-rounded masks to save height, lamp cursor off (touch), the halo replaced by a static vignette.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. No Christian, occult or horror iconography: no crosses, skulls, bats, gargoyles, cobwebs or blood-red drips.
2. Indian architectural vocabulary only (jharokha, jali, cusped arch, diya), taken from Jodhpur.
3. Warm black, never blue-black. Milk must always look white and fresh.
4. Blackletter: one initial per page, maximum.
5. Every dark page resolves into daylight before its CTA.
6. Farm, lab and origin chapters are never Gothic. Truth is shown in daylight.
7. No mystical or health language around ghee ("sacred", "healing" and similar are out). Describe process only.
8. Pending claims stay marked even on the dark tablets.

**Risks**: an ominous mood beside food, religious misreading, poor legibility. Mitigation: a seasonal campaign scope, Indian architecture, warm light, and testing with five target customers before launch.

**Best used for:** one seasonal "Bilona by lamplight" ghee / Diwali campaign page, never the main site.
