# 06 — Neo-Brutalism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 2 / 5 for the whole site** · Best used for: the "Glass comes back" bottle-return campaign page and a younger-audience social/referral microsite; possibly the /reserve flow's playful confirmation step.

---

## 1. Style essence

Neo-brutalism is brutalism made friendly: thick black outlines (2–4px), hard offset shadows with no blur, flat saturated colour blocks, chunky grotesk type, visible UI structure, and playful interactions where components "press down" into their shadows. It is honest and direct like brutalism, but warm, optimistic and highly usable.

Origins: Gumroad's 2021 redesign, Figma community files, and a wave of start-up and creator-economy brands reacting to soft gradient SaaS design.

Three reference points:
1. **Gumroad (2021 →)** — pink/yellow blocks, black outlines, hard shadows, confident type.
2. **Figma Config event sites** — colourful, outlined, playful yet systematic.
3. **Indian truck art and hand-painted shop signs (Rajasthan highways)** — bold outlines, flat colour, painted lettering — the local cousin of neo-brutalism.

## 2. Why it fits DESIGO® (and where it fights)

Some DESIGO® messages are practical and behavioural: *return the glass*, *reserve your morning delivery*, *scan the QR*. Neo-brutalism makes actions obvious and joyful, and its hard shadows and outlines suit a returnable-bottle loop that wants to feel like a simple, fun habit. Truck-art lettering gives it a Rajasthani accent rather than a Silicon Valley one.

Where it fights: the brief is "luxury editorial × Apple launch". Neo-brutalism is start-up casual; next to premium ghee priced in the thousands (pending) or a variant like MASTER 26, it can read as cheap or juvenile. Outlines also compete with the glass bottle's own transparency and light.

**Fit score: 2 / 5 for the whole site.** Recommendation: keep it off the flagship site; use it for a campaign page (`/return` — "The glass comes back") explaining the returnable loop, and possibly for social/referral landing pages. The plan below still describes a complete neo-brutal DESIGO® site.

## 3. Art direction

### Palette — "milk, ink and caps"
| Token | Hex | Role |
|---|---|---|
| `--nb-ground` | `#F7F4EC` | Milk ground |
| `--nb-ink` | `#171918` | Outlines (3px), hard shadows, text |
| `--nb-green` | `#1E7A68` | Primary buttons, links |
| `--nb-mint` | `#BFE6D6` | Soft green block |
| `--nb-master` | `#1F5C45` | MASTER 26 blocks |
| `--nb-root` | `#E2413A` | ROOT 14 block (red brightened for flat-block legibility; derived from `#B3202A`) |
| `--nb-base` | `#F2B233` | BASE 3 block (derived from `#E89A1C`) |
| `--nb-ess` | `#E9DCC6` | ESSENTIAL block (derived from `#CDB89A`) |
| `--nb-gold` | `#E6C27A` | Ghee block (brightened `#C8A96B`) |
| `--nb-forest` | `#0B3B32` | Dark sections |

Rule: blocks are flat; every block has a 3px ink outline and a hard `6px 6px 0 #171918` shadow; never more than three block colours per viewport.

### Typography
- Display: **Space Grotesk** 700 (quirky, friendly grotesk) — headline sizes 3–10rem, tight −0.03em.
- Alternative display for posters: **Archivo Black**.
- Truck-art accent: **Yatra One** (Devanagari + Latin, painted-sign flavour) for single words and Hindi labels ("वापसी" — return).
- Text: **Inter Tight** 500; Data: **Space Mono** 400 (matches Space Grotesk).
- Sticker labels: uppercase Space Mono, 12px, +0.08em, on coloured tag blocks.

### Texture
None on surfaces; optional dot-grid ground (1px dots every 24px at 10% ink). Stickers and stamps with hard edges.

### Imagery
Real photos cropped into outlined frames with hard shadows (like printed photos stuck on a board). Cut-out bottle with a 3px outline sticker edge *option* for campaign assets only — on the product pages the bottle stays unoutlined.

### Iconography
Chunky 2.5px outline icons, filled with a block colour, rounded corners 4px; arrows are thick and graphic.

### Grid
12-column, 24px gutters, 5vw margins; but layout is block-based — cards of 4/6/8 columns with 24px gaps, like a pin-board. Corner radius 12px on blocks (or 0 in the "harder" variant), outlines always 3px. Mobile: 4 columns, outlines 2px, shadows 4px.

## 4. Motion & interaction language

- Snappy, tactile: 160–240ms, `cubic-bezier(.3,1.4,.5,1)` is tempting but overshoot is banned by the design system — use `cubic-bezier(.2,.9,.3,1)` with no overshoot.
- Buttons press: hover lifts (translate −2px, shadow 8px), active presses into the shadow (translate 6px, shadow 0) — 120ms.
- Scroll: blocks slide in from 40px with a 60ms stagger; no smooth scroll hijack; pinned sections only for the bottle.
- Cursor: system cursor with a custom 3px-outlined arrow; **link** → outlined hand; **bottle** → round sticker "DRAG" / "TILT" follows at 0.2 lag; touch: off.
- Stickers: "PENDING", "DEMO", "RETURNABLE" stickers drop onto content with a tiny rotation (−3° to 3°) and settle — 240ms.
- Page transitions: a full-screen colour block (next page's colour) slides in with ink outline, 400ms.

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands on a flat colour plinth block (outlined, hard shadow) — the plinth is graphic, the bottle stays photographic, which keeps the product premium. A "RETURNABLE GLASS" sticker sits beside it (not on it). Float ±6px / 5s; tilt ±5°; the plinth shadow stays hard.

**Rotation.** Single render: ±18° tilt. With 360 frames: drag rotates; a chunky outlined dial (0–360°) beside the plinth turns in sync and can be dragged itself — a playful, accessible control (it's a real `<input type="range">` underneath).

**Variant worlds** — four poster blocks:
- **MASTER 26** — deep green `#1F5C45` block with mint `#BFE6D6` inner panel, "26" in Space Grotesk 700 outlined text, herb-leaf stickers.
- **ROOT 14** — `#E2413A` block, "14", earth-brown stickers.
- **BASE 3** — `#F2B233` block, "3", sun sticker.
- **ESSENTIAL** — `#E9DCC6` block, "E", simple milk-drop sticker.
Info: outlined spec card with V-code, name, line, descriptor tags (pending tags have a dashed outline), price sticker reading "PRICE PENDING" until approved.

## 6. Page-by-page treatment

### Home
| # | Chapter | Neo-brutal treatment |
|---|---|---|
| 01 | Hero | "MILK FROM THE SOURCE." in Space Grotesk 700; bottle on plinth; two outlined buttons with hard shadows. |
| 02 | Bottle becomes the story | Six words as six outlined tags orbiting the pinned bottle; clicking a tag pins its explanation card. |
| 03 | Cow to bottle | Seven outlined station cards on a horizontal rail with thick arrows between them. |
| 04 | Where it begins | Farm photos as outlined "printed photos" pinned at slight angles. |
| 05 | Breeds | Breed cards with region tag and "PENDING" sticker. |
| 06 | Traceability | Forest board; nodes as outlined circles connected by thick lines; card panel on click. DEMO sticker. |
| 07 | Quality | 16 parameters as a grid of outlined chips; values "PENDING LAB CONFIRMATION". |
| 08 | Four milks | Four poster blocks. |
| 09 | Milk as material | A flat illustrated milk wave (thick outline) rolling across — no fluid sim. |
| 10 | Heritage | Truck-art-inspired lettering panel with one sentence; outlined cow illustration. |
| 11 | Technology | Seven verbs as seven outlined keys on a "keyboard" row; pressing one shows its description. |
| 12 | Ghee | Gold block; three jar cards with "MADE FROM ROOT 14 MILK"-style tags. |
| 13 | Trace your milk | Big outlined input with a chunky "TRACE" button; result cards slide in; DEMO sticker. |
| 14 | Story | Timeline of outlined date tags; verified only. |
| 15 | Final CTA | "Know where your milk comes from." Big green button; footer as outlined blocks. |

### Campaign page: `/return` — "The glass comes back"
A four-step loop drawn as outlined cards in a circle: **Delivered cold → Enjoyed → Rinsed & left out → Collected & cleaned → Refilled**. A counter shows only an approved figure (otherwise hidden). FAQ in outlined accordions. CTA: reserve.

### Inner pages
- **/milk** — four poster blocks in a 2 × 2 grid. **/milk/[variant]** — poster world + dial viewer + spec card.
- **/ghee** — gold page, process as five outlined steps. **/origin** — pinned photo board, breed cards.
- **/trace** — board map + demo. **/technology** — keyboard verbs.
- **/about** — tag timeline. **/reserve** — stepper form with chunky steps and a satisfying press on "Reserve".

## 7. Component variants

`OutlinedBlock` · `HardShadowButton` (press physics) · `Plinth` · `DialViewer` (360 + range input) · `Sticker` (PENDING / DEMO / RETURNABLE) · `TagOrbit` · `StationRail` · `PhotoPin` · `BoardTraceMap` · `ChipGrid16` · `PosterVariant` ×4 · `KeyboardVerbs` · `ReturnLoop` · `StepperForm` · `ClaimText` (dashed outline for pending) · `AssetSlot` (outlined empty card with sticker "ASSET NEEDED").

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Outline/shadow system | Tokens, Space Grotesk/Space Mono/Yatra One | Text on every block ≥ 4.5:1 (white on `#E2413A` checked; ink on `#F2B233`) | Brand colours | 2 |
| 2 | Shell | Nav, buttons, cursor | Outlined nav bar, press buttons, colour-block transition | Press physics 120ms; focus ring 3px green offset | Wordmark | 3 |
| 3 | Hero | Bottle on plinth | Plinth, sticker, tilt | Bottle itself never outlined | Renders | 2 |
| 4 | Story sequence | Tag orbit | Pinned bottle, clickable tags | Tags are buttons; reduced motion = list | — | 3 |
| 5 | Cow → bottle | Station rail | 7 cards, arrows | Vertical on mobile | B4 | 2 |
| 6 | Origin | Photo board | PhotoPins | Photos uncropped faces | B1, B2 | 2 |
| 7 | Breeds | Breed cards | Cards + stickers | Pending visible | B3, approval | 2 |
| 8 | Trace map | Board map | Nodes, lines, cards | Keyboard; DEMO sticker | Trace wording | 3 |
| 9 | Quality | Chip grid | 16 chips | No invented values | Lab approval | 2 |
| 10 | Four worlds + 360 | Posters + dial | 4 posters, DialViewer | Dial = native range, synced | **360 sequences (A)** | 4 |
| 11 | Heritage | Truck-art panel | Lettering, cow illustration | Lettering commissioned, not a font gimmick | Illustrator/sign-painter (optional) | 3 |
| 12 | Technology | Keyboard verbs | 7 keys | Keys operable by keyboard too | — | 2 |
| 13 | Ghee | Gold jar cards | 3 cards | Mapping correct | Jar cutout, prices | 2 |
| 14 | Trace demo | Chunky input | TraceYourMilk | Demo flagged; errors friendly | — | 2 |
| 15 | /milk pages | Posters + variant pages | Pages | Same press physics across | A, pricing | 3 |
| 16 | /origin, /trace, /technology + /return | Inner + campaign | Board pages, ReturnLoop | Return copy approved; no invented stats | Return process confirmation | 5 |
| 17 | /about, /ghee, /reserve | Remaining | Tag timeline, stepper form | Stepper accessible (aria-current) | Milestones | 4 |
| 18 | Mobile pass | Thumb-first | 2px outlines, 4px shadows, full-width buttons | Tap ≥ 48px | — | 3 |
| 19 | A11y + reduced motion | Robust | No sticker drops/presses in reduced motion | axe clean | — | 2 |
| 20 | Perf, QA, handover | Ship | Docs | LCP ≤ 1.8s, INP ≤ 150ms | Approvals | 3 |

Total ≈ 54 days.

## 9. Assets needed from DESIGO®

1. 360 sequences (A) and cut-out renders.
2. Confirmation of the bottle-return process (how glass is collected, cleaned, refilled) — the campaign page depends on it.
3. Optionally, a Jodhpur sign-painter or truck-art artist for hand-lettered headlines (authentic, ownable).
4. Real photos B1–B4; approvals for prices, breeds, trace wording.

## 10. Performance, accessibility and mobile

- Performance: light — flat CSS, no WebGL; shadows are box-shadows without blur (cheap).
- Accessibility: strong affordances are a plus; check text contrast on bright blocks (ink on yellow/mint; milk on green/red); never rely on block colour alone — every variant also carries its name and numeral.
- Reduced motion: no press translation (colour change instead), no sticker drops.
- Mobile: excellent fit — thumb-sized blocks, clear buttons; keep shadows 4px so cards don't feel heavy.

## 11. Risks and premium guardrails

Risks: looking juvenile or like a SaaS start-up template; trivialising a premium food; outlines clashing with glass; dating quickly.

**Premium guardrails**
1. Never outline the product photography — the bottle and jar remain photographic and well lit.
2. Use the brand's own colours, slightly brightened for flat blocks — no random pink/purple.
3. Typography with character but restraint: one display face, one text face.
4. Local craft over meme culture: truck-art lettering and painted signs, not emoji or memes.
5. Keep it to behavioural campaigns (return, reserve, referral) where playfulness helps.
6. No exaggerated copy ("MOST AMAZING MILK EVER!!") — tone stays calm and factual.
7. Pending and DEMO stickers are informative, never jokes.
8. Shadows and outlines are consistent everywhere (3px / 6px) — inconsistency is what makes it cheap.
9. Generous white space between blocks — neo-brutalism collapses into clutter without it.
10. Test with core customers; if it lowers perceived price, confine it to social campaigns.
