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
- Data: **JetBrains Mono** 400 for bottle IDs, batch IDs and (only once confirmed) temperatures.
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
- **/about** — timeline of verified milestones in plain text. Supporters are omitted until written evidence is on file (they are blocked in `desigo.ts`, KB Q34).
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

---

## 12. Build-ready spec sheet

> Audit 2026-10-03: solid base system; missing explicit colour roles, ok/pending/demo tokens, radius/shadow tokens, per-component states, a motion-token table and all AI image prompts (had none). Added all (11 prompts with negatives). Fixed: /about "supporters (pending markers)" → supporters omitted until written evidence exists (they are blocked in `desigo.ts`); temperatures in mono only when confirmed. Fonts OFL.

### 12.1 Colour system
| Role | Token | Hex | Use | Contrast note |
|---|---|---|---|---|
| Primary | `--c-primary` | `#171918` | charcoal: display type, framed primary CTA, RESERVE in nav, Trace-your-milk ground | 16.1:1 on bg |
| Primary ink | `--c-on-primary` | `#F7F4EC` | milk on charcoal (pressed CTA, trace chapter) | 16.1:1 on primary |
| Secondary | `--c-secondary` | `#0B3B32` | forest: deep transitions, footer, chapter 06 | 11.3:1 on bg |
| Accent | `--c-accent` | `#1E7A68` | the single accent: links, focus rings, progress; steps back to ink when a variant colour is present | 4.7:1 on bg |
| Background | `--c-bg` | `#F7F4EC` | milk ground (90% of light surfaces), never `#FFFFFF` |  |
| Surface | `--c-surface` | `#EFE9DC` | the only raised plane: inputs, active nav underlay | text on surface 13.4:1 |
| Text | `--c-text` | `#1E211F` | body text | 14.8:1 on bg |
| Muted text | `--c-text-muted` | `#5E625C` | labels, captions (no low-contrast 'elegant grey') | 5.7:1 on bg |
| Line | `--c-line` | `rgba(30,33,31,.12)` | 1 px hairlines (decorative only) | decorative only |
| Success / Pending / Demo | `--c-ok` / `--c-pending` / `--c-demo` | `#1E7A68` / `#7A5B37` / `#171918` | verified tick · dotted underline + "awaiting confirmation" tooltip text · DEMO label at label size, 1 px frame | ok 4.7:1 · pending 5.7:1 · demo 16.1:1 on bg; state is never colour-only (text + dotted underline / badge label) |
| Style extra | `--paper` | `#EDE4D0` | heritage chapters 05, 10, 14 | |
| Style extra | `--gold` | `#C8A96B` | ghee chapter only | |
| Style extra | `--ghee-field` | `#F3E6C8` | ghee chapter ground | |

Variant worlds in this style: MASTER 26 · ROOT 14 · BASE 3 · ESSENTIAL (base / deep / light hex for each).

| Variant | Code | Base | Deep | Light | How the world uses them |
|---|---|---|---|---|---|
| MASTER 26 | V1+ | `#1F5C45` | `#0A2A20` | `#D9E8DF` | field = light `#D9E8DF`; ghost numeral "26" (Fraunces 200, 40vw) in base at 8%; deep cap is the only saturated element |
| ROOT 14 | V1 | `#B3202A` | `#4A0A0F` | `#F3D9D6` | field = light; "14" in base at 7%; one hairline horizon at 62% height |
| BASE 3 | V2 | `#E89A1C` | `#5A3304` | `#F8E4C2` | field = light; "3" in base at 9%; soft radial from upper left at 4% (golden hour) |
| ESSENTIAL | V3 | `#CDB89A` | `#4D4130` | `#F4EDE2` | field = light (almost milk); "E" in deep `#4D4130` at 6%; the quietest world |

**Dark-chapter inversion:** chapters 02 (end), 06, 11, 13 and the footer: `--c-bg` → `#0B3B32` (06, footer) or `#171918` (11, 13), text → `#F7F4EC`, muted → `#B5C7BF` on forest / `#A7ABA5` on charcoal, line → `rgba(247,244,236,.16)`, primary ↔ on-primary (milk frame + label), accent → `#7FE0B8` for focus and progress; logo turns white. Background interpolates milk → forest in ch. 02.

### 12.2 Typography
| Role | Font family | Source (npm @fontsource… / Google Fonts) | Weights / axes | Size (clamp) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| Display / hero | Fraunces | `@fontsource-variable/fraunces` | 300 (200 for ghost numerals) · opsz 144 · SOFT 50; italic 300 for one emphasis word | mega clamp(9rem, 14vw, 17rem) · display clamp(4rem, 8vw, 9rem) | 0.92 | −0.035em | sentence |
| Headline H1–H2 | Fraunces | `@fontsource-variable/fraunces` | 300 · opsz 144 | H2 clamp(1.8rem, 3vw, 3rem); lead clamp(1.15rem, 1.6vw, 1.45rem) (no h3–h6 styling) | 1.1 | −0.02em | sentence |
| Body | Inter Tight | `@fontsource-variable/inter-tight` | 400 / 500 | 1rem, measure ≤ 62ch | 1.55 | 0 | sentence |
| Label / UI | Inter Tight | `@fontsource-variable/inter-tight` | 500 | .72rem | 1.2 | +0.18em | UPPERCASE |
| Data / mono | JetBrains Mono | `@fontsource-variable/jetbrains-mono` | 400 · `tnum` | .85rem; 2rem trace input | 1.3 | 0 | as data |
| Devanagari (optional) | Noto Serif Devanagari (display) · Noto Sans Devanagari (UI) | `@fontsource-variable/noto-serif-devanagari` · `@fontsource-variable/noto-sans-devanagari` | 300–500 | +6% to match x-height | 1.4 | 0 | — |

Licence: Fraunces, Inter Tight, JetBrains Mono, Noto Serif Devanagari and Noto Sans Devanagari are SIL OFL 1.1 via @fontsource, subset to ≤ 120 KB total. Pairing: one warm editorial serif and one neutral grotesk; only five sizes per page.

### 12.3 Layout & surfaces
- **Grid:** 12 columns, 5vw outer margin, 24 px gutters, max 1440 px; 4 columns, 16 px margin on mobile; text ≤ 62ch; the bottle sits on the column 6–7 axis or a golden-section vertical (38.2% / 61.8%)
- **Spacing scale:** 4 px base, 8 px baseline: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128; section padding 24vh top / 16vh bottom
- **Radius scale:** sm 0 (editorial default) · md 2 px · lg 999 px only for cursor and tags; no cards
- **Border style:** 1 px hairlines `--c-line`; primary CTA 1 px frame that draws on hover; AssetSlot 1 px dashed
- **Shadow / elevation:** UI flat; the only shadow belongs to the bottle: two-layer contact shadow (8 px blur ellipse at 35% + 60 px blur ambient at 8%) that stretches opposite the tilt
- **Texture / overlay:** one 2% monochrome grain layer (z 100, pointer-events none) on milk and paper only; no gradients except the milk → forest interpolation

### 12.4 Components
For each: anatomy, sizes, states (default · hover · focus-visible · active · disabled · loading), motion, a11y.

- **Primary button**: underlined label with a travelling arrow inside a 1 px charcoal frame: `EXPLORE THE SOURCE ———→`, Inter Tight 500 caps .72rem +0.18em, 48 px high, padding 0 24 px, radius 0. Hover: frame draws clockwise (600 ms), arrow travels 12 px (240 ms), magnetic ≤ 6 px · focus-visible: 2 px `--c-accent` ring offset 3 px · active: fills charcoal, milk label · disabled: 40%, dotted frame · loading: arrow line extends and retracts (1200 ms). A11y: real `<button>`/`<a>` semantics, 44 px minimum target, visible focus independent of colour.
- **Secondary button**: the same underline + arrow without the frame. Hover: arrow 12 px, underline 2 px · focus-visible: accent ring · active: ink → accent · disabled: 40%, no arrow · loading: underline sweeps.
- **Text / arrow link**: Inter Tight 400 with 1 px underline (offset 4 px) and optional `→`; hover: underline grows 0 → 100% (240 ms), arrow 12 px · focus-visible: accent ring · active: accent colour · disabled: muted · loading: n/a.
- **Icon button** (incl. menu): 40 px (44 px hit) transparent, 1.25 px monoline icon on a 24 px grid (play, close, arrow, drag-to-rotate glyph, menu = two hairlines). Hover: 36 px hairline ring · focus-visible: accent ring · active: 0.96 · disabled: 30% · loading: ring draws. `aria-label` required.
- **Navigation bar** (desktop + mobile menu) + how the DESIGO® black write/un-write logo loop sits in it: transparent `DesigoNav`, 72 px: the DESIGO® wordmark is the black write/un-write infinite loop (charcoal `#171918` on light grounds, white `#FFFFFF`/milk on dark; it never changes colour, never takes a variant hue and is never re-drawn in the style); logo left, six links, RESERVE as a framed underline; hides on scroll down, returns on up (240 ms). Mobile: 56 px; menu opens a full-screen milk sheet with Fraunces 300 links at 2.4rem, focus trapped, Esc closes, `aria-expanded` on the toggle.
- **Cursor** (states: default · hover · ROTATE · EXPLORE · ENTER · VIEW · TRACE); touch fallback: default: 10 px ink dot, `mix-blend-mode: difference` · hover: 36 px ring, 1 px stroke · ROTATE: 64 px ring `DRAG` (360 frames present) or `TILT` (single render) on the bottle · EXPLORE: ring `EXPLORE` on the orbit words and breed index · ENTER: ring `ENTER` on /milk bottles (shared-element transition) · VIEW: ring `PLAY` / `VIEW` on media · TRACE: ring `TRACE` on trace nodes · disabled/pending: dotted ring. Hidden on touch.
- **Card / panel / info block**: no cards: information is a definition list or side sheet on milk; side sheet (trace) = `--c-surface`, width 420 px, 1 px left hairline, padding 32 px, slides 24 px (600 ms). Focus-visible on close: accent ring; Esc closes; loading: AssetSlot (1 px dashed frame, mono label naming the missing file).
- **Badge / tag** (incl. "pending verification" and "DEMO · not live data"): no badges by default; text tags only. Pending verification: `ClaimText` dotted underline (1 px `--c-pending`) + tooltip "awaiting confirmation"; DEMO · not live data: label-size `DEMO · NOT LIVE DATA` in charcoal with a 1 px frame, always visible on demo content; pill radius allowed only here.
- **Input + form field** (Trace-your-milk bottle ID): single input line on charcoal: JetBrains Mono 2rem, 1 px milk bottom rule, 64 px high, label above in caps, prefilled `DSG-BTL-000001-3 (sample format)`. Default · hover: rule 2 px · focus-visible: 2 px `#7FE0B8` ring · active: caret · disabled: 40% · loading: rule draws left → right · result: lines reveal (`aria-live=polite`), `isDemo` always shown · error: text "No record for this ID". /reserve inputs: 48 px on `--c-surface`.
- **Divider / ornament**: a single 1 px hairline; a gold 0.5 px rule only in Heritage and Ghee; the wave-"E" from the wordmark is the only brand glyph.
- **Section header** (chapter number + title pattern): label `06 — TRACEABILITY` (Inter Tight caps, muted) above a Fraunces 300 line; mega headlines use a mask reveal; one subject per viewport.
- **Product info block** (variant name, code, price-pending, size, descriptors): right column definition list: V-code label in mono, name in display type, editorial line, descriptors as a plain list; code `DESIGO® V1+` / `V1` / `V2` / `V3`; price from `desigo.ts` rendered as pending (e.g. ₹94 with dotted underline + tooltip "pending approval · pack size not stated"); size "1 L glass · 900 g" pending; descriptors list with pending items dotted-underlined; price shown only when approved, else `₹— · awaiting confirmation`; `RESERVE ———→`.
- **Bottle stage** (how Bottle / Bottle360Viewer is framed: plinth, glow, shadow, background): the bottle alone at ~62vh on `--milk` (48vh mobile), two-layer contact shadow, idle float ±8 px / 6 s, pointer tilt ±6° (perspective 1200 px) with a soft sheen following the pointer. Single render: ±20° skew-and-sheen, never a fake spin. 360 frames: scroll (ch. 02) or drag (ch. 08, /milk/[variant]) maps to frame index, inertia 0.92/frame, a hairline 0°–360° scale beneath that fills as it turns.
- **Trace node / timeline step**: eight 10 px dots joined by a 1 px line on forest; one pulse travels. Default: milk dot · hover: 36 px ring · focus-visible: accent ring · active: filled `#7FE0B8`, side sheet opens · disabled/not reached: 40% · loading: pulse. Nodes are buttons, Esc closes the sheet; "Illustrative journey — not live data" always visible.

### 12.5 Iconography & illustration
Icons: 1.25 px monoline, round caps, 24 px grid, only where a label cannot do the job (play, close, arrow, drag-to-rotate). Illustration: seven 1.25 px line drawings for the journey (E1–E7 style) and one cow line drawing for Heritage. Photo treatment: real DESIGO® photographs only, full-bleed or one large size, never collaged; grade: lifted blacks, warm whites (+4 warmth), greens −10; products as transparent renders with contact shadow.

### 12.6 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` | reveals (lines rise 24 px, 80 ms stagger) |
| `--ease-inout` | `cubic-bezier(.65,0,.35,1)` | scene changes, milk veil page transition |
| `--ease-milk` | `cubic-bezier(.22,.9,.24,1)` | bottle travel |
| `--dur-micro` | `240ms` | arrow travel, underline |
| `--dur-reveal` | `600ms` | text reveal, frame draw |
| `--dur-scene` | `1200ms` | scene change |
| `--dur-veil` | `700ms` | milk veil wipe between pages |
| `--lerp` | `0.09` | Lenis smooth scroll |

One primary motion per viewport; ScrollTrigger `scrub: 1`; nothing loops except the 6 s idle float; View Transitions carry the bottle from /milk to /milk/[variant] (fade fallback). Reduced motion: no pinning or scrub, chapters stack as a document, bottle static at 0°, reveals instant.

### 12.7 AI image generation prompts
House rules: no text/letters/logos/watermarks in images; generated images are illustration, texture or backdrop only; never
generate the bottle or ghee jar; zebu cows only, shown with respect; append the style's tail prompt to every prompt.

**Tail prompt (append to every prompt below):** *warm natural light, restrained premium palette of milk white #F7F4EC, deep forest green #0B3B32, earth brown #8C6A43 and warm gold #C8A96B, subtle film grain, editorial, calm, high-end, no text, no watermark, no logo, no letters, minimal, generous negative space*

| # | File path (web/public/desigo/styles/minimalism/...) | Size / ratio | Transparent? | Prompt | Negative prompt | Used in |
|---|---|---|---|---|---|---|
| MIN-H1 | `web/public/desigo/styles/minimalism/hero-milk-surface.png` | 3200×2000 (16:10) | no | Top-down macro of a still surface of fresh whole milk with a single slow ripple at the far edge, soft overcast light, creamy white, almost empty | base negatives + splashes, bubbles, cups, hands | Ch. 01 hero optional ground (behind the bottle at 30%), ch. 09 breath |
| MIN-H2 | `web/public/desigo/styles/minimalism/hero-milk-surface-portrait.png` | 1400×2400 (7:12) | no | Vertical top-down macro of a still milk surface with one faint ripple near the top, soft overcast light, creamy white, empty | base negatives + splashes, bubbles, cups, hands | Ch. 01 hero (mobile) |
| MIN-V1 | `web/public/desigo/styles/minimalism/sweep-sage.png` | 3200×2000 + 1400×2400 portrait | no | Seamless studio paper sweep in soft sage #D9E8DF, gentle light from upper left, no objects, no horizon line, completely empty | base negatives + props, plants, shadows of objects | MASTER 26 field (optional texture under the flat colour) |
| MIN-V2 | `web/public/desigo/styles/minimalism/sweep-blush.png` | 3200×2000 + 1400×2400 portrait | no | Seamless studio paper sweep in pale blush #F3D9D6 with one faint warm horizon tone at 62% height, soft even light, completely empty | base negatives + props, shadows of objects | ROOT 14 field |
| MIN-V3 | `web/public/desigo/styles/minimalism/sweep-butter.png` | 3200×2000 + 1400×2400 portrait | no | Seamless studio paper sweep in pale amber #F8E4C2 with a very soft golden-hour light falling from the upper left, completely empty | base negatives + sun disc, props, flares | BASE 3 field |
| MIN-V4 | `web/public/desigo/styles/minimalism/sweep-ivory.png` | 3200×2000 + 1400×2400 portrait | no | Seamless studio paper sweep in warm ivory #F4EDE2, almost milk white, perfectly even soft light, completely empty | base negatives + props, shadows, vignetting | ESSENTIAL field |
| MIN-J1 | `web/public/desigo/styles/minimalism/line-journey-cow.png` | 1600×1600 (1:1) | yes (real alpha) | Single-weight 1.25 px hand-drawn ink line drawing of an Indian zebu cow grazing, hump and dewlap visible, no shading, forest-green #0B3B32 line on transparent background, generous white space | base negatives + shading, hatching, colour fills, cartoon face | Ch. 03 station 1 (set matches house brief E1–E7) |
| MIN-J2 | `web/public/desigo/styles/minimalism/line-heritage-cow.png` | 1600×1200 (4:3) | yes (real alpha) | Single continuous fine line drawing of a resting zebu cow in profile, calm, minimal, forest-green line on transparent background | base negatives + shading, colour, decorative border | Ch. 10 Heritage |
| MIN-J3 | `web/public/desigo/styles/minimalism/thar-dawn-minimal.png` | 3600×2000 (9:5) | no | Very minimal wide view of the Thar desert edge at dawn, low khejri trees as small silhouettes on the horizon, vast pale sky occupying 80% of the frame, muted gold and sage | base negatives + people, vehicles, buildings, dramatic clouds | Ch. 04 placeholder only until the real farm landscape (B1) arrives; labelled as illustration |
| MIN-T1 | `web/public/desigo/styles/minimalism/grain-overlay.png` | 1024×1024, seamless | no | Seamless monochrome photographic film grain on mid-grey, fine, even | base negatives + scratches, dust, colour noise | 2% grain layer (z 100) |
| MIN-T2 | `web/public/desigo/styles/minimalism/linen-milk.png` | 2048×2048, seamless | no | Seamless tileable fine linen cloth texture in milk white #F7F4EC, extremely subtle weave, flat lighting | base negatives + folds, stains, colour | /reserve and /about ground (optional) |

Base negatives (apply to every prompt): *text, letters, numbers, logo, watermark, signature, label, product bottle, glass bottle, jar, packaging, Holstein or Jersey cattle, cartoon mascot, deity or religious icon, distorted anatomy, oversaturated, HDR, low resolution*. Minimalism prefers one real exceptional photograph to many generated ones: an `AssetSlot` is more premium than a fake. Variant fields remain flat CSS colour; the sweeps are optional micro-texture.

### 12.8 Prototype acceptance checklist
- [ ] Tokens from `specs/01_minimalism.json` applied; no off-palette colours
- [ ] Fonts self-hosted; correct weights load
- [ ] All 12.4 components built with all states
- [ ] Hero + bottle-story + one product world + trace chapter built in this style (the comparison set)
- [ ] Mobile 360 px pass; reduced-motion pass; contrast checked
- [ ] Claims rules respected (pending underline, no blocked claims, DEMO labels)
- [ ] Screenshots: desktop 1440×900 ×4 + mobile 390×844 ×2 saved to docs/media/styles/minimalism/
