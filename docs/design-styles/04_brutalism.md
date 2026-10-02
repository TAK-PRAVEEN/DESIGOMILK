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
| `--br-link` | `#1E7A68` | Links on milk — underlined, unstyled otherwise (on concrete, links are ink: green measures 3.0:1 there) |
| `--br-visited` | `#0B3B32` | Visited links |
| `--br-brick` | `#9B4A2E` | Exposed-brick accent (Doshi/Kahn, harmonised with earth `#8C6A43`) |
| `--br-alert` | `#B3202A` | DEMO / pending flags (ROOT 14 red) |
| Variant blocks | `#1F5C45` · `#B3202A` · `#E89A1C` · `#CDB89A` | Solid colour blocks only, no gradients |

### Typography
- Mono everything: **IBM Plex Mono** 400/700 for body, labels and data.
- Display: **Archivo** Expanded/Black (variable width 125, weight 900) set huge and tight, uppercase — slab-like concrete mass.
- Fallback "web default" voice: **Tinos** (Apache 2.0, metric-compatible with Times New Roman, which is commercial and therefore not used) for quoted raw records — the classic brutalist gesture.
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

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: 'Times New Roman / Tinos' → Tinos only (Times New Roman is a commercial Monotype font; Tinos is the metric-compatible Apache-2.0 alternative); links on concrete `#C9C6BD` measured 3.0:1, so links on concrete are now ink and underlined. Added full states (still instant/stepped), cursor map, image prompts limited to raw textures and colour blocks (10), and JSON tokens.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#171918` | ink (`--br-ink`): bracket buttons invert to ink fill, 2 px borders, display type | 16.1:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on inverted ink | 16.1:1 on primary |
| Secondary | `--c-secondary` | `#1E7A68` | link green (`--br-link`): underlined links on milk; visited `#0B3B32` | 4.7:1 on bg; 3.0:1 on concrete → links on concrete are ink |
| Accent | `--c-accent` | `#9B4A2E` | exposed brick (`--br-brick`): Heritage block, one accent per page, focus ring | 5.6:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk ground (`--br-milk`) | text 16.1:1 |
| Surface | `--c-surface` | `#C9C6BD` | raw concrete (`--br-concrete`): secondary ground, header cells | text on surface 10.3:1 |
| Text | `--c-text` | `#171918` | ink | 16.1:1 on bg |
| Muted text | `--c-text-muted` | `#4F4D48` | labels, file captions (new token `--br-muted`) | 7.7:1 on bg; 4.9:1 on concrete |
| Line | `--c-line` | `#171918` | 2 px ink borders on every cell; `--br-concrete-dark #8E8B83` only for borders inside concrete cells | 16.1:1 on bg |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#B3202A` / `#B3202A` | ok = `[OK]` tag in green (verified only); pending = `[PENDING]` in `--br-alert` red, value replaced by `PENDING APPROVAL`; DEMO = solid red block, milk text `ILLUSTRATIVE — NOT LIVE DATA` | ok 7.1:1 · pending 6.1:1 · demo 6.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | full-width solid block, '26' in Archivo 900 wdth 125 at 22vw, milk text (7.1:1) |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | solid block, '14', milk text (6.1:1) |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | solid block with ink text, '3' |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | solid block with ink text, 'E' |

Dark-chapter inversion: the style has no dark chapters; the only inversion is hover/active: ink fill with milk text. The Heritage block uses brick `#9B4A2E` with milk text (5.6:1). The Raw Record keeps milk ground throughout.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Archivo (variable) | `@fontsource-variable/archivo` · Google Fonts | wght 900, wdth 125 | clamp(3rem, 14vw, 22vw) with `overflow-wrap:anywhere` | 0.88 | -0.03em | UPPERCASE |
| Headline H1–H2 | Archivo (variable) | `@fontsource-variable/archivo` | H1 800 wdth 112 / H2 700 wdth 100 | H1 clamp(2.2rem, 6vw, 5rem) · H2 clamp(1.5rem, 3vw, 2.5rem) | 1.0 / 1.1 | -0.01em | UPPERCASE |
| Body | IBM Plex Mono | `@fontsource/ibm-plex-mono` · Google Fonts | 400 / 700 | 0.875rem (14 px) → 1rem ≥ 1024 px | 1.6 | 0 | Sentence |
| Label / UI | IBM Plex Mono | `@fontsource/ibm-plex-mono` | 700 | 0.6875rem (11 px) | 1.3 | +0.06em | UPPERCASE |
| Data / mono | IBM Plex Mono (records) + Tinos (quoted raw records) | `@fontsource/ibm-plex-mono` · `@fontsource/tinos` | 400 / 700 · Tinos 400 | 0.875rem | 1.5 | 0 | As data |
| Devanagari (optional) | Noto Sans Devanagari (variable) | `@fontsource-variable/noto-sans-devanagari` | 400 / 700 | matches body | 1.6 | 0 | — |

Licence: Archivo and IBM Plex Mono (SIL OFL 1.1), Tinos (Apache 2.0), Noto Sans Devanagari (OFL). Times New Roman is commercial and is not used; Tinos is metric-compatible, so the 'web default' gesture is kept. Pairing: concrete-mass display over a single mono voice — the record speaks plainly.

### 12.3 Layout & surfaces
- **Grid:** visible 8-column "spreadsheet" table at desktop (cells sized by content, 2 px ink borders), 1-column stack on mobile; content sits in a 2 px frame inset 16 px from the viewport; max-width none.
- **Spacing scale:** 4 · 8 · 16 · 24 · 32 · 48 px — cells use 16 px padding (12 px mobile).
- **Radius:** 0 everywhere, no exceptions (cursor is the system cursor).
- **Borders:** 2 px `#171918` on every cell; 2 px `#8E8B83` inside concrete cells.
- **Elevation:** none. No shadows, also none under the bottle (documented object on concrete).
- **Texture/overlay:** optional real concrete photo (from the DESIGO® hub/plant) at 10% behind header cells; otherwise flat.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — bracket box `[ RESERVE ]`: 2 px ink border, milk fill, Plex Mono 700 uppercase, 48 px tall, padding 0 16 px · hover instant invert (ink fill, milk text) · focus-visible 3 px brick `#9B4A2E` outline, 2 px offset · active invert + label shifts 1 px down · disabled dashed 2 px border, text `#4F4D48`, `[ RESERVE — UNAVAILABLE ]` · loading label becomes `[ WORKING… ]` with a `steps(4)` dot counter. No easing anywhere (0 ms or steps).
- **Secondary button** — same bracket box with 2 px concrete-dark border on concrete fill · hover invert to ink · focus-visible brick outline · active as primary · disabled dashed · loading `[ … ]`.
- **Text / arrow link** — unstyled underlined link with ASCII arrow `-> EXPLORE THE SOURCE`; green on milk, ink on concrete; visited `#0B3B32`; hover instant invert (ink background, milk text); focus-visible brick outline; underline never removed.
- **Icon button (incl. menu)** — no icons: text buttons `[MENU]`, `[X]`, `[+]`, `[<-]` in the bracket-box style, ≥ 44×44 px; states as primary; `aria-expanded` on `[MENU]`.
- **Navigation bar** — a single bordered table row: logo cell (left), then text-link cells `MILK · GHEE · ORIGIN · TRACE · ABOUT`, then `[ RESERVE ]`; 56 px, milk fill, 2 px borders; current page cell inverted. Mobile: logo cell + `[MENU]` cell; menu is a plain bordered list that pushes content down (no overlay). Works with CSS disabled. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — system cursors only: default arrow · hover pointer · ROTATE (bottle) `grab`/`grabbing` + label cell `ROTATE` beside the viewer · EXPLORE `pointer` with ASCII label `-> EXPLORE` revealed on the link · ENTER `pointer` + `-> ENTER` · VIEW `zoom-in` · TRACE `pointer` + `-> TRACE`; pending claims use `help`. Touch: native; labels are visible text, not cursor-dependent.
- **Card / panel / info block** — `RawCell`: 2 px bordered block, 16 px padding, header row in concrete with mono label `OBJECT:` etc.; no hover lift · hover (if link) invert header row · focus-visible brick outline · active invert · disabled n/a · loading the cell prints `LOADING…` then appends lines (typewriter 18 ms/char, skippable).
- **Badge / tag** — bracket tags in mono uppercase: `[OK]` green, `[PENDING]` red `#B3202A` with the qualified value dotted-underlined and `cursor: help` + accessible popover, `[DEMO · NOT LIVE DATA]` as a solid red block with milk text — always louder than anything else on the page.
- **Input + form field** — native `<input>` with 2 px ink border, 48 px, Plex Mono, label `BOTTLE ID:` left in the same row (stacks on mobile), placeholder `DSG-BTL-000001-3 (SAMPLE)` · hover none · focus-visible 3 px brick outline · invalid `[ERROR] Format: DSG-BTL-000000-0` in red below · disabled concrete fill · loading `[ WORKING… ]`; results append as a raw log with time · place class · public explanation.
- **Divider / ornament** — 2 px ink rule; ASCII rule `------------------------` in mono for log sections. No ornament.
- **Section header** — bordered row: `## 06` in mono + `TRACEABILITY` in Archivo 800 uppercase + right-aligned status cell (`ILLUSTRATIVE — NOT LIVE DATA` when demo).
- **Product info block** — raw list in a bordered cell: `CODE: DESIGO® V1+` · `NAME: MASTER 26` · `SIZE: 1 L GLASS · 900 G [PENDING]` · `PRICE: [PENDING APPROVAL]` · `DESCRIPTORS:` one per line with `[PENDING]`.
- **Bottle stage** — unfloating: the bottle stands on concrete inside a 2 px bordered cell with its raw data header (`OBJECT: BOTTLE / MATERIAL: GLASS (RETURNABLE) / VARIANT: V1+ / ID FORMAT: DSG-BTL-000001-3 (SAMPLE)`); no shadow, no sheen, no tilt; 360 = visible frame stepping + counter `FRAME 018/072 · 85°` + 72-thumbnail contact sheet; without frames `360 SEQUENCE: NOT YET SUPPLIED`.
- **Trace node / timeline step** — log entry row: `05:42 | COLLECTION | place class | public explanation` with a documentary photo cell; ASCII diagram `FARM -> COLLECTION -> BATCH -> …` where each node is an anchor link; states: default · hover invert · focus-visible brick outline · current `>` marker prefix; DEMO header row on top.

### 12.5 Iconography & illustration
- **Icons:** none — ASCII arrows and bracket labels (`->`, `[x]`, `[+]`).
- **Illustration:** none; AI images are restricted to raw material textures and solid colour blocks (below). Documentary photos are real only.
- **Photo treatment:** unretouched, uncropped, shown with filename + time + place-class caption (`IMG_0417.jpg · 05:42 · hub`); the bottle photo stays clean and well lit.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `steps(1, end)` | state changes are instant |
| `--ease-inout` | `steps(4, end)` | the only 'transition' style: stepped |
| `--dur-micro` | `0ms` | hover/active invert |
| `--dur-reveal` | `18ms per character (≤ 1.2s per line)` | Raw Record typewriter log only |
| `--dur-scene` | `0ms` | page transitions: hard cuts |
| `--frame-step` | `1 frame per 5° of drag` | 360 frame counter, no interpolation |

Native scroll, no smooth scroll, no pinning except one `position: sticky` bottle column. Logo loop is the single continuous animation on the page (brand rule). Reduced motion: typewriter off, logs render complete, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Brutalism shows real documentary photos only; generated images are limited to material textures and colour-block plates that read as material, never as places or events.

**Tail prompt (append to every prompt):** *raw Indian béton brut material study, honest exposed concrete and brick in the spirit of Doshi and Kahn, flat documentary light, milk white #F7F4EC, concrete grey #C9C6BD, ink #171918 and brick #9B4A2E, no styling, no gloss, precise, calm, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/brutalism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Frontal photograph of a raw board-marked concrete wall in soft overcast light, faint formwork lines, a lower band of exposed red brick, large empty flat area in the centre | graffiti, cracks with damage, people, signage | 01 Hero, The Raw Record header |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical frontal photograph of a raw board-marked concrete wall with a brick plinth course at the bottom, flat light, empty centre | graffiti, signage | 01 Hero mobile |
| 3 | `blocks/master-26.png` | 3200×1200 (8:3) | no | Flat frontal photo of pigmented lime plaster wall in deep green #1F5C45, matte, faint trowel marks, even light | leaves, gradients | 08 Four milks row · /milk/master-26 |
| 4 | `blocks/root-14.png` | 3200×1200 (8:3) | no | Flat frontal photo of pigmented lime plaster wall in red #B3202A, matte, faint trowel marks, even light | blood, gradients | 08 Four milks row · /milk/root-14 |
| 5 | `blocks/base-3.png` | 3200×1200 (8:3) | no | Flat frontal photo of pigmented lime plaster wall in amber #E89A1C, matte, faint trowel marks, even light | sun, gradients | 08 Four milks row · /milk/base-3 |
| 6 | `blocks/essential.png` | 3200×1200 (8:3) | no | Flat frontal photo of pigmented lime plaster wall in ivory beige #CDB89A, matte, faint trowel marks, even light | ornaments, gradients | 08 Four milks row · /milk/essential |
| 7 | `textures/concrete.png` | 2048×2048, seamless | no | Seamless tileable raw concrete surface, fine aggregate and tiny air pockets, flat top-down scan lighting | cracks, stains, seams | RawCell header background (10%) |
| 8 | `textures/brick.png` | 2048×2048, seamless | no | Seamless tileable exposed handmade red brick wall with recessed lime mortar joints, warm brick #9B4A2E, flat frontal light | graffiti, moss, damage | 10 Heritage block |
| 9 | `trace/log-paper.png` | 2400×3200 | no | Top-down photo of a blank continuous-feed dot-matrix printer paper sheet with tractor-feed holes and faint pale green bands, flat light | printed characters, text, numbers | 13 Trace your milk / The Raw Record backdrop |
| 10 | `journey/raw-flow.png` | 4000×1200, transparent | yes (real alpha) | Eight empty square boxes drawn with 2 px black lines connected left to right by straight black arrows, flat, isolated on transparent background | labels, icons, shading | 06 Traceability ASCII diagram companion |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/04_brutalism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/brutalism/
- [ ] The Raw Record works with CSS disabled (semantic order) and shows DEMO/PENDING louder than anything else
- [ ] No farmer names, phone numbers or exact GPS anywhere, including demo data
