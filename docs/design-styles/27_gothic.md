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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Palette, type and guardrails were strong; missing were colour roles (muted text, state colours), font packages and sizes, component states, motion tokens, image prompts and acceptance list. All added. Fonts already OFL (Cormorant, UnifrakturCook, Inter Tight); no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#C8A96B` | gold tracery: primary CTA frame, rules, key accents | 8.5:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#120E0B` | label on a gold-filled (active) plate | 8.5:1 on primary |
| Secondary | --c-secondary | `#7A4E34` | red sandstone surfaces in shadow, arch fills | 2.7:1 vs bg (decorative only, never text) |
| Accent | --c-accent | `#F2B45A` | diya flame: focus ring, glow source, lamp cursor core | 10.5:1 vs bg (body-safe) |
| Background | --c-bg | `#120E0B` | warm black page (never blue-black) | 17.5:1 with text |
| Surface | --c-surface | `#2A211A` | carved-stone tablets, info panels | text on surface 14.4:1 |
| Text | --c-text | `#F7F4EC` | body text on dark, 17 px minimum, weight 400 | 17.5:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#AEAAA4` | captions and labels (milk at 68% over warm black) | 8.3:1 vs bg (body-safe) |
| Line | --c-line | `rgba(200,169,107,.35)` | gold hairlines, tablet borders | decorative; gold at 100% (8.5:1) when used as focus or rule |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#D9E8DF` / `#E8C77A` / `#4A0A0F` | ok = pale-green tick on verified ledger lines; pending = dotted ghee-gold underline + Cormorant SC "PENDING" tag; DEMO = oxblood wax-seal badge with 1px gold ring and milk text | DEMO seal milk `#F7F4EC` on `#4A0A0F` = 15.6:1; seal stands off the ground by its gold ring |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | green stone hall, carved leaf tracery, cool dawn through jali: `#0A2A20`, `#1F5C45`, gold |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red sandstone chamber, oxblood drapery, lamp at the left: `#4A0A0F`, `#B3202A`, flame |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber courtyard at dusk, low sun through arches: `#5A3304`, `#E89A1C` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | plain lime-plaster alcove, diffuse daylight, the calmest room: `#4D4130`, `#F4EDE2` |

Dark-chapter inversion: dark is the default; the inversion is to **parchment** for Quality, product facts, forms and every final CTA ("the style must end in light"): `--c-bg` → `#EDE4D0`, `--c-surface` → `#F7F4EC`, `--c-text` → `#1E211F`, `--c-primary` → `#4A0A0F` (rubrication), muted → `#5A4630`, line → `rgba(74,10,15,.25)`, logo → charcoal. /origin and Farm run full daylight documentary (style off).

Additional style tokens (kept from §3): `--gt-oxblood` `#4A0A0F` (rubrication), `--gt-ghee` `#E8C77A`, `--gt-forest` `#0B3B32` (MASTER world only). Lamp glow = radial `#F2B45A` 18% → transparent at 60%.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Cormorant Garamond | `@fontsource-variable/cormorant-garamond` | wght 300 (hero), italic 400 for ceremony | `clamp(3.2rem, 2rem + 6vw, 8rem)` | 1.0 | −0.01em | Sentence |
| Headline H1–H2 | Cormorant Garamond · drop cap UnifrakturCook (one per page) | `@fontsource-variable/cormorant-garamond` · `@fontsource/unifrakturcook` | 500 / 600 · 700 | H1 `clamp(2.4rem, 1.6rem + 3.4vw, 4.5rem)` · H2 `clamp(1.7rem, 1.3rem + 1.6vw, 2.6rem)` | 1.1 · 1.2 | 0 | Sentence; drop cap 4 lines tall |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 (never 300 on dark) | `clamp(1.0625rem, 1rem + .3vw, 1.1875rem)` (17 px min) | 1.65 | 0.005em | Sentence |
| Label / UI | Cormorant SC | `@fontsource/cormorant-sc` | 600 | `.85rem` | 1.2 | +0.12em | Small caps |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 | `.875rem` | 1.45 | +0.02em | Upper for IDs |
| Devanagari (optional) | Tiro Devanagari Hindi ("बिलोना", festival words) | `@fontsource/tiro-devanagari-hindi` | 400 | display sizes | 1.3 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Cormorant Garamond, Cormorant SC, UnifrakturCook, Inter Tight, JetBrains Mono, Tiro Devanagari Hindi: all OFL 1.1, no replacement needed. Pairing: high-contrast Cormorant gives ceremony, a single blackletter initial nods to manuscripts, Inter Tight keeps dark-mode reading easy.

### 12.3 Layout & surfaces
- Grid: 12 columns, strong central axis; content in a centred 6-column "nave" (max 760 px text, 1280 px frame); gutters 24 px / 16 px mobile.
- Arched portals 5:8 (desktop), 3:5 (mobile); vertical rhythm on a 12 px baseline.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160; ceremonial section padding 160 px desktop / 80 px mobile.
- Radius: `sm 0` · `md 2px` · `lg` = cusped-arch SVG mask for frames (no rounded rectangles); pill only for the lamp cursor.
- Border: 1px gold `rgba(200,169,107,.35)`; tablets have a double gold rule (1 px + 1 px, 4 px apart).
- Shadow / light: no grey drop shadows. Bottle: hard contact shadow on a stone ledge `0 18px 24px -14px rgba(0,0,0,.8)`; panels: inner glow `inset 0 0 60px rgba(242,180,90,.06)`.
- Texture: photographed carved sandstone at 6–10% over `--c-surface`; 1% noise on all dark gradients against banding.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: label in Cormorant SC 600 + arrow inside a 1px gold **arch-topped** frame, 52 px tall, padding 16 px 28 px. States: default frame 70% · hover frame draws itself 400 ms and a 40 px flame halo rises behind · focus-visible 2 px `#F2B45A` ring offset 3 px · active gold fill `#C8A96B` with `#120E0B` label · disabled 35%, no halo · loading arrow becomes a slow breathing diya dot (1.6 s). 44 px min target.
- **Secondary button**: Cormorant SC label + arrow with a 1px gold rule beneath that extends 0 → 100% on hover (400 ms). Focus flame ring; active label gold; disabled 35%; loading rule breathes.
- **Text / arrow link**: Inter Tight with 1px gold underline at 50%; hover underline to 100% and arrow travels 4 px; focus-visible flame ring. On parchment: oxblood underline.
- **Icon button (incl. menu)**: 44 px circle with 1px gold border, 1.25 px gold line glyph set inside a tiny cusped-arch frame. Menu = two gold lines → X. Hover halo · focus flame ring · active gold fill · disabled 35%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: warm-black bar 76 px (60 px mobile), gold hairline beneath, centred logo with links split left/right (Cormorant SC), RESERVE in a small arch frame. Mobile: menu opens a full-height chamber with one arch outline, links 30 px Cormorant, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default warm point of light: 8 px `#F2B45A` core + 80 px halo at 10% (lerp 0.15) brightening nearby surfaces · hover halo tightens to 40 px · ROTATE `ROTATE` over bottle/jar · EXPLORE halo widens to 120 px + `EXPLORE` · ENTER `ENTER` over chamber arches · VIEW `VIEW` over photographs · TRACE tight core + gold crosshair over engraved nodes. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: stone tablet: `#2A211A` + sandstone texture 8%, double gold rule border, radius 0, padding 32 px, optional arch top. Hover (interactive): gold rule brightens, inner glow up. On parchment: `#F7F4EC` with oxblood rule.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: Cormorant SC 12 px, 26 px tall, 1px gold border. Pending verification: dotted ghee-gold underline + `PENDING` tag, visible even on dark tablets. DEMO · not live data: oxblood wax-seal circle (40 px) with gold ring and "DEMO" milk text, plus a line "not live data" beside it.
- **Input + form field (Trace-your-milk bottle ID)**: scroll-like tablet input: 56 px, `#120E0B` field, 1px gold border, mono 16 px milk, placeholder `DSG-BTL-000001-3 (sample format)` muted. States: hover border 100% · focus-visible flame ring 2 px · error oxblood border + message on parchment strip · disabled 35% · loading breathing diya dot. Visible `<label>`; DEMO seal beside.
- **Divider / ornament**: gold double rule with a small cusped-arch ornament (16 px) at centre; on parchment, an oxblood rubricated pilcrow.
- **Section header (chapter number + title pattern)**: Roman-numeral-free: chapter number in Cormorant SC (`Chapter 12`) above a centred Cormorant 300 title, gold rule 64 px, one italic line. A single UnifrakturCook drop cap may open the first paragraph of the page.
- **Product info block (variant name, code, price-pending, size, descriptors)**: gold-ruled tablet inside an arch: V-CODE (mono), name (Cormorant 600), size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline, "26 herbs" / "14 herbs" marked pending, descriptors pending; CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: bottle (or ghee jar render) floats inside a jharokha arch on a stone ledge with hard contact shadow; backlit rim light `#F2B45A`, face in soft shadow, a screen-blend radial behind so milk glows white. Tilt ±5° (lerp 0.08); Bottle360Viewer auto-spin 6°/s, stops on interaction.
- **Trace node / timeline step**: node = gold engraved ring (14 px) on a dark tablet; path = incised gold line; pulse = a moving lamp-light (radial 24 px). Timeline step = gold-ruled ledger line with date in Cormorant SC (verified 2019 only in production). States idle · hover glow · focus-visible flame ring · active ring filled gold + tablet panel · pending dotted ring.

### 12.5 Iconography & illustration
- Icons: 1.25 px gold line, round joins, 24 px grid, each set inside a small cusped-arch frame; no fills.
- Illustration: SVG cusped arches, jali screens and gold line art of the cow and churn for the manuscript page. Indian architectural vocabulary only (jharokha, jali, diya), never crosses, skulls or gargoyles.
- Photography: low-key chiaroscuro ghee-making by lamp (real); one warm light source per image; farm, lab and origin photographs stay daylight documentary.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 900 / 1200 ms | hover · ceremonial reveals (`--ease-milk`) · portals |
| `--gt-portal` | 1200 ms, ease-inout, mask scale 0.6 → 3.0 | arch portal transition |
| `--gt-breathe` | 4000 ms opacity .85 ↔ 1 | diya glow only |
| `--gt-rule` | 400 ms | gold rule extend on hover |
| `--gt-dawn` | 1200 ms black → milk | final CTA dawn |

- Signature: sections are entered through an arch (cusped SVG mask scales open). Light rises on hero load over 1.6 s.
- No flicker, smoke, bats or particles; at most 12 sparse dust motes (off in reduced motion).
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: no portal scaling, no breathing light, static lit scenes; mobile portals become fades.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *Jodhpur fort at lamplight, Rajput sandstone architecture, cusped jharokha arches and jali screens, warm black #120E0B, carved stone #2A211A, red sandstone #7A4E34, gold #C8A96B, single warm diya light #F2B45A, chiaroscuro, ceremonial, calm, premium, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/gothic/hero-landscape.png` | 3200×2000 (16:10) | no | Night interior of a Rajput sandstone palace gallery, one tall cusped jharokha arch at the centre framing soft warm darkness, carved jali screens either side, a single diya glow low at the left, deep chiaroscuro, empty arch centre | crosses, skulls, gargoyles, bats, cobwebs, church, European gothic cathedral, blood, horror, smoke, candles on altar | Hero (ch. 01), "Bilona by lamplight" |
| 2 | `web/public/desigo/styles/gothic/hero-portrait.png` | 1400×2400 (7:12) | no | Tall narrow cusped sandstone arch in warm darkness, lamp glow from below left, carved stone surround, empty centre | crosses, skulls, gargoyles, church, horror | Hero mobile |
| 3 | `web/public/desigo/styles/gothic/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Green stone hall with carved leaf tracery, cool dawn light falling through a jali screen, deep green #0A2A20 shadows and bottle-green #1F5C45 stone, gold-lit carved edges, empty central niche | crosses, church, moss decay, horror | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/gothic/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Red sandstone chamber with oxblood drapery, a single oil-lamp glow at the left, deep #4A0A0F shadows and crimson #B3202A stone, empty arched niche, calm | blood, horror, crosses, skulls | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/gothic/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Amber courtyard at dusk seen through a row of cusped arches, low golden sun #E89A1C raking across sandstone, deep brown #5A3304 shadows, empty foreground | people, crosses, church, fire | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/gothic/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Plain lime-plaster alcove with a cusped arch, diffuse soft daylight, warm ivory #F4EDE2 walls and taupe #4D4130 shadows, calm, empty | candles, crosses, dark horror mood | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/gothic/trace-engraved.png` | 3000×2000 | yes (real alpha) | Fine gold engraved line network connecting small circular nodes from scattered points into one central hub, like incised inlay on stone, isolated on transparent background | map labels, borders, occult symbols, pentagram | Traceability ch. 06, /trace (EngravedTraceMap) |
| 8 | `web/public/desigo/styles/gothic/journey-arcade.png` | 3600×1200 (3:1) | no | Long horizontal corridor of seven identical cusped sandstone arches in a row, warm lamp light, a thin gold line inlaid along the stone floor, each arch opening empty | people, crosses, church nave, statues | Cow → bottle ch. 03 (ArcadeTrack) |
| 9 | `web/public/desigo/styles/gothic/texture-sandstone.png` | 2400×2400, seamless | no | Seamless tileable texture of carved Jodhpur red sandstone in deep shadow, fine chisel marks, warm dark brown, flat even light | cracks, moss, carvings of figures, vignette | StoneTablet texture (6–10%) |
| 10 | `web/public/desigo/styles/gothic/arch-frame.png` | 1600×2560 (5:8) | yes (real alpha) | Ornamental cusped jharokha arch frame carved in pale sandstone, front view, the arch opening and the surroundings fully transparent, crisp edges | church window, stained glass, crosses, figures | ArchFrame mask / portals |
| 11 | `web/public/desigo/styles/gothic/ghee-lamplight.png` | 3200×2000 | no | A wooden bilona churn in an earthen pot beside a row of small clay diyas with warm flames, in a sandstone niche, low-key chiaroscuro, empty space at the right | ghee jar, altar, idols, smoke, fire hazard | Ghee ch. 12, /ghee campaign |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/27_gothic.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/gothic/
- [ ] No Christian, occult or horror iconography; Indian architecture only
- [ ] Every dark page resolves to parchment/daylight before its CTA; 5-person mood test passed
