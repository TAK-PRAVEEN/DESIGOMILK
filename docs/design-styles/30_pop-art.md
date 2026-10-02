# 30 · Pop Art — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Pop Art (UK and USA, 1955–1970) took the visual language of mass production (packaging, comics, advertising, celebrity) and put it in the gallery. Its signatures: flat saturated colour, Ben-Day halftone dots, thick black outlines, repetition of an everyday product, speech bubbles and bold sans lettering. It celebrates the ordinary object.

Reference points:
1. **Andy Warhol, *Campbell's Soup Cans* (1962)** and the silkscreen repeats: one grocery product, repeated, each in a different colour.
2. **Roy Lichtenstein**: Ben-Day dots, black outlines, comic framing.
3. **Indian pop: matchbox labels, Bollywood hand-painted posters and 1970s Indian enamel product ads**, as well as contemporary Indian pop-graphic studios such as Kulture Shop. This is our Indian anchor.

## 2. Fit for DESIGO® — score 2 / 5 (whole site) · 4 / 5 (four-variant product line-up)

**Where it fights the brand.** Pop Art is ironic, loud, mass-market and comic. DESIGO® is premium, quiet, sincere and about provenance rather than packaging. Flat cartoon colour clashes with real farm photography and makes the lab chapter feel unserious. "Mass production" is the opposite of "traced from a known farm".

**Where it is genuinely powerful.** DESIGO® has **four bottles with four cap colours**. That is a Warhol repeat by nature. A **2×2 or 4×1 silkscreen grid of the bottle, each in its variant's colour world**, is a striking, ownable, shareable image for the /milk line-up, social, a launch poster or a fridge magnet. Warhol made a grocery product iconic, and that is exactly the job for a product line-up.

**Recommendation.** Not for the whole site. Use Pop Art for the **/milk line-up page or Chapter 08 intro**, plus campaign and social assets ("Four milks. Four colours. One source."). Keep heritage, farm, lab and trace in the main style. The full plan is below for completeness.

## 3. Art direction

### Palette ("four-cap silkscreen")
| Token | Hex | Role |
|---|---|---|
| `--pop-milk` | `#F7F4EC` | Paper ground |
| `--pop-ink` | `#171918` | Outlines (3px), type |
| `--pop-master` | `#1F5C45` | MASTER 26 field |
| `--pop-master-dot` | `#7FE0B8` | MASTER 26 halftone dots |
| `--pop-root` | `#B3202A` | ROOT 14 field |
| `--pop-root-dot` | `#F3D9D6` | ROOT 14 dots |
| `--pop-base` | `#E89A1C` | BASE 3 field |
| `--pop-base-dot` | `#5A3304` | BASE 3 dots |
| `--pop-ess` | `#CDB89A` | ESSENTIAL field |
| `--pop-ess-dot` | `#F4EDE2` | ESSENTIAL dots |
| `--pop-forest` | `#0B3B32` | Brand anchor, footer |

No primary yellow, no cyan, no hot pink. The cap colours *are* the pop palette, and that keeps it on-brand.

### Typography
- Display: **Anton** (OFL) uppercase, tight leading 0.9, for 1–4-word statements. Alternative: **Archivo Black** for numerals ("26", "14", "3", "E").
- Editorial: **Fraunces** italic for one sincere line per section.
- UI and body: **Inter Tight**.
- Data: **JetBrains Mono**.
- Speech/label bubbles: Inter Tight 700 uppercase, inside a clean SVG bubble. No Comic Sans-likes, no Bangers.

### Texture and imagery
- **Halftone**: Ben-Day dots generated in SVG `<pattern>` (dot 4–8px, 45°), never as JPEG noise. Dots appear in fields and shadows, never on the bottle's glass or the milk.
- **Silkscreen offset**: a 3px misregistration of the colour field behind the bottle (not the bottle itself).
- **Bottle treatment**: the real render stays photographic. Pop is the *environment*, the product stays real. An optional "posterised" bottle (4-tone) appears only in social/campaign assets, never on product pages where the label must be read.
- **Photography**: farm photos stay real, framed in a thick ink-outlined panel like a comic frame, with no halftone over faces or animals.

### Iconography
Bold filled icons with 2.5px ink outline, slightly rounded corners (4px), on coloured circles.

### Grid
A strict 2×2 / 4×1 **repeat grid** for products (equal cells, 3px ink gutters). Elsewhere 12 columns with comic-panel framing: panels with 3px outlines and 12px gaps. Mobile: 1-column panels, products as a 2×2 that fits one screen.

## 4. Motion and interaction language
- **Snappy but not bouncy.** Reveals 400ms `cubic-bezier(.2,.8,.2,1)`. Panels "print in": the colour field appears, then the dots fade in 200ms later (two-pass print). No overshoot, honouring the master system rule.
- **Repeat sequence.** On /milk, the four cells fill one after another (150ms stagger) like a silkscreen pass, then the bottles drop into place (translateY 24px → 0, 500ms).
- **Cursor.** A 16px solid ink dot. Over a variant cell it becomes that variant's dot colour, scaled 2×, with the variant numeral inside. Over links: an underline in 3px ink. Over the bottle: `DRAG`.
- **Hover on cells.** The halftone dot size grows 4 → 7px (300ms) and the misregistration shifts by 3px. This is a "press" feeling.
- **Transitions.** A comic-panel wipe: the next panel slides in from the right with its outline drawn first (500ms).

### The bottle
The bottle sits centred in its colour cell on a flat ink contact shadow (a solid ellipse, Lichtenstein style) instead of a soft blur. No floating in this style. It "stands" like a product on a shelf. Tilt ±6°. The 360 viewer sits inside an ink-outlined frame with flat colour, and the dots pause during drag so they don't moire.

## 5. Variant worlds — one cell each

| Variant | Field | Dots | Numeral | Bubble copy (approved only) |
|---|---|---|---|---|
| MASTER 26 (V1+) | `#1F5C45` | `#7FE0B8` 6px | "26" in Archivo Black milk | "Twenty-six herbs." (*pending*) |
| ROOT 14 (V1) | `#B3202A` | `#F3D9D6` 6px | "14" | "Fourteen herbs, rooted in free grazing." (*pending*) |
| BASE 3 (V2) | `#E89A1C` | `#5A3304` 5px | "3" | "The everyday foundation." |
| ESSENTIAL (V3) | `#CDB89A` | `#F4EDE2` 4px | "E" | "Simple, balanced, honest." |

The info panel sits below the cell as a white card with a 3px ink outline: V-CODE, name, price (*pending*), descriptors (*pending*).

## 6. Page-by-page treatment

1. **Hero.** Recommended Pop use: the **4-up silkscreen** of the four bottles, then it collapses into the single hero bottle on milk ground. "Milk from the source." in Anton, with the sincere Fraunces line below.
2. **Bottle becomes the story.** Six words as six comic panels around the bottle, each with one line.
3. **Cow to bottle.** A comic strip of seven panels (real photo inside each, ink frame, caption box). The milk line runs through the gutters.
4. **Farm.** Style eases: large real photos in a single thick frame, no dots.
5. **Breeds.** Six portrait panels in a 3×2 grid with caption boxes (*pending* labels).
6. **Traceability.** A clean map with ink nodes and coloured cap-dot path. "Illustrative journey — not live data" in a caption box.
7. **Quality.** Pop off. Clinical milk page, "16" in Archivo Black, list of parameters. Values pending.
8. **Four milks.** The style's centrepiece: each variant fills the screen as its cell, then the four reassemble into the 2×2 at the end.
9. **Milk as material.** A milk splash rendered as flat posterised shapes (SVG, 4 tones) on forest. A single moment of "pop" milk, since flat shapes keep it clean.
10. **Heritage.** Indian matchbox-label style: a framed cow illustration with a border, commissioned from an Indian illustrator.
11. **Technology.** Seven verbs as seven bold icons in circles with captions.
12. **Ghee.** A vintage Indian label-style panel built from the real jar's folk border. Three grades.
13. **Trace your milk.** An input in a bold frame; the result is a 7-panel strip, each panel stamped DEMO.
14. **Story.** Panels with dates (verified only).
15. **Final CTA.** The 2×2 returns, then fades to forest. "Know where your milk comes from."

### Inner pages
- **/milk**: **primary Pop page**. The 2×2 silkscreen, hover to press, click to enter a variant.
- **/milk/[variant]**: the cell hero, then calm facts and the 360 viewer.
- **/ghee**: three jar cells in gold tones `#C8A96B` / `#E8C77A` / `#8C6A43`.
- **/origin**: documentary (pop off).
- **/trace**: map.
- **/technology**: icon panels.
- **/about**: comic-strip timeline (verified items only).
- **/reserve**: four cells as product selectors, then a plain form.

## 7. Component variants
`SilkscreenGrid` (2×2 / 4×1) · `HalftoneField` (SVG pattern, variant-aware) · `InkPanel` (outlined frame) · `CaptionBox` · `SpeechBubble` (approved copy only) · `ShelfBottle` (flat ink shadow) · `ComicStrip` (JourneyTrack) · `PanelWipe` · `DotCursor` · `AssetSlot` as an empty ink panel captioned "Photo pending".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Cap-colour pop palette | Tokens, halftone generator, specimen | No off-brand primaries; dots SVG-only | Cap colours confirmed (C) | 2 |
| 2 | Shell | Panels grid, nav, dot cursor | Shell | 3px outlines crisp at all DPRs | none | 2 |
| 3 | Hero and bottle | 4-up → single bottle | Hero | Bottles photographic; dots never on glass | Renders | 3 |
| 4 | Bottle → story | Six panels | Chapter 02 | Panels readable on mobile | Copy | 2 |
| 5 | Cow → bottle | Comic strip | `ComicStrip` | Captions approved copy only | B4, B8 | 4 |
| 6 | Origin | Framed documentary | Chapter 04 | No halftone on people or animals | B1, B2 | 2 |
| 7 | Breeds | 3×2 panels | Chapter 05 | Pending labels | B3 | 2 |
| 8 | Trace map | Ink map | TraceMap skin | Keyboard; DEMO | traceNodes | 3 |
| 9 | Quality | Clinical | Chapter 07 | Pop off; no invented values | Lab approval | 2 |
| 10 | Four worlds + 360 | Cells → 2×2 | Chapter 08 | Moire-free during drag | A | 5 |
| 11 | Heritage | Matchbox-label panel | Chapter 10 | Commissioned illustration | Illustrator | 3 |
| 12 | Technology | Icon panels | Chapter 11 | Public vocabulary | none | 2 |
| 13 | Ghee | Label panel | Chapter 12 | Folk border from the real label | Jar label art | 2 |
| 14 | Trace demo | 7-panel result | Chapter 13 | DEMO on every panel | demoProvider | 3 |
| 15 | /milk pages | Silkscreen line-up | 5 routes | /milk is shareable as an image (OG card) | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Origin pop-free | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Inner | 3 routes | Verified only | none | 3 |
| 18 | Mobile | 2×2 on one screen | Mobile pass | Dots scale with DPR; 360px safe | none | 3 |
| 19 | A11y + reduced motion | Calm print | No press, no wipe | Variant cells have text labels, not colour alone | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, OG images, handover | LCP < 2.5s; patterns CPU-cheap | all | 3 |

Total ≈ 56 days whole site; /milk + Chapter 08 + social kit only ≈ 18 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A). The 2×2 grid needs all four bottles lit identically.
- Confirmed cap colours (C), which are the palette.
- The ghee jar label artwork (vector or high-resolution scan) for the folk border.
- Budget for an Indian illustrator (matchbox-label heritage panel).

## 10. Performance, accessibility and mobile
- Halftone via one SVG `<pattern>` per variant; no canvas. Pause hover animation on touch.
- Colour is never the only identifier. Each cell has name and numeral text.
- Body text on milk only; never on dotted fields.
- Reduced motion: cells appear printed, no press, no wipe.
- Mobile: 2×2 fits in 100svh at 360px; panels stack; outlines 2px.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Only the four cap colours, milk, ink and forest. No primary-yellow / cyan comic palette.
2. Halftone never on glass, milk, faces or animals.
3. The bottle is always the real photograph on product pages.
4. Copy stays sincere. No "POW!", "WOW!", or jokey onomatopoeia.
5. Gallery framing: big margins, a few perfect panels. A gallery wall, not a comic book.
6. Farm, lab, trace and origin stay documentary.
7. Pending claims keep their marker inside bubbles and captions.

**Risks**: a cheap or kids' brand impression, irony undermining trust. Mitigation: line-up-only scope, gallery restraint, cap-colour palette.

**Best used for:** the /milk four-variant line-up (a Warhol-style 2×2 of the four cap colours), plus launch posters and social.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Cap-colour palette and guardrails were good; missing were colour roles (surface, muted text, states), font packages and sizes, component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Anton, Archivo Black, Fraunces, Inter Tight); no claim violations found.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#171918` | ink: 3 px outlines, primary CTA plate, numerals | 16.1:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F7F4EC` | label on ink plates | 16.1:1 on primary |
| Secondary | --c-secondary | `#0B3B32` | brand anchor: secondary CTA, footer | 11.3:1 vs bg (body-safe) |
| Accent | --c-accent | `#B3202A` | focus ring, active marker, ROOT red highlight | 6.1:1 vs bg (text-safe) |
| Background | --c-bg | `#F7F4EC` | paper ground | 16.1:1 with text |
| Surface | --c-surface | `#FFFFFF` | white info cards and caption boxes inside 3 px ink outlines | text on surface 17.7:1 |
| Text | --c-text | `#171918` | body text (only on milk or white, never on dotted fields) | 16.1:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#4D4130` | captions, small print (ESSENTIAL deep) | 9.0:1 vs bg (body-safe) |
| Line | --c-line | `#171918` | 3 px ink outlines (2 px mobile), 3 px gutters | 17.6:1, structural |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#E89A1C` / `#171918` | ok = green filled check in a circle; pending = 2 px dotted amber underline + PENDING caption tag (also inside speech bubbles); DEMO = ink caption box with milk "DEMO · not live data" on every demo panel | DEMO box milk on ink = 17.6:1; amber underline is a marker only, claim text stays ink |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | field `#1F5C45`, dots `#7FE0B8` 6 px, numeral "26" in milk Archivo Black, bubble "Twenty-six herbs." (*pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | field `#B3202A`, dots `#F3D9D6` 6 px, "14", bubble "Fourteen herbs, rooted in free grazing." (*pending*) |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | field `#E89A1C`, dots `#5A3304` 5 px, "3", bubble "The everyday foundation." |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | field `#CDB89A`, dots `#F4EDE2` 4 px, "E", bubble "Simple, balanced, honest." |

Dark-chapter inversion: Milk-as-material (ch. 09), footer and the final CTA fade to forest: `--c-bg` → `#0B3B32`, `--c-text` → `#F7F4EC`, outlines → `#F7F4EC`, `--c-primary` → `#F7F4EC` plate with ink label, logo → white. Quality, Origin and Trace run "pop off" on plain milk.

Additional style tokens (kept from §3): Halftone dot tokens `--pop-master-dot` `#7FE0B8`, `--pop-root-dot` `#F3D9D6`, `--pop-base-dot` `#5A3304`, `--pop-ess-dot` `#F4EDE2`; ghee cells `#C8A96B` / `#E8C77A` / `#8C6A43`. No primary yellow, cyan or hot pink.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Anton | `@fontsource/anton` | 400 (single weight) | `clamp(3.5rem, 2rem + 7vw, 9.5rem)` | 0.9 | 0 | Upper, 1–4 words |
| Headline H1–H2 | Anton (H1) · numerals Archivo Black · Fraunces Italic (sincere line) | `@fontsource/anton` · `@fontsource/archivo-black` · `@fontsource-variable/fraunces` | 400 · 400 · italic 400 | H1 `clamp(2.6rem, 1.6rem + 4vw, 5.5rem)` · H2 `clamp(1.6rem, 1.2rem + 1.8vw, 2.6rem)` · numerals `clamp(6rem, 4rem + 10vw, 16rem)` | 0.95 · 1.15 | 0 · 0 | Upper · sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `clamp(1rem, .95rem + .25vw, 1.125rem)` | 1.55 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 700 (bubbles, captions) | `.8rem` | 1.2 | +0.08em | Upper |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 500 | `.875rem` | 1.4 | +0.02em | Upper |
| Devanagari (optional) | Noto Sans Devanagari | `@fontsource-variable/noto-sans-devanagari` | 600 / 800 | matches H2 / body | 1.4 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Anton, Archivo Black, Fraunces, Inter Tight, JetBrains Mono, Noto Sans Devanagari: OFL 1.1, no replacement needed (Bangers and Comic-Sans-likes stay banned). Pairing: condensed Anton shouts like a silkscreen poster, Fraunces italic adds one sincere line so irony never wins.

### 12.3 Layout & surfaces
- Product grid: strict 2×2 / 4×1 repeat, equal cells, 3 px ink gutters; on mobile the 2×2 fits 100svh at 360 px.
- Elsewhere: 12 columns, comic-panel framing, 3 px outlines with 12 px gaps, gallery margins (≥ 8vw desktop), max-width 1360 px.
- Spacing (4 px base): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Radius: `sm 0` · `md 4px` (icons, bubbles) · `lg 0` (panels are square); pill only for cursor and dot badges.
- Border: 3 px `#171918` (2 px mobile).
- Shadow: flat offset only `6px 6px 0 #171918` on raised cards; bottle gets a solid flat ink ellipse (Lichtenstein shadow), no blur.
- Texture: SVG `<pattern>` Ben-Day dots (4–8 px, 45°) in fields and shadows only, never on glass, milk, faces or animals; 3 px silkscreen misregistration of the field behind the bottle.

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: ink plate: `#171918` fill, milk Inter Tight 700 upper label + arrow, 3 px ink border, 52 px, padding 16 px 26 px, radius 0. States: default · hover halftone press: plate shifts 3 px with offset shadow `3px 3px 0` collapsing to 0 (200 ms) · focus-visible 3 px `#B3202A` ring offset 3 px · active pressed flat · disabled 35% + diagonal hatch · loading three ink dots printing in sequence. 44 px target.
- **Secondary button**: white plate with 3 px ink border and ink label + arrow, `6px 6px 0` offset shadow; hover shadow 6 → 3 px; focus red ring; active 0 px; disabled 35%; loading dots.
- **Text / arrow link**: Inter Tight with 3 px ink underline; hover underline thickens to 6 px in the active variant colour; focus red ring; arrow travels 4 px.
- **Icon button (incl. menu)**: 48 px coloured circle (variant colour) with 2.5 px ink outline and filled ink glyph, 4 px glyph corners. Menu = stacked bars → X. Hover dots grow 4 → 7 px · focus red ring · active pressed · disabled 35%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: milk bar 72 px (56 px mobile) with a 3 px ink bottom border, logo left, links Inter Tight 700 upper, RESERVE as ink plate. Mobile: menu opens a full-screen 2×2 of the four cap colours, each cell a link (text labels, not colour alone), focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default 16 px solid ink dot · hover link: dot becomes a 3 px underline cap · over a variant cell: dot takes the cell dot colour, scales 2×, numeral inside · ROTATE `DRAG` over the bottle · EXPLORE `LOOK` dot 44 px over panels · ENTER `ENTER →` over variant cells · VIEW over framed photos · TRACE ink crosshair over map nodes. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: InkPanel: white surface, 3 px ink outline, square, padding 24 px; caption box (ink-outlined white strip) top-left. Hover (interactive): `6px 6px 0` shadow appears; focus red ring.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: caption-box badge: Inter Tight 700 11 px upper, 26 px tall, 2 px ink border. Pending verification: dotted amber underline + `PENDING` caption tag, also inside bubbles. DEMO · not live data: ink box, milk text, stamped on every demo panel.
- **Input + form field (Trace-your-milk bottle ID)**: bold frame input: 56 px, 3 px ink border, white field, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`. States: hover offset shadow 3 px · focus-visible red ring 3 px · error `#B3202A` caption box below · disabled 35% hatch · loading dots. Visible `<label>`; DEMO box beside.
- **Divider / ornament**: 3 px ink rule with a row of four 12 px dots in the cap colours at centre.
- **Section header (chapter number + title pattern)**: large Archivo Black chapter number (`08`) in an outlined circle + Anton title + one Fraunces italic sincere line.
- **Product info block (variant name, code, price-pending, size, descriptors)**: white card under the cell, 3 px outline: V-CODE mono, name Anton, numeral echo, size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline, descriptors pending-marked, CTA ink plate `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: bottle (real photograph, never posterised on product pages) centred in its colour cell, standing on a flat ink ellipse shadow; no float, tilt ±6°. Bottle360Viewer sits in an ink-outlined frame on flat colour; dots pause during drag to avoid moiré.
- **Trace node / timeline step**: node = 20 px ink-outlined circle filled with a cap colour; path = 4 px cap-colour line with ink edges; step = comic panel with caption box. States idle · hover dots grow · focus red ring · active panel opens · pending white node with dashed outline.

### 12.5 Iconography & illustration
- Icons: bold filled glyphs with 2.5 px ink outline, 4 px corners, on 48 px coloured circles; 24 px base grid.
- Illustration: flat four-tone posterised shapes (milk splash), commissioned Indian matchbox-label heritage panel; never comic onomatopoeia.
- Photography: real, inside thick ink-outlined frames; no halftone over people or animals; posterised 4-tone bottle allowed only on social/campaign assets.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.2,.8,.2,1)` | snappy reveals (no overshoot) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | panel wipes |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle drop-in |
| `--dur-micro / reveal / scene` | 200 / 400 / 1000 ms | press · print-in · scene |
| `--pop-print` | field 0 ms → dots +200 ms | two-pass print-in |
| `--pop-repeat` | 150 ms stagger, bottle drop 500 ms (24 px) | silkscreen cell fill on /milk |
| `--pop-wipe` | 500 ms, outline first | comic panel wipe |

- Snappy but never bouncy; the master no-overshoot rule holds.
- Signature: the four cells fill one after another like a silkscreen pass, then the four bottles drop in.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: cells appear printed, no press, no wipe.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *flat silkscreen pop-art print, cap-colour palette only: bottle green #1F5C45, crimson #B3202A, amber #E89A1C, sand #CDB89A, milk white #F7F4EC, ink #171918, Ben-Day halftone dots, slight print misregistration, gallery-clean, premium, no primary yellow, no cyan, no pink, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/pop-art/hero-landscape.png` | 3200×2000 (16:10) | no | Four equal flat silkscreen colour fields in a 2×2 grid separated by thin black gutters, bottle green, crimson, amber and sand, each with fine Ben-Day halftone dots in its light tone at 45 degrees, slight misregistration, paper grain, each field empty at its centre (reference/social only; production dots stay SVG) | comic characters, speech text, onomatopoeia, bottles, faces | Hero 4-up (ch. 01), OG image |
| 2 | `web/public/desigo/styles/pop-art/hero-portrait.png` | 1400×2400 (7:12) | no | Tall 2×2 silkscreen grid of bottle green, crimson, amber and sand fields with Ben-Day dots and thin black gutters, centres empty | comic characters, text, bottles | Hero mobile, story format |
| 3 | `web/public/desigo/styles/pop-art/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Flat silkscreen colour field in bottle green #1F5C45 with mint #7FE0B8 Ben-Day dots 6 mm at 45 degrees, a slight 3 px misregistered offset of a darker green plate, paper grain, empty centre | objects, leaves, text, gradients | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/pop-art/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Flat silkscreen colour field in crimson #B3202A with pale rose #F3D9D6 Ben-Day dots at 45 degrees, slight misregistration, paper grain, empty centre | objects, text, gradients, pink neon | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/pop-art/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Flat silkscreen colour field in amber #E89A1C with deep brown #5A3304 Ben-Day dots at 45 degrees, slight misregistration, paper grain, empty centre | objects, text, primary yellow, gradients | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/pop-art/world-essential.png` | 3200×2000 + 1400×2400 crop | no | Flat silkscreen colour field in sand #CDB89A with ivory #F4EDE2 small Ben-Day dots at 45 degrees, very slight misregistration, paper grain, empty centre | objects, text, gradients | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/pop-art/journey-strip.png` | 3600×1200 (3:1) | no | Seven square panels in a row with thick black outlines, flat screen-printed illustrations in the cap colours: a zebu cow with hump grazing (respectful, realistic proportions), a small farm shed with a khejri tree, a steel milk can, a round test card with sixteen dots, a steel milk chiller, a small clean dairy building, a delivery bicycle with an empty crate | speech bubbles, captions, cartoon faces, Holstein cow, bottles | Cow → bottle ch. 03 (ComicStrip) prototype |
| 8 | `web/public/desigo/styles/pop-art/trace-ink-map.png` | 3000×2000 | yes (real alpha) | Flat ink map diagram: bold black-outlined circles as nodes joined by a thick path banded in bottle green, crimson, amber and sand, converging on one hub, isolated on transparent background | labels, roads, country borders, arrows with text | Traceability ch. 06 |
| 9 | `web/public/desigo/styles/pop-art/texture-newsprint.png` | 2048×2048, seamless | no | Seamless tileable warm milk-white newsprint paper texture with very faint halftone speckle and fibres, flat even light | printed text, stains, folds, vignette | Paper ground |
| 10 | `web/public/desigo/styles/pop-art/heritage-matchbox.png` | 2000×2400 (5:6) | no | Indian matchbox-label style illustration of a zebu cow standing in a field under a rayed sun, flat four-colour print in bottle green, amber, crimson and cream, ornamental leaf border with no lettering, respectful (placeholder for the commissioned illustrator) | text, brand names, numbers, cartoon cow, religious figures | Heritage ch. 10 (placeholder) |
| 11 | `web/public/desigo/styles/pop-art/milk-posterised.png` | 2400×2400 | yes (real alpha) | Milk crown splash rendered as flat posterised screen-print shapes in four tones of white and cream with thin ink edges, isolated on transparent background | photoreal, glass, bottle, text | Milk as material ch. 09 |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/30_pop-art.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/pop-art/
- [ ] Halftone never on glass, milk, faces or animals; bottle photographic on product pages
- [ ] Each variant cell carries text name + numeral (not colour alone)
