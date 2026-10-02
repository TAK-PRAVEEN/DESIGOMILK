# 39 · Asian Store → Indian Kirana & Dairy Shop — DESIGO® build plan

**Priority style (client request, 2026-10-03)**

Status: design-style plan v0.1 · 2026-10-03 · documents only.
Shared rules: IA `01`, tokens `02`, motion `03`, assets `04`, copy only from `desigo.ts`. Pending claims stay marked; DESIGO® always with ®.

---

## 1. Style essence

The "Asian store" trend borrows from East Asian convenience stores and grocery packaging: dense shelf grids, bold price stickers, hand-lettered shop signs, stacked product facings, rubber stamps, receipt typography and an orderly abundance. It turns shopping into a graphic system.

We **adapt it to its Indian equivalent**: the **kirana** (neighbourhood grocery) and the **doodh dairy shop**, the counter where milk is measured, the steel milk cans, the glass-front fridge, the hand-painted shop board, the **khata** (credit ledger), cardboard price tags with a marker price, rubber stamps, the carbon-copy bill book and the bundle of brown-paper bags. The dairy counter is where most Indian families have always bought milk, so it is the right stage for a brand that wants to be trusted locally.

Our version is a **premium kirana**: everything is clean, ordered and painted with care, closer to a design-led concept store built on kirana vocabulary than to a cluttered real shop.

Reference points:
1. **Hand-painted Indian shop signage** (the sign-painter tradition documented by the *Hand Painted Type* project and Kolkata/Mumbai sign artists): flat colour, drop-shadowed letters, painted borders.
2. **The neighbourhood dairy booth and milk-can counter**: stainless steel, a measuring ladle, a slate price board.
3. **Japanese konbini graphic design and contemporary "grocery" brand identities** (e.g. Sweetgreen-era packaging, Muji price cards): the source trend's discipline of grid, label and stamp.

## 2. Fit for DESIGO® — score 3 / 5

**Why it fits.** DESIGO® delivers to homes in its own city, uses returnable glass (the old milk-bottle and doodhwala world), and sells four clearly priced variants. A shop language makes the range easy to compare and makes buying feel local and honest. Stamps and tags are a natural vehicle for honest status labels ("DEMO", "pending", "returnable"). It is also distinctive: no premium dairy site in India looks like this.

**Where it fights.** (1) "Kirana" can read as cheap or mass-market, against the luxury brief. (2) Price tags put prices in the foreground, and all prices are still *pending*. (3) Shop clutter fights the "one hero bottle" principle. (4) Imitating a real dairy co-operative's booth or a real shop's signage would be misleading.

**Recommendation.** Not the lead whole-site style. Use it for **/milk** (the shelf), **/reserve** (the counter), the **bottle-return** explainer, and a **neighbourhood launch campaign**. It works well as a "shop mode" layer on a Minimalism base.

## 3. Art direction

### Palette ("painted board and steel")
| Token | Hex | Role |
|---|---|---|
| `--ks-milk` | `#F7F4EC` | Page ground, "shop wall" |
| `--ks-board` | `#0B3B32` | Painted shop-board green (brand forest) |
| `--ks-board-2` | `#1E7A68` | Board border and second sign colour |
| `--ks-sign-cream` | `#F3E7C9` | Painted lettering on green boards |
| `--ks-tag` | `#E9DCC0` | Cardboard tag |
| `--ks-tag-edge` | `#C9B48C` | Tag string and torn edge |
| `--ks-steel` | `#C9CDCB` | Stainless steel shelves and cans |
| `--ks-steel-deep` | `#7F8784` | Steel shadow |
| `--ks-stamp` | `#9E2B25` | Rubber-stamp red (display only, ≥ 24px) |
| `--ks-stamp-blue` | `#2C3E73` | Ledger stamp blue |
| `--ks-gold` | `#C8A96B` | Board pin-stripe, ghee shelf |
| `--ks-ink` | `#171918` | Text |
| `--ks-ink-muted` | `#5C5A52` | Muted text (6.3:1 on milk, 5.1:1 on tag) |

Variant cap colours appear on shelf-edge strips: `#1F5C45`, `#B3202A`, `#E89A1C`, `#CDB89A`.

### Typography
- Shop signage (display): **Yatra One** (OFL, Latin + Devanagari, brush sign-painter feel) for bilingual boards; for Latin-only boards, **Alfa Slab One** (OFL) with a painted drop shadow (offset 3px 3px, `--ks-board-2`).
- Shelf labels and UI: **Anek Latin** / **Anek Devanagari** (OFL, condensed widths) 500–700, uppercase for labels.
- Text: **Inter Tight** 400, 16px, line-height 1.65.
- Bill and ledger: **Courier Prime** (OFL) for the reservation summary and the khata; **JetBrains Mono** for bottle IDs.
- Handwritten price tags: **Kalam** (OFL, Latin + Devanagari) or, preferably, real marker lettering scanned from a sign painter.

Every Devanagari word on boards (for example दूध, घी, काँच की बोतल वापस करें, "please return the glass bottle") is proofread by a native reader.

### Texture and imagery
- Painted boards: flat enamel colour with a faint brush texture (one scanned tile), a pin-stripe border in gold, and slightly rounded corners.
- Cardboard tags: real scanned tags with a punched hole and string.
- Steel: brushed stainless photographed (shelves, the measuring ladle, the steel milk can). Steel is the honest material of dairy.
- Stamps: real rubber stamps made for the project (DEMO · RETURNABLE GLASS · PENDING · a date stamp), inked and scanned, never fonts pretending to be stamps.
- Product shots: the existing transparent renders standing on a steel or wooden shelf with a real contact shadow.
- Real shop photography (DESIGO®'s own delivery hub or a partner counter) only with consent and accurate captions.

### Iconography
Sign-painter pictograms: a filled shape with a cream outline (bottle, can, scooter, return arrow, cow head in profile, respectful and non-cartoon), on small enamel badges.

### Grid
A **shelf grid**: 12 columns, with horizontal "shelves" every 40vh on desktop. Each shelf has a 6px steel edge strip and a 28px label rail. Products always stand on a shelf line. Boards span columns 1–12 as headers. Mobile: one product per shelf, label rail below.

## 4. Motion & interaction language
- **Tempo.** Brisk and tactile, like a shopkeeper's hands. Micro 180ms, reveals 450ms `cubic-bezier(.16,1,.3,1)`, scenes 900ms `cubic-bezier(.65,0,.35,1)`.
- **Shutter transition.** The rolling shop shutter: a ribbed steel panel rolls down over the old chapter and up over the new one (900ms total, with a 60ms hold at the bottom). Used only between major chapters.
- **Stamps.** Status stamps arrive with a "thunk": scale 1.15 → 1 and opacity 0 → .92 in 160ms, with a 2° random rotation and ink texture. Each stamp appears once per session.
- **Tags.** Price tags swing on their string (rotate −6° → 4° → 0, 700ms, damped, no overshoot past 4°) when the shelf enters view.
- **Cursor.** Default: a 14px charcoal dot. Over products: a small cardboard tag follows the cursor with "VIEW" in Anek. Over the bottle in the viewer: "drag · turn". Over stamps and tags: the dot becomes a 24px ring. Over the "Reserve" button: a small steel ladle icon.
- **Hover.** Shelf products lift 6px and their contact shadow widens; the label rail highlights in the variant's cap colour. Buttons: brand underline-and-arrow, set on a painted board chip.
- **Reduced motion.** No shutter (cross-fade), no swing, stamps simply appear.

### The bottle
In the hero, one bottle stands alone on a **single steel shelf** under a painted board, lit like a shop window at 6 a.m. Idle float is replaced by **standing still** with a subtle reflection in the steel (a 12% opacity vertical flip, blurred). Pointer tilt ±4°, since a shelf object barely moves. Click and drag lifts it off the shelf (translateY −24px, shadow grows) and turns it. With 360 frames, drag spins it; with the single render, it turns ±20° with a sheen sweep. Put it back by releasing (450ms settle).

## 5. Variant worlds — four shelves

| Variant | Shelf edge | Board | Tag | Stamp | Detail |
|---|---|---|---|---|---|
| MASTER 26 (V1+) | `#1F5C45` | Forest board with gold pin-stripe, "MASTER 26" in Alfa Slab | ₹94 handwritten, **"PRICE PENDING"** stamp beside | "V1+" in blue ledger stamp | A small dish of dried herbs (photo), herb count marked *pending* |
| ROOT 14 (V1) | `#B3202A` | Cream board, red lettering | ₹76 + "PRICE PENDING" | "V1" | A lump of red earth in a steel bowl |
| BASE 3 (V2) | `#E89A1C` | Amber board, dark brown lettering `#5A3304` | ₹69 + "PRICE PENDING" | "V2" | Wheat stalks; herb count "to be confirmed" |
| ESSENTIAL (V3) | `#CDB89A` | Plain milk board, charcoal lettering | ₹64 + "PRICE PENDING" | "V3" | Nothing else on the shelf |

Prices render only with the pending stamp, and are hidden in production until approved. Descriptors appear on the label rail as small enamel badges, each with a dotted underline (*pending*).

## 6. Page-by-page treatment

1. **Hero.** A forest painted board across the top: "MILK FROM THE SOURCE." in Yatra One cream lettering. Below, a single steel shelf with one bottle. Sub-line on a small cardboard card: "Traceable milk from indigenous Indian cows." CTAs as painted chips.
2. **The bottle becomes the story.** The shopkeeper's **khata ledger** opens: six ruled lines, one per word (ORIGIN, BREED, FEED, FARM, QUALITY, TRACE), each written in, with a one-line explanation, while the bottle stays pinned on the right.
3. **From cow to bottle.** A horizontal "delivery route" painted along a wall: seven painted station signs (cow, farm, milk, test, chill, plant, bottle) with a milk line painted between them.
4. **Where it begins.** The register calms down: real farm photographs framed like the photos pinned behind a shop counter (a clean steel frame, not curling snapshots).
5. **Breeds.** A wall of six enamel name-plates with breed plates above. Each plate carries a small "PENDING APPROVAL" stamp.
6. **Traceability.** A delivery-boy's route board: a painted map with eight stops. The pulse is a small scooter icon moving 1.5s per hop. The DEMO stamp is large and red.
7. **Quality.** The shop's **test board**: a slate-grey board with 16 painted rows (the parameters) and a column reading "— pending lab confirmation". It looks like a public notice, which is the honest feel we want.
8. **The four milks.** §5: the shelf scrolls horizontally, one variant per 120vh, each bottle lifting forward as it reaches the centre.
9. **Milk as material.** A steel ladle pours milk into a steel measure (film or still), and the canvas ribbon falls behind the shelf.
10. **Heritage.** Old-shop memory: a sign-painter's board being painted (real film of a commissioned artist), with approved heritage copy.
11. **Technology.** The "back room": a clean steel wall with seven small enamel signs (ORIGIN · TRACE · TEST · CHILL · PROCESS · FILL · DELIVER) and the statement "Tradition is the source. Technology protects the journey."
12. **Ghee.** The top shelf with a gold edge. Three ghee jars with tags (prices *pending*), each tag tied to its source milk.
13. **Trace your milk.** A counter with a bill book: type the bottle ID into a carbon-copy form; the journey prints line by line like a bill, stamped "DEMO · ILLUSTRATIVE". It is never styled as a real tax invoice.
14. **Story.** A shop-wall calendar timeline; only the verified 2019 milestone in production.
15. **Final CTA.** The shutter rolls up at dawn onto a single bottle on its shelf. "Know where your milk comes from." The painted board footer.

### Inner pages
- **/milk**: the full shelf, the style's best page: four bottles side by side, label rails, a comparison table styled as a shop price list (prices pending).
- **/milk/[variant]**: that variant's shelf hero, the viewer lifting the bottle off the shelf, facts on a label rail, "Trace this bottle".
- **/ghee**: the gold top shelf, bilona process as five painted signs.
- **/origin**: photo essay with steel frames.
- **/trace**: the route board full screen.
- **/technology**: the back-room steel wall.
- **/about**: the founder at the counter (a real photo), a calm letter-like page.
- **/reserve**: the counter. Choose variant and quantity like ordering at a dairy booth; the summary appears as an "order slip" (clearly labelled "order summary, not an invoice"). The glass-return rule is a painted sign: "Return the glass, we refill the loop."

## 7. Component variants
`PaintedBoard` · `Shelf` (steel edge, label rail) · `ShelfBottle` (lift and turn) · `PriceTag` (swing, pending stamp) · `RubberStamp` (scanned stamp set) · `EnamelBadge` · `KhataLedger` (chapter 02) · `ShutterTransition` · `RouteBoard` (TraceMap) · `TestNoticeBoard` (Quality) · `BillBook` (Trace-your-milk) · `OrderSlip` (reserve summary) · `TagCursor` · `AssetSlot` as an empty shelf space with a tag naming the missing asset.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Style tokens & type | Board, steel, stamp palette; bilingual type | Tokens, specimen, Devanagari word list | Hindi proofread; body ≥ 7:1 | Hindi proofreader | 3 |
| 2 | Shell (nav, footer, cursor) | Shelf grid, painted-board nav, tag cursor | Shell components | Board nav readable on all pages | Scanned enamel texture | 3 |
| 3 | Hero + bottle | One bottle on one shelf | Hero, `ShelfBottle` | Reflection subtle; lift-and-turn works with mouse, touch, keyboard | Bottle renders | 4 |
| 4 | Bottle → story | Khata ledger | `KhataLedger` | Ledger lines are real text | Copy | 2 |
| 5 | Cow → bottle | Painted station signs | Chapter 03 | Mobile vertical; signs illustrated, not photos faked | Sign-painter artwork | 4 |
| 6 | Origin / farm | Steel-framed photos | Chapter 04 | Real photos only | Farm photos | 2 |
| 7 | Breeds | Enamel name-plates | Chapter 05 | Pending stamps on all | D1–D6 | 2 |
| 8 | Traceability map | Route board | `RouteBoard` | DEMO stamp; keyboard nodes | `traceNodes` | 3 |
| 9 | Quality | Test notice board | `TestNoticeBoard` | 16 rows; values pending | Lab approval | 2 |
| 10 | Four worlds + 360 | Shelf scroll, lifting bottles | Chapter 08 | Prices hidden in production until approved | A, herb/earth props photos | 5 |
| 11 | Heritage | Sign-painter film | Chapter 10 | Artist credited and paid | Commissioned artist | 2 |
| 12 | Technology | Back-room wall | Chapter 11 | Public vocabulary only | none | 2 |
| 13 | Ghee | Gold top shelf | Chapter 12 | Grade-to-milk mapping correct | Jar renders | 3 |
| 14 | Trace-your-milk demo | Bill-book reveal | `BillBook` | Never resembles a tax invoice; DEMO stamped | demoProvider | 3 |
| 15 | /milk, /milk/[variant] | The shelf pages | 5 routes | Comparison readable as a table for screen readers | A | 5 |
| 16 | /origin, /trace, /technology | Inner pages | 3 routes | Consistent with shelf grid | Photos | 3 |
| 17 | /about, /ghee, /reserve | Counter pages | 3 routes | Order slip labelled "not an invoice"; form accessible | Reserve rules | 4 |
| 18 | Mobile pass | One product per shelf | Mobile layouts | Thumb-reachable reserve; no horizontal scroll except shelf carousel with snap | none | 3 |
| 19 | A11y + reduced motion | Static shop | No shutter or swing | Stamps have text equivalents; tags readable | none | 2 |
| 20 | Perf, QA, handover | Ship | Reports, handover | Stamp/texture set ≤ 300 KB; LCP < 2.5s | all | 3 |

Total ≈ 60 days.

## 9. Assets needed from DESIGO®
- 360 sequences (A) and the vector wordmark (C).
- **A commissioned sign painter** (Jodhpur or Jaipur, *location pending*) to paint the main boards and the seven station signs, filmed for chapter 10. Credit and fair payment.
- A custom **rubber-stamp set**: DEMO · PENDING · RETURNABLE GLASS · V1+/V1/V2/V3 · date stamp.
- Photographs of real steel cans, ladles and shelves, and of DESIGO®'s own delivery or counter point if one exists (with consent).
- Approved prices before any price is shown publicly.

### Images to generate (illustration only; save under `web/public/desigo/styles/asian-store/`)
Append the house-style tail. No text, no letters, no logos, no real brand packaging, no bottles.

| # | File | Size | Prompt |
|---|---|---|---|
| KS1 | `hero.png` | 3200×2000 + 1400×2400 | Clean minimalist Indian dairy shop interior at early morning, a single empty brushed stainless-steel shelf at centre, milk-white wall, a blank deep forest-green painted signboard with a thin gold border at the top, soft window light, no products, no text |
| KS2 | `steel-shelf.png` (transparent) | 3000×600 | Front view of one long brushed stainless-steel shelf with a rounded edge, soft top light, transparent background |
| KS3 | `price-tag.png` (transparent) | 800×1000 | Blank brown cardboard price tag with a punched hole and cotton string, slightly worn edges, top-down, transparent background, no writing |
| KS4 | `enamel-board.png` | 2400×800 | Blank hand-painted enamel signboard in deep green #0B3B32 with a thin gold pin-stripe border and faint brush marks, front view, no letters |
| KS5 | `steel-can.png` (transparent) | 1600×2000 | Traditional stainless-steel milk can with a lid, clean, studio light, transparent background |
| KS6 | `shutter.png` | 2400×2400, seamless vertically | Ribbed rolling metal shop shutter, painted milk white, flat front light, seamless vertical repeat |
| KS7 | `khata-ledger.png` | 3000×2000 | Open blank Indian account ledger book with red ruled lines and cloth binding, top-down on a wooden counter, no writing |
| KS8 | `counter-wood.png` | 2400×2400, seamless | Seamless worn teak shop-counter wood surface, warm, flat light |

## 10. Performance, accessibility and mobile
- Stamps, tags and boards are a small sprite set (WebP with alpha, ≤ 300 KB total). Lettering on boards is **live text** in Yatra One / Alfa Slab, never baked into images.
- The shelf carousel uses CSS scroll-snap on mobile with visible "1 of 4" status and buttons.
- Stamps are decorative overlays, but their *meaning* ("DEMO", "pending") is always present as text for screen readers.
- Comparison on /milk is a real `<table>`.
- Reduced motion: no shutter, no swing.
- Mobile: board header shrinks to a single line, one bottle per shelf at 48vh, the reserve counter as a bottom sheet.

## 11. Risks, guardrails and premium

**Premium guardrails**
1. **A premium kirana, not a cluttered one.** At most one bottle per shelf section in hero moments, generous wall space, and boards painted by a real artist.
2. **No imitation of real brands or co-operatives** (no booth colours, logos or signage of any existing dairy).
3. **Prices only with approval.** Until then: hidden in production, "PRICE PENDING" in previews.
4. **Bills and slips are clearly not invoices** ("order summary"), and the trace "bill" is stamped DEMO.
5. Stamps are reserved for honest status labels. Never stamp claims ("PURE", "No. 1", "ORGANIC", "A2").
6. Steel and glass stay spotless. No grime, no rust, no dented cans: this is a food shop.
7. Devanagari lettering is proofread and painted, never machine-faked.

**Risks**: a cheap or mass-market read, premature prices and cultural cliché. Mitigation: a commissioned sign painter, forest-and-gold boards, strict whitespace, and the style limited to shop moments.

**Best used for:** /milk as a shelf, /reserve as a dairy counter, the bottle-return loop, and a neighbourhood launch campaign.

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: direction, palette and type were complete. Missing: muted, pending and DEMO tokens, radius/shadow scale, component states, a portrait hero, four shelf-world prompts, a trace prompt and negatives. All added. Image folder renamed `styles/kirana/` → `styles/asian-store/` to match the slug. Fonts (Yatra One, Alfa Slab One, Anek, Courier Prime, Kalam) confirmed OFL. Prices already render only with a PRICE PENDING stamp: kept.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | --c-primary | `#0B3B32` | Painted board green: boards, primary chip button, footer | 11.3:1 on bg; painted shop-board green |
| Primary ink | --c-on-primary | `#F3E7C9` | Sign-cream lettering on boards | 10.1:1 on primary |
| Secondary | --c-secondary | `#1E7A68` | Board border and second sign colour; links hover; focus ring | 4.7:1 on bg |
| Accent | --c-accent | `#9E2B25` | Rubber-stamp red: DEMO stamp, display numerals ≥ 24 px | 6.8:1 on bg; rubber-stamp red: stamps and display ≥ 24 px only |
| Background | --c-bg | `#F7F4EC` | Shop wall milk (`--ks-milk`) | — |
| Surface | --c-surface | `#E9DCC0` | Cardboard tag (`--ks-tag`): cards, secondary button, label rail | text on surface 13.0:1 |
| Text | --c-text | `#171918` | Ink (`--ks-ink`) | 16.1:1 on bg |
| Muted text | --c-text-muted | `#5C5A52` | Captions, label-rail details (new token `--ks-ink-muted`) | 6.3:1 on bg, 5.1:1 on surface |
| Line | --c-line | `#C9B48C` | Tag edge and string (`--ks-tag-edge`), decorative | decorative (non-text) |
| Success / Pending / Demo | --c-ok / --c-pending / --c-demo | `#1F5C45` / `#2C3E73` / `#9E2B25` | Verified enamel badge / ledger-blue PENDING stamp / red DEMO stamp | 7.1 / 9.3 / 6.8 :1 on `#F7F4EC` |

Focus ring: `--c-focus` `#1E7A68` (4.7:1 on bg), 2 px solid, 3 px offset.

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Base | Deep | Light | Treatment in this style |
|---|---|---|---|---|
| MASTER 26 (V1+, green cap) | `#1F5C45` | `#0A2A20` | `#D9E8DF` | Shelf-edge strip `#1F5C45`; forest board with gold pin-stripe; herb dish photo (count *pending*) |
| ROOT 14 (V1, red cap) | `#B3202A` | `#4A0A0F` | `#F3D9D6` | Shelf edge `#B3202A`; cream board with red lettering; red-earth bowl photo |
| BASE 3 (V2, amber cap) | `#E89A1C` | `#5A3304` | `#F8E4C2` | Shelf edge `#E89A1C`; amber board with `#5A3304` lettering; wheat stalks photo, herb count *to be confirmed* |
| ESSENTIAL (V3, ivory cap) | `#CDB89A` | `#4D4130` | `#F4EDE2` | Shelf edge `#CDB89A`; plain milk board, charcoal lettering; nothing else on the shelf |

Dark-chapter inversion: painted-board chapters (nav, section headers, footer, Technology back-room signs) use forest `#0B3B32` as ground with sign-cream text `#F3E7C9` (10.1:1), muted steel `#C9CDCB`, gold pin-stripe lines `#C8A96B`; stamps stay red/blue on cream tags only; the logo loop renders white on the board.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Yatra One | `@fontsource/yatra-one` (Google Fonts) | 400 (bilingual boards) | clamp(2.75rem, 1.4rem + 5.6vw, 7rem) | 1.05 | +0.01em | Title case / Devanagari |
| Headline H1–H2 | Alfa Slab One | `@fontsource/alfa-slab-one` (Google Fonts) | 400 + painted drop shadow 3px 3px `#1E7A68` on boards | H1 clamp(2.2rem, 1.4rem + 3vw, 4.25rem) · H2 clamp(1.6rem, 1.2rem + 1.6vw, 2.5rem) | 1.05 | +0.01em | UPPERCASE on boards |
| Body | Inter Tight | `@fontsource-variable/inter-tight` (Google Fonts) | 400 / 500 | 1rem (16 px) | 1.65 | 0 | Sentence |
| Label / UI | Anek Latin | `@fontsource-variable/anek-latin` (Google Fonts) | 600 / 700, wdth 75–100 | 0.8125rem (13 px) | 1.3 | +0.08em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` (Google Fonts) | 400 (bottle IDs); bill and khata in Courier Prime 400/700 (`@fontsource/courier-prime`) | 0.875rem | 1.5 | 0 | As data |
| Devanagari (optional) | Anek Devanagari | `@fontsource-variable/anek-devanagari` (Google Fonts) | 500–700 (labels); boards in Yatra One; hand tags in Kalam 400 (`@fontsource/kalam`) | matches the Latin role | 1.4 | 0 | — |

Licence: all fonts are SIL Open Font License 1.1 (OFL), self-hosted via Fontsource; subset Latin + Latin-ext (Devanagari subset only where used). Real sign-painter lettering (scanned) is preferred over Kalam for price tags; every Devanagari word is proofread. Pairing rationale: a brush sign-painter display and a slab for boards give the shop voice; condensed Anek keeps shelf labels compact in both scripts; Inter Tight carries reading text.

### 12.3 Layout & surfaces
- **Grid:** shelf grid: 12 columns (gutter 24 px, 16 px mobile), margins 5vw, max-width 1440 px; horizontal shelves every 40vh on desktop, each with a 6 px steel edge and a 28 px label rail; products always stand on a shelf line; boards span columns 1–12; mobile: one product per shelf, label rail below
- **Spacing scale:** 4 px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; generous wall space around hero shelves (premium kirana)
- **Radius scale:** sm 2 px (tags, inputs) · md 6 px (painted boards, chips) · lg 999 px (round stamps, enamel discs, cursor)
- **Border style:** boards: 1 px gold pin-stripe inset 3–6 px; tags: 1 px `#C9B48C` edge; shelves: 6 px `#C9CDCB` strip with 1 px `#7F8784` underside
- **Shadow / elevation:** products: real contact shadow + 12% blurred steel reflection; tags `0 4px 8px rgba(23,25,24,.15)`; boards flat
- **Texture / overlay:** one scanned enamel brush tile on boards; scanned cardboard on tags; brushed-steel photo on shelves; scanned rubber stamps (WebP alpha, set ≤ 300 KB)

### 12.4 Components
All interactive components share: focus ring `--c-focus` 2 px / 3 px offset · touch targets ≥ 44 px · disabled = 40% opacity, no motion, `aria-disabled` (unless stated) · hover effects only on `(hover:hover)` devices · motion from §12.6.

- **Primary button** — Painted board chip: forest with a 1 px gold pin-stripe inset 3 px, sign-cream label (Anek Latin 700, 14 px, +0.08em, uppercase) with an underline and travelling arrow; 48 px tall, padding 14 px 20 px, radius 6 px. **States:** default forest chip · hover arrow travels 6 px, pin-stripe goes full gold · focus-visible 2 px `#1E7A68` ring, 3 px offset · active chip presses 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading three steel dots fill in turn, `aria-busy`. **Motion:** 180 ms `--ease-out`. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Secondary button** — Cardboard tag button `#E9DCC0` with a punched-hole dot at the left, ink label, underline + arrow; 48 px tall, radius 2 px. **States:** default tag · hover tag swings 2° and settles · focus-visible 2 px `#1E7A68` ring, 3 px offset · active presses 1 px · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading steel-dot loader. **Motion:** swing 450 ms, no overshoot. **A11y:** native `<a>`/`<button>`, hit area ≥ 44 px, label ≥ 4.5:1.
- **Text / arrow link** — Forest body link with 1 px underline; on product pages the hover underline uses the variant cap colour. **States:** default forest + hairline · hover underline thickens to 2 px (green, or the cap colour) · focus-visible 2 px `#1E7A68` ring, 3 px offset · active colour green · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 180 ms. **A11y:** underline always present (never colour alone); arrow is `aria-hidden`.
- **Icon button (incl. menu)** — 44 px enamel badge: forest disc with a 20 px cream pictogram; menu icon = three shelf lines. **States:** default enamel disc · hover lifts 2 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active presses flat · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading n/a (static element). **Motion:** 180 ms. **A11y:** `aria-label` required; 44×44 px hit area; menu button carries `aria-expanded` + `aria-controls`; Esc closes the menu and returns focus.
- **Navigation bar** (desktop + mobile menu) — 64 px painted forest board with a gold pin-stripe along its bottom; links Anek Latin 600 13 px uppercase in sign-cream; RESERVE as a cream tag chip. Mobile: the board shrinks to one line; the menu rolls a shutter down (600 ms) revealing links stacked on steel shelves. **States:** default cream links on board · hover 1 px cream underline · focus-visible 2 px `#1E7A68` ring, 3 px offset · active current page: small enamel dot beneath · disabled n/a · loading n/a. **Motion:** shutter 600 ms `--ease-inout`. **A11y:** `<nav>` landmark after a skip link; logo is a link to `/` with `aria-label="DESIGO® home"`; the animated SVG is `aria-hidden`. **Logo:** The DESIGO® wordmark sits top-left (cap height 22 px desktop, 18 px mobile) and runs the brand's **black write / un-write loop** (charcoal `#171918` on light grounds, white `#FFFFFF` on dark grounds; the colour never changes during the loop). The loop pauses while the menu is open, when the tab is hidden, and under reduced motion (the full wordmark is shown static). On the board the logo renders white (dark ground rule).
- **Cursor** — 14 px charcoal dot; labels Anek Latin 600 11 px uppercase on a small cardboard tag. **States:** default 14 px dot · hover 24 px ring (over stamps, tags, links) · ROTATE tag reading "drag · turn" over the bottle · EXPLORE tag reading "explore" over shelves and the route board · ENTER small steel ladle pictogram over RESERVE, arrow → elsewhere · VIEW cardboard tag reading "VIEW" over products · TRACE scooter pictogram reading "trace". **Touch fallback:** no cursor; tags shown statically under each product; tap lifts the bottle off the shelf; shelf carousel uses scroll-snap with "1 of 4" + buttons. **A11y:** decorative (`aria-hidden`, `pointer-events:none`); off for coarse pointers and reduced motion, where the system cursor returns; never the only cue.
- **Card / panel / info block** — Shelf section: milk wall, steel edge strip, 28 px label rail; info cards are cardboard `#E9DCC0` with radius 2 px, a punched hole, padding 24 px. **States:** default product standing on shelf · hover product lifts 6 px, contact shadow widens, label rail tints to the cap colour · focus-visible 2 px `#1E7A68` ring, 3 px offset · active returns 450 ms · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading empty shelf space with a tag `AssetSlot` naming the missing asset. **Motion:** 450 ms `--ease-out`. **A11y:** real heading inside; one primary action per card; text never sits on texture below 4.5:1.
- **Badge / tag** — Scanned rubber stamp with live-text label (Anek Latin 700 uppercase in a double-rule rectangle, rotated ±2°). **Pending verification** / PRICE PENDING / PENDING APPROVAL in ledger blue `#2C3E73`. **DEMO · not live data** ("DEMO · ILLUSTRATIVE") in stamp red `#9E2B25`, large on trace pages. Enamel badges for descriptors and RETURNABLE GLASS. Never stamp claims. **States:** default stamp · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** thunk: scale 1.15 → 1, opacity 0 → .92 in 160 ms, once per session. **A11y:** status is real text ("Pending verification", "DEMO · not live data"); colour and shape are never the only signal.
- **Input + form field (Trace-your-milk bottle ID)** — Bill-book form: carbon-copy paper with faint blue rules, 56 px field, Courier Prime label, bottle ID in JetBrains Mono 18 px over a 1 px ink underline; demo ID prefilled; errors in ledger-blue text + icon; clearly not a tax invoice. **States:** default ruled field · hover underline darkens · focus-visible 2 px `#1E7A68` ring, 3 px offset · active 2 px forest underline · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading the journey prints line by line (120 ms per line) and is stamped DEMO · ILLUSTRATIVE. **Motion:** print 120 ms/line. **A11y:** visible `<label>`, hint and error linked with `aria-describedby`, error shown as text + icon, `autocomplete=off`, `spellcheck=false`.
- **Divider / ornament** — steel shelf edge (6 px `#C9CDCB` + 1 px `#7F8784` underside) or a gold double pin-stripe on boards. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** none. **A11y:** `aria-hidden` (decorative) or `role=separator` between landmark sections.
- **Section header** — Painted board header across 12 columns: chapter number in a cream enamel circle (Anek 700), title in Yatra One / Alfa Slab One cream with 3 px drop shadow, Devanagari subtitle where approved. **States:** default static · hover none · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled n/a · loading n/a (static element). **Motion:** shutter reveal between major chapters only. **A11y:** real `<h2>`; the chapter number is read as "Chapter 03"; decorative glyphs `aria-hidden`.
- **Product info block** — Label rail + tag: V-code as a ledger-blue stamp, name in Alfa Slab One, the `desigo.ts` line, price on a hand-lettered tag with the PRICE PENDING stamp (hidden in production), size, descriptors as small enamel badges with dotted pending underline; on /milk the comparison is a real `<table>`. **States:** default static · hover tag swings −6° → 4° → 0 (700 ms) when the shelf enters view · focus-visible 2 px `#1E7A68` ring, 3 px offset · active n/a · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading tag `AssetSlot`. **Motion:** swing 700 ms damped. **A11y:** facts in a `<dl>`; pending values carry visually-hidden "(pending verification)"; price hidden in production until approved.
- **Bottle stage** — One bottle on a single brushed-steel shelf under a painted board, lit like a 6 a.m. shop window; a 12% blurred reflection in the steel; no idle float (it stands still). **States:** default standing · hover pointer tilt ±4° · focus-visible 2 px `#1E7A68` ring, 3 px offset · active drag lifts it −24 px (shadow grows) and turns it; release settles in 450 ms · disabled n/a · loading single render turns ±20° with a sheen sweep until 360 frames exist. **Motion:** lift/settle 450 ms `--ease-out`. **A11y:** Bottle360Viewer is `role=img` with an `aria-label`; ←/→ rotate 5°, Home resets; reduced motion stops idle float and auto-turn.
- **Trace node / timeline step** — Route-board stop: 20 px enamel disc (cream with a forest ring) on a painted map; label Anek 600 13 px + mono ID. **States:** default cream disc · hover disc lifts 2 px · focus-visible 2 px `#1E7A68` ring, 3 px offset · active a scooter pictogram moves 1500 ms per hop; the stop fills forest · disabled 40% opacity, no hover motion, `aria-disabled="true"` · loading stops appear one by one. **Motion:** hop 1500 ms `--ease-inout`. **A11y:** route is an ordered list `<ol>`; each node a `<button>` opening its panel; `aria-current="step"` on the active node.

### 12.5 Iconography & illustration
- **Icon style:** sign-painter pictograms: filled shapes with a 1.5 px cream outline (bottle, can, scooter, return arrow, cow head in respectful profile) on small enamel badges
- **Illustration technique:** boards and the seven station signs painted by a commissioned sign painter and scanned; stamps made as real rubber stamps and scanned
- **Photo treatment:** clean product and steel photography on milk walls, neutral-warm grade, spotless steel; real shop photos only with consent and accurate captions; farm photos in clean steel frames

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals, lifts |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | shutter, scenes |
| `--dur-micro` | 180 ms | hover, press |
| `--dur-reveal` | 450 ms | reveals, bottle settle |
| `--dur-scene` | 900 ms | shutter (incl. 60 ms hold) |
| `--stamp` | 160 ms, scale 1.15 → 1 | rubber-stamp thunk |
| `--swing` | 700 ms, −6° → 4° → 0 | price tags |
| `--hop` | 1500 ms | scooter per stop |
| `--scrub` | 1 | shelf scroll |

- **Signature transition:** the rolling shop shutter: a ribbed steel panel rolls down over the old chapter and up over the new one (900 ms), only between major chapters
- **Scroll behaviour:** brisk and tactile; in chapter 08 the shelf scrolls horizontally, one variant per 120vh, each bottle lifting forward at centre
- **Reduced-motion fallback:** no shutter (200 ms cross-fade), no tag swing, stamps simply appear

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** _clean premium Indian dairy shop aesthetic, spotless brushed stainless steel, milk-white walls #F7F4EC, deep forest-green #0B3B32 painted enamel with thin gold #C8A96B pin-stripes, soft early-morning window light, ordered and calm, editorial, no text, no watermark, no logo, no letters_

**Base negative prompt (add to every row's negative):** _text, letters, words, numbers, typography, logo, watermark, signature, label, packaging, milk bottle, glass bottle, ghee jar, Holstein cow, Jersey cow, cartoon mascot, comic pose, religious symbols, deity, faces in close-up, dirt, stains, clutter, oversaturated, plastic CGI look_

| # | File path (web/public/desigo/styles/<slug>/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| AS1 | `web/public/desigo/styles/asian-store/hero.png` | 3200×2000 (16:10) | No | Clean minimalist Indian dairy shop interior at early morning, a single empty brushed stainless-steel shelf at centre, milk-white wall, a blank deep forest-green painted signboard with a thin gold border at the top, soft window light, no products | brand packaging, signage lettering, clutter, grime, rust | Hero desktop |
| AS2 | `web/public/desigo/styles/asian-store/hero-portrait.png` | 1400×2400 (7:12) | No | Vertical view of the same clean dairy-shop wall: blank forest-green signboard at the top, one empty steel shelf in the lower middle, milk-white wall, soft morning light | products, lettering, clutter | Hero mobile |
| AS3 | `web/public/desigo/styles/asian-store/shelf-master-26.png` | 3200×2000 + 1400×2400 | No | Empty brushed-steel shelf with a deep green #1F5C45 edge strip under a blank forest-green enamel board with gold pin-stripe, milk-white wall, empty centre | products, herbs, lettering | MASTER 26 world |
| AS4 | `web/public/desigo/styles/asian-store/shelf-root-14.png` | 3200×2000 + 1400×2400 | No | Empty steel shelf with a crimson #B3202A edge strip under a blank cream enamel board with a thin red border, milk-white wall, empty centre | products, lettering, rust | ROOT 14 world |
| AS5 | `web/public/desigo/styles/asian-store/shelf-base-3.png` | 3200×2000 + 1400×2400 | No | Empty steel shelf with an amber #E89A1C edge strip under a blank amber enamel board with a dark brown #5A3304 border, warm morning light, empty centre | products, lettering, neon | BASE 3 world |
| AS6 | `web/public/desigo/styles/asian-store/shelf-essential.png` | 3200×2000 + 1400×2400 | No | Empty steel shelf with a pale ivory #CDB89A edge strip under a plain milk-white blank board, very minimal, empty centre | products, decoration | ESSENTIAL world |
| AS7 | `web/public/desigo/styles/asian-store/route-board.png` | 3600×2000 | No | Hand-painted enamel signboard showing a simple neighbourhood route map as a flat painted line with eight round blank cream stops, forest-green ground, gold pin-stripe border, sign-painter style | street names, numbers, letters, real city map | Traceability (ch. 06), /trace |
| AS8 | `web/public/desigo/styles/asian-store/shutter.png` | 2400×2400, seamless vertically | No | Ribbed rolling metal shop shutter, painted milk white, flat front light, seamless vertical repeat | graffiti, rust, dents, padlock | Shutter transition texture |
| AS9 | `web/public/desigo/styles/asian-store/price-tag.png` | 800×1000, transparent | Yes (real alpha) | Blank brown cardboard price tag with a punched hole and cotton string, slightly worn edges, top-down, transparent background, no writing | writing, price numbers | PriceTag component |
| AS10 | `web/public/desigo/styles/asian-store/khata-ledger.png` | 3000×2000 | No | Open blank Indian account ledger book with red ruled lines and cloth binding, top-down on a teak wood counter, no writing | handwriting, numbers | Bottle → story khata (ch. 02) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/39_asian-store.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/asian-store/
- [ ] No imitation of any real dairy co-operative's colours, signage or booth
- [ ] Order slip labelled "order summary, not an invoice"; trace bill stamped DEMO
- [ ] Prices hidden in production until approved; PRICE PENDING in previews
