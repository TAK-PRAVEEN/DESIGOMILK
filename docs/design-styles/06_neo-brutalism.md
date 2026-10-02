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
| `--nb-root` | `#C7302B` | ROOT 14 block (red brightened for flat blocks, derived from `#B3202A`; was `#E2413A`, which failed text contrast with both milk 3.8:1 and ink 4.3:1 — milk on `#C7302B` is 4.9:1) |
| `--nb-card` | `#FBF8F1` | Outlined card fill (added in the 2026-10-03 audit) |
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
- **ROOT 14** — `#C7302B` block, "14", earth-brown stickers.
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
| 1 | Tokens & type | Outline/shadow system | Tokens, Space Grotesk/Space Mono/Yatra One | Text on every block ≥ 4.5:1 (milk on `#C7302B` 4.9:1; ink on `#F2B233` 9.4:1) | Brand colours | 2 |
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

## 12. Build-ready spec sheet

> Audit 2026-10-03: section 12 was missing and has been added. Fixed in the body: ROOT 14 block `#E2413A` failed text contrast with both milk (3.8:1) and ink (4.3:1), so it is now `#C7302B` (milk 4.9:1); a card surface token `#FBF8F1` was added. Fonts already open-licence (Space Grotesk, Archivo Black, Yatra One, Inter Tight, Space Mono). Added press-physics states, cursor map, motion tokens and 10 image prompts.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#1E7A68` | DESIGO® green (`--nb-green`): primary buttons, links, active tags | 4.7:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk label on green | 4.7:1 on primary |
| Secondary | `--c-secondary` | `#F2B233` | sticker yellow (`--nb-base`): secondary button fill, PENDING/RETURNABLE stickers, highlight blocks — ink text only | 1.7:1 on bg; ink on it 9.4:1 |
| Accent | `--c-accent` | `#BFE6D6` | mint (`--nb-mint`): soft blocks, selected states, focus halo behind the 3 px ring | 1.2:1 on bg; decorative; ink on mint 13.0:1 |
| Background | `--c-bg` | `#F7F4EC` | milk ground (`--nb-ground`), optional 1 px dot grid every 24 px at 10% ink | text 16.1:1 |
| Surface | `--c-surface` | `#FBF8F1` | outlined card fill (new token `--nb-card`) | text on surface 16.7:1 |
| Text | `--c-text` | `#171918` | ink (`--nb-ink`) — also outlines and hard shadows | 16.1:1 on bg |
| Muted text | `--c-text-muted` | `#4A4D4A` | captions, helper text | 7.8:1 on bg |
| Line | `--c-line` | `#171918` | 3 px ink outline on every block (2 px on mobile); hard shadow `6px 6px 0 #171918` | 16.1:1 on bg |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1F5C45` / `#5A3304` / `#C7302B` | ok = green tag (verified only); pending = dashed-outline tag + dotted underline, `PENDING` sticker in yellow with ink; DEMO = red `#C7302B` sticker with milk text, rotated ≤ 3° | ok 7.1:1 · pending 10.0:1 · demo 4.9:1 on bg |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses it |
|---|---|---|---|---|---|
| MASTER 26 | V1+ · green cap | `#1F5C45` | `#0A2A20` | `#BFE6D6` | green poster block, mint inner panel, '26' outlined numeral, leaf stickers (not counted) |
| ROOT 14 | V1 · red cap | `#C7302B` | `#4A0A0F` | `#F3D9D6` | red block (derived from `#B3202A`, brightened only as far as milk text still passes), '14', earth-brown stickers |
| BASE 3 | V2 · amber cap | `#F2B233` | `#5A3304` | `#F8E4C2` | yellow block with ink text, '3', sun sticker |
| ESSENTIAL | V3 · ivory cap | `#E9DCC6` | `#4D4130` | `#F4EDE2` | ivory block with ink text, 'E', milk-drop sticker |

Dark-chapter inversion: forest sections (06 Traceability board, 11 Technology keys) swap `--c-bg` → `#0B3B32`, `--c-text` → `#F7F4EC`, outlines and hard shadows stay ink `#171918` but sit on milk-filled cards so they remain visible; the primary button becomes mint `#BFE6D6` with ink text.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Space Grotesk (variable) | `@fontsource-variable/space-grotesk` · Google Fonts | 700 | clamp(3rem, 10vw, 10rem) | 0.92 | -0.03em | UPPERCASE for hero, Sentence elsewhere |
| Headline H1–H2 | Space Grotesk (variable) | `@fontsource-variable/space-grotesk` | 700 / 600 | H1 clamp(2.4rem, 5vw, 4.5rem) · H2 clamp(1.6rem, 3vw, 2.5rem) | 1.0 / 1.1 | -0.02em | Sentence |
| Body | Inter Tight (variable) | `@fontsource-variable/inter-tight` | 500 | clamp(1rem, 0.95rem + 0.2vw, 1.125rem) | 1.55 | 0 | Sentence |
| Label / UI | Space Mono | `@fontsource/space-mono` · Google Fonts | 700 | 0.75rem | 1.2 | +0.08em | UPPERCASE |
| Data / mono | Space Mono | `@fontsource/space-mono` | 400 / 700 | 0.875rem | 1.5 | 0 | As data |
| Devanagari (optional) | Yatra One | `@fontsource/yatra-one` · Google Fonts | 400 | clamp(1.5rem, 4vw, 4rem) — single words ('वापसी') | 1.1 | 0 | — |

Licence: Space Grotesk, Archivo Black (poster alternative, `@fontsource/archivo-black`), Yatra One, Inter Tight and Space Mono are SIL OFL 1.1. Pairing: one quirky grotesk for voice, Inter Tight for reading, Space Mono for stickers; Yatra One adds the truck-art accent in one word at a time.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 24 px gutters, 5vw margins, max-width 1440 px; block layout like a pin-board — cards of 4/6/8 columns with 24 px gaps. Mobile: 4 columns, 16 px margins.
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 px; ≥ 32 px between blocks (white space stops clutter).
- **Radius:** `sm 8px` (tags), `md 12px` (blocks, buttons), `lg 20px` (poster blocks); 'harder' variant uses 0.
- **Borders:** 3 px ink everywhere (2 px mobile); pending tags dashed 3 px.
- **Elevation:** hard offset shadows only — `6px 6px 0 #171918` (4 px mobile), hover `8px 8px 0`, active `0 0 0`.
- **Texture/overlay:** none on surfaces; optional dot grid; stickers with hard edges. Max three block colours per viewport.

### 12.4 Components
States are listed as default · hover · focus-visible · active · disabled · loading. Focus-visible is never removed.

- **Primary button** — anatomy: green `#1E7A68` block, 3 px ink outline, radius 12 px, hard shadow 6 px, milk Space Grotesk 700 label + thick arrow; 52 px tall (56 mobile, full-width), padding 0 28 px · hover translate(-2px,-2px) + shadow 8 px (160 ms) · focus-visible 3 px ink ring + 3 px mint `#BFE6D6` offset halo · active translate(6px,6px), shadow 0 (120 ms) · disabled `#E9DCC6` fill, dashed outline, no shadow, ink 55% · loading a chunky 3-segment bar fills in steps inside the button, `aria-busy`.
- **Secondary button** — yellow `#F2B233` block, ink label, same outline/shadow/sizes; states identical to primary; on forest grounds: mint block with ink label.
- **Text / arrow link** — ink label with 3 px green underline offset 4 px + thick arrow; hover the underline becomes a full mint highlight block behind the text, arrow travels 6 px; focus-visible 3 px ink ring; visited unchanged.
- **Icon button (incl. menu)** — 48×48 px square, radius 12, 3 px outline, 4 px hard shadow, 24 px chunky icon (2.5 px stroke, block fill); menu = three thick bars; states as primary (press into shadow); `aria-label`, `aria-expanded`.
- **Navigation bar** — outlined bar: 64 px milk block with 3 px ink bottom border, logo left, links as Space Mono uppercase tags, Reserve as primary button with press physics; current page tag filled mint. Mobile: logo + icon menu; menu = full-screen yellow block with outlined link cards stacked. The logo sits outside any block outline. Logo: the DESIGO® header logo is the black wordmark drawn as SVG strokes that write and un-write in an infinite loop (4.6 s cycle: write 0–1.2 s · hold to 3.0 s · un-write 3.0–4.2 s · rest to 4.6 s, as built in `DesigoLogo.tsx`); charcoal `#171918` on light grounds, white (milk `#F7F4EC`) on dark grounds; one colour only — never gilded, tinted, outlined, patterned or recoloured by this style; no hover trigger; reduced motion shows the static wordmark; the logo is a link to / with `aria-label="DESIGO® home"`.
- **Cursor** — system arrow redrawn with a 3 px outline · hover (link): outlined hand · ROTATE (bottle): round sticker `ROTATE` follows at 0.2 lag · EXPLORE: yellow sticker `EXPLORE` · ENTER (variant poster): green sticker `ENTER →` · VIEW (pinned photo): sticker `VIEW` · TRACE (board node): mint sticker `TRACE`. Stickers have 2 px outline + 3 px hard shadow, rotation −3° to 3°. Touch: native cursor; stickers become tap labels on the element.
- **Card / panel / info block** — `OutlinedBlock`: `#FBF8F1` fill (or a block colour), 3 px outline, radius 12, hard shadow 6 px, padding 24–32 px; title Space Grotesk 700 · hover lift −2 px + shadow 8 px · focus-visible ring · active press · disabled no shadow · loading striped skeleton in mint/milk (static under reduced motion).
- **Badge / tag** — Space Mono 700 0.72rem uppercase, 28 px tall, radius 8, 2 px outline: neutral milk; variant = block colour fill; **pending verification** = dashed outline tag `PENDING` + dotted underline on the qualified text + popover; **DEMO · not live data** = red `#C7302B` sticker, milk text, 3 px outline, slight rotation, never a joke.
- **Input + form field** — big outlined input: 64 px, 3 px outline, radius 12, inset none, Space Mono 1.125rem, placeholder `DSG-BTL-000001-3 (sample format)`; chunky `TRACE` primary button attached right (stacked on mobile) · hover shadow 4 px appears · focus-visible 3 px green ring + mint halo · invalid red `#C7302B` outline + sticker message · disabled `#E9DCC6` · loading button bar; results slide in as outlined cards with a DEMO sticker.
- **Divider / ornament** — 3 px ink rule; or a row of 8 px ink dots; truck-art border strip (image 10) once per page at most.
- **Section header** — chapter number in an outlined circle (Space Mono 700), title Space Grotesk 700, one optional Yatra One word; a 3 px rule runs from the circle to the edge.
- **Product info block** — outlined spec card: V-code Space Mono, name Space Grotesk 700, numeral outlined, line, size `1 L glass · 900 g` with dashed pending tag, yellow sticker `PRICE PENDING` until approved, descriptor tags (dashed when pending).
- **Bottle stage** — the bottle stays photographic (never outlined) on a flat colour plinth block (outlined, hard shadow); `RETURNABLE GLASS` sticker beside (not on) it; float ±6 px / 5 s, tilt ±5°; plinth shadow stays hard; with 360 frames a chunky outlined dial (real `<input type=range>`) turns in sync.
- **Trace node / timeline step** — outlined circle node 40 px on a forest board, joined by 6 px ink lines; states upcoming (milk fill) · active (mint fill, card pinned open) · visited (green fill, milk numeral) · hover lift + shadow · focus-visible ring · press; DEMO sticker on the board.

### 12.5 Iconography & illustration
- **Icons:** chunky 2.5 px outline icons on a 24 px grid, rounded 4 px corners, filled with one block colour; thick graphic arrows.
- **Illustration:** flat, thick-outlined (3 px) truck-art-inspired illustrations for campaign moments (return loop, milk wave); a commissioned Jodhpur sign painter is the premium route.
- **Photo treatment:** real photos cropped into outlined frames with hard shadows, pinned at −3° to 3°; product photography is never outlined.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.2,.9,.3,1)` | snappy, no overshoot (design-system rule) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | colour-block page transition |
| `--dur-micro` | `120ms` | press into shadow |
| `--dur-hover` | `160ms` | hover lift |
| `--dur-reveal` | `240ms` | sticker drop, block slide-in (40 px, 60 ms stagger) |
| `--dur-scene` | `400ms` | full-screen colour block transition |

No smooth-scroll hijack; pinned sections only for the bottle. Reduced motion: no press translation (colour change instead), no sticker drops, no slide-ins; logo static.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

Flat, outlined illustration backdrops only; the bottle and jar are composited in code and never outlined.

**Tail prompt (append to every prompt):** *flat neo-brutalist poster illustration with thick 3 px ink outlines and hard offset shadows, inspired by Rajasthani truck art and hand-painted shop signs, palette milk #F7F4EC, ink #171918, green #1E7A68, mint #BFE6D6, yellow #F2B233, red #C7302B, ivory #E9DCC6, crisp, friendly, uncluttered, no text, no watermark, no logo, no letters*

**Base negative prompt (prepend to every negative prompt):** text, letters, words, numbers, typography, logo, watermark, signature, label, brand mark, milk bottle, glass bottle, ghee jar, product packaging, Holstein cow, Jersey cow, cartoon cow face, anthropomorphic animal, people's faces, religious idols, deity imagery, halo, glowing body, medical imagery, plastic sheen, oversaturated neon, lowres, blurry, jpeg artefacts, distorted anatomy, extra limbs, checkerboard background

| # | File path (web/public/desigo/styles/neo-brutalism/...) | Size / ratio | Transparent? | Prompt | Negative prompt (+ base) | Used in |
|---|---|---|---|---|---|---|
| 1 | `hero.png` | 3200×2000 (16:10) | no | Flat poster backdrop of a simple sunrise: outlined yellow sun with thick rays behind gentle outlined dunes, mint sky, a plain outlined plinth block empty in the centre | people, vehicles, clutter, gradients | 01 Hero, /return |
| 2 | `hero-portrait.png` | 1400×2400 (7:12) | no | Vertical flat poster: outlined sun and rays at the top, outlined dunes at the bottom, an empty outlined plinth block in the centre | people, clutter | 01 Hero mobile |
| 3 | `worlds/master-26.png` | 3200×2000 + 1400×2400 | no | Flat deep green #1F5C45 poster block with a mint inner panel and a scatter of thick-outlined generic leaf stickers around the edges, empty centre | counted leaves in rows, faces | 08 Four milks · /milk/master-26 |
| 4 | `worlds/root-14.png` | 3200×2000 + 1400×2400 | no | Flat red #C7302B poster block with thick-outlined earth-clod and root stickers around the edges, empty centre | gore, faces | 08 Four milks · /milk/root-14 |
| 5 | `worlds/base-3.png` | 3200×2000 + 1400×2400 | no | Flat yellow #F2B233 poster block with a thick-outlined sun sticker and small wheat-ear stickers around the edges, empty centre | sun with face | 08 Four milks · /milk/base-3 |
| 6 | `worlds/essential.png` | 3200×2000 + 1400×2400 | no | Flat ivory #E9DCC6 poster block with two simple thick-outlined milk-drop stickers in the corners, very sparse, empty centre | clutter | 08 Four milks · /milk/essential |
| 7 | `journey/return-loop.png` | 2400×2400 | yes (real alpha) | Four flat thick-outlined illustrations arranged in a circle with thick arrows between them: an empty wooden crate on a doorstep at dawn, hands rinsing under a tap, a delivery bicycle with an empty carrier, a clean stainless washing rack, isolated on transparent background | bottles, glass, faces, text | /return 'The glass comes back' |
| 8 | `trace/board.png` | 3600×2000 | no | Flat deep forest green #0B3B32 board with a faint mint dot grid and eight empty thick-outlined milk-white circles connected by thick ink lines in a winding path | labels, icons inside circles | 06 Traceability board |
| 9 | `textures/dot-grid.png` | 1024×1024, seamless | yes (real alpha) | Seamless tileable grid of tiny ink dots every 24 pixels at 10 percent opacity on transparent background | lines, noise | page ground overlay |
| 10 | `textures/truck-art-border.png` | 3000×240, horizontally tileable | yes (real alpha) | Horizontal truck-art inspired border band of thick-outlined flowers, leaves and small triangles in green, yellow, red and mint, isolated on transparent background | eyes, faces, text, chains | Divider / ornament (once per page) |

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/06_neo-brutalism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/neo-brutalism/
- [ ] Outlines 3 px and shadows 6 px are identical everywhere (2 px / 4 px on mobile)
- [ ] Product photography is never outlined; perceived-price check with core customers before any use beyond campaigns
