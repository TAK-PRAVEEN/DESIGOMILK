# 23 — Victorian · DESIGO® build plan

**Fit score: 3 / 5** · **Best used for:** chapter 05 *Breeds* (engraved natural-history plates), chapter 10
*Heritage* and chapter 12 *Ghee* (an ornate trade-label tradition), plus the /origin breed index. The style is
re-rooted in **19th-century Indian print culture** (natural-history plates, lithographed trade labels and
letterpress) rather than in Raj-era nostalgia. It is not suitable as the whole-site language.

---

## 1. Style essence

Victorian graphic design (c. 1837–1901) is the age of the steel engraving, the chromolithograph and the wood-type
poster: ornamental frames, banners and cartouches, many typefaces on one page (Didones, slab serifs, fat faces,
blackletter, decorative initials), fine cross-hatching, botanical and zoological plates and an exuberant belief in
craft and industry. Its signature is *abundance held in symmetry*.

**The DESIGO® adaptation.** A straight British-Victorian look on an Indian heritage brand risks colonial nostalgia,
so we draw on the period's **Indian** print and natural-history output instead: engraved livestock and natural-history
plates, lithographed trade and match-box labels from Indian presses, and letterpress shop bills. The technique stays
Victorian (engraving, ornament, cartouche) while the subjects, motifs and voice are Indian and DESIGO®'s own.

Three reference points:
1. **19th-century natural-history plates**: precise engraved animals with Latin names, plate numbers and hairline
   frames. The model for the breed plates.
2. **Indian lithographed trade labels** (textile mill, match and tea labels, c. 1880–1930): ornate borders,
   cartouches, bilingual type. The model for ghee.
3. **Victorian type specimen books** (Caslon, Figgins): contrast between fat faces, hairline Didones and engraved
   ornament. The model for headings.

## 2. Why it fits DESIGO® and where it fights

**Fits**
- **Breeds as plates.** The IA already scripts chapter 05 as a "Victorian botanical plate". Engraved portraits of
  Gir, Tharparkar, Red Sindhi, Sahiwal, Rathi and Kankrej (with regions) are informative, dignified and beautiful.
- **Ghee is a heritage product** (bilona). An ornate label-inspired frame suits jars, gifting and the brand's folk
  label.
- **Engraving implies documentation and care.** It suits a brand built on record-keeping.
- Craft-industrial optimism parallels "Tradition is the source. Technology protects the journey."

**Fights**
- Visual density competes with the minimal hero and the Apple-launch pace.
- It risks antique-shop kitsch or "colonial club" connotations.
- Old-fashioned implies "old product", while DESIGO® milk is fresh and modern in its traceability.

**Verdict: 3/5.** Use it as an **archival layer** for breeds, heritage and ghee, framed by clean modern pages.
The full plan follows.

## 3. Art direction

### Palette: "Engraver's Archive"
| Token | Hex | Use |
|---|---|---|
| `--plate-paper` | `#EDE4D0` | Plate stock (brand paper) |
| `--plate-paper-aged` | `#E3D5B8` | Plate edges, foxing-free aged tone |
| `--engrave-ink` | `#1E211F` | Engraving lines, text |
| `--sepia` | `#5B4631` | Secondary engraving, captions (≈ 8:1 on paper) |
| `--forest` | `#0B3B32` | Headings, cartouche fills |
| `--earth` | `#8C6A43` | Ornament |
| `--gold` | `#C8A96B` | Gilt rules, ghee frames |
| `--gilt-deep` | `#A08245` | Gold on light (legible line) |
| `--vermilion` | `#B3202A` | Rubrication, single accents (= ROOT cap) |
| `--milk` | `#F7F4EC` | Modern framing pages |

Chromolithograph tints for variant plates (flat tints in the engraving, max 2 per plate): MASTER `#1F5C45` +
`#D9E8DF` · ROOT `#B3202A` + `#F3D9D6` · BASE `#E89A1C` + `#F8E4C2` · ESSENTIAL `#CDB89A` + `#F4EDE2`.

### Typography
- **Display (headline):** *Playfair Display* (OFL) 900 / Black Italic, a Victorian-flavoured high-contrast face
  for chapter titles. *Bodoni Moda* is the alternative.
- **Small caps and plate captions:** *Cormorant SC* (OFL) for "PLATE V · THARPARKAR".
- **Engraved text face:** *IM Fell English* (OFL), a period-authentic text face for short archival captions only
  (≤ 30 words, ≥ 18 px).
- **Body (readability):** *Fraunces* (brand) at opsz 14, weight 400, 18/30, warm and period-compatible while modern.
- **Devanagari display:** *Rozha One* (Indian Type Foundry, OFL), a high-contrast Devanagari that is the perfect
  bilingual partner on labels.
- **Data:** *JetBrains Mono* (modern frames only).

### Texture, imagery, iconography
- **Engraving:** commissioned line art (vector, 0.4–1.2 px hatch) or high-quality line conversions of DESIGO®'s real
  breed photographs, redrawn by an illustrator so that they are traceable to real animals.
- **Ornament kit:** corner flourishes, rules (thick-thin), cartouches and banners, all drawn once as SVG and derived
  partly from the ghee label's folk border so ornament is DESIGO®-specific.
- **Paper:** plate stock with a subtle platemark (a debossed rectangle via inset shadow at 6%). No foxing stains,
  no tears and no fake ageing.
- **Rubrication:** a single vermilion initial or rule per page.
- **Icons:** engraved vignettes (milk can, bilona, glass bottle, scale, thermometer, cart) for the seven verbs.

### Grid
Classical symmetry: a centred 10-column plate grid inside the 12-column page, with plate proportions 4:5 and an
inner frame margin of 6% of plate width. Text blocks are justified with hyphenation (`hyphens: auto`) in plates only,
and ragged-right elsewhere.

## 4. Motion and interaction language

- **Print-like motion:** reveals are *ink-ups*. Lines appear via a mask wipe in the direction of hatch (900 ms,
  `cubic-bezier(.16,1,.3,1)`), followed by the chromolithograph tint fading in (600 ms, 200 ms delay), as if printed
  in passes.
- **Scroll:** plates slide like leaves of an album (each plate pinned 60vh, the next one rises over it).
  Ornament frames draw from the corners inward (1200 ms).
- **Hover:** plate captions underline with a thick-thin rule. Buttons sit in a small cartouche whose ornament
  extends 4 px on hover (240 ms).
- **Cursor states:** default = small engraved "pointing hand" ☞ glyph in sepia (period printer's fist, 20 px) ·
  link = fist plus underline flourish · drag (360) = circular engraved arrow ⟳ · view = magnifying-glass vignette ·
  disabled = faded fist. On modern pages the cursor reverts to the system default.
- **Transitions:** a page-turn cross-fade with a 1 px plate-edge highlight (600 ms).

## 5. The hero bottle and the four variants

The bottle remains **the real photographic render**, presented *inside* an engraved display: a cartouche frame,
a plinth and a label ribbon, like a specimen in a museum case. The contrast of modern glass in an archival frame
communicates "heritage, recorded in the present".

- Float ±10 px over 6 s, pointer tilt ±8°. The frame stays still and the bottle floats within it.
- Until 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards the viewer gets an engraved
  "turntable" plinth with degree marks every 30°, and frame 001 aligns with the "0°" mark.

| Variant | Victorian specimen plate |
|---|---|
| **MASTER 26** | "PLATE I": green chromolith tint, an engraved forest-canopy vignette above the cartouche and a banner "MASTER 26 · DESIGO® V1+". |
| **ROOT 14** | "PLATE II": vermilion rubrication, an engraved red-earth field with a khejri tree. |
| **BASE 3** | "PLATE III": amber tint, an engraved village lane at evening. |
| **ESSENTIAL** | "PLATE IV": almost no ornament, a single thin rule frame, ivory. It shows restraint within the style. |

Specifications appear in a **label cartouche**: code, net content (pending), price (pending, dotted underline),
and descriptors as an engraved list.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | **Modern** (milk white, Fraunces): the style does not lead the site. A single thin engraved rule beneath "Milk from the source." hints at what follows. |
| 02 | Bottle becomes the story | Modern with ornament: six words appear with small engraved vignettes (cow, field, leaf, hut, scale, path). Milk → forest. |
| 03 | Cow → bottle | An engraved panorama: seven stations as one continuous engraving read left to right. Captions from `journey[]`. |
| 04 | Where it begins | Modern documentary photography with engraved captions (Cormorant SC labels). |
| 05 | Breeds | **Signature.** Six plates "PLATE V–X", each an engraved breed portrait with name, region (from `breeds[]`), plate number and status line "Breed list client-stated · approval pending". Album scroll. |
| 06 | Traceability | Modern dark forest map, with nodes as small engraved vignettes. Illustrative label. |
| 07 | Quality | Modern Swiss lab layout. An engraved test-tube vignette only. "— pending lab confirmation". |
| 08 | Four milks | Four specimen plates (section 5) inside modern full-screen scenes. |
| 09 | Milk as material | Milk ribbon engraved, a hatch-shaded ribbon drawn on scroll (SVG paths). |
| 10 | Heritage | **Signature.** Paper, a big Playfair italic statement in a cartouche, an engraved cow (respectful, three-quarter view), thick-thin rules and a bilingual line in Rozha One (approved Hindi). |
| 11 | Technology | Modern dark UI. The historical bridge: an engraved milk can morphs into the glass bottle's QR identity, "Tradition is the source. Technology protects the journey." |
| 12 | Ghee | **Signature.** A trade-label composition: ornate frame from the jar's folk border, gilt rules, bilingual cartouche "Bilona Ghee · बिलोना घी", three grades as label variants V1, V2, V3 tied to their milks. |
| 13 | Trace your milk | Modern charcoal demo. A small engraved "receipt" styling for results, with DEMO in rubricated red. |
| 14 | Story | A ledger-style chronology with engraved year numerals. Verified milestones only (for example 2019, incorporation). |
| 15 | Final CTA | Modern milk → forest. A single ornament closes the page (a tailpiece). |

**Inner pages:** /milk has four specimen plates · /milk/[variant] is a modern scene with the plate cartouche, the
engraved-turntable 360 and a specification label · /ghee is the trade-label page · /origin is the breed album
(plates) plus feed and grazing documentary · /trace and /technology are modern with engraved vignettes · /about has
the ledger chronology (no supporters listed until written evidence is on file, KB Q34) · /reserve is a modern form with a small engraved
header.

## 7. Component variants

`SpecimenPlate` (frame, plate number, caption, tint layers) · `EngravedLine` (mask ink-up) · `Cartouche` · `Banner`
· `OrnamentCorner` · `ThickThinRule` · `PlateAlbum` (pinned stack) · `RubricInitial` · `LabelFrame` (ghee) ·
`EngravedVignette` (verbs) · `PrintersFistCursor` · `TurntablePlinth` · `LedgerTimeline` · `AssetSlot.plate`
("Plate in preparation: portrait of Rathi requested").

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Archive palette, Playfair/Cormorant SC/IM Fell/Rozha | Specimen page incl. Devanagari | IM Fell ≤ 30 words and ≥ 18 px; body in Fraunces; AA contrast | — | 3 |
| 2 | Grid & shell | Plate grid, ornament kit, cursor | Ornament SVG library, `PrintersFistCursor` | Ornament ≤ 60 KB; modern pages unaffected | Ghee label vector | 4 |
| 3 | Hero | Modern hero with a rule hint | Hero | LCP ≤ 2.5 s | Render | 1 |
| 4 | Bottle → story | Engraved vignettes | 6 vignettes, scene | Static in reduced motion | Illustrator | 3 |
| 5 | Cow → bottle | Engraved panorama | 7-station engraving | Line continuity; mobile vertical | Illustrator, B4, B6–B8 references | 7 |
| 6 | Origin / farm | Documentary plus engraved captions | Scene | — | B1, B2 | 2 |
| 7 | Breeds | Plate album | 6 engraved portraits, `PlateAlbum` | Drawn from real DESIGO® animals or verified breed references; breed experts check anatomy; status line | B3 (reference), illustrator | 8 |
| 8 | Trace map | Modern map plus vignettes | Map | Illustrative label | — | 3 |
| 9 | Quality | Modern lab | Panel | Pending values | — | 2 |
| 10 | Four worlds + 360 | Specimen plates, plinth | 4 plates, `TurntablePlinth` | Frame 001 = 0°; ornament never overlaps the bottle | 360 (A) | 7 |
| 11 | Heritage | Engraved tribute | Cow engraving, cartouche statement | Cultural review; Hindi approved | Hindi copy | 4 |
| 12 | Technology | Can → QR bridge | Morph scene | Public vocabulary | — | 3 |
| 13 | Ghee | Trade label | `LabelFrame`, 3 label variants | Derived from the real label; claims reviewed | Label vector, jar photos | 4 |
| 14 | Trace-your-milk | Engraved receipt | Demo | DEMO rubricated, per step | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | 2 templates | Pending styling inside cartouches | 360 (A) | 4 |
| 16 | /origin, /trace, /technology | Story pages | 3 templates | — | B1–B8 | 5 |
| 17 | /about, /ghee, /reserve | Remaining pages | 3 templates | Verified milestones only | B11 | 4 |
| 18 | Mobile | Plates scale cleanly | Mobile plates (single column, simplified ornament) | Hatching does not moiré at 1× (minimum line spacing 1.5 px) | — | 3 |
| 19 | A11y + reduced motion | Readable archive | Plate `alt` descriptions, static prints | WCAG 2.2 AA; ornament `aria-hidden` | — | 2 |
| 20 | Perf, QA, handover | Ship | SVG optimisation, perf report | Engravings ≤ 80 KB each (SVGO) or AVIF fallback; LCP ≤ 2.5 s | All | 4 |

**Total:** about 76 days (illustration-heavy). Breeds, heritage and ghee accent only: about 25 days.

## 9. Assets needed from DESIGO®

- **Breed reference photographs** (B3) of the actual cows in rotation, so that the engravings depict DESIGO®'s
  animals and not generic ones.
- The ghee jar label as vector (the source of the ornament kit).
- Approved Hindi wording for bilingual cartouches.
- An engraving illustrator (commission) or approval for our illustrator.
- 360 sequences, wordmark vector.

## 10. Performance, accessibility and mobile

- Engravings as optimised SVG (path simplification at 0.2 px tolerance). If one is > 120 KB, export an AVIF at 2×
  instead.
- Avoid moiré: minimum hatch spacing 1.5 CSS px on mobile, so use simplified engravings below 768 px.
- Alt text describes the animal factually ("Engraved portrait of a Tharparkar cow, standing, three-quarter view").
- IM Fell is used only for short captions, never for essential info.
- Reduced motion: plates appear fully printed, with no ink-up or album pinning.
- Mobile: single-column plates, cartouches simplified to a thick-thin rule frame.

## 11. Risks and premium guardrails

**Risks:** colonial-nostalgia reading; antique-shop kitsch; "old product" connotation; ornament crowding the bottle;
heavy illustration cost.

**Premium guardrails**
1. Indian subjects and DESIGO®-derived ornament only. No crowns, no British heraldry, no Raj imagery (pith helmets,
   colonial bungalows).
2. The style is an archive *within* a modern site. Hero, lab, trace and commerce stay modern.
3. No fake ageing: no stains, tears, burnt edges or sepia photo filters on real photos.
4. One ornament family, max 3 typefaces per plate, and a single rubrication colour.
5. Ornament never touches the bottle silhouette (keep a 64 px minimum gap).
6. Engraved breeds must be accurate and individual, with no generic "cow" drawings.
7. Period voice is *not* used for claims: no "purest", "finest", "by royal appointment" or medal-style badges unless real and verified.
8. Medal and seal motifs are only used for verified awards (none currently approved), never decoratively.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added Engraver's Archive tokens and state colours, Playfair/Cormorant SC/IM Fell/Rozha packages, all 14 components, motion tokens and 11 image prompts (plates, cartouches, ornament). Fonts already OFL. Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | forest: headings, cartouche fills, primary button | 9.9:1 vs bg. AAA. |
| Primary ink | --c-on-primary | `#EDE4D0` | plate paper on forest | 9.9:1 on primary. |
| Secondary | --c-secondary | `#B3202A` | vermilion rubrication: one initial or rule per page, DEMO | 5.3:1 vs bg. AA for text (rubricated initials are display size). |
| Accent | --c-accent | `#C8A96B` | gilt: rules, ghee frames, focus halo | 1.8:1 vs bg. Never text; focus ring forest 2 px + 3 px gilt halo. |
| Background | --c-bg | `#EDE4D0` | plate stock (archival chapters); modern framing pages use milk `#F7F4EC` |  |
| Surface | --c-surface | `#E3D5B8` | aged plate edges, cartouche panels |  |
| Text | --c-text | `#1E211F` | engraving ink | 12.9:1 on bg · 11.2:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#5B4631` | sepia captions | 7.0:1 on bg · 6.1:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#A08245` | gilt-deep rules (legible gold on light) | 2.9:1, rules only. |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#8C6A43` / `#B3202A` | MASTER green = verified; earth dotted underline = pending; rubricated red = DEMO | Red DEMO text 5.3:1 on plate paper. |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | PLATE I: green chromolith tint, engraved forest-canopy vignette above the cartouche, banner "MASTER 26 · DESIGO® V1+" |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | PLATE II: vermilion rubrication, engraved red-earth field with a khejri tree |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | PLATE III: amber tint, engraved village lane at evening |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | PLATE IV: almost no ornament, a single thin rule frame on ivory: restraint within the style |

**Dark-chapter inversion:** Modern dark chapters (06, 11, 13): bg → forest `#0B3B32` / charcoal `#171918`, surface → `#0F4A3F`, text → `#EDE4D0`, muted → `#C8B48E`, line → gilt `#C8A96B`, engraved vignettes drawn in plate-paper ink; rubrication stays `#B3202A` only on the DEMO "receipt" stamp (on a paper receipt panel, not on dark).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Playfair Display (variable) | `@fontsource-variable/playfair-display` (Google Fonts: Playfair Display) | wght 400–900 (use 900 + Black Italic) | clamp(3.5rem, 8vw, 8rem) | 0.95 | -0.01em | Sentence / UPPER for plate titles |
| Headline H1–H2 | Playfair Display (variable) | `@fontsource-variable/playfair-display` (Google Fonts: Playfair Display) | wght 700, italic | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.05 / 1.15 | 0 | Sentence |
| Body | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 14, wght 400 | clamp(1.0625rem, 1rem + 0.25vw, 1.125rem) (18 px) | 1.67 (30 px) | 0 | Sentence; justified + hyphens in plates only |
| Label / UI | Cormorant SC | `@fontsource/cormorant-sc` (Google Fonts: Cormorant SC) | 300–700 static (use 600) | 0.9375rem | 1.2 | +0.08em | small caps ("PLATE V · THARPARKAR"), nav |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400 | 0.8125rem | 1.4 | 0 | modern frames only |
| Devanagari (optional) | Rozha One | `@fontsource/rozha-one` (Google Fonts: Rozha One) | 400 | cartouche lines clamp(1.6rem, 3vw, 2.6rem) | 1.3 | 0 | n/a (approved Hindi only) |
| Engraved caption (style-specific) | IM Fell English | `@fontsource/im-fell-english` (Google Fonts: IM Fell English) | 400 + italic | ≥ 1.125rem (18 px) | 1.45 | 0 | Sentence; archival captions ≤ 30 words |

Licence: Playfair Display, Cormorant SC, IM Fell English, Fraunces, JetBrains Mono and Rozha One (Indian Type Foundry) are all SIL OFL 1.1. Bodoni Moda (OFL) is the approved display alternative.
Pairing: Fat-face Playfair against hairline Cormorant small caps is the type-specimen contrast; Fraunces keeps body readable; Rozha One is the high-contrast Devanagari partner for bilingual cartouches. Max 3 faces per plate.

### 12.3 Layout & surfaces
- **Grid:** Centred 10-column plate grid inside the 12-column page (5vw margin, max-width 1440 px); plates 4:5 with an inner frame margin of 6% of plate width; symmetry.
- **Spacing:** 4-px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; 64 px minimum gap between ornament and the bottle.
- **Radius:** 0 (sm 0 · md 0 · lg 0); cartouches are SVG shapes.
- **Border:** Thick-thin rules (3 px + 1 px, 3 px apart) in ink or gilt-deep; plate frames 1 px ink with a 6% inner margin.
- **Shadow / elevation:** Platemark: debossed rectangle via `inset 0 0 0 1px rgba(91,70,49,.12), inset 2px 2px 4px rgba(91,70,49,.06)`; no drop shadows on UI; bottle contact shadow.
- **Texture / overlay:** Plate stock with platemark only; no foxing, tears, stains or burnt edges; one rubrication per page.

### 12.4 Components
All interactive components: `focus-visible` = 2 px forest `#0B3B32` outline, offset 3 px, with a 3 px gilt `#C8A96B` halo; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Label in a small forest cartouche: Cormorant SC 600 plate-paper text + arrow, 48 px, padding 12×28, ornament ends 6 px. Hover: ornament extends 4 px (240 ms), arrow +6 px. Active: cartouche darkens to `#0A2A20`. Disabled: sepia outline cartouche, muted text. Loading: a thick-thin rule draws under the label (900 ms loop).
- **Secondary button**: Outline cartouche (1 px ink) with ink label; hover thick-thin underline appears (240 ms); active forest fill; disabled / loading as primary.
- **Text / arrow link**: Fraunces 400 forest with 1 px underline; hover: thick-thin flourish underline draws (240 ms), arrow ☞ fist glyph slides 4 px. Disabled: sepia.
- **Icon button** (incl. menu): 44×44 engraved vignette icon in a 1 px ink circle; menu = three thick-thin rules → ×. Hover: circle becomes double rule. `aria-label` always.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: 64 px bar on milk (modern pages) or plate paper (archival), Cormorant SC links, a thick-thin rule beneath; active link = vermilion underline (the page's single rubrication when no initial is present). Mobile: full-screen plate-paper sheet with Playfair italic 36 px links inside a thin rule frame; page-turn cross-fade 600 ms. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: On archival pages: default = 20 px sepia printer's fist ☞ · hover = fist + underline flourish · ROTATE = engraved circular arrow ⟳ · EXPLORE = fist pointing right with a dotted leader · ENTER = fist with a small cartouche · VIEW = magnifying-glass vignette · TRACE = fist with a dotted path. Disabled = faded fist. Modern pages use the system cursor. Touch: native.
- **Card / panel / info block**: Specimen plate: plate paper, 1 px ink frame with 6% inner margin, platemark, plate number in Cormorant SC, caption in IM Fell (≤ 30 words). Hover (clickable): frame becomes thick-thin (240 ms).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Cormorant SC 600 13 px in a small rule-bordered label (24 px). Verified: MASTER green rule. Pending verification: earth `#8C6A43` dotted underline on the claim + label "pending verification"; prices in the cartouche carry it too. DEMO: rubricated red `#B3202A` label "DEMO · NOT LIVE DATA" (receipt styling in ch. 13). No medal or seal motifs ever. Static.
- **Input + form field** (Trace-your-milk bottle ID): Modern charcoal demo with a paper "receipt" result panel: label "BOTTLE ID" Cormorant SC, 56 px field, 1 px ink border, JetBrains Mono 18 px, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: ring token. Error: vermilion border + text. Loading: receipt lines print in (300 ms each).
- **Divider / ornament**: Thick-thin rule, corner flourishes derived from the ghee-label folk border, or a tailpiece ornament to close a page; one ornament family sitewide.
- **Section header** (chapter number + title pattern): Plate numeral in Cormorant SC ("PLATE V") + Playfair italic title + thick-thin rule; optional single vermilion rubricated initial.
- **Product info block** (variant name, code, price-pending, size, descriptors): Label cartouche: Playfair variant name, code in Cormorant SC, net content and price (pending, dotted underline + label), descriptors as an engraved list with status.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Museum specimen case: the untouched render inside an engraved cartouche frame with plinth and label ribbon; frame stays still, bottle floats ±10 px / 6 s, tilt ±8°; ornament ≥ 64 px from the silhouette; contact shadow on the plinth. Before 360 frames ±25° + sheen; with frames an engraved turntable plinth with degree marks every 30° (frame 001 at 0°).
- **Trace node / timeline step**: Modern forest map with small engraved vignettes as nodes (milk can, bilona, bottle, scale, thermometer, cart); active node gets a gilt ring + label; demo values in mono with rubricated DEMO; ordered-list equivalent.

### 12.5 Iconography & illustration
- **Icons:** Engraved vignettes, 24–32 px, hatch 0.4–1.2 px in ink; seven verbs: milk can, bilona, glass bottle, scale, thermometer, cart, doorstep.
- **Illustration:** Commissioned engraving-style line art traced from DESIGO® breed photos (accurate, individual animals); chromolith tints max 2 per plate; ornament kit drawn once as SVG from the ghee-label border.
- **Photo treatment:** Modern documentary photos with Cormorant SC captions; never sepia-filtered or fake-aged.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | ink-up mask, tint fade |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page-turn cross-fade |
| `--dur-micro` | `240ms` | cartouche ornament, underline |
| `--dur-reveal` | `900ms` | ink-up mask along hatch direction |
| `--dur-tint` | `600ms (+200ms delay)` | chromolith tint pass |
| `--dur-scene` | `1200ms` | ornament frames drawing from the corners |
| `--pin-plate` | `60vh` | album scroll: each plate pinned, next rises over it |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** ink-up then tint (printed in passes); breed plate album (PLATE V–X); engraved milk can morphing into the QR identity in ch. 11.
- **Scroll:** plates pinned 60vh like album leaves; ornament frames draw inward.
- **Reduced motion:** plates appear fully printed, no album pinning, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *19th-century steel engraving and copperplate cross-hatching, natural-history plate and Indian lithographed trade-label craft, ink #1E211F and sepia #5B4631 on plate paper #EDE4D0, at most two flat chromolith tints, symmetrical and precise, respectful, no colonial or British heraldic motifs, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/victorian/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-frame-landscape.png` | 3200×2000 (16:10) | yes | Ornate engraved frame of vines, wheat ears and lotus in forest green #0B3B32 and gold #C8A96B around an empty oval centre that is fully transparent, aged plate paper only inside the frame band | crowns, coats of arms, lions, colonial motifs, medals, seals (+ base negative) | Hero ornament (modern hero keeps only a rule; full frame on archival openers) |
| 2 | `hero-frame-portrait.png` | 1400×2400 (7:12) | yes | Same engraved vine, wheat and lotus frame as a tall portrait, transparent oval centre | crowns, heraldry, medals (+ base negative) | Mobile archival openers |
| 3 | `plates/master-26.png` | 2000×2500 (4:5) | yes | Engraved vignette of a forest canopy with layered leaves and light shafts, cross-hatched, a flat pale green tint #D9E8DF and green #1F5C45, on transparent background, empty space below for the cartouche | named herb labels, banners with words (+ base negative) | PLATE I, /milk/master-26 |
| 4 | `plates/root-14.png` | 2000×2500 (4:5) | yes | Engraved vignette of a red-earth field with a single khejri tree and furrows, cross-hatched, flat tints crimson #B3202A and blush #F3D9D6, on transparent background | banners with words, people (+ base negative) | PLATE II, /milk/root-14 |
| 5 | `plates/base-3.png` | 2000×2500 (4:5) | yes | Engraved vignette of a Rajasthani village lane at evening with mud houses and long hatched shadows, flat tints amber #E89A1C and pale amber #F8E4C2, on transparent background | shop signs, people's faces (+ base negative) | PLATE III, /milk/base-3 |
| 6 | `plates/essential.png` | 2000×2500 (4:5) | yes | A single thin double-rule rectangular plate frame with tiny corner dots, ivory #F4EDE2 tint inside, almost no ornament, transparent outside the frame | flourishes, vignettes (+ base negative) | PLATE IV, /milk/essential |
| 7 | `journey/engraved-panorama.png` | 4800×1400 (24:7) | yes | Continuous engraved panorama read left to right: zebu cows grazing, a farm with khejri tree, a steel milk can on a cart, a test card with sixteen dots, a chiller tank, a small dairy plant, a doorstep at dawn, fine cross-hatching, transparent background | factory smokestacks, British architecture, captions (+ base negative) | Ch. 03 cow → bottle |
| 8 | `textures/plate-paper.png` | 2400×2400 seamless | no | Seamless tileable smooth plate paper #EDE4D0 with very subtle fibre and an even surface, flat scan light | foxing, stains, tears, burnt edges (+ base negative) | Plate stock |
| 9 | `ghee/label-frame.png` | 2400×3000 (4:5) | yes | Ornate Indian lithographed trade-label frame built from a folk border of dots, triangles and small leaves, gilt and forest green, bilingual cartouche shapes left blank, transparent centre | deities, medals, seals, text in cartouches (+ base negative) | Ch. 12 ghee, /ghee |
| 10 | `ornament/corners.png` | 1200×1200 (1:1) | yes | Set of four matching engraved corner flourishes and one tailpiece ornament of wheat ears and leaves, ink on transparent background, symmetrical | crowns, heraldry, text (+ base negative) | OrnamentCorner, tailpiece |
| 11 | `heritage/cow-engraving.png` | 1600×2000 (4:5) | yes | Respectful steel engraving of a Sahiwal zebu cow, reddish-brown coat in hatching, loose skin and large dewlap, short horns, three-quarter view facing left, standing on a small patch of ground, transparent background | cartoon, adornment, religious marks (+ base negative) | Ch. 10 heritage |

Breed plates PLATE V–X reuse brief section D (`breeds/*.png`, sepia engravings); final engravings are redrawn by an illustrator from DESIGO®'s own breed photographs.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/23_victorian.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/victorian/
- [ ] No crowns, heraldry, Raj imagery, medals or seals; ornament never within 64 px of the bottle
- [ ] Hero, lab, trace and commerce stay modern; max 3 typefaces per plate and one rubrication per page
