# 04 — Brutalism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 1 / 5 for the whole site** · Best used for: one campaign page — "The Raw Record" (`/trace/record`), a transparency page that shows the trace system without polish.

---

## 1. Style essence

Web brutalism exposes the raw material of the web: default-looking type, visible structure, hard borders, unstyled links, system fonts, monospace, stark contrast, no ornament, no easing. It rejects polish as a form of persuasion. Its honesty is its aesthetic — "this is exactly what it is".

Origins: architectural Brutalism (Le Corbusier's *béton brut*, the Barbican, Balkrishna Doshi's and Charles Correa's concrete in India), and the 2014–2018 brutalistwebsites.com movement.

Three reference points:
1. **Craigslist / early Bloomberg Businessweek web features** — raw information density as identity.
2. **Balenciaga's 2017–2019 site** — luxury brand deliberately adopting brutalist UI.
3. **IIM Ahmedabad (Louis Kahn) and Doshi's Sangath** — Indian béton brut: exposed brick and concrete, honest structure, warm rawness.

## 2. Why it fits DESIGO® (and where it fights)

The only honest bridge between brutalism and DESIGO® is **transparency**. A traceable milk brand that says "here is the raw record — collection time, batch, chiller share, barrel, bottle ID" can borrow brutalism's rejection of polish to make a point: nothing is hidden behind design.

Everywhere else it fights: milk is a food bought on trust, freshness and care; brutalism reads as hostile, unfinished or deliberately ugly. It cannot carry heritage, cows, glass bottles, or the "Apple launch × luxury editorial" brief. Families buying daily milk will not read deliberate harshness as premium.

**Fit score: 1 / 5 for the whole site.** Recommendation: do **not** build the main site in brutalism. Use it for one page — *The Raw Record* — a campaign/transparency page reachable from /trace ("See the raw record →"), styled like a field log, showing the demo journey of one bottle in raw form. Optionally, the Trace-your-milk demo result (chapter 13) can open in this "raw" mode. The full 20-phase plan is still given so the client can judge the direction honestly.

## 3. Art direction

### Palette — "béton and milk"
| Token | Hex | Role |
|---|---|---|
| `--br-milk` | `#F7F4EC` | Ground |
| `--br-concrete` | `#C9C6BD` | Secondary ground (raw concrete) |
| `--br-concrete-dark` | `#8E8B83` | Borders on concrete |
| `--br-ink` | `#171918` | Text, 2px borders |
| `--br-link` | `#1E7A68` | Links — underlined, unstyled otherwise |
| `--br-visited` | `#0B3B32` | Visited links |
| `--br-brick` | `#9B4A2E` | Exposed-brick accent (Doshi/Kahn, harmonised with earth `#8C6A43`) |
| `--br-alert` | `#B3202A` | DEMO / pending flags (ROOT 14 red) |
| Variant blocks | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | Solid colour blocks only, no gradients |

### Typography
- Mono everything: **IBM Plex Mono** 400/700 for body, labels and data.
- Display: **Archivo** Expanded/Black (variable width 125, weight 900) set huge and tight, uppercase — slab-like concrete mass.
- Fallback "web default" voice: **Times New Roman / Tinos** (metric-compatible, Apache licence) for quoted raw records — the classic brutalist gesture.
- No Fraunces. The brand serif is deliberately absent.
- Sizes: 14px body (mono), 11px labels, display at 14–22vw.

### Texture
Concrete photo texture (shot on site at the DESIGO® plant/hub if possible — a real wall) at 10% behind headers; otherwise flat. Visible 2px borders on everything. Raw screenshot-like images with visible file names.

### Imagery
Unretouched documentary photos: hands, barrels, test cards, chiller panel — shown as-is with filename and timestamp captions (`IMG_0417.jpg · 05:42 · hub`). Bottle render shown on concrete with no shadow, or as a raw photo.

### Iconography
None. ASCII arrows (`->`, `[x]`, `[+]`) and text labels.

### Grid
Visible table grid: 2px ink borders; cells sized by content; a fixed 8-column "spreadsheet" layout at desktop, 1-column stack on mobile. No outer margin decoration — content touches a 2px frame at 16px.

## 4. Motion & interaction language

- Almost none, on purpose: state changes are instant (0ms) or step-based (`steps(4)`), no easing curves.
- Scroll: native, no smooth scroll, no pinning (an exception for the bottle chapter: one pinned section using `position: sticky` only).
- Text appears as if logged: lines append one at a time (typewriter, 18ms per character, max 1.2s per line) only in The Raw Record — skippable with any key.
- Cursor: system default arrow; **links**: system pointer; **bottle**: `cursor: grab` / `grabbing`; **pending claims**: `cursor: help` with a native `title` tooltip plus an accessible popover.
- Hover: links invert (ink background, milk text); buttons are bordered boxes `[ RESERVE ]` that invert on hover.
- Page transitions: none — hard cuts.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands on concrete, unfloating, inside a 2px bordered cell labelled with its raw data: `OBJECT: BOTTLE / MATERIAL: GLASS (RETURNABLE) / VARIANT: V1+ / ID FORMAT: DSG-BTL-000001-3 (SAMPLE)`. No sheen, no tilt — it is an object being documented.

**Rotation.** With 360 frames: a raw frame counter `FRAME 018/072 · 85°` updates as you drag; frame stepping is visible (no interpolation). A row of 72 tiny frame thumbnails acts as a contact sheet and scrubber. Without frames: a single static render with the line `360 SEQUENCE: NOT YET SUPPLIED` — honest and on-style.

**Variant worlds** — four solid colour blocks, each a full-width bordered row:
- **MASTER 26** — `#1F5C45` block, "26" in Archivo Black 22vw, milk text; descriptors as a raw list with `[PENDING]` tags.
- **ROOT 14** — `#B3202A` block, "14".
- **BASE 3** — `#E89A1C` block with ink text, "3".
- **ESSENTIAL** — `#CDB89A` block with ink text, "E".
Prices show `PRICE: [PENDING APPROVAL]` until approved.

## 6. Page-by-page treatment

### Home (if built in full)
| # | Chapter | Brutalist treatment |
|---|---|---|
| 01 | Hero | "MILK FROM THE SOURCE." in Archivo Black across the full width; bottle in a documented cell; `[ EXPLORE THE SOURCE ]` `[ TRACE THE JOURNEY ]`. |
| 02 | Bottle becomes the story | Six words as a raw index table — word · one-line explanation · status. Bottle sticky in the right column. |
| 03 | Cow to bottle | Seven stations as a numbered log `01 COW -> 02 FARM -> …` with documentary photos. |
| 04 | Where it begins | Uncropped farm photos with file captions. |
| 05 | Breeds | Breed table with `[PENDING]` status column. |
| 06 | Traceability | The trace path as an ASCII-style diagram in mono, nodes as links to anchors. `ILLUSTRATIVE — NOT LIVE DATA` in red block. |
| 07 | Quality | The 16 parameters as a raw checklist `[ ] pH [ ] Urea …`; values `PENDING LAB CONFIRMATION`. |
| 08 | Four milks | Four colour-block rows. |
| 09 | Milk as material | A raw full-bleed video loop of milk being poured (real footage only), no ribbon simulation. |
| 10 | Heritage | Doshi/Kahn-inspired: brick-red block, one sentence in Tinos. |
| 11 | Technology | The seven verbs as a command list: `ORIGIN > TRACE > TEST > CHILL > PROCESS > FILL > DELIVER`. |
| 12 | Ghee | Grade table with source milk column. |
| 13 | Trace your milk | **Native territory.** Input field, results printed as a raw log. |
| 14 | Story | Dated list of verified milestones. |
| 15 | Final CTA | "KNOW WHERE YOUR MILK COMES FROM." Bordered buttons. |

### The Raw Record (recommended single page)
`/trace/record` — the demo bottle `DSG-BTL-000001-3 (SAMPLE)` presented as a field log: header block (`RECORD TYPE: DEMO JOURNEY · NOT LIVE DATA`), then eight log entries (farm, collection, batch, chiller share, barrel, plant, bottle, delivery) each with time, place class, and the public explanation; documentary photo per entry; footer link back to the polished site: `-> Back to DESIGO® TRACE`. Brutalism here says: *this is the data, unpolished*.

### Inner pages (if built in full)
- **/milk** — four colour rows; **/milk/[variant]** — frame counter viewer + spec list.
- **/ghee** — grade table + raw process photos. **/origin** — photo log.
- **/trace** — log diagram + demo. **/technology** — command list.
- **/about** — dated list. **/reserve** — bordered form, native inputs.

## 7. Component variants

`RawCell` (2px bordered block) · `DocumentedBottle` · `FrameCounterViewer` + `ContactSheetScrubber` · `RawLog` (append-line output) · `AsciiTraceDiagram` · `ChecklistQuality` · `ColourBlockVariant` ×4 · `BracketButton` `[ LABEL ]` · `PendingTag` `[PENDING]` · `DemoBanner` (red block) · `AssetSlot` (`ASSET MISSING: farm-landscape.jpg`).

## 8. 20-phase build plan

(Phases 3–17 assume a full-site build; for the recommended single page, phases 1–2, 13–14, 16 (/trace only), 18–20 apply — ≈ 18 days.)

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Raw system | Mono/Archivo/Tinos, borders, tokens | Body ≥ 14px; contrast ≥ 7:1 | — | 1 |
| 2 | Shell | Bordered frame, text nav | Text-link nav, bracket buttons, native cursors | Works with CSS disabled (semantic order) | Wordmark | 2 |
| 3 | Hero | Documented bottle | RawCell with data labels | Labels use sample/pending wording | Renders | 1 |
| 4 | Story sequence | Index table + sticky bottle | Sticky column | Readable without JS | — | 2 |
| 5 | Cow → bottle | Numbered log | 7 log entries + photos | Photos captioned with real metadata only | B4, B7, B8 | 2 |
| 6 | Origin | Photo log | Uncropped images | Image weight ≤ 250 KB each | B1, B2 | 1 |
| 7 | Breeds | Status table | Table | Pending visible | B3, approval | 1 |
| 8 | Trace map | ASCII diagram | Mono diagram + anchors | Screen-reader list equivalent | Trace wording | 2 |
| 9 | Quality | Checklist | 16-row checklist | No invented values | Lab approval | 1 |
| 10 | Four worlds + 360 | Colour rows + frame counter | Viewer with contact-sheet scrubber | Frame counter accurate; thumbnails lazy | **360 sequences (A)** | 4 |
| 11 | Heritage | Brick block | Statement | — | Heritage line | 1 |
| 12 | Technology | Command list | Verbs | Public vocabulary | — | 1 |
| 13 | Ghee | Grade table | Table | Mapping correct | Prices approval | 1 |
| 14 | Trace demo | Raw log output | Typewriter log, skip on key | Skippable; `isDemo` banner fixed | — | 3 |
| 15 | /milk pages | Rows + variant pages | Pages | Usable without JS | A | 3 |
| 16 | /origin, /trace (+ /trace/record), /technology | Inner pages + Raw Record | Field-log page | Raw Record clearly labelled DEMO and links back | B6–B9 | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | Native form | Native validation + aria | Milestones | 2 |
| 18 | Mobile pass | Stack | 1-column cells | No overflow at 360px | — | 2 |
| 19 | A11y + reduced motion | Robust | Skip typewriter globally under reduced motion | axe clean; keyboard complete | — | 1 |
| 20 | Perf, QA, handover | Ship | Docs | LCP ≤ 1.5s; JS ≤ 60 KB | Approvals | 2 |

Total ≈ 37 days full site (brutalism is cheap to build — but that is not a reason to choose it).

## 9. Assets needed from DESIGO®

1. Raw documentary photos with original metadata (time, place class) — hub, chiller, barrels, test card, filling line.
2. A real concrete/brick surface photo from the DESIGO® hub or plant (optional texture).
3. Real milk-pour footage (for chapter 09 if built).
4. 360 sequences (A) for the frame-counter viewer.
5. Approved trace wording; confirmation of which raw fields may be shown publicly (no farmer personal data, no exact GPS).

## 10. Performance, accessibility and mobile

- Performance: the lightest style of all — mostly HTML, one mono font, no animation libraries.
- Accessibility: good by default (native controls, semantic order), but brutalist sites often fail on giant display type overflowing and on links distinguished only by colour — here links are always underlined, display type uses `clamp()` and `overflow-wrap`.
- Reduced motion: typewriter disabled; logs render complete.
- Mobile: tables become label/value stacks; display type max 22vw; bordered buttons full-width, 48px tall.
- Privacy: raw does not mean exposed — no exact coordinates, farmer names or phone numbers, even in demo.

## 11. Risks and premium guardrails

Risks: reading as cheap, broken, hostile or "unfinished" to food buyers; confusing raw demo data with live data; an aesthetic that dates quickly.

**Premium guardrails**
1. Limit it to one purposeful page; frame it explicitly ("The raw record — what traceability looks like before design").
2. Raw, not careless: perfect alignment, consistent 2px borders, deliberate spacing — brutalism done with precision reads as confident.
3. Indian béton brut reference (Doshi, Kahn's IIM) — warm brick and concrete, not cold Western concrete.
4. The product is never mistreated: the bottle photo stays clean and well lit.
5. DEMO and PENDING flags are louder than anything else on the page.
6. No glitch effects, no "broken" layout jokes, no intentionally ugly type for a food brand.
7. Copy stays factual and calm — brutal layout, gentle words.
8. Always offer the way back to the polished site.
9. No raw data that compromises privacy or operations (RTCOM internals stay internal — public vocabulary only).
10. Review with the client's customers before shipping: if it feels unfriendly, keep it as a press/investor page.
