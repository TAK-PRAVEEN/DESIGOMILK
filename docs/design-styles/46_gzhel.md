# 46 · Gzhel → Jaipur Blue Pottery — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

**Gzhel** is the Russian folk ceramic tradition from the Gzhel villages near Moscow: cobalt-blue brush painting on white porcelain, with flowing floral sprays, a single loaded brush stroke that shades from deep to pale blue (the "Gzhel rose"), and borders of fine lines and dots. As a design trend it means blue-and-white painted pattern, hand-brushed flourishes and ceramic gloss applied to packaging, interfaces and illustration.

We **adapt it to its Rajasthani equivalent: Jaipur blue pottery** (*neela mitti ke bartan*). It is the same cobalt-on-white idea with a local history. The craft came to Jaipur through Turko-Persian and Mughal glazing traditions, was patronised in the 19th-century court of Jaipur, and was revived in the mid-20th century by the artist **Kripal Singh Shekhawat** and others. Its distinguishing material fact is that it is made **not from clay but from a quartz-based body** (quartz powder, powdered glass, Fuller's earth, borax and gum), low-fired, glossy and translucent-white, painted in **cobalt blue and turquoise**, sometimes with small green or ochre accents. Its motifs are floral arabesques, vines, birds and geometric borders.

Blue on white also has a natural rhyme with milk: **the white ground is milk**, and the cobalt is the painted story on it.

Reference points:
1. **Jaipur blue pottery workshops** (Kripal Singh Shekhawat's legacy studios, the Jaipur craft clusters at Kot Jewar and Sanganer): authentic motifs, brush technique and glaze.
2. **Gzhel porcelain** (the client's source style): the single shaded brush stroke, generous white space, crisp borders.
3. **Contemporary blue-and-white brand systems** (e.g. Royal Delft's modern lines, Iznik-inspired editorial design): how a historic pattern language can be used sparingly and premium.

## 2. Fit for DESIGO® — score 3 / 5

**Why it fits.** It is a **Rajasthani craft** with real local roots and recognition, which is appropriate for a Rajasthan dairy brand. White glossy ground plus painted line fits milk and glass. It makes an excellent **gifting and ghee language** (painted jars, tiles, borders) and a strong festive or limited-edition story with real artisans. It is premium when restrained (a single border, a single tile) and gives the site a distinctive visual signature no competitor has.

**Where it fights.** (1) **Blue is not in the brand palette** (forest, green, earth, gold), so too much cobalt dilutes DESIGO®'s identity and fights the four cap colours. (2) Pattern everywhere becomes a souvenir shop. (3) Painted ornament around the product can look like a craft fair rather than an "Apple launch". (4) Cultural care: credit the craft and the artisans, and avoid copying a specific studio's designs.

**Recommendation.** Use it as a **craft layer**: Ghee (painted jar cradles and borders), Heritage, a festive or gifting campaign, an artisan-collaboration limited edition, and painted section dividers. Not the whole site. On product pages, cobalt is limited to a thin border.

## 3. Art direction

### Palette ("neela on doodh": blue on milk)
| Token | Hex | Role |
|---|---|---|
| `--bp-milk` | `#F7F4EC` | Page ground (brand milk) |
| `--bp-glaze` | `#FBFAF6` | Glazed white tile surface (slightly cooler, glossier) |
| `--bp-cobalt` | `#1F3F8F` | Cobalt line and fill (≥ 8:1 on milk; usable for text ≥ 18px) |
| `--bp-cobalt-deep` | `#15296A` | Deepest brush load |
| `--bp-cobalt-wash` | `#8EA3D1` | Pale end of a shaded stroke |
| `--bp-turquoise` | `#2F9AA8` | Turquoise secondary glaze (decoration only) |
| `--bp-turquoise-pale` | `#BFE2E6` | Pale turquoise wash |
| `--bp-forest` | `#0B3B32` | Brand anchor: nav, footer, body links |
| `--bp-gold` | `#C8A96B` | Ghee, gilded rim on special pieces |
| `--bp-ochre` | `#B8863B` | Rare ochre accent (traditional) |
| `--bp-ink` | `#171918` | Body text |
| `--bp-ink-muted` | `#5C5A52` | Muted text (6.3:1 on milk) |

**Proportion rule:** on any screen, cobalt and turquoise together cover **no more than 12%** of the area. Forest remains the brand's dark colour; cobalt is the craft's colour.

### Typography
- Display: **Cormorant Garamond** (OFL) 500 in `--bp-ink` or `--bp-cobalt` at display sizes (Fraunces italic was the considered alternative; Cormorant is the chosen face, see §12.2). Its calligraphic contrast echoes the brushed strokes.
- Devanagari accents (optional, approved): **Tiro Devanagari Hindi** (OFL) for one craft word per chapter, e.g. नीला (blue) or the artisan's name.
- Text/UI: **Inter Tight** 400/500.
- Data: **JetBrains Mono**.

### Texture and imagery
- **Brush strokes**: the signature is the **shaded single stroke**, a petal or leaf painted in one movement, deep cobalt at the base fading to pale wash at the tip. We build a library of about 40 strokes **painted by a Jaipur blue-pottery artisan on paper and tile**, scanned at 1200 dpi and vectorised with variable-opacity fills.
- **Glaze**: a subtle glossy highlight (a soft white specular streak) on tile surfaces, a gentle crackle-free gloss, and slight pooling at edges.
- **Tiles**: 1:1 square tiles with a central motif and a border of fine lines and dots; used as frames, dividers and cards.
- **Real pieces**: photographs of commissioned pieces (a bottle cradle or coaster, a ghee jar sleeve, plates, tiles) made by named artisans, on milk-white ground.
- **Motifs allowed**: flowers (rosettes, five-petal blooms), vines and leaves, birds in profile, geometric borders, dots and lines. **Motifs avoided**: deities, religious symbols, Mughal-court figures and any cow imagery painted as decoration.

### Iconography
1.5px line icons in cobalt with a single shaded petal as the "active" mark (e.g., the selected tab gets a small petal).

### Grid
A **tile grid**: 12 columns with a square module (desktop 96px, mobile 72px). Borders and dividers snap to the module. Hero compositions centre the bottle within a **circular painted plate motif** (a ring border at 70vh diameter) or a single framing arch, leaving the plate's centre white for the bottle.

## 4. Motion & interaction language
- **Brush painting.** Strokes paint themselves in the direction the artisan painted them (stroke-order data recorded at scan time): each petal 350–500ms `cubic-bezier(.33,0,.2,1)`, with the opacity gradient advancing along the stroke so it looks like a loaded brush releasing pigment. A whole border paints in ≤ 1.6s, staggered.
- **Glaze sheen.** On hover or as a chapter settles, a soft specular streak slides across a tile (800ms, `cubic-bezier(.16,1,.3,1)`), once.
- **Turning plate.** In hero and ghee chapters, the circular plate border rotates very slowly with scroll (max 20° per chapter), like a pot on a wheel.
- **Scenes.** Chapter transitions: a band of painted border unrolls horizontally across the seam (900ms, `cubic-bezier(.65,0,.35,1)`).
- **Cursor.** Default: a 14px cobalt dot. Over links: the dot becomes a small five-petal flower (petals unfold 200ms). Over tiles: a 40px glaze ring that catches the sheen. Over the bottle: "drag · turn" in Inter Tight. Over painted borders: the cursor paints a faint 1px cobalt trail that fades in 600ms (desktop only, decorative).
- **Hover.** Text links: a brushed underline in cobalt (300ms). Buttons: the brand underlined label and travelling arrow; the arrow tip becomes a cobalt leaf.
- **Reduced motion.** Patterns appear fully painted; no sheen; no plate rotation.

### The bottle
The bottle stands at the **white centre of a painted plate motif**: a large circular border of cobalt vines and turquoise accents, with nothing painted on the area the bottle occupies, so the milk-white bottle sits on the glaze-white like milk in a bowl. A soft contact shadow on the glaze, a faint glossy reflection below. Idle float ±6px over 6s; pointer tilt ±6°; the plate border rotates 2° counter to the tilt. The bottle and its label are **never painted over**, and no pattern touches the glass. When 360 frames arrive, the viewer sits in the same plate, and the plate rotates in step with the drag.

## 5. Variant worlds — four plates

The ground and line work are always milk-white and cobalt; each variant adds **one secondary glaze** taken from its cap, as Jaipur potters add a green or ochre accent.

| Variant | Plate motif | Secondary glaze | Ground | Notes |
|---|---|---|---|---|
| MASTER 26 (V1+) | Dense leaf-and-vine border, the richest plate | Copper-green `#1F5C45` leaves among cobalt | Glaze white, faint green wash `#D9E8DF` at the edges | Herb count *pending*; leaves are decorative, not a count |
| ROOT 14 (V1) | Rosette border with stepped geometric bands (earth) | Muted madder `#B3202A` dots (as a rare overglaze) | Glaze white with a `#F3D9D6` blush | Red used sparingly: about 2% of area |
| BASE 3 (V2) | Wheat-ear sprays and a sun rosette | Ochre-amber `#B8863B` (toned from `#E89A1C`) | Glaze white with a `#F8E4C2` wash | — |
| ESSENTIAL (V3) | A single thin cobalt ring and two leaves | None | Pure glaze white `#FBFAF6` | The most restrained plate |

Info panel on milk: V-CODE in mono, name in Cormorant Garamond, the `desigo.ts` line, price *pending*, descriptors *pending* with petal bullets.

## 6. Page-by-page treatment

1. **Hero.** Milk ground, a single large painted plate border (cobalt vines, turquoise buds) with the bottle in its white centre. "MILK FROM THE SOURCE." in Cormorant Garamond; "Traceable milk from indigenous Indian cows." The border paints itself on load (≤ 1.6s).
2. **The bottle becomes the story.** Six painted petals around the pinned bottle, one per word (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE). Each petal paints as its word appears; the ground deepens from milk to forest, and on forest the cobalt switches to milk-white line (the "reverse" plate).
3. **From cow to bottle.** A **horizontal tile frieze** of seven painted tiles (cow in respectful profile line, farm, milk can, test card, chiller, plant, bottle), painted by the artisan in a restrained line style; the milk line is a cobalt border running beneath.
4. **Where it begins.** Real farm photographs framed by a thin painted border (a single cobalt line plus a dot row). No pattern over photos.
5. **Breeds.** Plates and regions with a simple cobalt ring frame; "*pending approval*". Breeds are not painted as decoration.
6. **Traceability.** Forest ground with milk-white line work; the route as a painted vine with eight rosette nodes; the pulse a pale blue glow moving 1.5s per hop. "Illustrative journey, not live data".
7. **Quality.** Crisp lab white, the large "16" and the list; a single fine cobalt rule as the only ornament. Values "— pending lab confirmation".
8. **The four milks.** §5 plates, one per screen; the plate turns slowly as you scroll through each.
9. **Milk as material.** Milk poured into a real **blue-pottery bowl** (commissioned piece, real footage or still): white milk on glaze-white, framed by cobalt. Ribbon canvas as fallback.
10. **Heritage.** The craft story: macro photographs of an artisan painting a piece (with consent and credit), a short approved text about the craft and DESIGO®'s collaboration (if real), and one Devanagari word, approved.
11. **Technology.** The pattern withdraws: forest ground, seven verbs, a single painted border at the top. "Tradition is the source. Technology protects the journey."
12. **Ghee.** **The style's best page.** The ghee jar resting in a commissioned blue-pottery cradle or on a painted tile, a gold rim on the border (gold for ghee), three grades as three tiles linked to their milks, prices *pending*.
13. **Trace your milk.** A white tile card with an input; the result paints a vine route node by node. DEMO badge.
14. **Story.** A tile-row timeline; only verified 2019 in production.
15. **Final CTA.** The hero plate returns, now with forest ground and milk-white line. "Know where your milk comes from."

### Inner pages
- **/milk**: four plates in a 2×2 grid, bottles in their centres.
- **/milk/[variant]**: the variant plate hero, the 360 viewer in the plate, facts on milk with a thin cobalt rule, "Trace this bottle".
- **/ghee**: the cradle hero; the bilona process in five tiles.
- **/origin**: photo essays with thin painted borders.
- **/trace**: the vine route full screen.
- **/technology**: forest, one painted border.
- **/about**: the artisan collaboration (if real) and credits.
- **/reserve**: a calm form; a gifting option (ghee with a blue-pottery piece) only if the product exists; the return loop as a painted circle.

## 7. Component variants
`PaintedStroke` (shaded single-stroke SVG with stroke-order animation) · `PlateBorder` (circular hero frame) · `TileFrame` · `TileFrieze` (JourneyTrack) · `VineRoute` (TraceMap) · `GlazeSheen` · `PetalCursor` · `BorderTransition` · `ReversePlate` (milk-white on forest) · `ArtisanCredit` · `AssetSlot` as a blank glazed tile naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Blue-on-milk palette, 12% rule | Tokens, specimen | Cobalt ≤ 12% area; body ≥ 7:1 | none | 3 |
| 2 | Shell (nav, footer, cursor) | Tile grid, petal cursor | Shell components | Forest nav kept (brand anchor) | none | 3 |
| 3 | Hero + bottle | Bottle in painted plate | `PlateBorder`, hero | Nothing painted on the bottle zone | Bottle renders, stroke library | 4 |
| 4 | Bottle → story | Six painted petals | Chapter 02 | Reverse plate on forest legible | Copy | 3 |
| 5 | Cow → bottle | Painted tile frieze | `TileFrieze` | Mobile vertical; cow in respectful line | Artisan-painted tiles | 4 |
| 6 | Origin / farm | Thin painted frames | Chapter 04 | No pattern over photos | Farm photos | 2 |
| 7 | Breeds | Cobalt ring frames | Chapter 05 | Pending labels | D1–D6 | 3 |
| 8 | Traceability map | Vine route | `VineRoute` | Keyboard nodes; DEMO label | `traceNodes` | 3 |
| 9 | Quality | Lab page, single rule | Chapter 07 | Values pending | Lab approval | 2 |
| 10 | Four worlds + 360 | Four plates | Chapter 08 | One secondary glaze per variant | A | 5 |
| 11 | Heritage | Craft story | Chapter 10 | Artisan credited, consent on file | Workshop shoot | 3 |
| 12 | Technology | Pattern withdraws | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Blue-pottery cradle | Chapter 12 | Prices pending; gold for ghee only | Commissioned cradle, jar | 4 |
| 14 | Trace-your-milk demo | Vine reveal | Chapter 13 | DEMO visible | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 5 routes | Cobalt restricted to borders | A | 4 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Consistent restraint | Photos | 3 |
| 17 | /about, /ghee, /reserve | Inner pages | 3 routes | Gifting only if the product is real | Collaboration details | 4 |
| 18 | Mobile pass | Single borders | Mobile layouts | Plate 90vw; strokes ≥ 1.5px | none | 3 |
| 19 | A11y + reduced motion | Pre-painted patterns | Static versions | Patterns `aria-hidden` | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover, stroke library | Stroke library ≤ 120 KB; LCP < 2.5s | all | 3 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **A Jaipur blue-pottery artisan collaboration**: about 40 brush strokes on paper (with stroke-order notes or video), seven frieze tiles, four plate borders, and commissioned pieces (a bottle cradle or coaster, a ghee jar cradle, a bowl). Fair payment, written consent, credits, and an agreement on how the designs may be used.
- A workshop photo and video shoot (painting, glazing, firing) with the artisan's consent.
- Decision on whether a real gifting product (ghee plus a blue-pottery piece) exists; if not, nothing is shown as for sale.

### Images to generate (texture and look-development only; real pattern work is commissioned; save under `web/public/desigo/styles/gzhel/`)
Append the house-style tail, but add "cobalt blue #1F3F8F and turquoise #2F9AA8 as the only painted colours". No text, no letters, no logos, no bottles, no religious motifs, no figures of people or cows.

| # | File | Size | Prompt |
|---|---|---|---|
| BP1 | `hero-plate.png` (transparent) | 3000×3000 | Top-down view of a circular decorative border in the style of Jaipur blue pottery: cobalt-blue vines, five-petal flowers and turquoise buds hand-painted on glossy white glaze, the large centre completely plain white, soft glaze highlight, transparent outside the circle |
| BP2 | `glaze-tile.png` | 2048×2048, seamless | Seamless glossy white ceramic glaze surface with very subtle soft reflections and tiny natural variations, flat light |
| BP3 | `border-strip.png` (transparent) | 3600×400, tileable horizontally | Horizontal hand-painted border of cobalt vines with small turquoise leaves and a fine dotted line above and below, Jaipur blue-pottery style, on glossy white, transparent background outside the band |
| BP4 | `plate-master-26.png` | 3000×3000 | Circular blue-pottery plate border of dense cobalt leaves and vines with copper-green #1F5C45 leaf accents, plain white centre |
| BP5 | `plate-root-14.png` | 3000×3000 | Circular blue-pottery plate border of cobalt rosettes and stepped geometric bands with a few tiny madder-red dots, plain white centre |
| BP6 | `plate-base-3.png` | 3000×3000 | Circular blue-pottery plate border of cobalt wheat-ear sprays and a small sun rosette with ochre #B8863B accents, plain white centre |
| BP7 | `plate-essential.png` | 3000×3000 | A single thin cobalt ring with two small painted leaves on glossy white glaze, extremely restrained, plain white centre |
| BP8 | `ghee-cradle.png` | 3200×2000 | A glossy white Jaipur blue-pottery shallow dish with a cobalt and turquoise floral rim and a fine gold edge, empty, on a milk-white linen surface, warm light, empty centre for a jar |

## 10. Performance, accessibility and mobile
- Brush strokes are vector paths with gradient fills along their length (SVG `linearGradient` aligned to each stroke), painted with `stroke-dashoffset` or clip-path; the library is ≤ 120 KB gzipped. Photographed pieces are AVIF.
- Patterns are decorative (`aria-hidden`); artisan credits are real text.
- Cobalt `#1F3F8F` on milk passes AA for large text; body text stays `--bp-ink`.
- Reduced motion: fully painted static patterns; no sheen; no rotation.
- Mobile: one border per screen, the plate at 90vw with the bottle at 44vh inside it, friezes become vertical tile stacks.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **12% rule.** Cobalt and turquoise never exceed 12% of a screen. Forest stays the brand's dark colour, and DESIGO® must still look like DESIGO®.
2. **Nothing painted on the bottle, the label or the milk.** Pattern frames the white; it never covers it.
3. **Real artisans, credited and paid.** Strokes and patterns are commissioned, never AI-generated as final art, and never copied from a specific studio's catalogue.
4. **No religious motifs, court figures or decorative cows.** Flowers, vines, birds, wheat and geometry only.
5. **Craft facts are accurate** (quartz-based body, Jaipur history) and reviewed by the artisan or a craft expert before publishing.
6. Gold appears only on ghee pieces.
7. No souvenir density: one plate or one border per screen; evidence chapters (Quality, Technology) are almost pattern-free.

**Risks**: brand-colour dilution, souvenir-shop clutter, craft misrepresentation. Mitigation: the 12% rule, commissioned and credited artisans, craft fact-check, and the style limited to ghee, heritage and gifting.

**Best used for:** Ghee (painted cradles and gold-rimmed tiles), Heritage, a festive or gifting campaign and an artisan limited edition, plus painted section dividers sitewide.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: craft facts, palette, 12% rule and motion were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, landscape and portrait hero backdrops, a trace-route prompt and negatives. Added. Display font fixed to Cormorant Garamond (Fraunces italic dropped as alternative); image folder `styles/blue-pottery/` → `styles/gzhel/` to match the slug. Cobalt `#1F3F8F` measures 8.8:1 on milk. No claim issues found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#1F3F8F` | Cobalt: painted line and fill, primary CTA label, focus ring | 8.8:1 on bg; cobalt + turquoise together ≤ 12% of any screen |
| Primary ink | --c-on-primary | `#FBFAF6` | Glaze white on a cobalt fill | 9.3:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | Forest: nav, body links, footer — the brand anchor | 11.3:1 on bg |
| Accent | --c-accent | `#2F9AA8` | Turquoise secondary glaze (buds, small accents) | 3.0:1 on bg; turquoise glaze, decoration only (non-text ≥ 3:1) |
| Background | --c-bg | `#F7F4EC` | Brand milk ground (`--bp-milk`) | — |
| Surface | --c-surface | `#FBFAF6` | Glazed white tile (`--bp-glaze`): cards, plate centre | text on surface 16.9:1 |
| Text | --c-text | `#171918` | Ink (`--bp-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions, artisan credit details (new token `--bp-ink-muted`) | 6.3:1 on bg, 6.6:1 on surface |
| Line | --c-line | `rgba(31,63,143,.25)` | Cobalt hairline rules at 25% | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#6B4C2A` / `#0B3B32` | Verified / pending dotted underline / forest DEMO label (never cobalt) | 7.1 / 7.1 / 11.3 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#1F3F8F` (8.8:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Dense leaf-and-vine border, copper-green `#1F5C45` leaves among cobalt; faint green edge wash (leaves are not a herb count) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Rosette border with stepped bands; madder `#B3202A` overglaze dots ≈ 2% of area; blush `#F3D9D6` |
| BASE 3 (V2, amber cap) | `#B8863B` | `#5A3304` | `#F8E4C2` | Wheat-ear sprays and a sun rosette; ochre-amber `#B8863B` (toned from `#E89A1C`); wash `#F8E4C2` |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#FBFAF6` | A single thin cobalt ring and two leaves on glaze white; no secondary glaze |

Dark-chapter inversion: the reverse plate: chapter 02's end, Traceability, Technology and the final CTA use forest `#0B3B32`; cobalt line work switches to milk-white `#F7F4EC` line, text `#F7F4EC` (11.3:1), muted `#B9C4BE`, line `rgba(247,244,236,.3)`, focus `#BFE2E6`; turquoise stays as tiny buds only; the logo loop renders white.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Cormorant Garamond | `@fontsource/cormorant-garamond` (Google Fonts) | 500 (600 below 40 px) | clamp(3rem, 1.6rem + 6vw, 7.5rem) | 0.98 | +0.02em | UPPERCASE (hero), sentence elsewhere |
| Headline H1–H2 | Cormorant Garamond | `@fontsource/cormorant-garamond` (Google Fonts) | 500, 500 italic | H1 clamp(2.4rem, 1.6rem + 3vw, 4.5rem) · H2 clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem) | 1.05 | +0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem) | 1.65 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 500 / 600 | 0.75rem | 1.4 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 | 0.8125rem | 1.5 | +0.02em | As data |
| Devanagari (optional) | Tiro Devanagari Hindi | `@fontsource/tiro-devanagari-hindi` (Google Fonts) | 400 (one approved craft word per chapter, e.g. नीला) | clamp(2rem, 1.5rem + 2vw, 3.5rem) | 1.2 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Pairing rationale: Cormorant's calligraphic contrast echoes the loaded-brush stroke; Inter Tight keeps UI neutral so the painted ornament stays the only flourish.

### 12.3 Layout & surfaces
- **Grid:** tile grid: 12 columns with a square module (96 px desktop, 72 px mobile), gutter 24 px, margins 6vw, max-width 1440 px; borders and dividers snap to the module; hero centres the bottle in a circular painted plate border of 70vh diameter (90vw on mobile)
- **Spacing scale:** module-based: 8 · 12 · 24 · 48 · 72 · 96 · 144 · 192 px (4 px base below 24)
- **Radius scale:** sm 2 px (badges, inputs) · md 8 px (glazed tiles) · lg 999 px (plates, rosette nodes, cursor)
- **Border style:** painted borders: a 1 px cobalt line + a dot row, or the vine border strip; one plate or one border per screen; cobalt + turquoise ≤ 12% of the screen
- **Shadow / elevation:** tiles `inset 0 1px 0 #FFFFFF, 0 6px 16px -8px rgba(31,63,143,.18)`; the bottle has a soft contact shadow on glaze and a faint glossy reflection below
- **Texture / overlay:** glaze white with a soft specular streak; artisan-painted stroke library (~40 strokes, vector with gradient fills) ≤ 120 KB; no pattern over photos, the bottle, the label or the milk

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Cobalt label (Inter Tight 600, 13 px, +0.16em, uppercase) on a brushed 1.5 px cobalt underline; the arrow tip is a small cobalt leaf; 48 px tall, padding 14 px 0. **States:** default cobalt label + brushed underline · hover a 1 px frame draws itself (400 ms) and the leaf arrow travels 6 px · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active frame fills cobalt, label glaze white · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading a single petal paints and fades on a 900 ms loop, `aria-busy`. **Motion:** 300 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Forest label, 1 px hairline + leaf arrow. **States:** default hairline · hover underline repaints as a cobalt brush stroke (300 ms) · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active label sinks 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading petal loop. **Motion:** 300 ms. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest body link with 1 px underline. **States:** default hairline · hover brushed cobalt underline paints left → right (300 ms) · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active cobalt text · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 300 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px hit area, 1.5 px cobalt line icon; a selected state shows a small shaded petal; menu icon = two lines → × with a petal dot. **States:** default line icon · hover a 40 px glaze ring catches the sheen · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active scale 0.96 · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 200 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px milk bar, forest links (brand anchor) in Inter Tight 500 13 px uppercase, a painted cobalt line + dot row beneath after scroll; RESERVE as a cobalt text button. Mobile: glaze-white sheet with a painted border unrolling across the top (900 ms) and Cormorant links at 2.25rem; the active link carries a petal. **States:** default forest links · hover brushed underline · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active current page: shaded petal beside the link · disabled n/a · loading n/a. **Motion:** border unroll 900 ms `--ease-inout`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static).
- **Cursor** — 14 px cobalt dot; labels Inter Tight 500 11 px uppercase; over painted borders it leaves a faint 1 px cobalt trail that fades in 600 ms (desktop, decorative). **States:** default 14 px cobalt dot · hover the dot becomes a small five-petal flower (petals unfold in 200 ms) · ROTATE "drag · turn" over the bottle; the plate border counter-rotates 2° · EXPLORE 40 px glaze ring reading "explore" that catches the sheen over tiles · ENTER flower with a leaf arrow → · VIEW glaze ring reading "view" · TRACE rosette outline reading "trace" over the vine route. **Touch fallback:** no cursor or trails; a tap triggers the glaze sheen once; the plate stays still. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — TileFrame: glaze-white card on the square module, radius 8 px, a fine cobalt line + dot border inset 8 px, a glaze highlight streak, padding 32 px (24 px mobile). **States:** default glazed tile · hover a glaze sheen slides across once (800 ms) · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active returns · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the border paints itself (≤ 1.6 s); blank glazed tile `AssetSlot` for missing assets. **Motion:** brush 350–500 ms per petal. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Small glazed label, radius 2 px, Inter Tight 600 11 px uppercase with a 1 px outline. **Pending verification**: earth-ink + dotted underline on the claim. **DEMO · not live data**: forest fill with glaze-white text — never cobalt, so it cannot be read as decoration. **States:** default label · hover none · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** fade 200 ms. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — White tile card with a 56 px field, 1 px cobalt underline, bottle ID in JetBrains Mono 18 px, label above; demo ID prefilled; error earth-ink + icon. **States:** default tile field · hover underline 2 px · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active cobalt focus ring · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the result paints a vine route node by node. **Motion:** 1500 ms per node. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — painted border strip (cobalt vine with turquoise leaves and dotted lines, 24–40 px tall) or a single fine cobalt rule; BorderTransition unrolls it across the seam. **States:** default static · hover none · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** unroll 900 ms. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Mono chapter number in cobalt, Cormorant title, optional single approved Devanagari craft word in Tiro; a shaded petal as the marker. **States:** default static · hover none · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** petal paints 400 ms; title settles 12 px. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Info panel on milk with a thin cobalt rule: V-code (mono), name in Cormorant 500 H2, the `desigo.ts` line, price *pending* (hidden in production), size, descriptors *pending* with petal bullets. **States:** default static · hover descriptor shows its source note · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading skeleton. **Motion:** rows 60 ms stagger. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — Bottle at the plain white centre of a circular painted plate border (cobalt vines, turquoise buds); nothing painted in the bottle zone; contact shadow on glaze with a faint glossy reflection. **States:** default idle float ±6 px over 6 s · hover pointer tilt ±6°; plate counter-rotates 2° · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active drag turns the viewer and the plate rotates in step · disabled n/a · loading still render inside the plate + glazed-tile `AssetSlot`. **Motion:** plate rotation ≤ 20° per chapter with scroll. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — Rosette node: 20 px painted rosette (cobalt outline, glaze centre) on a painted vine route; on forest it reverses to milk-white line; label Inter Tight 13 px + mono ID. **States:** default outline rosette · hover rosette fills with a pale cobalt wash · focus-visible 2 px `#1F3F8F` ring, 3 px offset · active a pale blue glow travels 1500 ms per hop; panel opens · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading vine paints forward with scroll. **Motion:** hop 1500 ms. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** 1.5 px cobalt line icons on a 24 px grid; the active mark is a single shaded petal
- **Illustration technique:** ≈ 40 brush strokes painted by a named Jaipur blue-pottery artisan on paper and tile, scanned at 1200 dpi with stroke order, vectorised with variable-opacity fills; motifs: flowers, vines, birds in profile, wheat, geometry — no deities, court figures or decorative cows
- **Photo treatment:** commissioned pieces (cradle, bowl, tiles) and workshop photography on milk-white ground, neutral glaze-true grade; artisan credited and consenting; craft facts reviewed by the artisan or a craft expert

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | glaze sheen, reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | border transition |
| `--ease-brush` | `cubic-bezier(.33,0,.2,1)` | petal painting (signature: loaded brush releasing pigment) |
| `--dur-micro` | 200 ms | petal cursor, hover |
| `--dur-reveal` | 500 ms | one petal (350–500 ms) |
| `--dur-scene` | 900 ms | border unroll across a seam |
| `--border-paint` | ≤ 1600 ms, staggered | a whole border paints in |
| `--sheen` | 800 ms, once | glaze streak |
| `--plate-rotate` | ≤ 20° per chapter | turning plate with scroll |
| `--float` | ±6 px / 6000 ms | bottle idle |
| `--hop` | 1500 ms | vine-route glow |

- **Signature transition:** a painted border unrolls horizontally across the seam (900 ms); strokes paint in the artisan's recorded stroke order
- **Scroll behaviour:** the plate turns slowly like a pot on a wheel; borders paint as their chapter settles
- **Reduced-motion fallback:** patterns appear fully painted; no sheen, no plate rotation, no cursor trail

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _Jaipur blue pottery style, hand-painted cobalt blue #1F3F8F and turquoise #2F9AA8 as the only painted colours on glossy white glaze #FBFAF6, soft glaze highlights, restrained composition with a large plain white centre, warm natural light, premium, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| BP1 | `web/public/desigo/styles/gzhel/hero.png` | 3200×2000 (16:10) | No | Top-down view of a large glossy white glazed surface with a circular hand-painted border of cobalt vines, five-petal flowers and turquoise buds, the large centre completely plain white, soft glaze highlight, milk-white surround | deities, figures, cows, all-over pattern, cracks | Hero desktop |
| BP2 | `web/public/desigo/styles/gzhel/hero-portrait.png` | 1400×2400 (7:12) | No | Portrait composition of the same painted circular border, centred in the middle third, plain white centre, milk-white surround above and below | figures, all-over pattern | Hero mobile |
| BP3 | `web/public/desigo/styles/gzhel/plate-master-26.png` | 3000×3000 | No | Circular blue-pottery plate border of dense cobalt leaves and vines with copper-green #1F5C45 leaf accents, plain white centre | counted herbs, figures | MASTER 26 world |
| BP4 | `web/public/desigo/styles/gzhel/plate-root-14.png` | 3000×3000 | No | Circular blue-pottery plate border of cobalt rosettes and stepped geometric bands with a few tiny madder-red #B3202A dots, plain white centre | large red areas, figures | ROOT 14 world |
| BP5 | `web/public/desigo/styles/gzhel/plate-base-3.png` | 3000×3000 | No | Circular blue-pottery plate border of cobalt wheat-ear sprays and a small sun rosette with ochre #B8863B accents, plain white centre | sun face, figures | BASE 3 world |
| BP6 | `web/public/desigo/styles/gzhel/plate-essential.png` | 3000×3000 | No | A single thin cobalt ring with two small painted leaves on glossy white glaze, extremely restrained, plain white centre | extra ornament | ESSENTIAL world |
| BP7 | `web/public/desigo/styles/gzhel/vine-route.png` | 3600×2000, transparent | Yes (real alpha) | A single hand-painted cobalt vine meandering across the frame with eight small painted rosettes along it as stops, turquoise buds, on transparent background | map labels, numbers, birds crowding | Traceability (ch. 06), Trace-your-milk |
| BP8 | `web/public/desigo/styles/gzhel/glaze-tile.png` | 2048×2048, seamless | No | Seamless glossy white ceramic glaze surface with very subtle soft reflections and tiny natural variations, flat light | crackle, stains, pattern | TileFrame texture |
| BP9 | `web/public/desigo/styles/gzhel/border-strip.png` | 3600×400, transparent, tileable horizontally | Yes (real alpha) | Horizontal hand-painted border of cobalt vines with small turquoise leaves and a fine dotted line above and below, Jaipur blue-pottery style, on glossy white | figures, text | Dividers, BorderTransition |
| BP10 | `web/public/desigo/styles/gzhel/ghee-cradle.png` | 3200×2000 | No | A glossy white Jaipur blue-pottery shallow dish with a cobalt and turquoise floral rim and a fine gold edge, empty, on a milk-white linen surface, warm light, empty centre for a jar | jar, ghee, festival lamps, deities | Ghee (ch. 12) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/46_gzhel.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/gzhel/
- [ ] Cobalt + turquoise ≤ 12% of every screen (measured on screenshots)
- [ ] Strokes and patterns are artisan-commissioned and credited; AI images are look-development only
- [ ] Nothing painted over the bottle, label or milk; gifting shown only if the product exists
