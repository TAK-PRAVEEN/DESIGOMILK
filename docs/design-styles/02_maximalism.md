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
| `--gold-deep` | `#8F6F2E` | Engraved gold: double rules and display text ≥ 24px only (3.8:1 on sandstone) |
| `--max-muted` | `#5C4A2A` | Small captions and labels on sandstone (6.9:1) — added in the 2026-10-03 audit |
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
- **MASTER 26** — leaf-green and indigo *dabu* print with small herb-leaf motifs repeated in the border (deliberately not 26 of them, so the pattern never implies the herb count, which remains pending). Gold zari rule.
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
- **/about** — scroll-painting timeline; supporters are not shown until written evidence is on file (KB Q34).
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

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: `--gold-deep #8F6F2E` was claimed ≥ 4.5:1 on sandstone but measures 3.8:1, so it is now limited to rules and large text and a new muted-text token `#5C4A2A` (6.9:1) carries small text; /about no longer lists supporters, which stay excluded until written evidence is on file (KB Q34); the MASTER 26 border no longer repeats 26 herb motifs, which implied the pending herb count. Fonts were already open-licence. Added cursor states, form/badge/divider specs, motion tokens and 11 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#9E2B25` | madder red (`--max-madder`): primary CTA fill, active medallion, key ornament | 6.0:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk text and stamp icons on madder | 6.8:1 on primary |
| Secondary | `--c-secondary` | `#1F2E5C` | block-print indigo (`--max-indigo`): deep panels, trace chapter ground, secondary button frame | 10.6:1 on bg |
| Accent | `--c-accent` | `#E0A526` | turmeric (`--max-turmeric`): highlights on indigo, mirror-work glints, data dots; never small text on sandstone | 1.8:1 on bg; decoration only on light grounds; 6.0:1 on indigo |
| Background | `--c-bg` | `#F2E6CC` | sandstone ground (`--max-ground`) | text 13.1:1 |
| Surface | `--c-surface` | `#F7F4EC` | milk clearing / calm information panel (`--milk`): every text block and the bottle sit on it | text on surface 14.8:1 |
| Text | `--c-text` | `#1E211F` | ink body text (`--ink`) | 13.1:1 on bg |
| Muted text | `--c-text-muted` | `#5C4A2A` | captions, labels, pending notes (new token `--max-muted`) | 6.9:1 on bg; replaces `--gold-deep` for small text |
| Line | `--c-line` | `#C8A96B` | matte gold (`--gold`) for rules, borders and keylines; engraved gold `#8F6F2E` for double rules | 1.8:1 on bg; decorative → never the only boundary of a control |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#7A5A12` / `#1F2E5C` | ok = leaf green (verified only); pending = dark turmeric dotted underline + 'pending verification' label; DEMO = plain indigo box with milk text, never ornamented | ok 6.3:1 · pending 5.1:1 · demo 10.6:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#D9E8DF` | leaf-green + indigo *dabu* textile, gold zari rule, uncounted herb-leaf motifs in the border (never 26 motifs — the herb count stays pending) |
| ROOT 14 | V1 · red cap | `#B3202A` | `#4A0A0F` | `#F3D9D6` | madder *ajrakh* geometry; deep `#4A0A0F` panels; red-earth band at the foot |
| BASE 3 | V2 · amber cap | `#E89A1C` | `#5A3304` | `#F8E4C2` | turmeric *bagru* print with sun motifs; numerals and text in `#5A3304` |
| ESSENTIAL | V3 · ivory cap | `#CDB89A` | `#4D4130` | `#F4EDE2` | tone-on-tone ivory *chikankari*-like pattern `#CDB89A` on `#F4EDE2`; text `#4D4130` |

Dark-chapter inversion: on indigo or forest chapters (06 Traceability, 11 Technology, 13 Trace) `--c-bg` → `#1F2E5C`, `--c-surface` → `#162246`, `--c-text` → `#F7F4EC`, `--c-text-muted` → `#D9CDB4`, `--c-line` stays gold `#C8A96B`, `--c-accent` turmeric becomes legal for small highlights (6.0:1); the milk clearing around the bottle stays `#F7F4EC` in every chapter.

Pattern colours per viewport: max four from {indigo, madder, turmeric, leaf, gold}. Engraved gold `#8F6F2E` is kept for double rules and display text ≥ 24 px only (3.8:1).

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces (variable) | `@fontsource-variable/fraunces` · Google Fonts | wght 900, SOFT 100, opsz 144; italic for one swash word | clamp(3.5rem, 9vw, 9rem) | 0.95 | -0.02em | Sentence |
| Headline H1–H2 | Fraunces (variable) | `@fontsource-variable/fraunces` | H1 700 / H2 600, SOFT 50 | H1 clamp(2.6rem, 5vw, 5rem) · H2 clamp(1.8rem, 3vw, 3rem) | 1.05 / 1.15 | -0.01em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 400 / 500 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.6 | 0 | Sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 600 | 0.75rem | 1.3 | +0.16em | UPPERCASE |
| Data / mono | JetBrains Mono (variable) | `@fontsource-variable/jetbrains-mono` | 400 / 500 | 0.875rem | 1.5 | 0 | As data |
| Devanagari (optional) | Rozha One | `@fontsource/rozha-one` · Google Fonts | 400 (single weight) | clamp(2rem, 6vw, 6rem) — display only; also variant numerals 26 · 14 · 3 | 1.1 | 0 | — |

Licence: Fraunces, Inter Tight, JetBrains Mono and Rozha One are all SIL OFL 1.1. Pairing: fat, soft Fraunces carries the festive abundance, high-contrast Rozha One gives the numerals and Hindi accents a Rajasthani-signboard voice, and Inter Tight keeps every fact readable.

### 12.3 Layout & surfaces
- **Grid:** nested frames — outer 5vw margin carrying a 24 px pattern band (8 px on mobile); inner 12 columns, 16 px gutters, max-width 1440 px; phad-style panels may span irregular areas (3–8 columns). Mobile: 4 columns.
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px (design-system scale).
- **Radius:** `--r-0 0` for panels and frames; arches use a 50% top radius (jharokha mask); `--r-pill 999px` only for tags and medallions.
- **Borders:** pattern band 24 px; inner rule 1 px gold + 1 px engraved gold double rule 3 px apart.
- **Elevation:** "printed shadow" — hard 4 px offset `rgba(143,111,46,.30)` on hover only; bottle gets the design-system contact shadow (blurred ellipse) on a painted ground line. No soft drop shadows on panels.
- **Texture/overlay:** SVG block-print sprite (≤ 60 KB gz) as CSS mask; hand-dyed cotton grain 6%; 1–2 px colour-layer mis-registration on motifs. The bottle always sits in a `#F7F4EC` clearing ≥ 1.4× its width; text never sits directly on pattern.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — anatomy: madder `#9E2B25` rectangle (radius 0), milk Inter Tight 600 label uppercase +0.16em, 16 px stamp icon (paisley) + travelling arrow; sizes 48 px (md) / 56 px (lg), padding 14×24 / 18×32 · default flat · hover 1 px gold keyline draws around (600 ms) + printed shadow 4 px, arrow travels 6 px · focus-visible 2 px indigo ring + 2 px milk offset · active shadow 0, translate 2 px · disabled `#C9B99A` fill, ink 55%, no pattern · loading stamp icon prints in 3 steps (`steps(3)`), label stays · a11y: `<button>`/`<a>` with full label text; min target 48 px.
- **Secondary button** — anatomy: transparent with 1 px indigo frame and gold inner rule, indigo label; same sizes · hover frame fills `#1F2E5C` 8% tint, arrow travels · focus-visible 2 px indigo ring + offset · active tint 14% · disabled frame 40% · loading dotted frame dash-offset travel. On indigo grounds: milk frame and label.
- **Text / arrow link** — the design-system underlined label with travelling arrow `EXPLORE THE SOURCE ———→`; ink text, 1 px madder underline; hover underline thickens to 2 px and the arrow travels 8 px (240 ms); focus-visible 2 px indigo outline; visited unchanged; disabled not used.
- **Icon button (incl. menu)** — 44×44 px milk disc with 1 px gold keyline, 20 px stamp icon in ink; menu = three block-print bars; hover keyline thickens, disc tints turmeric 15%; focus-visible indigo ring; active scale 0.96; disabled 40%; `aria-label` required; menu toggles `aria-expanded`.
- **Navigation bar** — desktop: 72 px milk band `#F7F4EC` sitting inside the pattern border, logo left, 5 text links (Inter Tight 600 uppercase) centre-right, Reserve as primary button; 1 px gold rule below; active link gets a 3 px madder bar above. Mobile: 60 px band, icon menu opens a full-screen indigo cloth panel (900 ms unfold) with Fraunces 700 links on milk text. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`. The nav band itself is never patterned.
- **Cursor** — default 14 px brass disc `#C8A96B` with 1 px `#8F6F2E` ring · hover (links) 40 px paisley stamp silhouette outline · ROTATE (bottle) 64 px ring with `ROTATE` in Rozha One 12 px · EXPLORE (patterned scene) small mirror glint follows + label `EXPLORE` · ENTER (variant arch) ring becomes an arch outline + `ENTER` · VIEW (photo panel) square frame + `VIEW` · TRACE (trace nodes) zari-thread dot + `TRACE`. Lag 0.15. Touch/coarse pointer: custom cursor off, native behaviour; labels appear as tap hints instead.
- **Card / panel / info block** — `PhadPanel`: milk `#F7F4EC` cell with 24 px pattern border (4 colours max) and inner double gold rule; padding 32 px (24 mobile); heading Fraunces 700, body Inter Tight · hover border dash-offset travel 1.2 s + 4 px lift with printed shadow · focus-visible (if interactive) indigo ring · active lift 0 · disabled n/a · loading pattern border shimmer off, plain gold skeleton lines. Information zones (trace, quality, demo, price) use a *plain* panel: milk with a single 1 px gold rule.
- **Badge / tag** — pill radius, 24 px tall, Inter Tight 600 0.72rem uppercase: neutral = milk with gold keyline; variant = light variant fill + deep variant text; **pending verification** = transparent with `#7A5A12` text, dotted 1 px underline on the claim it qualifies + `title`/popover 'Pending verification'; **DEMO · not live data** = plain indigo `#1F2E5C` box, milk text, radius 0, never decorated. States: hover shows popover for pending; focus-visible ring.
- **Input + form field** — Trace-your-milk: label above (Inter Tight 600 uppercase), 56 px input on milk with 1 px ink bottom rule + gold frame, JetBrains Mono 1.125rem, placeholder `DSG-BTL-000001-3 (sample format)` in muted; no pattern behind or inside inputs · hover frame `#8F6F2E` · focus-visible 2 px indigo ring · invalid madder 2 px rule + message below · disabled 50% · loading button shows stamp loader, results appear as plain panels with DEMO badge.
- **Divider / ornament** — three tiers: hairline 1 px gold; double rule 1 px + 1 px (3 px gap) engraved gold; ornament band 24 px block-print strip from the sprite (max one per viewport, `aria-hidden`).
- **Section header** — chapter number in Rozha One (e.g. `१२ · 12`) above a 1 px gold rule, eyebrow label Inter Tight uppercase, title Fraunces 700 with one italic swash word; left-aligned on desktop, ornamental drop cap max once per page.
- **Product info block** — framed phad cell beside the arch: V-code in JetBrains Mono (`DESIGO® V1+`), name Fraunces 900 (`MASTER 26`), numeral in Rozha One, editorial line, size `1 L glass · 900 g` with pending underline, price shown only when approved otherwise 'Price pending confirmation', descriptors as tags with pending markers.
- **Bottle stage** — the bottle stands in an arched milk clearing (jharokha mask, ≥ 1.4× bottle width; pattern stops 40 px before the glass); contact shadow on a painted ground line; float ±8 px / 6 s, tilt ±6°; pattern layers parallax ≤ 14 px; with 360 frames the pattern ring counter-rotates at 0.2×. No glow; light is warm and top-left.
- **Trace node / timeline step** — mirror-work disc 20 px (gold ring, milk centre) on an indigo ground, joined by a 2 px gold zari thread; states: upcoming (ring only) · active (turmeric fill + label, panel opens) · visited (gold fill) · hover glint · focus-visible milk ring. Step panel is plain milk with text; DEMO badge at the top of the sequence.

### 12.5 Iconography & illustration
- **Icons:** filled stamp icons, slightly irregular edges as if printed from a wood block, 24 px grid shown at 24/32 px, 1 px gold keyline, corners soft (1 px). One colour per icon (ink, madder or indigo).
- **Illustration:** commissioned block-print motif library (buti, paisley, cow-and-calf, sun, leaf) seeded from the ghee jar label; phad-style narrative panels for the journey. AI images below are prototype placeholders until real blocks are scanned (guardrail 3).
- **Photo treatment:** real farm photos warm-graded (+4 warmth, -5 saturation), framed inside painted borders; never patterned over faces or animals.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | panel unfold, reveals |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | cloth page transition |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel |
| `--dur-micro` | `240ms` | hover, underline, arrow |
| `--dur-reveal` | `900ms` | cloth unfold (scaleY 0→1) |
| `--dur-scene` | `1200ms` | chapter scene changes |
| `--stamp-step` | `80ms + 160ms` | block-print stamp: layer 1 then layer 2 registers |
| `--border-travel` | `1200ms linear` | pattern border dash-offset on hover |
| `--parallax` | `0.85 / 0.95 / 1.05` | three pattern layer speeds |

Signature transitions: cloth unfold for panels; indigo cloth sweep with printed leading edge between pages (900 ms). Scroll: Lenis smooth scroll, pinned chapters `scrub: 1`. No spin, no confetti, no sparkles, no overshoot. Reduced motion: no parallax, no stamps, no cloth (200 ms fades), patterns static, logo static; a 'Calm view' toggle also hides pattern layers.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Leave the arch clearing empty in every backdrop; the bottle and jar are composited in code.

**Tail prompt (append to every prompt):** *Rajasthani block-print and phad-painting craft, curated maximal palette of sandstone #F2E6CC, block-print indigo #1F2E5C, madder red #9E2B25, turmeric #E0A526, leaf green #1F5C45 and matte gold #C8A96B, slight print mis-registration, hand-dyed cotton texture, rich but orderly, premium, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/maximalism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Dense layered field of hand-carved wood-block prints on sandstone cotton, buti flowers and paisley in indigo, madder and turmeric, framed by printed borders within borders, a large empty arch-shaped plain milk-white clearing in the centre, flat frontal view, even daylight | mandala, elephants, tourist souvenir, glossy gold, busy centre, people | 01 Hero, 15 Final CTA |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical composition of layered Rajasthani block-print textiles on sandstone cotton, borders within borders at top and bottom, a tall empty arch-shaped milk-white clearing in the centre, flat frontal view | mandala, elephants, busy centre | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Dabu mud-resist block-print textile in leaf green #1F5C45 and indigo with a border of small repeated herb-leaf motifs, gold zari stripe, deep forest green #0A2A20 accents, an empty plain arch clearing in the centre | counted herbs, botanical labels, red, orange | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Ajrakh geometric block-print textile in madder red #B3202A and oxblood #4A0A0F with indigo outlines, a band of red earth texture along the bottom, an empty plain arch clearing in the centre | green, neon pink, blood, gore | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Bagru block-print textile in turmeric amber #E89A1C and deep brown #5A3304 with repeating small sun motifs, warm golden-hour light across the cloth, an empty plain arch clearing in the centre | neon yellow, green, sun with face | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Tone-on-tone ivory chikankari-style white embroidery on ivory cotton #F4EDE2 with fine #CDB89A threads, very restrained, soft skylight, an empty plain arch clearing in the centre | bright colours, heavy pattern in centre | 08 Four milks · /milk/essential |
| 7 | `journey/phad-scroll.png` | 6000×1400 (horizontal scroll strip) | no | Long horizontal phad scroll painting in seven narrative panels separated by painted borders: an Indian zebu cow with hump and dewlap grazing, a small Rajasthani farm with thatched shed and khejri tree, a steel milk can, a round paper test card with sixteen dots, a stainless-steel chiller, a small clean dairy building, and a final empty panel; a milk-white river runs through all panels, flat folk-painting colours | glass bottle, people's faces, deities, text banners | 03 Cow to bottle |
| 8 | `textures/block-print-tile.png` | 2048×2048, seamless | no | Seamless tileable hand block-printed cotton pattern of small buti flowers and paisleys in indigo, madder and turmeric on sandstone ground, visible wood-grain print texture, flat scan lighting | seams, shadows, folds | PatternField, nav border, footer |
| 9 | `textures/border-band.png` | 3000×240, horizontally tileable | yes (real alpha) | Horizontal block-print border band of dots, triangles, leaves and a small walking zebu cow-and-calf motif, indigo, madder and gold, isolated on transparent background | text, cartoon cow face | Divider / ornament band |
| 10 | `ghee/festive-world.png` | 3200×2000 + 1400×2400 | no | Festive Rajasthani still-life setting without products: brass thalis, marigold garlands and folded block-printed textiles around three empty arch-shaped niches, warm marigold and brass light, abundant edges, calm empty centre | jars, bottles, diyas with fire hazard, deities, people | 12 Ghee · /ghee/festive |
| 11 | `heritage/cartouche-field.png` | 3200×2000 | no | Layered block-print panels of cows, leaves and sun motifs on sandstone cotton with an empty plain cartouche in the centre, gold double rules, deep indigo frame | text in cartouche, mandala | 10 Heritage |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/02_maximalism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/maximalism/
- [ ] Pattern-off 'Calm view' toggle hides every PatternField layer and the page stays complete
- [ ] No text sits directly on pattern; max four pattern colours per viewport
