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

### Images to generate (illustration only; save under `web/public/desigo/styles/kirana/`)
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
