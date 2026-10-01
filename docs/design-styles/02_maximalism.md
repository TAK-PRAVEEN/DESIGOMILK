# 02 — Maximalism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 2 / 5 for the whole site** · Best used for: the Ghee chapter (12) and a festive Bilona ghee / Diwali campaign page.

---

## 1. Style essence

Maximalism is "more is more" done with discipline: dense layering, saturated colour, pattern on pattern, multiple type voices, ornament, and abundance as the message. Good maximalism is curated excess — every layer belongs to one story and one palette; bad maximalism is clutter.

Origins: Victorian interiors, 1960s–70s psychedelic print, Memphis Group, Indian textile and miniature-painting traditions, and the post-2018 reaction against flat minimal web design.

Three reference points:
1. **Gucci under Alessandro Michele** (campaign sites, "Gucci Garden"): archival ornament, clashing pattern held together by a strong art direction.
2. **Sabyasachi** brand imagery: Indian heritage abundance — textiles, brass, deep jewel tones — luxurious, not kitsch.
3. **Rajasthani block print and phad painting**: borders within borders, narrative panels, indigo/madder/turmeric palettes — the local root of DESIGO®.

## 2. Why it fits DESIGO® (and where it fights)

DESIGO® comes from Jodhpur. Rajasthan is visually one of the most maximal places on earth — block prints, mirror work, painted havelis, turbans, festival markets. Bilona ghee is a festive, gifting, ritual product; maximalism can make it feel celebratory and rooted.

Where it fights: the core proposition is *clarity* — traceability, test results, honest labelling. A maximal page makes it harder to see what is verified and what is pending. Milk is also visually pure; burying a white bottle in pattern contradicts the product. And dense pages are slow on Indian mid-range phones.

**Fit score: 2 / 5 for the whole site.** Recommendation: keep the site minimal, and let maximalism *own* chapter 12 (Ghee) and a standalone `/ghee/festive` campaign page, where abundance is the right message. A softened maximal treatment can also dress chapter 10 (Heritage). The full plan below still describes a complete maximal site so the client can see it.

## 3. Art direction

### Palette — "Jodhpur bazaar, curated"
| Token | Hex | Role |
|---|---|---|
| `--max-ground` | `#F2E6CC` | Sandstone ground (lighter than `--paper`) |
| `--max-indigo` | `#1F2E5C` | Block-print indigo, deep panels |
| `--max-madder` | `#9E2B25` | Madder red (harmonised with ROOT 14 `#B3202A`) |
| `--max-turmeric` | `#E0A526` | Turmeric (harmonised with BASE 3 `#E89A1C`) |
| `--max-leaf` | `#1F5C45` | MASTER 26 green |
| `--forest` | `#0B3B32` | Darkest anchor |
| `--gold` | `#C8A96B` | Borders, rules, brass |
| `--gold-deep` | `#8F6F2E` | Engraved gold, small text on sandstone (≥ 4.5:1) |
| `--milk` | `#F7F4EC` | The bottle's "clearing" — a calm field always kept around the product |
| `--ink` | `#1E211F` | Text |

Rule: **never more than four pattern colours in one viewport**, and the bottle always sits in a `--milk` clearing (oval or arch) at least 1.4× its width.

### Typography
- Display: **Fraunces** 900, SOFT 100, opsz 144 — fat, warm and ornamental; swash-like italics for single words.
- Secondary display: **Rozha One** — high-contrast Devanagari-and-Latin display face; used for numerals (26 · 14 · 3) and Hindi accents (e.g. "बिलोना" beside "BILONA").
- Text: **Inter Tight** 400 — the calm voice that keeps information readable.
- Data: **JetBrains Mono** — kept for IDs so the trace chapters stay honest.
- Ornamental caps: drop caps drawn as SVG with a block-print border, used max once per page.

### Texture
Block-print overlay (hand-carved wood-block motifs: buti flowers, paisley, cow-and-calf), printed with slight mis-registration (1–2px offset between colour layers), hand-dyed fabric grain at 6%, mirror-work sparkle as tiny SVG discs that catch pointer light.

### Imagery
Real DESIGO® farm photography framed inside painted borders like phad panels; ghee jar shot on brass and textile (needs a dedicated shoot). Illustrations: commissioned block-print motifs from the ghee jar's folk-pattern label, extended into a full pattern library.

### Iconography
Filled, slightly irregular stamp icons (as if printed by a wooden block) at 32px; each icon has a 1px gold keyline.

### Grid
Nested frames instead of columns: an outer 5vw margin border (pattern band 24px), an inner 12-column grid with 16px gutters, and "panels" that can span irregular areas (phad-style storytelling cells). Mobile: 4 columns, border reduces to 8px band.

## 4. Motion & interaction language

- Abundance in motion is still *slow*: pattern layers parallax at 0.85× / 0.95× / 1.05× so the page feels deep; no spinning, no confetti.
- Reveals: panels unfold like a cloth being opened (scaleY 0 → 1 from top, 900ms `cubic-bezier(.16,1,.3,1)`), contents fade in 120ms later.
- Pattern "printing" reveal: block-print motifs stamp in with a 2-frame offset (opacity 0 → 1 in 80ms, then colour layer 2 registers 160ms later) — a nod to the printing process.
- Cursor: a 14px brass disc with 1px gold ring; **link** → a stamp silhouette (paisley) 40px; **bottle** → ring labelled `DRAG` / `TILT` in Rozha One; **pattern area** → small mirror glint follows; touch: off.
- Hover on cards/panels: border pattern animates (dash-offset travel 1.2s), panel lifts 4px with a printed-shadow offset (hard 4px `--gold-deep` at 30%).
- Page transitions: an indigo cloth panel sweeps across (900ms ease-inout) with the block-print border printed on its leading edge.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands in an arched milk clearing (jharokha-shaped window) cut from a dense pattern field — the pattern stops 40px before the glass on every side. Float ±8px / 6s; tilt ±6°. The contact shadow lands on a painted ground line. Behind the arch, pattern layers parallax on pointer movement (max 14px).

**Rotation.** Single render: ±20° skew with sheen; mirror-work discs around the arch catch the sheen direction. With 360 frames, dragging rotates the bottle *and* rotates the arch's pattern ring in the opposite direction at 0.2× — the world turns around the product.

**Variant worlds** (each a different textile):
- **MASTER 26** — leaf-green and indigo *dabu* print with 26 small herb motifs repeated in the border (decorative count only; herb count claim remains pending in copy). Gold zari rule.
- **ROOT 14** — madder-red *ajrakh* geometry, deep `#4A0A0F` panels, red earth band at the bottom.
- **BASE 3** — turmeric *bagru* print with sun motifs; golden-hour warmth.
- **ESSENTIAL** — the restrained one: ivory-on-ivory *chikankari*-like embroidery pattern in `#CDB89A` on `#F4EDE2` — tone-on-tone maximalism.

Info panel: a framed phad cell with V-code, name in Fraunces 900, line, descriptors (pending markers kept), price only when approved.

## 6. Page-by-page treatment

### Home
| # | Chapter | Maximal treatment |
|---|---|---|
| 01 | Hero | Pattern field with an arched milk clearing for the bottle; "Milk from the source." in Fraunces 900 with "source" in italic swash; Rozha One numerals around the arch. |
| 02 | Bottle becomes the story | Six words as six printed medallions orbiting the arch; each medallion unfolds to a phad cell with one line. Ground shifts sandstone → indigo. |
| 03 | Cow to bottle | A long phad scroll painting: seven stations as narrative panels, read horizontally; a milk-white river runs through all panels. |
| 04 | Where it begins | Real photos in painted frames, layered with block-print foliage cut-outs in foreground (decorative, never covering subjects). |
| 05 | Breeds | Each breed as a miniature-painting plate with ornate border and region name; pending marker on a small paper tag. |
| 06 | Traceability | Indigo ground; the trace path drawn as a gold zari thread with eight mirror-work nodes. DEMO label in a plain white box — never decorated. |
| 07 | Quality | **De-maximised on purpose**: a plain milk "lab sheet" pinned on the pattern ground. The 16 parameters in clean type — clarity wins here. |
| 08 | Four milks | Four textile worlds as above. |
| 09 | Milk as material | Milk ribbon flows *through* the pattern, erasing it to white where it passes. |
| 10 | Heritage | The strongest maximal chapter: layered block prints, cow motifs, gold rules, a single big italic sentence in a cartouche. |
| 11 | Technology | Pattern dissolves into a grid of dots (block-print buti become data nodes) — maximal heritage turning into order. |
| 12 | Ghee | **The flagship maximal chapter.** Brass, marigold-yellow, jar label pattern extended to full screen; three grades as three ornate jars-in-arches; each traced back to its milk. |
| 13 | Trace your milk | Plain charcoal panel inside an ornate frame — the tool itself stays undecorated. |
| 14 | Story | Timeline as a painted scroll; verified milestones in cartouches; unconfirmed items hidden. |
| 15 | Final CTA | The arch clearing returns, wider; "Know where your milk comes from."; pattern frames the footer. |

### Inner pages
- **/milk** — four arches in a row on a long textile, each holding a bottle.
- **/milk/[variant]** — full textile world; viewer in the arch; facts in a phad cell beneath.
- **/ghee** — festive maximal page; bilona process illustrated as five painted panels (churn, butter, heat, filter, jar).
- **/origin** — photo essay with painted borders; breed plates.
- **/trace** — zari-thread map, then the plain demo tool.
- **/technology** — order emerging from pattern: verbs on dot grids.
- **/about** — scroll-painting timeline, supporters (pending) in plain text.
- **/reserve** — form on a calm milk panel with a single pattern border.

## 7. Component variants

`PatternField` (layered SVG block-print, parallax) · `ArchClearing` (jharokha mask for bottle/jar) · `PhadPanel` (bordered story cell) · `PrintedMedallion` · `ZariTraceMap` · `TextileProductScene` ×4 · `StampButton` (underline + stamp icon) · `BrassCursor` · `CartoucheTimeline` · `LabSheet` (deliberately plain) · `ClaimText` and `AssetSlot` unchanged (plain, never ornamented — honesty stays readable).

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Curated maximal palette | Tokens, Fraunces 900/Rozha One/Inter Tight, pattern colour rules | Text contrast ≥ 4.5:1 on every pattern ground (tested on darkest/lightest tile) | Brand colours, jar label artwork | 3 |
| 2 | Shell | Bordered frame, nav, cursor | Pattern border, nav on milk band, brass cursor, cloth transition | Nav readable over every pattern; border ≤ 24px | Vector wordmark | 4 |
| 3 | Hero | Bottle in arch clearing | PatternField, ArchClearing, tilt, parallax | Clearing ≥ 1.4× bottle width; LCP ≤ 2.5s | Renders | 4 |
| 4 | Story orbit | Six medallions | Medallion orbit, phad unfold | Each statement readable; reduced motion = list | 360 frames optional | 3 |
| 5 | Cow → bottle | Phad scroll painting | 7 commissioned panels, horizontal track | Panels ≤ 180 KB each; vertical on mobile | Illustrator commission (2–3 weeks lead) | 6 |
| 6 | Origin | Framed photo layers | Painted frames, foliage cut-outs | Cut-outs never cover faces/animals | B1, B2, B4 | 3 |
| 7 | Breeds | Miniature plates | 6 plates, pending tags | Unapproved breeds labelled | B3, breed approval | 3 |
| 8 | Trace map | Zari thread map | Gold path, mirror nodes, side panel | DEMO label plain and visible | Trace wording | 3 |
| 9 | Quality | Plain lab sheet | LabSheet over pattern | Zero decoration inside the sheet | Lab values approval, B6 | 2 |
| 10 | Four worlds + 360 | Textile worlds | 4 patterns, Bottle360Viewer with counter-rotating ring | 60fps on mid Android with pattern parallax | **360 sequences (A)** | 6 |
| 11 | Heritage | Full maximal chapter | Layered prints, cartouche | One sentence remains the clear focal point | Heritage line approval | 3 |
| 12 | Technology | Pattern → dot grid | Morph animation (SVG) | Morph ≤ 1.2s, no jank | — | 3 |
| 13 | Ghee | Flagship festive chapter | Brass/marigold world, 3 jars in arches | Grade ↔ milk mapping correct | Ghee jar shoot on brass/textile | 4 |
| 14 | Trace demo | Plain tool in ornate frame | TraceYourMilk | Tool fully legible; demo flagged | — | 2 |
| 15 | /milk pages | Product pages | Lineup, variant pages | Viewer usable without the pattern loading | A, pricing approval | 4 |
| 16 | /origin, /trace, /technology | Inner pages | Photo essay, map, verbs | ≤ 2 MB first load per page | B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | Scroll timeline, festive ghee, form | Form on calm panel; no pattern behind inputs | Milestone approvals | 5 |
| 18 | Mobile pass | Reduce density | Pattern scaled to 2 layers, border 8px | Single-pattern viewport on < 768px | — | 4 |
| 19 | A11y + reduced motion | Readable under pattern | High-contrast toggle that hides PatternField | axe clean; pattern off = fully usable page | — | 3 |
| 20 | Perf, QA, handover | Ship | SVG pattern sprite, AVIF, docs | LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.05 | Approvals | 4 |

Total ≈ 73 days (+ illustration lead time).

## 9. Assets needed from DESIGO®

1. Original ghee jar label artwork in vector (the folk pattern is the seed of the whole pattern library).
2. Permission/brief for a commissioned block-print pattern set (or contact with a Jodhpur/Bagru printer to scan real blocks — authentic and ownable).
3. Ghee jar photography on brass and textile; marigold and festive props.
4. 360 sequences (A); farm and breed photography (B1–B4).
5. Approvals as for all styles: prices, herb counts, breed list, trace wording.

## 10. Performance, accessibility and mobile

- Performance: patterns as one SVG sprite (≤ 60 KB gz) tiled via CSS `mask`/`background`, not bitmaps. Parallax limited to transform on 3 layers; disable on `navigator.hardwareConcurrency ≤ 4`. Budget per page ≤ 2 MB.
- Accessibility: maximalism is the riskiest style for readability. Text never sits directly on pattern — always on a milk/indigo panel. A "Calm view" toggle (persisted in localStorage, try/catch) hides pattern layers. Never encode meaning in pattern.
- Reduced motion: no parallax, no stamps, no cloth transitions; patterns static.
- Mobile: one pattern per viewport, arches narrower, phad scroll becomes vertical panels; ghee chapter keeps full richness because it is short.

## 11. Risks and premium guardrails

Risks: kitsch (wedding-card aesthetic), tourist-souvenir clichés, unreadable claims, slow pages, and drowning the white bottle.

**Premium guardrails**
1. One art director, one palette: every pattern comes from the same block set and the same four dyes.
2. The product always has a milk clearing — abundance surrounds, never touches, the bottle.
3. Real craft, not clip art: scan real wood blocks or commission an illustrator; never use stock paisley.
4. Information zones (trace, quality, demo, prices, pending markers) are always plain.
5. Gold is matte and engraved-looking (`#C8A96B` / `#8F6F2E`), never glossy gradient gold.
6. No mandala clichés, no "Incredible India" postcard elephants; cows and farms are DESIGO®'s own.
7. Motion stays slow and physical (cloth, stamp, thread) — no sparkles, no confetti.
8. Copy stays short and factual amid the richness; no "divine", "purest", or health language.
9. Use the style where abundance is the message (ghee, heritage, festive) and step out of it elsewhere.
10. Review every screen at 50% zoom: if the focal point is not instantly obvious, remove a layer.
