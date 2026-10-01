# 35 · Handwritten — DESIGO® build plan

Status: design-style plan v0.1 · 2026-10-01 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

Handwritten design uses real or realistic handwriting (script, print, notes, signatures, marginalia) as a primary visual voice. It signals a person behind the brand: someone wrote this, checked this, signed this. Well done, it feels intimate and trustworthy. Done badly, it feels like a greeting card or a children's menu.

Reference points:
1. **Field notebooks and lab logbooks**: dated entries, ticks, measurements written by hand. This is the closest to DESIGO®'s "recorded at source" idea.
2. **Craft food packaging with a human hand**: hand-lettered labels (Bonne Maman's script label, Ben & Jerry's hand-drawn pints), founder signatures, and handwritten batch numbers on small-batch Indian honey, ghee and pickle jars.
3. **The Indian milk diary (*doodh ka hisaab*)**: the household notebook where families wrote down daily litres from the milkman, in Hindi or English, with ticks and dates. This is the cultural anchor.

## 2. Fit for DESIGO® — score 3 / 5 (whole site) · 4.5 / 5 (as a layer)

**Why it fits.** DESIGO®'s farm partners record each collection where and when it happens; the paper test card is filled in by hand at source; families have kept a *doodh ka hisaab* for generations. Handwriting makes **traceability human**: real people record, test and sign. It suits founder letters, farm notes, delivery cards and the returnable-glass habit.

**Where it fights.** As the dominant voice across a whole site, handwriting reduces legibility, weakens the "Apple launch" premium and can feel informal for quality and lab content. Script fonts used everywhere look cheap. Fake handwriting is also a trust risk: if it is a font pretending to be a person, it undermines honesty.

**Recommendation.** Use Handwritten as a **layer** over a primary style (Editorial, Wabi-Sabi, Mixed Media): annotations in the journey, the founder's letter on /about, farm-note captions, the milk-diary UI for /reserve, and delivery-card moments. Use real handwriting (scanned, with consent) for every hero use. A whole-site plan is still given below.

## 3. Art direction

### Palette ("notebook and ink")
| Token | Hex | Role |
|---|---|---|
| `--hw-paper` | `#F4EFE3` | Notebook paper (warm, close to milk) |
| `--hw-milk` | `#F7F4EC` | Clean sections |
| `--hw-rule` | `#C9D6D1` | Notebook rules (faint green-grey) |
| `--hw-margin` | `#D98C7E` | Margin line (soft red, decoration only) |
| `--hw-ink-blue` | `#22427A` | Fountain-pen blue (handwriting) |
| `--hw-ink-green` | `#1E7A68` | DESIGO green ink (tick marks, links) |
| `--hw-pencil` | `#6B6A66` | Pencil notes (≥ 4.5:1 on paper at 18px+) |
| `--hw-forest` | `#0B3B32` | Headlines, footer |
| `--hw-gold` | `#C8A96B` | Ghee and heritage accents |
| `--hw-ink` | `#1E211F` | Body text |

Handwriting appears in blue or green ink; printed text is always ink black/forest, so the reader can tell **who said what**: print is the brand, handwriting is a person.

### Typography
- **Real handwriting first.** Commission three hands, with consent and credit:
  1. **Founder hand** (signature and letter on /about, short notes).
  2. **Farm hand**: a farm partner's or field team member's handwriting from the actual test/collection notes, in Hindi and English.
  3. **Delivery hand**: short delivery-card notes.
  Scanned at 600 dpi, vectorised, used as SVG for words and phrases. For longer runs, a **custom font** built from the founder's hand (e.g. via Calligraphr), licensed to DESIGO®.
- Prototype fallbacks (OFL): **Kalam** (Latin + Devanagari, by the Indian Type Foundry), the best fit as it has authentic Indian handwriting in both scripts; **Caveat** for quick English notes; **Gochi Hand** is too playful and is not used.
- Display (printed): **Fraunces** 400/600.
- Body and UI: **Inter Tight**.
- Data: **JetBrains Mono**. Printed data next to handwritten values mirrors a real form.

### Texture and imagery
- Notebook paper: faint rules every 32px (aligned to the body line height), a red margin at 72px, both at ≤ 25% opacity, only in "notebook" sections.
- Ink: SVG paths with slight width variation; occasional ink pooling at stroke ends (part of the scanned source, never faked with filters).
- Marks: hand-drawn ticks ✓, circles, underlines, arrows and brackets used as UI emphasis.
- Photography: real, natural, with handwritten captions placed next to (not on) the photo.

### Iconography
Hand-drawn icons from the same pen, vectorised and cleaned to a consistent 2px nib, for the seven verbs, delivery, glass return, QR.

### Grid
12 columns; notebook sections use a **baseline grid of 32px** so handwriting sits on rules. Printed content in columns 2–8, handwritten marginalia in columns 9–11 (desktop) or inline below (mobile). Line length 60ch for printed text; handwriting max 32 characters per line.

## 4. Motion and interaction language
- **Write-on.** Handwriting animates as if being written: SVG stroke reveal following the real stroke order (traced once by hand per phrase), speed ~ 12 characters/second, `linear` inside strokes with 60ms pen-lift pauses. Only on phrases ≤ 6 words; longer text simply fades.
- **Ticks.** Checklists tick themselves as you scroll (each tick 280ms).
- **Cursor.** A small fountain-pen nib (12px, angled 45°) in blue ink on notebook sections; the master ring elsewhere. Over links: a hand-drawn underline appears beneath the link. Over the bottle: a handwritten "turn me" note (Kalam) beside the ring.
- **Hover.** Buttons are printed labels plus a hand-drawn arrow; on hover a hand-drawn circle loops around the label (450ms).
- **Transitions.** A page-flip of notebook paper for notebook-to-notebook sections (800ms `cubic-bezier(.65,0,.35,1)`); otherwise master crossfades.

### The bottle
The bottle is photographic and clean, floating with its contact shadow on milk ground. Handwriting **annotates** it like a note on a product sample: an arrow to the cap ("deep green = MASTER 26"), to the glass ("returnable glass, please return"), to the QR ("scan to trace"). Tilt ±8°. In the 360 viewer, notes reposition per angle (keyed to frame ranges) so they always point at the right feature.

## 5. Variant worlds — four notebook pages

| Variant | Page | Ink | Handwritten note (approved copy only) |
|---|---|---|---|
| MASTER 26 (V1+) | Herbarium-style page with pressed-leaf photos | Green ink `#1F5C45` on `#D9E8DF` tint | "26 herbs in the feed" with *pending* marker drawn as a dotted underline |
| ROOT 14 (V1) | Field-notes page with soil smudge photo | Red-brown ink `#7A1A20` on `#F3D9D6` | "Rooted in free grazing" |
| BASE 3 (V2) | Kitchen diary page | Brown ink `#5A3304` on `#F8E4C2` | "The everyday foundation" |
| ESSENTIAL (V3) | A clean index card | Charcoal ink on `#F4EDE2` | "Simple, balanced, honest." |

The info panel is printed (V-CODE, name, price *pending*, descriptors *pending*), with handwriting used only for the one-line note.

## 6. Page-by-page treatment

1. **Hero.** Milk ground; the bottle; "Milk from the source." printed in Fraunces; one handwritten note writes itself beside the bottle: "from indigenous Indian cows" with an arrow. Founder initials as a small signature near the CTA (consent required).
2. **Bottle becomes the story.** Six words as handwritten labels with arrows pointing at the bottle, each written on in turn.
3. **Cow to bottle.** A **notebook spread** scrolls horizontally: seven dated entries (demo times, labelled) with photos placed in printed frames (never taped on) and handwritten captions in Hindi and English (Kalam). Ticks appear as each station passes.
4. **Farm.** Real photographs; a short farm note in the farm partner's own hand (scanned, consent, translated in print).
5. **Breeds.** Portraits with handwritten breed names in Devanagari and Latin (*pending* labels printed).
6. **Traceability.** Printed map; each node has a handwritten "signature" stamp-style note (who recorded it, role only, no names without consent). DEMO label printed, never handwritten.
7. **Quality.** A **photo of the real paper test card** (filled by hand) beside the printed 16-parameter list. The handwriting proves it is done at source; the printed list keeps it legible. Values pending.
8. **Four milks.** §5 notebook pages.
9. **Milk as material.** A handwritten single line "milk" flowing into the canvas ribbon (the stroke becomes the ribbon).
10. **Heritage.** The *doodh ka hisaab*: a real household milk diary (archival photo or a recreated page with permission), with an italic printed statement.
11. **Technology.** The bridge: a handwritten entry transforms into a printed digital record (handwriting fades as mono text types in). "Tradition is the source. Technology protects the journey."
12. **Ghee.** A handwritten bilona recipe card (process only, no claims), the jar, three grades.
13. **Trace your milk.** Printed input; the result is shown as a notebook timeline with ticks, DEMO printed.
14. **Story.** Founder's short handwritten letter (approved), printed transcript beneath, and verified 2019 only.
15. **Final CTA.** A handwritten "Know where your milk comes from." written slowly, then the printed CTA beneath. Signature.

### Inner pages
- **/milk**: four index cards in a row.
- **/milk/[variant]**: notebook hero, 360 viewer with angle-aware notes, facts printed.
- **/ghee**: recipe-card process.
- **/origin**: farm notes with photos.
- **/trace**: printed map with handwritten node notes.
- **/technology**: handwriting → record transformations, one per verb.
- **/about**: **flagship**: founder letter, team notes (consent), timeline.
- **/reserve**: a **milk diary UI**: a monthly page where the customer ticks days, sees bottles to return (*pending commercial model*).

## 7. Component variants
`HandNote` (SVG phrase with stroke order) · `HandArrow` · `TickList` · `NotebookSection` (rules + margin) · `AngleAwareNotes` (360 viewer) · `TestCardPhoto` · `HandToRecord` (technology morph) · `MilkDiary` (reserve calendar) · `FounderLetter` · `NibCursor` · `HandCircleButton` · `AssetSlot` as a notebook page with a pencil note "photo to come — hands milking (B4)".

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens and type | Ink palette, print-vs-hand rule | Tokens, specimen, handwriting brief | Print = brand, hand = person rule documented; AA | Handwriting samples (consent) | 3 |
| 2 | Shell | Notebook grid, nav, nib cursor | Shell | Baseline 32px aligns hand to rules | none | 3 |
| 3 | Hero and bottle | Annotated bottle | Hero | Write-on ≤ 2s; note never covers label | Founder hand SVGs, renders | 3 |
| 4 | Bottle → story | Handwritten labels | Chapter 02 | Each label has printed equivalent for SR | Hand SVGs | 2 |
| 5 | Cow → bottle | Notebook spread | Chapter 03 | Hindi + English captions proofread | Farm hand, B4, B8 | 5 |
| 6 | Origin | Farm note | Chapter 04 | Translation printed | Farm partner note | 2 |
| 7 | Breeds | Bilingual names | Chapter 05 | Pending labels printed | B3 | 2 |
| 8 | Trace map | Map + node notes | TraceMap skin | DEMO printed; keyboard | traceNodes | 4 |
| 9 | Quality | Test card + list | Chapter 07 | No invented values | B6 test card photo | 2 |
| 10 | Four worlds + 360 | Notebook pages + angle notes | Chapter 08 | Notes track features across frames | A | 6 |
| 11 | Heritage | Milk diary | Chapter 10 | Archival permission | Diary page (B11) | 3 |
| 12 | Technology | Hand → record | `HandToRecord` | Public vocabulary | none | 3 |
| 13 | Ghee | Recipe card | Chapter 12 | Process only; prices pending | Jar, bilona photos | 2 |
| 14 | Trace demo | Notebook timeline | Chapter 13 | DEMO printed | demoProvider | 3 |
| 15 | /milk pages | Index cards + variant | 5 routes | Facts printed, not hand | A | 4 |
| 16 | /origin, /trace, /technology | Inner | 3 routes | Consistent hand usage limits | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Letter + milk diary | 3 routes | Letter approved; diary model pending | Founder letter, commercial model | 4 |
| 18 | Mobile | Inline marginalia | Mobile pass | Hand text ≥ 20px; no overlap | none | 3 |
| 19 | A11y + reduced motion | Static ink | No write-on | Every hand phrase has real text (`aria-label` or visible transcript) | none | 2 |
| 20 | Perf, QA, handover | Ship | Hand-SVG library, font licence, reports | Hand SVGs ≤ 8 KB each; LCP < 2.5s | all | 3 |

Total ≈ 63 days.

## 9. Assets needed from DESIGO®
- **Consent-based handwriting samples**: founder (letter, signature, 20 phrases), a farm partner or field team member (Hindi and English phrases), delivery team (short notes).
- A photo of a **filled-in paper test card** (B6, no third-party logo) and a real collection note if shareable.
- A household milk diary page (archival or recreated with permission) for Heritage.
- Founder letter text (approved), 360 sequences (A), vector wordmark (C).

## 10. Performance, accessibility and mobile
- Handwriting as SVG paths with `role="img"` and `aria-label`, or as a font with real text. Never as raster images.
- Kalam subset (Latin + Devanagari used glyphs) ≤ 60 KB.
- Legibility: handwriting never carries essential information alone; all prices, claims and instructions are printed.
- Reduced motion: handwriting shown complete; no page flips.
- Mobile: marginalia inline under paragraphs; handwriting min 20px; one note per screen.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. Real handwriting from real people (with consent and credit) for every hero use. Fonts only as fallback.
2. Printed text carries every fact, price, claim and instruction. Handwriting is voice, not information.
3. No cutesy hearts, doodles, smileys or emoji-like sketches.
4. Max one handwritten element per viewport outside notebook sections.
5. Bilingual handwriting (Hindi + English) is proofread by native readers.
6. Pending claims inside handwriting carry a printed "pending" tag nearby.
7. The lab chapter shows real handwriting only as evidence (the test card photo), with crisp printed data.

**Risks**: an informal or cheap look, illegibility, fake-intimacy. Mitigation: layer-only usage, real hands, a print-vs-hand rule.

**Best used for:** a human layer over the primary style: founder letter (/about), farm notes in the journey, the test card in Quality, and a milk-diary /reserve experience.
