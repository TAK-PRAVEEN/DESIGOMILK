# 09 — Scrapbook · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 3 / 5** · Best used for: Story (14), the /about page and a "Farm Journal" section — the brand's founding and field notes; possibly Where it begins (04).

---

## 1. Style essence

Scrapbook design composes a page from collected physical things: photographs with tape and corners, handwritten notes, receipts and tickets, torn paper, stamps, pressed leaves, labels and stitches. It feels personal, accumulated and true — a record of lived experience rather than a designed advertisement.

Origins: Victorian commonplace books and albums, family photo albums, Indian *bahi-khata* ledgers and travel diaries, and the 2010s "analogue" web trend (Instagram journaling, zine culture).

Three reference points:
1. **Field notebooks of naturalists** (e.g. Darwin's and Indian ornithologist Sálim Ali's notebooks) — observations, sketches, specimen notes: an honest record.
2. **Wes Anderson's prop design (Annie Atkins)** — perfectly crafted ephemera; scrapbook done with luxury precision.
3. **The Rajasthani *bahi* (red cloth-bound ledger)** and old dairy collection slips — the local ephemera of milk trade.

## 2. Why it fits DESIGO® (and where it fights)

DESIGO®'s story is literally a record: collection slips, test cards (the 16-point paper test), batch sheets, QR stickers, delivery notes, early labels and bottles, first farm photographs. A scrapbook can show the brand's journey and the farm reality with warmth and authenticity, and it is a natural home for archival material (asset B11). It also humanises the founders, farmers and early milestones.

Where it fights: scrapbook is informal, busy and home-made; done loosely it undermines the premium "Apple launch" ambition and makes the brand look small. It is also tempting to fake ephemera — and faking records would be dishonest for a traceability brand.

**Fit score: 3 / 5.** Excellent for Story, About and a Farm Journal; acceptable as a light layer on Origin; not for the hero, product worlds, quality or trace evidence (where invented-looking "documents" would confuse real and demo data). The full plan still covers the whole site.

## 3. Art direction

### Palette — "ledger and field notes"
| Token | Hex | Role |
|---|---|---|
| `--sb-board` | `#E9E0CC` | Kraft/board ground (harmonised with `--paper #EDE4D0`) |
| `--sb-page` | `#F7F4EC` | Notebook page (milk) |
| `--sb-kraft` | `#C9A87A` | Kraft paper scraps, envelopes |
| `--sb-ledger-red` | `#8E1F24` | Bahi-khata cloth red (from ROOT 14 deep tones) |
| `--sb-tape` | `#E8DDB5` at 85% | Washi/masking tape |
| `--sb-ink` | `#1E2A3A` | Fountain-pen blue-black (handwriting) |
| `--sb-pencil` | `#5B5A55` | Pencil annotations (≥ 4.5:1 on page) |
| `--sb-stamp` | `#1E7A68` | Rubber-stamp green (DESIGO green) |
| `--gold` | `#C8A96B` | Pressed-leaf / ghee ephemera |
| `--ink` | `#1E211F` | Typeset body |
| Variant labels | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | Cap-coloured tabs, labels and stickers |

### Typography
- Display: **Fraunces** 400 with SOFT 100 and WONK on — slightly quirky, letterpress-like headlines.
- Typewriter: **Courier Prime** (OFL) for labels, captions, "typed" record cards.
- Handwriting: **Caveat** 500 for short annotations only (≤ 8 words); **Kalam** (Latin + Devanagari) for bilingual notes — best: the client's real handwriting scanned as an SVG set for a few key phrases.
- Body: **Inter Tight** 400 on clean page inserts so long text stays readable.
- Stamps: **Special Elite** at small sizes for ink-stamp marks ("RECEIVED", "DEMO", "PENDING").

### Texture
Scanned real paper (kraft, ledger, notebook ruled, graph paper), real tape scans, real stamp ink with uneven density; paper grain 6%; soft drop shadows (2–8px, 15%) to lift pieces off the board.

### Imagery
Real photographs printed with white borders (instant-print or 4×6), slightly rotated (−4° to +4°), held by tape or photo corners. Archive material scanned at high resolution. Pressed herb leaves (scanned real specimens from the feed herbs, asset B5). The bottle render is shown both clean (product moments) and as a "photo" pinned in the book (story moments).

### Iconography
Hand-drawn ink doodles (arrows, circles, underlines, stars) — drawn once by an illustrator and reused consistently.

### Grid
Spread-based: each chapter is a double-page notebook spread on a 12-column underlay (6 per page, gutter as the book's spine). Pieces snap to a hidden 8px grid but are rotated for life. Max three rotated pieces per spread; text inserts are never rotated more than 1°. Mobile: single page view, pieces stacked vertically with 24px overlaps.

## 4. Motion & interaction language

- Tactile and hand-placed: pieces drop onto the board (translateY −20px, rotate +2° → settle) over 500ms `cubic-bezier(.16,1,.3,1)`; tape strips "stick" 120ms later.
- Page turns: chapter-to-chapter transitions turn a notebook page (CSS 3D, 1000ms `cubic-bezier(.65,0,.35,1)`), with a shadow sweeping across.
- Annotations draw themselves: SVG strokes in handwriting animate along their path (600–900ms) when scrolled into view.
- Cursor: a pencil tip (16px) with slight rotation; **link** → pencil circles the link (stroke draws around it); **draggable piece** → open hand / grab; **bottle** → a paper tag `DRAG` / `TILT`; touch: off.
- Hover on photos: lift 6px, rotation straightens toward 0°, shadow grows; click opens a lightbox with full caption (date, place class — real only).
- Pieces can be lightly dragged on desktop (a delightful, non-essential interaction; positions reset on reload).

## 5. The hero bottle and the four variant worlds

**Presence.** For the hero, the scrapbook steps back: the bottle stands clean on a milk notebook page with real contact shadow, beside a handwritten note "from the source" (Caveat) and a green rubber stamp "DESIGO® · JODHPUR" — the product stays pristine, the ephemera surround it. Float ±6px / 6s, tilt ±5°.

**Rotation.** With 360 frames: a strip of contact-sheet prints (every 30°, 12 prints) is taped beneath the bottle; dragging the bottle rotates it and highlights the matching print; clicking a print jumps to that angle. Without frames: a single print and a note "360° photographs coming soon" in pencil.

**Variant worlds** — four notebook spreads, each with a coloured cloth tab on the page edge:
- **MASTER 26** — deep green tab; pressed herb leaves (real scans; count of herbs *not* implied by number of leaves until the herb claim is approved); field note about grazing; MASTER 26 label sample.
- **ROOT 14** — red tab; a soil sample bag sketch, red earth photo print, handwritten "free grazed".
- **BASE 3** — amber tab; golden-hour farm print, tea-stained notes.
- **ESSENTIAL** — ivory tab; the sparest spread — one print, one typed card.
Each spread has a typed record card (Courier Prime) with V-code, name, line and descriptors; pending items are stamped "PENDING" in green with a dotted underline; price shows "Price pending confirmation" until approved.

## 6. Page-by-page treatment

### Home
| # | Chapter | Scrapbook treatment |
|---|---|---|
| 01 | Hero | Clean bottle on a notebook page; "Milk from the source." in Fraunces; handwritten note and stamp; CTAs as typed labels with drawn arrows. |
| 02 | Bottle becomes the story | Six index tabs on the notebook edge (ORIGIN · BREED · FEED · FARM · QUALITY · TRACE); each tab pulls out a card with one line. |
| 03 | Cow to bottle | A long fold-out strip (like a concertina) with seven taped prints/sketches and a hand-inked milk line joining them. |
| 04 | Where it begins | **Strong use**: real farm prints, pressed grass, handwritten observations, a hand-drawn map of the area (no exact locations). |
| 05 | Breeds | Breed "specimen cards" — portrait print, typed name and region, "Awaiting confirmation" stamp where pending. |
| 06 | Traceability | Scrapbook steps back: a clean, typed diagram card on graph paper; eight nodes; "Illustrative journey — not live data" typed, not handwritten. |
| 07 | Quality | The real 16-point paper test card (photographed, approved) with a clean typed transcription beside it; values "pending lab confirmation". |
| 08 | Four milks | Four tabbed spreads. |
| 09 | Milk as material | A spilled-milk watercolour wash spreading across the page (painted, scanned; animated reveal mask). |
| 10 | Heritage | Old photographs, ledger pages, hand-inked cow drawing; one typeset sentence. |
| 11 | Technology | Graph-paper spread: phone-app screenshots (real RTCOM pilot screens, if approved) printed and taped; seven verbs as typed labels. |
| 12 | Ghee | A recipe-book spread for bilona: churning sketch, jar label specimen, three jar prints tied to their milks with string. |
| 13 | Trace your milk | A typed "enquiry slip": enter a bottle ID; results print out as a receipt-like strip stamped DEMO. |
| 14 | Story | **Signature chapter**: the founding journal — incorporation record (2019, verified), event photos and passes (pending approval to publish), hand-dated notes. |
| 15 | Final CTA | The notebook closes onto its cover: embossed DESIGO® wordmark, "Know where your milk comes from." |

### Inner pages
- **/milk** — four tabs; **/milk/[variant]** — tabbed spread + contact-sheet viewer + typed card.
- **/ghee** — bilona recipe-book page. **/origin** — Farm Journal (the best use).
- **/trace** — clean graph-paper map + enquiry slip. **/technology** — graph-paper spread.
- **/about** — founding journal, supporters on typed cards (pending). **/reserve** — clean typed order form on a notebook page.

## 7. Component variants

`NotebookSpread` · `TapedPhoto` (rotation, tape, lightbox) · `PhotoCorners` · `IndexTabs` · `TypedCard` · `HandNote` (SVG handwriting) · `RubberStamp` (PENDING / DEMO / RECEIVED) · `PressedLeaf` · `ConcertinaStrip` · `ContactSheetViewer` · `EnquirySlip` + `ReceiptResult` · `PageTurnTransition` · `PencilCursor` · `ClaimText` · `AssetSlot` (empty photo corners with a pencil note naming the missing photo).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Ephemera system | Fraunces WONK/Courier Prime/Caveat/Kalam, paper & tape scans | Handwriting ≤ 8 words; body text ≥ 4.5:1 | Paper/tape scans | 3 |
| 2 | Shell | Notebook shell, nav, cursor | Typed-label nav, pencil cursor, page turn | Page turn ≤ 1s; skippable | Wordmark | 4 |
| 3 | Hero | Clean bottle + ephemera | Note, stamp, contact shadow | Bottle never rotated or taped | Renders | 2 |
| 4 | Story sequence | Index tabs | 6 tabs + cards | Tabs are buttons; reduced motion = list | — | 3 |
| 5 | Cow → bottle | Concertina strip | 7 pieces, inked line | Vertical stack on mobile | B4, B7, B8 | 4 |
| 6 | Origin | Farm journal spread | Prints, map sketch, notes | No exact farm locations | B1, B2, B5 | 4 |
| 7 | Breeds | Specimen cards | 6 cards, stamps | Pending stamps where needed | B3, approval | 2 |
| 8 | Trace map | Graph-paper diagram | Typed nodes, panel | DEMO typed; keyboard | Trace wording | 3 |
| 9 | Quality | Test card + transcription | Photo + typed list | Photo shows no third-party logos; values pending | Test card photo (B6), approval | 2 |
| 10 | Four worlds + 360 | Tabbed spreads + contact sheet | 4 spreads, ContactSheetViewer | Viewer sync; prints lazy | **360 sequences (A)**, herb scans | 5 |
| 11 | Heritage | Archive spread | Old photos, ledger | Only real archive | B11 | 3 |
| 12 | Technology | Graph-paper app spread | Screenshots, verbs | Screens approved; no internal data visible | RTCOM screenshots (approved) | 2 |
| 13 | Ghee | Recipe-book spread | Sketches, jar prints | Mapping correct | Jar photos, label specimen | 3 |
| 14 | Trace demo | Enquiry slip + receipt | TraceYourMilk | DEMO stamp on every receipt | — | 3 |
| 15 | /milk pages | Tabs + variant pages | Pages | Tabs keyboard navigable | A, pricing | 3 |
| 16 | /origin, /trace, /technology | Farm Journal + inner | Pages | ≤ 2.5 MB first load | B1–B9 | 5 |
| 17 | /about, /ghee, /reserve | Founding journal, ghee, form | Pages | Only verified milestones in production | Milestone approvals, B10 | 4 |
| 18 | Mobile pass | Single page view | Stacked pieces | No overlapping text; no horizontal scroll | — | 3 |
| 19 | A11y + reduced motion | Readable record | No drops/turns; alt text for every piece | axe clean; handwriting has typed equivalent | — | 3 |
| 20 | Perf, QA, handover | Ship | Sprite atlas for tape/stamps, docs | LCP ≤ 2.3s; total image weight per spread ≤ 1.2 MB | Approvals | 4 |

Total ≈ 65 days.

## 9. Assets needed from DESIGO®

1. **Archive material** (B11): earliest bottles, labels, delivery slips, collection records (anonymised), first farm photos, event passes — the heart of this style.
2. Scans of real pressed feed herbs (B5) and of the paper test card (B6) — with approval for public use.
3. Optional: founders' handwriting samples for key phrases.
4. Approved RTCOM app screenshots with all internal data removed.
5. 360 sequences (A), photography B1–B10, milestone approvals.

## 10. Performance, accessibility and mobile

- Performance: many images — use an atlas for tape/stamps/corners (one SVG sprite), AVIF for prints, lazy-load per spread, and cap rotated pieces per spread (transform cost is low, but large shadows add paint).
- Accessibility: handwriting and stamps are decorative or have typed equivalents; images carry real alt text and captions; draggable pieces are optional and do not hide content; focus order follows reading order, not visual scatter.
- Reduced motion: no page turns, drops or handwriting animation — strokes appear drawn.
- Mobile: one page at a time; pieces in a column; tabs become a horizontal scroller with clear focus.

## 11. Risks and premium guardrails

Risks: looking home-made or cluttered; fake ephemera undermining trust; confusing demo records with real ones; personal data exposure in real documents.

**Premium guardrails**
1. Craft precision (Annie Atkins level): consistent tape, consistent rotation range, real paper — no clip-art scrapbook kits.
2. Never fake records: every "document" is either real (approved) or clearly an illustration/demo.
3. Redact personal data on all real slips and records (names, phones, exact GPS).
4. The product shot is never scrapbooked in product moments — it stays pristine.
5. Limit handwriting to short notes; body copy is typeset.
6. Three rotated pieces per spread maximum; generous margins.
7. Palette discipline: kraft, milk, ledger red, ink blue, DESIGO green — nothing else.
8. Pending and demo stamps are prominent and consistent.
9. Copy in field-note tone: observational, dated, factual; no superlatives or health claims.
10. Use the scrapbook where memory is the subject (story, farm journal), not where evidence must be crisp.
