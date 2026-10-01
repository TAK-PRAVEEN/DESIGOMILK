# 01 — Minimalism · DESIGO® style build plan

Status: proposal v0.1 · 2026-10-01 · **Fit 5 / 5** · Best used for: the whole site's base system (hero, product worlds, final CTA, all inner-page shells).

---

## 1. Style essence

Minimalism removes everything that does not carry meaning, so that what remains — one object, one sentence, one action — carries all of it. On the web this means generous negative space, a strict and small type scale, one accent colour at a time, flat surfaces, and motion that is slow and caused by the user rather than decorative.

Origins: Bauhaus reduction, Dieter Rams' "less, but better", Japanese *ma* (meaningful emptiness), and 2000s–2020s product launch pages.

Three reference points:
1. **Apple product pages** (AirPods / iPhone launch pages): the product floats in white space, one claim per viewport, scroll drives the object.
2. **Aesop** retail and web: muted palette, editorial serif, products as quiet sculpture.
3. **Muji / Kenya Hara's "White"**: white as a material, not an absence — directly relevant to milk.

## 2. Why it fits DESIGO®

Milk *is* white space. A returnable glass bottle of whole milk on a milk-white ground is already a minimalist composition; the four cap colours become the only saturated notes on the page. Minimalism also fits the "Honest by design" principle: when there is little on the page, every claim is visible and can be checked — which suits a brand whose proposition is traceability.

Where it can fight the brand: Indian agricultural heritage is rich, textured and human. Pure minimalism risks reading as a Scandinavian tech brand that happens to sell milk. The fix is controlled warmth — paper grain, Fraunces italics, real farm photographs given full-bleed room — rather than ornament.

**Fit score: 5 / 5.** This is the natural base language for DESIGO® and already matches design system v0.1 (flat UI, no cards, underline buttons). Other styles in this library should be layered onto a minimal shell, not the other way round.

## 3. Art direction

### Palette
| Token | Hex | Role |
|---|---|---|
| `--milk` | `#F7F4EC` | Default ground (90% of light surfaces) |
| `--milk-2` | `#EFE9DC` | Only raised plane (input fields, active nav underlay) |
| `--paper` | `#EDE4D0` | Heritage chapters 05, 10, 14 |
| `--ink` | `#1E211F` | Body text |
| `--charcoal` | `#171918` | Display text, Trace-your-milk ground |
| `--forest` | `#0B3B32` | Deep transitions, footer, chapter 06 |
| `--green` | `#1E7A68` | The single accent: links, focus rings, progress |
| `--hair` | `#1E211F` at 12% | 1px rules |
| `--gold` | `#C8A96B` | Ghee chapter only |
| Variant worlds | MASTER 26 `#1F5C45` / ROOT 14 `#B3202A` / BASE 3 `#E89A1C` / ESSENTIAL `#CDB89A` | Used as *light fields*, never as text |

Rule: **one accent per viewport.** If a variant colour is present, `--green` steps back to ink.

### Typography
- Display: **Fraunces** variable, opsz 144, weight 300, SOFT 50, tracking −0.035em. Italic 300 for single emphasis words ("*source*").
- Text/UI: **Inter Tight** 400/500; labels 500 uppercase at 0.72rem, +0.18em.
- Data: **JetBrains Mono** 400 for bottle IDs, batch IDs, temperatures.
- Future Hindi: **Noto Serif Devanagari** (display) + **Noto Sans Devanagari** (UI), sized +6% to match x-height.
- Scale: only five sizes per page — mega (9–17rem), display, h2, lead, body/label. No h3–h6 styling.

### Texture
A single 2% monochrome grain (`noise` layer, z 100) on milk and paper surfaces only — enough to stop flat colour feeling digital. No gradients except the milk → forest background interpolation.

### Imagery
Real DESIGO® photographs only, shown full-bleed or at a single large size, never in collages. Colour-graded consistently: lifted blacks, warm whites (+4 warmth), desaturated greens (−10). Product shots are transparent renders on the ground colour with contact shadow.

### Iconography
1.25px monoline icons on a 24px grid, round caps; only where a label cannot do the job (play, close, arrow, drag-to-rotate glyph). The wave-"E" from the wordmark is the only brand glyph.

### Grid
12 columns, 5vw outer margin desktop, 24px gutters; 4 columns, 16px margin on mobile. Text measure ≤ 62ch. The bottle always sits on column 6–7 centre axis or on a golden-section vertical (38.2% / 61.8%). Vertical rhythm: 8px baseline, section padding 24vh top / 16vh bottom.

## 4. Motion & interaction language

- Easing: `--ease-out cubic-bezier(.16,1,.3,1)` for reveals (600ms); `--ease-inout cubic-bezier(.65,0,.35,1)` for scene changes (1200ms); `--ease-milk cubic-bezier(.22,.9,.24,1)` for bottle travel. No bounce, no overshoot.
- Scroll: Lenis smooth scroll (lerp 0.09); GSAP ScrollTrigger with `scrub: 1`. One primary motion per viewport.
- Text reveal: lines (not letters) rise 24px and fade over 600ms, 80ms stagger. Mega headlines use a mask reveal.
- Cursor: 10px ink dot, `mix-blend-mode: difference`. States — **hover link**: grows to 36px ring with 1px stroke; **bottle**: becomes a 64px ring labelled `DRAG` (360 frames present) or `TILT` (single render); **media**: `PLAY`; **disabled/pending**: dotted ring. Hidden on touch.
- Hover: underline buttons — the arrow travels 12px over 240ms; the frame of the primary draws clockwise in 600ms; magnetic ≤ 6px.
- Page transitions: milk veil wipes up (700ms, ease-inout), next page's headline reveals under it. Shared-element transition (View Transitions API) carries the bottle from /milk to /milk/[variant].

## 5. The hero bottle and the four variant worlds

**Presence.** The bottle stands alone at ~62vh tall, centred, on `--milk`, with a two-layer contact shadow (8px blur ellipse at 35% opacity + 60px blur ambient at 8%). Idle float: translateY ±8px on a 6s sine cycle. Pointer tilt: ±6° rotateX/Y at perspective 1200px, a soft sheen gradient follows the pointer across the glass. The shadow stretches opposite the tilt.

**Rotation.** With the current single render, rotation is limited to ±20° skew-and-sheen — never a fake spin. When 72-frame sequences arrive, `Bottle360Viewer` maps scroll progress (chapter 02) or drag (chapter 08, /milk/[variant]) to frame index, with inertia decay 0.92/frame and a hairline "0°–360°" scale below the bottle that fills as it turns.

**Variant worlds** — each is a single colour field, one numeral and one sentence:
- **MASTER 26** — background shifts to `#D9E8DF` (variant light); a giant "26" in Fraunces 200 at 40vw sits behind the bottle in `#1F5C45` at 8% opacity. Deep green cap is the only saturated element.
- **ROOT 14** — `#F3D9D6` field; "14" behind in `#B3202A` at 7%; a single hairline horizon at 62% height (red earth line).
- **BASE 3** — `#F8E4C2` field; "3" in `#E89A1C` at 9%; light comes from the upper left, as at golden hour (a soft radial at 4%).
- **ESSENTIAL** — `#F4EDE2` field, almost milk; the numeral is "E" in `#4D4130` at 6%. The quietest world — intentionally.

The information panel on the right: V-code label, name in display type, the editorial line, descriptors as a plain list with the dotted "pending" underline where applicable, and price rendered only when approved (`₹— · awaiting confirmation` otherwise).

## 6. Page-by-page treatment

### Home
| # | Chapter | Minimal treatment |
|---|---|---|
| 01 | Hero | "Milk from the source." in mega Fraunces, left; bottle centre; two underline CTAs right. Nothing else. |
| 02 | Bottle becomes the story | Bottle pinned; six words appear one at a time at fixed positions on an invisible ellipse, each with one line beneath. Background interpolates milk → forest. |
| 03 | Cow to bottle | Horizontal track of seven stations; each station is one 1.25px line drawing, one word, one sentence. A single green line draws through all. |
| 04 | Where it begins | One full-bleed farm photograph; a single sentence set over the sky area. Parallax limited to 0.9× / 1×. |
| 05 | Breeds | Index list of six names on the left (pending marker each); one portrait slot right; hover a name to swap the portrait. |
| 06 | Traceability | Forest ground; eight dots joined by a 1px line; one pulse travels. Click a node → side sheet of text. "Illustrative journey — not live data." |
| 07 | Quality | "16" at mega size; the 16 screen parameters as a two-column list; readouts `— pending lab confirmation`. |
| 08 | Four milks | Four variant worlds as above, pinned 120vh each; 01–04 index on the left edge. |
| 09 | Milk as material | One slow canvas ribbon, white on milk — almost invisible; acts as a breath between chapters. |
| 10 | Heritage | One italic sentence, a gold hairline, one cow line drawing. |
| 11 | Technology | Charcoal ground, seven verbs set in a single row; each underlines in sequence as you scroll. |
| 12 | Ghee | Ghee jar on `#F3E6C8` field; three grades in a three-column list, each linked to its source milk. |
| 13 | Trace your milk | Single input line on charcoal, prefilled demo ID; DEMO label at label size, always visible. |
| 14 | Story | Horizontal timeline of verified years only; one line per milestone. |
| 15 | Final CTA | "Know where your milk comes from." Bottle returns; two CTAs; footer. |

### Inner pages
- **/milk** — four bottles in a row on milk, equal spacing, names beneath; hover lifts one 12px and dims others to 60%. No cards.
- **/milk/[variant]** — full variant world; Bottle360Viewer occupies the left 7 columns; facts as a definition list right.
- **/ghee** — jar hero, three grades, the bilona process as five numbered sentences.
- **/origin** — photo essay: alternating full-bleed images and single paragraphs.
- **/trace** — the trace map at full height, then the demo lookup.
- **/technology** — the seven verbs as seven full-viewport statements.
- **/about** — timeline + supporters (pending markers) in plain text.
- **/reserve** — a one-column form: variant, size, frequency, address, at 48px input height.

## 7. Component variants

`DesigoNav` (transparent, wordmark left, six links, RESERVE as framed underline; hides on scroll down, returns on up) · `DesigoCursor` (dot/ring states above) · `Bottle` (contact shadow + sheen) · `Bottle360Viewer` (hairline degree scale, no chrome) · `MinimalStatement` (mega line + one sentence) · `JourneyTrack` (line drawings) · `TraceMap` (dots + 1px path) · `QualityPanel` (numeral + list) · `ProductScene` (field + ghost numeral) · `ClaimText` (dotted underline for pending, tooltip with "awaiting confirmation") · `AssetSlot` (1px dashed frame, label in mono naming the missing file) · `UnderlineButton`.

## 8. 20-phase build plan

| # | Phase | Goal | Deliverables | Acceptance criteria | Assets / dependencies | Days |
|---|---|---|---|---|---|---|
| 1 | Tokens & type | Lock minimal tokens | CSS vars, 5-step type scale, Fraunces/Inter Tight/JetBrains Mono subsets | All text ≥ 7:1 or 4.5:1 for labels; fonts ≤ 120 KB total | Brand colour confirmation (C) | 2 |
| 2 | Grid & shell | Nav, footer, cursor, grain | 12/4-col grid, nav hide/show, cursor states, page veil | Nav keyboard-reachable; cursor hidden on touch; no CLS | Vector wordmark (C) | 3 |
| 3 | Hero + bottle | One bottle, one line | Floating bottle, tilt, sheen, contact shadow | 60fps on mid Android; LCP ≤ 2.0s | Current renders; 360 frames optional | 3 |
| 4 | Bottle → story | Pinned six-word orbit | ScrollTrigger timeline, bg interpolation | Each word readable ≥ 1.5s at normal scroll; reduced-motion shows a list | 360 frames to replace skew | 3 |
| 5 | Cow → bottle | Seven-station line journey | 7 SVG drawings, horizontal track, mobile vertical | Line draw synced to scroll ±2%; vertical on < 768px | Hands/collection photo (B4) optional | 4 |
| 6 | Origin / farm | Full-bleed photo chapter | Parallax image, sentence over sky | Image ≤ 220 KB AVIF; text contrast checked on image | Farm landscape (B1), grazing (B2) | 2 |
| 7 | Breeds | Index + portrait | List with hover swap, pending markers | No breed shown as confirmed until approval | Breed portraits (B3), breed list approval | 2 |
| 8 | Trace map | Dot-and-line journey | 8 nodes, pulse, side sheet | Nodes are buttons, Esc closes sheet; DEMO label visible | Approved trace wording (D) | 3 |
| 9 | Quality / lab | Numeral + list | "16", parameter list, pending readouts | No numeric value without approval | Lab values (D), testing photo (B6) | 2 |
| 10 | Four worlds + 360 | Variant fields + viewer | 4 ProductScenes, Bottle360Viewer drag/keys | Drag, arrow keys, inertia; fallback to single render | **360 sequences (A)** | 5 |
| 11 | Heritage | One sentence chapter | Italic statement, gold rule, cow SVG | Reads complete in reduced motion | Approved heritage line | 1 |
| 12 | Technology | Seven verbs | Verb row, sequential underline | Copy uses public vocabulary only | — | 2 |
| 13 | Ghee | Jar + three grades | GheeScene, grade list | Ghee ↔ milk links correct (V1←MASTER 26 etc.) | Ghee jar cutout, ghee prices approval | 2 |
| 14 | Trace demo | Input → journey | TraceYourMilk with demoProvider | `isDemo` always shown; invalid ID handled | — | 3 |
| 15 | /milk, /milk/[variant] | Product pages | Lineup row, variant page, shared-element transition | Transition falls back gracefully in Safari | 360 sequences, pricing approval | 4 |
| 16 | /origin, /trace, /technology | Inner editorial pages | Photo essay, full map, verb statements | Each page ≤ 1.5 MB first load | Photos B1–B8 | 4 |
| 17 | /about, /ghee, /reserve | Remaining pages | Timeline, ghee page, one-column form | Form validates, labels persist, no fake checkout | Milestone approvals | 4 |
| 18 | Mobile pass | Mobile composed separately | Centred bottle, vertical journey/map, thumb CTAs | 360px width no overflow; tap targets ≥ 44px | — | 3 |
| 19 | A11y + reduced motion | WCAG 2.2 AA | Focus rings (green 2px offset 3px), static fallbacks | axe clean; full keyboard path; reduced motion = readable page | — | 3 |
| 20 | Perf, QA, handover | Ship-ready | Lighthouse runs, image pipeline, docs | LCP ≤ 2.0s, INP ≤ 150ms, CLS ≤ 0.05 on 4G | All approvals cleared | 4 |

Total ≈ 59 days (one designer-developer pair).

## 9. Assets needed from DESIGO®

1. 72-frame 360° sequences per variant (A) — the single most important asset in this style, because the bottle has nothing to hide behind.
2. Vector wordmark and confirmed cap colours (C).
3. One exceptional farm landscape at golden hour (B1) — minimalism needs *one* great image rather than many average ones.
4. Breed portraits shot on the same background (B3).
5. Ghee jar cutout on transparent ground.
6. Approvals: prices, pack sizes, herb counts, breed list, trace wording.

## 10. Performance, accessibility and mobile

- Performance: little DOM and few images make this the fastest style. Budget: ≤ 170 KB JS on home (GSAP + Lenis + viewer), 360 frames lazy-loaded per variant (preload first 8, then idle-fetch), AVIF/WebP with `fetchpriority="high"` only on the hero render.
- Accessibility: the risk in minimalism is low-contrast "elegant" grey text — banned. Labels ≥ 4.5:1; hairlines are decorative only; never communicate state by colour alone (pending = dotted underline + text).
- Reduced motion: no pinning, no scrub; chapters stack as a normal document; bottle static at 0°.
- Mobile: bottle 48vh, centred; headline below; CTAs stacked full-width as underline buttons; variant worlds become full-screen swipe panels with the viewer driven by horizontal drag only after a tap ("Tap to rotate") to avoid scroll hijack.

## 11. Risks and premium guardrails

Risks: looking empty rather than intentional; looking like a generic tech template; losing Indian warmth; under-communicating for first-time visitors.

**Premium guardrails**
1. Empty space must frame something — every viewport has one clear subject (bottle, numeral, sentence or photograph).
2. Warmth through material: paper grain, Fraunces italics, warm milk white — never pure `#FFFFFF`.
3. No stock imagery, no AI fill — an `AssetSlot` is more premium than a fake.
4. One accent per viewport; variant colours as fields, not decorations.
5. No pills, cards, drop-shadowed UI or badges; the only shadow belongs to the bottle.
6. Copy is short and verifiable: "Traceable milk from indigenous Indian cows." — no superlatives, no health language.
7. Motion is slow (≥ 600ms) and always caused by the user; nothing loops except the 6s idle float.
8. Typography does the luxury: tight tracking on display, generous leading (1.55) on body.
9. Pending claims are visibly pending — honesty is part of the aesthetic.
10. Test the page in grayscale: if hierarchy collapses, the layout relies on colour and must be fixed.
