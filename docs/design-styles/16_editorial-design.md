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
| 15 | Final CTA | Back cover: "Know where your milk comes from.", the bottle, two CTAs and a colophon (contact only; no supporters listed until written evidence is on file, KB Q34). |

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
3. Documentary, real photography only, credited. No stock and no AI imagery presented as photography (generated plates in 12.7 are limited to paper stock, textures and clearly illustrated backdrops), no lifestyle props (no croissants, no
   generic farmhouse décor).
4. Captions carry status: pending claims are labelled in the caption, the way a newspaper would attribute.
5. No superlatives and no health language. Editorial voice reports and never sells.
6. Consistent spread system: at most 5 spread types and no one-off layouts.
7. Typographic craft is non-negotiable: real quotes, no widows, hanging punctuation in pull quotes.
8. Product moments use the Luxury Typography scenes so commerce never looks like a blog.

## 12. Build-ready spec sheet

> Audit 2026-10-03: Section 12 was missing. Added it from the Paper & Ink palette with Newsreader body, all 14 components, motion tokens and 10 image prompts limited to paper, texture and clearly illustrated plates. Guardrail 3 ("no AI imagery") clarified so it no longer conflicts with 12.7. Fonts already OFL. Body: supporters no longer listed as pending on /about (blocked claim, KB Q34).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | forest: section openers, primary button, folios on dark spreads | 11.3:1 vs bg. AAA for text. |
| Primary ink | --c-on-primary | `#F7F4EC` | newsprint text on forest | 11.3:1 on primary. |
| Secondary | --c-secondary | `#1E7A68` | DESIGO green: links, kicker labels, reading-progress rule | 4.7:1 vs bg. Passes AA for link text. |
| Accent | --c-accent | `#C8A96B` | gold: rules, drop cap on dark, focus halo | 2.0:1 vs bg. Never text on light; drop caps in gold only on forest (5.5:1 there). |
| Background | --c-bg | `#F7F4EC` | newsprint page (brand milk) |  |
| Surface | --c-surface | `#EDE4D0` | stock: archival / heritage spreads; boxouts use stock-deep `#E2D6BC` |  |
| Text | --c-text | `#1E211F` | ink: headlines and body | 14.8:1 on bg · 12.9:1 on surface (≥ 7:1 met) |
| Muted text | --c-text-muted | `#55584F` | ink-soft: captions, credits, decks on light | 6.6:1 on bg · 5.7:1 on surface (≥ 4.5:1 met) |
| Line | --c-line | `#CFC5AF` | column rules, hairlines | decorative only; never the sole carrier of meaning |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1E7A68` / `#8C6A43` / `#B3202A` | green = verified caption line; earth dotted underline = pending (attributed in caption); red kicker = DEMO | Red DEMO kicker 6.0:1 on newsprint; earth is underline-only (4.5:1 borderline, never body text). |

**Variant worlds in this style** (base / deep / light are the brand variant tokens; the right-hand column is how this style stages them):

| Variant | Base | Deep | Light | World in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | green-stock cover (`#D9E8DF` page, `#0A2A20` ink): "The fullest expression of the source."; MasterHerb™ feature with herbs pending in a boxout |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | blush stock with oxblood ink: "Rooted in free grazing." photo essay |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | pale-amber stock with umber ink: "The everyday foundation." morning-delivery feature |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory stock with warm-brown ink: "Simple, balanced, honest." one-bottle still-life spread |

**Dark-chapter inversion:** Forest spreads (ch. 06 infographic, ch. 11 science section): bg → `#0B3B32`, surface → `#0F4A3F`, text → `#F7F4EC`, muted → `#C9D3CD`, line → `rgba(247,244,236,.18)`, accent gold `#C8A96B` for drop caps and rules, links → `#7FE0B8`; primary button inverts to milk fill with forest label.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 144, wght 400, italic for decks | clamp(4rem, 10vw, 10rem) (cover masthead lines) | 0.92 | -0.03em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` (Google Fonts: Fraunces) | opsz 72–144, wght 400–500, italic | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.04 / 1.12 | -0.02em | Sentence |
| Body | Newsreader (variable) | `@fontsource-variable/newsreader` (Google Fonts: Newsreader) | opsz 6–72 auto, wght 400–500, italic | clamp(1.125rem, 1rem + 0.35vw, 1.1875rem) (18–19 px) | 1.63 (31 px) | 0 | Sentence; `onum` in text, `lnum` in tables |
| Label / UI | Inter Tight (variable) | `@fontsource-variable/inter-tight` (Google Fonts: Inter Tight) | wght 400–500 | kicker 0.75rem / caption 0.8125rem | 1.2 / 1.46 (13/19) | +0.16em kickers · 0 captions | UPPER kickers, sentence captions |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` (Google Fonts: JetBrains Mono) | wght 400 | 0.8125rem | 1.4 | 0 | IDs as issued; tabular figures |
| Devanagari (optional) | Noto Serif Devanagari (variable) | `@fontsource-variable/noto-serif-devanagari` (Google Fonts: Noto Serif Devanagari) | wght 400–500, wdth 100 | pull quotes clamp(1.6rem, 3vw, 2.4rem) | 1.45 | 0 | n/a |

Licence: Fraunces, Newsreader (Production Type), Inter Tight, JetBrains Mono and Noto Serif Devanagari are SIL OFL 1.1. Source Serif 4 (OFL) is the approved fallback text face.
Pairing: Fraunces headlines + Newsreader text give a magazine's display/text contrast; Inter Tight does the newspaper's small-type jobs (kickers, captions, credits).

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutter, 5vw margins, max-width 1440 px. Feature grid: text cols 4–9 (≈ 62ch), marginalia 10–12, pull quotes break out to 2–11. Spread types: Opener · Read · Look · Data · Close (max 5).
- **Spacing:** 4-px base, brand scale 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; spread padding 128 px desktop / 64 px mobile; mobile line length 34–40ch.
- **Radius:** 0 everywhere (sm 0 · md 0 · lg 0); pills only for the cursor.
- **Border:** 1 px column rules `#CFC5AF`; boxouts have a 1 px ink top rule + 4 px stock-deep fill band.
- **Shadow / elevation:** None; hierarchy by stock colour and rules. Bottle: contact shadow + soft ambient shadow on covers.
- **Texture / overlay:** Paper grain 2%; deckle-edge vignette via CSS mask on archival spreads only.

### 12.4 Components
All interactive components: `focus-visible` = 2 px forest `#0B3B32` outline, offset 3 px, plus a 2 px gold underline on text links; disabled = 40% opacity, `cursor: not-allowed`, `aria-disabled`; loading = label kept, `aria-busy="true"`.
- **Primary button**: Brand underlined label + arrow, Inter Tight 500 caps +0.16em, forest; a 1 px forest frame draws itself on hover (600 ms), arrow travels 8 px, magnetic offset ≤ 6 px. Active: frame fills forest, label newsprint. Disabled: ink-soft label, no frame. Loading: arrow becomes a 1 px rule that sweeps (900 ms loop). 48 px min height.
- **Secondary button**: Same label, no frame; 1 px ink underline. Hover: underline thickens 1 → 2 px (240 ms) and the arrow travels. Active: green. Disabled / loading as primary.
- **Text / arrow link**: Newsreader in-text links in green with 1 px underline, offset 3 px; hover 2 px (240 ms). Standalone "Continue reading →" in Inter Tight caps with travelling arrow. Disabled: ink-soft.
- **Icon button** (incl. menu): 44×44 px, 20 px 1.25 px-stroke icon (menu, share, close); menu icon = two rules that cross into ×. Hover: icon ink → green. Active: 0.96 scale. Always `aria-label`.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: A newspaper running head: 64 px newsprint bar, 1 px rule beneath, folio + running head centred ("DESIGO® · ORIGIN · 04") in Inter Tight caps, links right; a 1 px green reading-progress rule along the bottom on features. Mobile: full-screen "contents page" menu with Fraunces 36 px chapter titles and decks. Logo: the DESIGO® wordmark (approved vector, never redrawn or recoloured) sits at the left of the bar, 112 px wide desktop / 92 px mobile, running the black write / un-write infinite loop of `DesigoLogo` (strokes draw 0–1.2 s, hold to 3.0 s, un-draw 3.0–4.2 s, pause to 4.6 s). Single colour: charcoal `#171918` on light chapters, milk-white `#F7F4EC` on dark chapters; the colour switches with the chapter theme and never animates. No ring, glow, hover trigger or style effect is applied to it. Reduced motion: static, fully written wordmark.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default = native arrow (custom cursor off over long-form text) · hover = 24 px ink ring · ROTATE = ring with "DRAG" · EXPLORE = ring with "READ" · ENTER = ring with → · VIEW = ring with "VIEW" over images · TRACE = ring with a small forest dot. Labels Inter Tight 9 px caps. Touch: native; captions always visible (no hover-only content).
- **Card / panel / info block**: Boxout: stock-deep `#E2D6BC` fill, 1 px ink top rule, kicker + Fraunces H3 + Newsreader 16/26, 24 px padding. Variants: Specifications / Data / How it works. Clickable "cover" cards: image 4:5, hover lifts the caption 4 px (240 ms).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): Inter Tight 11 px caps kicker-style tag with a 1 px rule above. Pending verification: claim text gets an earth `#8C6A43` 1 px dotted underline and the caption carries "pending verification" like a newspaper attribution. DEMO: red `#B3202A` kicker "DEMO · NOT LIVE DATA" at the top of every demo boxout. Static.
- **Input + form field** (Trace-your-milk bottle ID): Inside a boxout: label "Bottle ID" (Inter Tight caps), 56 px field, newsprint fill, 1 px ink bottom border only, JetBrains Mono 18 px, placeholder `DSG-BTL-000001-3 (sample format)`. Focus: border 2 px forest + ring token. Error: red text line below. Loading: "Checking the record…" caption with rule sweep.
- **Divider / ornament**: Thick-thin column rule, and the section-end mark: the DESIGO® wave-"E" at 12 px in ink (vector from the wordmark set, not redrawn) closing each feature.
- **Section header** (chapter number + title pattern): Folio-style: chapter number in Inter Tight caps "04 — ORIGIN" kicker, Fraunces H1 title, italic Newsreader deck below, 1 px rule; opener pins image 60vh while title scrolls over.
- **Product info block** (variant name, code, price-pending, size, descriptors): "Specifications" boxout: Fraunces variant name, code in mono, size and price in Newsreader with earth dotted pending underline and caption "price pending confirmation", descriptors as a two-column definition list each with its status line.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): Magazine cover: the render overlaps the masthead the way a cover star overlaps the title; contact shadow on newsprint or variant stock, no glow. Float ±10 px / 6 s, tilt ±8°; before 360 frames ±25° + sheen; with frames a "Look" spread hosts Bottle360Viewer with caption "Drag to turn." (credit line only when a real shoot exists).
- **Trace node / timeline step**: Numbered annotation on a hairline chain (forest spread): mono step number, Inter Tight title, Newsreader 16 px body from `traceNodes[]`, sidebar "How a hand-off is recorded". Active step: number in gold, rule thickens. Label "Illustrative journey — not live data".

### 12.5 Iconography & illustration
- **Icons:** Minimal: 20 px, 1.25 px stroke, square caps, used only for UI (menu, close, share, play). Kickers replace icons in content.
- **Illustration:** Hairline infographics (1 px) and engraved-style plates for heritage; generated plates are clearly illustrations, never pseudo-photos.
- **Photo treatment:** Documentary, natural light, credited ("Photograph: DESIGO®, Jodhpur"); crops 4:5, 3:2, 16:9 full-bleed; reveal by top-down clip wipe with 1.06 → 1 scale; no filters.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | text rise 12 px, image wipe |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page turn (slide up 24 px + fade) |
| `--dur-micro` | `240ms` | underline thickness, caption lift |
| `--dur-reveal` | `600ms` | text reveals, page transition |
| `--dur-scene` | `1200ms` | image clip-path reveal |
| `--pin-opener` | `60vh` | Snow-Fall opener pin length |
| `--float` | `translateY ±10px / 6000ms` | bottle float |

- **Signature:** opener image pinned while the title scrolls over it; contents-page bottle pin in ch. 02.
- **Scroll:** captions fade in at 50% visibility; 1 px reading-progress rule.
- **Reduced motion:** no pinning, images visible immediately, progress rule static, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *editorial magazine plate in matte gouache and fine ink line, Marg-magazine art-plate quality, clearly an illustration and not a photograph, muted warm palette of milk white #F7F4EC, paper #EDE4D0, deep forest green #0B3B32, earth brown #8C6A43 and warm gold #C8A96B, generous negative space for type, subtle paper grain, calm, no text, no watermark, no logo, no letters*

**Base negative prompt (append to every negative below):** *text, letters, words, numbers, logo, watermark, signature, label, signage, brand name, milk bottle, glass bottle, ghee jar, packaging, Holstein cow, Jersey cow, black-and-white spotted cow, cartoon cow face, cow wearing clothes, anthropomorphic animal, religious iconography, deity, people's faces*

| # | File path (web/public/desigo/styles/editorial-design/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| 1 | `cover-landscape.png` | 3200×2000 (16:10) | no | Gouache illustration of the Thar desert edge near Jodhpur at first light, low khejri trees and soft dunes in the lower third, a large calm empty sky in the upper two thirds for the masthead and the product | photorealism, people, buildings with signs, vivid saturation (+ base negative) | Ch. 01 cover backdrop |
| 2 | `cover-portrait.png` | 1400×2400 (7:12) | no | Same gouache Thar dawn plate as a tall magazine-cover portrait, horizon in the lowest quarter, empty upper area | photorealism, people (+ base negative) | Mobile cover |
| 3 | `covers/master-26.png` | 2400×3000 (4:5) | no | Gouache cover plate of a deep forest canopy seen from below, layered greens #0A2A20 and #1F5C45 on pale green stock #D9E8DF, dappled light, empty centre | named herbs, photorealism (+ base negative) | Ch. 08 cover, /milk/master-26 opener |
| 4 | `covers/root-14.png` | 2400×3000 (4:5) | no | Gouache cover plate of red-earth grazing land with layered sandstone strata, oxblood #4A0A0F and crimson #B3202A on blush stock #F3D9D6, empty centre | photorealism, people (+ base negative) | Ch. 08 cover, /milk/root-14 opener |
| 5 | `covers/base-3.png` | 2400×3000 (4:5) | no | Gouache cover plate of a quiet village lane at early morning, long shadows, umber #5A3304 and amber #E89A1C on pale amber stock #F8E4C2, empty doorstep centre | photorealism, people's faces, vehicles (+ base negative) | Ch. 08 cover, /milk/base-3 opener |
| 6 | `covers/essential.png` | 2400×3000 (4:5) | no | Minimal gouache still-life plate: a single pale sandstone block on ivory stock #F4EDE2 with a soft shadow, almost nothing else | objects on the stone, photorealism (+ base negative) | Ch. 08 cover, /milk/essential opener |
| 7 | `infographic/journey-chain.png` | 3600×1200 (3:1) | yes | Hairline editorial infographic illustration of seven small vignettes in a row linked by one thin line: zebu cow grazing, farm shed with khejri tree, steel milk can, round test card with sixteen dots, stainless chiller, small dairy plant, doorstep at dawn, ink on transparent background | numbers, captions, arrows with text, colour fills (+ base negative) | Ch. 03 / ch. 06 infographic spread |
| 8 | `textures/newsprint.png` | 2400×2400 seamless | no | Seamless tileable uncoated newsprint paper in milk white #F7F4EC, extremely fine fibres, flat scan lighting | printed text, folds, stains (+ base negative) | Global paper grain (2%) |
| 9 | `textures/archival-stock.png` | 2400×2400 seamless | no | Seamless tileable warm archival cotton stock #EDE4D0 with soft deckle irregularity, no foxing, flat light | stains, tears, text (+ base negative) | Heritage ch. 10, /about chronology |
| 10 | `heritage/cow-plate.png` | 1600×2000 (4:5) | yes | Fine ink line plate of a Gir zebu cow, domed forehead, long curled ears, curved horns, calm three-quarter view facing left, on transparent background | cartoon, adornment, religious marks, photorealism (+ base negative) | Ch. 10 heritage plate |

Editorial photography (farms, people, cows, testing, delivery) must be real and credited; these generated plates only cover paper, covers-as-illustration and infographic art.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/16_editorial-design.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/editorial-design/
- [ ] Every photograph has a caption + credit; every pending claim is attributed in its caption
- [ ] ≤ 220 words per home-page spread; no widows (`text-wrap: pretty`)
