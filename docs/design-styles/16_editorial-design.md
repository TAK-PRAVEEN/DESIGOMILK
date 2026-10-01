# 16 — Editorial Design · DESIGO® build plan

**Fit score: 5 / 5** · **Best used for:** the whole site as a "magazine about one bottle of milk", and above all
chapters 04 *Where it begins*, 10 *Heritage* and 14 *Story* and the pages /origin and /about. It pairs with Luxury
Typography (style 15) for the product moments.

---

## 1. Style essence

Editorial design is the craft of the printed magazine and the long-form feature, translated to the screen. It uses
strong grids with deliberate breaks, mixed column widths, pull quotes, drop caps, captions with credits, folios and
running heads, and a rhythm of full-bleed images against dense text. It works through *pacing*: a spread to breathe,
a spread to read, a spread to look. The voice is the reporter's: specific, sourced and calm.

Three reference points:
1. ***Kinfolk* / *Cereal* / *The Gentlewoman*:** slow-living editorial, warm paper, generous margins.
2. **The New York Times and Guardian long-reads** ("Snow Fall"): scroll-driven feature storytelling with media embedded.
3. **Indian editorial heritage:** *Marg* magazine (art and architecture since 1946), *The Caravan* features and the
   *Design in India* monographs. Indian context, serious tone, beautiful plates.

## 2. Why it fits DESIGO®

- **DESIGO® has a story that is mostly *process* and *place*.** Indigenous breeds, Jodhpur, free grazing, testing,
  returnable glass. Features are the natural format for that, and the narrative order already exists
  (ORIGIN → … → DELIVER).
- **Editorial practice includes sourcing.** Captions, footnotes and "status" lines turn the brand's claim discipline
  (verified / pending) into a *visible virtue*: "Breed list: client-stated, approval pending."
- **It gives photography a home**, so once the farm shoot arrives the site improves without a redesign.
- **It reads as luxury without trying**, through paper tones, serif text and white space.

**Where it could fight:** long text can slow the "Apple launch" pace. The fix is to pair editorial spreads with
type-led product scenes (style 15) and keep every feature skimmable through decks, pull quotes and captions.

## 3. Art direction

### Palette: "Paper & Ink"
| Token | Hex | Use |
|---|---|---|
| `--newsprint` | `#F7F4EC` | Default page (brand milk) |
| `--stock` | `#EDE4D0` | Archival / heritage features (brand paper) |
| `--stock-deep` | `#E2D6BC` | Sidebars, "boxouts" |
| `--ink` | `#1E211F` | Text |
| `--ink-soft` | `#55584F` | Captions, credits (≥ 6.5:1 on milk) |
| `--forest` | `#0B3B32` | Section openers, folios on dark spreads |
| `--green` | `#1E7A68` | Links, kicker labels |
| `--earth` | `#8C6A43` | Kickers in farm features |
| `--gold` | `#C8A96B` | Rules, drop-cap colour on dark |
| `--rule` | `#CFC5AF` | Column rules |

Variant spreads use each variant's *light* tone as page stock and *deep* tone as ink accent:
MASTER `#D9E8DF`/`#0A2A20`, ROOT `#F3D9D6`/`#4A0A0F`, BASE `#F8E4C2`/`#5A3304`, ESSENTIAL `#F4EDE2`/`#4D4130`.

### Typography
- **Headlines:** *Fraunces* (brand) at opsz 144, weight 400, with italic for decks and pull quotes.
- **Text face:** *Newsreader* (Production Type, OFL, opsz 6–72) for long-form body at 19/31 px on desktop. It is
  designed for reading on screen. *Source Serif 4* is the alternative.
- **Labels, kickers, captions, UI:** *Inter Tight* 500 caps +0.16em (kickers), regular 13/19 (captions).
- **Data:** *JetBrains Mono* for IDs and figures in sidebars.
- **Devanagari:** *Noto Serif Devanagari* for Hindi pull quotes (for example a farmer's own words, once supplied and
  consented).

Details: drop caps (Fraunces, 4 lines, `initial-letter: 4` with fallback), small caps for the first line, old-style
figures in text (`onum`) and lining figures in tables, true quotes and dashes, and widow and orphan control
(`text-wrap: pretty`).

### Texture, imagery, iconography
- Paper grain at 2%. On archival spreads, a faint deckle-edge vignette (CSS mask, not a texture photo).
- **Photography is documentary**: natural light, people's hands, Rajasthan's colours, nothing staged to look like
  stock. Every photo gets a caption and a credit line ("Photograph: DESIGO®, Jodhpur").
- Icons: minimal. Editorial uses words, so kicker labels replace icons.
- Ornaments: a section-end mark, the DESIGO® wave-"E" at 12 px, ends each feature.

### Grid
A 12-column print grid with 5vw margins and a 24 px gutter, plus the editorial layer:
- **Feature grid:** text in columns 4–9 (≈ 62ch), captions in 10–12 (desktop marginalia), pull quotes breaking out
  to columns 2–11.
- **Spread types:** *Opener* (full-bleed image plus title), *Read* (text plus marginalia), *Look* (image grid 2+1
  or 1+2), *Data* (sidebar boxout), *Close* (end mark plus next-feature teaser).
- A folio and running head appear in the nav strip: "DESIGO® · ORIGIN · 04".

## 4. Motion and interaction language

- Editorial motion is **quiet**. Text fades and rises 12 px (600 ms, `cubic-bezier(.16,1,.3,1)`). Images reveal by a
  clip-path wipe from top (1200 ms) with a 1.06 → 1.0 scale.
- **Scroll:** opener images pin for 60vh while the title scrolls over them (Snow Fall pattern). Captions fade in when
  the image is 50% visible.
- **Reading progress:** a 1 px green rule at the top of feature pages, plus "4 min read" in kickers.
- **Hover:** links underline (text-decoration-thickness 1 px → 2 px, 240 ms). Image hover shows the caption overlay
  only on "Look" grids.
- **Cursor states:** default = native arrow (editorial respects the reader) · link = small ring 24 px · image =
  "VIEW" ring · drag (360) = "DRAG" ring · text = native caret · disabled = 30% ring. The custom cursor is off on
  long-form text sections.
- **Transitions:** page → page is a vertical "turn" (new page slides up 24 px plus fade, 600 ms), and the running head
  updates.

## 5. The hero bottle and the four variants

The bottle is photographed like a **cover star**. Each variant gets a magazine "cover" and a feature spread.

- On covers the render floats over the masthead (DESIGO® wordmark) the way magazine covers layer a model over the title,
  with float ±10 px over 6 s and pointer tilt ±8°.
- Before 360 frames arrive the turn is limited to ±25° with a sheen sweep. Afterwards a "Look" spread hosts the
  Bottle360Viewer with a caption: "Drag to turn. Photographed in 72 frames, DESIGO® studio."

| Variant | Cover and spread |
|---|---|
| **MASTER 26** | A green-stock cover, coverline "The fullest expression of the source." Feature: the MasterHerb™ grazing concept, with herbs pending in a boxout. Photo: forest canopy, cows grazing. |
| **ROOT 14** | Blush stock with oxblood ink. Coverline "Rooted in free grazing." Feature: free grazing and red earth, a photo essay. |
| **BASE 3** | Pale-amber stock. Coverline "The everyday foundation." Feature: the morning delivery, the doorstep and the glass returning. |
| **ESSENTIAL** | Ivory. Coverline "Simple, balanced, honest." Feature: a minimal still-life spread, one bottle on stone. |

Each feature closes with a **"Specifications" boxout**: code, size, price (pending style) and descriptors with their
status.

## 6. Page-by-page treatment

| # | Chapter | Treatment |
|---|---|---|
| 01 | Hero | The **cover**: DESIGO® masthead at full width, the bottle overlapping it, coverline "Milk from the source." and three cover teasers ("Origin p.04 · Trace p.06 · The four milks p.08") that link to chapters. |
| 02 | Bottle becomes the story | Contents page: the six words as a contents list (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE), each with a one-line dek, while the bottle stays pinned on the right. Milk → forest. |
| 03 | Cow → bottle | A photo-essay strip of 7 frames (or labelled AssetSlots), captioned with `journey[]` text, numbered "1/7". |
| 04 | Where it begins | **Signature feature.** Opener photo, drop cap, 3 short paragraphs, a pull quote, marginal captions and a "Look" spread. |
| 05 | Breeds | A "field guide" spread: six portraits in a consistent grid, each captioned with name and region, and the status line in a boxout. |
| 06 | Traceability | An infographic spread on forest: the hairline chain with numbered annotations and a sidebar "How a hand-off is recorded". Label: "Illustrative journey — not live data". |
| 07 | Quality | A "Data" spread: the 16 parameters as a two-column table, a photograph of testing at the farm, and readouts "— pending lab confirmation". |
| 08 | Four milks | Four covers in sequence (section 5), each linking to its feature (/milk/[variant]). |
| 09 | Milk as material | An interlude spread: a full-bleed slow-motion milk ribbon (canvas) with one line of italic. |
| 10 | Heritage | An essay on archival stock: a long-form excerpt on indigenous breeds and Indian pastoral tradition (factual, no health claims), gold rules, cow line art as a plate. |
| 11 | Technology | A dark "science section" spread: the seven verbs as a numbered sidebar plus a main statement. |
| 12 | Ghee | A recipe-card-style spread (without recipes or health claims): bilona explained, the jar still-life and three grades. |
| 13 | Trace your milk | An interactive "boxout": enter the demo Bottle ID and the result prints as a captioned timeline. DEMO is shown as a kicker on every line. |
| 14 | Story | A chronology spread with verified milestones, using sources and footnote markers where helpful (for example "Incorporated 1 March 2019, ROC Jaipur"). |
| 15 | Final CTA | Back cover: "Know where your milk comes from.", the bottle, two CTAs and a colophon (contact and supporters marked pending). |

**Inner pages:** /milk is a "four covers" index · /milk/[variant] is the cover, feature, Look spread with the 360
viewer, and specifications boxout · /ghee is the feature plus specifications · /origin is the long-form feature with
breed field guide and grazing map · /trace is the infographic feature plus the demo boxout · /technology is the
science section, one short spread per verb · /about is the chronology plus colophon · /reserve is a "subscription
card" layout (magazine subscription metaphor), with clean fields and the returnable-glass note.

## 7. Component variants

`Cover` (masthead plus bottle plus coverlines) · `Kicker` · `Deck` · `DropCap` · `PullQuote` · `Marginalia` ·
`Caption` (+credit, +status) · `Boxout` (Specifications / Data / How it works) · `Folio` / `RunningHead` ·
`ReadingProgress` · `PhotoEssay` · `FieldGuideGrid` (breeds) · `ProductScene.cover` · `TraceMap.infographic` ·
`TraceYourMilk.boxout` · `EndMark` · `AssetSlot.editorial` (captioned empty frame: "Photograph needed: cows grazing, 4:5").

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / deps | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Editorial type stack | Fraunces/Newsreader/Inter Tight specimen, drop-cap and quote rules | Body at 19/31, measure 58–66ch; `text-wrap: pretty`; fonts ≤ 180 KB | — | 3 |
| 2 | Grid & shell | Feature grid, running head, folios | Spread templates (Opener/Read/Look/Data/Close), nav with running head | Marginalia collapse correctly < 1024 px | — | 4 |
| 3 | Hero | Cover | `Cover` component | Masthead plus bottle layering; LCP ≤ 2.5 s | Render, wordmark vector | 3 |
| 4 | Bottle → story | Contents page | Pinned contents with deks | Links jump to chapters; static in reduced motion | — | 2 |
| 5 | Cow → bottle | Photo essay | 7-frame strip | AssetSlots name each missing photo | Photos B4, B6–B8 | 3 |
| 6 | Origin / farm | Signature feature | Opener, drop cap, pull quote, Look spread | Copy approved; all photos credited | Photos B1, B2 | 4 |
| 7 | Breeds | Field guide | `FieldGuideGrid` | Same angle and background for all; status boxout | Photos B3 | 3 |
| 8 | Trace map | Infographic spread | `TraceMap.infographic` | Annotations match `traceNodes[]`; illustrative label | — | 4 |
| 9 | Quality | Data spread | Table, photo | No unconfirmed values | Photo B6 | 2 |
| 10 | Four worlds + 360 | Covers plus Look spreads | 4 covers, viewer embed with caption | Viewer swaps to frames automatically when supplied | 360 (A) | 6 |
| 11 | Heritage | Essay | Archival spread, plate | Factual and reviewed; no health language | Archive B11 | 3 |
| 12 | Technology | Science section | Dark spread, verb sidebar | Public vocabulary | — | 2 |
| 13 | Ghee | Ghee feature | Still-life spread | Claims reviewed | Jar photo | 2 |
| 14 | Trace-your-milk | Boxout demo | `TraceYourMilk.boxout` | DEMO per line; `aria-live` | — | 3 |
| 15 | /milk, /milk/[variant] | Product features | Index plus 4 features | Specifications boxout from `desigo.ts` | 360 (A), photos B5 | 6 |
| 16 | /origin, /trace, /technology | Long-form pages | 3 features | Reading time ≤ 6 min each | Photos B1–B8 | 6 |
| 17 | /about, /ghee, /reserve | Remaining pages | Chronology, ghee, subscription card | Verified milestones only | B10, B11 | 4 |
| 18 | Mobile | Single-column magazine | Mobile spreads | Body 18/29 on mobile; images full-bleed; no marginalia overlap | — | 4 |
| 19 | A11y + reduced motion | Read like a book | Heading outline, figure/figcaption, alt text policy | WCAG 2.2 AA; screen-reader test of one full feature | — | 3 |
| 20 | Perf, QA, handover | Ship | Responsive images (AVIF/WebP), editorial QA checklist | LCP ≤ 2.5 s on 4G; image weight ≤ 1.2 MB per page above the fold-plus-one | All | 4 |

**Total:** about 70 days. Most of the risk sits in the photography timeline, not in the build.

## 9. Assets needed from DESIGO®

- The full photography list B1–B11. Editorial is only as good as its pictures. A one- or two-day documentary shoot
  in Jodhpur (farms, testing, plant, delivery) is strongly recommended.
- Consented quotes from farmers, the team or founders, with names and roles, for pull quotes.
- Approved long-form copy (we draft from `docs/desigo-master`, DESIGO® approves).
- Archive material for the chronology, plus 360 sequences and wordmark vector.

## 10. Performance, accessibility and mobile

- Use responsive `<picture>` with AVIF/WebP, `sizes` per spread type, LQIP blur-up, and lazy-load below the first spread.
- Semantic structure: `<article>`, `<header>`, `<figure>`/`<figcaption>`, and an `<aside>` for boxouts. This also
  helps SEO (long-form origin content ranks).
- Body ≥ 18 px on mobile, line length 34–40ch. Marginalia become inline captions.
- Reduced motion: no pinning, images visible, progress bar static.

## 11. Risks and premium guardrails

**Risks:** too much text for impatient visitors; a "lifestyle blog" look; photography that is not good enough;
editorial voice drifting into claims.

**Premium guardrails**
1. Every feature opens with an image or a statement, never with a paragraph.
2. Hard text budget: ≤ 220 words per spread on the home page, with depth on inner pages.
3. Documentary, real photography only, credited. No stock, no AI imagery, no lifestyle props (no croissants, no
   generic farmhouse décor).
4. Captions carry status: pending claims are labelled in the caption, the way a newspaper would attribute.
5. No superlatives and no health language. Editorial voice reports and never sells.
6. Consistent spread system: at most 5 spread types and no one-off layouts.
7. Typographic craft is non-negotiable: real quotes, no widows, hanging punctuation in pull quotes.
8. Product moments use the Luxury Typography scenes so commerce never looks like a blog.
