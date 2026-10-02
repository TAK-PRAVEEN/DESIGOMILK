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

**Why it fits.** DESIGO®'s farm partners record each collection where and when it happens, and the paper test card is filled in by hand at source (process description *pending confirmation*); families have kept a *doodh ka hisaab* for generations. Handwriting makes **traceability human**: real people record, test and sign. It suits founder letters, farm notes, delivery cards and the returnable-glass habit.

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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: Clear print-vs-hand rule; missing were colour roles and state colours, font packages and sizes, component states, motion token table, image prompts and acceptance list. All added. Fonts already OFL (Kalam, Caveat, Fraunces, Inter Tight). Body fix: the at-source collection/test-card process in §2 is now marked pending confirmation.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | printed headlines, primary CTAs, footer (print = the brand) | 10.9:1 vs bg (body-safe) |
| Primary ink | --c-on-primary | `#F4EFE3` | text on forest | 10.9:1 on primary |
| Secondary | --c-secondary | `#22427A` | fountain-pen blue: handwriting (a person), hand-drawn marks | 8.6:1 vs bg (body-safe) |
| Accent | --c-accent | `#1E7A68` | DESIGO green ink: ticks, links, focus ring | 4.5:1 vs bg (text-safe) |
| Background | --c-bg | `#F4EFE3` | notebook paper | 14.2:1 with text |
| Surface | --c-surface | `#F7F4EC` | clean milk sections, index cards | text on surface 14.8:1 |
| Text | --c-text | `#1E211F` | printed body text | 14.2:1 vs bg (body-safe) |
| Muted text | --c-text-muted | `#6B6A66` | pencil notes, captions (≥ 18 px for long notes) | 4.7:1 vs bg (text-safe) |
| Line | --c-line | `#C9D6D1` | notebook rules every 32 px, ≤ 25% opacity in notebook sections | decorative only |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#6B6A66` / `#0B3B32` | ok = hand-drawn green tick; pending = dotted pencil underline + a **printed** "PENDING" tag next to any handwritten claim; DEMO = printed forest tag (never handwritten) | DEMO tag paper on forest = 11.1:1; pending tag text printed in --c-text |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | herbarium page with pressed-leaf photos, green ink `#1F5C45` on `#D9E8DF` tint; note "26 herbs in the feed" with *pending* dotted underline |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | field-notes page with soil-smudge photo, red-brown ink `#7A1A20` on `#F3D9D6`; note "Rooted in free grazing" (*pending*) |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | kitchen diary page, brown ink `#5A3304` on `#F8E4C2`; note "The everyday foundation" |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | a clean index card, charcoal ink on `#F4EDE2`; note "Simple, balanced, honest." |

Dark-chapter inversion: mostly light. Technology (ch. 11) bridge and the footer go forest: `--c-bg` → `#0B3B32`, `--c-text` → `#F7F4EC`, handwriting ink → `#C9D6D1`, accent → `#7FE0B8` (the printed digital record), rules hidden, logo → white.

Additional style tokens (kept from §3): `--hw-margin` `#D98C7E` (margin line at 72 px, decoration only), `--hw-gold` `#C8A96B` (ghee/heritage), `--hw-milk` `#F7F4EC`. Variant ink `#7A1A20` (ROOT notes).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (printed) · real founder hand as SVG for hero notes | `@fontsource-variable/fraunces` | wght 400 / 600, opsz 144 | `clamp(3rem, 1.9rem + 5.5vw, 7.5rem)` | 1.0 | −0.015em | Sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 600 · italic 400 | H1 `clamp(2.4rem, 1.6rem + 3.6vw, 4.5rem)` · H2 `clamp(1.7rem, 1.3rem + 1.8vw, 2.75rem)` | 1.1 · 1.2 | −0.01em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | `1.125rem` (aligned to 32 px rules: line-height 1.78) | 32 px | 0 | Sentence, 60ch |
| Label / UI | Inter Tight (printed) · handwriting Kalam / Caveat (prototype fallbacks) | `@fontsource-variable/inter-tight` · `@fontsource/kalam` · `@fontsource-variable/caveat` | 600 · Kalam 400 / 700 · Caveat 500 | label `.75rem` · hand `clamp(1.25rem, 1.1rem + .7vw, 1.75rem)` (≥ 20 px mobile) | 1.2 · 1.3 | +0.16em · 0 | Upper · sentence (≤ 32 chars per hand line) |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400, tabular | `.875rem` | 1.4 | +0.02em | Upper for IDs |
| Devanagari (optional) | Kalam (handwritten Hindi) · Noto Serif Devanagari (printed) | `@fontsource/kalam` · `@fontsource-variable/noto-serif-devanagari` | 400 / 700 · 400 | matches hand / body | 1.5 | 0 | — |

Licence: all fonts must be open-licence (OFL/Apache). Kalam (Indian Type Foundry), Caveat, Fraunces, Inter Tight, JetBrains Mono, Noto Serif Devanagari: OFL 1.1; Gochi Hand not used. Production hero handwriting = scanned real hands (founder, farm partner, delivery team) with consent, or a custom font licensed to DESIGO®. Pairing: print (Fraunces + Inter Tight) is the brand, handwriting is a person.

### 12.3 Layout & surfaces
- Grid: 12 columns, 24 px gutters (16 px mobile), max-width 1280 px; printed content cols 2–8, marginalia cols 9–11 (inline below on mobile).
- Notebook sections: 32 px baseline grid, faint rules `#C9D6D1` ≤ 25%, red margin at 72 px ≤ 25%; only in "notebook" sections.
- Spacing (4 px base, 32 px rhythm): 4 · 8 · 16 · 24 · 32 · 64 · 96 · 128.
- Radius: `sm 2px` · `md 4px` (index cards, inputs) · `lg 6px`; pill only for the cursor ring.
- Border: 1 px ink at 20% on cards; hand-drawn circles/underlines as emphasis.
- Shadow: index cards `0 1px 2px rgba(30,33,31,.08), 0 8px 20px -12px rgba(30,33,31,.2)`; bottle contact shadow + soft ambient.
- Texture: notebook paper; ink pooling only if present in the scanned source (never faked with filters). Photos in printed frames (never taped).

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.
- **Primary button**: printed label (Inter Tight 600 upper) + hand-drawn arrow on a forest plate, 48 px, padding 14 px 24 px, radius 2 px. States: default · hover a hand-drawn circle loops around the label (450 ms) and the arrow travels 4 px · focus-visible 2 px `#1E7A68` ring offset 3 px · active plate darkens, circle stays · disabled 40%, no circle · loading the arrow redraws in a loop. 44 px target.
- **Secondary button**: printed label + hand-drawn arrow, no plate; hover hand-drawn underline writes on (300 ms); focus green ring; active ink blue; disabled 40%; loading underline writes repeatedly.
- **Text / arrow link**: Inter Tight with a hand-drawn SVG underline in green ink appearing on hover (240 ms); default 1 px underline at 40%; focus green ring.
- **Icon button (incl. menu)**: 44 px, hand-drawn glyph from the same pen (2 px nib, cleaned). Menu = two pen strokes → hand-drawn X. Hover circle · focus ring · active ink-blue fill · disabled 40%. `aria-label`, `aria-expanded`.
- **Navigation bar (desktop + mobile menu) + DESIGO® logo loop**: paper bar 72 px (56 px mobile), single faint rule beneath, logo left, printed links, RESERVE as forest plate; the founder initials never appear in nav. Mobile: menu opens as a notebook page with ruled lines, printed links 28 px Fraunces, a hand tick beside the current page, focus trapped, Esc closes. Logo loop: DESIGO® wordmark (vector SVG, never redrawn) runs the house black write / un-write loop: D · waves · S · I · G · O draw on (0–1.2 s, 480 ms each, 95 ms stagger) → hold to 3.0 s → un-write in reverse 3.0–4.2 s → rest to 4.6 s → repeat, infinite. Charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds, swapped by section theme only; never a colour change inside the loop. Reduced motion: static full wordmark. `aria-label="DESIGO® home"`; the animation is `aria-hidden`.
- **Cursor (default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE; touch fallback)**: default master 12 px ring; in notebook sections a 12 px fountain-pen nib (45°, ink blue) · hover hand-drawn underline appears beneath the link · ROTATE ring + handwritten "turn me" (Kalam) beside it over the bottle · EXPLORE `EXPLORE` ring 44 px · ENTER `ENTER →` over variant pages · VIEW over photos · TRACE nib with a small hand circle over map nodes. Touch / coarse pointer: custom cursor not rendered; native behaviour, and the ROTATE / EXPLORE hint appears once as a static chip beside the bottle and fades after the first drag.
- **Card / panel / info block**: index card: milk surface, radius 4 px, padding 24 px, card shadow, optional rules; printed facts first, one handwritten note max. Hover (interactive) lifts 2 px; focus green ring.
- **Badge / tag (incl. "pending verification" and "DEMO · not live data")**: printed Inter Tight 600 11 px upper, 24 px, 1 px border. Pending verification: dotted pencil underline under the claim (printed or handwritten) + printed `PENDING` tag nearby. DEMO · not live data: printed forest tag, never handwritten.
- **Input + form field (Trace-your-milk bottle ID)**: printed input on a notebook line: 56 px, bottom border 2 px ink + light frame, mono 16 px, placeholder `DSG-BTL-000001-3 (sample format)`, a handwritten hint "it's on the cap" with arrow. States: hover border green · focus-visible green ring · error `#B3202A` + printed message · disabled 40% · loading ticks write on. Visible printed `<label>`; DEMO tag.
- **Divider / ornament**: a hand-drawn ink line (SVG, slight width variation) ending in a small tick; notebook sections use a ruled gap.
- **Section header (chapter number + title pattern)**: printed chapter number (`Ch. 03`) + Fraunces title + one short handwritten note in the margin that writes on (≤ 6 words).
- **Product info block (variant name, code, price-pending, size, descriptors)**: printed info block: V-CODE mono, name Fraunces, size `1 L glass · 900 g` and price from `desigo.ts` with dotted pending underline + PENDING tag, descriptors printed and pending-marked; one handwritten line only (the variant note); CTA `Trace this bottle →`.
- **Bottle stage (Bottle / Bottle360Viewer framing)**: photographic bottle floating with contact shadow on milk ground; handwritten annotations point to cap ("deep green = MASTER 26"), glass ("returnable glass, please return") and QR ("scan to trace"), never covering the label. Tilt ±8°. In Bottle360Viewer notes reposition per frame range so they always point at the right feature.
- **Trace node / timeline step**: node on a printed map with a stamp-style handwritten note (role only, no names without consent); timeline step = dated notebook entry with a tick that writes on (280 ms). States idle · hover note appears · focus green ring · active entry expands · pending hollow box + PENDING tag.

### 12.5 Iconography & illustration
- Icons: hand-drawn with one pen, vectorised and cleaned to a consistent 2 px nib, 24 px grid: seven verbs, delivery, glass return, QR, ticks, circles, arrows, brackets.
- Illustration: none beyond hand marks; heritage uses a real household milk diary (archival or recreated with permission).
- Photography: real, natural, in printed frames; handwritten captions placed beside (not on) photos; the filled-in test card photo is the evidence in Quality.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, UI entrances |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene / chapter transitions |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel, float settle |
| `--dur-micro / reveal / scene` | 240 / 600 / 800 ms | hover · reveals · page flip |
| `--hw-write` | ~12 characters/s, `linear` within strokes, 60 ms pen-lift pauses | handwriting write-on (≤ 6 words, ≤ 2 s) |
| `--hw-tick` | 280 ms | checklist ticks |
| `--hw-circle` | 450 ms | hand circle on button hover |
| `--hw-flip` | 800 ms ease-inout | notebook page flip |

- Write-on follows the real stroke order traced once per phrase; longer text simply fades.
- Max one handwritten element per viewport outside notebook sections.
- Reduced motion (`prefers-reduced-motion: reduce`): all scroll-scrubbed motion off, content becomes a normal readable page, logo shows static, 360 auto-rotation stops, transitions become ≤ 200 ms opacity fades. Here also: handwriting shown complete, no page flips.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Style tail prompt (append to every prompt below): *quiet notebook and fountain-pen aesthetic, warm notebook paper #F4EFE3, faint green-grey rules #C9D6D1, fountain-pen blue #22427A, DESIGO green #1E7A68, deep forest #0B3B32, soft natural daylight, tactile, intimate, calm, premium, no handwriting, no text, no watermark, no logo, no letters*

Base negative prompt (prefix to every negative below): *text, letters, words, numbers, logo, watermark, signature, label, packaging, milk bottle, glass bottle, jar, Holstein, Jersey, black-and-white dairy cow, cartoon mascot, people's faces, blurry, low resolution, oversaturated*

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `web/public/desigo/styles/handwritten/hero-landscape.png` | 3200×2000 (16:10) | no | Warm notebook paper page lying flat, faint green-grey ruled lines and a soft red margin line, a fountain pen resting at the lower right with a tiny ink pool at the nib, soft daylight, large empty page centre | handwriting, scribbles, doodles, hearts, coffee stains, pencils clutter | Hero (ch. 01) backdrop |
| 2 | `web/public/desigo/styles/handwritten/hero-portrait.png` | 1400×2400 (7:12) | no | Tall notebook page with faint rules and margin line, fountain pen at the bottom edge, empty centre | handwriting, doodles, stains | Hero mobile |
| 3 | `web/public/desigo/styles/handwritten/world-master-26.png` | 3200×2000 + 1400×2400 crop | no | Herbarium-style page: a few pressed Indian herb sprigs fixed with small paper hinges on pale green tinted paper #D9E8DF, soft daylight, empty centre | labels, handwriting, Latin names, tape | Four milks ch. 08, /milk/master-26 |
| 4 | `web/public/desigo/styles/handwritten/world-root-14.png` | 3200×2000 + 1400×2400 crop | no | Field-notes page on pale rose #F3D9D6 paper with a faint red-earth soil smudge in one corner and a single pressed grass blade, soft light, empty centre | handwriting, blood-like stains, tape | Four milks ch. 08, /milk/root-14 |
| 5 | `web/public/desigo/styles/handwritten/world-base-3.png` | 3200×2000 + 1400×2400 crop | no | Kitchen diary page on warm wheat #F8E4C2 paper with a folded corner and a short pencil resting at the edge, warm morning window light, empty centre | handwriting, food stains, recipes | Four milks ch. 08, /milk/base-3 |
| 6 | `web/public/desigo/styles/handwritten/world-essential.png` | 3200×2000 + 1400×2400 crop | no | A single clean ivory #F4EDE2 index card resting on milk-white paper, soft shadow, calm, empty | handwriting, print, stains | Four milks ch. 08, /milk/essential |
| 7 | `web/public/desigo/styles/handwritten/journey-notebook-spread.png` | 3600×1200 (3:1) | no | Open notebook spread lying flat, two ruled pages with seven empty printed rectangular photo frames evenly spaced and seven small empty tick boxes, soft daylight | handwriting, photos inside frames, doodles, tape | Cow → bottle ch. 03 (notebook spread) |
| 8 | `web/public/desigo/styles/handwritten/texture-notebook-paper.png` | 2048×2048, seamless | no | Seamless tileable texture of warm smooth notebook paper #F4EFE3, very fine fibres, flat even light, no lines | rules, writing, stains, vignette | Notebook sections (rules drawn in CSS) |
| 9 | `web/public/desigo/styles/handwritten/hand-marks-set.png` | 2400×1600 | yes (real alpha) | Set of hand-drawn fountain-pen marks in blue ink: ticks, open circles, underlines, curved arrows and brackets, arranged in a loose grid, isolated on transparent background (prototype only; production marks come from real pens) | letters, numbers, words, hearts, smileys, doodles | HandArrow / TickList prototypes |
| 10 | `web/public/desigo/styles/handwritten/heritage-milk-diary.png` | 3200×2000 | no | An old household notebook lying open on a worn wooden table beside a small steel milk vessel, pages blank with faint ruled lines and gentle age, soft morning light (placeholder until the real archival diary page arrives) | legible writing, numbers, brand marks, bottles | Heritage ch. 10 (placeholder for B11) |
| 11 | `web/public/desigo/styles/handwritten/ghee-recipe-card.png` | 3200×2000 | no | A blank cream recipe card propped beside a small wooden bilona churn in an earthen pot, warm golden light, calm kitchen corner, card left blank | writing on the card, jars, ghee jar, labels | Ghee ch. 12, /ghee |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/35_handwritten.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/handwritten/
- [ ] Every handwritten phrase has a real-text equivalent (`aria-label` or printed transcript)
- [ ] Handwriting consent + credit on file for each hand; prices, claims and instructions printed only
