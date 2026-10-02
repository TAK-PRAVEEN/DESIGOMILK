# 12 — Bento Grid · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 4 / 5** · Best used for: /milk (the four-variant overview and comparison), /technology overview, the Quality summary (07), the "Why DESIGO®" overview after the hero, and mobile summaries — anywhere many facts must be seen at once.

---

## 1. Style essence

A bento grid arranges content into a single composition of rectangular tiles of different sizes — like a Japanese bento box — each tile holding one idea: an image, a number, a feature, a mini-interaction. Tiles share consistent gaps and radii, and the size of each tile signals its importance. It is the dominant feature-overview pattern of 2023–2026 product launches.

Origins: Japanese bento and *shokado* boxes; Windows Phone Metro tiles (2010); Apple's WWDC and iPhone/Mac feature summaries (2022 →); Linear and Vercel product pages.

Three reference points:
1. **Apple iPhone and MacBook launch pages / keynote summary slides** — one big hero tile plus supporting feature tiles, product photography inside tiles.
2. **Shokado bento boxes** — the Japanese original: balanced compartments, each with one delicacy, beautifully proportioned.
3. **Indian *thali*** — the local cousin: one plate, many katoris, each a distinct taste — an apt metaphor for four milks and ghee in one family.

## 2. Why it fits DESIGO®

The brief explicitly references Apple product launches, and bento is their summary language. DESIGO® has many distinct facts — four variants, V-codes, glass, QR identity, 16 screen parameters, seven public verbs, six breeds, three ghee grades — that a bento grid can show in one glance, each fact in its own tile with its own micro-interaction. It is especially strong on mobile, where tiles stack into a clean, scannable feed.

Where it fights: bento is a summary pattern, not a narrative one; a whole cinematic home page in tiles would lose the story arc (bottle → origin → journey → you) and the "one object, lots of space" drama. Card-heavy layouts also contradict design system v0.1 ("No card-heavy UI") — so tiles must be used as *composed sections*, not as the default container.

**Fit score: 4 / 5.** Excellent as a section pattern (overview, comparison, technology, quality summary, mobile) inside the cinematic minimal site; not recommended as the whole home page.

## 3. Art direction

### Palette
| Token | Hex | Role |
|---|---|---|
| `--bn-page` | `#F7F4EC` | Page ground (milk) |
| `--bn-tile` | `#EFE9DC` | Default tile (milk-2) |
| `--bn-tile-paper` | `#EDE4D0` | Heritage tiles |
| `--bn-tile-forest` | `#0B3B32` | Dark tiles (trace, tech) |
| `--bn-tile-charcoal` | `#171918` | Demo/console tiles |
| `--bn-tile-gold` | `#E9DCC0` | Ghee tiles (gold `#C8A96B` as accent) |
| `--bn-ink` | `#1E211F` | Text on light tiles |
| `--bn-milk-text` | `#F7F4EC` | Text on dark tiles |
| `--bn-green` | `#1E7A68` | Links, active tile ring |
| `--signal` | `#7FE0B8` | Live/tech accents |
| Variant tiles | MASTER 26 `#D9E8DF` / `#1F5C45` · ROOT 14 `#F3D9D6` / `#B3202A` · BASE 3 `#F8E4C2` / `#E89A1C` · ESSENTIAL `#F4EDE2` / `#CDB89A` | Light fill + deep accent per variant |

Rule: no more than 2 dark tiles and 1 variant-coloured tile family per bento section — the grid must read as one calm box.

### Typography
- Display numerals and tile titles: **Inter Tight** 600 (tiles need a crisp grotesk), numerals at 6–14rem in big tiles.
- Editorial accent: **Fraunces** 300 italic for one line per section (e.g. "*Know where your milk comes from.*").
- Body/caption: **Inter Tight** 400, 15–17px.
- Data: **JetBrains Mono** for IDs and readouts.
- Tile hierarchy: label (uppercase 11px +0.18em) → title (24–40px) → one supporting sentence. Never more than 30 words per tile.

### Texture
Flat tiles; optional 1.5% grain on paper tiles; product renders and photos are the only "texture".

### Imagery
Real photos full-bleed inside tiles (object-fit cover, focal point set per image); bottle cut-outs breaking slightly out of their tile top edge (bleed by 8–12%) for a premium, three-dimensional feel.

### Iconography
1.5px line icons, 24px, only as tile labels' companions.

### Grid
Desktop: 12-column CSS grid, `grid-auto-rows: 120px`, gap 16px (xl: 20px), outer margin 5vw, tile radius 28px (bento needs rounded corners; this is the one style where the editorial radius-0 rule is replaced — documented exception), inner padding 28–36px. Standard tile sizes: XL 6×4, L 6×3 / 4×4, M 4×2 / 3×3, S 3×2 / 2×2. Tablet: 6 columns. Mobile: 2 columns, auto rows 160px, gap 12px; XL tiles become full-width 2×3.

## 4. Motion & interaction language

- Section entrance: tiles rise 24px and fade in with a diagonal stagger (top-left → bottom-right, 50ms per tile, 600ms each, `cubic-bezier(.16,1,.3,1)`).
- Each tile can hold **one** micro-interaction, triggered by hover/focus/tap: a counter (only approved values), a mini 360 drag, a looping 3s video, a toggle, a hairline diagram that draws.
- Hover: tile scales 1.015 and its content parallaxes 6px toward the pointer; other tiles dim 4% (subtle focus); radius stays fixed (no "jelly" effects).
- Click/tap: a tile can expand into a full-viewport panel via shared-element transition (FLIP / View Transitions, 700ms `cubic-bezier(.65,0,.35,1)`), then collapse back.
- Scroll: no pinning inside bento sections; the cinematic chapters around them keep their pinned scroll.
- Cursor: 10px ink dot; **tile hover** → dot becomes a 44px ring with "OPEN" or the micro-interaction verb ("DRAG", "PLAY", "TRACE"); **bottle tile** → `DRAG` / `TILT`; touch: off.

## 5. The hero bottle and the four variant worlds

**Presence.** The cinematic hero (chapter 01) stays minimal: one bottle, one line. Directly after it, a **"Why DESIGO®" bento** introduces the brand in one box — XL tile: the bottle on milk (breaking out of the tile top), with "Traceable milk from indigenous Indian cows."; L tile: forest trace path animation; M tiles: "Returnable glass", "Every bottle carries its own identity" (QR line drawing), "Screened at source on a 16-point paper test", "Six indigenous breeds in rotation" (pending marker until approved).

**Rotation.** In a bottle tile, dragging horizontally rotates the 360 sequence (frames loaded only when the tile enters the viewport); expanding the tile opens the full Bottle360Viewer. Without frames: tile shows the single render with ±15° tilt and a "360° view coming soon" caption.

**Variant worlds** — a **four-milk bento** (the signature section of /milk and home chapter 08's summary):
- **MASTER 26** — XL tile (6×4) in `#D9E8DF`, bottle large, numeral "26" in `#1F5C45` at 14rem, line and V-code.
- **ROOT 14** — L tile (6×3) `#F3D9D6`, numeral "14" in `#B3202A`.
- **BASE 3** — M tile (3×3) `#F8E4C2`, numeral "3" in `#5A3304` (dark amber for contrast).
- **ESSENTIAL** — M tile (3×3) `#F4EDE2`, "E" in `#4D4130`.
- Supporting S tiles: "Price — pending confirmation" (only approved prices shown), "Glass bottle · size pending", "Compare all four →".
Tile sizes express range (from fullest to simplest) without implying claims. Each variant tile expands into its full-screen world (the cinematic chapter 08 treatment) on click. On home, chapter 08 can keep the full-screen worlds and end with this bento as a summary.

## 6. Page-by-page treatment

### Home
| # | Chapter | Bento treatment |
|---|---|---|
| 01 | Hero | Cinematic minimal (not bento). |
| 01b | Why DESIGO® (new summary) | 7-tile bento described above. |
| 02 | Bottle becomes the story | Cinematic pinned orbit (not bento) — bento would break the story. |
| 03 | Cow to bottle | Horizontal journey stays; on mobile, it becomes a 7-tile vertical bento with one station per tile. |
| 04 | Where it begins | Photo bento: one XL farm landscape, two portrait tiles, one text tile; real photos only, AssetSlots where missing. |
| 05 | Breeds | 6 equal tiles (3×3 each) — portrait, name, region; pending marker on each. |
| 06 | Traceability | Cinematic forest map (pinned); ends with a 4-tile summary: ORIGIN · TRACE · TEST · CHILL (public descriptions). |
| 07 | Quality | **Strong use**: XL tile "16" with parameter list; M tiles for temperature, fat/SNF, adulteration screen as hairline diagrams with "— pending lab confirmation"; S tile with test-card photo. |
| 08 | Four milks | Full-screen worlds, then the four-milk bento summary. |
| 09 | Milk as material | Cinematic interlude (not bento). |
| 10 | Heritage | Cinematic paper statement (not bento). |
| 11 | Technology | **Strong use**: seven-verb bento — DELIVER and TRACE as large tiles, others medium; each tile with a micro-diagram; dark forest tiles with signal accents. |
| 12 | Ghee | 3 + 1 bento: three grade tiles (jar render, source milk, size pending) + one wide bilona process tile. |
| 13 | Trace your milk | One XL charcoal console tile; result steps fill adjacent small tiles one by one; DEMO tile always first. |
| 14 | Story | Timeline as a horizontal row of milestone tiles; verified only. |
| 15 | Final CTA | Cinematic minimal; footer as a quiet 4-tile bento (Reserve, Contact (pending), Story, Legal) — no supporters tile until written evidence is on file (KB Q34). |

### Inner pages
- **/milk** — four-milk bento + a comparison bento below (rows of tiles: grazing, feed approach (pending), cold-chain service, price (pending)).
- **/milk/[variant]** — cinematic viewer at top, then a variant bento of facts (each descriptor its own tile, pending markers).
- **/ghee** — grade bento + process tiles.
- **/origin** — photo bento + breed tiles.
- **/trace** — cinematic map + node tiles + console tile.
- **/technology** — the seven-verb bento as the page's core.
- **/about** — milestone tiles (verified only); no supporter tiles until written evidence is on file (KB Q34).
- **/reserve** — selection bento: tap a variant tile, a size tile, a frequency tile; a summary tile updates live.

## 7. Component variants

`BentoGrid` (template areas per breakpoint) · `BentoTile` (light/dark/paper/variant) · `ExpandableTile` (shared-element to full screen) · `BottleTile` (mini 360) · `NumeralTile` · `PhotoTile` (focal point) · `DiagramTile` (hairline draw) · `CounterTile` (approved values only) · `VerbTile` · `ConsoleTile` · `SelectableTile` (reserve) · `ClaimText` · `AssetSlot` (tile-shaped, dashed, names the missing asset).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Tile system | Tile tokens, radius exception, type hierarchy | Every tile type passes contrast; ≤ 30 words per tile rule documented | Brand colours | 2 |
| 2 | Grid & shell | Bento engine + shell | `BentoGrid` with named areas for 12/6/2 cols, nav, cursor | Layouts defined per breakpoint, no auto-chaos; no CLS | Wordmark | 4 |
| 3 | Hero + Why bento | Minimal hero + summary bento | 7-tile section | Bento loads under 1 MB; LCP from hero, not bento | Renders, B1 | 3 |
| 4 | Story sequence | Keep cinematic orbit | Orbit chapter | Bento not used; reduced motion = list | — | 3 |
| 5 | Cow → bottle | Horizontal + mobile bento | Track + mobile tile stack | Mobile tiles in journey order | B4 | 3 |
| 6 | Origin | Photo bento | Focal-point photo tiles | Faces never cropped | B1, B2 | 2 |
| 7 | Breeds | 6-tile breeds | Breed tiles | Pending visible | B3, approval | 2 |
| 8 | Trace map | Map + summary tiles | Map, 4 tiles | DEMO label; keyboard | Trace wording | 3 |
| 9 | Quality | Quality bento | Numeral, diagram, photo tiles | No invented values | Lab approval, B6 | 3 |
| 10 | Four worlds + 360 | Worlds + four-milk bento | 4 worlds, bento, BottleTiles, expansion | Tile → world expansion ≤ 700ms; frames lazy per tile | **360 sequences (A)** | 6 |
| 11 | Heritage | Cinematic statement | Paper chapter | — | Heritage line | 1 |
| 12 | Technology | Verb bento | 7 VerbTiles with diagrams | Public vocabulary; tiles keyboard-expandable | — | 3 |
| 13 | Ghee | Ghee bento | 3 + 1 tiles | Mapping correct | Jar cutouts, prices | 2 |
| 14 | Trace demo | Console tile + steps | ConsoleTile, step tiles | Demo tile always visible; aria-live updates | — | 3 |
| 15 | /milk pages | Overview + comparison + variant bento | Pages | Comparison readable on 2-col mobile | A, pricing, pack sizes | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Bentos per page | ≤ 1.8 MB first load | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining + selection bento | SelectableTiles, live summary | Tiles are radio groups semantically | Frequencies, milestones | 4 |
| 18 | Mobile pass | 2-col bento | Mobile templates per section | Thumb-friendly; tile reorder follows reading order | — | 3 |
| 19 | A11y + reduced motion | Semantic tiles | Headings per tile, focus rings, no hover-only content | axe clean; every micro-interaction has a keyboard path | — | 2 |
| 20 | Perf, QA, handover | Ship | Lazy micro-interactions, docs | LCP ≤ 2.0s, INP ≤ 150ms, CLS ≤ 0.03 | Approvals | 3 |

Total ≈ 60 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A) — mini-360 tiles are the bento's showpiece.
2. Many medium-quality real photos rather than one hero image: farm, cows, hands, test card, chiller, filling, doorstep (B1–B9), shot with room for tile cropping (subject centred, generous margins).
3. Approved facts in short form (≤ 30 words each) — bento depends on crisp, verified one-liners.
4. Prices, pack sizes, frequencies for comparison and reserve tiles (or approval to show "pending").
5. Ghee jar cut-outs.

## 10. Performance, accessibility and mobile

- Performance: tiles invite many simultaneous media — enforce one autoplaying element per bento section, lazy-load tile media with IntersectionObserver, use poster images for videos, load 360 frames only on interaction.
- Accessibility: each tile is a landmark-free `<article>` with its own heading; expandable tiles are buttons with `aria-expanded`; DOM order equals reading order (CSS grid areas must not scramble it); no information only on hover.
- Reduced motion: no stagger, no parallax, expansion becomes an instant navigation.
- Mobile: bento's best medium — 2-column templates designed per section, not auto-flowed; XL tiles span full width; tap expands.

## 11. Risks and premium guardrails

Risks: template-like "SaaS feature grid"; card-heavy UI flattening the cinematic story; too many competing micro-animations; empty tiles from missing assets.

**Premium guardrails**
1. Bento summarises; cinematic chapters tell the story — alternate the two.
2. One clear hero tile per section; size equals importance.
3. Product breaks the frame: bottles bleed out of their tiles for depth.
4. Calm palette: milk tiles with at most one dark and one variant family per section.
5. ≤ 30 words per tile; one idea per tile; no feature-list bullet soup.
6. One micro-interaction per tile, one autoplay per section.
7. Never fill tiles with stock imagery, and never use AI imagery as evidence (farms, cows, people, tests) — use a designed AssetSlot or a numeral tile instead. AI plates (§12.7) are allowed only as abstract tile backdrops and textures.
8. Numbers only when approved; pending tiles say so plainly.
9. Consistent radius (28px), gap (16px) and padding across the site — precision is what makes bento look Apple-grade.
10. Copy in confident, plain declaratives: "Every bottle carries its own identity." — no superlatives or health claims.

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: supporter tiles removed from the footer bento and /about (supporters stay excluded until written evidence is on file, KB Q34); guardrail 7 banned AI imagery outright — it now allows AI plates only as abstract tile backdrops/textures, never as evidence. Fonts already OFL. Added tile tokens, all states, cursor map, motion tokens and 10 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--bn-green`): links, primary CTA, active tile ring | 4.7:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on green | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest tile (`--bn-tile-forest`): trace and technology tiles (max 2 dark tiles per section) | 11.3:1 on bg |
| Accent | `--c-accent` | `#7FE0B8` | signal mint (`--signal`): live/tech accents and focus ring on dark tiles | 1.4:1 on bg; decorative on milk; 7.9:1 on forest |
| Background | `--c-bg` | `#F7F4EC` | page ground (`--bn-page`, milk) | text 14.8:1 |
| Surface | `--c-surface` | `#EFE9DC` | default tile (`--bn-tile`, milk-2); paper tile `#EDE4D0`; ghee tile `#E9DCC0`; console tile `#171918` | text on surface 13.4:1 |
| Text | `--c-text` | `#1E211F` | ink on light tiles (`--bn-ink`); milk `#F7F4EC` on dark tiles | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#55595A` | tile labels and captions | 6.4:1 on bg; 5.9:1 on the default tile |
| Line | `--c-line` | `rgba(30,33,31,0.10)` | tile hairline / dividers inside tiles; tiles themselves are separated by the 16 px gap, not borders | decorative |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#7A5A12` / `#171918` | ok = verified tick tile (approved values only); pending = 'pending confirmation' text + dotted underline in dark amber, numerals show `—`; DEMO = charcoal console tile with a milk 'DEMO · not live data' label, always the first result tile | ok 7.1:1 · pending 5.8:1 · demo 16.1:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | XL tile (6×4) in light, '26' at 14rem in base, bottle breaking out of the tile top |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | L tile (6×3) in light, '14' in base |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | M tile (3×3) in light, '3' in deep `#5A3304` for contrast |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | M tile (3×3) in light, 'E' in deep `#4D4130` |

Dark-chapter inversion: dark tiles (forest `#0B3B32`, console `#171918`) swap `--c-text` → `#F7F4EC`, `--c-text-muted` → `#B9C7C1`, `--c-line` → `rgba(247,244,236,.14)`, focus ring → signal `#7FE0B8`; the page ground never inverts — bento sections stay one calm milk box with at most two dark tiles.

Section rule: at most 2 dark tiles and 1 variant-coloured tile family per bento section.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Inter Tight (variable) | `@fontsource-variable/inter-tight` · Google Fonts | 600 (numerals 600, tabular) | numerals clamp(5rem, 12vw, 14rem); hero line clamp(3rem, 7vw, 7rem) | 0.9 | -0.04em | Sentence / numerals |
| Headline H1–H2 | Inter Tight | `@fontsource-variable/inter-tight` | 600 | tile title clamp(1.5rem, 2.4vw, 2.5rem) · section H2 clamp(2rem, 3.6vw, 3.5rem) | 1.1 | -0.02em | Sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 | clamp(0.9375rem, 0.9rem + 0.15vw, 1.0625rem) (15–17 px); ≤ 30 words per tile | 1.5 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | 0.6875rem (11 px) | 1.3 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 400 / 500 | 0.875rem | 1.45 | 0 | As data |
| Devanagari (optional) | Noto Sans Devanagari (variable) | `@fontsource-variable/noto-sans-devanagari` | 400 / 600 | matches body/title | 1.5 | 0 | — |

Licence: Inter Tight, Fraunces (editorial accent, 300 italic, one line per section, `@fontsource-variable/fraunces`), JetBrains Mono and Noto Sans Devanagari are SIL OFL 1.1. Pairing: a crisp grotesk reads at a glance inside tiles; one Fraunces italic line per section keeps the brand voice.

### 12.3 Layout & surfaces
- **Grid:** desktop 12-column CSS grid, `grid-auto-rows: 120px`, gap 16 px (xl 20 px), outer margin 5vw, max-width 1600 px; tablet 6 columns; mobile 2 columns, auto rows 160 px, gap 12 px. Named template areas per breakpoint (never auto-flowed); DOM order = reading order.
- **Tile sizes:** XL 6×4 · L 6×3 / 4×4 · M 4×2 / 3×3 · S 3×2 / 2×2; mobile XL = full-width 2×3.
- **Spacing scale:** 4 · 8 · 12 · 16 · 20 · 28 · 36 · 48 · 64 · 96 px; tile padding 28–36 px (20 px mobile).
- **Radius:** `sm 12px` (chips, inputs) · `md 20px` (inner media) · `lg 28px` (tiles — the documented exception to radius 0).
- **Borders:** none on tiles; 1 px hairline inside tiles; active tile 2 px green ring.
- **Elevation:** flat tiles; product cut-outs bleed 8–12% out of the tile top with the design-system contact shadow; expanded tile `0 30px 80px rgba(30,33,31,.18)`.
- **Texture/overlay:** flat; optional 1.5% grain on paper tiles only.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — green `#1E7A68` rectangle, radius 12 px, milk Inter Tight 600 label + arrow; 48 px tall, padding 0 24 px · hover fill `#0F4A3F`, arrow travels 6 px (240 ms) · focus-visible 2 px ink ring + 2 px milk offset (signal on dark tiles) · active fill `#0B3B32` · disabled `#DCD6C9` fill, ink 50% · loading arrow becomes a 16 px progress ring (static under reduced motion).
- **Secondary button** — milk-2 `#EFE9DC` fill with 1 px `rgba(30,33,31,.16)` stroke, ink label + arrow; on dark tiles milk outline; same states as primary.
- **Text / arrow link** — design-system underlined label + arrow; 'Compare all four →' style tile links; hover arrow travels 8 px, underline green; focus-visible outline.
- **Icon button (incl. menu)** — 44 px rounded-square (radius 12) milk-2 button with 1.5 px line icon; menu = two lines; hover fill darkens 4%; focus-visible ring; active 8%; disabled 40%; `aria-label`, `aria-expanded`; tile expand/close buttons use the same.
- **Navigation bar** — 64 px milk bar, no border until scroll (then 1 px hairline); logo left, Inter Tight 500 links, Reserve primary right. Mobile: logo + menu; menu opens as a full-screen 2-column bento of large link tiles (Milk, Ghee, Origin, Trace, Technology, About, Reserve). Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — default 10 px ink dot · hover (tile): 44 px ring with the tile's verb · ROTATE (bottle tile): ring + `ROTATE` (drag rotates the mini 360) · EXPLORE (photo/journey tile): `EXPLORE` · ENTER (expandable tile): `OPEN` / `ENTER` · VIEW (video/photo): `PLAY` / `VIEW` · TRACE (trace/console tile): `TRACE`; milk on dark tiles. Touch: off; tap expands, verbs shown as tile labels.
- **Card / panel / info block** — `BentoTile` light/dark/paper/variant: radius 28, padding 28–36, label → title → one sentence (≤ 30 words), one micro-interaction max · hover scale 1.015, content parallax 6 px toward the pointer, other tiles dim 4% · focus-visible 2 px green ring (signal on dark) · active scale 1.0 · disabled n/a · loading tile skeleton (milk-2 blocks) with no shimmer under reduced motion; expand = shared-element transition to full viewport (View Transitions, 700 ms).
- **Badge / tag** — radius 999, 24 px, Inter Tight 600 0.68rem uppercase: neutral milk-2; variant light fill + deep text; **pending verification** = dotted underline on the claim + 'pending confirmation' in `#7A5A12` + popover; **DEMO · not live data** = charcoal chip with milk text, placed top-left in the console tile.
- **Input + form field** — inside the XL charcoal console tile: label above, 56 px input on `#1F2321`, radius 12, 1 px `rgba(247,244,236,.24)` edge, JetBrains Mono, placeholder `DSG-BTL-000001-3 (sample format)` · hover edge .4 · focus-visible 2 px signal ring · invalid `#E36B6B` edge + message · disabled 40% · loading the result steps fill adjacent small tiles one by one, DEMO tile first.
- **Divider / ornament** — the 16 px gap is the divider; inside tiles a 1 px hairline. No ornament.
- **Section header** — above each bento: chapter number in mono + eyebrow label, H2 Inter Tight 600, optional Fraunces italic line; left-aligned to the grid.
- **Product info block** — variant tile: label (V-code, mono) → name Inter Tight 600 → numeral → line; S tiles beside it: 'Glass bottle · size pending' (`1 L glass · 900 g`, pending underline), 'Price — pending confirmation', descriptors one per tile with pending markers; expands into the full variant world.
- **Bottle stage** — `BottleTile`: the bottle cut-out breaks out of the tile top by 8–12% with contact shadow on the tile floor; horizontal drag rotates the 360 sequence (frames load when the tile enters the viewport); expand opens the full Bottle360Viewer; without frames ±15° tilt + '360° view coming soon'.
- **Trace node / timeline step** — in trace tiles: 12 px node on a forest tile, 1.5 px signal line; states upcoming (outline) · active (filled signal + label) · visited (milk) · hover label · focus-visible signal ring; on /trace each node also has its own small tile (ORIGIN · TRACE · TEST · CHILL …) in public vocabulary.

### 12.5 Iconography & illustration
- **Icons:** 1.5 px line icons, 24 px grid, round caps, used only as companions to tile labels.
- **Illustration:** hairline diagram tiles that draw on hover (SVG); AI plates below only as abstract tile backdrops/textures — never in place of farm, cow, people or test evidence (use an AssetSlot tile instead).
- **Photo treatment:** real photos full-bleed inside tiles (`object-fit: cover`, focal point per image), neutral-warm grade; one autoplaying video per section with a poster image.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | tile entrance |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | tile expand/collapse (shared element) |
| `--dur-micro` | `240ms` | hover scale, arrow |
| `--dur-reveal` | `600ms` | tile rise 24 px + fade |
| `--dur-scene` | `700ms` | expand to full viewport |
| `--stagger-tile` | `50ms (diagonal TL → BR)` | section entrance |
| `--hover-scale` | `1.015 + 6px content parallax` | tile hover; others dim 4% |

No pinning inside bento sections (the cinematic chapters around them keep pinned scroll). One micro-interaction per tile, one autoplay per section. Reduced motion: no stagger, no parallax, expansion becomes instant navigation, logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Tile backdrops only — abstract light, colour and texture; the bottle and jars are real cut-outs placed in code.

**Tail prompt (append to every prompt):** *Apple-keynote-grade abstract studio backdrop, soft seamless light, calm premium minimalism, milk white #F7F4EC, milk-2 #EFE9DC, forest #0B3B32, brand green #1E7A68 and signal mint #7FE0B8 accents, subtle grain, generous empty space, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/bento-grid/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero-tile.png` | 2400×1600 (3:2, XL tile) | no | Seamless milk-white studio sweep with a soft pool of morning light falling from the upper left onto the floor, empty centre, gentle gradient | objects, props, shadows of objects | 01b Why DESIGO® XL tile, 15 Final CTA |
| 2 | `hero-tile-portrait.png` | 1200×1800 (2:3, mobile XL) | no | Vertical milk-white studio sweep with a soft pool of light on the floor at 65 percent height, empty centre | objects | 01b Why DESIGO® mobile |
| 3 | `tiles/master-26.png` | 2400×1600 + 1200×1800 | no | Seamless studio sweep in pale green #D9E8DF with soft top light and a faint deeper green #1F5C45 shadow gradient at the floor, empty | leaves, objects | Four-milk bento, /milk |
| 4 | `tiles/root-14.png` | 2400×1600 + 1200×1800 | no | Seamless studio sweep in pale rose #F3D9D6 with soft top light and a faint red #B3202A shadow gradient at the floor, empty | objects | Four-milk bento, /milk |
| 5 | `tiles/base-3.png` | 2400×1600 + 1200×1800 | no | Seamless studio sweep in pale amber #F8E4C2 with warm top light and a faint amber #E89A1C glow at the floor, empty | objects, sun | Four-milk bento, /milk |
| 6 | `tiles/essential.png` | 2400×1600 + 1200×1800 | no | Seamless studio sweep in ivory #F4EDE2 with soft skylight and a faint beige #CDB89A shadow at the floor, empty | objects | Four-milk bento, /milk |
| 7 | `tiles/trace-path.png` | 2400×1600 | no | Deep forest green #0B3B32 field with one thin luminous mint #7FE0B8 line winding from left to right through eight small soft points of light, very minimal | map labels, roads, city | Why DESIGO® L tile, 06 summary, /trace |
| 8 | `tiles/technology-grid.png` | 2400×1600 | no | Dark forest #07211C tile background with a faint mint perspective grid receding to a horizon and soft depth haze | neon pink, text | 11 Technology seven-verb bento |
| 9 | `tiles/ghee-light.png` | 2400×1600 | no | Warm gold #E9DCC0 studio sweep with honey-coloured light and a soft glow at the floor, empty | jars, objects | 12 Ghee grade bento |
| 10 | `textures/paper-tile.png` | 2048×2048, seamless | no | Seamless tileable fine archival paper texture in warm ivory #EDE4D0, very subtle fibres, flat lighting | stains, folds | Heritage / paper tiles (1.5% grain) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/12_bento-grid.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/bento-grid/
- [ ] Each bento layout is defined per breakpoint with named areas (no auto-flow); DOM order = reading order; no CLS
- [ ] ≤ 30 words per tile, one micro-interaction per tile, one autoplay per section; missing media shows an AssetSlot tile, never AI evidence
