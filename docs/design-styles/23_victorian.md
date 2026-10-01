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
the ledger chronology and supporters (pending) in a cartouche list · /reserve is a modern form with a small engraved
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
