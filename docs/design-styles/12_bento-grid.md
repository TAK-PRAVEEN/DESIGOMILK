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
| 15 | Final CTA | Cinematic minimal; footer as a quiet 4-tile bento (Reserve, Contact (pending), Supporters (pending), Legal). |

### Inner pages
- **/milk** — four-milk bento + a comparison bento below (rows of tiles: grazing, feed approach (pending), cold-chain service, price (pending)).
- **/milk/[variant]** — cinematic viewer at top, then a variant bento of facts (each descriptor its own tile, pending markers).
- **/ghee** — grade bento + process tiles.
- **/origin** — photo bento + breed tiles.
- **/trace** — cinematic map + node tiles + console tile.
- **/technology** — the seven-verb bento as the page's core.
- **/about** — milestone tiles, supporter tiles (pending).
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
7. Never fill tiles with stock or AI imagery — use a designed AssetSlot or a numeral tile instead.
8. Numbers only when approved; pending tiles say so plainly.
9. Consistent radius (28px), gap (16px) and padding across the site — precision is what makes bento look Apple-grade.
10. Copy in confident, plain declaratives: "Every bottle carries its own identity." — no superlatives or health claims.
