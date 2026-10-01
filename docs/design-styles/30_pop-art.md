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
