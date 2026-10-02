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
| `--sb-stamp` | `#17614F` | Rubber-stamp green (DESIGO® green `#1E7A68` deepened for paper: 5.6:1 on the board, where `#1E7A68` measured 4.0:1) |
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
| 11 | Technology | Graph-paper spread: phone-app screenshots (the farm, plant and delivery pilot apps, if approved, showing public vocabulary only) printed and taped; seven verbs as typed labels. |
| 12 | Ghee | A recipe-book spread for bilona: churning sketch, jar label specimen, three jar prints tied to their milks with string. |
| 13 | Trace your milk | A typed "enquiry slip": enter a bottle ID; results print out as a receipt-like strip stamped DEMO. |
| 14 | Story | **Signature chapter**: the founding journal — incorporation record (2019, verified), event photos and passes (pending approval to publish), hand-dated notes. |
| 15 | Final CTA | The notebook closes onto its cover: embossed DESIGO® wordmark, "Know where your milk comes from." |

### Inner pages
- **/milk** — four tabs; **/milk/[variant]** — tabbed spread + contact-sheet viewer + typed card.
- **/ghee** — bilona recipe-book page. **/origin** — Farm Journal (the best use).
- **/trace** — clean graph-paper map + enquiry slip. **/technology** — graph-paper spread.
- **/about** — founding journal; no supporter cards until written evidence is on file (KB Q34). **/reserve** — clean typed order form on a notebook page.

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
| 12 | Technology | Graph-paper app spread | Screenshots, verbs | Screens approved; no internal data or internal system names visible | Pilot-app screenshots (approved) | 2 |
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
4. Approved screenshots of the pilot apps with all internal data and internal system names removed (the internal system name is never shown to customers).
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
7. Palette discipline: kraft, milk, ledger red, ink blue, DESIGO® green — nothing else.
8. Pending and demo stamps are prominent and consistent.
9. Copy in field-note tone: observational, dated, factual; no superlatives or health claims.
10. Use the scrapbook where memory is the subject (story, farm journal), not where evidence must be crisp.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: three references to 'RTCOM' screenshots replaced by 'pilot app' wording (RTCOM is internal and never shown to customers); stamp green `#1E7A68` measured 4.0:1 on the kraft board → `#17614F` (5.6:1); 'DESIGO green' → 'DESIGO® green'; /about no longer shows supporter cards (KB Q34). Fonts already open-licence (Special Elite is Apache 2.0). Added states, cursor map, motion tokens and 11 image prompts (textures and empty spreads only — records stay real).

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#17614F` | rubber-stamp green (`--sb-stamp`, DESIGO® green deepened for paper): stamps, primary typed-label CTA, active tab | 5.6:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk text on stamp-green fill | 6.7:1 on primary |
| Secondary | `--c-secondary` | `#8E1F24` | bahi-khata ledger red (`--sb-ledger-red`): cloth tabs, DEMO stamp, Heritage ledger spreads | 6.7:1 on bg |
| Accent | `--c-accent` | `#1E2A3A` | fountain-pen blue-black (`--sb-ink`): handwritten notes, drawn arrows/circles, focus ring | 11.1:1 on bg |
| Background | `--c-bg` | `#E9E0CC` | kraft/board ground (`--sb-board`) | text 12.4:1 |
| Surface | `--c-surface` | `#F7F4EC` | notebook page (`--sb-page`, milk): all body text sits on pages | text on surface 14.8:1 |
| Text | `--c-text` | `#1E211F` | typeset body (`--ink`) | 12.4:1 on bg |
| Muted text | `--c-text-muted` | `#5B5A55` | pencil annotations (`--sb-pencil`) | 5.3:1 on bg; 6.3:1 on page |
| Line | `--c-line` | `rgba(30,42,58,0.22)` | ruled notebook lines and graph-paper grid in blue-black at 22%; kraft scraps `#C9A87A`; tape `#E8DDB5` at 85% | decorative |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#17614F` / `#8E1F24` | ok = green 'RECEIVED' stamp (verified only); pending = green 'PENDING' stamp + dotted underline + typed note 'pending verification'; DEMO = ledger-red 'DEMO · NOT LIVE DATA' stamp, typed (never handwritten) | ok 6.0:1 · pending 5.6:1 · demo 6.7:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | deep-green cloth tab; real scanned herb leaves (number never implies the herb count); grazing field note; label sample |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | red tab; soil-bag sketch, red-earth print, handwritten 'free grazed' |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | amber tab; golden-hour print, tea-stained notes; text in deep |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | ivory tab; the sparest spread — one print, one typed card |

Dark-chapter inversion: the scrapbook has no dark chapters; the Trace chapter steps back to a clean graph-paper card on the page. The closed notebook cover (15 Final CTA) is ledger red `#8E1F24` with an embossed milk wordmark area and milk text (8.1:1).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` · Google Fonts | 400, SOFT 100, WONK 1 | clamp(3rem, 7.5vw, 7.5rem) | 1.02 | -0.01em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` | H1 500 / H2 500, WONK 1 | H1 clamp(2.3rem, 4.4vw, 4.25rem) · H2 clamp(1.6rem, 2.6vw, 2.5rem) | 1.08 / 1.18 | 0 | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 400 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.6 | 0 | Sentence (never rotated > 1°) |
| Label / UI | Courier Prime | `@fontsource/courier-prime` · Google Fonts | 400 / 700 | 0.8125rem | 1.35 | +0.04em | UPPERCASE for record cards |
| Data / mono | Courier Prime | `@fontsource/courier-prime` | 400 | 0.875rem | 1.5 | 0 | As data (typed cards, enquiry slip) |
| Devanagari (optional) | Kalam | `@fontsource/kalam` · Google Fonts | 400 / 700 | clamp(1.25rem, 2.5vw, 1.75rem) (bilingual notes ≤ 8 words) | 1.3 | 0 | — |

Licence: Fraunces, Inter Tight, Courier Prime, Caveat (handwritten annotations ≤ 8 words, `@fontsource-variable/caveat`, 500) and Kalam are SIL OFL 1.1; Special Elite (ink stamps, `@fontsource/special-elite`) is Apache 2.0. Pairing: wonky Fraunces + typewriter Courier Prime read as a crafted field journal, while Inter Tight keeps long text clean. Real founder handwriting (SVG) replaces Caveat where supplied.

### 12.3 Layout & surfaces
- **Grid:** spread-based — each chapter is a double-page spread on a 12-column underlay (6 per page, the spine as the centre gutter, 48 px); 5vw outer margin on the board; pieces snap to a hidden 8 px grid, rotated −4° to +4°; max three rotated pieces per spread. Mobile: single page, pieces stacked with 24 px overlaps.
- **Spacing scale:** 4 · 8 · 16 · 24 · 32 · 48 · 72 · 112 px.
- **Radius:** 0 for paper; 2 px for photo prints; tabs 6 px on the outer corners only.
- **Borders:** white 12 px print borders on photos; photo corners; washi tape strips (scans).
- **Elevation:** soft paper lift `0 2px 8px rgba(30,33,31,.15)`; hover `0 10px 24px rgba(30,33,31,.18)`.
- **Texture/overlay:** scanned real paper (kraft, ledger, ruled, graph), 6% paper grain; tape/stamps/corners from one SVG/AVIF atlas.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — typed label on a kraft tag: Courier Prime 700 uppercase on a `#17614F` stamp-green tag shape (radius 0, notched left end), milk text, with a hand-drawn arrow; 48 px tall, padding 0 24 px · hover the pencil circles the button (SVG stroke draws 600 ms), tag lifts 2 px · focus-visible 2 px blue-black `#1E2A3A` ring, 3 px offset · active tag presses flat · disabled kraft `#C9A87A` tag, ink 55%, no circle · loading three typed dots appear one by one.
- **Secondary button** — typed label on a milk page tag with 1 px ink edge and tape strip; hover pencil underline draws; focus-visible blue-black ring; active flat; disabled 40%; loading typed dots.
- **Text / arrow link** — Inter Tight or Courier label with a hand-drawn ink underline and arrow (SVG); hover the pencil circles the link; focus-visible 2 px blue-black outline; visited unchanged.
- **Icon button (incl. menu)** — 44 px paper disc with hand-drawn doodle icon; menu = three hand-drawn lines; hover lift 2 px + slight rotation to 0°; focus-visible ring; active flat; disabled 40%; `aria-label`, `aria-expanded`.
- **Navigation bar** — a strip of typed labels taped along the top of the board (64 px) on a milk paper band; logo left on clean paper (no tape over it), links Courier Prime 700 uppercase, Reserve as the stamp-green tag; current page gets a green stamp underline. Mobile: logo + menu disc; menu = notebook page sliding in with index tabs. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 16 px pencil tip, slight rotation · hover (link): the pencil circles the link · ROTATE (bottle): paper tag `ROTATE` · EXPLORE (spread): pencil + `EXPLORE` tag · ENTER (index tab): tag `ENTER` · VIEW (taped photo): magnifier tag `VIEW` · TRACE (graph-paper node): tag `TRACE`; draggable pieces show open hand / grab. Touch: off; tags appear as captions.
- **Card / panel / info block** — `TypedCard`: milk index card with faint ruled lines, Courier Prime heading, Inter Tight body, 1 px ink edge, paper lift shadow, rotation ≤ 1° · hover lift 6 px and rotation to 0° · focus-visible ring · active flat · disabled n/a · loading blank card with typed `…`.
- **Badge / tag** — ink-stamp marks in Special Elite with uneven density: neutral 'RECEIVED'; **pending verification** = green 'PENDING' stamp beside the claim + dotted underline + popover with the source note; **DEMO · not live data** = ledger-red stamp, typed (never handwritten), always visible; variant tags are cloth tabs in cap colour.
- **Input + form field** — typed 'enquiry slip': milk slip with ruled line, label Courier Prime, 56 px field (1 px ink bottom rule, Courier Prime 1.125rem), placeholder `DSG-BTL-000001-3 (sample format)` · hover rule 2 px · focus-visible 2 px blue-black ring · invalid ledger-red rule + typed message · disabled kraft fill · loading typed dots; the result prints as a receipt strip stamped DEMO.
- **Divider / ornament** — a strip of washi tape, a hand-drawn wavy line, or the ruled line itself; one doodle star per spread at most.
- **Section header** — a cloth index tab with the chapter number (Courier Prime `14`), title in Fraunces WONK, optional Caveat note ≤ 8 words with a drawn arrow.
- **Product info block** — typed record card: V-code, name, line, size `1 L glass · 900 g` with green PENDING stamp, price 'Price pending confirmation' until approved, descriptors each with a pending stamp; clipped to the spread with a photo corner.
- **Bottle stage** — in product moments the bottle stands clean on a milk notebook page with a real contact shadow, beside a Caveat note 'from the source' and a green stamp 'DESIGO®' (the '· JODHPUR' place line is added only once the city claim, still pending in `desigo.ts`, is approved); float ±6 px / 6 s, tilt ±5°; with 360 frames a taped contact-sheet strip (12 prints, every 30°) highlights the current angle; the bottle is never scrapbooked.
- **Trace node / timeline step** — on a clean graph-paper card: 14 px inked circle nodes joined by a typed straight line; states upcoming (outline) · active (filled green + typed explanation) · visited (filled blue-black) · hover circle redraws · focus-visible ring; 'Illustrative journey — not live data' typed, never handwritten.

### 12.5 Iconography & illustration
- **Icons:** hand-drawn ink doodles (arrows, circles, underlines, stars, tick, drop, cow outline) drawn once by an illustrator, 1.5–2 px pen weight, reused consistently.
- **Illustration:** real scanned ephemera first (archive B11, herb scans B5, test card B6); AI images below are textures and empty spreads only — never fake records.
- **Photo treatment:** real photos printed with white borders, rotated −4° to +4°, held by tape or photo corners, slightly warm print grade; lightbox shows full caption (date, place class — real only).

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | pieces drop and settle |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | page turn |
| `--dur-micro` | `200ms` | hover lift |
| `--dur-reveal` | `500ms` | piece drop (−20 px, +2° → settle); tape sticks +120 ms |
| `--dur-scene` | `1000ms` | page turn (CSS 3D) |
| `--draw` | `600–900ms` | handwriting/doodle stroke draw |

Draggable pieces on desktop are optional and reset on reload. Reduced motion: no page turns, drops or handwriting animation — strokes appear drawn; logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Never generate documents, slips, labels, certificates or herb specimens — those must be real, approved scans. Generated images are papers, tapes and empty spreads.

**Tail prompt (append to every prompt):** *crafted field-journal scrapbook flat-lay in the precise style of Annie Atkins prop design, real paper textures, kraft #C9A87A, board #E9E0CC, milk page #F7F4EC, ledger red #8E1F24, blue-black ink #1E2A3A and stamp green #17614F, soft daylight from the upper left, subtle paper shadows, warm, tactile, premium, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/scrapbook/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Top-down flat-lay of an open notebook on a kraft board, torn handmade papers at the edges, a strip of washi tape, pressed grass blade, string and a blank kraft tag, the right-hand page clean and empty in the centre | writing, stamps with words, photos of people, bottles | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical top-down flat-lay of a single open notebook page on kraft board with tape strips at the corners and a blank tag, page centre empty | writing, bottles | 01 Hero mobile |
| 3 | `spreads/master-26.png` | 3200×2000 + 1400×2400 | no | Open notebook spread on kraft board with a deep green cloth page tab, a faint meadow-green watercolour wash in one corner, blank ruled pages, empty photo corners | herb specimens, leaves in a row, writing | 08 Four milks · /milk/master-26 |
| 4 | `spreads/root-14.png` | 3200×2000 + 1400×2400 | no | Open notebook spread with a red cloth page tab, a red-earth watercolour wash, a small empty kraft paper bag sketch in pencil, blank pages | writing, blood | 08 Four milks · /milk/root-14 |
| 5 | `spreads/base-3.png` | 3200×2000 + 1400×2400 | no | Open notebook spread with an amber cloth page tab, tea-stained pages, a soft golden-hour watercolour wash, blank pages, empty photo corners | writing | 08 Four milks · /milk/base-3 |
| 6 | `spreads/essential.png` | 3200×2000 + 1400×2400 | no | Open notebook spread with an ivory cloth page tab, almost empty clean pages, one empty photo corner set, very sparse | clutter, writing | 08 Four milks · /milk/essential |
| 7 | `journey/concertina.png` | 6000×1400 (horizontal) | no | Long fold-out concertina strip of milk paper lying on kraft board, seven empty white-bordered photo frames taped along it, a hand-inked blue-black line connecting them | photos inside frames, writing | 03 Cow to bottle |
| 8 | `textures/kraft.png` | 2048×2048, seamless | no | Seamless tileable kraft board texture, warm beige #E9E0CC, visible recycled fibres, flat scan lighting | stains, folds, seams | board ground |
| 9 | `textures/graph-paper.png` | 2048×2048, seamless | no | Seamless tileable milk-white graph paper with fine pale blue-grey 5 mm grid and darker 25 mm lines, flat scan | writing, stains | 06 Traceability, 11 Technology, /trace |
| 10 | `textures/washi-tape.png` | 2400×600 (strip set) | yes (real alpha) | Set of six torn strips of semi-translucent washi masking tape in cream, kraft and pale green, slight wrinkles, isolated on transparent background | patterns with letters, text | tape atlas |
| 11 | `material/milk-wash.png` | 3200×2000 | yes (real alpha) | A spreading milk-white watercolour wash with soft blooming edges on transparent background, painted look | containers, spills on floor | 09 Milk as material (reveal mask) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/09_scrapbook.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/scrapbook/
- [ ] Every 'document' on screen is either a real approved scan or clearly an illustration/demo; personal data redacted
- [ ] Max three rotated pieces per spread; body text never rotated more than 1°
